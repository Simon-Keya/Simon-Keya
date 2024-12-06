import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCode, faLaptopCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head'; // Use this for SEO meta tags in Next.js
import '../styles/Home.scss';

const Home = () => {
  const sections = [
    {
      title: 'About',
      description: 'Learn more about me and my background.',
    },
    {
      title: 'Skills',
      description: 'Discover the skills I possess and areas of expertise.',
    },
    {
      title: 'Projects',
      description: 'Explore the projects I\'ve worked on, including demos and descriptions.',
    },
    {
      title: 'Contact',
      description: 'Reach out to me for collaborations, inquiries, or just to say hello!',
    },
  ];

  const [currentDescription, setCurrentDescription] = useState('');

  const handleIconClick = (sectionTitle) => {
    const description = sections.find((section) => section.title === sectionTitle)?.description;
    setCurrentDescription(description || '');
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Simon Keya | Software Engineer, Computer Scientist, Psychologist</title>
        <meta name="description" content="Explore Simon Keya's portfolio: skills, projects, and professional journey as a Software Engineer, Computer Scientist, and Psychologist." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://simon-keya.vercel.app/" />
        <meta property="og:title" content="Simon Keya's Portfolio" />
        <meta property="og:description" content="Discover Simon Keya's work and expertise in software engineering, computer science, psychology, and entrepreneurship." />
        <meta property="og:image" content="/assets/images/Home.png" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="home-container">
        <div className="image-container">
          <img
            src="/assets/images/Home.png"
            alt="Simon Keya profile image"
            width="400"
            height="400"
            loading="lazy"
          />
        </div>
        <main className="home-content">
          <header className="home-header">
            <h1 className="home-title">Simon Keya</h1>
            <p className="home-subtitle">Software Engineer</p>
            <p className="home-subtitle">Computer Scientist</p>
            <p className="home-subtitle">Psychologist</p>
            <p className="home-subtitle">Entrepreneur</p>
          </header>

          <p className="home-text">
            Welcome to my website! Here, you'll find an interactive showcase of my skills, projects, and experiences.
            Feel free to explore and discover my work.
            <br />
            Here are some sections you might find interesting:
          </p>

          <nav className="home-highlights" aria-label="Site sections">
            {sections.map((section) => (
              <a
                href={`#${section.title.toLowerCase()}`}
                className="home-highlight"
                key={section.title}
                onClick={() => handleIconClick(section.title)}
                aria-label={`Go to ${section.title} section`}
              >
                <FontAwesomeIcon
                  icon={
                    section.title === 'About'
                      ? faUserCircle
                      : section.title === 'Skills'
                      ? faCode
                      : section.title === 'Projects'
                      ? faLaptopCode
                      : faEnvelope
                  }
                />
                <span>{section.title}</span>
              </a>
            ))}
          </nav>
        </main>

        {currentDescription && (
          <section className="description-container" aria-live="polite">
            <p>{currentDescription}</p>
          </section>
        )}
      </div>
    </>
  );
};

export default Home;
