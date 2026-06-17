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
      

<div className="fixed inset-0 -z-10">
<img alt="Blueprint Grid" className="w-full h-full object-cover opacity-20" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/90"></div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full backdrop-blur-md bg-white/5 border border-white/10 shadow-xl z-30 animate-fade-in delay-100">
<div className="flex items-center space-x-8">

<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-500 flex items-center justify-center">
<svg className="lucide lucide-aperture text-white" data-lucide="aperture" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16 3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path></svg>
</div>
<span className="ml-3 text-sm font-medium tracking-tight">Automatick</span>
</div>

<div className="ml-auto">
<a className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-all shadow-lg hover:shadow-xl" href="#">
        Book a Strategy Call
      </a>
</div>
</div>
</nav>

<section className="flex items-center justify-center text-center min-h-screen px-6 pt-32 md:pt-40 pb-20 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-cyan-400/15 blur-[140px] rounded-full -z-10"></div>
<div className="max-w-4xl">
<div className="inline-flex items-center px-4 py-2 mb-8 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-slide-up delay-200">
<svg className="lucide lucide-settings text-cyan-400" data-lucide="settings" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="ml-2 text-xs font-medium text-gray-300">Operational Symphony</span>
</div>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-tight animate-blur-in delay-300">
      Stop Hiring People to Fix a <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">Broken System.</span>
</h1>
<p className="text-base sm:text-lg md:text-xl text-gray-300 mt-8 leading-relaxed max-w-3xl mx-auto animate-slide-up delay-400">
      Your business doesn't need more payroll. It needs an "Operational Aqueduct"—a permanent system for scalable growth that reclaims your freedom.
    </p>
<div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 animate-blur-in delay-500">
<a className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-600 text-white font-medium shadow-lg hover:shadow-xl hover:from-cyan-600 hover:to-emerald-700 transform hover:-translate-y-0.5 transition-all" href="#">
        Book a No-Obligation Strategy Call
      </a>
</div>
<a className="text-sm text-gray-400 mt-4 inline-block hover:text-gray-200 transition-colors animate-fade-in delay-600" href="#">
      See how we build it in 12 weeks.
    </a>
</div>
</section>

<section className="px-6 py-24 md:py-32 relative bg-white/5 backdrop-blur-lg border-t border-white/10">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight animate-blur-in delay-100">
      Success Shouldn't Feel Like a Punishment.
    </h2>
<p className="text-base sm:text-lg md:text-xl text-gray-300 mt-6 mb-10 leading-relaxed animate-slide-up delay-200">
      You've passed the startup phase. So why does it feel like you're working harder than ever just to keep things from breaking?
    </p>
<ul className="space-y-6">
<li className="flex items-start animate-slide-up delay-300">
<svg className="lucide lucide-check-circle text-emerald-400 mt-[2px] flex-shrink-0" data-lucide="check-circle" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<p className="ml-3 text-gray-200">
          Your systems creak and groan with each new client.
        </p>
</li>
<li className="flex items-start animate-slide-up delay-400">
<svg className="lucide lucide-check-circle text-emerald-400 mt-[2px] flex-shrink-0" data-lucide="check-circle" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<p className="ml-3 text-gray-200">
          Every question, decision, and approval still has to go through you.
        </p>
</li>
<li className="flex items-start animate-slide-up delay-500">
<svg className="lucide lucide-check-circle text-emerald-400 mt-[2px] flex-shrink-0" data-lucide="check-circle" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<p className="ml-3 text-gray-200">
          Growth has stolen your time instead of creating freedom.
        </p>
</li>
<li className="flex items-start animate-slide-up delay-600">
<svg className="lucide lucide-check-circle text-emerald-400 mt-[2px] flex-shrink-0" data-lucide="check-circle" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<p className="ml-3 text-gray-200">
          Your business can't grow without you, but you can't keep going like this.
        </p>
</li>
</ul>
</div>
</section>

<section className="bg-white/5 backdrop-blur-lg py-24 sm:py-32 border-t border-white/10 overflow-hidden" id="hamster-wheel">
<div className="max-w-7xl lg:px-8 mx-auto px-6">

<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white animate-blur-in delay-100">
        The Hamster Wheel of Hiring More <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">"Help"</span>
</h2>
<p className="mt-6 text-lg leading-8 text-gray-300 animate-slide-up delay-200">
        Your gut instinct is to hire your way out of the chaos. You've likely run this cycle before:
      </p>
</div>


<div className="relative w-full max-w-3xl h-[450px] hidden lg:block mt-24 mx-auto">

<div className="absolute inset-x-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[380px] w-[380px] rounded-full border border-dashed border-white/20 animate-fade-in" style={{animationDelay: '0.3s'}}></div>

<div className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-lg animate-travel-dot"></div>

<div className="absolute inset-x-0 top-0 flex justify-center -translate-y-6 animate-blur-in" style={{animationDelay: '0.4s'}}>
<div className="w-64 text-center">
<div className="flex flex-col items-center">
<div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-600 flex items-center justify-center shadow-lg">
<svg className="lucide lucide-user-plus text-white" data-lucide="user-plus" fill="none" height="26" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
</div>
<h3 className="mt-3 text-sm font-semibold uppercase tracking-wider text-white">1. The Pain</h3>
<p className="text-sm text-gray-300 mt-2">Chaos hits a breaking point. You hire a key person, hoping they are the solution.</p>
</div>
</div>
</div>

<div className="absolute bottom-8 right-8 w-64 text-center animate-blur-in" style={{animationDelay: '0.6s'}}>
<div className="flex flex-col items-center">
<div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-600 flex items-center justify-center shadow-lg">
<svg className="lucide lucide-smile text-white" data-lucide="smile" fill="none" height="26" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
</div>
<h3 className="mt-3 text-sm font-semibold uppercase tracking-wider text-white">2. The Relief</h3>
<p className="text-sm text-gray-300 mt-2">For a few weeks, it feels better. A sense of hope returns.</p>
</div>
</div>

<div className="absolute bottom-8 left-8 w-64 text-center animate-blur-in" style={{animationDelay: '0.8s'}}>
<div className="flex flex-col items-center">
<div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-600 flex items-center justify-center shadow-lg">
<svg className="lucide lucide-cloud-lightning text-white" data-lucide="cloud-lightning" fill="none" height="26" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg"><path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"></path><path d="m13 12-3 5h4l-3 5"></path></svg>
</div>
<h3 className="mt-3 text-sm font-semibold uppercase tracking-wider text-white">3. The Reality</h3>
<p className="text-sm text-gray-300 mt-2">Soon, they're just as overwhelmed as you were...</p>
</div>
</div>
</div>

<div className="mt-20 space-y-12 lg:hidden">

</div>

<div className="mt-24 max-w-2xl mx-auto text-center animate-slide-up" style={{animationDelay: '1s'}}>
<div className="space-y-6 text-lg text-gray-300">
<p>You're back at square one—now with higher payroll, increased complexity, and the exact same bottleneck: you.</p>
<p>You're stuck between two bad options: keep hiring people into a chaotic system, or risk a massive, disruptive overhaul. Most founders choose neither—and the burnout only gets worse.</p>
</div>
</div>
</div>
</section>


    </>
  );
}
