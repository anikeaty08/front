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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();

}

{

    (function(){const button = document.querySelector('.liquid-glass-button');if(button){button.addEventListener('click', function(e){const rect = this.getBoundingClientRect();const x = e.clientX - rect.left;const y = e.clientY - rect.top;const ripple = document.createElement('span');ripple.className = 'absolute rounded-full bg-gradient-radial from-white/30 to-transparent pointer-events-none animate-ping';ripple.style.left = x - 25 + 'px';ripple.style.top = y - 25 + 'px';ripple.style.width = '50px';ripple.style.height = '50px';ripple.style.animation = 'ripple 0.6s linear';this.appendChild(ripple);setTimeout(() => ripple.remove(), 600);});}})()
  
}

{

function toggleFAQ(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector('svg');
  
  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    icon.style.transform = 'rotate(180deg)';
  } else {
    content.classList.add('hidden');
    icon.style.transform = 'rotate(0deg)';
  }
}

}

{

      document.addEventListener("DOMContentLoaded", () => {
        if (window.lucide) lucide.createIcons();
        const year = document.getElementById("year");
        if (year) year.textContent = new Date().getFullYear();
      });
    
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
      <div className="aura-background-component top-0 w-full -z-10 absolute h-[1100px]"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="ZHhDKfVqqu8PKOSMwfuA"></div>
</div>

<header className="relative z-10">
<div className="w-full max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="flex sm:rounded-3xl sm:px-6 bg-neutral-900/60 border-white/10 border rounded-2xl mt-6 pt-3 pr-4 pb-3 pl-4 backdrop-blur-lg items-center justify-between">

<a className="flex items-center gap-3" href="#">
<span className="text-base font-semibold tracking-tight font-sans">AI Factory</span>
</a>

<nav className="hidden items-center gap-6 md:flex">
<a className="text-sm font-medium text-neutral-300 hover:text-white transition font-sans" href="#">Home</a>
<a className="text-sm font-medium text-neutral-300 hover:text-white transition font-sans" href="#">AI Solutions</a>
<a className="text-sm font-medium text-neutral-300 hover:text-white transition font-sans" href="#">Our Journey</a>
<a className="text-sm font-medium text-neutral-300 hover:text-white transition font-sans" href="#">Resources</a>
</nav>

<div className="flex gap-2 items-center">
<button className="hidden rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-neutral-200 backdrop-blur md:inline-flex hover:bg-white/5 transition font-sans">
              Join the Waitlist
            </button>
<button className="liquid-glass-button relative inline-flex items-center justify-center h-10 px-6 text-white/90 font-medium text-sm cursor-pointer outline-none overflow-hidden bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/15 shadow-lg hover:scale-105 hover:shadow-xl hover:-translate-y-0.5 active:scale-98 active:translate-y-px transition-all duration-300 ease-out rounded-full" style={{boxShadow: `0 0 6px rgba(0,0,0,0.03), 0 2px 6px rgba(0,0,0,0.08), inset 3px 3px 0.5px -3px rgba(255,255,255,0.2), inset -3px -3px 0.5px -3px rgba(255,255,255,0.1), inset 1px 1px 1px -0.5px rgba(255,255,255,0.3), inset -1px -1px 1px -0.5px rgba(255,255,255,0.15), inset 0 0 6px 6px rgba(255,255,255,0.05), inset 0 0 2px 2px rgba(255,255,255,0.02), 0 0 12px rgba(0,0,0,0.1)`}}>
<div className="absolute inset-0 overflow-hidden pointer-events-none rounded-full">
<div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-white/3 rounded-full"></div>
</div>
<span className="relative z-10 rounded-full">Sign Up</span>


</button>
</div>
</div>
</div>
</header>

<main className="relative z-10">
<section className="w-full max-w-7xl sm:px-6 lg:px-8 mt-24 mr-auto ml-auto pr-4 pl-4">
<div className="relative sm:p-10 pt-6 pr-6 pb-6 pl-6">

<div className="grid gap-10 md:grid-cols-2 items-center">

<div className="relative z-10">
<h1 className="max-w-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-4xl tracking-tighter" style={{display: `block`}}>
                        Transform your ideas <img alt="Alex portrait" className="inline-block align-middle h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 object-cover border rounded-xl mr-2 ml-2 border-white/10" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cdc38098-4521-4af7-99e5-b91c498bb746_320w.jpg" style={{display: `inline-block`}} /> into a <span className="bg-clip-text text-transparent tracking-tighter bg-gradient-to-r from-orange-300 to-white" style={{}}>product</span> <img alt="SaaS dashboard preview" className="inline-block align-middle h-10 w-12 sm:h-12 sm:w-16 md:h-14 md:w-20 object-cover border-white/10 border rounded-xl mr-2 ml-2" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/37d1d838-5d59-46f3-9c23-11f4f638ed9e_320w.jpg" /> with <span className="bg-clip-text text-transparent tracking-tighter bg-gradient-to-r from-white to-orange-300" style={{}}>AI</span>
</h1>
<p className="max-w-xl leading-relaxed text-base font-normal text-neutral-300 mt-5">
                Bridge the gap between AI research and reliable production deployment. Scale your AI initiatives with confidence through comprehensive evaluation, safety controls, and enterprise compliance.
              </p>
<div className="flex flex-col gap-3 sm:flex-row sm:items-center mt-8">
<a className="group inline-flex items-center gap-3 ring-1 ring-white/10 hover:bg-white/10 transition text-sm font-semibold text-white bg-white/5 rounded-full pt-2.5 pr-4 pb-2.5 pl-4 backdrop-blur-lg" href="#waitlist">
                  Join the Waitlist
                  <span className="inline-flex h-7 w-7 items-center justify-center group-hover:translate-x-0.5 transition text-neutral-900 bg-orange-300 rounded-full">
<svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</span>
</a>
<button className="inline-flex gap-2 hover:text-white transition text-sm font-medium text-neutral-300 rounded-full pt-2.5 pr-4 pb-2.5 pl-4 items-center font-sans">
<svg className="lucide lucide-play w-[16px] h-[16px] text-orange-300" data-icon-replaced="true" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `16px`, height: `16px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                  Watch Demo
                </button>
</div>

<div className="grid grid-cols-3 gap-4 max-w-md mt-8">
<div className="bg-white/5 border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-lg">
<div className="text-2xl tracking-tighter font-sans" style={{}}>98.9%</div>
<div className="mt-1 text-xs text-neutral-400 font-sans">Inference uptime</div>
</div>
<div className="bg-white/5 border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-lg">
<div className="text-2xl tracking-tighter font-sans" style={{}}>-62%</div>
<div className="mt-1 text-xs text-neutral-400 font-sans">Latency reduction</div>
</div>
<div className="bg-white/5 border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-lg">
<div className="text-2xl tracking-tighter font-sans" style={{}}>SOC2</div>
<div className="mt-1 text-xs text-neutral-400 font-sans">Security ready</div>
</div>
</div>
</div>

<div className="relative">
<div className="card-top glass-effect w-[32rem] h-fit overflow-hidden relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-gradient-to-r from-white/15 to-white/5 rounded-[1.2em]" style={{backdropFilter: `blur(16px)`}}>
<div className="absolute inset-0 border-white/20 border rounded-[1.2em]" style={{maskImage: `linear-gradient(135deg, white, transparent 60%)`}}></div>
<div className="absolute inset-0 border-white/10 border rounded-[1.2em]" style={{maskImage: `linear-gradient(135deg, transparent 60%, white)`}}></div>
<div className="pointer-events-none absolute -inset-px rounded-[1.3rem]" style={{display: `none`}}></div>
<div className="flex flex-col h-full pt-6 pr-6 pb-7 pl-6">
<div className="flex mb-2 items-start justify-between">
<div className="w-3/4">
<h1 className="text-[26px] leading-tight font-medium tracking-tight" style={{}}>Multi-Agent System</h1>
<p className="text-neutral-300 text-sm font-light mt-1 font-sans">Orchestrator • Multi-Agent AI</p>
</div>
</div>
<div className="relative w-full mr-auto mb-4 ml-auto">
<div className="absolute inset-0 translate-y-2 scale-[0.98] rounded-lg bg-neutral-900/50 ring-1 ring-white/5 blur-[0.3px]"></div>
<div className="relative ring-1 ring-white/10 overflow-hidden rounded-lg">
<div className="flex items-center justify-between px-3 py-2 border-b border-white/5 bg-neutral-950/50">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-neutral-500/60"></span>
<span className="h-2 w-2 rounded-full bg-neutral-400/60"></span>
<span className="h-2 w-2 rounded-full bg-neutral-300/60"></span>
</div>
<div className="flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/60 px-2 py-1 text-xs text-neutral-300">
<svg className="w-3 h-3 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path className="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-neutral-400/80 font-sans">multi-agent…</span>
</div>
</div>
<div className="relative h-32">
<div className="absolute inset-0 grid grid-cols-[30px_1fr]">
<div className="select-none text-[11px] leading-4 text-neutral-400/50 bg-neutral-950/30 border-white/5 border-r pt-2 pr-2 pb-2 pl-2">
<div className="font-sans">1</div><div className="font-sans">2</div><div className="font-sans">3</div><div className="font-sans">4</div><div className="font-sans">5</div><div className="font-sans">6</div><div className="font-sans">7</div><div className="font-sans">8</div>
</div>
<pre className="overflow-hidden text-[11px] leading-4 text-neutral-300 mt-0 mr-0 mb-0 ml-0 pt-2 pr-3 pb-2 pl-3"><span className="text-blue-300 font-sans">class</span> <span className="text-white font-sans">MultiAgentOrchestrator</span>:
  <span className="text-blue-300 font-sans">def</span> <span className="text-yellow-300 font-sans">__init__</span>(<span className="text-emerald-300 font-sans">self</span>, agents, coordinator):
    <span className="text-emerald-300 font-sans">self</span>.agents = agents
    <span className="text-emerald-300 font-sans">self</span>.coordinator = coordinator
  
  <span className="text-blue-300 font-sans">def</span> <span className="text-yellow-300 font-sans">execute_task</span>(<span className="text-emerald-300 font-sans">self</span>, task):
    results = []
    <span className="text-blue-300 font-sans">for</span> agent <span className="text-blue-300 font-sans">in</span> <span className="text-emerald-300 font-sans">self</span>.agents:</pre>
</div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-neutral-600/10 to-transparent"></div>
</div>
</div>
</div>
<div className="flex justify-between mb-4 max-w-lg">
<div className="text-center px-2 cursor-pointer transition-all duration-300 p-2 rounded-lg hover:bg-white/5 hover:-translate-y-0.5">
<div className="text-2xl leading-tight bg-gradient-to-r from-white/95 to-neutral-200/80 bg-clip-text text-transparent font-sans font-medium" style={{}}>
          5
        </div>
<div className="text-xs opacity-70 uppercase tracking-wide font-sans">ACTIVE AGENTS</div>
</div>
<div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent mt-auto mb-auto"></div>
<div className="cursor-pointer transition-all duration-300 hover:bg-white/5 hover:-translate-y-0.5 text-center rounded-lg pt-2 pr-2 pb-2 pl-2">
<div className="leading-tight bg-clip-text text-2xl font-medium text-transparent bg-gradient-to-r from-white/95 to-neutral-200/80" style={{}}>
          94
          <span className="text-sm font-sans">%</span>
</div>
<div className="opacity-70 uppercase text-xs tracking-wide">COORDINATION RATE</div>
</div>
<div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent mt-auto mb-auto"></div>
<div className="text-center px-2 cursor-pointer transition-all duration-300 p-2 rounded-lg hover:bg-white/5 hover:-translate-y-0.5">
<div className="text-2xl leading-tight bg-gradient-to-r from-white/95 to-neutral-200/80 bg-clip-text text-transparent font-sans font-medium" style={{}}>1.2K</div>
<div className="text-xs opacity-70 uppercase tracking-wide font-sans">TASKS COMPLETED</div>
</div>
</div>
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-3"></div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-neutral-500/10 border border-neutral-500/20 text-neutral-300 cursor-pointer transition-all duration-300 hover:-translate-y-px hover:shadow-lg font-sans">
<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path className="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
        ORCHESTRATOR
      </span>
<span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-neutral-600/10 border border-neutral-600/20 text-neutral-300 cursor-pointer transition-all duration-300 hover:-translate-y-px hover:shadow-lg font-sans">
<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path className="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
        ANALYTICS
      </span>
<span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-neutral-700/10 border border-neutral-700/20 text-neutral-300 cursor-pointer transition-all duration-300 hover:-translate-y-px hover:shadow-lg font-sans">
<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path className="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
        COORDINATION
      </span>
</div>
<div className="relative overflow-hidden text-xs font-mono rounded mb-4 pt-1 pr-2 pb-1 pl-2" style={{background: `linear-gradient(90deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.08) 100%)`}}>
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-300">ENVIRONMENT: MULTI-AGENT</span>
</div>
</div>
<div className="mt-auto flex justify-between w-full">
<div className="flex flex-col">
<span className="opacity-70 flex items-center gap-2 text-sm mb-1">
<span className="text-xs">DISTRIBUTED</span>
</span>
</div>
<div className="flex flex-col items-end">
<span className="opacity-70 flex items-center gap-2 text-sm mb-1">
<span className="text-xs">COLLABORATIVE</span>
<div className="w-2 h-2 rounded-full bg-neutral-400" style={{boxShadow: `0 0 6px rgba(163, 163, 163, 0.4)`}}></div>
</span>
</div>
</div>
</div>
</div>
</div>
</div>

</div>
</section>

<section className="relative z-10 sm:py-24 fade-in fade-in-delay-4 pt-8 pb-8" style={{opacity: `1`, transform: `translateY(0px)`}}>
<div className="max-w-7xl mt-6 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6">
<div className="text-center">
<p className="uppercase text-sm font-medium text-zinc-400 tracking-wide">Powering the world’s most focused product teams</p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 mt-6">
<svg className="" fill="none" height="36" viewBox="0 0 99 36" width="99" xmlns="http://www.w3.org/2000/svg">
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
</svg><svg className="" fill="none" height="36" viewBox="0 0 115 36" width="115" xmlns="http://www.w3.org/2000/svg">
<path className="" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
</svg>
<svg className="" fill="none" height="36" viewBox="0 0 110 36" width="110" xmlns="http://www.w3.org/2000/svg">
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
</svg><svg className="" fill="none" height="36" viewBox="0 0 92 36" width="92" xmlns="http://www.w3.org/2000/svg">
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
</svg>
<svg className="" fill="none" height="36" viewBox="0 0 104 36" width="104" xmlns="http://www.w3.org/2000/svg">
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
</svg>
<svg className="" fill="none" height="36" viewBox="0 0 113 36" width="113" xmlns="http://www.w3.org/2000/svg">
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" clip-rule="evenodd" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" clip-rule="evenodd" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" clip-rule="evenodd" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" clip-rule="evenodd" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" clip-rule="evenodd" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" clip-rule="evenodd" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" clip-rule="evenodd" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
</svg>
</div>
</div>

</section>

<section className="w-full max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-8 pr-4 pb-8 pl-4">
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-14 mr-auto ml-auto">

<div className="card-top glass-effect w-full h-fit overflow-hidden relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-gradient-to-r from-white/15 to-white/5 rounded-[1.2em]" style={{backdropFilter: `blur(16px)`}}>
<div className="absolute inset-0 border-white/20 border rounded-[1.2em]" style={{maskImage: `linear-gradient(135deg, white, transparent 60%)`}}></div>
<div className="absolute inset-0 border-white/10 border rounded-[1.2em]" style={{maskImage: `linear-gradient(135deg, transparent 60%, white)`}}></div>
<div className="flex flex-col h-full pt-6 pr-6 pb-7 pl-6">
<div className="flex mb-2 items-start justify-between">
<div className="w-full">
<div className="flex items-center gap-3 mb-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-neutral-400 to-neutral-500">
<svg className="h-4 w-4 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</span>
<h3 className="text-lg font-semibold tracking-tight font-sans">Evaluation Pipeline</h3>
</div>
<p className="text-neutral-300 text-sm font-light mb-4 font-sans">Comprehensive evaluation and testing system for AI models</p>
</div>
</div>
<article className="relative overflow-hidden sm:p-5 h-80 bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800 border rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="absolute inset-0"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="flex items-start justify-between">
<div className="flex items-center gap-1">
<span className="h-1 w-1 rounded-full bg-zinc-300"></span>
<span className="h-1 w-1 rounded-full bg-zinc-600"></span>
<span className="h-1 w-1 rounded-full bg-zinc-600"></span>
</div>
<span className="text-[11px] text-zinc-500 font-normal font-geist" style={{}}>01</span>
</div>
<div className="flex-1 flex flex-col bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/623ab9b2-cd35-4978-acc7-4be2f48ac610_800w.jpg)] bg-cover rounded-lg mt-2 mb-2 pt-6 pb-6 items-center justify-center">
</div>
<div className="mt-auto">
<h3 className="text-[15px] sm:text-base font-medium leading-snug tracking-tight text-zinc-100 font-geist" style={{}}>Smart automation that learns from your patterns</h3>
<p className="mt-1 text-sm text-zinc-400 font-geist" style={{}}>Workflows that improve over time.</p>
</div>
</div>
<div className="absolute bottom-4 right-4">
</div>
</article>
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-3"></div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-neutral-500/10 border border-neutral-500/20 text-neutral-300 font-sans">
            GUARDRAILS
          </span>
<span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-neutral-600/10 border border-neutral-600/20 text-neutral-300 font-sans">
            A/B TESTING
          </span>
</div>
<div className="mt-5 inline-flex items-center text-sm font-medium text-neutral-300 font-sans">
          Learn more 
          <svg className="ml-2 h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
</div>
</div>
</div>

<div className="card-top glass-effect w-full h-fit overflow-hidden relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-gradient-to-r from-white/15 to-white/5 rounded-[1.2em]" style={{backdropFilter: `blur(16px)`}}>
<div className="absolute inset-0 border-white/20 border rounded-[1.2em]" style={{maskImage: `linear-gradient(135deg, white, transparent 60%)`}}></div>
<div className="absolute inset-0 border-white/10 border rounded-[1.2em]" style={{maskImage: `linear-gradient(135deg, transparent 60%, white)`}}></div>
<div className="flex flex-col h-full pt-6 pr-6 pb-7 pl-6">
<div className="flex mb-2 items-start justify-between">
<div className="w-full">
<div className="flex items-center gap-3 mb-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-neutral-400 to-neutral-500">
<svg className="h-4 w-4 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></svg>
</span>
<h3 className="text-lg font-semibold tracking-tight font-sans">Model Orchestration</h3>
</div>
<p className="text-neutral-300 text-sm font-light mb-4 font-sans">Intelligent routing and load balancing across AI providers</p>
</div>
</div>
<article className="relative overflow-hidden sm:p-5 h-80 bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800 border rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="absolute inset-0"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="flex items-start justify-between">
<div className="flex items-center gap-1">
<span className="h-1 w-1 rounded-full bg-zinc-300"></span>
<span className="h-1 w-1 rounded-full bg-zinc-600"></span>
<span className="h-1 w-1 rounded-full bg-zinc-600"></span>
</div>
<span className="text-[11px] text-zinc-500 font-normal font-geist" style={{}}>02</span>
</div>
<div className="flex-1 flex flex-col bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/27aa90c0-b947-4bfd-b8da-7cf0ab291ab1_800w.jpg)] bg-cover rounded-lg mt-2 mb-2 pt-6 pb-6 items-center justify-center">
</div>
<div className="mt-auto">
<h3 className="text-[15px] sm:text-base font-medium leading-snug tracking-tight text-zinc-100 font-geist" style={{}}>Intelligent model routing and selection</h3>
<p className="mt-1 text-sm text-zinc-400 font-geist" style={{}}>Optimize cost and performance automatically.</p>
</div>
</div>
<div className="absolute bottom-4 right-4">
</div>
</article>
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-3"></div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-neutral-500/10 border border-neutral-500/20 text-neutral-300 font-sans">
            LOAD BALANCING
          </span>
<span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-neutral-600/10 border border-neutral-600/20 text-neutral-300 font-sans">
            FAILOVER
          </span>
</div>
<div className="mt-5 inline-flex items-center text-sm font-medium text-neutral-300 font-sans">
          Learn more 
          <svg className="ml-2 h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
</div>
</div>
</div>

<div className="card-top glass-effect w-full h-fit overflow-hidden relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-gradient-to-r from-white/15 to-white/5 rounded-[1.2em]" style={{backdropFilter: `blur(16px)`}}>
<div className="absolute inset-0 border-white/20 border rounded-[1.2em]" style={{maskImage: `linear-gradient(135deg, white, transparent 60%)`}}></div>
<div className="absolute inset-0 border-white/10 border rounded-[1.2em]" style={{maskImage: `linear-gradient(135deg, transparent 60%, white)`}}></div>
<div className="flex flex-col h-full pt-6 pr-6 pb-7 pl-6">
<div className="flex mb-2 items-start justify-between">
<div className="w-full">
<div className="flex items-center gap-3 mb-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-neutral-400 to-neutral-500">
<svg className="h-4 w-4 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18"></rect><path></path></svg>
</span>
<h3 className="text-lg font-semibold tracking-tight font-sans">Compliance & Safety</h3>
</div>
<p className="text-sm font-light text-neutral-300 mb-4">Enterprise-grade security and regulatory compliance for AI</p>
</div>
</div>
<article className="relative overflow-hidden sm:p-5 h-80 bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800 border rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="absolute inset-0"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="flex items-start justify-between">
<div className="flex items-center gap-1">
<span className="h-1 w-1 rounded-full bg-zinc-300"></span>
<span className="h-1 w-1 rounded-full bg-zinc-600"></span>
<span className="h-1 w-1 rounded-full bg-zinc-600"></span>
</div>
<span className="text-[11px] text-zinc-500 font-normal font-geist" style={{}}>03</span>
</div>
<div className="flex-1 flex flex-col bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/edaf8dff-6ac4-4fed-b5ff-f41e6863a090_800w.jpg)] bg-cover rounded-lg mt-2 mb-2 pt-6 pb-6 items-center justify-center">
</div>
<div className="mt-auto">
<h3 className="text-[15px] sm:text-base font-medium leading-snug tracking-tight text-zinc-100 font-geist" style={{}}>Enterprise security and compliance</h3>
<p className="text-sm text-zinc-400 font-geist mt-1" style={{}}>SOC2 certified with audit trails.</p>
</div>
</div>
<div className="absolute bottom-4 right-4">
</div>
</article>
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-3"></div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-neutral-500/10 border border-neutral-500/20 text-neutral-300 font-sans">
            AUDIT TRAILS
          </span>
<span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-neutral-600/10 border border-neutral-600/20 text-neutral-300 font-sans">
            RBAC
          </span>
</div>
<div className="mt-5 inline-flex items-center text-sm font-medium text-neutral-300 font-sans">
          Learn more 
          <svg className="ml-2 h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-8 pr-4 pb-8 pl-4">
<div className="mt-14 grid items-center gap-8 lg:grid-cols-2">
<div className="order-2 lg:order-1">
<h2 className="text-3xl tracking-tighter" style={{}}>From prototype to production</h2>
<p className="max-w-xl text-base text-neutral-300 mt-4 font-sans">
              Iterate quickly with evals and deploy globally with low latency. Observability lets you see failures before customers do.
            </p>
<ul className="mt-6 space-y-3 text-sm text-neutral-300">
<li className="flex gap-3 items-start">
<svg className="lucide lucide-check-circle-2 mt-0.5 w-[20px] h-[20px] text-orange-300" data-icon-replaced="true" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path></svg>
                Unified logs, traces, and costs
              </li>
<li className="flex items-start gap-3 font-sans">
<svg className="lucide lucide-check-circle-2 mt-0.5 w-[20px] h-[20px] text-orange-300" data-icon-replaced="true" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path></svg>
                Canary releases and rollbacks
              </li>
<li className="flex items-start gap-3 font-sans">
<svg className="lucide lucide-check-circle-2 mt-0.5 w-[20px] h-[20px] text-orange-300" data-icon-replaced="true" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path></svg>
                SDKs for JS, Python, and Go
              </li>
</ul>
<div className="mt-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300 font-sans">
<svg className="lucide lucide-terminal mr-2 w-[16px] h-[16px] text-orange-300" data-icon-replaced="true" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `16px`, height: `16px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
              npm i ai-factory
            </div>
