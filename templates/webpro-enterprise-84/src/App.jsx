import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-grid z-0 pointer-events-none"></div>
<div className="fixed top-0 left-0 right-0 h-screen bg-gradient-to-b from-zinc-950/0 via-zinc-950/80 to-[#050505] z-0 pointer-events-none"></div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
<span className="text-zinc-100 font-medium tracking-tight text-lg">WebPro</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#capabilities">Capabilities</a>
<a className="hover:text-white transition-colors" href="#methodology">Methodology</a>
<a className="hover:text-white transition-colors" href="#engagement">Engagement</a>
</div>
<button className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors">
                Enquire
            </button>
</div>
</nav>
<main className="z-10 flex flex-col w-full relative items-center">

<section className="min-h-screen flex flex-col items-center pt-24 pr-6 pl-6 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen z-0"></div>
<div className="z-10 flex flex-col text-center max-w-4xl mr-auto ml-auto relative items-center">
<div className="fade-in-up" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs tracking-widest uppercase font-medium mb-8">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
                        Bespoke Digital Solutions
                    </div>
</div>
<h1 className="fade-in-up text-5xl md:text-7xl lg:text-8xl text-white font-medium tracking-tight leading-[1.1] mb-8" style={{animationDelay: '0.2s'}}>
                    Engineering the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-400 to-zinc-600">future of commerce.</span>
</h1>
<p className="fade-in-up md:text-xl leading-relaxed text-lg text-zinc-400 max-w-2xl mb-10" style={{animationDelay: '0.3s'}}>
                    We partner with ambitious B2B enterprises to design, build, and optimise high-performance digital infrastructure that scales with your vision.
                </p>
</div>

<div className="fade-in-up w-full max-w-6xl mt-8 perspective-container relative z-10" style={{animationDelay: '0.5s'}}>

<div className="animate-float relative w-full aspect-[16/9] md:aspect-[2/1] rounded-xl bg-[#0a0a0a] border border-white/10 shadow-[0_0_100px_rgba(16,185,129,0.15)] overflow-hidden group">

<div className="absolute inset-0 scanline pointer-events-none z-20 opacity-20"></div>
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-20"></div>

<div className="h-10 border-b border-white/5 bg-zinc-900/50 flex items-center px-4 justify-between">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
</div>
<div className="flex gap-4">
<div className="h-1.5 w-16 bg-white/10 rounded-full"></div>
<div className="h-1.5 w-8 bg-white/10 rounded-full"></div>
</div>
</div>

<div className="p-6 grid grid-cols-12 gap-6 h-[calc(100%-40px)]">

<div className="col-span-3 border-r border-white/5 pr-6 hidden md:flex flex-col gap-4">
<div className="h-8 w-full bg-white/5 rounded flex items-center px-3 mb-4">
<div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
<div className="h-2 w-12 bg-white/20 rounded-full"></div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between group/item cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded bg-white/10"></div>
<div className="h-2 w-20 bg-white/10 rounded-full group-hover/item:bg-white/20 transition-colors"></div>
</div>
</div>
<div className="flex items-center justify-between group/item cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded bg-white/10"></div>
<div className="h-2 w-16 bg-white/10 rounded-full group-hover/item:bg-white/20 transition-colors"></div>
</div>
</div>
<div className="flex items-center justify-between group/item cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded bg-emerald-500/20"></div>
<div className="h-2 w-24 bg-emerald-500/40 rounded-full"></div>
</div>
<div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
</div>
<div className="flex items-center justify-between group/item cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded bg-white/10"></div>
<div className="h-2 w-14 bg-white/10 rounded-full group-hover/item:bg-white/20 transition-colors"></div>
</div>
</div>
</div>
<div className="mt-auto p-4 rounded bg-white/5 border border-white/5">
<div className="flex justify-between items-center mb-2">
<span className="text-[10px] text-zinc-500 uppercase tracking-wider">System Status</span>
<span className="text-[10px] text-emerald-400">Optimal</span>
</div>
<div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
<div className="bg-emerald-500 h-full w-[94%]"></div>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-9 flex flex-col">

