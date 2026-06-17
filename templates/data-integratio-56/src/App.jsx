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
      

<header className="flex lg:px-12 border-white/[0.06] sticky bg-white/50 w-full z-50 border-b pt-6 pr-6 pb-6 pl-6 top-0 backdrop-blur-sm items-center justify-between">
<div className="flex items-center gap-4">

<a className="group flex items-center gap-1" href="#">
<span className="font-medium text-xl tracking-tighter group-hover:text-zinc-200 transition-colors text-black">Desmedia</span>
<div className="h-1.5 w-1.5 rounded-full bg-indigo-500 ml-0.5"></div>
</a>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm font-normal tracking-tight">
<a className="transition-colors text-zinc-600 hover:text-black" href="#">Work</a>
<a className="transition-colors text-zinc-600 hover:text-black" href="#">Studio</a>
<a className="transition-colors text-zinc-600 hover:text-black" href="#">Contact</a>
</nav>
<div className="flex items-center gap-3">
<button className="transition-colors text-zinc-600 hover:text-black">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
<div className="h-4 w-[1px] bg-black/10"></div>
<button className="transition-colors text-zinc-600 hover:text-black">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</header>

<main className="flex-grow flex flex-col items-center justify-start pt-16 pb-24 px-4 sm:px-6 relative">

<div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '60px 60px', maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'}}></div>

<div className="z-10 text-center mb-16 max-w-2xl animate-enter">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-transparent bg-clip-text bg-gradient-to-b to-zinc-500 tracking-tighter mb-4 from-black via-black">
                Architecture for data.
            </h1>
<p className="text-lg text-zinc-500 font-normal tracking-tight">
                Secure electronic data interchange infrastructure.
            </p>
</div>

<div className="w-full max-w-4xl backdrop-blur-xl border border-white/[0.08] rounded-2xl shadow-2xl overflow-hidden z-10 animate-enter bg-zinc-50/80 shadow-white/80" style={{animationDelay: '0.1s'}}>

<div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06] bg-white/[0.02]">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-gradient-to-tr flex items-center justify-center shadow-inner border from-zinc-200 to-zinc-300 border-black/10">
<span className="font-semibold text-xs tracking-tighter text-black">E</span>
</div>
<div>
<h2 className="text-sm font-medium tracking-tight text-black">Edicom</h2>
<p className="text-xs text-zinc-500 tracking-tight">Global Integration Platform</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-600"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs text-emerald-500 font-medium tracking-tight pr-2">System Operational</span>
<button className="p-1.5 rounded-md transition-colors hover:bg-black/5 text-zinc-600 hover:text-black">
<iconify-icon icon="solar:settings-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">

<div className="p-6 space-y-6">
<h3 className="text-xs font-medium uppercase tracking-widest text-zinc-600">Active Nodes</h3>
<div className="space-y-4">

<div className="group flex items-center justify-between p-3 rounded-lg border border-white/[0.04] transition-all cursor-default bg-zinc-100/40 hover:bg-zinc-100/80 hover:border-black/10">
<div className="flex items-center gap-3">
<div className="p-1.5 rounded-md bg-blue-500/10 text-blue-600">
<iconify-icon icon="solar:server-square-linear" width="18"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-800">AS2 Gateway</span>
<span className="text-xs text-zinc-400">us-east-1</span>
</div>
</div>
<div className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
</div>

<div className="group flex items-center justify-between p-3 rounded-lg border border-white/[0.04] transition-all cursor-default bg-zinc-100/40 hover:bg-zinc-100/80 hover:border-black/10">
<div className="flex items-center gap-3">
<div className="p-1.5 rounded-md bg-blue-500/10 text-blue-600">
<iconify-icon icon="solar:cloud-storage-linear" width="18"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-800">Archive Node</span>
<span className="text-xs text-zinc-400">eu-central-1</span>
</div>
</div>
<div className="h-1.5 w-1.5 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.5)] bg-blue-500"></div>
</div>
</div>
<button className="w-full py-2 rounded-md border border-dashed text-xs text-zinc-500 hover:bg-white/[0.02] transition-all flex items-center justify-center gap-2 border-black/10 hover:text-zinc-700 hover:border-black/20">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
                        Add Connection
                    </button>
</div>

<div className="p-6 col-span-1 md:col-span-2 bg-gradient-to-b from-transparent to-zinc-100/20">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xs font-medium uppercase tracking-widest text-zinc-600">EDI Traffic</h3>
<div className="flex gap-2">
<span className="text-xs px-2 py-1 rounded-md border bg-black/5 text-zinc-700 border-black/5">24h</span>
<span className="text-xs px-2 py-1 rounded-md cursor-pointer text-zinc-400 hover:text-zinc-600">7d</span>
</div>
</div>

<div className="h-24 w-full flex items-end gap-1.5 mb-8 px-1">

