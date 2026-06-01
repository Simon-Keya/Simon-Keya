'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaFileDownload, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Typewriter } from 'react-simple-typewriter'

// Animation variants
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

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/simon-keya-9ab441237/",
    icon: FaLinkedin,
    label: "LinkedIn Profile",
    hoverColor: "hover:text-blue-400"
  },
  {
    href: "https://github.com/Simon-Keya",
    icon: FaGithub,
    label: "GitHub Profile",
    hoverColor: "hover:text-gray-300"
  },
  {
    href: "https://x.com/SymonC137",
    icon: FaTwitter,
    label: "Twitter Profile",
    hoverColor: "hover:text-sky-400"
  }
]

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

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative z-10 max-w-4xl mx-auto"
      >
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

        <motion.div variants={fadeInUp} className="mb-8">
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-gray-100 font-mono min-h-[2.5rem] flex items-center justify-center">
            I am a{' '}
            <span className="text-blue-400 font-bold ml-2 inline-block min-w-0">
              <Typewriter
                words={typewriterWords}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </p>
        </motion.div>

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

        {/* Responsive Button Container */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12 w-full max-w-md mx-auto sm:max-w-none px-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
            <Link
              href="/projects"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold shadow-lg transition-all duration-300 block text-center w-full sm:w-auto"
            >
              <span className="relative z-10">View Projects</span>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg font-semibold shadow-lg transition-all duration-300 backdrop-blur-sm block text-center w-full sm:w-auto"
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
            <a
              href="/files/Simon Keya's resume.pdf"
              download
              className="group px-8 py-4 bg-white text-black hover:bg-gray-100 rounded-lg font-semibold shadow-lg flex items-center justify-center gap-2 transition-all duration-300 w-full sm:w-auto"
            >
              <FaFileDownload className="group-hover:animate-bounce" />
              <span>Resume</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex gap-8 justify-center">
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
              <Icon />
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