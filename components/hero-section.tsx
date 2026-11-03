import Image from 'next/image'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { ScatterCurve } from '@/components/math-visuals'
import posterImg from '@/public/assets/recruitment-poster.png'

const TAGS = ['数学建模', '数据分析', '编程', '论文写作', '团队协作']

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-background pt-28 pb-16 sm:pt-32 md:pb-24"
    >
      {/* programmatic backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_75%_60%_at_50%_35%,black,transparent)]" />
      <div className="pointer-events-none absolute -left-24 top-24 size-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 size-80 rounded-full bg-[var(--brand-soft)]/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-8 h-40 opacity-60 animate-drift">
        <ScatterCurve className="mx-auto max-w-5xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        {/* Left — copy */}
        <div>
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3 py-1 font-mono text-xs font-medium tracking-wide text-primary">
              <span className="flex size-1.5 rounded-full bg-primary" />
              2026 NEW MEMBER RECRUITMENT
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-balance text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              把现实问题，
              <br />
              变成可以<span className="text-gradient-brand">计算的答案</span>。
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              数学建模不只是数学。这里有数据、代码、模型、论文，也有三个人一起解决一个真实问题的过程。
            </p>
          </Reveal>

          <Reveal delay={240}>
            <ul className="mt-7 flex flex-wrap gap-2">
              {TAGS.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md border border-border bg-secondary px-3 py-1.5 font-mono text-xs font-medium text-secondary-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                render={<a href="#join" />}
                nativeButton={false}
                size="lg"
                className="group h-12 gap-2 px-6 text-base font-semibold shadow-lg shadow-primary/20 transition-shadow hover:shadow-xl hover:shadow-primary/30"
              >
                立即加入
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                render={<a href="#what" />}
                nativeButton={false}
                size="lg"
                variant="outline"
                className="group h-12 gap-2 px-6 text-base font-semibold"
              >
                看看我们在做什么
                <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Right — floating poster card */}
        <Reveal delay={200} className="flex justify-center lg:justify-end">
          <div className="relative animate-float-slow [--rot:3deg]">
            {/* decorative back plate */}
            <div className="absolute -inset-3 -z-10 rounded-2xl border border-primary/20 bg-primary/5" />
            <div className="absolute -right-4 -top-4 -z-10 hidden size-24 rounded-xl border border-border bg-background/60 backdrop-blur sm:block" />
            <div className="w-[240px] overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-primary/10 sm:w-[280px]">
              <Image
                src={posterImg}
                alt="数学建模协会 2026 招新海报：这里招人，欢迎加入数学建模协会"
                placeholder="blur"
                priority
                sizes="(max-width: 640px) 240px, 280px"
                className="h-auto w-full"
              />
            </div>
            {/* corner data chip */}
            <div className="absolute -bottom-5 -left-5 rounded-lg border border-border bg-card px-3 py-2 shadow-lg">
              <p className="font-mono text-[10px] text-muted-foreground">members</p>
              <p className="font-mono text-sm font-bold text-primary">f(x) → ✓</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
