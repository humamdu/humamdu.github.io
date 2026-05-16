'use client'

import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              I'm a full-stack developer with 8+ years of experience in system development and ERP integrations. I specialize in building robust enterprise solutions and e-commerce platforms.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              Throughout my career, I have developed comprehensive ERP systems and integrated them with platforms like Amazon, Back Market, MX Merchant, QuickBooks, and eBay. I've also developed specialized manufacturing and refurbishment modules for ERP systems.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              My expertise spans PHP (Yii, Laravel), JavaScript, Python, Java, C++, C#, and various databases. I'm passionate about requirements analysis, solution design, and building scalable systems.
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">Highlights</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>✓ 8+ years professional experience</li>
              <li>✓ 5 enterprise projects deployed</li>
              <li>✓ Expert in Yii, Laravel, PHP, C#</li>
              <li>✓ Specialized in ERP & E-commerce</li>
              <li>✓ Multi-platform API integration</li>
              <li>✓ Languages: Arabic (Native), English (B2)</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
