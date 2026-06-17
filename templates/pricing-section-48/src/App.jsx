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
      

<div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>

<div className="absolute top-0 left-[-10%] w-[600px] h-[600px] bg-purple-600/20 blur-[140px] rounded-full pointer-events-none mix-blend-screen z-0"></div>
<div className="absolute bottom-0 right-[-10%] w-[600px] h-[600px] bg-cyan-600/15 blur-[140px] rounded-full pointer-events-none mix-blend-screen z-0"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

<div className="text-center max-w-3xl mx-auto mb-20 space-y-5 mt-12">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">Choose the right website for your business</h2>
<p className="text-lg text-zinc-400">Simple, fast, and built to help you get clients.</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">

<div className="bg-[#09090b]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-8 flex flex-col relative overflow-hidden group hover:border-white/10 transition-colors duration-500">
<div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[80%] h-48 bg-purple-500/10 blur-[50px] pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-60 z-0"></div>
<div className="relative z-10 flex flex-col h-full">
<h3 className="text-xl font-semibold text-white mb-3">Landing Page</h3>
<p className="text-lg text-zinc-400 mb-8 min-h-[56px]">A fast, high-converting page to start getting leads.</p>
<div className="flex items-end gap-2 mb-10">
<span className="text-5xl font-semibold tracking-tight text-white">600</span>
<span className="text-lg font-medium text-zinc-500 mb-1">dh</span>
</div>
<div className="text-sm font-medium text-zinc-500 mb-5 uppercase tracking-wider">What's included</div>
<ul className="space-y-4 flex-1 mb-10">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-300">Conversion-focused design</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-300">WhatsApp integration</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-300">Mobile optimized</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-300">Clean and simple structure</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-300">Delivered in 3–5 days</span>
</li>
</ul>
<button className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 text-white text-base font-medium hover:from-white/10 hover:to-white/5 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                        Get your website
                        <i className="w-4 h-4 text-zinc-500 group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-all" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="bg-[#09090b]/90 backdrop-blur-xl border border-cyan-500/40 rounded-2xl p-8 flex flex-col relative overflow-hidden lg:scale-105 shadow-[0_0_40px_-15px_rgba(6,182,212,0.3)] z-20 group">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-cyan-500/10 blur-[50px] pointer-events-none z-0"></div>
<div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[90%] h-56 bg-cyan-500/20 blur-[60px] pointer-events-none z-0"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
<h3 className="text-xl font-semibold text-white">Business Website</h3>
<span className="inline-flex items-center self-start bg-cyan-500/10 text-cyan-400 text-xs font-semibold px-2.5 py-1 rounded-full border border-cyan-500/20">
                            Most Popular
                        </span>
</div>
<p className="text-lg text-cyan-50/70 mb-8 min-h-[56px]">A complete website designed to present your business and generate clients.</p>
<div className="flex items-end gap-2 mb-10">
<span className="text-5xl font-semibold tracking-tight text-white">2500</span>
<span className="text-lg font-medium text-cyan-500/70 mb-1">dh</span>
</div>
<div className="text-sm font-medium text-cyan-500/70 mb-5 uppercase tracking-wider">What's included</div>
<ul className="space-y-4 flex-1 mb-10">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-100">Up to 5 pages</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-100">Custom design (Figma → build)</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-100">WordPress or custom dev</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-100">WhatsApp lead integration</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-100">Mobile responsive</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-100">Delivered in 5–7 days</span>
</li>
</ul>
<button className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-b from-cyan-500/10 to-transparent border border-cyan-500/50 hover:from-cyan-500/20 hover:to-cyan-500/5 transition-all duration-300 text-cyan-50 text-base font-semibold flex items-center justify-center gap-2 group/btn shadow-[0_0_15px_-3px_rgba(6,182,212,0.15)] hover:shadow-[0_0_20px_-3px_rgba(6,182,212,0.25)]">
                        Start getting clients
                        <i className="w-4 h-4 text-cyan-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-all" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="bg-[#09090b]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-8 flex flex-col relative overflow-hidden group hover:border-white/10 transition-colors duration-500">
