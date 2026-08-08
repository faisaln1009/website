import React from 'react'
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="border-t border-white/[0.06] mt-16 pt-14 pb-10">
      <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-display text-3xl tracking-[0.2em] text-cream">NERIVA</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted max-w-sm">
            A premium contemporary restaurant in Dhaka offering thoughtfully crafted dishes, warm hospitality, and unforgettable dining experiences.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-eyebrow text-muted">Opening Hours</h4>
          <p className="text-sm text-cream mt-3 leading-relaxed">Mon – Fri: 12:00 — 22:00<br />Sat – Sun: 10:00 — 23:00</p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-eyebrow text-muted">Contact</h4>
          <p className="text-sm text-cream mt-3 flex flex-col gap-2">
            <span className="flex items-center gap-2"><Phone size={14} className="text-gold" /> +880 1234 567890</span>
            <span className="flex items-center gap-2"><Mail size={14} className="text-gold" /> hello@neriva.example</span>
            <span className="flex items-center gap-2"><MapPin size={14} className="text-gold" /> Dhaka, Bangladesh</span>
          </p>
          <div className="mt-5 flex gap-3">
            <a aria-label="instagram" href="#" className="flex h-11 w-11 items-center justify-center border border-white/10 text-cream transition-colors hover:border-gold/50 hover:text-gold"><Instagram size={18} /></a>
            <a aria-label="facebook" href="#" className="flex h-11 w-11 items-center justify-center border border-white/10 text-cream transition-colors hover:border-gold/50 hover:text-gold"><Facebook size={18} /></a>
          </div>
        </div>
      </div>
      <div className="container-custom text-center text-xs text-muted mt-10 tracking-wide">© {new Date().getFullYear()} NERIVA. Demo project for portfolio use.</div>
    </footer>
  )
}
