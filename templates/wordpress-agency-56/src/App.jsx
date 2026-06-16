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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-50 pointer-events-none opacity-[0.025] mix-blend-screen noise-bg"></div>

<div className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern h-[120vh]"></div>
<div className="fixed top-0 inset-x-0 h-screen z-0 pointer-events-none ambient-light"></div>
<main className="relative z-10 flex-grow">

<section className="pt-24 pb-20 md:pt-32 md:pb-32 px-6 relative">
<div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

<div className="w-full lg:w-1/2 text-left">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 mb-8 text-sm font-medium text-indigo-200 uppercase tracking-widest backdrop-blur-md shadow-[0_0_20px_rgba(99,102,241,0.15)] w-fit">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
</span>
                        New: Performance Architecture Framework
                    </div>
<h1 className="text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tighter text-white mb-8 leading-[1.05]">
                        Custom WordPress engineering, <br className="hidden xl:block"/> built for 
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-neutral-500">
                            scale.
                        </span>
</h1>
<p className="text-xl md:text-2xl lg:text-3xl max-w-2xl mb-6 text-neutral-400 font-normal leading-relaxed">
                        Frontend, backend, headless architecture, and plugin development — fully tailored WordPress solutions designed for performance and growth.
                    </p>
<p className="text-base md:text-lg max-w-2xl mb-12 text-neutral-500 font-normal leading-relaxed">
                        We go beyond traditional WordPress. From fully custom builds to headless architectures, we create fast, scalable, and conversion-focused platforms tailored to your business.
                    </p>

<div className="flex flex-col sm:flex-row items-center justify-start gap-4">
<a className="w-full sm:w-auto bg-white text-black text-lg font-medium px-8 py-4 rounded-full hover:bg-neutral-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2 group" href="#cta">
                            Get Your Free Audit
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-full sm:w-auto text-white text-lg font-medium px-8 py-4 rounded-full border border-white/10 hover:bg-white/[0.05] hover:border-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-sm" href="#results">
                            View Our Work
                        </a>
</div>
</div>

<div className="w-full lg:w-1/2 relative perspective-1000">
<div className="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative w-full aspect-[16/10] bg-black/60 backdrop-blur-2xl border border-white/[0.08] rounded-[2rem] shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden group cursor-pointer hover:border-white/20 transition-all duration-700 pulse-border-active hover:scale-[1.02]">
<img alt="Dashboard Preview" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-all duration-700 group-hover:scale-105 transform" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10"></div>
<div className="absolute top-6 left-6 z-10">
<div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5 flex items-center gap-2.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.6)]"></div>
<span className="text-sm font-semibold text-white tracking-widest uppercase">System Overview</span>
</div>
</div>
<div className="absolute inset-0 flex items-center justify-center z-10">
<div className="w-24 h-24 rounded-full bg-indigo-500/20 backdrop-blur-xl border border-indigo-500/30 flex items-center justify-center group-hover:bg-indigo-500/40 group-hover:scale-110 transition-all duration-500 shadow-[0_0_50px_rgba(99,102,241,0.4)]">
<div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-2xl">
<iconify-icon className="text-indigo-600 text-3xl ml-1" icon="solar:play-bold"></iconify-icon>
</div>
</div>
</div>
<div className="absolute bottom-0 inset-x-0 p-6 z-10 bg-gradient-to-t from-black/80 to-transparent">
<div className="w-full bg-white/20 rounded-full h-1.5 mb-5 backdrop-blur-sm relative overflow-hidden group/bar">
<div className="bg-indigo-500 h-full w-[35%] relative shadow-[0_0_15px_rgba(99,102,241,0.6)]">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full opacity-0 group-hover/bar:opacity-100 transition-opacity"></div>
</div>
</div>
<div className="flex justify-between items-center text-white">
<div className="flex items-center gap-5">
<iconify-icon className="text-2xl hover:text-indigo-400 transition-colors" icon="solar:pause-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-2xl hover:text-indigo-400 transition-colors" icon="solar:volume-loud-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-neutral-300 font-mono tracking-tight ml-2">04:12 / 09:35</span>
</div>
<div className="flex items-center gap-5">
<span className="text-sm font-semibold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors">HD</span>
<iconify-icon className="text-2xl hover:text-indigo-400 transition-colors" icon="solar:settings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-2xl hover:text-indigo-400 transition-colors" icon="solar:full-screen-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/[0.02] bg-black/20 backdrop-blur-md relative z-10">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs md:text-sm font-medium text-neutral-500 uppercase tracking-widest mb-8">Built for businesses that demand flexibility, performance, and control.</p>
<div className="flex flex-wrap justify-between items-center gap-8 md:gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700 mask-edges overflow-hidden px-4">
<span className="text-xl md:text-2xl font-semibold tracking-tighter text-white">FINTECH</span>
<span className="text-xl md:text-2xl font-semibold tracking-tighter text-white">NEXUS</span>
<span className="text-xl md:text-2xl font-semibold tracking-tighter text-white">AURORA</span>
<span className="text-xl md:text-2xl font-semibold tracking-tighter text-white hidden sm:block">VERTEX</span>
<span className="text-xl md:text-2xl font-semibold tracking-tighter text-white hidden sm:block">QUANTUM</span>
<span className="text-xl md:text-2xl font-semibold tracking-tighter text-white hidden lg:block">ELEVATE</span>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10" id="results">
<div className="max-w-6xl mx-auto">
<div className="mb-16 text-center max-w-3xl mx-auto">
<div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 mb-5 text-sm font-medium text-indigo-400 uppercase tracking-widest">
                        Verified Outcomes
                    </div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-6">
                        Engineered for measurable performance.
                    </h2>
