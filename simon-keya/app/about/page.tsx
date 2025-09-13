'use client';

import { motion, Variants } from 'framer-motion';
import About from '../../components/About';

// Framer Motion variants for page transition.
// The 'ease' property has been removed to fix the TypeScript error.
const pageVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
};

export default function AboutPage() {
  return (
    <motion.main
      className="min-h-screen"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      role="main"
      aria-label="About Us Page"
    >
      <About />
    </motion.main>
  );
}
