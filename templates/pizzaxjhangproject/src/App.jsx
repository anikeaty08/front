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



        // 3D Tilt Effect
        const heroCard = document.getElementById('hero-card');
        const container = heroCard.parentElement;

        container.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -15; // Increased range
            const rotateY = ((x - centerX) / centerX) * 15;

            heroCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        container.addEventListener('mouseleave', () => {
             heroCard.style.transform = `rotateX(10deg) rotateZ(-5deg)`; // Return to float animation state approximation
             setTimeout(() => {
                 heroCard.style.transform = ''; // Clear inline styles to let CSS animation take over if needed, though here we might just want to reset to 0 or specific angle
             }, 500);
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
      
<div className="noise"></div>
<div className="fixed inset-0 jali-pattern opacity-30 pointer-events-none z-0"></div>

<div className="fixed top-[-10%] right-[-10%] w-[800px] h-[800px] bg-emerald-900/10 blur-[150px] rounded-full z-0 pointer-events-none"></div>
<div className="fixed bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-amber-700/5 blur-[120px] rounded-full z-0 pointer-events-none"></div>

<div className="relative z-10 w-full max-w-[1600px] mx-auto p-4 md:p-8 grid grid-cols-12 gap-4 md:gap-8 min-h-screen">

<nav className="hidden md:flex col-span-1 flex-col justify-between items-center py-8 border-r border-white/5 h-[calc(100vh-4rem)] fixed md:static">
<div className="rotate-180" style={{writingMode: 'vertical-rl'}}>
<span className="text-xs font-mono text-emerald-500 tracking-widest">EST. 2024</span>
</div>
<div className="flex flex-col gap-12 items-center">
<a className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:bg-emerald-900/20 text-neutral-400 hover:text-emerald-400 transition-all group" href="#">
<span className="iconify" data-icon="lucide:menu" data-width="20"></span>
</a>
<a className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:bg-emerald-900/20 text-neutral-400 hover:text-emerald-400 transition-all" href="#">
<span className="iconify" data-icon="lucide:shopping-bag" data-width="20"></span>
</a>
<a className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:bg-emerald-900/20 text-neutral-400 hover:text-emerald-400 transition-all" href="#">
<span className="iconify" data-icon="lucide:search" data-width="20"></span>
</a>
</div>
<div className="flex flex-col gap-4 text-xs font-medium text-neutral-500">
<span className="cursor-pointer hover:text-white transition-colors">EN</span>
<span className="cursor-pointer hover:text-white transition-colors">UR</span>
</div>
</nav>

<main className="col-span-12 md:col-span-11 flex flex-col gap-8">

<header className="flex justify-between items-end pb-6 border-b border-white/5">
<div>
<h1 className="text-4xl md:text-6xl font-serif italic tracking-tighter text-white">
                        Pizza <span className="text-emerald-500 not-italic font-sans font-bold glitch-hover cursor-default">X</span>
</h1>
<p className="text-xs font-mono text-neutral-500 mt-2 tracking-widest uppercase">
                        Fusion Gastronomy • Lahore • Karachi • Islamabad
                    </p>
</div>
<div className="hidden md:block">
<button className="px-6 py-2 border border-emerald-500/30 text-emerald-500 hover:bg-emerald-900/10 text-xs tracking-widest uppercase transition-all duration-300">
                        Reserve Table
                    </button>
</div>
</header>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch min-h-[500px]">

<div className="col-span-12 md:col-span-7 flex flex-col justify-center relative group">
<div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-emerald-500/20 rounded-tr-[40px] pointer-events-none transition-all duration-500 group-hover:w-40 group-hover:h-40 group-hover:border-emerald-500/50"></div>
<h2 className="text-5xl md:text-8xl font-medium tracking-tight leading-[0.9] z-10 mix-blend-lighten">
<span className="block text-neutral-600 font-serif italic text-4xl md:text-6xl mb-2">The Royal</span>
                        SPICE<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-200 to-amber-500">PROTOCOL</span>
</h2>
<div className="mt-8 flex flex-col gap-6 max-w-md">
<p className="text-neutral-400 font-light text-sm leading-relaxed border-l-2 border-amber-600 pl-4">
                            We don't just bake; we architect flavor. Inspired by the Mughal kitchens and engineered for the 22nd century. Experience the fusion of heritage recipes and molecular gastronomy.
                        </p>
<div className="flex items-center gap-6 mt-4">
<button className="bg-amber-600 text-black px-8 py-3 rounded-none font-medium text-sm hover:bg-amber-500 transition-colors flex items-center gap-2">
                                Order Delivery
                                <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<span className="text-xs text-neutral-500 font-mono flex items-center gap-2">
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                Kitchen: LIVE
                            </span>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-5 relative perspective-2000 flex items-center justify-center">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-[80%] aspect-square rounded-full border border-dashed border-white/10 animate-[spin_30s_linear_infinite]"></div>
<div className="w-[60%] aspect-square rounded-full border border-white/5 animate-[spin_20s_linear_infinite_reverse]"></div>
</div>

<div className="relative w-64 h-80 transform-style-3d float-item transition-transform duration-100 ease-out cursor-pointer group" id="hero-card">

<div className="absolute inset-0 bg-neutral-900 border border-emerald-900/50 transform translate-z-[-20px] opacity-80 rounded-lg"></div>

<div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-black border border-white/10 rounded-lg overflow-hidden shadow-2xl transform translate-z-[10px] group-hover:translate-z-[30px] transition-transform duration-300">

<div className="absolute -right-10 -top-10 w-40 h-40 bg-amber-500/20 blur-2xl rounded-full"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40">

<div className="w-full h-4 bg-amber-700 rounded-full mb-1 mx-auto shadow-lg"></div>

<div className="w-[95%] h-6 bg-amber-900 rounded-full mb-1 mx-auto shadow-lg relative overflow-hidden">
<div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjNDUxZTA1IiAvPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMDAwIiAvPgo8L3N2Zz4=')] opacity-20"></div>
</div>

<div className="w-[100%] h-2 bg-yellow-500 rounded-sm mb-1 mx-auto shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>

<div className="w-[90%] h-2 bg-green-600 rounded-full mb-1 mx-auto blur-[1px]"></div>

<div className="w-full h-10 bg-amber-600 rounded-t-full relative overflow-hidden">
<div className="absolute top-2 left-4 w-1 h-1 bg-amber-200 rounded-full opacity-50"></div>
<div className="absolute top-4 left-10 w-1 h-1 bg-amber-200 rounded-full opacity-50"></div>
<div className="absolute top-3 right-8 w-1 h-1 bg-amber-200 rounded-full opacity-50"></div>
</div>
</div>
<div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
<div>
<div className="text-[10px] text-emerald-400 font-mono uppercase">Featured</div>
<div className="text-lg font-serif italic text-white">Chappli Burger X</div>
</div>
<div className="text-xl font-bold text-amber-500">PKR 850</div>
</div>
</div>

<div className="absolute -right-8 top-12 bg-black/60 backdrop-blur-md border border-emerald-500/30 px-3 py-2 rounded text-xs font-mono text-emerald-300 transform translate-z-[60px] shadow-xl">
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:flame" data-width="12"></span>
                                Spice Lvl: MAX
                            </div>
</div>
</div>
</div>
</div>

<div className="w-full overflow-hidden border-y border-white/5 bg-white/[0.02] py-4">
<div className="marquee-container">
<div className="marquee-content flex gap-12 text-4xl font-serif text-white/10 select-none">
<span>ZINGER SUPREME</span>
<span className="text-amber-600/20">*</span>
<span>TIKKA PIZZA</span>
<span className="text-amber-600/20">*</span>
<span>MASALA FRIES</span>
<span className="text-amber-600/20">*</span>
<span>SEEKH KEBAB CRUST</span>
<span className="text-amber-600/20">*</span>
<span>ZINGER SUPREME</span>
<span className="text-amber-600/20">*</span>
<span>TIKKA PIZZA</span>
<span className="text-amber-600/20">*</span>
<span>MASALA FRIES</span>
</div>
</div>
</div>

<section className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="neo-card p-6 rounded-none relative group overflow-hidden md:col-span-2">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity duration-500">
<span className="iconify text-emerald-500" data-icon="lucide:move-up-right" data-width="24"></span>
</div>
<div className="flex flex-col md:flex-row gap-6 h-full items-center">
<div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-tr from-red-900 to-orange-600 flex items-center justify-center relative group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(220,38,38,0.3)]">
<div className="absolute inset-2 border border-white/20 rounded-full border-dashed animate-[spin_20s_linear_infinite]"></div>
<span className="text-4xl">🍕</span>
</div>
<div className="flex-1 text-center md:text-left">
<div className="text-xs text-amber-500 font-mono mb-2">MOST POPULAR</div>
<h3 className="text-3xl font-serif text-white mb-2">Chicken Tikka Burst</h3>
<p className="text-neutral-400 text-sm mb-6">Double fermented dough, topped with charcoal-grilled chicken tikka chunks, onions, and our secret green chutney sauce.</p>

<div className="bg-black/30 p-4 border border-white/5 max-w-sm">
<div className="flex justify-between text-xs text-neutral-400 mb-2">
<span>Crust Thickness</span>
<span>Medium</span>
</div>
<input className="w-full h-1 bg-neutral-700 rounded-lg appearance-none cursor-pointer [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-3 [&amp;::-webkit-slider-thumb]:h-3 [&amp;::-webkit-slider-thumb]:bg-amber-500 [&amp;::-webkit-slider-thumb]:rounded-full" max="100" min="1" type="range" value="50"/>
<div className="flex gap-4 mt-4">
<label className="flex items-center gap-2 text-xs text-neutral-300 cursor-pointer">
<input checked="" className="checkbox-custom" type="checkbox"/>
                                        Extra Cheese
                                    </label>
<label className="flex items-center gap-2 text-xs text-neutral-300 cursor-pointer">
<input className="checkbox-custom" type="checkbox"/>
                                        Spicy Dip
                                    </label>
</div>
</div>
</div>
</div>
</div>

<div className="neo-card p-6 rounded-none relative group hover:bg-neutral-900/80 transition-colors flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-4">
<span className="text-4xl">🍗</span>
<span className="text-lg font-bold text-white">Rs. 450</span>
</div>
<h3 className="text-2xl font-serif text-white mb-1">Peri-Peri Wings</h3>
<p className="text-neutral-500 text-xs">Fire-roasted wings glazed in African bird's eye chili sauce.</p>
</div>
<div className="mt-8 flex gap-2">
<span className="px-2 py-1 border border-red-500/30 text-red-400 text-[10px] uppercase">Hot</span>
<span className="px-2 py-1 border border-white/10 text-neutral-400 text-[10px] uppercase">Grilled</span>
</div>
<button className="w-full mt-4 py-2 bg-white/5 hover:bg-emerald-600 hover:text-white transition-colors text-neutral-300 text-xs uppercase tracking-widest border border-white/5">
                        Add to Cart
                    </button>
</div>
</section>

<footer className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/5">
<div>
<div className="text-3xl font-light text-white font-serif">15<span className="text-emerald-500 text-lg">+</span></div>
<div className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Cities Covered</div>
</div>
<div>
<div className="text-3xl font-light text-white font-serif">24<span className="text-emerald-500 text-lg">/7</span></div>
<div className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Delivery Ops</div>
</div>
<div>
<div className="text-3xl font-light text-white font-serif">4.9</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Taste Rating</div>
</div>
<div className="flex items-end justify-end">
<div className="text-right">
<div className="text-xs text-neutral-600 mb-1">DESIGNED FOR 2026</div>
<div className="text-[10px] text-neutral-700 font-mono">PIZZA X CORP ©</div>
</div>
</div>
</footer>
</main>
</div>



    </>
  );
}
