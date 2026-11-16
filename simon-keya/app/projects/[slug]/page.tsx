import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const caseStudies: Record<string, { number: string; name: string; category: string; summary: string; role: string; context: string; architecture: string[]; engineering: string[]; status: string; considerations: string[] }> = {
  restflow: {
    number: '01', name: 'RestFlow', category: 'Enterprise operations platform',
    summary: 'A connected operations platform for businesses where inventory, procurement, production, costing and sales workflows depend on consistent operational data.',
    role: 'Backend and full-stack engineering across operational workflows, data models, API behaviour and system integration.',
    context: 'RestFlow addresses the complexity behind day-to-day business operations. Stock movements affect valuation, production consumes ingredients, recipes influence finished-goods costs, and sales must remain consistent with inventory and reporting. The engineering challenge is to make those workflows work together without losing business meaning.',
    architecture: ['NestJS and TypeScript API', 'React and TypeScript application', 'PostgreSQL with Prisma data access', 'Shop-scoped authentication and operational modules', 'Event storage and projection-based workflows', 'Go backend implementation being developed as a staged migration direction'],
    engineering: ['Inventory, receiving and procurement workflows', 'Recipes, production and consumption', 'Weighted-average costing and stock valuation', 'POS, payments and operational reporting', 'Authentication, shop scoping and request controls', 'Tests covering costing, recipe calculations, event storage and other domain behaviour'],
    status: 'Substantial implementation inspected. The Go migration and proposed full tenant hierarchy are not represented as completed.',
    considerations: ['Financial and inventory semantics must be preserved during changes.', 'The Go service requires further concurrency and behavioural parity work before any production cutover claim.', 'Production readiness and every workflow have not been independently certified.']
  },
  'restflow-ai': {
    number: '02', name: 'RestFlow AI', category: 'Applied AI operations assistant',
    summary: 'A read-oriented AI assistant that allows users to ask natural-language questions about operational information through controlled tools connected to existing application services.',
    role: 'AI service and application integration engineering, including FastAPI orchestration, authenticated retrieval and tool execution boundaries.',
    context: 'The challenge is not just adding a chat interface. An assistant working with business data must respect the identity and permissions of the person asking, use the existing system as the source of truth, and constrain what the model can retrieve or do.',
    architecture: ['Python and FastAPI orchestration service', 'Gemini API integration in the inspected implementation', 'Session validation against the existing application', 'Bearer-token forwarding to authenticated application endpoints', 'Role-aware, read-oriented operational tools', 'Bounded tool output and execution controls'],
    engineering: ['Operational retrieval for inventory, costing, recipes and other domains', 'Tool/function calling between model and backend services', 'Application-level authentication and permission boundaries', 'No direct database access in the inspected service', 'No operational write tools in the inspected implementation'],
    status: 'Applied AI implementation inspected. Older documentation and tests contain OpenAI references that should be reconciled with the current Gemini implementation.',
    considerations: ['Do not describe this version as a RAG or vector-search system.', 'Conversation persistence and autonomous write operations are not established by the inspected implementation.', 'Historical test reports are not a substitute for a current live-provider verification.']
  },
  'restflow-go': {
    number: '03', name: 'RestFlow Go', category: 'Go backend architecture & migration',
    summary: 'A Go backend developed alongside the existing operations API, exploring service boundaries, event processing, transactional behaviour and a safe path toward backend migration.',
    role: 'Go backend implementation and architecture investigation within the wider RestFlow ecosystem.',
    context: 'Replacing a mature backend is not a framework swap. Existing business rules, data contracts, event semantics and concurrency guarantees must be understood and preserved. This work treats migration as a staged engineering process rather than a wholesale replacement.',
    architecture: ['Go API and worker entry points', 'PostgreSQL access through pgx', 'Operational modules for inventory, POS, costing, receiving and production', 'Event storage and projection updates', 'Background workers and observability', 'Idempotency and shop-scoped coordination mechanisms'],
    engineering: ['Go service and API structure', 'Transactional event and projection processing', 'Backend parity analysis against existing NestJS behaviour', 'Concurrency and stock-integrity investigation', 'Migration risk assessment and service-boundary design'],
    status: 'Substantial Go implementation inspected; migration and production parity remain in progress.',
    considerations: ['A stock availability concurrency risk was identified in the inspected POS flow.', 'Event/projection transaction semantics differ between the NestJS and Go implementations and require reconciliation.', 'Do not claim completed production cutover or full behavioural parity.']
  },
  smans: {
    number: '04', name: 'SMANS', category: 'School management platform',
    summary: 'A web-based school management platform bringing academic, administrative and financial workflows into role-aware interfaces.',
    role: 'Full-stack application development across web interfaces, backend workflows, data access and integrations.',
    context: 'School operations involve distinct users and responsibilities. The product brings student, parent, teacher and administrator workflows into a common application experience.',
    architecture: ['Next.js and TypeScript frontend', 'Prisma data layer and relational database', 'Role-aware application routes and server actions', 'M-Pesa / Daraja payment integration in the inspected source'],
    engineering: ['Student and parent workflows', 'Academic and administrative management', 'Fee-related workflows', 'Role and ownership checks', 'Payment initiation and callback handling'],
    status: 'Substantial full-stack implementation inspected; selected dependency, migration and payment-integrity concerns remain to be verified or addressed.',
    considerations: ['Do not describe payment processing as independently production-certified.', 'Dependency compatibility and migration deployment require further validation.']
  },
  'international-institute': {
    number: '05', name: 'International Institute of Foreign Languages', category: 'Education & language institute website',
    summary: 'An institutional website for a college, presenting its campus, learning environment and information for prospective students.',
    role: 'Website implementation and responsive presentation.',
    context: 'The site introduces the institute and helps prospective students understand the institution and its learning environment. The original portfolio screenshot is retained as the project visual.',
    architecture: ['Responsive institutional website', 'Programme and campus information presentation', 'Content-led page structure'],
    engineering: ['Institutional storytelling', 'Responsive page presentation', 'Prospective-student information architecture'],
    status: 'Earlier portfolio project restored from the supplied original website assets.',
    considerations: ['The screenshot is used as a visual reference; current live functionality has not been independently re-verified.']
  },
  kelvisan: {
    number: '09', name: 'Kelvisan', category: 'Electrical & network services website', summary: 'A company website presenting electrical, networking and related technology services.',
    role: 'Website implementation and content presentation.', context: 'The website presents the company and its electrical, networking and technology service offering.',
    architecture: ['Responsive company website', 'Service-led content structure'], engineering: ['Electrical and networking service presentation', 'Responsive page layout'], status: 'Earlier portfolio project restored from supplied screenshot assets.', considerations: ['Current live status has not been independently verified.']
  },
  'the-accommodation-guru': {
    number: '06', name: 'The Accommodation Guru', category: 'Property discovery & inquiry experience',
    summary: 'A premium digital experience for a Kenya-based vacation-home agency, designed to help guests discover properties and help owners submit property enquiries.',
    role: 'Product and frontend engineering across responsive website experiences, enquiry forms and conversion paths.',
    context: 'The product serves two audiences: guests exploring potential stays and property owners interested in listing their homes. The experience should make property information easy to understand and enquiries straightforward.',
    architecture: ['Next.js App Router', 'TypeScript', 'Tailwind CSS and reusable interface components', 'React Hook Form and Zod form validation', 'WhatsApp-oriented inquiry flow'],
    engineering: ['Property discovery and presentation', 'Guest and property-owner journeys', 'Responsive layouts and clear information hierarchy', 'Owner enquiry form and required property details', 'WhatsApp inquiry conversion path'],
    status: 'Client-facing website experience. The supplied scope does not establish a booking engine or payment system.',
    considerations: ['The owner form uses number of beds, not bedrooms.', 'Number of beds and additional property information are mandatory requirements.', 'Do not claim confirmed bookings, payment processing or property-management functionality.']
  },
  'meku-solutions': {
    number: '07', name: 'Meku Solutions', category: 'Corporate digital experience',
    summary: 'A corporate website experience for a technology company, designed to communicate its services and software products through a clear, polished digital presence.',
    role: 'Frontend and product presentation engineering, including responsive layouts, visual hierarchy and enquiry experience.',
    context: 'The website needs to feel credible and product-led while presenting a range of technology services and software capabilities. The redesign direction prioritises readable typography, clear contrast and authentic product imagery.',
    architecture: ['Next.js and TypeScript', 'Tailwind CSS and component-based UI', 'Responsive page layouts', 'Validated enquiry/contact workflow'],
    engineering: ['Corporate information architecture', 'Product and service storytelling', 'Responsive UI implementation', 'Enquiry handling and form validation', 'Presentation of real product screenshots and interfaces'],
    status: 'Corporate website project. Preserve the Meku brand identity and distinguish it from the personal portfolio.',
    considerations: ['Keep the existing orange/yellow Meku identity, logo and favicon.', 'Do not distort or blur product screenshots.', 'Do not apply the personal portfolio blue identity to Meku.']
  },
  inarikicchin: {
    number: '08', name: 'InariKicchin', category: 'Restaurant website & digital menu',
    summary: 'A standalone restaurant website and QR-accessible menu for an Asian fusion dining brand.',
    role: 'Website experience and digital menu implementation, with attention to restaurant identity and responsive presentation.',
    context: 'The public website gives the restaurant a polished digital presence and a simple way for guests to browse the menu from a QR code. It is deliberately a focused information experience rather than an ordering platform.',
    architecture: ['Next.js website', 'Dedicated menu route', 'Responsive menu presentation', 'Restaurant-specific visual identity'],
    engineering: ['Public restaurant website', 'QR-accessible menu experience', 'Responsive content and menu layout', 'Brand implementation and visual consistency'],
    status: 'Standalone website and menu scope.',
    considerations: ['No online ordering or table QR ordering.', 'No POS or RestFlow integration.', 'The separate InariKicchin operations system is a different project and must not be conflated with this website.']
  }
}

