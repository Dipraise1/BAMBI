// Tokenomics - Token Lock section only
const Tokenomics = () => {
  return (
    <section id="tokenomics" className="py-12 md:py-16 lg:py-24" style={{ background: '#2ee871' }}>
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Heading */}
        <h2 
          className="font-scrappy font-bold-mix text-center"
          style={{ 
            fontSize: 'clamp(32px, 5vw, 64px)', 
            marginBottom: '32px',
            color: '#fff',
            lineHeight: '1.2',
            textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000, 2px 0 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
          }}
        >
          TOKENOMICS
        </h2>

        {/* Container with Token Lock and Meme Video side by side */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-stretch lg:items-center justify-center w-full" style={{ marginBottom: '32px' }}>
          {/* Locked Supply Notice */}
          <div 
            className="w-full lg:flex-1"
            style={{ 
              padding: 'clamp(20px, 4vw, 48px)',
              background: '#fff', 
              borderRadius: '12px', 
              border: '3px solid #000',
              textAlign: 'center',
              maxWidth: '100%',
              minWidth: '0'
            }}
          >
            <div style={{ 
              fontSize: 'clamp(24px, 4vw, 36px)', 
              fontWeight: 'bold', 
              marginBottom: '16px', 
              color: '#fff',
              textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000, 2px 0 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
            }}>
              🔒 TOKEN LOCK
            </div>
            <div style={{ 
              fontSize: 'clamp(18px, 3vw, 24px)', 
              color: '#000',
              lineHeight: '1.6',
              marginBottom: '16px'
            }}>
              <span style={{ fontWeight: 'bold', color: '#2ee871' }}>16%</span> of Token Supply Locked for <span style={{ fontWeight: 'bold', color: '#2ee871' }}>1 Year</span>!
            </div>
            <div style={{ 
              fontSize: 'clamp(14px, 2vw, 18px)', 
              color: '#000',
              lineHeight: '1.8'
            }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>Verify on Streamflow:</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <a 
                  href="https://app.streamflow.finance/contract/solana/mainnet/B5T1thPoX5oViPZqJLXizD13WRLY1wdcCyoXXUL8uG8y"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    color: '#2ee871', 
                    textDecoration: 'underline',
                    fontSize: 'clamp(12px, 2vw, 16px)',
                    wordBreak: 'break-all',
                    fontWeight: 'bold'
                  }}
                >
                  Contract 1
                </a>
                <a 
                  href="https://app.streamflow.finance/contract/solana/mainnet/FemLBMNVzompWXrcCZGr2eJ7A1jAgGPVHGVuFxLTcYMc"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    color: '#2ee871', 
                    textDecoration: 'underline',
                    fontSize: 'clamp(12px, 2vw, 16px)',
                    wordBreak: 'break-all',
                    fontWeight: 'bold'
                  }}
                >
                  Contract 2
                </a>
                <a 
                  href="https://app.streamflow.finance/contract/solana/mainnet/DvZRQKt6x3x2Zvhi8FC4WJxVzfEb4zwK4KTcxaEL5uMD"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    color: '#2ee871', 
                    textDecoration: 'underline',
                    fontSize: 'clamp(12px, 2vw, 16px)',
                    wordBreak: 'break-all',
                    fontWeight: 'bold'
                  }}
                >
                  Contract 3
                </a>
                <a 
                  href="https://app.streamflow.finance/contract/solana/mainnet/9DVTpjDs1jaMF8wzwcLnvMZ4Ud3tQBkrz1BHKpCbk5vK"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    color: '#2ee871', 
                    textDecoration: 'underline',
                    fontSize: 'clamp(12px, 2vw, 16px)',
                    wordBreak: 'break-all',
                    fontWeight: 'bold'
                  }}
                >
                  Contract 4
                </a>
              </div>
            </div>
          </div>

          {/* Meme Video */}
          <div className="w-full lg:flex-1" style={{ maxWidth: '100%', minWidth: '0' }}>
            <div style={{ 
              borderRadius: '12px', 
              overflow: 'hidden', 
              border: '3px solid #000',
              background: '#fff',
              width: '100%'
            }}>
              <video
                src="/BambiMeme.gif.mp4"
                className="w-full h-auto"
                autoPlay
                loop
                muted
                playsInline
                style={{ display: 'block', width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tokenomics
