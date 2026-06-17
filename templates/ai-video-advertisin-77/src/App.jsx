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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] mix-blend-screen animate-glow"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] mix-blend-screen animate-glow" style={{animationDelay: '2s'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-[0.2em] text-white hover:text-cyan-400 transition-colors" href="#">
                LUMIN LABS
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-slate-400">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
</div>
<a className="hidden md:inline-flex group relative items-center justify-center overflow-hidden rounded-full bg-slate-800 px-5 py-2 text-xs font-medium text-white transition-all hover:bg-slate-700 border border-white/10" href="#contact">
<span className="relative flex items-center gap-2">
                    Book a Call
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</a>
</div>
</nav>

<header className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 px-6">
<div className="max-w-5xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-xs font-medium mb-8">
<iconify-icon icon="solar:stars-minimalistic-linear" width="14"></iconify-icon>
                The Future of Ad Creative
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                AI-Generated Video Ads <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400">Built to Stop Scrolls</span>
<br/>and Drive Sales.
            </h1>
<p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                LUMIN LABS creates high-performing video ad creatives using generative AI, creative strategy, and modern storytelling. Scale your tests, lower your CPA.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 p-[1px] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900" href="#contact">
<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#312E81_50%,#E2E8F0_100%)]"></span>
<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors hover:bg-slate-900">
                        Get Your Ads Built
                        <iconify-icon className="ml-2 text-cyan-400" icon="solar:bolt-linear" width="18"></iconify-icon>
</span>
</a>
<a className="inline-flex h-12 items-center justify-center rounded-full border border-slate-700 bg-transparent px-8 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white" href="#work">
                    View Our Work
                </a>
</div>
</div>

<div className="mt-20 max-w-6xl mx-auto relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
<div className="relative glass-panel rounded-2xl aspect-[16/9] md:aspect-[21/9] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
<div className="relative z-10 text-center">
<div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 cursor-pointer hover:scale-110 transition-transform">
<iconify-icon className="text-white ml-1" icon="solar:play-linear" width="32"></iconify-icon>
</div>
<p className="text-sm font-medium tracking-widest uppercase text-slate-400">Watch Reel</p>
</div>

<div className="absolute bottom-6 left-6 flex gap-2">
<div className="h-2 w-16 bg-cyan-500 rounded-full animate-pulse"></div>
<div className="h-2 w-8 bg-purple-500 rounded-full"></div>
</div>
</div>
</div>
</header>

<section className="py-10 border-y border-white/5 bg-slate-950/50">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-slate-500 mb-8 uppercase tracking-widest">Powering growth for modern brands</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-semibold tracking-tighter text-white">NEXUS</span>
<span className="text-xl font-bold italic text-white">Bolt.ai</span>
<span className="text-xl font-medium tracking-[0.2em] text-white">AURA</span>
<span className="text-xl font-black text-white">SHIFT</span>
<span className="text-xl font-serif italic text-white">Veloce</span>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
                    Creative Bottlenecks <br/>
<span className="text-slate-500">Are Killing Your Scale.</span>
</h2>
<p className="text-slate-400 text-lg leading-relaxed mb-8 font-light">
                    Traditional production is slow and expensive. We use generative AI to produce high-volume, high-quality video ads that allow you to test creative angles faster than your competition.
                </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm">Production time reduced by 70%</span>
</li>
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm">Cost-effective creative testing at scale</span>
</li>
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm">Platform-native formatting (9:16)</span>
</li>
</ul>
<a className="text-cyan-400 text-sm font-medium hover:text-cyan-300 inline-flex items-center gap-1 border-b border-cyan-400/20 pb-0.5 hover:border-cyan-400 transition-colors" href="#services">
                    Explore our capabilities <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="relative">
<div className="glass-panel p-6 rounded-2xl border border-white/10 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[50px]"></div>
<div className="grid grid-cols-2 gap-4">
<div className="aspect-[9/16] bg-slate-800 rounded-lg overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
<div className="absolute bottom-3 left-3">
<div className="bg-white/10 backdrop-blur px-2 py-1 rounded text-[10px] text-white">CTR 2.4%</div>
</div>
</div>
<div className="aspect-[9/16] bg-slate-800 rounded-lg overflow-hidden relative border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
<div className="absolute top-2 right-2 text-cyan-400">
<iconify-icon icon="solar:graph-up-linear" width="16"></iconify-icon>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
<div className="absolute bottom-3 left-3">
<div className="bg-cyan-500 text-black px-2 py-1 rounded text-[10px] font-bold">CTR 4.8%</div>
</div>
</div>
</div>
<div className="mt-6 text-center">
<p className="text-sm font-medium text-white">Rapid Creative Testing</p>
<p className="text-xs text-slate-500 mt-1">We find the winners automatically.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900/30" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Our Services</h2>
<p className="text-slate-400 font-light max-w-xl">We combine AI efficiency with human creative strategy to build assets that convert.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-6 text-cyan-400 group-hover:text-cyan-300 group-hover:scale-110 transition-all">
<iconify-icon icon="solar:videocamera-record-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">AI Video Ad Creation</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                        Full-motion video ads generated from scripts or static assets, designed specifically for TikTok and Reels.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-6 text-violet-400 group-hover:text-violet-300 group-hover:scale-110 transition-all">
<iconify-icon icon="solar:magic-stick-3-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Generative Visuals</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                        Stunning, never-before-seen static imagery and motion graphics created via Midjourney &amp; OpenArt.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-6 text-fuchsia-400 group-hover:text-fuchsia-300 group-hover:scale-110 transition-all">
<iconify-icon icon="solar:layers-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">High-Volume Testing</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                        We deliver batches of 10-50 creatives per month, allowing you to find winning hooks faster.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-6 text-cyan-400 group-hover:text-cyan-300 group-hover:scale-110 transition-all">
<iconify-icon icon="solar:pen-new-square-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Scriptwriting &amp; Concept</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                        Data-backed hooks and direct response scripts that speak directly to customer pain points.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-6 text-violet-400 group-hover:text-violet-300 group-hover:scale-110 transition-all">
<iconify-icon icon="solar:chart-square-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Creative Strategy</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                        We analyze your ad account data to iterate on what works and kill what doesn't.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors group border-cyan-500/20">
<div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-all">
<iconify-icon icon="solar:rocket-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Motion Design</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                        Adding professional polish, captions, and effects to generated assets for a premium feel.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-white/5">
<div className="max-w-4xl mx-auto text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Why LUMIN LABS?</h2>
<p className="text-slate-400">Instead of producing 3 ads per month, we help brands test 30.</p>
</div>
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
<div className="p-6">
<div className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 mb-2">10x</div>
<p className="text-sm text-slate-400 uppercase tracking-widest mb-2">Output</p>
<p className="text-sm text-slate-500 font-light">More variations means higher probability of finding a winner.</p>
</div>
<div className="p-6 border-x border-white/5">
<div className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 mb-2">-40%</div>
<p className="text-sm text-slate-400 uppercase tracking-widest mb-2">CPA</p>
<p className="text-sm text-slate-500 font-light">Fresh creative combats ad fatigue and lowers costs.</p>
</div>
<div className="p-6">
<div className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 mb-2">2 Days</div>
<p className="text-sm text-slate-400 uppercase tracking-widest mb-2">Turnaround</p>
<p className="text-sm text-slate-500 font-light">Get new ads launched in your account within 48 hours.</p>
</div>
</div>
</section>

<section className="py-24 px-6" id="work">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-2">AI-Powered Creative</h2>
<p className="text-slate-400 font-light text-sm">Recent work tailored for performance.</p>
</div>
<button className="hidden md:inline-flex text-sm text-white border-b border-white/20 pb-1 hover:border-cyan-400 transition-colors">See all projects</button>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl aspect-[4/3] bg-slate-800">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-slate-900 opacity-80"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center cursor-pointer group-hover:scale-110 transition-transform">
<iconify-icon className="text-white ml-1" icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-950 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform">
<p className="text-white font-medium">Fintech App Launch</p>
<p className="text-xs text-slate-400">Generative Video • 3D Motion</p>
</div>
</div>

<div className="relative group overflow-hidden rounded-2xl aspect-[9/16] bg-slate-800">
<div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/50 to-slate-900"></div>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-white/50 group-hover:text-white transition-colors" icon="solar:play-circle-linear" width="40"></iconify-icon>
</div>
</div>

<div className="relative group overflow-hidden rounded-2xl aspect-[9/16] bg-slate-800">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-900/50 to-slate-900"></div>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-white/50 group-hover:text-white transition-colors" icon="solar:play-circle-linear" width="40"></iconify-icon>
</div>
</div>

<div className="col-span-2 aspect-[16/9] md:aspect-auto relative group overflow-hidden rounded-2xl bg-slate-800">
<div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-black"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
<p className="text-slate-500 font-light mb-2">More concepts loading...</p>
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-slate-600 animate-bounce"></div>
<div className="w-2 h-2 rounded-full bg-slate-600 animate-bounce delay-100"></div>
<div className="w-2 h-2 rounded-full bg-slate-600 animate-bounce delay-200"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900/20" id="process">
<div className="max-w-5xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-16">The Process</h2>
<div className="relative">

<div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent"></div>

<div className="relative flex flex-col md:flex-row gap-8 mb-16">
<div className="md:w-1/2 md:text-right order-2 md:order-1 pt-2">
<h3 className="text-xl font-medium text-white mb-2">Discovery &amp; Strategy</h3>
<p className="text-sm text-slate-400 font-light">We dig into your current ad performance, understand your offer, and identify the best angles to attack.</p>
</div>
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 border border-cyan-500 z-10 shadow-[0_0_10px_rgba(6,182,212,0.5)] order-1 md:order-2"></div>
<div className="md:w-1/2 pl-12 md:pl-0 order-3"></div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 mb-16">
<div className="md:w-1/2 md:text-right order-2 md:order-1"></div>
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 border border-white/20 z-10 order-1 md:order-2"></div>
<div className="md:w-1/2 pl-12 md:pl-16 order-3 pt-2">
<h3 className="text-xl font-medium text-white mb-2">AI Generation &amp; Editing</h3>
<p className="text-sm text-slate-400 font-light">Our studio generates visuals and videos, then our editors assemble them into high-converting assets.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-8">
<div className="md:w-1/2 md:text-right order-2 md:order-1 pt-2">
<h3 className="text-xl font-medium text-white mb-2">Delivery &amp; Iteration</h3>
<p className="text-sm text-slate-400 font-light">You receive ready-to-upload files. We analyze performance data to inform the next batch of creatives.</p>
</div>
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 border border-white/20 z-10 order-1 md:order-2"></div>
<div className="md:w-1/2 pl-12 md:pl-0 order-3"></div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-indigo-950/20"></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-white">
                Ready to Upgrade Your <br/>Ad Creative?
            </h2>
<p className="text-lg text-slate-400 mb-10 font-light">
                Join the brands using LUMIN LABS to lower costs and scale faster.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="h-12 px-8 rounded-full bg-white text-slate-950 font-medium hover:bg-cyan-50 transition-colors">
                    Start Your Creative
                </button>
<button className="h-12 px-8 rounded-full bg-transparent border border-white/10 text-white font-medium hover:bg-white/5 transition-colors">
                    Book a Free Call
                </button>
</div>
<div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500">
<iconify-icon className="text-cyan-500" icon="solar:shield-check-linear"></iconify-icon>
<span>No long-term contracts. Pause anytime.</span>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 px-6 bg-slate-950 text-slate-400 text-sm">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-center md:text-left">
<a className="text-white text-base font-medium tracking-widest block mb-2" href="#">LUMIN LABS</a>
<p className="text-xs font-light">AI Creative Studio for the Attention Economy.</p>
</div>
<div className="flex gap-8">
<a className="hover:text-white transition-colors" href="#">Work</a>
<a className="hover:text-white transition-colors" href="#">Services</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center md:text-left text-xs text-slate-600 flex flex-col md:flex-row justify-between">
<p>© 2024 Lumin Labs. All rights reserved.</p>
<div className="flex gap-4 justify-center md:justify-end mt-2 md:mt-0">
<a href="#">Privacy Policy</a>
<a href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
