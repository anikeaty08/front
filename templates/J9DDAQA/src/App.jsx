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



        window.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();

            const playBtn = document.getElementById('playDemo');
            const modal = document.getElementById('demoModal');
            const closeBtn = document.getElementById('closeDemo');
            const frame = document.getElementById('demoFrame');

            function openModal() {
                frame.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&modestbranding=1';
                modal.classList.remove('hidden');
            }
            function closeModal() {
                frame.src = '';
                modal.classList.add('hidden');
            }

            playBtn.addEventListener('click', openModal);
            closeBtn.addEventListener('click', closeModal);
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeModal();
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                    closeModal();
                }
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
      
<header className="sticky top-0 z-30 bg-zinc-950/90 backdrop-blur border-b border-zinc-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="md:w-14 md:h-14 w-[36px] h-[36px]" strokeWidth="2" style={{width: '36px', height: '36px'}} viewbox="0 0 48 48">
<path className="" d="M24 8 L40 36 H8 Z" fill="currentColor"></path>
</svg>
<span className="text-xl font-medium tracking-tight font-geist" style={{}}>FlowAI</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-zinc-400 hover:text-zinc-100 font-normal font-geist" href="#" style={{}}>Workflows</a>
<a className="text-zinc-400 hover:text-zinc-100 font-normal font-geist" href="#" style={{}}>Apps <span className="ml-1 text-xs text-zinc-600 font-geist" style={{}}>12</span></a>
<a className="text-zinc-400 hover:text-zinc-100 font-normal font-geist" href="#" style={{}}>Analytics</a>
<a className="text-zinc-400 hover:text-zinc-100 font-normal font-geist" href="#" style={{}}>Support</a>
</nav>
<button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300">
<svg className="lucide lucide-menu h-4 w-4" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</header>
<main className="max-w-7xl sm:px-6 sm:py-10 flex flex-col gap-12 mr-auto ml-auto pt-8 pr-4 pb-8 pl-4">

<section className="relative overflow-hidden h-[48vh] bg-zinc-900 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/17b34540-9b9c-44ba-9ed6-3ed1bed31bf3_1600w.jpg)] bg-cover border-zinc-800 border rounded-3xl">
<div className="relative z-10 h-full flex items-center justify-center">
<div className="absolute left-12 top-12 max-w-md flex flex-col gap-4">
<h3 className="leading-tight md:text-8xl text-7xl text-white mb-1 font-geist font-medium tracking-tighter" style={{}}>FlowAI</h3>
<p className="md:text-5xl text-3xl font-normal text-zinc-300 tracking-tighter font-geist" style={{}}>Intelligent workflows that adapt, learn, and optimize your business processes automatically.</p>
</div>
<button className="group inline-flex items-center gap-4 px-5 py-3 rounded-full bg-zinc-800/80 backdrop-blur hover:bg-zinc-800 transition text-zinc-100 border border-zinc-700" id="playDemo">
<span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-900">
<svg className="lucide lucide-play h-5 w-5 translate-x-[1px]" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</span>
<div className="text-left">
<p className="sm:text-xl leading-tight text-lg font-medium tracking-tight font-geist" style={{}}>Watch Demo</p>
<p className="text-xs text-zinc-400 font-geist" style={{}}>AI in action</p>
</div>
</button>
</div>
<div className="absolute right-5 top-5 flex items-center gap-2 text-xs text-zinc-400">
<svg className="lucide lucide-zap h-4 w-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="font-normal font-geist" style={{}}>Powered by advanced AI</span>
</div>
</section>

<section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

<article className="relative overflow-hidden sm:p-5 h-80 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.04),transparent_60%)]"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="flex items-start justify-between">
<div className="flex items-center gap-1">
<span className="h-1 w-1 rounded-full bg-zinc-300"></span>
<span className="h-1 w-1 rounded-full bg-zinc-600"></span>
<span className="h-1 w-1 rounded-full bg-zinc-600"></span>
</div>
<span className="text-[11px] text-zinc-500 font-normal font-geist" style={{}}>01</span>
</div>
<div className="flex-1 flex flex-col bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cbbb16da-2d93-431c-a54c-832b53df959d_800w.jpg)] bg-cover rounded-lg mt-2 mb-2 pt-6 pb-6 items-center justify-center">
</div>
<div className="mt-auto">
<h3 className="text-[15px] sm:text-base font-medium leading-snug tracking-tight text-zinc-100 font-geist" style={{}}>Smart automation that learns from your patterns</h3>
<p className="mt-1 text-sm text-zinc-400 font-geist" style={{}}>Workflows that improve over time.</p>
</div>
</div>
<div className="absolute bottom-4 right-4">
</div>
</article>

