import type { SVGProps } from 'react'

const base = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const

export const ArrowRight = (p: SVGProps<SVGSVGElement>) => <svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
export const ArrowUpRight = (p: SVGProps<SVGSVGElement>) => <svg {...base} {...p}><path d="M7 17 17 7M8 7h9v9" /></svg>
export const ArrowLeft = (p: SVGProps<SVGSVGElement>) => <svg {...base} {...p}><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
export const Sun = (p: SVGProps<SVGSVGElement>) => <svg {...base} {...p}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
export const Moon = (p: SVGProps<SVGSVGElement>) => <svg {...base} {...p}><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" /></svg>
export const Menu = (p: SVGProps<SVGSVGElement>) => <svg {...base} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
export const Close = (p: SVGProps<SVGSVGElement>) => <svg {...base} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>
export const Copy = (p: SVGProps<SVGSVGElement>) => <svg {...base} {...p}><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V6a2 2 0 0 1 2-2h9" /></svg>
export const Download = (p: SVGProps<SVGSVGElement>) => <svg {...base} {...p}><path d="M12 4v12M7 11l5 5 5-5M5 20h14" /></svg>

export const FoundationIcons = {
  database: (p: SVGProps<SVGSVGElement>) => <svg {...base} {...p}><ellipse cx="12" cy="5.5" rx="7" ry="2.8" /><path d="M5 5.5v13c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8v-13M5 12c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8" /></svg>,
  network: (p: SVGProps<SVGSVGElement>) => <svg {...base} {...p}><circle cx="12" cy="5" r="2.2" /><circle cx="5" cy="19" r="2.2" /><circle cx="19" cy="19" r="2.2" /><path d="M11 7l-5 10M13 7l5 10M7.2 19h9.6" /></svg>,
  blocks: (p: SVGProps<SVGSVGElement>) => <svg {...base} {...p}><rect x="3" y="3" width="8" height="8" rx="1.5" /><rect x="13" y="3" width="8" height="8" rx="1.5" /><rect x="8" y="13" width="8" height="8" rx="1.5" /></svg>,
  exchange: (p: SVGProps<SVGSVGElement>) => <svg {...base} {...p}><path d="M4 8h15M15 4l4 4-4 4M20 16H5M9 12l-4 4 4 4" /></svg>,
  cpu: (p: SVGProps<SVGSVGElement>) => <svg {...base} {...p}><rect x="6" y="6" width="12" height="12" rx="2" /><rect x="9.5" y="9.5" width="5" height="5" rx="1" /><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" /></svg>,
  layers: (p: SVGProps<SVGSVGElement>) => <svg {...base} {...p}><path d="m12 3 9 5-9 5-9-5 9-5ZM3 13l9 5 9-5M3 17.5l9 5 9-5" /></svg>,
}
