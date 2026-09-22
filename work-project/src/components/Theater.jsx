import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { chapterById, media, visibleWorks, workBySlug, works } from '../data/works'
import { pad } from '../hooks'
import { Icon } from './Icons'
import './Theater.css'

const SPEEDS = [
  { value: 0.25, label: '¼×' },
  { value: 0.5, label: '½×' },
  { value: 1, label: '1×' },
]

// the visible piece a hidden one (key pose, line art) belongs to
const parentOf = (slug) => works.find((w) => w.compareWith === slug || (w.keys && w.keys.includes(slug)))

function ImageStage({ work }) {
  const [zoom, setZoom] = useState(false)
  const [origin, setOrigin] = useState('50% 50%')

  useEffect(() => setZoom(false), [work.slug])

  return (
    <div
      className={`theater-still ${zoom ? 'is-zoomed' : ''}`}
      onClick={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        setOrigin(`${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`)
        setZoom((z) => !z)
      }}
      onPointerMove={(e) => {
        if (!zoom) return
        const r = e.currentTarget.getBoundingClientRect()
        setOrigin(`${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`)
      }}
    >
      <img key={work.slug} src={media(work.slug).src} alt={work.title} style={{ transformOrigin: origin }} draggable="false" />
      <span className="theater-zoom-hint">
        <Icon.ZoomIn /> {zoom ? 'Click to fit' : 'Click to zoom'}
      </span>
    </div>
  )
}

