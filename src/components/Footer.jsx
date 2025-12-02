import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const socialLinks = [
    { 
      name: "Twitter", 
      url: "https://x.com/PumpBambi", 
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23000000'%3E%3Cpath d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'/%3E%3C/svg%3E"
    },
    { 
      name: "Telegram", 
      url: "http://t.me/PumpBambi", 
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23000000'%3E%3Cpath d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.166 1.699-.84 5.816-1.189 7.699-.168.9-.5 1.201-.82 1.23-.696.064-1.226-.46-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.118.095.151.223.167.312.017.09.037.293.021.451z'/%3E%3C/svg%3E"
    },
    { 
      name: "DexScreener", 
      url: "https://dexscreener.com/solana/4kAFtWjyzrpx6E7TFVhcVKKDEsxc8H3uYtg7dTnXpump", 
      icon: "https://dexscreener.com/favicon.ico",
      fallback: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z'/%3E%3C/svg%3E"
    },
    { 
      name: "DexTools", 
      url: "https://www.dextools.io/app/en/solana/pair-explorer/4kAFtWjyzrpx6E7TFVhcVKKDEsxc8H3uYtg7dTnXpump", 
      icon: "/Dextools_Logo.svg",
      fallback: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23000;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23333;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23grad)' d='M60 10L10 35l50 25 50-25-50-25zM10 85l50 25 50-25M10 60l50 25 50-25'/%3E%3C/svg%3E"
    },
    { 
      name: "Pump.fun", 
      url: "https://pump.fun/4kAFtWjyzrpx6E7TFVhcVKKDEsxc8H3uYtg7dTnXpump", 
      icon: "https://pump.fun/favicon.ico",
      fallback: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='10' fill='none' stroke='%23000' stroke-width='2'/%3E%3Cpath fill='%23000' d='M8 12h8M12 8v8'/%3E%3C/svg%3E"
    },
    { 
      name: "Terminal", 
      url: "https://trade.padre.gg/trade/solana/FA8DzqyxtWkSJeTSVS6apu9MAX9Np2MrW6pVYan4rkFo?rk=bambi", 
      icon: "/IMAGE 2025-12-02 17:03:24.jpg",
      fallback: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='10' fill='none' stroke='%23000' stroke-width='2'/%3E%3Cpath fill='%23000' d='M8 12h8M12 8v8'/%3E%3C/svg%3E"
    },
  ]

  // Separate DexScreener from other links
  const regularLinks = socialLinks.filter(link => link.name !== "DexScreener")
  const dexScreenerLink = socialLinks.find(link => link.name === "DexScreener")

  return (
    <footer className="text-white py-16 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #2ee871, #25d366)', paddingBottom: 'calc(4rem + 28px)', marginBottom: '0' }}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,0.1) 35px, rgba(0,0,0,0.1) 70px)`
        }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Social Links */}
        <div ref={ref} className="text-center mb-12">
          <h4 className="font-scrappy font-bold-mix text-lg md:text-xl mb-6" style={{ 
            color: '#fff',
            textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000, 2px 0 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
          }}>Support $BAMBI</h4>
          <div className="flex justify-center flex-wrap gap-4 md:gap-6 items-center">
            {regularLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-11 h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-lg border-2 border-black"
                style={{ textDecoration: 'none' }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.15, 
                  y: -4,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.name}
              >
                <img 
                  src={social.icon} 
                  alt={social.name}
                  className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                  onError={(e) => {
                    if (social.fallback) {
                      e.target.src = social.fallback
                    }
                  }}
                />
              </motion.a>
            ))}
            
            {/* DexScreener in a box */}
            {dexScreenerLink && (
              <motion.a
                href={dexScreenerLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-11 h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-lg border-2 border-black"
                style={{ textDecoration: 'none' }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: regularLinks.length * 0.1 }}
                whileHover={{ 
                  scale: 1.15, 
                  y: -4,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.95 }}
                aria-label={dexScreenerLink.name}
              >
                <img 
                  src={dexScreenerLink.icon} 
                  alt={dexScreenerLink.name}
                  className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                  onError={(e) => {
                    if (dexScreenerLink.fallback) {
                      e.target.src = dexScreenerLink.fallback
                    }
                  }}
                />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

