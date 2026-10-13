import { profile } from '../content'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="mx-auto max-w-3xl px-4 py-8 text-sm text-zinc-600 dark:text-zinc-400">
      © {year} {profile.name}
    </footer>
  )
}
