import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { pad, prefersReducedMotion } from '../hooks'
import './Loader.css'

const FRAMES = 24

export default function Loader({ onDone }) {
  const [frame, setFrame] = useState(0)
  const [open, setOpen] = useState(true)
  const done = useRef(onDone)

  useEffect(() => {
    if (prefersReducedMotion()) {
      setOpen(false)
      done.current()
      return
    }
    let f = 0
    const id = setInterval(() => {
      f += 1
      setFrame(f)
      if (f >= FRAMES) {
        clearInterval(id)
        setTimeout(() => {
          setOpen(false)
          done.current()
        }, 350)
      }
    }, 70)
    return () => clearInterval(id)
  }, [])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="loader"
          exit={{ opacity: 0, filter: 'blur(8px)' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="loader-stage" aria-hidden>
            <div className="loader-ball-track">
              <div className="loader-ball" />
            </div>
            <div className="loader-shadow" />
            <div className="loader-floor" />
          </div>
          <p className="loader-caption hand">sharpening pencils…</p>
          <p className="loader-counter" role="status">
            <span>FRAME</span> {pad(frame)} <span>/ {pad(FRAMES)}</span>
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
