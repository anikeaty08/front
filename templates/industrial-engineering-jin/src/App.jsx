import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
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
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-neutral-200">
<div className="max-w-screen-2xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter uppercase flex items-center gap-2" href="#">
<div className="w-4 h-4 bg-orange-600"></div>
                STRUKTUR
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-tight text-neutral-600">
<a className="hover:text-black transition-colors" href="#">Projects</a>
<a className="hover:text-black transition-colors" href="#">Sectors</a>
<a className="hover:text-black transition-colors" href="#">Sustainability</a>
<a className="hover:text-black transition-colors" href="#">Investors</a>
</div>
<button className="bg-neutral-900 text-white text-xs uppercase tracking-widest font-medium px-6 py-3 hover:bg-orange-600 transition-colors duration-300">
                Contact
            </button>
</div>
</nav>

<header className="md:pt-48 md:pb-32 overflow-hidden selection:bg-orange-600 selection:text-white bg-white border-neutral-200 border-b pt-32 pb-20 relative">

<div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#171717 1px, transparent 1px), linear-gradient(90deg, #171717 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none"></div>
<div className="max-w-screen-2xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

<div className="lg:col-span-7 flex flex-col items-start relative">

<div className="absolute -left-6 top-0 bottom-0 w-px bg-neutral-200 hidden xl:block">
<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-1 h-8 bg-orange-600"></div>
</div>

<div className="mb-8 flex items-center gap-3 group cursor-default">
<div className="h-px w-8 bg-orange-600 group-hover:w-12 transition-all duration-300"></div>
<span className="text-xs font-semibold tracking-widest uppercase text-orange-600">Global Infrastructure Partners</span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-neutral-900 leading-[0.9] mb-8">
                    ENGINEERING 
                    THE <span className="text-neutral-300 transition-colors duration-500 hover:text-neutral-900 cursor-default">INVISIBLE</span>
<span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-600">
                        BACKBONE.
                    </span>
</h1>

<p className="text-lg md:text-xl text-neutral-500 font-light leading-relaxed max-w-2xl mb-10 border-l border-neutral-200 pl-6">
                    We design the critical arteries of modern economies. From renewable energy grids to autonomous logistics, we deliver precision at a planetary scale.
                </p>

<div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center w-full">
<button className="group relative px-8 py-4 bg-neutral-900 text-white text-xs font-semibold uppercase tracking-widest overflow-hidden transition-all hover:bg-orange-600">
<span className="relative z-10 flex items-center gap-2">
                            Explore Projects
                            <iconify-icon className="group-hover:translate-x-1 transition-transform duration-300" icon="lucide:arrow-right"></iconify-icon>
</span>
</button>
<a className="group flex items-center gap-3 text-xs font-medium text-neutral-500 hover:text-orange-600 transition-colors px-4 py-2" href="#">
<div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center bg-white group-hover:border-orange-600 transition-colors">
<iconify-icon className="ml-0.5" icon="lucide:play" width="10"></iconify-icon>
</div>
<span className="uppercase tracking-widest group-hover:underline decoration-1 underline-offset-4">Watch Showreel</span>
</a>
</div>
</div>

<div className="lg:col-span-5 relative h-[500px] lg:h-[700px] w-full mt-12 lg:mt-0 perspective-midrange">

<div className="absolute top-0 right-0 w-11/12 h-5/6 bg-neutral-100 overflow-hidden shadow-2xl transition-all duration-700 ease-out hover:-translate-y-2 group border border-neutral-200">
<img alt="Structure" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
<div className="absolute inset-0 z-10 bg-neutral-900 overflow-hidden">

<img alt="Structural Abstract" className="w-full h-full object-cover opacity-80 transition-transform duration-1000 ease-out group-hover:scale-105 group-hover:opacity-60" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>

