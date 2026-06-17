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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
page: '#F8F9FC',
surface: '#FFFFFF',
primary: '#111827',
secondary: '#6B7280',
accent: '#8B5CF6',
'accent-soft': '#F5F3FF',
success: '#10B981',
'success-soft': '#ECFDF5',
warning: '#F59E0B',
'warning-soft': '#FFFBEB',
danger: '#EF4444',
'danger-soft': '#FEF2F2',
info: '#3B82F6',
'info-soft': '#EFF6FF',
orange: '#F97316',
'orange-soft': '#FFF7ED',
},
boxShadow: {
'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.04), 0 4px 6px -4px rgba(0, 0, 0, 0.02)',
'glow': '0 0 15px rgba(139, 92, 246, 0.3)',
'nav': '0 -4px 20px rgba(0, 0, 0, 0.03)',
},
borderRadius: {
'3xl': '1.5rem',
'4xl': '2rem',
}
}
}
}



        lucide.createIcons();
        function selectMood(element) {
            document.querySelectorAll('.mood-btn').forEach(btn => {
                btn.classList.remove('selected', 'shadow-sm');
                btn.classList.add('border-transparent');
                const emoji = btn.querySelector('span');
                if(emoji) {
                    emoji.classList.add('grayscale', 'opacity-60');
                    emoji.classList.remove('scale-110');
                }
            });
            element.classList.add('selected', 'shadow-sm');
            element.classList.remove('border-transparent');
            const selectedEmoji = element.querySelector('span');
            if(selectedEmoji) {
                selectedEmoji.classList.remove('grayscale', 'opacity-60');
                selectedEmoji.classList.add('scale-110');
            }
        }
    
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
      

<div className="relative mx-auto h-[844px] w-full max-w-[390px] bg-black rounded-[55px] shadow-[0_0_0_12px_#1f2937,0_25px_50px_-12px_rgba(0,0,0,0.5)] ring-1 ring-white/20 overflow-hidden shrink-0">

<div className="absolute -left-[16px] top-[120px] h-[32px] w-[4px] bg-gray-700 rounded-l-md z-0"></div> 
<div className="absolute -left-[16px] top-[170px] h-[64px] w-[4px] bg-gray-700 rounded-l-md z-0"></div> 
<div className="absolute -left-[16px] top-[245px] h-[64px] w-[4px] bg-gray-700 rounded-l-md z-0"></div> 
<div className="absolute -right-[16px] top-[190px] h-[96px] w-[4px] bg-gray-700 rounded-r-md z-0"></div> 

<div className="absolute inset-[3px] bg-black rounded-[52px] overflow-hidden">

<div className="h-full w-full bg-page rounded-[48px] overflow-hidden relative flex flex-col z-10">

<div className="absolute top-0 w-full h-14 z-50 flex justify-center pt-3 pointer-events-none">
<div className="h-[36px] w-[126px] bg-black rounded-[20px] flex items-center justify-between px-4">
<div className="w-[8px] h-[8px] rounded-full bg-[#1a1a1a]/80 shadow-inner"></div> 
<div className="w-[8px] h-[8px] rounded-full bg-[#0f172a]/60 shadow-inner ring-1 ring-white/5"></div> 
</div>
</div>

<div className="h-14 w-full flex justify-between items-center px-7 pt-3 select-none z-40 absolute top-0 text-gray-900">
<span className="text-[14px] font-semibold tracking-wide ml-2">9:41</span>
<div className="flex items-center gap-1.5 mr-2">
<svg className="lucide lucide-signal w-4 h-4 stroke-[2.5]" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi w-4 h-4 stroke-[2.5]" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<div className="w-6 h-3 border-[1.5px] border-current rounded-[4px] relative ml-0.5 opacity-80">
<div className="h-full bg-current w-[60%] rounded-[1px]"></div>
</div>
</div>
</div>

