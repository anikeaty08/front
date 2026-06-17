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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="pointer-events-none absolute left-[-10%] top-[-10%] h-[40rem] w-[40rem] rounded-full bg-indigo-500/10 blur-[100px] transition-transform duration-[3000ms] ease-in-out" style={{animation: 'float 10s infinite alternate'}}></div>
<div className="pointer-events-none absolute right-[-10%] top-[20%] h-[30rem] w-[30rem] rounded-full bg-purple-500/10 blur-[100px] transition-transform duration-[4000ms] ease-in-out" style={{animation: 'float-delayed 12s infinite alternate'}}></div>
<style>
        @keyframes float { 0% { transform: translateY(0px) scale(1); } 100% { transform: translateY(50px) scale(1.1); } }
        @keyframes float-delayed { 0% { transform: translateY(0px) scale(1.1); } 100% { transform: translateY(-40px) scale(1); } }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    </style>

<nav className="sticky top-0 z-50 border-b border-white/[0.04] bg-[#050505]/80 backdrop-blur-xl transition-all duration-500">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
<div className="flex items-center gap-8">

<a className="group relative flex items-center gap-2" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.03] border border-white/[0.08] group-hover:bg-white/[0.08] transition-colors duration-300">
<iconify-icon className="text-indigo-400" icon="solar:box-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tighter text-zinc-100 group-hover:text-white transition-colors">V A U L T</span>
</a>

<div className="hidden items-center gap-1 md:flex">
<a className="rounded-full px-4 py-1.5 text-sm font-light text-zinc-400 transition-all hover:bg-white/[0.04] hover:text-zinc-100" href="#">Home</a>
<a className="rounded-full px-4 py-1.5 text-sm font-light text-zinc-400 transition-all hover:bg-white/[0.04] hover:text-zinc-100" href="#">Games</a>
<a className="rounded-full px-4 py-1.5 text-sm font-light text-zinc-400 transition-all hover:bg-white/[0.04] hover:text-zinc-100" href="#">Apps</a>
<a className="rounded-full px-4 py-1.5 text-sm font-light text-zinc-400 transition-all hover:bg-white/[0.04] hover:text-zinc-100" href="#">Articles</a>
</div>
</div>
<div className="flex items-center gap-4">

<div className="group relative hidden sm:block">
<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
<iconify-icon className="text-zinc-500 group-focus-within:text-indigo-400 transition-colors" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<input className="w-64 rounded-full border border-white/[0.06] bg-white/[0.02] py-1.5 pl-10 pr-4 text-sm font-light text-zinc-200 outline-none transition-all duration-300 placeholder:text-zinc-600 focus:w-80 focus:border-indigo-500/30 focus:bg-white/[0.04] focus:ring-4 focus:ring-indigo-500/10" placeholder="Search apps, games &amp; packages..." type="text"/>
</div>

<label className="relative hidden lg:inline-flex cursor-pointer items-center">
<input className="peer sr-only" type="checkbox" value=""/>
<div className="peer h-5 w-9 rounded-full bg-white/[0.05] border border-white/[0.1] after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-zinc-400 after:transition-all after:content-[''] peer-checked:bg-indigo-500/20 peer-checked:border-indigo-500/50 peer-checked:after:translate-x-full peer-checked:after:bg-indigo-400 peer-focus:outline-none transition-all duration-300"></div>
</label>
<button className="md:hidden flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-zinc-400 hover:text-white transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</nav>
<main className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-12 sm:pt-16">

<div className="flex flex-col items-center text-center mb-16">
<h1 className="max-w-4xl text-4xl sm:text-5xl md:text-6xl font-medium tracking-tighter text-zinc-100 mb-6 leading-[1.1]">
                Download Free APKs <br className="hidden sm:block"/>
<span className="bg-gradient-to-r from-zinc-100 via-indigo-200 to-zinc-500 bg-clip-text text-transparent">&amp; Verified Games.</span>
</h1>
<p className="max-w-2xl text-base md:text-lg font-light text-zinc-400 mb-8 leading-relaxed">
                Discover a curated ecosystem of premium, open-source, and modified applications. Verified packages, lightning-fast downloads, zero tracking.
            </p>

