import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { chapterById, chapters, media, visibleWorks } from '../data/works'
import { trackPointer } from '../hooks'
import { Icon } from './Icons'
import Reveal from './Reveal'
import './Work.css'

const ease = [0.16, 1, 0.3, 1]
const FILTERS = [{ id: 'all', title: 'All work' }, ...chapters]

function Tile({ work, index, onWatch }) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const isVideo = work.type === 'video'
  const { src, poster } = media(work.slug)
  const tall = work.height > work.width * 1.05

  const enter = (e) => {
    if (!isVideo || e.pointerType !== 'mouse') return
    videoRef.current?.play().catch(() => {})
  }
  const leave = () => {
    const v = videoRef.current
    if (!v) return
    v.pause()
    v.currentTime = 0
    setPlaying(false)
  }

  return (
    <button
      className={`tile ${playing ? 'is-playing' : ''}`}
      style={{ '--accent': chapterById[work.chapter].accent, '--pos': tall ? '50% 18%' : '50% 50%' }}
      onClick={() => onWatch(work.slug)}
      onPointerMove={trackPointer}
      onPointerEnter={enter}
      onPointerLeave={leave}
      aria-label={`Open piece ${index + 1}`}
    >
      <img src={poster} alt="" loading="lazy" />
      {isVideo && <video ref={videoRef} src={src} muted loop playsInline preload="none" onPlaying={() => setPlaying(true)} />}
      <span className="tile-light" aria-hidden />
      <span className="tile-icon" aria-hidden>
        {isVideo ? <Icon.Play /> : <Icon.Expand />}
      </span>
    </button>
  )
}

export default function Work({ onWatch }) {
  const [filter, setFilter] = useState('all')
  const items = filter === 'all' ? visibleWorks : visibleWorks.filter((w) => w.chapter === filter)
  const current = chapterById[filter]

  return (
    <section id="work" className="section work">
      <div className="wrap">
        <div className="section-head">
          <Reveal>
            <p className="eyebrow">Portfolio · {visibleWorks.length} pieces</p>
            <h2 className="display">
              Selected <em>work</em>
            </h2>
          </Reveal>
          <Reveal as="p" delay={0.1}>
            {current ? current.lede : 'Key animation, character design, comics and finished colour scenes. Hover to preview, click to open with frame-by-frame controls.'}
          </Reveal>
        </div>

        <div className="work-filters" role="tablist" aria-label="Filter work by discipline">
          {FILTERS.map((f) => {
            const count = f.id === 'all' ? visibleWorks.length : visibleWorks.filter((w) => w.chapter === f.id).length
            const on = filter === f.id
            return (
              <button key={f.id} role="tab" aria-selected={on} className={on ? 'is-on' : ''} onClick={() => setFilter(f.id)}>
                {on && <motion.span layoutId="work-filter" className="work-filter-bg" transition={{ duration: 0.5, ease }} />}
                <span className="work-filter-label">{f.title}</span>
                <sup>{count}</sup>
              </button>
            )
          })}
        </div>

        <motion.div className="work-grid" layout>
          <AnimatePresence mode="popLayout" initial={false}>
            {items.map((w, i) => (
              <motion.div
                key={w.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease, delay: Math.min(i, 8) * 0.025 }}
              >
                <Reveal delay={(i % 4) * 0.06}>
                  <Tile work={w} index={i} onWatch={onWatch} />
                </Reveal>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