</div>
<div className="order-1 lg:order-2">
<div className="relative overflow-hidden bg-neutral-900 border-white/10 border rounded-3xl pt-4 pr-4 pb-4 pl-4">
<div className="card-top glass-effect w-full h-fit overflow-hidden relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-gradient-to-r from-white/15 to-white/5 rounded-[1.2em]" style={{backdropFilter: `blur(16px)`}}>
<div className="absolute inset-0 border-white/20 border rounded-[1.2em]" style={{maskImage: `linear-gradient(135deg, white, transparent 60%)`}}></div>
<div className="absolute inset-0 border-white/10 border rounded-[1.2em]" style={{maskImage: `linear-gradient(135deg, transparent 60%, white)`}}></div>
<div className="flex flex-col lg:flex-row gap-6 h-full pt-6 pr-6 pb-7 pl-6">

<div className="flex flex-col flex-1">
<div className="flex gap-3 mb-3 items-center">
<h3 className="text-lg font-semibold tracking-tight">Real-time Analytics</h3>
</div>
<p className="text-neutral-300 text-sm font-light mb-4 font-sans">Monitor model performance and usage patterns across your entire AI infrastructure</p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-neutral-500/10 border border-neutral-500/20 text-neutral-300 font-sans">
            METRICS
          </span>
