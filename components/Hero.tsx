'use client'

import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left flex flex-col md:flex-row items-center md:items-start gap-8"
      >
        <motion.img
          src="/profile-placeholder.jpg"
          alt="Humam Al-Duibes portrait"
          loading="lazy"
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          whileHover={{ scale: 1.03, rotate: 1 }}
          style={{ width: '13rem', height: '19rem', borderRadius: '3rem' }}
          className="w-36 h-36 sm:w-44 sm:h-44 object-cover shadow-xl"
        />

        <div className="max-w-2xl">
          <h1 className="text-5xl sm:text-6xl font-bold mb-2 gradient-text">
            Humam Al-Duibes
          </h1>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-gray-700 dark:text-gray-200">
            Full-Stack Developer
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Specializing in PHP, Laravel, Yii, and Node.js with expertise in requirements analysis and solution design. 10+ years of experience with enterprise ERP systems and e-commerce integrations.
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="btn-primary inline-block">View My Work</a>
            <a href="#contact" className="btn-secondary inline-block">Get In Touch</a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
