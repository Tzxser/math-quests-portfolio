import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { NodeNetwork, MiniLine, ScatterCurve } from '@/components/math-visuals'

const COMPETITIONS = [
  {
    code: 'CUMCM',
    name: '全国大学生数学建模竞赛',
    desc: '用数学方法和计算机技术解决真实问题，是国内大学生数学建模的重要赛事之一。',
    tags: ['国内代表性赛事', '三人团队', '现实问题'],
    visual: ScatterCurve,
  },
  {
    code: 'MathorCup',
    name: '数学应用挑战赛',
    desc: '强调数学方法与行业、实际问题结合，训练跨学科分析和应用能力。',
    tags: ['实际应用', '跨学科', '数学 + 计算机'],
    visual: MiniLine,
  },
  {
    code: 'MCM / ICM',
    name: '国际数学建模竞赛',
    desc: '以团队形式分析开放问题、建立模型并完成英文解决方案报告。',
    tags: ['国际赛事', '团队协作', '英文报告'],
    visual: NodeNetwork,
  },
]

export function CompetitionsSection() {
  return (
    <section
      id="competitions"
      className="relative scroll-mt-16 overflow-hidden border-t border-border bg-primary py-20 text-primary-foreground md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-[0.12]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <Reveal>
            <div className="mb-3 flex items-center gap-3">
              <span className="font-mono text-sm font-semibold">04</span>
              <span className="h-px w-8 bg-primary-foreground/40" />
              <span className="font-mono text-xs uppercase tracking-widest text-primary-foreground/70">
                Contests you'll meet
              </span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              我们会遇见哪些比赛？
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-pretty text-base leading-relaxed text-primary-foreground/80">
              建模的价值最终会在赛场上被检验。这几项赛事，是很多队伍一起走过的路。
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {COMPETITIONS.map((c, i) => (
            <Reveal key={c.code} delay={i * 110}>
              <div className="group flex h-full flex-col rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-primary-foreground/10 sm:p-7">
                <div className="mb-5 h-16 opacity-80 [--brand:var(--color-primary-foreground)]">
                  <c.visual />
                </div>
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary-foreground/60">
                  {c.code}
                </span>
                <h3 className="mt-1 text-lg font-bold">{c.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-primary-foreground/75">
                  {c.desc}
                </p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {c.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded border border-primary-foreground/20 px-2 py-1 font-mono text-[11px] text-primary-foreground/80"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
