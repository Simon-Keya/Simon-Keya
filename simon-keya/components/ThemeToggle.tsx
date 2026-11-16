'use client'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  useEffect(() => {
    const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    setTheme(current)
  }, [])
  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.classList.toggle('dark', next === 'dark')
    localStorage.setItem('theme', next)
    setTheme(next)
  }
  return <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}><span aria-hidden="true">{theme === 'dark' ? '☼' : '☾'}</span><small>{theme === 'dark' ? 'LIGHT' : 'DARK'}</small></button>
}
