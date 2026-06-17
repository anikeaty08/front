import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="fixed top-[-10%] left-[-10%] w-1/2 h-1/2 bg-violet-900/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
<div className="fixed bottom-[-10%] right-[-10%] w-1/2 h-1/2 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

<nav className="hidden md:flex flex-col items-center w-20 py-8 z-20 glass-panel border-r border-white/5 m-4 rounded-3xl h-[calc(100%-2rem)]">
<div className="mb-10 text-violet-500">
<iconify-icon icon="solar:infinity-linear" width="32"></iconify-icon>
</div>
<div className="flex flex-col gap-8 w-full items-center">
<button className="relative group text-violet-400">
<div className="absolute inset-0 bg-violet-500/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition duration-300"></div>
<iconify-icon className="relative z-10" icon="solar:widget-5-linear" width="24"></iconify-icon>
</button>
<button className="text-slate-500 hover:text-slate-200 transition duration-300">
<iconify-icon className="" icon="solar:folder-with-files-linear" width="24"></iconify-icon>
</button>
<button className="text-slate-500 hover:text-slate-200 transition duration-300">
<iconify-icon className="" icon="solar:chart-2-linear" width="24"></iconify-icon>
</button>
<button className="text-slate-500 hover:text-slate-200 transition duration-300">
<iconify-icon className="" icon="solar:calendar-mark-linear" width="24"></iconify-icon>
</button>
<button className="text-slate-500 hover:text-slate-200 transition duration-300">
<iconify-icon className="" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</button>
</div>
<div className="mt-auto flex flex-col gap-6 items-center">
<button className="text-slate-500 hover:text-slate-200 transition duration-300">
<iconify-icon icon="solar:settings-linear" width="24"></iconify-icon>
</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-500 p-[1px]">
<img alt="User" className="w-full h-full rounded-full object-cover border-2 border-[#050505]" src="https://i.pravatar.cc/100?img=33"/>
</div>
</div>
</nav>

<main className="flex-1 relative z-10 flex flex-col h-full overflow-hidden p-4 pl-0 md:pl-0">

<header className="flex justify-between items-center px-6 py-4 mb-2">
<div className="">
<h1 className="text-2xl font-light tracking-tight text-white">Dashboard <span className="text-slate-500 mx-2">/</span> Patient Overview</h1>
<p className="text-xs text-slate-500 font-light mt-1">Monitoring Protocol: Hypertension Type II</p>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<input className="bg-white/5 border border-white/10 rounded-full py-2 px-4 pl-10 text-sm focus:outline-none focus:border-violet-500/50 focus:bg-white/10 transition-all w-64 text-slate-300 placeholder-slate-600 font-light" placeholder="Search records..." type="text"/>
<iconify-icon className="absolute left-3.5 top-2.5 text-slate-500" icon="solar:magnifer-linear" width="18"></iconify-icon>
</div>
<button className="relative w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 transition">
<div className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-violet-500 rounded-full animate-pulse"></div>
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto px-6 pb-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-[1600px] mx-auto">

<div className="col-span-1 lg:col-span-8 relative group">
<div className="absolute inset-0 bg-violet-600/5 rounded-3xl blur-xl group-hover:bg-violet-600/10 transition duration-700"></div>
<div className="glass-panel overflow-hidden flex flex-col min-h-[18rem] h-full rounded-3xl pt-0 pr-0 pb-0 pl-0 relative justify-between">

<div className="relative z-20 p-6 flex justify-between items-start">
<div className="">
<div className="flex items-center gap-2 mb-1">
<span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
<span className="text-xs font-medium tracking-widest uppercase text-green-500">Live Signal</span>
</div>
<h2 className="text-3xl text-white font-light tracking-tight">Cardiac Output</h2>
</div>
<button className="bg-white/10 hover:bg-white/20 text-white text-xs px-4 py-2 rounded-full backdrop-blur-md transition border border-white/10">
                                Full Report
                            </button>
</div>

