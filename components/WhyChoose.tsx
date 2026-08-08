import React from 'react'
import Reveal from './Reveal'

const items = [
  { title: 'Seasonal Ingredients', desc: 'Sustainably sourced produce at its peak.' },
  { title: 'Refined Technique', desc: 'Years of craft behind every plate.' },
  { title: 'Intimate Atmosphere', desc: 'Warm, considered dining spaces.' },
  { title: 'Gracious Service', desc: 'Attentive staff who anticipate every need.' }
]

export default function WhyChoose(){
  return (
    <section className="section-pad">
      <Reveal>
        <div className="eyebrow">Why Neriva</div>
        <h2 className="mt-4 font-display text-4xl md:text-5xl text-cream">A standard of its own</h2>
      </Reveal>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06]">
        {items.map((i, idx) => (
          <Reveal key={i.title} delay={idx * 0.08}>
            <div className="h-full bg-brand-900 p-8 transition-colors duration-300 hover:bg-brand-800/50">
              <span className="font-display text-3xl text-gold/70">0{idx + 1}</span>
              <h3 className="mt-4 font-display text-2xl text-cream">{i.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{i.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
