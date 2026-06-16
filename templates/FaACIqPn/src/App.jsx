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
      
<div className="max-w-sm w-full bg-[#151728]/90 rounded-2xl shadow-lg border border-[#24274a] p-8 flex flex-col gap-8">

<h1 className="text-xl font-bold text-cyan-300 tracking-wide text-center">Daily Tasks</h1>

<div>
<div className="relative flex items-center mb-3">
<div className="flex-1 h-1 bg-[#273047] rounded"></div>
<div className="absolute flex justify-between w-full px-0.5">
<span className="h-4 w-4 bg-cyan-300 rounded-full shadow-[0_0_8px_1px_#22d3ee]"></span>
<span className="h-4 w-4 bg-cyan-300 rounded-full shadow-[0_0_8px_1px_#22d3ee]"></span>
<span className="h-4 w-4 bg-cyan-300 rounded-full shadow-[0_0_8px_1px_#22d3ee]"></span>
<span className="h-4 w-4 border-2 border-cyan-200 bg-[#151728] rounded-full"></span>
<span className="h-4 w-4 border border-[#2d354b] bg-[#192037] rounded-full"></span>
<span className="h-4 w-4 border border-[#2d354b] bg-[#192037] rounded-full"></span>
</div>
</div>
<div className="flex justify-between mt-2 text-xs text-cyan-100/50 font-light px-0.5">
<span>Wake</span>
<span>Move</span>
<span>Emails</span>
<span className="text-cyan-200 font-medium">Shop</span>
<span>Read</span>
<span>Call</span>
</div>
</div>

<div className="flex items-center gap-3">
<div className="h-9 w-9 flex items-center justify-center rounded-full bg-cyan-300/10 border border-cyan-300/30">
<svg className="w-5 h-5 text-cyan-200" fill="none" viewbox="0 0 24 24">
<path d="M9 12l2 2 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<span className="block text-sm text-cyan-200 font-semibold">3/6 done</span>
<span className="block text-xs mt-0.5 text-cyan-100/60">Next: Shop</span>
</div>
<div className="ml-auto text-xs text-cyan-100/30">Last: Emails</div>
</div>

<div className="flex items-center gap-3">
<div className="flex-1 h-1.5 rounded-lg bg-[#293047] overflow-hidden">
<div className="h-1.5 bg-cyan-300 rounded-lg transition-all" style={{width: '50%'}}></div>
</div>
<span className="text-cyan-200 text-xs font-mono">50%</span>
</div>

<button className="mt-2 w-full py-2 text-cyan-950 font-bold rounded-lg bg-cyan-300 hover:bg-cyan-200 transition-all shadow text-base tracking-wide">
      Continue
    </button>
</div>

    </>
  );
}
