import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { researchProjects } from "@/lib/projects"

export function ResearchSection() {
  return (
    <section id="research" className="scroll-mt-16 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">
            02 — Research
          </p>
          <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Studies that start with people, not pixels
          </h2>
        </div>

        <ul className="flex flex-col divide-y divide-border/60 border-y border-border/60">
          {researchProjects.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/work/${project.slug}`}
                className="group grid grid-cols-1 items-center gap-6 py-8 md:grid-cols-[200px_1fr_auto]"
              >
                <div className="relative aspect-[4/3] w-full max-w-[200px] overflow-hidden rounded-lg border border-border bg-secondary">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.imageAlt}
                    fill
                    sizes="200px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-center gap-3 font-mono text-xs text-muted-foreground">
                    <span>{project.year}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.tools.join(", ")}</span>
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-primary md:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                </div>

                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