<div className="group relative sm:hidden w-full max-w-md mb-8">
<div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
<iconify-icon className="text-zinc-500 group-focus-within:text-indigo-400 transition-colors" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<input className="w-full rounded-full border border-white/[0.06] bg-white/[0.02] py-3 pl-12 pr-4 text-sm font-light text-zinc-200 outline-none transition-all duration-300 placeholder:text-zinc-600 focus:border-indigo-500/30 focus:bg-white/[0.04] focus:ring-4 focus:ring-indigo-500/10" placeholder="Search apps &amp; games..." type="text"/>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-zinc-100 px-8 font-medium text-zinc-900 transition-all duration-300 hover:scale-105 active:scale-95">
<span className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
<span className="relative flex items-center gap-2 text-sm">
                        Explore Catalog
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</button>
</div>
</div>

<div className="mb-12 flex items-center gap-3 overflow-x-auto hide-scrollbar pb-4 -mx-6 px-6 md:mx-0 md:px-0">
<button className="shrink-0 rounded-full bg-zinc-100 px-5 py-2 text-xs font-medium text-zinc-900 transition-all">Discover</button>
<button className="shrink-0 rounded-full border border-white/[0.08] bg-white/[0.02] px-5 py-2 text-xs font-light text-zinc-400 hover:border-white/[0.15] hover:text-zinc-200 transition-all">Action Games</button>
<button className="shrink-0 rounded-full border border-white/[0.08] bg-white/[0.02] px-5 py-2 text-xs font-light text-zinc-400 hover:border-white/[0.15] hover:text-zinc-200 transition-all">Role Playing</button>
<button className="shrink-0 rounded-full border border-white/[0.08] bg-white/[0.02] px-5 py-2 text-xs font-light text-zinc-400 hover:border-white/[0.15] hover:text-zinc-200 transition-all">Social</button>
<button className="shrink-0 rounded-full border border-white/[0.08] bg-white/[0.02] px-5 py-2 text-xs font-light text-zinc-400 hover:border-white/[0.15] hover:text-zinc-200 transition-all">Productivity</button>
<button className="shrink-0 rounded-full border border-white/[0.08] bg-white/[0.02] px-5 py-2 text-xs font-light text-zinc-400 hover:border-white/[0.15] hover:text-zinc-200 transition-all">Photography</button>
</div>

<div className="flex flex-col lg:flex-row gap-10">

<div className="flex-1 w-full">

<div className="flex items-end justify-between mb-6">
<div>
<h2 className="text-2xl font-medium tracking-tight text-zinc-100">Featured &amp; Trending</h2>
<p className="text-sm font-light text-zinc-500 mt-1">Highly downloaded in the last 24 hours.</p>
</div>
<a className="hidden sm:flex items-center gap-1 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors group" href="#">
                        See all
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

<div className="group relative flex flex-col justify-between gap-5 rounded-[24px] border border-white/[0.04] bg-[#0a0a0a]/50 p-5 backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-white/[0.12] hover:bg-[#111] hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] cursor-pointer overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-500/0 via-indigo-500/0 to-indigo-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
<div className="relative flex items-start justify-between">
<div className="flex items-center gap-4">
<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 text-indigo-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-inner">
<iconify-icon className="text-2xl" icon="solar:camera-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium tracking-tight text-zinc-200 group-hover:text-indigo-300 transition-colors duration-300">ProShot Mod</h3>
<p className="text-xs font-light text-zinc-500 mt-0.5">v8.20.1 • 28 MB</p>
</div>
</div>
</div>
<p className="relative text-sm font-light text-zinc-400 line-clamp-2 leading-relaxed">
                            Advanced camera application with full manual controls and unlocked premium features.
                        </p>
<div className="relative flex items-center justify-between pt-2">
<div className="flex items-center gap-1.5 text-xs font-medium text-zinc-400 bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/[0.05]">
<iconify-icon className="text-indigo-400" icon="solar:star-bold"></iconify-icon>
<span className="text-zinc-300">4.9</span>
</div>
<button className="relative flex h-8 items-center justify-center gap-2 rounded-full bg-white/[0.05] border border-white/[0.1] px-4 text-xs font-medium text-zinc-300 transition-all duration-300 group-hover:bg-zinc-100 group-hover:text-zinc-900 group-hover:border-transparent active:scale-95 overflow-hidden">
<span className="relative z-10 flex items-center gap-1.5">
                                    Download APK
                                    <iconify-icon className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" icon="solar:download-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</button>
