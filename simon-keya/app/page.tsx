'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Project = {
  number: string; name: string; category: string; type: string; description: string;
  contribution: string; stack: string[]; slug: string; visual: string; status: string; image?: string
}

const projects: Project[] = [
  {
    number: '01', name: 'RestFlow', category: 'Enterprise operations platform', type: 'FLAGSHIP · BACKEND SYSTEMS',
    description: 'An operations platform connecting inventory, procurement, production, costing and point-of-sale workflows. Built around the realities of running a business where stock, money and operational data must agree.',
    contribution: 'Backend architecture · Business logic · Data modelling · Full-stack engineering',
    stack: ['NestJS', 'Go', 'PostgreSQL', 'Prisma', 'React', 'TypeScript'],
    slug: 'restflow', visual: 'restflow', status: 'Core platform'
  },
  {
    number: '02', name: 'RestFlow AI', category: 'Applied AI operations assistant', type: 'FLAGSHIP · APPLIED AI',
    description: 'A read-oriented AI assistant that connects language-model tool calling to authenticated operational services, allowing users to ask questions about business data without bypassing application permissions.',
    contribution: 'FastAPI orchestration · LLM integration · Tool calling · Authenticated retrieval',
    stack: ['Python', 'FastAPI', 'Gemini API', 'Tool calling', 'REST APIs'],
    slug: 'restflow-ai', visual: 'ai', status: 'Applied AI'
  },
  {
    number: '03', name: 'RestFlow Go', category: 'Go backend architecture & migration', type: 'FLAGSHIP · SYSTEMS ENGINEERING',
    description: 'A Go service developed alongside the existing operations backend. The engineering focus is service boundaries, event processing, transaction semantics and a safe, evidence-led migration path.',
    contribution: 'Go services · API design · Event processing · Migration analysis',
    stack: ['Go', 'PostgreSQL', 'pgx', 'Docker', 'REST APIs'],
    slug: 'restflow-go', visual: 'go', status: 'Migration in progress'
  },
  {
    number: '04', name: 'SMANS', category: 'School management platform', type: 'FULL-STACK PRODUCT',
    description: 'A school management application bringing academic, administrative and financial workflows into role-aware interfaces for school administrators, teachers, students and parents.',
    contribution: 'Full-stack development · API workflows · Access control · Integrations',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'M-Pesa'],
    slug: 'smans', visual: 'smans', status: 'Product engineering', image: '/smans.png'
  },
  {
    number: '05', name: 'The Accommodation Guru', category: 'Property discovery & inquiry experience', type: 'CLIENT PROJECT · WEB',
    description: 'A premium digital experience for a Kenya-based vacation-home agency, designed around property discovery and clear inquiry journeys for guests and property owners.',
    contribution: 'Product experience · Next.js · Form validation · WhatsApp inquiry flow',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React Hook Form', 'Zod'],
    slug: 'the-accommodation-guru', visual: 'accommodation', status: 'Client experience'
  },
  {
    number: '06', name: 'Meku Solutions', category: 'Corporate digital experience', type: 'CLIENT PROJECT · WEB',
    description: 'A corporate website experience for a technology company, with a focus on clear product storytelling, responsive layouts and polished presentation of its software work.',
    contribution: 'Frontend engineering · Responsive UI · Product presentation · Enquiry experience',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Motion'],
    slug: 'meku-solutions', visual: 'meku', status: 'Corporate website'
  },
  {
    number: '07', name: 'InariKicchin', category: 'Restaurant website & digital menu', type: 'CLIENT PROJECT · WEB',
    description: 'A standalone restaurant website and QR-accessible menu for an Asian fusion dining brand. The public website is intentionally separate from the restaurant operations system.',
    contribution: 'Website experience · Menu presentation · Responsive implementation',
    stack: ['Next.js', 'TypeScript', 'Responsive UI', 'Digital menu'],
    slug: 'inarikicchin', visual: 'inari', status: 'Client website'
  },
]

const capabilities = [
  { title: 'Backend engineering', detail: 'APIs, business logic, service architecture and reliable application workflows.', skills: 'Go · TypeScript · Node.js · NestJS · Python · FastAPI · Django' },
  { title: 'Full-stack development', detail: 'End-to-end product implementation, from user journeys to persistence and integrations.', skills: 'React · Next.js · TypeScript · REST APIs · Tailwind CSS' },
  { title: 'Data & systems', detail: 'Relational data modelling, transactional workflows and application-level data integrity.', skills: 'PostgreSQL · SQL · Prisma · TypeORM · Redis' },
  { title: 'Applied AI', detail: 'Integrating language models with real application services through controlled tools and permissions.', skills: 'Gemini API · OpenAI API integration · Tool calling · FastAPI' },
  { title: 'Mobile & delivery', detail: 'Cross-platform application work and practical deployment workflows.', skills: 'React Native · Expo · Docker · Linux · Vercel · Render' },
]

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow-mark">{diagonal ? '↗' : '→'}</span>
}

