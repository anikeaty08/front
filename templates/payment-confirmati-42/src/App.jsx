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
      

<div className="absolute inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-neutral-900"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_rgba(40,40,40,1)_0%,_rgba(0,0,0,1)_80%)] opacity-80"></div>

</div>

<main className="relative z-10 w-full max-w-[370px] h-auto max-h-[90vh] glass-card rounded-[32px] flex flex-col overflow-hidden">

<div className="flex flex-col items-center pt-10 pb-6 w-full px-6 text-center border-b border-white/5">

<div className="w-20 h-20 mb-5 relative flex items-center justify-center checkmark-container rounded-full bg-neutral-800/50">
<svg className="w-12 h-12" viewbox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
<circle className="checkmark-circle" cx="26" cy="26" r="25"></circle>
<path className="checkmark-check" d="M14.1 27.2l7.1 7.2 16.7-16.8" fill="none"></path>
</svg>
</div>
<h1 className="text-xl font-medium tracking-tight text-white fade-in-up delay-100">Sent</h1>
<p className="text-sm font-light text-neutral-400 mt-1 fade-in-up delay-200">Payment Completed</p>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar w-full px-6 py-2 fade-in-up delay-300">
<div className="space-y-4 py-4">

<div className="flex flex-col items-center justify-center mb-6">
<span className="text-4xl font-medium tracking-tight text-white">$1,000.00</span>
</div>

<div className="space-y-4 text-[13px] leading-relaxed">
<div className="flex justify-between items-start border-b border-white/5 pb-3">
<span className="text-neutral-500 font-light">Recipient</span>
<span className="text-neutral-200 font-normal text-right max-w-[60%]">Nmex Authorization Portal</span>
</div>
<div className="flex justify-between items-start border-b border-white/5 pb-3">
<span className="text-neutral-500 font-light">From</span>
<span className="text-neutral-200 font-normal text-right">Marcus Reynolds</span>
</div>
<div className="flex justify-between items-start border-b border-white/5 pb-3">
<span className="text-neutral-500 font-light">Payment Method</span>
<div className="flex items-center gap-1.5 text-neutral-200 font-normal text-right">
<iconify-icon className="text-neutral-400" icon="solar:card-linear"></iconify-icon>
                            Apple Pay Balance
                        </div>
</div>
<div className="flex justify-between items-start border-b border-white/5 pb-3">
<span className="text-neutral-500 font-light">Reference ID</span>
<span className="text-neutral-400 font-light text-right tracking-wide font-mono text-[11px] pt-0.5">APY9X72QK4M8L3C1</span>
</div>
<div className="flex justify-between items-start border-b border-white/5 pb-3">
<span className="text-neutral-500 font-light">Transaction ID</span>
<span className="text-neutral-400 font-light text-right tracking-wide font-mono text-[11px] pt-0.5">TXN7F92KQ8L4MZ31</span>
</div>
<div className="flex justify-between items-start border-b border-white/5 pb-3">
<span className="text-neutral-500 font-light">Date</span>
<span className="text-neutral-200 font-normal text-right">Feb 9, 2026</span>
</div>
<div className="flex justify-between items-start border-b border-white/5 pb-3">
<span className="text-neutral-500 font-light">Time</span>
<span className="text-neutral-200 font-normal text-right">6:57 PM</span>
</div>
<div className="flex justify-between items-start border-b border-white/5 pb-3">
<span className="text-neutral-500 font-light">Status</span>
<span className="text-emerald-400 font-normal text-right">Completed</span>
</div>
<div className="flex justify-between items-start pb-2">
<span className="text-neutral-500 font-light">Authorization Code</span>
<span className="text-neutral-200 font-normal text-right tracking-wide">A9X7KQ31MZ82</span>
</div>
</div>
</div>
</div>

<div className="p-6 pt-2 w-full bg-gradient-to-t from-[#1c1c1e] to-transparent">
<div className="flex flex-col gap-3">
<button className="w-full bg-white text-black font-medium py-3.5 rounded-full text-[15px] hover:bg-neutral-100 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-white/5 tracking-tight">
                    Done
                </button>
<button className="w-full bg-neutral-800/50 text-white font-normal py-3.5 rounded-full text-[15px] hover:bg-neutral-800 active:scale-[0.98] transition-all duration-200 tracking-tight">
                    View Details
                </button>
</div>
</div>
</main>

    </>
  );
}
