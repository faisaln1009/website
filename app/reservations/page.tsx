import React from 'react'
import Reveal from '../../components/Reveal'
import ReservationForm from '../../components/ReservationForm'
import { Clock, Users, MapPin } from 'lucide-react'

const highlights = [
  { icon: <Clock size={18} />, label: 'Lunch & Dinner', value: 'Mon–Fri 12:00–22:00 · Sat–Sun 10:00–23:00' },
  { icon: <Users size={18} />, label: 'Group Dining', value: 'Up to 20 guests per booking' },
  { icon: <MapPin size={18} />, label: 'Location', value: 'Dhaka, Bangladesh' }
]

export default function ReservationsPage(){
  return (
    <section className="container-custom section-pad pt-36">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <div className="eyebrow">Reservations</div>
          <h1 className="mt-4 font-display text-5xl leading-[1.1] text-cream md:text-6xl">Reserve a Table</h1>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted">
            Secure your spot for an unforgettable evening. We accept reservations for parties of up to twenty guests.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
          {highlights.map(h => (
            <div key={h.label} className="flex items-start gap-3 border border-white/[0.08] bg-brand-800/30 p-4">
              <span className="mt-0.5 text-gold">{h.icon}</span>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted">{h.label}</div>
                <div className="mt-0.5 text-sm text-cream">{h.value}</div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mx-auto mt-10 max-w-3xl">
          <ReservationForm />
        </div>
      </Reveal>
    </section>
  )
}
