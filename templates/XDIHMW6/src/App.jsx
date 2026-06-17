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
      

<div className="pointer-events-none fixed inset-0 overflow-hidden">
<div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] rounded-full blur-3xl opacity-40 bg-[radial-gradient(closest-side,rgba(251,146,60,0.55),rgba(18,18,27,0))]"></div>
<div className="absolute bottom-0 right-0 w-[700px] h-[700px] translate-x-1/3 translate-y-1/3 rounded-full blur-3xl opacity-30 bg-[radial-gradient(closest-side,rgba(236,72,153,0.45),rgba(18,18,27,0))]"></div>
</div>

<header className="relative z-50 sticky top-0 backdrop-blur-xl bg-[#0a0a12]/80 border-b border-white/5">
<div className="max-w-7xl sm:px-6 lg:px-8 border-slate-50/5 mr-auto ml-auto pr-4 pl-4">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-3" href="#">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-pink-500 shadow-[0_0_0_2px_rgba(255,255,255,0.06)_inset]">
<svg className="lucide lucide-book-open w-4 h-4 text-white" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</span>
<span className="text-lg font-semibold tracking-tight">StoryMaker AI</span>
</a>
<nav className="hidden md:flex gap-1 border-slate-50/5 border rounded-full px-4 items-center">
<a className="hover:text-white text-sm font-medium text-zinc-300 pt-2 pr-3 pb-2 pl-3" href="#">Create Stories</a>
<a className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white" href="#">Templates</a>
<a className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white" href="#">Gallery</a>
<a className="hover:text-white text-sm font-medium text-zinc-300 pt-2 pr-3 pb-2 pl-3" href="#">Pricing</a>
</nav>
<div className="flex gap-2 items-center">
<button className="group relative inline-flex shadow-[0_8px_16px_-4px_rgba(251,146,60,0.2)] hover:shadow-[0_12px_20px_-6px_rgba(251,146,60,0.28)] transition duration-300 ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60 transform-gpu hover:-translate-y-0.5 text-white rounded-md pt-[1px] pr-[1px] pb-[1px] pl-[1px] items-center justify-center" style={{backgroundImage: 'linear-gradient(144deg,#FB923C, #EC4899 50%, #8B5CF6)'}} type="button">
<span className="flex items-center justify-center gap-2 text-[14px] leading-none min-w-[80px] w-full h-full transition-colors duration-300 group-hover:bg-transparent font-medium bg-[#0b0f17] rounded-md pt-2 pr-4 pb-2 pl-4">
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="">Start Creating</span>
</span>
</button>
</div>
</div>
</div>
</header>

<section className="relative z-10 bg-[#000000]">
<div className="max-w-6xl sm:px-6 lg:px-8 sm:pt-16 bg-center opacity-80 relative mt-0 mr-auto mb-0 ml-auto pt-0 pr-0 pl-0">

