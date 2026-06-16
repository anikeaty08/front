import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-white rounded-2xl border border-slate-200 shadow-sm w-full max-w-6xl overflow-hidden flex flex-col">

<div className="p-6 md:px-10 md:pt-8 flex flex-col items-center text-center border-b border-slate-100 pb-6">
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Facility Comparison</h1>
<p className="text-sm text-slate-500 mt-2 flex items-center gap-2">
                5 Facilities <span className="w-1 h-1 rounded-full bg-slate-300"></span> Biomedical <span className="w-1 h-1 rounded-full bg-slate-300"></span> Apr 2025
            </p>

<div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 text-sm text-slate-600">
<div className="flex items-center gap-2"><span className="w-6 h-3 rounded-sm bg-blue-500"></span> PM %</div>
<div className="flex items-center gap-2"><span className="w-6 h-3 rounded-sm bg-purple-500"></span> MTTR %</div>
<div className="flex items-center gap-2"><span className="w-6 h-3 rounded-sm bg-orange-400 opacity-90"></span> CM Backlog</div>
<div className="flex items-center gap-2"><span className="w-6 h-3 rounded-sm bg-green-500"></span> Uptime %</div>
<div className="flex items-center gap-2"><span className="w-6 h-3 rounded-sm bg-teal-500"></span> SLA %</div>
<div className="flex items-center gap-2 ml-4"><span className="w-8 h-0.5 bg-slate-800 flex items-center justify-center"><span className="w-2 h-2 rounded-full bg-slate-800"></span></span> Score /10</div>
</div>
</div>

<div className="p-6 md:px-10 md:py-10">

<div className="relative w-full h-[400px] pl-10 pr-10">

<div className="absolute inset-0 left-10 right-10 flex flex-col justify-between pointer-events-none z-0">

<div className="relative w-full border-b border-slate-100 h-0">
<span className="absolute -top-3 -left-10 text-xs text-slate-400">100</span>
<span className="absolute -top-3 -right-10 text-xs text-slate-400">10</span>
</div>

<div className="relative w-full border-b border-slate-100 border-dashed h-0 mt-[80px]">
<span className="absolute -top-3 -left-10 text-xs text-slate-400">80</span>
<span className="absolute -top-3 -right-10 text-xs text-slate-400">8</span>
</div>

<div className="relative w-full border-b border-slate-100 border-dashed h-0 mt-[80px]">
<span className="absolute -top-3 -left-10 text-xs text-slate-400">60</span>
<span className="absolute -top-3 -right-10 text-xs text-slate-400">6</span>
</div>

<div className="relative w-full border-b border-slate-100 border-dashed h-0 mt-[80px]">
<span className="absolute -top-3 -left-10 text-xs text-slate-400">40</span>
<span className="absolute -top-3 -right-10 text-xs text-slate-400">4</span>
</div>

<div className="relative w-full border-b border-slate-100 border-dashed h-0 mt-[80px]">
<span className="absolute -top-3 -left-10 text-xs text-slate-400">20</span>
<span className="absolute -top-3 -right-10 text-xs text-slate-400">2</span>
</div>

<div className="relative w-full border-b border-slate-200 h-0 mt-[80px]">
<span className="absolute -top-3 -left-10 text-xs text-slate-400">0</span>
<span className="absolute -top-3 -right-10 text-xs text-slate-400">0</span>
</div>
</div>

<span className="absolute -top-6 -left-2 text-xs text-slate-400">%</span>
<span className="absolute -top-6 -right-6 text-xs text-slate-600 font-medium">Score /10</span>

<div className="absolute inset-0 left-10 right-10 flex z-10 pb-[1px] items-end">

<div className="w-1/5 h-full flex items-end justify-center gap-1 sm:gap-1.5 px-2">
<div className="w-full max-w-[20px] bg-blue-500 rounded-t-[3px] hover:opacity-80 transition-opacity" style={{height: '97%'}}></div>
<div className="w-full max-w-[20px] bg-purple-500 rounded-t-[3px] hover:opacity-80 transition-opacity" style={{height: '99.1%'}}></div>
<div className="w-full max-w-[20px] bg-orange-400 opacity-90 rounded-t-[3px] hover:opacity-100 transition-opacity" style={{height: '12%'}}></div>
<div className="w-full max-w-[20px] bg-green-500 rounded-t-[3px] hover:opacity-80 transition-opacity" style={{height: '94.2%'}}></div>
<div className="w-full max-w-[20px] bg-teal-500 rounded-t-[3px] hover:opacity-80 transition-opacity" style={{height: '97%'}}></div>
</div>

