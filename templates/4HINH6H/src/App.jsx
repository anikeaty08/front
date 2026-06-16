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
      
<div id="loadingWave">
<div className="shape square"></div>
<div className="shape triangle"></div>
<div className="shape diamond"></div>
<div className="shape circle"></div>
<div className="shape square"></div>
<div className="shape triangle"></div>
<div className="shape diamond"></div>
<div className="shape circle"></div>
</div>

    </>
  );
}
