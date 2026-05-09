import { useState } from 'react'
import {
  Brain,
  Code,
  ChartBar,
  UsersThree,
  Trophy,
  Medal,
  Crown,
  Star,
  Sparkle,
} from '@phosphor-icons/react'
import { AchievementModal, type Achievement } from '../AchievementModal'

const services = [
  {
    icon: <Brain size={32} weight="duotone" />,
    title: 'ML & Predictive Modeling',
    text: 'Building production-ready models for classification, regression, and forecasting using Python, scikit-learn, TensorFlow, and PyTorch.',
  },
  {
    icon: <Code size={32} weight="duotone" />,
    title: 'Data Engineering',
    text: 'End-to-end data pipelines with Python, SQL, and cloud platforms (GCP) — from ingestion and ETL to model deployment with FastAPI.',
  },
  {
    icon: <UsersThree size={32} weight="duotone" />,
    title: 'HR Analytics & Automation',
    text: 'Designing analytics products for talent acquisition, attrition prediction, and people insights at scale for media and tech companies.',
  },
  {
    icon: <ChartBar size={32} weight="duotone" />,
    title: 'Data Visualization & BI',
    text: 'Crafting interactive dashboards with Streamlit, Power BI, and Plotly that turn raw data into decisions for stakeholders.',
  },
]

const achievements: Achievement[] = [
  {
    title: '1st Most Outstanding Graduate',
    issuer: 'Airlangga University',
    year: '2025',
    description:
      'Highest honor awarded to the most outstanding graduate across all faculties of Airlangga University, recognizing academic excellence, research contribution, and leadership.',
    icon: <Crown size={32} weight="fill" />,
    certificateUrl:
      'https://drive.google.com/file/d/1O8XVWeTmai0mlyhAfqRtKlnMd-iYPB1K/view?usp=sharing',
  },
  {
    title: '3rd Winner Big Data Competition',
    issuer: 'Public Health International Competition (PHIC)',
    year: '2024',
    description:
      'International competition focusing on big data applications in public health. Built APTO — a brain tumor classification model with explainable AI for clinical decision support.',
    icon: <Trophy size={32} weight="fill" />,
    certificateUrl:
      'https://drive.google.com/file/d/13EDfHL7b0kiitCsVSgLVb2GlptBfhj6k/view?usp=sharing',
  },
  {
    title: '1st Winner Data Analytics Competition',
    issuer: 'FindIT! UGM',
    year: '2024',
    description:
      'First place in prestigious data analytics competition at Gadjah Mada University with a promotion-optimization solution maximizing ROI for retail campaigns.',
    icon: <Trophy size={32} weight="fill" />,
    certificateUrl:
      'https://drive.google.com/file/d/1KIbskOXcN_7vvpOuLaR_ro3NdZr_2hB2/view?usp=sharing',
  },
  {
    title: '1st Place Playground Datathon',
    issuer: 'RISTEK UI',
    year: '2024',
    description:
      'Winner of intensive data science datathon at University of Indonesia covering EDA, feature engineering, and ML modeling under tight time constraints.',
    icon: <Trophy size={32} weight="fill" />,
    certificateUrl:
      'https://drive.google.com/file/d/1US8moDivY8G4Z11ct4fG3JHK9sNx4SGe/view?usp=sharing',
  },
  {
    title: '3rd Winner Data Science Competition',
    issuer: 'MCF ITB',
    year: '2024',
    description:
      'Top placement at Bandung Institute of Technology with a cardiovascular risk prediction model integrating clinical features and ensemble learning.',
    icon: <Medal size={32} weight="fill" />,
    certificateUrl:
      'https://drive.google.com/file/d/1la5k_S96xPbzsCJ65KqsitSYSYJXDWdh/view?usp=sharing',
  },
  {
    title: 'Most Favorite Project',
    issuer: 'Bukit Vista 24-hours Hackathon',
    year: '2024',
    description:
      'Community favorite project in intensive 24-hour data science hackathon — built a hospitality analytics dashboard appreciated by industry judges.',
    icon: <Star size={32} weight="fill" />,
    certificateUrl:
      'https://drive.google.com/file/d/1xwNf49MNekkwF2WpBWRJ5DJr7jqARU-l/view?usp=sharing',
  },
  {
    title: '3rd Winner Data Science Competition',
    issuer: 'ICONIC IT Siliwangi',
    year: '2024',
    description:
      '3rd place in fintech risk assessment and mental-health classification challenges, combining ML automation with LLM-powered insights.',
    icon: <Medal size={32} weight="fill" />,
    certificateUrl:
      'https://drive.google.com/file/d/1u7NFWdYIgamHiTJrTazBwcn04_ucGtAv/view?usp=sharing',
  },
  {
    title: 'Best Presentation',
    issuer: 'Gammafest IPB',
    year: '2024',
    description:
      'Recognized for exceptional presentation and communication of data science solutions during the national Gammafest competition.',
    icon: <Sparkle size={32} weight="fill" />,
    certificateUrl:
      'https://drive.google.com/file/d/1E-_cqO5ygwXqAR1qh_o3HT__DaED97KA/view?usp=sharing',
  },
]

const techStack = [
  'Python',
  'SQL',
  'TensorFlow',
  'PyTorch',
  'Scikit-learn',
  'Streamlit',
  'FastAPI',
  'LangChain',
  'GCP',
  'Power BI',
  'Plotly',
  'Pandas',
]

export function AboutTab() {
  const [openItem, setOpenItem] = useState<Achievement | null>(null)

  return (
    <article className="vc-article about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I’m Netri Alia Rahmi — a Data Scientist with 3+ years of experience
          shipping end-to-end ML, analytics, and AI products across HR-tech,
          public sector, and academia. Currently building HR Data &amp;
          Analytics at Kompas Gramedia, after leading data &amp; AI products at
          PT Govnetic Solution Indonesia.
        </p>
        <p>
          I enjoy turning messy real-world data into clear decisions — through
          predictive modeling, automated pipelines, dashboards, and
          LLM-powered tools. Awarded the 1st Most Outstanding Graduate at
          Airlangga University 2025 with 14+ national/international data
          science competition wins.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What I’m doing</h3>
        <ul className="service-list">
          {services.map((s) => (
            <li className="service-item" key={s.title}>
              <div className="service-icon-box">{s.icon}</div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{s.title}</h4>
                <p className="service-item-text">{s.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Achievements</h3>
        <ul className="testimonials-list has-scrollbar">
          {achievements.map((a) => (
            <li className="testimonials-item" key={a.title + a.issuer}>
              <button
                type="button"
                className="content-card"
                data-testimonials-item
                onClick={() => setOpenItem(a)}
                style={{ width: '100%', textAlign: 'left' }}
              >
                <figure className="testimonials-avatar-box">{a.icon}</figure>
                <h4 className="h4 testimonials-item-title">{a.title}</h4>
                <p className="testimonials-issuer">
                  {a.issuer} · {a.year}
                </p>
                <p className="testimonials-text">{a.description}</p>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="clients">
        <h3 className="h3 clients-title">Tech Stack</h3>
        <ul className="clients-list has-scrollbar">
          {techStack.map((t) => (
            <li className="clients-item" key={t}>
              {t}
            </li>
          ))}
        </ul>
      </section>

      <AchievementModal
        open={!!openItem}
        onClose={() => setOpenItem(null)}
        achievement={openItem}
      />
    </article>
  )
}
