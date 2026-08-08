import React from 'react'
import Image from 'next/image'

export default function DishCard({ name, desc, price, img }:{ name:string; desc:string; price:string; img:{ src:string; alt:string } }){
  return (
    <div className="group relative overflow-hidden bg-brand-800/40 border border-white/[0.06] transition-all duration-500 hover:border-gold/25">
      <div className="relative h-60 overflow-hidden">
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes="(min-width:1280px) 22vw, (min-width:768px) 45vw, 90vw"
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-[1.2s] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl text-cream">{name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>
        <div className="mt-4 flex items-center gap-3">
          <span className="gold-rule" />
          <span className="text-sm tracking-wide text-gold">{price}</span>
        </div>
      </div>
    </div>
  )
}
