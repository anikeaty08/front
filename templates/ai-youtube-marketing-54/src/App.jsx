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
animation: {
'float': 'float 8s ease-in-out infinite',
'float-delayed': 'float 8s ease-in-out 4s infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'scroll': 'scroll 40s linear infinite',
'beam': 'beam 2s linear infinite',
'shimmer': 'shimmer 2.5s linear infinite',
'grid-flow': 'gridFlow 20s linear infinite',
'meteor': 'meteor 5s linear infinite',
'typing': 'typing 3s steps(40, end) forwards',
'cursor': 'cursor .75s step-end infinite',
'scan': 'scan 4s ease-in-out infinite',
'reveal': 'reveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
'50%': { transform: 'translateY(-15px) rotate(1deg)' },
},
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-100%)' },
},
beam: {
'0%': { left: '-100%', opacity: '0' },
'50%': { opacity: '0.5' },
'100%': { left: '100%', opacity: '0' },
},
shimmer: {
'0%': { backgroundPosition: '-1000px 0' },
'100%': { backgroundPosition: '1000px 0' }
},
gridFlow: {
'0%': { backgroundPosition: '0 0' },
'100%': { backgroundPosition: '0 40px' }
},
meteor: {
'0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
'70%': { opacity: '1' },
'100%': { transform: 'rotate(215deg) translateX(-500px)', opacity: '0' },
},
typing: {
'from': { width: '0' },
'to': { width: '100%' }
},
cursor: {
'from, to': { borderColor: 'transparent' },
'50%': { borderColor: '#10b981' }
},
scan: {
'0%, 100%': { top: '0%', opacity: '0' },
'10%': { opacity: '1' },
'90%': { opacity: '1' },
'50%': { top: '100%', opacity: '1' }
},
reveal: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' }
}
}
}
}
}



        function initSpotlight() {
            const cards = document.querySelectorAll('.spotlight-card');
            document.getElementById('cards-container').onmousemove = e => {
                for(const card of cards) {
                    const rect = card.getBoundingClientRect(),
                          x = e.clientX - rect.left,
                          y = e.clientY - rect.top;
                    
                    card.style.setProperty("--mouse-x", `${x}px`);
                    card.style.setProperty("--mouse-y", `${y}px`);
                };
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
      

<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
<span className="absolute top-0 left-1/2 w-0.5 h-0.5 bg-slate-100 rotate-[215deg] animate-meteor shadow-[0_0_0_1px_#ffffff10]" style={{left: '10%', animationDelay: '0s', animationDuration: '3s'}}></span>
<span className="absolute top-0 left-1/2 w-0.5 h-0.5 bg-slate-100 rotate-[215deg] animate-meteor shadow-[0_0_0_1px_#ffffff10]" style={{left: '30%', animationDelay: '2s', animationDuration: '4s'}}></span>
<span className="absolute top-0 left-1/2 w-0.5 h-0.5 bg-slate-100 rotate-[215deg] animate-meteor shadow-[0_0_0_1px_#ffffff10]" style={{left: '60%', animationDelay: '1s', animationDuration: '3.5s'}}></span>
<span className="absolute top-0 left-1/2 w-0.5 h-0.5 bg-slate-100 rotate-[215deg] animate-meteor shadow-[0_0_0_1px_#ffffff10]" style={{left: '80%', animationDelay: '3s', animationDuration: '5s'}}></span>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/40">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group relative" href="#">
<div className="absolute inset-0 bg-indigo-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
<div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center shadow-lg shadow-indigo-500/20 relative z-10 border border-white/10 group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-white" data-icon="lucide:play" data-width="14"></span>
</div>
<span className="text-base font-medium tracking-tight text-white relative z-10">
                    AITube <span className="text-slate-500 font-normal">Business</span>
</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors relative group" href="#features">
                    Products
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-500 transition-all group-hover:w-full"></span>
</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors relative group" href="#solutions">
                    Solutions
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-500 transition-all group-hover:w-full"></span>
</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors relative group" href="#customers">
                    Customers
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-500 transition-all group-hover:w-full"></span>
</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors relative group" href="#pricing">
                    Pricing
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-500 transition-all group-hover:w-full"></span>
</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">Sign in</a>
<a className="group relative text-xs bg-white text-slate-950 px-4 py-2 rounded hover:bg-slate-200 transition-all font-semibold shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] overflow-hidden" href="#">
<span className="relative z-10">Get Started</span>
<div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12"></div>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden perspective-1000 min-h-screen flex flex-col justify-center">

<div className="absolute inset-0 bg-grid-animate z-0 pointer-events-none opacity-40"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full z-0 opacity-40 mix-blend-screen animate-pulse-slow"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-600/10 blur-[100px] rounded-full z-0 opacity-30"></div>
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-[11px] font-medium mb-8 backdrop-blur-sm animate-reveal shadow-[0_0_15px_rgba(99,102,241,0.2)] hover:bg-indigo-500/20 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Introducing Smart Auto-Bidding 2.0
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-8 leading-[0.95] animate-reveal" style={{animationDelay: '0.1s'}}>
                Turn Views Into <br/>
<span className="text-shimmer">Revenue Streams</span>
</h1>
<p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-reveal" style={{animationDelay: '0.2s'}}>
                The only platform that combines generative video creation with real-time ad bidding. Scale your YouTube presence without scaling your team.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-reveal" style={{animationDelay: '0.3s'}}>
<a className="group relative px-8 py-3 bg-white text-slate-950 rounded hover:bg-slate-100 transition-all font-medium text-sm overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_2px_10px_rgba(0,0,0,0.2)]" href="#">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-slate-300/50 to-transparent translate-x-[-100%] group-hover:animate-beam"></div>
<span className="relative flex items-center gap-2">Start Free Trial <span className="iconify transition-transform group-hover:translate-x-1" data-icon="lucide:arrow-right" data-width="16"></span></span>
</a>
<a className="group px-8 py-3 bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 rounded transition-all font-medium text-sm flex items-center gap-2 relative overflow-hidden" href="#">
<span className="iconify group-hover:scale-110 transition-transform text-indigo-400" data-icon="lucide:play-circle" data-width="16"></span>
<span className="relative z-10">Demo</span>
</a>
</div>

<div className="relative w-full max-w-5xl mx-auto mt-8 group perspective-1000 animate-reveal" style={{animationDelay: '0.5s'}}>

<div className="relative rounded-xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-700 ease-out hover:scale-[1.01] transform-style-3d rotate-x-12 group-hover:rotate-x-0 group-hover:rotate-y-0 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">

<div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:animate-scan z-30 pointer-events-none"></div>

<div className="h-10 border-b border-white/5 flex items-center px-4 justify-between bg-slate-800/40">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-600/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-600/50"></div>
</div>
<div className="flex items-center gap-2 px-3 py-1 rounded bg-slate-800/50 border border-white/5 text-[10px] text-slate-400 font-mono shadow-inner">
<span className="iconify text-emerald-500" data-icon="lucide:lock" data-width="10"></span> aitube.app
                        </div>
</div>

<div className="grid grid-cols-12 gap-0 h-[500px]">

<div className="col-span-1 border-r border-white/5 bg-slate-900/50 flex flex-col items-center py-6 gap-6">
<div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.2)]"><span className="iconify" data-icon="lucide:layout-grid" data-width="20"></span></div>
<div className="p-2 rounded-lg hover:bg-white/5 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"><span className="iconify" data-icon="lucide:bar-chart-2" data-width="20"></span></div>
<div className="p-2 rounded-lg hover:bg-white/5 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"><span className="iconify" data-icon="lucide:users" data-width="20"></span></div>
<div className="p-2 rounded-lg hover:bg-white/5 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"><span className="iconify" data-icon="lucide:settings" data-width="20"></span></div>
</div>

