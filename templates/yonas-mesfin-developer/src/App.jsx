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
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp', opacity: '0.2'}}></div>
<header className="animate-fade-in pt-6 pb-6">
<div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
<a className="flex items-center gap-3 hover:opacity-80 transition-opacity" href="#">
<div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center">
<svg className="lucide lucide-code-2 w-5 h-5" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<span className="text-lg font-semibold tracking-tight">Yone.Dev</span>
</a>
<nav className="hidden md:flex items-center gap-10 text-sm font-medium">
<a className="transition-colors hover:text-orange-400 text-stone-300 font-sans" href="#" style={{}}>Work</a>
<a className="transition-colors hover:text-orange-400 text-stone-300 font-sans" href="#" style={{}}>Services</a>
<a className="transition-colors hover:text-orange-400 text-stone-300 font-sans" href="#" style={{}}>Stack</a>
<a className="transition-colors hover:text-orange-400 text-stone-300 font-sans" href="#" style={{}}>About</a>
</nav>
<button className="hidden sm:inline-flex transition-all hover:shadow-lg hover:bg-orange-500 text-sm font-medium text-white bg-orange-600 rounded-full px-6 py-2 items-center justify-center font-sans" style={{}}>
                Let's Talk
            </button>
<button className="md:hidden p-2 rounded-lg transition-colors hover:bg-white/10">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</header>
<main className="">
<section className="max-w-7xl mr-auto ml-auto pr-6 pb-20 pl-6">
<div className="md:rounded-[40px] md:p-16 lg:p-24 overflow-hidden bg-stone-800/50 border-stone-700/50 border rounded-b-3xl pt-8 pr-8 pb-8 pl-8 backdrop-blur-3xl">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="">
<h1 className="sm:text-5xl lg:text-7xl leading-tight animate-slide-up animate-delay-200 text-4xl font-semibold tracking-tight font-bricolage mt-2 mb-2">Hi There <br className="hidden sm:block"/>
I’m Yonas Mesfin</h1>
<p className="sm:text-lg animate-slide-up animate-delay-400 text-base text-stone-300 max-w-xl mt-6">I am a web developer /
  ai automation students. I specialize in HTML, CSS, JavaScript, Node, UI/UX, </p>
<div className="flex flex-col sm:flex-row animate-slide-up animate-delay-600 mt-10 gap-x-4 gap-y-4">
<a className="inline-flex items-center justify-center gap-2 transition-all hover:scale-105 hover:shadow-lg font-medium text-white bg-gradient-to-r from-orange-600 to-red-600 rounded-full pt-4 pr-8 pb-4 pl-8 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="#" style={{}}>
<svg className="lucide lucide-briefcase w-5 h-5" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
                                View Projects
                                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 font-medium px-8 py-4 rounded-full border border-stone-600 transition-all hover:border-stone-500 bg-stone-800/50 hover:bg-stone-700/50 font-sans" href="#" style={{}}>
<svg className="lucide lucide-user w-4 h-4" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                About Me
                            </a>
</div>
<div className="mt-12 flex items-center gap-8 animate-slide-up animate-delay-800">
<div className="flex items-center gap-2">
<div className="flex text-yellow-400">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-sm font-medium font-sans" style={{}}>5.0/5 Clutch</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-award w-4 h-4 text-green-500" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</div>
</div>
</div>
<div className="relative animate-slide-up animate-delay-400">
<div className="relative overflow-hidden h-80 sm:h-[28rem] rounded-3xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<img alt="Workspace" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute top-4 left-4 text-white">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded-full border-2 border-white bg-green-500 flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
</div>
<span className="text-xs font-medium font-sans" style={{}}>Available for Work</span>
</div>
<p className="text-xs leading-4 max-w-[200px] backdrop-blur-sm rounded-lg p-2 bg-black/40 border border-white/10 font-sans" style={{}}>
                                    "Code is poetry. Let's write the next chapter of your success together."
                                </p>
</div>
<div className="absolute top-4 right-4 flex gap-2">
<button className="backdrop-blur-sm rounded-full p-2 transition-colors bg-white/20 hover:bg-white/30">
<svg className="lucide lucide-github w-4 h-4 text-white" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</button>
<button className="backdrop-blur-sm rounded-full p-2 transition-colors bg-white/20 hover:bg-white/30">
<svg className="lucide lucide-linkedin w-4 h-4 text-white" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</button>
</div>
<div className="absolute bottom-4 left-4 right-4">
<div className="backdrop-blur-sm rounded-lg p-3 bg-white/10 border border-white/10">
<div className="flex items-center justify-between text-sm text-white">
<span className="font-sans" style={{}}>Current Stack: Next.js + Tailwind</span>
<span className="flex items-center gap-1 font-sans" style={{}}>
<svg className="lucide lucide-cpu w-3 h-3" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
                                            v14.0
                                        </span>
