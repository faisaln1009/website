import React from 'react'
import Image from 'next/image'
import Reveal from './Reveal'
import Link from 'next/link'
import { galleryImages } from '../lib/images'

export default function GalleryPreview(){
  return (
    <section className="section-pad">
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="eyebrow">A Glimpse Inside</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-cream">Gallery</h2>
          </div>
          <Link href="/gallery" className="text-sm tracking-wide text-cream transition-colors hover:text-gold">
            View All →
          </Link>
        </div>
      </Reveal>
      <div className="mt-12 grid auto-rows-[12rem] md:auto-rows-[14rem] grid-cols-2 md:grid-cols-3 gap-3">
        {galleryImages.map((image, index) => (
          <Reveal key={image.src} delay={index * 0.05} className={index === 0 ? 'row-span-2' : ''}>
            <div className="group relative h-full overflow-hidden bg-brand-800">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width:1280px) 33vw, 50vw"
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
