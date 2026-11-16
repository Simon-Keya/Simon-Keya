'use client';

import { motion, Variants } from 'framer-motion';
import Projects from '../../components/Projects';
import ThemeToggle from '@/components/ThemeToggle';

// Framer Motion variants for page transition.
// The 'ease' property has been removed to fix the TypeScript error.
const pageVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
};

export default function ProjectsPage() {
  return (
    <div className="projects-index-page">
    <div className="projects-index-toolbar"><a href="/" className="wordmark">SK<span>.</span></a><ThemeToggle /></div>
    <motion.main
      className="projects-index-page min-h-screen"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      role="main"
      aria-label="Projects Page"
    >
      <Projects />
    </motion.main>
    </div>
  );
}
