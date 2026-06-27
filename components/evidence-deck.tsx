'use client'

import { deckData } from '@/lib/deck-data'
import { useEffect, useState } from 'react'
import { CardMenu } from './card-menu'
import { CardViewer } from './card-viewer'
import { SocialFooter } from './social-footer'
import { Header } from './header'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

export function EvidenceDeck() {
  const [currentCardId, setCurrentCardId] = useState(1)
  const [showMenu, setShowMenu] = useState(false)
  const [mounted, setMounted] = useState(false)

  const currentCard = deckData.find((card) => card.id === currentCardId)
  const currentIndex = deckData.findIndex((card) => card.id === currentCardId)

  useEffect(() => {
    setMounted(true)
  }, [])

  const goToCard = (id: number) => {
    const card = deckData.find((c) => c.id === id)
    if (card) {
      setCurrentCardId(card.id)
    }
  }

  const goToPrevious = () => {
    if (currentIndex > 0) {
      goToCard(deckData[currentIndex - 1].id)
    }
  }

  const goToNext = () => {
    if (currentIndex < deckData.length - 1) {
      goToCard(deckData[currentIndex + 1].id)
    }
  }

  const goToFirst = () => {
    goToCard(deckData[0].id)
  }

  const goToLast = () => {
    goToCard(deckData[deckData.length - 1].id)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Evidence Deck - ${currentCard?.title}`,
        text: `Check out this card: ${currentCard?.title}`,
        url: window.location.href,
      })
    } else {
      // Fallback: copy to clipboard
      const url = `${window.location.origin}?card=${currentCardId}`
      navigator.clipboard.writeText(url)
      alert('Card link copied to clipboard!')
    }
  }

  const handleDownload = () => {
    const content = JSON.stringify(deckData, null, 2)
    const blob = new Blob([content], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'evidence-deck.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'c' || e.key === 'C') {
        setShowMenu(!showMenu)
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goToPrevious()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        goToNext()
      } else if (e.key === 'Home') {
        e.preventDefault()
        goToFirst()
      } else if (e.key === 'End') {
        e.preventDefault()
        goToLast()
      } else if (e.key === 'Escape') {
        setShowMenu(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [showMenu, currentIndex])

  if (!mounted || !currentCard) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 transition-colors duration-200">
      {/* Header */}
      <Header
        title={currentCard.title}
        cardNumber={currentIndex + 1}
        totalCards={deckData.length}
        onShare={handleShare}
        onDownload={handleDownload}
      />

      {/* Main Content */}
      <motion.div
        key={currentCardId}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center justify-center min-h-screen pt-32 pb-24 px-4 sm:px-6 md:pt-28 md:pb-8"
      >
        {/* Content with Side Navigation (Desktop) */}
        <div className="w-full max-w-4xl hidden md:flex items-center justify-center gap-2 md:gap-6">
          {/* Left Navigation Button - Desktop Only */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className="flex-shrink-0 p-3 rounded-lg bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-colors"
            aria-label="Previous chapter"
            title="Previous chapter (← key)"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          {/* Card Viewer */}
          <CardViewer
            card={currentCard}
            cardNumber={currentIndex + 1}
            totalCards={deckData.length}
          />

          {/* Right Navigation Button - Desktop Only */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToNext}
            disabled={currentIndex === deckData.length - 1}
            className="flex-shrink-0 p-3 rounded-lg bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-colors"
            aria-label="Next chapter"
            title="Next chapter (→ key)"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Mobile Card Viewer - No side buttons */}
        <div className="w-full md:hidden">
          <CardViewer
            card={currentCard}
            cardNumber={currentIndex + 1}
            totalCards={deckData.length}
          />
        </div>

        {/* Bottom Navigation Controls */}
        <div className="fixed bottom-20 left-0 right-0 flex items-center justify-center gap-2 sm:gap-4 z-30 px-4">
          {/* Previous Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToPrevious}
            disabled={currentIndex === 0}
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
            disabled={currentIndex === deckData.length - 1}
            className="p-3 rounded-lg bg-gray-700 dark:bg-gray-600 hover:bg-gray-800 dark:hover:bg-gray-500 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-colors flex-shrink-0"
            aria-label="Next chapter"
            title="Next chapter (→ key)"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Mobile Navigation & Controls */}
        <div className="fixed bottom-24 left-4 right-4 sm:bottom-8 sm:left-auto sm:right-8 flex flex-col sm:flex-row gap-3 z-30">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className="md:hidden p-3 rounded-lg bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-colors flex-1"
            aria-label="Previous card"
          >
            <ChevronLeft className="w-5 h-5 mx-auto" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowMenu(!showMenu)}
            className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-yellow-600 dark:bg-yellow-500 hover:bg-yellow-700 dark:hover:bg-yellow-600 text-white font-semibold transition-colors"
            title="Show chapters menu (C key)"
          >
            CHAPTERS
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToNext}
            disabled={currentIndex === deckData.length - 1}
            className="md:hidden p-3 rounded-lg bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-colors flex-1"
            aria-label="Next card"
          >
            <ChevronRight className="w-5 h-5 mx-auto" />
          </motion.button>
        </div>
      </motion.div>

      {/* Social Footer */}
      <SocialFooter />

      {/* Card Menu Modal */}
      {showMenu && (
        <CardMenu
          cards={deckData}
          currentCardId={currentCardId}
          onSelectCard={goToCard}
          onClose={() => setShowMenu(false)}
        />
      )}
    </div>
  )
}
