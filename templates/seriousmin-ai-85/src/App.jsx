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



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    


        function updateTime() {
            const now = new Date();
            let hours = now.getHours();
            const minutes = now.getMinutes();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            const strTime = hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + ampm;
            document.getElementById('clock').textContent = strTime;
        }
        setInterval(updateTime, 1000);
        updateTime();
    
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
      

<div className="fixed inset-0 w-full h-full -z-50 bg-[#020202]">
<div data-us-project="3LKtnncVwZ6YDBjhBx8n" style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', opacity: '0.6'}}></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#020202]/30 via-transparent to-[#020202] pointer-events-none"></div>
</div>


<div className="grain-overlay"></div>

<nav className="fixed z-50 md:px-12 flex text-white mix-blend-difference w-full pt-6 pr-6 pb-6 pl-6 top-0 items-center justify-between">
<div className="flex items-center gap-6 md:gap-8">

<a className="block relative z-50" href="#">
<img alt="SeriousMindz Logo" className="h-8 md:h-9 w-auto object-contain" src="https://storage.googleapis.com/msgsndr/iZ2UmL6gT1qBGckpnKmI/media/690ebc39b23abdcc6184a584.png"/>
</a>

<div className="hidden md:flex flex-col items-start gap-1 border-l border-white/20 pl-6">
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
</span>
<span className="uppercase text-xs text-neutral-400 tracking-widest">Available for All Businesses </span>
</div>
<span className="text-xs text-neutral-500 font-mono pl-4">QUOTA 02/05 2024</span>
</div>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex flex-col items-end">
<span className="text-xs text-neutral-300 font-mono" id="clock" style={{maskImage: 'linear-gradient(30deg, transparent, black 0%, black 100%, transparent)'}}>10:37 PM</span>
<span className="uppercase text-xs text-neutral-500 tracking-wider">USA. Nashville, TN</span>
</div>
<button className="md:hidden text-white">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
<a className="hidden md:flex relative overflow-hidden items-center gap-2 px-5 py-2 rounded-full border border-neutral-700 bg-neutral-900/50 hover:bg-neutral-800 hover:border-lime-500/50 transition-all duration-300 group backdrop-blur-sm" href="tel:8776596156">
<div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12 transition-transform duration-700 ease-in-out group-hover:translate-x-[200%]"></div>
<span className="relative z-10 text-xs uppercase tracking-widest font-normal">Let's Talk</span>
<svg className="lucide lucide-phone w-3.5 h-3.5 text-lime-400 fill-lime-400/10 relative z-10 group-hover:rotate-12 transition-transform duration-300" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</a>
</div>
</nav>

<main className="min-h-screen flex flex-col w-full z-10 pt-24 pb-8 relative justify-between">
<div className="container md:px-12 flex flex-col flex-grow h-full mr-auto ml-auto pr-6 pl-6 relative justify-between">
<div className="relative z-20 mt-10 md:mt-20">
<div className="flex flex-col">
<div className="flex items-start">
<h1 className="font-bricolage text-[9vw] md:text-[7vw] leading-[0.8] uppercase bg-clip-text font-medium text-transparent tracking-tighter bg-gradient-to-b from-white via-neutral-200 to-neutral-500 drop-shadow-[0_0_50px_rgba(255,255,255,0.2)]">
    SeriousMindz AI
</h1>
</div>
<div className="flex items-start">
<span className="text-lg md:text-3xl font-light text-neutral-500 mt-2 md:mt-4 ml-2 align-top">®</span>
</div>
</div>
<div className="flex items-center gap-4 mt-2 ml-2">
<span className="text-xs tracking-[0.2em] uppercase text-lime-400/80 border border-lime-500/30 px-2 py-1 rounded bg-lime-900/10 backdrop-blur-sm">Design + Strategy</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 w-full pb-8 gap-x-8 gap-y-8 items-end">
<div className="md:col-span-6 relative">
<div className="absolute -left-4 top-0 w-[1px] h-full bg-gradient-to-b from-lime-500/50 to-transparent"></div>
<div className="pl-4">
<h2 className="md:text-4xl brand-font leading-tight text-2xl font-normal text-white tracking-tight mb-4">
                            Beyond Visuals.<br/>
