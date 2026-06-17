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



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        entry.target.classList.remove('opacity-0', 'translate-y-10');
                    }
                });
            }, observerOptions);

            const hero = document.querySelector('header');
            const rings = document.querySelectorAll('.ring-3d');
            if(hero && rings.length > 0) {
                hero.addEventListener('mousemove', (e) => {
                    const x = (window.innerWidth - e.pageX) / 50;
                    const y = (window.innerHeight - e.pageY) / 50;
                    rings.forEach(ring => {
                        ring.style.transform = `rotateY(${x}deg) rotateX(${60 + y}deg)`;
                    });
                });
            }
        });

        function toggleView() {
            const storefront = document.getElementById('storefront');
            const adminPanel = document.getElementById('admin-panel');
            const toggleText = document.getElementById('toggleText');

            if (storefront.classList.contains('hidden')) {
                // Show Storefront
                storefront.classList.remove('hidden');
                adminPanel.classList.add('hidden');
                toggleText.innerText = "Switch to Admin";
                document.body.style.overflow = "auto";
            } else {
                // Show Admin
                storefront.classList.add('hidden');
                adminPanel.classList.remove('hidden');
                toggleText.innerText = "Back to Store";
                document.body.style.overflow = "hidden"; // Prevent double scrollbar
            }
        }
    
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
      

<div className="fixed bottom-6 right-6 z-[100]">
<button className="flex items-center gap-2 border hover:border-amber-500/50 px-4 py-2 rounded-full shadow-2xl backdrop-blur-md transition-all text-xs uppercase tracking-widest bg-stone-900 border-white/10 text-white" id="viewToggle" onclick="toggleView()">
<iconify-icon icon="solar:round-transfer-diagonal-linear" width="16"></iconify-icon>
<span id="toggleText">Switch to Admin</span>
</button>
</div>