<div className="col-span-11 p-8 bg-slate-950/30 relative">

<div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[60px] pointer-events-none"></div>
<div className="flex justify-between items-end mb-8 relative z-10">
<div>
<h3 className="text-xl font-medium text-white mb-1">Campaign Overview</h3>
<p className="text-sm text-slate-500 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                        Live Updates
                                    </p>
</div>
<div className="flex gap-3">
<button className="px-3 py-1.5 rounded text-xs font-medium text-slate-400 hover:text-white transition-colors hover:bg-white/5">Last 7 Days</button>
<button className="px-3 py-1.5 rounded bg-indigo-600 hover:bg-indigo-500 text-xs font-medium text-white transition-all shadow-[0_0_10px_rgba(79,70,229,0.3)] hover:shadow-[0_0_15px_rgba(79,70,229,0.5)]">New Campaign</button>
</div>
</div>

<div className="grid grid-cols-3 gap-6 mb-8 relative z-10">
<div className="glass-panel p-5 rounded-lg relative overflow-hidden group/card hover:-translate-y-1 hover:shadow-lg transition-transform border-t border-white/10">
<div className="absolute top-0 right-0 p-3 opacity-0 group-hover/card:opacity-100 transition-opacity"><span className="iconify text-slate-400" data-icon="lucide:arrow-up-right" data-width="16"></span></div>
<div className="text-xs text-slate-400 mb-1">Total Views</div>
<div className="text-2xl font-semibold text-white mb-2 tracking-tight">1,245,032</div>
<div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 w-[75%] rounded-full animate-pulse-slow relative">
<div className="absolute right-0 top-0 bottom-0 w-1 bg-white/50 blur-[2px]"></div>
</div>
</div>
</div>
<div className="glass-panel p-5 rounded-lg hover:-translate-y-1 hover:shadow-lg transition-transform border-t border-white/10">
<div className="text-xs text-slate-400 mb-1">Click-Through Rate</div>
<div className="text-2xl font-semibold text-white mb-2 tracking-tight">4.8% <span className="text-xs font-normal text-emerald-400 ml-1">+1.2%</span></div>
<div className="flex items-end h-8 gap-1 mt-2">
<div className="w-1/6 bg-slate-700 h-[40%] rounded-sm hover:bg-slate-600 transition-colors"></div>
<div className="w-1/6 bg-slate-700 h-[60%] rounded-sm hover:bg-slate-600 transition-colors"></div>
<div className="w-1/6 bg-indigo-500 h-[80%] rounded-sm shadow-[0_0_10px_rgba(99,102,241,0.4)]"></div>
<div className="w-1/6 bg-slate-700 h-[50%] rounded-sm hover:bg-slate-600 transition-colors"></div>
<div className="w-1/6 bg-slate-700 h-[70%] rounded-sm hover:bg-slate-600 transition-colors"></div>
<div className="w-1/6 bg-slate-700 h-[60%] rounded-sm hover:bg-slate-600 transition-colors"></div>
</div>
</div>
<div className="glass-panel p-5 rounded-lg hover:-translate-y-1 hover:shadow-lg transition-transform border-t border-white/10">
<div className="text-xs text-slate-400 mb-1">Cost Per View</div>
<div className="text-2xl font-semibold text-white mb-2 tracking-tight">$0.03</div>
<div className="w-full h-8 relative group/graph">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none">
<defs>
<lineargradient id="gradientStroke" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#6366f1', stopOpacity: '0.2'}}></stop>
<stop offset="100%" style={{stopColor: '#818cf8', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>
<path className="drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]" d="M0,30 L20,25 L40,28 L60,15 L80,20 L100,5" fill="none" stroke="url(#gradientStroke)" strokeWidth="2"></path>
<circle className="animate-ping" cx="100" cy="5" fill="#818cf8" r="3" style={{animationDuration: '2s'}}></circle>
<circle cx="100" cy="5" fill="white" r="2"></circle>
</svg>
</div>
</div>
</div>

<div className="relative w-full h-40 glass-panel rounded-lg p-5 border-dashed border-2 border-slate-800/50 flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-indigo-500/5 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
<div className="absolute top-4 left-4 flex items-center gap-2 z-10">
<div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
<span className="iconify animate-pulse" data-icon="lucide:sparkles" data-width="16"></span>
</div>
<span className="text-sm font-medium text-white">AI Insight</span>
</div>
<div className="text-center relative z-10">
<p className="text-slate-400 text-sm mb-3">Optimize your "Summer Sale" creative for better retention?</p>
<div className="flex gap-2 justify-center">
<button className="px-3 py-1.5 rounded bg-white text-slate-950 text-xs font-medium hover:bg-slate-200 shadow-[0_0_10px_rgba(255,255,255,0.2)] transition-all transform hover:scale-105">Auto-Fix</button>
<button className="px-3 py-1.5 rounded border border-slate-700 text-slate-400 text-xs font-medium hover:text-white hover:border-slate-500 transition-colors">Review</button>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -right-20 -bottom-20 w-64 h-64 bg-indigo-500/30 rounded-full blur-[80px] animate-pulse-slow"></div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-slate-950/30 backdrop-blur-sm overflow-hidden relative">
<div className="max-w-7xl mx-auto px-6 mb-6 text-center">
<p className="text-[10px] font-semibold text-slate-500 uppercase tracking-[0.2em]">Trusted by modern growth teams</p>
</div>
<div className="flex relative w-full overflow-hidden group">
<div className="flex animate-scroll min-w-full gap-20 items-center px-8 group-hover:[animation-play-state:paused]">

<div className="flex items-center gap-2 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default transform hover:scale-110"><span className="iconify text-white" data-icon="lucide:box" data-width="24"></span> <span className="text-lg font-bold text-white tracking-tight font-sans">AcmeInc</span></div>
<div className="flex items-center gap-2 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default transform hover:scale-110"><span className="iconify text-white" data-icon="lucide:triangle" data-width="24"></span> <span className="text-lg font-bold text-white tracking-tight font-sans">Vertex</span></div>
<div className="flex items-center gap-2 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default transform hover:scale-110"><span className="iconify text-white" data-icon="lucide:circle-dashed" data-width="24"></span> <span className="text-lg font-bold text-white tracking-tight font-sans">Orbit</span></div>
<div className="flex items-center gap-2 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default transform hover:scale-110"><span className="iconify text-white" data-icon="lucide:hexagon" data-width="24"></span> <span className="text-lg font-bold text-white tracking-tight font-sans">Layers</span></div>
<div className="flex items-center gap-2 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default transform hover:scale-110"><span className="iconify text-white" data-icon="lucide:wind" data-width="24"></span> <span className="text-lg font-bold text-white tracking-tight font-sans">Sisyphus</span></div>
<div className="flex items-center gap-2 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default transform hover:scale-110"><span className="iconify text-white" data-icon="lucide:waves" data-width="24"></span> <span className="text-lg font-bold text-white tracking-tight font-sans">Catalog</span></div>

<div className="flex items-center gap-2 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default transform hover:scale-110"><span className="iconify text-white" data-icon="lucide:box" data-width="24"></span> <span className="text-lg font-bold text-white tracking-tight font-sans">AcmeInc</span></div>
<div className="flex items-center gap-2 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default transform hover:scale-110"><span className="iconify text-white" data-icon="lucide:triangle" data-width="24"></span> <span className="text-lg font-bold text-white tracking-tight font-sans">Vertex</span></div>
<div className="flex items-center gap-2 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default transform hover:scale-110"><span className="iconify text-white" data-icon="lucide:circle-dashed" data-width="24"></span> <span className="text-lg font-bold text-white tracking-tight font-sans">Orbit</span></div>
<div className="flex items-center gap-2 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default transform hover:scale-110"><span className="iconify text-white" data-icon="lucide:hexagon" data-width="24"></span> <span className="text-lg font-bold text-white tracking-tight font-sans">Layers</span></div>
<div className="flex items-center gap-2 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default transform hover:scale-110"><span className="iconify text-white" data-icon="lucide:wind" data-width="24"></span> <span className="text-lg font-bold text-white tracking-tight font-sans">Sisyphus</span></div>
<div className="flex items-center gap-2 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default transform hover:scale-110"><span className="iconify text-white" data-icon="lucide:waves" data-width="24"></span> <span className="text-lg font-bold text-white tracking-tight font-sans">Catalog</span></div>
</div>
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10"></div>
</div>
</section>

<section className="py-32 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Everything you need to <br/>dominate YouTube Ads</h2>
<p className="text-slate-400 text-lg max-w-2xl">A complete suite of tools designed to automate the hard work and amplify the creative work.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[340px]" id="cards-container">

<div className="md:col-span-2 glass-panel rounded-2xl p-8 relative overflow-hidden group spotlight-card">
<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] -mr-20 -mt-20 transition-all duration-700 group-hover:bg-indigo-500/30"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 shadow-[0_0_20px_rgba(99,102,241,0.1)] group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:wand-2" data-width="24"></span>
</div>
<h3 className="text-2xl font-medium text-white mb-2">Generative Video Editor</h3>
<p className="text-slate-400 max-w-md">Turn blog posts into high-retention video scripts. Our AI automatically sources B-roll, adds captions, and syncs voiceovers.</p>
</div>

<div className="mt-8 bg-slate-950/50 border border-white/5 rounded-xl p-4 flex gap-4 items-center hover:border-white/10 transition-colors backdrop-blur-sm">
<div className="w-32 h-20 bg-slate-800 rounded-lg relative overflow-hidden group/video cursor-pointer">
<img className="w-full h-full object-cover opacity-50 group-hover/video:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover/video:bg-indigo-500 transition-colors">
<span className="iconify text-white" data-icon="lucide:play" data-width="12"></span>
</div>
</div>
<div className="absolute bottom-0 left-0 h-1 bg-indigo-500 animate-[beam_3s_linear_infinite]" style={{width: '100%'}}></div>
</div>
<div className="flex-1 space-y-3">
<div className="h-2 w-3/4 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500/50 w-1/2 animate-[shimmer_2s_infinite]"></div>
</div>
<div className="h-2 w-1/2 bg-slate-800 rounded-full"></div>
<div className="flex items-center gap-2 mt-2">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
<span className="text-[10px] text-indigo-300">Syncing Voiceover (98%)...</span>
</div>
</div>
</div>
</div>
</div>

<div className="md:row-span-2 glass-panel rounded-2xl p-8 relative overflow-hidden group spotlight-card">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="h-full flex flex-col relative z-20">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_20px_rgba(16,185,129,0.1)] group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:target" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Precision Targeting</h3>
<p className="text-slate-400 text-sm mb-8">Find the perfect audience segments based on real viewer behavior.</p>
<div className="flex-1 relative min-h-[200px]">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-emerald-500/10 rounded-full animate-[ping_3s_linear_infinite]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-emerald-500/20 rounded-full animate-[ping_3s_linear_infinite_1s]"></div>

