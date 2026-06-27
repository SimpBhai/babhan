'use client'

import { Card, Section } from '@/lib/deck-data'
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'
import { useState } from 'react'

interface CardViewerProps {
  card: Card
  cardNumber: number
  totalCards: number
}

export function CardViewer({ card, cardNumber, totalCards }: CardViewerProps) {
  const [expandedSections, setExpandedSections] = useState<Set<number>>(
    new Set([0])
  )

  const toggleSection = (index: number) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedSections(newExpanded)
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Card Header */}
      <div className="mb-8">
        <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">
          Card {cardNumber} of {totalCards}
        </div>
        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white mb-4 text-balance">
          {card.title}
        </h1>
      </div>

      {/* Sections */}
      <div className="space-y-4 mb-8">
        {card.sections.map((section, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => toggleSection(index)}
              className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-between"
              aria-expanded={expandedSections.has(index)}
            >
              <h2 className="text-lg font-serif text-gray-900 dark:text-white text-left">
                {section.heading}
              </h2>
              <div className="ml-4 flex-shrink-0">
                {expandedSections.has(index) ? (
                  <ChevronUp className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                )}
              </div>
            </button>

            {expandedSections.has(index) && (
              <div className="px-6 py-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  {section.content}
                </p>

                {section.subsections && section.subsections.length > 0 && (
                  <div className="space-y-3 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    {section.subsections.map((subsection, subIndex) => (
                      <div key={subIndex}>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {subsection.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                          {subsection.content}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Sources */}
      {card.sources && card.sources.length > 0 && (
        <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-600">
          <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-3">
            Sources
          </h3>
          <div className="space-y-2">
            {card.sources.map((source, index) => (
              <a
                key={index}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 transition-colors"
              >
                <span>{source.label}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