<p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                        Every build is optimized for speed, scalability, and conversions — from frontend to backend.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-10 rounded-3xl bg-white/[0.01] border border-white/[0.05] hover:bg-white/[0.02] hover:border-white/10 transition-all duration-300">
<div className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-2">+142%</div>
<div className="text-lg text-indigo-400 font-medium tracking-tight">Increase in lead generation</div>
</div>
<div className="p-10 rounded-3xl bg-white/[0.01] border border-white/[0.05] hover:bg-white/[0.02] hover:border-white/10 transition-all duration-300 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-2">-64%</div>
<div className="text-lg text-indigo-400 font-medium tracking-tight">Faster load times &amp; reduced bounce rates</div>
</div>
</div>
<div className="p-10 rounded-3xl bg-white/[0.01] border border-white/[0.05] hover:bg-white/[0.02] hover:border-white/10 transition-all duration-300">
<div className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-2">3.8x</div>
<div className="text-lg text-indigo-400 font-medium tracking-tight">Higher conversion performance</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10 border-t border-white/[0.02] bg-black/40" id="problem">
<div className="max-w-6xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-6">
                        Where traditional WordPress falls short.
                    </h2>
<p className="text-neutral-400 max-w-2xl text-base md:text-lg leading-relaxed">
                        Most WordPress websites are limited by outdated approaches — holding back performance and scalability.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 p-10 rounded-3xl bg-white/[0.01] border border-white/[0.05] hover:bg-white/[0.02] hover:border-white/10 transition-all duration-300 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex flex-col h-full justify-between relative z-10">
<div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.05] text-neutral-300 flex items-center justify-center mb-16">
<iconify-icon className="text-3xl" icon="solar:ruler-cross-pen-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium text-xl md:text-2xl tracking-tight mb-3">Theme &amp; Builder Limitations</h3>
<p className="text-base text-neutral-400 leading-relaxed max-w-lg">Pre-built themes restrict flexibility and add unnecessary bloat.</p>
</div>
</div>
</div>

