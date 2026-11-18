import Link from 'next/link'
import { ArrowUpRight } from './Icons'

export default function IntroBand() {
  return (
    <section className="band intro on-band" aria-label="Approach">
      <div className="wrap intro-inner">
        <p>
          I bring together <strong>backend engineering</strong>, <strong>product development</strong> and <strong>applied AI</strong> to build software that solves real operational and user problems.
        </p>
        <Link href="/#about" className="round-link" aria-label="Read more about Simon"><ArrowUpRight /></Link>
      </div>
    </section>
  )
}
