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
      
<main className="w-full max-w-lg bg-neutral-900 border border-neutral-800 rounded-2xl shadow-lg overflow-hidden flex flex-col">

<section className="flex items-start gap-4 px-6 pt-7 pb-2">
<div className="flex items-center justify-center rounded-xl bg-neutral-800 w-12 h-12">
<svg fill="none" height="30" viewbox="0 0 36 36" width="30">
<circle cx="18" cy="18" fill="#27272A" r="16"></circle>
<rect fill="#D4D4D8" height="7" rx="2" width="12" x="12" y="13"></rect>
<path d="M14 19h8v2a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2z" fill="#a1a1aa"></path>
</svg>
</div>
<div>
<div className="font-bold text-lg text-neutral-100 leading-tight tracking-tight">Pro Course Bundle</div>
<div className="flex items-baseline gap-1 mt-0.5">
<div className="text-neutral-200 font-semibold text-base">$24</div>
<span className="text-neutral-400 text-sm">/month</span>
</div>
</div>
</section>

<section className="flex flex-col gap-2 px-6">
<div className="flex flex-row justify-between items-end mt-1 mb-1">
<div>
<div className="uppercase text-xs font-semibold text-neutral-500 tracking-wide mb-0.5">Next payment</div>
<div className="flex items-center gap-2 text-neutral-200 font-medium text-base">
<svg className="w-4 h-4 text-neutral-500" fill="none" viewbox="0 0 24 24">
<rect height="11" rx="2" stroke="currentColor" strokeWidth="1.5" width="16" x="4" y="7"></rect>
<path d="M4 11h16" stroke="currentColor" strokeWidth="1.5"></path>
</svg>
<span>May 12, 2024</span>
</div>
</div>
<button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-neutral-700 bg-neutral-800 text-neutral-300 text-xs font-medium hover:bg-neutral-700 transition">
          Change Plan
          <svg fill="none" height="12" viewbox="0 0 20 20" width="12">
<path d="M6 4l6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<div className="h-px w-full bg-neutral-800 my-3"></div>
<div className="uppercase text-xs font-semibold text-neutral-500 tracking-wide mb-1">Progress</div>
<div className="flex items-center gap-2">
<div className="relative w-full h-3 rounded-md overflow-hidden bg-neutral-800">
<div className="absolute h-full bg-gradient-to-r from-neutral-400 to-neutral-300 rounded-md" style={{width: '75%'}}></div>
</div>
<span className="text-neutral-300 font-semibold text-xs bg-neutral-800 px-2 py-0.5 rounded-md border border-neutral-700">75%</span>
</div>
<div className="text-neutral-400 text-xs mt-1 mb-3">Almost done with your course this month. Keep it up!</div>
</section>

<section className="flex flex-col px-6 pb-6 gap-2">
<button className="w-full py-2 bg-neutral-800 rounded-xl font-semibold text-neutral-100 text-base transition hover:bg-neutral-700 flex items-center justify-center gap-2 mt-1">
<svg className="w-4 h-4" fill="none" viewbox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
</svg>
        Cancel Enrollment
      </button>
<span className="text-neutral-500 text-xs text-center mt-1">You’ll retain access until May 12 even if you cancel now.</span>
</section>
</main>

    </>
  );
}
