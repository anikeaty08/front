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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030303]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="md:hidden">
<span className="iconify text-zinc-400 w-5 h-5" data-icon="lucide:menu" data-strokeWidth="1.5"></span>
</div>

<a className="text-lg font-medium tracking-tighter text-white z-50" href="#">
                HOROLOGY
            </a>

<div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
<a className="text-sm text-zinc-400 hover:text-white transition-colors duration-300" href="#">Collections</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors duration-300" href="#">Maison</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors duration-300" href="#">Service</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors duration-300" href="#">Journal</a>
</div>

<div className="flex items-center gap-6">
<button className="text-zinc-400 hover:text-white transition-colors">
<span className="iconify w-5 h-5" data-icon="lucide:search" data-strokeWidth="1.5"></span>
</button>
<button className="relative text-zinc-400 hover:text-white transition-colors">
<span className="iconify w-5 h-5" data-icon="lucide:shopping-bag" data-strokeWidth="1.5"></span>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full"></span>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-white/[0.03] rounded-[100%] blur-3xl -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-8 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs text-zinc-300 tracking-wide uppercase">New Arrival — The Series 9</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-[1.1] text-glow">
                    Precision beyond <br/> <span className="text-zinc-500">measure.</span>
</h1>
<p className="text-lg text-zinc-400 max-w-md leading-relaxed">
                    Engineered for the discerning few. A fusion of aerospace-grade materials and century-old Swiss craftsmanship.
                </p>
<div className="flex items-center gap-4 pt-4">
<button className="h-12 px-8 bg-white text-black text-sm font-medium rounded hover:bg-zinc-200 transition-colors">
                        Discover Collection
                    </button>
<button className="h-12 px-8 border border-zinc-800 text-zinc-300 text-sm font-medium rounded hover:border-zinc-600 hover:text-white transition-colors flex items-center gap-2">
                        View Film <span className="iconify w-4 h-4" data-icon="lucide:play" data-strokeWidth="1.5"></span>
</button>
</div>
</div>
<div className="relative group perspective-1000">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/10 rounded-full blur-[80px]"></div>
<div className="relative z-10 transform transition-transform duration-700 hover:scale-[1.02] hover:-rotate-1">
<img alt="Luxury Watch" className="w-full h-auto object-contain drop-shadow-2xl rounded-2xl opacity-90 grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-6 -left-6 glass-panel p-4 rounded-xl flex items-center gap-4 opacity-0 md:opacity-100 animate-[fadeIn_1s_ease-out_1s_forwards]">
<div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
<span className="iconify text-white w-5 h-5" data-icon="lucide:activity" data-strokeWidth="1.5"></span>
</div>
<div>
<p className="text-xs text-zinc-500 uppercase tracking-wider">Movement</p>
<p className="text-sm text-white font-medium">Caliber 9001 Automatic</p>
</div>
</div>
</div>
</div>
</header>

<section className="border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 py-8">
<div className="flex justify-between items-center opacity-40 grayscale mix-blend-screen overflow-x-auto gap-12 md:gap-0 no-scrollbar">
<span className="text-lg font-serif italic tracking-wide shrink-0">Patek Philippe</span>
<span className="text-lg font-serif italic tracking-wide shrink-0">Audemars Piguet</span>
<span className="text-lg font-serif italic tracking-wide shrink-0">Vacheron Constantin</span>
<span className="text-lg font-serif italic tracking-wide shrink-0">A. Lange &amp; Söhne</span>
<span className="text-lg font-serif italic tracking-wide shrink-0">Jaeger-LeCoultre</span>
</div>
</div>
</section>

<section className="pt-24 pb-12 max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h2 className="text-3xl font-medium tracking-tight text-white mb-2">Curated Timepieces</h2>
<p className="text-zinc-500 text-sm">Selection of 42 exclusive items</p>
</div>
<div className="flex items-center gap-4">

<div className="flex items-center gap-3">
<span className="text-xs text-zinc-500 font-medium">In Stock</span>
<button className="w-10 h-5 bg-zinc-800 rounded-full relative transition-colors hover:bg-zinc-700">
<span className="absolute left-1 top-1 w-3 h-3 bg-zinc-400 rounded-full transition-transform"></span>
</button>
</div>

<button className="flex items-center gap-2 text-sm text-zinc-300 border border-zinc-800 px-4 py-2 rounded hover:bg-zinc-900 transition-colors">
                    Sort by: Relevance
                    <span className="iconify w-4 h-4 text-zinc-500" data-icon="lucide:chevron-down" data-strokeWidth="1.5"></span>
