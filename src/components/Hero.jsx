import React, { useState } from 'react'

// Hero section - made it smaller and cozier
const Hero = () => {
  const [copied, setCopied] = useState(false)
  const contractAddress = '4kAFtWjyzrpx6E7TFVhcVKKDEsxc8H3uYtg7dTnXpump'

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }
  return (
    <section className="relative overflow-x-hidden" style={{ minHeight: '65vh', paddingTop: '96px', paddingBottom: '48px', background: '#2ee871' }}>
      <div className="max-w-[1200px] mx-auto px-4" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12" style={{ alignItems: 'flex-start' }}>
          {/* Left - Image, intentionally slightly off */}
          <div className="relative w-full md:w-auto animate-fadeInLeft md:translate-x-[3px]">
            <div className="w-full max-w-[450px] md:max-w-[550px] lg:max-w-[600px] mx-auto md:mx-0 h-[350px] md:h-[450px] lg:h-[500px]" style={{ borderRadius: '8px', overflow: 'hidden', border: '2px solid #000' }}>
              <img
                src="/IMAGE 2025-11-29 11:05:00.jpg"
                alt="Bambi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Text, slightly different alignment */}
          <div className="flex-1 animate-fadeInRight w-full md:-translate-x-[2px]" style={{ paddingTop: '12px' }}>
            <h1 
              className="font-scrappy font-bold-mix text-4xl md:text-5xl lg:text-6xl"
              style={{ 
                lineHeight: '1.1', 
                marginBottom: '14px',
                color: '#fff',
                fontWeight: 700,
                textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000, 2px 0 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
              }}
            >
              BAMBI
            </h1>
            
            <p 
              className="font-mono text-base md:text-lg lg:text-xl animate-fadeInUp"
              style={{ 
                lineHeight: '1.4', 
                marginBottom: '22px',
                color: '#fff',
                fontWeight: 400,
                animationDelay: '0.2s',
                animationFillMode: 'both'
              }}
            >
              Born A Memecoin to Break the Internet
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-5 animate-fadeInUp" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              <a
                href="https://t.me/PumpBambi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift inline-block bg-[#D2B48C] px-6 py-3 md:px-8 md:py-3 lg:px-10 lg:py-4 rounded-lg text-sm md:text-base lg:text-lg font-bold border-2 border-black shadow-lg transition-all duration-200 hover:shadow-xl"
                style={{ 
                  textDecoration: 'none',
                  color: '#fff'
                }}
              >
                Join the Pack
              </a>
              <a
                href="#story"
                className="hover-lift inline-block bg-black px-6 py-3 md:px-8 md:py-3 lg:px-10 lg:py-4 rounded-lg text-sm md:text-base lg:text-lg font-bold border-2 border-black shadow-lg transition-all duration-200 hover:shadow-xl hover:bg-gray-800"
                style={{ 
                  textDecoration: 'none',
                  color: '#fff',
                  textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000, 2px 0 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
                }}
              >
                Read Our Story
              </a>
            </div>

            {/* Contract Address */}
            <div 
              className="font-mono w-full text-xs md:text-sm lg:text-base mb-4 p-3 md:p-4 bg-white rounded-lg border-2 border-black break-all animate-fadeInUp cursor-pointer transition-all duration-200 hover:bg-gray-50 hover:shadow-md"
              style={{ 
                animationDelay: '0.6s',
                animationFillMode: 'both',
                maxWidth: '100%',
                wordBreak: 'break-all',
                overflowWrap: 'break-word'
              }}
              onClick={handleCopy}
              title="Click to copy"
            >
              <div className="flex items-center gap-2">
                <span style={{ 
                  color: '#000'
                }}>
                  CA: {contractAddress}
                </span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#000" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="flex-shrink-0"
                >
                  {copied ? (
                    <path d="M20 6L9 17l-5-5" />
                  ) : (
                    <>
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </>
                  )}
                </svg>
              </div>
              {copied && (
                <div className="text-xs mt-1 text-[#2ee871] font-bold">
                  Copied!
                </div>
              )}
            </div>

            {/* Social Links with Icons */}
            <div className="flex flex-wrap gap-3 md:gap-4 mt-4 animate-fadeInUp" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
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
              <a
                href="https://dexscreener.com/solana/4kAFtWjyzrpx6E7TFVhcVKKDEsxc8H3uYtg7dTnXpump"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift inline-flex items-center justify-center w-11 h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-lg border-2 border-black transition-transform duration-200"
                style={{ textDecoration: 'none' }}
                title="DexScreener"
              >
                <img 
                  src="https://dexscreener.com/favicon.ico"
                  alt="DexScreener"
                  className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z'/%3E%3C/svg%3E"
                  }}
                />
              </a>
              <a
                href="https://www.dextools.io/app/en/solana/pair-explorer/4kAFtWjyzrpx6E7TFVhcVKKDEsxc8H3uYtg7dTnXpump"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift inline-flex items-center justify-center w-11 h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-lg border-2 border-black transition-transform duration-200"
                style={{ textDecoration: 'none' }}
                title="DexTools"
              >
                <img 
                  src="/Dextools_Logo.svg"
                  alt="DexTools"
                  className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23000;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23333;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23grad)' d='M60 10L10 35l50 25 50-25-50-25zM10 85l50 25 50-25M10 60l50 25 50-25'/%3E%3C/svg%3E"
                  }}
                />
              </a>
              <a
                href="https://pump.fun/4kAFtWjyzrpx6E7TFVhcVKKDEsxc8H3uYtg7dTnXpump"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift inline-flex items-center justify-center w-11 h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-lg border-2 border-black transition-transform duration-200"
                style={{ textDecoration: 'none' }}
                title="Pump.fun"
              >
                <img 
                  src="https://pump.fun/favicon.ico"
                  alt="Pump.fun"
                  className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='10' fill='none' stroke='%23000' stroke-width='2'/%3E%3Cpath fill='%23000' d='M8 12h8M12 8v8'/%3E%3C/svg%3E"
                  }}
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
