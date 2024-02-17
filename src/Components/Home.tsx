import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../styles/Home.scss';

const Home = () => (
  <div className="container">
    <h1 className="title">Home</h1>
    <div className="content">
    <img 
        className="image img-fluid" /* Add img-fluid class for fluid scaling */
        src="/assets/images/image.jpg" 
        alt="Home" 
        width="100" 
        height="100" 
      />
      <div className="text">
        <p className="subtitle">Welcome to Simon Keya's website! This website showcases my skills, projects, and experiences in a sleek and interactive manner. Feel free to explore!
          <br />
          <br />
          Here are some sections you might find interesting:
          <br />
          <strong>About:</strong> Learn more about me and my background.
          <br />
          <strong>Skills:</strong> Discover the skills I possess and areas of expertise.
          <br />
          <strong>Projects:</strong> Explore the projects I've worked on, including demos and descriptions.
          <br />
          <strong>Contact:</strong> Reach out to me for collaborations, inquiries, or just to say hello!
        </p>
      </div>
    </div>
  </div>
);

export default Home;
