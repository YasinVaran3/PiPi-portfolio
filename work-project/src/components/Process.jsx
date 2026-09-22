import { useEffect, useRef, useState } from 'react'
import { media, mirrorPair, workBySlug } from '../data/works'
import { Icon } from './Icons'
import Reveal from './Reveal'
import './Process.css'

/* First key vs. second key of the same cut, compared under one draggable divider. */
export default function Process({ onWatch }) {
  const before = workBySlug[mirrorPair.before]
  const after = workBySlug[mirrorPair.after]
  const frameRef = useRef(null)
  const beforeRef = useRef(null)
  const afterRef = useRef(null)
  const [split, setSplit] = useState(50)
  const [playing, setPlaying] = useState(false)
  const [slow, setSlow] = useState(false)
  const dragging = useRef(false)

  // keep both drawings in lock-step while playing
  useEffect(() => {
    if (!playing) return
    const a = beforeRef.current
    const b = afterRef.current
    let raf
    const sync = () => {
      if (a.duration && b.duration && Math.abs(a.currentTime - b.currentTime) > 0.06) b.currentTime = a.currentTime
      raf = requestAnimationFrame(sync)
    }
    raf = requestAnimationFrame(sync)
    return () => cancelAnimationFrame(raf)
  }, [playing])

  useEffect(() => {
    const rate = slow ? 0.35 : 1
    beforeRef.current.playbackRate = rate
    afterRef.current.playbackRate = rate
  }, [slow])

  const play = () => {
    Promise.all([beforeRef.current.play(), afterRef.current.play()])
      .then(() => setPlaying(true))
      .catch(() => {})
  }
  const pause = () => {
    beforeRef.current.pause()
    afterRef.current.pause()
    setPlaying(false)
  }

  const moveTo = (clientX) => {
    const r = frameRef.current.getBoundingClientRect()
    setSplit(Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100)))
  }

  return (
    <section id="process" className="section process">
      <div className="wrap">
        <div className="section-head">
          <Reveal>
            <p className="eyebrow">Process</p>
            <h2 className="display">
              First key to <em>second key</em>
            </h2>
          </Reveal>
          <Reveal as="p" delay={0.1}>
            {mirrorPair.title} ({mirrorPair.code}). Drag the divider to compare the rough key drawings with the refined second key, frame for frame.
          </Reveal>
        </div>

        <Reveal className="process-stage">
          <div
            ref={frameRef}
            className="process-glass"
            style={{ '--split': `${split}%` }}
            onPointerEnter={(e) => e.pointerType === 'mouse' && play()}
            onPointerDown={(e) => {
              dragging.current = true
              e.currentTarget.setPointerCapture(e.pointerId)
              moveTo(e.clientX)
            }}
            onPointerMove={(e) => dragging.current && moveTo(e.clientX)}
            onPointerUp={() => (dragging.current = false)}
            onPointerCancel={() => (dragging.current = false)}
          >
            <video ref={beforeRef} className="process-before" src={media(before.slug).src} poster={media(before.slug).poster} muted loop playsInline preload="metadata" />
            <video ref={afterRef} className="process-after" src={media(after.slug).src} poster={media(after.slug).poster} muted loop playsInline preload="metadata" />

            <span className="process-tag process-tag-l">First key · 原画</span>
            <span className="process-tag process-tag-r">Second key · 第二原画</span>

            <div className="process-divider" aria-hidden>
              <span className="process-knob">
                <Icon.ChevronLeft />
                <Icon.ChevronRight />
              </span>
            </div>

            <input
              className="process-range"
              type="range"
              min="0"
              max="100"
              value={Math.round(split)}
              onChange={(e) => setSplit(Number(e.target.value))}
              aria-label="Compare first and second key"
            />
          </div>
        </Reveal>

        <div className="process-controls">
          <button className="btn btn-ghost" onClick={playing ? pause : play}>
            {playing ? <Icon.Pause /> : <Icon.Play />} {playing ? 'Pause' : 'Play'}
          </button>
          <button className={`btn btn-ghost ${slow ? 'is-on' : ''}`} onClick={() => setSlow((s) => !s)} aria-pressed={slow}>
            <Icon.Loop /> Slow motion
          </button>
          <span className="process-controls-gap" />
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
