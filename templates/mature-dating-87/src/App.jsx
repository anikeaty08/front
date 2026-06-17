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
      

<div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-rose-950/20 via-neutral-900/5 to-transparent -z-10 pointer-events-none blur-3xl"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-rose-600/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

<header className="w-full max-w-5xl mx-auto px-6 py-8 flex justify-between items-center z-10">
<div className="text-xl font-semibold tracking-tighter text-neutral-100 uppercase flex items-center gap-1">
<span className="text-rose-500">B</span>
        D
      </div>
<button className="text-sm font-medium text-neutral-400 hover:text-neutral-100 transition-colors duration-200">
        Log in
      </button>
</header>

<main className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-6 py-12 sm:py-20 text-center z-10">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-md text-xs font-medium text-rose-300 mb-8 shadow-sm">
<iconify-icon icon="solar:heart-angle-linear" strokeWidth="1.5"></iconify-icon>
        BestDates 35+
        <iconify-icon icon="solar:heart-angle-linear" strokeWidth="1.5"></iconify-icon>
</div>

<h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-50 mb-6 leading-[1.15] max-w-3xl text-balance">
        Are you 35+ and ready to meet real, mature singles?
      </h1>
<p className="text-lg sm:text-xl text-neutral-400 mb-14 max-w-2xl font-normal leading-relaxed text-balance">
        Find meaningful connections, friendship, romance, or your perfect match
        today.
      </p>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mb-16 text-left">
<div className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-900/30 border border-neutral-800/50 backdrop-blur-sm transition-all duration-300 hover:bg-neutral-800/40 hover:border-neutral-700/50">
<div className="mt-0.5 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-rose-500/10 text-rose-400 ring-1 ring-rose-500/20">
<iconify-icon className="text-lg" icon="solar:user-plus-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-sm sm:text-base text-neutral-200 mb-1">
              Easy signup
            </h3>
<p className="text-xs sm:text-sm text-neutral-500 font-normal">
              Get started in minutes with our simple process.
            </p>
</div>
</div>
<div className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-900/30 border border-neutral-800/50 backdrop-blur-sm transition-all duration-300 hover:bg-neutral-800/40 hover:border-neutral-700/50">
<div className="mt-0.5 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-rose-500/10 text-rose-400 ring-1 ring-rose-500/20">
<iconify-icon className="text-lg" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-sm sm:text-base text-neutral-200 mb-1">
              Real people near you
            </h3>
<p className="text-xs sm:text-sm text-neutral-500 font-normal">
              Connect with verified singles in your local area.
            </p>
</div>
</div>
<div className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-900/30 border border-neutral-800/50 backdrop-blur-sm transition-all duration-300 hover:bg-neutral-800/40 hover:border-neutral-700/50">
<div className="mt-0.5 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-rose-500/10 text-rose-400 ring-1 ring-rose-500/20">
<iconify-icon className="text-lg" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-sm sm:text-base text-neutral-200 mb-1">
              Private &amp; secure chat
            </h3>
<p className="text-xs sm:text-sm text-neutral-500 font-normal">
              Your conversations are protected and confidential.
            </p>
</div>
</div>
<div className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-900/30 border border-neutral-800/50 backdrop-blur-sm transition-all duration-300 hover:bg-neutral-800/40 hover:border-neutral-700/50">
<div className="mt-0.5 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-rose-500/10 text-rose-400 ring-1 ring-rose-500/20">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-sm sm:text-base text-neutral-200 mb-1">
              35+ mature community
            </h3>
<p className="text-xs sm:text-sm text-neutral-500 font-normal">
              Join a space designed exclusively for mature dating.
            </p>
</div>
</div>
</div>

<div className="flex flex-col items-center mt-4">
<p className="text-sm sm:text-base text-neutral-400 mb-8 font-medium flex items-center gap-2">
          Don’t wait for love to find you — take the first step now!
          <iconify-icon className="text-rose-400/80 text-xl" icon="solar:hearts-linear" strokeWidth="1.5"></iconify-icon>
</p>
<a className="group relative inline-flex items-center justify-center gap-2.5 bg-neutral-100 text-neutral-950 px-8 py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-[1.02] hover:bg-white active:scale-[0.98] shadow-[0_0_40px_-15px_rgba(244,63,94,0.4)]" href="https://panther-leads.trk2afse.com/click?pid=195&amp;offer_id=1254">
          Join BestDates 35+ Today
          <iconify-icon className="text-lg text-neutral-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-neutral-900" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</main>

    </>
  );
}
