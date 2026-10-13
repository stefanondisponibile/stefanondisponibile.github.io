import { profile } from '../content'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="mx-auto mt-12 max-w-3xl px-4 text-sm text-fg-subtle">
      <p className="border-t border-accent-500/15 py-8">
        © {year} {profile.name}
      </p>
    </footer>
  )
}
