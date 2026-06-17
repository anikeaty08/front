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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {}
}
}



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
      

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-[#0b041a] via-[#120731] to-[#1c0b3b]"></div>

<div className="absolute top-0 right-0 w-[50vw] h-[100vh] bg-pink-600/10 rounded-full blur-[150px] transform translate-x-1/4 -translate-y-1/4"></div>

<div className="absolute top-1/4 -left-1/4 w-[40vw] h-[80vh] bg-blue-600/10 rounded-full blur-[150px]"></div>

<div className="absolute top-32 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent shadow-[0_0_20px_rgba(96,165,250,0.5)]"></div>

<div className="absolute -bottom-20 -right-20 w-[60vw] h-[20vh] bg-gradient-to-tr from-purple-600/20 to-pink-500/0 transform -rotate-12 blur-[80px]"></div>

<div className="absolute top-[10%] left-[20%] w-1 h-1 bg-white rounded-full blur-[1px] opacity-60 shadow-[0_0_10px_white]"></div>
<div className="absolute top-[30%] right-[15%] w-0.5 h-0.5 bg-white rounded-full opacity-40 shadow-[0_0_5px_white]"></div>
<div className="absolute bottom-[20%] left-[10%] w-[2px] h-[2px] bg-pink-200 rounded-full blur-[1px] opacity-70"></div>
<div className="absolute top-[50%] right-[5%] w-1 h-1 bg-blue-200 rounded-full blur-[2px] opacity-50"></div>
</div>

<main className="relative z-10 w-full min-h-screen flex items-center justify-center p-4 md:p-8">

<div className="w-full max-w-[1600px] aspect-[16/9] min-h-[900px] bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.05)] overflow-hidden flex flex-col relative">

<div className="absolute top-0 inset-x-10 h-[1px] bg-gradient-to-r from-transparent via-blue-300/30 to-transparent"></div>

<header className="flex flex-col sm:flex-row items-center justify-between px-8 py-6 shrink-0 z-20">

<div className="flex items-center gap-6 mb-4 sm:mb-0">
<div className="relative flex items-center justify-center group cursor-pointer">

<span className="text-5xl font-medium tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">Q2</span>
</div>
<div className="h-6 w-[1px] bg-white/10 hidden sm:block"></div>
<h1 className="text-2xl font-normal tracking-tight text-white/90">The Q2 Way</h1>
</div>

<nav className="hidden lg:flex items-center justify-center flex-1 px-8">
<ul className="flex items-center gap-8 xl:gap-12 text-base font-normal text-white/50">
<li className="relative">
<a className="text-white hover:text-white transition-colors py-2 block" href="#">Q2 Live</a>

<div className="absolute -bottom-1 inset-x-0 h-[2px] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 shadow-[0_0_10px_rgba(168,85,247,0.6)] rounded-t-full"></div>
</li>
<li><a className="hover:text-white transition-colors py-2 block" href="#">Q2 Analyst</a></li>
<li><a className="hover:text-white transition-colors py-2 block" href="#">Q2 Architect</a></li>
<li><a className="hover:text-white transition-colors py-2 block" href="#">Q2 Coach</a></li>
<li><a className="hover:text-white transition-colors py-2 block" href="#">Q2 Communicator</a></li>
<li><a className="hover:text-white transition-colors py-2 block" href="#">Q2 Administrator</a></li>
</ul>
</nav>

<div className="flex items-center gap-6">
<button className="relative text-white/60 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5">
<i className="w-5 h-5" data-lucide="bell" strokeWidth="1.5"></i>
<span className="absolute top-2 right-2 w-2 h-2 bg-pink-500 rounded-full shadow-[0_0_5px_#ec4899]"></span>
</button>
<div className="flex items-center gap-4 cursor-pointer hover:bg-white/5 py-1 px-2 rounded-full transition-colors">
<span className="text-base font-normal text-white/80 hidden sm:block">Jane Mitchell</span>
<img alt="Profile" className="w-10 h-10 rounded-full object-cover border border-white/20 shadow-md" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=128&amp;q=80"/>
<i className="w-4 h-4 text-white/50" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
</header>

<div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent shrink-0"></div>

<div className="flex-1 p-6 lg:p-8 overflow-y-auto [&amp;::-webkit-scrollbar]:hidden">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full auto-rows-min lg:auto-rows-[1fr]">

<div className="flex flex-col gap-6">

<div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6 relative group hover:bg-white/[0.04] transition-colors">
<div className="flex items-center justify-between mb-8">
<h2 className="text-xl font-normal tracking-tight text-white/90">Q2 Score</h2>
<i className="w-5 h-5 text-white/40" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>

<div className="space-y-5">

<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-base font-medium shadow-[0_0_15px_rgba(59,130,246,0.2)]">H</div>
<span className="w-14 text-base text-white/80 font-normal">Head</span>
<div className="flex-1 h-3 bg-black/40 rounded-full overflow-hidden border border-white/5">
<div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full w-[60%] shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>
</div>
</div>

<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-base font-medium shadow-[0_0_15px_rgba(168,85,247,0.2)]">H</div>
<span className="w-14 text-base text-white/80 font-normal">Heart</span>
<div className="flex-1 h-3 bg-black/40 rounded-full overflow-hidden border border-white/5">
<div className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full w-[72%] shadow-[0_0_10px_rgba(192,132,252,0.5)]"></div>
</div>
</div>

<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center text-base font-medium shadow-[0_0_15px_rgba(236,72,153,0.2)]">S</div>
<span className="w-14 text-base text-white/80 font-normal">Soul</span>
<div className="flex-1 h-3 bg-black/40 rounded-full overflow-hidden border border-white/5">
<div className="h-full bg-gradient-to-r from-pink-600 to-pink-400 rounded-full w-[85%] shadow-[0_0_10px_rgba(244,114,182,0.5)]"></div>
</div>
</div>
</div>

<div className="flex gap-3 mt-8">
<button className="flex-1 py-3 px-4 rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-200 flex items-center justify-between shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:bg-blue-500/20 transition-all">
<span className="text-base font-normal tracking-tight">H 61</span>
<i className="w-4 h-4 opacity-70" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
<button className="flex-1 py-3 px-4 rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-200 flex items-center justify-between shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:bg-purple-500/20 transition-all">
<span className="text-base font-normal tracking-tight">H 72</span>
<i className="w-4 h-4 opacity-70" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
<button className="flex-1 py-3 px-4 rounded-xl border border-pink-500/30 bg-pink-500/10 text-pink-200 flex items-center justify-between shadow-[0_0_20px_rgba(236,72,153,0.15)] hover:bg-pink-500/20 transition-all">
<span className="text-base font-normal tracking-tight">S 78</span>
<i className="w-4 h-4 opacity-70" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
</div>

<div className="flex items-center justify-between mt-6 px-2">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.5)]"></div>
<span className="text-sm text-white/50">Disengaged</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_5px_rgba(168,85,247,0.5)]"></div>
<span className="text-sm text-white/50">Reactive</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-pink-500 shadow-[0_0_5px_rgba(236,72,153,0.5)]"></div>
<span className="text-sm text-white/50">Flourishing</span>
</div>
</div>
</div>

