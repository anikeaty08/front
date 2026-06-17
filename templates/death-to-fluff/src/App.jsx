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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const cards = document.querySelectorAll('.spotlight-card');
        cards.forEach(card => {
            card.onmousemove = e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            };
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
      

<header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-6">
<nav aria-label="Main menu" className="border-white/[0.08] flex shadow-black/80 bg-[#0A0A0A]/90 w-full max-w-4xl border rounded-full p-1.5 pl-3 shadow-2xl backdrop-blur-md items-center justify-between">
<a aria-label="Home" className="flex items-center gap-3 pr-4 group shrink-0" href="/">
<div className="flex shadow-lg shadow-green-500/10 overflow-hidden group-hover:bg-green-500/20 group-hover:border-green-500/30 transition-all duration-300 bg-green-500/10 w-9 h-9 border-green-500/20 border rounded-xl relative items-center justify-center">
<iconify-icon aria-hidden="true" className="text-green-500 transition-transform duration-300 group-hover:scale-110" height="20" icon="solar:flame-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight text-sm">Death to Fluff</span>
</a>
<div className="flex shrink-0 border-white/10 border-l ml-2 pl-4 items-center">
<a className="text-sm hover:bg-green-600 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5 whitespace-nowrap font-medium text-white bg-green-500 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-[0_0_15px_rgba(34,197,94,0.2)]" href="#demo">
                    Book My Call
                    <iconify-icon aria-hidden="true" height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</nav>
</header>
<main>

<section className="overflow-hidden min-h-[90vh] pt-44 pb-20 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-green-600/10 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen z-0"></div>
<div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none"></div>

<div className="absolute inset-0 bg-signal-noise z-0 pointer-events-none"></div>
<div className="z-10 text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5 text-green-300 text-xs uppercase font-medium tracking-wide mb-8 hover:border-green-500/40 transition-colors cursor-default shadow-[0_0_20px_rgba(34,197,94,0.1)] backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-signal"></span>
                    Modern Sales Strategy · Pipeline Quality
                </div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.05] text-5xl font-semibold text-white tracking-tight mb-8">
                    Your Pipeline Isn’t Broken.<br/> <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-zinc-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">It’s Full of Noise.</span>
</h1>
<p className="leading-relaxed text-lg font-light text-zinc-400 max-w-2xl mr-auto mb-10 ml-auto">
                    Belal Batrawy helps sales teams cut through what doesn't matter and focus on what actually creates pipeline.
                </p>
<div className="flex flex-col mb-20 items-center justify-center">
<div className="flex w-full max-w-lg mb-6 pr-4 pl-4 items-center justify-center">
<a className="group relative inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-green-500 px-8 text-base font-medium text-white transition-all duration-300 hover:bg-green-600 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(34,197,94,0.3)] hover:shadow-[0_0_60px_rgba(34,197,94,0.5)] ring-1 ring-green-400/20" href="#demo">
                            Fix My Pipeline
                            <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" height="18" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>

<div aria-hidden="true" className="hidden md:flex flex-row items-center justify-between w-full z-10 max-w-5xl mx-auto relative" style={{minHeight: '450px', padding: '2rem 0'}}>
<style>
                        @keyframes pulseLine {
                            0% { left: -10%; opacity: 0; }
                            10% { opacity: 1; }
                            90% { opacity: 1; }
                            100% { left: 100%; opacity: 0; }
                        }
                        @keyframes floatGentle {
                            0%, 100% { transform: translateY(0); }
                            50% { transform: translateY(-4px); }
                        }
                        @keyframes pulseGlow {
                            0%, 100% { box-shadow: 0 0 30px rgba(34, 197, 94, 0.05); border-color: rgba(34, 197, 94, 0.2); }
                            50% { box-shadow: 0 0 50px rgba(34, 197, 94, 0.2); border-color: rgba(34, 197, 94, 0.4); }
                        }
                    </style>

<div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0 pointer-events-none"></div>
<div className="absolute top-1/2 left-0 h-[2px] w-1/3 bg-gradient-to-r from-transparent via-green-500 to-transparent -translate-y-1/2 z-0 pointer-events-none" style={{animation: 'pulseLine 3s cubic-bezier(0.4, 0, 0.2, 1) infinite'}}></div>