</div>
</div>

<div className="group relative flex flex-col justify-between gap-5 rounded-[24px] border border-white/[0.04] bg-[#0a0a0a]/50 p-5 backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-white/[0.12] hover:bg-[#111] hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] cursor-pointer overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/0 via-emerald-500/0 to-emerald-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
<div className="relative flex items-start justify-between">
<div className="flex items-center gap-4">
<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-inner">
<iconify-icon className="text-2xl" icon="solar:gamepad-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium tracking-tight text-zinc-200 group-hover:text-emerald-300 transition-colors duration-300">Cyber Hunter+</h3>
<p className="text-xs font-light text-zinc-500 mt-0.5">v0.100.413 • 1.2 GB</p>
</div>
</div>
</div>
<p className="relative text-sm font-light text-zinc-400 line-clamp-2 leading-relaxed">
                            Next-generation sandbox competitive game packed with survival, shooting, and exploration.
                        </p>
<div className="relative flex items-center justify-between pt-2">
<div className="flex items-center gap-1.5 text-xs font-medium text-zinc-400 bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/[0.05]">
<iconify-icon className="text-emerald-400" icon="solar:star-bold"></iconify-icon>
<span className="text-zinc-300">4.7</span>
</div>
<button className="relative flex h-8 items-center justify-center gap-2 rounded-full bg-white/[0.05] border border-white/[0.1] px-4 text-xs font-medium text-zinc-300 transition-all duration-300 group-hover:bg-zinc-100 group-hover:text-zinc-900 group-hover:border-transparent active:scale-95">
<span className="relative z-10 flex items-center gap-1.5">
                                    Download APK
                                    <iconify-icon className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" icon="solar:download-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</button>
</div>
</div>

<div className="group relative flex flex-col justify-between gap-5 rounded-[24px] border border-white/[0.04] bg-[#0a0a0a]/50 p-5 backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-white/[0.12] hover:bg-[#111] hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] cursor-pointer overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-rose-500/0 via-rose-500/0 to-rose-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
<div className="relative flex items-start justify-between">
<div className="flex items-center gap-4">
<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500/10 to-orange-500/10 border border-rose-500/20 text-rose-400 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-inner">
<iconify-icon className="text-2xl" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium tracking-tight text-zinc-200 group-hover:text-rose-300 transition-colors duration-300">StreamFlix Pro</h3>
<p className="text-xs font-light text-zinc-500 mt-0.5">v2.1.0 • 45 MB</p>
</div>
</div>
</div>
<p className="relative text-sm font-light text-zinc-400 line-clamp-2 leading-relaxed">
                            Ad-free streaming platform client. Watch high-quality content without interruptions.
                        </p>
<div className="relative flex items-center justify-between pt-2">
<div className="flex items-center gap-1.5 text-xs font-medium text-zinc-400 bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/[0.05]">
<iconify-icon className="text-rose-400" icon="solar:star-bold"></iconify-icon>
<span className="text-zinc-300">4.5</span>
</div>
<button className="relative flex h-8 items-center justify-center gap-2 rounded-full bg-white/[0.05] border border-white/[0.1] px-4 text-xs font-medium text-zinc-300 transition-all duration-300 group-hover:bg-zinc-100 group-hover:text-zinc-900 group-hover:border-transparent active:scale-95">
<span className="relative z-10 flex items-center gap-1.5">
                                    Download APK
                                    <iconify-icon className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" icon="solar:download-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</button>
</div>
</div>

<div className="group relative flex flex-col justify-between gap-5 rounded-[24px] border border-white/[0.04] bg-[#0a0a0a]/50 p-5 backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-white/[0.12] hover:bg-[#111] hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] cursor-pointer overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 via-blue-500/0 to-blue-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
<div className="relative flex items-start justify-between">
<div className="flex items-center gap-4">
<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 text-blue-400 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-inner">
<iconify-icon className="text-2xl" icon="solar:widget-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium tracking-tight text-zinc-200 group-hover:text-blue-300 transition-colors duration-300">Nova Prime</h3>
<p className="text-xs font-light text-zinc-500 mt-0.5">v8.0.8 • 12 MB</p>
</div>
</div>
</div>
<p className="relative text-sm font-light text-zinc-400 line-clamp-2 leading-relaxed">
                            Highly customizable, performance driven, home screen replacement with premium unlocked.
                        </p>
