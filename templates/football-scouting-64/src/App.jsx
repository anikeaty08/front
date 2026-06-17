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



        // Simple dark mode toggle script
        const themeToggleBtn = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement;

        // Check system preference on load if no class is set (default to light in this design unless system says dark, but we force toggleability)
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !htmlElement.classList.contains('light')) {
             htmlElement.classList.add('dark');
        }

        themeToggleBtn.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');
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
      

<nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-950/70 border-b border-slate-200/50 dark:border-slate-800/50">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer group">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white group-hover:shadow-lg group-hover:shadow-emerald-500/20 transition-all duration-300">
<iconify-icon className="" icon="solar:football-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<span className="dark:text-white text-xl font-medium text-slate-900 tracking-tighter">TALENT</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
<a className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" href="#features">Features</a>
<a className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" href="#prospects">Prospects</a>
<a className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<button className="p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors text-slate-500 dark:text-slate-400 flex items-center justify-center" id="theme-toggle">
<iconify-icon className="dark:hidden block text-lg" icon="solar:moon-linear"></iconify-icon>
<iconify-icon className="hidden dark:block text-lg" icon="solar:sun-linear"></iconify-icon>
</button>
<button className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90 transition-opacity">
                    Sign In
                </button>
</div>
</div>
</nav>
<main className="flex-grow">

<section className="relative pt-24 pb-32 overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-medium mb-6 border border-emerald-200 dark:border-emerald-500/20">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Live Global Database Updated
                    </div>
<h1 className="md:text-5xl lg:text-6xl leading-[1.1] dark:text-white text-4xl font-medium text-slate-900 tracking-tighter mb-6">
                        Discover the next generation of <br className="hidden lg:block"/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">football talent.</span>
</h1>
<p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-xl bg-emerald-500 text-white hover:bg-emerald-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
                            Start Scouting Free
                            <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-300">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
                            Watch Demo
                        </button>
</div>
</div>

<div className="relative w-full aspect-[4/3] max-w-lg mx-auto lg:max-w-none group perspective-1000">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform duration-700"></div>
<div className="relative w-full h-full bg-emerald-700 dark:bg-emerald-900 rounded-3xl overflow-hidden shadow-2xl border border-emerald-500/30 transform rotate-y-[-5deg] rotate-x-[5deg] group-hover:rotate-0 transition-transform duration-700 ease-out flex items-center justify-center">

<div className="absolute inset-4 border border-white/40 rounded-sm"></div>
<div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/40 -translate-x-1/2"></div>
<div className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full border border-white/40 -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute top-1/4 bottom-1/4 left-4 w-1/5 border border-white/40 border-l-0"></div>
<div className="absolute top-1/4 bottom-1/4 right-4 w-1/5 border border-white/40 border-r-0"></div>

<div className="absolute top-[30%] left-[25%] w-10 h-10 bg-white dark:bg-slate-800 rounded-full shadow-xl flex items-center justify-center border border-slate-200 dark:border-slate-700 animate-[bounce_4s_infinite]">
<iconify-icon className="text-emerald-600 dark:text-emerald-400" icon="solar:user-linear"></iconify-icon>
</div>
<div className="absolute bottom-[20%] right-[30%] w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-xl flex items-center justify-center border border-slate-200 dark:border-slate-700 animate-[bounce_5s_infinite_1s]">
<span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 tracking-tighter">92 PAC</span>
</div>
<div className="absolute top-[45%] right-[15%] w-8 h-8 bg-white dark:bg-slate-800 rounded-full shadow-xl flex items-center justify-center border border-slate-200 dark:border-slate-700 animate-[bounce_3s_infinite_0.5s]">
<iconify-icon className="text-amber-500" icon="solar:star-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white dark:bg-slate-900 border-y border-slate-200/50 dark:border-slate-800/50" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 dark:text-white mb-4">Advanced Analytics Ecosystem</h2>
<p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none hover:border-emerald-500/30 transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-xl text-emerald-600 dark:text-emerald-400" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-slate-900 dark:text-white">Predictive Modeling</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
</div>

<div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none hover:border-emerald-500/30 transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-xl text-emerald-600 dark:text-emerald-400" icon="solar:global-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-slate-900 dark:text-white">Global Network</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>

