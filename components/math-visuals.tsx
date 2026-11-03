import { cn } from '@/lib/utils'

/**
 * Programmatic, decorative math/data visuals rendered as inline SVG.
 * All are aria-hidden — they set the "modeling" atmosphere without carrying meaning.
 */

/** A drifting field of scatter dots + a smooth curve, sized to its container. */
export function ScatterCurve({ className }: { className?: string }) {
  const points = [
    [40, 190],
    [80, 150],
    [120, 165],
    [150, 120],
    [190, 130],
    [230, 90],
    [270, 100],
    [300, 60],
    [340, 72],
    [380, 40],
  ]
  const path =
    'M40 195 C 110 150, 150 150, 210 110 S 320 70, 388 38'

  return (
    <svg
      viewBox="0 0 420 220"
      fill="none"
      aria-hidden="true"
      className={cn('h-full w-full', className)}
    >
      <path
        d={path}
        stroke="var(--brand)"
        strokeWidth="2.5"
        className="animate-dash"
        opacity="0.7"
      />
      <path
        d={`${path} L 388 210 L 40 210 Z`}
        fill="var(--brand)"
        opacity="0.06"
      />
      {points.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i % 3 === 0 ? 4.5 : 3}
          fill="var(--brand)"
          opacity={0.55 + (i % 3) * 0.12}
        />
      ))}
    </svg>
  )
}

/** A small node-link network — evokes graph models. */
export function NodeNetwork({ className }: { className?: string }) {
  const nodes = [
    [30, 40],
    [95, 20],
    [150, 70],
    [70, 105],
    [140, 130],
    [30, 120],
  ]
  const edges = [
    [0, 1],
    [0, 3],
    [1, 2],
    [2, 4],
    [3, 4],
    [3, 5],
    [2, 3],
  ]
  return (
    <svg
      viewBox="0 0 180 160"
      fill="none"
      aria-hidden="true"
      className={cn('h-full w-full', className)}
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="var(--brand)"
          strokeWidth="1.5"
          opacity="0.4"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i === 2 ? 7 : 5}
          fill={i === 2 ? 'var(--brand)' : 'var(--background)'}
          stroke="var(--brand)"
          strokeWidth="2"
        />
      ))}
    </svg>
  )
}

/** Mini line chart for cards. */
export function MiniLine({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 56"
      fill="none"
      aria-hidden="true"
      className={cn('h-full w-full', className)}
    >
      <path
        d="M4 48 L 26 30 L 48 38 L 70 16 L 92 24 L 116 6"
        stroke="var(--brand)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {[
        [4, 48],
        [26, 30],
        [48, 38],
        [70, 16],
        [92, 24],
        [116, 6],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.5" fill="var(--brand)" />
      ))}
    </svg>
  )
}

/** Mini scatter for cards. */
export function MiniScatter({ className }: { className?: string }) {
  const pts = [
    [12, 44],
    [30, 30],
    [22, 18],
    [48, 38],
    [58, 20],
    [74, 30],
    [88, 12],
    [100, 26],
    [110, 16],
  ]
  return (
    <svg
      viewBox="0 0 120 56"
      fill="none"
      aria-hidden="true"
      className={cn('h-full w-full', className)}
    >
      <line
        x1="4"
        y1="6"
        x2="4"
        y2="50"
        stroke="var(--border)"
        strokeWidth="1.5"
      />
      <line
        x1="4"
        y1="50"
        x2="116"
        y2="50"
        stroke="var(--border)"
        strokeWidth="1.5"
      />
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="var(--brand)" opacity="0.7" />
      ))}
    </svg>
  )
}

/** Mini bars for cards. */
export function MiniBars({ className }: { className?: string }) {
  const bars = [16, 30, 22, 40, 34, 48]
  return (
    <svg
      viewBox="0 0 120 56"
      fill="none"
      aria-hidden="true"
      className={cn('h-full w-full', className)}
    >
      {bars.map((h, i) => (
        <rect
          key={i}
          x={6 + i * 19}
          y={52 - h}
          width="12"
          height={h}
          rx="2"
          fill="var(--brand)"
          opacity={0.4 + i * 0.1}
        />
      ))}
    </svg>
  )
}

/** Mini matrix / dot grid for cards. */
export function MiniMatrix({ className }: { className?: string }) {
  const rows = 4
  const cols = 6
  return (
    <svg
      viewBox="0 0 120 56"
      fill="none"
      aria-hidden="true"
      className={cn('h-full w-full', className)}
    >
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => {
          const active = (r + c) % 3 === 0
          return (
            <circle
              key={`${r}-${c}`}
              cx={12 + c * 19}
              cy={10 + r * 12}
              r={active ? 3.5 : 2}
              fill="var(--brand)"
              opacity={active ? 0.8 : 0.3}
            />
          )
        }),
      )}
    </svg>
  )
}
