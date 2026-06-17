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
      

<nav className="fixed top-0 w-full z-50 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-black text-xs font-bold">
                    E
                </div>
<span className="text-base font-medium tracking-tighter text-white">EMPATECH</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Platform</a>
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Solutions</a>
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Developers</a>
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm text-slate-300 hover:text-white transition-colors" href="#">Sign in</a>
<a className="group relative px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium hover:bg-white/20 transition-all border border-white/10 overflow-hidden" href="#">
<span className="relative z-10 flex items-center gap-2">
                        Get Started
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] hero-glow pointer-events-none opacity-60"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 mb-8 backdrop-blur-sm">
<span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse"></span>
<span className="text-xs font-medium text-indigo-200 tracking-wide uppercase">Empatech v2.0 is live</span>
</div>

<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6 leading-[1.1]">
                    The operating system for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-indigo-300">modern B2B growth.</span>
</h1>

<p className="text-lg text-slate-400 max-w-2xl font-light mb-10 leading-relaxed">
                    Orchestrate your entire business logic, pricing models, and entitlements in one unified platform. Built for developers, designed for growth teams.
                </p>

<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="h-10 px-6 rounded-lg bg-white text-black text-sm font-medium hover:bg-slate-200 transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                        Start building free
                        <iconify-icon icon="solar:code-circle-linear" width="18"></iconify-icon>
</button>
<button className="h-10 px-6 rounded-lg bg-transparent border border-white/10 text-slate-300 text-sm font-medium hover:text-white hover:bg-white/5 transition-colors flex items-center gap-2">
                        Read Documentation
                        <iconify-icon icon="solar:notebook-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="perspective-container mt-10">
<div className="tilted-card max-w-5xl mx-auto rounded-xl border border-white/10 bg-[#0A0C10] overflow-hidden relative">

<div className="h-10 border-b border-white/5 bg-white/[0.02] flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
<div className="ml-auto flex items-center gap-3">
<div className="h-1.5 w-16 rounded-full bg-white/10"></div>
<div className="h-6 w-6 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
<iconify-icon className="text-indigo-400 text-xs" icon="solar:user-circle-linear"></iconify-icon>
</div>
</div>
</div>

<div className="flex h-[400px] md:h-[500px]">

<div className="w-16 md:w-64 border-r border-white/5 p-4 flex flex-col gap-6 bg-white/[0.01]">
<div className="flex flex-col gap-1">
<div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-2">Menu</div>
<div className="flex items-center gap-3 px-2 py-2 rounded-md bg-white/5 text-white text-sm">
<iconify-icon icon="solar:home-smile-linear" width="18"></iconify-icon>
<span className="hidden md:inline">Overview</span>
</div>
<div className="flex items-center gap-3 px-2 py-2 rounded-md text-slate-400 hover:text-white hover:bg-white/5 transition-colors text-sm">
<iconify-icon icon="solar:graph-new-linear" width="18"></iconify-icon>
<span className="hidden md:inline">Analytics</span>
</div>
<div className="flex items-center gap-3 px-2 py-2 rounded-md text-slate-400 hover:text-white hover:bg-white/5 transition-colors text-sm">
<iconify-icon icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
<span className="hidden md:inline">Customers</span>
</div>
<div className="flex items-center gap-3 px-2 py-2 rounded-md text-slate-400 hover:text-white hover:bg-white/5 transition-colors text-sm">
<iconify-icon icon="solar:card-linear" width="18"></iconify-icon>
<span className="hidden md:inline">Entitlements</span>
</div>
</div>
<div className="mt-auto">
<div className="p-3 rounded-lg border border-indigo-500/20 bg-indigo-500/5 hidden md:block">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-indigo-300">API Status</span>
<span className="text-[10px] text-green-400 bg-green-900/30 px-1.5 py-0.5 rounded">Operational</span>
</div>
<div className="w-full bg-indigo-900/30 h-1 rounded-full overflow-hidden">
<div className="bg-indigo-500 h-full w-[98%]"></div>
</div>
</div>
</div>
</div>

