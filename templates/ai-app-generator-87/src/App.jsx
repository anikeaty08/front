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
      

<nav className="bg-[#000000] w-full border-transparent border-b mb-0">
<div className="flex max-w-7xl mr-auto ml-auto pt-5 pr-6 pb-5 pl-6 items-center justify-between">

<div className="flex cursor-pointer gap-x-2 gap-y-2 items-center">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-slate-900 text-white">
<svg className="lucide lucide-sparkles w-5 h-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
</div>
<span className="text-xl font-semibold text-stone-50 tracking-tight font-dm-sans">ideatr</span>
</div>

<div className="hidden md:flex gap-8 gap-x-8 gap-y-8 items-center">
<a className="transition-colors text-base font-medium text-slate-500 tracking-tight font-dm-sans hover:text-slate-50" href="#" style={{}}>Generator</a>
<a className="transition-colors text-base font-medium text-slate-500 tracking-tight font-dm-sans hover:text-slate-50" href="#" style={{}}>Examples</a>
<a className="transition-colors text-base font-medium text-slate-500 tracking-tight font-dm-sans hover:text-slate-50" href="#" style={{}}>Docs</a>
<a className="transition-colors text-base font-medium text-slate-500 tracking-tight font-dm-sans hover:text-slate-50" href="#" style={{}}>Pricing</a>
<a className="transition-colors text-base font-medium text-slate-500 tracking-tight font-dm-sans hover:text-slate-50" href="#" style={{}}>Enterprise</a>
</div>

<div className="flex gap-4 items-center">
<a className="hidden transition-colors sm:block text-sm font-medium bg-[#ffffff] border rounded-md px-3 py-2 font-dm-sans tracking-tight hover:text-slate-600 text-slate-900 border-stone-200" href="#" style={{}}>Login</a>
<a className="hover:bg-[#033476] transition-colors text-sm font-medium text-white tracking-tight font-dm-sans bg-[#004BB0] rounded-md pt-2.5 pr-5 pb-2.5 pl-5 shadow-sm" href="#">Start building</a>
</div>
</div>
</nav>

<main className="bg-center lg:pt-48 lg:pb-48 w-full max-w-none mr-auto ml-auto pt-0 pr-6 pb-32 pl-6 relative">
<div className="absolute top-0 right-0 bottom-0 left-0" data-container-bg="true">
<div data-us-project="uqHUvjTHjyjtZrPkZQqa">
<a className="" href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank"><img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/></a>
</div>
</div>
<div className="grid lg:grid-cols-2 max-w-7xl mr-auto ml-auto items-center">

<div className="max-w-xl z-10">
<p className="uppercase text-xs font-semibold tracking-tight font-dm-sans mb-6 text-stone-300">AI-Powered Full-Stack Generation</p>
<h1 className="sm:text-7xl text-6xl font-light text-stone-50 tracking-tight font-instrument-serif mb-8">
<span className="block">Describe it in English.</span>
<span className="block">We code the rest.</span>
</h1>
<p className="leading-relaxed text-lg tracking-tight font-dm-sans max-w-lg mb-10 text-stone-50">
        Enter your idea in plain English. ideatr generates production-ready Frontend, Backend, and Database instantly. Build and grow apps at the speed of thought.
      </p>
<div className="flex sm:flex-row w-full gap-x-2 gap-y-4">
<input className="placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#6B21A8]/20 focus:border-[#6B21A8] transition-all text-base text-slate-900 tracking-tight font-dm-sans bg-white border-slate-200 border rounded-md pt-2 pr-0 pb-2 pl-4 shadow-sm w-full" placeholder="Describe your dream app..." type="text"/>
<div className="cta-buttons-container flex flex-col sm:flex-row gap-4 rounded-md gap-x-4 gap-y-4 items-center justify-center">
<style className="">
    .codepen-button {
      display: block;
      cursor: pointer;
      color: #fff;
      position: relative;
      text-decoration: none;
      font-weight: 600;
      overflow: hidden;
      padding: 2px;
      isolation: isolate
    }

    .codepen-button::before {
      content: "";
      position: absolute;
      inset: 0;
      width: 400%;
      height: 100%;
      background: #004BB0;
      background-size: 25% 100%;
      animation: border-shift .75s linear infinite
    }

    @keyframes border-shift {
      to {
        transform: translateX(-25%)
      }
    }

    .codepen-button span {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 1rem 1rem;
      font-size: 1.1rem;
      background: #004BB0;
      height: 100%
    }
  </style>
<div className="inline-block rounded-md">
<a className="codepen-button rounded-md" href="#">
<div className="" style={{position: 'absolute', inset: '0', width: '400%', height: '100%', background: 'linear-gradient(115deg,#8b5cf6,#4c1d95,#a855f7)', backgroundSize: '25% 100%', animation: 'border-shift .75s linear infinite'}}>
</div>
<span className="inline-flex items-center transition-all duration-300 group hover:text-white hover:bg-white/10 hover:border-white/30 text-base font-light text-slate-300 tracking-tight font-dm-sans bg-[#004BB0] border-white/20 border rounded pt-3 pr-3 pb-3 pl-3">
        Generate App
        <svg className="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path className="" d="M7 17 17 7"></path>
</svg>
</span>
</a>
</div>
</div>
</div>
</div>

<div className="mt-8 sm:mt-0 relative perspective-1000">
<img alt="Product UI" className="w-full h-auto block" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4aa0ba0f-cf6d-4050-bf33-824539eb56e0_1600w.png"/>
</div>
</div>
<div className="spline-container absolute top-0 left-0 w-full h-full -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/retrofuturismbganimation-Lb3VtL1bNaYUnirKNzn0FvaW" width="100%"></iframe></div>
</main>

<section className="bg-black">
<div className="max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6">
<p className="uppercase text-xs font-medium tracking-tight font-dm-sans text-center mb-10 text-stone-300">
      Powering the next generation of startups</p>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border border-stone-700">

<div className="flex hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer opacity-60 h-24 border-r border-b pt-6 pr-6 pb-6 pl-6 grayscale items-center justify-center border-stone-700">
<div className="flex items-center gap-2 font-bold text-lg">
<svg className="lucide lucide-hexagon w-[20px] h-[20px] fill-black text-stone-50" data-icon-replaced="true" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
<span className="tracking-tight font-dm-sans text-stone-50">Acme</span>
</div>
</div>

<div className="flex hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer opacity-60 h-24 border-r border-b pt-6 pr-6 pb-6 pl-6 grayscale items-center justify-center border-stone-700">
<div className="flex items-center gap-2 font-bold text-lg font-mono">
<svg className="lucide lucide-terminal w-[20px] h-[20px] text-stone-50" data-icon-replaced="true" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h8"></path><path d="m4 17 6-6-6-6"></path></svg>
<span className="tracking-tight font-dm-sans text-stone-50">Hyper</span>
</div>
</div>

<div className="flex hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer opacity-60 h-24 border-r border-b pt-6 pr-6 pb-6 pl-6 grayscale items-center justify-center border-stone-700">
<div className="flex items-center gap-1 font-semibold text-lg italic">
<svg className="lucide lucide-wind w-[20px] h-[20px] text-stone-50" data-icon-replaced="true" data-lucide="wind" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"></path><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></path><path d="M9.8 4.4A2 2 0 1 1 11 8H2"></path></svg>
<span className="tracking-tight font-dm-sans text-stone-50">Gust</span>
</div>
</div>