function Player({ work, onClose, onNavigate }) {
  const chapter = chapterById[work.chapter]
  const isImage = work.type === 'image'
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(true)
  const [time, setTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [speed, setSpeed] = useState(1)
  const [loop, setLoop] = useState(true)
  const [muted, setMuted] = useState(!work.audio)
  const { src, poster } = media(work.slug)

  const parent = work.hidden ? parentOf(work.slug) : null
  const anchor = parent || work
  const idx = Math.max(0, visibleWorks.findIndex((w) => w.slug === anchor.slug))
  const prev = visibleWorks[(idx - 1 + visibleWorks.length) % visibleWorks.length]
  const next = visibleWorks[(idx + 1) % visibleWorks.length]
  const family = [anchor.slug, ...(anchor.keys || []), anchor.compareWith].filter(Boolean)

  const fps = work.fps || 1
  const frameDur = 1 / fps
  const frame = Math.min(work.frames || 1, Math.floor(time * fps + 0.001) + 1)

  // moving to another piece: reset the transport
  useEffect(() => {
    setMuted(!work.audio)
    setTime(0)
    setDuration(0)
    setPlaying(true)
  }, [work.slug, work.audio])

  useEffect(() => {
    if (isImage) return
    let raf
    const tick = () => {
      const v = videoRef.current
      if (v) setTime(v.currentTime)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [isImage, work.slug])

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = speed
  }, [speed, work.slug])

  const toggle = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) v.play().catch(() => {})
    else v.pause()
  }, [])

  const step = useCallback(
    (dir) => {
      const v = videoRef.current
      if (!v || !v.duration) return
      v.pause()
      const target = Math.floor(v.currentTime / frameDur + 0.001) + dir
      v.currentTime = Math.max(0, Math.min(v.duration - frameDur / 2, target * frameDur + frameDur / 2))
    },
    [frameDur],
  )

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (!isImage && (e.key === ' ' || e.key === 'k')) {
        e.preventDefault()
        toggle()
      } else if (e.key === 'ArrowLeft' || e.key === ',') {
        e.preventDefault()
        isImage ? onNavigate(prev.slug) : step(-1)
      } else if (e.key === 'ArrowRight' || e.key === '.') {
        e.preventDefault()
        isImage ? onNavigate(next.slug) : step(1)
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        onNavigate(prev.slug)
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        onNavigate(next.slug)
      } else if (e.key === 'm' && work.audio) {
        setMuted((m) => !m)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, onNavigate, toggle, step, prev.slug, next.slug, work.audio, isImage])

  return (
    <motion.div
      className="theater"
      role="dialog"
      aria-modal="true"
      aria-label={`${work.title} — theater`}
      style={{ '--accent': chapter.accent, '--accent2': chapter.accent2 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    >
      <div className="theater-backdrop" onClick={onClose}>
        <img src={poster} alt="" aria-hidden />
      </div>

      <motion.div
        className="theater-shell"
        initial={{ y: 60, scale: 0.94, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 40, scale: 0.96, opacity: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="theater-top">
          <span className="theater-chapter">
            <b>{chapter.numeral}</b> {chapter.title}
          </span>
          <div className="theater-top-actions">
            <button className="theater-round" onClick={() => onNavigate(prev.slug)} aria-label={`Previous: ${prev.title}`}>
              <Icon.ChevronLeft />
            </button>
            <button className="theater-round" onClick={() => onNavigate(next.slug)} aria-label={`Next: ${next.title}`}>
              <Icon.ChevronRight />
            </button>
            <button className="theater-round theater-close" onClick={onClose} aria-label="Close theater">
              <Icon.Close />
            </button>
          </div>
        </div>

        <div className="theater-body">
          <div className="theater-main">
            <div className="theater-screen">
              {isImage ? (
                <ImageStage work={work} />
              ) : (
                <>
                  <video
                    key={work.slug}
                    ref={videoRef}
                    src={src}
                    poster={poster}
                    autoPlay
                    playsInline
                    loop={loop}
                    muted={muted}
                    onPlay={() => setPlaying(true)}
                    onPause={() => setPlaying(false)}
                    onLoadedMetadata={(e) => {
                      setDuration(e.currentTarget.duration)
                      e.currentTarget.playbackRate = speed
                    }}
                    onClick={toggle}
                  />
                  <div className="theater-frame-badge">
                    <span>FRAME</span>
                    <strong>{pad(frame)}</strong>
                    <span>/ {pad(work.frames)}</span>
                  </div>
                </>
              )}
            </div>

            {!isImage && (
              <div className="theater-controls">
                <button className="theater-play" onClick={toggle} aria-label={playing ? 'Pause' : 'Play'}>
                  {playing ? <Icon.Pause /> : <Icon.Play />}
                </button>
                <button className="theater-ctl" onClick={() => step(-1)} aria-label="Previous frame" title="Previous frame">
                  <Icon.FrameBack />
                </button>
                <button className="theater-ctl" onClick={() => step(1)} aria-label="Next frame" title="Next frame">
                  <Icon.FrameFwd />
                </button>

                <div className="theater-scrub">
                  <input
                    type="range"
                    min="0"
                    max={duration || 0}
                    step="any"
                    value={Math.min(time, duration || 0)}
                    onChange={(e) => {
                      const v = videoRef.current
                      if (v) v.currentTime = Number(e.target.value)
                    }}
                    style={{ '--p': duration ? `${(time / duration) * 100}%` : '0%' }}
                    aria-label="Scrub timeline"
                  />
                  <span className="theater-time">
                    {time.toFixed(2)}s <i>/ {duration ? duration.toFixed(2) : '—'}s</i>
                  </span>
                </div>

                <div className="theater-speeds" role="group" aria-label="Playback speed">
                  {SPEEDS.map((s) => (
                    <button key={s.value} className={speed === s.value ? 'is-on' : ''} onClick={() => setSpeed(s.value)} aria-pressed={speed === s.value}>
                      {s.label}
                    </button>
                  ))}
                </div>

                <button className={`theater-ctl ${loop ? 'is-on' : ''}`} onClick={() => setLoop((l) => !l)} aria-pressed={loop} title="Loop">
                  <Icon.Loop />
                </button>
                {work.audio && (
                  <button className={`theater-ctl ${!muted ? 'is-on' : ''}`} onClick={() => setMuted((m) => !m)} aria-pressed={!muted} title="Sound">
                    {muted ? <Icon.Mute /> : <Icon.Sound />}
                  </button>
                )}
              </div>
            )}
          </div>

          <aside className="theater-notes">
            <p className="theater-role">{work.role}</p>
            <h2 className="theater-title">{work.title}</h2>
            {work.code && <p className="theater-code">{work.code}</p>}
            <p className="theater-note">{work.note}</p>

            {family.length > 1 && (
              <div className="theater-family">
                <span>{anchor.keys ? 'Animation & key poses' : 'Colour & line art'}</span>
                <div>
                  {family.map((slug) => {
                    const w = workBySlug[slug]
                    return (
                      <button key={slug} className={slug === work.slug ? 'is-on' : ''} onClick={() => onNavigate(slug)} aria-label={w.title} title={w.title}>
                        <img src={media(slug).poster} alt="" />
                        {w.type === 'video' && (
                          <i>
                            <Icon.Play />
                          </i>
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            <dl className="theater-specs">
              {isImage ? (
                <>
                  <div>
                    <dt>Type</dt>
                    <dd>Still</dd>
                  </div>
                  <div>
                    <dt>Canvas</dt>
                    <dd>
                      {work.width}×{work.height}
                    </dd>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <dt>Frame rate</dt>
                    <dd>{work.fps} fps</dd>
                  </div>
                  <div>
                    <dt>Frames</dt>
                    <dd>{work.frames}</dd>
                  </div>
                  <div>
                    <dt>Duration</dt>
                    <dd>{(work.frames / work.fps).toFixed(2)}s</dd>
                  </div>
                  <div>
                    <dt>Canvas</dt>
                    <dd>
                      {work.width}×{work.height}
                    </dd>
                  </div>
                </>
              )}
            </dl>
            <p className="theater-keys">
              {isImage ? (
                <>
                  <kbd>←</kbd>
                  <kbd>→</kbd> piece · <kbd>Esc</kbd> close
                </>
              ) : (
                <>
                  <kbd>Space</kbd> play · <kbd>←</kbd>
                  <kbd>→</kbd> frame · <kbd>↑</kbd>
                  <kbd>↓</kbd> piece · <kbd>Esc</kbd> close
                </>
              )}
            </p>
          </aside>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Theater({ slug, onClose, onNavigate }) {
  const work = slug ? workBySlug[slug] : null

  useEffect(() => {
    document.body.classList.toggle('is-locked', !!work)
    return () => document.body.classList.remove('is-locked')
  }, [work])

  return <AnimatePresence>{work && <Player key="theater" work={work} onClose={onClose} onNavigate={onNavigate} />}</AnimatePresence>
}
