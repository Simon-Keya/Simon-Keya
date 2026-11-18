const groups = [
  { number: '01', title: 'Backend engineering', detail: 'Building application services, business logic and dependable backend workflows.', skills: ['Go', 'TypeScript', 'JavaScript', 'Node.js', 'NestJS', 'Python', 'FastAPI'] },
  { number: '02', title: 'API design & integration', detail: 'Designing and integrating APIs with authentication, validation and controlled access.', skills: ['REST APIs', 'JWT authentication', 'Role-based access', 'API documentation', 'Rate limiting', 'Service integration'] },
  { number: '03', title: 'Databases & data modelling', detail: 'Working with relational data, schema evolution, migrations and application data access.', skills: ['PostgreSQL', 'Prisma', 'SQL', 'Relational modelling', 'Database migrations', 'Data integrity'] },
  { number: '04', title: 'Frontend & mobile', detail: 'Delivering responsive interfaces and connected user journeys across web and mobile.', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Native', 'Expo'] },
  { number: '05', title: 'Architecture & systems', detail: 'Understanding business workflows, service boundaries and safe evolution of existing systems.', skills: ['Modular architecture', 'Multi-tenancy', 'System integration', 'Event processing', 'Backend migration', 'Workflow modelling'] },
  { number: '06', title: 'Applied AI', detail: 'Integrating language models into application services with authenticated, bounded tool workflows.', skills: ['Gemini API', 'OpenAI API', 'LLM integration', 'Tool calling', 'Python', 'FastAPI'] },
  { number: '07', title: 'Testing & delivery', detail: 'Validating behaviour, protecting regressions and delivering applications to hosted environments.', skills: ['Jest', 'Regression testing', 'API verification', 'TypeScript checks', 'Docker', 'Git & GitHub', 'Render', 'Netlify', 'Vercel'] },
]

const learning = ['Cybersecurity fundamentals', 'Cloud and DevOps practices', 'Google Cloud Platform', 'Data science with Python', 'Software architecture', 'Prompt engineering']

export default function CapabilitiesSection() {
  return (
    <section className="section capabilities" id="capabilities" aria-labelledby="cap-title">
      <div className="wrap">
        <div className="section-head">
          <div><p className="eyebrow">Capabilities</p><h2 id="cap-title">Engineering across the stack.</h2></div>
          <p>A practical toolkit shaped by building business applications, APIs and connected digital products. These capabilities reflect hands-on project work alongside continued learning.</p>
        </div>
        <ol className="cap-list">
          {groups.map((g) => <li className="cap-row" key={g.number}>
            <div className="cap-heading"><span>{g.number}</span><div><h3>{g.title}</h3><p>{g.detail}</p></div></div>
            <ul className="chips" aria-label={`${g.title} capabilities`}>{g.skills.map((skill) => <li className="chip" key={skill}>{skill}</li>)}</ul>
          </li>)}
        </ol>
        <div className="learning band on-band">
          <div><p className="eyebrow">Continuous learning</p><h3>Always strengthening the foundations.</h3><p>I continue to develop my knowledge across security, cloud infrastructure, data and software architecture. Learning areas are kept distinct from demonstrated project experience.</p></div>
          <ul className="chips" aria-label="Current learning areas">{learning.map((item) => <li className="chip" key={item}>{item}</li>)}</ul>
        </div>
      </div>
    </section>
  )
}
