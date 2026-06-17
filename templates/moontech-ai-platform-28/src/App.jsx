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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex justify-center items-center">
<div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-500/10 blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-500/10 blur-[150px]"></div>
<div className="absolute top-[20%] left-[40%] w-[30vw] h-[30vw] rounded-full bg-indigo-400/10 blur-[100px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-zinc-200">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer group">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-[1px]">
<div className="w-full h-full bg-white rounded-[7px] flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
<iconify-icon className="text-base text-zinc-900 group-hover:text-white transition-colors" icon="solar:moon-sleep-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<span className="text-lg font-medium tracking-tight text-zinc-900">Moontech</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">Products</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Solutions</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Developers</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Log in</a>
<a className="bg-zinc-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors flex items-center gap-2 shadow-[0_4px_14px_0_rgba(24,24,27,0.2)]" href="#">
                    Book a Demo <iconify-icon className="text-base" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-32 px-6">
<div className="max-w-7xl mx-auto text-center flex flex-col items-center">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Powering thousands of experiences worldwide
            </div>

<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-zinc-900 max-w-4xl mx-auto leading-[1.1] mb-6">
                Where Experiences Become <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">Intelligent Platforms</span>
</h1>
<p className="text-lg text-zinc-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                Manage bookings, events, and services through one AI-powered ecosystem designed for scalability and performance.
            </p>

<div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
<a className="w-full sm:w-auto bg-zinc-900 text-white px-6 py-3 rounded-full text-base font-medium hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(24,24,27,0.15)]" href="#">
                    Book a Demo <iconify-icon className="text-base" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-white border border-zinc-200 text-zinc-900 px-6 py-3 rounded-full text-base font-medium hover:bg-zinc-50 transition-colors flex items-center justify-center gap-2 shadow-sm" href="#">
                    Explore Platforms
                </a>
</div>

<div className="w-full max-w-6xl mx-auto perspective-[2000px] relative mt-10">

<div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-[-1] top-[-50px]"></div>
<div className="relative w-full aspect-[16/10] md:aspect-[21/9] rounded-2xl md:rounded-[2rem] border border-zinc-200 bg-white/80 backdrop-blur-2xl rotate-x-[12deg] shadow-2xl shadow-indigo-500/10 overflow-hidden flex transform-gpu transition-transform duration-700 hover:rotate-x-[10deg]">

<div className="w-64 border-r border-zinc-200 bg-zinc-50/50 hidden lg:flex flex-col p-4 gap-6">
<div className="flex items-center gap-2 px-2 text-zinc-400 mb-4">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="flex flex-col gap-2">
<div className="h-8 rounded-md bg-zinc-100 border border-zinc-200 flex items-center px-3 gap-3 text-indigo-600 shadow-sm">
<iconify-icon className="text-base" icon="solar:widget-linear" strokeWidth="1.5"></iconify-icon> <div className="h-2 w-16 bg-indigo-600/50 rounded"></div>
</div>
<div className="h-8 rounded-md hover:bg-zinc-100 flex items-center px-3 gap-3 text-zinc-500">
<iconify-icon className="text-base" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon> <div className="h-2 w-20 bg-zinc-300 rounded"></div>
</div>
<div className="h-8 rounded-md hover:bg-zinc-100 flex items-center px-3 gap-3 text-zinc-500">
<iconify-icon className="text-base" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon> <div className="h-2 w-12 bg-zinc-300 rounded"></div>
</div>
<div className="h-8 rounded-md hover:bg-zinc-100 flex items-center px-3 gap-3 text-zinc-500">
<iconify-icon className="text-base" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon> <div className="h-2 w-24 bg-zinc-300 rounded"></div>
</div>
</div>
<div className="mt-auto p-4 rounded-xl bg-indigo-50 border border-indigo-100 text-center">
<iconify-icon className="text-xl text-indigo-500 mx-auto mb-2 block" icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
<div className="h-2 w-full bg-indigo-300 rounded mb-2"></div>
<div className="h-2 w-2/3 bg-indigo-300 rounded mx-auto"></div>
</div>
</div>

<div className="flex-1 flex flex-col p-4 md:p-6 gap-6 overflow-hidden">

