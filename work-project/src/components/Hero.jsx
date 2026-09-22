import { useRef } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { chapters, imageCount, media, totalFrames, videoCount } from '../data/works'
import { hoverPlay, trackPointer } from '../hooks'
import { Icon } from './Icons'
import './Hero.css'

const REEL = 'titans-of-the-park'
const ease = [0.16, 1, 0.3, 1]

// each line slides up from behind its own mask
const line = (delay) => ({
  initial: { y: '105%' },
  animate: { y: '0%' },
  transition: { delay, duration: 1.1, ease },
})
const fade = (delay) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.9, ease },
})

export default function Hero({ onWatch }) {
  const videoRef = useRef(null)

  const stats = [
    { value: totalFrames.toLocaleString(), label: 'Frames drawn' },
    { value: videoCount, label: 'Animated pieces' },
    { value: imageCount, label: 'Illustrations' },
    { value: chapters.length, label: 'Disciplines' },
  ]

  return (
    <section id="top" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <motion.p className="eyebrow" {...fade(0.1)}>
            {profile.title}
          </motion.p>

          <h1 className="display hero-title">
            <span className="hero-mask">
              <motion.span {...line(0.15)}>{profile.name}</motion.span>
            </span>
            <span className="hero-mask hero-sub">
              <motion.span {...line(0.28)}>
                Motion with <em>intent.</em>
              </motion.span>
            </span>
          </h1>

          <motion.p className="hero-intro" {...fade(0.5)}>
            {profile.intro}
          </motion.p>

          <motion.div className="hero-actions" {...fade(0.6)}>
            <a href="#work" className="btn btn-primary">
              View work <Icon.Arrow />
            </a>
            <button className="btn btn-ghost" onClick={() => onWatch(REEL)}>
              <Icon.Play /> Play showreel
            </button>
          </motion.div>

          <motion.dl className="hero-stats" {...fade(0.75)}>
            {stats.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <div className="hero-feature">
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(8% 8% 8% 8% round 14px)' }}
            animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0% round 14px)' }}
            transition={{ delay: 0.3, duration: 1.3, ease }}
          >
            <button
              className="hero-frame"
              onClick={() => onWatch(REEL)}
              onPointerMove={trackPointer}
              {...hoverPlay(videoRef)}
              aria-label="Play showreel"
            >
              <video ref={videoRef} src={media(REEL).src} poster={media(REEL).poster} muted loop playsInline preload="metadata" />
              <span className="hero-frame-light" aria-hidden />
              <span className="hero-frame-play" aria-hidden>
                <Icon.Play />
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
