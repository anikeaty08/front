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
      

<main className="lg:h-[800px] flex flex-col lg:flex-row overflow-hidden bg-[#050505] w-full h-auto max-w-[1200px] z-10 rounded-[32px] ring-white/5 ring-1 relative shadow-[2.8px_2.8px_2.2px_rgba(0,_0,_0,_0.034),_6.7px_6.7px_5.3px_rgba(0,_0,_0,_0.048),_12.5px_12.5px_10px_rgba(0,_0,_0,_0.06),_22.3px_22.3px_17.9px_rgba(0,_0,_0,_0.072),_41.8px_41.8px_33.4px_rgba(0,_0,_0,_0.086),_100px_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="absolute inset-0 noise-bg pointer-events-none z-0"></div>

<section className="lg:w-[40%] lg:p-12 flex flex-col z-10 bg-gradient-to-b from-[#0a0a0a] to-[#050505] w-full border-white/5 border-r pt-8 pr-8 pb-8 pl-8 relative justify-between">

<div className="flex justify-between items-start">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-zinc-800 rounded-lg border border-zinc-700/50 shadow-inner flex items-center justify-center">
<div className="w-3 h-3 bg-zinc-400 rounded-full"></div>
</div>
<span className="text-lg font-semibold tracking-tight text-zinc-200">Aura OS</span>
</div>
</div>

<div className="flex flex-col gap-8 my-10 lg:my-0">
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/5 mb-5 shadow-bevel-btn">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80"></span>
<span className="text-[11px] font-medium text-zinc-400 tracking-wide uppercase">System Stable</span>
</div>
<h1 className="text-5xl lg:text-6xl font-medium text-zinc-100 tracking-tighter leading-[0.95] mb-6">
                        Design.
                        Control.
                        <span className="text-zinc-600">Precision.</span>
</h1>
<p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
                        Advanced telemetry and environmental control with sub-millisecond latency. 
                    </p>
</div>
<div className="flex flex-col gap-3">

<div className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/30 border border-white/5 shadow-bevel">
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify iconify--solar w-[20px] h-[20px]" data-icon="solar:shield-check-linear" data-icon-replaced="true" height="1em" role="img" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(82, 82, 91)'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22s-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991z"></path><path d="m9.5 12.4l1.429 1.6l3.571-4" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-300">Security Core</span>
<span className="text-[10px] text-zinc-600">Encrypted</span>
</div>
</div>
<div className="toggle-wrapper">
<input checked="" className="toggle-input" type="checkbox"/>
<div className="toggle-track">
<div className="toggle-thumb"></div>
</div>
</div>
</div>
<div className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/30 border border-white/5 shadow-bevel">
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify iconify--solar w-[20px] h-[20px]" data-icon="solar:shield-check-linear" data-icon-replaced="true" height="1em" role="img" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(82, 82, 91)'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22s-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991z"></path><path d="m9.5 12.4l1.429 1.6l3.571-4" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-300">Neural Engine</span>
<span className="text-[10px] text-zinc-600">Idle - 12% Load</span>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="group flex-1 relative w-full h-10 rounded-lg overflow-hidden transition-all duration-300 hover:border-zinc-600 border border-white/5 bg-zinc-900 shadow-bevel-btn">
<span className="relative h-full w-full flex items-center justify-center gap-2 px-4">
<span className="text-xs font-semibold text-zinc-300 tracking-wide uppercase group-hover:text-white transition-colors">Initialize</span>
<svg aria-hidden="true" className="iconify text-zinc-500 group-hover:text-white transition-colors w-3.5 h-3.5 iconify--solar" data-icon="solar:alt-arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m9 5l6 7l-6 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</span>
</button>
<button className="flex-1 w-full h-10 relative btn-border-gradient bg-gradient-to-b from-white/5 via-white/5 to-transparent rounded-lg flex items-center justify-center gap-2 text-xs font-medium text-zinc-400 hover:text-zinc-200 transition-all hover:bg-white/5 shadow-bevel-btn group">
<svg aria-hidden="true" className="iconify text-zinc-500 group-hover:text-zinc-300 transition-colors w-3.5 h-3.5 iconify--solar" data-icon="solar:document-text-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z"></path><path d="M8 12h8M8 8h8m-8 8h5" strokeLinecap="round"></path></g></svg>
<span>Documentation</span>
</button>
</div>
</section>

