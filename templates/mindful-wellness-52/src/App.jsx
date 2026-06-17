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
      

<nav className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/50">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center text-white">
<svg aria-hidden="true" data-icon="lucide:flower-2" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"></path><circle cx="12" cy="8" r="2"></circle><path d="M12 10v12m0 0c4.2 0 7-1.667 7-5c-4.2 0-7 1.667-7 5m0 0c-4.2 0-7-1.667-7-5c4.2 0 7 1.667 7 5"></path></g></svg>
</div>
<span className="text-stone-900 font-medium tracking-tight text-sm" style={{}}>Mindful.</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#" style={{}}>Features</a>
<a className="hover:text-stone-900 transition-colors" href="#" style={{}}>Manifesto</a>
<a className="hover:text-stone-900 transition-colors" href="#" style={{}}>Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 hidden sm:block" href="#" style={{}}>Log in</a>
<a className="hover:bg-stone-800 transition-colors text-sm font-medium text-white bg-stone-900 rounded-full pt-2 pr-4 pb-2 pl-4 shadow-sm" href="#">Get App</a>
</div>
</div>
</nav>

<section className="overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-teal-50 to-transparent -z-10 opacity-60"></div>
<div className="text-center max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 shadow-sm mb-8 animate-fade-in-up">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
<span className="text-xs font-medium text-stone-600" style={{}}>New: Sleep Journeys 2.0</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-stone-900 mb-6 max-w-4xl mx-auto leading-[1.1]" style={{}}>
                Master your mind,<br/> <span className="text-stone-400" style={{}}>one breath at a time.</span>
</h1>
<p className="text-lg md:text-xl text-stone-500 mb-10 max-w-xl mx-auto leading-relaxed" style={{}}>
                Reduce stress, improve focus, and sleep better with our science-backed mindfulness tools designed for modern life.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<button className="h-12 px-8 rounded-full bg-stone-900 text-white font-medium hover:bg-stone-800 transition-all flex items-center gap-2 shadow-lg shadow-stone-200" style={{}}>
<svg aria-hidden="true" data-icon="lucide:apple" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10a3 3 0 0 0 3.648.648a5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></g></svg>
                    Download for iOS
                </button>
<button className="h-12 px-8 rounded-full bg-white border border-stone-200 text-stone-700 font-medium hover:bg-stone-50 transition-all flex items-center gap-2 shadow-sm" style={{}}>
                    View Web Demo
                </button>
</div>

<div className="flex flex-col items-center gap-4">
<div className="flex items-center gap-1">
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-xs font-medium text-stone-400" style={{}}>Trusted by over 100,000 mindful humans</p>
<div className="flex gap-8 opacity-40 grayscale mt-4">

<span className="text-lg font-semibold tracking-tighter" style={{}}>NYTIMES</span>
<span className="text-lg font-semibold tracking-tighter" style={{}}>WIRED</span>
<span className="text-lg font-semibold tracking-tighter" style={{}}>VOGUE</span>
<span className="text-lg font-semibold tracking-tighter" style={{}}>FORBES</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-stone-100">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-5 relative flex justify-center lg:sticky lg:top-24">

<div className="relative w-[320px] h-[640px] bg-stone-900 rounded-[3rem] shadow-2xl p-3 border-4 border-stone-800">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-stone-900 rounded-b-xl z-20"></div>

<div className="w-full h-full bg-stone-50 rounded-[2.25rem] overflow-hidden relative flex flex-col">

<div className="pt-12 px-6 pb-4">
<p className="text-xs text-stone-400 font-medium uppercase tracking-wide" style={{}}>Sunday, Oct 24</p>
<h3 className="text-2xl font-semibold text-stone-800 tracking-tight" style={{}}>Good morning, Alex</h3>
</div>

<div className="flex-1 overflow-y-auto px-6 pb-24 no-scrollbar">

<div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 mb-6">
<div className="flex justify-between items-center mb-4">
<h4 className="text-sm font-medium text-stone-700" style={{}}>How do you feel?</h4>
<svg aria-hidden="true" data-icon="lucide:smile" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01"></path></g></svg>
</div>
<input className="mb-2" max="100" min="1" type="range" value="75"/>
<div className="flex justify-between text-[10px] text-stone-400 font-medium">
<span style={{}}>Stressed</span>
<span style={{}}>Calm</span>
</div>
</div>

