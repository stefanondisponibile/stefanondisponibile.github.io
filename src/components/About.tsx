import { profile } from '../content'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  )
}
