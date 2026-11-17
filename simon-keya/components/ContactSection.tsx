'use client'
import { useState } from 'react'
import { ArrowUpRight, Copy, Download } from './Icons'
import { contact } from '@/lib/projects'

export default function ContactSection() {
  const [status, setStatus] = useState('')

  async function copy() {
    try {
      await navigator.clipboard.writeText(contact.email)
      setStatus('Email address copied')
    } catch {
      setStatus('Copy failed. Select the address above instead.')
    }
    window.setTimeout(() => setStatus(''), 2500)
  }

  const external = { target: '_blank', rel: 'noopener noreferrer' } as const

  return (
    <section className="contact on-band" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <p className="eyebrow">Start a conversation</p>
        <h2 id="contact-title">Have a problem worth <span>solving?</span></h2>
        <div className="contact-row">
          <p>I’m open to thoughtful collaborations, engineering opportunities and projects with meaningful problems to work on. Email is the quickest way to reach me.</p>
          <div className="contact-email">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
              <button type="button" className="btn btn-primary btn-sm" onClick={copy}>Copy email <Copy /></button>
              <a className="btn btn-secondary btn-sm" href={contact.resume} {...external}>Résumé <Download /></a>
            </div>
            <span className="copy-status" role="status" aria-live="polite">{status}</span>
          </div>
        </div>
        <div className="contact-links">
          <a href={contact.linkedin} {...external}>LinkedIn <ArrowUpRight /><span className="sr-only"> (opens in a new tab)</span></a>
          <a href={contact.github} {...external}>GitHub <ArrowUpRight /><span className="sr-only"> (opens in a new tab)</span></a>
          <a href={contact.whatsapp} {...external}>WhatsApp <ArrowUpRight /><span className="sr-only"> (opens in a new tab)</span></a>
          <a href={contact.x} {...external}>X <ArrowUpRight /><span className="sr-only"> (opens in a new tab)</span></a>
          <span className="where">{contact.location} · {contact.timezone}</span>
        </div>
      </div>
    </section>
  )
}
