import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { List, CaretDown } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'education', label: 'Education' },
  { id: 'certifications-skills', label: 'Skills & Certification' },
  {
    id: 'experience-group',
    label: 'Experience',
    children: [
      { id: 'experience', label: 'Work Experience' },
      { id: 'leadership', label: 'Leadership' },
    ],
  },
  {
    id: 'recognition-projects-group',
    label: 'Recognition & Projects',
    children: [
      { id: 'achievements', label: 'Awards & Recognition' },
      { id: 'highlighted-projects', label: 'Competition Projects' },
      { id: 'publications', label: 'Publications' },
      { id: 'projects', label: 'Side Projects' },
    ],
  },
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const allSections: string[] = []
      navItems.forEach(item => {
        if (item.children) {
          item.children.forEach(child => allSections.push(child.id))
        } else {
          allSections.push(item.id)
        }
      })

      const current = allSections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsOpen(false)
  }

  const isChildActive = (children: { id: string; label: string }[]) => {
    return children.some(child => child.id === activeSection)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'nav-blur bg-background/90 border-b border-border shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.button
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold text-accent hover:text-accent/80 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mono">&lt;NAR/&gt;</span>
          </motion.button>

          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => {
              if (item.children) {
                const isActive = isChildActive(item.children)
                return (
                  <DropdownMenu key={item.id}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className={`relative text-sm transition-colors group ${
                          isActive ? 'text-accent' : 'text-foreground/70 hover:text-foreground'
                        }`}
                      >
                        {item.label}
                        <CaretDown
                          size={14}
                          className="ml-1 transition-transform group-data-[state=open]:rotate-180"
                        />
                        {isActive && (
                          <motion.div
                            layoutId="activeSection"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      {item.children.map((child) => (
                        <DropdownMenuItem
                          key={child.id}
                          onClick={() => scrollToSection(child.id)}
                          className={`cursor-pointer ${
                            activeSection === child.id
                              ? 'bg-accent/10 text-accent font-medium'
                              : ''
                          }`}
                        >
                          {child.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )
              }

              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-sm transition-colors ${
                    activeSection === item.id
                      ? 'text-accent'
                      : 'text-foreground/70 hover:text-foreground'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Button>
              )
            })}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="sm"
                className="ml-2 bg-accent text-accent-foreground hover:bg-accent/90"
                onClick={() => {
                  toast.info('Resume available upon request', {
                    description: 'Please contact me to request my full resume.'
                  })
                }}
              >
                Resume
              </Button>
            </motion.div>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <List size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col gap-2 mt-8">
                {navItems.map((item) => {
                  if (item.children) {
                    return (
                      <div key={item.id} className="space-y-1">
                        <div className="text-xs font-semibold text-muted-foreground px-4 py-2 uppercase tracking-wider">
                          {item.label}
                        </div>
                        {item.children.map((child) => (
                          <button
                            key={child.id}
                            onClick={() => scrollToSection(child.id)}
                            className={`w-full text-left px-4 py-2 rounded-md transition-colors text-sm ${
                              activeSection === child.id
                                ? 'bg-accent text-accent-foreground font-medium'
                                : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                            }`}
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    )
                  }

                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-left px-4 py-2 rounded-md transition-colors text-sm ${
                        activeSection === item.id
                          ? 'bg-accent text-accent-foreground font-medium'
                          : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      {item.label}
                    </button>
                  )
                })}
                <Button
                  className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90"
                  onClick={() => {
                    toast.info('Resume available upon request', {
                      description: 'Please contact me to request my full resume.'
                    })
                    setIsOpen(false)
                  }}
                >
                  Resume
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  )
}