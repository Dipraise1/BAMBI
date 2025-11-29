import React from 'react'

// Hero section - made it smaller and cozier
const Hero = () => {
  return (
    <section className="relative" style={{ minHeight: '65vh', paddingTop: '52px', paddingBottom: '48px', background: '#00ff00' }}>
      <div className="max-w-[1200px] mx-auto px-4" style={{ paddingLeft: '1.2rem', paddingRight: '1.2rem' }}>
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12" style={{ alignItems: 'flex-start' }}>
          {/* Left - Image, intentionally slightly off */}
          <div className="relative w-full md:w-auto" style={{ transform: 'translateX(3px)' }}>
            <div className="w-full max-w-[450px] md:max-w-[550px] lg:max-w-[600px] mx-auto md:mx-0 h-[350px] md:h-[450px] lg:h-[500px]" style={{ borderRadius: '8px', overflow: 'hidden', border: '2px solid #000' }}>
              <img
                src="/IMAGE 2025-11-29 11:05:00.jpg"
                alt="Bambi"
                className="w-full h-full object-cover"
              />
            </div>
            {/* CA badge - small corner sticker */}
            <div 
              className="bg-white border-2 border-black hidden md:flex"
              style={{ 
                position: 'absolute', 
                top: '-8px', 
                right: '-8px', 
                width: '70px', 
                height: '70px', 
                borderRadius: '4px',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#00ff00',
                transform: 'rotate(5deg)'
              }}
            >
              CA
            </div>
          </div>

          {/* Right - Text, slightly different alignment */}
          <div className="flex-1" style={{ paddingTop: '12px', transform: 'translateX(-2px)' }}>
            <h1 
              className="font-scrappy font-bold-mix text-4xl md:text-5xl lg:text-6xl"
              style={{ 
                lineHeight: '1.1', 
                marginBottom: '14px',
                color: '#000',
                fontWeight: 700
              }}
            >
              BAMBI
            </h1>
            
            <p 
              className="font-mono text-base md:text-lg lg:text-xl"
              style={{ 
                lineHeight: '1.4', 
                marginBottom: '22px',
                color: '#000',
                fontWeight: 400
              }}
            >
              Born A Memecoin to Break the Internet
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-5">
              <a
                href="https://t.me/qQW2AEZR"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift inline-block bg-[#ff6b9d] text-white px-6 py-3 md:px-8 md:py-3 lg:px-10 lg:py-4 rounded-lg text-sm md:text-base lg:text-lg font-bold border-2 border-black shadow-lg transition-all duration-200 hover:shadow-xl"
                style={{ textDecoration: 'none' }}
              >
                Join the Pack
              </a>
              <a
                href="#story"
                className="hover-lift inline-block bg-black text-white px-6 py-3 md:px-8 md:py-3 lg:px-10 lg:py-4 rounded-lg text-sm md:text-base lg:text-lg font-bold border-2 border-black shadow-lg transition-all duration-200 hover:shadow-xl hover:bg-gray-800"
                style={{ textDecoration: 'none' }}
              >
                Read Our Story
              </a>
            </div>

            <p 
              className="font-scrappy text-sm md:text-base lg:text-lg mb-5"
              style={{ 
                color: '#000',
                fontWeight: 400
              }}
            >
              Adopt Don't Shop
            </p>

            {/* Contract Address */}
            <div 
              className="font-mono w-full md:w-auto text-xs md:text-sm lg:text-base mb-4 p-3 md:p-4 bg-white rounded-lg border-2 border-black inline-block break-all"
              style={{ 
                color: '#000'
              }}
            >
              CA: 4kAFtWjyzrpx6E7TFVhcVKKDEsxc8H3uYtg7dTnXpump
            </div>

            {/* Social Links with Icons */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://x.com/PumpBambi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift inline-flex items-center justify-center w-11 h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-lg border-2 border-black transition-transform duration-200"
                style={{ textDecoration: 'none' }}
              >
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23000000'%3E%3Cpath d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'/%3E%3C/svg%3E"
                  alt="X (Twitter)"
                  className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                />
              </a>
              <a
                href="http://t.me/PumpBambi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift inline-flex items-center justify-center w-11 h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-lg border-2 border-black transition-transform duration-200"
                style={{ textDecoration: 'none' }}
              >
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23000000'%3E%3Cpath d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.166 1.699-.84 5.816-1.189 7.699-.168.9-.5 1.201-.82 1.23-.696.064-1.226-.46-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.118.095.151.223.167.312.017.09.037.293.021.451z'/%3E%3C/svg%3E"
                  alt="Telegram"
                  className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
