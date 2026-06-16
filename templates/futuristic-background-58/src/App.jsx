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
      

<div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
</div>

<div className="fixed top-[-10%] left-[-10%] w-[800px] h-[800px] bg-orange-600/15 rounded-full blur-[120px] pointer-events-none mix-blend-screen z-0 animate-pulse" style={{animationDuration: '4s'}}></div>

<div className="fixed top-[30%] right-[-10%] w-[600px] h-[800px] bg-[#F05523]/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen z-0"></div>

<div className="fixed bottom-[-10%] left-[10%] w-[500px] h-[500px] bg-orange-900/20 rounded-full blur-[90px] pointer-events-none mix-blend-screen z-0"></div>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]/90 pointer-events-none z-0"></div>

    </>
  );
}
