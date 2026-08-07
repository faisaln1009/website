import React from 'react'
import Link from 'next/link'

export default function ReservationCTA(){
  return (
    <section className="mt-12 bg-white/3 p-8 rounded-lg text-center">
      <h3 className="text-2xl font-display">Your table is waiting.</h3>
      <p className="text-muted mt-2">Reserve your spot for an unforgettable evening.</p>
      <Link href="/reservations" className="mt-4 inline-block bg-gold text-black px-6 py-3 rounded">Reserve Your Table</Link>
    </section>
  )
}
