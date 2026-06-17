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
      

<nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-white px-6 py-6 md:px-12 flex justify-between items-center bg-white/0 backdrop-blur-[2px]">
<div className="text-sm font-semibold tracking-widest uppercase opacity-90">ATOMFlo</div>
<div className="hidden md:flex gap-8 text-xs font-medium tracking-wide opacity-70">
<span>Philosophy</span>
<span>System</span>
<span>Manifesto</span>
</div>
<div className="text-xs font-medium border border-white/30 rounded-full px-4 py-1.5 opacity-80 hover:bg-white hover:text-black transition-colors duration-500 cursor-pointer">
            Access Node
        </div>
</nav>

<section className="relative min-h-screen w-full flex flex-col justify-center items-center pt-24 overflow-hidden">

<div className="absolute inset-0 z-0 pointer-events-none opacity-40">
<svg className="w-full h-full" fill="none" preserveaspectratio="xMidYMid slice" viewbox="0 0 1440 900" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="gradientMain" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#e5e5e5" stop-opacity="0.2"></stop>
<stop offset="50%" stop-color="#a3a3a3"></stop>
<stop offset="100%" stop-color="#e5e5e5" stop-opacity="0.2"></stop>
</lineargradient>
<filter id="blurFilter">
<fegaussianblur in="SourceGraphic" stddeviation="2"></fegaussianblur>
</filter>
</defs>

<path className="animate-draw delay-100" d="M200,0 C200,300 720,200 720,450" fill="none" stroke="url(#gradientMain)" strokeWidth="1"></path>
<path className="animate-draw delay-300" d="M1240,0 C1240,300 720,200 720,450" fill="none" stroke="url(#gradientMain)" strokeWidth="1"></path>
<path className="animate-draw delay-500" d="M500,0 C500,200 720,300 720,450" fill="none" stroke="url(#gradientMain)" strokeWidth="1"></path>
<path className="animate-draw delay-100" d="M940,0 C940,200 720,300 720,450" fill="none" stroke="url(#gradientMain)" strokeWidth="1"></path>

<circle className="animate-flow-slow delay-500" cx="720" cy="450" fill="#111" r="1"></circle>
<circle className="opacity-50" cx="720" cy="450" fill="none" r="40" stroke="#f5f5f5" strokeWidth="1"></circle>
<circle className="opacity-30" cx="720" cy="450" fill="none" r="80" stroke="#fafafa" strokeWidth="1"></circle>

<path className="opacity-20" d="M720,450 L720,900" stroke="#111" stroke-dasharray="4 4" strokeWidth="1.5"></path>
</svg>
</div>

<div className="z-10 relative text-center max-w-4xl px-6">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-neutral-900 leading-[0.95] mb-8 animate-flow-slow">
                One system for work that<br/>actually moves forward.
            </h1>
<p className="text-lg md:text-xl text-neutral-500 font-light max-w-xl mx-auto leading-relaxed animate-flow-slow delay-300">
                CRM, projects, automation, and events—working together.<br/>
                Powered by AI that keeps context intact.
            </p>
</div>

<div className="absolute bottom-12 text-neutral-300 animate-flow-slow delay-500">
<iconify-icon icon="solar:arrow-down-linear" width="24"></iconify-icon>
</div>
</section>

<section className="w-full py-48 px-6 md:px-24 bg-white relative">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
<div className="space-y-6">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-neutral-900">
                    The silent cost of<br/>fragmentation.
                </h2>
<p className="text-neutral-500 font-light text-lg">
                    Parallel systems that never meet. Context bleeds out in the gaps between tools.
                </p>
</div>

<div className="h-64 w-full relative border border-dashed border-neutral-100 rounded-lg bg-neutral-50/50 flex items-center justify-around overflow-hidden">
<div className="flex flex-col items-center gap-4 opacity-30">
<div className="w-12 h-12 border border-neutral-400 rounded-full flex items-center justify-center">
<iconify-icon icon="solar:documents-linear" width="20"></iconify-icon>
</div>
</div>