<div className="h-10 flex items-center justify-between border-b border-zinc-200 pb-4">
<div className="flex flex-col gap-1.5">
<div className="h-3 w-32 bg-zinc-300 rounded"></div>
<div className="h-2 w-48 bg-zinc-200 rounded"></div>
</div>
<div className="flex gap-2">
<div className="w-8 h-8 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center"><iconify-icon className="text-sm text-zinc-500" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon></div>
<div className="w-8 h-8 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center"><iconify-icon className="text-sm text-zinc-500" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon></div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-white border border-zinc-200 rounded-xl p-4 flex flex-col gap-2 shadow-sm">
<div className="h-2 w-16 bg-zinc-300 rounded"></div>
<div className="text-2xl font-medium text-zinc-900 tracking-tight">124.5k</div>
<div className="flex items-center gap-1 text-emerald-600 text-xs"><iconify-icon className="text-xs" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon> +12.5%</div>
</div>
<div className="bg-white border border-zinc-200 rounded-xl p-4 flex flex-col gap-2 shadow-sm">
<div className="h-2 w-20 bg-zinc-300 rounded"></div>
<div className="text-2xl font-medium text-zinc-900 tracking-tight">$842k</div>
<div className="flex items-center gap-1 text-emerald-600 text-xs"><iconify-icon className="text-xs" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon> +8.2%</div>
</div>
<div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 flex flex-col gap-2 relative overflow-hidden hidden md:flex">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent"></div>
<div className="relative z-10 flex items-center gap-2 mb-1">
<iconify-icon className="text-xs text-indigo-500" icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
<div className="h-2 w-16 bg-indigo-300 rounded"></div>
</div>
<div className="relative z-10 text-xl font-medium text-indigo-900 tracking-tight">Demand Spike</div>
<div className="relative z-10 h-1.5 w-full bg-indigo-200 rounded-full mt-1 overflow-hidden">
<div className="h-full w-3/4 bg-indigo-500 rounded-full"></div>
</div>
</div>
<div className="bg-white border border-zinc-200 rounded-xl p-4 flex flex-col gap-2 hidden md:flex shadow-sm">
<div className="h-2 w-16 bg-zinc-300 rounded"></div>
<div className="flex items-end gap-1 h-8 mt-2">
<div className="w-full bg-zinc-200 rounded-sm h-[40%]"></div>
<div className="w-full bg-zinc-200 rounded-sm h-[60%]"></div>
<div className="w-full bg-indigo-500/50 rounded-sm h-[90%]"></div>
<div className="w-full bg-zinc-200 rounded-sm h-[50%]"></div>
<div className="w-full bg-zinc-200 rounded-sm h-[70%]"></div>
</div>
</div>
</div>

<div className="flex-1 bg-white border border-zinc-200 rounded-xl p-4 flex flex-col shadow-sm">
<div className="flex items-center justify-between mb-6">
<div className="h-3 w-32 bg-zinc-300 rounded"></div>
<div className="flex gap-2">
<div className="px-2 py-1 rounded bg-zinc-100 text-xs text-zinc-900 font-medium">7D</div>
<div className="px-2 py-1 rounded text-xs text-zinc-500">30D</div>
</div>
</div>
<div className="flex-1 relative w-full border-b border-l border-zinc-200 flex items-end px-2 pb-0 pt-4 gap-2 md:gap-4">

<div className="w-full bg-gradient-to-t from-indigo-500/10 to-transparent rounded-t-sm h-[30%] border-t border-indigo-400/30 relative"><div className="absolute -top-1.5 left-1/2 w-1 h-1 bg-indigo-500 rounded-full"></div></div>
<div className="w-full bg-gradient-to-t from-indigo-500/10 to-transparent rounded-t-sm h-[50%] border-t border-indigo-400/30 relative"><div className="absolute -top-1.5 left-1/2 w-1 h-1 bg-indigo-500 rounded-full"></div></div>
<div className="w-full bg-gradient-to-t from-purple-500/20 to-transparent rounded-t-sm h-[80%] border-t border-purple-400 relative shadow-[0_0_15px_rgba(168,85,247,0.2)]"><div className="absolute -top-1.5 left-1/2 w-1 h-1 bg-purple-500 rounded-full"></div></div>
<div className="w-full bg-gradient-to-t from-indigo-500/10 to-transparent rounded-t-sm h-[60%] border-t border-indigo-400/30 relative"><div className="absolute -top-1.5 left-1/2 w-1 h-1 bg-indigo-500 rounded-full"></div></div>
<div className="w-full bg-gradient-to-t from-indigo-500/10 to-transparent rounded-t-sm h-[40%] border-t border-indigo-400/30 relative"><div className="absolute -top-1.5 left-1/2 w-1 h-1 bg-indigo-500 rounded-full"></div></div>
<div className="w-full bg-gradient-to-t from-indigo-500/10 to-transparent rounded-t-sm h-[70%] border-t border-indigo-400/30 relative hidden sm:block"><div className="absolute -top-1.5 left-1/2 w-1 h-1 bg-indigo-500 rounded-full"></div></div>
<div className="w-full bg-gradient-to-t from-indigo-500/10 to-transparent rounded-t-sm h-[90%] border-t border-indigo-400/30 relative hidden sm:block"><div className="absolute -top-1.5 left-1/2 w-1 h-1 bg-indigo-500 rounded-full"></div></div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-12 border-y border-zinc-200 bg-white/50 backdrop-blur-sm relative z-10">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 text-center">
<div>
<div className="text-3xl font-semibold tracking-tight text-zinc-900 mb-1">20,000+</div>
<div className="text-sm font-medium text-zinc-500">Active Platforms</div>
</div>
<div className="hidden md:block w-px h-12 bg-zinc-200"></div>
<div>
<div className="text-3xl font-semibold tracking-tight text-zinc-900 mb-1">50M+</div>
<div className="text-sm font-medium text-zinc-500">Bookings Managed</div>
</div>
<div className="hidden md:block w-px h-12 bg-zinc-200"></div>
<div>
<div className="text-3xl font-semibold tracking-tight text-zinc-900 mb-1">99.99%</div>
<div className="text-sm font-medium text-zinc-500">Uptime Reliability</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 px-6 bg-zinc-50/50">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Built for the Experience Economy</h2>
<p className="text-base text-zinc-600 max-w-2xl mx-auto">Simplify complex operations with our suite of intelligent tools designed specifically for service and event businesses.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white border border-zinc-200 rounded-2xl p-8 hover:shadow-md transition-shadow group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-6 text-indigo-600 group-hover:scale-110 transition-transform duration-300 relative z-10">
<iconify-icon className="text-2xl" icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-zinc-900 tracking-tight mb-3 relative z-10">AI-Powered Platforms</h3>
<p className="text-base text-zinc-600 leading-relaxed relative z-10">Automate scheduling, predict demand, and optimize pricing dynamically using our advanced machine learning models.</p>
</div>

