import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Amy Liang. Designed &amp; built with love.
        </p>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="/#work" className="transition-colors hover:text-foreground">
            Work
          </Link>
          <Link href="/#research" className="transition-colors hover:text-foreground">
            Research
          </Link>
          <a
            href="mailto:aliang1903@gmail.com"
            className="transition-colors hover:text-foreground"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
