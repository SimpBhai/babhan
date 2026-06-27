'use client'

import { ThemeProvider } from '@/lib/theme-context'
import { ThemeToggle } from './theme-toggle'
import { Analytics } from '@vercel/analytics/next'

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ThemeToggle />
      {children}
      {process.env.NODE_ENV === 'production' && <Analytics />}
    </ThemeProvider>
  )
}