<div className="bg-white border border-zinc-200 rounded-2xl p-8 hover:shadow-md transition-shadow group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform duration-300 relative z-10">
<iconify-icon className="text-2xl" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-zinc-900 tracking-tight mb-3 relative z-10">Experience Ecosystem</h3>
<p className="text-base text-zinc-600 leading-relaxed relative z-10">Connect every touchpoint of your customer journey from initial discovery to post-event engagement in one unified space.</p>
</div>

<div className="bg-white border border-zinc-200 rounded-2xl p-8 hover:shadow-md transition-shadow group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300 relative z-10">
<iconify-icon className="text-2xl" icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-zinc-900 tracking-tight mb-3 relative z-10">Built for Scale</h3>
<p className="text-base text-zinc-600 leading-relaxed relative z-10">Enterprise-grade infrastructure ensures your platform performs flawlessly, whether handling ten bookings or ten thousand.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 relative z-10 px-6 border-y border-zinc-200">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">A Suite of specialized tools</h2>
<p className="text-base text-zinc-600">Everything you need to run your experience-based business.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="flex flex-col rounded-3xl bg-white border border-zinc-200 overflow-hidden group shadow-sm">
<div className="p-8 pb-0">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600"><iconify-icon className="text-base" icon="solar:calendar-date-linear" strokeWidth="1.5"></iconify-icon></div>
<h3 className="text-xl font-medium text-zinc-900 tracking-tight">Evengo</h3>
</div>
<p className="text-base text-zinc-600 mb-6">Complete event lifecycle management, from ticketing to onsite check-in.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-indigo-600 transition-colors mb-8" href="#">
                            Explore Evengo <iconify-icon className="text-base" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="mt-auto px-8 pb-0 pt-4 bg-gradient-to-t from-indigo-50/50 to-transparent">
<div className="w-full aspect-[4/3] rounded-t-xl bg-zinc-50 border-t border-x border-zinc-200 shadow-xl shadow-zinc-200/50 relative overflow-hidden">

<div className="absolute top-0 w-full h-8 border-b border-zinc-200 flex items-center px-3 gap-2">
<div className="w-2 h-2 rounded-full bg-zinc-300"></div><div className="w-2 h-2 rounded-full bg-zinc-300"></div><div className="w-2 h-2 rounded-full bg-zinc-300"></div>
</div>
<div className="p-4 pt-12 flex flex-col gap-3">
<div className="h-4 w-32 bg-zinc-200 rounded"></div>
<div className="h-24 w-full bg-indigo-50 rounded-lg border border-indigo-100"></div>
<div className="h-16 w-full bg-white rounded-lg border border-zinc-200 shadow-sm"></div>
</div>
</div>
</div>
</div>

<div className="flex flex-col rounded-3xl bg-white border border-zinc-200 overflow-hidden group shadow-sm">
<div className="p-8 pb-0">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600"><iconify-icon className="text-base" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon></div>
<h3 className="text-xl font-medium text-zinc-900 tracking-tight">Kiwi</h3>
</div>
<p className="text-base text-zinc-600 mb-6">Smart scheduling and service booking engine with dynamic availability.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-purple-600 transition-colors mb-8" href="#">
                            Explore Kiwi <iconify-icon className="text-base" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="mt-auto px-8 pb-0 pt-4 bg-gradient-to-t from-purple-50/50 to-transparent">
<div className="w-full aspect-[4/3] rounded-t-xl bg-zinc-50 border-t border-x border-zinc-200 shadow-xl shadow-zinc-200/50 relative overflow-hidden">

<div className="absolute top-0 w-full h-8 border-b border-zinc-200 flex items-center px-3 gap-2">
<div className="w-2 h-2 rounded-full bg-zinc-300"></div><div className="w-2 h-2 rounded-full bg-zinc-300"></div><div className="w-2 h-2 rounded-full bg-zinc-300"></div>
</div>
<div className="p-4 pt-12 grid grid-cols-7 gap-1">

<div className="aspect-square bg-white border border-zinc-200 rounded-sm"></div><div className="aspect-square bg-white border border-zinc-200 rounded-sm"></div><div className="aspect-square bg-white border border-zinc-200 rounded-sm"></div><div className="aspect-square bg-purple-100 border border-purple-200 rounded-sm shadow-[0_0_10px_rgba(168,85,247,0.2)]"></div><div className="aspect-square bg-white border border-zinc-200 rounded-sm"></div><div className="aspect-square bg-white border border-zinc-200 rounded-sm"></div><div className="aspect-square bg-white border border-zinc-200 rounded-sm"></div>
<div className="aspect-square bg-white border border-zinc-200 rounded-sm"></div><div className="aspect-square bg-white border border-zinc-200 rounded-sm"></div><div className="aspect-square bg-white border border-zinc-200 rounded-sm"></div><div className="aspect-square bg-white border border-zinc-200 rounded-sm"></div><div className="aspect-square bg-purple-50 border border-purple-100 rounded-sm"></div><div className="aspect-square bg-white border border-zinc-200 rounded-sm"></div><div className="aspect-square bg-white border border-zinc-200 rounded-sm"></div>
<div className="aspect-square bg-white border border-zinc-200 rounded-sm"></div><div className="aspect-square bg-white border border-zinc-200 rounded-sm"></div><div className="aspect-square bg-white border border-zinc-200 rounded-sm"></div><div className="aspect-square bg-white border border-zinc-200 rounded-sm"></div><div className="aspect-square bg-white border border-zinc-200 rounded-sm"></div><div className="aspect-square bg-white border border-zinc-200 rounded-sm"></div><div className="aspect-square bg-white border border-zinc-200 rounded-sm"></div>
</div>
</div>
</div>
</div>

