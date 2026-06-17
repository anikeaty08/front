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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="bmaMERjX2VZDtPrh4Zwx"></div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-[#020617]"></div>
<div className="absolute inset-0 stars"></div>
<div className="absolute inset-0 grid-bg"></div>

<div className="absolute -top-40 left-0 right-0 h-[500px] bg-indigo-900/20 blur-[100px] rounded-full"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020617]/70 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
<svg className="lucide lucide-sparkles text-white w-5 h-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<span className="text-xl font-medium tracking-tight text-white font-geist">Clora</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-slate-300 font-medium">
<a className="hover:text-white transition-colors font-geist" href="#">Home</a>
<a className="hover:text-white transition-colors font-geist" href="#">Features</a>
<a className="hover:text-white transition-colors font-geist" href="#">Pricing</a>
<a className="hover:text-white transition-colors font-geist" href="#">Showcase</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-300 hover:text-white transition-colors font-geist" href="#">Log in</a>
<a className="group relative px-5 py-2 rounded-full bg-indigo-600/20 border border-indigo-500/50 text-indigo-100 text-sm font-medium overflow-hidden transition-all hover:bg-indigo-600/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]" href="#">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
<span className="relative font-geist">Sign up</span>
</a>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-0">

<div className="max-w-5xl mx-auto px-6 text-center">

<div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass-panel mb-8 animate-fade-in-up opacity-0">
<div className="flex -space-x-2">
<img alt="User" className="w-6 h-6 rounded-full border border-slate-800" src="https://i.pravatar.cc/100?img=1"/>
<img alt="User" className="w-6 h-6 rounded-full border border-slate-800" src="https://i.pravatar.cc/100?img=5"/>
<img alt="User" className="w-6 h-6 rounded-full border border-slate-800" src="https://i.pravatar.cc/100?img=8"/>
</div>
<div className="flex items-center gap-1">
<div className="flex text-yellow-500">
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-xs font-medium text-slate-300 font-geist">20k+ Builders</span>
</div>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[1.1] mb-6 animate-fade-in-up delay-100 opacity-0 font-playfair font-medium">
                Generate <span className="bg-gradient-to-r from-purple-300 via-indigo-200 to-purple-300 bg-clip-text text-transparent font-playfair font-medium">Stunning</span> <br className="hidden md:block"/>
                Websites <span className="text-slate-400 font-playfair font-medium">Instantly.</span>
</h1>

<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-up delay-200 opacity-0 font-light font-geist">
                Describe your dream website. Pick your AI model. We handle the rest.
            </p>

<div className="max-w-2xl mx-auto mb-16 animate-fade-in-up delay-300 opacity-0 relative z-20">

<div className="relative group rounded-2xl p-[1px] bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-indigo-500/50 transition-all duration-500 hover:shadow-[0_0_40px_-5px_rgba(99,102,241,0.3)]">
<div className="bg-[#0B1121] rounded-2xl relative overflow-hidden flex flex-col">

<textarea className="w-full bg-transparent text-white p-5 h-28 focus:outline-none resize-none placeholder:text-slate-500 text-base leading-relaxed" placeholder="e.g. A minimalist portfolio for a photographer with a dark theme and a photo gallery grid..."></textarea>

<div className="flex items-center justify-between px-3 pb-3 pt-2">
<div className="flex items-center gap-2">

<div className="flex items-center p-1 rounded-lg bg-white/5 border border-white/10">
<button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-white/10 rounded-md shadow-sm border border-white/5 hover:bg-white/20 transition-all font-geist">
<svg className="lucide lucide-sparkles w-3 h-3 text-purple-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                                        GPT-4
                                    </button>
<button className="px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors relative group font-geist">
                                        Claude 3.5
                                        <span className="absolute -top-1 -right-1 flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
</button>
<button className="px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors font-geist">Gemini Pro</button>
</div>

<button className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group relative" title="Upload Reference">
<svg className="lucide lucide-paperclip w-4 h-4" data-lucide="paperclip" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path></svg>
</button>
</div>

<button className="flex items-center gap-2 bg-white text-slate-950 px-4 py-2 rounded-lg font-semibold text-sm transition-all hover:scale-105 shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)] font-geist">
                                Generate
                                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="mt-4 flex flex-wrap justify-center gap-3 text-xs text-slate-500">
<span className="px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] hover:bg-white/5 hover:text-slate-300 cursor-pointer transition-colors font-geist">Landing Page</span>
<span className="px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] hover:bg-white/5 hover:text-slate-300 cursor-pointer transition-colors font-geist">SaaS Dashboard</span>
<span className="px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] hover:bg-white/5 hover:text-slate-300 cursor-pointer transition-colors font-geist">E-commerce Store</span>
</div>
</div>
</div>

<div className="relative max-w-6xl mx-auto px-4 mt-20 animate-fade-in-up delay-500 opacity-0 pb-32">