<div className="w-1/5 h-full flex items-end justify-center gap-1 sm:gap-1.5 px-2 relative">
<div className="w-full max-w-[20px] bg-blue-500 rounded-t-[3px] hover:opacity-80 transition-opacity" style={{height: '85%'}}></div>
<div className="w-full max-w-[20px] bg-purple-500 rounded-t-[3px] hover:opacity-80 transition-opacity" style={{height: '94.5%'}}></div>
<div className="w-full max-w-[20px] bg-orange-400 opacity-90 rounded-t-[3px] hover:opacity-100 transition-opacity relative flex justify-center" style={{height: '45%'}}>

<span className="absolute -top-6 text-xs font-medium text-orange-600">45</span>
</div>
<div className="w-full max-w-[20px] bg-green-500 rounded-t-[3px] hover:opacity-80 transition-opacity" style={{height: '81.4%'}}></div>
<div className="w-full max-w-[20px] bg-teal-500 rounded-t-[3px] hover:opacity-80 transition-opacity" style={{height: '92%'}}></div>
</div>

<div className="w-1/5 h-full flex items-end justify-center gap-1 sm:gap-1.5 px-2">
<div className="w-full max-w-[20px] bg-blue-500 rounded-t-[3px] hover:opacity-80 transition-opacity relative flex justify-center" style={{height: '72%'}}>
<span className="absolute -top-6 text-xs font-medium text-blue-600">72%</span>
</div>
<div className="w-full max-w-[20px] bg-purple-500 rounded-t-[3px] hover:opacity-80 transition-opacity" style={{height: '98.8%'}}></div>
<div className="w-full max-w-[20px] bg-orange-400 opacity-90 rounded-t-[3px] hover:opacity-100 transition-opacity" style={{height: '18%'}}></div>
<div className="w-full max-w-[20px] bg-green-500 rounded-t-[3px] hover:opacity-80 transition-opacity" style={{height: '96.1%'}}></div>
<div className="w-full max-w-[20px] bg-teal-500 rounded-t-[3px] hover:opacity-80 transition-opacity" style={{height: '81%'}}></div>
</div>

<div className="w-1/5 h-full flex items-end justify-center gap-1 sm:gap-1.5 px-2">
<div className="w-full max-w-[20px] bg-blue-500 rounded-t-[3px] hover:opacity-80 transition-opacity" style={{height: '65%'}}></div>
<div className="w-full max-w-[20px] bg-purple-500 rounded-t-[3px] hover:opacity-80 transition-opacity" style={{height: '98.8%'}}></div>
<div className="w-full max-w-[20px] bg-orange-400 opacity-90 rounded-t-[3px] hover:opacity-100 transition-opacity relative flex justify-center" style={{height: '88%'}}>

<span className="absolute -top-6 text-xs font-medium text-orange-600">88</span>
</div>
<div className="w-full max-w-[20px] bg-green-500 rounded-t-[3px] hover:opacity-80 transition-opacity" style={{height: '96.1%'}}></div>
<div className="w-full max-w-[20px] bg-teal-500 rounded-t-[3px] hover:opacity-80 transition-opacity" style={{height: '66%'}}></div>
</div>

<div className="w-1/5 h-full flex items-end justify-center gap-1 sm:gap-1.5 px-2">
<div className="w-full max-w-[20px] bg-blue-500 rounded-t-[3px] hover:opacity-80 transition-opacity" style={{height: '88%'}}></div>
<div className="w-full max-w-[20px] bg-purple-500 rounded-t-[3px] hover:opacity-80 transition-opacity" style={{height: '92.1%'}}></div>
<div className="w-full max-w-[20px] bg-orange-400 opacity-90 rounded-t-[3px] hover:opacity-100 transition-opacity" style={{height: '64%'}}></div>
<div className="w-full max-w-[20px] bg-green-500 rounded-t-[3px] hover:opacity-80 transition-opacity relative flex justify-center" style={{height: '76.3%'}}>
<span className="absolute -top-6 text-xs font-medium text-green-600">76%</span>
</div>
<div className="w-full max-w-[20px] bg-teal-500 rounded-t-[3px] hover:opacity-80 transition-opacity" style={{height: '88%'}}></div>
</div>
</div>

<div className="absolute inset-0 left-10 right-10 z-20 pointer-events-none">

<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">
<polyline fill="none" points="10,8 30,25 50,42 70,18 90,24" stroke="#1e293b" strokeLinejoin="round" strokeWidth="2.5" vector-effect="non-scaling-stroke"></polyline>
</svg>


<div className="absolute w-3 h-3 bg-white border-[2.5px] border-slate-800 rounded-full" style={{top: '8%', left: '10%', transform: 'translate(-50%, -50%)'}}></div>
<div className="absolute bg-white border border-slate-200 shadow-sm rounded-md px-2 py-0.5 text-sm font-semibold text-slate-800" style={{top: 'calc(8% + 14px)', left: '10%', transform: 'translate(-50%, 0)'}}>9.2</div>