<article className="relative overflow-hidden sm:p-5 h-80 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.04),transparent_60%)]"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="flex items-start justify-between">
<div className="flex items-center gap-1">
<span className="h-1 w-1 rounded-full bg-zinc-300"></span>
<span className="h-1 w-1 rounded-full bg-zinc-300"></span>
<span className="h-1 w-1 rounded-full bg-zinc-600"></span>
</div>
<span className="text-[11px] text-zinc-500 font-normal font-geist" style={{}}>02</span>
</div>
<div className="flex-1 flex flex-col bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b4269188-f04b-491c-bc9c-9ca1629d67bc_800w.jpg)] bg-cover rounded-lg mt-2 mb-2 pt-6 pb-6 items-center justify-center">
</div>
<div className="mt-auto">
<h3 className="text-[15px] sm:text-base font-medium leading-snug tracking-tight text-zinc-100 font-geist" style={{}}>Enterprise-grade security with zero-trust architecture</h3>
<p className="mt-1 text-sm text-zinc-400 font-geist" style={{}}>Your data stays protected.</p>
</div>
</div>
<div className="absolute bottom-4 right-4">
</div>
</article>

<article className="relative overflow-hidden sm:p-5 h-80 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.04),transparent_60%)]"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="flex items-start justify-between">
<div className="flex items-center gap-1">
<span className="h-1 w-1 rounded-full bg-zinc-300"></span>
<span className="h-1 w-1 rounded-full bg-zinc-300"></span>
<span className="h-1 w-1 rounded-full bg-zinc-300"></span>
</div>
<span className="text-[11px] text-zinc-500 font-normal font-geist" style={{}}>03</span>
</div>
<div className="flex-1 flex flex-col bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/40cb2d16-4171-4285-a45e-43d6ffea0e9b_800w.jpg)] bg-cover rounded-lg mt-2 mb-2 pt-6 pb-6 items-center justify-center">
</div>
<div className="mt-auto">
<h3 className="text-[15px] sm:text-base font-medium leading-snug tracking-tight text-zinc-100 font-geist" style={{}}>Real-time analytics with predictive insights</h3>
<p className="mt-1 text-sm text-zinc-400 font-geist" style={{}}>Make data-driven decisions.</p>
</div>
</div>
<div className="absolute bottom-4 right-4">
</div>
</article>

<article className="relative overflow-hidden sm:p-5 h-80 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.04),transparent_60%)]"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="flex items-start justify-between">
<div className="flex items-center gap-1">
<span className="h-1 w-1 rounded-full bg-zinc-300"></span>
<span className="h-1 w-1 rounded-full bg-zinc-300"></span>
<span className="h-1 w-1 rounded-full bg-zinc-300"></span>
<span className="h-1 w-1 rounded-full bg-zinc-300"></span>
</div>
<span className="text-[11px] text-zinc-500 font-normal font-geist" style={{}}>04</span>
</div>
<div className="flex-1 flex flex-col bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2708f065-299d-4cc7-b08e-37d986f56c16_800w.jpg)] bg-cover rounded-lg mt-2 mb-2 pt-6 pb-6 items-center justify-center">
</div>
<div className="mt-auto">
<h3 className="text-[15px] sm:text-base font-medium leading-snug tracking-tight text-zinc-100 font-geist" style={{}}>Seamless integrations across your entire stack</h3>
<p className="text-sm text-zinc-400 mt-1 font-geist" style={{}}>Connect everything effortlessly.</p>
</div>
</div>
<div className="absolute bottom-4 right-4">
</div>
</article>
</section>

<section className="sm:p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl pt-6 pr-6 pb-6 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start">

<div className="flex flex-col justify-between min-h-full">
<div className="">
<span className="text-sm text-zinc-500 font-normal font-geist" style={{}}>FlowAI®</span>
<h2 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.9] text-zinc-100 mt-2 font-geist font-medium tracking-tighter" style={{}}>Meet our AI team.</h2>

<div className="mt-8 hidden sm:grid grid-cols-3 gap-6 text-zinc-600">
<div className="flex items-center gap-2">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-sm font-normal font-geist" style={{}}>Intelligence</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-sm font-normal font-geist" style={{}}>Automation</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-sm font-normal font-geist" style={{}}>Scale</span>
</div>
</div>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
<div>
<p className="text-sm text-zinc-100 font-medium tracking-tight font-geist" style={{}}>Join our AI revolution</p>
<p className="mt-1 text-sm text-zinc-400 font-geist" style={{}}>We're building the future of intelligent workflow automation.</p>
<button className="mt-4 inline-flex items-center gap-2 h-10 px-4 rounded-full bg-zinc-100 text-zinc-900 text-sm font-normal hover:bg-zinc-200 transition font-geist" style={{}}>
                                View openings
                                <span className="inline-flex h-2 w-2 rounded-full bg-zinc-900"></span>
