import { experience } from '../content'
import Section from './Section'

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative space-y-10 border-l border-accent-500/25 pl-6 sm:pl-8">
        {experience.map((job) => (
          <li key={job.company} className="relative">
            <span
              aria-hidden="true"
              className="absolute top-1.5 -left-[calc(1.5rem+5px)] size-2.5 rounded-full bg-linear-to-br from-violet-500 to-fuchsia-500 shadow-[0_0_10px] shadow-fuchsia-500/60 sm:-left-[calc(2rem+5px)]"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold">
                <a href={job.url} target="_blank" rel="noopener noreferrer" className="group hover:text-fg-accent">
                  {job.company}
                  <span aria-hidden="true" className="ml-1 inline-block text-sm text-fg-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg-accent motion-reduce:transform-none">
                    ↗
                  </span>
                </a>
              </h3>
              <p className="font-mono text-xs text-fg-subtle">{job.period}</p>
            </div>
            <div className="mt-4 space-y-5">
              {job.roles.map((role) => (
                <div
                  key={role.title}
                  className="reveal rounded-2xl border border-accent-500/20 bg-white/60 p-5 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-accent-500/40 hover:shadow-md hover:shadow-accent-500/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:bg-white/[0.03]"
                >
                  <h4 className="font-medium text-fg-accent">{role.title}</h4>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-fg-muted">
                    {role.highlights.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-accent-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