<div className="absolute w-3 h-3 bg-white border-[2.5px] border-slate-800 rounded-full" style={{top: '25%', left: '30%', transform: 'translate(-50%, -50%)'}}></div>
<div className="absolute bg-white border border-slate-200 shadow-sm rounded-md px-2 py-0.5 text-sm font-semibold text-slate-800" style={{top: 'calc(25% + 14px)', left: '30%', transform: 'translate(-50%, 0)'}}>7.5</div>

<div className="absolute w-3.5 h-3.5 bg-white border-[3px] border-red-500 rounded-full shadow-sm z-30" style={{top: '42%', left: '50%', transform: 'translate(-50%, -50%)'}}></div>
<div className="absolute bg-red-50 border border-red-200 shadow-sm rounded-md px-2.5 py-1 flex flex-col items-center z-30" style={{top: 'calc(42% + 16px)', left: '50%', transform: 'translate(-50%, 0)'}}>
<span className="text-sm font-semibold text-red-600 leading-none">5.8</span>
<span className="text-xs font-medium text-red-500 mt-1 whitespace-nowrap">Needs Attention</span>
</div>

<div className="absolute w-3 h-3 bg-white border-[2.5px] border-slate-800 rounded-full" style={{top: '18%', left: '70%', transform: 'translate(-50%, -50%)'}}></div>
<div className="absolute bg-white border border-slate-200 shadow-sm rounded-md px-2 py-0.5 text-sm font-semibold text-slate-800" style={{top: 'calc(18% - 32px)', left: '70%', transform: 'translate(-50%, 0)'}}>8.2</div>

<div className="absolute w-3 h-3 bg-white border-[2.5px] border-slate-800 rounded-full" style={{top: '24%', left: '90%', transform: 'translate(-50%, -50%)'}}></div>
<div className="absolute bg-white border border-slate-200 shadow-sm rounded-md px-2 py-0.5 text-sm font-semibold text-slate-800" style={{top: 'calc(24% + 14px)', left: '90%', transform: 'translate(-50%, 0)'}}>7.6</div>
</div>
</div>

<div className="flex mt-6 pl-10 pr-10 text-sm">
<div className="w-1/5 text-center flex flex-col px-1">
<span className="font-medium text-slate-800 leading-tight">Burjeel Medical City</span>
<span className="text-xs text-slate-400 mt-0.5">Abu Dhabi</span>
</div>
<div className="w-1/5 text-center flex flex-col px-1">
<span className="font-medium text-slate-800 leading-tight">Medor Hospital</span>
<span className="text-xs text-slate-400 mt-0.5">Dubai</span>
</div>
<div className="w-1/5 text-center flex flex-col px-1">
<span className="font-medium text-slate-800 leading-tight">Lifecare Hospital</span>
<span className="text-xs text-slate-400 mt-0.5">Sharjah</span>
</div>
<div className="w-1/5 text-center flex flex-col px-1">
<span className="font-medium text-slate-800 leading-tight">Burjeel Hospital AUH</span>
<span className="text-xs text-slate-400 mt-0.5">Abu Dhabi</span>
</div>
<div className="w-1/5 text-center flex flex-col px-1">
<span className="font-medium text-slate-800 leading-tight">Reem Clinic AUH</span>
<span className="text-xs text-slate-400 mt-0.5">Abu Dhabi</span>
</div>
</div>
</div>

<div className="bg-slate-50 border-t border-slate-100 p-6 md:px-10 mt-2">
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-sm">
<div className="flex items-center gap-3">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="settings-2" strokeWidth="1.5"></i>
</div>
<div>
<div className="font-medium text-slate-900">PM %</div>
<div className="text-xs text-slate-500">Target ≥ 90%</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<div>
<div className="font-medium text-slate-900">MTTR %</div>
<div className="text-xs text-slate-500">Target &lt; 4h</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="clipboard-list" strokeWidth="1.5"></i>
</div>
<div>
<div className="font-medium text-slate-900">CM Backlog</div>
<div className="text-xs text-slate-500">Lower is better</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="activity" strokeWidth="1.5"></i>
</div>
<div>
<div className="font-medium text-slate-900">Uptime %</div>
<div className="text-xs text-slate-500">Target ≥ 95%</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<div>
<div className="font-medium text-slate-900">SLA %</div>
<div className="text-xs text-slate-500">Target ≥ 90%</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center">
<i className="w-5 h-5" data-lucide="star" strokeWidth="1.5"></i>
</div>
<div>
<div className="font-medium text-slate-900">Score /10</div>
<div className="text-xs text-slate-500">Overall rating</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