<div className="w-[280px] flex flex-col gap-3 z-10 text-left">
<div className="text-xs font-mono text-zinc-500 uppercase tracking-wide pl-1 mb-2">The Noise (Most Teams)</div>
<div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#09090b]/90 backdrop-blur-md border border-white/5 shadow-lg relative transition-all" style={{animation: 'floatGentle 6s ease-in-out infinite'}}>
<iconify-icon className="text-red-500 shrink-0" icon="solar:close-circle-linear" width="18"></iconify-icon>
<span className="text-sm font-normal text-zinc-300">Chase activity instead of quality</span>
</div>
<div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#09090b]/90 backdrop-blur-md border border-white/5 shadow-lg relative transition-all" style={{animation: 'floatGentle 6s ease-in-out 1.5s infinite'}}>
<iconify-icon className="text-red-500 shrink-0" icon="solar:close-circle-linear" width="18"></iconify-icon>
<span className="text-sm font-normal text-zinc-300">Confuse motion with progress</span>
</div>
<div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#09090b]/90 backdrop-blur-md border border-white/5 shadow-lg relative transition-all" style={{animation: 'floatGentle 6s ease-in-out 3s infinite'}}>
<iconify-icon className="text-red-500 shrink-0" icon="solar:close-circle-linear" width="18"></iconify-icon>
<span className="text-sm font-normal text-zinc-300">Rely on metrics that don't predict</span>
</div>
</div>

<div className="flex-1 flex flex-col items-center justify-center relative min-w-[340px] z-10 px-4">
<div className="text-xs font-mono text-green-500 uppercase tracking-wide mb-6 bg-green-500/10 px-4 py-1.5 rounded-full border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                            Watch: Why Pipeline is Misleading
                        </div>
<div className="relative bg-black/90 backdrop-blur-xl border border-green-500/30 rounded-3xl p-2 w-full max-w-[400px] z-10 overflow-hidden" style={{animation: 'pulseGlow 4s ease-in-out infinite'}}>
<div className="absolute -inset-4 bg-gradient-to-b from-green-500/20 to-transparent opacity-30 blur-2xl pointer-events-none rounded-[3rem] z-[-1]"></div>
<div className="aspect-video bg-zinc-900 rounded-2xl border border-white/10 flex items-center justify-center relative group cursor-pointer overflow-hidden">
<div className="absolute inset-0 bg-signal-noise opacity-30 group-hover:opacity-50 transition-opacity"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center z-10 group-hover:scale-110 transition-transform backdrop-blur-md">
<iconify-icon className="text-green-500 text-2xl" icon="solar:play-bold"></iconify-icon>
</div>
<span className="absolute bottom-4 left-4 text-zinc-500 font-mono text-xs tracking-widest uppercase z-10">[ VIDEO PLACEHOLDER ]</span>
</div>
</div>
</div>

<div className="w-[280px] flex flex-col gap-3 z-10 text-right">
<div className="text-xs font-mono text-zinc-500 uppercase tracking-wide pr-1 mb-2">The Signal (In This Video)</div>
<div className="flex items-center justify-end gap-3 p-3.5 rounded-xl bg-[#09090b]/90 backdrop-blur-md border border-white/5 shadow-lg relative transition-all" style={{animation: 'floatGentle 6s ease-in-out 0.5s infinite'}}>
<span className="text-sm font-normal text-zinc-300">Why most pipeline is misleading</span>
<iconify-icon className="text-green-500 shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon>
</div>
<div className="flex items-center justify-end gap-3 p-3.5 rounded-xl bg-[#09090b]/90 backdrop-blur-md border border-white/5 shadow-lg relative transition-all" style={{animation: 'floatGentle 6s ease-in-out 2s infinite'}}>
<span className="text-sm font-normal text-zinc-300">How to separate signal from noise</span>
<iconify-icon className="text-green-500 shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon>
</div>
<div className="flex items-center justify-end gap-3 p-3.5 rounded-xl bg-[#09090b]/90 backdrop-blur-md border border-white/5 shadow-lg relative transition-all" style={{animation: 'floatGentle 6s ease-in-out 3.5s infinite'}}>
<span className="text-sm font-normal text-zinc-300">What actually drives revenue</span>
<iconify-icon className="text-green-500 shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon>
</div>
</div>
</div>

