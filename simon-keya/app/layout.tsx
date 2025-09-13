import { ReactNode } from 'react'
import Footer from '../components/Footer'
import ThemeProvider from '../components/ThemeProvider'
import './globals.css'

// This metadata applies to all pages by default
export const metadata = {
  title: {
    template: '%s | Simon Keya',
    default: 'Simon Keya | Software Developer Portfolio',
  },
  description: 'Simon Keya is a passionate software developer building modern web and mobile applications with clean, efficient code.',
  keywords: 'software developer, web developer, portfolio, Next.js, React, full-stack, freelance',
  openGraph: {
    title: 'Simon Keya | Software Developer Portfolio',
    description: 'Explore the professional portfolio of Simon Keya, a full-stack software developer.',
    url: 'https://simonkeya.com',
    siteName: 'Simon Keya Portfolio',
    images: [
      {
        url: 'https://placehold.co/1200x630/000000/FFFFFF?text=Simon+Keya+Portfolio',
        width: 1200,
        height: 630,
        alt: 'Simon Keya Software Developer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simon Keya | Software Developer',
    description: 'Discover the professional portfolio of Simon Keya.',
    creator: '@yourtwitterhandle',
    images: ['https://placehold.co/1200x675/000000/FFFFFF?text=Simon+Keya+Portfolio'],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className="bg-black text-white min-h-screen flex flex-col"
      >
        <ThemeProvider>
          <main className="flex-grow container mx-auto px-4 py-10">
            {children}
          </main>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  )
}
