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
      

<div className="fixed w-full h-screen pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-900/20 via-transparent to-purple-900/10"></div>
<div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/3 to-purple-500/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-800/50" style={{opacity: '0', animation: 'fadeSlideDown 0.8s ease-out 0.2s forwards'}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="zap"></i>
</div>
<span className="text-lg font-medium tracking-tight">Automatick</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors" href="#system">System</a>
<a className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors" href="#proof">Proof</a>
<a className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors" href="#sprint">Sprint</a>
</div>
</div>
</div>
</nav>

<header className="relative overflow-hidden pt-20 min-h-screen flex items-center">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
<div className="max-w-5xl text-center mx-auto">
<span className="inline-flex items-center gap-2 uppercase tracking-widest text-xs font-medium mb-6" style={{opacity: '0', animation: 'fadeSlideUp 0.8s ease-out 0.4s forwards'}}>
<span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"></span>
<span className="text-neutral-400">Growth Alignment System™</span>
</span>
<h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-light text-neutral-100 tracking-tight mb-8 font-playfair leading-[0.9]" style={{opacity: '0', animation: 'fadeSlideUp 0.8s ease-out 0.6s forwards'}}>
                    Stop Hiring People to Fix a <span className="gradient-text font-light">Broken System</span>
</h1>
<p className="text-lg sm:text-xl text-neutral-400 leading-relaxed max-w-3xl mx-auto mb-12" style={{opacity: '0', animation: 'fadeSlideUp 0.8s ease-out 0.8s forwards'}}>
                    Build the operational "aqueduct" that creates scalable growth and reclaims your freedom—without the chaos of endless hiring.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4" style={{opacity: '0', animation: 'fadeSlideUp 0.8s ease-out 1s forwards'}}>
<button className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 transition-all duration-300 transform hover:scale-105 pulse-glow">
<i className="w-5 h-5 group-hover:rotate-12 transition-transform" data-lucide="rocket"></i>
                        Start Your 12-Week Sprint
                    </button>
<button className="inline-flex items-center gap-2 rounded-full border border-neutral-700 hover:border-neutral-600 hover:bg-neutral-900/50 px-8 py-4 transition-all duration-300">
<i className="w-4 h-4" data-lucide="play-circle"></i>
                        Watch Case Study
                    </button>
</div>
</div>
</div>
</header>