<div className="relative flex items-center justify-between pt-2">
<div className="flex items-center gap-1.5 text-xs font-medium text-zinc-400 bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/[0.05]">
<iconify-icon className="text-blue-400" icon="solar:star-bold"></iconify-icon>
<span className="text-zinc-300">4.8</span>
</div>
<button className="relative flex h-8 items-center justify-center gap-2 rounded-full bg-white/[0.05] border border-white/[0.1] px-4 text-xs font-medium text-zinc-300 transition-all duration-300 group-hover:bg-zinc-100 group-hover:text-zinc-900 group-hover:border-transparent active:scale-95">
<span className="relative z-10 flex items-center gap-1.5">
                                    Download APK
                                    <iconify-icon className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" icon="solar:download-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</button>
</div>
</div>
</div>
</div>

<div className="lg:w-80 shrink-0 flex flex-col">
<div className="flex items-end justify-between mb-6">
<h2 className="text-xl font-medium tracking-tight text-zinc-100">Popular Games</h2>
<a className="text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors" href="#">More</a>
</div>
<div className="flex flex-col gap-1 rounded-2xl border border-white/[0.04] bg-[#0a0a0a]/30 p-2 backdrop-blur-md">

<a className="group flex items-center justify-between rounded-xl p-3 hover:bg-white/[0.03] transition-colors" href="#">
<div className="flex items-center gap-3">
<span className="w-4 text-center text-sm font-medium text-indigo-400">1</span>
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 text-orange-400">
<iconify-icon className="text-lg" icon="solar:fire-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium tracking-tight text-zinc-200 group-hover:text-white transition-colors">Genshin Impact</span>
<span className="text-xs font-light text-zinc-500">Action • 384 MB</span>
</div>
</div>
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.03] text-zinc-400 group-hover:bg-zinc-100 group-hover:text-zinc-900 transition-all duration-300">
<iconify-icon icon="solar:download-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</a>

<a className="group flex items-center justify-between rounded-xl p-3 hover:bg-white/[0.03] transition-colors" href="#">
<div className="flex items-center gap-3">
<span className="w-4 text-center text-sm font-medium text-emerald-400">2</span>
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 text-emerald-400">
<iconify-icon className="text-lg" icon="solar:target-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium tracking-tight text-zinc-200 group-hover:text-white transition-colors">PUBG MOBILE</span>
<span className="text-xs font-light text-zinc-500">Shooter • 855 MB</span>
</div>
</div>
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.03] text-zinc-400 group-hover:bg-zinc-100 group-hover:text-zinc-900 transition-all duration-300">
<iconify-icon icon="solar:download-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</a>

<a className="group flex items-center justify-between rounded-xl p-3 hover:bg-white/[0.03] transition-colors" href="#">
<div className="flex items-center gap-3">
<span className="w-4 text-center text-sm font-medium text-blue-400">3</span>
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 text-blue-400">
<iconify-icon className="text-lg" icon="solar:ghost-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium tracking-tight text-zinc-200 group-hover:text-white transition-colors">Clash of Clans</span>
<span className="text-xs font-light text-zinc-500">Strategy • 244 MB</span>
</div>
</div>
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.03] text-zinc-400 group-hover:bg-zinc-100 group-hover:text-zinc-900 transition-all duration-300">
<iconify-icon icon="solar:download-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</a>

<a className="group flex items-center justify-between rounded-xl p-3 hover:bg-white/[0.03] transition-colors" href="#">
<div className="flex items-center gap-3">
<span className="w-4 text-center text-sm font-medium text-zinc-500">4</span>
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-purple-400">
<iconify-icon className="text-lg" icon="solar:gamepad-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium tracking-tight text-zinc-200 group-hover:text-white transition-colors">Roblox</span>
<span className="text-xs font-light text-zinc-500">Adventure • 160 MB</span>
</div>
</div>
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.03] text-zinc-400 group-hover:bg-zinc-100 group-hover:text-zinc-900 transition-all duration-300">
<iconify-icon icon="solar:download-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</a>

