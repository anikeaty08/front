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



        // Initialize Lucide icons
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
      

<div className="fixed inset-0 z-0 pointer-events-none">

<div className="absolute inset-0 bg-gradient-to-br from-[#0c051f] via-[#1a0a3a] to-[#3a0a4a]"></div>

<div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] rounded-full bg-pink-600/15 blur-[120px]"></div>

<div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/15 blur-[120px]"></div>

<div className="absolute top-[15%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
<div className="absolute top-[15%] left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent blur-[2px]"></div>

<div className="absolute top-[20%] left-[10%] w-1 h-1 bg-white rounded-full shadow-[0_0_10px_2px_white]"></div>
<div className="absolute top-[40%] right-[15%] w-1.5 h-1.5 bg-blue-200 rounded-full shadow-[0_0_12px_2px_#60a5fa] opacity-70"></div>
<div className="absolute bottom-[30%] left-[5%] w-[3px] h-[3px] bg-pink-200 rounded-full shadow-[0_0_8px_2px_#f472b6] opacity-60"></div>
<div className="absolute top-[10%] right-[30%] w-1 h-1 bg-white rounded-full shadow-[0_0_5px_1px_white] opacity-40"></div>
</div>

<main className="relative z-10 mx-auto w-[98%] max-w-[1700px] my-6 min-h-[90vh] rounded-[2rem] bg-white/[0.02] backdrop-blur-2xl border border-white/[0.08] shadow-[0_0_60px_-15px_rgba(139,92,246,0.3)] flex flex-col overflow-hidden before:absolute before:inset-0 before:rounded-[2rem] before:border before:border-white/[0.05] before:pointer-events-none">

<div className="absolute inset-0 rounded-[2rem] shadow-[inset_0_0_40px_rgba(255,255,255,0.02)] pointer-events-none"></div>

<header className="px-8 pt-8 pb-4 flex flex-col lg:flex-row items-center justify-between gap-6 relative z-20">

<div className="flex items-center gap-4">
<div className="flex items-center">
<span className="text-4xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">Q</span>
<span className="text-4xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-purple-600 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)] -ml-1">2</span>
</div>
<div className="h-8 w-[1px] bg-white/10 mx-2"></div>
<h1 className="text-2xl font-normal tracking-tight text-white">The Q2 Way</h1>
</div>

<nav className="flex-1 w-full lg:w-auto relative flex justify-center border-b border-white/5 pb-2">
<div className="flex items-center gap-x-10 text-base font-normal text-slate-400">
<a className="relative text-white transition-colors" href="#">
                        Q2 Live
                        <div className="absolute -bottom-[9px] left-0 right-0 h-[2px] bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]"></div>
</a>
<a className="hover:text-white transition-colors" href="#">Q2 Analyst</a>
<a className="hover:text-white transition-colors" href="#">Q2 Architect</a>
<a className="hover:text-white transition-colors" href="#">Q2 Coach</a>
<a className="hover:text-white transition-colors" href="#">Q2 Communicator</a>
<a className="hover:text-white transition-colors" href="#">Q2 Administrator</a>
</div>

<div className="absolute bottom-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</nav>

<div className="flex items-center gap-6">
<button className="relative text-slate-300 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="bell" strokeWidth="1.5"></i>
<span className="absolute top-0 right-0 w-2 h-2 bg-pink-500 rounded-full shadow-[0_0_5px_rgba(236,72,153,0.8)] border border-[#1a0a3a]"></span>
</button>
<div className="flex items-center gap-3 cursor-pointer group">
<span className="text-base font-normal text-slate-200 group-hover:text-white transition-colors">Jane Mitchell</span>
<img alt="Jane Mitchell" className="w-10 h-10 rounded-full border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] object-cover" src="https://i.pravatar.cc/150?img=47"/>
<i className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
</header>

<div className="flex-1 p-8 pt-4 grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">

<div className="flex flex-col gap-6">

<div className="bg-white/[0.03] border border-white/[0.08] rounded-[1.5rem] p-6 backdrop-blur-md shadow-lg relative overflow-hidden group">

<div className="flex justify-between items-center mb-6">
<h2 className="text-xl font-normal tracking-tight text-white flex items-center gap-2">
                            Q2 Score <i className="w-4 h-4 text-slate-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</h2>