<div className="absolute top-6 right-6 flex flex-col items-end gap-1 opacity-80">
<div className="flex items-center gap-2 mb-1">
<div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></div>
<span className="text-[10px] font-mono text-orange-500 uppercase tracking-widest">Live Feed</span>
</div>
<div className="flex gap-1">
<div className="w-1 h-3 bg-white/20"></div>
<div className="w-1 h-3 bg-white/20"></div>
<div className="w-1 h-3 bg-white/40"></div>
<div className="w-1 h-3 bg-orange-500"></div>
</div>
<span className="text-[8px] font-mono text-white/40 uppercase tracking-widest mt-1">SYS.84.2</span>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/5 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out scale-90 group-hover:scale-100 pointer-events-none">
<div className="w-48 h-48 border border-white/10 rounded-full border-dashed animate-[spin_10s_linear_infinite]"></div>
<div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
<div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-orange-500/30 to-transparent"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-mono text-white/60 tracking-widest">SCANNING</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full p-8 border-t border-white/10 flex justify-between items-end">
<div className="text-white">
<p className="text-[10px] font-mono uppercase opacity-70 mb-2">Sector 01 — Structural</p>
<p className="text-xl font-medium tracking-tight">Urban Architecture</p>
</div>
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" icon="lucide:maximize-2" width="20"></iconify-icon>
</div>
</div>

<div className="absolute bottom-12 left-0 w-56 aspect-square bg-orange-600 p-6 flex flex-col justify-between shadow-[0_20px_40px_-10px_rgba(234,88,12,0.3)] z-10 transition-transform hover:scale-105 duration-300 cursor-default">
<div className="flex justify-between items-start">
<iconify-icon className="text-white w-6 h-6 opacity-80" icon="lucide:activity"></iconify-icon>
<span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
</div>
<div className="">
<span className="block text-5xl font-light text-white tracking-tighter mb-2">450<span className="text-2xl opacity-50">+</span></span>
<div className="w-full h-px bg-white/30 mb-2"></div>
<span className="text-[10px] font-bold text-white/90 uppercase tracking-widest">Global Assets</span>
</div>
</div>

<div className="absolute top-16 -left-4 bg-white/90 backdrop-blur p-4 shadow-lg border border-neutral-200 hidden md:block w-48 z-20">
<div className="flex items-center justify-between mb-4 pb-2 border-b border-neutral-100">
<span className="text-[10px] font-mono uppercase text-neutral-400">System Status</span>
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center text-[10px] font-mono text-neutral-600">
<span>Grid Load</span>
<span>84%</span>
</div>
<div className="w-full h-1 bg-neutral-100 overflow-hidden">
<div className="w-[84%] h-full bg-neutral-900"></div>
</div>
<div className="flex justify-between items-center text-[10px] font-mono text-neutral-600 pt-1">
<span>Efficiency</span>
<span>99.2%</span>
</div>
<div className="w-full h-1 bg-neutral-100 overflow-hidden">
<div className="w-[99.2%] h-full bg-orange-500"></div>
</div>
</div>
</div>

<div className="absolute -bottom-8 -right-8 w-64 h-64 border border-neutral-200 -z-10 rounded-full opacity-50"></div>
</div>
</div>
</div>
</header>

<section className="py-24 border-b border-neutral-200">
<div className="max-w-screen-2xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="md:col-span-1 border-t border-black pt-4">
<h3 className="text-sm font-semibold uppercase tracking-widest mb-2">Our Reach</h3>
<p className="text-sm text-neutral-500">Operating across 4 continents.</p>
</div>
<div className="md:col-span-3">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="flex flex-col gap-2 group cursor-pointer">
<span className="text-6xl font-light tracking-tighter group-hover:text-orange-600 transition-colors">45<span className="text-2xl align-top">+</span></span>
<span className="text-xs font-medium uppercase tracking-widest text-neutral-500">Years of Operation</span>
<p className="text-sm text-neutral-600 mt-2 border-l border-neutral-200 pl-4">Legacy of resilience and adaptive engineering solutions.</p>
</div>
<div className="flex flex-col gap-2 group cursor-pointer">
<span className="text-6xl font-light tracking-tighter group-hover:text-orange-600 transition-colors">12B<span className="text-2xl align-top">$</span></span>
<span className="text-xs font-medium uppercase tracking-widest text-neutral-500">Assets Managed</span>
<p className="text-sm text-neutral-600 mt-2 border-l border-neutral-200 pl-4">Optimizing value through lifecycle management and technology.</p>
</div>
<div className="flex flex-col gap-2 group cursor-pointer">
<span className="text-6xl font-light tracking-tighter group-hover:text-orange-600 transition-colors">0<span className="text-2xl align-top">%</span></span>
<span className="text-xs font-medium uppercase tracking-widest text-neutral-500">Net Carbon Target</span>
<p className="text-sm text-neutral-600 mt-2 border-l border-neutral-200 pl-4">Committing to a sustainable future by 2030.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-orange-600 text-white py-32">
<div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-3 hidden md:block">
<iconify-icon className="opacity-50" height="64" icon="lucide:quote" strokeWidth="1.5" width="64"></iconify-icon>
</div>
<div className="md:col-span-9 relative">
<h2 className="text-3xl md:text-6xl font-medium tracking-tight leading-tight mb-8">
                    "Infrastructure is not just concrete and steel. It is the organized complexity that allows modern society to function efficiently."
                </h2>
