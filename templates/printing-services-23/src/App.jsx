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
      

<div className="fixed inset-0 pointer-events-none flex justify-center items-center overflow-hidden">
<div className="w-[40rem] h-[40rem] bg-white/[0.02] rounded-full blur-3xl absolute -top-20 -left-20"></div>
<div className="w-[30rem] h-[30rem] bg-white/[0.01] rounded-full blur-3xl absolute bottom-0 right-0"></div>
</div>

<main className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 p-8 shadow-[0_0_50px_-15px_rgba(0,0,0,1)] backdrop-blur-xl">

<div className="absolute inset-x-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

<header className="mb-8 flex items-start justify-between">

<div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-white/10 to-transparent shadow-inner">
<span className="text-lg font-medium tracking-tighter text-neutral-100">TT</span>
</div>

<div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-normal text-emerald-400">
<span className="relative flex h-1.5 w-1.5">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
</span>
                Available
            </div>
</header>

<section>
<h1 className="text-2xl font-medium tracking-tight text-neutral-100">Tatenda Takaedza</h1>
<p className="mt-1.5 text-sm text-neutral-400">Printing Services &amp; Entrepreneurs</p>
<p className="mt-4 text-sm leading-relaxed text-neutral-500">
                Providing premium printing solutions and specialized services tailored to elevate the brands of modern entrepreneurs and growing businesses.
            </p>
</section>

<div className="my-6 h-px w-full bg-white/5"></div>

<ul className="flex flex-col gap-3.5">
<li className="flex items-center gap-3 text-sm text-neutral-400 transition-colors hover:text-neutral-300">
<div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 bg-white/5">
<iconify-icon className="text-base text-neutral-500" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<a className="border-b border-transparent hover:border-neutral-400" href="tel:+263781538387">+263 781 538 387</a>
</li>
<li className="flex items-center gap-3 text-sm text-neutral-400 transition-colors hover:text-neutral-300">
<div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 bg-white/5">
<iconify-icon className="text-base text-neutral-500" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span>Worldwide Shipping</span>
</li>
<li className="flex items-center gap-3 text-sm text-neutral-400 transition-colors hover:text-neutral-300">
<div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 bg-white/5">
<iconify-icon className="text-base text-neutral-500" icon="solar:link-linear" strokeWidth="1.5"></iconify-icon>
</div>
<a className="border-b border-transparent hover:border-neutral-400" href="#">tatenda.business</a>
</li>
<li className="flex items-center gap-3 text-sm text-neutral-400 transition-colors hover:text-neutral-300">
<div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 bg-white/5">
<iconify-icon className="text-base text-neutral-500" icon="solar:printer-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span>Commercial Printing</span>
</li>
</ul>

<footer className="mt-8 flex items-center gap-3">
<a className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-neutral-100 px-4 py-2.5 text-sm font-medium text-neutral-900 transition-all hover:bg-white hover:scale-[0.98] active:scale-95 shadow-[0_0_15px_-3px_rgba(255,255,255,0.3)]" href="tel:+263781538387">
                Call +263 781 538 387
            </a>
<button className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-neutral-400 transition-all hover:bg-white/10 hover:text-neutral-100 hover:scale-[0.98] active:scale-95">
<iconify-icon className="text-lg" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</button>
</footer>
</main>

    </>
  );
}
