export type ProjectKind = 'product' | 'client'

export type ProjectImage = { src: string; width: number; height: number; alt: string }

export type Project = {
  slug: string
  name: string
  category: string
  kind: ProjectKind
  eyebrow: string
  status: string
  summary: string
  contribution: string[]
  stack: string[]
  image?: ProjectImage
  /** Illustrated card used when no real screenshot exists. */
  illustration?: 'ai' | 'go'
  liveUrl?: string
  featured?: boolean
  case: {
    intro: string
    role: string
    context: string
    architecture: string[]
    engineering: string[]
    status: string
    openItems: string[]
  }
}

export const contact = {
  name: 'Simon Keya',
  email: 'simonkeya@gmail.com',
  linkedin: 'https://www.linkedin.com/in/simon-keya-9ab441237/',
  github: 'https://github.com/Simon-Keya',
  whatsapp: 'https://wa.me/254768378046',
  x: 'https://x.com/SymonC137',
  art: 'https://keyart.netlify.app',
  resume: '/files/Simon-Keya-Resume.pdf',
  location: 'Nairobi, Kenya',
  timezone: 'EAT (UTC+3)',
}

export const projects: Project[] = [
  {
    slug: 'restflow',
    name: 'RestFlow',
    category: 'Enterprise operations platform',
    kind: 'product',
    eyebrow: 'Flagship · Backend systems',
    status: 'Core platform',
    featured: true,
    summary:
      'An operations platform connecting inventory, procurement, production, costing and point-of-sale workflows, built for businesses where stock, money and operational data have to agree.',
    contribution: ['Backend architecture', 'Business logic', 'Data modelling', 'Full-stack engineering'],
    stack: ['NestJS', 'Go', 'PostgreSQL', 'Prisma', 'React', 'TypeScript'],
    image: {
      src: '/projects/restflow.webp',
      width: 1350,
      height: 589,
      alt: 'RestFlow operations dashboard showing revenue, orders, low-stock items, open approvals, food cost and gross margin.',
    },
    liveUrl: 'https://mekusolutions.netlify.app/restflow',
    case: {
      intro:
        'A connected operations platform for businesses where inventory, procurement, production, costing and sales depend on consistent operational data.',
      role: 'Backend and full-stack engineering across operational workflows, data models, API behaviour and system integration.',
      context:
        'RestFlow tackles the complexity behind day-to-day operations. Stock movements change valuation, production consumes ingredients, recipes shape the cost of finished goods, and every sale has to stay consistent with inventory and reporting. The engineering challenge is making those workflows work together without losing their business meaning.',
      architecture: [
        'Go is the intended primary backend and system of record, with migration progressing in evidence-led stages',
        'React and TypeScript application',
        'PostgreSQL data layer, with Prisma in the existing NestJS implementation',
        'NestJS is the existing backend being assessed for staged migration or replacement',
        'Shop-scoped authentication and operational modules',
        'Event storage and projection-based workflows',
      ],
      engineering: [
        'Inventory, receiving and procurement workflows',
        'Recipes, production and consumption',
        'Weighted-average costing and stock valuation',
        'POS, payments and operational reporting',
        'Authentication, shop scoping and request controls',
        'Tests covering costing, recipe calculations, event storage and other domain behaviour',
      ],
      status:
        'The platform has a substantial working implementation. Go is the target primary backend; the migration and multi-tenant hierarchy are still in progress and are being approached incrementally to preserve existing behaviour and data.',
      openItems: [
        'Financial and inventory rules must stay exact through every change, so they are protected by tests.',
        'The Go service needs more concurrency and behavioural-parity work before it can replace the existing backend.',
        'Production readiness has not been independently certified.',
      ],
    },
  },
  {
    slug: 'restflow-ai',
    name: 'RestFlow AI',
    category: 'Applied AI operations assistant',
    kind: 'product',
    eyebrow: 'Flagship · Applied AI',
    status: 'Applied AI',
    summary:
      'A read-oriented assistant that connects language-model tool calling to authenticated operational services, so people can ask questions about business data without bypassing application permissions.',
    contribution: ['FastAPI orchestration', 'LLM integration', 'Tool calling', 'Authenticated retrieval'],
    stack: ['Python', 'FastAPI', 'Gemini API', 'Tool calling', 'REST APIs'],
    illustration: 'ai',
    case: {
      intro:
        'A read-oriented assistant that lets people ask natural-language questions about operational data through controlled tools connected to existing application services.',
      role: 'AI service and application integration engineering, including FastAPI orchestration, authenticated retrieval and tool-execution boundaries.',
      context:
        'The hard part is not adding a chat box. An assistant that works with business data has to respect the identity and permissions of the person asking, treat the existing system as the source of truth, and limit what the model can retrieve or do.',
      architecture: [
        'Python and FastAPI orchestration service',
        'Gemini API integration',
        'Session validation against the existing application',
        'Bearer-token forwarding to authenticated application endpoints',
        'Role-aware, read-oriented operational tools',
        'Bounded tool output and execution controls',
      ],
      engineering: [
        'Operational retrieval for inventory, costing, recipes and other domains',
        'Tool and function calling between the model and backend services',
        'Application-level authentication and permission boundaries',
        'No direct database access from the assistant service',
        'No operational write tools: the assistant only reads',
      ],
      status:
        'The applied-AI service is implemented and working against the existing application. Documentation and tests still contain some references to an earlier OpenAI integration that are being reconciled with the current Gemini one.',
      openItems: [
        'This is a tool-calling assistant, not a retrieval-augmented (RAG) or vector-search system.',
        'Conversation persistence and autonomous write operations are not part of this version.',
        'A fresh end-to-end check against the live model provider is still to be recorded.',
      ],
    },
  },
  {
    slug: 'restflow-go',
    name: 'RestFlow Go',
    category: 'Go backend architecture and migration',
    kind: 'product',
    eyebrow: 'Flagship · Systems engineering',
    status: 'Migration in progress',
    summary:
      'A Go service developed alongside the existing operations backend, focused on service boundaries, event processing, transaction semantics and a safe, evidence-led migration path.',
    contribution: ['Go services', 'API design', 'Event processing', 'Migration analysis'],
    stack: ['Go', 'PostgreSQL', 'pgx', 'Docker', 'REST APIs'],
    illustration: 'go',
    case: {
      intro:
        'The Go backend intended to become RestFlow’s primary backend and system of record, developed through staged parity work against the existing NestJS implementation.',
      role: 'Go backend implementation and architecture investigation within the wider RestFlow ecosystem.',
      context:
        'Replacing a mature backend is not a framework swap. Business rules, data contracts, event semantics and concurrency guarantees all have to be understood and preserved, so this work treats migration as a staged engineering process rather than a wholesale replacement.',
      architecture: [
        'Go API and worker entry points',
        'PostgreSQL access through pgx',
        'Modules for inventory, POS, costing, receiving and production',
        'Event storage and projection updates',
        'Background workers and observability',
        'Idempotency and shop-scoped coordination',
      ],
      engineering: [
        'Go service and API structure',
        'Transactional event and projection processing',
        'Parity analysis against the existing NestJS behaviour',
        'Concurrency and stock-integrity investigation',
        'Migration risk assessment and service-boundary design',
      ],
      status:
        'A substantial Go implementation exists. Migration and full production parity are still in progress.',
      openItems: [
        'A stock-availability concurrency risk was identified in the point-of-sale flow and is being addressed.',
        'Event and projection transaction semantics differ between the NestJS and Go versions and need to be reconciled.',
        'There has been no production cutover, and full behavioural parity has not yet been reached.',
      ],
    },
  },
  {
    slug: 'smans',
    name: 'SMANS',
    category: 'School management platform',
    kind: 'product',
    eyebrow: 'Full-stack product · In progress',
    status: 'In progress',
    summary:
      'A school management application bringing academic, administrative and financial workflows into role-aware interfaces for administrators, teachers, students and parents.',
    contribution: ['Full-stack development', 'API workflows', 'Access control', 'Integrations'],
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'M-Pesa'],
    image: {
      src: '/projects/smans.webp',
      width: 1352,
      height: 518,
      alt: 'SMANS landing page headed “Making School Life Simpler”, with cards for attendance, CBC assessments and fee management.',
    },
    liveUrl: 'https://smans.vercel.app',
    case: {
      intro:
        'A web-based school management platform bringing academic, administrative and financial workflows into role-aware interfaces.',
      role: 'Full-stack application development across web interfaces, backend workflows, data access and integrations.',
      context:
        'School operations involve people with very different responsibilities. SMANS brings student, parent, teacher and administrator workflows into one application, with each role seeing what it needs.',
      architecture: [
        'Next.js and TypeScript front end',
        'Prisma data layer on a relational database',
        'Role-aware routes and server actions',
        'M-Pesa (Daraja) payment integration',
      ],
      engineering: [
        'Student and parent workflows',
        'Academic and administrative management',
        'Fee-related workflows',
        'Role and ownership checks',
        'Payment initiation and callback handling',
      ],
      status:
        'In progress. The core full-stack implementation is under active development; some dependency, migration and payment-integrity work is still being verified and refined.',
      openItems: [
        'Payment handling has not been independently certified for production.',
        'Dependency compatibility and migration deployment still need further validation.',
      ],
    },
  },
  {
    slug: 'international-institute',
    name: 'International Institute of Foreign Languages',
    category: 'Education and language institute website',
    kind: 'client',
    eyebrow: 'Client project · Web',
    status: 'Institutional website',
    summary:
      'A college website presenting the institute, its hospitality and language-learning programmes, campus experience and information for prospective students.',
    contribution: ['Website implementation', 'Responsive presentation', 'Institutional storytelling'],
    stack: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
    image: {
      src: '/projects/international.webp',
      width: 1340,
      height: 596,
      alt: 'International Institute of Foreign Languages and Hospitality Management homepage with a campus welcome headline and photo of students.',
    },
    liveUrl: 'https://foreignlanguagesandhospitality.com/',
    case: {
      intro:
        'An institutional website for a college, presenting its campus, learning environment and information for prospective students.',
      role: 'Website implementation and responsive presentation.',
      context:
        'The site introduces the institute and helps prospective students understand the institution, its programmes and its learning environment, with clear routes to apply or request a brochure.',
      architecture: [
        'Responsive institutional website',
        'Programme and campus information presentation',
        'Content-led page structure',
      ],
      engineering: [
        'Institutional storytelling',
        'Responsive page presentation',
        'Information architecture for prospective students',
      ],
      status: 'An earlier portfolio project, live as the institute’s public website.',
      openItems: ['This is a presentation website; it does not include an application or payments system.'],
    },
  },
  {
    slug: 'the-accommodation-guru',
    name: 'The Accommodation Guru',
    category: 'Property discovery and enquiry experience',
    kind: 'client',
    eyebrow: 'Client project · Web',
    status: 'Client experience',
    summary:
      'A premium digital experience for a Kenya-based vacation-home agency, designed around property discovery and clear enquiry journeys for guests and property owners.',
    contribution: ['Product experience', 'Next.js', 'Form validation', 'WhatsApp enquiry flow'],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React Hook Form', 'Zod'],
    image: {
      src: '/projects/accommodation-guru.webp',
      width: 1350,
      height: 522,
      alt: 'The Accommodation Guru homepage: “Find Your Perfect Home Away From Home” over a coastal villa with a pool.',
    },
    liveUrl: 'https://accommodationguru.netlify.app',
    case: {
      intro:
        'A premium digital experience for a Kenya-based vacation-home agency, helping guests discover properties and owners submit property enquiries.',
      role: 'Product and front-end engineering across responsive website experiences, enquiry forms and conversion paths.',
      context:
        'The product serves two audiences: guests exploring places to stay and property owners interested in listing their homes. Property information needs to be easy to scan, and enquiries need to be straightforward for both.',
      architecture: [
        'Next.js App Router',
        'TypeScript',
        'Tailwind CSS and reusable interface components',
        'React Hook Form and Zod validation',
        'WhatsApp-oriented enquiry flow',
      ],
      engineering: [
        'Property discovery and presentation',
        'Separate guest and property-owner journeys',
        'Responsive layouts with clear information hierarchy',
        'Owner enquiry form with required property details, including number of beds',
        'WhatsApp enquiry conversion path',
      ],
      status: 'A client-facing website experience.',
      openItems: ['It is an enquiry and discovery site. It does not include a booking engine, payments or property management.'],
    },
  },
  {
    slug: 'meku-solutions',
    name: 'Meku Solutions',
    category: 'Corporate digital experience',
    kind: 'client',
    eyebrow: 'Client project · Web',
    status: 'Corporate website',
    summary:
      'A corporate website for a technology company, focused on clear product storytelling, responsive layouts and a polished presentation of its software work.',
    contribution: ['Front-end engineering', 'Responsive UI', 'Product presentation', 'Enquiry experience'],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Motion'],
    image: {
      src: '/projects/meku-solutions.webp',
      width: 1350,
      height: 587,
      alt: 'Meku Solutions homepage: “Connect your operations. See your business clearly.” beside the RestFlow product interface.',
    },
    liveUrl: 'https://mekusolutions.netlify.app',
    case: {
      intro:
        'A corporate website for a technology company, communicating its services and software products through a clear, polished digital presence.',
      role: 'Front-end and product presentation engineering, including responsive layouts, visual hierarchy and the enquiry experience.',
      context:
        'The site has to feel credible and product-led while presenting a range of technology services. The direction prioritises readable typography, strong contrast and authentic product imagery, including real screenshots of RestFlow.',
      architecture: [
        'Next.js and TypeScript',
        'Tailwind CSS and component-based UI',
        'Responsive page layouts',
        'Validated enquiry and contact workflow',
      ],
      engineering: [
        'Corporate information architecture',
        'Product and service storytelling',
        'Responsive UI implementation',
        'Enquiry handling and form validation',
        'Presentation of real product interfaces',
      ],
      status: 'A client corporate website with its own orange and yellow brand identity.',
      openItems: ['Meku keeps its own brand identity, separate from this portfolio.'],
    },
  },
  {
    slug: 'inarikicchin',
    name: 'InariKicchin',
    category: 'Restaurant website and digital menu',
    kind: 'client',
    eyebrow: 'Client project · Web',
    status: 'Client website',
    summary:
      'A standalone restaurant website and QR-accessible menu for an Asian fusion dining brand, deliberately separate from the restaurant’s operations system.',
    contribution: ['Website experience', 'Menu presentation', 'Responsive implementation'],
    stack: ['Next.js', 'TypeScript', 'Responsive UI', 'Digital menu'],
    image: {
      src: '/projects/inarikicchin.webp',
      width: 1350,
      height: 539,
      alt: 'InariKicchin homepage: “A taste of Asia in every moment” beside a plate of salmon sushi rolls.',
    },
    liveUrl: 'https://inaikicchinweb.vercel.app',
    case: {
      intro: 'A standalone restaurant website and QR-accessible menu for an Asian fusion dining brand.',
      role: 'Website experience and digital menu implementation, with attention to restaurant identity and responsive presentation.',
      context:
        'The website gives the restaurant a polished online presence and a simple way for guests to browse the menu from a QR code. It is intentionally a focused information experience rather than an ordering platform.',
      architecture: [
        'Next.js website',
        'Dedicated menu route',
        'Responsive menu presentation',
        'Restaurant-specific visual identity',
      ],
      engineering: [
        'Public restaurant website',
        'QR-accessible menu experience',
        'Responsive content and menu layout',
        'Brand implementation and visual consistency',
      ],
      status: 'A standalone website and menu.',
      openItems: [
        'There is no online ordering, table ordering or POS integration.',
        'It is separate from the InariKicchin operations system, which is a different project.',
      ],
    },
  },
]

