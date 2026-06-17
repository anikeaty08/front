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
      

<nav className="sticky top-0 z-50 bg-[#F8FAFC]/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-semibold tracking-tighter text-blue-600" href="#home">
                    REMITPRO
                </a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors" href="#home">Platform</a>
<a className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors" href="#services">Solutions</a>
<a className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors" href="#integrations">Ecosystem</a>
<a className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors" href="#about">Company</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors" href="#contact">Login</a>
<a className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm" href="#contact">
                    Book Demo
                </a>
</div>
</div>
</nav>

<header className="relative pt-24 pb-16 overflow-hidden flex flex-col justify-center bg-white" id="home">

<div className="absolute inset-0 bg-grid-pattern -z-10 mask-image:linear-gradient(to_bottom,white,transparent)"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-blue-100/50 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 text-center z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-100 bg-blue-50/50 backdrop-blur-sm text-xs font-medium text-blue-700 mb-8 shadow-sm">
<iconify-icon icon="solar:globus-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>The new standard for operational scale</span>
<span className="w-px h-3 bg-blue-200 mx-1"></span>
<a className="flex items-center gap-1 hover:underline" href="#services">
                    Explore v2.0
                    <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-slate-900 leading-[1.05] mb-6 max-w-5xl mx-auto">
                Next-gen software for <br className="hidden md:block"/> global enterprise.
            </h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                Dynamic 3D-ready infrastructure powering remittance networks, travel bookings, and complex global inventories with zero latency.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2" href="#contact">
                    Start Building
                    <iconify-icon icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-6 py-3 rounded-lg text-sm font-medium hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm flex items-center justify-center gap-2" href="#services">
<iconify-icon icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Watch Overview
                </a>
</div>
</div>

<div className="w-full max-w-6xl mx-auto px-6 mt-16 perspective-scene relative pb-24">
<div className="hero-3d-wrapper rounded-2xl bg-white border border-slate-200/80 shadow-2xl overflow-hidden relative z-10 backdrop-blur-xl">

<div className="h-12 border-b border-slate-100 bg-slate-50/80 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
</div>
<div className="mx-auto flex items-center gap-2 px-3 py-1 bg-white border border-slate-100 rounded-md text-xs text-slate-400 font-medium shadow-sm">
<iconify-icon icon="solar:lock-keyhole-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        hub.remitpro.net
                    </div>
</div>

<div className="flex h-[400px] md:h-[550px] bg-white">
<div className="w-64 border-r border-slate-100 hidden md:flex flex-col p-4 bg-[#F8FAFC]/50">
<div className="flex items-center gap-3 px-3 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium shadow-md shadow-blue-600/20 mb-2">
<iconify-icon icon="solar:pie-chart-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Dashboard
                        </div>
<div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer">
<iconify-icon icon="solar:transfer-horizontal-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Remittances
                        </div>
<div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer">
<iconify-icon icon="solar:plane-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Travel Bookings
                        </div>
<div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer">
<iconify-icon icon="solar:box-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Logistics Core
                        </div>
</div>
<div className="flex-1 p-6 md:p-8 flex flex-col gap-6 bg-white overflow-hidden relative">
<div className="grid grid-cols-2 gap-4">
<div className="bg-[#F8FAFC] p-4 rounded-xl border border-slate-100 flex flex-col gap-2">
<span className="text-xs font-medium text-slate-500">Global Volume</span>
<span className="text-3xl font-semibold tracking-tight text-slate-900">$84.2M</span>
<div className="w-full bg-blue-100 h-1.5 rounded-full mt-1 overflow-hidden">
<div className="bg-blue-600 w-[70%] h-full rounded-full"></div>
</div>
</div>
<div className="bg-[#F8FAFC] p-4 rounded-xl border border-slate-100 flex flex-col gap-2">
<span className="text-xs font-medium text-slate-500">Active Nodes</span>
<span className="text-3xl font-semibold tracking-tight text-slate-900">1,204</span>
<div className="flex items-center gap-1 mt-1 text-emerald-600 text-xs font-medium">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                                    Systems Operational
                                </div>
</div>
</div>

