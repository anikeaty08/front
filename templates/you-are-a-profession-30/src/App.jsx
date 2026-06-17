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
      

<header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 glass transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="/">
<div className="w-6 h-6 rounded bg-white flex items-center justify-center text-black">
<svg className="lucide lucide-aperture w-3.5 h-3.5" data-lucide="aperture" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16 3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path></svg>
</div>
<span className="text-sm font-semibold tracking-tight text-white group-hover:opacity-80 transition-opacity">FARNESS</span>
</a>

<nav className="hidden md:flex items-center p-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
<a className="px-5 py-1.5 text-xs font-medium text-white rounded-full bg-white/10 transition-all" href="/">Home</a>
<a className="px-5 py-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="/technologies">Technologies</a>

<div className="relative group">
<button className="px-5 py-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors flex items-center gap-1">
                        Use Cases
                        <svg className="lucide lucide-chevron-down w-3 h-3 opacity-50" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>

<div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 p-1 bg-[#0A0A0A] border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top scale-95 group-hover:scale-100">
<div className="px-3 py-2 text-[10px] font-semibold text-zinc-600 uppercase tracking-widest border-b border-white/5 mb-1">Use Cases</div>
<a className="flex items-center gap-2 px-3 py-2 text-xs text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="/use-cases/drone">
<svg className="lucide lucide-send w-3.5 h-3.5" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                            Autonomous Drones
                        </a>
<a className="flex items-center gap-2 px-3 py-2 text-xs text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="/use-cases/lidar">
<svg className="lucide lucide-scan-line w-3.5 h-3.5" data-lucide="scan-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M7 12h10"></path></svg>
                            LiDAR
                        </a>
</div>
</div>
<a className="px-5 py-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="/contact">Contact</a>
</nav>

<a className="hidden sm:flex items-center gap-2 pl-4 pr-1.5 py-1.5 bg-white text-black rounded-full hover:bg-zinc-200 transition-all group" href="/technologies#video">
<span className="text-xs font-semibold tracking-tight pl-1">Watch Video</span>
<span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
<svg className="lucide lucide-play w-3 h-3 fill-current ml-0.5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</span>
</a>

<button className="md:hidden text-white">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</header>
<main className="flex-grow pt-16">

<section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-black/50 z-10"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
<div className="z-10 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Drone Background" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1550534791-2677533605ab?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-20 text-center max-w-2xl mx-auto px-6 animate-fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-md mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[10px] font-medium text-white tracking-widest uppercase">System Online V2.4</span>
</div>
<h1 className="text-5xl sm:text-7xl font-semibold tracking-tighter text-white mb-8 leading-[0.9]">
                    Autonomy <br/><span className="text-zinc-500">Redefined.</span>
</h1>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="min-w-[160px] inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-zinc-200 transition-all duration-300" href="/contact">
<span className="text-sm font-semibold">Request a Demo</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="z-20 bg-black pr-6 pb-32 pl-6 relative">
<div className="max-w-7xl mx-auto -mt-24 relative z-30">

<div className="mb-16 max-w-3xl animate-fade-up">
<div className="flex items-center gap-2 mb-4 text-emerald-500">
<svg className="lucide lucide-target w-4 h-4" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="10"></circle><circle className="" cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
<span className="uppercase text-xs font-semibold tracking-widest">Our Vision</span>
</div>
<h2 className="text-3xl sm:text-4xl font-medium text-white leading-tight tracking-tight mb-6">
                        We believe drones should be more than just remote-controlled tools. They should understand, decide, and act autonomously.
                    </h2>
<p className="leading-relaxed sm:text-base text-sm text-zinc-400 border-white/10 border-l pl-6">
                        Farness builds the intelligence that enables a fleet of drones to operate as a real team, adapting, cooperating, and completing complex missions in real environments.
                    </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 mb-24">

<div className="md:col-span-6 lg:col-span-8 h-[400px] rounded-3xl border border-white/10 overflow-hidden relative group animate-fade-up delay-100">
<div className="absolute top-6 left-6 z-20">
<div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur border border-white/10 flex items-center justify-center">
<svg className="lucide lucide-aperture w-4 h-4 text-white" data-lucide="aperture" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16 3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path></svg>
</div>
</div>
<img alt="Our Values" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
<div className="absolute bottom-8 left-8 right-8">
<h3 className="text-xl font-medium text-white tracking-tight">Precision Engineering</h3>
<p className="text-xs text-zinc-400 mt-1">Core values visualized.</p>
</div>
</div>

<div className="md:col-span-6 lg:col-span-4 h-[400px] rounded-3xl bg-zinc-900/40 border border-white/10 p-8 flex flex-col justify-between hover:bg-zinc-900/60 transition-colors animate-fade-up delay-200">
<div className="">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 text-white border border-white/5">
<svg className="lucide lucide-cpu w-5 h-5" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-3">Distributed Intelligence</h3>
<p className="leading-relaxed text-sm text-zinc-400">Farness is a distributed intelligence platform for autonomous drones. Through our voice control system and onboard multi-agent AI, we transform natural language commands into missions carried out autonomously.</p>
</div>
<div className="pt-6 border-t border-white/5">
<div className="flex items-center gap-2 text-xs font-medium text-white">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                Swarm Ready
                            </div>
</div>
</div>

<div className="md:col-span-12 rounded-3xl bg-zinc-900/30 border border-white/10 overflow-hidden mt-6 animate-fade-up delay-300">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-white/5">

<div className="p-8 group hover:bg-white/[0.02] transition-colors">
<div className="text-3xl font-semibold text-white tracking-tight mb-1">60%</div>
<div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Time Savings</div>
<p className="text-xs text-zinc-400">Up to 60% faster operations in field environments.</p>
</div>

<div className="p-8 group hover:bg-white/[0.02] transition-colors">
<div className="text-3xl font-semibold text-white tracking-tight mb-1">70%</div>
<div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Labor Reduction</div>
<p className="text-xs text-zinc-400">Significantly fewer operators required per mission.</p>
</div>

<div className="p-8 group hover:bg-white/[0.02] transition-colors">
<div className="text-3xl font-semibold text-white tracking-tight mb-1">3-6<span className="text-lg text-zinc-500 font-normal ml-1">mo</span></div>
<div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">ROI</div>
<p className="text-xs text-zinc-400">Rapid return on investment, sector-dependent.</p>
</div>

<div className="p-8 group hover:bg-white/[0.02] transition-colors">
<div className="text-3xl font-semibold text-white tracking-tight mb-1">1:N</div>
<div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Scalability</div>
<p className="text-xs text-zinc-400">One operator manages multiple autonomous drones.</p>
</div>
</div>
</div>

<div className="md:col-span-6 rounded-3xl border border-white/10 p-8 flex flex-col justify-center bg-zinc-900/20 mt-6 animate-fade-up">
<div className="mb-4">
<span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">Our Mission</span>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3">
                            Accessible Intelligence
                        </h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            Make autonomous intelligence accessible to all field-based industries. We help sectors automate their critical operations with intelligent drone swarms.
                        </p>
</div>
<div className="md:col-span-6 rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-white/10 p-8 flex flex-col justify-center mt-6 animate-fade-up">
<div className="flex items-center gap-2 mb-4">
<svg className="lucide lucide-building-2 w-4 h-4 text-zinc-500" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
<span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">Part of B2G Consulting</span>
</div>
<p className="text-sm text-zinc-400 leading-relaxed">
                            Farness is part of B2G Consulting, an international consulting group specializing in critical operations and digital transformation. This partnership strengthens our execution capability and industrial credibility.
                        </p>
</div>
</div>

<div className="border-t border-white/10 pt-16 animate-fade-up">
<p className="text-center text-xs font-medium text-zinc-600 uppercase tracking-widest mb-10">Trusted Partners</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale opacity-50 hover:opacity-100 transition-opacity duration-500">
<div className="text-sm font-semibold text-white tracking-tight flex items-center gap-2"><svg className="lucide lucide-layout-grid w-4 h-4" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg> Microsoft</div>
<div className="text-sm font-semibold text-white tracking-tight">Technopole</div>
<div className="text-sm font-semibold text-white tracking-tight">Systematic Paris Region</div>
<div className="text-sm font-semibold text-white tracking-tight">Parrot</div>
<div className="text-sm font-semibold text-white tracking-tight">Nvidia</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-black border-t border-white/10 py-20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

<div className="md:col-span-5 flex flex-col gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-zinc-800 flex items-center justify-center text-white">
<svg className="lucide lucide-aperture w-3 h-3" data-lucide="aperture" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16 3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path></svg>
</div>
<span className="text-sm font-semibold tracking-tight text-white">FARNESS</span>
</div>
<p className="text-sm text-zinc-500 leading-relaxed max-w-sm">
                        Revolutionizing industrial operations with advanced drone technology.
                    </p>
</div>

<div className="md:col-span-4">
<h4 className="text-xs font-medium text-white uppercase tracking-widest mb-6">Solutions</h4>
<ul className="space-y-3">
<li className="">
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="/use-cases/drone">Autonomous Drones</a>
</li>
<li>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="/use-cases/lidar">LiDAR</a>
</li>
<li className="">
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="/technologies">Technology</a>
</li>
</ul>
</div>

<div className="md:col-span-3">
<h4 className="text-xs font-medium text-white uppercase tracking-widest mb-6">Connect</h4>
<a className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors group" href="https://linkedin.com" target="_blank">
<svg className="lucide lucide-linkedin w-4 h-4 group-hover:text-blue-400 transition-colors" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
<span>LinkedIn</span>
</a>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-600">© 2025 Farness. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-xs text-zinc-600 hover:text-zinc-400" href="#">Privacy Policy</a>
<a className="text-xs text-zinc-600 hover:text-zinc-400" href="#">Terms of Flight</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
