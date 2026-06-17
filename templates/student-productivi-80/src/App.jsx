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



      lucide.createIcons({
          attrs: {
              'stroke-width': 1.5
          }
      });

      function toggleModal(show) {
          const modal = document.getElementById('application-modal');
          if (show) {
              modal.classList.remove('hidden');
              modal.classList.add('flex');
          } else {
              modal.classList.add('hidden');
              modal.classList.remove('flex');
          }
      }
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-indigo-500" data-lucide="brain-circuit"></i>
<span className="text-white font-medium tracking-tight text-sm">
            NEUROFLOW
          </span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide">
<a className="hover:text-white transition-colors duration-200" href="#">
            METHODOLOGY
          </a>
<a className="hover:text-white transition-colors duration-200" href="#">
            CURRICULUM
          </a>
<a className="hover:text-white transition-colors duration-200" href="#">
            RESEARCH
          </a>
</div>
<button className="group relative px-4 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all duration-300" onclick="toggleModal(true)">
<span className="text-xs font-medium text-white group-hover:text-indigo-400 transition-colors">
            Apply for Cohort IV
          </span>
<div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10 group-hover:ring-indigo-500/30 transition-all"></div>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute inset-0 bg-grid z-0"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/20 blur-[120px] rounded-full opacity-40 pointer-events-none"></div>
<div className="absolute top-20 left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-blue-500/10 blur-[60px] rounded-full opacity-60 pointer-events-none"></div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-[10px] font-medium tracking-widest uppercase text-indigo-300">
            System V.2.0 Online
          </span>
</div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tighter leading-[1.1] mb-6 text-glow">
          Reprogram Your
          <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-indigo-300">
            Cognitive Operating System
          </span>
</h1>
<p className="text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed font-light">
          The first productivity protocol built on neuro-psychology for
          high-performance students. Optimize dopamine, manage cognitive load,
          and engineer deep flow states.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="relative px-8 py-3 bg-white text-black rounded-lg font-medium text-sm hover:bg-slate-200 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]" onclick="toggleModal(true)">
            Initialize Protocol
          </button>
<button className="px-8 py-3 rounded-lg border border-white/10 bg-white/5 text-sm font-medium text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
            View Data Model
          </button>
</div>
</div>
</section>


<section className="py-24 border-t border-white/5 bg-[#080808]">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-medium text-white tracking-tighter mb-4">
            Elite transformation
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="space-y-4">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
<i className="w-5 h-5 text-indigo-400" data-lucide="zap"></i>
</div>
<h3 className="text-white font-medium">Eliminate Procrastination</h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Dissolve the friction between intention and action using effective
              neuro-psychology - based frameworks
            </p>
</div>
<div className="space-y-4">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
<i className="w-5 h-5 text-indigo-400" data-lucide="infinity"></i>
</div>
<h3 className="text-white font-medium">Deep Consistency</h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Build an identity-level discipline that operates on autopilot
              regardless of mood, circumstances, or motivation.
            </p>
</div>
<div className="space-y-4">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
<i className="w-5 h-5 text-indigo-400" data-lucide="sun"></i>
</div>
<h3 className="text-white font-medium">Psychological Peace</h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Achieve your most ambitious goals effectively without stress,
              burnout, or anxiety.
            </p>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-900/5 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-8">
          Utilized by top performers at
        </p>
<div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale">
<div className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="landmark"></i>
<span className="font-bold tracking-tighter">STANFORD</span>
</div>
<div className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="library"></i>
<span className="font-bold tracking-tighter">MIT</span>
</div>
<div className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="graduation-cap"></i>
<span className="font-bold tracking-tighter">OXFORD</span>
</div>
<div className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="book-open"></i>
<span className="font-bold tracking-tighter">CAMBRIDGE</span>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-grid opacity-20"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-indigo-600/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-6">
          Upgrade your mind.
        </h2>
<p className="text-slate-400 mb-10 font-light">
          Join the cohort of students applying scientific rigor to their
          personal productivity. Enrollment closes in 48 hours.
        </p>
<div className="glass-card p-1 rounded-full inline-flex items-center max-w-md mx-auto">
<input className="bg-transparent border-none text-white text-sm px-6 py-3 w-64 focus:ring-0 placeholder-slate-600 outline-none" placeholder="university@email.edu" type="email"/>
<button className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-indigo-50 transition-colors" onclick="toggleModal(true)">
            Request Access
          </button>
