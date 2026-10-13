import { links } from '../content'
import Section from './Section'

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <ul className="flex flex-wrap gap-4">
        {links.map((link) => (
          <li key={link.url}>
            <a href={link.url} className="underline underline-offset-4">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
