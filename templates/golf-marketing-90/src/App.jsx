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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-slate-900 text-lg tracking-tighter font-semibold flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:rotate-12 transition-transform duration-500">
                    F
                </div>
                FAIRWAY.
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-cyan-600 transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-cyan-500 after:transition-all relative" href="#services">Services</a>
<a className="hover:text-cyan-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-cyan-500 after:transition-all" href="#methodology">The Approach</a>
<a className="hover:text-cyan-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-cyan-500 after:transition-all" href="#results">Scorecard</a>
</div>
<a className="hidden md:flex bg-slate-900 hover:bg-cyan-600 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all tracking-wide items-center gap-2 shadow-md hover:shadow-cyan-500/25 hover:-translate-y-0.5 duration-300 group" href="#contact">
                Book Tee Time
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>

<button className="md:hidden text-slate-900 text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<main className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-cyan-100/80 to-transparent rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-cyan-700 text-xs font-semibold mb-8 tracking-wide hover:scale-105 transition-transform cursor-default">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
</span>
                Accepting new partners for 2024 Season
            </div>
<h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter mb-6 leading-[1.05]">
                Driving growth for the <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-green-400">modern golf brand.</span>
</h1>
<p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
                We combine data-driven performance marketing with deep industry nuance. From equipment manufacturers to luxury resorts, we lower your handicap in the digital space.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20">
<button className="w-full md:w-auto bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-full text-sm font-semibold transition-all shadow-[0_10px_40px_-10px_rgba(16,185,129,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.6)] hover:-translate-y-1 tracking-tight flex items-center justify-center gap-2 group">
                    Start Your Campaign
                    <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
<button className="w-full md:w-auto px-8 py-4 rounded-full text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center gap-2 tracking-tight shadow-sm hover:shadow-md group">
<iconify-icon className="text-xl text-cyan-600 group-hover:scale-110 transition-transform" icon="solar:play-circle-linear"></iconify-icon>
                    View Case Studies
                </button>
</div>

<div className="relative h-[450px] md:h-[550px] w-full max-w-5xl mx-auto perspective-[2000px] mb-12 flex justify-center items-center pointer-events-none md:pointer-events-auto">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[80px] rounded-full -z-10"></div>

<div className="hidden md:block absolute left-[10%] xl:left-[15%] top-12 z-10 hover:z-30 transition-all duration-500">
<div className="animate-float-slow -rotate-12 hover:-rotate-6 hover:scale-105 transition-transform duration-500">
<div className="w-[260px] aspect-[9/19] bg-slate-900 rounded-[3rem] border-8 border-slate-900 shadow-2xl overflow-hidden relative">

<div className="w-full h-full bg-slate-800 relative group">
<video autoplay="" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&amp;w=600&amp;auto=format&amp;fit=crop">
<source src="https://assets.mixkit.co/videos/preview/mixkit-golf-player-swinging-club-at-sunset-40228-large.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none"></div>

<div className="absolute bottom-6 left-5 right-5 text-white">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-md"></div>
<div className="text-[10px] font-medium">@fairway_daily</div>
</div>
<div className="text-xs opacity-90 leading-tight">Improving mechanics one swing at a time 🏌️‍♂️</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden md:block absolute right-[10%] xl:right-[15%] top-16 z-10 hover:z-30 transition-all duration-500">
<div className="animate-float-delayed rotate-12 hover:rotate-6 hover:scale-105 transition-transform duration-500">
<div className="w-[260px] aspect-[9/19] bg-slate-900 rounded-[3rem] border-8 border-slate-900 shadow-2xl overflow-hidden relative">

<div className="w-full h-full bg-slate-800 relative group">
<video autoplay="" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1628243426757-b092b85bb4b9?q=80&amp;w=600&amp;auto=format&amp;fit=crop">
<source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-golf-course-40233-large.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none"></div>

<div className="absolute bottom-6 left-5 right-5 text-white">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-md"></div>
<div className="text-[10px] font-medium">@resort_life</div>
</div>
<div className="text-xs opacity-90 leading-tight">Top 10 Courses you must visit in 2024 🌴</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute z-20 top-0 transition-all duration-500">
<div className="animate-float hover:scale-[1.02] transition-transform duration-500">
<div className="w-[280px] md:w-[300px] aspect-[9/19] bg-slate-900 rounded-[3.5rem] border-[10px] border-slate-900 shadow-2xl shadow-cyan-900/20 overflow-hidden relative ring-1 ring-white/10">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-slate-900 rounded-b-2xl z-30 flex justify-center items-center">
<div className="w-16 h-4 bg-black rounded-full relative"></div>
</div>

