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
      

<div className="aura-background-component top-0 w-full -z-10 absolute brightness-150 opacity-80 h-[1000px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="x6cbPWi9roeeiZ8cuBu3"></div>

</div>


<nav className="sticky top-0 z-50 bg-white border-b border-slate-200 px-4 md:px-8 py-3 shadow-sm">
<div className="flex max-w-screen-2xl mr-auto ml-auto gap-x-6 gap-y-6 items-center justify-between">

<a className="inline-flex items-center justify-center bg-center opacity-80 w-[100px] h-[18px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7912e631-132d-4a5b-b77b-c2767849133b_320w.png)] bg-cover rounded-full pr-2 pl-2" href="#"></a>

<div className="relative hidden md:block font-geist">
<button className="flex items-center gap-2 text-base font-medium transition-colors hover:text-indigo-600 focus:outline-none" onclick="const menu = document.getElementById('list-dropdown'); menu.classList.toggle('opacity-0'); menu.classList.toggle('scale-y-0'); menu.classList.toggle('pointer-events-none');">
            Categories
            <svg aria-hidden="true" className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>

<div className="absolute top-full left-0 mt-4 w-60 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden transition-all duration-300 origin-top opacity-0 scale-y-0 pointer-events-none z-[100]" id="list-dropdown">
<div className="p-1.5 space-y-0.5">
<a className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-slate-600 rounded-lg hover:bg-slate-50 hover:text-indigo-600 transition-colors group" href="#">
                Development
                <svg className="lucide lucide-code-2 w-4 h-4 text-slate-400 group-hover:text-indigo-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m18 16 4-4-4-4"></path>
<path d="m6 8-4 4 4 4"></path>
<path d="m14.5 4-5 16"></path>
</svg>
</a>
<a className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-slate-600 rounded-lg hover:bg-slate-50 hover:text-indigo-600 transition-colors group" href="#">
                Business &amp; Finance
                <svg className="lucide lucide-briefcase w-4 h-4 text-slate-400 group-hover:text-indigo-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" ry="2" width="20" x="2" y="7"></rect>
<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
</svg>
</a>
<a className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-slate-600 rounded-lg hover:bg-slate-50 hover:text-indigo-600 transition-colors group" href="#">
                IT &amp; Software
                <svg className="lucide lucide-monitor w-4 h-4 text-slate-400 group-hover:text-indigo-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" ry="2" width="20" x="2" y="3"></rect>
<line x1="8" x2="16" y1="21" y2="21"></line>
<line x1="12" x2="12" y1="17" y2="21"></line>
</svg>
</a>
<a className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-slate-600 rounded-lg hover:bg-slate-50 hover:text-indigo-600 transition-colors group" href="#">
                Design &amp; Marketing
                <svg className="lucide lucide-pen-tool w-4 h-4 text-slate-400 group-hover:text-indigo-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m12 19 7-7 3 3-7 7-3-3z"></path>
<path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
<path d="m2 2 7.586 7.586"></path>
<circle cx="11" cy="11" r="2"></circle>
</svg>
</a>
<div className="my-1 border-t border-slate-100 mx-2"></div>
<a className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-slate-600 rounded-lg hover:bg-slate-50 hover:text-indigo-600 transition-colors group" href="#">
                View all categories
                <svg className="lucide lucide-arrow-right w-4 h-4 text-slate-400 group-hover:text-indigo-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>

<div className="flex-1 max-w-2xl hidden md:block relative">
<svg aria-hidden="true" className="lucide lucide-search absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full pl-12 pr-4 py-3 rounded-full border border-slate-300 bg-slate-50 text-base focus:outline-none focus:ring-2 transition-all placeholder:text-slate-400 focus:ring-indigo-500/20 focus:border-indigo-500" placeholder="Search for Python, Leadership, or AI..." type="text"/>
</div>

<div className="flex items-center gap-4">
<a className="hidden lg:block text-base font-medium font-geist hover:text-indigo-600" href="#">
            Teach
          </a>
<a className="hidden lg:block text-base font-medium font-geist hover:text-indigo-600" href="#">
            Business
          </a>
<button className="p-2 hover:bg-slate-100 rounded-full relative">
<svg aria-hidden="true" className="lucide lucide-shopping-cart w-6 h-6" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
<span className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white bg-indigo-600"></span>
</button>
<div className="hidden sm:flex gap-3">
<button className="px-5 py-2.5 text-base font-medium border border-slate-300 hover:bg-slate-50 rounded-lg transition-colors font-geist">
              Log in
            </button>
<button className="px-5 py-2.5 text-base font-medium bg-slate-900 text-white hover:bg-slate-800 rounded-lg transition-colors shadow-sm font-geist">
              Sign up
            </button>
</div>
</div>
</div>
</nav>

<header className="md:px-8 md:pt-40 max-w-screen-2xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4">
<div className="overflow-hidden bg-slate-100 rounded-3xl relative shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="grid md:grid-cols-2 gap-12 md:p-16 pt-8 pr-8 pb-8 pl-8 gap-x-12 gap-y-12 items-center">
<div className="relative z-10 max-w-lg">
<h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-slate-900 mb-6 leading-[1.1] font-jakarta font-medium">
              Invest in your future self today.
            </h1>
<p className="text-xl text-slate-600 mb-8 leading-relaxed font-geist">
              Master Generative AI, leadership, and coding with our Personal
              Plan. Sale ends Feb 14.
            </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="group flex overflow-hidden uppercase transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)] focus:outline-none text-sm font-medium text-white tracking-widest font-geist rounded-full pt-5 pr-12 pb-5 pl-12 relative items-center justify-center">
