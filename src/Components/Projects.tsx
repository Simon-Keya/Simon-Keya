import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../styles/Projects.scss'; // Import your custom stylesheet

interface Project {
  title: string;
  image: string;
  description: string;
  sourceLink: string;
  demoLink?: string; // Optional demo link property
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'CHIPPER',
      image: '/assets/images/ChipperAPI.png',
      description:
        'An e-commerce business backend that facilitates high-performance API endpoints, ensuring seamless communication between your frontend and database delivering quick responses to users. Built using FastAPI Python framework, PostgreSQL, and Swagger UI for documentation.',
      sourceLink: 'https://github.com/Simon-Keya/Chipper',
      demoLink: 'https://github.com/Simon-Keya/Chipper',
    },
    {
      title: 'CHIPPER',
      image: '/assets/images/ChipperAPI.png',
      description:
        'An e-commerce business backend that facilitates high-performance API endpoints, ensuring seamless communication between your frontend and database delivering quick responses to users.Built using FastAPI Python framework, PostgreSQL, and Swagger UI for documentation.',
      sourceLink: 'https://github.com/Simon-Keya/Chipper',
      demoLink: 'https://github.com/Simon-Keya/Chipper',
    },
    {
      title: 'Keyart',
      image: '/assets/images/keya.png',
      description:
        'Embark on a visual odyssey through realms of imagination, where every click opens a gateway to a world of artistic wonder. Dive into my digital gallery, a tapestry of dreams woven with pixels and passion. From bold brushstrokes to delicate details, my art portfolio website is a celebration of creativity unleashed and boundaries dissolved.',
      sourceLink: 'https://github.com/Simon-Keya/Keyart',
      demoLink: 'https://keyart.vercel.app',
    },
    {
      title: 'Karen Hats',
      image: '/assets/images/Karen hats.png',
      description:
        'An eccomerce website for purchasing and ordering hats built using Next.js, Tailwind, Daisy UI, Nest.js and postgresql',
      sourceLink: 'https://github.com/Simon-Keya/Karen-Hats',
      demoLink: 'https://karen-hats.vercel.app',
    },
    {
      title: 'OkumuGalore',
      image: '/assets/images/Okumugalor.png',
      description:
        'An artist portfolio website. It showcases the exquisite paintings of the artist, providing a visually captivating gallery experience. With a modern and responsive design, OkumuGalore offers a seamless browsing experience for art enthusiasts and collectors alike.',
      sourceLink: 'https://github.com/Simon-Keya/Okumu-Galor',
      demoLink: 'https://okumu-galor.vercel.app',
    },
    {
      title: 'Keya Simon',
      image: '/assets/images/Keya Simon.png',
      description:
        'Developed a personal blog website fro sharing insights on psychology, self improvememt, philosophy,technology and art built using react tailwind css.',
      sourceLink: 'https://github.com/Simon-Keya/Keya-Simon',
      demoLink: 'https://keya-simon.vercel.app',
    },
    {
      title: 'Ruby',
      image: '/assets/images/RUBY.png',
      description:
        'Implemented an email spam classifier model using Jupyter Notebook.',
      sourceLink: 'https://github.com/Simon-Keya/Ruby',
      demoLink: 'https://your-nova-project-demo.com',
    },
    {
      title: 'Portfolio',
      image: '/assets/images/Portfolio.png',
      description:
        'Developed a prototype of a portfolio website using TypeScript, React, and Bootstrap SCSS.',
      sourceLink: 'https://github.com/Simon-Keya/Portfolio',
      demoLink: 'https://portfolio-eight-sigma-34.vercel.app/',
    },
    {
      title: 'LUDE - Task Management System ',
      image: '/assets/images/LUDE.png',
      description:
        'Built a task management system API using FastAPI Python framework, PostgreSQL, and Swagger UI for documentation.',
      sourceLink: 'https://github.com/Simon-Keya/LUDE',
      demoLink: 'https://your-nova-project-demo.com',
    },
    {
      title: 'CHIPPER-client',
      image: '/assets/images/CHIPPER.png',
      description:
        'Developed an e-commerce client using React, Bootstrap, TypeScript, and SCSS.',
      sourceLink: 'https://github.com/Simon-Keya/Chipper-client',
      demoLink: 'https://your-nova-project-demo.com',
    },
    // Additional projects...
  ];

  return (
    <section className="projects-container" role="region" aria-labelledby="projects-heading">
      <header className="text-center mb-4">
        <h2 id="projects-heading" className="text-3xl font-extrabold tracking-tight">
          My Projects
        </h2>
        <p className="text-gray-600">
          Explore the projects I’ve built, ranging from e-commerce systems to personal portfolios and API solutions.
        </p>
      </header>
      <div className="projects-grid">
        {projects.map((project) => (
          <article
            key={project.title}
            className="project-item"
            role="article"
            aria-labelledby={`${project.title.replace(/\s+/g, '-')}-title`}
          >
            <Card>
              {/* Image with Alt Text */}
              <Card.Img
                variant="top"
                src={project.image}
                alt={`${project.title} preview`}
                className="project-image"
                loading="lazy"
              />
              <Card.Body>
                <Card.Title id={`${project.title.replace(/\s+/g, '-')}-title`}>
                  {project.title}
                </Card.Title>
                <Card.Text>{project.description}</Card.Text>
                {/* Project Buttons */}
                <div className="project-buttons">
                  <Button
                    variant="primary"
                    href={project.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View source code for ${project.title}`}
                  >
                    Source
                  </Button>
                  {project.demoLink && (
                    <Button
                      variant="outline-primary"
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View demo for ${project.title}`}
                    >
                      Demo
                    </Button>
                  )}
                </div>
              </Card.Body>
            </Card>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
