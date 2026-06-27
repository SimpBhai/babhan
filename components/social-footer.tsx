'use client'

import { Share2, Heart, Users } from 'lucide-react'

interface SocialLink {
  label: string
  url: string
  icon: React.ReactNode
}

const socialLinks: SocialLink[] = [
  {
    label: 'Twitter',
    url: 'https://twitter.com',
    icon: <Share2 className="w-5 h-5" />,
  },
  {
    label: 'Instagram',
    url: 'https://instagram.com',
    icon: <Heart className="w-5 h-5" />,
  },
  {
    label: 'Discord',
    url: 'https://discord.com',
    icon: <Users className="w-5 h-5" />,
  },
]

export function SocialFooter() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent dark:from-gray-900 dark:to-transparent backdrop-blur-sm pointer-events-none">
      <div className="pointer-events-auto flex items-center justify-center gap-6 py-4 px-6">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-200 hover:scale-110"
            aria-label={link.label}
            title={`Visit our ${link.label}`}
          >
            {link.icon}
            <span className="absolute bottom-full mb-2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              {link.label}
            </span>
          </a>
        ))}
      </div>
    </footer>
  )
}