<div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6 flex-1 flex flex-col justify-between group hover:bg-white/[0.04] transition-colors">
<h2 className="text-lg font-normal tracking-tight text-white/90 mb-4">Q2 Live Input Trends</h2>
<div className="grid grid-cols-4 gap-2 items-end">
<div>
<div className="flex items-center gap-2 mb-1">
<div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400"><i className="w-3 h-3" data-lucide="minus" strokeWidth="2"></i></div>
<span className="text-xl font-normal text-white">128</span>
</div>
<div className="flex items-center gap-1 text-blue-400 text-sm">
<i className="w-3 h-3 fill-current rotate-0" data-lucide="triangle" strokeWidth="2"></i>
<span>+24%</span>
</div>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-purple-400 border-b-[5px] border-b-transparent"></div>
<span className="text-xl font-normal text-white">137</span>
</div>
<div className="flex items-center gap-1 text-blue-400 text-sm">
<i className="w-3 h-3 fill-current rotate-0" data-lucide="triangle" strokeWidth="2"></i>
<span>+8%</span>
</div>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-purple-400 border-b-[5px] border-b-transparent"></div>
<span className="text-xl font-normal text-white">128</span>
</div>
<div className="flex items-center gap-1 text-purple-400 text-sm">
<i className="w-3 h-3 fill-current rotate-0" data-lucide="triangle" strokeWidth="2"></i>
<span>+5%</span>
</div>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<div className="w-0 h-0 border-b-[8px] border-b-pink-400 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent"></div>
<span className="text-xl font-normal text-white">143</span><span className="text-white/50 text-sm">›</span>
</div>
<div className="flex items-center gap-1 text-pink-400 text-sm">
<i className="w-3 h-3 fill-current rotate-0" data-lucide="triangle" strokeWidth="2"></i>
<span>+15%</span>
</div>
</div>
</div>
</div>

