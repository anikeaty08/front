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



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b backdrop-blur-md border-white/5 bg-neutral-950/80">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr border overflow-hidden from-neutral-700 to-neutral-600 border-white/10">
<img alt="Profile" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&amp;w=100&amp;h=100"/>
</div>
<span className="text-sm font-medium tracking-tight text-white">Dimy Osman</span>
</div>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-neutral-400">
<a className="transition-colors hover:text-white" href="#">Work</a>
<a className="transition-colors hover:text-white" href="#">Services</a>
<a className="transition-colors hover:text-white" href="#">Process</a>
<button className="px-4 py-2 rounded-full transition-all bg-white text-neutral-950 hover:bg-neutral-200">Let's Talk</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="glow-blob w-96 h-96 bg-neutral-500/20 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
<div className="glow-blob w-[500px] h-[300px] bg-teal-500/10 bottom-0 left-1/4 translate-y-1/4"></div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">

<div className="relative inline-block mb-8 group">
<div className="absolute -inset-1 bg-gradient-to-r to-cyan-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000 from-cyan-200"></div>
<div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full p-1 border bg-neutral-950 border-white/10">
<img alt="Dimy Osman" className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition duration-500" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&amp;w=200&amp;h=200"/>
<div className="absolute bottom-1 right-1 w-5 h-5 bg-indigo-500 border-4 rounded-full border-neutral-950"></div>
</div>

<div className="absolute -right-32 top-0 hidden md:block animate-bounce" style={{animationDuration: '3s'}}>
<div className="glass-panel p-3 rounded-2xl rounded-bl-none text-left max-w-[180px]">
<p className="text-[10px] leading-tight text-neutral-300">Hi! I'm currently online. <span className="text-cyan-200">Let's talk NOW!</span></p>
</div>
</div>
</div>

<h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6 leading-[1.1] text-white">
                High-Performance <br className="hidden md:block"/>
<span className="gradient-text">Web Design &amp; Development</span>
</h1>
<p className="text-xl md:text-2xl font-light tracking-tight mb-10 max-w-2xl mx-auto text-neutral-400">
                with <span className="font-normal text-white">SEO</span>, <span className="font-normal text-white">Ads</span> and <span className="font-normal text-white">Full Support</span> by Dimy Osman
            </p>

<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="group relative px-8 py-3.5 rounded-full font-medium text-sm overflow-hidden transition-all hover:scale-105 active:scale-95 bg-white text-neutral-950">
<span className="relative z-10 flex items-center gap-2">
                        GET IN TOUCH <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
<div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity from-neutral-100 to-neutral-300"></div>
</button>
</div>
</div>
</section>

<div className="border-y overflow-hidden py-4 border-white/5 bg-neutral-900/30">
<div className="flex gap-12 justify-center items-center text-xs font-medium tracking-wider uppercase whitespace-nowrap overflow-hidden text-neutral-400">
<div className="flex gap-12 animate-pulse">
<span>Market Research</span>
<span className="text-cyan-500/50">•</span>
<span>Web Design</span>
<span className="text-cyan-500/50">•</span>
<span className="">Web Development</span>
<span className="text-cyan-500/50">•</span>
<span>SEO</span>
<span className="text-cyan-500/50">•</span>
<span>Ads</span>
<span className="text-cyan-500/50">•</span>
<span>Market Research</span>
<span className="text-cyan-500/50">•</span>
<span>Web Design</span>
<span className="text-cyan-500/50">•</span>
<span>Web Development</span>
</div>
</div>
</div>

<section className="py-24 px-6 text-center">
<div className="max-w-3xl mx-auto">
<p className="text-xl md:text-3xl font-light leading-relaxed tracking-tight text-neutral-300">
                A blend of stunning, SEO-optimized websites, and strategic <span className="font-medium text-white">all-in-one</span> digital solutions crafted <span className="font-medium text-white">to drive traffic</span> and convert possibilities into reality!
            </p>
