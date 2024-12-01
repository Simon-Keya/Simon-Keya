import React from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';

import { HiOutlineDownload } from 'react-icons/hi'; // Import HiOutlineDownload icon

const Contact: React.FC = () => {
  return (
    <section className="bg-gray-100 py-5">
      <Container>
        <div className="mb-4 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Contact Me
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            If you have any inquiries or concerns, feel free to get in touch with me. I'm open to new opportunities and collaborations. Let's create something amazing together!
          </p>
        </div>
        <Row className="g-4">
          <Col md={3}>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-500">simonkeya78@gmail.com</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-500">(0790) 448-452</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-500">Nairobi, Kenya</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Social Media</h3>
              <div className="social-media-links">
                <Button
                  variant="secondary"
                  className="mr-2 mb-2"
                  onClick={() => window.open("https://www.instagram.com/symon_keya/", "_blank")}
                >
                  Instagram
                </Button>
                <Button
                  variant="secondary"
                  className="mr-2 mb-2"
                  onClick={() => window.open("https://www.twitter.com/SymonC137", "_blank")}
                >
                  Twitter
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => window.open("https://linkedin.com/in/simon-keya/", "_blank")}
                >
                  LinkedIn
                </Button>
                <Button
                  variant="secondary"
                  className="ml-2"
                  onClick={() => window.open("https://www.github.com/Simon-Keya", "_blank")}
                >
                  GitHub
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <div className="text-center mt-4">
          <a href="/assets/files/Simon Keya's resume.pdf" download="Simon-Keya-resume.pdf">
            <HiOutlineDownload size="1.5rem" /> {/* Added icon and download attribute */}
            <h4 className="text-xl font-semibold">Resume</h4>
              
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Contact;