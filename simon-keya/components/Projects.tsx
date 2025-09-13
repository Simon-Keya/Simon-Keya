"use client"
import Image from 'next/image';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  stack: string[];
  github: string;
  live: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Kelvisan Electrical Networks Ltd',
    image: '/Kelvisan.png',
    description: 'Kelvinsan Electrical Networks Ltd is a premier provider of electrical, networking, and software development services in Kenya.',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Django', 'PostgreSQL'],
    github: 'https://github.com/Simon-Keya/Kelvisan-Electrical-Networks',
    live: 'https://kelvisan-electrical-networks-ltd.vercel.app',
    category: 'Business'
  },
  {
    id: 2,
    title: 'Karen Hats',
    image: '/Karen hats.png',
    description: 'An e-commerce website for purchasing and ordering hats built using Next.js, Tailwind, Daisy UI, Nest.js, and PostgreSQL.',
    stack: ['Next.js', 'Tailwind CSS', 'Nest.js', 'PostgreSQL', 'TypeScript'],
    github: 'https://github.com/Simon-Keya/Karen-Hats',
    live: 'https://karen-hats.vercel.app',
    category: 'E-commerce'
  },
  {
    id: 3,
    title: 'Keyart',
    image: '/keya.png',
    description: 'A digital gallery showcasing imaginative art and creative visions, built with modern web tech.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/Simon-Keya/Keyart',
    live: 'https://keyart.vercel.app',
    category: 'Portfolio'
  },
  {
    id: 4,
    title: 'Zenials',
    image: '/Zenials.png',
    description: 'A social media platform to help creators monetize and grow their content.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript'],
    github: 'https://github.com/Simon-Keya/Zenials',
    live: 'https://zenials.vercel.app/',
    category: 'Social'
  },
];

const categories = ['All', 'Business', 'E-commerce', 'Portfolio', 'Social'];

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const cardHeight = index % 3 === 0 ? 'h-96' : index % 2 === 0 ? 'h-80' : 'h-88';
  
  return (
    <div className={`relative group ${cardHeight} transform transition-all duration-700 hover:scale-105`}>
      <div className="relative w-full h-full">
        <div className="relative w-full h-full bg-gradient-to-br from-slate-900 via-blue-900/30 to-black rounded-2xl overflow-hidden border border-blue-500/20 shadow-2xl">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <Image 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover opacity-30"
              width={400}
              height={300}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 p-6 h-full flex flex-col justify-end">
            <div className="space-y-3">
              <span className="inline-block px-3 py-1 bg-blue-600/80 text-blue-100 text-xs font-semibold rounded-full backdrop-blur-sm">
                {project.category}
              </span>
              
              <h3 className="text-xl font-bold text-white drop-shadow-lg">
                {project.title}
              </h3>
              
              <p className="text-slate-300 text-sm line-clamp-3 drop-shadow-md">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1">
                {project.stack.slice(0, 3).map((tech: string) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-md border border-blue-400/30 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
                {project.stack.length > 3 && (
                  <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md">
                    +{project.stack.length - 3}
                  </span>
                )}
              </div>
            </div>
            
            {/* Source Code and Live buttons - Moved to the front */}
            <div className="flex gap-3 pt-4 mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Code
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.stack.some((tech: string) => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-blue-950 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 mb-6 drop-shadow-2xl">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Explore my latest work featuring modern web technologies, innovative designs, and seamless user experiences
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search projects, technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-600 rounded-xl px-4 py-3 pl-12 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all backdrop-blur-sm"
            />
            <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category: string) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600 border border-slate-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-max">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-slate-800 flex items-center justify-center">
              <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.012 0 0112 15c-2.34 0-4.291-1.007-5.824-2.709M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-300 mb-2">No projects found</h3>
            <p className="text-slate-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </section>
  );
}
