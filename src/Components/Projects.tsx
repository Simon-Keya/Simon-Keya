// components/Projects.tsx
import React from 'react';
import Card from 'react-bootstrap/Card';
import '../styles/Projects.scss';

const Projects: React.FC = () => {
  return (
    <div className="projects-container">

      <div className="project-item">
        <Card>
          <Card.Img variant="top" src="/assets/images/NOVA.png" />
          <Card.Body>
            <Card.Title>Nova</Card.Title>
            <Card.Text>
            Built a prototype for an Internet Service Provider using React, Bootstrap, Node.js, Express.js, and MongoDB. Follow the link to Github to check out the source code.
            <a href="https://github.com/Simon-Keya/Nova">Link</a>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className="project-item">
        <Card>
          <Card.Img variant="top" src="/assets/images/KYN.png" />
          <Card.Body>
            <Card.Title>Kyn</Card.Title>
            <Card.Text>
            Developed a blog website API using Django Python framework and PostgreSQL. Follow the link to Github to check out the source code.
            <a href="https://github.com/Simon-Keya/Kyn">Link</a>            
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className="project-item">
        <Card>
          <Card.Img variant="top" src="/assets/images/RUBY.png"/>
          <Card.Body>
            <Card.Title>Ruby</Card.Title>
            <Card.Text>
            Implemented an email spam classifier model using Jupyter Notebook. Follow the link to Github to check out the source.
            <a href="https://github.com/Simon-Keya/Ruby">Link</a>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className="project-item">
        <Card>
          <Card.Img variant="top" src="/assets/images/Portfolio.png" />
          <Card.Body>
            <Card.Title>Portfolio</Card.Title>
            <Card.Text>
            Developed a prototype of a portfolio website using TypeScript, React, and Bootstrap SCSS. Follow the link to Github to check out the source code.
            <a href="https://github.com/Simon-Keya/Portfolio">Link</a>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className="project-item">
        <Card>
          <Card.Img variant="top" src="/assets/images/LUDE.png" />
          <Card.Body>
            <Card.Title>LUDE - Task Management System API</Card.Title>
            <Card.Text>
            'Built a task management system API using FastAPI Python framework, PostgreSQL, and Swagger UI for documentation. Follow the link to Github to check out the source code.
            <a href="https://github.com/Simon-Keya/LUDE">Link</a>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className="project-item">
        <Card>
          <Card.Img variant="top" src="/assets/images/CHIPPER.png" />
          <Card.Body>
            <Card.Title>CHIPPER-client</Card.Title>
            <Card.Text>
            Developed an e-commerce client using React, Bootstrap, TypeScript, and SCSS. Follow the link to Github to check out the source code.
            <a href="https://github.com/Simon-Keya/Chipper-client">Link</a>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className="project-item">
        <Card>
          <Card.Img variant="top" src="/assets/images/CHIPPER.png" />
          <Card.Body>
            <Card.Title>CHIPPER-API</Card.Title>
            <Card.Text>
            Built a task management system API using FastAPI Python framework, PostgreSQL, and Swagger UI for documentation. Follow the link to Github to check out the source code.
            <a href="https://github.com/Simon-Keya/CHIPPER">Link</a>'
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Projects;