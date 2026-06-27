'use client'

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface ThemeContextType {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  // Initialize theme on mount
  useEffect(() => {
    // Prevent hydration mismatch by checking for stored theme
    try {
      const storedTheme = localStorage.getItem('evidence-deck-theme') as
        | 'light'
        | 'dark'
        | null
      if (storedTheme === 'dark' || storedTheme === 'light') {
        setTheme(storedTheme)
      } else if (
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        setTheme('dark')
      }
    } catch (e) {
      // localStorage might not be available
    }
    setMounted(true)
  }, [])

  // Update DOM when theme changes
  useEffect(() => {
    if (!mounted) return

    try {
      localStorage.setItem('evidence-deck-theme', theme)
    } catch (e) {
      // localStorage might not be available
    }

    const html = document.documentElement
    if (theme === 'dark') {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  // During SSR/initial render, return unmounted state to prevent hydration mismatch
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
