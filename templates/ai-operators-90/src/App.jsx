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



        document.addEventListener('DOMContentLoaded', () => {
            const heroCta = document.getElementById('hero-cta');
            const stickyCta = document.getElementById('sticky-cta');
            
            // Observer to toggle sticky button visibility based on Hero CTA visibility
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Hero CTA is visible, hide sticky
                        stickyCta.classList.add('translate-y-24', 'opacity-0', 'pointer-events-none');
                        stickyCta.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto');
                    } else {
                        // Hero CTA is hidden, show sticky
                        stickyCta.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');
                        stickyCta.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');
                    }
                });
            }, {
                threshold: 0,
                rootMargin: "-20px 0px 0px 0px" // Triggers slightly before/after full exit
            });

            if (heroCta) {
                observer.observe(heroCta);
            }
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
      

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[50rem] h-[50rem] bg-indigo-200/40 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
<div className="absolute top-[20%] right-[-10%] w-[40rem] h-[40rem] bg-purple-200/40 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000"></div>
<div className="absolute bottom-[-10%] left-[20%] w-[45rem] h-[45rem] bg-pink-200/40 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-4000"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
</div>

<header className="absolute top-0 w-full z-40 pt-6 px-6">
<div className="max-w-6xl mx-auto flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center rounded-lg shadow-lg group-hover:scale-105 transition-all duration-300">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="font-semibold text-lg tracking-tight-custom text-slate-900">Glyph Labs</span>
</a>
</div>
</header>
<main className="relative z-10 space-y-32">

<section className="pt-32 md:pt-40 px-6">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div className="text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50/80 border border-indigo-100 text-xs font-medium text-indigo-700 mb-8 shadow-sm backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                        Accepting 3 new brands for this month
                    </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight-custom leading-[1.05] text-slate-900 mb-6">
                        Turn Your Team Into an <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">AI Content Factory.</span>
</h1>
<p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10 font-normal">
                        Stop burning cash on slow agencies. We build custom node-based AI workflows and train your in-house team to run them on autopilot.
                    </p>

<div className="block lg:hidden w-full aspect-video rounded-2xl z-10 group mb-10 relative">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-20 blur-xl"></div>
<div className="relative w-full h-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/20 flex items-center justify-center">
<div className="absolute inset-0 bg-slate-800">
<div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:32px_32px]"></div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
<div className="flex gap-2">
<div className="w-12 h-16 bg-slate-700 rounded-lg animate-pulse"></div>
<div className="w-12 h-16 bg-slate-700 rounded-lg animate-pulse animation-delay-2000"></div>
<div className="w-12 h-16 bg-slate-700 rounded-lg animate-pulse animation-delay-4000"></div>
</div>
<div className="text-[10px] text-slate-400 font-mono">Generating Assets...</div>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">

<a className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-medium text-sm transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2" href="#book" id="hero-cta">
                            Start Building Now
                            <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<div className="flex items-center gap-2 text-xs text-slate-500 px-4 py-2 rounded-full glass-panel">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-indigo-100 border border-white flex items-center justify-center text-[9px] text-indigo-700">JD</div>
<div className="w-6 h-6 rounded-full bg-green-100 border border-white flex items-center justify-center text-[9px] text-green-700">AS</div>
<div className="w-6 h-6 rounded-full bg-blue-100 border border-white flex items-center justify-center text-[9px] text-blue-700">MK</div>
</div>
<span>Trusted by 20+ Founders</span>
</div>
</div>
</div>

<div className="hidden lg:block relative w-full aspect-[4/3] lg:aspect-video rounded-2xl z-10 group">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
<div className="relative w-full h-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/20 flex items-center justify-center">
<div className="absolute inset-0 bg-slate-800">
<div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:32px_32px]"></div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
<div className="flex gap-2">
<div className="w-16 h-20 bg-slate-700 rounded-lg animate-pulse"></div>
<div className="w-16 h-20 bg-slate-700 rounded-lg animate-pulse animation-delay-2000"></div>
<div className="w-16 h-20 bg-slate-700 rounded-lg animate-pulse animation-delay-4000"></div>
</div>
<div className="text-xs text-slate-400 font-mono">Generating Assets...</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="problem">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight-custom mb-4">You're Stuck on the <span className="text-indigo-600">Content Treadmill</span></h2>
<p className="text-slate-500 font-light text-lg">The old ways of producing content are breaking under the pressure of scale.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="glass-panel p-8 rounded-2xl transition-all duration-300 hover:shadow-lg">
<div className="w-10 h-10 bg-white shadow-sm text-red-500 rounded-lg flex items-center justify-center mb-6 border border-slate-100">
<iconify-icon icon="lucide:wallet" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-3 text-slate-900">The Agency Money Pit</h3>
<p className="text-slate-500 text-sm mb-6 leading-relaxed">
                            Paying monthly retainers for slow outputs. By the time you get the creative, the trend is over.
                        </p>