<style>
                  @keyframes beam-spin { to { transform: rotate(360deg); } }
                  @keyframes dots-move {
                      0% { background-position: 0 0; }
                      100% { background-position: 24px 24px; }
                  }
                </style>

<div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
<div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#ea580c_360deg)]" style={{animation: 'beam-spin 3s linear infinite'}}></div>
<div className="absolute inset-[1px] rounded-full bg-black"></div>
</div>

<div className="-z-10 overflow-hidden bg-zinc-950 rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px]">

<div className="absolute inset-0 bg-gradient-to-b from-zinc-800/60 to-transparent"></div>

<div className="opacity-30 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '12px 12px', animation: 'dots-move 8s linear infinite'}}></div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-orange-500/10 blur-2xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-orange-500/30"></div>
</div>

<span className="transition-colors group-hover:text-white text-white/90 z-10 relative">
                  Get Personal Plan
                </span>
<svg className="lucide lucide-arrow-right relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
<p className="mt-4 text-base text-slate-500 font-geist">
              Starting at $14.99/month, cancel anytime.
            </p>
</div>
<div className="relative h-full min-h-[400px] flex items-center justify-center">

<div className="bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7fb191b7-29fd-428d-a6e7-ec471ed8f225_1600w.webp)] bg-cover bg-center rounded-2xl absolute top-0 right-0 bottom-0 left-0 rotate-3"></div>
<img alt="Woman Learning" className="relative z-10 rounded-2xl shadow-2xl object-cover h-[450px] w-full max-w-md mx-auto -rotate-2 hover:rotate-0 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f8322831-e2ba-4007-9960-8e7e82b00480_1600w.webp"/>
</div>
</div>
</div>
</header>

<section className="md:px-8 max-w-screen-2xl mt-20 mr-auto mb-20 ml-auto px-4">
<div className="md:p-16 overflow-hidden text-white bg-slate-900 rounded-3xl pt-8 pr-8 pb-8 pl-8 relative">
<div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="">
<h2 className="text-3xl md:text-5xl tracking-tight mb-6 font-jakarta font-medium">
              Master the AI Revolution
            </h2>
<p className="text-xl text-slate-300 mb-8 leading-relaxed font-geist">
              Don't just adapt—lead. Our new AI academy prepares you for the
              jobs of tomorrow with hands-on labs and expert-led strategy
              courses.
            </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-6 h-6 mt-0.5 text-indigo-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-lg font-geist">
                  Build custom LLMs and agents
                </span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-6 h-6 mt-0.5 text-indigo-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-lg font-geist">
                  Prompt engineering certification
                </span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-6 h-6 mt-0.5 text-indigo-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-lg font-geist">
                  AI ethics and compliance mastery
                </span>
</li>
</ul>
<button className="group flex overflow-hidden uppercase transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)] focus:outline-none text-sm font-medium text-white tracking-widest font-geist rounded-full pt-5 pr-12 pb-5 pl-12 relative items-center justify-center">
<style>
                @keyframes beam-spin { to { transform: rotate(360deg); } }
                @keyframes dots-move {
                    0% { background-position: 0 0; }
                    100% { background-position: 24px 24px; }
                }
              </style>

<div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
<div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#ea580c_360deg)]" style={{animation: 'beam-spin 3s linear infinite'}}></div>
<div className="absolute inset-[1px] rounded-full bg-black"></div>
</div>

<div className="-z-10 overflow-hidden bg-zinc-950 rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px]">

<div className="absolute inset-0 bg-gradient-to-b from-zinc-800/60 to-transparent"></div>

<div className="opacity-30 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '12px 12px', animation: 'dots-move 8s linear infinite'}}></div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-orange-500/10 blur-2xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-orange-500/30"></div>
</div>

<span className="transition-colors group-hover:text-white text-white/90 z-10 relative">
                Explore AI Academy
              </span>
<svg className="lucide lucide-arrow-right relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</button>
<p className="text-base text-slate-400 font-geist mt-4">
              Plan starts at $14.99/month
            </p>
</div>
<div className="relative">

<img alt="AI Technology" className="rounded-2xl shadow-2xl border border-slate-700/50 relative z-10 object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9216dcb2-10da-495a-beb4-a2fb055af7f5_1600w.webp"/>
<div className="absolute -top-10 -right-10 w-32 h-32 blur-[80px] opacity-50 bg-indigo-500"></div>
<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500 blur-[80px] opacity-40"></div>
</div>
</div>
</div>
</section>

<main className="z-10 bg-white pt-20 pb-20 relative">
<div className="md:px-10 flex flex-col md:flex-row lg:gap-24 max-w-screen-2xl mr-auto ml-auto pr-6 pl-6 gap-x-12 gap-y-12">

<aside className="md:w-1/3 lg:w-1/4">
<div className="md:sticky md:top-32 space-y-12">
<div className="space-y-4">
<span className="text-xs font-semibold tracking-[0.2em] uppercase font-geist text-indigo-600">
                Enrolling for 2025
              </span>
<h1 className="font-jakarta text-4xl md:text-5xl tracking-tight text-slate-900 font-semibold leading-tight">
                Advanced Paths
              </h1>
<p className="text-slate-500 text-sm leading-relaxed max-w-xs font-geist">
                Structured curriculums designed to take you from foundational
                concepts to professional mastery in record time.
              </p>
</div>

<div className="space-y-6 pt-4 border-t border-slate-200">
<h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider font-jakarta">
                Categories
              </h3>
<div className="flex flex-col gap-3 items-start text-sm font-geist">
<button className="font-medium flex items-center gap-3 group w-full text-indigo-600">
<span className="h-1.5 w-1.5 rounded-full shadow-[0_0_8px_rgba(147,51,234,0.4)] bg-indigo-600"></span>
<span className="">All Specializations</span>
<span className="ml-auto text-slate-400 text-xs">12</span>
</button>
<button className="text-slate-500 transition-colors flex items-center gap-3 group w-full hover:text-indigo-600">
<span className="h-1.5 w-1.5 rounded-full bg-transparent border border-slate-300 transition-colors group-hover:border-indigo-400"></span>
<span className="">Software Engineering</span>
<span className="ml-auto text-slate-400 text-xs">CS</span>
</button>
<button className="text-slate-500 transition-colors flex items-center gap-3 group w-full hover:text-indigo-600">
<span className="h-1.5 w-1.5 rounded-full bg-transparent border border-slate-300 transition-colors group-hover:border-indigo-400"></span>
<span className="">Artificial Intelligence</span>
<span className="ml-auto text-slate-400 text-xs">AI</span>
</button>
<button className="text-slate-500 transition-colors flex items-center gap-3 group w-full hover:text-indigo-600">
<span className="h-1.5 w-1.5 rounded-full bg-transparent border border-slate-300 transition-colors group-hover:border-indigo-400"></span>
<span className="">Product Leadership</span>
<span className="ml-auto text-slate-400 text-xs">PM</span>
</button>
</div>
</div>

<div className="pt-8 hidden md:block">
<a className="inline-flex items-center gap-2 text-sm text-slate-600 transition border border-slate-200 px-4 py-2.5 rounded-full bg-slate-50 group font-medium font-geist hover:text-indigo-600" href="#">
<svg aria-hidden="true" className="lucide lucide-help-circle w-4 h-4 text-indigo-600" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
                Counseling Discovery Call
              </a>
</div>
</div>
</aside>

<div className="md:w-2/3 lg:w-3/4 space-y-24">

<div className="group cursor-pointer">
<div className="relative w-full aspect-[16/9] md:aspect-[2/1] overflow-hidden bg-slate-100 mb-6 rounded-2xl border border-slate-200">
<img alt="AI Research" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0542d422-c471-4a89-bda9-ee83028a39fd_1600w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80"></div>
<div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10">
<div className="flex items-center gap-2 mb-3">
<span className="px-2 py-1 text-white text-[10px] font-semibold uppercase tracking-widest rounded-md bg-indigo-600">
                    Premier Track
                  </span>
<span className="text-white/70 text-xs font-geist">
                    240 Learners Enrolled
                  </span>
</div>
<h2 className="text-3xl md:text-5xl font-jakarta text-white mb-2 font-semibold tracking-tight">
                  AI Systems Architect
                </h2>
<p className="text-slate-300 text-sm md:text-base max-w-lg font-geist leading-relaxed">
                  Master the orchestration of large language models, vector
                  databases, and agentic workflows in enterprise environments.
                </p>
</div>
<div className="absolute top-6 right-6">
<div className="bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full h-12 w-12 flex items-center justify-center transition-all group-hover:bg-indigo-600 group-hover:border-indigo-600">
<svg aria-hidden="true" className="lucide lucide-arrow-up-right w-6 h-6" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">

<div className="group cursor-pointer flex flex-col gap-4">
<div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-50 rounded-xl border border-slate-200">
<img alt="Cloud Architecture" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0f977d2a-7fa2-46f5-9184-c65ee5ecf77b_1600w.jpg" style={{}}/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[10px] font-semibold px-2 py-1 uppercase tracking-wider rounded border border-slate-200 text-indigo-600">
                  Popular
                </div>
</div>
<div className="flex flex-col gap-1 border-t border-slate-100 pt-4 transition-colors group-hover:border-indigo-200">
<div className="flex justify-between items-center">
<h3 className="text-xl font-jakarta font-semibold text-slate-900 tracking-tight">
                    Cloud Native Engineering
                  </h3>
<svg aria-hidden="true" className="lucide lucide-cloud w-5 h-5 text-slate-400 transition-colors group-hover:text-indigo-600" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
</div>
<p className="text-sm text-slate-500 font-geist">
                  Scalable infrastructure using Kubernetes, Docker, and AWS.
                </p>
</div>
</div>

<div className="group cursor-pointer flex flex-col gap-4">
<div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-50 rounded-xl border border-slate-200">
<img alt="UX Engineering" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/392e1853-9e7b-43bf-b4a2-918f9f9018f4_1600w.jpg" style={{}}/>
</div>
<div className="flex flex-col gap-1 border-t border-slate-100 pt-4 transition-colors group-hover:border-indigo-200">
<div className="flex justify-between items-center">
<h3 className="text-xl font-jakarta font-semibold text-slate-900 tracking-tight">
                    Full-Stack UX Engineering
                  </h3>
<svg aria-hidden="true" className="lucide lucide-layout w-5 h-5 text-slate-400 transition-colors group-hover:text-indigo-600" data-lucide="layout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</div>
<p className="text-sm text-slate-500 font-geist">
                  Bridging the gap between complex UI design and robust code.
                </p>
</div>
</div>
</div>

<div className="pt-12 border-t border-slate-200">
<div className="flex justify-between items-end mb-8">
<div className="">
<h2 className="font-jakarta text-3xl text-slate-900 font-semibold tracking-tight">
                  The LearnAI Method
                </h2>
<p className="text-slate-500 text-sm mt-2 font-geist">
                  Our proprietary 4-stage progression for deep skill
                  acquisition.
                </p>
</div>
<button className="text-sm font-semibold transition flex items-center gap-1 group font-geist text-indigo-600 hover:text-indigo-700">
                Full Curriculum Guide
                <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="flex flex-col text-sm font-geist">

<div className="grid grid-cols-12 gap-4 pb-4 border-b border-slate-200 text-[10px] uppercase tracking-widest text-slate-400 font-semibold">
<div className="col-span-5 md:col-span-4">Milestone</div>
<div className="col-span-4 md:col-span-5">Core Learning</div>
<div className="col-span-3 md:col-span-3 text-right">Intensity</div>
</div>

<div className="group grid grid-cols-12 gap-4 py-6 border-b border-slate-100 items-center hover:bg-slate-50 transition-colors -mx-2 px-2 rounded-lg cursor-pointer">
<div className="col-span-5 md:col-span-4 text-slate-900 font-medium transition-colors flex items-center gap-2 group-hover:text-indigo-600">
<span className="text-xs text-slate-400 font-mono">01</span>
                  Skill Assessment
                </div>
<div className="col-span-4 md:col-span-5 text-slate-500">
                  Benchmark Testing, Goal Setting
                </div>
<div className="col-span-3 md:col-span-3 text-right text-slate-400 font-mono">
                  4 Hours
                </div>
</div>

<div className="group grid grid-cols-12 gap-4 py-6 border-b border-slate-100 items-center hover:bg-slate-50 transition-colors -mx-2 px-2 rounded-lg cursor-pointer">
<div className="col-span-5 md:col-span-4 text-slate-900 font-medium transition-colors flex items-center gap-2 group-hover:text-indigo-600">
<span className="text-xs text-slate-400 font-mono">02</span>
                  Core Immersion
                </div>
<div className="col-span-4 md:col-span-5 text-slate-500">
                  Interactive Lectures, Lab Work
                </div>
<div className="col-span-3 md:col-span-3 text-right text-slate-400 font-mono">
                  40 Hours
                </div>
</div>

<div className="group grid grid-cols-12 gap-4 py-6 border-b border-slate-100 items-center hover:bg-slate-50 transition-colors -mx-2 px-2 rounded-lg cursor-pointer">
<div className="col-span-5 md:col-span-4 text-slate-900 font-medium transition-colors flex items-center gap-2 group-hover:text-indigo-600">
<span className="text-xs text-slate-400 font-mono">03</span>
                  Project Simulation
                </div>
<div className="col-span-4 md:col-span-5 text-slate-500">
                  Real-world Case Studies, Peer Review
                </div>
<div className="col-span-3 md:col-span-3 text-right text-slate-400 font-mono">
                  60 Hours
                </div>
</div>

<div className="group grid grid-cols-12 gap-4 py-6 border-b border-slate-100 items-center hover:bg-slate-50 transition-colors -mx-2 px-2 rounded-lg cursor-pointer">
<div className="col-span-5 md:col-span-4 text-slate-900 font-medium transition-colors flex items-center gap-2 group-hover:text-indigo-600">
<span className="text-xs text-slate-400 font-mono">04</span>
                  Certification
                </div>
<div className="col-span-4 md:col-span-5 text-slate-500">
                  Final Exam, Portfolio Verification
                </div>
<div className="col-span-3 md:col-span-3 text-right text-slate-400 font-mono">
                  12 Hours
                </div>
</div>
</div>
</div>

<div className="flex justify-center pt-8">
<button className="text-slate-400 transition-colors text-sm flex flex-col items-center gap-2 font-geist hover:text-indigo-600">
<svg aria-hidden="true" className="lucide lucide-file-text w-5 h-5" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span>Request Career Syllabus</span>
</button>
</div>
</div>
</div>
</main>
<section className="md:px-8 max-w-screen-2xl mr-auto mb-20 ml-auto px-4">
<h2 className="text-3xl tracking-tight text-slate-900 mb-4 font-jakarta font-medium">
        Skills that define your career
      </h2>
<p className="text-lg text-slate-500 mb-8 font-geist">
        From foundational code to C-suite strategy, we support your journey.
      </p>

<div className="flex flex-wrap gap-4 mb-8">
<button className="px-6 py-3 bg-slate-900 text-white rounded-full text-base font-medium transition-all font-geist">
          Generative AI
        </button>
<button className="px-6 py-3 bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-full text-base font-medium transition-all font-geist">
          Python
        </button>
<button className="px-6 py-3 bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-full text-base font-medium transition-all font-geist">
          Data Analysis
        </button>
<button className="px-6 py-3 bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-full text-base font-medium transition-all font-geist">
          Digital Marketing
        </button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group cursor-pointer">
<div className="relative aspect-video rounded-xl overflow-hidden mb-3 bg-slate-100">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/62e25cf1-5808-4983-9437-ca7103967343_800w.webp"/>
<div className="absolute top-2 left-2 bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded font-geist">
              Bestseller
            </div>
</div>
<h3 className="font-semibold text-lg text-slate-900 leading-tight mb-1 font-geist group-hover:text-indigo-600">
            The AI Engineer Bootcamp 2025
          </h3>
<p className="text-sm text-slate-500 mb-1 font-geist">
            Dr. Sarah Jenkins
          </p>
<div className="flex items-center gap-1 mb-1">
<span className="font-bold text-yellow-600 text-sm font-geist">
              4.8
            </span>
<div className="flex text-yellow-500">
<svg aria-hidden="true" className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-xs text-slate-400 font-geist">(15,344)</span>
</div>
<div className="font-bold text-slate-900 text-lg font-geist">$24.99</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video rounded-xl overflow-hidden mb-3 bg-slate-100">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fc53a844-bf21-40ee-8d46-b40afea9946b_800w.webp" style={{}}/>
<div className="absolute top-2 left-2 text-xs font-semibold px-2 py-1 rounded font-geist bg-indigo-100 text-indigo-800">
              New
            </div>