<div className="w-px h-full bg-transparent"></div>
<div className="flex flex-col items-center gap-4 opacity-30">
<div className="w-12 h-12 border border-neutral-400 rounded-full flex items-center justify-center">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
</div>
<div className="w-px h-full bg-transparent"></div>
<div className="flex flex-col items-center gap-4 opacity-30">
<div className="w-12 h-12 border border-neutral-400 rounded-full flex items-center justify-center">
<iconify-icon icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-32 px-6 flex justify-center bg-neutral-50/30">
<div className="text-center max-w-3xl">
<span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6 block">The Shift</span>
<h3 className="text-4xl md:text-6xl font-medium tracking-tighter text-neutral-900 leading-tight">
                Most tools manage tasks. <br/>
<span className="text-neutral-400">ATOMFlo manages understanding.</span>
</h3>
</div>
</section>

<section className="w-full py-48 px-6 md:px-12 bg-white">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">

<div className="md:col-span-5 flex flex-col justify-center space-y-2">
<div className="group border-l-2 border-neutral-100 hover:border-neutral-900 pl-8 py-8 transition-all duration-500 cursor-default">
<h4 className="text-xl font-medium text-neutral-900 mb-2">1. Inputs</h4>
<p className="text-sm text-neutral-400 font-light group-hover:text-neutral-600 transition-colors">Raw data streams from every department arrive unstructured.</p>
</div>
<div className="group border-l-2 border-neutral-100 hover:border-neutral-900 pl-8 py-8 transition-all duration-500 cursor-default">
<h4 className="text-xl font-medium text-neutral-900 mb-2">2. Context</h4>
<p className="text-sm text-neutral-400 font-light group-hover:text-neutral-600 transition-colors">The system identifies relationships between seemingly unrelated events.</p>
</div>
<div className="group border-l-2 border-neutral-100 hover:border-neutral-900 pl-8 py-8 transition-all duration-500 cursor-default">
<h4 className="text-xl font-medium text-neutral-900 mb-2">3. Decisions</h4>
<p className="text-sm text-neutral-400 font-light group-hover:text-neutral-600 transition-colors">Signals collapse into clear, actionable directives.</p>
</div>
<div className="group border-l-2 border-neutral-100 hover:border-neutral-900 pl-8 py-8 transition-all duration-500 cursor-default">
<h4 className="text-xl font-medium text-neutral-900 mb-2">4. Memory</h4>
<p className="text-sm text-neutral-400 font-light group-hover:text-neutral-600 transition-colors">Outcomes are stored to refine future predictions.</p>
</div>
</div>

<div className="md:col-span-7 relative flex items-center justify-center h-full min-h-[500px]">

<div className="relative w-64 h-80 preserve-3d">

<div className="absolute inset-0 bg-white border border-neutral-200 rounded-lg shadow-sm transform translate-y-12 scale-90 opacity-40 z-0"></div>

<div className="absolute inset-0 bg-white border border-neutral-200 rounded-lg shadow-sm transform translate-y-6 scale-95 opacity-70 z-10 flex items-center justify-center">
<div className="w-full h-px bg-neutral-100"></div>
</div>

<div className="absolute inset-0 bg-white border border-neutral-300 rounded-lg shadow-lg z-20 flex flex-col items-center justify-center p-8 text-center">
<iconify-icon className="text-neutral-800 mb-4" icon="solar:cpu-linear" width="48"></iconify-icon>
<span className="text-xs font-mono text-neutral-400 tracking-widest uppercase">Processing</span>
</div>

<div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-300 to-transparent -translate-x-1/2 z-30"></div>
</div>
</div>
</div>
</section>

<section className="w-full py-32 px-6 flex flex-col items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">

<svg className="animate-[spin_60s_linear_infinite]" height="600" viewbox="0 0 600 600" width="600">
<circle className="text-neutral-400" cx="300" cy="300" fill="none" r="280" stroke="currentColor" stroke-dasharray="10 10" strokeWidth="1"></circle>
<circle className="text-neutral-300" cx="300" cy="300" fill="none" r="200" stroke="currentColor" strokeWidth="0.5"></circle>
</svg>
</div>
<div className="relative z-10 max-w-2xl text-center space-y-8">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-neutral-900">Compound Intelligence</h2>
<p className="text-lg text-neutral-500 font-light leading-relaxed">
                Every decision made within ATOMFlo feeds back into the model. <br/>The system doesn't just work; it learns how <em>you</em> work.
            </p>