<div className="flex items-center gap-4">
<div className="w-12 h-[1px] bg-white/50"></div>
<span className="text-sm font-medium tracking-wide uppercase">Dr. Helena Voss, Chief Engineer</span>
</div>
</div>
</div>
</section>

<section className="bg-neutral-50 py-32 border-b border-neutral-200">
<div className="max-w-screen-2xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-20">
<div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4">Core Sectors</h2>
<p className="text-neutral-500 max-w-md">Delivering specialized engineering services for high-stakes industries.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-semibold uppercase tracking-widest hover:text-orange-600 transition-colors mt-8 md:mt-0" href="#">
                    View All Capabilities
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-neutral-200 border border-neutral-200">

<div className="bg-white p-12 hover:bg-neutral-900 hover:text-white group transition-colors duration-300 min-h-[400px] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-orange-600 group-hover:text-white transition-colors" height="32" icon="lucide:zap" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-xs font-mono opacity-50">01</span>
</div>
<div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">Energy &amp; Power</h3>
<p className="text-sm text-neutral-500 group-hover:text-neutral-400 leading-relaxed mb-8">
                            Next-generation grid modernization, renewable integration, and high-voltage transmission networks.
                        </p>
<div className="w-full h-[1px] bg-neutral-200 group-hover:bg-neutral-700 mb-4"></div>
<span className="text-xs font-medium uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300 inline-block">Explore</span>
</div>
</div>

<div className="bg-white p-12 hover:bg-neutral-900 hover:text-white group transition-colors duration-300 min-h-[400px] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-orange-600 group-hover:text-white transition-colors" height="32" icon="lucide:train-front" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-xs font-mono opacity-50">02</span>
</div>
<div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">Transportation</h3>
<p className="text-sm text-neutral-500 group-hover:text-neutral-400 leading-relaxed mb-8">
                            Integrated logistics systems, automated rail networks, and smart-port infrastructure development.
                        </p>
<div className="w-full h-[1px] bg-neutral-200 group-hover:bg-neutral-700 mb-4"></div>
<span className="text-xs font-medium uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300 inline-block">Explore</span>
</div>
</div>

<div className="bg-white p-12 hover:bg-neutral-900 hover:text-white group transition-colors duration-300 min-h-[400px] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-orange-600 group-hover:text-white transition-colors" height="32" icon="lucide:droplets" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-xs font-mono opacity-50">03</span>
</div>
<div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">Water Systems</h3>
<p className="text-sm text-neutral-500 group-hover:text-neutral-400 leading-relaxed mb-8">
                            Industrial desalination, wastewater treatment plants, and urban hydraulic engineering.
                        </p>
<div className="w-full h-[1px] bg-neutral-200 group-hover:bg-neutral-700 mb-4"></div>
<span className="text-xs font-medium uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300 inline-block">Explore</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-0 border-b border-neutral-200">
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="relative h-[600px] lg:h-[800px] bg-neutral-100 overflow-hidden">
<img alt="Large scale construction" className="image-cover hover:scale-105 transition-transform duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-8 left-8 bg-white/90 backdrop-blur px-4 py-2 text-xs font-bold uppercase tracking-widest text-orange-600">
                    Case Study
                </div>
</div>

<div className="flex flex-col justify-center p-12 lg:p-24 bg-white">
<div className="mb-12">
<span className="block text-xs font-medium text-neutral-400 uppercase tracking-widest mb-4">Rotterdam, Netherlands</span>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tighter leading-tight mb-6">
                        Automating the  Port of Future
                    </h2>
<p className="text-neutral-600 text-lg leading-relaxed mb-8 border-l-2 border-orange-600 pl-6">
                        A five-year automated logistics project reducing container transit time by 40% while achieving carbon neutrality through solar-powered crane systems.
                    </p>
