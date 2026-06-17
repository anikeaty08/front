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



tailwind.config = {
theme: {
extend: {
colors: {
primary: { 50: '#F3F2FF', 100: '#E9E7FF', 200: '#D5D2FF', 300: '#B5B0FF', 400: '#9B94FF', 500: '#6C63FF', 600: '#5A52E0', 700: '#4740C2' },
appBg: '#F5F4FF',
cardBg: '#FFFFFF',
borderCol: '#E4E4EA',
textPri: '#252535',
textSec: '#7B7B91',
gold: { DEFAULT: '#EAB308', bg: '#FEF9C3', border: '#FDE68A', text: '#713F12' },
success: { DEFAULT: '#16A34A', bg: '#F0FDF4' },
danger: { DEFAULT: '#DC2626', bg: '#FEF2F2' },
streak: { DEFAULT: '#EA580C', bg: '#FFF7ED' },
warning: { DEFAULT: '#D97706', bg: '#FFFBEB' },
sci: { DEFAULT: '#DB2777', bg: '#FDF2F8' },
tech: { DEFAULT: '#6C63FF', bg: '#F3F2FF' },
eng: { DEFAULT: '#EA580C', bg: '#FFF7ED' },
math: { DEFAULT: '#059669', bg: '#ECFDF5' },
darkBg: '#131320'
},
fontFamily: {
sans: ['Outfit', 'sans-serif'],
display: ['Outfit', 'sans-serif'],
},
boxShadow: {
'sm-purp': '0 1px 4px rgba(108,99,255,0.06), 0 2px 8px rgba(108,99,255,0.04)',
'md-purp': '0 2px 8px rgba(108,99,255,0.07), 0 4px 16px rgba(108,99,255,0.05)',
'lg-purp': '0 4px 16px rgba(108,99,255,0.09), 0 8px 32px rgba(108,99,255,0.06)',
}
}
}
}



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
      
<div className="w-full max-w-[1400px]">
<h1 className="text-3xl font-semibold tracking-tight mb-2">Chitti Super</h1>
<p className="text-base text-slate-400 mb-8 font-normal">Scroll horizontally to view all screens. Designed for iPhone 14 Pro (390x844).</p>
</div>
<div className="flex gap-12 w-full max-w-[1400px] overflow-x-auto pb-12 no-scrollbar items-start">



<div className="relative w-[390px] h-[844px] bg-appBg rounded-[40px] shadow-2xl border-[8px] border-slate-800 overflow-hidden shrink-0 text-textPri">
<div className="h-full overflow-y-auto no-scrollbar pb-32">

<div className="sticky top-0 z-40 bg-cardBg/95 backdrop-blur-md rounded-b-[20px] shadow-sm-purp px-4 py-3 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-primary-100 flex items-center justify-center text-lg shadow-inner">🦊</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight">Hi Arjun! 👋</span>
<span className="text-xs text-textSec font-normal">Level 4 · Super Learner</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="bg-gold-bg border border-gold-border rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-sm min-touch">
<span className="text-sm">🪙</span>
<span className="text-sm font-semibold text-gold-text">450</span>
</div>
<button className="w-10 h-10 rounded-full bg-appBg flex items-center justify-center text-primary-500 hover:bg-primary-50 transition-colors">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="p-4 space-y-5">

<div className="bg-gradient-to-r from-streak to-[#FB923C] rounded-[20px] p-4 flex justify-between items-center shadow-md-purp">
<div className="flex items-center gap-3">
<div className="text-2xl animate-flame">🔥</div>
<span className="text-base font-semibold text-white tracking-tight">7 Day Streak!<br/><span className="text-xs font-normal opacity-90">Keep going!</span></span>
</div>
<div className="bg-white/25 backdrop-blur-sm rounded-full px-3 py-1 border border-white/20">
<span className="text-xs font-semibold text-white tracking-wide uppercase">Day 7</span>
</div>
</div>

<div className="bg-cardBg rounded-[20px] shadow-md-purp border-l-[3px] border-primary-500 p-4 relative overflow-hidden">
<div className="flex justify-between items-start mb-3">
<span className="text-sm font-semibold tracking-tight">😮 Just 50 coins to Gold Badge! 🥇</span>
</div>
<div className="w-full h-2 bg-appBg rounded-full overflow-hidden mb-2">
<div className="h-full bg-gradient-to-r from-gold to-yellow-300 w-[90%] rounded-full relative">
<div className="absolute inset-0 bg-white/20 w-1/2 skew-x-[-20deg] animate-[translateX_2s_infinite]"></div>
</div>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-textSec font-normal">Just 50 more coins to unlock!</span>
<button className="text-xs font-semibold text-primary-500 flex items-center gap-1 min-touch">
                                Earn now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="bg-cardBg rounded-[20px] shadow-md-purp p-4">
<div className="text-[11px] font-semibold text-textSec uppercase tracking-[1.5px] mb-3 flex items-center gap-1">
<iconify-icon icon="solar:hammer-linear"></iconify-icon> Your Builds
                        </div>
<div className="flex gap-2 mb-4">
<div className="flex-1 bg-appBg rounded-xl p-2 text-center">
<div className="text-lg font-semibold text-textPri">12</div>
<div className="text-[11px] text-textSec font-normal">Submitted</div>
</div>
<div className="flex-1 bg-success-bg rounded-xl p-2 text-center">
<div className="text-lg font-semibold text-success">10</div>
<div className="text-[11px] text-success font-normal">Approved</div>
</div>
<div className="flex-1 bg-warning-bg rounded-xl p-2 text-center">
<div className="text-lg font-semibold text-warning">2</div>
<div className="text-[11px] text-warning font-normal">Pending</div>
</div>
</div>
<div className="w-full h-2 bg-appBg rounded-full overflow-hidden mb-3">
<div className="h-full bg-success w-[83%] rounded-full"></div>
</div>
<div className="bg-primary-50 rounded-xl p-3 flex items-center gap-3 mb-4 border border-primary-100">
<div className="text-xl">🦊</div>
<span className="text-xs font-semibold text-primary-600 leading-tight">You're on fire! 🔥 2 more builds → Build Master Badge! 🏆</span>
</div>
<div className="flex gap-3">
<button className="flex-1 bg-primary-50 text-primary-600 rounded-xl text-xs font-semibold min-touch flex items-center justify-center">View All Builds</button>
<button className="flex-1 bg-primary-500 text-white rounded-xl text-xs font-semibold min-touch flex items-center justify-center gap-1 shadow-sm-purp">New Challenge <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>

