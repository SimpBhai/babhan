'use client'

import { deckData } from '@/lib/deck-data'
import { useEffect, useState } from 'react'
import { CardMenu } from './card-menu'
import { CardViewer } from './card-viewer'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function EvidenceDeck() {
  const [currentCardId, setCurrentCardId] = useState(1)
  const [showMenu, setShowMenu] = useState(false)

  const currentCard = deckData.find((card) => card.id === currentCardId)
  const currentIndex = deckData.findIndex((card) => card.id === currentCardId)

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

  if (!currentCard) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 transition-colors duration-200">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen p-6 md:p-8">
        {/* Navigation Buttons */}
        <div className="fixed top-1/2 left-6 -translate-y-1/2 z-30 hidden md:flex">
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className="p-3 rounded-lg bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-colors"
            aria-label="Previous card"
            title="Previous card (← key)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>

        <div className="fixed top-1/2 right-6 -translate-y-1/2 z-30 hidden md:flex">
          <button
            onClick={goToNext}
            disabled={currentIndex === deckData.length - 1}
            className="p-3 rounded-lg bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-colors"
            aria-label="Next card"
            title="Next card (→ key)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Card Viewer */}
        <CardViewer
          card={currentCard}
          cardNumber={currentIndex + 1}
          totalCards={deckData.length}
        />

        {/* Mobile Navigation & Controls */}
        <div className="fixed bottom-6 left-6 right-6 flex flex-col md:flex-row gap-3 md:bottom-8 md:left-8 md:right-auto md:w-auto z-30">
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className="md:hidden p-3 rounded-lg bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-colors flex-1"
            aria-label="Previous card"
          >
            <ChevronLeft className="w-5 h-5 mx-auto" />
          </button>

          <button
            onClick={() => setShowMenu(!showMenu)}
            className="flex-1 md:flex-none md:mb-0 px-4 py-2 rounded-lg bg-yellow-600 dark:bg-yellow-500 hover:bg-yellow-700 dark:hover:bg-yellow-600 text-white font-semibold transition-colors"
            title="Show cards menu (C key)"
          >
            CARDS
          </button>

          <button
            onClick={goToNext}
            disabled={currentIndex === deckData.length - 1}
            className="md:hidden p-3 rounded-lg bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-colors flex-1"
            aria-label="Next card"
          >
            <ChevronRight className="w-5 h-5 mx-auto" />
          </button>
        </div>

        {/* Keyboard Help */}
        <div className="fixed bottom-6 right-6 text-xs text-gray-600 dark:text-gray-400 hidden md:block">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg">
            <p className="font-semibold mb-1">Keyboard Shortcuts</p>
            <p>
              <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-xs font-mono">
                C
              </kbd>{' '}
              Menu
            </p>
            <p>
              <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-xs font-mono">
                ←→
              </kbd>{' '}
              Navigate
            </p>
            <p>
              <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-xs font-mono">
                Home/End
              </kbd>{' '}
              Jump
            </p>
          </div>
        </div>
      </div>

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
