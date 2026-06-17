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



            !function () {
                if (!window.UnicornStudio) {
                    window.UnicornStudio = { isInitialized: !1 };
                    var i = document.createElement("script");
                    i.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",
                    i.onload = function () {
                    window.UnicornStudio.isInitialized || (UnicornStudio.init(), window.UnicornStudio.isInitialized = !0)
                    },
                    (document.head || document.body).appendChild(i)
                }
                }();
        


        lucide.createIcons();

        // Reveal on scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.05
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        function initReveal() {
             const elements = document.querySelectorAll('.reveal');
             elements.forEach(el => observer.observe(el));
        }

        document.addEventListener("DOMContentLoaded", initReveal);

        // Navigation Logic
        function navigateTo(pageId) {
            const homePage = document.getElementById('page-home');
            const modelsPage = document.getElementById('page-models');
            const modelsNavLink = document.getElementById('nav-models');
            
            // Background Elements
            const marketingBg = document.getElementById('marketing-backgrounds');
            const utilityBg = document.getElementById('utility-background');

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });

            if (pageId === 'models') {
                homePage.classList.add('page-hidden');
                modelsPage.classList.remove('page-hidden');
                
                // Toggle Backgrounds
                marketingBg.classList.remove('bg-visible');
                marketingBg.classList.add('bg-hidden');
                
                utilityBg.classList.remove('bg-hidden');
                utilityBg.classList.add('bg-visible');

                // Update Nav State
                modelsNavLink.classList.remove('text-slate-400');
                modelsNavLink.classList.add('text-white');
                
                // Re-trigger reveal specifically for models page items
                // We do a small timeout to allow display change to render before observer checks
                setTimeout(initReveal, 50);
            } else {
                modelsPage.classList.add('page-hidden');
                homePage.classList.remove('page-hidden');

                // Toggle Backgrounds
                utilityBg.classList.remove('bg-visible');
                utilityBg.classList.add('bg-hidden');

                marketingBg.classList.remove('bg-hidden');
                marketingBg.classList.add('bg-visible');

                // Update Nav State
                modelsNavLink.classList.remove('text-white');
                modelsNavLink.classList.add('text-slate-400');
                
                setTimeout(initReveal, 50);
            }
        }
    
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
      

<div className="bg-visible fixed inset-0 z-0 pointer-events-none transition-opacity duration-700" id="marketing-backgrounds">

<div className="aura-background-component top-0 w-full h-screen absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component w-full top-0 saturate-150 absolute h-[800px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="bcBYZIStYXwiogchBNHO"></div>

</div></div>

<div className="fixed top-0 left-0 right-0 h-[800px] hero-glow pointer-events-none z-0"></div>
<div className="fixed top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/30 blur-[120px] rounded-full pointer-events-none z-0 animate-pulse"></div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none opacity-0 transition-opacity duration-700 bg-slate-950" id="utility-background">
<div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-950"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer" onclick="navigateTo('home')">

<div className="w-6 h-6 rounded-full border border-indigo-500 flex items-center justify-center shadow-[0_0_10px_rgba(99,102,241,0.5)]">
<div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
</div>
<span className="font-medium tracking-tight text-white">OpenRouter</span>
</div>

<div className="hidden xl:flex items-center gap-6 text-sm text-slate-400 font-light" id="nav-links">

<a className="hover:text-white transition-colors" href="#" id="nav-models" onclick="event.preventDefault(); navigateTo('models')">Models</a>
<a className="hover:text-white transition-colors" href="#">Status</a>
<a className="hover:text-white transition-colors" href="#">Announcements</a>
<a className="hover:text-white transition-colors" href="#">Docs</a>
<a className="hover:text-white transition-colors" href="#">Support</a>
<a className="hover:text-white transition-colors" href="#">About</a>
<a className="hover:text-white transition-colors" href="#">Partners</a>
<a className="hover:text-white transition-colors" href="#">Enterprise</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<button className="text-sm font-light text-slate-300 hover:text-white transition-colors">Sign in</button>
<button className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs px-4 py-2 rounded-full font-medium transition-all shadow-[0_0_15px_-3px_rgba(99,102,241,0.6)]">Sign up</button>
</div>
</div>
</nav>
<main className="z-10 pt-32 pb-20 relative min-h-screen">

