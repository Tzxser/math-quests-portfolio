import { Trophy, Medal, Award } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { CountUp } from '@/components/count-up'

const AWARDS_2025 = [
  { icon: Trophy, count: 3, label: '广西赛区一等奖' },
  { icon: Medal, count: 4, label: '广西赛区二等奖' },
  { icon: Award, count: 10, label: '广西赛区三等奖' },
]

export function AchievementsSection() {
  return (
    <section className="border-t border-border bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="05"
          eyebrow="Not a blank résumé"
          title="这不是一张空白履历"
          description="这些是学校公开资料里的建模成绩——它们说明，这条路在我们学校一直有人认真走。"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          {/* Big number */}
          <Reveal>
            <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-2xl border border-border bg-card p-8 sm:p-10">
              <div className="pointer-events-none absolute -right-8 -top-8 size-40 rounded-full bg-primary/5 blur-2xl" />
              <div className="relative">
                <p className="flex items-baseline font-mono text-6xl font-bold tracking-tight text-primary sm:text-7xl">
                  <CountUp end={70} />
                  <span className="ml-1">+</span>
                </p>
                <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
                  学校公开资料显示，近 10 年我校学子在全国大学生数学建模竞赛中获得国家级和区级奖项 70 余项。
                </p>
              </div>
            </div>
          </Reveal>

          {/* 2025 breakdown */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                2025 · 全国大学生数学建模竞赛广西赛区
              </p>
              <div className="mt-6 grid flex-1 gap-4 sm:grid-cols-3">
                {AWARDS_2025.map((a) => (
                  <div
                    key={a.label}
                    className="flex flex-col items-center justify-center rounded-xl border border-border bg-secondary/50 p-5 text-center"
                  >
                    <a.icon className="mb-3 size-6 text-primary" />
                    <span className="font-mono text-3xl font-bold text-foreground">
                      <CountUp end={a.count} />
                    </span>
                    <span className="mt-1 text-xs leading-snug text-muted-foreground">
                      {a.label}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-6 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
                数学建模协会也参与承办校内相关建模活动与竞赛交流。
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
