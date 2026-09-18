import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView } from 'framer-motion'
import { profile } from '../data/profile'
import { chapters, imageCount, totalFrames, videoCount } from '../data/works'
import { Icon } from './Icons'
import './Atelier.css'

const ease = [0.16, 1, 0.3, 1]

const PIPELINE = [
  { name: 'Storyboard', jp: '絵コンテ', text: 'The director’s map of every cut.', mine: false },
  { name: 'Layout', jp: 'レイアウト', text: 'Camera, framing and the stage for acting.', mine: false },
  { name: 'First Key', jp: '一原', text: 'Rough keys that capture pose, timing and spirit.', mine: true },
  { name: 'Second Key', jp: '第二原画', text: 'Clean, colour-traced keys ready for inbetweening.', mine: true },
  { name: 'Effects', jp: 'エフェクト', text: 'Smears, sparks, smoke and impact frames.', mine: true },
  { name: 'Colour & Comp', jp: '仕上げ・撮影', text: 'Paint, light and sound bring it home.', mine: true },
]

function Counter({ to, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, { duration: 2.2, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => setVal(Math.round(v)) })
    return () => controls.stop()
  }, [inView, to])

  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function Atelier() {
  const stats = [
    { value: totalFrames, label: 'frames brought to life', color: 'var(--rose)' },
    { value: videoCount, label: 'animated pieces', color: 'var(--gold)' },
    { value: imageCount, label: 'illustrations & pages', color: 'var(--mint)' },
    { value: chapters.length, label: 'worlds of craft', color: 'var(--sky)' },
  ]

  return (
    <section id="atelier" className="section atelier" data-tint-a="#ff8f70" data-tint-b="#b9a4ff">
      <div className="wrap">
        <div className="atelier-grid">
          {/* animation disc — the animator's drawing desk */}
          <motion.div
            className="atelier-disc-wrap"
            initial={{ opacity: 0, rotate: -40, scale: 0.8 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease }}
          >
            <div className="atelier-disc">
              <div className="atelier-disc-ring">
                {Array.from({ length: 36 }, (_, i) => (
                  <i key={i} style={{ transform: `rotate(${i * 10}deg)` }} />
                ))}
              </div>
              <div className="atelier-pegbar" aria-hidden>
                <span />
                <span />
                <span />
              </div>
              <div className="atelier-paper">
                <span className="atelier-mono">{profile.monogram}</span>
                <span className="hand atelier-sign">{profile.name}</span>
                <svg className="atelier-doodle" viewBox="0 0 200 60" aria-hidden>
                  <path d="M10 40c20-30 40-30 50 0s30 30 50 0 40-30 50 0 20 20 30 5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <span className="atelier-pencil" aria-hidden />
          </motion.div>

          <motion.div
            className="atelier-copy"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15, ease }}
          >
            <span className="kicker">The Atelier</span>
            <h2 className="display atelier-title">
              Behind the <em className="shimmer">lightbox</em>
            </h2>
            <p className="hand atelier-tagline">“{profile.tagline}”</p>
            {profile.bio.map((p, i) => (
              <p key={i} className="atelier-bio">
                {p}
              </p>
            ))}
            <ul className="atelier-tools">
              {profile.tools.map((t) => (
                <li key={t}>
                  <Icon.Sparkle /> {t}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <ul className="atelier-stats">
          {stats.map((s, i) => (
            <motion.li
              key={s.label}
              style={{ '--c': s.color }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease }}
            >
              <strong>
                <Counter to={s.value} />
              </strong>
              <span>{s.label}</span>
            </motion.li>
          ))}
        </ul>

        {/* the journey of a cut, drawn like a timesheet */}
        <div className="xsheet">
          <div className="xsheet-head">
            <h3 className="display">The journey of a single cut</h3>
            <p className="hand">
              <span className="xsheet-legend" /> where my pencil lives
            </p>
          </div>
          <div className="xsheet-track">
            <div className="xsheet-ball" aria-hidden>
              <span />
            </div>
            <ol className="xsheet-steps">
              {PIPELINE.map((step, i) => (
                <motion.li
                  key={step.name}
                  className={step.mine ? 'is-mine' : ''}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.09, ease }}
                >
                  <span className="xsheet-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="xsheet-jp">{step.jp}</span>
                  <strong>{step.name}</strong>
                  <p>{step.text}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