<div className="mt-8">
<button className="text-xs font-medium border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 rounded-full hover:bg-cyan-500/20 transition-colors text-cyan-200">
                    EXPLORE PORTFOLIO
                </button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-32">
<div className="flex items-center gap-4 mb-12">
<div className="h-px flex-1 bg-white/10"></div>
<h2 className="text-lg font-medium tracking-tight text-neutral-400">Recent Success Story</h2>
<div className="h-px flex-1 bg-white/10"></div>
</div>
<div className="glass-panel overflow-hidden group border-white/5 border rounded-3xl relative">

<div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l to-transparent pointer-events-none from-indigo-900/10"></div>

<div className="flex overflow-x-auto snap-x snap-mandatory w-full h-full relative z-10" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>
<style>
                    /* Inline style to hide scrollbar for this specific component */
                    [data-element-id="aura-emillwo5q3bv68a6"] .overflow-x-auto::-webkit-scrollbar { display: none; }
                </style>

<div className="w-full min-w-full flex-shrink-0 snap-center p-8 md:p-12 flex items-center justify-center">
<div className="grid md:grid-cols-2 gap-16 items-center w-full">

<div className="space-y-6">
<div className="flex items-center gap-2 text-xs font-medium text-indigo-400">
<svg className="lucide lucide-shield-check w-4 h-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> ISO &amp; EU Compliance
                            </div>
<h3 className="md:text-5xl text-4xl font-medium tracking-tight text-white">Advisera.com</h3>
<p className="leading-relaxed text-sm text-neutral-400">
                                Enterprise-grade WordPress multisite platform engineered for high-performance learning. 
                                Built with a custom theme and modular Gutenberg architecture, the system powers Advisera's global training ecosystem.
                            </p>
<div className="flex gap-4 pt-4">
<div className="flex text-cyan-400">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-sm text-neutral-500">Based on 100+ reviews</span>
</div>
<div className="pt-6 flex gap-3">
<button className="px-5 py-2.5 text-xs font-semibold rounded-lg transition-colors bg-white text-black hover:bg-neutral-200">
                                    Visit Website
                                </button>
<button className="px-5 py-2.5 bg-transparent border text-xs font-medium rounded-lg transition-colors border-white/20 text-white hover:bg-white/5">
                                    Read Case Study
                                </button>
</div>
</div>

<div className="relative h-[400px] w-full perspective-1000">

<div className="absolute top-10 left-0 w-[90%] h-[260px] border rounded-xl shadow-2xl overflow-hidden transform transition duration-500 z-10 bg-neutral-900 border-neutral-700">

<div className="h-6 border-b flex items-center px-3 gap-1.5 bg-neutral-800 border-neutral-700">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-blue-500/50"></div>
<div className="w-2 h-2 rounded-full bg-indigo-500/50"></div>
</div>

<div className="p-6 grid grid-cols-12 gap-4">
<div className="col-span-4 space-y-3">
<div className="h-4 w-2/3 rounded bg-neutral-700"></div>
<div className="h-24 w-full rounded border border-indigo-500/20 bg-indigo-900/20"></div>
<div className="h-2 w-full rounded bg-neutral-800"></div>
<div className="h-2 w-5/6 rounded bg-neutral-800"></div>
</div>
<div className="col-span-8 rounded-lg border p-3 bg-neutral-800/50 border-neutral-700/50">
<div className="flex justify-between mb-4">
<div className="h-8 w-8 rounded bg-indigo-500 flex items-center justify-center text-[10px] text-white">ISO</div>
<div className="h-2 w-12 rounded bg-neutral-700"></div>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="h-16 rounded bg-neutral-700/30"></div>
<div className="h-16 rounded bg-neutral-700/30"></div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 right-4 w-[100px] h-[200px] border-[4px] rounded-2xl shadow-xl overflow-hidden transform translate-y-4 transition duration-700 z-20 bg-black border-neutral-700">
<div className="w-full h-full p-2 space-y-2 bg-neutral-800">
<div className="w-full h-12 rounded bg-indigo-900/30"></div>
<div className="w-full h-2 rounded bg-neutral-700"></div>
<div className="w-full h-2 rounded bg-neutral-700"></div>
<div className="grid grid-cols-2 gap-1 mt-2">
<div className="h-8 rounded bg-neutral-700/50"></div>
<div className="h-8 rounded bg-neutral-700/50"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full min-w-full flex-shrink-0 snap-center p-8 md:p-12 flex items-center justify-center">
<div className="grid md:grid-cols-2 gap-16 items-center w-full">

