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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="spline-container absolute top-0 left-0 w-full h-full z-0"><iframe frameborder="0" height="100%" src="https://my.spline.design/glowingplanetparticles-HmCVKutonlFn3Oqqe6DI9nWi/" width="100%"></iframe></div></div>

<div className="bg-[#00332a] text-[#00ffc4] border-b border-[#00ffc4]/20 py-3 px-4 flex items-center justify-center text-sm relative z-50">
<div className="flex flex-col sm:flex-row items-center gap-3 text-center">
<span className="text-neutral-300">Build a Sales Engine That Drives Sustainable Growth</span>
<a className="bg-[#00ffc4]/10 hover:bg-[#00ffc4]/20 text-[#00ffc4] border border-[#00ffc4]/30 px-4 py-1 rounded-full text-xs font-semibold transition-colors flex items-center gap-1 group" href="#book">
          Schedule Strategy Call
          <iconify-icon className="w-3 h-3 transition-transform group-hover:translate-x-0.5" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<button className="absolute right-4 text-[#00ffc4]/50 hover:text-[#00ffc4] hidden sm:block">
<iconify-icon className="w-4 h-4" icon="solar:close-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<nav className="sticky top-0 z-40 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
<div className="flex max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-semibold tracking-tight flex items-center gap-2" href="#">
<div className="flex font-bold text-white bg-[#047857] w-8 h-8 rounded-lg shadow-[0_0_15px_rgba(4,120,87,0.5)] items-center justify-center">C</div>
<span className="text-white">Compass Sales Advisory</span>
</a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#about">About Us</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="bg-white hover:bg-neutral-200 text-black px-5 py-2.5 rounded-lg text-sm font-medium transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] flex items-center gap-2" href="#book">
            Schedule Call
            <iconify-icon className="w-3 h-3" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</nav>

<main className="overflow-hidden pt-16 pb-24 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#00ffc4] rounded-full blur-[120px] opacity-10 -z-10 pointer-events-none"></div>
<div className="z-10 text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 bg-neutral-900/50 border border-white/10 rounded-full pl-1 pr-4 py-1 shadow-sm mb-8 hover:border-[#00ffc4]/30 transition-colors cursor-default backdrop-blur-sm">
<span className="text-[10px] flex items-center gap-1 font-semibold text-white bg-[#047857] rounded-full pt-0.5 pr-2 pb-0.5 pl-2 shadow-sm">25+ Years Experience</span>
<span className="text-sm font-medium text-neutral-300">Executive Sales Leadership Advisory</span>
</div>
<h1 className="leading-[1.1] md:text-5xl text-5xl font-semibold text-white tracking-tight max-w-5xl mr-auto mb-6 ml-auto">Build a Sales Engine That Drives <br className="hidden md:block"/> <span className="drop-shadow-[0_0_15 px_rgba(0,255,196,0.3)] font-normal text-[#00ffc4] font-serif-italic">Sustainable Growth</span></h1>
<p className="md:text-xl leading-relaxed text-lg font-normal text-neutral-400 max-w-2xl mr-auto mb-10 ml-auto">Compass Sales Advisory partners with business leaders to optimize strategy, people, process, and tools—turning sales execution into a predictable growth engine.</p>
<div className="flex flex-col items-center gap-4 mb-20">
<a className="group relative bg-[#047857] hover:bg-[#059669] text-white text-lg font-medium px-8 py-4 rounded-xl shadow-[0_0_30px_rgba(4,120,87,0.4)] transition-all flex items-center gap-3 w-full sm:w-auto justify-center overflow-hidden border border-[#10b981]/30" href="#book">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
<span className="relative">Schedule Strategy Call</span>
<iconify-icon className="relative w-5 h-5 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<div className="flex items-center gap-2 text-sm text-neutral-500 bg-neutral-900/80 px-3 py-1 rounded-md border border-white/5 backdrop-blur-sm">
<span className="font-medium text-neutral-400">Designed for small to mid-sized companies generating $3M–$75M in revenue.</span>
</div>
</div>
<div className="w-full max-w-7xl mx-auto px-6 mb-20 relative z-10 animate-slide-up" style={{animationDelay: '0.2s'}}>

