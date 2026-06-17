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



        lucide.createIcons();
    
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
      

<div className="aura-background-component top-0 w-full invert-0 absolute h-[900px]" data-alpha-mask="57" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 57%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 57%, transparent)'}}><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="qPVvnWEWLLiJgYtSkKyB"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="size-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white">
<span className="font-medium text-lg tracking-tighter">D</span>
</div>
<span className="text-white font-medium tracking-tight text-lg">DesignTrack</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#how-it-works">How it works</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<button className="sm:w-auto hover:opacity-90 transition-opacity font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 w-full h-12 rounded-full pr-6 pl-6 shadow-[0_0_20px_-5px_rgba(99,102,241,0.5)]" style={{}}>Start Free Trial</button>
</div>
</div>
</nav>

<section className="overflow-hidden md:pb-32 md:pt-40 pt-32 pr-6 pb-20 pl-6 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                v2.0 is now live
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                Track your design hours. <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Get paid accurately.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Effortless time tracking, client management, and instant invoicing built specifically for freelance designers. Stop losing billable hours today.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<button className="sm:w-auto hover:opacity-90 transition-opacity font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 w-full h-12 rounded-full pr-8 pl-8 shadow-[0_0_20px_-5px_rgba(99,102,241,0.5)]">
                    Start Free Trial
                </button>
<button className="w-full sm:w-auto h-12 px-8 rounded-full border border-slate-700 text-slate-300 font-medium hover:bg-slate-800 hover:text-white transition-all flex items-center justify-center gap-2 group">
                    View Demo
                    <svg className="lucide lucide-arrow-right size-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="max-w-6xl mx-auto relative group perspective-1000">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl opacity-20 blur-lg group-hover:opacity-30 transition duration-1000"></div>
<div className="relative rounded-xl border border-white/10 bg-slate-900/50 backdrop-blur-xl shadow-2xl overflow-hidden aspect-[16/10] md:aspect-[21/9]">

<div className="h-10 border-b border-white/5 bg-slate-900/80 flex items-center px-4 gap-2">
<div className="size-3 rounded-full bg-slate-700"></div>
<div className="size-3 rounded-full bg-slate-700"></div>
<div className="size-3 rounded-full bg-slate-700"></div>
</div>

<div className="flex h-full">

<div className="md:w-64 hidden sm:flex flex-col bg-slate-900/30 w-16 border-white/5 border-r pt-6 pb-6">
<div className="uppercase hidden md:block text-xs font-medium text-slate-300 tracking-widest mb-6 pr-6 pl-6">Menu</div>
<div className="space-y-1 px-3">
<div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-indigo-500/10 text-indigo-300 text-sm font-medium">
<svg className="lucide lucide-clock size-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="hidden md:inline">Time Tracker</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium">
<svg className="lucide lucide-briefcase size-4" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<span className="hidden md:inline">Projects</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium">
<svg className="lucide lucide-file-text size-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span className="hidden md:inline">Invoices</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium">
<svg className="lucide lucide-bar-chart-2 size-4" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
<span className="hidden md:inline">Reports</span>
</div>
</div>
</div>

<div className="flex-1 p-6 md:p-8 bg-slate-950/30">
<div className="flex flex-col md:flex-row md:items-center gap-4 mb-8 gap-x-4 gap-y-4 items-start justify-between">
<div className="">
<h3 className="text-xl font-medium text-white tracking-tight">Active Project</h3>
<p className="text-sm text-slate-400">Fintech App Redesign</p>
</div>

<div className="flex gap-4 bg-slate-900 border-white/10 border rounded-full pt-2 pr-2 pb-2 pl-6 shadow-lg gap-x-4 gap-y-4 items-center">
<span className="text-base text-white font-mono">02:14:32</span>
<button className="size-10 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all">
<svg className="lucide lucide-square size-4 fill-current w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
<div className="p-4 rounded-xl border border-white/5 bg-white/5">
<p className="text-xs text-slate-500 mb-1">Total Billable This Week</p>
<p className="text-2xl font-medium text-white">$2,450.00</p>
</div>
<div className="bg-white/5 border-white/5 border rounded-xl pt-4 pr-4 pb-4 pl-4">
<p className="text-xs text-slate-500 mb-1">Hours Tracked</p>
<p className="text-2xl font-medium text-white">32h 15m</p>
</div>
<div className="p-4 rounded-xl border border-white/5 bg-white/5">
<p className="text-xs text-slate-500 mb-1">Pending Invoices</p>
<p className="text-2xl font-medium text-white">3</p>
</div>
</div>

