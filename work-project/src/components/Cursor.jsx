import { useEffect, useRef } from 'react'
import { canHover, prefersReducedMotion } from '../hooks'

const HUES = ['169, 220, 255', '200, 230, 255', '143, 192, 255']

/** A soft glow sprite, drawn once and stamped for every particle. */
function makeSprite(rgb) {
  const size = 32
  const c = document.createElement('canvas')
  c.width = c.height = size
  const g = c.getContext('2d')
  const grad = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  grad.addColorStop(0, 'rgba(255, 255, 255, 1)')
  grad.addColorStop(0.18, `rgba(${rgb}, 0.9)`)
  grad.addColorStop(0.45, `rgba(${rgb}, 0.22)`)
  grad.addColorStop(1, `rgba(${rgb}, 0)`)
  g.fillStyle = grad
  g.fillRect(0, 0, size, size)
  return c
}

/** Small glowing dots that drift outward from the pointer and fade. */
export default function Cursor() {
  const ref = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion() || !canHover()) return
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const sprites = HUES.map(makeSprite)
    const parts = []
    const pointer = { x: -100, y: -100, last: 0, inside: false }
    let raf = 0
    let lastEmit = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    const emit = (count, spread) => {
      for (let i = 0; i < count && parts.length < 70; i++) {
        const a = Math.random() * Math.PI * 2
        const speed = 0.25 + Math.random() * spread
        const life = 55 + Math.random() * 45
        parts.push({
          x: pointer.x + Math.cos(a) * 3,
          y: pointer.y + Math.sin(a) * 3,
          vx: Math.cos(a) * speed,
          vy: Math.sin(a) * speed,
          size: 5 + Math.random() * 7,
          sprite: sprites[(Math.random() * sprites.length) | 0],
          life,
          max: life,
        })
      }
    }

    const loop = (t) => {
      // a gentle, continuous radiance for a moment after the pointer settles
      if (pointer.inside && t - pointer.last < 1400 && t - lastEmit > 110) {
        emit(1, 0.45)
        lastEmit = t
      }

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      ctx.globalCompositeOperation = 'lighter'
      for (let i = parts.length - 1; i >= 0; i--) {
        const p = parts[i]
        p.life -= 1
        if (p.life <= 0) {
          parts.splice(i, 1)
          continue
        }
        p.vx *= 0.965
        p.vy *= 0.965
        p.x += p.vx
        p.y += p.vy
        const k = p.life / p.max
        // fade in quickly, then ease out
        ctx.globalAlpha = Math.min(1, (1 - k) * 6) * k * 0.55
        const s = p.size * (0.6 + k * 0.4)
        ctx.drawImage(p.sprite, p.x - s / 2, p.y - s / 2, s, s)
      }
      ctx.globalAlpha = 1
      ctx.globalCompositeOperation = 'source-over'

      const idle = !parts.length && (!pointer.inside || t - pointer.last > 1400)
      raf = idle ? 0 : requestAnimationFrame(loop)
    }

    const onMove = (e) => {
      if (e.pointerType !== 'mouse') return
      const dist = Math.hypot(e.clientX - pointer.x, e.clientY - pointer.y)
      pointer.x = e.clientX
      pointer.y = e.clientY
      pointer.inside = true
      pointer.last = performance.now()
      emit(Math.min(2, Math.ceil(dist / 22)), 0.9)
      if (!raf) raf = requestAnimationFrame(loop)
    }
    const onLeave = () => (pointer.inside = false)

    window.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden
      style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', zIndex: 9000, pointerEvents: 'none' }}
    />
  )
}