<div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none hover:border-emerald-500/30 transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-xl text-emerald-600 dark:text-emerald-400" icon="solar:video-frame-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-slate-900 dark:text-white">Video Integration</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="prospects">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 dark:text-white mb-2">Featured Prospects</h2>
<p className="text-sm text-slate-600 dark:text-slate-400">High-potential talents identified by our algorithms this week.</p>
</div>
<button className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors">
                        View Database <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5 dark:hover:shadow-emerald-900/20 cursor-pointer flex flex-col">
<div className="h-40 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 relative flex items-center justify-center group-hover:from-emerald-50 group-hover:to-teal-50 dark:group-hover:from-emerald-900/20 dark:group-hover:to-teal-900/20 transition-colors">
<iconify-icon className="text-5xl text-slate-300 dark:text-slate-700 group-hover:scale-110 group-hover:text-emerald-500/50 transition-all duration-500" icon="solar:user-linear"></iconify-icon>
<div className="absolute top-3 left-3 px-2 py-1 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm rounded-md text-[10px] font-medium tracking-tight border border-slate-200 dark:border-slate-700 uppercase">Brazil</div>
</div>
<div className="p-5 flex-grow flex flex-col">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-base font-medium tracking-tight text-slate-900 dark:text-white truncate">L. Ipsum</h3>
<p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">CF • 19 yrs</p>
</div>
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-sm font-medium border border-emerald-100 dark:border-emerald-800/50">84</span>
</div>
<div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-auto">
<div>
<div className="flex justify-between text-[10px] mb-1.5 uppercase tracking-tighter">
<span className="text-slate-500">Pace</span>
<span className="text-slate-700 dark:text-slate-300 font-medium">88</span>
</div>
<div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full" style={{width: '88%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] mb-1.5 uppercase tracking-tighter">
<span className="text-slate-500">Shooting</span>
<span className="text-slate-700 dark:text-slate-300 font-medium">79</span>
</div>
<div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full opacity-80" style={{width: '79%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] mb-1.5 uppercase tracking-tighter">
<span className="text-slate-500">Passing</span>
<span className="text-slate-700 dark:text-slate-300 font-medium">72</span>
</div>
<div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-teal-500 rounded-full opacity-70" style={{width: '72%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] mb-1.5 uppercase tracking-tighter">
<span className="text-slate-500">Dribbling</span>
<span className="text-slate-700 dark:text-slate-300 font-medium">85</span>
</div>
<div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full" style={{width: '85%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5 dark:hover:shadow-emerald-900/20 cursor-pointer flex flex-col">
<div className="h-40 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 relative flex items-center justify-center group-hover:from-emerald-50 group-hover:to-teal-50 dark:group-hover:from-emerald-900/20 dark:group-hover:to-teal-900/20 transition-colors">
<iconify-icon className="text-5xl text-slate-300 dark:text-slate-700 group-hover:scale-110 group-hover:text-emerald-500/50 transition-all duration-500" icon="solar:user-linear"></iconify-icon>
<div className="absolute top-3 left-3 px-2 py-1 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm rounded-md text-[10px] font-medium tracking-tight border border-slate-200 dark:border-slate-700 uppercase">France</div>
</div>
<div className="p-5 flex-grow flex flex-col">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-base font-medium tracking-tight text-slate-900 dark:text-white truncate">D. Sit Amet</h3>
<p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">CDM • 21 yrs</p>
</div>
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-sm font-medium border border-emerald-100 dark:border-emerald-800/50">81</span>
</div>
<div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-auto">
<div>
<div className="flex justify-between text-[10px] mb-1.5 uppercase tracking-tighter">
<span className="text-slate-500">Defending</span>
<span className="text-slate-700 dark:text-slate-300 font-medium">83</span>
</div>
<div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full" style={{width: '83%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] mb-1.5 uppercase tracking-tighter">
<span className="text-slate-500">Physical</span>
<span className="text-slate-700 dark:text-slate-300 font-medium">87</span>
</div>
<div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full" style={{width: '87%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] mb-1.5 uppercase tracking-tighter">
<span className="text-slate-500">Passing</span>
<span className="text-slate-700 dark:text-slate-300 font-medium">78</span>
</div>
<div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-teal-500 rounded-full opacity-80" style={{width: '78%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] mb-1.5 uppercase tracking-tighter">
<span className="text-slate-500">Pace</span>
<span className="text-slate-700 dark:text-slate-300 font-medium">68</span>
</div>
<div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-slate-400 rounded-full" style={{width: '68%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5 dark:hover:shadow-emerald-900/20 cursor-pointer flex flex-col">
<div className="h-40 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 relative flex items-center justify-center group-hover:from-emerald-50 group-hover:to-teal-50 dark:group-hover:from-emerald-900/20 dark:group-hover:to-teal-900/20 transition-colors">
<iconify-icon className="text-5xl text-slate-300 dark:text-slate-700 group-hover:scale-110 group-hover:text-emerald-500/50 transition-all duration-500" icon="solar:user-linear"></iconify-icon>
<div className="absolute top-3 left-3 px-2 py-1 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm rounded-md text-[10px] font-medium tracking-tight border border-slate-200 dark:border-slate-700 uppercase">Spain</div>
</div>
<div className="p-5 flex-grow flex flex-col">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-base font-medium tracking-tight text-slate-900 dark:text-white truncate">C. Adipiscing</h3>
<p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">CM • 18 yrs</p>
</div>
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-sm font-medium border border-emerald-100 dark:border-emerald-800/50">79</span>
</div>
<div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-auto">
<div>
<div className="flex justify-between text-[10px] mb-1.5 uppercase tracking-tighter">
<span className="text-slate-500">Passing</span>
<span className="text-slate-700 dark:text-slate-300 font-medium">86</span>
</div>
<div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full" style={{width: '86%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] mb-1.5 uppercase tracking-tighter">
<span className="text-slate-500">Vision</span>
<span className="text-slate-700 dark:text-slate-300 font-medium">84</span>
</div>
<div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full opacity-90" style={{width: '84%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] mb-1.5 uppercase tracking-tighter">
<span className="text-slate-500">Dribbling</span>
<span className="text-slate-700 dark:text-slate-300 font-medium">80</span>
</div>
<div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-teal-500 rounded-full opacity-80" style={{width: '80%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] mb-1.5 uppercase tracking-tighter">
<span className="text-slate-500">Defending</span>
<span className="text-slate-700 dark:text-slate-300 font-medium">65</span>
</div>
<div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-slate-400 rounded-full" style={{width: '65%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5 dark:hover:shadow-emerald-900/20 cursor-pointer flex flex-col">
<div className="h-40 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 relative flex items-center justify-center group-hover:from-emerald-50 group-hover:to-teal-50 dark:group-hover:from-emerald-900/20 dark:group-hover:to-teal-900/20 transition-colors">
<iconify-icon className="text-5xl text-slate-300 dark:text-slate-700 group-hover:scale-110 group-hover:text-emerald-500/50 transition-all duration-500" icon="solar:user-linear"></iconify-icon>
<div className="absolute top-3 left-3 px-2 py-1 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm rounded-md text-[10px] font-medium tracking-tight border border-slate-200 dark:border-slate-700 uppercase">England</div>
</div>
<div className="p-5 flex-grow flex flex-col">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-base font-medium tracking-tight text-slate-900 dark:text-white truncate">E. Eiusmod</h3>
<p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">CB • 20 yrs</p>
</div>
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-sm font-medium border border-emerald-100 dark:border-emerald-800/50">82</span>
</div>
<div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-auto">
<div>
<div className="flex justify-between text-[10px] mb-1.5 uppercase tracking-tighter">
<span className="text-slate-500">Defending</span>
<span className="text-slate-700 dark:text-slate-300 font-medium">85</span>
</div>
<div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full" style={{width: '85%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] mb-1.5 uppercase tracking-tighter">
<span className="text-slate-500">Physical</span>
<span className="text-slate-700 dark:text-slate-300 font-medium">86</span>
</div>
<div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full opacity-90" style={{width: '86%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] mb-1.5 uppercase tracking-tighter">
<span className="text-slate-500">Pace</span>
<span className="text-slate-700 dark:text-slate-300 font-medium">75</span>
</div>
<div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-teal-500 rounded-full opacity-70" style={{width: '75%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] mb-1.5 uppercase tracking-tighter">
<span className="text-slate-500">Passing</span>
<span className="text-slate-700 dark:text-slate-300 font-medium">69</span>
</div>
<div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-slate-400 rounded-full" style={{width: '69%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white dark:bg-slate-900 border-t border-slate-200/50 dark:border-slate-800/50" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 dark:text-white mb-4">Scouting Plans</h2>
<p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.</p>