<div id="page-home">

<section className="text-center max-w-5xl mr-auto mb-24 ml-auto pr-4 pl-4">
<div className="reveal" style={{transitionDelay: '200ms'}}>
<a className="inline-flex items-center gap-2 hover:bg-indigo-500/20 transition-colors text-xs text-indigo-300 bg-indigo-500/10 border-indigo-500/30 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3" href="#">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                        API Studio is now in beta
                        <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="reveal" style={{transitionDelay: '300ms'}}>
<h1 className="md:text-6xl leading-[1.1] text-4xl text-white tracking-tight font-extralight mb-6">
                        The Unified Interface <br/>
<span className="bg-clip-text font-light text-transparent bg-gradient-to-br from-[#d0d7fb] to-[#716afb]">For LLMs</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 font-light tracking-wide mb-10 max-w-2xl mx-auto">
                        Better prices, better uptime, no subscriptions.
                    </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 gap-x-4 gap-y-4 items-center justify-center reveal" style={{transitionDelay: '500ms'}}>
<div className="inline-block bg-transparent">
<style>
                        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap'); @property --gradient-angle { syntax: "<angle>"; initial-value: 0deg; inherits: false; } @property --gradient-angle-offset { syntax: "<angle>"; initial-value: 0deg; inherits: false; } @property --gradient-percent { syntax: "<percentage>"; initial-value: 20%; inherits: false; } @property --gradient-shine { syntax: "<color>"; initial-value: #8484ff; inherits: false; } .shiny-cta { --gradient-angle: 0deg; --gradient-angle-offset: 0deg; --gradient-percent: 20%; --gradient-shine: #8484ff; --shadow-size: 2px; position: relative; overflow: hidden; border-radius: 9999px; padding: 1.25rem 2.5rem; font-size: 1.125rem; line-height: 1.2; font-weight: 500; color: #ffffff; background: linear-gradient(#000000, #000000) padding-box, conic-gradient( from calc(var(--gradient-angle) - var(--gradient-angle-offset)), transparent 0%, #1d4ed8 5%, var(--gradient-shine) 15%, #1d4ed8 30%, transparent 40%, transparent 100% ) border-box; border: 2px solid transparent; box-shadow: inset 0 0 0 1px #1a1818; outline: none; transition: --gradient-angle-offset 800ms cubic-bezier(0.25, 1, 0.5, 1), --gradient-percent 800ms cubic-bezier(0.25, 1, 0.5, 1), --gradient-shine 800ms cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s; cursor: pointer; isolation: isolate; outline-offset: 4px; font-family: 'Inter', 'Helvetica Neue', sans-serif; z-index: 0; animation: border-spin 2.5s linear infinite; } @keyframes border-spin { to { --gradient-angle: 360deg; } } .shiny-cta:active { transform: translateY(1px); } .shiny-cta::before { content: ''; pointer-events: none; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 0; --size: calc(100% - 6px); --position: 2px; --space: 4px; width: var(--size); height: var(--size); background: radial-gradient(circle at var(--position) var(--position), white 0.5px, transparent 0) padding-box; background-size: var(--space) var(--space); background-repeat: space; mask-image: conic-gradient( from calc(var(--gradient-angle) + 45deg), black, transparent 10% 90%, black ); border-radius: inherit; opacity: 0.4; pointer-events: none; } .shiny-cta::after { content: ''; pointer-events: none; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 1; width: 100%; aspect-ratio: 1; background: linear-gradient(-50deg, transparent, #1d4ed8, transparent); mask-image: radial-gradient(circle at bottom, transparent 40%, black); opacity: 0.6; animation: shimmer 4s linear infinite; animation-play-state: running; } .shiny-cta span { position: relative; z-index: 2; display: inline-block; } .shiny-cta span::before { content: ''; pointer-events: none; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: -1; --size: calc(100% + 1rem); width: var(--size); height: var(--size); box-shadow: inset 0 -1ex 2rem 4px #1d4ed8; opacity: 0; border-radius: inherit; transition: opacity 800ms cubic-bezier(0.25, 1, 0.5, 1); animation: breathe 4.5s linear infinite; } @keyframes shimmer { to { transform: translate(-50%, -50%) rotate(360deg);} } @keyframes breathe { 0%, 100% { transform: translate(-50%, -50%) scale(1);} 50% { transform: translate(-50%, -50%) scale(1.20);} }
                      </style>
