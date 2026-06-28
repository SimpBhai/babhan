# Development Guide - Evidence Deck

A comprehensive guide for developers working with the Evidence Deck codebase.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Development Setup](#development-setup)
4. [File Structure](#file-structure)
5. [Core Components](#core-components)
6. [Data Management](#data-management)
7. [Styling & Theming](#styling--theming)
8. [Adding Features](#adding-features)
9. [Testing](#testing)
10. [Performance](#performance)
11. [Deployment](#deployment)

## Project Overview

**Evidence Deck** is a modern presentation framework built with:

- **Framework**: Next.js 16 with React 19
- **Language**: TypeScript 5.7
- **Styling**: Tailwind CSS 4.2
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Package Manager**: pnpm

### Key Features

- Server-side rendering (SSR)
- Client-side interactivity
- Dark mode support
- Responsive design
- Keyboard navigation
- Social media integration

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────┐
│           Next.js Application               │
├─────────────────────────────────────────────┤
│  App Router (pages & layouts)               │
│  ├─ Root Layout (theme, nav)                │
│  ├─ Home Page (presentation)                │
│  ├─ Guides Page                             │
│  └─ About Page                              │
├─────────────────────────────────────────────┤
│  Components (React)                         │
│  ├─ Layout Components (header, footer)      │
│  ├─ Feature Components (deck, cards)        │
│  ├─ Utility Components (theme toggle)       │
│  └─ UI Components (buttons, modals)         │
├─────────────────────────────────────────────┤
│  Libraries                                  │
│  ├─ Framer Motion (animations)              │
│  ├─ Lucide React (icons)                    │
│  └─ shadcn/ui (component primitives)        │
├─────────────────────────────────────────────┤
│  Global State & Context                     │
│  └─ Theme Context (dark/light mode)         │
└─────────────────────────────────────────────┘
```

### Data Flow

```
Deck Data (deck-data.ts)
    ↓
Evidence Deck Component
    ├─ CardViewer (display)
    ├─ Header (progress)
    ├─ SocialFooter (links)
    └─ CardMenu (navigation)
    ↓
User Interaction
    ├─ Keyboard (arrows, shortcuts)
    ├─ Mouse (buttons, links)
    └─ Touch (mobile navigation)
```

## Development Setup

### Prerequisites

- Node.js 18+ (20+ recommended)
- pnpm 8+ (or npm/yarn/bun)
- Git

### Initial Setup

```bash
# Clone repository
git clone https://github.com/yourusername/evidence-deck.git
cd evidence-deck

# Install dependencies
pnpm install

# Create environment file (if needed)
cp .env.example .env.local

# Start development server
pnpm dev
```

Visit `http://localhost:3000`

### Common Commands

```bash
# Development
pnpm dev           # Start dev server with HMR

# Production
pnpm build        # Build optimized production bundle
pnpm start        # Run production server

# Code Quality
pnpm lint         # Run ESLint
pnpm format       # Format code with Prettier

# Testing
pnpm test         # Run tests (if configured)

# Cleanup
pnpm clean        # Remove node_modules and .next
```

## File Structure

```
evidence-deck/
├── app/                           # Next.js App Router
│   ├── layout.tsx                 # Root layout with metadata
│   ├── page.tsx                   # Home page (presentation)
│   ├── globals.css                # Global styles & theme tokens
│   ├── about/
│   │   └── page.tsx              # About page
│   └── guides/
│       └── page.tsx              # Guides page
│
├── components/                    # React components
│   ├── evidence-deck.tsx         # Main deck component
│   ├── card-viewer.tsx           # Card display with sections
│   ├── card-menu.tsx             # Card selection modal
│   ├── header.tsx                # Header with progress
│   ├── social-footer.tsx         # Social media links
│   ├── theme-toggle.tsx          # Dark mode toggle
│   ├── layout-wrapper.tsx        # Provider wrapper
│   └── ui/                       # shadcn/ui components
│       └── button.tsx
│
├── lib/                          # Utilities & hooks
│   ├── deck-data.ts             # Presentation data
│   ├── theme-context.tsx        # Theme provider
│   └── utils.ts                 # Helper functions
│
├── public/                      # Static assets
│   └── [images, icons]
│
├── package.json                 # Dependencies
├── tsconfig.json               # TypeScript config
├── tailwind.config.js          # Tailwind CSS config
├── next.config.mjs             # Next.js config
└── README.md                   # User documentation
```

## Core Components

### 1. EvidenceDeck Component

**File**: `components/evidence-deck.tsx`

Main container managing:
- Card navigation
- Keyboard shortcuts
- Menu state
- Animation transitions

```tsx
export function EvidenceDeck() {
  const [currentCardId, setCurrentCardId] = useState(1)
  const [showMenu, setShowMenu] = useState(false)

  // Navigation logic
  const goToNext = () => { /* ... */ }
  const goToPrevious = () => { /* ... */ }

  // Keyboard handlers
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => { /* ... */ }
  }, [showMenu, currentIndex])

  return (
    <div className="min-h-screen bg-gradient...">
      <Header />
      <CardViewer />
      <SocialFooter />
      {showMenu && <CardMenu />}
    </div>
  )
}
```

### 2. CardViewer Component

**File**: `components/card-viewer.tsx`

Displays individual cards with:
- Expandable sections
- Subsections
- Source citations

```tsx
interface CardViewerProps {
  card: Card
  cardNumber: number
  totalCards: number
}

export function CardViewer({ card, cardNumber, totalCards }: CardViewerProps) {
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set([0]))
  
  // Render card with expandable sections
}
```

### 3. Header Component

**File**: `components/header.tsx`

Features:
- Progress bar
- Card info
- Share/Download buttons
- Keyboard shortcuts display

### 4. SocialFooter Component

**File**: `components/social-footer.tsx`

Displays social media links with hover effects

### 5. CardMenu Component

**File**: `components/card-menu.tsx`

Modal for selecting cards from the deck

## Data Management

### Presentation Data Structure

**File**: `lib/deck-data.ts`

```typescript
export interface Card {
  id: number
  title: string
  sections: Section[]
  sources?: Source[]
}

export interface Section {
  heading: string
  content: string
  subsections?: Array<{
    title: string
    content: string
  }>
}

export interface Source {
  label: string
  url: string
}

export const deckData: Card[] = [
  // Your cards here
]
```

### Adding New Cards

1. Open `lib/deck-data.ts`
2. Add new card to `deckData` array:

```typescript
{
  id: 7,
  title: 'New Card Title',
  sections: [
    {
      heading: 'Section Title',
      content: 'Your content here...',
      subsections: [
        {
          title: 'Detail',
          content: 'More information...'
        }
      ]
    }
  ],
  sources: [
    {
      label: 'Reference',
      url: 'https://example.com'
    }
  ]
}
```

3. IDs must be unique and sequential for best results

## Styling & Theming

### Design Token System

**File**: `app/globals.css`

Uses OKLCH color space with CSS custom properties:

```css
:root {
  --primary: oklch(0.205 0 0);
  --secondary: oklch(0.97 0 0);
  --accent: oklch(0.97 0 0);
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  /* ... more tokens ... */
}

.dark {
  --primary: oklch(0.922 0 0);
  --background: oklch(0.145 0 0);
  /* ... dark mode overrides ... */
}
```

### Tailwind CSS Configuration

Tailwind 4 uses `@theme` directive in CSS:

```css
@theme inline {
  --font-heading: var(--font-serif);
  --font-sans: var(--font-geist-sans);
  --color-primary: var(--primary);
  /* ... more mappings ... */
}
```

### Customizing Colors

1. Edit `app/globals.css`
2. Update color tokens using [OkLCh Color Picker](https://oklch.com)
3. Format: `oklch(lightness chroma hue)`
4. Changes hot-reload immediately

### Dark Mode

- Automatically respects system preference
- Toggle available via `ThemeToggle` component
- Styling handled via `.dark` class on `<html>`

## Adding Features

### Adding a New Page

1. Create directory in `app/`:
   ```bash
   mkdir app/newpage
   ```

2. Create `page.tsx`:
   ```tsx
   export default function NewPage() {
     return <main>{/* Content */}</main>
   }
   ```

3. Add to navigation in `components/layout-wrapper.tsx`

### Adding a New Component

1. Create in `components/`:
   ```bash
   touch components/my-component.tsx
   ```

2. Template:
   ```tsx
   'use client'  // if interactive

   interface MyComponentProps {
     title: string
     // ... more props
   }

   export function MyComponent({ title }: MyComponentProps) {
     return <div>{/* Content */}</div>
   }
   ```

3. Import and use:
   ```tsx
   import { MyComponent } from '@/components/my-component'
   ```

### Adding Keyboard Shortcuts

Edit `components/evidence-deck.tsx` in the `handleKeyDown` effect:

```typescript
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'YourKey') {
      e.preventDefault()
      // Your action
    }
  }
  
  window.addEventListener('keydown', handleKeyDown)
  return () => window.removeEventListener('keydown', handleKeyDown)
}, [])
```

## Testing

### Manual Testing Checklist

- [ ] Desktop navigation (arrows, Home, End keys)
- [ ] Mobile touch navigation
- [ ] Dark mode toggle
- [ ] Keyboard shortcuts
- [ ] Social links open correctly
- [ ] Responsive layout (all breakpoints)
- [ ] Share functionality
- [ ] Download functionality
- [ ] Menu opens/closes correctly
- [ ] Animations smooth
- [ ] Accessibility (ARIA labels)

### Browser Testing

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

## Performance

### Optimization Tips

1. **Code Splitting**: Next.js automatically splits by route
2. **Image Optimization**: Use Next.js Image component
3. **CSS**: Tailwind CSS purges unused styles in production
4. **Lazy Loading**: Use `React.lazy()` for heavy components
5. **Bundle Analysis**:
   ```bash
   ANALYZE=true pnpm build
   ```

### Metrics to Monitor

- **LCP**: Largest Contentful Paint
- **FID**: First Input Delay
- **CLS**: Cumulative Layout Shift
- **TTFB**: Time to First Byte

Use [Vercel Analytics](https://vercel.com/analytics) to track performance.

## Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Connect repo to Vercel
3. Automatic deployments on push

```bash
git push origin main
# Vercel automatically deploys
```

### Environment Variables

Required for production:
- `NODE_ENV=production`
- Custom variables in Vercel dashboard

### Pre-Deployment Checklist

- [ ] Run `pnpm lint`
- [ ] Run `pnpm build` (verify no errors)
- [ ] Test production build locally: `pnpm start`
- [ ] Test in multiple browsers
- [ ] Verify all routes work
- [ ] Check performance metrics
- [ ] Run accessibility audit

### Build Output

```bash
pnpm build
# Generates:
# - .next/
# - out/ (if static export enabled)
```

## Troubleshooting

### Dev Server Issues

```bash
# Clear cache
rm -rf .next node_modules pnpm-lock.yaml

# Reinstall
pnpm install

# Restart dev server
pnpm dev
```

### Build Errors

```bash
# Check TypeScript
npx tsc --noEmit

# Check Tailwind
# - Verify tailwind.config.js
# - Check app/globals.css

# Analyze bundle
ANALYZE=true pnpm build
```

### Component Issues

- Check console logs
- Verify TypeScript types
- Ensure all imports are correct
- Check for missing closing tags

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

## Getting Help

1. Check existing issues on GitHub
2. Read error messages carefully
3. Consult documentation
4. Ask in community forums
5. Open a new GitHub issue with details

---

Happy developing! For questions or suggestions, please open an issue or contact the team.