<div className="bg-teal-50 p-5 rounded-2xl border border-teal-100 mb-4">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-teal-600 shadow-sm shrink-0">
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:play" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h4 className="text-sm font-semibold text-stone-800 mb-1" style={{}}>Morning Clarity</h4>
<p className="text-xs text-stone-500 mb-3" style={{}}>10 min • Meditation</p>
<div className="h-1 w-full bg-teal-200/50 rounded-full overflow-hidden">
<div className="h-full w-1/3 bg-teal-500 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 mb-4">
<div className="bg-white p-4 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center justify-center text-center">
<span className="text-2xl font-semibold text-stone-900 tracking-tight" style={{}}>12</span>
<span className="text-[10px] text-stone-400 font-medium uppercase tracking-wide mt-1" style={{}}>Streak Days</span>
</div>
<div className="bg-white p-4 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center justify-center text-center">
<span className="text-2xl font-semibold text-stone-900 tracking-tight" style={{}}>4.5h</span>
<span className="text-[10px] text-stone-400 font-medium uppercase tracking-wide mt-1" style={{}}>Focus Time</span>
</div>
</div>

<h4 className="text-sm font-medium text-stone-900 mb-3" style={{}}>For Sleep</h4>
<div className="flex gap-3 overflow-x-auto pb-4 -mx-6 px-6">
<div className="w-32 shrink-0 h-40 bg-stone-800 rounded-2xl p-3 flex flex-col justify-end text-white relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<span className="relative z-10 text-xs font-medium" style={{}}>Rain Sounds</span>
</div>
<div className="w-32 shrink-0 h-40 bg-stone-300 rounded-2xl p-3 flex flex-col justify-end text-white relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<span className="relative z-10 text-xs font-medium" style={{}}>Drift Off</span>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full h-20 bg-white border-t border-stone-100 flex items-center justify-around px-2 pb-2">
<button className="p-3 text-teal-600 flex flex-col items-center gap-1">
<svg aria-hidden="true" data-icon="lucide:home" data-strokeWidth="1.5" data-width="22" height="22" role="img" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></g></svg>
<span className="text-[10px] font-medium" style={{}}>Home</span>
</button>
<button className="p-3 text-stone-400 hover:text-stone-600 flex flex-col items-center gap-1">
<svg aria-hidden="true" data-icon="lucide:moon" data-strokeWidth="1.5" data-width="22" height="22" role="img" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-[10px] font-medium" style={{}}>Sleep</span>
</button>
<button className="p-3 text-stone-400 hover:text-stone-600 flex flex-col items-center gap-1">
<svg aria-hidden="true" data-icon="lucide:bar-chart-2" data-strokeWidth="1.5" data-width="22" height="22" role="img" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6m7 6V3m7 18V9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-[10px] font-medium" style={{}}>Stats</span>
</button>
<button className="p-3 text-stone-400 hover:text-stone-600 flex flex-col items-center gap-1">
<svg aria-hidden="true" data-icon="lucide:user" data-strokeWidth="1.5" data-width="22" height="22" role="img" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
<span className="text-[10px] font-medium" style={{}}>Profile</span>
</button>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 space-y-8">
<div className="mb-10">
<h2 className="text-3xl font-medium tracking-tight text-stone-900 mb-4" style={{}}>Everything you need to<br/>reclaim your attention.</h2>
<p className="text-stone-500 leading-relaxed max-w-md" style={{}}>Our suite of tools adapts to your lifestyle, helping you build sustainable habits without the pressure.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="p-8 bg-stone-50 rounded-3xl border border-stone-200 hover:border-stone-300 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-white border border-stone-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300">
<svg aria-hidden="true" data-icon="lucide:sun" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></g></svg>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-2" style={{}}>Daily Plans</h3>
<p className="text-sm text-stone-500 leading-relaxed" style={{}}>Personalized routines generated every morning based on your sleep quality and mood.</p>
</div>

