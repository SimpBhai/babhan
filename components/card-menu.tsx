'use client'

import { Card } from '@/lib/deck-data'
import { X } from 'lucide-react'

interface CardMenuProps {
  cards: Card[]
  currentCardId: number
  onSelectCard: (id: number) => void
  onClose: () => void
}

export function CardMenu({
  cards,
  currentCardId,
  onSelectCard,
  onClose,
}: CardMenuProps) {
  const handleCardClick = (id: number) => {
    onSelectCard(id)
    onClose()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-label="Chapters menu"
    >
      <div
        className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-auto p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-serif text-gray-900 dark:text-white">
            Chapters
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {cards.map((card) => (
            <button
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className={`p-4 rounded-lg text-left transition-all duration-200 ${
                currentCardId === card.id
                  ? 'bg-yellow-200 dark:bg-yellow-900 border-2 border-yellow-600 dark:border-yellow-400'
                  : 'bg-gray-100 dark:bg-gray-800 border-2 border-transparent hover:border-yellow-300 dark:hover:border-yellow-600'
              }`}
            >
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                Chapter {card.id}
              </div>
              <div className="text-base font-serif text-gray-900 dark:text-white mt-1">
                {card.title}
              </div>
            </button>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400">
          <p>Press <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">C</kbd> to open this menu</p>
          <p className="mt-2">Use <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">←</kbd> <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">→</kbd> to navigate</p>
        </div>
      </div>
    </div>
  )
}