<div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6 flex-1 flex flex-col justify-center group hover:bg-white/[0.04] transition-colors">
<h2 className="text-lg font-normal tracking-tight text-white/90 mb-6">Q2 Live Input Trends</h2>
<div className="space-y-4">

<div className="flex items-center gap-3">
<div className="flex-1 h-5 rounded-md flex overflow-hidden bg-black/40 border border-white/5 shadow-inner">
<div className="h-full w-[60%] bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_10px_rgba(59,130,246,0.3)]"></div>
<div className="h-full w-[25%] bg-gradient-to-r from-purple-500 to-pink-500"></div>
<div className="h-full w-[15%] bg-gradient-to-r from-orange-400 to-yellow-400"></div>
</div>
<div className="flex items-baseline gap-1 w-20 justify-end">
<span className="text-base font-medium text-white/90">68%</span>
<span className="text-xs text-white/40">0.1%</span>
</div>
</div>

<div className="flex items-center gap-3">
<div className="flex-1 h-5 rounded-md flex overflow-hidden bg-black/40 border border-white/5 shadow-inner">
<div className="h-full w-[40%] bg-gradient-to-r from-blue-600/50 to-blue-400/50"></div>
<div className="h-full w-[35%] bg-gradient-to-r from-purple-600/50 to-purple-400/50"></div>
<div className="h-full w-[25%] bg-transparent"></div>
</div>
<div className="flex items-baseline gap-1 w-20 justify-end">
<span className="text-base font-medium text-white/90">21%</span>
<span className="text-xs text-white/40">0.21%</span>
</div>
</div>
</div>

<div className="flex items-center gap-6 mt-6">
<div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-500"></div><span className="text-sm text-white/60 font-normal">Positive</span></div>
<div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-orange-400"></div><span className="text-sm text-white/60 font-normal">Neutral</span></div>
<div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-pink-500"></div><span className="text-sm text-white/60 font-normal">Negative</span></div>
</div>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="h-[420px] bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col relative group hover:bg-white/[0.04] transition-colors">

<div className="absolute top-6 right-6 text-sm font-normal text-right z-20">
<span className="text-white/80">System Status: </span><span className="text-white font-medium">Stable</span>
<span className="text-white/30 mx-1">/</span>
<span className="text-white/60">Confidence </span><span className="text-white font-medium">0.82</span>
</div>

<div className="mt-8 flex-1 rounded-2xl bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-pink-900/30 border border-white/10 relative overflow-hidden flex flex-col p-6 shadow-inner">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:2rem_2rem] mix-blend-overlay"></div>
<div className="relative z-10 flex-1 flex flex-col">

<div className="absolute -top-4 -left-2 text-[8rem] font-medium tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-blue-500/20 to-pink-500/20 select-none">Q2</div>
<div className="mt-auto z-20">
<h3 className="text-6xl font-light tracking-tighter text-white drop-shadow-md">74</h3>
<p className="text-sm font-medium tracking-widest text-white/70 uppercase mt-1">Transitional</p>
</div>
</div>