function ProjectVisual({ project }: { project: typeof projects[number] }) {
  if (project.image) return <div className="project-image-wrap"><Image src={project.image} alt={`${project.name} project preview`} className="project-image" width={1200} height={800} sizes="(max-width: 640px) 100vw, 50vw" /></div>
  return (
    <div className={`project-visual visual-${project.visual}`} aria-hidden="true">
      {project.visual === 'restflow' && <><div className="visual-topline"><span>RESTFLOW / OPERATIONS</span><span>01 — SYSTEM OVERVIEW</span></div><div className="visual-grid"><div className="visual-sidebar"><i/><i/><i/><i/></div><div className="visual-main"><div className="visual-stat-row"><b>Inventory</b><b>Production</b><b>Costing</b></div><div className="visual-chart"><span/><span/><span/><span/><span/><span/><span/><span/></div><div className="visual-lines"><i/><i/><i/></div></div></div></>}
      {project.visual === 'ai' && <><div className="ai-orbit orbit-one"/><div className="ai-orbit orbit-two"/><div className="ai-core">AI</div><div className="ai-caption">OPERATIONAL INTELLIGENCE <span>TOOLS · CONTEXT · CONTROL</span></div></>}
      {project.visual === 'go' && <><div className="code-window"><div className="code-dots"><i/><i/><i/><span>service.go</span></div><p><em>func</em> ProcessEvent(ctx context.Context) {'{'}</p><p className="code-indent">tx, err := db.Begin(ctx)</p><p className="code-indent">defer tx.Rollback(ctx)</p><p className="code-indent"><em>return</em> applyProjection(tx, event)</p><p>{'}'}</p><small>TRANSACTIONS · EVENTS · CONCURRENCY</small></div></>}
      {project.visual === 'accommodation' && <><div className="stay-photo"><span>THE ACCOMMODATION GURU</span><b>Find your<br/>place to unwind.</b></div><div className="stay-note">PROPERTY DISCOVERY <span>KENYA · STAYS · EXPERIENCES</span></div></>}
      {project.visual === 'meku' && <><div className="meku-mark">meku<span>.</span></div><div className="meku-copy">Technology<br/>with purpose.</div><div className="meku-strip">DIGITAL PRODUCTS / SOFTWARE / SYSTEMS</div></>}
      {project.visual === 'inari' && <><div className="inari-label">INARI<span>KICCHIN</span></div><div className="inari-copy">Where every bite<br/>tells a story.</div><div className="inari-sub">ASIAN FUSION · DIGITAL MENU</div></>}
    </div>
  )
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All work')
  const filters = ['All work', 'Flagship', 'Client work']
  const visibleProjects = projects.filter((p) => activeFilter === 'All work' || (activeFilter === 'Flagship' ? p.type.includes('FLAGSHIP') : p.type.includes('CLIENT PROJECT')))

  return (
    <main>
      <header className="site-header">
        <a href="#home" className="wordmark" aria-label="Simon Keya home">SK<span>.</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? 'Close' : 'Menu'} <span>{menuOpen ? '−' : '+'}</span></button>
        <nav className={menuOpen ? 'main-nav nav-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#work" onClick={() => setMenuOpen(false)}>Selected work</a>
          <a href="#capabilities" onClick={() => setMenuOpen(false)}>Capabilities</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" className="nav-contact" onClick={() => setMenuOpen(false)}>Let&apos;s talk <Arrow diagonal/></a>
        </nav>
      </header>

      <section className="hero-section" id="home">
        <div className="hero-kicker"><span className="availability-dot"/> SOFTWARE ENGINEER <span className="kicker-divider">/</span> NAIROBI, KENYA</div>
        <div className="hero-grid">
          <div className="hero-copy">
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>I build software<br/>that <span>moves work</span><br/>forward.</motion.h1>
            <motion.div className="hero-bottom" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .18, duration: .6 }}>
              <p>I'm Simon Keya — a software engineer working across backend systems, full-stack products and applied AI. I turn complex problems into useful, dependable software.</p>
              <div className="hero-actions"><a className="button-primary" href="#work">Explore selected work <Arrow/></a><a className="text-link" href="/files/Simon-Keya-Resume.pdf" target="_blank" rel="noreferrer">View résumé <Arrow diagonal/></a></div>
            </motion.div>
          </div>
          <div className="hero-aside"><div className="hero-index">01 <span>— 04</span></div><div className="hero-graphic"><div className="graphic-ring ring-a"/><div className="graphic-ring ring-b"/><div className="graphic-core">SK<span>.</span></div><div className="graphic-label label-top">ENGINEERING</div><div className="graphic-label label-bottom">IDEAS INTO SYSTEMS</div></div><p className="aside-note">Thoughtful engineering.<br/>Practical outcomes.</p></div>
        </div>
        <div className="hero-foot"><span>SCROLL TO EXPLORE</span><span className="scroll-line"/><span>01 / 04</span></div>
      </section>

      <section className="intro-band"><div className="section-eyebrow">A PRACTICAL APPROACH</div><p>I work at the intersection of <strong>systems thinking</strong>, <strong>product development</strong> and <strong>applied technology</strong> — building software that solves real operational and user problems.</p><a href="#about" className="round-link" aria-label="Read about Simon"><Arrow diagonal/></a></section>

      <section className="work-section section-wrap" id="work">
        <div className="section-heading"><div><div className="section-eyebrow">02 / SELECTED WORK</div><h2>Engineering in<br/><span>the real world.</span></h2></div><p>A selection of systems and digital products spanning enterprise operations, applied AI and client-facing experiences.</p></div>
        <div className="work-toolbar"><span>{String(visibleProjects.length).padStart(2, '0')} PROJECTS</span><div className="filter-list" aria-label="Filter projects">{filters.map((filter) => <button key={filter} className={activeFilter === filter ? 'filter-active' : ''} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div></div>
        <div className="project-list">{visibleProjects.map((project) => <article className="project-card" key={project.slug}><a href={`/projects/${project.slug}`} className="project-hit" aria-label={`Explore ${project.name} case study`}><div className="project-meta"><span>{project.number} / {project.type}</span><span>{project.status}</span></div><ProjectVisual project={project}/><div className="project-info"><div><div className="project-category">{project.category}</div><h3>{project.name}</h3><p>{project.description}</p><div className="contribution">{project.contribution}</div><div className="tech-list">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div></div><span className="project-arrow"><Arrow diagonal/></span></div></a></article>)}</div>
      </section>

      <section className="capabilities-section" id="capabilities"><div className="section-wrap"><div className="section-heading capabilities-heading"><div><div className="section-eyebrow">03 / CAPABILITIES</div><h2>Built across<br/><span>the stack.</span></h2></div><p>I bring together the parts of software engineering needed to take a product from an idea to a working system.</p></div><div className="capability-list">{capabilities.map((item, index) => <div className="capability-row" key={item.title}><span className="capability-number">0{index + 1}</span><div className="capability-main"><h3>{item.title}</h3><p>{item.detail}</p></div><div className="capability-skills">{item.skills}</div><span className="capability-plus">↗</span></div>)}</div></div></section>

      <section className="about-section section-wrap" id="about"><div className="section-eyebrow">04 / A LITTLE ABOUT ME</div><div className="about-grid"><h2>Curious by nature.<br/><span>Engineer by practice.</span></h2><div className="about-copy"><p>I’m a software engineer with a background in Information Science and a practical, build-first approach to technology. My work has taken me from Python and data-focused foundations into backend engineering, full-stack applications and applied AI.</p><p>I enjoy understanding how a system works as a whole — the people using it, the rules behind it, the data it depends on and the details that make it reliable.</p><div className="timeline"><div><span>2018 — 2022</span><b>BSc Information Science</b></div><div><span>2023 — PRESENT</span><b>Software development & product engineering</b></div></div><a href="mailto:simonkeya@gmail.com" className="text-link">More about working together <Arrow diagonal/></a></div></div></section>

      <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><div className="section-eyebrow">05 / START A CONVERSATION</div><h2>Have a problem<br/>worth <span>solving?</span></h2><div className="contact-bottom"><p>I'm open to thoughtful collaborations, engineering opportunities and projects with meaningful problems to work on.</p><a className="contact-email" href="mailto:simonkeya@gmail.com">simonkeya@gmail.com <Arrow diagonal/></a></div><div className="contact-links"><a href="https://www.linkedin.com/in/simon-keya-9ab441237/" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal/></a><a href="https://github.com/Simon-Keya" target="_blank" rel="noreferrer">GitHub <Arrow diagonal/></a><a href="https://wa.me/254768378046" target="_blank" rel="noreferrer">WhatsApp <Arrow diagonal/></a><a href="https://x.com/SymonC137" target="_blank" rel="noreferrer">X <Arrow diagonal/></a><span>NAIROBI, KENYA · EAT (UTC+3)</span></div></div></section>

      <footer className="site-footer"><a href="#home" className="wordmark">SK<span>.</span></a><span>© {new Date().getFullYear()} SIMON KEYA</span><span>DESIGNED WITH INTENT. BUILT WITH CODE.</span><a href="#home">BACK TO TOP ↑</a></footer>
    </main>
  )
}