<div className="relative overflow-hidden w-full" style={{maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}>

<div className="flex items-center gap-16 animate-ticker w-max">
<div className="flex gap-16 shrink-0 gap-x-16 gap-y-16 items-center">
<span className="hover:text-[#00ffc4] transition-colors duration-300 cursor-default text-2xl font-bold text-neutral-600 font-roboto">STRATEGY</span>
<span className="hover:text-[#00ffc4] transition-colors duration-300 cursor-default text-2xl italic text-neutral-600 font-instrument-serif">PEOPLE</span>
<span className="hover:text-[#00ffc4] transition-colors duration-300 cursor-default uppercase text-xl font-medium text-neutral-600 tracking-tight font-space-grotesk">PROCESS</span>
<span className="hover:text-[#00ffc4] transition-colors duration-300 cursor-default text-2xl font-semibold italic text-neutral-600 font-playfair">TOOLS</span>
<span className="hover:text-[#00ffc4] transition-colors duration-300 cursor-default text-2xl font-bold text-neutral-600 tracking-tighter font-dm-sans">EXECUTION</span>
<span className="hover:text-[#00ffc4] transition-colors duration-300 cursor-default text-2xl font-extrabold text-neutral-600 font-manrope">ACCOUNTABILITY</span>
<span className="text-2xl font-merriweather font-black italic text-neutral-600 hover:text-[#00ffc4] transition-colors duration-300 cursor-default">ALIGNMENT</span>
</div>
<div className="flex items-center gap-16 shrink-0">
<span className="text-2xl font-bricolage font-bold text-neutral-600 hover:text-[#00ffc4] transition-colors duration-300 cursor-default">STRATEGY</span>
<span className="text-2xl font-instrument-serif italic text-neutral-600 hover:text-[#00ffc4] transition-colors duration-300 cursor-default">PEOPLE</span>
<span className="text-xl font-space-grotesk font-medium text-neutral-600 hover:text-[#00ffc4] transition-colors duration-300 cursor-default tracking-tight uppercase">PROCESS</span>
<span className="text-2xl font-playfair font-semibold italic text-neutral-600 hover:text-[#00ffc4] transition-colors duration-300 cursor-default">TOOLS</span>
<span className="text-2xl font-dm-sans font-bold tracking-tighter text-neutral-600 hover:text-[#00ffc4] transition-colors duration-300 cursor-default">EXECUTION</span>
<span className="text-2xl font-manrope font-extrabold text-neutral-600 hover:text-[#00ffc4] transition-colors duration-300 cursor-default">ACCOUNTABILITY</span>
<span className="text-2xl font-merriweather font-black italic text-neutral-600 hover:text-[#00ffc4] transition-colors duration-300 cursor-default">ALIGNMENT</span>
</div>
</div>
</div>
<style>
                @keyframes ticker-slide {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-ticker {
                    animation: ticker-slide 40s linear infinite;
                }
                .animate-ticker:hover {
                    animation-play-state: paused;
                }
            </style>
</div>

<div className="max-w-5xl mx-auto relative group">
<div className="absolute -inset-1 bg-gradient-to-b from-[#00ffc4]/20 to-transparent rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-neutral-900 aspect-video ring-1 ring-black/5">
<img alt="Executive Leadership" className="w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity duration-500 grayscale mix-blend-luminosity" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40"></div>
<div className="md:p-12 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full border-2 border-[#00ffc4]/30 overflow-hidden shadow-lg bg-neutral-800">
<img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</div>
<div className="text-left">
<h3 className="leading-tight text-shadow-sm text-lg font-medium text-white">Strategic. Experienced. Executive-level.</h3>
<p className="text-sm text-neutral-400">with Susan W. Mann, Founder</p>
</div>
</div>
<div className="hidden sm:flex gap-3 text-white/90 text-sm font-medium">
<span className="flex items-center gap-2 bg-black/50 border-white/10 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-md">Hands-on practical implementation</span>
</div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-300 cursor-pointer">
<a className="w-24 h-24 bg-white/5 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center shadow-[0_0_40px_rgba(0,255,196,0.1)] group-hover:shadow-[0_0_60px_rgba(0,255,196,0.2)] transition-shadow" href="#book">
<iconify-icon className="w-10 h-10 text-white ml-1" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="flex justify-between items-end">
<div className="bg-black/60 backdrop-blur-md rounded-lg px-4 py-2 text-white text-sm font-medium border border-white/10">
                  Start the Conversation
                </div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="border-y border-white/5 bg-[#0a0a0a]">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">
<div className="py-12 px-6 flex flex-col items-center justify-center text-center group hover:bg-white/[0.02] transition-colors">
<div className="md:text-5xl group-hover:text-[#00ffc4] transition-colors text-4xl font-semibold text-white tracking-tight mb-2">25+</div>
<div className="uppercase flex gap-2 text-sm font-medium text-neutral-500 tracking-wide gap-x-2 gap-y-2 items-center">Years Executive Sales Leadership <iconify-icon className="w-4 h-4 text-neutral-600" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon></div>
</div>
<div className="flex flex-col group hover:bg-white/[0.02] transition-colors text-center pt-12 pr-6 pb-12 pl-6 items-center justify-center">
<div className="md:text-5xl group-hover:text-[#00ffc4] transition-colors text-4xl font-semibold text-white tracking-tight mb-2">$3M–$75M</div>
<div className="uppercase flex gap-2 text-sm font-medium text-neutral-500 tracking-wide gap-x-2 gap-y-2 items-center">Target Company Revenue Range</div>
</div>
<div className="flex flex-col group hover:bg-white/[0.02] transition-colors text-center pt-12 pr-6 pb-12 pl-6 items-center justify-center">
<div className="md:text-5xl group-hover:text-[#00ffc4] transition-colors text-4xl font-semibold text-white tracking-tight mb-2">4</div>
<div className="uppercase flex gap-2 text-sm font-medium text-neutral-500 tracking-wide gap-x-2 gap-y-2 items-center">Core Pillars: Strategy, People, Process, Tools</div>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] border-white/5 border-b pt-32 pb-32 relative">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="text-center mb-20">
<h2 className="md:text-6xl leading-[1.1] transition-all duration-700 text-5xl font-semibold text-white tracking-tight opacity-0 translate-y-4">
            Many small to mid-sized companies 
            <span className="font-normal font-serif-italic">reach a growth ceiling.</span>
</h2>
</div>

<div className="flex flex-wrap justify-center gap-6 mb-20">
<div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-neutral-900/50 border border-white/5 rounded-2xl p-8 hover:bg-neutral-900 transition-colors duration-300 group hover:border-indigo-500/30">
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="w-6 h-6" icon="solar:graph-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="leading-relaxed text-lg font-medium text-neutral-300">Revenue plateaus and growth becomes stagnant.</p>
</div>
<div className="md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] hover:bg-neutral-900 transition-colors duration-300 group hover:border-zinc-500/30 bg-neutral-900/50 w-full border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 rounded-xl bg-zinc-700/10 border border-zinc-700/20 flex items-center justify-center text-zinc-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="w-6 h-6" icon="solar:pulse-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="leading-relaxed text-lg font-medium text-neutral-300">Sales execution becomes inconsistent and unpredictable.</p>
</div>
<div className="md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] hover:bg-neutral-900 transition-colors duration-300 group hover:border-red-900/30 bg-neutral-900/50 w-full border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="w-6 h-6" icon="solar:broken-link-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="leading-relaxed text-lg font-medium text-neutral-300">Strategy exists—but structural alignment is missing.</p>
</div>
<div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-neutral-900/50 border border-white/5 rounded-2xl p-8 hover:bg-neutral-900 transition-colors duration-300 group hover:border-orange-900/30">
<div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="w-6 h-6" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="leading-relaxed text-lg font-medium text-neutral-300">Sales leadership is stretched thin and lacking focus.</p>
</div>
<div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-neutral-900/50 border border-white/5 rounded-2xl p-8 hover:bg-neutral-900 transition-colors duration-300 group hover:border-yellow-900/30">
<div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="w-6 h-6" icon="solar:flag-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="leading-relaxed text-lg font-medium text-neutral-300">Growth feels accidental, rather than intentional.</p>
</div>
</div>

<div className="flex flex-col items-center text-center">
<a className="relative group" href="#book">
<div className="absolute -inset-1 bg-gradient-to-r from-[#00ffc4] to-[#047857] rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
<div className="hover:from-[#059669] hover:to-[#10b981] flex gap-3 transition-all text-xl font-semibold text-white bg-gradient-to-r from-[#047857] to-[#059669] border-white/10 border rounded-xl pt-5 pr-12 pb-5 pl-12 relative shadow-2xl gap-x-3 gap-y-3 items-center">Start the Conversation</div>
</a>
<div className="flex flex-col md:flex-row gap-3 text-sm text-neutral-400 mt-8 gap-x-3 gap-y-3 items-center">
<span className="">Susan W. Mann works directly with owners and leadership teams to refine sales strategy and operationalize execution so growth becomes sustainable, not accidental.</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0a0a0a] border-b border-white/5 relative overflow-hidden" id="about">

