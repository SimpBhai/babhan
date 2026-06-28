'use client'

import { deckData } from '@/lib/deck-data'
import { useParams } from 'next/navigation'
import { Header } from '@/components/header'
import { CardViewer } from '@/components/card-viewer'
import { SocialFooter } from '@/components/social-footer'
import { ChevronLeft, ChevronRight, Copy, Info } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTheme } from '@/lib/theme-context'
import { useEffect, useState, useMemo } from 'react'
import { CardMenu } from '@/components/card-menu'

interface ChapterContent {
  chapterId: number
  currentCard: (typeof deckData)[0] | null
  currentIndex: number
}

export default function ChapterPage() {
  const params = useParams()
  const { theme, toggleTheme } = useTheme()
  
  // Always call hooks in the same order
  const [mounted, setMounted] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [chapterContent, setChapterContent] = useState<ChapterContent>({
    chapterId: 0,
    currentCard: null,
    currentIndex: -1,
  })

  // Mount effect
  useEffect(() => {
    setMounted(true)
  }, [])

  // Parse chapter from params
  useEffect(() => {
    if (!params?.id) return

    const id = parseInt(params.id as string, 10)
    if (!isNaN(id) && id >= 1 && id <= deckData.length) {
      const currentCard = deckData.find((card) => card.id === id)
      const currentIndex = deckData.findIndex((card) => card.id === id)

      setChapterContent({
        chapterId: id,
        currentCard: currentCard || null,
        currentIndex,
      })
    }
  }, [params?.id])

  // Navigation functions
  const goToNext = () => {
    if (chapterContent.currentIndex < deckData.length - 1) {
      const nextChapter = deckData[chapterContent.currentIndex + 1]
      window.location.href = `/chapter/${nextChapter.id}`
    }
  }

  const goToPrevious = () => {
    if (chapterContent.currentIndex > 0) {
      const prevChapter = deckData[chapterContent.currentIndex - 1]
      window.location.href = `/chapter/${prevChapter.id}`
    }
  }

  const handleShare = () => {
    const chapterUrl = `${window.location.origin}/chapter/${chapterContent.chapterId}`
    navigator.clipboard.writeText(chapterUrl).then(() => {
      alert(`Chapter link copied to clipboard!\n${chapterUrl}`)
    })
  }

  // Keyboard handler
  useEffect(() => {
    if (!mounted || chapterContent.chapterId === 0) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'c' || e.key === 'C') {
        setShowMenu((prev) => !prev)
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goToPrevious()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        goToNext()
      } else if (e.key === 'Home') {
        e.preventDefault()
        window.location.href = `/chapter/1`
      } else if (e.key === 'End') {
        e.preventDefault()
        window.location.href = `/chapter/${deckData[deckData.length - 1].id}`
      } else if (e.key === 'Escape') {
        setShowMenu(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mounted, chapterContent.chapterId, chapterContent.currentIndex])

  if (!mounted || chapterContent.chapterId === 0) {
    return null
  }

  if (!chapterContent.currentCard || chapterContent.currentIndex === -1) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Chapter Not Found</h1>
          <Link href="/chapter/1" className="text-blue-600 hover:underline">
            Go to Chapter 1
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 transition-colors duration-200">
      <Header
        title={chapterContent.currentCard.title}
        cardNumber={chapterContent.currentIndex + 1}
        totalCards={deckData.length}
        onShare={handleShare}
      />

      <div className="relative flex flex-col items-center justify-center min-h-screen pt-32 pb-40 gap-8 px-4 py-8">
        {/* Content with Side Navigation (Desktop) */}
        <div className="w-full max-w-4xl hidden md:flex items-center justify-center gap-2 md:gap-6">
          {/* Left Navigation Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToPrevious}
            disabled={chapterContent.currentIndex === 0}
            className="flex-shrink-0 p-3 rounded-lg bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-colors"
            aria-label="Previous chapter"
            title="Previous chapter (← key)"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <CardViewer
            card={chapterContent.currentCard}
            cardNumber={chapterContent.currentIndex + 1}
            totalCards={deckData.length}
          />

          {/* Right Navigation Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToNext}
            disabled={chapterContent.currentIndex === deckData.length - 1}
            className="flex-shrink-0 p-3 rounded-lg bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-colors"
            aria-label="Next chapter"
            title="Next chapter (→ key)"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Mobile Card Viewer */}
        <div className="w-full md:hidden">
          <CardViewer
            card={chapterContent.currentCard}
            cardNumber={chapterContent.currentIndex + 1}
            totalCards={deckData.length}
          />
        </div>

        {/* Chapters Menu Modal */}
        {showMenu && (
          <CardMenu
            cards={deckData}
            currentCardId={chapterContent.chapterId}
            onSelectCard={(id) => {
              window.location.href = `/chapter/${id}`
            }}
            onClose={() => setShowMenu(false)}
          />
        )}
      </div>

      {/* Bottom Navigation Controls */}
      <div className="fixed bottom-14 left-0 right-0 flex items-center justify-center gap-2 sm:gap-4 z-30 px-4">
        {/* Copy/Share Link Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleShare}
          className="p-3 rounded-lg bg-green-600 dark:bg-green-500 hover:bg-green-700 dark:hover:bg-green-600 text-white transition-colors flex-shrink-0"
          title="Copy chapter link to clipboard"
          aria-label="Copy chapter link"
        >
          <Copy className="w-5 h-5" />
        </motion.button>

        {/* Previous Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={goToPrevious}
          disabled={chapterContent.currentIndex === 0}
          className="p-3 rounded-lg bg-gray-700 dark:bg-gray-600 hover:bg-gray-800 dark:hover:bg-gray-500 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-colors flex-shrink-0"
          aria-label="Previous chapter"
          title="Previous chapter (← key)"
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>

        {/* Chapters Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowMenu(!showMenu)}
          className="px-6 py-2 rounded-lg bg-yellow-600 dark:bg-yellow-500 hover:bg-yellow-700 dark:hover:bg-yellow-600 text-white font-semibold transition-colors flex-shrink-0"
          title="Show chapters menu (C key)"
        >
          CHAPTERS
        </motion.button>

        {/* Next Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={goToNext}
          disabled={chapterContent.currentIndex === deckData.length - 1}
          className="p-3 rounded-lg bg-gray-700 dark:bg-gray-600 hover:bg-gray-800 dark:hover:bg-gray-500 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-colors flex-shrink-0"
          aria-label="Next chapter"
          title="Next chapter (→ key)"
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>

        {/* About Link */}
        <Link
          href="/about"
          className="p-3 rounded-lg bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white transition-colors flex-shrink-0"
          title="About Evidence Deck"
          aria-label="About"
        >
          <Info className="w-5 h-5" />
        </Link>
      </div>

      <SocialFooter />
    </div>
  )
}
