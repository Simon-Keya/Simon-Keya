import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'

export const metadata: Metadata = {
  metadataBase: new URL('https://simon-keya.vercel.app'),
  title: { default: 'Simon Keya — Software Engineer', template: '%s | Simon Keya' },
  description: 'Simon Keya is a software engineer building scalable digital products across backend systems, full-stack development and applied AI.',
  keywords: ['Simon Keya', 'Software Engineer', 'Backend Engineering', 'Full-stack Development', 'Go', 'Python', 'Applied AI', 'Next.js'],
  openGraph: { title: 'Simon Keya — Software Engineer', description: 'Building scalable digital products across backend systems, full-stack development and applied AI.', url: 'https://simon-keya.vercel.app', siteName: 'Simon Keya', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Simon Keya — Software Engineer', description: 'Building scalable digital products across backend systems, full-stack development and applied AI.' },
  icons: { icon: '/logo.png', shortcut: '/logo.png', apple: '/logo.png' },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html: `try { const saved = localStorage.getItem('theme'); const dark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches; if (dark) document.documentElement.classList.add('dark'); } catch (_) {}`}} /></head><body><ThemeProvider>{children}</ThemeProvider></body></html>
}
