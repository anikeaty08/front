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



    !function(){var u=window.UnicornStudio;if(u&&u.init){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){u.init()})}else{u.init()}}else{window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js",i.onload=function(){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){UnicornStudio.init()})}else{UnicornStudio.init()}},(document.head||document.body).appendChild(i)}}();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#050505]">

<div className="absolute inset-0 flex items-center justify-center opacity-80 mix-blend-screen">
<div data-us-project="b49CL5e4CEIeaVuuOIM7" style={{width: '1440px', height: '900px', transform: 'scale(1.2)'}}><a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank"><img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/></a><a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank"><img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/></a><a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank"><img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/></a><a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank"><img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/></a><a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank"><img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/></a><a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank"><img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/></a><a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank"><img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/></a><a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank"><img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/></a><a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank"><img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/></a><a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank"><img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/></a><a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank"><img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/></a><a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank"><img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/></a></div>
</div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
</div>

<header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
<div className="mx-auto max-w-7xl">
<nav className="glass-panel rounded-full px-5 py-3 flex items-center justify-between">

<div className="flex items-center gap-2.5 group cursor-pointer">
<div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-600 shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-all duration-300">
</div>
<span className="text-lg font-medium tracking-tighter text-zinc-100 group-hover:text-white transition-colors">
                        HubFit
                    </span>
</div>

<div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8">
<a className="text-sm font-light text-zinc-400 hover:text-white transition-colors" href="#">Platform</a>
<a className="text-sm font-light text-zinc-400 hover:text-white transition-colors" href="#">Coaches</a>
<a className="text-sm font-light text-zinc-400 hover:text-white transition-colors" href="#">Pricing</a>
<a className="text-sm font-light text-zinc-400 hover:text-white transition-colors" href="#">Resources</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden sm:block text-sm font-medium text-zinc-400 hover:text-white transition-colors px-3" href="#">Sign In</a>
<a className="btn-shine relative inline-flex items-center justify-center gap-2 rounded-full bg-zinc-100 px-5 py-2 text-sm font-medium text-zinc-900 transition-transform hover:scale-105 active:scale-95" href="#">
<span className="">Get Started</span>
<iconify-icon className="text-zinc-600" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</nav>
</div>
</header>

<main className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-16 relative">
<div className="sm:px-6 lg:px-8 text-center max-w-7xl z-10 mr-auto ml-auto pr-4 pl-4 relative">

<div className="animate-enter opacity-0 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300 mb-8 hover:bg-violet-500/20 transition-colors cursor-pointer backdrop-blur-sm">
<span className="flex h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse"></span>
<span className="">v2.0 is now live</span>
<div className="h-3 w-px bg-violet-500/20 mx-1"></div>
<span className="flex items-center gap-1 hover:text-white transition-colors">
                    Read styled notes <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>

<h1 className="animate-enter delay-100 sm:text-7xl leading-[1.1] text-5xl font-medium text-white tracking-tight opacity-0 max-w-4xl mr-auto mb-6 ml-auto drop-shadow-2xl">Better begins, <br/> <span className="bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 via-zinc-300 to-zinc-500">at Lyra</span></h1>

<p className="animate-enter delay-200 leading-relaxed text-lg font-light text-zinc-400 opacity-0 mix-blend-plus-lighter max-w-2xl mr-auto mb-10 ml-auto">Since 2022, we've partnered with Silicon Valley startups to design, build and ship incredible products.</p>

<div className="animate-enter delay-300 opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="btn-shine group relative h-12 w-full sm:w-auto min-w-[160px] overflow-hidden rounded-xl bg-violet-600 p-[1px] shadow-[0_0_20px_-5px_rgba(124,58,237,0.5)] transition-all hover:shadow-[0_0_30px_-5px_rgba(124,58,237,0.6)] hover:scale-105 active:scale-95">
<span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#7C3AED_50%,#E2E8F0_100%)] opacity-0 group-hover:opacity-30"></span>
<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-violet-600 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors">
                        Start for free
                        <svg className="ml-2 w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="solar" data-solar="arrow-right-up-outline" height="20" strokeWidth="4" style={{width: '20px', height: '20px', color: 'rgb(221, 214, 254)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" clip-rule="evenodd" d="M9 6.75a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V7.81L6.53 18.53a.75.75 0 0 1-1.06-1.06L16.19 6.75z" fill="currentColor" fill-rule="evenodd"></path></svg>
</span>
</button>
<button className="group h-12 w-full sm:w-auto min-w-[160px] rounded-xl border border-zinc-700 bg-zinc-900/50 px-6 py-1 text-sm font-medium text-zinc-300 transition-all hover:bg-zinc-800 hover:text-white hover:border-zinc-600 active:scale-95 backdrop-blur-md">
<span className="flex items-center justify-center gap-2">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-300 transition-colors" icon="solar:play-circle-bold-duotone"></iconify-icon>
                        Watch Demo
                    </span>
</button>
</div>

<div className="animate-enter delay-300 opacity-0 relative mx-auto max-w-5xl perspective-1000 group">

<div className="relative glass-panel rounded-2xl p-2 sm:p-3 transition-transform duration-700 hover:rotate-x-2">

<div className="absolute top-0 left-0 right-0 h-10 bg-white/5 border-b border-white/5 rounded-t-xl flex items-center px-4 gap-2 z-20">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700/50"></div>
<div className="mx-auto text-[10px] font-mono text-zinc-600 tracking-widest uppercase">app.hubfit.io</div>
</div>

<div className="mt-8 bg-zinc-950/80 rounded-lg border border-white/5 grid grid-cols-12 overflow-hidden h-[400px] sm:h-[550px] relative">

<div className="hidden md:flex col-span-2 border-r border-white/5 flex-col p-4 gap-1 bg-zinc-900/20">
<div className="h-8 mb-6 flex items-center gap-2 px-2">
<div className="w-6 h-6 rounded bg-violet-500/20 flex items-center justify-center">
<iconify-icon className="text-violet-400 text-xs" icon="solar:dumbbell-large-minimalistic-linear"></iconify-icon>
</div>
</div>

<div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 text-xs text-white font-medium cursor-pointer">
<iconify-icon className="text-violet-400" icon="solar:home-2-bold-duotone"></iconify-icon> Home
                            </div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-xs text-zinc-500 hover:text-zinc-300 cursor-pointer transition-colors">
<iconify-icon icon="solar:users-group-rounded-bold-duotone"></iconify-icon> Clients
                            </div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-xs text-zinc-500 hover:text-zinc-300 cursor-pointer transition-colors">
<iconify-icon icon="solar:calendar-date-bold-duotone"></iconify-icon> Schedule
                            </div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-xs text-zinc-500 hover:text-zinc-300 cursor-pointer transition-colors">
<iconify-icon icon="solar:chart-2-bold-duotone"></iconify-icon> Analytics
                            </div>
<div className="mt-auto">
<div className="flex items-center gap-2 px-2 py-2 border-t border-white/5">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600"></div>
<div className="text-[10px] text-zinc-400">Coach Mike</div>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-10 p-6 sm:p-8 flex flex-col relative">

<div className="flex justify-between items-end mb-8">
<div>
<h2 className="text-xl font-medium text-white">Morning Overview</h2>
<p className="text-xs text-zinc-500 mt-1">Here's what's happening today.</p>
</div>
<div className="flex gap-2">
<button className="w-8 h-8 rounded-full border border-zinc-800 bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition">
<iconify-icon icon="solar:bell-bold-duotone"></iconify-icon>
</button>
<button className="px-3 py-1.5 rounded-lg bg-violet-600 text-[10px] font-medium text-white hover:bg-violet-500 transition">
                                        + New Program
                                    </button>
</div>
</div>

<div className="grid grid-cols-3 gap-4 mb-6">

<div className="col-span-3 sm:col-span-1 glass-panel rounded-xl p-4 relative overflow-hidden group/card">
<div className="flex justify-between items-start mb-4">
<div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:wallet-money-bold-duotone"></iconify-icon>
</div>
<span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">+12%</span>
</div>
<div className="text-2xl font-medium text-white mb-1">$8,240</div>
<div className="text-[10px] text-zinc-500">Monthly Revenue</div>
<div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
</div>

<div className="col-span-3 sm:col-span-1 glass-panel rounded-xl p-4 relative overflow-hidden group/card">
<div className="flex justify-between items-start mb-4">
<div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:users-group-two-rounded-bold-duotone"></iconify-icon>
</div>
<span className="text-[10px] text-zinc-500">Active</span>
</div>
<div className="text-2xl font-medium text-white mb-1">142</div>
<div className="text-[10px] text-zinc-500">Total Clients</div>
</div>

<div className="col-span-3 sm:col-span-1 glass-panel rounded-xl p-4 relative overflow-hidden group/card">
<div className="flex justify-between items-start mb-4">
<div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400">
<iconify-icon icon="solar:clipboard-check-bold-duotone"></iconify-icon>
</div>
<span className="text-[10px] text-orange-400 bg-orange-500/10 px-1.5 py-0.5 rounded">3 pending</span>
</div>
<div className="text-2xl font-medium text-white mb-1">89%</div>
<div className="text-[10px] text-zinc-500">Compliance Rate</div>
</div>
</div>

<div className="flex-1 glass-panel rounded-xl p-4 relative">
<div className="flex items-center justify-between mb-4">
<div className="text-xs font-medium text-zinc-300">Client Activity</div>
<div className="flex gap-2">
<div className="h-1.5 w-1.5 rounded-full bg-violet-500"></div>
<div className="text-[10px] text-zinc-500">Workouts</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-32 flex items-end justify-between px-4 pb-4 gap-1">
<div className="w-full bg-violet-500/20 rounded-t-sm h-[40%] hover:h-[45%] transition-all duration-300 hover:bg-violet-500/40"></div>
<div className="w-full bg-violet-500/20 rounded-t-sm h-[65%] hover:h-[70%] transition-all duration-300 hover:bg-violet-500/40"></div>
<div className="w-full bg-violet-500/20 rounded-t-sm h-[50%] hover:h-[55%] transition-all duration-300 hover:bg-violet-500/40"></div>
<div className="w-full bg-violet-500/20 rounded-t-sm h-[80%] hover:h-[85%] transition-all duration-300 hover:bg-violet-500/40"></div>
<div className="w-full bg-violet-500/20 rounded-t-sm h-[60%] hover:h-[65%] transition-all duration-300 hover:bg-violet-500/40"></div>
<div className="w-full bg-violet-500/20 rounded-t-sm h-[75%] hover:h-[80%] transition-all duration-300 hover:bg-violet-500/40"></div>
<div className="w-full bg-violet-500/20 rounded-t-sm h-[90%] hover:h-[95%] transition-all duration-300 hover:bg-violet-500/40 relative group/bar">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 text-[10px] px-2 py-1 rounded border border-zinc-700 opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap z-10">Peak Activity</div>
</div>
<div className="w-full bg-violet-500/10 rounded-t-sm h-[40%]"></div>
</div>

<svg className="absolute bottom-4 left-4 right-4 h-32 w-[calc(100%-2rem)] overflow-visible pointer-events-none" preserveaspectratio="none">
<defs>
<lineargradient id="gradientLine" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#8b5cf6" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,100 C50,80 100,60 150,80 C200,100 250,20 300,40 C350,60 400,30 450,50 C500,70 550,10 600,30 L600,130 L0,130 Z" fill="url(#gradientLine)"></path>
<path d="M0,100 C50,80 100,60 150,80 C200,100 250,20 300,40 C350,60 400,30 450,50 C500,70 550,10 600,30" fill="none" stroke="#8b5cf6" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
</div>

<div className="absolute top-20 right-10 animate-float">
<div className="glass-panel px-3 py-2 rounded-lg flex items-center gap-2 shadow-xl border-l-2 border-l-emerald-500">
<div className="w-6 h-6 rounded-full bg-zinc-800 overflow-hidden">
<img alt="" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div className="flex flex-col">
<span className="text-[10px] font-medium text-white">Sarah completed "Leg Day"</span>
<span className="text-[8px] text-zinc-500">Just now</span>
</div>
</div>
</div>
<div className="absolute bottom-20 left-10 animate-float-delayed z-20">
<div className="glass-panel px-3 py-2 rounded-lg flex items-center gap-2 shadow-xl border-l-2 border-l-violet-500">
<div className="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center">
<iconify-icon className="text-violet-400 text-xs" icon="solar:chat-round-line-bold-duotone"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[10px] font-medium text-white">New Check-in</span>
<span className="text-[8px] text-zinc-500">Review pending</span>
</div>
</div>
</div>
</div>

<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 bg-gradient-to-tr from-white/5 to-transparent opacity-50"></div>
</div>
</div>

<div className="mt-24 sm:mt-32">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-8">Trusted by coaches from top organizations</p>
<div className="relative w-full overflow-hidden mask-image-gradient">
<style>.mask-image-gradient { mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent); -webkit-mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent); }</style>
<div className="flex w-max items-center gap-12 animate-marquee">

