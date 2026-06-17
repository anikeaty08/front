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
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
void: '#050505',
data: {
red: '#FF2E2E',
silver: '#E5E7EB',
dim: '#4B5563'
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'spin-slow': 'spin 12s linear infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
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
      

<div className="bg-grain"></div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[80vh] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-data-red/10 via-void to-void blur-3xl -z-10 pointer-events-none"></div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-void/70 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-data-red rounded-full shadow-[0_0_10px_rgba(255,46,46,0.8)]"></div>
<span className="text-sm font-semibold tracking-widest text-white">THE HEART SHARE</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-neutral-400">
<a className="hover:text-white transition-colors" href="#">PLATFORM</a>
<a className="hover:text-white transition-colors" href="#">INTELLIGENCE</a>
<a className="hover:text-white transition-colors" href="#">ENTERPRISE</a>
</div>
<button className="group relative px-4 py-2 text-xs font-medium text-white overflow-hidden bg-white/5 border border-white/10 rounded-sm hover:border-white/20 transition-all">
<span className="relative z-10 flex items-center gap-2">
                    LOGIN
                    <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</span>
</button>
</div>
</nav>
<main className="relative z-10 pt-32 pb-20">

<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

<div className="lg:col-span-7 flex flex-col gap-8 relative">

<div className="inline-flex items-center gap-3 font-mono text-xs text-data-red border border-data-red/20 bg-data-red/5 px-3 py-1.5 w-max rounded-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-data-red opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-data-red"></span>
</span>
                    SYSTEM STATUS: ANALYZING
                </div>
<h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-medium tracking-tight text-white text-glow">
                    Your Customers <br/>
                    Are Satisfied. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-neutral-700">So Why Are They Leaving?</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 font-light max-w-xl leading-relaxed">
                    Decode the silent signals of churn. We transform raw behavioral data into a predictive neural model of customer sentiment.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mt-4">
<button className="group relative px-8 py-4 bg-data-red text-white text-sm font-semibold tracking-wide rounded-sm overflow-hidden glow-red hover:bg-red-600 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
<span className="flex items-center gap-3">
                            [ INITIALIZE ANALYSIS ]
                            <iconify-icon icon="solar:cpu-bolt-linear" width="18"></iconify-icon>
</span>
</button>
<button className="px-8 py-4 text-sm font-medium text-white border border-white/10 hover:bg-white/5 transition-colors rounded-sm flex items-center gap-3">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
                        WATCH DEMO
                    </button>
</div>
<div className="flex items-center gap-6 mt-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xs font-semibold tracking-widest text-neutral-500">TRUSTED BY INNOVATORS</span>
<div className="h-px w-12 bg-white/20"></div>
<div className="flex gap-6">
<iconify-icon icon="simple-icons:vercel" width="20"></iconify-icon>
<iconify-icon icon="simple-icons:stripe" width="36"></iconify-icon>
<iconify-icon icon="simple-icons:notion" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="lg:col-span-5 relative h-[500px] flex items-center justify-center animate-float">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"></div>

<div className="relative w-64 h-64 md:w-80 md:h-80">

<div className="absolute inset-0 border border-data-red/20 rounded-full animate-spin-slow"></div>
<div className="absolute inset-4 border border-dashed border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="absolute inset-12 border border-white/5 rounded-full"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-data-red blur-[60px] opacity-40 animate-pulse-slow"></div>

<div className="absolute inset-0 flex items-center justify-center z-10">
<div className="relative">
<iconify-icon className="text-white drop-shadow-[0_0_15px_rgba(255,46,46,0.8)]" icon="solar:heart-pulse-linear" width="64"></iconify-icon>

<div className="absolute -top-12 -right-8">
<iconify-icon className="text-data-red" icon="solar:point-on-map-linear" width="24"></iconify-icon>
<div className="w-px h-8 bg-gradient-to-b from-transparent to-data-red/50 absolute top-6 left-1/2"></div>
</div>
<div className="absolute -bottom-10 -left-6">
<iconify-icon className="text-neutral-500" icon="solar:connection-point-linear" width="24"></iconify-icon>
<div className="w-px h-8 bg-gradient-to-t from-transparent to-neutral-500/50 absolute bottom-6 left-1/2"></div>
</div>
</div>
</div>

<div className="absolute top-0 right-0 glass-panel p-3 rounded-sm transform translate-x-4 -translate-y-4 shadow-xl border-l-2 border-l-data-red">
<div className="text-[10px] font-mono text-neutral-400 mb-1">CHURN RISK</div>
<div className="text-lg font-medium text-white flex items-center gap-2">
                            8.4% 
                            <span className="text-[10px] text-data-red bg-data-red/10 px-1 rounded">▲ 1.2%</span>
</div>
</div>
<div className="absolute bottom-10 -left-8 glass-panel p-3 rounded-sm transform shadow-xl">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<div className="text-[10px] font-mono text-neutral-400">LIVE FEED</div>
</div>
<div className="space-y-1">
<div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
<div className="w-2/3 h-full bg-white/50"></div>
</div>
<div className="w-16 h-1 bg-white/10 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<section className="max-w-7xl mx-auto px-6 mt-24">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-2">Omnichannel Intelligence</h2>
<p className="text-sm text-neutral-500 font-mono">/ SOURCE_ID: MASTER_BLUEPRINT_V6</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-sm hover:bg-white/5 text-neutral-400 hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-sm hover:bg-white/5 text-neutral-400 hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-1 glass-panel rounded-sm p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-50">
<iconify-icon icon="solar:radar-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-white tracking-wide mb-6">SENTIMENT TOPOLOGY</h3>
<div className="relative w-full aspect-square flex items-center justify-center">

<svg className="w-full h-full text-white/10 absolute inset-0" viewbox="0 0 100 100">
<polygon fill="none" points="50,10 90,30 90,70 50,90 10,70 10,30" stroke="currentColor" strokeWidth="0.5"></polygon>
<polygon fill="none" points="50,25 75,37.5 75,62.5 50,75 25,62.5 25,37.5" stroke="currentColor" strokeWidth="0.5"></polygon>
<line stroke="currentColor" strokeWidth="0.5" x1="50" x2="50" y1="50" y2="10"></line>
<line stroke="currentColor" strokeWidth="0.5" x1="50" x2="90" y1="50" y2="30"></line>
<line stroke="currentColor" strokeWidth="0.5" x1="50" x2="90" y1="50" y2="70"></line>
<line stroke="currentColor" strokeWidth="0.5" x1="50" x2="50" y1="50" y2="90"></line>
<line stroke="currentColor" strokeWidth="0.5" x1="50" x2="10" y1="50" y2="70"></line>
<line stroke="currentColor" strokeWidth="0.5" x1="50" x2="10" y1="50" y2="30"></line>
</svg>

<svg className="w-full h-full absolute inset-0 drop-shadow-[0_0_10px_rgba(255,46,46,0.3)]" viewbox="0 0 100 100">
<polygon className="radar-poly" fill="rgba(255, 46, 46, 0.1)" points="50,15 85,35 80,65 50,85 20,65 25,35" stroke="#FF2E2E" strokeWidth="1.5"></polygon>

<circle cx="50" cy="15" fill="white" r="1.5"></circle>
<circle cx="85" cy="35" fill="white" r="1.5"></circle>
<circle cx="80" cy="65" fill="white" r="1.5"></circle>
<circle cx="50" cy="85" fill="white" r="1.5"></circle>
<circle cx="20" cy="65" fill="white" r="1.5"></circle>
<circle cx="25" cy="35" fill="white" r="1.5"></circle>
</svg>
</div>
<div className="mt-4 flex justify-between items-center text-xs font-mono text-neutral-400">
<span>SCORE: 94/100</span>
<span className="text-data-red">CRITICAL</span>
</div>
</div>

<div className="md:col-span-2 glass-panel rounded-sm p-8 flex flex-col justify-between">
<div className="flex justify-between items-start mb-8">
<div>
<h3 className="text-sm font-semibold text-white tracking-wide mb-1">HEALTH METRICS</h3>
<p className="text-xs text-neutral-500">Real-time analysis of key retention drivers</p>
</div>
<button className="text-xs text-white border border-white/10 px-3 py-1 rounded-sm hover:bg-white/5">EXPORT CSV</button>
</div>
<div className="space-y-6">

<div className="group">
<div className="flex justify-between items-end mb-2">
<span className="text-sm text-neutral-300 flex items-center gap-2">
<iconify-icon className="text-neutral-500" icon="solar:shield-check-linear"></iconify-icon>
                                    Product Adoption
                                </span>
<span className="text-sm font-mono text-white">92%</span>
</div>
<div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-neutral-500 to-white w-[92%]"></div>
</div>
</div>

<div className="group">
<div className="flex justify-between items-end mb-2">
<span className="text-sm text-neutral-300 flex items-center gap-2">
<iconify-icon className="text-neutral-500" icon="solar:users-group-rounded-linear"></iconify-icon>
                                    NPS Velocity
                                </span>
<span className="text-sm font-mono text-data-red">45%</span>
</div>
<div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-red-900 to-data-red w-[45%] shadow-[0_0_10px_#FF2E2E]"></div>
</div>
</div>

<div className="group">
<div className="flex justify-between items-end mb-2">
<span className="text-sm text-neutral-300 flex items-center gap-2">
<iconify-icon className="text-neutral-500" icon="solar:graph-new-linear"></iconify-icon>
                                    Expansion Revenue
                                </span>
<span className="text-sm font-mono text-white">78%</span>
</div>
<div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-neutral-500 to-white w-[78%]"></div>
</div>
</div>

<div className="group">
<div className="flex justify-between items-end mb-2">
<span className="text-sm text-neutral-300 flex items-center gap-2">
<iconify-icon className="text-neutral-500" icon="solar:link-circle-linear"></iconify-icon>
                                    Integration Health
                                </span>
<span className="text-sm font-mono text-white">99.9%</span>
</div>
<div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-neutral-500 to-white w-[99%]"></div>
</div>
</div>
</div>
</div>

<div className="md:col-span-3 glass-panel rounded-sm p-6 flex flex-col md:flex-row items-center justify-between gap-6 border-t-2 border-t-data-red/50">
<div className="flex items-center gap-4">
<div className="p-3 bg-data-red/10 rounded-full text-data-red">
<iconify-icon icon="solar:bell-bing-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white">Anomaly Detected</h4>
<p className="text-xs text-neutral-400 mt-1">Enterprise segment 'FinTech' showing -15% engagement drop in last 24h.</p>
</div>
</div>
<button className="whitespace-nowrap px-4 py-2 text-xs font-semibold text-data-red bg-data-red/10 border border-data-red/20 rounded-sm hover:bg-data-red hover:text-white transition-all">
                        VIEW REPORT
                    </button>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/5 bg-black py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-xs text-neutral-600 font-mono">© 2024 THE HEART SHARE. SYSTEMS ONLINE.</p>
<div className="flex gap-6">
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><iconify-icon icon="simple-icons:x" width="16"></iconify-icon></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><iconify-icon icon="simple-icons:linkedin" width="16"></iconify-icon></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><iconify-icon icon="simple-icons:github" width="16"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
