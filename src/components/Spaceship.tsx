// Pixel map, nose pointing right. w: wing, h: hull, c: cockpit, f: flame, g: flickering flame tip.
const sprite = [
  '....ww.......',
  '....whh......',
  '...hhhhh.....',
  '.gfhhhhhhcc..',
  'gffhhhhhhhcch',
  '.gfhhhhhhcc..',
  '...hhhhh.....',
  '....whh......',
  '....ww.......',
]

function path(key: string) {
  return sprite
    .flatMap((row, y) => [...row].map((cell, x) => (cell === key ? `M${x} ${y}h1v1h-1z` : '')))
    .join('')
}

const parts = {
  w: path('w'),
  h: path('h'),
  c: path('c'),
  f: path('f'),
  g: path('g'),
}

type Props = { size?: number; className?: string }

export default function Spaceship({ size = 26, className = '' }: Props) {
  const width = sprite[0].length
  const height = sprite.length
  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${width} ${height}`}
      width={size}
      height={(size * height) / width}
      shapeRendering="crispEdges"
      className={`overflow-visible ${className}`}
    >
      <g className="flame">
        <path d={parts.f} className="fill-amber-400" />
        <path d={parts.g} className="flicker fill-orange-500" />
      </g>
      <path d={parts.w} className="fill-fuchsia-500" />
      <path d={parts.h} className="fill-violet-500 dark:fill-violet-400" />
      <path d={parts.c} className="fill-cyan-300" />
    </svg>
  )
}
