import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-green-900/20 rounded-full blur-[120px] pointer-events-none opacity-40"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none opacity-30"></div>

<main className="w-full max-w-[360px] glass-panel rounded-[2.5rem] p-8 text-center animate-card-entry relative overflow-hidden flex flex-col items-center">

<div className="relative mb-6 mt-2 flex justify-center items-center">

<div className="glow-ring-flash w-16 h-16 rounded-full flex items-center justify-center bg-green-500/10 border border-green-500/20 animate-success-pop origin-center">

<div className="absolute inset-0 bg-green-400/5 rounded-full blur-sm"></div>

<svg className="relative z-10 overflow-visible" fill="none" height="28" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">

<path className="text-green-500/20" d="M5 12L10 17L19 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>

<path className="text-green-400 check-path fill-transparent" d="M5 12L10 17L19 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
</svg>
</div>
</div>

<div className="space-y-1 mb-8">
<h1 className="text-white text-lg font-medium tracking-tight">Sent</h1>
<p className="text-zinc-500 text-xs tracking-wide uppercase font-medium">Payment Completed</p>
</div>

<div className="mb-10 relative">
<span className="text-[2.5rem] leading-none font-medium tracking-tight animate-shimmer text-white">
                $685.00
            </span>
</div>

<div className="w-full space-y-4 text-left mb-10">

<div className="flex justify-between items-center pb-3 border-b border-white/5">
<span className="text-zinc-500 text-xs font-medium">To</span>
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 flex items-center justify-center text-[8px] text-white font-bold">N</div>
<span className="text-zinc-200 text-sm tracking-tight">Nmex Clearance Unit</span>
</div>
</div>

<div className="flex justify-between items-center pb-3 border-b border-white/5">
<span className="text-zinc-500 text-xs font-medium">From</span>
<span className="text-zinc-200 text-sm tracking-tight">Marcus</span>
</div>

<div className="flex justify-between items-center pb-3 border-b border-white/5">
<span className="text-zinc-500 text-xs font-medium">Method</span>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-zinc-400 text-sm" icon="solar:card-transfer-linear"></iconify-icon>
<span className="text-zinc-200 text-sm tracking-tight">Apple Transfer</span>
</div>
</div>

<div className="flex justify-between items-center pb-3 border-b border-white/5">
<span className="text-zinc-500 text-xs font-medium">Date</span>
<span className="text-zinc-200 text-sm tracking-tight">Feb 19, 2026</span>
</div>

<div className="pt-1 flex flex-col gap-1.5">
<div className="flex justify-between items-center">
<span className="text-zinc-600 text-[10px] font-medium tracking-wide">REF ID</span>
<span className="text-zinc-500 text-[10px] font-mono tracking-wide">APY8X3K9L2M7QC</span>
</div>
<div className="flex justify-between items-center">
<span className="text-zinc-600 text-[10px] font-medium tracking-wide">TXN ID</span>
<span className="text-zinc-500 text-[10px] font-mono tracking-wide">TXN5F92K8L1ZQ4</span>
</div>
</div>
</div>

<div className="w-full flex flex-col gap-3">
<button className="w-full bg-white hover:bg-zinc-100 text-black font-medium py-3.5 rounded-full text-sm transition-colors duration-200 shadow-lg shadow-white/5 active:scale-[0.98] transform transition-transform">
                Done
            </button>
<button className="w-full text-zinc-400 hover:text-white text-sm font-medium py-2 transition-colors duration-200 flex items-center justify-center gap-1.5">
                View Details
                <iconify-icon className="text-base" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</main>

    </>
  );
}
