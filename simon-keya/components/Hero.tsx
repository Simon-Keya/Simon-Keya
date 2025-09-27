'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// Custom Typewriter component as external libraries are not available
const Typewriter = ({ words, loop, typeSpeed = 70, deleteSpeed = 50, delaySpeed = 1500 }) => {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timer

    const handleTyping = () => {
      const i = wordIndex % words.length
      const fullText = words[i]

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      )

      if (!isDeleting && text === fullText) {
        timer = setTimeout(() => setIsDeleting(true), delaySpeed)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setWordIndex(wordIndex + 1)
      } else {
        const typingSpeed = isDeleting ? deleteSpeed : typeSpeed
        timer = setTimeout(handleTyping, typingSpeed)
      }
    }

    timer = setTimeout(handleTyping, typeSpeed)

    return () => clearTimeout(timer)
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, delaySpeed])

  return (
    <span className="text-blue-400 font-bold ml-2 inline-block min-w-0">
      {text}
      <span className="border-l-2 border-blue-400 font-normal ml-1 animate-pulse"></span>
    </span>
  )
}

// Animation variants for better organization
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

// Inline SVGs replacing 'react-icons/fa'
const FaFileDownload = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75z" />
    <path d="M12 15a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0v-5.25a.75.75 0 01.75-.75z" />
  </svg>
);

const socialIcons = {
  FaLinkedin: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" {...props}><path d="M416 32H32C14.3 32 0 46.3 0 64v384c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM135.2 416H76.7V192h58.5v224zm-29.3-255.4c-19.4 0-35.1-15.7-35.1-35.1s15.7-35.1 35.1-35.1 35.1 15.7 35.1 35.1-15.7 35.1-35.1 35.1zm242.4 255.4h-58.5V286.9c0-23.7-.4-54.2-33-54.2-33 0-38.1 25.8-38.1 52.4V416h-58.5V192h56.2v25.8h.8c7.8-14.8 26.8-38.1 55.4-38.1 59.5 0 70.4 39.1 70.4 89.9V416z"/></svg>
  ),
  FaGithub: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor" {...props}><path d="M165.9 397.4c0 2-2.3 3.3-5.7 3.3-4.5 0-8.8-2.6-8.8-8.8s4.3-8.8 8.8-8.8c3.4 0 5.7 1.3 5.7 3.3v4.4zm10.9-10.9c-2.3 0-5.3 1.3-7.6 3.3-2.3 2-3.3 5.7-3.3 9.4 0 4.1 1.6 7.6 4.6 9.4s7.2 2.6 11.2 1.3c4-1.3 6.6-4.9 6.6-9.7 0-4.7-1.3-8.8-4-10.9-2.7-2.3-6.6-3.3-10.5-2.4zm320.1-239.5c-34.1-80.4-108.9-136.2-192.6-141.2C226.5-6.9 146.9 34.6 100 106.8c-47.5 76.5-56.1 179.9-22.4 254.3 10.2 22.8 24.3 43 41.5 60.1 21.3 21.3 46.5 35.8 74.3 43.1 18.2 4.7 35.9 7 53.9 7 42.1 0 76-13.7 103.5-39.2 25.8-24.3 43.2-57 50.4-93.5 13.9-70.5-8.2-144.1-54.3-207.2zm-282.8 214.3c-1.3 4.4-6.3 5.7-9.7 3.3-3.3-2.3-5.3-7-3.6-11.4 1.8-4.4 6.6-5.7 10.2-3.3 3.6 2.4 5.7 7.2 3.1 11.4zm-22.1-39.7c-2.3 0-5.1 1.3-7.4 3.3-2.3 2-3.3 5.7-3.3 9.7 0 4.1 1.3 7.6 4.3 9.4s7.2 2.6 11.2 1.3c4-1.3 6.6-4.9 6.6-9.7 0-4.7-1.3-8.8-4-10.9-2.7-2.3-6.6-3.3-10.5-2.4zM248 8C111 8 0 119 0 256c0 114.6 71.3 211.8 170.8 247.7 10.4 2 13.7-2.3 13.7-5.7v-20.1c-65.7 14.2-80.1-31.5-80.1-31.5-13.3-33.8-32.3-42.7-32.3-42.7-26.2-18-2-17.6-2-17.6 29 2 44.5 29.8 44.5 29.8 25.8 43.9 67.5 31.2 84.1 23.8 2.6-18.7 10.1-31.2 18.4-38.4-64.4-7.3-131.8-32.2-131.8-143.5 0-31.8 11.4-58 30.1-78.2-3-7.5-13.1-37 2.8-77.2 0 0 24.7-7.8 80.5 29.8 23.4-6.5 48.7-9.8 74.5-9.8s51.1 3.3 74.5 9.8c55.8-37.6 80.5-29.8 80.5-29.8 15.9 40.2 5.8 69.7 2.8 77.2 18.7 20.2 30.1 46.4 30.1 78.2 0 111.7-67.4 136.2-131.8 143.5 10.3 8.9 19.3 26.6 19.3 53.9v78.4c0 3.4 3.3 7.7 13.7 5.7C424.7 467.8 496 370.6 496 256 496 119 385 8 248 8z"/></svg>
  ),
  FaTwitter: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" {...props}><path d="M389.2 48h70.6L305.6 224.2 487 464H397.4L267.6 309.1 123.3 464H51.6L201.7 298.6 40.7 48h92.2L245.2 184.9 389.2 48zM364.4 425.2h49.6L143.2 86.8H93.5L364.4 425.2z"/></svg>
  ),
};

