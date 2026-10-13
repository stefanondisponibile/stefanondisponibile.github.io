import type { ReactNode } from 'react'

type Props = {
  id: string
  title: string
  children: ReactNode
}

export default function Section({ id, title, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-20 py-12">
      <h2 id={`${id}-title`} className="mb-6 text-2xl font-semibold tracking-tight">
        {title}
      </h2>
      {children}
    </section>
  )
}