<div className="flex-1 p-6 md:p-8 overflow-hidden relative">

<div className="flex justify-between items-end mb-8">
<div>
<h2 className="text-xl font-medium text-white">Overview</h2>
<p className="text-sm text-slate-500 mt-1">Real-time metrics for your SaaS products.</p>
</div>
<div className="flex gap-2">
<div className="px-3 py-1.5 rounded border border-white/10 bg-white/5 text-xs text-slate-300 flex items-center gap-2">
                                        Last 30 Days
                                        <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

<div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded bg-indigo-500/10 text-indigo-400">
<iconify-icon icon="solar:dollar-minimalistic-linear" width="20"></iconify-icon>
</div>
<span className="text-xs text-green-400 flex items-center">+12.5%</span>
</div>
<div className="text-2xl font-medium text-white mb-1">$124,500</div>
<div className="text-xs text-slate-500">Monthly Recurring Revenue</div>
</div>

<div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded bg-cyan-500/10 text-cyan-400">
<iconify-icon icon="solar:user-plus-linear" width="20"></iconify-icon>
</div>
<span className="text-xs text-green-400 flex items-center">+8.2%</span>
</div>
<div className="text-2xl font-medium text-white mb-1">1,482</div>
<div className="text-xs text-slate-500">Active Workspaces</div>
</div>

<div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded bg-purple-500/10 text-purple-400">
<iconify-icon icon="solar:server-square-linear" width="20"></iconify-icon>
</div>
<span className="text-xs text-slate-500 flex items-center">0%</span>
</div>
<div className="text-2xl font-medium text-white mb-1">99.99%</div>
<div className="text-xs text-slate-500">System Uptime</div>
</div>
</div>

<div className="w-full h-48 rounded-lg border border-white/5 bg-white/[0.02] relative overflow-hidden flex items-end px-4 pt-10 pb-0 gap-2">

<div className="w-full h-[40%] bg-indigo-500/20 rounded-t-sm"></div>
<div className="w-full h-[60%] bg-indigo-500/20 rounded-t-sm"></div>
<div className="w-full h-[45%] bg-indigo-500/20 rounded-t-sm"></div>
<div className="w-full h-[75%] bg-indigo-500/20 rounded-t-sm"></div>
<div className="w-full h-[50%] bg-indigo-500/20 rounded-t-sm"></div>
<div className="w-full h-[85%] bg-indigo-500/40 rounded-t-sm relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-indigo-600 text-[10px] text-white rounded">Peak</div>
</div>
<div className="w-full h-[65%] bg-indigo-500/20 rounded-t-sm"></div>
</div>

