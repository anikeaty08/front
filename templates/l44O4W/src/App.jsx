import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="pricing-plan pricing-comparison-item">
<div className="plan-header">
<h3 className="plan-name">Freelancer Plan</h3>
</div>
<div className="plan-price">$12<span className="price-period">/mo</span></div>
<p className="plan-description">Just the essentials for solo work.</p>
<ul className="plan-features">
<li className="feature-included">
<svg fill="currentColor" viewbox="0 0 24 24">
<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
</svg>1 Active Project
      </li>
<li className="feature-included">
<svg fill="currentColor" viewbox="0 0 24 24">
<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
</svg>5GB Cloud Storage
      </li>
<li className="feature-excluded">
<svg fill="currentColor" viewbox="0 0 24 24">
<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
</svg>No Team Sharing
      </li>
</ul>
<button className="plan-cta-button">Get Freelancer</button>
</div>

    </>
  );
}
