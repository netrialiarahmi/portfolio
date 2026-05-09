import { AboutSection } from '../AboutSection'

export function AboutTab() {
  return (
    <article className="tab-panel">
      {/* Mini stats */}
      <div className="stats-row">
        <div className="stat-item">
          <span className="stat-number">92%</span>
          <span className="stat-label">Model Accuracy</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">500+</span>
          <span className="stat-label">Docs Processed</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">85%</span>
          <span className="stat-label">Candidate Fit</span>
        </div>
      </div>

      {/* Terminal badge */}
      <div className="terminal-badge">
        <span className="terminal-prompt">$</span>
        <span className="terminal-text"> currently @ Kompas Gramedia</span>
        <span className="terminal-cursor" aria-hidden>▌</span>
      </div>

      <AboutSection />
    </article>
  )
}
