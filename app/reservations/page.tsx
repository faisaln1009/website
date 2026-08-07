"use client"
import React, { useState } from 'react'
import Reveal from '../../components/Reveal'

export default function ReservationsPage(){
  const [state, setState] = useState({name:'',email:'',phone:'',date:'',time:'',guests:2,request:''})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e:React.FormEvent) =>{
    e.preventDefault();
    setSubmitting(true)
    await new Promise(r=>setTimeout(r,800))
    setSubmitting(false)
    setSuccess(true)
  }

  if(success) return (
    <section className="container-custom py-24 text-center">
      <Reveal>
        <h2 className="text-3xl font-display">Reservation Confirmed</h2>
        <p className="text-muted mt-3">Thank you — we look forward to welcoming you.</p>
      </Reveal>
    </section>
  )

  return (
    <section className="container-custom py-24">
      <Reveal>
        <h1 className="text-4xl font-display">Reserve a Table</h1>
      </Reveal>
      <Reveal delay={0.1}>
        <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
          <input required placeholder="Name" value={state.name} onChange={e=>setState({...state,name:e.target.value})} className="p-3 rounded bg-black/20 border border-white/10" />
          <input required placeholder="Email" value={state.email} onChange={e=>setState({...state,email:e.target.value})} className="p-3 rounded bg-black/20 border border-white/10" />
          <input required placeholder="Phone" value={state.phone} onChange={e=>setState({...state,phone:e.target.value})} className="p-3 rounded bg-black/20 border border-white/10" />
          <input required type="date" value={state.date} onChange={e=>setState({...state,date:e.target.value})} className="p-3 rounded bg-black/20 border border-white/10" />
          <input required type="time" value={state.time} onChange={e=>setState({...state,time:e.target.value})} className="p-3 rounded bg-black/20 border border-white/10" />
          <input required type="number" min={1} value={state.guests} onChange={e=>setState({...state,guests: Number(e.target.value)})} className="p-3 rounded bg-black/20 border border-white/10" />
          <textarea placeholder="Special request" value={state.request} onChange={e=>setState({...state,request:e.target.value})} className="p-3 rounded bg-black/20 border border-white/10 md:col-span-2" />
          <button className="bg-gold text-black px-6 py-3 rounded md:col-span-2 hover:bg-[#a77a45] transition">{submitting? 'Booking...' : 'Reserve Your Table'}</button>
        </form>
      </Reveal>
    </section>
  )
}
