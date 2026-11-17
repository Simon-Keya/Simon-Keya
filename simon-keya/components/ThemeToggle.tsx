'use client'
import { useEffect, useSyncExternalStore } from 'react'
import { Moon, Sun } from './Icons'

const listeners = new Set<() => void>()
const subscribe = (cb: () => void) => {
  listeners.add(cb)
  return () => listeners.delete(cb)
}
const getSnapshot = () => document.documentElement.classList.contains('dark')
const getServerSnapshot = () => false

function apply(dark: boolean, animate: boolean) {
  const root = document.documentElement
  if (animate) {
    root.setAttribute('data-theme-changing', '')
    window.setTimeout(() => root.removeAttribute('data-theme-changing'), 350)
  }
  root.classList.toggle('dark', dark)
  let meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')
  if (!meta) {
    meta = document.createElement('meta')
    meta.name = 'theme-color'
    document.head.appendChild(meta)
  }
  meta.content = dark ? '#08121f' : '#f6f8fb'
  listeners.forEach((l) => l())
}

export default function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    // Follow the system until the visitor makes an explicit choice.
    const onSystem = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        apply(e.matches, true)
      }
    }
    // Keep several open tabs in sync.
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'theme') {
        const next = e.newValue ? e.newValue === 'dark' : mq.matches
        apply(next, true)
      }
    }
    mq.addEventListener('change', onSystem)
    window.addEventListener('storage', onStorage)
    return () => {
      mq.removeEventListener('change', onSystem)
      window.removeEventListener('storage', onStorage)
    }
  }, [])

  function toggle() {
    const next = !dark
    apply(next, true)
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch {}
  }

  return (
    <button type="button" role="switch" aria-checked={dark} aria-label="Dark mode" title={dark ? 'Switch to light mode' : 'Switch to dark mode'} className="theme-switch" onClick={toggle}>
      <span className="ico ico-sun"><Sun /></span>
      <span className="ico ico-moon"><Moon /></span>
    </button>
  )
}
