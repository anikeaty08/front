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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
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
      

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference pl-[90px]">
<a className="text-sm font-medium tracking-tight uppercase group text-white" href="index.html">
            AH<span className="inline-block w-1 h-1 bg-white rounded-full ml-0.5 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</a>
<div className="hidden md:flex gap-8 text-xs font-medium tracking-wide uppercase text-neutral-400">
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
</nav>
<main className="w-full">

<section className="min-h-screen flex flex-col justify-end px-6 md:px-12 pb-16 pt-32 relative overflow-hidden bg-[#080808]">
<div className="film-strip-container hidden md:block">
<div className="film-track">
<div className="sprocket-hole"></div><div className="sprocket-hole"></div><div className="sprocket-hole"></div>
<div className="sprocket-hole"></div><div className="sprocket-hole"></div><div className="sprocket-hole"></div>
<div className="sprocket-hole"></div><div className="sprocket-hole"></div><div className="sprocket-hole"></div>
<div className="sprocket-hole"></div><div className="sprocket-hole"></div><div className="sprocket-hole"></div>
<div className="sprocket-hole"></div><div className="sprocket-hole"></div><div className="sprocket-hole"></div>
<div className="sprocket-hole"></div><div className="sprocket-hole"></div><div className="sprocket-hole"></div>
<div className="sprocket-hole"></div><div className="sprocket-hole"></div><div className="sprocket-hole"></div>
<div className="sprocket-hole"></div><div className="sprocket-hole"></div><div className="sprocket-hole"></div>
<div className="sprocket-hole"></div><div className="sprocket-hole"></div><div className="sprocket-hole"></div>
<div className="sprocket-hole"></div><div className="sprocket-hole"></div><div className="sprocket-hole"></div>
<div className="sprocket-hole"></div><div className="sprocket-hole"></div><div className="sprocket-hole"></div>
<div className="sprocket-hole"></div><div className="sprocket-hole"></div><div className="sprocket-hole"></div>
</div>
</div>
<div className="hero-grain"></div>
<div className="absolute inset-0 vintage-overlay pointer-events-none z-10"></div>
<div className="w-full max-w-7xl mx-auto z-20 md:pl-16 relative">
<div className="space-y-[-0.5rem] md:space-y-[-1.5rem] mb-12">
<h1 className="reveal-up text-7xl md:text-9xl font-medium tracking-tighter leading-none text-white rgb-text mix-blend-screen">
                        ALEXANDRE
                    </h1>
<h1 className="reveal-up delay-200 text-7xl md:text-9xl font-medium tracking-tighter leading-none text-neutral-600 rgb-text opacity-80 mix-blend-screen">
                        HUBNER
                    </h1>
</div>
<div className="w-full h-px bg-neutral-800/60 mb-8 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] animate-[shimmer_3s_infinite_linear]"></div>
</div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-end reveal-up delay-400">
<div className="max-w-md relative">
<div className="absolute -left-4 -top-4 w-24 h-24 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute -right-4 -bottom-4 w-24 h-24 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-75"></div>
<p className="relative text-sm md:text-base font-normal text-neutral-300 uppercase tracking-wide leading-relaxed">
                            Creative &amp; Content Strategist
                        </p>
</div>
<div className="mt-6 md:mt-0 flex items-center gap-6 text-xs font-medium text-neutral-500 uppercase tracking-widest">
<div className="flex items-center gap-2">
<i className="w-3 h-3 text-neutral-400" data-lucide="map-pin"></i>
                            Brazil
                        </div>
<div className="flex items-center gap-2">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
                            Available
                        </div>
</div>
</div>
</div>
</section>

