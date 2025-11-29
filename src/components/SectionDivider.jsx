import React from 'react'

const SectionDivider = () => {
  return (
    <div className="relative w-full py-4 md:py-6 lg:py-8" style={{ background: '#00ff00' }}>
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-4 w-full max-w-md">
            <div className="flex-1 h-px bg-black opacity-20"></div>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-black opacity-30"></div>
              <div className="w-2 h-2 rounded-full bg-black opacity-20"></div>
              <div className="w-2 h-2 rounded-full bg-black opacity-30"></div>
            </div>
            <div className="flex-1 h-px bg-black opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionDivider

