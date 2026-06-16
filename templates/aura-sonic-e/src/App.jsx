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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 text-lg font-medium text-white tracking-tighter" href="#">
<div className="w-4 h-4 bg-white rounded-full"></div>
          AURA
        </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors duration-200" href="#">
            Products
          </a>
<a className="hover:text-white transition-colors duration-200" href="#">
            Craftsmanship
          </a>
<a className="hover:text-white transition-colors duration-200" href="#">
            About
          </a>
</div>
<div className="flex items-center gap-4">
<button className="p-2 hover:bg-white/5 rounded-full transition-colors">
<svg className="lucide lucide-search w-5 h-5 text-neutral-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button className="relative p-2 hover:bg-white/5 rounded-full transition-colors group">
<svg className="lucide lucide-shopping-bag w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
<span className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full"></span>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
<div className="space-y-8 animate-fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-neutral-300">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
</span>
            New Arrival: Series X
          </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[0.9]">
            Sonic
            <br/>
<span className="text-neutral-500">Architecture.</span>
</h1>
<p className="text-lg text-neutral-400 max-w-md leading-relaxed font-light">
            Redefining auditory perception through minimalist engineering and
            acoustic precision. Experience sound in its purest form.
          </p>
<div className="flex items-center gap-6 pt-4">
<button className="h-12 px-8 bg-white text-black text-sm font-medium rounded-full hover:bg-neutral-200 transition-colors flex items-center gap-2">
              Explore Collection
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="h-12 px-8 border border-white/10 text-white text-sm font-medium rounded-full hover:bg-white/5 transition-colors">
              Watch Film
            </button>
</div>
</div>

<div className="relative h-[500px] w-full bg-neutral-900/30 rounded-3xl border border-white/5 overflow-hidden animate-fade-up delay-200 group">
<div className="bg-center group-hover:scale-105 transition-transform duration-700 hover:grayscale-0 opacity-80 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/90758097-5cc2-4a54-9e67-8f676afbd571_1600w.webp)] bg-cover absolute top-0 right-0 bottom-0 left-0 grayscale"></div>
<div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-black/40 border border-white/10 p-4 rounded-2xl flex justify-between items-center">
<div>
<p className="text-white text-sm font-medium">Aura Headphone Mk.II</p>
<p className="text-neutral-400 text-xs">$399.00</p>
</div>
<div className="flex items-center gap-3">

<div className="flex items-center gap-2">
<span className="text-[10px] uppercase tracking-wider text-neutral-500">
                  Noise Cancellation
                </span>
<div className="w-8 h-4 bg-white/20 rounded-full relative cursor-pointer">
<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-neutral-900/20 overflow-hidden py-8">
<div className="flex whitespace-nowrap animate-scroll">
<div className="flex gap-16 items-center px-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-medium tracking-tight">WIRED</span>
<span className="text-xl font-medium tracking-tight">The Verge</span>
<span className="text-xl font-medium tracking-tight">HYPEBEAST</span>
<span className="text-xl font-medium tracking-tight">TechCrunch</span>
<span className="text-xl font-medium tracking-tight">Monocle</span>
<span className="text-xl font-medium tracking-tight">GQ</span>
</div>

<div className="flex gap-16 items-center px-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-medium tracking-tight">WIRED</span>
<span className="text-xl font-medium tracking-tight">The Verge</span>
<span className="text-xl font-medium tracking-tight">HYPEBEAST</span>
<span className="text-xl font-medium tracking-tight">TechCrunch</span>
<span className="text-xl font-medium tracking-tight">Monocle</span>
<span className="text-xl font-medium tracking-tight">GQ</span>
</div>
<div className="flex gap-16 items-center px-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-medium tracking-tight">WIRED</span>
<span className="text-xl font-medium tracking-tight">The Verge</span>
<span className="text-xl font-medium tracking-tight">HYPEBEAST</span>
<span className="text-xl font-medium tracking-tight">TechCrunch</span>
<span className="text-xl font-medium tracking-tight">Monocle</span>
<span className="text-xl font-medium tracking-tight">GQ</span>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative group/section">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full max-h-[600px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none opacity-0 group-hover/section:opacity-100 transition-opacity duration-1000"></div>
<div className="flex justify-between items-end mb-12 relative z-10">
<div>
<h2 className="text-3xl font-medium tracking-tight text-white mb-2 relative inline-flex items-center gap-2">
            Curated Collection
            <span className="flex h-1.5 w-1.5 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
</span>
</h2>
<p className="text-neutral-500 text-sm">
            Essentials for the modern audiophile.
          </p>
</div>
<a className="group/link flex items-center gap-2 text-sm text-white transition-colors" href="#">
<span className="border-b border-white/20 pb-0.5 group-hover/link:border-white transition-colors duration-300">
            View All
          </span>
<svg className="transform transition-transform duration-300 group-hover/link:translate-x-1 text-white/60 group-hover/link:text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 group relative rounded-3xl bg-neutral-900 border border-white/5 overflow-hidden hover:border-white/10 transition-colors duration-500">
<div className="absolute inset-0 img-wrap overflow-hidden">
<img alt="Speaker" className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c920d31f-46c8-4f39-957b-9a8d8e511a1a_1600w.jpg" style={{}}/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>

<div className="absolute top-8 right-8 flex gap-1 items-end h-6 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
<div className="w-1 bg-white rounded-full h-2 group-hover:animate-[wave_1s_ease-in-out_infinite]"></div>
<div className="w-1 bg-white rounded-full h-4 group-hover:animate-[wave_1.2s_ease-in-out_infinite_0.1s]"></div>
<div className="w-1 bg-white rounded-full h-3 group-hover:animate-[wave_0.8s_ease-in-out_infinite_0.2s]"></div>
<div className="w-1 bg-white rounded-full h-5 group-hover:animate-[wave_1.1s_ease-in-out_infinite_0.3s]"></div>
<div className="w-1 bg-white rounded-full h-2 group-hover:animate-[wave_0.9s_ease-in-out_infinite_0.4s]"></div>
</div>
<div className="absolute bottom-0 left-0 p-8 w-full z-20">
<div className="flex justify-between items-end">
<div className="transform transition-transform duration-500 group-hover:-translate-y-2">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-wider mb-3 backdrop-blur-sm">
                  Best Seller
                </span>
<h3 className="text-3xl font-medium text-white mb-2 leading-tight">
                  Phantom Speaker
                </h3>
<div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
<p className="text-neutral-400 text-sm max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                    Engineered for pure, unadulterated sound. Experience 360°
                    spatial audio that fills every corner of your room.
                  </p>
</div>
<p className="text-neutral-400 text-sm group-hover:hidden transition-opacity duration-300">
                  360° Spatial Audio
                </p>
</div>
<button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 cubic-bezier(0.175, 0.885, 0.32, 1.275) hover:scale-110 hover:bg-blue-50">
<svg className="lucide lucide-arrow-up-right w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="group relative rounded-3xl bg-neutral-900 border border-white/5 overflow-hidden hover:border-white/10 transition-colors duration-500">
<div className="absolute inset-0 img-wrap overflow-hidden">
<img alt="Earbuds" className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2c5bff42-ed1d-4d52-ad1a-e5f1fe6e9e4e_800w.jpg"/>
</div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-90 group-hover:scale-100">
<div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-xs font-medium tracking-wide">
              View Details
            </div>
</div>
<div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/90 to-transparent">
<div className="transform transition-transform duration-300 group-hover:translate-y-1">
<h3 className="text-lg font-medium text-white">Buds Pro</h3>
<p className="text-neutral-400 text-xs mt-1 font-mono group-hover:text-white transition-colors">
                $199.00
              </p>
</div>
</div>
</div>

<div className="group relative rounded-3xl bg-neutral-900 border border-white/5 overflow-hidden p-6 flex flex-col justify-between hover:border-white/10 transition-colors duration-500">

<div className="absolute -right-16 -top-16 w-64 h-64 rounded-full overflow-hidden opacity-50 transition-opacity duration-500">
<div className="w-full h-full relative group-hover:animate-[spin_4s_linear_infinite]">
<img alt="Vinyl" className="w-full h-full object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{}}/>
<div className="absolute inset-0 rounded-full border border-white/10"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-neutral-900 rounded-full border border-white/10 flex items-center justify-center">
<div className="w-2 h-2 bg-white/20 rounded-full"></div>
</div>
</div>
</div>
<div className="relative z-10 flex justify-end">
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-800/80 border border-white/10 text-white/50 hover:text-red-500 hover:bg-red-500/10 hover:border-red-500/20 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="relative z-10">
<h3 className="text-lg font-medium text-white group-hover:translate-x-1 transition-transform duration-300">
              Turntable X
            </h3>
<div className="flex items-center gap-2 mt-2">
<span className="h-px w-4 bg-neutral-600 group-hover:w-8 group-hover:bg-white transition-all duration-500"></span>
<p className="text-neutral-500 text-xs group-hover:text-neutral-300 transition-colors">
                Analog Warmth
              </p>
