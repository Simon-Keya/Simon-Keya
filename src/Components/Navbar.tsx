import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import '../styles/Navbar.scss';

// Define prop types for SocialMediaIcons
type SocialMediaIconsProps = {
  github: string;
  linkedin: string;
};

const SocialMediaIcons: React.FC<SocialMediaIconsProps> = ({ github, linkedin }) => {
  return (
    <div className="social-media-icons">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
        className="social-icon"
        style={{ marginRight: '2.5rem' }}
      >
        <AiFillGithub size="3rem" />
      </a>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
        className="social-icon"
        style={{ marginRight: '2.5rem' }}
      >
        <AiFillLinkedin size="3rem" />
      </a>
    </div>
  );
};

const CustomNavbar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  const githubLink = 'https://github.com/Simon-Keya';
  const linkedinLink = 'https://www.linkedin.com/in/simon-keya-9ab441237/';

  return (
    <Navbar
      expand="lg"
      className="bg-dark"
      variant="dark"
      expanded={expanded}
      onToggle={handleNavbarToggle}
      role="navigation"
      aria-label="Main Navigation"
    >
      <Container>
        {/* Brand Logo with Accessible Alternative Text */}
        <Navbar.Brand as={NavLink} to="/" aria-label="Simon Keya's Portfolio Home">
          <img
            src="/assets/images/logo.png"
            width="80"
            height="80"
            className="d-inline-block align-top"
            alt="Simon Keya's Portfolio Logo"
            loading="lazy"
          />
        </Navbar.Brand>

        {/* Responsive Navbar Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" aria-expanded={expanded} />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Navigation Links */}
          <Nav className="me-auto" as="ul">
            <Nav.Item as="li" className="me-4">
              <Nav.Link as={NavLink} to="/" aria-label="Navigate to Home">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="me-4">
              <Nav.Link as={NavLink} to="/about" aria-label="Navigate to About">
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="me-4">
              <Nav.Link as={NavLink} to="/skills" aria-label="Navigate to Skills">
                Skills
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="me-4">
              <Nav.Link as={NavLink} to="/projects" aria-label="Navigate to Projects">
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link as={NavLink} to="/contact" aria-label="Navigate to Contact">
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>

          {/* Social Media Links */}
          <Navbar.Collapse className="justify-content-end">
            <SocialMediaIcons linkedin={linkedinLink} github={githubLink} />
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
