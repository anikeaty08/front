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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
      

<header className="md:px-12 flex z-50 w-full max-w-[1400px] mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative items-center justify-between">
<div className="flex gap-x-3 gap-y-3 items-center">
<img alt="Tortoise Logo" className="md:h-10 w-auto h-8 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8358eab1-93a1-4fd0-ae81-6aea76c12469_320w.png"/>
</div>
<nav className="hidden md:flex items-center gap-10">
<a className="text-base font-semibold text-gray-800 hover:text-gray-500 transition-colors" href="#">Features</a>
<a className="text-base font-semibold text-gray-800 hover:text-gray-500 transition-colors" href="#">How It Works</a>
<a className="text-base font-semibold text-gray-800 hover:text-gray-500 transition-colors" href="#">Pricing</a>
</nav>
<button className="md:hidden text-gray-900">
<i className="w-7 h-7" data-lucide="menu"></i>
</button>
</header>

<main className="flex-1 flex flex-col z-40 relative">

<section className="md:mt-24 z-20 text-center max-w-4xl mt-16 mr-auto ml-auto pr-4 pl-4">
<h1 className="md:text-7xl leading-tight text-6xl font-semibold text-[#1a1f1c] tracking-tight mb-6">
                Set Race Day. Train Backwards.
            </h1>
<p className="text-xl md:text-2xl text-gray-500 font-normal max-w-3xl mx-auto mb-10 leading-relaxed">
                Tortoise turns marathon prep into a game: adaptive daily workouts, visible progress, and a race-day-first plan that actually fits your life.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
<button className="w-full sm:w-auto bg-[#58cc02] hover:bg-[#4eb800] text-white px-8 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition-transform hover:scale-105 active:scale-95 shadow-sm">
<i className="w-5 h-5" data-lucide="calendar"></i>
                    Set Race Day
                </button>
<button className="w-full sm:w-auto bg-white border-2 border-[#58cc02] text-[#58cc02] hover:bg-[#f2fdf2] px-8 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition-transform hover:scale-105 active:scale-95 shadow-sm">
<i className="w-5 h-5" data-lucide="play-circle"></i>
                    Preview Plan
                </button>
</div>
</section>

<section className="md:h-[800px] md:mt-20 overflow-hidden flex w-full h-[600px] mt-12 relative items-end justify-center">

<div className="absolute bottom-0 w-full h-24 bg-white z-30"></div>
<div className="absolute bottom-24 w-full h-8 bg-gray-100 z-20 border-t border-gray-200"></div>

<div className="absolute bottom-20 left-[-5%] w-64 h-48 bg-[#a8e6cf] rounded-t-full opacity-60 blur-sm z-10"></div>
<div className="absolute bottom-20 left-[10%] w-48 h-32 bg-[#4ade80] rounded-t-full opacity-80 z-10"></div>
<div className="z-10 bg-[#a8e6cf] opacity-60 w-80 h-64 rounded-t-full absolute right-[-10%] bottom-20 blur-sm"></div>
<div className="absolute bottom-20 right-[5%] w-56 h-40 bg-[#4ade80] rounded-t-full opacity-80 z-10"></div>

<div className="absolute top-10 left-[10%] w-48 h-16 bg-white rounded-full opacity-70 blur-[2px]"></div>
<div className="absolute top-24 left-[20%] w-32 h-12 bg-white rounded-full opacity-50 blur-[2px]"></div>
<div className="absolute top-20 right-[15%] w-64 h-20 bg-white rounded-full opacity-80 blur-[1px]"></div>

<div className="hover:-translate-y-2 transition-transform cursor-pointer text-7xl z-40 absolute bottom-28 left-[28%] drop-shadow-xl">🐢</div><div className="transform hover:-translate-y-2 transition-transform cursor-pointer bg-center z-40 text-7xl absolute bottom-32 left-[15%] drop-shadow-xl scale-x-[-1]"></div>
<div className="absolute bottom-32 right-[20%] z-40 text-7xl drop-shadow-xl hover:-translate-y-2 transition-transform cursor-pointer">🐢</div>

<div className="flex z-30 md:pb-32 w-full h-full max-w-6xl pr-4 pb-28 pl-4 relative items-end justify-center">

