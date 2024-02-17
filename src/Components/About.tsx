// components/AboutMe.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../styles/About.scss';

const AboutMe = () => {
  return (
    <div className="container">
      <h1 className="title">About</h1>
      <section>
        <p>Driven by an insatiable passion for innovation and problem-solving, I thrive on embracing fresh challenges as an enthusiastic learner. Balancing the roles of a dedicated web developer and an aspiring data scientist, my journey is fueled by curiosity and a commitment to excellence.

        With a year of hands-on experience, I've immersed myself in crafting dynamic web applications and exploring the captivating realm of data science. Each project undertaken showcases my relentless pursuit of perfection and a keen eye for emerging technologies.</p>

        <p>In web development, I navigate evolving trends with precision, constantly refining my skills and seizing every challenge as an opportunity for growth. As a data scientist, I revel in deciphering complex datasets, extracting valuable insights, and shaping them into narratives that drive informed decision-making.</p>
      </section>
      <section>
        <h2>Highlighted Projects</h2>
        <ul>
          <li>Internet Service Provider Prototype: Tech Stack: React Bootstrap (JavaScript), Node.js, Express.js, MongoDB.</li>
          <li>Blog Website: Tech Stack: Django (Python), PostgreSQL (Database), TypeScript, React (Client).</li>
          <li>Email Spam Classifier: Tech Stack: Jupyter Notebook(Python), Anaconda.</li>
          <li>Portfolio Website Prototype: Tech Stack: TypeScript, React, Bootstrap (Sass).</li>
          <li>Task Management System API: Tech Stack: FastAPI (Python), PostgreSQL, Swagger UI.</li>
          <li>E-commerce API: Tech Stack: FastAPI (Python), PostgreSQL, Swagger UI. Also worked on e-commerce client: React, Bootstrap, TypeScript, Sass.</li>
        </ul>
      </section>
      <section>
        <h2>Certifications</h2>
        <ul>
          <li>Wildlearner.com Certificates: JavaScript, Python, HTML, CSS, React, Express.js, Redux, Node.js, NumPy, GitHub.</li>
          <li>Alison Courses : Python Certification. Diploma in Data Science. Technical Writing Essentials Certification </li>
        </ul>
        <p>Check out my LinkedIn profile for the credentials.</p>
      </section>
      <section>
        <h2>Education</h2>
        <p>Bachelor of Science in Information Science from Maasai Mara University, Narok, Kenya.</p>
      </section>
      <section>
        <h2>Experience</h2>
        <p>Freelancing Web Developer and Data Scientist.</p>
      </section>
      <section>
        <h2>Hobbies</h2>
        <p>Art(Drawing & painting), dancing, learning, cooking, gardening, introprospecting, mental spurring, hiking and exercise. Enjoy watching podcasts, awesome movies $ series, and listening to music. Always curious and creating.</p>
      </section>
      <section>
        <h2>Favorite Audio books/Reads</h2>
        <ul>
          <li>"The Power of Your Subconscious Mind" by Joseph Murphy</li>
          <li>"Laws of Human Nature" by Robert Greene</li>
          <li>"The 80/20 Principle" by Richard Coch</li>
          <li>"Atomic Habits" by James Clear</li>
          <li>"Do It Today" by Darius Foroux</li>
        </ul>
        <p>Constantly exploring new books across genres.</p>
      </section>
      <section>
        <h2>Philosophical Quotes</h2>
        <ul>
          <li>"The task of the modern educator is not to cut down jungles, but to irrigate deserts." — C.S. Lewis</li>
          <li>"The important thing is not to stop questioning. Curiosity has its own reason for existence." — Albert Einstein</li>
          <li>"Learning never exhausts the mind." — Leonardo da Vinci</li>
          <li>“Only the pure in heart can make good soup.” — Ludwig van Beethoven</li>
          <li>"Time stays long enough for anyone who will use it." — Leonardo da Vinci</li>
          <li>"Thought constitutes the greatness of man. Man is a reed, the feeblest thing in nature, but he is a thinking reed." — Blaise Pascal</li>
        </ul>
      </section>
      <section>
        <h2>Ongoing Studies</h2>
        <ul>
          <li>Diploma in Python</li>
          <li>Diploma in Machine learning</li>
          <li>Google Cloud Computing Certification</li>
        </ul>
      </section>
    </div>
  );
}

export default AboutMe;
