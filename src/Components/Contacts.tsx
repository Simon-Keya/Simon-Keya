import React, { useState } from 'react';
import { HiOutlineDownload, HiMail } from 'react-icons/hi';
import '../styles/Contacts.scss'; // Import custom styles for contact section

const Contact: React.FC = () => {
  // Define state for contact form (optional)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Implement form submission logic here (e.g., send email, display success message)
    console.log('Form submitted:', { name, email, message }); // Example logging
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>
        I'm open to new opportunities and collaborations. Feel free to reach out to me via LinkedIn or connect with me on GitHub. Let's create something amazing together!
      </p>
      <div className="contact-links">
        <a href="/assets/files/Simon-Keya-resume.pdf" download="Simon-Keya-resume.pdf">
          <HiOutlineDownload size="1.5rem" /> Resume
        </a>
        <a href="https://www.linkedin.com/in/simon-keya-9ab441237/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/Simon-Keya" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>

      {/* Contact form (optional) */}
      <h2>Get in Touch</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <textarea
            id="name"
            name="name"
            rows={1}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <textarea
            id="email"
            name="email"
            rows={1}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={7}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">
          <HiMail size="1.5rem" /> Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;