<div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
<div className="h-full bg-red-400 w-3/4"></div>
</div>
</div>
<div className="glass-panel p-8 rounded-2xl transition-all duration-300 hover:shadow-lg">
<div className="w-10 h-10 bg-white shadow-sm text-orange-500 rounded-lg flex items-center justify-center mb-6 border border-slate-100">
<iconify-icon icon="lucide:book-open" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-3 text-slate-900">The "Theory" Course</h3>
<p className="text-slate-500 text-sm mb-6 leading-relaxed">
                            Buying a ₹50k course that your team watches once and forgets. Zero implementation, zero ROI.
                        </p>
<div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
<div className="h-full bg-orange-400 w-[10%]"></div>
</div>
</div>
<div className="glass-panel p-8 rounded-2xl transition-all duration-300 hover:shadow-lg">
<div className="w-10 h-10 bg-white shadow-sm text-slate-600 rounded-lg flex items-center justify-center mb-6 border border-slate-100">
<iconify-icon icon="lucide:user-x" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-3 text-slate-900">The DIY Struggle</h3>
<p className="text-slate-500 text-sm mb-6 leading-relaxed">
                            Wasting hours prompting ChatGPT for generic copy that sounds like a robot. No brand voice consistency.
                        </p>
<div className="text-[10px] text-slate-400 font-mono bg-slate-50 p-2 rounded border border-slate-100">
                            &gt; "Write a viral post"...
                        </div>
</div>
</div>
</div>
</section>

<section className="px-6">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-block p-3 rounded-full bg-white shadow-sm border border-slate-200 mb-8">
<iconify-icon className="text-indigo-600" icon="lucide:arrow-down" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight-custom mb-8 leading-tight text-slate-900">
                    AI is not magic.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">It's an engineering problem.</span>
</h2>
<div className="space-y-6 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-light">
<p>The tools (Midjourney, Claude, Runway) are ready. The missing link isn't the technology—it's the <strong>Standard Operating Procedure (SOP)</strong>.</p>
<p className="text-slate-900 font-medium">We don't sell you the tools. We install the factory line.</p>
</div>
</div>
</section>

<section className="relative" id="how-it-works">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-20 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight-custom mb-4 text-slate-900">We Build Your <span className="text-indigo-600">In-House Factory</span></h2>
<p className="text-slate-500 font-light">Three steps to autonomous content production.</p>
</div>
<div className="relative">
<div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-200 to-transparent z-0"></div>
<div className="grid md:grid-cols-3 gap-12 relative z-10">
<div className="group bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/50 hover:border-indigo-200 transition-all">
<div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6 relative border border-slate-100 shadow-sm z-10">
<iconify-icon className="text-indigo-600" icon="lucide:users" strokeWidth="1.5" width="28"></iconify-icon>
<div className="absolute -right-1 -top-1 w-6 h-6 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-xs">1</div>
</div>
<h3 className="text-lg font-semibold mb-2 text-center">Identify the Operator</h3>
<p className="text-slate-500 text-sm leading-relaxed text-center">
                                We pick one person on your team. We vet them, assess their skills, and prepare them to become the AI lead.
                            </p>
</div>
<div className="group bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/50 hover:border-purple-200 transition-all delay-100">
<div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6 relative border border-slate-100 shadow-sm z-10">
<iconify-icon className="text-purple-600" icon="lucide:network" strokeWidth="1.5" width="28"></iconify-icon>
<div className="absolute -right-1 -top-1 w-6 h-6 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-xs">2</div>
</div>
<h3 className="text-lg font-semibold mb-2 text-center">Build Custom Workflows</h3>
<p className="text-slate-500 text-sm leading-relaxed text-center">
                                We build 3-4 specific node-based pipelines tailored to your brand voice and specific goals.
                            </p>