<div className="md:hidden mt-12 text-left bg-zinc-900/40 border border-white/5 p-6 rounded-2xl">
<p className="text-zinc-300 mb-4 text-sm">If your pipeline looks full but doesn’t convert, the issue isn’t effort. <span className="text-white font-semibold">It’s signal.</span></p>
<div className="text-xs font-mono text-green-500 uppercase tracking-wide mb-2">In this video:</div>
<ul className="space-y-2 text-zinc-400 text-sm">
<li className="flex items-start gap-2"><iconify-icon className="text-green-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Why most pipeline is misleading</li>
<li className="flex items-start gap-2"><iconify-icon className="text-green-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> How to separate signal from noise</li>
<li className="flex items-start gap-2"><iconify-icon className="text-green-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> What actually drives revenue</li>
</ul>
</div>
</div>
</section>

<section className="py-12 border-t border-white/5 bg-[#020202] relative z-20">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs text-zinc-500 uppercase tracking-widest font-mono mb-8">Sales teams rethinking pipeline with Death to Fluff</p>
<div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 grayscale">
<div className="text-xl font-bold font-serif text-white whitespace-nowrap px-4 py-2 border border-white/20 rounded">[ IMAGE PLACEHOLDER ]</div>
<div className="text-xl font-bold font-serif text-white whitespace-nowrap px-4 py-2 border border-white/20 rounded">[ IMAGE PLACEHOLDER ]</div>
<div className="text-xl font-bold font-serif text-white whitespace-nowrap px-4 py-2 border border-white/20 rounded">[ IMAGE PLACEHOLDER ]</div>
<div className="text-xl font-bold font-serif text-white whitespace-nowrap px-4 py-2 border border-white/20 rounded">[ IMAGE PLACEHOLDER ]</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 bg-[#020202] relative z-20" id="problem">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10 text-red-500 mb-8 border border-red-500/20">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="md:text-5xl leading-tight text-4xl font-semibold text-white tracking-tight">
                        Why Pipeline Doesn’t <br className="hidden md:block"/>Turn Into Revenue
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/5 hover:border-red-500/20 transition-colors group">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-red-400 mb-6 group-hover:bg-red-500/10 transition-colors">
<iconify-icon icon="solar:volume-cross-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Too much noise</h3>
<p className="text-zinc-400 text-base leading-relaxed">Not all opportunities are equal. More volume often just means more noise obscuring the real deals.</p>
</div>

<div className="p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/5 hover:border-red-500/20 transition-colors group">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-red-400 mb-6 group-hover:bg-red-500/10 transition-colors">
<iconify-icon icon="solar:graph-down-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">False signals</h3>
<p className="text-zinc-400 text-base leading-relaxed">Metrics don’t reflect real deal health. Activity looks high, but buying intent is zero.</p>
</div>

<div className="p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/5 hover:border-red-500/20 transition-colors group">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-red-400 mb-6 group-hover:bg-red-500/10 transition-colors">
<iconify-icon icon="solar:hourglass-line-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Wasted effort</h3>
<p className="text-zinc-400 text-base leading-relaxed">Time is spent on deals that won’t close. Reps are busy, but they aren't productive.</p>
</div>

<div className="p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/5 hover:border-red-500/20 transition-colors group">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-red-400 mb-6 group-hover:bg-red-500/10 transition-colors">
<iconify-icon icon="solar:danger-triangle-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Lack of clarity</h3>
<p className="text-zinc-400 text-base leading-relaxed">Teams don’t know what actually matters. Strategy is replaced by spray-and-pray tactics.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#050505] border-y border-white/5" id="process">
<div className="max-w-6xl mx-auto px-6">

<div className="text-center mb-24">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                        Pipeline Isn’t About Volume.<br/> <span className="text-green-500">It’s About Signal.</span>
</h2>
<p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed mb-6">
                        More leads won’t fix this. More activity won’t fix this.
                    </p>
<div className="inline-flex flex-col text-left bg-zinc-900/40 border border-white/10 rounded-2xl p-6 md:p-8">
<p className="text-white font-medium mb-4">Pipeline improves when:</p>
<ul className="space-y-3 text-zinc-400">
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> you identify real opportunities</li>
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> you remove low-quality deals</li>
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> you focus on what moves revenue</li>
</ul>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group scroll-mt-32">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-green-500 transition-colors">
<iconify-icon icon="solar:radar-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-5 pt-1">
<span className="text-green-400 font-mono text-xs uppercase tracking-wide mb-3 block">The Core Mechanism</span>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">Signal-Based Selling</h3>
<p className="text-zinc-400 text-base leading-relaxed">
                                Top performers don’t just build pipeline. They filter aggressively, prioritize correctly, and act on real indicators.
                            </p>
</div>
<div className="lg:col-span-7">
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-8 hover:bg-zinc-900/80 hover:border-white/10 transition-colors h-full flex flex-col justify-center">
<div className="flex items-center justify-between opacity-80 mb-6">
<div className="px-4 py-3 bg-zinc-900 border border-white/10 rounded-xl text-sm text-zinc-400 text-center w-full">Volume Pipeline</div>
<iconify-icon className="text-zinc-600 mx-4" icon="solar:arrow-right-linear" width="20"></iconify-icon>
<div className="px-4 py-3 bg-green-900/30 border border-green-500/30 rounded-xl text-sm text-green-300 font-semibold text-center w-full shadow-[0_0_15px_rgba(34,197,94,0.1)]">Signal Pipeline</div>
</div>
<p className="text-center text-white text-lg font-medium">This is what turns Pipeline into <span className="text-green-500">Revenue</span>.</p>
</div>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group scroll-mt-32">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-green-500 transition-colors">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-5 pt-1">
<span className="text-green-400 font-mono text-xs uppercase tracking-wide mb-3 block">Proof</span>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">Teams focusing on signal over noise</h3>
<p className="text-zinc-400 text-base leading-relaxed">
                                Sales teams use Belal’s insights to rethink how they evaluate pipeline and prioritize opportunities.
                            </p>
</div>
<div className="lg:col-span-7">
<div className="bg-zinc-900 border border-white/5 rounded-2xl p-1 flex items-center justify-center min-h-[200px] overflow-hidden group relative">
<div className="absolute inset-0 bg-signal-noise opacity-20 group-hover:opacity-40 transition-opacity"></div>
<span className="text-zinc-600 font-mono text-sm tracking-widest uppercase z-10 px-8 py-4 border border-zinc-800 rounded bg-black/50 backdrop-blur-sm">[ IMAGE PLACEHOLDER ]</span>
</div>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group scroll-mt-32">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-green-500 transition-colors">
<iconify-icon icon="solar:filter-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-5 pt-1">
<span className="text-green-400 font-mono text-xs uppercase tracking-wide mb-3 block">How Belal Improves Quality</span>
<h3 className="text-3xl text-white font-semibold tracking-tight">Step 1: Identify noise in current pipeline</h3>
</div>
<div className="lg:col-span-7">
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 text-zinc-400 text-sm leading-relaxed">
                                We audit your existing deals to find the "hopium" — opportunities taking up mental bandwidth and CRM space but showing zero true buying signals.
                            </div>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group scroll-mt-32">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-green-500 transition-colors">
<iconify-icon icon="solar:target-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-5 pt-1">
<h3 className="text-3xl text-white font-semibold tracking-tight">Step 2: Define real signals of deal quality</h3>
</div>
<div className="lg:col-span-7">
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 text-zinc-400 text-sm leading-relaxed">
                                We establish the concrete, non-negotiable indicators that prove a deal is moving forward. No more guessing.
                            </div>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-12 border-l border-zinc-800 last:border-0 group scroll-mt-32">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-green-500 transition-colors">
<iconify-icon icon="solar:rocket-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-5 pt-1">
<h3 className="text-3xl text-white font-semibold tracking-tight">Step 3: Refocus effort on high-value opportunities</h3>
</div>
<div className="lg:col-span-7 flex flex-col sm:flex-row gap-6 items-center">
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 text-zinc-400 text-sm leading-relaxed flex-1">
                                We deploy frameworks to keep reps hyper-focused on the 20% of pipeline that will generate 80% of revenue.
                            </div>
<a className="shrink-0 flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors" href="#demo">
                                Improve My Pipeline
                                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-y border-white/5 relative" id="included">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">What's Included</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">

<div className="md:col-span-2 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-between group overflow-hidden">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-green-500/5 to-transparent pointer-events-none"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-green-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:presentation-graph-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-3">Pipeline Strategy Training</h3>
<p className="text-zinc-400 text-base leading-relaxed max-w-md mb-6">Comprehensive enablement for your entire revenue team on how to build, maintain, and evaluate pipeline effectively.</p>
</div>
<div className="mt-auto flex flex-wrap gap-2">
<span className="px-3 py-1 bg-green-500/10 rounded-full border border-green-500/20 text-xs text-green-400 font-medium">+ Sales Leadership Workshops</span>
</div>
</div>

<div className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col group overflow-hidden">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-green-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-3">Signal-Based Frameworks</h3>
<p className="text-zinc-400 text-base leading-relaxed mb-4">Tactical playbooks for reps to stop guessing and start selling based on real buying indicators.</p>
</div>

<div className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-between overflow-hidden">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:magnifer-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-2">Deal Evaluation</h3>
<p className="text-zinc-400 text-base leading-relaxed">Methods to objectively score and review opportunities so leadership knows what will actually close.</p>
</div>
</div>

<div className="md:col-span-2 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col md:flex-row items-center justify-between overflow-hidden gap-6">
<div className="relative z-10 max-w-sm">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-green-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:sort-from-top-to-bottom-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-3">Sales Prioritization Systems</h3>
<p className="text-zinc-400 text-base leading-relaxed">Help reps focus their limited time on the accounts and deals that present the highest probability of closing, eliminating wasted effort.</p>
</div>
<div className="flex flex-col gap-2 w-full md:w-auto opacity-80">
<div className="px-4 py-3 bg-green-900/30 border border-green-500/30 rounded text-sm text-green-300 w-full text-center">Tier 1: Active Signal</div>
<div className="px-4 py-3 bg-zinc-900 border border-white/10 rounded text-sm text-zinc-400 w-full text-center">Tier 2: Researching</div>
<div className="px-4 py-3 bg-zinc-900/50 border border-white/5 rounded text-sm text-zinc-500 w-full text-center">Tier 3: Noise</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] relative" id="about">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center rounded-[2.5rem] bg-[#0A0A0A] border border-white/10 p-8 md:p-12 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent pointer-events-none"></div>

