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
      
<main className="w-full max-w-4xl bg-white shadow-2xl shadow-neutral-200/40 border border-neutral-200/60 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-700 to-neutral-900"></div>
<div className="p-8 sm:p-12 md:p-16">

<div className="flex flex-col sm:flex-row justify-between items-start gap-8">
<div className="flex flex-col">
<div className="flex flex-col">
<span className="text-2xl font-semibold tracking-tighter text-neutral-900 leading-none">TAPPER</span>
<span className="text-xs font-medium tracking-widest text-neutral-400 mt-1 uppercase">Music Group</span>
</div>
<span className="text-sm text-neutral-500 mt-5 hover:text-neutral-700 transition-colors">tappermusicgroup@gmail.com</span>
</div>
<div className="flex flex-col sm:items-end">
<h1 className="text-2xl sm:text-3xl font-semibold tracking-widest text-neutral-300 uppercase">Invoice</h1>
</div>
</div>

<hr className="border-t border-neutral-200/80 my-10 sm:my-14"/>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="flex flex-col">
<span className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-4">Bill To</span>
<span className="text-lg font-medium text-neutral-900 tracking-tight">Dawson Passon</span>
<div className="mt-2 flex items-center gap-2">
<span className="text-xs text-neutral-500">Stage Name:</span>
<span className="text-xs font-medium text-neutral-700 bg-neutral-100/80 border border-neutral-200/60 px-2 py-0.5 rounded-sm tracking-wide">Northside Baby</span>
</div>
</div>

<div className="flex flex-col md:items-end w-full">
<div className="flex flex-col w-full md:w-72 border-t border-neutral-200/80">
<div className="flex justify-between items-center py-3 border-b border-neutral-100">
<span className="text-xs text-neutral-500">Invoice #</span>
<span className="text-xs font-medium text-neutral-900 font-mono tracking-tight">INV-2026-0317</span>
</div>
<div className="flex justify-between items-center py-3 border-b border-neutral-100">
<span className="text-xs text-neutral-500">Issue Date</span>
<span className="text-xs font-medium text-neutral-900">March 31, 2026</span>
</div>
<div className="flex justify-between items-center py-3 border-b border-neutral-100">
<span className="text-xs text-neutral-500">Payment Date</span>
<span className="text-xs font-medium text-neutral-900">March 23, 2026</span>
</div>
</div>
</div>
</div>

<div className="mt-16 sm:mt-20">
<div className="flex justify-between border-b border-neutral-200 pb-3 mb-1">
<span className="text-xs font-medium text-neutral-400 uppercase tracking-widest">Description</span>
<span className="text-xs font-medium text-neutral-400 uppercase tracking-widest text-right">Amount</span>
</div>
<div className="flex justify-between items-center py-4 border-b border-neutral-50 hover:bg-neutral-50/50 transition-colors">
<span className="text-sm text-neutral-600">Music streaming revenue / tour payments</span>
<span className="text-sm font-medium text-neutral-900 tabular-nums">$10,000 CAD</span>
</div>
<div className="flex justify-between items-center py-4 border-b border-neutral-50 hover:bg-neutral-50/50 transition-colors">
<span className="text-sm text-neutral-600">Digital contribution earnings</span>
<span className="text-sm font-medium text-neutral-900 tabular-nums">$500 CAD</span>
</div>
<div className="flex justify-between items-center py-4 border-b border-neutral-50 hover:bg-neutral-50/50 transition-colors">
<span className="text-sm text-neutral-600">Royalties</span>
<span className="text-sm font-medium text-neutral-900 tabular-nums">$1,500 CAD</span>
</div>
</div>

<div className="mt-6 flex justify-end">
<div className="w-full md:w-1/2 bg-neutral-50 border-y border-neutral-200 px-5 py-4 flex justify-between items-center">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Total</span>
<span className="text-xl font-semibold tracking-tight text-neutral-900 tabular-nums">$12,000 CAD</span>
</div>
</div>

<div className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">

<div>
<span className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-5 block">Payment Method</span>
<div className="flex items-start gap-4">
<div className="p-2.5 bg-neutral-50 border border-neutral-200 rounded-md text-neutral-600 flex-shrink-0">
<iconify-icon height="22" icon="solar:bank-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div className="flex flex-col space-y-1.5 text-sm text-neutral-500 mt-1">
<span className="font-medium text-neutral-900">Wire Transfer</span>
<span className="flex gap-2">
<span className="text-neutral-400">Recipient:</span>
<span className="text-neutral-700">Dawson Passon</span>
</span>
<span className="flex gap-2">
<span className="text-neutral-400">Bank:</span>
<span className="text-neutral-700">CIBC</span>
</span>
</div>
</div>
</div>

<div className="flex items-end">
<div className="p-5 bg-neutral-50/50 border border-neutral-100 rounded-sm relative overflow-hidden group">

<div className="absolute top-0 left-0 w-1 h-full bg-amber-700/20"></div>
<p className="text-sm text-neutral-500 italic leading-relaxed pl-2 relative z-10">
                            "This payment represents legitimate earnings from music-related activities including streaming revenue, royalties, and performance income."
                        </p>
</div>
</div>
</div>

<div className="mt-16 sm:mt-24">
<div className="w-full sm:w-64">

<div className="border-b border-neutral-300 pb-1 mb-3 relative h-16 flex items-end">
<span className="font-serif italic text-3xl text-neutral-800 opacity-90 tracking-tight" style={{fontFamily: '\'Georgia\', serif', transform: 'rotate(-2deg)', display: 'inline-block'}}>
                            Brad Tapper
                        </span>
</div>
<div className="flex flex-col space-y-0.5 text-sm">
<span className="font-medium text-neutral-900">Brad Tapper</span>
<span className="text-neutral-500">Artist Manager</span>
<span className="text-neutral-400 text-xs mt-1">Tapper Music Group</span>
</div>
</div>
</div>

<div className="mt-20 pt-8 border-t border-neutral-100 flex justify-center">
<span className="text-xs font-medium text-neutral-400 tracking-wide hover:text-neutral-600 transition-colors cursor-pointer">tappermusicgroup@gmail.com</span>
</div>
</div>
</main>

    </>
  );
}
