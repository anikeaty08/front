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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        lucide.createIcons();

        // Smoother scroll animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
            observer.observe(element);
        });

        // Navbar blur effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 20) {
                nav.classList.add('border-b', 'border-white/5', 'bg-zinc-950/80', 'backdrop-blur-md');
            }
        });

        // Pricing Cards Spotlight Effect
        const cards = document.querySelectorAll('.spotlight-card');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="4OF29NF3HVBYQsrwPvVq"></div>

</div></div>

<div className="fixed top-0 w-full h-screen -z-10 opacity-40 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-zinc-950 to-zinc-950"></div>
<div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-indigo-500/10 to-transparent blur-[100px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
<svg className="w-4 h-4" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 5.5L8 18.5" stroke="black" strokeLinecap="round" strokeWidth="2.25"></path>
</svg>
</div>
<span className="text-sm font-medium text-white tracking-tight" style={{}}>MyTradeLog</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#features" style={{}}>The Truth</a>
<a className="hover:text-white transition-colors" href="#mobile" style={{}}>Mobile</a>
<a className="hover:text-white transition-colors" href="#pricing" style={{}}>Pricing</a>
<a className="hover:text-white transition-colors" href="#faq" style={{}}>Excuses</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors hidden sm:block" href="#" style={{}}>Log in</a>
<a className="btn-glow bg-white hover:bg-zinc-100 text-zinc-950 text-xs font-medium px-4 py-2 rounded-lg transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:scale-105" href="#" style={{}}>
                    Start Tracking
                </a>
</div>
</div>
</nav>

<section className="overflow-hidden pt-32 pb-20 relative">
<div className="text-center max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<h1 className="reveal-on-scroll md:text-7xl leading-[1.1] is-visible text-5xl font-medium text-white tracking-tight font-jakarta mb-8">
      Stop Repeating <br/>
                The Same <span className="text-indigo-400 font-jakarta" style={{}}>Losing Mistakes</span>
</h1>
<p className="reveal-on-scroll delay-100 text-lg md:text-xl font-light text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed is-visible" style={{}}>
      MyTradeLog turns every trade into structured data so you can see exactly what's costing you money — and fix
      it.
    </p>
<div className="reveal-on-scroll delay-200 flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 is-visible">
<button className="btn-glow group sm:w-auto transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.5)] text-sm font-medium text-zinc-950 bg-white w-full border-transparent border rounded-lg pt-3.5 pr-8 pb-3.5 pl-8 relative shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
<span className="flex items-center justify-center gap-2" style={{}}>
                        Start Tracking Your Trades
                        <svg className="transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
</div>

<div className="reveal-on-scroll delay-300 relative max-w-6xl mx-auto rounded-xl border border-white/10 bg-zinc-900 shadow-2xl overflow-hidden ring-1 ring-white/10 group is-visible">

<div className="bg-zinc-950 border-b border-white/5 h-10 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="mx-auto bg-zinc-900 px-3 py-1 rounded text-xs text-zinc-500 font-mono" style={{}}>mytradelog.net</div>
</div>

<div className="flex h-[850px] md:h-[750px] bg-white text-zinc-950 font-inter selection:bg-indigo-100 selection:text-indigo-900 text-left">

<aside className="w-[72px] border-r border-zinc-100 flex flex-col items-center py-5 gap-6 bg-white shrink-0 hidden md:flex">

<div className="flex flex-col items-center gap-4">

<div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center text-white shadow-lg shadow-zinc-900/10">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24">
<path d="M16 6l-8 12"></path>
</svg>
</div>

<div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center text-white shadow-lg shadow-zinc-900/10 hover:scale-105 transition-transform cursor-pointer">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
</div>

<div className="flex flex-col items-center gap-6 mt-4">
<div className="p-2 rounded-lg bg-zinc-50 text-zinc-900"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg></div>
<div className="text-zinc-400 hover:text-zinc-600 cursor-pointer"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg></div>
<div className="text-zinc-400 hover:text-zinc-600 cursor-pointer"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
<div className="text-zinc-400 hover:text-zinc-600 cursor-pointer"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="20" y2="10"></line><line x1="18" x2="18" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="16"></line></svg></div>
<div className="text-zinc-400 hover:text-zinc-600 cursor-pointer"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></div>
</div>
<div className="flex flex-col items-center gap-6 mt-6 pt-6 border-t border-zinc-100 w-1/2">
<div className="text-zinc-400 hover:text-zinc-600 cursor-pointer"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg></div>
<div className="text-zinc-400 hover:text-zinc-600 cursor-pointer"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m16 6 4 14"></path><path d="M12 6v14"></path><path d="M8 8v12"></path><path d="M4 4v16"></path></svg></div>
<div className="text-zinc-400 hover:text-zinc-600 cursor-pointer"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg></div>
<div className="text-zinc-400 hover:text-zinc-600 cursor-pointer"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="8" x2="21" y1="6" y2="6"></line><line x1="8" x2="21" y1="12" y2="12"></line><line x1="8" x2="21" y1="18" y2="18"></line><line x1="3" x2="3.01" y1="6" y2="6"></line><line x1="3" x2="3.01" y1="12" y2="12"></line><line x1="3" x2="3.01" y1="18" y2="18"></line></svg></div>
<div className="text-zinc-400 hover:text-zinc-600 cursor-pointer"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg></div>
</div>

<div className="mt-auto flex flex-col items-center gap-6 pb-2">
<div className="text-zinc-400 hover:text-zinc-600 cursor-pointer"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.39a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg></div>
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-xs font-semibold text-zinc-900 border border-zinc-200">JO</div>
<div className="text-zinc-400 hover:text-zinc-600 cursor-pointer"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><line x1="9" x2="9" y1="3" y2="21"></line></svg></div>
</div>
</aside>

<main className="flex-1 overflow-y-auto bg-white p-8 md:p-10 no-scrollbar">

<header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
<div>
<h1 className="text-2xl font-semibold text-zinc-900 tracking-tight">Welcome back, John doe</h1>
<p className="text-sm text-zinc-500 mt-1">Here's your trading overview</p>
</div>
<div className="text-xs text-zinc-400 font-medium">17 Jan 2026 | 01:17:16</div>
</header>

<section className="mb-10">
<h2 className="text-sm font-semibold text-zinc-900 mb-4">Performance Overview</h2>
<div className="border border-zinc-200 rounded-2xl p-8 relative hover:shadow-lg transition-shadow duration-300">
<div className="flex items-center gap-2 text-zinc-500 text-sm mb-2">
                Total Balance
                <svg className="opacity-50 hover:opacity-100 cursor-pointer" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<div className="text-5xl font-bold text-zinc-900 tracking-tight font-jakarta mb-1">$100,294,009.98</div>
<div className="text-sm font-medium text-emerald-500 mb-8">+0.29% this month</div>

<div className="w-full h-40 relative">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none">

<path d="M0 150 C 100 150, 200 148, 400 150 S 600 145, 750 130 S 900 100, 1000 50" fill="none" stroke="#34d399" strokeLinecap="round" strokeWidth="3" vector-effect="non-scaling-stroke"></path>

<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#34d399" stop-opacity="0.1"></stop>
<stop offset="100%" stop-color="#34d399" stop-opacity="0"></stop>
</lineargradient>
</defs>
</svg>
</div>

<div className="flex justify-center mt-6">
<div className="flex items-center gap-1 bg-white">
<button className="px-3 py-1 text-xs font-medium text-zinc-400 hover:text-zinc-900">1D</button>
<button className="px-3 py-1 text-xs font-medium text-zinc-400 hover:text-zinc-900">1W</button>
<button className="px-3 py-1 text-xs font-medium text-white bg-zinc-900 rounded-full shadow-md">1M</button>
<button className="px-3 py-1 text-xs font-medium text-zinc-400 hover:text-zinc-900">3M</button>
<button className="px-3 py-1 text-xs font-medium text-zinc-400 hover:text-zinc-900">1Y</button>
</div>
</div>
</div>
</section>

<section>
<h2 className="text-sm font-semibold text-zinc-900 mb-6">Recent Trades</h2>

<div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
<div className="flex items-center gap-2">
<button className="px-4 py-1.5 text-xs font-medium text-white bg-zinc-900 rounded-full shadow-sm">All (10)</button>
<button className="px-4 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900">Open (0)</button>
<button className="px-4 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900">Closed (10)</button>
</div>
<div className="flex items-center gap-3 w-full md:w-auto">
<div className="relative group w-full md:w-64">
<svg className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-zinc-900" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
<input className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-zinc-200 rounded-full focus:outline-none focus:border-zinc-400 transition-colors placeholder:text-zinc-400 text-zinc-900" placeholder="Search..." type="text"/>
</div>
<button className="p-2 border border-zinc-200 rounded-full hover:bg-zinc-50 text-zinc-500">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>
</div>
</div>

<div className="space-y-4">

<div className="bg-white border border-zinc-100 rounded-xl p-4 flex items-center justify-between hover:shadow-md transition-shadow hover:border-zinc-200">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 relative overflow-hidden">

<div className="absolute inset-0 bg-blue-900 flex items-center justify-center">
<div className="w-full h-[1px] bg-red-500 rotate-45 absolute"></div>
<div className="w-full h-[1px] bg-red-500 -rotate-45 absolute"></div>
<div className="w-full h-[1px] bg-white"></div>
<div className="h-full w-[1px] bg-white"></div>
</div>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-bold text-sm text-zinc-900">NZDGBP</span>
<span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-red-50 text-red-600 tracking-wide uppercase">Short</span>
</div>
<div className="text-[11px] text-zinc-400 mt-0.5">06/01/2026</div>
</div>
</div>
<div className="flex items-center gap-6">
<div className="text-right">
<div className="text-sm font-bold text-red-500">-$31,000.00</div>
<div className="text-[10px] text-red-500 font-medium">-31.00%</div>
</div>
<button className="text-zinc-400 hover:text-zinc-900"><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
</div>
</div>

<div className="bg-white border border-zinc-100 rounded-xl p-4 flex items-center justify-between hover:shadow-md transition-shadow hover:border-zinc-200">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#0099e5] flex items-center justify-center shrink-0 text-white text-[10px] font-bold">100</div>
<div>
<div className="flex items-center gap-2">
<span className="font-bold text-sm text-zinc-900">NAS100</span>
<span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-600 tracking-wide uppercase">Long</span>
</div>
<div className="text-[11px] text-zinc-400 mt-0.5">06/01/2026</div>
</div>
</div>
<div className="flex items-center gap-6">
<div className="text-right">
<div className="text-sm font-bold text-emerald-500">+$290,000.00</div>
<div className="text-[10px] text-emerald-500 font-medium">+290.00%</div>
</div>
<button className="text-zinc-400 hover:text-zinc-900"><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
</div>
</div>

<div className="bg-white border border-zinc-100 rounded-xl p-4 flex items-center justify-between hover:shadow-md transition-shadow hover:border-zinc-200">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#00704a] flex items-center justify-center shrink-0 text-white">
<svg className="w-6 h-6" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v2h-2v-2zm2-4h-2V7h2v6z"></path></svg>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-bold text-sm text-zinc-900">SBUX</span>
<span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-red-50 text-red-600 tracking-wide uppercase">Short</span>
</div>
<div className="text-[11px] text-zinc-400 mt-0.5">05/01/2026</div>
</div>
</div>
<div className="flex items-center gap-6">
<div className="text-right">
<div className="text-sm font-bold text-emerald-500">+$1,000.00</div>
<div className="text-[10px] text-emerald-500 font-medium">+1.00%</div>
</div>
<button className="text-zinc-400 hover:text-zinc-900"><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
</div>
</div>

<div className="bg-white border border-zinc-100 rounded-xl p-4 flex items-center justify-between opacity-50">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center shrink-0 text-white font-bold text-xs">AU</div>
<div>
<div className="flex items-center gap-2">
<span className="font-bold text-sm text-zinc-900">XAUUSD</span>
<span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-600 tracking-wide uppercase">Long</span>
</div>
</div>
</div>
<div className="flex items-center gap-6">
<div className="text-right">
<div className="text-sm font-bold text-red-500">-$5,000.00</div>
</div>
<button className="text-zinc-400 hover:text-zinc-900"><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
</div>
</div>
</div>
</section>
</main>
</div>
</div>
</div>
</section>

<section className="bg-zinc-950 border-white/5 border-t pt-24 pb-24" id="features">
<div className="grid md:grid-cols-2 max-w-7xl mx-auto px-6 gap-16 items-center">
<div className="reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6 font-jakarta" style={{}}>
                    You're Not "Unlucky". <br/>
                    You're Uninformed.
                </h2>
<div className="space-y-6 text-lg text-zinc-400">
<p className="" style={{}}>
                        Most traders lose because they treat trading like gambling. They enter positions based on gut feelings, exit based on panic, and never review what happened.
                    </p>
<p style={{}}>
                        If you aren't tracking your stats, you are guessing. And guessing is not a strategy. It's a donation to the market.
                    </p>
<p className="text-white font-medium border-l-2 border-indigo-500 pl-4" style={{}}>
                        MyTradeLog forces you to confront the data. It highlights your bad habits, exposes your weaknesses, and gives you the objective truth you've been avoiding.
                    </p>
</div>
</div>
<div className="grid gap-6 gap-x-6 gap-y-6">

<div className="reveal-on-scroll delay-100 hover:bg-zinc-900 hover:border-indigo-500/30 transition-all duration-300 group bg-zinc-900/50 border-white/5 border rounded-xl p-6 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10">
<div className="w-10 h-10 bg-indigo-500/10 flex items-center justify-center rounded-lg mb-4 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
<svg className="lucide lucide-microscope w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="microscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" style={{width: '20px', height: '20px', color: 'rgb(129, 140, 248)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 18h8"></path><path d="M3 22h18"></path><path d="M14 22a7 7 0 1 0 0-14h-1"></path><path d="M9 14h2"></path><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2" style={{}}>Detailed Trade Analysis</h3>
<p className="text-sm text-zinc-400 leading-relaxed" style={{}}>Stop generalizing. Drill down into specific setups, times of day, and assets. Find out where you actually make money.</p>
</div>

<div className="reveal-on-scroll delay-200 bg-zinc-900/50 border border-white/5 p-6 rounded-xl hover:bg-zinc-900 hover:border-white/10 transition-all duration-300 group">
<div className="w-10 h-10 bg-indigo-500/10 flex items-center justify-center rounded-lg mb-4 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
<svg className="lucide lucide-shield-alert w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="shield-alert" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" style={{width: '20px', height: '20px', color: 'rgb(129, 140, 248)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2" style={{}}>Mistake Tagging</h3>
<p className="text-sm text-zinc-400 leading-relaxed" style={{}}>Tag trades as "FOMO", "Revenge", or "Early Exit". See exactly how much your lack of discipline is costing you in dollars.</p>
</div>

<div className="reveal-on-scroll delay-300 bg-zinc-900/50 border border-white/5 p-6 rounded-xl hover:bg-zinc-900 hover:border-white/10 transition-all duration-300 group">
<div className="w-10 h-10 bg-indigo-500/10 flex items-center justify-center rounded-lg mb-4 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
<svg className="lucide lucide-target w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" style={{width: '20px', height: '20px', color: 'rgb(129, 140, 248)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2" style={{}}>Playbook Building</h3>
<p className="text-sm text-zinc-400 leading-relaxed" style={{}}>Save your best trades. Build a library of what works. Replicate success instead of reinventing the wheel every morning.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 relative overflow-hidden" id="mobile">

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-gradient-to-l from-zinc-900/30 to-transparent pointer-events-none"></div>
<div className="grid lg:grid-cols-2 gap-16 z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative gap-x-16 gap-y-16 items-center">

<div className="reveal-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-[10px] font-medium text-indigo-400 mb-6 uppercase tracking-wider" style={{}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    Mobile Optimized
                </div>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6 leading-tight font-jakarta" style={{}}>
                    Trade Anywhere.<br/>
<span className="text-zinc-500 font-jakarta" style={{}}>Precision in your pocket.</span>
</h2>
<p className="text-lg text-zinc-400 mb-8 max-w-md" style={{}}>
                    MyTradeLog works seamlessly as a mobile web app. Add it to your home screen for a native-like experience without the App Store bloat. Access your stats, journal trades, and review performance on the go.
                </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-zinc-400 text-sm" style={{}}>
<div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
<svg className="lucide lucide-smartphone w-[12px] h-[12px]" data-icon-replaced="true" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" style={{width: '12px', height: '12px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
                        Fully responsive design for all devices
                    </li>
<li className="flex items-center gap-3 text-zinc-400 text-sm" style={{}}>
<div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
<svg className="lucide lucide-zap w-[12px] h-[12px]" data-icon-replaced="true" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" style={{width: '12px', height: '12px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
                        Instant sync between desktop and mobile
                    </li>
</ul>
</div>

<div className="aspect-[9/16] w-full">
<iframe allowfullscreen="" className="w-full h-full" frameborder="0" src="https://my.spline.design/animatedphonemockup-mWq3rChJgHeHomeGYoh5Oyt5/"></iframe>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 border-t border-white/5" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4 font-jakarta" style={{}}>Invest In Your Business</h2>
<p className="text-lg text-zinc-400" style={{}}>No fake urgency. No countdown timers. Just the cost of doing business.</p>
</div>
<section className="relative max-w-4xl mx-auto py-20 px-6">
<div className="grid md:grid-cols-2 gap-8">

<div className="group relative">
<div className="relative w-full overflow-visible [perspective:1200px]">

<div className="absolute -inset-2 rounded-3xl bg-indigo-500/15 blur-xl opacity-60 transition-all duration-700 group-hover:opacity-80 group-hover:blur-2xl">
</div>

<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/20 via-indigo-600/30 to-indigo-800/40 ring-1 ring-white/10 shadow-2xl [transform-style:preserve-3d] transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:[transform:rotateY(45deg)_translateX(-20px)_translateZ(-30px)_translateY(-15px)_scale(0.95)]">
</div>

<div className="relative z-10 rounded-2xl p-8 h-full bg-zinc-900/80 border border-indigo-400/30 shadow-[0_0_0_1px_rgba(99,102,241,0.25),0_12px_32px_rgba(99,102,241,0.25)] [transform-style:preserve-3d] origin-left transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:[transform:rotateY(-10deg)_translateY(-12px)_translateZ(10px)] transform-gpu">

<div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] font-semibold tracking-wide text-white bg-indigo-500 px-3 py-1 rounded-full shadow-lg" style={{}}>
            RECOMMENDED
          </div>
<h3 className="text-xl font-medium text-white mb-2" style={{}}>
            Serious Trader (Annual)
          </h3>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-4xl font-bold text-white font-jakarta" style={{}}>$19</span>
<span className="text-zinc-500" style={{}}>/mo</span>
</div>
<p className="text-sm text-zinc-400 mb-6 italic" style={{}}>
            "For traders who actually plan to still be trading next year."
          </p>
<p className="text-xs text-zinc-500 mb-8" style={{}}>
            Billed $228 annually.
          </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-300" style={{}}>
              ✔ Unlimited Trade Imports
            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300" style={{}}>
              ✔ Advanced Analytics
            </li>
</ul>
<a className="block w-full bg-white text-zinc-950 text-center py-3 rounded-lg text-sm font-medium transition-all hover:bg-zinc-200 hover:-translate-y-0.5" href="#" style={{}}>
            Commit for a Year
          </a>
</div>
</div>
</div>

<div className="group relative">
<div className="relative w-full overflow-visible [perspective:1200px]">

<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-zinc-500/10 via-zinc-600/20 to-zinc-800/30 ring-1 ring-white/10 shadow-2xl [transform-style:preserve-3d] transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:[transform:rotateY(45deg)_translateX(-20px)_translateZ(-30px)_translateY(-15px)_scale(0.95)]">
</div>

<div className="relative z-10 rounded-2xl p-8 h-full bg-zinc-900/70 border border-white/10 shadow-2xl [transform-style:preserve-3d] origin-left transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:[transform:rotateY(-10deg)_translateY(-12px)_translateZ(10px)] transform-gpu">
<h3 className="text-xl font-medium text-white mb-2" style={{}}>
            Flexible (Monthly)
          </h3>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-4xl font-bold text-white font-jakarta" style={{}}>$29</span>
<span className="text-zinc-500" style={{}}>/mo</span>
</div>
<p className="text-sm text-zinc-400 mb-6 italic" style={{}}>
            "For people who are afraid of commitment."
          </p>
<p className="text-xs text-zinc-500 mb-8" style={{}}>
            Billed monthly. Cancel anytime.
          </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-300" style={{}}>
              ✔ Unlimited Trade Imports
            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300" style={{}}>
              ✔ Advanced Analytics
            </li>
</ul>
<a className="block w-full border border-white/10 text-white text-center py-3 rounded-lg text-sm font-medium transition-all hover:bg-white/5 hover:-translate-y-0.5" href="#" style={{}}>
            Start Monthly
          </a>
</div>
</div>
</div>
</div>
</section>
</div>
</section>

<section className="border-white/5 border-t pt-24 pb-24" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="reveal-on-scroll text-3xl font-medium text-white tracking-tight text-center mb-12 font-jakarta" style={{}}>Common Excuses That
      Keep You Poor</h2>
<div className="space-y-4">
<div className="reveal-on-scroll delay-100 bg-zinc-900 border border-white/5 p-6 rounded-xl hover:border-white/10 transition-colors">
<div className="flex items-start gap-4">
<svg className="lucide lucide-circle-dollar-sign lucide-x-circle shrink-0 mt-1 w-[24px] h-[24px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="circle-dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" style={{width: '24px', height: '24px', color: 'rgb(129, 140, 248)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
<div className="">
<h3 className="text-lg font-medium text-white mb-2" style={{}}>"I already journal in Excel."</h3>
<p className="text-sm text-zinc-400 leading-relaxed" style={{}}>Excel is a spreadsheet, not a trading tool. It doesn't
              calculate your win rate by setup automatically. It doesn't visualize your equity curve. And let's be
              honest—you don't actually review those rows of data. You just type them in and forget them.</p>
</div>
</div>
</div>
<div className="reveal-on-scroll delay-200 bg-zinc-900 border border-white/5 p-6 rounded-xl hover:border-white/10 transition-colors">
<div className="flex items-start gap-4">
<svg className="lucide lucide-clock shrink-0 mt-1 w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" style={{width: '24px', height: '24px', color: 'rgb(129, 140, 248)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<div className="">
<h3 className="text-lg font-medium text-white mb-2" style={{}}>"I'll start tracking when I'm profitable."</h3>
<p className="text-sm text-zinc-400 leading-relaxed" style={{}}>That's backwards. You don't get fit to go to the gym; you
              go to the gym to get fit. You won't become profitable until you start tracking your mistakes and
              eliminating them. Waiting is just procrastination.</p>
</div>
</div>
</div>
<div className="reveal-on-scroll delay-300 bg-zinc-900 border border-white/5 p-6 rounded-xl hover:border-white/10 transition-colors">
<div className="flex items-start gap-4">
<svg className="lucide lucide-dollar-sign shrink-0 mt-1 w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" style={{width: '24px', height: '24px', color: 'rgb(129, 140, 248)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
<div className="">
<h3 className="text-lg font-medium text-white mb-2" style={{}}>"It costs money."</h3>
<p className="text-sm text-zinc-400 leading-relaxed" style={{}}>One bad trade caused by emotion costs more than a year of
              this software. The price is insignificant compared to the cost of your ignorance.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-indigo-900/5 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="reveal-on-scroll text-4xl md:text-5xl font-medium text-white tracking-tight mb-8 font-jakarta" style={{}}>
                Your Trading Account Doesn't Lie.  Neither Do We.
            </h2>
<p className="reveal-on-scroll delay-100 text-lg text-zinc-400 mb-10 max-w-2xl mx-auto" style={{}}>
                You can keep doing what you're doing and getting the same results. Or you can start treating this like a profession.
            </p>
<div className="reveal-on-scroll delay-200 flex flex-col sm:flex-row gap-4 justify-center">
<a className="btn-glow bg-white text-zinc-950 px-8 py-4 rounded-lg text-lg font-medium hover:bg-zinc-100 transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)] hover:scale-105" href="#" style={{}}>
                    Start Tracking Now
                </a>
</div>
<p className="reveal-on-scroll delay-300 mt-6 text-sm text-zinc-500" style={{}}>
                It takes less than 2 minutes to import your first trade.
            </p>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex gap-x-2 gap-y-2 items-center">
<svg className="opacity-80" fill="none" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect className="" fill="white" height="24" rx="6" width="24"></rect>
<path className="" d="M15 7L9 17" stroke="black" strokeLinecap="round" strokeWidth="2.5"></path>
</svg>
<span className="text-base font-medium text-zinc-400 tracking-tight" style={{}}>MyTradeLog</span>
</div>
<div className="flex gap-8 text-xs text-zinc-500 font-medium">
<a className="hover:text-white transition-colors" href="#" style={{}}>Privacy</a>
<a className="hover:text-white transition-colors" href="#" style={{}}>Terms</a>
<a className="hover:text-white transition-colors" href="#" style={{}}>Contact</a>
</div>
<div className="text-xs text-zinc-600" style={{}}>
                © 2024 MyTradeLog. Stop losing money.
            </div>
</div>
</footer>


    </>
  );
}
