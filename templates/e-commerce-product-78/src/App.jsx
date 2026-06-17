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



        lucide.createIcons();
    
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
      

<main className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-7 bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-zinc-900/5 overflow-hidden flex flex-col md:flex-row">

<div className="w-full md:w-1/2 bg-zinc-100/50 relative p-8 flex items-center justify-center group">

<div className="relative w-full aspect-[3/4] md:aspect-auto md:h-full flex flex-col items-center justify-center z-10">
<img alt="Headphones" className="object-contain h-64 w-full mix-blend-multiply drop-shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3" src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>

<div className="absolute top-4 left-4 z-20">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white/80 backdrop-blur border border-zinc-200 text-zinc-600 shadow-sm">
                        Best Seller
                    </span>
</div>

<div className="absolute bottom-6 flex gap-2 z-20">
<div className="w-2 h-2 rounded-full bg-zinc-800"></div>
<div className="w-2 h-2 rounded-full bg-zinc-300"></div>
<div className="w-2 h-2 rounded-full bg-zinc-300"></div>
</div>
</div>

<div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-medium text-cyan-600 tracking-wide uppercase">Audio</span>
<div className="flex items-center gap-4 text-zinc-400">
<i className="w-4 h-4 cursor-pointer hover:text-zinc-800 transition-colors" data-lucide="share-2"></i>
<i className="w-4 h-4 cursor-pointer hover:text-red-500 transition-colors" data-lucide="heart"></i>
</div>
</div>
<h1 className="text-2xl tracking-tight font-medium text-zinc-900 leading-tight mb-2">
                        Sony WH-1000XM5 Wireless Noise Canceling Headphones
                    </h1>

<div className="flex items-center gap-1 mb-6">
<div className="flex text-yellow-500">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star-half"></i>
</div>
<span className="text-xs text-cyan-700 font-medium ml-2 hover:underline cursor-pointer">4,289 ratings</span>
</div>

<div className="mb-6">
<div className="flex items-baseline gap-1">
<span className="text-xs text-zinc-500 align-top mt-1">-13%</span>
<span className="text-sm font-medium text-zinc-900 align-top">$</span>
<span className="text-4xl font-medium tracking-tighter text-zinc-900">348</span>
<span className="text-sm font-medium text-zinc-900">00</span>
</div>
<div className="text-xs text-zinc-500 mt-1 line-through">$399.99</div>
<div className="mt-3 flex items-center gap-1.5">
<span className="text-cyan-600 font-semibold italic text-sm tracking-tight">prime</span>
<span className="text-xs text-zinc-500">One-Day</span>
</div>
<div className="text-xs text-zinc-500 mt-1">
                            FREE Returns
                        </div>
</div>

<div className="mb-8">
<span className="text-xs font-medium text-zinc-500 mb-3 block">Color: <span className="text-zinc-900">Silver</span></span>
<div className="flex gap-3">
<button className="w-8 h-8 rounded-full bg-zinc-200 border-2 border-zinc-900 ring-2 ring-offset-2 ring-zinc-100 focus:outline-none"></button>
<button className="w-8 h-8 rounded-full bg-black border border-zinc-200 hover:ring-2 hover:ring-offset-2 hover:ring-zinc-300 transition-all focus:outline-none"></button>
<button className="w-8 h-8 rounded-full bg-blue-900 border border-zinc-200 hover:ring-2 hover:ring-offset-2 hover:ring-zinc-300 transition-all focus:outline-none"></button>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 border-t border-zinc-100 pt-6">
<div>
<span className="block text-xs text-zinc-400 mb-1">Battery</span>
<span className="block text-sm font-medium text-zinc-700">30 Hours</span>
</div>
<div>
<span className="block text-xs text-zinc-400 mb-1">Connectivity</span>
<span className="block text-sm font-medium text-zinc-700">Bluetooth 5.2</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-6">

<div className="bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-zinc-900/5 p-6 relative overflow-hidden">
<div className="flex flex-col gap-4">

<div className="flex items-start gap-3 text-sm">
<i className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" data-lucide="map-pin"></i>
<div className="leading-relaxed">
<span className="text-zinc-500">Deliver to</span>
<span className="font-medium text-zinc-900 cursor-pointer hover:text-cyan-700 transition-colors"> San Francisco 94107</span>
<div className="text-zinc-800 font-medium mt-1">Tomorrow, Nov 14</div>
<div className="text-xs text-zinc-500">Order within <span className="text-green-600 font-medium">4 hrs 22 mins</span></div>
</div>
</div>
<div className="text-xl font-medium tracking-tight text-green-700 mt-2">In Stock</div>

