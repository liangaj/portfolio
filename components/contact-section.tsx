import { ArrowUpRight, Mail } from "lucide-react"

const socials = [
  { label: "Email", value: "hello@alexrivera.design", href: "mailto:hello@alexrivera.design" },
  { label: "LinkedIn", value: "/in/alexrivera", href: "https://linkedin.com" },
  { label: "Dribbble", value: "@alexrivera", href: "https://dribbble.com" },
  { label: "Read.cv", value: "alexrivera", href: "https://read.cv" },
]

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">
          05 — Contact
        </p>
        <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Let&apos;s build something people love to use.
            </h2>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
              I&apos;m open to internships, freelance projects, and
              collaborations. If you have a problem worth solving, I&apos;d love
              to hear about it.
            </p>
            <a
              href="mailto:hello@alexrivera.design"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="h-4 w-4" />
              hello@alexrivera.design
            </a>
          </div>

          <ul className="flex flex-col justify-center divide-y divide-border/60 border-y border-border/60">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between py-4"
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {social.label}
                  </span>
                  <span className="flex items-center gap-2 text-sm text-foreground transition-colors group-hover:text-primary">
                    {social.value}
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