<div className="flex hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer opacity-60 h-24 border-r border-b pt-6 pr-6 pb-6 pl-6 grayscale items-center justify-center border-stone-700">
<div className="flex items-center gap-2 font-bold text-lg">
<svg className="lucide lucide-box w-[20px] h-[20px] text-stone-50" data-icon-replaced="true" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
<span className="tracking-tight font-dm-sans text-stone-50">Pack</span>
</div>
</div>

<div className="flex hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer opacity-60 h-24 border-r border-b pt-6 pr-6 pb-6 pl-6 grayscale items-center justify-center border-stone-700">
<div className="flex gap-2 text-lg font-bold gap-x-2 gap-y-2 items-center">
<svg className="lucide lucide-infinity w-[20px] h-[20px] text-stone-50" data-icon-replaced="true" data-lucide="infinity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"></path></svg>
<span className="tracking-tight font-dm-sans text-stone-50">Loop</span>
</div>
</div>

<div className="flex hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer opacity-60 h-24 border-r border-b pt-6 pr-6 pb-6 pl-6 grayscale items-center justify-center border-stone-700">
<div className="flex items-center gap-2 font-bold text-lg serif">
<svg className="lucide lucide-anchor w-[20px] h-[20px] text-stone-50" data-icon-replaced="true" data-lucide="anchor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v16"></path><path d="m19 13 2-1a9 9 0 0 1-18 0l2 1"></path><path d="M9 11h6"></path><circle cx="12" cy="4" r="2"></circle></svg>
<span className="tracking-tight font-dm-sans text-stone-50">Port</span>
</div>
</div>

<div className="flex hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer opacity-60 h-24 border-r border-b pt-6 pr-6 pb-6 pl-6 grayscale items-center justify-center border-stone-700">
<div className="flex items-center gap-2 font-bold text-lg">
<svg className="lucide lucide-mountain w-[20px] h-[20px] text-stone-50" data-icon-replaced="true" data-lucide="mountain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg>
<span className="tracking-tight font-dm-sans text-stone-50">Peak</span>
</div>
</div>

<div className="flex hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer opacity-60 h-24 border-r border-b pt-6 pr-6 pb-6 pl-6 grayscale items-center justify-center border-stone-700">
<div className="flex items-center gap-2 font-bold text-lg">
<svg className="lucide lucide-triangle w-[20px] h-[20px] fill-black text-stone-50" data-icon-replaced="true" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg>
<span className="tracking-tight font-dm-sans text-stone-50">Delta</span>
</div>
</div>

<div className="flex hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer opacity-60 h-24 border-r border-b pt-6 pr-6 pb-6 pl-6 grayscale items-center justify-center border-stone-700">
<div className="flex items-center gap-2 font-bold text-lg">
<svg className="lucide lucide-droplet w-[20px] h-[20px] text-stone-50" data-icon-replaced="true" data-lucide="droplet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
<span className="tracking-tight font-dm-sans text-stone-50">Pure</span>
</div>
</div>

<div className="flex hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer opacity-60 h-24 border-r border-b pt-6 pr-6 pb-6 pl-6 grayscale items-center justify-center border-stone-700">
<div className="flex items-center gap-2 font-bold text-lg">
<svg className="lucide lucide-cpu w-[20px] h-[20px] text-stone-50" data-icon-replaced="true" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span className="tracking-tight font-dm-sans text-stone-50">Core</span>
</div>
</div>

<div className="flex hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer opacity-60 h-24 border-r border-b pt-6 pr-6 pb-6 pl-6 grayscale items-center justify-center border-stone-700">
<div className="flex items-center gap-2 font-bold text-lg">
<svg className="lucide lucide-globe w-[20px] h-[20px] text-stone-50" data-icon-replaced="true" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span className="tracking-tight font-dm-sans text-stone-50">Orbit</span>
</div>
</div>

<div className="flex hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer opacity-60 h-24 border-r border-b pt-6 pr-6 pb-6 pl-6 grayscale items-center justify-center border-stone-700">
<div className="flex items-center gap-2 font-bold text-lg">
<svg className="lucide lucide-layers w-[20px] h-[20px] text-stone-50" data-icon-replaced="true" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<span className="tracking-tight font-dm-sans text-stone-50">Stack</span>
</div>
</div>
</div>
</div>
</section><div className="pointer-events-none z-0 opacity-10 h-32 right-0 bottom-0 left-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, rgb(0, 0, 0) 0px, rgb(0, 0, 0) 1px, transparent 0px, transparent 50%)', backgroundSize: '10px 10px'}}>
</div><section className="bg-[#F9F8F6] border-t pt-24 pr-6 pb-24 pl-6 border-slate-100">
<div className="max-w-7xl mr-auto ml-auto">
<div className="max-w-2xl mb-16" style={{}}>
<h2 className="text-4xl md:text-5xl tracking-tight mb-6 font-instrument-serif font-light text-slate-900" style={{}}>From text prompt to deployed app.</h2>
</div>
<div className="overflow-hidden grid grid-cols-1 lg:grid-cols-2 border rounded-lg shadow-sm bg-white border-slate-200">

<div className="md:p-12 lg:borderh-[500px] flex flex-col border-b pt-8 pr-8 pb-8 pl-8 justify-between">
<div className="z-10 relative">
<h3 className="text-2xl font-light text-slate-900 tracking-tight font-instrument-serif mb-4">Plain English to Code</h3>
<p className="leading-relaxed text-base text-slate-500 tracking-tight font-dm-sans max-w-sm mb-6" style={{}}>Stop writing boilerplate. Just describe your logic, data models, and UI requirements. ideatr handles the syntax.</p>
<a className="inline-flex items-center text-sm font-medium hover:text-[#6B21A8] transition-colors group font-dm-sans tracking-tight text-slate-900" href="#" style={{}}>
            See generation demo <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
</a>
</div>

<div className="flex flex-col border rounded-md pt-5 pr-6 pb-5 pl-6 shadow bg-white border-stone-200">
<div className="flex items-center justify-between mb-4">
<div className="">
<h2 className="text-xl sm:text-[22px] tracking-tight font-instrument-serif font-light text-slate-900" style={{}}>Prompt Editor</h2>
<p className="text-xs text-slate-500 mt-1 font-dm-sans tracking-tight" style={{}}>describing e-commerce platform...</p>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-medium transition bg-slate-900 text-white hover:bg-slate-800">
<span className="font-dm-sans tracking-tight" style={{}}>Refine</span>
<svg className="lucide lucide-sparkles w-3.5 h-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
</button>
</div>
<div className="mt-2 space-y-3">

<div className="flex items-center gap-3">
<div className="w-16 text-[11px] text-slate-500 font-dm-sans tracking-tight" style={{}}>Frontend</div>
<div className="flex-1">
<div className="h-2 rounded-full overflow-hidden bg-slate-100">
<div className="h-full w-full bg-slate-900"></div>
</div>
</div>
<div className="flex items-center gap-2 text-[11px] text-slate-600">
<span className="font-medium font-dm-sans tracking-tight" style={{}}>100%</span>
<div className="flex -space-x-2">
<svg className="w-5 h-5 p-1 bg-white rounded-full border border-slate-200" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
</div>
</div>
</div>

