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
      

<div className="fixed z-0 overflow-hidden pointer-events-none top-0 right-0 bottom-0 left-0">
<div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen opacity-60" id="hero-blob" style={{transform: 'translate(74.1px, -44.3758px) translate(-50%, 0px)'}}></div>
<div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[100px] mix-blend-screen"></div>
<div className="absolute bottom-[0%] left-[-10%] w-[600px] h-[600px] bg-slate-900/10 rounded-full blur-[100px] mix-blend-screen"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030304]/50 to-[#030304]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030304]/70 backdrop-blur-xl transition-all duration-300 hover:bg-[#030304]/90">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-3 cursor-pointer group">
<div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-zinc-900 to-zinc-800 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.4)] group-hover:scale-110">
<iconify-icon className="text-purple-400" icon="lucide:aperture" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-bold tracking-tight text-white transition-colors group-hover:text-purple-300">opalwave_</span>
<span className="text-[8px] font-mono text-zinc-500 uppercase leading-none hidden sm:block group-hover:text-zinc-400 transition-colors">Product Studio</span>
</div>
</div>
<div className="hidden md:flex items-center gap-8 text-[11px] font-mono font-medium tracking-wide text-zinc-400">
<a className="hover:text-white transition-all hover:-translate-y-0.5 relative group" href="#use-cases">
                    SERVICES
                    <span className="absolute -bottom-2 left-0 w-0 h-px bg-purple-500 transition-all group-hover:w-full"></span>
</a>
<a className="hover:text-white transition-all hover:-translate-y-0.5 relative group" href="#work">
                    WORK
                    <span className="absolute -bottom-2 left-0 w-0 h-px bg-purple-500 transition-all group-hover:w-full"></span>
</a>
<a className="hover:text-white transition-all hover:-translate-y-0.5 relative group" href="#stories">
                    STORIES
                    <span className="absolute -bottom-2 left-0 w-0 h-px bg-purple-500 transition-all group-hover:w-full"></span>
</a>
<a className="hover:text-white transition-all hover:-translate-y-0.5 relative group" href="#audit">
                    INSIGHTS
                    <span className="absolute -bottom-2 left-0 w-0 h-px bg-purple-500 transition-all group-hover:w-full"></span>
</a>
</div>
<a className="group relative text-[11px] font-mono font-medium overflow-hidden border border-white/10 bg-white/5 px-5 py-2 text-zinc-300 rounded-full flex items-center gap-2 transition-all hover:border-purple-500/50 hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)] hover:text-white" href="#contact">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
<span className="relative z-10">START PROJECT</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform text-purple-400" icon="lucide:arrow-right" width="12"></iconify-icon>
</a>
</div>
</nav>

<main className="z-10 max-w-7xl mr-auto ml-auto pt-40 pr-6 pb-24 pl-6 relative">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

<div className="lg:col-span-7 flex flex-col z-10 relative items-start">
<div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/20 to-transparent hidden lg:block"></div>
<div className="inline-flex items-center gap-3 px-3 py-1.5 border rounded-full animate-in delay-100 backdrop-blur-md bg-zinc-900/50 border-white/10 mb-8 hover:border-purple-500/40 hover:bg-purple-500/5 transition-all cursor-default group">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 group-hover:text-zinc-200 transition-colors">Accepting new clients for 2025</span>
</div>
<h1 className="leading-[0.9] animate-in delay-200 sm:text-7xl md:text-7xl text-5xl font-medium text-white tracking-tighter font-sans mb-8 drop-shadow-2xl">
                    Design that sells. <br/>
<span className="text-zinc-600 bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600">Tech that scales.</span>
</h1>
<p className="max-w-xl text-zinc-400 text-sm md:text-base leading-relaxed font-light animate-in delay-200 border-l-2 border-white/5 pl-6">
                    We bridge the gap between stunning aesthetics and powerful functionality. We build digital products that look beautiful, work perfectly, and <span className="text-white font-medium">grow your business.</span>
</p>
<div className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto animate-in delay-300">
<a className="group text-center px-8 py-4 bg-white text-black text-xs font-bold tracking-wide transition-all rounded-lg shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_-10px_rgba(168,85,247,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2 relative overflow-hidden" href="#contact">
<span className="relative z-10 flex items-center gap-2">BOOK CONSULTATION <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="lucide:arrow-up-right" width="14"></iconify-icon></span>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-100 via-white to-zinc-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</a>
<a className="text-center px-8 py-4 border border-white/10 text-zinc-300 text-xs font-mono uppercase tracking-wide hover:bg-white/5 hover:border-white/20 hover:text-white transition-all rounded-lg flex items-center justify-center gap-2 backdrop-blur-sm group shadow-lg shadow-black/20 hover:shadow-purple-500/10" href="#work">
<iconify-icon className="text-purple-400 group-hover:scale-110 transition-transform" icon="lucide:layout-template" width="14"></iconify-icon> View Portfolio
                    </a>
</div>
</div>

<div className="lg:col-span-5 hidden lg:block animate-in delay-300 relative group perspective-1000">
<div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-xl blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
<div className="glass-panel-heavy rounded-xl p-1 overflow-hidden relative transform transition-transform duration-700 group-hover:rotate-y-2 group-hover:rotate-x-2">
<div className="bg-[#0a0a0a] px-4 py-3 flex items-center justify-between border-b border-white/5">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50"></div>
<div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50"></div>
<div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50"></div>
</div>
<div className="text-[9px] font-mono text-zinc-500 opacity-50">growth_engine.js — node — 80x24</div>
</div>
<div className="p-6 font-mono text-[11px] leading-7 text-zinc-400 bg-[#050505] min-h-[300px]">
<div className="flex gap-2"><span className="text-emerald-500">➜</span> <span className="text-purple-400">~</span> <span className="text-zinc-300">opalwave init --business-growth</span></div>
<div className="text-zinc-500 mt-2 pl-4 border-l border-zinc-800">&gt; Analyzing market fit...</div>
<div className="text-zinc-500 pl-4 border-l border-zinc-800">&gt; Integrating design system...</div>
<div className="text-zinc-500 pl-4 border-l border-zinc-800">&gt; Optimizing conversion funnels... <span className="text-emerald-500">Done</span></div>
<div className="text-zinc-500 pl-4 border-l border-zinc-800">&gt; Launching product... <span className="text-emerald-500">Live</span></div>
<div className="mt-6 p-4 border border-white/10 bg-white/[0.02] rounded-lg mb-2 transition-colors hover:bg-white/[0.04]">
<div className="flex justify-between text-[10px] uppercase text-zinc-500 mb-2">
<span>Revenue Metrics</span>
<span className="text-emerald-500 font-bold">+142% Growth</span>
</div>
<div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
<div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full w-[92%] relative">
<div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px]"></div>
</div>
</div>
<div className="flex justify-between mt-2">
<span className="text-zinc-500 text-[10px]">User Retention</span>
<span className="text-white text-[10px]">High</span>
</div>
</div>
<div className="flex gap-2 animate-pulse mt-4"><span className="text-emerald-500">➜</span> <span className="text-purple-400">~</span> <span className="text-zinc-300 inline-block w-2 h-4 bg-zinc-500 align-middle"></span></div>
</div>
</div>
</div>
</div>

