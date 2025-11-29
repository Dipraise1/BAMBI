import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const FloatingElements = () => {
  const [elements, setElements] = useState([])

  useEffect(() => {
    const emojis = ['🐾', '❤️', '⭐', '✨']
    const newElements = []

    for (let i = 0; i < 5; i++) {
      newElements.push({
        id: i,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 2,
        size: 15 + Math.random() * 20,
      })
    }

    setElements(newElements)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            fontSize: `${element.size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut",
          }}
        >
          {element.emoji}
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingElements

