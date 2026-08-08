import React from 'react'
import Reveal from '../../components/Reveal'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactPage(){
  return (
    <section className="container-custom section-pad pt-36">
      <Reveal>
        <div className="eyebrow">Contact</div>
        <h1 className="mt-4 font-display text-5xl md:text-6xl text-cream">Get in touch.</h1>
        <p className="mt-4 max-w-xl text-muted">For reservations and private dining inquiries, we&apos;d love to hear from you.</p>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <Reveal delay={0.1}>
          <div className="h-full border border-white/[0.06] bg-brand-800/30 p-8 space-y-6">
            <ContactRow icon={<Phone size={18} />} label="Phone" value="+880 1234 567890" />
            <ContactRow icon={<Mail size={18} />} label="Email" value="hello@neriva.example" />
            <ContactRow icon={<MapPin size={18} />} label="Address" value="Dhaka, Bangladesh" />
            <ContactRow icon={<Clock size={18} />} label="Hours" value="Mon–Fri 12:00–22:00 · Sat–Sun 10:00–23:00" />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <form className="h-full space-y-5 border border-white/[0.06] bg-brand-800/30 p-8">
            <div>
              <label className="block text-sm text-cream/90">Name</label>
              <input className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-cream placeholder:text-muted/60 focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/30 transition" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-cream/90">Email</label>
              <input className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-cream placeholder:text-muted/60 focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/30 transition" placeholder="you@email.com" />
            </div>
            <div>
              <label className="block text-sm text-cream/90">Message</label>
              <textarea rows={4} className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-cream placeholder:text-muted/60 focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/30 transition" placeholder="How can we help?" />
            </div>
            <button className="inline-flex items-center justify-center bg-gold px-6 py-3 text-sm font-medium tracking-wide text-brand-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-gold-soft">
              Send Message
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

function ContactRow({ icon, label, value }:{ icon: React.ReactNode; label: string; value: string }){
  return (
    <div className="flex items-start gap-4">
      <span className="mt-0.5 text-gold">{icon}</span>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted">{label}</div>
        <div className="mt-1 text-sm text-cream">{value}</div>
      </div>
    </div>
  )
}
