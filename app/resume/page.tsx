import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"

const resumes = [
  {
    title: "UI/UX Resume",
    description: "Design-focused resume highlighting UX research, product thinking, and interface design work.",
    href: "/resume/Resume_Jiayu_Liang_UIUX.pdf",
  },
  {
    title: "SWE Resume",
    description: "Engineering-focused resume covering software development, systems thinking, and technical projects.",
    href: "/resume/Resume_Jiayu_Liang.pdf",
  },
]

export default function ResumePage() {
  return (
    <>
      <SiteNav />
      <main>
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back home
          </Link>

          <div className="mt-10">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              Resume
            </p>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              Choose a resume to download
            </h1>
            <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              Pick the version you're interested in. Two resumes, tailored for different roles.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {resumes.map((resume) => (
                <a
                  key={resume.title}
                  href={resume.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-border bg-secondary/40 p-6 transition-colors hover:border-primary hover:bg-secondary"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-lg font-semibold tracking-tight">{resume.title}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {resume.description}
                      </p>
                    </div>
                    <div className="rounded-full border border-border p-2 text-muted-foreground">
                      <Download className="h-4 w-4" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
