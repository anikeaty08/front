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
      
    lucide.createIcons();
    document.addEventListener('DOMContentLoaded', () => {
      const cards = document.querySelectorAll('.feature-card');
      cards.forEach((card, idx) => {
        setTimeout(() => {
          card.classList.remove('opacity-0', 'translate-y-4');
          card.classList.add('opacity-100', 'translate-y-0');
        }, 150 * (idx + 1)); // staggered delay
      });
    });
  
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/retrofuturismbganimation-Lb3VtL1bNaYUnirKNzn0FvaW" width="100%"></iframe></div>
<div className="w-full max-w-5xl mx-auto">

<header className="text-center">
<h1 className="text-5xl tracking-tight font-semibold text-white mb-3" style={{fontFamily: `'Plus Jakarta Sans',sans-serif`}}>Powerful Features</h1>
<p className="text-lg text-zinc-400 max-w-xl mx-auto" style={{fontFamily: `'Manrope',sans-serif`}}>
        Everything you need to build, scale, and innovate—without compromise.
      </p>
</header>

<div className="my-10 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>

<section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

<article aria-label="High Performance" className="feature-card opacity-0 translate-y-4 transition-all duration-700 ease-out bg-zinc-800/60 p-6 rounded-2xl border border-zinc-700/40 hover:border-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 group" role="button" tabindex="0">
<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-500/15 mb-4">
<i className="text-indigo-400" data-lucide="cpu"></i>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-1" style={{fontFamily: `'Plus Jakarta Sans',sans-serif`}}>High Performance</h3>
<p className="text-sm text-zinc-400" style={{fontFamily: `'Manrope',sans-serif`}}>Optimized algorithms ensure lightning-fast load times and fluid interactions.</p>
</article>
<article aria-label="Secure by Design" className="feature-card opacity-0 translate-y-4 transition-all duration-700 ease-out bg-zinc-800/60 p-6 rounded-2xl border border-zinc-700/40 hover:border-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 group" role="button" tabindex="0">
<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-500/15 mb-4">
<i className="text-indigo-400" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-1" style={{fontFamily: `'Plus Jakarta Sans',sans-serif`}}>Secure by Design</h3>
<p className="text-sm text-zinc-400" style={{fontFamily: `'Manrope',sans-serif`}}>Industry-standard encryption and best practices keep your data protected.</p>
</article>
<article aria-label="Real-time Insights" className="feature-card opacity-0 translate-y-4 transition-all duration-700 ease-out bg-zinc-800/60 p-6 rounded-2xl border border-zinc-700/40 hover:border-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 group" role="button" tabindex="0">
<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-500/15 mb-4">
<i className="text-indigo-400" data-lucide="activity"></i>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-1" style={{fontFamily: `'Plus Jakarta Sans',sans-serif`}}>Real-time Insights</h3>
<p className="text-sm text-zinc-400" style={{fontFamily: `'Manrope',sans-serif`}}>Live dashboards let you act on trends the moment they emerge.</p>
</article>
<article aria-label="Intuitive Dashboard" className="feature-card opacity-0 translate-y-4 transition-all duration-700 ease-out bg-zinc-800/60 p-6 rounded-2xl border border-zinc-700/40 hover:border-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 group" role="button" tabindex="0">
<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-500/15 mb-4">
<i className="text-indigo-400" data-lucide="layout-dashboard"></i>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-1" style={{fontFamily: `'Plus Jakarta Sans',sans-serif`}}>Intuitive Dashboard</h3>
<p className="text-sm text-zinc-400" style={{fontFamily: `'Manrope',sans-serif`}}>A clean interface that keeps essential tools right at your fingertips.</p>
</article>
<article aria-label="Modular Architecture" className="feature-card opacity-0 translate-y-4 transition-all duration-700 ease-out bg-zinc-800/60 p-6 rounded-2xl border border-zinc-700/40 hover:border-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 group" role="button" tabindex="0">
<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-500/15 mb-4">
<i className="text-indigo-400" data-lucide="layers"></i>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-1" style={{fontFamily: `'Plus Jakarta Sans',sans-serif`}}>Modular Architecture</h3>
<p className="text-sm text-zinc-400" style={{fontFamily: `'Manrope',sans-serif`}}>Swap components in or out to tailor workflows to your needs.</p>
</article>
<article aria-label="Blazing Deployment" className="feature-card opacity-0 translate-y-4 transition-all duration-700 ease-out bg-zinc-800/60 p-6 rounded-2xl border border-zinc-700/40 hover:border-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 group" role="button" tabindex="0">
<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-500/15 mb-4">
<i className="text-indigo-400" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-1" style={{fontFamily: `'Plus Jakarta Sans',sans-serif`}}>Blazing Deployment</h3>
<p className="text-sm text-zinc-400" style={{fontFamily: `'Manrope',sans-serif`}}>Push updates in seconds with zero downtime and instant rollbacks.</p>
</article>
</section>
</div>





    </>
  );
}
