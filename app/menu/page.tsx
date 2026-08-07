import React from 'react'
import Reveal from '../../components/Reveal'

export default function MenuPage(){
  return (
    <section className="container-custom py-24">
      <Reveal>
        <h1 className="text-4xl font-display">Our Menu</h1>
        <p className="text-muted mt-3">Explore our curated selection of starters, mains, pasta, seafood, steaks and desserts.</p>
      </Reveal>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Reveal delay={0.1}>
          <div className="p-6 bg-white/5 rounded-3xl transition-transform duration-300 hover:-translate-y-1">
            <h3 className="font-medium">Starters</h3>
            <div className="mt-3 space-y-3 text-sm text-muted">
              <div className="flex justify-between"><div>Burrata & Heirloom Tomatoes</div><div className="text-gold">Tk 550</div></div>
              <div className="flex justify-between"><div>Crispy Calamari</div><div className="text-gold">Tk 480</div></div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="p-6 bg-white/5 rounded-3xl transition-transform duration-300 hover:-translate-y-1">
            <h3 className="font-medium">Main Course</h3>
            <div className="mt-3 space-y-3 text-sm text-muted">
              <div className="flex justify-between"><div>Pan-Seared Sea Bass</div><div className="text-gold">Tk 1250</div></div>
              <div className="flex justify-between"><div>Duck Confit</div><div className="text-gold">Tk 1600</div></div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
