import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const Page = () => {
  return (
    <div className="h-auto w-auto bg-gray-100/15 flex flex-col items-center overflow-hidden">
        <Navbar />
        <Hero />
        <Footer />
    </div>
  )
}

export default Page