</div>
<h3 className="font-semibold text-lg text-slate-900 leading-tight mb-1 font-geist group-hover:text-indigo-600">
            Intro to AI Agents &amp; Automation
          </h3>
<p className="text-sm text-slate-500 mb-1 font-geist">LearnAI Academy</p>
<div className="flex items-center gap-1 mb-1">
<span className="font-bold text-yellow-600 text-sm font-geist">
              4.9
            </span>
<div className="flex text-yellow-500">
<svg aria-hidden="true" className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-xs text-slate-400 font-geist">(2,100)</span>
</div>
<div className="font-bold text-slate-900 text-lg font-geist">$34.99</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video rounded-xl overflow-hidden mb-3 bg-slate-100">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/653b29a9-14da-4072-a6ad-e51355547c3b_800w.webp" style={{}}/>
</div>
<h3 className="font-semibold text-lg text-slate-900 leading-tight mb-1 font-geist group-hover:text-indigo-600">
            Workflow Automation with n8n
          </h3>
<p className="text-sm text-slate-500 mb-1 font-geist">Marcus Thorne</p>
<div className="flex items-center gap-1 mb-1">
<span className="font-bold text-yellow-600 text-sm font-geist">
              4.6
            </span>
<div className="flex text-yellow-500">
<svg aria-hidden="true" className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star-half w-3.5 h-3.5 fill-current" data-lucide="star-half" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"></path></svg>
</div>
<span className="text-xs text-slate-400 font-geist">(840)</span>
</div>
<div className="font-bold text-slate-900 text-lg font-geist">$22.99</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video rounded-xl overflow-hidden mb-3 bg-slate-100">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8b43109d-d224-4772-8757-41b994290056_800w.webp" style={{}}/>
<div className="absolute top-2 left-2 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded font-geist">
              Updated
            </div>
</div>
<h3 className="font-semibold text-lg text-slate-900 leading-tight mb-1 font-geist group-hover:text-indigo-600">
            Cyber Security: Threat Detection
          </h3>
<p className="text-sm text-slate-500 mb-1 font-geist">NetShield Labs</p>
<div className="flex items-center gap-1 mb-1">
<span className="font-bold text-yellow-600 text-sm font-geist">
              4.7
            </span>
<div className="flex text-yellow-500">
<svg aria-hidden="true" className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star-half w-3.5 h-3.5 fill-current" data-lucide="star-half" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"></path></svg>
</div>
<span className="text-xs text-slate-400 font-geist">(5,640)</span>
</div>
<div className="font-bold text-slate-900 text-lg font-geist">$29.99</div>
</div>
</div>
<div className="mt-8">
<a className="inline-flex items-center gap-2 font-semibold text-lg font-geist text-indigo-600 hover:text-indigo-700" href="#">
          View all AI courses
          <svg aria-hidden="true" className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</section>

<section className="border-y border-slate-200 bg-slate-50 py-12">
<div className="max-w-screen-2xl mx-auto px-4 md:px-8 text-center">
<p className="text-lg text-slate-500 mb-8 font-medium font-geist">
          Trusted by over 20,000 forward-thinking companies
        </p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-2xl text-slate-700 font-jakarta font-medium">
<svg aria-hidden="true" className="lucide lucide-codesandbox w-8 h-8" data-lucide="codesandbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" x2="12" y1="22.08" y2="12"></line></svg>
            BoxSys
          </div>
<div className="flex items-center gap-2 text-2xl text-slate-700 font-jakarta font-medium">
<svg aria-hidden="true" className="lucide lucide-hexagon w-8 h-8" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
            HexaGroup
          </div>
<div className="flex items-center gap-2 text-2xl text-slate-700 font-jakarta font-medium">
<svg aria-hidden="true" className="lucide lucide-triangle w-8 h-8" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg>
            DeltaCorp
          </div>
<div className="flex items-center gap-2 text-2xl text-slate-700 font-jakarta font-medium">
<svg aria-hidden="true" className="lucide lucide-circle w-8 h-8" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg>
            Orbit
          </div>
<div className="flex items-center gap-2 text-2xl text-slate-700 font-jakarta font-medium">
<svg aria-hidden="true" className="lucide lucide-command w-8 h-8" data-lucide="command" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path></svg>
            Command+
          </div>
</div>
</div>
</section>

<section className="max-w-screen-2xl mr-auto ml-auto pt-20 pr-4 pb-20 pl-4 md:px-8 md:pt-24">
<h2 className="text-3xl tracking-tight mb-12 font-jakarta font-medium">
        See how others are leveling up
      </h2>
<div className="grid md:grid-cols-3 gap-8 gap-x-8 gap-y-8">

<div className="border border-slate-200 p-8 rounded-2xl hover:shadow-lg transition-shadow bg-white">
<svg aria-hidden="true" className="lucide lucide-quote w-8 h-8 text-slate-200 mb-4 fill-current" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="text-lg text-slate-700 mb-6 leading-relaxed font-geist">
            "LearnAI was the
            <span className="font-medium text-slate-900 font-geist">
              career pivot
            </span>
            I needed. The Python bootcamp helped me automate my entire workflow
            in finance."
          </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 font-semibold font-geist">
              JD
            </div>
<div className="">
<div className="font-medium text-slate-900 font-geist">
                James Dell
              </div>
<div className="text-sm text-slate-500 font-geist">
                Financial Analyst
              </div>
</div>
</div>
</div>