<div className="w-full h-full bg-slate-800 relative">
<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&amp;w=600&amp;auto=format&amp;fit=crop">
<source src="https://assets.mixkit.co/videos/preview/mixkit-man-putting-a-golf-ball-on-a-green-40229-large.mp4" type="video/mp4"/>
</video>

<div className="absolute top-12 right-4 flex flex-col gap-3 z-20">
<div className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-cyan-600 transition-colors cursor-pointer">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-cyan-600 transition-colors cursor-pointer">
<iconify-icon icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-cyan-600 transition-colors cursor-pointer">
<iconify-icon icon="solar:share-linear" width="20"></iconify-icon>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent pt-20 text-white">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-xs font-bold border border-white/20">F</div>
<span className="text-sm font-semibold">Fairway Digital</span>
<button className="ml-auto text-xs bg-white text-slate-900 px-3 py-1 rounded-full font-bold">Follow</button>
</div>
<p className="text-sm font-light opacity-90">Mastering the short game with data analytics. ⛳️ #GolfLife #Putting</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-5xl mx-auto mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
<div className="shadow-slate-200/50 flex flex-col group hover:-translate-y-1 transition-transform duration-300 bg-white border-slate-100 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-xl items-center justify-center">
<div className="mb-3 p-3 bg-cyan-50 rounded-xl text-cyan-600 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
<span className="text-3xl font-bold text-slate-900 tracking-tighter mb-1">$40M+</span>
<span className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Revenue Generated</span>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-center justify-center group hover:-translate-y-1 transition-transform duration-300 delay-75">
<div className="mb-3 p-3 bg-cyan-50 rounded-xl text-cyan-600 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chart-2-linear" width="24"></iconify-icon>
</div>
<span className="text-3xl font-bold text-slate-900 tracking-tighter mb-1">3.5x</span>
<span className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Avg. ROAS</span>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-center justify-center group hover:-translate-y-1 transition-transform duration-300 delay-100">
<div className="mb-3 p-3 bg-cyan-50 rounded-xl text-cyan-600 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bag-3-linear" width="24"></iconify-icon>
</div>
<span className="text-3xl font-bold text-slate-900 tracking-tighter mb-1">85+</span>
<span className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Golf Brands</span>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-center justify-center group hover:-translate-y-1 transition-transform duration-300 delay-150">
<div className="mb-3 p-3 bg-cyan-50 rounded-xl text-cyan-600 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:cup-star-linear" width="24"></iconify-icon>
</div>
<span className="text-3xl font-bold text-slate-900 tracking-tighter mb-1">Top 1%</span>
<span className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Agency Ranking</span>
</div>
</div>
</main>

<section className="py-24 px-6 relative bg-white border-y border-slate-200" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row mb-16 gap-x-6 gap-y-6 items-end justify-between">
<div>
<span className="text-cyan-600 font-semibold tracking-wide text-xs uppercase mb-2 block">Our Expertise</span>
<h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tighter mb-4">What's in the Bag?</h2>
<p className="text-slate-500 max-w-md text-lg">Comprehensive digital tools tailored to the specific seasonality and purchasing behaviors of the golf consumer.</p>
</div>
<a className="text-slate-900 hover:text-cyan-600 text-sm font-semibold flex items-center gap-1 group bg-slate-100 hover:bg-cyan-50 px-4 py-2 rounded-full transition-colors" href="#">
                    View all services 
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-cyan-500 hover:bg-white hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 group cursor-default">
<div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 text-cyan-600 shadow-sm flex items-center justify-center text-2xl mb-6 group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-600 group-hover:rotate-6 transition-all duration-300">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">Performance Paid Media</h3>
<p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600">
                        Precision targeting on Meta and Google to capture golfers during key micro-moments. We optimize for booking, gear sales, and membership inquiries.
                    </p>
</div>

<div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-cyan-500 hover:bg-white hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 group cursor-default">
<div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 text-cyan-600 shadow-sm flex items-center justify-center text-2xl mb-6 group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-600 group-hover:rotate-6 transition-all duration-300">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">Course SEO &amp; Local</h3>
<p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600">
                        Dominate local search results. We help courses and simulators rank for "tee times near me" and high-intent commercial keywords.
                    </p>
</div>