<section className="w-full lg:w-[60%] bg-[#050505] relative z-10 flex flex-col">

<div className="absolute inset-0 vertical-grid pointer-events-none z-0 opacity-40"></div>
<div className="p-6 lg:p-8 flex flex-col gap-6 relative z-10 h-full">

<div className="flex justify-between items-center h-10">
<nav className="flex gap-1 bg-zinc-900/80 backdrop-blur-sm p-1 rounded-lg border border-white/5 shadow-inner-trough">
<button className="relative px-4 py-1.5 rounded-md bg-zinc-800 text-zinc-100 text-xs font-medium shadow-bevel-btn border-t border-white/5">
                            Dashboard
                        </button>
<button className="px-4 py-1.5 rounded-md text-zinc-500 text-xs font-medium hover:text-zinc-300 transition-colors hover:bg-white/5">Rooms</button>
<button className="px-4 py-1.5 rounded-md text-zinc-500 text-xs font-medium hover:text-zinc-300 transition-colors hover:bg-white/5">Settings</button>
</nav>
<div className="flex items-center gap-3 bg-zinc-900/50 px-3 py-1.5 rounded-md border border-white/5">
<span className="text-xs font-mono text-zinc-500">IP: 192.168.1.42</span>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 flex-1 h-full min-h-[500px]">

<div className="card-depth rounded-[20px] p-6 flex flex-col justify-between border-gradient group relative overflow-hidden">
<div className="flex justify-between items-start z-10">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-zinc-900 rounded-md border border-white/5 shadow-inner">
<svg aria-hidden="true" className="iconify text-zinc-400 w-4 h-4 iconify--solar" data-icon="solar:bolt-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m5.67 9.914l3.062-4.143c1.979-2.678 2.969-4.017 3.892-3.734s.923 1.925.923 5.21v.31c0 1.185 0 1.777.379 2.148l.02.02c.387.363 1.003.363 2.236.363c2.22 0 3.329 0 3.704.673l.018.034c.354.683-.289 1.553-1.574 3.29l-3.062 4.144c-1.98 2.678-2.969 4.017-3.892 3.734s-.923-1.925-.923-5.21v-.31c0-1.185 0-1.777-.379-2.148l-.02-.02c-.387-.363-1.003-.363-2.236-.363c-2.22 0-3.329 0-3.703-.673l-.019-.034c-.354-.683.289-1.552 1.574-3.29Z" fill="none" stroke="currentColor" strokeWidth="1.5"></path></svg>
</div>
<span className="text-xs font-medium text-zinc-400">Net Energy</span>
</div>
<span className="text-[10px] bg-zinc-900 text-zinc-400 px-2 py-0.5 rounded border border-white/5 font-mono">LIVE</span>
</div>
<div className="flex items-end gap-1 mt-4 z-10">
<span className="text-4xl font-semibold text-zinc-200 tracking-tighter">4.2</span>
<span className="text-sm text-zinc-600 font-medium mb-1">kW/h</span>
</div>

<div className="w-full h-16 flex items-end gap-1 mt-auto relative z-10">
<div className="w-full bg-zinc-800/30 h-[30%] rounded-sm"></div>
<div className="w-full bg-zinc-800/30 h-[50%] rounded-sm"></div>
<div className="w-full bg-zinc-800/30 h-[40%] rounded-sm"></div>
<div className="w-full bg-zinc-800/30 h-[70%] rounded-sm"></div>
<div className="w-full bg-yellow-600/40 h-[60%] rounded-sm border-t border-yellow-600/50"></div>
<div className="w-full bg-zinc-800/30 h-[45%] rounded-sm"></div>
<div className="w-full bg-zinc-800/30 h-[30%] rounded-sm"></div>
<div className="w-full bg-zinc-800/30 h-[55%] rounded-sm"></div>
</div>
</div>

<div className="card-depth rounded-[20px] p-0 border-gradient flex flex-col relative overflow-hidden">
<div className="p-5 pb-3 flex justify-between items-center border-b border-white/5 bg-white/[0.01]">
<span className="text-xs font-medium text-zinc-300">Quick Actions</span>
<svg aria-hidden="true" className="iconify iconify--solar w-[16px] h-[16px]" data-icon="solar:tuning-2-linear" data-icon-replaced="true" height="1em" role="img" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(82, 82, 91)'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeWidth="1.5"><path className="" d="M9.5 14a3 3 0 1 1 0 6a3 3 0 0 1 0-6Zm5-10a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z"></path><path className="" d="M15 16.959h7m-13-10H2m0 10h2m18-10h-2" strokeLinecap="round"></path></g></svg>
</div>
<div className="flex flex-col h-full overflow-y-auto no-scrollbar p-2">