<span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-neutral-600/10 border border-neutral-600/20 text-neutral-300 font-sans">
            ALERTS
          </span>
</div>
<div className="mt-auto inline-flex items-center text-sm font-medium text-neutral-300 font-sans">
          Learn more 
          <svg className="ml-2 h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
</div>
</div>

<div className="flex-1 lg:max-w-md">
<article className="relative overflow-hidden h-64 bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800 border rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="absolute inset-0"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="flex items-start justify-between">
<div className="flex items-center gap-1">
<span className="h-1 w-1 rounded-full bg-zinc-300"></span>
<span className="h-1 w-1 rounded-full bg-zinc-600"></span>
<span className="h-1 w-1 rounded-full bg-zinc-600"></span>
</div>
<span className="text-[11px] text-zinc-500 font-normal font-geist">Dashboard</span>
</div>
<div className="flex-1 flex flex-col bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6f79f677-2e40-404d-a1b3-43d4cd1166de_800w.jpg)] bg-cover rounded-lg mt-2 mb-2 pt-6 pb-6 items-center justify-center">
</div>
<div className="mt-auto">
<h3 className="text-[15px] sm:text-base font-medium leading-snug tracking-tight text-zinc-100 font-geist">Performance insights at a glance</h3>
<p className="mt-1 text-sm text-zinc-400 font-geist">Monitor costs, latency, and quality metrics.</p>
</div>
</div>
</article>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl sm:px-6 lg:px-8 mt-8 mr-auto mb-8 ml-auto pt-4 pr-4 pb-4 pl-4" id="waitlist">
<div className="overflow-hidden sm:p-10 bg-gradient-to-br from-neutral-900/70 to-neutral-900/40 border-white/10 border rounded-3xl mt-16 pt-6 pr-6 pb-6 pl-6">
<div className="grid gap-8 lg:grid-cols-2">
<div className="">
<h3 className="text-2xl tracking-tighter font-sans" style={{}}>Be first in line</h3>
<p className="mt-2 max-w-lg text-sm text-neutral-300 font-sans">
                Join the early access list and we’ll reach out as capacity opens. No spam—just product updates and invites.
              </p>