<div className="flex items-center gap-3">
<div className="w-16 text-[11px] text-slate-500 font-dm-sans tracking-tight" style={{}}>Backend</div>
<div className="flex-1">
<div className="h-2 rounded-full overflow-hidden bg-slate-100">
<div className="h-full w-[59%] bg-slate-900"></div>
</div>
</div>
<div className="flex items-center gap-2 text-[11px] text-slate-600">
<span className="font-medium font-dm-sans tracking-tight" style={{}}>59%</span>
<div className="flex -space-x-2">
<svg className="w-5 h-5 p-1 bg-white rounded-full border border-slate-200" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
</div>
</div>
</div>

<div className="flex items-center gap-3">
<div className="w-16 text-[11px] text-slate-500 font-dm-sans tracking-tight" style={{}}>Database</div>
<div className="flex-1">
<div className="h-2 rounded-full overflow-hidden bg-slate-100">
<div className="w-[75%] h-full bg-fuchsia-700"></div>
</div>
</div>
<div className="flex items-center gap-2 text-[11px] text-slate-600">
<span className="font-medium font-dm-sans tracking-tight" style={{}}>75%</span>
<div className="flex -space-x-2">
<svg className="w-5 h-5 p-1 bg-white rounded-full border border-slate-200" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
</div>
</div>
</div>
<div className="mt-4 border-t pt-3 border-slate-100">
<div className="flex items-center justify-between text-[11px] text-slate-500">
<div className="flex items-center gap-4">
<span className="font-dm-sans tracking-tight" style={{}}>Schema</span>
<span className="font-dm-sans tracking-tight" style={{}}>API</span>
<span className="font-dm-sans tracking-tight" style={{}}>UI/UX</span>
<span className="font-medium font-dm-sans tracking-tight text-slate-900" style={{}}>Deploy</span>
<span className="font-dm-sans tracking-tight" style={{}}>Scale</span>
</div>
<div className="inline-flex items-center gap-1 rounded-full px-2 py-1 bg-slate-900/5">
<span className="h-1.5 w-1.5 rounded-full bg-fuchsia-700"></span>
<span className="text-[10px] font-dm-sans tracking-tight text-slate-800" style={{}}>Generating</span>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col">

<div className="p-8 md:p-12 border-b flex-1 flex flex-col justify-center transition-colors cursor-default border-slate-100 bg-white hover:bg-slate-50">
<div className="flex bg-[#004BB0]/10 w-10 h-10 border-[#004BB0]/20 border rounded-lg mb-6 items-center justify-center">
<svg className="lucide lucide-layers w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(0, 75, 176)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<h3 className="text-2xl font-light text-slate-900 tracking-tight font-instrument-serif mb-3">Instant Full Stack</h3>
<p className="leading-relaxed text-base text-slate-500 tracking-tight font-dm-sans mb-6">React, Node, Postgres—provisioned and connected automatically. No configuration hell, just pure product development.</p>
<a className="inline-flex items-center text-sm font-medium transition-colors group font-dm-sans tracking-tight text-slate-900 hover:text-indigo-600" href="#" style={{}}>
                        Start generating <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
</a>
</div>

<div className="p-8 md:p-12 flex-1 flex flex-col justify-center transition-colors cursor-default bg-white hover:bg-slate-50">
<div className="flex bg-[#004BB0]/10 w-10 h-10 border-[#004BB0]/20 border rounded-lg mb-6 items-center justify-center">
<svg className="lucide lucide-database w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(0, 75, 176)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<h3 className="text-2xl font-light text-slate-900 tracking-tight font-instrument-serif mb-3">Production Ready DB</h3>
<p className="leading-relaxed text-base text-slate-500 tracking-tight font-dm-sans mb-6" style={{}}>Your data models are automatically normalized and deployed to a scalable SQL database. Relationship mapping included.</p>
<a className="inline-flex items-center text-sm font-medium transition-colors group font-dm-sans tracking-tight text-slate-900 hover:text-amber-600" href="#" style={{}}>
                        View architecture <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section><section className="z-10 animate-[fadeInUp_1s_ease-out_1.2s_forwards] relative" style={{transform: 'translateY(0px)'}}>
<div className="max-w-7xl mr-auto ml-auto pt-16 pb-16">
<div className="grid gap-12 lg:grid-cols-2 gap-x-12 gap-y-12">

<div className="bg-center bg-stone-200 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7302105-bf99-4736-914e-d8fbdb904af5_1600w.png)] bg-cover border-stone-200 border rounded-md pt-5 pr-5 pb-5 pl-5 relative">
<article className="group overflow-hidden transition-shadow hover:shadow-md bg-[#004BB0]/20 border-stone-300 border rounded relative shadow-xl backdrop-blur-xl">
<div className="sm:p-10 bg-stone-50 rounded pt-6 pr-6 pb-6 pl-6">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
<h3 className="text-2xl font-light text-stone-900 tracking-tight font-instrument-serif">Live Preview &amp; Code Edit
      </h3>
<span className="inline-flex items-center gap-2 text-[10px] sm:text-xs text-neutral-300 bg-stone-950 border-white/10 border rounded-full px-2.5 py-1">
<svg className="text-green-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M16 7h6v6"></path>
<path className="" d="m22 7-8.5 8.5-5-5L2 17"></path>
</svg>
        Instant Deploy
      </span>
</div>

<div className="relative h-56 sm:h-64 rounded-2xl bg-gradient-to-b ring-1 ring-inset mb-8 from-neutral-900 to-neutral-800 ring-white/5">

<div className="absolute right-3 sm:right-6 top-4 sm:top-6 w-[78%] h-[68%] rounded-2xl backdrop-blur border shadow-sm bg-neutral-900/90 border-neutral-800">
<div className="flex items-center justify-between px-3 py-2 border-b border-neutral-800/70">
<span className="text-[10px] sm:text-xs tracking-widest text-neutral-400" style={{}}>PERFORMANCE</span>
<div className="flex items-center gap-2">
<span className="text-xs text-green-400" style={{}}>99/100</span>
<span className="h-2 w-12 rounded bg-green-500/20"></span>
</div>
</div>
<div className="p-2">
<svg className="w-full h-20 sm:h-24 text-neutral-700" viewbox="0 0 300 90">
<defs className="">
<pattern className="" height="4" id="dots1" patternunits="userSpaceOnUse" width="4" x="0" y="0">
<circle className="" cx="1" cy="1" fill="currentColor" opacity="0.3" r="0.5"></circle>
</pattern>
</defs>
<rect className="" fill="url(#dots1)" height="100%" width="100%"></rect>

<rect className="" fill="#EF4444" height="20" width="3" x="20" y="45"></rect>
<rect className="" fill="#10B981" height="25" width="3" x="40" y="35"></rect>
<rect className="" fill="#EF4444" height="15" width="3" x="60" y="50"></rect>
<rect className="" fill="#10B981" height="30" width="3" x="80" y="30"></rect>
<rect className="" fill="#10B981" height="20" width="3" x="100" y="40"></rect>
<rect className="" fill="#10B981" height="35" width="3" x="120" y="25"></rect>
<rect className="" fill="#EF4444" height="18" width="3" x="140" y="45"></rect>
<rect className="" fill="#10B981" height="40" width="3" x="160" y="20"></rect>
<rect className="" fill="#10B981" height="25" width="3" x="180" y="35"></rect>
<rect className="" fill="#10B981" height="45" width="3" x="200" y="15"></rect>
<polyline className="" fill="none" points="22,55 42,47 62,57 82,45 102,50 122,42 142,54 162,40 182,47 202,37" stroke="#10B981" strokeLinecap="round" strokeWidth="1.5"></polyline>
</svg>
</div>
</div>

