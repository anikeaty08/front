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
      
<div className="glow">
<div className="bg-black border border-white/10 rounded-xl p-5 w-80 shadow-lg">
<div className="flex items-center justify-between mb-4">
<span className="text-white text-sm font-light">Usage Counter</span>
<button className="text-gray-400 hover:text-white text-xs px-2 py-1 rounded border border-gray-700 hover:border-gray-500 transition">
                    Upgrade
                </button>
</div>
<div className="mb-2">
<div className="flex justify-between text-xs text-gray-400 mb-1">
<span>Current Project</span>
<span>32% used</span>
</div>
<div className="w-full bg-gray-800 rounded-full h-1.5">
<div className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full" style={{width: '32%'}}></div>
</div>
</div>
<div className="text-white text-xl font-light text-center mt-3">
                645,371 / 2,000,000
            </div>
<div className="mt-3 text-xs text-gray-400 text-center font-light">
                Resets in 17 days
            </div>
</div>
</div>

    </>
  );
}
