import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="w-full max-w-[420px] bg-white h-[850px] max-h-screen rounded-[2.5rem] shadow-2xl relative flex flex-col overflow-hidden border-[6px] border-white ring-1 ring-gray-200">
<div className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] shrink-0 flex flex-col w-full">
<div className="h-12 w-full flex items-center justify-between px-6 pt-2">
<span className="text-sm font-medium text-gray-900">9:41</span>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-gray-900" data-lucide="signal" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-gray-900" data-lucide="wifi" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-gray-900" data-lucide="battery-full" strokeWidth="1.5"></i>
</div>
</div>
<header className="px-4 pb-3.5 pt-1 flex items-center justify-between transition-all">
<button className="flex items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors w-16">
<i className="w-5 h-5" data-lucide="arrow-left" strokeWidth="1.5"></i>
<span className="text-base font-normal">Back</span>
</button>
<h1 className="text-base font-medium text-gray-900">Budget Estimator</h1>
<button className="text-blue-600 text-base font-normal hover:text-blue-700 transition-colors w-16 text-right">Save</button>
</header>
</div>
<main className="flex-1 overflow-y-auto no-scrollbar pb-10 bg-white">
<div className="p-6">
<div className="mb-6 mt-1">
<span className="text-xs font-medium tracking-widest text-gray-400 uppercase block mb-3">Step 1 of 2</span>
<h2 className="text-2xl font-medium tracking-tight text-gray-900 mb-3">Estimate Your Season Budget</h2>
<p className="text-base text-gray-500 leading-relaxed">Tell us about your season and Willow AI will put together a cost range tailored to you.</p>
</div>
<div className="inline-flex items-center bg-gray-50 p-1 rounded-xl mb-8">
<button className="flex items-center gap-1.5 px-4 py-2 rounded-lg transition-colors hover:bg-gray-100">
<i className="w-3.5 h-3.5 text-gray-400" data-lucide="sparkles" strokeWidth="2"></i>
<span className="text-sm font-medium text-gray-400">Willow AI</span>
</button>
<button className="px-5 py-2 bg-white rounded-lg shadow-sm border border-gray-200 transition-all">
<span className="text-sm font-medium text-gray-900">Quick Form</span>
</button>
</div>
<div className="mb-8">
<label className="text-xs font-medium tracking-wider text-gray-500 uppercase block mb-1">What's your main goal this season?</label>
<p className="text-sm text-gray-400 mb-4">Be honest — this shapes everything from tire budgets to coaching.</p>
<div className="space-y-3">
<div className="w-full bg-white border border-gray-200 rounded-xl p-4 flex items-start gap-4 cursor-pointer hover:border-gray-300 transition-colors">
<div className="w-6 h-6 mt-0.5 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-sm shrink-0 border border-black/5"></div>
<div>
<h3 className="text-base font-medium text-gray-900 mb-0.5">Just drive</h3>
<p className="text-sm text-gray-500 leading-snug">I want seat time and to enjoy the experience.</p>
</div>
</div>
<div className="w-full bg-white border border-gray-200 rounded-xl p-4 flex items-start gap-4 cursor-pointer hover:border-gray-300 transition-colors">
<div className="w-6 h-6 mt-0.5 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 shadow-sm shrink-0 border border-black/5"></div>
<div>
<h3 className="text-base font-medium text-gray-900 mb-0.5">Race for position</h3>
<p className="text-sm text-gray-500 leading-snug">I want to compete and finish well in my class.</p>
</div>
</div>
<div className="w-full bg-white border border-gray-200 rounded-xl p-4 flex items-start gap-4 cursor-pointer hover:border-gray-300 transition-colors">
<div className="text-xl leading-none shrink-0 mt-0.5 flex items-center justify-center w-6 h-6">🏆</div>
<div>
<h3 className="text-base font-medium text-gray-900 mb-0.5">Fight for wins</h3>
<p className="text-sm text-gray-500 leading-snug">I'm targeting podiums and I'm willing to invest for it.</p>
</div>
</div>
</div>
</div>

<div className="mb-10 relative">
<label className="text-xs font-medium tracking-wider text-gray-500 uppercase block mb-3">Season Objective</label>
<div className="w-full bg-white border border-gray-100/80 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-1.5 relative z-20 overflow-hidden">

<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-tr from-blue-50/60 via-transparent to-transparent -z-10 pointer-events-none"></div>

<div className="bg-blue-500 rounded-xl px-3.5 py-3 flex items-center gap-2.5 mb-1 shadow-sm">
<i className="w-4 h-4 text-white" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-base text-white font-medium">Select an objective...</span>
</div>

<div className="px-3.5 py-3 flex items-center pl-10 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors">
<span className="text-base text-gray-800 font-normal">Complete regional license races</span>
</div>
<div className="px-3.5 py-3 flex items-center pl-10 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors">
<span className="text-base text-gray-800 font-normal">Full Radical Cup season</span>
</div>
<div className="px-3.5 py-3 flex items-center pl-10 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors">
<span className="text-base text-gray-800 font-normal">Qualify for national series</span>
</div>
<div className="px-3.5 py-3 flex items-center pl-10 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors mb-1">
<span className="text-base text-gray-800 font-normal">Development / testing season</span>
</div>
</div>
</div>
<button className="w-full bg-[#0F172A] hover:bg-black text-white rounded-[14px] py-4 flex items-center justify-center gap-2 transition-colors shadow-sm mb-6">
<span className="text-base font-medium">Generate Estimate</span>
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<p className="text-xs text-gray-400 text-center">
                    Estimates use TWOth benchmark data. For planning only.
                </p>
</div>
</main>
<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-900 rounded-full z-50 pointer-events-none"></div>
</div>


    </>
  );
}