<div className="absolute left-1/2 -translate-x-1/2 -top-40 w-[140%] md:w-[800px] h-[500px] bg-gradient-to-t from-indigo-500 via-purple-600 to-transparent opacity-20 blur-[80px] rounded-t-full pointer-events-none"></div>

<div className="absolute left-1/2 -translate-x-1/2 -top-[1px] w-[80%] h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent shadow-[0_0_20px_2px_rgba(168,85,247,0.6)] z-20"></div>

<div className="relative rounded-xl border border-white/10 bg-[#0B1121]/80 backdrop-blur-xl shadow-2xl overflow-hidden ring-1 ring-white/5 transform transition-transform hover:scale-[1.01] duration-700">

<div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
<div className="flex items-center gap-8">
<div className="flex items-center gap-2 text-white">
<div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
<span className="font-bold text-xs font-geist">C</span>
</div>
<span className="font-medium font-geist">Clora Workspace</span>
</div>

<div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/20 border border-white/5 text-slate-400 text-sm w-64">
<svg className="lucide lucide-search w-4 h-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span className="font-geist">Find project...</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-2 py-1 rounded-full bg-white/5 border border-white/5">
<button className="p-1 rounded-full text-slate-400 hover:text-white"><svg className="lucide lucide-moon w-4 h-4" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg></button>
<button className="p-1 rounded-full text-slate-400 hover:text-white"><svg className="lucide lucide-sun w-4 h-4" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg></button>
</div>
<div className="flex items-center gap-2">
<img className="w-8 h-8 rounded-full ring-2 ring-purple-500/30" src="https://i.pravatar.cc/100?img=32"/>
</div>
</div>
</div>

<div className="flex h-[600px] md:h-[700px]">

<div className="w-64 border-r border-white/5 p-4 hidden md:flex flex-col gap-1 bg-white/[0.02]">
<div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-3 mt-2 font-geist">Main</div>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20" href="#">
<svg className="lucide lucide-layout-dashboard w-4 h-4" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<span className="text-sm font-medium font-geist">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors" href="#">
<svg className="lucide lucide-message-square w-4 h-4" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<span className="text-sm font-medium font-geist">Prompts</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors" href="#">
<svg className="lucide lucide-globe w-4 h-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span className="text-sm font-medium font-geist">Deployments</span>
</a>
<div className="mt-auto p-4 rounded-xl bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-white/5">
<p className="text-sm font-medium text-white mb-1 font-geist">Pro Plan</p>
<div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden mb-2">
<div className="w-3/4 h-full bg-purple-500 rounded-full"></div>
</div>
<p className="text-xs text-slate-400 font-geist">12/15 Projects Used</p>
</div>
</div>

<div className="flex-1 p-6 sm:p-8 overflow-y-auto bg-gradient-to-b from-transparent to-black/20">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl text-white font-playfair font-medium">Overview</h2>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm text-slate-300">
<span className="font-geist">This Month</span>
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

<div className="p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-colors">
<div className="flex items-center gap-2 mb-3 text-slate-400">
<svg className="lucide lucide-eye w-4 h-4 text-purple-400" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="text-xs font-medium uppercase tracking-wide font-geist">Total Views</span>
</div>
<div className="text-2xl text-white mb-1 font-playfair font-medium">137,020</div>
<div className="flex items-center gap-1 text-xs text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded w-fit">
<svg className="lucide lucide-arrow-up-right w-3 h-3" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
<span className="font-geist">24%</span>
</div>
</div>

<div className="p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-colors">
<div className="flex items-center gap-2 mb-3 text-slate-400">
<svg className="lucide lucide-zap w-4 h-4 text-amber-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-xs font-medium uppercase tracking-wide font-geist">Credits Used</span>
</div>
<div className="text-2xl text-white mb-1 font-playfair font-medium">25,000</div>
<div className="flex items-center gap-1 text-xs text-rose-400 bg-rose-400/10 px-1.5 py-0.5 rounded w-fit">
<svg className="lucide lucide-arrow-down-right w-3 h-3" data-lucide="arrow-down-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 7 10 10"></path><path d="M17 7v10H7"></path></svg>
<span className="font-geist">12%</span>
</div>
</div>

<div className="p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-colors">
<div className="flex items-center gap-2 mb-3 text-slate-400">
<svg className="lucide lucide-server w-4 h-4 text-blue-400" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
<span className="text-xs font-medium uppercase tracking-wide font-geist">Bandwidth</span>
</div>
<div className="text-2xl text-white mb-1 font-playfair font-medium">340 GB</div>
</div>

