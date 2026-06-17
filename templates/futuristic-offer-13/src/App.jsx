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
      
tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
cyber: {
bg: '#030712',
panel: 'rgba(17, 24, 39, 0.65)',
border: 'rgba(6, 182, 212, 0.15)',
accent: '#00f0ff',
neon: '#8b5cf6'
}
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
      

<div className="absolute top-[-10%] left-[-10%] w-1/2 h-1/2 bg-cyber-accent/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-1/2 h-1/2 bg-cyber-neon/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="absolute inset-0 grid-bg pointer-events-none z-0"></div>

<aside className="w-64 glass-panel flex-col hidden md:flex shrink-0 z-10 relative">

<div className="h-16 flex items-center px-6 border-b border-cyber-border">
<span className="text-xl font-semibold tracking-tighter bg-gradient-to-r from-cyber-accent to-cyber-neon text-transparent bg-clip-text uppercase">Amaze Rev</span>
</div>

<div className="flex-1 overflow-y-auto py-6 flex flex-col gap-2 px-4">
<div className="px-3 pb-2 text-xs font-semibold text-cyber-accent/60 uppercase tracking-widest">Navigation</div>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-cyber-accent/10 border border-cyber-accent/30 text-cyber-accent font-medium shadow-[0_0_15px_rgba(0,240,255,0.1)] transition-all" href="#">
<iconify-icon className="text-xl" icon="solar:home-2-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-white/5 hover:text-white hover:border-white/10 border border-transparent transition-all group" href="#">
<iconify-icon className="text-xl group-hover:text-cyber-neon transition-colors" icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm">Offer</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-white/5 hover:text-white hover:border-white/10 border border-transparent transition-all group" href="#">
<iconify-icon className="text-xl group-hover:text-cyber-neon transition-colors" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm">Report</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-white/5 hover:text-white hover:border-white/10 border border-transparent transition-all group" href="#">
<iconify-icon className="text-xl group-hover:text-cyber-neon transition-colors" icon="solar:widget-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm">Tool</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-white/5 hover:text-white hover:border-white/10 border border-transparent transition-all group" href="#">
<iconify-icon className="text-xl group-hover:text-cyber-neon transition-colors" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm">My Account</span>
</a>
</div>

<div className="p-6 border-t border-cyber-border bg-black/20">
<div className="text-xs font-semibold text-cyber-neon uppercase tracking-widest mb-4 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-cyber-neon shadow-[0_0_8px_#8b5cf6]"></span> System Agent
            </div>

<div className="w-full aspect-square bg-[#0a0f18] rounded-xl border border-cyber-accent/30 mb-4 flex items-center justify-center relative overflow-hidden group shadow-[inset_0_0_20px_rgba(0,240,255,0.05)]">

<div className="absolute inset-0 flex items-center justify-center">
<svg className="w-24 h-24 opacity-60" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<circle className="animate-[spin_20s_linear_infinite]" cx="50" cy="50" r="40" stroke="rgba(0,240,255,0.2)" stroke-dasharray="4 4" strokeWidth="1"></circle>
<circle className="animate-[spin_15s_linear_infinite_reverse]" cx="50" cy="50" r="30" stroke="rgba(139,92,246,0.3)" stroke-dasharray="10 4" strokeWidth="1"></circle>
<path d="M50 25 L50 75 M25 50 L75 50" stroke="rgba(0,240,255,0.4)" strokeWidth="0.5"></path>
<polygon fill="rgba(0,240,255,0.1)" points="50,40 60,60 40,60" stroke="#00f0ff" strokeWidth="1.5"></polygon>
</svg>
</div>
<div className="absolute bottom-3 left-0 w-full text-center">
<span className="text-xs font-semibold tracking-[0.2em] text-cyber-accent group-hover:text-white transition-colors">AMAZE_AI</span>
</div>
</div>
<div className="space-y-3">
<a className="flex items-center gap-3 text-xs font-medium text-slate-400 hover:text-cyber-accent transition-colors" href="#">
<iconify-icon className="text-lg text-cyber-accent/60" icon="solar:chat-line-linear" strokeWidth="1.5"></iconify-icon>
                    Support@amazerevenue
                </a>
<a className="flex items-center gap-3 text-xs font-medium text-slate-400 hover:text-cyber-accent transition-colors" href="#">
<iconify-icon className="text-lg text-cyber-accent/60" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
                    Support@amazerevenue
                </a>
