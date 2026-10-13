import { useEffect, useState } from 'react'

// Returns the id of the section crossing the middle of the viewport, if any.
export default function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
          else setActive((current) => (current === entry.target.id ? undefined : current))
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [ids])

  return active
}
