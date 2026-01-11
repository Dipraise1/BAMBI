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
        
        {/* Container with Token Lock/Burn and Meme Video side by side */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-stretch lg:items-center justify-center w-full" style={{ marginBottom: '32px' }}>
          {/* Locked Supply Notice with Token Lock and Token Burn */}
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
            {/* Header with both sections */}
            <div style={{ 
              fontSize: 'clamp(24px, 4vw, 36px)', 
              fontWeight: 'bold', 
              marginBottom: '24px', 
              color: '#fff',
              textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000, 2px 0 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '16px',
              flexWrap: 'wrap'
            }}>
              <span>🔒 TOKEN LOCK</span>
              <span style={{ color: '#000' }}>|</span>
              <span>🔥 TOKEN BURN</span>
            </div>

            {/* Two column layout for Lock and Burn */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Left: Token Lock */}
              <div style={{ flex: '1', width: '100%' }} className="flex-1 w-full">
                <div style={{ 
                  fontSize: 'clamp(18px, 3vw, 24px)', 
                  color: '#000',
                  lineHeight: '1.6',
                  marginBottom: '16px',
                  fontWeight: 'bold'
                }}>
                  <span style={{ fontWeight: 'bold', color: '#2ee871' }}>20%</span> of Token Supply Locked for <span style={{ fontWeight: 'bold', color: '#2ee871' }}>1 Year</span>!
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
                    <a 
                      href="https://app.streamflow.finance/contract/solana/mainnet/EZEekdBWWKPvAsKueYe7zSaTNgtMSpXEDtmthHe81dza"
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
                      Contract 5
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: Token Burn */}
              <div style={{ flex: '1', width: '100%' }} className="flex-1 w-full">
                <div style={{ 
                  fontSize: 'clamp(18px, 3vw, 24px)', 
                  color: '#000',
                  lineHeight: '1.6',
                  marginBottom: '16px',
                  fontWeight: 'bold'
                }}>
                  <span style={{ fontWeight: 'bold', color: '#2ee871' }}>15%</span> of Token Supply Burned!
                </div>
                <div style={{ 
                  fontSize: 'clamp(14px, 2vw, 18px)', 
                  color: '#000',
                  lineHeight: '1.8'
                }}>
                  <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>Burn Contracts:</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                    <a 
                      href="https://solscan.io/tx/31YsFeowNKyS8UP13fgPvEaK2WTu2oxu5EP8suM2EHHPvGex5iPPra6s27HKj9A55FHKjarpSg283kJ5jn5Jda9e"
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
                      Burn 1
                    </a>
                    <a 
                      href="https://solscan.io/tx/52zMTcT7HHb7EhWzpatGje4qLj1UiN6NHTC53raesRiZkiPrdjJGxowJEA4VCGyiV6xigrwhw19j1wVmWmZqcinM"
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
                      Burn 2
                    </a>
                    <a 
                      href="https://solscan.io/tx/5XSgEwPep2i26avfMEaZvnV9MwKDrSp4YQM5dpsosgLTkz5KyQo3qhYGkebcF3dzExahojECGSMfsixye2mWahFB"
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
                      Burn 3
                    </a>
                    <a 
                      href="https://solscan.io/tx/5S2Er5W1N3NVv9wvDYdXze1gDMv2JsLqd8R7kAHpV2PVknZmcSxvkWJaLCMAwhKBUdRQHcaGZCQpw11vbbvXaNo6"
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
                      Burn 4
                    </a>
                    <a 
                      href="https://solscan.io/tx/3EPnPQcwSSw6sMw7gX2u2i7WeKvDmpTsa6mxATYy7wWKnbJ33zvcDHdLCsnH9TS4HXYPtnKvT1iihw91jdvxTmYv"
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
                      Burn 5
                    </a>
                  </div>
                </div>
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
                src="/BAMBI_67X.mp4"
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
