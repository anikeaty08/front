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
      

<div className="w-full h-full sm:h-[844px] max-w-md bg-gray-50 relative flex flex-col shadow-2xl overflow-hidden sm:rounded-[2.5rem] sm:border border-gray-200">

<div className="w-full h-12 bg-gray-50 shrink-0"></div>

<header className="flex items-center justify-between px-6 pb-2 bg-gray-50 shrink-0 z-10">
<button className="w-10 h-10 -ml-2 rounded-full flex items-center justify-center hover:bg-gray-200/50 transition-colors text-gray-500 hover:text-gray-900">
<iconify-icon className="text-xl" icon="solar:alt-arrow-left-linear" strokeWidth="1.5"></iconify-icon>
</button>
<h1 className="text-sm font-medium text-gray-900 tracking-tight">Bill Summary</h1>
<div className="w-10"></div> 
</header>

<main className="flex-1 overflow-y-auto no-scrollbar px-6 pt-2 pb-40 flex flex-col gap-8">

<section className="flex flex-col items-center justify-center py-2 gap-1.5">
<span className="text-sm font-medium text-gray-500">Total Bill</span>
<span className="text-5xl font-semibold tracking-tight text-gray-900">$530</span>
</section>

<section>
<div className="bg-white rounded-2xl p-4 border border-gray-200/60 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)] flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 text-gray-900 flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col gap-0.5">
<p className="text-sm font-medium text-gray-900">Ahmed paid the bill.</p>
<p className="text-xs text-gray-500">Waiting for others to settle.</p>
</div>
</div>
</section>

<section className="flex flex-col gap-3">
<h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest pl-1">Settlements</h2>
<div className="bg-white rounded-3xl border border-gray-200/60 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col">

<div className="p-4 flex items-center justify-between border-b border-gray-100 last:border-0">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-medium tracking-tight border border-blue-100/50">AL</div>
<div className="flex items-center gap-1.5 text-sm">
<span className="font-medium text-gray-900">Ali</span>
<span className="text-gray-400">owes Ahmed</span>
</div>
</div>
<span className="text-sm font-medium text-gray-900">$200</span>
</div>

<div className="p-4 flex items-center justify-between border-b border-gray-100 last:border-0">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center text-xs font-medium tracking-tight border border-rose-100/50">SA</div>
<div className="flex items-center gap-1.5 text-sm">
<span className="font-medium text-gray-900">Sara</span>
<span className="text-gray-400">owes Ahmed</span>
</div>
</div>
<span className="text-sm font-medium text-gray-900">$180</span>
</div>
</div>
</section>

<section className="flex flex-col gap-3">
<h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest pl-1">Item Breakdown</h2>
<div className="flex flex-col gap-4">

<div className="bg-white rounded-3xl p-5 border border-gray-200/60 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]">
<div className="flex items-center gap-2.5 mb-5">
<div className="w-6 h-6 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-[10px] font-medium tracking-tight">AH</div>
<span className="text-sm font-medium text-gray-900">Ahmed</span>
</div>
<div className="flex flex-col gap-3">
<div className="flex justify-between items-center text-sm">
<span className="text-gray-500">Pizza</span>
<span className="text-gray-900 font-medium">$100</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-gray-500">Chicken</span>
<span className="text-gray-900 font-medium">$50</span>
</div>
<div className="flex justify-between items-center text-sm pt-4 border-t border-dashed border-gray-200 mt-1">
<span className="text-gray-500">Total</span>
<span className="text-gray-900 font-semibold">$150</span>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-5 border border-gray-200/60 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]">
<div className="flex items-center gap-2.5 mb-5">
<div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[10px] font-medium tracking-tight">AL</div>
<span className="text-sm font-medium text-gray-900">Ali</span>
</div>
<div className="flex flex-col gap-3">
<div className="flex justify-between items-center text-sm">
<span className="text-gray-500">Chicken</span>
<span className="text-gray-900 font-medium">$150</span>
</div>
<div className="flex justify-between items-center text-sm pt-4 border-t border-dashed border-gray-200 mt-1">
<span className="text-gray-500">Total</span>
<span className="text-gray-900 font-semibold">$150</span>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-5 border border-gray-200/60 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]">
<div className="flex items-center gap-2.5 mb-5">
<div className="w-6 h-6 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center text-[10px] font-medium tracking-tight">SA</div>
<span className="text-sm font-medium text-gray-900">Sara</span>
</div>
<div className="flex flex-col gap-3">
<div className="flex justify-between items-center text-sm">
<span className="text-gray-500">Kofta</span>
<span className="text-gray-900 font-medium">$180</span>
</div>
<div className="flex justify-between items-center text-sm pt-4 border-t border-dashed border-gray-200 mt-1">
<span className="text-gray-500">Total</span>
<span className="text-gray-900 font-semibold">$180</span>
</div>
</div>
</div>
</div>
</section>
</main>

<div className="absolute bottom-0 left-0 right-0 p-6 pt-12 bg-gradient-to-t from-gray-50 via-gray-50 to-transparent pointer-events-none flex flex-col justify-end z-20">
<button className="pointer-events-auto w-full bg-gray-900 text-white rounded-2xl py-4 px-4 flex items-center justify-center gap-2 hover:bg-gray-800 transition-all active:scale-[0.98] shadow-[0_8px_16px_-6px_rgba(0,0,0,0.2)]">
<span className="text-sm font-medium">Settle Payment</span>
<iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="h-4 sm:h-2 w-full shrink-0"></div> 
</div>
</div>

    </>
  );
}
