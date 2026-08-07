"use client"
import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, Users, User, Mail, Phone, MessageSquare, Check, Loader2, AlertCircle, ArrowRight } from 'lucide-react'
import { supabase } from '../lib/supabaseClient'

type FormState = {
  name: string
  email: string
  phone: string
  date: string
  time: string
  guests: number
  request: string
}

type FieldErrors = Partial<Record<keyof FormState, string>>

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: 2,
  request: ''
}

const TIME_SLOTS = [
  '12:00','12:30','13:00','13:30','14:00','14:30',
  '18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30'
]

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 }
}

const fieldTransition = { duration: 0.4, ease: [0.2, 0.1, 0.22, 1] as [number, number, number, number] }

export default function ReservationForm(){
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [confirmation, setConfirmation] = useState<{ name: string; date: string; time: string; guests: number } | null>(null)

  const today = useMemo(() => new Date().toISOString().split('T')[0], [])

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm(prev => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors(prev => ({ ...prev, [key]: undefined }))
  }

  const validate = (): FieldErrors => {
    const e: FieldErrors = {}
    if (!form.name.trim()) e.name = 'Please enter your name.'
    else if (form.name.trim().length < 2) e.name = 'Name is too short.'

    if (!form.email.trim()) e.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = 'Enter a valid email address.'

    if (!form.phone.trim()) e.phone = 'Please enter your phone number.'
    else if (form.phone.replace(/\D/g, '').length < 7) e.phone = 'Enter a valid phone number.'

    if (!form.date) e.date = 'Choose a date.'
    else if (form.date < today) e.date = 'Date cannot be in the past.'

    if (!form.time) e.time = 'Choose a time.'

    if (!form.guests || form.guests < 1) e.guests = 'At least 1 guest.'
    else if (form.guests > 20) e.guests = 'Max 20 guests per booking.'

    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError(null)
    const fieldErrors = validate()
    setErrors(fieldErrors)
    if (Object.keys(fieldErrors).length > 0) return

    setSubmitting(true)
    try {
      const { error } = await supabase.from('reservations').insert({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        guests: form.guests,
        reservation_date: form.date,
        reservation_time: form.time,
        special_request: form.request.trim() || null
      })
      if (error) throw error
      setConfirmation({ name: form.name.trim(), date: form.date, time: form.time, guests: form.guests })
      setSuccess(true)
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      setSubmitError(message)
    } finally {
      setSubmitting(false)
    }
  }

  const resetForm = () => {
    setForm(initialState)
    setErrors({})
    setSubmitError(null)
    setSuccess(false)
    setConfirmation(null)
  }

  const formatDate = (iso: string) => {
    if (!iso) return ''
    const d = new Date(`${iso}T00:00:00`)
    return d.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  }

  const formatTime = (t: string) => {
    if (!t) return ''
    const [h, m] = t.split(':')
    const hour = parseInt(h, 10)
    const ampm = hour >= 12 ? 'PM' : 'AM'
    const h12 = hour % 12 === 0 ? 12 : hour % 12
    return `${h12}:${m} ${ampm}`
  }

  return (
    <AnimatePresence mode="wait">
      {!success ? (
        <motion.div
          key="form"
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, y: -12, transition: { duration: 0.3 } }}
        >
          <form onSubmit={handleSubmit} noValidate className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:p-10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Full Name"
                icon={<User size={16} />}
                error={errors.name}
              >
                <input
                  type="text"
                  value={form.name}
                  onChange={e => update('name', e.target.value)}
                  placeholder="Your name"
                  autoComplete="name"
                  className={inputClass(!!errors.name)}
                />
              </Field>

              <Field
                label="Email"
                icon={<Mail size={16} />}
                error={errors.email}
              >
                <input
                  type="email"
                  value={form.email}
                  onChange={e => update('email', e.target.value)}
                  placeholder="you@email.com"
                  autoComplete="email"
                  className={inputClass(!!errors.email)}
                />
              </Field>

              <Field
                label="Phone"
                icon={<Phone size={16} />}
                error={errors.phone}
              >
                <input
                  type="tel"
                  value={form.phone}
                  onChange={e => update('phone', e.target.value)}
                  placeholder="+880 1XXX XXXXXX"
                  autoComplete="tel"
                  className={inputClass(!!errors.phone)}
                />
              </Field>

              <Field
                label="Guests"
                icon={<Users size={16} />}
                error={errors.guests}
              >
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    aria-label="decrease guests"
                    onClick={() => update('guests', Math.max(1, form.guests - 1))}
                    className="h-10 w-10 shrink-0 rounded-lg border border-white/10 bg-black/20 text-cream transition hover:border-gold/50 hover:text-gold disabled:opacity-40"
                    disabled={form.guests <= 1}
                  >−</button>
                  <input
                    type="number"
                    min={1}
                    max={20}
                    value={form.guests}
                    onChange={e => update('guests', Math.max(1, parseInt(e.target.value || '1', 10)))}
                    className={`${inputClass(!!errors.guests)} text-center`}
                  />
                  <button
                    type="button"
                    aria-label="increase guests"
                    onClick={() => update('guests', Math.min(20, form.guests + 1))}
                    className="h-10 w-10 shrink-0 rounded-lg border border-white/10 bg-black/20 text-cream transition hover:border-gold/50 hover:text-gold disabled:opacity-40"
                    disabled={form.guests >= 20}
                  >+</button>
                </div>
              </Field>

              <Field
                label="Date"
                icon={<Calendar size={16} />}
                error={errors.date}
              >
                <input
                  type="date"
                  min={today}
                  value={form.date}
                  onChange={e => update('date', e.target.value)}
                  className={`${inputClass(!!errors.date)} [color-scheme:dark]`}
                />
              </Field>

              <Field
                label="Time"
                icon={<Clock size={16} />}
                error={errors.time}
              >
                <select
                  value={form.time}
                  onChange={e => update('time', e.target.value)}
                  className={`${inputClass(!!errors.time)} [color-scheme:dark]`}
                >
                  <option value="">Select a time</option>
                  {TIME_SLOTS.map(t => (
                    <option key={t} value={t}>{formatTime(t)}</option>
                  ))}
                </select>
              </Field>

              <div className="sm:col-span-2">
                <Field
                  label="Special Requests"
                  icon={<MessageSquare size={16} />}
                  error={undefined}
                  optional
                >
                  <textarea
                    value={form.request}
                    onChange={e => update('request', e.target.value)}
                    placeholder="Dietary needs, allergies, celebrations, seating preferences…"
                    rows={3}
                    className={`${inputClass(false)} resize-none`}
                  />
                </Field>
              </div>
            </div>

            <AnimatePresence>
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="mt-5 flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200"
                >
                  <AlertCircle size={18} className="mt-0.5 shrink-0" />
                  <span>{submitError}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
              <p className="order-2 text-xs text-muted sm:order-1">
                You&apos;ll receive a confirmation email once we approve your request.
              </p>
              <button
                type="submit"
                disabled={submitting}
                className="group order-1 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-7 py-3.5 font-medium text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#a77a45] disabled:cursor-not-allowed disabled:opacity-60 sm:order-2 sm:w-auto"
              >
                {submitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Booking…
                  </>
                ) : (
                  <>
                    Reserve Your Table
                    <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      ) : (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.2, 0.1, 0.22, 1] }}
          className="rounded-3xl border border-gold/20 bg-gradient-to-b from-white/[0.05] to-transparent p-8 text-center shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] sm:p-12"
        >
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.15, type: 'spring', stiffness: 200, damping: 14 }}
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-gold/10"
          >
            <Check size={28} className="text-gold" strokeWidth={2.5} />
          </motion.div>

          <h3 className="mt-6 text-3xl font-display">Reservation Confirmed</h3>
          <p className="mx-auto mt-3 max-w-md text-muted">
            Thank you, {confirmation?.name}. We&apos;ve received your request and will confirm shortly by email.
          </p>

          {confirmation && (
            <div className="mx-auto mt-8 grid max-w-md grid-cols-3 gap-4 text-center">
              <SummaryStat label="Date" value={formatDate(confirmation.date)} />
              <SummaryStat label="Time" value={formatTime(confirmation.time)} />
              <SummaryStat label="Guests" value={confirmation.guests === 1 ? '1 Guest' : `${confirmation.guests} Guests`} />
            </div>
          )}

          <button
            onClick={resetForm}
            className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm transition hover:border-gold/50 hover:bg-white/5"
          >
            Make Another Reservation
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function inputClass(hasError: boolean){
  return [
    'w-full rounded-xl border bg-black/20 px-4 py-3 text-sm text-cream placeholder:text-muted/60 transition-colors duration-200',
    'focus:outline-none focus:ring-2 focus:ring-gold/30',
    hasError ? 'border-red-500/50 focus:ring-red-500/20' : 'border-white/10 focus:border-gold/50'
  ].join(' ')
}

function Field({
  label,
  icon,
  error,
  optional,
  children
}: {
  label: string
  icon: React.ReactNode
  error?: string
  optional?: boolean
  children: React.ReactNode
}){
  return (
    <label className="block">
      <span className="flex items-center gap-2 text-sm font-medium text-cream/90">
        <span className="text-gold/80">{icon}</span>
        {label}
        {optional && <span className="text-xs text-muted">(optional)</span>}
      </span>
      <motion.div variants={fadeUp} transition={fieldTransition} className="mt-2">
        {children}
      </motion.div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="mt-1.5 text-xs text-red-300"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </label>
  )
}

function SummaryStat({ label, value }: { label: string; value: string }){
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
      <div className="text-xs uppercase tracking-wider text-muted">{label}</div>
      <div className="mt-1 text-sm font-medium text-cream">{value}</div>
    </div>
  )
}