<button className="shiny-cta focus:outline-none">
<span className="">Get API Key</span>
</button>
</div>
<button className="glass-panel hover:bg-white/5 transition-all flex sm:w-auto text-lg font-medium bg-[#060a21]/0 w-full border-0 rounded-full pt-3.5 pr-6 pb-3.5 pl-6 gap-x-2 gap-y-2 items-center justify-center" onclick="navigateTo('models')">
                        Explore Models
                    </button>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 mb-32 reveal">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-y bg-slate-900/20 border-white/5 pt-12 pb-12 gap-x-8 gap-y-8">
<div className="text-center group reveal" style={{transitionDelay: '0ms'}}>
<h3 className="text-3xl font-light text-white mb-1 group-hover:text-indigo-400 transition-colors">25T</h3>
<p className="uppercase text-sm font-light text-slate-500">Monthly Tokens</p>
</div>
<div className="group text-center reveal" style={{transitionDelay: '100ms'}}>
<h3 className="text-3xl font-light text-white mb-1 group-hover:text-indigo-400 transition-colors">5M+</h3>
<p className="uppercase text-sm font-light text-slate-500">Global Users</p>
</div>
<div className="text-center group reveal" style={{transitionDelay: '200ms'}}>
<h3 className="text-3xl font-light text-white mb-1 group-hover:text-indigo-400 transition-colors">60+</h3>
<p className="uppercase text-sm font-light text-slate-500">Active Providers</p>
</div>
<div className="text-center group reveal" style={{transitionDelay: '300ms'}}>
<h3 className="text-3xl font-light text-white mb-1 group-hover:text-indigo-400 transition-colors">300+</h3>
<p className="uppercase text-sm font-light text-slate-500">Models</p>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#0c0d1c]/0 w-full mb-32 py-24 relative reveal">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,45,100,0.15)_0,rgba(15,23,42,0)_70%)] opacity-80 mix-blend-screen pointer-events-none"></div>
<div className="z-10 max-w-7xl mr-auto ml-auto pr-4 pl-4 relative">
<div className="text-center mb-20 reveal">
<h2 className="md:text-4xl text-3xl font-light text-white tracking-tight mb-4 drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]">How it works</h2>
<p className="text-slate-400 font-light text-base md:text-lg">Connect to multi-model APIs in 3 quick steps—no-code barriers to efficient development</p>
</div>
<div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="hidden md:block absolute top-[2.5rem] left-0 right-0 w-full h-1 z-0 px-[12%] pointer-events-none reveal">
<div className="flex items-center w-full h-full justify-between">
<div className="flex-1 h-px connector-dots text-cyan-500 mx-2"></div>
<div className="w-16"></div>
<div className="flex-1 h-px connector-dots text-purple-500 mx-2"></div>
<div className="w-16"></div>
<div className="flex-1 h-px connector-dots text-emerald-500 mx-2"></div>
</div>
</div>

<div className="relative z-10 group flex flex-col items-center text-center p-6 rounded-2xl bg-slate-900/60 border border-cyan-500/10 backdrop-blur-md shadow-[0_8px_30px_-12px_rgba(6,182,212,0.15)] hover:border-cyan-500/30 hover:shadow-[0_12px_40px_-12px_rgba(6,182,212,0.25)] hover:-translate-y-1 transition-all duration-500 reveal" style={{transitionDelay: '100ms'}}>
<div className="absolute top-3 right-3 w-2 h-2 text-cyan-500/40 opacity-50">
<svg fill="currentColor" viewbox="0 0 10 10"><path d="M5 0L10 10H0L5 0Z"></path></svg>
</div>
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 flex items-center justify-center mb-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-user-plus w-7 h-7 text-cyan-300 drop-shadow-[0_2px_8px_rgba(34,211,238,0.5)]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
</div>
<h3 className="text-lg font-bold text-white mb-2 tracking-tight">Create account</h3>
<p className="text-sm text-cyan-200/50 font-normal leading-relaxed">Sign up in seconds</p>
</div>