</div>

<div className="flex flex-col gap-5 mb-8">

<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300 font-medium shadow-[0_0_10px_rgba(59,130,246,0.2)]">H</div>
<span className="text-base text-slate-300 w-12">Head</span>
<div className="flex-1 h-3 bg-white/5 rounded-full overflow-hidden relative border border-white/5">
<div className="absolute top-0 left-0 h-full w-[65%] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
</div>
</div>

<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300 font-medium shadow-[0_0_10px_rgba(168,85,247,0.2)]">H</div>
<span className="text-base text-slate-300 w-12">Heart</span>
<div className="flex-1 h-3 bg-white/5 rounded-full overflow-hidden relative border border-white/5">
<div className="absolute top-0 left-0 h-full w-[80%] bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
</div>
</div>

<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-pink-500/20 border border-pink-400/30 flex items-center justify-center text-pink-300 font-medium shadow-[0_0_10px_rgba(236,72,153,0.2)]">S</div>
<span className="text-base text-slate-300 w-12">Soul</span>
<div className="flex-1 h-3 bg-white/5 rounded-full overflow-hidden relative border border-white/5">
<div className="absolute top-0 left-0 h-full w-[85%] bg-gradient-to-r from-fuchsia-400 to-pink-500 rounded-full shadow-[0_0_10px_rgba(236,72,153,0.5)]"></div>
</div>
</div>
</div>

<div className="flex gap-4 mb-6">
<button className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-500/30 to-blue-400/10 border border-blue-400/40 flex items-center justify-between text-blue-100 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all">
<span className="text-lg font-medium">H 61</span>
<i className="w-4 h-4 opacity-70" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
<button className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-purple-500/30 to-purple-400/10 border border-purple-400/40 flex items-center justify-between text-purple-100 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all">
<span className="text-lg font-medium">H 72</span>
<i className="w-4 h-4 opacity-70" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
<button className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-pink-500/30 to-pink-400/10 border border-pink-400/40 flex items-center justify-between text-pink-100 shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_25px_rgba(236,72,153,0.5)] transition-all">
<span className="text-lg font-medium">S 78</span>
<i className="w-4 h-4 opacity-70" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
</div>

<div className="flex justify-between items-center text-sm border-t border-white/5 pt-4">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_5px_rgba(96,165,250,0.8)]"></div>
<span className="text-slate-400">Disengaged</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_5px_rgba(192,132,252,0.8)]"></div>
<span className="text-slate-400">Reactive</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-pink-400 shadow-[0_0_5px_rgba(244,114,182,0.8)]"></div>
<span className="text-slate-400">Flourishing</span>
</div>
</div>
</div>

<div className="bg-white/[0.03] border border-white/[0.08] rounded-[1.5rem] p-6 backdrop-blur-md shadow-lg flex-1 flex flex-col justify-center">
<h3 className="text-lg font-normal text-white mb-4">Q2 Live Input Trends</h3>
<div className="flex justify-between items-end mb-2">
<div className="flex items-center gap-1 text-2xl font-normal text-white">
<div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm mr-1">-</div>
                            128
                        </div>
<div className="flex items-center gap-1 text-2xl font-normal text-slate-300">
<i className="w-4 h-4 text-purple-400 fill-purple-400" data-lucide="play" strokeWidth="1.5"></i> 137
                        </div>
<div className="flex items-center gap-1 text-2xl font-normal text-slate-300">
<i className="w-4 h-4 text-pink-400 fill-pink-400" data-lucide="play" strokeWidth="1.5"></i> 128
                        </div>
<div className="flex items-center gap-1 text-2xl font-normal text-white">
<i className="w-4 h-4 text-pink-500 fill-pink-500" data-lucide="triangle" strokeWidth="1.5"></i> 143 <span className="text-slate-500 text-lg ml-1">&gt;</span>
</div>
</div>
<div className="flex justify-between items-center text-sm text-slate-400 pl-1">
<span className="flex items-center gap-1 text-blue-400"><i className="w-3 h-3 fill-current" data-lucide="triangle" strokeWidth="1.5"></i> +24%</span>
<span className="flex items-center gap-1 text-blue-400"><i className="w-3 h-3 fill-current" data-lucide="triangle" strokeWidth="1.5"></i> +8%</span>
<span className="flex items-center gap-1 text-purple-400"><i className="w-3 h-3 fill-current" data-lucide="triangle" strokeWidth="1.5"></i> +5%</span>
<span className="flex items-center gap-1 text-pink-400"><i className="w-3 h-3 fill-current" data-lucide="triangle" strokeWidth="1.5"></i> +15%</span>
</div>
</div>

