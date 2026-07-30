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



      // Icons
      lucide.createIcons();

      // Mobile nav toggle
      const sideNav = document.getElementById('side-nav');
      const openBtn = document.getElementById('mobile-open');
      const closeBtn = document.getElementById('mobile-close');

      function openNav() {
        sideNav?.classList.remove('hidden');
      }
      function closeNav() {
        if (window.innerWidth < 1280) sideNav?.classList.add('hidden');
      }

      openBtn?.addEventListener('click', openNav);
      closeBtn?.addEventListener('click', closeNav);

      // Close on route click (demo)
      sideNav?.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          if (window.innerWidth < 1280) closeNav();
        });
      });

      // Close on escape
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeNav();
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
      <div className="aura-background-component fixed top-0 w-full h-screen -z-10 hue-rotate-15"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="X0ErZR3QhPzMHfKgBbJJ"></div>
</div>

<header className="sticky top-0 z-30 flex items-center justify-between gap-3 border-b border-white/10 bg-slate-900/50 px-4 py-3 backdrop-blur md:hidden">
<button className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-2 text-slate-200 hover:bg-white/10" id="mobile-open">
<svg className="lucide lucide-menu size-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
<div className="flex items-center gap-2">
<div className="inline-flex size-8 items-center justify-center rounded-lg bg-indigo-500/20 ring-1 ring-indigo-400/30">
<svg className="lucide lucide-sparkles size-4 text-indigo-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-100">Community</span>
</div>
<button className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-2 text-slate-200 hover:bg-white/10">
<svg className="lucide lucide-search size-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
</header>
<div className="flex w-full max-w-[1400px] bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-[#2E335A]/60 to-[#1C1B33]/20 border-slate-50/5 border rounded-lg mt-40 mr-auto mb-40 ml-auto backdrop-blur-xl">