</div>
</section>

<section className="w-full py-48 px-6 bg-neutral-900 text-white">
<div className="max-w-4xl mx-auto text-left">
<p className="text-sm font-mono text-neutral-500 mb-8 uppercase tracking-widest">Built for</p>
<h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-none mb-12">
                Teams operating at <br/>scale and speed.
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-neutral-800 pt-12">
<div className="space-y-4">
<span className="block w-2 h-2 bg-neutral-500 rounded-full"></span>
<p className="text-neutral-400 text-sm">Engineers building infrastructure, not maintenance.</p>
</div>
<div className="space-y-4">
<span className="block w-2 h-2 bg-neutral-500 rounded-full"></span>
<p className="text-neutral-400 text-sm">Product leaders shaping markets, not backlogs.</p>
</div>
<div className="space-y-4">
<span className="block w-2 h-2 bg-neutral-500 rounded-full"></span>
<p className="text-neutral-400 text-sm">Designers resolving systems, not pixels.</p>
</div>
</div>
</div>
</section>

<section className="w-full py-32 px-6 md:px-12 bg-white">
<div className="max-w-7xl mx-auto">
<div className="mb-24">
<span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase">Architecture</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-neutral-200">

<div className="p-8 border-r border-b border-neutral-200 hover:bg-neutral-50 transition-colors duration-300 aspect-square flex flex-col justify-between">
<iconify-icon className="text-neutral-400" icon="solar:tuning-square-2-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-neutral-900">Logic Core</span>
</div>

<div className="p-8 border-r border-b border-neutral-200 hover:bg-neutral-50 transition-colors duration-300 aspect-square flex flex-col justify-between">
<iconify-icon className="text-neutral-400" icon="solar:database-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-neutral-900">Unified State</span>
</div>

<div className="p-8 border-r border-b border-neutral-200 hover:bg-neutral-50 transition-colors duration-300 aspect-square flex flex-col justify-between">
<iconify-icon className="text-neutral-400" icon="solar:route-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-neutral-900">Flow Engine</span>
</div>

<div className="p-8 border-r border-b border-neutral-200 hover:bg-neutral-50 transition-colors duration-300 aspect-square flex flex-col justify-between">
<iconify-icon className="text-neutral-400" icon="solar:shield-check-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-neutral-900">Governance</span>
</div>
</div>
</div>
</section>

<section className="w-full py-48 px-6 text-center">
<div className="max-w-2xl mx-auto space-y-12">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-900">
                Different teams. One system.
            </h2>
<div className="flex justify-center">
<button className="group relative px-8 py-3 bg-transparent border border-neutral-300 rounded-full overflow-hidden transition-all duration-300 hover:border-neutral-900 hover:pr-12">
<span className="relative z-10 text-sm font-medium text-neutral-900 tracking-wide">Request Access</span>
<span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</button>
</div>
</div>
</section>

<footer className="w-full border-t border-neutral-100 py-24 px-6 md:px-12 bg-white">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
<div>
<span className="text-sm font-bold tracking-widest uppercase text-neutral-900">ATOMFlo</span>
<p className="mt-4 text-xs text-neutral-400 max-w-xs leading-relaxed">
                    An intelligent decision system for the modern enterprise. Architected in San Francisco.
                </p>
</div>
<div className="flex gap-16">
<div className="flex flex-col gap-4">
<span className="text-xs font-semibold text-neutral-900 uppercase tracking-wider">Platform</span>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Intelligence</a>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Integrations</a>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Security</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs font-semibold text-neutral-900 uppercase tracking-wider">Company</span>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Manifesto</a>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Careers</a>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Contact</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-24 flex justify-between items-end border-t border-neutral-50 pt-8">
<span className="text-[10px] text-neutral-300 uppercase tracking-widest">© 2024 ATOMFlo Systems Inc.</span>
<div className="flex gap-4">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-[10px] text-neutral-400 font-mono">SYSTEM OPERATIONAL</span>
</div>
</div>
</footer>

    </>
  );
}