</button>
</div>
<p className="text-base text-zinc-300 leading-relaxed sm:text-right font-geist" style={{}}>
                            Our team combines <span className="font-medium text-zinc-100 font-geist" style={{}}>cutting-edge AI research</span> with practical workflow solutions that scale with your business.
                        </p>
</div>
</div>

<div className="grid grid-cols-2 gap-4 h-[320px] relative overflow-hidden" style={{mask: 'linear-gradient(to bottom, black 60%, transparent 100%)', WebkitMask: 'linear-gradient(to bottom, black 60%, transparent 100%)'}}>

<article className="relative overflow-hidden h-[200px] bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 rounded-2xl">
<div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6d09277c-88d3-4681-8a06-18307469ce9f_800w.jpg)] bg-cover"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-zinc-700">
<svg className="lucide lucide-brain h-3.5 w-3.5" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-zinc-900/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-zinc-800 font-geist" style={{}}>ML Engine</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist" style={{}}>Neural.Core</p>
</div>
</article>

<article className="relative overflow-hidden h-[200px] bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 rounded-2xl">
<div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0e60f1bd-bde0-4ec4-8c23-24383a8b650a_800w.jpg)] bg-cover"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-zinc-700">
<svg className="lucide lucide-zap h-3.5 w-3.5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-zinc-900/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-zinc-800 font-geist" style={{}}>Automation</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist" style={{}}>Auto.Flow</p>
</div>
</article>

<article className="relative overflow-hidden h-[200px] bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 rounded-2xl">
<div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ac4a631c-975f-4482-9cef-2a1f99a48178_800w.jpg)] bg-cover"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-zinc-700">
<svg className="lucide lucide-trending-up h-3.5 w-3.5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-zinc-900/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-zinc-800 font-geist" style={{}}>Analytics</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist" style={{}}>Insight.AI</p>
</div>
</article>

<article className="relative overflow-hidden h-[200px] bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 rounded-2xl">
<div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0129262d-84f8-4262-b816-efd622faf4e8_800w.jpg)] bg-cover"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-zinc-700">
<svg className="lucide lucide-shield-check h-3.5 w-3.5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-zinc-900/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-zinc-800 font-geist" style={{}}>Security</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist" style={{}}>Guard.Net</p>
</div>
</article>
</div>
</div>
</section>

<section className="sm:p-8 bg-zinc-900 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2b8b3b39-e23c-43e6-be7b-500fa586c81f_3840w.jpg)] bg-cover border-zinc-800 border rounded-3xl pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center gap-2 text-sm text-zinc-400">
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-normal font-geist" style={{}}>Customer Success</span>
</div>
<div className="mt-2">
<h2 className="text-[44px] sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] text-white font-geist font-medium tracking-tighter" style={{}}>Results.</h2>
<p className="mt-1 text-sm sm:text-base text-zinc-400 font-normal font-geist" style={{}}>Real impact from real workflows</p>
</div>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

<article className="sm:p-6 flex flex-col min-h-[420px] bg-zinc-800/50 border-zinc-800 border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg justify-between">
<div className="space-y-5">
<div className="flex items-end gap-2">
<span className="text-5xl sm:text-6xl text-white font-geist font-medium tracking-tighter" style={{}}>99.8</span>
<span className="text-zinc-400 text-base font-normal font-geist" style={{}}>%</span>
</div>
<p className="text-sm text-zinc-300 font-geist" style={{}}>We've automated <span className="font-medium text-white font-geist" style={{}}>250K+ workflows</span> with industry-leading uptime and reliability.</p>
<div className="flex items-center gap-3">
<span className="text-sm font-medium text-white font-geist" style={{}}>FlowAI®</span>
</div>
<div className="flex items-center gap-2">
<div className="h-7 w-7 bg-gradient-to-br from-zinc-700 to-zinc-800 border border-zinc-700 rounded-full flex items-center justify-center">
<svg className="lucide lucide-zap h-3 w-3 text-zinc-300" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="h-7 w-7 bg-gradient-to-br from-zinc-700 to-zinc-800 border border-zinc-700 -ml-2 rounded-full flex items-center justify-center">
<svg className="lucide lucide-brain h-3 w-3 text-zinc-300" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>
</div>
<div className="h-7 w-7 bg-gradient-to-br from-zinc-700 to-zinc-800 border border-zinc-700 -ml-2 rounded-full flex items-center justify-center">
<svg className="lucide lucide-trending-up h-3 w-3 text-zinc-300" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<span className="inline-flex items-center justify-center -ml-1 h-7 px-2 rounded-full bg-white text-zinc-900 text-xs font-normal font-geist" style={{}}>250K+</span>
</div>
<div className="flex items-center gap-1 text-green-500">
<svg className="lucide lucide-trending-up h-4 w-4" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-xs text-zinc-400 font-normal font-geist" style={{}}>Active across 50+ industries</span>
</div>
</div>
<button className="mt-6 h-11 w-full rounded-full bg-white text-zinc-900 text-sm font-normal hover:bg-zinc-100 transition font-geist" style={{}}>
                        Start your workflow
                    </button>
