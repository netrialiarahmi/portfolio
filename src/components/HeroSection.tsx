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
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

export function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent via-primary to-accent/50 rounded-3xl blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="absolute -inset-2 bg-gradient-to-br from-accent/40 to-primary/40 rounded-3xl blur-xl opacity-50" />
              <div className="relative bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-sm p-2 rounded-3xl border-2 border-accent/20 shadow-2xl">
                <img 
                  src={profileImage} 
                  alt="Netri Alia Rahmi - Data Science Professional" 
                  className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl object-cover shadow-xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-2xl shadow-lg border-2 border-background">
                <p className="font-bold text-sm mono">Most Outstanding Student & Graduate</p>
                <p className="text-xs opacity-90">Airlangga University</p>
              </div>
            </div>
          </motion.div>

          <div className="text-center lg:text-left order-1 lg:order-2">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-5 py-2.5 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-semibold mono tracking-wide">
                Data Science Professional
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight leading-tight"
            >
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
                Netri Alia Rahmi
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl lg:text-2xl text-foreground/80 mb-4 leading-relaxed"
            >
              Transforming complex data into actionable insights and high-performing models
            </motion.p>

            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start text-sm text-foreground/60">
                <span className="px-3 py-1 bg-muted/50 rounded-full mono">Python</span>
                <span className="px-3 py-1 bg-muted/50 rounded-full mono">TensorFlow</span>
                <span className="px-3 py-1 bg-muted/50 rounded-full mono">PyTorch</span>
                <span className="px-3 py-1 bg-muted/50 rounded-full mono">SQL</span>
                <span className="px-3 py-1 bg-muted/50 rounded-full mono">GCP</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                className="glow-accent bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.location.href = 'mailto:netrialiarahmi@gmail.com'}
              >
                <EnvelopeSimple size={20} className="mr-2" weight="fill" />
                Get In Touch
              </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-accent/50 text-accent hover:bg-accent/10 hover:border-accent shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => {
                toast.info('Resume available upon request', {
                  description: 'Please contact me to request my full resume.'
                })
              }}
            >
              <DownloadSimple size={20} className="mr-2" weight="bold" />
              Download Resume
            </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-3 justify-center lg:justify-start">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-accent hover:bg-accent/10 transition-all duration-300"
                onClick={() => window.open('https://github.com/netrialiarahmi', '_blank')}
              >
                <GithubLogo size={28} weight="fill" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-accent hover:bg-accent/10 transition-all duration-300"
                onClick={() => window.open('https://linkedin.com/in/netrialiarahmi', '_blank')}
              >
                <LinkedinLogo size={28} weight="fill" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-accent hover:bg-accent/10 transition-all duration-300"
                onClick={() => window.location.href = 'mailto:netrialiarahmi@gmail.com'}
              >
                <EnvelopeSimple size={28} weight="fill" />
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
        >
          <ArrowDown size={32} weight="bold" />
        </motion.button>
      </motion.div>
    </section>
  )
}
