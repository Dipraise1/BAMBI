import React from 'react'

// thinner, less prominent border
const BorderBambi = () => {
  const text = 'BAMBI '.repeat(100)

  return (
    <>
      {/* Top - thinner */}
      <div 
        className="fixed top-0 left-0 right-0 bg-white text-black overflow-hidden z-[1000] font-mono"
        style={{ 
          height: '28px', 
          fontSize: '16px', 
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '8px'
        }}
      >
        <div style={{ whiteSpace: 'nowrap', animation: 'scroll 40s linear infinite' }}>
          {text}{text}
        </div>
      </div>

      {/* Bottom */}
      <div 
        className="fixed bottom-0 left-0 right-0 bg-white text-black overflow-hidden z-[1000] font-mono"
        style={{ 
          height: '28px', 
          fontSize: '16px', 
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '8px'
        }}
      >
        <div style={{ whiteSpace: 'nowrap', animation: 'scroll-reverse 40s linear infinite' }}>
          {text}{text}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </>
  )
}

export default BorderBambi