</article>

<div className="grid grid-rows-[auto_1fr] gap-4">
<article className="flex bg-zinc-800/50 border-zinc-800 border rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-lg items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 flex bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/440abaed-d182-4e6b-945f-4b30257fce79_320w.jpg)] bg-cover border-zinc-700 border rounded-md items-center justify-center">
</div>
<div className="">
<p className="text-sm font-medium tracking-tight leading-tight text-white font-geist" style={{}}>Sarah Chen</p>
<p className="text-xs text-zinc-400 font-geist" style={{}}>TechFlow Solutions</p>
</div>
</div>
<span className="text-zinc-600">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</article>
<article className="sm:p-6 flex flex-col min-h-[420px] bg-zinc-800/50 border-zinc-800 border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg justify-between">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1 text-green-500">
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-zinc-600">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</div>
<p className="text-2xl sm:text-3xl text-right leading-snug text-white font-geist font-medium tracking-tighter" style={{}}>FlowAI reduced our processing time by 85% and eliminated manual errors completely.</p>
</article>
</div>
<div className="grid grid-rows-[1fr_auto] gap-4">
<article className="flex flex-col min-h-[420px] bg-zinc-800/50 border-zinc-800 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-lg justify-between">
<p className="text-2xl sm:text-3xl text-center leading-snug text-white font-geist font-medium tracking-tighter" style={{}}>The AI learns our patterns and suggests optimizations we never considered.</p>
<div className="mt-6 flex items-center justify-between">
<div className="flex items-center gap-1 text-green-500">
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-zinc-600">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</div>
</article>
<article className="flex gap-3 bg-zinc-800/50 border-zinc-800 border rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-lg items-center">
<div className="h-9 w-9 flex bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7206b228-1279-4d12-b408-6a9e34152341_320w.jpg)] bg-cover border-zinc-700 border rounded-md items-center justify-center">
</div>
<div className="">
<p className="text-sm font-medium tracking-tight leading-tight text-white font-geist" style={{}}>Marcus Johnson</p>
<p className="text-xs text-zinc-400 font-geist" style={{}}>Innovate Labs</p>
</div>
</article>
</div>
<div className="grid grid-rows-[auto_1fr] gap-4">
<article className="flex bg-zinc-800/50 border-zinc-800 border rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-lg items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 flex bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9871ecc7-e70a-4f1a-9b1d-3cafe686b682_320w.jpg)] bg-cover border-zinc-700 border rounded-md items-center justify-center">
</div>
<div className="">
<p className="text-sm font-medium tracking-tight leading-tight text-white font-geist" style={{}}>Maya Patel</p>
<p className="text-xs text-zinc-400 font-geist" style={{}}>Operations Director</p>
</div>
</div>
<span className="text-zinc-600">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</article>
<article className="sm:p-6 flex flex-col min-h-[420px] bg-zinc-800/50 border-zinc-800 border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg justify-between">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1 text-green-500">
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-zinc-600">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</div>
<p className="text-2xl sm:text-3xl text-right leading-snug text-white font-geist font-medium tracking-tighter" style={{}}>Seamless integration with our existing tools. Setup took minutes, not weeks.</p>
</article>
</div>
</div>
</section><section className="sm:p-8 bg-zinc-900/50 border-zinc-800 border rounded-3xl mt-10 pt-6 pr-6 pb-6 pl-6" id="aura-emejrm66m">

