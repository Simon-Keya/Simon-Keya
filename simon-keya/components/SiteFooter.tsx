import Image from 'next/image'
import Link from 'next/link'
import { contact } from '@/lib/projects'

export default function SiteFooter() {
  return (
    <footer className="site-footer on-band">
      <div className="wrap footer-inner">
        <Link href="/" className="footer-brand">
          <Image src="/logo.png" alt="" width={34} height={34} />
          Simon Keya
        </Link>
        <span>© {new Date().getFullYear()} Simon Keya</span>
        <Link href="/projects">More projects</Link>
        <a href={contact.art} target="_blank" rel="noopener noreferrer">Art portfolio<span className="sr-only"> (opens in a new tab)</span></a>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  )
}