<div className="flex-1 bg-[#F8FAFC] border border-slate-100 rounded-xl p-6 flex flex-col">
<h3 className="text-sm font-medium tracking-tight text-slate-900 mb-6">Real-time Analytics</h3>
<div className="flex-1 flex items-end gap-2 md:gap-3">
<div className="w-full bg-blue-100 rounded-t-md h-[40%] chart-bar"></div>
<div className="w-full bg-slate-200 rounded-t-md h-[60%] chart-bar"></div>
<div className="w-full bg-blue-600 rounded-t-md h-[45%] chart-bar shadow-lg"></div>
<div className="w-full bg-slate-200 rounded-t-md h-[80%] chart-bar"></div>
<div className="w-full bg-blue-200 rounded-t-md h-[50%] chart-bar"></div>
<div className="w-full bg-slate-200 rounded-t-md h-[70%] chart-bar hidden sm:block"></div>
<div className="w-full bg-blue-600 rounded-t-md h-[95%] chart-bar shadow-lg hidden sm:block"></div>
<div className="w-full bg-slate-200 rounded-t-md h-[65%] chart-bar hidden md:block"></div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden md:flex absolute -left-12 top-1/4 float-el-1 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-slate-200/50 items-center gap-3 z-20">
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
<iconify-icon icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Transfer Cleared</div>
<div className="text-xs text-slate-500">$4,250.00 • USD to GBP</div>
</div>
</div>
<div className="hidden md:flex absolute -right-6 bottom-1/3 float-el-2 bg-slate-900 p-4 rounded-xl shadow-2xl border border-slate-800 items-center gap-3 z-20">
<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Security Active</div>
<div className="text-xs text-slate-400">SOC 2 Type II Encrypted</div>
</div>
</div>
<div className="hidden lg:flex absolute left-1/4 -bottom-8 float-el-3 bg-white p-3 rounded-xl shadow-lg border border-slate-100 items-center gap-2 z-20">
<iconify-icon className="text-blue-600" icon="solar:server-square-linear" width="18"></iconify-icon>
<span className="text-xs font-medium text-slate-700">API Latency: 12ms</span>
</div>
</div>
</header>

<section className="py-10 border-y border-slate-200/60 bg-white overflow-hidden" id="integrations">
<div className="max-w-7xl mx-auto px-6 mb-6">
<p className="text-xs font-medium text-slate-400 uppercase tracking-widest text-center">Seamlessly Integrated Ecosystem</p>
</div>
<div className="marquee-container relative w-full">

<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
<div className="marquee-content">

<div className="flex items-center gap-2 px-4 py-2 bg-[#F8FAFC] rounded-lg border border-slate-100 text-sm font-medium text-slate-600"><iconify-icon className="text-blue-500" icon="solar:card-linear"></iconify-icon> Global Payment Rails</div>
<div className="flex items-center gap-2 px-4 py-2 bg-[#F8FAFC] rounded-lg border border-slate-100 text-sm font-medium text-slate-600"><iconify-icon className="text-slate-400" icon="solar:database-linear"></iconify-icon> Core Banking Systems</div>
<div className="flex items-center gap-2 px-4 py-2 bg-[#F8FAFC] rounded-lg border border-slate-100 text-sm font-medium text-slate-600"><iconify-icon className="text-sky-500" icon="solar:plane-linear"></iconify-icon> GDS (Amadeus &amp; Sabre)</div>
<div className="flex items-center gap-2 px-4 py-2 bg-[#F8FAFC] rounded-lg border border-slate-100 text-sm font-medium text-slate-600"><iconify-icon className="text-indigo-500" icon="solar:users-group-rounded-linear"></iconify-icon> Enterprise CRMs</div>
<div className="flex items-center gap-2 px-4 py-2 bg-[#F8FAFC] rounded-lg border border-slate-100 text-sm font-medium text-slate-600"><iconify-icon className="text-slate-400" icon="solar:scanner-linear"></iconify-icon> Identity &amp; KYC APIs</div>
<div className="flex items-center gap-2 px-4 py-2 bg-[#F8FAFC] rounded-lg border border-slate-100 text-sm font-medium text-slate-600"><iconify-icon className="text-emerald-500" icon="solar:calculator-linear"></iconify-icon> Cloud Accounting</div>
</div>
<div aria-hidden="true" className="marquee-content">

<div className="flex items-center gap-2 px-4 py-2 bg-[#F8FAFC] rounded-lg border border-slate-100 text-sm font-medium text-slate-600"><iconify-icon className="text-blue-500" icon="solar:card-linear"></iconify-icon> Global Payment Rails</div>
<div className="flex items-center gap-2 px-4 py-2 bg-[#F8FAFC] rounded-lg border border-slate-100 text-sm font-medium text-slate-600"><iconify-icon className="text-slate-400" icon="solar:database-linear"></iconify-icon> Core Banking Systems</div>
<div className="flex items-center gap-2 px-4 py-2 bg-[#F8FAFC] rounded-lg border border-slate-100 text-sm font-medium text-slate-600"><iconify-icon className="text-sky-500" icon="solar:plane-linear"></iconify-icon> GDS (Amadeus &amp; Sabre)</div>
<div className="flex items-center gap-2 px-4 py-2 bg-[#F8FAFC] rounded-lg border border-slate-100 text-sm font-medium text-slate-600"><iconify-icon className="text-indigo-500" icon="solar:users-group-rounded-linear"></iconify-icon> Enterprise CRMs</div>
<div className="flex items-center gap-2 px-4 py-2 bg-[#F8FAFC] rounded-lg border border-slate-100 text-sm font-medium text-slate-600"><iconify-icon className="text-slate-400" icon="solar:scanner-linear"></iconify-icon> Identity &amp; KYC APIs</div>
<div className="flex items-center gap-2 px-4 py-2 bg-[#F8FAFC] rounded-lg border border-slate-100 text-sm font-medium text-slate-600"><iconify-icon className="text-emerald-500" icon="solar:calculator-linear"></iconify-icon> Cloud Accounting</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F8FAFC]" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
                    Modular solutions, unified architecture.
                </h2>
