import { useState } from 'react'
import { Toaster } from '@/components/ui/sonner'
import { ProfileSidebar } from '@/components/ProfileSidebar'
import { TabNav } from '@/components/TabNav'
import { AboutTab } from '@/components/tabs/AboutTab'
import { ResumeTab } from '@/components/tabs/ResumeTab'
import { ProjectsTab } from '@/components/tabs/ProjectsTab'
import { MoreTab } from '@/components/tabs/MoreTab'

export type TabKey = 'about' | 'resume' | 'projects' | 'more'

function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('about')

  return (
    <>
      <main className="vc-main">
        <ProfileSidebar />

        <div className="main-content">
          <TabNav active={activeTab} onChange={setActiveTab} />

          {activeTab === 'about' && <AboutTab />}
          {activeTab === 'resume' && <ResumeTab />}
          {activeTab === 'projects' && <ProjectsTab />}
          {activeTab === 'more' && <MoreTab />}
        </div>
      </main>
      <Toaster position="bottom-right" />
    </>
  )
}

export default App
