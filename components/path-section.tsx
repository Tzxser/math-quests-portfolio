import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const STAGES = [
  {
    no: '01',
    title: '基础准备',
    desc: '文献与资料搜索、论文格式、数学软件使用、竞赛基本规则。',
    tags: ['文献检索', '论文格式', '数学软件', '竞赛规则'],
  },
  {
    no: '02',
    title: '专题训练',
    desc: '围绕常见模型学习解题思路，例如随机模型、预测模型、仿真模拟等。',
    tags: ['随机模型', '预测模型', '仿真模拟'],
  },
  {
    no: '03',
    title: '实战演练',
    desc: '通过模拟练习熟悉比赛节奏、时间安排、任务分配和团队配合。',
    tags: ['模拟赛', '时间安排', '任务分配', '论文提交'],
  },
]

export function PathSection() {
  return (
    <section id="path" className="scroll-mt-16 border-t border-border bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="03"
          eyebrow="From zero to the contest"
          title="从零到上场"
          description="学校的数学建模培训通常分为三个阶段，一步步把新手带到能参赛的状态。"
        />

        <div className="relative mt-12">
          {/* vertical / horizontal track line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent md:left-0 md:right-0 md:top-[27px] md:bottom-auto md:h-px md:w-full md:bg-gradient-to-r" />

          <ol className="grid gap-8 md:grid-cols-3 md:gap-6">
            {STAGES.map((stage, i) => (
              <Reveal as="li" key={stage.no} delay={i * 130} className="relative">
                {/* node marker */}
                <div className="mb-5 flex items-center gap-4 md:mb-6">
                  <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background font-mono text-sm font-bold text-primary">
                    {stage.no}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground md:hidden">
                    Stage
                  </span>
                </div>

                <div className="ml-14 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40 md:ml-0">
                  <h3 className="text-xl font-bold">{stage.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {stage.desc}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {stage.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded border border-border bg-secondary px-2 py-1 font-mono text-[11px] text-muted-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={120}>
          <p className="mt-12 rounded-xl border border-dashed border-primary/30 bg-primary/5 px-6 py-5 text-center text-base font-medium text-foreground">
            你不需要在第一天就会所有东西，重要的是
            <span className="text-primary">愿意开始学</span>。
          </p>
        </Reveal>
      </div>
    </section>
  )
}