<div className="transition-opacity duration-500" id="storefront">

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
<div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full animate-fabric bg-amber-900/20"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full animate-fabric bg-neutral-800/30" style={{animationDelay: '-5s'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 transition-all duration-300 py-6 px-6 lg:px-12 flex justify-between items-center mix-blend-difference text-white">
<div className="flex items-center gap-4">
<button className="group flex flex-col gap-1.5 w-8">
<span className="w-full h-[1px] group-hover:w-2/3 transition-all duration-500 bg-white"></span>
<span className="w-2/3 h-[1px] group-hover:w-full transition-all duration-500 bg-white"></span>
</button>
</div>
<div className="text-2xl lg:text-3xl tracking-[0.2em] font-light serif text-center absolute left-1/2 -translate-x-1/2">
                PIONA MART
            </div>
<div className="flex items-center gap-6">
<button className="opacity-80 hover:opacity-100 transition-opacity">
<iconify-icon className="" icon="solar:magnifer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="opacity-80 hover:opacity-100 transition-opacity relative">
<iconify-icon className="" icon="solar:bag-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="absolute -top-1 -right-1 w-2 h-2 rounded-full animate-pulse bg-yellow-600"></span>
</button>
</div>
</nav>

<header className="flex flex-col overflow-hidden w-full h-screen relative perspective-container items-center justify-center">
<div className="absolute inset-0 pointer-events-none flex items-center justify-center z-10 opacity-60">
<div className="absolute w-[60vh] h-[60vh] ring-3d animate-ring"></div>
<div className="absolute w-[45vh] h-[45vh] ring-3d animate-ring-rev opacity-70"></div>
<div className="absolute w-[20vh] h-[20vh] bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
</div>
<div className="relative z-20 text-center px-4 mix-blend-screen space-y-8 animate-float">
<span className="block text-xs lg:text-sm tracking-[0.4em] uppercase mb-2 text-amber-200/80">The 2024 Collection</span>
<h1 className="text-6xl lg:text-9xl tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b drop-shadow-2xl from-white via-stone-200 to-stone-600">
                    CRAFTED <br/>
<span className="italic font-light text-gold-gradient">IN ELEGANCE</span>
</h1>
<p className="max-w-md mx-auto text-sm lg:text-base font-light tracking-wide leading-relaxed mt-6 text-stone-400">
                    Where futuristic aesthetics meet timeless luxury. <br/> Discover jewellery and apparel designed for the ethereal.
                </p>
<div className="mt-12 flex justify-center">
<a className="group relative px-8 py-3 overflow-hidden border rounded-full backdrop-blur-sm transition-all duration-500 border-white/20 bg-white/5 hover:border-amber-400/50 hover:bg-white/10" href="#collection">
<span className="relative z-10 text-xs tracking-[0.2em] group-hover:text-amber-200 transition-colors uppercase text-white">Explore Collection</span>
<div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 via-white/10"></div>
</a>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
<span className="text-[10px] tracking-widest uppercase">Scroll</span>
<iconify-icon icon="solar:arrow-down-linear" width="20"></iconify-icon>
</div>
</header>

<div className="w-full py-6 border-y backdrop-blur-md overflow-hidden flex relative z-30 border-white/5 bg-black/50">
<div className="whitespace-nowrap flex gap-12 animate-[marquee_20s_linear_infinite] min-w-full justify-around items-center opacity-40 hover:opacity-80 transition-opacity duration-500">
<span className="text-xl serif italic tracking-wider">Fine Jewellery</span>
<iconify-icon className="text-amber-500" icon="solar:star-linear"></iconify-icon>
<span className="text-xl serif italic tracking-wider">Haute Couture</span>
<iconify-icon className="text-amber-500" icon="solar:star-linear"></iconify-icon>
<span className="text-xl serif italic tracking-wider">Sustainable Luxury</span>
<iconify-icon className="text-amber-500" icon="solar:star-linear"></iconify-icon>
<span className="text-xl serif italic tracking-wider">Modern Design</span>
<iconify-icon className="text-amber-500" icon="solar:star-linear"></iconify-icon>
<span className="text-xl serif italic tracking-wider">Fine Jewellery</span>
<iconify-icon className="text-amber-500" icon="solar:star-linear"></iconify-icon>
<span className="text-xl serif italic tracking-wider">Haute Couture</span>
</div>
</div>

<section className="relative py-24 lg:py-32 px-6 lg:px-20 z-20" id="collection">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
<div className="group relative perspective-container">
<div className="relative h-[600px] w-full overflow-hidden rounded-sm preserve-3d card-hover-3d">
<img alt="Jewellery" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&amp;w=2075&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-90 from-black"></div>
<div className="absolute top-6 right-6 backdrop-blur-md px-4 py-1 rounded-full border bg-white/10 border-white/10">
<span className="text-xs tracking-widest uppercase text-white">New Arrival</span>
</div>
<div className="absolute bottom-10 left-8 right-8 transform translate-z-10">
<h2 className="text-4xl serif tracking-tight mb-2 text-white">Ethereal Gold</h2>
<p className="text-sm font-light mb-6 line-clamp-2 text-stone-300">Hand-forged rings and pendants that defy gravity. A tribute to modern minimalism.</p>
<button className="flex items-center gap-2 text-xs tracking-widest uppercase border-b border-amber-500/50 pb-1 group-hover:text-amber-400 transition-colors text-amber-100">
                                View Pieces <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="group relative perspective-container mt-12 lg:mt-32">
<div className="relative h-[600px] w-full overflow-hidden rounded-sm preserve-3d card-hover-3d">
<img alt="Silk Dress" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-90 from-black"></div>
<div className="absolute bottom-10 left-8 right-8">
<h2 className="text-4xl serif tracking-tight mb-2 text-white">Midnight Silk</h2>
<p className="text-sm font-light mb-6 line-clamp-2 text-stone-300">Flowing fabrics designed to move with you. The intersection of comfort and royal elegance.</p>
<button className="flex items-center gap-2 text-xs tracking-widest uppercase border-b border-amber-500/50 pb-1 group-hover:text-amber-400 transition-colors text-amber-100">
                                Shop Apparel <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b to-[#0a0a0a] relative overflow-hidden from-black">
<div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] bg-amber-900/10"></div>
<div className="px-6 lg:px-20 mb-12 flex justify-between items-end">
<div>
<span className="text-xs font-light text-amber-500 tracking-[0.2em] uppercase">Curated For You</span>
<h3 className="text-3xl lg:text-5xl serif mt-2 tracking-tight text-white">Best Sellers</h3>
</div>
<div className="flex gap-4">
<button className="w-12 h-12 rounded-full border flex items-center justify-center transition-colors border-white/10 hover:bg-white/10">
<iconify-icon className="text-white" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border flex items-center justify-center transition-colors border-white/10 hover:bg-white/10">
<iconify-icon className="text-white" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex overflow-x-auto gap-8 px-6 lg:px-20 pb-12 snap-x hide-scroll">

<div className="min-w-[280px] lg:min-w-[350px] group snap-start">
<div className="relative h-[450px] bg-[#0f0f0f] rounded-lg overflow-hidden mb-6 flex items-center justify-center glass-panel">
<div className="absolute bottom-12 w-24 h-4 blur-xl opacity-60 rounded-[100%] group-hover:scale-125 transition-transform duration-500 bg-black"></div>
<img alt="Gold Necklace" className="relative z-10 w-2/3 object-contain drop-shadow-2xl transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-4" src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2">
<button className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-black hover:bg-amber-100"><iconify-icon icon="solar:heart-linear"></iconify-icon></button>
<button className="w-10 h-10 rounded-full backdrop-blur flex items-center justify-center bg-black/50 text-white hover:bg-black"><iconify-icon icon="solar:eye-linear"></iconify-icon></button>
</div>
</div>
<div className="flex justify-between items-start">
<div><h4 className="text-lg serif tracking-wide text-white">Orbital Pendant</h4><p className="text-xs text-stone-500 mt-1">18K Solid Gold</p></div>
<span className="text-sm font-medium text-amber-200">TK 2,450</span>
</div>
</div>

<div className="min-w-[280px] lg:min-w-[350px] group snap-start">
<div className="relative h-[450px] bg-[#0f0f0f] rounded-lg overflow-hidden mb-6 flex items-center justify-center glass-panel">
<div className="absolute bottom-12 w-24 h-4 blur-xl opacity-60 rounded-[100%] group-hover:scale-125 transition-transform duration-500 bg-black"></div>
<img alt="Watch" className="relative z-10 w-2/3 object-contain drop-shadow-2xl transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-4" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2">
<button className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-black hover:bg-amber-100"><iconify-icon icon="solar:heart-linear"></iconify-icon></button>
<button className="w-10 h-10 rounded-full backdrop-blur flex items-center justify-center bg-black/50 text-white hover:bg-black"><iconify-icon icon="solar:eye-linear"></iconify-icon></button>
</div>
</div>
<div className="flex justify-between items-start">
<div className=""><h4 className="text-lg serif tracking-wide text-white">Chronos Noir</h4><p className="text-xs text-stone-500 mt-1">Automatic Movement</p></div>
<span className="text-sm font-medium text-amber-200">TK 8,900</span>
</div>
</div>

<div className="min-w-[280px] lg:min-w-[350px] group snap-start">
<div className="relative h-[450px] bg-[#0f0f0f] rounded-lg overflow-hidden mb-6 flex items-center justify-center glass-panel">
<div className="absolute bottom-12 w-24 h-4 blur-xl opacity-60 rounded-[100%] group-hover:scale-125 transition-transform duration-500 bg-black"></div>
<img alt="Bag" className="relative z-10 w-2/3 object-contain drop-shadow-2xl transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-4 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&amp;w=1935&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2">
<button className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-black hover:bg-amber-100"><iconify-icon icon="solar:heart-linear"></iconify-icon></button>
<button className="w-10 h-10 rounded-full backdrop-blur flex items-center justify-center bg-black/50 text-white hover:bg-black"><iconify-icon icon="solar:eye-linear"></iconify-icon></button>
</div>
</div>
<div className="flex justify-between items-start">
<div><h4 className="text-lg serif tracking-wide text-white">Vesper Clutch</h4><p className="text-xs text-stone-500 mt-1">Italian Leather</p></div>
<span className="text-sm font-medium text-amber-200">TK 1,200</span>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-4xl mx-auto glass-panel p-12 lg:p-20 text-center rounded-2xl relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-500/10 blur-[80px] rounded-full pointer-events-none"></div>
<h3 className="text-3xl lg:text-5xl serif mb-4 relative z-10">Join the Inner Circle</h3>
<p className="font-light mb-10 max-w-lg mx-auto relative z-10 text-stone-400">Receive early access to new collections and exclusive event invitations.</p>
<form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative z-10">
<input className="flex-1 border placeholder-stone-500 px-6 py-3 rounded-sm focus:outline-none focus:border-amber-500/50 transition-colors bg-white/5 border-white/10 text-white" placeholder="Your Email Address" type="email"/>
<button className="px-8 py-3 rounded-sm text-sm uppercase tracking-widest hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300 font-medium bg-amber-100 text-black hover:bg-white" type="button">Subscribe</button>
</form>
</div>
</section>

<footer className="lg:px-20 text-sm font-light border-t pt-24 pr-6 pb-12 pl-6 text-stone-400 bg-black border-white/5">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-1">
<a className="text-2xl serif tracking-widest block mb-6 text-white" href="#">PIONA MART</a>
<p className="leading-relaxed opacity-60">Redefining luxury for the modern era.</p>
</div>
<div className="">
<h5 className="uppercase tracking-widest text-xs mb-6 opacity-80 text-white">Shop</h5>
<ul className="space-y-4"><li className=""><a className="hover:text-amber-200" href="#">New Arrivals</a></li><li className=""><a className="hover:text-amber-200" href="#">Jewellery</a></li></ul>
</div>
<div className="">
<h5 className="uppercase tracking-widest text-xs mb-6 opacity-80 text-white">Company</h5>
<ul className="space-y-4"><li className=""><a className="hover:text-amber-200" href="#">Our Story</a></li><li className=""><a className="hover:text-amber-200" href="#">Contact</a></li></ul>
</div>
<div className="">
<h5 className="uppercase tracking-widest text-xs mb-6 opacity-80 text-white">Social</h5>
<div className="flex gap-4">
<a className="flex items-center justify-center w-10 h-10 border rounded-full hover:bg-white hover:text-black border-white/10" href="#"><svg className="w-[14px] h-[14px]" data-icon-replaced="true" data-icon-set="simple-icons" data-simple-icons="facebook" height="14" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path className="" d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978c.401 0 .955.042 1.468.103a9 9 0 0 1 1.141.195v3.325a9 9 0 0 0-.653-.036a27 27 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.7 1.7 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103l-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647" fill="#000000"></path></svg></a>
<a className="w-10 h-10 rounded-full border flex items-center justify-center border-white/10 hover:bg-white hover:text-black" href="#"><iconify-icon className="" icon="solar:plain-linear"></iconify-icon></a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t opacity-40 border-white/5">
<p>© 2024 Piona Mart.</p>
</div>
</footer>
</div>

<div className="hidden min-h-screen flex bg-black" id="admin-panel">

<aside className="w-20 lg:w-64 border-r flex flex-col bg-[#080808] border-white/5">
<div className="h-20 flex items-center justify-center lg:justify-start lg:px-8 border-b border-white/5">
<span className="text-xl serif tracking-widest hidden lg:block text-white">PIONA</span>
<span className="text-xl serif lg:hidden text-white">P</span>
</div>
<nav className="flex-1 py-8 space-y-2 px-2 lg:px-4">
<a className="admin-nav-item active flex items-center gap-4 px-3 py-3 rounded-md transition-all group text-stone-400 hover:text-white hover:bg-white/5" href="#">
<iconify-icon icon="solar:widget-linear" width="20"></iconify-icon>
<span className="hidden lg:block text-sm font-medium">Dashboard</span>
</a>
<a className="admin-nav-item flex items-center gap-4 px-3 py-3 rounded-md transition-all group text-stone-400 hover:text-white hover:bg-white/5" href="#">
<iconify-icon icon="solar:bag-3-linear" width="20"></iconify-icon>
<span className="hidden lg:block text-sm font-medium">Products</span>
</a>
<a className="admin-nav-item flex items-center gap-4 px-3 py-3 rounded-md transition-all group text-stone-400 hover:text-white hover:bg-white/5" href="#">
<iconify-icon icon="solar:cart-large-linear" width="20"></iconify-icon>
<span className="hidden lg:block text-sm font-medium">Orders</span>
<span className="hidden lg:flex ml-auto bg-amber-500/20 text-amber-500 text-[10px] px-2 py-0.5 rounded-full">3</span>
</a>
<a className="admin-nav-item flex items-center gap-4 px-3 py-3 rounded-md transition-all group text-stone-400 hover:text-white hover:bg-white/5" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
<span className="hidden lg:block text-sm font-medium">Customers</span>
</a>
<a className="admin-nav-item flex items-center gap-4 px-3 py-3 rounded-md transition-all group text-stone-400 hover:text-white hover:bg-white/5" href="#">
<iconify-icon icon="solar:graph-up-linear" width="20"></iconify-icon>
<span className="hidden lg:block text-sm font-medium">Analytics</span>
</a>
</nav>
<div className="p-4 border-t border-white/5">
<button className="w-full flex items-center gap-4 px-3 py-2 text-stone-500 transition-colors hover:text-red-400">
<iconify-icon icon="solar:logout-2-linear" width="20"></iconify-icon>
<span className="hidden lg:block text-xs uppercase tracking-widest">Logout</span>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden relative">

<header className="h-20 border-b flex justify-between items-center px-8 bg-[#080808]/80 backdrop-blur-md z-10 border-white/5">
<div className="flex items-center gap-4 text-stone-400">
<span className="text-sm">Admin</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="text-sm text-white">Dashboard</span>
</div>
<div className="flex items-center gap-6">
<button className="relative transition-colors text-stone-400 hover:text-white">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-0 right-0 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
</button>
<div className="flex items-center gap-3 pl-6 border-l border-white/5">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr flex items-center justify-center font-bold text-xs from-amber-200 to-amber-600 text-black">A</div>
<span className="text-sm hidden md:block text-white">Administrator</span>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 lg:p-10 pb-24">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
<div>
<h2 className="text-3xl serif tracking-tight text-white">Overview</h2>
<p className="text-stone-500 text-sm mt-1">Store performance for Oct 24, 2024</p>
</div>
<div className="flex gap-3">
<button className="bg-amber-500 px-4 py-2 rounded-sm text-xs uppercase tracking-widest transition-colors flex items-center gap-2 font-semibold shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:bg-amber-400 text-black">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon> Add New Product
                        </button>
<button className="px-4 py-2 rounded-sm text-xs uppercase tracking-widest transition-colors flex items-center gap-2 bg-white text-black hover:bg-stone-200">
<iconify-icon icon="solar:download-linear"></iconify-icon> Export Report
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

<div className="glass-panel p-6 rounded-xl relative group overflow-hidden">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 text-amber-400">
<iconify-icon icon="solar:dollar-minimalistic-linear" width="24"></iconify-icon>
</div>
<span className="text-xs bg-green-500/10 px-2 py-1 rounded-full text-green-400">+12.5%</span>
</div>
<h3 className="text-2xl font-medium text-white">TK 128,430</h3>
<p className="text-xs text-stone-500 uppercase tracking-wider mt-1">Total Revenue</p>
<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-transparent opacity-50"></div>
</div>

<div className="glass-panel p-6 rounded-xl relative">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 text-blue-400">
<iconify-icon icon="solar:bag-check-linear" width="24"></iconify-icon>
</div>
<span className="text-xs bg-green-500/10 px-2 py-1 rounded-full text-green-400">+4.2%</span>
</div>
<h3 className="text-2xl font-medium text-white">1,432</h3>
<p className="text-xs text-stone-500 uppercase tracking-wider mt-1">Total Orders</p>
</div>

<div className="glass-panel p-6 rounded-xl relative">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 text-purple-400">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<span className="text-xs bg-red-500/10 px-2 py-1 rounded-full text-red-400">-1.2%</span>
</div>
<h3 className="text-2xl font-medium text-white">856</h3>
<p className="text-xs text-stone-500 uppercase tracking-wider mt-1">New Customers</p>
</div>

<div className="glass-panel p-6 rounded-xl relative">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 text-pink-400">
<iconify-icon icon="solar:box-linear" width="24"></iconify-icon>
</div>
<span className="text-xs text-stone-500">Low Stock</span>
</div>
<h3 className="text-2xl font-medium text-white">12</h3>
<p className="text-xs text-stone-500 uppercase tracking-wider mt-1">Products Alert</p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 glass-panel rounded-xl p-8">
<div className="flex justify-between items-center mb-8">
<h4 className="text-lg font-light text-white">Revenue Analytics</h4>
<select className="border text-xs p-1 rounded focus:outline-none bg-black border-white/10 text-stone-400">
<option>Weekly</option>
<option>Monthly</option>
</select>
</div>

<div className="flex items-end justify-between h-64 gap-2 w-full">
<div className="w-full flex flex-col items-center gap-2 group">
<div className="w-full rounded-t-sm relative h-64 flex items-end overflow-hidden bg-white/5">
<div className="w-full chart-bar h-[40%] group-hover:h-[45%] transition-all duration-500"></div>
</div>
<span className="text-[10px] text-stone-500">Mon</span>
</div>
<div className="w-full flex flex-col items-center gap-2 group">
<div className="w-full rounded-t-sm relative h-64 flex items-end overflow-hidden bg-white/5">
<div className="w-full chart-bar h-[65%] group-hover:h-[70%] transition-all duration-500"></div>
</div>
<span className="text-[10px] text-stone-500">Tue</span>
</div>
<div className="w-full flex flex-col items-center gap-2 group">
<div className="w-full rounded-t-sm relative h-64 flex items-end overflow-hidden bg-white/5">
<div className="w-full chart-bar h-[50%] group-hover:h-[55%] transition-all duration-500"></div>
</div>
<span className="text-[10px] text-stone-500">Wed</span>
</div>
<div className="w-full flex flex-col items-center gap-2 group">
<div className="w-full rounded-t-sm relative h-64 flex items-end overflow-hidden bg-white/5">
<div className="w-full chart-bar h-[85%] group-hover:h-[90%] transition-all duration-500"></div>
</div>
<span className="text-[10px] text-stone-500">Thu</span>
</div>
<div className="w-full flex flex-col items-center gap-2 group">
<div className="w-full rounded-t-sm relative h-64 flex items-end overflow-hidden bg-white/5">
<div className="w-full chart-bar h-[60%] group-hover:h-[65%] transition-all duration-500"></div>
</div>
<span className="text-[10px] text-stone-500">Fri</span>
</div>
<div className="w-full flex flex-col items-center gap-2 group">
<div className="w-full rounded-t-sm relative h-64 flex items-end overflow-hidden bg-white/5">
<div className="w-full chart-bar h-[75%] group-hover:h-[80%] transition-all duration-500"></div>
</div>
<span className="text-[10px] text-stone-500">Sat</span>
</div>
<div className="w-full flex flex-col items-center gap-2 group">
<div className="w-full rounded-t-sm relative h-64 flex items-end overflow-hidden bg-white/5">
<div className="w-full chart-bar h-[95%] group-hover:h-[100%] transition-all duration-500"></div>
</div>
<span className="text-[10px] text-stone-500">Sun</span>
</div>
</div>
</div>

<div className="glass-panel rounded-xl p-8">
<h4 className="text-lg font-light mb-6 text-white">Top Selling</h4>
<div className="space-y-6">

<div className="flex items-center gap-4">
<img className="w-12 h-12 rounded object-cover bg-white/5" src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<h5 className="text-sm text-white">Orbital Pendant</h5>
<p className="text-xs text-stone-500">124 Sales</p>
</div>
<span className="text-sm text-amber-200">TK 293K</span>
</div>

<div className="flex items-center gap-4">
<img className="w-12 h-12 rounded object-cover bg-white/5" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="flex-1">
<h5 className="text-sm text-white">Chronos Noir</h5>
<p className="text-xs text-stone-500">89 Sales</p>
</div>
<span className="text-sm text-amber-200">TK 792K</span>
</div>

<div className="flex items-center gap-4">
<img className="w-12 h-12 rounded object-cover bg-white/5" src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&amp;w=1935&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<h5 className="text-sm text-white">Vesper Clutch</h5>
<p className="text-xs text-stone-500">65 Sales</p>
</div>
<span className="text-sm text-amber-200">TK 78K</span>
</div>

<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded flex items-center justify-center border bg-white/5 text-stone-600 border-white/5">
<span className="text-xs">More</span>
</div>
<div className="flex-1">
<h5 className="text-sm text-stone-400">View All Products</h5>
</div>
<iconify-icon className="text-stone-500" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="lg:col-span-3 glass-panel rounded-xl overflow-hidden">
<div className="p-6 border-b flex justify-between items-center border-white/5">
<h4 className="text-lg font-light text-white">Recent Orders</h4>
<button className="text-xs transition-colors uppercase tracking-widest text-amber-400 hover:text-amber-200">View All</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm text-stone-400">
<thead className="text-xs uppercase tracking-wider bg-white/5 text-stone-300">
<tr>
<th className="px-6 py-4 font-medium">Order ID</th>
<th className="px-6 py-4 font-medium">Customer</th>
<th className="px-6 py-4 font-medium">Product</th>
<th className="px-6 py-4 font-medium">Date</th>
<th className="px-6 py-4 font-medium">Amount</th>
<th className="px-6 py-4 font-medium">Status</th>
<th className="px-6 py-4 font-medium text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="transition-colors hover:bg-white/5">
<td className="px-6 py-4 text-white">#ORD-7721</td>
<td className="px-6 py-4">Eleanor P.</td>
<td className="px-6 py-4">Orbital Pendant (Gold)</td>
<td className="px-6 py-4">Oct 24, 2024</td>
<td className="px-6 py-4 text-white">TK 2,450</td>
<td className="px-6 py-4"><span className="bg-green-500/10 px-2 py-1 rounded text-xs text-green-400">Paid</span></td>
<td className="px-6 py-4 text-right"><button className="hover:text-white"><iconify-icon icon="solar:menu-dots-linear"></iconify-icon></button></td>
</tr>
<tr className="transition-colors hover:bg-white/5">
<td className="px-6 py-4 text-white">#ORD-7720</td>
<td className="px-6 py-4">Marcus T.</td>
<td className="px-6 py-4">Chronos Noir Watch</td>
<td className="px-6 py-4">Oct 23, 2024</td>
<td className="px-6 py-4 text-white">TK 8,900</td>
<td className="px-6 py-4"><span className="bg-amber-500/10 px-2 py-1 rounded text-xs text-amber-400">Pending</span></td>
<td className="px-6 py-4 text-right"><button className="hover:text-white"><iconify-icon icon="solar:menu-dots-linear"></iconify-icon></button></td>
</tr>
<tr className="transition-colors hover:bg-white/5">
<td className="px-6 py-4 text-white">#ORD-7719</td>
<td className="px-6 py-4">Sarah J.</td>
<td className="px-6 py-4">Midnight Silk Dress</td>
<td className="px-6 py-4">Oct 23, 2024</td>
<td className="px-6 py-4 text-white">TK 1,200</td>
<td className="px-6 py-4"><span className="bg-blue-500/10 px-2 py-1 rounded text-xs text-blue-400">Shipped</span></td>
<td className="px-6 py-4 text-right"><button className="hover:text-white"><iconify-icon icon="solar:menu-dots-linear"></iconify-icon></button></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</main>
</div>



    </>
  );
}
