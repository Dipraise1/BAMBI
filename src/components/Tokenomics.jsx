import { useState, useEffect } from 'react'

// Tokenomics - simple layout, no fancy animations
const Tokenomics = () => {
  const [donationAmount, setDonationAmount] = useState(125000)

  useEffect(() => {
    // donation counter
    const interval = setInterval(() => {
      setDonationAmount(prev => prev + Math.floor(Math.random() * 8))
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="tokenomics" style={{ paddingTop: '48px', paddingBottom: '52px', background: '#2ee871' }}>
      <div className="max-w-[920px] mx-auto px-4" style={{ paddingLeft: '1.2rem', paddingRight: '1.2rem' }}>
        {/* Heading - centered this time */}
        <h2 
          className="font-scrappy font-bold-mix"
          style={{ 
            fontSize: '32px', 
            marginBottom: '14px',
            color: '#000',
            textAlign: 'center',
            lineHeight: '1.2'
          }}
        >
          TOKENOMICS
        </h2>
        
        <p 
          className="font-mono"
          style={{ 
            fontSize: '14px', 
            marginBottom: '36px',
            color: '#000',
            textAlign: 'center',
            lineHeight: '1.5'
          }}
        >
          Built for the community, by the community
        </p>

        {/* Simple grid - inconsistent spacing */}
        <div className="grid grid-cols-2 gap-4" style={{ marginBottom: '44px' }}>
          <div style={{ padding: '16px', background: '#fff', borderRadius: '8px', border: '2px solid #000' }}>
            <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '6px', color: '#000' }}>
              Total Supply
            </div>
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#2ee871', marginBottom: '4px' }}>
              1,000,000,000
            </div>
            <div style={{ fontSize: '12px', color: '#333' }}>BAMBI tokens</div>
          </div>

          <div style={{ padding: '16px', background: '#fff', borderRadius: '12px', border: '2px solid #000' }}>
            <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '6px', color: '#000' }}>
              Rescue Fund
            </div>
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#2ee871', marginBottom: '4px' }}>
              5%
            </div>
            <div style={{ fontSize: '12px', color: '#333' }}>Auto-donated</div>
          </div>

          <div style={{ padding: '16px', background: '#fff', borderRadius: '4px', border: '2px solid #000' }}>
            <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '6px', color: '#000' }}>
              Community
            </div>
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#2ee871', marginBottom: '4px' }}>
              90%
            </div>
            <div style={{ fontSize: '12px', color: '#333' }}>Fair launch</div>
          </div>

          <div style={{ padding: '16px', background: '#fff', borderRadius: '8px', border: '2px solid #000' }}>
            <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '6px', color: '#000' }}>
              Liquidity
            </div>
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#2ee871', marginBottom: '4px' }}>
              5%
            </div>
            <div style={{ fontSize: '12px', color: '#333' }}>Locked</div>
          </div>
        </div>

        {/* Donation counter - simple */}
        <div 
          style={{ 
            padding: '20px', 
            background: '#fff', 
            borderRadius: '8px', 
            border: '2px solid #000',
            marginBottom: '40px',
            textAlign: 'center'
          }}
        >
          <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px', color: '#000' }}>
            Rescue Shelter Donations
          </div>
          <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#ff6b9d', marginBottom: '6px' }}>
            ${donationAmount.toLocaleString()}
          </div>
          <div style={{ fontSize: '12px', color: '#333' }}>
            Raised for rescue organizations
          </div>
        </div>

        {/* Testimonials - simple list */}
        <div>
          <h3 
            className="font-scrappy font-bold-mix"
            style={{ 
              fontSize: '24px', 
              marginBottom: '20px',
              color: '#000',
              fontWeight: 700
            }}
          >
            Community Testimonials
          </h3>
          
          <div style={{ marginBottom: '20px' }}>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#000', marginBottom: '6px', fontStyle: 'italic' }}>
              "BAMBI is more than a memecoin - it's a movement that's actually making a difference!"
            </p>
            <div style={{ fontSize: '12px', color: '#333', fontWeight: 'bold' }}>Sarah M. - Rescue Volunteer</div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#000', marginBottom: '6px', fontStyle: 'italic' }}>
              "Best community I've ever been part of. The cause makes it even better!"
            </p>
            <div style={{ fontSize: '12px', color: '#333', fontWeight: 'bold' }}>Mike T. - Early Adopter</div>
          </div>

          <div>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#000', marginBottom: '6px', fontStyle: 'italic' }}>
              "Finally, a crypto project with heart. Bambi's story touched my soul!"
            </p>
            <div style={{ fontSize: '12px', color: '#333', fontWeight: 'bold' }}>Emma L. - Dog Lover</div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ marginTop: '36px', textAlign: 'center' }}>
          <a
            href="#"
            className="hover-lift"
            style={{
              display: 'inline-block',
              background: '#ff6b9d',
              color: '#fff',
              padding: '10px 22px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 'bold',
              height: '42px',
              lineHeight: '22px',
              border: '2px solid #000'
            }}
          >
            Join the Pack
          </a>
        </div>
      </div>
    </section>
  )
}

export default Tokenomics
