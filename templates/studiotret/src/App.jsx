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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 w-full bg-[#0B0D10]/90 backdrop-blur-md border-b border-grid">
<div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between swiss-grid border-l-0 border-r-0 md:border-l md:border-r">

<a className="uppercase flex items-center gap-2 text-lg font-semibold tracking-tighter" href="#" style={{}}>sTUDIO tRËT<span className="w-1.5 h-1.5 bg-accent block"></span></a>

<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium uppercase tracking-wide text-gray-400 hover:text-white transition-colors" href="#work">Work</a>
<a className="text-xs font-medium uppercase tracking-wide text-gray-400 hover:text-white transition-colors" href="#process">Process</a>
<a className="text-xs font-medium uppercase tracking-wide text-gray-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-xs font-medium uppercase tracking-wide text-gray-400 hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>

<a className="hidden md:inline-flex items-center justify-center px-5 py-2 border border-white/20 text-xs font-semibold uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300" href="#conversion">
                Book Strategy Call
            </a>

<button className="md:hidden text-white">
<svg className="lucide lucide-menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>
</div>
</nav>

<main className="w-full flex-grow pt-16">

<section className="relative border-b border-grid overflow-hidden" id="hero">
<div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 swiss-grid border-l-0 border-r-0 md:border-l md:border-r min-h-[90vh]">

<div className="col-span-1 lg:col-span-7 p-6 md:p-12 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-grid relative z-10">
<div className="mb-8 inline-flex items-center gap-2 px-3 py-1 border border-accent/30 bg-accent/5 rounded-full w-fit">
<span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
<span className="text-accent text-[10px] font-bold uppercase tracking-widest">Visual Equity for SaaS &amp; Consulting</span>
</div>
<h1 className="text-5xl md:text-7xl xl:text-8xl font-semibold leading-[0.9] tracking-tightest mb-8 text-white">
                        Your brand is<br/>not design.<br/><span className="text-gray-500">It’s an asset.</span>
</h1>
<p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed font-light mb-12">
                        We build Visual Equity for SaaS and consulting firms that need their digital presence to justify pricing, accelerate trust, and close deals before the call.
                    </p>
<div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
<a className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-300" href="#conversion">
                            Book a Strategy Call
                        </a>
<div className="flex gap-4 text-[10px] font-mono text-gray-500 uppercase tracking-tight">
<span>// Valuation Logic</span>
<span>// Trust Engineering</span>
</div>
</div>
</div>

<div className="col-span-1 lg:col-span-5 bg-[#08090b] relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative w-full h-[500px] lg:h-full flex items-center justify-center perspective-1000">
<div className="relative w-[80%] aspect-[3/4] bg-[#111] border border-white/10 shadow-2xl rotate-y-12 rotate-z-2 translate-x-4 hover:rotate-0 transition-transform duration-700 ease-out p-4 flex flex-col gap-4">
<div className="w-full h-8 border-b border-white/5 flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-white/20"></div>
<div className="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<div className="w-3/4 h-8 bg-white/5 rounded"></div>
<div className="w-1/2 h-4 bg-white/5 rounded"></div>
<div className="w-full h-32 bg-gradient-to-br from-white/5 to-transparent rounded mt-4 border border-white/5"></div>
<div className="grid grid-cols-2 gap-4 mt-auto">
<div className="h-20 bg-white/5 rounded border border-white/5"></div>
<div className="h-20 bg-white/5 rounded border border-white/5"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-grid overflow-hidden py-20" id="work">
<div className="max-w-[1440px] mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6 swiss-grid border-l-0 border-r-0 md:border-l md:border-r border-none">
<div className="max-w-xl">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tightest mb-4">Design that signals<br/>value instantly.</h2>
</div>
<div className="flex gap-2">
<div className="w-24 h-[1px] bg-accent self-center"></div>
<span className="text-xs font-mono uppercase text-gray-500">Swipe to explore</span>
</div>
</div>
<div className="flex overflow-x-auto snap-x hide-scrollbar pb-12 px-6 gap-6 md:gap-12 w-full">

<div className="snap-center shrink-0 w-[85vw] md:w-[600px] group cursor-pointer">
<div className="aspect-[16/10] bg-[#111] border border-white/10 relative overflow-hidden mb-6 transition-all duration-500 group-hover:border-white/30">
<div className="absolute inset-0 bg-gradient-to-tr from-[#1a1a1a] to-[#0B0D10] p-8 flex flex-col">
<div className="w-full h-8 flex justify-between items-center mb-8 border-b border-white/5 pb-4">
<div className="w-24 h-4 bg-white/10 rounded"></div>
<div className="flex gap-4"><div className="w-12 h-2 bg-white/10"></div><div className="w-12 h-2 bg-white/10"></div></div>
</div>
<div className="w-2/3 h-12 bg-white/10 rounded mb-4"></div>
<div className="w-1/2 h-6 bg-white/5 rounded"></div>
<div className="mt-auto w-full h-32 border border-white/5 bg-black/40 rounded flex items-center justify-center">
<span className="font-mono text-xs text-gray-600">TRUST SIGNAL #01</span>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<h3 className="text-lg font-medium text-white">SaaS Marketing Site</h3>
<span className="text-sm text-gray-500 font-mono">Engineered for trust</span>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[600px] group cursor-pointer">
<div className="aspect-[16/10] bg-[#111] border border-white/10 relative overflow-hidden mb-6 transition-all duration-500 group-hover:border-white/30">
<div className="absolute inset-0 bg-gradient-to-tr from-[#1a1a1a] to-[#0B0D10] p-8 flex flex-col">
<div className="w-full flex justify-center mb-8">
<div className="w-32 h-8 bg-white/10 rounded"></div>
</div>
<div className="grid grid-cols-3 gap-4 h-full">
<div className="border border-white/5 bg-white/5 rounded flex flex-col p-4 items-center gap-2">
<div className="w-full h-2 bg-white/10"></div>
<div className="w-12 h-12 rounded-full bg-accent/20 mt-4"></div>
</div>
<div className="border border-accent/30 bg-accent/5 rounded flex flex-col p-4 items-center gap-2 scale-105 shadow-xl">
<div className="w-full h-2 bg-accent/40"></div>
<div className="w-12 h-12 rounded-full bg-accent mt-4"></div>
</div>
<div className="border border-white/5 bg-white/5 rounded flex flex-col p-4 items-center gap-2">
<div className="w-full h-2 bg-white/10"></div>
<div className="w-12 h-12 rounded-full bg-accent/20 mt-4"></div>
</div>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<h3 className="text-lg font-medium text-white">Pricing Page</h3>
<span className="text-sm text-gray-500 font-mono">Justifying premium tiers</span>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[600px] group cursor-pointer">
<div className="aspect-[16/10] bg-[#111] border border-white/10 relative overflow-hidden mb-6 transition-all duration-500 group-hover:border-white/30">
<div className="absolute inset-0 bg-gradient-to-tr from-[#1a1a1a] to-[#0B0D10] p-12 flex items-center justify-center">
<div className="w-[80%] h-[120%] bg-white/5 border border-white/10 rotate-3 flex flex-col p-6 shadow-2xl">
<div className="w-20 h-20 bg-gray-700 rounded-full mb-6"></div>
<div className="w-full h-4 bg-white/20 mb-2"></div>
<div className="w-2/3 h-4 bg-white/20 mb-8"></div>
<div className="flex gap-2 mt-auto">
<div className="w-8 h-8 rounded-full border border-white/20"></div>
<div className="w-8 h-8 rounded-full border border-white/20"></div>
</div>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<h3 className="text-lg font-medium text-white">Authority One-Pager</h3>
<span className="text-sm text-gray-500 font-mono">For high-ticket consultants</span>
</div>
</div>
<div className="w-1 shrink-0"></div>
</div>
</section>

<section className="border-b border-grid bg-[#0E1014]" id="problem">
<div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 swiss-grid border-l-0 border-r-0 md:border-l md:border-r border-white/5">
<div className="p-8 md:p-20 lg:p-24 border-b lg:border-b-0 lg:border-r border-grid flex flex-col justify-center">
<span className="text-accent text-xs font-bold uppercase tracking-widest mb-6">The Gap</span>
<h2 className="text-4xl md:text-5xl font-semibold leading-[0.95] tracking-tightest mb-8 text-white">
                        Strong businesses lose deals because of perception.
                    </h2>
<p className="text-lg text-gray-400 leading-relaxed font-light mb-8">
                        When your digital presence looks generic, the market assumes you are.
                        <br/><br/>
                        That hesitation shows up as price resistance, longer sales cycles, and the constant need to justify your expertise.
                    </p>
</div>
<div className="p-8 md:p-20 lg:p-24 bg-[#0B0D10] flex flex-col justify-center items-center relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://api.iconify.design/lucide:grid.svg?color=%23222')] opacity-20"></div>

<div className="relative w-full max-w-md">
<div className="absolute top-0 left-0 w-2/3 aspect-[4/3] bg-[#1a1a1a] border border-white/10 opacity-50 transform -translate-x-4 -translate-y-4 scale-90 blur-[1px]">
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-gray-600 font-mono text-xs uppercase">Generic</span>
</div>
</div>
<div className="relative w-full aspect-[4/3] bg-[#000] border border-accent shadow-[0_0_30px_rgba(246,2,97,0.15)] z-10 p-6 flex flex-col justify-between">
<div className="flex justify-between items-center">
<div className="w-4 h-4 rounded-full bg-accent"></div>
<div className="px-2 py-1 bg-white/10 text-[10px] text-white font-mono rounded">HIGH STATUS</div>
</div>
<div className="space-y-3">
<div className="w-3/4 h-2 bg-white/20 rounded"></div>
<div className="w-full h-2 bg-white/10 rounded"></div>
<div className="w-5/6 h-2 bg-white/10 rounded"></div>
</div>
<div className="w-full h-10 bg-accent text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center">
                                 Price Accepted
                             </div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-grid relative" id="solution">
<div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 swiss-grid border-l-0 border-r-0 md:border-l md:border-r">
<div className="bg-[#0f1115] border-b md:border-b-0 md:border-r border-grid p-12 flex items-center justify-center">
<div className="relative w-full max-w-sm aspect-square">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/10 rounded-full flex items-center justify-center">
<div className="absolute w-full h-[1px] bg-white/10 top-1/2 -translate-y-1/2"></div>
<div className="absolute h-full w-[1px] bg-white/10 left-1/2 -translate-x-1/2"></div>
<div className="w-32 h-32 bg-accent/10 rounded-full border border-accent animate-pulse"></div>
</div>
<div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#0f1115] px-2 text-xs text-gray-400 uppercase font-mono">Perception</div>
<div className="absolute bottom-4 left-4 bg-[#0f1115] px-2 text-xs text-gray-400 uppercase font-mono">Trust</div>
<div className="absolute bottom-4 right-4 bg-[#0f1115] px-2 text-xs text-accent uppercase font-mono font-bold">Price</div>
</div>
</div>
<div className="p-12 md:p-24 flex flex-col justify-center">
<h2 className="text-3xl md:text-5xl font-semibold leading-[0.95] tracking-tightest mb-8">
                        Visual Equity fixeswhat marketing can’t.
                    </h2>
<p className="text-lg text-gray-400 leading-relaxed font-light mb-8">
                        We don’t redesign aesthetics. We engineer belief. Every page is built to remove doubt, increase perceived value, and make your pricing feel obvious.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-gray-300">
<svg className="lucide lucide-check text-accent" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Instant Credibility
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<svg className="lucide lucide-check text-accent" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Justified Premium Pricing
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<svg className="lucide lucide-check text-accent" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Shortened Sales Cycles
                        </li>
</ul>
</div>
</div>
</section>

<section className="border-b border-grid bg-[#0B0D10] text-white" id="process">
<div className="max-w-[1440px] mx-auto px-6 py-24 swiss-grid border-l-0 border-r-0 md:border-l md:border-r border-none">
<div className="max-w-3xl mb-16">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tightest mb-6">How it works</h2>
<p className="text-xl text-gray-500 font-light tracking-wide">A clear, structured process. No chaos. No guesswork.</p>
</div>
<div className="border-t border-white/10">

<div className="group border-b border-white/10 py-12 flex flex-col md:flex-row gap-6 md:gap-32 transition-colors hover:bg-white/[0.02]">
<span className="font-mono text-accent font-medium text-sm pt-1">01</span>
<div>
<h3 className="text-2xl font-medium tracking-tight mb-3 text-gray-100 group-hover:text-accent transition-colors">Discovery &amp; Value Audit</h3>
<p className="text-gray-500 font-light text-lg max-w-xl leading-relaxed">We analyze your product, pricing, and positioning to identify perception gaps.</p>
</div>
</div>

<div className="group border-b border-white/10 py-12 flex flex-col md:flex-row gap-6 md:gap-32 transition-colors hover:bg-white/[0.02]">
<span className="font-mono text-accent font-medium text-sm pt-1">02</span>
<div>
<h3 className="text-2xl font-medium tracking-tight mb-3 text-gray-100 group-hover:text-accent transition-colors">Strategy &amp; Direction</h3>
<p className="text-gray-500 font-light text-lg max-w-xl leading-relaxed">We define what your audience must believe before converting.</p>
</div>
</div>

<div className="group border-b border-white/10 py-12 flex flex-col md:flex-row gap-6 md:gap-32 transition-colors hover:bg-white/[0.02]">
<span className="font-mono text-accent font-medium text-sm pt-1">03</span>
<div>
<h3 className="text-2xl font-medium tracking-tight mb-3 text-gray-100 group-hover:text-accent transition-colors">Design &amp; Execution</h3>
<p className="text-gray-500 font-light text-lg max-w-xl leading-relaxed">High-status design built for trust, clarity, and conversion.</p>
</div>
</div>

<div className="group border-b border-white/10 py-12 flex flex-col md:flex-row gap-6 md:gap-32 transition-colors hover:bg-white/[0.02]">
<span className="font-mono text-accent font-medium text-sm pt-1">04</span>
<div>
<h3 className="text-2xl font-medium tracking-tight mb-3 text-gray-100 group-hover:text-accent transition-colors">Feedback &amp; Refinement</h3>
<p className="text-gray-500 font-light text-lg max-w-xl leading-relaxed">Unlimited revisions to reach precision — not compromise.</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-grid bg-[#0E1014]" id="services">
<div className="max-w-[1440px] mx-auto swiss-grid border-l-0 border-r-0 md:border-l md:border-r">
<div className="p-8 md:p-20 border-b border-grid bg-[#0B0D10]">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<span className="text-accent text-xs font-bold uppercase tracking-widest mb-4 block">Services</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tightest mb-4 text-white">What we ship</h2>
<p className="text-gray-500 text-lg font-light max-w-2xl">If it affects trust, perception, or conversion — we design it.</p>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

<div className="group p-10 border-r border-b border-grid bg-[#0B0D10] hover:bg-[#111] transition-colors duration-300">
<svg className="lucide lucide-layout text-gray-600 group-hover:text-white mb-6 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><line x1="3" x2="21" y1="9" y2="9"></line><line x1="9" x2="9" y1="21" y2="9"></line></svg>
<h3 className="text-lg font-medium text-white mb-2">SaaS Marketing Sites</h3>
<p className="text-sm text-gray-500 leading-relaxed">Full redesigns focused on clarity and positioning authority.</p>
</div>

<div className="group p-10 border-r border-b border-grid bg-[#0B0D10] hover:bg-[#111] transition-colors duration-300">
<svg className="lucide lucide-monitor text-gray-600 group-hover:text-white mb-6 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
<h3 className="text-lg font-medium text-white mb-2">Landing Pages</h3>
<p className="text-sm text-gray-500 leading-relaxed">High-converting pages for specific campaigns and products.</p>
</div>

<div className="group p-10 border-b lg:border-r border-grid bg-[#0B0D10] hover:bg-[#111] transition-colors duration-300">
<svg className="lucide lucide-credit-card text-gray-600 group-hover:text-white mb-6 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
<h3 className="text-lg font-medium text-white mb-2">Pricing Pages</h3>
<p className="text-sm text-gray-500 leading-relaxed">Psychologically engineered to increase perceived value.</p>
</div>

<div className="group p-10 border-r border-b border-grid bg-[#0B0D10] hover:bg-[#111] transition-colors duration-300">
<svg className="lucide lucide-file-text text-gray-600 group-hover:text-white mb-6 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
<h3 className="text-lg font-medium text-white mb-2">Authority One-Pagers</h3>
<p className="text-sm text-gray-500 leading-relaxed">For consultants who need to close high-ticket deals.</p>
</div>

<div className="group p-10 border-r border-b border-grid bg-[#0B0D10] hover:bg-[#111] transition-colors duration-300">
<svg className="lucide lucide-layers text-gray-600 group-hover:text-white mb-6 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path></svg>
<h3 className="text-lg font-medium text-white mb-2">Design Systems</h3>
<p className="text-sm text-gray-500 leading-relaxed">Scalable component libraries for your product and brand.</p>
</div>

<div className="group p-10 border-b border-grid bg-[#0B0D10] hover:bg-[#111] transition-colors duration-300">
<svg className="lucide lucide-bar-chart-3 text-gray-600 group-hover:text-white mb-6 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
<h3 className="text-lg font-medium text-white mb-2">Investor Decks</h3>
<p className="text-sm text-gray-500 leading-relaxed">Presentations that communicate value and vision clearly.</p>
</div>
</div>
</div>
</section>

<section className="border-b border-grid bg-[#0B0D10] py-24" id="pricing">
<div className="max-w-[1440px] mx-auto px-6 swiss-grid border-l-0 border-r-0 md:border-l md:border-r border-none">

<h2 className="text-5xl md:text-7xl font-semibold tracking-tightest text-white mb-16">
                    Services &amp; pricing
                </h2>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

<div className="bg-[#F2F2F2] p-8 flex flex-col h-full text-black">
<h3 className="text-xl font-bold mb-4">Mobile App Design</h3>
<p className="text-sm text-gray-600 leading-relaxed mb-8 min-h-[40px]">
                            High-fidelity mobile experiences designed for usability, clarity, and premium feel.
                        </p>
<div className="w-full h-px bg-black/10 mb-8"></div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold tracking-tight">$4,999</span>
<span className="text-sm text-gray-500 font-medium">/ start</span>
</div>
<ul className="space-y-3 mb-8 flex-grow">
<li className="flex items-start gap-3 text-sm font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-[#F60261] mt-1.5 shrink-0"></span>
                                Simple screens: $150 / screen
                            </li>
<li className="flex items-start gap-3 text-sm font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-[#F60261] mt-1.5 shrink-0"></span>
                                Timeline: 2–4 weeks
                            </li>
<li className="flex items-start gap-3 text-sm font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-[#F60261] mt-1.5 shrink-0"></span>
                                Unlimited revisions
                            </li>
</ul>
<div className="flex flex-col gap-3 mt-auto">
<button className="w-full py-4 border border-black/10 text-[11px] font-bold uppercase tracking-widest hover:bg-black/5 transition-colors">
                                Check Designs
                            </button>
<button className="w-full py-4 bg-[#0B0D10] text-white text-[11px] font-bold uppercase tracking-widest hover:bg-[#F60261] transition-colors">
                                Book a 15min Call
                            </button>
</div>
</div>

<div className="bg-[#111111] border border-white/10 p-8 flex flex-col h-full text-white">
<h3 className="text-xl font-bold mb-4">Web App &amp; Dashboard UI</h3>
<p className="text-sm text-gray-400 leading-relaxed mb-8 min-h-[40px]">
                            Clean, scalable UI systems for SaaS products and internal platforms.
                        </p>
<div className="w-full h-px bg-white/10 mb-8"></div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold tracking-tight">$4,999</span>
<span className="text-sm text-gray-500 font-medium">/ start</span>
</div>
<ul className="space-y-3 mb-8 flex-grow">
<li className="flex items-start gap-3 text-sm font-medium text-gray-300">
<span className="w-1.5 h-1.5 rounded-full bg-[#F60261] mt-1.5 shrink-0"></span>
                                Complex screens: $400 / screen
                            </li>
<li className="flex items-start gap-3 text-sm font-medium text-gray-300">
<span className="w-1.5 h-1.5 rounded-full bg-[#F60261] mt-1.5 shrink-0"></span>
                                Timeline: 2–4 weeks
                            </li>
<li className="flex items-start gap-3 text-sm font-medium text-gray-300">
<span className="w-1.5 h-1.5 rounded-full bg-[#F60261] mt-1.5 shrink-0"></span>
                                Unlimited revisions
                            </li>
</ul>
<div className="flex flex-col gap-3 mt-auto">
<button className="w-full py-4 border border-white/10 text-[11px] font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
                                Check Designs
                            </button>
<button className="w-full py-4 bg-white text-black text-[11px] font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                                Book a 15min Call
                            </button>
</div>
</div>

<div className="bg-[#111111] border border-white/10 p-8 flex flex-col h-full text-white">
<h3 className="text-xl font-bold mb-4">Logo &amp; Branding</h3>
<p className="text-sm text-gray-400 leading-relaxed mb-8 min-h-[40px]">
                            Brand systems that communicate authority, clarity, and long-term value.
                        </p>
<div className="w-full h-px bg-white/10 mb-8"></div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold tracking-tight">$2,000</span>
<span className="text-sm text-gray-500 font-medium">/ fixed</span>
</div>
<ul className="space-y-3 mb-8 flex-grow">
<li className="flex items-start gap-3 text-sm font-medium text-gray-300">
<span className="w-1.5 h-1.5 rounded-full bg-[#F60261] mt-1.5 shrink-0"></span>
                                2 weeks delivery
                            </li>
<li className="flex items-start gap-3 text-sm font-medium text-gray-300">
<span className="w-1.5 h-1.5 rounded-full bg-[#F60261] mt-1.5 shrink-0"></span>
                                Brand book
                            </li>
<li className="flex items-start gap-3 text-sm font-medium text-gray-300">
<span className="w-1.5 h-1.5 rounded-full bg-[#F60261] mt-1.5 shrink-0"></span>
                                Pitch deck template
                            </li>
</ul>
<div className="flex flex-col gap-3 mt-auto">
<button className="w-full py-4 bg-white text-black text-[11px] font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                                Book a 15min Call
                            </button>
</div>
</div>

<div className="bg-[#111111] border border-white/10 p-8 flex flex-col h-full text-white">
<h3 className="text-xl font-bold mb-4">Websites &amp; Landing Pages</h3>
<p className="text-sm text-gray-400 leading-relaxed mb-8 min-h-[40px]">
                            Conversion-focused websites from strategy to development.
                        </p>
<div className="w-full h-px bg-white/10 mb-8"></div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold tracking-tight">$3,499</span>
<span className="text-sm text-gray-500 font-medium">/ project</span>
</div>
<ul className="space-y-3 mb-8 flex-grow">
<li className="flex items-start gap-3 text-sm font-medium text-gray-300">
<span className="w-1.5 h-1.5 rounded-full bg-[#F60261] mt-1.5 shrink-0"></span>
                                2–4 weeks delivery
                            </li>
<li className="flex items-start gap-3 text-sm font-medium text-gray-300">
<span className="w-1.5 h-1.5 rounded-full bg-[#F60261] mt-1.5 shrink-0"></span>
                                Development (Framer/Next.js)
                            </li>
<li className="flex items-start gap-3 text-sm font-medium text-gray-300">
<span className="w-1.5 h-1.5 rounded-full bg-[#F60261] mt-1.5 shrink-0"></span>
                                Animations (Rive/AE)
                            </li>
</ul>
<div className="flex flex-col gap-3 mt-auto">
<button className="w-full py-4 bg-white text-black text-[11px] font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                                Book a 15min Call
                            </button>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-grid bg-[#0B0D10]">
<div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 swiss-grid border-l-0 border-r-0 md:border-l md:border-r">
<div className="col-span-1 md:col-span-4 p-8 md:p-12 border-b md:border-b-0 md:border-r border-grid">
<h2 className="text-3xl font-semibold tracking-tightest text-white">FAQ</h2>
</div>
<div className="col-span-1 md:col-span-8">
<div className="divide-y divide-white/10">

<details className="group p-8 cursor-pointer open:bg-white/5 transition-colors">
<summary className="flex justify-between items-center text-lg font-medium text-white list-none">
                                Is it really unlimited?
                                <span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p className="text-gray-400 leading-relaxed text-sm mt-4">Yes. You can add as many requests to your queue as you'd like. We execute them one by one to ensure deep focus and premium quality.</p>
</details>

<details className="group p-8 cursor-pointer open:bg-white/5 transition-colors">
<summary className="flex justify-between items-center text-lg font-medium text-white list-none">
                                How fast is delivery?
                                <span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p className="text-gray-400 leading-relaxed text-sm mt-4">Most tasks are completed within 48–72 hours. Larger projects are broken down into milestones.</p>
</details>

<details className="group p-8 cursor-pointer open:bg-white/5 transition-colors">
<summary className="flex justify-between items-center text-lg font-medium text-white list-none">
                                Is this design-only?
                                <span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p className="text-gray-400 leading-relaxed text-sm mt-4">No. This is perception and conversion engineering. We consider copy, flow, and user psychology.</p>
</details>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden bg-[#0B0D10]" id="conversion">
<div className="absolute inset-0 bg-accent/5"></div>

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="max-w-[1440px] mx-auto px-6 py-32 md:py-48 text-center relative z-10 swiss-grid border-l-0 border-r-0 md:border-l md:border-r border-none">
<h2 className="text-5xl md:text-8xl font-semibold tracking-tightest leading-none mb-8 text-white">
                    Stop losing deals<br/>to perception.
                </h2>
<p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
                    We don’t sell design. We qualify partnerships.<br/>
                    The call determines fit — not pressure.
                </p>
<div className="flex flex-col items-center gap-6">
<button className="bg-white text-black px-12 py-6 text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-200 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                        Book a Strategy Call
                    </button>
</div>
</div>
</section>
</main>

<footer className="border-t border-grid bg-[#0B0D10] py-12">
<div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start">
<span className="uppercase flex items-center gap-2 text-lg font-bold text-white tracking-tighter mb-2" style={{}}>sTUDIO tRËT</span>
<span className="text-xs text-gray-600 font-mono">Visual Equity for SaaS &amp; Consulting</span>
</div>
<div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-500">
<a className="hover:text-white transition-colors" href="#">Legal</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
</div>
<div className="text-xs text-gray-700 font-mono">
                © 2024 Capital Digital.
            </div>
</div>
</footer>

    </>
  );
}
