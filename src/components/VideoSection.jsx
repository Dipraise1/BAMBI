import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

const VideoSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const videos = [
    { src: '/IMG_0599.MOV' },
    { src: '/IMG_0528.MP4' },
    { src: '/FILE 2025-12-17 12:25:18.mp4' }
  ]

  return (
    <section className="py-8 md:py-12 lg:py-16" style={{ background: '#2ee871' }}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                className="w-full"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
              >
                <div 
                  className="w-full h-[400px] md:h-[450px] lg:h-[500px] rounded-lg overflow-hidden border-2 border-black shadow-lg hover:shadow-xl transition-shadow duration-300"
                  style={{ borderRadius: '8px', background: '#000' }}
                >
                  <video
                    src={video.src}
                    className="w-full h-full object-contain"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default VideoSection

