'use client'
import { ReactNode, useEffect, useState } from 'react'

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const dark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
    document.documentElement.classList.toggle('dark', dark)
    setReady(true)
  }, [])
  return <div data-theme-ready={ready ? 'true' : 'false'}>{children}</div>
}
