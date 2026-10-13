import { skills, type Skill } from '../content'
import Section from './Section'

const levels: Record<Skill['level'], number> = { intermediate: 1, advanced: 2, expert: 3 }

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <ul className="grid gap-4 sm:grid-cols-2">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="rounded-2xl border border-accent-500/20 bg-white/60 p-5 shadow-sm backdrop-blur transition hover:border-fuchsia-500/50 hover:shadow-lg hover:shadow-fuchsia-500/10 dark:bg-white/[0.03]"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-semibold">{skill.name}</h3>
              <p className="flex items-center gap-2 font-mono text-xs text-fg-accent">
                {skill.level}
                <span aria-hidden="true" className="flex gap-1">
                  {[1, 2, 3].map((n) => (
                    <span
                      key={n}
                      className={`h-1.5 w-3 rounded-full ${
                        n <= levels[skill.level]
                          ? 'bg-linear-to-r from-violet-500 to-fuchsia-500'
                          : 'bg-accent-500/20'
                      }`}
                    />
                  ))}
                </span>
              </p>
            </div>
            <p className="mt-2 text-sm text-fg-muted">{skill.uses}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