<div className="p-8 bg-stone-50 rounded-3xl border border-stone-200 hover:border-stone-300 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-white border border-stone-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300">
<svg aria-hidden="true" data-icon="lucide:brain-circuit" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4M6.003 5.125A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396M6 18a4 4 0 0 1-1.967-.516M12 13h4m-4 5h6a2 2 0 0 1 2 2v1M12 8h8m-4 0V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></g></svg>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-2" style={{}}>Focus Modes</h3>
<p className="text-sm text-stone-500 leading-relaxed" style={{}}>Customizable timers and soundscapes to help you enter deep work states effortlessly.</p>
</div>

<div className="md:col-span-2 p-8 bg-stone-900 rounded-3xl border border-stone-800 text-white relative overflow-hidden group">
<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div>
<div className="w-12 h-12 rounded-xl bg-stone-800 border border-stone-700 flex items-center justify-center mb-6">
<svg aria-hidden="true" data-icon="lucide:moon" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-2" style={{}}>Sleep Intelligence</h3>
<p className="text-sm text-stone-400 leading-relaxed max-w-sm" style={{}}>Analyze your rest patterns and receive actionable insights to improve your circadian rhythm.</p>
</div>

<div className="flex items-end gap-1 h-24 opacity-80">
<div className="w-2 bg-stone-700 rounded-t h-12"></div>
<div className="w-2 bg-stone-700 rounded-t h-16"></div>
<div className="w-2 bg-purple-500 rounded-t h-20 shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
<div className="w-2 bg-stone-700 rounded-t h-14"></div>
<div className="w-2 bg-stone-700 rounded-t h-10"></div>
<div className="w-2 bg-stone-700 rounded-t h-18"></div>
<div className="w-2 bg-purple-500 rounded-t h-24 shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
</div>
</div>
</div>

<div className="p-8 bg-stone-50 rounded-3xl border border-stone-200 hover:border-stone-300 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-white border border-stone-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300">
<svg aria-hidden="true" data-icon="lucide:heart-pulse" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path><path d="M3.22 13H9.5l.5-1l2 4.5l2-7l1.5 3.5h5.27"></path></g></svg>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-2" style={{}}>Mood Tracking</h3>
<p className="text-sm text-stone-500 leading-relaxed" style={{}}>Log emotions and identify triggers with our intuitive journaling interface.</p>
</div>

<div className="p-8 bg-stone-50 rounded-3xl border border-stone-200 hover:border-stone-300 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-white border border-stone-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300">
<svg aria-hidden="true" data-icon="lucide:users" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-2" style={{}}>Community</h3>
<p className="text-sm text-stone-500 leading-relaxed" style={{}}>Join group meditations and challenges to stay motivated together.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 overflow-hidden">
<div className="max-w-6xl mx-auto px-6 mb-12 flex flex-col md:flex-row items-center justify-between">
<h2 className="text-3xl font-medium tracking-tight text-stone-900" style={{}}>Loved by calmness seekers</h2>
<div className="flex gap-2 mt-4 md:mt-0">
<button className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center hover:bg-white transition-colors">
<svg aria-hidden="true" data-icon="lucide:arrow-left" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m12 19l-7-7l7-7m7 7H5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center hover:bg-white transition-colors">
<svg aria-hidden="true" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
<div className="flex gap-6 overflow-x-auto pb-8 px-6 no-scrollbar snap-x">

<div className="min-w-[320px] md:min-w-[400px] bg-white p-8 rounded-2xl border border-stone-200 shadow-sm snap-center">
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-stone-700 text-lg leading-relaxed mb-6" style={{}}>"I've tried every meditation app out there. Mindful is the only one that doesn't feel like a chore. The UI is stunning and the sleep stories actually work."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center font-bold text-stone-500" style={{}}>EK</div>
<div>
<div className="text-sm font-semibold text-stone-900" style={{}}>Elena K.</div>
<div className="text-xs text-stone-500" style={{}}>Product Designer</div>
</div>
</div>
</div>

<div className="min-w-[320px] md:min-w-[400px] bg-white p-8 rounded-2xl border border-stone-200 shadow-sm snap-center">
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-stone-700 text-lg leading-relaxed mb-6" style={{}}>"The focus timer has completely transformed my workday. I'm getting more done in 4 hours than I used to in 8. Highly recommended for remote workers."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-900 text-white flex items-center justify-center font-bold" style={{}}>MJ</div>
<div>
<div className="text-sm font-semibold text-stone-900" style={{}}>Marcus J.</div>
<div className="text-xs text-stone-500" style={{}}>Software Engineer</div>
</div>
</div>
</div>

