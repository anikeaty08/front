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
darkMode: 'class',
theme: {
extend: {
animation: {
'fade-in': 'fadeIn 0.5s ease-out forwards',
'blob': 'blob 10s infinite',
'scan': 'scan 8s linear infinite',
'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'slide-up-delayed':
'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(30px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
scan: {
'0%': { transform: 'translateY(-100%)' },
'100%': { transform: 'translateY(100%)' },
},
},
},
},
};



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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#ff5702]/[0.03] dark:bg-[#050505] transition-colors duration-500">

<div className="ambient-glow">
<div className="glow-blob bg-[#ff5702]/50 dark:bg-[#ff5702]/30 w-[600px] h-[600px] top-[-20%] left-[-10%] mix-blend-multiply dark:mix-blend-screen animate-blob"></div>
<div className="glow-blob bg-[#ff5702]/50 dark:bg-[#e04d02]/30 w-[500px] h-[500px] top-[40%] right-[-10%] mix-blend-multiply dark:mix-blend-screen animate-blob" style={{animationDelay: '2s'}}></div>
<div className="glow-blob bg-[#ff5702]/40 dark:bg-[#ff5702]/30 w-[400px] h-[400px] bottom-[-10%] left-[20%] mix-blend-multiply dark:mix-blend-screen animate-blob" style={{animationDelay: '4s'}}></div>
</div>

<div className="spotlight-overlay"></div>

<div aria-hidden="true" className="laser-beam-container fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="energy-streak layer-far" style={{left: '2%', animationDuration: '13s', animationDelay: '-2s', '--streak-opacity': '0.08'}}></div>
<div className="energy-streak layer-far hidden md:block" style={{left: '15%', animationDuration: '15s', animationDelay: '-10s', '--streak-opacity': '0.1'}}></div>
<div className="energy-streak layer-mid" style={{left: '22%', animationDuration: '8s', animationDelay: '-5s', '--streak-opacity': '0.18'}}></div>
<div className="energy-streak layer-mid" style={{left: '35%', animationDuration: '10s', animationDelay: '-1s', '--streak-opacity': '0.2'}}></div>
<div className="energy-streak layer-near star hidden md:block" style={{left: '42%', animationDuration: '4s', animationDelay: '-3s', '--streak-opacity': '0.5'}}></div>
<div className="energy-streak layer-far" style={{left: '50%', animationDuration: '14s', animationDelay: '-12s', '--streak-opacity': '0.09'}}></div>
<div className="energy-streak layer-mid" style={{left: '60%', animationDuration: '8s', animationDelay: '-8s', '--streak-opacity': '0.19'}}></div>
<div className="energy-streak layer-near" style={{left: '68%', animationDuration: '5s', animationDelay: '-4s', '--streak-opacity': '0.4'}}></div>
<div className="energy-streak layer-far hidden md:block" style={{left: '75%', animationDuration: '15s', animationDelay: '-6s', '--streak-opacity': '0.1'}}></div>
<div className="energy-streak layer-mid" style={{left: '82%', animationDuration: '9s', animationDelay: '-9s', '--streak-opacity': '0.22'}}></div>
<div className="energy-streak layer-mid" style={{left: '90%', animationDuration: '7s', animationDelay: '-2s', '--streak-opacity': '0.25'}}></div>
<div className="energy-streak layer-far hidden md:block" style={{left: '96%', animationDuration: '17s', animationDelay: '-10s', '--streak-opacity': '0.08'}}></div>
</div>

<div className="tech-grid bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]"></div>

