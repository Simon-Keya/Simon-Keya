import React from 'react';
import { HiOutlineDownload } from 'react-icons/hi';
import '../styles/Contacts.scss'; 

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>
        I'm open to new opportunities and collaborations. Feel free to reach out to me via LinkedIn or
        connect with me on GitHub. Let's create something amazing together!
      </p>
      <div className="contact-links">
      <a href="/assets/files/Simon Keya's resume.pdf" download="Simon Keya's resume.pdf">
          <HiOutlineDownload size="1.5rem" /> Resume
        </a>
        <a href="https://www.linkedin.com/in/simon-keya-9ab441237/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/Simon-Keya" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      {/* You might also add a contact form here */}
    </section>
  );
};

export default Contact;