<div className="flex-1 rounded-sm h-[30%] transition-all bg-zinc-200/50 hover:bg-zinc-300/80"></div>
<div className="flex-1 rounded-sm h-[45%] transition-all bg-zinc-200/50 hover:bg-zinc-300/80"></div>
<div className="flex-1 rounded-sm h-[25%] transition-all bg-zinc-200/50 hover:bg-zinc-300/80"></div>
<div className="flex-1 rounded-sm h-[60%] transition-all bg-zinc-200/50 hover:bg-zinc-300/80"></div>
<div className="flex-1 rounded-sm h-[85%] transition-all bg-zinc-200/50 hover:bg-zinc-300/80"></div>
<div className="flex-1 rounded-sm h-[50%] transition-all bg-zinc-200/50 hover:bg-zinc-300/80"></div>
<div className="flex-1 rounded-sm h-[70%] transition-all bg-zinc-200/50 hover:bg-zinc-300/80"></div>
<div className="flex-1 rounded-sm h-[65%] shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-all relative group bg-black hover:bg-zinc-800">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border bg-zinc-200 text-black border-black/10">1,240 msg</div>
</div>
<div className="flex-1 rounded-sm h-[40%] transition-all bg-zinc-200/50 hover:bg-zinc-300/80"></div>
<div className="flex-1 rounded-sm h-[55%] transition-all bg-zinc-200/50 hover:bg-zinc-300/80"></div>
</div>

<div className="space-y-0.5">
<div className="grid grid-cols-12 gap-4 px-3 py-2 text-[10px] font-medium uppercase tracking-wider text-zinc-400">
<div className="col-span-5">File Type</div>
<div className="col-span-3">Status</div>
<div className="col-span-4 text-right">Time</div>
</div>

<div className="grid grid-cols-12 gap-4 px-3 py-2.5 rounded-md hover:bg-white/[0.03] transition-colors items-center border border-transparent hover:border-white/[0.02]">
<div className="col-span-5 flex items-center gap-3">
<iconify-icon className="text-zinc-500" icon="solar:file-text-linear"></iconify-icon>
<span className="text-sm font-medium text-zinc-700">INVOIC_D96A</span>
</div>
<div className="col-span-3">
<span className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-600">
<iconify-icon icon="solar:check-circle-linear" width="12"></iconify-icon> Sent
                                </span>
</div>
<div className="col-span-4 text-right text-xs text-zinc-500 font-mono">10:42:15</div>
</div>

<div className="grid grid-cols-12 gap-4 px-3 py-2.5 rounded-md hover:bg-white/[0.03] transition-colors items-center border border-transparent hover:border-white/[0.02]">
<div className="col-span-5 flex items-center gap-3">
<iconify-icon className="text-zinc-500" icon="solar:bill-list-linear"></iconify-icon>
<span className="text-sm font-medium text-zinc-700">ORDERS_D01B</span>
</div>
<div className="col-span-3">
<span className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium bg-amber-500/10 border border-amber-500/20 text-amber-600">
<iconify-icon icon="solar:clock-circle-linear" width="12"></iconify-icon> Queued
                                </span>
</div>
<div className="col-span-4 text-right text-xs text-zinc-500 font-mono">10:41:03</div>
</div>

<div className="grid grid-cols-12 gap-4 px-3 py-2.5 rounded-md hover:bg-white/[0.03] transition-colors items-center border border-transparent hover:border-white/[0.02]">
<div className="col-span-5 flex items-center gap-3">
<iconify-icon className="text-zinc-500" icon="solar:box-linear"></iconify-icon>
<span className="text-sm font-medium text-zinc-700">DESADV_D96A</span>
</div>
<div className="col-span-3">
<span className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-600">
<iconify-icon icon="solar:check-circle-linear" width="12"></iconify-icon> Sent
                                </span>
</div>
<div className="col-span-4 text-right text-xs text-zinc-500 font-mono">10:38:55</div>
</div>
</div>
</div>
</div>

<div className="px-6 py-3 border-t border-white/[0.06] flex items-center justify-between text-xs bg-zinc-50">
<div className="flex items-center gap-4">
<label className="flex items-center gap-2 cursor-pointer group">
<div className="relative">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-8 h-4 rounded-full peer-checked:bg-indigo-600 transition-colors bg-zinc-200"></div>
<div className="absolute left-0.5 top-0.5 w-3 h-3 rounded-full transition-transform peer-checked:translate-x-4 bg-black"></div>
</div>
<span className="text-zinc-500 group-hover:text-zinc-300 transition-colors">Auto-Sign</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<div className="relative">
<input className="sr-only peer" type="checkbox"/>
<div className="w-8 h-4 rounded-full peer-checked:bg-indigo-600 transition-colors bg-zinc-200"></div>
<div className="absolute left-0.5 top-0.5 w-3 h-3 rounded-full transition-transform peer-checked:translate-x-4 bg-black"></div>
</div>
<span className="text-zinc-500 group-hover:text-zinc-300 transition-colors">Debug Mode</span>
</label>
</div>
<div className="flex items-center gap-2 font-mono text-zinc-400">
<iconify-icon icon="solar:shield-keyhole-linear" width="12"></iconify-icon>
<span>TLS 1.3 Encrypted</span>
</div>
</div>
</div>
</main>

    </>
  );
}