<div className="grid grid-cols-3 gap-4 mb-6">
<div className="p-4 rounded-lg bg-white/5 border border-white/5">
<div className="flex items-center gap-2 mb-2">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-500"></div>
<div className="h-2 w-12 bg-white/10 rounded-full"></div>
</div>
<div className="h-6 w-20 bg-white/20 rounded mb-2"></div>
<div className="h-2 w-full bg-gradient-to-r from-emerald-500/50 to-transparent rounded-full opacity-50"></div>
</div>
<div className="p-4 rounded-lg bg-white/5 border border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-emerald-500/5"></div>
<div className="flex items-center gap-2 mb-2 relative z-10">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<div className="h-2 w-16 bg-white/10 rounded-full"></div>
</div>
<div className="h-6 w-24 bg-white/20 rounded mb-2 relative z-10"></div>
<div className="flex gap-1 items-end h-3 relative z-10">
<div className="w-1 bg-emerald-500/30 h-full"></div>
<div className="w-1 bg-emerald-500/50 h-[60%]"></div>
<div className="w-1 bg-emerald-500/70 h-[80%]"></div>
<div className="w-1 bg-emerald-500 h-[90%]"></div>
</div>
</div>
<div className="p-4 rounded-lg bg-white/5 border border-white/5">
<div className="flex items-center gap-2 mb-2">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-500"></div>
<div className="h-2 w-10 bg-white/10 rounded-full"></div>
</div>
<div className="h-6 w-16 bg-white/20 rounded mb-2"></div>
</div>
</div>

<div className="flex-1 rounded-lg border border-white/5 bg-zinc-900/50 relative overflow-hidden flex items-end p-0">

<div className="absolute inset-0 z-0 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="absolute top-1/4 left-1/4 bg-zinc-800/80 border border-white/10 px-2 py-1 rounded text-[10px] text-white backdrop-blur-md z-20">
<span className="text-zinc-400">Req:</span> 24ms
                                </div>
<div className="absolute top-1/3 right-1/4 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded text-[10px] text-emerald-400 backdrop-blur-md z-20">
                                    +128%
                                </div>

<svg className="w-full h-[70%] z-10 text-emerald-500" preserveaspectratio="none" viewbox="0 0 400 100">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="currentColor" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="currentColor" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path className="" d="M0,80 C50,80 50,40 100,40 C150,40 150,70 200,60 C250,50 250,20 300,30 C350,40 350,10 400,20 V100 H0 Z" fill="url(#chartGradient)"></path>
<path d="M0,80 C50,80 50,40 100,40 C150,40 150,70 200,60 C250,50 250,20 300,30 C350,40 350,10 400,20" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>

<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl"></div>
<div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl"></div>
</div>

<div className="absolute top-full left-0 right-0 h-20 bg-gradient-to-b from-emerald-500/10 to-transparent blur-xl transform -scale-y-100 opacity-50 pointer-events-none"></div>
</div>

<div className="mt-32 w-full fade-in-up flex flex-col items-center gap-8 opacity-60 hover:opacity-100 transition-opacity" style={{animationDelay: '0.8s'}}>
</div>
</section>

<section className="w-full border-white/5 border-t pt-24 pr-6 pb-24 pl-6" id="capabilities">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl text-white font-medium tracking-tight mb-4">Core Capabilities</h2>
<p className="text-zinc-400 max-w-md">Our multidisciplinary approach combines technical rigour with aesthetic precision to deliver measurable impact.</p>
</div>
<a className="text-emerald-400 hover:text-emerald-300 text-sm font-medium flex items-center gap-2 group" href="#">
                        Full Service Overview <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-white/10 hover:bg-zinc-900/40 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-6 border border-white/5 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-colors">