<div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="absolute w-full h-[825px] top-0 left-0 -z-10" data-us-project="trp6RGMggh1riXQsX9Ag"><div data-us-text="id-trp6RGMggh1riXQsX9Ag" style={{width: '1032.19px', top: '467.649px', left: '59.904px', fontSize: '97.92px', lineHeight: '98.5743px', letterSpacing: '-2.23972px', fontFamily: '"Uncial Antiqua"', fontWeight: '400', textAlign: 'center', position: 'absolute', wordBreak: 'break-word', transform: 'rotateZ(0deg)', color: 'transparent', zIndex: '2'}}>STORYmaker</div><div data-us-text="id-2gv39ce0hvr30i5fq8mb8q" style={{width: '1032.19px', top: '540.13px', left: '59.904px', fontSize: '51.84px', lineHeight: '52.1864px', letterSpacing: '-1.18574px', fontFamily: '"Uncial Antiqua"', fontWeight: '400', textAlign: 'center', position: 'absolute', wordBreak: 'break-word', transform: 'rotateZ(0deg)', color: 'transparent', zIndex: '2'}}>STORY   maker</div><div data-us-text="id-zhx9665hsyj04a9zq4g9q" style={{width: '1032.19px', top: '540.13px', left: '59.904px', fontSize: '51.84px', lineHeight: '52.1864px', letterSpacing: '-1.18574px', fontFamily: '"Uncial Antiqua"', fontWeight: '400', textAlign: 'center', position: 'absolute', wordBreak: 'break-word', transform: 'rotateZ(0deg)', color: 'transparent', zIndex: '2'}}>STORY   maker</div><div data-us-text="id-zfvpz6676agfrv5z5q095" style={{width: '1032.19px', top: '540.13px', left: '59.904px', fontSize: '51.84px', lineHeight: '52.1864px', letterSpacing: '-1.18574px', fontFamily: '"Uncial Antiqua"', fontWeight: '400', textAlign: 'center', position: 'absolute', wordBreak: 'break-word', transform: 'rotateZ(0deg)', color: 'transparent', zIndex: '2'}}>STORY   maker</div><div data-us-text="id-6584ju2i9w2dwmfdeydjcw" style={{width: '1032.19px', top: '540.13px', left: '59.904px', fontSize: '51.84px', lineHeight: '52.1864px', letterSpacing: '-1.18574px', fontFamily: '"Uncial Antiqua"', fontWeight: '400', textAlign: 'center', position: 'absolute', wordBreak: 'break-word', transform: 'rotateZ(0deg)', color: 'transparent', zIndex: '2'}}>STORY   maker</div><div data-us-text="id-47a4iwl6mgpfes6ob6k0pk" style={{width: '1032.19px', top: '540.13px', left: '59.904px', fontSize: '51.84px', lineHeight: '52.1864px', letterSpacing: '-1.18574px', fontFamily: '"Uncial Antiqua"', fontWeight: '400', textAlign: 'center', position: 'absolute', wordBreak: 'break-word', transform: 'rotateZ(0deg)', color: 'transparent', zIndex: '2'}}>STORY   maker</div></div>
</div>
<div className="flex flex-col relative z-10 text-center mr-auto mb-60 ml-auto space-y-6 items-center">
<div className="mb-6">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-200 backdrop-blur">
<svg className="lucide lucide-wand-2 w-3.5 h-3.5 text-orange-300" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
                New: AI Illustrations just landed
            </span>
</div>
<h1 className="sm:text-6xl md:text-7xl text-4xl font-semibold text-white tracking-tight">Create magical stories for kids</h1>
<p className="max-w-2xl sm:text-lg text-base text-zinc-300 mt-0">
            Bring imagination to life with AI-powered storytelling and custom illustrations. Create personalized children's books in minutes.
        </p>
<div className="flex gap-3 mt-8 mb-0 pb-[60px] items-center">
<a className="inline-flex items-center gap-2 shadow-orange-900/25 transform-gpu transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-6px_rgba(251,146,60,0.4)] hover:scale-[1.02] active:scale-[0.98] active:duration-75 text-sm font-semibold text-white bg-gradient-to-br from-orange-400 to-pink-500 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-lg" href="#">
                Create Your Story
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 hover:bg-white/5 text-sm font-medium text-zinc-200 border-white/10 border rounded-full pt-2.5 pr-5 pb-2.5 pl-5 backdrop-blur-lg" href="#">
<svg className="lucide lucide-play w-4 h-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
                Watch demo
            </a>
</div>
</div>

<div className="relative sm:mt-16 mt-12 z-10">
<div className="absolute inset-0 -top-8 mx-auto h-56 max-w-5xl rounded-[28px] bg-gradient-to-r from-orange-400/30 via-pink-500/20 to-purple-500/30 blur-2xl"></div>
<section className="relative ring-1 ring-white/10 supports-[backdrop-filter]:bg-white/5 overflow-hidden text-white bg-white/5 border-slate-50/10 border rounded-2xl backdrop-blur-xl" style={{maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 20%, transparent 100%)'}}>

<nav className="hidden sm:flex flex-col absolute inset-y-0 left-0 w-14 ring-1 ring-white/10 z-10 border-slate-50/0 border-r pt-4 pr-2 pb-4 pl-2 backdrop-blur items-center justify-between">
<div className="flex flex-col gap-3 items-center">
<button className="h-10 w-10 rounded-xl bg-gradient-to-br from-orange-400 to-pink-500 ring-1 ring-white/20 shadow-lg shadow-orange-900/25 flex items-center justify-center" title="Create Story" type="button">
<svg className="lucide lucide-book-open w-5 h-5 text-white" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</button>
<div className="h-px w-8 bg-white/10"></div>
<button className="h-10 w-10 rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-slate-300 flex items-center justify-center" title="Characters" type="button">
<svg className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</button>
<button className="h-10 w-10 ring-1 ring-white/10 hover:bg-white/10 flex text-slate-50 bg-white/25 rounded-xl items-center justify-center" title="Illustrations" type="button">
<svg className="lucide lucide-palette w-5 h-5" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</button>
<button className="h-10 w-10 ring-1 ring-white/10 hover:bg-white/10 flex text-slate-300 bg-white/5 rounded-xl items-center justify-center" title="Templates" type="button">
<svg className="lucide lucide-layout-template w-5 h-5" data-lucide="layout-template" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></svg>
</button>
<button className="h-10 w-10 rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-slate-300 flex items-center justify-center" title="Library" type="button">
<svg className="lucide lucide-library w-5 h-5" data-lucide="library" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6 4 14"></path><path d="M12 6v14"></path><path d="M8 8v12"></path><path d="M4 4v16"></path></svg>
</button>
</div>
<div className="flex flex-col items-center gap-3">
<button className="h-10 w-10 rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-slate-300 flex items-center justify-center" title="Settings" type="button">
<svg className="lucide lucide-settings w-5 h-5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</nav>
<div className="grid grid-cols-1 lg:grid-cols-2 sm:pl-16">

<div className="sm:p-8 lg:p-10 pt-5 pr-5 pb-5 pl-5">
<div className="space-y-6">
<div className="flex items-center justify-between">
<h2 className="sm:text-2xl text-xl font-semibold text-white tracking-tight">Create Your Story</h2>
<div className="flex gap-2 text-slate-300 items-center">
<svg className="lucide lucide-wand-2 w-4 h-4" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
<span className="sm:text-sm text-xs font-medium">AI Powered</span>
</div>
</div>
<div className="space-y-4">

<div className="space-y-3">
<label className="text-sm font-medium text-slate-300">Main Character</label>
<div className="relative">
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-transparent" placeholder="e.g., Luna the brave little fox" type="text"/>
<button className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-lg bg-orange-400/10 hover:bg-orange-400/20">
<svg className="lucide lucide-sparkles w-[16px] h-[16px] text-slate-300" data-icon-replaced="true" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</button>
</div>
</div>

<div className="space-y-3">
<label className="text-sm font-medium text-slate-300">Story Theme</label>
<div className="grid grid-cols-2 gap-2">
<button className="flex items-center gap-2 p-3 rounded-xl bg-orange-400/10 border border-orange-400/20 text-orange-300 text-sm font-medium">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
                                        Friendship
                                    </button>
<button className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 text-sm font-medium">
<svg className="lucide lucide-mountain w-4 h-4" data-lucide="mountain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg>
                                        Adventure
                                    </button>
<button className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 text-sm font-medium">
<svg className="lucide lucide-graduation-cap w-4 h-4" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
                                        Learning
                                    </button>
<button className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 text-sm font-medium">
<svg className="lucide lucide-home w-4 h-4" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                                        Family
                                    </button>
</div>
</div>

<div className="space-y-3">
<label className="text-sm font-medium text-slate-300">Age Range</label>
<div className="flex gap-2">
<button className="px-4 py-2 rounded-lg bg-pink-400/10 border border-pink-400/20 text-pink-300 text-sm font-medium">3-5 years</button>
<button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 text-sm font-medium">6-8 years</button>
<button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 text-sm font-medium">9-12 years</button>
</div>
</div>

<button className="w-full inline-flex items-center justify-center gap-2 shadow-orange-900/25 text-sm font-semibold text-white bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl pt-3 pr-4 pb-3 pl-4 shadow-lg transform-gpu transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-6px_rgba(251,146,60,0.4)] hover:scale-[1.02] active:scale-[0.98] active:duration-75 mt-6">
<svg className="lucide lucide-wand-2 w-4 h-4" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
                                Generate Story
                            </button>
</div>
</div>
</div>

<div className="lg:border-t-0 lg:border-l border-white/10 border-t">
<div className="sm:p-8 lg:p-10 pt-5 pr-5 pb-5 pl-5 space-y-6">
<div className="flex items-center justify-between">
<h3 className="text-xl tracking-tight font-semibold text-white">Story Preview</h3>
<div className="flex gap-2 text-slate-300 items-center">
<svg className="lucide lucide-eye w-4 h-4" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="sm:text-sm text-xs font-medium">Live Preview</span>
</div>
</div>

<div className="relative">
<div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-white/10 shadow-xl">

<div className="aspect-[3/4] bg-gradient-to-br from-orange-200 to-pink-200 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-pink-500/20 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/db8c872b-e8f6-4093-ab2d-495a3b779638_800w.jpg)] bg-cover" style={{}}></div>
<div className="relative text-center">
<div className="w-16 h-16 flex bg-white/50 rounded-full mr-auto mb-3 ml-auto items-center justify-center">
<svg className="lucide lucide-heart w-[32px] h-[32px] text-slate-950" data-icon-replaced="true" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5', width: '32px', height: '32px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</div>
<h4 className="text-lg font-bold text-slate-50">Luna's Big Adventure</h4>
<p className="text-sm text-slate-50 mt-1">A tale of friendship</p>
</div>
</div>

<div className="space-y-3 text-sm">
<p className="text-slate-300 leading-relaxed">
                                        "Once upon a time, in a magical forest filled with twinkling stars, lived Luna the brave little fox..."
                                    </p>
<div className="flex items-center gap-2 text-slate-400 text-xs">
<svg className="lucide lucide-book-open w-3 h-3" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
<span>Chapter 1 of 5</span>
</div>
</div>
</div>
</div>

<div className="flex gap-2">
<button className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-white/10 border border-white/10 rounded-lg py-2.5 hover:bg-white/15">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                                Download PDF
                            </button>
<button className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-white/10 border border-white/10 rounded-lg py-2.5 hover:bg-white/15">
<svg className="lucide lucide-share-2 w-4 h-4" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
                                Share Story
                            </button>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</section>

<section className="relative z-10 bg-gradient-to-b from-[#000000] to-[#0A0A11]">
<div className="max-w-6xl sm:px-6 lg:px-8 mr-auto ml-auto pt-20 pr-4 pb-20 pl-4">
<div className="text-center mb-16">
<h2 className="sm:text-4xl text-3xl font-semibold text-white tracking-tight">Everything you need to create amazing stories</h2>
<p className="mt-4 text-zinc-300 max-w-2xl mx-auto">From AI-generated plots to custom illustrations, bring your children's stories to life with professional-quality results.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

<div className="relative h-full ring-1 ring-white/10 max-w-xl flex flex-col bg-neutral-900/30 rounded-3xl backdrop-blur">
<div className="sm:p-8 flex-1 pt-6 pr-6 pb-6 pl-6 space-y-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 flex ring-1 ring-white/20 bg-gradient-to-t from-slate-900/20 to-slate-700/30 rounded-xl items-center justify-center">
<svg className="lucide lucide-brain w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5', width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>
</div>
<span className="text-sm font-medium text-slate-400">AI Storytelling</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white">Smart Story Generation</h3>
<p className="text-sm leading-relaxed text-neutral-300">
            Our advanced AI creates engaging, age-appropriate stories with compelling characters, meaningful lessons, and educational values that children love. Each story is uniquely crafted to spark imagination while teaching important life skills.
        </p>

<div className="space-y-3">
<div className="flex items-start gap-3">
<svg className="lucide lucide-check-circle w-4 h-4 text-blue-300 mt-0.5 flex-shrink-0" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<div className="text-xs text-neutral-300">
<span className="font-medium text-white">Personalized Characters:</span> Create unique protagonists based on your child's interests and personality
                </div>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check-circle w-4 h-4 text-blue-300 mt-0.5 flex-shrink-0" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<div className="text-xs text-neutral-300">
<span className="font-medium text-white">Educational Themes:</span> Stories that teach friendship, courage, kindness, and problem-solving
                </div>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check-circle flex-shrink-0 mt-0.5 w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5', width: '16px', height: '16px', color: 'rgb(147, 197, 253)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<div className="text-xs text-neutral-300">
<span className="font-medium text-white">Multiple Lengths:</span> Short bedtime tales to longer chapter books for different attention spans
                </div>
</div>
</div>
<div className="flex flex-wrap gap-2 mt-4">
<span className="inline-flex items-center gap-1.5 ring-1 ring-stone-400/20 text-xs text-slate-50 bg-slate-400/10 rounded-md pt-1 pr-2 pb-1 pl-2">
<svg className="lucide lucide-zap w-3 h-3" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                Fast Generation
            </span>
<span className="inline-flex items-center gap-1.5 ring-1 ring-stone-400/20 text-xs text-slate-50 bg-slate-400/10 rounded-md pt-1 pr-2 pb-1 pl-2">
<svg className="lucide lucide-heart w-3 h-3" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
                Age-Appropriate
            </span>
<span className="inline-flex items-center gap-1.5 ring-1 ring-stone-400/20 text-xs text-slate-50 bg-slate-400/10 rounded-md pt-1 pr-2 pb-1 pl-2">
<svg className="lucide lucide-globe w-3 h-3" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                Multi-Language
            </span>
</div>

<div className="pt-4 border-t border-white/10">
<div className="grid grid-cols-3 gap-4 text-center">
<div>
<div className="text-lg font-semibold text-white">500+</div>
<div className="text-xs text-neutral-400">Story Templates</div>
</div>
<div className="">
<div className="text-lg font-semibold text-white">50+</div>
<div className="text-xs text-neutral-400">Character Types</div>
</div>
<div className="">
<div className="text-lg font-semibold text-white">15</div>
<div className="text-xs text-neutral-400">Languages</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative ring-1 ring-white/5 max-w-xl h-full flex flex-col bg-neutral-900/40 border-neutral-800/70 border rounded-3xl shadow-2xl backdrop-blur">
<div className="relative sm:p-6 lg:p-8 flex-1 flex flex-col pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center gap-3 mb-4">
<div className="h-10 w-10 flex ring-1 ring-white/20 bg-gradient-to-t from-slate-900/20 to-slate-700/30 rounded-xl items-center justify-center">
<svg className="lucide lucide-palette w-5 h-5 text-white" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<span className="text-sm font-medium text-slate-400">Custom Artwork</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-4">Beautiful Illustrations</h3>
<p className="text-sm leading-relaxed text-neutral-300 mb-6">
                            Every story comes with unique, colorful illustrations that match your narrative perfectly.
                        </p>

<div className="grid grid-cols-2 gap-2 mb-4">
<div className="aspect-square flex bg-gradient-to-br from-pink-200 to-orange-200 bg-[url(https://cdn.midjourney.com/1486a48c-9a3e-45a2-907b-95cc2b1c5f6d/0_0.png?w=800&amp;q=80)] bg-cover rounded-lg items-center justify-center" style={{}}>
<span className="inline-flex h-9 w-9 items-center justify-center shadow-[inset_0_0_0_2px_rgba(255,255,255,0.06)] text-white bg-gray-50/50 rounded-full">
<svg aria-hidden="true" className="lucide lucide-sun w-[18px] h-[18px] text-slate-950" data-icon-replaced="true" data-lucide="sun" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</span>
</div>
<div className="aspect-square flex bg-gradient-to-br from-blue-200 to-purple-200 bg-[url(https://cdn.midjourney.com/988c48a8-3d68-40b7-8b55-026340f2d195/0_0.png?w=800&amp;q=80)] bg-cover rounded-lg items-center justify-center">
<span className="inline-flex h-9 w-9 items-center justify-center shadow-[inset_0_0_0_2px_rgba(255,255,255,0.06)] text-white bg-gray-50/50 rounded-full">
<svg aria-hidden="true" className="lucide lucide-moon lucide-sun w-[18px] h-[18px] text-slate-950" data-icon-replaced="true" data-lucide="moon" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
</span>
</div>
<div className="aspect-square flex bg-gradient-to-br from-green-200 to-emerald-200 bg-cover rounded-lg items-center justify-center bg-[url(https://cdn.midjourney.com/0e29691d-e0cf-4acc-9544-d6013e7223dd/0_0.png?w=800&amp;q=80)] bg-center">
<span className="inline-flex h-9 w-9 items-center justify-center shadow-[inset_0_0_0_2px_rgba(255,255,255,0.06)] text-white bg-gray-50/50 rounded-full">
<svg aria-hidden="true" className="lucide lucide-hop-off lucide-sun w-[18px] h-[18px] text-slate-950" data-icon-replaced="true" data-lucide="hop-off" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27"></path><path d="M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28"></path><path d="M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26"></path><path d="M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25"></path><path d="M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75"></path><path d="M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24"></path><path d="M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28"></path><path d="M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05"></path><path d="m2 2 20 20"></path></svg>
</span>
</div>
<div className="aspect-square flex bg-gradient-to-br from-yellow-200 to-amber-200 bg-[url(https://cdn.midjourney.com/f163e230-a688-4d0b-9455-a8704cc6b17a/0_0.png?w=800&amp;q=80)] bg-cover rounded-lg items-center justify-center">
<span className="inline-flex h-9 w-9 items-center justify-center shadow-[inset_0_0_0_2px_rgba(255,255,255,0.06)] text-white bg-gray-50/50 rounded-full">
<svg aria-hidden="true" className="lucide lucide-sun w-[18px] h-[18px] text-slate-950" data-icon-replaced="true" data-lucide="sun" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</span>
</div>
</div>
<div className="flex gap-2">
<button className="flex-1 inline-flex hover:bg-neutral-100 active:bg-neutral-200 transition text-sm font-medium text-neutral-900 tracking-tight bg-white rounded-lg pt-2 pr-3.5 pb-2 pl-3.5 items-center justify-center">
<svg className="lucide lucide-wand-2 w-4 h-4 mr-2" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
                                Customize Style
                            </button>
</div>
</div>
</div>

<div className="relative ring-1 ring-white/5 bg-neutral-900/40 border-neutral-800/70 border rounded-3xl shadow-2xl backdrop-blur max-w-xl h-full flex flex-col">
<div className="relative sm:p-6 flex-1 border-white/10 border-b pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center gap-3 mb-4">
<div className="h-10 w-10 flex ring-1 ring-white/20 bg-gradient-to-t from-slate-900/20 to-slate-700/30 rounded-xl items-center justify-center">
<svg className="lucide lucide-book w-5 h-5 text-white" data-lucide="book" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path></svg>
</div>
<span className="text-sm font-medium text-slate-400">Publishing</span>
</div>
<h3 className="text-[20px] sm:text-[22px] font-semibold tracking-tight text-white mb-4">
                            Multiple Formats
                        </h3>
<div className="space-y-3 mb-6">
<div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3">
<svg className="lucide lucide-file-text w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5', width: '16px', height: '16px', color: 'rgb(147, 197, 253)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<div className="flex-1">
<p className="text-sm text-white/90 font-medium">PDF Download</p>
<p className="text-[13px] text-white/60">Print-ready format</p>
</div>
</div>
<div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-3.5 py-3">
<svg className="lucide lucide-tablet w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="tablet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5', width: '16px', height: '16px', color: 'rgb(147, 197, 253)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="16" x="4" y="2"></rect><line x1="12" x2="12.01" y1="18" y2="18"></line></svg>
<div className="flex-1">
<p className="text-sm text-white/80 font-medium">Interactive eBook</p>
<p className="text-[13px] text-white/55">With animations</p>
</div>
</div>
<div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-3.5 py-3">
<svg className="lucide lucide-volume-2 w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="volume-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5', width: '16px', height: '16px', color: 'rgb(147, 197, 253)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg>
<div className="flex-1">
<p className="text-sm text-white/80 font-medium">Audio Narration</p>
<p className="text-[13px] text-white/55">AI voice reading</p>
</div>
</div>
</div>
<div className="flex flex-wrap gap-3 items-center">
<button className="flex-1 inline-flex hover:bg-neutral-100 active:bg-neutral-200 transition text-sm font-medium text-neutral-900 tracking-tight bg-white rounded-lg pt-2 pr-3.5 pb-2 pl-3.5 items-center justify-center">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                                Export Options
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 sm:mt-20 border-white/10 border-t mt-16 mr-auto ml-auto pt-10 pr-4 pl-4" id="work">
<div className="flex items-center justify-between">
<h2 className="text-xl sm:text-2xl tracking-tight">Featured Stories</h2>
<a className="inline-flex items-center gap-2 text-sm tracking-tight text-white/70 hover:text-white" href="#">
<span className="">View gallery</span>
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="mt-6 columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">

<article className="group break-inside-avoid mb-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
<div className="relative aspect-[16/9]">
<img alt="Luna's magical forest adventure" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://cdn.midjourney.com/9dc53dde-37ba-4a1b-91b2-2bbb1f4430fc/0_0.png?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
</div>
<div className="border-white/10 border-t pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center gap-2 text-xs text-white/60">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span className="">Friendship</span>
</div>
<h3 className="mt-2 text-base font-semibold tracking-tight">Luna's Forest Friends</h3>
<p className="text-sm text-white/70 mt-1">A brave little fox discovers the magic of friendship in an enchanted forest.</p>
</div>
</article>

<article className="group break-inside-avoid mb-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
<div className="relative aspect-[4/3]">
<img alt="Space adventure story" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://cdn.midjourney.com/bccb5642-c67a-494a-bf73-17cc27590ea6/0_0.png?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
</div>
<div className="p-4 border-t border-white/10">
<div className="flex items-center gap-2 text-xs text-white/60">
<svg className="lucide lucide-rocket w-4 h-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
<span>Adventure</span>
</div>
<h3 className="mt-2 text-base font-semibold tracking-tight">Captain Zoe's Space Mission</h3>
<p className="text-sm text-white/70 mt-1">Join young astronaut Zoe as she explores distant planets and meets alien friends.</p>
</div>
</article>

<article className="group break-inside-avoid mb-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
<div className="relative aspect-[4/3]">
<img alt="Underwater adventure" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://cdn.midjourney.com/18bb744b-79de-4f63-8c1f-adde2520c35a/0_0.png?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
</div>
<div className="p-4 border-t border-white/10">
<div className="flex items-center gap-2 text-xs text-white/60">
<svg className="lucide lucide-waves w-4 h-4" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
<span className="">Ocean</span>
</div>
<h3 className="mt-2 text-base font-semibold tracking-tight">Maya's Underwater Kingdom</h3>
<p className="text-sm text-white/70 mt-1">Dive deep with Maya to discover a magical underwater world full of wonders.</p>
</div>
</article>

<article className="group break-inside-avoid mb-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
<div className="relative aspect-[16/9]">
<img alt="Garden fairy tale" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://cdn.midjourney.com/c02e6b8c-9a86-4014-b14a-0a8d3c5ef376/0_0.png?w=800&amp;q=80" style={{transition: 'outline 0.1s ease-in-out'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
</div>
<div className="p-4 border-t border-white/10">
<div className="flex items-center gap-2 text-xs text-white/60">
<svg className="lucide lucide-flower w-4 h-4" data-lucide="flower" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"></path><path d="M12 7.5V9"></path><path d="M7.5 12H9"></path><path d="M16.5 12H15"></path><path d="M12 16.5V15"></path><path d="m8 8 1.88 1.88"></path><path d="M14.12 9.88 16 8"></path><path d="m8 16 1.88-1.88"></path><path d="M14.12 14.12 16 16"></path></svg>
<span className="">Nature</span>
</div>
<h3 className="mt-2 text-base font-semibold tracking-tight">The Secret Garden</h3>
<p className="text-sm text-white/70 mt-1">Little Emma discovers a magical garden where flowers sing and butterflies paint rainbows.</p>
</div>
</article>

<article className="group break-inside-avoid mb-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
<div className="relative aspect-[16/9]">
<img alt="Dragon friendship story" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://cdn.midjourney.com/8d5826f6-3580-4003-8474-d9bf2491c351/0_0.png?w=800&amp;q=80" style={{outline: 'rgb(245, 158, 11) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
</div>
<div className="p-4 border-t border-white/10">
<div className="flex items-center gap-2 text-xs text-white/60">
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="">Magic</span>
</div>
<h3 className="mt-2 text-base font-semibold tracking-tight">Danny and the Gentle Dragon</h3>
<p className="text-sm text-white/70 mt-1">A shy boy befriends a kind dragon and learns that being different makes you special.</p>
</div>
</article>

<article className="group break-inside-avoid mb-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
<div className="relative aspect-[4/3]">
<img alt="Princess castle story" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://cdn.midjourney.com/700bc4c1-f376-4d9b-ad95-c9e7f6a51ec3/0_0.png?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
</div>
<div className="p-4 border-t border-white/10">
<div className="flex items-center gap-2 text-xs text-white/60">
<svg className="lucide lucide-crown w-4 h-4" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
<span>Fairy Tale</span>
</div>
<h3 className="mt-2 text-base font-semibold tracking-tight">Princess Sophia's Quest</h3>
<p className="text-sm text-white/70 mt-1">A brave princess embarks on a quest to save her kingdom with courage and kindness.</p>
</div>
</article>
</div>
</section><section className="relative z-10 mt-10">
<div className="max-w-5xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pb-20 pl-4">
<div className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/70 to-zinc-900/40 p-8 text-center backdrop-blur">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Start creating magical stories today</h2>
<p className="mt-2 text-zinc-300">Free to try. Create unlimited stories for your little ones.</p>
<div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
<a className="inline-flex items-center gap-2 shadow-orange-900/25 text-sm font-semibold text-white bg-gradient-to-br from-orange-400 to-pink-500 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-lg transform-gpu transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-6px_rgba(251,146,60,0.4)] hover:scale-[1.02] active:scale-[0.98] active:duration-75" href="#">
                        Create Your First Story
                        <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-zinc-200 hover:bg-white/5" href="#">
                        View Examples
                        <svg className="lucide lucide-book-open w-4 h-4" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</a>
</div>
</div>
</div>
</section>

<footer className="relative z-10 border-t border-white/10">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-10 pr-4 pb-10 pl-4">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-pink-500">
<svg className="lucide lucide-book-open w-4 h-4 text-white" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</span>
<span className="text-sm font-medium text-zinc-300">© 2025 StoryMaker AI</span>
</div>
<div className="flex items-center gap-4 text-sm text-zinc-400">
<a className="hover:text-zinc-200" href="#">Privacy</a>
<a className="hover:text-zinc-200" href="#">Terms</a>
<a className="hover:text-zinc-200" href="#">Support</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
