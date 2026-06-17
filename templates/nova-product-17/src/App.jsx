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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
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
      
<div className="gradient-blur">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>
<style>
    .gradient-blur {
      position: fixed;
      z-index: 5;
      inset: 0 0 auto 0;
      height: 12%;
      pointer-events: none;
    }

    .gradient-blur>div,
    .gradient-blur::before,
    .gradient-blur::after {
      position: absolute;
      inset: 0;
    }

    .gradient-blur::before {
      content: "";
      z-index: 1;
      backdrop-filter: blur(0.5px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 1) 12.5%,
          rgba(0, 0, 0, 1) 25%,
          rgba(0, 0, 0, 0) 37.5%);
    }

    .gradient-blur>div:nth-of-type(1) {
      z-index: 2;
      backdrop-filter: blur(1px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 12.5%,
          rgba(0, 0, 0, 1) 25%,
          rgba(0, 0, 0, 1) 37.5%,
          rgba(0, 0, 0, 0) 50%);
    }

    .gradient-blur>div:nth-of-type(2) {
      z-index: 3;
      backdrop-filter: blur(2px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 25%,
          rgba(0, 0, 0, 1) 37.5%,
          rgba(0, 0, 0, 1) 50%,
          rgba(0, 0, 0, 0) 62.5%);
    }

    .gradient-blur>div:nth-of-type(3) {
      z-index: 4;
      backdrop-filter: blur(4px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 37.5%,
          rgba(0, 0, 0, 1) 50%,
          rgba(0, 0, 0, 1) 62.5%,
          rgba(0, 0, 0, 0) 75%);
    }

    .gradient-blur>div:nth-of-type(4) {
      z-index: 5;
      backdrop-filter: blur(8px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 50%,
          rgba(0, 0, 0, 1) 62.5%,
          rgba(0, 0, 0, 1) 75%,
          rgba(0, 0, 0, 0) 87.5%);
    }

    .gradient-blur>div:nth-of-type(5) {
      z-index: 6;
      backdrop-filter: blur(16px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 62.5%,
          rgba(0, 0, 0, 1) 75%,
          rgba(0, 0, 0, 1) 87.5%,
          rgba(0, 0, 0, 0) 100%);
    }

    .gradient-blur>div:nth-of-type(6) {
      z-index: 7;
      backdrop-filter: blur(32px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 75%,
          rgba(0, 0, 0, 1) 87.5%,
          rgba(0, 0, 0, 1) 100%);
    }

    .gradient-blur::after {
      content: "";
      z-index: 8;
      backdrop-filter: blur(64px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 87.5%,
          rgba(0, 0, 0, 1) 100%);
    }
  </style>

<div className="aura-background-component -z-10 w-full absolute top-0 h-[760px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="GE8mpmmCRgK6XBF57jgF"></div>
</div>

<div className="pointer-events-none fixed overflow-hidden top-0 right-0 bottom-0 left-0" style={{visibility: 'hidden'}}>
<div className="-top-32 -translate-x-1/2 opacity-40 w-[1100px] h-[1100px] rounded-full absolute left-1/2 blur-3xl"></div>
<div className="opacity-30 w-[700px] h-[700px] rounded-full absolute right-0 bottom-0 blur-3xl translate-x-1/3 translate-y-1/3"></div>
</div>

<header className="sticky z-50 relative top-0">
<div className="sm:px-6 lg:px-8 max-w-7xl border-slate-50/5 mr-auto ml-auto pr-4 pl-4" style={{}}>
<div className="flex h-16 items-center justify-between">
<a className="inline-flex items-center justify-center bg-center w-[80px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f7466370-2832-4fdd-84c2-0932bb0dd850_800w.png)] bg-cover rounded-full" href="#"></a>
<nav className="hidden md:flex border-slate-50/5 border rounded-full pr-4 pl-4 backdrop-blur-lg gap-x-1 gap-y-1 items-center">
<a className="hover:text-white text-sm font-medium text-zinc-300 pt-2 pr-3 pb-2 pl-3" href="#" style={{}}>Product</a>
<a className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white" href="#" style={{}}>Pricing</a>
<a className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white" href="#" style={{}}>Changelog</a>
<a className="hover:text-white text-sm font-medium text-zinc-300 pt-2 pr-3 pb-2 pl-3" href="#" style={{}}>Docs</a>
<a className="hover:text-white text-sm font-medium text-zinc-300 pt-2 pr-3 pb-2 pl-3" href="#" style={{}}>Company</a>
</nav>
<div className="flex gap-2 items-center">
<button aria-label="Sign up" className="group relative inline-flex shadow-[0_8px_16px_-4px_rgba(151,65,252,0.2)] hover:shadow-[0_12px_20px_-6px_rgba(151,65,252,0.28)] transition duration-300 ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 transform-gpu hover:-translate-y-0.5 text-white rounded-md pt-[1px] pr-[1px] pb-[1px] pl-[1px] items-center justify-center" role="button" style={{backgroundImage: 'linear-gradient(144deg,#AF40FF, #5B42F3 50%, #00DDEB)'}} type="button">
<span className="flex items-center justify-center gap-2 text-[14px] leading-none min-w-[80px] w-full h-full transition-colors duration-300 group-hover:bg-transparent font-medium bg-[#0b0f17] rounded-md pt-2 pr-4 pb-2 pl-4" style={{}}>
<svg aria-hidden="true" className="lucide lucide-log-in h-4 w-4" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
<span className="">Login</span>
</span>
</button>
</div>
</div>
</div>
</header>

<section className="z-10 mt-0 relative">
<div className="sm:px-6 lg:px-8 sm:pt-16 max-w-6xl mt-0 mr-auto mb-0 ml-auto pt-16 pr-0 pl-0" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 60%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 60%, transparent)'}}>
<div className="flex flex-col text-center mt-12 mr-auto ml-auto space-y-6 items-center">
<div className="mb-6">
<span className="inline-flex items-center gap-2 text-xs font-medium text-zinc-200 bg-slate-950/50 border-white/10 border rounded-full pt-1 pr-3 pb-1 pl-3 backdrop-blur-xl">
<svg className="lucide lucide-sparkles h-3.5 w-3.5 text-violet-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
              New: AI-powered sprint planning
            </span>
</div>
<span className="block bg-clip-text text-8xl font-semibold text-transparent tracking-tight bg-gradient-to-r from-[#d8ccff] to-[#a39fea] pt-0 pb-3" style={{maskImage: 'linear-gradient(140deg, transparent, black 10%, black 65%, transparent)', WebkitMaskImage: 'linear-gradient(140deg, transparent, black 10%, black 65%, transparent)'}}>Plan smarter, ship faster</span>
<p className="sm:text-lg text-base text-purple-300 bg-gray-950/50 max-w-2xl mt-0 pt-2 pr-4 pb-2 pl-4 drop-shadow-lg" style={{maskImage: 'linear-gradient(180deg, transparent, black 25%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 25%, black 70%, transparent)'}}>
            Build products your users love. Streamline roadmaps, collaborate seamlessly, and track progress from idea to launch.
          </p>
<div className="flex gap-3 mt-8 mb-0 pb-[60px] gap-x-3 gap-y-3 items-center">
<a className="group isolate inline-flex cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(129,140,248,0.35)] rounded-full relative shadow-[0_8px_40px_rgba(129,140,248,0.25)]" href="#" style={{'--spread': '90deg', '--shimmer-color': 'rgba(255, 255, 255, 0.6)', '--radius': '9999px', '--speed': '4s', '--cut': '1px', '--bg': 'rgba(255, 255, 255, 0.05)'}}>
<div className="absolute inset-0">
<div className="absolute inset-[-200%] w-[400%] h-[400%] [animation:rotate-gradient_var(--speed)_linear_infinite]">
<div className="absolute inset-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]">
</div>
</div>
</div>
<div className="absolute rounded-full [background:var(--bg)] [inset:var(--cut)] backdrop-blur"></div>
<div className="z-10 flex gap-3 sm:w-auto overflow-hidden text-base font-medium text-white w-full pt-3 pr-4 pb-3 pl-4 relative gap-x-3 gap-y-3 items-center" style={{borderRadius: '9999px'}}>
<div className="" style={{position: 'absolute', content: '\' \'', display: 'block', width: '200%', height: '200%', background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), transparent)', animation: 'borderBeamRotation 4s infinite linear', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}></div>
<div className="" style={{position: 'absolute', inset: '1px', background: 'rgba(10, 11, 20, 0.8)', borderRadius: '9999px', backdropFilter: 'blur(8px)'}}>
</div>
<span className="whitespace-nowrap z-10 relative">Start free trial</span>
<span className="inline-flex items-center justify-center z-10 bg-white/10 w-7 h-7 rounded-full ml-1 relative">
<svg className="lucide lucide-arrow-right lucide-wand-sparkles w-[24px] h-[16px]" data-icon-replaced="true" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)', width: '24px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
<style className="">
      @keyframes borderBeamRotation {
        0% {
          transform: translate(-50%, -50%) rotate(0deg);
        }

        100% {
          transform: translate(-50%, -50%) rotate(360deg);
        }
      }
    </style>
