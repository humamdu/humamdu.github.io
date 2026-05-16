'use client'

import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl sm:text-6xl font-bold mb-2 gradient-text">
          Humam Al-Duibes
        </h1>
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-gray-700 dark:text-gray-200">
          Full-Stack Developer
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Specializing in PHP, Laravel, Yii, and Node.js with expertise in requirements analysis and solution design. 8+ years of experience with enterprise ERP systems and e-commerce integrations.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#projects" className="btn-primary inline-block">View My Work</a>
          <a href="#contact" className="btn-secondary inline-block">Get In Touch</a>
        </div>
      </motion.div>
    </section>
  )
}
