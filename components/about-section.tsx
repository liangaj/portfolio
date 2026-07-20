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
            03 — About
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            A designer who thinks in systems and cares about people
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-pretty leading-relaxed text-muted-foreground">
            I picked up a minor in UX design because I kept gravitating toward
            the same question: why is this so hard to use? That curiosity turned
            into a practice built on research, iteration, and a genuine respect
            for the people on the other side of the screen.
          </p>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            My work spans the full arc of design — from field interviews and
            storyboards that frame the problem, to polished, accessible Figma
            prototypes that prove the solution. I care about clarity, evidence,
            and interfaces that respect a person&apos;s time and attention.
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
