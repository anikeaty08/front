import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



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
      

<h1 className="text-2xl font-medium tracking-tight text-slate-700 mb-8 text-center">
        Cron Generator Implemented by Vue.js and Element-ui
    </h1>

<div className="flex justify-center mb-6 relative z-10 w-full max-w-xl">
<div className="flex rounded-md shadow-sm w-full relative">
<input className="flex-1 px-4 py-2 text-base border border-slate-300 rounded-l-md text-slate-600 outline-none focus:border-blue-400 bg-white min-w-0" readonly="" type="text" value="0 0 12 * * ?"/>
<button className="px-4 py-2 border border-l-0 border-slate-300 rounded-r-md bg-slate-50 hover:bg-slate-100 text-slate-400 transition-colors flex items-center justify-center">
<i className="w-4 h-4" data-lucide="refresh-cw" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="w-full max-w-3xl relative mt-2">

<div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-white border-l border-t border-slate-100 shadow-[-2px_-2px_2px_rgba(0,0,0,0.02)] z-10 rounded-sm"></div>

<div className="bg-white border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.06)] rounded-md p-5 pt-6 relative overflow-hidden">

<div className="flex gap-2 mb-4">
<div className="flex-1 py-1.5 border border-blue-400 rounded text-center text-blue-500 text-base bg-white">0</div>
<div className="flex-1 py-1.5 border border-slate-200 rounded text-center text-slate-700 text-base bg-white">0</div>
<div className="flex-1 py-1.5 border border-slate-200 rounded text-center text-slate-700 text-base bg-white">12</div>
<div className="flex-1 py-1.5 border border-slate-200 rounded text-center text-slate-700 text-base bg-white">*</div>
<div className="flex-1 py-1.5 border border-slate-200 rounded text-center text-slate-700 text-base bg-white">*</div>
<div className="flex-1 py-1.5 border border-slate-200 rounded text-center text-slate-700 text-base bg-white">?</div>
<div className="flex-1 py-1.5 border border-slate-200 rounded text-center text-slate-700 text-base bg-white"></div>
</div>

<div className="border border-slate-200 rounded-sm flex flex-col bg-slate-50/50">

<div className="flex border-b border-slate-200 bg-slate-50/80 items-stretch">

<button className="px-3 py-2 border-r border-slate-200 text-slate-300 flex items-center justify-center bg-slate-50/50 cursor-not-allowed">
<i className="w-4 h-4" data-lucide="chevron-left" strokeWidth="1.5"></i>
</button>

<div className="flex-1 flex text-center overflow-x-auto">
<div className="flex-1 py-2.5 px-4 bg-white text-blue-500 border-r border-slate-200 relative -mb-[1px] border-b border-b-white text-base font-normal whitespace-nowrap">Second</div>
<div className="flex-1 py-2.5 px-4 text-slate-500 border-r border-slate-200 hover:bg-slate-100 cursor-pointer text-base font-normal whitespace-nowrap transition-colors">Minute</div>
<div className="flex-1 py-2.5 px-4 text-slate-500 border-r border-slate-200 hover:bg-slate-100 cursor-pointer text-base font-normal whitespace-nowrap transition-colors">Hour</div>
<div className="flex-1 py-2.5 px-4 text-slate-500 border-r border-slate-200 hover:bg-slate-100 cursor-pointer text-base font-normal whitespace-nowrap transition-colors">Day</div>
<div className="flex-1 py-2.5 px-4 text-slate-500 border-r border-slate-200 hover:bg-slate-100 cursor-pointer text-base font-normal whitespace-nowrap transition-colors">Month</div>
<div className="flex-1 py-2.5 px-4 text-slate-500 hover:bg-slate-100 cursor-pointer text-base font-normal whitespace-nowrap transition-colors">Week</div>
</div>

<button className="px-3 py-2 border-l border-slate-200 text-slate-400 flex items-center justify-center bg-slate-50 hover:bg-slate-100 cursor-pointer transition-colors">
<i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
</div>

<div className="p-6 flex flex-col gap-5 bg-white">

<div className="flex items-center gap-3">
<label className="flex items-center gap-2 cursor-pointer group">
<div className="w-4 h-4 rounded-full border border-slate-300 group-hover:border-blue-400 bg-white flex-shrink-0 transition-colors"></div>
<span className="text-green-500 text-base font-medium">*</span>
<span className="text-slate-600 text-base">Per Second</span>
</label>
</div>

<div className="flex items-center gap-3 flex-wrap">
<label className="flex items-center gap-2 cursor-pointer group">
<div className="w-4 h-4 rounded-full border border-slate-300 group-hover:border-blue-400 bg-white flex-shrink-0 transition-colors"></div>
<span className="text-green-500 text-base font-medium">0/1</span>
<span className="text-slate-600 text-base">From</span>
</label>