<div className="relative z-10 group flex flex-col items-center text-center p-6 rounded-2xl bg-slate-900/60 border border-violet-500/10 backdrop-blur-md shadow-[0_8px_30px_-12px_rgba(139,92,246,0.15)] hover:border-violet-500/30 hover:shadow-[0_12px_40px_-12px_rgba(139,92,246,0.25)] hover:-translate-y-1 transition-all duration-500 reveal" style={{transitionDelay: '200ms'}}>
<div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-violet-500/40 opacity-50"></div>
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/20 flex items-center justify-center mb-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-credit-card w-7 h-7 text-violet-300 drop-shadow-[0_2px_8px_rgba(167,139,250,0.5)]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<h3 className="text-lg font-bold text-white mb-2 tracking-tight">Buy credits</h3>
<p className="text-sm text-violet-200/50 font-normal leading-relaxed">Pay only for what you use</p>
</div>

<div className="relative z-10 group flex flex-col items-center text-center p-6 rounded-2xl bg-slate-900/60 border border-emerald-500/10 backdrop-blur-md shadow-[0_8px_30px_-12px_rgba(16,185,129,0.15)] hover:border-emerald-500/30 hover:shadow-[0_12px_40px_-12px_rgba(16,185,129,0.25)] hover:-translate-y-1 transition-all duration-500 reveal" style={{transitionDelay: '300ms'}}>
<div className="absolute top-3 right-3 w-1.5 h-1.5 bg-emerald-500/40 opacity-50 rotate-45"></div>
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 flex items-center justify-center mb-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-key-round w-7 h-7 text-emerald-300 drop-shadow-[0_2px_8px_rgba(52,211,153,0.5)]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<h3 className="text-lg font-bold text-white mb-2 tracking-tight">Get API Key</h3>
<p className="text-sm text-emerald-200/50 font-normal leading-relaxed">Instant access generated</p>
</div>

<div className="relative z-10 group flex flex-col items-center text-center p-6 rounded-2xl bg-slate-900/60 border border-orange-500/10 backdrop-blur-md shadow-[0_8px_30px_-12px_rgba(249,115,22,0.15)] hover:border-orange-500/30 hover:shadow-[0_12px_40px_-12px_rgba(249,115,22,0.25)] hover:-translate-y-1 transition-all duration-500 reveal" style={{transitionDelay: '400ms'}}>
<div className="absolute top-3 right-3 w-1.5 h-1.5 bg-orange-500/40 opacity-50 rotate-45 border border-orange-400"></div>
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 flex items-center justify-center mb-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-code-2 w-7 h-7 text-orange-300 drop-shadow-[0_2px_8px_rgba(251,146,60,0.5)]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<h3 className="text-lg font-bold text-white mb-2 tracking-tight">Unified Interface</h3>
<p className="text-sm text-orange-200/50 font-normal leading-relaxed">Call models via one API</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 mb-20 reveal">
<div className="flex items-end justify-between mb-8">
<div className="">
<h2 className="text-2xl font-semibold tracking-tight text-white flex items-center gap-2 cursor-pointer hover:text-indigo-400 transition-colors" onclick="navigateTo('models')">
                            Featured Models
                            <svg className="lucide lucide-chevron-right w-5 h-5 text-slate-500" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</h2>
<p className="text-sm text-slate-400 mt-2 font-light">300+ active models on 60+ providers</p>
</div>
<a className="hover:text-white transition-colors flex items-center gap-1 text-sm text-slate-400" href="#" onclick="event.preventDefault(); navigateTo('models')">
                        View all <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel glass-panel-hover rounded-xl p-6 transition-all cursor-pointer reveal" style={{transitionDelay: '100ms'}}>
<div className="flex items-center gap-4 mb-6">
<div className="flex text-lg font-bold text-slate-50 bg-slate-50 w-12 h-12 rounded-full items-center justify-center text-black" style={{}}>AI</div>
<div className="">
<h3 className="text-lg font-medium text-white">Claude Opus 4.5</h3>
<p className="text-xs text-slate-500">by anthropic</p>
</div>
</div>
<div className="h-px bg-white/5 w-full mb-6"></div>
<div className="flex items-end justify-between">
<div>
<p className="text-xs text-slate-500 mb-1">Tokens</p>
<p className="text-lg font-medium text-white">366.9B</p>
</div>
<div className="text-right">
<p className="text-xs text-slate-500 mb-1">Weekly Trend</p>
<p className="text-sm font-medium text-emerald-400">+92.74%</p>
</div>
</div>
</div>

<div className="glass-panel glass-panel-hover rounded-xl p-6 transition-all cursor-pointer reveal" style={{transitionDelay: '200ms'}}>
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold">
                                O
                            </div>
<div className="">
<h3 className="text-lg font-medium text-white">GPT-5.2</h3>
<p className="text-xs text-slate-500">by openai</p>
</div>
</div>
<div className="h-px bg-white/5 w-full mb-6"></div>
<div className="flex items-end justify-between">
<div className="">
<p className="text-xs text-slate-500 mb-1">Tokens</p>
<p className="text-lg font-medium text-white">95.9B</p>
</div>
<div className="text-right">
<p className="text-xs text-slate-500 mb-1">Weekly Trend</p>
<p className="text-sm font-medium text-emerald-400">+17.49%</p>
</div>
</div>
</div>

<div className="glass-panel glass-panel-hover rounded-xl p-6 transition-all cursor-pointer reveal" style={{transitionDelay: '300ms'}}>
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-2">
<svg fill="#000" viewbox="0 0 24 24"><path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-medium text-white">Gemini 3 Pro</h3>
<p className="text-xs text-slate-500">by google</p>
</div>
</div>
<div className="h-px bg-white/5 w-full mb-6"></div>
<div className="flex items-end justify-between">
<div className="">
<p className="text-xs text-slate-500 mb-1">Tokens</p>
<p className="text-lg font-medium text-white">132.5B</p>
</div>
<div className="text-right">
<p className="text-xs text-slate-500 mb-1">Weekly Trend</p>
<p className="text-sm font-medium text-emerald-400">+12.09%</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 mb-32 reveal">
<div className="flex items-end justify-between mb-8">
<div className="">
<h2 className="text-2xl font-semibold tracking-tight text-white flex items-center gap-2 cursor-pointer hover:text-indigo-400 transition-colors" onclick="navigateTo('models')">
                            Featured Agents
                            <svg className="lucide lucide-chevron-right w-5 h-5 text-slate-500" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</h2>
<p className="text-sm text-slate-400 mt-2 font-light">250k+ apps using OpenRouter with 4.2M+ users globally</p>
</div>
<a className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1" href="#" onclick="event.preventDefault(); navigateTo('models')">
                        View all <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel rounded-xl overflow-hidden group cursor-pointer border border-white/5 hover:border-white/10 transition-colors reveal" style={{transitionDelay: '100ms'}}>
<div className="h-48 bg-slate-900 relative flex items-center justify-center p-6 border-b border-white/5 group-hover:bg-slate-800/80 transition-colors">
<div className="w-full bg-slate-950 rounded-lg p-4 shadow-xl border border-white/5 text-sm font-mono text-slate-400">
<p className=""><span className="text-slate-500">Make me</span> <span className="text-indigo-300 border-b border-indigo-500/50">a website</span></p>
<p className="mt-2"><span className="text-slate-500">for</span> <span className="text-indigo-300 border-b border-indigo-500/50">local business customers</span></p>
<p className="mt-2 text-xs opacity-50 truncate">that helps subscribe to exclusive content...</p>
</div>
</div>
<div className="p-5 flex items-start gap-4 bg-slate-950/30">
<div className="w-10 h-10 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center shrink-0">
<div className="grid grid-cols-2 gap-0.5">
<div className="w-1.5 h-1.5 bg-orange-500"></div><div className="w-1.5 h-1.5 bg-orange-500"></div>
<div className="w-1.5 h-1.5 bg-orange-500"></div><div className="w-1.5 h-1.5 opacity-0"></div>
</div>
</div>
<div>
<h3 className="text-base font-medium text-white mb-1">Replit</h3>
<p className="text-xs text-slate-500 font-light leading-relaxed">The easiest way to go from idea to app</p>
</div>
</div>
</div>

<div className="glass-panel rounded-xl overflow-hidden group cursor-pointer border border-white/5 hover:border-white/10 transition-colors reveal" style={{transitionDelay: '200ms'}}>
<div className="h-48 bg-black relative flex flex-col items-center justify-center p-6 border-b border-white/5 group-hover:bg-slate-950 transition-colors">
<div className="text-xs text-slate-400 font-medium tracking-widest mb-4 flex items-center gap-2">
<div className="w-3 h-3 border border-white/40 rotate-45"></div> BLACKBOX AI
                            </div>
<div className="w-full bg-slate-900/50 rounded-lg p-3 border border-white/10 text-[10px] text-slate-500">
<p className="mb-4">Describe what you want the AI agent to do...</p>
<div className="flex gap-2">
<span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/5">Multi-Agent</span>
<span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/5">Browser</span>
</div>
</div>
</div>
<div className="p-5 flex items-start gap-4 bg-slate-950/30">
<div className="w-10 h-10 rounded-lg bg-black border border-white/10 flex items-center justify-center shrink-0">
<div className="w-4 h-4 border-2 border-white rounded-sm rotate-45"></div>
</div>
<div className="">
<h3 className="text-base font-medium text-white mb-1">BLACKBOXAI</h3>
<p className="text-xs text-slate-500 font-light leading-relaxed">AI agent for builders</p>
</div>
</div>
</div>

<div className="glass-panel rounded-xl overflow-hidden group cursor-pointer border border-white/5 hover:border-white/10 transition-colors reveal" style={{transitionDelay: '300ms'}}>
<div className="h-48 bg-[#111] relative flex items-center justify-center p-6 border-b border-white/5 group-hover:bg-black transition-colors">
<div className="border border-yellow-400/30 bg-yellow-400/5 px-4 py-2 rounded flex items-center gap-2">
<svg className="lucide lucide-layout-grid w-4 h-4 text-yellow-400" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
<span className="text-yellow-400 font-mono text-sm">Kilo Code</span>
</div>
</div>
<div className="p-5 flex items-start gap-4 bg-slate-950/30">
<div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0">
<svg className="lucide lucide-layout-grid w-5 h-5 text-black" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
</div>
<div>
<h3 className="text-base font-medium text-white mb-1">Kilo Code</h3>
<p className="text-xs text-slate-500 font-light leading-relaxed">Everything you need for agentic development</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-4 mb-24 reveal">
<div className="glass-panel rounded-2xl p-8 text-center relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none"></div>
<h3 className="text-xl font-light text-white mb-2 relative z-10">Stay updated with OpenRouter</h3>
<p className="text-slate-400 text-sm mb-6 font-light relative z-10">Get the latest model releases and API updates.</p>
<form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto relative z-10">
<input className="flex-1 placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm text-white bg-slate-950/50 border-white/10 border rounded-lg pt-2 pr-4 pb-2 pl-4" placeholder="Enter your email" type="email"/>
<button className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm px-6 py-2 rounded-lg font-medium transition-colors shadow-lg shadow-indigo-900/20">Subscribe</button>
</form>
</div>
</section>
</div>

<div className="page-hidden fade-in-page" id="page-models">
<div className="max-w-7xl mx-auto px-4 md:px-6">

