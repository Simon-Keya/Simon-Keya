import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Import social media icons
import { IconProp } from '@fortawesome/fontawesome-svg-core'; // Import IconProp directly
import '../styles/Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          {/* LinkedIn */}
          <a href="https://linkedin.com/in/simon-keya" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin as IconProp} />
          </a>
          {/* GitHub */}
          <a href="https://github.com/Simon-Keya" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub as IconProp} />
          </a>
          {/* Twitter */}
          <a href="https://twitter.com/SymonC137" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter as IconProp} />
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/symon_keya/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram as IconProp} />
          </a>
        </div>
        <div className="additional-info">
          <p>&copy; {new Date().getFullYear()} Simon Keya. All rights reserved.</p>
          <p>Based in Nairobi, Kenya</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
