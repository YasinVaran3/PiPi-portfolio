import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { media, workBySlug } from '../data/works'
import { tiltHandlers } from '../hooks'
import { Icon } from './Icons'
import './WorkCard.css'
import './ImageCard.css'

const tilt = tiltHandlers(6)

/* Line art ↔ colour slider living inside a card */
function Compare({ work, other }) {
  const ref = useRef(null)
  const [split, setSplit] = useState(42)
  const dragging = useRef(false)

  const moveTo = (clientX) => {
    const r = ref.current.getBoundingClientRect()
    setSplit(Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100)))
  }

  return (
    <div
      ref={ref}
      className="compare"
      style={{ '--split': `${split}%` }}
      onPointerDown={(e) => {
        dragging.current = true
        e.currentTarget.setPointerCapture(e.pointerId)
        moveTo(e.clientX)
      }}
      onPointerMove={(e) => dragging.current && moveTo(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
    >
      <img className="compare-under" src={media(work.slug).src} alt={work.title} loading="lazy" draggable="false" />
      <img className="compare-over" src={media(other.slug).src} alt={other.title} loading="lazy" draggable="false" />
      <span className="compare-tag compare-tag-l">
        <span className="hand">lines</span>
      </span>
      <span className="compare-tag compare-tag-r">
        <span className="hand">colour</span>
      </span>
      <span className="compare-wand" aria-hidden>
        <i />
        <b>
          <Icon.Sparkle />
        </b>
      </span>
      <input
        type="range"
        min="0"
        max="100"
        value={Math.round(split)}
        onChange={(e) => setSplit(Number(e.target.value))}
        aria-label="Reveal line art"
      />
    </div>
  )
}

export default function ImageCard({ work, chapter, onWatch, index = 0 }) {
  const other = work.compareWith ? workBySlug[work.compareWith] : null
  const { poster } = media(work.slug)

  return (
    <motion.article
      className={`card card--image ${other ? 'card--compare' : ''}`}
      style={{ '--accent': chapter.accent, '--accent2': chapter.accent2, '--ar': `${work.width} / ${work.height}` }}
      initial={{ opacity: 0, y: 60, rotate: index % 2 ? 1.5 : -1.5 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 1, delay: (index % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="card-tilt" {...(other ? {} : tilt)}>
        {other ? (
          <div className="card-media card-media--image">
            <Compare work={work} other={other} />
            <span className="card-chip">
              <b>{chapter.numeral}</b> Drag the wand
            </span>
          </div>
        ) : (
          <button className="card-media card-media--image" onClick={() => onWatch(work.slug)} aria-label={`View ${work.title}`}>
            <img className="card-ambient" src={poster} alt="" aria-hidden loading="lazy" />
            <img className="card-still" src={poster} alt={work.title} loading="lazy" />
            <span className="card-sheen" aria-hidden />
            <span className="card-chip">
              <b>{chapter.numeral}</b>
              {work.role.split('·')[0].trim()}
            </span>
            <span className="card-cta">
              <Icon.ZoomIn /> View
            </span>
          </button>
        )}

        <div className="card-body">
          <p className="hand card-role">{work.role}</p>
          <h3 className="card-title">{work.title}</h3>
          <p className="card-note">{work.note}</p>
          <div className="card-foot">
            <dl className="card-specs">
              <div>
                <dt>canvas</dt>
                <dd>
                  {work.width}×{work.height}
                </dd>
              </div>
            </dl>
            {other && (
              <span className="card-links">
                <button onClick={() => onWatch(work.slug)}>
                  <Icon.ZoomIn /> Colour
                </button>
                <button onClick={() => onWatch(other.slug)}>
                  <Icon.ZoomIn /> Line art
                </button>
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