<svg className="lucide lucide-layout-grid w-5 h-5 text-white" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
</div>
<h3 className="text-xl text-white font-medium mb-3">Interface Design</h3>
<p className="text-sm leading-relaxed text-zinc-400">User-centric design systems that prioritise accessibility and brand coherence. We craft intuitive journeys that convert.</p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-white/10 hover:bg-zinc-900/40 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-6 border border-white/5 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-colors">
<svg className="lucide lucide-cpu w-5 h-5 text-white" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<h3 className="text-xl text-white font-medium mb-3">Advanced Development</h3>
<p className="text-sm leading-relaxed text-zinc-400">Robust frontend and backend engineering using modern frameworks. Scalable architecture built for speed and security.</p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-white/10 hover:bg-zinc-900/40 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-6 border border-white/5 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-colors">
<svg className="lucide lucide-bar-chart-3 w-5 h-5 text-white" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<h3 className="text-xl text-white font-medium mb-3">Performance Optimisation</h3>
<p className="text-sm leading-relaxed text-zinc-400">Technical SEO, load time reduction, and conversion rate optimisation (CRO) to maximise your digital ROI.</p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-white/10 hover:bg-zinc-900/40 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-6 border border-white/5 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-colors">
<svg className="lucide lucide-workflow w-5 h-5 text-white" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
</div>
<h3 className="text-xl text-white font-medium mb-3">System Integration</h3>
<p className="text-sm leading-relaxed text-zinc-400">Seamless integration of CRMs, ERPs, and marketing automation tools. We connect your disparate data silos.</p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-white/10 hover:bg-zinc-900/40 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-6 border border-white/5 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-colors">
<svg className="lucide lucide-shield-check w-5 h-5 text-white" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl text-white font-medium mb-3">Security &amp; Compliance</h3>
<p className="text-sm leading-relaxed text-zinc-400">GDPR compliant structures and penetration testing to ensure your enterprise data remains uncompromisingly secure.</p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-white/10 hover:bg-zinc-900/40 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-6 border border-white/5 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-colors">
<svg className="lucide lucide-compass w-5 h-5 text-white" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="text-xl text-white font-medium mb-3">Digital Strategy</h3>
<p className="text-sm leading-relaxed text-zinc-400">Consultative roadmapping to align digital initiatives with broader business objectives and market positioning.</p>
</div>
</div>
</div>
</section>

<section className="w-full py-24 px-6 bg-zinc-900/20 border-t border-b border-white/5" id="methodology">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl text-white font-medium tracking-tight mb-4">The Framework</h2>
<p className="text-zinc-400 max-w-xl mx-auto">Our proprietary delivery model ensures transparency, velocity, and quality assurance at every stage of the lifecycle.</p>
</div>
<div className="relative">

<div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent -translate-y-1/2 z-0"></div>
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">

