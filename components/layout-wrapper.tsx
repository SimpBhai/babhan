'use client'

import { ThemeProvider } from '@/lib/theme-context'
import { ThemeToggle } from './theme-toggle'
import { Analytics } from '@vercel/analytics/next'
import Link from 'next/link'
import { Home, BookOpen, Info } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState<string | null>(null)

  const navItems = [
    { href: '/', icon: Home, label: 'Home', title: 'Main Presentation' },
    { href: '/guides', icon: BookOpen, label: 'Guides', title: 'Guides & Tutorials' },
    { href: '/about', icon: Info, label: 'About', title: 'About Evidence Deck' },
  ]

  return (
    <ThemeProvider>
      <ThemeToggle />
      
      {/* Icon Navigation */}
      <nav className="fixed top-6 right-6 z-40 flex items-center gap-3">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.href}
              onHoverStart={() => setIsHovered(item.label)}
              onHoverEnd={() => setIsHovered(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.href}
                className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl"
                title={item.title}
                aria-label={item.label}
              >
                <Icon className="w-5 h-5" />
                {isHovered === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute -bottom-10 px-3 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded-md whitespace-nowrap font-medium"
                  >
                    {item.label}
                  </motion.div>
                )}
              </Link>
            </motion.div>
          )
        })}
      </nav>

      {children}
      {process.env.NODE_ENV === 'production' && <Analytics />}
    </ThemeProvider>
  )
}
