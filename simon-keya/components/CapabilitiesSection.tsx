const groups = [
  { title: 'Backend & API engineering', detail: 'Hands-on work designing APIs, service boundaries, authentication, business rules and dependable application workflows.', skills: ['Go', 'TypeScript', 'Node.js', 'NestJS', 'Python', 'FastAPI', 'REST APIs'] },
  { title: 'Frontend & product development', detail: 'Building responsive interfaces and complete user journeys across web and mobile products.', skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'React Native', 'Expo', 'Tailwind CSS'] },
  { title: 'Databases & data modelling', detail: 'Designing relational schemas, migrations and application data access, with attention to integrity and business meaning.', skills: ['PostgreSQL', 'Prisma', 'TypeORM', 'MongoDB', 'Supabase', 'SQL', 'pgAdmin'] },
  { title: 'DevOps & application delivery', detail: 'Deploying and troubleshooting applications, managing environments and using containers and hosted platforms in delivery workflows.', skills: ['Docker', 'Git', 'GitHub', 'Linux', 'CI/CD', 'Render', 'Netlify', 'Vercel'] },
  { title: 'Applied AI & data tooling', detail: 'Integrating language models with authenticated application services and controlled tool-calling workflows; foundational Python data tooling.', skills: ['Gemini API', 'OpenAI API', 'Tool calling', 'Python', 'NumPy', 'SciPy', 'Jupyter Notebook'] },
]

const learning = [
  'Cybersecurity Fundamentals',
  'DevOps Engineering: Docker, Kubernetes & Google Cloud',
  'Google Cloud Platform (GCP)',
  'Data Science with Python',
  'Prompt Engineering',
  'Prompt Engineering with Generative AI',
  'Software Architecture: Comprehensive Guide',
]

export default function CapabilitiesSection() {
  return (
    <section className="section capabilities" id="capabilities" aria-labelledby="cap-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Capabilities</p>
            <h2 id="cap-title">Built across the stack.</h2>
          </div>
          <p>A practical toolkit shaped by shipped product work, ongoing learning and careful separation between hands-on experience and areas still being developed.</p>
        </div>

        <ul className="cap-list">
          {groups.map((g) => (
            <li className="cap-row" key={g.title}>
              <div>
                <h3>{g.title}</h3>
                <p>{g.detail}</p>
              </div>
              <ul className="chips" aria-label={`${g.title} skills`}>
                {g.skills.map((s) => <li className="chip" key={s}>{s}</li>)}
              </ul>
            </li>
          ))}
        </ul>

        <div className="band learning on-band">
          <div>
            <p className="eyebrow">Continuous learning</p>
            <h3>Learning that supports the work.</h3>
            <p>Alongside project experience, I invest in structured learning across security, cloud, data and software design. I keep formal learning and certifications separate from technologies I have explored or used in projects.</p>
          </div>
          <ul className="chips" aria-label="Courses and learning">
            {learning.map((x) => <li className="chip" key={x}>{x}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
