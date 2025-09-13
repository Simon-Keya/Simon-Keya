
'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaArrowUp, FaEnvelope, FaGithub, FaHeart, FaLinkedinIn, FaMapMarkerAlt, FaPalette, FaTwitter } from 'react-icons/fa'

const socialLinks = [
  {
    href: "https://github.com/Simon-Keya",
    icon: FaGithub,
    label: "GitHub Profile",
    color: "hover:text-gray-400"
  },
  {
    href: "https://linkedin.com/in/simonkeya",
    icon: FaLinkedinIn,
    label: "LinkedIn Profile",
    color: "hover:text-blue-400"
  },
  {
    href: "https://keyart.vercel.app",
    icon: FaPalette,
    label: "Art Portfolio",
    color: "hover:text-purple-400"
  },
  {
    href: "https://x.com/SymonC137",
    icon: FaTwitter,
    label: "Twitter Profile",
    color: "hover:text-sky-400"
  },
  {
    href: "mailto:simonkeya78@gmail.com",
    icon: FaEnvelope,
    label: "Email Contact",
    color: "hover:text-green-400"
  }
]

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative py-12 mt-20 bg-gradient-to-br from-black via-slate-950 to-blue-950 text-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Simon Keya
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Passionate software developer crafting modern web and mobile applications with clean code and innovative solutions.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <FaMapMarkerAlt className="w-4 h-4" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Let&apos;s Connect</h4>
            <div className="flex justify-center md:justify-end items-center gap-4 mb-4">
              {socialLinks.map(({ href, icon: Icon, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${color} transition-all duration-300`}
                  aria-label={label}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              Available for freelance projects and collaboration
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>&copy; {currentYear} Simon Keya. All rights reserved.</span>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <motion.span
              className="flex items-center space-x-1"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span>Made with</span>
              <FaHeart className="w-4 h-4 text-red-500" />
              <span>in Kenya</span>
            </motion.span>
          </div>

          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <span>Built with Next.js & TypeScript</span>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="absolute top-6 right-6 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <FaArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 border border-blue-500/20 rounded-full"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        aria-hidden="true"
      />
      
      <motion.div
        className="absolute bottom-10 right-20 w-16 h-16 border border-purple-500/20 rounded-full"
        animate={{
          rotate: [360, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        aria-hidden="true"
      />
    </motion.footer>
  )
}
