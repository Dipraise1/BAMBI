import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const socialLinks = [
    { 
      name: "Twitter", 
      url: "https://x.com/PumpBambi", 
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'/%3E%3C/svg%3E"
    },
    { 
      name: "Telegram", 
      url: "http://t.me/PumpBambi", 
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.166 1.699-.84 5.816-1.189 7.699-.168.9-.5 1.201-.82 1.23-.696.064-1.226-.46-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.118.095.151.223.167.312.017.09.037.293.021.451z'/%3E%3C/svg%3E"
    },
  ]

  return (
    <footer className="bg-gradient-to-b from-teal-dark to-black text-white py-16 px-4 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,255,0,0.1) 35px, rgba(0,255,0,0.1) 70px)`
        }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-3xl md:text-4xl font-black mb-4 text-impact">BAMBI</h3>
            <p className="text-white/80 mb-4">
              Born A Memecoin to Break the Internet
            </p>
            <p className="text-white/60 text-sm">
              A community-driven memecoin with a heart for rescue dogs. Every transaction helps save lives.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg md:text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#story" className="text-white/80 hover:text-neon-green transition-colors">
                  The Rescue Story
                </a>
              </li>
              <li>
                <a href="#tokenomics" className="text-white/80 hover:text-neon-green transition-colors">
                  Tokenomics
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-white/80 hover:text-neon-green transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#roadmap" className="text-white/80 hover:text-neon-green transition-colors">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg md:text-xl font-bold mb-4">Join the Pack</h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:opacity-80"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  <img 
                    src={social.icon} 
                    alt={social.name}
                    className="w-8 h-8"
                  />
                </motion.a>
              ))}
            </div>
            <p className="mt-6 text-white/60 text-sm">
              Follow us for updates, memes, and rescue stories!
            </p>
          </div>
        </div>

        {/* Adopt Don't Shop Banner */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="text-center">
            <motion.div
              className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-xl md:text-2xl font-bold text-neon-green">
                🐾 Adopt Don't Shop 🐾
              </p>
            </motion.div>
            <p className="text-white/60 text-sm mb-4">
              Support rescue organizations. Save a life. Make a difference.
            </p>
            <p className="text-white/40 text-xs">
              © 2024 BAMBI Memecoin. Built with ❤️ for rescue dogs everywhere.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-white/40 text-xs max-w-3xl mx-auto">
            ⚠️ Disclaimer: Cryptocurrency investments carry risk. This is a community-driven memecoin project. 
            Always do your own research and never invest more than you can afford to lose. 
            The primary mission is to support rescue organizations and raise awareness about pet adoption.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