<div className="mb-10 reveal">
<h1 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-4">Models</h1>
<p className="text-slate-400 font-light text-lg max-w-2xl">Browse, compare, and test over 300 models from the world's best AI labs.</p>
</div>

<div className="flex flex-col md:flex-row gap-4 mb-8 reveal">
<div className="relative flex-1">
<svg className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
<input className="w-full bg-slate-900/50 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 focus:bg-slate-900 transition-all placeholder:text-slate-600" placeholder="Search models..." type="text"/>
</div>
<div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
<button className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-xs font-medium border border-indigo-500 whitespace-nowrap">All Models</button>
<button className="px-4 py-2 rounded-lg bg-slate-900/50 text-slate-400 hover:text-white text-xs font-medium border border-white/10 hover:border-white/20 whitespace-nowrap transition-colors">Popular</button>
<button className="px-4 py-2 rounded-lg bg-slate-900/50 text-slate-400 hover:text-white text-xs font-medium border border-white/10 hover:border-white/20 whitespace-nowrap transition-colors">New</button>
<button className="px-4 py-2 rounded-lg bg-slate-900/50 text-slate-400 hover:text-white text-xs font-medium border border-white/10 hover:border-white/20 whitespace-nowrap transition-colors">Free</button>
<button className="px-4 py-2 rounded-lg bg-slate-900/50 text-slate-400 hover:text-white text-xs font-medium border border-white/10 hover:border-white/20 whitespace-nowrap transition-colors">Vision</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">

<div className="glass-panel glass-panel-hover rounded-xl p-5 cursor-pointer group reveal" style={{transitionDelay: '50ms'}}>
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-slate-50 text-black flex items-center justify-center font-bold text-sm">AI</div>
<div>
<h3 className="font-medium text-white group-hover:text-indigo-400 transition-colors">Claude 3.5 Sonnet</h3>
<p className="text-xs text-slate-500">Anthropic</p>
</div>
</div>
<span className="px-2 py-1 rounded bg-indigo-500/10 text-indigo-300 text-[10px] font-medium border border-indigo-500/20">Popular</span>
</div>
<p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">Anthropic's most intelligent model, delivering top-tier performance on highly complex tasks.</p>
<div className="flex items-center justify-between border-t border-white/5 pt-4">
<div className="text-[10px] text-slate-500 font-mono">$3.00 / 1M</div>
<div className="text-[10px] text-slate-500">200k context</div>
</div>
</div>

<div className="glass-panel glass-panel-hover rounded-xl p-5 cursor-pointer group reveal" style={{transitionDelay: '100ms'}}>
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-white text-black flex items-center justify-center font-bold text-sm">O</div>
<div>
<h3 className="font-medium text-white group-hover:text-indigo-400 transition-colors">GPT-4o</h3>
<p className="text-xs text-slate-500">OpenAI</p>
</div>
</div>
</div>
<p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">High-intelligence flagship model for complex, multi-step tasks. Multimodal capabilities.</p>
<div className="flex items-center justify-between border-t border-white/5 pt-4">
<div className="text-[10px] text-slate-500 font-mono">$5.00 / 1M</div>
<div className="text-[10px] text-slate-500">128k context</div>
</div>
</div>

<div className="glass-panel glass-panel-hover rounded-xl p-5 cursor-pointer group reveal" style={{transitionDelay: '150ms'}}>
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-white text-black flex items-center justify-center font-bold text-sm p-2"><svg fill="#000" viewbox="0 0 24 24"><path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"></path></svg></div>
<div>
<h3 className="font-medium text-white group-hover:text-indigo-400 transition-colors">Gemini 1.5 Pro</h3>
<p className="text-xs text-slate-500">Google</p>
</div>
</div>
</div>
<p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">Mid-size multimodal model that scales across a wide range of tasks.</p>
<div className="flex items-center justify-between border-t border-white/5 pt-4">
<div className="text-[10px] text-slate-500 font-mono">$3.50 / 1M</div>
<div className="text-[10px] text-slate-500">2M context</div>
</div>
</div>