</div>
<div className="group bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/50 hover:border-pink-200 transition-all delay-200">
<div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6 relative border border-slate-100 shadow-sm z-10">
<iconify-icon className="text-pink-600" icon="lucide:infinity" strokeWidth="1.5" width="28"></iconify-icon>
<div className="absolute -right-1 -top-1 w-6 h-6 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-xs">3</div>
</div>
<h3 className="text-lg font-semibold mb-2 text-center">Community &amp; Updates</h3>
<p className="text-slate-500 text-sm leading-relaxed text-center">
                                Tech moves fast. Your operator joins our private circle for weekly updates and new model alerts.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="px-6">
<div className="max-w-6xl mx-auto">
<div className="mb-16 text-center mx-auto max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight-custom text-slate-900 mb-2">Real Workflow Examples</h2>
<p className="text-slate-500 font-light">What we actually build for you. Node by node.</p>
</div>
<div className="space-y-8">

<div className="glass-panel rounded-2xl p-8 relative overflow-hidden">
<div className="absolute top-4 left-4 text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
<iconify-icon icon="lucide:instagram" width="14"></iconify-icon> Meta Ad Machine
                        </div>
<div className="flex flex-col md:flex-row items-center justify-between gap-4 relative mt-6">
<div className="node-card w-full md:w-64 p-4 rounded-xl flex items-center gap-4 z-10">
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 shrink-0">
<iconify-icon icon="lucide:package" width="20"></iconify-icon>
</div>
<div>
<div className="text-[10px] uppercase font-bold text-slate-400">Input</div>
<div className="text-sm font-medium text-slate-900">Product Photo</div>
</div>
</div>
<div className="hidden md:flex flex-1 h-[2px] bg-slate-200 relative items-center justify-center">
<div className="absolute inset-0 bg-indigo-500 w-1/2 mx-auto h-[2px] animate-pulse"></div>
<div className="bg-white border border-slate-200 px-3 py-1 rounded-full text-[10px] font-mono text-slate-500 z-10">
                                    Kling 2.5
                                </div>
</div>
<div className="md:hidden h-8 w-[2px] bg-slate-200 relative"></div>
<div className="node-card w-full md:w-64 p-4 rounded-xl flex items-center gap-4 z-10 border-indigo-200 bg-indigo-50/30">
<div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 shrink-0">
<iconify-icon icon="lucide:images" width="20"></iconify-icon>
</div>
<div>
<div className="text-[10px] uppercase font-bold text-indigo-400">Output</div>
<div className="text-sm font-medium text-indigo-900">15 Creatives (5 angles)</div>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 relative overflow-hidden">
<div className="absolute top-4 left-4 text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
<iconify-icon icon="lucide:heart" width="14"></iconify-icon> Seasonal Campaign
                        </div>
<div className="flex flex-col md:flex-row items-center justify-between gap-4 relative mt-6">
<div className="node-card w-full md:w-64 p-4 rounded-xl flex items-center gap-4 z-10">
<div className="w-10 h-10 bg-pink-50 rounded-lg flex items-center justify-center text-pink-500 shrink-0">
<iconify-icon icon="lucide:calendar-heart" width="20"></iconify-icon>
</div>
<div>
<div className="text-[10px] uppercase font-bold text-slate-400">Context</div>
<div className="text-sm font-medium text-slate-900">Valentine's Brief</div>
</div>
</div>
<div className="hidden md:flex flex-1 h-[2px] bg-slate-200 relative items-center justify-center">
<div className="absolute inset-0 bg-pink-400 w-1/2 mx-auto h-[2px] animate-pulse"></div>
<div className="bg-white border border-slate-200 px-3 py-1 rounded-full text-[10px] font-mono text-slate-500 z-10">
                                    Claude 4.5 Opus
                                </div>
</div>
<div className="md:hidden h-8 w-[2px] bg-slate-200 relative"></div>
<div className="node-card w-full md:w-64 p-4 rounded-xl flex items-center gap-4 z-10 border-pink-200 bg-pink-50/30">
<div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center text-pink-600 shrink-0">
<iconify-icon icon="lucide:clapperboard" width="20"></iconify-icon>
</div>
<div>
<div className="text-[10px] uppercase font-bold text-pink-400">Output</div>
<div className="text-sm font-medium text-pink-900">Reels &amp; Lifestyle Models</div>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 relative overflow-hidden">
<div className="absolute top-4 left-4 text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
<iconify-icon icon="lucide:camera" width="14"></iconify-icon> Virtual Studio
                        </div>