<div className="absolute left-6 sm:left-12 bottom-10 sm:bottom-12 w-[62%] h-[52%] rounded-2xl backdrop-blur border shadow-sm bg-neutral-900/90 border-neutral-800">
<div className="flex items-center justify-between px-3 py-2 border-b border-neutral-800/70">
<span className="text-[10px] sm:text-xs tracking-widest text-neutral-400" style={{}}>SERVICES</span>
</div>
<div className="p-2 space-y-1">
<div className="flex items-center justify-between text-xs">
<span className="text-neutral-300" style={{}}>Frontend</span>
<span className="text-green-400" style={{}}>Live</span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-neutral-300" style={{}}>API Gate</span>
<span className="text-green-400" style={{}}>Live</span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-neutral-300" style={{}}>Postgres</span>
<span className="text-green-400" style={{}}>Live</span>
</div>
</div>
</div>

<div className="absolute left-3 sm:left-6 bottom-3 sm:bottom-4 w-[38%] h-[44%] rounded-2xl backdrop-blur border shadow-sm bg-neutral-900/90 border-neutral-800">
<div className="flex items-center justify-between px-3 py-2 border-b border-neutral-800/70">
<span className="text-[10px] sm:text-xs tracking-widest text-neutral-400" style={{}}>TRAFFIC</span>
</div>
<div className="p-2">
<svg className="w-full h-14 sm:h-16 text-neutral-700" viewbox="0 0 180 70">
<rect className="" fill="#10B981" height="12" width="2" x="10" y="35"></rect>
<rect className="" fill="#10B981" height="17" width="2" x="25" y="30"></rect>
<rect className="" fill="#EF4444" height="10" width="2" x="40" y="40"></rect>
<rect className="" fill="#10B981" height="22" width="2" x="55" y="25"></rect>
<rect className="" fill="#10B981" height="27" width="2" x="70" y="20"></rect>
<rect className="" fill="#EF4444" height="12" width="2" x="85" y="35"></rect>
<rect className="" fill="#10B981" height="32" width="2" x="100" y="15"></rect>
<rect className="" fill="#10B981" height="19" width="2" x="115" y="28"></rect>
<rect className="" fill="#10B981" height="35" width="2" x="130" y="12"></rect>
<polyline className="" fill="none" points="11,41 26,38 41,45 56,36 71,33 86,41 101,31 116,36 131,29" stroke="#10B981" strokeLinecap="round" strokeWidth="1"></polyline>
</svg>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
<div className="">
<h4 className="text-2xl font-light text-stone-900 tracking-tight font-instrument-serif">Modern Stack</h4>
<p className="text-sm text-stone-700 mt-2">Generated with Next.js, Tailwind, and Supabase automatically.</p>
</div>
<div className="">
<h4 className="text-2xl font-light text-stone-900 tracking-tight font-instrument-serif">One-click Deploy</h4>
<p className="mt-2 text-sm text-neutral-400" style={{}}>Push to production instantly with integrated Vercel and Netlify support.</p>
</div>
</div>

<div className="">
<a className="inline-flex items-center gap-2 text-xs font-medium text-neutral-100 hover:text-neutral-300" href="#" style={{}}>
        Start generating
        <svg className="h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</article>
</div>

<div className="">
<div className="tech-content" id="technology">
<h3 className="sm:text-5xl transition-colors duration-500 text-4xl font-light text-slate-900 tracking-tight font-instrument-serif">
    Production-grade code, instantly generated</h3>

<div className="mt-8">
<div className="pt-6">
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5 bg-blue-100">
<svg className="text-blue-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" r="10"></circle>
<path className="" d="M12 6v6l4 2"></path>
</svg>
</div>
<div className="">
<h5 className="text-base font-medium tracking-tight font-dm-sans text-slate-900" style={{}}>Real-time Generation</h5>
<p className="text-base tracking-tight font-dm-sans mt-1 text-slate-600" style={{}}>Sub-second code generation with continuous
          syntax validation and best-practice enforcement.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5 bg-blue-100">
<svg className="text-blue-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<polyline className="" points="3.27,6.96 12,12.01 20.73,6.96"></polyline>
<line className="" x1="12" x2="12" y1="22.08" y2="12"></line>
</svg>
</div>
<div className="">
<h5 className="text-base font-medium tracking-tight font-dm-sans text-slate-900" style={{}}>LLM Optimization</h5>
<p className="text-base tracking-tight font-dm-sans mt-1 text-slate-600" style={{}}>Machine learning-enhanced logic translation
          with context-aware code completion for superior accuracy.</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="tech-content hidden" id="specs">

