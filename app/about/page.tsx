import React from 'react'
import Image from 'next/image'
import Reveal from '../../components/Reveal'
import { aboutImage } from '../../lib/images'

export default function AboutPage(){
  return (
    <section className="container-custom section-pad pt-36">
      <Reveal>
        <div className="eyebrow">Our Story</div>
        <h1 className="mt-4 font-display text-5xl leading-[1.1] text-cream md:text-6xl">Where craft meets warmth.</h1>
      </Reveal>
      <div className="mt-14 grid gap-12 md:grid-cols-2 items-center">
        <Reveal delay={0.1}>
          <div>
            <p className="text-muted leading-relaxed text-lg">
              Founded in 2026, Neriva celebrates contemporary dining with a focus on seasonal ingredients, refined technique, and warm hospitality.
            </p>
            <h3 className="mt-8 font-display text-3xl text-cream">Our Mission</h3>
            <p className="text-muted mt-3 leading-relaxed">
              To create memorable dining moments through thoughtful cuisine and gracious service — a place where every visit feels considered, unhurried, and genuinely welcoming.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <span className="gold-rule" />
              <span className="text-sm tracking-wide text-gold">Est. 2026</span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="group relative h-96 md:h-[34rem] overflow-hidden">
            <Image
              src={aboutImage.src}
              alt={aboutImage.alt}
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
