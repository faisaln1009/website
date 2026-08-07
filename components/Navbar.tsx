"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'Our Story' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/events', label: 'Events' },
  { href: '/contact', label: 'Contact' }
]

export default function Navbar(){
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed w-full z-50">
      <nav className={`backdrop-blur-md transition-colors duration-300 ${open ? 'bg-black/80 border-b border-white/10' : 'bg-transparent'} py-4`}> 
        <div className="container-custom flex items-center justify-between">
          <Link href="/" className="text-2xl font-display tracking-widest text-cream">NERIVA</Link>
          <div className="hidden md:flex items-center gap-8">
            {links.map(l=> (
              <Link key={l.href} href={l.href} className="text-sm text-muted hover:text-gold/90 transition-colors">{l.label}</Link>
            ))}
            <Link href="/reservations" className="ml-4 inline-block bg-gold text-black px-4 py-2 rounded-sm font-medium transition hover:bg-[#a77a45]">Reserve a Table</Link>
          </div>

          <button aria-label="menu" className="md:hidden p-2 rounded-md border border-white/10 bg-white/5 transition hover:bg-white/10" onClick={()=>setOpen(v=>!v)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/95 text-white backdrop-blur-sm transition-opacity duration-300">
          <div className="container-custom h-full flex flex-col items-center justify-center gap-6">
            {links.map(l=> (
              <Link key={l.href} href={l.href} onClick={()=>setOpen(false)} className="text-2xl transition text-muted hover:text-cream">{l.label}</Link>
            ))}
            <Link href="/reservations" onClick={()=>setOpen(false)} className="mt-4 inline-block bg-gold text-black px-6 py-3 rounded font-medium transition hover:bg-[#a77a45]">Reserve a Table</Link>
          </div>
        </div>
      )}
    </header>
  )
}
