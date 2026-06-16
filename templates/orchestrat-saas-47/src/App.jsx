import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


      lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 opacity-30 brightness-50" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="relative w-full h-[900px] -z-10 bg-gradient-to-b from-purple-900/20 via-blue-900/30 to-black/40 brightness-50 saturate-50" data-alpha-mask="62" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 62%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 62%, transparent)'}}>
<div className="absolute w-full h-full left-0 top-0 -z-10 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20" data-us-project="MSvSkmJb9Ax55PeV6eku"></div>

</div></div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0A0A0B]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-sm">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 text-white font-medium hover:opacity-80 transition-opacity font-geist" href="#">
<i className="w-5 h-5 text-indigo-400" data-lucide="layers" strokeWidth="1.5"></i>
                    Orchestrator
                </a>
<div className="hidden md:flex items-center gap-6 text-neutral-400">
<a className="hover:text-white transition-colors font-geist" href="#">Product</a>
<a className="hover:text-white transition-colors font-geist" href="#">Documentation</a>
<a className="hover:text-white transition-colors font-geist" href="#">Pricing</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="text-neutral-400 hover:text-white transition-colors hidden sm:block font-geist" href="#">Log in</a>
<a className="bg-white text-black px-4 py-1.5 rounded-full font-medium hover:bg-neutral-200 transition-colors font-geist" href="#">Start Building</a>
</div>
</div>
</nav>
<main className="z-10 pt-32 pb-0 relative">

<section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
<div className="flex flex-col items-start z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-400 mb-8 backdrop-blur-sm font-geist">
<span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                    v2.0 is now live
                    <i className="w-3 h-3 ml-1" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
<h1 className="text-5xl md:text-7xl tracking-tight text-white mb-6 leading-[1.1] font-geist font-semibold">
                    Built by devs,<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-neutral-400 font-geist font-semibold">for devs.</span>
</h1>
<p className="text-neutral-400 mb-10 max-w-lg leading-relaxed font-geist">
                    Automate API orchestration with a declarative, code-first approach. Connect hundreds of services without the boilerplate.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-neutral-200 transition-colors group font-geist" href="#">
                        Read the Docs
                        <i className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="chevron-right" strokeWidth="1.5"></i>
</a>
<div className="w-full sm:w-auto flex items-center justify-between gap-4 bg-[#111113] border border-white/10 rounded-lg px-4 py-3 font-['JetBrains_Mono',_monospace] text-sm group cursor-copy hover:border-neutral-700 transition-colors">
<span className="text-neutral-500 font-geist">$</span>
<span className="text-neutral-300 font-geist">npm install orchestrator</span>
<button aria-label="Copy code" className="text-neutral-500 hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="copy" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[600px] z-10">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent blur-3xl rounded-full"></div>
<div className="absolute inset-4 bg-[#0D0D0F] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col">

<div className="flex items-center px-4 py-3 border-b border-white/5 bg-[#111113]">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-neutral-800"></div>
<div className="w-3 h-3 rounded-full bg-neutral-800"></div>
<div className="w-3 h-3 rounded-full bg-neutral-800"></div>
</div>
<div className="flex-1 text-center text-xs text-neutral-500 font-geist">
                            orchestrate.ts
                        </div>
</div>

<div className="flex-1 p-6 overflow-hidden bg-[#0D0D0F] font-['JetBrains_Mono',_monospace] text-sm leading-loose text-neutral-400">
<div className="flex">
<div className="flex flex-col text-neutral-700 select-none pr-4 text-right">
<span className="font-geist">1</span><span className="font-geist">2</span><span className="font-geist">3</span><span className="font-geist">4</span><span className="font-geist">5</span><span className="font-geist">6</span><span className="font-geist">7</span><span className="font-geist">8</span><span className="font-geist">9</span><span className="font-geist">10</span>
</div>
<div className="flex-1 overflow-x-auto">
<pre className=""><code className="font-geist"><span className="text-blue-500 font-geist">import</span> { Orchestrator } <span className="text-blue-500 font-geist">from</span> <span className="text-cyan-400 font-geist">'@orchestrator/core'</span>;