</button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-32">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative">
<div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-[#080808] border border-white/5">
<img alt="Watch 1" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20">
<button className="w-full h-10 bg-white text-black text-xs font-medium uppercase tracking-wide rounded shadow-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                            Add to Cart
                        </button>
</div>
<div className="absolute top-4 right-4 z-20">
<button className="text-zinc-500 hover:text-white transition-colors">
<span className="iconify w-5 h-5" data-icon="lucide:heart" data-strokeWidth="1.5"></span>
</button>
</div>
</div>
<div className="mt-4 flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-white group-hover:text-zinc-300 transition-colors">Chronograph Automatic</h3>
<p className="text-xs text-zinc-500 mt-1">42mm, Sapphire Crystal</p>
</div>
<span className="text-sm font-medium text-white">$12,400</span>
</div>
</div>

<div className="group relative">
<div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-[#080808] border border-white/5">
<div className="absolute top-4 left-4 z-20">
<span className="px-2 py-1 bg-white text-black text-[10px] font-bold uppercase tracking-wide rounded-sm">Limited</span>
</div>
<img alt="Watch 2" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20">
<button className="w-full h-10 bg-white text-black text-xs font-medium uppercase tracking-wide rounded shadow-lg hover:bg-zinc-200 transition-colors">
                            Add to Cart
                        </button>
</div>
<div className="absolute top-4 right-4 z-20">
<button className="text-zinc-500 hover:text-white transition-colors">
<span className="iconify w-5 h-5" data-icon="lucide:heart" data-strokeWidth="1.5"></span>
</button>
</div>
</div>
<div className="mt-4 flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-white group-hover:text-zinc-300 transition-colors">Royal Oak Offshore</h3>
<p className="text-xs text-zinc-500 mt-1">Titanium, Ceramic Bezel</p>
</div>
<span className="text-sm font-medium text-white">$45,000</span>
</div>
</div>

<div className="group relative">
<div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-[#080808] border border-white/5">
<img alt="Watch 3" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20">
<button className="w-full h-10 bg-white text-black text-xs font-medium uppercase tracking-wide rounded shadow-lg hover:bg-zinc-200 transition-colors">
                            Add to Cart
                        </button>
</div>
<div className="absolute top-4 right-4 z-20">
<button className="text-zinc-500 hover:text-white transition-colors">
<span className="iconify w-5 h-5" data-icon="lucide:heart" data-strokeWidth="1.5"></span>
</button>
</div>
</div>
<div className="mt-4 flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-white group-hover:text-zinc-300 transition-colors">Nautilus Ref. 5711</h3>
<p className="text-xs text-zinc-500 mt-1">Stainless Steel, Blue Dial</p>
</div>
<span className="text-sm font-medium text-white">$115,000</span>
</div>
</div>
</div>
<div className="mt-16 text-center">
<button className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5">
                View All Timepieces <span className="iconify w-4 h-4" data-icon="lucide:arrow-right" data-strokeWidth="1.5"></span>
</button>
</div>
</section>

<section className="relative border-t border-white/5 bg-zinc-900/20">
<div className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-20 items-center">
<div className="order-2 md:order-1 relative">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-3xl opacity-50"></div>
<img alt="Movement Macro" className="relative z-10 w-full rounded-lg border border-white/10 shadow-2xl grayscale transition-all duration-700 hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="order-1 md:order-2 space-y-8">
<div className="inline-block">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-[0.2em] border-b border-zinc-800 pb-2">The Ateliers</span>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                    Where mechanics <br/> meet art.
                </h2>
<div className="space-y-6 text-zinc-400">
<p className="leading-relaxed">
                        Every timepiece in our collection undergoes a rigorous 500-hour inspection process. We verify authenticity, amplitude, and water resistance to ensure perfection.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center">
<span className="iconify text-white w-3 h-3" data-icon="lucide:check" data-strokeWidth="2"></span>
</span>
<span className="text-sm">Certified Authenticity Guarantee</span>
</li>
<li className="flex items-center gap-3">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center">
<span className="iconify text-white w-3 h-3" data-icon="lucide:check" data-strokeWidth="2"></span>
</span>
<span className="text-sm">2-Year International Warranty</span>
</li>
<li className="flex items-center gap-3">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center">
<span className="iconify text-white w-3 h-3" data-icon="lucide:check" data-strokeWidth="2"></span>
</span>
<span className="text-sm">Complimentary Service</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 text-center overflow-hidden relative">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-[#030303] to-[#030303]"></div>
<div className="relative z-10 max-w-2xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">Join the Inner Circle</h2>
<p className="text-zinc-500 mb-10 text-sm md:text-base">Receive early access to limited editions and exclusive events.</p>
<form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
<div className="flex-1 relative group">
<input className="w-full bg-transparent border-b border-zinc-700 text-white px-0 py-3 text-sm focus:outline-none focus:border-white transition-colors placeholder:text-zinc-600" placeholder="email@address.com" type="email"/>
</div>
<button className="px-6 py-3 bg-white text-black text-sm font-medium rounded hover:bg-zinc-200 transition-colors whitespace-nowrap" type="button">
                    Subscribe
                </button>
</form>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020202] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-lg font-medium tracking-tighter text-white block mb-6" href="#">HOROLOGY</a>
<p className="text-xs text-zinc-500 leading-relaxed max-w-[200px]">
                        Curating the world's finest timepieces for the modern collector.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-6">Shop</h4>
<ul className="space-y-4">
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">New Arrivals</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Best Sellers</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Pre-owned</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Accessories</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-6">Company</h4>
<ul className="space-y-4">
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">About</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Journal</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-6">Social</h4>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><span className="iconify w-5 h-5" data-icon="lucide:instagram" data-strokeWidth="1.5"></span></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><span className="iconify w-5 h-5" data-icon="lucide:twitter" data-strokeWidth="1.5"></span></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><span className="iconify w-5 h-5" data-icon="lucide:facebook" data-strokeWidth="1.5"></span></a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
<p className="text-[10px] text-zinc-600">© 2024 Horology Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-[10px] text-zinc-600 hover:text-zinc-400" href="#">Privacy Policy</a>
<a className="text-[10px] text-zinc-600 hover:text-zinc-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
