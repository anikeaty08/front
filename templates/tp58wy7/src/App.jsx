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
      
<div className="linear-card">
<h2>You're Invited!</h2>
<p>
      Discover seamless project management with Linear.<br/>
      Clean. Fast. Delightful.<br/>
      Join our exclusive launch event and experience productivity reimagined.
    </p>
<a className="card-btn" href="#">Learn More</a>
</div>

    </>
  );
}