</div>
</a>
<a className="inline-flex items-center gap-2 hover:bg-white/5 text-sm font-medium text-zinc-200 bg-slate-950/50 border-white/10 border rounded-full pt-2.5 pr-5 pb-2.5 pl-5 backdrop-blur-xl" href="#">
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
              Watch demo
            </a>
</div>
</div>

<div className="sm:mt-16 mt-16 relative">

<section className="supports-[backdrop-filter]:bg-white/5 overflow-hidden text-white bg-white/5 border-slate-50/10 border rounded-2xl ring-white/10 ring-1 mt-40 relative backdrop-blur-xl">

<nav aria-label="Primary" className="hidden sm:flex flex-col z-10 w-14 border-slate-50/0 ring-white/10 ring-1 border-r pt-4 pr-2 pb-4 pl-2 absolute top-0 bottom-0 left-0 backdrop-blur items-center justify-between">
<div className="flex flex-col gap-3 items-center">
<button aria-label="Home" className="h-10 w-10 rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-700 ring-1 ring-white/20 shadow-lg shadow-zinc-900/25 flex items-center justify-center" style={{}} title="Home" type="button">
<svg className="lucide lucide-layout-grid w-[20px] h-[20px]" data-lucide="layout-grid" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
</button>
<div className="h-px w-8 bg-white/10" style={{}}></div>
<button aria-label="Search" className="hover:bg-white/10 flex text-slate-300 w-10 h-10 ring-0 rounded-xl items-center justify-center" style={{}} title="Search" type="button">
<svg className="lucide lucide-search w-[20px] h-[20px]" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(203, 213, 225)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button aria-label="Roadmap" className="hover:bg-white/10 flex text-slate-300 w-10 h-10 ring-0 rounded-xl items-center justify-center" style={{}} title="Roadmap" type="button">
<svg className="lucide lucide-map w-[20px] h-[20px]" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
</button>
<button aria-label="Tasks" className="hover:bg-white/10 flex text-slate-300 w-10 h-10 ring-0 rounded-xl items-center justify-center" style={{}} title="Tasks" type="button">
<svg className="lucide lucide-list-checks h-5 w-5" data-lucide="list-checks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 5h8"></path><path d="M13 12h8"></path><path d="M13 19h8"></path><path d="m3 17 2 2 4-4"></path><path d="m3 7 2 2 4-4"></path></svg>
</button>
<button aria-label="Team" className="hover:bg-white/10 flex text-slate-300 w-10 h-10 ring-0 rounded-xl items-center justify-center" style={{}} title="Team" type="button">
<svg className="lucide lucide-users h-5 w-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</button>
<button aria-label="Docs" className="hover:bg-white/10 flex text-slate-300 w-10 h-10 ring-0 rounded-xl items-center justify-center" style={{}} title="Docs" type="button">
<svg className="lucide lucide-file-text h-5 w-5" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</button>
</div>
<div className="flex flex-col items-center gap-3">
<button aria-label="Settings" className="h-10 w-10 rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-slate-300 flex items-center justify-center" style={{}} title="Settings" type="button">
<svg className="lucide lucide-settings-2 h-5 w-5" data-lucide="settings-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
</button>
<button aria-label="Help" className="h-10 w-10 rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-slate-300 flex items-center justify-center" style={{}} title="Help" type="button">
<svg className="lucide lucide-help-circle h-5 w-5" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
</button>
</div>
</nav>
<div className="grid grid-cols-1 lg:grid-cols-2 sm:pl-16 pl-16">

<div className="sm:p-8 lg:p-10 pt-5 pr-5 pb-5 pl-5">
<div className="space-y-6">
<div className="flex items-center justify-between">
<h2 className="sm:text-2xl text-xl font-semibold text-white tracking-tight">Sprint 12 · Week 3</h2>
<div className="flex items-center gap-2 text-slate-400" style={{}}>
<svg className="lucide lucide-target h-4 w-4" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
<span className="text-xs sm:text-sm font-medium">Roadmap</span>
</div>
</div>
<div className="space-y-8">
<div className="space-y-3">
<div className="flex items-start gap-3">
<div className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" style={{}}></div>
<p className="text-sm sm:text-base text-slate-300" style={{}}>
                Launched <a className="text-slate-300 hover:text-slate-200 underline underline-offset-4 decoration-slate-500/50" href="#" style={{}}>v2.3 Dashboard</a> to beta users
              </p>
</div>
<div className="ml-6 pl-4 border-l border-white/10 space-y-2">
<div className="flex items-center gap-2 text-slate-400" style={{}}>
<svg className="lucide lucide-check-circle h-4 w-4 text-slate-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<p className="text-sm">98% positive feedback</p>
</div>
<div className="flex items-center gap-2 text-slate-400" style={{}}>
<svg className="lucide lucide-users h-4 w-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<p className="text-sm">1,247 active beta testers</p>
</div>
<div className="flex items-center gap-2 text-slate-500" style={{}}>
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<p className="text-sm">Moving to GA next sprint</p>
</div>
</div>
</div>

<div className="relative space-y-2">
<div className="flex flex-col sm:flex-row gap-3">
<div className="flex gap-3 ring-1 ring-white/10 bg-white/5 rounded-xl pt-3 pr-4 pb-3 pl-4 shadow-sm backdrop-blur items-center" style={{}}>
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-zinc-500 to-zinc-700 flex items-center justify-center ring-1 ring-white/20" style={{}}>
<svg className="lucide lucide-github h-4 w-4 text-white" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</div>
<div className="min-w-0">
<p className="text-sm font-medium text-slate-200" style={{}}>GitHub</p>
<p className="text-xs text-slate-400 truncate" style={{}}>24 PRs merged</p>
</div>
</div>
<div className="flex gap-3 ring-1 ring-white/10 bg-white/5 rounded-xl pt-3 pr-4 pb-3 pl-4 shadow-sm backdrop-blur items-center" style={{}}>
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-zinc-600 to-zinc-800 flex items-center justify-center ring-1 ring-white/20" style={{}}>
<svg className="lucide lucide-figma h-4 w-4 text-white" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
</div>
<div className="min-w-0">
<p className="text-sm font-medium text-slate-200" style={{}}>Figma</p>
<p className="text-xs text-slate-400 truncate" style={{}}>8 designs ready</p>
</div>
</div>
</div>
</div>

<div className="space-y-4">
<h3 className="text-lg tracking-tight font-semibold text-white">In Progress</h3>
<div className="space-y-2">
<div className="flex items-center justify-between px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/10" style={{}}>
<div className="flex items-center gap-3">
<svg className="lucide lucide-zap h-4 w-4 text-zinc-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<p className="text-sm text-slate-300 truncate" style={{}}>Real-time collaboration mode</p>
</div>
<span className="text-xs text-slate-400" style={{}}>Due in 3 days</span>
</div>
<div className="flex items-center justify-between px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/10" style={{}}>
<div className="flex items-center gap-3">
<svg className="lucide lucide-activity h-4 w-4 text-zinc-400" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<p className="text-sm text-slate-300 truncate" style={{}}>Advanced analytics dashboard</p>
</div>
<span className="text-xs text-slate-400" style={{}}>On track</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:border-t-0 lg:border-l border-white/10 border-t pr-4 pl-4">
<div className="sm:p-8 lg:p-10 pt-5 pr-5 pb-5 pl-5 space-y-6">

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<button aria-label="Previous sprint" className="p-2 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10" data-nav="prev" style={{}} type="button">
<svg className="lucide lucide-chevron-left h-4 w-4 text-slate-200" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button aria-label="Next sprint" className="p-2 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10" data-nav="next" style={{}} type="button">
<svg className="lucide lucide-chevron-right w-[16px] h-[16px]" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(226, 232, 240)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
<h3 className="text-xl tracking-tight font-semibold text-white" id="sprint-label">Sprint 12</h3>
<button aria-label="Add task" className="p-2 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10" id="add-task-btn" style={{}} type="button">
<svg className="lucide lucide-plus h-4 w-4 text-slate-200" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>

