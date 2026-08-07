import React from 'react'
import Image from 'next/image'
import Reveal from '../../components/Reveal'
import { aboutImage } from '../../lib/images'

export default function AboutPage(){
  return (
    <section className="container-custom py-24">
      <Reveal>
        <h1 className="text-4xl font-display">Our Story</h1>
      </Reveal>
      <div className="mt-6 grid gap-6 md:grid-cols-2 items-center">
        <Reveal delay={0.1}>
          <div>
            <p className="text-muted">Founded in 2026, Neriva celebrates contemporary dining with a focus on seasonal ingredients, refined technique, and warm hospitality.</p>
            <h3 className="mt-6 text-2xl">Our Mission</h3>
            <p className="text-muted mt-2">To create memorable dining moments through thoughtful cuisine and gracious service.</p>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-black/20">
            <Image
              src={aboutImage.src}
              alt={aboutImage.alt}
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