<div className="absolute inset-0 flex items-center justify-center opacity-80 fade-mask pointer-events-none">
<svg className="w-full h-48 stroke-violet-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 1000 200">

<path d="M0 50 H1000 M0 100 H1000 M0 150 H1000" stroke="rgba(255,255,255,0.05)" strokeWidth="1"></path>
<path d="M100 0 V200 M200 0 V200 M300 0 V200 M400 0 V200 M500 0 V200 M600 0 V200 M700 0 V200 M800 0 V200 M900 0 V200" stroke="rgba(255,255,255,0.05)" strokeWidth="1"></path>

<path className="ecg-line" d="M0 100 L100 100 L120 100 L130 60 L140 140 L150 80 L160 110 L170 100 L300 100 L320 100 L330 60 L340 140 L350 80 L360 110 L370 100 L500 100 L520 100 L530 60 L540 140 L550 80 L560 110 L570 100 L700 100 L720 100 L730 60 L740 140 L750 80 L760 110 L770 100 L900 100 L920 100 L930 60 L940 140 L950 80 L960 110 L970 100 L1000 100"></path>
</svg>
</div>

<div className="relative z-20 grid grid-cols-3 gap-4 p-6 bg-gradient-to-t from-[#050505] to-transparent">
<div className="">
<p className="text-xs text-slate-400 mb-1">Systolic (mmHg)</p>
<p className="text-3xl text-white font-light tracking-tight">118</p>
</div>
<div className="">
<p className="text-xs text-slate-400 mb-1">Diastolic (mmHg)</p>
<p className="text-3xl text-white font-light tracking-tight">76</p>
</div>
<div className="">
<p className="text-xs text-slate-400 mb-1">Pulse (BPM)</p>
<p className="text-3xl text-violet-400 font-light tracking-tight">72</p>
</div>
</div>
</div>
</div>

<div className="col-span-1 lg:col-span-4 flex flex-col gap-6">
<div className="glass-panel rounded-3xl p-6 h-full flex flex-col">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg text-white font-normal tracking-tight">Daily Medication</h3>
<iconify-icon className="text-violet-500" icon="solar:pill-linear" width="20"></iconify-icon>
</div>
<div className="space-y-4 flex-1">

