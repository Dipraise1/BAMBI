// Tokenomics - Token Lock section only
const Tokenomics = () => {
  return (
    <section id="tokenomics" style={{ paddingTop: '96px', paddingBottom: '96px', background: '#2ee871' }}>
      <div className="max-w-[1400px] mx-auto px-4" style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
        {/* Heading */}
        <h2 
          className="font-scrappy font-bold-mix"
          style={{ 
            fontSize: '64px', 
            marginBottom: '48px',
            color: '#fff',
            textAlign: 'center',
            lineHeight: '1.2',
            textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000, 2px 0 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
          }}
        >
          TOKENOMICS
        </h2>

        {/* Locked Supply Notice */}
        <div 
          style={{ 
            padding: '48px', 
            background: '#fff', 
            borderRadius: '12px', 
            border: '3px solid #000',
            marginBottom: '48px',
            textAlign: 'center',
            maxWidth: '900px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          <div style={{ 
            fontSize: '36px', 
            fontWeight: 'bold', 
            marginBottom: '24px', 
            color: '#fff',
            textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000, 2px 0 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
          }}>
            🔒 Token Lock
          </div>
          <div style={{ 
            fontSize: '24px', 
            color: '#fff',
            lineHeight: '1.6',
            marginBottom: '24px',
            textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000, 2px 0 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
          }}>
            <span style={{ fontWeight: 'bold', color: '#2ee871' }}>16%</span> of token supply locked for <span style={{ fontWeight: 'bold', color: '#2ee871' }}>1 year</span>
          </div>
          <div style={{ 
            fontSize: '18px', 
            color: '#fff',
            lineHeight: '1.8',
            textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000, 2px 0 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
          }}>
            <div style={{ marginBottom: '16px', fontWeight: 'bold' }}>Verify on Streamflow:</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
              <a 
                href="https://app.streamflow.finance/contract/solana/mainnet/B5T1thPoX5oViPZqJLXizD13WRLY1wdcCyoXXUL8uG8y"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  color: '#2ee871', 
                  textDecoration: 'underline',
                  fontSize: '16px',
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
                  fontSize: '16px',
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
                  fontSize: '16px',
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
                  fontSize: '16px',
                  wordBreak: 'break-all',
                  fontWeight: 'bold'
                }}
              >
                Contract 4
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tokenomics