</div>
<div className="border-t mt-8 pt-6 border-neutral-200">
<div className="grid gap-6 sm:grid-cols-2">
<div className="flex gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer items-center">
<div className="">
<div className="flex items-baseline gap-2">
<span className="rating-number text-2xl tracking-tight font-instrument-serif font-light text-slate-900" data-target="4.8" style={{}}>4.9</span>
<span className="text-sm font-instrument-serif text-slate-600" style={{}}>/5</span>
</div>
<p className="text-base tracking-tight text-slate-600" style={{}}>From 5k+ developers</p>
</div>
</div>
<div className="flex items-center gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer">
<div className="">
<div className="flex items-baseline gap-2">
<span className="rating-number text-2xl tracking-tight font-instrument-serif font-light text-slate-900" data-target="94" style={{}}>1M+</span>
</div>
<p className="text-base tracking-tight font-dm-sans text-slate-600" style={{}}>Lines of code generated</p>
</div>
</div>
</div>
</div>
<div className="cta-buttons-container flex flex-col sm:flex-row rounded-md mt-8 gap-x-4 gap-y-4 items-center justify-start">
<style className="">

    .codepen-button {
      display: block;
      cursor: pointer;
      color: #fff;
      position: relative;
      text-decoration: none;
      font-weight: 600;
      overflow: hidden;
      padding: 2px;
      isolation: isolate
    }

    .codepen-button::before {
      content: "";
      position: absolute;
      inset: 0;
      width: 400%;
      height: 100%;
      background: linear-gradient(115deg, #8b5cf6, #4c1d95, #a855f7);
      background-size: 25% 100%;
      animation: border-shift .75s linear infinite
    }

    @keyframes border-shift {
      to {
        transform: translateX(-25%)
      }
    }

    .codepen-button span {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 1rem 1.5rem;
      font-size: 1.1rem;
      background: #004BB0;
      height: 100%
    }
  </style>
<div className="inline-block rounded-md">
<a className="codepen-button rounded-md" href="#">
<div className="" style={{position: 'absolute', inset: '0', width: '400%', height: '100%', background: 'linear-gradient(115deg,#8b5cf6,#4c1d95,#a855f7)', backgroundSize: '25% 100%', animation: 'border-shift .75s linear infinite'}}>
</div>
<span className="inline-flex items-center transition-all duration-300 group text-base font-light tracking-tight font-dm-sans border rounded pt-3 pr-6 pb-3 pl-6 hover:text-white hover:bg-white/10 hover:border-white/30 text-slate-50 bg-white/5 border-white/20" style={{}}>
        Start building
        <svg className="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</span>
</a>
</div>
</div></div>
</div>
</div>
</section><section className="border-slate-100 border-t pt-24 pr-6 pb-24 pl-6">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

<div className="order-2 lg:order-1 gap-x-2 gap-y-2">
<div className="inline-flex text-[11px] uppercase font-bold text-[#004bb0] tracking-tight font-dm-sans bg-[#004bb0]/10 border-[#004bb0]/25 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">

  Idea to Reality
</div>
<h2 className="leading-[1.1] text-5xl font-light text-slate-900 tracking-tight font-instrument-serif mb-6">Build and grow apps at the speed of thought.</h2>
<p className="leading-relaxed text-base text-slate-500 tracking-tight font-dm-sans mb-8" style={{}}>Don't let coding slow you down. ideatr provides the guardrails you need to move fast without breaking things.</p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full flex items-center justify-center mt-0.5 shrink-0 bg-green-50">
<svg className="lucide lucide-check w-3.5 h-3.5 text-green-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="">
<span className="leading-relaxed text-base text-slate-500 tracking-tight font-dm-sans" style={{}}>Describe your database schema, we generate the SQL. Models are optimized automatically.</span>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full flex items-center justify-center mt-0.5 shrink-0 bg-green-50">
<svg className="lucide lucide-check w-3.5 h-3.5 text-green-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="">
<span className="leading-relaxed text-base text-slate-500 tracking-tight font-dm-sans" style={{}}>Frontend components generated with Tailwind CSS automatically. Responsive by default.</span>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full flex items-center justify-center mt-0.5 shrink-0 bg-green-50">
<svg className="lucide lucide-check w-3.5 h-3.5 text-green-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="">
<span className="leading-relaxed text-base text-slate-500 tracking-tight font-dm-sans" style={{}}>Backend API routes and middleware created instantly. Secure and scalable from day one.</span>
</div>
</li>
</ul>
</div>

<div className="order-1 lg:order-2 relative perspective-1000">

<div className="absolute -inset-6 bg-gradient-to-tr rounded-3xl opacity-60 blur-2xl -z-10 from-purple-100/50 to-blue-50/50"></div>

<div className="overflow-hidden aspect-[4/3] transform transition-transform hover:rotate-0 duration-500 ease-out bg-white border-slate-200/80 border rounded-md relative shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] rotate-x-[5deg] rotate-y-[-5deg]">

<div className="flex bg-[#FAFAFA] h-10 border-b pr-4 pl-4 items-center justify-between border-slate-100">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full border bg-slate-200 border-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full border bg-slate-200 border-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full border bg-slate-200 border-slate-300"></div>
</div>
<div className="flex gap-2 text-[10px] font-medium font-mono text-slate-400">
<span className="font-dm-sans tracking-tight" style={{}}>IDEATR-GEN-01</span>
<span className="font-dm-sans tracking-tight" style={{}}>•</span>
<span className="font-dm-sans tracking-tight" style={{}}>ACTIVE</span>
</div>
</div>

<div className="grid grid-cols-3 gap-4 overflow-hidden bg-[#F9F8F6] h-full pt-5 pr-5 pb-5 pl-5" style={{}}>

<div className="flex flex-col gap-3 gap-x-3 gap-y-3">
<div className="flex justify-between items-center mb-1">
<span className="text-[11px] font-semibold text-slate-500 uppercase font-dm-sans tracking-tight" style={{}}>Planned</span>
<span className="text-[10px] px-1.5 rounded font-mono font-dm-sans tracking-tight bg-slate-200 text-slate-600" style={{}}>4</span>
</div>

<div className="p-3 rounded-lg border shadow-sm flex flex-col gap-2 bg-white border-slate-200">
<div className="w-8 h-1 rounded-full bg-purple-200"></div>
<div className="h-2 w-full rounded-sm bg-slate-100"></div>
<div className="h-2 w-2/3 rounded-sm bg-slate-100"></div>
<div className="flex justify-between items-center mt-1">
<div className="w-4 h-4 rounded-full border bg-slate-100 border-slate-200"></div>
<div className="w-8 h-3 rounded border bg-slate-50 border-slate-100"></div>
</div>
</div>

<div className="p-3 rounded-lg border shadow-sm flex flex-col gap-2 bg-white border-slate-200">
<div className="w-8 h-1 rounded-full bg-orange-200"></div>
<div className="h-2 w-3/4 rounded-sm bg-slate-100"></div>
</div>
</div>

<div className="flex flex-col gap-3">
<div className="flex justify-between items-center mb-1">
<span className="text-[11px] font-semibold text-slate-500 uppercase font-dm-sans tracking-tight" style={{}}>Generating</span>
<span className="text-[10px] px-1.5 rounded font-mono font-dm-sans tracking-tight bg-slate-200 text-slate-600" style={{}}>2</span>
</div>

<div className="p-3 rounded-lg border shadow-[0_4px_12px_-2px_rgba(107,33,168,0.1)] flex flex-col gap-2 relative bg-white border-purple-200">
<div className="absolute -left-[1px] top-3 bottom-3 w-[3px] bg-[#6B21A8] rounded-r-full"></div>
<div className="w-12 h-1 rounded-full bg-blue-200"></div>
<div className="h-2 w-5/6 rounded-sm opacity-10 bg-slate-800"></div>
<div className="h-2 w-full rounded-sm opacity-5 bg-slate-800"></div>
<div className="h-2 w-1/2 rounded-sm opacity-5 bg-slate-800"></div>
<div className="flex justify-between items-center mt-2">
<div className="flex -space-x-1">
<div className="w-5 h-5 rounded-full border z-10 bg-indigo-100 border-white"></div>
<div className="w-5 h-5 rounded-full border bg-pink-100 border-white"></div>
</div>
<div className="text-[9px] font-mono px-1.5 py-0.5 rounded border font-dm-sans tracking-tight text-purple-700 bg-purple-50 border-purple-100" style={{}}>
                    BLD-128</div>
</div>
</div>
</div>

<div className="flex flex-col gap-3 opacity-60">
<div className="flex justify-between items-center mb-1">
<span className="text-[11px] font-semibold text-slate-500 uppercase font-dm-sans tracking-tight" style={{}}>Deployed</span>
<span className="text-[10px] px-1.5 rounded font-mono font-dm-sans tracking-tight bg-slate-200 text-slate-600" style={{}}>18</span>
</div>

<div className="p-3 rounded-lg border flex flex-col gap-2 bg-slate-50/50 border-slate-100">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full border flex items-center justify-center border-slate-300">
<svg className="lucide lucide-check w-2 h-2 text-slate-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="h-2 w-3/4 rounded-sm bg-slate-200"></div>
</div>
</div>

<div className="p-3 rounded-lg border flex flex-col gap-2 bg-slate-50/50 border-slate-100">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full border flex items-center justify-center border-slate-300">
<svg className="lucide lucide-check w-2 h-2 text-slate-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="h-2 w-1/2 rounded-sm bg-slate-200"></div>
</div>
</div>

<div className="p-3 rounded-lg border flex flex-col gap-2 bg-slate-50/50 border-slate-100">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full border flex items-center justify-center border-slate-300">
<svg className="lucide lucide-check w-2 h-2 text-slate-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="h-2 w-2/3 rounded-sm bg-slate-200"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section><div className="pointer-events-none z-0 opacity-10 h-32 right-0 bottom-0 left-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, rgb(0, 0, 0) 0px, rgb(0, 0, 0) 1px, transparent 0px, transparent 50%)', backgroundSize: '10px 10px'}}>
</div><section className="border-y pt-24 pr-6 pb-24 pl-6 bg-stone-900 border-stone-900">
<div className="text-center max-w-4xl mr-auto ml-auto">
<div className="flex justify-center mb-10">
<div className="p-3 rounded-xl border bg-slate-800/50 border-slate-700/50">
<svg className="lucide lucide-quote fill-current w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(0, 75, 176)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
</div>
<h3 className="md:text-5xl leading-[1.2] text-3xl tracking-tight mb-12 font-instrument-serif font-light text-white" style={{}}>"ideatr turned my text prompt into a fully functional SaaS in minutes. The backend logic was flawless and the design stunning."</h3>
<div className="flex items-center justify-center gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 p-[1px]">
<div className="w-full h-full rounded-full flex items-center justify-center overflow-hidden bg-slate-900">
<img alt="User" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0a9490d3-0806-4139-aaa6-628fd3eee5b1_320w.png"/>
</div>
</div>
<div className="text-left">
<div className="font-medium font-dm-sans tracking-tight text-white" style={{}}>François Savard</div>
<div className="text-sm tracking-tight font-dm-sans text-slate-400" style={{}}>a fellow creator</div>
</div>
</div>
</div>
</section><section className="pt-24 pr-6 pb-24 pl-6 bg-stone-900">
<div className="max-w-7xl mr-auto ml-auto">
<div className="text-center max-w-2xl mx-auto mb-12">
<h2 className="text-4xl tracking-tight mb-4 font-instrument-serif font-light text-stone-50" style={{}}>Manage your generated empire</h2>
<p className="text-base tracking-tight font-dm-sans text-stone-200" style={{}}>Every layer of your generated product, optimized for clarity and control.</p>
</div>

