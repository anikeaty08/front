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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center text-white group-hover:bg-[#f26c0d]/20 group-hover:text-[#f26c0d] transition-colors duration-300">
<i className="w-4 h-4" data-lucide="utensils"></i>
</div>
<span className="text-lg font-medium tracking-tighter text-white">Yumlog</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#baa89c]">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#community">Community</a>
<a className="hover:text-white transition-colors" href="#about">Our Story</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-[#baa89c] hover:text-white transition-colors" href="#">Log in</a>
<a className="px-4 py-2 text-xs font-semibold text-[#221710] bg-white rounded-full hover:bg-gray-200 transition-colors tracking-tight" href="#">
                    Get App
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#f26c0d]/10 rounded-full blur-[120px] -z-10 opacity-60 pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col gap-8 text-center lg:text-left">
<div className="space-y-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 w-fit mx-auto lg:mx-0">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f26c0d] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#f26c0d]"></span>
</span>
<span className="text-xs font-medium text-[#baa89c] tracking-wide">v2.0 is now live on iOS</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-[1.1]">
                        Remember every <br/>
<span className="text-gradient">delicious bite.</span>
</h1>
<p className="text-lg text-[#baa89c] leading-relaxed max-w-lg mx-auto lg:mx-0">
                        The definitive journal for your culinary adventures. Log photos, rate flavors, map locations, and curate your personal taste profile.
                    </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
<button className="h-12 px-6 rounded-full bg-white text-[#221710] font-semibold text-sm hover:bg-gray-100 transition-colors flex items-center gap-2">
<i className="w-4 h-4 fill-current" data-lucide="apple"></i>
                        Download for iOS
                    </button>
<button className="h-12 px-6 rounded-full border border-white/10 bg-[#2c241b] text-[#baa89c] font-medium text-sm hover:bg-[#382e26] hover:text-white transition-colors flex items-center gap-2">
<i className="w-4 h-4 fill-current" data-lucide="play"></i>
                        Get on Android
                    </button>
</div>
<div className="pt-4 flex items-center justify-center lg:justify-start gap-4">
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-[#221710]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-[#221710]" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-[#221710]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<p className="text-xs text-[#baa89c] font-medium">Joined by 10,000+ foodies</p>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center perspective-1000">

<div className="relative w-[320px] h-[640px] bg-[#221710] border border-[#382e26] rounded-[2.5rem] shadow-2xl overflow-hidden rotate-[-6deg] hover:rotate-0 transition-transform duration-700 ease-out z-10">

<div className="h-14 w-full bg-[#2c241b] flex items-end justify-between px-6 pb-2 border-b border-white/5 z-20 relative">
<span className="text-xs font-semibold text-white">9:41</span>
<div className="flex gap-1.5">
<div className="w-4 h-4 rounded-full border border-[#baa89c]/40"></div>
<div className="w-4 h-4 rounded-full border border-[#baa89c]/40"></div>
</div>
</div>

<div className="h-full overflow-hidden bg-[#221710] relative">

<div className="relative h-2/3">
<img alt="Burger" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#221710] via-transparent to-transparent"></div>

<div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
<i className="w-3 h-3 text-[#f26c0d] fill-[#f26c0d]" data-lucide="star"></i>
<span className="text-xs font-bold text-white">9.4</span>
</div>

<div className="absolute bottom-0 left-0 w-full p-6">
<div className="flex items-start justify-between mb-2">
<div>
<h3 className="text-xl font-medium text-white tracking-tight">Truffle Smash Burger</h3>
<div className="flex items-center gap-1.5 text-[#baa89c] mt-1">
<i className="w-3 h-3" data-lucide="map-pin"></i>
<span className="text-xs">Burger &amp; Beyond, Shoreditch</span>
</div>
</div>
<button className="text-[#baa89c] hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="bookmark"></i>
</button>
</div>
</div>
</div>

<div className="p-6 space-y-4">
<div className="flex items-center justify-between text-xs text-[#baa89c] uppercase tracking-wider font-semibold">
<span>Flavor Profile</span>
<span>Richness</span>
</div>

<div className="space-y-3">
<div className="space-y-1">
<div className="flex justify-between text-xs text-[#baa89c]">
<span>Umami</span>
<span className="text-[#f26c0d]">9/10</span>
</div>
<div className="h-1.5 w-full bg-[#2c241b] rounded-full overflow-hidden border border-white/5">
<div className="h-full bg-[#f26c0d] w-[90%] rounded-full"></div>
</div>
</div>
<div className="space-y-1">
<div className="flex justify-between text-xs text-[#baa89c]">
<span>Texture</span>
<span className="text-[#baa89c]">8/10</span>
</div>
<div className="h-1.5 w-full bg-[#2c241b] rounded-full overflow-hidden border border-white/5">
<div className="h-full bg-[#baa89c]/40 w-[80%] rounded-full"></div>
</div>
</div>
</div>
<p className="text-xs text-[#baa89c] leading-relaxed mt-4 border-t border-white/5 pt-4">
                                "Honestly the best crust I've ever had. The truffle mayo is subtle but present."
                            </p>
</div>
</div>
</div>

<div className="absolute top-20 -right-12 w-48 h-48 bg-[#2c241b] border border-white/5 rounded-2xl p-4 flex flex-col gap-3 shadow-2xl animate-bounce" style={{animationDuration: '4s'}}>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#65A30D]/20 text-[#65A30D] flex items-center justify-center">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">Visited</span>
<span className="text-[10px] text-[#baa89c]">2 mins ago</span>
</div>
</div>
<div className="h-px w-full bg-white/5"></div>
<div className="flex gap-2">
<img alt="Salad" className="w-12 h-12 rounded-lg object-cover" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<div className="flex flex-col justify-center">
<span className="text-xs text-white font-medium">Green Bowl</span>
<span className="text-[10px] text-[#baa89c]">Healthy choice</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#221710] border-t border-white/5" id="features">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Curate your palate.</h2>
<p className="text-[#baa89c] max-w-xl">Every meal tells a story. Yumlog gives you the tools to capture the nuance of every dish you encounter.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

<div className="md:col-span-2 rounded-2xl border border-white/5 bg-[#2c241b] p-8 relative overflow-hidden group hover:border-white/10 transition-all">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#221710]/90 z-10 pointer-events-none"></div>

<div className="absolute inset-0 grid grid-cols-4 gap-2 opacity-30 rotate-2 scale-110 group-hover:scale-100 group-hover:rotate-0 transition-transform duration-700 grayscale hover:grayscale-0">
<img className="h-full w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&amp;fit=crop&amp;w=300"/>
<img className="h-full w-full object-cover rounded-md mt-8" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&amp;fit=crop&amp;w=300"/>
<img className="h-full w-full object-cover rounded-md -mt-4" src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&amp;fit=crop&amp;w=300"/>
<img className="h-full w-full object-cover rounded-md mt-6" src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&amp;fit=crop&amp;w=300"/>
<img className="h-full w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&amp;fit=crop&amp;w=300"/>
<img className="h-full w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&amp;fit=crop&amp;w=300"/>
<img className="h-full w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&amp;fit=crop&amp;w=300"/>
<img className="h-full w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&amp;fit=crop&amp;w=300"/>
</div>
<div className="relative z-20 h-full flex flex-col justify-end">
<div className="w-10 h-10 rounded-full bg-[#f26c0d]/20 flex items-center justify-center text-[#f26c0d] mb-4 backdrop-blur-sm border border-[#f26c0d]/20">
<i className="w-5 h-5" data-lucide="camera"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Visual Food Diaries</h3>
<p className="text-[#baa89c] text-sm max-w-sm">Upload high-res photos. We automatically organize them by date, cuisine, and color palette.</p>
</div>
</div>

<div className="md:col-span-1 rounded-2xl border border-white/5 bg-[#2c241b] p-8 relative overflow-hidden group hover:border-white/10 transition-all flex flex-col justify-between">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#f26c0d]/10 rounded-full blur-[60px] pointer-events-none"></div>
<div className="space-y-6 mt-4">

<div className="bg-[#221710] border border-white/5 p-4 rounded-xl shadow-inner">
<div className="flex justify-between mb-4">
<span className="text-xs font-medium text-[#baa89c]">Taste Score</span>
<span className="text-lg font-bold text-white tracking-tight">8.5<span className="text-[#baa89c] text-xs font-normal">/10</span></span>
</div>
<input className="w-full h-2 bg-[#2c241b] rounded-lg appearance-none cursor-pointer" max="10" min="0" step="0.1" type="range" value="8.5"/>
<div className="flex justify-between mt-2 text-[10px] text-[#baa89c] uppercase font-medium">
<span>Nah</span>
<span>Divine</span>
</div>
</div>
</div>
<div className="mt-8">
<div className="w-10 h-10 rounded-full bg-[#221710] flex items-center justify-center text-white mb-4 border border-white/5">
<i className="w-5 h-5" data-lucide="sliders"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Precision Ratings</h3>
<p className="text-[#baa89c] text-sm">Don't just use stars. Rate sweetness, texture, and presentation.</p>
</div>
</div>

<div className="md:col-span-1 rounded-2xl border border-white/5 bg-[#2c241b] p-8 relative overflow-hidden group hover:border-white/10 transition-all flex flex-col justify-between">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#baa89c 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="relative">
<div className="w-4 h-4 bg-[#f26c0d] rounded-full shadow-[0_0_20px_rgba(242,108,13,0.6)] animate-pulse"></div>
<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#221710] px-2 py-1 rounded text-[10px] text-white border border-white/10">
                                You ate here
                            </div>
</div>
</div>
<div className="relative z-10 mt-32">
<div className="w-10 h-10 rounded-full bg-[#221710] flex items-center justify-center text-white mb-4 border border-white/5">
<i className="w-5 h-5" data-lucide="map"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Location Log</h3>
<p className="text-[#baa89c] text-sm">Auto-tag restaurants and view your global food footprint.</p>
</div>
</div>

<div className="md:col-span-2 rounded-2xl border border-white/5 bg-[#2c241b] p-8 relative overflow-hidden group hover:border-white/10 transition-all">
<div className="flex flex-col md:flex-row gap-8 items-center h-full">
<div className="flex-1 space-y-4">
<div className="w-10 h-10 rounded-full bg-[#65A30D]/10 flex items-center justify-center text-[#65A30D] mb-4 border border-[#65A30D]/20">
<i className="w-5 h-5" data-lucide="sparkles"></i>
</div>
<h3 className="text-xl font-medium text-white">AI Sommelier</h3>
<p className="text-[#baa89c] text-sm">Based on your log of spicy ramen and craft burgers, Yumlog suggests hidden gems nearby that match your specific taste profile.</p>
</div>

<div className="w-full md:w-64 bg-[#221710] border border-white/5 rounded-xl p-4 shadow-xl -rotate-2 group-hover:rotate-0 transition-transform duration-500">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f26c0d] to-[#E0580C]"></div>
<div>
<div className="text-xs font-medium text-white">Top Pick for You</div>
<div className="text-[10px] text-[#65A30D]">98% Match</div>
</div>
</div>
<div className="h-24 bg-[#2c241b] rounded-lg mb-3 relative overflow-hidden">
<img className="object-cover w-full h-full opacity-80" src="https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&amp;fit=crop&amp;w=300"/>
</div>
<button className="w-full py-1.5 rounded-md bg-[#2c241b] border border-white/10 text-[#baa89c] text-xs font-semibold hover:text-white hover:border-white/20 transition-colors">View Menu</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-b border-white/5 overflow-hidden bg-[#221710]">
<div className="max-w-6xl mx-auto px-6 text-center mb-8">
<span className="text-xs font-medium text-[#baa89c] uppercase tracking-widest">Trending Cuisines Logged Today</span>
</div>
<div className="flex overflow-hidden relative w-full">
<div className="flex gap-12 animate-marquee whitespace-nowrap min-w-full justify-center">
<div className="flex items-center gap-2 text-[#baa89c]">
<i className="w-4 h-4" data-lucide="coffee"></i>
<span className="text-sm font-medium">Specialty Coffee</span>
</div>
<div className="flex items-center gap-2 text-[#baa89c]">
<i className="w-4 h-4" data-lucide="pizza"></i>
<span className="text-sm font-medium">Neapolitan Pizza</span>
</div>
<div className="flex items-center gap-2 text-[#baa89c]">
<i className="w-4 h-4" data-lucide="soup"></i>
<span className="text-sm font-medium">Tonkotsu Ramen</span>
</div>
<div className="flex items-center gap-2 text-[#baa89c]">
<i className="w-4 h-4" data-lucide="croissant"></i>
<span className="text-sm font-medium">Artisan Pastries</span>
</div>
<div className="flex items-center gap-2 text-[#baa89c]">
<i className="w-4 h-4" data-lucide="sandwich"></i>
<span className="text-sm font-medium">Wagyu Burgers</span>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-[#221710]">
<div className="absolute inset-0 bg-gradient-to-t from-[#2c241b] to-[#221710] z-0"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Ready to eat?</h2>
<p className="text-lg text-[#baa89c] mb-10">Join thousands of food lovers archiving their culinary legacy. Start your log today.</p>
<form className="max-w-md mx-auto flex gap-2">
<input className="flex-1 bg-[#2c241b] border border-[#baa89c]/20 rounded-full px-5 py-3 text-sm text-white placeholder-[#baa89c] focus:outline-none focus:border-[#f26c0d] focus:ring-1 focus:ring-[#f26c0d] transition-all" placeholder="Enter your email" type="email"/>
<button className="bg-white text-[#221710] px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap" type="button">
                    Get Early Access
                </button>
</form>
<p className="mt-4 text-[10px] text-[#baa89c]">Available on iOS and Android. Free forever for personal use.</p>
</div>
</section>

<footer className="border-t border-white/5 bg-[#221710] py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-white/5 rounded flex items-center justify-center text-white">
<i className="w-3 h-3" data-lucide="utensils"></i>
</div>
<span className="text-sm font-medium text-white tracking-tight">Yumlog</span>
</div>
<div className="flex gap-6 text-sm text-[#baa89c]">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
</div>
<div className="text-xs text-[#baa89c]">
                © 2023 Yumlog Inc. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
