import { useEffect, useRef } from 'react'
import Spaceship from './Spaceship'

// Starting spots (fractions of the layer) and sizes; the last two only show from `sm` up.
const ships = [
  { x: 0.8, y: 0.2, size: 30 },
  { x: 0.15, y: 0.75, size: 22 },
  { x: 0.55, y: 0.9, size: 18, wide: true },
  { x: 0.95, y: 0.6, size: 24, wide: true },
]

const SPEED = 0.9
const FLEE_RADIUS = 130
const MARGIN = 40

type Ship = { x: number; y: number; vx: number; vy: number; heading: number; seed: number }

function place(el: HTMLElement, s: Ship) {
  el.style.transform = `translate3d(${s.x}px, ${s.y}px, 0) rotate(${Math.atan2(s.vy, s.vx)}rad)`
}

export default function Fleet() {
  const layer = useRef<HTMLDivElement>(null)
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const root = layer.current
    if (!root) return
    let { width, height } = root.getBoundingClientRect()
    const state: Ship[] = ships.map((s, i) => {
      const heading = i * 2.1
      return {
        x: s.x * width,
        y: s.y * height,
        vx: Math.cos(heading),
        vy: Math.sin(heading),
        heading,
        seed: i * 17.3,
      }
    })
    state.forEach((s, i) => refs.current[i] && place(refs.current[i], s))
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const pointer = { x: -1e4, y: -1e4 }
    const onPointer = (e: PointerEvent) => {
      pointer.x = e.clientX
      pointer.y = e.clientY
    }
    const onLeave = () => {
      pointer.x = pointer.y = -1e4
    }
    // A lifted finger shouldn't leave a permanent no-fly zone.
    const onUp = (e: PointerEvent) => e.pointerType !== 'mouse' && onLeave()

    let frame = 0
    let last = 0
    const tick = (t: number) => {
      const dt = Math.min(t - last, 50) / 16.7
      last = t
      const rect = root.getBoundingClientRect()
      width = rect.width
      height = rect.height
      const px = pointer.x - rect.left
      const py = pointer.y - rect.top

      state.forEach((s, i) => {
        // Wander: let the heading drift on a slow, per-ship wave.
        s.heading += Math.sin(t / 1400 + s.seed) * 0.015 * dt
        s.vx += (Math.cos(s.heading) * SPEED - s.vx) * 0.02 * dt
        s.vy += (Math.sin(s.heading) * SPEED - s.vy) * 0.02 * dt

        // Flee the pointer, then keep flying the new way.
        const dx = s.x - px
        const dy = s.y - py
        const d = Math.hypot(dx, dy)
        const fleeing = d < FLEE_RADIUS && d > 0
        if (fleeing) {
          const push = (1 - d / FLEE_RADIUS) * 0.5 * dt
          s.vx += (dx / d) * push
          s.vy += (dy / d) * push
          s.heading = Math.atan2(s.vy, s.vx)
        }
        const speed = Math.hypot(s.vx, s.vy)
        if (speed > 5) {
          s.vx *= 5 / speed
          s.vy *= 5 / speed
        }

        s.x += s.vx * dt
        s.y += s.vy * dt
        // Wrap around, slightly off-screen so ships slip out of view first.
        if (s.x < -MARGIN) s.x = width + MARGIN
        else if (s.x > width + MARGIN) s.x = -MARGIN
        if (s.y < -MARGIN) s.y = height + MARGIN
        else if (s.y > height + MARGIN) s.y = -MARGIN

        const el = refs.current[i]
        if (!el) return
        place(el, s)
        el.classList.toggle('boost', fleeing)
      })
      frame = requestAnimationFrame(tick)
    }

    let visible = false
    const sync = () => {
      cancelAnimationFrame(frame)
      if (visible && !document.hidden) {
        frame = requestAnimationFrame((t) => {
          last = t
          tick(t)
        })
      }
    }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      sync()
    })
    observer.observe(root)
    document.addEventListener('visibilitychange', sync)
    addEventListener('pointermove', onPointer, { passive: true })
    addEventListener('pointerdown', onPointer, { passive: true })
    addEventListener('pointerup', onUp)
    document.documentElement.addEventListener('pointerleave', onLeave)

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      document.removeEventListener('visibilitychange', sync)
      removeEventListener('pointermove', onPointer)
      removeEventListener('pointerdown', onPointer)
      removeEventListener('pointerup', onUp)
      document.documentElement.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <div ref={layer} aria-hidden="true" className="pointer-events-none absolute inset-y-0 -inset-x-4 -z-10 sm:-inset-x-24">
      {ships.map((s, i) => (
        <div
          key={i}
          ref={(el) => {
            refs.current[i] = el
          }}
          className={`absolute top-0 left-0 -mt-2 -ml-3 will-change-transform ${s.wide ? 'max-sm:hidden' : ''}`}
        >
          <Spaceship size={s.size} />
        </div>
      ))}
    </div>
  )
}
