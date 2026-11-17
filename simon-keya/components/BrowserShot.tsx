import Image from 'next/image'
import type { ProjectImage } from '@/lib/projects'
import { hostOf } from '@/lib/projects'

export default function BrowserShot({ image, url, sizes, priority = false }: { image: ProjectImage; url?: string; sizes: string; priority?: boolean }) {
  const host = url ? url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '') : ''
  return (
    <div className="browser">
      <div className="browser-bar" aria-hidden="true">
        <i /><i /><i />
        {host && <span>{host || hostOf(url)}</span>}
      </div>
      <div className="browser-view">
        <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes={sizes} priority={priority} style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  )
}
