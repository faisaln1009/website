import React from 'react'
import Image from 'next/image'
import Reveal from '../../components/Reveal'
import { eventsImage } from '../../lib/images'

const packages = [
  { title: 'Birthday Dinners', desc: 'Custom menus and a celebratory touch for every guest.' },
  { title: 'Corporate Events', desc: 'Private room with tailored service and curated tasting menus.' },
  { title: 'Anniversaries', desc: 'Intimate set menus designed for two or a close few.' }
]

export default function EventsPage(){
  return (
    <section className="container-custom section-pad pt-36">
      <Reveal>
        <div className="eyebrow">Private Dining</div>
        <h1 className="mt-4 font-display text-5xl md:text-6xl text-cream">Private Dining & Events</h1>
        <p className="mt-4 max-w-xl text-muted">Host memorable private events — birthdays, corporate dinners, and special celebrations in an intimate setting.</p>
      </Reveal>
      <div className="mt-14 grid gap-12 md:grid-cols-2 items-center">
        <Reveal delay={0.1}>
          <div className="space-y-8">
            {packages.map(p => (
              <div key={p.title} className="border-l border-white/10 pl-6 transition-colors duration-300 hover:border-gold/40">
                <h3 className="font-display text-2xl text-cream">{p.title}</h3>
                <p className="mt-2 text-muted leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="group relative h-80 md:h-[34rem] overflow-hidden">
            <Image
              src={eventsImage.src}
              alt={eventsImage.alt}
              fill
              sizes="(min-width:768px) 50vw, 100vw"
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-[1.4s] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
