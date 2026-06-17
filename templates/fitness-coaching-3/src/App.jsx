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



      (function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.async=!0,i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head||document.body).appendChild(i)}})();
    


      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('animate');
                  observer.unobserve(entry.target);
              }
          });
      }, { threshold: 0.1 });
      document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
      lucide.createIcons({
          attrs: {
              'stroke-width': 1.5
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
      

<div className="fixed top-0 left-0 right-0 bottom-0 unicorn-stack unicorn-mask pointer-events-none z-[-10]">
<div className="absolute inset-0 w-full h-full" data-us-project="VaqT3bxlc2sugR8faApF"></div>
</div>


<header className="sticky top-4 z-50 animate-enter px-4 sm:px-6 lg:px-8">
<div className="mx-auto max-w-7xl">
<div className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/30">
<div className="flex items-center justify-between rounded-2xl border border-[#ffffff]/10 bg-[#000000]/40 p-3">
<div className="flex items-center gap-3 pl-2">
<div className="flex items-center gap-2 font-semibold text-xl tracking-tight">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
<span className="font-bold">H</span>
</div>
<span>HubFit</span>
</div>
</div>
<nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
<a className="transition-colors hover:text-white" href="#features">
                Platform
              </a>
<a className="transition-colors hover:text-white" href="#pricing">
                Presale
              </a>
<a className="transition-colors hover:text-white" href="#">
                Client App
              </a>
<a className="transition-colors hover:text-white" href="#">
                Coach App
              </a>
</nav>
<div className="flex items-center justify-center gap-3">
<a className="hidden text-sm font-medium text-slate-300 transition-colors hover:text-white sm:block" href="#">
                Sign in
              </a>
<a className="group relative inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 shadow-[0_0_15px_rgba(255,255,255,0.1)] ring-0 transition-all duration-300 hover:scale-105 hover:bg-slate-100" href="#pricing">
                Pre-order now
              </a>
</div>
</div>
</div>
</div>
</header>

<section className="animate-enter-delay-2 relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-0 max-w-7xl mr-auto ml-auto pt-16 pb-20">

<div className="pointer-events-none relative select-none z-10">
<span className="float-cursor float-chip-1 absolute left-[65%] -top-12 -translate-x-1/2 -translate-y-8 sm:-top-16">
<span className="block whitespace-nowrap rounded-full bg-cyan-400/10 border border-cyan-400/20 px-4 py-1.5 text-xs font-semibold text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
                #1 Coaching Platform
              </span>
</span>
</div>

<div className="text-center relative z-10">
<h1 className="sm:text-6xl md:text-7xl text-5xl font-semibold text-white tracking-tight max-w-5xl mr-auto ml-auto">
              The Future Of
              <span className="relative inline-block mt-2">
<span className="absolute -inset-1 rounded-lg bg-blue-500/20 blur-2xl"></span>
<span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 relative" style={{}}>
                  Coaching Is Here
                </span>
</span>
</h1>
<p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">
              HubFit makes it easy to build, scale, and automate your fitness
              business all without being slow or clunky ⚡️
            </p>

<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

<div className="btn-wrapper" style={{'--dot-size': '8px', '--line-weight': '1px', '--line-distance': '0.8rem 1rem', '--animation-speed': '2s', '--dot-color': '#fffa', '--line-color': '#fffa', '--grid-color': '#fff3'}}>
<a className="btn bg-white text-black hover:bg-slate-200 border-none" href="#pricing">
<span className="btn-text font-semibold">
                    Get Lifetime Access
                  </span>
</a>
</div>
</div>
</div>

<div className="md:mt-20 md:mb-24 sm:h-[380px] md:h-auto overflow-hidden md:overflow-visible flex md:block md:px-0 w-full h-[280px] mt-16 mb-16 pr-4 pl-4 relative justify-center">
<div className="relative mx-auto max-w-6xl overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-black/40 backdrop-blur-xl w-[850px] md:w-full origin-top transform scale-[0.4] sm:scale-50 md:scale-100 md:transform-none">

<div className="absolute inset-0 pointer-events-none z-0">
<div className="absolute -right-20 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[100px]"></div>
<div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.03)_40%,rgba(255,255,255,0.05)_50%,rgba(255,255,255,0.03)_60%,transparent_70%)]"></div>
</div>

<div className="z-20 flex bg-white/5 h-10 border-white/5 border-b pr-4 pl-4 relative items-center">
<div className="flex gap-2">
<div className="h-3 w-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="h-3 w-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="h-3 w-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
</div>

<div className="relative z-10 grid grid-cols-12 min-h-[600px] text-slate-400">

<div className="col-span-3 flex flex-col border-r border-white/10 bg-transparent p-4">
<div className="mb-6 flex items-center justify-between">
<div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white">
<svg aria-hidden="true" className="lucide lucide-briefcase h-3.5 w-3.5" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
<rect height="14" rx="2" width="20" x="2" y="6"></rect>
</svg>
                      Operations
                    </div>
<button className="rounded p-1 hover:bg-white/10 text-slate-500 transition">
<svg aria-hidden="true" className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</button>
</div>
<div className="mb-6 flex gap-1 rounded-lg bg-white/5 p-1">
<button className="flex-1 rounded-md bg-white px-2 py-1 text-[10px] font-semibold text-black shadow-sm">
                      Business
                    </button>
<button className="flex-1 rounded-md px-2 py-1 text-[10px] font-medium text-slate-400 hover:text-white">
                      Finance
                    </button>
<button className="flex-1 rounded-md px-2 py-1 text-[10px] font-medium text-slate-400 hover:text-white">
                      HR
                    </button>
</div>
<div className="flex-1 space-y-1">
<div className="text-[10px] font-medium uppercase tracking-wider text-slate-600 mb-2 pl-2">
                      Active Workflows
                    </div>
<div className="group flex items-center justify-between rounded-lg bg-white/5 px-3 py-2.5 text-xs text-white">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-pie-chart h-3.5 w-3.5 text-slate-400" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path>
<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
</svg>
<span className="">Q3 Revenue Forecast</span>
</div>
<span className="text-[10px] text-green-400">Live</span>
</div>
</div>
<div className="mt-auto rounded-xl border border-white/5 bg-black/20 p-4">
<div className="mb-3 flex items-center gap-2 text-xs font-medium text-white">
<svg aria-hidden="true" className="lucide lucide-trending-up h-3.5 w-3.5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7h6v6"></path>
<path d="m22 7-8.5 8.5-5-5L2 17"></path>
</svg>
                      Business Health
                    </div>
<div className="space-y-3">
<div className="flex items-center justify-between text-[10px]">
<div className="flex items-center gap-2 text-slate-400">
<div className="h-2 w-3 rounded-sm bg-white"></div>
                          Margin
                        </div>
<span className="text-white">24.5%</span>
</div>
<div className="flex items-center justify-between text-[10px]">
<div className="flex items-center gap-2 text-slate-400">
<div className="h-2 w-3 rounded-sm bg-slate-600"></div>
                          Growth
                        </div>
