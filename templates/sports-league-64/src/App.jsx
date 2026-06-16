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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white group-hover:bg-indigo-600 transition-colors duration-300">
<span className="font-semibold tracking-tighter text-lg">H</span>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">Huddle</span>
</a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#product">Product</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#leagues">For Leagues</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#players">For Players</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
</div>
</div>
<div className="flex items-center gap-3">
<a className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900" href="#">Log in</a>
<a className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-full transition-all shadow-sm hover:shadow-md flex items-center gap-2" href="#">
                    Get Started
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden hero-bg">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="relative z-10 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-xs font-medium text-slate-600 uppercase tracking-wide">New: Automated Referee Assignments</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
                    Run your league.<br/>
<span className="text-slate-400">Find your game.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-8 max-w-lg">
                    The complete operating system for recreational sports. Manage registrations, payments, and schedules effortlessly, or find your next pickup game instantly.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-slate-900 text-white px-6 py-3.5 rounded-full font-medium text-sm hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-200">
                        Start a League
                        <iconify-icon icon="lucide:trophy" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="bg-white text-slate-700 border border-slate-200 px-6 py-3.5 rounded-full font-medium text-sm hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2">
                        Download Player App
                        <iconify-icon icon="lucide:smartphone" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
<div className="mt-12 flex items-center gap-4 text-sm text-slate-500 font-medium">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-indigo-100 border-2 border-white flex items-center justify-center text-indigo-700 text-xs font-bold">JD</div>
<div className="w-8 h-8 rounded-full bg-teal-100 border-2 border-white flex items-center justify-center text-teal-700 text-xs font-bold">AL</div>
<div className="w-8 h-8 rounded-full bg-rose-100 border-2 border-white flex items-center justify-center text-rose-700 text-xs font-bold">MK</div>
</div>
<p>Trusted by 2,000+ local leagues</p>
</div>
</div>

<div className="relative z-10 lg:h-[600px] w-full flex items-center justify-center lg:justify-end perspective-[1000px]">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[90%] rotate-3 rounded-[40px] overflow-hidden -z-10 shadow-2xl opacity-90 border-4 border-white/50">
<img alt="Team Huddle" className="w-full h-full object-cover opacity-90 grayscale-[20%]" src="https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply"></div>
</div>

<div className="relative w-full max-w-md bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700 ease-out backdrop-blur-sm bg-white/95">

<div className="h-12 border-b border-slate-100 flex items-center px-4 justify-between bg-slate-50/50">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
</div>
<div className="text-xs font-medium text-slate-400">Dashboard</div>
</div>

<div className="p-6">
<div className="flex justify-between items-end mb-6">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Total Revenue</p>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight">$24,500.00</h3>
</div>
<div className="bg-emerald-50 text-emerald-600 px-2 py-1 rounded text-xs font-medium">+12% vs last season</div>
</div>

<div className="h-24 flex items-end gap-2 mb-8">
<div className="w-full bg-slate-100 rounded-sm h-[40%]"></div>
<div className="w-full bg-slate-100 rounded-sm h-[60%]"></div>
<div className="w-full bg-slate-100 rounded-sm h-[45%]"></div>
<div className="w-full bg-slate-100 rounded-sm h-[70%]"></div>
<div className="w-full bg-slate-100 rounded-sm h-[55%]"></div>
<div className="w-full bg-indigo-500 rounded-sm h-[85%] relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    Current Season
                                </div>
</div>
<div className="w-full bg-slate-100 rounded-sm h-[65%]"></div>
</div>

<div className="space-y-3">
<p className="text-xs font-medium text-slate-500 mb-2">Upcoming Games</p>

<div className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors bg-slate-50/30">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 overflow-hidden relative">
<img alt="Bball" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1546519638-68e109498ad0?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Raptors vs. Heat</p>
<p className="text-xs text-slate-500">Court 4 • 7:00 PM</p>
</div>
</div>
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
</div>

