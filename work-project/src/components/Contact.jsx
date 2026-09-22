import { useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { cast, media } from '../data/works'
import { Icon } from './Icons'
import Reveal from './Reveal'
import './Contact.css'

const ease = [0.16, 1, 0.3, 1]

/* The characters from across the portfolio, lined up in a single row. */
function Cast({ onWatch }) {
  return (
    <div className="cast">
      <p className="cast-label">The cast</p>
      <ul className="cast-row">
        {cast.map((c, i) => (
          <motion.li
            key={c.slug}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -40px 0px' }}
            transition={{ duration: 0.8, delay: i * 0.05, ease }}
          >
            <button onClick={() => onWatch(c.slug)} aria-label={`Open character ${i + 1}`}>
              <img
                src={media(c.slug).poster}
                alt=""
                loading="lazy"
                style={{
                  objectPosition: `${c.fx}% ${c.fy}%`,
                  transformOrigin: `${c.fx}% ${c.fy}%`,
                  '--z': c.z,
                }}
              />
            </button>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default function Contact({ onWatch }) {
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
      <section id="contact" className="section contact">
        <div className="wrap contact-grid">
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h2 className="display contact-title">
              Let’s work <em>together.</em>
            </h2>
          </Reveal>

          <Reveal className="contact-side" delay={0.1}>
            <p className="contact-lede">
              Available for key animation, second key, character acting, effects and illustration. Share your cut, schedule and references, and I’ll reply promptly.
            </p>
            <div className="contact-email">
              <a href={`mailto:${profile.email}`}>
                <Icon.Mail /> {profile.email}
              </a>
              <button onClick={copy} aria-live="polite">
                {copied ? <Icon.Check /> : <Icon.Copy />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
            <p className="contact-location">
              <span /> {profile.location}
            </p>
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap">
          <Cast onWatch={onWatch} />
          <div className="footer-base">
            <span>
              © {new Date().getFullYear()} {profile.name} · {profile.title}
            </span>
            <a href="#top">
              Back to top <Icon.Arrow />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
