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
      

<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
<div className="absolute -top-[10%] left-[20%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
<div className="absolute top-[40%] -right-[10%] w-[600px] h-[600px] bg-fuchsia-600/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]"></div>
<div className="absolute inset-0 grid-bg opacity-20"></div>
</div>
<div className="relative z-10 p-4 md:p-8 max-w-[1600px] mx-auto space-y-8">

<header className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-4 glass-panel rounded-3xl p-6 flex flex-col justify-center relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-24 h-24 text-white" data-lucide="wallet"></i>
</div>
<h1 className="text-slate-400 text-base font-medium mb-1">Welcome Back, Michael</h1>
<div className="flex items-baseline gap-2">
<span className="text-slate-400 text-lg font-light">Total Balance:</span>
<span className="text-3xl lg:text-4xl font-semibold text-white tracking-tight neon-text-cyan">$12,850.75</span>
</div>
</div>

<div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">

<div className="glass-panel rounded-3xl p-5 flex flex-col justify-between hover:bg-white/5 transition-colors cursor-pointer">
<div className="flex items-center gap-2 mb-2">
<div className="p-1.5 rounded-full bg-emerald-500/20 text-emerald-400">
<i className="w-4 h-4" data-lucide="arrow-up"></i>
</div>
<span className="text-slate-300 text-sm font-medium">Income</span>
</div>
<div className="flex items-end justify-between">
<span className="text-2xl font-semibold text-white tracking-tight">$5,200</span>
<span className="text-emerald-400 text-xs font-medium">+12%</span>
</div>
</div>

<div className="glass-panel rounded-3xl p-5 flex flex-col justify-between hover:bg-white/5 transition-colors cursor-pointer">
<div className="flex items-center gap-2 mb-2">
<div className="p-1.5 rounded-full bg-rose-500/20 text-rose-400">
<i className="w-4 h-4" data-lucide="arrow-down"></i>
</div>
<span className="text-slate-300 text-sm font-medium">Expenses</span>
</div>
<div className="flex items-end justify-between">
<span className="text-2xl font-semibold text-white tracking-tight">$2,450</span>
<span className="text-rose-400 text-xs font-medium">+5%</span>
</div>
</div>

<div className="glass-panel rounded-3xl p-5 flex flex-col justify-between hover:bg-white/5 transition-colors cursor-pointer">
<div className="flex items-center gap-2 mb-2">
<div className="p-1.5 rounded-full bg-cyan-500/20 text-cyan-400">
<i className="w-4 h-4" data-lucide="piggy-bank"></i>
</div>
<span className="text-slate-300 text-sm font-medium">Savings</span>
</div>
<div className="flex items-end justify-between">
<span className="text-2xl font-semibold text-white tracking-tight">$8,500</span>
<i className="w-5 h-5 text-slate-500" data-lucide="chevron-right"></i>
</div>
</div>

<div className="hidden sm:flex absolute top-8 right-8 z-20">
<button className="glass-panel px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium hover:bg-white/10 transition-colors">
<i className="w-4 h-4" data-lucide="settings"></i>
<span>Settings</span>
<i className="w-3 h-3 ml-1 opacity-50" data-lucide="chevron-down"></i>
</button>
</div>
</div>
</header>

<main className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<section className="lg:col-span-5 space-y-8">

<div className="space-y-6 perspective-[1000px]">

<div className="glass-card-blue rounded-3xl p-6 h-56 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500">
<div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
<div className="flex justify-between items-start mb-10">
<div>
<h3 className="text-white font-bold text-xl italic tracking-wider">VISA</h3>
<p className="text-white/60 text-[10px] font-medium tracking-widest uppercase">Platinum</p>
</div>
<i className="w-6 h-6 text-white/80 rotate-45" data-lucide="rss"></i>
</div>
<div className="mb-6">
<p className="font-mono text-xl md:text-2xl text-white tracking-widest drop-shadow-md">4321  9876  5432  2109</p>
</div>
<div className="flex justify-between items-end">
<div>
<p className="text-[10px] text-white/60 tracking-wider uppercase mb-1">Card Holder</p>
<p className="text-sm font-medium text-white tracking-wide uppercase">Michael Smith</p>
</div>
<div className="text-right mr-4">
<p className="text-[10px] text-white/60 tracking-wider uppercase mb-1">Expires</p>
<p className="text-sm font-medium text-white tracking-wide">12/25</p>
</div>

<div className="flex -space-x-3 opacity-90">
<div className="w-8 h-8 rounded-full bg-red-500/80 mix-blend-screen"></div>
<div className="w-8 h-8 rounded-full bg-yellow-500/80 mix-blend-screen"></div>
</div>
</div>
</div>

