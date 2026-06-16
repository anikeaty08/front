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
      
<div className="bg-white rounded-xl px-8 py-6 max-w-md w-full shadow-[rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px,_rgba(10,_37,_64,_0.35)_0px_-2px_6px_0px_inset] flex flex-col items-center">
<div className="mb-4">
<span className="text-blue-500 font-semibold text-sm uppercase tracking-wide">CSS Tip of the Day</span>
</div>
<h2 className="text-2xl font-bold text-gray-800 text-center mb-3">
      Use <span className="bg-blue-50 px-1 rounded text-blue-600 font-mono">:has()</span> for Parent Selectors
    </h2>
<p className="text-gray-600 text-center mb-5">
      The <span className="font-mono bg-gray-50 px-1 rounded">:has()</span> pseudo-class lets you style a parent based on its child elements, unlocking new layout possibilities without extra JavaScript!
    </p>
<div className="w-full bg-gray-50 rounded-lg p-4 font-mono text-sm text-gray-700">
<span className="text-gray-500">// Example:</span><br/>
<span className="text-blue-600">article:has(img)</span> {<br/>
        background-color: <span className="text-emerald-600">#f0fff4</span>;<br/>
      }
    </div>
</div>

    </>
  );
}