<div className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors bg-slate-50/30">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 overflow-hidden">
<img alt="Soccer" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1579952363873-27f3bde9be28?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Thunder vs. Storm</p>
<p className="text-xs text-slate-500">Field 2 • 8:15 PM</p>
</div>
</div>
<span className="w-2 h-2 rounded-full bg-amber-400"></span>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-6 -left-6 md:left-0 md:bottom-12 w-48 bg-slate-900 rounded-2xl p-4 shadow-2xl border border-slate-700">
<div className="flex items-center justify-between mb-4">
<div className="text-white text-xs font-medium">Pickup Nearby</div>
<iconify-icon className="text-indigo-400" icon="lucide:map-pin" width="12"></iconify-icon>
</div>
<div className="space-y-2">
<div className="bg-slate-800 p-2 rounded-lg border border-slate-700 relative overflow-hidden group cursor-pointer">
<img alt="Soccer" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity" src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10">
<div className="flex justify-between items-start mb-1">
<div className="text-[10px] text-white font-medium">5v5 Soccer</div>
<div className="text-[10px] text-indigo-400">2 spots</div>
</div>
<div className="w-full bg-slate-700 h-1 rounded-full overflow-hidden">
<div className="bg-indigo-500 w-3/4 h-full"></div>
</div>
</div>
</div>
<div className="bg-slate-800 p-2 rounded-lg border border-slate-700 opacity-60">
<div className="flex justify-between items-start mb-1">
<div className="text-[10px] text-slate-300 font-medium">Hoops Run</div>
<div className="text-[10px] text-slate-500">Full</div>
</div>
<div className="w-full bg-slate-700 h-1 rounded-full overflow-hidden">
<div className="bg-slate-500 w-full h-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-100 bg-slate-50/50 py-10">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-slate-400 mb-6">POWERING COMMUNITIES EVERYWHERE</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 font-bold text-xl tracking-tighter text-slate-800">
<iconify-icon icon="lucide:hexagon" width="24"></iconify-icon> UrbanRec
                </div>
<div className="flex items-center gap-2 font-bold text-xl tracking-tighter text-slate-800">
<iconify-icon icon="lucide:activity" width="24"></iconify-icon> PULSE
                </div>
<div className="flex items-center gap-2 font-bold text-xl tracking-tighter text-slate-800">
<iconify-icon icon="lucide:wind" width="24"></iconify-icon> AIRLEAGUE
                </div>
<div className="flex items-center gap-2 font-bold text-xl tracking-tighter text-slate-800">
<iconify-icon icon="lucide:zap" width="24"></iconify-icon> KINETIC
                </div>
<div className="flex items-center gap-2 font-bold text-xl tracking-tighter text-slate-800">
<iconify-icon icon="lucide:anchor" width="24"></iconify-icon> PORTCITY
                </div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden" id="leagues">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 flex justify-between items-end">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Leagues for every sport.</h2>
<p className="text-lg text-slate-500">Designed to handle the specific rules and rosters of your game.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700" href="#">
                    View all sports <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<a className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer" href="#">
<img alt="Basketball" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1543326727-695249f29bb7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4">
<div className="text-white font-semibold text-lg flex items-center gap-2">
<iconify-icon icon="lucide:dribbble" width="18"></iconify-icon> Basketball
                        </div>
</div>
</a>

<a className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer" href="#">
<img alt="Soccer" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4">
<div className="text-white font-semibold text-lg flex items-center gap-2">
<iconify-icon icon="lucide:disc" width="18"></iconify-icon> Soccer
                        </div>
</div>
</a>

<a className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer" href="#">
<img alt="Tennis" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4">
<div className="text-white font-semibold text-lg flex items-center gap-2">
<iconify-icon icon="lucide:circle-dot" width="18"></iconify-icon> Tennis
                        </div>
</div>
</a>

<a className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer" href="#">
<img alt="Volleyball" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1593787406536-3676a152d9cb?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4">
<div className="text-white font-semibold text-lg flex items-center gap-2">
<iconify-icon icon="lucide:volleyball" width="18"></iconify-icon> Volleyball
                        </div>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Everything you need to run the game.</h2>
