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
      

<div className="perspective-container">
<div className="ambient-light light-1"></div>
<div className="ambient-light light-2"></div>
<div className="grid-floor"></div>

<div className="cube-scene hidden lg:block">
<div className="cube">
<div className="cube-face front"></div>
<div className="cube-face back"></div>
<div className="cube-face right"></div>
<div className="cube-face left"></div>
<div className="cube-face top"></div>
<div className="cube-face bottom"></div>
</div>
</div>
</div>

<div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
<nav className="glass-nav rounded-full px-1.5 py-1.5 flex items-center gap-1 shadow-sm max-w-fit">
<a className="px-4 py-2 rounded-full flex items-center gap-2 transition-transform active:scale-95 bg-neutral-900/90 text-white backdrop-blur-md shadow-lg" href="#" style={{}}>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" style={{}}></div>
<span className="text-xs font-medium tracking-tight">Active</span>
</a>
<div className="hidden sm:flex items-center px-2 gap-1">
<a className="px-4 py-2 rounded-full text-xs font-medium text-neutral-600 transition-all hover:text-neutral-900 hover:bg-white/50" href="#gallery" style={{}}>Gallery</a>
<a className="px-4 py-2 rounded-full text-xs font-medium text-neutral-600 transition-all hover:text-neutral-900 hover:bg-white/50" href="#details" style={{}}>Details</a>
<a className="px-4 py-2 rounded-full text-xs font-medium text-neutral-600 transition-all hover:text-neutral-900 hover:bg-white/50" href="#schools" style={{}}>Schools</a>
<a className="px-4 py-2 rounded-full text-xs font-medium text-neutral-600 transition-all hover:text-neutral-900 hover:bg-white/50" href="#location" style={{}}>Map</a>
</div>
<a className="transition-colors text-xs font-medium border rounded-full pt-2 pr-5 pb-2 pl-5 shadow-sm hover:bg-white/80 text-neutral-900 bg-white/60 border-white/50 backdrop-blur-sm" href="/compare" style={{}}>Compare</a>
</nav>
</div>

<main className="sm:px-6 max-w-[1400px] mr-auto ml-auto pt-24 pr-4 pl-4 relative z-10">

<header className="flex flex-col md:flex-row md:items-end mb-8 gap-x-6 gap-y-6 justify-between animate-[fadeIn_0.6s_ease-out]">
<div className="space-y-3">
<div className="flex items-center gap-2 text-neutral-500" style={{}}>
<div className="p-1.5 bg-white/50 rounded-full border border-white/40 shadow-sm backdrop-blur-sm">
<iconify-icon className="text-neutral-600 text-sm block" icon="solar:map-point-linear" style={{}}></iconify-icon>
</div>
<span className="text-sm tracking-tight font-medium opacity-80 mix-blend-multiply">East Hills, NY 11577</span>
</div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-neutral-900 drop-shadow-sm" style={{}}>95 Oakdale Lane</h1>
</div>
<div className="flex items-baseline gap-1 text-right">
<span className="text-3xl md:text-5xl font-medium tracking-tight text-neutral-900 drop-shadow-sm" style={{}}>$1,550,000</span>
</div>
</header>

<div className="grid grid-cols-1 lg:grid-cols-12 auto-rows-[minmax(100px,auto)] gap-x-6 gap-y-6">

<div className="lg:col-span-8 lg:row-span-2 h-[400px] lg:h-[600px] rounded-3xl overflow-hidden relative group card border-0 shadow-2xl" id="gallery">
<img alt="Exterior" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://photos.zillowstatic.com/fp/9db88c7d024bb85babdbc31a1567c29d-cc_ft_1536.jpg" />
<div className="hero-gradient group-hover:opacity-100 transition-opacity duration-500 flex opacity-0 pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 items-end">
<button className="flex text-xs font-semibold rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-xl backdrop-blur-md gap-x-2 gap-y-2 items-center text-neutral-900 bg-white/95 transition-transform hover:scale-105" style={{}}>
<iconify-icon className="text-sm" icon="solar:gallery-bold"></iconify-icon>
                        View Gallery
                    </button>
</div>
</div>

<div className="lg:col-span-4 grid grid-cols-2 gap-4 h-full">

<div className="card rounded-3xl p-6 flex flex-col justify-between h-[150px] lg:h-auto relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-indigo-50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
<div className="flex justify-between items-start relative z-10">
<span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400" style={{}}>Bedrooms</span>
<div className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center border border-neutral-100 text-neutral-400">
<iconify-icon className="text-lg" icon="solar:bed-linear" style={{}}></iconify-icon>
</div>
</div>
<div className="relative z-10">
<span className="text-5xl font-medium tracking-tighter text-neutral-800">03</span>
<p className="text-xs text-neutral-500 mt-2 font-medium" style={{}}>Primary Suite on 2nd FL</p>
</div>
</div>

