import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card } from '@/components/ui/card'
import { Trophy, Medal, Crown, Star, Sparkle, Certificate } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'

const achievements = [
  {
    title: '1st Most Outstanding Graduate',
    issuer: 'Airlangga University',
    year: '2025',
    description: 'Highest honor awarded to the most outstanding graduate across all faculties',
    icon: Crown,
    highlight: true,
    certificateUrl: 'https://drive.google.com/file/d/1O8XVWeTmai0mlyhAfqRtKlnMd-iYPB1K/view?usp=sharing',
  },
  {
    title: '3rd Winner Big Data Competition',
    issuer: 'Public Health International Competition (PHIC)',
    year: '2024',
    description: 'International competition focusing on big data applications in public health',
    icon: Trophy,
    highlight: true,
    certificateUrl: 'https://drive.google.com/file/d/13EDfHL7b0kiitCsVSgLVb2GlptBfhj6k/view?usp=sharing',
  },
  {
    title: '1st Winner Data Analytics Competition',
    issuer: 'FindIT! UGM',
    year: '2024',
    description: 'First place in prestigious data analytics competition at Gadjah Mada University',
    icon: Trophy,
    highlight: true,
    certificateUrl: 'https://drive.google.com/file/d/1KIbskOXcN_7vvpOuLaR_ro3NdZr_2hB2/view?usp=sharing',
  },
  {
    title: '1st Place Playground Datathon',
    issuer: 'RISTEK UI',
    year: '2024',
    description: 'Winner of intensive data science datathon at University of Indonesia',
    icon: Trophy,
    certificateUrl: 'https://drive.google.com/file/d/1US8moDivY8G4Z11ct4fG3JHK9sNx4SGe/view?usp=sharing',
  },
  {
    title: '3rd Winner Data Science Competition',
    issuer: 'ICONIC IT Siliwangi University',
    year: '2024',
    description: '3rd place in fintech risk assessment and mental health classification challenges, combining ML automation with LLM-powered insights',
    icon: Medal,
    certificateUrl: 'https://drive.google.com/file/d/1u7NFWdYIgamHiTJrTazBwcn04_ucGtAv/view?usp=sharing',
  },
  {
    title: 'Most Favorite Project',
    issuer: '24-hours Data Science Hackathon Bukit Vista',
    year: '2024',
    description: 'Community favorite project in intensive 24-hour data science hackathon',
    icon: Star,
    certificateUrl: 'https://drive.google.com/file/d/1xwNf49MNekkwF2WpBWRJ5DJr7jqARU-l/view?usp=sharing',
  },
  {
    title: '3rd Winner Data Science Competition',
    issuer: 'MCF ITB',
    year: '2024',
    description: 'Top placement in competitive data science challenge at Bandung Institute of Technology',
    icon: Medal,
    certificateUrl: 'https://drive.google.com/file/d/1la5k_S96xPbzsCJ65KqsitSYSYJXDWdh/view?usp=sharing',
  },
  {
    title: '3rd Winner Data Science Competition',
    issuer: 'Gammafest IPB',
    year: '2024',
    description: 'Achievement in data science competition at Bogor Agricultural University',
    icon: Medal,
    certificateUrl: 'https://drive.google.com/file/d/1VVK6bYCl9aawBfRpoQHVpp-IHUfZVbda/view?usp=sharing',
  },
  {
    title: 'Best Presentation',
    issuer: 'Data Science Competition Gammafest IPB',
    year: '2024',
    description: 'Recognized for exceptional presentation and communication of data science solutions',
    icon: Sparkle,
    certificateUrl: 'https://drive.google.com/file/d/1E-_cqO5ygwXqAR1qh_o3HT__DaED97KA/view?usp=sharing',
  },
  {
    title: '2nd Winner ML Competition',
    issuer: 'Data Slayer IT Telkom',
    year: '2024',
    description: 'Silver medal in machine learning competition at Telkom Institute of Technology',
    icon: Medal,
    certificateUrl: 'https://drive.google.com/file/d/15ph8dw5VNU-g72Oz0oMHSq9RwyKypyfY/view?usp=sharing',
  },
  {
    title: 'Highest Academic Action Points',
    issuer: 'RUMA, Airlangga University',
    year: '2024',
    description: 'Winner of RUMA (Ruang Apresiasi Mahasiswa) for highest academic action points',
    icon: Crown,
    highlight: true,
  },
  {
    title: '1st Most Outstanding Student',
    issuer: 'Faculty of Advanced Technology',
    year: '2023',
    description: 'Top student recognition at Faculty of Advanced Technology and Multidiscipline',
    icon: Crown,
    highlight: true,
    certificateUrl: 'https://drive.google.com/file/d/1oqztpvJ_qfPWpZnxBQVD7vwiZth52Xrn/view?usp=sharing',
  },
  {
    title: '1st Most Outstanding Student',
    issuer: 'Faculty of Advanced Technology',
    year: '2022',
    description: 'Consecutive recognition as most outstanding student in faculty',
    icon: Crown,
    certificateUrl: 'https://drive.google.com/file/d/1-Z4L2_HG8j7BsU_pFs9RCS8X5NK8bEUO/view?usp=sharing',
  },
  {
    title: 'Best Metric Performance',
    issuer: 'Satria Data, Big Data Challenge',
    year: '2023',
    description: 'Achieved best metric performance in national big data challenge division',
    icon: Trophy,
    certificateUrl: 'https://drive.google.com/file/d/1jcnYlHCuTB01uuKKHR9X6RddMx14erwc/view?usp=sharing',
  },
  {
    title: '2nd Winner Student Paper Competition',
    issuer: 'Statistics Enthusiastic Asia',
    year: '2022',
    description: 'Runner-up in Asia-wide student paper competition for statistics',
    icon: Medal,
    certificateUrl: 'https://drive.google.com/file/d/145QtxymQ1cg8Gpsc2pSg9cgUC6uWkPAE/view?usp=sharing',
  },
  {
    title: '1st Winner Science Competition',
    issuer: 'Kompetisi Indihome Generasi Prestasi',
    year: '2020',
    description: 'First place in national science competition for high school students',
    icon: Trophy,
    certificateUrl: 'https://drive.google.com/file/d/1X9JVCcAgKumPcEk8cb9wAkSFjbpqqDKy/view?usp=sharing',
  },
]

