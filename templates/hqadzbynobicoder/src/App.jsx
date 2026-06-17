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
<div className="absolute top-[-20%] left-[10%] w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[150px] opacity-40"></div>
<div className="absolute bottom-[-10%] right-[5%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] opacity-30"></div>
<div className="absolute inset-0 bg-grid-premium z-0"></div>
</div>

<div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
<nav className="w-full max-w-5xl premium-glass rounded-full px-6 h-14 flex items-center justify-between transition-all duration-300">

<div className="flex items-center gap-3 cursor-pointer group">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-white to-slate-400 flex items-center justify-center shadow-lg shadow-white/10">
<div className="w-4 h-4 bg-black rounded-full flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
</div>
</div>
<span className="text-white text-sm font-semibold tracking-tight group-hover:text-slate-200 transition-colors">ADBOT<span className="text-slate-600 font-light">.AI</span></span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#process">Process</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#features">Modules</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#pricing">Plans</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#support">Support</a>
</div>

<div className="flex items-center gap-3">
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors hidden sm:block" href="#">Login</a>
<a className="bg-white text-black text-xs font-semibold px-4 py-1.5 rounded-full hover:bg-slate-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]" href="#pricing">
                    Deploy Bot
                </a>
</div>
</nav>
</div>

<section className="relative z-10 pt-40 pb-20 px-6">
<div className="max-w-7xl mx-auto flex flex-col items-center text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[10px] font-medium tracking-wide uppercase text-slate-300 mb-8 animate-float backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                System Operational
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter leading-[0.9] mb-8 max-w-5xl mx-auto">
                Autonomous ads <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-slate-600">running on autopilot.</span>
</h1>
<p className="text-lg text-slate-500 max-w-xl mx-auto mb-12 leading-relaxed font-light">
                Configure your parameters and let our neural engine handle the rest. From provisioning to profit in three simple steps.
            </p>

<div className="perspective-container w-full max-w-4xl mx-auto mb-20">
<div className="card-3d relative w-full bg-[#050505] border border-white/10 rounded-xl shadow-2xl shadow-purple-900/10 overflow-hidden">

<div className="h-12 border-b border-white/5 bg-white/[0.02] flex items-center px-5 justify-between">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/30"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/30"></div>
</div>
<div className="text-[10px] font-mono text-slate-600">adbot_workflow_v2.exe</div>
<div className="w-10"></div>
</div>

<div className="p-8 md:p-12 relative min-h-[400px] flex flex-col items-center justify-center">

<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#333', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#666', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>
<path className="hidden md:block" d="M 200 200 Q 400 50 600 200" fill="none" stroke="url(#grad1)" strokeWidth="1"></path>
</svg>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full relative z-10">

<div className="relative group">
<div className="h-full bg-gradient-to-b from-white/[0.08] to-transparent p-[1px] rounded-lg">
<div className="bg-black/90 backdrop-blur-xl h-full p-6 rounded-lg flex flex-col items-center text-center border border-white/5">
<div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 border border-blue-500/20 group-hover:bg-blue-500/20 transition-all">
<iconify-icon className="text-blue-400 text-xl" icon="lucide:credit-card"></iconify-icon>
</div>
<h3 className="text-white text-sm font-medium mb-1">1. Purchase</h3>
<p className="text-xs text-slate-500">Select plan &amp; checkout</p>
<div className="mt-4 px-2 py-1 bg-blue-500/10 rounded text-[10px] text-blue-400 font-mono">COMPLETED</div>
</div>
</div>

<div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 text-slate-700">
<iconify-icon className="text-lg" icon="lucide:arrow-right"></iconify-icon>
</div>
</div>