<div className="flex items-center gap-16 opacity-40 hover:opacity-80 transition-opacity duration-300 grayscale hover:grayscale-0">
<iconify-icon className="text-white" height="48" icon="simple-icons:nasa" width="48"></iconify-icon>
<iconify-icon className="text-white" height="48" icon="simple-icons:spacex" width="48"></iconify-icon>
<iconify-icon className="text-white" height="48" icon="simple-icons:uber" width="48"></iconify-icon>
<iconify-icon className="text-white" height="48" icon="simple-icons:visa" width="48"></iconify-icon>
<iconify-icon className="text-white" height="48" icon="simple-icons:grab" width="48"></iconify-icon>
<iconify-icon className="text-white" height="48" icon="simple-icons:bose" width="48"></iconify-icon>
<iconify-icon className="text-white" height="48" icon="simple-icons:discover" width="48"></iconify-icon>
<iconify-icon className="text-white" height="48" icon="simple-icons:dji" width="48"></iconify-icon>
<iconify-icon className="text-white" height="48" icon="simple-icons:nikon" width="48"></iconify-icon>
<iconify-icon className="text-white" height="48" icon="simple-icons:craftsman" width="48"></iconify-icon>
<iconify-icon className="text-white" height="48" icon="simple-icons:sony" width="48"></iconify-icon>
</div>

