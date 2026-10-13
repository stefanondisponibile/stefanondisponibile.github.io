import { useEffect, useState } from 'react'

// Returns the id of the section crossing the middle of the viewport, if any.
// At the bottom of the page the last section wins, since a short final
// section may never reach the middle.
export default function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>()
  const [atBottom, setAtBottom] = useState(false)

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

  useEffect(() => {
    const update = () => {
      const { scrollHeight } = document.documentElement
      setAtBottom(scrollY > 0 && innerHeight + scrollY >= scrollHeight - 2)
    }
    update()
    addEventListener('scroll', update, { passive: true })
    addEventListener('resize', update)
    return () => {
      removeEventListener('scroll', update)
      removeEventListener('resize', update)
    }
  }, [])

  return atBottom ? ids.at(-1) : active
}
