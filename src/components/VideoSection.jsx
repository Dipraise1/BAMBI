import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

const VideoSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-8 md:py-12 lg:py-16" style={{ background: '#2ee871' }}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <motion.div 
          ref={ref}
          className="flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="w-full max-w-[800px] md:max-w-[900px] lg:max-w-[1000px] h-[400px] md:h-[500px] lg:h-[600px]" style={{ borderRadius: '8px', overflow: 'hidden', border: '2px solid #000' }}>
            <video
              src="/IMG_0353.MP4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default VideoSection

