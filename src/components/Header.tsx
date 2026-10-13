import { profile } from '../content'
import useActiveSection from '../useActiveSection'
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

  return (
    <header className="sticky top-0 z-10 px-4 pt-4 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-full before:backdrop-blur-md before:mask-b-from-50%">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-20 focus:rounded focus:bg-accent-600 focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-1 rounded-full border border-accent-500/20 bg-white/60 p-1.5 shadow-lg shadow-accent-500/10 backdrop-blur-xl sm:gap-2 dark:bg-ink/60 dark:shadow-black/40">
        <a href="#top" className="flex items-center gap-2 rounded-full! py-0.5 pr-2 pl-0.5 font-semibold tracking-tight">
          <span className="shrink-0 rounded-full bg-linear-to-br from-violet-500 to-fuchsia-500 p-0.5 shadow-[0_0_12px] shadow-fuchsia-500/40">
            <img src="/avatar.webp" alt="" width="32" height="32" className="size-8 rounded-full bg-mauve-50" />
          </span>
          <span className="max-sm:sr-only">{profile.name}</span>
        </a>
        <nav aria-label="Primary">
          <ul className="flex text-[13px] sm:text-sm">
            {nav.map((item) => {
              const current = active === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={current ? 'location' : undefined}
                    className={`block rounded-full! px-1.5 py-1.5 max-[380px]:px-1 sm:px-3 transition-colors ${
                      current
                        ? 'bg-accent-500/15 text-fg-accent'
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
      </div>
    </header>
  )
}