<span className="text-green-400">+12%</span>
</div>
</div>
</div>
</div>

<div className="col-span-6 flex flex-col border-r border-white/10 bg-transparent">

<div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
<div className="flex items-center gap-2 text-xs">
<span className="font-medium text-white">
                        quarterly_revenue.model
                      </span>
<span className="text-slate-600">•</span>
<span className="text-slate-500">Finance Team</span>
</div>
</div>
<div className="flex-1 pt-6 pr-6 pb-6 pl-6">

<div className="flex-1 rounded-xl border border-white/10 bg-black/50 p-4 relative overflow-hidden group mb-6">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-white">
                          Business Logic
                        </span>
<span className="text-[10px] text-slate-600 font-mono">
                          Python
                        </span>
</div>
<div className="font-mono text-xs leading-relaxed text-slate-300 h-32 overflow-hidden">
<span className="text-purple-400">import</span>
                        seaint.business
                        <span className="text-purple-400">as</span>
                        biz <br/>
<span className="text-purple-400">def</span>
<span className="text-blue-400">forecast_q3</span>
                        (current_mrr, growth_rate):
                        <br/>  projection =
                        biz.models.linear(current_mrr, growth_rate)
                      </div>
</div>
</div>
</div>

<div className="col-span-3 flex flex-col bg-transparent p-4 relative overflow-hidden">
<div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-blue-500/10 blur-[60px] pointer-events-none"></div>
<div className="relative z-10">
<div className="mb-6 flex items-center gap-2">
<div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white">
<svg aria-hidden="true" className="lucide lucide-sliders h-3.5 w-3.5" data-lucide="sliders" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 8h4"></path>
<path d="M12 21v-9"></path>
<path d="M12 8V3"></path>
<path d="M17 16h4"></path>
<path d="M19 12V3"></path>
<path d="M19 21v-5"></path>
<path d="M3 14h4"></path>
<path d="M5 10V3"></path>
<path d="M5 21v-7"></path>
</svg>
                        Parameters
                      </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="animate-entry delay-200 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate lg:mx-auto bg-gradient-to-br max-w-7xl rounded-3xl mt-24 mr-auto mb-24 ml-auto pt-10 pr-10 pb-10 pl-10 relative from-white/10 via-white/0 to-white/10" id="features" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', '--border-radius-before': '24px'}}>

<div className="flex flex-col rounded-none mt-0 mb-0 pt-0 pr-0 pb-0 pl-0 relative">

<div className="flex flex-col gap-10 w-full gap-x-10 gap-y-10">

<div className="flex items-center gap-6">
<span className="text-xs font-mono tracking-widest font-sans text-blue-400" style={{}}>
              01
            </span>
<div className="h-px flex-1 bg-white/10"></div>
<span className="uppercase text-xs tracking-widest text-gray-500 font-sans" style={{}}>
              Core Platform
            </span>
</div>

<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 gap-x-10 gap-y-10">
<div className="max-w-3xl flex flex-col gap-6">
<h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] font-oswald font-light text-white" style={{}}>
                Focus on Coaching.
                <span className="block text-gray-500 font-oswald font-light" style={{}}>
                  Results you can see.
                </span>
</h2>
<p className="text-lg font-light max-w-xl leading-relaxed font-sans text-gray-400" style={{}}>
                A complete operating system for your fitness business. Manage clients, chats, tasks, and AI in one place.
              </p>
</div>

<button className="group flex items-center gap-2 px-6 py-3 border text-sm font-medium rounded-full transition font-sans whitespace-nowrap border-white/15 text-white hover:bg-white/5">
<span className="font-sans" style={{}}>View Platform</span>
<svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 w-full mt-8 gap-x-6 gap-y-6">