<div className="flex hover:bg-white/[0.02] transition-colors group rounded-xl pt-3 pr-3 pb-3 pl-3 items-center justify-between">
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify group-hover:text-zinc-300 transition-colors iconify--solar w-[16px] h-[16px]" data-icon="solar:lock-password-linear" data-icon-replaced="true" height="1em" role="img" strokeWidth="2" style={{color: 'rgb(212, 212, 216)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor"><path className="" d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16Z" strokeWidth="1.5"></path><path d="M6 10V8a6 6 0 1 1 12 0v2" strokeLinecap="round" strokeWidth="1.5"></path><path d="M8 16h.009m3.982 0H12m3.991 0H16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></g></svg>
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">System Arm</span>
</div>
<div className="toggle-wrapper">
<input checked="" className="toggle-input" type="checkbox"/>
<div className="toggle-track">
<div className="toggle-thumb"></div>
</div>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify group-hover:text-zinc-300 transition-colors iconify--solar w-[16px] h-[16px]" data-icon="solar:wind-linear" data-icon-replaced="true" height="1em" role="img" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(212, 212, 216)'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"><path className="" d="M3 8h6.5A2.5 2.5 0 1 0 7 5.5v.357M4 14h14.5a3.5 3.5 0 1 1-3.5 3.5V17"></path><path d="M2 11h16.5A3.5 3.5 0 1 0 15 7.5V8"></path></g></svg>
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">Ventilation</span>
</div>
<div className="toggle-wrapper">
<input className="toggle-input" type="checkbox"/>
<div className="toggle-track">
<div className="toggle-thumb"></div>
</div>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify group-hover:text-zinc-300 transition-colors iconify--solar w-[16px] h-[16px]" data-icon="solar:wind-linear" data-icon-replaced="true" data-icon-set="solar" data-solar="home-wifi-angle-linear" height="16" role="img" strokeWidth="2" style={{color: 'rgb(212, 212, 216)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#d4d4d8" strokeWidth="1.5"><path d="M2.364 12.958c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093z"></path><path d="M6 11.683c3.314-3.577 8.686-3.577 12 0M8 13.84c2.21-2.384 5.79-2.384 8 0M10 16c1.105-1.192 2.896-1.192 4 0" strokeLinecap="round"></path></g></svg>
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">Network</span>
</div>
<div className="toggle-wrapper">
<input checked="" className="toggle-input" type="checkbox"/>
<div className="toggle-track">
<div className="toggle-thumb"></div>
</div>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify group-hover:text-zinc-300 transition-colors iconify--solar w-[16px] h-[16px]" data-icon="solar:power-linear" data-icon-replaced="true" height="1em" role="img" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(212, 212, 216)'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 2v4M8.5 3.706A9.003 9.003 0 0 0 12 21a9 9 0 0 0 3.5-17.294" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg>
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">Standby</span>
</div>
<div className="toggle-wrapper">
<input className="toggle-input" type="checkbox"/>
<div className="toggle-track">
<div className="toggle-thumb"></div>
</div>
</div>
</div>
</div>
</div>

<div className="card-depth border-gradient flex flex-col overflow-hidden rounded-[20px] pt-6 pr-6 pb-6 pl-6 relative items-center justify-center">
<div className="absolute top-5 left-5">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-zinc-500 iconify--solar w-[16px] h-[16px]" data-icon="solar:thermometer-linear" data-icon-replaced="true" data-icon-set="solar" data-solar="temperature-linear" height="16" role="img" strokeWidth="2" style={{color: 'rgb(113, 113, 122)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#71717a" strokeWidth="1.5"><path d="M12 22a5.5 5.5 0 0 0 3.439-9.793a1.11 1.11 0 0 1-.439-.86V5a3 3 0 1 0-6 0v6.348c0 .338-.175.648-.439.86A5.5 5.5 0 0 0 12 22Z"></path><path d="M14.5 16.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></path><path d="M12 14V5" strokeLinecap="round"></path></g></svg>
<span className="text-xs font-medium text-zinc-300">Climate</span>
</div>
</div>