<form className="mt-6 flex flex-col gap-3 sm:flex-row">
<label className="sr-only font-sans" htmlFor="email">Email</label>
<input className="w-full placeholder-neutral-500 focus:border-neutral-400/40 focus:outline-none focus:ring-2 focus:ring-neutral-300/30 text-sm text-white bg-neutral-950/60 border-white/10 border rounded-xl pt-3 pr-4 pb-3 pl-4" id="email" placeholder="you@company.com" required type="email" />
<button aria-label="Create Account" className="group relative inline-flex shadow-[0_8px_16px_-4px_rgba(255,255,255,0.05)] hover:shadow-[0_12px_20px_-6px_rgba(255,255,255,0.1)] transition duration-300 ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 transform-gpu hover:-translate-y-0.5 text-white pt-[1px] pr-[1px] pb-[1px] pl-[1px] items-center justify-center rounded-xl" role="button" style={{backgroundImage: `linear-gradient(144deg,rgba(255,255,255,0.3), rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.2))`}} type="button">
<span className="flex items-center justify-center gap-2 text-[15px] leading-none min-w-[140px] w-full h-full transition-colors duration-300 group-hover:bg-black/50 font-medium bg-black/80 rounded-xl pt-3 pr-5 pb-3 pl-5">
<span className="rounded-xl">Request</span>
<svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 rounded-xl" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="rounded-xl"></path>
<path className="rounded-xl"></path>
</svg>
</span>
</button>
</form>
<p className="mt-2 text-xs text-neutral-500 font-sans">
                By signing up, you agree to our terms and privacy policy.
              </p>
