import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { getProject, projects } from "@/lib/projects"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: "Project not found" }
  return {
    title: `${project.title} — Alex Rivera`,
    description: project.summary,
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    notFound()
  }

  const index = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(index + 1) % projects.length]

  return (
    <>
      <SiteNav />
      <main>
        <article>
          {/* Header */}
          <header className="border-b border-border/60">
            <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to work
              </Link>

              <div className="mt-8 flex items-center gap-3 font-mono text-xs text-muted-foreground">
                <span className="rounded border border-border px-2 py-0.5 text-primary">
                  {project.categoryLabel}
                </span>
                <span>{project.year}</span>
              </div>

              <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
                {project.title}
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                {project.summary}
              </p>

              <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border/60 pt-8 sm:grid-cols-3">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Role
                  </dt>
                  <dd className="mt-1 text-sm">{project.role}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Timeline
                  </dt>
                  <dd className="mt-1 text-sm">{project.timeline}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Tools
                  </dt>
                  <dd className="mt-1 text-sm">{project.tools.join(", ")}</dd>
                </div>
              </dl>
            </div>
          </header>

          {/* Hero image */}
          <div className="border-b border-border/60 bg-secondary/40">
            <div className="mx-auto max-w-5xl px-6 py-12">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-secondary">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">
              Overview
            </p>
            <p className="text-balance text-xl leading-relaxed md:text-2xl">
              {project.overview}
            </p>

            {/* Outcomes */}
            <dl className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {project.outcomes.map((outcome) => (
                <div
                  key={outcome.label}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {outcome.label}
                  </dt>
                  <dd className="mt-2 text-3xl font-semibold tracking-tight text-primary">
                    {outcome.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Sections */}
            <div className="mt-16 flex flex-col gap-12">
              {project.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {section.heading}
                  </h2>
                  <div className="mt-4 flex flex-col gap-4">
                    {section.body.map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-pretty leading-relaxed text-muted-foreground"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>

          {/* Next project */}
          <div className="border-t border-border/60">
            <Link
              href={`/work/${next.slug}`}
              className="group mx-auto flex max-w-4xl items-center justify-between px-6 py-12"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Next project
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-tight transition-colors group-hover:text-primary md:text-3xl">
                  {next.title}
                </p>
              </div>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </Link>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
