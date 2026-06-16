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
      
<div className="pricing-table">
<div className="pricing-plan">
<h4 className="name">Starter</h4>
<div className="price">$29<span>/mo</span></div>
<ul className="features">
<li>10 Projects</li>
<li>Basic Analytics</li>
<li>Email Support</li>
</ul>
<button className="secondary-cta cta-btn">Choose Plan</button>
</div>
<div className="pricing-plan popular">
<h4 className="name">Pro</h4>
<div className="price">$59<span>/mo</span></div>
<ul className="features">
<li>Unlimited Projects</li>
<li>Advanced Analytics</li>
<li>Priority Support</li>
</ul>
<button className="primary-cta cta-btn">Choose Plan</button>
</div>
<div className="pricing-plan">
<h4 className="name">Enterprise</h4>
<div className="price">$99<span>/mo</span></div>
<ul className="features">
<li>All Pro Features</li>
<li>Dedicated Manager</li>
<li>24/7 Phone Support</li>
</ul>
<button className="secondary-cta cta-btn">Choose Plan</button>
</div>
</div>

    </>
  );
}