<div className="flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-white transition">
<iconify-icon icon="solar:bottle-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm text-slate-200">Amlodipine</p>
<p className="text-xs text-slate-500">5mg • Morning</p>
</div>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-[#2d2d2d] appearance-none cursor-pointer transition-all duration-300 checked:border-violet-500" id="toggle1" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-[#2d2d2d] cursor-pointer transition-colors duration-300" htmlFor="toggle1"></label>
</div>
</div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-white transition">
<iconify-icon icon="solar:capsule-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm text-slate-200">Lisinopril</p>
<p className="text-xs text-slate-500">10mg • Evening</p>
</div>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-[#2d2d2d] appearance-none cursor-pointer transition-all duration-300 checked:border-violet-500" id="toggle2" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-[#2d2d2d] cursor-pointer transition-colors duration-300" htmlFor="toggle2"></label>
</div>
</div>
</div>

<div className="mt-4">
<div className="flex justify-between text-xs mb-2">
<span className="text-slate-400">Adherence</span>
<span className="text-violet-400">85%</span>
</div>
<div className="w-full bg-[#2d2d2d] rounded-full h-1.5">
<div className="bg-violet-500 h-1.5 rounded-full" style={{width: '85%'}}></div>
</div>
</div>
</div>
</div>

<div className="col-span-1 lg:col-span-8">
<div className="glass-panel rounded-3xl p-6 min-h-[16rem]">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg text-white font-normal tracking-tight">Medical Records</h3>
<button className="text-xs text-violet-400 hover:text-violet-300 transition">View All</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="group relative bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl p-4 transition duration-300 cursor-pointer overflow-hidden">
<div className="absolute right-[-20px] top-[-20px] w-20 h-20 bg-violet-500/10 rounded-full blur-xl group-hover:bg-violet-500/20 transition"></div>
<div className="flex items-start justify-between relative z-10">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-xl bg-[#050505] border border-white/10 flex items-center justify-center text-red-400">
<iconify-icon icon="solar:file-text-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm text-slate-200 group-hover:text-white transition">Blood_Work_Q3.pdf</h4>
<p className="text-xs text-slate-500 mt-0.5">Added 2 hours ago • 2.4 MB</p>
</div>
</div>
<iconify-icon className="text-slate-500 hover:text-violet-400 transition" icon="solar:download-linear" width="20"></iconify-icon>
</div>
</div>

<div className="group relative bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl p-4 transition duration-300 cursor-pointer overflow-hidden">
<div className="absolute right-[-20px] top-[-20px] w-20 h-20 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition"></div>
<div className="flex items-start justify-between relative z-10">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-xl bg-[#050505] border border-white/10 flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:gallery-wide-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm text-slate-200 group-hover:text-white transition">Echocardiogram.jpg</h4>
<p className="text-xs text-slate-500 mt-0.5">Added yesterday • 4.1 MB</p>
</div>
</div>
<iconify-icon className="text-slate-500 hover:text-violet-400 transition" icon="solar:download-linear" width="20"></iconify-icon>
</div>
</div>

<div className="group relative bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl p-4 transition duration-300 cursor-pointer overflow-hidden">
<div className="absolute right-[-20px] top-[-20px] w-20 h-20 bg-emerald-500/10 rounded-full blur-xl group-hover:bg-emerald-500/20 transition"></div>
<div className="flex items-start justify-between relative z-10">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-xl bg-[#050505] border border-white/10 flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:clipboard-check-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm text-slate-200 group-hover:text-white transition">Prescription_Renewal.pdf</h4>
<p className="text-xs text-slate-500 mt-0.5">Added 3 days ago • 800 KB</p>
</div>
</div>
<iconify-icon className="text-slate-500 hover:text-violet-400 transition" icon="solar:download-linear" width="20"></iconify-icon>
</div>
</div>

<div className="group border border-dashed border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-white/5 transition hover:border-violet-500/30">
<iconify-icon className="text-slate-500 group-hover:text-violet-400 mb-2 transition" icon="solar:cloud-upload-linear" width="24"></iconify-icon>
<span className="text-xs text-slate-400 group-hover:text-slate-200">Upload new record</span>
</div>
</div>
</div>
</div>

<div className="col-span-1 lg:col-span-4">
<div className="glass-panel rounded-3xl p-6 h-full relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-500/10 to-transparent rounded-bl-full pointer-events-none"></div>
<h3 className="text-lg text-white font-normal tracking-tight mb-6 relative z-10">Next Visit</h3>
<div className="flex gap-4 items-center mb-6 relative z-10">
<div className="w-12 h-14 bg-[#1a1a1a] rounded-xl flex flex-col items-center justify-center border border-white/5">
<span className="text-xs text-slate-500 uppercase font-bold">Oct</span>
<span className="text-lg text-white font-light">24</span>
</div>
<div>
<h4 className="text-white text-base font-light">Dr. Sarah Jensen</h4>
<p className="text-xs text-slate-500">Cardiologist • 09:30 AM</p>
</div>
</div>
<div className="space-y-3 relative z-10">
<div className="flex items-center gap-3 text-xs text-slate-400">
<iconify-icon className="text-slate-500" icon="solar:map-point-linear"></iconify-icon>
<span>Central Heart Clinic, Room 402</span>
</div>
<div className="flex items-center gap-3 text-xs text-slate-400">
<iconify-icon className="text-slate-500" icon="solar:phone-linear"></iconify-icon>
<span>+1 (555) 012-3456</span>
</div>
</div>
<button className="mt-8 w-full py-3 bg-white text-black text-sm font-medium rounded-xl hover:bg-slate-200 transition shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                            Reschedule
                        </button>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
