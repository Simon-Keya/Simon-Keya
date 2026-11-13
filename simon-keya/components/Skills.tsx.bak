
'use client'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import React, { useState } from 'react'
import {
  SiCloudinary,
  SiCss3,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiGit,
  SiGithubactions,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiRender,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel
} from 'react-icons/si'

interface Skill {
  name: string
  icon: React.ReactNode
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Tools' | 'Cloud' | 'CI/CD' | 'API'
  proficiency: number
  yearsOfExperience: number
  description: string
}

const skills: Skill[] = [
  // Frontend
  { name: 'React', icon: <SiReact className="text-[#61dafb]" />, category: 'Frontend', proficiency: 4, yearsOfExperience: 3, description: 'Modern UI library for building interactive interfaces' },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white" />, category: 'Frontend', proficiency: 3, yearsOfExperience: 2, description: 'Full-stack React framework for production applications' },
  { name: 'TypeScript', icon: <SiTypescript className="text-[#3178c6]" />, category: 'Frontend', proficiency: 3, yearsOfExperience: 2, description: 'Typed superset of JavaScript for better code quality' },
  { name: 'JavaScript', icon: <SiJavascript className="text-[#f7df1e]" />, category: 'Frontend', proficiency: 4, yearsOfExperience: 4, description: 'Core programming language for web development' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06b6d4]" />, category: 'Frontend', proficiency: 3, yearsOfExperience: 2, description: 'Utility-first CSS framework for rapid UI development' },
  { name: 'HTML5', icon: <SiHtml5 className="text-[#e34f26]" />, category: 'Frontend', proficiency: 4, yearsOfExperience: 5, description: 'Standard markup language for web documents' },
  { name: 'CSS3', icon: <SiCss3 className="text-[#1572b6]" />, category: 'Frontend', proficiency: 4, yearsOfExperience: 4, description: 'Styling language for web presentation' },
  // Backend
  { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" />, category: 'Backend', proficiency: 4, yearsOfExperience: 3, description: 'JavaScript runtime for server-side development' },
  { name: 'Python', icon: <SiPython className="text-[#3776ab]" />, category: 'Backend', proficiency: 4, yearsOfExperience: 3, description: 'Versatile programming language for backend development' },
  { name: 'Express.js', icon: <SiExpress className="text-white" />, category: 'Backend', proficiency: 4, yearsOfExperience: 3, description: 'Fast, minimalist web framework for Node.js' },
  { name: 'NestJS', icon: <SiNestjs className="text-[#e0234e]" />, category: 'Backend', proficiency: 3, yearsOfExperience: 1, description: 'Progressive Node.js framework for scalable applications' },
  { name: 'FastAPI', icon: <SiFastapi className="text-[#009688]" />, category: 'Backend', proficiency: 3, yearsOfExperience: 2, description: 'Modern, fast web framework for Python APIs' },
  { name: 'Django', icon: <SiDjango className="text-[#092e20]" />, category: 'Backend', proficiency: 3, yearsOfExperience: 2, description: 'High-level Python web framework' },
  // API
  { name: 'REST API', icon: <SiPostgresql className="text-[#336791]" />, category: 'API', proficiency: 3, yearsOfExperience: 2, description: 'Design and implementation of RESTful APIs for web services' },
  // Database
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#336791]" />, category: 'Database', proficiency: 4, yearsOfExperience: 2, description: 'Advanced open-source relational database' },
  { name: 'MongoDB', icon: <SiMongodb className="text-[#47a248]" />, category: 'Database', proficiency: 3, yearsOfExperience: 2, description: 'NoSQL document database for modern applications' },
  { name: 'Redis', icon: <SiRedis className="text-[#dc382d]" />, category: 'Database', proficiency: 3, yearsOfExperience: 1, description: 'In-memory data structure store for caching' },
  // DevOps
  { name: 'Docker', icon: <SiDocker className="text-[#2496ed]" />, category: 'DevOps', proficiency: 3, yearsOfExperience: 2, description: 'Containerization platform for application deployment' },
  { name: 'Kubernetes', icon: <SiKubernetes className="text-[#326ce5]" />, category: 'DevOps', proficiency: 2, yearsOfExperience: 1, description: 'Container orchestration platform' },
  // CI/CD
  { name: 'GitHub Actions', icon: <SiGithubactions className="text-[#2088FF]" />, category: 'CI/CD', proficiency: 3, yearsOfExperience: 2, description: 'Automated CI/CD pipelines for GitHub repositories' },
  // Tools
  { name: 'Git', icon: <SiGit className="text-[#f05032]" />, category: 'Tools', proficiency: 4, yearsOfExperience: 4, description: 'Version control system for tracking changes' },
  // Cloud
  { name: 'Google Cloud', icon: <SiGooglecloud className="text-[#4285F4]" />, category: 'Cloud', proficiency: 3, yearsOfExperience: 1, description: 'Google Cloud Platform services' },
  { name: 'Vercel', icon: <SiVercel className="text-white" />, category: 'Cloud', proficiency: 4, yearsOfExperience: 3, description: 'Platform for frontend frameworks and static sites' },
  { name: 'Render', icon: <SiRender className="text-[#46E3B7]" />, category: 'Cloud', proficiency: 3, yearsOfExperience: 2, description: 'Cloud platform for hosting applications' },
  { name: 'Supabase', icon: <SiSupabase className="text-[#3ecf8e]" />, category: 'Cloud', proficiency: 3, yearsOfExperience: 1, description: 'Open-source Firebase alternative' },
  { name: 'Firebase', icon: <SiFirebase className="text-[#ffca28]" />, category: 'Cloud', proficiency: 2, yearsOfExperience: 1, description: 'Google backend-as-a-service platform' },
  { name: 'Cloudinary', icon: <SiCloudinary className="text-[#3448C5]" />, category: 'Cloud', proficiency: 3, yearsOfExperience: 2, description: 'Cloud-based image and video management platform' }
]

const categories = ['All', 'Frontend', 'Backend', 'API', 'Database', 'DevOps', 'CI/CD', 'Cloud', 'Tools']

// Framer Motion Variants
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.2, ease: 'easeOut' as const },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
}

