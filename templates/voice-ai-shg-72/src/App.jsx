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
      

<header className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur-md border-b border-stone-200/60">
<div className="max-w-md mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-amber-950">
<iconify-icon icon="lucide:sparkles" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<h1 className="text-xl font-medium tracking-tight text-stone-900">Badi Di</h1>
</div>
<button className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 active:scale-95 transition-transform">
<iconify-icon icon="lucide:bell" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</header>
<main className="max-w-md mx-auto px-6 pt-6 space-y-10">

<section className="space-y-4">
<div className="space-y-2">
<h2 className="text-3xl font-medium tracking-tight text-stone-900 leading-[1.15]">
                    Namaste! <br/>
<span className="text-stone-500">Aaj hum kya seekhenge?</span>
</h2>
</div>

<div className="relative w-full aspect-[4/3.2] bg-amber-100 rounded-3xl overflow-hidden shadow-sm border border-stone-100 group">

<img alt="SHG Women Meeting" className="absolute inset-0 w-full h-full object-cover opacity-95 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 image-overlay"></div>

<div className="absolute bottom-5 left-5 text-white/95">
<p className="text-xs font-medium uppercase tracking-wider opacity-90 mb-1 shadow-black/10">Voice Assistant</p>
<p className="text-sm font-medium leading-snug drop-shadow-md">"Loan ke liye apply kaise karein?"</p>
</div>

<div className="absolute bottom-4 right-4">
<button className="relative flex items-center justify-center w-16 h-16 rounded-full bg-amber-400 shadow-lg shadow-amber-900/30 active:scale-95 transition-all duration-300">

<span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-30 animate-ping"></span>
<iconify-icon className="text-amber-950 relative z-10" icon="lucide:mic" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>
</div>
</section>

<section id="meetings">
<div className="flex items-center justify-between mb-4">
<h3 className="text-xl font-medium tracking-tight text-stone-900">Aaj ki Meeting</h3>
<button className="text-amber-700 text-sm font-medium flex items-center gap-1 hover:text-amber-800 transition-colors">
                    Sab Dekhein <iconify-icon icon="lucide:chevron-right" width="14"></iconify-icon>
</button>
</div>

<div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm relative overflow-hidden group active:border-amber-400 transition-colors">
<div className="absolute top-0 left-0 w-1.5 h-full bg-amber-400"></div>
<div className="flex justify-between items-start mb-3">
<div className="pl-2">
<span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-1 rounded-md border border-amber-100">Bachat &amp; Loan</span>
<h4 className="text-lg font-medium text-stone-900 mt-2">SHG Weekly Meeting</h4>
</div>
<div className="text-center bg-stone-50 rounded-lg p-2 border border-stone-100 min-w-[3.5rem]">
<span className="block text-xs text-stone-500 uppercase tracking-wide">Oct</span>
<span className="block text-xl font-medium text-stone-900">24</span>
</div>
</div>
<div className="flex items-center gap-4 text-stone-500 text-sm mb-4 pl-2">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-stone-400" icon="lucide:clock" width="16"></iconify-icon>
<span>2:00 PM</span>
</div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-stone-400" icon="lucide:map-pin" width="16"></iconify-icon>
<span>Panchayat Hall</span>
</div>
</div>
<div className="pl-2">
<button className="w-full py-3 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 hover:border-amber-200 flex items-center justify-center gap-2 text-stone-700 transition-colors">
<iconify-icon className="text-amber-600" icon="lucide:play-circle" width="20"></iconify-icon>
<span className="font-medium text-sm">Summary Suno</span>
</button>
</div>
</div>
</section>

<section id="schemes">
<h3 className="text-xl font-medium tracking-tight text-stone-900 mb-4">Sarkari Yojana</h3>
<div className="space-y-4">

<div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm flex flex-col gap-3 group hover:border-green-200 transition-colors">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 text-green-700 border border-green-100">
<iconify-icon icon="lucide:sprout" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-stone-900 leading-snug">Lakhpati Didi Yojana</h4>
<p className="text-stone-500 text-sm mt-1 leading-relaxed">Training aur loan se business shuru karein.</p>
</div>
</div>
<div className="pt-2 border-t border-stone-100 flex items-center justify-between mt-1">
<span className="text-xs text-stone-400 font-medium">Eligibility check karein</span>
<button className="text-amber-700 font-medium text-sm flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 transition-colors">
<iconify-icon icon="lucide:volume-2" width="16"></iconify-icon>
                            Sunne ke liye bolein
                        </button>