<div className="glass-card-pink rounded-3xl p-6 h-56 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500">
<div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-400/20 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none"></div>
<div className="flex justify-between items-start mb-10">
<div className="flex -space-x-4 opacity-90">
<div className="w-10 h-10 rounded-full bg-red-500/80 mix-blend-overlay"></div>
<div className="w-10 h-10 rounded-full bg-yellow-500/80 mix-blend-overlay"></div>
</div>
<i className="w-6 h-6 text-white/80 rotate-45" data-lucide="rss"></i>
</div>
<div className="mb-6">
<p className="font-mono text-xl md:text-2xl text-white tracking-widest drop-shadow-md">5534  1234  5678  9012</p>
</div>
<div className="flex justify-between items-end">
<div>
<p className="text-[10px] text-white/60 tracking-wider uppercase mb-1">Card Holder</p>
<p className="text-sm font-medium text-white tracking-wide uppercase">Micheel Smith</p>
</div>
<div className="text-right mr-4">
<p className="text-[10px] text-white/60 tracking-wider uppercase mb-1">Expires</p>
<p className="text-sm font-medium text-white tracking-wide">11/24</p>
</div>
<div className="flex -space-x-3 opacity-90">
<div className="w-8 h-8 rounded-full bg-red-500/80 mix-blend-screen"></div>
<div className="w-8 h-8 rounded-full bg-yellow-500/80 mix-blend-screen"></div>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-3xl p-6 overflow-hidden">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-semibold text-white tracking-tight">Recent Transactions</h3>
<button className="text-xs text-cyan-400 hover:text-cyan-300 font-medium transition-colors">View All</button>
</div>
<div className="space-y-4">

<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/30 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.2)]">
<i className="w-5 h-5" data-lucide="shopping-cart"></i>
</div>
<div>
<p className="text-sm font-medium text-white">Amazon Purchase</p>
<p className="text-xs text-slate-400">Mar 18</p>
</div>
</div>
<span className="text-sm font-medium text-white">-$120.50</span>
</div>
<div className="h-px bg-white/5 w-full"></div>

<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 group-hover:bg-fuchsia-500/30 transition-colors shadow-[0_0_15px_rgba(217,70,239,0.2)]">
<i className="w-5 h-5" data-lucide="car"></i>
</div>
<div>
<p className="text-sm font-medium text-white">Uber Ride</p>
<p className="text-xs text-slate-400">Mar 17</p>
</div>
</div>
<span className="text-sm font-medium text-white">-$28.75</span>
</div>
<div className="h-px bg-white/5 w-full"></div>

<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400 group-hover:bg-orange-500/30 transition-colors shadow-[0_0_15px_rgba(249,115,22,0.2)]">
<i className="w-5 h-5" data-lucide="utensils"></i>
</div>
<div>
<p className="text-sm font-medium text-white">Restaurant Dinner</p>
<p className="text-xs text-slate-400">Mar 16</p>
</div>
</div>
<span className="text-sm font-medium text-white">-$85.20</span>
</div>
<div className="h-px bg-white/5 w-full"></div>

<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/30 transition-colors shadow-[0_0_15px_rgba(99,102,241,0.2)]">
<i className="w-5 h-5" data-lucide="dumbbell"></i>
</div>
<div>
<p className="text-sm font-medium text-white">Gym Membership</p>
<p className="text-xs text-slate-400">Mar 14</p>
</div>
</div>
<span className="text-sm font-medium text-white">-$45.00</span>
</div>
<div className="h-px bg-white/5 w-full"></div>

<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/30 transition-colors shadow-[0_0_15px_rgba(6,182,212,0.2)]">
<i className="w-5 h-5" data-lucide="arrow-down-left"></i>
</div>
<div>
<p className="text-sm font-medium text-white">PayPal Transfer</p>
<p className="text-xs text-slate-400">Mar 12</p>
</div>
</div>
<span className="text-sm font-medium text-emerald-400">+$500.00</span>
</div>
</div>
</div>
</section>

<section className="lg:col-span-7 space-y-8 h-full flex flex-col">

<div className="glass-panel rounded-3xl p-6 md:p-8 flex-1 relative overflow-hidden">
<h3 className="text-lg font-semibold text-white tracking-tight mb-8">Spending Overview</h3>
<div className="relative w-full h-64">

<div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-slate-500 font-medium z-10">
<span>3K</span>
<span>2K</span>
<span>1K</span>
<span>0</span>
</div>

<div className="absolute left-8 right-0 top-2 bottom-8 flex flex-col justify-between z-0 pointer-events-none">
<div className="border-b border-dashed border-white/5 w-full"></div>
<div className="border-b border-dashed border-white/5 w-full"></div>
<div className="border-b border-dashed border-white/5 w-full"></div>
<div className="border-b border-white/10 w-full"></div>
</div>

