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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="fixed inset-0 z-0 bg-gradient-to-br from-[#F3ECFF] via-[#E8F4FF] to-[#FFE6F2] pointer-events-none">

<div className="absolute top-[-15%] left-[-10%] w-[60%] aspect-square rounded-full bg-blue-300/30 blur-[140px] mix-blend-multiply animate-float-1"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50%] aspect-square rounded-full bg-pink-300/30 blur-[130px] mix-blend-multiply animate-float-2"></div>
<div className="absolute top-[20%] right-[10%] w-[30%] aspect-square rounded-full bg-violet-300/20 blur-[100px] mix-blend-multiply"></div>

<div className="absolute top-[30%] left-[20%] w-1.5 h-1.5 bg-white rounded-full blur-[1px] opacity-60 animate-float-1"></div>
<div className="absolute bottom-[40%] right-[30%] w-2 h-2 bg-white rounded-full blur-[2px] opacity-40 animate-float-2"></div>
<div className="absolute top-[60%] left-[60%] w-1 h-1 bg-white rounded-full opacity-50 animate-float-1" style={{animationDelay: '2s'}}></div>
</div>

<main className="glass-panel relative z-10 w-full max-w-[1500px] h-[90vh] min-h-[800px] rounded-[32px] p-6 md:p-8 flex flex-col gap-6 overflow-y-auto overflow-x-hidden">

<div className="absolute inset-0 rounded-[32px] border-[2px] border-white/60 pointer-events-none" style={{boxShadow: 'inset 0 0 20px rgba(255, 192, 2CB, 0.1)'}}></div>

<header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-20 shrink-0 mb-2">

<div className="flex items-center gap-4">
<div className="tracking-tighter text-2xl font-medium bg-gradient-to-br from-[#4F8CFF] via-[#8A5CFF] to-[#FF4FA3] text-transparent bg-clip-text relative">
                    Q2
                    <div className="absolute inset-0 bg-white/20 blur-sm mix-blend-overlay"></div>
</div>
<div className="h-6 w-px bg-slate-300/60"></div>
<h1 className="text-sm font-medium text-slate-500 tracking-tight">The Q2 Way</h1>
</div>

<nav className="hidden lg:flex items-center gap-8 bg-white/40 px-6 py-2.5 rounded-full border border-white/60 shadow-sm backdrop-blur-md">
<div className="relative group cursor-pointer">
<span className="text-sm font-medium text-slate-800 transition-colors">Q2 Live</span>
<div className="absolute -bottom-2.5 left-0 right-0 h-0.5 bg-gradient-to-r from-[#4F8CFF] via-[#8A5CFF] to-[#FF4FA3] rounded-t-full">
<div className="absolute inset-0 bg-inherit blur-[2px] opacity-60"></div>
</div>
</div>
<a className="text-sm font-normal text-slate-500 hover:text-slate-800 transition-colors" href="#">Q2 Analyst</a>
<a className="text-sm font-normal text-slate-500 hover:text-slate-800 transition-colors" href="#">Q2 Architect</a>
<a className="text-sm font-normal text-slate-500 hover:text-slate-800 transition-colors" href="#">Q2 Coach</a>
<a className="text-sm font-normal text-slate-500 hover:text-slate-800 transition-colors" href="#">Q2 Communicator</a>
<a className="text-sm font-normal text-slate-500 hover:text-slate-800 transition-colors" href="#">Q2 Administrator</a>
</nav>

<div className="flex items-center gap-5">
<button className="relative text-slate-400 hover:text-slate-600 transition-colors">
<iconify-icon height="22" icon="solar:bell-linear" width="22"></iconify-icon>
<span className="absolute top-0.5 right-0.5 w-2 h-2 bg-[#FF4FA3] rounded-full border border-white"></span>
</button>
<div className="flex items-center gap-3 pl-3 border-l border-slate-300/50">
<div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#E8F4FF] to-[#F3ECFF] border border-white shadow-sm flex items-center justify-center text-slate-400 overflow-hidden relative">
<iconify-icon height="18" icon="solar:user-rounded-linear" width="18"></iconify-icon>
<div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
</div>
<span className="text-sm font-medium text-slate-700">Jane Mitchell</span>
</div>
</div>
</header>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-20 flex-1">

<div className="glass-card rounded-[24px] p-7 lg:col-span-3 flex flex-col justify-between">
<div>
<h2 className="text-base font-medium text-slate-700 tracking-tight mb-8">Q2 Score Elements</h2>
<div className="flex flex-col gap-6">