<div className="group flex flex-col overflow-hidden hover:border-blue-500/30 transition-all duration-500 md:col-span-1 bg-[#000000] border rounded-[2rem] pt-8 pr-8 pb-8 pl-8 relative justify-between border-white/10">
<style>
              @keyframes orbit-slow {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              @keyframes breathe-glow {
                0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(59, 130, 246, 0.1); }
                50% { transform: scale(1.05); box-shadow: 0 0 35px rgba(59, 130, 246, 0.3); }
              }
              @keyframes ripple-expand {
                0% { transform: scale(0.8); opacity: 0.6; border-width: 1px; }
                100% { transform: scale(2.5); opacity: 0; border-width: 0px; }
              }
              @keyframes dot-handoff {
                0%, 100% { opacity: 0.3; r: 2px; fill: #60A5FA; }
                50% { opacity: 1; r: 3.5px; fill: #3B82F6; }
              }
            </style>

<div className="relative h-48 w-full flex items-center justify-center mb-6 overflow-visible">

<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-50 rounded-full blur-3xl transform scale-75"></div>

<div className="absolute w-16 h-16 rounded-full border z-0 border-blue-400/30" style={{animation: 'ripple-expand 4s cubic-bezier(0, 0, 0.2, 1) infinite'}}></div>
<svg className="w-full h-full text-blue-500/20 z-10" fill="none" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">

<g className="" style={{transformOrigin: '100px 100px', animation: 'orbit-slow 12s linear infinite'}}>

<circle className="opacity-30" cx="100" cy="100" r="80" stroke="currentColor" stroke-dasharray="6 6" strokeWidth="1"></circle>

<circle className="drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" cx="100" cy="20" fill="#60A5FA" r="3"></circle>
<circle className="opacity-60" cx="180" cy="100" fill="#3B82F6" r="2.5"></circle>
<circle className="opacity-60" cx="20" cy="100" fill="#3B82F6" r="2.5"></circle>
</g>

<circle className="opacity-40" cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1"></circle>

<circle className="" cx="100" cy="50" fill="#3B82F6" r="2" style={{animation: 'dot-handoff 3s ease-in-out infinite', animationDelay: '0s'}}></circle>
<circle className="" cx="150" cy="100" fill="#3B82F6" r="2" style={{animation: 'dot-handoff 3s ease-in-out infinite', animationDelay: '1s'}}></circle>
<circle className="" cx="100" cy="150" fill="#3B82F6" r="2" style={{animation: 'dot-handoff 3s ease-in-out infinite', animationDelay: '2s'}}></circle>
<circle className="" cx="50" cy="100" fill="#3B82F6" r="2" style={{animation: 'dot-handoff 3s ease-in-out infinite', animationDelay: '3s'}}></circle>
</svg>

<div className="absolute flex items-center justify-center w-16 h-16 bg-[#15151A] rounded-full border z-20 border-white/10" style={{animation: 'breathe-glow 4s ease-in-out infinite'}}>
<div className="absolute inset-0 bg-blue-500/10 rounded-full blur-sm"></div>
<svg className="relative z-10 text-gray-100" fill="currentColor" height="28" stroke="none" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle className="" cx="12" cy="7" r="4"></circle>
</svg>
</div>
</div>

<div className="relative z-10">
<h3 className="text-4xl text-left font-oswald font-light text-white" style={{}}>
                Members
              </h3>
<p className="leading-relaxed text-lg font-light text-left mt-2 font-sans text-gray-400" style={{}}>
                Manage your clients efficiently with comprehensive profiles and group tracking tools.
              </p>
</div>
</div>

<div className="md:col-span-2 group flex flex-col overflow-hidden hover:border-blue-500/30 transition-all duration-500 bg-[#000000] border rounded-[2rem] px-8 py-8 relative justify-between border-white/10">
<style>
              @keyframes flowData {
                0% { stroke-dashoffset: 120; opacity: 0; }
                15% { opacity: 1; }
                85% { opacity: 1; }
                100% { stroke-dashoffset: 0; opacity: 0; }
              }
              @keyframes breatheDiamond {
                0%, 100% { transform: rotate(45deg) scale(1); box-shadow: 0 0 30px rgba(59,130,246,0.3); border-color: rgba(59,130,246,0.3); }
                50% { transform: rotate(45deg) scale(1.05); box-shadow: 0 0 50px rgba(59,130,246,0.5); border-color: rgba(59,130,246,0.6); }
              }
              @keyframes orbitSpin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            </style>

<div className="absolute top-0 right-0 w-[300px] h-[300px] blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-500/30 transition-colors duration-700 bg-indigo-600/20"></div>

<div className="relative h-48 w-full flex items-center justify-center mb-6 overflow-visible">

<svg className="absolute top-0 right-0 bottom-0 left-0 w-full h-full" fill="none" preserveaspectratio="xMidYMid meet" viewbox="0 0 400 200">
<defs className="">
<lineargradient className="" id="flowGradientLeft" x1="0%" x2="100%" y1="0%" y2="0%">
<stop className="" offset="0%" stop-color="#3B82F6" stop-opacity="0"></stop>
<stop className="" offset="50%" stop-color="#60A5FA" stop-opacity="1"></stop>
<stop className="" offset="100%" stop-color="#3B82F6" stop-opacity="0"></stop>
</lineargradient>
<lineargradient className="" id="flowGradientRight" x1="100%" x2="0%" y1="0%" y2="0%">
<stop className="" offset="0%" stop-color="#3B82F6" stop-opacity="0"></stop>
<stop className="" offset="50%" stop-color="#60A5FA" stop-opacity="1"></stop>
<stop className="" offset="100%" stop-color="#3B82F6" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path className="text-white/10" d="M50 100 L120 100 L150 70" stroke="currentColor" strokeWidth="1"></path>
<path className="text-white/10" d="M350 100 L280 100 L250 130" stroke="currentColor" strokeWidth="1"></path>

<path className="" d="M50 100 L120 100 L150 70" stroke="url(#flowGradientLeft)" stroke-dasharray="120" stroke-dashoffset="120" strokeLinecap="round" strokeWidth="2" style={{animation: 'flowData 3s cubic-bezier(0.4, 0, 0.2, 1) infinite'}}></path>
<path className="" d="M350 100 L280 100 L250 130" stroke="url(#flowGradientRight)" stroke-dasharray="120" stroke-dashoffset="120" strokeLinecap="round" strokeWidth="2" style={{animation: 'flowData 3s cubic-bezier(0.4, 0, 0.2, 1) infinite', animationDelay: '1.5s'}}></path>

<g className="" transform="translate(50 100) rotate(45)">
<rect className="group-hover:stroke-blue-500/50 transition-colors duration-300" fill="#1A1A20" height="20" stroke="white" stroke-opacity="0.2" width="20" x="-10" y="-10"></rect>
<circle className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" cx="0" cy="0" fill="#60A5FA" r="2"></circle>
</g>
<g className="" transform="translate(350 100) rotate(45)">
<rect className="group-hover:stroke-blue-500/50 transition-colors duration-300" fill="#1A1A20" height="20" stroke="white" stroke-opacity="0.2" width="20" x="-10" y="-10"></rect>
<circle className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" cx="0" cy="0" fill="#60A5FA" r="2"></circle>
</g>
</svg>

<div className="relative flex items-center justify-center">
<div className="absolute inset-0 blur-[40px] opacity-40 group-hover:opacity-60 transition-opacity duration-500 bg-blue-600"></div>

<div className="w-24 h-24 border border-blue-500/30 bg-gradient-to-br backdrop-blur-md rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)] z-10 relative overflow-hidden from-indigo-900/50 to-blue-900/20" style={{animation: 'breatheDiamond 4s ease-in-out infinite'}}>

<div className="w-12 h-12 border rounded-lg flex items-center justify-center bg-blue-500/5 relative z-20 border-blue-400/50">
<div className="w-1.5 h-1.5 rounded-full shadow-[0_0_10px_#60A5FA] bg-blue-400"></div>
</div>

<div className="absolute inset-0 z-10 opacity-30" style={{animation: 'orbitSpin 8s linear infinite'}}>
<div className="w-full h-full rounded-2xl border-t border-r border-blue-400/40"></div>
</div>
</div>
</div>
</div>

<div className="relative z-10">
<h3 className="text-4xl text-left group-hover:text-blue-50 transition-colors duration-300 font-oswald font-light text-white" style={{}}>
                Seamless Messaging
              </h3>
<p className="leading-relaxed text-lg font-light text-left mt-2 group-hover:text-gray-300 transition-colors duration-300 font-sans text-gray-400" style={{}}>
                Chat seamlessly with clients and keep conversations organized in one central inbox, eliminating scattered texts and emails.
              </p>
</div>
</div>

<div className="md:col-span-2 group flex flex-col overflow-hidden hover:border-blue-500/30 transition-all duration-500 bg-[#000000] border rounded-[2rem] px-8 py-8 relative justify-between border-white/10">
<style>
              @keyframes shimmer-lock {
                0%, 100% { opacity: 0.4; border-color: rgba(255,255,255,0.1); transform: scale(1); }
                50% { opacity: 0.8; border-color: rgba(255,255,255,0.25); transform: scale(1.05); }
              }
              @keyframes active-pulse {
                0%, 100% { box-shadow: 0 0 20px rgba(79, 70, 229, 0.4); transform: scale(1); border-color: rgba(255,255,255,0.1); }
                50% { box-shadow: 0 0 35px rgba(79, 70, 229, 0.6); transform: scale(1.02); border-color: rgba(79, 70, 229, 0.5); }
              }
              @keyframes scan-sweep {
                0% { transform: translateY(-150%) rotate(15deg); opacity: 0; }
                20% { opacity: 1; }
                80% { opacity: 1; }
                100% { transform: translateY(250%) rotate(15deg); opacity: 0; }
              }
              @keyframes bg-pulse-soft {
                0%, 100% { opacity: 0.15; transform: translate(-50%, -50%) scale(0.9); }
                50% { opacity: 0.25; transform: translate(-50%, -50%) scale(1.1); }
              }
              @keyframes progress-spin {
                0% { stroke-dashoffset: 100; }
                100% { stroke-dashoffset: 25; }
              }
            </style>

<div className="flex w-full h-48 mb-6 relative items-center justify-center">
<div className="flex items-center gap-4 relative">

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 blur-[60px] rounded-full pointer-events-none bg-blue-600/20" style={{animation: 'bg-pulse-soft 4s ease-in-out infinite'}}></div>

<div className="w-12 h-12 rounded-xl border bg-[#121215] flex items-center justify-center border-white/10 text-gray-600" style={{animation: 'shimmer-lock 4s ease-in-out infinite', animationDelay: '0s'}}>
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path className="" d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
<div className="w-12 h-12 rounded-xl border bg-[#121215] flex items-center justify-center text-gray-500 border-white/10" style={{animation: 'shimmer-lock 4s ease-in-out infinite', animationDelay: '1s'}}>
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path className="" d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>

<div className="relative w-20 h-20 rounded-2xl bg-[#4F46E5] flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.4)] z-10 border ring-4 ring-[#08080A] text-white border-white/10" style={{animation: 'active-pulse 3s ease-in-out infinite'}}>

<div className="absolute inset-0 overflow-hidden rounded-2xl">
<div className="w-full h-1/3 bg-gradient-to-b absolute top-0 left-0 from-white/0 via-white/20 to-white/0" style={{animation: 'scan-sweep 3s ease-in-out infinite'}}></div>
</div>

<svg className="absolute inset-0 w-full h-full -rotate-90 p-1" viewbox="0 0 36 36">
<path className="text-white/20" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2"></path>
<path className="drop-shadow-[0_0_2px_rgba(255,255,255,0.8)] text-white" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="100, 100" strokeWidth="2" style={{animation: 'progress-spin 1.5s ease-out forwards'}}></path>
</svg>

<svg className="relative z-10" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>

<div className="absolute -bottom-3 bg-[#08080A] border px-2 py-0.5 rounded-full flex items-center gap-1 shadow-lg text-white border-white/10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-[9px] font-mono tracking-wider font-semibold font-sans" style={{}}>
                      LIVE
                    </span>
</div>
</div>

<div className="w-12 h-12 rounded-xl border bg-[#121215] flex items-center justify-center text-gray-500 border-white/10" style={{animation: 'shimmer-lock 4s ease-in-out infinite', animationDelay: '2s'}}>
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path className="" d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
<div className="w-12 h-12 rounded-xl border bg-[#121215] flex items-center justify-center border-white/10 text-gray-600" style={{animation: 'shimmer-lock 4s ease-in-out infinite', animationDelay: '3s'}}>
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path className="" d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
</div>
</div>

<div className="relative z-10">
<h3 className="text-4xl text-left font-oswald font-light text-white" style={{}}>
                Real-Time Tracking
              </h3>
<p className="leading-relaxed text-lg font-light text-left mt-2 font-sans text-gray-400" style={{}}>
                Monitor client progress, daily habits, and task completion in real-time, ensuring accountability and consistent results.
              </p>
</div>
</div>

<div className="md:col-span-1 group flex flex-col overflow-hidden hover:border-blue-500/30 transition-all duration-500 bg-[#08080A] border rounded-[2rem] p-8 relative justify-between border-white/10">
<style>
              @keyframes drift-vertical-slow {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-8px); }
              }
              @keyframes drift-vertical-reverse {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(8px); }
              }
              @keyframes signal-flow {
                0% { stroke-dashoffset: 20; opacity: 0.3; }
                100% { stroke-dashoffset: 0; opacity: 0.6; }
              }
              @keyframes signal-pulse {
                0%, 100% { stroke-width: 1; opacity: 0.2; }
                50% { stroke-width: 1.5; opacity: 0.8; stroke: #60A5FA; }
              }
              @keyframes node-activate {
                0%, 90%, 100% { fill: white; r: 3px; filter: none; }
                92% { fill: #3B82F6; r: 4.5px; filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.8)); }
                95% { fill: #60A5FA; r: 4px; }
              }
              @keyframes grid-pan-diagonal {
                0% { background-position: 0% 0%; }
                100% { background-position: 100px 100px; }
              }
            </style>

<div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px', transform: 'scale(1.5) rotate(15deg)', animation: 'grid-pan-diagonal 60s linear infinite'}}></div>
<div className="bg-[#000000] z-0 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="relative h-48 w-full flex items-center justify-center mb-6 z-10">
<svg className="w-full h-full text-white/10" fill="none" viewbox="0 0 200 200">

<line className="" stroke="currentColor" strokeWidth="1" x1="100" x2="100" y1="20" y2="180"></line>

<line className="" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1" style={{animation: 'signal-flow 3s linear infinite'}} x1="60" x2="60" y1="20" y2="180"></line>

<line className="" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1" style={{animation: 'signal-flow 4s linear infinite reverse'}} x1="140" x2="140" y1="20" y2="180"></line>

<g className="" style={{animation: 'drift-vertical-slow 7s ease-in-out infinite'}}>
<path className="" d="M60 80 C 80 80, 80 100, 100 100" stroke="currentColor" strokeWidth="1" style={{animation: 'signal-pulse 5s ease-in-out infinite 0s'}}></path>
<circle className="" cx="60" cy="80" fill="white" r="3" style={{animation: 'node-activate 8s ease-in-out infinite 0.5s'}}></circle>
</g>

<g className="" style={{animation: 'drift-vertical-reverse 8s ease-in-out infinite 1s'}}>
<path className="" d="M100 60 C 120 60, 120 80, 140 80" stroke="currentColor" strokeWidth="1" style={{animation: 'signal-pulse 5s ease-in-out infinite 2.5s'}}></path>
<circle className="" cx="140" cy="80" fill="white" r="3" style={{animation: 'node-activate 8s ease-in-out infinite 3s'}}></circle>
</g>

<g className="" style={{animation: 'drift-vertical-slow 6s ease-in-out infinite 2s'}}>
<path className="" d="M100 120 C 80 120, 80 140, 60 140" stroke="currentColor" strokeWidth="1" style={{animation: 'signal-pulse 5s ease-in-out infinite 1.5s'}}></path>
<circle className="" cx="60" cy="140" fill="white" r="3" style={{animation: 'node-activate 8s ease-in-out infinite 5.5s'}}></circle>
</g>

<circle className="" cx="100" cy="60" fill="white" r="3" style={{animation: 'node-activate 8s ease-in-out infinite 0s'}}></circle>
<circle className="" cx="100" cy="100" fill="white" r="3" style={{animation: 'node-activate 8s ease-in-out infinite 2s'}}></circle>
<circle className="" cx="100" cy="150" fill="white" r="3" style={{animation: 'node-activate 8s ease-in-out infinite 4s'}}></circle>

<circle className="opacity-50" cx="120" cy="40" fill="#60A5FA" r="1" style={{animation: 'drift-vertical-reverse 10s ease-in-out infinite'}}></circle>
<circle className="opacity-50" cx="80" cy="160" fill="#60A5FA" r="1" style={{animation: 'drift-vertical-slow 9s ease-in-out infinite'}}></circle>
</svg>
</div>

<div className="relative z-10">
<h3 className="text-4xl text-left group-hover:text-blue-50 transition-colors duration-300 font-oswald font-light text-white" style={{}}>
                Benchy AI
              </h3>
<p className="leading-relaxed text-lg font-light text-left mt-2 group-hover:text-gray-300 transition-colors duration-300 font-sans text-gray-400" style={{}}>
                Your personal AI assistant that helps program and manage your business effortlessly.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="animate-on-scroll relative z-10 mx-auto max-w-7xl mt-24 mb-24 rounded-[2.5rem] p-10 bg-gradient-to-br from-white/5 via-transparent to-white/5 border border-white/10 overflow-hidden group/section" id="management">

<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

<div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-40" style={{background: 'repeating-linear-gradient(60deg, rgba(30,58,138,0) 0%, rgba(30,58,138,0) 45%, rgba(59, 130, 246, 0.15) 48%, rgba(59, 130, 246, 0.3) 50%, rgba(59, 130, 246, 0.15) 52%, rgba(30,58,138,0) 55%)', animation: 'ray-shift 10s ease-in-out infinite alternate'}}>
</div>

<div className="absolute -top-40 right-0 w-[800px] h-[800px] bg-blue-500/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

<div className="absolute top-0 right-1/4 w-[2px] h-[150%] bg-blue-400/30 blur-[4px] rotate-[30deg] origin-top-left"></div>
<div className="absolute top-0 right-1/3 w-[100px] h-[150%] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent rotate-[30deg] origin-top-left blur-xl"></div>
</div>
<div className="relative z-10 flex flex-col gap-10">

<div className="flex items-center gap-6">
<span className="text-xs font-mono tracking-widest text-blue-400">02</span>
<div className="h-px flex-1 bg-white/10"></div>
<span className="uppercase text-xs tracking-widest text-gray-500">Management</span>
</div>

<div className="max-w-3xl">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-oswald font-light text-white mb-6">
                    Total Control.
                    <span className="text-gray-500">Zero Friction.</span>
</h2>
<p className="text-lg font-light text-gray-400 max-w-xl leading-relaxed font-sans">
                    Streamline your operations with powerful tools for team management, client intake, and financial tracking.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative overflow-hidden rounded-2xl bg-[#000000] border border-white/10 p-8 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-1 shadow-lg z-10">

<div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

<div className="relative w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="relative text-xl font-semibold text-white mb-3 tracking-tight">Teams</h3>
<p className="relative text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                        Group clients together for challenges or community events with ease.
                    </p>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-[#000000] border border-white/10 p-8 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-1 shadow-lg z-10">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

<div className="relative w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
<iconify-icon icon="solar:clipboard-list-linear" width="24"></iconify-icon>
</div>
<h3 className="relative text-xl font-semibold text-white mb-3 tracking-tight">Client Forms</h3>
<p className="relative text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                        Collect check-ins, feedback, and intake information seamlessly.
                    </p>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-[#000000] border border-white/10 p-8 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-1 shadow-lg z-10">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

<div className="relative w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
<iconify-icon icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
<h3 className="relative text-xl font-semibold text-white mb-3 tracking-tight">Finance</h3>
<p className="relative text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                        Track invoices, payments, and revenue directly in the app.
                    </p>
</div>
</div>
</div>
</section>

<section className="animate-on-scroll relative z-10 mx-auto max-w-7xl mt-24 mb-24 rounded-[2.5rem] p-10 bg-transparent border border-white/10 overflow-hidden group/section" id="automations">

<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 via-transparent to-transparent opacity-50"></div>

<div className="absolute -top-[20%] left-[10%] w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

<div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] opacity-20" style={{background: 'repeating-linear-gradient(135deg, transparent 0%, transparent 45%, rgba(6, 182, 212, 0.1) 48%, rgba(6, 182, 212, 0.2) 50%, rgba(6, 182, 212, 0.1) 52%, transparent 55%)', animation: 'ray-shift 15s ease-in-out infinite alternate'}}>
</div>
</div>
<div className="relative z-10 flex flex-col gap-10">

<div className="flex items-center justify-between border-b border-white/5 pb-8 mb-4">
<span className="text-xs font-mono tracking-widest text-cyan-400">03</span>
<span className="uppercase text-xs tracking-widest text-gray-500">Automations</span>
</div>

<div className="max-w-3xl">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-oswald font-light text-white mb-6">
                    Automations
                </h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative overflow-hidden rounded-2xl bg-[#050505] border border-white/5 p-8 transition-all duration-500 hover:-translate-y-1 shadow-lg z-10">
<div className="relative w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-6 group-hover:scale-105 transition-all duration-300">
<iconify-icon icon="lucide:infinity" width="24"></iconify-icon>
</div>
<h3 className="relative text-xl font-semibold text-white mb-3 tracking-tight">Auto Flow</h3>
<p className="relative text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                        Create powerful automated workflows to save time.
                    </p>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-[#050505] border border-white/5 p-8 transition-all duration-500 hover:-translate-y-1 shadow-lg z-10">
<div className="relative w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-6 group-hover:scale-105 transition-all duration-300">
<iconify-icon icon="lucide:user-plus" width="24"></iconify-icon>
</div>
<h3 className="relative text-xl font-semibold text-white mb-3 tracking-tight">Onboarding Flow</h3>
<p className="relative text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                        Automate the new client welcome experience.
                    </p>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-[#050505] border border-white/5 p-8 transition-all duration-500 hover:-translate-y-1 shadow-lg z-10">
<div className="relative w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-6 group-hover:scale-105 transition-all duration-300">
<iconify-icon icon="lucide:phone-call" width="24"></iconify-icon>
</div>
<h3 className="relative text-xl font-semibold text-white mb-3 tracking-tight">Benchy Calling</h3>
<p className="relative text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                        AI-powered automated phone calls for leads and clients.
                    </p>
</div>
</div>
</div>
</section>

<section className="animate-on-scroll sm:px-6 lg:px-8 sm:mt-32 max-w-7xl mt-24 mr-auto ml-auto pr-4 pl-4 relative z-10">
<div className="relative overflow-visible">
<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute left-1/2 top-0 h-[32rem] w-[36rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px] opacity-20">
</div>
<div className="absolute -left-20 bottom-0 h-[20rem] w-[28rem] rounded-full bg-cyan-500/20 blur-[140px] opacity-30">
</div>
<div className="absolute -right-24 top-1/3 h-[22rem] w-[22rem] rounded-full bg-indigo-500/20 blur-[120px] opacity-20">
</div>
</div>
<div className="text-center mb-8 sm:mb-12">
<div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-400 shadow-sm backdrop-blur hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer">
<svg className="h-3.5 w-3.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="7" rx="1" width="7" x="3" y="3"></rect>
<rect className="" height="7" rx="1" width="7" x="14" y="3"></rect>
<rect className="" height="7" rx="1" width="7" x="14" y="14"></rect>
<rect className="" height="7" rx="1" width="7" x="3" y="14"></rect>
</svg>
            Complete Content Engine
          </div>
<h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white/90 px-4">
            Centralize your entire
          </h2>
<h3 className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white px-4">
            coaching knowledge base
          </h3>
<p className="mt-2 sm:mt-3 text-xs sm:text-sm lg:text-base text-white/60 max-w-2xl mx-auto px-4">From workout templates to meal plans—discover the building blocks that empower your client results.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 auto-rows-[140px] sm:auto-rows-[180px] sm:gap-x-4 sm:gap-y-4 gap-x-3 gap-y-3">

<div className="group relative col-span-1 sm:col-span-2 lg:col-span-7 row-span-2 lg:row-span-2 rounded-xl sm:rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent ring-1 ring-white/10 backdrop-blur p-4 sm:p-6 overflow-hidden hover:border-white/20 hover:shadow-[0_20px_70px_-20px_rgba(0,0,0,0.8)] transition-all duration-500 cursor-pointer">
<div className="z-10 flex flex-col h-full relative">
<div className="flex items-start justify-between mb-3 sm:mb-4">
<div className="inline-flex text-[9px] sm:text-[10px] font-medium text-white-300 bg-white-500/20 ring-white/20 ring-1 rounded-md mb-2 pt-1 pr-2 pb-1 pl-2 items-center">
                  LIBRARY
                </div>
<div className="flex items-center gap-1.5 sm:gap-2">
<div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-400 animate-pulse"></div>
<span className="text-[10px] sm:text-xs text-white/60">Live</span>
</div>
</div>
<h3 className="text-base sm:text-xl font-semibold tracking-tight text-white mb-1.5 sm:mb-2">Training Systems</h3>
<p className="text-xs sm:text-sm text-white/70 mb-4 sm:mb-6 max-w-md">Build cohesive workout programs with reusable exercises, unified templates, and comprehensive guides that keep your entire client base in sync.</p>
<div className="mt-auto">
<div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4">
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-2 sm:p-3 backdrop-blur hover:bg-white/10 hover:ring-white/20 hover:scale-[1.02] transition-all duration-200 cursor-pointer">
<div className="text-lg sm:text-2xl font-semibold text-white mb-0.5 sm:mb-1">500+</div>
<div className="text-[9px] sm:text-xs text-white/60">Exercises</div>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-2 sm:p-3 backdrop-blur hover:bg-white/10 hover:ring-white/20 hover:scale-[1.02] transition-all duration-200 cursor-pointer">
<div className="text-lg sm:text-2xl font-semibold text-white mb-0.5 sm:mb-1">45</div>
<div className="text-[9px] sm:text-xs text-white/60">Plans</div>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-2 sm:p-3 backdrop-blur hover:bg-white/10 hover:ring-white/20 hover:scale-[1.02] transition-all duration-200 cursor-pointer">
<div className="text-lg sm:text-2xl font-semibold text-white mb-0.5 sm:mb-1">12</div>
<div className="text-[9px] sm:text-xs text-white/60">Weeks</div>
</div>
</div>
<button className="inline-flex items-center gap-1.5 sm:gap-2 rounded-lg bg-white/10 hover:bg-white/15 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white ring-1 ring-white/20 transition-all duration-200 hover:scale-[1.02] hover:ring-white/30">
                  Open Builder
                  <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
<div className="pointer-events-none absolute inset-0">
<div className="absolute right-0 bottom-0 h-48 sm:h-64 w-48 sm:w-64 rounded-full bg-blue-500/10 blur-3xl group-hover:bg-blue-500/20 transition-all duration-500">
</div>
<div className="absolute left-0 top-0 h-24 sm:h-32 w-24 sm:w-32 rounded-full bg-cyan-500/10 blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500">
</div>
</div>
</div>

<div className="group relative col-span-1 sm:col-span-1 lg:col-span-5 row-span-1 lg:row-span-1 rounded-xl sm:rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 ring-1 ring-white/10 backdrop-blur p-4 sm:p-5 overflow-hidden hover:border-white/20 hover:from-white/[0.12] transition-all duration-300 cursor-pointer">
<div className="flex items-start justify-between h-full">
<div className="flex-1">
<div className="inline-flex text-[9px] sm:text-[10px] font-medium text-white-300 bg-white-500/20 ring-white/20 ring-1 rounded-md mb-2 pt-1 pr-2 pb-1 pl-2 items-center">
                  CLIENTS
                </div>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-white/90 mb-1.5 sm:mb-2">Client Access</h3>
<p className="text-[10px] sm:text-xs text-white/70 mb-2 sm:mb-3">Assign programs instantly to individuals or groups.</p>
<div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
<div className="flex -space-x-1.5 sm:-space-x-2">
<img alt="" className="w-6 h-6 sm:w-8 sm:h-8 object-cover ring-black/50 ring-2 rounded-full hover:scale-110 hover:z-10 transition-transform duration-200" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-6 h-6 sm:w-8 sm:h-8 object-cover ring-black/50 ring-2 rounded-full hover:scale-110 hover:z-10 transition-transform duration-200" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="ring-2 ring-black/50 w-6 h-6 sm:w-8 sm:h-8 object-cover rounded-full hover:scale-110 hover:z-10 transition-transform duration-200" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-white/10 ring-2 ring-black/50 flex items-center justify-center text-[10px] sm:text-xs text-white/70 hover:bg-white/20 hover:scale-110 transition-all duration-200 cursor-pointer">
                      +8</div>
</div>
<span className="text-[10px] sm:text-xs text-white/60">Active now</span>
</div>
</div>
<div className="relative ml-2 sm:ml-3 shrink-0">
<div className="ring-1 ring-white/10 overflow-visible flex bg-gradient-to-br from-white/10 to-transparent w-16 h-16 sm:w-20 sm:h-20 rounded-full relative items-center justify-center hover:ring-white/20 hover:scale-110 transition-all duration-300 cursor-pointer">
<img alt="avatar" className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=150&amp;h=150"/>
<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
<span className="absolute h-16 w-16 sm:h-20 sm:w-20 rounded-full ring-1 ring-white/20"></span>
<span className="absolute h-14 w-14 sm:h-16 sm:w-16 rounded-full ring-1 ring-white/10"></span>
</div>
<div className="absolute right-1 bottom-1 sm:right-1.5 sm:bottom-1.5 h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-emerald-400 ring-2 ring-black/50">
</div>
</div>
</div>
</div>
</div>

<div className="relative col-span-1 sm:col-span-1 lg:col-span-5 row-span-1 lg:row-span-1 rounded-xl sm:rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 ring-1 ring-white/10 backdrop-blur p-4 sm:p-5 overflow-hidden hover:border-white/20 hover:from-white/[0.12] transition-all duration-300 cursor-pointer">
<div className="flex items-start justify-between mb-2 sm:mb-3">
<div className="">
<div className="inline-flex text-[9px] sm:text-[10px] font-medium text-white-300 bg-white-500/20 ring-white/20 ring-1 rounded-md mb-2 pt-1 pr-2 pb-1 pl-2 items-center">
                  FORMS
                </div>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-white/90">Check-ins &amp; Intake</h3>
</div>
<svg className="text-white/40 h-4 w-4 sm:h-5 sm:w-5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" r="1"></circle>
<circle className="" cx="19" cy="12" r="1"></circle>
<circle className="" cx="5" cy="12" r="1"></circle>
</svg>
</div>
<div className="space-y-2 sm:space-y-3">
<div className="flex items-center justify-between rounded-lg bg-black/20 p-2 sm:p-2.5 ring-1 ring-white/10 hover:bg-black/30 hover:ring-white/20 transition-all duration-200 cursor-pointer">
<span className="text-[10px] sm:text-xs text-white/80">Weekly Check-in</span>
<div className="relative h-4 w-8 sm:h-5 sm:w-10 rounded-full bg-indigo-500/80 ring-1 ring-indigo-400/30 hover:bg-indigo-500 transition-colors duration-200">
<span className="absolute right-0.5 top-0.5 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-white shadow-sm"></span>
</div>
</div>
<div className="flex items-center justify-between rounded-lg bg-black/20 p-2 sm:p-2.5 ring-1 ring-white/10 hover:bg-black/30 hover:ring-white/20 transition-all duration-200 cursor-pointer">
<span className="text-[10px] sm:text-xs text-white/80">Photos Required</span>
<div className="relative h-4 w-8 sm:h-5 sm:w-10 rounded-full bg-white/10 ring-1 ring-white/10 hover:bg-white/15 transition-colors duration-200">
<span className="absolute left-0.5 top-0.5 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-white/40"></span>
</div>
</div>
<div className="rounded-lg bg-black/20 p-2 sm:p-2.5 ring-1 ring-white/10 hover:bg-black/30 hover:ring-white/20 transition-all duration-200 cursor-pointer">
<div className="flex items-center justify-between mb-1.5 sm:mb-2">
<span className="text-[10px] sm:text-xs text-white/80">Compliance</span>
<span className="text-[10px] sm:text-xs text-white/60">94%</span>
</div>
<div className="h-1 w-full rounded-full bg-white/10">
<div className="h-1 w-[94%] rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
</div>
</div>
</div>
</div>

<div className="col-span-1 sm:col-span-1 lg:col-span-4 row-span-2 lg:row-span-2 overflow-hidden ring-white/10 ring-1 bg-gradient-to-br from-white/10 to-white/5 max-h-fit border-white/10 border rounded-xl sm:rounded-2xl pt-4 pr-4 pb-4 pl-4 sm:pt-5 sm:pr-5 sm:pb-5 sm:pl-5 relative backdrop-blur hover:border-white/20 hover:from-white/[0.12] transition-all duration-300 cursor-pointer">
<div className="flex flex-col h-full max-h-fit">
<div className="flex items-start justify-between mb-3 sm:mb-4">
<div className="">
<div className="inline-flex text-[9px] sm:text-[10px] font-medium text-white-300 bg-white-500/20 ring-white/20 ring-1 rounded-md mb-2 pt-1 pr-2 pb-1 pl-2 items-center">
                    ASSETS
                  </div>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-white/90">The Vault</h3>
<p className="text-[10px] sm:text-xs text-white/60 mt-0.5 sm:mt-1">Documents, videos, and guides.</p>
</div>
</div>
<div className="grid grid-cols-3 gap-1.5 sm:gap-2">
<div className="aspect-square rounded-lg overflow-hidden ring-1 ring-white/10 hover:ring-white/20 hover:scale-[1.05] transition-all duration-300 cursor-pointer bg-white/5 flex items-center justify-center">
<iconify-icon className="text-white/50 text-2xl" icon="solar:file-text-bold-duotone"></iconify-icon>
</div>
<div className="aspect-square rounded-lg overflow-hidden ring-1 ring-white/10 hover:ring-white/20 hover:scale-[1.05] transition-all duration-300 cursor-pointer bg-white/5 flex items-center justify-center">
<iconify-icon className="text-white/50 text-2xl" icon="solar:play-circle-bold-duotone"></iconify-icon>
</div>
<div className="aspect-square ring-1 ring-white/10 flex bg-white/5 rounded-lg blur-none items-center justify-center hover:ring-white/20 hover:scale-[1.05] hover:bg-white/10 transition-all duration-300 cursor-pointer">
<span className="text-[10px] sm:text-xs text-white/70">+120</span>
</div>
</div>
</div>
</div>

<div className="relative col-span-1 sm:col-span-1 lg:col-span-4 row-span-1 lg:row-span-1 rounded-xl sm:rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 ring-1 ring-white/10 backdrop-blur p-4 sm:p-5 hover:border-white/20 hover:from-white/[0.12] transition-all duration-300 cursor-pointer">
<div className="inline-flex text-[9px] sm:text-[10px] font-medium text-white-300 bg-white-500/20 ring-white/20 ring-1 rounded-md mb-2 pt-1 pr-2 pb-1 pl-2 items-center">
              MACROS
            </div>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-white/90 mb-1.5 sm:mb-2">Nutrition Logic</h3>
<p className="text-[10px] sm:text-xs text-white/70 mb-3 sm:mb-4">Custom meal plans and macro calculations.</p>
<div className="ring-white/10 ring-1 bg-black/80 border-white/10 border rounded-lg pt-2.5 pr-2.5 pb-2.5 pl-2.5 sm:pt-3 sm:pr-3 sm:pb-3 sm:pl-3 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] backdrop-blur-xl hover:bg-black/30 hover:ring-white/20 transition-all duration-200">
<div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
<div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-red-400"></div>
<div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-yellow-400"></div>
<div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-400"></div>
<span className="text-[9px] sm:text-[10px] text-white/50 ml-auto">meal.json</span>
</div>
<pre className="text-[9px] sm:text-[10px] text-white/70 leading-relaxed overflow-x-auto"><code className=""><span className="text-purple-400">const</span> <span className="text-blue-400">plan</span> = {
  <span className="text-white/90">target</span>: <span className="text-emerald-400">"Fat Loss"</span>,
  <span className="text-white/90">cals</span>: <span className="text-yellow-400">2400</span>,
  <span className="text-white/90">macros</span>: { p: <span className="text-yellow-400">180</span>, c: <span className="text-yellow-400">220</span> }
}</code></pre>
</div>
</div>

<div className="relative col-span-1 sm:col-span-1 lg:col-span-4 row-span-1 lg:row-span-1 rounded-xl sm:rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 ring-1 ring-white/10 backdrop-blur p-4 sm:p-5 hover:border-white/20 hover:from-white/[0.12] transition-all duration-300 cursor-pointer">
<div className="flex items-start justify-between mb-3 sm:mb-4">
<div className="">
<div className="inline-flex text-[9px] sm:text-[10px] font-medium text-white-300 bg-white-500/20 ring-white/20 ring-1 rounded-md mb-2 pt-1 pr-2 pb-1 pl-2 items-center">
                  HABITS
                </div>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-white/90">Routine Tracking</h3>
</div>
<div className="flex items-center gap-1">
<div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-emerald-500/20 ring-1 ring-emerald-500/30 flex items-center justify-center hover:bg-emerald-500/30 hover:scale-110 transition-all duration-200">
<svg className="text-emerald-400 h-3 w-3 sm:h-3.5 sm:w-3.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polyline className="" points="20 6 9 17 4 12"></polyline>
</svg>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-2 sm:gap-3">
<div className="rounded-lg bg-black/20 p-2.5 sm:p-3 ring-1 ring-white/10 hover:bg-black/30 hover:ring-white/20 hover:scale-[1.02] transition-all duration-200">
<div className="text-base sm:text-lg font-semibold text-emerald-400 mb-0.5">100%</div>
<div className="text-[9px] sm:text-[10px] text-white/60">Consistency</div>
</div>
<div className="rounded-lg bg-black/20 p-2.5 sm:p-3 ring-1 ring-white/10 hover:bg-black/30 hover:ring-white/20 hover:scale-[1.02] transition-all duration-200">
<div className="text-base sm:text-lg font-semibold text-sky-400 mb-0.5">Daily</div>
<div className="text-[9px] sm:text-[10px] text-white/60">Reminders</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="animate-on-scroll relative z-10 border-t border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent py-24" id="pricing">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col items-center justify-center text-center mb-16">
<span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-400 mb-6">
<span className="h-1.5 w-1.5 rounded-full bg-yellow-500 animate-pulse"></span>
            Presale Offer
          </span>
<h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Unlock Lifetime Access
          </h2>
<p className="mt-4 text-slate-400 max-w-lg">
            Join the presale and secure the future of your coaching business.
            Pay once, use HubFit forever.
          </p>
</div>
<div className="relative mx-auto flex max-w-3xl flex-col items-center rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 shadow-2xl md:p-12 overflow-hidden">
<div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 bg-blue-500/20 blur-[100px] pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none"></div>
<div className="relative z-10 w-full text-center">
<div className="mb-2 text-lg font-medium text-blue-400">
              All-Access Bundle
            </div>
<h3 className="text-3xl font-bold text-white mb-6">
              Lifetime Membership
            </h3>
<div className="flex items-center justify-center gap-2 mb-8">
<span className="text-6xl font-bold tracking-tight text-white">
                $997
              </span>
<span className="text-sm font-medium text-slate-500 self-end mb-2">
                one-time payment
              </span>
</div>
<p className="mx-auto max-w-md text-slate-400 mb-10">
              Get unlimited access to every feature we build, forever. No
              monthly subscriptions, no hidden fees.
            </p>
<button className="w-full max-w-md rounded-xl bg-white px-8 py-4 text-base font-bold text-black transition hover:bg-slate-200 hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Get Lifetime Access
            </button>
<div className="mt-4 text-xs text-slate-500">
              Limited spots available for presale
            </div>
</div>

<div className="relative z-10 mt-12 w-full border-t border-white/10 pt-10">
<div className="grid grid-cols-1 gap-y-4 gap-x-8 md:grid-cols-2 text-sm text-slate-300 max-w-2xl mx-auto">
<div className="flex items-center gap-3">
<svg className="lucide lucide-check-circle-2 h-5 w-5 text-blue-400 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Unlimited Clients</span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-check-circle-2 h-5 w-5 text-blue-400 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Team Accounts &amp; Roles</span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-check-circle-2 h-5 w-5 text-blue-400 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Custom Branding</span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-check-circle-2 h-5 w-5 text-blue-400 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Automated Workflows</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="animate-on-scroll relative z-10 mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
<h2 className="text-center text-3xl font-semibold text-white mb-12">
        Frequently asked questions
      </h2>
<div className="space-y-4">

<details className="group rounded-xl border border-white/10 bg-[#0A0A0A] p-4 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between font-medium text-slate-200 group-hover:text-white">
            What does Lifetime Access mean?
          </summary>
<div className="mt-4 text-sm leading-relaxed text-slate-400">
            You pay once and get access to the HubFit Business plan forever.
            This includes all future updates and features we release for that
            plan, with no recurring monthly fees.
          </div>
</details>

<details className="group rounded-xl border border-white/10 bg-[#0A0A0A] p-4 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between font-medium text-slate-200 group-hover:text-white">
            Can I migrate my data from other platforms?
          </summary>
<div className="mt-4 text-sm leading-relaxed text-slate-400">
            Yes, we offer free migration support from most major coaching platforms. Our team will help you transfer your clients, programs, and data so you can hit the ground running.
          </div>
</details>

<details className="group rounded-xl border border-white/10 bg-[#0A0A0A] p-4 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between font-medium text-slate-200 group-hover:text-white">
            Is the Coach App included?
          </summary>
<div className="mt-4 text-sm leading-relaxed text-slate-400">
            Absolutely. You get full access to both the web dashboard and the dedicated mobile app for coaches, allowing you to manage your business from anywhere.
          </div>
</details>

<details className="group rounded-xl border border-white/10 bg-[#0A0A0A] p-4 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between font-medium text-slate-200 group-hover:text-white">
            What happens after the presale ends?
          </summary>
<div className="mt-4 text-sm leading-relaxed text-slate-400">
            Once the presale period is over, HubFit will switch to a monthly subscription model. This lifetime offer is exclusively available to early supporters.
          </div>
</details>

<details className="group rounded-xl border border-white/10 bg-[#0A0A0A] p-4 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between font-medium text-slate-200 group-hover:text-white">
            Is there a refund policy?
          </summary>
<div className="mt-4 text-sm leading-relaxed text-slate-400">
            Yes, we offer a 30-day money-back guarantee. If you decide HubFit isn't the right fit for your business, we'll refund your purchase in full, no questions asked.
          </div>
</details>
</div>
</section>

<footer className="animate-on-scroll relative z-10 mx-auto max-w-7xl px-4 pt-10 pb-16 sm:px-6 lg:px-8 border-t border-white/10">
<div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5 pt-16">
<div className="col-span-2 lg:col-span-1">
<div className="flex items-center gap-2 font-bold text-xl text-white mb-6">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
              H
            </div>
<span>HubFit</span>
</div>
<p className="text-xs text-slate-500 mb-6">
            © 2025 HubFit. All rights reserved.
          </p>
</div>

<div>
<h3 className="text-sm font-semibold text-white">Product</h3>
<ul className="mt-4 space-y-4">
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Client App</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Coach App</a></li>
</ul>
</div>

<div>
<h3 className="text-sm font-semibold text-white">Company</h3>
<ul className="mt-4 space-y-4">
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div>
<h3 className="text-sm font-semibold text-white">Resources</h3>
<ul className="mt-4 space-y-4">
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Help Center</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Community</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">API Docs</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Status</a></li>
</ul>
</div>

<div>
<h3 className="text-sm font-semibold text-white">Legal</h3>
<ul className="mt-4 space-y-4">
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Terms</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
</footer>



    </>
  );
}
