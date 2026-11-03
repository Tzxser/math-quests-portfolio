import { Telescope, Database, FunctionSquare, FileText } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const STEPS = [
  {
    no: '01',
    icon: Telescope,
    title: '看懂问题',
    desc: '把一个现实问题拆成目标、条件、变量和约束。',
  },
  {
    no: '02',
    icon: Database,
    title: '处理数据',
    desc: '找资料、整理数据、观察规律，让判断不只靠感觉。',
  },
  {
    no: '03',
    icon: FunctionSquare,
    title: '建立模型',
    desc: '用数学、统计和代码描述问题，计算、模拟并验证结果。',
  },
  {
    no: '04',
    icon: FileText,
    title: '讲清答案',
    desc: '用图表和论文把思路、方法、结果与结论完整表达出来。',
  },
]

export function WhatSection() {
  return (
    <section id="what" className="scroll-mt-16 border-t border-border bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="01"
          eyebrow="What we actually do"
          title="数学建模到底在做什么？"
          description="它不是坐着做很难的数学题。更多时候，它是一条从现实问题走到可信结论的完整路径。"
        />

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.no} delay={i * 90}>
              <div className="group relative h-full overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <step.icon className="size-5" />
                    </span>
                    <span className="font-mono text-3xl font-bold text-border transition-colors group-hover:text-primary/30">
                      {step.no}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
                {/* connector arrow on desktop */}
                {i < STEPS.length - 1 && (
                  <span className="absolute -right-2 top-1/2 z-10 hidden size-4 -translate-y-1/2 rotate-45 border-r border-t border-primary/40 bg-background lg:block" />
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
