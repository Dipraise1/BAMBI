import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

const Roadmap = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const milestones = [
    {
      phase: "Phase 1: The Rescue",
      title: "Launch & Community Building",
      description: "Fair launch with no presale. Build an amazing community of dog lovers and crypto enthusiasts.",
      status: "completed",
      emoji: "🚀",
      tasks: [
        "Fair launch on DEX",
        "Community building",
        "Social media presence",
        "First rescue donations"
      ]
    },
    {
      phase: "Phase 2: Growing the Pack",
      title: "Partnerships & Expansion",
      description: "Partner with rescue organizations across California and expand our reach.",
      status: "active",
      emoji: "🤝",
      tasks: [
        "Rescue organization partnerships",
        "CEX listings",
        "Marketing campaigns",
        "Community events"
      ]
    },
    {
      phase: "Phase 3: Making Impact",
      title: "Major Donations & Awareness",
      description: "Scale our donations and raise awareness about pet adoption and rescue.",
      status: "upcoming",
      emoji: "💝",
      tasks: [
        "$100K+ in donations",
        "National rescue partnerships",
        "Adoption awareness campaigns",
        "Bambi merchandise launch"
      ]
    },
    {
      phase: "Phase 4: Breaking the Internet",
      title: "Global Movement",
      description: "Become the most heartwarming memecoin that actually makes a difference worldwide.",
      status: "upcoming",
      emoji: "🌍",
      tasks: [
        "International expansion",
        "Major exchange listings",
        "Global rescue network",
        "Bambi Foundation launch"
      ]
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-neon-green"
      case "active":
        return "bg-soft-pink"
      case "upcoming":
        return "bg-gray-400"
      default:
        return "bg-gray-400"
    }
  }

  return (
    <section id="roadmap" className="py-12 md:py-16 lg:py-20 px-4 relative overflow-hidden" style={{ background: '#2ee871' }}>
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
            Roadmap
          </h2>
          <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto" style={{ 
            color: '#000',
            fontWeight: 'bold'
          }}>
            Our journey from rescue to breaking the internet
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-black opacity-20 transform md:-translate-x-1/2"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={`relative mb-8 md:mb-12 flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-4 border-black flex items-center justify-center z-10 transform md:-translate-x-1/2 shadow-lg">
                  <span className="text-3xl md:text-4xl">{milestone.emoji}</span>
                </div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-24 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    className="bg-white rounded-xl p-6 md:p-8 shadow-xl border-2 border-black"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold text-white border-2 border-black ${getStatusColor(milestone.status)}`}>
                        {milestone.status.toUpperCase()}
                      </span>
                      <span className="text-sm font-semibold" style={{ 
                        color: '#fff',
                        textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000, 2px 0 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
                        fontWeight: 'bold'
                      }}>{milestone.phase}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ 
                      color: '#fff',
                      textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000, 2px 0 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
                    }}>{milestone.title}</h3>
                    <p className="text-base md:text-lg mb-4" style={{ 
                      color: '#000', 
                      lineHeight: '1.6',
                      fontWeight: 'bold'
                    }}>{milestone.description}</p>
                    <ul className="space-y-2">
                      {milestone.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-center gap-2 text-base md:text-lg" style={{ 
                          color: '#fff',
                          textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000, 2px 0 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
                          fontWeight: 'bold'
                        }}>
                          <span className="text-[#2ee871] font-bold text-lg">✓</span>
                          <span style={{ fontWeight: 'bold' }}>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="bg-[#ff6b9d] rounded-xl p-6 md:p-8 lg:p-10 text-white shadow-xl max-w-3xl mx-auto border-2 border-black">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4" style={{ 
              color: '#fff',
              textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000, 2px 0 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
            }}>Join Us on This Journey</h3>
            <p className="text-base md:text-lg lg:text-xl mb-6" style={{ 
              color: '#000',
              fontWeight: 'bold'
            }}>
              Together, we're building something special - a memecoin with heart that actually makes a difference
            </p>
            <motion.a
              href="#tokenomics"
              className="inline-block bg-white text-[#ff6b9d] font-bold py-3 px-6 md:py-4 md:px-8 rounded-full text-base md:text-lg shadow-lg border-2 border-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                textDecoration: 'none',
                textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000, 2px 0 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
              }}
            >
              🐾 Be Part of the Pack 🐾
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Roadmap

