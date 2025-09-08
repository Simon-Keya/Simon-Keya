import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet'; // For managing meta tags
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
        <meta property="og:url" content="https://simon-keya.vercel.app/about" />
      </Helmet>

      <div className="container mt-5">
        <h2 className="text-center mb-4">About Me</h2>

        <section className="mb-5">
          <p className="lead">
            Driven by an insatiable passion for innovation and problem-solving, I thrive on embracing fresh challenges
            as an enthusiastic learner. Balancing the roles of a dedicated Software Engineer and an aspiring
            Artificial Intelligence Engineer, my journey is fueled by curiosity and a commitment to excellence.
          </p>
          <p>
            With two years of hands-on experience, I have immersed myself in crafting dynamic software applications and
            exploring the captivating realm of Artificial Intelligence. Each project showcases my relentless pursuit of
            perfection and my keen eye for emerging technologies.
          </p>
        </section>

        {/* Personality Section */}
        <section className="mb-5">
          <h3>Personality Type</h3>
          <p>
            I identify as an <strong>Omnivert</strong>, a dynamic personality type that balances introversion and
            extroversion. This means I can adapt to social environments, thriving both in solitude and in the
            company of others, depending on the situation.
          </p>
          <p>
            My MBTI personality types include:
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://www.16personalities.com/entj-personality"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>ENTJ</strong>
                </a>
                - Natural leaders with a focus on efficiency, strategy, and long-term vision.
              </li>
              <li>
                <a
                  href="https://www.16personalities.com/intj-personality"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>INTJ</strong>
                </a>
                - Strategic thinkers with a passion for innovation, logical planning, and achieving goals.
              </li>
              <li>
                <a
                  href="https://www.16personalities.com/entp-personality"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>ENTP</strong>
                </a>
                - Creative and energetic individuals with a knack for problem-solving and debating ideas.
              </li>
            </ul>
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
            <li><a href="https://barbage-technologies.vercel.app">Technology</a></li>
            <li><a href="https://keya-simon.vercel.app/psychology">Psychology</a></li>
            <li><a href="https://keyart.vercel.app/">Art</a></li>
            <li><a href="https://keya-simon.vercel.app/self-improvement">Self-Improvement</a></li>
            <li><a href="https://keya-simon.vercel.app/blog">Knowledge</a></li>
            <li><a href="https://www.youtube.com/watch?v=iNSs9Vmo3WA">Dance</a></li>
            <li>Watching Podasts</li>
            <li>Listening to music</li>
          </ul>
        </section>

        <section className="mb-5">
  <h3>Favorite Audiobooks/Reads</h3>
  <ul className="list-unstyled">
    <li>
      <a
        href="https://www.pdfdrive.com/the-power-of-your-subconscious-mind-joseph-murphy-e15820292.html"
        target="_blank"
        rel="noopener noreferrer"
        download
        aria-label="Download The Power of Your Subconscious Mind by Joseph Murphy"
      >
        <em>"The Power of Your Subconscious Mind"</em> by Joseph Murphy
      </a>
    </li>
    <li>
      <a
        href="https://www.pdfdrive.com/the-laws-of-human-nature-robert-greene-e185547271.html"
        target="_blank"
        rel="noopener noreferrer"
        download
        aria-label="Download The Laws of Human Nature by Robert Greene"
      >
        <em>"Laws of Human Nature"</em> by Robert Greene
      </a>
    </li>
    <li>
      <a
        href="https://www.pdfdrive.com/the-8020-principle-by-richard-koch-e15830922.html"
        target="_blank"
        rel="noopener noreferrer"
        download
        aria-label="Download The 80/20 Principle by Richard Koch"
      >
        <em>"The 80/20 Principle"</em> by Richard Koch
      </a>
    </li>
    <li>
      <a
        href="https://www.pdfdrive.com/atomic-habits-by-james-clear-e191214830.html"
        target="_blank"
        rel="noopener noreferrer"
        download
        aria-label="Download Atomic Habits by James Clear"
      >
        <em>"Atomic Habits"</em> by James Clear
      </a>
    </li>
    <li>
      <a
        href="https://www.pdfdrive.com/the-subtle-art-of-not-giving-a-fuck-mark-manson-e181644823.html"
        target="_blank"
        rel="noopener noreferrer"
        download
        aria-label="Download The Subtle Art of Not Giving A Fuck by Mark Manson"
      >
        <em>"The Subtle Art of Not Giving A Fuck"</em> by Mark Manson
      </a>
    </li>
    <li>
      <a
        href="https://www.pdfdrive.com/thinking-fast-and-slow-daniel-kahneman-e15820144.html"
        target="_blank"
        rel="noopener noreferrer"
        download
        aria-label="Download Thinking, Fast and Slow by Daniel Kahneman"
      >
        <em>"Thinking, Fast and Slow"</em> by Daniel Kahneman
      </a>
    </li>
    <li>
      <a
        href="https://www.pdfdrive.com/meditations-by-marcus-aurelius-e17015526.html"
        target="_blank"
        rel="noopener noreferrer"
        download
        aria-label="Download Meditations by Marcus Aurelius"
      >
        <em>"Meditations"</em> by Marcus Aurelius
      </a>
    </li>
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
            <li>Diploma in Databases and SQL</li>
            <li>Advanced Diploma in Computer Networking</li>
            <li>Diploma in Educational Psychology</li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default AboutMe;