<p className="text-base text-slate-500 leading-relaxed">
                    Explore our suite of industry-specific platforms, built on a shared foundation of high-performance microservices.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[minmax(280px,auto)]">

<div className="md:col-span-4 bento-card-3d group relative overflow-hidden p-8 rounded-3xl bg-white border border-slate-200 flex flex-col justify-between hover:border-blue-300">
<div className="relative z-10 w-full max-w-md">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
<iconify-icon icon="solar:global-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Money Transfer Protocol</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                            End-to-end platforms for remittance companies. KYC/AML compliance, multi-currency routing, real-time exchange rates, and agent portals.
                        </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors" href="#">
                            Explore Remittance API <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>

<div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 w-64 h-64 bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
<div className="absolute -right-10 bottom-10 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700">
<iconify-icon icon="solar:transfer-horizontal-linear" width="200"></iconify-icon>
</div>
</div>

<div className="md:col-span-2 bento-card-3d group relative overflow-hidden p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
<iconify-icon icon="solar:plane-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Travel Engine</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                            Comprehensive booking engines connecting directly with major GDS for flights, hotels, and custom tour packages.
                        </p>
</div>

<div className="mt-8 flex gap-2 overflow-hidden opacity-50 group-hover:opacity-100 transition-opacity">
<div className="h-1 flex-1 bg-blue-500 rounded-full"></div>
<div className="h-1 flex-1 bg-slate-700 rounded-full"></div>
<div className="h-1 flex-1 bg-slate-700 rounded-full"></div>
</div>
</div>

<div className="md:col-span-3 bento-card-3d group relative overflow-hidden p-8 rounded-3xl bg-white border border-slate-200 flex flex-col justify-between hover:border-slate-300">
<div>
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-700 flex items-center justify-center border border-slate-100">
<iconify-icon icon="solar:box-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<span className="px-2.5 py-1 bg-emerald-50 text-emerald-600 text-xs font-medium rounded-full border border-emerald-100">Live Sync</span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Inventory Management</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            Multi-warehouse tracking, automated supplier reordering, and barcode logistics integration.
                        </p>
</div>
</div>

<div className="md:col-span-3 bento-card-3d group relative overflow-hidden p-8 rounded-3xl bg-white border border-slate-200 flex flex-col justify-between hover:border-slate-300">
<div>
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-700 flex items-center justify-center border border-slate-100">
<iconify-icon icon="solar:wheel-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<span className="px-2.5 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full border border-blue-100">POS Ready</span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Auto Shop &amp; Tyre POS</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            Specialized software for service bays. Mechanic scheduling, vehicle parts lookup, and instant digital invoicing.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
<iconify-icon icon="solar:layers-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
                    Engineered for high-stakes environments.
                </h2>
<p className="text-base text-slate-500 leading-relaxed mb-8">
                    Our architecture is designed from the ground up to ensure absolute data integrity, fault tolerance, and rapid scalability.
                </p>
<div className="space-y-6 relative before:absolute before:inset-y-0 before:left-3 before:w-px before:bg-slate-200">
<div className="relative pl-10">
<div className="absolute left-0 top-1 w-6 h-6 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center z-10">
<div className="w-2 h-2 bg-blue-600 rounded-full"></div>
</div>
<h4 className="text-sm font-semibold text-slate-900">Cloud-Native Processing</h4>
<p className="text-sm text-slate-500 mt-1">Distributed microservices across AWS and GCP for zero-downtime deployments.</p>
</div>
<div className="relative pl-10">
<div className="absolute left-0 top-1 w-6 h-6 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center z-10"></div>
<h4 className="text-sm font-semibold text-slate-900">Bank-Grade Encryption</h4>
<p className="text-sm text-slate-500 mt-1">End-to-end AES-256 encryption at rest and in transit. SOC 2 Type II compliant.</p>
</div>
<div className="relative pl-10">
<div className="absolute left-0 top-1 w-6 h-6 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center z-10"></div>
<h4 className="text-sm font-semibold text-slate-900">Extensible API Gateway</h4>
<p className="text-sm text-slate-500 mt-1">GraphQL and REST endpoints with automated documentation and sandbox environments.</p>
</div>
</div>
</div>