<div className="space-y-2">
<div className="flex items-center justify-between p-4 rounded-lg border border-white/5 bg-slate-800/20 hover:bg-slate-800/40 transition-colors">
<div className="flex items-center gap-4">
<div className="size-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-400">
<svg className="lucide lucide-figma size-4" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
</div>
<div className="">
<p className="text-sm font-medium text-white">Dashboard UI Mockups</p>
<p className="text-xs text-slate-500">Stripe Integration</p>
</div>
</div>
<span className="text-sm font-mono text-indigo-300">1h 45m</span>
</div>
<div className="flex items-center justify-between p-4 rounded-lg border border-white/5 bg-slate-800/20 hover:bg-slate-800/40 transition-colors">
<div className="flex items-center gap-4">
<div className="size-8 rounded bg-purple-500/20 flex items-center justify-center text-purple-400">
<svg className="lucide lucide-pen-tool size-4" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<div>
<p className="text-sm font-medium text-white">Icon System</p>
<p className="text-xs text-slate-500">Asset Export</p>
</div>
</div>
<span className="text-sm font-mono text-indigo-300">0h 30m</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-slate-900/50 border-white/5 pt-24 pb-24">
<div className="max-w-7xl mx-auto pr-o pl-o">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Design work is creative. <br/>Time tracking shouldn't be painful.</h2>
<p className="text-slate-400">Freelancers lose an average of 15% billable income due to poor tracking. We fixed that.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-slate-950 border border-white/5 hover:border-white/10 transition-colors group">
<div className="size-12 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-hourglass size-6" data-lucide="hourglass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 22h14"></path><path d="M5 2h14"></path><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Lost Billable Hours</h3>
<p className="text-sm text-slate-400 leading-relaxed">Forgetting to start a timer or guessing hours at the end of the week costs you real money.</p>
</div>

<div className="p-8 rounded-2xl bg-slate-950 border border-white/5 hover:border-white/10 transition-colors group">
<div className="size-12 rounded-full bg-orange-500/10 text-orange-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-file-spreadsheet size-6" data-lucide="file-spreadsheet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M8 13h2"></path><path d="M14 13h2"></path><path d="M8 17h2"></path><path d="M14 17h2"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Manual Spreadsheets</h3>
<p className="text-sm text-slate-400 leading-relaxed">Spreadsheets are prone to errors and don't integrate with your actual design workflow.</p>
</div>

<div className="p-8 rounded-2xl bg-slate-950 border border-white/5 hover:border-white/10 transition-colors group">
<div className="size-12 rounded-full bg-yellow-500/10 text-yellow-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-receipt size-6" data-lucide="receipt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 17.5v-11"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Confusing Invoices</h3>
<p className="text-sm text-slate-400 leading-relaxed">Clients delay payments when invoices lack clarity on revisions and project breakdowns.</p>
</div>
</div>
</div>
</section>

<section className="pt-32 pr-6 pb-32 pl-6" id="features">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Built for the design workflow</h2>
<p className="text-slate-400 max-w-xl">Everything you need to manage your freelance design business, without the bloat of enterprise project management tools.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-xl border border-white/5 bg-slate-900/30 hover:bg-slate-900/50 transition-colors">
<svg className="lucide lucide-play-circle size-8 text-indigo-400 mb-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<h3 className="text-base font-medium text-white mb-2">One-click Tracking</h3>
<p className="text-sm text-slate-500">Start timers from your menu bar or within Figma via our plugin.</p>
</div>

<div className="p-6 rounded-xl border border-white/5 bg-slate-900/30 hover:bg-slate-900/50 transition-colors">
<svg className="lucide lucide-users size-8 text-purple-400 mb-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<h3 className="text-base font-medium text-white mb-2">Client Management</h3>
<p className="text-sm text-slate-500">Keep contacts, rates, and project history organized in one place.</p>
</div>

<div className="p-6 rounded-xl border border-white/5 bg-slate-900/30 hover:bg-slate-900/50 transition-colors">
<svg className="lucide lucide-history size-8 text-blue-400 mb-4" data-lucide="history" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
<h3 className="text-base font-medium text-white mb-2">Revision Tracking</h3>
<p className="text-sm text-slate-500">Separate original scope from revisions to justify extra costs.</p>
</div>

<div className="p-6 rounded-xl border border-white/5 bg-slate-900/30 hover:bg-slate-900/50 transition-colors">
<svg className="lucide lucide-zap size-8 text-yellow-400 mb-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<h3 className="text-base font-medium text-white mb-2">Auto-Invoicing</h3>
<p className="text-sm text-slate-500">Convert tracked hours into a professional PDF invoice in seconds.</p>
</div>