<span className="text-blue-500 font-geist">const</span> api = <span className="text-blue-500 font-geist">new</span> <span className="text-indigo-300 font-geist">Orchestrator</span>({
  <span className="text-neutral-300 font-geist">apiKey</span>: process.env.<span className="text-neutral-300 font-geist">ORCHESTRATOR_KEY</span>,
});

<span className="text-neutral-600 font-geist">// Define your harmony</span>
<span className="text-blue-500 font-geist">export const</span> <span className="text-neutral-400 font-geist">helloWorld</span> = api.<span className="text-neutral-400 font-geist">route</span>(<span className="text-cyan-400 font-geist">'/hello'</span>)
  .<span className="text-neutral-400 font-geist">use</span>(authMiddleware)
  .<span className="text-neutral-400 font-geist">fetch</span>(<span className="text-cyan-400 font-geist">'users/me'</span>);</code></pre>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y max-w-7xl border-white/5 mt-12 mr-auto ml-auto pt-12 pr-6 pb-12 pl-6">
<p className="text-center text-sm font-medium text-neutral-500 mb-8 uppercase tracking-widest font-geist">Trusted by engineering teams at</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale">
<div className="flex items-center gap-2 text-xl tracking-tight hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer font-geist font-semibold">
<i className="w-6 h-6" data-lucide="triangle" strokeWidth="1.5"></i> Vercel
                </div>
<div className="flex items-center gap-2 text-xl tracking-tight hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer font-geist font-semibold">
<i className="w-6 h-6 text-cyan-500" data-lucide="circle-dashed" strokeWidth="1.5"></i> Supabase
                </div>
<div className="flex items-center gap-2 text-xl tracking-tight hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer font-geist font-semibold">
<i className="w-6 h-6 text-indigo-500" data-lucide="layers" strokeWidth="1.5"></i> Stripe
                </div>
<div className="flex items-center gap-2 text-xl tracking-tight hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer font-geist font-semibold">
<i className="w-6 h-6 text-rose-500" data-lucide="hexagon" strokeWidth="1.5"></i> Linear
                </div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-32">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl tracking-tight text-white mb-4 font-geist font-semibold">Everything you need to ship faster.</h2>
<p className="text-neutral-400 max-w-2xl mx-auto font-geist">Complex orchestrations simplified into elegant primitives.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="col-span-1 bg-[#111113] border border-white/5 rounded-2xl p-8 flex flex-col hover:border-neutral-700 transition-colors duration-300 group">
<div className="mb-6 flex items-center justify-between">
<h3 className="text-xl tracking-tight text-white font-geist font-semibold">Command everything.</h3>
<i className="w-5 h-5 text-neutral-500 group-hover:text-indigo-400 transition-colors" data-lucide="command" strokeWidth="1.5"></i>
</div>
<p className="text-neutral-400 text-base mb-8 font-geist">Navigate, configure, and deploy without leaving your keyboard.</p>
<div className="mt-auto bg-[#0A0A0B] border border-white/10 rounded-xl overflow-hidden flex flex-col shadow-lg">
<div className="flex items-center gap-3 p-3 border-b border-white/5 text-sm text-neutral-400">
<i className="w-4 h-4" data-lucide="search" strokeWidth="1.5"></i>
<span className="font-geist">Search commands...</span>
<span className="ml-auto flex items-center gap-1 text-xs bg-white/5 px-1.5 py-0.5 rounded border border-white/10 font-geist">⌘K</span>
</div>
<div className="p-2 flex flex-col gap-1 text-sm">
<div className="flex items-center justify-between p-2 rounded-lg bg-indigo-500/10 text-indigo-300 cursor-pointer">
<span className="flex items-center gap-2 font-geist"><i className="w-4 h-4" data-lucide="zap" strokeWidth="1.5"></i> Deploy API</span>
<span className="text-xs font-geist">↵</span>
</div>
<div className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 text-neutral-300 cursor-pointer transition-colors">
<span className="flex items-center gap-2 font-geist"><i className="w-4 h-4 text-neutral-500" data-lucide="settings-2" strokeWidth="1.5"></i> View Logs</span>
</div>
</div>
</div>
</div>

<div className="col-span-1 bg-[#111113] border border-white/5 rounded-2xl p-8 flex flex-col hover:border-neutral-700 transition-colors duration-300 group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 mb-6">
<h3 className="text-xl tracking-tight text-white mb-2 font-geist font-semibold">Sub-millisecond latency.</h3>
<p className="text-neutral-400 text-base font-geist">Engineered in Rust for edge-native performance.</p>
</div>
<div className="mt-auto h-32 flex items-end justify-between gap-2 pt-8 relative z-10">

