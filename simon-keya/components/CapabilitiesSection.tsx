const groups = [
  { title: 'Backend & API engineering', detail: 'Designing service boundaries, APIs, business rules, authentication and dependable application workflows.', skills: ['Go', 'Python', 'FastAPI', 'Django', 'Node.js', 'NestJS', 'REST APIs'] },
  { title: 'Frontend & product development', detail: 'Building responsive interfaces and complete user journeys across web and mobile products.', skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'React Native', 'Expo', 'Tailwind CSS'] },
  { title: 'Databases & content platforms', detail: 'Working with relational and document data, schema design, querying, administration and content-driven experiences.', skills: ['PostgreSQL', 'MongoDB', 'Supabase', 'Prisma', 'TypeORM', 'pgAdmin', 'Sanity CMS', 'Redis'] },
  { title: 'Cloud, DevOps & delivery', detail: 'Practical exposure to containerisation, cloud infrastructure and repeatable application delivery.', skills: ['Docker', 'Kubernetes', 'Google Cloud', 'Linux', 'CI/CD', 'Vercel', 'Netlify', 'Render'] },
  { title: 'Data science & applied AI', detail: 'Using Python data tools for analysis and integrating language models with controlled application tools.', skills: ['NumPy', 'SciPy', 'Jupyter Notebook', 'Gemini API', 'OpenAI API', 'Prompt engineering', 'Tool calling'] },
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
          <p>A broad engineering toolkit shaped by hands-on product work, focused learning and continued experimentation.</p>
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
