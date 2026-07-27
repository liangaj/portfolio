const skills = [
  "User research",
  "Usability testing",
  "Information architecture",
  "Wireframing",
  "Prototyping",
  "Storyboarding",
  "Design systems",
  "Accessibility (WCAG)",
  "Figma",
  "FigJam",
]

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-16 border-b border-border/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_1fr] md:py-28">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">
            04 — About
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Designing with empathy. {" "}
            <span className="text-primary">Engineering with purpose.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-pretty leading-relaxed text-muted-foreground">
            I studied computer science because I love building software, and UX design because I wanted to understand the people using it. That combination allows me to approach products from both perspectives—thinking about how they work, how they look, and how they make people feel.
          </p>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            I'm happiest when I can turn an idea into something real: researching user needs, designing intuitive interfaces, and writing the code that brings them to life. I believe great products are not only functional, but beautiful to look at and enjoyable to use.
          </p>

          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Skills &amp; tools
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-border bg-card px-3 py-1.5 text-sm text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