<div className="border border-slate-200 p-8 rounded-2xl hover:shadow-lg transition-shadow bg-white">
<svg aria-hidden="true" className="lucide lucide-quote w-8 h-8 text-slate-200 mb-4 fill-current" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="text-lg text-slate-700 mb-6 leading-relaxed font-geist">
            "Truly a
            <span className="font-medium text-slate-900 font-geist">
              game-changer
            </span>
            . The instructor quality is unmatched compared to YouTube
            tutorials."
          </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 font-semibold font-geist">
              AL
            </div>
<div className="">
<div className="font-medium text-slate-900 font-geist">Anita Lin</div>
<div className="text-sm text-slate-500 font-geist">
                CTO at TechFlow
              </div>
</div>
</div>
</div>

<div className="border border-slate-200 p-8 rounded-2xl hover:shadow-lg transition-shadow bg-white">
<svg aria-hidden="true" className="lucide lucide-quote w-8 h-8 text-slate-200 mb-4 fill-current" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="text-lg text-slate-700 mb-6 leading-relaxed font-geist">
            "I went from zero coding knowledge to a
            <span className="font-medium text-slate-900 font-geist">
              Junior Dev role
            </span>
            in 6 months. The certification was key."
          </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 font-semibold font-geist">
              WR
            </div>
<div className="">
<div className="font-medium text-slate-900 font-geist">
                Will Rogers
              </div>
<div className="text-sm text-slate-500 font-geist">Web Developer</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:px-8 max-w-screen-2xl mr-auto mb-32 ml-auto px-4">
<div className="bg-slate-900 rounded-3xl p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-10">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl text-white tracking-tight mb-4 font-jakarta font-medium">
            Get certified and stand out
          </h2>
<p className="text-xl text-slate-400 mb-8 font-geist">
            Prepare for certifications with comprehensive courses, practice
            tests, and exam vouchers for AWS, CompTIA, and PMI.
          </p>
<a className="text-white font-semibold flex items-center gap-2 transition-colors text-lg font-geist hover:text-indigo-400" href="#">
            Explore certifications
            <svg aria-hidden="true" className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="flex gap-4 sm:gap-6 opacity-90">
<div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10 w-24 h-24 sm:w-32 sm:h-32 flex flex-col items-center justify-center text-center">
<svg aria-hidden="true" className="lucide lucide-shield-check w-8 h-8 text-red-400 mb-2" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-xs text-white font-medium font-geist">
              CompTIA
            </span>
</div>
<div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10 w-24 h-24 sm:w-32 sm:h-32 flex flex-col items-center justify-center text-center">
<svg aria-hidden="true" className="lucide lucide-cloud w-8 h-8 text-orange-400 mb-2" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
<span className="text-xs text-white font-medium font-geist">AWS</span>
</div>
<div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10 w-24 h-24 sm:w-32 sm:h-32 flex flex-col items-center justify-center text-center">
<svg aria-hidden="true" className="lucide lucide-award w-8 h-8 text-blue-400 mb-2" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
<span className="text-xs text-white font-medium font-geist">PMI</span>
</div>
</div>
</div>
</section>

<section className="md:px-8 max-w-screen-2xl mr-auto mb-32 ml-auto px-4">
<h2 className="text-3xl tracking-tight text-slate-900 mb-4 font-jakarta font-medium">
        Ready to pivot your career?
      </h2>
<p className="text-lg text-slate-500 mb-8 font-geist">
        Comprehensive bootcamps designed to get you hired.
      </p>
<div className="grid md:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="overflow-hidden group cursor-pointer bg-slate-50 rounded-2xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="overflow-hidden bg-orange-200 h-48 relative">
<img className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8486098b-1b0a-45df-9b20-55d4c7c1f134_1600w.webp" style={{}}/>
<div className="bg-orange-900/10 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="pt-6 pr-6 pb-6 pl-6">
<h3 className="font-semibold text-xl text-slate-900 mb-2 font-geist">
              Full Stack Web Developer
            </h3>
<p className="text-slate-600 mb-4 font-geist">
              Become a MERN stack expert in 12 weeks.
            </p>
<div className="flex gap-2 text-sm font-medium text-slate-900 gap-x-2 gap-y-2 items-center">
<span className="font-geist bg-white border-[#000000]/10 border rounded pt-1 pr-2 pb-1 pl-2">
                4.8 Rating
              </span>
<span className="text-slate-500 font-geist">320 hours</span>
</div>
</div>
</div>

<div className="overflow-hidden group cursor-pointer bg-slate-50 rounded-2xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="h-48 overflow-hidden relative bg-indigo-200">
<img className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70fc9322-cefe-43ce-bcd7-600902d9e1e8_1600w.jpg" style={{}}/>
<div className="absolute inset-0 bg-indigo-900/10"></div>
</div>
<div className="p-6">
<h3 className="font-semibold text-xl text-slate-900 mb-2 font-geist">
              Digital Product Marketer
            </h3>
<p className="text-slate-600 mb-4 font-geist">
              Master SEO, PPC, and Analytics.
            </p>
<div className="flex items-center gap-2 text-sm font-medium text-slate-900">
<span className="font-geist bg-white border-[#000000]/10 border rounded pt-1 pr-2 pb-1 pl-2">
                4.9 Rating
              </span>
<span className="text-slate-500 font-geist">180 hours</span>
</div>
</div>
</div>