<div className="p-6 rounded-xl border border-white/5 bg-slate-900/30 hover:bg-slate-900/50 transition-colors">
<svg className="lucide lucide-bar-chart size-8 text-emerald-400 mb-4" data-lucide="bar-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V9"></path><path d="M19 21V3"></path></svg>
<h3 className="text-base font-medium text-white mb-2">Weekly Reports</h3>
<p className="text-sm text-slate-500">Visualize where your time goes and identify low-value tasks.</p>
</div>

<div className="p-6 rounded-xl border border-white/5 bg-slate-900/30 hover:bg-slate-900/50 transition-colors">
<svg className="lucide lucide-globe size-8 text-pink-400 mb-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<h3 className="text-base font-medium text-white mb-2">Multi-currency</h3>
<p className="text-sm text-slate-500">Work with international clients? We handle the currency conversion.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 border-y border-white/5 relative overflow-hidden" id="how-it-works">
<div className="opacity-30 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-10 max-w-7xl mr-auto ml-auto pr-0 pl-0 relative">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">From timer to paycheck</h2><p className="text-slate-400">Seamlessly track your design time and turn every minute into accurate invoices—no manual work required.</p>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="size-24 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-6 shadow-xl">
<span className="text-2xl font-semibold text-indigo-500">01</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Track Work</h3>
<p className="text-sm text-slate-400">Start the timer when you open your design tool. DesignTrack works quietly in the background.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="size-24 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-6 shadow-xl">
<span className="text-2xl font-semibold text-purple-500">02</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Assign Project</h3>
<p className="text-sm text-slate-400">Tag your time to specific clients or projects. Mark hours as billable or non-billable.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="size-24 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-6 shadow-xl">
<span className="text-2xl font-semibold text-blue-500">03</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Get Paid</h3>
<p className="text-sm text-slate-400">Generate a detailed invoice link with one click and send it directly to your client.</p>
</div>
</div>
</div>
</section>

<section className="pt-32 pr-6 pb-0 pl-6" id="pricing">
<div className="max-w-7xl mr-auto ml-auto">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Simple, transparent pricing</h2>
<p className="text-slate-400">Start for free, upgrade when you scale.</p>
</div>

<div className="flex justify-center mb-12">
<label className="relative inline-flex items-center cursor-pointer group">
<input className="sr-only peer" type="checkbox"/>
<div className="w-56 h-10 bg-slate-900 rounded-full border border-white/10 flex p-1 relative">
<div className="transition-all peer-checked:left-[calc(50%-4px)] peer-checked:translate-x-full bg-slate-800 w-1/2 h-full rounded-full absolute left-1 shadow-sm -translate-x-1 -translate-y-1" style={{maskImage: 'linear-gradient(360deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(360deg, transparent, black 0%, black 100%, transparent)'}}></div>
<span className="w-1/2 flex items-center justify-center text-xs font-medium text-white z-10">Monthly</span>
<span className="flex items-center justify-center peer-checked:text-white z-10 text-xs font-medium text-slate-400 w-1/2">Yearly (-20%)</span>
</div>
</label>
</div>
<div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

<div className="p-8 rounded-2xl bg-slate-950 border border-white/5 flex flex-col">
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Free</h3>
<p className="text-sm text-slate-500">For solo designers just starting.</p>
</div>
<div className="mb-6">
<span className="text-4xl font-medium text-white">$0</span>
<span className="text-slate-500">/mo</span>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-slate-400"><svg className="lucide lucide-check size-4 text-slate-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Up to 3 active projects</li>
<li className="flex items-center gap-2 text-sm text-slate-400"><svg className="lucide lucide-check size-4 text-slate-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Basic time tracking</li>
<li className="flex items-center gap-2 text-sm text-slate-400"><svg className="lucide lucide-check size-4 text-slate-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 1 Client profile</li>
</ul>
<a className="w-full py-2.5 rounded-lg border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors text-center" href="#">Get Started</a>
</div>

<div className="relative p-8 rounded-2xl bg-slate-900 border border-indigo-500/50 shadow-[0_0_40px_-10px_rgba(99,102,241,0.2)] flex flex-col">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-[10px] font-bold uppercase tracking-wide text-white">Most Popular</div>
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Pro</h3>
<p className="text-sm text-slate-400">For full-time freelancers.</p>
</div>
<div className="mb-6">
<span className="text-4xl font-medium text-white">$12</span>
<span className="text-slate-500">/mo</span>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-white"><svg className="lucide lucide-check size-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Unlimited projects</li>
<li className="flex items-center gap-2 text-sm text-white"><svg className="lucide lucide-check size-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Unlimited clients</li>
<li className="flex items-center gap-2 text-sm text-white"><svg className="lucide lucide-check size-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Custom invoice branding</li>
</ul>
<a className="w-full py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition-colors text-center shadow-lg shadow-indigo-500/20" href="#">Start Free Trial</a>
</div>

