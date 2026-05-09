import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Database, Brain, ChartBar, Code } from '@phosphor-icons/react'

const skills = [
  { name: 'Machine Learning & AI', level: 95, icon: Brain },
  { name: 'Python & SQL', level: 95, icon: Code },
  { name: 'Data Visualization', level: 92, icon: ChartBar },
  { name: 'Cloud Platforms (GCP, AWS)', level: 88, icon: Database },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="text-accent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 bg-card border-border hover:border-accent/50 transition-colors">
              <h3 className="text-2xl font-semibold mb-4 text-accent">Background</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Data Science graduate from Airlangga University (GPA: 3.73/4.00), honored as the Most Outstanding Student and Graduate. 
                I combine expertise in predictive modeling, data, and artificial intelligence with proficiency in Python, TensorFlow, 
                and PyTorch to transform complex data into actionable insights and high-performing models.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                This capability is demonstrated through professional certifications (Professional Data Scientist, Professional Data Analyst), 
                a portfolio of impactful professional projects, and achievements in national and international data science competitions. 
                My experience spans AI product management, data analytics for government initiatives, and business data science.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                I excel in developing ML-powered solutions, from engineering AI engines achieving 90% accuracy to creating dynamic pricing 
                models that increase revenue by 15%. My approach combines technical excellence with strong communication, leadership, and 
                problem-solving skills.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon size={20} className="text-accent" />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground mono">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}