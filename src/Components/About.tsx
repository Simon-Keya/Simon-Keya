import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/About.scss';

const AboutMe = () => {
  return (
    <div className="container">
      <h2 className="title">About</h2>
      <section>
        <p>
          Driven by an insatiable passion for innovation and problem-solving, I thrive on embracing fresh challenges as an enthusiastic learner. Balancing the roles of a dedicated web developer and an aspiring data scientist, my journey is fueled by curiosity and a commitment to excellence.
          With a year of hands-on experience, I've immersed myself in crafting dynamic web applications and exploring the captivating realm of data science. Each project undertaken showcases my relentless pursuit of perfection and a keen eye for emerging technologies.
        </p>
        <p>
          In web development, I navigate evolving trends with precision, constantly refining my skills and seizing every challenge as an opportunity for growth. As a data scientist, I revel in deciphering complex datasets, extracting valuable insights, and shaping them into narratives that drive informed decision-making.
        </p>
      </section>
      <section>
        <h2>Education</h2>
        <p>Bachelor of Science in Information Science from Maasai Mara University, Narok, Kenya.</p>
        <h3>Diplomas</h3>
        <ul>
          <li>Diploma in Data Science (Alison Courses)</li>
          <li>Diploma in Python Programming(Alison Courses)</li>
          <li>Diploma in DevOps engineering (Alison Courses)</li>
          <li>Diploma in Psychology (Alison Courses)</li>
          <li>Diploma in Computer Networking (Alison Courses)</li>
          <li>Diploma in CyberSecurity (Alison Courses)</li>
        </ul>
        <h3>Certifications</h3>
        <table className="certification-table">
          <thead>
            <tr>
              <th>Platform</th>
              <th>Certificate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wildlearner</td>
              <td>
                JavaScript, Python, HTML, CSS, React, Express.js, Redux, Node.js, NumPy, GitHub
              </td>
            </tr>
            <tr>
              <td>Alison Courses</td>
              <td>Python Certification, React Native, Clinica Psychology, Italian, Django Fundamentals, Google Cloud Computing Foundation, Technical Writing Essentials, Psychology 101, </td>
            </tr>
          </tbody>
        </table>
        <p>Check out my LinkedIn profile for the credentials.</p>
      </section>
      <section>
        <h2>Experience</h2>
        <p>Freelancing Software Engineer.</p>
      </section>
      <section>
        <h2>Interests & Hobbies</h2>
        <ul>
        <li><a href="https://keya-simon.vercel.app/">Technology</a></li>
        <li><a href="https://keya-simon.vercel.app/">Psychology</a></li>
          <li><a href="https://keyart.vercel.app/">Art</a></li>
          <li><a href="https://keya-simon.vercel.app/">Self Improvememnt</a></li>
          <li><a href="https://keya-simon.vercel.app/">Knowledge</a></li>
          
        </ul>
      </section>
      <section>
        <h2>Favorite Audio books/Reads</h2>
        <ul>
          <li>"The Power of Your Subconscious Mind" by Joseph Murphy</li>
          <li>"Laws of Human Nature" by Robert Greene</li>
          <li>"The 80/20 Principle" by Richard Coch</li>
          <li>"Atomic Habits" by James Clear</li>
        </ul>
        <p>Constantly exploring new books across genres.</p>
      </section>
      <section>
        <h2>Philosophical Quotes</h2>
        <ul>
          <li>"Time stays long enough for anyone who will use it." — Leonardo da Vinci</li>
          <li>"The task of the modern educator is not to cut down jungles, but to irrigate deserts." — C.S. Lewis</li>
          <li>"The important thing is not to stop questioning. Curiosity has its own reason for existence." — Albert Einstein</li>
          <li>"Learning never exhausts the mind." — Leonardo da Vinci</li>
        </ul>
      </section>
      <section>
        <h2>Ongoing Studies</h2>
        <ul>
          <li>Diploma in Computer Networking</li>
          <li>Certification in Linux and Shell script- beginner to advanced</li>
          <li>Diploma in Machine learning</li>
          <li>Advanced Diploma in Python Programming for the Novice to Expert </li>
        </ul>
      </section>
    </div>
  );
}

export default AboutMe;