<div className="aspect-square rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-signal-noise opacity-30"></div>
<span className="text-zinc-600 font-mono text-sm tracking-widest uppercase z-10 px-6 py-3 border border-zinc-800 rounded bg-black/50 backdrop-blur-sm">[ IMAGE PLACEHOLDER ]</span>
</div>

<div className="relative z-10">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Hi, I’m Belal Batrawy.</h2>
<div className="space-y-4 text-zinc-300 text-lg leading-relaxed">
<p>I work with sales teams that are busy but not seeing results.</p>
<p>The issue isn’t effort — <span className="text-white font-medium">it’s where that effort goes.</span></p>
<p>Through Death to Fluff, I help teams focus on what actually matters in pipeline and revenue.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Frequently Asked Questions</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/10 flex flex-col gap-8 hover:border-white/20 transition-colors">
<div>
<h4 className="text-white font-semibold mb-2 flex items-start gap-2">
<iconify-icon className="text-green-500 mt-1 shrink-0" icon="solar:question-circle-linear"></iconify-icon>
                                Who is this for?
                            </h4>
<p className="text-zinc-400 text-sm leading-relaxed">Sales teams and leaders managing pipeline.</p>
</div>
<div>
<h4 className="text-white font-semibold mb-2 flex items-start gap-2">
<iconify-icon className="text-green-500 mt-1 shrink-0" icon="solar:question-circle-linear"></iconify-icon>
                                Is this sales training or strategy?
                            </h4>