<header className="pt-[72px] pb-2 px-6 flex justify-between items-center z-10">
<div className="flex flex-col">
<div className="flex items-center gap-2 mb-0.5">
<span className="text-[11px] font-semibold text-secondary uppercase tracking-wider">Good Morning</span>
</div>
<h1 className="text-2xl font-bold tracking-tight text-primary">Alex Morgan</h1>
</div>
<div className="flex items-center gap-3">
<button className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center text-gray-400 hover:text-accent transition-colors relative group">
<svg className="lucide lucide-bell w-5 h-5 group-hover:fill-current stroke-[1.5]" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute top-2.5 right-3 w-1.5 h-1.5 bg-danger rounded-full ring-2 ring-white"></span>
</button>
<div className="w-11 h-11 rounded-full p-1 bg-white shadow-soft">
<img alt="Profile" className="w-full h-full rounded-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
</div>
</header>

<div className="px-6 pb-2 shrink-0">
<div className="flex gap-2 pt-2 pb-2 gap-x-2 gap-y-2 items-center justify-between">

<div className="flex flex-col items-center justify-center w-[3.4rem] h-[4.2rem] rounded-2xl bg-white text-gray-400 cursor-pointer shadow-soft border border-transparent">
<span className="text-[11px] font-medium">Mon</span>
<span className="text-sm font-bold mt-0.5">12</span>
</div>

<div className="flex flex-col items-center justify-center w-[3.4rem] h-[4.2rem] rounded-2xl bg-white text-gray-400 cursor-pointer shadow-soft border border-transparent">
<span className="text-[11px] font-medium">Tue</span>
<span className="text-sm font-bold mt-0.5">13</span>
</div>

<div className="flex flex-col w-[3.4rem] h-[4.2rem] transform cursor-pointer text-white bg-blue-500 z-10 rounded-2xl shadow-lg scale-105 items-center justify-center">
<span className="text-[11px] font-medium opacity-80">Wed</span>
<span className="text-sm font-bold mt-0.5">14</span>
</div>

<div className="flex flex-col items-center justify-center w-[3.4rem] h-[4.2rem] rounded-2xl bg-white text-gray-400 cursor-pointer shadow-soft border border-transparent">
<span className="text-[11px] font-medium">Thu</span>
<span className="text-sm font-bold mt-0.5">15</span>
</div>

<div className="flex flex-col items-center justify-center w-[3.4rem] h-[4.2rem] rounded-2xl bg-white text-gray-400 cursor-pointer shadow-soft border border-transparent">
<span className="text-[11px] font-medium">Fri</span>
<span className="text-sm font-bold mt-0.5">16</span>
</div>
</div>
</div>

<main className="flex-1 overflow-y-auto no-scrollbar px-6 pb-28 pt-2 space-y-4">

<section className="bg-surface rounded-3xl p-6 shadow-soft relative overflow-hidden group border border-gray-100/50">
<div className="absolute top-0 right-0 w-32 h-32 bg-accent-soft rounded-bl-full -z-0 opacity-60"></div>
<div className="absolute bottom-0 left-0 w-20 h-20 bg-info-soft rounded-tr-full -z-0 opacity-60"></div>
<div className="flex justify-between items-center z-10 relative h-full">
<div className="flex flex-col justify-between h-full py-1 gap-4">
<div className="">
<h2 className="text-lg font-bold tracking-tight text-primary mb-0.5">Daily Goal</h2>
<p className="text-[11px] text-secondary font-medium">You're doing great!</p>
</div>
<div className="flex items-center gap-1.5 bg-success-soft pl-1.5 pr-2.5 py-1 rounded-full w-fit">
<div className="bg-white rounded-full p-0.5 shadow-sm">
<svg className="lucide lucide-trending-up w-2.5 h-2.5 text-success" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<span className="text-[10px] font-bold text-success tracking-wide uppercase">On track</span>
</div>
</div>