<div className="w-full bg-indigo-500/20 rounded-t-sm h-[30%] hover:bg-indigo-500/50 transition-colors cursor-pointer relative group/bar">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap font-medium font-geist">12ms</div>
</div>
<div className="w-full bg-indigo-500/20 rounded-t-sm h-[45%] hover:bg-indigo-500/50 transition-colors cursor-pointer"></div>
<div className="w-full bg-indigo-500/20 rounded-t-sm h-[25%] hover:bg-indigo-500/50 transition-colors cursor-pointer"></div>
<div className="w-full bg-indigo-500/40 rounded-t-sm h-[80%] hover:bg-indigo-500/80 transition-colors cursor-pointer"></div>
<div className="w-full bg-indigo-500/20 rounded-t-sm h-[50%] hover:bg-indigo-500/50 transition-colors cursor-pointer"></div>
<div className="w-full bg-indigo-500/20 rounded-t-sm h-[35%] hover:bg-indigo-500/50 transition-colors cursor-pointer"></div>
<div className="w-full bg-indigo-500/80 rounded-t-sm h-[95%] shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
</div>
</div>

<div className="col-span-1 bg-[#111113] border border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:border-neutral-700 transition-colors duration-300 group">
<div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-neutral-800 to-[#111113] border border-white/10 flex items-center justify-center mb-6 shadow-xl relative">
<div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-2xl group-hover:bg-indigo-500/30 transition-colors duration-500"></div>
<i className="w-8 h-8 text-indigo-400 relative z-10" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl tracking-tight text-white mb-2 font-geist font-semibold">Zero Config.</h3>
<p className="text-neutral-400 text-base font-geist">It just works. No massive YAML files or convoluted UI setups required.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 mb-8">
<i className="w-6 h-6 text-indigo-400" data-lucide="terminal-square" strokeWidth="1.5"></i>
</div>
<h2 className="text-3xl md:text-5xl tracking-tight text-white mb-6 font-geist font-semibold">Embrace the code-first workflow.</h2>
<p className="text-neutral-400 mb-8 leading-relaxed font-geist text-base">
                        Stop clicking through endless menus. Define your integrations, transformations, and routing logic entirely in code. Version control it, test it, and review it like any other feature.
                    </p>
<ul className="space-y-4 mb-10 text-base">
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-neutral-500 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-neutral-300 font-geist">Type-safe SDK with autocompletion.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-neutral-500 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-neutral-300 font-geist">Local development with live reloading.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-neutral-500 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-neutral-300 font-geist">Seamless CI/CD integration.</span>
</li>
</ul>
<a className="inline-flex items-center gap-2 text-white font-medium hover:text-indigo-400 transition-colors font-geist text-base" href="#">
                        Explore the documentation <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="order-1 lg:order-2 bg-[#0D0D0F] border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[500px]">

<div className="flex items-center px-4 py-2 border-b border-neutral-800 bg-[#111113]">
<div className="flex gap-2 mr-6">
<div className="w-3 h-3 rounded-full bg-neutral-700 hover:bg-rose-500 transition-colors"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700 hover:bg-indigo-500 transition-colors"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700 hover:bg-cyan-500 transition-colors"></div>
</div>
<div className="flex gap-4 text-xs font-['JetBrains_Mono',_monospace] text-neutral-500">
<div className="px-3 py-1 bg-[#0D0D0F] rounded text-neutral-300 border border-neutral-800 border-b-0 -mb-[9px] pb-3 z-10 relative font-geist">workflows.ts</div>
<div className="px-3 py-1 hover:text-neutral-300 cursor-pointer transition-colors font-geist">package.json</div>
</div>
</div>

<div className="flex flex-1 overflow-hidden">

<div className="w-48 border-r border-neutral-800 p-4 hidden sm:block bg-[#111113]">
<div className="text-xs font-semibold tracking-wider text-neutral-500 mb-3 font-geist">EXPLORER</div>
<div className="space-y-1 text-sm font-['JetBrains_Mono',_monospace]">
<div className="flex items-center gap-2 text-neutral-400 cursor-pointer hover:text-white transition-colors font-geist">
<i className="w-4 h-4 text-indigo-400" data-lucide="folder-open" strokeWidth="1.5"></i> src
                                </div>
<div className="flex items-center gap-2 text-neutral-300 ml-4 cursor-pointer bg-white/5 px-2 py-1 rounded font-geist">
<i className="w-4 h-4 text-neutral-500" data-lucide="file-code-2" strokeWidth="1.5"></i> workflows.ts
                                </div>
<div className="flex items-center gap-2 text-neutral-500 ml-4 cursor-pointer hover:text-white transition-colors px-2 py-1 font-geist">
<i className="w-4 h-4" data-lucide="file-json" strokeWidth="1.5"></i> config.json
                                </div>
</div>
</div>

<div className="flex-1 p-6 font-['JetBrains_Mono',_monospace] text-sm leading-relaxed overflow-y-auto">
<pre><code className="font-geist"><span className="text-neutral-500 font-geist">/**
 * Daily Sync Workflow
 * Orchestrates CRM data to analytics warehouse
 */</span>
<span className="text-blue-500 font-geist">import</span> { Workflow } <span className="text-blue-500 font-geist">from</span> <span className="text-cyan-400 font-geist">'@orchestrator/core'</span>;
<span className="text-blue-500 font-geist">import</span> { crm, warehouse } <span className="text-blue-500 font-geist">from</span> <span className="text-cyan-400 font-geist">'./integrations'</span>;

<span className="text-blue-500 font-geist">export default new</span> <span className="text-indigo-300 font-geist">Workflow</span>(<span className="text-cyan-400 font-geist">'daily-sync'</span>, {
  <span className="text-neutral-300 font-geist">trigger</span>: <span className="text-cyan-400 font-geist">'cron(0 0 * * *)'</span>,
  <span className="text-neutral-300 font-geist">handler</span>: <span className="text-blue-500 font-geist">async</span> (ctx) <span className="text-blue-500 font-geist">=&gt;</span> {
    <span className="text-blue-500 font-geist">const</span> users = <span className="text-blue-500 font-geist">await</span> crm.<span className="text-neutral-400 font-geist">getUsers</span>({ 
      <span className="text-neutral-300 font-geist">updatedAfter</span>: ctx.lastRun 
    });

    <span className="text-neutral-500 font-geist">// Transform data seamlessly</span>
    <span className="text-blue-500 font-geist">const</span> formatted = users.<span className="text-neutral-400 font-geist">map</span>(u <span className="text-blue-500 font-geist">=&gt;</span> ({
      <span className="text-neutral-300 font-geist">id</span>: u.id,
      <span className="text-neutral-300 font-geist">lifetimeValue</span>: u.ltv,
    }));

    <span className="text-blue-500 font-geist">await</span> warehouse.<span className="text-neutral-400 font-geist">batchInsert</span>(<span className="text-cyan-400 font-geist">'users'</span>, formatted);
    
    <span className="text-blue-500 font-geist">return</span> { <span className="text-neutral-300 font-geist">syncedCount</span>: users.length };
  }
});</code></pre>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-5xl z-10 mr-auto ml-auto pt-32 pr-6 pb-16 pl-6 relative">

<div className="flex flex-col items-center text-center mb-12">
<h2 className="text-5xl tracking-tight text-white mb-6 font-geist font-semibold">Pricing</h2>
<p className="text-lg text-neutral-400 max-w-xl font-geist leading-relaxed">
                    Use Orchestrator for free. Upgrade to add a custom domain,<br className="hidden md:block"/> access additional features, and increase limits.
                </p>
</div>

<div className="flex justify-center mb-16">
<div className="inline-flex bg-[#111113] border border-white/10 rounded-lg p-1">
<button className="bg-white text-black px-8 py-2 rounded text-sm font-medium font-geist">Personal</button>
<button className="text-neutral-400 px-8 py-2 rounded text-sm font-medium hover:text-white transition-colors font-geist">Business</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#0A0A0B] border border-white/10 rounded-2xl p-8 flex flex-col hover:border-white/20 transition-colors">
<div className="flex justify-between items-start mb-6">
<h3 className="text-2xl tracking-tight text-white font-geist font-semibold">Mini</h3>

<div className="flex items-center gap-2">
<span className="text-xs text-neutral-400 font-semibold tracking-wider font-geist uppercase">Yearly</span>
<div className="w-8 h-4 bg-[#0088FF] rounded-full relative flex items-center px-0.5 cursor-pointer">
<div className="w-3 h-3 bg-white rounded-full absolute right-0.5 shadow-sm"></div>
</div>
</div>
</div>
<div className="mb-8 font-geist text-base text-neutral-400">
<p>Landing pages</p>
<p>are <span className="text-white font-semibold">$5</span> /month</p>
</div>
<ul className="space-y-4 text-base text-neutral-200 font-geist mb-8 flex-1">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-white" data-lucide="check" strokeWidth="1.5"></i> 2 pages</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-white" data-lucide="check" strokeWidth="1.5"></i> 10 GB bandwidth</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-white" data-lucide="check" strokeWidth="1.5"></i> Custom domain</li>
</ul>
<button className="w-full py-3 px-4 bg-[#222222] hover:bg-[#333333] text-white text-center rounded-xl font-medium transition-colors font-geist">Subscribe</button>
</div>

<div className="bg-[#0A0A0B] border border-white/10 rounded-2xl p-8 flex flex-col hover:border-white/20 transition-colors">
<div className="flex justify-between items-start mb-6">
<h3 className="text-2xl tracking-tight text-white font-geist font-semibold">Basic</h3>
<div className="flex items-center gap-2">
<span className="text-xs text-neutral-400 font-semibold tracking-wider font-geist uppercase">Yearly</span>
<div className="w-8 h-4 bg-[#0088FF] rounded-full relative flex items-center px-0.5 cursor-pointer">
<div className="w-3 h-3 bg-white rounded-full absolute right-0.5 shadow-sm"></div>
</div>
</div>
</div>
<div className="mb-8 font-geist text-base text-neutral-400">
<p>Basic sites</p>
<p>are <span className="text-white font-semibold">$15</span> /month</p>
</div>
<ul className="space-y-4 text-base text-neutral-200 font-geist mb-8 flex-1">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-white" data-lucide="check" strokeWidth="1.5"></i> 1,000 pages</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-white" data-lucide="check" strokeWidth="1.5"></i> 50 GB bandwidth</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-white" data-lucide="check" strokeWidth="1.5"></i> Password protect</li>
</ul>
<button className="w-full py-3 px-4 bg-[#222222] hover:bg-[#333333] text-white text-center rounded-xl font-medium transition-colors font-geist">Subscribe</button>
</div>

<div className="bg-[#0D1524] border border-[#1A3050] rounded-2xl p-8 flex flex-col relative shadow-[0_0_40px_-10px_rgba(0,136,255,0.15)] hover:border-[#2A4B75] transition-colors">
<div className="flex justify-between items-start mb-6">
<div className="flex items-center gap-3">
<h3 className="text-2xl tracking-tight text-white font-geist font-semibold">Pro</h3>
<span className="bg-[#0088FF] text-white text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full font-geist">Popular</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-neutral-400 font-semibold tracking-wider font-geist uppercase">Yearly</span>
<div className="w-8 h-4 bg-[#0088FF] rounded-full relative flex items-center px-0.5 cursor-pointer">
<div className="w-3 h-3 bg-white rounded-full absolute right-0.5 shadow-sm"></div>
</div>
</div>
</div>
<div className="mb-8 font-geist text-base text-neutral-400">
<p>Growing sites</p>
<p>are <span className="text-white font-semibold">$30</span> /month</p>
</div>
<ul className="space-y-4 text-base text-neutral-200 font-geist mb-8 flex-1">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-white" data-lucide="check" strokeWidth="1.5"></i> 10,000 pages</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-white" data-lucide="check" strokeWidth="1.5"></i> 100 GB bandwidth</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-white" data-lucide="check" strokeWidth="1.5"></i> 10 CMS collections</li>
</ul>
<button className="w-full py-3 px-4 bg-[#0099FF] hover:bg-[#0077EE] text-white text-center rounded-xl font-medium transition-colors font-geist shadow-[0_0_20px_rgba(0,153,255,0.25)]">Subscribe</button>
</div>
</div>

<div className="mt-24">

<div className="">
<div className="flex items-center gap-3 mb-6">
<div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center shrink-0">
<i className="w-3.5 h-3.5 text-black" data-lucide="arrow-up" strokeWidth="2"></i>
</div>
<h4 className="text-xl tracking-tight text-white font-geist font-semibold">Publish</h4>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-white/5 pb-4 mb-4">
<div className="flex items-center gap-3 text-base text-white font-geist">
<i className="w-4 h-4 text-white shrink-0" data-lucide="check" strokeWidth="1.5"></i>
<span>Home <span className="text-neutral-500">+ 404 page</span></span>
</div>
<div className="flex items-center gap-3 text-base text-white font-geist">
<i className="w-4 h-4 text-white shrink-0" data-lucide="check" strokeWidth="1.5"></i>
<span className="">1,000 <span className="text-neutral-500 underline decoration-dashed underline-offset-4">pages</span></span>
</div>
<div className="flex items-center gap-3 text-base text-white font-geist">
<i className="w-4 h-4 text-white shrink-0" data-lucide="check" strokeWidth="1.5"></i>
<span>10,000 <span className="text-neutral-500 underline decoration-dashed underline-offset-4">pages</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-white/5 pb-4">
<div className="flex items-center gap-3 text-base text-neutral-500 font-geist">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-700 ml-1.5 shrink-0"></div>
<span className="opacity-50">CMS collections</span>
</div>
<div className="flex items-center gap-3 text-base text-white font-geist">
<i className="w-4 h-4 text-white shrink-0" data-lucide="check" strokeWidth="1.5"></i>
<span className="">2 <span className="text-neutral-500">CMS collections</span></span>
</div>
<div className="flex items-center gap-3 text-base text-white font-geist">
<i className="w-4 h-4 text-white shrink-0" data-lucide="check" strokeWidth="1.5"></i>
<span>10 <span className="text-neutral-500">CMS collections</span></span>
</div>
</div>
</div>

<div className="">
</div>
</div>
</section>

<section className="overflow-hidden w-full border-white/5 border-t mt-12 pt-32 pb-0 relative">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1800px] h-[500px] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#0066FF]/40 via-[#0066FF]/5 to-transparent pointer-events-none z-0 translate-y-1/3"></div>
<div className="absolute bottom-[-80px] left-0 w-full h-[200px] bg-[#0066FF]/20 blur-[100px] pointer-events-none z-0"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 pb-32">