<svg className="absolute inset-0 w-full h-full z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]" preserveaspectratio="none" viewbox="0 0 100 100">
<defs>
<lineargradient id="lineGrad" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#3b82f6"></stop>
<stop offset="50%" stop-color="#a855f7"></stop>
<stop offset="100%" stop-color="#fbcfe8"></stop>
</lineargradient>
</defs>

<path d="M 0 80 Q 40 80, 60 50 T 100 20" fill="none" stroke="url(#lineGrad)" strokeLinecap="round" strokeWidth="2"></path>

<circle className="shadow-[0_0_5px_white]" cx="60" cy="50" fill="white" r="2.5"></circle>
<circle className="shadow-[0_0_5px_white]" cx="80" cy="35" fill="white" r="2.5"></circle>
<circle className="shadow-[0_0_8px_white]" cx="98" cy="20" fill="white" r="3"></circle>
</svg>
</div>

<div className="flex items-end justify-between mt-6 shrink-0 px-2">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
<i className="w-4 h-4" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<span className="text-base text-white/80 font-normal">Mail</span>
</div>
<span className="text-2xl font-normal text-white">324</span>
</div>

<div className="flex items-center gap-6 mt-3 px-2">
<div className="flex items-center gap-1 text-blue-400 text-sm"><i className="w-3 h-3 fill-current" data-lucide="triangle" strokeWidth="2"></i><span>+24%</span></div>
<div className="flex items-center gap-1 text-blue-400 text-sm"><i className="w-3 h-3 fill-current" data-lucide="play" strokeWidth="2"></i><span>+8%</span></div>
<div className="flex items-center gap-1 text-pink-400 text-sm"><i className="w-3 h-3 fill-current" data-lucide="triangle" strokeWidth="2"></i><span>+15%</span></div>
</div>
<div className="flex items-center gap-8 mt-4 px-2 text-sm text-white/40 font-normal">
<span>Wk1</span><span>Wk2</span><span>Wk3</span><span>Wk4</span>
</div>
</div>

<div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6 flex-1 flex flex-col group hover:bg-white/[0.04] transition-colors">
<h2 className="text-lg font-normal tracking-tight text-white/90 mb-1">Q2 Live</h2>
<p className="text-sm text-white/50 font-normal mb-6 flex justify-between">
<span>Weekly Inputs / Guidance / Reports</span>
<span className="text-white font-medium">72%</span>
</p>

<div className="flex-1 relative min-h-[100px] flex items-end gap-2 z-10">

<div className="w-full flex items-end justify-around h-full absolute inset-0 pt-4">
<div className="w-8 h-[30%] bg-blue-500/20 rounded-t-sm border-t border-blue-400/30"></div>
<div className="w-8 h-[60%] bg-blue-500/30 rounded-t-sm border-t border-blue-400/40"></div>
<div className="w-8 h-[40%] bg-blue-500/20 rounded-t-sm border-t border-blue-400/30"></div>
<div className="w-8 h-[70%] bg-blue-500/40 rounded-t-sm border-t border-blue-400/50"></div>
<div className="w-8 h-[50%] bg-blue-500/20 rounded-t-sm border-t border-blue-400/30"></div>
<div className="w-8 h-[20%] bg-blue-500/10 rounded-t-sm border-t border-blue-400/20"></div>
</div>

<svg className="absolute inset-0 w-full h-full z-20 overflow-visible" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M 5 60 L 25 30 L 45 50 L 65 20 L 85 40 L 98 10" fill="none" stroke="#60a5fa" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>

