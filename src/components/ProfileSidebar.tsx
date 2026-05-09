import { useState } from 'react'
import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  MapPin,
  InstagramLogo,
  CaretDown,
} from '@phosphor-icons/react'
import avatar from '../assets/images/profile.png'

export function ProfileSidebar() {
  const [open, setOpen] = useState(false)

  return (
    <aside className={`sidebar ${open ? 'active' : ''}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={avatar} alt="Netri Alia Rahmi" width={80} />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Netri Alia Rahmi">Netri Alia Rahmi</h1>
          <p className="title">HR Data &amp; Analytics</p>
        </div>

        <button
          className="info_more-btn"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle contacts"
        >
          <span>{open ? 'Hide Contacts' : 'Show Contacts'}</span>
          <CaretDown size={14} weight="bold" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: '0.25s' }} />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator" />

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <EnvelopeSimple size={16} weight="bold" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:netrialiarahmi@gmail.com" className="contact-link">netrialiarahmi@gmail.com</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GithubLogo size={16} weight="bold" />
            </div>
            <div className="contact-info">
              <p className="contact-title">GitHub</p>
              <a href="https://github.com/netrialiarahmi" target="_blank" rel="noreferrer" className="contact-link">netrialiarahmi</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <LinkedinLogo size={16} weight="bold" />
            </div>
            <div className="contact-info">
              <p className="contact-title">LinkedIn</p>
              <a href="https://www.linkedin.com/in/netrialiarahmi/" target="_blank" rel="noreferrer" className="contact-link">netrialiarahmi</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <MapPin size={16} weight="bold" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Jakarta, Indonesia</address>
            </div>
          </li>
        </ul>

        <div className="separator" />

        <ul className="social-list">
          <li className="social-item">
            <a href="https://github.com/netrialiarahmi" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
              <GithubLogo size={18} weight="fill" />
            </a>
          </li>
          <li className="social-item">
            <a href="https://www.linkedin.com/in/netrialiarahmi/" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
              <LinkedinLogo size={18} weight="fill" />
            </a>
          </li>
          <li className="social-item">
            <a href="https://www.instagram.com/netrialiarahmi/" target="_blank" rel="noreferrer" className="social-link" aria-label="Instagram">
              <InstagramLogo size={18} weight="fill" />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}
