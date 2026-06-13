'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/data/projects'

export function Projects() {
  const featuredProjects = projects
  const [openProject, setOpenProject] = useState<string | null>(null)
  const modalRef = useRef<HTMLDivElement | null>(null)
  const [imgError, setImgError] = useState(false)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpenProject(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const selected = featuredProjects.find((p) => p.slug === openProject)

  useEffect(() => {
    setImgError(false)
  }, [openProject])

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
            className="card hover:shadow-xl transition-shadow duration-300 group"
          >
            <button
              onClick={() => setOpenProject(project.slug)}
              className="w-full text-left"
              aria-haspopup="dialog"
              aria-expanded={openProject === project.slug}
            >
              <div
                className="relative h-48 rounded-lg mb-4 overflow-hidden group-hover:scale-105 transition-transform duration-300"
                style={{
                  backgroundImage: `url(${project.image || '/project-placeholder.jpg'})`,
                  backgroundSize: 'auto 70%',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/10" />
                <div className="relative z-10 flex items-center justify-center h-full text-white font-semibold px-4 text-center">
                  {/* {project.title} */}
                </div>
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
            </button>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={() => setOpenProject(null)}
            />

            <motion.div
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-label={`${selected.title} details`}
              className="relative max-w-3xl w-full mx-4 bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6 overflow-auto max-h-[90vh]"
              initial={{ y: 20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.98 }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold">{selected.title}</h3>
                <button
                  onClick={() => setOpenProject(null)}
                  className="ml-4 text-gray-600 dark:text-gray-300 hover:text-gray-900"
                  aria-label="Close project details"
                >
                  ✕
                </button>
              </div>

              {/* image with graceful fallback if file missing */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={!imgError && selected.p_image ? selected.p_image : '/project-placeholder.jpg'}
                onError={() => setImgError(true)}
                alt={selected.title}
                className="w-full h-56 object-cover rounded-md mb-4"
              />

              <p className="mb-4 text-gray-700 dark:text-gray-300">{selected.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selected.technologies.map((t) => (
                    <span key={t} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                  <h5 className="font-semibold mb-1">Challenges</h5>
                  <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                    {selected.challenges.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-1">Solutions</h5>
                  <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                    {selected.solutions.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-1">Results</h5>
                  <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                    {selected.results.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-3 mt-4">
                {selected.links.live && (
                  <a href={selected.links.live} target="_blank" rel="noreferrer" className="btn-primary">
                    Live
                  </a>
                )}
                {selected.links.github && (
                  <a href={selected.links.github} target="_blank" rel="noreferrer" className="btn-secondary">
                    Code
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
