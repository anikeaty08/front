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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="yWZ2Tbe094Fsjgy9NRnD"></div>

</div></div>

<header className="fixed top-0 w-full z-50 border-b border-white/[0.06] bg-[#020202]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="relative w-7 h-7 flex items-center justify-center rounded-md bg-white text-black shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)] group-hover:shadow-[0_0_25px_-5px_rgba(255,255,255,0.6)] transition-shadow duration-500 overflow-hidden">
<iconify-icon className="relative z-10" height="18" icon="solar:infinity-linear" width="18"></iconify-icon>
<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-zinc-200 to-transparent opacity-0 group-hover:opacity-100 animate-spin [animation-duration:2s]"></div>
</div>
<span className="text-sm font-semibold tracking-tight text-white">NOVA</span>
</a>
<nav className="hidden md:flex items-center gap-1 p-1 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm">
<a className="px-4 py-1.5 text-[13px] font-medium text-zinc-400 hover:text-white transition-all hover:bg-white/[0.08] rounded-full" href="#">Products</a>
<a className="px-4 py-1.5 text-[13px] font-medium text-zinc-400 hover:text-white transition-all hover:bg-white/[0.08] rounded-full" href="#">Solutions</a>
<a className="px-4 py-1.5 text-[13px] font-medium text-zinc-400 hover:text-white transition-all hover:bg-white/[0.08] rounded-full" href="#">Developers</a>
<a className="px-4 py-1.5 text-[13px] font-medium text-zinc-400 hover:text-white transition-all hover:bg-white/[0.08] rounded-full" href="#">Pricing</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-mono text-zinc-500 hover:text-zinc-300 transition-colors">
<iconify-icon height="14" icon="solar:magnifer-linear" width="14"></iconify-icon>
<span>CMD+K</span>
</button>
<div className="h-4 w-[1px] bg-white/10 hidden lg:block"></div>
<a className="text-[13px] font-medium text-zinc-300 hover:text-white transition-colors" href="#">Log in</a>
<button className="btn-shine bg-white text-black px-4 py-1.5 text-[13px] font-semibold hover:bg-zinc-200 transition-colors rounded shadow-[0_2px_10px_rgba(255,255,255,0.1)] flex items-center gap-1.5">
<span>Dashboard</span>
<iconify-icon height="14" icon="solar:alt-arrow-right-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</header>
<main className="flex-1 z-10 pt-32 pb-20 relative">

<section className="max-w-7xl mx-auto px-6 mb-32 relative perspective-grid-container h-[500px] flex flex-col justify-center">

<div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 opacity-[0.25] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
<div className="absolute inset-0 perspective-grid w-full h-[200%] top-[-50%]"></div>
</div>

<div className="absolute inset-0 pointer-events-none -z-10">
<div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-500 rounded-full animate-ping [animation-duration:3s]"></div>
<div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-ping [animation-duration:4s] delay-700"></div>
<div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-indigo-500 rounded-full animate-ping [animation-duration:5s] delay-1000"></div>
</div>
<div className="max-w-4xl relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8 animate-reveal backdrop-blur-md shadow-[0_0_15px_-5px_rgba(59,130,246,0.3)] hover:bg-blue-500/10 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-[11px] font-semibold text-blue-400 tracking-wide uppercase font-mono">Series B Announced</span>
</div>
<h1 className="text-6xl md:text-8xl font-medium tracking-tighter leading-[0.95] mb-8 animate-reveal delay-100">
<span className="text-gradient">Financial infrastructure</span><br/>
<span className="text-zinc-700">for the modern web.</span>
</h1>
<p className="text-lg text-zinc-500 leading-relaxed max-w-xl mb-10 animate-reveal delay-200 font-light">
                    Nova provides the banking primitives that power the next generation of fintech applications. Accounts, payments, and cards via a unified, typed API.
                </p>
<div className="flex items-center gap-4 animate-reveal delay-300">
<button className="group bg-white hover:bg-zinc-100 text-black px-6 py-3 text-[13px] font-semibold transition-all flex items-center gap-2 rounded shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)] hover:-translate-y-0.5">
<iconify-icon className="group-hover:text-blue-600 transition-colors" height="16" icon="solar:play-linear" width="16"></iconify-icon>
                        Watch Demo
                    </button>
