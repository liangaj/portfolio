import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      {/* techy grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          Available for full-time UI/UX  &amp; SWE
        </div>

        <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
          Designing and building {" "}
          <span className="text-primary">intuitive digital experiences.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          I&apos;m Amy Liang, a Computer Science graduate with a minor in UX Design. 
          I combine user-centered design with software engineering to create accessible, 
          thoughtful digital products.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            View selected work
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card"
          >
            Get in touch
          </Link>
        </div>

        <dl className="mt-16 grid max-w-2xl grid-cols-2 gap-8 border-t border-border/60 pt-8 sm:grid-cols-4">
          {[
            { value: "5+", label: "Case studies" },
            { value: "20+", label: "Interviews run" },
            { value: "WCAG", label: "Accessibility-first" },
            { value: "3 yrs", label: "Design practice" },
          ].map((stat) => (
            <div key={stat.label}>
              <dt className="text-2xl font-semibold tracking-tight">
                {stat.value}
              </dt>
              <dd className="mt-1 font-mono text-xs text-muted-foreground">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