<section className="w-full px-6 md:px-12 py-24 bg-neutral-900/20 border-t border-neutral-900" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-4 reveal-up">
<div className="aspect-[3/4] w-full relative overflow-hidden bg-neutral-800 grayscale hover:grayscale-0 transition-all duration-700 ease-out group">
<img alt="Portrait" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://mgaaziiiniynhqabxeuc.supabase.co/storage/v1/object/sign/Portifolio/01_FOTO_HOME.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kZWMzZGViMy0yZDY4LTRiMWYtODM5NS01YTI5M2RkMGUxMWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQb3J0aWZvbGlvLzAxX0ZPVE9fSE9NRS5qcGVnIiwiaWF0IjoxNzY2NzY0MjA0LCJleHAiOjIwODIxMjQyMDR9.-pyJssiw3VUKR63aFXD6sF2lr8rKJP6NDH0ayrWu6GY"/>
<div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,3px_100%] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
</div>
<div className="lg:col-span-8 flex flex-col h-full reveal-up delay-200">
<div className="mb-12">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter leading-tight text-white mb-6">
                            I plan, direct, create, write,<br className="hidden md:block"/> and produce.
                        </h2>
<p className="text-neutral-400 text-lg font-normal leading-relaxed max-w-2xl">
                            Campaigns, content, events, cases, institutional videos, commercials, films, web series, and activations for brands.
                        </p>
</div>
<div className="w-full aspect-video bg-neutral-900 relative overflow-hidden group mt-auto">
<iframe allow="autoplay; fullscreen" className="absolute inset-0 w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0" frameborder="0" src="https://player.vimeo.com/video/1146389015?background=1&amp;autoplay=1&amp;loop=1&amp;byline=0&amp;title=0&amp;muted=1"></iframe>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
<i className="w-4 h-4 text-white fill-white ml-0.5" data-lucide="play"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-12 py-32 border-t border-neutral-900" id="work">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-16">
<div>
<h3 className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-2">Projects</h3>
<p className="text-2xl text-white font-normal tracking-tight">Get to Know my Work</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">

<a className="group block" href="nfl-born-to-play.html">
<div className="aspect-video bg-neutral-900 overflow-hidden relative mb-4">
<img alt="NFL Born to Play" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://mgaaziiiniynhqabxeuc.supabase.co/storage/v1/object/sign/NFL%20BORN%20TO%20PLAY/00%20NFL%20BORN%20TO%20PLAY%20ALEXANDRE%20HUBNER.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kZWMzZGViMy0yZDY4LTRiMWYtODM5NS01YTI5M2RkMGUxMWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJORkwgQk9STiBUTyBQTEFZLzAwIE5GTCBCT1JOIFRPIFBMQVkgQUxFWEFORFJFIEhVQk5FUi5qcGciLCJpYXQiOjE3NjU3NDUzODIsImV4cCI6MjA4MTEwNTM4Mn0.e6TgyNULkzgcHyGJyIM2xYgk3vb4cbibX9G-VNXejKs"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<h4 className="text-xl font-medium tracking-tight text-white group-hover:text-neutral-300 transition-colors">NFL - Born to Play</h4>
<span className="text-[10px] uppercase tracking-wider border border-neutral-800 px-2 py-0.5 text-neutral-500">2024</span>
</div>
</a>