<section className="py-16 border-y border-neutral-800/50 backdrop-blur-lg" style={{opacity: '0', animation: 'fadeSlideUp 0.8s ease-out 0.2s forwards'}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center">
<div className="text-2xl md:text-3xl font-light tracking-tight text-red-400 mb-2">40%</div>
<div className="text-sm text-neutral-400">Time Wasted on Manual Tasks</div>
</div>
<div className="text-center">
<div className="text-2xl md:text-3xl font-light tracking-tight text-red-400 mb-2">$120K</div>
<div className="text-sm text-neutral-400">Cost of Wrong Ops Hire</div>
</div>
<div className="text-center">
<div className="text-2xl md:text-3xl font-light tracking-tight text-red-400 mb-2">73%</div>
<div className="text-sm text-neutral-400">Founders Still Bottlenecked</div>
</div>
<div className="text-center">
<div className="text-2xl md:text-3xl font-light tracking-tight text-cyan-400 mb-2">12</div>
<div className="text-sm text-neutral-400">Weeks to Freedom</div>
</div>
</div>
</div>
</section>

<section className="py-20 relative" id="problem">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-16 items-center">
<div className="lg:col-span-5 space-y-8" style={{opacity: '0', animation: 'fadeSlideRight 0.8s ease-out 0.2s forwards'}}>
<div className="space-y-6">
<span className="text-red-400 text-sm uppercase tracking-widest">The Hamster Wheel</span>
<h2 className="text-3xl md:text-4xl font-light tracking-tight text-neutral-100">
                            Success Becomes a <span className="gradient-text">Punishment</span>
</h2>
<p className="text-neutral-400 leading-relaxed">
                            You've built a $300K+ business, but every new client adds chaos. You're the bottleneck for every decision. The solution? Most founders hire more people into the broken system.
                        </p>
</div>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-red-400 rounded-full"></div>
<span className="text-neutral-300 text-sm">Hire operations manager → temporary relief</span>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-red-400 rounded-full"></div>
<span className="text-neutral-300 text-sm">Same chaos, higher payroll</span>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-red-400 rounded-full"></div>
<span className="text-neutral-300 text-sm">Back to square one with more complexity</span>
</div>
</div>
</div>
<div className="lg:col-span-7" style={{opacity: '0', animation: 'fadeSlideLeft 0.8s ease-out 0.4s forwards'}}>
<div className="relative bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 border border-neutral-800/50 rounded-2xl p-8 md:p-12">

<div className="space-y-8">
<div className="text-center">
<div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
<i className="w-8 h-8 text-red-400" data-lucide="alert-triangle"></i>
</div>
<h3 className="text-lg font-medium text-neutral-200 mb-2">The Broken System</h3>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="bg-neutral-800/50 rounded-lg p-4 text-center">
<i className="w-6 h-6 text-neutral-400 mx-auto mb-2" data-lucide="users"></i>
<div className="text-xs text-neutral-400">More Hires</div>
</div>
<div className="bg-neutral-800/50 rounded-lg p-4 text-center">
<i className="w-6 h-6 text-neutral-400 mx-auto mb-2" data-lucide="trending-up"></i>
<div className="text-xs text-neutral-400">Higher Costs</div>
</div>
<div className="bg-neutral-800/50 rounded-lg p-4 text-center">
<i className="w-6 h-6 text-neutral-400 mx-auto mb-2" data-lucide="zap-off"></i>
<div className="text-xs text-neutral-400">Same Problems</div>
</div>
</div>
<div className="text-center">
<div className="text-sm text-neutral-400 italic">
                                    "We tried hiring 3 operations people in 18 months. Same chaos, $360K higher burn rate."
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 relative" id="system">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16" style={{opacity: '0', animation: 'fadeSlideUp 0.8s ease-out 0.2s forwards'}}>
<span className="text-cyan-400 text-sm uppercase tracking-widest">The Paradigm Shift</span>
<h2 className="text-3xl md:text-4xl font-light tracking-tight text-neutral-100 mt-4 mb-6">
                    Build an <span className="gradient-text">Aqueduct</span>, Not More Buckets
                </h2>
<p className="text-neutral-400 max-w-2xl mx-auto">
                    Stop hiring people to carry buckets. Build the infrastructure that moves 100x more with less effort.
                </p>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
<div className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 border border-neutral-800/50 rounded-xl p-6 hover:scale-105 transition-all duration-300" style={{opacity: '0', animation: 'fadeSlideUp 0.8s ease-out 0.4s forwards'}}>
<div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center mb-4">
<i className="w-6 h-6 text-blue-400" data-lucide="trending-up"></i>
</div>
<h3 className="text-lg font-medium text-neutral-200 mb-2">Revenue Engine</h3>
<p className="text-sm text-neutral-400">Sales, marketing &amp; client success operations</p>
</div>
<div className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 border border-neutral-800/50 rounded-xl p-6 hover:scale-105 transition-all duration-300" style={{opacity: '0', animation: 'fadeSlideUp 0.8s ease-out 0.6s forwards'}}>
<div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center mb-4">
<i className="w-6 h-6 text-green-400" data-lucide="settings"></i>
</div>
<h3 className="text-lg font-medium text-neutral-200 mb-2">Operating System</h3>
<p className="text-sm text-neutral-400">Technology, processes &amp; workflows</p>
</div>
<div className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 border border-neutral-800/50 rounded-xl p-6 hover:scale-105 transition-all duration-300" style={{opacity: '0', animation: 'fadeSlideUp 0.8s ease-out 0.8s forwards'}}>
<div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-lg flex items-center justify-center mb-4">
<i className="w-6 h-6 text-purple-400" data-lucide="users"></i>
</div>
<h3 className="text-lg font-medium text-neutral-200 mb-2">Leadership Enablement</h3>
<p className="text-sm text-neutral-400">Systems that free up founder time</p>
</div>
<div className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 border border-neutral-800/50 rounded-xl p-6 hover:scale-105 transition-all duration-300" style={{opacity: '0', animation: 'fadeSlideUp 0.8s ease-out 1s forwards'}}>
<div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-lg flex items-center justify-center mb-4">
<i className="w-6 h-6 text-yellow-400" data-lucide="dollar-sign"></i>
</div>
<h3 className="text-lg font-medium text-neutral-200 mb-2">Financial System</h3>
<p className="text-sm text-neutral-400">Financial clarity &amp; cash flow</p>
</div>
</div>

<div className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 border border-neutral-800/50 rounded-2xl p-8 md:p-12" style={{opacity: '0', animation: 'fadeSlideUp 0.8s ease-out 0.6s forwards'}}>
<div className="flex justify-between items-center max-w-4xl mx-auto">
<div className="text-center">
<div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
<i className="w-8 h-8 text-cyan-400" data-lucide="search"></i>
</div>
<h4 className="font-medium text-neutral-200 mb-2">Diagnose</h4>
<p className="text-xs text-neutral-400">Find the #1 bottleneck</p>
</div>
<div className="hidden md:block flex-1 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 mx-8 relative">
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-purple-500 rounded-full"></div>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
<i className="w-8 h-8 text-purple-400" data-lucide="wrench"></i>
</div>
<h4 className="font-medium text-neutral-200 mb-2">Build</h4>
<p className="text-xs text-neutral-400">Custom automation</p>
</div>
<div className="hidden md:block flex-1 h-0.5 bg-gradient-to-r from-purple-500 to-green-500 mx-8 relative">
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-green-500 rounded-full"></div>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
<i className="w-8 h-8 text-green-400" data-lucide="check-circle"></i>
</div>
<h4 className="font-medium text-neutral-200 mb-2">Deploy</h4>
<p className="text-xs text-neutral-400">10+ hours reclaimed</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20" id="proof">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16" style={{opacity: '0', animation: 'fadeSlideUp 0.8s ease-out 0.2s forwards'}}>
<h2 className="text-3xl md:text-4xl font-light tracking-tight text-neutral-100 mb-6">
                    This Isn't Magic. It's <span className="gradient-text">Operational Science</span>.
                </h2>
</div>
<div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
<div className="space-y-8" style={{opacity: '0', animation: 'fadeSlideRight 0.8s ease-out 0.4s forwards'}}>
<div className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 border border-neutral-800/50 rounded-xl p-6">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-blue-400" data-lucide="clock"></i>
</div>
<div>
<h3 className="font-medium text-blue-400">40% Time Waste</h3>
<p className="text-sm text-neutral-400">McKinsey research on knowledge workers</p>
</div>
</div>
<p className="text-neutral-300 text-sm">Manual data entry, searching for information, managing emails—our system reclaims this hidden workforce.</p>
</div>
<div className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 border border-neutral-800/50 rounded-xl p-6">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-green-400" data-lucide="target"></i>
</div>
<div>
<h3 className="font-medium text-green-400">Theory of Constraints</h3>
<p className="text-sm text-neutral-400">Proven business science</p>
</div>
</div>
<p className="text-neutral-300 text-sm">Fix the single weakest link, improve the entire system. Direct application creates exponential results.</p>
</div>
</div>
<div className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 border border-neutral-800/50 rounded-xl p-8" style={{opacity: '0', animation: 'fadeSlideLeft 0.8s ease-out 0.6s forwards'}}>
<div className="text-4xl text-cyan-400 mb-4">"</div>
<blockquote className="text-lg text-neutral-200 leading-relaxed mb-6 italic">
                        Before Automatick, every new client meant more chaos. In 6 months, we doubled capacity without adding headcount. I finally have freedom to work on the business.
                    </blockquote>
<div className="flex items-center gap-4">
<img alt="Sarah K." className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1494790108755-2616b612b002?w=60&amp;h=60&amp;fit=crop&amp;crop=face"/>
<div>
<cite className="text-neutral-300 font-medium not-italic">Sarah K.</cite>
<div className="text-sm text-neutral-400">CEO, $5M B2B SaaS</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 flowing-gradient" id="sprint">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl md:text-4xl font-light tracking-tight text-neutral-100 mb-8" style={{opacity: '0', animation: 'fadeSlideUp 0.8s ease-out 0.2s forwards'}}>
                Your 12-Week Sprint to <span className="gradient-text">Clarity &amp; Control</span>
</h2>
<div className="grid md:grid-cols-3 gap-6 mb-12" style={{opacity: '0', animation: 'fadeSlideUp 0.8s ease-out 0.4s forwards'}}>
<div className="bg-neutral-900/50 border border-neutral-800/50 rounded-xl p-6 hover:scale-105 transition-all duration-300">
<div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
<i className="w-6 h-6 text-red-400" data-lucide="search"></i>
</div>
<h3 className="font-medium text-neutral-200 mb-2">Week 1</h3>
<p className="text-sm text-neutral-400">Complete diagnostic &amp; roadmap</p>
</div>
<div className="bg-neutral-900/50 border border-neutral-800/50 rounded-xl p-6 hover:scale-105 transition-all duration-300">
<div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
<i className="w-6 h-6 text-blue-400" data-lucide="wrench"></i>
</div>
<h3 className="font-medium text-neutral-200 mb-2">Weeks 2-11</h3>
<p className="text-sm text-neutral-400">Build &amp; deploy automation</p>
</div>
<div className="bg-neutral-900/50 border border-neutral-800/50 rounded-xl p-6 hover:scale-105 transition-all duration-300">
<div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
<i className="w-6 h-6 text-green-400" data-lucide="check-circle"></i>
</div>
<h3 className="font-medium text-neutral-200 mb-2">Week 12</h3>
<p className="text-sm text-neutral-400">Training &amp; optimization</p>
</div>
</div>
<div className="max-w-2xl mx-auto space-y-4 mb-12" style={{opacity: '0', animation: 'fadeSlideUp 0.8s ease-out 0.6s forwards'}}>
<div className="flex items-center gap-3 text-left">
<i className="w-5 h-5 text-cyan-400" data-lucide="shield-check"></i>
<span className="text-neutral-300">Diagnostic confidence guarantee - 100% refund if not satisfied</span>
</div>
<div className="flex items-center gap-3 text-left">
<i className="w-5 h-5 text-cyan-400" data-lucide="clock"></i>
<span className="text-neutral-300">"10-Hour Recapture" guarantee or we work for free</span>
</div>
</div></div></section>
    </>
  );
}
