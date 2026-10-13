import { useEffect, useState } from 'react'

const scrollKeys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' ']

// Returns the id of the last section whose top has scrolled past a line near
// the top of the viewport, if any. At the bottom of the page the last section
// wins, since a short final section may never reach the line. After a click on
// one of the sections' anchors, that section stays active until the user
// scrolls on their own, since a short section may never reach the line either.
export default function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>()

  useEffect(() => {
    let clicked: string | undefined

    const update = () => {
      if (clicked) return setActive(clicked)
      const { scrollHeight } = document.documentElement
      if (scrollY > 0 && innerHeight + scrollY >= scrollHeight - 2) return setActive(ids.at(-1))
      const line = Math.max(innerHeight * 0.3, 120)
      let current: string | undefined
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      setActive(current)
    }

    const click = (event: MouseEvent) => {
      const link = (event.target as Element).closest?.('a[href^="#"]')
      const id = link?.getAttribute('href')?.slice(1)
      clicked = id && ids.includes(id) ? id : undefined
      update()
    }

    const release = (event: Event) => {
      if (!clicked || (event instanceof KeyboardEvent && !scrollKeys.includes(event.key))) return
      clicked = undefined
      update()
    }

    update()
    addEventListener('scroll', update, { passive: true })
    addEventListener('resize', update)
    addEventListener('click', click)
    for (const type of ['wheel', 'touchstart', 'keydown'] as const) addEventListener(type, release, { passive: true })
    return () => {
      removeEventListener('scroll', update)
      removeEventListener('resize', update)
      removeEventListener('click', click)
      for (const type of ['wheel', 'touchstart', 'keydown'] as const) removeEventListener(type, release)
    }
  }, [ids])

  return active
}
