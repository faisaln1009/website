import React from 'react'
import DishCard from './DishCard'
import Reveal from './Reveal'
import { signatureDishes } from '../lib/images'

export default function SignatureDishes(){
  return (
    <section className="mt-12">
      <Reveal>
        <h2 className="text-3xl font-display">Signature Dishes</h2>
        <p className="text-muted mt-2">Our chef-curated highlights — crafted with seasonal ingredients and refined technique.</p>
      </Reveal>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {signatureDishes.map((dish, index)=>(
          <Reveal key={dish.name} delay={index * 0.05}>
            <DishCard name={dish.name} desc={dish.desc} price={dish.price} img={dish.img} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
