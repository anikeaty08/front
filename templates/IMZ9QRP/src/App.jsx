import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('click', function(e) {
            if (e.target.matches('.checkout-form .step')) {
                const form = e.target.closest('.checkout-form');
                if (form) {
                    form.querySelector('.step.active')?.classList.remove('active');
                    e.target.classList.add('active');
                }
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="component-container checkout-form">
<div className="stepper">
<div className="step active">
<div className="step-number">1</div>
                Shipping
            </div>
<div className="step">
<div className="step-number">2</div>
                Payment
            </div>
<div className="step">
<div className="step-number">3</div>
                Review
            </div>
</div>
<div className="form-area">
<div className="form-section">
<h4>Shipping Address</h4>
<input className="form-input" placeholder="Email Address" type="email"/>
<input className="form-input" placeholder="Full Name" style={{marginTop: '1rem'}} type="text"/>
</div>
<div className="form-section">
<h4>Payment Details</h4>
<input className="form-input" placeholder="Card Number" type="text"/>
<div className="input-group" style={{marginTop: '1rem'}}>
<input className="form-input" placeholder="MM / YY" type="text"/>
<input className="form-input" placeholder="CVC" type="text"/>
</div>
</div>
</div>
<div className="order-summary">
<h4>Summary</h4>
<div className="summary-item">
<p>Subtotal</p>
<p>$189.99</p>
</div>
<div className="summary-item">
<p>Shipping</p>
<p>$5.00</p>
</div>
<div className="summary-item summary-total">
<p>Total</p>
<p>$194.99</p>
</div>
<button className="submit-btn" style={{marginTop: '1.5rem'}}>Place Order</button>
</div>
</div>


    </>
  );
}