<div className="ring-1 ring-white/10 bg-white/5 rounded-xl pt-4 pr-4 pb-4 pl-4" style={{}}>
<div className="flex items-center justify-between mb-3">
<h4 className="text-lg tracking-tight font-semibold text-white">Progress</h4>
<div className="flex items-center gap-2 text-xs text-slate-400" style={{}}>
<span className="font-medium text-slate-300" style={{}}>67%</span>
<span className="">complete</span>
</div>
</div>
<div className="relative h-2 bg-white/10 rounded-full overflow-hidden mb-4" style={{}}>
<div className="absolute inset-y-0 left-0 bg-gradient-to-r from-zinc-600 to-zinc-700 rounded-full" style={{width: '67%'}}></div>
</div>
<div className="grid grid-cols-3 gap-3 text-center">
<div className="rounded-lg bg-white/5 p-3" style={{}}>
<div className="text-2xl font-semibold text-white">18</div>
<div className="text-xs text-slate-400" style={{}}>Completed</div>
</div>
<div className="rounded-lg bg-white/5 p-3" style={{}}>
<div className="text-2xl font-semibold text-white">9</div>
<div className="text-xs text-slate-400" style={{}}>In Progress</div>
</div>
<div className="rounded-lg bg-white/5 p-3" style={{}}>
<div className="text-2xl font-semibold text-white">27</div>
<div className="text-xs text-slate-400" style={{}}>Total</div>
</div>
</div>
</div>

<div className="ring-1 ring-white/10 bg-white/5 rounded-xl pt-4 pr-4 pb-4 pl-4" style={{}}>
<div className="flex items-center justify-between mb-3">
<h4 className="text-lg tracking-tight font-semibold text-white">Team Tasks</h4>
<div className="flex items-center gap-2 text-xs text-slate-400" style={{}}>
<svg className="lucide lucide-users h-4 w-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span>8 members</span>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3 px-3 py-3 rounded-lg bg-white/5 ring-1 ring-white/10" style={{}}>
<div className="h-8 w-8 rounded-md bg-gradient-to-br from-zinc-600 to-zinc-800 flex items-center justify-center ring-1 ring-white/20 text-white text-sm font-semibold" style={{}}>
                SL
              </div>
<div className="min-w-0 flex-1">
<p className="text-sm font-medium text-slate-200 truncate" style={{}}>Sarah Lee</p>
<p className="text-xs text-slate-400 truncate" style={{}}>API integration · 3 tasks</p>
</div>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-slate-400" style={{}}></span>
</div>
</div>
<div className="flex items-center gap-3 px-3 py-3 rounded-lg bg-white/5 ring-1 ring-white/10" style={{}}>
<div className="h-8 w-8 rounded-md bg-gradient-to-br from-zinc-500 to-zinc-700 flex items-center justify-center ring-1 ring-white/20 text-white text-sm font-semibold" style={{}}>
                MK
              </div>
<div className="min-w-0 flex-1">
<p className="text-sm font-medium text-slate-200 truncate" style={{}}>Marcus Kim</p>
<p className="text-xs text-slate-400 truncate" style={{}}>UI components · 5 tasks</p>
</div>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-zinc-400" style={{}}></span>
</div>
</div>
<div className="flex items-center gap-3 px-3 py-3 rounded-lg bg-white/5 ring-1 ring-white/10 opacity-70" style={{}}>
<div className="h-8 w-8 rounded-md bg-gradient-to-br from-zinc-600 to-zinc-800 flex items-center justify-center ring-1 ring-white/20 text-white text-sm font-semibold" style={{}}>
                JP
              </div>
<div className="min-w-0 flex-1">
<p className="text-sm font-medium text-slate-200 truncate" style={{}}>Jessica Park</p>
<p className="text-xs text-slate-400 truncate" style={{}}>Testing · 2 tasks</p>
</div>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-slate-400" style={{}}></span>
</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<button className="text-xs text-slate-300 hover:text-white px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 inline-flex items-center gap-2" style={{}} type="button">
<svg className="lucide lucide-download h-4 w-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
              Export report
            </button>
<button className="text-xs text-slate-300 hover:text-slate-200 inline-flex items-center gap-2" style={{}} type="button">
<svg className="lucide lucide-bar-chart-3 h-4 w-4" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
              View metrics
            </button>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</section>

<section className="z-10 relative">
<div className="sm:px-6 lg:px-8 max-w-6xl mr-auto ml-auto pt-20 pr-4 pb-20 pl-4">

<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-200 backdrop-blur mb-6">
<svg className="h-3.5 w-3.5 text-violet-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
            Features
          </div>
