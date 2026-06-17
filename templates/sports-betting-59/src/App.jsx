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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded flex items-center justify-center text-white text-xs font-medium">S</div>
<span className="text-white tracking-tighter font-medium text-lg">SPORTSMOLE</span>
</div>
<div className="hidden md:flex gap-8 text-sm font-normal">
<a className="hover:text-white transition-colors" href="#">Predictions</a>
<a className="hover:text-white transition-colors" href="#">Odds</a>
<a className="hover:text-white transition-colors" href="#">Insights</a>
</div>
<a className="text-xs font-medium text-white border border-white/10 px-4 py-2 rounded-full hover:bg-white/5 transition-colors" href="#">
                Sign In
            </a>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-5xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8">
<span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
                The Future of Wagering
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
                Sports Betting <br/>
<span className="text-gradient">in 2026</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                Experience the next generation of predictive analytics and transparent reviews. We are redefining how fans engage with the game.
            </p>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-600/20 opacity-30 blur-[100px] -z-10 rounded-full pointer-events-none"></div>
</header>

<section className="py-24 px-6 relative border-t border-white/5" id="reviews">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">
                        Best sports betting <br/>review sites
                    </h2>
<div className="space-y-6 text-slate-400 font-light leading-relaxed">
<p>
                            In the rapidly evolving landscape of 2026, the digital betting ecosystem has become saturated with platforms claiming authority. Navigating this terrain requires more than just odds comparison; it demands deep analytical integrity and transparency.
                        </p>
<p>
                            Review aggregators have shifted from simple listicles to complex verification engines. However, finding a singular voice that combines historical data with real-time journalistic integrity remains rare.
                        </p>
<div className="pt-4">
<p className="mb-2 text-sm font-medium text-slate-300">Our Recommended UK Source:</p>
<a className="group inline-flex items-center gap-3 p-4 rounded-lg glass-card hover:border-indigo-500/30 transition-all w-full md:w-auto" href="https://www.sportsmole.co.uk/online/">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-indigo-400 group-hover:text-white transition-colors">
<iconify-icon icon="solar:global-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<div className="text-white text-sm font-medium">Sports Mole Online</div>
<div className="text-indigo-400 text-xs mt-0.5">https://www.sportsmole.co.uk/online/</div>
</div>
<iconify-icon className="ml-auto text-slate-600 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="relative mt-8 md:mt-0">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent blur-3xl -z-10"></div>
<div className="glass-card rounded-xl p-8 relative overflow-hidden">
<div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
<span className="text-xs uppercase tracking-widest text-slate-500 font-medium">Verification Matrix</span>
<div className="flex gap-1">
<span className="w-2 h-2 rounded-full bg-emerald-500/50"></span>
<span className="w-2 h-2 rounded-full bg-yellow-500/50"></span>
<span className="w-2 h-2 rounded-full bg-rose-500/50"></span>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded bg-emerald-500/10 flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:shield-check-linear" width="18"></iconify-icon>
</div>
<div className="flex-1">
<div className="h-2 w-24 bg-slate-800 rounded mb-2"></div>
<div className="h-1.5 w-full bg-slate-800/50 rounded"></div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded bg-indigo-500/10 flex items-center justify-center text-indigo-400">
<iconify-icon icon="solar:graph-up-linear" width="18"></iconify-icon>
</div>
<div className="flex-1">
<div className="h-2 w-32 bg-slate-800 rounded mb-2"></div>
<div className="h-1.5 w-3/4 bg-slate-800/50 rounded"></div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded bg-purple-500/10 flex items-center justify-center text-purple-400">
<iconify-icon icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
</div>
<div className="flex-1">
<div className="h-2 w-20 bg-slate-800 rounded mb-2"></div>
<div className="h-1.5 w-5/6 bg-slate-800/50 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-950 relative">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Why Sports Mole?</h2>
<p className="text-slate-400 font-light">
                    Built on a foundation of data and expertise, setting the standard for sports journalism and prediction accuracy.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-white mb-4 group-hover:border-indigo-500/50 group-hover:text-indigo-400 transition-colors">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Decades of Coverage</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                        An enduring legacy in sports media, covering global events with consistency and depth for over a decade.
                    </p>
</div>

<div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-white mb-4 group-hover:border-emerald-500/50 group-hover:text-emerald-400 transition-colors">
<iconify-icon icon="solar:football-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Football Predictions</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                        Data-driven match forecasting utilizing advanced metrics to provide the most accurate outcomes.
                    </p>
</div>

<div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-white mb-4 group-hover:border-blue-500/50 group-hover:text-blue-400 transition-colors">
<iconify-icon icon="solar:verified-check-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Trusted Journalists</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                        Content curated by industry veterans who value integrity, accuracy, and unbiased reporting.
                    </p>
</div>

<div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-white mb-4 group-hover:border-orange-500/50 group-hover:text-orange-400 transition-colors">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Popular Newsletter</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                        Join thousands of subscribers receiving daily insights, breaking news, and exclusive tips directly.
                    </p>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-slate-800 rounded flex items-center justify-center text-slate-400 text-[10px] font-medium">S</div>
<span className="text-slate-500 tracking-tight text-sm font-medium">SPORTSMOLE © 2026</span>
</div>
<div className="flex gap-6 text-xs text-slate-500 font-medium">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</footer>

    </>
  );
}