<div className="bg-cardBg rounded-[20px] shadow-sm-purp p-4">
<div className="flex justify-between items-center mb-4">
<div className="text-[11px] font-semibold text-textSec uppercase tracking-[1.5px] flex items-center gap-1">
<iconify-icon icon="solar:target-linear"></iconify-icon> Weekly Missions
                            </div>
<button className="text-[11px] font-semibold text-primary-500">View All →</button>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3">
<input checked="" className="custom-check shrink-0 pointer-events-none" type="checkbox"/>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-semibold line-through text-textSec">Login 5 Days</span>
<span className="text-[11px] font-semibold text-gold-text bg-gold-bg px-2 py-0.5 rounded-full">+10</span>
</div>
<div className="w-full h-1.5 bg-appBg rounded-full"><div className="h-full bg-success w-full rounded-full"></div></div>
</div>
</div>
<div className="flex items-center gap-3">
<input className="custom-check shrink-0 pointer-events-none" type="checkbox"/>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-semibold text-textPri">Watch 5 Shorts <span className="text-textSec font-normal">(3/5)</span></span>
<span className="text-[11px] font-semibold text-gold-text bg-gold-bg px-2 py-0.5 rounded-full">+20</span>
</div>
<div className="w-full h-1.5 bg-appBg rounded-full"><div className="h-full bg-primary-400 w-[60%] rounded-full"></div></div>
</div>
</div>
<div className="flex items-center gap-3">
<input className="custom-check shrink-0 pointer-events-none" type="checkbox"/>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-semibold text-textPri">Submit 1 Build <span className="text-textSec font-normal">(0/1)</span></span>
<span className="text-[11px] font-semibold text-gold-text bg-gold-bg px-2 py-0.5 rounded-full">+50</span>
</div>
<div className="w-full h-1.5 bg-appBg rounded-full"><div className="h-full bg-appBg w-0 rounded-full"></div></div>
</div>
</div>
</div>
</div>

<div className="bg-cardBg rounded-[20px] shadow-sm-purp p-4">
<div className="text-[11px] font-semibold text-textSec uppercase tracking-[1.5px] mb-3 flex items-center gap-1">
<iconify-icon icon="solar:book-linear"></iconify-icon> Continue Learning
                        </div>
<div className="flex gap-3 items-center">
<div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-400 to-sci flex items-center justify-center text-3xl shadow-inner shrink-0 relative overflow-hidden">
<span className="z-10 relative drop-shadow-md text-white">🌱</span>
<div className="absolute inset-0 bg-white/10 blur-[2px] transform scale-150 rotate-45 translate-x-4"></div>
</div>
<div className="flex-1">
<span className="text-[11px] font-semibold text-sci mb-1 block uppercase tracking-wide">Science</span>
<h3 className="text-sm font-semibold tracking-tight leading-tight mb-2">How Plants Make Food</h3>
<div className="w-full h-1.5 bg-appBg rounded-full mb-1"><div className="h-full bg-sci w-[30%] rounded-full"></div></div>
<span className="text-[11px] text-textSec font-normal block mb-2">Lesson 3 of 9</span>
</div>
</div>
<button className="w-full bg-primary-500 text-white rounded-xl text-sm font-semibold min-touch flex items-center justify-center gap-2 mt-2 shadow-sm-purp">
                            Continue Learning <iconify-icon icon="solar:play-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="absolute bottom-6 left-4 right-4 bg-cardBg rounded-[24px] shadow-lg-purp min-h-[64px] flex justify-around items-center px-2 py-2 border border-borderCol/50">
<button className="flex flex-col items-center justify-center w-16 h-[52px] rounded-2xl bg-primary-50 text-primary-600 transition-colors gap-1">
<iconify-icon className="mb-0.5 font-bold" icon="solar:home-linear" width="22"></iconify-icon>
<span className="text-[10px] font-semibold tracking-wide">Home</span>
</button>
<button className="flex flex-col items-center justify-center w-16 h-[52px] rounded-2xl text-textSec hover:text-primary-500 transition-colors gap-1">
<iconify-icon className="mb-0.5" icon="solar:book-linear" width="22"></iconify-icon>
<span className="text-[10px] font-normal tracking-wide">Courses</span>
</button>
<button className="flex flex-col items-center justify-center w-16 h-[52px] rounded-2xl text-textSec hover:text-primary-500 transition-colors gap-1">
<iconify-icon className="mb-0.5" icon="solar:play-stream-linear" width="22"></iconify-icon>
<span className="text-[10px] font-normal tracking-wide">Shorts</span>
</button>
<button className="flex flex-col items-center justify-center w-16 h-[52px] rounded-2xl text-textSec hover:text-primary-500 transition-colors gap-1">
<iconify-icon className="mb-0.5" icon="solar:user-circle-linear" width="22"></iconify-icon>
<span className="text-[10px] font-normal tracking-wide">Me</span>
</button>
</div>
</div>



<div className="relative w-[390px] h-[844px] bg-darkBg rounded-[40px] shadow-2xl border-[8px] border-slate-800 overflow-hidden shrink-0">

<div className="absolute inset-0 bg-gradient-to-b from-[#7C2D12] to-eng flex items-center justify-center overflow-hidden">