<div className="card rounded-3xl p-6 flex flex-col justify-between h-[150px] lg:h-auto relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-purple-50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
<div className="flex justify-between items-start relative z-10">
<span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400" style={{}}>Bathrooms</span>
<div className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center border border-neutral-100 text-neutral-400">
<iconify-icon className="text-lg" icon="solar:bath-linear" style={{}}></iconify-icon>
</div>
</div>
<div className="relative z-10">
<span className="text-5xl font-medium tracking-tighter text-neutral-800">03</span>
<p className="text-xs text-neutral-500 mt-2 font-medium" style={{}}>Full Baths</p>
</div>
</div>

<div className="card rounded-3xl p-6 flex flex-col justify-between col-span-2 h-[150px] lg:h-auto relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-32 h-32 bg-gradient-to-br from-emerald-50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
<div className="flex justify-between items-start relative z-10">
<span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400" style={{}}>Living Area</span>
<div className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center border border-neutral-100 text-neutral-400">
<iconify-icon className="text-lg" icon="solar:ruler-linear" style={{}}></iconify-icon>
</div>
</div>
<div className="flex items-baseline gap-2 relative z-10">
<span className="text-5xl font-medium tracking-tighter text-neutral-800">1,868</span>
<span className="font-medium text-neutral-400 text-lg" style={{}}>sqft</span>
</div>
</div>

<div className="card rounded-3xl p-5 col-span-2 flex items-center gap-5">
<div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold tracking-tight shrink-0 bg-neutral-900 text-white shadow-lg shadow-neutral-200" style={{}}>XS</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-semibold truncate text-neutral-900" style={{}}>Xiao Feng Shi</p>
<p className="text-[10px] text-neutral-500 uppercase tracking-wide truncate mb-1" style={{}}>Listing Agent <span className="mx-1 text-neutral-300" style={{}}>|</span> Lic# 10401302078</p>
<div className="flex flex-wrap gap-x-3 gap-y-0 text-[11px] font-medium leading-tight text-neutral-600" style={{}}>
<span className="whitespace-nowrap hover:text-neutral-900 cursor-pointer transition-colors">P: (917) 882-9885</span>
<span className="hidden sm:inline text-neutral-300" style={{}}>•</span>
<span className="whitespace-nowrap hover:text-neutral-900 cursor-pointer transition-colors">O: (718) 886-8110</span>
</div>
</div>
<a className="w-10 h-10 shrink-0 rounded-full border flex items-center justify-center transition-all border-neutral-200 text-neutral-600 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 hover:shadow-lg" href="mailto:vincent1730@ymail.com" style={{}}>
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>

<div className="lg:col-span-8 space-y-6">
<div className="card rounded-3xl p-8 lg:p-10 relative overflow-hidden" id="details">
<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-b from-white to-transparent opacity-50 pointer-events-none"></div>
<div className="flex items-center gap-3 mb-8 relative z-10">
<div className="w-2 h-2 rounded-full bg-neutral-900 shadow-[0_0_10px_rgba(0,0,0,0.3)]" style={{}}></div>
<h2 className="text-xl font-semibold tracking-tight">Property Overview</h2>
</div>
<div className="prose prose-neutral max-w-none leading-relaxed text-sm text-neutral-600 relative z-10" style={{}}>
<p className="mb-5">
                            Welcome to Oakdale Lane, nestled in the sought-after East Hills community. Expanded in 2000, this charming residence offers a smart and comfortable layout designed for modern living. Step into a sun-filled foyer that opens seamlessly to the formal living room and dining room, featuring updated hardwood floors perfect for everyday living and entertaining.
                        </p>
<p className="">
                            The eat-in kitchen boasts a bright breakfast nook and connects effortlessly to a spacious den. Sliding glass doors lead out to the patio and fully fenced backyard, offering exceptional space for play, gardening, or weekend BBQs. With gas available on the street, future upgrades are streamlined. As a resident of East Hills, enjoy exclusive access to the village pool & park.
                        </p>
