import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  MapPin,
  InstagramLogo,
  DownloadSimple,
  CaretDown,
} from '@phosphor-icons/react'
import profilePhoto from '../assets/images/Netri_Alia_Rahmi_HR_Data_&_Analytics.jpg'
import cvFile from '../assets/documents/CV.pdf'

const contacts = [
  {
    icon: EnvelopeSimple,
    label: 'Email',
    value: 'netrialiarahmi@gmail.com',
    href: 'mailto:netrialiarahmi@gmail.com',
  },
  {
    icon: GithubLogo,
    label: 'GitHub',
    value: 'github.com/netrialiarahmi',
    href: 'https://github.com/netrialiarahmi',
  },
  {
    icon: LinkedinLogo,
    label: 'LinkedIn',
    value: 'linkedin.com/in/netrialiarahmi',
    href: 'https://www.linkedin.com/in/netrialiarahmi',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Jakarta, Indonesia',
    href: null,
  },
]

const socials = [
  {
    icon: GithubLogo,
    href: 'https://github.com/netrialiarahmi',
    label: 'GitHub',
  },
  {
    icon: LinkedinLogo,
    href: 'https://www.linkedin.com/in/netrialiarahmi',
    label: 'LinkedIn',
  },
  {
    icon: InstagramLogo,
    href: 'https://www.instagram.com/netrialiarahmi',
    label: 'Instagram',
  },
]

export function ProfileSidebar() {
  const [contactsOpen, setContactsOpen] = useState(false)

  return (
    <aside className="sidebar-card">
      {/* ── Photo + Name + Typing SVG ── */}
      <div className="photo-wrap">
        <figure className="profile-figure">
          <img
            src={profilePhoto}
            alt="Netri Alia Rahmi"
            className="profile-photo"
          />
        </figure>

        <div className="profile-name-block">
          <h1 className="profile-name">Netri Alia Rahmi</h1>
          {/* Readme Typing SVG — yellow-accent animated role */}
          <div className="typing-svg-wrap">
            <img
              src="https://readme-typing-svg.demolab.com/?font=Fira+Code&size=14&duration=3000&pause=600&color=FFB703&center=true&vCenter=true&width=280&lines=HR+Data+%26+Analytics;Python+%7C+SQL+%7C+Streamlit;I+turn+noise+into+signal;Building+AI+that+works;92%25+model+accuracy+%E2%9C%93"
              alt="Typing SVG"
              className="typing-svg"
            />
          </div>
        </div>
      </div>

      {/* ── Mobile: Show Contacts toggle ── */}
      <button
        className="contacts-toggle"
        onClick={() => setContactsOpen((v) => !v)}
        aria-expanded={contactsOpen}
      >
        {contactsOpen ? 'Hide Contacts' : 'Show Contacts'}
        <motion.span
          animate={{ rotate: contactsOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="toggle-caret"
        >
          <CaretDown size={14} weight="bold" />
        </motion.span>
      </button>

      {/* ── Contacts block (always visible on desktop) ── */}
      <AnimatePresence initial={false}>
        {/* On desktop this is always shown via CSS; on mobile, gate by state */}
        <motion.div
          key="contacts"
          className="contacts-block"
          data-open={contactsOpen}
          initial={false}
          animate={contactsOpen ? { height: 'auto', opacity: 1 } : undefined}
        >
          <ul className="contacts-list">
            {contacts.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="contact-item">
                <span className="contact-icon-wrap" aria-hidden>
                  <Icon size={18} weight="duotone" />
                </span>
                <div className="contact-text">
                  <span className="contact-label">{label}</span>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="contact-value link"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="contact-value">{value}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <hr className="sidebar-sep" />

          {/* Badge */}
          <div className="badge-row">
            <span className="outstanding-badge">
              Most Outstanding Student &amp; Graduate
            </span>
            <span className="badge-uni">Airlangga University</span>
          </div>

          {/* Download CV */}
          <a
            href={cvFile}
            download="Netri_Alia_Rahmi_CV.pdf"
            className="download-btn"
          >
            <DownloadSimple size={18} weight="bold" />
            Download CV
          </a>

          {/* Social icons */}
          <ul className="social-list">
            {socials.map(({ icon: Icon, href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="social-icon"
                >
                  <Icon size={20} />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </aside>
  )
}
