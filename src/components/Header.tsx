import { type CSSProperties, useLayoutEffect, useRef, useState } from 'react'
import { profile } from '../content'
import useActiveSection from '../useActiveSection'
import Spaceship from './Spaceship'
import ThemeToggle from './ThemeToggle'

const nav = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]
const ids = nav.map((item) => item.id)

export default function Header() {
  const active = useActiveSection(ids)
  const navRef = useRef<HTMLElement>(null)
  const blob = useRef<HTMLSpanElement>(null)
  const [pill, setPill] = useState<{ left: number; right: number; width: number; dir: number }>()

  // Measure the active link so the liquid can flow to it.
  useLayoutEffect(() => {
    const nav = navRef.current
    if (!nav) return
    const measure = () => {
      const link = nav.querySelector<HTMLElement>('[aria-current]')
      if (!link) return setPill(undefined)
      const left = link.offsetLeft
      const width = link.offsetWidth
      const right = nav.clientWidth - left - width
      setPill((prev) => ({ left, right, width, dir: prev ? Math.sign(left - prev.left) : 0 }))
    }
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(nav)
    return () => observer.disconnect()
  }, [active])

  // Squash the blob as it travels, like a droplet being pulled.
  useLayoutEffect(() => {
    if (!active || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    blob.current?.animate(
      [{ scale: '1 1' }, { scale: '1.04 0.6', offset: 0.3 }, { scale: '0.97 1.15', offset: 0.65 }, { scale: '1 1' }],
      { duration: 800, easing: 'ease-out' },
    )
  }, [active])

  // The leading edge darts ahead with overshoot; the trailing edge lags behind.
  const lead = '420ms cubic-bezier(0.3, 1.5, 0.5, 1)'
  const trail = '620ms cubic-bezier(0.6, 0, 0.2, 1) 90ms'
  const edges = pill?.dir === 1 ? [trail, lead] : pill?.dir === -1 ? [lead, trail] : [lead, lead]
  // Droplets follow the blob's center more slowly, stretching into a tail.
  const center = pill && pill.left + pill.width / 2

  return (
    <header className="sticky top-0 z-10 px-4 pt-4 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-full before:backdrop-blur-md before:mask-b-from-50%">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-20 focus:rounded focus:bg-accent-600 focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div className="group relative mx-auto flex max-w-3xl items-center justify-between gap-1 rounded-full border border-accent-500/20 bg-white/60 p-1.5 shadow-lg shadow-accent-500/10 backdrop-blur-xl sm:gap-2 dark:bg-ink/60 dark:shadow-black/40">
        <a href="#top" className="flex items-center gap-2 rounded-full! py-0.5 pr-2 pl-0.5 font-mono font-semibold tracking-tight">
          <span className="shrink-0 rounded-full bg-linear-to-br from-violet-500 to-fuchsia-500 p-0.5 shadow-[0_0_12px] shadow-fuchsia-500/40">
            <img src="/avatar.webp" alt="" width="32" height="32" className="size-8 rounded-full bg-mauve-50" />
          </span>
          <span className="max-sm:sr-only">{profile.name}</span>
        </a>
        <nav ref={navRef} aria-label="Primary" className="relative">
          <svg aria-hidden="true" className="absolute size-0">
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
              <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8" />
            </filter>
          </svg>
          <span
            aria-hidden="true"
            className={`goo pointer-events-none absolute inset-0 transition-opacity duration-300 ${pill ? '' : 'opacity-0!'}`}
            style={{ '--reach': `${(pill?.width ?? 0) / 2}px` } as CSSProperties}
          >
            {pill && (
              <>
                <span
                  ref={blob}
                  className="liquid blob absolute inset-y-0 rounded-full"
                  style={{
                    left: pill.left,
                    right: pill.right,
                    transition: `left ${edges[0]}, right ${edges[1]}`,
                  }}
                />
                {[0.75, 0.95, 1.15].map((t, i) => (
                  <span
                    key={i}
                    className={`liquid drop drop-${i} absolute top-1/2 rounded-full`}
                    style={{ left: center, transition: `left ${t}s cubic-bezier(0.5, 0, 0.2, 1.2)` }}
                  />
                ))}
              </>
            )}
          </span>
          <ul className="flex text-[13px] sm:font-mono sm:text-sm">
            {nav.map((item) => {
              const current = active === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={current ? 'location' : undefined}
                    className={`relative block rounded-full! px-1.5 py-1.5 max-[380px]:px-1 sm:px-3 transition-colors ${
                      current
                        ? 'text-fg-accent'
                        : 'text-fg-muted hover:bg-accent-500/10 hover:text-fg'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
        <ThemeToggle />
        <span aria-hidden="true" className="pointer-events-none absolute inset-x-8 -bottom-1.5 @container motion-reduce:hidden">
          <span className="patrol block w-fit">
            <Spaceship size={16} />
          </span>
        </span>
      </div>
    </header>
  )
}