<div className="absolute top-0 left-0 right-0 space-y-4">
<div className="p-3 bg-slate-900/80 border border-white/10 rounded-lg flex items-center justify-between backdrop-blur-md animate-float hover:border-emerald-500/50 transition-colors cursor-default shadow-lg">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">
<span className="iconify" data-icon="lucide:shopping-bag" data-width="14"></span>
</div>
<div>
<div className="text-xs text-white font-medium">Tech Shoppers</div>
<div className="text-[10px] text-slate-500">High intent</div>
</div>
</div>
<span className="text-emerald-400 text-xs font-bold bg-emerald-500/10 px-2 py-0.5 rounded">98%</span>
</div>
<div className="p-3 bg-slate-900/80 border border-white/10 rounded-lg flex items-center justify-between backdrop-blur-md animate-float-delayed hover:border-emerald-500/50 transition-colors cursor-default shadow-lg">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
<span className="iconify" data-icon="lucide:briefcase" data-width="14"></span>
</div>
<div>
<div className="text-xs text-white font-medium">SaaS Founders</div>
<div className="text-[10px] text-slate-500">Decision Makers</div>
</div>
</div>
<span className="text-emerald-400 text-xs font-bold bg-emerald-500/10 px-2 py-0.5 rounded">92%</span>
</div>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 group spotlight-card hover:bg-slate-800/50 transition-colors">
<div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-6 shadow-[0_0_20px_rgba(236,72,153,0.1)] group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:pie-chart" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Deep Analytics</h3>
<p className="text-slate-400 text-sm mb-4">Visualize ROI across all channels in one dashboard.</p>
<div className="flex gap-1 items-end h-16 w-full opacity-50 group-hover:opacity-100 transition-opacity">
<div className="w-1/5 bg-pink-500/20 h-[30%] rounded-t group-hover:h-[60%] transition-all duration-500"></div>
<div className="w-1/5 bg-pink-500/20 h-[50%] rounded-t group-hover:h-[80%] transition-all duration-500 delay-75"></div>
<div className="w-1/5 bg-pink-500 h-[70%] rounded-t group-hover:h-[100%] transition-all duration-500 delay-100 shadow-[0_0_15px_rgba(236,72,153,0.5)]"></div>
<div className="w-1/5 bg-pink-500/20 h-[40%] rounded-t group-hover:h-[50%] transition-all duration-500 delay-150"></div>
<div className="w-1/5 bg-pink-500/20 h-[60%] rounded-t group-hover:h-[75%] transition-all duration-500 delay-200"></div>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 group spotlight-card hover:bg-slate-800/50 transition-colors">
<div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6 shadow-[0_0_20px_rgba(245,158,11,0.1)] group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:plug-2" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">1-Click Integration</h3>
<p className="text-slate-400 text-sm mb-6">Connects seamlessly with HubSpot, Salesforce, and Zapier.</p>
<div className="flex justify-between items-center px-2">
<span className="iconify text-slate-500 group-hover:text-white transition-colors" data-icon="lucide:database" data-width="20"></span>
<div className="h-px flex-1 bg-slate-700 mx-3 relative">
<div className="absolute inset-0 bg-amber-500 w-2 animate-beam"></div>
</div>
<span className="iconify text-slate-500 group-hover:text-white transition-colors" data-icon="lucide:cloud" data-width="20"></span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0B1120] border-y border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-grid-animate opacity-20"></div>
<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10">
<div className="w-full lg:w-1/2">
<div className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-white/10 text-xs font-medium text-slate-300 mb-6">
                    AI Workflow Engine
                </div>
