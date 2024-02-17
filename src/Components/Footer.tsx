// components/Footer.tsx
import React from 'react';
import '../styles/Footer.scss'; 

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://linkedin.com/in/simon-keya" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/Simon-Keya" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {/* Add more social media links as needed */}
        </div>
        <div className="additional-info">
          <p>&copy; {new Date().getFullYear()} Simon Keya. All rights reserved.</p>
          <p>Based in Narok & Nairobi, Kenya</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