</div>
<div className="relative">
<div className="relative h-56 w-full overflow-hidden sm:h-64 bg-neutral-950 border-white/10 border rounded-2xl">
<img alt="Minimal landscape" className="absolute inset-0 h-full w-full opacity-70 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2bc5d919-aa6e-4b04-aca5-ff825cb9ccbf_1600w.jpg" style={{}} />
<div className="absolute inset-0 bg-gradient-to-tr from-neutral-400/20 via-transparent to-neutral-500/10" style={{display: `block`}}></div>
<div className="absolute bottom-4 left-4 inline-flex ring-1 ring-white/10 text-xs text-white bg-white/5 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur items-center" style={{display: `flex`}}>
<svg className="lucide lucide-shield mr-2 w-[16px] h-[16px] text-neutral-400" data-icon-replaced="true" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `16px`, height: `16px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                  Enterprise-grade security
                </div>
</div>
</div>
</div>
</div>
</section><section className="w-full sm:px-6 lg:px-8 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0d850914-e949-410a-ac08-c604b47ea90f_3840w.jpg)] bg-cover mr-auto ml-auto pt-8 pr-4 pb-8 pl-4">
<div className="mt-16 text-center">
<h2 className="text-3xl lg:text-4xl tracking-tighter font-sans">Simple, transparent pricing</h2>
<p className="max-w-2xl text-base text-neutral-300 mt-4 mr-auto ml-auto font-sans">
      Start free, scale as you grow. No hidden fees or complex usage calculations.
    </p>
</div>
<div className="grid gap-8 lg:grid-cols-3 mt-12 mr-auto ml-auto max-w-7xl">

<div className="card-top glass-effect w-full h-fit overflow-hidden relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-gradient-to-r from-white/15 to-white/5 rounded-[1.2em]" style={{backdropFilter: `blur(16px)`}}>
<div className="absolute inset-0 border-white/20 border rounded-[1.2em]" style={{maskImage: `linear-gradient(135deg, white, transparent 60%)`}}></div>
<div className="absolute inset-0 border-white/10 border rounded-[1.2em]" style={{maskImage: `linear-gradient(135deg, transparent 60%, white)`}}></div>
<div className="relative pt-8 pr-8 pb-8 pl-8">
<div className="absolute -right-8 -top-8 h-64 w-64 bg-white/10 rounded-full blur-[100px]"></div>
<div className="relative">
<h3 className="text-xl font-semibold tracking-tight font-sans">Starter</h3>
<p className="mt-2 text-sm text-neutral-400 font-sans">Perfect for prototypes and small projects</p>
<div className="mt-6 flex items-baseline gap-2">
<span className="text-3xl tracking-tighter font-sans">$0</span>
<span className="text-sm text-neutral-400 font-sans">/month</span>
</div>
<ul className="mt-8 space-y-3 text-sm">
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-orange-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path></svg>
<span className="text-neutral-300 font-sans">10K API calls/month</span>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-orange-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path></svg>
<span className="text-neutral-300 font-sans">Basic evaluation pipeline</span>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-orange-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path></svg>
<span className="text-neutral-300 font-sans">3 team members</span>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-orange-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path></svg>
<span className="text-neutral-300 font-sans">Community support</span>
</li>
</ul>
<button className="mt-8 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white hover:bg-white/10 transition font-sans">
            Get Started Free
          </button>
</div>
</div>
</div>

<div className="card-top w-full h-fit overflow-hidden relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ring-1 ring-neutral-300/20 bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 rounded-[1.2em]" style={{backdropFilter: `blur(16px)`}}>
<div className="relative pt-8 pr-8 pb-8 pl-8">
<div className="relative">
<h3 className="text-xl font-semibold tracking-tight font-sans">Pro</h3>
<p className="mt-2 text-sm text-neutral-400 font-sans">For growing teams and production apps</p>
<div className="mt-6 flex items-baseline gap-2">
<span className="text-3xl tracking-tighter font-sans">$99</span>
<span className="text-sm text-neutral-400 font-sans">/month</span>
</div>
<ul className="mt-8 space-y-3 text-sm">
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-orange-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12"></circle><path></path></svg>
<span className="text-neutral-300 font-sans">1M API calls/month</span>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-orange-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path></svg>
<span className="text-neutral-300 font-sans">Advanced evaluations & A/B testing</span>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-orange-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path></svg>
<span className="text-neutral-300 font-sans">Unlimited team members</span>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-orange-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path></svg>
<span className="text-neutral-300 font-sans">Priority support & SLA</span>
</li>
</ul>
<button className="w-full hover:brightness-95 transition text-sm font-semibold text-neutral-900 bg-gradient-to-br from-orange-300 to-orange-300 rounded-xl mt-8 pt-3 pr-4 pb-3 pl-4 font-sans">
            Start 14-Day Trial
          </button>
</div>
</div>
</div>

<div className="card-top glass-effect w-full h-fit overflow-hidden relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-gradient-to-r from-white/15 to-white/5 rounded-[1.2em]" style={{backdropFilter: `blur(16px)`}}>
<div className="absolute inset-0 border-white/20 border rounded-[1.2em]" style={{maskImage: `linear-gradient(135deg, white, transparent 60%)`}}></div>
<div className="absolute inset-0 border-white/10 border rounded-[1.2em]" style={{maskImage: `linear-gradient(135deg, transparent 60%, white)`}}></div>
<div className="relative pt-8 pr-8 pb-8 pl-8">
<div className="absolute -left-8 -bottom-8 h-16 w-16 rounded-full bg-orange-300/10 blur-xl"></div>
<div className="relative">
<h3 className="text-xl font-semibold tracking-tight font-sans">Enterprise</h3>
<p className="mt-2 text-sm text-neutral-400 font-sans">Custom solutions for large organizations</p>
<div className="mt-6 flex items-baseline gap-2">
<span className="text-3xl tracking-tighter font-sans">Custom</span>
</div>
<ul className="mt-8 space-y-3 text-sm">
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-orange-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path></svg>
<span className="text-neutral-300 font-sans">Unlimited API calls</span>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-orange-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path></svg>
<span className="text-neutral-300 font-sans">SOC2 compliance & audit trails</span>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-orange-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path></svg>
<span className="text-neutral-300 font-sans">Dedicated infrastructure</span>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-orange-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path></svg>
<span className="text-neutral-300 font-sans">24/7 dedicated support</span>
</li>
</ul>
<button className="mt-8 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white hover:bg-white/10 transition font-sans">
            Contact Sales
          </button>
</div>
</div>
</div>
</div>

<div className="card-top glass-effect w-full h-fit overflow-hidden relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-gradient-to-r from-white/15 to-white/5 rounded-[1.2em] mt-12 mr-auto ml-auto max-w-7xl" style={{backdropFilter: `blur(16px)`}}>
<div className="absolute inset-0 border-white/20 border rounded-[1.2em]" style={{maskImage: `linear-gradient(135deg, white, transparent 60%)`}}></div>
<div className="absolute inset-0 border-white/10 border rounded-[1.2em]" style={{maskImage: `linear-gradient(135deg, transparent 60%, white)`}}></div>
<div className="relative max-w-7xl text-center mr-auto ml-auto pt-8 pr-8 pb-8 pl-8">
<h3 className="text-lg font-semibold tracking-tight font-sans">Need more than what's included?</h3>
<p className="mt-2 text-sm text-neutral-400 font-sans">Additional API calls: $0.10 per 1K calls • Premium models: $0.50 per 1K calls</p>
<div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-neutral-500 font-sans">
<svg className="h-3 w-3 text-orange-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path></svg>
          No setup fees
        
        <span className="flex items-center gap-2 font-sans">
<svg className="h-3 w-3 text-orange-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path></svg>
          Cancel anytime
        </span>
<span className="flex items-center gap-2 font-sans">
<svg className="h-3 w-3 text-orange-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path></svg>
          30-day money back
        </span>
</div>
</div>
</div>
</section>

<footer className="max-w-7xl mt-16 mr-auto ml-auto pr-6 pb-12 pl-6">
<div className="lg:p-16 border-white/10 border rounded-3xl pt-12 pr-12 pb-12 pl-12 backdrop-blur-2xl">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
<div className="lg:col-span-1">
<div className="flex items-center mb-6">
<span className="text-xl font-semibold tracking-tight text-white font-sans">AI Factory</span>
</div>
<p className="leading-relaxed text-sm text-white/60 mb-8 font-sans">
          Operationalize AI with reliable, trustworthy inference. Join the waitlist to get early access to our secure platform.
        </p>
<div className="flex items-center gap-4">
<a aria-label="Twitter" className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5 bg-white/[0.03]" href="#">
<svg className="text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
</a>
<a aria-label="LinkedIn" className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5 bg-white/[0.03]" href="#">
<svg className="text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<rect height="12" width="4"></rect>
<circle cx="4" cy="4"></circle>
</svg>
</a>
</div>
</div>
<div className="">
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide font-sans">Platform</h4>
<ul className="space-y-4">
<li className="">
<a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-sans" href="#">Evaluation Pipeline</a>
</li>
<li className="">
<a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-sans" href="#">Model Orchestration</a>
</li>
<li className="">
<a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-sans" href="#">Compliance & Safety</a>
</li>
<li>
<a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-sans" href="#">API Gateway</a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide font-sans">Solutions</h4>
<ul className="space-y-4">
<li className="">
<a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-sans" href="#">Enterprise AI</a>
</li>
<li className="">
<a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-sans" href="#">Production Inference</a>
</li>
<li className="">
<a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-sans" href="#">Model Testing</a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide font-sans">Company</h4>
<ul className="space-y-4">
<li className="">
<a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-sans" href="#">About</a>
</li>
<li className="">
<a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-sans" href="#">Blog</a>
</li>
<li className="">
<a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-sans" href="#">Careers</a>
</li>
<li className="">
<a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-sans" href="#">Contact</a>
</li>
</ul>
</div>
</div>
<div className="border-white/10 border-t mb-12 pt-12">
<div className="max-w-2xl text-center mr-auto ml-auto">
<h4 className="text-lg font-medium text-white mb-4">Stay up to date</h4>
<p className="text-sm text-white/60 mb-6">Get the latest updates on platform features, model releases, and enterprise AI best practices.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<input className="flex-1 max-w-md placeholder-white/40 focus:border-neutral-400/40 focus:outline-none transition-all duration-300 text-sm text-white bg-white/5 border-white/10 border rounded-xl pt-3 pr-4 pb-3 pl-4" placeholder="Enter your email address" type="email" />
<button aria-label="Create Account" className="group relative inline-flex shadow-[0_8px_16px_-4px_rgba(255,255,255,0.05)] hover:shadow-[0_12px_20px_-6px_rgba(255,255,255,0.1)] transition duration-300 ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 transform-gpu hover:-translate-y-0.5 text-white pt-[1px] pr-[1px] pb-[1px] pl-[1px] items-center justify-center rounded-xl" role="button" style={{backgroundImage: `linear-gradient(144deg,rgba(255,255,255,0.3), rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.2))`}} type="button">
<span className="flex items-center justify-center gap-2 text-[15px] leading-none min-w-[140px] w-full h-full transition-colors duration-300 group-hover:bg-black/50 font-medium bg-black/80 rounded-xl pt-3 pr-5 pb-3 pl-5">
<span className="rounded-xl">Subscribe</span>
<svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 rounded-xl" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="rounded-xl"></path>
<path className="rounded-xl"></path>
</svg>
</span>
</button>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex flex-wrap items-center gap-6 text-xs text-white/40">
<span className="font-sans">© 2024 AI Factory. All rights reserved.</span>
<a className="hover:text-white/60 transition-colors duration-300 font-sans" href="#">Privacy Policy</a>
<a className="hover:text-white/60 transition-colors duration-300 font-sans" href="#">Terms of Service</a>
</div>
<div className="flex items-center gap-4 text-xs text-white/40">
<span className="flex items-center gap-2">
          SOC2 Compliant
          <svg className="w-[12px] h-[12px] text-neutral-500" data-icon-replaced="true" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `12px`, height: `12px`}} viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12"></circle>
<path className=""></path>
</svg>
</span>
<span className="flex items-center gap-2">
          99.9% Uptime
          <svg className="w-[12px] h-[12px] text-neutral-500" data-icon-replaced="true" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `12px`, height: `12px`}} viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path className=""></path>
<path className=""></path>
</svg>
</span>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}
