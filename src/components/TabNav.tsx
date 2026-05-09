import type { TabKey } from '../App'

type Props = {
  active: TabKey
  onChange: (tab: TabKey) => void
}

const TABS: { key: TabKey; label: string }[] = [
  { key: 'about', label: 'About' },
  { key: 'resume', label: 'Resume' },
  { key: 'projects', label: 'Projects' },
  { key: 'more', label: 'More' },
]

export function TabNav({ active, onChange }: Props) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {TABS.map((t) => (
          <li className="navbar-item" key={t.key}>
            <button
              className={`navbar-link ${active === t.key ? 'active' : ''}`}
              onClick={() => onChange(t.key)}
            >
              {t.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