// Social links data (now using inline icons)
const socialLinks = [
  {
    href: "https://www.linkedin.com/in/simon-keya-9ab441237/",
    icon: socialIcons.FaLinkedin,
    label: "LinkedIn Profile",
    hoverColor: "hover:text-blue-400"
  },
  {
    href: "https://github.com/Simon-Keya",
    icon: socialIcons.FaGithub,
    label: "GitHub Profile",
    hoverColor: "hover:text-gray-300"
  },
  {
    href: "https://x.com/SymonC137",
    icon: socialIcons.FaTwitter,
    label: "Twitter Profile",
    hoverColor: "hover:text-sky-400"
  }
]

// Typewriter words
const typewriterWords = [
  'Full Stack Developer.',
  'TypeScript & Python Enthusiast.',
  'Software Developer.',
  'Open Source Contributor.'
]

export default function Hero() {
  return (
    <section
      aria-label="Hero Section"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 text-center bg-black text-white pt-20 overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}
        aria-hidden="true"
      />

      {/* Main content container with stagger animation */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative z-10 max-w-4xl mx-auto"
      >
        {/* Animated Heading */}
        <motion.h1
          variants={{
            ...fadeInUp,
            animate: {
              ...fadeInUp.animate,
              transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] }
            }
          }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-2xl leading-tight"
        >
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
            Simon Keya
          </span>
        </motion.h1>

        {/* Typewriter Animated Roles */}
        <motion.div
          variants={fadeInUp}
          className="mb-8"
        >
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-gray-100 font-mono min-h-[2.5rem] flex items-center justify-center">
            I am a{' '}
            <Typewriter
              words={typewriterWords}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>
        </motion.div>

        {/* Enhanced Intro Text */}
        <motion.p
          variants={fadeInUp}
          className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-10 text-gray-300 leading-relaxed"
        >
          I build{' '}
          <span className="text-blue-400 font-semibold">scalable software applications</span>{' '}
          using clean code and modern technologies. Passionate about creating{' '}
          <span className="text-purple-400 font-semibold">intuitive user experiences</span>{' '}
          and solving real-world problems through innovative technology solutions.
        </motion.p>

        {/* Enhanced Action Buttons - Constrained Mobile Width */}
        <motion.div
          variants={fadeInUp}
          // ADDED max-w-xs to constrain button width on mobile, and centered it with mx-auto
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-12 mx-auto max-w-xs sm:max-w-none"
        >
          {/* Button 1: View Projects */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
            <a
              href="/projects"
              // w-full makes it stretch to the parent's max-w-xs boundary
              className="group px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold shadow-lg transition-all duration-300 transform relative overflow-hidden min-w-[140px] w-full sm:w-auto text-center block"
              aria-label="View Projects"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </motion.div>

          {/* Button 2: Contact Me */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
            <a
              href="/contact"
              // w-full makes it stretch to the parent's max-w-xs boundary
              className="px-6 py-4 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg font-semibold shadow-lg transition-all duration-300 backdrop-blur-sm min-w-[140px] w-full sm:w-auto text-center block"
              aria-label="Contact Me"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Button 3: Resume */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
            <a
              href="/files/Simon Keya's resume.pdf"
              download
              // w-full makes it stretch to the parent's max-w-xs boundary
              className="group px-6 py-4 bg-white text-black hover:bg-gray-100 rounded-lg font-semibold shadow-lg flex items-center justify-center gap-2 transition-all duration-300 min-w-[140px] w-full sm:w-auto"
              aria-label="Download Resume"
            >
              <FaFileDownload className="w-5 h-5 group-hover:animate-bounce" />
              <span>Resume</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Enhanced Social Links */}
        <motion.div
          variants={fadeInUp}
          className="flex gap-8 justify-center"
        >
          {socialLinks.map(({ href, icon: Icon, label, hoverColor }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-400 ${hoverColor} text-3xl transition-all duration-300 hover:scale-110 hover:-translate-y-1`}
              aria-label={label}
              whileHover={{ scale: 1.2, y: -4 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-blue-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