<h2 className="text-4xl font-medium text-white mb-6">Prompt to Published <br/> in <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Minutes</span>.</h2>
<p className="text-slate-400 text-lg mb-8 leading-relaxed">
                    Don't have video assets? No problem. Describe your product, and our multi-modal AI generates script, voiceover, and visuals automatically.
                </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 group">
<div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</div>
<span className="text-slate-300 group-hover:text-white transition-colors">GPT-4 Scriptwriting</span>
</li>
<li className="flex items-center gap-3 group">
<div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</div>
<span className="text-slate-300 group-hover:text-white transition-colors">ElevenLabs Voice Synthesis</span>
</li>
<li className="flex items-center gap-3 group">
<div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</div>
<span className="text-slate-300 group-hover:text-white transition-colors">Stock &amp; Generative Video</span>
</li>
</ul>
</div>

<div className="w-full lg:w-1/2">
<div className="rounded-xl bg-[#0f172a] border border-slate-700 shadow-2xl overflow-hidden font-mono text-sm relative group hover:shadow-emerald-900/20 hover:border-emerald-500/30 transition-all">

<div className="absolute inset-0 scanline pointer-events-none z-20 opacity-10"></div>

<div className="bg-slate-800 px-4 py-2 flex gap-2 border-b border-slate-700 items-center">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<div className="ml-4 text-xs text-slate-500">bash — 80x24</div>
</div>