</div>
</div>

<div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm flex flex-col gap-3 group hover:border-blue-200 transition-colors">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-700 border border-blue-100">
<iconify-icon icon="lucide:store" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-stone-900 leading-snug">PMFME Scheme</h4>
<p className="text-stone-500 text-sm mt-1 leading-relaxed">Food processing business ke liye subsidy.</p>
</div>
</div>
<div className="pt-2 border-t border-stone-100 flex items-center justify-between mt-1">
<span className="text-xs text-stone-400 font-medium">Apply kaise karein?</span>
<button className="text-amber-700 font-medium text-sm flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 transition-colors">
<iconify-icon icon="lucide:volume-2" width="16"></iconify-icon>
                            Sunne ke liye bolein
                        </button>
</div>
</div>
</div>
</section>

<section className="pb-8" id="learn">
<h3 className="text-xl font-medium tracking-tight text-stone-900 mb-4">Seekho aur Aage Badho</h3>
<div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar -mx-6 px-6">

<div className="min-w-[260px] bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm group">
<div className="relative aspect-video bg-stone-100 flex items-center justify-center overflow-hidden">

<img alt="Rural Digital Literacy" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1623164289873-1008034d658f?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-black/20"></div>
<button className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-amber-600 shadow-lg relative z-10 transition-transform hover:scale-105">
<iconify-icon className="ml-1" icon="lucide:play" width="20"></iconify-icon>
</button>
</div>
<div className="p-4">
<h4 className="font-medium text-stone-900 mb-1 leading-snug">Digital Payment Basics</h4>
<div className="flex items-center justify-between mt-3">
<span className="text-xs font-medium text-stone-400 bg-stone-50 px-2 py-1 rounded">5 min video</span>
<button className="text-xs font-medium text-amber-700 flex items-center gap-1.5 hover:text-amber-800">
<iconify-icon icon="lucide:volume-1" width="14"></iconify-icon> Matlab suno
                            </button>
</div>
</div>
</div>

<div className="min-w-[260px] bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm group">
<div className="relative aspect-video bg-stone-100 flex items-center justify-center overflow-hidden">

<img alt="FPO Farming" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1595123550441-d377e017de6a?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-black/20"></div>
<button className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-amber-600 shadow-lg relative z-10 transition-transform hover:scale-105">
<iconify-icon className="ml-1" icon="lucide:play" width="20"></iconify-icon>
</button>
</div>
<div className="p-4">
<h4 className="font-medium text-stone-900 mb-1 leading-snug">FPO Onboarding</h4>
<div className="flex items-center justify-between mt-3">
<span className="text-xs font-medium text-stone-400 bg-stone-50 px-2 py-1 rounded">8 min video</span>
<button className="text-xs font-medium text-amber-700 flex items-center gap-1.5 hover:text-amber-800">
<iconify-icon icon="lucide:volume-1" width="14"></iconify-icon> Matlab suno
                            </button>
</div>
</div>
</div>
</div>
</section>
</main>

<div className="fixed bottom-24 right-6 z-40 transition-transform duration-300 translate-y-0">
<button className="w-14 h-14 rounded-full bg-white text-stone-800 shadow-lg shadow-stone-200 flex items-center justify-center border border-stone-100 active:scale-95 transition-all">
<iconify-icon icon="lucide:mic" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<nav className="fixed bottom-0 left-0 w-full bg-white border-t border-stone-200 z-50 safe-area-bottom">
<div className="max-w-md mx-auto h-20 px-6 grid grid-cols-4 gap-1">
<a className="flex flex-col items-center justify-center gap-1 text-amber-600" href="#">
<iconify-icon icon="lucide:home" strokeWidth="2" width="24"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">Home</span>
</a>
<a className="flex flex-col items-center justify-center gap-1 text-stone-400 hover:text-stone-600 transition-colors" href="#meetings">
<iconify-icon icon="lucide:calendar-days" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">Meeting</span>
</a>
<a className="flex flex-col items-center justify-center gap-1 text-stone-400 hover:text-stone-600 transition-colors" href="#schemes">
<iconify-icon icon="lucide:book-open" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">Yojana</span>
</a>
<a className="flex flex-col items-center justify-center gap-1 text-stone-400 hover:text-stone-600 transition-colors" href="#learn">
<iconify-icon icon="lucide:video" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">Seekho</span>
</a>
</div>
</nav>

    </>
  );
}
