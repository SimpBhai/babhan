'use client'

import { ThemeProvider } from '@/lib/theme-context'
import { Analytics } from '@vercel/analytics/next'

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      {process.env.NODE_ENV === 'production' && <Analytics />}
    </ThemeProvider>
  )
}
