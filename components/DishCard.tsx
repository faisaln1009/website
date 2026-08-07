import React from 'react'
import Image from 'next/image'

export default function DishCard({name, desc, price, img}:{name:string;desc:string;price:string;img:{src:string;alt:string}}){
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(min-width:1024px) 18vw, (min-width:768px) 30vw, 100vw"
            style={{objectFit:'cover'}}
            className="transform transition-transform duration-500 group-hover:scale-105"
          />
      </div>
      <div className="p-4">
        <h3 className="font-medium">{name}</h3>
        <p className="text-sm text-muted mt-1">{desc}</p>
        <div className="mt-3 text-gold font-semibold">{price}</div>
      </div>
    </div>
  )
}
