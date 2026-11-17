'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { Close, Menu } from './Icons'

const links = [
  { href: '/#work', id: 'work', label: 'Selected work' },
  { href: '/#capabilities', id: 'capabilities', label: 'Capabilities' },
  { href: '/#about', id: 'about', label: 'About' },
  { href: '/#art', id: 'art', label: 'Art & design' },
]

export default function SiteHeader({ home = false }: { home?: boolean }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const btn = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        btn.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    if (!home) return
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[]
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [home])

  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="brand" aria-label="Simon Keya, home" onClick={close}>
          <Image src="/logo.png" alt="" width={44} height={44} priority />
          <span className="brand-text">
            <span className="brand-name">Simon Keya</span>
            <span className="brand-role">Software engineer</span>
          </span>
        </Link>

        <nav id="site-nav" className="nav" aria-label="Main" data-open={open}>
          {links.map((l) => (
            <Link key={l.id} href={l.href} className="nav-link" aria-current={active === l.id ? 'true' : undefined} onClick={close}>
              {l.label}
            </Link>
          ))}
          <Link href="/#contact" className="btn btn-primary btn-sm nav-cta-mobile" onClick={close}>Let’s talk</Link>
        </nav>

        <div className="header-actions">
          <Link href="/#contact" className="btn btn-primary btn-sm nav-cta-desktop">Let’s talk</Link>
          <ThemeToggle />
          <button ref={btn} type="button" className="menu-btn" aria-expanded={open} aria-controls="site-nav" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  )
}