<div className="flex flex-col items-start z-10">
<h2 className="text-5xl md:text-7xl tracking-tight text-white mb-6 leading-[1.1] font-geist font-semibold">
                        Build smarter,<br/>
                        ship faster.
                    </h2>
<p className="text-lg text-neutral-400 mb-10 max-w-lg leading-relaxed font-geist">
                        Get started with Orchestrator's API builder today. For seamless service migration and tailored support, explore enterprise.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto flex items-center justify-center bg-white text-black px-6 py-3.5 rounded-xl font-medium hover:bg-neutral-200 transition-colors font-geist text-base" href="#">
                            Sign up for free
                        </a>
<a className="w-full sm:w-auto flex items-center justify-center bg-[#16181D] text-white px-6 py-3.5 rounded-xl font-medium hover:bg-[#20232A] transition-colors font-geist text-base border border-white/5" href="#">
                            Explore Enterprise
                        </a>
</div>
</div>

<div className="relative w-full h-[450px] lg:h-[550px] z-10 hidden md:block">

<div className="absolute -left-12 top-[25%] flex flex-col items-start z-30 drop-shadow-2xl animate-pulse">
<svg className="text-blue-600 fill-current -rotate-12" fill="none" height="28" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4L9.82 21.46C9.94936 21.8482 10.2104 22.1673 10.5583 22.3639C10.9062 22.5606 11.3195 22.6225 11.725 22.5385C12.1305 22.4544 12.5034 22.23 12.7831 21.9022C13.0628 21.5744 13.2323 21.1627 13.264 20.735L13.882 13.882L20.735 13.264C21.1627 13.2323 21.5744 13.0628 21.9022 12.7831C22.23 12.5034 22.4544 12.1305 22.5385 11.725C22.6225 11.3195 22.5606 10.9062 22.3639 10.5583C22.1673 10.2104 21.8482 9.94936 21.46 9.82L4 4Z"></path>
</svg>
<div className="bg-blue-600 text-white text-xs font-medium px-2.5 py-1 rounded-full mt-1 ml-4 font-geist shadow-lg">Claudia</div>
</div>

