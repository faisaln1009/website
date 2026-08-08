import React from 'react'
import Reveal from './Reveal'
import Link from 'next/link'

type MenuItem = { name: string; desc: string; price: string }
const categories: Record<string, MenuItem[]> = {
  Starters: [
    { name: 'Burrata & Heirloom Tomatoes', desc: 'Creamy burrata, roasted tomatoes, basil', price: 'Tk 550' },
    { name: 'Crispy Calamari', desc: 'Lightly battered, lemon aioli', price: 'Tk 480' }
  ],
  'Main Course': [
    { name: 'Pan-Seared Sea Bass', desc: 'Fennel, citrus beurre blanc', price: 'Tk 1250' },
    { name: 'Duck Confit', desc: 'Herb jus, seasonal vegetables', price: 'Tk 1600' }
  ],
  Desserts: [
    { name: 'Pistachio Panna Cotta', desc: 'Rose syrup, pistachio crumble', price: 'Tk 420' }
  ],
  Drinks: [
    { name: 'House Red Wine (Glass)', desc: 'Selected by our sommelier', price: 'Tk 350' }
  ]
}

export default function PopularMenu(){
  return (
    <section className="section-pad">
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="eyebrow">Curated Selection</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-cream">Popular Menu</h2>
          </div>
          <Link href="/menu" className="group inline-flex items-center gap-2 text-sm tracking-wide text-cream transition-colors hover:text-gold">
            View Full Menu
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </Reveal>
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {Object.entries(categories).map(([cat, items], idx) => (
          <Reveal key={cat} delay={idx * 0.08}>
            <div className="h-full border border-white/[0.06] bg-brand-800/30 p-8 transition-colors duration-300 hover:border-gold/20">
              <h3 className="font-display text-2xl text-cream">{cat}</h3>
              <div className="mt-6 space-y-5">
                {items.map(it => (
                  <div key={it.name} className="flex justify-between gap-4">
                    <div>
                      <div className="font-medium text-cream">{it.name}</div>
                      <div className="mt-1 text-sm text-muted">{it.desc}</div>
                    </div>
                    <div className="shrink-0 text-sm tracking-wide text-gold pt-1">{it.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
