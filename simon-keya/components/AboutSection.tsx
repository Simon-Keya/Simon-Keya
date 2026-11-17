import Link from 'next/link'
import { ArrowUpRight, FoundationIcons as I } from './Icons'

const path = [
  { year: '2025', role: 'Full-stack development', note: 'Responsive web apps, API integration and database performance for client projects.' },
  { year: '2024', role: 'Backend development', note: 'Server-side applications in TypeScript, Node.js and Python with PostgreSQL.' },
  { year: '2023', role: 'Front-end development', note: 'Interactive interfaces, design systems, performance and accessibility.' },
  { year: '2022', role: 'Where it started', note: 'First web applications with HTML, CSS and JavaScript, and open-source contributions.' },
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
          <div>
            <p className="eyebrow">A little about me</p>
            <h2 id="about-title">Curious by nature. <span>Engineer by practice.</span></h2>
          </div>
          <div className="about-copy">
            <p>I’m a software engineer with a background in Information Science and a practical, build-first approach to technology. My path began with Python and data-focused foundations before expanding into backend engineering, full-stack applications, cloud tooling and applied AI.</p>
            <p>I enjoy understanding how a system works as a whole: the people using it, the rules behind it, the data it depends on and the details that make it reliable. I value learning broadly, then applying the right tools to the problem rather than forcing every project into the same stack.</p>
            <ol className="path" aria-label="Career path">
              {path.map((s) => (
                <li key={s.year}>
                  <time dateTime={s.year}>{s.year}</time>
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
