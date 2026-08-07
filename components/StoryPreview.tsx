import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from './Reveal'
import { storyImage } from '../lib/images'

export default function StoryPreview(){
  return (
    <section className="mt-12 grid gap-6 md:grid-cols-2 items-center">
      <Reveal>
        <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-black/10">
          <Image
            src={storyImage.src}
            alt={storyImage.alt}
            fill
            sizes="100vw"
            style={{objectFit:'cover'}}
          />
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <div>
          <div className="text-sm text-cream/90">THE NERIVA EXPERIENCE</div>
          <h2 className="text-3xl font-display mt-3">Where every dish tells a story.</h2>
          <p className="text-muted mt-4">Neriva was born from a desire to bring contemporary flavors and thoughtful hospitality to Dhaka. We source seasonal ingredients and prepare every dish with precision and care.</p>
          <Link href="/about" className="inline-block mt-6 border border-white/10 px-5 py-2 rounded transition hover:bg-white/5">Discover Our Story</Link>
        </div>
      </Reveal>
    </section>
  )
}
