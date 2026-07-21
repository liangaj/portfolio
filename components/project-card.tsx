import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/lib/projects"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="relative z-10 group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/50"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-3 font-mono text-xs text-muted-foreground">
          <span className="rounded border border-border px-2 py-0.5 text-primary">
            {project.categoryLabel}
          </span>
          <span>{project.year}</span>
        </div>
        <h3 className="flex items-center gap-1.5 text-xl font-semibold tracking-tight">
          {project.title}
          <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
        </h3>
        <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
        <div className="mt-4 flex flex-wrap gap-2 pt-4">
          {project.tools.slice(0, 3).map((tool) => (
            <span
              key={tool}
              className="rounded-md bg-secondary px-2 py-1 font-mono text-[11px] text-secondary-foreground"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
