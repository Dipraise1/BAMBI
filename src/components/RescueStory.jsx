import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

// The rescue story - simple paragraphs, no fancy cards
const RescueStory = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="story" className="py-12 md:py-16 lg:py-20 px-4" style={{ background: '#2ee871' }}>
      <div className="max-w-[1200px] mx-auto">
        <motion.h2 
          ref={ref}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-center mb-12 md:mb-16"
          style={{ 
            color: '#fff',
            textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000, 2px 0 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          THE RESCUE STORY
        </motion.h2>

        <motion.div 
          className="bg-white rounded-lg border-2 border-black p-6 md:p-8 lg:p-10 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start mb-8">
            {/* Left Column - Intro */}
            <div>
              <p 
                className="font-mono text-base md:text-lg lg:text-xl mb-6 md:mb-8"
                style={{ 
                  color: '#000',
                  lineHeight: '1.6',
                  fontWeight: 'bold'
                }}
              >
                From abandoned on the streets to becoming the face of a movement
              </p>
            </div>

            {/* Right Column - Story content */}
            <div>
              <p 
                className="font-mono text-base md:text-lg lg:text-xl leading-relaxed"
                style={{ 
                  color: '#000',
                  fontWeight: 'bold'
                }}
              >
                Bambi had been a stray dog for as long as anyone could remember and was rescued from a shelter that was about to put her down. She had part of her ear bitten off, her tail cut off, several missing teeth, and she'd had so little food that her bones were showing. Then she was rescued from the shelter, and I took her in. The rest is history. She is so much happier now—she's gone from being extremely sad and depressed to feeling fulfilled and loved.
              </p>
            </div>
          </div>

          {/* Gallery Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="rounded-lg overflow-hidden border-2 border-black" style={{ background: '#fff' }}>
              <img
                src="/IMAGE 2025-12-01 13:59:45.jpg"
                alt="Bambi"
                className="w-full h-full object-cover"
                style={{ minHeight: '400px', display: 'block' }}
              />
            </div>
            <div className="rounded-lg overflow-hidden border-2 border-black" style={{ background: '#fff' }}>
              <img
                src="/IMAGE 2025-11-30 14:09:15.jpg"
                alt="Bambi"
                className="w-full h-full object-cover"
                style={{ minHeight: '400px', display: 'block' }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default RescueStory