<div className="flex flex-col rounded-3xl bg-white border border-zinc-200 overflow-hidden group shadow-sm">
<div className="p-8 pb-0">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600"><iconify-icon className="text-base" icon="solar:map-linear" strokeWidth="1.5"></iconify-icon></div>
<h3 className="text-xl font-medium text-zinc-900 tracking-tight">Spaces</h3>
</div>
<p className="text-base text-zinc-600 mb-6">Interactive venue mapping and spatial inventory management.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-blue-600 transition-colors mb-8" href="#">
                            Explore Spaces <iconify-icon className="text-base" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="mt-auto px-8 pb-0 pt-4 bg-gradient-to-t from-blue-50/50 to-transparent">
<div className="w-full aspect-[4/3] rounded-t-xl bg-zinc-50 border-t border-x border-zinc-200 shadow-xl shadow-zinc-200/50 relative overflow-hidden flex items-center justify-center">

<div className="w-3/4 h-3/4 border border-zinc-200 rounded-lg relative overflow-hidden p-2 grid grid-cols-2 gap-2 bg-white">
<div className="bg-zinc-50 rounded border border-zinc-100"></div>
<div className="bg-blue-50 rounded border border-blue-100"></div>
<div className="bg-zinc-50 rounded border border-zinc-100 col-span-2"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 px-6 overflow-hidden bg-white">
<div className="absolute inset-0 bg-gradient-to-b from-white via-indigo-50/50 to-white z-[-1]"></div>
<div className="max-w-7xl mx-auto rounded-[2.5rem] bg-gradient-to-br from-indigo-50/80 to-purple-50/80 border border-indigo-100 p-8 md:p-16 flex flex-col lg:flex-row items-center gap-16 backdrop-blur-3xl relative overflow-hidden shadow-lg shadow-indigo-100/50">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/50 blur-[100px] rounded-full pointer-events-none"></div>
<div className="w-full lg:w-1/2 relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                    Intelligence built right into your dashboard
                </h2>
<p className="text-lg text-indigo-900/70 mb-8 leading-relaxed">
                    Moontech's dashboard gives you everything you need at a glance. Understand user behavior, track booking velocity, and let AI highlight anomalies before they become issues.
                </p>
<a className="inline-flex bg-zinc-900 text-white px-6 py-3 rounded-full text-base font-medium hover:bg-zinc-800 transition-colors items-center gap-2 shadow-[0_4px_14px_0_rgba(24,24,27,0.2)]" href="#">
                    View Platform Demo <iconify-icon className="text-base" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-indigo-200">
<div>
<div className="text-4xl font-semibold tracking-tight text-zinc-900 mb-2">4.9/5</div>
<div className="text-sm font-medium text-indigo-700/60">Average user rating</div>
</div>
<div>
<div className="text-4xl font-semibold tracking-tight text-zinc-900 mb-2">99%</div>
<div className="text-sm font-medium text-indigo-700/60">Task automation rate</div>
</div>
</div>
</div>
<div className="w-full lg:w-1/2 relative z-10">

<div className="relative w-full aspect-square md:aspect-[4/3] perspective-[1000px]">

<div className="absolute inset-0 bg-white/90 border border-zinc-200 rounded-2xl shadow-2xl shadow-zinc-200/60 backdrop-blur-xl transform-gpu rotate-y-[-10deg] rotate-x-[5deg] p-6 flex flex-col justify-between">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center border border-indigo-100">
<iconify-icon className="text-xl text-indigo-600" icon="solar:smart-speaker-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="h-3 w-24 bg-zinc-300 rounded mb-1.5"></div>
<div className="h-2 w-16 bg-zinc-200 rounded"></div>
</div>
</div>
<div className="px-3 py-1 bg-green-50 text-green-700 border border-green-200 rounded-full text-xs font-medium">Optimal</div>
</div>

<div className="h-1/2 w-full border-b border-l border-zinc-200 flex items-end justify-between px-2 pb-0 pt-4 gap-2">
<div className="w-full bg-zinc-100 border border-zinc-200 border-b-0 rounded-t-md h-[40%]"></div>
<div className="w-full bg-zinc-100 border border-zinc-200 border-b-0 rounded-t-md h-[55%]"></div>
<div className="w-full bg-indigo-100 border-x border-t-2 border-indigo-400 border-b-0 rounded-t-md h-[85%] relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-xs font-bold px-2 py-1 rounded shadow-lg shadow-zinc-200">Peak</div>
</div>
<div className="w-full bg-zinc-100 border border-zinc-200 border-b-0 rounded-t-md h-[60%]"></div>
<div className="w-full bg-zinc-100 border border-zinc-200 border-b-0 rounded-t-md h-[45%]"></div>
</div>
<div className="mt-6 p-4 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-between">
<div className="flex gap-4">
<div className="h-8 w-8 rounded bg-white border border-zinc-200"></div>
<div className="flex flex-col justify-center gap-1.5">
<div className="h-2 w-20 bg-zinc-300 rounded"></div>
<div className="h-2 w-12 bg-zinc-200 rounded"></div>
</div>
</div>
<div className="h-6 w-16 bg-indigo-100 rounded-full"></div>
</div>
</div>

