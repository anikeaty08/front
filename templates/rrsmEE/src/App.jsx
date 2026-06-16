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
      
<div className="testimonial-card-grid">
<img alt="Author Avatar" className="testimonial-avatar" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=120&amp;q=80"/>
<div className="testimonial-author-info">
<p className="testimonial-author">Maria Garcia</p>
<span className="testimonial-author-title">Creative Director, Studio Bloom</span>
<div className="testimonial-rating">★★★★★</div>
</div>
<blockquote className="testimonial-quote">Fantastic product with an intuitive interface. It simplified complex tasks and looks beautiful too.</blockquote>
</div>

    </>
  );
}
