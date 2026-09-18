import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { media } from '../data/works'
import { pad, tiltHandlers, useAutoplayInView } from '../hooks'
import { Icon } from './Icons'
import './WorkCard.css'
import './ImageCard.css'

const tilt = tiltHandlers(7)

export default function WorkCard({ work, chapter, variant = 'small', onWatch, index = 0 }) {
  const videoRef = useRef(null)
  const barRef = useRef(null)
  const counterRef = useRef(null)
  const visible = useAutoplayInView(videoRef, { threshold: 0.3 })
  const { src, poster } = media(work.slug)

  // Live frame counter + timeline, written straight to the DOM while on screen.
  useEffect(() => {
    if (!visible) return
    let raf
    const tick = () => {
      const v = videoRef.current
      if (v && v.duration) {
        const p = v.currentTime / v.duration
        const f = Math.min(work.frames, Math.floor(v.currentTime * work.fps) + 1)
        if (barRef.current) barRef.current.style.transform = `scaleX(${p})`
        if (counterRef.current) counterRef.current.textContent = `${pad(f)} / ${pad(work.frames)}`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [visible, work.fps, work.frames])

  const style = {
    '--accent': chapter.accent,
    '--accent2': chapter.accent2,
    '--ar': variant === 'portrait' ? `${work.width} / ${work.height}` : undefined,
  }

  return (
    <motion.article
      className={`card card--${variant}`}
      style={style}
      initial={{ opacity: 0, y: 60, rotate: index % 2 ? 1.5 : -1.5 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 1, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="card-tilt" {...tilt}>
        <button className="card-media" onClick={() => onWatch(work.slug)} aria-label={`Open ${work.title} in the theater`}>
          <img className="card-ambient" src={poster} alt="" aria-hidden loading="lazy" />
          <img className="card-onion card-onion-a" src={poster} alt="" aria-hidden loading="lazy" />
          <img className="card-onion card-onion-b" src={poster} alt="" aria-hidden loading="lazy" />
          <video ref={videoRef} src={src} poster={poster} muted loop playsInline preload="metadata" />
          <span className="card-sheen" aria-hidden />

          <span className="card-chip">
            <b>{chapter.numeral}</b>
            {work.code || work.role.split('·')[0].trim()}
          </span>
          {work.audio && (
            <span className="card-audio" title="Has sound">
              <Icon.Sound />
            </span>
          )}
          <span className="card-cta">
            <Icon.Expand /> Theater
          </span>
          <span className="card-hud" aria-hidden>
            <span className="card-rec" />
            <span ref={counterRef} className="card-counter">
              {pad(1)} / {pad(work.frames)}
            </span>
          </span>
          <span className="card-timeline" aria-hidden>
            <i ref={barRef} />
          </span>
        </button>

        <div className="card-body">
          <p className="hand card-role">{work.role}</p>
          <h3 className="card-title">{work.title}</h3>
          <p className="card-note">{work.note}</p>
          <dl className="card-specs">
            <div>
              <dt>fps</dt>
              <dd>{work.fps}</dd>
            </div>
            <div>
              <dt>frames</dt>
              <dd>{work.frames}</dd>
            </div>
            <div>
              <dt>canvas</dt>
              <dd>
                {work.width}×{work.height}
              </dd>
            </div>
          </dl>
          {work.keys && (
            <div className="card-keys">
              <span className="card-keys-label">Key poses</span>
              <div className="card-keys-row">
                {work.keys.map((k, i) => (
                  <button key={k} onClick={() => onWatch(k)} aria-label={`View key pose ${i + 1}`}>
                    <img src={media(k).poster} alt="" loading="lazy" />
                    <span>K{i + 1}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
          {(variant === 'feature' || variant === 'portrait') && (
            <button className="btn btn-magic card-watch" onClick={() => onWatch(work.slug)}>
              <Icon.Play /> {work.audio ? 'Watch with sound' : 'Watch in the Theater'}
            </button>
          )}
        </div>
      </div>
    </motion.article>
  )
}