</div>
<p className="mt-4 text-[10px] text-slate-600 uppercase tracking-wider">
          Limited spots available for Q3 Cohort
        </p>
</div>
</section>

<div className="fixed inset-0 z-[100] hidden items-center justify-center p-4" id="application-modal">

<div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onclick="toggleModal(false)"></div>

<div className="relative w-full max-w-lg glass-card rounded-2xl shadow-2xl modal-animate overflow-hidden">
<div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-white/5">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-indigo-400" data-lucide="scan-face"></i>
<span className="text-sm font-medium text-white tracking-tight">
              Cognitive Profile Assessment
            </span>
</div>
<button className="text-slate-400 hover:text-white transition-colors" onclick="toggleModal(false)">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<div className="p-8 space-y-6">
<div>
<h3 className="text-lg font-medium text-white mb-1">Applicant Data</h3>
<p className="text-xs text-slate-500">
              Provide accurate metrics to determine system fit.
            </p>
</div>
<div className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                  Full Name
                </label>
<input className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-colors placeholder-slate-700" placeholder="Alex Chen" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                  Academic Email
                </label>
<input className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-colors placeholder-slate-700" placeholder="alex@stanford.edu" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                Current Institution
              </label>
<input className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-colors placeholder-slate-700" type="text"/>
</div>
<div className="space-y-3 pt-2">
<label className="text-[10px] uppercase tracking-wider text-slate-500 font-medium block">
                Primary Cognitive Bottleneck
              </label>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<label className="flex items-center gap-3 p-3 rounded-lg border border-white/10 bg-[#0a0a0a] hover:bg-white/5 cursor-pointer transition-colors group">
<div className="w-4 h-4 rounded-full border border-slate-600 flex items-center justify-center group-hover:border-indigo-500 transition-colors">
<div className="w-2 h-2 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<span className="text-xs text-slate-300">Attention Span</span>
</label>
<label className="flex items-center gap-3 p-3 rounded-lg border border-white/10 bg-[#0a0a0a] hover:bg-white/5 cursor-pointer transition-colors group">
<div className="w-4 h-4 rounded-full border border-slate-600 flex items-center justify-center group-hover:border-indigo-500 transition-colors">
<div className="w-2 h-2 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<span className="text-xs text-slate-300">Memory Retention</span>
</label>
<label className="flex items-center gap-3 p-3 rounded-lg border border-white/10 bg-[#0a0a0a] hover:bg-white/5 cursor-pointer transition-colors group">
<div className="w-4 h-4 rounded-full border border-slate-600 flex items-center justify-center group-hover:border-indigo-500 transition-colors">
<div className="w-2 h-2 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<span className="text-xs text-slate-300">Procrastination</span>
</label>
<label className="flex items-center gap-3 p-3 rounded-lg border border-white/10 bg-[#0a0a0a] hover:bg-white/5 cursor-pointer transition-colors group">
<div className="w-4 h-4 rounded-full border border-slate-600 flex items-center justify-center group-hover:border-indigo-500 transition-colors">
<div className="w-2 h-2 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<span className="text-xs text-slate-300">Energy Management</span>
</label>
</div>
</div>
</div>
<div className="pt-4 flex items-center justify-between">
<span className="text-[10px] text-slate-600">
              Analysis typically takes 24-48h
            </span>
<button className="bg-white text-black px-5 py-2 rounded-md text-sm font-medium hover:bg-slate-200 transition-colors">
              Submit Analysis
            </button>
</div>
</div>
</div>
</div>
<footer className="border-t border-white/5 py-12 bg-[#020202]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-600" data-lucide="brain-circuit"></i>
<span className="text-slate-600 font-medium tracking-tight text-xs">
            NEUROFLOW SYSTEMS INC.
          </span>
</div>
<div className="flex gap-6 text-xs text-slate-600">
<a className="hover:text-slate-400 transition-colors" href="#">
            Privacy Protocol
          </a>
<a className="hover:text-slate-400 transition-colors" href="#">
            Terms of Service
          </a>
<a className="hover:text-slate-400 transition-colors" href="#">Twitter</a>
</div>
</div>
</footer>


    </>
  );
}
