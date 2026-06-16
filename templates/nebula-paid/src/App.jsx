import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



(function () {
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



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
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen mix-blend-screen brightness-50 opacity-50 saturate-0 z-10 pointer-events-none" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="bKN5upvoulAmWvInmHza"></div>

</div></div>

<div className="gradient-blur">
<div></div>
<div className=""></div>
<div></div>
<div className=""></div>
<div></div>
<div></div>
</div>

<div className="fixed flex z-50 w-full pt-6 pr-4 pl-4 top-0 left-0 justify-center">
<nav className="shadow-black/50 flex md:gap-12 md:w-auto bg-black/60 w-full max-w-5xl rounded-full pt-2 pr-2 pb-2 pl-6 shadow-2xl backdrop-blur-xl gap-x-8 gap-y-8 items-center justify-between" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2))', -BorderRadiusBefore: '9999px'}}>
<div className="flex gap-2 shrink-0 gap-x-2 gap-y-2 items-center cursor-pointer" onclick="window.location.href='/home'" role="button">
<span className="text-base font-medium text-white tracking-tight">Nebula</span>
</div>
<div className="hidden md:flex items-center gap-6">
<a className="hover:text-white transition-colors text-xs font-medium text-gray-400" href="/product">Product</a>
<a className="hover:text-white transition-colors text-xs font-medium text-gray-400" href="/docs">Docs</a>
<a className="hover:text-white transition-colors text-xs font-medium text-gray-400" href="/customers">Customers</a>
<a className="hover:text-white transition-colors text-xs font-medium text-gray-400" href="/pricing">Pricing</a>
</div>
<div className="flex items-center gap-4 shrink-0">
<a className="hidden md:block hover:text-white transition-colors text-xs font-medium text-gray-300" href="/signin">Sign in</a>
<button className="group inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative items-center justify-center" onclick="window.location.href='/request'" role="button">

<span className="animate-[spin_3s_linear_infinite] transition-opacity duration-300 group-hover:opacity-100 opacity-0 absolute top-[-100%] right-[-100%] bottom-[-100%] left-[-100%]"></span>

<span className="transition-opacity duration-300 group-hover:opacity-0 bg-zinc-800 rounded-full absolute top-0 right-0 bottom-0 left-0" style={{}}></span>

<span className="flex items-center justify-center gap-2 uppercase transition-colors duration-300 group-hover:text-white text-xs font-medium text-zinc-400 tracking-widest bg-gradient-to-b from-zinc-800 to-zinc-950 w-full h-full rounded-full pt-2.5 pr-6 pb-2.5 pl-6 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
<span className="relative z-10" style={{}}>Request Demo</span>
<svg className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
</div>
</nav>
</div>

<section className="min-h-screen flex flex-col md:pt-20 overflow-hidden w-full pt-32 relative items-center justify-center" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 95%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 95%, transparent)'}}>

<div className="absolute inset-0 -z-20">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120%] h-[80%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-zinc-900/20 to-black"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
</div>

<div className="absolute inset-0 w-full h-full grid grid-cols-1 md:grid-cols-7 gap-0 -z-10 pointer-events-none">
<div className="relative h-full hidden md:block border-r border-white/5 col-anim delay-1">
<div className="absolute bottom-0 left-0 right-0 bg-black h-[75%] border-t border-white/10 shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)]"></div>
</div>
<div className="relative h-full hidden md:block border-r border-white/5 col-anim delay-2">
<div className="absolute bottom-0 left-0 right-0 bg-black h-[65%] border-t border-white/10 shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)]"></div>
</div>
<div className="relative h-full hidden md:block border-r border-white/5 col-anim delay-3">
<div className="absolute bottom-0 left-0 right-0 bg-black h-[55%] border-t border-white/10 shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)]"></div>
</div>
<div className="relative h-full border-r border-white/5 md:border-none col-anim delay-4">
<div className="absolute bottom-0 left-0 right-0 bg-black h-[45%] border-t border-white/10 shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)]"></div>
<div className="absolute top-[20%] left-0 right-0 h-[30%] bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
</div>
<div className="relative h-full hidden md:block border-l border-white/5 col-anim delay-5">
<div className="absolute bottom-0 left-0 right-0 bg-black h-[55%] border-t border-white/10 shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)]"></div>
</div>
<div className="relative h-full hidden md:block border-l border-white/5 col-anim delay-6">
<div className="absolute bottom-0 left-0 right-0 bg-black h-[65%] border-t border-white/10 shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)]"></div>
</div>
<div className="relative h-full hidden md:block border-l border-white/5 col-anim delay-7">
<div className="absolute bottom-0 left-0 right-0 bg-black h-[75%] border-t border-white/10 shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)]"></div>
</div>
</div>

<div className="text-center max-w-5xl z-10 mt-24 mr-auto mb-24 ml-auto pr-6 pl-6 relative">

<div className="[animation:fadeSlideIn_1s_ease-out_0.8s_both] animate-on-scroll inline-flex transition-transform hover:scale-105 cursor-pointer group animate bg-gradient-to-br from-white/10 to-white/0 rounded-full mb-10 pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-sm gap-x-2 gap-y-2 items-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', -BorderRadiusBefore: '9999px'}}>
<span className="flex h-1.5 w-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)] group-hover:animate-pulse"></span>
<span className="text-xs font-medium text-orange-100/80 tracking-wide group-hover:text-white transition-colors font-sans">New release: Nebula Protocol v2.0</span>
</div>

<h1 className="[animation:fadeSlideIn_1s_ease-out_1s_both] animate-on-scroll animate flex flex-wrap justify-center gap-x-[0.25em] gap-y-2 leading-[1.1] md:text-8xl cursor-default text-6xl font-medium tracking-tighter font-manrope mb-8">

<span className="inline-flex bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 opacity-60">Scale</span>

<span className="group inline-flex flex-wrap justify-center gap-x-[0.25em] cursor-pointer select-none">

<span className="inline-flex">
<span className="relative inline-block overflow-hidden h-[1.1em]">
<span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50" style={{transitionDelay: '0ms'}}>y</span>
<span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-orange-400 absolute top-0 left-0 translate-y-full" style={{transitionDelay: '0ms'}}>y</span>
</span>
<span className="relative inline-block overflow-hidden h-[1.1em]">
<span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50" style={{transitionDelay: '25ms'}}>o</span>
<span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-orange-400" style={{transitionDelay: '25ms'}}>o</span>
</span>
<span className="relative inline-block overflow-hidden h-[1.1em]">
<span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50" style={{transitionDelay: '50ms'}}>u</span>
<span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-orange-400" style={{transitionDelay: '50ms'}}>u</span>
</span>
<span className="relative inline-block overflow-hidden h-[1.1em]">
<span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50" style={{transitionDelay: '75ms'}}>r</span>
<span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-orange-400" style={{transitionDelay: '75ms'}}>r</span>
</span>
</span>

<span className="inline-flex">
<span className="relative inline-block overflow-hidden h-[1.1em]">
<span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50" style={{transitionDelay: '100ms'}}>p</span>
<span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-orange-400" style={{transitionDelay: '100ms'}}>p</span>
</span>
<span className="relative inline-block overflow-hidden h-[1.1em]">
<span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50" style={{transitionDelay: '125ms'}}>r</span>
<span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-orange-400" style={{transitionDelay: '125ms'}}>r</span>
</span>
<span className="relative inline-block overflow-hidden h-[1.1em]">
<span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50" style={{transitionDelay: '150ms'}}>o</span>
<span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-orange-400" style={{transitionDelay: '150ms'}}>o</span>
</span>
<span className="relative inline-block overflow-hidden h-[1.1em]">
<span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50" style={{transitionDelay: '175ms'}}>t</span>
<span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-orange-400" style={{transitionDelay: '175ms'}}>t</span>
</span>
<span className="relative inline-block overflow-hidden h-[1.1em]">
<span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50" style={{transitionDelay: '200ms'}}>o</span>
<span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-orange-400" style={{transitionDelay: '200ms'}}>o</span>
</span>
<span className="relative inline-block overflow-hidden h-[1.1em]">
<span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50" style={{transitionDelay: '225ms'}}>c</span>
<span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-orange-400" style={{transitionDelay: '225ms'}}>c</span>
</span>
<span className="relative inline-block overflow-hidden h-[1.1em]">
<span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50" style={{transitionDelay: '250ms'}}>o</span>
<span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-orange-400" style={{transitionDelay: '250ms'}}>o</span>
</span>
<span className="relative inline-block overflow-hidden h-[1.1em]">
<span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50" style={{transitionDelay: '275ms'}}>l</span>
<span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-orange-400" style={{transitionDelay: '275ms'}}>l</span>
</span>
</span>
</span>

<span className="inline-flex bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 opacity-60">with</span>
<span className="inline-flex bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 opacity-60">smart</span>
<span className="inline-flex bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 opacity-60">infrastructure</span>
</h1>

<p className="[animation:fadeSlideIn_1s_ease-out_1.2s_both] animate-on-scroll leading-relaxed md:text-2xl text-xl text-gray-400 tracking-normal max-w-3xl mr-auto mb-12 ml-auto animate font-manrope font-medium" style={{}}>
                The essential toolkit for deploying secure dApps. From writing your first smart contract to governing a global DAO, build it all on one unified layer.
            </p>

<div className="[animation:fadeSlideIn_1s_ease-out_1.4s_both] animate-on-scroll flex flex-col md:flex-row gap-6 animate mb-12 gap-x-6 gap-y-6 items-center justify-center">
<button className="group flex overflow-hidden uppercase transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)] focus:outline-none text-sm font-medium text-white tracking-widest font-geist rounded-full pt-5 pr-12 pb-5 pl-12 relative items-center justify-center" onclick="window.location.href='/signin'" role="button">
<style>
        @keyframes beam-spin { to { transform: rotate(360deg); } }
        @keyframes dots-move { 
            0% { background-position: 0 0; } 
            100% { background-position: 24px 24px; } 
        }
    </style>

<div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
<div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#ea580c_360deg)]" style={{animation: 'beam-spin 3s linear infinite'}}></div>
<div className="absolute inset-[1px] rounded-full bg-black"></div>
</div>

<div className="-z-10 overflow-hidden bg-zinc-950 rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px]">

<div className="absolute inset-0 bg-gradient-to-b from-zinc-800/60 to-transparent"></div>

<div className="opacity-30 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '12px 12px', animation: 'dots-move 8s linear infinite'}}></div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-orange-500/10 blur-2xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-orange-500/30"></div>
</div>

<span className="relative z-10 text-white/90 transition-colors group-hover:text-white font-sans">Start Building</span>
<svg className="lucide lucide-arrow-right relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="[animation:fadeSlideIn_1s_ease-out_1.6s_both] animate-on-scroll flex flex-col animate mt-32 mb-20 gap-x-4 gap-y-4 items-center">
<p className="text-xs text-gray-500 font-medium uppercase tracking-widest font-sans">Trusted by the modern web3 ecosystem</p>
<a className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white border-b border-transparent hover:border-white transition-all pb-0.5 group font-sans" href="#">
                    Read the manifesto
                    <svg className="lucide lucide-arrow-right w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="[animation:fadeSlideIn_1s_ease-out_1.8s_both] animate-on-scroll relative z-20 w-full max-w-6xl mx-auto px-6 pb-12 md:pb-20 animate">
<div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] opacity-40 grayscale hover:grayscale-0 transition-all duration-700 group">
<style>
        @keyframes infinite-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
            animation: infinite-scroll 40s linear infinite;
        }
        /* Pause animation on hover */
        .group:hover .animate-infinite-scroll {
            animation-play-state: paused;
        }
    </style>
<div className="flex items-center justify-center md:justify-start [&amp;_div]:mx-8 w-max animate-infinite-scroll">

<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-2xl text-white iconify--simple-icons" data-icon="simple-icons:git" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.658 2.66a1.838 1.838 0 0 1 1.9 3.039a1.837 1.837 0 0 1-2.6 0a1.85 1.85 0 0 1-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348a1.85 1.85 0 0 1 0 2.6a1.844 1.844 0 0 1-2.609 0a1.834 1.834 0 0 1 0-2.598c.182-.18.387-.316.605-.406V8.835a1.834 1.834 0 0 1-.996-2.41L7.636 3.7L.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477a1.545 1.545 0 0 0 2.186 0l10.43-10.43a1.544 1.544 0 0 0 0-2.187" fill="currentColor"></path></svg>
<span className="font-medium text-lg text-white font-sans">git</span>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-3xl text-white iconify--simple-icons" data-icon="simple-icons:npm" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019l-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z" fill="currentColor"></path></svg>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-xl text-white iconify--simple-icons" data-icon="simple-icons:lucid" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 0L3.694 4.8V24L12 19.2Zm0 19.2v4.502h8.305V14.4Z" fill="currentColor"></path></svg>
<span className="font-medium text-lg text-white font-sans">Lucidchart</span>
</div>
<div className="group flex items-center gap-2">
<span className="iconify text-xl text-white" data-icon="simple-icons:wrike"></span>
<span className="font-medium text-lg text-white font-sans">wrike</span>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-xl text-white iconify--simple-icons" data-icon="simple-icons:jquery" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M1.525 5.87c-2.126 3.054-1.862 7.026-.237 10.269q.057.117.118.229q.035.076.077.15q.021.042.047.082q.04.078.081.152l.157.266c.03.049.057.097.09.146c.056.094.12.187.178.281q.037.06.079.117a6 6 0 0 0 .31.445q.115.16.24.315l.086.115l.22.269c.028.03.055.067.084.099q.148.176.306.35l.005.006a3 3 0 0 0 .425.44q.119.125.245.245l.101.097q.165.158.34.309q.002 0 .005.003l.057.05q.153.135.31.26l.125.105l.26.2l.137.105c.093.07.192.139.287.207q.052.038.106.073l.03.023l.28.185l.12.08q.221.14.44.272q.063.031.123.068q.164.095.329.183q.09.05.184.094q.113.062.234.125a.3.3 0 0 1 .056.023l.096.047q.18.09.375.175q.037.014.076.034q.215.094.438.182c.034.01.07.027.105.04q.204.078.411.152l.05.018q.23.078.46.15l.111.033c.16.048.314.105.474.137c10.273 1.872 13.258-6.177 13.258-6.177c-2.508 3.266-6.958 4.127-11.174 3.169c-.156-.036-.312-.086-.47-.132a14 14 0 0 1-.567-.182l-.062-.024q-.202-.07-.4-.148l-.11-.04q-.22-.09-.433-.184c-.031-.01-.057-.024-.088-.036l-.362-.17l-.106-.052c-.094-.044-.188-.095-.28-.143a4 4 0 0 1-.187-.096c-.114-.06-.227-.125-.34-.187q-.052-.035-.112-.066a16 16 0 0 1-.439-.27a2 2 0 0 1-.118-.078a6 6 0 0 1-.312-.207l-.103-.073a10 10 0 0 1-.295-.212q-.064-.05-.132-.1c-.088-.07-.177-.135-.265-.208l-.118-.095a11 11 0 0 1-.335-.28l-.037-.031l-.347-.316l-.1-.094q-.123-.125-.25-.246l-.098-.1a9 9 0 0 1-.309-.323l-.015-.016q-.159-.174-.313-.355q-.04-.046-.08-.097l-.227-.277a21 21 0 0 1-.34-.449C2.152 11.79 1.306 7.384 3.177 3.771m4.943-.473c-1.54 2.211-1.454 5.169-.254 7.508a9 9 0 0 0 .678 1.133c.23.33.484.721.793.988q.162.181.344.36l.09.09q.172.164.35.325l.016.013a10 10 0 0 0 .414.342c.034.023.063.05.096.073q.21.161.428.316l.015.009q.093.066.198.13c.028.018.06.042.09.06q.158.1.318.197l.048.023c.09.055.188.108.282.157c.033.02.065.035.1.054q.1.05.197.102l.032.014q.204.1.408.19q.05.02.092.039q.167.072.336.137c.05.017.097.037.144.052c.102.038.21.073.31.108l.14.045c.147.045.295.104.449.13C22.164 17.206 24 11.098 24 11.098c-1.653 2.38-4.852 3.513-8.261 2.628a8 8 0 0 1-.449-.13c-.048-.014-.09-.029-.136-.043c-.104-.036-.211-.07-.312-.109l-.144-.054c-.113-.045-.227-.087-.336-.135c-.034-.015-.065-.025-.091-.04q-.211-.093-.418-.192l-.206-.107l-.119-.06a6 6 0 0 1-.265-.15l-.062-.035c-.106-.066-.217-.13-.318-.198q-.05-.03-.097-.062l-.208-.136c-.144-.1-.285-.208-.428-.313q-.048-.042-.094-.079c-1.499-1.178-2.681-2.79-3.242-4.613c-.59-1.897-.46-4.023.56-5.75m4.292-.147c-.909 1.334-.996 2.99-.37 4.46c.665 1.563 2.024 2.79 3.608 3.37q.096.036.196.07l.088.027c.092.03.185.063.28.084c4.381.845 5.567-2.25 5.886-2.704c-1.043 1.498-2.792 1.857-4.938 1.335a5 5 0 0 1-.516-.16a6 6 0 0 1-.618-.254a6.5 6.5 0 0 1-1.082-.66c-1.922-1.457-3.113-4.236-1.859-6.5" fill="currentColor"></path></svg>
<span className="font-medium text-lg text-white font-sans">jQuery</span>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-xl text-white iconify--simple-icons" data-icon="simple-icons:openstack" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18.575 9.29h5.418v5.42h-5.418zM0 9.29h5.419v5.42H0zm18.575 7.827a1.207 1.207 0 0 1-1.206 1.206H6.623a1.207 1.207 0 0 1-1.205-1.206v-.858H0v5.252a2.236 2.236 0 0 0 2.229 2.23h19.53A2.237 2.237 0 0 0 24 21.512V16.26h-5.425zM21.763.258H2.233a2.236 2.236 0 0 0-2.23 2.23V7.74h5.419v-.858a1.206 1.206 0 0 1 1.205-1.206h10.746a1.206 1.206 0 0 1 1.205 1.206v.858H24V2.487A2.237 2.237 0 0 0 21.763.258" fill="currentColor"></path></svg>
<span className="font-medium text-lg text-white font-sans">openstack</span>
</div>
<div className="group flex items-center gap-2">
<span className="iconify text-xl text-white" data-icon="simple-icons:servicenow"></span>
<span className="font-medium text-lg text-white tracking-tight font-sans">servicenow</span>
</div>
<div className="group flex items-center gap-2">
<span className="font-bold text-xl text-white tracking-tight font-sans">paysafe:</span>
</div>