export function generateStaticParams() { return Object.keys(caseStudies).map((slug) => ({ slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = caseStudies[slug]
  return project ? { title: project.name, description: project.summary } : { title: 'Project' }
}

export default async function ProjectCaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = caseStudies[slug]
  if (!project) notFound()
  return <main className="case-page">
    <header className="case-header"><Link href="/" className="wordmark">SK<span>.</span></Link><Link href="/#work" className="case-back">← BACK TO SELECTED WORK</Link></header>
    <section className="case-hero"><div className="section-eyebrow">{project.number} / {project.category.toUpperCase()}</div><h1>{project.name}</h1><p>{project.summary}</p><div className="case-role"><span>MY FOCUS</span><b>{project.role}</b></div></section>
    <section className="case-content"><div className="case-section"><span>01 / CONTEXT</span><div><h2>The problem space</h2><p>{project.context}</p></div></div>
      <div className="case-section"><span>02 / ARCHITECTURE</span><div><h2>How it is put together</h2><ul>{project.architecture.map((item) => <li key={item}>{item}</li>)}</ul></div></div>
      <div className="case-section"><span>03 / ENGINEERING</span><div><h2>What the work involves</h2><ul>{project.engineering.map((item) => <li key={item}>{item}</li>)}</ul></div></div>
      <div className="case-section"><span>04 / STATUS & SCOPE</span><div><h2>Clear about the details</h2><p className="case-status">{project.status}</p><ul>{project.considerations.map((item) => <li key={item}>{item}</li>)}</ul></div></div>
    </section>
    <section className="case-next"><div><span className="section-eyebrow">HAVE A PROJECT IN MIND?</span><h2>Let&apos;s build something useful.</h2></div><a href="mailto:simonkeya@gmail.com">GET IN TOUCH ↗</a></section>
    <footer className="site-footer"><Link href="/" className="wordmark">SK<span>.</span></Link><span>© {new Date().getFullYear()} SIMON KEYA</span><Link href="/#work">ALL PROJECTS ↑</Link></footer>
  </main>
}