</div>
<div className="mt-2 rounded-full h-1 bg-white/20">
<div className="rounded-full h-1 w-3/4 bg-gradient-to-r from-orange-500 to-red-500"></div>
</div>
</div>
</div>
</div>
<div className="absolute -bottom-4 -right-4 bg-white/10 border-white/20 border rounded-2xl pt-4 pr-4 pb-4 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur-lg">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-orange-500/30 backdrop-blur-sm border border-orange-400/20">
<svg className="lucide lucide-trending-up w-5 h-5 text-green-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div className="">
<p className="text-sm font-semibold text-white/90 font-sans" style={{}}>Project Uptime</p>
<p className="text-xs text-white/60 font-sans" style={{}}>99.9% guarantee</p>
</div>
</div>
</div>
</div>
</div>
<div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
<article className="relative overflow-hidden lg:rounded-3xl hover:border-red-400/50 transition-all min-h-[280px] flex flex-col bg-stone-800/60 border-red-500/30 rounded-2xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur-lg">
<div className="relative z-10 lg:p-8 flex flex-col h-full bg-[url(https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&amp;w=1740&amp;auto=format&amp;fit=crop)] bg-cover pt-6 pr-6 pb-6 pl-6 justify-between" style={{}}>
<div className="flex mb-6 items-start justify-between">
<span className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider text-red-300/90 ring-1 ring-red-400/30 bg-red-500/15 backdrop-blur-sm font-sans" style={{}}>Expertise</span>
</div>
<div className="text-center">
<h3 className="text-3xl lg:text-4xl text-white tracking-tight mb-2 font-bricolage font-semibold" style={{}}>Clean Code</h3>
<p className="text-sm text-red-200/80 font-sans" style={{}}>Scalable Architecture</p>
<div className="flex justify-center gap-1 mt-3">
<div className="w-2 h-2 rounded-full bg-red-400"></div>
<div className="w-2 h-2 rounded-full bg-red-400"></div>
<div className="w-2 h-2 rounded-full bg-red-400"></div>
<div className="w-2 h-2 rounded-full bg-red-400/40"></div>
</div>
</div>
</div>
</article>
<article className="relative overflow-hidden lg:rounded-3xl md:col-span-2 lg:col-span-1 hover:border-orange-400/50 transition-all min-h-[280px] lg:min-h-[320px] flex flex-col bg-stone-800/60 border-orange-500/30 rounded-2xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur-lg">
<div className="relative z-10 lg:p-8 flex flex-col h-full bg-[url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop)] bg-cover pt-6 pr-6 pb-6 pl-6 justify-between" style={{}}>
<div className="flex items-start justify-between">
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider text-orange-200/90 ring-1 ring-orange-400/30 bg-orange-500/15 backdrop-blur-sm font-sans" style={{}}>Mobile</span>
<span className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider text-red-200/90 ring-1 ring-red-400/30 bg-red-500/15 backdrop-blur-sm font-sans" style={{}}>Web</span>
</div>
</div>
<div className="mt-auto">
<h3 className="text-4xl lg:text-5xl text-white tracking-tight mb-2 font-bricolage font-semibold" style={{}}>Responsive Design</h3>
<p className="text-sm leading-relaxed text-orange-200/85 mb-4 font-sans" style={{}}>"Seamless experiences across all devices. Mobile-first approach guaranteed."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
<svg className="lucide lucide-smartphone w-4 h-4 text-green-400" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<div className="text-xs">
<div className="text-orange-200/90 font-medium font-sans" style={{}}>Modern UI</div>
<div className="text-orange-300/60 font-sans" style={{}}>Fluid Layouts</div>
</div>
</div>
</div>
</div>
</article>
<article className="relative overflow-hidden lg:rounded-3xl hover:border-pink-400/50 transition-all min-h-[280px] flex flex-col text-white bg-stone-800/60 border-pink-500/30 rounded-2xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="lg:p-8 grow bg-[url(https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop)] bg-cover pt-6 pr-6 pb-6 pl-6" style={{}}>
<div className="flex items-center gap-2 uppercase text-xs font-normal text-stone-400 tracking-widest mb-6 font-sans" style={{}}>
<svg className="lucide lucide-zap w-4 h-4 text-amber-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                                Performance
                            </div>