<div className="bg-white/[0.03] border border-white/[0.08] rounded-[1.5rem] p-6 backdrop-blur-md shadow-lg flex-1 flex flex-col justify-center">
<h3 className="text-lg font-normal text-white mb-4">Q2 Live Input Trends</h3>
<div className="space-y-4 mb-4">
<div className="flex items-center gap-4">
<div className="flex-1 h-5 rounded-full flex overflow-hidden border border-white/5">
<div className="w-[68%] bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] relative">
<div className="absolute inset-0 bg-white/20 w-1/2 blur-md"></div>
</div>
<div className="w-[32%] bg-gradient-to-r from-orange-300 to-pink-400 opacity-80"></div>
</div>
<div className="w-16 text-right">
<span className="text-lg font-normal text-white">68%</span>
<span className="text-xs text-slate-500 ml-1">0.1 %</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex-1 h-5 rounded-full flex overflow-hidden border border-white/5">
<div className="w-[21%] bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
<div className="w-[79%] bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 opacity-80"></div>
</div>
<div className="w-16 text-right">
<span className="text-lg font-normal text-white">21%</span>
<span className="text-xs text-slate-500 ml-1">0.21 %</span>
</div>
</div>
</div>
<div className="flex gap-6 items-center text-sm mt-2">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_5px_rgba(96,165,250,0.8)]"></div>
<span className="text-slate-400">Positive</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-orange-300 shadow-[0_0_5px_rgba(253,186,116,0.8)]"></div>
<span className="text-slate-400">Neutral</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-pink-500 shadow-[0_0_5px_rgba(236,72,153,0.8)]"></div>
<span className="text-slate-400">Negative</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="flex justify-end items-center gap-4 text-sm text-slate-300 px-2 pt-2 pb-1">
<span>System Status: <span className="text-white font-medium">Stable</span></span>
<span className="w-[1px] h-3 bg-white/20"></span>
<span>Confidence <span className="text-white font-medium">0.82</span></span>
</div>

<div className="bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/[0.1] rounded-[1.5rem] p-1 backdrop-blur-md shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] relative overflow-hidden flex-1 flex flex-col group">

<div className="bg-[#120a2e]/60 w-full h-full rounded-[1.35rem] p-6 flex flex-col relative overflow-hidden">

<div className="flex flex-col relative z-10 mb-8 mt-2">
<div className="flex items-center mb-2">
<span className="text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">Q</span>
<span className="text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-purple-600 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)] -ml-1">2</span>
</div>
<div className="text-6xl font-normal tracking-tight text-white leading-none mt-2 mb-1">74</div>
<div className="text-sm tracking-[0.2em] text-slate-400 font-medium uppercase">Transitional</div>
</div>

<div className="absolute inset-0 top-[20%] z-0 pointer-events-none opacity-80">

<div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-purple-500/10 to-pink-500/5 [clip-path:polygon(0_100%,100%_100%,100%_20%,0_80%)]"></div>

<div className="absolute inset-0 flex flex-col justify-end pb-16">
<div className="w-full h-[1px] bg-white/5 mb-8"></div>
<div className="w-full h-[1px] bg-white/5 mb-8"></div>
<div className="w-full h-[1px] bg-white/5 mb-8"></div>
</div>
<svg className="w-full h-full absolute inset-0" preserveaspectratio="none" viewbox="0 0 100 100">
<defs>
<lineargradient id="lineGrad" x1="0%" x2="100%" y1="100%" y2="0%">
<stop offset="0%" stop-color="#3b82f6"></stop>
<stop offset="50%" stop-color="#a855f7"></stop>
<stop offset="100%" stop-color="#ec4899"></stop>
</lineargradient>
<filter height="140%" id="glow" width="140%" x="-20%" y="-20%">
<fegaussianblur result="blur" stddeviation="2"></fegaussianblur>
<fecomposite in="SourceGraphic" in2="blur" operator="over"></fecomposite>
</filter>
</defs>

