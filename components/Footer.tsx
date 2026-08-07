import React from 'react'
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="border-t border-white/6 mt-24 py-12">
      <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-display">NERIVA</h3>
          <p className="mt-3 text-sm text-muted max-w-sm">A premium contemporary restaurant in Dhaka offering thoughtfully crafted dishes, warm hospitality, and unforgettable dining experiences.</p>
        </div>
        <div>
          <h4 className="font-medium">Opening Hours</h4>
          <p className="text-sm text-muted mt-2">Mon - Fri: 12:00 — 22:00<br/>Sat - Sun: 10:00 — 23:00</p>
        </div>
        <div>
          <h4 className="font-medium">Contact</h4>
          <p className="text-sm text-muted mt-2 flex flex-col gap-2">
            <span className="flex items-center gap-2"><Phone size={14}/> +880 1234 567890</span>
            <span className="flex items-center gap-2"><Mail size={14}/> hello@neriva.example</span>
            <span className="flex items-center gap-2"><MapPin size={14}/> Dhaka, Bangladesh</span>
          </p>
          <div className="mt-4 flex gap-3">
            <a aria-label="instagram" href="#" className="p-2 bg-white/5 rounded"><Instagram size={18}/></a>
            <a aria-label="facebook" href="#" className="p-2 bg-white/5 rounded"><Facebook size={18}/></a>
          </div>
        </div>
      </div>
      <div className="container-custom text-center text-sm text-muted mt-8">© {new Date().getFullYear()} NERIVA. Demo project for portfolio use.</div>
    </footer>
  )
}
