import React from 'react'
import Image from 'next/image'
import Reveal from '../../components/Reveal'
import { galleryImages } from '../../lib/images'

export default function GalleryPage(){
  return (
    <section className="container-custom py-24">
      <Reveal>
        <h1 className="text-4xl font-display">Gallery</h1>
      </Reveal>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((image, index)=>(
          <Reveal key={image.src} delay={index * 0.05}>
            <div className="relative h-64 rounded-xl overflow-hidden bg-white/5 shadow-black/10">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width:1280px) 30vw, (min-width:768px) 45vw, 100vw"
                style={{objectFit:'cover'}}
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
