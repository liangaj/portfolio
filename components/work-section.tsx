import { ProjectCard } from "@/components/project-card"
import { figmaProjects, storyboardProjects } from "@/lib/projects"

export function WorkSection() {
  const projects = [...figmaProjects, ...storyboardProjects]

  return (
    <section id="work" className="scroll-mt-16 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">
              01 — Selected work
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Figma app designs &amp; storyboards
            </h2>
          </div>
          <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
            End-to-end product work, from framing the problem with storyboards
            to shipping high-fidelity, accessible interfaces.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