<div className="absolute right-[5%] top-[45%] flex flex-col items-start z-30 drop-shadow-2xl animate-pulse" style={{animationDelay: '1.5s'}}>
<svg className="text-[#00BFFF] fill-current rotate-[35deg]" fill="none" height="28" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4L9.82 21.46C9.94936 21.8482 10.2104 22.1673 10.5583 22.3639C10.9062 22.5606 11.3195 22.6225 11.725 22.5385C12.1305 22.4544 12.5034 22.23 12.7831 21.9022C13.0628 21.5744 13.2323 21.1627 13.264 20.735L13.882 13.882L20.735 13.264C21.1627 13.2323 21.5744 13.0628 21.9022 12.7831C22.23 12.5034 22.4544 12.1305 22.5385 11.725C22.6225 11.3195 22.5606 10.9062 22.3639 10.5583C22.1673 10.2104 21.8482 9.94936 21.46 9.82L4 4Z"></path>
</svg>
<div className="bg-[#00BFFF] text-white text-xs font-medium px-2.5 py-1 rounded-full mt-1 ml-4 font-geist shadow-lg">Alex</div>
</div>

<div className="absolute inset-0 bg-[#0F1115] border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col transform perspective-[1200px] rotate-y-[-8deg] rotate-x-[3deg] scale-[1.02] origin-right ml-12">