<div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-cyan-500 hover:bg-white hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 group cursor-default">
<div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 text-cyan-600 shadow-sm flex items-center justify-center text-2xl mb-6 group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-600 group-hover:rotate-6 transition-all duration-300">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">Retention Email</h3>
<p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600">
                        Turn a one-time green fee guest into a lifetime member. Automated flows for rainy days, pro-shop drops, and tournament announcements.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50" x-data="{ budget: 5000, roas: 4 }">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div>
<div className="flex items-center gap-2 text-cyan-600 text-xs font-bold uppercase tracking-widest mb-4">
<iconify-icon className="text-lg" icon="solar:chart-2-linear"></iconify-icon>
                        Projected Performance
                    </div>
<h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter mb-6">
                        Calculate Your Reach.
                    </h2>
<p className="text-slate-500 mb-12 text-lg font-normal">
                        Use our estimator to see potential returns based on average industry benchmarks for golf e-commerce and booking platforms.
                    </p>

<div className="space-y-10">
<div>
<div className="flex justify-between text-base font-semibold mb-4">
<span className="text-slate-700">Monthly Ad Spend</span>
<span className="text-cyan-600 bg-cyan-50 px-3 py-1 rounded-md" x-text="'$' + parseInt(budget).toLocaleString()">$5,000</span>
</div>
<input className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer" max="50000" min="1000" step="1000" type="range" x-model="budget"/>
<div className="flex justify-between text-xs text-slate-400 mt-2 font-mono">
<span>$1k</span>
<span>$50k</span>
</div>
</div>
<div>
<div className="flex justify-between text-base font-semibold mb-4">
<span className="text-slate-700">Target ROAS (Return on Ad Spend)</span>
<span className="text-cyan-600 bg-cyan-50 px-3 py-1 rounded-md" x-text="roas + 'x'">4x</span>
</div>
<input className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer" max="10" min="1" step="0.5" type="range" x-model="roas"/>
<div className="flex justify-between text-xs text-slate-400 mt-2 font-mono">
<span>1.0x</span>
<span>10.0x</span>
</div>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] relative overflow-hidden group">
<div className="absolute -right-12 -top-12 w-64 h-64 bg-cyan-100 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
<div className="absolute top-8 right-8 p-4 bg-slate-50 rounded-2xl border border-slate-100 text-cyan-500/20 group-hover:text-cyan-500/40 transition-colors">
<iconify-icon icon="solar:dollar-minimalistic-linear" width="64"></iconify-icon>
</div>
<div className="space-y-10 relative z-10">
<div>
<p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-2">Estimated Monthly Revenue</p>
<div className="text-6xl font-bold text-slate-900 tracking-tighter" x-text="'$' + (budget * roas).toLocaleString()">$20,000</div>
</div>
<div className="h-px w-full bg-gradient-to-r from-slate-200 to-transparent"></div>
<div className="grid grid-cols-2 gap-10">
<div>
<p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">Est. Conversions</p>
<div className="text-2xl font-semibold text-slate-800 flex items-baseline gap-1">
<span x-text="Math.floor((budget * roas) / 120)">166</span>
<span className="text-sm text-slate-400 font-normal">Orders</span>
</div>
<p className="text-[10px] text-slate-400 mt-1">Based on $120 AOV</p>
</div>
<div>
<p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">Cost Per Acquisition</p>
<div className="text-2xl font-semibold text-slate-800" x-text="'$' + (budget / Math.floor((budget * roas) / 120)).toFixed(2)">$30.12</div>
</div>
</div>
<div className="pt-4">
<button className="w-full py-4 bg-slate-900 text-white rounded-xl font-medium hover:bg-cyan-600 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-cyan-500/30">
                                Lock in this Strategy
                                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white relative overflow-hidden" id="contact">

