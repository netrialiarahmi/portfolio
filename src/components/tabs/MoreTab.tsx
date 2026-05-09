import { PublicationsSection } from '../PublicationsSection'
import { AchievementsSection } from '../AchievementsSection'
import { LeadershipSection } from '../LeadershipSection'

export function MoreTab() {
  return (
    <article className="tab-panel">
      <PublicationsSection />
      <AchievementsSection />
      <LeadershipSection />
    </article>
  )
}
