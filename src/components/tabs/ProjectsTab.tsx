import { useMemo, useState } from 'react'
import { Eye, CaretDown } from '@phosphor-icons/react'

type Category = 'all' | 'ml & ai' | 'data analytics' | 'hr tech' | 'nlp'

type Project = {
  title: string
  category: Exclude<Category, 'all'>
  url: string
  github?: string
  gradient: string
  initials: string
}

const CATEGORIES: Category[] = ['all', 'ml & ai', 'data analytics', 'hr tech', 'nlp']

const projects: Project[] = [
  {
    title: 'APTO – Brain Tumor Classification',
    category: 'ml & ai',
    url: 'https://github.com/netrialiarahmi',
    gradient: 'linear-gradient(135deg,#8e2de2,#4a00e0)',
    initials: 'AP',
  },
  {
    title: 'Promotion Optimization (FindIT! UGM)',
    category: 'data analytics',
    url: 'https://github.com/netrialiarahmi',
    gradient: 'linear-gradient(135deg,#f7b733,#fc4a1a)',
    initials: 'PO',
  },
  {
    title: 'Cardiovascular Risk Prediction',
    category: 'ml & ai',
    url: 'https://github.com/netrialiarahmi',
    gradient: 'linear-gradient(135deg,#ee0979,#ff6a00)',
    initials: 'CV',
  },
  {
    title: 'Sirekap NextGen OCR',
    category: 'ml & ai',
    url: 'https://github.com/netrialiarahmi',
    gradient: 'linear-gradient(135deg,#00c6ff,#0072ff)',
    initials: 'SR',
  },
  {
    title: 'Fintech Risk Assessment',
    category: 'data analytics',
    url: 'https://github.com/netrialiarahmi',
    gradient: 'linear-gradient(135deg,#11998e,#38ef7d)',
    initials: 'FR',
  },
  {
    title: 'Candidate Matching Engine',
    category: 'hr tech',
    url: 'https://github.com/netrialiarahmi',
    gradient: 'linear-gradient(135deg,#ffd700,#ff8c00)',
    initials: 'CM',
  },
  {
    title: 'LexHub – Legal RAG Chatbot',
    category: 'nlp',
    url: 'https://github.com/netrialiarahmi',
    gradient: 'linear-gradient(135deg,#7f00ff,#e100ff)',
    initials: 'LX',
  },
  {
    title: 'Hiring Funnel Tracker',
    category: 'hr tech',
    url: 'https://github.com/netrialiarahmi',
    gradient: 'linear-gradient(135deg,#43cea2,#185a9d)',
    initials: 'HT',
  },
  {
    title: 'LexPort – Document OCR',
    category: 'nlp',
    url: 'https://github.com/netrialiarahmi',
    gradient: 'linear-gradient(135deg,#fc466b,#3f5efb)',
    initials: 'LP',
  },
]

export function ProjectsTab() {
  const [active, setActive] = useState<Category>('all')
  const [selectOpen, setSelectOpen] = useState(false)

  const filtered = useMemo(
    () => (active === 'all' ? projects : projects.filter((p) => p.category === active)),
    [active]
  )

  return (
    <article className="vc-article portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {CATEGORIES.map((c) => (
            <li className="filter-item" key={c}>
              <button
                className={active === c ? 'active' : ''}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <button
            className={`filter-select ${selectOpen ? 'active' : ''}`}
            onClick={() => setSelectOpen((v) => !v)}
            aria-expanded={selectOpen}
          >
            <div className="select-value">{active === 'all' ? 'Select category' : active}</div>
            <div className="select-icon" style={{ transition: '0.2s' }}>
              <CaretDown size={14} weight="bold" />
            </div>
          </button>

          <ul className="select-list">
            {CATEGORIES.map((c) => (
              <li className="select-item" key={c}>
                <button
                  onClick={() => {
                    setActive(c)
                    setSelectOpen(false)
                  }}
                >
                  {c}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="project-list">
          {filtered.map((p) => (
            <li
              className="project-item active"
              key={p.title}
              data-filter-item
              data-category={p.category}
            >
              <a href={p.url} target="_blank" rel="noreferrer">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <Eye size={20} weight="bold" />
                  </div>
                  <div
                    className="project-img-placeholder"
                    style={{ background: p.gradient }}
                  >
                    {p.initials}
                  </div>
                </figure>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-category">{p.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
