import React from 'react'
import DishCard from './DishCard'
import Reveal from './Reveal'
import { signatureDishes } from '../lib/images'

export default function SignatureDishes(){
  return (
    <section className="section-pad">
      <Reveal>
        <div className="eyebrow">Chef&apos;s Selection</div>
        <h2 className="mt-4 font-display text-4xl md:text-5xl text-cream">Signature Dishes</h2>
        <p className="mt-4 max-w-xl text-muted">Our chef-curated highlights — crafted with seasonal ingredients and refined technique.</p>
      </Reveal>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {signatureDishes.map((dish, index) => (
          <Reveal key={dish.name} delay={index * 0.08}>
            <DishCard name={dish.name} desc={dish.desc} price={dish.price} img={dish.img} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
