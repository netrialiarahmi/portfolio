import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Toaster } from '@/components/ui/sonner'
import { ProfileSidebar } from '@/components/ProfileSidebar'
import { TabNav } from '@/components/TabNav'
import { AboutTab } from '@/components/tabs/AboutTab'
import { ResumeTab } from '@/components/tabs/ResumeTab'
import { ProjectsTab } from '@/components/tabs/ProjectsTab'
import { MoreTab } from '@/components/tabs/MoreTab'

export type TabKey = 'about' | 'resume' | 'projects' | 'more'

const tabVariants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
}

function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('about')

  return (
    <div className="vcard-root">
      <main className="vcard-main">
        {/* Left sidebar */}
        <ProfileSidebar />

        {/* Right content */}
        <div className="vcard-content">
          {/* Tab navigation */}
          <TabNav active={activeTab} onChange={setActiveTab} />

          {/* Tab panels */}
          <div className="vcard-panel-wrap">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={tabVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.22, ease: 'easeOut' }}
              >
                {activeTab === 'about' && <AboutTab />}
                {activeTab === 'resume' && <ResumeTab />}
                {activeTab === 'projects' && <ProjectsTab />}
                {activeTab === 'more' && <MoreTab />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>
      <Toaster position="bottom-right" />
    </div>
  )
}

export default App