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
      

<div className="fixed inset-0 pointer-events-none overflow-hidden">
<div className="blob bg-cyan-600/20 w-[600px] h-[600px] rounded-full top-[-200px] left-1/2 -translate-x-1/2 mix-blend-screen"></div>
<div className="blob bg-blue-600/20 w-[500px] h-[500px] rounded-full bottom-[-100px] left-[-100px] mix-blend-screen animation-delay-2000"></div>
<div className="blob bg-purple-600/20 w-[500px] h-[500px] rounded-full top-[20%] right-[-100px] mix-blend-screen animation-delay-4000"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020617]/70 backdrop-blur-xl supports-[backdrop-filter]:bg-[#020617]/30">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg tracking-tight font-medium text-white flex items-center gap-2 group" href="index.html">
<div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-500/50 transition-colors">
<iconify-icon className="text-cyan-400 text-lg" icon="solar:water-drops-bold-duotone"></iconify-icon>
</div>
<span className="tracking-tighter">HYDROFLOW</span>
</a>
<div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-md">
<a className="px-4 py-1.5 text-xs text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all" href="index.html">Home</a>
<a className="px-4 py-1.5 text-xs text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all" href="about.html">About</a>
<a className="px-4 py-1.5 text-xs text-white bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.1)] rounded-full transition-all" href="#">Programs</a>
<a className="px-4 py-1.5 text-xs text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all" href="#reviews">Athletes</a>
</div>
<div className="flex items-center gap-4">

<a className="hidden md:flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#login">
<iconify-icon className="text-base" icon="solar:user-circle-linear"></iconify-icon>
                    Log in
                </a>
<a className="hidden md:flex items-center gap-2 text-xs font-medium text-white bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 rounded-lg transition-all group" href="#programs">
                    Start Training
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<button className="md:hidden text-white text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="flex-grow">

<header className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-24 px-6 flex flex-col items-center justify-center text-center">

<div className="group relative inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-white/10 hover:border-cyan-500/50 transition-colors mb-8 cursor-pointer overflow-hidden backdrop-blur-md">
<div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
<span className="relative text-xs font-medium text-cyan-200 tracking-wide">New Season Enrollment Open</span>
<iconify-icon className="relative text-cyan-200 text-xs group-hover:translate-x-0.5 transition-transform" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>

<h1 className="text-5xl md:text-8xl font-medium text-white tracking-tighter leading-[1.05] mb-6 max-w-5xl mx-auto">
                Fluid dynamics <br/>
<span className="animate-gradient-text">perfected by data.</span>
</h1>
<p className="text-lg text-slate-400 font-light max-w-xl mx-auto mb-10 leading-relaxed">
                Performance programs written by Olympian Bill Thorley. Designed to minimize drag and maximize metabolic efficiency.
            </p>

<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
<a className="w-full sm:w-auto px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-lg font-medium transition-all duration-300 shadow-[0_0_20px_-5px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.6)] flex items-center justify-center gap-2" href="#programs">
<iconify-icon className="text-lg" icon="solar:play-linear"></iconify-icon>
                    Choose Program
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 border border-white/10 text-slate-300 hover:text-white rounded-lg font-medium hover:bg-white/5 transition-all duration-300" href="#method">
                    How it works
                </a>
</div>
</header>

<section className="relative z-10 border-y border-white/5 bg-[#0b1121]/50 backdrop-blur-sm mb-24">
<div className="max-w-5xl mx-auto px-6 py-10 md:py-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center divide-y md:divide-y-0 md:divide-x divide-white/5">

<div className="flex flex-col items-center justify-center text-center group py-4 md:py-0">
<div className="flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400">
<iconify-icon className="text-sm" icon="solar:cup-star-linear"></iconify-icon>
<span className="text-[10px] font-semibold tracking-wider uppercase">Elite Results</span>
</div>
<div className="text-4xl md:text-6xl font-semibold text-white tracking-tighter mb-2 group-hover:scale-105 transition-transform duration-500 uppercase">
                            Global
                        </div>
<div className="text-sm font-medium text-slate-500 uppercase tracking-widest">World Masters Medallists</div>
</div>

<div className="flex flex-col items-center justify-center text-center group py-4 md:py-0">
<div className="flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
<iconify-icon className="text-sm" icon="solar:medal-ribbon-star-linear"></iconify-icon>
<span className="text-[10px] font-semibold tracking-wider uppercase">Regional Dominance</span>
</div>
<div className="text-4xl md:text-6xl font-semibold text-white tracking-tighter mb-2 group-hover:scale-105 transition-transform duration-500 uppercase">
                            Proven
                        </div>
<div className="text-sm font-medium text-slate-500 uppercase tracking-widest">State Medallists</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 px-6 max-w-7xl mx-auto mb-32" id="method">
<div className="w-full">
<div className="mb-12">
<h3 className="text-3xl md:text-4xl text-white font-medium tracking-tighter mb-4">Strategically designed blocks<br/>to suit your goals.</h3>
<p className="text-slate-400 max-w-2xl leading-relaxed">Our training architecture is modular. We assemble micro-cycles into macro-plans that adapt to your physiological response in real-time.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative rounded-2xl bg-white/[0.02] border border-white/5 p-8 overflow-hidden hover:bg-white/[0.04] transition-colors duration-300">
<div className="grid-bg absolute inset-0 opacity-[0.15] mix-blend-overlay"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6">
<iconify-icon className="text-xl" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-white mb-2">Technical Foundations</h4>
<p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">Isolate stroke mechanics into digestible components. We break down the pull, kick, and rotation into singular focus blocks.</p>
<div className="flex items-center gap-2 text-xs font-medium text-indigo-400">
<span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                                Drag Reduction Focus
                            </div>
</div>
</div>

<div className="group relative rounded-2xl bg-white/[0.02] border border-white/5 p-8 overflow-hidden hover:bg-white/[0.04] transition-colors duration-300">
<div className="grid-bg absolute inset-0 opacity-[0.15] mix-blend-overlay"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6">
<iconify-icon className="text-xl" icon="solar:graph-new-linear"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-white mb-2">Metabolic Scaling</h4>
<p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">Heart rate zones are calibrated daily. Push your lactate threshold with precision sets designed to maximize VO2 max gains.</p>
<div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-cyan-500 w-[60%] group-hover:w-[85%] transition-all duration-1000 ease-out"></div>
</div>
</div>
</div>

<div className="group relative rounded-2xl bg-white/[0.02] border border-white/5 p-8 overflow-hidden hover:bg-white/[0.04] transition-colors duration-300">
<div className="grid-bg absolute inset-0 opacity-[0.15] mix-blend-overlay"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-6">
<iconify-icon className="text-xl" icon="solar:flag-linear"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-white mb-2">Taper &amp; Peak</h4>
<p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">The final block aligns your rest periods with your target race date, ensuring you hit the water with optimal freshness.</p>
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] text-slate-400">M</div>
<div className="w-6 h-6 rounded-full border border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] text-slate-400">T</div>
<div className="w-6 h-6 rounded-full border border-slate-900 bg-purple-900/50 text-purple-200 flex items-center justify-center text-[10px] border-purple-500/30">W</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 border-t border-white/5 bg-[#020617]" id="programs">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tighter mb-4">Choose your trajectory.</h2>
<p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">Select a specialized static program or join our fully customized coaching tier.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">

<div className="glass-card rounded-2xl p-1 h-full hover:bg-white/[0.02]">
<div className="bg-[#0b1121]/80 rounded-xl p-6 h-full flex flex-col">
<div className="mb-4 text-slate-400"><iconify-icon className="text-3xl" icon="solar:leaf-linear"></iconify-icon></div>
<h3 className="text-base font-medium text-white mb-2">Foundations</h3>
<div className="flex items-baseline gap-1 mb-1">
<div className="text-2xl font-semibold text-white">$65</div>
</div>
<div className="text-slate-500 text-xs mb-6 font-normal uppercase tracking-wide">One-time payment</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-xs text-slate-300"><iconify-icon className="text-slate-500 text-sm" icon="solar:check-circle-linear"></iconify-icon> 12-Week Programme</li>
<li className="flex items-center gap-3 text-xs text-slate-300"><iconify-icon className="text-slate-500 text-sm" icon="solar:check-circle-linear"></iconify-icon> Stroke Basics</li>
<li className="flex items-center gap-3 text-xs text-slate-300"><iconify-icon className="text-slate-500 text-sm" icon="solar:check-circle-linear"></iconify-icon> Drill Library</li>
</ul>
<button className="w-full py-2 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-medium hover:bg-white hover:text-black transition-all">Buy Program</button>
</div>
</div>

<div className="glass-card rounded-2xl p-1 h-full hover:bg-white/[0.02]">
<div className="bg-[#0b1121]/80 rounded-xl p-6 h-full flex flex-col">
<div className="mb-4 text-blue-400"><iconify-icon className="text-3xl" icon="solar:bolt-linear"></iconify-icon></div>
<h3 className="text-base font-medium text-white mb-2">High Perf. Sprint</h3>
<div className="flex items-baseline gap-1 mb-1">
<div className="text-2xl font-semibold text-white">$65</div>
</div>
<div className="text-slate-500 text-xs mb-6 font-normal uppercase tracking-wide">One-time payment</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-xs text-slate-300"><iconify-icon className="text-blue-500/50 text-sm" icon="solar:check-circle-linear"></iconify-icon> 12-Week Power Block</li>
<li className="flex items-center gap-3 text-xs text-slate-300"><iconify-icon className="text-blue-500/50 text-sm" icon="solar:check-circle-linear"></iconify-icon> Lactate Sets</li>
<li className="flex items-center gap-3 text-xs text-slate-300"><iconify-icon className="text-blue-500/50 text-sm" icon="solar:check-circle-linear"></iconify-icon> Dryland Guide</li>
</ul>
<button className="w-full py-2 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-medium hover:bg-white hover:text-black transition-all">Buy Program</button>
</div>
</div>

<div className="glass-card rounded-2xl p-1 h-full hover:bg-white/[0.02]">
<div className="bg-[#0b1121]/80 rounded-xl p-6 h-full flex flex-col">
<div className="mb-4 text-purple-400"><iconify-icon className="text-3xl" icon="solar:infinity-linear"></iconify-icon></div>
<h3 className="text-base font-medium text-white mb-2">Open Water</h3>
<div className="flex items-baseline gap-1 mb-1">
<div className="text-2xl font-semibold text-white">$65</div>
</div>
<div className="text-slate-500 text-xs mb-6 font-normal uppercase tracking-wide">One-time payment</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-xs text-slate-300"><iconify-icon className="text-purple-500/50 text-sm" icon="solar:check-circle-linear"></iconify-icon> 16-Week Endurance</li>
<li className="flex items-center gap-3 text-xs text-slate-300"><iconify-icon className="text-purple-500/50 text-sm" icon="solar:check-circle-linear"></iconify-icon> Sighting Tactics</li>
<li className="flex items-center gap-3 text-xs text-slate-300"><iconify-icon className="text-purple-500/50 text-sm" icon="solar:check-circle-linear"></iconify-icon> Wetsuit Guide</li>
</ul>
<button className="w-full py-2 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-medium hover:bg-white hover:text-black transition-all">Buy Program</button>
</div>
</div>

<div className="relative group h-full premium-glow">
<div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-2xl opacity-75 blur-sm group-hover:opacity-100 transition duration-500"></div>
<div className="relative glass-card rounded-2xl p-1 h-full bg-[#020617] overflow-hidden">
<div className="bg-[#0b1121] rounded-xl p-6 h-full flex flex-col relative">
<div className="absolute top-0 right-0 bg-gradient-to-bl from-cyan-500/20 to-transparent p-6 rounded-bl-3xl"></div>
<div className="mb-4 text-cyan-400 flex items-center justify-between">
<iconify-icon className="text-3xl" icon="solar:stars-linear"></iconify-icon>
<span className="text-[10px] font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 px-2 py-0.5 rounded-full uppercase tracking-wider">Most Popular</span>
</div>
<h3 className="text-base font-medium text-white mb-2">Custom Programming</h3>
<div className="flex items-baseline gap-1 mb-1">
<div className="text-2xl font-semibold text-white">$100</div>
<span className="text-slate-500 text-sm font-normal">/mo</span>
</div>
<div className="text-cyan-500/80 text-xs mb-6 font-normal uppercase tracking-wide">Cancel anytime</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-xs text-slate-300"><iconify-icon className="text-cyan-500 text-sm" icon="solar:check-circle-bold"></iconify-icon> 1-on-1 Coach Chat</li>
<li className="flex items-center gap-3 text-xs text-slate-300"><iconify-icon className="text-cyan-500 text-sm" icon="solar:check-circle-bold"></iconify-icon> Video Analysis</li>
<li className="flex items-center gap-3 text-xs text-slate-300"><iconify-icon className="text-cyan-500 text-sm" icon="solar:check-circle-bold"></iconify-icon> Weekly Adjustments</li>
<li className="flex items-center gap-3 text-xs text-slate-300"><iconify-icon className="text-cyan-500 text-sm" icon="solar:check-circle-bold"></iconify-icon> Race Tapering</li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all">Apply Now</button>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#020617] pt-16 pb-8 px-6 relative z-10">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-lg font-medium text-white flex items-center gap-2 mb-4" href="index.html">
<div className="w-6 h-6 bg-cyan-500 rounded-full blur-[10px] absolute"></div>
<iconify-icon className="text-cyan-400 relative z-10" icon="solar:water-drops-bold-duotone"></iconify-icon>
<span className="relative z-10">HYDROFLOW</span>
</a>
<p className="text-slate-500 text-xs leading-relaxed max-w-xs">
                    Next generation swimming performance platform powered by biomechanics data and elite coaching methodologies.
                </p>
</div>
<div>
<h4 className="text-white font-medium text-xs uppercase tracking-wider mb-6">Platform</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Methodology</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Technology</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-xs uppercase tracking-wider mb-6">Resources</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Drill Library</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Support</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-xs uppercase tracking-wider mb-6">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
<div>© 2023 Hydroflow Coaching.</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:brand-instagram-bold"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:brand-twitter-bold"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:brand-youtube-bold"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