<div className="absolute right-0 bottom-0 w-1/3 h-full bg-slate-50 -skew-x-12 translate-x-32 -z-0"></div>
<div className="max-w-xl mx-auto relative z-10">
<div className="text-center mb-12">
<h2 className="text-4xl font-bold text-slate-900 tracking-tighter mb-4">Ready to Tee Off?</h2>
<p className="text-slate-500">Schedule a 15-minute discovery call to analyze your current digital scorecard.</p>
</div>
<form className="space-y-5 bg-white p-2 rounded-2xl">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1.5 group">
<label className="text-xs font-bold text-slate-700 ml-1 uppercase tracking-wide">First Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all shadow-sm group-hover:bg-white" placeholder="Tiger" type="text"/>
</div>
<div className="space-y-1.5 group">
<label className="text-xs font-bold text-slate-700 ml-1 uppercase tracking-wide">Last Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all shadow-sm group-hover:bg-white" placeholder="Woods" type="text"/>
</div>
</div>
<div className="space-y-1.5 group">
<label className="text-xs font-bold text-slate-700 ml-1 uppercase tracking-wide">Work Email</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all shadow-sm group-hover:bg-white" placeholder="tiger@pga.com" type="email"/>
</div>
<div className="space-y-1.5 group">
<label className="text-xs font-bold text-slate-700 ml-1 uppercase tracking-wide">Company Website</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all shadow-sm group-hover:bg-white" placeholder="www.yourcourse.com" type="text"/>
</div>
<div className="space-y-4 pt-4">
<label className="text-xs font-bold text-slate-700 ml-1 uppercase tracking-wide">Areas of Interest</label>
<div className="grid grid-cols-2 gap-4">
<label className="custom-checkbox flex items-center gap-3 cursor-pointer group bg-slate-50 hover:bg-white border border-slate-200 p-3 rounded-xl transition-all hover:shadow-md hover:border-cyan-200">
<input className="hidden" type="checkbox"/>
<div className="w-5 h-5 rounded-md border border-slate-300 bg-white flex items-center justify-center transition-all group-hover:border-cyan-500 text-white">
<svg className="hidden w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<span className="text-sm text-slate-600 font-medium group-hover:text-slate-900 transition-colors">Paid Ads</span>
</label>
<label className="custom-checkbox flex items-center gap-3 cursor-pointer group bg-slate-50 hover:bg-white border border-slate-200 p-3 rounded-xl transition-all hover:shadow-md hover:border-cyan-200">
<input className="hidden" type="checkbox"/>
<div className="w-5 h-5 rounded-md border border-slate-300 bg-white flex items-center justify-center transition-all group-hover:border-cyan-500 text-white">
<svg className="hidden w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<span className="text-sm text-slate-600 font-medium group-hover:text-slate-900 transition-colors">SEO / Local</span>
</label>
<label className="custom-checkbox flex items-center gap-3 cursor-pointer group bg-slate-50 hover:bg-white border border-slate-200 p-3 rounded-xl transition-all hover:shadow-md hover:border-cyan-200">
<input className="hidden" type="checkbox"/>
<div className="w-5 h-5 rounded-md border border-slate-300 bg-white flex items-center justify-center transition-all group-hover:border-cyan-500 text-white">
<svg className="hidden w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<span className="text-sm text-slate-600 font-medium group-hover:text-slate-900 transition-colors">Web Design</span>
</label>
<label className="custom-checkbox flex items-center gap-3 cursor-pointer group bg-slate-50 hover:bg-white border border-slate-200 p-3 rounded-xl transition-all hover:shadow-md hover:border-cyan-200">
<input className="hidden" type="checkbox"/>
<div className="w-5 h-5 rounded-md border border-slate-300 bg-white flex items-center justify-center transition-all group-hover:border-cyan-500 text-white">
<svg className="hidden w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<span className="text-sm text-slate-600 font-medium group-hover:text-slate-900 transition-colors">Social Media</span>
</label>
</div>
</div>
<div className="pt-6">
<button className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5" type="button">
                        Send Request
                        <iconify-icon className="-mt-1" icon="solar:plain-linear"></iconify-icon>
</button>
<p className="text-[10px] text-slate-400 text-center mt-4">
                        By clicking send, you agree to our Terms of Service. No mulligans on data privacy.
                    </p>
</div>
</form>
</div>
</section>

<footer className="border-t border-slate-200 bg-slate-50 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-cyan-600 flex items-center justify-center text-xs text-white font-bold shadow-sm">F</div>
<span className="text-slate-900 font-bold text-sm tracking-tight">FAIRWAY.</span>
</div>
<div className="flex items-center gap-8 text-xs text-slate-500 font-semibold">
<a className="hover:text-cyan-600 transition-colors" href="#">Manifesto</a>
<a className="hover:text-cyan-600 transition-colors" href="#">Careers</a>
<a className="hover:text-cyan-600 transition-colors" href="#">Twitter</a>
<a className="hover:text-cyan-600 transition-colors" href="#">LinkedIn</a>
</div>
<div className="text-[10px] text-slate-400">
                © 2024 Fairway Digital. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