<div className="h-12 border-b border-white/5 bg-[#16181D] flex items-center px-4 justify-between">
<div className="flex items-center gap-5 text-xs font-geist text-neutral-400">
<div className="bg-white/10 p-1.5 rounded"><i className="w-3.5 h-3.5 text-white" data-lucide="chevron-down" strokeWidth="1.5"></i></div>
<div className="flex items-center gap-1.5 hover:text-white cursor-pointer"><i className="w-3.5 h-3.5" data-lucide="plus-square" strokeWidth="1.5"></i> Insert</div>
<div className="flex items-center gap-1.5 hover:text-white cursor-pointer"><i className="w-3.5 h-3.5" data-lucide="layout" strokeWidth="1.5"></i> Layout</div>
<div className="flex items-center gap-1.5 hover:text-white cursor-pointer"><i className="w-3.5 h-3.5" data-lucide="type" strokeWidth="1.5"></i> Text</div>
</div>
<div className="text-xs font-geist text-white font-medium tracking-wide">orchestrator.com</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center overflow-hidden">
<div className="w-full h-full bg-gradient-to-tr from-blue-500 to-purple-500 opacity-80"></div>
</div>
<div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded text-xs text-white font-geist cursor-pointer hover:bg-white/10 transition-colors">Invite</div>
</div>
</div>

