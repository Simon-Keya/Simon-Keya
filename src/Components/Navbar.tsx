import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import '../styles/Navbar.scss';

const SocialMediaIcons = ({ github, linkedin }: { github: string; linkedin: string }) => {
  return (
    <div className="social-media-icons">
      <a href={github} target="_blank" rel="noopener noreferrer" style={{ marginRight: '2.5rem' }}>
        <AiFillGithub size="3rem" />
      </a>
      <a href={linkedin} target="_blank" rel="noopener noreferrer" style={{ marginRight: '2.5rem' }}>
        <AiFillLinkedin size="3rem" />
      </a>
    </div>
  );
};
const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  const githubLink = "https://github.com/Simon-Keya";
  const linkedinLink = "https://www.linkedin.com/in/simon-keya-9ab441237/";

  return (
    <Navbar expand="lg" className="bg-dark" variant="dark" expanded={expanded} onToggle={handleNavbarToggle}>
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img
            src="/assets/images/logo.png"
            width="80"
            height="80"
            className="d-inline-block align-top"
            alt="Simon Keya's Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item className="me-4">
              <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item className="me-4">
              <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item className="me-4">
              <Nav.Link as={NavLink} to="/skills">Skills</Nav.Link>
            </Nav.Item>
            <Nav.Item className="me-4">
              <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
          <Nav className="mr-auto">
              <SocialMediaIcons  linkedin={linkedinLink} github={githubLink} />
            </Nav>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;