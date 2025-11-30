import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

const HowToBuy = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="howtobuy" className="py-12 md:py-16 lg:py-20 px-4" style={{ background: '#2ee871' }}>
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
          HOW TO BUY
        </motion.h2>

        <div className="space-y-8 md:space-y-12">
          {/* Step 1: Create a Wallet */}
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-6 md:gap-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center border-2 border-black shadow-lg overflow-hidden">
              <img 
                src="/IMAGE 2025-11-29 19:09:59.jpg" 
                alt="Wallet" 
                className="object-contain"
                style={{ width: '50%', height: '50%' }}
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ 
                color: '#fff',
                textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000, 2px 0 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
              }}>
                CREATE A WALLET
              </h3>
              <p className="text-base md:text-lg leading-relaxed" style={{ 
                color: '#fff',
                fontWeight: 500
              }}>
                Download Phantom (or your preferred wallet) for free from the App Store or Google Play. 
                If you're on desktop, install the Phantom Chrome extension directly from the Chrome Web Store.
              </p>
            </div>
          </motion.div>

          {/* Step 2: Get Some Solana */}
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-6 md:gap-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center border-2 border-black shadow-lg overflow-hidden">
              <img 
                src="/IMAGE 2025-11-29 19:08:54.jpg" 
                alt="Solana" 
                className="object-contain"
                style={{ width: '50%', height: '50%' }}
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ 
                color: '#fff',
                textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000, 2px 0 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
              }}>
                GET SOME SOLANA
              </h3>
              <p className="text-base md:text-lg leading-relaxed" style={{ 
                color: '#fff',
                fontWeight: 500
              }}>
                Make sure your wallet has SOL to swap into $BAMBI. If you don't have any yet, you can: 
                Purchase SOL directly in your wallet, Transfer from another wallet, or Buy on an exchange 
                and send it straight to your wallet.
              </p>
            </div>
          </motion.div>

          {/* Step 3: Switch Solana for BAMBI */}
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-6 md:gap-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          >
            <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center border-2 border-black shadow-lg overflow-hidden">
              <img 
                src="/IMAGE 2025-11-30 14:09:15.jpg" 
                alt="BAMBI" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ 
                color: '#fff',
                textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000, 2px 0 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
              }}>
                SWITCH SOLANA FOR $BAMBI
              </h3>
              <p className="text-base md:text-lg leading-relaxed" style={{ 
                color: '#fff',
                fontWeight: 500
              }}>
                Exchange your SOL for $BAMBI and show your support!
              </p>
              <p className="text-base md:text-lg leading-relaxed mt-4" style={{ 
                color: '#000',
                fontWeight: 'bold'
              }}>
                16% of Token Supply Locked for 1 Year!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HowToBuy

