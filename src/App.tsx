import { Toaster } from '@/components/ui/sonner'
import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { AboutSection } from '@/components/AboutSection'
import { EducationSection } from '@/components/EducationSection'
import { CertificationSkillsSection } from '@/components/CertificationSkillsSection'
import { ExperienceSection } from '@/components/ExperienceSection'
import { LeadershipSection } from '@/components/LeadershipSection'
import { AchievementsSection } from '@/components/AchievementsSection'
import { HighlightedProjectsSection } from '@/components/HighlightedProjectsSection'
import { PublicationsSection } from '@/components/PublicationsSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import { Footer } from '@/components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <CertificationSkillsSection />
        <ExperienceSection />
        <LeadershipSection />
        <AchievementsSection />
        <HighlightedProjectsSection />
        <PublicationsSection />
        <ProjectsSection />
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  )
}

export default App