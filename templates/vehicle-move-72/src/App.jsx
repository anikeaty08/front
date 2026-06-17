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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
paper: '#ffffff',
ink: {
50: '#f9f9f9',
100: '#ececec',
200: '#e3e3e3',
300: '#cdcdcd',
400: '#b4b4b4',
500: '#9b9b9b',
600: '#676767',
700: '#424242',
800: '#2d2d2d',
900: '#111111',
}
},
boxShadow: {
'paper': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0,0,0,0.02)',
}
}
}
}

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
      

<div className="relative w-full max-w-xl bg-paper shadow-paper min-h-[850px] flex flex-col overflow-hidden">

<div className="texture-noise absolute inset-0 z-0"></div>

<div className="relative z-10 p-8 md:p-12 flex flex-col h-full">

<div className="flex justify-between items-start mb-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-ink-900 text-white flex items-center justify-center rounded-md shadow-sm">
<iconify-icon className="text-xl" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<div>
<h1 className="text-sm font-semibold tracking-tight leading-none">NMEX Authority</h1>
<p className="text-[0.6rem] uppercase tracking-wider text-ink-500 mt-1 font-medium">Secured Facility • NM-404</p>
</div>
</div>
<div className="text-right">
<div className="inline-flex items-center gap-2 border border-ink-200 bg-ink-50 px-3 py-1 rounded-full">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs font-mono font-medium text-ink-600 tracking-tight">Active Ticket</span>
</div>
</div>
</div>

<header className="border-b border-ink-100 pb-8 mb-8">
<div className="flex flex-col gap-6">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-ink-900">Vehicle Move-Out Manifest</h2>
<p className="text-sm text-ink-500 mt-1">Authorized internal release document for heavy vehicle transport.</p>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-ink-50 rounded-lg border border-ink-100/50">
<div className="flex flex-col gap-1">
<span className="text-[0.6rem] uppercase tracking-widest text-ink-400 font-medium">Date</span>
<span className="text-xs font-mono font-medium">OCT 24, 2023</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-[0.6rem] uppercase tracking-widest text-ink-400 font-medium">Time</span>
<span className="text-xs font-mono font-medium">08:45 AM</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-[0.6rem] uppercase tracking-widest text-ink-400 font-medium">Ref ID</span>
<span className="text-xs font-mono font-medium">#884-2B</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-[0.6rem] uppercase tracking-widest text-ink-400 font-medium">Gate</span>
<span className="text-xs font-mono font-medium">NORTH-04</span>
</div>
</div>
</div>
</header>

<main className="flex-grow">
<div className="flex items-center justify-between mb-4">
<h3 className="text-xs font-semibold uppercase tracking-widest text-ink-900">Inspection &amp; Fees</h3>
<span className="text-xs text-ink-400">Step 3 of 4</span>
</div>
<div className="border border-ink-200 rounded-lg overflow-hidden">

<div className="bg-ink-50 border-b border-ink-200 grid grid-cols-12 gap-4 px-4 py-2 text-[0.6rem] uppercase tracking-widest font-medium text-ink-500">
<div className="col-span-1 text-center">Stat</div>
<div className="col-span-8">Item Description</div>
<div className="col-span-3 text-right">Value/Code</div>
</div>

<div className="grid grid-cols-12 gap-4 px-4 py-3 border-b border-ink-100 items-center hover:bg-ink-50/50 transition-colors">
<div className="col-span-1 flex justify-center">
<div className="text-emerald-600 flex items-center"><iconify-icon className="text-base" icon="solar:check-circle-bold"></iconify-icon></div>
</div>
<div className="col-span-8 text-xs font-medium text-ink-700">Driver Identification Verified</div>
<div className="col-span-3 text-right font-mono text-xs text-ink-400">DL-9942</div>
</div>

<div className="grid grid-cols-12 gap-4 px-4 py-3 border-b border-ink-100 items-center hover:bg-ink-50/50 transition-colors">
<div className="col-span-1 flex justify-center">
<div className="text-emerald-600 flex items-center"><iconify-icon className="text-base" icon="solar:check-circle-bold"></iconify-icon></div>
</div>
<div className="col-span-8 text-xs font-medium text-ink-700">Release Authority Code</div>
<div className="col-span-3 text-right font-mono text-xs text-ink-400">AUTH-OK</div>
</div>

