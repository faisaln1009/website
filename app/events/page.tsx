import React from 'react'
import Image from 'next/image'
import Reveal from '../../components/Reveal'
import { eventsImage } from '../../lib/images'

export default function EventsPage(){
  return (
    <section className="container-custom py-24">
      <Reveal>
        <h1 className="text-4xl font-display">Private Dining & Events</h1>
        <p className="text-muted mt-3">Host memorable private events: birthdays, corporate dinners, and special celebrations.</p>
      </Reveal>
      <div className="mt-8 grid gap-6 md:grid-cols-2 items-center">
        <Reveal delay={0.1}>
          <div>
            <h3 className="text-2xl">Event Packages</h3>
            <ul className="mt-3 text-muted space-y-2">
              <li>Birthday Dinners — Custom menus</li>
              <li>Corporate Events — Private room & tailored service</li>
              <li>Anniversaries — Intimate set menus</li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-black/20">
            <Image
              src={eventsImage.src}
              alt={eventsImage.alt}
              fill
              sizes="100vw"
              style={{objectFit:'cover'}}
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
