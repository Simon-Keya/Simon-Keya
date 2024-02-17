import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.scss';

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