<div className="absolute w-64 h-64 bg-white/5 rounded-full blur-3xl -top-10 -left-10"></div>
<div className="absolute w-80 h-80 bg-black/10 rounded-full blur-3xl bottom-20 -right-20"></div>
<div className="text-8xl drop-shadow-2xl animate-bounce-star opacity-90">🌉</div>
</div>

<div className="absolute top-12 left-4 right-4 flex justify-between items-center z-10">
<div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5 flex items-center gap-1.5">
<span className="text-sm">⚙️</span>
<span className="text-xs font-semibold text-white tracking-wide">Engineering</span>
</div>
<div className="flex gap-2 items-center">
<div className="bg-white/90 text-textPri rounded-full px-2 py-1 text-[10px] font-semibold tracking-widest uppercase">✨ New</div>
<div className="bg-gold-bg border border-gold-border rounded-full px-3 py-1.5 flex items-center gap-1 shadow-sm">
<span className="text-sm">🪙</span>
<span className="text-xs font-semibold text-gold-text">+10</span>
</div>
</div>
</div>

<div className="absolute right-4 bottom-32 flex flex-col gap-6 items-center z-10">
<div className="w-12 h-12 rounded-full border-2 border-white/80 bg-white/20 backdrop-blur-sm overflow-hidden mb-2">
<img alt="Creator" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Teacher"/>
</div>
<button className="flex flex-col items-center gap-1 text-white hover:scale-110 transition-transform">
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-red-400">
<iconify-icon icon="solar:heart-bold" width="24"></iconify-icon>
</div>
<span className="text-[11px] font-semibold">234</span>
</button>
<button className="flex flex-col items-center gap-1 text-white hover:scale-110 transition-transform">
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
<iconify-icon icon="solar:chat-round-dots-linear" width="24"></iconify-icon>
</div>
<span className="text-[11px] font-semibold">12</span>
</button>
<button className="flex flex-col items-center gap-1 text-white hover:scale-110 transition-transform">
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
<iconify-icon icon="solar:forward-linear" width="24"></iconify-icon>
</div>
<span className="text-[11px] font-semibold">Share</span>
</button>
</div>

<div className="absolute bottom-0 left-0 right-0 pt-20 pb-[100px] px-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-0 pointer-events-none">
<h2 className="text-base font-semibold text-white tracking-tight drop-shadow-md mb-1 pointer-events-auto">Build a Paper Bridge! 🌉</h2>
<div className="flex items-center gap-3 text-xs text-white/70 font-normal pointer-events-auto">
<span className="bg-white/20 px-2 py-0.5 rounded text-[10px]">Challenge</span>
<span>2:30</span>
</div>
</div>

<div className="absolute bottom-[90px] left-0 right-0 h-[2px] bg-white/20 z-10">
<div className="h-full bg-white w-[40%] rounded-r-full relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_4px_rgba(255,255,255,0.8)]"></div>
</div>
</div>

<div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full z-20"></div>

<div className="absolute bottom-6 left-4 right-4 bg-white/10 backdrop-blur-xl border border-white/10 rounded-[24px] shadow-lg min-h-[64px] flex justify-around items-center px-2 py-2 z-50 text-white">
<button className="flex flex-col items-center justify-center w-16 h-[52px] rounded-2xl text-white/60 hover:text-white transition-colors gap-1">
<iconify-icon className="mb-0.5" icon="solar:home-linear" width="22"></iconify-icon>
<span className="text-[10px] font-normal tracking-wide">Home</span>
</button>
<button className="flex flex-col items-center justify-center w-16 h-[52px] rounded-2xl text-white/60 hover:text-white transition-colors gap-1">
<iconify-icon className="mb-0.5" icon="solar:book-linear" width="22"></iconify-icon>
<span className="text-[10px] font-normal tracking-wide">Courses</span>
</button>
<button className="flex flex-col items-center justify-center w-16 h-[52px] rounded-2xl bg-white/20 text-white transition-colors gap-1">
<iconify-icon className="mb-0.5 drop-shadow-sm" icon="solar:play-stream-bold" width="22"></iconify-icon>
<span className="text-[10px] font-semibold tracking-wide">Shorts</span>
</button>
<button className="flex flex-col items-center justify-center w-16 h-[52px] rounded-2xl text-white/60 hover:text-white transition-colors gap-1">
<iconify-icon className="mb-0.5" icon="solar:user-circle-linear" width="22"></iconify-icon>
<span className="text-[10px] font-normal tracking-wide">Me</span>
</button>
</div>
</div>



<div className="relative w-[390px] h-[844px] bg-appBg rounded-[40px] shadow-2xl border-[8px] border-slate-800 overflow-hidden shrink-0 text-textPri">
<div className="h-full overflow-y-auto no-scrollbar pb-24">

<button className="absolute top-12 left-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white z-20 border border-white/20">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>

<div className="h-48 w-full bg-gradient-to-br from-[#9D174D] to-sci relative overflow-hidden flex items-end justify-center pb-6">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')]"></div>

<div className="absolute top-12 right-4 bg-success text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide border border-success/50 shadow-sm">Free</div>
<div className="relative z-10 flex items-center gap-4">
<div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-5xl border border-white/20 shadow-lg">🔬</div>
<div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-4xl border border-white/20 shadow-lg translate-y-4">🦊</div>
<div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl border border-white/20 shadow-lg translate-y-8">🌱</div>
</div>
</div>
<div className="p-4 relative z-10 -mt-4">