<div className="space-y-6">
<div className="flex items-center gap-2 text-xs font-medium text-emerald-400">
<svg className="lucide lucide-trending-up w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg> FinTech &amp; Banking
                            </div>
<h3 className="md:text-5xl text-4xl font-medium tracking-tight text-white">Cronos Finance</h3>
<p className="leading-relaxed text-sm text-neutral-400">
                                Next-gen banking dashboard featuring real-time crypto analytics and seamless fiat conversion.
                                Engineered for high-frequency data updates and sub-millisecond latency for traders.
                            </p>
<div className="flex gap-4 pt-4">
<div className="flex text-cyan-400">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-sm text-neutral-500">Fastest Rising App 2024</span>
</div>
<div className="pt-6 flex gap-3">
<button className="px-5 py-2.5 text-xs font-semibold rounded-lg transition-colors bg-white text-black hover:bg-neutral-200">
                                    View Project
                                </button>
</div>
</div>

<div className="relative h-[400px] w-full perspective-1000">

<div className="absolute top-10 left-0 w-[90%] h-[260px] border rounded-xl shadow-2xl overflow-hidden transform transition duration-500 z-10 bg-neutral-900 border-neutral-700">

<div className="h-6 border-b flex items-center px-3 gap-1.5 bg-neutral-800 border-neutral-700">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>

<div className="p-6 grid grid-cols-12 gap-4">
<div className="col-span-4 space-y-3">
<div className="h-3 w-2/3 rounded bg-neutral-700"></div>
<div className="h-24 w-full rounded border border-emerald-500/20 bg-emerald-900/10"></div>
<div className="h-2 w-full rounded bg-neutral-800"></div>
<div className="h-2 w-5/6 rounded bg-neutral-800"></div>
</div>
<div className="col-span-8 rounded-lg border p-3 bg-neutral-800/50 border-neutral-700/50">
<div className="flex justify-between mb-4">
<div className="h-8 w-8 rounded bg-emerald-500 flex items-center justify-center text-[10px] text-white">$</div>
<div className="h-2 w-12 rounded bg-neutral-700"></div>
</div>
<div className="h-20 w-full rounded bg-emerald-500/10 border border-emerald-500/20 relative overflow-hidden">
<div className="absolute bottom-0 left-0 right-0 h-10 bg-emerald-500/20 skew-y-6 transform origin-bottom-left"></div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 right-4 w-[100px] h-[200px] border-[4px] rounded-2xl shadow-xl overflow-hidden transform translate-y-4 transition duration-700 z-20 bg-black border-neutral-700">
<div className="w-full h-full p-2 space-y-2 bg-neutral-800">
<div className="w-full h-12 rounded bg-emerald-900/30 border border-emerald-500/20"></div>
<div className="w-full h-8 rounded bg-neutral-700/30 flex items-center justify-center text-emerald-400 text-[10px] font-mono">+124.5%</div>
<div className="grid grid-cols-2 gap-1 mt-2">
<div className="h-8 rounded bg-neutral-700/50"></div>
<div className="h-8 rounded bg-neutral-700/50"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full min-w-full flex-shrink-0 snap-center p-8 md:p-12 flex items-center justify-center">
<div className="grid md:grid-cols-2 gap-16 items-center w-full">

<div className="space-y-6">
<div className="flex items-center gap-2 text-xs font-medium text-rose-400">
<svg className="lucide lucide-shopping-bag w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg> E-commerce &amp; Retail
                            </div>
