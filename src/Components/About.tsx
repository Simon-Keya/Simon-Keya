import React from 'react';
import { Helmet } from 'react-helmet'; // For managing meta tags
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/About.scss';

const AboutMe = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>About Simon Keya | Software Engineer,Computer Scientist, Psychologist & Entreprenuer</title>
        <meta
          name="description"
          content="Discover Simon Keya's journey in software development, artificial intelligence, education, certifications, and interests."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://simon-keya.vercel.app/about" />
        <meta property="og:title" content="About Simon Keya" />
        <meta
          property="og:description"
          content="Learn about Simon Keya's professional experience, educational background, and personal interests."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/about" />
      </Helmet>

      <div className="container mt-5">
        <h2 className="text-center mb-4">About Me</h2>

        <section className="mb-5">
          <p className="lead">
            Driven by an insatiable passion for innovation and problem-solving, I thrive on embracing fresh challenges
            as an enthusiastic learner. Balancing the roles of a dedicated Software Developer and an aspiring
            Artificial Intelligence Engineer, my journey is fueled by curiosity and a commitment to excellence.
          </p>
          <p>
            With two years of hands-on experience, I have immersed myself in crafting dynamic software applications and
            exploring the captivating realm of Artificial Intelligence. Each project showcases my relentless pursuit of
            perfection and my keen eye for emerging technologies.
          </p>
        </section>

        <section className="mb-5">
          <h3>Education</h3>
          <p>Bachelor of Science in Information Science, Maasai Mara University, Narok, Kenya.</p>
          <h4>Diplomas</h4>
          <ul className="list-unstyled">
            <li>Diploma in Data Science (Alison Courses)</li>
            <li>Diploma in Python Programming (Alison Courses)</li>
            <li>Diploma in DevOps Engineering (Alison Courses)</li>
            <li>Diploma in Psychology (Alison Courses)</li>
            <li>Diploma in Computer Networking (Alison Courses)</li>
            <li>Diploma in CyberSecurity (Alison Courses)</li>
          </ul>
        </section>

        <section className="mb-5">
          <h3>Certifications</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Platform</th>
                <th>Certificates</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Wildlearner</td>
                <td>JavaScript, Python, HTML, CSS, React, Express.js, Redux, Node.js, NumPy, GitHub</td>
              </tr>
              <tr>
                <td>Alison Courses</td>
                <td>
                  Python Certification, React Native, Clinical Psychology, Italian, Django Fundamentals, Google Cloud
                  Computing Foundation, Technical Writing Essentials, Psychology 101
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mb-5">
          <h3>Experience</h3>
          <p>Freelancing Software Engineer</p>
        </section>

        <section className="mb-5">
          <h3>Interests & Hobbies</h3>
          <ul className="list-unstyled">
            <li><a href="https://keya-simon.vercel.app/technology">Technology</a></li>
            <li><a href="https://keya-simon.vercel.app/psychology">Psychology</a></li>
            <li><a href="https://keyart.vercel.app/">Art</a></li>
            <li><a href="https://keya-simon.vercel.app/self-improvement">Self-Improvement</a></li>
            <li><a href="https://keya-simon.vercel.app/blog">Knowledge</a></li>
          </ul>
        </section>

        <section className="mb-5">
          <h3>Favorite Audiobooks/Reads</h3>
          <ul className="list-unstyled">
            <li><em>"The Power of Your Subconscious Mind"</em> by Joseph Murphy</li>
            <li><em>"Laws of Human Nature"</em> by Robert Greene</li>
            <li><em>"The 80/20 Principle"</em> by Richard Coch</li>
            <li><em>"Atomic Habits"</em> by James Clear</li>
          </ul>
        </section>

        <section className="mb-5">
          <h3>Philosophical Quotes</h3>
          <ul className="list-unstyled">
            <li>"Time stays long enough for anyone who will use it." — Leonardo da Vinci</li>
            <li>"The task of the modern educator is not to cut down jungles, but to irrigate deserts." — C.S. Lewis</li>
            <li>"The important thing is not to stop questioning. Curiosity has its own reason for existence." — Albert Einstein</li>
            <li>"Learning never exhausts the mind." — Leonardo da Vinci</li>
          </ul>
        </section>

        <section>
          <h3>Ongoing Studies</h3>
          <ul className="list-unstyled">
            <li>Diploma in Artificial Intelligence</li>
            <li>Advanced Diploma in Computer Networking</li>
            <li>Diploma in Artificial Intelligence ISO Maintenance</li>
            <li>French Certificate</li>
            <li>Diploma in Cognitive Therapy</li>
            <li>Diploma in Food Techniques and Skills</li>
            <li>Diploma in Machine Learning</li>
            <li>Advanced Diploma in Python Programming for the Novice to Expert</li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default AboutMe;
