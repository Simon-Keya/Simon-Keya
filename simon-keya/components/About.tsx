'use client'

import { AnimatePresence, motion, Variants } from 'framer-motion'
import { useState } from 'react'

interface Stat {
  label: string
  value: string
  icon: string
  description: string
}

interface Value {
  title: string
  description: string
  icon: string
}

interface Experience {
  year: string
  title: string
  description: string
  skills: string[]
}

// Framer Motion Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
}

const tabContentVariants: Variants = {
  hidden: { y: 10, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  exit: { y: -10, opacity: 0, transition: { duration: 0.3 } },
}

const About = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const stats: Stat[] = [
    {
      label: 'Years Experience',
      value: '3+',
      icon: '🚀',
      description: 'Building scalable applications',
    },
    {
      label: 'Projects Completed',
      value: '10+',
      icon: '💼',
      description: 'Successful deployments',
    },
    {
      label: 'Technologies',
      value: '15+',
      icon: '⚡',
      description: 'Modern frameworks & tools',
    },
    {
      label: 'Client Satisfaction',
      value: '100%',
      icon: '⭐',
      description: 'Positive feedback',
    },
  ]

  const coreValues: Value[] = [
    {
      title: 'Innovation',
      description: 'Constantly exploring new technologies and approaches to solve complex problems efficiently.',
      icon: '💡',
    },
    {
      title: 'Quality',
      description: 'Writing clean, maintainable code with comprehensive testing and documentation.',
      icon: '✨',
    },
    {
      title: 'Collaboration',
      description: 'Working effectively with cross-functional teams to deliver exceptional results.',
      icon: '🤝',
    },
    {
      title: 'Growth',
      description: 'Continuous learning and skill development to stay ahead of industry trends.',
      icon: '📈',
    },
  ]

  const experiences: Experience[] = [
    {
      year: '2025',
      title: 'Full-Stack Developer',
      description: 'Developed responsive web applications, integrated APIs, and optimized database performance for various client projects.',
      skills: ['Next.js', 'TypeScript', 'Vercel', 'Python', 'Django', 'Postgres', 'Render'],
    },
    {
      year: '2024',
      title: 'Backend Developer',
      description: 'Developed responsive server-side applications, integrated APIs, and optimized database performance for various client projects.',
      skills: ['TypeScript', 'Node.js', 'Python', 'Django', 'Postgres', 'Render'],
    },
    {
      year: '2023',
      title: 'Frontend Developer',
      description: 'Created interactive user interfaces, implemented design systems, and improved application performance and accessibility.',
      skills: ['JavaScript', 'React', 'Tailwind CSS', 'Bootstrap', 'Vercel'],
    },
    {
      year: '2022',
      title: 'Junior Developer',
      description: 'Started my journey building basic web applications, learning best practices, and contributing to open-source projects.',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
  ]

  const TabButton = ({ id, label, isActive }: { id: string; label: string; isActive: boolean }) => (
    <motion.button
      onClick={() => setActiveTab(id)}
      className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
        isActive
          ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
          : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      variants={itemVariants}
    >
      {label}
    </motion.button>
  )

  return (
    <section className="min-h-screen relative overflow-hidden flex flex-col justify-center py-20 px-4">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-slate-950 to-blue-950 bg-[length:400%_400%] animate-bg-shift opacity-70" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image */}
          <motion.div
            className="relative w-32 h-32 mx-auto mb-8"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full blur-lg opacity-50" />
            <div className="relative w-full h-full bg-slate-800 rounded-full overflow-hidden border-4 border-blue-500/30">
              <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-4xl font-bold text-white">
                SK
              </div>
            </div>
            <motion.div
              className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900 flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <div className="w-3 h-3 bg-white rounded-full" />
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            About <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Me</span>
          </motion.h1>
          
          <motion.p
            className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Passionate software developer and lifelong learner
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 text-center group"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-4xl mb-3 group-hover:animate-bounce">{stat.icon}</div>
              <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
              <div className="text-white font-medium mb-2">{stat.label}</div>
              <div className="text-slate-400 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <TabButton id="overview" label="Overview" isActive={activeTab === 'overview'} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <TabButton id="journey" label="My Journey" isActive={activeTab === 'journey'} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <TabButton id="values" label="Core Values" isActive={activeTab === 'values'} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <TabButton id="personal" label="Personal Side" isActive={activeTab === 'personal'} />
          </motion.div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              className="max-w-4xl mx-auto"
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-4">Professional Background</h3>
                    <p className="text-lg leading-relaxed text-slate-300">
                      I am a passionate software developer with over{' '}
                      <span className="text-blue-400 font-semibold">3 years of experience</span> designing and
                      building scalable web and mobile applications. I specialize in crafting clean, efficient,
                      and maintainable code using modern frameworks and tools.
                    </p>
                    
                    <p className="text-lg leading-relaxed text-slate-300">
                      My expertise spans{' '}
                      <span className="text-blue-400 font-semibold">full-stack development</span> with a strong focus on
                      JavaScript, TypeScript, and Python ecosystems. I enjoy transforming complex problems into user-friendly
                      solutions and constantly seek to learn and apply new technologies to deliver impactful software.
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {['Problem Solver', 'Team Player', 'Quick Learner', 'Detail-Oriented'].map((trait) => (
                        <motion.span
                          key={trait}
                          className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-500/30"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {trait}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-4">Creative Pursuits</h3>
                    <p className="text-lg leading-relaxed text-slate-300">
                      Beyond the world of code, I also engage in the art of{' '}
                      <span className="text-blue-400 font-semibold">painting, drawing, and digital design</span>.
                      Creating visual art allows me to explore a different kind of problem-solving and
                      express my creativity in unique ways.
                    </p>

                    <p className="text-lg leading-relaxed text-slate-300">
                      This artistic background enhances my approach to{' '}
                      <span className="text-blue-400 font-semibold">UI/UX design</span> and helps me create
                      more visually appealing and intuitive user interfaces. The intersection of art and technology
                      continues to inspire my work as a developer.
                    </p>

                    <motion.a
                      href="https://keyart.vercel.app" // Edit this URL to your art portfolio website
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      variants={itemVariants}
                    >
                      View Art Portfolio
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'journey' && (
            <motion.div
              key="journey"
              className="max-w-5xl mx-auto"
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h3 className="text-3xl font-bold text-white text-center mb-12">Professional Journey</h3>
              <div className="relative">
                <motion.div
                  className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-700"
                  initial={{ height: 0 }}
                  animate={{ height: '100%' }}
                  transition={{ duration: 1 }}
                />
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.year}
                    className="relative flex items-start mb-12"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15 }}
                  >
                    <motion.div
                      className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 z-10"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <motion.div
                      className="ml-16 bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 flex-1"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-2xl font-bold text-blue-400">{exp.year}</span>
                        <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                      </div>
                      <p className="text-slate-300 leading-relaxed mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <motion.span
                            key={skill}
                            className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-md text-sm border border-blue-500/30"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'values' && (
            <motion.div
              key="values"
              className="max-w-5xl mx-auto"
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h3 className="text-3xl font-bold text-white text-center mb-12">Core Values</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {coreValues.map((value) => (
                  <motion.div
                    key={value.title}
                    className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 group"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-4xl mb-4 group-hover:animate-pulse">{value.icon}</div>
                    <h4 className="text-2xl font-bold text-white mb-4">{value.title}</h4>
                    <p className="text-slate-300 leading-relaxed">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'personal' && (
            <motion.div
              key="personal"
              className="max-w-4xl mx-auto"
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50">
                <h3 className="text-3xl font-bold text-white text-center mb-8">Beyond Development</h3>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-blue-400 mb-3">🎨 Artistic Endeavors</h4>
                      <p className="text-slate-300 leading-relaxed">
                        Traditional art has been a lifelong passion that complements my technical skills,
                        providing a creative outlet and enhancing my design sensibilities.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-blue-400 mb-3">📚 Continuous Learning</h4>
                      <p className="text-slate-300 leading-relaxed">
                        Always exploring new technologies, frameworks, and methodologies. Currently getting familiar with
                        Java, Go, cloud architecture patterns and AI intergrations.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-blue-400 mb-3">🌍 Community Involvement</h4>
                      <p className="text-slate-300 leading-relaxed">
                        Contributing to open-source projects, mentoring newcomers to programming, and sharing knowledge
                        through technical blogs and community events.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-blue-400 mb-3">⚡ Fun Facts</h4>
                      <ul className="text-slate-300 space-y-2">
                        <li>• Can code for 7+ hours while listening to lo-fi music</li>
                        <li>• Coffee enthusiast (4+ cups per day)</li>
                        <li>• Enjoys solving complex problems for fun</li>
                        <li>• Avid viewer of sci-fi shows</li>
                      </ul>
                    </div>
                  </div>

                  <div className="relative">
                    <motion.div
                      className="aspect-square bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-1"
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="w-full h-full bg-slate-800 rounded-xl flex items-center justify-center"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="text-6xl">🚀</div>
                      </motion.div>
                    </motion.div>
                    
                    <motion.div className="mt-6 grid grid-cols-3 gap-4">
                      {['🎨', '💻', '📱'].map((icon, i) => (
                        <motion.div
                          key={i}
                          className="aspect-square bg-slate-700/50 rounded-lg flex items-center justify-center text-2xl"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: i * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {icon}
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Let&apos;s Build Something Amazing Together</h3>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              Whether you have a project in mind, want to collaborate, or just want to chat about technology and art,
              I&apos;d love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/contact"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="/projects"
                className="px-8 py-3 bg-slate-700/50 hover:bg-slate-600/50 text-white rounded-lg transition-all duration-200 font-medium border border-slate-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