<path d="M 0,80 C 30,80 50,60 70,40 S 90,20 100,15" fill="none" filter="url(#glow)" stroke="url(#lineGrad)" strokeWidth="1.5"></path>

<circle cx="30" cy="72" fill="white" filter="url(#glow)" r="2"></circle>
<circle cx="50" cy="55" fill="white" filter="url(#glow)" r="2"></circle>
<circle cx="70" cy="40" fill="white" filter="url(#glow)" r="2"></circle>
<circle cx="95" cy="18" fill="white" filter="url(#glow)" r="2"></circle>
</svg>
</div>

<div className="mt-auto relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 flex flex-col gap-3">
<div className="flex justify-between items-center">
<div className="flex items-center gap-2 text-white">
<div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
<i className="w-3 h-3 text-blue-400" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<span className="text-base font-normal">Mail</span>
</div>
<span className="text-2xl font-normal text-white">324</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="flex items-center gap-1 text-blue-400"><i className="w-3 h-3 fill-current" data-lucide="triangle" strokeWidth="1.5"></i> +24%</span>
<span className="flex items-center gap-1 text-blue-400"><i className="w-3 h-3 fill-current" data-lucide="play" strokeWidth="1.5"></i> +8%</span>
<span className="flex items-center gap-1 text-pink-400"><i className="w-3 h-3 fill-current" data-lucide="triangle" strokeWidth="1.5"></i> +15%</span>
<span></span> 
</div>
<div className="flex justify-between items-center text-xs text-slate-500 pt-2 border-t border-white/5">
<span>Wk1</span>
<span>Wk2</span>
<span>Wk3</span>
<span>Wk4</span>
</div>
</div>
</div>
</div>

<div className="bg-white/[0.03] border border-white/[0.08] rounded-[1.5rem] p-6 backdrop-blur-md shadow-lg">
<h3 className="text-lg font-normal text-white mb-1">Q2 Live</h3>
<div className="flex justify-between items-baseline mb-6">
<span className="text-sm text-slate-400">Weekly Inputs / Guidance / Reports</span>
<span className="text-lg font-normal text-white">72%</span>
</div>
<div className="relative h-24 mb-6">

<div className="absolute inset-0 flex items-end justify-between px-2 gap-2">
<div className="w-full max-w-[24px] h-[30%] bg-blue-500/40 rounded-t-sm relative group hover:bg-blue-400/60 transition-colors"></div>
<div className="w-full max-w-[24px] h-[40%] bg-blue-500/40 rounded-t-sm relative group hover:bg-blue-400/60 transition-colors"></div>
<div className="w-full max-w-[24px] h-[60%] bg-blue-500/40 rounded-t-sm relative group hover:bg-blue-400/60 transition-colors"></div>
<div className="w-full max-w-[24px] h-[55%] bg-blue-500/40 rounded-t-sm relative group hover:bg-blue-400/60 transition-colors"></div>
<div className="w-full max-w-[24px] h-[80%] bg-blue-500/40 rounded-t-sm relative group hover:bg-blue-400/60 transition-colors"></div>
<div className="w-full max-w-[24px] h-[70%] bg-blue-500/40 rounded-t-sm relative group hover:bg-blue-400/60 transition-colors"></div>
</div>

<svg className="w-full h-full absolute inset-0 pointer-events-none" preserveaspectratio="none" viewbox="0 0 100 100">
<path className="drop-shadow-[0_0_5px_rgba(96,165,250,0.8)]" d="M 5,80 L 20,70 L 40,50 L 60,55 L 80,25 L 95,30" fill="none" stroke="#60a5fa" strokeWidth="1.5"></path>
<circle cx="5" cy="80" fill="white" r="1.5"></circle>
<circle cx="20" cy="70" fill="white" r="1.5"></circle>
<circle cx="40" cy="50" fill="white" r="1.5"></circle>
<circle cx="60" cy="55" fill="white" r="1.5"></circle>
<circle cx="80" cy="25" fill="white" r="1.5"></circle>
<circle cx="95" cy="30" fill="white" r="1.5"></circle>
</svg>
</div>
<div className="flex justify-between items-center text-xs text-slate-500 px-2">
<span>Wk1</span>
<span>Wk2</span>
<span>Wk3</span>
<span>Wk3</span>
<span>Wk4</span>
<span>Wk4</span>
</div>
</div>