<div className="space-y-4">
<h3 className="text-3xl text-white tracking-tight font-bricolage font-semibold" style={{}}>Lightning Fast</h3>
<p className="text-sm leading-relaxed text-stone-300 font-sans" style={{}}>Optimization is key. I ensure your application loads fast and ranks high on Lighthouse.</p>
<div className="grid grid-cols-2 gap-4 pt-4">
<div className="text-center">
<div className="text-2xl text-pink-400 font-bricolage font-semibold" style={{}}>100</div>
<div className="text-xs text-stone-400 uppercase tracking-wide font-sans" style={{}}>Lighthouse Score</div>
</div>
<div className="text-center">
<div className="text-2xl text-orange-400 font-bricolage font-semibold" style={{}}>0.5s</div>
<div className="text-xs text-stone-400 uppercase tracking-wide font-sans" style={{}}>Load Time</div>
</div>
</div>
</div>
</div>
<div className="p-6 lg:p-8 border-t border-stone-700">
<div className="flex items-center gap-2 text-sm">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-amber-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-pink-200 font-sans" style={{}}>SEO Optimized</span>
</div>
</div>
</article>
</div>
<div className="relative max-w-6xl mt-20 mr-auto ml-auto">

<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
<svg className="text-green-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
<path d="M12 17h.01"></path>
</svg>
<span className="text-xs font-medium text-orange-400 tracking-wider uppercase font-sans" style={{}}>Common Questions</span>
</div>
<h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-4">
<span className="block text-white mb-2 font-bricolage font-semibold" style={{}}>PROJECT</span>
<span className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500 font-bricolage font-semibold" style={{}}>ANSWERS</span>
</h2>
<p className="text-lg text-white/70 max-w-2xl mx-auto font-sans" style={{}}>
            Everything you need to know about my workflow, pricing, and technical capabilities.
        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">

<article className="relative overflow-hidden rounded-3xl p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-orange-400/50 transition-all duration-300 backdrop-blur-lg">

<div className="absolute top-4 left-4">
<svg className="text-green-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path><path d="M12 5v14"></path>
</svg>
</div>
<div className="absolute top-4 right-4">
<svg className="text-green-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path><path d="M12 5v14"></path>
</svg>
</div>
<div className="absolute bottom-4 left-4">
<svg className="text-green-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path><path d="M12 5v14"></path>
</svg>
</div>
<div className="absolute bottom-4 right-4">
<svg className="text-green-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path><path d="M12 5v14"></path>
</svg>
</div>
<div className="flex-1 space-y-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
<svg className="text-green-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polyline points="16 18 22 12 16 6"></polyline>
<polyline points="8 6 2 12 8 18"></polyline>
</svg>
<span className="text-xs font-medium text-orange-400 tracking-wider uppercase font-sans" style={{}}>Tech Stack</span>
</div>
<h3 className="text-xl font-medium text-white/90 tracking-tight font-sans" style={{}}>
                    What technologies do you use for development?
                </h3>
<p className="leading-relaxed text-sm text-white/70">I specialize in Next.js, CSS, and Node.js. For databases, I prefer Supabase or PostMan...</p>
</div>
<button className="mt-6 group inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-all duration-300 font-sans" style={{}}>
                Read Full Stack
                <svg className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path><path d="M7 17 17 7"></path>
</svg>
</button>
</article>

<article className="relative overflow-hidden rounded-3xl p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-red-400/50 transition-all duration-300 backdrop-blur-lg">

<div className="absolute top-4 left-4">
<svg className="text-blue-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path><path d="M12 5v14"></path>
</svg>
</div>
<div className="absolute top-4 right-4">
<svg className="text-blue-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path><path d="M12 5v14"></path>
</svg>
</div>
<div className="absolute bottom-4 left-4">
<svg className="text-blue-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path><path d="M12 5v14"></path>
</svg>
</div>
<div className="absolute bottom-4 right-4">
<svg className="text-blue-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path><path d="M12 5v14"></path>
</svg>
</div>
<div className="flex-1 space-y-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20">
<svg className="text-blue-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
<path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
<path d="M12 2v2"></path>
<path d="M12 22v-2"></path>
<path d="m17 17-1.4-1.4"></path>
<path d="m4.9 4.9 1.4 1.4"></path>
<path d="m17 7-1.4 1.4"></path>
<path d="m4.9 19.1 1.4-1.4"></path>
<path d="M2 12h2"></path>
<path d="M20 12h2"></path>
</svg>
<span className="text-xs font-medium text-red-400 tracking-wider uppercase font-sans" style={{}}>Process</span>
</div>
<h3 className="text-xl font-medium text-white/90 tracking-tight font-sans" style={{}}>
                    Do you provide design and development?
                </h3>