<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-[#047857] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 bg-[#00ffc4]/10 border border-[#00ffc4]/20 rounded-full px-3 py-1 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-[#00ffc4]"></span>
<span className="text-xs font-semibold text-[#00ffc4] tracking-wide uppercase">About Susan W. Mann</span>
</div>
<h2 className="md:text-5xl lg:text-6xl leading-[1.1] transition-all duration-700 text-4xl font-semibold text-white tracking-tight mb-8 opacity-0 translate-y-4">Hi, I'm Susan W. Mann.</h2>
</div>
<div className="grid md:grid-cols-12 gap-12 mt-12 gap-x-12 gap-y-12">
<div className="md:col-span-7 space-y-6">
<h3 className="text-2xl font-medium text-white">Guiding growth-stage organizations to <span className="text-[#00ffc4]">scale sustainably.</span></h3>
<div className="space-y-6 text-lg text-neutral-400 leading-relaxed">
<p className="">With more than 25 years as a results-focused executive sales leader, I partner with owners, CEOs, and leadership teams to refine strategy and strengthen execution.</p>
<p className="font-medium text-white">Through Compass Sales Advisory, I help organizations optimize their sales engine.</p>
<p className="">By aligning strategy, people, process, and tools, I ensure that your teams are not just working hard, but executing on a clear, structural foundation designed for performance.</p>
<p className="">My approach is hands-on. Not theoretical consulting—practical implementation alongside your executive team so growth becomes intentional and predictable.</p>
</div>
<div className="border-white/5 border-t mt-8 pt-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
<iconify-icon className="w-6 h-6 text-white" icon="solar:medal-star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-xl font-medium text-white">Result: Clear Strategy, Strong Execution &amp; Sustainable Growth!</div>
</div>
</div>
</div>

<div className="md:col-span-5 relative">
<div className="bg-neutral-900 rounded-2xl border border-white/10 p-6 h-full relative overflow-hidden group">
<div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat animate-[shimmer_2s_infinite]" style={{animation: 'shimmer 4s infinite linear'}}></div>
<div className="relative z-10 flex flex-col h-full justify-between gap-8">
<div className="bg-neutral-950/50 p-4 rounded-xl border border-white/5 opacity-50 blur-[1px]">
<div className="text-xs text-neutral-500 mb-2 font-mono">BEFORE ADVISORY</div>
<div className="text-sm text-neutral-400">Growth ceiling reached. Execution lacks alignment.</div>
</div>
<div className="flex justify-center"><iconify-icon className="w-6 h-6 text-neutral-600" icon="solar:arrow-down-linear" strokeWidth="1.5"></iconify-icon></div>
<div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-5 rounded-xl border border-[#00ffc4]/30 shadow-[0_0_30px_rgba(0,255,196,0.1)]">
<div className="flex items-center gap-2 mb-3">
<div className="text-[10px] font-bold text-black bg-[#00ffc4] rounded pt-0.5 pr-1.5 pb-0.5 pl-1.5">SALES ENGINE OPTIMIZED</div>
<div className="text-xs text-neutral-400 font-mono">STRATEGY + PEOPLE + PROCESS + TOOLS</div>
</div>
<div className="leading-snug text-sm text-neutral-200">"Aligned revenue goals, established clear accountability, and embedded a sustainable growth framework across the leadership team."</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] border-white/5 border-b pt-24 pb-24" id="services">
<div className="max-w-7xl w-full mx-auto px-6">
<h1 className="md:text-5xl md:mb-20 text-4xl font-semibold text-white tracking-tight text-center mb-16">Four ways we help our clients grow</h1>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">

<div className="group md:p-12 overflow-hidden flex flex-col transition-all duration-500 hover:border-white/20 hover:bg-[#0f0f0f] bg-[#0A0A0A] h-full border-white/10 border rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative">
<div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse-slow mix-blend-screen opacity-50"></div>
<div className="relative h-24 mb-2 flex items-center">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm z-0">
<iconify-icon className="w-7 h-7 text-emerald-400" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="relative z-0 mt-auto pt-6">
<h2 className="md:text-3xl transition-all duration-700 text-2xl font-semibold text-white tracking-tight mb-3 opacity-0 translate-y-4">Sales Strategy Refinement</h2>
<p className="text-xs font-semibold tracking-[0.15em] text-emerald-500 uppercase mb-6">DIRECTION &amp; ALIGNMENT</p>
<p className="leading-relaxed text-lg font-normal text-neutral-400 mb-8">Clarify direction and align your revenue goals with actionable strategy. We build the roadmap your team needs to execute effectively.</p>
<div className="w-full h-px bg-white/10 mb-8"></div>
</div>
</div>

<div className="group md:p-12 overflow-hidden flex flex-col transition-all duration-500 hover:border-white/20 hover:bg-[#0f0f0f] bg-[#0A0A0A] h-full border-white/10 border rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative">
<div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse-slow mix-blend-screen opacity-50"></div>
<div className="relative h-24 mb-2 flex items-center">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm z-0">
<iconify-icon className="w-7 h-7 text-blue-400" icon="solar:settings-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="relative z-0 mt-auto pt-6">
<h2 className="md:text-3xl transition-all duration-700 text-2xl font-semibold text-white tracking-tight mb-3 opacity-0 translate-y-4">Sales Process Optimization</h2>
<p className="uppercase text-xs font-semibold text-blue-500 tracking-[0.15em] mb-6">STRUCTURE &amp; EXECUTION</p>
<p className="leading-relaxed text-lg font-normal text-neutral-400 mb-8">Strengthen execution with defined structure, accountability, and tools. We remove friction so your team can focus on performance.</p>
<div className="w-full h-px bg-white/10 mb-8"></div>
</div>
</div>

<div className="group md:p-12 overflow-hidden flex flex-col transition-all duration-500 hover:border-white/20 hover:bg-[#0f0f0f] bg-[#0A0A0A] h-full border-white/10 border rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative">
<div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none animate-pulse-slow mix-blend-screen opacity-50"></div>
<div className="relative h-24 mb-2 flex items-center">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm z-0">
<iconify-icon className="w-7 h-7 text-purple-400" icon="solar:user-speak-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="relative z-0 mt-auto pt-6">
<h2 className="md:text-3xl transition-all duration-700 text-2xl font-semibold text-white tracking-tight mb-3 opacity-0 translate-y-4">Sales Leadership Advisory</h2>
<p className="text-xs font-semibold tracking-[0.15em] text-purple-500 uppercase mb-6">HANDS-ON PARTNERSHIP</p>
<p className="leading-relaxed text-lg font-normal text-neutral-400 mb-8">Partner hands-on with executive teams to elevate performance and decision-making. Strategic advisory that bridges the gap to execution.</p>
<div className="w-full h-px bg-white/10 mb-8"></div>
</div>
</div>

<div className="group md:p-12 overflow-hidden flex flex-col transition-all duration-500 hover:border-white/20 hover:bg-[#0f0f0f] bg-[#0A0A0A] h-full border-white/10 border rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative">
<div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none animate-pulse-slow mix-blend-screen opacity-50"></div>
<div className="relative h-24 mb-2 flex items-center">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm z-0">
<iconify-icon className="w-7 h-7 text-orange-400" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="relative z-0 mt-auto pt-6">
<h2 className="md:text-3xl transition-all duration-700 text-2xl font-semibold text-white tracking-tight mb-3 opacity-0 translate-y-4">Talent &amp; Team Development</h2>
<p className="uppercase text-xs font-semibold text-orange-500 tracking-[0.15em] mb-6">GUIDANCE &amp; COACHING</p>
<p className="leading-relaxed text-lg font-normal text-neutral-400 mb-8">Equip leaders and teams with the guidance and coaching needed to drive consistent results and maintain momentum.</p>
<div className="w-full h-px bg-white/10 mb-8"></div>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full pt-20 pb-40 bg-[#050505] text-white overflow-hidden flex flex-col items-center border-b border-white/5">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] mask-radial pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00ffc4] rounded-full blur-[150px] opacity-[0.05] pointer-events-none"></div>
<div className="text-center w-full max-w-4xl z-10 relative mb-2 px-6">
<h2 className="md:text-6xl bg-clip-text transition-all duration-700 text-4xl font-semibold text-transparent tracking-tight bg-gradient-to-b from-white via-white/90 to-white/50 mb-6 pb-4 opacity-0 translate-y-4">Why Compass Sales Advisory</h2>
<p className="leading-relaxed text-lg font-light text-neutral-400 max-w-2xl mr-auto ml-auto">A strategic, hands-on partner for sustainable growth.</p>
</div>
<div className="relative flex flex-col items-center w-full max-w-[1400px]">

<div className="relative w-[500px] h-[500px] flex items-center justify-center z-20 scale-75 md:scale-100 origin-bottom">
<div className="absolute inset-0 animate-spin-slow">
<svg className="absolute inset-0 w-full h-full text-white/5" viewbox="0 0 600 600">
<g className="stroke-current stroke-[1]">
<line className="animate-flow-in" x1="300" x2="300" y1="50" y2="220"></line>
<line className="animate-flow-in delay-1" x1="550" x2="380" y1="300" y2="300"></line>
<line className="animate-flow-in delay-2" x1="300" x2="300" y1="550" y2="380"></line>
<line className="animate-flow-in delay-3" x1="50" x2="220" y1="300" y2="300"></line>
<line className="animate-flow-in delay-1" x1="476" x2="356" y1="123" y2="243"></line>
<line className="animate-flow-in delay-2" x1="476" x2="356" y1="476" y2="356"></line>
<line className="animate-flow-in delay-3" x1="123" x2="243" y1="476" y2="356"></line>
<line className="animate-flow-in" x1="123" x2="243" y1="123" y2="243"></line>
</g>
</svg>

<div className="absolute top-[50px] left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow-reverse">
<div className="w-14 h-14 bg-neutral-900 border border-white/10 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] z-20">
<iconify-icon className="w-7 h-7 text-[#00ffc4]" icon="solar:medal-ribbon-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="absolute top-[123px] right-[123px] translate-x-1/2 -translate-y-1/2 animate-spin-slow-reverse">
<div className="w-14 h-14 bg-neutral-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
<iconify-icon className="w-7 h-7 text-[#00ffc4]" icon="solar:handshake-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="absolute top-1/2 right-[50px] translate-x-1/2 -translate-y-1/2 animate-spin-slow-reverse">
<div className="w-14 h-14 bg-neutral-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
<iconify-icon className="w-7 h-7 text-[#00ffc4]" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="absolute bottom-[123px] right-[123px] translate-x-1/2 translate-y-1/2 animate-spin-slow-reverse">
<div className="w-14 h-14 bg-neutral-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
<iconify-icon className="w-7 h-7 text-[#00ffc4]" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="absolute bottom-[50px] left-1/2 -translate-x-1/2 translate-y-1/2 animate-spin-slow-reverse">
<div className="w-14 h-14 bg-neutral-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
<iconify-icon className="w-7 h-7 text-[#00ffc4]" icon="solar:link-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="absolute bottom-[123px] left-[123px] -translate-x-1/2 translate-y-1/2 animate-spin-slow-reverse">
<div className="w-14 h-14 bg-neutral-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
<iconify-icon className="w-7 h-7 text-[#00ffc4]" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="absolute top-1/2 left-[50px] -translate-x-1/2 -translate-y-1/2 animate-spin-slow-reverse">
<div className="w-14 h-14 bg-neutral-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
<iconify-icon className="w-7 h-7 text-[#00ffc4]" icon="solar:chat-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="absolute top-[123px] left-[123px] -translate-x-1/2 -translate-y-1/2 animate-spin-slow-reverse">
<div className="w-14 h-14 bg-neutral-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
<iconify-icon className="w-7 h-7 text-[#00ffc4]" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
<div className="absolute z-30 flex items-center justify-center">
<div className="w-28 h-28 bg-[#0a0a0a] rounded-3xl border border-[#00ffc4]/30 flex items-center justify-center shadow-[0_0_50px_rgba(0,255,196,0.2)] relative overflow-hidden ring-1 ring-white/10">
<div className="absolute inset-0 bg-[#00ffc4]/10 animate-pulse"></div>
<iconify-icon className="z-10 relative w-12 h-12 text-white" icon="solar:compass-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
<div className="relative w-full max-w-4xl h-32 -mt-20 z-10 px-4 hidden md:block">
<div className="absolute left-1/2 -translate-x-px top-0 w-[1px] h-[40%] bg-white/5 overflow-hidden">
<div className="w-full h-full bg-gradient-to-b from-transparent via-[#00ffc4] to-transparent absolute animate-pulse-main"></div>
</div>
<div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[50%] h-[1px] bg-white/5 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00ffc4] to-transparent animate-pulse-expand"></div>
</div>
<div className="absolute top-[40%] left-[25%] -translate-x-px w-[1px] h-[60%] bg-white/5 overflow-hidden">
<div className="w-full h-full bg-gradient-to-b from-transparent via-[#00ffc4] to-transparent absolute animate-pulse-feeder"></div>
</div>
<div className="absolute top-[40%] left-[75%] -translate-x-px w-[1px] h-[60%] bg-white/5 overflow-hidden">
<div className="w-full h-full bg-gradient-to-b from-transparent via-[#00ffc4] to-transparent absolute animate-pulse-feeder"></div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 z-20 md:mt-0 w-full max-w-4xl mt-4 pr-4 pl-4 relative gap-x-6 gap-y-6">

<div className="group relative bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl transition-all hover:border-[#00ffc4]/30 animate-float-card" style={{animationDelay: '0s'}}>
<div className="p-5 flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#00ffc4] to-[#047857] flex items-center justify-center text-[10px] font-bold text-black">25+</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-neutral-200">Executive Experience</span>
</div>
</div>
<div className="overflow-hidden flex bg-black/50 w-full border-white/5 border rounded-lg mb-3 relative p-4 text-center">
<span className="text-sm text-neutral-300 font-medium">Experience leading sales organizations and working alongside executive teams.</span>
</div>
<div className="mt-auto pt-2 flex items-center gap-1.5 border-t border-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-[#00ffc4] shadow-[0_0_8px_rgba(0,255,196,0.6)]"></div>
<span className="text-[10px] text-[#00ffc4] font-medium">Leadership Value</span>
</div>
</div>
</div>

<div className="group relative bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl transition-all hover:border-[#00ffc4]/30 animate-float-card" style={{animationDelay: '0.5s'}}>
<div className="p-5 flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-[10px] font-bold text-white">HO</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-neutral-200">Hands-On Partnership</span>
</div>
</div>
<div className="overflow-hidden flex bg-black/50 w-full border-white/5 border rounded-lg mb-3 relative p-4 text-center">
<span className="text-sm text-neutral-300 font-medium">Not theoretical consulting—practical implementation with your leadership team.</span>
</div>
<div className="mt-auto pt-2 flex items-center gap-1.5 border-t border-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(0,255,196,0.6)]"></div>
<span className="text-[10px] text-purple-400 font-medium">Direct Engagement</span>
</div>
</div>
</div>

<div className="group relative bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl transition-all hover:border-[#00ffc4]/30 animate-float-card" style={{animationDelay: '1s'}}>
<div className="p-5 flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center text-[10px] font-bold text-white">4P</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-neutral-200">Strategy + People + Process + Tools</span>
</div>
</div>
<div className="relative w-full rounded-lg border border-white/5 overflow-hidden mb-3 bg-black/50 flex p-4 text-center">
<span className="text-sm text-neutral-300 font-medium">A complete view of your sales engine—not isolated tactics.</span>
</div>
<div className="mt-auto pt-2 flex items-center gap-1.5 border-t border-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]"></div>
<span className="text-[10px] text-yellow-500 font-medium">Holistic Approach</span>
</div>
</div>
</div>

<div className="group relative bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl transition-all hover:border-[#00ffc4]/30 animate-float-card" style={{animationDelay: '1.5s'}}>
<div className="p-5 flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<div className="w-7 h-7 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-[10px] font-bold text-white">SMB</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-neutral-200">Built for $3M–$75M Companies</span>
</div>
</div>
<div className="relative w-full rounded-lg border border-white/5 overflow-hidden mb-3 bg-black/50 p-4 flex text-center">
<span className="text-sm text-neutral-300 font-medium">Designed specifically for growth-stage organizations ready to scale sustainably.</span>
</div>
<div className="mt-auto pt-2 flex items-center gap-1.5 border-t border-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-[#00ffc4] shadow-[0_0_8px_rgba(0,255,196,0.6)]"></div>
<span className="text-[10px] text-[#00ffc4] font-medium">Targeted Focus</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] pt-24 pb-24 relative" id="process">
<div className="absolute inset-0 bg-gradient-to-b from-[#047857]/20 via-[#050505] to-[#047857]/20 opacity-20 pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10">

