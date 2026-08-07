import React from 'react'
import Reveal from '../../components/Reveal'

export default function ContactPage(){
  return (
    <section className="container-custom py-24">
      <Reveal>
        <h1 className="text-4xl font-display">Contact</h1>
      </Reveal>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Reveal delay={0.1}>
          <div>
            <h4 className="font-medium">Get in touch</h4>
            <p className="text-muted mt-2">For reservations and private dining inquiries, please contact us.</p>
            <div className="mt-4 text-sm text-muted space-y-2">
              <div>Address: Dhaka, Bangladesh</div>
              <div>Phone: +880 1234 567890</div>
              <div>Email: hello@neriva.example</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <form className="space-y-4 rounded-3xl bg-white/5 p-6 shadow-black/10">
            <div>
              <label className="block text-sm">Name</label>
              <input className="w-full mt-1 p-3 rounded bg-black/20 border border-white/10" />
            </div>
            <div>
              <label className="block text-sm">Email</label>
              <input className="w-full mt-1 p-3 rounded bg-black/20 border border-white/10" />
            </div>
            <div>
              <label className="block text-sm">Message</label>
              <textarea className="w-full mt-1 p-3 rounded bg-black/20 border border-white/10" rows={4} />
            </div>
            <button className="inline-block bg-gold text-black px-6 py-3 rounded font-medium hover:bg-[#a77a45] transition">Send Message</button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