<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-2xl text-white iconify--simple-icons" data-icon="simple-icons:git" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.658 2.66a1.838 1.838 0 0 1 1.9 3.039a1.837 1.837 0 0 1-2.6 0a1.85 1.85 0 0 1-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348a1.85 1.85 0 0 1 0 2.6a1.844 1.844 0 0 1-2.609 0a1.834 1.834 0 0 1 0-2.598c.182-.18.387-.316.605-.406V8.835a1.834 1.834 0 0 1-.996-2.41L7.636 3.7L.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477a1.545 1.545 0 0 0 2.186 0l10.43-10.43a1.544 1.544 0 0 0 0-2.187" fill="currentColor"></path></svg>
<span className="font-medium text-lg text-white font-sans">git</span>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-3xl text-white iconify--simple-icons" data-icon="simple-icons:npm" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019l-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z" fill="currentColor"></path></svg>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-xl text-white iconify--simple-icons" data-icon="simple-icons:lucid" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 0L3.694 4.8V24L12 19.2Zm0 19.2v4.502h8.305V14.4Z" fill="currentColor"></path></svg>
<span className="font-medium text-lg text-white font-sans">Lucidchart</span>
</div>
<div className="group flex items-center gap-2">
<span className="iconify text-xl text-white" data-icon="simple-icons:wrike"></span>
<span className="font-medium text-lg text-white font-sans">wrike</span>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-xl text-white iconify--simple-icons" data-icon="simple-icons:jquery" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M1.525 5.87c-2.126 3.054-1.862 7.026-.237 10.269q.057.117.118.229q.035.076.077.15q.021.042.047.082q.04.078.081.152l.157.266c.03.049.057.097.09.146c.056.094.12.187.178.281q.037.06.079.117a6 6 0 0 0 .31.445q.115.16.24.315l.086.115l.22.269c.028.03.055.067.084.099q.148.176.306.35l.005.006a3 3 0 0 0 .425.44q.119.125.245.245l.101.097q.165.158.34.309q.002 0 .005.003l.057.05q.153.135.31.26l.125.105l.26.2l.137.105c.093.07.192.139.287.207q.052.038.106.073l.03.023l.28.185l.12.08q.221.14.44.272q.063.031.123.068q.164.095.329.183q.09.05.184.094q.113.062.234.125a.3.3 0 0 1 .056.023l.096.047q.18.09.375.175q.037.014.076.034q.215.094.438.182c.034.01.07.027.105.04q.204.078.411.152l.05.018q.23.078.46.15l.111.033c.16.048.314.105.474.137c10.273 1.872 13.258-6.177 13.258-6.177c-2.508 3.266-6.958 4.127-11.174 3.169c-.156-.036-.312-.086-.47-.132a14 14 0 0 1-.567-.182l-.062-.024q-.202-.07-.4-.148l-.11-.04q-.22-.09-.433-.184c-.031-.01-.057-.024-.088-.036l-.362-.17l-.106-.052c-.094-.044-.188-.095-.28-.143a4 4 0 0 1-.187-.096c-.114-.06-.227-.125-.34-.187q-.052-.035-.112-.066a16 16 0 0 1-.439-.27a2 2 0 0 1-.118-.078a6 6 0 0 1-.312-.207l-.103-.073a10 10 0 0 1-.295-.212q-.064-.05-.132-.1c-.088-.07-.177-.135-.265-.208l-.118-.095a11 11 0 0 1-.335-.28l-.037-.031l-.347-.316l-.1-.094q-.123-.125-.25-.246l-.098-.1a9 9 0 0 1-.309-.323l-.015-.016q-.159-.174-.313-.355q-.04-.046-.08-.097l-.227-.277a21 21 0 0 1-.34-.449C2.152 11.79 1.306 7.384 3.177 3.771m4.943-.473c-1.54 2.211-1.454 5.169-.254 7.508a9 9 0 0 0 .678 1.133c.23.33.484.721.793.988q.162.181.344.36l.09.09q.172.164.35.325l.016.013a10 10 0 0 0 .414.342c.034.023.063.05.096.073q.21.161.428.316l.015.009q.093.066.198.13c.028.018.06.042.09.06q.158.1.318.197l.048.023c.09.055.188.108.282.157c.033.02.065.035.1.054q.1.05.197.102l.032.014q.204.1.408.19q.05.02.092.039q.167.072.336.137c.05.017.097.037.144.052c.102.038.21.073.31.108l.14.045c.147.045.295.104.449.13C22.164 17.206 24 11.098 24 11.098c-1.653 2.38-4.852 3.513-8.261 2.628a8 8 0 0 1-.449-.13c-.048-.014-.09-.029-.136-.043c-.104-.036-.211-.07-.312-.109l-.144-.054c-.113-.045-.227-.087-.336-.135c-.034-.015-.065-.025-.091-.04q-.211-.093-.418-.192l-.206-.107l-.119-.06a6 6 0 0 1-.265-.15l-.062-.035c-.106-.066-.217-.13-.318-.198q-.05-.03-.097-.062l-.208-.136c-.144-.1-.285-.208-.428-.313q-.048-.042-.094-.079c-1.499-1.178-2.681-2.79-3.242-4.613c-.59-1.897-.46-4.023.56-5.75m4.292-.147c-.909 1.334-.996 2.99-.37 4.46c.665 1.563 2.024 2.79 3.608 3.37q.096.036.196.07l.088.027c.092.03.185.063.28.084c4.381.845 5.567-2.25 5.886-2.704c-1.043 1.498-2.792 1.857-4.938 1.335a5 5 0 0 1-.516-.16a6 6 0 0 1-.618-.254a6.5 6.5 0 0 1-1.082-.66c-1.922-1.457-3.113-4.236-1.859-6.5" fill="currentColor"></path></svg>
<span className="font-medium text-lg text-white font-sans">jQuery</span>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-xl text-white iconify--simple-icons" data-icon="simple-icons:openstack" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18.575 9.29h5.418v5.42h-5.418zM0 9.29h5.419v5.42H0zm18.575 7.827a1.207 1.207 0 0 1-1.206 1.206H6.623a1.207 1.207 0 0 1-1.205-1.206v-.858H0v5.252a2.236 2.236 0 0 0 2.229 2.23h19.53A2.237 2.237 0 0 0 24 21.512V16.26h-5.425zM21.763.258H2.233a2.236 2.236 0 0 0-2.23 2.23V7.74h5.419v-.858a1.206 1.206 0 0 1 1.205-1.206h10.746a1.206 1.206 0 0 1 1.205 1.206v.858H24V2.487A2.237 2.237 0 0 0 21.763.258" fill="currentColor"></path></svg>
<span className="font-medium text-lg text-white font-sans">openstack</span>
</div>
<div className="group flex items-center gap-2">
<span className="iconify text-xl text-white" data-icon="simple-icons:servicenow"></span>
<span className="font-medium text-lg text-white tracking-tight font-sans">servicenow</span>
</div>
<div className="group flex items-center gap-2">
<span className="font-bold text-xl text-white tracking-tight font-sans">paysafe:</span>
</div>
</div>
</div>
</div>
</section><section className="z-20 w-full max-w-7xl mt-24 mr-auto mb-24 ml-auto pt-10 pr-2 pb-32 pl-2 relative">

<div className="group overflow-hidden bg-gradient-to-br from-white/10 to-white/0 z-10 rounded-[2.5rem] mb-6 relative backdrop-blur-lg" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', -BorderRadiusBefore: '2.5rem'}}>

<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent opacity-40 pointer-events-none"></div>
<div className="grid lg:grid-cols-2 gap-0 gap-x-0 gap-y-0">

<div className="md:p-16 flex flex-col z-10 pt-8 pr-8 pb-8 pl-8 relative justify-center">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-2">
<svg className="text-white w-[24px] h-[24px]" data-icon-replaced="true" data-icon-set="solar" data-solar="posts-carousel-horizontal-bold-duotone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 16V8a3 3 0 0 0-3-3a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5a3 3 0 0 0 3-3m13-8v8a3 3 0 0 0 3 3a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5a3 3 0 0 0-3 3" fill="#ffffff" opacity=".5"></path><path d="M11.5 19c-1.886 0-2.828 0-3.414-.586S7.5 16.886 7.5 15V9c0-1.886 0-2.828.586-3.414S9.614 5 11.5 5h1c1.886 0 2.828 0 3.414.586S16.5 7.114 16.5 9v6c0 1.886 0 2.828-.586 3.414S14.386 19 12.5 19z" fill="#ffffff"></path></svg>
</div>
<h2 className="leading-[1.1] md:text-4xl text-3xl font-semibold text-white tracking-tight font-manrope mt-6 mb-6">
                    High-Performance API Integration
                </h2>
<div className="space-y-6 text-lg text-gray-400 font-sans leading-relaxed">
<p className="">
                        Connect to the decentralized web with Nebula's unified API surface. Designed for speed, reliability, and infinite scale.
                    </p>
<p className="">
                        Our SDKs provide type-safe access to over 50+ protocols with a single line of code. Eliminate node maintenance and focus on building your application logic with 99.99% uptime guaranteed.
                    </p>
<p className="">
                        Instant global state access — stream events, query historical data, and broadcast transactions with sub-millisecond latency.
                    </p>
</div>
</div>

<div className="relative min-h-[500px] bg-zinc-950/30 border-l border-white/5 overflow-hidden font-geist">

<div className="absolute inset-0 p-8 text-xs md:text-sm leading-relaxed text-gray-500 select-none opacity-40 pointer-events-none">
<div className="flex gap-1.5 mb-6 opacity-50">
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
</div>
<div className="font-mono space-y-1">
<p><span className="text-purple-400">import</span> { <span className="text-orange-200">Nebula</span> } <span className="text-purple-400">from</span> <span className="text-emerald-400">"@nebula/api"</span>;</p>
<p className="h-4"></p>
<p><span className="text-blue-400">const</span> client = <span className="text-purple-400">new</span> <span className="text-orange-200">Nebula</span>({</p>
<p className="pl-4">apiKey: <span className="text-emerald-400">"neb_live_8x92..."</span>,</p>
<p className="pl-4">region: <span className="text-emerald-400">"us-west"</span>,</p>
<p className="pl-4">retries: <span className="text-orange-200">3</span></p>
<p>});</p>
<p className="h-4"></p>
<p><span className="text-purple-400">async function</span> <span className="text-blue-400">syncData</span>() {</p>
<p className="pl-4"><span className="text-blue-400">const</span> stream = <span className="text-purple-400">await</span> client.<span className="text-blue-400">subscribe</span>(<span className="text-emerald-400">"new_blocks"</span>);</p>
<p className="pl-4">stream.<span className="text-blue-400">on</span>(<span className="text-emerald-400">"data"</span>, (block) =&gt; {</p>
<p className="pl-8">console.<span className="text-blue-400">log</span>(block.hash);</p>
<p className="pl-8"><span className="text-gray-500">// Processing real-time events...</span></p>
<p className="pl-4">});</p>
<p>}</p>
</div>
</div>

<div className="-translate-x-1/2 -translate-y-1/2 z-10 w-[90%] max-w-md pt-6 pr-6 pb-6 pl-6 absolute top-1/2 left-1/2">
<style>
        @keyframes typing { from { width: 0 } to { width: 100% } }
        @keyframes blink-caret { 50% { border-color: transparent } }
        @keyframes slideDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        .type-writer {
            overflow: hidden;
            white-space: nowrap;
            border-right: 2px solid #10b981;
            width: 0;
            animation: typing 1.5s steps(30, end) 2.5s forwards, blink-caret 0.75s step-end infinite;
        }
    </style>
<div className="rounded-2xl bg-zinc-900/90 border border-white/10 backdrop-blur-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-700 ease-out group-hover:scale-[1.02]">

<div className="p-5 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
<div>
<h4 className="text-white font-normal font-sans text-sm tracking-wide">API Status</h4>
<div className="flex items-center gap-2 mt-1">
<span className="relative flex h-2 w-2 shrink-0">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<p className="text-emerald-500 text-xs font-normal tracking-wide type-writer">
                        Systems Operational
                    </p>
</div>
</div>
<div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center text-white/20">
<svg className="lucide lucide-activity" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
</div>
</div>

<div className="divide-y divide-white/5 text-sm font-sans">

<div className="p-3.5 flex items-center justify-between hover:bg-white/5 transition-colors cursor-default opacity-0" style={{animation: 'fadeSlideIn 0.6s ease-out 0.2s forwards'}}>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
<svg className="lucide lucide-server" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
</div>
<div className="flex flex-col">
<span className="text-gray-200 font-normal">REST Gateway</span>
<span className="text-gray-500 text-xs mt-0.5 font-normal">us-east-1</span>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-gray-400 text-xs font-mono">14ms</span>
<div className="flex gap-0.5">
<div className="w-1 h-3 bg-emerald-500 rounded-full"></div>
<div className="w-1 h-3 bg-emerald-500/50 rounded-full"></div>
<div className="w-1 h-3 bg-emerald-500/20 rounded-full"></div>
</div>
</div>
</div>

<div className="p-3.5 flex items-center justify-between hover:bg-white/5 transition-colors cursor-default opacity-0" style={{animation: 'fadeSlideIn 0.6s ease-out 1.0s forwards'}}>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
<svg className="lucide lucide-box" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.29 8.7 12 12 20.71 8.7"></polyline><line x1="12" x2="12" y1="22" y2="12"></line></svg>
</div>
<div className="flex flex-col">
<span className="text-gray-200 font-normal">GraphQL</span>
<span className="text-gray-500 text-xs mt-0.5 font-normal">global-edge</span>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-gray-400 text-xs font-mono">28ms</span>
<div className="flex gap-0.5">
<div className="w-1 h-3 bg-emerald-500 rounded-full"></div>
<div className="w-1 h-3 bg-emerald-500 rounded-full"></div>
<div className="w-1 h-3 bg-emerald-500/20 rounded-full"></div>
</div>
</div>
</div>

<div className="p-3.5 flex items-center justify-between hover:bg-white/5 transition-colors cursor-default bg-white/[0.02] opacity-0" style={{animation: 'fadeSlideIn 0.6s ease-out 1.8s forwards'}}>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 shrink-0">
<svg className="animate-spin" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-gray-200 font-normal">Indexer Stream</span>
<span className="text-gray-500 text-xs mt-0.5 flex items-center gap-1 font-normal">
                            Syncing blocks
                            <span className="flex gap-0.5 ml-1">
<span className="w-0.5 h-0.5 rounded-full bg-orange-400 animate-bounce"></span>
<span className="w-0.5 h-0.5 rounded-full bg-orange-400 animate-bounce delay-100"></span>
<span className="w-0.5 h-0.5 rounded-full bg-orange-400 animate-bounce delay-200"></span>
</span>
</span>
</div>
</div>
<span className="text-emerald-400 text-[10px] font-normal bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    Active
                </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-x-6 gap-y-6">

<div className="group overflow-hidden flex flex-col hover:border-white/20 transition-colors duration-500 bg-gradient-to-br from-white/5 to-white/0 rounded-[2rem] backdrop-blur-lg" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', -BorderRadiusBefore: '2rem'}}>

<div className="flex overflow-hidden bg-gradient-to-b from-white/[0.03] to-transparent h-64 relative items-center justify-center" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 90%, transparent)'}}>
<div className="overflow-hidden bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.07] via-transparent to-transparent opacity-50 absolute top-0 right-0 bottom-0 left-0">

<div className="[mask-image:radial-gradient(circle_at_center,black_40%,transparent_100%)] opacity-30 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="absolute top-10 left-10 w-32 bg-zinc-900/60 border border-white/10 rounded-xl p-3 backdrop-blur-sm -rotate-6 shadow-xl transform transition-transform hover:scale-105 duration-500">
<div className="flex items-center gap-2 mb-3">
<div className="w-2 h-2 rounded-full bg-white/20"></div>
<div className="h-1 w-12 bg-white/20 rounded-full"></div>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-[3px] border border-white/20 flex items-center justify-center">
<svg className="text-white/40 opacity-0" fill="none" height="6" stroke="currentColor" strokeWidth="4" viewbox="0 0 24 24" width="6"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<div className="h-1 w-16 bg-white/10 rounded-full"></div>
</div>
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-[3px] border border-white/20"></div>
<div className="h-1 w-10 bg-white/10 rounded-full"></div>
</div>
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-[3px] border border-white/20"></div>
<div className="h-1 w-14 bg-white/10 rounded-full"></div>
</div>
</div>
</div>