<p className="text-zinc-400 text-sm leading-relaxed">Both — focused strictly on pipeline quality.</p>
</div>
</div>

<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/10 flex flex-col gap-8 hover:border-white/20 transition-colors">
<div>
<h4 className="text-white font-semibold mb-2 flex items-start gap-2">
<iconify-icon className="text-green-500 mt-1 shrink-0" icon="solar:question-circle-linear"></iconify-icon>
                                Does this work for experienced reps?
                            </h4>
<p className="text-zinc-400 text-sm leading-relaxed">Yes, especially teams overwhelmed with activity but lacking conversion.</p>
</div>
<div>
<h4 className="text-white font-semibold mb-2 flex items-start gap-2">
<iconify-icon className="text-green-500 mt-1 shrink-0" icon="solar:question-circle-linear"></iconify-icon>
                                What makes this different?
                            </h4>
<p className="text-zinc-400 text-sm leading-relaxed">Focus on identifying true signal, not generating more noise.</p>
</div>
</div>

<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/10 flex flex-col gap-8 hover:border-white/20 transition-colors">
<div>
<h4 className="text-white font-semibold mb-2 flex items-start gap-2">
<iconify-icon className="text-green-500 mt-1 shrink-0" icon="solar:question-circle-linear"></iconify-icon>
                                How do we start?
                            </h4>