<div className="min-w-[320px] md:min-w-[400px] bg-white p-8 rounded-2xl border border-stone-200 shadow-sm snap-center">
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-stone-700 text-lg leading-relaxed mb-6" style={{}}>"It's not just an app, it's a daily ritual. The mood tracking helps me understand my anxiety patterns better than anything else."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold" style={{}}>SL</div>
<div>
<div className="text-sm font-semibold text-stone-900" style={{}}>Sarah L.</div>
<div className="text-xs text-stone-500" style={{}}>Teacher</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6">
<div className="max-w-4xl mx-auto bg-stone-900 rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 relative z-10" style={{}}>Invest in your peace of mind.</h2>
<p className="text-stone-400 text-lg mb-10 max-w-xl mx-auto relative z-10" style={{}}>Start your 14-day free trial. Cancel anytime. No hidden fees, just clarity.</p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 relative z-10">
<div className="bg-white rounded-2xl p-1 pr-1 flex items-center w-full max-w-sm">
<div className="px-6 py-3 flex-1 text-left">
<span className="block text-xs text-stone-400 font-medium uppercase tracking-wider" style={{}}>Annual Plan</span>
<div className="flex items-baseline gap-1">
<span className="text-xl font-bold text-stone-900" style={{}}>$69.99</span>
<span className="text-sm text-stone-500" style={{}}>/year</span>
</div>
</div>
<button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl font-medium transition-colors" style={{}}>
                        Start Free Trial
                    </button>
</div>
</div>
<p className="mt-4 text-xs text-stone-500 relative z-10" style={{}}>Or get monthly access for $9.99/mo</p>
<div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-12 text-stone-400 text-sm font-medium relative z-10">
<div className="flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:check" data-strokeWidth="3" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span style={{}}>Unlimited Meditations</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:check" data-strokeWidth="3" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span style={{}}>Offline Mode</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:check" data-strokeWidth="3" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span style={{}}>Advanced Analytics</span>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-stone-200 pt-20 pb-12">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-20">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-stone-900 rounded-md flex items-center justify-center text-white">
<svg aria-hidden="true" data-icon="lucide:flower-2" data-strokeWidth="1.5" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"></path><circle cx="12" cy="8" r="2"></circle><path d="M12 10v12m0 0c4.2 0 7-1.667 7-5c-4.2 0-7 1.667-7 5m0 0c-4.2 0-7-1.667-7-5c4.2 0 7 1.667 7 5"></path></g></svg>
</div>
<span className="text-stone-900 font-bold tracking-tight" style={{}}>Mindful.</span>
</div>
<p className="text-stone-500 text-sm leading-relaxed max-w-xs mb-6" style={{}}>
                        Designing technology that respects your attention and promotes mental well-being in a digital world.
                    </p>
<div className="flex gap-4">
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<svg aria-hidden="true" data-icon="lucide:twitter" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<svg aria-hidden="true" data-icon="lucide:instagram" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<svg aria-hidden="true" data-icon="lucide:linkedin" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
</div>
</div>
<div className="">
<h4 className="font-medium text-stone-900 mb-4" style={{}}>Product</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-stone-900" href="#" style={{}}>Features</a></li>
<li><a className="hover:text-stone-900" href="#" style={{}}>Pricing</a></li>
<li><a className="hover:text-stone-900" href="#" style={{}}>Updates</a></li>
<li><a className="hover:text-stone-900" href="#" style={{}}>Beta Program</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4" style={{}}>Company</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-stone-900" href="#" style={{}}>About</a></li>
<li><a className="hover:text-stone-900" href="#" style={{}}>Manifesto</a></li>
<li><a className="hover:text-stone-900" href="#" style={{}}>Careers</a></li>
<li><a className="hover:text-stone-900" href="#" style={{}}>Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4" style={{}}>Legal</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-stone-900" href="#" style={{}}>Privacy</a></li>
<li><a className="hover:text-stone-900" href="#" style={{}}>Terms</a></li>
<li><a className="hover:text-stone-900" href="#" style={{}}>Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400">
<p style={{}}>© 2024 Mindful Wellness Inc. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span style={{}}>All systems operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
