"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { heroImage } from '../lib/images'

const ease = [0.2, 0.1, 0.22, 1] as [number, number, number, number]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } }
}

export default function Hero(){
  const reduce = useReducedMotion()
  const item = reduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6 } } }
    : { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={reduce ? {} : { scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease }}
          className="h-full w-full"
        >
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/85 via-brand-950/55 to-brand-950" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/70 via-transparent to-transparent" aria-hidden />
      </div>

      <div className="container-custom w-full pt-28 pb-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.div variants={item} className="eyebrow">
            Est. 2026 · Dhaka
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight text-cream"
          >
            Good Food.
            <br />
            <span className="italic text-cream/90">Great Moments.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-8 max-w-md text-base leading-relaxed text-muted">
            Thoughtfully crafted cuisine, warm hospitality, and an atmosphere made for unforgettable evenings.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="/menu"
              className="group inline-flex items-center justify-center gap-2 bg-gold px-7 py-3.5 text-sm font-medium tracking-wide text-brand-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-gold-soft"
            >
              Explore Menu
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </Link>
            <Link
              href="/reservations"
              className="group inline-flex items-center justify-center gap-2 border border-white/20 px-7 py-3.5 text-sm tracking-wide text-cream transition-all duration-300 hover:border-gold/50 hover:bg-white/5"
            >
              Reserve a Table
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted-2">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="h-10 w-px bg-gradient-to-b from-gold/60 to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}