</div>
<div className="mt-10 pt-8 border-t border-neutral-100/80 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10" style={{}}>
<div>
<p className="text-[10px] uppercase tracking-wider font-bold mb-2 text-neutral-400" style={{}}>Year Built</p>
<p className="text-base font-semibold text-neutral-900" style={{}}>1948 <span className="text-neutral-400 font-normal text-sm ml-1">(Exp 2000)</span></p>
</div>
<div>
<p className="text-[10px] uppercase tracking-wider font-bold mb-2 text-neutral-400" style={{}}>Lot Size</p>
<p className="text-base font-semibold text-neutral-900" style={{}}>0.24 Acres</p>
</div>
<div className="">
<p className="text-[10px] uppercase tracking-wider font-bold mb-2 text-neutral-400" style={{}}>Heating</p>
<p className="text-base font-semibold text-neutral-900" style={{}}>Oil / Hot Water</p>
</div>
<div className="">
<p className="text-[10px] uppercase tracking-wider font-bold mb-2 text-neutral-400" style={{}}>School Dist</p>
<p className="text-base font-semibold text-neutral-900" style={{}}>Roslyn</p>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 h-64">
<div className="card rounded-3xl overflow-hidden border-0 group relative cursor-pointer">
<img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://photos.zillowstatic.com/fp/e35e61cbc0a3a44f63f42fc5302e9541-cc_ft_576.jpg" />
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="card rounded-3xl overflow-hidden border-0 group relative cursor-pointer">
<img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://photos.zillowstatic.com/fp/e0c4bf0a15aa9a4f2c114d88c7db2af5-cc_ft_576.jpg" />
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
</div>
</div>
</div>

<div className="lg:col-span-4">
<div className="sticky top-24 space-y-6">
<div className="card rounded-3xl p-7 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.05)] border-neutral-200/60" id="schools" style={{}}>
<div className="flex items-center justify-between mb-8">
<h3 className="font-semibold tracking-tight text-neutral-900" style={{}}>Nearby Schools</h3>
<div className="w-10 h-10 rounded-full flex items-center justify-center text-neutral-500 bg-neutral-100/50 backdrop-blur-sm border border-neutral-100" style={{}}>
<iconify-icon className="text-lg" icon="solar:hat-graduation-linear"></iconify-icon>
</div>
</div>
<div className="space-y-6 relative">

<div className="absolute left-[17px] top-4 bottom-4 w-[1px] border-l border-dashed border-neutral-200 z-0"></div>

<div className="flex items-start gap-4 relative z-10 group">
<div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold border shrink-0 bg-white text-indigo-600 border-indigo-100 shadow-sm transition-transform group-hover:scale-110" style={{}}>9</div>
<div className="flex-1 pb-6 border-b border-neutral-100/80">
<div className="flex justify-between items-start">
<h4 className="text-sm font-bold leading-snug text-neutral-900" style={{}}>East Hills Elementary</h4>
<span className="text-[10px] font-semibold px-2 py-0.5 rounded-full border text-neutral-500 bg-neutral-50 border-neutral-200" style={{}}>K-5</span>
</div>
<div className="flex items-center gap-4 mt-2">
<span className="text-[11px] text-neutral-500 flex items-center gap-1" style={{}}>
<iconify-icon className="-ml-0.5" icon="solar:map-point-linear"></iconify-icon> 0.3 mi
                                        </span>
<span className="text-[11px] text-neutral-400 font-medium" style={{}}>Public</span>
</div>
</div>
</div>

<div className="flex items-start gap-4 relative z-10 group">
<div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold border shrink-0 bg-white text-indigo-600 border-indigo-100 shadow-sm transition-transform group-hover:scale-110" style={{}}>9</div>
<div className="flex-1 pb-6 border-b border-neutral-100/80">
<div className="flex justify-between items-start">
<h4 className="text-sm font-bold leading-snug text-neutral-900" style={{}}>Roslyn Middle School</h4>
<span className="text-[10px] font-semibold px-2 py-0.5 rounded-full border text-neutral-500 bg-neutral-50 border-neutral-200" style={{}}>6-8</span>
</div>
<div className="flex items-center gap-4 mt-2">
<span className="text-[11px] text-neutral-500 flex items-center gap-1" style={{}}>
<iconify-icon className="-ml-0.5" icon="solar:map-point-linear"></iconify-icon> 1.2 mi
                                        </span>
<span className="text-[11px] text-neutral-400 font-medium" style={{}}>Public</span>
</div>
</div>
</div>

<div className="flex items-start gap-4 relative z-10 group">
<div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold border shrink-0 bg-white text-indigo-600 border-indigo-100 shadow-sm transition-transform group-hover:scale-110" style={{}}>9</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h4 className="text-sm font-bold leading-snug text-neutral-900" style={{}}>Roslyn High School</h4>
<span className="text-[10px] font-semibold px-2 py-0.5 rounded-full border text-neutral-500 bg-neutral-50 border-neutral-200" style={{}}>9-12</span>
</div>
<div className="flex items-center gap-4 mt-2">
<span className="text-[11px] text-neutral-500 flex items-center gap-1" style={{}}>
<iconify-icon className="-ml-0.5" icon="solar:map-point-linear"></iconify-icon> 0.8 mi
                                        </span>
<span className="text-[11px] text-neutral-400 font-medium" style={{}}>Public</span>
</div>
</div>
</div>
</div>
<div className="mt-8 pt-5 border-t border-neutral-100" style={{}}>
<p className="text-[10px] text-center leading-relaxed text-neutral-400 font-medium" style={{}}>
                                School data provided by GreatSchools. Rating 1-10.
                            </p>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