<div className="p-10 rounded-3xl bg-white/[0.01] border border-white/[0.05] hover:bg-white/[0.02] hover:border-white/10 transition-all duration-300 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.05] text-neutral-300 flex items-center justify-center mb-10">
<iconify-icon className="text-2xl" icon="solar:plug-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-white font-medium text-lg md:text-xl tracking-tight mb-3">Plugin Dependency</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Stacking plugins leads to conflicts, security risks, and slow performance.</p>
</div>

<div className="p-10 rounded-3xl bg-white/[0.01] border border-white/[0.05] hover:bg-white/[0.02] hover:border-white/10 transition-all duration-300 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.05] text-neutral-300 flex items-center justify-center mb-10">
<iconify-icon className="text-2xl" icon="solar:server-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-white font-medium text-lg md:text-xl tracking-tight mb-3">Monolithic Architecture</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Traditional setups limit scalability and modern frontend capabilities.</p>
</div>

<div className="md:col-span-2 p-10 rounded-3xl bg-white/[0.01] border border-white/[0.05] hover:bg-white/[0.02] hover:border-white/10 transition-all duration-300 flex flex-col md:flex-row items-center gap-10 group">
<div className="flex-grow">
<div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-red-500/10 border border-red-500/20 mb-5 text-sm font-medium text-red-400 uppercase tracking-widest">
                                The Result
                            </div>
<h3 className="text-white font-medium text-xl md:text-2xl tracking-tight mb-3">Poor Performance at Scale</h3>
<p className="text-base text-neutral-400 leading-relaxed max-w-lg">As traffic grows, poorly structured sites struggle to keep up.</p>
</div>
<div className="w-full md:w-56 h-40 rounded-2xl bg-black border border-white/[0.05] relative overflow-hidden flex items-end p-5">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-500/10 via-transparent to-transparent"></div>
<div className="w-full flex items-end gap-2 h-full opacity-50 group-hover:opacity-100 transition-opacity">
<div className="w-full bg-white/10 rounded-t h-[80%]"></div>
<div className="w-full bg-white/10 rounded-t h-[60%]"></div>
<div className="w-full bg-white/10 rounded-t h-[40%]"></div>
<div className="w-full bg-red-500/50 rounded-t h-[20%]"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-y border-white/[0.02] bg-black relative z-10 overflow-hidden" id="services">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-indigo-500/10 blur-[80px] pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="relative order-2 lg:order-1">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent opacity-30 rounded-[2rem] blur-2xl"></div>
<div className="rounded-[2rem] border border-white/[0.08] bg-[#0a0a0a] p-2 shadow-2xl relative z-10 backdrop-blur-xl">
<div className="rounded-[1.5rem] border border-white/[0.04] bg-[#111] p-8 relative overflow-hidden">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="absolute -inset-x-20 top-0 h-40 bg-gradient-to-b from-white/[0.02] to-transparent transform -skew-y-6"></div>
<div className="flex items-center gap-2 mb-8 border-b border-white/[0.05] pb-5">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-white/10"></div>
<div className="w-3 h-3 rounded-full bg-white/10"></div>
<div className="w-3 h-3 rounded-full bg-white/10"></div>
</div>
<div className="ml-4 px-3 py-1.5 rounded bg-white/[0.03] text-sm text-neutral-500 font-mono">webbuggs/core-engine</div>
</div>
<div className="space-y-4 font-mono text-sm text-neutral-400">
<div className="flex"><span className="text-indigo-400 mr-5">01</span><span>import { optimizeRoute } from '@webbuggs/core';</span></div>
<div className="flex"><span className="text-indigo-400 mr-5">02</span><span>import { loadAssets } from '@webbuggs/speed';</span></div>
<div className="flex"><span className="text-neutral-600 mr-5">03</span></div>
<div className="flex"><span className="text-indigo-400 mr-5">04</span><span className="text-purple-400">const</span> <span className="text-blue-300">initEngine</span> = () =&gt; {</div>
<div className="flex"><span className="text-indigo-400 mr-5">05</span><span className="ml-6">optimizeRoute({ prefetch: <span className="text-orange-300">true</span> });</span></div>
<div className="flex"><span className="text-indigo-400 mr-5">06</span><span className="ml-6">loadAssets({ strategy: <span className="text-green-300">'lazy'</span> });</span></div>
<div className="flex"><span className="text-indigo-400 mr-5">07</span><span className="ml-6 text-neutral-500">// Ensures 99/100 Lighthouse score</span></div>
<div className="flex"><span className="text-indigo-400 mr-5">08</span>};</div>
<div className="flex"><span className="text-neutral-600 mr-5">09</span></div>
<div className="flex animate-pulse"><span className="text-indigo-400 mr-5">10</span><span className="text-white">_</span></div>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-6">
                            Advanced WordPress development, without limitations.
                        </h2>
