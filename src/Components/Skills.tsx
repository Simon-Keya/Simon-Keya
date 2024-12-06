import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import '../styles/Skills.scss';

const Skills: React.FC = () => {
  return (
    <section className="skills-section" role="region" aria-labelledby="skills-heading">
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
              <section aria-labelledby="web-dev-heading">
                <h2 id="web-dev-heading" className="text-2xl font-semibold">
                  Front-End Technologies
                </h2>
                <ul>
                  <li>
                    <h3>HTML5 & CSS3</h3>
                    <p>
                      Extensive experience building user interfaces with semantic HTML and modern CSS practices.
                    </p>
                  </li>
                  <li>
                    <h3>JavaScript</h3>
                    <p>
                      Proficient in vanilla JavaScript and leveraging modern frameworks like React.
                    </p>
                  </li>
                  <li>
                    <h3>React</h3>
                    <p>
                      Comfortable building interactive and dynamic user interfaces with React and its ecosystem.
                    </p>
                  </li>
                  <li>
                    <h3>TypeScript</h3>
                    <p>
                      Utilizing TypeScript for enhanced type safety and code maintainability in frontend projects.
                    </p>
                  </li>
                  <li>
                    <h3>Bootstrap</h3>
                    <p>
                      Proficient in using Bootstrap for rapid frontend development and responsive design.
                    </p>
                  </li>
                </ul>

                <h2 className="text-2xl font-semibold">Back-End Technologies</h2>
                <ul>
                  <li>
                    <h3>FastAPI</h3>
                    <p>Experience building APIs with the modern and performant FastAPI framework.</p>
                  </li>
                  <li>
                    <h3>Django</h3>
                    <p>Understanding of Django, a popular Python framework for building web applications.</p>
                  </li>
                  <li>
                    <h3>PostgreSQL</h3>
                    <p>Comfortable working with PostgreSQL databases for data storage and retrieval.</p>
                  </li>
                  <li>
                    <h3>Swagger UI</h3>
                    <p>Experience using Swagger UI for API documentation and service discovery.</p>
                  </li>
                  <li>
                    <h3>Node.js</h3>
                    <p>Proficient in using Node.js for server-side JavaScript development.</p>
                  </li>
                  <li>
                    <h3>Express.js</h3>
                    <p>Experience building web applications and APIs using the Express.js framework.</p>
                  </li>
                </ul>

                <h2 className="text-2xl font-semibold">Version Control Systems</h2>
                <ul>
                  <li>
                    <p>
                      Proficient in Git and its features, including version management, branching, and collaboration.
                    </p>
                  </li>
                  <li>
                    <p>
                      Experienced with GUI tools like GitHub Desktop for managing repositories efficiently.
                    </p>
                  </li>
                </ul>
              </section>
            </Accordion.Body>
          </Accordion.Item>

          {/* Data Science Accordion */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <h2 className="accordion-title">Data Science</h2>
            </Accordion.Header>
            <Accordion.Body>
              <section aria-labelledby="data-science-heading">
                <h2 id="data-science-heading" className="text-2xl font-semibold">
                  Data Science Expertise
                </h2>
                <ul>
                  <li>
                    <h3>Python Programming</h3>
                    <p>
                      Skilled in using Python for data manipulation, analysis, and visualization with libraries like
                      NumPy, Pandas, and Matplotlib.
                    </p>
                  </li>
                  <li>
                    <h3>Statistics and Probability</h3>
                    <p>
                      Knowledge of descriptive and inferential statistics, enabling effective data analysis and insight
                      extraction.
                    </p>
                  </li>
                  <li>
                    <h3>Data Visualization</h3>
                    <p>
                      Expertise in crafting insightful visualizations using tools like Matplotlib and Seaborn.
                    </p>
                  </li>
                  <li>
                    <h3>Machine Learning</h3>
                    <p>
                      Experience building and applying machine learning models for tasks such as spam filtering and
                      targeted marketing.
                    </p>
                  </li>
                </ul>
              </section>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
    <Accordion.Header>Information Science</Accordion.Header>
  <Accordion.Body>
    <ul>
      <li>
        <h4>Information Technology</h4>
        <p>
          Solid foundation in information technology concepts, including
          database management, data communication network, networking, operating systems, system analysis and design, procedural programming, and web design
          and development,. Skilled in utilizing technology to organize,
          process, and disseminate information effectively.
        </p>
      </li>
      <li>
        <h4>E-Business</h4>
        <p>
          Familiar with e-business concepts and strategies, including
          electronic commerce. Capable of leveraging technology to enhance business
          operations and create value in digital environments.
        </p>
      </li>
      <li>
        <h4>Information Security</h4>
        <p>
          Understanding of information security principles and best
          practices, including data confidentiality, integrity, and
          availability. Implementing security measures to
          protect information assets from unauthorized access, disclosure,
          alteration, and destruction.
        </p>
      </li>
      <li>
        <h4>Legal and Ethical Aspects</h4>
        <p>
          Knowledgeable about legal and ethical considerations in
          information science, including copyright, intellectual property,
          privacy, and data protection laws. Committed to upholding
          professional ethics and ensuring ethical conduct in all
          information-related activities.
        </p>
      </li>
      <li>
        <h4>Philosophy and Critical Thinking</h4>
        <p>
          Proficient in applying philosophical and critical thinking
          principles to analyze complex problems, evaluate evidence, and
          formulate reasoned arguments. Capable of challenging assumptions
          and synthesizing diverse perspectives to arrive at informed
          conclusions.
        </p>
      </li>
      <li>
        <h4>Communication Skills</h4>
        <p>
          Excellent verbal and written communication skills, with the
          ability to convey information clearly, concisely, and
          persuasively.
        </p>
      </li>
      <li>
        <h4>Entrepreneurial and Work Skills</h4>
        <p>
          Possess entrepreneurial mindset and work skills essential for
          success in dynamic and competitive environments. Capable of
          identifying opportunities, taking initiative, and adapting to
          changing circumstances to achieve personal and organizational
          goals.
        </p>
      </li>
      <li>
        <h4>Infopreneurship</h4>
        <p>
          Understanding of infopreneurship concepts and strategies for
          creating, packaging, and monetizing information products and
          services. Proficient in leveraging information assets to
          generate value and create sustainable revenue streams.
        </p>
      </li>
    </ul>
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="3">
        <Accordion.Header>Technical Writing</Accordion.Header>
          <Accordion.Body>
            <p>
              Leveraging the "Technical Writing Essentials" course, I gained
              valuable insights into writing clear, concise, and accurate
              technical documents for diverse audiences. Key learnings include:
            </p>
            <ul>
              <li>Understanding target audience and tailoring content accordingly.</li>
              <li>Structuring documents logically and using effective headings and formatting.</li>
              <li>Creating visually appealing and informative tables, figures, and graphs.</li>
              <li>Emphasizing clarity, conciseness, and accuracy in writing style.</li>
              <li>Adhering to ethical and legal considerations in technical writing.</li>
            </ul>
            <p>
              By applying these principles, I am confident in creating
              high-quality technical documents that effectively communicate
              complex information to various audiences.
            </p>
          </Accordion.Body>
        </Accordion.Item>
<Accordion.Item eventKey="4">
  <Accordion.Header>Graphic Design</Accordion.Header>
  <Accordion.Body>
    <p>
      Proficient in graphic design principles and tools, with experience in creating visually appealing and professional designs for various purposes. Key highlights include:
    </p>
    <ul>
      <li>
        <h4>Logo Design:</h4>
        <p>
          Designed the logo for my personal website, incorporating elements that reflect the brand identity and vision.
        </p>
      </li>
      <li>
        <h4>Image Editing:</h4>
        <p>
          Utilized image editing software like Canva to enhance and manipulate images for web content and social media posts.
        </p>
      </li>
      <li>
        <h4>Project Graphics:</h4>
        <p>
          Created custom graphics and illustrations for each project card, contributing to a visually engaging presentation of portfolio items.
        </p>
      </li>
      <li>
        <h4>Favicon Design:</h4>
        <p>
          Designed the favicon icon for the website, ensuring brand consistency and easy recognition across browsers.
        </p>
      </li>
      <li>
        <h4>Design Tools:</h4>
        <p>
          Proficient in using design tools like Canva and currently familiarizing with Figma for collaborative design projects and prototyping.
        </p>
      </li>
    </ul>
  </Accordion.Body>
</Accordion.Item> 

          {/* Add similar structured Accordion Items for other sections */}
        </Accordion>
      </div>
    </section>
  );
};

export default Skills;