</div>
</div>
</div>
</div>
<style>
        @keyframes wave {
          0%, 100% { height: 30%; }
          50% { height: 100%; }
        }
      </style>
</section>

<section className="border-y bg-neutral-900/30 border-white/5 pt-24 pb-24 relative overflow-hidden">
<style>
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes ripple {
          0% { transform: scale(0.8); opacity: 0.5; border-color: rgba(255,255,255,0.2); }
          100% { transform: scale(1.6); opacity: 0; border-color: transparent; }
        }
        @keyframes grow-bar {
          from { width: 0%; }
          to { width: var(--w); }
        }
        @keyframes scan {
          0% { top: -100%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 200%; opacity: 0; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float 6s ease-in-out 3s infinite; }
        .animate-ripple { animation: ripple 3s cubic-bezier(0, 0.2, 0.8, 1) infinite; }
        .animate-grow { animation: grow-bar 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .animate-scan { animation: scan 4s linear infinite; }
      </style>

<div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

<div className="order-2 md:order-1 relative group perspective-normal">

<div className="relative w-full aspect-square max-w-md mx-auto transform transition-transform duration-700 hover:scale-105">

<div className="absolute inset-0 border border-white/5 rounded-full animate-ripple pointer-events-none"></div>
<div className="absolute inset-0 border border-white/5 rounded-full animate-ripple pointer-events-none" style={{animationDelay: '1s'}}></div>
<div className="absolute inset-0 border border-white/5 rounded-full animate-ripple pointer-events-none" style={{animationDelay: '2s'}}></div>

<div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-4 border border-dashed border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-neutral-900 shadow-2xl z-10 group-hover:border-neutral-800 transition-colors duration-500">
<img alt="Detail" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8a9a6c6a-c589-44de-af63-bfb4346e04de_800w.jpg"/>

<div className="absolute inset-x-0 h-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent animate-scan pointer-events-none"></div>
</div>
</div>

<div className="absolute -top-4 right-0 bg-neutral-950/90 border border-white/10 p-4 rounded-xl backdrop-blur-md animate-float shadow-lg shadow-black/50 hover:border-white/20 transition-colors z-20">
<div className="flex items-center gap-2 mb-1">
<svg className="lucide lucide-battery-charging w-4 h-4 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m11 7-3 5h4l-3 5"></path>
<path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935"></path>
<path d="M22 14v-4"></path>
<path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"></path>
</svg>
<span className="text-xs font-medium text-white">Battery</span>
</div>
<p className="text-xl font-semibold text-white">40h+</p>
</div>
<div className="absolute bottom-10 -left-8 bg-neutral-950/90 border border-white/10 p-4 rounded-xl backdrop-blur-md animate-float-delayed shadow-lg shadow-black/50 hover:border-white/20 transition-colors z-20">
<div className="flex items-center gap-2 mb-1">
<svg className="lucide lucide-wifi w-4 h-4 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20h.01"></path>
<path d="M2 8.82a15 15 0 0 1 20 0"></path>
<path d="M5 12.859a10 10 0 0 1 14 0"></path>
<path d="M8.5 16.429a5 5 0 0 1 7 0"></path>
</svg>
<span className="text-xs font-medium text-white">Latency</span>
</div>
<p className="text-xl font-semibold text-white">2ms</p>
</div>
</div>
</div>

<div className="order-1 md:order-2 space-y-8">
<div>
<h2 className="text-4xl font-medium tracking-tight text-white mb-4">
              Engineered for
              <span className="relative inline-block text-white">
                Silence.
                
<span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-blue-500 to-transparent"></span>
</span>
</h2>
<p className="text-neutral-400 text-sm leading-relaxed max-w-md">
              Our proprietary active noise cancellation algorithms adapt 48,000
              times per second to your environment, creating a sanctuary of
              silence wherever you go.
            </p>
</div>
<div className="space-y-6">

<div className="space-y-2 group/slider">
<div className="flex justify-between text-xs font-medium text-neutral-400 group-hover/slider:text-white transition-colors">
<span>Noise Reduction</span>
<span className="text-white">98%</span>
</div>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-white rounded-full animate-grow shadow-[0_0_10px_rgba(255,255,255,0.5)]" style={{-W: '98%', width: '0%'}}></div>
</div>
</div>

<div className="space-y-2 group/slider">
<div className="flex justify-between text-xs font-medium text-neutral-400 group-hover/slider:text-white transition-colors">
<span>Frequency Range</span>
<span className="text-white">4Hz - 40kHz</span>
</div>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-white rounded-full animate-grow shadow-[0_0_10px_rgba(255,255,255,0.5)]" style={{-W: '92%', width: '0%', animationDelay: '0.3s'}}></div>
</div>
</div>
</div>
<ul className="space-y-3 pt-4">
<li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300">
<div className="p-1 rounded-full bg-white/5 group-hover/item:bg-blue-500/20 group-hover/item:text-blue-400 transition-colors">
<svg className="lucide lucide-check w-3 h-3 text-white group-hover/item:text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-sm text-neutral-400 group-hover/item:text-white transition-colors">
                Titanium drivers for distortion-free sound
              </span>
</li>
<li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300">
<div className="p-1 rounded-full bg-white/5 group-hover/item:bg-blue-500/20 group-hover/item:text-blue-400 transition-colors">
<svg className="lucide lucide-check w-3 h-3 text-white group-hover/item:text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-sm text-neutral-400 group-hover/item:text-white transition-colors">
                Memory foam ear cushions for all-day comfort
              </span>
</li>
<li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300">
<div className="p-1 rounded-full bg-white/5 group-hover/item:bg-blue-500/20 group-hover/item:text-blue-400 transition-colors">
<svg className="lucide lucide-check w-3 h-3 text-white group-hover/item:text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-sm text-neutral-400 group-hover/item:text-white transition-colors">
                Seamless multi-device connectivity
              </span>
</li>
</ul>
</div>
</div>
</section>
<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/20 via-[#050505] to-[#050505] opacity-60"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-blue-400">
<svg className="lucide lucide-smartphone w-3 h-3" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
              Aura Connect App
            </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.1]">
              Sculpt your

              <span className="text-neutral-500">Soundscape.</span>
</h2>
<p className="text-lg text-neutral-400 max-w-md font-light">
              Unlock the full potential of your hardware. Customize EQ curves,
              manage noise cancellation levels, and update firmware instantly
              via our intuitive interface.
            </p>
<div className="flex flex-col gap-4 pt-4">

<div className="h-24 flex items-end gap-1.5 opacity-80">
<div className="w-2 bg-white/20 rounded-t-sm h-[40%] animate-pulse"></div>
<div className="w-2 bg-white/40 rounded-t-sm h-[70%] animate-pulse delay-75"></div>
<div className="w-2 bg-white rounded-t-sm h-[50%] animate-pulse delay-100"></div>
<div className="w-2 bg-white rounded-t-sm h-[85%] animate-pulse delay-150"></div>
<div className="w-2 bg-white/40 rounded-t-sm h-[60%] animate-pulse delay-200"></div>
<div className="w-2 bg-white/20 rounded-t-sm h-[45%] animate-pulse delay-300"></div>
<div className="w-2 bg-white/10 rounded-t-sm h-[30%] animate-pulse delay-100"></div>
<div className="w-2 bg-white/20 rounded-t-sm h-[55%] animate-pulse delay-75"></div>
<div className="w-2 bg-white/50 rounded-t-sm h-[90%] animate-pulse delay-150"></div>
<div className="w-2 bg-white/30 rounded-t-sm h-[40%] animate-pulse delay-200"></div>
</div>
<p className="text-xs text-neutral-500 font-mono tracking-wider">
                LIVE FREQUENCY RESPONSE
              </p>
</div>
</div>
<div className="relative bg-neutral-900/50 border border-white/10 rounded-3xl p-8 aspect-[4/3] flex items-center justify-center overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent opacity-50 transition-opacity group-hover:opacity-80"></div>

<div className="relative w-64 h-full bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl p-5 flex flex-col gap-5 transform rotate-6 transition-transform duration-700 cubic-bezier(0.2, 0.8, 0.2, 1) group-hover:rotate-0">
<div className="flex justify-between items-center border-b border-white/5 pb-3">
<div className="w-16 h-1.5 bg-white/10 rounded-full"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="flex-1 flex flex-col justify-center gap-4">
<div className="space-y-2">
<div className="flex justify-between items-center text-[10px] text-neutral-400 uppercase tracking-wider">
<span>Bass Boost</span>
<span className="text-white font-medium">+4dB</span>
</div>
<div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
<div className="w-3/4 h-full bg-white rounded-full"></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between items-center text-[10px] text-neutral-400 uppercase tracking-wider">
<span>Treble</span>
<span className="text-white font-medium">-1dB</span>
</div>
<div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
<div className="w-1/2 h-full bg-white rounded-full"></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between items-center text-[10px] text-neutral-400 uppercase tracking-wider">
<span>Vocal Clarity</span>
<span className="text-white font-medium">High</span>
</div>
<div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
<div className="w-5/6 h-full bg-white/60 rounded-full"></div>
</div>
</div>
</div>
<button className="h-10 bg-white text-black rounded-lg flex items-center justify-center text-xs font-bold hover:bg-neutral-200 transition-colors">
                Apply Preset
              </button>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] border-t border-white/5 py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
<div className="max-w-2xl">
<h2 className="text-4xl font-medium tracking-tight text-white mb-4">
              Visual Language
            </h2>
<p className="text-neutral-500 text-sm leading-relaxed max-w-md">
              A curated exploration of form, texture, and light. We document the
              intersection of natural chaos and industrial order to inspire our
              design philosophy.
            </p>
</div>
<div className="flex gap-4">
<button className="text-xs font-medium text-white border border-white/10 bg-white/5 px-4 py-2 rounded-full hover:bg-white/10 transition-colors">
              All Materials
            </button>
<button className="text-xs font-medium text-neutral-500 hover:text-white transition-colors px-4 py-2">
              Process
            </button>
<button className="text-xs font-medium text-neutral-500 hover:text-white transition-colors px-4 py-2">
              Sketches
            </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[280px] gap-4">

<div className="group relative md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden bg-neutral-900 border border-white/5">
<img alt="Abstract Architecture" className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<span className="inline-block px-2 py-1 mb-3 text-[10px] font-medium tracking-widest text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 rounded-md backdrop-blur-sm">
                Architecture
              </span>
<h3 className="text-2xl font-medium text-white mb-2">
                Geometric Harmony
              </h3>
<p className="text-neutral-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-xs">
                Finding balance in rigid structures and fluid light.
              </p>
</div>
<div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<svg className="lucide lucide-arrow-up-right w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>

<div className="group relative md:col-span-1 md:row-span-2 rounded-3xl overflow-hidden bg-neutral-900 border border-white/5">
<img alt="Dark Texture" className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-70" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90"></div>
<div className="absolute bottom-8 left-0 w-full px-6 text-center">
<p className="text-xs font-mono text-neutral-500 mb-2 group-hover:text-blue-400 transition-colors">
                02 / TEXTURE
              </p>
<h3 className="text-lg font-medium text-white">Carbon Fiber</h3>
<div className="w-px h-8 bg-white/20 mx-auto mt-4 group-hover:h-12 group-hover:bg-blue-500 transition-all duration-500"></div>
</div>
</div>

<div className="group relative md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden bg-neutral-900 border border-white/5">
<img alt="Fluid" className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
<div className="absolute top-4 left-4">
<span className="w-2 h-2 rounded-full bg-green-500 block"></span>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-white text-sm font-medium tracking-wide border-b border-white pb-0.5">
                View Detail
              </span>
</div>
</div>

<div className="group relative md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden bg-neutral-900 border border-white/5">
<img alt="Abstract" className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1492551557933-34265f7af79e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
<span className="text-xs text-white font-medium">Refraction</span>
<svg className="lucide lucide-plus text-white" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</div>
</div>

<div className="group relative md:col-span-2 md:row-span-1 rounded-3xl overflow-hidden bg-neutral-900 border border-white/5 flex items-center">
<img alt="Wide Light" className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
<div className="relative p-8 z-10 w-full flex justify-between items-center">
<div>
<h3 className="text-xl font-medium text-white mb-1">
                  Spectral Analysis
                </h3>
<p className="text-neutral-500 text-xs font-mono">
                  400nm - 700nm RANGE
                </p>
</div>
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:bg-white group-hover:text-black group-hover:border-transparent transition-all duration-300">
<svg className="lucide lucide-play w-4 h-4 fill-current" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
</div>

<div className="group relative md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden bg-neutral-900 border border-white/5">
<div className="absolute inset-0 bg-neutral-800/50 group-hover:bg-blue-600/10 transition-colors duration-500"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
<div className="w-full flex-1 border border-dashed border-white/10 rounded-xl flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" style={{}}></div>
<span className="text-4xl font-bold text-white/5 group-hover:text-white/20 transition-colors">
                  Aa
                </span>
</div>
<div className="w-full flex justify-between items-center">
<span className="text-[10px] text-neutral-500 uppercase tracking-wider">
                  Typography
                </span>
<span className="text-[10px] text-white">Inter</span>
</div>
</div>
</div>

<div className="group relative md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden bg-neutral-900 border border-white/5">
<img alt="Light" className="absolute inset-0 w-full h-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-60" src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-center transform transition-transform duration-300 group-hover:scale-110">
<p className="text-3xl font-light text-white">24</p>
<p className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1">
                  Collections
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black border-y border-white/5 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
<div>
<h2 className="text-4xl font-medium text-white tracking-tight">
            Sonic Spectrum
          </h2>
<p className="text-neutral-500 mt-2 text-sm">
            Explore the layers of our signature sound profile.
          </p>
</div>
<div className="hidden md:block text-neutral-600 text-xs font-mono">
          INTERACTIVE FREQUENCY MAP
        </div>
</div>
<div className="max-w-7xl mx-auto px-6 h-[500px] flex flex-col md:flex-row gap-2">

<div className="group relative flex-1 hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] rounded-2xl overflow-hidden border border-white/5 bg-neutral-900">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614726365723-49cfae96c6b4?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-700" style={{}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex items-center gap-4 mb-2">
<span className="text-4xl font-light text-white/20 group-hover:text-white transition-colors duration-500">
                20Hz
              </span>
<div className="h-px flex-1 bg-white/20 group-hover:bg-white transition-colors"></div>
</div>
<h3 className="text-2xl font-medium text-white mb-2">Deep Bass</h3>
<p className="text-neutral-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-md transform translate-y-4 group-hover:translate-y-0">
              Visceral low-end frequencies that you can feel. Tuned for impact
              without muddiness.
            </p>
</div>
</div>

<div className="group relative flex-1 hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] rounded-2xl overflow-hidden border border-white/5 bg-neutral-900">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&amp;w=1931&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-700" style={{}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex items-center gap-4 mb-2">
<span className="text-4xl font-light text-white/20 group-hover:text-white transition-colors duration-500">
                2kHz
              </span>
<div className="h-px flex-1 bg-white/20 group-hover:bg-white transition-colors"></div>
</div>
<h3 className="text-2xl font-medium text-white mb-2">Rich Mids</h3>
<p className="text-neutral-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-md transform translate-y-4 group-hover:translate-y-0">
              Where vocals live. Preserving the emotional core of every
              performance with crystal clarity.
            </p>
</div>
</div>

<div className="group relative flex-1 hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] rounded-2xl overflow-hidden border border-white/5 bg-neutral-900">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-700" style={{}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex items-center gap-4 mb-2">
<span className="text-4xl font-light text-white/20 group-hover:text-white transition-colors duration-500">
                20kHz
              </span>
<div className="h-px flex-1 bg-white/20 group-hover:bg-white transition-colors"></div>
</div>
<h3 className="text-2xl font-medium text-white mb-2">Airy Highs</h3>
<p className="text-neutral-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-md transform translate-y-4 group-hover:translate-y-0">
              Sparkling detail and atmospheric decay. Capturing the room tone
              and subtle nuances.
            </p>
</div>
</div>
</div>
</section>
<section className="py-32 bg-[#080808] relative overflow-hidden group/blueprint">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20">
<h2 className="text-4xl font-medium text-white tracking-tight">
            From the
            <span className="text-neutral-600">Lab.</span>
</h2>
<div className="flex items-center gap-2 mt-4 md:mt-0">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
<span className="text-xs font-mono text-red-500 uppercase tracking-widest">
              Confidential R&amp;D
            </span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 [perspective:1000px]">

<div className="relative h-96 group hover:z-20">
<div className="absolute inset-0 bg-[#0a0a0a] border border-white/10 p-6 rounded-xl transform transition-all duration-500 group-hover:[transform:rotateY(5deg)_translateY(-10px)] group-hover:shadow-2xl shadow-blue-900/20">
<div className="flex justify-between items-start mb-6">
<span className="text-xs font-mono text-neutral-500">FIG 1.0</span>
<svg className="lucide lucide-cpu w-5 h-5 text-neutral-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="16" x="4" y="4"></rect>
<rect height="6" rx="1" width="6" x="9" y="9"></rect>
<path d="M15 2v2"></path>
<path d="M15 20v2"></path>
<path d="M2 15h2"></path>
<path d="M2 9h2"></path>
<path d="M20 15h2"></path>
<path d="M20 9h2"></path>
<path d="M9 2v2"></path>
<path d="M9 20v2"></path>
</svg>
</div>
<div className="w-full h-40 bg-white/5 rounded-lg mb-6 flex items-center justify-center border border-dashed border-white/20 overflow-hidden">
<img alt="Schematic" className="w-full h-full object-cover grayscale opacity-50 mix-blend-screen" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<h3 className="text-xl font-medium text-white mb-2">
                Driver Assembly
              </h3>
<p className="text-sm text-neutral-400">
                Custom 50mm beryllium drivers designed for rapid transient
                response and minimal distortion.
              </p>
</div>
</div>

<div className="relative h-96 group hover:z-20 md:mt-12">
<div className="absolute inset-0 bg-[#0a0a0a] border border-white/10 p-6 rounded-xl transform transition-all duration-500 group-hover:[transform:rotateY(-5deg)_translateY(-10px)] group-hover:shadow-2xl shadow-purple-900/20">
<div className="flex justify-between items-start mb-6">
<span className="text-xs font-mono text-neutral-500">MAT-X</span>
<svg className="lucide lucide-layers w-5 h-5 text-neutral-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path>
<path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
<path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
</svg>
</div>
<div className="w-full h-40 bg-white/5 rounded-lg mb-6 flex items-center justify-center border border-dashed border-white/20 overflow-hidden relative">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
<div className="w-16 h-16 rounded-full bg-neutral-800 border border-white/20 shadow-inner"></div>
</div>
<h3 className="text-xl font-medium text-white mb-2">
                Composite Weave
              </h3>
<p className="text-sm text-neutral-400">
                Aerospace-grade carbon fiber housing provides rigidity while
                reducing overall weight by 40%.
              </p>
</div>
</div>

<div className="relative h-96 group hover:z-20">
<div className="absolute inset-0 bg-[#0a0a0a] border border-white/10 p-6 rounded-xl transform transition-all duration-500 group-hover:[transform:rotateY(5deg)_translateY(-10px)] group-hover:shadow-2xl shadow-green-900/20">
<div className="flex justify-between items-start mb-6">
<span className="text-xs font-mono text-neutral-500">PROTO_V4</span>
<svg className="lucide lucide-flask-conical w-5 h-5 text-neutral-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"></path>
<path d="M8.5 2h7"></path>
<path d="M7 16h10"></path>
</svg>
</div>
<div className="w-full h-40 bg-white/5 rounded-lg mb-6 flex items-center justify-center border border-dashed border-white/20 overflow-hidden">
<img alt="Prototype" className="w-full h-full object-cover grayscale opacity-50" src="https://images.unsplash.com/photo-1555664424-778a6902201b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<h3 className="text-xl font-medium text-white mb-2">
                Acoustic Chamber
              </h3>
<p className="text-sm text-neutral-400">
                142 iterations to perfect the airflow, resulting in an open-back
                soundstage with closed-back isolation.
              </p>
</div>
</div>
</div>
</div>
</section>
<section className="py-32 relative overflow-hidden bg-[#050505]">
<style>
    @keyframes float-gentle {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
    }
    .animate-float-gentle {
      animation: float-gentle 6s ease-in-out infinite;
    }
    .delay-1000 { animation-delay: 1.5s; }
    .delay-2000 { animation-delay: 3s; }
  </style>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
<div className="max-w-xl">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
          Heard by the <span className="text-neutral-500">Best.</span>
</h2>
<p className="text-neutral-400 text-lg font-light leading-relaxed">
          Trusted by producers, artists, and audiophiles who refuse to compromise on fidelity.
        </p>
</div>

<div className="flex items-center gap-3">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-[#050505] bg-neutral-800 flex items-center justify-center text-xs text-white font-medium shadow-lg">JD</div>
<div className="w-10 h-10 rounded-full border-2 border-[#050505] bg-neutral-700 flex items-center justify-center text-xs text-white font-medium shadow-lg">AS</div>
<div className="w-10 h-10 rounded-full border-2 border-[#050505] bg-neutral-600 flex items-center justify-center text-xs text-white font-medium shadow-lg">MR</div>
<div className="w-10 h-10 rounded-full border-2 border-[#050505] bg-neutral-900 flex items-center justify-center text-xs text-neutral-400 font-medium shadow-lg backdrop-blur-sm">+2k</div>
</div>
<span className="text-sm text-neutral-500 font-medium">Join the community</span>
</div>
</div>

<div className="grid md:grid-cols-3 gap-8">

<div className="animate-float-gentle group relative p-8 rounded-[2rem] bg-neutral-900/40 border border-white/5 backdrop-blur-sm hover:bg-neutral-900/60 transition-all duration-500 hover:border-white/10 hover:shadow-2xl hover:shadow-blue-500/5">
<div className="relative z-10 flex flex-col h-full justify-between">
<div>
<div className="flex gap-1 text-yellow-500/90 mb-6">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-neutral-300 text-sm leading-7 mb-8 font-light">
              "The attention to detail is staggering. It's not just a product; it's a piece of art that happens to play music flawlessly. The soundstage is remarkably wide."
            </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-white/5">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-950 border border-white/10 flex items-center justify-center text-xs font-semibold text-white shadow-inner">
              JD
            </div>
<div>
<p className="text-sm font-medium text-white">James Doe</p>
<p className="text-xs text-neutral-500">Music Producer</p>
</div>
</div>
</div>

<div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
</div>

<div className="animate-float-gentle delay-1000 group relative p-8 rounded-[2rem] bg-neutral-900/40 border border-white/5 backdrop-blur-sm hover:bg-neutral-900/60 transition-all duration-500 hover:border-white/10 hover:shadow-2xl hover:shadow-purple-500/5">
<div className="relative z-10 flex flex-col h-full justify-between">
<div>
<div className="flex gap-1 text-yellow-500/90 mb-6">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-7l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-neutral-300 text-sm leading-7 mb-8 font-light">
              "Finally, a brand that understands the balance between aesthetic and performance. The battery life is a game changer for my daily workflow."
            </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-white/5">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-950 border border-white/10 flex items-center justify-center text-xs font-semibold text-white shadow-inner">
              AS
            </div>
<div>
<p className="text-sm font-medium text-white">Anna Smith</p>
<p className="text-xs text-neutral-500">Creative Director</p>
</div>
</div>
</div>

<div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
</div>

<div className="animate-float-gentle delay-2000 group relative p-8 rounded-[2rem] bg-neutral-900/40 border border-white/5 backdrop-blur-sm hover:bg-neutral-900/60 transition-all duration-500 hover:border-white/10 hover:shadow-2xl hover:shadow-emerald-500/5">
<div className="relative z-10 flex flex-col h-full justify-between">
<div>
<div className="flex gap-1 text-yellow-500/90 mb-6">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-neutral-300 text-sm leading-7 mb-8 font-light">
              "Minimalist perfection. The unboxing experience alone was worth the price tag. Highly recommended for anyone who values design as much as function."
            </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-white/5">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-950 border border-white/10 flex items-center justify-center text-xs font-semibold text-white shadow-inner">
              MR
            </div>
<div>
<p className="text-sm font-medium text-white">Mark Roberts</p>
<p className="text-xs text-neutral-500">Architect</p>
</div>
</div>
</div>

<div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto bg-neutral-900 rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden border border-white/5">

<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50"></div>
<div className="relative z-10 space-y-6">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
            Elevate your senses.
          </h2>
<p className="text-neutral-400 text-sm max-w-lg mx-auto">
            Join the club of discerning listeners. Pre-order the new Series X
            today and receive exclusive access to our lossless library.
          </p>
<div className="flex justify-center gap-4 pt-4">
<button className="h-12 px-8 bg-white text-black text-sm font-medium rounded-full hover:bg-neutral-200 transition-colors">
              Pre-order Now
            </button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#030303] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
<div className="space-y-4">
<h4 className="text-white font-medium text-sm">Products</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Headphones
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Earbuds
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Speakers
                </a>
</li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-white font-medium text-sm">Company</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li>
<a className="hover:text-white transition-colors" href="#">About</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Careers
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">Press</a>
</li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-white font-medium text-sm">Support</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Help Center
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Warranty
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Returns
                </a>
</li>
</ul>
</div>
<div className="col-span-2 md:col-span-1 space-y-4">
<h4 className="text-white font-medium text-sm">Stay Updated</h4>
<form className="flex gap-2">
<input className="bg-neutral-900 border border-white/10 rounded-lg px-4 py-2 text-sm text-white w-full focus:outline-none focus:border-white/30 transition-colors" placeholder="Email address" type="email"/>
<button className="bg-white text-black rounded-lg px-3 py-2 hover:bg-neutral-200 transition-colors" type="button">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</form>
<p className="text-xs text-neutral-600">
              We respect your privacy. Unsubscribe anytime.
            </p>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
<a className="text-xl font-medium tracking-tighter text-white mb-4 md:mb-0" href="#">
            AURA
          </a>
<div className="flex gap-6 text-sm text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Sitemap</a>
</div>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
<p className="text-center text-[10px] text-neutral-700 mt-8">
          © 2024 Aura Inc. All rights reserved.
        </p>
</div>
</footer>


    </>
  );
}