<div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[80%] h-48 bg-cyan-500/10 blur-[50px] pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-60 z-0"></div>
<div className="relative z-10 flex flex-col h-full">
<h3 className="text-xl font-semibold text-white mb-3">Advanced Website</h3>
<p className="text-lg text-zinc-400 mb-8 min-h-[56px]">A scalable website tailored to your business needs.</p>
<div className="flex items-end gap-2 mb-10">
<span className="text-lg font-medium text-zinc-500 mb-1.5">from</span>
<span className="text-5xl font-semibold tracking-tight text-white">6000</span>
<span className="text-lg font-medium text-zinc-500 mb-1">dh</span>
</div>
<div className="text-sm font-medium text-zinc-500 mb-5 uppercase tracking-wider">What's included</div>
<ul className="space-y-4 flex-1 mb-10">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-300">Custom design &amp; dev</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-300">Advanced pages &amp; structure</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-300">Flexible features</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-300">Performance optimized</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-300">Built for long-term growth</span>
</li>
</ul>
<button className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 text-white text-base font-medium hover:from-white/10 hover:to-white/5 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                        Discuss your project
                        <i className="w-4 h-4 text-zinc-500 group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-all" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
<div className="mt-16 mb-24 flex justify-center">
<button className="px-5 py-2.5 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 backdrop-blur-md text-sm text-zinc-400 transition-colors duration-300 flex items-center gap-2 group">
                Want enterprise features? 
                <span className="text-white font-medium ml-1">Contact Us</span>
<i className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>

<div className="max-w-6xl mx-auto pt-20 border-t border-white/5 relative z-10">

<div className="text-center max-w-2xl mx-auto mb-16 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
<i className="w-4 h-4" data-lucide="wand-2" strokeWidth="1.5"></i>
                    Our impact
                </div>
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white" style={{fontFamily: '\'Poppins\', sans-serif'}}>
                    See the transformation
                </h2>
<p className="text-lg text-zinc-400">
                    From a basic website to a professional experience — example from a real project (Adventure Keys).
                </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

<div className="bg-[#09090b]/50 backdrop-blur-xl border border-white/5 rounded-2xl p-8 flex flex-col relative overflow-hidden group opacity-85 hover:opacity-100 transition-all duration-500">

<div className="flex flex-col mb-8">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
<i className="w-5 h-5 text-zinc-500" data-lucide="monitor-off" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-zinc-300" style={{fontFamily: '\'Poppins\', sans-serif'}}>Before</h3>
</div>
<p className="text-lg text-zinc-500 min-h-[56px]">
                            A basic website with limited structure and unclear user flow.
                        </p>
</div>

<div className="w-full aspect-video bg-[#111113] rounded-xl border border-white/5 p-4 flex flex-col gap-3 relative overflow-hidden mb-8 grayscale opacity-70">

<div className="w-full h-8 bg-white/5 rounded flex items-center px-3 justify-between">
<div className="w-16 h-2 bg-white/10 rounded-full"></div>
<div className="flex gap-2">
<div className="w-8 h-2 bg-white/10 rounded-full"></div>
<div className="w-8 h-2 bg-white/10 rounded-full"></div>
</div>
</div>
<div className="flex-1 flex gap-3">
<div className="w-1/3 h-full bg-white/5 rounded flex flex-col p-2 gap-2">
<div className="w-full h-12 bg-white/5 rounded"></div>
<div className="w-3/4 h-2 bg-white/10 rounded-full mt-2"></div>
<div className="w-1/2 h-2 bg-white/10 rounded-full"></div>
</div>
<div className="flex-1 flex flex-col gap-3">
<div className="w-full h-24 bg-white/5 rounded"></div>
<div className="w-full flex-1 bg-white/5 rounded"></div>
</div>
</div>
</div>

