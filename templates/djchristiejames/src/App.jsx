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
      

<div className="ambient-glow-1"></div>
<div className="ambient-glow-2"></div>

<div className="bg-noise"></div>

<nav className="fixed top-0 w-full z-40 bg-black/70 backdrop-blur-md border-b border-white/5">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="hover:text-fuchsia-400 transition-colors bg-center text-4xl italic text-slate-950 tracking-wide w-2 h-2 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/caf909a3-18a9-469f-a36f-04b6947a66c6_800w.jpg)] bg-cover" href="#"></a>
<div className="hidden uppercase md:flex text-xs font-medium text-neutral-400 tracking-widest px-20px space-x-10">
<a className="hover:text-fuchsia-400 transition-colors h-2" href="#about">About</a>
<a className="hover:text-fuchsia-400 transition-colors" href="#shows">Shows</a>
<a className="hover:text-fuchsia-400 transition-colors" href="#mixes">Mixes</a>
<a className="hover:text-fuchsia-400 transition-colors" href="#bay-vibes">Bay Vibes</a>
<a className="text-white border border-fuchsia-500/30 px-6 py-2 rounded-full hover:bg-fuchsia-600 hover:border-fuchsia-600 transition-all duration-300 shadow-[0_0_15px_rgba(217,70,239,0.2)]" href="#booking">Book Now</a>
</div>
<button className="md:hidden text-white">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="min-h-screen flex border-white/5 border-b pt-32 pr-6 pb-20 pl-6 relative items-center">
<div className="grid lg:grid-cols-12 z-10 w-full max-w-7xl mr-auto ml-auto relative gap-x-12 gap-y-12 items-center">
<div className="lg:col-span-7 fade-in-up z-10 order-2 lg:order-1">
<div className="inline-flex items-center gap-2 mb-6 border border-fuchsia-500/30 bg-fuchsia-500/5 px-3 py-1 rounded-full">
<span className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full animate-pulse shadow-[0_0_10px_#e879f9]"></span>
<span className="text-[10px] uppercase text-fuchsia-200 tracking-widest">Accepting 2026
 Bookings</span>
</div>
<h1 className="md:text-7xl lg:text-8xl leading-[1] text-5xl text-white tracking-tight font-serif mb-8">
<span className="italic text-neutral-500">Curated</span> Sound. <br/>
<span className="text-gradient font-medium italic">Live Energy.</span>
</h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-neutral-400 max-w-xl mb-10" style={{}}>DJ, Radio and Event Host, Vibe Curator based in the Bay Area. Elevating modern events with a professional and unmistakable energy.</p>
<div className="flex flex-col sm:flex-row gap-x-6 gap-y-6">
<a className="inline-flex items-center justify-center gap-3 uppercase hover:from-fuchsia-600 hover:to-purple-600 transition-all text-xs font-semibold text-white tracking-widest bg-gradient-to-r from-fuchsia-700 to-purple-700 rounded-sm pt-4 pr-8 pb-4 pl-8 shadow-[0_0_30px_rgba(162,28,175,0.4)]" href="#mixes">
                        Listen to Mixes
                        <iconify-icon className="" height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-3 uppercase hover:bg-white/5 hover:border-fuchsia-400/50 transition-all text-xs font-semibold text-white tracking-widest border-white/20 border rounded-sm pt-4 pr-8 pb-4 pl-8" href="#">
                        iHeartRadio
                    </a>
</div>
</div>
<div className="lg:col-span-5 relative h-[500px] lg:h-[700px] w-full fade-in-up delay-200 order-1 lg:order-2">

<div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-600 to-blue-600 blur-[80px] opacity-30 animate-pulse"></div>
<div className="absolute inset-0 border border-white/10 p-2 bg-black/20 backdrop-blur-sm">
<div className="w-full h-full relative overflow-hidden bg-neutral-900">
<img alt="Christie James DJ" className="hover:scale-105 transition-all duration-1000 ease-out opacity-90 mix-blend-normal w-full h-full object-cover -rotate-x-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bcf0b61c-ffc7-44cc-9d94-3931f5d31f42_1600w.jpg" style={{maskImage: 'linear-gradient(170deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(170deg, transparent, black 0%, black 100%, transparent)'}}/>
</div>
</div>
</div>
</div>
</header>

<div className="border-b border-white/5 bg-gradient-to-r from-neutral-900 via-purple-900/20 to-neutral-900 backdrop-blur-sm relative z-10">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
<div className="p-8 text-center group hover:bg-white/5 transition-colors">
<div className="text-2xl font-serif italic text-white mb-1 group-hover:text-fuchsia-400 transition-colors">10+</div>
<div className="text-[10px] uppercase tracking-widest text-neutral-500">Years Experience</div>
</div>
<div className="p-8 text-center group hover:bg-white/5 transition-colors">
<div className="text-2xl font-serif italic text-white mb-1 group-hover:text-fuchsia-400 transition-colors">500+</div>
<div className="text-[10px] uppercase tracking-widest text-neutral-500">Events Played</div>
</div>
<div className="p-8 text-center group hover:bg-white/5 transition-colors">
<div className="text-2xl font-serif italic text-white mb-1 group-hover:text-fuchsia-400 transition-colors">Bay Area</div>
<div className="text-[10px] uppercase tracking-widest text-neutral-500">Based</div>
</div>
<div className="p-8 text-center group hover:bg-white/5 transition-colors">
<div className="text-2xl font-serif italic text-white mb-1 group-hover:text-fuchsia-400 transition-colors">Open Format</div>
<div className="text-[10px] uppercase tracking-widest text-neutral-500">Style</div>
</div>
</div>
</div>

<section className="md:py-32 z-10 bg-[#050505] border-white/5 border-b pt-24 pb-24 relative" id="about">
<div className="grid md:grid-cols-2 gap-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-16 gap-y-16 items-start">
<div className="">
<h2 className="md:text-5xl text-4xl text-white tracking-tight font-serif mb-8">About Me:<br/> Setting the tone for <span className="italic text-fuchsia-400">moments that matter.</span></h2>
<div className="w-20 h-px bg-gradient-to-r from-fuchsia-500 to-transparent mb-8"></div>
</div>
<div className="space-y-8 text-lg text-neutral-400 font-light leading-relaxed">
<p className="">
<span className="text-white font-normal border-b border-fuchsia-500/30">Christie James</span> is a Bay Area–based DJ and radio personality known for creating polished, feel-good experiences with a modern edge. With a background in broadcast radio and live events, she brings a refined ear for music, crowd flow, and vibe-setting to every space she plays.
                </p>
<p className="">
                    Her sound blends modern funk, indie dance, hip-hop, pop, and timeless throwbacks — always curated to match the room. Christie regularly DJs corporate events, brand activations, private celebrations, weddings, and community gatherings.
                </p>
</div>
</div>
</section>


<section className="z-10 bg-[#050505] border-white/5 border-b pt-24 pb-24 relative" id="mixes">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6" onclick="window.location.href='https://soundcloud.com/christieontheair/millennialelectrofunkodyssey-junglekaytranadachannel-tresapaakmore'" role="button">
<div className="flex flex-col md:flex-row gap-6 mb-12 gap-x-6 gap-y-6 items-end justify-between">
<div className="">
<h2 className="text-4xl md:text-5xl font-serif text-white mb-4 tracking-tight">Latest Mixes</h2>
<p className="text-sm text-neutral-500 max-w-sm" style={{}}>Curated soundscapes for every mood. From high-energy wedding sets to deep house corporate vibes.</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white hover:border-fuchsia-500 hover:text-fuchsia-400 transition-all">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white hover:border-fuchsia-500 hover:text-fuchsia-400 transition-all">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="aspect-square w-full bg-neutral-900 relative mb-5 overflow-hidden border border-white/10 group-hover:border-fuchsia-500/50 transition-colors img-zoom-container">
<div className="absolute inset-0 bg-fuchsia-900/20 mix-blend-overlay z-10"></div>
<img alt="Sunset Sessions" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 img-zoom-hover" src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="z-20 absolute top-0 right-0 bottom-0 left-0">

<img alt="New Cover Image" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 img-zoom-hover absolute inset-0" src="https://images.unsplash.com/photo-1596908906637-b67c4f1c7e6a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-fuchsia-900/20 mix-blend-overlay pointer-events-none"></div>

<div className="flex group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 opacity-0 w-full h-full translate-y-4 items-center justify-center">
<span className="w-16 h-16 rounded-full bg-fuchsia-600 text-white flex items-center justify-center shadow-[0_0_20px_rgba(217,70,239,0.5)]">
<iconify-icon className="ml-1" height="28" icon="solar:play-bold" style={{color: 'rgb(255, 255, 255)'}} width="28"></iconify-icon>
</span>
</div>
</div>
<div className="absolute bottom-4 left-4 z-20">
<span className="text-[10px] bg-black/80 backdrop-blur-sm text-fuchsia-400 px-2 py-1 uppercase tracking-widest border border-fuchsia-500/30">65 Min</span>
</div>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="group-hover:text-fuchsia-300 transition-colors text-xl italic text-white font-serif mb-1">MillenialElectroFunkOdyssey</h3>
<p className="uppercase text-xs text-neutral-500 tracking-widest" style={{}}>Deep House • Lounge</p>
</div>
<iconify-icon className="text-neutral-600 group-hover:text-fuchsia-500 transition-colors" icon="solar:soundwave-linear"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-square w-full bg-neutral-900 relative mb-5 overflow-hidden border border-white/10 group-hover:border-fuchsia-500/50 transition-colors img-zoom-container">
<div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay z-10"></div>
<img alt="High Energy" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 img-zoom-hover" src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
<span className="w-16 h-16 rounded-full bg-fuchsia-600 text-white flex items-center justify-center shadow-[0_0_20px_rgba(217,70,239,0.5)]">
<iconify-icon className="ml-1" icon="solar:play-bold" width="28"></iconify-icon>
</span>
</div>
<div className="absolute bottom-4 left-4 z-20">
<span className="text-[10px] bg-black/80 backdrop-blur-sm text-fuchsia-400 px-2 py-1 uppercase tracking-widest border border-fuchsia-500/30">45 Min</span>
</div>
</div>
<div className="flex items-start justify-between">
<div className="">
<h3 className="text-xl font-serif italic text-white mb-1 group-hover:text-fuchsia-300 transition-colors">Peak Hour Energy</h3>
<p className="text-xs text-neutral-500 uppercase tracking-widest">Tech House • Pop Remixes</p>
</div>
<iconify-icon className="text-neutral-600 group-hover:text-fuchsia-500 transition-colors" icon="solar:soundwave-linear"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-square w-full bg-neutral-900 relative mb-5 overflow-hidden border border-white/10 group-hover:border-fuchsia-500/50 transition-colors img-zoom-container">
<div className="absolute inset-0 bg-purple-900/20 mix-blend-overlay z-10"></div>
<img alt="Throwback" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 img-zoom-hover" src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
<span className="w-16 h-16 rounded-full bg-fuchsia-600 text-white flex items-center justify-center shadow-[0_0_20px_rgba(217,70,239,0.5)]">
<iconify-icon className="ml-1" icon="solar:play-bold" width="28"></iconify-icon>
</span>
</div>
<div className="absolute bottom-4 left-4 z-20">
<span className="text-[10px] bg-black/80 backdrop-blur-sm text-fuchsia-400 px-2 py-1 uppercase tracking-widest border border-fuchsia-500/30">90 Min</span>
</div>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="text-xl font-serif italic text-white mb-1 group-hover:text-fuchsia-300 transition-colors">Throwback R&amp;B</h3>
<p className="text-xs text-neutral-500 uppercase tracking-widest">Classics • 90s • 2000s</p>
</div>
<iconify-icon className="text-neutral-600 group-hover:text-fuchsia-500 transition-colors" icon="solar:soundwave-linear"></iconify-icon>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-block border-b border-fuchsia-500/30 pb-1 text-xs font-semibold uppercase tracking-widest text-white hover:text-fuchsia-400 hover:border-fuchsia-400 transition-all" href="#">View SoundCloud Profile</a>
</div>
</div>
</section>

<section className="overflow-hidden text-white bg-gradient-to-b from-[#050505] to-indigo-950/20 border-white/5 border-b pt-24 pb-24 relative" id="bay-vibes">

<div className="absolute right-0 top-0 w-[500px] h-[500px] bg-purple-600/10 blur-[100px] pointer-events-none rounded-full"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="order-2 lg:order-1">
<div className="flex items-center gap-2 text-cyan-400 mb-6">
<iconify-icon icon="solar:star-linear"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-widest shadow-[0_0_10px_rgba(34,211,238,0.4)]">Premium Experience</span>
</div>
<h2 className="text-5xl md:text-7xl font-serif mb-8 leading-none">Bay <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Vibes.</span></h2>
<p className="text-xl text-white font-light mb-2">DJ + Live Drummer + Saxophone</p>
<div className="h-px w-20 bg-gradient-to-r from-cyan-500 to-transparent my-8"></div>
<p className="text-neutral-400 leading-relaxed mb-8 font-light">
                        Bay Vibes is a high-energy, live DJ experience featuring Christie James alongside a live drummer and saxophone player. This hybrid setup blends curated DJ sets with live instrumentation for a dynamic, interactive performance that feels elevated, modern, and unforgettable.
                    </p>
<button className="group inline-flex items-center gap-4 text-sm font-medium hover:text-cyan-300 transition-colors">
<span className="h-10 w-10 border border-cyan-500/30 rounded-full flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)]">
<iconify-icon icon="solar:play-linear" width="18"></iconify-icon>
</span>
<span className="uppercase tracking-widest text-xs">Watch Performance</span>
</button>
</div>
<div className="relative order-1 lg:order-2">
<div className="aspect-[4/3] bg-neutral-800 border border-white/5 relative overflow-hidden group shadow-[0_20px_50px_-12px_rgba(88,28,135,0.3)]">
<div className="absolute inset-0 bg-neutral-800 flex items-center justify-center">
<iconify-icon className="text-white/20 group-hover:text-cyan-400 transition-all scale-90 group-hover:scale-100" icon="solar:play-circle-linear" width="64"></iconify-icon>
</div>
<img alt="Bay Vibes" className="hover:grayscale-0 transition-all duration-700 opacity-50 mix-blend-overlay w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 grayscale" src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5 bg-[#050505] relative z-10">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/5 border-x border-white/5">

<div className="p-10 hover:bg-neutral-900 transition-colors duration-300 group">
<iconify-icon className="text-neutral-500 group-hover:text-fuchsia-500 transition-colors mb-4" icon="solar:buildings-2-linear" width="24"></iconify-icon>
<h4 className="font-serif text-xl text-white mb-2">Corporate</h4>
<p className="text-xs text-neutral-500 uppercase tracking-wider">Brand Activations</p>
</div>

<div className="p-10 hover:bg-neutral-900 transition-colors duration-300 group">
<iconify-icon className="text-neutral-500 group-hover:text-cyan-500 transition-colors mb-4" icon="solar:laptop-linear" width="24"></iconify-icon>
<h4 className="font-serif text-xl text-white mb-2">Tech</h4>
<p className="text-xs text-neutral-500 uppercase tracking-wider">Industry Events</p>
</div>

<div className="p-10 hover:bg-neutral-900 transition-colors duration-300 group">
<iconify-icon className="text-neutral-500 group-hover:text-fuchsia-500 transition-colors mb-4" icon="solar:wineglass-linear" width="24"></iconify-icon>
<h4 className="font-serif text-xl text-white mb-2">Private</h4>
<p className="text-xs text-neutral-500 uppercase tracking-wider">Weddings &amp; Galas</p>
</div>

<div className="p-10 hover:bg-neutral-900 transition-colors duration-300 group">
<iconify-icon className="text-neutral-500 group-hover:text-cyan-500 transition-colors mb-4" icon="solar:mic-linear" width="24"></iconify-icon>
<h4 className="font-serif text-xl text-white mb-2">Media</h4>
<p className="text-xs text-neutral-500 uppercase tracking-wider">Radio Broadcast</p>
</div>
</div>
</div>
</section>

<section className="z-10 bg-[#050505] border-white/5 border-b pt-24 pb-24 relative">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="md:text-5xl text-4xl text-white tracking-tight font-serif mb-4">Investment</h2>
<p className="text-neutral-500 text-sm">Transparent pricing for professional curation.</p>
</div>
<div className="grid md:grid-cols-3 gap-0 border border-white/5 divide-y md:divide-y-0 md:divide-x divide-white/5">

<div className="p-10 hover:bg-neutral-900/50 transition-colors">
<div className="mb-8">
<h3 className="font-serif italic text-2xl text-white mb-2">Corporate</h3>
<p className="text-xs text-neutral-500 uppercase tracking-widest">Brand &amp; Events</p>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-light text-white">$500</span>
<span className="text-neutral-600 text-sm">/ hour</span>
</div>
<p className="text-neutral-400 text-sm font-light leading-relaxed mb-8">
                        Tailored sonic atmosphere for conferences, mixers, and brand launches.
                    </p>
<a className="block w-full py-3 border border-white/20 text-center text-xs font-semibold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all" href="#booking">
                        Inquire
                    </a>
</div>

<div className="p-10 bg-neutral-900/20 hover:bg-neutral-900/50 transition-colors relative border-t-2 border-t-fuchsia-500 md:border-t-0 md:border-t-transparent shadow-[0_0_30px_rgba(217,70,239,0.05)]">
<div className="mb-8">
<h3 className="font-serif italic text-2xl text-white mb-2">Bay Vibes</h3>
<p className="text-xs text-cyan-400 uppercase tracking-widest drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">Premium Hybrid</p>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-light text-white">Custom</span>
</div>
<p className="text-neutral-400 text-sm font-light leading-relaxed mb-8">
                        The ultimate experience. DJ + Live Drummer + Saxophone performance.
                    </p>
<a className="block w-full py-3 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-center text-xs font-semibold uppercase tracking-widest text-white hover:shadow-[0_0_20px_rgba(192,38,211,0.5)] hover:from-fuchsia-500 hover:to-purple-500 transition-all rounded-sm" href="#booking">
                        Get Quote
                    </a>
</div>

<div className="p-10 hover:bg-neutral-900/50 transition-colors">
<div className="mb-8">
<h3 className="font-serif italic text-2xl text-white mb-2">Weddings</h3>
<p className="text-xs text-neutral-500 uppercase tracking-widest">Private Events</p>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-light text-white">$500</span>
<span className="text-neutral-600 text-sm">/ hour</span>
</div>
<p className="text-neutral-400 text-sm font-light leading-relaxed mb-8">
                        Bespoke music curation for ceremonies, receptions, and after-parties.
                    </p>
<a className="block w-full py-3 border border-white/20 text-center text-xs font-semibold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all" href="#booking">
                        Inquire
                    </a>
</div>
</div>
<p className="text-center text-[10px] uppercase tracking-widest text-neutral-600 mt-8">
                Pricing varies based on location and equipment requirements.
            </p>
</div>
</section>

<section className="border-b border-white/5 bg-black relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 h-[400px]">

<div className="col-span-1 relative group overflow-hidden border-r border-white/5">
<div className="absolute inset-0 bg-fuchsia-900/40 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<img alt="Event Crowd" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>

<div className="col-span-1 relative group overflow-hidden border-r border-white/5">
<div className="absolute inset-0 bg-cyan-900/40 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<img alt="Environment" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="col-span-1 relative group overflow-hidden border-r border-white/5">
<div className="absolute inset-0 bg-purple-900/40 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<img alt="Equipment Detail" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>

<div className="col-span-1 relative group overflow-hidden">
<div className="absolute inset-0 bg-fuchsia-900/40 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<img alt="Live Performance" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</section>

<section className="z-10 bg-[#050505] pt-24 pb-24 relative" id="booking">
<div className="max-w-2xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-4xl font-serif text-white mb-2">Check Availability</h2>
<div className="w-12 h-px bg-fuchsia-500/50 mx-auto my-6 shadow-[0_0_10px_#d946ef]"></div>
<p className="text-neutral-500 text-sm">Professional communication. Quick response.</p>
</div>
<form className="space-y-10">
<div className="grid grid-cols-2 gap-10">
<div className="space-y-2 group">
<label className="text-[10px] font-semibold uppercase tracking-widest text-neutral-500 group-focus-within:text-fuchsia-400 transition-colors" htmlFor="name">Name</label>
<input className="w-full bg-transparent border-b border-white/10 py-2 text-white text-lg focus:outline-none focus:border-fuchsia-500 transition-colors placeholder-neutral-800" id="name" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-2 group">
<label className="text-[10px] font-semibold uppercase tracking-widest text-neutral-500 group-focus-within:text-fuchsia-400 transition-colors" htmlFor="email">Email</label>
<input className="w-full bg-transparent border-b border-white/10 py-2 text-white text-lg focus:outline-none focus:border-fuchsia-500 transition-colors placeholder-neutral-800" id="email" placeholder="jane@company.com" type="email"/>
</div>
</div>
<div className="space-y-2 group">
<label className="text-[10px] font-semibold uppercase tracking-widest text-neutral-500 group-focus-within:text-fuchsia-400 transition-colors" htmlFor="type">Event Type</label>
<select className="w-full bg-transparent border-b border-white/10 py-2 text-white text-lg focus:outline-none focus:border-fuchsia-500 transition-colors appearance-none rounded-none" id="type">
<option className="bg-black text-neutral-400">Select Type...</option>
<option className="bg-black">Corporate Event</option>
<option className="bg-black">Brand Activation</option>
<option className="bg-black">Private Party</option>
<option className="bg-black">Wedding</option>
</select>
</div>
<div className="grid grid-cols-2 gap-10">
<div className="space-y-2 group">
<label className="text-[10px] font-semibold uppercase tracking-widest text-neutral-500 group-focus-within:text-fuchsia-400 transition-colors" htmlFor="date">Date &amp; Location</label>
<input className="w-full bg-transparent border-b border-white/10 py-2 text-white text-lg focus:outline-none focus:border-fuchsia-500 transition-colors placeholder-neutral-800" id="date" placeholder="Oct 12, SF" type="text"/>
</div>
<div className="space-y-2 group">
<label className="text-[10px] font-semibold uppercase tracking-widest text-neutral-500 group-focus-within:text-fuchsia-400 transition-colors" htmlFor="guests">Est. Guests</label>
<input className="w-full bg-transparent border-b border-white/10 py-2 text-white text-lg focus:outline-none focus:border-fuchsia-500 transition-colors placeholder-neutral-800" id="guests" placeholder="150" type="text"/>
</div>
</div>

<div className="flex items-center gap-3 pt-2">
<label className="relative inline-flex items-center cursor-pointer group">
<input className="sr-only custom-checkbox peer" type="checkbox"/>
<div className="w-4 h-4 border border-white/30 rounded-sm flex items-center justify-center transition-colors peer-checked:bg-fuchsia-500 peer-checked:border-fuchsia-500">
<svg className="hidden w-2.5 h-2.5 text-white pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path></svg>
</div>
<span className="ml-3 text-sm text-neutral-400 group-hover:text-fuchsia-300 transition-colors">Interested in Bay Vibes? (Live Drummer + Sax)</span>
</label>
</div>
<div className="space-y-2 pt-2 group">
<label className="text-[10px] font-semibold uppercase tracking-widest text-neutral-500 group-focus-within:text-fuchsia-400 transition-colors" htmlFor="message">Message</label>
<textarea className="w-full bg-transparent border-b border-white/10 py-2 text-white text-lg focus:outline-none focus:border-fuchsia-500 transition-colors placeholder-neutral-800 resize-none" id="message" placeholder="Tell me about the vibe..." rows="1"></textarea>
</div>
<button className="w-full bg-gradient-to-r from-fuchsia-700 to-purple-700 text-white py-4 text-xs font-bold uppercase tracking-widest hover:from-fuchsia-600 hover:to-purple-600 transition-all mt-8 shadow-[0_0_25px_rgba(192,38,211,0.3)] rounded-sm" type="button">
                    Send Inquiry
                </button>
</form>
<div className="mt-16 flex flex-col items-center space-y-4">
<a className="text-white font-serif italic text-xl hover:text-fuchsia-400 transition-colors" href="mailto:hello@christiejames.com">hello@christiejames.com</a>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-fuchsia-400 transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-fuchsia-400 transition-colors" href="#">
<iconify-icon icon="solar:soundwave-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</section>


    </>
  );
}