<div className="absolute -right-8 -top-8 bg-white border border-zinc-200 rounded-xl p-4 shadow-xl shadow-zinc-200/50 transform-gpu translate-z-[50px] animate-pulse">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-base text-amber-500" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-zinc-900">Insight Generated</span>
</div>
<div className="h-2 w-32 bg-zinc-200 rounded mb-1"></div>
<div className="h-2 w-24 bg-zinc-200 rounded"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 px-6 bg-white">
<div className="max-w-7xl mx-auto flex flex-col gap-32">

<div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
<div className="w-full md:w-1/2">
<div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 text-blue-600">
<iconify-icon className="text-2xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Master booking management</h2>
<p className="text-base text-zinc-600 mb-8 leading-relaxed">
                        Say goodbye to scheduling conflicts and manual confirmations. Our intelligent booking engine handles complex logic, availability rules, and dynamic pricing with zero effort.
                    </p>
<ul className="flex flex-col gap-4 text-base text-zinc-600">
<li className="flex items-center gap-3"><iconify-icon className="text-xl text-indigo-600" icon="solar:check-square-linear" strokeWidth="1.5"></iconify-icon> Automated waitlists and capacity management</li>
<li className="flex items-center gap-3"><iconify-icon className="text-xl text-indigo-600" icon="solar:check-square-linear" strokeWidth="1.5"></iconify-icon> Multi-timezone support native out of the box</li>
<li className="flex items-center gap-3"><iconify-icon className="text-xl text-indigo-600" icon="solar:check-square-linear" strokeWidth="1.5"></iconify-icon> Frictionless checkout optimized for conversion</li>
</ul>
</div>
<div className="w-full md:w-1/2 relative">
<div className="absolute inset-0 bg-blue-100/50 blur-[80px] rounded-full"></div>
<div className="relative bg-white border border-zinc-200 rounded-2xl p-2 shadow-xl shadow-zinc-200">

<div className="bg-zinc-50 rounded-xl border border-zinc-200 p-4 flex flex-col gap-4">
<div className="flex justify-between items-center pb-2 border-b border-zinc-200">
<div className="h-4 w-24 bg-zinc-300 rounded"></div>
<div className="flex gap-1"><div className="w-6 h-6 rounded border border-zinc-200 bg-white"></div><div className="w-6 h-6 rounded border border-zinc-200 bg-white"></div></div>
</div>
<div className="grid grid-cols-7 gap-2">

<div className="h-3 w-full bg-zinc-200 rounded"></div><div className="h-3 w-full bg-zinc-200 rounded"></div><div className="h-3 w-full bg-zinc-200 rounded"></div><div className="h-3 w-full bg-zinc-200 rounded"></div><div className="h-3 w-full bg-zinc-200 rounded"></div><div className="h-3 w-full bg-zinc-200 rounded"></div><div className="h-3 w-full bg-zinc-200 rounded"></div>

<div className="aspect-square rounded border border-zinc-200 bg-white"></div><div className="aspect-square rounded border border-zinc-200 bg-white"></div><div className="aspect-square rounded border border-blue-200 bg-blue-50 flex items-center justify-center relative"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 absolute bottom-1"></div></div><div className="aspect-square rounded border border-zinc-200 bg-white"></div><div className="aspect-square rounded border border-zinc-200 bg-white"></div><div className="aspect-square rounded border border-zinc-200 bg-white"></div><div className="aspect-square rounded border border-zinc-200 bg-white"></div>
</div>

<div className="flex flex-col gap-2 mt-2">
<div className="h-10 w-full rounded-lg bg-white border border-zinc-200 flex items-center px-3 gap-3 shadow-sm">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div><div className="h-2 w-20 bg-zinc-300 rounded"></div>
</div>
<div className="h-10 w-full rounded-lg bg-white border border-zinc-200 flex items-center px-3 gap-3 shadow-sm">
<div className="w-2 h-2 rounded-full bg-amber-500"></div><div className="h-2 w-24 bg-zinc-300 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
<div className="w-full md:w-1/2">
<div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center mb-6 text-purple-600">
<iconify-icon className="text-2xl" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Streamline event operations</h2>
<p className="text-base text-zinc-600 mb-8 leading-relaxed">
                        Unify your entire team in one workspace. Assign tasks, track progress in real-time, and automate routine communications to ensure flawless execution.
                    </p>
<div className="flex items-center gap-8 mb-6">
<div>
<div className="text-2xl font-semibold tracking-tight text-zinc-900 mb-1">40%</div>
<div className="text-sm text-zinc-500">Reduction in admin time</div>
</div>
<div className="w-px h-8 bg-zinc-200"></div>
<div>
<div className="text-2xl font-semibold tracking-tight text-zinc-900 mb-1">3x</div>
<div className="text-sm text-zinc-500">Faster event deployment</div>
</div>
</div>
<a className="inline-flex items-center bg-white border border-zinc-200 px-4 py-2 rounded-full text-sm font-medium text-zinc-900 hover:bg-zinc-50 transition-colors gap-2 shadow-sm" href="#">
                        See Event Tools <iconify-icon className="text-base" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="w-full md:w-1/2 relative">
