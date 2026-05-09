import { HighlightedProjectsSection } from '../HighlightedProjectsSection'
import { ProjectsSection } from '../ProjectsSection'

export function ProjectsTab() {
  return (
    <article className="tab-panel">
      <HighlightedProjectsSection />
      <ProjectsSection />
    </article>
  )
}