<div className="relative group w-24">
<select className="w-full appearance-none bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm rounded-lg px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all cursor-pointer">
<option>Qty: 1</option>
<option>Qty: 2</option>
<option>Qty: 3</option>
</select>
<i className="absolute right-2.5 top-2.5 w-4 h-4 text-zinc-500 pointer-events-none" data-lucide="chevron-down"></i>
</div>

<div className="flex flex-col gap-3 mt-2">
<button className="w-full bg-yellow-400 hover:bg-yellow-500 text-zinc-900 text-sm font-medium py-3 px-4 rounded-full shadow-sm transition-colors duration-200 flex items-center justify-center gap-2">
                            Add to Cart
                        </button>
<a className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-3 px-4 rounded-full shadow-sm transition-colors duration-200 flex items-center justify-center gap-2 relative overflow-hidden group no-underline" href="https://www.amazon.com/s?k=Sony+WH-1000XM5" rel="noopener noreferrer" target="_blank">
<span className="relative z-10">Buy Now</span>
</a>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-400 mt-2">
<i className="w-3 h-3" data-lucide="lock"></i>
<span>Secure transaction</span>
</div>
<div className="text-xs text-zinc-500 space-y-1 mt-1">
<div className="grid grid-cols-3">
<span className="col-span-1 text-zinc-400">Ships from</span>
<span className="col-span-2">Amazon.com</span>
</div>
<div className="grid grid-cols-3">
<span className="col-span-1 text-zinc-400">Sold by</span>
<span className="col-span-2">Amazon.com</span>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-[28px] blur opacity-50"></div>
<div className="relative metal-card rounded-2xl p-6 text-white overflow-hidden flex flex-col justify-between aspect-[1.586/1] border-t border-white/10">
<div className="noise absolute inset-0 opacity-20"></div>

<div className="relative z-10 flex justify-between items-start">
<div className="flex flex-col">
<span className="text-lg font-medium tracking-tight">Prime Visa</span>
<span className="text-[10px] text-zinc-400 tracking-wider uppercase mt-1">Rewards Signature</span>
</div>
<div className="text-white/90">
<i className="w-6 h-6 rotate-90 opacity-70" data-lucide="wifi"></i>
</div>
</div>

<div className="relative z-10 my-4">
<div className="w-11 h-8 bg-gradient-to-br from-yellow-200/80 to-yellow-500/80 rounded-md border border-yellow-600/30 flex items-center justify-center relative overflow-hidden">
<div className="absolute w-full h-[1px] bg-black/20 top-1/3"></div>
<div className="absolute w-full h-[1px] bg-black/20 bottom-1/3"></div>
<div className="absolute h-full w-[1px] bg-black/20 left-1/3"></div>
<div className="absolute h-full w-[1px] bg-black/20 right-1/3"></div>
</div>
</div>

<div className="relative z-10 mt-auto">
<div className="flex items-center gap-3 text-lg font-mono tracking-widest text-zinc-300 mb-4">
<span>••••</span>
<span>••••</span>
<span>••••</span>
<span className="text-white">4289</span>
</div>
<div className="flex justify-between items-end">
<div className="flex flex-col">
<span className="text-[9px] uppercase tracking-wider text-zinc-400 mb-0.5">Cardholder</span>
<span className="text-sm font-medium tracking-wide">ALEXANDER DOE</span>
</div>
<div className="font-bold italic text-2xl leading-none tracking-tighter opacity-90">VISA</div>
</div>
</div>

<div className="absolute top-0 right-0 p-6 z-0">
<div className="w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
</div>
</div>

<div className="mt-4 px-2">
<div className="flex items-center justify-between text-sm">
<span className="text-zinc-500">Rewards Balance</span>
<span className="font-medium text-zinc-900">$42.50</span>
</div>
<div className="w-full bg-zinc-200 rounded-full h-1.5 mt-2 overflow-hidden">
<div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-1.5 rounded-full w-3/4"></div>
</div>
<p className="text-xs text-zinc-400 mt-2">Earn 5% back on this purchase.</p>
</div>
</div>
</div>
</main>

<div className="fixed top-6 left-6 md:top-8 md:left-8 opacity-40 hover:opacity-100 transition-opacity">
<div className="flex items-start gap-0.5">
<span className="text-xl font-semibold tracking-tighter text-zinc-900">amazon</span>
<div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5"></div>
</div>
</div>


    </>
  );
}