<div className="flex flex-col gap-2">
<div className="flex justify-between items-end">
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest">Head</span>
<span className="text-xs font-normal text-slate-400">61/100</span>
</div>
<div className="h-2 w-full bg-slate-100 rounded-full overflow-visible relative">
<div className="absolute top-0 left-0 h-full w-[61%] rounded-full bg-gradient-to-r from-sky-300 to-[#4F8CFF] shadow-[0_0_10px_rgba(79,140,255,0.4)]">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-sm border-[2px] border-[#4F8CFF]"></div>
</div>
</div>
</div>

<div className="flex flex-col gap-2">
<div className="flex justify-between items-end">
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest">Heart</span>
<span className="text-xs font-normal text-slate-400">72/100</span>
</div>
<div className="h-2 w-full bg-slate-100 rounded-full overflow-visible relative">
<div className="absolute top-0 left-0 h-full w-[72%] rounded-full bg-gradient-to-r from-indigo-300 to-[#8A5CFF] shadow-[0_0_10px_rgba(138,92,255,0.4)]">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-sm border-[2px] border-[#8A5CFF]"></div>
</div>
</div>
</div>

<div className="flex flex-col gap-2">
<div className="flex justify-between items-end">
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest">Soul</span>
<span className="text-xs font-normal text-slate-400">78/100</span>
</div>
<div className="h-2 w-full bg-slate-100 rounded-full overflow-visible relative">
<div className="absolute top-0 left-0 h-full w-[78%] rounded-full bg-gradient-to-r from-pink-300 to-[#FF4FA3] shadow-[0_0_10px_rgba(255,79,163,0.4)]">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-sm border-[2px] border-[#FF4FA3]"></div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-10">
<p className="text-xs text-slate-400 mb-4">Current Trajectory Indicators</p>
<div className="flex flex-wrap gap-3">
<button className="px-4 py-2 bg-blue-50/50 border border-blue-200/60 rounded-full text-xs font-medium text-blue-600 shadow-sm hover:shadow-md hover:bg-blue-50 transition-all relative overflow-hidden group">
<div className="absolute inset-0 bg-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity blur-md"></div>
<span className="relative z-10 flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> H 61</span>
</button>
<button className="px-4 py-2 bg-purple-50/50 border border-purple-200/60 rounded-full text-xs font-medium text-purple-600 shadow-sm hover:shadow-md hover:bg-purple-50 transition-all relative overflow-hidden group">
<div className="absolute inset-0 bg-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity blur-md"></div>
<span className="relative z-10 flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> H 72</span>
</button>
<button className="px-4 py-2 bg-pink-50/50 border border-pink-200/60 rounded-full text-xs font-medium text-pink-600 shadow-sm hover:shadow-md hover:bg-pink-50 transition-all relative overflow-hidden group">
<div className="absolute inset-0 bg-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity blur-md"></div>
<span className="relative z-10 flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div> S 78</span>
</button>
</div>
</div>
</div>

<div className="glass-card mesh-bg rounded-[24px] p-7 lg:col-span-6 relative overflow-hidden flex flex-col justify-between group">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 translate-x-[-150%] group-hover:animate-[shimmer_2s_infinite] pointer-events-none z-10"></div>
<div className="flex justify-between items-start relative z-20">
<div>
<div className="w-10 h-10 rounded-xl bg-white/60 border border-white shadow-sm flex items-center justify-center mb-4">
<span className="text-base font-medium bg-gradient-to-br from-[#4F8CFF] to-[#8A5CFF] text-transparent bg-clip-text">Q2</span>
</div>
<h3 className="text-7xl font-light tracking-tighter text-slate-800 leading-none">74</h3>
<p className="text-xs font-medium tracking-widest text-slate-400 mt-2 uppercase">Transitional</p>
</div>
<div className="flex flex-col items-end gap-2">
<div className="flex items-center gap-2 bg-white/50 px-3 py-1.5 rounded-full border border-white">
<div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
<span className="text-xs font-medium text-slate-600">System Stable</span>
</div>
<span className="text-xs text-slate-400 pr-1">Confidence 0.82</span>
</div>
</div>

<div className="relative w-full h-[180px] mt-8 z-20">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
<div className="w-full border-t border-slate-200/50"></div>
<div className="w-full border-t border-slate-200/50"></div>
<div className="w-full border-t border-slate-200/50"></div>
<div className="w-full border-t border-slate-200/50"></div>
</div>
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 500 150">
<defs>
<lineargradient id="lineGrad" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#4F8CFF"></stop>
<stop offset="50%" stop-color="#8A5CFF"></stop>
<stop offset="100%" stop-color="#FF4FA3"></stop>
</lineargradient>
<lineargradient id="areaGrad" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#8A5CFF" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#8A5CFF" stop-opacity="0"></stop>
</lineargradient>
<filter height="140%" id="glow" width="140%" x="-20%" y="-20%">
<fegaussianblur result="blur" stddeviation="4"></fegaussianblur>
<fecomposite in="SourceGraphic" in2="blur" operator="over"></fecomposite>
</filter>
</defs>

<path d="M 0 130 C 100 130, 150 90, 250 80 C 350 70, 400 110, 500 30 L 500 150 L 0 150 Z" fill="url(#areaGrad)"></path>

<path className="drop-shadow-md" d="M 0 130 C 100 130, 150 90, 250 80 C 350 70, 400 110, 500 30" fill="none" filter="url(#glow)" stroke="url(#lineGrad)" strokeLinecap="round" strokeWidth="4"></path>

<circle className="animate-pulse-glow" cx="250" cy="80" fill="white" r="4" stroke="#8A5CFF" strokeWidth="2"></circle>
<circle className="animate-pulse-glow" cx="500" cy="30" fill="white" r="5" stroke="#FF4FA3" strokeWidth="2"></circle>
</svg>

<div className="absolute top-[10px] right-[-10px] bg-white text-slate-700 text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg border border-slate-100 flex flex-col items-center">
<span className="text-[#FF4FA3]">Peak</span>
<div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45 border-b border-r border-slate-100"></div>
</div>
</div>
</div>

<div className="glass-card rounded-[24px] p-7 lg:col-span-3 flex flex-col justify-between relative overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-violet-200/40 blur-[40px] rounded-full pointer-events-none"></div>
<div>
<h2 className="text-base font-medium text-slate-800 tracking-tight flex items-center gap-2">
<iconify-icon className="text-violet-500" icon="solar:pulse-linear"></iconify-icon>
                        Q2 Live
                    </h2>
<p className="text-xs text-slate-500 mt-1">Q2 InDex Engagement Pulse</p>
<div className="mt-6 flex items-baseline gap-1">
<h3 className="text-5xl font-light tracking-tight bg-gradient-to-br from-[#8A5CFF] to-[#FF4FA3] text-transparent bg-clip-text">76<span className="text-3xl">%</span></h3>
</div>
<div className="h-1.5 w-full bg-slate-100 rounded-full mt-4 overflow-hidden">
<div className="h-full w-[76%] bg-gradient-to-r from-[#4F8CFF] to-[#8A5CFF] rounded-full relative">
<div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-white/40"></div>
</div>
</div>
</div>
<div className="mt-8 flex items-end justify-between h-28 relative">

<div className="absolute top-0 left-[15%] text-xs font-medium text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">+24%</div>
<div className="absolute top-4 left-[45%] text-xs font-medium text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">+8%</div>
<div className="absolute top-2 left-[75%] text-xs font-medium text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">+5%</div>

<div className="flex flex-col items-center gap-2 w-8">
<div className="w-full h-12 bg-gradient-to-t from-slate-200 to-slate-100 rounded-t-md relative overflow-hidden">
<div className="absolute inset-0 bg-white/20"></div>
</div>
<span className="text-[10px] text-slate-400 font-medium uppercase">W1</span>
</div>
<div className="flex flex-col items-center gap-2 w-8">
<div className="w-full h-20 bg-gradient-to-t from-blue-200 to-blue-100 rounded-t-md border-t border-blue-300/50 relative overflow-hidden">
<div className="absolute inset-0 bg-white/20"></div>
</div>
<span className="text-[10px] text-slate-400 font-medium uppercase">W2</span>
</div>
<div className="flex flex-col items-center gap-2 w-8">
<div className="w-full h-[88px] bg-gradient-to-t from-violet-200 to-violet-100 rounded-t-md border-t border-violet-300/50 relative overflow-hidden">
<div className="absolute inset-0 bg-white/20"></div>
</div>
<span className="text-[10px] text-slate-400 font-medium uppercase">W3</span>
</div>
<div className="flex flex-col items-center gap-2 w-8">
<div className="w-full h-24 bg-gradient-to-t from-pink-200 to-pink-100 rounded-t-md border-t border-pink-300/50 relative overflow-hidden">
<div className="absolute inset-0 bg-white/40 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8)]"></div>
</div>
<span className="text-[10px] text-slate-600 font-medium uppercase">W4</span>
</div>
</div>
</div>


<div className="glass-card rounded-[20px] p-5 lg:col-span-3 flex flex-col justify-between group cursor-pointer hover:bg-white/60 transition-colors">
<div className="flex justify-between items-center mb-4">
<span className="text-sm font-medium text-slate-700">Input Trends</span>
<iconify-icon className="text-slate-400 group-hover:text-blue-500 transition-colors" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div className="flex items-end gap-1.5 h-16 opacity-80 group-hover:opacity-100 transition-opacity">
<div className="w-full bg-slate-200 rounded-sm h-[30%]"></div>
<div className="w-full bg-slate-200 rounded-sm h-[45%]"></div>
<div className="w-full bg-blue-300 rounded-sm h-[60%]"></div>
<div className="w-full bg-violet-300 rounded-sm h-[50%]"></div>
<div className="w-full bg-pink-300 rounded-sm h-[80%] relative">
<div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-pink-500 rounded-full shadow-[0_0_5px_rgba(255,79,163,0.6)]"></div>
</div>
<div className="w-full bg-slate-200 rounded-sm h-[40%]"></div>
</div>
</div>

<div className="glass-card rounded-[20px] p-5 lg:col-span-3 flex flex-col justify-between">
<div>
<span className="text-sm font-medium text-slate-700">Weekly Guidance</span>
<p className="text-[10px] text-slate-400 uppercase mt-1">Reports Generated</p>
</div>
<div className="flex items-baseline gap-2 mt-4">
<span className="text-4xl font-light tracking-tight text-slate-800">72<span className="text-xl text-slate-400">%</span></span>
<span className="text-xs font-medium text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full">+12.5%</span>
</div>
</div>

<div className="glass-card rounded-[20px] p-5 lg:col-span-3 flex flex-col justify-center items-center relative overflow-hidden">
<span className="absolute top-5 left-5 text-sm font-medium text-slate-700 z-10">Communicator</span>
<div className="flex gap-4 items-center justify-center mt-6 z-10">

<div className="relative w-14 h-14 flex items-center justify-center">
<svg className="w-full h-full -rotate-90" viewbox="0 0 36 36">
<path className="text-slate-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
<path className="text-[#4F8CFF]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="98, 100" strokeLinecap="round" strokeWidth="3"></path>
</svg>
<span className="absolute text-[10px] font-medium text-slate-600">98%</span>
</div>

<div className="relative w-14 h-14 flex items-center justify-center">
<svg className="w-full h-full -rotate-90" viewbox="0 0 36 36">
<path className="text-slate-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
<path className="text-[#8A5CFF]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="72, 100" strokeLinecap="round" strokeWidth="3"></path>
</svg>
<span className="absolute text-[10px] font-medium text-slate-600">72</span>
</div>

<div className="relative w-14 h-14 flex items-center justify-center">
<svg className="w-full h-full -rotate-90" viewbox="0 0 36 36">
<path className="text-slate-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
<path className="text-[#FF4FA3]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="91, 100" strokeLinecap="round" strokeWidth="3"></path>
</svg>
<span className="absolute text-[10px] font-medium text-slate-600">91%</span>
</div>
</div>
</div>

<div className="glass-card rounded-[20px] p-5 lg:col-span-3 flex flex-col justify-between">
<span className="text-sm font-medium text-slate-700 mb-4">Administrator</span>
<div className="grid grid-cols-2 gap-4">
<div>
<p className="text-[10px] text-slate-400 uppercase">Users</p>
<p className="text-xl font-normal text-slate-800 tracking-tight">1,825</p>
</div>
<div>
<p className="text-[10px] text-slate-400 uppercase">Active Nodes</p>
<p className="text-xl font-normal text-slate-800 tracking-tight">19</p>
</div>
<div className="col-span-2 bg-white/40 rounded-lg p-2 border border-white flex justify-between items-center">
<span className="text-[10px] text-slate-500 font-medium">System Health</span>
<span className="text-xs font-medium text-blue-600">92%</span>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