<div className="mt-32 grid grid-cols-2 md:grid-cols-4 border-y border-white/5 animate-in delay-300 divide-x divide-white/5 bg-white/[0.01]">
<div className="p-8 text-center group hover:bg-white/[0.02] transition-all duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-3 group-hover:text-purple-400 transition-colors">Launch Speed</div>
<div className="text-3xl font-semibold tracking-tighter text-white flex items-center justify-center gap-1 group-hover:scale-110 transition-transform">
                    4<span className="text-lg text-zinc-600 font-light">weeks</span>
</div>
</div>
<div className="p-8 text-center group hover:bg-white/[0.02] transition-all duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-3 group-hover:text-purple-400 transition-colors">Customer Trust</div>
<div className="text-3xl font-semibold tracking-tighter text-white flex items-center justify-center gap-1 group-hover:scale-110 transition-transform">
                    100<span className="text-lg text-zinc-600 font-light">%</span>
</div>
</div>
<div className="p-8 text-center group hover:bg-white/[0.02] transition-all duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-3 group-hover:text-purple-400 transition-colors">User Satisfaction</div>
<div className="text-3xl font-semibold tracking-tighter text-white flex items-center justify-center gap-1 group-hover:scale-110 transition-transform">
                    5.0<span className="text-lg text-zinc-600 font-light">/5</span>
</div>
</div>
<div className="p-8 text-center group hover:bg-white/[0.02] transition-all duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-3 group-hover:text-purple-400 transition-colors">Revenue Generated</div>
<div className="text-3xl font-semibold tracking-tighter text-white flex items-center justify-center gap-1 group-hover:scale-110 transition-transform">
                    $50<span className="text-lg text-zinc-600 font-light">M+</span>
</div>
</div>
</div>
</main>

<section className="bg-[#030304] border-white/5 border-b pt-24 pr-6 pb-24 pl-6 relative" id="protocols">
<div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent opacity-50"></div>
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div className="">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-sky-500" icon="lucide:cpu"></iconify-icon>
<h2 className="text-[10px] font-mono text-sky-500 uppercase tracking-widest">Methodology</h2>
</div>
<h3 className="text-3xl font-medium text-white tracking-tight">The Operating System.</h3>
</div>
<p className="text-xs text-zinc-500 font-mono max-w-xs text-right mt-4 md:mt-0">
                    // PROTOCOL_EXECUTION
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(240px,auto)]">

<div className="md:col-span-2 glass-panel rounded-xl p-8 flex flex-col justify-between group">
<div className="absolute top-8 right-8 text-zinc-800 group-hover:text-zinc-600 transition-colors">
<iconify-icon icon="lucide:code-2" width="24"></iconify-icon>
</div>
<div className="">
<div className="w-8 h-8 bg-white/5 rounded border border-white/10 flex items-center justify-center text-zinc-300 mb-6 font-mono text-xs">
                            01</div>
<h4 className="text-xl text-white font-medium mb-3">Design Engineering</h4>
<p className="text-sm text-zinc-400 font-light max-w-md leading-relaxed">
                            We don't hand off static files. Our designers write React components and our engineers
                            understand typography. This tight feedback loop eliminates translation errors.
                        </p>
</div>
<div className="mt-8 bg-[#0A0A0A] rounded border border-white/5 p-4 font-mono text-[10px] text-zinc-500 overflow-hidden relative">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent">
</div>
<div className="flex gap-2 mb-2">
<span className="w-2 h-2 rounded-full bg-zinc-700"></span>
<span className="w-2 h-2 rounded-full bg-zinc-700"></span>
</div>
<span className="text-purple-400">export const</span> <span className="text-yellow-100">Card</span> = ({
                        <span className="text-sky-300">children</span> }) =&gt; (<br/>
                              <span className="text-zinc-500">&lt;</span><span className="text-red-300">div</span>
<span className="text-sky-300">className</span>=<span className="text-green-300">"backdrop-blur-md..."</span><span className="text-zinc-500">&gt;</span><br/>
                                {children}<br/>
                              <span className="text-zinc-500">&lt;/</span><span className="text-red-300">div</span><span className="text-zinc-500">&gt;</span><br/>
                            );
                    </div>
</div>

<div className="md:row-span-2 glass-panel rounded-xl p-8 flex flex-col relative group">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
</div>
<div className="mb-auto">
<div className="w-8 h-8 bg-white/5 rounded border border-white/10 flex items-center justify-center text-zinc-300 mb-6 font-mono text-xs">
                            02</div>
<h4 className="text-xl text-white font-medium mb-2">Radical Transparency</h4>
</div>
<div className="space-y-4 my-8">
<div className="flex items-center gap-3 text-xs text-zinc-400 group/item">
<div className="w-4 h-4 rounded-full border border-zinc-700 flex items-center justify-center group-hover/item:border-emerald-500 group-hover/item:text-emerald-500 transition-colors">
<iconify-icon icon="lucide:check" width="10"></iconify-icon>
</div>
                            Shared Slack Channels
                        </div>
<div className="flex items-center gap-3 text-xs text-zinc-400 group/item">
<div className="w-4 h-4 rounded-full border border-zinc-700 flex items-center justify-center group-hover/item:border-emerald-500 group-hover/item:text-emerald-500 transition-colors">
<iconify-icon icon="lucide:check" width="10"></iconify-icon>
</div>
                            Weekly Loom Updates
                        </div>
<div className="flex items-center gap-3 text-xs text-zinc-400 group/item">
<div className="w-4 h-4 rounded-full border border-zinc-700 flex items-center justify-center group-hover/item:border-emerald-500 group-hover/item:text-emerald-500 transition-colors">
<iconify-icon icon="lucide:check" width="10"></iconify-icon>
</div>
                            Open Github Repos
                        </div>
<div className="flex items-center gap-3 text-xs text-zinc-400 group/item">
<div className="w-4 h-4 rounded-full border border-zinc-700 flex items-center justify-center group-hover/item:border-emerald-500 group-hover/item:text-emerald-500 transition-colors">
<iconify-icon icon="lucide:check" width="10"></iconify-icon>
</div>
                            Direct Access to Founders
                        </div>
</div>
<div className="mt-auto pt-6 border-t border-white/5">
<p className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">
                            Status: Connected
                        </p>
</div>
</div>

<div className="glass-panel rounded-xl p-8 group">
<div className="w-8 h-8 bg-white/5 rounded border border-white/10 flex items-center justify-center text-zinc-300 mb-6 font-mono text-xs">
                        03</div>
<h4 className="text-xl text-white font-medium mb-3">Global Async</h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                        Work happens 24/7 across 6 timezones. When San Francisco sleeps, London builds.
                    </p>
</div>

<div className="glass-panel rounded-xl p-8 group overflow-hidden">
<div className="absolute -right-6 -bottom-6 text-white/5 rotate-12 group-hover:scale-110 group-hover:text-white/10 transition-all duration-500">
<iconify-icon icon="lucide:zap" width="120"></iconify-icon>
</div>
<div className="w-8 h-8 bg-white/5 rounded border border-white/10 flex items-center justify-center text-zinc-300 mb-6 font-mono text-xs relative z-10">
                        04</div>