<aside className="sticky top-0 hidden h-[100dvh] w-20 flex-col gap-3 xl:flex bg-white/5 border-white/10 rounded-l-lg border-t border-r pt-5 pr-3 pb-5 pl-3 backdrop-blur items-center">
<div className="absolute top-3 left-3 flex items-center gap-1.5">
<div className="w-3 h-3 bg-red-500 rounded-full"></div>
<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
<div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
</div>
<div className="flex mt-8 mb-2 items-center justify-center">
<div className="group relative inline-flex size-11 hover:from-white/20 hover:to-white/10 text-slate-200 bg-gradient-to-b from-white/10 to-white/5 border-slate-50/5 border rounded-full items-center justify-center">
<svg className="lucide lucide-sparkles size-5 text-indigo-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
</div>
<nav className="flex flex-col gap-2 space-y-4 items-center">
<button className="group relative inline-flex size-11 hover:from-white/20 hover:to-white/10 text-slate-200 bg-gradient-to-b from-white/10 to-white/5 border-slate-50/5 border rounded-full items-center justify-center">
<svg className="lucide lucide-home size-5" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="absolute -right-3 -top-3 inline-flex h-6 items-center text-[10px] font-medium bg-indigo-500/90 rounded-full pr-1.5 pl-1.5 shadow">New</span>
</button>
<button className="group relative inline-flex size-11 hover:from-white/20 hover:to-white/10 text-slate-200 bg-gradient-to-b from-white/10 to-white/5 border-slate-50/5 border rounded-full items-center justify-center">
<svg className="lucide lucide-music size-5" data-lucide="music" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
</button>
<button className="group relative inline-flex size-11 hover:from-white/20 hover:to-white/10 text-slate-200 bg-gradient-to-b from-white/10 to-white/5 border-slate-50/5 border rounded-full items-center justify-center">
<svg className="lucide lucide-gamepad-2 size-5 w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="gamepad-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `24px`, height: `24px`, color: `rgb(226, 232, 240)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="10" y1="11" y2="11"></line><line x1="8" x2="8" y1="9" y2="13"></line><line x1="15" x2="15.01" y1="12" y2="12"></line><line x1="18" x2="18.01" y1="10" y2="10"></line><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path></svg>
</button>
<button className="group relative inline-flex size-11 hover:from-white/20 hover:to-white/10 text-slate-200 bg-gradient-to-b from-white/10 to-white/5 border-slate-50/5 border rounded-full items-center justify-center">
<svg className="lucide lucide-graduation-cap size-5" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</button>
<button className="group relative inline-flex size-11 hover:from-white/20 hover:to-white/10 text-slate-200 bg-gradient-to-b from-white/10 to-white/5 border-slate-50/5 border rounded-full items-center justify-center">
<svg className="lucide lucide-globe size-5" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</button>
<button className="group relative inline-flex size-11 hover:from-white/20 hover:to-white/10 text-slate-200 bg-gradient-to-b from-white/10 to-white/5 border-slate-50/5 border rounded-full items-center justify-center">
<svg className="lucide lucide-clapperboard size-5" data-lucide="clapperboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"></path><path d="m6.2 5.3 3.1 3.9"></path><path d="m12.4 3.4 3.1 4"></path><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path></svg>
</button>
<button className="group relative inline-flex size-11 hover:from-white/20 hover:to-white/10 text-slate-200 bg-gradient-to-b from-white/10 to-white/5 border-slate-50/5 border rounded-full items-center justify-center">
<svg className="lucide lucide-users size-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</button>
</nav>
<div className="mt-auto flex flex-col items-center gap-2">
<button className="inline-flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10">
<svg className="lucide lucide-settings size-5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
<button className="inline-flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10">
<svg className="lucide lucide-plus size-5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</aside>

<aside className="fixed inset-y-0 left-0 z-40 hidden w-72 max-w-full flex-col md:flex xl:relative xl:inset-auto xl:z-0 bg-white/5 border-white/10 border-r pt-6 pr-5 pb-6 pl-5 backdrop-blur-xl" id="side-nav">
<div className="mb-6 hidden items-center gap-3 md:flex xl:hidden">
<div className="inline-flex size-9 items-center justify-center rounded-lg bg-indigo-500/20 ring-1 ring-indigo-300/30">
<svg className="lucide lucide-sparkles size-4 text-indigo-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<span className="text-lg font-semibold tracking-tight">Community</span>
<button className="ml-auto inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-2 hover:bg-white/10 md:hidden" id="mobile-close">
<svg className="lucide lucide-x size-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="mb-4">
<div className="relative">
<input className="w-full placeholder:text-slate-400/70 outline-none focus:ring-2 focus:ring-indigo-500/50 text-sm text-slate-200 bg-white/5 border-white/10 border rounded-xl pt-2.5 pr-4 pb-2.5 pl-4" placeholder="Search communities" />
<svg className="lucide lucide-search pointer-events-none absolute right-3 top-2.5 size-4 text-slate-400/70" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
</div>
<nav className="space-y-3">
<a className="group flex items-center gap-3 transition hover:from-indigo-500/20 hover:to-indigo-500/10 bg-gradient-to-b from-indigo-500/10 to-indigo-500/5 border-indigo-400/20 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3" href="#">
<svg className="lucide lucide-house size-5 text-indigo-300" data-lucide="house" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-sm font-medium text-slate-100">Home</span>
</a>
<a className="flex items-center gap-3 hover:bg-white/10 rounded-lg pt-2.5 pr-3 pb-2.5 pl-3" href="#">
<svg className="lucide lucide-music size-5 text-slate-300" data-lucide="music" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
<span className="text-sm font-medium">Music</span>
</a>
<a className="flex items-center gap-3 hover:bg-white/10 rounded-lg pt-2.5 pr-3 pb-2.5 pl-3" href="#">
<svg className="lucide lucide-gamepad-2 size-5 text-slate-300" data-lucide="gamepad-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="10" y1="11" y2="11"></line><line x1="8" x2="8" y1="9" y2="13"></line><line x1="15" x2="15.01" y1="12" y2="12"></line><line x1="18" x2="18.01" y1="10" y2="10"></line><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path></svg>
<span className="text-sm font-medium">Gaming</span>
</a>
<a className="flex items-center gap-3 hover:bg-white/10 rounded-lg pt-2.5 pr-3 pb-2.5 pl-3" href="#">
<svg className="lucide lucide-graduation-cap size-5 text-slate-300" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
<span className="text-sm font-medium">Education</span>
</a>
<a className="flex items-center gap-3 hover:bg-white/10 rounded-lg pt-2.5 pr-3 pb-2.5 pl-3" href="#">
<svg className="lucide lucide-globe size-5 text-slate-300" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span className="text-sm font-medium">Science & Tech</span>
</a>
<a className="flex items-center gap-3 hover:bg-white/10 rounded-lg pt-2.5 pr-3 pb-2.5 pl-3" href="#">
<svg className="lucide lucide-clapperboard size-5 text-slate-300" data-lucide="clapperboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"></path><path d="m6.2 5.3 3.1 3.9"></path><path d="m12.4 3.4 3.1 4"></path><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path></svg>
<span className="text-sm font-medium">Entertainment</span>
</a>
<a className="flex items-center gap-3 hover:bg-white/10 rounded-lg pt-2.5 pr-3 pb-2.5 pl-3" href="#">
<svg className="lucide lucide-users size-5 text-slate-300" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-sm font-medium">Student Hubs</span>
</a>
</nav>
<div className="mt-auto">
<div className="mt-6 rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4">
<div className="mb-2 text-sm font-medium text-slate-100">Invite friends</div>
<p className="mb-3 text-xs text-slate-400/80">Grow your communities by inviting people you know.</p>
<button className="inline-flex items-center gap-2 rounded-lg bg-indigo-500/90 px-3 py-2 text-xs font-medium text-white shadow-sm ring-1 ring-inset ring-indigo-300/40 hover:bg-indigo-500">
<svg className="lucide lucide-send size-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg> Send invite
            </button>
</div>
</div>
</aside>

<main className="flex-1 md:px-6 lg:px-8 bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-[#ffffff]/5 to-[#1C1B33]/50 pt-6 pr-4 pb-6 pl-4">

<section className="mb-8">
<div className="flex mb-4 items-end justify-between">
<h2 className="text-2xl font-semibold tracking-tight text-slate-100">Featured Community</h2>
<a className="text-sm font-medium text-indigo-300 hover:text-indigo-200" href="#">See all</a>
</div>
<div className="grid gap-4 sm:grid-cols-2"><a className="group relative overflow-hidden transition hover:bg-white/10 min-h-[280px] flex items-end bg-white/5 border-white/10 border rounded-2xl backdrop-blur-xl" href="#">
<img alt="" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ef7ebee1-9aa8-44cb-a356-f344d0edd3b1_800w.jpg" style={{}} />
<div className="relative w-full bg-slate-50/5 border-white/10 rounded-t-xl border-t pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg">
<div className="flex items-start justify-between">
<div className="">
<h3 className="text-lg font-semibold text-slate-100 tracking-tight mb-1">Virtual Reality</h3>
<p className="text-sm text-slate-300/90">A community for VR and novices alike, regular and friendly chat.</p>
</div>
<div className="inline-flex size-10 absolute -top-5 right-4 bg-[conic-gradient(from_90deg,var(--tw-gradient-stops))] from-purple-400/20 via-cyan-500/40 to-purple-400/80 border-slate-50/10 border rounded-full pr-3 pl-3 items-center justify-center">
<svg className="lucide lucide-headset size-5 text-indigo-200" data-lucide="headset" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"></path><path d="M21 16v2a4 4 0 0 1-4 4h-5"></path></svg>
</div>
</div>
<div className="mt-4 flex items-center gap-4 text-xs text-slate-300/80">
<span className="inline-flex items-center gap-1.5">
<svg className="lucide lucide-users size-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg> 245,102 Members
      </span>
<span className="inline-flex items-center gap-1.5">
<svg className="lucide lucide-badge-check size-4" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg> Verified
      </span>
</div>
</div>
</a><a className="group relative overflow-hidden transition hover:bg-white/10 min-h-[280px] flex items-end bg-white/5 border-white/10 border rounded-2xl backdrop-blur-xl" href="#">
<img alt="" className="absolute inset-0 h-full w-full object-cover" src="https://cdn.midjourney.com/f068b4f7-e265-44a3-bee8-571a166ff493/0_0.png?w=800&q=80" style={{}} />
<div className="relative w-full bg-slate-50/5 border-white/10 border-t pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg rounded-t-xl">
<div className="flex items-start justify-between">
<div className="">
<h3 className="mb-1 text-lg font-semibold tracking-tight text-slate-100">Game Play</h3>
<p className="text-sm text-slate-300/90">Always a new challenge. Great place to make new friends.</p>
</div>
<div className="inline-flex size-10 absolute -top-5 right-4 bg-[conic-gradient(from_90deg,var(--tw-gradient-stops))] from-purple-400/20 via-cyan-500/40 to-purple-400/80 border-slate-50/10 border rounded-full pr-3 pl-3 items-center justify-center">
<svg className="lucide lucide-gamepad-2 size-5 text-violet-200" data-lucide="gamepad-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="10" y1="11" y2="11"></line><line x1="8" x2="8" y1="9" y2="13"></line><line x1="15" x2="15.01" y1="12" y2="12"></line><line x1="18" x2="18.01" y1="10" y2="10"></line><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path></svg>
</div>
</div>
<div className="mt-4 flex items-center gap-4 text-xs text-slate-300/80">
<span className="inline-flex items-center gap-1.5">
<svg className="lucide lucide-users size-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg> 389,640 Members
      </span>
<span className="inline-flex items-center gap-1.5">
<svg className="lucide lucide-activity size-4" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg> High Activity
      </span>
</div>
</div>
</a></div>
</section>

<section className="mb-8">
<div className="flex mb-4 items-end justify-between">
<h2 className="text-2xl font-semibold text-slate-100 tracking-tight">Popular Right Now</h2>
<a className="text-sm font-medium text-indigo-300 hover:text-indigo-200" href="#">See all</a>
</div>
<div className="grid gap-4 md:grid-cols-2 h-36">
<a className="group relative overflow-hidden transition hover:bg-white/10 bg-center bg-white/5 bg-cover rounded-2xl backdrop-blur-xl bg-[url(/assets/c160e528-a195-4720-8c90-671df696522d_800w.jpg)]" href="#" style={{}}>
<div className="absolute inset-0 flex">
<div className="w-2/6"></div>
<div className="w-4/6 flex pt-0 pr-0 pb-0 pl-0 items-center justify-center">
<div className="w-full h-full bg-white/5 border-white/10 border rounded-2xl pt-4 pr-5 pb-4 pl-7 backdrop-blur-2xl">
<div className="flex gap-4 items-start">
<div className="inline-flex size-10 absolute top-12 -left-5 bg-[conic-gradient(from_90deg,var(--tw-gradient-stops))] from-purple-400/20 via-cyan-500/40 to-purple-400/80 border-slate-50/10 border rounded-full pr-3 pl-3 items-center justify-center">
<svg className="lucide lucide-shapes size-6 text-sky-200" data-lucide="shapes" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"></path><rect height="7" rx="1" width="7" x="3" y="14"></rect><circle cx="17.5" cy="17.5" r="3.5"></circle></svg>
</div>
<div className="min-w-0">
<h3 className="text-base font-semibold text-slate-100 tracking-tight mb-1">3D Art</h3>
<p className="text-xs text-slate-300/90">A great place to discuss art.</p>
<div className="mt-3 flex items-center gap-4 text-xs text-slate-300/80">
<span className="inline-flex items-center gap-1.5">
<svg className="lucide lucide-users size-4 w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `24px`, height: `24px`, color: `rgb(203, 213, 225)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg> 345,678 Members
              </span>