<div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-800 border border-white/10 p-6 sm:p-8">
<div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] items-center gap-4 sm:gap-8">
<p className="text-[64px] sm:text-[96px] lg:text-[120px] leading-none text-white/95 font-geist font-medium tracking-tighter">3</p>
<div className="">
<h3 className="sm:text-3xl text-2xl font-medium text-white tracking-tighter font-geist">steps workflow</h3>
<p className="mt-2 text-sm sm:text-base text-white/80 font-geist">From idea to launch—fast, collaborative, reliable.</p>
</div>
</div>

<div className="pointer-events-none absolute right-6 top-6 hidden sm:block">
<div className="flex flex-col gap-2">
<div className="flex justify-end gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-200/80"></span>
</div>
<div className="flex justify-end gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-200/70"></span>
<span className="h-1.5 w-1.5 rounded-full bg-indigo-200/80"></span>
</div>
<div className="flex justify-end gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-200/60"></span>
<span className="h-1.5 w-1.5 rounded-full bg-indigo-200/70"></span>
<span className="h-1.5 w-1.5 rounded-full bg-indigo-200/80"></span>
</div>
<div className="flex justify-end gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-200/50"></span>
<span className="h-1.5 w-1.5 rounded-full bg-indigo-200/60"></span>
<span className="h-1.5 w-1.5 rounded-full bg-indigo-200/70"></span>
<span className="h-1.5 w-1.5 rounded-full bg-indigo-200/80"></span>
</div>
<div className="flex justify-end gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-200/40"></span>
<span className="h-1.5 w-1.5 rounded-full bg-indigo-200/50"></span>
<span className="h-1.5 w-1.5 rounded-full bg-indigo-200/60"></span>
<span className="h-1.5 w-1.5 rounded-full bg-indigo-200/70"></span>
<span className="h-1.5 w-1.5 rounded-full bg-indigo-200/80"></span>
</div>
</div>
</div>
</div>

<div className="mt-6 grid grid-cols-1 gap-4">

<article className="rounded-2xl bg-zinc-900/70 border border-zinc-800 p-5 sm:p-6 backdrop-blur">
<div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center gap-4 sm:gap-6">
<div>
<p className="text-xl sm:text-2xl text-zinc-100 font-geist font-medium tracking-tighter">Kickoff &amp; Discovery</p>
</div>
<div className="flex flex-col items-center">
<span className="text-xs text-indigo-400 font-geist">01</span>
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full ring-2 ring-indigo-400/60 bg-zinc-950 mt-1">
<span className="h-2 w-2 rounded-full bg-white/90"></span>
</span>
</div>
<div className="text-left">
<p className="text-sm text-zinc-400 font-geist">Clarify goals, scope, and success metrics</p>
</div>
</div>
</article>

<article className="rounded-2xl bg-zinc-900/70 border border-zinc-800 p-5 sm:p-6 backdrop-blur">
<div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center gap-4 sm:gap-6">
<div>
<p className="text-xl sm:text-2xl text-zinc-100 font-geist font-medium tracking-tighter">Design &amp; Prototype</p>
</div>
<div className="flex flex-col items-center">
<span className="text-xs text-indigo-400 font-geist">02</span>
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full ring-2 ring-indigo-400/60 bg-zinc-950 mt-1">
<span className="h-2 w-2 rounded-full bg-white/90"></span>
</span>
</div>
<div className="text-left">
<p className="text-sm text-zinc-400 font-geist">Iterate visuals and UX with quick feedback loops</p>
</div>
</div>
</article>

<article className="rounded-2xl bg-zinc-900/70 border border-zinc-800 p-5 sm:p-6 backdrop-blur">
<div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center gap-4 sm:gap-6">
<div>
<p className="text-xl sm:text-2xl text-zinc-100 font-geist font-medium tracking-tighter">Build &amp; Launch</p>
</div>
<div className="flex flex-col items-center">
<span className="text-xs text-indigo-400 font-geist">03</span>
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full ring-2 ring-indigo-400/60 bg-zinc-950 mt-1">
<span className="h-2 w-2 rounded-full bg-white/90"></span>
</span>
</div>
<div className="text-left">
<p className="text-sm text-zinc-400 font-geist">Ship production-ready code, connect integrations, and prepare for go-live</p>
</div>
</div>
</article>
</div>

<div className="mt-6 flex items-center justify-center">
<a className="inline-flex items-center gap-2 text-sm sm:text-base text-zinc-100 underline decoration-zinc-700 underline-offset-4 hover:text-white font-geist" href="#">
      Start your project
      <svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</section><section className="sm:p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl mt-10 px-6 py-6">

