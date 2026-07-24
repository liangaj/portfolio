import type { ReactNode } from "react"

export type ProjectCategory = "figma" | "storyboard" | "research"

export type CaseStudySection = {
  heading: string
  body: ReactNode[]
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
  detailedImage?: string
  detailedImageAlt?: string
  overview: string
  sections: CaseStudySection[]
}

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  figma: "Figma App Prototype",
  storyboard: "Storyboard",
  research: "Research",
}

export const projects: Project[] = [
  {
    slug: "campus-cash",
    title: "CampusCash",
    summary:
      "A personal finance app designed for college students to manage their money and budget effectively.",
    category: "figma",
    categoryLabel: "Figma App Prototype",
    year: "2026",
    role: "Product & UX Design",
    timeline: "Jan. 2026 — Apr. 2026",
    tools: ["Figma", "UX Research", "Interviews", "Affinity Diagrams", "Prototyping"],
    image: "/images/campuscash-app.jpg",
    imageAlt: "Campus Cash app mobile interface with a dashboard and budgeting tools",
    detailedImage: "/images/campuscash-poster.jpg",
    detailedImageAlt: "Poster of view of Campus Cash app showing budgeting features and alerts",
    overview:
      "Managing personal finances can feel overwhelming for students. CampusCash brings budgeting, low-balance alerts, and credit score guidance into one intuitive experience, making it easier to build healthier financial habits.",
    sections: [
      {
        heading: "Problem",
        body: [
          "For many college students, managing personal finances is an unfamiliar challenge. Without prior experience, they often rely on their parents for guidance on budgeting, spending, and financial decisions.", 

          "CampusCash was designed to give students a trusted resource they can rely on independently, offering personalized budgeting tools, proactive alerts, and clear financial guidance to help them build confidence in managing their money.",
        ],
      },
      {
        heading: "Research",
        body: [
          <>
            We interviewed <strong>8 undergraduate students</strong> to understand how they manage their personal finances. After analyzing the interview data through an <strong>affinity diagram</strong>, we identified two primary user needs and two major breakdowns in students' financial workflows.
          </>,
          <>
            Students wanted <strong>clear, categorized expense tracking</strong> and <strong>customizable budgeting tools</strong> that could adapt to their individual spending habits. Many participants found existing banking apps too rigid, while manual tracking methods such as spreadsheets felt time-consuming and difficult to maintain.
          </>,
          <>
            Our research also revealed two key pain points: <strong>inconsistent expense tracking</strong> and <strong>missed payments</strong>. Students often relied on rough mental estimates of their spending, making it difficult to know whether they were staying within budget. Because expenses fluctuated throughout the month, several participants reported forgetting payment deadlines or realizing too late that they had overspent, leading to late fees, financial stress, and increased dependence on savings.
          </>,
          <>
            These insights established the foundation for CampusCash's core features: automated expense categorization, customizable budgets, and proactive payment and low-balance reminders.
          </>,
        ],
      },
      {
        heading: "Ideation & Concept Development",
        body: [
          <>
            Building on our user research, we used the <strong>IDEO brainstorming method</strong> to generate 80 possible ideas before narrowing them into eight storyboard concepts. Each storyboard explored a different way CampusCash could help students navigate everyday financial challenges, from managing subscriptions to understanding credit scores.
          </>,
          <>
            To validate these concepts, we conducted <strong>speed dating sessions</strong> with students, presenting storyboard scenarios to gather reactions and understand which solutions felt most valuable in their daily lives. We analyzed the feedback using <strong>thematic analysis</strong>, identifying recurring patterns around spending visibility, proactive financial awareness, and the inconvenience of manual budgeting.
          </>,
          <>
            The findings confirmed that students wanted financial tools that were simple, proactive, and easy to integrate into their routines. These insights directly shaped our final design, leading us to prioritize <strong>low-balance and bill reminders, a debt tracker with smart payment recommendations, and clear credit score guidance</strong> over more complex budgeting features.
          </>,
        ],
      },
      {
        heading: "Design Process",
        body: [
          <>
            A high-contrast dark theme keeps the interface readable in bright sunlight and dim planes alike. Trip cards use a consistent hierarchy: time, place, and a single primary action.
          </>,
          <>
            Map and list views share one component system, so switching context never means relearning the layout.
          </>,
        ],
      },
      {
        heading: "Prototype",
        body: [
          "A high-contrast dark theme keeps the interface readable in bright sunlight and dim planes alike. Trip cards use a consistent hierarchy: time, place, and a single primary action.",
          "Map and list views share one component system, so switching context never means relearning the layout.",
        ],
      },
      {
        heading: "Usability Testing",
        body: [
          "A high-contrast dark theme keeps the interface readable in bright sunlight and dim planes alike. Trip cards use a consistent hierarchy: time, place, and a single primary action.",
          "Map and list views share one component system, so switching context never means relearning the layout.",
        ],
      },
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
        heading: "Problem",
        body: [
          "The app's core task — planning a trip — was effectively unusable with a screen reader, and low-contrast labels failed even basic legibility checks.",
        ],
      },
      {
        heading: "Research",
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
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export const figmaProjects = projects.filter((p) => p.category === "figma")
export const storyboardProjects = projects.filter((p) => p.category === "storyboard")
export const researchProjects = projects.filter((p) => p.category === "research")
