import type { ReactNode } from 'react'

type Props = {
  id: string
  title: string
  children: ReactNode
}

export default function Section({ id, title, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24 py-14">
      <h2
        id={`${id}-title`}
        className="reveal mb-8 flex items-center gap-4 font-mono text-sm font-semibold tracking-widest text-fg-accent uppercase"
      >
        {title}
        <span aria-hidden="true" className="reveal-line h-px flex-1 bg-linear-to-r from-accent-500/50 to-transparent" />
      </h2>
      {children}
    </section>
  )
}