<div className="mt-8 flex items-center justify-center gap-3">
<span className="text-sm font-medium text-slate-500">Monthly</span>
<div className="relative inline-flex h-6 w-11 items-center rounded-full bg-emerald-500 cursor-pointer">
<span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6"></span>
</div>
<span className="text-sm font-medium text-slate-900 dark:text-white">Annually <span className="text-[10px] py-0.5 px-1.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 ml-1 border border-emerald-200 dark:border-emerald-800">-20%</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">

<div className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
<h3 className="text-lg font-medium tracking-tight mb-2 text-slate-900 dark:text-white">Starter</h3>
<p className="text-xs text-slate-500 dark:text-slate-400 mb-6">For individual scouts.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl tracking-tighter font-medium text-slate-900 dark:text-white">$49</span>
<span className="text-sm text-slate-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-slate-600 dark:text-slate-400">
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Access to regional database</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Basic predictive models</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Up to 50 saved profiles</span>
</li>
</ul>
<button className="w-full py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 font-medium text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">Get Started</button>
</div>

<div className="p-8 rounded-3xl border-2 border-emerald-500 bg-slate-50 dark:bg-slate-900 relative shadow-xl shadow-emerald-500/5 dark:shadow-emerald-900/10 transform md:-translate-y-4">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-500 text-white text-xs font-medium rounded-full tracking-tight">Most Popular</div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-slate-900 dark:text-white">Professional</h3>
<p className="text-xs text-slate-500 dark:text-slate-400 mb-6">For clubs and agencies.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl tracking-tighter font-medium text-slate-900 dark:text-white">$199</span>
<span className="text-sm text-slate-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-slate-600 dark:text-slate-300">
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Global database access</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Advanced AI projections</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Unlimited saved profiles</span>
</li>
</ul>
<button className="w-full py-2.5 rounded-xl bg-emerald-500 text-white font-medium text-sm hover:bg-emerald-600 transition-colors shadow-sm shadow-emerald-500/20">Start Free Trial</button>
</div>

