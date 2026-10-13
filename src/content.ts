// Site content. Replace every TODO with real details before publishing.

export type Project = {
  title: string
  description: string
  url?: string
  tags: string[]
}

export type Link = {
  label: string
  url: string
}

export const profile = {
  name: 'Stefano Frassetto',
  tagline: 'TODO: one-line tagline',
  about: ['TODO: a short paragraph about yourself.'],
}

export const projects: Project[] = [
  {
    title: 'TODO: project name',
    description: 'TODO: what it does and your role.',
    tags: ['TODO'],
  },
]

export const links: Link[] = [
  { label: 'GitHub', url: 'https://github.com/stefanondisponibile' },
]
