import React, { useEffect } from 'react'

const PawTrail = () => {
  useEffect(() => {
    let trail = []
    const maxTrailLength = 10

    const createPaw = (x, y) => {
      const paw = document.createElement('div')
      paw.className = 'paw-trail'
      paw.textContent = '🐾'
      paw.style.left = `${x}px`
      paw.style.top = `${y}px`
      document.body.appendChild(paw)
      trail.push(paw)

      if (trail.length > maxTrailLength) {
        const oldPaw = trail.shift()
        if (oldPaw) {
          oldPaw.remove()
        }
      }

      setTimeout(() => {
        paw.remove()
        trail = trail.filter(p => p !== paw)
      }, 1000)
    }

    const handleMouseMove = (e) => {
      // Throttle paw creation
      if (Math.random() > 0.7) {
        createPaw(e.clientX, e.clientY)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      trail.forEach(paw => paw.remove())
    }
  }, [])

  return null
}

export default PawTrail