<div className="bg-cardBg rounded-[24px] p-5 shadow-sm-purp mb-4 border border-borderCol/40">
<div className="flex items-center gap-2 mb-2">
<span className="bg-sci-bg text-sci px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-widest">Science</span>
</div>
<h1 className="text-xl font-semibold tracking-tight leading-tight mb-2">How Plants Make Food 🌱</h1>
<p className="text-xs text-textSec font-normal mb-4">3 Chapters · 9 Lessons · 1 Final Task</p>
<div className="bg-gold-bg border border-gold-border rounded-xl p-3 flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">🪙</div>
<div>
<div className="text-xs font-semibold text-gold-text">90 coins + 100 bonus</div>
<div className="text-[10px] font-normal text-gold-text/80">190 total available</div>
</div>
</div>
<div className="w-full h-2 bg-appBg rounded-full overflow-hidden mb-2">
<div className="h-full bg-gradient-to-r from-primary-400 to-primary-600 w-[30%] rounded-full"></div>
</div>
<p className="text-[11px] text-textSec font-normal text-right">30% complete · 6 lessons remaining</p>
</div>

<div className="space-y-3">

<div className="bg-primary-50 rounded-[20px] border border-primary-100 overflow-hidden">
<div className="p-4 flex justify-between items-center bg-white/50 cursor-pointer">
<h2 className="text-sm font-semibold text-primary-700">📖 Chapter 1: Photosynthesis</h2>
<iconify-icon className="text-primary-500" icon="solar:alt-arrow-up-linear"></iconify-icon>
</div>
<div className="p-2 space-y-1 bg-primary-50">

<div className="bg-white rounded-xl p-3 flex items-center gap-3 shadow-sm border border-borderCol/30">
<div className="w-6 h-6 rounded-full bg-success flex items-center justify-center text-white text-xs shrink-0"><iconify-icon icon="solar:check-read-linear"></iconify-icon></div>
<div className="flex-1">
<div className="text-sm font-semibold text-textPri line-through opacity-70">What is Photosynthesis?</div>
</div>
<span className="text-xs font-semibold text-gold-text bg-gold-bg px-2 py-0.5 rounded-full">+10</span>
</div>

<div className="bg-white rounded-xl p-3 flex items-center gap-3 shadow-sm border border-borderCol/30">
<div className="w-6 h-6 rounded-full bg-success flex items-center justify-center text-white text-xs shrink-0"><iconify-icon icon="solar:check-read-linear"></iconify-icon></div>
<div className="flex-1">
<div className="text-sm font-semibold text-textPri line-through opacity-70">Sunlight &amp; Chlorophyll</div>
</div>
<span className="text-xs font-semibold text-gold-text bg-gold-bg px-2 py-0.5 rounded-full">+10</span>
</div>

<div className="bg-white rounded-xl p-3 flex items-center gap-3 shadow-md-purp border-[1.5px] border-primary-400 transform scale-[1.02] transition-transform">
<div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-xs shrink-0 animate-pulse"><iconify-icon className="ml-0.5" icon="solar:play-linear"></iconify-icon></div>
<div className="flex-1">
<div className="text-sm font-semibold text-primary-700">Water &amp; CO2</div>
<div className="text-[10px] text-textSec font-normal mt-0.5">Current Lesson</div>
</div>
<span className="text-xs font-semibold text-gold-text bg-gold-bg px-2 py-0.5 rounded-full">+10</span>
</div>
</div>
</div>

<div className="bg-cardBg rounded-[20px] border border-borderCol shadow-sm p-4 flex justify-between items-center cursor-pointer hover:bg-appBg transition-colors">
<h2 className="text-sm font-semibold text-textPri">📖 Chapter 2: Plant Parts</h2>
<iconify-icon className="text-textSec" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>

<div className="bg-cardBg rounded-[20px] border border-borderCol/50 shadow-sm p-4 flex justify-between items-center opacity-60">
<h2 className="text-sm font-semibold text-textPri flex items-center gap-2"><iconify-icon className="text-textSec" icon="solar:lock-password-linear"></iconify-icon> Chapter 3: Food Storage</h2>
<iconify-icon className="text-textSec" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<div className="mt-4 bg-[#FEFCE8] border-[2px] border-[#FDE047] rounded-[20px] p-5 shadow-sm">
<div className="flex items-center gap-2 mb-2">
<span className="text-lg">🛠️</span>
<h3 className="text-sm font-semibold text-[#854D0E] tracking-tight">Final Task</h3>
</div>
<p className="text-xs text-[#A16207] font-normal mb-3 leading-relaxed">Draw a diagram of photosynthesis and upload a photo to show your teacher.</p>
<div className="bg-white/60 rounded-xl p-2.5 flex items-center gap-2 mb-3 border border-[#FEF08A]">
<iconify-icon className="text-[#CA8A04]" icon="solar:lock-keyhole-linear"></iconify-icon>
<span className="text-[11px] font-semibold text-[#CA8A04]">Complete all 9 lessons to unlock</span>
</div>
<div className="flex justify-end">
<span className="text-xs font-semibold text-gold-text bg-gold-bg px-3 py-1 rounded-full shadow-sm border border-gold-border">+100 coins on approval</span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md p-4 pb-6 border-t border-borderCol shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-30">
<button className="w-full bg-primary-500 text-white rounded-[16px] text-base font-semibold min-h-[52px] flex items-center justify-center gap-2 shadow-md-purp hover:-translate-y-0.5 transition-transform">
                    Let's Go: Lesson 3 <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>



<div className="relative w-[390px] h-[844px] bg-appBg rounded-[40px] shadow-2xl border-[8px] border-slate-800 overflow-hidden shrink-0 text-textPri flex flex-col">

<div className="bg-cardBg px-4 py-3 flex justify-between items-center border-b border-borderCol shrink-0 pt-12">
<button className="w-10 h-10 -ml-2 rounded-full flex items-center justify-center text-textPri hover:bg-appBg">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<div className="bg-appBg px-3 py-1 rounded-full text-xs font-semibold text-textSec">3 / 9</div>
<div className="bg-gold-bg border border-gold-border rounded-full px-2 py-1 flex items-center gap-1 shadow-sm">
<span className="text-[11px] font-semibold text-gold-text">+10 🪙</span>
</div>
</div>
<div className="flex-1 overflow-y-auto p-4 flex flex-col">
<div className="mb-4">
<span className="text-[11px] font-semibold text-textSec uppercase tracking-[1.5px] mb-1 block">📖 Chapter 1 · Lesson 3</span>
<h1 className="text-lg font-semibold tracking-tight leading-tight">Water &amp; CO2 in Photosynthesis 💧</h1>
</div>

