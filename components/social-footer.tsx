'use client'

import { motion } from 'framer-motion'

interface SocialLink {
  label: string
  url: string
  icon: React.ReactNode
  brandColor: string
}

// Brand-accurate SVG icons
const TwitterIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
)

const InstagramIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
  </svg>
)

const DiscordIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 00-5.487 0c-.163-.386-.397-.875-.609-1.25a.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.056 19.9 19.9 0 005.993 3.03.078.078 0 00.085-.027c.462-.637.874-1.31 1.226-2.019a.077.077 0 00-.042-.107 13.107 13.107 0 01-1.872-.892.077.077 0 00-.008-.128 10.713 10.713 0 00.372-.294.075.075 0 00.075-.01 14.047 14.047 0 0012.07 0 .075.075 0 00.075.009c.12.098.246.198.373.294a.077.077 0 00-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.108c.352.709.764 1.382 1.225 2.019a.077.077 0 00.084.028 19.963 19.963 0 006.002-3.03.077.077 0 00.032-.054c.5-4.786-.838-8.895-3.549-12.577a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-.965-2.157-2.156 0-1.193.964-2.157 2.157-2.157 1.193 0 2.156.964 2.156 2.157 0 1.19-.963 2.156-2.156 2.156zm7.975 0c-1.183 0-2.157-.965-2.157-2.156 0-1.193.964-2.157 2.157-2.157 1.193 0 2.156.964 2.156 2.157 0 1.19-.962 2.156-2.156 2.156z" />
  </svg>
)

const socialLinks: SocialLink[] = [
  {
    label: 'Twitter',
    url: 'https://twitter.com',
    icon: <TwitterIcon className="w-5 h-5" />,
    brandColor: 'hover:text-[#1DA1F2]',
  },
  {
    label: 'Instagram',
    url: 'https://instagram.com',
    icon: <InstagramIcon className="w-5 h-5" />,
    brandColor: 'hover:text-[#E4405F]',
  },
  {
    label: 'Discord',
    url: 'https://discord.com',
    icon: <DiscordIcon className="w-5 h-5" />,
    brandColor: 'hover:text-[#5865F2]',
  },
]

export function SocialFooter() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent dark:from-gray-900 dark:to-transparent backdrop-blur-sm pointer-events-none">
      <div className="pointer-events-auto flex items-center justify-center gap-6 py-4 px-6">
        {socialLinks.map((link) => (
          <motion.div
            key={link.label}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 transition-all duration-200 ${link.brandColor}`}
              aria-label={link.label}
              title={`Visit our ${link.label}`}
            >
              {link.icon}
              <span className="absolute bottom-full mb-2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                {link.label}
              </span>
            </a>
          </motion.div>
        ))}
      </div>
    </footer>
  )
}