<div className="flex-1 flex overflow-hidden">

<div className="w-64 border-r border-white/5 bg-[#16181D] flex flex-col">
<div className="p-2 flex gap-1 border-b border-white/5">
<div className="flex-1 text-center py-1 bg-white/5 rounded text-[11px] text-white font-geist cursor-pointer">Pages</div>
<div className="flex-1 text-center py-1 bg-white/10 rounded text-[11px] text-white font-geist shadow-sm cursor-pointer">Layers</div>
<div className="flex-1 text-center py-1 hover:bg-white/5 rounded text-[11px] text-neutral-400 font-geist cursor-pointer transition-colors">Assets</div>
</div>
<div className="p-4 space-y-1 overflow-y-auto flex-1">
<div className="flex items-center justify-between text-xs font-geist px-2 py-1.5 hover:bg-white/5 rounded group text-neutral-300 cursor-pointer">
<div className="flex items-center gap-2"><i className="w-3.5 h-3.5 text-neutral-500" data-lucide="monitor" strokeWidth="1.5"></i> Desktop</div>
<span className="text-blue-400 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">Primary</span>
</div>
<div className="pl-4 space-y-1">
<div className="flex items-center gap-2 text-xs font-geist px-2 py-1.5 hover:bg-white/5 rounded text-neutral-300 cursor-pointer">
<i className="w-3.5 h-3.5 text-neutral-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
<i className="w-3.5 h-3.5 text-indigo-400" data-lucide="layout-panel-top" strokeWidth="1.5"></i>
                                            Hero
                                        </div>