<div className="glass-panel glass-panel-hover rounded-xl p-5 cursor-pointer group reveal" style={{transitionDelay: '200ms'}}>
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-orange-500 text-white flex items-center justify-center font-bold text-sm">M</div>
<div>
<h3 className="font-medium text-white group-hover:text-indigo-400 transition-colors">Mistral Large</h3>
<p className="text-xs text-slate-500">Mistral AI</p>
</div>
</div>
</div>
<p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">Top-tier reasoning capabilities. Fluent in English, French, Spanish, German, and Italian.</p>
<div className="flex items-center justify-between border-t border-white/5 pt-4">
<div className="text-[10px] text-slate-500 font-mono">$4.00 / 1M</div>
<div className="text-[10px] text-slate-500">32k context</div>
</div>
</div>

<div className="glass-panel glass-panel-hover rounded-xl p-5 cursor-pointer group reveal" style={{transitionDelay: '250ms'}}>
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm">L</div>
<div>
<h3 className="font-medium text-white group-hover:text-indigo-400 transition-colors">Llama 3 70B</h3>
<p className="text-xs text-slate-500">Meta</p>
</div>
</div>
<span className="px-2 py-1 rounded bg-green-500/10 text-green-300 text-[10px] font-medium border border-green-500/20">Open</span>
</div>
<p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">The most capable open-weights model available today, rivaling top proprietary models.</p>
<div className="flex items-center justify-between border-t border-white/5 pt-4">
<div className="text-[10px] text-slate-500 font-mono">$0.70 / 1M</div>
<div className="text-[10px] text-slate-500">8k context</div>
</div>
</div>

<div className="glass-panel glass-panel-hover rounded-xl p-5 cursor-pointer group reveal" style={{transitionDelay: '300ms'}}>
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">P</div>
<div>
<h3 className="font-medium text-white group-hover:text-indigo-400 transition-colors">Perplexity Online</h3>
<p className="text-xs text-slate-500">Perplexity</p>
</div>
</div>
</div>
<p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">Online model with up-to-date knowledge from the internet.</p>
<div className="flex items-center justify-between border-t border-white/5 pt-4">
<div className="text-[10px] text-slate-500 font-mono">$5.00 / 1M</div>
<div className="text-[10px] text-slate-500">N/A context</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-white/5 bg-slate-950 pt-16 pb-12 relative z-10 reveal">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4 cursor-pointer" onclick="navigateTo('home')">
<div className="w-5 h-5 rounded-full border border-indigo-500 flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
</div>
<span className="font-medium tracking-tight text-white">OpenRouter</span>
</div>
<div className="flex gap-4 mt-6">
<a className="text-slate-500 hover:text-indigo-400 transition-colors" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-slate-500 hover:text-indigo-400 transition-colors" href="#"><svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
<a className="text-slate-500 hover:text-indigo-400 transition-colors" href="#"><svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="text-slate-500 hover:text-indigo-400 transition-colors" href="#"><svg className="lucide lucide-message-square w-5 h-5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg></a>
</div>
</div>
<div className="">
<h4 className="text-sm font-semibold text-white mb-4">Product</h4>
<ul className="space-y-3 text-sm font-light text-slate-400">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Pricing</a></li>
<li className=""><a className="hover:text-indigo-400 transition-colors" href="#">Enterprise</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Status</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Partners</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
<ul className="space-y-3 text-sm font-light text-slate-400">
<li className=""><a className="hover:text-indigo-400 transition-colors" href="#">Docs</a></li>
<li className=""><a className="hover:text-indigo-400 transition-colors" href="#">Announcements</a></li>
<li className=""><a className="hover:text-indigo-400 transition-colors" href="#">Support</a></li>
<li className=""><a className="hover:text-indigo-400 transition-colors" href="#">About</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
<ul className="space-y-3 text-sm font-light text-slate-400">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Careers</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 font-light">
<p>© 2025 OpenRouter.ai. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<span className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                        All systems operational
                    </span>
</div>
</div>
</div>
</footer>


    </>
  );
}