<div className="flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300">
<svg className="lucide lucide-credit-card h-4 w-4" data-lucide="credit-card" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/200/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
<span className="text-xs font-normal font-geist">Pricing</span>
</div>
<h2 className="mt-4 text-[40px] sm:text-6xl lg:text-7xl leading-[0.95] font-geist font-medium tracking-tighter text-white">Flexible plans for every team</h2>
<p className="mt-2 text-sm sm:text-base text-zinc-400 font-geist">Choose a plan that automates your workflows and scales with your business.</p>
</div>

<div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">

<article className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/80 to-zinc-950 p-5 sm:p-6">

<div className="flex items-center justify-between text-xs">
<div className="inline-flex items-center gap-2 text-zinc-400">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-zinc-950 ring-1 ring-zinc-800 text-zinc-300">01</span>
<div className="flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-500/80"></span>
<span className="h-1.5 w-1.5 rounded-full bg-indigo-500/40"></span>
<span className="h-1.5 w-1.5 rounded-full bg-indigo-500/20"></span>
</div>
</div>
<div className="inline-flex items-center gap-1 text-zinc-400">
<svg className="lucide lucide-clock h-3.5 w-3.5" data-lucide="clock" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-geist">Go‑live in 2 weeks</span>
</div>
</div>

<div className="mt-5 flex items-start justify-between">
<div>
<h3 className="text-2xl sm:text-3xl text-white font-geist font-medium tracking-tight">Starter</h3>
<p className="mt-1 text-sm text-zinc-400 font-geist">For small teams automating a single workflow.</p>
</div>
<div className="text-right">
<p className="text-2xl sm:text-3xl text-white font-geist font-medium tracking-tight">$1,999</p>
<p className="text-xs text-zinc-500 font-geist">per project</p>
</div>
</div>
<button className="mt-5 inline-flex items-center justify-center gap-2 h-11 w-full rounded-full bg-white text-zinc-900 text-sm font-normal hover:bg-zinc-100 transition font-geist">
        Get Started
        <svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>

<div className="mt-6">
<p className="text-xs text-zinc-400 font-geist">Essential tools to get started:</p>
<ul className="mt-3 space-y-3">
<li className="flex items-start gap-3">
<span className="mt-0.5 h-5 w-5 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
<svg className="lucide lucide-check h-3.5 w-3.5 text-green-400" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm-zinc-300 font-geist">1 automated workflow, up to 3 integrations</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 h-5 w-5 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
<svg className="lucide lucide-check h-3.5 w-3.5 text-green-400" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-zinc-300 font-geist">Email support and guided setup</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 h-5 w-5 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
<svg className="lucide lucide-check h-3.5 w-3.5 text-green-400" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-zinc-300 font-geist">1 revision and handover docs</span>
</li>
</ul>
</div>
</article>

<article className="relative overflow-hidden rounded-2xl border border-zinc-700 bg-gradient-to-b from-zinc-900 to-zinc-950 p-5 sm:p-6 ring-1 ring-indigo-500/30">
<div className="absolute right-4 top-4">
</div>

<div className="flex text-xs items-center justify-between">
<div className="inline-flex items-center gap-2 text-zinc-400">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-zinc-950 ring-1 ring-zinc-800 text-zinc-300">02</span>
<div className="flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-500/80"></span>
<span className="h-1.5 w-1.5 rounded-full bg-indigo-500/80"></span>
<span className="h-1.5 w-1.5 rounded-full bg-indigo-500/40"></span>
</div>
</div>
<div className="inline-flex items-center gap-1 text-zinc-400">
<svg className="lucide lucide-clock h-3.5 w-3.5" data-lucide="clock" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-geist">Go‑live in 4 weeks</span>
</div>
</div>

<div className="mt-5 flex items-start justify-between">
<div className="">
<h3 className="text-2xl sm:text-3xl text-white font-geist font-medium tracking-tight">Pro</h3>
<p className="mt-1 text-sm text-zinc-400 font-geist">For teams scaling automation across departments.</p>
</div>
<div className="text-right">
<p className="text-2xl sm:text-3xl text-white font-geist font-medium tracking-tight">$4,999</p>
<p className="text-xs text-zinc- font-geist">per project</p>
</div>
</div>
<button className="mt-5 inline-flex items-center justify-center gap-2 h-11 w-full rounded-full bg-white text-zinc-900 text-sm font-normal hover:bg-zinc-100 transition font-geist">
        Start Pro
        <svg className="lucide lucide-zap h-4 w-4" data-lucide="zap" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</button>