<div className="hidden md:block absolute left-4 lg:left-12 bottom-32 w-[300px] h-[600px] bg-white/90 backdrop-blur-md rounded-[40px] shadow-2xl z-10 -rotate-[6deg] opacity-70 scale-90 p-2 ring-8 ring-white/30">
<div className="w-full h-full bg-[#fdf8f5] rounded-[32px] overflow-hidden relative border border-gray-100 flex flex-col">
<div className="flex justify-between items-center px-6 py-4 text-xs font-semibold text-gray-500">
<span>11:56</span>
<i className="w-4 h-4" data-lucide="battery-full"></i>
</div>
<div className="flex-1 relative bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiNlN2U1ZTQiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]">

<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path className="" d="M 20,80 Q 40,50 60,70 T 90,30" fill="none" stroke="#a855f7" strokeLinecap="round" strokeWidth="4"></path>
</svg>
<div className="absolute top-1/2 left-1/2 w-4 h-4 bg-purple-500 rounded-full border-2 border-white shadow-md"></div>
</div>
</div>
</div>

<div className="hidden md:block absolute right-4 lg:right-12 bottom-32 w-[300px] h-[600px] bg-white/90 backdrop-blur-md rounded-[40px] shadow-2xl z-10 rotate-[6deg] opacity-70 scale-90 p-2 ring-8 ring-white/30">
<div className="w-full h-full bg-white rounded-[32px] overflow-hidden relative border border-gray-100 flex flex-col p-4">
<div className="flex justify-between items-center px-2 py-2 text-xs font-semibold text-gray-500 mb-4">
<span>1:05</span>
<i className="w-4 h-4" data-lucide="battery-full"></i>
</div>
<div className="w-full h-12 bg-gray-50 rounded-xl mb-3"></div>
<div className="bg-purple-50 w-full h-24 border-purple-100 border rounded-2xl mb-3"></div>
<div className="flex gap-2 mb-3">
<div className="flex-1 h-20 bg-gray-50 rounded-xl"></div>
<div className="flex-1 h-20 bg-gray-50 rounded-xl"></div>
<div className="flex-1 h-20 bg-gray-50 rounded-xl"></div>
</div>
<div className="w-full h-32 bg-emerald-50 rounded-2xl border border-emerald-100 mt-auto mb-10"></div>
</div>
</div>

<div className="relative w-[340px] sm:w-[360px] h-[680px] sm:h-[720px] bg-white rounded-[48px] shadow-2xl z-30 p-2 sm:p-2.5 ring-[10px] ring-white/60 translate-y-4 sm:translate-y-8 flex flex-col">

<div className="w-full h-full bg-white rounded-[36px] sm:rounded-[40px] overflow-hidden flex flex-col relative border border-gray-100 shadow-[inset_0_0_20px_rgba(0,0,0,0.02)]">

<div className="flex justify-between items-center px-6 pt-4 pb-2 text-xs font-semibold text-gray-900 bg-white z-10">
<span className="">1:05</span>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="signal"></i>
<i className="w-4 h-4" data-lucide="wifi"></i>
<i className="w-5 h-5" data-lucide="battery-full"></i>
</div>
</div>

<div className="flex-1 overflow-y-auto mockup-scroll px-5 pb-6 flex flex-col gap-5">

<div className="flex justify-between items-center mt-2">
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 shadow-sm border border-orange-100">
<i className="w-5 h-5 fill-current" data-lucide="flame"></i>
</div>
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-semibold text-lg border border-emerald-200">
                                    N
                                </div>
</div>

<div className="">
<h2 className="text-3xl font-semibold text-gray-900 tracking-tight mb-1">Good morning, Nick</h2>
<p className="text-base text-gray-400">One foot in front of the other. Repeat.</p>
</div>

<div className="flex items-center gap-3">
<div className="bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full text-sm font-semibold flex items-center gap-1.5 border border-emerald-100">
<span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs">2</span>
                                    Hatchling <i className="w-3 h-3 text-emerald-500" data-lucide="chevron-right"></i>
</div>
<div className="flex-1 bg-gray-100 h-2.5 rounded-full overflow-hidden">
<div className="bg-[#58cc02] w-[4%] h-full rounded-full"></div>
</div>
<span className="text-xs font-semibold text-gray-400">5/120</span>
</div>