<button className="text-zinc-400 hover:text-white px-6 py-3 text-[13px] font-medium transition-all flex items-center gap-2 hover:bg-white/[0.05] rounded border border-transparent hover:border-white/10">
                        Documentation
                        <iconify-icon height="16" icon="solar:code-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="w-full border-y border-white/[0.08] bg-[#020202] overflow-hidden animate-reveal delay-300">
<div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
<div className="relative p-8 md:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/[0.08]">
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-[10px] font-mono text-blue-400 tracking-wider mb-8 uppercase">
<iconify-icon height="12" icon="solar:global-linear" width="12"></iconify-icon> Global Settlement
                        </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1] mb-6 text-white">
                            Unified liquidity across <br/>
<span className="text-zinc-600">borders &amp; currencies.</span>
</h2>
<p className="text-[15px] text-zinc-500 leading-relaxed mb-10 max-w-md">
                            Eliminate fragmentation in your financial stack. Move money between 135+ currencies with zero markup and instant finality using our proprietary routing engine.
                        </p>
<div className="grid grid-cols-2 gap-8 border-t border-white/[0.08] pt-8">
<div>
<div className="text-3xl font-semibold text-white tracking-tight mb-1 flex items-center gap-2">
                                    99.99<span className="text-zinc-600">%</span>
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
</div>
<div className="text-[11px] text-zinc-600 font-mono uppercase tracking-wider">Uptime SLA</div>
</div>
<div>
<div className="text-3xl font-semibold text-white tracking-tight mb-1">135<span className="text-zinc-600">+</span></div>
<div className="text-[11px] text-zinc-600 font-mono uppercase tracking-wider">Currencies Supported</div>
</div>
</div>
</div>
</div>

<div className="relative h-[500px] lg:h-auto bg-[#050505] group overflow-hidden flex items-center justify-center">

<div className="absolute inset-0">
<div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black to-black opacity-50"></div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/5 animate-[spin_10s_linear_infinite]">
<div className="absolute top-0 left-1/2 w-2 h-2 bg-blue-500/50 rounded-full blur-[2px]"></div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-white/5 animate-[spin_15s_linear_infinite_reverse]">
<div className="absolute bottom-0 left-1/2 w-2 h-2 bg-white/30 rounded-full blur-[2px]"></div>
</div>
</div>

<div className="relative w-80 glass-card rounded-xl p-6 animate-float z-10 backdrop-blur-xl">

<div className="flex items-center justify-between mb-6 border-b border-white/[0.05] pb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 border border-white/10 flex items-center justify-center shadow-inner relative overflow-hidden">
<iconify-icon className="text-white text-sm relative z-10" icon="solar:card-transfer-linear"></iconify-icon>
<div className="absolute inset-0 bg-white/10 animate-[spin_4s_linear_infinite]"></div>
</div>
<div>
<div className="text-[11px] font-semibold text-white">Transfer Initiated</div>
<div className="text-[9px] text-zinc-500 font-mono">ID: #TRX_99281</div>
</div>
</div>
<div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></div>
</div>

<div className="space-y-4">
<div className="flex justify-between items-end">
<span className="text-[11px] text-zinc-500">Amount</span>
<span className="text-xl font-mono text-white tracking-tight">$14,250.00</span>
</div>

<div className="w-full bg-zinc-800/50 h-1.5 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[75%] relative">
<div className="absolute inset-0 bg-white/40 w-full animate-[shimmer_1.5s_infinite]"></div>
</div>
</div>
<style>
                                @keyframes shimmer {
                                    0% { transform: translateX(-100%); }
                                    100% { transform: translateX(100%); }
                                }
                            </style>
