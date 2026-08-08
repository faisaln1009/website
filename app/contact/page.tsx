"use client"
import React, { useState } from 'react'
import Reveal from '../../components/Reveal'
import { Phone, Mail, MapPin, Clock, ArrowRight, Check, Loader2 } from 'lucide-react'

export default function ContactPage(){
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSent(true)
    }, 700)
  }

  return (
    <section className="container-custom section-pad pt-36">
      <Reveal>
        <div className="eyebrow">Contact</div>
        <h1 className="mt-4 font-display text-5xl leading-[1.1] text-cream md:text-6xl">Get in touch.</h1>
        <p className="mt-4 max-w-xl leading-relaxed text-muted">For reservations and private dining inquiries, we&apos;d love to hear from you.</p>
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
          <div className="h-full border border-white/[0.06] bg-brand-800/30 p-8">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
                  <Check size={24} className="text-gold" strokeWidth={2.5} />
                </div>
                <h3 className="mt-5 font-display text-2xl text-cream">Message Sent</h3>
                <p className="mt-2 max-w-xs text-sm text-muted">
                  Thank you, {form.name || 'guest'}. We&apos;ll get back to you shortly.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }) }}
                  className="mt-6 text-sm tracking-wide text-cream transition-colors hover:text-gold"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div>
                  <label className="block text-sm text-cream/90">Name</label>
                  <input
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="mt-2 w-full border border-white/10 bg-black/20 px-4 py-3 text-sm text-cream placeholder:text-muted/60 focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/30 transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-cream/90">Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="mt-2 w-full border border-white/10 bg-black/20 px-4 py-3 text-sm text-cream placeholder:text-muted/60 focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/30 transition"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-cream/90">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="mt-2 w-full resize-none border border-white/10 bg-black/20 px-4 py-3 text-sm text-cream placeholder:text-muted/60 focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/30 transition"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="group inline-flex items-center justify-center gap-2 bg-gold px-6 py-3 text-sm font-medium tracking-wide text-brand-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-gold-soft disabled:opacity-60"
                >
                  {sending ? (
                    <><Loader2 size={16} className="animate-spin" /> Sending…</>
                  ) : (
                    <>Send Message <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" /></>
                  )}
                </button>
              </form>
            )}
          </div>
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