<div className="flex items-center border border-slate-200 rounded-sm h-8 overflow-hidden bg-white shadow-sm">
<button className="w-8 h-full bg-slate-50 text-slate-400 border-r border-slate-200 hover:bg-slate-100 flex items-center justify-center transition-colors"><i className="w-3 h-3" data-lucide="minus" strokeWidth="1.5"></i></button>
<div className="w-12 h-full flex items-center justify-center text-slate-700 text-base">0</div>
<button className="w-8 h-full bg-slate-50 text-slate-400 border-l border-slate-200 hover:bg-slate-100 flex items-center justify-center transition-colors"><i className="w-3 h-3" data-lucide="plus" strokeWidth="1.5"></i></button>
</div>
<span className="text-slate-600 text-base">Second Start Per</span>

<div className="flex items-center border border-slate-200 rounded-sm h-8 overflow-hidden bg-white shadow-sm">
<button className="w-8 h-full bg-slate-50 text-slate-400 border-r border-slate-200 hover:bg-slate-100 flex items-center justify-center transition-colors"><i className="w-3 h-3" data-lucide="minus" strokeWidth="1.5"></i></button>
<div className="w-12 h-full flex items-center justify-center text-slate-700 text-base">1</div>
<button className="w-8 h-full bg-slate-50 text-slate-400 border-l border-slate-200 hover:bg-slate-100 flex items-center justify-center transition-colors"><i className="w-3 h-3" data-lucide="plus" strokeWidth="1.5"></i></button>
</div>
<span className="text-slate-600 text-base">Second</span>
</div>

<div className="flex items-center gap-3 flex-wrap">
<label className="flex items-center gap-2 cursor-pointer group">
<div className="w-4 h-4 rounded-full border border-slate-300 group-hover:border-blue-400 bg-white flex-shrink-0 transition-colors"></div>
<span className="text-green-500 text-base font-medium">0-1</span>
</label>

<div className="flex items-center border border-slate-200 rounded-sm h-8 overflow-hidden bg-white shadow-sm ml-1">
<button className="w-8 h-full bg-slate-50 text-slate-400 border-r border-slate-200 hover:bg-slate-100 flex items-center justify-center transition-colors"><i className="w-3 h-3" data-lucide="minus" strokeWidth="1.5"></i></button>
<div className="w-12 h-full flex items-center justify-center text-slate-700 text-base">0</div>
<button className="w-8 h-full bg-slate-50 text-slate-400 border-l border-slate-200 hover:bg-slate-100 flex items-center justify-center transition-colors"><i className="w-3 h-3" data-lucide="plus" strokeWidth="1.5"></i></button>
</div>
<span className="text-slate-600 text-base">Second To</span>

<div className="flex items-center border border-slate-200 rounded-sm h-8 overflow-hidden bg-white shadow-sm">
<button className="w-8 h-full bg-slate-50 text-slate-400 border-r border-slate-200 hover:bg-slate-100 flex items-center justify-center transition-colors"><i className="w-3 h-3" data-lucide="minus" strokeWidth="1.5"></i></button>
<div className="w-12 h-full flex items-center justify-center text-slate-700 text-base">1</div>
<button className="w-8 h-full bg-slate-50 text-slate-400 border-l border-slate-200 hover:bg-slate-100 flex items-center justify-center transition-colors"><i className="w-3 h-3" data-lucide="plus" strokeWidth="1.5"></i></button>
</div>
<span className="text-slate-600 text-base">Per Second</span>
</div>

<div className="flex items-center gap-3 flex-wrap">
<label className="flex items-center gap-2 cursor-pointer">

<div className="w-4 h-4 rounded-full border border-blue-500 bg-white flex items-center justify-center flex-shrink-0">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
</div>
<span className="text-blue-500 text-base font-medium">,</span>
<span className="text-blue-500 text-base">Specified</span>
</label>

<div className="flex items-center justify-between border border-slate-200 rounded-sm w-[360px] max-w-full h-9 px-2 bg-white shadow-sm cursor-text hover:border-slate-300 transition-colors ml-1">
<div className="flex items-center">

<div className="flex items-center gap-1.5 bg-slate-100 border border-slate-200 rounded-sm pl-2 pr-1 py-0.5 mt-[1px]">
<span className="text-slate-500 text-sm leading-none">0</span>
<div className="w-3 h-3 bg-slate-300 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-slate-400 transition-colors">
<i className="w-2 h-2" data-lucide="x" strokeWidth="2"></i>
</div>
</div>
</div>
<i className="w-4 h-4 text-slate-300" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<span className="text-blue-500 text-base">Second</span>
</div>
</div>
</div>
</div>
</div>




    </>
  );
}
