import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

const RescuedDogs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="rescued-dogs" className="py-12 md:py-16 lg:py-20 px-4" style={{ background: '#2ee871' }}>
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
          RESCUED DOGS THAT NEED A HOME
        </motion.h2>

        <motion.div 
          className="bg-white rounded-lg border-2 border-black p-6 md:p-8 lg:p-10 shadow-lg text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <p className="text-base md:text-lg leading-relaxed" style={{ 
            color: '#000',
            fontWeight: 'bold'
          }}>
            As our project grows and succeeds, we'll be able to rescue more dogs from shelters. 
            Check back here to see dogs that are available for adoption!
          </p>
          <p className="text-base md:text-lg leading-relaxed mt-4" style={{ 
            color: '#000',
            fontWeight: 'bold'
          }}>
            🐾 More dogs coming soon as we continue to grow! 🐾
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default RescuedDogs

