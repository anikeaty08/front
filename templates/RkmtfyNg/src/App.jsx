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
      
<div className="max-w-sm w-full mx-auto p-5">
<div className="relative rounded-3xl bg-white/70 backdrop-blur-lg shadow-2xl border border-white/30 overflow-hidden">

<div className="px-7 pt-7 flex items-center">
<div className="w-11 h-11 rounded-xl bg-indigo-100 flex items-center justify-center mr-4">

<svg className="w-7 h-7 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<rect height="6" rx="1" width="4" x="2" y="9"></rect>
<rect height="6" rx="1" width="4" x="18" y="9"></rect>
<rect height="2" rx="1" width="10" x="7" y="11"></rect>
<rect height="4" rx="1" width="2" x="5" y="10"></rect>
<rect height="4" rx="1" width="2" x="17" y="10"></rect>
</svg>
</div>
<div>
<div className="font-semibold text-lg text-indigo-800">Your Name</div>
<div className="text-xs text-indigo-400">Last synced 5 min ago</div>
</div>
</div>

<div className="px-7 pt-7 pb-4 flex flex-col items-center">
<div className="flex items-end gap-2">
<span className="text-5xl font-extrabold text-indigo-800">8,245</span>
<span className="text-base mb-1 font-semibold text-indigo-400">steps</span>
</div>
<span className="mt-2 font-medium text-xs uppercase tracking-wide text-indigo-500">Keep Moving!</span>
</div>

<div className="mx-8 mb-8 bg-white/40 rounded-2xl flex justify-between text-center py-3 px-2">
<div className="flex-1">
<div className="text-xl font-bold text-indigo-800">620</div>
<div className="text-xs text-indigo-400 font-semibold">kcal</div>
<div className="text-xs text-gray-400 mt-0.5">Calories</div>
</div>
<div className="border-l border-indigo-100 mx-2"></div>
<div className="flex-1">
<div className="text-xl font-bold text-indigo-800">6.2</div>
<div className="text-xs text-indigo-400 font-semibold">mi</div>
<div className="text-xs text-gray-400 mt-0.5">Distance</div>
</div>
<div className="border-l border-indigo-100 mx-2"></div>
<div className="flex-1">
<div className="text-xl font-bold text-indigo-800">52</div>
<div className="text-xs text-indigo-400 font-semibold">min</div>
<div className="text-xs text-gray-400 mt-0.5">Active</div>
</div>
</div>
</div>
</div>

    </>
  );
}