<div className="p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-colors">
<div className="flex items-center gap-2 mb-3 text-slate-400">
<svg className="lucide lucide-folder w-4 h-4 text-indigo-400" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
<span className="text-xs font-medium uppercase tracking-wide font-geist">Projects</span>
</div>
<div className="text-2xl text-white mb-1 font-playfair font-medium">12</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 p-6 rounded-xl bg-white/[0.03] border border-white/5 h-64 flex flex-col justify-between">
<div className="flex justify-between items-center">
<h3 className="text-lg font-medium text-white font-geist">Traffic Summary</h3>
<div className="px-3 py-1 rounded-md bg-white/5 text-xs text-slate-400 border border-white/5 font-geist">Last 6 Months</div>
</div>
<div className="relative w-full h-32 mt-4 flex items-end justify-between gap-2">
<div className="w-full bg-indigo-500/20 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-indigo-500/20 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-indigo-500/20 rounded-t-sm h-[45%]"></div>
<div className="w-full bg-indigo-500/20 rounded-t-sm h-[70%]"></div>
<div className="w-full bg-indigo-500/20 rounded-t-sm h-[55%]"></div>
<div className="w-full bg-gradient-to-t from-indigo-500 to-purple-500 rounded-t-sm h-[85%] shadow-[0_0_15px_rgba(139,92,246,0.3)]"></div>
<div className="w-full bg-indigo-500/20 rounded-t-sm h-[65%]"></div>
</div>
</div>

<div className="p-6 rounded-xl bg-white/[0.03] border border-white/5 h-64 flex flex-col">
<h3 className="text-lg font-medium text-white mb-4 font-geist">Recent Prompts</h3>
<div className="space-y-3 overflow-hidden">
<div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer group">
<div className="w-8 h-8 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 shrink-0"><svg className="lucide lucide-code-2 w-4 h-4" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg></div>
<div className="flex-1 min-w-0"><p className="text-sm text-slate-200 truncate font-geist">Landing page for SaaS</p><p className="text-xs text-slate-500 font-geist">2 mins ago</p></div>
</div>
<div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer group">
<div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0"><svg className="lucide lucide-shopping-bag w-4 h-4" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg></div>
<div className="flex-1 min-w-0"><p className="text-sm text-slate-200 truncate font-geist">E-commerce Product Grid</p><p className="text-xs text-slate-500 font-geist">1 hour ago</p></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="relative z-10 max-w-7xl mx-auto px-6 py-24 border-t border-white/5 bg-[#020617]">
<div className="text-center mb-16">
<span className="text-indigo-400 font-medium text-sm tracking-widest uppercase font-geist">Capabilities</span>
<h2 className="text-3xl md:text-5xl text-white mt-4 tracking-tight font-playfair font-medium">Everything you need to ship.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 rounded-2xl p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 overflow-hidden relative group">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4">
<svg className="lucide lucide-code w-5 h-5 text-indigo-400" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2 font-geist">Production Quality Code</h3>
<p className="text-slate-400 text-sm max-w-md font-geist">Clora doesn't just generate HTML. It writes semantic, accessible, and SEO-optimized React &amp; Tailwind code ready for Vercel.</p>
</div>
<div className="absolute right-0 bottom-0 w-1/2 h-40 bg-indigo-500/10 blur-[60px] rounded-full group-hover:bg-indigo-500/20 transition-all"></div>
</div>

<div className="rounded-2xl p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 relative group">
<div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
<svg className="lucide lucide-zap w-5 h-5 text-purple-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2 font-geist">Instant Deploy</h3>
<p className="text-slate-400 text-sm font-geist">One click to live URL. No config needed.</p>
</div>

<div className="rounded-2xl p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 relative group">
<div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
<svg className="lucide lucide-layers w-5 h-5 text-emerald-400" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2 font-geist">Multi-Model AI</h3>
<p className="text-slate-400 text-sm font-geist">Switch between GPT-4, Claude 3, and Gemini for the best results.</p>
</div>

<div className="md:col-span-2 rounded-2xl p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 relative overflow-hidden group">
<div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div>
<div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
<svg className="lucide lucide-image w-5 h-5 text-blue-400" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2 font-geist">Image Generation</h3>
<p className="text-slate-400 text-sm max-w-sm font-geist">DALL-E 3 integrated directly into your workflow for stunning assets.</p>
</div>
<div className="flex -space-x-4">
<div className="w-16 h-16 rounded-lg bg-white/10 border border-white/10 rotate-3"></div>
<div className="w-16 h-16 rounded-lg bg-white/10 border border-white/10 -rotate-3 z-10 backdrop-blur-sm"></div>
<div className="w-16 h-16 rounded-lg bg-indigo-500/20 border border-indigo-500/30 rotate-6 z-20 backdrop-blur-md"></div>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/5 py-12 bg-[#020617] relative z-20">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
<div>
<h4 className="text-white font-semibold mb-4 font-geist">Product</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors font-geist" href="#">Changelog</a></li>
<li><a className="hover:text-indigo-400 transition-colors font-geist" href="#">Documentation</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4 font-geist">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors font-geist" href="#">About</a></li>
<li><a className="hover:text-indigo-400 transition-colors font-geist" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4 font-geist">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors font-geist" href="#">Privacy</a></li>
<li><a className="hover:text-indigo-400 transition-colors font-geist" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 text-center pt-8 border-t border-white/5">
<p className="text-slate-600 text-xs font-geist">© 2024 Clora Inc. Building the future of web design.</p>
</div>
</footer>


    </>
  );
}