<div className="absolute top-8 right-12 w-20 h-10 bg-orange-500/10 border border-orange-500/20 rounded-lg backdrop-blur-sm rotate-12 flex items-center justify-center shadow-lg transform transition-transform hover:scale-105 duration-500">
<span className="font-mono text-[10px] text-orange-200/70 font-medium tracking-wider">05:40</span>
</div>

<div className="absolute bottom-8 right-10 w-24 bg-zinc-900/60 border border-white/10 rounded-xl p-2.5 backdrop-blur-sm rotate-3 shadow-xl transform transition-transform hover:scale-105 duration-500">
<div className="flex justify-between mb-2">
<div className="h-1 w-8 bg-white/20 rounded-full"></div>
</div>
<div className="grid grid-cols-2 gap-1.5">
<div className="aspect-square rounded-[4px] bg-white/10 border border-white/5"></div>
<div className="aspect-square rounded-[4px-[4px] bg-white/5 border border-white/5"></div>
<div className="aspect-square rounded-[4px] bg-white/10 border border-white/5"></div>
</div>
</div>

<div className="absolute bottom-6 left-12 w-14 h-14 border border-dashed border-white/10 rounded-lg -rotate-3 opacity-30"></div>
</div>

<div className="relative z-10 transform group-hover:scale-105 transition-transform duration-500 ease-out">
<div className="w-28 h-24 relative">

<div className="absolute bottom-0 w-full h-20 bg-zinc-800 rounded-xl border border-white/10 shadow-2xl"></div>

<div className="absolute bottom-4 left-3 right-3 h-20 bg-zinc-700 rounded-lg border border-white/5 transform -rotate-3 origin-bottom-left shadow-md">
<div className="absolute top-3 left-3 right-8 h-1.5 bg-zinc-600 rounded-full w-1/2"></div>
<div className="absolute top-6 left-3 right-3 h-1.5 bg-zinc-600 rounded-full w-3/4"></div>
</div>

<div className="absolute bottom-0 w-full h-14 bg-gradient-to-b from-zinc-800/50 to-zinc-800 rounded-b-xl border-x border-b border-white/10 backdrop-blur-[2px] overflow-hidden">
<span className="absolute -top-8 left-1/2 -translate-x-1/2 w-6 h-6 bg-zinc-800 rotate-45 border-r border-b border-white/10"></span>
</div>

<div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-lg shadow-black/50">
<span className="text-orange-500 font-bold text-base font-manrope tracking-tighter">N</span>
</div>
</div>
</div>

<svg className="absolute inset-0 w-full h-full opacity-[0.15] pointer-events-none mix-blend-overlay" height="100%" width="100%">
<defs>
<pattern height="24" id="grid-pattern-mail" patternunits="userSpaceOnUse" width="24">
<circle cx="1" cy="1" fill="white" r="0.5"></circle>
</pattern>
</defs>
<rect fill="url(#grid-pattern-mail)" height="100%" width="100%"></rect>
</svg>
</div>

<div className="mt-auto pt-8 pr-10 pb-10 pl-10">
<div className="flex items-center gap-3 mb-5">
<svg aria-hidden="true" className="w-[24px] h-[24px]" data-icon="solar:letter-bold-duotone" data-icon-replaced="true" data-icon-set="solar" data-solar="folder-path-connect-bold-duotone" height="24" role="img" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20a.75.75 0 0 1 .75-.75h8.5V15h1.5v4.25h8.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 20" fill="#ffffff" opacity=".5"></path><path clip-rule="evenodd" d="M19 9.8V8.369c0-1.711 0-2.567-.539-3.123q-.075-.077-.157-.146c-.598-.5-1.52-.5-3.362-.5h-.262c-.808 0-1.211 0-1.588-.1a3 3 0 0 1-.594-.228c-.341-.177-.627-.442-1.198-.972l-.385-.358a6 6 0 0 0-.388-.344a2.9 2.9 0 0 0-1.526-.587C8.87 2 8.736 2 8.465 2c-.618 0-.927 0-1.184.045c-1.133.199-2.019 1.021-2.232 2.073C5 4.357 5 4.644 5 5.218V9.8c0 2.451 0 3.677.82 4.438C6.64 15 7.96 15 10.6 15h2.8c2.64 0 3.96 0 4.78-.761c.82-.762.82-1.988.82-4.439m-5.5-3.05a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z" fill="#ffffff" fill-rule="evenodd"></path><circle cx="12" cy="20" fill="#ffffff" r="2"></circle></svg>
<h3 className="text-xl font-semibold text-white tracking-tight font-manrope">Automation</h3>
</div>
<p className="text-gray-400 text-base leading-relaxed mb-8 font-sans">
                    As a license holder requiring confidential assistance, please fill out a support request form or email us.
                </p>
<a className="inline-flex items-center gap-2 text-orange-400 hover:text-white transition-colors text-sm font-medium font-sans pb-1 border-b border-transparent hover:border-orange-400/50" href="mailto:support@nebula.protocol">
                    support@nebula.protocol
                </a>
</div>
</div>

<div className="group overflow-hidden flex flex-col hover:border-white/20 transition-colors duration-500 bg-gradient-to-br from-white/5 to-white/0 rounded-[2rem] backdrop-blur-lg" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', -BorderRadiusBefore: '2rem'}}>

<div className="flex overflow-hidden bg-gradient-to-b from-white/[0.03] to-transparent h-64 relative items-center justify-center" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 85%, transparent)'}}>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]"></div>

<div className="flex w-full h-full relative perspective-[1000px] items-center justify-center">

<div className="absolute w-[260px] h-[260px] border border-dashed border-white/5 rounded-full flex items-center justify-center opacity-60">

<div className="absolute -top-3 bg-zinc-900 border border-white/10 px-2 py-0.5 rounded-full flex items-center gap-1.5 shadow-lg z-10">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
<span className="text-[9px] font-mono text-zinc-400 tracking-tight">active</span>
</div>
</div>

<div className="absolute w-40 h-40 border border-dashed border-white/10 rounded-full flex items-center justify-center"></div>

<div className="relative z-20 w-16 h-16 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)] flex items-center justify-center group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_-10px_rgba(255,255,255,0.1)]">
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-white/5 opacity-0 rounded-2xl absolute top-0 right-0 bottom-0 left-0"></div>
<svg className="lucide lucide-github transition-colors group-hover:text-white text-white/90" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path className="" d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</div>

<div className="absolute top-[25%] right-[28%] z-10 hover:z-20 hover:scale-110 transition-all duration-300 cursor-pointer">
<div className="w-10 h-10 bg-zinc-900/90 backdrop-blur border border-white/10 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/10 ring-1 ring-white/5">
<svg className="lucide lucide-git-pull-request text-purple-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="3"></circle><circle className="" cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line className="" x1="6" x2="6" y1="9" y2="21"></line></svg>
</div>
<div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 opacity-0 hover:opacity-100 transition-opacity px-2 py-0.5 bg-black border border-white/10 rounded text-[9px] text-white whitespace-nowrap pointer-events-none">Open PR</div>
</div>

<div className="absolute bottom-[28%] left-[30%] z-10 hover:z-20 hover:scale-110 transition-all duration-300 cursor-pointer">
<div className="w-9 h-9 bg-zinc-900/90 backdrop-blur border border-white/10 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/10 ring-1 ring-white/5">
<svg className="lucide lucide-lock text-emerald-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
</div>

<div className="absolute top-[20%] left-[45%] w-2 h-2 bg-zinc-700 rounded-full border border-white/10"></div>
<div className="absolute bottom-[20%] right-[42%] w-1.5 h-1.5 bg-zinc-700 rounded-full border border-white/10"></div>
</div>
</div>

<div className="mt-auto pt-8 pr-10 pb-10 pl-10">
<div className="flex items-center gap-3 mb-5">
<svg aria-hidden="true" className="w-[24px] h-[24px]" data-icon="simple-icons:github" data-icon-replaced="true" data-icon-set="solar" data-solar="user-id-bold-duotone" height="24" role="img" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12s0-5.657-1.172-6.828S17.771 4 14 4" fill="#ffffff" opacity=".5"></path><path d="M13.25 9a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M9 11a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 6c4 0 4-.895 4-2s-1.79-2-4-2s-4 .895-4 2s0 2 4 2" fill="#ffffff"></path></svg>
<h3 className="text-xl font-semibold text-white tracking-tight font-manrope">Identity</h3>
</div>
<p className="text-gray-400 text-base leading-relaxed mb-8 font-sans">
                    With your Nebula purchase, you receive <span className="text-white font-medium">12 months</span> of technical support and direct repository access.
                </p>
<p className="text-gray-500 text-sm leading-relaxed font-sans">
                    License holders gain access to our private <a className="text-emerald-400/80 hover:text-emerald-300 transition-colors underline decoration-emerald-500/30 hover:decoration-emerald-500 underline-offset-2" href="#">GitHub repository</a> to track issues or propose feature requests.
                </p>
</div>
</div>
</div>
</section><section className="z-20 overflow-hidden w-full max-w-7xl mt-0 mr-auto mb-32 ml-auto pt-20 pb-20 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none z-0">
<h2 className="text-[12vw] leading-none font-bold text-white/[0.03] text-center whitespace-nowrap font-manrope tracking-tighter">
            MOBILE SUITE
        </h2>
</div>
<div className="grid lg:grid-cols-12 gap-8 items-center relative z-10 px-6">

<div className="lg:col-span-4 flex flex-col justify-center order-2 lg:order-1">
<div className="flex items-center gap-2 mb-6 opacity-60">
<span className="w-2 h-2 rounded-full bg-orange-500"></span>
<span className="text-xs font-mono text-gray-400 tracking-widest">02/04</span>
</div>
<h3 className="leading-[1.1] uppercase md:text-7xl text-4xl font-normal text-white tracking-tight font-manrope mb-8">
                Offering
                Unmatched
                <span className="text-gray-500">Control &amp;</span>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-200">Insight</span>
</h3>
<div className="hidden lg:block h-px w-24 bg-white/10 mt-4"></div>
</div>

<div className="lg:col-span-4 flex order-1 lg:order-2 lg:py-0 pt-12 pb-12 relative justify-center">

<div className="-translate-x-1/2 -translate-y-1/2 blur-[100px] pointer-events-none bg-orange-500/20 w-64 h-96 rounded-full absolute top-1/2 left-1/2">
</div>

<div className="border-[1px] overflow-hidden bg-zinc-950 w-[330px] h-[660px] z-10 border-zinc-800 rounded-[3.5rem] ring-white/10 ring-1 relative shadow-[0_5.7px_8.6px_rgba(0,_0,_0,_0.07),_0_13.7px_10.9px_rgba(0,_0,_0,_0.099),_0_25.7px_20.5px_rgba(0,_0,_0,_0.123),_0_45.8px_36.6px_rgba(0,_0,_0,_0.147),_0_85.8px_68.5px_rgba(0,_0,_0,_0.176),_0_205px_163.4px_rgba(0,_0,_0,_0.246)]">

<div className="absolute top-3 left-1/2 -translate-x-1/2 h-[32px] w-[110px] bg-black rounded-full z-50 flex items-center justify-between px-3 transition-all duration-500 hover:w-[140px] hover:shadow-[0_0_20px_rgba(0,0,0,0.8)] group/island">

<div className="flex gap-2 h-full items-center opacity-0 group-hover/island:opacity-100 transition-opacity duration-300 delay-100">
<div className="w-1 h-1 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.5)] animate-pulse"></div>
</div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-1.5">
<div className="w-4 h-4 rounded-full bg-zinc-900/80 backdrop-blur-md border border-white/5"></div>
</div>

<div className="flex gap-2 h-full items-center opacity-0 group-hover/island:opacity-100 transition-opacity duration-300 delay-100 ml-auto">
<div className="w-1 h-1 rounded-full bg-green-500/80 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
</div>
</div>

<div className="absolute top-4 left-0 w-full px-8 flex justify-between items-center z-40 text-[10px] font-semibold text-white/90 tracking-wide">
<span>9:41</span>
<div className="flex gap-1.5 items-center">
<span className="iconify" data-icon="solar:signal-bold-duotone"></span>
<svg aria-hidden="true" data-icon="solar:battery-full-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.172 5.172C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h1.5c3.771 0 5.657 0 6.828-1.172S19.5 15.771 19.5 12s0-5.657-1.172-6.828S15.271 4 11.5 4H10C6.229 4 4.343 4 3.172 5.172" fill="currentColor" opacity=".5"></path><path d="M19.491 14c.009-.6.009-1.264.009-2c0-.735 0-1.4-.009-2H20c.942 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.942 14 20 14zM6.636 8.345a.75.75 0 0 1 1.02.29L7 9l.656-.363l.001.002l.002.003l.004.007l.01.018l.026.053q.03.064.076.175c.058.147.131.356.202.631c.14.551.273 1.364.273 2.474s-.132 1.923-.273 2.474a5 5 0 0 1-.202.631a3 3 0 0 1-.103.228l-.01.018l-.003.008l-.002.003v.001l-.001.001a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.1s-.118-1.678-.226-2.102a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01m4.52.291a.75.75 0 0 0-1.317.72l.005.01q.01.02.038.086c.035.087.087.235.142.447c.108.424.226 1.111.226 2.101s-.118 1.677-.226 2.101a4 4 0 0 1-.18.534l-.005.01a.75.75 0 0 0 1.317.72L10.5 15l.656.363l.001-.001l.002-.003l.004-.008l.01-.018l.026-.053q.03-.064.076-.175a5 5 0 0 0 .202-.631c.14-.551.273-1.364.273-2.474s-.132-1.923-.273-2.474a5 5 0 0 0-.202-.631a3 3 0 0 0-.103-.228l-.01-.018l-.003-.007l-.002-.003zm2.48-.291a.75.75 0 0 1 1.02.29L14 9l.656-.363l.001.002l.002.003l.004.007l.01.018l.026.053q.03.064.076.175a5 5 0 0 1 .202.631c.14.551.273 1.364.273 2.474s-.132 1.923-.273 2.474c-.07.275-.143.484-.202.631a3 3 0 0 1-.103.228l-.01.018l-.003.008l-.002.003v.001l-.001.001a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.1s-.118-1.678-.226-2.102a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01" fill="currentColor"></path></svg>
</div>
</div>

<div className="flex flex-col z-10 bg-gradient-to-b from-zinc-900 to-black w-full h-full pt-16 pr-6 pl-6 relative">

<div className="flex z-10 mb-8 relative items-center justify-between">
<button className="flex hover:bg-white/10 transition-colors text-white/70 bg-gradient-to-br from-white/10 to-white/0 w-8 h-8 rounded-full backdrop-blur-sm items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '9999px'}}>
<svg className="lucide lucide-arrow-left" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse"></div>
<span className="text-sm font-semibold text-white tracking-wide">Nebula Core</span>
</div>
<button className="flex hover:bg-white/10 transition-colors text-white/70 bg-gradient-to-br from-white/10 to-white/0 w-8 h-8 rounded-full backdrop-blur-sm items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '9999px'}}>
<svg className="lucide lucide-more-horizontal" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>

<div className="text-center mb-4">
<p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest mb-2">Total Volume</p>
<h4 className="text-5xl font-medium text-white tracking-tighter font-geist">$8,245.32</h4>
<div className="flex gap-1.5 mt-2 gap-x-1.5 gap-y-1.5 items-center justify-center">
<div className="flex items-center text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded text-[10px] font-semibold border border-emerald-500/20">
<svg className="lucide lucide-trending-up mr-1" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
            +12.4%
          </div>
<span className="text-xs text-zinc-500 font-medium">this week</span>
</div>
</div>

<div className="w-full h-40 mb-6 relative">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 280 120">
<defs>

<pattern height="120" id="grid" patternunits="userSpaceOnUse" width="40">
<line opacity="0.3" stroke="#3f3f46" stroke-dasharray="2 2" strokeWidth="1" x1="0" x2="0" y1="0" y2="120"></line>
</pattern>
</defs>

<rect className="" fill="url(#grid)" height="100%" width="100%"></rect>
<line opacity="0.5" stroke="#3f3f46" strokeWidth="1" x1="0" x2="280" y1="120" y2="120"></line>

<path d="M0,80 C20,80 30,60 50,65 C70,70 80,90 100,85 C120,80 130,40 150,45 C170,50 180,70 200,60 C220,50 230,20 250,25 C265,28 275,10 280,15 V120 H0 Z" fill="url(#d3Gradient)"></path>

<path className="" d="M0,80 C20,80 30,60 50,65 C70,70 80,90 100,85 C120,80 130,40 150,45 C170,50 180,70 200,60 C220,50 230,20 250,25 C265,28 275,10 280,15" fill="none" stroke="#f97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>

<g transform="translate(150, 45)">
<circle className="animate-pulse" fill="#18181b" r="4" stroke="#f97316" strokeWidth="2"></circle>
<line opacity="0.5" stroke="#f97316" stroke-dasharray="2 2" strokeWidth="1" x1="0" x2="0" y1="4" y2="75"></line>
</g>
</svg>

