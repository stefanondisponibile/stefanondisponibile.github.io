import { links } from '../content'
import Section from './Section'

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-xl text-lg text-fg-muted">Want to chat? Find me on:</p>
      <ul className="mt-6 flex flex-wrap gap-3">
        {links.map((link) => (
          <li key={link.url}>
            <a
              href={link.url}
              className="group inline-flex font-mono items-center gap-1.5 rounded-full! border border-accent-500/30 bg-white/50 px-4 py-2 text-sm font-medium transition-colors hover:border-fuchsia-500/60 hover:bg-accent-500/10 dark:bg-white/5 hover:text-fg-accent"
            >
              {link.label}
              <span aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none">
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