<div className="overflow-hidden group cursor-pointer bg-slate-50 rounded-2xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="h-48 overflow-hidden bg-pink-200 relative">
<img className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9bbca3c7-9932-4a3b-a4a1-ad5c18ae8c3b_1600w.webp" style={{}}/>
<div className="absolute inset-0 bg-pink-900/10"></div>
</div>
<div className="pt-6 pr-6 pb-6 pl-6">
<h3 className="font-semibold text-xl text-slate-900 mb-2 font-geist">
              Data Science Lead
            </h3>
<p className="text-slate-600 mb-4 font-geist">
              Python, R, and Machine Learning mastery.
            </p>
<div className="flex items-center gap-2 text-sm font-medium text-slate-900">
<span className="font-geist bg-white border-[#000000]/10 border rounded pt-1 pr-2 pb-1 pl-2">
                4.7 Rating
              </span>
<span className="text-slate-500 font-geist">410 hours</span>
</div>
</div>
</div>
</div>
</section>

<section className="md:px-8 max-w-screen-2xl mr-auto mb-32 ml-auto pr-4 pl-4">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight font-jakarta mb-4">
        Choose the plan that fits your growth
      </h2>
<p className="text-lg text-slate-500 font-geist mb-10">
        From solo learners to global organizations, we have a path for you.
      </p>
<div className="grid lg:grid-cols-3 gap-8 gap-x-8 gap-y-8">

<div className="transition-colors flex flex-col border-slate-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-[0_4px_6px_rgba(0,_0,_0,_0.049),_0_9.6px_7.6px_rgba(0,_0,_0,_0.069),_0_18px_14.3px_rgba(0,_0,_0,_0.086),_0_32px_25.6px_rgba(0,_0,_0,_0.103),_0_60px_47.8px_rgba(0,_0,_0,_0.123),_0_143px_114.3px_rgba(0,_0,_0,_0.172)] justify-between hover:border-indigo-300">
<div className="">
<div className="flex items-center gap-3 mb-4">
<svg aria-hidden="true" className="lucide lucide-user w-6 h-6 text-slate-900" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<h3 className="text-2xl text-slate-900 font-jakarta font-medium tracking-tight">
                Personal
              </h3>
</div>
<p className="text-slate-500 mb-8 text-lg font-geist">
              For individual learners starting out.
            </p>
<button className="hover:bg-slate-50 transition-colors font-semibold text-slate-900 font-geist w-full border-slate-900 border rounded-full mb-8 pt-3 pb-3">
              Get started
            </button>
<div className="text-lg font-semibold mb-1 font-geist">
              $14.99 a month
            </div>
<div className="text-sm text-slate-500 mb-6 font-geist">
              Billed annually. Cancel anytime.
            </div>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-slate-700 font-geist">
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Access to 8,000+ top courses
              </li>
<li className="flex items-center gap-3 text-slate-700 font-geist">
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Mobile app access
              </li>
<li className="flex items-center gap-3 text-slate-700 font-geist">
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Coding exercises
              </li>
</ul>
</div>
</div>

<div className="transition-colors flex flex-col border-slate-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-[0_4px_6px_rgba(0,_0,_0,_0.049),_0_9.6px_7.6px_rgba(0,_0,_0,_0.069),_0_18px_14.3px_rgba(0,_0,_0,_0.086),_0_32px_25.6px_rgba(0,_0,_0,_0.103),_0_60px_47.8px_rgba(0,_0,_0,_0.123),_0_143px_114.3px_rgba(0,_0,_0,_0.172)] justify-between hover:border-indigo-300">
<div className="">
<div className="flex items-center gap-3 mb-4">
<svg aria-hidden="true" className="lucide lucide-users w-6 h-6 text-slate-900" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<h3 className="text-2xl text-slate-900 font-jakarta font-medium tracking-tight">
                Team Plan
              </h3>
</div>
<p className="text-slate-500 mb-8 text-lg font-geist">
              For teams of 2 to 50 people.
            </p>
<button className="hover:bg-slate-50 transition-colors font-semibold text-slate-900 font-geist w-full border-slate-900 border rounded-full mb-8 pt-3 pb-3">
              Try it free
            </button>
<div className="text-lg font-semibold mb-1 font-geist">
              $45.00 a month per user
            </div>
<div className="text-sm text-slate-500 mb-6 font-geist">
              Billed annually. Cancel anytime.
            </div>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-slate-700 font-geist">
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Access to 12,000+ top courses
              </li>
<li className="flex items-center gap-3 text-slate-700 font-geist">
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Certification prep
              </li>
<li className="flex items-center gap-3 text-slate-700 font-geist">
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Analytics dashboard
              </li>
</ul>
</div>
</div>

<div className="transition-colors flex flex-col bg-slate-50 border-slate-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-[0_4px_6px_rgba(0,_0,_0,_0.049),_0_9.6px_7.6px_rgba(0,_0,_0,_0.069),_0_18px_14.3px_rgba(0,_0,_0,_0.086),_0_32px_25.6px_rgba(0,_0,_0,_0.103),_0_60px_47.8px_rgba(0,_0,_0,_0.123),_0_143px_114.3px_rgba(0,_0,_0,_0.172)] justify-between hover:border-indigo-300">
<div className="">
<div className="flex items-center gap-3 mb-4">
<svg aria-hidden="true" className="lucide lucide-building-2 w-6 h-6 text-slate-900" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
<h3 className="text-2xl text-slate-900 font-jakarta font-medium tracking-tight">
                Enterprise
              </h3>
</div>
<p className="text-slate-500 mb-8 text-lg font-geist">
              For departments or whole organizations.
            </p>
<button className="hover:bg-slate-800 transition-colors font-semibold text-white font-geist bg-slate-900 w-full rounded-full mb-8 pt-3 pb-3">
              Request a demo
            </button>