<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent to-transparent via-[#ff5702]/50"></div>
</div>

<nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 border-b bg-white/70 dark:bg-black/70 backdrop-blur-xl border-slate-200 dark:border-white/5 transition-all duration-300 supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/60">
<a className="flex items-center gap-2 cursor-pointer group" href="#" onclick="window.scrollTo(0,0); return false;">
<div className="relative flex items-center justify-center w-9 h-9 transition-transform group-active:scale-95 bg-gradient-to-br from-[#ff5702]/5 to-emerald-50 dark:from-[#ff5702]/20 dark:to-emerald-500/20 rounded-lg border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none">
<iconify-icon className="text-[#ff5702] dark:text-[#ff7833]" icon="lucide:layers" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm tracking-tight font-bold text-slate-900 dark:text-white leading-none">
            SORA
          </span>
<span className="text-[9px] tracking-widest text-[#ff5702] dark:text-[#ff7833] uppercase font-mono mt-0.5">
            Business Solutions
          </span>
</div>
</a>
<div className="hidden md:flex items-center gap-1 p-1 rounded-full border backdrop-blur-md bg-slate-100/50 dark:bg-white/5 border-slate-200 dark:border-white/5">
<a className="px-4 py-1.5 text-xs font-medium rounded-full transition-all text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5" href="#home">
          Home
        </a>
<a className="px-4 py-1.5 text-xs font-medium rounded-full transition-all text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5" href="#services">
          Systems
        </a>
<a className="px-4 py-1.5 text-xs font-medium rounded-full transition-all text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5" href="#app">
          Sora App
        </a>
<a className="px-4 py-1.5 text-xs font-medium rounded-full transition-all text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5" href="#method">
          Method
        </a>
<a className="px-4 py-1.5 text-xs font-medium rounded-full transition-all text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5" href="#pricing">
          Pricing
        </a>
</div>
<div className="flex items-center gap-3">

<button aria-label="Toggle Theme" className="group theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-md border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a] text-slate-600 dark:text-slate-400 hover:border-[#ff5702]/50 hover:text-[#ff5702] transition-all shadow-sm dark:shadow-none" id="theme-toggle">
<iconify-icon className="absolute transition-transform duration-500 rotate-0 scale-100 dark:-rotate-90 dark:scale-0 dark:opacity-0" icon="lucide:moon" id="theme-icon-moon" width="16"></iconify-icon>
<iconify-icon className="absolute transition-transform duration-500 rotate-90 scale-0 opacity-0 dark:rotate-0 dark:scale-100 dark:opacity-100" icon="lucide:sun" id="theme-icon-sun" width="16"></iconify-icon>
</button>
<button className="group relative text-xs font-semibold bg-white dark:bg-[#0a0a0a] border px-5 py-2 rounded-md transition-all overflow-hidden hover:border-[#ff5702]/50 shadow-sm dark:shadow-[0_0_0_1px_rgba(0,0,0,0)] dark:hover:shadow-[0_0_0_1px_rgba(255,87,2,0.2)] text-slate-900 dark:text-white border-slate-200 dark:border-white/10 active:scale-95" onclick="openAuditModal()">
<span className="btn-content-slide">
<span className="btn-text-original">
<span className="md:hidden">Free Audit</span>
<span className="hidden md:inline">Free Growth Audit</span>
</span>
<span className="btn-text-hover text-[#ff5702] dark:text-[#ff9966]">
              Book Audit →
            </span>
</span>
</button>
</div>
</nav>

<main className="min-h-screen flex flex-col overflow-hidden z-10 w-full pt-32 pb-20 relative items-center" id="home">

<div className="z-20 text-center max-w-5xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex gap-2 dark:bg-[#ff5702]/5 text-[11px] animate-fade-in dark:text-[#ff9966] font-medium text-[#e04d02] bg-[#ff5702]/10 border-[#ff5702]/20 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 shadow-[0_0_20px_rgba(255,87,2,0.15)] backdrop-blur-sm items-center">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-[#ff7833]"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff5702]"></span>
</span>
<span className="">Sora Business Solutions</span>
</div>
<h1 className="flex flex-col items-center z-20 text-center mt-2 mb-10">
<span className="block md:text-8xl dark:text-white leading-[0.95] animate-slide-up bg-clip-text dark:from-white dark:via-white dark:to-white/80 md:pb-3 text-5xl font-extrabold text-slate-900 tracking-tighter bg-gradient-to-b from-slate-900 via-slate-800 to-slate-600 pb-2 drop-shadow-sm">
            Rank.
            <span className="sell-word text-slate-900 dark:text-white" id="word-sell">
              Sell
            </span>
            . Scale.
          </span>
<span className="block h-[1.1em] md:text-7xl dark:text-slate-400/90 md:-mt-2 min-h-[1.1em] text-4xl font-light italic text-slate-500 tracking-tight font-serif opacity-100 mt-1">Works for "<span id="typewriter-text"></span> <span className="cursor-blink inline-block w-[2px] md:w-[3px] h-[0.85em] bg-[#ff5702]/80 dark:bg-[#ff7833]/80 ml-1 align-baseline rounded-full relative top-[2px]" id="cursor"></span>" niche</span>
</h1>
<p className="leading-relaxed dark:text-slate-400 z-20 animate-slide-up-delayed text-base font-light text-slate-600 opacity-0 max-w-2xl mr-auto mb-10 ml-auto relative" style={{animationDelay: '2.2s'}}>Sora builds the <span className="text-slate-900 dark:text-white font-medium">
            infrastructure
          </span> that captures, qualifies, and converts leads automatically. Stop chasing work and start growing your business.</p>
<div className="flex flex-col md:flex-row gap-5 z-20 animate-slide-up-delayed opacity-0 relative items-center justify-center" style={{animationDelay: '2.3s'}}>
<div className="btn-glow-border group cursor-pointer md:w-auto shadow-[#ff5702]/10 dark:shadow-none w-full shadow-lg">
<button className="z-10 md:w-auto block dark:bg-[#0a0a0a] transition-all hover:bg-slate-800 dark:hover:bg-[#121212] active:bg-black dark:active:bg-[#161616] text-sm font-semibold text-white bg-slate-900 w-full rounded-[5px] pt-3.5 pr-8 pb-3.5 pl-8 relative" onclick="openAuditModal()">
<span className="btn-content-slide">
<span className="btn-text-original">Book Free Audit</span>
<span className="btn-text-hover text-[#ff9966]">
                  Start Scaling Now
                </span>
</span>
</button>
</div>
<button className="group flex transition-all md:w-auto text-sm font-medium bg-white/80 dark:bg-[#0a0a0a] w-full border border-slate-200 dark:border-transparent rounded-md pt-3 pr-6 pb-3 pl-6 gap-x-2 gap-y-2 items-center justify-center hover:text-slate-900 dark:hover:text-white text-slate-500 dark:text-slate-400 active:scale-95 shadow-sm dark:shadow-none backdrop-blur-sm" onclick="document.getElementById('app').scrollIntoView({behavior: 'smooth'})">
<iconify-icon className="text-slate-400 dark:text-slate-500 group-hover:text-[#ff5702] dark:group-hover:text-[#ff7833] transition-colors" icon="lucide:layout-grid" width="16"></iconify-icon>
<span className="border-b border-transparent group-hover:border-slate-500 transition-all">
              See the Sora System
            </span>
</button>
</div>
</div>

<div className="dashboard-container w-full max-w-6xl z-20 mx-auto px-4 relative animate-slide-up-delayed opacity-0 mt-[120px]" style={{animationDelay: '0.5s'}}>
<div className="dashboard-ui relative w-full rounded-xl bg-white dark:bg-[#0a0a0a] overflow-hidden">
<style>
            @keyframes flowBeam {
              0% { transform: translateX(-100%); opacity: 0; }
              50% { opacity: 1; }
              100% { transform: translateX(100%); opacity: 0; }
            }
            @keyframes flowBeamVertical {
              0% { transform: translateY(-100%); opacity: 0; }
              50% { opacity: 1; }
              100% { transform: translateY(100%); opacity: 0; }
            }
            .animate-flow-beam {
              animation: flowBeam 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
            }
            .animate-flow-beam-vertical {
              animation: flowBeamVertical 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
            }
          </style>

<div className="h-9 border-b bg-slate-50 dark:bg-white/[0.02] border-slate-200 dark:border-white/5 flex items-center px-4 justify-between select-none">
<div className="flex gap-1.5 opacity-60">
<div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/20"></div>
</div>
<div className="text-[10px] font-mono text-slate-400 dark:text-slate-500 tracking-widest uppercase flex items-center gap-2">
<iconify-icon icon="lucide:activity" width="12"></iconify-icon>
              Revenue_Motion_v2
            </div>
<div className="w-10"></div>
</div>

<div className="relative p-6 md:p-10 min-h-[420px] flex flex-col justify-center bg-slate-50/50 dark:bg-[#030303] overflow-hidden">

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, var(--dot-color, #cbd5e1) 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: '0.5'}}></div>
<style>
              html.dark .absolute[style*="background-image"] { --dot-color: #262626; }
            </style>

<div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-8 md:gap-4">

<div className="flex-1 flex flex-col items-center group">

<div className="mb-4 transform transition-all duration-500 md:group-hover:-translate-y-1">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm backdrop-blur-sm">
<span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold">
                      Leads Captured
                    </span>
<span className="text-xs font-mono font-bold text-slate-900 dark:text-white">
                      128
                    </span>
</div>
</div>

<div className="relative w-full max-w-[240px] p-px rounded-xl bg-gradient-to-b from-slate-200 to-slate-100 dark:from-white/10 dark:to-white/5 shadow-lg transition-transform md:group-hover:scale-105 duration-300">
<div className="bg-white dark:bg-[#0e0e0e] rounded-[11px] p-5 relative overflow-hidden h-full flex flex-col items-center text-center">
<div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-500/10 flex items-center justify-center mb-3 text-red-500 dark:text-red-400 border border-red-100 dark:border-red-500/20">
<iconify-icon icon="lucide:phone-missed" width="18"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                      Inbound Lead Missed
                    </h3>
<p className="text-[10px] text-slate-500 dark:text-slate-400 leading-snug">
                      Call, SMS, or web inquiry received but not answered
                      instantly.
                    </p>
</div>
</div>
</div>

<div className="hidden md:flex flex-col justify-center flex-1 mx-2 relative h-12">

<div className="h-[2px] w-full bg-slate-200 dark:bg-white/10 relative overflow-hidden rounded-full">
<div className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-[#ff5702] to-transparent animate-flow-beam" style={{left: '-50%'}}></div>
</div>
</div>

<div className="md:hidden h-12 w-[2px] bg-slate-200 dark:bg-white/10 mx-auto relative overflow-hidden rounded-full">
<div className="absolute left-0 right-0 h-1/2 bg-gradient-to-b from-transparent via-[#ff5702] to-transparent animate-flow-beam-vertical w-full" style={{top: '-50%'}}></div>
</div>

<div className="flex-[1.4] flex flex-col items-center z-20 group">

<div className="mb-5 transform transition-all duration-500 md:group-hover:-translate-y-1">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ff5702]/5 dark:bg-[#ff5702]/20 border border-[#ff5702]/10 dark:border-[#ff5702]/30 shadow-sm shadow-[#ff5702]/10 backdrop-blur-sm">
<span className="text-[9px] uppercase tracking-wider text-[#ff5702] dark:text-[#ff9966] font-bold">
                      Response Time
                    </span>
<span className="text-xs font-mono font-bold text-[#e04d02] dark:text-[#ff9966]">
                      0:12s
                    </span>
</div>
</div>

<div className="relative w-full max-w-[320px] p-[1px] rounded-2xl bg-gradient-to-br from-[#ff9966] via-[#ff5702] to-indigo-600 shadow-[0_0_50px_-10px_rgba(255,87,2,0.25)] transition-transform md:group-hover:scale-105 duration-300">
<div className="bg-white dark:bg-[#0a0a0a] rounded-[15px] p-6 relative overflow-hidden h-full">

<div className="absolute -top-10 -right-10 w-32 h-32 bg-[#ff5702]/10 blur-3xl pointer-events-none"></div>
<div className="flex items-center gap-4 mb-5 border-b border-slate-100 dark:border-white/5 pb-4">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff5702] to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-[#ff5702]/20 shrink-0">
<iconify-icon icon="lucide:bot" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                          Sora Receptionist
                        </h3>
<p className="text-[10px] text-[#ff5702] dark:text-[#ff7833] font-medium uppercase tracking-wide">
                          AI Automation Hub
                        </p>
</div>
</div>

<div className="space-y-2.5">
<div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-[#ff5702] shadow-[0_0_5px_#ff5702]"></div>
<span className="text-[11px] font-medium text-slate-700 dark:text-slate-200">
                          Replies instantly (24/7)
                        </span>
</div>
<div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-[#ff5702] shadow-[0_0_5px_#ff5702]"></div>
<span className="text-[11px] font-medium text-slate-700 dark:text-slate-200">
                          Qualifies lead intent
                        </span>
</div>
<div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-[#ff5702] shadow-[0_0_5px_#ff5702]"></div>
<span className="text-[11px] font-medium text-slate-700 dark:text-slate-200">
                          Auto-follows up
                        </span>
</div>
</div>
</div>
</div>
</div>

<div className="hidden md:flex flex-col justify-center flex-1 mx-2 relative h-12">
<div className="h-[2px] w-full bg-slate-200 dark:bg-white/10 relative overflow-hidden rounded-full">
<div className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-flow-beam" style={{left: '-50%', animationDelay: '1s'}}></div>
</div>
</div>

<div className="md:hidden h-12 w-[2px] bg-slate-200 dark:bg-white/10 mx-auto relative overflow-hidden rounded-full">
<div className="absolute left-0 right-0 h-1/2 bg-gradient-to-b from-transparent via-emerald-500 to-transparent animate-flow-beam-vertical w-full" style={{top: '-50%', animationDelay: '1s'}}></div>
</div>

<div className="flex-1 flex flex-col items-center group">

<div className="mb-4 transform transition-all duration-500 md:group-hover:-translate-y-1">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-500/30 shadow-sm backdrop-blur-sm">
<span className="text-[9px] uppercase tracking-wider text-emerald-600 dark:text-emerald-300 font-bold">
                      Jobs Quoted
                    </span>
<span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-200">
                      $84.2k
                    </span>
</div>
</div>

<div className="relative w-full max-w-[240px] p-px rounded-xl bg-gradient-to-b from-emerald-400 to-emerald-600 shadow-[0_0_30px_-5px_rgba(16,185,129,0.2)] transition-transform md:group-hover:scale-105 duration-300">
<div className="bg-white dark:bg-[#0e0e0e] rounded-[11px] p-5 relative overflow-hidden h-full flex flex-col items-center text-center">
<div className="absolute inset-0 bg-emerald-500/5 pointer-events-none"></div>
<div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center mb-3 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
<iconify-icon icon="lucide:check-circle-2" width="18"></iconify-icon>
</div>
<h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                      Job Booked Automatically
                    </h3>
<p className="text-[10px] text-emerald-700 dark:text-emerald-400/80 font-medium leading-snug">
                      Added to calendar &amp; CRM. Quote sent.
                    </p>
</div>
</div>
</div>
</div>

<div className="absolute bottom-4 left-0 right-0 text-center">
<div className="inline-flex items-center gap-2 text-[10px] text-slate-400 dark:text-slate-600 font-mono uppercase tracking-widest opacity-60">
<span className="w-1.5 h-1.5 rounded-full bg-[#ff5702] animate-pulse"></span>
                System Active
              </div>
</div>
</div>
</div>
</div>
<div className="horizon-ring border border-slate-200 dark:border-white/5 shadow-[0_-40px_100px_-20px_rgba(255,87,2,0.1),inset_0_20px_100px_-20px_rgba(16,185,129,0.05)] dark:shadow-[0_-40px_100px_-20px_rgba(255,87,2,0.15),inset_0_20px_100px_-20px_rgba(16,185,129,0.1)]"></div>
</main>

<section className="relative py-24 bg-transparent overflow-hidden border-t border-slate-200 dark:border-white/5" id="method">
<div className="absolute inset-0 bg-slate-50/10 dark:bg-black/70 -z-10 transition-colors duration-500"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-slate-900 dark:text-white tracking-tight font-serif mb-4">
            The Sora System
          </h2>
<p className="text-slate-600 dark:text-slate-400">
            A proven 3-step framework to scale service businesses.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-xl border border-slate-200 dark:border-white/5 bg-white/70 dark:bg-white/[0.02] hover:border-slate-300 dark:hover:bg-white/[0.04] transition-all relative group backdrop-blur-sm shadow-sm dark:shadow-none">
<div className="text-5xl font-bold text-slate-100 dark:text-white/5 absolute right-4 top-4 group-hover:text-[#ff5702]/10 transition-colors">
              01
            </div>
<div className="w-12 h-12 rounded-full bg-[#ff5702]/5 dark:bg-[#802c01]/20 flex items-center justify-center mb-6 text-[#ff5702] dark:text-[#ff7833] border border-[#ff5702]/20 dark:border-[#ff5702]/20">
<iconify-icon icon="lucide:search" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-slate-900 dark:text-white font-medium mb-3">
              Audit &amp; Strategy
            </h3>
<p className="text-sm text-slate-600 dark:text-slate-500 leading-relaxed">
              We analyze your entire customer journey. We identify where you are
              leaking leads and find the highest-ROI automation opportunities.
            </p>
</div>

<div className="p-8 rounded-xl border border-slate-200 dark:border-white/5 bg-white/70 dark:bg-white/[0.02] hover:border-slate-300 dark:hover:bg-white/[0.04] transition-all relative group backdrop-blur-sm shadow-sm dark:shadow-none">
<div className="text-5xl font-bold text-slate-100 dark:text-white/5 absolute right-4 top-4 group-hover:text-emerald-500/10 transition-colors">
              02
            </div>
<div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20">
<iconify-icon icon="lucide:cpu" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-slate-900 dark:text-white font-medium mb-3">
              Build &amp; Automate
            </h3>
<p className="text-sm text-slate-600 dark:text-slate-500 leading-relaxed">
              We deploy the Sora Operating System. We set up your AI reception,
              CRM, and workflow automations tailored to your specific trade.
            </p>
</div>

<div className="p-8 rounded-xl border border-slate-200 dark:border-white/5 bg-white/70 dark:bg-white/[0.02] hover:border-slate-300 dark:hover:bg-white/[0.04] transition-all relative group backdrop-blur-sm shadow-sm dark:shadow-none">
<div className="text-5xl font-bold text-slate-100 dark:text-white/5 absolute right-4 top-4 group-hover:text-orange-500/10 transition-colors">
              03
            </div>
<div className="w-12 h-12 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center mb-6 text-orange-600 dark:text-orange-400 border border-orange-100 dark:border-orange-500/20">
<iconify-icon icon="lucide:rocket" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-slate-900 dark:text-white font-medium mb-3">
              Optimise &amp; Scale
            </h3>
<p className="text-sm text-slate-600 dark:text-slate-500 leading-relaxed">
              We don't leave you hanging. We refine the AI's performance, train
              your team on the app, and support your growth to 7-figures and
              beyond.
            </p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-transparent border-slate-200 dark:border-white/5 border-t pt-32 pb-32 relative" id="services">
<div className="absolute inset-0 bg-slate-50/20 dark:bg-black/70 -z-10 transition-colors duration-500"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-20 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 font-serif text-slate-900 dark:text-white">
            Built for
            <span className="font-serif text-[#ff5702] dark:text-[#ff7833]">
              real-world outcomes.
            </span>
</h2>
<p className="text-lg leading-relaxed font-light text-slate-600 dark:text-slate-400">
            We don't just "do AI". We implement complete business operating
            systems that handle your reception, sales, and admin.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 relative z-10">

<div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-[#050505]/80 p-8 shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:border-[#ff5702]/30 focus:outline-none focus:ring-2 focus:ring-[#ff5702]/50 focus:-translate-y-1 focus:shadow-2xl backdrop-blur-sm md:col-span-2 lg:col-span-6 lg:row-span-2" tabindex="0">
<div className="absolute top-10 right-10 z-0 opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 hidden lg:flex items-center gap-2 select-none pointer-events-none">
<div className="w-8 h-8 rounded-lg bg-[#ff5702]/10 dark:bg-[#ff5702]/10 border border-[#ff5702]/20 dark:border-[#ff5702]/20 flex items-center justify-center text-[#ff5702] dark:text-[#ff7833] shadow-sm">
<iconify-icon icon="lucide:phone" width="14"></iconify-icon>
</div>
<div className="w-3 h-0.5 bg-[#ff5702]/30 dark:bg-[#b33d02]/50"></div>
<div className="w-8 h-8 rounded-lg bg-[#ff5702]/10 dark:bg-[#ff5702]/10 border border-[#ff5702]/20 dark:border-[#ff5702]/20 flex items-center justify-center text-[#ff5702] dark:text-[#ff7833] shadow-sm">
<iconify-icon icon="lucide:message-square" width="14"></iconify-icon>
</div>
<div className="w-3 h-0.5 bg-[#ff5702]/30 dark:bg-[#b33d02]/50"></div>
<div className="w-8 h-8 rounded-lg bg-[#ff5702] dark:bg-[#ff5702] border border-[#ff5702] dark:border-[#ff5702] flex items-center justify-center text-white shadow-sm">
<iconify-icon icon="lucide:calendar-check" width="14"></iconify-icon>
</div>
</div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,87,2,0.08),transparent_50%)] opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-center gap-4 mb-8">
<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[#ff5702]/20 bg-[#ff5702]/10 text-[#ff5702] transition-colors duration-300 dark:border-[#ff5702]/10 dark:bg-[#ff5702]/5 dark:text-[#ff7833] group-hover:bg-[#ff5702]/20 dark:group-hover:bg-[#ff5702]/20 shadow-sm">
<iconify-icon icon="lucide:phone-call" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 dark:text-white">
                  AI Lead Reception
                </h3>
</div>
<p className="mb-8 text-base leading-relaxed text-slate-600 dark:text-slate-400 flex-1">
                Never miss a job because you were on a ladder. Our AI handles
                calls, SMS, and web forms 24/7. It qualifies leads, answers
                questions, and books appointments directly into your calendar.
              </p>
<div className="grid grid-cols-2 gap-3 mt-auto">
<div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 transition-colors dark:border-white/5 dark:bg-white/[0.02] dark:text-slate-300 group-hover:border-[#ff5702]/30 dark:group-hover:border-[#ff5702]/20">
                  Missed Call Textback
                </div>
<div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 transition-colors dark:border-white/5 dark:bg-white/[0.02] dark:text-slate-300 group-hover:border-[#ff5702]/30 dark:group-hover:border-[#ff5702]/20">
<div className="absolute top-8 right-8 z-0 opacity-40 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
<div className="flex items-end gap-1.5 h-10">
<div className="w-2.5 bg-emerald-200/50 dark:bg-emerald-500/20 rounded-t-sm h-[30%]"></div>
<div className="w-2.5 bg-emerald-300/50 dark:bg-emerald-500/40 rounded-t-sm h-[50%]"></div>
<div className="w-2.5 bg-emerald-400/50 dark:bg-emerald-500/60 rounded-t-sm h-[70%]"></div>
<div className="w-2.5 bg-emerald-500 dark:bg-emerald-500 rounded-t-sm h-[100%] shadow-[0_0_10px_rgba(16,185,129,0.3)]"></div>
</div>
</div>
                  Instant Quotes
                </div>
<div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 transition-colors dark:border-white/5 dark:bg-white/[0.02] dark:text-slate-300 group-hover:border-[#ff5702]/30 dark:group-hover:border-[#ff5702]/20">
<div className="absolute top-8 right-8 z-0 opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

    </>
  );
}