<div className="bg-white/[0.03] border border-white/[0.08] rounded-[1.5rem] p-6 backdrop-blur-md shadow-lg">
<h3 className="text-lg font-normal text-white mb-4">Q2 Coach Usage Stats</h3>
<div className="flex justify-between items-end mb-2">
<div className="flex items-center gap-1 text-2xl font-normal text-white">
<div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm mr-1">H</div>
                            128
                        </div>
<div className="flex items-center gap-1 text-2xl font-normal text-slate-300">
<i className="w-4 h-4 text-purple-400 fill-purple-400" data-lucide="play" strokeWidth="1.5"></i> 137
                        </div>
<div className="flex items-center gap-1 text-2xl font-normal text-slate-300">
<i className="w-4 h-4 text-purple-400 fill-purple-400" data-lucide="play" strokeWidth="1.5"></i> 128
                        </div>
<div className="flex items-center gap-1 text-2xl font-normal text-white">
<i className="w-4 h-4 text-pink-500 fill-pink-500" data-lucide="triangle" strokeWidth="1.5"></i> 143
                        </div>
</div>
<div className="flex justify-between items-center text-sm text-slate-400 pl-1">
<span className="flex items-center gap-1 text-blue-400"><i className="w-3 h-3 fill-current" data-lucide="triangle" strokeWidth="1.5"></i> +24%</span>
<span className="flex items-center gap-1 text-blue-400"><i className="w-3 h-3 fill-current" data-lucide="triangle" strokeWidth="1.5"></i> +8%</span>
<span className="flex items-center gap-1 text-purple-400"><i className="w-3 h-3 fill-current" data-lucide="triangle" strokeWidth="1.5"></i> +5%</span>
<span className="flex items-center gap-1 text-pink-400"><i className="w-3 h-3 fill-current" data-lucide="triangle" strokeWidth="1.5"></i> +18%</span>
</div>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="bg-gradient-to-br from-white/[0.06] to-white/[0.01] border border-white/[0.1] rounded-[1.5rem] p-6 backdrop-blur-md shadow-lg relative overflow-hidden group">

<div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-pink-400/50 to-transparent"></div>
<h3 className="text-xl font-normal text-white tracking-tight mb-2">Q2 Live</h3>
<div className="flex justify-between items-center mb-6">
<span className="text-base text-blue-300 font-medium">Q2 InDex Engagement Pulse</span>
<div className="flex items-center gap-2">
<span className="text-3xl font-normal text-white tracking-tight">76%</span>
<div className="w-4 h-4 rounded-full border-2 border-slate-500 flex items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div>
</div>
</div>
</div>

<div className="flex items-center gap-3 mb-8">
<div className="flex-1 h-3 bg-white/5 rounded-full overflow-hidden border border-white/5">
<div className="h-full w-[76%] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
</div>
<span className="text-sm text-slate-400">+2</span>
<div className="w-8 h-3 bg-white/10 rounded-full border border-white/5"></div>
</div>

<div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
<div className="flex gap-4 items-center">
<div className="flex items-center gap-2 text-slate-300">
<i className="w-4 h-4 text-blue-400" data-lucide="play-circle" strokeWidth="1.5"></i> Head
                            </div>
<div className="flex items-center gap-1 text-lg font-normal text-white">
<i className="w-3 h-3 text-purple-400 fill-purple-400" data-lucide="play" strokeWidth="1.5"></i> 118
                            </div>
<div className="flex items-center gap-1 text-lg font-normal text-slate-300">
<span className="w-3 h-3 bg-pink-400/20 flex items-center justify-center rounded-sm"><div className="w-1 h-1 bg-pink-400 rounded-full"></div></span> 135
                            </div>
