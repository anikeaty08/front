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
<div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-purple-900/10 blur-[120px] rounded-full mix-blend-screen animate-float"></div>
<div className="absolute top-[40%] -right-[20%] w-[60vw] h-[60vw] bg-fuchsia-900/5 blur-[150px] rounded-full mix-blend-screen animate-float-delayed"></div>
<div className="absolute -bottom-[20%] left-[10%] w-[70vw] h-[50vw] bg-violet-900/10 blur-[130px] rounded-full mix-blend-screen animate-float"></div>
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
</div>

<nav className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/5 bg-zinc-950/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="font-medium tracking-tighter text-lg text-white flex items-center gap-2 group cursor-pointer">
<div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-500 to-violet-700 text-white flex items-center justify-center text-xs font-semibold shadow-[0_0_15px_rgba(168,85,247,0.4)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all duration-300">RB</div>
                REHAN BUILDER
            </div>
<div className="hidden md:flex gap-8 items-center">
<a className="text-xs text-zinc-400 hover:text-white transition-colors duration-200" href="#advantages">The Advantage</a>
<a className="text-xs text-zinc-400 hover:text-white transition-colors duration-200" href="#services">Expertise</a>
<a className="text-xs text-zinc-400 hover:text-white transition-colors duration-200" href="#reviews">Testimonials</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 text-xs font-medium text-white px-4 py-2 rounded-full bg-zinc-900 border border-white/10 hover:border-purple-500/50 hover:bg-zinc-800 transition-all duration-300" href="https://wa.me/9844964534" target="_blank">
<iconify-icon className="text-sm text-purple-400" icon="solar:chat-round-line-linear"></iconify-icon>
                    Live Chat
                </a>
<a className="text-xs font-medium text-zinc-950 bg-white px-5 py-2.5 rounded-full hover:bg-zinc-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 transition-all duration-300" href="#contact">
                    Hire Me Now
                </a>
</div>
</div>
</nav>

<section className="pt-32 pb-16 px-6 relative flex flex-col items-center text-center justify-center min-h-[90vh]">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 opacity-[0.02] pointer-events-none select-none overflow-hidden flex justify-center items-center">
<h1 className="text-7xl sm:text-9xl md:text-[12rem] font-semibold tracking-tighter text-white whitespace-nowrap">ELITE BUILDER</h1>
</div>
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-purple-200 mb-8 backdrop-blur-sm relative z-10 hover:bg-purple-500/20 transition-colors cursor-default">
<span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_10px_rgba(168,85,247,1)]"></span>
            Available for new projects — Fast turnaround
        </div>
<h2 className="text-5xl sm:text-6xl md:text-8xl font-semibold tracking-tighter text-white mb-6 leading-[1.05] max-w-5xl relative z-10">
            I don't just build websites.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-white">I engineer monopolies.</span>
</h2>
<p className="text-base sm:text-xl text-zinc-400 mb-10 max-w-2xl font-light leading-relaxed relative z-10">
            Stop losing premium clients to bad design. I craft hyper-realistic, high-converting digital experiences that make your competition look obsolete.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto relative z-10 mb-16">
<a className="px-8 py-4 rounded-xl bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-100 transition-all duration-300 w-full sm:w-auto shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.7)] hover:-translate-y-1 flex items-center justify-center gap-2 group" href="https://wa.me/9844964534" target="_blank">
                Message Me on WhatsApp
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="px-8 py-4 rounded-xl bg-zinc-900 text-white font-medium text-sm border border-white/10 hover:bg-zinc-800 hover:border-purple-500/50 transition-all duration-300 w-full sm:w-auto backdrop-blur-md flex items-center justify-center gap-2 group" href="#advantages">
<iconify-icon className="text-purple-400 text-lg group-hover:scale-110 transition-transform" icon="solar:play-circle-linear"></iconify-icon>
                See The Unfair Advantage
            </a>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto w-full relative z-10 border-t border-white/5 pt-8">
<div className="flex flex-col items-center">
<div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-1">100/100</div>
<div className="text-xs text-zinc-500 font-light">Lighthouse Score</div>
</div>
<div className="flex flex-col items-center">
<div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-1">0.8s</div>
<div className="text-xs text-zinc-500 font-light">Average Load Time</div>
</div>
<div className="flex flex-col items-center">
<div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-1">300%</div>
<div className="text-xs text-zinc-500 font-light">Conversion Lift</div>
</div>
<div className="flex flex-col items-center">
<div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-1 flex items-center gap-1">
<iconify-icon className="text-purple-400" icon="solar:infinity-linear"></iconify-icon>
</div>
<div className="text-xs text-zinc-500 font-light">Endless ROI</div>
</div>
</div>
</section>

