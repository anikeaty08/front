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
        
        // Simple JS to handle custom toggle interaction visual
        const toggle = document.querySelector('.toggle-checkbox');
        const dot = document.querySelector('.toggle-dot');
        toggle.addEventListener('change', (e) => {
            if(e.target.checked) {
                dot.style.transform = 'translateX(20px)';
            } else {
                dot.style.transform = 'translateX(0)';
            }
        });
    
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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[100px] mix-blend-screen opacity-50"></div>
<div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen opacity-30"></div>
<div className="absolute inset-0 bg-grid z-0"></div>

<div className="absolute top-[20%] right-[10%] opacity-20">
<div className="cube-scene">
<div className="cube">
<div className="cube-face cube-face-front"></div>
<div className="cube-face cube-face-back"></div>
<div className="cube-face cube-face-right"></div>
<div className="cube-face cube-face-left"></div>
<div className="cube-face cube-face-top"></div>
<div className="cube-face cube-face-bottom"></div>
</div>
</div>
</div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020408]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="text-indigo-400 w-5 h-5 fill-indigo-500/10" data-lucide="hexagon"></i>
<span className="font-semibold tracking-tighter text-lg text-white">VANTAGE</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors duration-200" href="#">Solutions</a>
<a className="hover:text-white transition-colors duration-200" href="#">Platform</a>
<a className="hover:text-white transition-colors duration-200" href="#">R&amp;D</a>
<a className="hover:text-white transition-colors duration-200" href="#">Company</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-mono text-slate-500 hover:text-indigo-400 transition-colors hidden md:block" href="#">LOGIN_V.2.0</a>
<button className="bg-white/10 hover:bg-white/20 border border-white/10 text-white text-xs font-medium px-4 py-2 rounded-full transition-all flex items-center gap-2 backdrop-blur-sm">
<span>Contact Sales</span>
<i className="w-3 h-3" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-48 px-6 z-10 overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8 relative z-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium tracking-wide">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                        ENGINEERING INTELLIGENCE 4.0
                    </div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tighter text-white leading-[1.1]">
                        Precision at <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-slate-400">Infinite Scale.</span>
</h1>
<p className="text-lg text-slate-400 max-w-xl leading-relaxed">
                        Deploy autonomous engineering systems with generative intelligence. Optimized for edge computing, zero-latency rendering, and automated structural analysis.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="group relative px-6 py-3 bg-white text-black text-sm font-semibold rounded-lg overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
<span className="relative flex items-center gap-2">
                                Start Simulation <i className="w-4 h-4" data-lucide="chevron-right"></i>
</span>
</button>
<button className="px-6 py-3 border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 text-sm font-medium rounded-lg transition-all flex items-center gap-2">
<i className="w-4 h-4" data-lucide="play-circle"></i> View Documentation
                        </button>
</div>
<div className="pt-8 flex items-center gap-6 border-t border-white/5 mt-8">
<div className="text-xs font-mono text-slate-500">
<span className="block text-white font-semibold text-lg">99.9%</span>
                            UPTIME SLA
                        </div>
<div className="h-8 w-px bg-white/10"></div>
<div className="text-xs font-mono text-slate-500">
<span className="block text-white font-semibold text-lg">0.02s</span>
                            LATENCY
                        </div>
</div>
</div>

<div className="relative h-[600px] w-full perspective-2000 hero-container hidden lg:block">
<div className="absolute top-1/2 left-1/2 w-[500px] h-[400px] -translate-x-1/2 -translate-y-1/2 transform-style-3d iso-rotate">

<div className="absolute inset-0 rounded-2xl bg-black/40 shadow-2xl transform translate-z-[-50px] blur-xl"></div>

<div className="absolute inset-0 rounded-2xl glass-panel transform-style-3d flex flex-col p-6 overflow-hidden">

<div className="flex justify-between items-center border-b border-white/10 pb-4 mb-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="font-mono text-[10px] text-slate-500">VANTAGE_KERNEL_v4.2</div>
</div>

<div className="flex-1 relative border border-white/5 rounded bg-slate-900/30 overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

