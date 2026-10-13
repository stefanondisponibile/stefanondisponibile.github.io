import { projects } from '../content'
import Section from './Section'

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.title}
            className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800"
          >
            <h3 className="font-medium">
              {project.url ? (
                <a href={project.url} className="underline-offset-4 hover:underline">
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h3>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{project.description}</p>
            <ul className="mt-3 flex flex-wrap gap-2" aria-label="Tags">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded bg-zinc-100 px-2 py-0.5 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  )
}