<div className="flex justify-between items-center pt-2">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border-2 border-[#0A0A0A] bg-zinc-700"></div>
<div className="w-6 h-6 rounded-full border-2 border-[#0A0A0A] bg-zinc-600"></div>
<div className="w-6 h-6 rounded-full border-2 border-[#0A0A0A] bg-zinc-500 flex items-center justify-center text-[8px] text-white font-medium">+2</div>
</div>
<span className="text-[10px] text-zinc-500 font-mono flex items-center gap-1">
                                    ETA: &lt; 300ms
                                    <iconify-icon className="animate-[spin_4s_linear_infinite]" icon="solar:clock-circle-linear"></iconify-icon>
</span>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full pointer-events-none mix-blend-screen animate-[pulse-glow_4s_ease-in-out_infinite]"></div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-white/[0.08] divide-y md:divide-y-0 md:divide-x divide-white/[0.08] bg-[#030303]">

<div className="group p-8 relative hover:bg-white/[0.01] transition-colors overflow-hidden">

<div className="absolute top-0 left-0 w-full h-[3px] scanner-line z-20"></div>
<div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="flex justify-between items-start mb-10">
<div className="relative">
<iconify-icon className="text-white group-hover:text-blue-400 transition-colors" height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
<div className="absolute -inset-2 bg-blue-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<span className="text-[9px] font-mono px-2 py-0.5 rounded border border-zinc-800 bg-zinc-900/50 text-zinc-500">KYC</span>
</div>
<h3 className="text-sm font-semibold text-white mb-2">Adaptive Identity</h3>
<p className="text-xs text-zinc-500 leading-relaxed">
                            Verification flows that automatically adjust based on jurisdiction.
                        </p>
</div>
</div>

<div className="group relative h-64 md:h-auto overflow-hidden bg-[#050505]">
<div className="absolute inset-0 pointer-events-none opacity-40">

<svg className="w-full h-full" fill="none" viewbox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
<circle className="animate-pulse" cx="100" cy="150" fill="#3B82F6" r="2"></circle>
<circle className="animate-pulse [animation-delay:1s]" cx="300" cy="100" fill="#3B82F6" r="2"></circle>
<circle cx="250" cy="200" fill="#fff" r="2"></circle>

<path className="animate-dash" d="M100 150 Q 175 50 300 100" opacity="0.5" stroke="url(#lineGrad)" stroke-dasharray="8 8" strokeWidth="1"></path>
<path className="animate-dash [animation-duration:4s]" d="M100 150 Q 175 250 250 200" opacity="0.5" stroke="url(#lineGrad)" stroke-dasharray="8 8" strokeWidth="1"></path>
<defs>
<lineargradient id="lineGrad" x1="0" x2="1" y1="0" y2="0">
<stop offset="0%" stop-color="#3B82F6" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#3B82F6"></stop>
<stop offset="100%" stop-color="#3B82F6" stop-opacity="0"></stop>
</lineargradient>
</defs>
</svg>
</div>
<div className="absolute bottom-6 left-6 z-10">
<h3 className="text-sm font-semibold text-white">Global Rail</h3>
<p className="text-xs text-zinc-500 mt-1">Real-time settlement map</p>
</div>
</div>

<div className="group p-8 relative hover:bg-white/[0.01] transition-colors flex flex-col justify-between overflow-hidden">
<div>
<div className="mb-10 w-10 h-10 relative flex items-center justify-center">

<div className="absolute inset-0 border border-dashed border-zinc-700 rounded-full rotate-slow opacity-50"></div>
<div className="absolute inset-1 border border-dashed border-zinc-600 rounded-full rotate-reverse opacity-30"></div>
<div className="relative w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 z-10">
<iconify-icon className="text-zinc-400 group-hover:text-blue-400 transition-colors" height="16" icon="solar:lock-password-linear" width="16"></iconify-icon>
</div>
</div>
<h3 className="text-sm font-semibold text-white mb-2">Token Vault</h3>
<p className="text-xs text-zinc-500">PCI-DSS Level 1 certified tokenization.</p>
</div>
<div className="mt-8 space-y-2">
<div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> AES-256
                        </div>
</div>
</div>

<div className="group p-8 relative hover:bg-white/[0.01] transition-colors flex flex-col">
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-semibold text-white">Treasury</h3>
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
</div>
<div className="flex-1 flex items-end gap-1.5 h-full min-h-[100px] pb-2">

<div className="w-full bg-zinc-800/30 rounded-t-sm h-[30%] animate-breathe [animation-delay:0ms]"></div>
<div className="w-full bg-zinc-800/30 rounded-t-sm h-[50%] animate-breathe [animation-delay:200ms]"></div>
<div className="w-full bg-zinc-800/30 rounded-t-sm h-[40%] animate-breathe [animation-delay:400ms]"></div>
<div className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-sm h-[75%] shadow-[0_0_15px_rgba(59,130,246,0.3)] animate-breathe [animation-delay:600ms]"></div>
<div className="w-full bg-zinc-800/30 rounded-t-sm h-[45%] animate-breathe [animation-delay:800ms]"></div>
</div>
</div>
</div>
</section>

<section className="border-b border-zinc-800 bg-zinc-900/[0.15] relative overflow-hidden py-32">

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-[-50%] left-[10%] w-[1px] h-[50%] bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-[scan_5s_linear_infinite]"></div>
<div className="absolute top-[-50%] left-[20%] w-[1px] h-[50%] bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-[scan_7s_linear_infinite] delay-300"></div>
<div className="absolute top-[-50%] left-[80%] w-[1px] h-[50%] bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-[scan_4s_linear_infinite] delay-700"></div>
</div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
<div className="lg:col-span-5">
<div className="text-[11px] font-mono text-blue-500 mb-6 uppercase tracking-widest flex items-center gap-2">
<span className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></span>
                        Developer Experience
                    </div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">Built for engineers,by engineers.</h2>
<p className="text-[15px] text-zinc-400 mb-8 leading-relaxed">
                        Integrate banking capabilities with a few lines of typed code. Our libraries are fully typed, documented, and designed for scale.
                    </p>
<a className="group inline-flex items-center gap-2 text-sm font-medium text-white border-b border-zinc-700 pb-0.5 hover:border-white transition-colors" href="#">
                        Read the Docs 
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="lg:col-span-7 relative">

<div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full animate-pulse"></div>
<div className="rounded-xl overflow-hidden border border-white/[0.08] bg-[#0A0A0A] shadow-2xl relative group">

<div className="flex items-center gap-4 px-4 py-3 border-b border-white/[0.05] bg-white/[0.01]">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] hover:opacity-80 transition-opacity"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] hover:opacity-80 transition-opacity"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] hover:opacity-80 transition-opacity"></div>
</div>
<div className="text-[10px] text-zinc-500 font-mono flex items-center gap-2 bg-black/20 px-2 py-1 rounded border border-white/5">
<iconify-icon height="10" icon="solar:file-code-linear" width="10"></iconify-icon>
                                transfer.ts
                            </div>