<div aria-hidden="true" className="flex items-center gap-16 opacity-40 hover:opacity-80 transition-opacity duration-300 grayscale hover:grayscale-0">
<iconify-icon className="text-white" height="48" icon="simple-icons:nasa" width="48"></iconify-icon>
<iconify-icon className="text-white" height="48" icon="simple-icons:spacex" width="48"></iconify-icon>
<iconify-icon className="text-white" height="48" icon="simple-icons:uber" width="48"></iconify-icon>
<iconify-icon className="text-white" height="48" icon="simple-icons:visa" width="48"></iconify-icon>
<iconify-icon className="text-white" height="48" icon="simple-icons:grab" width="48"></iconify-icon>
<iconify-icon className="text-white" height="48" icon="simple-icons:bose" width="48"></iconify-icon>
<iconify-icon className="text-white" height="48" icon="simple-icons:discover" width="48"></iconify-icon>
<iconify-icon className="text-white" height="48" icon="simple-icons:dji" width="48"></iconify-icon>
<iconify-icon className="text-white" height="48" icon="simple-icons:nikon" width="48"></iconify-icon>
<iconify-icon className="text-white" height="48" icon="simple-icons:craftsman" width="48"></iconify-icon>
<iconify-icon className="text-white" height="48" icon="simple-icons:sony" width="48"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-white/5 py-8 text-center">
<div className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest">
            Designed for the future of coaching
        </div>
</footer>



    </>
  );
}