<div className="py-6 border-y border-white/5 bg-zinc-950/50 backdrop-blur-md overflow-hidden relative z-10 flex">
<div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent z-10"></div>
<div className="flex whitespace-nowrap animate-marquee items-center gap-8">

<div className="flex items-center gap-8 text-xs font-semibold tracking-widest text-zinc-500 uppercase">
<span className="flex items-center gap-2"><iconify-icon className="text-purple-500 text-sm" icon="solar:star-fall-linear"></iconify-icon> Elite Web Architecture</span>
<span className="flex items-center gap-2"><iconify-icon className="text-purple-500 text-sm" icon="solar:bolt-linear"></iconify-icon> Extreme Performance</span>
<span className="flex items-center gap-2"><iconify-icon className="text-purple-500 text-sm" icon="solar:layers-minimalistic-linear"></iconify-icon> Flawless Animations</span>
<span className="flex items-center gap-2"><iconify-icon className="text-purple-500 text-sm" icon="solar:graph-up-linear"></iconify-icon> High Conversion Rate</span>
<span className="flex items-center gap-2"><iconify-icon className="text-purple-500 text-sm" icon="solar:shield-check-linear"></iconify-icon> Bulletproof Security</span>
</div>
<div className="flex items-center gap-8 text-xs font-semibold tracking-widest text-zinc-500 uppercase">
<span className="flex items-center gap-2"><iconify-icon className="text-purple-500 text-sm" icon="solar:star-fall-linear"></iconify-icon> Elite Web Architecture</span>
<span className="flex items-center gap-2"><iconify-icon className="text-purple-500 text-sm" icon="solar:bolt-linear"></iconify-icon> Extreme Performance</span>
<span className="flex items-center gap-2"><iconify-icon className="text-purple-500 text-sm" icon="solar:layers-minimalistic-linear"></iconify-icon> Flawless Animations</span>
<span className="flex items-center gap-2"><iconify-icon className="text-purple-500 text-sm" icon="solar:graph-up-linear"></iconify-icon> High Conversion Rate</span>
<span className="flex items-center gap-2"><iconify-icon className="text-purple-500 text-sm" icon="solar:shield-check-linear"></iconify-icon> Bulletproof Security</span>
</div>
</div>
</div>

<section className="py-24 px-6 relative z-10 bg-zinc-950" id="advantages">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white mb-4">The Unfair Advantage</h2>
<p className="text-base text-zinc-400 max-w-xl font-light">Why top-tier clients drop their expensive agencies and hire me exclusively. I deliver everything faster, better, and cheaper.</p>
</div>
<a className="px-6 py-2.5 rounded-full bg-purple-500/10 text-purple-300 font-medium text-xs border border-purple-500/20 hover:bg-purple-500 hover:text-white transition-all duration-300 whitespace-nowrap" href="#contact">
                    Claim Your Advantage
                </a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[220px]">

<div className="lg:col-span-2 lg:row-span-2 rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/5 p-8 relative overflow-hidden group hover:border-purple-500/30 transition-all duration-500 flex flex-col justify-end">
<div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 blur-[100px] rounded-full group-hover:bg-purple-500/30 transition-colors duration-700 pointer-events-none"></div>
<div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-300">
<iconify-icon className="text-2xl text-white" icon="solar:rocket-linear"></iconify-icon>
</div>
<h3 className="text-3xl font-medium tracking-tight text-white mb-3 relative z-10">Agency Quality.<br/>Fraction of the Cost.</h3>
<p className="text-sm text-zinc-400 font-light max-w-md relative z-10 leading-relaxed">I operate with zero overhead. You get the exact same premium architecture, design, and conversion optimization that top global agencies charge $50k+ for, directly from the source.</p>
</div>

<div className="rounded-3xl bg-zinc-900/50 border border-white/5 p-6 relative overflow-hidden group hover:border-fuchsia-500/30 transition-all duration-500 flex flex-col">
<iconify-icon className="text-3xl text-fuchsia-400 mb-auto" icon="solar:stopwatch-linear"></iconify-icon>
<div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Ludicrous Speed</h3>
<p className="text-xs text-zinc-400 font-light">While others take months, I deploy enterprise-grade platforms in days. Time is money.</p>
</div>
</div>

