'use client'
import { useState } from 'react'
import Image from 'next/image'

type Project = {
  number: string; name: string; category: string; type: string; description: string;
  contribution: string; stack: string[]; slug: string; visual: string; status: string; image?: string; liveUrl?: string
}

const techClass = (name: string) => `tech-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`

const projects: Project[] = [
  {
    number: '01', name: 'RestFlow', category: 'Enterprise operations platform', type: 'FLAGSHIP · BACKEND SYSTEMS',
    description: 'An operations platform connecting inventory, procurement, production, costing and point-of-sale workflows. Built around the realities of running a business where stock, money and operational data must agree.',
    contribution: 'Backend architecture · Business logic · Data modelling · Full-stack engineering',
    stack: ['NestJS', 'Go', 'PostgreSQL', 'Prisma', 'React', 'TypeScript'],
    slug: 'restflow', visual: 'restflow', status: 'Core platform', liveUrl: 'https://mekusolutions.netlify.app/restflow'
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
    slug: 'smans', visual: 'smans', status: 'Product engineering', image: '/smans.png', liveUrl: 'https://smans.vercel.app'
  },
  {
    number: '05', name: 'International Institute of Foreign Languages', category: 'Education & language institute website', type: 'CLIENT PROJECT · WEB',
    description: 'A college website presenting the institute, its hospitality and language-learning programmes, campus experience and prospective-student information.',
    contribution: 'Website implementation · Responsive presentation · Institutional storytelling',
    stack: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
    slug: 'international-institute', visual: 'international', status: 'Institutional website', image: '/International.png', liveUrl: 'https://foreignlanguagesandhospitality.com/'
  },
  {
    number: '06', name: 'The Accommodation Guru', category: 'Property discovery & inquiry experience', type: 'CLIENT PROJECT · WEB',
    description: 'A premium digital experience for a Kenya-based vacation-home agency, designed around property discovery and clear inquiry journeys for guests and property owners.',
    contribution: 'Product experience · Next.js · Form validation · WhatsApp inquiry flow',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React Hook Form', 'Zod'],
    slug: 'the-accommodation-guru', visual: 'accommodation', status: 'Client experience', liveUrl: 'https://accommodationguru.netlify.app'
  },
  {
    number: '07', name: 'Meku Solutions', category: 'Corporate digital experience', type: 'CLIENT PROJECT · WEB',
    description: 'A corporate website experience for a technology company, with a focus on clear product storytelling, responsive layouts and polished presentation of its software work.',
    contribution: 'Frontend engineering · Responsive UI · Product presentation · Enquiry experience',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Motion'],
    slug: 'meku-solutions', visual: 'meku', status: 'Corporate website', liveUrl: 'https://mekusolutions.netlify.app'
  },
  {
    number: '08', name: 'InariKicchin', category: 'Restaurant website & digital menu', type: 'CLIENT PROJECT · WEB',
    description: 'A standalone restaurant website and QR-accessible menu for an Asian fusion dining brand. The public website is intentionally separate from the restaurant operations system.',
    contribution: 'Website experience · Menu presentation · Responsive implementation',
    stack: ['Next.js', 'TypeScript', 'Responsive UI', 'Digital menu'],
    slug: 'inarikicchin', visual: 'inari', status: 'Client website', liveUrl: 'https://inaikicchinweb.vercel.app'
  },
  {
    number: '09', name: 'Kelvisan', category: 'Hospitality management website', type: 'EARLIER WORK · WEB',
    description: 'A hospitality-focused website presenting management services, operational capabilities and company information.',
    contribution: 'Website implementation · Content presentation', stack: ['HTML', 'CSS', 'JavaScript'], slug: 'kelvisan', visual: 'accommodation', status: 'Earlier portfolio work', image: '/Kelvisan.png', liveUrl: 'https://kelvisan-electrical-networks-ltd.vercel.app'
  },
]

export default function ProjectsSection(){
 const [activeFilter,setActiveFilter]=useState('All work')
 const filters=['All work','Flagship','Client work']
 const visibleProjects=projects.filter(p=>activeFilter==='All work'||(activeFilter==='Flagship'?p.type.includes('FLAGSHIP'):p.type.includes('CLIENT PROJECT')||p.type.includes('EARLIER WORK')))
 return <section className="work-section section-wrap" id="work"><div className="section-heading"><div><div className="section-eyebrow">02 / SELECTED WORK</div><h2>Engineering in<br/><span>the real world.</span></h2></div><p>A selection of systems and digital products spanning enterprise operations, applied AI and client-facing experiences.</p></div><div className="work-toolbar"><span>{String(visibleProjects.length).padStart(2,'0')} PROJECTS</span><div className="filter-list" aria-label="Filter projects">{filters.map(filter=><button key={filter} className={activeFilter===filter?'filter-active':''} onClick={()=>setActiveFilter(filter)}>{filter}</button>)}</div></div><div className="project-list">{visibleProjects.map(project=><article className="project-card" key={project.slug}><a href={`/projects/${project.slug}`} className="project-hit" aria-label={`Explore ${project.name} case study`}><div className="project-meta"><span>{project.number} / {project.type}</span><span>{project.status}</span></div><ProjectVisual project={project}/><div className="project-info"><div><div className="project-category">{project.category}</div><h3>{project.name}</h3><p>{project.description}</p><div className="contribution">{project.contribution}</div><div className="tech-list">{project.stack.map(tech=><span key={tech} className={techClass(tech)}>{tech}</span>)}</div></div><span className="project-arrow">↗</span></div></a><div className="project-actions"><a href={`/projects/${project.slug}`} className="project-action-case">View case study <span>↗</span></a>{project.liveUrl&&<a href={project.liveUrl} className="project-action-live" target="_blank" rel="noopener noreferrer">Visit live website <span>↗</span></a>}</div></article>)}</div></section>
}