<span className="inline-flex items-center gap-1.5"><svg className="lucide lucide-star size-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg></span>
</div>
</div>
</div>
</div>
</div>
</div>
</a>
<a className="group relative overflow-hidden transition hover:bg-white/10 bg-center bg-white/5 bg-cover rounded-2xl backdrop-blur-xl bg-[url(/assets/737e9198-413d-453a-bd26-a7891df32780_800w.jpg)]" href="#">
<div className="absolute inset-0 flex">
<div className="w-2/6"></div>
<div className="w-4/6 flex pt-0 pr-0 pb-0 pl-0 items-center justify-center">
<div className="w-full h-full bg-white/5 border-white/10 border rounded-2xl pt-4 pr-5 pb-4 pl-7 backdrop-blur-xl">
<div className="flex gap-4 items-start">
<div className="inline-flex size-10 absolute top-12 -left-5 bg-[conic-gradient(from_90deg,var(--tw-gradient-stops))] from-purple-400/20 via-cyan-500/40 to-purple-400/80 border-slate-50/10 border rounded-full pr-3 pl-3 items-center justify-center">
<svg className="lucide lucide-globe lucide-shapes size-6 w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `24px`, height: `24px`, color: `rgb(186, 230, 253)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<div className="min-w-0">
<h3 className="text-base font-semibold text-slate-100 tracking-tight mb-1">NFT</h3>
<p className="text-xs text-slate-300/90">An NFT community so that everyone can share their...</p>
<div className="flex gap-4 text-xs text-slate-300/80 mt-3 items-center">
<span className="inline-flex items-center gap-1.5">
<svg className="lucide lucide-users size-4 w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `24px`, height: `24px`, color: `rgb(203, 213, 225)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg> 345,678 Members
              </span>