<div className="absolute bottom-0 left-0 right-0 h-3/4 flex items-end justify-between px-4 gap-2">
<div className="w-full bg-indigo-500/20 h-[40%] rounded-t-sm animate-pulse"></div>
<div className="w-full bg-indigo-500/30 h-[65%] rounded-t-sm"></div>
<div className="w-full bg-indigo-500/20 h-[50%] rounded-t-sm"></div>
<div className="w-full bg-indigo-500/40 h-[80%] rounded-t-sm"></div>
<div className="w-full bg-indigo-500/20 h-[60%] rounded-t-sm"></div>
</div>
</div>

<div className="grid grid-cols-3 gap-4 mt-4">
<div className="h-10 bg-white/5 rounded border border-white/5"></div>
<div className="h-10 bg-white/5 rounded border border-white/5"></div>
<div className="h-10 bg-white/5 rounded border border-white/5"></div>
</div>
</div>

<div className="absolute top-10 right-[-30px] w-[180px] p-4 rounded-xl glass-panel transform translate-z-[40px] border-l-4 border-emerald-500 animate-float-3d" style={{animationDelay: '1s'}}>
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] text-slate-400 uppercase">Throughput</span>
<i className="w-3 h-3 text-emerald-400" data-lucide="zap"></i>
</div>
<div className="text-2xl font-mono text-white">98.4<span className="text-sm text-slate-500">%</span></div>
<div className="w-full bg-slate-700/50 h-1 mt-2 rounded-full overflow-hidden">
<div className="bg-emerald-500 h-full w-[98%]"></div>
</div>
</div>

<div className="absolute bottom-20 left-[-40px] w-[200px] p-4 rounded-xl glass-panel transform translate-z-[80px] border-l-4 border-indigo-500 animate-float-3d">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
<i className="w-4 h-4 text-white" data-lucide="cpu"></i>
</div>
<div>
<div className="text-[10px] text-slate-400 font-mono">NEURAL_ENGINE</div>
<div className="text-xs font-medium text-white flex items-center gap-2">
                                        Processing
                                        <span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 pointer-events-none transform translate-z-[20px]">
<svg className="w-full h-full opacity-30">
<line stroke="url(#grad1)" stroke-dasharray="4 4" strokeWidth="1" x1="50%" x2="100%" y1="50%" y2="20%"></line>
<defs>
<lineargradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: 'rgb(99,102,241)', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: 'rgb(99,102,241)', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="border-y border-white/5 bg-white/[0.02] relative z-20">
<div className="max-w-7xl mx-auto px-6 py-10">
<p className="text-center text-xs font-mono text-slate-500 mb-8 uppercase tracking-widest">Trusted by engineering leaders</p>
<div className="flex flex-wrap justify-center gap-12 lg:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 font-bold text-lg tracking-tight text-white"><div className="w-4 h-4 bg-white rounded-full shadow-[0_0_10px_white]"></div> ACME CORP</div>
<div className="flex items-center gap-2 font-bold text-lg tracking-tight text-white"><div className="w-4 h-4 border-2 border-white skew-x-12"></div> STRATOS</div>
<div className="flex items-center gap-2 font-bold text-lg tracking-tight text-white"><div className="w-4 h-4 bg-white rotate-45"></div> NEXUS</div>
<div className="flex items-center gap-2 font-bold text-lg tracking-tight text-white"><div className="w-4 h-4 border-2 border-white rounded-full"></div> ORBITAL</div>
<div className="flex items-center gap-2 font-bold text-lg tracking-tight text-white"><div className="w-4 h-4 bg-white rounded-sm"></div> KINETIC</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative z-10 perspective-1000">
<div className="max-w-7xl mx-auto">
<div className="mb-20">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-6">Engineered for <br/>complexity.</h2>
<p className="text-slate-400 max-w-2xl text-lg">Our generative engine restructures the traditional grid, allowing fluid data ingestion and asymmetric processing logic.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[minmax(200px,auto)]">

<div className="md:col-span-4 lg:col-span-7 group relative rounded-2xl border border-white/10 bg-[#0A0C10] overflow-hidden hover:border-white/20 card-tilt">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="p-8 h-full flex flex-col justify-between relative z-10 transform-style-3d">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 mb-6 transform transition-transform group-hover:translate-z-[20px]">
<i className="text-indigo-400 w-5 h-5" data-lucide="zap"></i>
</div>
<div className="transform transition-transform group-hover:translate-z-[10px]">
<h3 className="text-xl font-medium text-white mb-2">Edge-First Delivery</h3>
<p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                                Pre-rendered assets distributed across global edge nodes. Zero CLS, near-instant LCP utilizing intelligent caching strategies.
                            </p>
