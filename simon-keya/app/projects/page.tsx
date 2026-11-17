import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import BrowserShot from '@/components/BrowserShot'
import { ArrowLeft, ArrowUpRight } from '@/components/Icons'
import { archive } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'More projects',
  description: 'Portfolio sites, a creator platform and other earlier builds by Simon Keya.',
}

export default function ProjectsArchive() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="page-hero">
          <div className="wrap">
            <Link href="/#work" className="crumbs"><ArrowLeft /> Back to selected work</Link>
            <h1>More projects</h1>
            <p>Portfolio sites, a creator platform and other earlier builds, each with live links and source code.</p>
          </div>
        </section>
        <div className="wrap">
          <ul className="archive-grid">
            {archive.map((a) => (
              <li key={a.name} className="project-card">
                <BrowserShot image={a.image} url={a.liveUrl} sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 400px" />
                <div className="project-body">
                  <span className="project-eyebrow">{a.category}</span>
                  <h3>{a.name}</h3>
                  <p className="project-summary">{a.summary}</p>
                  <ul className="chips" aria-label={`${a.name} technologies`}>{a.stack.map((t) => <li key={t} className="chip">{t}</li>)}</ul>
                  <div className="archive-actions">
                    <a className="btn btn-primary btn-sm" href={a.liveUrl} target="_blank" rel="noopener noreferrer">Visit site <ArrowUpRight /><span className="sr-only"> for {a.name} (opens in a new tab)</span></a>
                    <a className="btn btn-secondary btn-sm" href={a.githubUrl} target="_blank" rel="noopener noreferrer">Source code<span className="sr-only"> for {a.name} (opens in a new tab)</span></a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