<span className="text-neutral-500">Built for ROI.</span>
</h2>
<p className="text-lg md:text-xl font-light text-neutral-400 leading-relaxed max-w-lg">
                            We engineer <span className="text-white font-normal">high-end websites and funnels</span> for service-based businesses. Blending futuristic aesthetics with psychological triggers to maximize conversion rates.
                        </p>
<div className="flex flex-col sm:flex-row gap-4 mt-8">
<a className="relative inline-flex justify-center items-center gap-2 px-8 py-3 bg-lime-400 text-black rounded-full text-base font-medium tracking-wide overflow-hidden group transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(163,230,53,0.6)] hover:shadow-[0_0_30px_rgba(163,230,53,0.9)] border border-lime-300" href="https://www.seriousmgmt.com">
<div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent transform -skew-x-12 animate-shine-effect z-10"></div>
<span className="relative z-20 flex items-center gap-2">
                                    Start Project
                                    <svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</a>
<a className="relative inline-flex justify-center items-center gap-2 px-8 py-3 border border-neutral-700 text-white rounded-full text-base font-normal tracking-wide hover:bg-neutral-800 transition-colors backdrop-blur-md overflow-hidden group" href="https://link.seriousmindz.ai/widget/booking/H2U0tyZe2aGUy1Q8fU4R">
<div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-shine-effect z-10"></div>
<span className="relative z-20">Book Call</span>
</a>
</div>
</div>
</div>
<div className="hidden md:block md:col-span-2"></div>
<div className="md:col-span-4 flex flex-col justify-end">
<div className="border-t border-neutral-800 pt-6">
<div className="flex items-center gap-3 mb-2">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-900 flex items-center justify-center text-xs text-white">L</div>
<div className="w-8 h-8 rounded-full bg-neutral-700 border border-neutral-900 flex items-center justify-center text-xs text-white">S</div>
<div className="w-8 h-8 rounded-full bg-lime-900 border border-neutral-900 flex items-center justify-center text-xs text-lime-400">+</div>
</div>
<span className="text-base text-white font-normal">40+ Agencies</span>
</div>
<span className="text-xs text-neutral-500 uppercase tracking-widest">Trusted Partners</span>
</div>
</div>
</div>
</div>
<div className="absolute bottom-10 left-0 w-full px-6 md:px-12 flex justify-between pointer-events-none mix-blend-overlay">
<span className="text-[10px] text-neutral-600 tracking-[0.5em] uppercase opacity-50">System.01</span>
<span className="text-[10px] text-neutral-600 tracking-[0.5em] uppercase opacity-50">Scroll_Y</span>
</div>
</main>

<section className="py-24 md:py-32 relative z-10 border-t border-neutral-900 bg-neutral-950/50 backdrop-blur-sm">
<div className="container mx-auto px-6 md:px-12">
<div className="max-w-4xl mx-auto text-center">
<span className="text-xs font-mono text-lime-500 mb-6 block tracking-widest uppercase">The Old Way</span>
<h2 className="lg:text-6xl md:text-4xl text-4xl font-medium text-white tracking-tight mb-6">
                    Most Service Websites Are Just <br/> <span className="text-neutral-600">Expensive Business Cards.</span>
</h2>
<h3 className="text-2xl text-neutral-400 font-light mb-8">Stop settling for "pretty." It’s costing you clients.</h3>
<div className="grid md:grid-cols-2 gap-12 text-left mt-16 max-w-3xl mx-auto bg-neutral-900/40 p-8 rounded-2xl border border-neutral-800/50 backdrop-blur-sm">
<div className="">
<div className="flex items-center gap-2 mb-3 text-red-400/80">
<svg className="lucide lucide-x-circle w-5 h-5" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="text-sm uppercase tracking-wider font-medium">The Liability</span>
</div>
<p className="text-neutral-400 leading-relaxed font-light text-base">
                            In a crowded digital landscape, blending in is a death sentence. Most agencies will build you a website that looks nice but does nothing. No strategy. No sales logic.
                        </p>