<div className="relative group">
<div className="h-full bg-gradient-to-b from-white/[0.08] to-transparent p-[1px] rounded-lg">
<div className="bg-black/90 backdrop-blur-xl h-full p-6 rounded-lg flex flex-col items-center text-center border border-white/5 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-[2px] bg-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.5)] animate-[float_2s_ease-in-out_infinite]"></div>
<div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center mb-4 border border-yellow-500/20">
<iconify-icon className="text-yellow-400 text-xl animate-spin" icon="lucide:loader-2"></iconify-icon>
</div>
<h3 className="text-white text-sm font-medium mb-1">2. Provisioning</h3>
<p className="text-xs text-slate-500">Allocating GPU...</p>
<div className="mt-4 px-2 py-1 bg-yellow-500/10 rounded text-[10px] text-yellow-400 font-mono animate-pulse">PROCESSING</div>
</div>
</div>

<div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 text-slate-700">
<iconify-icon className="text-lg" icon="lucide:arrow-right"></iconify-icon>
</div>
</div>

<div className="relative group">
<div className="h-full bg-gradient-to-b from-white/[0.08] to-transparent p-[1px] rounded-lg">
<div className="bg-black/90 backdrop-blur-xl h-full p-6 rounded-lg flex flex-col items-center text-center border border-white/5">
<div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4 border border-purple-500/20 group-hover:scale-110 transition-transform">
<iconify-icon className="text-purple-400 text-xl" icon="lucide:bot"></iconify-icon>
</div>
<h3 className="text-white text-sm font-medium mb-1">3. Receive Bot</h3>
<p className="text-xs text-slate-500">Credentials delivered</p>
<div className="mt-4 px-2 py-1 bg-white/5 rounded text-[10px] text-slate-400 font-mono">WAITING</div>
</div>
</div>

<div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 text-slate-700">
<iconify-icon className="text-lg" icon="lucide:arrow-right"></iconify-icon>
</div>
</div>

<div className="relative group">
<div className="h-full bg-gradient-to-b from-purple-500/50 to-indigo-500/50 p-[1px] rounded-lg shadow-[0_0_20px_rgba(168,85,247,0.15)]">
<div className="bg-black/90 backdrop-blur-xl h-full p-6 rounded-lg flex flex-col items-center text-center border border-white/5">
<div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4 border border-green-500/20 shadow-[0_0_10px_rgba(34,197,94,0.2)]">
<iconify-icon className="text-green-400 text-xl" icon="lucide:zap"></iconify-icon>
</div>
<h3 className="text-white text-sm font-medium mb-1">4. Auto-Run</h3>
<p className="text-xs text-slate-500">Profit generation</p>
<button className="mt-4 w-full py-1 bg-white text-black text-[10px] font-bold rounded hover:bg-slate-200 transition-colors">
                                            ACTIVATE
                                        </button>
</div>
</div>
</div>
</div>

<div className="w-full mt-8 p-4 bg-black rounded border border-white/10 font-mono text-[10px] text-slate-400">
<div className="flex gap-2">
<span className="text-green-500">➜</span>
<span>initializing_sequence...</span>
</div>
<div className="flex gap-2">
<span className="text-green-500">➜</span>
<span>connecting_to_network... <span className="text-green-400">OK</span> (12ms)</span>
</div>
<div className="flex gap-2">
<span className="text-blue-500">ℹ</span>
<span>Waiting for user activation input...</span>
<span className="w-2 h-4 bg-slate-500 animate-pulse"></span>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/5 pt-12 w-full max-w-4xl mx-auto">
<div>
<div className="text-3xl font-semibold text-white mb-1">99.9%</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Uptime</div>
</div>
<div>
<div className="text-3xl font-semibold text-white mb-1">50ms</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Latency</div>
</div>
<div>
<div className="text-3xl font-semibold text-white mb-1">24/7</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Monitoring</div>
</div>
<div>
<div className="text-3xl font-semibold text-white mb-1">∞</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Scalability</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Neural Capabilities</h2>
<p className="text-slate-500">A complete ecosystem for autonomous advertising.</p>
</div>
<a className="text-sm text-white border-b border-white/20 pb-0.5 hover:border-white transition-colors" href="#">View all documentation</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

