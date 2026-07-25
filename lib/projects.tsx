import type { ReactNode } from "react"

export type ProjectCategory = "figma" | "storyboard" | "research"

export type TextBlock = {
    type: "text"
    content: ReactNode
}

export type ImageBlock = {
    type: "image"
    src: string
    alt: string
    caption?: string
}

export type GalleryBlock = {
    type: "gallery"
    images: { src: string; alt: string; caption?: string }[]
}

export type TextImageBlock = {
    type: "text-and-image"
    content: ReactNode[]
    src: string
    alt: string
    caption?: string
}

export type ContentBlock = TextBlock | ImageBlock | GalleryBlock | TextImageBlock

export type CaseStudySection = {
  heading: string
  body: ContentBlock[]
}

export type Project = {
  slug: string
  url: string
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
    url: "https://www.figma.com/design/XKJWgtV5YBU9mQg2kt9Mx1/493-Prototype?node-id=8-2&t=xzzhiNM1JJVRviB4-1",
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
          { type: "text", content: "For many college students, managing personal finances is an unfamiliar challenge. Without prior experience, they often rely on their parents for guidance on budgeting, spending, and financial decisions." },
          { type: "text", content: "CampusCash was designed to give students a trusted resource they can rely on independently, offering personalized budgeting tools, proactive alerts, and clear financial guidance to help them build confidence in managing their money." },
        ],
      },
      {
        heading: "Research",
        body: [
          { type: "text", content: <>We interviewed <strong>8 undergraduate students at the University of Michigan</strong> to understand how they manage their personal finances. After analyzing the interview data through an <strong>affinity diagram</strong>, we identified two primary user needs and two major breakdowns in students' financial workflows.</> },
          { type: "image", src: "/images/campuscash-ad-one.png", alt: "Affinity diagram showing user research insights about budgeting" },
          { type: "text", content: <>Students wanted <strong>clear, categorized expense tracking</strong> and <strong>customizable budgeting tools</strong> that could adapt to their individual spending habits. Many participants found existing banking apps too rigid, while manual tracking methods such as spreadsheets felt time-consuming and difficult to maintain.</> },
          { type: "text", content: <>Our research also revealed two key pain points: <strong>inconsistent expense tracking</strong> and <strong>missed payments</strong>. Students often relied on rough mental estimates of their spending, making it difficult to know whether they were staying within budget. Because expenses fluctuated throughout the month, several participants reported forgetting payment deadlines or realizing too late that they had overspent, leading to late fees, financial stress, and increased dependence on savings.</> },
          { type: "text", content: <>These insights established the foundation for CampusCash's core features: automated expense categorization, customizable budgets, and proactive payment and low-balance reminders.</> },
        ],
      },
      {
        heading: "Ideation & Concept Development",
        body: [
          { type: "text", content: <>Building on our user research, we used the <strong>IDEO brainstorming method</strong> to generate 80 possible ideas before narrowing them into eight storyboard concepts. Each storyboard explored a different way CampusCash could help students navigate everyday financial challenges, from managing subscriptions to understanding credit scores.</> },
          { type: "image", src: "/images/campuscash-storyboard-postits.jpg", alt: "Storyboard sketches showing four different concepts of CampusCash with post-it notes of idea feedback", caption: "Storyboard sketches with post-it notes of feedback from participants" },
          { type: "text", content: <>To validate these concepts, we conducted <strong>speed dating sessions</strong> with students, presenting storyboard scenarios to gather reactions and understand which solutions felt most valuable in their daily lives. We analyzed the feedback using <strong>thematic analysis</strong>, identifying recurring patterns around spending visibility, proactive financial awareness, and the inconvenience of manual budgeting.</> },
          { type: "text", content: <>The findings confirmed that students wanted financial tools that were simple, proactive, and easy to integrate into their routines. These insights directly shaped our final design, leading us to prioritize <strong>low-balance and bill reminders, a debt tracker with smart payment recommendations, and clear credit score guidance</strong> over more complex budgeting features.</> },
        ],
      },
      {
        heading: "Design & Prototyping",
        body: [
          { type: "text-and-image", 
            content: [
              <>Using our research findings as a foundation, we designed the CampusCash interface in <strong>Figma</strong>, beginning with user flows and wireframes before refining the experience into a high-fidelity interactive prototype. We prioritized a clean visual hierarchy, high-contrast colors, and consistent components to ensure financial information was easy to scan and accessible.</>,
              <>While our initial designs used the University of Michigan's maize and blue palette, we later transitioned to orange accents to establish CampusCash as an independent product rather than an institutional app. The warmer palette maintained strong contrast while giving the app its own distinct identity.</>
            ],
            src: "/images/campuscash-balance-alerts.png",
            alt: "CampusCash app's balance alerts page on Figma",
            caption: "CampusCash app interface of the balance alerts feature" },
          { type: "text", content: <>Our design decisions centered around the three features validated during our ideation process: <strong>low-balance and bill reminders, a debt tracker with smart recommendations, and credit score guidance</strong>. We emphasized intuitive navigation and proactive notifications to help students stay informed about their finances without relying on manual tracking.</> }
        ],
      },
      {
        heading: "Usability Testing",
        body: [
          { type: "text", content: <>To evaluate the prototype, we conducted <strong>two think-aloud usability tests</strong> with representative users. Participants completed tasks such as setting a low-balance threshold, reviewing spending history, checking their credit score, and exploring ways to improve it while verbalizing their thoughts throughout the process.</> },
          { type: "text", content: <>The sessions revealed several usability issues related to <strong>system feedback, navigation, and interaction design</strong>. Users were often unsure whether actions, such as updating their balance threshold, had been successfully completed because the interface provided no confirmation. We also observed confusion caused by mislabeled navigation, non-functional interface elements, and difficulty locating recent transaction history.</> },
          { type: "text", content: <>Based on these findings, we refined the prototype by adding clearer confirmation messages, improving navigation labels, making interactive components behave consistently, and surfacing recent transactions more prominently. At the same time, participants responded positively to the app's clean interface, credit score dashboard, and educational resources, validating our overall approach while highlighting opportunities to improve the user experience through iteration.</> },
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
