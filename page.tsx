import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileNav from '@/components/layout/MobileNav'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import FormationsSection from '@/components/sections/FormationsSection'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Formations Section */}
      <FormationsSection />
      
      <Footer />
      <MobileNav />
    </main>
  )
}


