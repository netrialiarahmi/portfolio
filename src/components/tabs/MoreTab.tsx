import { Newspaper, Users, ArrowUpRight } from '@phosphor-icons/react'

const publications = [
  {
    title: 'Indo-LegalBERT: Pretrained Language Model for Indonesian Legal Documents',
    venue: 'Airlangga Journal',
    year: '2025',
    excerpt:
      'Domain-adapted BERT for Indonesian legal text, achieving SOTA on legal NER and classification benchmarks.',
    url: '#',
  },
  {
    title: 'RAG Chatbot for Legal Question Answering Using LangChain',
    venue: 'IEEE Conference',
    year: '2024',
    excerpt:
      'End-to-end retrieval-augmented generation system tailored for Indonesian legal QA with hybrid retrieval.',
    url: '#',
  },
  {
    title: 'LDA Topic Modeling on Indonesian Stock Exchange Annual Reports',
    venue: 'Journal of Statistics & Economics',
    year: '2023',
    excerpt:
      'Unsupervised topic modeling to surface emerging themes from JSE annual reports across sectors and years.',
    url: '#',
  },
]

const leadership = [
  {
    role: 'Tribe Leader',
    org: 'MSIB Merdeka Mengajar — Ministry of Education, Indonesia',
    period: 'Aug — Dec 2024',
    text: 'Coordinated 230 interns across Indonesia for the national Merdeka Mengajar internship program.',
  },
  {
    role: 'Co-Founder',
    org: 'IRIS Research Group, Airlangga University',
    period: 'Aug 2023 — Dec 2024',
    text: 'Founded student research group focused on AI/ML applications, mentoring 40+ undergraduate researchers.',
  },
  {
    role: 'Volunteer Teacher',
    org: 'Indonesia Mengajar — Sarjana Pesisir Batch 3',
    period: '2023',
    text: 'Taught STEM and digital literacy to coastal-area high-school students under Indonesia Mengajar program.',
  },
]

export function MoreTab() {
  return (
    <article className="vc-article blog active" data-page="blog">
      <header>
        <h2 className="h2 article-title">Publications &amp; Leadership</h2>
      </header>

      <section className="blog-posts">
        <div className="title-wrapper" style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 25 }}>
          <div className="icon-box">
            <Newspaper size={16} weight="bold" />
          </div>
          <h3 className="h3">Publications</h3>
        </div>

        <ul className="blog-posts-list">
          {publications.map((p) => (
            <li className="blog-post-item" key={p.title}>
              <a href={p.url} target="_blank" rel="noreferrer">
                <figure className="blog-banner-box">
                  <Newspaper size={48} weight="duotone" />
                </figure>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{p.venue}</p>
                    <span className="dot" />
                    <time>{p.year}</time>
                  </div>
                  <h3 className="h3 blog-item-title">{p.title}</h3>
                  <p className="blog-text">{p.excerpt}</p>
                  <p style={{ marginTop: 10, color: 'var(--orange-yellow-crayola)', fontSize: 13, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    Read more <ArrowUpRight size={12} weight="bold" />
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="timeline" style={{ marginTop: 35 }}>
        <div className="title-wrapper">
          <div className="icon-box">
            <Users size={16} weight="bold" />
          </div>
          <h3 className="h3">Leadership</h3>
        </div>

        <ol className="timeline-list">
          {leadership.map((l) => (
            <li className="timeline-item" key={l.role + l.org}>
              <h4 className="h4 timeline-item-title">{l.role}</h4>
              <p className="timeline-company">{l.org}</p>
              <span>{l.period}</span>
              <p className="timeline-text">{l.text}</p>
            </li>
          ))}
        </ol>
      </section>
    </article>
  )
}
