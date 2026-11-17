import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import BrowserShot from '@/components/BrowserShot'
import ProjectIllustration from '@/components/ProjectIllustration'
import { ArrowLeft, ArrowUpRight } from '@/components/Icons'
import { contact, getAdjacent, getProject, projects } from '@/lib/projects'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const p = getProject(slug)
  if (!p) return { title: 'Project not found' }
  return {
    title: p.name,
    description: p.case.intro,
    openGraph: { title: `${p.name} | Simon Keya`, description: p.case.intro, images: p.image ? [{ url: p.image.src, width: p.image.width, height: p.image.height }] : undefined },
  }
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = getProject(slug)
  if (!p) notFound()
  const { prev, next } = getAdjacent(slug)
  const c = p.case

  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="case-hero">
          <div className="wrap">
            <Link href="/#work" className="crumbs"><ArrowLeft /> Back to selected work</Link>
            <p className="eyebrow">{p.category}</p>
            <h1>{p.name}</h1>
            <p className="lead">{c.intro}</p>

            <dl className="meta">
              <div className="meta-wide"><dt>My role</dt><dd>{c.role}</dd></div>
              <div><dt>Status</dt><dd>{p.status}</dd></div>
              <div>
                <dt>Live site</dt>
                <dd>
                  {p.liveUrl ? (
                    <a className="text-link" href={p.liveUrl} target="_blank" rel="noopener noreferrer">Visit site <ArrowUpRight /><span className="sr-only"> (opens in a new tab)</span></a>
                  ) : (
                    'Not public'
                  )}
                </dd>
              </div>
              <div className="meta-wide" style={{ gridColumn: '1 / -1' }}>
                <dt>Stack</dt>
                <dd><ul className="chips" aria-label="Technologies">{p.stack.map((t) => <li className="chip" key={t}>{t}</li>)}</ul></dd>
              </div>
            </dl>

            <div className="case-cover">
              {p.image ? (
                <BrowserShot image={p.image} url={p.liveUrl} sizes="(max-width: 1300px) 100vw, 1240px" priority />
              ) : (
                p.illustration && <ProjectIllustration kind={p.illustration} />
              )}
            </div>
          </div>
        </section>

        <div className="wrap case-body">
          <section className="case-section" aria-labelledby="ctx">
            <h2 id="ctx">Context</h2>
            <div><p className="stack-title" style={{ color: 'var(--ink)', fontFamily: 'var(--font-display)' }}>The problem space</p><p>{c.context}</p></div>
          </section>
          <section className="case-section" aria-labelledby="arch">
            <h2 id="arch">Architecture</h2>
            <div><p className="stack-title" style={{ color: 'var(--ink)', fontFamily: 'var(--font-display)' }}>How it is put together</p><ul>{c.architecture.map((i) => <li key={i}>{i}</li>)}</ul></div>
          </section>
          <section className="case-section" aria-labelledby="eng">
            <h2 id="eng">Engineering</h2>
            <div><p className="stack-title" style={{ color: 'var(--ink)', fontFamily: 'var(--font-display)' }}>What the work involves</p><ul>{c.engineering.map((i) => <li key={i}>{i}</li>)}</ul></div>
          </section>
          <section className="case-section" aria-labelledby="status">
            <h2 id="status">Status and open items</h2>
            <div>
              <div className="callout"><p>{c.status}</p></div>
              <ul>{c.openItems.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          </section>

          <nav className="pager" aria-label="More projects">
            <Link href={`/projects/${prev.slug}`}><small>Previous project</small><b>{prev.name}</b></Link>
            <Link href={`/projects/${next.slug}`}><small>Next project</small><b>{next.name}</b></Link>
          </nav>
        </div>

        <section className="band case-cta on-band" aria-label="Contact">
          <div className="wrap">
            <h2>Let’s build something useful.</h2>
            <a className="btn btn-primary" href={`mailto:${contact.email}`}>Get in touch <ArrowUpRight /></a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
