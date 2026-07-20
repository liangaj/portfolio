export type ProjectCategory = "figma" | "storyboard" | "research"

export type CaseStudySection = {
  heading: string
  body: string[]
}

export type Project = {
  slug: string
  title: string
  summary: string
  category: ProjectCategory
  categoryLabel: string
  year: string
  role: string
  timeline: string
  tools: string[]
  image: string
  imageAlt: string
  overview: string
  sections: CaseStudySection[]
  outcomes: { label: string; value: string }[]
}

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  figma: "Figma App Design",
  storyboard: "Storyboard",
  research: "Research",
}

export const projects: Project[] = [
  {
    slug: "nomad-travel-app",
    title: "Nomad",
    summary:
      "A travel companion app that turns scattered trip plans into a single, calm itinerary.",
    category: "figma",
    categoryLabel: "Figma App Design",
    year: "2025",
    role: "Product & UX Design",
    timeline: "6 weeks",
    tools: ["Figma", "FigJam", "Maze"],
    image: "/images/nomad-app.png",
    imageAlt: "Nomad travel app mobile interface with a map and saved trip cards",
    overview:
      "Travelers juggle booking emails, screenshots, and group chats. Nomad consolidates everything into one adaptive itinerary that updates as plans change, so the next step is always one glance away.",
    sections: [
      {
        heading: "The problem",
        body: [
          "Through five interviews with frequent travelers, I found that plans lived in at least four places: email, notes apps, screenshots, and group chats. Nobody trusted a single source of truth.",
          "The anxiety peaked in transit — people wanted the next step, a confirmation number, and a map, without digging.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "I mapped the end-to-end journey from booking to arrival, then prioritized the moments of highest stress. A timeline-first information architecture emerged as the backbone of the app.",
          "I prototyped a 'now / next' pattern that always surfaces the current and upcoming step, with everything else a tap away.",
        ],
      },
      {
        heading: "Design decisions",
        body: [
          "A high-contrast dark theme keeps the interface readable in bright sunlight and dim planes alike. Trip cards use a consistent hierarchy: time, place, and a single primary action.",
          "Map and list views share one component system, so switching context never means relearning the layout.",
        ],
      },
    ],
    outcomes: [
      { label: "Task success", value: "92%" },
      { label: "Time to next step", value: "-40%" },
      { label: "Usability score", value: "4.6 / 5" },
    ],
  },
  {
    slug: "pulse-health-dashboard",
    title: "Pulse",
    summary:
      "A health dashboard that makes daily metrics feel motivating instead of overwhelming.",
    category: "figma",
    categoryLabel: "Figma App Design",
    year: "2024",
    role: "UX & UI Design",
    timeline: "5 weeks",
    tools: ["Figma", "Principle", "Notion"],
    image: "/images/pulse-dashboard.png",
    imageAlt: "Pulse health dashboard with activity rings and heart-rate charts",
    overview:
      "Most health apps drown users in numbers. Pulse reframes data around goals and trends, using progressive disclosure so the dashboard stays glanceable while detail is always available.",
    sections: [
      {
        heading: "The problem",
        body: [
          "Participants described feeling judged by their health apps — a wall of red numbers with no story. Data without context created guilt, not motivation.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "I ran a card sort to understand how people group health metrics, then built an information hierarchy around 'today', 'trends', and 'goals'.",
          "A component library with tokenized color and spacing kept the visual system consistent across 14 screens.",
        ],
      },
      {
        heading: "Design decisions",
        body: [
          "Activity rings and sparklines communicate progress at a glance; tapping any card reveals the underlying detail and history.",
          "Encouraging, plain-language copy replaced clinical labels to lower the emotional stakes of tracking.",
        ],
      },
    ],
    outcomes: [
      { label: "Daily return rate", value: "+31%" },
      { label: "Perceived clarity", value: "4.7 / 5" },
      { label: "Screens designed", value: "14" },
    ],
  },
  {
    slug: "finflow-onboarding-storyboard",
    title: "FinFlow Onboarding",
    summary:
      "A storyboard exploring the emotional arc of opening your first investment account.",
    category: "storyboard",
    categoryLabel: "Storyboard",
    year: "2024",
    role: "UX Research & Storyboarding",
    timeline: "2 weeks",
    tools: ["Paper", "Procreate", "FigJam"],
    image: "/images/finflow-storyboard.png",
    imageAlt: "Six-panel hand-drawn storyboard of a mobile banking onboarding flow",
    overview:
      "Before designing a single screen, I storyboarded the full onboarding journey for a first-time investor — capturing hesitation, confusion, and the moment of confidence that keeps people from dropping off.",
    sections: [
      {
        heading: "Why storyboard first",
        body: [
          "Onboarding for financial products is as much about trust as it is about forms. I used storyboarding to align the team on the user's emotional state at each step before committing to UI.",
        ],
      },
      {
        heading: "Process",
        body: [
          "I sketched six key frames: the trigger, the first hesitation, identity verification, the funding decision, the anxious wait, and the reassuring confirmation.",
          "Each frame paired a scene with the user's inner monologue, making invisible emotions discussable in critique.",
        ],
      },
      {
        heading: "Impact",
        body: [
          "The storyboard revealed that anxiety peaked during identity verification. That insight led the team to add progress reassurance and plain-language explanations at exactly that step.",
        ],
      },
    ],
    outcomes: [
      { label: "Frames", value: "6" },
      { label: "Drop-off insight", value: "ID step" },
      { label: "Team alignment", value: "Full buy-in" },
    ],
  },
  {
    slug: "campus-wayfinding-study",
    title: "Campus Wayfinding Study",
    summary:
      "Field research uncovering why new students get lost — and what signals they actually trust.",
    category: "research",
    categoryLabel: "Research",
    year: "2023",
    role: "UX Researcher",
    timeline: "4 weeks",
    tools: ["Interviews", "Affinity mapping", "Diary study"],
    image: "/images/wayfinding-research.png",
    imageAlt: "Affinity mapping wall with clustered sticky notes and journey lines",
    overview:
      "A mixed-methods study into how first-year students navigate an unfamiliar campus, combining a diary study, contextual interviews, and affinity mapping to surface actionable design principles.",
    sections: [
      {
        heading: "Research questions",
        body: [
          "How do newcomers form a mental model of an unfamiliar campus? Which wayfinding cues do they trust, and where does the current system break down?",
        ],
      },
      {
        heading: "Methods",
        body: [
          "I recruited eight first-year students for a one-week diary study, followed by contextual interviews walking their most-traveled routes.",
          "I synthesized 120+ observations into an affinity map, clustering pain points into four themes.",
        ],
      },
      {
        heading: "Key findings",
        body: [
          "Students trusted landmarks and other people far more than official signage. Inconsistent building codes were the single largest source of confusion.",
          "I translated findings into five design principles for a proposed wayfinding app and signage refresh.",
        ],
      },
    ],
    outcomes: [
      { label: "Participants", value: "8" },
      { label: "Observations", value: "120+" },
      { label: "Design principles", value: "5" },
    ],
  },
  {
    slug: "transit-accessibility-audit",
    title: "Transit App Accessibility Audit",
    summary:
      "A WCAG-guided audit that turned an inaccessible transit app into an inclusive one.",
    category: "research",
    categoryLabel: "Research",
    year: "2023",
    role: "Accessibility Researcher",
    timeline: "3 weeks",
    tools: ["WCAG 2.2", "VoiceOver", "Stark", "Figma"],
    image: "/images/transit-audit.png",
    imageAlt: "Transit app screens annotated with contrast ratios and tap-target overlays",
    overview:
      "I evaluated a regional transit app against WCAG 2.2 and tested it with screen-reader users, producing a prioritized roadmap of fixes that made the core journey usable for everyone.",
    sections: [
      {
        heading: "The problem",
        body: [
          "The app's core task — planning a trip — was effectively unusable with a screen reader, and low-contrast labels failed even basic legibility checks.",
        ],
      },
      {
        heading: "Method",
        body: [
          "I ran a heuristic audit against WCAG 2.2 AA, then moderated usability sessions with three screen-reader users to ground the findings in real experience.",
          "Every issue was logged with a severity rating, a WCAG reference, and a concrete recommendation.",
        ],
      },
      {
        heading: "Outcomes",
        body: [
          "I delivered a prioritized backlog of 27 issues. Fixing the top tier raised measured contrast compliance from 61% to 100% on core flows.",
        ],
      },
    ],
    outcomes: [
      { label: "Issues found", value: "27" },
      { label: "Contrast compliance", value: "61% → 100%" },
      { label: "Screen-reader tests", value: "3" },
    ],
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export const figmaProjects = projects.filter((p) => p.category === "figma")
export const storyboardProjects = projects.filter((p) => p.category === "storyboard")
export const researchProjects = projects.filter((p) => p.category === "research")