<div className="relative w-40 h-40 flex items-center justify-center mt-4">

<svg className="w-full h-full -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="42" stroke="#18181b" strokeWidth="6"></circle>

<circle cx="50" cy="50" fill="none" r="42" stroke="#ca8a04" stroke-dasharray="264" stroke-dashoffset="80" strokeLinecap="round" strokeWidth="6"></circle>
</svg>

<div className="absolute inset-0 m-auto w-28 h-28 rounded-full bg-[#111] shadow-bevel border border-white/5 flex flex-col items-center justify-center">
<span className="text-3xl font-semibold text-zinc-200 tracking-tighter">21°</span>
<span className="text-[9px] text-zinc-600 uppercase tracking-widest mt-1">Heating</span>
</div>
</div>
</div>

<div className="card-depth rounded-[20px] p-6 border-gradient flex flex-col relative">
<div className="flex justify-between items-center mb-5">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--solar w-[16px] h-[16px]" data-icon="solar:lightbulb-linear" data-icon-replaced="true" height="1em" role="img" strokeWidth="2" style={{color: 'rgb(113, 113, 122)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeWidth="1.5"><path className="" d="M14.5 19.5h-5m5 0c0-.713 0-1.07.038-1.307c.123-.763.144-.812.631-1.412c.151-.186.711-.688 1.832-1.692A7.5 7.5 0 1 0 7 15.09c1.12 1.004 1.68 1.505 1.832 1.692c.487.6.508.649.63 1.412c.039.237.039.593.039 1.307m5 0c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.349.2-.816.2-1.751.2s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549c-.201-.348-.201-.815-.201-1.75"></path><path d="M12 17v-2m1.732-1a2 2 0 0 1-3.464 0" strokeLinecap="round"></path></g></svg>
<span className="text-xs font-medium text-zinc-300">Ambience</span>
</div>
<svg aria-hidden="true" className="iconify iconify--solar w-[16px] h-[16px]" data-icon="solar:tuning-2-linear" data-icon-replaced="true" height="1em" role="img" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(82, 82, 91)'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeWidth="1.5"><path className="" d="M9.5 14a3 3 0 1 1 0 6a3 3 0 0 1 0-6Zm5-10a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z"></path><path className="" d="M15 16.959h7m-13-10H2m0 10h2m18-10h-2" strokeLinecap="round"></path></g></svg>
</div>
<div className="flex flex-col gap-3 h-full justify-center">

<div className="flex items-center justify-between group cursor-pointer p-2 -mx-2 rounded-lg hover:bg-white/[0.02] transition border border-transparent hover:border-white/5">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-yellow-600/80"></div>
<div>
<p className="text-xs font-medium text-zinc-300 group-hover:text-white transition">Studio Main</p>
<p className="text-[10px] text-zinc-600">80% Brightness</p>
</div>
</div>
<div className="h-1 w-16 bg-zinc-900 rounded-full overflow-hidden border border-white/5">
<div className="h-full w-[80%] bg-yellow-700"></div>
</div>
</div>

<div className="flex items-center justify-between group cursor-pointer p-2 -mx-2 rounded-lg hover:bg-white/[0.02] transition border border-transparent hover:border-white/5">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-zinc-700 border border-zinc-600"></div>
<div className="">
<p className="text-xs font-medium text-zinc-400 group-hover:text-zinc-300 transition">Hallway</p>
<p className="text-[10px] text-zinc-600">Off</p>
</div>
</div>
<div className="toggle-wrapper">
<input className="toggle-input" type="checkbox"/>
<div className="toggle-track">
<div className="toggle-thumb"></div>
</div>
</div>
</div>

<div className="flex items-center justify-between group cursor-pointer p-2 -mx-2 rounded-lg hover:bg-white/[0.02] transition border border-transparent hover:border-white/5">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-yellow-600/60"></div>
<div>
<p className="text-xs font-medium text-zinc-300 group-hover:text-white transition">Kitchen Strip</p>
<p className="text-[10px] text-zinc-600">45% Brightness</p>
</div>
</div>
<div className="h-1 w-16 bg-zinc-900 rounded-full overflow-hidden border border-white/5">
<div className="h-full w-[45%] bg-yellow-700"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

    </>
  );
}