<div className="mt-6">
<p className="text-xs text-zinc-400 font-geistEverything in Starter, plus:&lt;/p&gt; &lt;ul class=" mt-3="" space-y-3"="">
</p><li className="flex items-start gap-3">
<span className="mt-0.5 h-5 w-5 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center">
<svg className="lucide lucide-check h-3.5 w-3.5 text-green-400" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-zinc-300 font-geist">5+ workflows, unlimited integrations</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 h-5 w-5 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center">
<svg className="lucide lucide-check h-3.5 w-3.5 text-green-400" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-zinc-300 font-geist">Advanced analytics and alerts</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 h-5 w-5 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center">
<svg className="lucide lucide-check h-3.5 w-3.5 text-green-400" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-zinc-300 font-geist">Priority support and quarterly reviews</span>
</li>
</div>
</article>

<article className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/80 to-zinc-950 p-5 sm:p-6">

<div className="flex items-center justify-between text-xs">
<div className="inline-flex items-center gap-2 text-zinc-400">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-zinc-950 ring-1 ring-zinc-800 text-zinc-300">03</span>
<div className="flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-500/80"></span>
<span className="h-1.5 w-1.5 rounded-full bg-indigo-500/80"></span>
<span className="h-1.5 w-1.5 rounded-full bg-indigo-500/80"></span>
</div>
</div>
<div className="inline-flex items-center gap-1 text-zinc-400">
<svg className="lucide lucide-clock h-3.5 w-3.5" data-lucide="clock" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-geist">Go‑live in 6–8 weeks</span>
</div>
</div>

<div className="mt-5 flex items-start justify-between">
<div className="">
<h3 className="text-2xl sm:text-3xl text-white font-geist font-medium tracking-tight">Premium</h3>
<p className="mt-1 text-sm text-zinc-400 font-geist">For organizations with compliance and custom needs.</p>
</div>
<div className="text-right">
<p className="text-2xl sm:text-3xl text-white font-geist font-medium tracking-tight">Custom</p>
<p className="text-xs text-zinc-500 font-geist">annual agreement</p>
</div>
</div>
<button className="mt-5 inline-flex items-center justify-center gap-2 h-11 w-full rounded-full bg-zinc-100 text-zinc-900 text-sm font-normal hover:bg-white transition font-geist">
        Contact Sales
        <svg className="lucide lucide-messages-square h-4 w-4" data-lucide="messages-square" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path><path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"></path></svg>
</button>

<div className="mt-6">
<p className="text-xs text-zinc-400 font-geist">Everything in Pro, plus:</p>
<ul className="mt-3 space-y-3">
<li className="flex items-start gap-3">
<span className="mt-0.5 h-5 w-5 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
<svg className="lucide lucide-check h-3.5 w-3.5 text-green-400" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-zinc-300 font-geist">SSO/SAML, audit logs, and DPA</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 h-5 w-5 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
<svg className="lucide lucide-check h-3.5 w-3.5 text-green-400" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-zinc-300 font-geist">Dedicated environment &amp; SLA</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 h-5 w-5 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
<svg className="lucide lucide-check h-3.5 w-3.5 text-green-400" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-zinc-300 font-geist">Custom models and private connectors</span>
</li>
</ul>
</div>
</article>
</div>

<div className="mt-6 flex flex-col items-center text-center">
<p className="text-xs text-zinc-500 font-geist">Need a tailored package? <a className="underline decoration-zinc-700 underline-offset-4 text-zinc-300 hover:text-white font-geist" href="#">Talk to our team</a>.</p>
</div>
</section>

<footer className="sm:p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl mt-10 px-6 py-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

<div className="">
<h3 className="text-4xl text-zinc-100 font-geist font-medium tracking-tighter" style={{}}>
                        Ready to transform your workflows with intelligent automation? <span className="underline decoration-zinc-600 underline-offset-4 font-geist font-medium tracking-tighter" style={{}}>Let's get started</span>.
                    </h3>
<div className="mt-6 flex items-center gap-3">
<div className="h-10 w-10 flex bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f40f03d0-8722-42a1-bf75-89d9deb07d7f_320w.jpg)] bg-cover border-zinc-700 border rounded-full items-center justify-center">
</div>
<div className="">
<p className="text-sm font-medium tracking-tight text-zinc-100 font-geist" style={{}}>Alex Rivera</p>
<p className="text-xs text-zinc-500 font-geist" style={{}}>AI Solutions Lead</p>
</div>
</div>
<div className="mt-10 space-y-2">
<p className="text-sm text-zinc-400 font-geist" style={{}}>support@flowai.com</p>
<a className="inline-flex items-center gap-3 text-2xl sm:text-3xl text-zinc-100 underline decoration-zinc-600 underline-offset-4 font-geist font-medium tracking-tighter" href="mailto:hello@flowai.com" style={{}}>
<span className="inline-flex h-7 w-7 items-center justify-center text-zinc-900 bg-zinc-100 rounded-full">
<svg className="lucide lucide-plus h-3.5 w-3.5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
                            hello@flowai.com
                        </a>