<circle cx="5" cy="60" fill="white" r="2"></circle>
<circle cx="25" cy="30" fill="white" r="2"></circle>
<circle cx="45" cy="50" fill="white" r="2"></circle>
<circle cx="65" cy="20" fill="white" r="2"></circle>
<circle cx="85" cy="40" fill="white" r="2"></circle>
<circle className="shadow-[0_0_8px_#60a5fa]" cx="98" cy="10" fill="white" r="2.5"></circle>
</svg>
</div>
<div className="flex justify-between items-center mt-4 text-sm text-white/40 font-normal px-2">
<span>Wk1</span><span>Wk2</span><span>Wk3</span><span>Wk3</span><span>Wk4</span><span>Wk4</span>
</div>
</div>

<div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6 flex-1 flex flex-col justify-between group hover:bg-white/[0.04] transition-colors">
<h2 className="text-lg font-normal tracking-tight text-white/90 mb-4">Q2 Coach Usage Stats</h2>
<div className="grid grid-cols-4 gap-2 items-end">
<div>
<div className="flex items-center gap-2 mb-1">
<div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-medium text-xs">H</div>
<span className="text-xl font-normal text-white">128</span>
</div>
<div className="flex items-center gap-1 text-blue-400 text-sm">
<i className="w-3 h-3 fill-current" data-lucide="triangle" strokeWidth="2"></i><span>+24%</span>
</div>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-purple-400 border-b-[5px] border-b-transparent"></div>
<span className="text-xl font-normal text-white">137</span>
</div>
<div className="flex items-center gap-1 text-blue-400 text-sm">
<i className="w-3 h-3 fill-current" data-lucide="triangle" strokeWidth="2"></i><span>+8%</span>
</div>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-purple-400 border-b-[5px] border-b-transparent"></div>
<span className="text-xl font-normal text-white">128</span>
</div>
<div className="flex items-center gap-1 text-purple-400 text-sm">
<i className="w-3 h-3 fill-current" data-lucide="triangle" strokeWidth="2"></i><span>+5%</span>
</div>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<div className="w-0 h-0 border-b-[8px] border-b-pink-400 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent"></div>
<span className="text-xl font-normal text-white">143</span>
</div>
<div className="flex items-center gap-1 text-pink-400 text-sm">
<i className="w-3 h-3 fill-current" data-lucide="triangle" strokeWidth="2"></i><span>+18%</span>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="h-[420px] bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col group hover:bg-white/[0.04] transition-colors">
<h2 className="text-xl font-normal tracking-tight text-white/90 mb-1">Q2 Live</h2>
<div className="flex justify-between items-end mt-4 mb-2">
<span className="text-base text-white/70 font-normal">Q2 InDex Engagement Pulse</span>
<div className="flex items-center gap-2">
<span className="text-4xl font-light tracking-tighter text-white">76%</span>
<div className="w-4 h-4 rounded-full border-2 border-white/20"></div>
</div>
</div>

<div className="h-3 w-full bg-black/40 rounded-full overflow-hidden border border-white/5 relative mb-2">
<div className="absolute top-0 left-0 h-full w-[76%] bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
</div>
<div className="flex justify-end text-sm text-white/50 mb-8"><span className="bg-white/10 px-2 py-0.5 rounded text-xs">+2</span></div>

<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-4 text-base font-normal">
<div className="flex items-center gap-1 text-blue-400"><div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center"><i className="w-2.5 h-2.5 ml-0.5" data-lucide="play" strokeWidth="2"></i></div> Head</div>
<span className="text-white/80"><span className="text-purple-400 text-sm">▶</span> 118</span>
<span className="text-white/80"><span className="text-pink-400 text-sm">▶</span> 135</span>
<span className="text-white/80"><span className="text-purple-400 text-sm">▶</span> 152</span>
</div>
<div className="text-right">
<div className="text-2xl font-normal text-white">324</div>
<div className="flex items-center gap-1 text-sm text-blue-400 justify-end"><i className="w-3 h-3" data-lucide="code" strokeWidth="2"></i> 1,718</div>
</div>
</div>