<div className="p-6 space-y-4 min-h-[300px]">
<div className="flex gap-2">
<span className="text-emerald-400">user@aitube:~$</span>
<span className="text-white relative">
<span className="animate-typing overflow-hidden whitespace-nowrap inline-block align-top w-0 border-r-2 border-transparent pr-1">create ad --product="ErgoChair" --tone="energetic"</span>
</span>
</div>
<div className="space-y-2 text-slate-400" style={{animation: 'reveal 0.5s 3.2s forwards', opacity: '0', transform: 'translateY(10px)'}}>
<div className="flex items-center gap-2">&gt; Analyzing product page... <span className="text-emerald-500 ml-auto">Done (0.4s)</span></div>
<div className="flex items-center gap-2">&gt; Generating script variations... <span className="text-emerald-500 ml-auto">Done (1.2s)</span></div>
<div className="flex items-center gap-2">&gt; Sourcing b-roll footage... <span className="text-emerald-500 ml-auto">Found 14 clips</span></div>
<div className="flex items-center gap-2 text-indigo-400">&gt; Synthesizing voiceover (US-Male-Deep)...</div>
<div className="w-full h-1 bg-slate-800 rounded mt-2 overflow-hidden">
<div className="h-full bg-emerald-500 animate-[beam_1s_ease-in-out_infinite] w-1/2"></div>
</div>
</div>
<div className="mt-4 p-4 rounded bg-slate-800/50 border border-slate-700 hover:bg-slate-800 transition-colors cursor-pointer" style={{animation: 'reveal 0.5s 4.5s forwards', opacity: '0', transform: 'translateY(10px)'}}>
<div className="flex gap-4 items-center">
<div className="w-12 h-12 bg-indigo-900/20 rounded border border-indigo-500/30 flex items-center justify-center relative">
<span className="iconify text-indigo-400" data-icon="lucide:film" data-width="20"></span>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
</div>
<div>
<div className="text-white font-medium mb-1">ad_variant_A.mp4</div>
<div className="text-xs text-slate-500">Ready for review • 15.4MB</div>
</div>
<button className="ml-auto bg-white text-slate-950 px-3 py-1 rounded text-xs font-bold hover:bg-emerald-400 transition-colors shadow-lg">Preview</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 relative z-10">
<h2 className="text-3xl font-medium text-white mb-4">Loved by Growth Teams</h2>
<p className="text-slate-400">Join 10,000+ marketers scaling with AITube</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">

