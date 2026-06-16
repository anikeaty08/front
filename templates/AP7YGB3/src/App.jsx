import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function bookConsultation() {
            alert('Redirecting to booking page...');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      


<div className="main-container">
<div className="service-card">

<header className="card-header">
<h2 className="service-title">Crypto Tax Advisory</h2>
<div className="price-container">
<span className="price-amount">125</span>
<span className="price-currency">€</span>
</div>
<p className="price-vat">net (plus 20% VAT)</p>
</header>

<p className="duration">
                30 min video or phone call
            </p>

<div className="sections-container">

<div>
<h3 className="section-title">What we do during the call</h3>
<p className="section-intro">Clarify any crypto tracking tool issues with you</p>
<p className="section-intro" style={{marginBottom: '16px'}}>This includes for example:</p>
<div className="feature-list">
<div className="feature-item">
<div className="check-icon">
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7"></path>
</svg>
</div>
<p className="feature-text">
                                Walk you through importing exchange and wallet data into CoinTracking, Blockpit, Koinly and other platforms
                            </p>
</div>
<div className="feature-item">
<div className="check-icon">
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7"></path>
</svg>
</div>
<p className="feature-text">
                                Check that balances agree with on chain records
                            </p>
</div>
<div className="feature-item">
<div className="check-icon">
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7"></path>
</svg>
</div>
<p className="feature-text">
                                Show how to tag airdrops, staking rewards, yield farming and lending events
                            </p>
</div>
<div className="feature-item">
<div className="check-icon">
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7"></path>
</svg>
</div>
<p className="feature-text">
                                Generate the reports required for an Austrian tax return
                            </p>
</div>
</div>
</div>

<div>
<h3 className="section-title">What we provide</h3>
<div className="highlight-box">
<p className="highlight-text">
                            Clear real time guidance with potential screen sharing
                        </p>
</div>
</div>

<div>
<div className="target-group">
<p className="target-text">
                            Ideal for: Users who need guidance using crypto tracking tools
                        </p>
</div>
</div>
</div>

<button className="cta-button-main" onclick="bookConsultation()">
                Book Consultation Now
            </button>

<p className="outcome">
<span className="outcome-highlight">Outcome:</span> Your questions have been answered and you know how to proceed
            </p>
</div>
</div>


    </>
  );
}