<div className="p-8 rounded-2xl bg-slate-950 border border-white/5 flex flex-col">
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Studio</h3>
<p className="text-sm text-slate-500">For small design teams.</p>
</div>
<div className="mb-6">
<span className="text-4xl font-medium text-white">$29</span>
<span className="text-slate-500">/mo</span>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-slate-400"><svg className="lucide lucide-check size-4 text-slate-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Everything in Pro</li>
<li className="flex items-center gap-2 text-sm text-slate-400"><svg className="lucide lucide-check size-4 text-slate-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Up to 5 team members</li>
<li className="flex items-center gap-2 text-sm text-slate-400"><svg className="lucide lucide-check size-4 text-slate-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Team reporting</li>
</ul>
<a className="w-full py-2.5 rounded-lg border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors text-center" href="#">Contact Sales</a>
</div>
</div>
</div>
</section>

<section className="bg-slate-950 border-white/5 border-t pt-24 pb-24">
<div className="max-w-7xl mx-auto pr-0 pl-0">
<div className="grid md:grid-cols-3 gap-6">

<div className="p-6 rounded-xl bg-slate-900/30 border border-white/5">
<div className="flex items-center gap-4 mb-4">
<div className="size-10 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold text-sm">AL</div>
<div className="">
<p className="text-sm font-medium text-white">Alex Larson</p>
<p className="text-xs text-slate-500">Product Designer</p>
</div>
</div>
<p className="text-sm text-slate-300 leading-relaxed">"Before DesignTrack, I was undercharging by at least 10 hours a month. It paid for itself in the first week."</p>
</div>

<div className="p-6 rounded-xl bg-slate-900/30 border border-white/5">
<div className="flex items-center gap-4 mb-4">
<div className="size-10 rounded-full bg-pink-500/20 text-pink-300 flex items-center justify-center font-bold text-sm">SJ</div>
<div className="">
<p className="text-sm font-medium text-white">Sarah Jenkins</p>
<p className="text-xs text-slate-500">Freelance Brand Designer</p>
</div>
</div>
<p className="text-sm text-slate-300 leading-relaxed">"The interface is so clean. It feels like a tool made by designers, for designers. Invoicing is finally painless."</p>
</div>

<div className="p-6 rounded-xl bg-slate-900/30 border border-white/5">
<div className="flex items-center gap-4 mb-4">
<div className="size-10 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-sm">MK</div>
<div className="">
<p className="text-sm font-medium text-white">Marcus Kim</p>
<p className="text-xs text-slate-500">Motion Designer</p>
</div>
</div>
<p className="text-sm text-slate-300 leading-relaxed">"I love the revision tracking. It helps me show clients exactly why the project went over the estimated hours."</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-indigo-950 opacity-40"></div>
<div className="opacity-20 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<h2 className="md:text-5xl text-4xl font-medium text-white tracking-tight mb-6">Stop guessing your hours. 
Start tracking with confidence.</h2>
<p className="text-lg text-slate-400 mb-10">Join 10,000+ designers who have taken control of their freelance business.</p>
<button className="sm:w-auto hover:opacity-90 transition-opacity font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 w-full h-12 rounded-full pr-8 pl-8 shadow-[0_0_20px_-5px_rgba(99,102,241,0.5)]">
                    Start Free Trial
                </button>
<p className="text-xs text-slate-500 mt-4">No credit card required · 14-day free trial</p>
</div>
</section>

<footer className="bg-slate-950 border-white/5 border-t pt-16 pr-6 pb-8 pl-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="size-6 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs">D</div>
<span className="text-white font-medium tracking-tight">DesignTrack</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed">The operating system for freelance designers.</p>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Product</h4>
<ul className="space-y-2 text-xs text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-medium text-white mb-4">Resources</h4>
<ul className="space-y-2 text-xs text-slate-400">
<li className=""><a className="hover:text-white transition-colors" href="#">Freelance Guide</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Invoice Templates</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Legal</h4>
<ul className="space-y-2 text-xs text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
<p className="text-xs text-slate-600">© 2023 DesignTrack Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter size-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-github size-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-instagram size-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