<div className="flex pt-2 pr-2 pl-2 justify-between">
<button className="text-[9px] font-semibold text-zinc-600 hover:text-white transition-colors">1H</button>
<button className="text-[9px] font-semibold text-zinc-600 hover:text-white transition-colors">1D</button>
<button className="text-[9px] font-semibold text-orange-500 bg-orange-500/10 rounded px-2 py-0.5 border border-orange-500/20">1W</button>
<button className="text-[9px] font-semibold text-zinc-600 hover:text-white transition-colors">1M</button>
<button className="text-[9px] font-semibold text-zinc-600 hover:text-white transition-colors">1Y</button>
</div>
</div>

<div className="grid grid-cols-3 mt-4 mb-8 gap-x-3 gap-y-3">
<button className="flex flex-col gap-2 group gap-x-2 gap-y-2 items-center">
<div className="flex shadow-[0_0_20px_-5px_rgba(249,115,22,0.4)] transition-transform group-active:scale-95 text-white bg-gradient-to-b from-orange-400 to-orange-600 w-12 h-12 rounded-xl items-center justify-center border border-white/10">
<svg className="lucide lucide-arrow-down-to-line w-[18px] h-[18px]" data-icon-replaced="true" data-icon-set="solar" data-solar="round-arrow-down-bold-duotone" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path className="" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="#ffffff" opacity=".5"></path><path d="M8.47 13.53a.75.75 0 1 1 1.06-1.06l1.72 1.72V8a.75.75 0 0 1 1.5 0v6.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0z" fill="#ffffff"></path></svg>
</div>
<span className="text-[10px] font-medium text-zinc-400 group-hover:text-white transition-colors">Deposit</span>
</button>
<button className="flex flex-col items-center gap-2 group">
<div className="flex transition-all hover:bg-zinc-800 group-active:scale-95 text-white bg-gradient-to-br from-white/10 to-white/0 w-12 h-12 rounded-xl items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '12px'}}>
<svg className="lucide lucide-arrow-left-right w-[18px] h-[18px]" data-icon-replaced="true" data-icon-set="solar" data-solar="sort-horizontal-bold-duotone" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M10.875 4a.75.75 0 0 0-1.272-.538l-4.125 4a.75.75 0 0 0 0 1.076l4.125 4A.75.75 0 0 0 10.875 12V8.75H18a.75.75 0 0 0 0-1.5h-7.125z" fill="#ffffff"></path><path d="M13.125 12a.75.75 0 0 1 1.272-.538l4.125 4a.75.75 0 0 1 0 1.076l-4.125 4A.75.75 0 0 1 13.125 20v-3.25H6a.75.75 0 0 1 0-1.5h7.125z" fill="#ffffff" opacity=".5"></path></svg>
</div>
<span className="text-[10px] font-medium text-zinc-400 group-hover:text-white transition-colors">Swap</span>
</button>
<button className="flex flex-col items-center gap-2 group">
<div className="flex transition-all hover:bg-zinc-800 group-active:scale-95 text-white bg-gradient-to-br from-white/10 to-white/0 w-12 h-12 rounded-xl items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '12px'}}>
<svg className="lucide lucide-send w-[18px] h-[18px]" data-icon-replaced="true" data-icon-set="solar" data-solar="file-send-bold-duotone" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path className="" clip-rule="evenodd" d="M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22" fill="#ffffff" fill-rule="evenodd" opacity=".5"></path><path d="M7.987 12.953a.75.75 0 0 1 1.026 0l2 1.875a.75.75 0 0 1-1.026 1.094l-.737-.69V18.5a.75.75 0 0 1-1.5 0v-3.269l-.737.691a.75.75 0 0 1-1.026-1.094zM11.51 2.26l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z" fill="#ffffff"></path></svg>
</div>
<span className="text-[10px] font-medium text-zinc-400 group-hover:text-white transition-colors">Send</span>
</button>
</div>

<div className="flex-1 bg-zinc-900/60 rounded-t-[2rem] -mx-6 px-6 pt-6 pb-4 backdrop-blur-md border-t border-white/5">
<div className="flex items-center justify-between mb-4">
<p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Active Nodes</p>
<div className="flex gap-1">
<span className="w-1 h-1 rounded-full bg-zinc-600"></span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
</div>
</div>
<div className="space-y-3">
<div className="flex hover:bg-white/[0.04] transition-colors cursor-pointer group bg-gradient-to-br from-white/10 to-white/0 rounded-xl px-3 py-3 items-center justify-between" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '12px'}}>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center p-1.5 border border-indigo-500/20 group-hover:border-indigo-500/40 transition-colors">
<svg aria-hidden="true" className="text-indigo-400" data-icon="simple-icons:ethereum" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.944 17.97L4.58 13.62L11.943 24l7.37-10.38l-7.372 4.35zM12.056 0L4.69 12.223l7.365 4.354l7.365-4.35z" fill="currentColor"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-white">Ethereum Mainnet</span>
<span className="text-[10px] text-emerald-500 font-medium flex items-center gap-1">
<span className="w-1 h-1 rounded-full bg-emerald-500"></span> Synced
                </span>
</div>
</div>
<svg className="lucide lucide-chevron-right text-zinc-600 group-hover:text-white transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center p-1.5 border border-purple-500/20 group-hover:border-purple-500/40 transition-colors">
<svg aria-hidden="true" className="text-purple-400" data-icon="simple-icons:solana" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m23.876 18.031l-3.962 4.14a.9.9 0 0 1-.306.21a.9.9 0 0 1-.367.074H.46a.47.47 0 0 1-.252-.073a.45.45 0 0 1-.17-.196a.44.44 0 0 1-.031-.255a.44.44 0 0 1 .117-.23l3.965-4.139a.9.9 0 0 1 .305-.21a.9.9 0 0 1 .366-.075h18.78a.47.47 0 0 1 .252.074a.45.45 0 0 1 .17.196a.44.44 0 0 1 .031.255a.44.44 0 0 1-.117.23m-3.962-8.335a.9.9 0 0 0-.306-.21a.9.9 0 0 0-.367-.075H.46a.47.47 0 0 0-.252.073a.45.45 0 0 0-.17.197a.44.44 0 0 0-.031.254a.44.44 0 0 0 .117.23l3.965 4.14a.9.9 0 0 0 .305.21a.9.9 0 0 0 .366.074h18.78a.47.47 0 0 0 .252-.073a.45.45 0 0 0 .17-.196a.44.44 0 0 0 .031-.255a.44.44 0 0 0-.117-.23zM.46 6.723h18.782a.9.9 0 0 0 .367-.075a.9.9 0 0 0 .306-.21l3.962-4.14a.44.44 0 0 0 .117-.23a.44.44 0 0 0-.032-.254a.45.45 0 0 0-.17-.196a.47.47 0 0 0-.252-.073H4.76a.9.9 0 0 0-.366.074a.9.9 0 0 0-.305.21L.125 5.97a.44.44 0 0 0-.117.23a.44.44 0 0 0 .03.254a.45.45 0 0 0 .17.196a.47.47 0 0 0 .252.074z" fill="currentColor"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-white">Solana RPC</span>
<span className="text-[10px] text-orange-400 font-medium flex items-center gap-1">
<span className="w-1 h-1 rounded-full bg-orange-400 animate-pulse"></span> Connecting...
                </span>
</div>
</div>
<svg className="lucide lucide-chevron-right text-zinc-600 group-hover:text-white transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-5 lg:items-end order-3 justify-center relative z-10">

<div className="transition-transform duration-500 hover:scale-[1.01] text-left bg-gradient-to-br from-white/10 to-white/0 w-full max-w-sm rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-2xl backdrop-blur-xl" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.05))', -BorderRadiusBefore: '24px'}}>
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 p-0.5 shadow-lg shadow-orange-500/20">
<div className="w-full h-full rounded-full bg-black flex items-center justify-center">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="solar" data-solar="box-minimalistic-bold-duotone" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(249, 115, 22)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M8.422 20.618C10.178 21.54 11.056 22 12 22V12L2.638 7.073l-.04.067C2 8.154 2 9.417 2 11.942v.117c0 2.524 0 3.787.597 4.801c.598 1.015 1.674 1.58 3.825 2.709z" fill="#f97316"></path><path d="m17.577 4.432l-2-1.05C13.822 2.461 12.944 2 12 2c-.945 0-1.822.46-3.578 1.382l-2 1.05C4.318 5.536 3.242 6.1 2.638 7.072L12 12l9.362-4.927c-.606-.973-1.68-1.537-3.785-2.641" fill="#f97316" opacity=".7"></path><path d="m21.403 7.14l-.041-.067L12 12v10c.944 0 1.822-.46 3.578-1.382l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708c.597-1.014.597-2.277.597-4.8v-.117c0-2.525 0-3.788-.597-4.802" fill="#f97316" opacity=".5"></path></svg>
</div>
</div>
<div className="">
<h3 className="text-lg font-semibold text-white tracking-tight font-manrope">Atlas Network</h3>
<p className="text-xs font-medium text-zinc-400 font-sans">Production · US-East</p>
</div>
<div className="ml-auto">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse"></div>
</div>
</div>
<div className="flex justify-between gap-2 mb-5">
<div className="flex flex-col flex-1 transition-colors hover:bg-white/10 bg-gradient-to-br from-white/10 to-white/0 rounded-2xl pt-3 pr-3 pb-3 pl-3" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '16px'}}>
<span className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-sans">Uptime</span>
<span className="text-sm font-semibold text-white font-geist">99.99%</span>
</div>
<div className="flex flex-col flex-1 transition-colors hover:bg-white/10 bg-gradient-to-br from-white/10 to-white/0 rounded-2xl pt-3 pr-3 pb-3 pl-3" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '16px'}}>
<span className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-sans">Latency</span>
<span className="text-sm font-semibold text-white font-geist">14ms</span>
</div>
<div className="flex flex-col flex-1 transition-colors hover:bg-white/10 bg-gradient-to-br from-white/10 to-white/0 rounded-2xl pt-3 pr-3 pb-3 pl-3" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '16px'}}>
<span className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-sans">Reqs</span>
<span className="text-sm font-semibold text-white font-geist">2.4M</span>
</div>
</div>
<button className="hover:bg-white/10 transition-colors duration-300 flex gap-2 group text-xs font-medium text-white bg-gradient-to-br from-white/10 to-white/0 w-full rounded-full pt-2.5 pb-2.5 gap-x-2 gap-y-2 items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '9999px'}}>
<span className="">View Analytics</span>
<svg className="group-hover:translate-x-0.5 transition-transform" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="transition-transform duration-500 hover:scale-[1.01] text-left bg-gradient-to-br from-white/10 to-white/0 w-full max-w-sm rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-xl backdrop-blur-xl" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.05))', -BorderRadiusBefore: '24px'}}>
<p className="text-sm text-zinc-400 leading-relaxed mb-4 font-sans">
            Enterprise-grade infrastructure with automated scaling and zero-knowledge security proofs built-in.
        </p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-zinc-300 bg-gradient-to-br from-white/10 to-white/0 rounded-full pt-1 pr-2.5 pb-1 pl-2.5" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '9999px'}}>
<svg className="" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                zk-SNARKs
            </span>
<span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-zinc-300 bg-gradient-to-br from-white/10 to-white/0 rounded-full pt-1 pr-2.5 pb-1 pl-2.5" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '9999px'}}>
<svg className="" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
                Auto-scale
            </span>
<span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-zinc-300 bg-gradient-to-br from-white/10 to-white/0 rounded-full pt-1 pr-2.5 pb-1 pl-2.5" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '9999px'}}>
<svg className="" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><line x1="3" x2="21" y1="9" y2="9"></line><path d="m9 16 3-3 3 3"></path></svg>
                CLI Access
            </span>
</div>
<div className="flex gap-2">
<button className="flex-1 flex items-center justify-between rounded-xl bg-zinc-950/50 border border-white/5 px-3 py-2 hover:border-white/20 transition-colors group">
<span className="text-xs text-zinc-300 font-medium font-sans">Documentation</span>
<svg className="text-zinc-500 group-hover:text-white transition-colors" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
<button className="flex-1 flex items-center justify-between rounded-xl bg-zinc-950/50 border border-white/5 px-3 py-2 hover:border-white/20 transition-colors group">
<span className="text-xs text-zinc-300 font-medium font-sans">API Status</span>
<svg className="text-zinc-500 group-hover:text-white transition-colors" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
</div>

<div className="transition-transform duration-500 hover:scale-[1.01] text-left bg-gradient-to-br from-white/10 to-white/0 w-full max-w-sm rounded-3xl pt-4 pr-4 pb-4 pl-4 shadow-xl backdrop-blur-xl" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.05))', -BorderRadiusBefore: '24px'}}>
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 font-sans">Live Logs</span>
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping"></div>
</div>
<button className="text-[10px] font-medium text-zinc-400 hover:text-white transition-colors font-sans underline decoration-zinc-700 underline-offset-2">View all</button>
</div>
<div className="space-y-2">

<div className="group rounded-xl bg-zinc-950/50 border border-white/5 p-2.5 flex items-center gap-3 hover:bg-white/[0.02] hover:border-white/10 transition-colors cursor-default">
<div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
<svg className="text-blue-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect className="" height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><path className="" d="M7 7h10"></path><path d="M7 12h10"></path><path d="M7 17h10"></path></svg>
</div>
<div className="flex flex-col min-w-0">
<span className="text-xs font-medium text-zinc-200 truncate font-geist">Contract Deployed</span>
<span className="text-[10px] text-zinc-500 font-mono">0x82...92a1 · 2m ago</span>
</div>
</div>

<div className="group rounded-xl bg-zinc-950/50 border border-white/5 p-2.5 flex items-center gap-3 hover:bg-white/[0.02] hover:border-white/10 transition-colors cursor-default">
<div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
<svg className="text-purple-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.29 8.7 12 12 20.71 8.7"></polyline><line x1="12" x2="12" y1="22" y2="12"></line></svg>
</div>
<div className="flex flex-col min-w-0">
<span className="text-xs font-medium text-zinc-200 truncate font-geist">New Block Synced</span>
<span className="text-[10px] text-zinc-500 font-mono">#18293492 · 120ms</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section><section className="w-full max-w-7xl z-20 mt-0 mr-auto mb-32 ml-auto pt-6 pr-6 pb-6 pl-6 relative">

<div className="flex flex-col text-center mb-20 items-center">
<div className="inline-flex bg-orange-500/5 border-orange-500/20 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
<svg aria-hidden="true" className="iconify text-orange-500 iconify--solar" data-icon="solar:star-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" fill="currentColor">
</path>
<path className="" d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" fill="currentColor" opacity=".5"></path>
</svg>
<span className="text-xs font-semibold text-orange-200 uppercase tracking-widest font-sans">Testimonials</span>
</div>
<h2 className="md:text-7xl text-5xl font-medium text-white tracking-tighter font-manrope mb-6">Proven results,
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-500">delivered</span>
</h2>
<p className="text-xl text-gray-400 font-sans max-w-2xl leading-relaxed">
            See how leading protocols and dApps are scaling their infrastructure with Nebula's unified layer.
        </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 mb-12 pt-4 pr-4 pb-4 pl-4 gap-x-6 gap-y-6" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))'}}>
<style>
            @keyframes carousel-fade {
                0% {
                    opacity: 0;
                    z-index: 10;
                }

                5% {
                    opacity: 1;
                    z-index: 20;
                }

                28% {
                    opacity: 1;
                    z-index: 20;
                }

                33% {
                    opacity: 0;
                    z-index: 10;
                }

                100% {
                    opacity: 0;
                    z-index: 10;
                }
            }

            .animate-carousel {
                animation: carousel-fade 15s infinite;
                position: absolute;
                inset: 0;
                height: 100%;
                width: 100%;
            }

            /* Fix for relative positioning context in grid cell */
            .carousel-container {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                min-height: 600px;
            }

            @media (min-width: 1024px) {
                .carousel-container {
                    min-height: auto;
                }
            }

            .carousel-card {
                grid-area: 1 / 1 / 2 / 2;
            }
        </style>

<div className="lg:col-span-7 flex flex-col gap-6">

<div className="group hover:bg-zinc-900/60 transition-all duration-500 bg-zinc-900/40 rounded-[2.5rem] pt-10 pr-10 pb-10 pl-10 relative backdrop-blur-sm" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', -BorderRadiusBefore: '2.5rem'}}>
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-bl from-blue-500/5 via-transparent to-transparent opacity-0 rounded-[2.5rem] absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="relative z-10">
<div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
<h3 className="text-6xl font-semibold text-white tracking-tighter font-geist">
                            14<span className="align-top text-xs font-normal text-zinc-500 tracking-tighter mt-2 ml-1">ms</span>
</h3>
<p className="text-lg font-medium text-zinc-300">Global latency reduction on edge nodes.</p>
</div>
<span className="iconify text-3xl text-zinc-700 mb-4" data-icon="solar:quote-up-bold-duotone"></span>
<blockquote className="text-base text-gray-300 font-sans leading-relaxed mb-8">
                        "From branding to execution, the Nebula API suite is flawless. The latency on our oracle updates
                        dropped significantly, giving us a competitive edge in high-frequency markets."
                    </blockquote>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all" src="https://i.pravatar.cc/150?u=chainlink"/>
