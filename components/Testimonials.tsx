import React from 'react'

const reviews = [
  {name:'Aria Khan', text:'A truly memorable dinner — impeccable flavors and service.'},
  {name:'Rafi Ahmed', text:'The ambiance is beautiful and the food is outstanding.'},
  {name:'Mina Chowdhury', text:'Perfect place for a special occasion.'}
]

export default function Testimonials(){
  return (
    <section className="mt-12">
      <h3 className="text-2xl font-display">What Guests Say</h3>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {reviews.map(r=> (
          <div key={r.name} className="p-6 bg-white/3 rounded">
            <p className="text-muted">“{r.text}”</p>
            <div className="mt-3 font-medium">— {r.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
