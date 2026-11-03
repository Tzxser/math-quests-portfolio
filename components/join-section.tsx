'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { QrCode, X, ArrowRight, Copy, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import qrImg from '@/public/assets/qq-group-qr.jpeg'

const QQ_GROUP = 'DEMO'

export function JoinSection() {
  const [modalOpen, setModalOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [modalOpen])

  const copyGroup = async () => {
    try {
      await navigator.clipboard.writeText(QQ_GROUP)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // clipboard may be unavailable — number is visible on screen anyway
    }
  }

  return (
    <section
      id="join"
      className="relative scroll-mt-16 overflow-hidden border-t border-border bg-background py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black,transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-10 size-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid items-center gap-10 rounded-3xl border border-border bg-card p-8 shadow-xl shadow-primary/5 sm:p-12 md:grid-cols-[1.2fr_0.8fr] md:gap-12">
          {/* Copy */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3 py-1 font-mono text-xs font-medium text-primary">
                <span className="flex size-1.5 animate-pulse rounded-full bg-primary" />
                JOIN US · 2026
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                下一道题，
                <br />
                想和你一起做。
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
                此页面展示招新交互设计，真实联系信息未包含在展示版中。
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex items-center justify-between gap-3 rounded-lg border border-border bg-secondary px-4 py-2.5">
                  <div className="leading-tight">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      QQ 群号
                    </p>
                    <p className="font-mono text-lg font-bold tracking-wide text-foreground">
                      {QQ_GROUP}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={copyGroup}
                    className="flex size-9 items-center justify-center rounded-md border border-border bg-background text-muted-foreground transition-colors hover:text-primary"
                    aria-label="复制群号"
                  >
                    {copied ? (
                      <Check className="size-4 text-primary" />
                    ) : (
                      <Copy className="size-4" />
                    )}
                  </button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <Button
                onClick={() => setModalOpen(true)}
                size="lg"
                className="group mt-6 h-12 w-full gap-2 px-6 text-base font-semibold shadow-lg shadow-primary/20 sm:w-auto"
              >
                <QrCode className="size-4" />
                查看二维码
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Reveal>
          </div>

          {/* QR preview */}
          <Reveal delay={160} className="flex justify-center">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="group relative w-full max-w-[240px] overflow-hidden rounded-2xl border border-border bg-secondary/40 p-3 transition-transform hover:scale-[1.02]"
              aria-label="放大查看招新群二维码"
            >
              <Image
                src={qrImg}
                alt="桂林信息科技学院数学建模协会招新群二维码，展示版无群号"
                placeholder="blur"
                sizes="240px"
                className="h-auto w-full rounded-xl"
              />
              <span className="mt-2 block text-center font-mono text-xs text-muted-foreground">
                点击放大 · 展示占位图
              </span>
            </button>
          </Reveal>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="招新群二维码"
        >
          <div
            className="absolute inset-0 bg-foreground/70 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          />
          <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground"
              aria-label="关闭"
            >
              <X className="size-5" />
            </button>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              Scan to join
            </p>
            <h3 className="mt-1 text-lg font-bold">数学建模协会招新群</h3>
            <div className="mx-auto mt-4 max-w-[300px] overflow-hidden rounded-xl border border-border">
              <Image
                src={qrImg}
                alt="桂林信息科技学院数学建模协会招新群二维码，展示版无群号"
                placeholder="blur"
                sizes="300px"
                className="h-auto w-full"
              />
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              QQ 群号 ·{' '}
              <span className="font-mono font-bold text-foreground">
                {QQ_GROUP}
              </span>
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