<div className="bg-gray-200/50 p-1 rounded-2xl flex gap-1 mb-6 shrink-0 border border-gray-200">
<button className="flex-1 bg-primary-500 text-white shadow-sm rounded-xl py-2 text-xs font-semibold flex justify-center items-center gap-1.5 transition-all">
<iconify-icon icon="solar:clapperboard-play-linear"></iconify-icon> Video
                    </button>
<button className="flex-1 text-textSec hover:bg-white/50 rounded-xl py-2 text-xs font-semibold flex justify-center items-center gap-1.5 transition-all">
<iconify-icon icon="solar:brain-linear"></iconify-icon> Quiz
                    </button>
<button className="flex-1 text-textSec hover:bg-white/50 rounded-xl py-2 text-xs font-semibold flex justify-center items-center gap-1.5 transition-all">
<iconify-icon icon="solar:cards-linear"></iconify-icon> Cards
                    </button>
</div>

<div className="bg-[#131320] w-full aspect-video rounded-[20px] relative flex flex-col justify-end overflow-hidden mb-5 shadow-lg shrink-0">

<div className="absolute inset-0 bg-gradient-to-br from-sci to-[#7C2D12] opacity-60"></div>
<div className="absolute inset-0 flex items-center justify-center">
<button className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 hover:scale-110 transition-transform hover:bg-white/30">
<iconify-icon className="ml-1" icon="solar:play-bold" width="32"></iconify-icon>
</button>
</div>

<div className="relative z-10 p-3 bg-gradient-to-t from-black/80 to-transparent">
<div className="text-white text-xs font-semibold mb-2 shadow-sm drop-shadow-md">Water &amp; CO2 — 3:45</div>
<div className="w-full h-1 bg-white/30 rounded-full">
<div className="h-full bg-primary-400 w-[40%] rounded-full relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full shadow-sm"></div>
</div>
</div>
</div>
</div>

<div className="bg-cardBg rounded-[20px] p-5 shadow-sm border border-borderCol/50 mb-auto">
<h3 className="text-xs font-semibold text-textPri mb-2 flex items-center gap-1.5"><iconify-icon className="text-primary-500" icon="solar:document-text-linear"></iconify-icon> Lesson Notes</h3>
<p className="text-sm text-textSec font-normal leading-relaxed">
                        Plants drink water through their roots. They also "breathe" in Carbon Dioxide (CO2) from the air through tiny holes in their leaves called stomata. Together with sunlight, this makes their food! 🌿
                    </p>
</div>

<button className="w-full mt-6 bg-primary-500 text-white rounded-[16px] text-base font-semibold min-h-[52px] flex items-center justify-center gap-2 shadow-md-purp shrink-0">
                    Next: Quiz 🧠 <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>



<div className="relative w-[390px] h-[844px] bg-appBg rounded-[40px] shadow-2xl border-[8px] border-slate-800 overflow-hidden shrink-0 text-textPri flex flex-col">

<div className="bg-cardBg px-4 py-3 flex justify-between items-center border-b border-borderCol shrink-0 pt-12">
<button className="w-10 h-10 -ml-2 rounded-full flex items-center justify-center text-textPri hover:bg-appBg">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<div className="bg-appBg px-3 py-1 rounded-full text-xs font-semibold text-textSec">3 / 9</div>
<div className="bg-gold-bg border border-gold-border rounded-full px-2 py-1 flex items-center gap-1 shadow-sm">
<span className="text-[11px] font-semibold text-gold-text">+10 🪙</span>
</div>
</div>
<div className="flex-1 overflow-y-auto p-4 flex flex-col">
<div className="mb-4">
<span className="text-[11px] font-semibold text-textSec uppercase tracking-[1.5px] mb-1 block">📖 Chapter 1 · Lesson 3</span>
<h1 className="text-lg font-semibold tracking-tight leading-tight">Water &amp; CO2 in Photosynthesis 💧</h1>
</div>

<div className="bg-gray-200/50 p-1 rounded-2xl flex gap-1 mb-6 shrink-0 border border-gray-200">
<button className="flex-1 text-textSec hover:bg-white/50 rounded-xl py-2 text-xs font-semibold flex justify-center items-center gap-1.5 transition-all">
<iconify-icon className="text-success" icon="solar:check-read-linear"></iconify-icon> Video
                    </button>
<button className="flex-1 bg-primary-500 text-white shadow-sm rounded-xl py-2 text-xs font-semibold flex justify-center items-center gap-1.5 transition-all">
<iconify-icon icon="solar:brain-linear"></iconify-icon> Quiz
                    </button>
<button className="flex-1 text-textSec hover:bg-white/50 rounded-xl py-2 text-xs font-semibold flex justify-center items-center gap-1.5 transition-all">
<iconify-icon icon="solar:cards-linear"></iconify-icon> Cards
                    </button>
</div>

<div className="flex justify-between items-center mb-2">
<span className="text-xs font-semibold text-textPri">Q2 of 3</span>
<span className="text-[11px] font-normal text-textSec">Score: 1/1</span>
</div>
<div className="w-full h-2 bg-gray-200 rounded-full mb-6">
<div className="h-full bg-primary-500 w-[66%] rounded-full transition-all duration-500"></div>
</div>

<h2 className="text-base font-semibold text-gray-900 mb-6 leading-relaxed">What do plants absorb through their tiny leaf holes (stomata)?</h2>

<div className="space-y-3 mb-auto">