<p className="text-lg text-slate-500">
                    Whether you are organizing a 100-team league or just looking for a 4th player for tennis, Huddle provides the infrastructure.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">

<div className="md:col-span-2 bg-white rounded-3xl border border-slate-200 overflow-hidden group hover:border-indigo-200 transition-colors relative shadow-sm">
<div className="p-8">
<div className="w-10 h-10 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-center text-indigo-600 mb-4 shadow-sm">
<iconify-icon icon="lucide:calendar-clock" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-2">Smart Scheduling</h3>
<p className="text-sm text-slate-500 max-w-sm">Auto-generate fixtures based on venue availability, blackout dates, and team preferences.</p>
</div>

<div className="absolute bottom-0 right-0 w-[80%] h-[60%] bg-slate-50 rounded-tl-2xl border-t border-l border-slate-200 shadow-sm p-4 translate-y-4 translate-x-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500">

<div className="grid grid-cols-4 gap-2 h-full">
<div className="col-span-1 border-r border-slate-200 pr-2 space-y-2">
<div className="h-6 w-full bg-slate-200 rounded"></div>
<div className="h-6 w-3/4 bg-white border border-slate-100 rounded"></div>
<div className="h-6 w-5/6 bg-white border border-slate-100 rounded"></div>
</div>
<div className="col-span-3 space-y-3 pt-2">
<div className="flex gap-2">
<div className="h-16 w-full bg-indigo-50 border border-indigo-100 rounded-md p-2">
<div className="w-16 h-2 bg-indigo-200 rounded mb-1"></div>
<div className="w-24 h-2 bg-indigo-200 rounded opacity-50"></div>
</div>
<div className="h-16 w-full bg-white border border-dashed border-slate-200 rounded-md flex items-center justify-center text-slate-300">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</div>
</div>
<div className="h-16 w-2/3 bg-emerald-50 border border-emerald-100 rounded-md p-2">
<div className="w-16 h-2 bg-emerald-200 rounded mb-1"></div>
</div>
</div>
</div>
</div>
</div>

<div className="md:row-span-2 bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden relative group">
<div className="p-8 relative z-10">
<div className="w-10 h-10 bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center text-indigo-400 mb-4 shadow-sm">
<iconify-icon icon="lucide:credit-card" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2">Collect Payments</h3>
<p className="text-sm text-slate-400">Automated invoicing, team fees, and referee payouts. Handle all financials in one place.</p>
</div>

<div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
<div className="absolute top-[180px] left-1/2 -translate-x-1/2 w-[85%] bg-slate-800 rounded-xl border border-slate-700 p-4 shadow-2xl">
<div className="flex justify-between items-center mb-4 border-b border-slate-700 pb-2">
<span className="text-xs text-slate-400">Invoice #0024</span>
<span className="text-xs text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">Paid</span>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-slate-600"></div>
<span className="text-xs text-slate-300">League Reg</span>
</div>
<span className="text-xs text-white font-mono">$1,200.00</span>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-slate-600"></div>
<span className="text-xs text-slate-300">Uniforms</span>
</div>
<span className="text-xs text-white font-mono">$450.00</span>
</div>
</div>
<div className="mt-4 pt-3 border-t border-slate-700 flex justify-between">
<span className="text-xs text-slate-400">Total</span>
<span className="text-sm font-semibold text-white">$1,650.00</span>
</div>

<div className="absolute -right-2 -top-2 bg-indigo-500 rounded-full p-1.5 shadow-lg shadow-indigo-500/50">
<iconify-icon className="text-white" icon="lucide:check" width="12"></iconify-icon>
</div>
</div>
</div>

<div className="bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 p-8 flex flex-col justify-between relative group">
<div className="relative z-10">
<div className="w-10 h-10 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-center text-rose-500 mb-4 shadow-sm">
<iconify-icon icon="lucide:user" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-2">Player Pass</h3>
<p className="text-sm text-slate-500">Digital IDs, stats tracking, and waiver management.</p>
</div>

