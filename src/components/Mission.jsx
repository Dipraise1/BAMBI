import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

const Mission = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="mission" className="py-12 md:py-16 lg:py-20 px-4" style={{ background: '#2ee871' }}>
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
          OUR MISSION
        </motion.h2>

        <div className="space-y-8 md:space-y-12">
          <motion.div 
            className="bg-white rounded-lg border-2 border-black p-6 md:p-8 lg:p-10 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ 
              color: '#000'
            }}>
              Our Goal
            </h3>
            <p className="text-base md:text-lg leading-relaxed mb-6" style={{ 
              color: '#000',
              fontWeight: 'bold'
            }}>
              The ultimate goal of this project is to achieve a level of success that allows us to give back in a meaningful, life-changing way. As the project grows, we plan to use creator fees, proceeds, and community donations to help rescue shelter dogs—especially those facing euthanasia due to overcrowding or lack of resources.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ 
              color: '#000'
            }}>
              Our Vision
            </h3>
            <p className="text-base md:text-lg leading-relaxed mb-6" style={{ 
              color: '#000',
              fontWeight: 'bold'
            }}>
              Our vision is to create a sustainable cycle of impact: the more the project thrives, the more animals we can save. With enough support, we aim to help dogs find loving, permanent homes.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ 
              color: '#000'
            }}>
              Why We Do This
            </h3>
            <p className="text-base md:text-lg leading-relaxed" style={{ 
              color: '#000',
              fontWeight: 'bold'
            }}>
              At its core, this project isn't just about success for ourselves—it's about transforming that success into second chances for dogs who need it most.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Mission

