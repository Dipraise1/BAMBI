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
          style={{ color: '#000' }}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          HOW TO BUY
        </motion.h2>

        <div className="space-y-8 md:space-y-12">
          {/* Step 1: Create a Wallet */}
          <motion.div 
            className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center border-2 border-black shadow-lg">
              {/* Phantom Wallet Ghost Icon */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 3.31 1.65 6.23 4.17 8.01L6 22h3l1-1h4l1 1h3l-.17-1.99C20.35 18.23 22 15.31 22 12c0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8 0-1.57.46-3.03 1.24-4.26C7.5 6.5 9.64 6 12 6s4.5.5 6.76 1.74C19.54 8.97 20 10.43 20 12c0 4.41-3.59 8-8 8z" fill="#000"/>
                <circle cx="9" cy="10" r="1.5" fill="#000"/>
                <circle cx="15" cy="10" r="1.5" fill="#000"/>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#000' }}>
                CREATE A WALLET
              </h3>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: '#333' }}>
                Download Phantom (or your preferred wallet) for free from the App Store or Google Play. 
                If you're on desktop, install the Phantom Chrome extension directly from the Chrome Web Store.
              </p>
            </div>
          </motion.div>

          {/* Step 2: Get Some Solana */}
          <motion.div 
            className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center border-2 border-black shadow-lg">
              {/* Solana Stack Icon */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="4" width="12" height="4" rx="1" fill="#000"/>
                <rect x="6" y="10" width="12" height="4" rx="1" fill="#000"/>
                <rect x="6" y="16" width="12" height="4" rx="1" fill="#000"/>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#000' }}>
                GET SOME SOLANA
              </h3>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: '#333' }}>
                Make sure your wallet has SOL to swap into $BAMBI. If you don't have any yet, you can: 
                Purchase SOL directly in your wallet, Transfer from another wallet, or Buy on an exchange 
                and send it straight to your wallet.
              </p>
            </div>
          </motion.div>

          {/* Step 3: Switch Solana for BAMBI */}
          <motion.div 
            className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          >
            <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center border-2 border-black shadow-lg">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-black flex items-center justify-center" style={{ background: '#2ee871' }}>
                <span className="text-2xl md:text-3xl font-black" style={{ color: '#000' }}>B</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#000' }}>
                SWITCH SOLANA FOR $BAMBI
              </h3>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: '#333' }}>
                Exchange your SOL for $BAMBI and join the pack! Support rescue organizations while being part 
                of a community-driven memecoin with heart.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HowToBuy

