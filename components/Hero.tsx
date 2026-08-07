"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from './Reveal'
import { heroImage } from '../lib/images'

export default function Hero(){
  return (
    <section className="relative h-screen min-h-[580px] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          sizes="100vw"
          style={{objectFit:'cover'}}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/40" aria-hidden />
      </div>

      <div className="container-custom text-center">
        <Reveal>
          <div className="text-sm text-cream/90 uppercase tracking-widest">EST. 2026 • Dhaka</div>
          <h1 className="mt-6 text-4xl md:text-6xl font-display leading-tight tracking-tight">Good Food.<br/>Great Moments.</h1>
          <p className="mt-6 max-w-2xl mx-auto text-muted">Thoughtfully crafted cuisine, warm hospitality, and an atmosphere made for unforgettable evenings.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/menu" className="inline-block bg-transparent border border-white/20 px-6 py-3 rounded text-sm hover:bg-white/5 transition">Explore Menu</Link>
            <Link href="/reservations" className="inline-block bg-gold text-black px-6 py-3 rounded text-sm font-medium hover:-translate-y-[1px] transition-transform duration-200">Reserve a Table</Link>
          </div>
        </Reveal>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-muted">Scroll</div>
      </div>
    </section>
  )
}
