import { ExperienceSection } from '../ExperienceSection'
import { EducationSection } from '../EducationSection'
import { CertificationSkillsSection } from '../CertificationSkillsSection'

export function ResumeTab() {
  return (
    <article className="tab-panel">
      <ExperienceSection />
      <EducationSection />
      <CertificationSkillsSection />
    </article>
  )
}