<div className="absolute right-0 bottom-0 w-32 h-32 opacity-10 grayscale group-hover:grayscale-0 group-hover:opacity-20 transition-all duration-500">
<img alt="Swimmer" className="w-full h-full object-cover rounded-tl-3xl" src="https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-6 flex items-center gap-3 relative z-10">
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white bg-slate-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white bg-slate-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white bg-slate-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Zack"/>
</div>
<span className="text-xs font-medium text-slate-400">+42 others</span>
</div>
</div>

<div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden hover:shadow-lg transition-shadow duration-300 relative group">

<img alt="Outdoor Court" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1546519638-68e109498ad0?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
<div className="relative z-10 p-8 h-full flex flex-col justify-end">
<div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-lg border border-white/10 flex items-center justify-center text-white mb-4 shadow-sm">
<iconify-icon icon="lucide:map" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2">Pickup Finder</h3>
<p className="text-sm text-slate-300">Find open games near you instantly. Filter by sport, level, and location.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Built for both sides of the whistle.</h2>

<div className="inline-flex bg-white border border-slate-200 rounded-full p-1 shadow-sm relative">
<div className="w-1/2 h-full absolute left-0 top-0 bg-transparent"></div> 
<button className="px-6 py-2 rounded-full text-sm font-medium text-slate-900 bg-slate-100 shadow-sm transition-all relative z-10 border border-slate-200/50">Admin View</button>
<button className="px-6 py-2 rounded-full text-sm font-medium text-slate-500 hover:text-slate-900 transition-all relative z-10">Player View</button>
</div>
</div>
<div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden grid md:grid-cols-12 max-w-5xl mx-auto">

<div className="md:col-span-3 bg-slate-50 border-r border-slate-200 p-4 hidden md:block">
<div className="flex items-center gap-2 mb-6 px-2">
<div className="w-6 h-6 bg-indigo-600 rounded text-white flex items-center justify-center text-xs font-bold">L</div>
<span className="text-sm font-semibold text-slate-900">League Admin</span>
</div>
<div className="space-y-1">
<div className="px-3 py-2 bg-white border border-slate-200 rounded-md shadow-sm text-xs font-medium text-slate-900 flex items-center justify-between">
                            Dashboard
                            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
</div>
<div className="px-3 py-2 text-xs font-medium text-slate-500 hover:bg-slate-100 rounded-md cursor-pointer">Teams &amp; Rosters</div>
<div className="px-3 py-2 text-xs font-medium text-slate-500 hover:bg-slate-100 rounded-md cursor-pointer">Venues</div>
<div className="px-3 py-2 text-xs font-medium text-slate-500 hover:bg-slate-100 rounded-md cursor-pointer">Referees</div>
<div className="px-3 py-2 text-xs font-medium text-slate-500 hover:bg-slate-100 rounded-md cursor-pointer">Financials</div>
</div>
<div className="mt-8 px-2">
<div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Live Games</div>
<div className="flex items-center gap-2 text-xs text-slate-600 mb-2">
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            Field 1: 2-1
                        </div>
<div className="flex items-center gap-2 text-xs text-slate-600">
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            Court 3: 45-42
                        </div>
</div>
</div>

<div className="md:col-span-9 p-8">
<div className="flex justify-between items-center mb-8">
<div>
<h3 className="text-lg font-semibold text-slate-900">Registration Overview</h3>
<p className="text-sm text-slate-500">Fall 2024 Season</p>
</div>
<button className="bg-indigo-600 text-white text-xs font-medium px-3 py-1.5 rounded-md hover:bg-indigo-700 transition-colors">
                            Export Data
                        </button>
