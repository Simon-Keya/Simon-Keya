import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCode, faLaptopCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/Home.scss';

const Home = () => {
  // Define sections and descriptions (update text as needed)
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

  // State to manage currently displayed description
  const [currentDescription, setCurrentDescription] = useState('');

  const handleIconClick = (sectionTitle: string) => {
    const description = sections.find((section) => section.title === sectionTitle)?.description;
    setCurrentDescription(description || ''); // Set empty string if description not found
  };

  return (
    <div className="home-container">
      <div className="image-container">
          <img src="/assets/images/Home.png" alt="Profile" />
        </div>
      <main className="home-content">
      <header className="home-header">
        <h1 className="home-title">Simon Keya</h1>
        <p className="home-subtitle">Software Developer</p>
      </header>
        
     <p className="home-text">
          Welcome to my website! Here, you'll find an interactive showcase of my skills, projects, and experiences. Feel
          free to explore and discover my work.
          <p>
          <br />
          Here are some sections you might find interesting:
          </p>
        </p>
        <div className="home-highlights">
          {sections.map((section) => (
            <a
              href={`#${section.title.toLowerCase()}`} // Update links based on your sections
              className="home-highlight"
              key={section.title}
              onClick={() => handleIconClick(section.title)}
            >
              <FontAwesomeIcon icon={
                section.title === 'About' ? faUserCircle :
                  section.title === 'Skills' ? faCode :
                    section.title === 'Projects' ? faLaptopCode :
                      faEnvelope
              } />
              <span>{section.title}</span>
            </a>
          ))}
        </div>
      </main>
      {currentDescription && (
        <div className="description-container">
          <p>{currentDescription}</p>
        </div>
      )}
    </div>
  );
};

export default Home;