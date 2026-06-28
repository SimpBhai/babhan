# Evidence Deck - Multi-Page Interactive Presentation Framework

A modern, responsive, multi-page presentation framework built with Next.js 16, React 19, Tailwind CSS, and Framer Motion. Create and share individual chapters with unique URLs (`/chapter/1`, `/chapter/2`, etc.), smooth navigation, and one-click copy-to-clipboard sharing for each chapter.

![Next.js](https://img.shields.io/badge/Next.js-16+-black?logo=next.js)
![React](https://img.shields.io/badge/React-19+-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.2-38B2AC?logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11+-black?logo=framer)

## Key Features

### 🌐 **Multi-Page Architecture**
- Each chapter has its own dedicated page: `/chapter/1`, `/chapter/2`, `/chapter/3`, etc.
- Unique, shareable URLs for every chapter
- Direct chapter links automatically update based on current chapter
- SEO-friendly dynamic routing structure
- No page reload when navigating (SPA-like experience)

### 🔗 **Smart Copy-to-Clipboard Links**
- **Green copy icon button** in header upper-right corner
- Click to copy the **exact current chapter URL** to clipboard
- Shows confirmation alert with the copied URL
- Chapter 1 copies: `yoursite.com/chapter/1`
- Chapter 2 copies: `yoursite.com/chapter/2`
- Perfect for sharing specific chapters with others
- Works on all pages automatically

### 🎯 **Seamless Navigation**
- Previous/Next buttons navigate between sequential chapters
- CHAPTERS menu button opens modal to jump to any chapter
- Clicking a chapter in menu navigates to `/chapter/X`
- Keyboard shortcuts for power users (← →, C, Home, End, Esc)
- Visual feedback on all buttons (hover/tap animations)

### 🎨 **Modern & Responsive Design**
- Fully responsive: mobile (375px), tablet, desktop (1280px+)
- Dark mode support with automatic system preference detection
- Smooth animations with Framer Motion
- Gradient backgrounds and glass-morphism effects
- Mobile: bottom navigation with stacked buttons
- Desktop: side navigation with larger buttons

### 🌙 **Theme & Customization**
- Light/dark mode toggle in navigation bar
- Smooth theme transitions between modes
- Persistent theme preference in localStorage
- Beautiful gradient backgrounds for each theme
- Customizable color scheme via CSS variables

### ♿ **Accessibility & UX**
- Semantic HTML (main, header, footer, nav)
- ARIA labels on all interactive elements
- Keyboard navigation fully functional
- Screen reader friendly
- Touch-friendly button sizing (44px minimum)
- Skip to content links for power users

### 📱 **Mobile-First Responsive Design**
- Optimized mobile layout with bottom navigation
- Desktop layout with enhanced side navigation
- Tablet-optimized spacing and typography
- Touch gestures and swipe support
- Responsive images and typography
- Reduced spacing on small screens

## Navigation Bar Layout

The bottom navigation bar provides quick access to all key features:

```
[Theme Toggle] [Previous] [CHAPTERS] [Next] [Share Chapter]
     (Moon)        (<)        (Yellow)   (>)    (Copy Icon)
```

### Navigation Controls
- **Theme Toggle (Left)**: Click moon/sun icon to switch between light/dark mode
- **Previous Button**: Navigate to previous chapter (keyboard: ←)
- **CHAPTERS Button**: Open menu to jump to any chapter
- **Next Button**: Navigate to next chapter (keyboard: →)
- **Share Button (Green)**: Copy current chapter link to clipboard

## Quick Start

### Prerequisites
- Node.js 18+ (recommend 20+)
- pnpm (recommended) or npm/yarn/bun

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/evidence-deck.git
cd evidence-deck

# Install dependencies
pnpm install
# or npm install or yarn install
```

### Development

```bash
# Start the development server
pnpm dev

# Open in browser
# http://localhost:3000
```

### Build for Production

```bash
# Build the project
pnpm build

# Start the production server
pnpm start
```

## Project Structure

```
evidence-deck/
├── app/
│   ├── chapter/
│   │   └── [id]/
│   │       └── page.tsx              # Individual chapter pages (dynamic routing)
│   ├── about/
│   │   └── page.tsx                  # About page
│   ├── guides/
│   │   └── page.tsx                  # Guides page
│   ├── globals.css                   # Global styles and Tailwind config
│   ├── layout.tsx                    # Root layout with metadata
│   └── page.tsx                      # Home page (redirects to /chapter/1)
├── components/
│   ├── card-menu.tsx                 # Chapters selection modal
│   ├── card-viewer.tsx               # Chapter content display component
│   ├── evidence-deck.tsx             # Legacy single-page component (deprecated)
│   ├── header.tsx                    # Header with title, progress, and copy button
│   ├── social-footer.tsx             # Social media links footer
│   ├── theme-toggle.tsx              # Dark/light mode button
│   └── ui/                           # shadcn/ui components (if using)
├── lib/
│   ├── deck-data.ts                  # ALL chapter data (single source of truth)
│   ├── theme-context.tsx             # Theme provider and hooks
│   └── utils.ts                      # Utility functions
├── public/                           # Static assets (images, icons)
└── README.md                         # This file
```

### Key Files Explained

**`app/chapter/[id]/page.tsx`** - Dynamic chapter page component
- Loads chapter based on URL parameter: `/chapter/1`, `/chapter/2`, etc.
- Handles navigation (previous/next buttons)
- Implements keyboard shortcuts
- Displays copy-to-clipboard button
- Each chapter is server-rendered as a separate page

**`lib/deck-data.ts`** - Single source of truth for all chapters
- Contains all chapter content in a TypeScript array
- Defines Card, Section, and Source interfaces
- When you add/edit a chapter here, it automatically appears in:
  - All chapter pages
  - Navigation menu
  - Copy links
  - Next/previous buttons

**`components/header.tsx`** - Displays chapter info and copy button
- Shows chapter title and progress (e.g., "Chapter 2 of 6")
- Green copy button in upper-right corner
- Generates correct chapter URL when clicked

**`components/card-menu.tsx`** - Chapters selection modal
- Shows all chapters in a grid
- Click to navigate to that chapter's page
- Highlights the current chapter
- Auto-links to `/chapter/X` on selection

## 📚 Complete Guide: Creating & Editing Chapters

### Understanding Chapter Data Structure

All chapters are defined in **`lib/deck-data.ts`**. This is the single source of truth - when you add or edit a chapter here, it automatically appears everywhere:
- All chapter pages (`/chapter/1`, `/chapter/2`, etc.)
- CHAPTERS navigation menu
- Next/previous buttons
- Copy chapter links

### Data Structure

```typescript
export interface Card {
  id: number              // Unique chapter number (1, 2, 3, etc.)
  title: string           // Chapter title - shows in header
  sections: Section[]     // Array of content sections
  sources?: Source[]      // Optional reference sources/links
}

export interface Section {
  heading: string         // Section title
  content: string         // Main paragraph text
  subsections?: Array<{   // Optional subsections
    title: string         // Subsection title
    content: string       // Subsection paragraph
  }>
}

export interface Source {
  label: string           // Link display text
  url: string             // External URL
}
```

---

## ✨ Creating a New Chapter

### Step 1: Open Chapter Data File

Navigate to `/lib/deck-data.ts` and find the `deckData` array:

```typescript
export const deckData: Card[] = [
  { id: 1, title: 'Space Exploration Overview', ... },
  { id: 2, title: 'Early Space Race', ... },
  // ... more chapters ...
]
```

### Step 2: Add New Chapter Object

Add a new chapter object to the `deckData` array with the next sequential ID:

```typescript
{
  id: 7,                              // Next chapter number
  title: 'Your Chapter Title',         // Main heading
  sections: [
    {
      heading: 'Introduction',        // Section heading
      content: 'Your introduction paragraph goes here...',
      // Optional: add subsections
      subsections: [
        {
          title: 'Key Point 1',
          content: 'Details about key point 1...'
        },
        {
          title: 'Key Point 2',
          content: 'Details about key point 2...'
        }
      ]
    },
    {
      heading: 'Main Content',
      content: 'Your main content paragraph...'
    },
    {
      heading: 'Conclusion',
      content: 'Summary and concluding remarks...'
    }
  ],
  sources: [                          // Optional: reference sources
    { label: 'Wikipedia Article', url: 'https://wikipedia.org/...' },
    { label: 'Official Site', url: 'https://example.com' }
  ]
}
```

### Step 3: Verify & Test

1. **Save the file** - The dev server will auto-reload
2. **Navigate to the new chapter**: `http://localhost:3000/chapter/7`
3. **Check CHAPTERS menu** - Your new chapter should appear
4. **Test copy link** - Click green button in header, verify URL is correct
5. **Test navigation** - Next/previous buttons should work correctly

### Complete Chapter Example

Here's a full, working example of a chapter:

```typescript
{
  id: 4,
  title: 'Space Stations & Orbital Habitats',
  sections: [
    {
      heading: 'Early Space Stations',
      content: 'Space stations represent humanity\'s first permanent presence beyond Earth. Starting with Salyut and Skylab in the 1970s, these pioneering outposts proved that humans could live and work in space for extended periods.',
      subsections: [
        {
          title: 'Salyut Program',
          content: 'The Soviet Union launched the first space station, Salyut 1, in 1971. It pioneered long-duration spaceflight and established protocols for crew rotations.'
        },
        {
          title: 'Skylab',
          content: 'America\'s response, Skylab, operated from 1973-1979 and conducted groundbreaking experiments in materials science and astronomy.'
        }
      ]
    },
    {
      heading: 'International Space Station',
      content: 'The ISS, completed in 2011, represents unprecedented international cooperation. It hosts experiments for multiple nations and serves as a testbed for technologies needed for future deep space missions.'
    },
    {
      heading: 'Future Plans',
      content: 'China is building its own space station while private companies plan commercial stations. These will support research, tourism, and manufacturing in microgravity.'
    }
  ],
  sources: [
    { label: 'ISS Facts', url: 'https://www.nasa.gov/station' },
    { label: 'Space Station History', url: 'https://history.nasa.gov/sts-1/pages/contents.html' }
  ]
}
```

---

## ✏️ Editing Existing Chapters

### Step 1: Locate Chapter in Data File

Open `/lib/deck-data.ts` and find the chapter by its ID:

```typescript
// Find chapter ID 3
{
  id: 3,
  title: 'Apollo Program',
  sections: [...]
}
```

### Step 2: Edit Chapter Properties

You can edit any of these:

**Edit the title:**
```typescript
title: 'Apollo Program'  // Change to: 'The Apollo Missions'
```

**Edit section content:**
```typescript
sections: [
  {
    heading: 'Moon Landing Achievement',
    content: 'Apollo 11, launched on July 16, 1969...' // Edit text here
  }
]
```

**Add a new section:**
```typescript
{
  heading: 'New Section Title',
  content: 'New content paragraph...'
}
```

**Edit or add subsections:**
```typescript
subsections: [
  {
    title: 'Subsection Name',
    content: 'Subsection content...'
  }
]
```

**Add source links:**
```typescript
sources: [
  { label: 'NASA Apollo', url: 'https://www.nasa.gov/apollo' }
]
```

### Step 3: Save & Verify

1. **Save the file** - Dev server auto-reloads
2. **Navigate to chapter**: `http://localhost:3000/chapter/3`
3. **Verify changes** - New content should display immediately
4. **Check other pages** - Verify menu and navigation still work

### Common Edits

**Change chapter title:**
```typescript
// Before
{ id: 2, title: 'Early Space Race', ... }

// After
{ id: 2, title: 'The Space Race Begins', ... }
```

**Update section content:**
```typescript
// Before
{ heading: 'Impact', content: 'Led to investments...' }

// After
{ heading: 'Impact on Science', content: 'Led to massive investments in STEM education and technology development worldwide.' }
```

**Reorder sections:**
```typescript
// Simply rearrange array order
sections: [
  // Section 1 (currently second)
  { heading: 'Main Content', ... },
  // Section 2 (currently first)
  { heading: 'Introduction', ... }
]
```

---

## 🔗 Copy Chapter Link Functionality

The copy-to-clipboard feature is **automatically configured** for each chapter:

### How It Works

1. **User navigates** to any chapter (e.g., `/chapter/3`)
2. **Green copy button** appears in header (upper-right corner)
3. **Click button** → URL is copied: `yoursite.com/chapter/3`
4. **Alert shown** with the copied URL
5. **Paste link** anywhere to share that specific chapter

### Copy Link in Code

The copy functionality is in `components/header.tsx`:

```typescript
const handleShare = () => {
  const chapterUrl = `${window.location.origin}/chapter/${chapterContent.chapterId}`
  navigator.clipboard.writeText(chapterUrl).then(() => {
    alert(`Chapter link copied to clipboard!\n${chapterUrl}`)
  })
}
```

No configuration needed - it works automatically for all chapters!

---

## 🎨 Deleting a Chapter

### ⚠️ Important: Always Update IDs

If you delete a chapter, **do not change the IDs** of other chapters. The system uses ID numbers to identify chapters.

**Instead:**

1. Remove the chapter object from the array:

```typescript
// Before
[
  { id: 1, title: 'Chapter 1', ... },
  { id: 2, title: 'Chapter 2', ... },
  { id: 3, title: 'Chapter 3', ... },  // ← DELETE THIS
  { id: 4, title: 'Chapter 4', ... }
]

// After
[
  { id: 1, title: 'Chapter 1', ... },
  { id: 2, title: 'Chapter 2', ... },
  { id: 4, title: 'Chapter 4', ... }   // ← Keep ID 4!
]
```

2. Navigation will skip deleted chapter IDs gracefully
3. Accessing `/chapter/3` will show "Chapter Not Found" with link back to Chapter 1

---

## 🌐 Customizing Social Media Links

Edit `/components/social-footer.tsx`:

```typescript
// Find this section:
const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/yourhandle', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com/yourprofile', label: 'Instagram' },
  { icon: MessageCircle, href: 'https://discord.gg/yourserver', label: 'Discord' },
]

// Update URLs to your social media:
const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/myaccount', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com/myprofile', label: 'Instagram' },
  { icon: MessageCircle, href: 'https://discord.gg/12345', label: 'Discord' },
]
```

---

## 🎯 Customizing Colors & Theme

Update design tokens in `/app/globals.css`:

```css
:root {
  --color-primary: #fbbf24;        /* Yellow (chapters button) */
  --color-secondary: #3b82f6;      /* Blue (about button) */
  --color-accent: #10b981;         /* Green (copy button) */
  --color-background: #fef3c7;     /* Page background */
  --color-foreground: #1f2937;     /* Text color */
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: #d97706;
    --color-secondary: #1e40af;
    --color-accent: #059669;
    --color-background: #111827;
    --color-foreground: #f9fafb;
  }
}
```

---

## 🔤 Changing Fonts

Edit `/app/layout.tsx`:

```typescript
import { YourFont } from 'next/font/google'

const yourFont = YourFont({ 
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function RootLayout() {
  return (
    <html className={yourFont.className}>
      {/* Content */}
    </html>
  )
}
```

## Using Components

### CardViewer Component

Displays individual presentation cards with expandable sections:

```tsx
import { CardViewer } from '@/components/card-viewer'
import { Card } from '@/lib/deck-data'

export function MyComponent({ card }: { card: Card }) {
  return (
    <CardViewer 
      card={card}
      cardNumber={1}
      totalCards={6}
    />
  )
}
```

### Header Component

Modern header with progress tracking and controls:

```tsx
import { Header } from '@/components/header'

<Header
  title="Card Title"
  cardNumber={1}
  totalCards={6}
  onShare={() => console.log('Share')}
  onDownload={() => console.log('Download')}
/>
```

### SocialFooter Component

Social media links footer:

```tsx
import { SocialFooter } from '@/components/social-footer'

<SocialFooter />
```

## Keyboard Shortcuts

Navigate your presentation with keyboard:

| Key | Action |
|-----|--------|
| `←` / `→` | Previous / Next Card |
| `Home` | First Card |
| `End` | Last Card |
| `C` | Toggle Card Menu |
| `Esc` | Close Menu |

## Responsive Design

The application is built with mobile-first design:

- **Mobile (< 768px)**: Stacked layout, touch-optimized buttons
- **Tablet (768px - 1024px)**: Optimized spacing and typography
- **Desktop (> 1024px)**: Full desktop experience with side navigation

## Dark Mode

Dark mode is automatically enabled based on system preferences but can be toggled manually. The theme toggle is available in the layout wrapper.

## Features Breakdown

### 📊 Progress Tracking
- Visual progress bar in the header
- Card number indicator
- Real-time updates

### 🎨 Modern UI
- Gradient backgrounds
- Smooth animations (Framer Motion)
- Micro-interactions on buttons
- Glass-morphism effects

### ♿ Accessibility
- Semantic HTML (main, header, footer)
- ARIA labels on all interactive elements
- Keyboard navigation support
- Screen reader friendly
- High contrast dark mode

### 📱 Mobile Optimization
- Touch-friendly button sizes (44px minimum)
- Responsive typography
- Optimized spacing for small screens
- Bottom navigation for easy thumb access

## Performance Optimization

- **SSR with Next.js**: Server-side rendering for faster initial load
- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: Using Next.js Image component
- **CSS-in-JS**: Tailwind CSS for optimal bundle size
- **Lazy Loading**: Components load on demand

## Deployment

### Deploy to Vercel (Recommended)

```bash
# Push to GitHub
git push origin main

# Vercel automatically deploys on push
```

### Deploy to Other Platforms

```bash
# Build
pnpm build

# Deploy the 'out' or '.next' directory
```

For detailed deployment instructions, see [Next.js Deployment Documentation](https://nextjs.org/docs/deployment).

## Customization Guide

### 1. Change Primary Colors

Edit `app/globals.css` and update the `--primary` and `--accent` tokens:

```css
:root {
  --primary: oklch(0.3 0.2 45);    /* Your color */
  --accent: oklch(0.8 0.15 250);   /* Your accent */
}
```

### 2. Add Custom Fonts

Edit `app/layout.tsx`:

```tsx
import { YourFont } from 'next/font/google'

const yourFont = YourFont({ subsets: ['latin'] })

// Add to className in html tag
```

Update `app/globals.css` theme:

```css
@theme inline {
  --font-heading: var(--font-your-font);
}
```

### 3. Add Analytics

Update `components/layout-wrapper.tsx`:

```tsx
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  )
}
```

### 4. Create Additional Pages

Create new route in `app/` directory:

```tsx
// app/about/page.tsx
export default function AboutPage() {
  return (
    <main className="container mx-auto py-12">
      {/* Your content */}
    </main>
  )
}
```

## Testing

### Manual Testing

1. Test keyboard navigation with arrow keys
2. Test mobile responsiveness with DevTools
3. Test dark mode toggle
4. Test social media links
5. Test share functionality

### Performance Testing

```bash
# Run Lighthouse audit
pnpm audit

# Check build output
pnpm build --analyze
```

## Troubleshooting

### Issue: Dark mode not working
**Solution**: Clear browser cache or check system preferences.

### Issue: Cards not loading
**Solution**: Verify `lib/deck-data.ts` has valid data structure and IDs are unique.

### Issue: Mobile layout broken
**Solution**: Check responsive classes in components, ensure Tailwind is compiled.

### Issue: Slow performance
**Solution**: Check for large images, minify CSS, enable gzip compression in hosting.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Technologies Used

- **Framework**: Next.js 16
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4.2
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: 5.7
- **Components**: shadcn/ui

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev)

## Support

For issues and questions:
- Open an issue on GitHub
- Check existing issues for solutions
- Review the troubleshooting section above

## Changelog

### v1.0.0 (Current)
- Initial release
- Modern responsive design
- Dark mode support
- Keyboard navigation
- Social media integration
- Comprehensive documentation

---

Built with ❤️ using v0 and Next.js