<div className="flex items-center gap-1 text-lg font-normal text-slate-300">
<i className="w-3 h-3 text-purple-400 fill-purple-400" data-lucide="play" strokeWidth="1.5"></i> 152
                            </div>
</div>
<div className="text-right flex flex-col items-end">
<span className="text-2xl font-normal text-white">324</span>
<div className="flex items-center gap-1 text-xs text-slate-400 mt-1">
<i className="w-3 h-3 text-blue-400" data-lucide="code" strokeWidth="1.5"></i> 1,718
                            </div>
<span className="text-[10px] text-slate-500 leading-tight">Week1, Stat<br/>1,718</span>
</div>
</div>

<div className="flex items-end justify-between h-20 mb-2 relative">

<div className="flex items-end gap-2 h-full w-[60%] border-b border-white/10 pb-1">
<div className="w-full h-[30%] bg-blue-500/80 rounded-sm shadow-[0_0_8px_rgba(59,130,246,0.4)]"></div>
<div className="w-full h-[40%] bg-blue-500/80 rounded-sm shadow-[0_0_8px_rgba(59,130,246,0.4)]"></div>
<div className="w-full h-[60%] bg-blue-500/80 rounded-sm shadow-[0_0_8px_rgba(59,130,246,0.4)]"></div>
<div className="w-full h-[50%] bg-blue-500/80 rounded-sm shadow-[0_0_8px_rgba(59,130,246,0.4)] relative flex items-center justify-center">
<span className="text-[10px] text-white absolute -bottom-4">...</span>
</div>
</div>
</div>
<div className="flex justify-between items-center text-xs text-slate-500 w-[60%] mb-4">
<span>Wek 1</span>
<span>Wek 2</span>
<span>Wek 3</span>
<span>Wk 4</span>
</div>
<div className="flex gap-4 items-center text-sm bg-white/5 rounded-lg p-2 border border-white/5 w-max">
<div className="flex items-center gap-1"><i className="w-3 h-3 text-blue-400" data-lucide="coffee" strokeWidth="1.5"></i> <div className="w-2 h-2 bg-blue-500 rounded-sm"></div></div>
<span className="flex items-center gap-1 text-blue-400"><i className="w-3 h-3 fill-current" data-lucide="triangle" strokeWidth="1.5"></i> +24%</span>
<span className="flex items-center gap-1 text-purple-400"><i className="w-3 h-3 fill-current" data-lucide="triangle" strokeWidth="1.5"></i> +8%</span>
<span className="flex items-center gap-1 text-pink-400"><i className="w-3 h-3 fill-current" data-lucide="triangle" strokeWidth="1.5"></i> +5%</span>
</div>
</div>

<div className="bg-white/[0.03] border border-white/[0.08] rounded-[1.5rem] p-6 backdrop-blur-md shadow-lg flex-1">
<h3 className="text-xl font-normal text-white tracking-tight mb-6">Q2 Communicator</h3>
<div className="flex justify-between items-end gap-2">

<div className="flex flex-col items-center flex-1">
<div className="relative w-20 h-20 mb-3">
<svg className="w-full h-full transform -rotate-90">
<circle cx="40" cy="40" fill="none" r="34" stroke="rgba(255,255,255,0.05)" strokeWidth="6"></circle>

<circle className="drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" cx="40" cy="40" fill="none" r="34" stroke="#3b82f6" stroke-dasharray="213" stroke-dashoffset="4" strokeLinecap="round" strokeWidth="6"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-xl font-normal text-white">98<span className="text-sm">%</span></span>
</div>
</div>
<span className="text-sm text-slate-300 text-center leading-tight mb-2">Notification<br/>Delivery</span>
<span className="text-xs flex items-center gap-1 text-blue-400"><i className="w-3 h-3 fill-current" data-lucide="triangle" strokeWidth="1.5"></i> +21%</span>
</div>

<div className="flex flex-col items-center flex-1 relative top-[-10px]">

<div className="absolute top-0 w-24 h-24 bg-purple-500/10 rounded-full blur-xl -z-10"></div>
<div className="relative w-24 h-24 mb-3">

