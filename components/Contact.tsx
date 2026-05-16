'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

interface FormData {
  name: string
  email: string
  message: string
}

export function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = async (data: FormData) => {
    try {
      // Handle form submission here
      console.log('Form data:', data)
      setSubmitted(true)
      reset()
      setTimeout(() => setSubmitted(false), 3000)
    } catch (error) {
      console.error('Form submission error:', error)
    }
  }

  return (
    <section id="contact" className="section-container bg-gray-50 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-8 text-center">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="card">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+963937967058" className="text-blue-600 dark:text-blue-400 hover:underline">
                    +963 937 967 058
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">✉️</span>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:humam720@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                    humam720@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">💼</span>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <a href="https://linkedin.com/in/humam-duibes" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                    linkedin.com/in/humam-duibes
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">💬</span>
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <a href="https://api.whatsapp.com/send/?phone=%2B963937967058" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Message on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg text-center">
                Thanks for reaching out! I'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 card">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              {...register('name', { required: true })}
              type="text"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400"
              placeholder="Your name"
            />
            {errors.name && <span className="text-red-600 text-sm">Name is required</span>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
              type="email"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400"
              placeholder="your@email.com"
            />
            {errors.email && <span className="text-red-600 text-sm">Valid email is required</span>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              {...register('message', { required: true, minLength: 10 })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 resize-none"
              rows={5}
              placeholder="Your message here..."
            />
            {errors.message && <span className="text-red-600 text-sm">Message is required (min 10 chars)</span>}
          </div>

          <button type="submit" className="btn-primary w-full">
            Send Message
          </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
