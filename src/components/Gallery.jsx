import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

const Gallery = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    {
      src: "/IMAGE 2025-11-29 11:05:00.jpg",
      title: "Bambi Today",
      description: "The star of the show, spreading joy with antlers and flowers!",
      type: "after"
    },
    {
      src: "/IMAGE 2025-11-29 11:56:35.jpg",
      title: "Bambi",
      description: "Beautiful Bambi showing her unique charm!",
      type: "after"
    }
  ]

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section id="gallery" className="py-12 md:py-16 lg:py-20 px-4 relative overflow-hidden" style={{ background: '#2ee871' }}>
      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 text-impact" style={{ 
            color: '#fff',
            textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000, 2px 0 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
          }}>
            Gallery
          </h2>
          <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto" style={{ 
            color: '#000',
            fontWeight: 'bold'
          }}>
            See Bambi's journey from rescue to internet stardom
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-5xl mx-auto mb-12 md:mb-16">
          <div className="relative bg-white rounded-2xl p-2 md:p-4 shadow-2xl border-2 border-black">
            <div className="relative overflow-hidden rounded-xl">
              <motion.div
                className="flex"
                animate={{ x: `-${currentIndex * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {images.map((image, index) => (
                  <div key={index} className="min-w-full">
                    <div className="relative flex items-center justify-center bg-gray-100 rounded-xl py-4" style={{ minHeight: '300px', maxHeight: '500px' }}>
                      <img
                        src={image.src}
                        alt={image.title}
                        className="max-w-full max-h-full object-contain rounded-xl"
                        style={{ maxWidth: '80%', maxHeight: '450px' }}
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 md:p-8 rounded-b-xl">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{image.title}</h3>
                        <p className="text-black text-sm md:text-base lg:text-lg" style={{ fontWeight: 'bold' }}>{image.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-black w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-10 border-2 border-black"
              aria-label="Previous image"
            >
              <span className="text-xl md:text-2xl font-bold">←</span>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-black w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-10 border-2 border-black"
              aria-label="Next image"
            >
              <span className="text-xl md:text-2xl font-bold">→</span>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 border-2 border-black ${
                    index === currentIndex ? 'bg-black' : 'bg-white'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Before/After Labels */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="bg-white rounded-xl p-6 md:p-8 text-center border-2 border-black shadow-lg">
            <div className="text-5xl md:text-6xl mb-4">🌃</div>
            <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ 
              color: '#fff',
              textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000, 2px 0 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
            }}>Before</h3>
            <p className="text-base md:text-lg" style={{ 
              color: '#000',
              fontWeight: 'bold'
            }}>
              Abandoned on the streets, alone and scared
            </p>
          </div>
          <div className="bg-[#ff6b9d] rounded-xl p-6 md:p-8 text-center text-white border-2 border-black shadow-lg">
            <div className="text-5xl md:text-6xl mb-4">✨</div>
            <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ 
              color: '#fff',
              textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000, 2px 0 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
            }}>After</h3>
            <p className="text-base md:text-lg" style={{ 
              color: '#000',
              fontWeight: 'bold'
            }}>
              Loved, celebrated, and inspiring a movement
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery

