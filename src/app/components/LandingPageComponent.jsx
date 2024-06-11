import React from 'react'
import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import OfferCards from '@/app/components/OfferCards';
import FlipCards from '@/app/components/FlipCards';
import MainContent from '@/app/components/MainContent';
import Footer from '@/app/components/Footer';

const LandingPageComponent = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <OfferCards />
        <FlipCards />
        <MainContent />
        <Footer />
    </>
  )
}

export default LandingPageComponent