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
      
<a className="cta-btn rounded-full px-10 py-4 text-lg sm:text-xl font-bold tracking-tight text-white shadow-lg focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2" href="#">
    Get started <span className="cta-arrow">➔</span>
</a>

    </>
  );
}
