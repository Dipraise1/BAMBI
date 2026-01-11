import React, { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import Hero from './components/Hero'
import VideoSection from './components/VideoSection'
import RescueStory from './components/RescueStory'
import Mission from './components/Mission'
import RescuedDogs from './components/RescuedDogs'
import Tokenomics from './components/Tokenomics'
import HowToBuy from './components/HowToBuy'
import Footer from './components/Footer'
import FloatingElements from './components/FloatingElements'
import PawTrail from './components/PawTrail'
import BorderBambi from './components/BorderBambi'
import SectionDivider from './components/SectionDivider'
import CustomCursor from './components/CustomCursor'

function App() {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#2ee871', width: '100%', maxWidth: '100vw' }}>
      <CustomCursor />
      <BorderBambi />
      <PawTrail />
      <FloatingElements />
      
      <Hero />
      <SectionDivider />
      <VideoSection />
      <SectionDivider />
      <RescueStory />
      <SectionDivider />
      <Mission />
      <SectionDivider />
      <RescuedDogs />
      <SectionDivider />
      <Tokenomics />
      <SectionDivider />
      <HowToBuy />
      <SectionDivider />
      <Footer />
      <Analytics />
    </div>
  )
}

export default App