<ul className="space-y-4 mt-auto">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-zinc-600 shrink-0 mt-0.5" data-lucide="x" strokeWidth="1.5"></i>
<span className="text-base text-zinc-400">No clear structure</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-zinc-600 shrink-0 mt-0.5" data-lucide="x" strokeWidth="1.5"></i>
<span className="text-base text-zinc-400">Outdated design</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-zinc-600 shrink-0 mt-0.5" data-lucide="x" strokeWidth="1.5"></i>
<span className="text-base text-zinc-400">Low engagement</span>
</li>
</ul>
</div>

<div className="bg-[#09090b]/90 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 flex flex-col relative overflow-hidden group shadow-[0_0_30px_-15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_40px_-15px_rgba(6,182,212,0.3)] hover:border-cyan-500/50 transition-all duration-500">

<div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[60px] pointer-events-none rounded-full z-0"></div>

<div className="flex flex-col mb-8 relative z-10">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 shrink-0">
<i className="w-5 h-5 text-cyan-400" data-lucide="monitor-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white" style={{fontFamily: '\'Poppins\', sans-serif'}}>After</h3>
</div>
<p className="text-lg text-cyan-50/70 min-h-[56px]">
                            A modern, structured website designed to improve clarity and user experience.
                        </p>
</div>

<div className="w-full aspect-video bg-[#0c0d10] rounded-xl border border-cyan-500/20 p-4 flex flex-col gap-3 relative overflow-hidden mb-8 z-10">

<div className="w-full h-10 bg-white/5 rounded-md flex items-center px-4 justify-between border border-white/5">
<div className="w-20 h-2.5 bg-cyan-400/80 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.3)]"></div>
<div className="flex gap-4">
<div className="w-10 h-2 bg-white/20 rounded-full"></div>
<div className="w-10 h-2 bg-white/20 rounded-full"></div>
<div className="w-16 h-6 bg-cyan-500/20 border border-cyan-500/30 rounded-full flex items-center justify-center -my-2">
<div className="w-8 h-1.5 bg-cyan-400/80 rounded-full"></div>
</div>
</div>
</div>
<div className="flex-1 flex gap-4">
<div className="flex-1 bg-gradient-to-br from-white/5 to-transparent border border-white/5 rounded-lg p-4 flex flex-col justify-center">
<div className="w-3/4 h-4 bg-white/80 rounded-full mb-3"></div>
<div className="w-1/2 h-4 bg-white/80 rounded-full mb-6"></div>
<div className="w-full h-2 bg-white/20 rounded-full mb-2"></div>
<div className="w-5/6 h-2 bg-white/20 rounded-full mb-6"></div>
<div className="w-24 h-8 bg-cyan-500/90 rounded-md"></div>
</div>
<div className="w-2/5 h-full bg-cyan-900/20 border border-cyan-500/20 rounded-lg relative overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent"></div>
<i className="w-8 h-8 text-cyan-500/40" data-lucide="image" strokeWidth="1.5"></i>
</div>
</div>
</div>

<ul className="space-y-4 mt-auto relative z-10">
<li className="flex items-start gap-3">
<div className="mt-1 bg-cyan-500/20 rounded-full p-0.5 border border-cyan-500/30">
<i className="w-3.5 h-3.5 text-cyan-400 shrink-0" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-base text-zinc-200">Clean and modern layout</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 bg-cyan-500/20 rounded-full p-0.5 border border-cyan-500/30">
<i className="w-3.5 h-3.5 text-cyan-400 shrink-0" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-base text-zinc-200">Clear navigation</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 bg-cyan-500/20 rounded-full p-0.5 border border-cyan-500/30">
<i className="w-3.5 h-3.5 text-cyan-400 shrink-0" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-base text-zinc-200">Better user experience</span>
</li>
</ul>
</div>
</div>
</div>
</div>


    </>
  );
}
