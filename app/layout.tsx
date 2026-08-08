import '../styles/globals.css'
import React from 'react'
import { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'NERIVA — Good Food. Great Moments.',
  description: 'Neriva — Premium contemporary restaurant in Dhaka. Thoughtfully crafted dishes, warm hospitality, and unforgettable dining.',
  // Resolve metadataBase from environment with a sensible local fallback.
  // Uses NEXT_PUBLIC_SITE_URL if set, otherwise falls back to localhost for dev.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'NERIVA — Good Food. Great Moments.',
    description: 'Neriva — Premium contemporary restaurant in Dhaka.'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