<div className="rounded-3xl bg-zinc-900/50 border border-white/5 p-6 relative overflow-hidden group hover:border-purple-500/30 transition-all duration-500 flex flex-col">
<iconify-icon className="text-3xl text-purple-400 mb-auto" icon="solar:magnifer-linear"></iconify-icon>
<div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">SEO Dominance</h3>
<p className="text-xs text-zinc-400 font-light">Semantic HTML, dynamic meta, and edge-caching to guarantee page 1 rankings.</p>
</div>
</div>

<div className="lg:col-span-2 rounded-3xl bg-zinc-900/50 border border-white/5 p-6 relative overflow-hidden group hover:border-violet-500/30 transition-all duration-500 flex items-center gap-6">
<div className="w-16 h-16 shrink-0 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
<iconify-icon className="text-3xl text-violet-400" icon="solar:shield-keyhole-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Bank-Grade Security</h3>
<p className="text-sm text-zinc-400 font-light">Bulletproof backends, DDOS protection, and impregnable data structures. Your business assets are completely safe.</p>
</div>
</div>

<div className="rounded-3xl bg-gradient-to-br from-purple-900/20 to-zinc-900 border border-purple-500/20 p-6 relative overflow-hidden group hover:border-purple-400 transition-all duration-500 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">Want a Free Demo?</h3>
<p className="text-xs text-zinc-300 font-light mb-4">I'll design your landing page for free to prove my worth.</p>
<a className="text-xs font-semibold text-zinc-900 bg-white px-4 py-2 rounded-full w-full hover:bg-zinc-200 transition-colors" href="#contact">Message Me Now</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10 border-t border-white/5 bg-zinc-950/80 backdrop-blur-xl" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<span className="text-purple-400 text-xs font-semibold tracking-widest uppercase mb-2 block">Core Expertise</span>
<h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white mb-4">Built to dominate.</h2>
<p className="text-base text-zinc-400 font-light max-w-2xl mx-auto">I don't use templates. Every single line of code is meticulously crafted to serve your specific business logic and aesthetic.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:-translate-y-2 hover:bg-zinc-900/80 hover:border-purple-500/50 transition-all duration-500 backdrop-blur-sm relative shadow-lg">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl text-purple-400" icon="solar:cart-large-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">E-Commerce Empires</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">Frictionless checkout flows, headless Shopify integrations, and lightning-fast product rendering to maximize average order value.</p>
<a className="flex items-center gap-2 text-xs font-medium text-purple-400 group-hover:text-purple-300 transition-colors" href="#contact">
                        Discuss your store <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:-translate-y-2 hover:bg-zinc-900/80 hover:border-purple-500/50 transition-all duration-500 backdrop-blur-sm relative shadow-lg">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl text-purple-400" icon="solar:code-square-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Custom Web Apps</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">Complex SaaS dashboards, user authentication, database architecture, and seamless API integrations that scale effortlessly.</p>
<a className="flex items-center gap-2 text-xs font-medium text-purple-400 group-hover:text-purple-300 transition-colors" href="#contact">
                        Build your app <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:-translate-y-2 hover:bg-zinc-900/80 hover:border-purple-500/50 transition-all duration-500 backdrop-blur-sm relative shadow-lg">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl text-purple-400" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Immersive Landing Pages</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">Web design that feels alive. Using WebGL, scroll-triggered animations, and modern aesthetics to absolutely captivate your visitors.</p>
<a className="flex items-center gap-2 text-xs font-medium text-purple-400 group-hover:text-purple-300 transition-colors" href="#contact">
                        Stand out today <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-zinc-100 text-zinc-950 font-medium text-sm hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 transition-all duration-300" href="#contact">
                    Need something specific? Let's talk
                </a>
</div>
</div>
</section>

<section className="py-32 px-6 relative z-10 border-y border-white/5 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-zinc-950"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-purple-600/20 blur-[200px] rounded-full mix-blend-screen pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
<h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-white mb-6">Your website is costing you money. <span className="text-zinc-500 block sm:inline mt-2 sm:mt-0">Let's fix it.</span></h2>
<p className="text-base text-zinc-300 mb-12 font-light max-w-2xl leading-relaxed">Every second you wait, a competitor with a better digital presence is stealing your customers. Take action right now. Message me directly and let's map out your domination strategy.</p>
<a className="animate-pulse-glow px-10 py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold text-base sm:text-lg hover:from-purple-500 hover:to-violet-500 transition-all duration-300 w-full sm:w-auto hover:-translate-y-1 flex items-center justify-center gap-3" href="https://wa.me/9844964534" target="_blank">
<iconify-icon className="text-2xl" icon="solar:phone-calling-linear"></iconify-icon>
                DM ME IMMEDIATELY
            </a>
