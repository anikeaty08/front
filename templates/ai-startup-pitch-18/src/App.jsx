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
      

<header className="w-full px-8 py-6 flex justify-between items-start border-b border-white/5">
<div className="space-y-1">
<h1 className="text-white font-semibold text-lg tracking-tight">StartupHakk-AI Pitch Deck</h1>
<p className="text-gray-500 text-sm font-light">Seed Round Presentation</p>
</div>
<div className="text-gray-600 text-sm font-light">
            Slide 11 of 13
        </div>
</header>

<main className="flex-grow w-full max-w-7xl mx-auto px-6 py-12 space-y-12">

<div className="text-center space-y-3">
<h2 className="text-5xl md:text-6xl text-white font-semibold tracking-tighter">2026 Roadmap</h2>
<p className="text-xl text-gray-400 font-light">Three AI-SaaS platforms launching in 2025</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-[#0b0f19] border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-400/50 transition-colors duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent rounded-2xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full">
<span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-cyan-400 text-[#05080f] text-xs font-bold tracking-wide w-fit mb-6">
                        JANUARY 2025
                    </span>
<h3 className="text-3xl text-white font-semibold tracking-tight mb-2">CorpTrainer.ai</h3>
<p className="text-cyan-400 text-lg font-medium mb-4">AI-Powered Learning</p>
<p className="text-gray-400 text-base leading-relaxed font-light mb-auto">
                        Replace corporate trainers with AI that knows your company's processes, products, and policies.
                    </p>
<div className="mt-8 pt-6 border-t border-white/5">
<p className="text-gray-500 text-sm">Target: Corporate Training Depts</p>
</div>
</div>
</div>

<div className="group relative bg-[#0b0f19] border border-orange-500/30 rounded-2xl p-8 hover:border-orange-400/50 transition-colors duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent rounded-2xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full">
<span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-orange-400 text-[#05080f] text-xs font-bold tracking-wide w-fit mb-6">
                        APRIL 2025
                    </span>
<h3 className="text-3xl text-white font-semibold tracking-tight mb-2">SwiftCaseLegal.ai</h3>
<p className="text-orange-400 text-lg font-medium mb-4">Legal Practice Management</p>
<p className="text-gray-400 text-base leading-relaxed font-light mb-auto">
                        AI-powered case management, document analysis, and research for small/mid-size law firms.
                    </p>
<div className="mt-8 pt-6 border-t border-white/5">
<p className="text-gray-500 text-sm">Target: Small Law Firms</p>
</div>
</div>
</div>

<div className="group relative bg-[#0b0f19] border border-emerald-500/30 rounded-2xl p-8 hover:border-emerald-400/50 transition-colors duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent rounded-2xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full">
<span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-emerald-400 text-[#05080f] text-xs font-bold tracking-wide w-fit mb-6">
                        JULY 2025
                    </span>
<h3 className="text-3xl text-white font-semibold tracking-tight mb-2">DealTools.ai</h3>
<p className="text-emerald-400 text-lg font-medium mb-4">Deal Analysis</p>
<p className="text-gray-400 text-base leading-relaxed font-light mb-auto">
                        AI-driven property analysis, deal comparison, and investment recommendations for agents and investors.
                    </p>
<div className="mt-8 pt-6 border-t border-white/5">
<p className="text-gray-500 text-sm">Target: Real Estate Professionals</p>
</div>
</div>
</div>
</div>

<div className="bg-[#0b0f19] border border-white/5 rounded-3xl p-8 md:p-10 relative overflow-hidden">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
<h3 className="text-2xl text-white font-semibold tracking-tight">12-Month Revenue Projection</h3>
<div className="bg-[#161b28] border border-white/5 rounded-lg px-6 py-3 shadow-lg">
<span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Total Revenue</span>
<span className="block text-2xl font-bold text-cyan-400">$1M</span>
</div>
</div>

<div className="relative w-full h-[350px] md:h-[400px]">

<div className="absolute left-0 top-0 bottom-8 w-12 flex flex-col justify-between text-xs text-gray-500 font-light text-right pr-2">
<span>$120K</span>
<span>$90K</span>
<span>$60K</span>
<span>$30K</span>
<span>$0K</span>
</div>

<div className="absolute left-14 right-0 top-3 bottom-8">

<div className="w-full h-full flex flex-col justify-between">
<div className="w-full h-px bg-white/5 border-t border-dashed border-white/10"></div>
<div className="w-full h-px bg-white/5 border-t border-dashed border-white/10"></div>
<div className="w-full h-px bg-white/5 border-t border-dashed border-white/10"></div>
<div className="w-full h-px bg-white/5 border-t border-dashed border-white/10"></div>
<div className="w-full h-px bg-gray-700"></div> 
</div>

<svg className="absolute inset-0 w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 1000 300">
<defs>
<lineargradient id="cyanGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#22d3ee" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#22d3ee" stop-opacity="0"></stop>
</lineargradient>
<lineargradient id="orangeGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#fb923c" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#fb923c" stop-opacity="0"></stop>
</lineargradient>
<lineargradient id="greenGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#34d399" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#34d399" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path d="M 0,300 L 0,225 L 1000,50 L 1000,300 Z" fill="url(#cyanGradient)"></path>
<path d="M 0,225 L 1000,50" fill="none" stroke="#22d3ee" strokeLinecap="round" strokeWidth="3"></path>

<path d="M 250,300 Q 400,280 1000,80 L 1000,300 L 250,300 Z" fill="url(#orangeGradient)"></path>
<path d="M 250,300 Q 400,280 1000,80" fill="none" stroke="#fb923c" strokeLinecap="round" strokeWidth="3"></path>

<path d="M 500,300 Q 650,290 1000,140 L 1000,300 L 500,300 Z" fill="url(#greenGradient)"></path>
<path d="M 500,300 Q 650,290 1000,140" fill="none" stroke="#34d399" strokeLinecap="round" strokeWidth="3"></path>
</svg>
</div>

<div className="absolute left-14 right-0 bottom-0 flex justify-between text-xs text-gray-500 font-light pt-2 border-t border-gray-800">
<span className="w-8 text-center">Jan</span>
<span className="w-8 text-center">Feb</span>
<span className="w-8 text-center">Mar</span>
<span className="w-8 text-center">Apr</span>
<span className="w-8 text-center">May</span>
<span className="w-8 text-center">Jun</span>
<span className="w-8 text-center">Jul</span>
<span className="w-8 text-center">Aug</span>
<span className="w-8 text-center">Sep</span>
<span className="w-8 text-center">Oct</span>
<span className="w-8 text-center">Nov</span>
<span className="w-8 text-center">Dec</span>
</div>
</div>

<div className="flex flex-wrap justify-center gap-8 mt-6">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-cyan-400 ring-2 ring-cyan-400/20"></div>
<span className="text-gray-400 text-sm">CorpTrainer.ai</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-orange-400 ring-2 ring-orange-400/20"></div>
<span className="text-gray-400 text-sm">SwiftCaseLegal.ai</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-emerald-400/20"></div>
<span className="text-gray-400 text-sm">DealTools.ai</span>
</div>
</div>
</div>
</main>


    </>
  );
}