<div className="space-y-6">
<div className="glass-panel p-6 rounded-xl hover:border-slate-600 transition-colors">
<p className="text-slate-300 text-sm mb-4 leading-relaxed">"The auto-bidding feature alone saved us 20 hours a week. It reacts to trend spikes faster than any human could."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-xs font-bold border border-slate-700">JD</div>
<div>
<div className="text-white text-xs font-medium">Jane Doe</div>
<div className="text-slate-500 text-[10px]">CMO at TechFlow</div>
</div>
</div>
</div>
<div className="glass-panel p-6 rounded-xl hover:border-slate-600 transition-colors">
<p className="text-slate-300 text-sm mb-4 leading-relaxed">"AITube's creative generation is scary good. We A/B tested AI ads against our agency's work, and AI won by 14%."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-xs font-bold border border-slate-700">MK</div>
<div>
<div className="text-white text-xs font-medium">Mike K.</div>
<div className="text-slate-500 text-[10px]">Founder, SaaSify</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">
<div className="glass-panel p-6 rounded-xl bg-gradient-to-b from-indigo-900/20 to-slate-900/20 border-indigo-500/20 shadow-[0_0_30px_rgba(99,102,241,0.1)] relative group">
<div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
<div className="relative z-10">
<div className="flex gap-1 mb-3 text-indigo-400">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="12"></span>
</div>
<p className="text-white text-sm mb-4 leading-relaxed font-medium">"We scaled from $1k to $50k monthly ad spend without hiring a single media buyer. The platform is robust."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg">AS</div>
<div>
<div className="text-white text-xs font-medium">Alex Smith</div>
<div className="text-slate-500 text-[10px]">Director at GrowthLab</div>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">
<div className="glass-panel p-6 rounded-xl hover:border-slate-600 transition-colors">
<p className="text-slate-300 text-sm mb-4 leading-relaxed">"The integration with our CRM is seamless. We can track YouTube view all the way to closed deal."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-xs font-bold border border-slate-700">SL</div>
<div>
<div className="text-white text-xs font-medium">Sarah Lee</div>
<div className="text-slate-500 text-[10px]">Marketing Ops</div>
</div>
</div>
</div>
<div className="glass-panel p-6 rounded-xl hover:border-slate-600 transition-colors">
<p className="text-slate-300 text-sm mb-4 leading-relaxed">"Support is phenomenal. They helped us set up our first pixel and we saw results day one."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-xs font-bold border border-slate-700">DR</div>
<div>
<div className="text-white text-xs font-medium">David Ross</div>
<div className="text-slate-500 text-[10px]">E-com Owner</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden flex items-center justify-center group">