<p className="text-xs text-zinc-500 font-light mt-4 flex items-center gap-1">
<iconify-icon className="text-purple-400" icon="solar:check-circle-linear"></iconify-icon> Usually replies within 5 minutes.
            </p>
</div>
</section>

<section className="py-24 px-6 relative z-10 bg-zinc-950" id="reviews">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white mb-4">Unmatched Client Success</h2>
<p className="text-sm text-zinc-400 font-light">Don't just take my word for it. Look at what happens when businesses upgrade to elite architecture.</p>
</div>
<div className="flex items-center gap-2 text-sm text-zinc-400 bg-zinc-900 px-5 py-2.5 rounded-full border border-white/10">
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<span className="text-white font-semibold">5.0 / 5.0</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">

<div className="p-8 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-purple-500/30 hover:bg-zinc-900/60 transition-all duration-300 flex flex-col h-full relative">
<div className="absolute top-6 right-6 text-purple-500/20">
<iconify-icon className="text-4xl" icon="solar:quote-right-bold"></iconify-icon>
</div>
<div className="flex items-center gap-1 mb-6">
<iconify-icon className="text-yellow-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 mb-8 font-light leading-relaxed flex-grow relative z-10">"I messaged Rehan and within 48 hours he delivered a concept that looked better than what my previous agency took 3 weeks to make. The final website increased our lead generation by 400%. The absolute best investment we've ever made."</p>
<div className="flex items-center gap-4 pt-6 border-t border-white/5 relative z-10">
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-semibold text-white border border-white/10">SJ</div>
<div>
<div className="text-sm font-medium text-white flex items-center gap-1">Sarah Jenkins <iconify-icon className="text-blue-400 text-xs" icon="solar:verified-check-bold"></iconify-icon></div>
<div className="text-xs text-zinc-500 font-light">Founder, TechFlow SaaS</div>
</div>
</div>
</div>

<div className="p-8 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-purple-500/30 hover:bg-zinc-900/60 transition-all duration-300 flex flex-col h-full relative">
<div className="absolute top-6 right-6 text-purple-500/20">
<iconify-icon className="text-4xl" icon="solar:quote-right-bold"></iconify-icon>
</div>
<div className="flex items-center gap-1 mb-6">
<iconify-icon className="text-yellow-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 mb-8 font-light leading-relaxed flex-grow relative z-10">"We had a massive e-commerce migration nightmare. Rehan stepped in, completely optimized our architecture, and now our store loads in under a second. Our bounce rate plummeted and sales skyrocketed. He is a web god."</p>
<div className="flex items-center gap-4 pt-6 border-t border-white/5 relative z-10">
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-semibold text-white border border-white/10">MK</div>
<div>
<div className="text-sm font-medium text-white flex items-center gap-1">Marcus K. <iconify-icon className="text-blue-400 text-xs" icon="solar:verified-check-bold"></iconify-icon></div>
<div className="text-xs text-zinc-500 font-light">Director, Aura Commerce</div>
</div>
</div>
</div>

<div className="p-8 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-purple-500/30 hover:bg-zinc-900/60 transition-all duration-300 flex flex-col h-full relative">
<div className="absolute top-6 right-6 text-purple-500/20">
<iconify-icon className="text-4xl" icon="solar:quote-right-bold"></iconify-icon>
</div>
<div className="flex items-center gap-1 mb-6">
<iconify-icon className="text-yellow-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 mb-8 font-light leading-relaxed flex-grow relative z-10">"I literally DM'd him after seeing his portfolio, and he gave me a strategic breakdown of why my site was failing within 10 minutes. The execution was flawless. Don't think twice, just hire him before his prices double."</p>
<div className="flex items-center gap-4 pt-6 border-t border-white/5 relative z-10">
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-semibold text-white border border-white/10">AR</div>
<div>
<div className="text-sm font-medium text-white flex items-center gap-1">Aisha Rahman <iconify-icon className="text-blue-400 text-xs" icon="solar:verified-check-bold"></iconify-icon></div>
<div className="text-xs text-zinc-500 font-light">CEO, Nexus Digital</div>
</div>
</div>
</div>
</div>
<div className="flex justify-center">
<button className="px-6 py-3 rounded-xl bg-zinc-900 text-zinc-300 font-medium text-xs border border-white/10 hover:bg-zinc-800 transition-all duration-300">
                    Load More Success Stories
                </button>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 relative overflow-hidden z-10 bg-zinc-950/80 backdrop-blur-xl flex-grow" id="contact">