<svg className="w-full h-full transform -rotate-180" viewbox="0 0 100 100">
<path d="M 20,80 A 40,40 0 1,1 80,80" fill="none" stroke="rgba(255,255,255,0.05)" strokeLinecap="round" strokeWidth="8"></path>
<path className="drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" d="M 20,80 A 40,40 0 1,1 80,80" fill="none" stroke="url(#purplePinkGrad)" stroke-dasharray="188" stroke-dashoffset="50" strokeLinecap="round" strokeWidth="8"></path>
<defs>
<lineargradient id="purplePinkGrad" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#a855f7"></stop>
<stop offset="100%" stop-color="#ec4899"></stop>
</lineargradient>
</defs>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center pt-2">
<span className="text-3xl font-normal text-white">72</span>
<span className="text-[10px] text-slate-400">78 / 100</span>
</div>
</div>
<span className="text-xs text-slate-400 text-center leading-tight mb-2 uppercase tracking-wide">Communication<br/>Quality Score</span>

<div className="w-12 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mb-2"></div>
<span className="text-xs flex items-center gap-1 text-purple-400"><i className="w-3 h-3 fill-current" data-lucide="triangle" strokeWidth="1.5"></i> +15%</span>
</div>

<div className="flex flex-col items-center flex-1">
<div className="relative w-20 h-20 mb-3">
<svg className="w-full h-full transform -rotate-90">
<circle cx="40" cy="40" fill="none" r="34" stroke="rgba(255,255,255,0.05)" strokeWidth="6"></circle>

<circle className="drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]" cx="40" cy="40" fill="none" r="34" stroke="#ec4899" stroke-dasharray="213" stroke-dashoffset="19" strokeLinecap="round" strokeWidth="6"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-xl font-normal text-white">91<span className="text-sm">%</span></span>
</div>
</div>
<span className="text-sm text-slate-300 text-center leading-tight mb-2">Leadership<br/>Responsiveness</span>
<span className="text-xs flex items-center gap-1 text-pink-400"><i className="w-3 h-3 fill-current" data-lucide="triangle" strokeWidth="1.5"></i> +12%</span>
</div>
</div>
</div>

<div className="bg-white/[0.03] border border-white/[0.08] rounded-[1.5rem] p-6 backdrop-blur-md shadow-lg">
<h3 className="text-xl font-normal text-white tracking-tight mb-4">Q2 Administrator</h3>
<div className="flex justify-between items-center">

<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.3)]">
<i className="w-3 h-3" data-lucide="link-2" strokeWidth="2"></i>
</div>
<span className="text-2xl font-normal text-white">1,825</span>
</div>
<div className="flex items-center gap-1 text-sm text-slate-400 ml-8">
<i className="w-3 h-3" data-lucide="chevron-down" strokeWidth="1.5"></i> Directory
                            </div>
<span className="text-xs flex items-center gap-1 text-blue-400 ml-8 mt-1"><i className="w-3 h-3 fill-current" data-lucide="triangle" strokeWidth="1.5"></i> +21%</span>
</div>

<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-medium shadow-[0_0_10px_rgba(168,85,247,0.3)]">
                                    A
                                </div>
<span className="text-2xl font-normal text-white">19</span>
</div>
<div className="flex items-center gap-1 text-sm text-slate-400 ml-8">
<i className="w-3 h-3" data-lucide="activity" strokeWidth="1.5"></i> Initiatives
                            </div>
<span className="text-xs flex items-center gap-1 text-purple-400 ml-8 mt-1"><i className="w-3 h-3 fill-current" data-lucide="triangle" strokeWidth="1.5"></i> +15%</span>
</div>

<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center shadow-[0_0_10px_rgba(236,72,153,0.3)]">
<i className="w-4 h-4" data-lucide="check-circle-2" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-normal text-slate-300">&lt;</span>
<span className="text-2xl font-normal text-white">92%</span>
</div>
<div className="flex items-center gap-1 text-sm text-slate-400 ml-8 leading-tight">
<span className="w-2 h-px bg-slate-400"></span> System<br/>Configurtion
                            </div>
<span className="text-xs flex items-center gap-1 text-pink-400 ml-8 mt-1"><i className="w-3 h-3 fill-current" data-lucide="triangle" strokeWidth="1.5"></i> +12%</span>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