<div className="absolute inset-0 bg-slate-950">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-slate-950 to-slate-950 opacity-50 group-hover:opacity-70 transition-opacity duration-1000"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent"></div>
</div>
<div className="relative z-10 max-w-4xl text-center">
<div className="mb-6 inline-flex justify-center">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.5)] animate-float">
<span className="iconify text-white" data-icon="lucide:rocket" data-width="32"></span>
</div>
</div>
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-6">
                Ready to launch?
            </h2>
<p className="text-slate-400 text-lg mb-10 max-w-lg mx-auto">
                Start your 14-day free trial. No credit card required. Cancel anytime.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="px-8 py-4 bg-white text-slate-950 rounded-full font-bold hover:bg-indigo-50 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center gap-2">
                    Get Started Now <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="px-8 py-4 bg-slate-900 border border-slate-700 text-white rounded-full font-medium hover:bg-slate-800 transition-colors">
                    Talk to Sales
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-slate-950 pt-16 pb-8 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
<div className="col-span-2">
<a className="flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:play" data-width="12"></span>
</div>
<span className="text-sm font-semibold tracking-tight text-white">AITube</span>
</a>
<p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                        The complete operating system for modern YouTube advertising. Automate, create, and scale.
                    </p>
</div>
<div>
<h4 className="text-white text-xs font-semibold mb-6">Platform</h4>
<ul className="space-y-3 text-xs text-slate-400">
<li><a className="hover:text-white transition-colors hover:translate-x-1 inline-block" href="#">Video Generator</a></li>
<li><a className="hover:text-white transition-colors hover:translate-x-1 inline-block" href="#">Ad Analytics</a></li>
<li><a className="hover:text-white transition-colors hover:translate-x-1 inline-block" href="#">Audience Finder</a></li>
<li><a className="hover:text-white transition-colors hover:translate-x-1 inline-block" href="#">Auto-Bidding</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-semibold mb-6">Company</h4>
<ul className="space-y-3 text-xs text-slate-400">
<li><a className="hover:text-white transition-colors hover:translate-x-1 inline-block" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors hover:translate-x-1 inline-block" href="#">Careers</a> <span className="text-[9px] text-indigo-400 bg-indigo-400/10 px-1 py-0.5 rounded ml-1 animate-pulse">Hiring</span></li>
<li><a className="hover:text-white transition-colors hover:translate-x-1 inline-block" href="#">Legal</a></li>
<li><a className="hover:text-white transition-colors hover:translate-x-1 inline-block" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-semibold mb-6">Connect</h4>
<div className="flex gap-4">
<a className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all hover:scale-110 border border-slate-800 hover:border-slate-600" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="14"></span></a>
<a className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all hover:scale-110 border border-slate-800 hover:border-slate-600" href="#"><span className="iconify" data-icon="lucide:github" data-width="14"></span></a>
<a className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all hover:scale-110 border border-slate-800 hover:border-slate-600" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="14"></span></a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-8">
<p className="text-[10px] text-slate-600">© 2024 AITube Inc. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="text-[10px] text-slate-600 hover:text-slate-400" href="#">Privacy Policy</a>
<a className="text-[10px] text-slate-600 hover:text-slate-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
