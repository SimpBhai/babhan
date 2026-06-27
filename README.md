# Evidence Deck - Modern Presentation Framework

A professional, responsive presentation framework built with Next.js 16, React 19, and Tailwind CSS. Perfect for evidence-based discussions, research presentations, and professional slideshows.

![Next.js](https://img.shields.io/badge/Next.js-16+-black?logo=next.js)
![React](https://img.shields.io/badge/React-19+-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.2-38B2AC?logo=tailwind-css)

## Features

✨ **Modern & Responsive**
- Fully responsive design (mobile, tablet, desktop)
- Dark mode support with system preference detection
- Smooth animations with Framer Motion
- Progressive enhancement for accessibility

🎯 **Professional Presentation Features**
- Expandable card sections with structured content
- Subsections with detailed information
- Source citations and external links
- Real-time progress tracking
- Presentation mode with keyboard controls

🎮 **Interactive Controls**
- Keyboard navigation (Arrow keys, Home, End)
- Menu toggle (C key)
- Touch-friendly mobile navigation
- Smooth transitions between cards
- Accessibility-first design

🔗 **Social Integration**
- Built-in social media links (Twitter, Instagram, Discord)
- Share presentation functionality
- Download deck as JSON
- Modern social footer

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
# or
npm install
```

### Development

```bash
# Start the development server
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

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
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── card-menu.tsx        # Card selection modal
│   ├── card-viewer.tsx      # Individual card display
│   ├── evidence-deck.tsx    # Main deck component
│   ├── header.tsx           # Modern header with controls
│   ├── layout-wrapper.tsx   # Provider wrapper
│   ├── social-footer.tsx    # Social media links footer
│   ├── theme-toggle.tsx     # Dark mode toggle
│   └── ui/                  # shadcn/ui components
├── lib/
│   ├── deck-data.ts         # Presentation data structure
│   ├── theme-context.tsx    # Theme management
│   └── utils.ts             # Utility functions
└── public/                  # Static assets (icons, images)
```

## Creating Your Own Presentation

### 1. Understanding the Data Structure

The presentation deck is defined in `lib/deck-data.ts`. Here's the structure:

```typescript
export interface Card {
  id: number              // Unique identifier
  title: string           // Card title
  sections: Section[]     // Array of sections
  sources?: Source[]      // Optional source citations
}

export interface Section {
  heading: string                    // Section title
  content: string                    // Main content paragraph
  subsections?: Array<{             // Optional subsections
    title: string                    // Subsection title
    content: string                  // Subsection content
  }>
}

export interface Source {
  label: string           // Display name
  url: string             // External link
}
```

### 2. Adding New Cards

Edit `lib/deck-data.ts` and add a new card object to the `deckData` array:

```typescript
{
  id: 7,
  title: 'Your Card Title',
  sections: [
    {
      heading: 'Main Section',
      content: 'Your main content here...',
      subsections: [
        {
          title: 'Subsection 1',
          content: 'Detailed information...'
        }
      ]
    }
  ],
  sources: [
    { label: 'Source Name', url: 'https://example.com' }
  ]
}
```

### 3. Customizing Social Links

Edit `components/social-footer.tsx` to add or modify social media links:

```typescript
const socialLinks: SocialLink[] = [
  {
    label: 'Twitter',
    url: 'https://twitter.com/yourhandle',
    icon: <Twitter className="w-5 h-5" />,
  },
  {
    label: 'Your Platform',
    url: 'https://yourplatform.com',
    icon: <YourIcon className="w-5 h-5" />,
  },
]
```

### 4. Modifying Colors & Theme

Update the design tokens in `app/globals.css`:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --secondary: oklch(0.97 0 0);
  --accent: oklch(0.97 0 0);
  /* ... more tokens ... */
}
```

Color format is OKLCH (Oklab with Chroma and Hue). You can use tools like [OkLCh Color Picker](https://oklch.com) to customize.

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
