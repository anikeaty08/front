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
  


        // Reveal Logic
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal, .reveal-card');
            revealElements.forEach(el => observer.observe(el));
        });

        // Mouse Spotlight Logic
        const spotlight = document.getElementById('spotlight');
        document.addEventListener('mousemove', (e) => {
            spotlight.style.setProperty('--x', `${e.pageX}px`);
            spotlight.style.setProperty('--y', `${e.pageY}px`);
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
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="tPmIIl0vKqHO9yqmtge2"></div>

</div></div>

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

<div className="absolute inset-0 bg-grid opacity-50 animate-grid"></div>

<div className="absolute inset-0 z-0" id="spotlight"></div>

<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/10 blur-[100px] animate-float opacity-40 mix-blend-screen"></div>
<div className="absolute bottom-[0%] right-[-10%] w-[40%] h-[60%] rounded-full bg-blue-900/10 blur-[120px] animate-float opacity-30 mix-blend-screen" style={{animationDelay: '-5s'}}></div>
<div className="absolute top-[40%] left-[20%] w-[30%] h-[30%] rounded-full bg-purple-900/10 blur-[90px] animate-pulse-glow opacity-30 mix-blend-screen"></div>

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>
</div>

<nav className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 reveal active">
<div className="glass-panel px-5 py-2.5 rounded-full flex items-center gap-8 shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-[1.01] hover:border-white/10">

<div className="flex items-center gap-2 cursor-pointer group">
<div className="relative w-8 h-8 flex items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-white/10 to-transparent group-hover:border-indigo-500/30 transition-all duration-300">
<iconify-icon className="text-sm transition-transform group-hover:scale-110 text-white group-hover:text-indigo-400" icon="lucide:shield-check"></iconify-icon>
</div>
<span className="font-medium text-sm tracking-tight group-hover:text-white transition-colors text-white">
                    Cortex
                </span>
</div>

<div className="hidden md:flex items-center gap-6">
<a className="text-[11px] font-medium transition-colors hover:text-white hover:scale-105 transform" href="#features">Protocol</a>
<a className="text-[11px] font-medium transition-colors hover:text-white hover:scale-105 transform" href="#wallet">Wallet</a>
<a className="text-[11px] font-medium transition-colors hover:text-white hover:scale-105 transform" href="#analytics">Analytics</a>
<a className="text-[11px] font-medium transition-colors hover:text-white hover:scale-105 transform" href="#testimonials">Stories</a>
<a className="text-[11px] font-medium transition-colors hover:text-white hover:scale-105 transform" href="#pricing">Pricing</a>
</div>

<div className="flex items-center gap-3 pl-2 border-l border-white/10">
<a className="hidden md:block text-[10px] font-semibold border border-white/10 px-4 py-1.5 rounded-full transition-all active:scale-95 hover:shadow-[0_0_15px_rgba(129,140,248,0.2)] text-white bg-white/5 hover:bg-white/10 hover:border-indigo-500/30" href="#">
                    Connect Wallet
                </a>
<button className="md:hidden text-white/70 hover:text-white">
<iconify-icon icon="lucide:menu" width="18"></iconify-icon>
</button>
</div>
</div>
</nav>
<main className="relative z-10 flex flex-col items-center w-full">

<section className="min-h-screen flex flex-col md:flex-row overflow-hidden w-full max-w-7xl mx-auto pt-32 px-6 pb-20 relative gap-16 items-center justify-center">

<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-[20%] left-[15%] w-[2px] h-[2px] bg-indigo-400 rounded-full animate-twinkle shadow-[0_0_10px_rgba(129,140,248,0.8)]"></div>
<div className="absolute bottom-[30%] right-[25%] w-[3px] h-[3px] bg-cyan-400 rounded-full animate-twinkle shadow-[0_0_10px_rgba(34,211,238,0.8)]" style={{animationDelay: '2s'}}></div>
</div>

<div className="flex-1 w-full space-y-8 relative z-10 text-left">

<div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 backdrop-blur-sm cursor-default hover:border-indigo-500/40 transition-colors duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</div>
<span className="text-[10px] font-medium uppercase tracking-wider text-indigo-300">Audited by CertiK</span>
</div>
<div className="space-y-6 reveal delay-100">
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.05] text-white">
                        Asset Defense for the
                        <span className="text-gradient-accent">DeFi Economy.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 font-light max-w-lg leading-relaxed">
                        Automated smart contract auditing and real-time wallet protection. Secure your liquidity positions across all chains.
                    </p>
</div>
<div className="pt-4 flex flex-wrap items-center gap-4 reveal delay-200">
<button className="group relative inline-flex items-center gap-2 pl-6 pr-5 py-3.5 rounded-full text-sm font-medium transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_35px_rgba(129,140,248,0.4)] overflow-hidden bg-white text-black hover:bg-indigo-50 border border-transparent">

<div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent z-20"></div>
<span className="relative z-10 flex items-center gap-2">
                            Launch App
                            <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1 text-black" icon="lucide:arrow-right"></iconify-icon>
</span>
</button>
<button className="group inline-flex items-center gap-2 px-6 py-3.5 border border-white/10 rounded-full text-sm font-medium transition-all active:scale-95 bg-white/5 text-white hover:bg-white/10 hover:border-white/20 backdrop-blur-md">
<iconify-icon className="text-neutral-400 group-hover:text-white transition-colors" icon="lucide:file-text"></iconify-icon>
                        Read Documentation
                    </button>
</div>

<div className="pt-8 flex items-center gap-8 border-t border-white/5 mt-8 reveal delay-300">
<div className="group cursor-default">
<div className="text-2xl font-semibold tracking-tight text-white group-hover:text-indigo-400 transition-colors duration-300">$4.2B+</div>
<div className="text-xs text-neutral-500">Assets Secured</div>
</div>
<div className="w-px h-8 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
<div className="group cursor-default">
<div className="text-2xl font-semibold tracking-tight text-white group-hover:text-indigo-400 transition-colors duration-300">~0ms</div>
<div className="text-xs text-neutral-500">Latency</div>
</div>
</div>
</div>

<div className="flex-1 w-full flex justify-center md:justify-end relative z-10 reveal delay-200 perspective-[2000px]">

<div className="animate-float relative w-[340px] h-[680px] bg-[#0a0a0a] rounded-[48px] border-[6px] border-[#1a1a1a] shadow-[0_20px_80px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.1)] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_100px_rgba(129,140,248,0.15),0_0_0_1px_rgba(255,255,255,0.15)] transform rotate-y-[-10deg] hover:rotate-y-0">

<div className="absolute top-0 left-0 w-full h-12 flex justify-between items-end px-8 pb-3 z-30">
<span className="text-[10px] font-medium text-white">9:41</span>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-[10px] text-white" icon="lucide:signal"></iconify-icon>
<iconify-icon className="text-[10px] text-white" icon="lucide:wifi"></iconify-icon>
<div className="w-4 h-2.5 border border-white/30 rounded-[2px] relative">
<div className="absolute inset-0.5 rounded-[1px] bg-white"></div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-[#050505] flex flex-col pt-16 px-6 relative">

<div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-indigo-900/20 to-transparent pointer-events-none"></div>

<div className="flex justify-between items-center mb-8 relative z-10">
<div>
<div className="text-[10px] text-neutral-500 uppercase tracking-wide">Total Balance</div>
<div className="text-2xl font-semibold tracking-tight text-white">$124,592.00</div>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center cursor-pointer transition-colors bg-white/5 hover:bg-white/10 hover:border-indigo-500/30">
<iconify-icon className="text-sm text-neutral-400" icon="lucide:bell"></iconify-icon>
</div>
</div>

<div className="w-full bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-2xl p-5 border border-white/10 mb-6 relative overflow-hidden group cursor-pointer hover:border-indigo-500/30 transition-all duration-300">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-indigo-500/10 to-transparent"></div>
<div className="flex items-start justify-between mb-4 relative z-10">
<div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(129,140,248,0.2)]">
<iconify-icon icon="lucide:shield-check" width="20"></iconify-icon>
</div>
<span className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-semibold px-2 py-1 rounded-full animate-pulse shadow-[0_0_10px_rgba(129,140,248,0.1)]">ACTIVE</span>
</div>
<h3 className="font-medium text-sm mb-1 text-white relative z-10">Wallet Protected</h3>
<p className="text-[10px] text-neutral-400 relative z-10">Real-time scanning enabled. No threats detected.</p>
</div>

<div className="grid grid-cols-4 gap-4 mb-8">
<div className="group/icon flex flex-col items-center gap-2 cursor-pointer">
<div className="w-12 h-12 rounded-2xl border border-white/10 bg-neutral-900 flex items-center justify-center group-hover/icon:bg-neutral-800 group-hover/icon:border-indigo-500/30 transition-all duration-300 group-active/icon:scale-95 text-white">
<iconify-icon icon="lucide:send" width="18"></iconify-icon>
</div>
<span className="text-[10px] text-neutral-500 group-hover/icon:text-indigo-400 transition-colors">Send</span>
</div>
<div className="group/icon flex flex-col items-center gap-2 cursor-pointer">
<div className="w-12 h-12 rounded-2xl border border-white/10 bg-neutral-900 flex items-center justify-center group-hover/icon:bg-neutral-800 group-hover/icon:border-indigo-500/30 transition-all duration-300 group-active/icon:scale-95 text-white">
<iconify-icon icon="lucide:arrow-down-to-line" width="18"></iconify-icon>
</div>
<span className="text-[10px] text-neutral-500 group-hover/icon:text-indigo-400 transition-colors">Receive</span>
</div>
<div className="group/icon flex flex-col items-center gap-2 cursor-pointer">
<div className="w-12 h-12 rounded-2xl border border-white/10 bg-neutral-900 flex items-center justify-center group-hover/icon:bg-neutral-800 group-hover/icon:border-indigo-500/30 transition-all duration-300 group-active/icon:scale-95 text-white">
<iconify-icon icon="lucide:arrow-left-right" width="18"></iconify-icon>
</div>
<span className="text-[10px] text-neutral-500 group-hover/icon:text-indigo-400 transition-colors">Swap</span>
</div>
<div className="group/icon flex flex-col items-center gap-2 cursor-pointer">
<div className="w-12 h-12 rounded-2xl border border-white/10 bg-neutral-900 flex items-center justify-center group-hover/icon:bg-neutral-800 group-hover/icon:border-indigo-500/30 transition-all duration-300 group-active/icon:scale-95 text-white">
<iconify-icon icon="lucide:scan-line" width="18"></iconify-icon>
</div>
<span className="text-[10px] text-neutral-500 group-hover/icon:text-indigo-400 transition-colors">Scan</span>
</div>
</div>

<div className="flex-1 overflow-hidden">
<h4 className="text-xs font-medium mb-4 uppercase tracking-wider text-neutral-500">Recent Checks</h4>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors cursor-pointer group hover:bg-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:box" width="14"></iconify-icon>
</div>
<div>
<div className="text-xs text-white">Uniswap Interaction</div>
<div className="text-[10px] text-neutral-500">0x7a2...8291</div>
</div>
</div>
<div className="text-emerald-400 text-[10px] font-medium bg-emerald-400/10 px-2 py-0.5 rounded-full">SAFE</div>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors cursor-pointer group hover:bg-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:layers" width="14"></iconify-icon>
</div>
<div>
<div className="text-xs text-white">Bridge Asset</div>
<div className="text-[10px] text-neutral-500">Polygon Mainnet</div>
</div>
</div>
<div className="text-emerald-400 text-[10px] font-medium bg-emerald-400/10 px-2 py-0.5 rounded-full">SAFE</div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6 h-14 bg-[#111] rounded-2xl flex items-center justify-around border border-white/10 shadow-xl z-20 backdrop-blur-md bg-opacity-90">
<button className="w-10 h-10 flex items-center justify-center transition-colors text-white hover:text-indigo-400">
<iconify-icon className="text-lg" icon="lucide:home"></iconify-icon>
</button>
<button className="w-10 h-10 flex items-center justify-center transition-colors text-neutral-600 hover:text-white">
<iconify-icon className="text-lg" icon="lucide:pie-chart"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full flex items-center justify-center -mt-8 border-4 border-[#050505] hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.3)] bg-gradient-to-br from-white to-gray-200">
<iconify-icon className="text-xl text-black" icon="lucide:plus"></iconify-icon>
</button>
<button className="w-10 h-10 flex items-center justify-center transition-colors text-neutral-600 hover:text-white">
<iconify-icon className="text-lg" icon="lucide:wallet"></iconify-icon>
</button>
<button className="w-10 h-10 flex items-center justify-center transition-colors text-neutral-600 hover:text-white">
<iconify-icon className="text-lg" icon="lucide:settings"></iconify-icon>
</button>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none z-40 rounded-[40px] opacity-50"></div>
</div>
</div>
</section>

<div className="w-full border-y border-white/5 bg-black/40 backdrop-blur-sm py-12 overflow-hidden reveal relative z-20">
<div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] z-20 pointer-events-none"></div>
<div className="relative w-full max-w-6xl mx-auto z-10">
<div className="flex overflow-hidden group">
<div className="flex animate-marquee gap-16 md:gap-24 opacity-40 grayscale group-hover:opacity-60 transition-opacity duration-500 min-w-max">

<iconify-icon className="hover:opacity-100 hover:scale-110 transition-all cursor-pointer hover:text-indigo-400" icon="simple-icons:ethereum" width="28"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:scale-110 transition-all cursor-pointer hover:text-yellow-400" icon="simple-icons:binance" width="28"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:scale-110 transition-all cursor-pointer hover:text-purple-400" icon="simple-icons:polygon" width="28"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:scale-110 transition-all cursor-pointer hover:text-blue-400" icon="simple-icons:chainlink" width="28"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:scale-110 transition-all cursor-pointer hover:text-pink-400" icon="simple-icons:aave" width="28"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:scale-110 transition-all cursor-pointer hover:text-pink-600" icon="simple-icons:uniswap" width="28"></iconify-icon>

<iconify-icon className="hover:opacity-100 hover:scale-110 transition-all cursor-pointer hover:text-indigo-400" icon="simple-icons:ethereum" width="28"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:scale-110 transition-all cursor-pointer hover:text-yellow-400" icon="simple-icons:binance" width="28"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:scale-110 transition-all cursor-pointer hover:text-purple-400" icon="simple-icons:polygon" width="28"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:scale-110 transition-all cursor-pointer hover:text-blue-400" icon="simple-icons:chainlink" width="28"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:scale-110 transition-all cursor-pointer hover:text-pink-400" icon="simple-icons:aave" width="28"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:scale-110 transition-all cursor-pointer hover:text-pink-600" icon="simple-icons:uniswap" width="28"></iconify-icon>

<iconify-icon className="hover:opacity-100 hover:scale-110 transition-all cursor-pointer hover:text-indigo-400" icon="simple-icons:ethereum" width="28"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:scale-110 transition-all cursor-pointer hover:text-yellow-400" icon="simple-icons:binance" width="28"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:scale-110 transition-all cursor-pointer hover:text-purple-400" icon="simple-icons:polygon" width="28"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:scale-110 transition-all cursor-pointer hover:text-blue-400" icon="simple-icons:chainlink" width="28"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:scale-110 transition-all cursor-pointer hover:text-pink-400" icon="simple-icons:aave" width="28"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:scale-110 transition-all cursor-pointer hover:text-pink-600" icon="simple-icons:uniswap" width="28"></iconify-icon>
</div>
</div>
</div>
</div>

<section className="w-full max-w-6xl mx-auto px-6 py-28 relative overflow-hidden bg-gradient-to-b from-[#050505] to-[#0a0a0a]" id="features">

<div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="absolute top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent animate-scan blur-sm"></div>
<div className="absolute top-0 w-[150px] h-full bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent animate-scan"></div>
</div>
<div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 border-b border-white/5 pb-8 reveal relative z-10">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3 text-white">
                        Protocol <span className="text-gradient">Mechanics</span>
</h2>
<p className="text-neutral-500 text-sm max-w-md font-light">
                        Automated defense mechanisms executing directly on-chain.
                    </p>
</div>
<div className="hidden md:flex items-center gap-2 text-xs border border-white/10 px-3 py-1 rounded-full transition-colors cursor-default text-neutral-400 bg-white/5 hover:bg-white/10 hover:border-indigo-500/30">
<iconify-icon className="animate-pulse text-indigo-400" icon="lucide:cpu" width="12"></iconify-icon>
                    Powered by Cortex Engine
                </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">

<div className="group relative p-0.5 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-indigo-500/40 hover:to-purple-500/40 transition-all duration-500 reveal-card delay-100 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]">
<div className="relative h-full bg-[#080808] rounded-[15px] p-8 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div className="p-2.5 rounded-lg border border-white/10 bg-white/5 text-white group-hover:text-indigo-400 group-hover:border-indigo-500/30 transition-colors">
<iconify-icon icon="lucide:scan-eye" width="20"></iconify-icon>
</div>
<span className="font-mono text-xs text-neutral-600 group-hover:text-indigo-500/50 transition-colors">01</span>
</div>
<h3 className="text-lg font-medium mb-3 text-white">Threat Detection</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6 font-light group-hover:text-neutral-400 transition-colors">
                                Algorithms scan mempools for malicious transactions targeting your liquidity positions before they are mined.
                            </p>
<div className="h-24 w-full rounded-lg border border-white/5 relative overflow-hidden flex items-center justify-center bg-neutral-900/50 group-hover:border-indigo-500/20 transition-colors">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 to-transparent"></div>
<div className="w-full flex justify-center gap-1 items-end h-10 px-8">
<div className="w-2 h-4 rounded-t-sm group-hover:h-8 transition-all duration-300 ease-out bg-neutral-700 group-hover:bg-indigo-500/50"></div>
<div className="w-2 h-6 rounded-t-sm group-hover:h-4 transition-all duration-300 ease-out delay-75 bg-neutral-700 group-hover:bg-indigo-500/50"></div>
<div className="w-2 h-8 rounded-t-sm shadow-[0_0_10px_rgba(255,255,255,0.2)] group-hover:h-12 group-hover:shadow-[0_0_15px_rgba(129,140,248,0.7)] transition-all duration-300 ease-out delay-100 bg-white group-hover:bg-indigo-400"></div>
<div className="w-2 h-5 rounded-t-sm group-hover:h-3 transition-all duration-300 ease-out delay-150 bg-neutral-700 group-hover:bg-indigo-500/50"></div>
<div className="w-2 h-3 rounded-t-sm group-hover:h-6 transition-all duration-300 ease-out delay-200 bg-neutral-700 group-hover:bg-indigo-500/50"></div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative p-0.5 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-cyan-500/40 hover:to-blue-500/40 transition-all duration-500 reveal-card delay-200 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
<div className="relative h-full bg-[#080808] rounded-[15px] p-8 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div className="p-2.5 rounded-lg border border-white/10 bg-white/5 text-white group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-colors">
<iconify-icon icon="lucide:lock" width="20"></iconify-icon>
</div>
<span className="font-mono text-xs text-neutral-600 group-hover:text-cyan-500/50 transition-colors">02</span>
</div>
<h3 className="text-lg font-medium mb-3 text-white">Auto-Shield</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6 font-light group-hover:text-neutral-400 transition-colors">
                                Upon detection of a threat, assets are automatically moved to a secure vault or paused via multi-sig permissions.
                            </p>
<div className="h-24 w-full rounded-lg border border-white/5 relative overflow-hidden flex items-center justify-center bg-neutral-900/50 group-hover:border-cyan-500/20 transition-colors">
<iconify-icon className="text-4xl group-hover:text-cyan-300 group-hover:scale-125 transition-all duration-500 text-neutral-700" icon="lucide:shield-check"></iconify-icon>
<div className="absolute inset-0 opacity-0 group-hover:opacity-20 animate-pulse-glow pointer-events-none bg-cyan-400/20"></div>
</div>
</div>
</div>
</div>

<div className="group relative p-0.5 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-purple-500/40 hover:to-pink-500/40 transition-all duration-500 reveal-card delay-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(192,132,252,0.15)]">
<div className="relative h-full bg-[#080808] rounded-[15px] p-8 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div className="p-2.5 rounded-lg border border-white/10 bg-white/5 text-white group-hover:text-purple-400 group-hover:border-purple-500/30 transition-colors">
<iconify-icon icon="lucide:file-bar-chart-2" width="20"></iconify-icon>
</div>
<span className="font-mono text-xs text-neutral-600 group-hover:text-purple-500/50 transition-colors">03</span>
</div>
<h3 className="text-lg font-medium mb-3 text-white">Forensic Reports</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6 font-light group-hover:text-neutral-400 transition-colors">
                                Detailed post-incident analysis generated automatically to understand attack vectors and improve future resilience.
                            </p>
<div className="h-24 w-full rounded-lg border border-white/5 relative overflow-hidden flex flex-col justify-center px-4 gap-2 bg-neutral-900/50 group-hover:border-purple-500/20 transition-colors">
<div className="w-3/4 h-1.5 rounded-full group-hover:w-full group-hover:bg-purple-500/50 transition-all duration-700 ease-out bg-neutral-800"></div>
<div className="w-1/2 h-1.5 rounded-full group-hover:w-3/4 group-hover:bg-purple-500/50 transition-all duration-700 delay-100 ease-out bg-neutral-800"></div>
<div className="w-full h-1.5 rounded-full group-hover:bg-purple-300 transition-all duration-500 delay-200 bg-neutral-800 shadow-[0_0_10px_rgba(0,0,0,0)] group-hover:shadow-[0_0_10px_rgba(192,132,252,0.5)]"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-5xl mx-auto px-6 py-24 relative z-10 flex flex-col items-center" id="analytics">
<div className="text-center mb-16 space-y-3 reveal">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white">Comprehensive <span className="text-gradient-accent">Intel</span></h2>
<p className="text-lg text-neutral-500 font-light tracking-tight">Data-driven decisions for your portfolio</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full mb-16">

<div className="group p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:bg-gradient-to-br hover:from-white/5 hover:to-transparent transition-all duration-300 reveal-card delay-100 hover:scale-[1.01] cursor-default hover:border-indigo-500/20">
<div className="flex justify-between items-start mb-4">
<h3 className="text-lg font-medium tracking-tight text-white group-hover:text-indigo-100">Token Approval Monitor</h3>
<iconify-icon className="text-neutral-500 group-hover:text-indigo-400 transition-colors" icon="lucide:key"></iconify-icon>
</div>
<p className="text-sm text-neutral-500 font-light group-hover:text-neutral-400">Revoke unlimited spends instantly.</p>
</div>
<div className="group p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:bg-gradient-to-br hover:from-white/5 hover:to-transparent transition-all duration-300 reveal-card delay-100 hover:scale-[1.01] cursor-default hover:border-indigo-500/20">
<div className="flex justify-between items-start mb-4">
<h3 className="text-lg font-medium tracking-tight text-white group-hover:text-indigo-100">Impermanent Loss</h3>
<iconify-icon className="text-neutral-500 group-hover:text-indigo-400 transition-colors" icon="lucide:trending-down"></iconify-icon>
</div>
<p className="text-sm text-neutral-500 font-light group-hover:text-neutral-400">Calculators for LP positions.</p>
</div>
<div className="group p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:bg-gradient-to-br hover:from-white/5 hover:to-transparent transition-all duration-300 reveal-card delay-200 hover:scale-[1.01] cursor-default hover:border-indigo-500/20">
<div className="flex justify-between items-start mb-4">
<h3 className="text-lg font-medium tracking-tight text-white group-hover:text-indigo-100">Gas Optimization</h3>
<iconify-icon className="text-neutral-500 group-hover:text-indigo-400 transition-colors" icon="lucide:fuel"></iconify-icon>
</div>
<p className="text-sm text-neutral-500 font-light group-hover:text-neutral-400">Predict lowest fees for execution.</p>
</div>
<div className="group p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:bg-gradient-to-br hover:from-white/5 hover:to-transparent transition-all duration-300 reveal-card delay-200 hover:scale-[1.01] cursor-default hover:border-indigo-500/20">
<div className="flex justify-between items-start mb-4">
<h3 className="text-lg font-medium tracking-tight text-white group-hover:text-indigo-100">Whale Watch</h3>
<iconify-icon className="text-neutral-500 group-hover:text-indigo-400 transition-colors" icon="lucide:telescope"></iconify-icon>
</div>
<p className="text-sm text-neutral-500 font-light group-hover:text-neutral-400">Alerts on major wallet movements.</p>
</div>
<div className="group p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:bg-gradient-to-br hover:from-white/5 hover:to-transparent transition-all duration-300 reveal-card delay-300 hover:scale-[1.01] cursor-default hover:border-indigo-500/20">
<div className="flex justify-between items-start mb-4">
<h3 className="text-lg font-medium tracking-tight text-white group-hover:text-indigo-100">Risk Scoring</h3>
<iconify-icon className="text-neutral-500 group-hover:text-indigo-400 transition-colors" icon="lucide:activity"></iconify-icon>
</div>
<p className="text-sm text-neutral-500 font-light group-hover:text-neutral-400">0-100 Security Score for dApps.</p>
</div>
<div className="group p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:bg-gradient-to-br hover:from-white/5 hover:to-transparent transition-all duration-300 reveal-card delay-300 hover:scale-[1.01] cursor-default hover:border-indigo-500/20">
<div className="flex justify-between items-start mb-4">
<h3 className="text-lg font-medium tracking-tight text-white group-hover:text-indigo-100">Multi-Sig Sync</h3>
<iconify-icon className="text-neutral-500 group-hover:text-indigo-400 transition-colors" icon="lucide:users"></iconify-icon>
</div>
<p className="text-sm text-neutral-500 font-light group-hover:text-neutral-400">Gnosis Safe integration.</p>
</div>
</div>
</section>

<section className="w-full relative py-20 bg-gradient-to-b from-[#0a0a0a] to-[#050505] overflow-hidden" id="testimonials">

<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
<div className="mb-12 text-center">
<span className="text-sm font-medium text-indigo-400 tracking-wider uppercase">Community</span>
<h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter text-white">
                        Trusted by DeFi <span className="text-gradient">Natives.</span>
</h2>
<div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10 transition-colors">
<span className="inline-flex items-center -space-x-3">
<img alt="User 1" className="h-8 w-8 rounded-full ring-2 object-cover ring-[#0a0a0a]" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="User 2" className="h-8 w-8 rounded-full ring-2 object-cover ring-[#0a0a0a]" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="User 3" className="h-8 w-8 rounded-full ring-2 object-cover ring-[#0a0a0a]" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="User 4" className="h-8 w-8 rounded-full ring-2 object-cover ring-[#0a0a0a]" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</span>
<div className="h-4 w-px bg-white/20 mx-1"></div>
<span className="inline-flex items-center gap-1 text-sm text-neutral-300">
<iconify-icon className="text-amber-400 text-xs" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-amber-400 text-xs" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-amber-400 text-xs" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-amber-400 text-xs" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-amber-400 text-xs" icon="lucide:star-half"></iconify-icon>
<span className="ml-1 font-medium">4.9/5 • 2,431 Wallets</span>
</span>
</div>
</div>
<div className="grid grid-cols-1 overflow-hidden md:grid-cols-3 py-4 gap-6 h-[600px] relative" style={{maskImage: 'linear-gradient(180deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 15%, black 85%, transparent)'}}>

<div className="overflow-hidden relative">
<div className="space-y-6" data-scroll-column="1">

<article className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 hover:border-indigo-500/30 transition-colors">
<blockquote className="text-[15px] leading-relaxed text-neutral-300 font-light">
                                    "The automated threat detection saved my LP position during the last bridge exploit. The ROI on this tool is infinite."
                                </blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="User" className="h-10 w-10 rounded-full object-cover grayscale opacity-70" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div>
<div className="text-sm font-medium text-white">Alex Chen</div>
<div className="text-xs text-neutral-500">DeFi Degen</div>
</div>
</div>
</article>

<article className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 hover:border-indigo-500/30 transition-colors">
<blockquote className="text-[15px] leading-relaxed text-neutral-300 font-light">
                                    "Finally, a security dashboard that is actually readable. I can check my risk score in seconds."
                                </blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="User" className="h-10 w-10 rounded-full object-cover grayscale opacity-70" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white">Sarah Jenkins</div>
<div className="text-xs text-neutral-500">DAO Contributor</div>
</div>
</div>
</article>

<article className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 hover:border-indigo-500/30 transition-colors">
<blockquote className="text-[15px] leading-relaxed text-neutral-300 font-light">
                                    "The automated threat detection saved my LP position during the last bridge exploit. The ROI on this tool is infinite."
                                </blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="User" className="h-10 w-10 rounded-full object-cover grayscale opacity-70" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div>
<div className="text-sm font-medium text-white">Alex Chen</div>
<div className="text-xs text-neutral-500">DeFi Degen</div>
</div>
</div>
</article>
</div>
</div>

<div className="overflow-hidden relative">
<div className="space-y-6" data-scroll-column="2">

<article className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 hover:border-indigo-500/30 transition-colors">
<blockquote className="text-[15px] leading-relaxed text-neutral-300 font-light">
                                    "Multi-sig integration is flawless. Our treasury management is now 10x more secure."
                                </blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="User" className="h-10 w-10 rounded-full object-cover grayscale opacity-70" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white">Michael Ross</div>
<div className="text-xs text-neutral-500">Treasury Lead</div>
</div>
</div>
</article>

<article className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 hover:border-indigo-500/30 transition-colors">
<blockquote className="text-[15px] leading-relaxed text-neutral-300 font-light">
                                    "The gas optimization feature alone pays for the subscription. Highly recommended."
                                </blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="User" className="h-10 w-10 rounded-full object-cover grayscale opacity-70" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white">Elena Rodriguez</div>
<div className="text-xs text-neutral-500">NFT Collector</div>
</div>
</div>
</article>

<article className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 hover:border-indigo-500/30 transition-colors">
<blockquote className="text-[15px] leading-relaxed text-neutral-300 font-light">
                                    "Multi-sig integration is flawless. Our treasury management is now 10x more secure."
                                </blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="User" className="h-10 w-10 rounded-full object-cover grayscale opacity-70" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white">Michael Ross</div>
<div className="text-xs text-neutral-500">Treasury Lead</div>
</div>
</div>
</article>
</div>
</div>

<div className="hidden md:block overflow-hidden relative">
<div className="space-y-6" data-scroll-column="3">

<article className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 hover:border-indigo-500/30 transition-colors">
<blockquote className="text-[15px] leading-relaxed text-neutral-300 font-light">
                                    "We use Cortex to monitor our protocol's own deployment addresses. It's peace of mind."
                                </blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="User" className="h-10 w-10 rounded-full object-cover grayscale opacity-70" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white">David Kim</div>
<div className="text-xs text-neutral-500">Solidity Engineer</div>
</div>
</div>
</article>

<article className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 hover:border-indigo-500/30 transition-colors">
<blockquote className="text-[15px] leading-relaxed text-neutral-300 font-light">
                                    "Clean UI, fast data, and no fluff. Exactly what a professional trader needs."
                                </blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="User" className="h-10 w-10 rounded-full object-cover grayscale opacity-70" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white">Lisa Wang</div>
<div className="text-xs text-neutral-500">Quant Trader</div>
</div>
</div>
</article>

<article className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 hover:border-indigo-500/30 transition-colors">
<blockquote className="text-[15px] leading-relaxed text-neutral-300 font-light">
                                    "We use Cortex to monitor our protocol's own deployment addresses. It's peace of mind."
                                </blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="User" className="h-10 w-10 rounded-full object-cover grayscale opacity-70" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white">David Kim</div>
<div className="text-xs text-neutral-500">Solidity Engineer</div>
</div>
</div>
</article>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 py-24 relative z-10 border-t border-white/5 overflow-hidden" id="pricing">

<div className="absolute inset-0 z-0 pointer-events-none opacity-30">
<div className="absolute top-[20%] left-[20%] w-[600px] h-[600px] rounded-full blur-[120px] animate-rotate-slow origin-center bg-cyan-900/10 mix-blend-screen"></div>
<div className="absolute bottom-[20%] right-[20%] w-[600px] h-[600px] rounded-full blur-[120px] animate-rotate-slow origin-center bg-indigo-900/10 mix-blend-screen" style={{animationDirection: 'reverse'}}></div>
</div>
<div className="text-center mb-16 space-y-4 reveal relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white">Protocol <span className="text-gradient">Fees</span></h2>
<p className="text-neutral-500 text-sm font-light">Transparent pricing for on-chain protection.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative z-10">

<div className="p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] flex flex-col h-full transition-all duration-300 reveal-card delay-100 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:border-white/20">
<h3 className="text-lg font-medium mb-2 text-white">Hobbyist</h3>
<div className="flex items-baseline gap-1 mb-1">
<span className="text-4xl font-semibold tracking-tight text-white">0%</span>
</div>
<p className="text-neutral-500 text-xs mb-8">For personal wallets &lt; $10k</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 group">
<iconify-icon className="mt-0.5 group-hover:scale-125 transition-transform text-indigo-400" icon="lucide:check" width="14"></iconify-icon>
<span className="text-xs text-neutral-300">Basic Wallet Scan</span>
</li>
<li className="flex items-start gap-3 group">
<iconify-icon className="mt-0.5 group-hover:scale-125 transition-transform text-indigo-400" icon="lucide:check" width="14"></iconify-icon>
<span className="text-xs text-neutral-300">Manual Revoke</span>
</li>
<li className="flex items-start gap-3 group">
<iconify-icon className="mt-0.5 group-hover:scale-125 transition-transform text-indigo-400" icon="lucide:check" width="14"></iconify-icon>
<span className="text-xs text-neutral-300">1 Network (ETH)</span>
</li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all text-sm font-medium active:scale-95 focus:ring-1 focus:ring-white/20">
                        Start Free
                    </button>
</div>

<div className="relative p-8 rounded-2xl border border-white/20 bg-[#0A0A0A] flex flex-col h-full shadow-[0_0_50px_rgba(129,140,248,0.1)] transform md:-translate-y-4 reveal-card delay-200 hover:-translate-y-6 transition-all duration-300 hover:shadow-[0_0_80px_rgba(129,140,248,0.2)]">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-wide px-3 py-1 rounded-full flex items-center gap-1 shadow-lg bg-indigo-500 text-white shadow-indigo-500/30">
                        Recommended
                    </div>
<h3 className="text-lg font-medium mb-2 text-white">Trader</h3>
<div className="flex items-baseline gap-1 mb-1">
<span className="text-4xl font-semibold tracking-tight text-white">0.1%</span>
<span className="text-sm text-neutral-500">/ txn</span>
</div>
<p className="text-neutral-500 text-xs mb-8">Automated protection active</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 group">
<iconify-icon className="mt-0.5 group-hover:scale-125 transition-transform text-indigo-400" icon="lucide:check" width="14"></iconify-icon>
<span className="text-xs text-white">Real-time Frontrun Protection</span>
</li>
<li className="flex items-start gap-3 group">
<iconify-icon className="mt-0.5 group-hover:scale-125 transition-transform text-indigo-400" icon="lucide:check" width="14"></iconify-icon>
<span className="text-xs text-white">Auto-Shield Assets</span>
</li>
<li className="flex items-start gap-3 group">
<iconify-icon className="mt-0.5 group-hover:scale-125 transition-transform text-indigo-400" icon="lucide:check" width="14"></iconify-icon>
<span className="text-xs text-white">All EVM Chains</span>
</li>
</ul>
<button className="w-full py-3 rounded-lg transition-all text-sm font-medium flex items-center justify-center gap-2 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] bg-white text-black hover:bg-indigo-50">
                        Upgrade Now
                    </button>
</div>

<div className="p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] flex flex-col h-full transition-all duration-300 reveal-card delay-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:border-white/20">
<h3 className="text-lg font-medium mb-2 text-white">Institutional</h3>
<div className="flex items-baseline gap-1 mb-1">
<span className="text-4xl font-semibold tracking-tight text-white">Custom</span>
</div>
<p className="text-neutral-500 text-xs mb-8">For Funds &amp; DAOs</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 group">
<iconify-icon className="mt-0.5 group-hover:scale-125 transition-transform text-indigo-400" icon="lucide:check" width="14"></iconify-icon>
<span className="text-xs text-neutral-300">Dedicated Audit Team</span>
</li>
<li className="flex items-start gap-3 group">
<iconify-icon className="mt-0.5 group-hover:scale-125 transition-transform text-indigo-400" icon="lucide:check" width="14"></iconify-icon>
<span className="text-xs text-neutral-300">Private Mempool</span>
</li>
<li className="flex items-start gap-3 group">
<iconify-icon className="mt-0.5 group-hover:scale-125 transition-transform text-indigo-400" icon="lucide:check" width="14"></iconify-icon>
<span className="text-xs text-neutral-300">Insurance Coverage</span>
</li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all text-sm font-medium active:scale-95 focus:ring-1 focus:ring-white/20">
                        Contact Sales
                    </button>
</div>
</div>
</section>

<section className="w-full bg-[#080808] border-t border-white/5 py-32 px-6 relative z-10 reveal overflow-hidden">

<div className="absolute inset-0 pointer-events-none opacity-20">
<div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-[100%] blur-[100px] animate-pulse-glow"></div>
</div>

<div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-6 text-white">
                    Ready to secure your  <span className="text-gradient-accent">digital legacy?</span>
</h2>
<p className="text-neutral-500 text-sm leading-relaxed mb-10 max-w-sm mx-auto">
                    Join over 10,000 wallets protected by Cortex Protocol.
                </p>
<form className="max-w-sm mx-auto space-y-4 text-left relative group">
<div>
<input className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3.5 text-sm placeholder-neutral-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/5 transition-all text-white backdrop-blur-sm" placeholder="Enter your email" type="email"/>
</div>
<button className="w-full py-3.5 font-medium text-sm rounded-lg transition-all active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.1)] bg-white text-black hover:bg-indigo-50 hover:shadow-[0_0_30px_rgba(129,140,248,0.3)]" type="submit">
                        Get Early Access
                    </button>
</form>
</div>
</section>

<footer className="w-full border-t border-white/10 bg-black/80 backdrop-blur-lg py-12 px-6 reveal">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-6 h-6 flex items-center justify-center rounded-full bg-white group-hover:scale-110 transition-transform">
<div className="w-2 h-2 rounded-full bg-black"></div>
</div>
<span className="text-sm font-medium tracking-tight text-white group-hover:text-indigo-400 transition-colors">Cortex</span>
</div>
<div className="text-[11px] text-neutral-500">
                    © 2024 Cortex Protocol Labs. All rights reserved.
                </div>
<div className="flex gap-6">
<a className="text-neutral-500 transition-all hover:-translate-y-1 hover:text-white" href="#"><iconify-icon icon="simple-icons:twitter" width="16"></iconify-icon></a>
<a className="text-neutral-500 transition-all hover:-translate-y-1 hover:text-white" href="#"><iconify-icon icon="simple-icons:github" width="16"></iconify-icon></a>
<a className="text-neutral-500 transition-all hover:-translate-y-1 hover:text-white" href="#"><iconify-icon icon="simple-icons:discord" width="16"></iconify-icon></a>
</div>
</div>
</footer>
</main>


    </>
  );
}