<span className="inline-flex items-center gap-1.5"><svg className="lucide lucide-star size-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg></span>
</div>
</div>
</div>
</div>
</div>
</div>
</a>
</div>
</section>

<section className="">
<div className="flex mb-4 items-end justify-between">
<h2 className="text-2xl font-semibold tracking-tight text-slate-100">Recent Add</h2>
<a className="text-sm font-medium text-indigo-300 hover:text-indigo-200" href="#">See all</a>
</div>
<div className="grid gap-4 md:grid-cols-3">
<a className="group relative overflow-hidden transition hover:bg-white/10 min-h-[200px] flex items-end bg-white/5 border-white/10 border rounded-2xl backdrop-blur-xl" href="#">
<img alt="" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/703baf54-0921-4290-a5b5-5046ffe5b558_800w.jpg" style={{}} />
<div className="relative w-full bg-slate-50/5 border-white/10 border-t pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg rounded-t-xl">
<div className="flex items-start justify-between">
<div className="">
<h3 className="text-base font-semibold text-slate-100 tracking-tight mb-1">Movie recapped</h3>
<p className="text-xs text-slate-300/90">Discuss your favourite movies and TV serie here.</p>
</div>
<div className="inline-flex size-10 absolute -top-5 right-4 bg-[conic-gradient(from_90deg,var(--tw-gradient-stops))] from-purple-400/20 via-cyan-500/40 to-purple-400/80 border-slate-50/10 border rounded-full pr-3 pl-3 items-center justify-center">
<svg className="lucide lucide-tv size-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: `rgb(199, 210, 254)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="15" rx="2" ry="2" width="20" x="2" y="7"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>
</div>
</div>
</div>
</a>
<a className="group relative overflow-hidden transition hover:bg-white/10 min-h-[200px] flex items-end bg-white/5 border-white/10 border rounded-2xl backdrop-blur-xl" href="#">
<img alt="" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c4b7db9a-ceb9-4365-be76-2cadddbc41e5_800w.jpg" style={{}} />
<div className="relative w-full bg-slate-50/5 border-white/10 rounded-t-xl border-t pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg">
<div className="flex items-start justify-between">
<div className="">
<h3 className="text-base font-semibold text-slate-100 tracking-tight mb-1">Science</h3>
<p className="text-xs text-slate-300/90">A community for a scientific exploration...</p>
</div>
<div className="inline-flex size-10 absolute -top-5 right-4 bg-[conic-gradient(from_90deg,var(--tw-gradient-stops))] from-purple-400/20 via-cyan-500/40 to-purple-400/80 border-slate-50/10 border rounded-full pr-3 pl-3 items-center justify-center">
<svg className="lucide lucide-atom size-5 text-slate-200/90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="1"></circle><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"></path><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"></path></svg>
</div>
</div>
</div>
</a>
<a className="group relative overflow-hidden transition hover:bg-white/10 min-h-[200px] flex items-end bg-white/5 border-white/10 border rounded-2xl backdrop-blur-xl" href="#">
<img alt="" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f049a336-286b-4154-ac50-0ee6ee06aa54_800w.jpg" style={{}} />
<div className="relative w-full bg-slate-50/5 border-white/10 border-t pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg rounded-t-xl">
<div className="flex items-start justify-between">
<div className="">
<h3 className="text-base font-semibold text-slate-100 tracking-tight mb-1">Space</h3>
<p className="text-xs text-slate-300/90">A community for the space enthusiast.</p>
</div>
<div className="inline-flex size-10 absolute -top-5 right-4 bg-[conic-gradient(from_90deg,var(--tw-gradient-stops))] from-purple-400/20 via-cyan-500/40 to-purple-400/80 border-slate-50/10 border rounded-full pr-3 pl-3 items-center justify-center">
<svg className="lucide lucide-orbit size-5 text-slate-200/90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.341 6.484A10 10 0 0 1 10.266 21.85"></path><path d="M3.659 17.516A10 10 0 0 1 13.74 2.152"></path><circle cx="12" cy="12" r="3"></circle><circle cx="19" cy="5" r="2"></circle><circle cx="5" cy="19" r="2"></circle></svg>
</div>
</div>
</div>
</a>
</div>
</section>
</main>

