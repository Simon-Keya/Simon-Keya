'use client'

import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

// Section data for navigation
const sections = [
  { id: 'hero', label: 'Home', component: Hero },
  { id: 'about', label: 'About', component: About },
  { id: 'skills', label: 'Skills', component: Skills },
  { id: 'projects', label: 'Projects', component: Projects },
  { id: 'contact', label: 'Contact', component: Contact },
]

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSection, setCurrentSection] = useState(0)
  const [isAtBottom, setIsAtBottom] = useState(false)
  const { scrollY } = useScroll()

  // Handle scroll visibility and current section detection
  useMotionValueEvent(scrollY, "change", (latest) => {
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    
    // Show scroll-to-top button after scrolling down 300px
    setIsVisible(latest > 300)
    
    // Check if we're at the bottom of the page
    setIsAtBottom(latest + windowHeight >= documentHeight - 100)
    
    // Determine current section based on scroll position
    const sectionHeight = documentHeight / sections.length
    const newSection = Math.min(
      Math.floor(latest / sectionHeight),
      sections.length - 1
    )
    setCurrentSection(newSection)
  })

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Scroll to specific section
  const scrollToSection = (sectionIndex: number) => {
    const targetElement = document.getElementById(sections[sectionIndex].id)
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  // Navigate to next section
  const scrollToNext = () => {
    if (currentSection < sections.length - 1) {
      scrollToSection(currentSection + 1)
    }
  }

  return (
    <>
      {/* Section Components with IDs */}
      <section id="hero" className="relative">
        <Hero />
      </section>
      
      <section id="about" className="relative">
        <About />
      </section>
      
      <section id="skills" className="relative">
        <Skills />
      </section>
      
      <section id="projects" className="relative">
        <Projects />
      </section>
      
      <section id="contact" className="relative">
        <Contact />
      </section>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 origin-left z-50"
        style={{
          scaleX: useScroll().scrollYProgress
        }}
      />

      {/* Section Navigation Dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-3">
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            onClick={() => scrollToSection(index)}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 group relative ${
              currentSection === index
                ? 'bg-blue-500 border-blue-500 scale-125'
                : 'bg-transparent border-gray-400 hover:border-blue-400 hover:scale-110'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to ${section.label} section`}
          >
            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: -10 }}
              className="absolute right-full top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-2 py-1 rounded text-sm font-medium whitespace-nowrap pointer-events-none"
            >
              {section.label}
            </motion.div>
          </motion.button>
        ))}
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <ChevronUpIcon className="w-6 h-6 group-hover:animate-bounce" />
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-blue-600 opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-300" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Scroll to Next Section Button (shows when not at bottom) */}
      <AnimatePresence>
        {!isAtBottom && currentSection < sections.length - 1 && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1, y: 2 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToNext}
            className="fixed bottom-6 left-6 z-40 p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group lg:hidden"
            aria-label={`Go to ${sections[currentSection + 1]?.label} section`}
          >
            <ChevronDownIcon className="w-6 h-6 group-hover:animate-bounce" />
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-purple-600 opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-300" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Keyboard Navigation Hint */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.8 }}
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-30 text-gray-500 text-sm font-medium hidden md:block pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center space-x-2"
        >
          <span>Use scroll or navigation dots →</span>
        </motion.div>
      </motion.div>

      {/* Section Progress Bar (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-gray-200 z-40 lg:hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
          style={{
            width: `${((currentSection + 1) / sections.length) * 100}%`
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
    </>
  )
}