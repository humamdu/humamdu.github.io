'use client'

import { socialLinks } from '@/data/social'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-2xl font-bold gradient-text mb-4 md:mb-0"></div>
          
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
                title={link.name}
              >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox={link.viewBox}>
                <path fill="#fff" d={link.icon}></path>
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {year} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