<div className="grid grid-cols-12 gap-4 px-4 py-4 border-b border-ink-100 items-center bg-yellow-50/30">
<div className="col-span-1 flex justify-center">
<input className="checkbox-custom cursor-pointer" type="checkbox"/>
</div>
<div className="col-span-8 flex flex-col justify-center">
<span className="text-sm font-semibold text-ink-900 tracking-tight">Move-Out Ticket Fee</span>
<span className="text-[0.65rem] text-ink-500 mt-0.5">Standard yard exit processing fee</span>
</div>
<div className="col-span-3 text-right">
<span className="font-mono text-sm font-semibold text-ink-900">$500.00</span>
</div>
</div>

<div className="grid grid-cols-12 gap-4 px-4 py-3 border-b border-ink-100 items-center opacity-60">
<div className="col-span-1 flex justify-center">
<input className="checkbox-custom" disabled="" type="checkbox"/>
</div>
<div className="col-span-8 text-xs font-medium text-ink-700">Final Safety Inspection</div>
<div className="col-span-3 text-right font-mono text-xs text-ink-300">WAITING</div>
</div>

<div className="grid grid-cols-12 gap-4 px-4 py-3 items-center opacity-60">
<div className="col-span-1 flex justify-center">
<input className="checkbox-custom" disabled="" type="checkbox"/>
</div>
<div className="col-span-8 text-xs font-medium text-ink-700">Vehicle Release Gate Pass</div>
<div className="col-span-3 text-right font-mono text-xs text-ink-300">PENDING</div>
</div>
</div>

<div className="flex justify-end mt-6">
<div className="w-full sm:w-1/2 bg-ink-900 rounded-lg p-4 text-white flex justify-between items-center shadow-lg shadow-ink-200">
<div className="flex flex-col">
<span className="text-[0.6rem] uppercase tracking-widest text-ink-300">Total Outstanding</span>
<span className="text-xs text-ink-400 mt-0.5">Due before exit</span>
</div>
<span className="text-2xl font-mono font-medium tracking-tight">$500.00</span>
</div>
</div>
</main>

<footer className="mt-12 pt-8 border-t border-dashed border-ink-300 relative">

<div className="absolute -top-3 left-0 right-0 flex justify-center">
<div className="bg-paper px-2 text-ink-400">
<iconify-icon className="rotate-90 text-sm" icon="solar:scissors-linear"></iconify-icon>
</div>
</div>
<div className="flex flex-col sm:flex-row justify-between items-end gap-8">

<div className="flex gap-8">
<div className="flex flex-col gap-2">
<div className="w-32 h-10 border-b border-ink-300 flex items-end pb-1">
<span className="font-mono text-sm text-ink-600 italic">J.Miller</span>
</div>
<span className="text-[0.6rem] uppercase tracking-widest text-ink-400 font-medium">Gate Officer</span>
</div>
<div className="flex flex-col gap-2">
<div className="w-32 h-10 border-b border-ink-300"></div>
<span className="text-[0.6rem] uppercase tracking-widest text-ink-400 font-medium">Driver Sign</span>
</div>
</div>

<div className="text-right">
<div className="flex items-end gap-0.5 h-10 justify-end opacity-80 mb-1">
<div className="w-1 h-full bg-ink-900"></div>
<div className="w-px h-full bg-ink-900"></div>
<div className="w-0.5 h-full bg-ink-900"></div>
<div className="w-2 h-full bg-ink-900"></div>
<div className="w-px h-full bg-ink-900"></div>
<div className="w-1 h-full bg-ink-900"></div>
<div className="w-3 h-full bg-ink-900"></div>
<div className="w-px h-full bg-ink-900"></div>
<div className="w-0.5 h-full bg-ink-900"></div>
<div className="w-4 h-full bg-ink-900"></div>
<div className="w-1 h-full bg-ink-900"></div>
<div className="w-px h-full bg-ink-900"></div>
</div>
<span className="font-mono text-[0.6rem] tracking-[0.2em] text-ink-400">NMX-5877-ALBQ</span>
</div>
</div>
</footer>
</div>

<div className="absolute top-[220px] right-8 pointer-events-none opacity-80 mix-blend-multiply stamp-rotate -rotate-12">
<div className="border-[3px] border-red-800 rounded px-3 py-1 text-red-900 flex flex-col items-center">
<span className="text-[0.6rem] font-bold uppercase tracking-widest leading-none mb-0.5">Status</span>
<span className="text-xl font-black uppercase tracking-tighter leading-none">Pending</span>
<span className="text-[0.5rem] font-mono mt-0.5">WAITING PAYMENT</span>
</div>
</div>
</div>

    </>
  );
}