<a className="group flex items-center justify-between rounded-xl p-3 hover:bg-white/[0.03] transition-colors" href="#">
<div className="flex items-center gap-3">
<span className="w-4 text-center text-sm font-medium text-zinc-500">5</span>
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 text-yellow-400">
<iconify-icon className="text-lg" icon="solar:crown-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium tracking-tight text-zinc-200 group-hover:text-white transition-colors">Stumble Guys</span>
<span className="text-xs font-light text-zinc-500">Action • 140 MB</span>
</div>
</div>
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.03] text-zinc-400 group-hover:bg-zinc-100 group-hover:text-zinc-900 transition-all duration-300">
<iconify-icon icon="solar:download-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</a>
</div>
</div>
</div>

<div className="mt-20 relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-zinc-900/40 p-10 sm:p-16 text-center shadow-2xl backdrop-blur-sm group">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-indigo-500/20 blur-[80px] group-hover:bg-indigo-500/30 transition-colors duration-700"></div>
<div className="relative z-10 mx-auto max-w-2xl flex flex-col items-center">
<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/[0.03] border border-white/[0.1] shadow-inner">
<iconify-icon className="text-3xl text-zinc-100" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-zinc-100 mb-4">Verified &amp; Secure APKs</h2>
<p className="text-sm sm:text-base font-light text-zinc-400 mb-8 leading-relaxed">
                    Every package uploaded to our servers is rigorously scanned using multiple enterprise-grade antivirus engines. We guarantee zero malware, adware, or malicious code.
                </p>
<button className="inline-flex h-11 items-center justify-center rounded-lg bg-zinc-100 px-6 text-sm font-medium text-zinc-900 transition-transform hover:scale-105 active:scale-95">
                    Read Security Policy
                </button>
</div>
</div>
</main>

<footer className="border-t border-white/[0.04] bg-[#050505] pt-16 pb-8">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="flex h-6 w-6 items-center justify-center rounded bg-white/[0.05] border border-white/[0.1]">
<iconify-icon className="text-zinc-400 text-xs" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-tighter text-zinc-300">V A U L T</span>
</a>
<p className="text-xs font-light text-zinc-500 max-w-xs leading-relaxed">
                        The premier destination for downloading high-quality, verified application packages. Built for enthusiasts, by enthusiasts.
                    </p>
</div>
<div>
<h4 className="text-xs font-medium text-zinc-100 mb-4 tracking-tight">Discover</h4>
<ul className="flex flex-col gap-2.5">
<li><a className="text-xs font-light text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Android Apps</a></li>
<li><a className="text-xs font-light text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Android Games</a></li>
<li><a className="text-xs font-light text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Editors' Choice</a></li>
<li><a className="text-xs font-light text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Archived Versions</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-zinc-100 mb-4 tracking-tight">Resources</h4>
<ul className="flex flex-col gap-2.5">
<li><a className="text-xs font-light text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Documentation</a></li>
<li><a className="text-xs font-light text-zinc-500 hover:text-zinc-300 transition-colors" href="#">API Access</a></li>
<li><a className="text-xs font-light text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Community Forum</a></li>
<li><a className="text-xs font-light text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Submit Package</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-zinc-100 mb-4 tracking-tight">Legal</h4>
<ul className="flex flex-col gap-2.5">
<li><a className="text-xs font-light text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-xs font-light text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-xs font-light text-zinc-500 hover:text-zinc-300 transition-colors" href="#">DMCA</a></li>
</ul>
</div>
</div>
<div className="mt-16 flex flex-col items-center justify-between border-t border-white/[0.04] pt-8 sm:flex-row gap-4">
<p className="text-[11px] font-light text-zinc-600">© 2024 Vault Inc. All rights reserved.</p>
<div className="flex items-center gap-4 text-zinc-500">
<a className="hover:text-zinc-300 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:global-linear"></iconify-icon></a>
<a className="hover:text-zinc-300 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:shield-user-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
