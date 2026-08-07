import React from 'react'
import Image from 'next/image'
import Reveal from './Reveal'
import { galleryImages } from '../lib/images'

export default function GalleryPreview(){
  return (
    <section className="mt-12">
      <Reveal>
        <h3 className="text-2xl font-display">Gallery</h3>
      </Reveal>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {galleryImages.map((image, index)=>(
          <Reveal key={image.src} delay={index * 0.05}>
            <div className="group relative overflow-hidden rounded-lg bg-white/5 shadow-black/10 transition-transform duration-500 hover:-translate-y-1">
              <div className="relative h-48 sm:h-56 lg:h-52">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width:1280px) 20vw, (min-width:768px) 33vw, 50vw"
                  style={{objectFit:'cover'}}
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