</div>
<div className="grid grid-cols-3 gap-4 mb-8">
<div className="p-4 border border-slate-200 rounded-lg">
<div className="text-xs text-slate-500 mb-1">Teams Registered</div>
<div className="text-2xl font-semibold text-slate-900">24<span className="text-slate-400 text-sm font-normal">/32</span></div>
</div>
<div className="p-4 border border-slate-200 rounded-lg">
<div className="text-xs text-slate-500 mb-1">Free Agents</div>
<div className="text-2xl font-semibold text-slate-900">142</div>
</div>
<div className="p-4 border border-slate-200 rounded-lg">
<div className="text-xs text-slate-500 mb-1">Payments Collected</div>
<div className="text-2xl font-semibold text-slate-900">86%</div>
</div>
</div>

<div className="border border-slate-200 rounded-lg overflow-hidden">
<div className="grid grid-cols-4 bg-slate-50 border-b border-slate-200 px-4 py-2 text-xs font-medium text-slate-500">
<div className="col-span-2">Team Name</div>
<div>Captain</div>
<div className="text-right">Status</div>
</div>
<div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between text-sm">
<div className="w-1/2 font-medium text-slate-900">Northside Kickers</div>
<div className="w-1/4 text-slate-500">Sarah J.</div>
<div className="w-1/4 text-right"><span className="bg-emerald-100 text-emerald-700 text-[10px] px-2 py-0.5 rounded-full font-medium">Approved</span></div>
</div>
<div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between text-sm">
<div className="w-1/2 font-medium text-slate-900">Downtown Dunkers</div>
<div className="w-1/4 text-slate-500">Mike R.</div>
<div className="w-1/4 text-right"><span className="bg-amber-100 text-amber-700 text-[10px] px-2 py-0.5 rounded-full font-medium">Pending</span></div>
</div>
<div className="px-4 py-3 flex items-center justify-between text-sm">
<div className="w-1/2 font-medium text-slate-900">Volley Vipers</div>
<div className="w-1/4 text-slate-500">Alex T.</div>
<div className="w-1/4 text-right"><span className="bg-emerald-100 text-emerald-700 text-[10px] px-2 py-0.5 rounded-full font-medium">Approved</span></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden">

<img alt="Stadium" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="flex justify-center mb-8 text-indigo-400">
<iconify-icon icon="lucide:quote" width="32"></iconify-icon>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight mb-8">
                "Huddle cut our administrative time by 70%. What used to take spreadsheets and endless emails is now handled automatically. It's a game changer."
            </h2>
<div className="flex flex-col items-center">
<div className="w-12 h-12 bg-slate-700 rounded-full mb-3 overflow-hidden border-2 border-slate-600">
<img alt="Testimonial" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"/>
</div>
<div className="font-semibold text-lg">Marcus Chen</div>
<div className="text-slate-400 text-sm">Commissioner, Metro Basketball League</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-indigo-600 rounded-3xl p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">

<div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
<svg height="100%" width="100%">
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"></path>
</pattern>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Ready to upgrade your league?</h2>
<p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">Join thousands of commissioners and players using Huddle to simplify the game. Free for pickup players, powerful tools for leagues.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-sm hover:bg-indigo-50 transition-all shadow-lg">
                            Get Started for Free
                        </button>
<button className="bg-indigo-700 text-white border border-indigo-500 px-8 py-4 rounded-full font-semibold text-sm hover:bg-indigo-800 transition-all">
                            Schedule Demo
                        </button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2 pr-8">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
<span className="font-semibold tracking-tighter text-xs">H</span>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">Huddle</span>
</div>
<p className="text-sm text-slate-500 mb-6 max-w-xs">
                        The operating system for recreational sports. Making it easier to organize, pay, and play.
                    </p>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Product</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">League Management</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Payment Processing</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Scheduling</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Player App</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Pickup Finder</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Resources</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Rulebooks</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Community</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">About</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Legal</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 Huddle Sports Inc. All rights reserved.</p>
<div className="flex gap-6 text-xs text-slate-500">
<a className="hover:text-slate-900" href="#">Privacy Policy</a>
<a className="hover:text-slate-900" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