<h4 className="text-xl text-white font-medium mb-3 relative z-10">Velocity</h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed relative z-10">
                        We ship week one. Strategy is useless without execution. We deploy early and often.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-[#030304] relative" id="use-cases">
<div className="md:py-24 max-w-6xl z-10 mr-auto ml-auto pt-16 pr-6 pb-16 pl-6 relative">
<div className="mb-16">
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-widest font-mono">Services</span>
<div className="h-px w-12 bg-white/10"></div>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-6">What I do.</h2>
<p className="lg:text-lg leading-relaxed text-base text-zinc-400 mb-8 max-w-2xl font-light">From initial concept to final deployment, I provide comprehensive design and development services tailored to your needs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="group relative hover:border-white/20 transition-all duration-500 overflow-hidden bg-[#080808] border border-white/10 rounded-3xl hover:shadow-2xl hover:shadow-emerald-900/10">
<div className="relative overflow-hidden bg-zinc-900/50 h-64 border-b border-white/5">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
<div className="pointer-events-none absolute right-2 top-12 bg-gradient-to-br from-white/5 to-transparent w-[68%] h-[68%] border border-white/5 rounded-xl rotate-[8deg] opacity-50"></div>
<div className="relative z-10 mx-auto mt-8 w-[80%] h-full rounded-t-xl bg-[#0C0C0C] border-t border-x border-white/10 shadow-2xl">
<div className="flex items-center justify-between p-3 border-b border-white/5">
<div className="flex items-center gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700/50"></div>
</div>
<p className="text-[10px] text-zinc-600 font-mono uppercase tracking-wider">Strategy.board</p>
</div>
<div className="p-4">
<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="h-2 w-12 rounded-full bg-emerald-500/20"></div>
<div className="h-2 w-2 rounded-full bg-zinc-800"></div>
</div>
<div className="h-2 w-24 rounded-full bg-zinc-800"></div>
<div className="h-12 w-full rounded border border-white/5 bg-white/[0.02] flex items-center px-3 relative overflow-hidden group-hover:border-emerald-500/20 transition-colors">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500/50"></div>
<div className="space-y-1.5 w-full">
<div className="h-1.5 w-1/2 rounded-full bg-zinc-800"></div>
<div className="h-1.5 w-1/3 rounded-full bg-zinc-800/50"></div>
</div>
</div>
<div className="grid grid-cols-3 gap-2 mt-4">
<div className="h-10 rounded border border-white/5 bg-zinc-800/30"></div>
<div className="h-10 rounded border border-emerald-500/20 bg-emerald-500/5"></div>
<div className="h-10 rounded border border-white/5 bg-zinc-800/30"></div>
</div>
</div>
</div>
<div className="absolute right-8 bottom-12 text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500">
<iconify-icon icon="lucide:mouse-pointer-2" width="24"></iconify-icon>
</div>
</div>
</div>
<div className="p-8">
<div className="flex mb-4 items-center justify-between">
<span className="text-sm font-medium text-emerald-500 font-mono bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded">01</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Strategy &amp; Research</h3>
<p className="text-zinc-400 leading-relaxed text-sm font-light">I start by understanding your goals, researching your market, and crafting a strategic foundation for success.</p>
</div>
</div>

<div className="group relative hover:border-white/20 transition-all duration-500 overflow-hidden bg-[#080808] border border-white/10 rounded-3xl hover:shadow-2xl hover:shadow-blue-900/10">
<div className="relative overflow-hidden bg-zinc-900/50 h-64 border-b border-white/5">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
<div className="relative z-10 mx-auto mt-8 w-[80%] h-full rounded-t-xl bg-[#0C0C0C] border-t border-x border-white/10 shadow-2xl">
<div className="flex border-b border-white/5 p-3 items-center justify-between">
<div className="flex items-center gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700/50"></div>
</div>
<p className="text-[10px] text-zinc-600 font-mono uppercase tracking-wider">Figma.app</p>
</div>
<div className="p-4">
<div className="space-y-5">
<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 border border-white/10"></div>
<div className="w-6 h-6 rounded-full bg-emerald-500 border border-white/10"></div>
<div className="w-6 h-6 rounded-full bg-zinc-800 border border-white/10"></div>
<div className="w-6 h-6 rounded-full border border-dashed border-zinc-700 flex items-center justify-center text-zinc-600 text-[10px]">+</div>
</div>
<div className="space-y-3">
<div className="h-2 w-16 rounded-full bg-zinc-800"></div>
<div className="h-8 w-full rounded border border-blue-500/20 bg-blue-500/5 flex items-center px-3">
<div className="h-1.5 w-20 rounded-full bg-blue-400/30"></div>
</div>
<div className="flex gap-2">
<div className="h-2 w-8 rounded-full bg-zinc-800"></div>
<div className="h-2 w-12 rounded-full bg-zinc-800"></div>
</div>
</div>
</div>
</div>
<div className="absolute right-8 bottom-12 text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500">
<iconify-icon icon="lucide:pen-tool" width="24"></iconify-icon>
</div>
</div>
</div>
<div className="p-8">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium text-blue-400 font-mono bg-blue-500/10 border border-blue-500/20 px-2 py-1 rounded">02</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Design &amp; Prototyping</h3>
<p className="text-zinc-400 leading-relaxed text-sm font-light">Creating beautiful, functional designs with interactive prototypes that bring your vision to life.</p>
</div>
</div>

<div className="group relative hover:border-white/20 transition-all duration-500 overflow-hidden bg-[#080808] border border-white/10 rounded-3xl hover:shadow-2xl hover:shadow-purple-900/10">
<div className="relative overflow-hidden bg-zinc-900/50 h-64 border-b border-white/5">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
<div className="relative z-10 mx-auto mt-8 w-[80%] h-full rounded-t-xl bg-[#0C0C0C] border-t border-x border-white/10 shadow-2xl">
<div className="flex border-b border-white/5 p-3 items-center justify-between">
<div className="flex items-center gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700/50"></div>
</div>
<p className="text-[10px] text-zinc-600 font-mono uppercase tracking-wider">app.tsx</p>
</div>
<div className="p-4 space-y-2.5 font-mono text-[10px]">
<div className="flex items-center gap-2">
<span className="text-purple-400">export</span>
<span className="text-blue-400">const</span>
<span className="text-yellow-100">App</span>
<span className="text-white">=</span>
<span className="text-zinc-500">()</span>
<span className="text-purple-400">=&gt;</span>
<span className="text-zinc-500">{</span>
</div>
<div className="pl-4 flex items-center gap-2">
<span className="text-purple-400">return</span>
<span className="text-zinc-500">(</span>
</div>
<div className="pl-8 flex items-center gap-2">
<span className="text-zinc-600">&lt;</span>
<span className="text-emerald-400">motion.div</span>
</div>
<div className="pl-10 flex items-center gap-2">
<span className="text-blue-300">initial</span>
<span className="text-white">=</span>
<span className="text-zinc-500">{{</span>
<span className="text-white">opacity:</span>
<span className="text-orange-300">0</span>
<span className="text-zinc-500">}}</span>
</div>
<div className="mt-4 flex items-center gap-2 px-2 py-1.5 rounded bg-zinc-900 border border-white/5 w-fit">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-[9px] text-zinc-400">Compiled successfully</span>
</div>
</div>
<div className="absolute right-8 bottom-12 text-purple-500 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500">
<iconify-icon icon="lucide:terminal" width="24"></iconify-icon>
</div>
</div>
</div>
<div className="p-8">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium text-purple-400 font-mono bg-purple-500/10 border border-purple-500/20 px-2 py-1 rounded">03</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Development &amp; Launch</h3>
<p className="text-zinc-400 leading-relaxed text-sm font-light">Building high-performance, responsive experiences with clean code and seamless deployment.</p>
</div>
</div>

<div className="group relative hover:border-white/20 transition-all duration-500 overflow-hidden bg-[#080808] border border-white/10 rounded-3xl hover:shadow-2xl hover:shadow-amber-900/10">
<div className="relative overflow-hidden bg-zinc-900/50 h-64 border-b border-white/5">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
<div className="z-10 border-x bg-[#0C0C0C] w-[80%] h-full border-white/10 rounded-t-xl border-t mt-8 mr-auto ml-auto relative shadow-2xl">
<div className="flex border-b border-white/5 p-3 items-center justify-between">
<div className="flex items-center gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700/50"></div>
</div>
<p className="text-[10px] text-zinc-600 font-mono uppercase tracking-wider">Metrics.dashboard</p>
</div>
<div className="p-4">
<div className="flex items-end gap-2 h-20 mt-2">
<div className="w-1/4 bg-indigo-500/20 border border-indigo-500/30 rounded h-[30%]"></div>
<div className="w-1/4 bg-indigo-500/40 border border-indigo-500/50 rounded h-[50%]"></div>
<div className="w-1/4 bg-indigo-500/60 border border-indigo-500/70 rounded h-[70%] relative group-hover:h-[80%] transition-all"></div>
<div className="w-1/4 bg-indigo-500 border border-indigo-400 rounded h-[90%] relative group-hover:h-[100%] transition-all"></div>
</div>
</div>
<div className="absolute right-8 bottom-12 text-indigo-500 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)] transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500">
<iconify-icon className="" icon="lucide:trending-up" width="24"></iconify-icon>
</div>
</div>
</div>
<div className="pt-8 pr-8 pb-8 pl-8">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium text-amber-400 font-mono bg-amber-500/10 border border-amber-500/20 px-2 py-1 rounded">04</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">SEO &amp; Performance</h3>
<p className="text-zinc-400 leading-relaxed text-sm font-light">Optimizing core web vitals, search rankings, and ensuring your product loads lightning fast.</p>
</div>
</div>

<div className="group relative hover:border-white/20 transition-all duration-500 overflow-hidden bg-[#080808] border border-white/10 rounded-3xl hover:shadow-2xl hover:shadow-rose-900/10">
<div className="relative overflow-hidden bg-zinc-900/50 h-64 border-b border-white/5">
<div className="-multi opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-10 border-x bg-[#0C0C0C] w-[80%] h-full border-white/10 rounded-t-xl border-t mt-8 mr-auto ml-auto relative shadow-2xl">
<div className="flex border-b border-white/5 p-3 items-center justify-between">
<div className="flex items-center gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700/50"></div>
</div>
<p className="text-[10px] text-zinc-600 font-mono uppercase tracking-wider">Brand.assets</p>
</div>
<div className="p-4 space-y-4">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10">
<span className="text-xl font-serif text-white">Aa</span>
</div>
<div className="space-y-1.5 flex-1">
<div className="h-1.5 w-full bg-zinc-700 rounded-full"></div>
<div className="h-1.5 w-2/3 bg-zinc-800 rounded-full"></div>
</div>
</div>
<div className="flex gap-2">
<div className="h-8 w-1/3 rounded-lg bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.3)] border border-rose-400/50"></div>
<div className="h-8 w-1/3 rounded-lg bg-zinc-200"></div>
<div className="h-8 w-1/3 rounded-lg bg-[#0C0C0C] border border-dashed border-zinc-700 flex items-center justify-center">
<div className="w-3 h-3 rounded-full bg-zinc-800"></div>
</div>
</div>
<div className="pt-1">
<div className="h-8 w-full rounded-md border border-rose-500/30 bg-rose-500/10 flex items-center px-3 gap-2">
<iconify-icon className="text-rose-400" icon="lucide:sparkles" width="12"></iconify-icon>
<div className="h-1 w-12 bg-rose-400/50 rounded-full"></div>
</div>
</div>
</div>
<div className="absolute right-8 bottom-12 text-rose-500 drop-shadow-[0_0_8px_rgba(244,63,94,0.5)] transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500">
</div>
</div>
</div>
<div className="p-8">
<div className="flex mb-4 items-center justify-between">
<span className="text-sm font-medium text-rose-400 font-mono bg-rose-500/10 border-rose-500/20 border rounded pt-1 pr-2 pb-1 pl-2">05</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Brand Identity</h3>
<p className="text-zinc-400 leading-relaxed text-sm font-light">Crafting memorable visual languages, logos, and design systems that resonate with your audience.</p>
</div>
</div>

<div className="group relative hover:border-white/20 transition-all duration-500 overflow-hidden bg-[#080808] border border-white/10 rounded-3xl hover:shadow-2xl hover:shadow-cyan-900/10">
<div className="relative overflow-hidden bg-zinc-900/50 h-64 border-b border-white/5">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
<div className="relative z-10 mx-auto mt-8 w-[80%] h-full rounded-t-xl bg-[#0C0C0C] border-t border-x border-white/10 shadow-2xl">
<div className="flex border-b border-white/5 p-3 items-center justify-between">
<div className="flex items-center gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700/50"></div>
</div>
<p className="text-[10px] text-zinc-600 font-mono uppercase tracking-wider">Server.logs</p>
</div>
<div className="p-4 space-y-2.5 font-mono text-[10px]">
<div className="flex items-center gap-2">
<span className="text-zinc-600">[sys]</span>
<span className="text-cyan-400">checking health...</span>
</div>
<div className="flex items-center gap-2">
<span className="text-zinc-600">[sys]</span>
<span className="text-white">all systems operational</span>
</div>
<div className="flex items-center gap-2">
<span className="text-zinc-600">[dev]</span>
<span className="text-zinc-400">deploying v2.4.1</span>
</div>
<div className="mt-4 flex items-center gap-2 px-2 py-1.5 rounded bg-zinc-900 border border-white/5 w-fit">
<div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></div>
<span className="text-[9px] text-zinc-400">99.99% Uptime</span>
</div>
</div>
<div className="absolute right-8 bottom-12 text-cyan-500 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)] transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500">
<iconify-icon icon="lucide:server" width="24"></iconify-icon>
</div>
</div>
</div>
<div className="p-8">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium text-cyan-400 font-mono bg-cyan-500/10 border border-cyan-500/20 px-2 py-1 rounded">06</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Ongoing Support</h3>
<p className="text-zinc-400 leading-relaxed text-sm font-light">Continuous maintenance, feature updates, and technical support to keep your business running smoothly.</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-[#030304] border-white/5 pt-24 pb-24 relative" id="work">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#030304] via-transparent to-[#030304] pointer-events-none z-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="mb-16 md:flex justify-between items-end">
<div className="">
<div className="flex items-center gap-3 mb-6">
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest border border-white/10 px-2 py-1 rounded bg-white/[0.02] flex items-center gap-2">
<iconify-icon icon="solar:folder-with-files-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon> Archive
                        </span>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white">Selected Deployments.</h2>
</div>
<p className="text-sm font-mono text-zinc-500 mt-4 md:mt-0 flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-emerald-500">3</span> systems live in production
                </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 gap-x-6 gap-y-6">

<div className="lg:col-span-2 group relative flex flex-col md:flex-row bg-[#050505] border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-500">

<div className="w-full md:w-1/3 p-8 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between bg-[linear-gradient(to_bottom,transparent,#030304)] relative z-10">
<div>
<div className="flex items-center justify-between mb-8">
<span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">01 // FinTech</span>
<div className="px-2 py-1 rounded border border-emerald-500/20 bg-emerald-500/10 text-[10px] font-mono text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Live
                    </div>
</div>
<h3 className="text-2xl font-medium text-white mb-3 tracking-tight">Lumina Protocol</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed mb-8">
                    A high-frequency trading interface built for institutional liquidity providers. Sub-millisecond data visualization and order execution in a fully custom dark-mode environment.
                </p>
</div>
<div className="space-y-6">
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400">Next.js</span>
<span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400">WebGL</span>
<span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400">Tailwind</span>
</div>
<a className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-300 hover:text-white transition-colors group/link" href="#">
                    View Architecture
                    <iconify-icon className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform text-emerald-400" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</a>
</div>
</div>

<div className="w-full md:w-2/3 relative min-h-[300px] md:min-h-[420px] bg-[#020202] overflow-hidden flex items-end justify-center p-8 pb-0">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none">
</div>

<div className="relative w-[95%] h-[92%] bg-[#080808] rounded-t-xl border-t border-x border-white/20 shadow-2xl transform translate-y-8 group-hover:translate-y-4 transition-transform duration-700 ease-out overflow-hidden">

<div className="h-8 border-b border-white/10 flex items-center px-4 bg-[#0a0a0a] justify-between">
<div className="flex gap-1.5">
<div className="w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-red-500/80 transition-colors"></div>
<div className="w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-yellow-500/80 transition-colors"></div>
<div className="w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-green-500/80 transition-colors"></div>
</div>
<div className="text-[9px] font-mono text-zinc-600">lumina-trade-v2.exe</div>
</div>

<div className="w-full h-full relative bg-zinc-900">
<img alt="Fintech Dashboard" className="object-top group-hover:opacity-100 transition-all duration-700 ease-out grayscale-[0.8] contrast-125 group-hover:grayscale-0 group-hover:contrast-100 opacity-50 w-full h-full object-cover" src="https://res.cloudinary.com/jeff1/image/upload/v1773618748/Screenshot_2026-02-22_at_8.59.06_AM_lm3pwn.png"/>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent -translate-y-[100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out pointer-events-none">
</div>
</div>
</div>
</div>
</div>

<div className="group relative flex flex-col bg-[#050505] border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-500">

<div className="relative h-[260px] w-full bg-[#020202] overflow-hidden flex justify-center items-end p-6 pb-0 border-b border-white/10">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
<div className="relative w-[88%] h-[90%] bg-[#080808] rounded-t-xl border-t border-x border-white/20 shadow-2xl transform translate-y-6 group-hover:translate-y-3 transition-transform duration-700 ease-out overflow-hidden">
<div className="h-6 border-b border-white/10 bg-[#0a0a0a] flex items-center px-3 gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-800"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-800"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-800"></div>
</div>
<img alt="SaaS Dashboard" className="object-top group-hover:opacity-100 grayscale-[0.8] contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 ease-out opacity-50 w-full h-full object-cover" src="https://res.cloudinary.com/jeff1/image/upload/v1773618464/141shots_so_amh6qw.png"/>
</div>
</div>

<div className="p-8 flex flex-col justify-between flex-1 bg-[linear-gradient(to_bottom,transparent,#030304)]">
<div className="">
<div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-4">02 // Enterprise SaaS</div>
<div className="flex items-center justify-between mb-3">
<h3 className="text-xl font-medium text-white tracking-tight">Aura Systems</h3>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-400 font-light mb-6 leading-relaxed">Complete technical overhaul for a B2B platform managing 10k+ daily automated workflows.</p>
</div>
<div className="flex gap-2">
<span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400">Vue.js</span>
<span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400">Node</span>
</div>
</div>
</div>

<div className="group relative flex flex-col bg-[#050505] border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-500">

<div className="relative h-[260px] w-full bg-[#020202] overflow-hidden flex justify-center items-end p-6 pb-0 border-b border-white/10">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
<div className="relative w-[88%] h-[90%] bg-[#080808] rounded-t-xl border-t border-x border-white/20 shadow-2xl transform translate-y-6 group-hover:translate-y-3 transition-transform duration-700 ease-out overflow-hidden">
<div className="h-6 border-b border-white/10 bg-[#0a0a0a] flex items-center px-3 gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-800"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-800"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-800"></div>
</div>
<img alt="Analytics Platform" className="w-full h-full object-cover object-top opacity-50 group-hover:opacity-100 grayscale-[0.8] contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="p-8 flex flex-col justify-between flex-1 bg-[linear-gradient(to_bottom,transparent,#030304)]">
<div className="">
<div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-4">03 // Data Analytics</div>
<div className="flex items-center justify-between mb-3">
<h3 className="text-xl font-medium text-white tracking-tight">Nexus Metrics</h3>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-400 font-light mb-6 leading-relaxed">Real-time analytics engine prioritizing data density, rapid loading states, and custom D3 charts.</p>
</div>
<div className="flex gap-2">
<span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400">React</span>
<span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400">D3.js</span>
</div>
</div>
</div>

<div className="group relative flex flex-col bg-[#050505] border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.15)]">
<div className="relative h-[260px] w-full bg-[#020202] overflow-hidden flex justify-center items-end p-6 pb-0 border-b border-white/10">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent pointer-events-none"></div>
<div className="relative w-[88%] h-[90%] bg-[#080808] rounded-t-xl border-t border-x border-white/20 shadow-2xl transform translate-y-6 group-hover:translate-y-3 transition-transform duration-700 ease-out overflow-hidden">
<div className="h-6 border-b border-white/10 bg-[#0a0a0a] flex items-center px-3 gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-800"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-800"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-800"></div>
</div>
<img alt="AI Platform" className="w-full h-full object-cover object-top opacity-50 group-hover:opacity-100 grayscale-[0.8] contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 ease-out mix-blend-lighten" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
</div>
</div>
<div className="p-8 flex flex-col justify-between flex-1 bg-[linear-gradient(to_bottom,transparent,#030304)]">
<div className="">
<div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-4">04 // AI Infrastructure</div>
<div className="flex items-center justify-between mb-3">
<h3 className="text-xl font-medium text-white tracking-tight">SynthCore</h3>
<iconify-icon className="text-zinc-600 group-hover:text-purple-400 transition-colors" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-400 font-light mb-6 leading-relaxed">Distributed machine learning training platform with real-time model visualization and monitoring.</p>
</div>
<div className="flex gap-2">
<span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400">Python</span>
<span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400">React</span>
</div>
</div>
</div>

<div className="group relative flex flex-col bg-[#050505] border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.15)]">
<div className="relative h-[260px] w-full bg-[#020202] overflow-hidden flex justify-center items-end p-6 pb-0 border-b border-white/10">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent pointer-events-none"></div>
<div className="relative w-[88%] h-[90%] bg-[#080808] rounded-t-xl border-t border-x border-white/20 shadow-2xl transform translate-y-6 group-hover:translate-y-3 transition-transform duration-700 ease-out overflow-hidden">
<div className="h-6 border-b border-white/10 bg-[#0a0a0a] flex items-center px-3 gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-800"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-800"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-800"></div>
</div>
<img alt="Web3 Dashboard" className="w-full h-full object-cover object-top opacity-50 group-hover:opacity-100 grayscale-[0.8] contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 ease-out mix-blend-lighten" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
</div>
</div>
<div className="p-8 flex flex-col justify-between flex-1 bg-[linear-gradient(to_bottom,transparent,#030304)]">
<div className="">
<div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-4">05 // Web3</div>
<div className="flex items-center justify-between mb-3">
<h3 className="text-xl font-medium text-white tracking-tight">EtherVault</h3>
<iconify-icon className="text-zinc-600 group-hover:text-blue-400 transition-colors" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-400 font-light mb-6 leading-relaxed">Non-custodial institutional wallet interface with multi-sig approval flows and portfolio analytics.</p>
</div>
<div className="flex gap-2">
<span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400">Solidity</span>
<span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400">Next.js</span>
</div>
</div>
</div>

<div className="lg:col-span-2 group relative flex flex-col md:flex-row-reverse bg-[#050505] border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-500">

<div className="w-full md:w-1/3 p-8 border-b md:border-b-0 md:border-l border-white/10 flex flex-col justify-between bg-[linear-gradient(to_bottom,transparent,#030304)] relative z-10">
<div className="">
<div className="flex items-center justify-between mb-8">
<span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">06 // Spatial Computing</span>
<div className="px-2 py-1 rounded border border-purple-500/20 bg-purple-500/10 text-[10px] font-mono text-purple-400 uppercase tracking-widest flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> Beta
                    </div>
</div>
<h3 className="text-2xl font-medium text-white mb-3 tracking-tight">OmniVision OS</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed mb-8">
                    Browser-based spatial operating system. Blurring the lines between web interfaces and 3D environments with physics-based interactions.
                </p>
</div>
<div className="space-y-6">
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400">Three.js</span>
<span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400">WebXR</span>
<span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400">Svelte</span>
</div>
<a className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-300 hover:text-white transition-colors group/link" href="#">
                    View Experience
                    <iconify-icon className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform text-purple-400" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</a>
</div>
</div>

<div className="w-full md:w-2/3 relative min-h-[300px] md:min-h-[420px] bg-[#020202] overflow-hidden flex items-center justify-center p-8">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

<div className="relative w-[100%] h-[100%] bg-[#080808] rounded-xl border border-white/20 shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-700 ease-out overflow-hidden">
<img alt="Spatial OS" className="object-center group-hover:opacity-100 transition-all duration-700 ease-out grayscale-[0.8] contrast-125 group-hover:grayscale-0 group-hover:contrast-100 opacity-50 w-full h-full object-cover" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-transparent pointer-events-none mix-blend-screen"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pb-12 relative" id="audit">
<div className="max-w-4xl mx-auto px-6">
<div className="glass-panel p-1 rounded-3xl relative overflow-hidden group hover:border-purple-500/30 transition-colors duration-500" style={{'--mouse-x': '-67px', '--mouse-y': '-913px'}}>
<div className="bg-[#050505] rounded-[22px] p-8 md:p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-purple-500/20 to-indigo-500/5 rounded-full filter blur-[100px] pointer-events-none group-hover:opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-emerald-500/5 rounded-full filter blur-[80px] pointer-events-none"></div>
<div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
<div className="flex-1">
<div className="inline-flex items-center gap-2 px-3 py-1 border rounded mb-6 bg-purple-500/10 border-purple-500/20 shadow-[0_0_15px_-3px_rgba(168,85,247,0.2)]">
<span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
<span className="text-[10px] font-mono uppercase tracking-wider text-purple-300">Free Market Report</span>
</div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-4 group-hover:text-purple-50 transition-colors">Market Opportunity Analysis</h2>
<p className="text-zinc-400 text-sm leading-relaxed mb-8 font-light">
                                Stop guessing. We analyze your top 3 competitors to see what they are doing right, where they are failing, and how you can outperform them in the market.
                            </p>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white/5 border border-white/5 rounded p-3 hover:bg-white/10 transition-colors">
<div className="text-xs text-white mb-1 font-mono">Strategy Gaps</div>
<div className="text-[10px] text-zinc-500">Find undefined niches in your market.</div>
</div>
<div className="bg-white/5 border border-white/5 rounded p-3 hover:bg-white/10 transition-colors">
<div className="text-xs text-white mb-1 font-mono">Tech Advantage</div>
<div className="text-[10px] text-zinc-500">See what tools your rivals use.</div>
</div>
</div>
</div>
<div className="w-full md:w-80 relative group/form">
<div className="absolute -right-12 -top-12 w-32 h-40 bg-zinc-800 rounded opacity-20 rotate-12 pointer-events-none border border-white/20 group-hover/form:rotate-6 transition-transform duration-500"></div>
<form className="space-y-4 relative z-10 bg-[#0a0a0a] p-6 rounded-xl border border-white/10 shadow-2xl transition-all duration-300 hover:border-purple-500/30 hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.2)]" onsubmit="submitLeadMagnet(event)">
<div className="">
<label className="block text-[10px] font-mono uppercase text-zinc-500 mb-1.5" htmlFor="lm-email">Work Email</label>
<input className="w-full input-base px-4 py-3 rounded-lg text-sm placeholder:text-zinc-700 bg-black/50" id="lm-email" placeholder="name@company.com" required="" type="email"/>
</div>
<div className="">
<label className="block text-[10px] font-mono uppercase text-zinc-500 mb-1.5" htmlFor="lm-url">Company Website</label>
<input className="w-full input-base px-4 py-3 rounded-lg text-sm placeholder:text-zinc-700 bg-black/50" id="lm-url" placeholder="https://yourcompany.com" required="" type="url"/>
</div>
<button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-3 text-xs font-semibold tracking-wide transition-all rounded-lg flex items-center justify-center gap-2 shadow-[0_0_20px_-5px_rgba(79,70,229,0.3)] hover:scale-[1.02]" type="submit">
                                    GET FREE REPORT <iconify-icon className="" icon="lucide:arrow-right" width="14"></iconify-icon>
</button>
<p className="text-[10px] text-zinc-600 text-center flex items-center justify-center gap-1">
<iconify-icon icon="lucide:lock" width="10"></iconify-icon> Your data is secure &amp; private.
                                </p>
</form>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#030304] border-white/5 border-t pt-24 pb-12 relative" id="solutions">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-[10px] font-mono uppercase tracking-widest mb-4 text-purple-400">Collaboration Models</h2>
<h3 className="text-3xl md:text-4xl font-medium text-white tracking-tighter">How we work.</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="flex flex-col p-10 glass-panel rounded-2xl hover:bg-white/[0.03] relative overflow-hidden group">
<div className="absolute top-0 right-0 w-40 h-40 bg-zinc-800/20 rounded-bl-full -mr-10 -mt-10 group-hover:scale-110 transition-transform duration-500"></div>
<div className="flex items-start justify-between mb-8 relative">
<div className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:bg-white/10 group-hover:border-white/20 transition-all">
<iconify-icon icon="lucide:compass" width="28"></iconify-icon>
</div>
<div className="text-right">
<div className="text-[10px] font-mono text-zinc-500 uppercase">Phase 1</div>
<div className="text-xl font-medium text-white">Strategy</div>
</div>
</div>
<p className="text-xs text-zinc-400 font-light mb-8 leading-relaxed h-12">
                        For founders needing direction. We map out your product, design the user journey, and validate the market fit.
                    </p>
<div className="space-y-3 mt-auto border-t border-white/10 pt-6">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-500" icon="lucide:check" width="14"></iconify-icon>
<span className="text-xs text-zinc-300">User Journey Map</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-500" icon="lucide:check" width="14"></iconify-icon>
<span className="text-xs text-zinc-300">Brand Identity &amp; Visuals</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-500" icon="lucide:check" width="14"></iconify-icon>
<span className="text-xs text-zinc-300">Technical Blueprint</span>
</div>
</div>
</div>

<div className="flex flex-col p-10 glass-panel rounded-2xl relative overflow-hidden border-purple-500/30 bg-purple-900/[0.05] group hover:border-purple-500/50 hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.15)]">
<div className="absolute top-0 right-0 w-40 h-40 rounded-bl-full -mr-10 -mt-10 bg-purple-500/10 group-hover:scale-110 transition-transform duration-500"></div>
<div className="flex items-start justify-between mb-8 relative">
<div className="w-14 h-14 border rounded-xl flex items-center justify-center bg-purple-500/20 border-purple-500/30 text-purple-300 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:rocket" width="28"></iconify-icon>
</div>
<div className="text-right">
<div className="text-[10px] font-mono text-purple-400/70 uppercase">Phase 2</div>
<div className="text-xl font-medium text-white">Build &amp; Launch</div>
</div>
</div>
<p className="text-xs text-zinc-400 font-light mb-8 leading-relaxed h-12">
                        We design, build, and deploy your full product. You get a high-performance asset ready for customers.
                    </p>
<div className="space-y-3 mt-auto border-t border-purple-500/10 pt-6">
<div className="flex items-center gap-3">
<iconify-icon className="text-purple-400" icon="lucide:check" width="14"></iconify-icon>
<span className="text-xs text-white">Full Design System</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-purple-400" icon="lucide:check" width="14"></iconify-icon>
<span className="text-xs text-white">High-Speed Development</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-purple-400" icon="lucide:check" width="14"></iconify-icon>
<span className="text-xs text-white">Growth &amp; Analytics Setup</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y overflow-hidden bg-[#030304] border-white/5 relative" id="testimonials">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#030304] via-transparent to-[#030304] pointer-events-none z-10"></div>
<div className="max-w-7xl z-20 mr-auto ml-auto pt-24 pr-0 pb-24 pl-6 relative">
<div className="flex flex-col md:flex-row items-end justify-between pr-6 mb-16 gap-8">
<div>
<div className="flex items-center gap-3 mb-4">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-purple-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
</span>
<h2 className="text-[10px] font-mono uppercase tracking-widest text-purple-400">Feedback_Loop_v2.0</h2>
</div>
<h3 className="text-4xl md:text-5xl font-medium text-white tracking-tighter leading-none">
                        Founder Stories.
                    </h3>
</div>
<div className="hidden md:flex gap-4">
<div className="text-right">
<div className="text-[10px] font-mono text-zinc-500 uppercase">Retention</div>
<div className="text-white font-mono text-sm">98.5%</div>
</div>
<div className="w-px h-8 bg-white/10"></div>
<div className="text-right">
<div className="text-[10px] font-mono text-zinc-500 uppercase">Referrals</div>
<div className="text-white font-mono text-sm">Top 1%</div>
</div>
</div>
</div>
<div className="overflow-x-auto pb-12 -ml-1 pl-1 snap-x snap-mandatory no-scrollbar flex gap-6 pr-6">

<div className="min-w-[85vw] md:min-w-[600px] snap-center bg-[#050505] border border-white/10 rounded-xl overflow-hidden relative group hover:border-purple-500/40 transition-all duration-500 flex flex-col md:flex-row h-auto md:h-[340px]">
<div className="absolute inset-0 scanlines opacity-20 pointer-events-none z-0"></div>
<div className="p-8 flex flex-col justify-between w-full md:w-1/2 border-b md:border-b-0 md:border-r border-white/5 relative z-10 bg-black/20 backdrop-blur-sm">
<div className="">
<div className="text-purple-500 mb-6 opacity-50">
<iconify-icon icon="lucide:quote" width="24"></iconify-icon>
</div>
<p className="text-lg md:text-xl text-white font-light leading-relaxed tracking-tight">
                                "Opalwave didn't just build our app; they engineered our entire growth engine. The velocity of delivery was absolute magic."
                            </p>
</div>
<div className="pt-6 mt-6 border-t border-white/5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
<img alt="Alex Chen" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&amp;h=100&amp;fit=crop"/>
</div>
<div className="">
<div className="text-sm font-medium text-white">Alex Chen</div>
<div className="text-[10px] font-mono text-zinc-500 uppercase">CTO, Apex Financial</div>
</div>
</div>
</div>
</div>
<div className="w-full md:w-1/2 bg-[#020202] relative p-6 flex flex-col justify-between overflow-hidden">
<div className="flex justify-between items-center border-b border-white/5 pb-4 mb-4">
<span className="text-[10px] font-mono text-zinc-600">~/stats/performance</span>
<span className="flex gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
<span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
</span>
</div>
<div className="space-y-4 font-mono text-[10px] text-zinc-400">
<div className="flex justify-between items-center group/item">
<span>DEPLOY_TIME</span>
<div className="w-24 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
<div className="bg-purple-500 h-full w-[15%] group-hover:w-[10%] transition-all duration-1000"></div>
</div>
<span className="text-white w-8 text-right">&lt;2m</span>
</div>
<div className="flex justify-between items-center group/item">
<span>UPTIME</span>
<div className="w-24 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
<div className="bg-emerald-500 h-full w-[99.9%]"></div>
</div>
<span className="text-white w-8 text-right">99.9%</span>
</div>
<div className="p-3 bg-zinc-900/50 border border-white/5 rounded mt-4">
<div className="text-zinc-500 mb-1">Impact:</div>
<div className="text-white text-xs">"Reduced infra costs by 40% while doubling concurrent users."</div>
</div>
</div>
<div className="bg-white/5 border border-white/10 rounded p-3 mt-4 flex justify-between items-center">
<div className="text-[10px] font-mono text-zinc-400">RESULT</div>
<div className="text-sm font-mono text-emerald-400 font-semibold">Series B Secured</div>
</div>
</div>
</div>


</div>
</div>
</section>

<section className="overflow-hidden group/section bg-[#050505] border-white/5 border-t pt-24 pb-24 relative" id="contact">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-50 group-hover/section:opacity-70 transition-opacity duration-1000"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-900/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen opacity-50"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="relative overflow-hidden bg-[#080808]/80 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12 lg:p-16 shadow-2xl">
<div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl mix-blend-screen opacity-60"></div>
<div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl mix-blend-screen opacity-60"></div>
<div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
<div className="lg:col-span-2 space-y-10">
<div className="">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-purple-400">
<iconify-icon icon="lucide:aperture" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight">Opalwave Studio</h3>
</div>
<p className="text-zinc-400 text-sm leading-relaxed font-light">
                                We build ambitious products with small, senior teams. Tell us a bit about your project and we’ll get back within one business day.
                            </p>
</div>
<div className="space-y-8">
<div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/5 border border-emerald-500/20 text-emerald-400 px-3 py-1.5 text-xs font-mono tracking-wide w-fit">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
                                Accepting Projects Q1 2025
                            </div>
<div className="space-y-4">
<h4 className="text-white font-medium tracking-tight text-sm">Our Guarantee</h4>
<ul className="space-y-3 text-sm text-zinc-400 font-light">
<li className="flex items-start gap-3 group">
<div className="mt-0.5 text-purple-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:check-circle" width="16"></iconify-icon>
</div>
<span className="group-hover:text-zinc-300 transition-colors">Senior engineers and designers only — no handoffs, no fluff.</span>
</li>
<li className="flex items-start gap-3 group">
<div className="mt-0.5 text-purple-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:check-circle" width="16"></iconify-icon>
</div>
<span className="group-hover:text-zinc-300 transition-colors">Transparent weekly demos, metrics, and delivery plans.</span>
</li>
</ul>
</div>
<div className="flex flex-col gap-3 pt-6 border-t border-white/5">
<a className="inline-flex items-center gap-3 text-sm text-zinc-300 hover:text-white transition-colors group" href="mailto:hello@opalwave.com">
<div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-purple-500/20 group-hover:border-purple-500/30 group-hover:text-purple-300 transition-all">
<iconify-icon icon="lucide:mail" width="14"></iconify-icon>
</div>
                                    hello@opalwave.com
                                </a>
<a className="inline-flex items-center gap-3 text-sm text-zinc-300 hover:text-white transition-colors group" href="tel:+15550001234">
<div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-emerald-500/20 group-hover:border-emerald-500/30 group-hover:text-emerald-300 transition-all">
<iconify-icon icon="lucide:phone" width="14"></iconify-icon>
</div>
                                    +1 (555) 000-1234
                                </a>
</div>
</div>
</div>
<div className="lg:col-span-3">
<form className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#050505] p-6 md:p-8 rounded-2xl border border-white/5" id="contact-form">
<div className="sm:col-span-1 group/input">
<label className="block text-[10px] font-mono uppercase text-zinc-500 mb-2 group-focus-within/input:text-purple-400 transition-colors" htmlFor="name">Your name</label>
<input className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-3 rounded-lg text-sm text-white focus:outline-none focus:border-purple-500/50 focus:bg-purple-900/5 transition-all placeholder:text-zinc-700 focus:shadow-[0_0_15px_-3px_rgba(168,85,247,0.2)]" id="name" name="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="sm:col-span-1 group/input">
<label className="block text-[10px] font-mono uppercase text-zinc-500 mb-2 group-focus-within/input:text-purple-400 transition-colors" htmlFor="email">Email</label>
<input className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-3 rounded-lg text-sm text-white focus:outline-none focus:border-purple-500/50 focus:bg-purple-900/5 transition-all placeholder:text-zinc-700 focus:shadow-[0_0_15px_-3px_rgba(168,85,247,0.2)]" id="email" name="email" placeholder="jane@company.com" required="" type="email"/>
</div>
<div className="sm:col-span-1 group/input">
<label className="block text-[10px] font-mono uppercase text-zinc-500 mb-2 group-focus-within/input:text-purple-400 transition-colors" htmlFor="company">Company</label>
<input className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-3 rounded-lg text-sm text-white focus:outline-none focus:border-purple-500/50 focus:bg-purple-900/5 transition-all placeholder:text-zinc-700 focus:shadow-[0_0_15px_-3px_rgba(168,85,247,0.2)]" id="company" name="company" placeholder="Acme Inc." type="text"/>
</div>
<div className="sm:col-span-1 group/input">
<label className="block text-[10px] font-mono uppercase text-zinc-500 mb-2 group-focus-within/input:text-purple-400 transition-colors" htmlFor="project-type">Project type</label>
<div className="relative">
<select className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-3 rounded-lg text-sm text-zinc-300 focus:outline-none focus:border-purple-500/50 focus:bg-purple-900/5 transition-all appearance-none cursor-pointer" id="project-type" name="projectType">
<option className="bg-[#0a0a0a]" value="product">New product build</option>
<option className="bg-[#0a0a0a]" value="feature">Feature delivery</option>
<option className="bg-[#0a0a0a]" value="advisory">Advisory / audit</option>
<option className="bg-[#0a0a0a]" value="ai">AI integration</option>
</select>
<div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-600">
<iconify-icon icon="lucide:chevron-down" width="14"></iconify-icon>
</div>
</div>
</div>
<div className="sm:col-span-2 group/input">
<label className="block text-[10px] font-mono uppercase text-zinc-500 mb-2 group-focus-within/input:text-purple-400 transition-colors" htmlFor="message">What are you building?</label>
<textarea className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-3 rounded-lg text-sm text-white focus:outline-none focus:border-purple-500/50 focus:bg-purple-900/5 transition-all placeholder:text-zinc-700 resize-none focus:shadow-[0_0_15px_-3px_rgba(168,85,247,0.2)]" id="message" name="message" placeholder="A few sentences about your goals, timeline, and success metrics." rows="4"></textarea>
</div>
<div className="sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-2">
<div className="flex gap-3 items-center group cursor-pointer">
<div className="relative flex items-center">
<input className="peer h-4 w-4 appearance-none rounded border border-white/20 bg-white/5 checked:border-purple-500 checked:bg-purple-500 transition-colors cursor-pointer" id="nda" name="nda" type="checkbox"/>
<iconify-icon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" icon="lucide:check" width="10"></iconify-icon>
</div>
<label className="text-xs text-zinc-400 cursor-pointer select-none group-hover:text-zinc-300 transition-colors" htmlFor="nda">Please send an NDA</label>
</div>
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-zinc-200 transition-colors text-sm font-semibold rounded-lg px-8 py-3 shadow-lg shadow-white/5 hover:shadow-purple-500/20 group/btn" type="submit">
<span className="group-hover/btn:-translate-x-0.5 transition-transform">Send Request</span>
<iconify-icon className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform text-purple-600" icon="lucide:send" width="14"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#030304] py-16 border-t border-white/5 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6 group cursor-pointer">
<iconify-icon className="text-white group-hover:text-purple-400 transition-colors" icon="lucide:aperture" width="16"></iconify-icon>
<span className="text-sm font-bold text-white tracking-tight group-hover:text-purple-200 transition-colors">opalwave_</span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed max-w-sm">
                        A digital product studio helping startups and enterprise brands build faster, look better, and grow revenue.
                    </p>
</div>
<div className="">
<h4 className="text-white text-xs font-semibold mb-4 tracking-wide">STUDIO</h4>
<ul className="space-y-2 text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
<li className=""><a className="transition-colors hover:text-purple-400 flex items-center gap-2" href="#protocols"><span className="w-1 h-1 bg-zinc-800 rounded-full"></span> Services</a></li>
<li><a className="transition-colors hover:text-purple-400 flex items-center gap-2" href="#work"><span className="w-1 h-1 bg-zinc-800 rounded-full"></span> Work</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-semibold mb-4 tracking-wide">LEGAL</h4>
<ul className="space-y-2 text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
<li><a className="hover:text-zinc-300 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
</div></footer>
    </>
  );
}
