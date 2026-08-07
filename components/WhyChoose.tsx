import React from 'react'

const items = [
  {title:'Fresh Ingredients', desc:'Sustainably sourced, seasonal produce.'},
  {title:'Expert Chefs', desc:'Years of experience and refined techniques.'},
  {title:'Cozy Atmosphere', desc:'Warm, intimate dining spaces.'},
  {title:'Exceptional Service', desc:'Attentive and knowledgeable staff.'}
]

export default function WhyChoose(){
  return (
    <section className="mt-12">
      <h3 className="text-2xl font-display">Why Choose Us</h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        {items.map(i=> (
          <div key={i.title} className="p-6 bg-white/3 rounded-md">
            <div className="text-4xl font-display text-gold">•</div>
            <h4 className="mt-3 font-medium">{i.title}</h4>
            <p className="text-sm text-muted mt-2">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