<svg className="absolute left-8 right-0 top-2 bottom-8 w-[calc(100%-2rem)] h-[calc(100%-2.5rem)] overflow-visible" preserveaspectratio="none" viewbox="0 0 100 50">
<defs>
<lineargradient id="gradientCyan" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#22d3ee" stop-opacity="0.5"></stop>
<stop offset="100%" stop-color="#22d3ee" stop-opacity="0"></stop>
</lineargradient>
<lineargradient id="gradientPink" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#d946ef" stop-opacity="0.5"></stop>
<stop offset="100%" stop-color="#d946ef" stop-opacity="0"></stop>
</lineargradient>
<filter height="200%" id="glowCyan" width="200%" x="-50%" y="-50%">
<fegaussianblur result="coloredBlur" stddeviation="2"></fegaussianblur>
<femerge>
<femergenode in="coloredBlur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
<filter height="200%" id="glowPink" width="200%" x="-50%" y="-50%">
<fegaussianblur result="coloredBlur" stddeviation="2"></fegaussianblur>
<femerge>
<femergenode in="coloredBlur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>

<path d="M0,50 L0,45 C10,40 20,20 35,25 C50,30 60,10 75,20 C90,30 100,5 100,5 L100,50 Z" fill="url(#gradientCyan)" opacity="0.6"></path>

<path d="M0,45 C10,40 20,20 35,25 C50,30 60,10 75,20 C90,30 100,5 100,5" fill="none" filter="url(#glowCyan)" stroke="#22d3ee" strokeWidth="0.8"></path>

<path d="M0,50 L0,50 C15,48 25,35 40,40 C55,45 65,25 80,35 C95,45 100,20 100,20 L100,50 Z" fill="url(#gradientPink)" opacity="0.6"></path>

<path d="M0,50 C15,48 25,35 40,40 C55,45 65,25 80,35 C95,45 100,20 100,20" fill="none" filter="url(#glowPink)" stroke="#d946ef" strokeWidth="0.8"></path>

<circle cx="75" cy="20" fill="#fff" filter="url(#glowCyan)" r="1.5"></circle>
<circle cx="80" cy="35" fill="#fff" filter="url(#glowPink)" r="1.5"></circle>
</svg>

<div className="absolute left-8 right-0 bottom-0 flex justify-between text-xs text-slate-400 font-medium px-2">
<span>Jan</span>
<span>Feb</span>
<span>Mar</span>
<span>Apr</span>
<span>May</span>
</div>
</div>
</div>

<div className="glass-panel rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center justify-between flex-1">
<div className="flex-1 w-full">
<h3 className="text-lg font-semibold text-white tracking-tight mb-6">Category Breakdown</h3>
<div className="space-y-4">
<div className="flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></div>
<span className="text-sm font-medium text-slate-300">Shopping</span>
</div>
<span className="text-sm font-semibold text-white">35%</span>
</div>
<div className="flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-fuchsia-400 shadow-[0_0_8px_#d946ef]"></div>
<span className="text-sm font-medium text-slate-300">Food &amp; Dining</span>
</div>
<span className="text-sm font-semibold text-white">25%</span>
</div>
<div className="flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_8px_#a78bfa]"></div>
<span className="text-sm font-medium text-slate-300">Travel</span>
</div>
<span className="text-sm font-semibold text-white">20%</span>
</div>
<div className="flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_8px_#818cf8]"></div>
<span className="text-sm font-medium text-slate-300">Bills</span>
</div>
<span className="text-sm font-semibold text-white">15%</span>
</div>
</div>
</div>

<div className="relative w-48 h-48 flex-shrink-0">
<svg className="transform -rotate-90 w-full h-full drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]" viewbox="0 0 100 100">

<circle className="opacity-90" cx="50" cy="50" fill="transparent" r="40" stroke="#818cf8" stroke-dasharray="15 85" stroke-dashoffset="0" strokeWidth="12"></circle>

<circle className="opacity-90" cx="50" cy="50" fill="transparent" r="40" stroke="#a78bfa" stroke-dasharray="20 80" stroke-dashoffset="-18" strokeWidth="12"></circle>

<circle className="opacity-90" cx="50" cy="50" fill="transparent" r="40" stroke="#d946ef" stroke-dasharray="25 75" stroke-dashoffset="-41" strokeWidth="12"></circle>

<circle className="opacity-90" cx="50" cy="50" fill="transparent" r="40" stroke="#22d3ee" stroke-dasharray="35 65" stroke-dashoffset="-69" strokeWidth="12"></circle>
</svg>

<div className="absolute inset-0 m-auto w-24 h-24 bg-slate-900/50 rounded-full backdrop-blur-md shadow-inner border border-white/5"></div>
</div>
</div>
</section>
</main>
</div>


    </>
  );
}
