'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data/skills'

export function Skills() {
  return (
    <section id="skills" className="section-container bg-gray-50 dark:bg-gray-900">
      <h2 className="text-4xl font-bold mb-12">Skills</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skillGroup, idx) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="card"
          >
            <h3 className="text-2xl font-semibold mb-6">{skillGroup.category}</h3>
            <div className="space-y-4">
              {skillGroup.items.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-blue-600 dark:text-blue-400">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