<button className="w-full text-left bg-success-bg border-2 border-success rounded-xl p-4 flex items-center gap-3 relative overflow-hidden transition-all shadow-sm">
<div className="w-6 h-6 rounded-full bg-success flex items-center justify-center text-white shrink-0 shadow-sm"><iconify-icon icon="solar:check-read-linear"></iconify-icon></div>
<span className="text-sm font-semibold text-success">Carbon Dioxide (CO2)</span>
<div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-success/10 to-transparent"></div>
</button>

<button className="w-full text-left bg-cardBg border border-borderCol rounded-xl p-4 flex items-center gap-3 hover:bg-appBg transition-colors shadow-sm">
<div className="w-6 h-6 rounded-full border border-borderCol flex items-center justify-center text-textSec shrink-0 text-xs font-semibold">B</div>
<span className="text-sm font-normal text-textPri">Oxygen (O2)</span>
</button>
<button className="w-full text-left bg-cardBg border border-borderCol rounded-xl p-4 flex items-center gap-3 hover:bg-appBg transition-colors shadow-sm">
<div className="w-6 h-6 rounded-full border border-borderCol flex items-center justify-center text-textSec shrink-0 text-xs font-semibold">C</div>
<span className="text-sm font-normal text-textPri">Water (H2O)</span>
</button>
<button className="w-full text-left bg-cardBg border border-borderCol rounded-xl p-4 flex items-center gap-3 hover:bg-appBg transition-colors shadow-sm">
<div className="w-6 h-6 rounded-full border border-borderCol flex items-center justify-center text-textSec shrink-0 text-xs font-semibold">D</div>
<span className="text-sm font-normal text-textPri">Sunlight</span>
</button>
</div>

<div className="bg-success-bg border border-success/30 rounded-xl p-4 mt-6 flex gap-3 shadow-sm">
<div className="text-xl">✅</div>
<div>
<div className="text-sm font-semibold text-success mb-1">Correct!</div>
<div className="text-xs text-success/80 font-normal leading-relaxed">Plants breathe in CO2 to mix with water and sunlight to bake their food!</div>
</div>
</div>

<button className="w-full mt-4 bg-primary-500 text-white rounded-[16px] text-base font-semibold min-h-[52px] flex items-center justify-center gap-2 shadow-md-purp shrink-0">
                    Next Question <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>



<div className="relative w-[390px] h-[844px] bg-appBg rounded-[40px] shadow-2xl border-[8px] border-slate-800 overflow-hidden shrink-0 text-textPri">
<div className="h-full overflow-y-auto no-scrollbar pb-32">

<button className="absolute top-12 left-4 w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white z-20 shadow-sm border border-white/20">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>

<div className="h-52 w-full bg-gradient-to-br from-orange-300 to-eng relative overflow-hidden flex items-center justify-center pt-8">

<div className="absolute top-12 right-4 bg-gold-bg text-gold-text border border-gold-border px-3 py-1 rounded-full text-xs font-semibold tracking-wide shadow-sm flex items-center gap-1">🪙 +100</div>
<div className="absolute top-12 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md border border-white/30 text-white px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide flex items-center gap-1 shadow-sm">⚙️ Engineering</div>

<div className="relative w-full h-full flex flex-col items-center justify-end pb-4">
<div className="text-6xl drop-shadow-xl z-10 -mb-2">🌉</div>
<div className="w-48 h-12 bg-blue-400/30 rounded-[100%] absolute bottom-2 blur-sm"></div>
<div className="flex gap-12 absolute bottom-6 z-0">
<div className="text-3xl opacity-80">📄</div>
<div className="text-3xl opacity-80">📄</div>
</div>
</div>
</div>
<div className="p-4 relative z-10 -mt-6">

<div className="bg-cardBg rounded-[24px] p-5 shadow-md-purp mb-5 border border-borderCol/40">
<div className="flex items-center gap-2 mb-2">
<span className="bg-warning-bg text-warning px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-widest flex items-center gap-1"><iconify-icon icon="solar:bolt-linear"></iconify-icon> Medium</span>
</div>
<h1 className="text-xl font-semibold tracking-tight leading-tight mb-3">Build a Paper Bridge! 🌉</h1>
<p className="text-sm text-textSec font-normal mb-4 leading-relaxed">Can you build a bridge using only paper and tape that can hold a coin? Watch the video, then try it yourself!</p>
<div className="bg-blue-50 border border-blue-100 rounded-xl p-3 flex items-start gap-3">
<div className="text-lg">📋</div>
<div>
<div className="text-xs font-semibold text-blue-900 mb-0.5">You'll need:</div>
<div className="text-xs font-normal text-blue-800/80">Paper, Tape, Scissors, 1 coin for testing</div>
</div>
</div>
</div>

<div className="bg-darkBg rounded-[20px] p-2 mb-5 shadow-lg flex flex-col h-[160px] relative overflow-hidden group cursor-pointer border border-slate-700">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&amp;fit=crop&amp;q=80&amp;w=600')] bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform shadow-lg">
<iconify-icon className="ml-1" icon="solar:play-bold" width="28"></iconify-icon>
</div>
</div>
<div className="mt-auto relative z-10 p-2">
<div className="flex items-center gap-2">
<span className="bg-primary-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded uppercase tracking-wider shadow-sm">Tutorial</span>
<span className="text-white text-xs font-semibold drop-shadow-md">Watch Build Video — 4:20</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md p-4 pb-8 border-t border-borderCol shadow-[0_-10px_30px_rgba(108,99,255,0.08)] z-30 flex flex-col gap-3 rounded-t-[24px]">
<div className="bg-gold-bg border border-gold-border rounded-xl p-3 flex items-center justify-center gap-2 shadow-sm text-center">
<span className="text-sm">🪙</span>
<span className="text-xs font-semibold text-gold-text">Build approved = +100 coins!</span>
</div>
<button className="w-full bg-primary-500 text-white rounded-[16px] text-lg font-semibold min-h-[56px] flex items-center justify-center gap-2 shadow-lg-purp hover:-translate-y-0.5 transition-transform">
                    📸 Start My Build!
                </button>