<div className="relative w-full aspect-square md:aspect-[4/3] bg-slate-900 rounded-2xl border border-slate-800 p-6 overflow-hidden shadow-2xl flex flex-col transform md:-rotate-2 hover:rotate-0 transition-transform duration-500">
<div className="flex items-center gap-2 mb-6">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
<span className="text-xs font-mono text-slate-500 ml-2">api/v2/transactions</span>
</div>
<div className="flex-1 font-mono text-xs md:text-sm text-blue-300 leading-loose overflow-hidden">
<span className="text-purple-400">const</span> response = <span className="text-purple-400">await</span> remitAPI.transfer({<br/>
                      amount: <span className="text-orange-300">1450.00</span>,<br/>
                      currency: <span className="text-green-300">'USD'</span>,<br/>
                      destination: <span className="text-green-300">'UK_NODE_A'</span>,<br/>
                      secureRoute: <span className="text-orange-300">true</span>,<br/>
                      timestamp: Date.<span className="text-blue-200">now</span>()<br/>
                    });<br/><br/>
<span className="text-slate-500">// Processing in &lt;10ms...</span><br/>
<span className="text-emerald-400">console</span>.<span className="text-blue-200">log</span>(response.status); <span className="text-slate-500">-&gt; 200 OK</span>
</div>

<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
</div>
</div>
</section>

<section className="py-20 bg-[#F8FAFC] border-t border-slate-200/60" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col justify-center items-center text-center bento-card-3d">
<span className="text-4xl font-semibold tracking-tight text-blue-600 mb-2">10+</span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest">Years Active</span>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col justify-center items-center text-center bento-card-3d">
<span className="text-4xl font-semibold tracking-tight text-blue-600 mb-2">500+</span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest">Enterprise Orgs</span>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col justify-center items-center text-center bento-card-3d">
<span className="text-4xl font-semibold tracking-tight text-blue-600 mb-2">50M+</span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest">Txns Processed</span>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col justify-center items-center text-center bento-card-3d">
<span className="text-4xl font-semibold tracking-tight text-blue-600 mb-2">99.9%</span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest">Uptime SLA</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
                    Ready to scale your infrastructure?
                </h2>
<p className="text-base text-slate-500">
                    Connect with our engineering team for a technical overview and customized demo.
                </p>
</div>
<div className="bg-[#F8FAFC] p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -z-0"></div>
<form className="space-y-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-900 uppercase tracking-widest">First Name</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-sm text-slate-900" placeholder="Jane" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-900 uppercase tracking-widest">Last Name</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-sm text-slate-900" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-900 uppercase tracking-widest">Work Email</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-sm text-slate-900" placeholder="jane@company.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-900 uppercase tracking-widest">Primary Interest</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-sm text-slate-900 appearance-none">
<option>Money Transfer Protocol</option>
<option>Travel Booking Engine</option>
<option>Inventory Logistics</option>
<option>Auto Service POS</option>
<option>Custom Enterprise Development</option>
</select>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
<button className="w-full bg-slate-900 text-white px-6 py-4 rounded-xl text-sm font-medium hover:bg-blue-600 transition-colors shadow-lg flex justify-center items-center gap-2" type="button">
                        Initialize Contact <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="text-xl font-semibold tracking-tighter text-blue-600 mb-4 inline-block" href="#home">
                        REMITPRO
                    </a>
<p className="text-sm text-slate-500 mb-6 max-w-xs leading-relaxed">
                        Enterprise software solutions architected for high-performance networks, complex logistics, and global scale.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors" href="#">
<iconify-icon icon="solar:map-arrow-square-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors" href="#">
<iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4 tracking-tight">Products</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#services">Remittance API</a></li>
<li><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#services">Travel Engine</a></li>
<li><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#services">Logistics Core</a></li>
<li><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#services">Auto POS v2</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4 tracking-tight">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#about">About Us</a></li>
<li><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#">Customers</a></li>
<li><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#contact">Contact Sales</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4 tracking-tight">Developers</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#">Documentation</a></li>
<li><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#">API Reference</a></li>
<li><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#">System Status</a></li>
<li><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#">GitHub</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-400">
                    © 2024 RemitPro Systems. All rights reserved.
                </p>
<div className="flex gap-6">
<a className="text-xs text-slate-400 hover:text-blue-600 transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-slate-400 hover:text-blue-600 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