<div className="bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] rounded-[32px] p-6 text-white relative overflow-hidden shadow-lg shadow-purple-500/20">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
<div className="text-[10px] font-semibold tracking-[0.2em] text-white/70 mb-2 flex items-center gap-2 uppercase">
<i className="w-3 h-3" data-lucide="flag"></i> RACE DAY COUNTDOWN
                                </div>
<div className="flex items-end justify-between mb-8 relative z-10">
<h3 className="text-2xl font-semibold tracking-tight max-w-[140px] leading-[1.1]">Honolulu Marathon 2026</h3>
<div className="text-right">
<div className="text-[40px] leading-none font-semibold tracking-tight mb-1">298</div>
<div className="text-[10px] text-white/70 font-semibold tracking-widest uppercase">DAYS</div>
</div>
</div>
<div className="flex items-center justify-between text-xs font-medium text-white/80 mt-auto relative z-10">
<div className="flex items-center gap-1.5"><i className="w-3.5 h-3.5 opacity-70" data-lucide="map-pin"></i> Honolulu</div>
<div className="flex items-center gap-1.5"><i className="w-3.5 h-3.5 opacity-70" data-lucide="calendar"></i> Dec 20, 2026</div>
<div className="flex items-center gap-1.5"><i className="w-3.5 h-3.5 opacity-70" data-lucide="target"></i> Goal: 5:00</div>
</div>

<div className="mt-4 flex items-center gap-3">
<div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
<div className="w-0 h-full bg-white rounded-full"></div>
</div>
<span className="text-[10px] font-medium text-white/70">0% ready</span>
</div>
</div>

<div className="bg-[#58cc02] rounded-[32px] p-6 text-white relative overflow-hidden shadow-lg shadow-[#58cc02]/20">
<div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
<div className="text-[10px] font-semibold tracking-[0.2em] text-white/80 mb-3 uppercase">On Deck</div>
<div className="flex justify-between items-start mb-2 relative z-10">
<h3 className="text-[28px] font-semibold tracking-tight leading-none">Easy Run</h3>
<div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
<i className="w-5 h-5 text-white" data-lucide="person-standing"></i>
</div>
</div>
<p className="text-sm text-white/90 mb-5 leading-relaxed font-medium relative z-10">Keep it conversational. You should be able to chat with a friend.</p>
<div className="flex items-center gap-4 text-sm font-semibold mb-6 relative z-10">
<div className="flex items-center gap-1.5"><i className="w-4 h-4 opacity-80" data-lucide="clock"></i> 28 min</div>
<div className="flex items-center gap-1.5"><i className="w-4 h-4 opacity-80" data-lucide="navigation"></i> 2.5 mi</div>
<div className="flex items-center gap-1.5"><i className="w-4 h-4 opacity-80" data-lucide="zap"></i> +28 XP</div>
</div>

<div className="bg-white/10 rounded-2xl p-3.5 flex items-start gap-3 backdrop-blur-md border border-white/10 relative z-10">
<div className="mt-0.5"><i className="w-4 h-4 text-white fill-white/20" data-lucide="lightbulb"></i></div>
<p className="text-xs text-white/90 leading-snug font-medium">This is your bread and butter — most of your running should feel this easy.</p>
</div>
<div className="mt-5 flex items-center gap-3">
<span className="text-xs font-semibold text-white/70">Marathon</span>
<div className="flex-1 h-[2px] bg-white/20 rounded-full relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full"></div>
</div>
<span className="text-xs font-semibold text-white/70">Wk 1/20</span>
</div>
</div>
</div>

<div className="border-t border-gray-100 bg-white/90 backdrop-blur-lg px-6 py-4 flex justify-between items-center z-10 pb-6 sm:pb-4">
<div className="flex-1 text-center">
<div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-0.5">This Week</div>
<div className="text-xl font-semibold tracking-tight text-gray-900">0/3</div>
</div>
<div className="flex-1 text-center border-l border-gray-100">
<div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-0.5 invisible">Dist</div>
<div className="text-xl font-semibold tracking-tight text-gray-900">0.0</div>
</div>
<div className="flex-1 text-center border-l border-gray-100 relative">
<div className="absolute top-0 right-0 text-[10px] text-gray-400 font-semibold">Details &gt;</div>
<div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-0.5 invisible">Time</div>
<div className="text-xl font-semibold tracking-tight text-gray-900">0</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
