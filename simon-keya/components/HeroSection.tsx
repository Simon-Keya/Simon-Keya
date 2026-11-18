import Link from 'next/link'
import BrowserShot from './BrowserShot'
import { ArrowRight, Download } from './Icons'
import { contact, getProject, projects } from '@/lib/projects'

export default function HeroSection() {
  const flagship = getProject('restflow')!
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div>
          <p className="status-pill reveal" style={{ '--i': 0 } as React.CSSProperties}>
            <span className="status-dot" aria-hidden="true" />
            Open to engineering roles and collaborations · {contact.location}
          </p>
          <h1 id="hero-title" className="reveal" style={{ '--i': 1 } as React.CSSProperties}>
            I build software that <em>moves work forward.</em>
          </h1>
          <p className="hero-lead reveal" style={{ '--i': 2 } as React.CSSProperties}>
            I’m Simon Keya, a backend-focused software engineer building APIs, data-driven platforms and full-stack products. My work spans Go, TypeScript and Python, with a focus on business logic, reliable data flows and practical system design.
          </p>
          <div className="hero-actions reveal" style={{ '--i': 3 } as React.CSSProperties}>
            <Link className="btn btn-primary" href="/#work">Explore selected work <ArrowRight /></Link>
            <a className="btn btn-secondary" href={contact.resume} target="_blank" rel="noopener noreferrer">Résumé <Download /><span className="sr-only"> (PDF, opens in a new tab)</span></a>
          </div>
          <dl className="proof reveal" style={{ '--i': 4 } as React.CSSProperties}>
            <div><dd>{projects.length} projects</dd><dt>in selected work</dt></div>
            <div><dd>Go · Python · TS</dd><dt>core languages</dt></div>
            <div><dd>APIs · Data · Systems</dd><dt>engineering focus</dt></div>
          </dl>
        </div>

        <div className="hero-visual reveal" style={{ '--i': 2 } as React.CSSProperties}>
          <BrowserShot image={flagship.image!} url={flagship.liveUrl} sizes="(max-width: 980px) 100vw, 640px" priority />
          <div className="hero-chip">
            <p className="label"><span className="status-dot" aria-hidden="true" /> Currently building</p>
            <b>RestFlow</b>
            <span>Operations platform · NestJS, Go, PostgreSQL</span>
          </div>
        </div>
      </div>
    </section>
  )
}
