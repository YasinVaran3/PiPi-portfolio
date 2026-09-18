import { useEffect, useState } from 'react'

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Plays a muted <video> only while it is on screen. */
export function useAutoplayInView(videoRef, { threshold = 0.35, enabled = true } = {}) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = videoRef.current
    if (!el || !enabled) return
    const io = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
        if (entry.isIntersecting) {
          el.play().catch(() => {})
        } else {
          el.pause()
        }
      },
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [videoRef, threshold, enabled])

  return visible
}

/** Section elements with data-tint-a / data-tint-b recolour the page aurora as they scroll into view. */
export function useSectionTints() {
  useEffect(() => {
    const root = document.documentElement
    const sections = [...document.querySelectorAll('[data-tint-a]')]
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          root.style.setProperty('--tint-a', entry.target.dataset.tintA)
          root.style.setProperty('--tint-b', entry.target.dataset.tintB)
        })
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])
}

/** Returns the id of the section currently in the middle of the viewport. */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [ids])

  return active
}

/** Pointer-driven 3D tilt: writes --rx, --ry, --mx, --my on the element. */
export function tiltHandlers(strength = 8) {
  return {
    onPointerMove(e) {
      if (e.pointerType !== 'mouse') return
      const el = e.currentTarget
      const r = el.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width
      const py = (e.clientY - r.top) / r.height
      el.style.setProperty('--rx', `${(0.5 - py) * strength}deg`)
      el.style.setProperty('--ry', `${(px - 0.5) * strength}deg`)
      el.style.setProperty('--mx', `${px * 100}%`)
      el.style.setProperty('--my', `${py * 100}%`)
    },
    onPointerLeave(e) {
      const el = e.currentTarget
      el.style.setProperty('--rx', '0deg')
      el.style.setProperty('--ry', '0deg')
    },
  }
}

export const pad = (n, len = 3) => String(Math.max(0, n)).padStart(len, '0')
