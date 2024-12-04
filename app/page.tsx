import AboutUs from '@/components/AboutUs/AboutUs'
import StatsSection from '@/components/Achievments/Achievment'
import Carousel from '@/components/Carousel/Carousel'
import IndustriesSection from '@/components/Expertise/Expertise'
import HeroSection from '@/components/Hero/hero'
import ClientSlider from '@/components/InfiniteSlider/InfiniteSlider'
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
    <AboutUs />
    <IndustriesSection />
    <Carousel/>
    <ClientSlider />
    </>
  )
}

export default page