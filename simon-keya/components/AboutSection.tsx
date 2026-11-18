import Link from 'next/link'
import { ArrowUpRight, FoundationIcons as I } from './Icons'

const path = [
  { year: '01', role: 'Understand the domain', note: 'Map the people, workflows, business rules and data before choosing an implementation.' },
  { year: '02', role: 'Build the foundations', note: 'Shape clear APIs, data models and service boundaries that support the product.' },
  { year: '03', role: 'Validate the behaviour', note: 'Use tests, regression checks and real workflow verification to protect what matters.' },
  { year: '04', role: 'Improve in stages', note: 'Refine performance, reliability and architecture without risking working business processes.' },
]

const foundations = [
  { Icon: I.database, title: 'Database systems', detail: 'Data models, relationships, querying and integrity' },
  { Icon: I.network, title: 'Computer networks', detail: 'Connectivity, protocols and distributed communication' },
  { Icon: I.blocks, title: 'Systems design', detail: 'Architecture, boundaries and dependable components' },
  { Icon: I.exchange, title: 'Data communication', detail: 'How information moves between systems' },
  { Icon: I.cpu, title: 'Operating systems', detail: 'Processes, memory and computing resources' },
  { Icon: I.layers, title: 'Computing fundamentals', detail: 'The principles behind software and information systems' },
]

export default function AboutSection() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-intro">
            <p className="eyebrow">A little about me</p>
            <h2 id="about-title">Curious by nature. <span>Engineer by practice.</span></h2>
            <div className="about-visual" aria-label="Abstract illustration representing connected software systems">
              <div className="about-orbit orbit-one" /><div className="about-orbit orbit-two" />
              <div className="about-node node-core"><span>SK</span><small>ENGINEERING</small></div>
              <div className="about-node node-api"><b>API</b><small>Services</small></div>
              <div className="about-node node-data"><b>DB</b><small>Data</small></div>
              <div className="about-node node-ai"><b>AI</b><small>Applied</small></div>
              <div className="about-visual-caption">SYSTEMS · DATA · PRODUCT</div>
            </div>
          </div>
          <div className="about-copy">
            <p>I’m a software engineer with a background in Information Science and a practical, build-first approach to technology. My work is strongest in backend and API engineering, database-driven applications and full-stack product delivery, with practical experience in Go, TypeScript, Python and modern web tooling.</p>
            <p>I enjoy understanding how a system works as a whole: the people using it, the rules behind it, the data it depends on and the details that make it reliable. I value clear engineering trade-offs, maintainable code and evidence-led change. I prefer to understand a system’s behaviour before changing it, especially when business-critical data and workflows are involved.</p>
            <ol className="path" aria-label="Career path">
              {path.map((s) => (
                <li key={s.year}>
                  <span className="path-index" aria-hidden="true">{s.year}</span>
                  <div><b>{s.role}</b><span>{s.note}</span></div>
                </li>
              ))}
            </ol>
            <Link href="/#contact" className="text-link">More about working together <ArrowUpRight /></Link>
          </div>
        </div>

        <div className="band foundations on-band">
          <div>
            <p className="eyebrow">The thinking beneath the build</p>
            <h3>Strong systems start <span>with strong foundations.</span></h3>
            <p>My Information Science background introduced me to the fundamentals that help me reason about software beyond the interface: how data is structured, how systems communicate and how computing environments work together.</p>
          </div>
          <ul className="foundation-grid">
            {foundations.map(({ Icon, title, detail }) => (
              <li key={title}>
                <Icon />
                <h4>{title}</h4>
                <p>{detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