<div className="absolute inset-0 bg-purple-100/50 blur-[80px] rounded-full"></div>
<div className="relative bg-white border border-zinc-200 rounded-2xl p-2 shadow-xl shadow-zinc-200">

<div className="bg-zinc-50 rounded-xl border border-zinc-200 p-4 flex flex-col gap-3">
<div className="h-8 w-full rounded bg-white border border-zinc-200 mb-2 flex items-center px-3"><div className="h-3 w-1/3 bg-zinc-300 rounded"></div></div>

<div className="bg-white border border-zinc-200 shadow-sm rounded-lg p-3 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full border border-purple-300 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-purple-500"></div></div>
<div className="h-2 w-32 bg-zinc-400 rounded"></div>
</div>
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border border-white bg-zinc-300"></div><div className="w-6 h-6 rounded-full border border-white bg-zinc-400"></div>
</div>
</div>
<div className="bg-white border border-zinc-200 shadow-sm rounded-lg p-3 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full border border-zinc-300"></div>
<div className="h-2 w-40 bg-zinc-300 rounded"></div>
</div>
<div className="w-6 h-6 rounded-full border border-white bg-zinc-200"></div>
</div>
<div className="bg-white border border-zinc-200 shadow-sm rounded-lg p-3 flex justify-between items-center opacity-50">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full border border-zinc-300"></div>
<div className="h-2 w-24 bg-zinc-200 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-zinc-200 bg-zinc-50/50 relative z-10">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-zinc-500 mb-10">Connects seamlessly with your favorite tools</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 text-zinc-900">

<div className="flex items-center gap-2 text-xl font-semibold tracking-tight"><iconify-icon className="text-2xl" icon="solar:cloud-linear" strokeWidth="1.5"></iconify-icon> CloudSync</div>
<div className="flex items-center gap-2 text-xl font-semibold tracking-tight"><iconify-icon className="text-2xl" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon> DataVault</div>
<div className="flex items-center gap-2 text-xl font-semibold tracking-tight"><iconify-icon className="text-2xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon> SendFlow</div>
<div className="flex items-center gap-2 text-xl font-semibold tracking-tight"><iconify-icon className="text-2xl" icon="solar:card-linear" strokeWidth="1.5"></iconify-icon> PayStack</div>
<div className="flex items-center gap-2 text-xl font-semibold tracking-tight hidden md:flex"><iconify-icon className="text-2xl" icon="solar:hashtag-linear" strokeWidth="1.5"></iconify-icon> TeamChat</div>
<div className="flex items-center gap-2 text-xl font-semibold tracking-tight hidden lg:flex"><iconify-icon className="text-2xl" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon> CalApp</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 px-6 bg-white">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Find the perfect plan</h2>
<p className="text-base text-zinc-600 mb-8">Transparent pricing for platforms of all sizes.</p>

<div className="inline-flex items-center p-1 bg-zinc-100 border border-zinc-200 rounded-full">
<button className="px-6 py-2 rounded-full text-sm font-medium bg-white text-zinc-900 shadow-sm">Monthly</button>
<button className="px-6 py-2 rounded-full text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Annually</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-center">

<div className="bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col h-full shadow-sm">
<div className="mb-8">
<h3 className="text-lg font-medium text-zinc-900 mb-2">Starter</h3>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-4xl font-semibold tracking-tight text-zinc-900">$49</span>
<span className="text-sm text-zinc-500">/mo</span>
</div>
<p className="text-sm text-zinc-600">Essential tools to launch your booking platform.</p>
</div>
<ul className="flex flex-col gap-4 text-sm text-zinc-600 mb-8 flex-1">
<li className="flex items-start gap-3"><iconify-icon className="text-base text-indigo-600 shrink-0 mt-0.5" icon="solar:check-square-linear" strokeWidth="1.5"></iconify-icon> Up to 1,000 bookings</li>
<li className="flex items-start gap-3"><iconify-icon className="text-base text-indigo-600 shrink-0 mt-0.5" icon="solar:check-square-linear" strokeWidth="1.5"></iconify-icon> Basic calendar integration</li>
<li className="flex items-start gap-3"><iconify-icon className="text-base text-indigo-600 shrink-0 mt-0.5" icon="solar:check-square-linear" strokeWidth="1.5"></iconify-icon> Standard analytics</li>
</ul>
<a className="w-full py-3 rounded-full border border-zinc-200 text-zinc-900 text-sm font-medium hover:bg-zinc-50 transition-colors text-center mt-auto" href="#">Get Started</a>
</div>

