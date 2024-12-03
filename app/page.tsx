import StatsSection from '@/components/Achievments/Achievment'
import HeroSection from '@/components/Hero/hero'
import Navbar from '@/components/Navbar/Navbar'
import ServicesSection from '@/components/Service/service'
import React from 'react'

const page = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <StatsSection />
    </>
  )
}

export default page