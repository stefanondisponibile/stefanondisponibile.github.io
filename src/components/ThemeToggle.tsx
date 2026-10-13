import { useState } from 'react'
import { flushSync } from 'react-dom'

function setTheme(dark: boolean) {
  document.documentElement.classList.toggle('dark', dark)
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', dark ? '#0f0a1a' : '#faf8fc')
  try {
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  } catch {
    // Storage unavailable; the choice lasts for this visit only.
  }
}

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  return (
    <button
      type="button"
      role="switch"
      aria-checked={!dark}
      aria-label="Light mode"
      onClick={(event) => {
        const update = () => {
          setTheme(!dark)
          flushSync(() => setDark(!dark))
        }
        if (!document.startViewTransition || matchMedia('(prefers-reduced-motion: reduce)').matches) {
          update()
          return
        }
        // Expand the new theme in a circle from the toggle.
        const { left, top, width, height } = event.currentTarget.getBoundingClientRect()
        const x = left + width / 2
        const y = top + height / 2
        const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
        const root = document.documentElement.style
        root.setProperty('--vt-x', `${x}px`)
        root.setProperty('--vt-y', `${y}px`)
        root.setProperty('--vt-r', `${r}px`)
        document.startViewTransition(update)
      }}
      className="relative inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full border border-accent-500/30 bg-accent-500/15 transition-colors hover:border-accent-500/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
    >
      <span
        aria-hidden="true"
        className="absolute left-0.5 grid size-5.5 place-items-center rounded-full bg-linear-to-br from-violet-500 to-fuchsia-500 text-white shadow-md shadow-fuchsia-500/30 transition-transform motion-reduce:transition-none dark:translate-x-0 not-dark:translate-x-5"
      >
        {dark ? (
          <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor">
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
        )}
      </span>
    </button>
  )
}