<div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0C10] to-transparent pointer-events-none"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm text-slate-500 mb-8 font-medium">TRUSTED BY ENGINEERING TEAMS AT</p>
<div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold font-sans tracking-tighter text-white">ACME<span className="text-indigo-500">.corp</span></span>
<span className="text-xl font-semibold tracking-tight text-white flex items-center gap-1"><div className="w-4 h-4 bg-white rounded-full"></div> KROMA</span>
<span className="text-xl font-bold tracking-widest text-white">NEXUS</span>
<span className="text-lg font-medium tracking-tight text-white italic">Velocity</span>
<span className="text-xl font-bold tracking-tighter text-white flex items-center gap-1"><iconify-icon icon="solar:box-linear"></iconify-icon> BOXED</span>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Complete control plane.</h2>
<p className="text-slate-400 text-lg font-light max-w-2xl">Everything you need to monetize, manage, and scale your B2B software offering.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 group relative rounded-2xl border border-white/10 bg-[#08090D] overflow-hidden hover:border-white/20 transition-colors">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="p-8 relative z-10">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20">
<iconify-icon icon="solar:bill-list-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Flexible Pricing Models</h3>
<p className="text-slate-400 font-light text-sm leading-relaxed max-w-md">
                            Create seats, usage-based, or hybrid pricing models in seconds without changing code. Empatech handles the metering logic and billing sync automatically.
                        </p>

<div className="mt-8 p-4 rounded-lg bg-black/40 border border-white/5 font-mono text-xs text-slate-300">
<div className="flex items-center gap-2 mb-2 text-slate-500">
<span className="text-indigo-400">const</span> plan = <span className="text-yellow-200">await</span> empatech.plans.create({
                            </div>
<div className="pl-4">
<span className="text-purple-300">name</span>: <span className="text-green-300">'Enterprise'</span>,<br/>
<span className="text-purple-300">model</span>: <span className="text-green-300">'usage_based'</span>,<br/>
<span className="text-purple-300">unit_amount</span>: <span className="text-blue-300">1500</span>
</div>
<div className="text-slate-500">});</div>
</div>
</div>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-[#08090D] overflow-hidden hover:border-white/20 transition-colors">
<div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="p-8 relative z-10 h-full flex flex-col">
<div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 border border-cyan-500/20">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Enterprise Ready</h3>
<p className="text-slate-400 font-light text-sm leading-relaxed">
                            SSO, Audit Logs, and Role-Based Access Control (RBAC) out of the box. Make your product enterprise-compliant instantly.
                        </p>
<div className="mt-auto pt-8 flex gap-2">
<span className="px-2 py-1 rounded bg-white/5 border border-white/5 text-[10px] text-slate-400">SAML</span>
<span className="px-2 py-1 rounded bg-white/5 border border-white/5 text-[10px] text-slate-400">SOC2</span>
<span className="px-2 py-1 rounded bg-white/5 border border-white/5 text-[10px] text-slate-400">GDPR</span>
</div>
</div>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-[#08090D] overflow-hidden hover:border-white/20 transition-colors">
<div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="p-8 relative z-10">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 border border-purple-500/20">
<iconify-icon icon="solar:widget-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Embeddable UI</h3>
<p className="text-slate-400 font-light text-sm leading-relaxed">
                            Drop-in customer portals for billing and usage. Fully customizable to match your brand identity using CSS variables.
                        </p>
</div>

<div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/20 blur-3xl rounded-full translate-x-10 translate-y-10"></div>
</div>

<div className="md:col-span-2 group relative rounded-2xl border border-white/10 bg-[#08090D] overflow-hidden hover:border-white/20 transition-colors">
<div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex flex-col md:flex-row h-full">
<div className="p-8 relative z-10 flex-1">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/20">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Real-time Usage Metering</h3>
<p className="text-slate-400 font-light text-sm leading-relaxed">
                                Stream events directly to Empatech. We aggregate, calculate, and trigger limits in milliseconds.
                            </p>
</div>
<div className="flex-1 bg-black/20 border-l border-white/5 relative overflow-hidden flex items-center justify-center p-8">

<svg className="w-full text-emerald-500 fill-none stroke-current stroke-2 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]" viewbox="0 0 200 100">
<path d="M0 80 Q 40 80, 50 60 T 100 50 T 150 30 T 200 10"></path>
</svg>
<div className="absolute inset-0 bg-gradient-to-t from-[#08090D] to-transparent h-10 bottom-0"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050609] border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
<iconify-icon className="text-indigo-400" icon="solar:code-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-300">Developer First</span>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">
                    SDKs for every stack. <br />
<span className="text-slate-500">Ready in minutes.</span>
</br></h2>
<p className="text-slate-400 text-lg font-light mb-8 leading-relaxed">
                    Empatech provides typed SDKs for Node, Python, Go, and React. Webhooks ensure your system stays in sync with subscription changes instantly.
                </p>
<div className="flex gap-4 mb-8">
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center border border-white/10 hover:border-white/30 transition-colors cursor-pointer">
<iconify-icon className="text-slate-300 text-xl" icon="solar:figma-linear"></iconify-icon>
</div>
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center border border-white/10 hover:border-white/30 transition-colors cursor-pointer">
<span className="text-slate-300 font-bold text-xs">JS</span>
</div>
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center border border-white/10 hover:border-white/30 transition-colors cursor-pointer">
<span className="text-slate-300 font-bold text-xs">PY</span>
</div>
</div>
<a className="text-indigo-400 text-sm font-medium hover:text-indigo-300 inline-flex items-center gap-1" href="#">
                    Read the API Reference
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="w-full md:w-1/2">
<div className="rounded-xl bg-[#0F1117] border border-white/10 p-1 shadow-2xl relative">

<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur opacity-50 rounded-xl"></div>
<div className="relative bg-[#0F1117] rounded-lg p-6 overflow-hidden">
<div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
<div className="flex gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-red-500/20"></span>
<span className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></span>
<span className="w-2.5 h-2.5 rounded-full bg-green-500/20"></span>
</div>
<span className="text-xs text-slate-500 font-mono">middleware.ts</span>
</div>
<pre className="font-mono text-xs md:text-sm leading-6 overflow-x-auto text-slate-300"><code><span className="text-purple-400">import</span> { Empatech } <span className="text-purple-400">from</span> <span className="text-green-300">'@empatech/node'</span>;

<span className="text-slate-500">// Initialize the client</span>
<span className="text-purple-400">const</span> client = <span className="text-purple-400">new</span> Empatech(process.env.API_KEY);

<span className="text-purple-400">export async function</span> <span className="text-blue-400">checkAccess</span>(req, res) {
  <span className="text-purple-400">const</span> { userId, feature } = req.body;

  <span className="text-slate-500">// Check entitlement in real-time</span>
  <span className="text-purple-400">const</span> access = <span className="text-purple-400">await</span> client.entitlements.<span className="text-blue-400">can</span>({
    userId,
    feature
  });

  <span className="text-purple-400">if</span> (!access.granted) {
    <span className="text-purple-400">return</span> res.<span className="text-blue-400">status</span>(<span className="text-blue-300">403</span>).<span className="text-blue-400">json</span>({ error: <span className="text-green-300">'Upgrade required'</span> });
  }

  <span className="text-blue-400">next</span>();
}</code></pre>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#030406] to-[#030406]"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-6">
                Ready to standardize your business logic?
            </h2>
<p className="text-slate-400 text-lg font-light mb-10">
                Join hundreds of engineering teams shipping faster with Empatech.
            </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<button className="h-12 px-8 rounded-full bg-white text-black font-medium hover:scale-105 transition-transform duration-200">
                    Get Started Now
                </button>
<button className="h-12 px-8 rounded-full bg-transparent border border-white/20 text-white font-medium hover:bg-white/5 transition-colors">
                    Contact Sales
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-[#020203] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
<div className="col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-[10px] font-bold">E</div>
<span className="text-sm font-medium tracking-tight text-white">EMPATECH</span>
</div>
<p className="text-sm text-slate-500 max-w-xs font-light">
                        The all-in-one operating system for B2B SaaS businesses. Monetize, manage, and grow without the headache.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Product</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-white transition-colors" href="#">Pricing Models</a></li>
<li><a className="text-sm text-slate-500 hover:text-white transition-colors" href="#">Entitlements</a></li>
<li><a className="text-sm text-slate-500 hover:text-white transition-colors" href="#">Usage Metering</a></li>
<li><a className="text-sm text-slate-500 hover:text-white transition-colors" href="#">Customer Portal</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Resources</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="text-sm text-slate-500 hover:text-white transition-colors" href="#">API Reference</a></li>
<li><a className="text-sm text-slate-500 hover:text-white transition-colors" href="#">Community</a></li>
<li><a className="text-sm text-slate-500 hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-white transition-colors" href="#">About</a></li>
<li><a className="text-sm text-slate-500 hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="text-sm text-slate-500 hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-slate-500 hover:text-white transition-colors" href="#">Legal</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8">
<p className="text-xs text-slate-600">© 2024 Empatech Inc. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="text-slate-600 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:camera-linear"></iconify-icon></a>
<a className="text-slate-600 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:chat-round-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
