import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { WorkSection } from "@/components/work-section"
import { ResearchSection } from "@/components/research-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <WorkSection />
        <ResearchSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