export function AchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const totalAchievements = achievements.length + 20

  return (
    <section id="achievements" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Awards & <span className="text-accent">Recognition</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 border border-accent/30 rounded-2xl glow-accent"
          >
            <Trophy size={32} className="text-accent" weight="duotone" />
            <div className="text-left">
              <p className="text-3xl font-bold text-accent mono">{totalAchievements}+</p>
              <p className="text-sm text-foreground/70">Awards & Recognition</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto"
        >
          Recognized for excellence in data science through national and international competitions, 
          academic achievements, and innovative project contributions
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
              >
                <Card className={`p-6 h-full bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group hover:-translate-y-1 ${
                  achievement.highlight ? 'border-accent/30 bg-gradient-to-br from-accent/5 to-primary/5' : ''
                }`}>
                  <div className="flex flex-col h-full">
                    <div className="mb-4 p-3 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg w-fit group-hover:from-accent/30 group-hover:to-primary/30 transition-all">
                      <Icon size={28} className="text-accent" weight="duotone" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-foreground/70 mb-1">{achievement.issuer}</p>
                    <p className="text-xs text-accent mono mb-3">{achievement.year}</p>
                    <p className="text-sm text-foreground/60 leading-relaxed flex-1 mb-4">
                      {achievement.description}
                    </p>
                    {achievement.certificateUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-accent/30 hover:bg-accent/10 hover:border-accent text-accent"
                        onClick={() => window.open(achievement.certificateUrl, '_blank')}
                      >
                        <Certificate size={16} className="mr-2" weight="duotone" />
                        View Certificate
                      </Button>
                    )}
                  </div>
                </Card>
              </motion.div>
            )
          })}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: 0.4 + achievements.length * 0.05 }}
          >
            <Card className="p-6 h-full bg-gradient-to-br from-muted/50 to-accent/5 border-2 border-dashed border-accent/30 hover:border-accent/50 transition-all duration-300 flex items-center justify-center">
              <div className="text-center">
                <Sparkle size={40} className="text-accent mx-auto mb-3" weight="duotone" />
                <p className="text-2xl font-bold text-accent mb-2">+20</p>
                <p className="text-sm text-foreground/70">Other Awards<br/>& Recognition</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}