<p className="text-neutral-400 mb-12 text-base md:text-lg leading-relaxed max-w-lg">
                            We provide full-stack WordPress development — including modern headless architecture — to give you complete control, flexibility, and performance.
                        </p>
<div className="space-y-8">
<div className="group cursor-default">
<h3 className="text-white text-lg font-medium mb-3 tracking-tight flex items-center gap-3 group-hover:text-indigo-300 transition-colors">
<iconify-icon className="text-xl text-neutral-500 group-hover:text-indigo-400 transition-colors" icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                    Frontend Development
                                </h3>
<p className="text-sm md:text-base text-neutral-500 pl-8 border-l-2 border-white/5 group-hover:border-indigo-500/30 transition-colors">Modern, fast, and conversion-focused interfaces. Pixel-perfect custom UI, mobile-first responsive builds, and optimized, lightweight code built for performance and UX.</p>
</div>
<div className="group cursor-default">
<h3 className="text-white text-lg font-medium mb-3 tracking-tight flex items-center gap-3 group-hover:text-indigo-300 transition-colors">
<iconify-icon className="text-xl text-neutral-500 group-hover:text-indigo-400 transition-colors" icon="solar:code-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                    Backend Development
                                </h3>
<p className="text-sm md:text-base text-neutral-500 pl-8 border-l-2 border-white/5 group-hover:border-indigo-500/30 transition-colors">Scalable and secure WordPress architecture. Custom theme development, database and performance optimization, API integrations, and clean backend systems.</p>
</div>
<div className="group cursor-default">
<h3 className="text-white text-lg font-medium mb-3 tracking-tight flex items-center gap-3 group-hover:text-indigo-300 transition-colors">
<iconify-icon className="text-xl text-neutral-500 group-hover:text-indigo-400 transition-colors" icon="solar:bolt-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                    Headless WordPress Development
                                </h3>
<p className="text-sm md:text-base text-neutral-500 pl-8 border-l-2 border-white/5 group-hover:border-indigo-500/30 transition-colors">Decoupled architecture for maximum performance. WordPress as a backend CMS, modern frontend frameworks, faster load times, ideal for high-traffic platforms.</p>
</div>
<div className="group cursor-default">
<h3 className="text-white text-lg font-medium mb-3 tracking-tight flex items-center gap-3 group-hover:text-indigo-300 transition-colors">
<iconify-icon className="text-xl text-neutral-500 group-hover:text-indigo-400 transition-colors" icon="solar:box-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                    Custom Plugin Development
                                </h3>
<p className="text-sm md:text-base text-neutral-500 pl-8 border-l-2 border-white/5 group-hover:border-indigo-500/30 transition-colors">Extend functionality beyond standard WordPress. Fully custom plugins, advanced integrations, automation &amp; workflow solutions, and performance-optimized features.</p>
</div>
<div className="group cursor-default">
<h3 className="text-white text-lg font-medium mb-3 tracking-tight flex items-center gap-3 group-hover:text-indigo-300 transition-colors">
<iconify-icon className="text-xl text-neutral-500 group-hover:text-indigo-400 transition-colors" icon="solar:layers-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                    Full Website Customization
                                </h3>
