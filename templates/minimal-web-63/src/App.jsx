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



      // Initialize lucide icons with stroke-width 1.5
      window.lucide && lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Fade-in sequence using CSS transitions (duration 1.0s, delay starting at 0.1s, linear)
      window.addEventListener('DOMContentLoaded', () => {
        const nodes = document.querySelectorAll('[data-animate]');
        // Trigger in sequence but keep delays for fine control
        requestAnimationFrame(() => {
          nodes.forEach((el) => {
            el.classList.add('opacity-100','translate-y-0');
          });
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
      
<div className="min-h-screen w-screen flex items-center justify-center p-4">
<div className="w-full max-w-5xl bg-neutral-900 border border-neutral-800 shadow-lg rounded-2xl">

<header className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-neutral-800">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-neutral-800/80 border border-neutral-700 flex items-center justify-center">
<span className="text-neutral-200 text-sm font-medium tracking-tight">AA</span>
</div>
<div className="flex flex-col">
<span className="text-neutral-100 text-sm leading-none font-medium tracking-tight" style={{fontFamily: '\'Inter\', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial', letterSpacing: '-0.02em'}}>Arc Agency</span>
<span className="text-neutral-500 text-[11px] leading-none mt-1">Web Studio</span>
</div>
</div>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors" href="#">Work</a>
<a className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors" href="#">Services</a>
<a className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors" href="#">About</a>
<a className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors" href="#">Contact</a>
</nav>
<button className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm bg-neutral-800/70 hover:bg-neutral-700/70 text-neutral-200 border border-neutral-700/80 transition-colors">
<i className="h-4 w-4" data-lucide="mail"></i>
<span>hello@arc.studio</span>
</button>
</header>

<section className="px-6 md:px-10 py-10 md:py-14">
<div className="max-w-3xl">
<h1 className="opacity-0 translate-y-1 transition-all duration-1000 ease-linear delay-100 text-5xl md:text-6xl tracking-tight font-medium text-neutral-50" data-animate="" style={{fontFamily: '\'Inter\', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial', letterSpacing: '-0.02em'}}>
              We design and ship websites that convert.
            </h1>
<p className="opacity-0 translate-y-1 transition-all duration-1000 ease-linear delay-200 mt-4 md:mt-6 text-xl md:text-2xl text-neutral-400" data-animate="">
              Fast, accessible, and measurable. From strategy to launch in weeks—not months.
            </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="opacity-0 translate-y-1 transition-all duration-1000 ease-linear delay-300 inline-flex items-center justify-center gap-2 rounded-md-4 py-2.5 bg-blue-500 text-neutral-50 hover:bg-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50" data-animate="" href="#">
<i className="h-4 w-4" data-lucide="rocket"></i>
<span className="text-sm font-medium" style={{fontFamily: '\'Inter\', ui-sans-serif, system-ui'}}>Get a quote</span>
</a>
<a className="opacity-0 translate-y-1 transition-all duration-1000 ease-linear delay-400 inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 bg-neutral-800/70 text-neutral-100 hover:bg-neutral-700/70 border border-neutral-700/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40" data-animate="" href="#">
<i className="h-4 w-4" data-lucide="play"></i>
<span className="text-sm">View work</span>
</a>
</div>
<div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="opacity-0 translate-y-1 transition-all duration-1000 ease-linear delay-500 flex items-center gap-3 rounded-lg border border-neutral-800 bg-neutral-900/60 px-3 py-2" data-animate="">
<i className="h-4 w-4 text-neutral-400" data-lucide="timer"></i>
<p className="text-sm text-neutral-300">Launch in 2–4 weeks</p>
</div>
<div className="opacity-0 translate-y-1 transition-all duration-1000 ease-linear delay-600 flex items-center gap-3 rounded-lg border border-neutral-800 bg-neutral-900/60 px-3 py-2" data-animate="">
<i className="h-4 w-4 text-neutral-400" data-lucide="gauge"></i>
<p className="text-sm text-neutral-300">Core Web Vitals A+</p>
</div>
<div className="opacity-0 translate-y-1 transition-all duration-1000 ease-linear delay-700 flex items-center gap-3 rounded-lg border border-neutral-800 bg-neutral-900/60 px-3 py-2" data-animate="">
<i className="h-4 w-4 text-neutral-400" data-lucide="shield-check"></i>
<p className="text-sm text-neutral-300">Accessibility first</p>
</div>
</div>
</div>
</section>
<div className="px-6 md:px-10">
<div className="h-px w-full bg-neutral-800"></div>
</div>

<section className="px-6 md:px-10 py-8 md:py-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="opacity-0 translate-y-1 transition-all duration-1000 ease-linear delay-100 rounded-xl border border-neutral-800 bg-neutral-900/60 p-5" data-animate="">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-neutral-800/80 border border-neutral-700 flex items-center justify-center">
<i className="h-4 w-4 text-neutral-200" data-lucide="code-2"></i>
</div>
<h3 className="text-lg font-medium tracking-tight text-neutral-100" style={{fontFamily: '\'Inter\', ui-sans-serif, system-ui', letterSpacing: '-0.02em'}}>Engineering</h3>
</div>
<p className="mt-3 text-sm md:text-base text-neutral-400">
                Modern stacks, clean code, and maintainable systems. We optimize for speed and reliability.
              </p>
<div className="mt-4 flex items-center gap-2 text-neutral-400 text-sm">
<i className="h-4 w-4" data-lucide="check"></i><span>Next-gen performance</span>
</div>
<div className="mt-1 flex items-center gap-2 text-neutral-400 text-sm">
<i className="h-4 w-4" data-lucide="check"></i><span>Robust CI/CD</span>
</div>
</div>
<div className="opacity-0 translate-y-1 transition-all duration-1000 ease-linear delay-200 rounded-xl border border-neutral-800 bg-neutral-900/60 p-5" data-animate="">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-neutral-800/80 border border-neutral-700 flex items-center justify-center">
<i className="h-4 w-4 text-neutral-200" data-lucide="layout-dashboard"></i>
</div>
<h3 className="text-lg font-medium tracking-tight text-neutral-100" style={{fontFamily: '\'Inter\', ui-sans-serif, system-ui', letterSpacing: '-0.02em'}}>Design</h3>
</div>
<p className="mt-3 text-sm md:text-base text-neutral-400">
                Minimal, clear, conversion-driven interfaces with thoughtful motion and content hierarchy.
              </p>
<div className="mt-4 flex items-center gap-2 text-neutral-400 text-sm">
<i className="h-4 w-4" data-lucide="check"></i><span>Conversion-focused UX</span>
</div>
<div className="mt-1 flex items-center gap-2 text-neutral-400 text-sm">
<i className="h-4 w-4" data-lucide="check"></i><span>Design systems</span>
</div>
</div>
<div className="opacity-0 translate-y-1 transition-all duration-1000 ease-linear delay-300 rounded-xl border border-neutral-800 bg-neutral-900/60 p-5" data-animate="">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-neutral-800/80 border border-neutral-700 flex items-center justify-center">
<i className="h-4 w-4 text-neutral-200" data-lucide="line-chart"></i>
</div>
<h3 className="text-lg font-medium tracking-tight text-neutral-100" style={{fontFamily: '\'Inter\', ui-sans-serif, system-ui', letterSpacing: '-0.02em'}}>Growth</h3>
</div>
<p className="mt-3 text-sm md:text-base text-neutral-400">
                Analytics, testing, and iteration loops built-in. We measure what matters and refine.
              </p>
<div className="mt-4 flex items-center gap-2 text-neutral-400 text-sm">
<i className="h-4 w-4" data-lucide="check"></i><span>SEO foundations</span>
</div>
<div className="mt-1 flex items-center gap-2 text-neutral-400 text-sm">
<i className="h-4 w-4" data-lucide="check"></i><span>A/B testing ready</span>
</div>
</div>
</div>
</section>
<div className="px-6 md:px-10">
<div className="h-px w-full bg-neutral-800"></div>
</div>

<footer className="px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
<div className="flex items-center gap-2 text-neutral-500 text-sm">
<i className="h-4 w-4" data-lucide="copyright"></i>
<span>2025 Arc Agency</span>
</div>
<div className="flex items-center gap-4">
<a className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors inline-flex items-center gap-2" href="#">
<i className="h-4 w-4" data-lucide="file-text"></i>
<span>Capabilities</span>
</a>
<a className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors inline-flex items-center gap-2" href="#">
<i className="h-4 w-4" data-lucide="calendar"></i>
<span>Book a call</span>
</a>
</div>
</footer>
</div>
</div>



    </>
  );
}
