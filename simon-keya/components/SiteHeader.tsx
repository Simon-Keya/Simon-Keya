'use client'
import { useState } from 'react'
import Image from 'next/image'
export default function SiteHeader(){
 const [open,setOpen]=useState(false)
 return <header className="site-header"><a href="#home" className="brand-lockup" aria-label="Simon Keya home"><Image src="/logo.png" alt="Simon Keya monogram" width={52} height={52} priority/><span>SIMON KEYA<small>SOFTWARE ENGINEER</small></span></a><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-expanded={open}>{open?'Close':'Menu'} <span>{open?'−':'+'}</span></button><nav className={open?'main-nav nav-open':'main-nav'} aria-label="Main navigation"><a href="#work" onClick={()=>setOpen(false)}>Selected work</a><a href="#capabilities" onClick={()=>setOpen(false)}>Capabilities</a><a href="#about" onClick={()=>setOpen(false)}>About</a><a href="#art" onClick={()=>setOpen(false)}>Art & design</a><a href="#contact" className="nav-contact" onClick={()=>setOpen(false)}>Let&apos;s talk ↗</a></nav></header>
}