<div className="flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-full bg-[#050505] border border-zinc-700 flex items-center justify-center mb-6 text-sm font-medium text-white shadow-lg z-10 group-hover:border-emerald-500 group-hover:text-emerald-500 transition-colors">01</div>
<h3 className="text-lg text-white font-medium mb-2">Discovery</h3>
<p className="text-sm text-zinc-400">We audit your current ecosystem and define technical requirements through stakeholder workshops.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-full bg-[#050505] border border-zinc-700 flex items-center justify-center mb-6 text-sm font-medium text-white shadow-lg z-10 group-hover:border-emerald-500 group-hover:text-emerald-500 transition-colors">02</div>
<h3 className="text-lg text-white font-medium mb-2">Architecture</h3>
<p className="text-sm text-zinc-400">Information architecture, wireframing, and high-fidelity prototyping to validate the user experience.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-full bg-[#050505] border border-zinc-700 flex items-center justify-center mb-6 text-sm font-medium text-white shadow-lg z-10 group-hover:border-emerald-500 group-hover:text-emerald-500 transition-colors">03</div>
<h3 className="text-lg text-white font-medium mb-2">Development</h3>
<p className="text-sm text-zinc-400">Agile sprints focusing on clean code, component modularity, and continuous integration pipelines.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-full bg-[#050505] border border-zinc-700 flex items-center justify-center mb-6 text-sm font-medium text-white shadow-lg z-10 group-hover:border-emerald-500 group-hover:text-emerald-500 transition-colors">04</div>
<h3 className="text-lg text-white font-medium mb-2">Deployment</h3>
<p className="text-sm text-zinc-400">Rigorous QA testing, seamless migration strategies, and post-launch support and training.</p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-24 px-6 border-b border-white/5" id="engagement">
<div className="max-w-7xl mr-auto ml-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl text-white font-medium tracking-tight mb-4">Engagement Models</h2>
<p className="text-zinc-400 max-w-lg">Flexible structures designed to suit different organizational needs, from project-based execution to ongoing strategic partnership.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="flex flex-col p-8 rounded-2xl border border-white/5 bg-[#080808] hover:border-zinc-700 transition-all">
<div className="mb-4">
<h3 className="text-lg text-white font-medium">Project Based</h3>
<p className="text-sm text-zinc-500 mt-1">For defined deliverables</p>
</div>
<div className="mb-8">
<span className="text-3xl text-white font-medium tracking-tight">Custom</span>
<span className="text-zinc-500 text-sm">/ estimate</span>
</div>
<ul className="flex-1 space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-zinc-300">
<svg className="lucide lucide-check w-4 h-4 text-emerald-500 mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Fixed scope &amp; timeline
                            </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<svg className="lucide lucide-check w-4 h-4 text-emerald-500 mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Comprehensive discovery
                            </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<svg className="lucide lucide-check w-4 h-4 text-emerald-500 mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Handover training
                            </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors">Request Proposal</button>
</div>

<div className="flex flex-col overflow-hidden bg-emerald-950/5 border-emerald-500/30 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative">
<div className="absolute top-0 right-0 p-3 bg-emerald-500/10 rounded-bl-xl border-b border-l border-emerald-500/20">
<svg className="lucide lucide-star w-4 h-4 text-emerald-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Transformation</h3>
<p className="text-sm text-emerald-500/80 mt-1">Boost your web presence</p>
</div>
<div className="mb-8">
<span className="text-3xl font-medium text-white tracking-tight" style={{}}>£600</span>
<span className="text-sm text-zinc-500" style={{}}>/ once</span>
</div>
<ul className="flex-1 mb-8 space-y-4">
<li className="flex gap-3 text-sm text-zinc-300 items-start">
<svg className="lucide lucide-check shrink-0 mt-0.5 w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(16, 185, 129)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
    Fixed scope &amp; timeline
  </li>
<li className="flex gap-3 text-sm text-zinc-300 items-start">
<svg className="lucide lucide-check shrink-0 mt-0.5 w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(16, 185, 129)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
    Professional web design
  </li>
<li className="flex gap-3 text-sm text-zinc-300 items-start">
<svg className="lucide lucide-check shrink-0 mt-0.5 w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(16, 185, 129)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
    Rapid delivery
  </li>
</ul>
<button className="w-full py-3 rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-500 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.2)]">Start Partnership</button>
</div>

<div className="flex flex-col p-8 rounded-2xl border border-white/5 bg-[#080808] hover:border-zinc-700 transition-all">
<div className="mb-4">
<h3 className="text-lg text-white font-medium">Enterprise</h3>
<p className="text-sm text-zinc-500 mt-1">Large scale infrastructure</p>
</div>
<div className="mb-8">
<span className="text-3xl text-white font-medium tracking-tight">Custom</span>
<span className="text-zinc-500 text-sm">/ contract</span>
</div>
<ul className="flex-1 space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-zinc-300">
<svg className="lucide lucide-check w-4 h-4 text-emerald-500 mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                24/7 critical response
                            </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<svg className="lucide lucide-check w-4 h-4 text-emerald-500 mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Custom security protocols
                            </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<svg className="lucide lucide-check w-4 h-4 text-emerald-500 mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Multi-team collaboration
                            </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="w-full py-32 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-emerald-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-5xl text-white font-medium tracking-tight mb-6">Ready to elevate your digital presence?
    </h2>
<p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">Schedule a consultative discovery call with our senior
      architects. No obligation, just expert insight.</p>
<div className="flex flex-col sm:flex-row gap-4 gap-x-4 gap-y-4 items-center justify-center">
<button className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-colors w-full sm:w-auto">
                        Book Consultation
                    </button>
</div>
</div>
</section>

<footer className="w-full py-12 px-6 border-t border-white/5 bg-[#030303]">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-white font-medium tracking-tight">WebPro</span>
</div>
<p className="text-zinc-500 text-sm">London • New York • Singapore</p>
</div>
<div className="flex gap-8 text-sm text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
<div className="text-zinc-600 text-xs">
                    © 2024 WebPro Digital Ltd. All rights reserved.
                </div>
</div>
</footer>
</main>


    </>
  );
}