</div>
</div>

<div className="">
<h4 className="text-2xl sm:text-3xl text-zinc-100 font-geist font-medium tracking-tighter" style={{}}>Stay Updated</h4>
<form className="mt-6 space-y-6">
<div className="">
<input className="w-full bg-transparent border-b border-zinc-700 focus:border-zinc-400 outline-none py-3 text-sm text-zinc-100 placeholder-zinc-500" placeholder="Your name *" type="text"/>
</div>
<div>
<input className="w-full bg-transparent border-b border-zinc-700 focus:border-zinc-400 outline-none py-3 text-sm text-zinc-100 placeholder-zinc-500" placeholder="Email *" type="email"/>
</div>
<div className="flex items-center gap-4">
<button className="inline-flex items-center justify-between gap-3 px-4 py-2.5 rounded-full bg-zinc-100 text-zinc-900 text-sm font-normal hover:bg-zinc-200 transition font-geist" style={{}} type="submit">
                                Subscribe
                                <span className="inline-flex h-2 w-2 rounded-full bg-zinc-900"></span>
</button>
<p className="text-sm text-zinc-500 font-geist" style={{}}>Get weekly insights on workflow automation and AI trends.</p>
</div>
</form>
<div className="grid grid-cols-2 gap-8 mt-10">
<div>
<p className="text-xs text-zinc-500 font-normal font-geist" style={{}}>Quick Links</p>
<ul className="mt-3 space-y-2">
<li><a className="text-lg font-medium tracking-tight text-zinc-100 hover:underline underline-offset-4 font-geist" href="#" style={{}}>Platform</a></li>
<li><a className="text-lg font-medium tracking-tight text-zinc-100 hover:underline underline-offset-4 font-geist" href="#" style={{}}>Features</a></li>
<li><a className="text-lg font-medium tracking-tight text-zinc-100 hover:underline underline-offset-4 font-geist" href="#" style={{}}>Pricing</a></li>
<li><a className="text-lg font-medium tracking-tight text-zinc-100 hover:underline underline-offset-4 font-geist" href="#" style={{}}>Docs</a></li>
</ul>
</div>
<div>
<p className="text-xs text-zinc-500 font-normal font-geist" style={{}}>Connect</p>
<ul className="mt-3 space-y-2">
<li>
<a className="inline-flex items-center gap-2 text-lg font-medium tracking-tight text-zinc-100 hover:underline underline-offset-4 font-geist" href="#" style={{}}>
                                        GitHub
                                        <svg className="lucide lucide-external-link h-4 w-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</li>
<li>
<a className="inline-flex items-center gap-2 text-lg font-medium tracking-tight text-zinc-100 hover:underline underline-offset-4 font-geist" href="#" style={{}}>
                                        Discord
                                        <svg className="lucide lucide-external-link h-4 w-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</li>
<li>
<a className="inline-flex items-center gap-2 text-lg font-medium tracking-tight text-zinc-100 hover:underline underline-offset-4 font-geist" href="#" style={{}}>
                                        Twitter
                                        <svg className="lucide lucide-external-link h-4 w-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</li>
</ul>
</div>
</div>
</div>
</div>
<div className="mt-10 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="md:w-14 md:h-14 w-[36px] h-[36px]" strokeWidth="2" style={{width: '36px', height: '36px'}} viewbox="0 0 48 48">
<path className="" d="M24 8 L40 36 H8 Z" fill="currentColor"></path>
</svg>
<span className="text-sm font-medium tracking-tight font-geist" style={{}}>FlowAI</span>
</div>
<p className="text-xs text-zinc-500 font-geist" style={{}}>© <span className="font-normal font-geist" style={{}}>2024</span> FlowAI® — All rights reserved</p>
</div>
</footer>
</main>

<div className="fixed inset-0 z-50 hidden" id="demoModal">
<div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"></div>
<div className="relative h-full w-full flex items-center justify-center p-4">
<div className="relative w-full max-w-4xl aspect-video bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl border border-zinc-800">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="absolute inset-0 w-full h-full" id="demoFrame" src="" title="FlowAI Demo"></iframe>
<button className="absolute top-3 right-3 h-9 w-9 inline-flex items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 hover:bg-zinc-100" id="closeDemo">
<svg className="lucide lucide-x h-5 w-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>
</div>


    </>
  );
}
