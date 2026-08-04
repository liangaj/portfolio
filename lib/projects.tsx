import type { ReactNode } from "react"

export type ProjectCategory = "figma" | "research"

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
    imageOnRight: boolean
    src: string
    alt: string
    caption?: string
}

export type ContentBlock = TextBlock | ImageBlock | GalleryBlock | TextImageBlock

export type linkButtons = {
  label: string
  href: string
}

export type CaseStudySection = {
  heading: string
  body: ContentBlock[]
}

export type Project = {
  slug: string
  url?: linkButtons[]
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
  research: "Research",
}

export const projects: Project[] = [
  /* ------------- ECC APP ------------ */
  { 
    slug: "ecc-app",
    url: [
      {
        label: "View Presentation",
        href: "https://docs.google.com/presentation/d/1I3pPSal1loCFPrj-UkGPmzuIW2He0kbW4s4etzqd0Gk/edit?usp=sharing"
      }
    ],
    title: "ECC App",
    summary:
      "A mobile app designed to connect students, resources, and opportunities within the Everyone Can Code Chicago program.",
    category: "figma",
    categoryLabel: "Figma App Prototype",
    year: "2025",
    role: "Mobile App Developer",
    timeline: "Jun. 2025 — Aug. 2025",
    tools: ["Figma", "Google Slides", "User Research", "Stakeholder Communication", "Personas", "Sitemap", "Wireframing", "User Flows", "High-Fidelity Prototyping", "Iterative Design"],
    image: "/images/ecc-app.png",
    imageAlt: "ECC App mobile interface displaying information about the showcase event",
    detailedImage: "/images/ecc-title-slide.svg",
    detailedImageAlt: "Title slide for the ECC App presentation",
    overview:
      "Despite teaching student interns how to build iOS applications each summer, Everyone Can Code Chicago had no app of its own. During my time as a mobile app developer, my team of three transformed a broad vision into a user-centered mobile platform that connected students, resources, and opportunities.",
    sections: [
      {
        heading: "The Challenge",
        body: [
          { type: "text", content: <>Although ECC equips students with technical skills, the lack of a dedicated platform meant that students had no centralized platform to access resources.</> },
          { type: "text", content: <>The experience once the internship ends is also scarce. Students often struggle to maintain connections with their peers and mentors after the internship concludes. These issues persisted across multiple cohorts, indicating opportunities for a more unified student experience.</> },
        ],
      },
      {
        heading: "Research",
        body: [
          { type: "text", content: <><strong>Understanding student pain points</strong></> },
          { type: "text", content: <>All three team members were program alumni, so we began by reflecting on our own experiences before validating them through discussions with students and the program director.</> },
          { type: "text", content: <>Across different cohorts from different years, four consistent themes emerged:</> },
          { type: "text", content: <>
            <ol className="list-decimal pl-10 space-y-2">
                <li>Scattered & hard-to-find resources</li>
                <li>Weak community beyond individual teams</li>
                <li>Lack of guidance post program completion</li>
                <li>Lack of visibility into summer opportunities and events</li>
            </ol>
            </> },
          { type: "text", content: <>These insights became the foundation for our design decisions.</> },
          { type: "image", src: "/images/ecc-persona.svg", alt: "Persona showing student needs and pain points", caption: "A current ECC student looking for resources and networking opportunities." },
        ],
      },
      {
        heading: "Defining the Solution",
        body: [
          { type: "text", content: <>We worked closely with the program leader—the primary stakeholder—throughout the project. During weekly check-ins, we presented our research findings, discussed feature ideas, and gathered feedback to ensure our design aligned with both student needs and the program's long-term goals.</> },
          { type: "text", content: <>These conversations helped us refine our priorities and narrow the app's scope to four core features that addressed the most common pain points identified during research:</> },
          { type: "text", content: <>
            <ul className="list-disc pl-10 space-y-2">
              <li><strong>Centralized Resources</strong> - A single hub for recordings, documentations, and ECC-wide annoucements</li>
              <li><strong>Community</strong> - Student, alumni, and mentor profiles to foster networking across ECC</li>
              <li><strong>Opportunity Discovery</strong> - A dedicated space for internships, workshops, and other events around the city</li>
              <li><strong>Project Showcase</strong> - A gallery of past projects to inspire future cohorts and highlight alumni work</li>
            </ul>
          </> },
          { type: "text", content: <>By continuously incorporating stakeholder feedback alongside user research, we <strong>refined the app into a focused MVP that addressed the most pressing student needs</strong>. Features such as gamification and a forum page were deferred to future iterations, allowing us to deliver a clear, achievable product vision in the short amount of time we have while leaving space for future enhancements.</> },
        ],
      },
      {
        heading: "Information Architecture",
        body: [
          { type: "text", content: <>With the core features defined, we created a sitemap to visualize the app's structure. I designed the application's information architecture to organize content into clear, intuitive user journeys.</> },
          { type: "text", content: <>The navigation focused on four primary destinations:</> },
          { type: "text", content: <>
            <ul className="list-disc pl-10 space-y-2">
              <li>Home</li>
              <li>Cohort</li>
              <li>Events</li>
              <li>Profile</li>
            </ul>
          </> },
          { type: "text", content: <>Supporting pages included authentication, private messaging, and resource libraries to minimize navigation complexity while keeping important information easily accessible.</> },
          { type: "image", src: "/images/ecc-sitemap.png", alt: "A snippet of our sitemap showing the structure of the ECC App's Home, Profile, and Events page", caption: "A snippet of our sitemap showing the structure of the ECC App's Home, Profile, and Events page" },
        ],
      },
      {
        heading: "Design & Prototyping",
        body: [
          { type: "text", content: <>With the application's structure established, I shifted my focus to transforming the sitemap into a cohesive mobile experience. We wanted the app to feel like a natural extension of the ECC brand, so we maintained the visual identify of the program's website. Inspired by Apple's Swift branding, we carried over the site's vibrant orange accents, clean layouts, and minimalist aesthetic.</> },
          { type: "text", content: <>I began by creating low-fidelity wireframes to quickly explore screen layouts, content hierarchy, and user flows before investing in visual design. These wireframes served as a foundation for our weekly stakeholder meetings, allowing us to validate our design decisions early and iterate efficiently based on feedback, ensuring a smooth final product.</> },
          { type: "image", src: "/images/ecc-wireframe.png", alt: "Wireframe of the ECC App's Home page showing navigation and key features", caption: "Early wireframe of the ECC App's Home page used to explore layouts and content hierarchy before moving into visual design" },
          { type: "text", content: <>After refining the layouts, we developed a high-fidelity interactive prototype in Figma. To ensure consistency across the application, I established reusable UI components, standardized typography, and a cohesive color palette that aligned with the ECC website.</> },
          { type: "text", content: <><strong>Explore the interactive prototype below:</strong></> },
          { type: "text", content: <><iframe width="800" height="450" src="https://embed.figma.com/proto/eczx5RDhNlrHt1l7ttbeUz/ECC-App-Dev?node-id=228-3581&scaling=scale-down&content-scaling=fixed&page-id=3%3A502&starting-point-node-id=228%3A3581&show-proto-sidebar=1&embed-host=share" allowFullScreen></iframe></> },
        ],
      },
      {
        heading: "Presenting the Final Design",
        body: [
          { type: "text", content: <>The ECC App MVP was successfully delivered with a presentation to Apple executives, the ECC program leader, and other program alumni, where we introduced the research behind our design decisions and demonstrated the interactive prototype.</> },
          { type: "text", content: <>To create a cohesive experience, I desgined the presentation deck using the same visual language as the ECC aesthetic, incorportating a minimalist black-and-orange color palette, clean layouts, and modern typography to reinforce the project's identity.</> },
          { type: "text", content: <>The presentation sparked valuable discussions about the app's future, with stakeholders providing feedback that helped shape a roadmap for future iterations beyond our initial MVP.</> },
        ],
      }
    ],
  },
  /* ------------- CAMPUSCASH ------------ */
  { 
    slug: "campus-cash",
    url: [
      {
        label: "View Figma Prototype",
        href: "https://www.figma.com/design/XKJWgtV5YBU9mQg2kt9Mx1/493-Prototype?node-id=8-2&t=xzzhiNM1JJVRviB4-1"
      },
    ],
    title: "CampusCash",
    summary:
      "A personal finance app designed for college students to manage their money and budget effectively.",
    category: "figma",
    categoryLabel: "Figma App Prototype",
    year: "2026",
    role: "Product & UX Design",
    timeline: "Jan. 2026 — Apr. 2026",
    tools: ["Figma", "UX Research", "User Interviews", "Affinity Diagram", "Thematic Analysis", "Prototyping", "Usability Testing", "Design Iteration"],
    image: "/images/campuscash-app.jpg",
    imageAlt: "Campus Cash app mobile interface with a dashboard and budgeting tools",
    detailedImage: "/images/campuscash-poster.jpg",
    detailedImageAlt: "Poster of view of Campus Cash app showing budgeting features and alerts",
    overview:
      "CampusCash is a mobile budgeting application that helps college students build healthier financial habits through budgeting tools, low-balance alerts, and credit score guidance. As part of a four-person UI development team, I conducted user research, developed personas and user flows, created wireframes and a high-fidelity Figma prototype, and refined the overall user experience through iterative design.",
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
          { type: "image", src: "/images/campuscash-ad-one.png", alt: "Affinity diagram showing user research insights about budgeting", caption: "A section of the affinity diagram of the users' budgeting habits" },
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
          { type: "text", content: <>The findings confirmed that students wanted financial tools that were simple, proactive, and easy to integrate into their routines. These insights directly shaped our final design, leading us to prioritize <strong>low-balance and bill reminders, transaction history sorted by categories, and clear credit score guidance</strong> over more complex budgeting features.</> },
        ],
      },
      {
        heading: "Design & Prototyping",
        body: [
          { type: "text", content: <>Using our research findings as a foundation, we designed the CampusCash interface in <strong>Figma</strong>, beginning with user flows and wireframes before refining the experience into a high-fidelity interactive prototype. We prioritized a clean visual hierarchy, high-contrast colors, and consistent components to ensure financial information was easy to scan and accessible.</> },
          { type: "text", content: <>While our initial designs used the University of Michigan's maize and blue palette, we later transitioned to orange accents to establish CampusCash as an independent product rather than an institutional app. The warmer palette maintained strong contrast while giving the app its own distinct identity.</> },
          { type: "text", content: <>Our design decisions centered around the three features validated during our ideation process: <strong>low-balance and bill reminders, transaction history sorted by categories, and credit score guidance</strong>. We emphasized intuitive navigation and proactive notifications to help students stay informed about their finances without relying on manual tracking.</> },
          { type: "text-and-image", 
            content: [
              <><strong>Making low balance alerts proactive</strong></>,
              <>Many interview participants mentioned feeling caught off-guard by unexpected low balances because they were unaware of how much they were spending.</>,
              <>We designed the Balance Alerts screen to help students stay ahead of their finances instead of being surprised by unexpected low balances.</>,
              <>The interface combines customizable balance thresholds, flexible notification delivery options, and clear educational guidance, creating a proactive financial safety net that is easy to understand and manage.</>
            ],
            imageOnRight: true,
            src: "/images/campuscash-balance-alerts.png",
            alt: "CampusCash app's balance alerts page on Figma" 
          },
          { type: "text-and-image", 
            content: [
              <><strong>Improving spending visibility</strong></>,
              <>Our research showed that many studnets relied on rough mental estimates of their spending instead of actively tracking expenses. When they do, they found manual tools like Excel to be extremely time-consuming.</>,
              <>To address this, we designed a transaction history that automatically categorizes expenses and visualizes monthly spending patterns.</>,
              <>By combining searchable transaction history with simple filtering and visual summaries, this design helps students better understand their spending habits without the burden of manual tracking.</>
            ],
            imageOnRight: false,
            src: "/images/campuscash-transactions.png",
            alt: "CampusCash app's transaction history page on Figma"
          },
          { type: "text-and-image", 
            content: [
              <><strong>Building financial literacy while simplifying credit score management</strong></>,
              <>Our research revealed that many students were unfamiliar with credit scores when they first began managing their own finances, and often relied on their praents for guidance.</>,
              <>We designed the credit score dashboard to visualize score trends over time, highlight the factors affecting credit health, and provide educational articles with actionable guidance.</>,
              <>By connecting financial data with clear explanations, the experience helps students build confidence and make credit scores less intimidating.</>
            ],
            imageOnRight: true,
            src: "/images/campuscash-transactions.png",
            alt: "CampusCash app's transaction history page on Figma"
          },
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
      {
        heading: "Learnings",
        body: [
          { type: "text", content: <>Throughout this project, I learned the importance of validating design decisions through continuous user feedback. While our research identified key student pain points, usability testing revealed that even small interaction details such as navigation labels, confirmation messages, and visual affordances, had a significant impact on users' confidence and ability to complete tasks.</> },
          { type: "text", content: <>I also gained a deeper appreciation for iterative design. Watching users think aloud highlighted usability issues that were not apparent during prototyping, reinforcing that a polished interface alone does not guarantee a seamless experience. By iterating on the design based on real user feedback, I strengthened my ability to translate research insights into practical design improvements that better support users' needs.</> },
        ]
      },
      {
        heading: "Next Steps",
        body: [
          { type: "text", content: <>CampusCash successfully improves students' awareness of their spending through balance alerts, transaction tracking, and credit score insights, but there is still room for growth.</> },
          { type: "text", content: <>Future iterations would focus on refining navigation, completing interactive features such as spending filters, and providing more personalized financial education through richer resources and recommendations. These improvements would help CampusCash evolve from a financial tracking tool into a more comprehensive platform that supports students' long-term financial confidence.</> },
        ]
      }
    ],
  },
  /* ------------- CHICAGOSAFE ------------ */
  {
    slug: "chicagosafe",
    title: "ChicaGoSafe",
    summary:
      "A web application designed to help travelers navigate Chicago safely by providing crowd-sourced safety information and resources.",
    category: "figma",
    categoryLabel: "Full-Stack Web Application",
    year: "2025",
    role: "UI Design & Development, UX Research, Project Manager",
    timeline: "Sep. 2025 — Dec. 2025",
    tools: ["Figma", "Jira", "v0", "Competitive Analysis","Wireframing", "AI Prototyping", "Iterative Design"],
    image: "/images/chicagosafe-app.png",
    imageAlt: "Desktop interface of ChicaGoSafe showing a map of Chicago separated by neighborhood with safety information and resources",
    detailedImage: "/images/chicagosafe-neighborhood.svg",
    detailedImageAlt: "Desktop interface of ChicaGoSafe showing a map of Chicago with Chinatown as the chosen neighborhood, displaying a description, highlights, and reviews.",
    overview:
      "ChicaGoSafe is a web application that helps tourists navigate Chicago with confidence through an interactive map featuring neighborhood safety scores, ratings, and nearby attractions. As part of a four-person Human-Centered Software Engineering team, I conducted user research, refined the UI/UX produced by v0 in Figma, and managed the project using Jira.",
    sections: [
      {
        heading: "Problem",
        body: [
          { type: "text", content: <>When brainstorming project ideas, I wanted to solve a problem that felt both personal and meaningful. Having grown up in Chicago, I had experienced how the city's reputation often overshadowed its diverse neighborhoods and attractions. Friends planning to visit would frequently ask if Chicago was safe, assuming the entire city was dangerous based on stories they had heard.</> },
          { type: "text", content: <>In reality, safety varies significantly across different parts of the city. Tourists often rely on scattered sources such as travel blogs, crime reports, or social media to understand where to go, making it difficult to build an accurate picture of the famous Windy City.</> },
          { type: "text", content: <>We identified an opportunity to create a centralized platform that helps visitors make informed travel decisions by presenting neighborhood safety information in a clear, approachable, and down-to-ground way.</> },
        ],
      },
      {
        heading: "Research",
        body: [
          { type: "text", content: <>Before designing the interface, we sought to understand both the needs of Chicago tourists and the current landscape of travel applications. Since the project centered on helping tourists navigate the city safely, I conducted background research on Chicago tourism, analyzed existing travel platforms, and identified opportunities where our product could provide unique value.</> },
          { type: "text", content: <>I performed a competitive analysis of Google Maps, Citymapper, and TripIt, evaluating their navigation, trip planning, accessibility, and safety features. While these platforms excelled at directions and itinerary management, none combined neighborhood safety information with local recommendations in a single, free experience. This revealed an opportunity to create a tool tailored specifically for visitors exploring Chicago.</> },
          { type: "text", content: <>
            <div className="flex flex-wrap gap-3">
              <a href="/files/chicagosafe-research-memo.pdf" target="_blank" rel="noopener noreferrer" className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">View Full Research Memo</a>
            </div>
          </> },
          { type: "image", src: "/images/chicagosafe-table-one.png", alt: "Competitive analysis of Google Maps, Citymapper, and TripIt showing their strengths and weaknesses in navigation, trip planning, accessibility, and safety features", caption: "Competitive analysis of Google Maps, Citymapper, and TripIt" },
          { type: "text", content: <>My research also informed several key product decisions. I recommended integrating Google Maps with publicly available crime data from the Chicago Police Department's ClearMap, visualizing neighborhoods through intuitive color-coded safety scores, and designing a responsive interface optimized for travelers using the application on the go.</> },
        ],
      },
      {
        heading: "Project Planning & Management",
        body: [
          { type: "text", content: <>With the project's direction established, we organized development using an agile workflow to ensure the application could be completed within our semester timeline. Working as part of a four-person team, we translated research findings into project milestones, defined feature requirements, and divided responsibilities across the team.</> },
          { type: "text", content: <>I managed our project using <strong>Jira</strong>, creating milestones and sprint tasks to track progress throughout development. I also developed a Gantt chart to visualize the project timeline, coordinate dependencies, and keep the team aligned on upcoming deliverables.</> },
          { type: "image", src: "/images/chicagosafe-gantt-chart.png", alt: "Gantt chart showing the project timeline and milestones for ChicaGoSafe", caption: "Gantt chart made in Jira showing the project timeline and milestones for ChicaGoSafe" },
          { type: "text", content: <>This planning process allowed us to balance design, implementation, testing, and documentation while ensuring that high-priority features were completed on schedule.</> },
        ],
      },
      {
        heading: "Design & Prototyping",
        body: [
          { type: "text", content: <>After defining the project's requirements and development roadmap, we translated our ideas into a low-fidelity prototype using <strong>v0</strong>. Rapid prototyping allowed us to quickly explore layouts, user flows, and interactions before investing significant development effort.</> },
          { type: "text", content: <>Once the overall structure was established, I <strong>refined the interface in Figma</strong>, improving visual hierarchy, spacing, typography, and consistency across the application while ensuring the design remained responsive across desktop and mobile experiences.</> },
          { type: "image", src: "/images/chicagosafe-mobile-wireframes.png", alt: "Figma prototype of ChicaGoSafe's map, filters, and attractions views", caption: "Figma prototype of ChicaGoSafe's interactive map, filters, and attractions views." },
          { type: "text", content: <>Our design centered around four core experiences identified during research: an interactive neighborhood map, detailed neighborhood profiles, crowdsourced reviews & ratings, and a filtering tools that allow users to quickly discover attractions, emergency services, and safer areas throughout Chicago.</> },
        ],
      },
      {
        heading: "Development",
        body: [
          { type: "text", content: <>With the interface finalized, we implemented ChicaGoSafe using <strong>React</strong> for the frontend and <strong>Python/Flask</strong> for the backend with a <strong>PostgreSQL</strong> database.</> },
          { type: "text", content: <>The application features an interactive map centered on Chicago neighborhoods, color-coded safety ratings, neighborhood detail pages, user-submitted reviews, filtering tools, and responsive layouts optimized for both desktop and mobile devices. Throughout development, we continuously validated functionality against our project requirements while integrating public safety information and mapping services into a cohesive user experience.</> },
          { type: "text", content: <>Accessibility remained a priority during implementation. We regularly <strong>evaluated the application using WAVE to identify WCAG 2.1 AA issues</strong>, addressing color contrast, alternative text, form labels, and other accessibility concerns as features were developed. This iterative approach allowed usability and accessibility improvements to happen alongside implementation rather than being postponed until the end of the project.</> },
        ],
      },
      {
        heading: "Usability Testing & Iteration",
        body: [
          { type: "text", content: <>To evaluate the project's direction, <strong>we conducted three peer review sessions</strong> to evaluate the application's concept, usability, and feature set. Reviewers validated the need for a centralized platform that combines neighborhood safety information with community recommendations while providing valuable suggestions for improvement.</> },
          { type: "text", content: <>One recurring question centered around <strong>community participation</strong>. Since user reviews and recommendations were a core part of the experience, reviewers challenged us to consider how we would encourage local residents to actively contribute content and keep the platform valuable over time. This prompted discussions around long-term user engagement and reinforced the importance of designing features that benefit both tourists and local contributors.</> },
          { type: "text", content: <>Reviewers also encouraged us to further differentiate ChicaGoSafe from existing crime maps. Rather than simply displaying raw crime statistics, they emphasized presenting safety information in a way that was easier for visitors to understand. In response, we transitioned the neighborhood safety ratings to be based on neighborhood friendliness to tourists instead of pure crime statistics, eliminating the quantitative bias caused by over/under-policed areas.</> },
        ],
      },
      {
        heading: "Final Product",
        body: [
          { type: "text", content: <>After several rounds of testing and refinement, our team delivered <strong>ChicaGoSafe</strong>, <strong>a fully functional full-stack web application</strong> that helps tourists navigate Chicago more confidently by combining neighborhood safety information with community recommendations.</> },
          { type: "text", content: <>The final application enables users to:</> },
          { type: "text", content: <>
            <ul className="list-disc pl-10 space-y-2">
              <li>Explore an interactive map of Chicago neighborhoods with color-coded safety ratings</li>
              <li>Access detailed neighborhood profiles with safety information, attractions, and reviews</li>
              <li>Submit and read user-generated reviews and ratings for neighborhoods and attractions</li>
              <li>Filter neighborhoods based on safety, attractions, and other criteria to plan visits effectively</li>
              <li>Access the application across desktop and mobile devices</li>
            </ul>
          </> },
          { type: "text", content: <>
            <div className="aspect-video w-full overflow-hidden rounded-xl">
              <iframe src="https://www.youtube.com/embed/BVBUMd-yPOg?si=hXQ7T39o-NdoMh2e&amp;start=29" title="YouTube video player" className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            </> },
            { type: "text", content: <>ChicaGoSafe demonstrates how a user-centered approach, throughful planning, and iterative development can transform complex challenges into approachable, user-friendly solutions.</> },
        ],
      },
      {
        heading: "Reflections",
        body: [
          { type: "text", content: <>Building ChicaGoSafe was a valuable learning experience that reinforced the importance of early planning and user-centered design. Conducting research, defining project requirements, and gathering feedback throughout the development process were crucial for creating a product that effectively addressed the needs of our target users, rather than replying on assumptions.</> },
          { type: "text", content: <>Working across every stage of the project, from initial research and project planning to UI design and development, also enhanced my understanding of the entire development lifecycle and strengthened my ability to collaborate within a multi-disciplinary team.</> },
          { type: "text", content: <>I gained experience balancing user needs with technical constraints, prioritizing features for an MVP, and iterating based on feedback while keeping the project on schedule with a managable scope.</> },
          { type: "text", content: <>If I were to continue the project, I would explore integrating live crime data, emergency alerts, and personalized route recommendations. ChicaGoSafe also needs stronger incentives for community contributions to create a richer, more engaging user experience for both tourists and local residents.</> },
        ],
      }
    ],
  },
/* ------------- RESEARCH SECTION ------------ */
  {
    slug: "student-engagement-with-local-government",
    title: "Student Engagement with Local Government",
    summary:
      "A research study exploring how students interact with and perceive local government services.",
    category: "research",
    categoryLabel: "Research",
    year: "2026",
    role: "UX Research",
    timeline: "Mar. 2026 — May. 2026",
    tools: ["User Interviews", ],
    image: "",
    imageAlt: "",
    detailedImage: "",
    detailedImageAlt: "",
    overview:
      "",
    sections: [
      {
        heading: "Research Goals",
        body: [
          { type: "text", content: <>The primary goal of this research was to understand how students interact with and perceive local government services. We aimed to identify pain points in the current system and explore opportunities for improvement.</> },
        ],
      },
    ],
  },
  {
    slug: "keyboard-research",
    title: "Keyboard Research",
    summary:
      "A research study exploring the ergonomic and cognitive effects of different keyboard layouts on typing performance.",
    category: "research",
    categoryLabel: "Research",
    year: "2025",
    role: "UX Research",
    timeline: "Jan. 2025 — May. 2025",
    tools: ["User Interviews", ],
    image: "",
    imageAlt: "",
    detailedImage: "",
    detailedImageAlt: "",
    overview:
      "",
    sections: [
      {
        heading: "Research Goals",
        body: [
          { type: "text", content: <></> },
        ],
      },
    ],
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export const figmaProjects = projects.filter((p) => p.category === "figma")
export const researchProjects = projects.filter((p) => p.category === "research")