<div className="flex w-24 h-24 relative items-center justify-center">
<div className="absolute flex flex-col items-center justify-center text-center">
<span className="text-xl font-bold text-primary tracking-tight">82<span className="text-xs align-top text-gray-400 font-semibold">%</span></span>
</div><svg className="transform -rotate-90 w-[95px] h-[95px]" data-icon-replaced="true" strokeWidth="2" style={{width: '95px', height: '95px', color: 'rgb(17, 24, 39)'}} viewbox="0 0 100 100">
<defs>
<lineargradient id="gradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#3B82F6'}}></stop>
<stop offset="100%" style={{stopColor: '#93C5FD'}}></stop>
</lineargradient>
</defs>
<circle className="" cx="50" cy="50" fill="none" r="40" stroke="#F3F4F6" strokeLinecap="round" strokeWidth="8"></circle>
<circle className="" cx="50" cy="50" fill="none" r="40" stroke="url(#gradient)" stroke-dasharray="251.2" stroke-dashoffset="45.2" strokeLinecap="round" strokeWidth="8"></circle>
</svg>
</div>
</div>
</section>

<section className="bg-surface border-gray-100/50 border rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-soft">
<div className="flex justify-between items-center mb-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-2xl bg-danger-soft flex items-center justify-center text-danger">
<svg className="lucide lucide-utensils w-4 h-4" data-lucide="utensils" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
</div>
<div className="">
<h3 className="text-sm font-bold text-primary">Nutrition</h3>
<p className="text-[10px] text-secondary font-medium">1,250 left</p>
</div>
</div>
<button className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all shadow-sm">
<svg className="lucide lucide-plus w-3.5 h-3.5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
<div className="space-y-3">

<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<span className="text-[10px] font-semibold text-secondary w-8">Pro</span>
<div className="flex-1 h-2 bg-gray-50 rounded-full overflow-hidden relative">
<div className="bg-blue-500 w-[70%] h-full rounded-full absolute top-0 left-0 shadow-sm"></div>
</div>
<span className="text-[10px] font-bold text-primary w-8 text-right">92g</span>
</div>

<div className="flex items-center gap-2">
<span className="text-[10px] font-semibold text-secondary w-8">Carb</span>
<div className="flex-1 h-2 bg-gray-50 rounded-full overflow-hidden relative">
<div className="absolute top-0 left-0 h-full bg-warning w-[45%] rounded-full shadow-sm"></div>
</div>
<span className="text-[10px] font-bold text-primary w-8 text-right">110g</span>
</div>

<div className="flex items-center gap-2">
<span className="text-[10px] font-semibold text-secondary w-8">Fat</span>
<div className="flex-1 h-2 bg-gray-50 rounded-full overflow-hidden relative">
<div className="absolute top-0 left-0 h-full bg-danger w-[30%] rounded-full shadow-sm"></div>
</div>
<span className="text-[10px] font-bold text-primary w-8 text-right">35g</span>
</div>
</div>
</section>

<div className="grid grid-cols-2 gap-3">

<div className="bg-surface rounded-3xl p-4 shadow-soft flex flex-col justify-between h-40 border border-gray-100/50">
<div className="flex justify-between items-start">
<div className="w-9 h-9 rounded-2xl bg-orange-soft flex items-center justify-center text-orange">
<svg className="lucide lucide-footprints w-4.5 h-4.5" data-lucide="footprints" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"></path><path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"></path><path d="M16 17h4"></path><path d="M4 13h4"></path></svg>
</div>
</div>
<div className="">
<span className="text-xs font-semibold text-gray-400 block mb-0.5">Walking</span>
<div className="flex items-end gap-1 mb-2">
<span className="text-xl font-bold text-primary tracking-tight">6,240</span>
<span className="text-[10px] text-gray-400 font-medium mb-1.5">steps</span>
</div>
<div className="w-full h-1.5 bg-gray-50 rounded-full overflow-hidden">
<div className="h-full bg-orange rounded-full w-[65%] shadow-sm"></div>
</div>
</div>
</div>

