import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Certificate, Code, BracketsAngle } from '@phosphor-icons/react'

const certifications = [
  { name: 'Professional Data Scientist', issuer: 'Datacamp', year: '2024', url: 'https://www.datacamp.com/certificate/DS0029417384625' },
  { name: 'Professional Data Analyst', issuer: 'Datacamp', year: '2024', url: 'https://www.datacamp.com/certificate/DA0026125802710' },
  { name: 'Data Analyst in PowerBI', issuer: 'Datacamp', year: '2024', url: 'https://www.datacamp.com/completed/statement-of-accomplishment/track/8843c7e7740519b5bfd73e01750a8271ccff2269' },
  { name: 'Data Analyst in Tableau', issuer: 'Datacamp', year: '2024', url: 'https://www.datacamp.com/completed/statement-of-accomplishment/track/92a1a44e4f051fe6aa2167424f2aa99d761f6858' },
  { name: 'SQL Associate', issuer: 'Datacamp', year: '2024', url: 'https://www.datacamp.com/certificate/SQA0012605218260' },
  { name: 'Data Engineer', issuer: 'Datacamp', year: '2024', url: 'https://www.datacamp.com/certificate/DE0011879722118' },
  { name: 'SQL Advanced', issuer: 'HackerRank', year: '2025', url: 'https://www.hackerrank.com/certificates/iframe/687e01291620' },
  { name: 'Problem Solving', issuer: 'HackerRank', year: '2025', url: 'https://www.hackerrank.com/certificates/iframe/82339716d6a5' },
  { name: 'Python', issuer: 'HackerRank', year: '2025', url: 'https://www.hackerrank.com/certificates/iframe/07ccfb121c05' },
]

const technicalSkills = [
  'Python',
  'SQL',
  'R',
  'Microsoft Power BI',
  'Tableau',
  'Microsoft Excel',
  'Google Cloud Platform',
  'AWS',
  'TensorFlow',
  'PyTorch',
  'Scikit-learn',
  'Pandas',
  'NumPy',
  'Matplotlib',
  'Seaborn',
  'Statsmodels',
  'Prophet',
  'LangChain',
  'Large Language Models',
  'Function/Tool Calling',
  'Git',
  'PyCaret',
  'SPSS',
  'Minitab',
  'Stata',
  'BeautifulSoup',
  'Scrapy',
  'MLflow',
  'Time Series Forecasting',
  'NLP',
  'Supervised Learning',
  'Unsupervised Learning'
]

const softSkills = [
  'Problem-solving',
  'Critical Thinking',
  'Communication',
  'Team Collaboration',
  'Adaptability',
  'Time Management',
  'Leadership',
  'Analytical Thinking',
  'Initiative',
  'Attention to Detail'
]

export function CertificationSkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="certifications-skills" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Certifications & <span className="text-accent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 bg-card border-border hover:border-accent/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg">
                  <Certificate size={28} className="text-accent" weight="duotone" />
                </div>
                <h3 className="text-2xl font-bold">Professional Certifications</h3>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <motion.a
                    key={index}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    className="p-4 bg-muted/50 rounded-lg border border-border hover:border-accent/50 transition-all group hover:bg-accent/5 cursor-pointer"
                  >
                    <p className="font-semibold text-sm mb-1 group-hover:text-accent transition-colors">
                      {cert.name}
                    </p>
                    <p className="text-xs text-foreground/60">{cert.issuer}</p>
                    <p className="text-xs text-accent mono mt-1">{cert.year}</p>
                  </motion.a>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-8 bg-card border-border hover:border-accent/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg">
                  <Code size={28} className="text-accent" weight="duotone" />
                </div>
                <h3 className="text-2xl font-bold">Technical Skills</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2, delay: 0.5 + index * 0.02 }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="px-3 py-1.5 text-xs bg-muted hover:bg-accent/20 hover:text-accent hover:border-accent/50 transition-all cursor-default border border-border"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="p-8 bg-card border-border hover:border-accent/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg">
                  <BracketsAngle size={28} className="text-accent" weight="duotone" />
                </div>
                <h3 className="text-2xl font-bold">Soft Skills</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2, delay: 0.6 + index * 0.02 }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="px-3 py-1.5 text-xs bg-muted hover:bg-accent/20 hover:text-accent hover:border-accent/50 transition-all cursor-default border border-border"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
