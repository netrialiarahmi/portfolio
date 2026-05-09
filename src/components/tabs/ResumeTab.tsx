import { BookOpen, Briefcase } from '@phosphor-icons/react'

const education = [
  {
    school: 'Airlangga University',
    period: '2021 — 2025',
    text: 'B.Sc. in Data Science Technology · GPA 3.73 / 4.00 · TOEFL ITP 583. Awarded 1st Most Outstanding Graduate 2025 across all faculties.',
  },
]

const experience = [
  {
    role: 'HR Data & Analytics',
    company: 'Kompas Gramedia',
    period: '2025 — Present',
    text: 'Building HR analytics products: attrition modeling, talent dashboards, and people-data automation across business units.',
  },
  {
    role: 'Manager, Data & AI Product',
    company: 'PT Govnetic Solution Indonesia',
    period: '2024 — 2025',
    text: 'Led data & AI product development for legal-tech and government clients — including LexHub (RAG legal chatbot), document OCR, and analytics dashboards.',
  },
  {
    role: 'Data Analyst Intern',
    company: 'Ministry of Culture, Republic of Indonesia',
    period: 'Aug — Dec 2024',
    text: 'Built analytics pipelines and dashboards supporting cultural-heritage program decision-making across regional offices.',
  },
  {
    role: 'Assistant Lecturer',
    company: 'Airlangga University',
    period: 'Jan — Jul 2024',
    text: 'Taught machine learning, statistics, and Python programming to undergraduate Data Science Technology students.',
  },
  {
    role: 'Tribe Leader, MSIB Merdeka Mengajar',
    company: 'Ministry of Education, Indonesia',
    period: 'Aug — Dec 2024',
    text: 'Coordinated 230 interns nationwide for Indonesia’s flagship education internship program.',
  },
]

const skills = [
  { name: 'Python & SQL', value: 95 },
  { name: 'Machine Learning & AI', value: 95 },
  { name: 'Data Visualization (Streamlit, Power BI)', value: 92 },
  { name: 'Cloud Platforms (GCP, FastAPI)', value: 88 },
  { name: 'NLP & LLMs (LangChain, RAG)', value: 85 },
]

export function ResumeTab() {
  return (
    <article className="vc-article resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <BookOpen size={16} weight="bold" />
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          {education.map((e) => (
            <li className="timeline-item" key={e.school}>
              <h4 className="h4 timeline-item-title">{e.school}</h4>
              <span>{e.period}</span>
              <p className="timeline-text">{e.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <Briefcase size={16} weight="bold" />
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          {experience.map((x) => (
            <li className="timeline-item" key={x.role + x.company}>
              <h4 className="h4 timeline-item-title">{x.role}</h4>
              <p className="timeline-company">{x.company}</p>
              <span>{x.period}</span>
              <p className="timeline-text">{x.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          {skills.map((s) => (
            <li className="skills-item" key={s.name}>
              <div className="title-wrapper">
                <h5 className="h5">{s.name}</h5>
                <data value={s.value}>{s.value}%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: `${s.value}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
