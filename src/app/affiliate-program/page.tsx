import React from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import Hero from '@/app/components/Hero'
import AffiliateContent from '@/app/components/AffiliateContent'

const Page = () => {
  return (
    <div className="h-auto w-auto bg-gray-100/15 flex flex-col items-center overflow-hidden">
        <Navbar />
        <Hero />
        <AffiliateContent />
        <Footer />
    </div>
  )
}

export default Page