<div className="bg-gradient-to-b from-indigo-50/80 to-white border border-indigo-200 rounded-3xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-xl shadow-indigo-100 h-auto md:h-[105%]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">Popular</div>
<div className="mb-8 mt-2">
<h3 className="text-lg font-medium text-zinc-900 mb-2">Growth</h3>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-4xl font-semibold tracking-tight text-zinc-900">$149</span>
<span className="text-sm text-zinc-500">/mo</span>
</div>
<p className="text-sm text-zinc-600">Advanced features for growing ecosystems.</p>
</div>
<ul className="flex flex-col gap-4 text-sm text-zinc-600 mb-8 flex-1">
<li className="flex items-start gap-3"><iconify-icon className="text-base text-indigo-600 shrink-0 mt-0.5" icon="solar:check-square-linear" strokeWidth="1.5"></iconify-icon> Up to 10,000 bookings</li>
<li className="flex items-start gap-3"><iconify-icon className="text-base text-indigo-600 shrink-0 mt-0.5" icon="solar:check-square-linear" strokeWidth="1.5"></iconify-icon> AI-powered scheduling</li>
<li className="flex items-start gap-3"><iconify-icon className="text-base text-indigo-600 shrink-0 mt-0.5" icon="solar:check-square-linear" strokeWidth="1.5"></iconify-icon> Custom domains &amp; branding</li>
<li className="flex items-start gap-3"><iconify-icon className="text-base text-indigo-600 shrink-0 mt-0.5" icon="solar:check-square-linear" strokeWidth="1.5"></iconify-icon> Priority support</li>
</ul>
<a className="w-full py-3 rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-colors text-center mt-auto shadow-md shadow-zinc-900/10" href="#">Start Free Trial</a>
</div>

<div className="bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col h-full shadow-sm">
<div className="mb-8">
<h3 className="text-lg font-medium text-zinc-900 mb-2">Scale</h3>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-4xl font-semibold tracking-tight text-zinc-900">$499</span>
<span className="text-sm text-zinc-500">/mo</span>
</div>
<p className="text-sm text-zinc-600">Unlimited power for large scale operations.</p>
</div>
<ul className="flex flex-col gap-4 text-sm text-zinc-600 mb-8 flex-1">
<li className="flex items-start gap-3"><iconify-icon className="text-base text-indigo-600 shrink-0 mt-0.5" icon="solar:check-square-linear" strokeWidth="1.5"></iconify-icon> Unlimited bookings</li>
<li className="flex items-start gap-3"><iconify-icon className="text-base text-indigo-600 shrink-0 mt-0.5" icon="solar:check-square-linear" strokeWidth="1.5"></iconify-icon> Dedicated account manager</li>
<li className="flex items-start gap-3"><iconify-icon className="text-base text-indigo-600 shrink-0 mt-0.5" icon="solar:check-square-linear" strokeWidth="1.5"></iconify-icon> Custom API limits</li>
<li className="flex items-start gap-3"><iconify-icon className="text-base text-indigo-600 shrink-0 mt-0.5" icon="solar:check-square-linear" strokeWidth="1.5"></iconify-icon> SLA guarantee</li>
</ul>
<a className="w-full py-3 rounded-full border border-zinc-200 text-zinc-900 text-sm font-medium hover:bg-zinc-50 transition-colors text-center mt-auto" href="#">Contact Sales</a>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 px-6 border-t border-zinc-200 bg-zinc-50/50">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">Loved by operators</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white border border-zinc-200 rounded-2xl p-6 flex flex-col gap-6 shadow-sm">
<div className="flex items-center gap-1 text-indigo-500">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon><iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon><iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon><iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon><iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-zinc-600 flex-1">"Moontech transformed how we handle our 50+ weekly events. The AI scheduling saved us at least 20 hours a week in manual admin work."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-xs text-zinc-700 font-medium">SO</div>
<div>
<div className="text-sm font-medium text-zinc-900">Sarah O'Connor</div>
<div className="text-xs text-zinc-500">Operations Director, VenueX</div>
</div>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-2xl p-6 flex flex-col gap-6 shadow-sm">
<div className="flex items-center gap-1 text-indigo-500">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon><iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon><iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon><iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon><iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-zinc-600 flex-1">"The analytics dashboard is a game changer. We can predict demand spikes before they happen and adjust our pricing dynamically."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-xs text-zinc-700 font-medium">JD</div>
<div>
<div className="text-sm font-medium text-zinc-900">James Dolan</div>
<div className="text-xs text-zinc-500">Founder, ActiveSpace</div>
</div>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-2xl p-6 flex flex-col gap-6 shadow-sm hidden lg:flex">
<div className="flex items-center gap-1 text-indigo-500">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon><iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon><iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon><iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon><iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-zinc-600 flex-1">"Scaling our platform was our biggest worry until we found Moontech. It handles our massive booking volume without breaking a sweat."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-xs text-zinc-700 font-medium">MK</div>
<div>
<div className="text-sm font-medium text-zinc-900">Maria Kova</div>
<div className="text-xs text-zinc-500">CTO, ExperienceHub</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 px-6 max-w-3xl mx-auto bg-white">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 text-center mb-12">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white border border-zinc-200 rounded-xl shadow-sm [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-zinc-900">
<span>What makes Moontech different?</span>
<span className="transition duration-300 group-open:-rotate-180">
<iconify-icon className="text-xl text-zinc-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-600 text-base leading-relaxed">
                    Unlike traditional booking software, Moontech is built as an intelligent ecosystem. It uses AI to automate complex routing, dynamic pricing, and resource allocation, rather than just providing a static calendar.
                </div>
</details>
<details className="group bg-white border border-zinc-200 rounded-xl shadow-sm [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-zinc-900">
<span>Can I integrate with my existing tools?</span>
<span className="transition duration-300 group-open:-rotate-180">
<iconify-icon className="text-xl text-zinc-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-600 text-base leading-relaxed">
                    Yes. Moontech offers an extensive REST API and native integrations with popular CRMs, payment gateways like Stripe, and marketing platforms to fit perfectly into your current workflow.
                </div>
</details>
<details className="group bg-white border border-zinc-200 rounded-xl shadow-sm [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-zinc-900">
<span>How does the AI pricing feature work?</span>
<span className="transition duration-300 group-open:-rotate-180">
<iconify-icon className="text-xl text-zinc-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-600 text-base leading-relaxed">
                    Our dynamic pricing engine analyzes historical data, current booking velocity, and external factors (like season or local events) to suggest optimal price points automatically, maximizing your revenue.
                </div>
</details>
</div>
</section>

<section className="py-24 relative z-10 px-6 border-t border-zinc-200 bg-zinc-50">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-2">Latest Insights</h2>
<p className="text-base text-zinc-600">Resources to grow your platform.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-indigo-600 transition-colors" href="#">
                    View all posts <iconify-icon className="text-base" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<a className="group block" href="#">
<div className="w-full aspect-video rounded-2xl bg-zinc-200/50 border border-zinc-200 mb-4 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent mix-blend-overlay group-hover:scale-105 transition-transform duration-500"></div>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-500 mb-2">
<span>Platform Strategy</span> • <span>Apr 12, 2024</span>
</div>
<h3 className="text-lg font-medium text-zinc-900 group-hover:text-indigo-600 transition-colors mb-2">How to transition from a marketplace to a managed platform</h3>
<p className="text-sm text-zinc-600 line-clamp-2">Learn the structural changes needed when moving from simply connecting buyers and sellers to managing the entire experience end-to-end.</p>
</a>

<a className="group block" href="#">
<div className="w-full aspect-video rounded-2xl bg-zinc-200/50 border border-zinc-200 mb-4 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent mix-blend-overlay group-hover:scale-105 transition-transform duration-500"></div>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-500 mb-2">
<span>Product Updates</span> • <span>Mar 28, 2024</span>
</div>
<h3 className="text-lg font-medium text-zinc-900 group-hover:text-purple-600 transition-colors mb-2">Introducing Dynamic Capacity Management for Spaces</h3>
<p className="text-sm text-zinc-600 line-clamp-2">Our latest update allows physical venues to automatically adjust layout configurations based on real-time ticketing data.</p>
</a>

<a className="group block" href="#">
<div className="w-full aspect-video rounded-2xl bg-zinc-200/50 border border-zinc-200 mb-4 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent mix-blend-overlay group-hover:scale-105 transition-transform duration-500"></div>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-500 mb-2">
<span>Engineering</span> • <span>Mar 15, 2024</span>
</div>
<h3 className="text-lg font-medium text-zinc-900 group-hover:text-blue-600 transition-colors mb-2">Building for zero downtime during flash sales</h3>
<p className="text-sm text-zinc-600 line-clamp-2">A technical deep dive into how Moontech's infrastructure handles sudden massive spikes in booking requests.</p>
</a>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative z-10 px-6 overflow-hidden bg-white">
<div className="max-w-5xl mx-auto relative">

<div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-[3rem] blur-2xl"></div>
<div className="relative bg-white/80 backdrop-blur-2xl border border-zinc-200 rounded-[2rem] p-10 md:p-20 text-center overflow-hidden shadow-xl shadow-indigo-500/5">

<div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] z-0"></div>
<div className="relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-6">Ready to Build Your Platform?</h2>
<p className="text-lg text-zinc-600 max-w-2xl mx-auto mb-10">
                        Start managing your events, bookings, and experiences with Moontech today. Join the next generation of intelligent software.
                    </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<a className="w-full sm:w-auto bg-zinc-900 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-900/10" href="#">
                            Book a Demo
                        </a>
