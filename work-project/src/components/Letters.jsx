import { useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { Balloon } from './Characters'
import { Icon } from './Icons'
import './Letters.css'

const ease = [0.16, 1, 0.3, 1]

export default function Letters() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <>
      <section id="letters" className="section letters" data-tint-a="#6ef0c8" data-tint-b="#ff7eb6">
        <div className="wrap letters-grid">
          <motion.div
            className="letters-copy"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
          >
            <span className="kicker">Letters by Moonlight</span>
            <h2 className="display letters-title">
              Shall we animate <em className="shimmer">something wonderful?</em>
            </h2>
            <p className="letters-lede">
              Key animation, second key, character acting or a burst of effects — send a letter with your cut, your timeline and your dream, and I’ll write back before the ink is dry.
            </p>

            <div className="letters-email">
              <a href={`mailto:${profile.email}`} className="letters-address">
                <Icon.Mail /> {profile.email}
              </a>
              <button className="letters-copy-btn" onClick={copy} aria-live="polite">
                {copied ? <Icon.Check /> : <Icon.Copy />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>

            <p className="letters-location">
              <span className="letters-dot" /> {profile.location}
            </p>

            {/* <ul className="letters-socials">
              {profile.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer">
                    {s.label} <Icon.Arrow />
                  </a>
                </li>
              ))}
            </ul> */}
          </motion.div>

          <motion.a
            href={`mailto:${profile.email}`}
            className="envelope"
            aria-label={`Write to ${profile.email}`}
            initial={{ opacity: 0, y: 60, rotate: 6 }}
            whileInView={{ opacity: 1, y: 0, rotate: -4 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease }}
          >
            <span className="envelope-back" />
            <span className="envelope-letter">
              <span className="hand envelope-dear">Dear animator,</span>
              <span className="envelope-lines">
                <i />
                <i />
                <i />
              </span>
              <span className="hand envelope-sign">once upon a time…</span>
            </span>
            <span className="envelope-front" />
            <span className="envelope-flap" />
            <span className="envelope-seal">
              <Icon.Sparkle />
            </span>
          </motion.a>
        </div>
      </section>

      <footer className="finale">
        <div className="finale-balloon">
          <a href="#prologue" aria-label="Float back to the beginning">
            <Balloon />
          </a>
          <span className="hand">back to the beginning</span>
        </div>
        <motion.p
          className="display finale-end"
          initial={{ opacity: 0, letterSpacing: '0.4em' }}
          whileInView={{ opacity: 1, letterSpacing: '0.02em' }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease }}
        >
          ~ The End ~
        </motion.p>
        <p className="hand finale-sub">…or perhaps, just the first frame.</p>
        <p className="finale-legal">
          © {new Date().getFullYear()} {profile.name} · Every frame drawn by hand, with love.
        </p>
      </footer>
    </>
  )
}