<div className="premium-glass p-8 rounded-xl premium-card group cursor-default">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
<iconify-icon icon="lucide:target" strokeWidth="1.5"></iconify-icon>
</div>
<iconify-icon className="text-slate-600 group-hover:text-white transition-colors" icon="lucide:arrow-up-right"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Precision Targeting</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Algorithms that identify high-value user segments with 98% accuracy before bidding begins.
                    </p>
</div>

<div className="premium-glass p-8 rounded-xl premium-card group cursor-default">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
<iconify-icon icon="lucide:bar-chart-2" strokeWidth="1.5"></iconify-icon>
</div>
<iconify-icon className="text-slate-600 group-hover:text-white transition-colors" icon="lucide:arrow-up-right"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Real-time Bidding</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Micro-second execution on ad exchanges ensures you never overpay for an impression.
                    </p>
</div>

<div className="premium-glass p-8 rounded-xl premium-card group cursor-default">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
<iconify-icon icon="lucide:shield" strokeWidth="1.5"></iconify-icon>
</div>
<iconify-icon className="text-slate-600 group-hover:text-white transition-colors" icon="lucide:arrow-up-right"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Fraud Protection</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        AI-driven analysis filters out bot traffic and fraudulent clicks instantaneously.
                    </p>
</div>

<div className="premium-glass p-8 rounded-xl premium-card group cursor-default">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
<iconify-icon icon="lucide:layers" strokeWidth="1.5"></iconify-icon>
</div>
<iconify-icon className="text-slate-600 group-hover:text-white transition-colors" icon="lucide:arrow-up-right"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Multi-Channel</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Deploy simultaneously across Social, Search, and Display networks from a single dashboard.
                    </p>
</div>

<div className="premium-glass p-8 rounded-xl premium-card group cursor-default">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
<iconify-icon icon="lucide:refresh-ccw" strokeWidth="1.5"></iconify-icon>
</div>
<iconify-icon className="text-slate-600 group-hover:text-white transition-colors" icon="lucide:arrow-up-right"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Auto-Optimization</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Self-healing campaigns that adjust creatives and budgets based on performance data.
                    </p>
</div>

<div className="premium-glass p-8 rounded-xl premium-card group cursor-default lg:col-span-1">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
<iconify-icon icon="lucide:code-2" strokeWidth="1.5"></iconify-icon>
</div>
<iconify-icon className="text-slate-600 group-hover:text-white transition-colors" icon="lucide:arrow-up-right"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Developer API</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Full programmatic access to your bots for custom integrations and reporting.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="pricing">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">Transparent Pricing</h2>

<div className="inline-flex items-center p-1 bg-white/5 rounded-full border border-white/5" x-data="{ annual: false }">
<button className="px-6 py-2 rounded-full text-xs font-medium bg-white text-black shadow-lg transition-all">Weekly</button>
<button className="px-6 py-2 rounded-full text-xs font-medium text-slate-400 hover:text-white transition-all">Monthly</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

<div className="premium-glass p-8 rounded-xl flex flex-col h-full hover:border-white/20 transition-all duration-300">
<div className="flex justify-between items-start mb-8">
<div>
<h3 className="text-xl font-medium text-white">Starter Bot</h3>
<p className="text-sm text-slate-500 mt-1">For individual automation</p>
</div>
<div className="text-right">
<div className="text-4xl font-medium text-white tracking-tight">$49</div>
<span className="text-xs text-slate-500">/week</span>
</div>
</div>
<hr className="border-white/5 mb-8"/>
<div className="space-y-4 mb-8 flex-1">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center"><iconify-icon className="text-white text-xs" icon="lucide:check"></iconify-icon></div>
<span className="text-sm text-slate-300">1 Active AdBot</span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center"><iconify-icon className="text-white text-xs" icon="lucide:check"></iconify-icon></div>
<span className="text-sm text-slate-300">Basic Analytics</span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center"><iconify-icon className="text-white text-xs" icon="lucide:check"></iconify-icon></div>
<span className="text-sm text-slate-300">Community Support</span>
</div>
</div>
<button className="w-full py-3 bg-white/5 border border-white/10 text-white text-sm font-medium rounded-lg hover:bg-white hover:text-black transition-all">
                        Deploy Now
                    </button>