<p className="text-sm md:text-base text-neutral-500 pl-8 border-l-2 border-white/5 group-hover:border-indigo-500/30 transition-colors">Completely tailored to your business needs. No templates or limitations, built around your workflows, scalable and future-ready with an easy-to-manage CMS experience.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/[0.02] bg-white/[0.01] px-6 relative z-10">
<div className="max-w-7xl mx-auto">
<div className="mb-14 text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-6">A structured approach to scalable development.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-black border border-white/[0.05] rounded-3xl p-8 hover:border-white/10 transition-colors relative">
<div className="text-6xl font-semibold text-white/5 absolute top-6 right-6 pointer-events-none">01</div>
<h4 className="text-white text-lg font-medium mb-4 tracking-tight mt-4">Strategy &amp; Architecture</h4>
<p className="text-sm text-neutral-500 mb-2 leading-relaxed">We define whether your project requires traditional or headless WordPress architecture.</p>
</div>

<div className="bg-black border border-indigo-500/20 rounded-3xl p-8 hover:border-indigo-500/40 transition-colors relative shadow-[0_0_30px_rgba(99,102,241,0.05)]">
<div className="text-6xl font-semibold text-indigo-500/5 absolute top-6 right-6 pointer-events-none">02</div>
<h4 className="text-white text-lg font-medium mb-4 tracking-tight mt-4">Custom Development</h4>
<p className="text-sm text-neutral-500 mb-2 leading-relaxed">Frontend, backend, and integrations are built with performance-first principles.</p>
</div>

<div className="bg-black border border-white/[0.05] rounded-3xl p-8 hover:border-white/10 transition-colors relative">
<div className="text-6xl font-semibold text-white/5 absolute top-6 right-6 pointer-events-none">03</div>
<h4 className="text-white text-lg font-medium mb-4 tracking-tight mt-4">Testing &amp; Optimization</h4>
<p className="text-sm text-neutral-500 mb-2 leading-relaxed">We ensure speed, stability, and seamless performance across all devices.</p>
</div>

<div className="bg-black border border-white/[0.05] rounded-3xl p-8 hover:border-white/10 transition-colors relative">
<div className="text-6xl font-semibold text-white/5 absolute top-6 right-6 pointer-events-none">04</div>
<h4 className="text-white text-lg font-medium mb-4 tracking-tight mt-4">Launch &amp; Scale</h4>
<p className="text-sm text-neutral-500 mb-2 leading-relaxed">Deployment with a foundation ready for growth, traffic, and future expansion.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative z-10" id="pricing">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-24">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-6">Solutions tailored to your growth stage.</h2>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="border border-white/[0.05] rounded-[2rem] p-10 md:p-12 bg-white/[0.01] flex flex-col hover:border-white/10 transition-colors">
<h3 className="text-lg md:text-xl font-medium text-neutral-300 tracking-tight mb-3">Custom WordPress Build</h3>
<p className="text-sm text-neutral-500 mb-10 max-w-[240px]">For businesses needing a powerful, flexible website</p>
<ul className="space-y-5 text-sm text-neutral-400 flex-grow mb-12 mt-6">
<li className="flex items-center gap-4">
<div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                                Fully custom frontend &amp; backend
                            </li>
<li className="flex items-center gap-4">
<div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                                Performance optimization
                            </li>
<li className="flex items-center gap-4">
<div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                                SEO-ready architecture
                            </li>
<li className="flex items-center gap-4">
<div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                                Scalable foundation
                            </li>
</ul>
<a className="w-full bg-white/[0.03] text-white border border-white/10 text-sm font-medium px-5 py-4 rounded-xl hover:bg-white/10 transition-colors text-center" href="#cta">
                            Request a Quote
                        </a>
</div>