<div className="text-center mb-24">
<div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
<span className="w-2 h-2 rounded-full bg-[#00ffc4] animate-pulse"></span>
<span className="text-xs font-medium text-white tracking-wide uppercase">Methodology</span>
</div>
<h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-[1.1] drop-shadow-sm transition-all duration-700 opacity-0 translate-y-4">
            How we optimize your sales engine
          </h2>
</div>

<div className="relative w-full">

<div className="sticky top-24 z-10 mb-12">
<div className="bg-neutral-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl ring-1 ring-white/5 flex flex-col md:flex-row gap-12 relative overflow-hidden min-h-[500px] border border-white/5">
<div className="md:w-1/2 flex flex-col justify-center">
<div className="flex items-center gap-3 mb-6">
<div className="bg-[#00ffc4]/10 text-[#00ffc4] p-2 rounded-lg border border-[#00ffc4]/20"><iconify-icon className="w-6 h-6" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon></div>
<span className="uppercase text-sm font-semibold text-[#00ffc4] tracking-wide">Step 1</span>
</div>
<h3 className="text-3xl font-semibold text-white tracking-tight mb-4">Assess Current State</h3>
<p className="leading-relaxed text-neutral-400 mb-8">Review your current sales strategy, team structure, and execution gaps.</p>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="mt-1 bg-[#059669]/20 p-1 rounded-full"><iconify-icon className="w-3 h-3 text-[#00ffc4]" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon></div>
<span className="text-sm text-neutral-300 font-medium">Analyze existing frameworks</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 bg-[#059669]/20 p-1 rounded-full"><iconify-icon className="w-3 h-3 text-[#00ffc4]" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon></div>
<span className="text-sm font-medium text-neutral-300">Identify structural bottlenecks</span>
</div>
</div>
</div>
<div className="md:w-1/2 bg-black/40 rounded-2xl border border-white/10 p-6 relative overflow-hidden flex flex-col justify-center">
<div className="bg-neutral-800 p-4 rounded-xl border border-white/10 shadow-sm mb-3">
<div className="text-sm font-semibold text-white mb-1">Discovery &amp; Evaluation</div>
<p className="text-xs text-neutral-400 leading-relaxed bg-neutral-900/50 p-2 rounded">Pinpointing the exact misalignment between strategy and daily sales execution.</p>
</div>
</div>
</div>
</div>

<div className="sticky top-28 z-20 mb-12">
<div className="bg-neutral-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl ring-1 ring-white/5 flex flex-col md:flex-row gap-12 relative overflow-hidden min-h-[500px] border border-white/5">
<div className="md:w-1/2 flex flex-col justify-center">
<div className="flex items-center gap-3 mb-6">
<div className="bg-purple-900/30 text-purple-400 p-2 rounded-lg border border-purple-500/20"><iconify-icon className="w-6 h-6" icon="solar:network-linear" strokeWidth="1.5"></iconify-icon></div>
<span className="uppercase text-sm font-semibold text-purple-400 tracking-wide">Step 2</span>
</div>
<h3 className="text-3xl font-semibold text-white tracking-tight mb-4">Align Strategy &amp; Goals</h3>
<p className="leading-relaxed text-neutral-400 mb-8">Ensure revenue goals match actionable strategy across the organization.</p>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="mt-1 bg-[#059669]/20 p-1 rounded-full"><iconify-icon className="w-3 h-3 text-[#00ffc4]" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon></div>
<span className="text-sm text-neutral-300 font-medium">Clear direction for leadership</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 bg-[#059669]/20 p-1 rounded-full"><iconify-icon className="w-3 h-3 text-[#00ffc4]" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon></div>
<span className="text-sm text-neutral-300 font-medium">Unified revenue targets</span>
</div>
</div>
</div>
<div className="md:w-1/2 bg-black rounded-2xl border border-white/10 p-6 relative overflow-hidden flex flex-col justify-center font-mono">
<div className="bg-neutral-800/50 p-4 rounded mb-2 border-l-2 border-purple-500">
<div className="text-xs text-white">Strategic Alignment Achieved</div>
<div className="text-[10px] text-neutral-400 mt-1">Goals are now actionable at all levels.</div>
</div>
</div>
</div>
</div>

<div className="sticky top-32 z-30 mb-12">
<div className="bg-neutral-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl ring-1 ring-white/5 flex flex-col md:flex-row gap-12 relative overflow-hidden min-h-[500px] border border-white/5">
<div className="md:w-1/2 flex flex-col justify-center">
<div className="flex items-center gap-3 mb-6">
<div className="bg-blue-900/30 text-blue-400 p-2 rounded-lg border border-blue-500/20"><iconify-icon className="w-6 h-6" icon="solar:plain-linear" strokeWidth="1.5"></iconify-icon></div>
<span className="uppercase text-sm font-semibold text-blue-400 tracking-wide">Step 3</span>
</div>
<h3 className="text-3xl font-semibold text-white tracking-tight mb-4">Refine People &amp; Process</h3>
<p className="leading-relaxed text-neutral-400 mb-8">Develop actionable improvements across people, process, and tools.</p>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="mt-1 bg-[#059669]/20 p-1 rounded-full"><iconify-icon className="w-3 h-3 text-[#00ffc4]" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon></div>
<span className="text-sm text-neutral-300 font-medium">Optimized tool utilization</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 bg-[#059669]/20 p-1 rounded-full"><iconify-icon className="w-3 h-3 text-[#00ffc4]" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon></div>
<span className="text-sm text-neutral-300 font-medium">Structured sales workflows</span>
</div>
</div>
</div>
<div className="md:w-1/2 bg-black/40 rounded-2xl border border-white/10 p-6 relative overflow-hidden flex flex-col justify-center">
<div className="bg-neutral-800 rounded-xl shadow-sm border border-white/10 overflow-hidden p-5">
<p className="text-sm text-neutral-200 leading-relaxed">Strengthening execution with defined structure, accountability, and streamlined tools.</p>
</div>
</div>
</div>
</div>

<div className="sticky top-36 z-40 mb-12">
<div className="bg-neutral-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl ring-1 ring-white/5 flex flex-col md:flex-row gap-12 relative overflow-hidden min-h-[500px] border border-white/5">
<div className="md:w-1/2 flex flex-col justify-center">
<div className="flex items-center gap-3 mb-6">
<div className="bg-pink-900/30 text-pink-400 p-2 rounded-lg border border-pink-500/20"><iconify-icon className="w-6 h-6" icon="solar:chat-square-linear" strokeWidth="1.5"></iconify-icon></div>
<span className="uppercase text-sm font-semibold text-pink-400 tracking-wide">Step 4</span>
</div>
<h3 className="text-3xl font-semibold text-white tracking-tight mb-4">Implement Hands-On</h3>
<p className="leading-relaxed text-neutral-400 mb-8">Partner with your executive teams to elevate performance and decision-making.</p>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="mt-1 bg-[#059669]/20 p-1 rounded-full"><iconify-icon className="w-3 h-3 text-[#00ffc4]" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon></div>
<span className="text-sm text-neutral-300 font-medium">Active leadership advisory</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 bg-[#059669]/20 p-1 rounded-full"><iconify-icon className="w-3 h-3 text-[#00ffc4]" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon></div>
<span className="text-sm text-neutral-300 font-medium">Guidance for execution</span>
</div>
</div>
</div>
<div className="md:w-1/2 bg-black/40 rounded-2xl border border-white/10 p-6 relative overflow-hidden flex flex-col justify-center items-center">
<div className="bg-neutral-800 w-full rounded-xl border border-pink-500/20 p-4 shadow-sm flex items-center gap-3">
<div className="bg-pink-500/10 p-2 rounded-lg text-pink-400"><iconify-icon className="w-5 h-5" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon></div>
<div className="">
<div className="text-sm font-bold text-white">Executive Collaboration</div>
<div className="text-xs text-neutral-400 mt-1">Bridging the gap to real execution</div>
</div>
</div>
</div>
</div>
</div>

<div className="sticky top-40 z-50 mb-12">
<div className="bg-neutral-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl ring-1 ring-white/5 flex flex-col md:flex-row gap-12 relative overflow-hidden min-h-[500px] border border-white/5">
<div className="md:w-1/2 flex flex-col justify-center">
<div className="flex items-center gap-3 mb-6">
<div className="bg-teal-900/30 text-teal-400 p-2 rounded-lg border border-teal-500/20"><iconify-icon className="w-6 h-6" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon></div>
<span className="uppercase text-sm font-semibold text-teal-400 tracking-wide">Step 5</span>
</div>
<h3 className="text-3xl font-semibold text-white tracking-tight mb-4">Optimize &amp; Strengthen</h3>
<p className="leading-relaxed text-neutral-400 mb-8">Embed accountability and leadership alignment to sustain growth momentum.</p>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="mt-1 bg-[#059669]/20 p-1 rounded-full"><iconify-icon className="w-3 h-3 text-[#00ffc4]" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon></div>
<span className="text-sm font-medium text-neutral-300">Continuous measurement</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 bg-[#059669]/20 p-1 rounded-full"><iconify-icon className="w-3 h-3 text-[#00ffc4]" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon></div>
<span className="text-sm font-medium text-neutral-300">Sustainable scaling strategies</span>
</div>
</div>
</div>
<div className="md:w-1/2 bg-black/40 rounded-2xl border border-white/10 p-6 relative overflow-hidden flex flex-col justify-center">
<div className="bg-neutral-800 p-5 rounded-xl border border-white/10 shadow-sm">
<div className="flex justify-between items-center mb-6">
<h4 className="font-semibold text-white text-sm">Sustainable Growth Engine</h4>
<span className="bg-[#00ffc4]/10 text-[#00ffc4] text-[10px] font-bold px-2 py-1 rounded-full">Optimized</span>
</div>
<div className="flex items-end gap-2 h-32 w-full">
<div className="w-full bg-[#059669]/30 rounded-t h-[30%]"></div>
<div className="w-full bg-[#059669]/50 rounded-t h-[45%]"></div>
<div className="w-full bg-[#059669]/70 rounded-t h-[60%]"></div>
<div className="w-full bg-[#059669] rounded-t h-[90%] shadow-[0_0_10px_rgba(5,150,105,0.5)]"></div>
</div>
</div>
</div>
</div>
</div>
<div className="flex justify-center mt-12 mb-12 relative z-50">
<a className="bg-white hover:bg-neutral-200 text-black px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]" href="#book">Schedule Strategy Call</a>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#0a0a0a] border-white/5 border-t pt-24 pb-24 relative">
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="text-center mb-16 flex justify-center items-center gap-6">
<h2 className="md:text-5xl transition-all duration-700 text-3xl font-semibold text-white tracking-tight max-w-3xl opacity-0 translate-y-4">Target Audience &amp; Value Drivers</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="space-y-6">
<div className="bg-neutral-900 border-white/5 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<p className="leading-relaxed font-medium text-neutral-300 mb-6">Partnering with owners and CEOs to align strategy, people, process, and tools for long-term predictability.</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center border border-white/10"><iconify-icon className="w-5 h-5 text-neutral-400" icon="solar:user-linear"></iconify-icon></div>
<div className=""><div className="text-sm font-semibold text-white">Owners &amp; CEOs</div><div className="text-[10px] text-neutral-500">Strategic Alignment</div></div>
</div>
</div>
<div className="bg-neutral-900 rounded-2xl p-6 shadow-sm border border-white/5">
<p className="leading-relaxed text-sm font-medium text-neutral-300 mb-6">Working alongside executive teams to elevate performance, communication, and critical decision-making.</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center border border-white/10"><iconify-icon className="w-5 h-5 text-neutral-400" icon="solar:users-group-rounded-linear"></iconify-icon></div>
<div className=""><div className="text-sm font-semibold text-white">Executive Alignment</div><div className="text-[10px] text-neutral-500">Hands-On Partnership</div></div>
</div>
</div>
</div>
<div className="space-y-6">
<div className="bg-neutral-900 rounded-2xl p-6 shadow-sm border border-white/5">
<p className="leading-relaxed font-medium text-neutral-300 mb-6">Designed specifically for growth-stage organizations ready to scale their revenue predictably and sustainably.</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center border border-white/10"><iconify-icon className="w-5 h-5 text-neutral-400" icon="solar:graph-up-linear"></iconify-icon></div>
<div className=""><div className="text-sm font-semibold text-white">Sustainable Growth</div><div className="text-[10px] text-neutral-500">Scale Predictably</div></div>
</div>
</div>
<div className="bg-neutral-900 rounded-2xl p-6 shadow-sm border border-white/5">
<p className="text-neutral-300 leading-relaxed mb-6 font-medium text-sm">Strengthening execution with defined structure, accountability, and practical tools your team actually uses.</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center border border-white/10"><iconify-icon className="w-5 h-5 text-neutral-400" icon="solar:settings-minimalistic-linear"></iconify-icon></div>
<div className=""><div className="text-sm font-semibold text-white">Consistent Execution</div><div className="text-[10px] text-neutral-500">Structure &amp; Accountability</div></div>
</div>
</div>
</div>
<div className="space-y-6">
<div className="bg-neutral-900 rounded-2xl p-6 shadow-sm border border-white/5">
<p className="leading-relaxed text-sm font-medium text-neutral-300 mb-6">Equipping leaders and teams with the guidance and coaching needed to drive consistent results.</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center border border-white/10"><iconify-icon className="w-5 h-5 text-neutral-400" icon="solar:medal-ribbon-linear"></iconify-icon></div>
<div><div className="text-sm font-semibold text-white">Team Development</div><div className="text-[10px] text-neutral-500">Guidance &amp; Coaching</div></div>
</div>
</div>
<div className="bg-neutral-900 rounded-2xl p-6 shadow-sm border border-white/5">
<p className="leading-relaxed text-sm font-medium text-neutral-300 mb-6">For companies generating $3M–$75M in revenue who need to optimize their sales engine right now.</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center border border-white/10"><iconify-icon className="w-5 h-5 text-neutral-400" icon="solar:wallet-linear"></iconify-icon></div>
<div><div className="text-sm font-semibold text-white">Revenue Focus</div><div className="text-[10px] text-neutral-500">$3M–$75M Target</div></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-t border-white/5">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="">
<h2 className="md:text-5xl transition-all duration-700 text-3xl font-semibold text-white tracking-tight mb-4 opacity-0 translate-y-4">The Transformation</h2>
<p className="text-lg text-neutral-400 max-w-xl">From growth ceiling to predictable execution.</p>
</div>
</div>
<div className="space-y-12">

<div className="bg-neutral-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-red-900/10 border border-white/5 flex flex-col md:flex-row gap-12 items-center relative overflow-hidden group">
<div className="flex-1 space-y-8 relative z-10">
<div className="flex items-center gap-2 text-neutral-500 text-sm font-medium">
<span className="text-red-400 font-bold tracking-wider uppercase">Before Compass Sales Advisory</span>
</div>
<h3 className="md:text-5xl leading-tight text-4xl font-semibold text-white tracking-tight">The Growth Ceiling</h3>
<p className="leading-relaxed text-lg text-neutral-400">Many organizations experience a period where initial momentum fades, leaving leadership frustrated with stagnant results.</p>
<div className="space-y-3">
<div className="flex items-center gap-3"><iconify-icon className="w-5 h-5 text-red-500" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon><span className="font-medium text-neutral-300">Revenue growth feels inconsistent.</span></div>
<div className="flex items-center gap-3"><iconify-icon className="w-5 h-5 text-red-500" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon><span className="font-medium text-neutral-300">Sales leadership is stretched thin.</span></div>
<div className="flex items-center gap-3"><iconify-icon className="w-5 h-5 text-red-500" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon><span className="font-medium text-neutral-300">Execution lacks alignment.</span></div>
</div>
</div>
<div className="flex-1 w-full h-[400px] bg-red-900/10 rounded-[2rem] flex items-center justify-center relative overflow-hidden border border-white/5">
<div className="bg-gradient-to-br from-red-500/10 via-transparent to-red-900/10 opacity-60 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 transform transition-transform duration-700 group-hover:scale-105">
<div className="relative bg-black text-white rounded-3xl p-6 shadow-2xl w-72 border border-white/10">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/5">
<iconify-icon className="w-6 h-6 text-red-500" icon="solar:graph-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<div className="text-lg font-bold text-white">Stagnation</div>
<div className="text-xs text-neutral-500">Unpredictable results</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="md:p-12 shadow-[#047857]/10 flex flex-col md:flex-row-reverse overflow-hidden group bg-neutral-900 border-white/5 border rounded-[2.5rem] pt-8 pr-8 pb-8 pl-8 relative shadow-2xl gap-x-12 gap-y-12 items-center">
<div className="flex-1 space-y-8 relative z-10">
<div className="flex items-center gap-2 text-neutral-500 text-sm font-medium">
<span className="text-[#00ffc4] font-bold tracking-wider uppercase">After Compass Sales Advisory</span>
</div>
<h3 className="md:text-5xl leading-tight text-4xl font-semibold text-white tracking-tight">Predictable Growth Engine</h3>
<p className="leading-relaxed text-lg text-neutral-400">By optimizing the sales engine, growth transitions from accidental and stressful to intentional and sustainable.</p>
<div className="space-y-3">
<div className="flex items-center gap-3"><iconify-icon className="w-5 h-5 text-[#00ffc4]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon><span className="font-medium text-neutral-300">Strategy is clarified.</span></div>
<div className="flex items-center gap-3"><iconify-icon className="w-5 h-5 text-[#00ffc4]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon><span className="font-medium text-neutral-300">Teams operate with stronger structure and accountability.</span></div>
<div className="flex items-center gap-3"><iconify-icon className="w-5 h-5 text-[#00ffc4]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon><span className="font-medium text-neutral-300">Sales performance becomes sustainable.</span></div>
</div>
<a className="btn-glow inline-flex transition-transform hover:-translate-y-1 hover:shadow-lg font-medium text-black bg-white rounded-full pt-4 pr-8 pb-4 pl-8 items-center justify-center" href="#book">Book a Consultation</a>
</div>
<div className="flex-1 w-full h-[400px] bg-[#00ffc4]/10 rounded-[2rem] flex items-center justify-center relative overflow-hidden border border-white/5">
<div className="absolute inset-0 bg-gradient-to-br from-[#00ffc4]/20 via-transparent to-[#059669]/20 opacity-60"></div>
<div className="relative z-10 transform transition-transform duration-700 group-hover:scale-105">
<div className="text-white bg-black w-72 border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative shadow-2xl">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/5">
<iconify-icon className="w-6 h-6 text-[#00ffc4]" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<div className="text-lg font-bold text-white">Alignment</div>
<div className="text-xs text-neutral-500">Sustainable Revenue Growth</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-t border-white/5 relative" id="faq">
<div className="max-w-4xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-2 transition-all duration-700 opacity-0 translate-y-4">Frequently Asked Questions</h2>
</div>
<div className="space-y-4">

<div className="faq-item group bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#00ffc4]/20">
<button className="flex text-left w-full pt-6 pr-6 pb-6 pl-6 items-center justify-between" onclick="toggleFaq(this)">
<span className="group-hover:text-[#00ffc4] transition-colors text-lg font-medium text-white">Who is Compass Sales Advisory best suited for?</span>
<iconify-icon className="faq-icon transition-transform duration-300 w-[20px] h-[20px] text-neutral-500" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="faq-answer">
<div className="px-6 pb-6 text-neutral-400 leading-relaxed">
                Small to mid-sized companies generating approximately $3M–$75M seeking to strengthen their sales engine.
              </div>
</div>
</div>

</div></div></section>
    </>
  );
}