<div className="flex flex-col md:flex-row items-center justify-between gap-4 relative mt-6">
<div className="node-card w-full md:w-64 p-4 rounded-xl flex items-center gap-4 z-10">
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 shrink-0">
<iconify-icon icon="lucide:shirt" width="20"></iconify-icon>
</div>
<div>
<div className="text-[10px] uppercase font-bold text-slate-400">Asset</div>
<div className="text-sm font-medium text-slate-900">Product Photo</div>
</div>
</div>
<div className="hidden md:flex flex-1 h-[2px] bg-slate-200 relative items-center justify-center">
<div className="absolute inset-0 bg-purple-500 w-1/2 mx-auto h-[2px] animate-pulse"></div>
<div className="bg-white border border-slate-200 px-3 py-1 rounded-full text-[10px] font-mono text-slate-500 z-10">
                                    Seeddream 4.5
                                </div>
</div>
<div className="md:hidden h-8 w-[2px] bg-slate-200 relative"></div>
<div className="node-card w-full md:w-64 p-4 rounded-xl flex items-center gap-4 z-10 border-purple-200 bg-purple-50/30">
<div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 shrink-0">
<iconify-icon icon="lucide:globe-2" width="20"></iconify-icon>
</div>
<div>
<div className="text-[10px] uppercase font-bold text-purple-400">Output</div>
<div className="text-sm font-medium text-purple-900">3 Models / Global Locs</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 relative">
<div className="max-w-4xl mx-auto relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight-custom text-slate-900">Who Is This For?</h2>
<p className="text-slate-500 mt-2 font-light">We are selective to ensure success.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white/80 backdrop-blur rounded-2xl p-8 relative overflow-hidden border border-slate-200 shadow-sm group">
<div className="absolute top-0 right-0 w-48 h-48 corner-glow-green blur-3xl opacity-60"></div>
<h3 className="font-semibold text-lg mb-6 text-slate-900 flex items-center gap-2 relative z-10">
<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<iconify-icon icon="lucide:check" strokeWidth="2" width="16"></iconify-icon>
</div>
                            Perfect Match
                        </h3>
<ul className="space-y-4 relative z-10">
<li className="flex gap-3 text-sm text-slate-700 items-start">
<iconify-icon className="text-green-500 mt-0.5" icon="lucide:check" width="14"></iconify-icon>
                                DTC brand doing ₹50L+ annual revenue
                            </li>
<li className="flex gap-3 text-sm text-slate-700 items-start">
<iconify-icon className="text-green-500 mt-0.5" icon="lucide:check" width="14"></iconify-icon>
                                Spending ₹1L+ monthly on agencies
                            </li>
<li className="flex gap-3 text-sm text-slate-700 items-start">
<iconify-icon className="text-green-500 mt-0.5" icon="lucide:check" width="14"></iconify-icon>
                                Have at least one junior marketer to train
                            </li>
</ul>
</div>

<div className="bg-white/80 backdrop-blur rounded-2xl p-8 relative overflow-hidden border border-slate-200 shadow-sm group">
<div className="absolute top-0 right-0 w-48 h-48 corner-glow-red blur-3xl opacity-60"></div>
<h3 className="font-semibold text-lg mb-6 text-slate-900 flex items-center gap-2 relative z-10">
<div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
<iconify-icon icon="lucide:x" strokeWidth="2" width="16"></iconify-icon>
</div>
                            Not For You
                        </h3>
<ul className="space-y-4 relative z-10">
<li className="flex gap-3 text-sm text-slate-700 items-start">
<iconify-icon className="text-red-400 mt-0.5" icon="lucide:x" width="14"></iconify-icon>
                                Looking for "Done-For-You" service
                            </li>
<li className="flex gap-3 text-sm text-slate-700 items-start">
<iconify-icon className="text-red-400 mt-0.5" icon="lucide:x" width="14"></iconify-icon>
                                Solopreneur with zero team
                            </li>
<li className="flex gap-3 text-sm text-slate-700 items-start">
<iconify-icon className="text-red-400 mt-0.5" icon="lucide:x" width="14"></iconify-icon>
                                Unwilling to iterate and learn
                            </li>