</div>
<div className="">
<h4 className="text-sm font-semibold text-white font-manrope">David Chen</h4>
<p className="text-xs text-zinc-500 font-sans">CTO, Chainlink</p>
</div>
</div>
<div className="text-zinc-500 opacity-50 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" className="iconify text-2xl iconify--simple-icons" data-icon="simple-icons:chainlink" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0L9.798 1.266l-6 3.468L1.596 6v12l2.202 1.266l6.055 3.468L12.055 24l2.202-1.266l5.945-3.468L22.404 18V6l-2.202-1.266l-6-3.468zM6 15.468V8.532l6-3.468l6 3.468v6.936l-6 3.468z" fill="currentColor">
</path>
</svg>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 gap-x-6 gap-y-6">

<div className="group hover:bg-zinc-900/60 transition-all duration-500 flex flex-col bg-zinc-900/40 rounded-[2.5rem] pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm justify-between" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', -BorderRadiusBefore: '2.5rem'}}>
<div className="relative z-10">
<svg aria-hidden="true" className="iconify text-3xl text-zinc-700 mb-4 iconify--solar" data-icon="solar:chat-square-like-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m13.629 20.472l-.542.916c-.483.816-1.69.816-2.174 0l-.542-.916c-.42-.71-.63-1.066-.968-1.262c-.338-.197-.763-.204-1.613-.219c-1.256-.021-2.043-.098-2.703-.372a5 5 0 0 1-2.706-2.706C2 14.995 2 13.83 2 11.5v-1c0-3.273 0-4.91.737-6.112a5 5 0 0 1 1.65-1.651C5.59 2 7.228 2 10.5 2h3c3.273 0 4.91 0 6.113.737a5 5 0 0 1 1.65 1.65C22 5.59 22 7.228 22 10.5v1c0 2.33 0 3.495-.38 4.413a5 5 0 0 1-2.707 2.706c-.66.274-1.447.35-2.703.372c-.85.015-1.275.022-1.613.219c-.338.196-.548.551-.968 1.262" fill="currentColor" opacity=".5"></path>
<path d="M10.99 14.308c-1.327-.978-3.49-2.84-3.49-4.593c0-2.677 2.475-3.677 4.5-1.609c2.025-2.068 4.5-1.068 4.5 1.609c0 1.752-2.163 3.615-3.49 4.593c-.454.335-.681.502-1.01.502s-.556-.167-1.01-.502" fill="currentColor">
</path>
</svg>
<p className="text-sm text-gray-300 font-sans leading-relaxed mb-6">
                            "Their animation work took our product videos to the next level. The team truly understands
                            user
                            experience and storytelling."
                        </p>
</div>
<div className="relative z-10 flex items-center justify-between mt-auto">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all" src="https://i.pravatar.cc/150?u=aave"/>
</div>
<div className="">
<h4 className="text-sm font-semibold text-white font-manrope">Stani Kulechov</h4>
<p className="text-xs text-zinc-500 font-sans">Founder, Aave</p>
</div>
</div>
<div className="text-zinc-500 opacity-50 group-hover:opacity-100 transition-opacity">
<span className="iconify text-xl" data-icon="simple-icons:aave"></span>
</div>
</div>
</div>

<div className="group overflow-hidden flex flex-col bg-zinc-100 border-white/10 border rounded-[2.5rem] pt-8 pr-8 pb-8 pl-8 relative shadow-2xl justify-between">

<div className="relative z-10">
<svg aria-hidden="true" className="iconify text-3xl text-zinc-400 mb-4 iconify--solar" data-icon="solar:star-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" fill="currentColor">
</path>
<path d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" fill="currentColor" opacity=".5"></path>
</svg>
<p className="text-sm text-zinc-800 font-medium font-sans leading-relaxed mb-6">
                            "The team nailed our MVP design with a fast turnaround and incredible attention to detail.
                            The
                            final product felt polished and professional."
                        </p>
</div>
<div className="relative z-10 flex items-center justify-between mt-auto pt-4 border-t border-zinc-300">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-300 border border-zinc-400 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/051f7e3d-5329-4689-b681-3ec952d9533d_320w.webp"/>
</div>
<div className="">
<h4 className="text-sm font-semibold text-zinc-900 font-manrope">Jeanne Grey</h4>
<p className="text-xs text-zinc-500 font-sans">Director, Polkadot</p>
</div>
</div>
<div className="text-zinc-400 group-hover:text-zinc-900 transition-colors">
<svg aria-hidden="true" className="iconify text-xl iconify--simple-icons" data-icon="simple-icons:polkadot" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0c2.39 0 4.328 1.127 4.328 2.517S14.39 5.034 12 5.034S7.672 3.907 7.672 2.517S9.61 0 12 0m0 18.966c2.39 0 4.328 1.127 4.328 2.517S14.39 24 12 24s-4.328-1.127-4.328-2.517S9.61 18.966 12 18.966M1.606 6C2.8 3.93 4.747 2.816 5.952 3.511s1.212 2.937.017 5.007s-3.141 3.182-4.345 2.489S.411 8.07 1.606 6m16.427 9.483c1.2-2.07 3.139-3.184 4.343-2.489s1.211 2.936.016 5.006s-3.14 3.185-4.344 2.49s-1.211-2.937-.015-5.007m-16.409-2.49c1.205-.7 3.15.419 4.346 2.489s1.187 4.311-.018 5.007S2.8 20.07 1.607 18s-1.187-4.311.017-5.007m16.425-9.481c1.2-.695 3.149.419 4.344 2.489s1.188 4.311-.016 5.007s-3.148-.42-4.343-2.49s-1.188-4.311.015-5.006" fill="currentColor">
</path>
</svg>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 carousel-container relative">

<div className="carousel-card group flex flex-col hover:bg-zinc-900/60 transition-all duration-500 bg-zinc-900/40 rounded-[2.5rem] pt-10 pr-10 pb-10 pl-10 relative backdrop-blur-sm justify-between animate-carousel" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', -BorderRadiusBefore: '2.5rem', animationDelay: '0s', opacity: '0'}}>

<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 rounded-[2.5rem] absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="relative z-10">
<div className="flex items-baseline gap-2 mb-4">
<h3 className="text-8xl font-semibold text-white tracking-tighter font-geist">
                            12<span className="text-orange-500">x</span></h3>
</div>
<p className="text-xl font-medium text-zinc-300 border-l-2 border-orange-500 pl-4 mb-12">
                        Increase in transaction throughput after migrating to Nebula L2 rollups.
                    </p>
<span className="iconify text-4xl text-zinc-700 mb-6" data-icon="solar:quote-up-bold-duotone"></span>
<blockquote className="text-lg text-gray-300 font-sans leading-relaxed mb-8">
                        "We needed a scalable infrastructure that didn't compromise on decentralization. Nebula
                        delivered
                        exactly that. Our gas fees dropped by 90% overnight while maintaining instant finality."
                    </blockquote>
</div>
<div className="relative z-10 flex items-center justify-between pt-8 border-t border-white/5">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all" src="https://i.pravatar.cc/150?u=uniswap"/>
</div>
<div>
<h4 className="text-sm font-semibold text-white font-manrope">Elena Rodriguez</h4>
<p className="text-xs text-zinc-500 font-sans">Lead Protocol Eng, Uniswap</p>
</div>
</div>
<div className="text-zinc-500 opacity-50 group-hover:opacity-100 transition-opacity">
<span className="iconify text-2xl" data-icon="simple-icons:uniswap"></span>
</div>
</div>
</div>

<div className="carousel-card group flex flex-col hover:bg-zinc-900/60 transition-all duration-500 bg-zinc-900/40 rounded-[2.5rem] pt-10 pr-10 pb-10 pl-10 relative backdrop-blur-sm justify-between animate-carousel" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', -BorderRadiusBefore: '2.5rem', animationDelay: '5s', opacity: '0'}}>

<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 rounded-[2.5rem] absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="relative z-10">
<div className="flex items-baseline gap-2 mb-4">
<h3 className="text-8xl font-semibold text-white tracking-tighter font-geist">
                            99<span className="text-blue-500">%</span></h3>
</div>
<p className="text-xl font-medium text-zinc-300 border-l-2 border-blue-500 pl-4 mb-12">
                        Uptime guaranteed with our decentralized sequencer network.
                    </p>
<span className="iconify text-4xl text-zinc-700 mb-6" data-icon="solar:quote-up-bold-duotone"></span>
<blockquote className="text-lg text-gray-300 font-sans leading-relaxed mb-8">
                        "Migrating our DEX to Nebula's rollup infrastructure was seamless. We've seen zero downtime in
                        18
                        months of operation, even during peak network congestion."
                    </blockquote>
</div>
<div className="relative z-10 flex items-center justify-between pt-8 border-t border-white/5">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all" src="https://i.pravatar.cc/150?u=arbitrum"/>
</div>
<div>
<h4 className="text-sm font-semibold text-white font-manrope">James Wu</h4>
<p className="text-xs text-zinc-500 font-sans">Core Dev, Arbitrum</p>
</div>
</div>
<div className="text-zinc-500 opacity-50 group-hover:opacity-100 transition-opacity">
<span className="iconify text-2xl" data-icon="simple-icons:arbitrum"></span>
</div>
</div>
</div>

<div className="carousel-card group flex flex-col hover:bg-zinc-900/60 transition-all duration-500 bg-zinc-900/40 rounded-[2.5rem] pt-10 pr-10 pb-10 pl-10 relative backdrop-blur-sm justify-between animate-carousel" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', -BorderRadiusBefore: '2.5rem', animationDelay: '10s', opacity: '0'}}>

<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-red-500/5 via-transparent to-transparent opacity-0 rounded-[2.5rem] absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="relative z-10">
<div className="flex items-baseline gap-2 mb-4">
<h3 className="text-8xl font-semibold text-white tracking-tighter font-geist">
                            50<span className="text-red-500 text-4xl align-top ml-1">ms</span></h3>
</div>
<p className="text-xl font-medium text-zinc-300 border-l-2 border-red-500 pl-4 mb-12">
                        Latency achieved for cross-chain message propagation.
                    </p>
<span className="iconify text-4xl text-zinc-700 mb-6" data-icon="solar:quote-up-bold-duotone"></span>
<blockquote className="leading-relaxed text-lg text-gray-300 mb-8">
                        "The speed of Nebula's bridge infrastructure is unmatched. We can now settle transactions across
                        multiple rollups almost instantaneously, a game changer for our users."
                    </blockquote>
</div>
<div className="relative z-10 flex items-center justify-between pt-8 border-t border-white/5">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all" src="https://i.pravatar.cc/150?u=optimism"/>
</div>
<div className="">
<h4 className="text-sm font-semibold text-white font-manrope">Sarah Jenkins</h4>
<p className="text-xs text-zinc-500 font-sans">PM, Optimism</p>
</div>
</div>
<div className="text-zinc-500 opacity-50 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" data-icon="simple-icons:optimism" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0M9.61 8.705q.693 0 1.244.235q.549.225.863.683q.316.45.316 1.08q0 .19-.045.479a20 20 0 0 1-.324 1.558q-.315 1.234-1.09 1.846q-.774.603-2.072.604q-1.072 0-1.756-.504q-.675-.514-.676-1.46q0-.197.045-.486q.117-.648.334-1.558q.612-2.477 3.16-2.477m4.17.09h2.397q1 0 1.603.414q.613.414.612 1.197q-.001.225-.055.47q-.224 1.035-.908 1.53q-.676.496-1.856.496h-1.217l-.414 1.973a.26.26 0 0 1-.1.162a.27.27 0 0 1-.17.063h-1.224q-.1 0-.154-.063a.22.22 0 0 1-.027-.162L13.51 9.02a.26.26 0 0 1 .097-.162a.28.28 0 0 1 .172-.063m-4.287 1.207q-.503 0-.863.297q-.351.298-.504.91q-.162.603-.324 1.477a2 2 0 0 0-.037.379q0 .828.865.828q.504 0 .855-.297q.36-.297.514-.91q.206-.847.314-1.477a2 2 0 0 0 .038-.389q0-.819-.858-.818m5.45.045l-.342 1.611h1.035q.379 0 .658-.207a.97.97 0 0 0 .377-.594q.027-.152.027-.27q0-.26-.152-.396q-.153-.144-.524-.144z" fill="currentColor">
</path>
</svg>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between gap-6 px-4">
<div className="flex items-center gap-4">
<div className="flex -space-x-3">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-zinc-950" src="https://i.pravatar.cc/100?img=1"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-zinc-950" src="https://i.pravatar.cc/100?img=2"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-zinc-950" src="https://i.pravatar.cc/100?img=3"/>
<div className="w-8 h-8 rounded-full border-2 border-zinc-950 bg-zinc-800 flex items-center justify-center text-[10px] font-bold class=" flex="" gap-1="" items-center="" text-orange-500="" text-xs"="">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor">
</path>
</svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor">
</path>
</svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor">
</path>
</svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor">
</path>
</svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor">
</path>
</svg>
<span className="text-white font-semibold ml-1">4.9/5</span>
</div>
<p className="text-xs font-medium text-zinc-500 mt-0.5 px-6 py-1.5">from 2,000+ protocols</p>
</div>
</div>
<button className="group flex items-center gap-2 pl-6 pr-2 py-2 rounded-full bg-zinc-900 border border-white/10 hover:border-white/20 hover:bg-zinc-800 transition-all duration-300">
<span className="text-sm font-medium text-zinc-300 group-hover:text-white font-sans">Read all success stories</span>
<div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover:rotate-45">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-up-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6m0 0H9m9 0v9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
</button>
</div>
</section><section className="z-20 w-full max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-32 pl-6 relative">

<div className="absolute inset-0 pointer-events-none flex justify-between px-6 -z-10">
<div className="h-full w-px bg-gradient-to-b from-white/0 via-white/5 to-white/0"></div>
<div className="h-full w-px bg-gradient-to-b from-white/0 via-white/5 to-white/0 hidden md:block"></div>
<div className="h-full w-px bg-gradient-to-b from-white/0 via-white/5 to-white/0 hidden md:block"></div>
<div className="h-full w-px bg-gradient-to-b from-white/0 via-white/5 to-white/0"></div>
</div>

<div className="flex flex-col items-center text-center mb-20 relative z-10">
<div className="inline-flex gap-2 bg-orange-500/5 border-orange-500/20 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
<svg aria-hidden="true" className="iconify iconify--solar w-[16px] h-[16px]" data-icon="solar:star-bold-duotone" data-icon-replaced="true" data-icon-set="solar" data-solar="card-2-bold-duotone" height="16" role="img" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(249, 115, 22)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M10 20h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12c0-.442-.002-1.608-.004-2H2c-.002.392 0 1.558 0 2c0 3.771 0 5.657 1.171 6.828S6.23 20 10 20" fill="#f97316" opacity=".5"></path>
<path className="" d="M5.25 13.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75" fill="#f97316"></path>
<path clip-rule="evenodd" d="M17.197 12.293c-.323-.043-.72-.043-1.152-.043h-.09c-.433 0-.83 0-1.152.043c-.356.048-.731.16-1.04.47s-.422.684-.47 1.04c-.043.323-.043.72-.043 1.152v.09c0 .433 0 .83.043 1.152c.048.356.16.731.47 1.04s.684.422 1.04.47c.323.043.72.043 1.152.043h.09c.433 0 .83 0 1.152-.043c.356-.048.731-.16 1.04-.47s.422-.684.47-1.04c.043-.323.043-.72.043-1.152v-.09c0-.433 0-.83-.043-1.152c-.048-.356-.16-.731-.47-1.04s-.684-.422-1.04-.47m-2.371 1.529l-.003.001l-.001.003l-.005.01a.7.7 0 0 0-.037.167c-.028.21-.03.504-.03.997s.002.787.03.997a.7.7 0 0 0 .042.177l.001.003l.003.001l.01.005c.022.009.07.024.167.037c.21.028.504.03.997.03s.787-.002.997-.03a.7.7 0 0 0 .177-.042l.003-.001l.001-.003l.005-.01a.7.7 0 0 0 .037-.167c.028-.21.03-.504.03-.997s-.002-.787-.03-.997a.7.7 0 0 0-.042-.177l-.001-.003l-.003-.001l-.01-.005a.7.7 0 0 0-.167-.037c-.21-.028-.504-.03-.997-.03s-.787.002-.997.03a.7.7 0 0 0-.177.042" fill="#f97316" fill-rule="evenodd"></path>
<path className="" d="M9.995 4h4.01c3.781 0 5.672 0 6.846 1.116c.846.803 1.083 1.96 1.149 3.884v1H2V9c.066-1.925.303-3.08 1.149-3.884C4.323 4 6.214 4 9.995 4" fill="#f97316"></path>
</svg>
<span className="uppercase text-xs font-semibold text-orange-200 tracking-widest">Pricing &amp; Licensing</span>
</div>
<h2 className="md:text-7xl text-5xl font-medium text-white tracking-tighter font-manrope mb-8">
            Flexible pricing for
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-500">scaling protocols</span>
</h2>

<div className="flex items-center p-1 bg-zinc-900/80 border border-white/10 rounded-full backdrop-blur-xl relative">
<button className="relative px-6 py-2 rounded-full text-sm font-medium text-white shadow-[0_1px_3px_rgba(0,0,0,0.5)] bg-zinc-800 border border-white/5 z-10 transition-all font-sans">
                Monthly
            </button>
<button className="relative px-6 py-2 rounded-full text-sm font-medium text-zinc-500 hover:text-zinc-300 transition-all font-sans">
                Annual
                
            </button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-6 gap-y-6 items-start">

<div className="group relative flex flex-col p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-all duration-500 backdrop-blur-sm lg:mt-8">
<div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>