</div>
<div className="">
<div className="flex items-center gap-2 mb-3 text-lime-400/80">
<svg className="lucide lucide-check-circle-2 w-5 h-5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm uppercase tracking-wider font-medium">The Asset</span>
</div>
<p className="text-neutral-400 leading-relaxed font-light text-base">
                            If your site isn’t actively turning visitors into booked appointments, it’s not an asset—it’s a liability. You don’t need a brochure; you need a 24/7 sales acquisition system.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 bg-[#020202]">
<div className="container mx-auto px-6 md:px-12">
<div className="mb-16 md:mb-24 max-w-2xl">
<span className="text-xs font-mono text-lime-500 mb-4 block tracking-widest uppercase">Methodology</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">The Architecture of Conversion.</h2>
<p className="text-xl font-light text-neutral-500">Where design aesthetics meet neuromarketing.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-xl border border-neutral-800 bg-[#050505] hover:border-lime-500/30 transition-all duration-500">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 text-lime-400 group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-brain-circuit w-6 h-6" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Psychological Triggers</h3>
<p className="text-neutral-400 text-base leading-relaxed font-light">
                        We don’t guess. We engineer layouts using cognitive biases and persuasion principles that compel visitors to take action instinctively.
                    </p>
</div>

<div className="group relative p-8 rounded-xl border border-neutral-800 bg-[#050505] hover:border-lime-500/30 transition-all duration-500">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 text-lime-400 group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-gem w-6 h-6" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Futuristic Aesthetics</h3>
<p className="text-neutral-400 text-base leading-relaxed font-light">
                        Establish instant authority. Our designs are clean, bold, and immersive. We position your brand as the premium, high-tech leader in your niche.
                    </p>
</div>

<div className="group relative p-8 rounded-xl border border-neutral-800 bg-[#050505] hover:border-lime-500/30 transition-all duration-500">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 text-lime-400 group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-bar-chart-2 w-6 h-6" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Built for ROI</h3>
<p className="text-neutral-400 text-base leading-relaxed font-light">
                        Every pixel has a purpose. From load speed to button placement, our primary metric is your Return on Investment.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-28 relative z-10 bg-[#020202] overflow-hidden">

<div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-lime-500/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="container mx-auto px-6 md:px-12 relative z-20">
<div className="mb-20">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-lime-900/20 border border-lime-500/30 text-xs font-mono text-lime-400 mb-6 tracking-widest uppercase shadow-[0_0_15px_rgba(163,230,53,0.1)]">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-lime-500"></span>
</span>
                    Capabilities
                 </span>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-4">
                    Intelligent Voice <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-lime-500 to-emerald-400 animate-gradient-x drop-shadow-[0_0_25px_rgba(132,204,22,0.3)]">Solutions</span>
</h2>
<p className="text-xl text-neutral-400 font-light max-w-2xl">
                     Automate your intake and sales with AI agents that sound human, act instantly, and close deals.
                 </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<a className="stagger-item group relative p-[1px] rounded-3xl bg-neutral-800 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_50px_-10px_rgba(132,204,22,0.3)] block" href="https://link.seriousmindz.ai/payment-link/693904a1b8603c49b5394347" style={{animationDelay: '0ms'}}>
<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-neutral-800 via-neutral-800 to-neutral-700 group-hover:from-lime-400 group-hover:via-emerald-500 group-hover:to-lime-600 opacity-100 transition-all duration-500"></div>
<div className="relative h-full bg-[#050505] rounded-[23px] p-8 overflow-hidden flex flex-col">
<div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 transition-transform duration-1000 group-hover:translate-x-[200%] z-10 pointer-events-none"></div>
<div className="absolute -right-20 -top-20 w-64 h-64 bg-lime-500/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative w-14 h-14 rounded-xl bg-neutral-900 border border-neutral-800 group-hover:border-lime-500/50 group-hover:bg-lime-900/10 flex items-center justify-center text-lime-400 mb-8 transition-all duration-500 shadow-sm group-hover:shadow-[0_0_20px_rgba(132,204,22,0.25)] group-hover:scale-110">
<svg className="lucide lucide-flask-conical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"></path><path d="M8.5 2h7"></path><path d="M7 16h10"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-4 tracking-wide uppercase leading-tight group-hover:text-lime-300 transition-colors duration-300">
                            AI Intake Agent <br/> <span className="text-neutral-500 group-hover:text-white/70 transition-colors">Start Trial</span>
</h3>
<p className="text-base text-neutral-400 font-light leading-relaxed mb-8 flex-grow">
                            Deploy 24/7 autonomous agents that handle inbound qualification with human-like latency.
                        </p>
<div className="mt-auto pt-6 border-t border-neutral-900 group-hover:border-lime-900/30 flex items-center justify-between text-xs font-medium uppercase tracking-widest text-neutral-500 group-hover:text-lime-400 transition-colors duration-300">
<span>Get Started</span>
<div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:bg-lime-500 group-hover:text-black group-hover:border-lime-400 transition-all duration-300 transform group-hover:translate-x-1">
<svg className="lucide lucide-arrow-right" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</a>

<a className="stagger-item group relative p-[1px] rounded-3xl bg-neutral-800 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_50px_-10px_rgba(132,204,22,0.3)] block" href="https://link.seriousmindz.ai/payment-link/6939058fb8603c580539441d" style={{animationDelay: '150ms'}}>
<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-neutral-800 via-neutral-800 to-neutral-700 group-hover:from-lime-400 group-hover:via-emerald-500 group-hover:to-lime-600 opacity-100 transition-all duration-500"></div>
<div className="relative h-full bg-[#050505] rounded-[23px] p-8 overflow-hidden flex flex-col">
<div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 transition-transform duration-1000 group-hover:translate-x-[200%] z-10 pointer-events-none"></div>
<div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative w-14 h-14 rounded-xl bg-neutral-900 border border-neutral-800 group-hover:border-lime-500/50 group-hover:bg-lime-900/10 flex items-center justify-center text-lime-400 mb-8 transition-all duration-500 shadow-sm group-hover:shadow-[0_0_20px_rgba(132,204,22,0.25)] group-hover:scale-110">
<svg className="lucide lucide-phone-call" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-4 tracking-wide uppercase leading-tight group-hover:text-lime-300 transition-colors duration-300">
                            Sales &amp; Booking <br/> <span className="text-neutral-500 group-hover:text-white/70 transition-colors">Professional Plan</span>
</h3>
<p className="text-base text-neutral-400 font-light leading-relaxed mb-8 flex-grow">
                            Seamlessly transfer hot leads to your sales team or book appointments directly into your calendar.
                        </p>
<div className="mt-auto pt-6 border-t border-neutral-900 group-hover:border-lime-900/30 flex items-center justify-between text-xs font-medium uppercase tracking-widest text-neutral-500 group-hover:text-lime-400 transition-colors duration-300">
<span>Get Started</span>
<div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:bg-lime-500 group-hover:text-black group-hover:border-lime-400 transition-all duration-300 transform group-hover:translate-x-1">
<svg className="lucide lucide-arrow-right" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</a>

<a className="stagger-item group relative p-[1px] rounded-3xl bg-neutral-800 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_50px_-10px_rgba(132,204,22,0.3)] block" href="https://link.seriousmindz.ai/payment-link/693905b7902dfcdbc100a679" style={{animationDelay: '300ms'}}>
<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-neutral-800 via-neutral-800 to-neutral-700 group-hover:from-lime-400 group-hover:via-emerald-500 group-hover:to-lime-600 opacity-100 transition-all duration-500"></div>
<div className="relative h-full bg-[#050505] rounded-[23px] p-8 overflow-hidden flex flex-col">
<div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 transition-transform duration-1000 group-hover:translate-x-[200%] z-10 pointer-events-none"></div>
<div className="absolute -right-20 -top-20 w-64 h-64 bg-teal-500/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative w-14 h-14 rounded-xl bg-neutral-900 border border-neutral-800 group-hover:border-lime-500/50 group-hover:bg-lime-900/10 flex items-center justify-center text-lime-400 mb-8 transition-all duration-500 shadow-sm group-hover:shadow-[0_0_20px_rgba(132,204,22,0.25)] group-hover:scale-110">
<svg className="lucide lucide-bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-4 tracking-wide uppercase leading-tight group-hover:text-lime-300 transition-colors duration-300">
                            CRM &amp; Support Agent <br/> <span className="text-neutral-500 group-hover:text-white/70 transition-colors">Enterprise Solution</span>
</h3>
<p className="text-base text-neutral-400 font-light leading-relaxed mb-8 flex-grow">
                            Integrate with your CRM to automate follow-ups, reactivation campaigns, and customer support.
                        </p>
<div className="mt-auto pt-6 border-t border-neutral-900 group-hover:border-lime-900/30 flex items-center justify-between text-xs font-medium uppercase tracking-widest text-neutral-500 group-hover:text-lime-400 transition-colors duration-300">
<span>Get Started</span>
<div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:bg-lime-500 group-hover:text-black group-hover:border-lime-400 transition-all duration-300 transform group-hover:translate-x-1">
<svg className="lucide lucide-arrow-right" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="bg-[#030303] z-10 pt-24 pb-24 relative">
<div className="container md:px-12 mr-auto ml-auto pr-6 pl-6">
<div className="mb-16 text-center max-w-2xl mx-auto">
<span className="text-xs font-mono text-lime-500 mb-4 block tracking-widest uppercase">Work</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white">Results Are The Only Metric That Matters.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 mb-16 gap-8">

<a className="group block cursor-pointer" href="https://www.seriousmgmt.com">
<div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-neutral-900">

<img alt="Agency Funnel Abstract" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

<div className="absolute top-4 right-4 translate-y-[-10px] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
<span className="inline-flex items-center text-xs font-normal text-black bg-white/90 border-white border rounded-full px-3 py-1 backdrop-blur-md shadow-lg">View Case Study</span>
</div>
</div>
<div className="mt-6 flex items-center justify-between">
<div className="space-y-1">
<h3 className="transition-colors group-hover:text-lime-400 text-xl font-medium text-white tracking-tight">Agency Funnel</h3>
<p className="text-sm font-normal text-neutral-500">Landing Page • High Conversion</p>
</div>
<div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
<svg className="lucide lucide-arrow-up-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</a>

<a className="group block cursor-pointer" href="https://www.seriousmgmt.com">
<div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-neutral-900">

<img alt="Website Redesign Tech" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute top-4 right-4 translate-y-[-10px] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
<span className="inline-flex items-center text-xs font-normal text-black bg-white/90 border-white border rounded-full px-3 py-1 backdrop-blur-md shadow-lg">
                                View Case Study
                            </span>
</div>
</div>
<div className="mt-6 flex items-center justify-between">
<div className="space-y-1">
<h3 className="transition-colors group-hover:text-lime-400 text-xl font-medium text-white tracking-tight">Website Redesign</h3>
<p className="text-sm font-normal text-neutral-500">Home Page • Pedal Pub Business</p>
</div>
<div className="flex transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20 text-white bg-white/5 w-10 h-10 border-white/10 border rounded-full items-center justify-center">
<svg className="lucide lucide-arrow-up-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M7 7h10v10"></path><path className="" d="M7 17 17 7"></path></svg>
</div>
</div>
</a>
</div>
<div className="bg-gradient-to-b from-neutral-900/30 to-transparent border border-neutral-800 p-8 md:p-12 rounded-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 p-12 opacity-10">
<svg className="text-lime-500" fill="currentColor" height="120" viewbox="0 0 24 24" width="120" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9C9.00001 15 9.00001 14 9.00001 13C9.00001 10.0001 12 7.00006 12 7.00006V4C12 4 4.00001 4.00006 4.00001 12.0001V18C4.00001 19.1046 4.89544 20 6.00001 20H12.017V21ZM24.017 21L24.017 18C24.017 16.8954 23.1216 16 22.017 16H19C19 15 19 14 19 13C19 10.0001 22 7.00006 22 7.00006V4C22 4 14 4.00006 14 12.0001V18C14 19.1046 14.8954 20 16 20H22.017V21Z"></path></svg>
</div>
<blockquote className="relative z-10">
<p className="md:text-2xl leading-relaxed text-lg font-light italic text-neutral-200">Seriousmindz Ai didn't just redesign our site; they completely re-engineered how we get clients. Our booking rate increased by 200% in the first month. The design is unlike anything else in our industry."</p>
<footer className="mt-8 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center font-bold text-white">J</div>
<div className="">
<div className="text-white font-medium">James T.</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide">CEO of Vertex Agency</div>
</div>
</footer>
</blockquote>
</div>
<div className="mt-16 pt-8 border-t border-neutral-900 flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale">
<span className="text-xl font-bold font-sans">VERTEX</span>
<span className="text-xl font-semibold font-serif">Aura</span>
<span className="text-xl font-bold tracking-tighter">NEXUS</span>
<span className="text-xl font-medium font-mono">/// CodeLabs</span>
<span className="text-xl font-bold italic">Shift.</span>
</div>
</div>
</section>

<section className="py-24 relative z-10">
<div className="container mx-auto px-6 md:px-12">
<div className="mb-16">
<span className="text-xs font-mono text-lime-500 mb-4 block tracking-widest uppercase">Process</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">From Concept to Deployment.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
<div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-neutral-800 via-lime-900/50 to-neutral-800 -z-10"></div>
<div className="relative">
<div className="w-8 h-8 rounded-full bg-[#020202] border border-lime-500/50 flex items-center justify-center text-lime-500 text-xs font-bold mb-6 z-10">01</div>
<h3 className="text-lg font-medium text-white mb-2">Discovery &amp; Audit</h3>
<p className="text-base text-neutral-500 leading-relaxed">We deep-dive into your current metrics and competitor landscape to find the gaps.</p>
</div>
<div className="relative">
<div className="w-8 h-8 rounded-full bg-[#020202] border border-neutral-700 flex items-center justify-center text-neutral-400 text-xs font-bold mb-6 z-10">02</div>
<h3 className="text-lg font-medium text-white mb-2">Blueprint Strategy</h3>
<p className="text-base text-neutral-500 leading-relaxed">We map out the user journey, copywriting angles, and conversion points before design starts.</p>
</div>
<div className="relative">
<div className="w-8 h-8 rounded-full bg-[#020202] border border-neutral-700 flex items-center justify-center text-neutral-400 text-xs font-bold mb-6 z-10">03</div>
<h3 className="text-lg font-medium text-white mb-2">The Build</h3>
<p className="text-base text-neutral-500 leading-relaxed">We design your asset using high-end visuals and code it for lightning-fast performance.</p>
</div>
<div className="relative">
<div className="w-8 h-8 rounded-full bg-[#020202] border border-neutral-700 flex items-center justify-center text-neutral-400 text-xs font-bold mb-6 z-10">04</div>
<h3 className="text-lg font-medium text-white mb-2">Launch &amp; Optimize</h3>
<p className="text-base text-neutral-500 leading-relaxed">We deploy your site, connect the analytics, and ensure all systems are firing.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 border-t border-neutral-900 bg-[#020202]">
<div className="container mx-auto px-6 md:px-12">
<div className="text-center mb-16">
<span className="text-xs font-mono text-lime-500 mb-4 block tracking-widest uppercase">Engagement Models</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">Select Your Growth Engine.</h2>
<p className="text-xl font-light text-neutral-500">Transparent pricing for scalable systems.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

<div className="relative p-8 rounded-2xl border border-neutral-800 bg-neutral-900/20 flex flex-col hover:border-neutral-700 transition-all duration-300">
<h3 className="text-xl font-medium text-white mb-2">Core System</h3>
<p className="text-base text-neutral-400 mb-8 min-h-[5rem]">Essential landing page and automation foundation for emerging agencies.</p>
<div className="text-3xl font-semibold text-white mb-8 tracking-tight">Starter <span className="text-sm font-normal text-neutral-500">/ one-time</span></div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-base text-neutral-300">
<svg className="w-5 h-5 text-lime-500 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                            Custom High-Converting Landing Page
                        </li>
<li className="flex items-start gap-3 text-base text-neutral-300">
<svg className="w-5 h-5 text-lime-500 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                            Basic CRM Integration
                        </li>
<li className="flex items-start gap-3 text-base text-neutral-300">
<svg className="w-5 h-5 text-lime-500 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                            Mobile Optimization
                        </li>
</ul>
<a className="w-full block text-center py-3 rounded-lg border border-neutral-700 text-white font-normal text-sm hover:bg-white hover:text-black transition-all duration-300" href="https://link.seriousmindz.ai/payment-link/68eeda482197093827e2b21b">
                        Get Started
                    </a>
</div>

<div className="relative p-8 rounded-2xl border border-lime-500/40 bg-neutral-900/40 flex flex-col shadow-[0_0_40px_-10px_rgba(132,204,22,0.1)]">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-lime-500 text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Most Popular</div>
<h3 className="text-xl font-medium text-white mb-2">Growth Engine</h3>
<p className="text-base text-neutral-400 mb-8 min-h-[5rem]">Complete website overhaul with advanced Voice AI integration.</p>
<div className="text-3xl font-semibold text-white mb-8 tracking-tight">Growth <span className="text-sm font-normal text-neutral-500">/ package</span></div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-base text-white">
<svg className="w-5 h-5 text-lime-400 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                            5-Page Premium Website
                        </li>
<li className="flex items-start gap-3 text-base text-white">
<svg className="w-5 h-5 text-lime-400 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                            Voice AI Sales Agent Setup
                        </li>
<li className="flex items-start gap-3 text-base text-white">
<svg className="w-5 h-5 text-lime-400 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                            Advanced Copywriting &amp; Strategy
                        </li>
<li className="flex items-start gap-3 text-base text-white">
<svg className="w-5 h-5 text-lime-400 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                            30 Days Support
                        </li>
</ul>
<a className="w-full block text-center py-3 rounded-lg bg-lime-400 text-black font-medium text-sm hover:bg-lime-300 transition-all duration-300 shadow-[0_0_20px_rgba(163,230,53,0.4)]" href="https://link.seriousmindz.ai/payment-link/68eedac9219709f213e2b221">
                        Select Growth
                    </a>
</div>

<div className="relative p-8 rounded-2xl border border-neutral-800 bg-neutral-900/20 flex flex-col hover:border-neutral-700 transition-all duration-300">
<h3 className="text-xl font-medium text-white mb-2">Dominion</h3>
<p className="text-base text-neutral-400 mb-8 min-h-[5rem]">Full-scale digital transformation and custom automation architecture.</p>
<div className="text-3xl font-semibold text-white mb-8 tracking-tight">Scale <span className="text-sm font-normal text-neutral-500">/ enterprise</span></div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-base text-neutral-300">
<svg className="w-5 h-5 text-lime-500 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                            Full Custom Funnel Ecosystem
                        </li>
<li className="flex items-start gap-3 text-base text-neutral-300">
<svg className="w-5 h-5 text-lime-500 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                            Multi-Agent AI Workforce
                        </li>
<li className="flex items-start gap-3 text-base text-neutral-300">
<svg className="w-5 h-5 text-lime-500 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                            Priority Development Queue
                        </li>
<li className="flex items-start gap-3 text-base text-neutral-300">
<svg className="w-5 h-5 text-lime-500 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                            Dedicated Account Manager
                        </li>
</ul>
<a className="w-full block text-center py-3 rounded-lg border border-neutral-700 text-white font-normal text-sm hover:bg-white hover:text-black transition-all duration-300" href="https://link.seriousmindz.ai/payment-link/68eedafa2197096206e2b223">
                        Contact Sales
                    </a>
</div>
</div>
</div>
</section>

<section className="bg-neutral-900/5 z-10 border-neutral-900 border-t border-b pt-24 pb-24 relative">
<div className="container mx-auto px-6 md:px-12 max-w-4xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-neutral-900/20 border border-neutral-800 rounded-lg overflow-hidden transition-all duration-300 open:border-lime-900/50">
<summary className="flex justify-between items-center p-6 cursor-pointer text-white font-normal select-none">
                        Who is this specifically for?
                        <svg className="w-4 h-4 text-neutral-500 group-open:rotate-180 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6 text-base text-neutral-400 font-light leading-relaxed">
                        We work exclusively with service-based businesses (Consultants, Agencies, Medical, Real Estate, Contractors) who are selling high-ticket offers and need a premium digital presence.
                    </div>
</details>
<details className="group bg-neutral-900/20 border border-neutral-800 rounded-lg overflow-hidden transition-all duration-300 open:border-lime-900/50">
<summary className="flex cursor-pointer select-none font-normal text-white pt-6 pr-6 pb-6 pl-6 items-center justify-between">
                        Do you write the copy?
                        <svg className="w-4 h-4 text-neutral-500 group-open:rotate-180 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6 text-base text-neutral-400 font-light leading-relaxed">
                        Yes. Design without copy is just decoration. We provide conversion-focused copywriting as part of our strategy phase.
                    </div>
</details>
<details className="group bg-neutral-900/20 border border-neutral-800 rounded-lg overflow-hidden transition-all duration-300 open:border-lime-900/50">
<summary className="flex cursor-pointer select-none font-normal text-white pt-6 pr-6 pb-6 pl-6 items-center justify-between">
                        What platforms do you build on?
                        <svg className="w-4 h-4 text-neutral-500 group-open:rotate-180 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6 text-base text-neutral-400 font-light leading-relaxed">
                        We build on platforms that prioritize scale and speed (e.g., WordPress, Webflow, GoHighLevel), depending on your specific funnel needs.
                    </div>
</details>
</div>
</div>
</section>

<footer className="relative z-10 pt-32 pb-12">
<div className="-z-10 bg-gradient-to-t from-neutral-900/50 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="container md:px-12 text-center mr-auto ml-auto pr-6 pl-6">
<div className="flex justify-center mb-10">
<img alt="SeriousMindz Logo" className="h-12 w-auto object-contain opacity-80 grayscale hover:grayscale-0 transition-all duration-500" src="https://storage.googleapis.com/msgsndr/iZ2UmL6gT1qBGckpnKmI/media/690ebc39b23abdcc6184a584.png"/>
</div>
<h2 className="md:text-6xl text-4xl font-medium text-white tracking-tight mb-6">Your Competitors Are Still <br/> Using "Brochure" Websites &amp; Regular Phone Systems</h2>
<p className="text-xl font-light text-neutral-400 mb-12">Overtake them today with a system built for revenue.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center mb-24">
<a className="relative inline-flex justify-center items-center gap-2 px-10 py-4 bg-lime-400 text-black rounded-full text-base font-medium tracking-wide overflow-hidden group transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(163,230,53,0.6)] hover:shadow-[0_0_40px_rgba(163,230,53,0.9)] border border-lime-300" href="https://www.seriousmgmt.com">
<div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent transform -skew-x-12 animate-shine-effect z-10"></div>
<span className="relative z-20 flex items-center gap-2">
                        Start Project
                        <svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</a>
<a className="relative inline-flex justify-center items-center gap-2 px-10 py-4 border border-neutral-700 text-white rounded-full text-base font-normal tracking-wide hover:bg-neutral-800 transition-colors overflow-hidden group" href="https://link.seriousmindz.ai/widget/booking/H2U0tyZe2aGUy1Q8fU4R">
<div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-shine-effect z-10"></div>
<span className="relative z-20">Book Strategy Call</span>
</a>
</div>
<div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 gap-4">
<div className="flex gap-6 uppercase tracking-wider"></div>
<div className="">© 2025 Seriousmindz Ai®. All Rights Reserved.</div>
</div>
</div>
</footer>




    </>
  );
}
