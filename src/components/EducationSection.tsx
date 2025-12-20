import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card } from '@/components/ui/card'
import { GraduationCap, Trophy, Translate } from '@phosphor-icons/react'

export function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-accent">Education</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8 bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10">
              <div className="flex items-start gap-6 mb-6">
                <div className="p-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl group-hover:from-accent/30 group-hover:to-primary/30 transition-all">
                  <GraduationCap size={40} className="text-accent" weight="duotone" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                    Data Science Technology
                  </h3>
                  <p className="text-lg text-foreground/80 mb-1">
                    Airlangga University
                  </p>
                  <p className="text-foreground/70 mb-3">
                    Faculty of Advanced Technology and Multidiscipline
                  </p>
                  <p className="text-sm text-accent mono">
                    Sep 2021 - Sep 2025
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg mt-1">
                    <Trophy size={20} className="text-accent" weight="duotone" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Academic Performance</p>
                    <p className="text-xl font-semibold text-accent">GPA: 3.73/4.00</p>
                    <p className="text-sm text-foreground/60">152 credits completed</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg mt-1">
                    <Translate size={20} className="text-accent" weight="duotone" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">English Proficiency</p>
                    <p className="text-lg font-semibold">TOEFL-ITP: 583</p>
                    <p className="text-sm text-foreground/60">CEFR B2 | ELPT: 550</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex flex-wrap gap-3">
                  <div className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
                    <span className="text-sm font-medium text-accent">Most Outstanding Graduate 2025</span>
                  </div>
                  <div className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
                    <span className="text-sm font-medium text-accent">Most Outstanding Student 2022-2023</span>
                  </div>
                  <div className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
                    <span className="text-sm font-medium text-accent">Highest Academic Action Points</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
