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
        <h1 className="mt-4 font-display text-5xl leading-[1.1] text-cream md:text-6xl">Private Dining & Events</h1>
        <p className="mt-4 max-w-xl leading-relaxed text-muted">Host memorable private events — birthdays, corporate dinners, and special celebrations in an intimate setting.</p>
      </Reveal>
      <div className="mt-14 grid gap-10 md:grid-cols-2 items-center md:gap-16">
        <Reveal delay={0.1}>
          <div className="space-y-6 md:space-y-8">
            {packages.map((p, i) => (
              <div key={p.title} className="border-l border-white/10 pl-6 transition-colors duration-300 hover:border-gold/40">
                <span className="font-display text-sm text-gold/70">0{i + 1}</span>
                <h3 className="mt-1 font-display text-2xl text-cream">{p.title}</h3>
                <p className="mt-2 text-muted leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="group relative h-72 md:h-[34rem] overflow-hidden">
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
