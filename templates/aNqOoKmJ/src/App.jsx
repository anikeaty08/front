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
      
<div className="flex flex-col items-center justify-center space-y-8">
<div className="relative">
<div className="funky-blob w-72 h-72 md:w-96 md:h-96"></div>
<div className="absolute inset-0 flex items-center justify-center">
<h1 className="text-white text-2xl md:text-4xl font-black tracking-wide drop-shadow-lg wavy select-none">
<span>F</span><span>u</span><span>n</span><span>k</span><span>y</span>
<span> </span>
<span>B</span><span>l</span><span>o</span><span>b</span>
</h1>
</div>
</div>
<p className="text-fuchsia-200 text-xl font-mono font-semibold animate-pulse">Groove with the blob ✨</p>
</div>

    </>
  );
}
