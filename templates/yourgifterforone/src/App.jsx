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
      

<aside className="hidden md:flex w-72 flex-col border-r border-gray-200 bg-[#FAFAFA] h-full">
<div className="p-5 flex items-center gap-3">
<div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white shadow-sm">
<span className="font-semibold tracking-tighter text-sm">YG</span>
</div>
<span className="font-medium tracking-tight text-sm text-gray-900">YourGifter</span>
</div>
<div className="px-3 py-2">
<button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200 group">
<iconify-icon className="text-lg opacity-70 group-hover:opacity-100" icon="solar:add-circle-linear"></iconify-icon>
<span>New Gift Search</span>
</button>
</div>
<div className="flex-1 overflow-y-auto px-3 py-2 space-y-1">
<div className="px-3 py-2 text-xs font-medium text-gray-400 uppercase tracking-wider">History</div>
<a className="flex items-center gap-3 text-sm text-gray-700 bg-white border-gray-200 border rounded-md pt-2 pr-3 pb-2 pl-3 shadow-sm" href="#">
<iconify-icon className="text-gray-500" icon="solar:camera-linear"></iconify-icon>
<span className="truncate">Anniversary - Photography</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 rounded-md transition-colors" href="#">
<iconify-icon className="text-gray-400" icon="solar:gift-linear"></iconify-icon>
<span className="truncate">Dad's 60th - Gardening</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 rounded-md transition-colors" href="#">
<iconify-icon className="text-gray-400" icon="solar:gift-linear"></iconify-icon>
<span className="truncate">Secret Santa - Office</span>
</a>
</div>
<div className="p-4 border-t border-gray-200">
<div className="flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-200 to-gray-300"></div>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Alex M.</span>
<span className="text-xs text-gray-500">Free Plan</span>
</div>
<iconify-icon className="ml-auto text-gray-400 hover:text-gray-600 cursor-pointer text-lg" icon="solar:settings-linear"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative bg-white md:bg-[#F7F7F8]">

<header className="md:hidden flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-white sticky top-0 z-10">
<div className="flex items-center gap-2">
<div className="w-7 h-7 bg-black rounded-md flex items-center justify-center text-white shadow-sm">
<span className="font-semibold tracking-tighter text-xs">YG</span>
</div>
<span className="font-medium tracking-tight text-sm">YourGifter</span>
</div>
<iconify-icon className="text-xl text-gray-600" icon="solar:hamburger-menu-linear"></iconify-icon>
</header>

<div className="flex-1 overflow-y-auto scrollbar-hide md:p-8 w-full max-w-4xl mr-auto ml-auto pt-4 pr-4 pb-32 pl-4 space-y-8">

<div className="flex gap-4 animate-enter" style={{animationDelay: '0s'}}>
<div className="w-8 h-8 rounded-full bg-black flex-shrink-0 flex items-center justify-center text-white shadow-sm mt-1">
<iconify-icon className="text-lg" icon="solar:stars-minimalistic-linear"></iconify-icon>
</div>
<div className="space-y-2 max-w-2xl">
<div className="text-sm text-gray-800 leading-relaxed">
                        Hi Alex! I can help you find something special. Who are we shopping for today?
                    </div>
</div>
</div>

<div className="flex gap-4 flex-row-reverse animate-enter" style={{animationDelay: '0.1s'}}>
<div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0 mt-1"></div>
<div className="space-y-2 max-w-2xl">
<div className="bg-gray-100 text-gray-900 px-4 py-2.5 rounded-2xl rounded-tr-sm text-sm leading-relaxed shadow-sm">
                        For my girlfriend. She loves photography and traveling. It's our Anniversary, budget is around $200.
                    </div>
</div>
</div>

<div className="flex gap-4 animate-enter" style={{animationDelay: '0.2s'}}>
<div className="w-8 h-8 rounded-full bg-black flex-shrink-0 flex items-center justify-center text-white shadow-sm mt-1">
<iconify-icon className="text-lg" icon="solar:stars-minimalistic-linear"></iconify-icon>
</div>
<div className="space-y-5 max-w-2xl w-full">
<div className="text-sm text-gray-800 leading-relaxed">
                        Got it. For a travel-photographer girlfriend with a $200 budget, I've curated three distinct paths: a <span className="font-medium text-gray-900">curated bundle</span>, a <span className="font-medium text-gray-900">personalized keepsake</span>, and a <span className="font-medium text-gray-900">last-minute option</span> available locally.
                    </div>

<div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm group hover:shadow-md transition-shadow">
<div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-500" icon="solar:box-minimalistic-linear"></iconify-icon>
<span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">The "Memory Maker" Bundle</span>
</div>
<span className="text-xs font-medium text-gray-900">$185 Total</span>
</div>
<div className="p-4 flex gap-4">
<div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center">
<iconify-icon className="text-2xl text-gray-400" icon="solar:camera-linear"></iconify-icon>
</div>
<div className="flex-1 space-y-1">
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium text-gray-900">Fujifilm Instax Mini Evo + Leather Album</h3>
<span className="px-2 py-0.5 bg-yellow-50 text-yellow-700 text-[10px] font-medium rounded-full border border-yellow-100">Amazon</span>
</div>
<p className="text-xs text-gray-500 leading-relaxed">Hybrid instant camera perfect for travel. Pair it with a high-quality leather album for her shots.</p>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm group hover:shadow-md transition-shadow">
<div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="solar:pen-new-square-linear"></iconify-icon>
<span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Personalized Keepsake</span>
</div>
<span className="text-xs font-medium text-gray-900">$120</span>
</div>
<div className="p-4 flex gap-4">
<div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center">
<iconify-icon className="text-2xl text-gray-400" icon="solar:bag-3-linear"></iconify-icon>
</div>
<div className="flex-1 space-y-2">
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium text-gray-900">Handcrafted Leather Camera Strap</h3>
<span className="px-2 py-0.5 bg-orange-50 text-orange-700 text-[10px] font-medium rounded-full border border-orange-100">Etsy</span>
</div>
<p className="text-xs text-gray-500 leading-relaxed">Italian leather with her initials embossed.</p>
<div className="flex items-start gap-2 p-2 bg-orange-50/50 rounded-md border border-orange-100/50">
<iconify-icon className="text-orange-500 text-sm mt-0.5" icon="solar:idea-linear"></iconify-icon>
<span className="text-xs text-orange-800">
<span className="font-medium">Idea:</span> Engrave the coordinates of your first trip together instead of just initials.
                                    </span>
</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm group hover:shadow-md transition-shadow">
<div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:clock-circle-linear"></iconify-icon>
<span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Last-Minute / Same Day</span>
</div>
<span className="text-xs font-medium text-gray-900">$150</span>
</div>
<div className="p-4 flex gap-4">
<div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center">
<iconify-icon className="text-2xl text-gray-400" icon="solar:printer-linear"></iconify-icon>
</div>
<div className="flex-1 space-y-1">
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium text-gray-900">Canon Ivy 2 Mini Photo Printer</h3>
<div className="flex gap-1">
<span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-medium rounded-full border border-blue-100">Best Buy</span>
<span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] font-medium rounded-full border border-gray-200">Local</span>
</div>
</div>
<p className="text-xs text-gray-500 leading-relaxed">Available for pickup today at 3 local stores. Prints travel stickers directly from her phone.</p>
</div>
</div>
</div>
<div className="flex gap-2 pt-1">
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-xs font-medium hover:bg-white hover:shadow-sm transition-all text-gray-600 bg-gray-50">
<iconify-icon icon="solar:cart-large-linear"></iconify-icon>
                            Where to buy the strap?
                        </button>
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-xs font-medium hover:bg-white hover:shadow-sm transition-all text-gray-600 bg-gray-50">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon>
                            Create a different bundle
                        </button>
