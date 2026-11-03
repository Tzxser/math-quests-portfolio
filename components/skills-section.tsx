import { Lightbulb, Code2, PenLine, Users } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import {
  MiniScatter,
  MiniLine,
  MiniBars,
  MiniMatrix,
} from '@/components/math-visuals'

const SKILLS = [
  {
    icon: Lightbulb,
    title: '建模思维',
    desc: '从大量信息里抓住真正值得解决的问题。',
    chart: MiniScatter,
  },
  {
    icon: Code2,
    title: '代码与数据',
    desc: '接触 Python、MATLAB 等工具，让模型真正跑起来。',
    chart: MiniLine,
  },
  {
    icon: PenLine,
    title: '论文与表达',
    desc: '把复杂过程整理成结构完整、逻辑清楚的竞赛论文。',
    chart: MiniBars,
  },
  {
    icon: Users,
    title: '团队协作',
    desc: '在有限时间里完成建模、编程、写作之间的配合。',
    chart: MiniMatrix,
  },
]

export function SkillsSection() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-secondary/40 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="02"
          eyebrow="What you'll practice"
          title="加入以后，你会练到什么？"
          description="不是空洞的“提升能力”。这四件事，会在一次次训练和比赛里被反复用到。"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {SKILLS.map((skill, i) => (
            <Reveal key={skill.title} delay={i * 90}>
              <div className="group flex h-full items-start gap-5 rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 sm:p-7">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <skill.icon className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold">{skill.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {skill.desc}
                  </p>
                </div>
                <div className="hidden h-12 w-24 shrink-0 opacity-70 transition-opacity group-hover:opacity-100 sm:block">
                  <skill.chart />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