</ul>
</div>
</div>
</div>
</section>

<section className="px-6">
<div className="max-w-2xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight-custom text-center mb-12 text-slate-900">Common Questions</h2>
<div className="space-y-4">
<details className="group glass-panel rounded-xl open:ring-1 open:ring-indigo-100 transition-all">
<summary className="flex cursor-pointer items-center justify-between p-5 font-medium text-slate-800 select-none">
                            Is this just another AI course?
                            <span className="transition-transform group-open:rotate-180 bg-white border border-slate-200 rounded-full w-6 h-6 flex items-center justify-center">
<iconify-icon icon="lucide:chevron-down" width="14"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 mt-2">
                            No. Courses give you theory. We implement actual node-based workflows into your business. We log into your accounts, set up the automations, and train your specific team member 1-on-1.
                        </div>
</details>
<details className="group glass-panel rounded-xl open:ring-1 open:ring-indigo-100 transition-all">
<summary className="flex cursor-pointer items-center justify-between p-5 font-medium text-slate-800 select-none">
                            How much time does my team need?
                            <span className="transition-transform group-open:rotate-180 bg-white border border-slate-200 rounded-full w-6 h-6 flex items-center justify-center">
<iconify-icon icon="lucide:chevron-down" width="14"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 mt-2">
                            We need about 3-4 hours of their time per week during the implementation month. After that, they will be saving 15-20 hours per week using these systems.
                        </div>
</details>
<details className="group glass-panel rounded-xl open:ring-1 open:ring-indigo-100 transition-all">
<summary className="flex cursor-pointer items-center justify-between p-5 font-medium text-slate-800 select-none">
                            What tools do we need to buy?
                            <span className="transition-transform group-open:rotate-180 bg-white border border-slate-200 rounded-full w-6 h-6 flex items-center justify-center">
<iconify-icon icon="lucide:chevron-down" width="14"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 mt-2">
                            Usually just the basics. We keep the stack lean. We use any node based workflow tool like Weavy and Claude/Chatgpt.
                        </div>
</details>
</div>
</div>
</section>

<section className="px-6 pb-20" id="book">
<div className="max-w-4xl mx-auto text-center relative z-10 glass-panel rounded-3xl p-12 md:p-20 border border-indigo-100">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 rounded-3xl -z-10"></div>
<h2 className="text-4xl md:text-5xl font-bold tracking-tight-custom mb-6 text-slate-900">
                    Ready to Build Your<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Content Engine?</span>
</h2>
<p className="text-slate-500 text-lg mb-10 max-w-lg mx-auto font-light">
                    Book a 30-minute strategy call. We'll audit your current process and map out your node workflow.
                </p>
<div className="flex items-center justify-center gap-6 text-xs text-slate-400">
<span className="flex items-center gap-1.5">
<iconify-icon className="text-green-500" icon="lucide:check" width="12"></iconify-icon> No Sales Pressure
                    </span>
<span className="flex items-center gap-1.5">
<iconify-icon className="text-green-500" icon="lucide:check" width="12"></iconify-icon> Free Audit
                    </span>
</div>
</div>
</section>
</main>

<div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 transform translate-y-24 opacity-0 pointer-events-none" id="sticky-cta">
<a className="bg-slate-900/90 hover:bg-slate-800 backdrop-blur-lg text-white px-6 py-3 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 border border-white/20 ring-1 ring-black/5" href="#book">
<span className="font-medium text-sm">Talk to us</span>
<div className="w-px h-4 bg-white/20"></div>
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>

<footer className="py-12 px-6 border-t border-slate-200/50 bg-white/40 backdrop-blur-sm relative z-10">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 text-white flex items-center justify-center rounded text-xs font-bold">GL</div>
<span className="font-semibold text-sm tracking-tight-custom text-slate-700">Glyph Labs</span>
</div>
<div className="flex gap-8 text-xs font-medium text-slate-500">
<a className="hover:text-indigo-600 transition-colors" href="#">Privacy</a>
<a className="hover:text-indigo-600 transition-colors" href="#">Terms</a>
<a className="hover:text-indigo-600 transition-colors" href="#">Instagram</a>
</div>
<div className="text-xs text-slate-400">
                © 2024 Glyph Labs Inc.
            </div>
</div>
</footer>



    </>
  );
}