</div>
</div>
</div>

<div className="flex gap-4 opacity-0 hidden">
<div className="w-8 h-8 rounded-full bg-black flex-shrink-0 flex items-center justify-center text-white shadow-sm mt-1">
<iconify-icon className="text-lg" icon="solar:stars-minimalistic-linear"></iconify-icon>
</div>
<div className="bg-white border border-gray-100 shadow-sm px-4 py-3 rounded-2xl rounded-tl-sm inline-flex items-center gap-1 h-10">
<div className="w-1.5 h-1.5 bg-gray-400 rounded-full typing-dot"></div>
<div className="w-1.5 h-1.5 bg-gray-400 rounded-full typing-dot"></div>
<div className="w-1.5 h-1.5 bg-gray-400 rounded-full typing-dot"></div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full p-4 md:p-6 bg-gradient-to-t from-white via-white to-transparent">
<div className="max-w-3xl mx-auto relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl opacity-50 group-hover:opacity-100 transition duration-500 blur-sm"></div>
<div className="relative flex items-end gap-2 bg-white rounded-xl shadow-lg border border-gray-200 p-2">
<button className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-50">
<iconify-icon className="text-xl" icon="solar:add-square-linear"></iconify-icon>
</button>
<textarea className="w-full bg-transparent text-sm text-gray-900 placeholder-gray-400 focus:outline-none py-2.5 resize-none overflow-hidden max-h-32" placeholder="Reply to YourGifter..." rows="1" style={{minHeight: '44px'}}></textarea>
<div className="flex items-center gap-1 pb-1">
<button className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-50" title="Voice Input">
<iconify-icon className="text-xl" icon="solar:microphone-linear"></iconify-icon>
</button>
<button className="p-2 bg-gray-900 text-white rounded-lg hover:bg-black transition-colors shadow-md flex items-center justify-center w-9 h-9">
<iconify-icon className="text-lg" icon="solar:arrow-up-linear"></iconify-icon>
</button>
</div>
</div>
<div className="text-center mt-3">
<p className="text-[10px] text-gray-400">AI can make mistakes. Please verify product availability.</p>
</div>
</div>
</div>
</main>

    </>
  );
}
