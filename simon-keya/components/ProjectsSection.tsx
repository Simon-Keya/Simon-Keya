'use client'
import { useState } from 'react'
import Link from 'next/link'
import BrowserShot from './BrowserShot'
import ProjectIllustration from './ProjectIllustration'
import { ArrowRight, ArrowUpRight } from './Icons'
import { projects, type Project } from '@/lib/projects'

const filters = [
  { id: 'all', label: 'All work' },
  { id: 'product', label: 'Products' },
  { id: 'client', label: 'Client work' },
] as const

function Card({ p, wide }: { p: Project; wide: boolean }) {
  return (
    <article className={`project-card${wide ? ' project-card--feature' : ''}`}>
      <div className="project-media">
        {p.image ? (
          <BrowserShot image={p.image} url={p.liveUrl} sizes={wide ? '(max-width: 980px) 100vw, 700px' : '(max-width: 760px) 100vw, 600px'} />
        ) : (
          p.illustration && <ProjectIllustration kind={p.illustration} />
        )}
      </div>
      <div className="project-body">
        <div className="project-top">
          <span className="project-eyebrow">{p.eyebrow}</span>
          <span className={`chip ${p.status.toLowerCase().includes('progress') ? 'chip-warm' : 'chip-accent'}`}>{p.status}</span>
        </div>
        <h3><Link href={`/projects/${p.slug}`}>{p.name}</Link></h3>
        <p className="project-summary">{p.summary}</p>
        <p className="project-role"><b>My role: </b>{p.contribution.join(', ')}</p>
        <ul className="chips" aria-label={`${p.name} technologies`}>
          {p.stack.map((t) => <li key={t} className="chip">{t}</li>)}
        </ul>
        <div className="project-actions">
          <span className="project-cta">Read case study <ArrowRight /></span>
          {p.liveUrl && (
            <a className="btn btn-secondary btn-sm project-live" href={p.liveUrl} target="_blank" rel="noopener noreferrer">
              Visit site <ArrowUpRight /><span className="sr-only"> for {p.name} (opens in a new tab)</span>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function ProjectsSection() {
  const [active, setActive] = useState<(typeof filters)[number]['id']>('all')
  const visible = projects.filter((p) => active === 'all' || p.kind === active)
  const count = (id: string) => (id === 'all' ? projects.length : projects.filter((p) => p.kind === id).length)

  return (
    <section className="section work" id="work" aria-labelledby="work-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 id="work-title">Engineering in the real world.</h2>
          </div>
          <p>Systems and digital products spanning enterprise operations, applied AI and client-facing experiences.</p>
        </div>

        <div className="work-toolbar">
          <span className="work-count" aria-live="polite">Showing {visible.length} of {projects.length} projects</span>
          <div className="filters" role="group" aria-label="Filter projects">
            {filters.map((f) => (
              <button key={f.id} type="button" className="filter" aria-pressed={active === f.id} onClick={() => setActive(f.id)}>
                {f.label}<small>{count(f.id)}</small>
              </button>
            ))}
          </div>
        </div>

        <div className="project-grid">
          {visible.map((p) => <Card key={p.slug} p={p} wide={false} />)}
        </div>

        <div className="more-work">
          <span><b>Looking for more?</b> Portfolio sites, a creator platform and other earlier builds live in the archive.</span>
          <Link className="text-link" href="/projects">Browse more projects <ArrowRight /></Link>
        </div>
      </div>
    </section>
  )
}