<div className="flex mb-10 justify-center">
<div className="inline-flex rounded-xl px-1.5 py-1.5 text-stone-900 bg-stone-700/50">
<button className="transition-all text-sm font-semibold rounded-lg pt-2 pr-6 pb-2 pl-6 shadow-sm font-dm-sans tracking-tight text-slate-900 bg-white" style={{}}>Deployments</button>
<button className="transition-all text-sm font-medium pt-2 pr-6 pb-2 pl-6 font-dm-sans tracking-tight hover:text-slate-400 text-stone-50" style={{}}>Database</button>
<button className="transition-all text-sm font-medium pt-2 pr-6 pb-2 pl-6 font-dm-sans tracking-tight hover:text-slate-400 text-stone-50" style={{}}>Logs</button>
</div>
</div>

<div className="sm:px-6 pr-4 pl-4">
<div className="bg-[#000000]/80 border ring-1 rounded-md relative shadow-2xl backdrop-blur border-white/10 ring-white/10">

<div className="pointer-events-none absolute -top-6 left-1/2 h-16 w-[80%] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(168,85,247,0.4),rgba(0,0,0,0))] blur-2xl">
</div>

<div className="flex sm:px-6 border-b pt-3 pr-4 pb-3 pl-4 items-center justify-between border-white/10">
<div className="flex items-center gap-2">
<div className="hidden sm:block">
<p className="text-sm font-medium font-dm-sans tracking-tight text-white" style={{}}>ideatr Dashboard</p>
<p className="text-[11px] font-dm-sans tracking-tight text-slate-400" style={{}}>January 2026</p>
</div>
</div>
<div className="flex items-center gap-2 sm:gap-3">

<div className="hidden md:flex gap-2 h-10 border rounded pr-3 pl-3 gap-x-2 gap-y-2 items-center bg-white/5 border-white/10">
<svg className="h-4 w-4 shrink-0 text-slate-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m21 21-4.34-4.34"></path>
<circle className="" cx="11" cy="11" r="8"></circle>
</svg>
<input className="h-full bg-transparent text-sm placeholder:text-slate-400 focus:outline-none w-56 text-slate-200" placeholder="Search your apps…" type="text"/>
</div>

<button className="inline-flex gap-2 text-sm h-10 border rounded pr-3 pl-3 gap-x-2 gap-y-2 items-center text-slate-200 bg-white/5 border-white/10">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m15 18-6-6 6-6"></path></svg>
<span className="hidden sm:block font-dm-sans tracking-tight" style={{}}>Prev</span>
</button>

<button className="inline-flex gap-2 text-sm h-10 border rounded pr-3 pl-3 gap-x-2 gap-y-2 items-center text-slate-200 bg-white/5 border-white/10">
<span className="hidden sm:block font-dm-sans tracking-tight" style={{}}>Next</span>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m9 18 6-6-6-6"></path></svg>
</button>

<div className="hidden sm:flex items-center gap-2">
<button className="inline-flex text-sm tracking-tight font-dm-sans h-10 border rounded pr-3 pl-3 gap-x-2 gap-y-2 items-center text-slate-200 bg-white/5 border-white/10" style={{}}>François's Workspace</button>
</div>

<img alt="User Avatar" className="hidden sm:block w-8 h-8 object-cover rounded-full ring-1 ml-2 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0a9490d3-0806-4139-aaa6-628fd3eee5b1_320w.png"/>
</div>
</div>

<div className="flex">

<aside className="hidden lg:block w-72 border-r pt-4 pr-4 pb-4 pl-4 border-white/10">

