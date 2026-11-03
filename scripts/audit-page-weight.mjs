#!/usr/bin/env node

import { execFileSync } from 'node:child_process'
import { URL } from 'node:url'

const target = process.argv[2] || 'https://math.xinciqq.top/'
const bandwidthMbps = Number(process.argv[3] || 4)

function runCurl(args, encoding = 'utf8') {
  return execFileSync('curl', args, {
    encoding,
    maxBuffer: 64 * 1024 * 1024,
    stdio: ['ignore', 'pipe', 'pipe'],
  })
}

function absolute(raw, base) {
  try {
    if (!raw || raw.startsWith('data:') || raw.startsWith('blob:') || raw.startsWith('#')) return null
    const u = new URL(raw, base)
    if (!['http:', 'https:'].includes(u.protocol)) return null
    return u.href
  } catch {
    return null
  }
}

function extractHtmlAssets(html, base) {
  const out = new Set()

  const tags = html.match(/<(script|img|link|source)\b[^>]*>/gi) || []
  for (const tag of tags) {
    const name = /^<(\w+)/i.exec(tag)?.[1]?.toLowerCase()
    const rel = /\brel=["']([^"']+)["']/i.exec(tag)?.[1]?.toLowerCase() || ''

    if (name === 'link' && rel && !/(stylesheet|preload|modulepreload|icon)/.test(rel)) continue

    for (const attr of ['src', 'href']) {
      const m = new RegExp(`\\b${attr}=["']([^"']+)["']`, 'i').exec(tag)
      const u = absolute(m?.[1], base)
      if (u) out.add(u)
    }

    const srcset = /\bsrcset=["']([^"']+)["']/i.exec(tag)?.[1]
    if (srcset) {
      for (const candidate of srcset.split(',')) {
        const raw = candidate.trim().split(/\s+/)[0]
        const u = absolute(raw, base)
        if (u) out.add(u)
      }
    }
  }

  return out
}

function extractCssAssets(css, base) {
  const out = new Set()
  const re = /url\(\s*["']?([^"')]+)["']?\s*\)/gi
  let m
  while ((m = re.exec(css))) {
    const u = absolute(m[1], base)
    if (u) out.add(u)
  }
  return out
}

function curlBody(url) {
  return runCurl([
    '-sS', '-L', '--compressed',
    '--connect-timeout', '8', '--max-time', '30',
    '-A', 'Mozilla/5.0 SiteWeightAudit/1.0',
    url,
  ])
}

function curlStats(url) {
  try {
    const raw = runCurl([
      '-sS', '-L', '--compressed', '-o', '/dev/null',
      '--connect-timeout', '8', '--max-time', '30',
      '-A', 'Mozilla/5.0 SiteWeightAudit/1.0',
      '-w', '%{size_download}\t%{content_type}\t%{http_code}\t%{url_effective}',
      url,
    ]).trim()
    const [size, contentType, code, effective] = raw.split('\t')
    return {
      url,
      effectiveUrl: effective || url,
      bytes: Number(size || 0),
      contentType: contentType || '',
      status: Number(code || 0),
    }
  } catch (error) {
    return { url, effectiveUrl: url, bytes: 0, contentType: '', status: 0, error: String(error?.message || error) }
  }
}

function category(item) {
  const ct = item.contentType.toLowerCase()
  const path = new URL(item.effectiveUrl).pathname.toLowerCase()
  if (ct.includes('text/html')) return 'HTML'
  if (ct.includes('text/css') || path.endsWith('.css')) return 'CSS'
  if (ct.includes('javascript') || path.endsWith('.js') || path.endsWith('.mjs')) return 'JS'
  if (ct.startsWith('image/') || /\.(png|jpe?g|webp|avif|gif|svg|ico)$/.test(path)) return 'Image'
  if (ct.includes('font') || /\.(woff2?|ttf|otf)$/.test(path)) return 'Font'
  return 'Other'
}

function fmtBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 ** 2) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / 1024 ** 2).toFixed(2)} MB`
}

function fmtSec(seconds) {
  if (seconds < 10) return `${seconds.toFixed(1)} s`
  if (seconds < 60) return `${seconds.toFixed(0)} s`
  return `${(seconds / 60).toFixed(1)} min`
}

console.log(`Auditing: ${target}`)
console.log(`Assumed server egress: ${bandwidthMbps} Mbps`)
console.log('')

let html
try {
  html = curlBody(target)
} catch (error) {
  console.error('Failed to download page HTML with curl.')
  console.error(String(error?.message || error))
  process.exit(1)
}

const base = new URL(target).href
const assets = extractHtmlAssets(html, base)

// Follow CSS url(...) references (fonts/background images).
for (const cssUrl of [...assets].filter((u) => new URL(u).pathname.toLowerCase().endsWith('.css'))) {
  try {
    const css = curlBody(cssUrl)
    for (const u of extractCssAssets(css, cssUrl)) assets.add(u)
  } catch {
    // Keep the CSS resource in the audit even if nested parsing fails.
  }
}

const urls = [base, ...assets]
const rows = urls.map(curlStats)
const okRows = rows.filter((r) => r.status >= 200 && r.status < 400)
const failures = rows.filter((r) => !(r.status >= 200 && r.status < 400))

const totals = new Map()
for (const row of okRows) {
  const c = category(row)
  totals.set(c, (totals.get(c) || 0) + row.bytes)
}

const totalBytes = okRows.reduce((sum, r) => sum + r.bytes, 0)
const overheadFactor = 1.15
const effectiveBytes = totalBytes * overheadFactor
const users = [1, 5, 10, 20, 30, 50, 100]

console.log('=== Estimated cold-load transfer ===')
console.log(`Resources: ${okRows.length}${failures.length ? ` (+${failures.length} failed)` : ''}`)
console.log(`Body bytes observed by curl: ${fmtBytes(totalBytes)}`)
console.log(`Planning bytes (+15% protocol/TLS overhead): ${fmtBytes(effectiveBytes)}`)
console.log('')

console.log('By type:')
for (const [type, bytes] of [...totals.entries()].sort((a, b) => b[1] - a[1])) {
  console.log(`  ${type.padEnd(7)} ${fmtBytes(bytes)}`)
}

console.log('')
console.log('Largest resources:')
for (const row of [...okRows].sort((a, b) => b.bytes - a.bytes).slice(0, 15)) {
  const short = row.effectiveUrl.replace(/^https?:\/\//, '')
  console.log(`  ${fmtBytes(row.bytes).padStart(10)}  ${category(row).padEnd(6)}  ${short}`)
}

console.log('')
console.log(`=== 4 Mbps-style contention estimate (${bandwidthMbps} Mbps shared egress) ===`)
console.log('Assumption: all listed users start a completely cold load at nearly the same time, no CDN, and share the same server egress.')
for (const n of users) {
  const seconds = effectiveBytes * 8 * n / (bandwidthMbps * 1_000_000)
  console.log(`  ${String(n).padStart(3)} simultaneous cold visitors: ~${fmtSec(seconds)}`)
}

console.log('')
console.log('Interpretation: this is a bandwidth lower-bound / stress-planning estimate, not a precise browser load-time prediction. Browser cache, HTTP/2 reuse, image lazy-loading, server caching, and users arriving over several minutes can make real experience much better; origin congestion, packet loss, or CPU-heavy image optimization can make it worse.')

if (failures.length) {
  console.log('')
  console.log('Failed resources:')
  for (const row of failures) console.log(`  HTTP ${row.status || 'ERR'}  ${row.url}`)
}