<p className="text-zinc-400 text-sm leading-relaxed">Book a call below to see how your pipeline can be simplified and improved.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="demo">
<div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-600/10 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#080808] relative z-10 shadow-2xl">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 p-8 md:p-12 lg:p-16 items-start">

<div className="flex flex-col justify-center h-full pt-4 lg:pt-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-xs uppercase font-medium tracking-wide mb-6 w-fit">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-signal"></span>
                            Let's Talk
                        </div>
<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-[1.1]">
                            Turn Pipeline<br/>Into Revenue.
                        </h2>
<p className="text-zinc-400 text-lg mb-8 leading-relaxed max-w-md">
                            Book a call to see how your pipeline can be simplified and improved.
                        </p>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white">
<iconify-icon aria-hidden="true" icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-zinc-300">Identify noise in current pipeline</span>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white">
<iconify-icon aria-hidden="true" icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-zinc-300">Define real signals of deal quality</span>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white">
<iconify-icon aria-hidden="true" icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-zinc-300">Refocus effort on high-value opportunities</span>
</div>
</div>
</div>

<div className="relative w-full h-full min-h-[500px] lg:min-h-[600px] bg-[#0c0c0c] border border-white/10 rounded-2xl flex flex-col items-center justify-center overflow-hidden shadow-2xl ring-1 ring-white/5">
<div className="absolute inset-0 bg-signal-noise opacity-10 pointer-events-none"></div>
<div className="w-16 h-16 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-zinc-500 mb-6">
<iconify-icon icon="solar:calendar-date-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-2">Schedule a Call</h3>
<p className="text-zinc-500 text-sm mb-8 text-center max-w-xs">Select a date and time that works best for you.</p>

<div className="w-full max-w-sm border border-zinc-800 border-dashed rounded-xl p-8 bg-zinc-900/50 flex items-center justify-center relative">
<span className="text-zinc-600 font-mono text-sm tracking-widest uppercase z-10">[ CALENDLY PLACEHOLDER ]</span>
</div>
<button className="mt-8 bg-green-500 text-white font-medium px-8 py-3 rounded-full hover:bg-green-600 transition-colors shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                            Book My Call
                        </button>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-black border-t border-white/5 pt-20 pb-10 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
<div className="col-span-2 pr-8">
<a className="flex items-center gap-3 text-white font-semibold tracking-tight text-lg mb-6 group" href="/">
<div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg shadow-green-500/5 relative overflow-hidden group-hover:bg-green-500/10 group-hover:border-green-500/20 transition-all duration-300">
<iconify-icon className="text-white group-hover:text-green-500 transition-colors duration-300" icon="solar:flame-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
                        Death to Fluff
                    </a>
<p className="text-zinc-500 mb-6 leading-relaxed max-w-xs">
                        Belal Batrawy helps sales teams cut through what doesn't matter and focus on what actually creates pipeline.
                    </p>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium">Strategy</h4>
<a className="text-zinc-500 hover:text-green-400 transition-colors" href="#problem">The Problem</a>
<a className="text-zinc-500 hover:text-green-400 transition-colors" href="#process">Signal-Based Selling</a>
<a className="text-zinc-500 hover:text-green-400 transition-colors" href="#included">What's Included</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium">Resources</h4>
<a className="text-zinc-500 hover:text-green-400 transition-colors" href="#">Substack</a>
<a className="text-zinc-500 hover:text-green-400 transition-colors" href="#">LinkedIn</a>
<a className="text-zinc-500 hover:text-green-400 transition-colors" href="#">YouTube</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium">Connect</h4>
<a className="text-zinc-500 hover:text-green-400 transition-colors" href="#about">About Belal</a>
<a className="text-zinc-500 hover:text-green-400 transition-colors" href="#demo">Book a Call</a>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-zinc-600 text-xs">
                    © 2024 Death to Fluff / Belal Batrawy. All rights reserved.
                </div>
</div>
</div>
</footer>


    </>
  );
}