<div className="border border-indigo-500/30 rounded-[2rem] p-10 md:p-12 bg-gradient-to-b from-indigo-500/[0.05] to-transparent flex flex-col relative shadow-[0_0_80px_rgba(99,102,241,0.07)]">
<div className="absolute -top-4 left-10 bg-indigo-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                            Core System
                        </div>
<h3 className="text-lg md:text-xl font-medium text-white tracking-tight mb-3">Headless / Advanced Development</h3>
<p className="text-sm text-neutral-400 mb-10 max-w-[240px]">For high-growth and performance-driven platforms</p>
<ul className="space-y-5 text-sm text-neutral-300 flex-grow mb-12 mt-6">
<li className="flex items-center gap-4">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                                Headless WordPress architecture
                            </li>
<li className="flex items-center gap-4">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                                API-driven development
                            </li>
<li className="flex items-center gap-4">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                                Custom plugins &amp; integrations
                            </li>
<li className="flex items-center gap-4">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                                High-performance frontend frameworks
                            </li>
<li className="flex items-center gap-4">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                                Built for scale and speed
                            </li>
</ul>
<a className="w-full bg-white text-black text-base font-medium px-5 py-4 rounded-xl hover:bg-neutral-200 transition-colors text-center shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#cta">
                            Start Your Project
                        </a>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/[0.02] bg-black/40 px-6 relative z-10">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-4">Technical clarity. No surprises.</h2>
</div>
<div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
<div>
<h4 className="text-white text-base md:text-lg font-medium mb-3">Do you build headless WordPress websites?</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Yes — we specialize in headless WordPress for projects that require high performance, scalability, and modern frontend frameworks.</p>
</div>
<div>
<h4 className="text-white text-base md:text-lg font-medium mb-3">When should I choose headless WordPress?</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Headless is ideal for high-traffic sites, SaaS platforms, or projects needing advanced frontend performance and flexibility.</p>
</div>
<div>
<h4 className="text-white text-base md:text-lg font-medium mb-3">Do you still offer traditional WordPress builds?</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Absolutely — we recommend the best approach based on your business needs.</p>
</div>
<div>
<h4 className="text-white text-base md:text-lg font-medium mb-3">Can you upgrade my existing site to headless?</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Yes — we can migrate and restructure your current website into a headless architecture.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative z-10" id="cta">
<div className="max-w-4xl mx-auto border border-white/[0.05] rounded-[2.5rem] p-12 md:p-24 bg-gradient-to-b from-white/[0.02] to-transparent relative overflow-hidden text-center">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[200px] bg-white/[0.03] blur-[60px] pointer-events-none"></div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-8 relative z-10">
                    Ready to build a future-proof <br/> WordPress platform?
                </h2>
<p className="text-neutral-400 mb-12 text-base md:text-lg max-w-lg mx-auto relative z-10">
                    From custom builds to headless architecture — we create high-performance websites designed to scale with your business.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
<a className="w-full sm:w-auto bg-white text-black text-base font-medium px-8 py-4 rounded-xl hover:bg-neutral-200 transition-colors whitespace-nowrap shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#audit">
                        Get Your Free Audit
                    </a>
<a className="w-full sm:w-auto text-white text-base font-medium px-8 py-4 rounded-xl border border-white/10 hover:bg-white/[0.05] hover:border-white/20 transition-all whitespace-nowrap backdrop-blur-sm" href="#call">
                        Book a Strategy Call
                    </a>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/[0.05] bg-[#020202] py-10 px-6 relative z-10">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-[4px] bg-white/10 flex items-center justify-center">
<span className="text-white font-semibold text-sm tracking-tighter">WB</span>
</div>
<span className="text-neutral-500 font-medium text-sm tracking-tight">WebBuggs Architecture</span>
</div>
<div className="flex items-center gap-2 text-sm text-neutral-600 font-mono">
<span className="w-2 h-2 rounded-full bg-green-500/50 mr-1"></span> All systems operational
            </div>
</div>
</footer>

    </>
  );
}
