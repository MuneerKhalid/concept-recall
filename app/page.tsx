import AboutUs from '@/components/AboutUs/AboutUs'
import StatsSection from '@/components/Achievments/Achievment'
import CaseStudyCarousel from '@/components/Carousel/Carousel'
import { CarouselPlugin } from '@/components/Carousel/CarouselPlugin'
import IndustriesSection from '@/components/Expertise/Expertise'
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
    <AboutUs />
    <IndustriesSection />
    <CaseStudyCarousel/>
    </>
  )
}

export default page