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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Simple script to handle sticky header blur effect on scroll to mimic top-tier SaaS
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 20) {
                nav.classList.add('shadow-sm');
                nav.style.background = 'rgba(255, 255, 255, 0.8)';
            } else {
                nav.classList.remove('shadow-sm');
                nav.style.background = 'rgba(255, 255, 255, 0.4)';
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 inset-x-0 z-50 glass-nav transition-all duration-300">
<div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<span className="text-sm font-semibold tracking-widest text-zinc-900 uppercase">L A U N C H F A S T</span>
</a>
<div className="flex items-center gap-6">
<a className="hidden md:block text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#included">Features</a>
<a className="hidden md:block text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#process">Process</a>
<a className="text-xs font-medium brand-gradient text-white px-5 py-2 rounded-full hover:opacity-90 transition-opacity shadow-md shadow-[#B31FFF]/20" href="#cta">
                    Start Project
                </a>
</div>
</div>
</nav>
<main>

<section className="relative pt-40 pb-24 px-6 md:pt-56 md:pb-32 max-w-[1200px] mx-auto text-center flex flex-col items-center z-10">
<div className="hero-glow"></div>

<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden max-w-[1400px] mx-auto hidden md:block">
<img alt="Happy customer" className="absolute top-[10%] left-[5%] w-24 h-24 rounded-full object-cover blur-[5px] opacity-40" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=256&amp;q=80"/>
<img alt="Happy customer" className="absolute bottom-[40%] left-[10%] w-16 h-16 rounded-full object-cover blur-[3px] opacity-50" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=256&amp;q=80"/>
<img alt="Happy customer" className="absolute top-[20%] right-[5%] w-28 h-28 rounded-full object-cover blur-[6px] opacity-45" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=256&amp;q=80"/>
<img alt="Happy customer" className="absolute bottom-[35%] right-[12%] w-20 h-20 rounded-full object-cover blur-[4px] opacity-55" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=256&amp;q=80"/>
</div>
<div className="relative z-20 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200/60 shadow-sm text-xs font-medium text-zinc-600 mb-10 hover:border-zinc-300 transition-colors">
<span className="flex h-2 w-2 rounded-full brand-gradient"></span>
                Fixed Scope. Fixed Timeline. No Surprises.
            </div>
<h1 className="relative z-20 text-5xl md:text-6xl lg:text-[5.5rem] font-semibold tracking-tighter text-zinc-950 leading-[1.05] mb-8 max-w-4xl">
<span className="text-gradient">Launch Your Shopify Store in 15 Days</span><br/>
<span className="text-zinc-400">— For $799</span>
</h1>
<p className="relative z-20 text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                A complete Shopify launch built on Dawn. Payments, shipping &amp; domain configured. 10 products included.
            </p>
<div className="flex flex-col items-center w-full relative z-20">
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-8">
<a className="w-full sm:w-auto px-8 py-3.5 brand-gradient text-white text-sm font-medium rounded-full hover:opacity-90 transition-opacity shadow-[0_0_24px_rgba(179,31,255,0.25)] flex items-center justify-center gap-2 group" href="#cta">
                        Start My Launch
                        <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-zinc-900 border border-zinc-200 text-sm font-medium rounded-full hover:bg-zinc-50 transition-all flex items-center justify-center soft-shadow" href="#included">
                        View What's Included
                    </a>
</div>

<div className="flex items-center justify-center gap-3 sm:gap-6 text-xs font-medium text-zinc-400 flex-wrap">
<span className="flex items-center gap-1.5"><iconify-icon className="text-[#B31FFF]" icon="solar:check-circle-linear"></iconify-icon> Fixed Scope</span>
<span className="hidden sm:inline text-zinc-300">•</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-[#B31FFF]" icon="solar:check-circle-linear"></iconify-icon> No Custom Development</span>
<span className="hidden sm:inline text-zinc-300">•</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-[#B31FFF]" icon="solar:check-circle-linear"></iconify-icon> 7-Day Post-Launch Support</span>
</div>
</div>

<div className="mt-20 w-full max-w-4xl mx-auto relative perspective-1000 z-20">
<div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-transparent to-transparent z-10 pointer-events-none"></div>
<div className="w-full h-48 md:h-64 bg-white border border-zinc-200/50 rounded-t-[2rem] shadow-[0_-10px_40px_rgba(0,0,0,0.03)] grid-bg overflow-hidden relative flex flex-col">
<div className="h-12 border-b border-zinc-100 flex items-center px-6 gap-2 bg-white/50 backdrop-blur-sm">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-200"></div>
</div>
<div className="flex-1 p-8 flex gap-8 opacity-40">
<div className="w-1/3 space-y-4">
<div className="h-4 bg-zinc-100 rounded-md w-3/4"></div>
<div className="h-4 bg-zinc-100 rounded-md w-1/2"></div>
<div className="h-4 bg-zinc-100 rounded-md w-5/6"></div>
</div>
<div className="w-2/3 space-y-4">
<div className="h-32 bg-zinc-100 rounded-xl w-full"></div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full border-y border-zinc-100 bg-white/40 backdrop-blur-sm py-6 overflow-hidden flex relative z-20">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none"></div>
<div className="animate-marquee-lr flex items-center">
<div className="flex items-center justify-around min-w-[50%]">
<span className="text-xl font-bold tracking-tighter text-zinc-300 mx-12 uppercase">VERTEX</span>
<span className="text-xl font-bold tracking-tighter text-zinc-300 mx-12 uppercase">NEXUS</span>
<span className="text-xl font-bold tracking-tighter text-zinc-300 mx-12 uppercase">QUANTUM</span>
<span className="text-xl font-bold tracking-tighter text-zinc-300 mx-12 uppercase">STRATOS</span>
<span className="text-xl font-bold tracking-tighter text-zinc-300 mx-12 uppercase">AEON</span>
</div>
<div className="flex items-center justify-around min-w-[50%]">
<span className="text-xl font-bold tracking-tighter text-zinc-300 mx-12 uppercase">VERTEX</span>
<span className="text-xl font-bold tracking-tighter text-zinc-300 mx-12 uppercase">NEXUS</span>
<span className="text-xl font-bold tracking-tighter text-zinc-300 mx-12 uppercase">QUANTUM</span>
<span className="text-xl font-bold tracking-tighter text-zinc-300 mx-12 uppercase">STRATOS</span>
<span className="text-xl font-bold tracking-tighter text-zinc-300 mx-12 uppercase">AEON</span>
</div>
</div>
</section>

<section className="py-32 bg-white border-b border-zinc-100">
<div className="max-w-[1200px] mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
<div className="sticky top-32">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-950 mb-6">Built for Founders<br/>Who Want to Launch Fast</h2>
<p className="text-base text-zinc-500 mb-8 leading-relaxed max-w-md">
                            A highly structured, no-confusion process designed specifically for founders who need to go to market fast with a reliable foundation.
                        </p>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3 text-sm font-medium text-zinc-900 bg-zinc-50 px-5 py-3 rounded-2xl border border-zinc-100 w-fit">
<iconify-icon className="text-[#B31FFF] text-lg" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                No custom dev. No complex setups.
                            </div>
<div className="flex items-center gap-3 text-sm font-medium text-zinc-900 bg-zinc-50 px-5 py-3 rounded-2xl border border-zinc-100 w-fit">
<iconify-icon className="text-[#B31FFF] text-lg" icon="solar:documents-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                You bring data, we build the store.
                            </div>
</div>
</div>
<div className="space-y-6">

<div className="p-8 bg-white border border-zinc-200/60 rounded-3xl soft-shadow">
<h3 className="text-lg font-semibold tracking-tight text-zinc-950 mb-6 flex items-center gap-3">
<span className="flex h-6 w-6 rounded-full bg-emerald-100 items-center justify-center">
<iconify-icon className="text-emerald-600 text-sm" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
                                Ideal fit if you...
                            </h3>
<ul className="space-y-5">
<li className="flex items-start gap-4 text-sm text-zinc-600">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-300 shrink-0"></span>
                                    You want a live Shopify store in 2 weeks
                                </li>
<li className="flex items-start gap-4 text-sm text-zinc-600">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-300 shrink-0"></span>
                                    You don’t need custom coding
                                </li>
<li className="flex items-start gap-4 text-sm text-zinc-600">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-300 shrink-0"></span>
                                    You’re okay using Shopify Dawn
                                </li>
<li className="flex items-start gap-4 text-sm text-zinc-600">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-300 shrink-0"></span>
                                    You have product data ready
                                </li>
</ul>
</div>

<div className="p-6 bg-zinc-50 border border-zinc-200/60 rounded-3xl flex items-center gap-4">
<span className="flex h-8 w-8 rounded-full bg-zinc-200 items-center justify-center shrink-0">
<iconify-icon className="text-zinc-500 text-lg" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
<p className="text-sm font-medium text-zinc-600">
                                Not ideal for complex custom builds.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 max-w-[1200px] mx-auto px-6" id="included">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-950 mb-4">Everything Included in the Launch</h2>
<p className="text-base text-zinc-500 max-w-xl">Everything required to transition from idea to transaction. Pre-configured, rigorously tested, and ready for handover.</p>
</div>
<div className="text-left md:text-right">
<span className="text-sm font-medium text-zinc-400 uppercase tracking-widest">Fixed Price</span>
<p className="text-3xl font-semibold tracking-tight text-zinc-900">$799</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-[1.5rem] border border-zinc-200/60 hover-lift flex flex-col h-full">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 text-zinc-700 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:shop-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 className="text-base font-semibold text-zinc-900 mb-4">Store Setup</h4>
<ul className="space-y-3 mt-auto flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-500">
<iconify-icon className="text-zinc-300 mt-0.5 shrink-0 text-base" icon="solar:check-circle-linear"></iconify-icon>
                            Shopify Partner build
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-500">
<iconify-icon className="text-zinc-300 mt-0.5 shrink-0 text-base" icon="solar:check-circle-linear"></iconify-icon>
                            Ownership transfer
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-500">
<iconify-icon className="text-zinc-300 mt-0.5 shrink-0 text-base" icon="solar:check-circle-linear"></iconify-icon>
                            Online Store channel enabled
                        </li>
</ul>
</div>

<div className="bg-white p-8 rounded-[1.5rem] border border-zinc-200/60 hover-lift flex flex-col h-full">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 text-zinc-700 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:palette-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 className="text-base font-semibold text-zinc-900 mb-4">Design &amp; Structure</h4>
<ul className="space-y-3 mt-auto flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-500">
<iconify-icon className="text-zinc-300 mt-0.5 shrink-0 text-base" icon="solar:check-circle-linear"></iconify-icon>
                            Dawn theme setup
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-500">
<iconify-icon className="text-zinc-300 mt-0.5 shrink-0 text-base" icon="solar:check-circle-linear"></iconify-icon>
                            One approved reference layout
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-500">
<iconify-icon className="text-zinc-300 mt-0.5 shrink-0 text-base" icon="solar:check-circle-linear"></iconify-icon>
                            Homepage + product + collection templates
                        </li>
</ul>
</div>

<div className="bg-white p-8 rounded-[1.5rem] border border-zinc-200/60 hover-lift flex flex-col h-full">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 text-zinc-700 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:box-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 className="text-base font-semibold text-zinc-900 mb-4">Products &amp; Content</h4>
<ul className="space-y-3 mt-auto flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-500">
<iconify-icon className="text-zinc-300 mt-0.5 shrink-0 text-base" icon="solar:check-circle-linear"></iconify-icon>
                            10 products uploaded
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-500">
<iconify-icon className="text-zinc-300 mt-0.5 shrink-0 text-base" icon="solar:check-circle-linear"></iconify-icon>
                            10 collections structured
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-500">
<iconify-icon className="text-zinc-300 mt-0.5 shrink-0 text-base" icon="solar:check-circle-linear"></iconify-icon>
                            6 standard pages setup
                        </li>
</ul>
</div>

<div className="bg-white p-8 rounded-[1.5rem] border border-zinc-200/60 hover-lift flex flex-col h-full">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 text-zinc-700 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:wallet-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 className="text-base font-semibold text-zinc-900 mb-4">Essential Configurations</h4>
<ul className="space-y-3 mt-auto flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-500">
<iconify-icon className="text-zinc-300 mt-0.5 shrink-0 text-base" icon="solar:check-circle-linear"></iconify-icon>
                            Payments setup
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-500">
<iconify-icon className="text-zinc-300 mt-0.5 shrink-0 text-base" icon="solar:check-circle-linear"></iconify-icon>
                            Shipping zones configured
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-500">
<iconify-icon className="text-zinc-300 mt-0.5 shrink-0 text-base" icon="solar:check-circle-linear"></iconify-icon>
                            Domain connection
                        </li>
</ul>
</div>

<div className="bg-white p-8 rounded-[1.5rem] border border-zinc-200/60 hover-lift flex flex-col h-full">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 text-zinc-700 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 className="text-base font-semibold text-zinc-900 mb-4">Apps &amp; Enhancements</h4>
<ul className="space-y-3 mt-auto flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-500">
<iconify-icon className="text-zinc-300 mt-0.5 shrink-0 text-base" icon="solar:check-circle-linear"></iconify-icon>
                            Wishlist installed
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-500">
<iconify-icon className="text-zinc-300 mt-0.5 shrink-0 text-base" icon="solar:check-circle-linear"></iconify-icon>
                            Review app configured
                        </li>
</ul>
</div>

<div className="bg-white p-8 rounded-[1.5rem] border border-zinc-200/60 hover-lift flex flex-col h-full lg:col-span-1 md:col-span-2">
<div className="w-12 h-12 rounded-xl bg-[#B31FFF]/5 border border-[#B31FFF]/20 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-[#B31FFF]" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 className="text-base font-semibold text-zinc-900 mb-4">QA &amp; Handover</h4>
<ul className="space-y-3 mt-auto flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-4">
<li className="flex items-start gap-3 text-sm text-zinc-500">
<iconify-icon className="text-zinc-300 mt-0.5 shrink-0 text-base" icon="solar:check-circle-linear"></iconify-icon>
                            Mobile check
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-500">
<iconify-icon className="text-zinc-300 mt-0.5 shrink-0 text-base" icon="solar:check-circle-linear"></iconify-icon>
                            Pre-launch QA
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-500">
<iconify-icon className="text-zinc-300 mt-0.5 shrink-0 text-base" icon="solar:check-circle-linear"></iconify-icon>
                            2 revision rounds
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-500">
<iconify-icon className="text-zinc-300 mt-0.5 shrink-0 text-base" icon="solar:check-circle-linear"></iconify-icon>
                            7-day stabilization support
                        </li>
</ul>
</div>
</div>
</section>

<section className="py-32 bg-zinc-950 text-white relative overflow-hidden" id="process">
<div className="dark-grid-bg absolute inset-0 opacity-40"></div>

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#B31FFF]/15 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
<div className="max-w-[1200px] mx-auto px-6 relative z-10">
<div className="mb-20 md:w-2/3">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6">From Setup to Launch<br/>in 3 Phases</h2>
<p className="text-base text-zinc-400 max-w-xl leading-relaxed">Engineered for velocity. A linear execution model to guarantee on-time delivery by eliminating scope creep and asynchronous delays.</p>
</div>
<div className="relative pl-6 md:pl-0">

<div className="absolute left-[27px] top-4 bottom-4 w-px bg-zinc-800 md:hidden"></div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-[28px] left-[40px] right-[40px] h-px bg-zinc-800"></div>

<div className="relative z-10 flex flex-row md:flex-col items-start gap-6 md:gap-0 group">
<div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-700 text-zinc-300 flex items-center justify-center text-sm font-semibold mb-6 shrink-0 group-hover:border-[#B31FFF]/50 group-hover:text-[#B31FFF] transition-colors shadow-lg">01</div>
<div>
<div className="inline-block px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-4">Phase 1 — Days 1–3</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">Setup</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Store structure + reference mapping.</p>
</div>
</div>

<div className="relative z-10 flex flex-row md:flex-col items-start gap-6 md:gap-0 group">
<div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-700 text-zinc-300 flex items-center justify-center text-sm font-semibold mb-6 shrink-0 group-hover:border-[#B31FFF]/50 group-hover:text-[#B31FFF] transition-colors shadow-lg">02</div>
<div>
<div className="inline-block px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-4">Phase 2 — Days 4–10</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">Build</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Theme setup, product uploads, apps, payments.</p>
</div>
</div>

<div className="relative z-10 flex flex-row md:flex-col items-start gap-6 md:gap-0 group">
<div className="w-14 h-14 rounded-2xl brand-gradient border-0 text-white flex items-center justify-center text-sm font-semibold mb-6 shrink-0 shadow-[0_0_20px_rgba(179,31,255,0.3)]">03</div>
<div>
<div className="inline-block px-2.5 py-1 rounded-md bg-[#B31FFF]/10 border border-[#B31FFF]/30 text-xs font-semibold tracking-widest uppercase text-[#B31FFF] mb-4">Phase 3 — Days 11–15</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">QA &amp; Go Live</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Testing, revisions, domain connection, handover.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-zinc-100 bg-white">
<div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-12 gap-16 lg:gap-20">

<div className="lg:col-span-6 flex flex-col justify-center">
<div className="p-10 bg-zinc-950 text-white rounded-[2rem] relative overflow-hidden shadow-2xl shadow-zinc-900/10">
<div className="dark-grid-bg absolute inset-0 opacity-20"></div>
<div className="absolute top-0 right-0 w-64 h-64 bg-[#B31FFF]/25 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2"></div>
<div className="relative z-10">
<h2 className="text-2xl font-semibold tracking-tight mb-8 flex items-center gap-3">
<iconify-icon className="text-2xl text-[#B31FFF]" icon="solar:flag-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                Definition of Done
                            </h2>
<ul className="space-y-5 text-sm text-zinc-300">
<li className="flex items-center gap-4 border-b border-white/5 pb-4">
<iconify-icon className="text-lg text-[#B31FFF] shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                    Store architecture matches the approved reference visually.
                                </li>
<li className="flex items-center gap-4 border-b border-white/5 pb-4">
<iconify-icon className="text-lg text-[#B31FFF] shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                    10 curated products + 10 collections are live and categorised.
                                </li>
<li className="flex items-center gap-4 border-b border-white/5 pb-4">
<iconify-icon className="text-lg text-[#B31FFF] shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                    Wishlist and review modules are operational.
                                </li>
<li className="flex items-center gap-4 border-b border-white/5 pb-4">
<iconify-icon className="text-lg text-[#B31FFF] shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                    Payment gateways and shipping logic pass test transactions.
                                </li>
<li className="flex items-center gap-4">
<iconify-icon className="text-lg text-[#B31FFF] shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                    Production domain connected, QA passed, ownership transferred.
                                </li>
</ul>
</div>
</div>
</div>

<div className="lg:col-span-6 flex flex-col justify-center">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-950 mb-8">Scope Extensions</h2>
<div className="space-y-3">
<div className="flex items-center justify-between p-4 rounded-2xl bg-zinc-50/50 border border-zinc-200/60 hover:border-zinc-300 transition-colors group cursor-default">
<span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-900 transition-colors">+25 Product Uploads</span>
<span className="text-xs font-semibold text-zinc-900 bg-white px-3 py-1.5 rounded-lg border border-zinc-200 shadow-sm">$150</span>
</div>
<div className="flex items-center justify-between p-4 rounded-2xl bg-zinc-50/50 border border-zinc-200/60 hover:border-zinc-300 transition-colors group cursor-default">
<span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-900 transition-colors">+50 Product Uploads</span>
<span className="text-xs font-semibold text-zinc-900 bg-white px-3 py-1.5 rounded-lg border border-zinc-200 shadow-sm">$250</span>
</div>
<div className="flex items-center justify-between p-4 rounded-2xl bg-zinc-50/50 border border-zinc-200/60 hover:border-zinc-300 transition-colors group cursor-default">
<span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-900 transition-colors">Additional Banner Asset</span>
<span className="text-xs font-semibold text-zinc-900 bg-white px-3 py-1.5 rounded-lg border border-zinc-200 shadow-sm">$35</span>
</div>
<div className="flex items-center justify-between p-4 rounded-2xl bg-zinc-50/50 border border-zinc-200/60 hover:border-zinc-300 transition-colors group cursor-default">
<span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-900 transition-colors">Custom Homepage Section</span>
<span className="text-xs font-semibold text-zinc-900 bg-white px-3 py-1.5 rounded-lg border border-zinc-200 shadow-sm">$50</span>
</div>
<div className="flex items-center justify-between p-4 rounded-2xl bg-zinc-50/50 border border-zinc-200/60 hover:border-zinc-300 transition-colors group cursor-default">
<span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-900 transition-colors">Analytics (GA4 + Pixel) Setup</span>
<span className="text-xs font-semibold text-zinc-900 bg-white px-3 py-1.5 rounded-lg border border-zinc-200 shadow-sm">$75</span>
</div>
<div className="flex items-center justify-between p-4 rounded-2xl bg-zinc-50/50 border border-zinc-200/60 hover:border-zinc-300 transition-colors group cursor-default">
<span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-900 transition-colors">Additional Revision Cycle</span>
<span className="text-xs font-semibold text-zinc-900 bg-white px-3 py-1.5 rounded-lg border border-zinc-200 shadow-sm">$80</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="cta">
<div className="max-w-[1000px] mx-auto bg-zinc-950 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
<div className="dark-grid-bg absolute inset-0 opacity-30"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-[#B31FFF]/25 rounded-full blur-[100px] pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tighter text-white mb-6 leading-[1.1]">
                        Bypass the build phase.<br/>Start selling.
                    </h2>
<p className="text-base text-zinc-400 mb-10 leading-relaxed">
                        Fixed deliverables. Fixed pricing. A highly structured technical execution to get your brand to market in exactly 15 days.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 brand-gradient text-white text-sm font-semibold rounded-full hover:opacity-90 transition-opacity shadow-[0_0_30px_rgba(179,31,255,0.35)]">
                            Initiate Launch Sequence
                        </button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-transparent text-white border border-zinc-700 text-sm font-medium rounded-full hover:bg-zinc-900 hover:border-zinc-600 transition-all">
                            Request Technical Audit
                        </button>
</div>
</div>
</div>
</section>
</main>
<footer className="bg-[#FAFAFA] py-12 text-center">
<div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center">
<span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-6">L A U N C H F A S T</span>
<p className="text-xs text-zinc-400 font-medium">© 2023 Launchfast Inc. Designed for scale.</p>
</div>
</footer>


    </>
  );
}
