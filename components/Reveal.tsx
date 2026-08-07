"use client"
import { motion } from 'framer-motion'
import React from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 }
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  duration = 0.7,
  once = true
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  once?: boolean
}){
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.2, 0.1, 0.22, 1] }}
      variants={fadeUp}
    >
      {children}
    </motion.div>
  )
}