<div className="bg-surface rounded-3xl p-4 shadow-soft flex flex-col justify-between h-40 border border-gray-100/50">
<div className="flex justify-between items-start">
<div className="w-9 h-9 rounded-2xl bg-info-soft flex items-center justify-center text-info">
<svg className="lucide lucide-moon w-4.5 h-4.5 fill-current" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
</div>
</div>
<div className="">
<span className="text-xs font-semibold text-gray-400 block mb-0.5">Sleep</span>
<div className="flex items-end gap-1 mb-3">
<span className="text-xl font-bold text-primary tracking-tight">7<span className="text-[10px] text-gray-400 font-medium">h</span> 20<span className="text-[10px] text-gray-400 font-medium">m</span></span>
</div>
<div className="flex items-end gap-1 h-5 w-full px-0.5">
<div className="w-full bg-info-soft rounded-sm h-[40%]"></div>
<div className="w-full bg-info-soft rounded-sm h-[60%]"></div>
<div className="w-full bg-info-soft rounded-sm h-[50%]"></div>
<div className="w-full bg-info-soft rounded-sm h-[80%]"></div>
<div className="w-full bg-info rounded-sm h-[90%] shadow-sm"></div>
</div>
</div>
</div>
</div>

<section className="bg-surface rounded-3xl p-5 shadow-soft border border-gray-100/50">
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm font-bold text-primary">How do you feel?</h3>
<button className="w-5 h-5 rounded-full bg-gray-50 flex items-center justify-center text-secondary hover:text-primary transition-colors">
<svg className="lucide lucide-more-horizontal w-3 h-3" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
<div className="flex justify-between items-center px-0">
<button className="mood-btn flex flex-col items-center justify-center w-10 h-10 rounded-2xl border border-transparent hover:bg-gray-50 group" onclick="selectMood(this)">
<span className="text-xl grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all">😫</span>
</button>
<button className="mood-btn flex flex-col items-center justify-center w-10 h-10 rounded-2xl border border-transparent hover:bg-gray-50 group" onclick="selectMood(this)">
<span className="text-xl grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all">😐</span>
</button>
<button className="mood-btn selected flex flex-col items-center justify-center w-10 h-10 rounded-2xl border border-transparent shadow-sm" onclick="selectMood(this)">
<span className="text-xl scale-110">🙂</span>
</button>
<button className="mood-btn flex flex-col items-center justify-center w-10 h-10 rounded-2xl border border-transparent hover:bg-gray-50 group" onclick="selectMood(this)">
<span className="text-xl grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all">😁</span>
</button>
<button className="mood-btn flex flex-col items-center justify-center w-10 h-10 rounded-2xl border border-transparent hover:bg-gray-50 group" onclick="selectMood(this)">
<span className="text-xl grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all">🤩</span>
</button>
</div>
</section>

<div className="relative overflow-hidden rounded-3xl p-4 bg-warning-soft border border-warning/10 flex items-center gap-3 mb-8">
<div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm text-yellow-500">
<svg className="lucide lucide-sun w-4 h-4 fill-current" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</div>
<div className="">
<h4 className="text-xs font-bold text-primary">Your rest was light</h4>
<p className="text-[10px] text-gray-500 mt-0.5 font-medium">Slow down and hydrate today.</p>
</div>
</div>
</main>

<nav className="absolute bottom-0 w-full glass-nav border-t border-white/40 z-30">
<div className="flex items-center justify-between bg-white px-2 py-2 rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] mx-5 mb-6">

<a className="flex items-center justify-center shadow-blue-500/30 transition-transform hover:scale-105 active:scale-95 text-white bg-blue-500 w-12 h-12 rounded-full shadow-lg" href="/home">
<svg className="lucide lucide-home w-5 h-5" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</a>

<a className="flex items-center justify-center hover:text-gray-900 transition-colors text-gray-400 w-12 h-12" href="/health-tracking">
<svg className="lucide lucide-compass w-6 h-6" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</a>

<a className="flex items-center justify-center hover:text-gray-900 transition-colors text-gray-400 w-12 h-12" href="/insights-reports">
<svg className="lucide lucide-bar-chart-2 w-6 h-6" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
</a>

<a className="flex items-center justify-center hover:text-gray-900 transition-colors text-gray-400 w-12 h-12" href="/guided-support-ai-recommendation">
<svg className="lucide lucide-sparkles w-6 h-6" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</a>

<a className="flex items-center justify-center hover:text-gray-900 transition-colors text-gray-400 w-12 h-12" href="/profile">
<svg className="lucide lucide-user w-6 h-6" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</a>
</div>

<div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-800/20 rounded-full"></div>
</nav>
</div>
</div>
</div>



    </>
  );
}
