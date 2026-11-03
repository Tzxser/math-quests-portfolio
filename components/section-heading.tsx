import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  index: string
  eyebrow?: string
  title: string
  description?: string
  className?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  className,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      <Reveal>
        <div
          className={cn(
            'mb-3 flex items-center gap-3',
            align === 'center' && 'justify-center',
          )}
        >
          <span className="font-mono text-sm font-semibold text-primary">
            {index}
          </span>
          <span className="h-px w-8 bg-primary/40" />
          {eyebrow ? (
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {eyebrow}
            </span>
          ) : null}
        </div>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={140}>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  )
}