<h3 className="md:text-5xl text-4xl font-medium tracking-tight text-white">Aura Studios</h3>
<p className="leading-relaxed text-sm text-neutral-400">
                                Immersive shopping experience with AR try-on capabilities and AI-driven personalization.
                                Redefining luxury digital retail with seamless animated interactions.
                            </p>
<div className="flex gap-4 pt-4">
<div className="flex text-cyan-400">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-sm text-neutral-500">Awwwards Site of the Day</span>
</div>
<div className="pt-6 flex gap-3">
<button className="px-5 py-2.5 text-xs font-semibold rounded-lg transition-colors bg-white text-black hover:bg-neutral-200">
                                    Shop Now
                                </button>
</div>
</div>

<div className="relative h-[400px] w-full perspective-1000">

<div className="absolute top-10 left-0 w-[90%] h-[260px] border rounded-xl shadow-2xl overflow-hidden transform transition duration-500 z-10 bg-neutral-900 border-neutral-700">

<div className="h-6 border-b flex items-center px-3 gap-1.5 bg-neutral-800 border-neutral-700">
<div className="w-2 h-2 rounded-full bg-neutral-600"></div>
<div className="w-2 h-2 rounded-full bg-neutral-600"></div>
<div className="w-2 h-2 rounded-full bg-neutral-600"></div>
</div>

<div className="p-6 grid grid-cols-12 gap-4">
<div className="col-span-4 space-y-3">
<div className="h-20 w-full rounded border border-rose-500/20 bg-rose-900/10"></div>
<div className="h-2 w-full rounded bg-neutral-800"></div>
<div className="h-2 w-5/6 rounded bg-neutral-800"></div>
</div>
<div className="col-span-8 rounded-lg border p-3 bg-neutral-800/50 border-neutral-700/50 flex items-center justify-center">
<div className="grid grid-cols-2 gap-3 w-full">
<div className="h-24 rounded bg-rose-500/10 border border-rose-500/20"></div>
<div className="h-24 rounded bg-rose-500/10 border border-rose-500/20"></div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 right-4 w-[100px] h-[200px] border-[4px] rounded-2xl shadow-xl overflow-hidden transform translate-y-4 transition duration-700 z-20 bg-black border-neutral-700">
<div className="w-full h-full relative">
<div className="absolute inset-0 bg-rose-900/10"></div>
<div className="absolute bottom-4 left-2 right-2 h-8 rounded bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-[8px] text-white">
                                         Add to Bag
                                     </div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-end pb-8 items-center">

<div className="flex gap-2 p-1.5 rounded-full bg-neutral-900/80 backdrop-blur-md border border-white/10 shadow-lg pointer-events-auto">
<div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/20 hover:bg-white/40 transition-colors cursor-pointer"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/20 hover:bg-white/40 transition-colors cursor-pointer"></div>
</div>
</div>

<button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/10 bg-neutral-900/50 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:bg-neutral-800 transition-all z-20 hidden md:flex cursor-pointer pointer-events-auto">
<svg className="lucide lucide-chevron-left" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>

<button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/10 bg-neutral-900/50 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:bg-neutral-800 transition-all z-20 hidden md:flex cursor-pointer pointer-events-auto">
<svg className="lucide lucide-chevron-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-4xl mx-auto text-center relative">
<div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 blur-3xl rounded-full"></div>
<div className="glass-panel border rounded-3xl p-16 md:p-24 relative z-10 border-white/10">
<p className="mb-4 font-light text-lg text-neutral-400">Your business is unique, and so should be its <span className="font-medium text-white">digital presence</span></p>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-10 text-white">
                    Let's Launch Your 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-cyan-500 from-cyan-200">Digital Triumph</span>
</h2>
<button className="px-8 py-3 font-semibold rounded-full transition-all text-sm bg-white text-black hover:bg-neutral-200">
                    START PROJECT
                </button>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24 space-y-32">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-white">My Approach</h2>