<div className="pl-6 space-y-1">
<div className="flex items-center gap-2 text-xs font-geist px-2 py-1.5 bg-blue-600 rounded text-white shadow-sm cursor-pointer">
<i className="w-3.5 h-3.5 text-white/80" data-lucide="type" strokeWidth="1.5"></i>
                                                Header
                                            </div>
<div className="flex items-center gap-2 text-xs font-geist px-2 py-1.5 hover:bg-white/5 rounded text-neutral-400 cursor-pointer transition-colors">
<i className="w-3.5 h-3.5 text-neutral-500" data-lucide="type" strokeWidth="1.5"></i>
                                                Tagline
                                            </div>
<div className="flex items-center gap-2 text-xs font-geist px-2 py-1.5 hover:bg-white/5 rounded text-neutral-400 cursor-pointer transition-colors">
<i className="w-3.5 h-3.5 text-neutral-500" data-lucide="square-stack" strokeWidth="1.5"></i>
                                                Buttons
                                            </div>
</div>
<div className="flex items-center gap-2 text-xs font-geist px-2 py-1.5 hover:bg-white/5 rounded text-neutral-400 cursor-pointer transition-colors mt-2">
<i className="w-3.5 h-3.5 text-neutral-600" data-lucide="chevron-right" strokeWidth="1.5"></i>
<i className="w-3.5 h-3.5 text-neutral-500" data-lucide="layout-grid" strokeWidth="1.5"></i>
                                            Features
                                        </div>
</div>
</div>
</div>

<div className="flex-1 bg-[#0A0A0B] flex items-center justify-center p-8 relative overflow-hidden">

<div className="w-full max-w-md bg-[#111113] border border-white/5 rounded-xl shadow-2xl overflow-hidden flex flex-col">
<div className="h-10 border-b border-white/5 flex items-center px-4 justify-between bg-[#16181D]">
<div className="flex items-center gap-2 text-[11px] text-neutral-500 font-geist">
<i className="w-3 h-3" data-lucide="play" strokeWidth="1.5"></i> Desktop · 1200
                                        </div>
</div>
<div className="px-8 py-12 text-center relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150px] bg-indigo-500/10 blur-[50px] pointer-events-none rounded-full"></div>
<h4 className="text-2xl text-white font-semibold font-geist tracking-tight mb-3 relative z-10 leading-tight">Build smarter</h4>
<p className="text-xs text-neutral-400 mb-6 font-geist relative z-10">Effortless API orchestration and management.</p>
<div className="inline-flex gap-3 relative z-10">
<div className="px-4 py-1.5 bg-blue-600 text-xs text-white rounded font-geist font-medium shadow-sm">Get started</div>
<div className="px-4 py-1.5 bg-white/5 border border-white/10 text-xs text-white rounded font-geist font-medium">Contact</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[#0A0A0B] z-20 pt-16 pb-8 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-sm">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 text-white font-medium mb-6 font-geist" href="#">
<i className="w-5 h-5 text-indigo-400" data-lucide="layers" strokeWidth="1.5"></i>
                        Orchestrator
                    </a>
<p className="text-neutral-500 text-xs font-geist">The developer-first API orchestration platform.</p>
</div>
<div>
<h4 className="text-white font-medium mb-4 font-geist">Product</h4>
<ul className="space-y-3 text-neutral-400">
<li><a className="hover:text-white transition-colors font-geist" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 font-geist">Resources</h4>
<ul className="space-y-3 text-neutral-400">
<li><a className="hover:text-white transition-colors font-geist" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">API Reference</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 font-geist">Company</h4>
<ul className="space-y-3 text-neutral-400">
<li><a className="hover:text-white transition-colors font-geist" href="#">About</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Legal</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
<p className="text-neutral-500 text-xs font-geist">© 2024 Orchestrator Inc. All rights reserved.</p>
<div className="flex items-center gap-2 text-xs text-neutral-400 hover:text-neutral-300 cursor-pointer transition-colors px-3 py-1.5 rounded-full hover:bg-white/5 font-geist">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                    System Status: All Systems Operational
                </div>
</div>
</div>
</footer>


    </>
  );
}
