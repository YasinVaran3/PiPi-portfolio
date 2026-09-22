import { useEffect, useState } from 'react'

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const canHover = () => typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches

/** Hover-to-play: returns handlers that play a muted <video> while the pointer is over its parent. */
export function hoverPlay(videoRef) {
  return {
    onPointerEnter(e) {
      if (e.pointerType !== 'mouse') return
      const v = videoRef.current
      if (v) v.play().catch(() => {})
    },
    onPointerLeave() {
      const v = videoRef.current
      if (!v) return
      v.pause()
      v.currentTime = 0
    },
  }
}

/** Writes the pointer position inside an element as --mx / --my, for hover lighting. */
export function trackPointer(e) {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  el.style.setProperty('--mx', `${e.clientX - r.left}px`)
  el.style.setProperty('--my', `${e.clientY - r.top}px`)
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

export const pad = (n, len = 3) => String(Math.max(0, n)).padStart(len, '0')
