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
      
<div className="pricing-tiered-container">
<div className="pricing-plan pricing-tiered-card">
<div className="plan-header">
<h3 className="plan-name">Basic</h3>
</div>
<div className="plan-price">$15<span className="price-period">/user/mo</span></div>
<p className="plan-description">Core tools for individuals to get started quickly and efficiently.</p>
<ul className="plan-features">
<li>Core Feature Set</li>
<li>Community Support</li>
<li>5 Projects</li>
</ul>
<button className="plan-cta-button secondary">Select Basic</button>
</div>
<div className="pricing-plan pricing-tiered-card popular">
<div className="popular-badge">POPULAR</div>
<div className="plan-header">
<h3 className="plan-name">Team</h3>
</div>
<div className="plan-price">$35<span className="price-period">/user/mo</span></div>
<p className="plan-description">Collaboration tools and more power for growing teams.</p>
<ul className="plan-features">
<li>All Basic Features</li>
<li>Team Collaboration</li>
<li>Priority Email Support</li>
<li>25 Projects</li>
</ul>
<button className="plan-cta-button">Select Team</button>
</div>
<div className="pricing-plan pricing-tiered-card">
<div className="plan-header">
<h3 className="plan-name">Business</h3>
</div>
<div className="plan-price">$60<span className="price-period">/user/mo</span></div>
<p className="plan-description">Advanced features, security, and support for large businesses.</p>
<ul className="plan-features">
<li>All Team Features</li>
<li>Advanced Security &amp; SSO</li>
<li>Phone Support</li>
<li>Unlimited Projects</li>
</ul>
<button className="plan-cta-button secondary">Select Business</button>
</div>
</div>

    </>
  );
}
