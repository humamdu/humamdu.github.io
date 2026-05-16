'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { projects } from '@/data/projects'

export function Projects() {
  const featuredProjects = projects.filter(p => p.featured)

  return (
    <section id="projects" className="section-container">
      <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {featuredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="card hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
          >
            <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg mb-4 flex items-center justify-center text-white font-semibold group-hover:scale-105 transition-transform duration-300">
              {project.title}
            </div>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{project.shortDescription}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            <Link href={`/projects/${project.slug}`} className="btn-secondary inline-flex items-center justify-center text-sm">
              View Details
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
