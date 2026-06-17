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



        // Initialize Lucide Icons
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full mix-blend-screen"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2.5">
<span className="font-bold text-lg tracking-tight text-white">Velocita</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Platform</a>
<a className="hover:text-white transition-colors" href="#">Solutions</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Documentation</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#">Sign In</a>
<button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium text-white transition-all">
                    Start Building
                </button>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto">

<div className="animate-fadeSlideIn inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-neutral-300 mb-8 hover:bg-white/10 transition-colors cursor-pointer group">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Introducing Edge Functions v2.0
                <i className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</div>

<h1 className="animate-fadeSlideIn-delay-200 text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50 pb-2">
                The Edge Network <br/>
                built for speed.
            </h1>

<p className="animate-fadeSlideIn-delay-400 text-lg md:text-xl text-neutral-400 max-w-2xl mb-12 leading-relaxed">
                Deploy serverless applications to 35+ global regions in seconds. 
                Experience minimal latency, instant cold starts, and infinite scalability.
            </p>

<div className="animate-fadeSlideIn-delay-600 flex flex-col sm:flex-row items-center gap-5">

<button className="button group min-w-[180px]">
<span className="relative z-10 flex items-center gap-2 font-medium text-neutral-100">
                        Deploy Now
                        <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="chevron-right"></i>
</span>

<div className="points_wrapper">
<div className="point"></div>
<div className="point"></div>
<div className="point"></div>
<div className="point"></div>
<div className="point"></div>
<div className="point"></div>
<div className="point"></div>
<div className="point"></div>
<div className="point"></div>
<div className="point"></div>
</div>
</button>
<button className="px-6 py-2.5 rounded-lg text-neutral-400 hover:text-white font-medium text-sm transition-colors border border-transparent hover:border-white/10 hover:bg-white/5 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="book-open"></i>
                    Read Documentation
                </button>
</div>
</div>

<div className="animate-fadeSlideIn-delay-600 grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 max-w-5xl mx-auto">

<div className="group p-6 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-white/20 hover:bg-neutral-900 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 text-indigo-400 group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5" data-lucide="globe"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Global Mesh</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                    Intelligently route traffic to the nearest node across 35+ regions worldwide for sub-10ms latency.
                </p>
</div>

<div className="group p-6 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-white/20 hover:bg-neutral-900 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5" data-lucide="cpu"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Instant Compute</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                    Zero cold starts. Our isolated V8 runtime spins up in microseconds to handle high-traffic spikes.
                </p>
</div>

<div className="group p-6 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-white/20 hover:bg-neutral-900 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 text-purple-400 group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Edge Security</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                    DDoS protection, WAF, and SSL/TLS termination included by default at the network edge.
                </p>
</div>
</div>

<div className="mt-20 pt-10 border-t border-white/5 text-center">
<p className="text-sm text-neutral-500 font-medium mb-8">TRUSTED BY ENGINEERING TEAMS AT</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<svg className="h-6 w-auto text-white" fill="currentColor" viewbox="0 0 100 30"><path d="M10,15 L20,5 L30,15 L20,25 Z M40,5 H50 V25 H40 Z M60,5 H70 V25 H60 Z M80,5 H90 V25 H80 Z"></path></svg>
<svg className="h-6 w-auto text-white" fill="currentColor" viewbox="0 0 100 30"><circle cx="15" cy="15" r="10"></circle> <rect height="20" width="20" x="35" y="5"></rect> <polygon points="70,25 80,5 90,25"></polygon></svg>
<svg className="h-6 w-auto text-white" fill="currentColor" viewbox="0 0 100 30"><path d="M10,5 L30,5 L20,25 Z M45,15 A10,10 0 1,1 45,15.1 Z M80,5 H95 V10 H80 Z M80,12 H90 V17 H80 Z M80,20 H95 V25 H80 Z"></path></svg>
<svg className="h-6 w-auto text-white" fill="currentColor" viewbox="0 0 100 30"><rect height="10" width="20" x="5" y="10"></rect> <rect height="20" width="10" x="35" y="5"></rect> <rect height="20" width="20" x="65" y="5"></rect></svg>
</div>
</div>
</main>

<footer className="border-t border-white/5 bg-neutral-950 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-neutral-400">
<span className="text-sm font-semibold">Velocita © 2024</span>
</div>
<div className="flex gap-6 text-sm text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Status</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
</div>
</div>
</footer>


    </>
  );
}
