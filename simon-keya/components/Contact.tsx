
'use client'

import { motion, Variants } from 'framer-motion';
import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedinIn, FaMapMarkerAlt, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import ContactForm from './ContactForm'; // Import the new ContactForm component

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.42, 0, 0.58, 1], // cubic-bezier easeOut
      staggerChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="w-full bg-black text-white py-16 px-4"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-start gap-12"
      >
        {/* Left Side: Contact Details */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2 pt-8">
          <h2
            id="contact-heading"
            className="text-3xl font-extrabold mb-6 text-center text-blue-400 tracking-wide drop-shadow-md"
          >
            CONNECT WITH ME
          </h2>
          <p className="text-center md:text-left text-base text-white/80 mb-8 max-w-lg">
            I&apos;m currently open to new opportunities. Feel free to reach out via the following channels or use the form to send a direct message.
          </p>

          <div className="flex flex-col gap-6 w-full max-w-2xl">
            {/* WhatsApp link */}
            <motion.a
              href="https://wa.me/254768378046?text=Write%20me"
              variants={itemVariants}
              className="flex items-center gap-4 w-full"
            >
              <div className="flex items-center gap-4">
                <FaWhatsapp size={24} className="text-green-500" />
                <div>
                  <h3 className="text-lg font-semibold text-white">WhatsApp</h3>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-gray-400">+254-768- Write me</p>
                    <FaArrowRight size={16} className="text-white" />
                  </div>
                </div>
              </div>
            </motion.a>

            {/* Email link */}
            <motion.a
              href="mailto:simonkeya78@gmail.com"
              variants={itemVariants}
              className="flex items-center gap-4 w-full"
            >
              <div className="flex items-center gap-4">
                <FaEnvelope size={24} className="text-blue-400" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Send Mail</h3>
                  <p className="text-sm text-gray-400">simonkeya@gmail.com</p>
                </div>
              </div>
            </motion.a>

            {/* Location section */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 w-full"
            >
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt size={24} className="text-red-500" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Location</h3>
                  <p className="text-sm text-gray-400">Nairobi, Kenya</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Socials row (Inactive) */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6 w-full max-w-2xl">
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 p-4 bg-slate-800 rounded-full shadow-lg"
              aria-label="GitHub profile"
            >
              <FaGithub size={24} className="text-white" />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 p-4 bg-slate-800 rounded-full shadow-lg"
              aria-label="LinkedIn profile"
            >
              <FaLinkedinIn size={24} className="text-blue-400" />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 p-4 bg-slate-800 rounded-full shadow-lg"
              aria-label="Twitter profile"
            >
              <FaTwitter size={24} className="text-blue-300" />
            </motion.div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <ContactForm />
        </div>
      </motion.div>
    </section>
  )
}