<button className="w-full bg-transparent text-primary-600 rounded-[16px] text-sm font-semibold min-h-[44px] flex items-center justify-center border-2 border-primary-100 hover:bg-primary-50 transition-colors">
                    Watch Video First <iconify-icon icon="solar:play-linear" width="18"></iconify-icon>
</button>
</div>
</div>



<div className="relative w-[390px] h-[844px] bg-appBg rounded-[40px] shadow-2xl border-[8px] border-slate-800 overflow-hidden shrink-0 text-textPri">
<div className="h-full overflow-y-auto no-scrollbar pb-24">

<div className="h-36 bg-gradient-to-r from-primary-600 to-primary-400 rounded-b-[32px] relative shadow-md-purp">
<button className="absolute top-12 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/20">
<iconify-icon icon="solar:pen-linear" width="16"></iconify-icon>
</button>
<div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center w-full">
<div className="w-20 h-20 rounded-full bg-white p-1 shadow-lg mb-2 relative">
<div className="w-full h-full rounded-full bg-primary-100 flex items-center justify-center text-4xl overflow-hidden border border-borderCol/50">🦊</div>
<div className="absolute bottom-0 right-0 bg-white rounded-full p-0.5 shadow-sm border border-borderCol/30">
<div className="bg-gold-text w-5 h-5 rounded-full flex items-center justify-center text-[10px] text-white font-bold">5</div>
</div>
</div>
<h1 className="text-lg font-semibold text-textPri tracking-tight">Arjun K.</h1>
<p className="text-xs text-textSec font-normal mt-0.5 bg-white/80 px-3 py-0.5 rounded-full border border-borderCol/50 shadow-sm backdrop-blur-sm">⭐ Super Learner · Pro</p>
</div>
</div>
<div className="mt-16 p-4 space-y-4">

<div className="grid grid-cols-3 gap-3">
<div className="bg-cardBg rounded-2xl p-3 flex flex-col items-center justify-center shadow-sm-purp border border-borderCol/40 gap-1 hover:-translate-y-1 transition-transform cursor-default">
<div className="text-xl mb-1">🪙</div>
<div className="text-base font-semibold text-textPri tracking-tight">1,240</div>
<div className="text-[10px] text-textSec font-normal uppercase tracking-wide">Coins</div>
</div>
<div className="bg-cardBg rounded-2xl p-3 flex flex-col items-center justify-center shadow-sm-purp border border-borderCol/40 gap-1 hover:-translate-y-1 transition-transform cursor-default">
<div className="text-xl mb-1">📚</div>
<div className="text-base font-semibold text-textPri tracking-tight">5</div>
<div className="text-[10px] text-textSec font-normal uppercase tracking-wide">Courses</div>
</div>
<div className="bg-cardBg rounded-2xl p-3 flex flex-col items-center justify-center shadow-sm-purp border border-borderCol/40 gap-1 hover:-translate-y-1 transition-transform cursor-default relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-streak/5 to-transparent"></div>
<div className="text-xl mb-1 relative z-10">🔥</div>
<div className="text-base font-semibold text-streak tracking-tight relative z-10">7</div>
<div className="text-[10px] text-streak/80 font-normal uppercase tracking-wide relative z-10">Day Streak</div>
</div>
</div>

<div className="bg-cardBg rounded-[20px] p-5 shadow-sm-purp border border-borderCol/40">
<h2 className="text-sm font-semibold text-textPri flex items-center gap-1.5 mb-4">
<iconify-icon className="text-textSec" icon="solar:calendar-linear"></iconify-icon> Streak Calendar
                        </h2>

<div className="grid grid-cols-7 gap-1.5 mb-3">

<div className="aspect-square bg-gray-100 rounded-[4px]"></div>
<div className="aspect-square bg-primary-200 rounded-[4px]"></div>
<div className="aspect-square bg-primary-400 rounded-[4px]"></div>
<div className="aspect-square bg-primary-500 rounded-[4px]"></div>
<div className="aspect-square bg-gray-100 rounded-[4px]"></div>
<div className="aspect-square bg-gray-100 rounded-[4px]"></div>
<div className="aspect-square bg-gray-100 rounded-[4px]"></div>

<div className="aspect-square bg-gray-100 rounded-[4px]"></div>
<div className="aspect-square bg-primary-300 rounded-[4px]"></div>
<div className="aspect-square bg-primary-400 rounded-[4px]"></div>
<div className="aspect-square bg-gray-100 rounded-[4px]"></div>
<div className="aspect-square bg-gray-100 rounded-[4px]"></div>
<div className="aspect-square bg-gray-100 rounded-[4px]"></div>
<div className="aspect-square bg-primary-200 rounded-[4px]"></div>

<div className="aspect-square bg-primary-400 rounded-[4px]"></div>
<div className="aspect-square bg-primary-500 rounded-[4px]"></div>
<div className="aspect-square bg-primary-500 rounded-[4px]"></div>
<div className="aspect-square bg-primary-300 rounded-[4px]"></div>
<div className="aspect-square bg-primary-400 rounded-[4px]"></div>
<div className="aspect-square bg-primary-500 rounded-[4px]"></div>

<div className="aspect-square bg-primary-500 rounded-[4px] ring-2 ring-primary-200 ring-offset-1 relative"><div className="absolute inset-0 bg-white/20 rounded-[4px] animate-pulse"></div></div>
</div>
<div className="flex justify-between items-center text-[11px] text-textSec font-normal">
<span><strong className="font-semibold text-textPri">7 day</strong> current streak</span>
<span><strong className="font-semibold text-textPri">14 day</strong> best</span>
</div>
</div>