<div className="grid grid-cols-2 gap-8 mb-12">
<div>
<span className="block text-3xl font-light tracking-tight text-neutral-900">40%</span>
<span className="text-xs text-neutral-500 uppercase tracking-wider">Efficiency Gain</span>
</div>
<div>
<span className="block text-3xl font-light tracking-tight text-neutral-900">2.5GW</span>
<span className="text-xs text-neutral-500 uppercase tracking-wider">Energy Saved</span>
</div>
</div>
<a className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-widest border-b border-black pb-1 hover:text-orange-600 hover:border-orange-600 transition-colors" href="#">
                        View Project Analysis
                        <iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-screen-2xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-4">
<h2 className="text-3xl font-semibold tracking-tighter mb-4">Latest Insights</h2>
<p className="text-neutral-500 text-sm mb-8">Technical papers and press releases from our engineering teams.</p>
<a className="inline-block px-6 py-3 border border-neutral-300 text-xs font-medium uppercase tracking-widest hover:bg-black hover:text-white hover:border-black transition-colors" href="#">
                    Newsroom
                </a>
</div>
<div className="md:col-span-8">

<article className="group border-t border-neutral-200 py-8 flex flex-col md:flex-row gap-8 items-start md:items-center cursor-pointer">
<div className="md:w-32 text-xs font-mono text-neutral-400">OCT 12, 2023</div>
<div className="flex-1">
<span className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 block">Innovation</span>
<h3 className="text-xl font-medium tracking-tight group-hover:text-orange-600 transition-colors">Modular Nuclear Reactors: The future of industrial power?</h3>
</div>
<div className="hidden md:block">
<iconify-icon className="text-neutral-300 group-hover:text-orange-600 transition-colors" height="20" icon="lucide:chevron-right" width="20"></iconify-icon>
</div>
</article>

<article className="group border-t border-neutral-200 py-8 flex flex-col md:flex-row gap-8 items-start md:items-center cursor-pointer">
<div className="md:w-32 text-xs font-mono text-neutral-400">SEP 28, 2023</div>
<div className="flex-1">
<span className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 block">Corporate</span>
<h3 className="text-xl font-medium tracking-tight group-hover:text-orange-600 transition-colors">Struktur acquires Nordic Wind Solutions for €240M</h3>
</div>
<div className="hidden md:block">
<iconify-icon className="text-neutral-300 group-hover:text-orange-600 transition-colors" height="20" icon="lucide:chevron-right" width="20"></iconify-icon>
</div>
</article>

<article className="group border-t border-b border-neutral-200 py-8 flex flex-col md:flex-row gap-8 items-start md:items-center cursor-pointer">
<div className="md:w-32 text-xs font-mono text-neutral-400">AUG 15, 2023</div>
<div className="flex-1">
<span className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 block">Sustainability</span>
<h3 className="text-xl font-medium tracking-tight group-hover:text-orange-600 transition-colors">Decarbonizing concrete production: Q3 Report</h3>
</div>
<div className="hidden md:block">
<iconify-icon className="text-neutral-300 group-hover:text-orange-600 transition-colors" height="20" icon="lucide:chevron-right" width="20"></iconify-icon>
</div>
</article>
</div>
</div>
</section>

<footer className="bg-neutral-900 text-white pt-24 pb-12">
<div className="max-w-screen-2xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
<div className="md:col-span-1">
<div className="flex items-center gap-2 mb-8">
<div className="w-4 h-4 bg-orange-600"></div>
<span className="text-xl font-semibold tracking-tighter uppercase">STRUKTUR</span>
</div>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">
                        Engineering the backbone of tomorrow through precision, scale, and sustainable innovation.
                    </p>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-white" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
<a className="text-neutral-400 hover:text-white" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
<a className="text-neutral-400 hover:text-white" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6">Company</h4>
<ul className="space-y-4 text-sm font-medium text-neutral-300">
<li><a className="hover:text-orange-500 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Leadership</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Investors</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6">Sectors</h4>
<ul className="space-y-4 text-sm font-medium text-neutral-300">
<li><a className="hover:text-orange-500 transition-colors" href="#">Energy</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Transportation</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Water</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Urban Planning</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6">Offices</h4>
<ul className="space-y-4 text-sm font-medium text-neutral-300">
<li>Berlin, DE</li>
<li>London, UK</li>
<li>Singapore, SG</li>
<li>New York, US</li>
</ul>
</div>
</div>
<div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
<div className="flex gap-8 mb-4 md:mb-0">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
<a className="hover:text-white" href="#">Cookie Settings</a>
</div>
<div>
                    © 2024 Struktur Engineering Group. All rights reserved.
                </div>
</div>
</div>
</footer>

    </>
  );
}
