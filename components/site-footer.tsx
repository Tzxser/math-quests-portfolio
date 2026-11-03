import { Sigma } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center sm:flex-row sm:justify-between sm:px-6 sm:text-left">
        <div className="flex items-center gap-2.5">
          <span className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Sigma className="size-4" strokeWidth={2.5} />
          </span>
          <span className="text-sm font-semibold">
            桂林信息科技学院数学建模协会
          </span>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          桂林信息科技学院数学建模协会 · 2026 招新
        </p>
      </div>
    </footer>
  )
}