<h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Everything you need to ship faster</h2>
<p className="mt-3 text-base text-zinc-300">Powerful features designed for modern product teams</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-x-6 gap-y-6 items-stretch">
<div className="z-10 h-full rounded-3xl pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative" style={{background: 'radial-gradient(230px at 0% 0%, rgba(139, 92, 246, 0.4), rgb(12, 13, 13))', maskImage: 'linear-gradient(180deg, transparent, black 0%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 70%, transparent)'}}>
<div className="absolute w-[5 bg-violet-400 rounded-full z-[2]" style={{boxShadow: '0 0 10px rgba(139, 92, 246, 0.8)', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite'}}></div>
<div className="flex flex-col hover:bg-white/10 transition-all duration-300 z-10 bg-neutral-900/30 h-full rounded-3xl backdrop-blur" style={{background: 'radial-gradient(circle 280px at 0% 0%, rgba(68, 68, 68, 0.3), #0c0d0d)', border: '1px solid #202222'}}>
<div className="blur-[10px] opacity-40 w-[220px] h-[45px] rounded-full absolute top-0 left-0" style={{backgroundColor: 'rgba(139, 92, 246, 0.3)', boxShadow: '0 0 50px rgba(139, 92, 246, 0.5)', transform: 'rotate(40deg)', transformOrigin: '10%'}}></div>
<div className="overflow-hidden rounded-t-3xl relative">
<div className="sm:h-64 h-56">
<div className="w-full h-full pt-6 pr-6 pb-6 pl-6 relative">
<div className="pt-14 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0">
<div className="w-px bg-gradient-to-b from-violet-500 via-indigo-500 to-transparent absolute top-6 bottom-6 left-[30px]"></div>
<div className="relative space-y-6">
<div className="flex items-center gap-4">
<div className="h-3 w-3 rounded-full bg-violet-500 ring-4 ring-violet-500/20" style={{}}></div>
<div className="flex-1 bg-white/5 ring-white/10 ring-1 rounded-lg pt-2 pr-3 pb-2 pl-3">
<div className="text-xs text-white font-medium">Q1 Launch</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="h-3 w-3 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20" style={{}}></div>
<div className="flex-1 rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-2" style={{}}>
<div className="text-xs text-white font-medium">Beta Testing</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="h-3 w-3 rounded-full bg-blue-500 ring-4 ring-blue-500/20" style={{}}></div>
<div className="flex-1 rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-2" style={{}}>
<div className="text-xs text-white font-medium">Feature Complete</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="sm:p-8 z-10 pt-6 pr-6 pb-6 pl-6 relative space-y-3" style={{maskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="flex items-center gap-2">
<svg className="lucide lucide-map h-5 w-5 text-violet-300" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
<span className="text-sm text-neutral-300" style={{}}>Visual planning</span>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-white">Interactive roadmaps</h2>
<p className="text-sm leading-relaxed text-neutral-300" style={{}}>
                  Plan quarters ahead with drag-and-drop roadmaps. Share timelines with stakeholders and keep everyone aligned on what's next.
                </p>
<div className="flex gap-3 mt-3 gap-x-3 gap-y-3 items-center">
<span className="inline-flex items-center gap-1.5 rounded-md bg-violet-400/10 px-2 py-1 text-xs text-violet-300 ring-1 ring-violet-400/20" style={{}}>
<svg className="lucide lucide-gantt-chart h-3.5 w-3.5" data-lucide="gantt-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 5h12"></path><path d="M4 12h10"></path><path d="M12 19h8"></path></svg>
                    Gantt charts
                  </span>
<span className="inline-flex items-center gap-1.5 rounded-md bg-indigo-400/10 px-2 py-1 text-xs text-indigo-300 ring-1 ring-indigo-400/20" style={{}}>
<svg className="lucide lucide-calendar-range h-3.5 w-3.5" data-lucide="calendar-range" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M16 2v4"></path><path d="M3 10h18"></path><path d="M8 2v4"></path><path d="M17 14h-6"></path><path d="M13 18H7"></path><path d="M7 14h.01"></path><path d="M17 18h.01"></path></svg>
                    Milestones
                  </span>
</div>
</div>
<div className="w-full h-[1px] absolute" style={{top: '4%', background: 'linear-gradient(90deg, rgba(136, 136, 136, 0.3) 10%, #1d1f1f 70%)', maskImage: 'linear-gradient(180deg, transparent, black 0%, black 65%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 65%, transparent)'}}></div>
</div>
</div>
<div className="rounded-3xl pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, rgba(99, 102, 241, 0.4), #0c0d0d)', maskImage: 'linear-gradient(170deg, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(170deg, transparent, black 0%, black 80%, transparent)'}}>
<div className="z-[1] flex flex-col hover:bg-white/10 transition-all duration-300 bg-neutral-900/40 h-full border-neutral-800/70 border ring-white/5 ring-1 rounded-3xl shadow-2xl backdrop-blur" style={{background: 'radial-gradient(280px at 0% 0%, rgba(68, 68, 68, 0.3), rgb(12, 13, 13))', border: '1px solid rgb(32, 34, 34)'}}>
<div className="absolute blur-[10px] top-0 left-0 opacity-40 w-[220px] h-[45px] rounded-full" style={{backgroundColor: 'rgba(99, 102, 241, 0.3)', boxShadow: 'rgba(99, 102, 241, 0.5) 0px 0px 50px', transform: 'rotate(40deg)', transformOrigin: '10% center'}}></div>
<div className="pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] rounded-3xl absolute top-0 right-0 bottom-0 left-0" style={{}}>
<svg aria-hidden="true" className="absolute inset-0 h-full w-full opacity-[0.08]" style={{}}>
<defs>
<pattern height="48" id="grid" patternunits="userSpaceOnUse" width="48">
<path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="sm:p-6 lg:p-8 flex-1 flex flex-col pt-5 pr-5 pb-5 pl-5 relative">
<div className="relative mx-auto max-w-2xl flex-1">
<div className="absolute left-1/2 top-6 -translate-x-1/2 h-[220px] sm:h-[230px]">
<div className="mx-auto h-full w-px bg-gradient-to-b from-neutral-700/60 via-neutral-700/30 to-neutral-700/60" style={{}}></div>
</div>
<div className="relative z-10 mx-auto w-full max-w-xl rounded-2xl border border-neutral-800/80 bg-neutral-900/70 px-4 py-3 sm:px-5 sm:py-4 shadow-lg" style={{}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2.5">
<span className="inline-flex items-center justify-center bg-slate-50/5 w-6 h-6 ring-indigo-500/30 ring-1 rounded-md">
<svg className="lucide lucide-users h-3.5 w-3.5 text-indigo-300" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</span>
<span className="text-white font-medium">Your team</span>
</div>
<span className="absolute -top-3 left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-neutral-800 ring-2 ring-neutral-700" style={{}}></span>
</div>
<div className="bg-neutral-900/60 border-neutral-800/80 border rounded-xl mt-3 pt-3 pr-3 pb-3 pl-3">
<div className="flex items-center gap-2 text-neutral-300" style={{}}>
<div className="flex text-xs font-semibold text-white bg-slate-50/5 w-6 h-6 rounded-full items-center justify-center">S</div>
<span className="text-sm">Sarah · Engineering</span>
</div>
<div className="mt-2 flex items-center gap-2 text-neutral-300" style={{}}>
<div className="flex text-xs font-semibold text-white bg-slate-50/5 w-6 h-6 rounded-full items-center justify-center">M</div>
<span className="text-sm">Marcus · Design</span>
</div>
<div className="mt-2 flex items-center gap-2 text-neutral-300" style={{}}>
<div className="flex text-xs font-semibold text-white bg-slate-50/5 w-6 h-6 rounded-full items-center justify-center">J</div>
<span className="text-sm">Jessica · Product</span>
</div>
</div>
<span className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-neutral-800 ring-2 ring-neutral-700" style={{}}></span>
</div>
<div className="relative z-10 mx-auto mt-14 w-full max-w-md rounded-2xl border border-neutral-800/80 bg-neutral-900/70 px-4 py-3 shadow-lg" style={{}}>
<div className="flex items-center gap-2.5">
<span className="inline-flex items-center justify-center bg-slate-50/5 w-6 h-6 ring-emerald-500/30 ring-1 rounded-md">
<svg className="lucide lucide-radio h-3.5 w-3.5 text-emerald-300" data-lucide="radio" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16.247 7.761a6 6 0 0 1 0 8.478"></path><path d="M19.075 4.933a10 10 0 0 1 0 14.134"></path><path d="M4.925 19.067a10 10 0 0 1 0-14.134"></path><path d="M7.753 16.239a6 6 0 0 1 0-8.478"></path><circle cx="12" cy="12" r="2"></circle></svg>
</span>
<div className="flex-1">
<p className="text-white font-medium">Real-time sync</p>
<p className="text-[13px] text-neutral-400" style={{}}>Live updates across devices</p>
</div>
</div>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 relative z-10">
<div className="flex gap-2">
<button className="inline-flex hover:bg-neutral-100 active:bg-neutral-200 transition text-sm font-medium text-neutral-900 tracking-tight bg-white rounded-lg pt-2 pr-3.5 pb-2 pl-3.5 items-center justify-center">
<svg className="lucide lucide-users-round mr-2 h-4 w-4" data-lucide="users-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 21a8 8 0 0 0-16 0"></path><circle cx="10" cy="8" r="5"></circle><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path></svg>Invite team</button>
<button className="inline-flex hover:bg-neutral-900 transition text-sm text-neutral-200 bg-neutral-900 border-neutral-800 border rounded-lg px-3.5 py-2 items-center justify-center">
<svg className="lucide lucide-settings mr-2 h-4 w-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
                      Permissions
                    </button>
</div>
</div>
</div>
<div className="absolute w-full h-[1px]" style={{top: '10%', background: 'linear-gradient(90deg, rgba(136, 136, 136, 0.3) 30%, #1d1f1f 70%)'}}></div>
<div className="absolute w-[1px] h-full" style={{left: '10%', background: 'linear-gradient(180deg, rgba(116, 116, 116, 0.3) 30%, #222424 70%)'}}></div>
<div className="absolute w-full h-[1px] bg-[#2c2c2c]" style={{bottom: '10%'}}></div>
<div className="absolute w-[1px] h-full bg-[#2c2c2c]" style={{right: '10%'}}></div>
</div>
</div>
<div className="z-10 rounded-3xl pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, rgba(139, 92, 246, 0.4), #0c0d0d)', maskImage: 'linear-gradient(140deg, transparent, black 0%, black 50%, transparent)', WebkitMaskImage: 'linear-gradient(140deg, transparent, black 0%, black 50%, transparent)'}}>
<div className="shadow-black/40 hover:bg-white/10 transition-all duration-300 z-10 bg-white/5 rounded-3xl shadow-2xl backdrop-blur" style={{background: 'radial-gradient(280px at 0% 0%, rgba(68, 68, 68, 0.3), rgb(12, 13, 13))', border: '1px solid rgb(32, 34, 34)'}}>
<div className="blur-[10px] opacity-40 w-[220px] h-[45px] rounded-full absolute top-0 left-0" style={{backgroundColor: 'rgba(139, 92, 246, 0.3)', boxShadow: 'rgba(139, 92, 246, 0.5) 0px 0px 50px', transform: 'rotate(40deg)', transformOrigin: '10% center'}}></div>
<div className="sm:p-6 z-10 border-white/10 border-b pt-5 pr-5 pb-5 pl-5 relative">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center ring-1 ring-inset ring-white/15" style={{}}>
<svg className="lucide lucide-sparkles w-5 h-5 text-white/80" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="text-[20px] sm:text-[22px] font-semibold tracking-tight text-white">
                      AI sprint planning
                    </h3>
</div>
<div className="flex items-center gap-2 text-violet-400" style={{}}>
<svg className="lucide lucide-zap w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
</div>
<div className="mt-4 space-y-2.5">
<div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3" style={{}}>
<svg className="lucide lucide-lightbulb mt-0.5 w-[24px] h-[24px] text-[#ffffff]/60" data-icon-replaced="true" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
<div className="flex-1">
<p className="text-sm text-white/90 font-medium">
                        Analyzed backlog: <span className="text-white">43 items</span>
</p>
<p className="text-[13px] text-white/60">Grouped by priority and complexity</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-3.5 py-3" style={{}}>
<svg className="lucide lucide-list-checks text-[#ffffff]/60 w-[24px] h-[24px] mt-0.5" data-icon-replaced="true" data-lucide="list-checks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 5h8"></path><path d="M13 12h8"></path><path d="M13 19h8"></path><path d="m3 17 2 2 4-4"></path><path d="m3 7 2 2 4-4"></path></svg>
<div className="flex-1">
<p className="text-sm text-white/80 font-medium">Suggested 27 tasks for Sprint 13</p>
<p className="text-[13px] text-white/55">Balanced across team capacity</p>
</div>
</div>
</div>
</div>
<div className="sm:px-6 sm:py-5 z-10 border-white/10 border-b pt-4 pr-5 pb-4 pl-5 relative">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-white/7 flex items-center justify-center ring-1 ring-inset ring-white/12" style={{}}>
<svg className="lucide lucide-target w-5 h-5 text-white/70" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<p className="text-[18px] font-medium text-white/80">Auto-prioritize</p>
</div>
<div className="flex items-center gap-2 text-white/40">
<svg className="lucide lucide-check-circle w-5 h-5 text-emerald-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
</div>
<div className="mt-3 ml-[52px] space-y-2">
<div className="flex items-center gap-2 text-[13px] text-white/55">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" style={{}}></span>
                    High-impact features ranked first
                  </div>
<div className="flex items-center gap-2 text-[13px] text-white/55">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" style={{}}></span>
                    Dependencies mapped automatically
                  </div>
</div>
</div>
<div className="sm:p-7 mt-7 mb-0 pt-6 pr-6 pb-6 pl-6 relative z-10">
<div className="flex flex-wrap gap-3 mt-5 items-center">
<button className="inline-flex gap-2 hover:bg-white/90 transition text-xs font-medium text-neutral-900 bg-white rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 shadow-sm items-center" style={{}}>
<svg className="lucide lucide-play w-4.5 h-4.5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
                    Try AI planning
                  </button>
<button className="inline-flex gap-2 hover:bg-white/15 ring-1 ring-inset ring-white/15 transition text-xs font-medium text-white bg-white/10 rounded-xl pt-3.5 pr-4 pb-3.5 pl-4 items-center" style={{}}>
                    Learn more
                  </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section><section className="z-10 relative">
<div className="sm:px-6 lg:px-8 max-w-6xl mr-auto ml-auto pt-20 pr-4 pb-20 pl-4">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-200 backdrop-blur mb-6">
<svg className="h-3.5 w-3.5 text-violet-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
        Integrations
      </div>
<h2 className="sm:text-4xl text-3xl font-semibold text-white tracking-tight">Works with your favorite tools</h2>
<p className="mt-3 text-base text-zinc-300">Connect Nova with the tools you already use every day</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-6 gap-y-6">
<div className="integration-card z-10 rounded-2xl pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, rgba(113, 113, 122, 0.4), #0c0d0d)'}}>
<div className="animated-dot bg-zinc-400 w-[5px] h-[5px] z-[2] rounded-full absolute" style={{boxShadow: 'rgba(139, 92, 246, 0.8) 0px 0px 10px', right: '10%', top: '10%', animation: '6s linear 0s infinite normal none paused moveDot'}}></div>
<div className="hover:bg-white/10 transition-all duration-300 group z-[1] bg-white/5 h-full rounded-2xl pt-7 pr-9 pb-7 pl-9 relative backdrop-blur" style={{background: 'radial-gradient(circle 280px at 0% 0%, rgba(68, 68, 68, 0.3), #0c0d0d)', border: '1px solid #202222'}}>
<div className="blur-[10px] z-10 opacity-40 w-[220px] h-[45px] rounded-full absolute top-0 left-0" style={{backgroundColor: 'rgba(113, 113, 122, 0.3)', boxShadow: '0 0 50px rgba(113, 113, 122, 0.5)', transform: 'rotate(40deg)', transformOrigin: '10%'}}></div>
<div className="flex z-10 relative items-start justify-between">
<div className="flex w-12 h-12 rounded-xl items-center justify-center">
<svg className="w-[24px] h-[24px] text-slate-400" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</div>
<span className="inline-flex items-center gap-1.5 text-xs text-zinc-300 bg-zinc-400/10 ring-zinc-400/20 ring-1 rounded-md pt-1 pr-2 pb-1 pl-2">
<svg className="h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path className="" d="m9 11 3 3L22 4"></path></svg>
              Connected
            </span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-white relative z-10">GitHub</h3>
<p className="mt-1 text-sm text-zinc-400 relative z-10">Link pull requests to features. Auto-update task status when PRs merge.</p>
<div className="flex gap-2 z-10 mt-4 relative items-center">
<div className="flex -space-x-2">
<div className="w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d74688b7-be82-48a3-9cec-f76b3dab7664_320w.webp)] bg-cover bg-center ring-zinc-900 ring-2 rounded-full"></div>
<div className="w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7468f79a-0c70-4144-876e-c2b1838fef60_320w.webp)] bg-cover bg-center ring-zinc-900 ring-2 rounded-full"></div>
<div className="w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1c97346f-367a-4525-88c9-983c427260ae_320w.webp)] bg-cover bg-center ring-zinc-900 ring-2 rounded-full"></div>
</div>
<span className="text-xs text-zinc-400">Used by 847 teams</span>
</div>
<div className="bg-slate-50/5 w-full h-[1px] absolute" style={{top: '10%', left: '0%', background: 'linear-gradient(90deg, rgba(136, 136, 136, 0.3) 30%, rgb(29, 31, 31) 70%)', maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)'}}></div>
<div className="bg-slate-50/5 w-[1px] h-full absolute" style={{left: '10%', top: '0%', background: 'linear-gradient(rgba(116, 116, 116, 0.3) 30%, rgb(34, 36, 36) 70%)', maskImage: 'linear-gradient(0deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 15%, black 85%, transparent)'}}></div>
<div className="bg-slate-50/5 w-full h-[1px] z-[1] absolute" style={{bottom: '10%', left: '0%', maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)'}}></div>
<div className="bg-[#ffffff]/5 w-[1px] h-full absolute" style={{right: '10%', top: '0%', maskImage: 'linear-gradient(0deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 15%, black 85%, transparent)'}}></div>
</div>
</div>
<div className="z-[1] integration-card rounded-2xl pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, rgba(113, 113, 122, 0.4), #0c0d0d)'}}>
<div className="z-[2] animated-dot bg-zinc-400 w-[5px] h-[5px] rounded-full absolute" style={{boxShadow: 'rgba(59, 130, 246, 0.8) 0px 0px 10px', right: '10%', top: '10%', animation: '6s linear 0s infinite normal none paused moveDot'}}></div>
<div className="hover:bg-white/10 transition-all duration-300 group z-[1] bg-white/5 h-full rounded-2xl pt-7 pr-9 pb-7 pl-9 relative backdrop-blur" style={{background: 'radial-gradient(circle 280px at 0% 0%, rgba(68, 68, 68, 0.3), #0c0d0d)', border: '1px solid #202222'}}>
<div className="blur-[10px] opacity-40 w-[220px] h-[45px] rounded-full absolute top-0 left-0" style={{backgroundColor: 'rgba(113, 113, 122, 0.3)', boxShadow: '0 0 50px rgba(113, 113, 122, 0.5)', transform: 'rotate(40deg)', transformOrigin: '10%'}}></div>
<div className="flex z-10 relative items-start justify-between">
<div className="flex w-12 h-12 rounded-xl items-center justify-center">
<svg className="w-[24px] h-[24px] text-slate-400" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><path d="m7.5 4.21 4.5 2.6 4.5-2.6"></path><path className="" d="M12 17.5V22"></path><path className="" d="M3.27 6.96 8 12.01 8 17"></path><path className="" d="M12 17.5V12l-5-3"></path></svg>
</div>
<span className="inline-flex items-center gap-1.5 rounded-md bg-zinc-400/10 px-2 py-1 text-xs text-zinc-300 ring-1 ring-zinc-400/20">
              Available
            </span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-white relative z-10">Slack</h3>
<p className="mt-1 text-sm text-zinc-400 relative z-10">Get notified about sprint updates, task assignments, and mentions in your channels.</p>
<div className="flex gap-2 z-10 mt-4 relative items-center">
<div className="flex -space-x-2">
<div className="w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/15654b26-7c5f-4651-ba85-3a208a386304_320w.webp)] bg-cover bg-center ring-zinc-900 ring-2 rounded-full"></div>
<div className="w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9fe835bd-f1a4-4aed-ade9-38038cdd0542_320w.webp)] bg-cover bg-center ring-zinc-900 ring-2 rounded-full"></div>
</div>
<span className="text-xs text-zinc-400">Used by 623 teams</span>
</div>
<div className="w-full h-[1px] absolute" style={{top: '10%', left: '0%', background: 'linear-gradient(90deg, rgba(136, 136, 136, 0.3) 30%, #1d1f1f 70%)', maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)'}}></div>
<div className="w-[1px] h-full absolute" style={{left: '10%', top: '0%', background: 'linear-gradient(180deg, rgba(116, 116, 116, 0.3) 30%, #222424 70%)', maskImage: 'linear-gradient(0deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 15%, black 85%, transparent)'}}></div>
<div className="bg-slate-50/5 w-full h-[1px] absolute" style={{bottom: '10%', left: '0%', maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)'}}></div>
<div className="bg-slate-50/5 w-[1px] h-full absolute" style={{right: '10%', top: '0%', maskImage: 'linear-gradient(180deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 15%, black 85%, transparent)'}}></div>
</div>
</div>
<div className="z-[1] integration-card rounded-2xl pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, rgba(113, 113, 122, 0.4), #0c0d0d)'}}>
<div className="z-[2] animated-dot bg-zinc-400 w-[5px] h-[5px] rounded-full absolute" style={{boxShadow: '0 0 10px rgba(167, 139, 250, 0.8)', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite', animationPlayState: 'paused'}}></div>
<div className="hover:bg-white/10 transition-all duration-300 group z-[1] bg-white/5 h-full rounded-2xl pt-7 pr-9 pb-7 pl-9 relative backdrop-blur" style={{background: 'radial-gradient(circle 280px at 0% 0%, rgba(68, 68, 68, 0.3), #0c0d0d)', border: '1px solid #202222'}}>
<div className="blur-[10px] opacity-40 w-[220px] h-[45px] rounded-full absolute top-0 left-0" style={{backgroundColor: 'rgba(113, 113, 122, 0.3)', boxShadow: '0 0 50px rgba(113, 113, 122, 0.5)', transform: 'rotate(40deg)', transformOrigin: '10%'}}></div>
<div className="flex items-start justify-between relative z-10">
<div className="flex w-12 h-12 rounded-xl items-center justify-center">
<svg className="w-[24px] h-[24px] text-slate-400" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path className="" d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path className="" d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path className="" d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path className="" d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
</div>
<span className="inline-flex items-center gap-1.5 text-xs text-zinc-300 bg-zinc-400/10 ring-zinc-400/20 ring-1 rounded-md pt-1 pr-2 pb-1 pl-2">
<svg className="h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
              Connected
            </span>
</div>
<h3 className="z-10 text-lg font-semibold text-white tracking-tight mt-4 relative">Figma</h3>
<p className="mt-1 text-sm text-zinc-400 relative z-10">Embed designs in tasks. Keep mockups and implementation in sync automatically.</p>
<div className="flex gap-2 z-10 mt-4 relative items-center">
<div className="flex -space-x-2">
<div className="w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8e2b95ff-a165-434a-bdc9-cdb963c750e9_320w.webp)] bg-cover bg-center ring-zinc-900 ring-2 rounded-full"></div>
<div className="w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ce224171-c77b-4f9d-bcb4-78d291d25746_320w.webp)] bg-cover bg-center ring-zinc-900 ring-2 rounded-full"></div>
<div className="w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ed0e64fa-763f-438b-9101-248ccb06c3b0_320w.webp)] bg-cover bg-center ring-zinc-900 ring-2 rounded-full"></div>
</div>
<span className="text-xs text-zinc-400">Used by 512 teams</span>
</div>
<div className="w-full h-[1px] absolute" style={{top: '10%', left: '0%', background: 'linear-gradient(90deg, rgba(136, 136, 136, 0.3) 30%, #1d1f1f 70%)', maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)'}}></div>
<div className="w-[1px] h-full absolute" style={{left: '10%', top: '0%', background: 'linear-gradient(180deg, rgba(116, 116, 116, 0.3) 30%, #222424 70%)', maskImage: 'linear-gradient(0deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 15%, black 85%, transparent)'}}></div>
<div className="bg-slate-50/5 w-full h-[1px] absolute" style={{bottom: '10%', left: '0%', maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)'}}></div>
<div className="bg-slate-50/5 w-[1px] h-full absolute" style={{right: '10%', top: '0%', maskImage: 'linear-gradient(0deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 15%, black 85%, transparent)'}}></div>
</div>
</div>
<div className="z-[1] integration-card rounded-2xl pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, rgba(113, 113, 122, 0.4), #0c0d0d)'}}>
<div className="z-[2] animated-dot bg-zinc-400 w-[5px] h-[5px] rounded-full absolute" style={{boxShadow: '0 0 10px rgba(249, 115, 22, 0.8)', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite', animationPlayState: 'paused'}}></div>
<div className="hover:bg-white/10 transition-all duration-300 group z-[1] bg-white/5 h-full rounded-2xl pt-7 pr-9 pb-7 pl-9 relative backdrop-blur" style={{background: 'radial-gradient(circle 280px at 0% 0%, rgba(68, 68, 68, 0.3), #0c0d0d)', border: '1px solid #202222', maskImage: 'linear-gradient(90deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="blur-[10px] opacity-40 w-[220px] h-[45px] z-10 rounded-full absolute top-0 left-0" style={{backgroundColor: 'rgba(113, 113, 122, 0.3)', boxShadow: '0 0 50px rgba(113, 113, 122, 0.5)', transform: 'rotate(40deg)', transformOrigin: '10%'}}></div>
<div className="flex z-10 relative items-start justify-between">
<div className="flex w-12 h-12 rounded-xl items-center justify-center">
<svg className="w-[24px] h-[24px] text-slate-400" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect className="" height="18" rx="2" width="18" x="3" y="3"></rect><path className="" d="M9 3v18"></path></svg>
</div>
<span className="inline-flex items-center gap-1.5 text-xs text-zinc-300 bg-zinc-400/10 ring-zinc-400/20 ring-1 rounded-md pt-1 pr-2 pb-1 pl-2">
              Available
            </span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-white relative z-10">Notion</h3>
<p className="z-10 text-sm text-zinc-400 mt-1 relative">Sync roadmaps with your team docs. Two-way updates keep everyone aligned.</p>
<div className="flex gap-2 z-10 mt-4 relative items-center">
<div className="flex -space-x-2">
<div className="w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5ad0226f-b99c-4dd2-af42-ef28d1218fc2_320w.webp)] bg-cover bg-center ring-zinc-900 ring-2 rounded-full"></div>
<div className="w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f6b5dd2c-270e-4d8c-999d-e80c1fd8ce4f_320w.webp)] bg-cover bg-center ring-zinc-900 ring-2 rounded-full"></div>
</div>
<span className="text-xs text-zinc-400">Used by 389 teams</span>
</div>
<div className="w-full h-[1px] absolute" style={{top: '10%', left: '0%', background: 'linear-gradient(90deg, rgba(136, 136, 136, 0.3) 30%, #1d1f1f 70%)', maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)'}}></div>
<div className="w-[1px] h-full absolute" style={{left: '10%', top: '0%', background: 'linear-gradient(rgba(116, 116, 116, 0.3) 30%, rgb(34, 36, 36) 70%)', maskImage: 'linear-gradient(transparent, black 15%, black 85%, transparent)'}}></div>
<div className="bg-slate-50/5 w-full h-[1px] absolute" style={{bottom: '10%', left: '0%', maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)'}}></div>
<div className="bg-slate-50/5 w-[1px] h-full z-10 absolute" style={{right: '10%', top: '0%', maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)'}}></div>
</div>
</div>
<div className="z-[1] integration-card rounded-2xl pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative" style={{background: 'radial-gradient(230px at 0% 0%, rgba(113, 113, 122, 0.4), rgb(12, 13, 13))'}}>
<div className="z-[2] animated-dot bg-zinc-400 w-[5px] h-[5px] rounded-full absolute" style={{boxShadow: 'rgba(168, 85, 247, 0.8) 0px 0px 10px', right: '10%', top: '10%', animation: '6s linear 0s infinite normal none paused moveDot'}}></div>
<div className="hover:bg-white/10 transition-all duration-300 group z-[1] bg-white/5 h-full rounded-2xl pt-7 pr-9 pb-7 pl-9 relative backdrop-blur" style={{background: 'radial-gradient(280px at 0% 0%, rgba(68, 68, 68, 0.3), rgb(12, 13, 13))', border: '1px solid rgb(32, 34, 34)'}}>
<div className="blur-[10px] opacity-40 w-[220px] h-[45px] z-10 rounded-full absolute top-0 left-0" style={{backgroundColor: 'rgba(113, 113, 122, 0.3)', boxShadow: '0 0 50px rgba(113, 113, 122, 0.5)', transform: 'rotate(40deg)', transformOrigin: '10%'}}></div>
<div className="flex items-start justify-between relative z-10">
<div className="flex w-12 h-12 rounded-xl items-center justify-center">
<svg className="text-slate-400 w-[24px] h-[24px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 7h-9"></path><path className="" d="M14 17H5"></path><circle className="" cx="17" cy="17" r="3"></circle><circle className="" cx="7" cy="7" r="3"></circle></svg>
</div>
<span className="inline-flex items-center gap-1.5 rounded-md bg-zinc-400/10 px-2 py-1 text-xs text-zinc-300 ring-1 ring-zinc-400/20">
              Available
            </span>
</div>
<h3 className="z-10 text-lg font-semibold text-white tracking-tight mt-4 relative">Linear</h3>
<p className="mt-1 text-sm text-zinc-400 relative z-10">Import existing issues and sync status. Maintain your Linear workflow seamlessly.</p>
<div className="flex gap-2 z-10 mt-4 relative items-center">
<div className="flex -space-x-2">
<div className="w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c61ae90a-e493-4cce-bea2-a162a411950f_320w.webp)] bg-cover bg-center ring-zinc-900 ring-2 rounded-full"></div>
<div className="w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e6dafb6e-9b5b-48fb-91ee-fc60ed98224a_320w.webp)] bg-cover bg-center rounded-full ring-zinc-900 ring-2"></div>
</div>
<span className="text-xs text-zinc-400">Used by 294 teams</span>
</div>
<div className="w-full h-[1px] absolute" style={{top: '10%', left: '0%', background: 'linear-gradient(90deg, rgba(136, 136, 136, 0.3) 30%, #1d1f1f 70%)', maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)'}}></div>
<div className="w-[1px] h-full absolute" style={{left: '10%', top: '0%', background: 'linear-gradient(180deg, rgba(116, 116, 116, 0.3) 30%, #222424 70%)', maskImage: 'linear-gradient(360deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(360deg, transparent, black 15%, black 85%, transparent)'}}></div>
<div className="bg-slate-50/5 w-full h-[1px] absolute" style={{bottom: '10%', left: '0%', maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)'}}></div>
<div className="bg-slate-50/5 w-[1px] h-full absolute" style={{right: '10%', top: '0%', maskImage: 'linear-gradient(0deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 15%, black 85%, transparent)'}}></div>
</div>
</div>
<div className="z-[1] integration-card rounded-2xl pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, rgba(113, 113, 122, 0.4), #0c0d0d)'}}>
<div className="z-[2] animated-dot bg-zinc-400 w-[5px] h-[5px] rounded-full absolute" style={{boxShadow: '0 0 10px rgba(113, 113, 122, 0.8)', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite', animationPlayState: 'paused'}}></div>
<div className="hover:bg-white/10 transition-all duration-300 group z-[1] bg-white/5 h-full rounded-2xl pt-7 pr-9 pb-7 pl-9 relative backdrop-blur" style={{background: 'radial-gradient(circle 280px at 0% 0%, rgba(68, 68, 68, 0.3), #0c0d0d)', border: '1px solid #202222'}}>
<div className="blur-[10px] opacity-40 w-[220px] h-[45px] rounded-full absolute top-0 left-0" style={{backgroundColor: 'rgba(113, 113, 122, 0.3)', boxShadow: '0 0 50px rgba(113, 113, 122, 0.5)', transform: 'rotate(40deg)', transformOrigin: '10%'}}></div>
<div className="flex z-10 relative items-start justify-between">
<div className="flex w-12 h-12 rounded-xl items-center justify-center">
<svg className="w-[24px] h-[24px] text-slate-400" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<span className="inline-flex items-center gap-1.5 text-xs text-zinc-300 bg-zinc-400/10 ring-zinc-400/20 ring-1 rounded-md pt-1 pr-2 pb-1 pl-2">
<svg className="h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
              API
            </span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-white relative z-10">Custom Integration</h3>
<p className="mt-1 text-sm text-zinc-400 relative z-10">Build your own integration with our REST API and webhooks. Full documentation included.</p>
<div className="flex gap-2 z-10 mt-4 relative items-center">
<a className="text-xs text-zinc-400" href="#">
              View API docs
              <svg className="h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="w-full h-[1px] absolute" style={{top: '10%', left: '0%', background: 'linear-gradient(90deg, rgba(136, 136, 136, 0.3) 30%, #1d1f1f 70%)', maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)'}}></div>
<div className="w-[1px] h-full z-[1] absolute" style={{left: '10%', top: '0%', background: 'linear-gradient(180deg, rgba(116, 116, 116, 0.3) 30%, #222424 70%)', maskImage: 'linear-gradient(0deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 15%, black 85%, transparent)'}}></div>
<div className="bg-[#2c2c2c] w-full h-[1px] absolute" style={{bottom: '10%', left: '0%', maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)'}}></div>
<div className="bg-[#2c2c2c] w-[1px] h-full absolute" style={{right: '10%', top: '0%', maskImage: 'linear-gradient(10deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(10deg, transparent, black 15%, black 85%, transparent)'}}></div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-sm text-zinc-400 mb-4">Need another integration?</p>
<button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
        Request integration
      </button>
</div>
<style className="">
      @keyframes moveDot {
        0%, 100% {
          top: 10%;
          right: 10%;
        }
        25% {
          top: 10%;
          right: calc(100% - 35px);
        }
        50% {
          top: calc(100% - 30px);
          right: calc(100% - 35px);
        }
        75% {
          top: calc(100% - 30px);
          right: 10%;
        }
      }
      
      .integration-card:hover .animated-dot {
        animation-play-state: running !important;
      }
    </style>
</div>
</section>

<section className="relative">
<div className="sm:px-6 lg:px-8 max-w-6xl mr-auto ml-auto pr-4 pb-8 pl-4">
<div className="grid gap-10 pt-4 md:grid-cols-12 md:gap-8 md:pt-8">
<div className="md:col-span-7 lg:col-span-8">
<h1 className="leading-tight sm:text-6xl lg:text-7xl text-5xl font-semibold text-white tracking-tight font-sans">
<span className="block bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-600 pt-0 pb-3" style={{maskImage: 'linear-gradient(90deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 0%, black 100%, transparent)'}}>Plan smart.</span>
<span className="block bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-600 pt-0 pb-3" style={{}}>Build faster.</span>
</h1>
<div className="mt-6 flex items-center gap-4 text-sm text-slate-300" style={{}}>
<div className="flex items-center gap-2 font-sans">
<svg className="lucide lucide-zap h-4 w-4 text-violet-300" data-lucide="zap" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                AI-powered
              </div>
<div className="h-px w-24 bg-white/10" style={{}}></div>
<div className="flex items-center gap-2 font-sans">
<svg className="lucide lucide-users h-4 w-4 text-violet-300" data-lucide="users" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                Team collaboration
              </div>
</div>
</div>
<div className="md:col-span-5 lg:col-span-4">
<p className="text-base leading-relaxed text-slate-300 font-sans" style={{}}>Turn ideas into shipped features. Plan sprints, track progress, and collaborate seamlessly—all in one powerful workspace.</p>
<div className="mt-6 flex items-center gap-3">
<button className="inline-flex items-center gap-2 shadow-violet-900/25 text-sm font-semibold text-white bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-lg transform-gpu transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-6px_rgba(139,92,246,0.4)] hover:scale-[1.02] active:scale-[0.98] active:duration-75" style={{}}>Start free trial<svg className="lucide lucide-arrow-right w-[16px] h-[16px]" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button>
<button className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-zinc-200 hover:bg-white/5 border border-white/10" style={{}}>Watch demo<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg></button>
</div>
</div>
</div>
<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-10">
<article className="relative overflow-hidden ring-1 ring-white/10 bg-white/5 rounded-3xl p-4 shadow-sm backdrop-blur" style={{}}>
<div className="flex items-start justify-between">
<span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-200 font-sans" style={{}}>Popular</span>
<button aria-label="Open" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10" style={{}}>
<svg className="lucide lucide-expand h-4 w-4" data-lucide="expand" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m15 15 6 6"></path><path d="m15 9 6-6"></path><path d="M21 16v5h-5"></path><path d="M21 8V3h-5"></path><path d="M3 16v5h5"></path><path d="m3 21 6-6"></path><path d="M3 8V3h5"></path><path d="M9 9 3 3"></path></svg>
</button>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-white font-sans">Sprint planning</h3>
<p className="text-sm text-slate-300 mt-1" style={{}}>Organize features into sprints. Track velocity and team capacity.</p>
<div className="mt-4 overflow-hidden rounded-2xl">
<img alt="planning board" className="aspect-[3/4] w-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/29dd441c-b152-4b38-9344-09c4c69cf4d3_800w.webp"/>
</div>
</article>
<article className="relative overflow-hidden ring-1 ring-white/10 bg-white/5 rounded-3xl p-4 shadow-sm backdrop-blur" style={{}}>
<div className="flex items-start justify-between">
<span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-200 font-sans" style={{}}>Real-time</span>
<button aria-label="Open" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10" style={{}}>
<svg className="lucide lucide-users h-4 w-4" data-lucide="users" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</button>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-white font-sans">Team collaboration</h3>
<p className="text-sm text-slate-300 mt-1" style={{}}>Work together seamlessly. Live cursors, comments, and updates.</p>
<div className="mt-4 overflow-hidden rounded-2xl">
<img alt="team working" className="aspect-[3/4] w-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4affdc79-17b4-44eb-bcc9-3e1e2650e990_800w.webp"/>
</div>
</article>
<article className="relative overflow-hidden ring-1 ring-white/10 bg-white/5 rounded-3xl p-4 shadow-sm backdrop-blur" style={{}}>
<div className="flex items-start justify-between">
<span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-200 font-sans" style={{}}>Insights</span>
<button aria-label="Open" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10" style={{}}>
<svg className="lucide lucide-trending-up h-4 w-4" data-lucide="trending-up" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</button>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-white font-sans">Analytics dashboard</h3>
<p className="mt-1 text-sm text-slate-300 font-sans" style={{}}>Track progress with burndown charts, velocity metrics, and forecasts.</p>
<div className="mt-4 overflow-hidden rounded-2xl">
<img alt="analytics" className="aspect-[3/4] w-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8da12aa0-5f07-423e-a3f5-4f8d175fe2a5_1600w.webp"/>
</div>
</article>
</div>
</div>
</section><section className="z-10 relative">
<div className="max-w-6xl sm:px-6 lg:px-8 mr-auto ml-auto pt-20 pr-4 pb-20 pl-4">
<div className="text-center mb-12">
<h2 className="sm:text-4xl text-3xl font-semibold text-white tracking-tight">Trusted by innovative teams</h2>
<p className="mt-3 text-base text-zinc-300">Join thousands of product teams shipping faster with Nova</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="ring-1 ring-white/10 bg-white/5 rounded-2xl p-6 backdrop-blur hover:bg-white/10 transition-all duration-300">
<div className="flex items-start gap-4">
<div className="flex flex-shrink-0 bg-slate-50/5 w-12 h-12 rounded-xl items-center justify-center">
<svg className="h-6 w-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20M2 12h20"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-semibold tracking-tight text-white">TechFlow Inc</h3>
<p className="mt-2 text-sm text-zinc-400">"Nova transformed how we plan sprints. Our team velocity increased by 40% in just two quarters."</p>
<div className="mt-4 flex items-center gap-3">
<div className="w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/029a3dbc-6c87-4223-b3c1-e98710044e50_320w.webp)] bg-cover bg-center rounded-full"></div>
<div className="">
<p className="text-sm font-medium text-white">Sarah Chen</p>
<p className="text-xs text-zinc-400">VP of Engineering</p>
</div>
</div>
</div>
</div>
</div>
<div className="ring-1 ring-white/10 bg-white/5 rounded-2xl p-6 backdrop-blur hover:bg-white/10 transition-all duration-300">
<div className="flex items-start gap-4">
<div className="flex flex-shrink-0 bg-slate-50/5 w-12 h-12 rounded-xl items-center justify-center">
<svg className="h-6 w-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-semibold tracking-tight text-white">Pixel Studios</h3>
<p className="mt-2 text-sm text-zinc-400">"The roadmap visualization helped us align stakeholders and ship our biggest feature on time."</p>
<div className="mt-4 flex items-center gap-3">
<div className="bg-center w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e922b9a1-2ac4-4361-a852-37eedd0618d4_320w.webp)] bg-cover rounded-full"></div>
<div className="">
<p className="text-sm font-medium text-white">Marcus Rodriguez</p>
<p className="text-xs text-zinc-400">Head of Product</p>
</div>
</div>
</div>
</div>
</div>
<div className="ring-1 ring-white/10 bg-white/5 rounded-2xl p-6 backdrop-blur hover:bg-white/10 transition-all duration-300">
<div className="flex items-start gap-4">
<div className="flex flex-shrink-0 bg-slate-50/5 w-12 h-12 rounded-xl items-center justify-center">
<svg className="h-6 w-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-semibold tracking-tight text-white">CloudScale</h3>
<p className="mt-2 text-sm text-zinc-400">"AI sprint planning saves us hours every week. It's like having an extra product manager on the team."</p>
<div className="mt-4 flex items-center gap-3">
<div className="w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5225bc30-0a01-41cb-a743-72d80d0ebc8b_320w.webp)] bg-cover bg-center rounded-full"></div>
<div className="">
<p className="text-sm font-medium text-white">Jessica Park</p>
<p className="text-xs text-zinc-400">CTO</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
<div className="text-zinc-400 text-2xl font-semibold">Acme Corp</div>
<div className="text-zinc-400 text-2xl font-semibold">BuildFast</div>
<div className="text-zinc-400 text-2xl font-semibold">DevStream</div>
<div className="text-zinc-400 text-2xl font-semibold">NextGen</div>
</div>
</div>
</section>
<section className="relative z-10 mt-10">
<div className="max-w-5xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pb-20 pl-4">
<div className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/70 to-zinc-900/40 p-8 text-center backdrop-blur" style={{}}>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Ship your best work yet</h2>
<p className="mt-2 text-zinc-300" style={{}}>Start planning smarter today. Free for small teams.</p>
<div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
<a className="inline-flex items-center gap-2 shadow-violet-900/25 text-sm font-semibold text-white bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-lg transform-gpu transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-6px_rgba(139,92,246,0.4)] hover:scale-[1.02] active:scale-[0.98] active:duration-75" href="#" style={{}}>
              Start building
              <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-zinc-200 hover:bg-white/5" href="#" style={{}}>
              Talk to sales
              <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<footer className="relative z-10 border-t border-white/10">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-10 pr-4 pb-10 pl-4">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<span className="text-sm font-medium text-zinc-300" style={{}}>© 2025 Nova Labs</span>
</div>
<div className="flex items-center gap-4 text-sm text-zinc-400" style={{}}>
<a className="hover:text-zinc-200" href="#" style={{}}>Privacy</a>
<a className="hover:text-zinc-200" href="#" style={{}}>Terms</a>
<a className="hover:text-zinc-200" href="#" style={{}}>Status</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