<div className="flex group-hover:scale-110 transition-transform duration-500 bg-zinc-800 w-14 h-14 border-white/5 border rounded-2xl mr-auto mb-6 ml-auto shadow-inner items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold-duotone" data-icon-replaced="true" data-icon-set="solar" data-solar="star-circle-bold-duotone" height="24" role="img" style={{color: '#f97316'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="#f97316" opacity=".5"></path>
<path className="" d="m10.413 8.498l.164-.294C11.21 7.068 11.527 6.5 12 6.5s.79.568 1.423 1.704l.164.294c.18.323.27.484.41.59c.14.107.316.147.665.226l.318.072c1.23.278 1.845.417 1.991.888c.147.47-.273.96-1.111 1.941l-.217.254c-.238.278-.357.418-.41.59c-.055.172-.037.358 0 .73l.032.338c.127 1.308.19 1.962-.193 2.253c-.383.29-.958.026-2.11-.504l-.298-.138c-.327-.15-.49-.226-.664-.226c-.173 0-.337.076-.664.226l-.298.138c-1.152.53-1.727.795-2.11.504c-.383-.29-.32-.945-.193-2.253l.032-.338c.037-.372.055-.558 0-.73c-.053-.172-.172-.312-.41-.59l-.217-.254c-.838-.98-1.258-1.47-1.111-1.941c.146-.47.76-.61 1.99-.888l.319-.072c.35-.08.524-.119.665-.225c.14-.107.23-.268.41-.59" fill="#f97316">
</path>
</svg>
</div>
<div className="text-center mb-8">
<div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2 font-sans">Core</div>
<div className="flex items-baseline justify-center gap-1">
<span className="text-5xl font-semibold text-white tracking-tighter font-geist">$49</span>
<span className="text-zinc-500 font-medium text-sm">/mo</span>
</div>
<p className="text-sm text-zinc-400 mt-4 font-sans">Best for solo developers and testnets.</p>
</div>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3 text-sm text-zinc-300 font-sans">
<iconify-icon className="text-orange-500/70 text-lg shrink-0" icon="solar:check-circle-bold-duotone"></iconify-icon>
<span>100k API requests/mo</span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-300 font-sans">
<iconify-icon className="text-orange-500/70 text-lg shrink-0" icon="solar:check-circle-bold-duotone"></iconify-icon>
<span>3 Shared Nodes</span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-300 font-sans">
<iconify-icon className="text-orange-500/70 text-lg shrink-0" icon="solar:check-circle-bold-duotone"></iconify-icon>
<span className="">Community Support</span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-500 font-sans">
<iconify-icon className="text-zinc-700 text-lg shrink-0" icon="solar:check-circle-bold-duotone"></iconify-icon>
<span>Archive Data</span>
</div>
</div>
<button className="mt-auto w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 text-sm font-medium text-white transition-all font-sans group-hover:border-white/20">
                Start Building
            </button>
</div>

<div className="flex flex-col transform lg:-translate-y-4 z-10 bg-zinc-900/80 border-orange-500/30 border rounded-[2.5rem] pt-8 pr-8 pb-8 pl-8 relative shadow-[0_0_50px_-20px_rgba(249,115,22,0.15)]">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-orange-500/10 blur-[60px] pointer-events-none rounded-full">
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-950 border border-orange-500/30 text-orange-400 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg z-20 mt-1">
    Most Popular
  </div>

<div className="z-10 flex bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-2xl mr-auto mb-6 ml-auto relative shadow-[0_0_20px_rgba(249,115,22,0.4)] items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--solar w-[24px] h-[24px]" data-icon="solar:star-bold-duotone" data-icon-replaced="true" data-icon-set="solar" data-solar="chart-2-bold-duotone" height="24" role="img" strokeWidth="2" style={{color: 'rgb(10, 10, 10)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.293 9.293C3 9.586 3 10.057 3 11v6c0 .943 0 1.414.293 1.707S4.057 19 5 19s1.414 0 1.707-.293S7 17.943 7 17v-6c0-.943 0-1.414-.293-1.707S5.943 9 5 9s-1.414 0-1.707.293" fill="#0a0a0a"></path><path className="" d="M17.293 2.293C17 2.586 17 3.057 17 4v13c0 .943 0 1.414.293 1.707S18.057 19 19 19s1.414 0 1.707-.293S21 17.943 21 17V4c0-.943 0-1.414-.293-1.707S19.943 2 19 2s-1.414 0-1.707.293" fill="#0a0a0a" opacity=".4"></path><path d="M10 7c0-.943 0-1.414.293-1.707S11.057 5 12 5s1.414 0 1.707.293S14 6.057 14 7v10c0 .943 0 1.414-.293 1.707S12.943 19 12 19s-1.414 0-1.707-.293S10 17.943 10 17z" fill="#0a0a0a" opacity=".7"></path><path className="" d="M3 21.25a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5z" fill="#0a0a0a"></path></svg>
</div>
<div className="text-center mb-8 relative z-10">
<div className="text-xs font-bold text-orange-300 uppercase tracking-widest mb-2 border border-orange-500/20 bg-orange-500/10 inline-block px-2 py-0.5 rounded font-sans">
      Growth</div>
<div className="flex items-baseline justify-center gap-1">
<span className="text-6xl font-semibold text-white tracking-tighter font-geist">$199</span>
<span className="text-zinc-400 font-medium text-sm">/mo</span>
</div>
<p className="text-sm text-zinc-300 mt-4 font-sans">For scaling dApps and active mainnets.</p>
</div>
<div className="space-y-4 mb-10 relative z-10">
<div className="flex items-center gap-3 text-sm text-white font-sans font-medium">
<div className="flex shrink-0 bg-orange-500/20 w-5 h-5 rounded-full items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--solar w-[16px] h-[16px]" data-icon="solar:star-bold-duotone" data-icon-replaced="true" data-icon-set="solar" data-solar="check-circle-bold-duotone" height="16" role="img" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(249, 115, 22)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="#f97316" opacity=".5"></path>
<path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="#f97316">
</path>
</svg>
</div>
<span className="">5M API requests/mo</span>
</div>
<div className="flex items-center gap-3 text-sm text-white font-sans font-medium">
<div className="flex shrink-0 bg-orange-500/20 w-5 h-5 rounded-full items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--solar w-[16px] h-[16px]" data-icon="solar:star-bold-duotone" data-icon-replaced="true" data-icon-set="solar" data-solar="check-circle-bold-duotone" height="16" role="img" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(249, 115, 22)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="#f97316" opacity=".5"></path>
<path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="#f97316">
</path>
</svg>
</div>
<span className="">1 Dedicated Node</span>
</div>
<div className="flex items-center gap-3 text-sm text-white font-sans font-medium">
<div className="flex shrink-0 bg-orange-500/20 w-5 h-5 rounded-full items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--solar w-[16px] h-[16px]" data-icon="solar:star-bold-duotone" data-icon-replaced="true" data-icon-set="solar" data-solar="check-circle-bold-duotone" height="16" role="img" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(249, 115, 22)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="#f97316" opacity=".5"></path>
<path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="#f97316">
</path>
</svg>
</div>
<span className="">Priority Support (24/7)</span>
</div>
<div className="flex items-center gap-3 text-sm text-white font-sans font-medium">
<div className="flex shrink-0 bg-orange-500/20 w-5 h-5 rounded-full items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--solar w-[16px] h-[16px]" data-icon="solar:star-bold-duotone" data-icon-replaced="true" data-icon-set="solar" data-solar="check-circle-bold-duotone" height="16" role="img" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(249, 115, 22)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="#f97316" opacity=".5"></path>
<path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="#f97316">
</path>
</svg>
</div>
<span className="">Full Archive Access</span>
</div>
<div className="flex items-center gap-3 text-sm text-white font-sans font-medium">
<div className="flex shrink-0 bg-orange-500/20 w-5 h-5 rounded-full items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--solar w-[16px] h-[16px]" data-icon="solar:star-bold-duotone" data-icon-replaced="true" data-icon-set="solar" data-solar="check-circle-bold-duotone" height="16" role="img" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(249, 115, 22)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="#f97316" opacity=".5"></path>
<path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="#f97316">
</path>
</svg>
</div>
<span className="">Advanced Analytics</span>
</div>
</div>

<button className="relative w-full py-4 rounded-xl font-semibold text-sm text-white overflow-hidden group/btn font-sans">
<div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 transition-all duration-300 group-hover/btn:scale-[1.02]"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
<span className="relative z-10 flex items-center justify-center gap-2">
                    Get Started
                    <iconify-icon className="text-lg transition-transform group-hover/btn:translate-x-1" icon="solar:arrow-right-bold-duotone"></iconify-icon>
</span>
</button>
<p className="text-[10px] text-zinc-500 text-center mt-4 font-sans">14-day free trial, no credit card required.</p>
</div>

<div className="group relative flex flex-col p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-all duration-500 backdrop-blur-sm lg:mt-8">
<div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>

<div className="flex group-hover:scale-110 transition-transform duration-500 bg-zinc-800 w-14 h-14 border-white/5 border rounded-2xl mr-auto mb-6 ml-auto shadow-inner items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--solar w-[24px] h-[24px]" data-icon="solar:star-bold-duotone" data-icon-replaced="true" data-icon-set="solar" data-solar="sim-cards-bold-duotone" height="24" role="img" strokeWidth="2" style={{color: 'rgb(249, 115, 22)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.172 20.828C4.343 22 6.229 22 10 22s5.657 0 6.828-1.172S18 17.771 18 14a3.86 3.86 0 0 0-1.136-2.731l-4.133-4.133A3.86 3.86 0 0 0 10 6C6.229 6 4.343 6 3.172 7.172S2 10.229 2 14s0 5.657 1.172 6.828M11 14c.943 0 1.414 0 1.707.293S13 15.057 13 16h-2.5v-2zm-1.5 5H9c-.943 0-1.414 0-1.707-.293S7 17.943 7 17v-1c0-.943 0-1.414.293-1.707S8.057 14 9 14h.5zm1.5 0h-.5v-2H13c0 .943 0 1.414-.293 1.707S11.943 19 11 19" fill="#f97316" fill-rule="evenodd"></path><path d="M6.093 6.093c.123-1.352.41-2.253 1.079-2.921C8.343 2 10.229 2 14 2a3.86 3.86 0 0 1 2.731 1.136l4.133 4.133A3.86 3.86 0 0 1 22 10c0 3.771 0 5.657-1.172 6.828c-.668.669-1.57.956-2.92 1.08C18 16.89 18 15.618 18 14a3.86 3.86 0 0 0-1.136-2.731l-4.133-4.133A3.86 3.86 0 0 0 10.001 6c-1.62 0-2.892 0-3.908.093" fill="#f97316" opacity=".5"></path></svg>
</div>
<div className="text-center mb-8">
<div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2 font-sans">Enterprise</div>
<div className="flex items-baseline justify-center gap-1">
<span className="text-5xl font-semibold text-white tracking-tighter font-geist">Custom</span>
</div>
<p className="text-sm text-zinc-400 mt-4 font-sans">Exclusively for high-volume networks.</p>
</div>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3 text-sm text-zinc-300 font-sans">
<iconify-icon className="text-orange-500/70 text-lg shrink-0" icon="solar:check-circle-bold-duotone"></iconify-icon>
<span className="">Unlimited API requests</span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-300 font-sans">
<iconify-icon className="text-orange-500/70 text-lg shrink-0" icon="solar:check-circle-bold-duotone"></iconify-icon>
<span className="">Custom Node Clusters</span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-300 font-sans">
<iconify-icon className="text-orange-500/70 text-lg shrink-0" icon="solar:check-circle-bold-duotone"></iconify-icon>
<span className="">Dedicated Solution Eng.</span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-300 font-sans">
<iconify-icon className="text-orange-500/70 text-lg shrink-0" icon="solar:check-circle-bold-duotone"></iconify-icon>
<span className="">SLA 99.99% Guaranteed</span>
</div>
</div>
<button className="mt-auto w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 text-sm font-medium text-white transition-all font-sans group-hover:border-white/20">
                Contact Sales
            </button>
</div>
</div>

</section><section className="z-20 w-full max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-32 pl-6 relative">

<div className="absolute inset-0 pointer-events-none flex justify-between px-6 -z-10">
<div className="h-full w-px bg-gradient-to-b from-white/0 via-white/5 to-white/0"></div>
<div className="h-full w-px bg-gradient-to-b from-white/0 via-white/5 to-white/0 hidden md:block"></div>
<div className="h-full w-px bg-gradient-to-b from-white/0 via-white/5 to-white/0 hidden md:block"></div>
<div className="h-full w-px bg-gradient-to-b from-white/0 via-white/5 to-white/0"></div>
</div>

<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-14 relative z-10">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 bg-orange-500/5 border border-orange-500/20 rounded-full pt-1 pr-3 pb-1 pl-3 mb-6">
<svg aria-hidden="true" className="w-[18px] h-[18px]" data-icon-replaced="true" fill="none" strokeWidth="2" style={{width: '18px', height: '18px', color: 'rgb(249, 115, 22)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M16 11c1.66 0 3-1.79 3-4s-1.34-4-3-4-3 1.79-3 4 1.34 4 3 4Z" fill="currentColor" opacity=".45"></path>
<path className="" d="M8 11c1.66 0 3-1.79 3-4S9.66 3 8 3 5 4.79 5 7s1.34 4 3 4Z" fill="currentColor" opacity=".45"></path>
<path className="" d="M8 13c-2.76 0-5 1.79-5 4v2h10v-2c0-2.21-2.24-4-5-4Z" fill="currentColor"></path>
<path className="" d="M16 13c-2.76 0-5 1.79-5 4v2h10v-2c0-2.21-2.24-4-5-4Z" fill="currentColor"></path>
</svg>
<span className="text-xs font-semibold uppercase tracking-widest text-orange-200 font-sans">Expert Network</span>
</div>
<h2 className="text-5xl md:text-6xl font-medium tracking-tight text-white font-manrope leading-[1.05]">
        Get hands-on support from
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-500">verified builders</span>
</h2>
<p className="text-xl text-zinc-400 font-sans leading-relaxed mt-5">
        Book architecture reviews, incident response, and performance tuning from operators who ship at scale.
      </p>
</div>
<div className="flex flex-col sm:flex-row gap-3">
<button className="group inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-semibold font-sans transition-colors hover:bg-zinc-200">
<svg aria-hidden="true" className="w-[18px] h-[18px] text-black" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2.5c-2.3 0-4.1 1.9-4.1 4.2 0 2.2 1.8 4.1 4.1 4.1s4.1-1.9 4.1-4.1C16.1 4.4 14.3 2.5 12 2.5Z" fill="currentColor" opacity=".35"></path>
<path d="M20.4 11.2c-.6-.2-1.2 0-1.6.4l-1.1 1.1-1.8-1.8 1.1-1.1c.4-.4.6-1 .4-1.6-.2-.6-.7-1-1.3-1.1l-1.5-.2-.2-1.5c-.1-.6-.5-1.1-1.1-1.3-.6-.2-1.2 0-1.6.4L9.6 4.6 7.8 2.8 6.7 3.9c-.4.4-.6 1-.4 1.6.2.6.7 1 1.3 1.1l1.5.2.2 1.5c.1.6.5 1.1 1.1 1.3.6.2 1.2 0 1.6-.4l1.1-1.1 1.8 1.8-1.1 1.1c-.4.4-.6 1-.4 1.6.2.6.7 1 1.3 1.1l1.5.2.2 1.5c.1.6.5 1.1 1.1 1.3.6.2 1.2 0 1.6-.4l1.1-1.1 1.8 1.8 1.1-1.1c.4-.4.6-1 .4-1.6-.2-.6-.7-1-1.3-1.1l-1.5-.2-.2-1.5c-.1-.6-.5-1.1-1.1-1.3Z" fill="currentColor"></path>
<path d="M12 12.8c-4.9 0-8.7 2.5-8.7 5.8v2.9h17.4v-2.9c0-3.3-3.8-5.8-8.7-5.8Z" fill="currentColor" opacity=".35"></path>
</svg>
        Get matched
      </button>
<button className="group inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900/40 border border-white/10 px-6 py-3 text-sm font-semibold text-white font-sans transition-colors hover:bg-zinc-900/60 hover:border-white/20">
<svg aria-hidden="true" className="w-[18px] h-[18px] text-white/80 group-hover:text-white" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 4h6a4 4 0 0 1 4 4v2.5H5V8a4 4 0 0 1 4-4Z" fill="currentColor" opacity=".35"></path>
<path d="M5 10.5h14V18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7.5Z" fill="currentColor"></path>
<path d="M9 9.2V8.3c0-.7.6-1.3 1.3-1.3h3.4c.7 0 1.3.6 1.3 1.3v.9" opacity=".75" stroke="currentColor" strokeWidth="1.5"></path>
</svg>
        Browse experts
      </button>
</div>
</div>

<div className="relative z-10">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<article className="group rounded-[2.5rem] bg-zinc-900/40 hover:bg-zinc-900/60 transition-all duration-500 relative backdrop-blur-sm overflow-hidden" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', -BorderRadiusBefore: '2.5rem'}}>
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 rounded-[2.5rem] absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative">
<div className="aspect-[16/10] bg-gradient-to-br from-white/10 to-white/0 overflow-hidden">
<img alt="Project preview" className="h-full w-full object-cover opacity-90 grayscale group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/60 border border-white/10 backdrop-blur px-3 py-1">
<svg aria-hidden="true" className="w-4 h-4 text-emerald-400" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4Z" fill="currentColor" opacity=".25"></path>
<path d="M9.2 12.1l2 2 3.8-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs font-semibold text-zinc-200 font-sans">Verified</span>
</div>
</div>
<div className="pt-5 pr-5 pb-6 pl-5 relative z-10">
<div className="flex items-center justify-between gap-3">
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="text-base font-semibold tracking-tight text-white font-manrope truncate">Kiteworks Lab</span>
</div>
<p className="text-sm text-zinc-400 font-sans">Germany</p>
</div>
<div className="flex items-center gap-2">
<div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10">
<svg aria-hidden="true" className="w-[18px] h-[18px] text-zinc-200" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18l-6-6 6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M15 6l6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between gap-4">
<div className="flex items-center gap-2 text-sm text-zinc-300 font-sans">
<svg aria-hidden="true" className="w-[18px] h-[18px] text-orange-400/80" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 7v5l3 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" opacity=".35" stroke="currentColor" strokeWidth="2"></path>
</svg>
<span>Reply in 2 hrs</span>
</div>
<div className="inline-flex items-center gap-2 text-sm font-semibold text-white font-sans">
<span className="text-zinc-500 font-medium">from</span>
<span className="tracking-tight">$180</span>
<span className="text-zinc-500 font-medium">/hr</span>
</div>
</div>
</div>
</article>

<article className="group rounded-[2.5rem] bg-zinc-900/40 hover:bg-zinc-900/60 transition-all duration-500 relative backdrop-blur-sm overflow-hidden" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', -BorderRadiusBefore: '2.5rem'}}>
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 rounded-[2.5rem] absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative">
<div className="aspect-[16/10] bg-gradient-to-br from-white/10 to-white/0 overflow-hidden">
<img alt="Project preview" className="h-full w-full object-cover opacity-90 grayscale group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/60 border border-white/10 backdrop-blur px-3 py-1">
<svg aria-hidden="true" className="w-4 h-4 text-orange-400" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l2.9 6.2 6.8.7-5.1 4.4 1.5 6.7L12 16.9 6 20l1.5-6.7L2.4 8.9l6.8-.7L12 2Z" fill="currentColor" opacity=".25"></path>
<path d="M12 3.7l2.3 4.8 5.3.6-4 3.4 1.2 5.2L12 15.5 7.2 17.7l1.2-5.2-4-3.4 5.3-.6L12 3.7Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-xs font-semibold text-zinc-200 font-sans">Top rated</span>
</div>
</div>
<div className="pt-5 pr-5 pb-6 pl-5 relative z-10">
<div className="flex items-center justify-between gap-3">
<div className="min-w-0">
<span className="text-base font-semibold tracking-tight text-white font-manrope truncate">Northwind Systems</span>
<p className="text-sm text-zinc-400 font-sans">Canada</p>
</div>
<div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10">
<svg aria-hidden="true" className="w-[18px] h-[18px] text-zinc-200" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
<path d="M6 6v12" opacity=".6" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
<path d="M18 6v12" opacity=".6" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
<path d="M4 12h16" opacity=".7" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
<path d="M4 18h16" opacity=".45" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="mt-4 flex items-center justify-between gap-4">
<div className="flex items-center gap-2 text-sm text-zinc-300 font-sans">
<svg aria-hidden="true" className="w-[18px] h-[18px] text-emerald-400/90" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" fill="currentColor" opacity=".2"></path>
<path d="M8.5 12.5l2.2 2.2 4.8-5.4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="">98% success</span>
</div>
<div className="inline-flex items-center gap-2 text-sm font-semibold text-white font-sans">
<span className="text-zinc-500 font-medium">from</span>
<span className="tracking-tight">$220</span>
<span className="text-zinc-500 font-medium">/hr</span>
</div>
</div>
</div>
</article>

<article className="group hover:bg-zinc-900/60 transition-all duration-500 backdrop-blur-sm-hidden overflow-hidden bg-zinc-900/40 z-10 rounded-[2.5rem] relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', -BorderRadiusBefore: '2.5rem'}}>
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 rounded-[2.5rem] absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative">
<div className="aspect-[16/10] bg-gradient-to-br from-white/10 to-white/0 overflow-hidden">
<img alt="Project preview" className="group-hover:grayscale-0 transition-all duration-700 opacity-90 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/60 border border-white/10 backdrop-blur px-3 py-1">
<svg aria-hidden="true" className="w-4 h-4 text-sky-400" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14l4-4 4 4 8-8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M20 6v6h-6" opacity=".85" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs font-semibold text-zinc-200 font-sans">Growth</span>
</div>
</div>
<div className="z-10 pt-5 pr-5 pb-6 pl-5 relative">
<div className="flex items-center justify-between gap-3">
<div className="min-w-0">
<span className="text-base font-semibold tracking-tight text-white font-manrope truncate">Mina Park</span>
<p className="text-sm text-zinc-400 font-sans">United States</p>
</div>
<div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10">
<svg aria-hidden="true" className="w-[18px] h-[18px] text-zinc-200" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l8 5v10l-8 5-8-5V7l8-5Z" fill="currentColor" opacity=".18"></path>
<path d="M12 2l8 5v10l-8 5-8-5V7l8-5Z" opacity=".7" stroke="currentColor" strokeWidth="1.5"></path>
<path d="M12 22V12" opacity=".7" stroke="currentColor" strokeWidth="1.5"></path>
<path d="M4 7l8 5 8-5" opacity=".7" stroke="currentColor" strokeWidth="1.5"></path>
</svg>
</div>
</div>
<div className="mt-4 flex items-center justify-between gap-4">
<div className="flex items-center gap-2 text-sm text-zinc-300 font-sans">
<svg aria-hidden="true" className="w-[18px] h-[18px] text-orange-400/80" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4Z" fill="currentColor" opacity=".18"></path>
<path d="M12 7.5v5.2l3.2 1.8" opacity=".9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="">Infra audits</span>
</div>
<div className="inline-flex items-center gap-2 text-sm font-semibold text-white font-sans">
<span className="text-zinc-500 font-medium">from</span>
<span className="tracking-tight">$260</span>
<span className="text-zinc-500 font-medium">/hr</span>
</div>
</div>
</div>
</article>

<article className="group rounded-[2.5rem] bg-zinc-900/40 hover:bg-zinc-900/60 transition-all duration-500 relative backdrop-blur-sm overflow-hidden" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', -BorderRadiusBefore: '2.5rem'}}>
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 rounded-[2.5rem] absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative">
<div className="aspect-[16/10] bg-gradient-to-br from-white/10 to-white/0 overflow-hidden">
<img alt="Project preview" className="group-hover:grayscale-0 transition-all duration-700 opacity-90 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dd0173f2-c2ad-4e4d-ab9e-bef39427cb7a_800w.webp"/>
</div>
<div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/60 border border-white/10 backdrop-blur px-3 py-1">
<svg aria-hidden="true" className="w-4 h-4 text-orange-400" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2L3 14h7l-1 8 12-14h-7l1-6Z" fill="currentColor" opacity=".25"></path>
<path d="M13 2L3 14h7l-1 8 12-14h-7l1-6Z" opacity=".9" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-xs font-semibold text-zinc-200 font-sans">Fast start</span>
</div>
</div>
<div className="pt-5 pr-5 pb-6 pl-5 relative z-10">
<div className="flex items-center justify-between gap-3">
<div className="min-w-0">
<span className="text-base font-semibold tracking-tight text-white font-manrope truncate">Brightline Studio</span>
<p className="text-sm text-zinc-400 font-sans">United Kingdom</p>
</div>
<div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10">
<svg aria-hidden="true" className="w-[18px] h-[18px] text-zinc-200" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3c4.97 0 9 3.13 9 7s-4.03 7-9 7-9-3.13-9-7 4.03-7 9-7Z" opacity=".6" stroke="currentColor" strokeWidth="1.5"></path>
<path d="M7.5 20.5c2.8-2 6.2-2 9 0" opacity=".85" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M9 9.5c0 1 .8 1.8 1.8 1.8S12.6 10.5 12.6 9.5 11.8 7.7 10.8 7.7 9 8.5 9 9.5Z" fill="currentColor" opacity=".2"></path>
<path d="M13.6 9.5c0 1 .8 1.8 1.8 1.8S17.2 10.5 17.2 9.5 16.4 7.7 15.4 7.7s-1.8.8-1.8 1.8Z" fill="currentColor" opacity=".2"></path>
</svg>
</div>
</div>
<div className="mt-4 flex items-center justify-between gap-4">
<div className="flex items-center gap-2 text-sm text-zinc-300 font-sans">
<svg aria-hidden="true" className="w-[18px] h-[18px] text-orange-400/80" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2Z" fill="currentColor" opacity=".18"></path>
<path d="M7.5 9.5c.6-.9 1.6-1.5 2.8-1.5s2.2.6 2.8 1.5" opacity=".9" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6"></path>
<path d="M9 15.8c.8.8 1.9 1.2 3 1.2s2.2-.4 3-1.2" opacity=".9" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6"></path>
</svg>
<span>First call today</span>
</div>
<div className="inline-flex items-center gap-2 text-sm font-semibold text-white font-sans">
<span className="text-zinc-500 font-medium">from</span>
<span className="tracking-tight">$150</span>
<span className="text-zinc-500 font-medium">/hr</span>
</div>
</div>
</div>
</article>
</div>

<div className="flex items-center justify-between mt-10 gap-6">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-white/60"></span>
<span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
<span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-500 font-sans">
<svg aria-hidden="true" className="w-[18px] h-[18px] text-zinc-500" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4Z" fill="currentColor" opacity=".2"></path>
<path d="M12 7.3l1.2 2.6 2.8.3-2.1 1.8.6 2.7-2.5-1.3-2.5 1.3.6-2.7-2.1-1.8 2.8-.3L12 7.3Z" fill="currentColor" opacity=".65"></path>
</svg>
<span>1,240+ vetted sessions · avg. 4.8/5</span>
</div>
</div>
</div>

</section><section className="z-20 w-full max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-32 pl-6 relative">

<div className="absolute inset-0 pointer-events-none flex justify-between px-6 -z-10">
<div className="h-full w-px bg-gradient-to-b from-white/0 via-white/5 to-white/0"></div>
<div className="h-full w-px bg-gradient-to-b from-white/0 via-white/5 to-white/0 hidden md:block"></div>
<div className="h-full w-px bg-gradient-to-b from-white/0 via-white/5 to-white/0 hidden md:block"></div>
<div className="h-full w-px bg-gradient-to-b from-white/0 via-white/5 to-white/0"></div>
</div>

<div className="flex flex-col text-center mb-12 md:mb-16 items-center relative z-10">
<div className="inline-flex items-center gap-2 bg-orange-500/5 border border-orange-500/20 rounded-full pt-1 pr-3 pb-1 pl-3 mb-6">
<svg aria-hidden="true" className="iconify iconify--solar w-[16px] h-[16px]" data-icon="solar:star-bold-duotone" data-icon-replaced="true" data-icon-set="solar" data-solar="chart-bold-duotone" height="16" role="img" strokeWidth="2" style={{color: 'rgb(249, 115, 22)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M14 20.5V4.25c0-.728-.002-1.2-.048-1.546c-.044-.325-.115-.427-.172-.484s-.159-.128-.484-.172C12.949 2.002 12.478 2 11.75 2s-1.2.002-1.546.048c-.325.044-.427.115-.484.172s-.128.159-.172.484c-.046.347-.048.818-.048 1.546V20.5z" fill="#f97316" fill-rule="evenodd"></path><path d="M8 8.75A.75.75 0 0 0 7.25 8h-3a.75.75 0 0 0-.75.75V20.5H8zm12 5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v6.75H20z" fill="#f97316" opacity=".7"></path><path d="M1.75 20.5a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5z" fill="#f97316" opacity=".5"></path></svg>
<span className="text-xs font-semibold uppercase tracking-widest text-orange-200 font-sans">Network Statistics</span>
</div>
<h2 className="md:text-7xl text-4xl sm:text-5xl font-medium text-white tracking-tighter font-manrope mb-5 md:mb-6">
      Reliability at scale,
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-500">measured</span>
</h2>
<p className="text-lg sm:text-xl text-gray-400 font-sans max-w-2xl leading-relaxed">
      Transparent metrics that reflect real-world uptime, performance, and the teams building on Nebula every day.
    </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">

<div className="lg:col-span-5">
<div className="group rounded-[2.5rem] bg-zinc-900/40 backdrop-blur-sm pt-8 pr-6 pb-8 pl-6 sm:pt-10 sm:pr-10 sm:pb-10 sm:pl-10 relative overflow-hidden" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0), rgba(255,255,255,0.1))', -BorderRadiusBefore: '2.5rem'}}>
<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-white/0 via-white/10 to-white/0"></div>
<div className="absolute -top-20 -right-24 w-72 h-72 rounded-full bg-orange-500/10 blur-[80px] pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-6">
<svg aria-hidden="true" data-icon="solar:stars-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15.252 10.689c-.987-1.18-1.48-1.77-2.048-1.68c-.567.091-.832.803-1.362 2.227l-.138.368c-.15.405-.226.607-.373.756c-.146.149-.348.228-.75.386l-.367.143c-1.417.555-2.126.833-2.207 1.4s.52 1.049 1.721 2.011l.31.25c.342.273.513.41.611.597c.1.187.115.404.146.837l.029.394c.11 1.523.166 2.285.683 2.545s1.154-.155 2.427-.983l.329-.215c.362-.235.543-.353.75-.387c.208-.033.42.022.841.132l.385.1c1.485.386 2.228.58 2.629.173s.193-1.144-.221-2.62l-.108-.38c-.117-.42-.176-.63-.147-.837c.03-.208.145-.39.374-.756l.21-.332c.807-1.285 1.21-1.927.94-2.438c-.269-.511-1.033-.553-2.562-.635l-.396-.022c-.434-.023-.652-.035-.841-.13c-.19-.095-.33-.263-.61-.599z" fill="currentColor"></path><path d="M10.331 4.252c1.316-1.574 1.974-2.361 2.73-2.24s1.11 1.07 1.817 2.969l.183.491c.201.54.302.81.497 1.008c.196.199.464.304 1.001.514l.489.192c1.89.74 2.835 1.11 2.942 1.866c.108.757-.693 1.398-2.294 2.682l-.414.332c-.455.365-.683.547-.815.797s-.152.538-.194 1.115l-.038.526c-.148 2.031-.222 3.047-.911 3.393c-.69.347-1.538-.206-3.236-1.311l-.439-.286c-.482-.314-.723-.47-1-.515s-.558.028-1.121.175l-.513.133c-1.98.516-2.971.773-3.505.231s-.258-1.526.295-3.492l.142-.509c.157-.559.236-.838.197-1.115c-.04-.277-.193-.52-.499-1.008l-.278-.443C4.29 8.044 3.752 7.187 4.11 6.507c.36-.682 1.379-.737 3.418-.848l.527-.028c.58-.031.869-.047 1.122-.174c.252-.127.439-.35.813-.798z" fill="currentColor" opacity=".5"></path></svg>
<p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 font-sans">Design at scale, simplified</p>
</div>
<h3 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white font-manrope leading-[1.1] mb-5">
            Metrics you can
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-200 to-orange-500">ship with</span>
</h3>
<p className="text-lg sm:text-xl text-zinc-400 leading-relaxed font-sans max-w-md">
            We publish product-level performance numbers so teams can set confident SLOs and plan capacity without guessing.
          </p>
<div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-2xl bg-zinc-950/40 border border-white/5 pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center gap-2 mb-2">
<svg aria-hidden="true" data-icon="solar:shield-check-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.378 5.082C3 5.62 3 7.22 3 10.417v1.574c0 5.638 4.239 8.375 6.899 9.536c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473C16.761 20.365 21 17.63 21 11.991v-1.574c0-3.198 0-4.797-.378-5.335c-.377-.537-1.88-1.052-4.887-2.081l-.573-.196C13.595 2.268 12.812 2 12 2s-1.595.268-3.162.805L8.265 3c-3.007 1.03-4.51 1.545-4.887 2.082" fill="currentColor" opacity=".5"></path><path d="M15.06 10.5a.75.75 0 0 0-1.12-1l-3.011 3.374l-.87-.974a.75.75 0 0 0-1.118 1l1.428 1.6a.75.75 0 0 0 1.119 0z" fill="currentColor"></path></svg>
<span className="text-xs font-medium text-zinc-300 font-sans">SLA-backed</span>
</div>
<p className="text-sm text-zinc-500 font-sans leading-relaxed">Defined targets for latency, throughput, and availability.</p>
</div>
<div className="rounded-2xl bg-zinc-950/40 border border-white/5 pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center gap-2 mb-2">
<svg aria-hidden="true" data-icon="solar:bolt-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M8.732 5.771L5.67 9.914c-1.285 1.739-1.928 2.608-1.574 3.291l.018.034c.375.673 1.485.673 3.704.673c1.233 0 1.85 0 2.236.363l.02.02l3.872-4.57l-.02-.02c-.379-.371-.379-.963-.379-2.148v-.31c0-3.285 0-4.927-.923-5.21s-1.913 1.056-3.892 3.734" fill="currentColor" fill-rule="evenodd"></path><path d="M10.453 16.443v.31c0 3.284 0 4.927.923 5.21s1.913-1.056 3.893-3.734l3.062-4.143c1.284-1.739 1.927-2.608 1.573-3.291l-.018-.034c-.375-.673-1.485-.673-3.704-.673c-1.233 0-1.85 0-2.236-.363l-3.872 4.57c.379.371.379.963.379 2.148" fill="currentColor" opacity=".5"></path></svg>
<span className="text-xs font-medium text-zinc-300 font-sans">Edge-first</span>
</div>
<p className="text-sm text-zinc-500 font-sans leading-relaxed">Optimized paths for reads, writes, and event streams.</p>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="rounded-[2.5rem] bg-zinc-100 border border-white/10 overflow-hidden shadow-2xl">
<div className="grid grid-cols-1 divide-y divide-zinc-200">

<div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-8 pr-6 pb-8 pl-6 sm:pt-10 sm:pr-10 sm:pb-10 sm:pl-10 items-start">
<div className="md:col-span-4">
<div className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tighter text-zinc-900 font-geist">18K<span className="text-zinc-900">+</span></div>
</div>
<div className="md:col-span-8">
<div className="flex items-center gap-2 mb-2">
<svg aria-hidden="true" className="text-neutral-950 w-[16px] h-[16px]" data-icon="solar:users-group-rounded-bold-duotone" data-icon-replaced="true" height="1em" role="img" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="6" fill="currentColor" opacity=".4" r="3"></circle><ellipse cx="16" cy="17" fill="currentColor" opacity=".4" rx="5" ry="3"></ellipse><circle cx="9.001" cy="6" fill="currentColor" r="4"></circle><ellipse cx="9.001" cy="17.001" fill="currentColor" rx="7" ry="4"></ellipse></svg>
<h4 className="text-lg sm:text-xl font-semibold tracking-tight text-zinc-900 font-manrope">Active projects per month</h4>
</div>
<p className="text-sm sm:text-base text-zinc-600 font-sans leading-relaxed">
                Teams that ship with Nebula across testnets and mainnets—measured by signed requests.
              </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-8 pr-6 pb-8 pl-6 sm:pt-10 sm:pr-10 sm:pb-10 sm:pl-10 items-start">
<div className="md:col-span-4">
<div className="sm:text-6xl md:text-7xl text-5xl font-semibold text-zinc-900 tracking-tighter font-geist">6,900</div>
</div>
<div className="md:col-span-8">
<div className="flex items-center gap-2 mb-2">
<svg aria-hidden="true" className="w-[16px] h-[16px] text-neutral-950" data-icon="solar:widget-bold-duotone" data-icon-replaced="true" height="1em" role="img" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 6.5c0-2.121 0-3.182.659-3.841S4.379 2 6.5 2s3.182 0 3.841.659S11 4.379 11 6.5s0 3.182-.659 3.841S8.621 11 6.5 11s-3.182 0-3.841-.659S2 8.621 2 6.5m11 11c0-2.121 0-3.182.659-3.841S15.379 13 17.5 13s3.182 0 3.841.659S22 15.379 22 17.5s0 3.182-.659 3.841S19.621 22 17.5 22s-3.182 0-3.841-.659S13 19.621 13 17.5" fill="currentColor" opacity=".5"></path><path d="M2 17.5c0-2.121 0-3.182.659-3.841S4.379 13 6.5 13s3.182 0 3.841.659S11 15.379 11 17.5s0 3.182-.659 3.841S8.621 22 6.5 22s-3.182 0-3.841-.659S2 19.621 2 17.5m11-11c0-2.121 0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11s-3.182 0-3.841-.659S13 8.621 13 6.5" fill="currentColor"></path></svg>
<h4 className="text-lg sm:text-xl font-semibold tracking-tight text-zinc-900 font-manrope">Templates deployed</h4>
</div>
<p className="text-sm sm:text-base text-zinc-600 font-sans leading-relaxed">
                Production-ready stacks shared across teams to standardize rollups, indexers, and APIs.
              </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-8 pr-6 pb-8 pl-6 sm:pt-10 sm:pr-10 sm:pb-10 sm:pl-10 items-start">
<div className="md:col-span-4">
<div className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tighter text-zinc-900 font-geist">99.3<span className="text-zinc-900">%</span></div>
</div>
<div className="md:col-span-8">
<div className="flex items-center gap-2 mb-2">
<svg aria-hidden="true" className="w-[16px] h-[16px] text-neutral-950" data-icon="solar:smile-circle-bold-duotone" data-icon-replaced="true" height="1em" role="img" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" fill="currentColor" opacity=".5"></path><path d="M8.397 15.553a.75.75 0 0 1 1.05-.155c.728.54 1.607.852 2.553.852s1.825-.313 2.553-.852a.75.75 0 1 1 .894 1.204A5.77 5.77 0 0 1 12 17.75a5.77 5.77 0 0 1-3.447-1.148a.75.75 0 0 1-.156-1.049M15 12c.552 0 1-.672 1-1.5S15.552 9 15 9s-1 .672-1 1.5s.448 1.5 1 1.5m-6 0c.552 0 1-.672 1-1.5S9.552 9 9 9s-1 .672-1 1.5s.448 1.5 1 1.5" fill="currentColor"></path></svg>
<h4 className="text-lg sm:text-xl font-semibold tracking-tight text-zinc-900 font-manrope">Session success rate</h4>
</div>
<p className="text-sm sm:text-base text-zinc-600 font-sans leading-relaxed">
                Completed requests without retries across the edge—tracked over rolling 30 days.
              </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-8 pr-6 pb-8 pl-6 sm:pt-10 sm:pr-10 sm:pb-10 sm:pl-10 items-start">
<div className="md:col-span-4">
<div className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tighter text-zinc-900 font-geist">0.9<span className="text-zinc-900">s</span></div>
</div>
<div className="md:col-span-8">
<div className="flex gap-2 mb-2 gap-x-2 gap-y-2 items-center">
<svg aria-hidden="true" className="w-[16px] h-[16px] text-neutral-950" data-icon="solar:stopwatch-bold-duotone" data-icon-replaced="true" height="1em" role="img" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 23a9 9 0 1 0 0-18a9 9 0 0 0 0 18" fill="currentColor" opacity=".5"></path><path d="M12 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75" fill="currentColor"></path><path clip-rule="evenodd" d="M9.25 2.75A.75.75 0 0 1 10 2h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd"></path></svg>
<h4 className="text-lg sm:text-xl font-semibold tracking-tight text-zinc-900 font-manrope">Median dashboard load time</h4>
</div>
<p className="text-sm sm:text-base text-zinc-600 font-sans leading-relaxed">
                Fast, stable UX for operators—measured from first paint to usable state on warm cache.
              </p>
</div>
</div>
</div>

<div className="bg-zinc-50 border-t border-zinc-200 pt-5 pr-6 pb-5 pl-6 sm:pt-6 sm:pr-10 sm:pb-6 sm:pl-10">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="w-[16px] h-[16px] text-neutral-950" data-icon="solar:info-circle-bold-duotone" data-icon-replaced="true" height="1em" role="img" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M12 17.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75M12 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2" fill="currentColor"></path></svg>
<p className="text-sm text-zinc-600 font-sans">
                Metrics updated every 24 hours · excludes abuse and synthetic traffic.
              </p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-800 hover:text-zinc-950 transition-colors font-sans" href="#">
              View methodology
              <svg aria-hidden="true" data-icon="solar:arrow-right-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.25 12a.75.75 0 0 1 .75-.75h9.25v1.5H4a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53z" fill="currentColor"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</section><section className="w-full max-w-7xl mx-auto px-6 mb-32 relative z-20 mt-32">
<div className="grid lg:grid-cols-12 gap-16 items-start">

<div className="lg:col-span-5 pt-4">
<h2 className="text-5xl md:text-6xl font-medium text-white tracking-tighter font-manrope mb-6 leading-[1.1]">
                Ready to personalize your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">chain?</span>
</h2>
<p className="text-lg text-zinc-400 font-sans leading-relaxed max-w-md">
                Our service is for protocols that believe in owning a safe, scalable, and decentralized blockspace. We promise that scaling with Nebula will help you declutter your mempool.
            </p>
</div>

<div className="lg:col-span-7">
<form className="space-y-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
<div className="group relative">
<input className="peer w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-transparent focus:border-orange-500 focus:outline-none transition-colors font-sans text-lg" id="name" placeholder="Name" required="" type="text"/>
<label className="absolute left-0 -top-5 text-xs text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-orange-500 font-sans uppercase tracking-wider font-medium" htmlFor="name">Name</label>
</div>
<div className="group relative">
<input className="peer w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-transparent focus:border-orange-500 focus:outline-none transition-colors font-sans text-lg" id="email" placeholder="Email" required="" type="email"/>
<label className="absolute left-0 -top-5 text-xs text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-orange-500 font-sans uppercase tracking-wider font-medium" htmlFor="email">Email</label>
</div>
</div>
<div className="group relative">
<input className="peer w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-transparent focus:border-orange-500 focus:outline-none transition-colors font-sans text-lg" id="project" placeholder="Project Name" type="text"/>
<label className="absolute left-0 -top-5 text-xs text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-orange-500 font-sans uppercase tracking-wider font-medium" htmlFor="project">Project / Protocol ID</label>
</div>
<div className="group relative">
<textarea className="peer w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-transparent focus:border-orange-500 focus:outline-none transition-colors font-sans text-lg resize-none" id="message" placeholder="Anything we should know?" rows="1"></textarea>
<label className="absolute left-0 -top-5 text-xs text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-orange-500 font-sans uppercase tracking-wider font-medium" htmlFor="message">Anything we should know?</label>
</div>
<div className="flex justify-end pt-8">
<button className="group flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold tracking-widest uppercase text-xs hover:bg-zinc-200 transition-all duration-300 font-manrope" type="button">
                        Submit Request
                        <svg aria-hidden="true" data-icon="solar:arrow-right-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.25 12a.75.75 0 0 1 .75-.75h9.25v1.5H4a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53z" fill="currentColor"></path></svg>
</button>
</div>
</form>
</div>
</div>
</section><footer className="relative w-full bg-zinc-900/30 pt-24 pb-8 border-t border-white/5 backdrop-blur-sm z-20">
<div className="w-full max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-16 mb-24">

<div className="lg:col-span-5 flex flex-col">

<div className="grid grid-cols-3 gap-3 w-fit mb-10 opacity-90 hover:opacity-100 transition-opacity duration-500">
<div className="w-3 h-3 bg-orange-500 transform rotate-45"></div>
<div className="w-3 h-3 bg-zinc-700 transform rotate-45"></div>
<div className="w-3 h-3 bg-zinc-800 transform rotate-45"></div>
<div className="w-3 h-3 bg-zinc-700 transform rotate-45"></div>
<div className="w-3 h-3 bg-white transform rotate-45 shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>
<div className="w-3 h-3 bg-zinc-700 transform rotate-45"></div>
<div className="w-3 h-3 bg-zinc-800 transform rotate-45"></div>
<div className="w-3 h-3 bg-zinc-700 transform rotate-45"></div>
<div className="w-3 h-3 bg-orange-500/50 transform rotate-45"></div>
</div>
<h3 className="text-5xl font-medium text-white tracking-tighter font-manrope mb-4">Nebula<span className="text-zinc-600">Now</span></h3>
<p className="text-zinc-500 text-sm font-sans max-w-xs">
                    The unified infrastructure layer for the decentralized web.
                </p>
</div>

<div className="lg:col-span-7">
<div className="grid grid-cols-2 md:grid-cols-3 gap-10">
<div className="flex flex-col gap-8">
<h4 className="text-base font-medium text-white font-manrope">About Us</h4>
<div className="flex flex-col gap-4">
<a className="text-zinc-400 hover:text-white transition-colors text-sm font-sans" href="#">Mission</a>
<a className="text-zinc-400 hover:text-white transition-colors text-sm font-sans" href="#">Team</a>
<a className="text-zinc-400 hover:text-white transition-colors text-sm font-sans" href="#">Newsletter</a>
<a className="text-zinc-400 hover:text-white transition-colors text-sm font-sans" href="#">Careers</a>
</div>
</div>
<div className="flex flex-col gap-8">
<h4 className="text-base font-medium text-white font-manrope">Support</h4>
<div className="flex flex-col gap-4">
<a className="text-zinc-400 hover:text-white transition-colors text-sm font-sans" href="#">Contact</a>
<a className="text-zinc-400 hover:text-white transition-colors text-sm font-sans" href="#">Refund Policy</a>
<a className="text-zinc-400 hover:text-white transition-colors text-sm font-sans" href="#">FAQ's</a>
<a className="text-zinc-400 hover:text-white transition-colors text-sm font-sans" href="#">Status</a>
</div>
</div>
<div className="flex flex-col gap-8">
<h4 className="text-base font-medium text-white font-manrope">Social</h4>
<div className="flex flex-col gap-4">
<a className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors text-sm font-sans" href="#">
<svg aria-hidden="true" data-icon="simple-icons:instagram" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7.03.084c-1.277.06-2.149.264-2.91.563a5.9 5.9 0 0 0-2.124 1.388a5.9 5.9 0 0 0-1.38 2.127C.321 4.926.12 5.8.064 7.076s-.069 1.688-.063 4.947s.021 3.667.083 4.947c.061 1.277.264 2.149.563 2.911c.308.789.72 1.457 1.388 2.123a5.9 5.9 0 0 0 2.129 1.38c.763.295 1.636.496 2.913.552c1.278.056 1.689.069 4.947.063s3.668-.021 4.947-.082c1.28-.06 2.147-.265 2.91-.563a5.9 5.9 0 0 0 2.123-1.388a5.9 5.9 0 0 0 1.38-2.129c.295-.763.496-1.636.551-2.912c.056-1.28.07-1.69.063-4.948c-.006-3.258-.02-3.667-.081-4.947c-.06-1.28-.264-2.148-.564-2.911a5.9 5.9 0 0 0-1.387-2.123a5.9 5.9 0 0 0-2.128-1.38c-.764-.294-1.636-.496-2.914-.55C15.647.009 15.236-.006 11.977 0S8.31.021 7.03.084m.14 21.693c-1.17-.05-1.805-.245-2.228-.408a3.7 3.7 0 0 1-1.382-.895a3.7 3.7 0 0 1-.9-1.378c-.165-.423-.363-1.058-.417-2.228c-.06-1.264-.072-1.644-.08-4.848c-.006-3.204.006-3.583.061-4.848c.05-1.169.246-1.805.408-2.228c.216-.561.477-.96.895-1.382a3.7 3.7 0 0 1 1.379-.9c.423-.165 1.057-.361 2.227-.417c1.265-.06 1.644-.072 4.848-.08c3.203-.006 3.583.006 4.85.062c1.168.05 1.804.244 2.227.408c.56.216.96.475 1.382.895s.681.817.9 1.378c.165.422.362 1.056.417 2.227c.06 1.265.074 1.645.08 4.848c.005 3.203-.006 3.583-.061 4.848c-.051 1.17-.245 1.805-.408 2.23c-.216.56-.477.96-.896 1.38a3.7 3.7 0 0 1-1.378.9c-.422.165-1.058.362-2.226.418c-1.266.06-1.645.072-4.85.079s-3.582-.006-4.848-.06m9.783-16.192a1.44 1.44 0 1 0 1.437-1.442a1.44 1.44 0 0 0-1.437 1.442M5.839 12.012a6.161 6.161 0 1 0 12.323-.024a6.162 6.162 0 0 0-12.323.024M8 12.008A4 4 0 1 1 12.008 16A4 4 0 0 1 8 12.008" fill="currentColor"></path></svg>
                                Instagram
                            </a>
<a className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors text-sm font-sans" href="#">
<svg aria-hidden="true" data-icon="simple-icons:linkedin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.06 2.06 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065m1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" fill="currentColor"></path></svg>
                                LinkedIn
                            </a>
<a className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors text-sm font-sans" href="#">
<svg aria-hidden="true" data-icon="simple-icons:youtube" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.02 3.02 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.02 3.02 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.02 3.02 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.02 3.02 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814M9.545 15.568V8.432L15.818 12z" fill="currentColor"></path></svg>
                                YouTube
                            </a>
<a className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors text-sm font-sans" href="#">
<svg aria-hidden="true" data-icon="simple-icons:x" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14.234 10.162L22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299l-.929-1.329L3.076 1.56h3.182l5.965 8.532l.929 1.329l7.754 11.09h-3.182z" fill="currentColor"></path></svg>
                                Twitter
                            </a>
</div>
</div>
</div>
</div>
</div>

<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
<p className="text-xs text-zinc-500 font-sans">Copyright © NebulaNow</p>
<div className="flex items-center gap-10">
<a className="text-xs text-zinc-500 hover:text-white transition-colors font-sans" href="#">Terms of Service</a>
<button className="group flex items-center gap-3 text-xs text-zinc-500 hover:text-white transition-colors font-sans uppercase tracking-wider" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
                    Back to top
                    <div className="w-6 h-6 rounded border border-zinc-800 flex items-center justify-center group-hover:border-zinc-600 group-hover:bg-zinc-800 transition-all">
<svg aria-hidden="true" data-icon="solar:arrow-up-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M12 20.75a.75.75 0 0 0 .75-.75v-9.25h-1.5V20c0 .414.336.75.75.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M6 10.75a.75.75 0 0 1-.53-1.28l6-6a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1-.53 1.28z" fill="currentColor"></path></svg>
</div>
</button>
</div>
</div>
</div>
</footer>


    </>
  );
}