<div className="max-w-5xl mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<span className="inline-block py-1 px-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium mb-6 animate-pulse">
<span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mr-1"></span> Online &amp; Accepting Inquiries
                    </span>
<h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-6 leading-tight">Drop me a message.<br/>Let's make magic.</h2>
<p className="text-sm text-zinc-400 mb-8 font-light leading-relaxed">
                        Whether you need a complete overhaul, a high-converting landing page, or complex web architecture, I am ready to architect your success. Click below to DM me directly.
                    </p>
<div className="space-y-4">
<div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/50 border border-white/5">
<div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
<iconify-icon className="text-xl" icon="solar:bolt-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white">Instant Response</h4>
<p className="text-xs text-zinc-500 font-light">I reply to all serious inquiries instantly.</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/50 border border-white/5">
<div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
<iconify-icon className="text-xl" icon="solar:gift-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white">Free Consultation</h4>
<p className="text-xs text-zinc-500 font-light">Let's discuss strategy at zero cost to you.</p>
</div>
</div>
</div>
</div>

<div className="grid gap-4">

<a className="group relative p-6 rounded-3xl bg-zinc-900 border border-purple-500/30 hover:bg-purple-900/20 hover:border-purple-500/60 transition-all duration-500 flex items-center gap-6 overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.1)] hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] hover:-translate-y-1" href="https://wa.me/9844964534" target="_blank">
<div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg relative z-10">
<iconify-icon className="text-3xl text-white" icon="solar:phone-calling-bold"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-lg font-semibold text-white mb-1">WhatsApp Me (Fastest)</h3>
<p className="text-sm text-zinc-400 font-light">+91 98449 64534</p>
</div>
<iconify-icon className="ml-auto text-2xl text-purple-400 opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all relative z-10" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>

<a className="group relative p-6 rounded-3xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-800 hover:border-pink-500/30 transition-all duration-500 flex items-center gap-6" href="https://instagram.com/builder_rehan" target="_blank">
<div className="w-16 h-16 shrink-0 rounded-2xl bg-zinc-950 border border-white/10 flex items-center justify-center group-hover:border-pink-500/50 transition-colors">
<iconify-icon className="text-3xl text-zinc-400 group-hover:text-pink-400 transition-colors" icon="solar:camera-linear"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-white mb-1">Instagram Direct</h3>
<p className="text-sm text-zinc-400 font-light">@builder_rehan</p>
</div>
<iconify-icon className="ml-auto text-xl text-zinc-500 group-hover:text-pink-400 group-hover:translate-x-1 transition-all" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>

<a className="group relative p-6 rounded-3xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-800 hover:border-blue-500/30 transition-all duration-500 flex items-center gap-6" href="mailto:aliyarehan894@gmail.com">
<div className="w-16 h-16 shrink-0 rounded-2xl bg-zinc-950 border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
<iconify-icon className="text-3xl text-zinc-400 group-hover:text-blue-400 transition-colors" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-white mb-1">Email via Web</h3>
<p className="text-sm text-zinc-400 font-light">aliyarehan894@gmail.com</p>
</div>
<iconify-icon className="ml-auto text-xl text-zinc-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<footer className="py-8 border-t border-white/5 text-center relative z-10 bg-zinc-950 mt-auto">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="font-medium tracking-tighter text-sm text-white flex items-center gap-2">
<div className="w-5 h-5 rounded-md bg-gradient-to-br from-purple-500 to-violet-700 text-white flex items-center justify-center text-[10px] font-semibold">RB</div>
                REHAN BUILDER
            </div>
<p className="text-xs text-zinc-600 font-light tracking-widest uppercase">
                © 2024. Engineered to Perfection.
            </p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors text-xs font-light" href="#">Privacy</a>
<a className="text-zinc-500 hover:text-white transition-colors text-xs font-light" href="#">Terms</a>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-[100] group flex items-center gap-3" href="https://wa.me/9844964534" target="_blank">
<div className="hidden sm:block px-4 py-2 bg-zinc-900 border border-white/10 rounded-xl text-xs font-medium text-white shadow-lg opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-300 pointer-events-none">
            Message me instantly
        </div>
<div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-[0_0_20px_rgba(74,222,128,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300">
<iconify-icon className="text-2xl text-white" icon="solar:phone-calling-bold"></iconify-icon>
</div>
</a>

    </>
  );
}