<div className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
<h3 className="text-lg font-medium tracking-tight mb-2 text-slate-900 dark:text-white">Enterprise</h3>
<p className="text-xs text-slate-500 dark:text-slate-400 mb-6">Custom solutions for top tiers.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl tracking-tighter font-medium text-slate-900 dark:text-white">Custom</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-slate-600 dark:text-slate-400">
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 dark:text-slate-600 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Everything in Professional</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 dark:text-slate-600 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>API Access</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 dark:text-slate-600 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Dedicated account manager</span>
</li>
</ul>
<button className="w-full py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 font-medium text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white dark:bg-slate-950 border-t border-slate-200/50 dark:border-slate-800/50 py-12 mt-auto">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 grayscale opacity-80">
<div className="w-6 h-6 rounded-md bg-slate-800 dark:bg-slate-200 flex items-center justify-center text-white dark:text-slate-900">
<iconify-icon icon="solar:football-linear" style={{fontSize: '1rem'}}></iconify-icon>
</div>
<span className="text-base tracking-tighter font-medium text-slate-900 dark:text-white">TALENT</span>
</div>
<div className="text-xs text-slate-500 dark:text-slate-400">
                © 2023 Talent Scouting Platform. All rights reserved.
            </div>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-emerald-500 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:twitter-linear"></iconify-icon></a>
<a className="text-slate-400 hover:text-emerald-500 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:figma-linear"></iconify-icon></a>
<a className="text-slate-400 hover:text-emerald-500 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:github-linear"></iconify-icon></a>
</div>
</div>
</footer>


    </>
  );
}