<div className="flex-1 flex items-end justify-between gap-3 mt-auto relative pt-4 pb-2 border-b border-white/10">
<div className="w-12 h-[30%] bg-blue-500/40 rounded-t border-t border-blue-400/50 hover:bg-blue-400/60 transition-colors"></div>
<div className="w-12 h-[45%] bg-blue-500/50 rounded-t border-t border-blue-400/60 hover:bg-blue-400/70 transition-colors"></div>
<div className="w-12 h-[60%] bg-blue-500/60 rounded-t border-t border-blue-400/70 hover:bg-blue-400/80 transition-colors"></div>
<div className="w-12 h-[75%] bg-blue-500/70 rounded-t border-t border-blue-400/80 hover:bg-blue-400/90 transition-colors"></div>
<div className="w-12 h-[40%] bg-purple-500/40 rounded-t border-t border-purple-400/50 flex items-center justify-center text-white/50 text-xs hover:bg-purple-400/60 transition-colors">...</div>

<div className="absolute bottom-4 right-0 text-right text-xs text-white/40 leading-tight">
                                    Weekly Stall<br/><span className="text-sm text-white/60">1,718</span>
</div>
</div>

<div className="flex items-center justify-between mt-3 text-sm text-white/50 font-normal pr-16">
<span className="w-12 text-center">Wek 1</span>
<span className="w-12 text-center">Wek 2</span>
<span className="w-12 text-center">Wek 3</span>
<span className="w-12 text-center">Wk 4</span>
<div className="w-12"></div>
</div>

<div className="flex items-center gap-6 mt-4 text-sm px-2">
<div className="flex items-center gap-2"><i className="w-4 h-4 text-blue-400" data-lucide="tv" strokeWidth="1.5"></i><div className="flex items-center gap-1 text-blue-400"><i className="w-3 h-3 fill-current" data-lucide="triangle" strokeWidth="2"></i><span>+24%</span></div></div>
<div className="flex items-center gap-1 text-blue-400"><i className="w-3 h-3 fill-current" data-lucide="triangle" strokeWidth="2"></i><span>+8%</span></div>
<div className="flex items-center gap-1 text-blue-400"><i className="w-3 h-3 fill-current" data-lucide="triangle" strokeWidth="2"></i><span>+5%</span></div>
</div>
</div>

<div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6 flex-1 flex flex-col group hover:bg-white/[0.04] transition-colors">
<h2 className="text-lg font-normal tracking-tight text-white/90 mb-6">Q2 Communicator</h2>
<div className="flex justify-between items-end flex-1 mb-4">

<div className="flex flex-col items-center gap-3">
<div className="relative w-[5.5rem] h-[5.5rem] flex items-center justify-center">
<div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md"></div>
<svg className="w-full h-full transform -rotate-90 z-10" viewbox="0 0 36 36">
<circle className="stroke-white/10" cx="18" cy="18" fill="none" r="16" strokeWidth="2"></circle>
<circle className="stroke-blue-400" cx="18" cy="18" fill="none" r="16" stroke-dasharray="100" stroke-dashoffset="2" strokeLinecap="round" strokeWidth="2.5"></circle>
</svg>
<span className="absolute text-2xl font-light text-white z-20">98<span className="text-sm text-white/60">%</span></span>
</div>
<div className="text-center">
<p className="text-sm font-normal text-white/60 leading-tight">Notification<br/>Delivery</p>
<div className="flex items-center justify-center gap-1 text-blue-400 text-xs mt-1"><i className="w-3 h-3 fill-current" data-lucide="triangle" strokeWidth="2"></i>+21%</div>
</div>
</div>

<div className="flex flex-col items-center gap-3">
<div className="relative w-[6.5rem] h-[6.5rem] flex items-center justify-center -mt-4">

<div className="absolute top-0 inset-x-0 h-1/2 bg-purple-500/20 rounded-t-full blur-xl"></div>
<svg className="w-full h-full z-10" viewbox="0 0 100 100">

<path className="stroke-white/10" d="M 10 70 A 40 40 0 1 1 90 70" fill="none" strokeLinecap="round" strokeWidth="6"></path>

