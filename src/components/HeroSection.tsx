import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { GithubLogo, LinkedinLogo, EnvelopeSimple, ArrowDown, DownloadSimple } from '@phosphor-icons/react'
import { toast } from 'sonner'
import profileImage from '@/assets/images/Netri_Alia_Rahmi_HR_Data_&_Analytics.jpg'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background gradient + soft animated blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <motion.div
          className="absolute top-16 left-10 w-72 h-72 bg-accent/30 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end order-2 lg:order-1"
          >
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-to-br from-accent via-primary to-accent/40 rounded-[2rem] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
              <div className="relative bg-gradient-to-br from-card/90 to-card/40 backdrop-blur-sm p-1.5 rounded-[1.75rem] border border-accent/20 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Netri Alia Rahmi"
                  className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[22rem] lg:h-[22rem] rounded-3xl object-cover shadow-xl"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-5 py-3 rounded-2xl shadow-lg border-2 border-background"
              >
                <p className="font-bold text-sm mono leading-tight">Most Outstanding Student & Graduate</p>
                <p className="text-xs opacity-90">Airlangga University</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text content */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 tracking-tight leading-[1.05]"
            >
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
                Alia
              </span>
              <span className="text-accent">.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-foreground/60 mb-10 mono"
            >
              HR Data & Analytics Kompas Gramedia
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              <Button
                size="lg"
                className="glow-accent bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => {
                  toast.info('Resume available upon request', {
                    description: 'Please contact me to request my full resume.',
                  })
                }}
              >
                <DownloadSimple size={20} className="mr-2" weight="bold" />
                Download Resume
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-2 justify-center lg:justify-start"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-accent hover:bg-accent/10 transition-all duration-300"
                onClick={() => window.open('https://github.com/netrialiarahmi', '_blank')}
              >
                <GithubLogo size={26} weight="fill" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-accent hover:bg-accent/10 transition-all duration-300"
                onClick={() => window.open('https://linkedin.com/in/netrialiarahmi', '_blank')}
              >
                <LinkedinLogo size={26} weight="fill" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-accent hover:bg-accent/10 transition-all duration-300"
                onClick={() => (window.location.href = 'mailto:netrialiarahmi@gmail.com')}
              >
                <EnvelopeSimple size={26} weight="fill" />
              </Button>
            </motion.div>
          </div>
        </div>

        <motion.button
          variants={itemVariants}
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-accent hover:text-accent/80 transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          aria-label="Scroll to about"
        >
          <ArrowDown size={32} weight="bold" />
        </motion.button>
      </motion.div>
    </section>
  )
}
