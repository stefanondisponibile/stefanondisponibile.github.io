import type { CSSProperties } from 'react'
import { profile } from '../content'

export default function Hero() {
  return (
    <div className="py-20 sm:py-28">
      <p className="rise inline-flex items-center gap-2 rounded-full border border-accent-500/25 bg-accent-500/10 px-3 py-1 font-mono text-xs text-fg-accent">
        <span aria-hidden="true" className="size-1.5 glow-pulse rounded-full bg-fuchsia-500 shadow-[0_0_8px] shadow-fuchsia-500" />
        Hi, I'm
      </p>
      <h1 style={{ '--delay': '0.1s' } as CSSProperties} className="rise mt-5 text-5xl font-bold tracking-tight text-balance sm:text-7xl">
        <span className="shimmer bg-linear-to-r from-violet-700 via-fuchsia-600 to-pink-500 bg-clip-text text-transparent dark:from-violet-300 dark:via-fuchsia-300 dark:to-pink-300">
          {profile.name}
        </span>
      </h1>
      <p style={{ '--delay': '0.2s' } as CSSProperties} className="rise mt-6 max-w-2xl text-lg text-pretty text-fg-muted">
        {profile.tagline}
      </p>
      <div style={{ '--delay': '0.3s' } as CSSProperties} className="rise mt-10 flex font-mono flex-wrap gap-3">
        <a
          href="#experience"
          className="rounded-full! bg-linear-to-r from-violet-600 to-fuchsia-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-fuchsia-600/25 transition hover:shadow-fuchsia-500/40 hover:brightness-110"
        >
          View experience
        </a>
        <a
          href="#contact"
          className="rounded-full! border border-accent-500/30 bg-white/50 px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent-500/60 hover:bg-accent-500/10 dark:bg-white/5"
        >
          Get in touch
        </a>
      </div>
    </div>
  )
}