<p className="text-white/70 text-sm leading-relaxed font-sans" style={{}}>
                    Yes, I am a full-stack developer with a strong design background. I can handle the entire product lifecycle from Figma to deployment.
                </p>
</div>
<button className="mt-6 group inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-all duration-300 font-sans" style={{}}>
                Read Full Answer
                <svg className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path><path d="M7 17 17 7"></path>
</svg>
</button>
</article>

<article className="relative overflow-hidden rounded-3xl p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-red-400/50 transition-all duration-300 backdrop-blur-lg">

<div className="absolute top-4 left-4">
<svg className="text-purple-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path><path d="M12 5v14"></path>
</svg>
</div>
<div className="absolute top-4 right-4">
<svg className="text-purple-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path><path d="M12 5v14"></path>
</svg>
</div>
<div className="absolute bottom-4 left-4">
<svg className="text-purple-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path><path d="M12 5v14"></path>
</svg>
</div>
<div className="absolute bottom-4 right-4">
<svg className="text-purple-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path><path d="M12 5v14"></path>
</svg>
</div>
<div className="flex-1 space-y-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20">
<svg className="text-purple-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
</svg>
<span className="text-xs font-medium text-red-400 tracking-wider uppercase font-sans" style={{}}>Maintenance</span>
</div>
<h3 className="text-xl font-medium text-white/90 tracking-tight font-sans" style={{}}>
                    Do you offer ongoing support after launch?
                </h3>
<p className="text-white/70 text-sm leading-relaxed font-sans" style={{}}>
                    Absolutely. I offer retainer packages for updates, bug fixes, and feature additions to ensure your site remains secure and up-to-date.
                </p>
</div>
<button className="mt-6 group inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-all duration-300 font-sans" style={{}}>
                Read Full Answer
                <svg className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path><path d="M7 17 17 7"></path>
</svg>
</button>
</article>

<article className="relative overflow-hidden rounded-3xl p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-pink-400/50 transition-all duration-300 backdrop-blur-lg md:col-span-2 lg:col-span-1">
<div className="flex-1 space-y-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20">
<svg className="text-amber-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12,6 12,12 16,14"></polyline>
</svg>
<span className="text-xs font-medium text-pink-400 tracking-wider uppercase font-sans" style={{}}>Timeline</span>
</div>
<h3 className="text-xl font-medium text-white/90 tracking-tight font-sans" style={{}}>
                    What is the typical timeline for a project?
                </h3>
<p className="leading-relaxed text-sm text-white/70">A typical landing page takes 1-2 weeks, while full website typically range from 2-4 weeks depending on complexity.</p>
</div>
<button className="mt-6 group inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-all duration-300 font-sans" style={{}}>
                Read Full Answer
                <svg className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path><path d="M7 17 17 7"></path>
</svg>
</button>
</article>

<article className="relative overflow-hidden rounded-3xl p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-orange-400/50 transition-all duration-300 backdrop-blur-lg">
<div className="flex-1 space-y-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
<svg className="text-green-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
<span className="text-xs font-medium text-orange-400 tracking-wider uppercase font-sans" style={{}}>Collaboration</span>
</div>
<h3 className="text-xl font-medium text-white/90 tracking-tight font-sans" style={{}}>
                    Do you work with agencies or other teams?
                </h3>
<p className="text-white/70 text-sm leading-relaxed font-sans" style={{}}>
                    Yes, I often collaborate with agencies as a white-label developer or integrate into existing product teams as a contractor.
                </p>
</div>
<button className="mt-6 group inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-all duration-300 font-sans" style={{}}>
                Read Full Answer
                <svg className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path><path d="M7 17 17 7"></path>
</svg>
</button>
</article>

<article className="relative overflow-hidden rounded-3xl p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-red-400/50 transition-all duration-300 backdrop-blur-lg">
<div className="flex-1 space-y-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20">
<svg className="text-blue-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<line x1="12" x2="12" y1="1" y2="23"></line>
<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
<span className="text-xs font-medium text-red-400 tracking-wider uppercase font-sans" style={{}}>Investment</span>
</div>
<h3 className="text-xl font-medium text-white/90 tracking-tight font-sans" style={{}}>
                    How much does a typical project cost?
                </h3>