function SkillCard({ skill, index, isSelected }: { skill: Skill; index: number; isSelected: boolean }) {
  const [isHovered, setIsHovered] = useState(false)

  const getProficiencyColor = (level: number) => {
    if (level >= 5) return 'text-green-400'
    if (level >= 4) return 'text-blue-400'
    if (level >= 3) return 'text-yellow-400'
    return 'text-orange-400'
  }

  const getProficiencyLabel = (level: number) => {
    if (level >= 5) return 'Expert'
    if (level >= 4) return 'Advanced'
    if (level >= 3) return 'Intermediate'
    return 'Beginner'
  }

  return (
    <motion.div
      className={`group relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer backdrop-blur-sm ${
        isSelected
          ? 'bg-blue-600/20 border-blue-500/50 shadow-lg shadow-blue-500/20'
          : 'bg-slate-800/50 border-slate-700/50 hover:border-blue-500/30'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="flex flex-col items-center space-y-3"
        animate={{ y: isHovered ? -8 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="text-4xl"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {skill.icon}
        </motion.div>
        <h3 className="font-semibold text-white text-center">{skill.name}</h3>
        <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full border border-blue-500/30">
          {skill.category}
        </span>
      </motion.div>
      <motion.div
        className="mt-4 space-y-2"
        initial={{ opacity: 0.7, y: 8 }}
        animate={{ opacity: isHovered ? 1 : 0.7, y: isHovered ? 0 : 8 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-400">Proficiency:</span>
          <span className={`font-medium ${getProficiencyColor(skill.proficiency)}`}>
            {getProficiencyLabel(skill.proficiency)}
          </span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-400">Experience:</span>
          <span className="text-blue-400 font-medium">{skill.yearsOfExperience} years</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2 mt-3">
          <motion.div
            className={`h-2 rounded-full ${getProficiencyColor(skill.proficiency)} bg-current`}
            initial={{ width: 0 }}
            animate={{ width: `${(skill.proficiency / 5) * 100}%` }}
            transition={{ duration: 1, ease: 'easeOut' as const }}
          />
        </div>
      </motion.div>
      <motion.div
        className="mt-4 overflow-hidden"
        initial={{ opacity: 0, height: 0, y: 16 }}
        animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0, y: isHovered ? 0 : 16 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-slate-300 text-sm text-center leading-relaxed">
          {skill.description}
        </p>
      </motion.div>
    </motion.div>
  )
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter(skill => skill.category === activeCategory)

  const categoryStats = categories.slice(1).map(category => ({
    name: category,
    count: skills.filter(skill => skill.category === category).length,
    avgProficiency: Math.round(
      skills
        .filter(skill => skill.category === category)
        .reduce((acc, skill) => acc + skill.proficiency, 0) /
      skills.filter(skill => skill.category === category).length
    )
  }))

  return (
    <motion.section
      className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-blue-950 py-20 px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div className="text-center mb-16" variants={containerVariants}>
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl mb-6 shadow-lg"
            variants={itemVariants}
          >
            <div className="text-2xl text-white">⚡</div>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            Skills & <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Technologies</span>
          </motion.h2>
          <motion.p
            className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8"
            variants={itemVariants}
          >
            A comprehensive overview of my technical expertise and proficiency levels
          </motion.p>
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto" variants={containerVariants}>
            {[
              { value: skills.length, label: 'Technologies' },
              { value: categories.length - 1, label: 'Categories' },
              { value: Math.round(skills.reduce((acc, skill) => acc + skill.yearsOfExperience, 0) / skills.length), label: 'Avg Years' },
              { value: skills.filter(skill => skill.proficiency >= 4).length, label: 'Advanced Level' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl font-bold text-blue-400">{stat.value}+</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Category Buttons */}
        <motion.div className="flex flex-wrap justify-center gap-4 mb-12" variants={containerVariants}>
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => {
                setActiveCategory(category)
                setSelectedSkill(null)
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 backdrop-blur-sm border border-slate-700/50 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white hover:border-blue-500/30'
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
              {category !== 'All' && (
                <span className="ml-2 text-xs opacity-70">
                  ({skills.filter(skill => skill.category === category).length})
                </span>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          variants={containerVariants}
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                onClick={() => setSelectedSkill(selectedSkill === skill.name ? null : skill.name)}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
              >
                <SkillCard skill={skill} index={index} isSelected={selectedSkill === skill.name} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Expertise Breakdown */}
        {activeCategory === 'All' && (
          <motion.div className="mt-20" variants={containerVariants}>
            <motion.h3
              className="text-2xl font-bold text-white text-center mb-8"
              variants={itemVariants}
            >
              Expertise Breakdown
            </motion.h3>
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants}>
              {categoryStats.map((stat) => (
                <motion.div
                  key={stat.name}
                  className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-white">{stat.name}</h4>
                    <span className="text-blue-400 text-2xl font-bold">{stat.count}</span>
                  </div>
                  <div className="text-sm text-slate-400 mb-2">Average Proficiency</div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <motion.div
                      className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
                      initial={{ width: 0 }}
                      animate={{ width: `${(stat.avgProficiency / 5) * 100}%` }}
                      transition={{ duration: 1, ease: 'easeOut' as const }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}