</div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full border-l border-white/5 bg-white/[0.01] mask-image-gradient hidden sm:block transform translate-z-[5px]">
<div className="p-4 font-mono text-[10px] text-indigo-300/50 space-y-2 opacity-50">
<p>&gt; init_sequence(0x42)</p>
<p>&gt; deploy_edge --global</p>
<p>&gt; optimizing_routes...</p>
<p className="text-emerald-400/50">&gt; success (0.003ms)</p>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 lg:col-span-5 row-span-2 group relative rounded-2xl border border-white/10 bg-[#0A0C10] overflow-hidden hover:border-white/20 card-tilt">
<div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-900/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
<div className="p-8 h-full flex flex-col relative z-10 transform-style-3d">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20 mb-6 transform group-hover:translate-z-[20px]">
<i className="text-purple-400 w-5 h-5" data-lucide="brain-circuit"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2 transform group-hover:translate-z-[10px]">Generative Engine Optimization</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-8 transform group-hover:translate-z-[10px]">
                            Chunked JSON-LD structured data for AI retrieval. Our systems automatically tag and categorize engineering assets for LLM ingestion.
                        </p>

<div className="flex-1 rounded-xl border border-white/10 bg-black/40 p-4 relative overflow-hidden transform group-hover:translate-z-[5px] shadow-inner">
<div className="absolute inset-0 bg-grid opacity-30"></div>

<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

<div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white rounded-full shadow-[0_0_15px_white]"></div>
<div className="absolute top-3/4 left-1/2 w-2 h-2 bg-slate-500 rounded-full"></div>
<div className="absolute top-1/2 right-1/4 w-2 h-2 bg-slate-500 rounded-full"></div>
<svg className="absolute inset-0 w-full h-full pointer-events-none">
<line stroke="rgba(255,255,255,0.1)" strokeWidth="1" x1="25%" x2="50%" y1="25%" y2="75%"></line>
<line stroke="rgba(255,255,255,0.1)" strokeWidth="1" x1="25%" x2="75%" y1="25%" y2="50%"></line>
</svg>
<div className="absolute w-2 h-2 bg-purple-400 rounded-full top-[25%] left-[25%] animate-[ping_3s_linear_infinite]"></div>
</div>
</div>
</div>

<div className="md:col-span-3 lg:col-span-4 group relative rounded-2xl border border-white/10 bg-[#0A0C10] overflow-hidden hover:border-white/20 card-tilt">
<div className="p-8 h-full flex flex-col justify-between relative z-10 transform-style-3d">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-6 transform group-hover:translate-z-[20px]">
<i className="text-emerald-400 w-5 h-5" data-lucide="shield-check"></i>
</div>
<div className="transform group-hover:translate-z-[10px]">
<h3 className="text-xl font-medium text-white mb-2">WCAG 2.2 AA</h3>
<p className="text-sm text-slate-400">Strict accessibility compliance built into the core. Keyboard nav &amp; ARIA automation.</p>
</div>
</div>
</div>

<div className="md:col-span-3 lg:col-span-3 group relative rounded-2xl border border-white/10 bg-[#0A0C10] overflow-hidden hover:border-white/20 card-tilt">
<div className="p-8 h-full flex flex-col justify-between relative z-10 transform-style-3d">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20 mb-6 transform group-hover:translate-z-[20px]">
<i className="text-blue-400 w-5 h-5" data-lucide="activity"></i>
</div>
<div className="transform group-hover:translate-z-[10px]">
<h3 className="text-xl font-medium text-white mb-2">Micro-Interactions</h3>
<p className="text-sm text-slate-400">Subtle motion feedback for enhanced perceived performance.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-[#020408] to-[#05080f] border-t border-white/5 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-20 items-center">

<div>
<h2 className="text-3xl font-medium tracking-tighter text-white mb-6">Automated Intelligence <br/><span className="text-slate-500">for technical inquiries.</span></h2>
<p className="text-slate-400 mb-8 leading-relaxed">
                        Our specialized AI agents ingest your whitepapers and technical documentation to provide instant, accurate answers to complex engineering queries.
                    </p>
<div className="space-y-4">
<div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors group">
<div className="mt-1 transition-transform group-hover:scale-110"><i className="text-indigo-400 w-5 h-5" data-lucide="database"></i></div>
<div>
<h4 className="text-white font-medium text-sm">Vector Knowledge Base</h4>
<p className="text-xs text-slate-400 mt-1">Uploaded CAD files and specs are indexed for semantic search.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors group">
<div className="mt-1 transition-transform group-hover:scale-110"><i className="text-indigo-400 w-5 h-5" data-lucide="webhook"></i></div>
<div>
<h4 className="text-white font-medium text-sm">CRM Integration Hooks</h4>
<p className="text-xs text-slate-400 mt-1">Qualified leads are piped directly to Salesforce/HubSpot API.</p>
</div>
</div>
</div>
</div>

<div className="relative perspective-1000">

<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl blur opacity-20 transform translate-z-[-10px]"></div>

<div className="relative bg-[#0A0C10] border border-white/10 rounded-2xl overflow-hidden shadow-2xl transform rotate-y-[-5deg] hover:rotate-y-0 transition-transform duration-500 transform-style-3d">

<div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="bot"></i>
</div>
<div>
<div className="text-sm font-medium text-white">Engineering Assistant</div>
<div className="text-[10px] text-emerald-400 flex items-center gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div> Online
                                    </div>
</div>
</div>
<i className="text-slate-500 w-4 h-4" data-lucide="more-horizontal"></i>
</div>

<div className="p-6 h-[350px] flex flex-col gap-4 overflow-hidden relative">

<div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-[#0A0C10] to-transparent pointer-events-none z-10"></div>

<div className="flex gap-3 max-w-[90%]">
<div className="w-8 h-8 rounded-full bg-white/5 flex-shrink-0 flex items-center justify-center mt-1">
<i className="w-4 h-4 text-slate-400" data-lucide="bot"></i>
</div>
<div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-sm p-3 text-sm text-slate-300 leading-relaxed">
                                    Hello. I have access to the full structural database. How can I assist with your project specifications today?
                                </div>
</div>

<div className="flex gap-3 max-w-[90%] self-end flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-slate-700 flex-shrink-0 flex items-center justify-center mt-1">
<i className="w-4 h-4 text-slate-300" data-lucide="user"></i>
</div>
<div className="bg-indigo-600 text-white rounded-2xl rounded-tr-sm p-3 text-sm leading-relaxed shadow-lg shadow-indigo-900/20">
                                    What is the tensile strength rating for the Mark-IV alloy component under -40°C conditions?
                                </div>
</div>

<div className="flex gap-3 max-w-[90%]">
<div className="w-8 h-8 rounded-full bg-white/5 flex-shrink-0 flex items-center justify-center mt-1">
<i className="w-4 h-4 text-slate-400" data-lucide="bot"></i>
</div>
<div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-sm p-4 flex items-center gap-1">
<div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"></div>
<div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
<div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6">
<div className="bg-[#0f1218] border border-white/10 rounded-lg p-3 flex items-center justify-between shadow-2xl transform hover:translate-y-[-2px] transition-transform">
<div className="flex items-center gap-3">
<i className="text-indigo-400 w-4 h-4" data-lucide="file-search"></i>
<span className="text-xs text-slate-400">Scanning <span className="text-white font-mono">spec_sheet_v4.pdf</span>...</span>
</div>
<div className="w-16 h-1 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-2/3 animate-shimmer"></div>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-white/5 bg-white/[0.01]">
<div className="flex gap-2">
<input className="w-full bg-transparent text-sm text-white placeholder-slate-600 focus:outline-none" placeholder="Ask a technical question..." type="text"/>
<button className="text-indigo-400 hover:text-indigo-300"><i className="w-4 h-4" data-lucide="send"></i></button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 bg-grid relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-10">
<h3 className="text-lg font-medium text-white">System Performance</h3>
<div className="flex gap-4">
<span className="text-xs font-mono text-slate-500">CPU: <span className="text-emerald-400">12%</span></span>
<span className="text-xs font-mono text-slate-500">MEM: <span className="text-emerald-400">4.2GB</span></span>
</div>
</div>
<div className="grid md:grid-cols-4 gap-6">

<div className="bg-[#0A0C10] border border-white/10 p-5 rounded-lg hover:border-white/20 transition-colors">
<div className="flex justify-between mb-4">
<span className="text-xs text-slate-500 uppercase tracking-wide">Req / Sec</span>
<i className="w-4 h-4 text-slate-600" data-lucide="activity"></i>
</div>
<div className="text-2xl font-mono text-white font-medium">84,392</div>
<div className="w-full bg-slate-800 h-1 mt-4 rounded-full overflow-hidden">
<div className="bg-indigo-500 h-full w-[70%]"></div>
</div>
</div>

<div className="bg-[#0A0C10] border border-white/10 p-5 rounded-lg hover:border-white/20 transition-colors">
<div className="flex justify-between mb-4">
<span className="text-xs text-slate-500 uppercase tracking-wide">Avg. Latency</span>
<i className="w-4 h-4 text-slate-600" data-lucide="clock"></i>
</div>
<div className="text-2xl font-mono text-white font-medium">14ms</div>
<div className="w-full bg-slate-800 h-1 mt-4 rounded-full overflow-hidden">
<div className="bg-emerald-500 h-full w-[20%]"></div>
</div>
</div>

<div className="bg-[#0A0C10] border border-white/10 p-5 rounded-lg hover:border-white/20 transition-colors">
<div className="flex justify-between mb-4">
<span className="text-xs text-slate-500 uppercase tracking-wide">Error Rate</span>
<i className="w-4 h-4 text-slate-600" data-lucide="alert-circle"></i>
</div>
<div className="text-2xl font-mono text-white font-medium">0.001%</div>
<div className="w-full bg-slate-800 h-1 mt-4 rounded-full overflow-hidden">
<div className="bg-slate-500 h-full w-[1%]"></div>
</div>
</div>

<div className="bg-[#0A0C10] border border-white/10 p-5 rounded-lg flex flex-col justify-between hover:border-white/20 transition-colors">
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-slate-500 uppercase tracking-wide">Power Mode</span>
<label className="flex items-center cursor-pointer relative" htmlFor="toggle">
<input className="sr-only toggle-checkbox" id="toggle" type="checkbox"/>
<div className="w-10 h-5 bg-slate-800 rounded-full border border-slate-700 toggle-label transition-colors"></div>
<div className="dot absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition-transform duration-300 transform translate-x-0 toggle-dot"></div>
</label>
</div>
<div className="mt-2">
<input className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-3 [&amp;::-webkit-slider-thumb]:h-3 [&amp;::-webkit-slider-thumb]:bg-indigo-500 [&amp;::-webkit-slider-thumb]:rounded-full hover:[&amp;::-webkit-slider-thumb]:scale-125 transition-all" max="100" min="0" type="range" value="75"/>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-[#020408] pt-20 pb-10 px-6 relative z-10">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-20">
<div className="lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<i className="text-white w-5 h-5" data-lucide="hexagon"></i>
<span className="font-semibold tracking-tighter text-lg text-white">VANTAGE</span>
</div>
<p className="text-sm text-slate-500 max-w-xs mb-6">
                        Building the infrastructure for the next generation of autonomous engineering.
                    </p>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="github"></i></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-sm font-medium text-white">Product</h4>
<a className="text-sm text-slate-500 hover:text-indigo-400 transition-colors" href="#">Intelligence</a>
<a className="text-sm text-slate-500 hover:text-indigo-400 transition-colors" href="#">Simulation</a>
<a className="text-sm text-slate-500 hover:text-indigo-400 transition-colors" href="#">API</a>
<a className="text-sm text-slate-500 hover:text-indigo-400 transition-colors" href="#">Pricing</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-sm font-medium text-white">Resources</h4>
<a className="text-sm text-slate-500 hover:text-indigo-400 transition-colors" href="#">Documentation</a>
<a className="text-sm text-slate-500 hover:text-indigo-400 transition-colors" href="#">Whitepapers</a>
<a className="text-sm text-slate-500 hover:text-indigo-400 transition-colors" href="#">Status</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-sm font-medium text-white">Company</h4>
<a className="text-sm text-slate-500 hover:text-indigo-400 transition-colors" href="#">About</a>
<a className="text-sm text-slate-500 hover:text-indigo-400 transition-colors" href="#">Careers</a>
<a className="text-sm text-slate-500 hover:text-indigo-400 transition-colors" href="#">Contact</a>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-slate-600">
                    © 2024 Vantage Engineering Systems Inc. All rights reserved.
                </div>
<div className="flex gap-6">
<a className="text-xs text-slate-600 hover:text-slate-400" href="#">Privacy Policy</a>
<a className="text-xs text-slate-600 hover:text-slate-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