export const archive = [
  {
    name: 'Samuel Kanuna',
    category: 'Portfolio',
    summary:
      'A content and SEO strategist’s portfolio, built to demonstrate the craft it sells: technical SEO, keyword-mapped content and copy engineered to rank and convert.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: { src: '/projects/samuel-kanuna.webp', width: 1299, height: 601, alt: 'Samuel Kanuna portfolio homepage.' },
    liveUrl: 'https://samuel-kanuna.vercel.app',
    githubUrl: 'https://github.com/Simon-Keya/Samuel-Kanuna',
  },
  {
    name: 'Keyart',
    category: 'Portfolio',
    summary: 'A digital gallery showcasing imaginative art and creative visions, built with modern web technology.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: { src: '/projects/keyart.webp', width: 1350, height: 601, alt: 'Keyart gallery showing paintings and pencil sketches.' },
    liveUrl: 'https://keyart.netlify.app',
    githubUrl: 'https://github.com/Simon-Keya/Keyart',
  },
  {
    name: 'Zenials',
    category: 'Social platform',
    summary: 'A social media platform to help creators monetise and grow their content.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript'],
    image: { src: '/projects/zenials.webp', width: 1366, height: 768, alt: 'Zenials social platform homepage.' },
    liveUrl: 'https://zenials.vercel.app/',
    githubUrl: 'https://github.com/Simon-Keya/Zenials',
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}

export function getAdjacent(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug)
  return {
    prev: projects[(i - 1 + projects.length) % projects.length],
    next: projects[(i + 1) % projects.length],
  }
}

export function hostOf(url?: string) {
  if (!url) return ''
  try {
    return new URL(url).host.replace(/^www\./, '')
  } catch {
    return ''
  }
}