<div className="border rounded pt-3 pr-3 pb-3 pl-3 bg-white/5 border-white/10">
<div className="flex items-center justify-between">
<button className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5">
<svg className="h-4 w-4 text-slate-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m15 18-6-6 6-6"></path></svg>
</button>
<div className="text-sm font-medium font-dm-sans tracking-tight text-white" style={{}}>Deployment History</div>
<button className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5">
<svg className="h-4 w-4 text-slate-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
<div className="mt-3 grid grid-cols-7 gap-1 text-center text-[11px] text-slate-400">
<span className="font-dm-sans tracking-tight" style={{}}>Su</span><span className="font-dm-sans tracking-tight" style={{}}>Mo</span><span className="font-dm-sans tracking-tight" style={{}}>Tu</span><span className="font-dm-sans tracking-tight" style={{}}>We</span><span className="font-dm-sans tracking-tight" style={{}}>Th</span><span className="font-dm-sans tracking-tight" style={{}}>Fr</span><span className="font-dm-sans tracking-tight" style={{}}>Sa</span>
</div>
<div className="mt-2 grid grid-cols-7 gap-1 text-center">
<span className="py-1 text-[12px] text-slate-500 font-dm-sans tracking-tight" style={{}}>26</span>
<span className="py-1 text-[12px] text-slate-500 font-dm-sans tracking-tight" style={{}}>27</span>
<span className="py-1 text-[12px] text-slate-500 font-dm-sans tracking-tight" style={{}}>28</span>
<span className="py-1 text-[12px] text-slate-500 font-dm-sans tracking-tight" style={{}}>29</span>
<span className="py-1 text-[12px] text-slate-500 font-dm-sans tracking-tight" style={{}}>30</span>
<span className="py-1 text-[12px] font-dm-sans tracking-tight text-slate-300" style={{}}>1</span>
<span className="py-1 text-[12px] font-dm-sans tracking-tight text-slate-300" style={{}}>2</span>
<span className="py-1 text-[12px] font-dm-sans tracking-tight text-slate-300" style={{}}>3</span>
<span className="py-1 text-[12px] font-dm-sans tracking-tight text-slate-300" style={{}}>4</span>
<span className="py-1 text-[12px] font-dm-sans tracking-tight text-slate-300" style={{}}>5</span>
<span className="py-1 text-[12px] font-dm-sans tracking-tight text-slate-300" style={{}}>6</span>
<span className="py-1 text-[12px] font-dm-sans tracking-tight text-slate-300" style={{}}>7</span>
<span className="py-1 text-[12px] font-dm-sans tracking-tight text-slate-300" style={{}}>8</span>
<span className="py-1 text-[12px] font-dm-sans tracking-tight text-slate-300" style={{}}>9</span>
<span className="py-1 text-[12px] font-dm-sans tracking-tight text-slate-300" style={{}}>10</span>
<span className="py-1 text-[12px] font-dm-sans tracking-tight text-slate-300" style={{}}>11</span>
<span className="py-1 text-[12px] font-dm-sans tracking-tight text-slate-300" style={{}}>12</span>
<span className="py-1 text-[12px] font-dm-sans tracking-tight text-slate-300" style={{}}>13</span>
<span className="py-1 text-[12px] font-dm-sans tracking-tight text-slate-300" style={{}}>14</span>
<span className="py-1 text-[12px] font-dm-sans tracking-tight text-slate-300" style={{}}>15</span>
<span className="py-1 text-[12px] font-dm-sans tracking-tight text-slate-300" style={{}}>16</span>
<span className="py-1 text-[12px] font-dm-sans tracking-tight text-slate-300" style={{}}>17</span>
<span className="py-1 text-[12px] font-dm-sans tracking-tight text-slate-300" style={{}}>18</span>
<span className="py-1 text-[12px] font-dm-sans tracking-tight text-slate-300" style={{}}>19</span>
<span className="py-1 text-[12px] font-dm-sans tracking-tight text-slate-300" style={{}}>20</span>
<span className="py-1 text-[12px] font-dm-sans tracking-tight text-slate-300" style={{}}>21</span>
<span className="py-1 text-[12px] font-dm-sans tracking-tight text-slate-300" style={{}}>22</span>
<span className="py-1 text-[12px] font-dm-sans tracking-tight text-slate-300" style={{}}>23</span>
<span className="py-1 text-[12px] font-dm-sans tracking-tight text-slate-300" style={{}}>24</span>
<span className="py-1 text-[12px] font-dm-sans tracking-tight text-slate-300" style={{}}>25</span>
<span className="py-1 text-[12px] rounded-md bg-gradient-to-r from-violet-500/40 ring-1 font-dm-sans tracking-tight text-white to-fuchsia-600/40 ring-white/10" style={{}}>26</span>
<span className="py-1 text-[12px] font-dm-sans tracking-tight text-slate-300" style={{}}>27</span>
<span className="py-1 text-[12px] font-dm-sans tracking-tight text-slate-300" style={{}}>28</span>
<span className="py-1 text-[12px] font-dm-sans tracking-tight text-slate-300" style={{}}>29</span>
<span className="py-1 text-[12px] font-dm-sans tracking-tight text-slate-300" style={{}}>30</span>
</div>
</div>

<div className="mt-5">
<p className="mb-2 text-sm font-medium font-dm-sans tracking-tight text-white" style={{}}>Active Services</p>
<div className="space-y-2">
<div className="flex border rounded pt-2 pr-3 pb-2 pl-3 items-center justify-between bg-white/5 border-white/10">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
<span className="text-sm font-dm-sans tracking-tight text-slate-200" style={{}}>Frontend</span>
</div>
<button aria-checked="true" className="relative h-5 w-9 rounded-full ring-1 transition aria-checked:bg-emerald-500/60 bg-white/10 ring-white/10">
<span className="absolute left-4 top-0.5 h-4 w-4 rounded-full shadow transition aria-checked:left-[18px] bg-white"></span>
</button>
</div>
<div className="flex border rounded pt-2 pr-3 pb-2 pl-3 items-center justify-between bg-white/5 border-white/10">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-sky-400"></span>
<span className="text-sm font-dm-sans tracking-tight text-slate-200" style={{}}>API</span>
</div>
<button aria-checked="true" className="relative h-5 w-9 rounded-full ring-1 transition aria-checked:bg-sky-500/60 bg-white/10 ring-white/10">
<span className="absolute left-4 top-0.5 h-4 w-4 rounded-full shadow transition aria-checked:left-[18px] bg-white"></span>
</button>
</div>
<div className="flex border rounded pt-2 pr-3 pb-2 pl-3 items-center justify-between bg-white/5 border-white/10">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-fuchsia-400"></span>
<span className="text-sm font-dm-sans tracking-tight text-slate-200" style={{}}>Database</span>
</div>
<button aria-checked="false" className="relative h-5 w-9 rounded-full ring-1 transition aria-checked:bg-fuchsia-500/60 bg-white/10 ring-white/10">
<span className="absolute left-1 top-0.5 h-4 w-4 rounded-full shadow transition aria-checked:left-[18px] bg-white"></span>
</button>
</div>
</div>
</div>

<div className="mt-6">
<p className="mb-2 text-sm font-medium font-dm-sans tracking-tight text-white" style={{}}>Next Up</p>
<div className="space-y-2">
<div className="flex gap-2 border rounded pt-3 pr-3 pb-3 pl-3 gap-x-2 gap-y-2 items-start bg-white/5 border-white/10">
<input className="mt-1 h-4 w-4 accent-violet-500" type="checkbox"/>
<div className="">
<p className="text-sm font-dm-sans tracking-tight text-slate-200" style={{}}>Deploy new Schema</p>
<p className="text-xs font-dm-sans tracking-tight text-slate-400" style={{}}>Today • 2:00 PM</p>
</div>
</div>
</div>
</div>
</aside>

<div className="min-w-0 flex-1 sm:p-4 pt-3 pr-3 pb-3 pl-3">
<div className="overflow-x-auto">
<div className="w-full">

<div className="grid gap-2 mb-3" style={{gridTemplateColumns: '72px repeat(5,1fr)'}}>
<div className="text-xs text-slate-400"></div>
<div className="text-xs font-medium text-center font-dm-sans tracking-tight text-slate-200" style={{}}>Mon 24</div>
<div className="text-xs font-medium text-center font-dm-sans tracking-tight text-slate-200" style={{}}>Tue 25</div>
<div className="text-xs font-medium text-center font-dm-sans tracking-tight text-slate-200" style={{}}>Wed 26</div>
<div className="text-xs font-medium text-center font-dm-sans tracking-tight text-slate-200" style={{}}>Thu 27</div>
<div className="text-xs font-medium text-center font-dm-sans tracking-tight text-slate-200" style={{}}>Fri 28</div>
</div>

<div className="grid" style={{gridTemplateColumns: '72px repeat(5,1fr)', gridAutoRows: '64px', gap: '0'}}>

<div className="flex items-center pr-2 text-[11px] text-slate-500 font-dm-sans tracking-tight" style={{gridRow: '1'}}>07:00</div>
<div className="border-t border-l relative bg-white/5 border-white/10" style={{gridRow: '1'}}></div>
<div className="border-l border-t relative border-white/10 bg-white/5" style={{gridRow: '1'}}></div>
<div className="border-l border-t relative border-white/10 bg-white/5" style={{gridRow: '1'}}></div>
<div className="border-l border-t relative border-white/10 bg-white/5" style={{gridRow: '1'}}></div>
<div className="border-t border-r border-l relative bg-white/5 border-white/10" style={{gridRow: '1'}}></div>

<div className="flex items-center pr-2 text-[11px] text-slate-500 font-dm-sans tracking-tight" style={{gridRow: '2'}}>08:00</div>

