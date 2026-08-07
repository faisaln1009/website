import React from 'react'

type MenuItem = { name: string; desc: string; price: string }
const categories: Record<string, MenuItem[]> = {
  Starters: [
    {name:'Burrata & Heirloom Tomatoes', desc:'Creamy burrata, roasted tomatoes, basil', price:'Tk 550'},
    {name:'Crispy Calamari', desc:'Lightly battered, lemon aioli', price:'Tk 480'}
  ],
  'Main Course': [
    {name:'Pan-Seared Sea Bass', desc:'Fennel, citrus beurre blanc', price:'Tk 1250'},
    {name:'Duck Confit', desc:'Herb jus, seasonal veg', price:'Tk 1600'}
  ],
  Desserts: [
    {name:'Pistachio Panna Cotta', desc:'Rose syrup, pistachio crumble', price:'Tk 420'}
  ],
  Drinks: [
    {name:'House Red Wine (Glass)', desc:'Selected by sommelier', price:'Tk 350'}
  ]
}

export default function PopularMenu(){
  return (
    <section className="mt-12">
      <h3 className="text-2xl font-display">Popular Menu</h3>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {Object.entries(categories).map(([cat, items])=> (
          <div key={cat} className="p-6 bg-white/3 rounded">
            <h4 className="font-medium">{cat}</h4>
            <div className="mt-3 space-y-3">
              {items.map((it)=> (
                <div key={it.name} className="flex justify-between">
                  <div>
                    <div className="font-medium">{it.name}</div>
                    <div className="text-sm text-muted">{it.desc}</div>
                  </div>
                  <div className="text-gold">{it.price}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