<p className="leading-relaxed text-sm text-white/70">Pricing depends on scope. I offer project-based pricing starting from $1k, and hourly rates for smaller tasks.</p>
</div>
<button className="mt-6 group inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-all duration-300 font-sans" style={{}}>
                Read Full Answer
                <svg className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path><path d="M7 17 17 7"></path>
</svg>
</button>
</article>
</div>

<div className="text-center">
<div className="inline-flex flex-col sm:flex-row gap-4">
<a className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/20 hover:border-white/30 transition-all duration-300 text-white font-sans" href="#" style={{}}>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
<path d="M10 9H8"></path>
<path d="M16 13H8"></path>
<path d="M16 17H8"></path>
</svg>
      View Case Studies
      <svg className="group-hover:translate-x-1 transition-transform duration-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-600 to-red-600 px-8 py-4 text-sm font-semibold tracking-wide text-white hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 font-sans" href="#" style={{}}>
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
</path>
</svg>
      Book a Call
      <svg className="group-hover:translate-x-1 transition-transform duration-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
<p className="mt-6 text-sm text-white/60 font-sans" style={{}}>
    Looking for something specific? I typically respond within 12 hours.
  </p>
</div>
</div><footer className="relative bg-stone-900/50 border-stone-800/50 rounded-3xl border-t backdrop-blur-lg">
<div className="max-w-7xl rounded-3xl mr-auto ml-auto pt-16 pr-6 pb-8 pl-6">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div className="lg:col-span-1">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-600 to-red-600 flex items-center justify-center shadow-lg">
<svg className="w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<span className="text-xl font-semibold text-white tracking-tight">Yone.Dev</span>
</div>
<p className="text-stone-400 mb-6 leading-relaxed font-sans">
                    Building robust, scalable, and aesthetically pleasing digital products for startups and enterprise clients.
                </p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full bg-stone-800/50 border border-stone-700/50 flex items-center justify-center hover:bg-stone-700/50 hover:border-stone-600/50 transition-all" href="#">
<svg className="text-stone-400 hover:text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-3 1.5-3 3-3 3.5-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a className="w-10 h-10 rounded-full bg-stone-800/50 border border-stone-700/50 flex items-center justify-center hover:bg-stone-700/50 hover:border-stone-600/50 transition-all" href="#">
<svg className="text-stone-400 hover:text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
</a>
<a className="w-10 h-10 rounded-full bg-stone-800/50 border border-stone-700/50 flex items-center justify-center hover:bg-stone-700/50 hover:border-stone-600/50 transition-all" href="#">
<svg className="text-stone-400 hover:text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="w-10 h-10 rounded-full bg-stone-800/50 border border-stone-700/50 flex items-center justify-center hover:bg-stone-700/50 hover:border-stone-600/50 transition-all" href="#">
<svg className="text-stone-400 hover:text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
</div>
</div>

<div className="">
<h3 className="text-white font-semibold mb-6 tracking-tight font-sans">Services</h3>
<ul className="space-y-4">
<li className=""><a className="text-stone-400 hover:text-white transition-colors font-sans" href="#">Web Development</a></li>
<li className=""></li>
<li className=""><a className="text-stone-400 hover:text-white transition-colors font-sans" href="#">UI/UX Design</a></li>
<li className=""><a className="hover:text-white transition-colors text-stone-400" href="#">Ai automation</a></li>
</ul>
</div>

<div className="">
<h3 className="text-white font-semibold mb-6 tracking-tight font-sans">Company</h3>
<ul className="space-y-4">
<li className=""><a className="text-stone-400 hover:text-white transition-colors font-sans" href="#">About</a></li>
<li className=""><a className="text-stone-400 hover:text-white transition-colors font-sans" href="#">Portfolio</a></li>
<li className=""><a className="text-stone-400 hover:text-white transition-colors font-sans" href="#">Blog</a></li>
<li className=""><a className="text-stone-400 hover:text-white transition-colors font-sans" href="#">Contact</a></li>
</ul>
</div>

<div className="">
<h3 className="text-white font-semibold mb-6 tracking-tight font-sans">Get in Touch</h3>
<ul className="mb-6 space-y-4">
<li className="flex gap-2 text-stone-400 gap-x-2 gap-y-2 items-center">yonasdevportfolio@gmail.com</li>
<li className="flex items-center gap-2 text-stone-400 font-sans">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                        Book a meeting
                    </li>
</ul>
<div className="flex items-center gap-2 text-sm text-stone-400">
<svg className="text-green-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<span className="font-sans">Timezone: UTC-5</span>
</div>
</div>
</div>
</div></footer>
</div>
</section>
</main>


    </>
  );
}
