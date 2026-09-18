import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useActiveSection } from '../hooks'
import { profile } from '../data/profile'
import { Icon } from './Icons'
import './Nav.css'

const LINKS = [
  { id: 'prologue', label: 'Prologue' },
  { id: 'chapters', label: 'Chapters' },
  { id: 'mirror', label: 'Mirror' },
  { id: 'atelier', label: 'Atelier' },
  { id: 'letters', label: 'Letters' },
]
const IDS = LINKS.map((l) => l.id)

export default function Nav() {
  const active = useActiveSection(IDS)
  const [scrolled, setScrolled] = useState(false)
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
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
          <a href="#prologue" className="nav-brand" aria-label="Back to the beginning">
            <span className="nav-mono">
              <Icon.Sparkle className="nav-mono-star" />
              <span>{profile.monogram}</span>
            </span>
            <span className="nav-brand-text">
              {profile.name} <em>· Once Upon a Frame</em>
            </span>
          </a>

          <nav className="nav-links" aria-label="Sections">
            {LINKS.map((l) => (
              <a key={l.id} href={`#${l.id}`} className={active === l.id ? 'is-active' : ''}>
                {active === l.id && (
                  <motion.span layoutId="nav-glow" className="nav-glow" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />
                )}
                <span className="nav-label">{l.label}</span>
              </a>
            ))}
          </nav>

          <button className="nav-burger" onClick={() => setMenu(true)} aria-label="Open menu">
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menu && (
          <motion.div
            className="nav-sheet"
            initial={{ clipPath: 'circle(0% at 92% 4%)' }}
            animate={{ clipPath: 'circle(150% at 92% 4%)' }}
            exit={{ clipPath: 'circle(0% at 92% 4%)' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <button className="nav-close" onClick={() => setMenu(false)} aria-label="Close menu">
              <Icon.Close />
            </button>
            <p className="hand nav-sheet-note">turn to a page…</p>
            <ol>
              {LINKS.map((l, i) => (
                <motion.li
                  key={l.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a href={`#${l.id}`} onClick={() => setMenu(false)}>
                    <span className="nav-sheet-num">{String(i + 1).padStart(2, '0')}</span>
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