<a className="w-full sm:w-auto bg-white border border-zinc-200 text-zinc-900 px-8 py-4 rounded-full text-base font-medium hover:bg-zinc-50 transition-colors shadow-sm" href="#">
                            Contact Sales
                        </a>
</div>
</div>

<div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-64 h-32 bg-indigo-500/10 blur-[50px] rounded-full z-0 pointer-events-none"></div>
</div>
</div>
</section>

<footer className="border-t border-zinc-200 bg-white relative z-10 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-[1px]">
<div className="w-full h-full bg-white rounded-[3px] flex items-center justify-center"><iconify-icon className="text-xs text-zinc-900" icon="solar:moon-sleep-linear" strokeWidth="1.5"></iconify-icon></div>
</div>
<span className="text-base font-medium tracking-tight text-zinc-900">Moontech</span>
</div>
<p className="text-sm text-zinc-500 max-w-xs mb-6">The intelligent platform ecosystem for managing complex bookings and physical experiences.</p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:chat-round-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:code-circle-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:briefcase-linear" strokeWidth="1.5"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 mb-4">Products</h4>
<ul className="flex flex-col gap-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Evengo Events</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Kiwi Scheduling</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Spaces Mapping</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 mb-4">Resources</h4>
<ul className="flex flex-col gap-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Community</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 mb-4">Company</h4>
<ul className="flex flex-col gap-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">About</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Legal</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-zinc-500">© 2024 Moontech Inc. All rights reserved.</p>
<div className="flex gap-4 text-sm text-zinc-500">
<a className="hover:text-zinc-900" href="#">Privacy Policy</a>
<a className="hover:text-zinc-900" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