<path className="stroke-purple-400" d="M 10 70 A 40 40 0 1 1 90 70" fill="none" stroke-dasharray="200" stroke-dashoffset="50" strokeLinecap="round" strokeWidth="6"></path>
</svg>
<div className="absolute flex flex-col items-center mt-2 z-20">
<span className="text-3xl font-normal text-white tracking-tight">72</span>
<span className="text-xs text-white/50 border-t border-white/10 pt-1 mt-1">78 / 100</span>
</div>
</div>
<div className="text-center">
<p className="text-xs font-normal text-white/60 leading-tight">Communication<br/>Quality Score</p>
<div className="h-1.5 w-16 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mt-2"></div>
<div className="flex items-center justify-center gap-1 text-purple-400 text-xs mt-1"><i className="w-3 h-3 fill-current" data-lucide="triangle" strokeWidth="2"></i>+15%</div>
</div>
</div>

<div className="flex flex-col items-center gap-3">
<div className="relative w-[5.5rem] h-[5.5rem] flex items-center justify-center">
<div className="absolute inset-0 rounded-full bg-pink-500/20 blur-md"></div>
<svg className="w-full h-full transform -rotate-90 z-10" viewbox="0 0 36 36">
<circle className="stroke-white/10" cx="18" cy="18" fill="none" r="16" strokeWidth="2"></circle>
<circle className="stroke-pink-400" cx="18" cy="18" fill="none" r="16" stroke-dasharray="100" stroke-dashoffset="9" strokeLinecap="round" strokeWidth="2.5"></circle>
</svg>
<span className="absolute text-2xl font-light text-white z-20">91<span className="text-sm text-white/60">%</span></span>
</div>
<div className="text-center">
<p className="text-sm font-normal text-white/60 leading-tight">Leadership<br/>Responsiveness</p>
<div className="flex items-center justify-center gap-1 text-pink-400 text-xs mt-1"><i className="w-3 h-3 fill-current" data-lucide="triangle" strokeWidth="2"></i>+12%</div>
</div>
</div>
</div>
</div>

<div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6 flex-1 flex flex-col justify-between group hover:bg-white/[0.04] transition-colors">
<h2 className="text-lg font-normal tracking-tight text-white/90 mb-4">Q2 Administrator</h2>
<div className="flex items-end justify-between">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400"><i className="w-3.5 h-3.5" data-lucide="link" strokeWidth="2"></i></div>
<span className="text-2xl font-normal text-white">1,825</span>
</div>
<div className="text-sm text-white/60 font-normal pl-8 flex items-center gap-1"><i className="w-3 h-3" data-lucide="chevron-down" strokeWidth="1.5"></i> Directory</div>
<div className="flex items-center gap-1 text-blue-400 text-xs pl-8 mt-1"><i className="w-3 h-3 fill-current" data-lucide="triangle" strokeWidth="2"></i>+21%</div>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-xs font-medium">A</div>
<span className="text-2xl font-normal text-white">19</span>
</div>
<div className="text-sm text-white/60 font-normal pl-8 flex items-center gap-1"><i className="w-3 h-3" data-lucide="chevron-down" strokeWidth="1.5"></i> Initiatives</div>
<div className="flex items-center gap-1 text-purple-400 text-xs pl-8 mt-1"><i className="w-3 h-3 fill-current" data-lucide="triangle" strokeWidth="2"></i>+15%</div>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400"><i className="w-3.5 h-3.5" data-lucide="check-circle-2" strokeWidth="2"></i></div>
<span className="text-2xl font-normal text-white tracking-tight">&lt; 92%</span>
</div>
<div className="text-sm text-white/60 font-normal pl-8 flex items-start gap-1"><i className="w-3 h-3 mt-1" data-lucide="minus" strokeWidth="2"></i> <span className="leading-tight">System<br/>Configurtion</span></div>
<div className="flex items-center gap-1 text-blue-400 text-xs pl-8 mt-1"><i className="w-3 h-3 fill-current" data-lucide="triangle" strokeWidth="2"></i>+12%</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