</div>
</div>
</aside>

<div className="flex-1 flex flex-col min-w-0 z-10 relative">

<header className="h-16 glass-panel border-l-0 border-r-0 border-t-0 flex items-center justify-between px-6 shrink-0 sticky top-0 z-20">
<button className="text-slate-400 hover:text-cyber-accent transition-colors p-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyber-accent/50 md:hidden">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="hidden md:block"></div>
<div className="flex items-center gap-3 cursor-pointer hover:bg-white/5 p-1.5 pr-3 rounded-full border border-cyber-border transition-colors bg-black/20">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyber-accent to-cyber-neon flex items-center justify-center text-xs font-semibold text-white shadow-[0_0_10px_rgba(0,240,255,0.3)]">KK</div>
<span className="text-sm font-medium text-slate-200">kakaanikk</span>
<div className="w-2 h-2 rounded-full bg-cyber-accent shadow-[0_0_8px_rgba(0,240,255,0.8)] animate-pulse"></div>
</div>
</header>

<main className="flex-1 overflow-y-auto p-6 lg:p-10">
<div className="max-w-7xl mx-auto space-y-8">

<div className="flex items-center gap-4 mb-2">
<div className="p-2.5 rounded-xl bg-cyber-accent/10 border border-cyber-accent/30 shadow-[0_0_15px_rgba(0,240,255,0.15)] flex items-center justify-center">
<iconify-icon className="text-2xl text-cyber-accent" icon="solar:screencast-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h1 className="text-3xl font-semibold tracking-tight text-white neon-text">Main Interface</h1>
</div>

<div className="glass-panel rounded-2xl p-6 lg:p-8 relative overflow-hidden group">

<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyber-accent to-transparent opacity-50"></div>

<div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-12 relative z-10">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 rounded-sm bg-cyber-accent"></span>
<h2 className="text-xs font-semibold tracking-widest text-cyber-accent uppercase">30-Day Telemetry</h2>
</div>
<p className="text-sm text-slate-400">System cycle — Last sync 05, Apr, 2026</p>
</div>
<div className="flex flex-wrap items-center gap-8 md:gap-12 bg-black/30 p-4 rounded-xl border border-white/5">
<div>
<div className="text-[0.65rem] font-semibold text-slate-400 uppercase tracking-widest mb-1">Clicks_Total</div>
<div className="text-3xl font-semibold tracking-tight text-white">0</div>
</div>
<div className="w-px h-8 bg-cyber-border hidden md:block"></div>
<div>
<div className="text-[0.65rem] font-semibold text-slate-400 uppercase tracking-widest mb-1">Leads_Total</div>
<div className="text-3xl font-semibold tracking-tight text-white">0</div>
</div>
<div className="w-px h-8 bg-cyber-border hidden md:block"></div>
<div>
<div className="text-[0.65rem] font-semibold text-cyber-neon uppercase tracking-widest mb-1">Revenue_Gen</div>
<div className="text-3xl font-semibold tracking-tight text-white neon-text-purple">$0</div>
</div>
</div>
</div>

<div className="relative h-[320px] w-full mt-4 z-10">

<div className="absolute inset-0 flex flex-col justify-between text-[0.65rem] text-slate-500 font-medium">
<div className="flex items-center w-full relative h-0"><span className="w-10 text-right pr-4 shrink-0 -translate-y-1/2">1.0</span><div className="w-full border-t border-cyber-accent/10 border-dashed"></div></div>
<div className="flex items-center w-full relative h-0"><span className="w-10 text-right pr-4 shrink-0 -translate-y-1/2">0.75</span><div className="w-full border-t border-cyber-accent/10 border-dashed"></div></div>
<div className="flex items-center w-full relative h-0"><span className="w-10 text-right pr-4 shrink-0 -translate-y-1/2">0.50</span><div className="w-full border-t border-cyber-accent/10 border-dashed"></div></div>
<div className="flex items-center w-full relative h-0"><span className="w-10 text-right pr-4 shrink-0 -translate-y-1/2">0.25</span><div className="w-full border-t border-cyber-accent/10 border-dashed"></div></div>
<div className="flex items-center w-full relative h-0"><span className="w-10 text-right pr-4 shrink-0 -translate-y-1/2">0.0</span><div className="w-full border-t border-cyber-accent/30"></div></div>
</div>

<div className="absolute inset-0 left-10 pb-[1px]">