</div>

<div className="relative group">
<div className="absolute -inset-[1px] bg-gradient-to-b from-purple-500/50 to-indigo-500/50 rounded-xl opacity-30 blur-sm group-hover:opacity-50 transition duration-500"></div>
<div className="premium-glass p-8 rounded-xl h-full flex flex-col relative bg-[#050505]">
<div className="absolute top-0 right-0 p-4">
<span className="bg-purple-500/10 text-purple-300 text-[10px] font-bold px-2 py-1 rounded border border-purple-500/20 uppercase tracking-wider">Recommended</span>
</div>
<div className="flex justify-between items-start mb-8">
<div>
<h3 className="text-xl font-medium text-white">Agency Swarm</h3>
<p className="text-sm text-slate-500 mt-1">For scaling operations</p>
</div>
<div className="text-right">
<div className="text-4xl font-medium text-white tracking-tight">$149</div>
<span className="text-xs text-slate-500">/week</span>
</div>
</div>
<hr className="border-white/5 mb-8"/>
<div className="space-y-4 mb-8 flex-1">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center"><iconify-icon className="text-purple-300 text-xs" icon="lucide:check"></iconify-icon></div>
<span className="text-sm text-white">Unlimited AdBots</span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center"><iconify-icon className="text-purple-300 text-xs" icon="lucide:check"></iconify-icon></div>
<span className="text-sm text-white">Real-time Insights</span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center"><iconify-icon className="text-purple-300 text-xs" icon="lucide:check"></iconify-icon></div>
<span className="text-sm text-white">Priority 24/7 Support</span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center"><iconify-icon className="text-purple-300 text-xs" icon="lucide:check"></iconify-icon></div>
<span className="text-sm text-white">API Access</span>
</div>
</div>
<button className="w-full py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                            Start Scale Plan
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-t border-white/5 bg-black/50" id="support">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 mb-6">
<iconify-icon className="text-white text-xl" icon="lucide:life-buoy"></iconify-icon>
</div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Priority Support</h2>
<p className="text-slate-500">Encountering issues with your bot? Submit a ticket below.</p>
</div>
<form className="premium-glass p-8 rounded-xl space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 uppercase tracking-wide">Email Address</label>
<input className="w-full px-4 py-3 rounded-lg text-sm input-premium placeholder:text-slate-600" placeholder="name@company.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 uppercase tracking-wide">Order ID (Optional)</label>
<input className="w-full px-4 py-3 rounded-lg text-sm input-premium placeholder:text-slate-600" placeholder="#ORD-..." type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 uppercase tracking-wide">Subject</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-lg text-sm input-premium appearance-none text-slate-300 cursor-pointer">
<option>Bot Activation Issue</option>
<option>Billing Inquiry</option>
<option>Technical Question</option>
<option>Other</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" icon="lucide:chevron-down"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 uppercase tracking-wide">Message</label>
<textarea className="w-full px-4 py-3 rounded-lg text-sm input-premium placeholder:text-slate-600 resize-none" placeholder="Describe your issue..." rows="4"></textarea>
</div>
<div className="pt-4">
<button className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-all shadow-lg shadow-purple-900/20 flex items-center justify-center gap-2" type="button">
<iconify-icon className="text-xs" icon="lucide:send"></iconify-icon>
                        Submit Ticket
                    </button>
</div>
</form>
<div className="text-center mt-8 text-xs text-slate-600">
                Average response time: <span className="text-green-500">~2 hours</span>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-black relative z-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">
<div className="w-3 h-3 bg-white rounded-full"></div>
</div>
<span className="text-white text-xs font-semibold tracking-tight">ADBOT.AI</span>
</div>
<div className="flex gap-8 text-xs text-slate-500 font-medium">
<a className="hover:text-white transition-colors" href="#">Documentation</a>
<a className="hover:text-white transition-colors" href="#">API Status</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
</div>
<div className="text-xs text-slate-700 font-mono">
                SYSTEM_ID: 884-29X
            </div>
</div>
</footer>

    </>
  );
}
