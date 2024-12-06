import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { HiOutlineDownload } from 'react-icons/hi'; // Import HiOutlineDownload icon

const Contact: React.FC = () => {
  return (
    <section className="bg-gray-100 py-5" role="contentinfo" aria-labelledby="contact-heading">
      <Container>
        {/* Section Heading */}
        <header className="mb-4 text-center">
          <h2
            id="contact-heading"
            className="text-3xl font-extrabold tracking-tight text-gray-900"
          >
            Contact Me
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            If you have any inquiries or concerns, feel free to get in touch. I'm open to new opportunities and collaborations. Let's create something amazing together!
          </p>
        </header>

        {/* Contact Information */}
        <Row className="g-4">
          <Col md={3} as="section" aria-labelledby="email-info">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 id="email-info" className="text-xl font-semibold mb-2">
                Email
              </h3>
              <a
                href="mailto:simonkeya78@gmail.com"
                className="text-gray-500 underline hover:text-gray-700"
                aria-label="Send an email to simonkeya78@gmail.com"
              >
                simonkeya78@gmail.com
              </a>
            </div>
          </Col>

          <Col md={3} as="section" aria-labelledby="phone-info">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 id="phone-info" className="text-xl font-semibold mb-2">
                Phone
              </h3>
              <a
                href="tel:+254790448452"
                className="text-gray-500 underline hover:text-gray-700"
                aria-label="Call (0790) 448-452"
              >
                (0790) 448-452
              </a>
            </div>
          </Col>

          <Col md={3} as="section" aria-labelledby="address-info">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 id="address-info" className="text-xl font-semibold mb-2">
                Address
              </h3>
              <p className="text-gray-500" aria-label="Address: Nairobi, Kenya">
                Nairobi, Kenya
              </p>
            </div>
          </Col>

          <Col md={3} as="section" aria-labelledby="social-media-info">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 id="social-media-info" className="text-xl font-semibold mb-2">
                Social Media
              </h3>
              <div className="social-media-links">
                <Button
                  variant="secondary"
                  className="mr-2 mb-2"
                  aria-label="Visit Instagram Profile"
                  onClick={() =>
                    window.open("https://www.instagram.com/symon_keya/", "_blank")
                  }
                >
                  Instagram
                </Button>
                <Button
                  variant="secondary"
                  className="mr-2 mb-2"
                  aria-label="Visit Twitter Profile"
                  onClick={() => window.open("https://www.twitter.com/SymonC137", "_blank")}
                >
                  Twitter
                </Button>
                <Button
                  variant="secondary"
                  aria-label="Visit LinkedIn Profile"
                  onClick={() => window.open("https://linkedin.com/in/simon-keya/", "_blank")}
                >
                  LinkedIn
                </Button>
                <Button
                  variant="secondary"
                  className="ml-2"
                  aria-label="Visit GitHub Profile"
                  onClick={() => window.open("https://www.github.com/Simon-Keya", "_blank")}
                >
                  GitHub
                </Button>
              </div>
            </div>
          </Col>
        </Row>

        {/* Resume Download */}
        <div className="text-center mt-4">
          <a
            href="/assets/files/Simon Keya's resume.pdf"
            download="Simon-Keya-resume.pdf"
            className="text-gray-900 hover:text-gray-600 font-semibold flex flex-column justify-center align-items-center"
            aria-label="Download Simon Keya's Resume as a PDF"
          >
            <HiOutlineDownload size="1.5rem" aria-hidden="true" />
            <span className="ml-2 text-xl">Download Resume</span>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
