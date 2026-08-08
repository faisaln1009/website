import React from 'react'
import Link from 'next/link'
import Reveal from './Reveal'

export default function ReservationCTA(){
  return (
    <section className="section-pad">
      <Reveal>
        <div className="relative overflow-hidden border border-white/[0.08] bg-brand-800/40 px-6 py-20 text-center md:px-12">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/[0.03] to-transparent" />
          <div className="eyebrow">Reservations</div>
          <h2 className="mt-5 font-display text-4xl leading-tight text-cream md:text-5xl">Your table is waiting.</h2>
          <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted">
            Reserve your spot for an unforgettable evening with us.
          </p>
          <Link
            href="/reservations"
            className="mt-9 inline-flex items-center justify-center bg-gold px-8 py-3.5 text-sm font-medium tracking-wide text-brand-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-gold-soft"
          >
            Reserve Your Table
          </Link>
        </div>
      </Reveal>
    </section>
  )
}