<div className="border-l border-t relative border-white/10 bg-white/5" style={{gridRow: '2'}}>
<div className="evt evt-at-30 evt-h-30 ring-1 bg-gradient-to-r from-emerald-500/20 ring-emerald-400/30 to-emerald-400/10">
<p className="text-[11px] leading-tight font-dm-sans tracking-tight text-emerald-300" style={{}}>Build Success</p>
<p className="text-[10px] font-dm-sans tracking-tight text-slate-400" style={{}}>08:30 - 09:00</p>
</div>
</div>

<div className="border-l border-t relative border-white/10 bg-white/5" style={{gridRow: '2'}}>
<div className="evt evt-at-30 evt-h-30 ring-1 bg-gradient-to-r from-emerald-500/20 ring-emerald-400/30 to-emerald-400/10">
<p className="text-[11px] leading-tight font-dm-sans tracking-tight text-emerald-300" style={{}}>Build Success</p>
<p className="text-[10px] font-dm-sans tracking-tight text-slate-400" style={{}}>08:30 - 09:00</p>
</div>
</div>

<div className="border-l border-t relative border-white/10 bg-white/5" style={{gridRow: '2'}}>
<div className="evt evt-at-30 evt-h-30 ring-1 bg-gradient-to-r from-emerald-500/20 ring-emerald-400/30 to-emerald-400/10">
<p className="text-[11px] leading-tight font-dm-sans tracking-tight text-emerald-300" style={{}}>Build Success</p>
<p className="text-[10px] font-dm-sans tracking-tight text-slate-400" style={{}}>08:30 - 09:00</p>
</div>
</div>

<div className="border-l border-t relative border-white/10 bg-white/5" style={{gridRow: '2'}}>
<div className="evt evt-at-30 evt-h-30 ring-1 bg-gradient-to-r from-emerald-500/20 ring-emerald-400/30 to-emerald-400/10">
<p className="text-[11px] leading-tight font-dm-sans tracking-tight text-emerald-300" style={{}}>Build Success</p>
<p className="text-[10px] font-dm-sans tracking-tight text-slate-400" style={{}}>08:30 - 09:00</p>
</div>
</div>

<div className="border-l border-r border-t relative border-white/10 bg-white/5" style={{gridRow: '2'}}>
<div className="evt evt-at-30 evt-h-30 ring-1 bg-gradient-to-r from-emerald-500/20 ring-emerald-400/30 to-emerald-400/10">
<p className="text-[11px] leading-tight font-dm-sans tracking-tight text-emerald-300" style={{}}>Backup Completed</p>
<p className="text-[10px] font-dm-sans tracking-tight text-slate-400" style={{}}>08:30 - 09:00</p>
</div>
</div>

<div className="flex items-center pr-2 text-[11px] text-slate-500 font-dm-sans tracking-tight" style={{gridRow: '3'}}>09:00</div>

<div className="border-l border-t relative border-white/10 bg-white/5" style={{gridRow: '3 / 5'}}>
<div className="evt ring-1 bg-gradient-to-r from-fuchsia-500/20 to-violet-500/10 ring-fuchsia-400/30" style={{top: 'calc(50%)', bottom: 'var(--evt-pad)'}}>
<p className="text-[11px] leading-tight font-dm-sans tracking-tight text-fuchsia-300" style={{}}>Schema Migration</p>
<p className="text-[10px] font-dm-sans tracking-tight text-slate-400" style={{}}>09:30 - 11:00</p>
</div>
</div>

<div className="border-l border-t relative border-white/10 bg-white/5" style={{gridRow: '3 / 4'}}>
<div className="evt ring-1 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/10 ring-violet-400/30" style={{top: '50%', height: '64px'}}>
<p className="text-[11px] leading-tight font-dm-sans tracking-tight text-violet-300" style={{}}>Re-indexing Database</p>
<p className="text-[10px] font-dm-sans tracking-tight text-slate-400" style={{}}>09:30 - 10:30</p>
</div>
</div>

<div className="border-l border-t relative border-white/10 bg-white/5" style={{gridRow: '3 / 5'}}>
<div className="evt ring-1 bg-gradient-to-r from-rose-500/20 to-fuchsia-500/10 ring-rose-400/30" style={{top: 'calc(64px * 0.75)', bottom: 'var(--evt-pad)'}}>
<p className="text-[11px] leading-tight font-dm-sans tracking-tight text-rose-300" style={{}}>Auto-scaling Triggered</p>
<p className="text-[10px] font-dm-sans tracking-tight text-slate-400" style={{}}>09:45 - 11:30</p>
</div>
</div>

<div className="border-l border-t relative border-white/10 bg-white/5" style={{gridRow: '3 / 4'}}>
<div className="evt ring-1 bg-gradient-to-r from-amber-500/20 to-orange-500/10 ring-amber-400/30" style={{top: '50%', height: '64px'}}>
<p className="text-[11px] leading-tight font-dm-sans tracking-tight text-amber-300" style={{}}>API Rate Limit Warning</p>
<p className="text-[10px] font-dm-sans tracking-tight text-slate-400" style={{}}>09:30 - 10:30</p>
</div>
</div>
<div className="border-l border-r border-t relative border-white/10 bg-white/5" style={{gridRow: '3'}}></div>

<div className="flex items-center pr-2 text-[11px] text-slate-500 font-dm-sans tracking-tight" style={{gridRow: '4'}}>10:00</div>

<div className="border-l border-t relative border-white/10 bg-white/5" style={{gridRow: '4 / 6'}}>
<div className="evt ring-1 bg-gradient-to-r from-cyan-500/20 to-sky-500/10 ring-cyan-400/30" style={{top: 'calc(64px * 0.75)', bottom: 'calc(64px + var(--evt-pad))'}}>
<p className="text-[11px] leading-tight font-dm-sans tracking-tight text-cyan-300" style={{}}>Deploying V2.0</p>
<p className="text-[10px] font-dm-sans tracking-tight text-slate-400" style={{}}>10:45 - 12:00</p>
</div>
</div>
<div className="border-l border-t relative border-white/10 bg-white/5" style={{gridRow: '4'}}></div>
<div className="border-l border-t relative border-white/10 bg-white/5" style={{gridRow: '4'}}></div>

<div className="border-l border-r border-t relative border-white/10 bg-white/5" style={{gridRow: '4 / 5'}}>
</div>

<div className="flex items-center pr-2 text-[11px] text-slate-500 font-dm-sans tracking-tight" style={{gridRow: '5'}}>11:00</div>

<div className="border-l border-t relative border-white/10 bg-white/5" style={{gridRow: '5'}}>
<div className="evt evt-at-00 evt-h-30 ring-1 bg-gradient-to-r from-sky-500/20 to-cyan-500/10 ring-sky-400/30">
<p className="text-[11px] leading-tight font-dm-sans tracking-tight text-sky-300" style={{}}>DNS Propagation</p>
<p className="text-[10px] font-dm-sans tracking-tight text-slate-400" style={{}}>11:00 - 11:30</p>
</div>
</div>
<div className="border-t border-l relative bg-white/5 border-white/10" style={{gridRow: '5'}}></div>
<div className="border-l border-t relative border-white/10 bg-white/5" style={{gridRow: '5'}}></div>
<div className="border-l border-t relative border-white/10 bg-white/5" style={{gridRow: '5'}}></div>
<div className="border-l border-r border-t relative border-white/10 bg-white/5" style={{gridRow: '5'}}></div>

<div className="flex items-center pr-2 text-[11px] text-slate-500 font-dm-sans tracking-tight" style={{gridRow: '6'}}>12:00</div>
</div></div></div></div></div></div></div></div></section>
    </>
  );
}
