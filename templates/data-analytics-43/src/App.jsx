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


        const menuBtn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        const closeIcon = document.getElementById('close-icon');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                menu.classList.remove('translate-x-full');
                menuIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
                document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
            } else {
                menu.classList.add('translate-x-full');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
                document.body.style.overflow = '';
            }
        }

        menuBtn.addEventListener('click', toggleMenu);

        // Close menu when a link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if(isMenuOpen) toggleMenu();
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
      

<div className="fixed top-0 left-0 w-full h-[1000px] pointer-events-none z-0">

<div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-500/20 blur-[120px] rounded-full mix-blend-screen opacity-100"></div>

<div className="w-full h-full opacity-100 mix-blend-screen" data-us-project="hQmuxsIsbhqg99eGrTZM"></div>


<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950"></div>
</div>

<div className="fixed inset-0 z-[60] bg-zinc-950/95 backdrop-blur-xl transform translate-x-full transition-transform duration-300 ease-in-out flex flex-col pt-24 px-6 md:hidden" id="mobile-menu">
<nav className="flex flex-col gap-6 text-lg font-medium text-zinc-300">
<a className="mobile-link hover:text-emerald-400 transition-colors border-b border-white/5 pb-4" href="#">Analytics</a>
<a className="mobile-link hover:text-emerald-400 transition-colors border-b border-white/5 pb-4" href="#">Platform</a>
<a className="mobile-link hover:text-emerald-400 transition-colors border-b border-white/5 pb-4" href="#">Solutions</a>
<a className="mobile-link hover:text-emerald-400 transition-colors border-b border-white/5 pb-4" href="#">Enterprise</a>
<a className="mobile-link hover:text-emerald-400 transition-colors border-b border-white/5 pb-4" href="#">Pricing</a>
</nav>
<div className="mt-8 flex flex-col gap-4">
<button className="w-full h-12 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors">Log In</button>
<button className="w-full h-12 rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20">Get Started</button>
</div>
</div>

<div className="relative z-10">

