'use client'

import { motion } from 'framer-motion'
import { experience } from '@/data/experience'

export function Experience() {
  return (
    <section id="experience" className="section-container bg-gray-50 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12">Experience</h2>
        <div className="space-y-8">
          {experience.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400 font-semibold">{item.duration}</p>
                  <h3 className="text-2xl font-semibold mt-2">{item.position}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.company}</p>
                  <p className="text-l text-gray-500 dark:text-gray-400 mt-1">{item.description}</p>
                </div>
              </div>
              <ul className="mt-6 grid gap-2 text-gray-600 dark:text-gray-400 list-disc list-inside">
                {item.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
