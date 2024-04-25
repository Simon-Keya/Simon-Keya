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
      title: 'OkumuGalore',
      image: '/assets/images/Okumugalor.png',
      description:
        'An artist portfolio website. It showcases the exquisite paintings of the artist, providing a visually captivating gallery experience. With a modern and responsive design, OkumuGalore offers a seamless browsing experience for art enthusiasts and collectors alike.',
      sourceLink: 'https://github.com/Simon-Keya/Okumu-Galor',
      demoLink: 'https://okumu-galor.vercel.app',
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
      title: 'Nova',
      image: '/assets/images/NOVA.png',
      description:
        'Built a prototype for an Internet Service Provider using React, Bootstrap, Node.js, Express.js, and MongoDB.',
      sourceLink: 'https://github.com/Simon-Keya/Nova',
      demoLink: 'https://your-nova-project-demo.com',
    },
    {
      title: 'Kyn',
      image: '/assets/images/KYN.png',
      description:
        'Developed a blog website API using Django Python framework and PostgreSQL.',
      sourceLink: 'https://github.com/Simon-Keya/Kyn',
      demoLink: 'https://your-nova-project-demo.com',
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
    
  ];

  return (
    <div className="projects-container">
      {projects.map((project) => (
        <div className="project-item" key={project.title}>
          <Card>
            <Card.Img variant="top" src={project.image} />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
              <div className="project-buttons">
                <Button variant="primary" href={project.sourceLink} target="_blank">
                  Source
                </Button>
                <Button variant="outline-primary" href={project.demoLink} target="_blank">
                  Demo
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Projects;