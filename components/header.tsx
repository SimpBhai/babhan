'use client'

import { motion } from 'framer-motion'
import { Info } from 'lucide-react'
import { useState } from 'react'

interface HeaderProps {
  title: string
  cardNumber: number
  totalCards: number
  onShare?: () => void
  onDownload?: () => void
}

export function Header({
  title,
  cardNumber,
  totalCards,
  onShare,
  onDownload,
}: HeaderProps) {
  const [showInfo, setShowInfo] = useState(false)
  const progress = (cardNumber / totalCards) * 100

  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-gradient-to-b from-white dark:from-gray-900 via-white/80 dark:via-gray-900/80 to-transparent backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Title & Info */}
          <div className="flex-1 min-w-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white truncate">
                {title}
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Chapter {cardNumber} of {totalCards}
              </p>
            </motion.div>
          </div>

          {/* Right: Info Button Only */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowInfo(!showInfo)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
            title="Show keyboard shortcuts"
          >
            <Info className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Progress Bar */}
        <motion.div
          className="mt-4 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </motion.div>

        {/* Info Tooltip */}
        {showInfo && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg"
          >
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              Keyboard Shortcuts:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-gray-600 dark:text-gray-400">
              <div>
                <kbd className="px-2 py-1 bg-white dark:bg-gray-800 rounded border">
                  C
                </kbd>{' '}
                Menu
              </div>
              <div>
                <kbd className="px-2 py-1 bg-white dark:bg-gray-800 rounded border">
                  ←→
                </kbd>{' '}
                Navigate
              </div>
              <div>
                <kbd className="px-2 py-1 bg-white dark:bg-gray-800 rounded border">
                  Home
                </kbd>{' '}
                First
              </div>
              <div>
                <kbd className="px-2 py-1 bg-white dark:bg-gray-800 rounded border">
                  End
                </kbd>{' '}
                Last
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  )
}
