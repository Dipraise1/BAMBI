import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

const SectionDivider = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <div className="relative w-full py-4 md:py-6 lg:py-8" style={{ background: '#2ee871' }}>
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div 
          ref={ref}
          className="flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="flex items-center gap-4 w-full max-w-md">
            <motion.div 
              className="flex-1 h-px bg-black opacity-20"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            ></motion.div>
            <div className="flex gap-2">
              <motion.div 
                className="w-2 h-2 rounded-full bg-black opacity-30"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.4 }}
              ></motion.div>
              <motion.div 
                className="w-2 h-2 rounded-full bg-black opacity-20"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 }}
              ></motion.div>
              <motion.div 
                className="w-2 h-2 rounded-full bg-black opacity-30"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 }}
              ></motion.div>
            </div>
            <motion.div 
              className="flex-1 h-px bg-black opacity-20"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SectionDivider

