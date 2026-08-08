import React from 'react'
import Reveal from '../../components/Reveal'

type Dish = { name: string; desc: string; price: string }
const sections: Record<string, Dish[]> = {
  Starters: [
    { name: 'Burrata & Heirloom Tomatoes', desc: 'Roasted tomatoes, basil, olive oil', price: 'Tk 550' },
    { name: 'Crispy Calamari', desc: 'Lemon aioli, fresh herbs', price: 'Tk 480' },
    { name: 'Beef Tartare', desc: 'Capers, egg yolk, sourdough', price: 'Tk 620' }
  ],
  Mains: [
    { name: 'Pan-Seared Sea Bass', desc: 'Fennel, citrus beurre blanc', price: 'Tk 1250' },
    { name: 'Duck Confit', desc: 'Herb jus, seasonal vegetables', price: 'Tk 1600' },
    { name: 'Truffle Tagliatelle', desc: 'Black truffle, aged parmesan', price: 'Tk 950' },
    { name: 'Prime Ribeye', desc: 'Herb butter, natural jus', price: 'Tk 1800' }
  ],
  Desserts: [
    { name: 'Dark Chocolate Fondant', desc: 'Warm centre, vanilla bean ice cream', price: 'Tk 450' },
    { name: 'Pistachio Panna Cotta', desc: 'Rose syrup, pistachio crumble', price: 'Tk 420' }
  ],
  Drinks: [
    { name: 'House Red Wine (Glass)', desc: 'Selected by our sommelier', price: 'Tk 350' },
    { name: 'Espresso Martini', desc: 'House blend, fresh espresso', price: 'Tk 480' }
  ]
}

export default function MenuPage(){
  return (
    <section className="container-custom section-pad pt-36">
      <Reveal>
        <div className="eyebrow">Menu</div>
        <h1 className="mt-4 font-display text-5xl leading-[1.1] text-cream md:text-6xl">Our Menu</h1>
        <p className="mt-4 max-w-xl leading-relaxed text-muted">A curated selection of starters, mains, pasta, steaks, and desserts — crafted with seasonal ingredients.</p>
      </Reveal>
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {Object.entries(sections).map(([cat, items], idx) => (
          <Reveal key={cat} delay={idx * 0.06}>
            <div className="h-full border border-white/[0.06] bg-brand-800/30 p-8 transition-colors duration-300 hover:border-gold/20">
              <h3 className="font-display text-3xl text-cream">{cat}</h3>
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
