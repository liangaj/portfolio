import { Code2, ArrowUpRight, Terminal } from "lucide-react"

type EngineeringProject = {
  title: string
  description: string
  stack: string[]
  year: string
  repo?: string
  live?: string
}

const engineeringProjects: EngineeringProject[] = [
  {
    title: "Lattice",
    description:
      "A real-time collaborative whiteboard with CRDT-based conflict resolution, WebSocket sync, and an offline-first local cache.",
    stack: ["TypeScript", "Next.js", "WebSockets", "Yjs", "PostgreSQL"],
    year: "2025",
    repo: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "quantize",
    description:
      "An open-source CLI that compresses and quantizes ML model weights, with a plugin system and reproducible benchmark suite.",
    stack: ["Python", "PyTorch", "Click", "NumPy"],
    year: "2024",
    repo: "https://github.com",
  },
  {
    title: "Beacon API",
    description:
      "A horizontally-scalable event ingestion service handling 10k req/s, with rate limiting, idempotency keys, and structured tracing.",
    stack: ["Go", "gRPC", "Redis", "Docker", "Kubernetes"],
    year: "2024",
    repo: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "dotgrep",
    description:
      "A fuzzy config-file search tool written in Rust, indexing thousands of files in milliseconds with a ripgrep-style interface.",
    stack: ["Rust", "Tokio", "Clap"],
    year: "2023",
    repo: "https://github.com",
  },
]

export function EngineeringSection() {
  return (
    <section id="engineering" className="scroll-mt-16 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">
              03 — Engineering
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Software I&apos;ve designed and shipped
            </h2>
          </div>
          <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
            With a computer science degree behind the design work, I build the
            things I prototype — full-stack apps, APIs, and developer tools.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {engineeringProjects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-secondary text-primary">
                    <Terminal className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="font-mono text-lg font-semibold tracking-tight">
                      {project.title}
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} source code on GitHub`}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      <Code2 className="h-4 w-4" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live site`}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              <p className="mb-5 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
