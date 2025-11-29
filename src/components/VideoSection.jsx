import React from 'react'

const VideoSection = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16" style={{ background: '#00ff00' }}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="flex justify-center">
          <div className="w-full max-w-[800px] md:max-w-[900px] lg:max-w-[1000px] h-[400px] md:h-[500px] lg:h-[600px]" style={{ borderRadius: '8px', overflow: 'hidden', border: '2px solid #000' }}>
            <video
              src="/Stretch Bambi.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoSection

