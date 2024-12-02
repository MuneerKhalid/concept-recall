import HeroSection from '@/components/Hero/hero'
import Navbar from '@/components/Navbar/Navbar'
import ServicesSection from '@/components/Work/work'
import React from 'react'

const page = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
    <ServicesSection />
    </>
  )
}

export default page