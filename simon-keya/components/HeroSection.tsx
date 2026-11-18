import Link from 'next/link'
import { ArrowRight, Download } from './Icons'
import { contact } from '@/lib/projects'

const focus = [
  { mark: '⌘', label: 'Backend & APIs' },
  { mark: '✳', label: 'Applied AI' },
  { mark: '▦', label: 'Full-stack products' },
]

export default function HeroSection() {
  return (
    <section className="hero hero-editorial" id="home" aria-labelledby="hero-title">
      <div className="hero-grid-pattern" aria-hidden="true" />
      <div className="wrap hero-content">
        <p className="status-pill"><span className="status-dot" aria-hidden="true" /> Available for meaningful projects and engineering opportunities</p>
        <p className="hero-kicker">SIMON KEYA <span>·</span> SOFTWARE ENGINEER</p>
        <h1 id="hero-title">Building <em>scalable</em><br />digital products<span className="hero-period">.</span></h1>
        <p className="hero-lead">
          I build scalable digital products and intelligent software systems, combining strong software engineering foundations with AI integration, LLM-powered applications and intelligent automation.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-primary" href="/#work">View selected work <ArrowRight /></Link>
          <Link className="btn btn-secondary" href="/#contact">Contact me</Link>
          <a className="hero-resume" href={contact.resume} target="_blank" rel="noopener noreferrer">Résumé <Download /><span className="sr-only"> (PDF, opens in a new tab)</span></a>
        </div>
        <ul className="hero-focus" aria-label="Engineering focus">
          {focus.map((item) => <li key={item.label}><span aria-hidden="true">{item.mark}</span>{item.label}</li>)}
        </ul>
        <div className="hero-bottomline"><span>BACKEND SYSTEMS</span><span>PRODUCT ENGINEERING</span><span>APPLIED AI</span><span>NAIROBI, KENYA · EAT</span></div>
      </div>
    </section>
  )
}
