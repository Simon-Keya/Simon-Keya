import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { DM_Sans, Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap', weight: ['500', '600', '700', '800'] })
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', display: 'swap' })

const title = 'Simon Keya — Software Engineer | Scalable Digital Products'
const description =
  'Simon Keya is a software engineer building scalable digital products, backend systems and full-stack applications, with experience in Go, TypeScript, Python and applied AI integration.'

export const metadata: Metadata = {
  metadataBase: new URL('https://simon-keya.vercel.app'),
  title: { default: title, template: '%s | Simon Keya' },
  description,
  keywords: ['Simon Keya', 'Software Engineer', 'Backend Engineering', 'API Development', 'Full-stack Development', 'Applied AI', 'Software Architecture', 'PostgreSQL', 'Go', 'Python', 'Applied AI', 'Next.js'],
  openGraph: { title, description, url: 'https://simon-keya.vercel.app', siteName: 'Simon Keya', type: 'website', images: [{ url: '/projects/restflow.webp', width: 1350, height: 589, alt: 'RestFlow operations dashboard' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/projects/restflow.webp'] },
  icons: { icon: '/logo.png', shortcut: '/logo.png', apple: '/logo.png' },
}

// Runs before first paint: no flash of the wrong theme.
const themeScript = `(function(){try{var s=localStorage.getItem('theme');var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;var r=document.documentElement;if(d)r.classList.add('dark');var m=document.createElement('meta');m.name='theme-color';m.content=d?'#0b1d31':'#fbfcfe';document.head.appendChild(m)}catch(e){}})()`

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body id="top">
        <a className="skip-link" href="#main">Skip to content</a>
        {children}
      </body>
    </html>
  )
}
