import React, { useEffect } from 'react'
import Hero from './components/Hero'
import VideoSection from './components/VideoSection'
import RescueStory from './components/RescueStory'
import HowToBuy from './components/HowToBuy'
import Footer from './components/Footer'
import FloatingElements from './components/FloatingElements'
import PawTrail from './components/PawTrail'
import BorderBambi from './components/BorderBambi'
import SectionDivider from './components/SectionDivider'

function App() {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div className="min-h-screen" style={{ background: '#2ee871' }}>
      <BorderBambi />
      <PawTrail />
      <FloatingElements />
      
      <Hero />
      <SectionDivider />
      <VideoSection />
      <SectionDivider />
      <RescueStory />
      <SectionDivider />
      <HowToBuy />
      <SectionDivider />
      <Footer />
    </div>
  )
}

export default App

