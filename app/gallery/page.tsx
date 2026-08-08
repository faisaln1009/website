import React from 'react'
import Image from 'next/image'
import Reveal from '../../components/Reveal'
import { galleryImages } from '../../lib/images'

export default function GalleryPage(){
  return (
    <section className="container-custom section-pad pt-36">
      <Reveal>
        <div className="eyebrow">Gallery</div>
        <h1 className="mt-4 font-display text-5xl leading-[1.1] text-cream md:text-6xl">A glimpse inside.</h1>
        <p className="mt-4 max-w-xl leading-relaxed text-muted">Moments from our dining room, kitchen, and table.</p>
      </Reveal>
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {galleryImages.map((image, index) => (
          <Reveal key={image.src} delay={index * 0.05}>
            <div className="group relative h-64 sm:h-72 md:h-80 overflow-hidden bg-brand-800">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width:1280px) 30vw, (min-width:768px) 45vw, 100vw"
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
