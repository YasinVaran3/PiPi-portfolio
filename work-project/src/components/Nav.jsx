import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useActiveSection } from '../hooks'
import { profile } from '../data/profile'
import { Icon } from './Icons'
import './Nav.css'

const LINKS = [
  { id: 'work', label: 'Work' },
  { id: 'process', label: 'Process' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]
const IDS = ['top', ...LINKS.map((l) => l.id)]

export default function Nav() {
  const active = useActiveSection(IDS)
  const [scrolled, setScrolled] = useState(false)
  const [menu, setMenu] = useState(false)
  const barRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (barRef.current) barRef.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('is-locked', menu)
  }, [menu])

  return (
    <>
      <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#top" className="nav-brand" aria-label="Back to top">
            <span className="nav-mono">{profile.monogram}</span>
            <span className="nav-brand-text">
              {profile.name}
              <em>{profile.title}</em>
            </span>
          </a>

          <nav className="nav-links" aria-label="Sections">
            {LINKS.map((l) => (
              <a key={l.id} href={`#${l.id}`} className={active === l.id ? 'is-active' : ''}>
                {l.label}
              </a>
            ))}
          </nav>

          <a href={`mailto:${profile.email}`} className="btn btn-ghost nav-cta">
            Get in touch
          </a>

          <button className="nav-burger" onClick={() => setMenu(true)} aria-label="Open menu">
            <span />
            <span />
          </button>
        </div>
        <span className="nav-progress" aria-hidden>
          <i ref={barRef} />
        </span>
      </header>

      <AnimatePresence>
        {menu && (
          <motion.div
            className="nav-sheet"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <button className="nav-close" onClick={() => setMenu(false)} aria-label="Close menu">
              <Icon.Close />
            </button>
            <ol>
              {LINKS.map((l, i) => (
                <motion.li
                  key={l.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a href={`#${l.id}`} onClick={() => setMenu(false)}>
                    <span>{String(i + 1).padStart(2, '0')}</span>
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ol>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