<aside className="sticky top-0 hidden h-[100dvh] w-[340px] flex-none xl:block bg-white/5 border-white/10 rounded-r-lg border-l pt-6 pr-6 pb-6 pl-6 backdrop-blur overflow-hidden">
<div className="bg-gradient-to-b from-white/5 to-transparent border-white/10 border rounded-2xl mb-6 pt-5 pr-5 pb-5 pl-5">
<div className="flex gap-4 items-center">
<div className="relative">
<img alt="" className="size-16 ring-1 ring-white/15 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e08496f1-bdba-4cb4-83c1-96ac5be57ace_320w.jpg" />
<span className="absolute -right-1 -bottom-1 inline-flex size-5 items-center justify-center text-[10px] ring-2 ring-slate-700 font-semibold text-white bg-emerald-500 rounded-full">•</span>
</div>
<div className="">
<div className="text-base font-semibold tracking-tight text-slate-100">Ava Stone</div>
<div className="text-sm text-slate-400">@avastone</div>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-2">
<div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-center">
<div className="text-sm font-semibold text-slate-100">218</div>
<div className="text-[10px] text-slate-400">Following</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-center">
<div className="text-sm font-semibold text-slate-100">1.4k</div>
<div className="text-[10px] text-slate-400">Followers</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-center">
<div className="text-sm font-semibold text-slate-100">32</div>
<div className="text-[10px] text-slate-400">Communities</div>
</div>
</div>
<div className="mt-4 flex gap-2">
<button className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-indigo-500/90 px-3 py-2 text-sm font-medium text-white ring-1 ring-inset ring-indigo-300/40 hover:bg-indigo-500">
<svg className="lucide lucide-message-circle size-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg> Message
            </button>
