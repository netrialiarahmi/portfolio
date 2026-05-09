import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, Presentation, HandHeart, Lightbulb, GraduationCap } from '@phosphor-icons/react'

const leadership = [
  {
    title: 'MSIB Batch 7 - Tribe Leader',
    organization: 'Merdeka Mengajar Platform',
    role: 'Tribe Leader',
    period: 'Aug 2024 - Dec 2024',
    icon: GraduationCap,
    description: 'Selected as the Tribe Leader for the MSIB Batch 7 program, serving as the primary communication bridge between interns, company mentors, the Faculty Advisor (DPP), and the central MSIB team. Responsibilities included managing issues, facilitating stakeholder coordination, and ensuring all participants had a productive and positive internship experience.',
    highlights: [
      {
        title: 'Managed Communication and Alignment for 230 Interns',
        description: 'Served as the central communication lead for 230 interns. Designed and managed the primary information workflow for all administrative and scheduling matters, resulting in a 95% information cascade and preventing miscommunication between students, mentors, and program management.',
      },
      {
        title: 'Achieved a 95%+ Resolution Rate for Intern-Reported Issues',
        description: 'Acted as the first point of contact for all intern issues within the 230-person group. Implemented a systematic resolution process, diagnosing problems and mediating solutions with stakeholders, that successfully resolved over 20+ individual and group-level cases, maintaining a stable and supportive internship environment.',
      },
      {
        title: 'Drove Community Engagement and Enacted Program Improvements',
        description: 'Cultivated a highly engaged community among 230 interns by launching initiatives like weekly check-ins and knowledge-sharing sessions. Systematically advocated for student needs by presenting consolidated feedback, achieving a 99% participation rate in activities.',
      },
    ],
    socialMedia: [
      { name: '@magangmerdeka', url: 'https://www.instagram.com/magangmerdeka/' }
    ],
  },
  {
    title: 'IRIS Research',
    organization: 'Innovative Research on Intelligent System',
    role: 'Co-Founder & Project Manager',
    period: 'Aug 2023 - Dec 2024',
    icon: Users,
    description: 'Co-founded a research group focused on applying intelligent systems to solve real-world problems in law and finance. Led the complete lifecycle of data science initiatives, from conceptualization and data exploration to model deployment and validation. The role also involved mentoring a multidisciplinary student community, fostering data literacy and practical, hands-on skills.',
    highlights: [
      {
        title: 'Managed a Portfolio of 9 Data Science Projects',
        description: 'Oversaw a diverse portfolio of 9 distinct data science projects, supervising the complete model development lifecycle from data exploration and feature engineering to model validation and rigorous backtesting.',
      },
      {
        title: 'Engineered a Predictive Chatbot for Market Trends',
        description: 'Led the development of a predictive chatbot to forecast market trends for 10 leading Indonesian stocks, integrating real-time news and financial metrics into a time series model to provide decision support for beginner investors.',
      },
      {
        title: 'Cultivated a Data-Driven Community for 603 Students',
        description: 'Co-founded and cultivated a data-driven community encompassing 603 multidisciplinary students, significantly improving member skills and employability through hands-on project experience.',
      },
    ],
    socialMedia: [
      { name: '@irisearch', url: 'https://www.instagram.com/irisearch/' },
    ],
  },
  {
    title: 'Indonesia Mengajar - Sarjana Pesisir 3',
    organization: 'Indonesia Mengajar',
    role: 'Project Leader',
    period: 'Jan 2022 - Jul 2022',
    icon: Presentation,
    description: 'As a Project Leader, orchestrated a targeted educational intervention program for prospective university students in the underdeveloped, frontier, and outermost (3T) regions of East Kalimantan. The role involved designing and executing a data-driven mentoring strategy, managing program operations and facilitators, and ensuring students were equipped to successfully transition into higher education.',
    highlights: [
      {
        title: 'Achieved a 47% Average Score Improvement for 52 Students',
        description: 'Developed and implemented a customized mentoring program for 52 students from 3T regions, focusing on targeted exam strategies and academic weaknesses. This resulted in a 47% improvement in average scores from the initial Try Out to the final UTBK.',
      },
      {
        title: 'Drove 97% Program Attendance and 100% College Registration',
        description: 'Boosted student engagement to a 97% attendance rate through structured motivational sessions and weekly mentoring. This sustained involvement culminated in a 100% college registration completion rate by processing all student data to eliminate administrative barriers.',
      },
      {
        title: 'Optimized Project Operations, Boosting Efficiency and Readiness',
        description: 'Streamlined project execution by formulating a data-driven strategy to target high-need areas and implementing a weekly reporting system. This approach improved facilitator efficiency by 73% and, through analysis of 10 simulation sessions, consistently increased participant readiness scores by 17%.',
      },
    ],
    socialMedia: [
      { name: '@ind_mengajar', url: 'https://www.instagram.com/ind_mengajar/' },
    ],
  },
]

export function LeadershipSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="leadership" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Leadership & <span className="text-accent">Community</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </motion.div>

        <div className="space-y-8">
          {leadership.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Icon size={28} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-accent">{item.title}</h3>
                      <p className="text-foreground/70">{item.organization}</p>
                      <p className="text-sm text-accent/80 mono">{item.role}</p>
                      <p className="text-sm text-muted-foreground mono">{item.period}</p>
                    </div>
                  </div>

                  <p className="text-foreground/70 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="space-y-4 mb-4">
                    <p className="text-xs font-semibold text-muted-foreground">Highlights & Achievements:</p>
                    {item.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="space-y-1 pl-4 border-l-2 border-accent/30">
                        <h4 className="text-sm font-semibold text-foreground/90">{highlight.title}</h4>
                        <p className="text-sm text-foreground/70 leading-relaxed">{highlight.description}</p>
                      </div>
                    ))}
                  </div>

                  {item.socialMedia && item.socialMedia.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-xs font-semibold text-muted-foreground mb-2">Social Media:</p>
                      <div className="flex flex-wrap gap-2">
                        {item.socialMedia.map((social, sIndex) => (
                          <a
                            key={sIndex}
                            href={social.url}
                            className="text-xs text-accent hover:underline"
                          >
                            {social.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