<div className="bg-cardBg rounded-[20px] p-5 shadow-sm-purp border border-borderCol/40 overflow-hidden">
<div className="flex justify-between items-center mb-4">
<h2 className="text-sm font-semibold text-textPri flex items-center gap-1.5">
<iconify-icon className="text-gold-text" icon="solar:medal-star-linear"></iconify-icon> Milestone Badges
                            </h2>
<button className="text-[11px] font-semibold text-primary-500">View All</button>
</div>
<div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar -mx-5 px-5">

<div className="flex flex-col items-center gap-2 shrink-0">
<div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center text-3xl shadow-sm relative">
                                    🌱 <div className="absolute -top-1 -right-1 bg-success text-white text-[8px] px-1.5 rounded-full font-bold">x1</div>
</div>
<span className="text-[10px] font-semibold text-textPri">Sprout</span>
</div>
<div className="flex flex-col items-center gap-2 shrink-0">
<div className="w-16 h-16 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center text-3xl shadow-sm relative">
                                    ⚡
                                </div>
<span className="text-[10px] font-semibold text-textPri">Spark</span>
</div>
<div className="flex flex-col items-center gap-2 shrink-0">
<div className="w-16 h-16 rounded-full bg-yellow-50 border-2 border-yellow-300 flex items-center justify-center text-3xl shadow-[0_0_15px_rgba(250,204,21,0.3)] relative">
                                    🥇
                                </div>
<span className="text-[10px] font-semibold text-textPri">Gold</span>
</div>

<div className="flex flex-col items-center gap-2 shrink-0 opacity-40 grayscale">
<div className="w-16 h-16 rounded-full bg-gray-100 border-2 border-gray-300 flex items-center justify-center text-3xl">
                                    🏆
                                </div>
<span className="text-[10px] font-semibold text-textPri">Champion</span>
</div>
<div className="flex flex-col items-center gap-2 shrink-0 opacity-40 grayscale">
<div className="w-16 h-16 rounded-full bg-gray-100 border-2 border-gray-300 flex items-center justify-center text-3xl">
                                    💎
                                </div>
<span className="text-[10px] font-semibold text-textPri">Diamond</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-4 right-4 bg-cardBg rounded-[24px] shadow-lg-purp min-h-[64px] flex justify-around items-center px-2 py-2 border border-borderCol/50">
<button className="flex flex-col items-center justify-center w-16 h-[52px] rounded-2xl text-textSec hover:text-primary-500 transition-colors gap-1">
<iconify-icon className="mb-0.5" icon="solar:home-linear" width="22"></iconify-icon>
<span className="text-[10px] font-normal tracking-wide">Home</span>
</button>
<button className="flex flex-col items-center justify-center w-16 h-[52px] rounded-2xl text-textSec hover:text-primary-500 transition-colors gap-1">
<iconify-icon className="mb-0.5" icon="solar:book-linear" width="22"></iconify-icon>
<span className="text-[10px] font-normal tracking-wide">Courses</span>
</button>
<button className="flex flex-col items-center justify-center w-16 h-[52px] rounded-2xl text-textSec hover:text-primary-500 transition-colors gap-1">
<iconify-icon className="mb-0.5" icon="solar:play-stream-linear" width="22"></iconify-icon>
<span className="text-[10px] font-normal tracking-wide">Shorts</span>
</button>
<button className="flex flex-col items-center justify-center w-16 h-[52px] rounded-2xl bg-primary-50 text-primary-600 transition-colors gap-1">
<iconify-icon className="mb-0.5 font-bold" icon="solar:user-circle-bold" width="22"></iconify-icon>
<span className="text-[10px] font-semibold tracking-wide">Me</span>
</button>
</div>
</div>



<div className="relative w-[390px] h-[844px] bg-[#131320] rounded-[40px] shadow-2xl border-[8px] border-slate-800 overflow-hidden shrink-0">

<div className="absolute inset-0 bg-appBg blur-sm opacity-50"></div>

<div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-500 to-[#7C6FFF] z-50 flex flex-col items-center justify-center p-6 text-center animate-slide-up">

<div className="absolute top-10 left-10 w-2 h-6 bg-yellow-300 rounded rotate-45 opacity-80 animate-bounce"></div>
<div className="absolute top-20 right-20 w-3 h-3 bg-pink-400 rounded-full opacity-80 animate-pulse"></div>
<div className="absolute top-40 left-1/4 w-4 h-4 bg-green-400 rounded rotate-12 opacity-80"></div>
<div className="absolute bottom-1/3 right-1/4 w-5 h-2 bg-blue-300 rounded -rotate-45 opacity-80"></div>
<div className="text-[80px] drop-shadow-[0_0_30px_rgba(255,255,255,0.4)] mb-6 animate-bounce-star">⭐</div>
<h1 className="text-3xl font-semibold text-white tracking-tight mb-3 font-display">Level 5 Unlocked!</h1>
<p className="text-sm text-white/80 font-normal mb-8 max-w-[250px] leading-relaxed">Super Learner · You're absolutely crushing it! 🚀</p>
<div className="w-full bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-5 mb-10 shadow-lg relative overflow-hidden">
<div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/20 rounded-full blur-2xl"></div>
<div className="flex items-center justify-center gap-3 relative z-10">
<div className="text-3xl animate-coin">🪙</div>
<div className="text-left">
<div className="text-lg font-semibold text-[#FDE047] tracking-tight mb-0.5">+200 Bonus Coins!</div>
<div className="text-[11px] text-white/70 uppercase tracking-widest font-semibold">Reward Added</div>
</div>
</div>
</div>
<div className="text-6xl drop-shadow-lg mb-8 hover:scale-110 transition-transform cursor-pointer">🦊🎉</div>
<button className="w-full bg-white text-primary-600 rounded-[16px] text-base font-semibold min-h-[56px] flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors mt-auto mb-10">
                    🎉 Awesome! Claim Reward
                </button>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full z-50"></div>
</div>
</div>

    </>
  );
}
