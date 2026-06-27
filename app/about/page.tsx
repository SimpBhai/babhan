import { ArrowRight, Github, Heart } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
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
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white">
            About Evidence Deck
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Content */}
        <div className="space-y-8">
          {/* What is Evidence Deck */}
          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              What is Evidence Deck?
            </h2>
            <div className="prose dark:prose-invert max-w-none space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Evidence Deck is a modern, professional presentation framework built
                for the web. It combines beautiful design with powerful functionality
                to help you create engaging, evidence-based presentations.
              </p>
              <p>
                Whether you&apos;re presenting research findings, business proposals,
                or educational content, Evidence Deck provides all the tools you need
                to deliver impactful presentations with confidence.
              </p>
            </div>
          </section>

          {/* Features */}
          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-6">
              Why Choose Evidence Deck?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Modern Design',
                  description:
                    'Clean, professional interface with smooth animations and beautiful typography',
                },
                {
                  title: 'Fully Responsive',
                  description:
                    'Works perfectly on desktop, tablet, and mobile devices',
                },
                {
                  title: 'Dark Mode Support',
                  description:
                    'Eye-friendly dark mode that respects system preferences',
                },
                {
                  title: 'Keyboard Navigation',
                  description:
                    'Navigate presentations efficiently with keyboard shortcuts',
                },
                {
                  title: 'Easy to Customize',
                  description:
                    'Simple, well-documented code for easy customization',
                },
                {
                  title: 'Open Source',
                  description:
                    'MIT licensed, fully open source and community-driven',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Technology Stack */}
          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-6">
              Technology Stack
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Frontend
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-600" />
                    Next.js 16 (React Framework)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-600" />
                    React 19 (UI Library)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-600" />
                    Tailwind CSS 4.2 (Styling)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-600" />
                    TypeScript 5.7 (Type Safety)
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Enhancements
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-600" />
                    Framer Motion (Animations)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-600" />
                    Lucide React (Icons)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-600" />
                    shadcn/ui (Components)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-600" />
                    Vercel Analytics (Tracking)
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg p-8 border border-yellow-200 dark:border-yellow-800">
            <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              To empower professionals and educators with beautiful, modern tools for
              creating and delivering compelling evidence-based presentations.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              We believe that great presentations should be accessible to everyone,
              which is why Evidence Deck is open source, well-documented, and easy to
              customize.
            </p>
          </section>

          {/* Getting Started */}
          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              Get Started Today
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Ready to create your first presentation? Check out our comprehensive
              guides and documentation to get up and running in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/guides"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-yellow-600 dark:bg-yellow-500 hover:bg-yellow-700 dark:hover:bg-yellow-600 text-white font-semibold rounded-lg transition-colors"
              >
                Read Guides
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg transition-colors"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
            </div>
          </section>

          {/* Credits */}
          <section className="text-center py-8">
            <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
              Built with <Heart className="w-5 h-5 text-red-500" /> using modern web
              technologies
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
              MIT License © 2025 Evidence Deck
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
