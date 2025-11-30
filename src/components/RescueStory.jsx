import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

// The rescue story - simple paragraphs, no fancy cards
const RescueStory = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="story" className="py-12 md:py-16 lg:py-20" style={{ background: '#2ee871' }}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12">
        <div ref={ref} className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Heading and Intro */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 
              className="font-scrappy font-bold-mix text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6"
              style={{ 
                color: '#fff',
                lineHeight: '1.2',
                transform: 'translateX(-2px)',
                textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000, 2px 0 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
              }}
            >
              THE RESCUE STORY
            </h2>
            
            <p 
              className="font-mono text-base md:text-lg lg:text-xl mb-6 md:mb-8"
              style={{ 
                color: '#fff',
                lineHeight: '1.6',
                fontWeight: 500
              }}
            >
              From abandoned on the streets to becoming the face of a movement
            </p>
          </motion.div>

          {/* Right Column - Story content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <p 
              className="font-mono text-base md:text-lg lg:text-xl leading-relaxed"
              style={{ 
                color: '#fff',
                marginBottom: '24px',
                fontWeight: 500
              }}
            >
              Bambi had been a stray dog since forever and was rescued from a shelter that was going to put her down. Shes had part of her ear bitten off, her tail cut off, her teeth missing, barely had food her bones were showing. Than she was rescued from the shelter and I took her in. The rest is history, she is much happier where she is at now. She went from being extremely sad and depressed to fulfilled and loved.
            </p>
          </motion.div>
        </div>

        {/* Gallery Images */}
        <motion.div
          className="mt-8 md:mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <div className="rounded-lg overflow-hidden border-2 border-black" style={{ background: '#fff' }}>
            <img
              src="/IMAGE 2025-11-29 11:05:00.jpg"
              alt="Bambi Today"
              className="w-full h-full object-cover"
              style={{ minHeight: '400px', display: 'block' }}
            />
          </div>
          <div className="rounded-lg overflow-hidden border-2 border-black" style={{ background: '#fff' }}>
            <img
              src="/IMAGE 2025-11-29 11:56:35.jpg"
              alt="Bambi"
              className="w-full h-full object-cover"
              style={{ minHeight: '400px', display: 'block' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default RescueStory
