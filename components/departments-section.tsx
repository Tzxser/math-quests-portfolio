import { GraduationCap, CalendarCog, Megaphone, ClipboardList } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const DEPARTMENTS = [
  {
    icon: GraduationCap,
    name: '学术部',
    en: 'Academic',
    desc: '软件培训、论文培训、数学模型分析、建模比赛参与及相关学术工作。',
  },
  {
    icon: CalendarCog,
    name: '组织部',
    en: 'Organization',
    desc: '活动组织策划、人员安排、场地与设备协调、活动现场布置。',
  },
  {
    icon: Megaphone,
    name: '宣策部',
    en: 'Publicity',
    desc: '活动宣传、海报绘制、摄影、PPT、新闻稿以及 QQ 等宣传工作。',
  },
  {
    icon: ClipboardList,
    name: '办公室',
    en: 'Office',
    desc: '第二课堂、成员日常培训签到、课管及办公室财务安全等日常事务。',
  },
]

export function DepartmentsSection() {
  return (
    <section
      id="departments"
      className="scroll-mt-16 border-t border-border bg-secondary/40 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="06"
          eyebrow="Where you'll fit in"
          title="你想在哪个位置一起做事？"
          description="协会不是只有做题的人。四个部门，各有各的分工，也各有各要练的本事。"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DEPARTMENTS.map((dept, i) => (
            <Reveal key={dept.name} delay={i * 90}>
              <div className="group relative h-full overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                <span className="pointer-events-none absolute right-4 top-4 font-mono text-[11px] uppercase tracking-wider text-border transition-colors group-hover:text-primary/40">
                  {dept.en}
                </span>
                <span className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <dept.icon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{dept.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {dept.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
