import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import '../styles/Skills.scss';

const Skills: React.FC = () => {
  return (
    <section className="skills-section" aria-labelledby="skills-heading">
      <header className="text-center mb-4">
        <h1 id="skills-heading" className="text-3xl font-bold">
          My Skills and Expertise
        </h1>
        <p className="text-gray-600">
          A detailed overview of my technical and professional competencies across various domains.
        </p>
      </header>
      <div className="skills-container">
        <Accordion defaultActiveKey="0">
          {/* Web Development Accordion */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h2 className="accordion-title">Web Development</h2>
            </Accordion.Header>
            <Accordion.Body>
              <h3 className="text-2xl font-semibold">Front-End Technologies</h3>
              <ul>
                <li>
                  <h4>HTML5 & CSS3</h4>
                  <p>
                    Extensive experience building user interfaces with semantic HTML and modern CSS practices.
                  </p>
                </li>
                <li>
                  <h4>JavaScript</h4>
                  <p>
                    Proficient in vanilla JavaScript and leveraging modern frameworks like React.
                  </p>
                </li>
                <li>
                  <h4>React</h4>
                  <p>
                    Comfortable building interactive and dynamic user interfaces with React and its ecosystem.
                  </p>
                </li>
                <li>
                  <h4>TypeScript</h4>
                  <p>
                    Utilizing TypeScript for enhanced type safety and code maintainability in frontend projects.
                  </p>
                </li>
                <li>
                  <h4>Bootstrap</h4>
                  <p>
                    Proficient in using Bootstrap for rapid frontend development and responsive design.
                  </p>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold">Back-End Technologies</h3>
              <ul>
                <li>
                  <h4>FastAPI</h4>
                  <p>Experience building APIs with the modern and performant FastAPI framework.</p>
                </li>
                <li>
                  <h4>Django</h4>
                  <p>Understanding of Django, a popular Python framework for building web applications.</p>
                </li>
                <li>
                  <h4>PostgreSQL</h4>
                  <p>Comfortable working with PostgreSQL databases for data storage and retrieval.</p>
                </li>
                <li>
                  <h4>Swagger UI</h4>
                  <p>Experience using Swagger UI for API documentation and service discovery.</p>
                </li>
                <li>
                  <h4>Node.js</h4>
                  <p>Proficient in using Node.js for server-side JavaScript development.</p>
                </li>
                <li>
                  <h4>Express.js</h4>
                  <p>Experience building web applications and APIs using the Express.js framework.</p>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold">Version Control Systems</h3>
              <ul>
                <li>Proficient in Git, including branching and collaborative workflows.</li>
                <li>Experienced with GUI tools like GitHub Desktop for repository management.</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          {/* Data Science Accordion */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <h2 className="accordion-title">Data Science</h2>
            </Accordion.Header>
            <Accordion.Body>
              <h3 className="text-2xl font-semibold">Data Science Expertise</h3>
              <ul>
                <li>
                  <h4>Python Programming</h4>
                  <p>
                    Skilled in Python for data manipulation, analysis, and visualization with libraries like NumPy,
                    Pandas, and Matplotlib.
                  </p>
                </li>
                <li>
                  <h4>Statistics and Probability</h4>
                  <p>
                    Knowledge of descriptive and inferential statistics for effective data analysis.
                  </p>
                </li>
                <li>
                  <h4>Data Visualization</h4>
                  <p>
                    Expertise in crafting insightful visualizations using tools like Matplotlib and Seaborn.
                  </p>
                </li>
                <li>
                  <h4>Machine Learning</h4>
                  <p>
                    Experience building and applying machine learning models for various use cases.
                  </p>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          {/* Other Skills */}
          <Accordion.Item eventKey="2">
            <Accordion.Header>Information Science</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  <h4>Information Technology</h4>
                  <p>
                    Solid foundation in IT concepts such as networking, operating systems, and web development.
                  </p>
                </li>
                <li>
                  <h4>E-Business</h4>
                  <p>
                    Familiar with e-business strategies and leveraging technology for business value.
                  </p>
                </li>
                {/* Add more items here */}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
};

export default Skills;
