import React from 'react'
import Hero from '../components/Hero'
import SignatureDishes from '../components/SignatureDishes'
import StoryPreview from '../components/StoryPreview'
import WhyChoose from '../components/WhyChoose'
import PopularMenu from '../components/PopularMenu'
import Testimonials from '../components/Testimonials'
import GalleryPreview from '../components/GalleryPreview'
import ReservationCTA from '../components/ReservationCTA'

export default function Home(){
  return (
    <>
      <Hero />
      <section className="container-custom mt-16">
        <SignatureDishes />
        <StoryPreview />
        <WhyChoose />
        <PopularMenu />
        <Testimonials />
        <GalleryPreview />
        <ReservationCTA />
      </section>
    </>
  )
}