<div className="text-lg font-semibold mb-1 font-geist">
              Contact sales for pricing
            </div>
<div className="text-sm text-slate-500 mb-6 font-geist">
              Volume discounts available.
            </div>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-slate-700 font-geist">
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-indigo-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Unlimited access to 35,000+ courses
              </li>
<li className="flex items-center gap-3 text-slate-700 font-geist">
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-indigo-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                SSO &amp; Advanced Security
              </li>
<li className="flex items-center gap-3 text-slate-700 font-geist">
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-indigo-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Dedicated Success Manager
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="max-w-screen-2xl mx-auto px-4 md:px-8 mb-24">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="">
<h2 className="text-4xl tracking-tight text-slate-900 mb-6 font-jakarta font-medium">
            Get the 2025 Global Learning Trends Report
          </h2>
<p className="text-xl text-slate-600 mb-8 leading-relaxed font-geist">
            If you or your organization are looking for help navigating change
            and AI transformation, you'll find a roadmap for action in our
            popular annual report.
          </p>
<button className="hover:bg-slate-50 transition-colors flex gap-2 font-semibold text-slate-900 font-geist border-slate-300 border rounded-full pt-3 pr-6 pb-3 pl-6 gap-x-2 gap-y-2 items-center">
            Download report
            <svg aria-hidden="true" className="lucide lucide-download w-5 h-5" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</button>
</div>
<div className="relative">
<div className="bg-slate-900 text-white p-12 rounded-xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 max-w-md mx-auto relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 blur-[80px] opacity-30 bg-indigo-600"></div>
<div className="relative z-10">
<div className="text-sm font-mono mb-2 font-geist text-indigo-300">
                LEARNAI RESEARCH
              </div>
<h3 className="text-3xl font-medium tracking-tighter font-jakarta mb-4">
                GLOBAL LEARNING &amp; SKILLS TRENDS REPORT
              </h3>
<div className="mt-8 text-sm opacity-70 font-geist">2025 EDITION</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-900 text-white py-20">
<div className="max-w-screen-2xl mx-auto px-4 md:px-8">
<div className="flex items-center gap-2 mb-8 font-semibold uppercase tracking-widest text-sm font-geist text-indigo-400">
          Case Study
        </div>
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-4xl tracking-tight mb-6 font-jakarta font-medium">
              Horizon Tech unlocks talent retention through upskilling
            </h2>
<div className="grid grid-cols-2 gap-8 mb-10">
<div className="">
<div className="text-5xl mb-2 font-jakarta font-medium text-indigo-400">
                  93%
                </div>
<p className="text-slate-400 font-geist">
                  Retention rate among participating employees
                </p>
</div>
<div className="">
<div className="text-5xl mb-2 font-jakarta font-medium text-indigo-400">
                  65%
                </div>
<p className="text-slate-400 font-geist">
                  Of learners noted a positive impact on productivity
                </p>
</div>
</div>
<button className="transition-colors flex hover:bg-indigo-500 font-semibold text-white font-geist bg-indigo-600 rounded-full pt-3 pr-8 pb-3 pl-8 gap-x-2 gap-y-2 items-center">
              Read full story
              <svg aria-hidden="true" className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="relative">
<img className="rounded-xl shadow-2xl border border-white/10 opacity-90 object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d6dbdcf-d962-4238-becc-dbe3bc8f2724_1600w.webp" style={{}}/>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
<div className="max-w-screen-2xl mx-auto px-4 md:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
<div className="">
<h4 className="text-white font-semibold mb-6 font-geist">Explore</h4>
<ul className="space-y-4 text-base">
<li className="">
<a className="hover:text-white font-geist" href="#">Data Science</a>
</li>
<li className="">
<a className="hover:text-white font-geist" href="#">
                  Web Development
                </a>
</li>
<li>
<a className="hover:text-white font-geist" href="#">
                  Management Skills
                </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-white font-semibold mb-6 font-geist">
              Certifications
            </h4>
<ul className="space-y-4 text-base">
<li className="">
<a className="hover:text-white font-geist" href="#">
                  AWS Certified Cloud Practitioner
                </a>
</li>
<li>
<a className="hover:text-white font-geist" href="#">
                  PMP Certification
                </a>
</li>
<li>
<a className="hover:text-white font-geist" href="#">Cisco CCNA</a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-white font-semibold mb-6 font-geist">Community</h4>
<ul className="space-y-4 text-base">
<li className="">
<a className="hover:text-white font-geist" href="#">Learners</a>
</li>
<li className="">
<a className="hover:text-white font-geist" href="#">Partners</a>
</li>
<li>
<a className="hover:text-white font-geist" href="#">Developers</a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-white font-semibold mb-6 font-geist">Company</h4>
<ul className="space-y-4 text-base">
<li className="">
<a className="hover:text-white font-geist" href="#">About Us</a>
</li>
<li>
<a className="hover:text-white font-geist" href="#">Careers</a>
</li>
<li>
<a className="hover:text-white font-geist" href="#">Contact</a>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800 gap-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded flex items-center justify-center text-white bg-indigo-600">
<svg aria-hidden="true" className="lucide lucide-sparkles w-3 h-3" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<span className="text-white font-semibold font-geist">
              LearnAI Learning
            </span>
</div>
<div className="text-sm font-geist">© 2025 LearnAI Learning, Inc.</div>
<div className="flex items-center gap-6">
<button className="flex items-center gap-2 text-white font-geist hover:text-indigo-400">
<svg aria-hidden="true" className="lucide lucide-globe w-5 h-5" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
              English
            </button>
</div>
</div>
</div>
</footer>


    </>
  );
}
