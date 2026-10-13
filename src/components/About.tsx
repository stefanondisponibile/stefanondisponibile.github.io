import { profile } from '../content'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-2xl space-y-4 text-xl leading-relaxed text-pretty text-fg-muted sm:text-2xl">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  )
}
