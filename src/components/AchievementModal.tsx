import { useEffect } from 'react'
import { X, ArrowUpRight } from '@phosphor-icons/react'
import type { ReactNode } from 'react'

export type Achievement = {
  title: string
  issuer: string
  year: string
  description: string
  icon: ReactNode
  certificateUrl?: string
}

type Props = {
  open: boolean
  onClose: () => void
  achievement: Achievement | null
}

export function AchievementModal({ open, onClose, achievement }: Props) {
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    if (open) document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open, onClose])

  return (
    <div className={`modal-container ${open ? 'active' : ''}`}>
      <div
        className={`overlay ${open ? 'active' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <section className="testimonials-modal" role="dialog" aria-modal="true">
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">
          <X size={18} weight="bold" />
        </button>

        {achievement && (
          <>
            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">{achievement.icon}</figure>
              <div>
                <h4 className="h3 modal-title">{achievement.title}</h4>
                <time>
                  {achievement.issuer} · {achievement.year}
                </time>
              </div>
            </div>

            <div className="modal-content">
              <p>{achievement.description}</p>
              {achievement.certificateUrl && (
                <a
                  href={achievement.certificateUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-cert-link"
                >
                  View Certificate <ArrowUpRight size={14} weight="bold" />
                </a>
              )}
            </div>
          </>
        )}
      </section>
    </div>
  )
}
