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
      

<main className="max-w-xl mx-auto bg-zinc-950 border border-zinc-900 rounded-2xl overflow-hidden shadow-xl">

<div className="flex items-center justify-between border-b border-zinc-900 bg-zinc-950 p-8">

<div className="flex items-center gap-3">
<div className="relative flex h-6 w-7 items-end justify-center">
<div className="relative z-10 flex items-end gap-0.5">
<div className="h-2 w-1 rounded-sm bg-orange-500"></div>
<div className="mb-0.5 h-2 w-2 rounded-b-sm border-b-2 border-l-2 border-r-2 border-orange-500"></div>
<div className="h-2 w-1 rounded-sm bg-orange-500"></div>
</div>
<div className="absolute top-0 h-3 w-5 rounded-t-full border-l-[1.5px] border-r-[1.5px] border-t-[1.5px] border-sky-400"></div>
</div>
<span className="text-xs font-bold tracking-[0.2em] text-zinc-400">VILLA GG</span>
</div>
<div className="text-right">
<p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Reference</p>
<p className="font-mono text-sm text-zinc-300">#GG-8829-SPL</p>
</div>
</div>

<div className="bg-zinc-950 p-8 pb-4">
<div className="mb-6 flex items-start gap-4">
<div className="mt-2 h-2 w-2 rounded-full bg-green-500"></div>
<p className="text-sm font-medium uppercase tracking-wide text-green-500">Confirmed</p>
</div>
<h1 className="font-bebas text-7xl leading-[0.85] tracking-tighter text-white sm:text-8xl">
                You're going <br/>
<span className="text-orange-500">to Split.</span>
</h1>
<p className="mt-6 max-w-sm text-lg font-light leading-relaxed text-zinc-400">
                Your villa is reserved. Get ready for the best experience of your life.
            </p>
</div>

<div className="grid grid-cols-2 border-y border-zinc-900 bg-zinc-900">
<div className="bg-zinc-950 p-8 transition-colors hover:bg-zinc-900">
<p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-zinc-500">Check-in</p>
<p className="font-bebas text-3xl tracking-wide text-white">Aug 24</p>
<p className="mt-1 text-sm text-zinc-400">Thursday, 14:00 PM</p>
</div>
<div className="border-l border-zinc-900 bg-zinc-950 p-8 transition-colors hover:bg-zinc-900">
<p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-zinc-500">Check-out</p>
<p className="font-bebas text-3xl tracking-wide text-white">Aug 31</p>
<p className="mt-1 text-sm text-zinc-400">Thursday, 11:00 AM</p>
</div>
</div>

<div className="flex flex-col justify-between gap-8 border-b border-zinc-900 bg-zinc-950 p-8 sm:flex-row sm:items-center">
<div className="flex items-center gap-4">
<div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400">
<i className="h-5 w-5" data-lucide="map-pin"></i>
</div>
<div>
<p className="text-sm font-medium text-white">Villa GG Main Estate</p>
<p className="text-xs text-zinc-500">Meštrovićevo šetalište 12, Split</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400">
<i className="h-5 w-5" data-lucide="users"></i>
</div>
<div>
<p className="text-sm font-medium text-white">8 Guests</p>
<p className="text-xs text-zinc-500">Entire Villa</p>
</div>
</div>
</div>

<div className="bg-zinc-900/30 p-8">
<h3 className="font-bebas mb-6 text-2xl uppercase tracking-wide text-zinc-300">
                Included with your stay
            </h3>
<div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
<ul className="space-y-3">
<li className="group flex items-center gap-3">
<i className="h-4 w-4 text-orange-500" data-lucide="check"></i>
<span className="font-bebas text-xl uppercase tracking-wide text-zinc-300 transition-colors group-hover:text-orange-500">Welcome Cocktail</span>
</li>
<li className="group flex items-center gap-3">
<i className="h-4 w-4 text-orange-500" data-lucide="check"></i>
<span className="font-bebas text-xl uppercase tracking-wide text-zinc-300 transition-colors group-hover:text-orange-500">Private Concierge</span>
</li>
<li className="group flex items-center gap-3">
<i className="h-4 w-4 text-orange-500" data-lucide="check"></i>
<span className="font-bebas text-xl uppercase tracking-wide text-zinc-300 transition-colors group-hover:text-orange-500">Luxury Car Rental</span>
</li>
</ul>
<ul className="space-y-3">
<li className="group flex cursor-pointer items-center gap-3">
<i className="h-4 w-4 text-sky-500" data-lucide="plus"></i>
<span className="font-bebas decoration-sky-500/30 text-xl uppercase tracking-wide text-zinc-500 underline decoration-1 underline-offset-4 transition-colors group-hover:text-sky-400">Add Private Chef</span>
</li>
<li className="group flex cursor-pointer items-center gap-3">
<i className="h-4 w-4 text-sky-500" data-lucide="plus"></i>
<span className="font-bebas decoration-sky-500/30 text-xl uppercase tracking-wide text-zinc-500 underline decoration-1 underline-offset-4 transition-colors group-hover:text-sky-400">Add Yacht Day</span>
</li>
</ul>
</div>
</div>

<div className="border-t border-zinc-900 bg-zinc-950 p-8">
<div className="flex flex-col gap-3">
<div className="flex justify-between text-sm text-zinc-400">
<span>7 Nights x €2,500</span>
<span>€17,500.00</span>
</div>
<div className="flex justify-between text-sm text-zinc-400">
<span>Service Fee</span>
<span>€250.00</span>
</div>
<div className="my-2 h-px w-full bg-zinc-800"></div>
<div className="flex items-end justify-between">
<span className="text-sm font-medium text-zinc-200">Total Paid</span>
<span className="font-bebas text-3xl tracking-wide text-white">€17,750.00</span>
</div>
</div>

<button className="font-bebas mt-8 w-full rounded bg-white py-3 text-2xl tracking-wide text-black transition-colors hover:bg-zinc-200 uppercase">
                Manage Booking
            </button>
<p className="mt-4 text-center text-xs font-light text-zinc-600">
                Questions? Reply to this email or call <span className="text-zinc-400">+385 91 000 0000</span>
</p>
</div>
</main>

<footer className="mx-auto mt-8 max-w-xl text-center">
<div className="mb-4 flex justify-center gap-6">
<a className="text-zinc-600 transition-colors hover:text-zinc-400" href="#"><i className="h-4 w-4" data-lucide="instagram"></i></a>
<a className="text-zinc-600 transition-colors hover:text-zinc-400" href="#"><i className="h-4 w-4" data-lucide="twitter"></i></a>
<a className="text-zinc-600 transition-colors hover:text-zinc-400" href="#"><i className="h-4 w-4" data-lucide="facebook"></i></a>
</div>
<p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-700">
            © 2024 Villa GG Split
        </p>
</footer>


    </>
  );
}
