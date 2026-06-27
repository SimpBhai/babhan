import { ArrowRight, Code2, Palette, Smartphone, Zap } from 'lucide-react'
import Link from 'next/link'

const guides = [
  {
    title: 'Getting Started',
    description: 'Learn how to set up and run Evidence Deck on your local machine',
    icon: <Zap className="w-8 h-8" />,
    href: '#getting-started',
    points: [
      'Install Node.js and pnpm',
      'Clone the repository',
      'Install dependencies',
      'Run development server',
    ],
  },
  {
    title: 'Creating Content',
    description: 'Add your own cards and customize the presentation deck',
    icon: <Code2 className="w-8 h-8" />,
    href: '#creating-content',
    points: [
      'Edit lib/deck-data.ts',
      'Add new card objects',
      'Include sections and subsections',
      'Add source citations',
    ],
  },
  {
    title: 'Customizing Design',
    description: 'Personalize colors, fonts, and visual styling',
    icon: <Palette className="w-8 h-8" />,
    href: '#customizing-design',
    points: [
      'Modify color tokens in globals.css',
      'Change typography settings',
      'Customize gradients',
      'Update component styling',
    ],
  },
  {
    title: 'Mobile Optimization',
    description: 'Ensure your presentation works perfectly on all devices',
    icon: <Smartphone className="w-8 h-8" />,
    href: '#mobile-optimization',
    points: [
      'Test responsive breakpoints',
      'Optimize touch interactions',
      'Verify keyboard shortcuts',
      'Check accessibility features',
    ],
  },
]

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-gradient-to-b from-white dark:from-gray-900 to-transparent backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 mb-4 transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Presentation
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-2">
            Guides & Tips
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Learn how to make the most of Evidence Deck
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Guide Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="group relative p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg text-yellow-600 dark:text-yellow-400">
                  {guide.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {guide.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {guide.description}
                  </p>
                </div>
              </div>

              <ul className="space-y-2">
                {guide.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-600 dark:bg-yellow-400" />
                    {point}
                  </li>
                ))}
              </ul>

              <a
                href={guide.href}
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 transition-colors"
              >
                Read Guide
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Detailed Sections */}
        <div className="space-y-12">
          {/* Getting Started */}
          <section
            id="getting-started"
            className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              Getting Started
            </h2>
            <div className="prose dark:prose-invert max-w-none space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Evidence Deck is built with modern web technologies and is easy to
                get started with. Follow these steps to set up your local development
                environment.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 rounded p-4 font-mono text-sm overflow-x-auto">
                <pre>{`# 1. Clone the repository
git clone https://github.com/yourusername/evidence-deck.git

# 2. Navigate to project
cd evidence-deck

# 3. Install dependencies
pnpm install

# 4. Start development server
pnpm dev

# 5. Open http://localhost:3000`}</pre>
              </div>
            </div>
          </section>

          {/* Creating Content */}
          <section
            id="creating-content"
            className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              Creating Your Own Content
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Edit the file <code className="bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">
                  lib/deck-data.ts
                </code>{' '}
                to add your own presentation cards:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 rounded p-4 font-mono text-sm overflow-x-auto">
                <pre>{`export const deckData: Card[] = [
  {
    id: 1,
    title: 'Your Title',
    sections: [
      {
        heading: 'Section 1',
        content: 'Your content here...',
        subsections: [
          {
            title: 'Detail',
            content: 'More details...'
          }
        ]
      }
    ],
    sources: [
      {
        label: 'Source Name',
        url: 'https://example.com'
      }
    ]
  }
]`}</pre>
              </div>
            </div>
          </section>

          {/* Customizing Design */}
          <section
            id="customizing-design"
            className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              Customizing Design
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Edit the design tokens in <code className="bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">
                  app/globals.css
                </code>{' '}
                to customize colors and styling:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 rounded p-4 font-mono text-sm overflow-x-auto">
                <pre>{`:root {
  --primary: oklch(0.205 0 0);
  --secondary: oklch(0.97 0 0);
  --accent: oklch(0.97 0 0);
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
}`}</pre>
              </div>
              <p>
                Use{' '}
                <a
                  href="https://oklch.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 dark:text-yellow-400 hover:underline"
                >
                  OkLCh Color Picker
                </a>{' '}
                to generate custom colors.
              </p>
            </div>
          </section>

          {/* Mobile Optimization */}
          <section
            id="mobile-optimization"
            className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              Mobile Optimization
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Evidence Deck is fully responsive and works great on all devices:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Mobile-first design approach</li>
                <li>Touch-optimized navigation buttons (44px minimum)</li>
                <li>Responsive typography and spacing</li>
                <li>Keyboard navigation support</li>
                <li>Bottom navigation for thumb-friendly access</li>
                <li>Optimized for iOS and Android</li>
              </ul>
            </div>
          </section>

          {/* Tips & Best Practices */}
          <section className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              Tips & Best Practices
            </h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">1.</span>
                <span>
                  Keep card titles concise (3-5 words) for better readability
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">2.</span>
                <span>
                  Use subsections to organize complex information hierarchically
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">3.</span>
                <span>
                  Always include sources for credibility and reference
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">4.</span>
                <span>
                  Test your presentation on multiple devices before sharing
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">5.</span>
                <span>
                  Keep content sections under 150 words for better engagement
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">6.</span>
                <span>
                  Use consistent formatting and structure across all cards
                </span>
              </li>
            </ul>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-600 dark:bg-yellow-500 hover:bg-yellow-700 dark:hover:bg-yellow-600 text-white font-semibold rounded-lg transition-colors"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            Back to Presentation
          </Link>
        </div>
      </div>
    </main>
  )
}
