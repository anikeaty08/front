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
      
<div className="scene w-64 h-64 relative">
<div className="cube">
<div className="cube-face front bg-blue-500">Front</div>
<div className="cube-face back bg-red-500">Back</div>
<div className="cube-face right bg-green-500">Right</div>
<div className="cube-face left bg-yellow-500">Left</div>
<div className="cube-face top bg-purple-500">Top</div>
<div className="cube-face bottom bg-pink-500">Bottom</div>
</div>
</div>

    </>
  );
}
