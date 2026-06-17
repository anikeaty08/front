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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        lucide.createIcons();
        function toggleModal(show) {
            const modal = document.getElementById('booking-modal');
            if(show) {
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            } else {
                modal.classList.add('hidden');
                document.body.style.overflow = '';
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
      

<div className="bg-[#2dd4bf]/[0.03] border-b border-[#2dd4bf]/10 py-2.5 px-4 flex justify-center relative z-50 backdrop-blur-sm">
<div className="flex items-center gap-3 text-xs md:text-sm font-medium">
<span className="flex h-2 w-2 rounded-full bg-[#2dd4bf] animate-pulse"></span>
<span className="text-neutral-300">New: Intent-Based Orchestration Engine v2.0 is live.</span>
<a className="text-[#2dd4bf] hover:text-[#5eead4] flex items-center gap-1 transition-colors group" href="#">
                See what's new <i className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<nav className="sticky top-0 z-40 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2.5 group" href="#">
<div className="w-7 h-7 bg-gradient-to-br from-[#2dd4bf] to-[#0f766e] rounded-lg flex items-center justify-center text-black font-bold shadow-[0_0_15px_rgba(45,212,191,0.2)]">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
</div>
<span className="text-white font-medium tracking-tight group-hover:opacity-80 transition-opacity">Nexsales</span>
</a>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#platform">Platform</a>
<a className="hover:text-white transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-white transition-colors" href="#customers">Customers</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:block text-xs font-medium text-neutral-400 hover:text-white transition-colors" onclick="toggleModal(true)">Log in</button>
<button className="bg-[#e5e5e5] hover:bg-white text-black px-4 py-2 rounded-lg text-xs font-medium transition-all shadow-[0_0_10px_rgba(255,255,255,0.05)] flex items-center gap-2" onclick="toggleModal(true)">
                    Start Orchestrating
                </button>
</div>
</div>
</nav>

<main className="relative pt-20 pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#2dd4bf] rounded-full blur-[140px] opacity-[0.08] -z-10 pointer-events-none mix-blend-screen"></div>
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.08] rounded-full pl-1 pr-3 py-1 mb-8 hover:border-[#2dd4bf]/20 transition-colors cursor-default backdrop-blur-md">
<span className="bg-[#2dd4bf]/10 text-[#2dd4bf] text-[10px] font-semibold px-2 py-0.5 rounded-full border border-[#2dd4bf]/20">v2.0</span>
<span className="text-xs text-neutral-300">The first end-to-end revenue orchestrator</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto text-balance">
                Stop guessing. <br/>
<span className="font-serif-italic text-gradient-teal font-normal">Start orchestrating.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light text-balance">
                Nexsales unifies your data, intent signals, and outreach execution into one intelligent engine. Predictable pipeline, engineered.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="btn-primary text-white text-sm font-medium px-8 py-3.5 rounded-xl flex items-center gap-2 group" onclick="toggleModal(true)">
                    Get a Demo
                    <i className="w-4 h-4 transition-transform group-hover:translate-x-0.5 opacity-70" data-lucide="chevron-right"></i>
</button>
<button className="text-neutral-400 hover:text-white text-sm font-medium px-6 py-3.5 rounded-xl border border-white/10 hover:bg-white/5 transition-all flex items-center gap-2">
<i className="w-4 h-4" data-lucide="play-circle"></i> View Workflow
                </button>
</div>

<div className="max-w-6xl mx-auto relative group perspective-1000">
<div className="absolute -inset-0.5 bg-gradient-to-b from-[#2dd4bf]/20 to-transparent rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
<div className="relative bg-[#050505] rounded-xl border border-white/10 shadow-2xl aspect-[16/9] overflow-hidden flex flex-col">

<div className="h-10 border-b border-white/5 bg-white/[0.02] flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
</div>
<div className="mx-auto w-1/3 h-5 rounded-md bg-white/5 border border-white/5"></div>
</div>

<div className="flex-1 bg-gradient-to-b from-[#0a0a0a] to-[#050505] p-6 md:p-10 relative">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

<div className="absolute inset-0 flex items-center justify-center">

<div className="relative z-10 w-20 h-20 bg-[#0f172a] border border-[#2dd4bf]/30 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(45,212,191,0.15)]">
<i className="w-8 h-8 text-[#2dd4bf]" data-lucide="layers"></i>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: '1'}}>
<defs>
<lineargradient id="lineGrad" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: 'rgba(45,212,191,0)', stopOpacity: '0'}}></stop>
<stop offset="50%" style={{stopColor: 'rgba(45,212,191,0.5)', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: 'rgba(45,212,191,0)', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>

<path className="animate-pulse" d="M 200 300 Q 400 300 550 350" fill="none" stroke="url(#lineGrad)" strokeWidth="1" style={{opacity: '0.3'}}></path>

<path className="animate-pulse" d="M 1000 300 Q 800 300 650 350" fill="none" stroke="url(#lineGrad)" strokeWidth="1" style={{opacity: '0.3', animationDelay: '1s'}}></path>
</svg>

<div className="absolute left-[10%] top-[30%] bg-[#111] border border-white/10 p-4 rounded-lg w-48 animate-float shadow-xl">
<div className="flex items-center gap-3 mb-2">
<div className="bg-blue-500/10 p-1.5 rounded text-blue-400"><i className="w-4 h-4" data-lucide="database"></i></div>
<div className="text-[10px] font-mono text-neutral-400">DATA SOURCE</div>
</div>
<div className="h-1.5 bg-neutral-800 rounded-full w-3/4 mb-1.5"></div>
<div className="h-1.5 bg-neutral-800 rounded-full w-1/2"></div>
</div>

<div className="absolute right-[10%] top-[40%] bg-[#111] border border-white/10 p-4 rounded-lg w-48 animate-float shadow-xl" style={{animationDelay: '-2s'}}>
<div className="flex items-center gap-3 mb-2">
<div className="bg-emerald-500/10 p-1.5 rounded text-emerald-400"><i className="w-4 h-4" data-lucide="check-circle"></i></div>
<div className="text-[10px] font-mono text-neutral-400">MEETING BOOKED</div>
</div>
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-neutral-700"></div>
<div className="h-1.5 bg-neutral-800 rounded-full w-20"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="border-y border-white/[0.06] bg-[#050505]">
<div className="max-w-7xl mx-auto py-10 px-6">
<p className="text-center text-xs font-medium text-neutral-500 mb-8 uppercase tracking-widest">Trusted by high-growth revenue teams</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-lg font-semibold text-white flex items-center gap-2"><i className="w-5 h-5 fill-white" data-lucide="triangle"></i> Vercel</span>
<span className="text-lg font-semibold text-white flex items-center gap-2"><i className="w-5 h-5 fill-white" data-lucide="box"></i> Linear</span>
<span className="text-lg font-semibold text-white flex items-center gap-2"><i className="w-5 h-5 fill-white" data-lucide="hexagon"></i> Stripe</span>
<span className="text-lg font-semibold text-white flex items-center gap-2"><i className="w-5 h-5 fill-white" data-lucide="circle"></i> Ramp</span>
<span className="text-lg font-semibold text-white flex items-center gap-2"><i className="w-5 h-5 fill-white" data-lucide="aperture"></i> Retool</span>
</div>
</div>
</section>

<section className="py-32 bg-[#030303] relative">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 max-w-2xl">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">The modern GTM stack is <span className="text-neutral-500">broken.</span></h2>
<p className="text-lg text-neutral-400 font-light">Your data lives in silos. Your SDRs are doing manual data entry. Your intent signals are expiring before anyone acts. It’s chaos.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-panel p-8 rounded-2xl group hover:border-[#2dd4bf]/30 transition-colors">
<div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 mb-6 border border-red-500/20">
<i className="w-6 h-6" data-lucide="database-zap"></i>
</div>
<h3 className="text-lg font-medium text-white mb-3">Data Decay</h3>
<p className="text-neutral-400 text-sm leading-relaxed">25% of B2B contact data goes bad every year. You're emailing ghosts.</p>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:border-[#2dd4bf]/30 transition-colors">
<div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6 border border-orange-500/20">
<i className="w-6 h-6" data-lucide="git-merge"></i>
</div>
<h3 className="text-lg font-medium text-white mb-3">Disconnected Tools</h3>
<p className="text-neutral-400 text-sm leading-relaxed">ZoomInfo for data. Outreach for email. Sales Nav for research. None of them talk to each other.</p>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:border-[#2dd4bf]/30 transition-colors">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 border border-purple-500/20">
<i className="w-6 h-6" data-lucide="clock"></i>
</div>
<h3 className="text-lg font-medium text-white mb-3">Slow Response Time</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Buying windows open and close in hours. Manual research is too slow to capture demand.</p>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-[#050505] overflow-hidden border-t border-white/5">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#115e59]/20 via-[#050505] to-[#050505] opacity-40"></div>
<div className="text-center max-w-3xl mx-auto px-6 mb-12 relative z-10">
<div className="text-[#2dd4bf] text-xs font-semibold tracking-widest uppercase mb-4">The Solution</div>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Orchestrated Revenue</h2>
<p className="text-neutral-400 text-lg font-light">Nexsales sits at the center of your stack, ingesting signals and triggering actions automatically.</p>
</div>

<div className="relative w-full max-w-4xl mx-auto h-[600px] flex items-center justify-center scale-75 md:scale-100">

<div className="relative z-20 w-32 h-32 rounded-3xl bg-[#0a0a0a] border border-[#2dd4bf]/40 shadow-[0_0_60px_rgba(45,212,191,0.15)] flex items-center justify-center group">
<div className="absolute inset-0 bg-[#2dd4bf]/5 rounded-3xl animate-pulse"></div>
<div className="text-white">
<svg className="text-[#2dd4bf]" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="48"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center z-10">

<div className="w-[300px] h-[300px] rounded-full border border-white/5 animate-spin-slow"></div>

<div className="w-[500px] h-[500px] rounded-full border border-white/5 animate-spin-slow-reverse"></div>

<svg className="absolute w-[600px] h-[600px] pointer-events-none opacity-40">
<line className="stroke-[#2dd4bf] stroke-1 animate-flow-in" x1="300" x2="300" y1="50" y2="250"></line>
<line className="stroke-[#2dd4bf] stroke-1 animate-flow-in delay-1" x1="550" x2="350" y1="300" y2="300"></line>
<line className="stroke-[#2dd4bf] stroke-1 animate-flow-in delay-2" x1="300" x2="300" y1="550" y2="350"></line>
<line className="stroke-[#2dd4bf] stroke-1 animate-flow-in delay-3" x1="50" x2="250" y1="300" y2="300"></line>
</svg>
</div>


<div className="absolute top-[150px] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#171717] p-3 rounded-xl border border-white/10 shadow-lg animate-float">
<i className="w-5 h-5 text-blue-400" data-lucide="database"></i>
</div>

<div className="absolute top-1/2 right-[150px] translate-x-1/2 -translate-y-1/2 bg-[#171717] p-3 rounded-xl border border-white/10 shadow-lg animate-float delay-1">
<i className="w-5 h-5 text-purple-400" data-lucide="mail"></i>
</div>

<div className="absolute bottom-[150px] left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#171717] p-3 rounded-xl border border-white/10 shadow-lg animate-float delay-2">
<i className="w-5 h-5 text-green-400" data-lucide="users"></i>
</div>

<div className="absolute top-1/2 left-[150px] -translate-x-1/2 -translate-y-1/2 bg-[#171717] p-3 rounded-xl border border-white/10 shadow-lg animate-float delay-3">
<i className="w-5 h-5 text-orange-400" data-lucide="activity"></i>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 mt-12">

<div className="glass-panel rounded-3xl p-10 relative overflow-hidden group">
<div className="relative z-10">
<div className="w-12 h-12 bg-[#2dd4bf]/10 rounded-xl flex items-center justify-center text-[#2dd4bf] mb-6 border border-[#2dd4bf]/20">
<i className="w-6 h-6" data-lucide="scan-search"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Deep Signal Detection</h3>
<p className="text-neutral-400 leading-relaxed mb-8">Nexsales doesn't just look at firmographics. We scrape job boards, forum discussions, and tech stack changes to find the 3% of buyers who are actually ready.</p>
<ul className="space-y-3 text-sm text-neutral-300">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#2dd4bf]" data-lucide="check"></i> Hiring trends analysis</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#2dd4bf]" data-lucide="check"></i> Competitor displacement signals</li>
</ul>
</div>

<div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#2dd4bf]/10 to-transparent blur-3xl group-hover:bg-[#2dd4bf]/20 transition-all"></div>
</div>

<div className="glass-panel rounded-3xl p-10 relative overflow-hidden group">
<div className="relative z-10">
<div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Autonomous Execution</h3>
<p className="text-neutral-400 leading-relaxed mb-8">Once a signal is detected, Nexsales automatically enriches the contact, generates a hyper-personalized message using LLMs, and queues it in your sequencer.</p>
<ul className="space-y-3 text-sm text-neutral-300">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-indigo-400" data-lucide="check"></i> 100% verified mobile numbers</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-indigo-400" data-lucide="check"></i> AI-written openers that convert</li>
</ul>
</div>

<div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-tl from-indigo-500/10 to-transparent blur-3xl group-hover:bg-indigo-500/20 transition-all"></div>
</div>
</div>
</section>

<section className="py-32 bg-[#030303] border-t border-white/5">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-24">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight">How it works</h2>
</div>
<div className="relative">

<div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2"></div>

<div className="flex flex-col md:flex-row gap-8 md:gap-24 mb-24 relative group">
<div className="md:w-1/2 md:text-right">
<div className="text-[#2dd4bf] font-mono text-xs mb-2">PHASE 01</div>
<h3 className="text-xl font-medium text-white mb-3">Connect your stack</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Integrate Nexsales with your CRM, Email Sender, and LinkedIn. It takes 5 minutes to create a unified data layer.</p>
</div>
<div className="absolute left-0 md:left-1/2 w-14 h-14 bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center z-10 md:-translate-x-1/2 shadow-xl group-hover:border-[#2dd4bf] transition-colors">
<i className="w-6 h-6 text-neutral-400 group-hover:text-[#2dd4bf] transition-colors" data-lucide="plug"></i>
</div>
<div className="md:w-1/2 pl-16 md:pl-0">
<div className="bg-[#111] p-4 rounded-lg border border-white/5 text-xs font-mono text-neutral-500">
<div className="flex items-center gap-2 mb-2 text-green-400"><span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> Salesforce Connected</div>
<div className="flex items-center gap-2 mb-2 text-green-400"><span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> Outreach.io Connected</div>
<div className="flex items-center gap-2 text-neutral-600"><span className="w-1.5 h-1.5 rounded-full bg-neutral-600"></span> Syncing Data...</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse gap-8 md:gap-24 mb-24 relative group">
<div className="md:w-1/2 md:text-left">
<div className="text-[#2dd4bf] font-mono text-xs mb-2">PHASE 02</div>
<h3 className="text-xl font-medium text-white mb-3">Define ICP &amp; Triggers</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Tell Nexsales who your best customers are. We set up AI agents to monitor the web for signals that match your criteria.</p>
</div>
<div className="absolute left-0 md:left-1/2 w-14 h-14 bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center z-10 md:-translate-x-1/2 shadow-xl group-hover:border-[#2dd4bf] transition-colors">
<i className="w-6 h-6 text-neutral-400 group-hover:text-[#2dd4bf] transition-colors" data-lucide="target"></i>
</div>
<div className="md:w-1/2 pl-16 md:pl-0 md:text-right">
<div className="inline-block bg-[#111] p-4 rounded-lg border border-white/5 text-left">
<div className="text-[10px] text-neutral-500 mb-1">TRIGGER</div>
<div className="text-sm text-white font-medium mb-2">Series B Funding &gt; $20M</div>
<div className="text-[10px] text-neutral-500 mb-1">ROLE</div>
<div className="text-sm text-white font-medium">VP of Engineering</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row gap-8 md:gap-24 relative group">
<div className="md:w-1/2 md:text-right">
<div className="text-[#2dd4bf] font-mono text-xs mb-2">PHASE 03</div>
<h3 className="text-xl font-medium text-white mb-3">Launch &amp; Book</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Campaigns run on autopilot. Our system handles follow-ups, handles basic objections, and books meetings on your calendar.</p>
</div>
<div className="absolute left-0 md:left-1/2 w-14 h-14 bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center z-10 md:-translate-x-1/2 shadow-xl group-hover:border-[#2dd4bf] transition-colors">
<i className="w-6 h-6 text-neutral-400 group-hover:text-[#2dd4bf] transition-colors" data-lucide="calendar-check-2"></i>
</div>
<div className="md:w-1/2 pl-16 md:pl-0">
<div className="bg-[#111] p-4 rounded-lg border border-white/5 flex gap-3 items-center">
<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs">JD</div>
<div>
<div className="text-xs text-neutral-400">Meeting Booked with</div>
<div className="text-sm font-semibold text-white">John Doe, Acme Corp</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-[#0a0a0a]">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center">
<div className="text-3xl md:text-4xl font-semibold text-white mb-2 tracking-tight">4x</div>
<div className="text-xs text-neutral-500 font-medium uppercase tracking-wide">Pipeline ROI</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-semibold text-white mb-2 tracking-tight">35%</div>
<div className="text-xs text-neutral-500 font-medium uppercase tracking-wide">Higher Response Rate</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-semibold text-white mb-2 tracking-tight">20h</div>
<div className="text-xs text-neutral-500 font-medium uppercase tracking-wide">Saved Per Rep/Week</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-semibold text-white mb-2 tracking-tight">98%</div>
<div className="text-xs text-neutral-500 font-medium uppercase tracking-wide">Data Accuracy</div>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white text-center mb-12 tracking-tight">Questions?</h2>
<div className="space-y-4">
<div className="faq-item bg-[#111] border border-white/5 rounded-lg overflow-hidden">
<button className="flex items-center justify-between w-full p-5 text-left hover:bg-white/[0.02] transition-colors" onclick="this.parentElement.classList.toggle('active')">
<span className="text-sm font-medium text-neutral-200">How does the data enrichment work?</span>
<i className="faq-icon w-4 h-4 text-neutral-500 transition-transform duration-300" data-lucide="plus"></i>
</button>
<div className="faq-answer">
<div className="px-5 pb-5 text-neutral-400 text-sm leading-relaxed">
                        We waterfall across 15+ premium data providers (including Apollo, ZoomInfo, and unique mobile number databases) to find the highest probability contact info. Then we verify it in real-time.
                    </div>
</div>
</div>
<div className="faq-item bg-[#111] border border-white/5 rounded-lg overflow-hidden">
<button className="flex items-center justify-between w-full p-5 text-left hover:bg-white/[0.02] transition-colors" onclick="this.parentElement.classList.toggle('active')">
<span className="text-sm font-medium text-neutral-200">Does it integrate with Salesforce/Hubspot?</span>
<i className="faq-icon w-4 h-4 text-neutral-500 transition-transform duration-300" data-lucide="plus"></i>
</button>
<div className="faq-answer">
<div className="px-5 pb-5 text-neutral-400 text-sm leading-relaxed">
                        Yes. We have native bi-directional sync. Nexsales pushes contacts, activities, and tasks into your CRM automatically.
                    </div>
</div>
</div>
<div className="faq-item bg-[#111] border border-white/5 rounded-lg overflow-hidden">
<button className="flex items-center justify-between w-full p-5 text-left hover:bg-white/[0.02] transition-colors" onclick="this.parentElement.classList.toggle('active')">
<span className="text-sm font-medium text-neutral-200">Can I customize the outreach templates?</span>
<i className="faq-icon w-4 h-4 text-neutral-500 transition-transform duration-300" data-lucide="plus"></i>
</button>
<div className="faq-answer">
<div className="px-5 pb-5 text-neutral-400 text-sm leading-relaxed">
                        Absolutely. While our AI generates high-converting drafts based on buying signals, you have full control to approve, edit, or templatize the messaging before it goes out.
                    </div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden flex flex-col items-center text-center">
<div className="absolute inset-0 bg-gradient-to-t from-[#2dd4bf]/10 to-transparent pointer-events-none"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#2dd4bf] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
<div className="relative z-10 max-w-4xl px-6">
<h2 className="text-5xl md:text-6xl font-medium text-white tracking-tight mb-8">Ready to orchestrate revenue?</h2>
<p className="text-lg text-neutral-400 mb-10 max-w-xl mx-auto">Join the high-performance revenue teams using Nexsales to automate their pipeline generation.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="btn-primary text-white font-medium px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition-transform" onclick="toggleModal(true)">
                    Start Your Free Pilot
                </button>
</div>
</div>
</section>

<footer className="bg-[#050505] border-t border-white/5 py-12 text-sm">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-neutral-800 rounded flex items-center justify-center text-white text-[10px] font-bold">N</div>
<span className="text-neutral-300 font-medium">Nexsales Inc.</span>
</div>
<div className="flex gap-6 text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
<div className="text-neutral-600">© 2024 Nexsales. All rights reserved.</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] hidden flex items-center justify-center p-4" id="booking-modal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-md" onclick="toggleModal(false)"></div>
<div className="relative bg-[#0f0f0f] rounded-2xl shadow-2xl border border-white/10 w-full max-w-md overflow-hidden animate-slide-up">
<div className="p-6 border-b border-white/5 flex justify-between items-center">
<h3 className="font-medium text-white">Get Started</h3>
<button className="text-neutral-500 hover:text-white" onclick="toggleModal(false)"><i className="w-5 h-5" data-lucide="x"></i></button>
</div>
<div className="p-8">
<p className="text-neutral-400 text-sm mb-6">Enter your email to schedule a personalized walkthrough of the orchestration engine.</p>
<form className="space-y-4" onsubmit="event.preventDefault(); this.innerHTML = '&lt;div class=\'text-center text-[#2dd4bf] py-8\'&gt;Request Sent! We will contact you shortly.&lt;/div&gt;'">
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1.5 uppercase">Work Email</label>
<input className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#2dd4bf] transition-colors text-sm" placeholder="name@company.com" required="" type="email"/>
</div>
<button className="w-full btn-primary text-white font-medium py-2.5 rounded-lg text-sm mt-2" type="submit">
                        Request Access
                    </button>
</form>
</div>
</div>
</div>


    </>
  );
}