<button className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10">
<svg className="lucide lucide-more-horizontal size-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</div>
<div className="space-y-6">

<div className="">
<div className="flex mb-3 items-center justify-between">
<h3 className="text-base font-semibold tracking-tight text-slate-100">New Members</h3>
<a className="text-xs font-medium text-indigo-300 hover:text-indigo-200" href="#">See all</a>
</div>
<ul className="space-y-2">
<li className="flex gap-3 hover:bg-white/10 bg-white/5 border-white/10 border rounded-xl pt-3 pr-3 pb-3 pl-3 items-center">
<img alt="" className="size-8 ring-1 ring-white/10 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/05b8d217-cbbf-409b-a1ff-f4515ea6aab3_320w.jpg" />
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between">
<span className="truncate text-sm font-medium text-slate-100">Anne Couture</span>
<span className="text-xs text-slate-400">5 min ago</span>
</div>
<div className="text-xs text-slate-400">Joined VR</div>
</div>
</li>
<li className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/10">
<img alt="" className="size-8 ring-1 ring-white/10 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5d61e53b-2050-4b51-93a5-176f90ba5abd_320w.jpg" />
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between">
<span className="truncate text-sm font-medium text-slate-100">Miriam Soleil</span>
<span className="text-xs text-slate-400">20 min ago</span>
</div>
<div className="text-xs text-slate-400">Joined Science</div>
</div>
</li>
<li className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/10">
<img alt="" className="size-8 ring-1 ring-white/10 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0adcf017-67cb-403e-818f-59cff86d8411_320w.jpg" />
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between">
<span className="truncate text-sm font-medium text-slate-100">Marie Laval</span>
<span className="text-xs text-slate-400">35 min ago</span>
</div>
<div className="text-xs text-slate-400">Joined NFT</div>
</div>
</li>
<li className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/10">
<img alt="" className="size-8 ring-1 ring-white/10 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e7518623-5aeb-4f28-bace-436a99f814d4_320w.jpg" />
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between">
<span className="truncate text-sm font-medium text-slate-100">Mark Morain</span>
<span className="text-xs text-slate-400">40 min ago</span>
</div>
<div className="text-xs text-slate-400">Joined Space</div>
</div>
</li>
</ul>
</div>

