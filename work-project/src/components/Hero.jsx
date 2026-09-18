import { useRef } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { chapters, media, works } from '../data/works'
import { useAutoplayInView } from '../hooks'
import { Marionette, Moon } from './Characters'
import { Icon } from './Icons'
import './Hero.css'

const REEL = 'titans-of-the-park'
const ease = [0.16, 1, 0.3, 1]

function Letters({ text, delay = 0, ready, className }) {
  return (
    <span className={className} aria-label={text}>
      {[...text].map((ch, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="hero-letter"
          style={{ '--i': i }}
          initial={{ opacity: 0, y: '60%', rotate: 8, filter: 'blur(10px)' }}
          animate={ready ? { opacity: 1, y: '0%', rotate: 0, filter: 'blur(0px)' } : {}}
          transition={{ delay: delay + i * 0.045, duration: 1, ease }}
        >
          {ch === ' ' ? ' ' : ch}
        </motion.span>
      ))}
    </span>
  )
}

export default function Hero({ ready, onWatch }) {
  const videoRef = useRef(null)
  const sectionRef = useRef(null)
  useAutoplayInView(videoRef, { threshold: 0.2 })
  const reel = works.find((w) => w.slug === REEL)

  const onPointerMove = (e) => {
    const el = sectionRef.current
    if (!el || e.pointerType !== 'mouse') return
    el.style.setProperty('--px', (e.clientX / window.innerWidth - 0.5).toFixed(3))
    el.style.setProperty('--py', (e.clientY / window.innerHeight - 0.5).toFixed(3))
  }

  return (
    <section id="prologue" ref={sectionRef} className="hero" data-tint-a="#ff7eb6" data-tint-b="#b9a4ff" onPointerMove={onPointerMove}>
      {/* ── scenery ── */}
      <div className="hero-scenery" aria-hidden>
        <div className="hero-glow" />
        <Moon className="hero-moon" />
        <svg className="hero-hills hero-hills-far" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path d="M0 210c120-40 220-70 360-50s220 70 380 40 260-110 420-100 200 60 280 80v140H0z" fill="#3d1f6e" />
        </svg>
        <svg className="hero-hills hero-hills-mid" viewBox="0 0 1440 320" preserveAspectRatio="xMidYMax slice">
          <path d="M0 250c160-60 300-80 460-50 90 17 150 40 240 36V150h18v-20l14-26 14 26v20h18v-30l22-40 22 40v30h18v-18l14-24 14 24v58c80-8 160-40 290-40 140 0 220 40 300 60v170H0z" fill="#26134c" />
          <g fill="#ffc86b" className="hero-windows">
            <rect x="738" y="162" width="6" height="10" rx="3" />
            <rect x="790" y="140" width="6" height="11" rx="3" />
            <rect x="790" y="172" width="6" height="11" rx="3" />
            <rect x="845" y="170" width="6" height="10" rx="3" />
          </g>
          <path className="hero-flag" d="M786 80V52l14 6-14 6" stroke="#ff7eb6" strokeWidth="2" strokeLinejoin="round" fill="#ff7eb6" />
        </svg>
        <svg className="hero-hills hero-hills-near" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path d="M0 120c200-50 380-60 560-20s360 60 560 20 260-40 320-30v110H0z" fill="#150b33" />
        </svg>
      </div>

      {/* ── theatre curtains ── */}
      <div className="hero-valance" aria-hidden />
      <motion.div
        className="hero-curtain hero-curtain-l"
        aria-hidden
        initial={{ scaleX: 1 }}
        animate={ready ? { scaleX: 0.13 } : {}}
        transition={{ duration: 1.8, ease: [0.7, 0, 0.2, 1] }}
      />
      <motion.div
        className="hero-curtain hero-curtain-r"
        aria-hidden
        initial={{ scaleX: 1 }}
        animate={ready ? { scaleX: 0.13 } : {}}
        transition={{ duration: 1.8, ease: [0.7, 0, 0.2, 1] }}
      />

      {/* ── stage ── */}
      <div className="wrap hero-stage">
        <div className="hero-copy">
          <motion.p
            className="hand hero-eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.8, ease }}
          >
            ✦ once upon a frame, there lived an animator named ✦
          </motion.p>

          <h1 className="display hero-title">
            <span className="hero-line hero-line-2">
              <Letters text={profile.name} ready={ready} delay={1} className="hero-italic hero-name" />
              <svg className="hero-swash" viewBox="0 0 420 40" aria-hidden>
                <motion.path
                  d="M6 26C90 8 190 4 300 16c40 4 80 10 110 4-20 8-50 14-80 12"
                  fill="none"
                  stroke="url(#swash-g)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={ready ? { pathLength: 1 } : {}}
                  transition={{ delay: 2, duration: 1.3, ease: 'easeInOut' }}
                />
                <defs>
                  <linearGradient id="swash-g" x1="0" x2="1">
                    <stop offset="0" stopColor="#ff7eb6" />
                    <stop offset=".5" stopColor="#ffc86b" />
                    <stop offset="1" stopColor="#6ef0c8" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          <motion.p
            className="display hero-role"
            initial={{ opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.7, duration: 0.9, ease }}
          >
            {profile.title}
          </motion.p>

          <motion.p
            className="hero-intro"
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.9, duration: 0.9, ease }}
          >
            {profile.intro}
          </motion.p>

          <motion.p
            className="hero-byline"
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : {}}
            transition={{ delay: 2.1, duration: 0.9 }}
          >
            {chapters.map((c, i) => (
              <span key={c.id} className="hero-byline-item">
                {i > 0 && <span className="hero-byline-dot" style={{ background: c.accent, boxShadow: `0 0 10px ${c.accent}` }} />}
                <a href={`#chapter-${c.id}`}>{c.title}</a>
              </span>
            ))}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 2.25, duration: 0.9, ease }}
          >
            <a href="#chapters" className="btn btn-magic">
              <Icon.Book /> Open the Storybook
            </a>
            <button className="btn btn-ghost" onClick={() => onWatch(REEL)}>
              <Icon.Play /> Watch in the Theater
            </button>
          </motion.div>
        </div>

        <motion.div
          className="hero-window-wrap"
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          animate={ready ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ delay: 1.3, duration: 1.4, ease }}
        >
          <div className="hero-orbit" aria-hidden>
            {Array.from({ length: 9 }, (_, i) => (
              <i key={i} style={{ '--i': i, '--s': 0.5 + (i % 3) * 0.3 }} />
            ))}
          </div>
          <button className="hero-window" onClick={() => onWatch(REEL)} aria-label={`Play ${reel.title} in the theater`}>
            <span className="hero-window-inner">
              <video ref={videoRef} src={media(REEL).src} poster={media(REEL).poster} muted loop playsInline preload="metadata" />
              <span className="hero-window-shine" />
              <span className="hero-window-play">
                <Icon.Play />
              </span>
            </span>
          </button>
          <div className="hero-ribbon">
            <span className="hand">now showing</span>
            <strong>{reel.title}</strong>
          </div>
          <Marionette className="hero-marionette" />
        </motion.div>
      </div>

      <motion.a
        href="#chapters"
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 2.8 }}
      >
        <span className="hand">turn the page</span>
        <span className="hero-scroll-line" />
      </motion.a>
    </section>
  )
}
