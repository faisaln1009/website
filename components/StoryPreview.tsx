import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from './Reveal'
import { storyImage } from '../lib/images'

export default function StoryPreview(){
  return (
    <section className="section-pad grid gap-12 md:grid-cols-2 items-center">
      <Reveal>
        <div className="group relative h-80 md:h-[34rem] overflow-hidden">
          <Image
            src={storyImage.src}
            alt={storyImage.alt}
            fill
            sizes="(min-width:768px) 50vw, 100vw"
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-[1.4s] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent" />
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <div>
          <div className="eyebrow">The Neriva Experience</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-cream leading-tight">
            Where every dish tells a story.
          </h2>
          <p className="mt-6 text-muted leading-relaxed">
            Neriva was born from a desire to bring contemporary flavors and thoughtful hospitality to Dhaka. We source seasonal ingredients and prepare every dish with precision and care.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-3 text-sm tracking-wide text-cream transition-colors hover:text-gold"
          >
            <span className="gold-rule" />
            Discover Our Story
          </Link>
        </div>
      </Reveal>
    </section>
  )
}