<div className="">
<div className="mb-3 flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight text-slate-100">Recent Activity</h3>
<a className="text-xs font-medium text-indigo-300 hover:text-indigo-200" href="#">See all</a>
</div>
<ul className="space-y-2">
<li className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/10">
<div className="inline-flex size-10 ring-1 ring-white/15 bg-white/5 rounded-full pr-3 pl-3 items-center justify-center">
<svg className="lucide lucide-sparkle size-4 w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="sparkle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `24px`, height: `24px`, color: `rgb(226, 232, 240)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path></svg>
</div>
<div className="min-w-0 flex-1">
<p className="truncate text-sm"><span className="font-medium text-slate-100">Hola Spine</span> invited you to a channel</p>
<span className="text-xs text-slate-400">2 min ago</span>
</div>
</li>
<li className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/10">
<div className="inline-flex size-10 ring-1 ring-white/15 bg-white/5 rounded-full pr-3 pl-3 items-center justify-center">
<svg className="lucide lucide-user-plus size-4 w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `24px`, height: `24px`, color: `rgb(226, 232, 240)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
</div>
<div className="min-w-0 flex-1">
<p className="truncate text-sm"><span className="font-medium text-slate-100">Eva Solain</span> invited you to a chat</p>
<span className="text-xs text-slate-400">20 min ago</span>
</div>
</li>
<li className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/10">
<div className="inline-flex size-10 ring-1 ring-white/15 bg-white/5 rounded-full pr-3 pl-3 items-center justify-center">
<svg className="lucide lucide-calendar-clock size-4 w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="calendar-clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `24px`, height: `24px`, color: `rgb(226, 232, 240)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 14v2.2l1.6 1"></path><path d="M16 2v4"></path><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M3 10h5"></path><path d="M8 2v4"></path><circle cx="16" cy="16" r="6"></circle></svg>
</div>
<div className="min-w-0 flex-1">
<p className="truncate text-sm"><span className="font-medium text-slate-100">Pierre Ford</span> scheduled a live AMA</p>
<span className="text-xs text-slate-400">1 hr ago</span>
</div>
</li>
</ul>
</div>
</div>
</aside>
</div>


    </>
  );
}