<p className="text-neutral-400">A rigorous process to ensure perfection.</p>
</div>

<div className="grid md:grid-cols-2 gap-16 items-center group">
<div className="order-2 md:order-1 relative">

<div className="glass-panel rounded-xl p-6 border shadow-2xl transform rotate-[-2deg] group-hover:rotate-0 transition duration-500 border-white/5 shadow-blue-900/10">
<div className="flex gap-4 mb-6">
<div className="w-1/3 h-24 rounded border flex flex-col justify-center items-center gap-2 bg-neutral-800/50 border-white/5">
<div className="w-8 h-8 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin"></div>
<div className="h-2 w-12 rounded bg-neutral-700"></div>
</div>
<div className="w-2/3 h-24 rounded border p-3 flex items-end gap-2 bg-neutral-800/50 border-white/5">
<div className="w-full bg-blue-500/40 rounded-t h-[40%]"></div>
<div className="w-full bg-blue-500/60 rounded-t h-[70%]"></div>
<div className="w-full bg-blue-500/80 rounded-t h-[50%]"></div>
<div className="w-full bg-blue-500 rounded-t h-[90%]"></div>
</div>
</div>
<div className="space-y-2">
<div className="h-2 w-full rounded bg-neutral-800"></div>
<div className="h-2 w-3/4 rounded bg-neutral-800"></div>
<div className="h-2 w-5/6 rounded bg-neutral-800"></div>
</div>
</div>
</div>
<div className="order-1 md:order-2 space-y-4">
<span className="text-cyan-500 font-mono text-sm">01.</span>
<h3 className="text-2xl font-medium tracking-tight text-white">Planning Your Digital Strategy</h3>
<p className="font-light leading-relaxed text-neutral-400">
                    Market research, keyword planning, and engaging content creation with data from SEMRush and Google Analytics ensure your digital visibility starts on the right foot.
                </p>
<div className="flex gap-4 pt-2">
<div className="p-2 rounded border bg-neutral-900 border-white/10"><svg className="lucide lucide-bar-chart-2 w-5 h-5 text-slate-400" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg></div>
<div className="p-2 rounded border bg-neutral-900 border-white/10"><svg className="lucide lucide-search w-5 h-5 text-slate-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg></div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-16 items-center group">
<div className="space-y-4">
<span className="font-mono text-sm text-blue-400">02.</span>
<h3 className="text-2xl font-medium tracking-tight text-white">Creating Stunning Web Visuals</h3>
<p className="font-light leading-relaxed text-neutral-400">
                    Using Figma, Illustrator, and Photoshop your brand visuals are transformed into engaging, collaborative, and resonant digital aesthetics.
                </p>
<ul className="text-sm text-neutral-500 space-y-2">
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Figma Prototyping</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div> Modern UI/UX</li>
</ul>
</div>
<div className="relative">

<div className="glass-panel rounded-xl p-1 border shadow-2xl transform rotate-[2deg] group-hover:rotate-0 transition duration-500 border-white/5">
<div className="rounded-lg p-4 h-[250px] relative overflow-hidden bg-neutral-900">

<div className="absolute left-4 top-4 bottom-4 w-10 rounded flex flex-col items-center py-2 gap-3 bg-neutral-800">
<div className="w-5 h-5 border rounded border-neutral-600"></div>
<div className="w-5 h-5 border rounded-full border-neutral-600"></div>
<div className="w-5 h-5 border transform rotate-45 border-neutral-600"></div>
<div className="w-5 h-5 border flex items-center justify-center text-[8px] border-white text-white">T</div>
</div>

<div className="ml-14 h-full border rounded flex items-center justify-center relative bg-neutral-950 border-neutral-800">

