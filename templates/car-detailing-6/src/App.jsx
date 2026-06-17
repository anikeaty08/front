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
      

<main className="w-full max-w-5xl relative group">

<div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none opacity-50"></div>
<div className="absolute -bottom-20 -left-20 w-80 h-80 bg-neutral-700/10 rounded-full blur-3xl pointer-events-none opacity-50"></div>

<div className="relative bg-neutral-900/60 backdrop-blur-2xl border border-neutral-800 rounded-[2.5rem] shadow-xl overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

<div className="lg:col-span-5 p-8 md:p-12 lg:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-neutral-800 bg-neutral-900/40">
<div>

<div className="mb-12">
<span className="font-heading font-medium tracking-tighter text-2xl text-white">PURE.</span>
</div>

<h1 className="font-heading font-light text-5xl md:text-6xl tracking-tight text-white mb-6 leading-[1.1]">
<span className="animate-word delay-1">Beyond</span>
<span className="animate-word delay-2">Showroom</span>
<span className="animate-word delay-3 text-blue-500">Standard</span>
</h1>
<p className="text-lg text-neutral-400 font-light leading-relaxed max-w-sm animate-word delay-4">
                            Precision detailing that restores, protects, and elevates your vehicle's aesthetic.
                        </p>
</div>

<div className="mt-12 lg:mt-0 pt-8">
<button className="group flex items-center gap-3 text-white font-medium text-sm transition-all duration-300 hover:text-blue-400">
<span>Book Consultation</span>
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
</button>
</div>
</div>

<div className="lg:col-span-7 p-6 md:p-10 lg:p-14 flex flex-col justify-center">
<div className="space-y-4">

<div className="group relative p-6 rounded-3xl bg-neutral-800/20 border border-neutral-800/50 hover:bg-neutral-800/40 hover:border-neutral-700 transition-all duration-500 ease-out cursor-default overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative flex items-start gap-6">
<div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-blue-500 shadow-sm group-hover:scale-110 transition-transform duration-500 ease-out">
<iconify-icon icon="solar:shield-star-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex-1 pt-1">
<h3 className="font-heading text-xl text-white font-light tracking-tight mb-2 group-hover:text-blue-100 transition-colors">Ceramic Coating</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-light">Nano-ceramic protection providing 9H hardness, extreme gloss, and hydrophobicity for up to 5 years.</p>
</div>
<div className="flex-shrink-0 self-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-75">
<iconify-icon className="text-neutral-600" icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="group relative p-6 rounded-3xl bg-neutral-800/20 border border-neutral-800/50 hover:bg-neutral-800/40 hover:border-neutral-700 transition-all duration-500 ease-out cursor-default overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative flex items-start gap-6">
<div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-blue-500 shadow-sm group-hover:scale-110 transition-transform duration-500 ease-out">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex-1 pt-1">
<h3 className="font-heading text-xl text-white font-light tracking-tight mb-2 group-hover:text-blue-100 transition-colors">Paint Correction</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-light">Multi-stage machine polishing to permanently remove swirls, scratches, and oxidation.</p>
</div>
<div className="flex-shrink-0 self-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-75">
<iconify-icon className="text-neutral-600" icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="group relative p-6 rounded-3xl bg-neutral-800/20 border border-neutral-800/50 hover:bg-neutral-800/40 hover:border-neutral-700 transition-all duration-500 ease-out cursor-default overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative flex items-start gap-6">
<div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-blue-500 shadow-sm group-hover:scale-110 transition-transform duration-500 ease-out">
<iconify-icon icon="solar:armchair-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex-1 pt-1">
<h3 className="font-heading text-xl text-white font-light tracking-tight mb-2 group-hover:text-blue-100 transition-colors">Interior Restoration</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-light">Deep steam cleaning, leather conditioning, and UV protection for a factory-fresh cabin.</p>
</div>
<div className="flex-shrink-0 self-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-75">
<iconify-icon className="text-neutral-600" icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="h-1.5 w-full bg-neutral-800/50 flex">
<div className="h-full w-1/3 bg-blue-500/50"></div>
<div className="h-full w-1/3 bg-neutral-700/30"></div>
<div className="h-full w-1/3 bg-neutral-800/30"></div>
</div>
</div>

<div className="fixed top-1/4 left-1/4 w-32 h-32 bg-blue-400/20 blur-[100px] pointer-events-none z-[-1]"></div>
</main>

    </>
  );
}