<div className="group cursor-pointer">
<div className="aspect-video bg-neutral-900 overflow-hidden relative mb-4">
<img alt="NFL Brand Refresh" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://mgaaziiiniynhqabxeuc.supabase.co/storage/v1/object/sign/NFL%20BRAND%20REFRESH/14%20NFL%20BR%20BRAND%20REFRESH%20ALEXANDRE%20HUBNER.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kZWMzZGViMy0yZDY4LTRiMWYtODM5NS01YTI5M2RkMGUxMWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJORkwgQlJBTkQgUkVGUkVTSC8xNCBORkwgQlIgQlJBTkQgUkVGUkVTSCBBTEVYQU5EUkUgSFVCTkVSLnBuZyIsImlhdCI6MTc2NTc0MDAwNSwiZXhwIjoyMDgxMTAwMDA1fQ.JjcWYPrlTEQ1m-PQSnPdFf5iZkJgdlmZ9Q4Qa1JOr2g"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<h4 className="text-xl font-medium tracking-tight text-white group-hover:text-neutral-300 transition-colors">NFL - Brand Refresh</h4>
<span className="text-[10px] uppercase tracking-wider border border-neutral-800 px-2 py-0.5 text-neutral-500">Design</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-video bg-neutral-900 overflow-hidden relative mb-4">
<img alt="Sofascore" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://mgaaziiiniynhqabxeuc.supabase.co/storage/v1/object/sign/SOFASCORE/HEADER%20SOFASCORE.avif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kZWMzZGViMy0yZDY4LTRiMWYtODM5NS01YTI5M2RkMGUxMWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTT0ZBU0NPUkUvSEVBREVSIFNPRkFTQ09SRS5hdmlmIiwiaWF0IjoxNzY1NDExMjE2LCJleHAiOjIwODA3NzEyMTZ9.hUGpt265P1g8tRFQy-0NQ4Zz0Ak53SbpJCPdhhHHgaU"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<h4 className="text-xl font-medium tracking-tight text-white group-hover:text-neutral-300 transition-colors">SOFASCORE - Cada Jogo Importa</h4>
<span className="text-[10px] uppercase tracking-wider border border-neutral-800 px-2 py-0.5 text-neutral-500">Campaign</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-video bg-neutral-900 overflow-hidden relative mb-4">
<img alt="Gatorade" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://mgaaziiiniynhqabxeuc.supabase.co/storage/v1/object/sign/INVASAO%20GATORADE/INVASAO%20GATORADE%20ALEXANDRE%20HUBNER%2001.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kZWMzZGViMy0yZDY4LTRiMWYtODM5NS01YTI5M2RkMGUxMWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJJTlZBU0FPIEdBVE9SQURFL0lOVkFTQU8gR0FUT1JBREUgQUxFWEFORFJFIEhVQk5FUiAwMS53ZWJwIiwiaWF0IjoxNzY1NDEzNDg5LCJleHAiOjIwODA3NzM0ODl9.k8Wa0ls1_BhHaso81dk3yP7v2GRBAVULNxj_uBTOjTc"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<h4 className="text-xl font-medium tracking-tight text-white group-hover:text-neutral-300 transition-colors">GATORADE - Invasão Gatorade</h4>
<span className="text-[10px] uppercase tracking-wider border border-neutral-800 px-2 py-0.5 text-neutral-500">Activation</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-video bg-neutral-900 overflow-hidden relative mb-4">
<img alt="Stanley Messi" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://mgaaziiiniynhqabxeuc.supabase.co/storage/v1/object/sign/STANLEY%20MESSI%20STRIKER%20BLUE/01%20STANLEY%20MESSI%20HEADER.avif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kZWMzZGViMy0yZDY4LTRiMWYtODM5NS01YTI5M2RkMGUxMWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTVEFOTEVZIE1FU1NJIFNUUklLRVIgQkxVRS8wMSBTVEFOTEVZIE1FU1NJIEhFQURFUi5hdmlmIiwiaWF0IjoxNzY1NDE2MzYzLCJleHAiOjIwODA3NzYzNjN9.Ow4eDxm2uIyE1zum5I22zRTrLl7eRRs4zheQI6utq7k"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<h4 className="text-xl font-medium tracking-tight text-white group-hover:text-neutral-300 transition-colors">STANLEY - Messi Striker Blue</h4>
<span className="text-[10px] uppercase tracking-wider border border-neutral-800 px-2 py-0.5 text-neutral-500">Product</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-video bg-neutral-900 overflow-hidden relative mb-4">
<img alt="Chiefs House" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://mgaaziiiniynhqabxeuc.supabase.co/storage/v1/object/sign/KANSAS%20CITY%20CHIEFS/01_KANSAS%20CITY%20CHIEFS%20HOUSE_ALEXANDRE_HUBNER.avif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kZWMzZGViMy0yZDY4LTRiMWYtODM5NS01YTI5M2RkMGUxMWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJLQU5TQVMgQ0lUWSBDSElFRlMvMDFfS0FOU0FTIENJVFkgQ0hJRUZTIEhPVVNFX0FMRVhBTkRSRV9IVUJORVIuYXZpZiIsImlhdCI6MTc2NTY0NTAyNSwiZXhwIjoyMDgxMDA1MDI1fQ.lSyO3LlLU7lJLUfx6x4zqTHWmieEws3BFAc1s17XBsM"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<h4 className="text-xl font-medium tracking-tight text-white group-hover:text-neutral-300 transition-colors">KANSAS CITY CHIEFS - Chiefs House</h4>
<span className="text-[10px] uppercase tracking-wider border border-neutral-800 px-2 py-0.5 text-neutral-500">Event</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-video bg-neutral-900 overflow-hidden relative mb-4">
<img alt="NFL SP Game" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://mgaaziiiniynhqabxeuc.supabase.co/storage/v1/object/sign/NFL%20SP%20GAME/01%20NFL%20SAO%20PAULO%20GAME%20ALEXANDRE%20HUBNER.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kZWMzZGViMy0yZDY4LTRiMWYtODM5NS01YTI5M2RkMGUxMWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJORkwgU1AgR0FNRS8wMSBORkwgU0FPIFBBVUxPIEdBTUUgQUxFWEFORFJFIEhVQk5FUi5qcGVnIiwiaWF0IjoxNzY1NzQzMjk1LCJleHAiOjIwODExMDMyOTV9.WdDnDqce6PNQCY8fz7ZXoK7IcP9YRRV0XCukPWp6ZaQ"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<h4 className="text-xl font-medium tracking-tight text-white group-hover:text-neutral-300 transition-colors">NFL - São Paulo Game 2025</h4>
<span className="text-[10px] uppercase tracking-wider border border-neutral-800 px-2 py-0.5 text-neutral-500">Live</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-video bg-neutral-900 overflow-hidden relative mb-4">
<img alt="WSL" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://mgaaziiiniynhqabxeuc.supabase.co/storage/v1/object/sign/WSL/ARTE_WSL_DecadaDeOuro_AtletasCoroas_%20(1).jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kZWMzZGViMy0yZDY4LTRiMWYtODM5NS01YTI5M2RkMGUxMWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXU0wvQVJURV9XU0xfRGVjYWRhRGVPdXJvX0F0bGV0YXNDb3JvYXNfICgxKS5qcGciLCJpYXQiOjE3NjUzMjQ5NzcsImV4cCI6MjA4MDY4NDk3N30.zieLBopCPBDKfFrhyygi9daP5veCNlN5n7c-1hwL4t4"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<h4 className="text-xl font-medium tracking-tight text-white group-hover:text-neutral-300 transition-colors">WSL - Década de Ouro</h4>
<span className="text-[10px] uppercase tracking-wider border border-neutral-800 px-2 py-0.5 text-neutral-500">Content</span>
</div>
</div>
</div>
<div className="mt-20 flex justify-center">
<a className="text-xs font-medium text-white uppercase tracking-widest border-b border-white/20 hover:border-white pb-1 transition-all hover:tracking-[0.2em] duration-300" href="projects.html">Load More</a>
</div>
</div>
</section>

<footer className="px-6 md:px-12 py-24 border-t border-neutral-900 bg-neutral-900/10" id="contact">
<div className="max-w-7xl mx-auto flex flex-col items-center text-center">
<h2 className="text-4xl md:text-8xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600 mb-12 hover:to-white transition-all duration-500 cursor-pointer">
<a href="https://wa.me/5521996113843" target="_blank">LET'S TALK</a>
</h2>
<div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center text-[10px] font-medium uppercase tracking-widest text-neutral-500">
<a className="hover:text-white transition-colors flex items-center gap-2" href="https://www.linkedin.com/in/alexandre-hubner/" target="_blank">
<i className="w-3 h-3" data-lucide="linkedin"></i> LinkedIn
                    </a>
<a className="hover:text-white transition-colors flex items-center gap-2" href="https://www.instagram.com/alexandrehubner/" target="_blank">
<i className="w-3 h-3" data-lucide="instagram"></i> Instagram
                    </a>
<span className="text-neutral-700 hidden md:block">|</span>
<p>Designed &amp; Built in 2024</p>
</div>
</div>
</footer>
</main>


    </>
  );
}