<div className="absolute inset-8 border border-blue-500 flex items-center justify-center">
<div className="absolute -top-1 -left-1 w-2 h-2 border border-blue-500 bg-white"></div>
<div className="absolute -top-1 -right-1 w-2 h-2 border border-blue-500 bg-white"></div>
<div className="absolute -bottom-1 -left-1 w-2 h-2 border border-blue-500 bg-white"></div>
<div className="absolute -bottom-1 -right-1 w-2 h-2 border border-blue-500 bg-white"></div>
<div className="text-2xl font-serif opacity-50 text-white">Aa</div>
</div>
</div>

<div className="absolute right-4 top-4 bottom-4 w-24 rounded p-2 space-y-2 bg-neutral-800">
<div className="h-2 w-full rounded bg-neutral-700"></div>
<div className="h-2 w-2/3 rounded bg-neutral-700"></div>
<div className="h-4 w-full border border-blue-500/30 rounded bg-blue-900/50"></div>
</div>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-16 items-center group">
<div className="order-2 md:order-1 relative">

<div className="rounded-xl border shadow-2xl overflow-hidden font-mono text-[10px] md:text-xs bg-neutral-900 border-white/10">
<div className="px-4 py-2 flex items-center gap-2 border-b bg-neutral-800 border-white/5">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-blue-500"></div>
<div className="w-3 h-3 rounded-full bg-indigo-500"></div>
<div className="ml-4 text-neutral-500">style.css</div>
</div>
<div className="p-6 space-y-1 text-neutral-300">
<div className="flex"><span className="mr-4 text-neutral-600">01</span><span className="text-blue-400">.container</span> {</div>
<div className="flex"><span className="mr-4 text-neutral-600">02</span>  <span className="text-indigo-400">display</span>: <span className="text-neutral-300">grid</span>;</div>
<div className="flex"><span className="mr-4 text-neutral-600">03</span>  <span className="text-indigo-400">place-items</span>: <span className="text-neutral-300">center</span>;</div>
<div className="flex"><span className="mr-4 text-neutral-600">04</span>  <span className="text-indigo-400">backdrop-filter</span>: <span className="text-neutral-300">blur(10px)</span>;</div>
<div className="flex"><span className="mr-4 text-neutral-600">05</span>}</div>
<div className="flex"><span className="mr-4 text-neutral-600">06</span></div>
<div className="flex"><span className="mr-4 text-neutral-600">07</span><span className="text-indigo-400">// Optimization active</span></div>
<div className="flex"><span className="mr-4 text-neutral-600">08</span><span className="text-blue-400">.speed</span> { <span className="text-indigo-400">value</span>: <span className="text-neutral-300">100%</span>; }</div>
</div>
</div>
</div>
<div className="order-1 md:order-2 space-y-4">
<span className="font-mono text-sm text-indigo-400">03.</span>
<h3 className="text-2xl font-medium tracking-tight text-white">Excellent Development &amp; Performance</h3>
<p className="font-light leading-relaxed text-neutral-400">
                    With WordPress and custom theme development, visual builders, WP Rocket, and LiteSpeed VPS servers, expect a website that is not only built but engineered for speed.
                </p>
</div>
</div>

<div className="grid md:grid-cols-2 gap-16 items-center group">
<div className="space-y-4">
<span className="font-mono text-sm text-teal-400">04.</span>
<h3 className="text-2xl font-medium tracking-tight text-white">Strong Digital Security</h3>
<p className="font-light leading-relaxed text-neutral-400">
                    Providing top-tier security with Wordfence Security integration. Using 2FA logins, automated backups to multiple remote storages, and Let's Encrypt SSL.
                </p>
