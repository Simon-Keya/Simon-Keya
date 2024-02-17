import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Contact from './Components/Contacts';
import Skills from './Components/Skills';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import  './styles/Navbar.scss';
import  './styles/Footer.scss';
import  './styles/Home.scss';
import './styles/About.scss';
import './styles/Projects.scss';
import './styles/Contacts.scss';
import './styles/Skills.scss';

 
function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
