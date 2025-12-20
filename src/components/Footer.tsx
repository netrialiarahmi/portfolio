import { Button } from '@/components/ui/button'
import { GithubLogo, LinkedinLogo, EnvelopeSimple, FileArrowDown, Heart } from '@phosphor-icons/react'
import { toast } from 'sonner'

export function Footer() {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('netrialiarahmi@gmail.com')
    toast.success('Email copied to clipboard!')
  }

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">
              Netri Alia Rahmi
            </h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Data Science graduate from Airlangga University, passionate about transforming complex data into 
              actionable insights through AI and machine learning. Let's connect and collaborate on exciting projects.
            </p>
            <p className="text-foreground/60 text-xs mt-3">
              Surabaya, Indonesia
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About Me', 'Experience', 'Leadership', 'Achievements', 'Projects', 'Publications'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const id = item.toLowerCase().replace(' ', '')
                    const sectionMap: Record<string, string> = {
                      'aboutme': 'about',
                      'experience': 'experience',
                      'leadership': 'leadership',
                      'achievements': 'achievements',
                      'projects': 'projects',
                      'publications': 'publications'
                    }
                    document.getElementById(sectionMap[id])?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="block text-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="hover:border-accent hover:text-accent"
                onClick={() => window.open('https://github.com/netrialiarahmi', '_blank')}
              >
                <GithubLogo size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="hover:border-accent hover:text-accent"
                onClick={() => window.open('https://linkedin.com/in/netrialiarahmi', '_blank')}
              >
                <LinkedinLogo size={20} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleCopyEmail}
                className="hover:border-accent hover:text-accent"
              >
                <EnvelopeSimple size={20} />
              </Button>
            </div>
            <Button
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={() => toast.info('Resume available upon request')}
            >
              <FileArrowDown size={20} className="mr-2" />
              Download Resume
            </Button>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-center text-sm text-foreground/60">
            © {new Date().getFullYear()} Netri Alia Rahmi. Built with{' '}
            <Heart size={14} className="inline text-accent" weight="fill" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  )
}