<div className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 md:pt-6 md:px-6">
<div className="max-w-4xl mx-auto border border-white/10 rounded-full px-5 py-3 md:px-6 md:py-3" style={{background: 'linear-gradient(180deg, rgba(14, 16, 26, 0.8), rgba(14, 16, 26, 0.6)) padding-box, linear-gradient(120deg, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.08)) border-box', backdropFilter: 'blur(16px)', boxShadow: '0 10px 30px rgba(0,0,0,0.25)'}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold text-white/90 tracking-tight font-geist">DataFlow</span>
</div>

<ul className="hidden md:flex items-center gap-1 text-sm font-medium text-white/60">
<li><a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5 font-sans" href="#">Analytics</a></li>
<li><a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5 font-sans" href="#">Platform</a></li>
<li><a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5 font-sans" href="#">Solutions</a></li>
<li><a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5 font-sans" href="#">Enterprise</a></li>
<li><a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5 font-sans" href="#">Pricing</a></li>
</ul>

<div className="flex items-center gap-2">

<button aria-label="Menu" className="inline-flex md:hidden hover:bg-white/5 p-2 rounded-full transition-all duration-300 border border-white/5 active:scale-95 z-[70]" id="mobile-menu-btn" style={{background: 'rgba(255, 255, 255, 0.02)'}}>
<svg className="w-5 h-5 stroke-[1.5] text-white/70" fill="none" height="24" id="menu-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
<svg className="w-5 h-5 stroke-[1.5] text-white/70 hidden" fill="none" height="24" id="close-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
</button>

<button aria-label="Account" className="hidden md:inline-flex hover:bg-white/5 p-2 rounded-full transition-all duration-300 border border-white/5" style={{background: 'rgba(255, 255, 255, 0.02)'}}>
<svg className="w-4 h-4 stroke-[1.5] text-white/60" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</button>
<button aria-label="Dashboard" className="hidden md:inline-flex relative hover:bg-white/5 p-2 rounded-full transition-all duration-300 border border-white/5" style={{background: 'rgba(255, 255, 255, 0.02)'}}>
<svg className="w-4 h-4 stroke-[1.5] text-white/60" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
<span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 text-white text-xs rounded-full flex items-center justify-center font-medium font-sans">3</span>
</button>
</div>
</div>
</div>
</div>

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 mt-20 md:mt-0">
<section className="relative">
<div className="relative py-12 md:py-20 lg:py-24">
<div className="mx-auto max-w-2xl text-center px-2">
<span className="inline-flex items-center gap-2 px-3 h-8 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-xs font-medium backdrop-blur-sm mb-6">
<svg className="w-3.5 h-3.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                            Powering the next big thing
                        </span>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tighter leading-[1.1]">
                            From Idea to Impact—Build, Launch, and Grow
                            <span className="bg-clip-text text-transparent bg-emerald-300 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">Faster.</span>
</h1>
<p className="mt-6 text-base md:text-lg text-zinc-300 font-normal max-w-lg mx-auto leading-relaxed">
                            Ship modern analytics experiences your users love—built for scale, clarity, and speed. Designed for teams who move quickly.
                        </p>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 h-12 rounded-xl bg-emerald-500 text-white shadow-[0_10px_30px_-10px_rgba(16,185,129,0.7)] hover:translate-y-[-1px] active:translate-y-0 transition-transform text-sm font-medium">
<span>Get Started</span>
<svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 h-12 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-colors text-sm text-zinc-200 font-medium backdrop-blur-sm" href="#">
<svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
<span>View Docs</span>
</a>
</div>
<div className="mt-8 flex items-center justify-center gap-3 text-zinc-300">
<div className="flex -space-x-3">
<img alt="User" className="w-8 h-8 object-cover border-2 border-zinc-950 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/096dab35-ecaf-418f-a932-5b514543b035_320w.jpg"/>
<img alt="User" className="w-8 h-8 object-cover border-2 border-zinc-950 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d9b7d4a3-6b7c-449c-8be9-129d49363c12_320w.jpg"/>
<img alt="User" className="w-8 h-8 object-cover border-2 border-zinc-950 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b7a341e2-b79a-45d0-abac-0b52ed9ce321_320w.jpg"/>
</div>
<div className="text-xs sm:text-sm">Trusted by 30,000+ teams</div>
</div>
</div>

<div className="mt-12 md:mt-16 relative">
<div className="relative overflow-hidden rounded-[20px] md:rounded-[40px] bg-white/5 border border-white/5 backdrop-blur-lg">
<div className="p-3 md:p-8">
<div className="max-w-6xl mx-auto">
<div className="relative overflow-hidden text-left bg-zinc-950/90 border border-white/10 rounded-xl md:rounded-2xl shadow-2xl ring-1 ring-emerald-500/10">

<div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4 border-b border-white/10 bg-black/40">
<div className="flex items-center gap-3 md:gap-4">
<div className="relative">
<span className="inline-flex h-8 w-8 md:h-10 md:w-10 items-center justify-center bg-zinc-900 rounded-full border border-white/10">
<svg className="text-zinc-300 md:w-[18px] md:h-[18px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="9" x2="15" y1="15" y2="9"></line></svg>
</span>
<span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 md:w-3.5 md:h-3.5 bg-emerald-400 rounded-full border-2 border-zinc-950 shadow-sm"></span>
</div>
<div>
<p className="text-sm font-semibold text-white tracking-tight">Product Team</p>
<p className="text-[10px] md:text-xs font-medium text-zinc-500">12 members • 3 online</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/10 px-2.5 py-1 text-[10px] md:text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                                    Active
                                                </span>
<button className="hidden sm:inline-flex items-center justify-center h-8 w-8 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-0 h-[400px] md:h-96">

<div className="hidden md:block bg-zinc-950/70 border-r border-white/10 p-5 overflow-y-auto">
<div className="space-y-6">
<div>
<p className="text-xs font-semibold text-zinc-500 mb-3 tracking-wide uppercase">Channels</p>
<div className="space-y-1">
<div className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/5 text-sm font-medium text-white border border-white/10">
<span className="w-2 h-2 bg-emerald-400 rounded-full shadow-sm"></span>
                                                                general
                                                                <span className="ml-auto text-xs text-zinc-400 bg-white/5 px-1.5 py-0.5 rounded border border-white/10">12</span>
</div>
<div className="flex gap-3 text-sm text-zinc-400 rounded-lg px-3 py-2.5 items-center hover:bg-white/5 hover:text-white transition-colors cursor-pointer">
<span className="w-2 h-2 bg-zinc-600 rounded-full"></span>
                                                                product-updates
                                                            </div>
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 flex flex-col h-full bg-zinc-950/30">
<div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-5">

<div className="flex items-start gap-3 md:gap-4">
<img alt="Sarah" className="w-8 h-8 md:w-9 md:h-9 object-cover border border-white/10 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f31d4832-3ccc-4ffa-9dc4-260e7c39cc4a_320w.jpg"/>
<div className="flex-1 min-w-0">
<div className="flex gap-2 mb-1 items-baseline">
<span className="text-sm font-semibold text-white">Sarah Chen</span>
<span className="text-[10px] text-zinc-500">2:34 PM</span>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<p className="leading-relaxed text-sm text-zinc-300">Great work on the new onboarding flow! The conversion rates look promising 🚀</p>
</div>
</div>
</div>

<div className="flex items-start gap-3 md:gap-4">
<img alt="Mike" className="w-8 h-8 md:w-9 md:h-9 object-cover border border-white/10 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b6d79211-32f1-430e-96b3-9b4d857c1482_320w.jpg"/>
<div className="flex-1 min-w-0">
<div className="flex items-baseline gap-2 mb-1">
<span className="text-sm font-semibold text-white">Mike Johnson</span>
<span className="text-[10px] text-zinc-500">2:36 PM</span>
</div>
<p className="text-sm text-zinc-300 mb-2">Attached the updated wireframes</p>
<div className="p-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 max-w-sm flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-white truncate">wireframes-v2.figma</p>
<p className="text-[10px] text-zinc-500">2.4 MB</p>
</div>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-white/10 bg-zinc-950/50">
<div className="flex items-center gap-2 md:gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2 md:px-4 md:py-3">
<button className="p-1 text-zinc-500 hover:text-white"><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path></svg></button>
<input className="flex-1 bg-transparent text-sm text-white placeholder:text-zinc-600 focus:outline-none min-w-0" placeholder="Type a message…" type="text"/>
<button className="p-1.5 rounded-lg bg-emerald-500 text-emerald-950 hover:bg-emerald-400">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 md:mt-24">
<p className="text-sm text-center text-zinc-500 mb-8">Powering the world’s most focused product teams</p>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex justify-center items-center"><span className="text-lg font-bold text-white font-geist">Vercel</span></div>
<div className="flex justify-center items-center"><span className="text-lg font-bold text-white font-geist">Stripe</span></div>
<div className="flex justify-center items-center"><span className="text-lg font-bold text-white font-geist">Linear</span></div>
<div className="flex justify-center items-center"><span className="text-lg font-bold text-white font-geist">Raycast</span></div>
<div className="flex justify-center items-center"><span className="text-lg font-bold text-white font-geist">Ramp</span></div>
<div className="flex justify-center items-center"><span className="text-lg font-bold text-white font-geist">Loom</span></div>
</div>
</div>
</div>
</section>

<section className="mt-12 md:mt-20">
<div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-6">

<div className="col-span-1 md:col-span-6 lg:col-span-8 group relative overflow-hidden rounded-2xl md:rounded-3xl border border-zinc-900 bg-zinc-950 min-h-[350px] md:min-h-[460px]">
<img alt="Dashboard" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8af6d262-c6d8-49bb-bc00-17bef2401068_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
<div className="flex justify-between items-end">
<div>
<span className="text-xs font-medium text-emerald-400 mb-2 block">Primary Dashboard</span>
<h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">Analytics Hub</h3>
<p className="text-sm md:text-base text-zinc-300 mt-2 max-w-md">Real-time data insights with predictive modeling and automated reporting.</p>
</div>
<div className="hidden sm:block">
<button className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-6 lg:col-span-4 relative overflow-hidden rounded-2xl md:rounded-3xl border border-zinc-900 bg-zinc-900 min-h-[300px] md:min-h-[460px] p-6 md:p-8 flex flex-col justify-between">
<div>
<div className="flex justify-between items-center text-zinc-400 text-xs mb-4">
<span>Intelligence</span>
<span>A+ Rating</span>
</div>
<h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight leading-tight">
                                Smart Data<br/>Processing
                            </h3>
<p className="text-sm text-zinc-400 mt-3">Transform raw data into actionable insights instantly.</p>
</div>
<div className="flex gap-2 mt-8">
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/50 border border-white/5 text-xs text-zinc-300">
<svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
                                Advanced Analytics
                            </span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6">

<div className="relative group overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950 min-h-[240px]">
<img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/487671ad-0426-4ad1-b21a-1f74d3ae5c31_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h4 className="text-lg font-semibold text-white">Report Builder</h4>
</div>
</div>

<div className="relative group overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950 min-h-[240px]">
<img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7bfc6f3c-be57-4bc5-aad4-808cc85723d9_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h4 className="text-lg font-semibold text-white">Data Pipelines</h4>
</div>
</div>

<div className="relative group overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950 min-h-[240px] md:col-span-2 lg:col-span-1">
<img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5a60b344-a027-43c6-b9ee-6976be1dc394_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end">
<div>
<h4 className="text-lg font-semibold text-white">ML Insights</h4>
<p className="text-xs text-zinc-400 mt-1">Automated prediction</p>
</div>
<div className="bg-emerald-500/20 p-2 rounded-lg">
<svg className="text-emerald-400" fill="none" height="18" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path></svg>
</div>
</div>
</div>
</div>
</section>

<section className="mt-20 overflow-hidden">
<h2 className="text-2xl font-semibold text-white mb-8 text-center md:text-left">Trusted by teams</h2>
<div className="relative">
<div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-zinc-950 to-transparent z-10"></div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-zinc-950 to-transparent z-10"></div>
<div className="flex gap-4 animate-scroll whitespace-nowrap overflow-x-auto no-scrollbar pb-4 md:pb-0" style={{WebkitOverflowScrolling: 'touch'}}>

<div className="shrink-0 w-[280px] bg-white/5 border border-white/5 rounded-xl p-5">
<div className="flex items-center gap-2 mb-3">
<div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-xs text-emerald-400 font-bold">AT</div>
<span className="text-sm font-medium text-white">Ava Thompson</span>
</div>
<p className="text-sm text-zinc-400 whitespace-normal">Smart Connect took minutes to wire into our stack. DX is top-tier.</p>
</div>
<div className="shrink-0 w-[280px] bg-white/5 border border-white/5 rounded-xl p-5">
<div className="flex items-center gap-2 mb-3">
<div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-xs text-blue-400 font-bold">NP</div>
<span className="text-sm font-medium text-white">Noah Patel</span>
</div>
<p className="text-sm text-zinc-400 whitespace-normal">We shipped our analytics revamp 3x faster. Defaults are sensible.</p>
</div>
<div className="shrink-0 w-[280px] bg-white/5 border border-white/5 rounded-xl p-5">
<div className="flex items-center gap-2 mb-3">
<div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-xs text-purple-400 font-bold">MK</div>
<span className="text-sm font-medium text-white">Maya Kim</span>
</div>
<p className="text-sm text-zinc-400 whitespace-normal">The platform feels invisible. Fast, reliable pipelines.</p>
</div>
<div className="shrink-0 w-[280px] bg-white/5 border border-white/5 rounded-xl p-5">
<div className="flex items-center gap-2 mb-3">
<div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-xs text-orange-400 font-bold">EG</div>
<span className="text-sm font-medium text-white">Ethan Garcia</span>
</div>
<p className="text-sm text-zinc-400 whitespace-normal">Finally trust our metrics for decision making. Observability baked in.</p>
</div>
</div>
</div>
</section>

<footer className="mt-20 md:mt-32 rounded-3xl bg-zinc-900/30 border border-white/5 p-6 md:p-12 mb-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
<div>
<h3 className="text-2xl md:text-3xl font-medium text-white font-geist tracking-tight">
                            Ready to transform? <br/>
<span className="text-emerald-400 border-b border-emerald-400/30">Let's get started.</span>
</h3>
<div className="mt-8">
<a className="inline-flex items-center gap-2 text-white font-medium hover:text-emerald-300 transition-colors" href="#">
<span className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-emerald-950">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
                                hello@dataflow.com
                            </a>
</div>
</div>
<div>
<div className="grid grid-cols-2 gap-8">
<div>
<p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">Product</p>
<ul className="space-y-3 text-sm text-zinc-400">
<li><a className="hover:text-white" href="#">Platform</a></li>
<li><a className="hover:text-white" href="#">Features</a></li>
<li><a className="hover:text-white" href="#">Pricing</a></li>
</ul>
</div>
<div>
<p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">Socials</p>
<ul className="space-y-3 text-sm text-zinc-400">
<li><a className="hover:text-white" href="#">Twitter</a></li>
<li><a className="hover:text-white" href="#">GitHub</a></li>
<li><a className="hover:text-white" href="#">Discord</a></li>
</ul>
</div>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
<div className="flex items-center gap-2">
<span className="font-bold text-white font-geist">DataFlow</span>
<span>© 2024</span>
</div>
<div className="flex gap-4">
<a className="hover:text-zinc-400" href="#">Privacy</a>
<a className="hover:text-zinc-400" href="#">Terms</a>
</div>
</div>
</footer>
</main></div>



    </>
  );
}