</div>
<div className="relative">
<div className="glass-panel rounded-xl p-8 border flex flex-col items-center justify-center gap-6 relative overflow-hidden border-white/5">
<div className="absolute inset-0 bg-teal-500/5 blur-3xl"></div>
<div className="w-20 h-20 bg-teal-500/10 rounded-full flex items-center justify-center border border-teal-500/30 relative z-10 text-teal-400">
<svg className="lucide lucide-lock w-8 h-8" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<div className="w-full rounded-full h-2 overflow-hidden relative z-10 bg-neutral-800">
<div className="bg-teal-500 h-full w-[95%]"></div>
</div>
<div className="flex justify-between w-full text-[10px] text-neutral-500 relative z-10">
<span>Firewall Active</span>
<span className="text-teal-400">100% Secure</span>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-16 items-center group">
<div className="order-2 md:order-1 relative">
<div className="rounded-xl p-6 border shadow-2xl relative overflow-hidden bg-white border-neutral-200">
<div className="flex items-center justify-between mb-6">
<div className="flex gap-2 items-center">
<div className="w-8 h-8 rounded-full border flex items-center justify-center text-indigo-500 font-bold text-xs border-neutral-100">100</div>
<div className="font-semibold text-sm text-neutral-900">SEO Score</div>
</div>
<div className="px-2 py-1 text-[10px] font-bold rounded uppercase bg-indigo-100 text-indigo-700">Excellent</div>
</div>

<div className="flex items-end gap-2 h-32">
<div className="w-1/6 rounded-t h-[40%] bg-neutral-100"></div>
<div className="w-1/6 rounded-t h-[55%] bg-neutral-100"></div>
<div className="w-1/6 rounded-t h-[45%] bg-neutral-100"></div>
<div className="w-1/6 rounded-t h-[60%] bg-indigo-100"></div>
<div className="w-1/6 rounded-t h-[80%] bg-indigo-300"></div>
<div className="w-1/6 bg-indigo-500 rounded-t h-[90%] shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>
</div>
</div>
</div>
<div className="order-1 md:order-2 space-y-4">
<span className="font-mono text-sm text-indigo-400">05.</span>
<h3 className="text-2xl font-medium tracking-tight text-white">Outstanding SEO &amp; Visibility</h3>
<p className="font-light leading-relaxed text-neutral-400">
                    Using RankMath in combination with Google Search Console, Analytics and Ads, your website to not just be visible, but dominate the digital marketplace.
                </p>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-neutral-950"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-cyan-500/10 to-transparent blur-[100px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 text-white">
                Start your WEB journey NOW!
            </h2>
<p className="mb-10 max-w-xl mx-auto font-light text-neutral-400">
                Your business isn't just unique; it's a <span className="font-medium text-white">digital story</span> waiting to be loudly told <span className="font-medium text-white">across web spaces</span> and <span className="font-medium text-white">supercharge your success</span>.
            </p>
<button className="px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-[0_0_20px_rgba(251,191,36,0.3)] bg-cyan-400 text-neutral-950 hover:bg-cyan-300">
                GET IN TOUCH
            </button>

<div className="mt-20 flex justify-center">
<div className="relative">
<svg className="lucide lucide-rocket w-8 h-8 rotate-[-45deg] text-white" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
<div className="absolute -bottom-4 -left-4 w-16 h-16 bg-indigo-500/20 blur-xl rounded-full"></div>
</div>
</div>
</div>
</section>

<footer className="border-t py-12 px-6 border-white/5 bg-black">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-4">
<div className="relative">
<img alt="Dimy" className="w-12 h-12 rounded-full border grayscale border-white/20" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&amp;w=60&amp;h=60"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-indigo-500 rounded-full border-2 border-black"></div>
</div>
<div className="">
<h4 className="font-medium text-sm text-white">Dimy Osman</h4>
<p className="text-[10px] text-neutral-500 uppercase tracking-wider">Web Design &amp; Dev</p>
</div>
</div>
<div className="flex items-center gap-2 border px-4 py-2 rounded-full bg-neutral-900 border-white/10">
<div className="w-4 h-4 rounded-full flex items-center justify-center text-[8px] bg-indigo-600 text-white">✓</div>
<span className="text-xs font-medium text-neutral-300">Upwork <span className="text-white">Top Rated</span></span>
<span className="text-xs text-neutral-500 ml-2 border-l pl-2 border-white/10">Croatia, Europe</span>
</div>
<div className="text-xs text-neutral-600">
                © 2025 All Rights Reserved.
            </div>
</div>
</footer>


    </>
  );
}
