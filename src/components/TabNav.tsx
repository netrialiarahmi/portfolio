import type { TabKey } from '../App'

interface TabNavProps {
  active: TabKey
  onChange: (tab: TabKey) => void
}

const TABS: { key: TabKey; label: string }[] = [
  { key: 'about', label: 'About' },
  { key: 'resume', label: 'Resume' },
  { key: 'projects', label: 'Projects' },
  { key: 'more', label: 'More' },
]

export function TabNav({ active, onChange }: TabNavProps) {
  return (
    <nav className="tab-nav" aria-label="Portfolio sections">
      <ul className="tab-list">
        {TABS.map(({ key, label }) => (
          <li key={key}>
            <button
              className="tab-btn"
              data-active={active === key}
              onClick={() => onChange(key)}
              aria-current={active === key ? 'page' : undefined}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
