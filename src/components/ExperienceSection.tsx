import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Briefcase } from '@phosphor-icons/react'

const experiences = [
  {
    title: 'HR Data & Analytics Intern',
    company: 'Kompas Cyber Media',
    location: 'Jakarta, Indonesia',
    period: 'Oct 2025 - Now',
    highlights: [
      {
        title: 'Automated Employee Communication Workflows',
        description: 'Automated employee communication workflows using Excel VBA macros, reducing message delivery time by 60% and improving reach to 50+ employees.',
      },
      {
        title: 'Developed AI-Powered Candidate Matching System',
        description: 'Developed end-to-end AI-powered candidate matching system using Gemini 2.5 API for resume screening, achieving 85% accuracy in candidate-job fit scoring based on HR competency indicators. Deployed via Streamlit with automated daily data sync from Kalibrr using Selenium WebDriver and Github Actions.',
      },
      {
        title: 'Built Real-Time Hiring Tracker Dashboard',
        description: 'Built real-time hiring tracker dashboard with Streamlit and Python, implementing Javascript-based web scraping for Microsoft data integration, automated to refresh daily at 7:00 AM WIB via Github Actions.',
      },
    ],
    techStack: ['Python', 'Excel VBA', 'Streamlit', 'Gemini 2.5 API', 'Selenium WebDriver', 'Github Actions', 'Javascript', 'Web Scraping', 'Pandas', 'Data Analysis'],
    projects: [
      { name: 'Kompas.com Candidate Matching', url: '' },
      { name: 'Kompas.com Hiring Tracker', url: 'https://kompas-hiringtracker.streamlit.app/' },
    ],
  },
  {
    title: 'Manager of Data & AI Product',
    company: 'PT Govnetic Solution Indonesia',
    location: 'Jakarta, Indonesia',
    period: 'Dec 2024 - Sep 2025',
    highlights: [
      {
        title: 'Developed LexHub Legal-Tech Platform with Multi-Database Architecture',
        description: 'Developed LexHub legal-tech platform, architecting multi-database system using Pinecone VDB for vector embeddings, Google Cloud Storage for document files, Firestore for JSON metadata, and Neo4j for graph relationships, successfully digitizing 57,043 regulations and 22,631 supreme court decisions with relationship mapping.',
      },
      {
        title: 'Developed Lexia Context Analysis Engine Achieving 92% Accuracy',
        description: 'Developed Lexia context analysis engine by benchmarking five NLI base architectures on a supervised Indo-Legal dataset, evaluating accuracy, F1-score and training time to select the optimal model, deployed the best performing architecture using transformers, achieving 92% accuracy and 89% F1-score in detecting regulatory contradictions.',
      },
      {
        title: 'Built Lexport OCR Pipeline Processing 500+ Documents',
        description: 'Built Lexport OCR pipeline leveraging GCP Vertex AI and Python for automated document digitization, processing 500+ scanned legal documents from users with 95% accuracy and reducing manual data entry time by 80%.',
      },
      {
        title: 'Engineered Semantic Legal Search System with 65% Faster Response Time',
        description: 'Engineered semantic legal search system utilizing FastAPI, IndoLegalBERT embeddings to query Pinecone VDB, conducting A/B testing between the baseline search and optimized pipeline with query caching and personalized vector indexing, resulting in 65% faster average response time for repeated queries and an 88% relevance score.',
      },
    ],
    techStack: ['Python', 'PyTorch', 'Transformers', 'XLM-RoBERTa', 'BERT', 'NLP', 'LangChain', 'Pinecone', 'Neo4j', 'Graph RAG', 'Firestore', 'GCP Vertex AI', 'GCP Storage', 'Vector Databases', 'FastAPI', 'A/B Testing'],
    projects: [
      { name: 'IndoLegalBERT Variant', url: '' },
      { name: 'Lexia', url: '' },
      { name: 'LexHub', url: '' },
      { name: 'Lexport', url: '' },
    ],
  },
  {
    title: 'Data Analyst Intern',
    company: 'Ministry of Culture RI',
    location: 'Jakarta, Indonesia',
    period: 'Aug 2024 - Dec 2024',
    highlights: [
      {
        title: 'Conducted Mixed-Method Analysis for Local Food Sovereignty Programs',
        description: 'Conducted mixed-method analysis of qualitative and quantitative survey data from 30 households in Lembata, NTT using Python (pandas, numpy) for data cleaning, transformation and joining datasets with SQL queries, identifying 8 key trends for local food sovereignty and cultural sustainability programs.',
      },
      {
        title: 'Developed Interactive Power BI Dashboards for Sidakerta Platform',
        description: 'Developed interactive Power BI dashboards with descriptive statistics and data visualizations using Matplotlib and Seaborn for Sidakerta platform, and fine-tuned Nvidia Llama 3.1 Nemotron 70B using LangChain for cultural insight generation, accelerating report generation by 20% and enabling real-time stakeholder queries through clear data storytelling.',
      },
      {
        title: 'Formulated 10 Evidence-Based Policy Recommendations',
        description: 'Formulated 10 evidence-based policy recommendations using Python for hypothesis testing and forecasting analysis to support "Makan Bergizi Gratis Pangan Lokal" initiative in NTT with projected 25% improvement in village food security metrics, and influencing allocation of Rp 10 million for cultural preservation programs through adaptability in presenting complex data insights.',
      },
    ],
    techStack: ['Python', 'Pandas', 'NumPy', 'SQL', 'Power BI', 'Matplotlib', 'Seaborn', 'Llama 3.1', 'LangChain', 'Hypothesis Testing', 'Forecasting', 'Data Storytelling'],
    projects: [
      { name: 'Sidakerta.com', url: '#' },
      { name: 'TanamTepat', url: '#' },
      { name: 'Pangan Berdaulat', url: '#' },
    ],
  },
  {
    title: 'Assistant Lecturer',
    company: 'Airlangga University',
    location: 'Surabaya, Indonesia',
    period: 'Jan 2024 - Jul 2024',
    description: 'Statistical Methods, Statistical Computation, Basic Database, NLP',
    highlights: [
      {
        title: 'Instructed 60 Students in Statistical Computation and Statistical Methods',
        description: 'Instructed 60 students in Statistical Computation and Statistical Methods using R programming and Python (pandas, NumPy, Matplotlib, Seaborn) for data wrangling, cleaning, transformation, and visualization; taught supervised learning (regression, classification) and unsupervised learning (clustering) techniques, achieving 9.02% improvement in average scores with 13 students scoring 90-100 on midterm.',
      },
      {
        title: 'Delivered Hands-On Training in SQL Database Management and Statistical Analysis',
        description: 'Delivered hands-on training in SQL database management, descriptive statistics, hypothesis testing (t-tests, ANOVA, chi-square), and A/B testing frameworks, connecting statistical analysis with business KPIs through problem-solving exercises, resulting in average practicum score of 83.45 with 85% of students applying skills in internships at Bank Indonesia.',
      },
      {
        title: 'Created 15+ Data Storytelling Tutorial Materials',
        description: 'Created 15+ data storytelling tutorial materials demonstrating critical thinking in statistical concepts, fostering collaboration across student teams and building communication skills for presenting technical insights to non-technical audiences with attention to detail.',
      },
    ],
    techStack: ['R', 'Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'SQL', 'Statistical Modeling', 'Hypothesis Testing', 'ANOVA', 'Chi-Square', 'A/B Testing', 'Supervised Learning', 'Unsupervised Learning'],
    projects: [],
  },
  {
    title: 'Business Data Scientist',
    company: 'Bukit Vista',
    location: 'Bali, Indonesia',
    period: 'Sep 2023 - Dec 2023',
    highlights: [
      {
        title: 'Developed Time-Series Forecasting Models Achieving 87% Forecast Accuracy',
        description: 'Developed time-series forecasting models using Python (Prophet, statsmodels ARIMA) and Jupyter Notebook with unsupervised learning techniques to predict rental demand patterns, achieving 87% forecast accuracy and informing dynamic pricing strategy that increased revenue per listing by average of 15%.',
      },
      {
        title: 'Engineered Automated Customer Service Chatbot Resolving 60% of Inquiries',
        description: 'Engineered automated customer service chatbot by fine-tuning Llama3 model and PyTorch on 10,000+ guest interaction records, successfully resolving 60% of common inquiries without human intervention.',
      },
      {
        title: 'Performed Exploratory Data Analysis on 200+ Listing Performance Metrics',
        description: 'Performed exploratory data analysis on 200+ listing performance metrics using Python (pandas, NumPy) for data cleaning and transformation with SQL queries, establishing standardized feature-enhancement methodology that drove 10% increase in booking conversion rates.',
      },
      {
        title: 'Conducted Backtesting and A/B Testing Across 50+ Properties',
        description: 'Conducted backtesting and A/B testing using Python for hypothesis testing across 50+ properties over 3-month period, validating pricing model reliability and visualizing results in dashboards.',
      },
    ],
    techStack: ['Python', 'Prophet', 'ARIMA', 'statsmodels', 'Jupyter Notebook', 'Llama3', 'PyTorch', 'Pandas', 'NumPy', 'SQL', 'A/B Testing', 'EDA', 'Time Series Forecasting'],
    projects: [
      { name: 'GAIA', url: '' },
    ],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Work <span className="text-accent">Experiences</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 timeline-line" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-8 ${
                  index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                }`}
              >
                <div className={index % 2 === 0 ? 'lg:text-left' : 'lg:col-start-2'}>
                  <Card className="p-6 bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <Briefcase size={24} className="text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-accent">{exp.title}</h3>
                        <p className="text-foreground/70">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                        <p className="text-sm text-muted-foreground mono">{exp.period}</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-4">
                      {exp.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="space-y-1">
                          <h4 className="text-sm font-semibold text-foreground/90">{highlight.title}</h4>
                          <p className="text-sm text-foreground/70 leading-relaxed">{highlight.description}</p>
                        </div>
                      ))}
                    </div>

                    {exp.projects.length > 0 && (
                      <div className="mb-4 pb-4 border-b border-border">
                        <p className="text-xs font-semibold text-muted-foreground mb-2">Related Projects:</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.projects.map((project, pIndex) => (
                            project.url ? (
                              <a
                                key={pIndex}
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-accent hover:underline"
                              >
                                {project.name}
                              </a>
                            ) : (
                              <span
                                key={pIndex}
                                className="text-xs text-accent/80"
                              >
                                {project.name}
                              </span>
                            )
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-2">Tech Stack:</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((tech, tIndex) => (
                          <Badge key={tIndex} variant="secondary" className="bg-accent/10 text-accent border-accent/30 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="hidden lg:flex items-center justify-center">
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg shadow-accent/50" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}