</div>

<div className="p-6 font-mono text-[13px] leading-7 overflow-x-auto text-zinc-300 relative">
<div className="flex gap-4">
<div aria-hidden="true" className="flex flex-col text-zinc-700 text-right select-none">
<span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span>
</div>
<div className="w-full">
<div className="text-zinc-500 italic">// Initialize the Nova client</div>
<div>
<span className="text-purple-400">import</span> { <span className="text-blue-300">Nova</span> } <span className="text-purple-400">from</span> <span className="text-green-400">'@nova/api'</span>;
                                    </div>
<div>
<span className="text-purple-400">const</span> <span className="text-yellow-200">nova</span> = <span className="text-purple-400">new</span> <span className="text-blue-300">Nova</span>(<span className="text-blue-300">process</span>.<span className="text-blue-300">env</span>.<span className="text-purple-300">API_KEY</span>);
                                    </div>
<div className="text-zinc-500 italic">// Execute cross-border payout</div>
<div>
<span className="text-purple-400">const</span> <span className="text-yellow-200">transfer</span> = <span className="text-purple-400">await</span> <span className="text-yellow-200">nova</span>.<span className="text-blue-300">transfers</span>.<span className="text-blue-300">create</span>({
                                    </div>
<div className="pl-4">
<span className="text-red-300">amount</span>: <span className="text-orange-300">500000</span>, <span className="text-zinc-600 ml-2">// $5,000.00</span>
</div>
<div className="pl-4 relative">
<span className="text-red-300">currency</span>: <span className="text-green-400">'usd'</span>,
                                        
<div className="absolute -right-2 top-1 w-1.5 h-4 bg-blue-500 animate-[blink_1s_step-end_infinite]"></div>
<style>@keyframes blink { 50% { opacity: 0; } }</style>
</div>
<div className="pl-4">
<span className="text-red-300">destination</span>: <span className="text-green-400">'acct_192x83'</span>,
                                    </div>
<div className="pl-4">
<span className="text-red-300">method</span>: <span className="text-green-400">'instant'</span>
</div>
<div>});</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">

<div className="absolute inset-0">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-[100px] animate-[spin_20s_linear_infinite]"></div>

<div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20"></div>
</div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Ready to scale?</h2>
<p className="text-zinc-400 mb-10 text-base font-light">
                     Create an account and start processing test payments in seconds.
                 </p>
<form className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto relative group">
<div className="relative w-full sm:w-auto flex-1">
<iconify-icon className="absolute left-3.5 top-3 text-zinc-500 z-10 transition-colors group-focus-within:text-blue-400" height="16" icon="solar:letter-linear" width="16"></iconify-icon>
<input className="w-full bg-[#0F0F0F] border border-zinc-800 rounded px-11 py-3 text-sm text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-zinc-600 shadow-inner" placeholder="work@company.com" type="email"/>
</div>
<button className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-zinc-100 text-black font-semibold text-sm rounded transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] whitespace-nowrap btn-shine">
                         Start Building
                     </button>
</form>
</div>
</section>
</main>


    </>
  );
}