<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 1000 100">
<defs>
<filter height="140%" id="glow-cyan" width="140%" x="-20%" y="-20%">
<fegaussianblur result="blur" stddeviation="3"></fegaussianblur>
<femerge>
<femergenode in="blur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
<lineargradient id="line-grad" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#00f0ff" stop-opacity="0.2"></stop>
<stop offset="50%" stop-color="#00f0ff" stop-opacity="1"></stop>
<stop offset="100%" stop-color="#00f0ff" stop-opacity="0.2"></stop>
</lineargradient>
</defs>
<path d="M 0 100 L 1000 100" fill="none" filter="url(#glow-cyan)" stroke="url(#line-grad)" strokeWidth="3"></path>

<circle cx="0%" cy="100" fill="#00f0ff" r="3"></circle>
<circle cx="16%" cy="100" fill="#00f0ff" r="3"></circle>
<circle cx="32%" cy="100" fill="#00f0ff" r="3"></circle>

<circle className="z-10 relative cursor-pointer" cx="40%" cy="100" fill="#030712" filter="url(#glow-cyan)" r="6" stroke="#00f0ff" strokeWidth="3"></circle>
<line className="opacity-30" stroke="#00f0ff" stroke-dasharray="4 4" strokeWidth="1" x1="40%" x2="40%" y1="0" y2="100"></line>
<circle cx="48%" cy="100" fill="#00f0ff" r="3"></circle>
<circle cx="64%" cy="100" fill="#00f0ff" r="3"></circle>
<circle cx="80%" cy="100" fill="#00f0ff" r="3"></circle>
<circle cx="100%" cy="100" fill="#00f0ff" r="3"></circle>
</svg>

<div className="absolute left-[40%] top-[75%] -translate-x-1/2 -translate-y-full bg-[#0a0f18]/90 backdrop-blur-md border border-cyber-accent/40 rounded-lg p-3 shadow-[0_0_15px_rgba(0,240,255,0.2)] text-center z-20 min-w-[120px] pointer-events-none">
<div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0a0f18] border-b border-r border-cyber-accent/40 rotate-45 rounded-sm"></div>
<div className="relative z-10">
<div className="text-xs font-semibold text-white mb-2 border-b border-white/10 pb-1 font-mono">26.03.16</div>
<div className="flex justify-between items-center text-[0.65rem] font-semibold mb-1">
<span className="text-slate-400 uppercase">CLK</span>
<span className="text-cyber-accent">0</span>
</div>
<div className="flex justify-between items-center text-[0.65rem] font-semibold">
<span className="text-slate-400 uppercase">LED</span>
<span className="text-cyber-neon">0</span>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-8 left-10 right-0 flex justify-between text-[0.65rem] font-medium text-slate-500 font-mono">
<span>03-07</span>
<span>03-11</span>
<span>03-15</span>
<span>03-19</span>
<span>03-23</span>
<span>03-27</span>
<span>03-31</span>
<span>04-04</span>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-6 lg:p-8 flex flex-col xl:flex-row gap-10 relative overflow-hidden">
<div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-cyber-neon to-transparent opacity-50"></div>
<div className="flex-1 relative z-10">
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 rounded-sm bg-cyber-neon"></span>
<h2 className="text-xs font-semibold tracking-widest text-cyber-neon uppercase">6-Month Trajectory</h2>
</div>
<p className="text-sm text-slate-400 mb-12">Historical analysis of conversion &amp; yield metrics</p>

<div className="relative h-[280px] w-full">

<div className="absolute inset-0 flex flex-col justify-between text-[0.65rem] text-slate-500 font-medium">
<div className="flex items-center w-full relative h-0"><span className="w-10 text-right pr-4 shrink-0 -translate-y-1/2">1.0</span><div className="w-full border-t border-cyber-neon/10 border-dashed"></div></div>
<div className="flex items-center w-full relative h-0"><span className="w-10 text-right pr-4 shrink-0 -translate-y-1/2">0.50</span><div className="w-full border-t border-cyber-neon/10 border-dashed"></div></div>
<div className="flex items-center w-full relative h-0"><span className="w-10 text-right pr-4 shrink-0 -translate-y-1/2">0.0</span><div className="w-full border-t border-cyber-neon/30"></div></div>
</div>

