import SiteHeader from '@/components/SiteHeader'
import HeroSection from '@/components/HeroSection'
import IntroBand from '@/components/IntroBand'
import ProjectsSection from '@/components/ProjectsSection'
import CapabilitiesSection from '@/components/CapabilitiesSection'
import AboutSection from '@/components/AboutSection'
import ArtSection from '@/components/ArtSection'
import ContactSection from '@/components/ContactSection'
import SiteFooter from '@/components/SiteFooter'

export default function HomePage() {
  return (
    <>
      <SiteHeader home />
      <main id="main">
        <HeroSection />
        <IntroBand />
        <ProjectsSection />
        <CapabilitiesSection />
        <AboutSection />
        <ArtSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
