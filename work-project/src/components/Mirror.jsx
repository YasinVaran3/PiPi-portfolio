import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { chapterById, media, mirrorPair, workBySlug } from '../data/works'
import { Icon } from './Icons'
import './Mirror.css'

const ease = [0.16, 1, 0.3, 1]

export default function Mirror({ onWatch }) {
  const before = workBySlug[mirrorPair.before]
  const after = workBySlug[mirrorPair.after]
  const frameRef = useRef(null)
  const beforeRef = useRef(null)
  const afterRef = useRef(null)
  const [split, setSplit] = useState(50)
  const [playing, setPlaying] = useState(false)
  const [slow, setSlow] = useState(false)
  const dragging = useRef(false)

  // play only while visible, keep both drawings in lock-step
  useEffect(() => {
    const a = beforeRef.current
    const b = afterRef.current
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          Promise.all([a.play(), b.play()]).then(() => setPlaying(true)).catch(() => {})
        } else {
          a.pause()
          b.pause()
          setPlaying(false)
        }
      },
      { threshold: 0.35 },
    )
    io.observe(frameRef.current)

    let raf
    const sync = () => {
      if (a.duration && b.duration && Math.abs(a.currentTime - b.currentTime) > 0.06) {
        b.currentTime = a.currentTime
      }
      raf = requestAnimationFrame(sync)
    }
    raf = requestAnimationFrame(sync)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [])

  useEffect(() => {
    const rate = slow ? 0.35 : 1
    beforeRef.current.playbackRate = rate
    afterRef.current.playbackRate = rate
  }, [slow])

  const toggle = () => {
    const a = beforeRef.current
    const b = afterRef.current
    if (a.paused) {
      a.play()
      b.play()
      setPlaying(true)
    } else {
      a.pause()
      b.pause()
      setPlaying(false)
    }
  }

  const moveTo = (clientX) => {
    const r = frameRef.current.getBoundingClientRect()
    setSplit(Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100)))
  }

  const accent = chapterById[after.chapter].accent

  return (
    <section id="mirror" className="section mirror" data-tint-a="#ffc86b" data-tint-b="#5ee0ff" style={{ '--accent': accent }}>
      <div className="wrap">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
        >
          <span className="kicker">An Interlude</span>
          <h2 className="display">
            The <em className="shimmer">Metamorphosis</em> Mirror
          </h2>
          <p>
            Drag the wand across the glass to watch <b>{mirrorPair.title}</b> transform — from the energy of the first key into the precision of the second key, frame for frame.
          </p>
        </motion.div>

        <motion.div
          className="mirror-stage"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1.2, ease }}
        >
          <svg className="mirror-filigree mirror-filigree-tl" viewBox="0 0 120 120" aria-hidden>
            <path d="M8 112V60C8 30 30 8 60 8h52M22 112V64c0-24 18-42 42-42h48M40 40c10-10 24-8 30 2M40 40c-10 10-8 24 2 30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="40" cy="40" r="5" fill="currentColor" />
          </svg>
          <svg className="mirror-filigree mirror-filigree-br" viewBox="0 0 120 120" aria-hidden>
            <path d="M8 112V60C8 30 30 8 60 8h52M22 112V64c0-24 18-42 42-42h48M40 40c10-10 24-8 30 2M40 40c-10 10-8 24 2 30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="40" cy="40" r="5" fill="currentColor" />
          </svg>

          <div
            ref={frameRef}
            className="mirror-glass"
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
            <video ref={beforeRef} className="mirror-before" src={media(before.slug).src} poster={media(before.slug).poster} muted loop playsInline preload="metadata" />
            <video ref={afterRef} className="mirror-after" src={media(after.slug).src} poster={media(after.slug).poster} muted loop playsInline preload="metadata" />

            <span className="mirror-tag mirror-tag-l">
              <span className="hand">before</span> First Key · 原画
            </span>
            <span className="mirror-tag mirror-tag-r">
              <span className="hand">after</span> Second Key · 第二原画
            </span>

            <div className="mirror-wand" aria-hidden>
              <span className="mirror-wand-line" />
              <span className="mirror-wand-knob">
                <Icon.Sparkle />
              </span>
            </div>

            <input
              className="mirror-range"
              type="range"
              min="0"
              max="100"
              value={Math.round(split)}
              onChange={(e) => setSplit(Number(e.target.value))}
              aria-label="Reveal the second key"
            />
          </div>
        </motion.div>

        <div className="mirror-controls">
          <button className="btn btn-ghost" onClick={toggle}>
            {playing ? <Icon.Pause /> : <Icon.Play />} {playing ? 'Pause both' : 'Play both'}
          </button>
          <button className={`btn btn-ghost ${slow ? 'is-on' : ''}`} onClick={() => setSlow((s) => !s)} aria-pressed={slow}>
            <Icon.Loop /> {slow ? 'Slow motion on' : 'Slow motion'}
          </button>
          <button className="btn btn-ghost" onClick={() => onWatch(before.slug)}>
            <Icon.Expand /> First key
          </button>
          <button className="btn btn-ghost" onClick={() => onWatch(after.slug)}>
            <Icon.Expand /> Second key
          </button>
        </div>
      </div>
    </section>
  )
}