<div className="absolute inset-0 left-10 pb-[1px]">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 1000 100">
<defs>
<filter height="140%" id="glow-purple" width="140%" x="-20%" y="-20%">
<fegaussianblur result="blur" stddeviation="3"></fegaussianblur>
<femerge>
<femergenode in="blur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>
<path className="opacity-90" d="M 0 100 L 1000 100" fill="none" filter="url(#glow-purple)" stroke="#8b5cf6" strokeWidth="3"></path>
<circle cx="15%" cy="100" fill="#8b5cf6" r="3"></circle>
<circle cx="45%" cy="100" fill="#8b5cf6" r="3"></circle>
<circle cx="75%" cy="100" fill="#8b5cf6" r="3"></circle>

<circle className="z-10 relative" cx="100%" cy="100" fill="#030712" filter="url(#glow-purple)" r="6" stroke="#8b5cf6" strokeWidth="3"></circle>
<line className="opacity-30" stroke="#8b5cf6" stroke-dasharray="4 4" strokeWidth="1" x1="100%" x2="100%" y1="0" y2="100"></line>
</svg>

<div className="absolute left-[100%] top-[75%] -translate-x-1/2 -translate-y-full bg-[#0a0f18]/90 backdrop-blur-md border border-cyber-neon/40 rounded-lg p-3 shadow-[0_0_15px_rgba(139,92,246,0.2)] text-center z-20 min-w-[120px] pointer-events-none">
<div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0a0f18] border-b border-r border-cyber-neon/40 rotate-45 rounded-sm"></div>
<div className="relative z-10">
<div className="text-xs font-semibold text-white mb-2 border-b border-white/10 pb-1 font-mono">2026-04</div>
<div className="flex justify-between items-center text-[0.65rem] font-semibold mb-1">
<span className="text-slate-400 uppercase">CLK</span>
<span className="text-cyber-accent">0</span>
</div>
<div className="flex justify-between items-center text-[0.65rem] font-semibold mb-1">
<span className="text-slate-400 uppercase">LED</span>
<span className="text-cyber-accent">0</span>
</div>
<div className="flex justify-between items-center text-[0.65rem] font-semibold">
<span className="text-slate-400 uppercase">PAY</span>
<span className="text-cyber-neon">0</span>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-8 left-10 right-0 flex justify-between text-[0.65rem] font-medium text-slate-500 font-mono">
<span>25-11</span>
<span>25-12</span>
<span>26-01</span>
<span>26-02</span>
<span>26-03</span>
<span>26-04</span>
</div>
</div>
</div>

<div className="xl:w-64 flex flex-col justify-center gap-6 xl:border-l border-t xl:border-t-0 border-cyber-border pt-8 xl:pt-0 xl:pl-10 mt-10 xl:mt-0 relative z-10">
<div className="bg-black/30 p-5 rounded-xl border border-white/5 relative overflow-hidden group">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-cyber-accent/50 group-hover:bg-cyber-accent transition-colors"></div>
<div className="text-[0.65rem] font-semibold text-slate-400 uppercase tracking-widest mb-1">Live_Clicks</div>
<div className="text-2xl font-semibold tracking-tight text-white">0</div>
</div>
<div className="bg-black/30 p-5 rounded-xl border border-white/5 relative overflow-hidden group">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-cyber-accent/50 group-hover:bg-cyber-accent transition-colors"></div>
<div className="text-[0.65rem] font-semibold text-slate-400 uppercase tracking-widest mb-1">Live_Leads</div>
<div className="text-2xl font-semibold tracking-tight text-white">0</div>
</div>
<div className="bg-black/30 p-5 rounded-xl border border-white/5 relative overflow-hidden group">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-cyber-neon/50 group-hover:bg-cyber-neon transition-colors"></div>
<div className="text-[0.65rem] font-semibold text-cyber-neon uppercase tracking-widest mb-1">Live_Yield</div>
<div className="text-2xl font-semibold tracking-tight text-white neon-text-purple">$0</div>
</div>
</div>
</div>
</div>
</main>
</div>

<button className="fixed bottom-8 right-8 w-14 h-14 bg-cyber-bg border border-cyber-accent rounded-full flex items-center justify-center text-cyber-accent hover:scale-105 transition-all z-50 group shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]">
<div className="absolute inset-1 rounded-full border border-cyber-accent/30 animate-[spin_4s_linear_infinite]"></div>
<iconify-icon className="text-2xl relative z-10" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</button>

    </>
  );
}
