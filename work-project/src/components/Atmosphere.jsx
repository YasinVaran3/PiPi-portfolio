import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '../hooks'

const COLORS = ['#ff7eb6', '#ffc86b', '#6ef0c8', '#7cc8ff', '#b9a4ff', '#ffffff']

function setupCanvas(canvas) {
  const ctx = canvas.getContext('2d')
  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = window.innerWidth * dpr
    canvas.height = window.innerHeight * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  }
  resize()
  window.addEventListener('resize', resize)
  return { ctx, cleanup: () => window.removeEventListener('resize', resize) }
}

function drawStar(ctx, x, y, r, rot) {
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(rot)
  ctx.beginPath()
  ctx.moveTo(r, 0)
  for (let i = 0; i < 4; i++) {
    const a = (i * Math.PI) / 2
    ctx.quadraticCurveTo(Math.cos(a + Math.PI / 4) * r * 0.18, Math.sin(a + Math.PI / 4) * r * 0.18, Math.cos(a + Math.PI / 2) * r, Math.sin(a + Math.PI / 2) * r)
  }
  ctx.closePath()
  ctx.fill()
  ctx.restore()
}

/** Twinkling stars with the occasional shooting star. */
export function Starfield() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const { ctx, cleanup } = setupCanvas(canvas)
    const still = prefersReducedMotion()
    const count = Math.round(Math.min(160, (window.innerWidth * window.innerHeight) / 9000))
    const stars = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.3 + 0.3,
      phase: Math.random() * Math.PI * 2,
      speed: 0.4 + Math.random() * 1.4,
      color: Math.random() < 0.18 ? COLORS[Math.floor(Math.random() * 5)] : '#ffffff',
    }))
    let shooting = null
    let raf

    const frame = (t) => {
      const w = window.innerWidth
      const h = window.innerHeight
      ctx.clearRect(0, 0, w, h)
      for (const s of stars) {
        const tw = still ? 0.7 : 0.45 + 0.55 * Math.sin(t / 1000 * s.speed + s.phase)
        ctx.globalAlpha = Math.max(0.08, tw)
        ctx.fillStyle = s.color
        if (s.r > 1.35) {
          drawStar(ctx, s.x * w, s.y * h, s.r * 3.2, 0)
        } else {
          ctx.beginPath()
          ctx.arc(s.x * w, s.y * h, s.r, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      if (!still) {
        if (!shooting && Math.random() < 0.0025) {
          shooting = { x: Math.random() * w * 0.7, y: Math.random() * h * 0.35, life: 0 }
        }
        if (shooting) {
          shooting.life += 1
          const p = shooting.life / 55
          const x = shooting.x + p * 420
          const y = shooting.y + p * 180
          const grad = ctx.createLinearGradient(x - 120, y - 52, x, y)
          grad.addColorStop(0, 'rgba(255,255,255,0)')
          grad.addColorStop(1, 'rgba(255,240,210,0.95)')
          ctx.globalAlpha = Math.sin(p * Math.PI)
          ctx.strokeStyle = grad
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.moveTo(x - 120, y - 52)
          ctx.lineTo(x, y)
          ctx.stroke()
          if (p >= 1) shooting = null
        }
      }
      ctx.globalAlpha = 1
      raf = still ? 0 : requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)

    const onVis = () => {
      cancelAnimationFrame(raf)
      if (!document.hidden) raf = requestAnimationFrame(frame)
    }
    document.addEventListener('visibilitychange', onVis)
    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('visibilitychange', onVis)
      cleanup()
    }
  }, [])

  return <canvas ref={ref} className="starfield" aria-hidden style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }} />
}

/** A trail of pixie-dust sparkles following the mouse. */
export function SparkleCursor() {
  const ref = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion() || !window.matchMedia('(pointer: fine)').matches) return
    const canvas = ref.current
    const { ctx, cleanup } = setupCanvas(canvas)
    const parts = []
    let last = { x: 0, y: 0 }
    let raf = 0

    const loop = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      for (let i = parts.length - 1; i >= 0; i--) {
        const p = parts[i]
        p.life -= 1
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.035
        p.rot += p.vr
        if (p.life <= 0) {
          parts.splice(i, 1)
          continue
        }
        ctx.globalAlpha = p.life / p.max
        ctx.fillStyle = p.color
        drawStar(ctx, p.x, p.y, p.size * (p.life / p.max) + 1, p.rot)
      }
      ctx.globalAlpha = 1
      raf = parts.length ? requestAnimationFrame(loop) : 0
    }

    const onMove = (e) => {
      const dist = Math.hypot(e.clientX - last.x, e.clientY - last.y)
      last = { x: e.clientX, y: e.clientY }
      const n = Math.min(3, Math.floor(dist / 14))
      for (let i = 0; i < n; i++) {
        if (parts.length > 90) break
        parts.push({
          x: e.clientX + (Math.random() - 0.5) * 10,
          y: e.clientY + (Math.random() - 0.5) * 10,
          vx: (Math.random() - 0.5) * 1.2,
          vy: -Math.random() * 1.1,
          rot: Math.random() * Math.PI,
          vr: (Math.random() - 0.5) * 0.2,
          size: 3 + Math.random() * 5,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          life: 38,
          max: 38,
        })
      }
      if (!raf) raf = requestAnimationFrame(loop)
    }

    window.addEventListener('pointermove', onMove)
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
      cleanup()
    }
  }, [])

  return <canvas ref={ref} aria-hidden style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', zIndex: 9000, pointerEvents: 'none' }} />
}
