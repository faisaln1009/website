"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'Our Story' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/events', label: 'Events' },
  { href: '/contact', label: 'Contact' }
]

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="fixed w-full z-50">
      <nav
        className={`transition-all duration-500 ${
          scrolled
            ? 'bg-brand-950/80 backdrop-blur-md border-b border-white/[0.06] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-display tracking-[0.25em] text-cream transition-colors duration-300 hover:text-gold"
          >
            NERIVA
          </Link>

          <div className="hidden md:flex items-center gap-9">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm transition-colors duration-300 hover:text-gold ${
                  pathname === l.href ? 'text-gold' : 'text-cream/70'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/reservations"
              className="ml-2 inline-block bg-gold px-5 py-2.5 text-sm font-medium text-brand-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-gold-soft"
            >
              Reserve a Table
            </Link>
          </div>

          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="md:hidden p-2.5 -mr-2.5 text-cream transition-colors hover:text-gold"
            onClick={() => setOpen(v => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 z-40 bg-brand-950/97 backdrop-blur-sm"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } } }}
              className="container-custom h-full flex flex-col items-center justify-center gap-7"
            >
              {links.map(l => (
                <motion.div
                  key={l.href}
                  variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-2xl font-display text-cream/80 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
              >
                <Link
                  href="/reservations"
                  onClick={() => setOpen(false)}
                  className="mt-4 inline-block bg-gold px-7 py-3 text-sm font-medium text-brand-950 transition-colors hover:bg-brand-gold-soft"
                >
                  Reserve a Table
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
