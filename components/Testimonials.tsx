import React from 'react'
import Reveal from './Reveal'

const reviews = [
  { name: 'Aria Khan', text: 'A truly memorable dinner — impeccable flavors and service.' },
  { name: 'Rafi Ahmed', text: 'The ambiance is beautiful and the food is outstanding.' },
  { name: 'Mina Chowdhury', text: 'Perfect place for a special occasion.' }
]

export default function Testimonials(){
  return (
    <section className="section-pad">
      <Reveal>
        <div className="eyebrow">Guest Reflections</div>
        <h2 className="mt-4 font-display text-4xl md:text-5xl text-cream">What Guests Say</h2>
      </Reveal>
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {reviews.map((r, idx) => (
          <Reveal key={r.name} delay={idx * 0.08}>
            <figure className="h-full border border-white/[0.06] bg-brand-800/30 p-8 transition-colors duration-300 hover:border-gold/20">
              <span className="font-display text-5xl leading-none text-gold/40 select-none">“</span>
              <blockquote className="mt-3 text-cream/90 leading-relaxed">{r.text}</blockquote>
              <figcaption className="mt-8 flex items-center gap-3 text-sm tracking-wide text-muted">
                <span className="h-px w-6 bg-gold/40" />
                {r.name}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
