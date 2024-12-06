import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Import social media icons
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import '../styles/Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer" role="contentinfo" aria-labelledby="footer-heading">
      <div className="footer-content">
        <h2 id="footer-heading" className="sr-only">
          Footer Section
        </h2>
        <div className="social-links" aria-label="Social Media Links">
          <ul className="social-icons-list">
            <li>
              <a
                href="https://linkedin.com/in/simon-keya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn - Simon Keya"
                title="LinkedIn - Simon Keya"
              >
                <FontAwesomeIcon icon={faLinkedin as IconProp} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Simon-Keya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub - Simon Keya"
                title="GitHub - Simon Keya"
              >
                <FontAwesomeIcon icon={faGithub as IconProp} />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/SymonC137"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter - Simon Keya"
                title="Twitter - Simon Keya"
              >
                <FontAwesomeIcon icon={faTwitter as IconProp} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/symon_keya/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram - Simon Keya"
                title="Instagram - Simon Keya"
              >
                <FontAwesomeIcon icon={faInstagram as IconProp} />
              </a>
            </li>
          </ul>
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
