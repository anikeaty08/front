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



tailwind.config = {
theme: {
extend: {
colors: {
neutral: {
750: '#333333',
}
}
}
}
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // 3D Tilt Effect Logic
        const stage = document.getElementById('watch-stage');
        const container = document.querySelector('.perspective-container');

        // Mouse Move Event for 3D Tilt
        document.addEventListener('mousemove', (e) => {
            if (window.innerWidth < 768 || !stage) return;

            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            
            stage.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        // Reset on Mouse Leave
        document.addEventListener('mouseleave', () => {
            if(stage) stage.style.transform = `rotateY(0deg) rotateX(0deg)`;
        });

        // Smooth Entrance Animation
        window.addEventListener('load', () => {
            setTimeout(() => {
                if(stage) stage.classList.remove('opacity-0');
            }, 100);
        });

        // Simple Intersection Observer for Fade-in elements
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        });

        // Apply animations to sections
        document.querySelectorAll('h2, .group').forEach((el) => {
            el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
            observer.observe(el);
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
      

<div className="noise-bg"></div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-6 h-6 border border-white/20 rounded-full flex items-center justify-center group-hover:border-white/60 transition-colors">
<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
</div>
<span className="text-xs font-medium tracking-widest text-white uppercase">Maison Couture</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-normal text-neutral-400 hover:text-white transition-colors" href="#bridal">Bridal</a>
<a className="text-xs font-normal text-neutral-400 hover:text-white transition-colors" href="#evening">Evening Wear</a>
<a className="text-xs font-normal text-neutral-400 hover:text-white transition-colors" href="#resort">Resort 2025</a>
<a className="text-xs font-normal text-neutral-400 hover:text-white transition-colors" href="#atelier">The Atelier</a>
</div>
<button className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors">
                Book Fitting
            </button>
</div>
</nav>

<section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] glow-spot opacity-50 pointer-events-none"></div>

<div className="perspective-container relative w-full max-w-5xl h-[600px] flex items-center justify-center pointer-events-none md:pointer-events-auto">
<div className="watch-card relative w-full h-full flex items-center justify-center" id="watch-stage">

<h1 className="absolute text-8xl md:text-9xl font-medium tracking-tight text-white/5 leading-none select-none layer-1 whitespace-nowrap">
                    LUMINA
                </h1>

<div className="relative w-64 md:w-80 z-10 layer-3 drop-shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-tr from-rose-500/20 to-amber-500/20 blur-3xl rounded-full"></div>
<img alt="Crimson Evening Gown" className="relative w-full h-auto object-cover mask-image-gradient rounded-full shadow-[0_0_100px_rgba(220,38,38,0.2)] border border-white/5 clip-circle" src="https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<style>.clip-circle { clip-path: circle(42% at 50% 50%); }</style>
</div>

<div className="absolute left-4 md:left-20 top-1/3 p-4 rounded-xl bg-neutral-900/40 backdrop-blur-md border border-white/10 w-48 layer-4 hidden md:block">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-white/60" icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs uppercase tracking-widest text-neutral-400">Fabric</span>
</div>
<p className="text-sm text-white font-medium">Crimson Silk</p>
<div className="mt-3 h-px w-full bg-white/10"></div>
<div className="mt-3 flex justify-between items-end">
<span className="text-xs text-neutral-500">Italian</span>
<span className="text-xs text-rose-300">Hand-dyed</span>
</div>
</div>

<div className="absolute right-4 md:right-20 bottom-1/3 p-4 rounded-xl bg-neutral-900/40 backdrop-blur-md border border-white/10 w-48 layer-2 hidden md:block">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-white/60" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs uppercase tracking-widest text-neutral-400">Details</span>
</div>
<p className="text-sm text-white font-medium">Crystal Corset</p>
<p className="text-xs text-neutral-500 mt-1">Structured Bodice</p>
</div>

<div className="absolute inset-0 border border-white/5 rounded-full scale-150 opacity-20 layer-1"></div>
<div className="absolute inset-0 border border-white/5 rounded-full scale-125 opacity-20 layer-1 border-dashed"></div>
</div>
</div>

<div className="absolute bottom-10 left-0 w-full text-center z-20">
<p className="text-xs uppercase tracking-widest text-neutral-500 mb-4">The Evening Collection</p>
<div className="flex justify-center gap-4">
<button className="group flex items-center gap-2 px-6 py-2.5 bg-white text-black text-sm font-medium rounded-full hover:bg-neutral-200 transition-all">
<span>View Lookbook</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
</div>

<div className="mt-12 flex justify-center animate-bounce opacity-50">
<iconify-icon className="text-neutral-500" icon="solar:mouse-minimalistic-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto z-10 relative" id="evening">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
<div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">Curated <span className="text-neutral-600">Collection</span></h2>
<p className="text-neutral-400 text-sm max-w-md">Explore our vibrant selection of haute couture pieces. Each gown is a masterpiece of color, texture, and tailored perfection.</p>
</div>

<div className="flex flex-wrap gap-3">
<button className="px-5 py-2 rounded-full border border-white/20 text-white text-xs bg-white/5 font-medium transition-colors">All Pieces</button>
<button className="px-5 py-2 rounded-full border border-white/5 text-neutral-400 hover:text-white hover:border-white/20 text-xs font-medium transition-colors">Evening</button>
<button className="px-5 py-2 rounded-full border border-white/5 text-neutral-400 hover:text-white hover:border-white/20 text-xs font-medium transition-colors">Bridal</button>
<button className="px-5 py-2 rounded-full border border-white/5 text-neutral-400 hover:text-white hover:border-white/20 text-xs font-medium transition-colors">Resort</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group cursor-pointer flex flex-col">
<div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 mb-4">
<img alt="Crimson Silk Dress" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1566164219356-cb82b9a7c6f0?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-xs text-white">New</div>
</div>
<div className="flex justify-between items-start flex-1">
<div>
<h3 className="text-white font-medium text-sm tracking-tight">Scarlet Serenade</h3>
<p className="text-neutral-500 text-xs mt-1">Evening Wear</p>
</div>
<span className="text-white text-sm font-medium">$4,200</span>
</div>
</div>

<div className="group cursor-pointer flex flex-col">
<div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 mb-4">
<img alt="Sapphire Blue Dress" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1583391733958-65e2be19b964?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start flex-1">
<div>
<h3 className="text-white font-medium text-sm tracking-tight">Sapphire Illusion</h3>
<p className="text-neutral-500 text-xs mt-1">Haute Couture</p>
</div>
<span className="text-white text-sm font-medium">$5,800</span>
</div>
</div>

<div className="group cursor-pointer flex flex-col">
<div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 mb-4">
<img alt="Emerald Velvet Dress" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1612336307429-8a898d10e223?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start flex-1">
<div>
<h3 className="text-white font-medium text-sm tracking-tight">Emerald Envy</h3>
<p className="text-neutral-500 text-xs mt-1">Resort Collection</p>
</div>
<span className="text-white text-sm font-medium">$3,500</span>
</div>
</div>

<div className="group cursor-pointer flex flex-col">
<div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 mb-4">
<img alt="Gold Sequin Dress" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1568251188392-ae32f808fcb0?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start flex-1">
<div>
<h3 className="text-white font-medium text-sm tracking-tight">Aura Gold Gown</h3>
<p className="text-neutral-500 text-xs mt-1">Bridal Alternate</p>
</div>
<span className="text-white text-sm font-medium">$6,100</span>
</div>
</div>

<div className="group cursor-pointer flex flex-col mt-8 md:mt-0">
<div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 mb-4">
<img alt="Rose Pink Gown" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1515347619362-ae615d862f92?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start flex-1">
<div>
<h3 className="text-white font-medium text-sm tracking-tight">Rose Petal Drape</h3>
<p className="text-neutral-500 text-xs mt-1">Evening Wear</p>
</div>
<span className="text-white text-sm font-medium">$4,900</span>
</div>
</div>

<div className="group cursor-pointer flex flex-col mt-8 md:mt-0">
<div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 mb-4">
<img alt="Classic White Gown" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start flex-1">
<div>
<h3 className="text-white font-medium text-sm tracking-tight">Ivory Essence</h3>
<p className="text-neutral-500 text-xs mt-1">Classic Bridal</p>
</div>
<span className="text-white text-sm font-medium">$8,500</span>
</div>
</div>

<div className="group cursor-pointer flex flex-col mt-8 md:mt-0">
<div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 mb-4">
<img alt="Lavender Dress" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1550614000-4b95d4ed798a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start flex-1">
<div>
<h3 className="text-white font-medium text-sm tracking-tight">Lavender Mist</h3>
<p className="text-neutral-500 text-xs mt-1">Resort Collection</p>
</div>
<span className="text-white text-sm font-medium">$3,200</span>
</div>
</div>

<div className="group cursor-pointer flex flex-col mt-8 md:mt-0">
<div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-900/30 border border-white/5 mb-4 flex items-center justify-center hover:bg-neutral-900/50 transition-colors">
<div className="text-center">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform bg-white/5">
<iconify-icon className="text-white" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<span className="text-white text-sm font-medium">View Full Archive</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-neutral-900/10 py-12 overflow-hidden">
<div className="flex items-center gap-12 whitespace-nowrap animate-marquee">
<span className="text-6xl font-medium text-neutral-800 tracking-tight hover:text-neutral-700 transition-colors">EVENING</span>
<span className="text-6xl font-medium text-white/5 tracking-tight">—</span>
<span className="text-6xl font-medium text-neutral-800 tracking-tight hover:text-neutral-700 transition-colors">BRIDAL</span>
<span className="text-6xl font-medium text-white/5 tracking-tight">—</span>
<span className="text-6xl font-medium text-neutral-800 tracking-tight hover:text-neutral-700 transition-colors">RESORT</span>
<span className="text-6xl font-medium text-white/5 tracking-tight">—</span>
<span className="text-6xl font-medium text-neutral-800 tracking-tight hover:text-neutral-700 transition-colors">COUTURE</span>
<span className="text-6xl font-medium text-white/5 tracking-tight">—</span>
<span className="text-6xl font-medium text-neutral-800 tracking-tight hover:text-neutral-700 transition-colors">EVENING</span>
<span className="text-6xl font-medium text-white/5 tracking-tight">—</span>
<span className="text-6xl font-medium text-neutral-800 tracking-tight hover:text-neutral-700 transition-colors">BRIDAL</span>
</div>
<style>
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-marquee {
                animation: marquee 20s linear infinite;
            }
        </style>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto" id="atelier">
<div className="flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/2 relative h-[600px] bg-neutral-900/30 rounded-3xl overflow-hidden border border-white/5 group">
<img alt="Atelier Process" className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8">
<div className="px-3 py-1 bg-white/10 backdrop-blur rounded text-xs text-white/80 border border-white/10 inline-block mb-3">ATELIER</div>
<h3 className="text-2xl font-medium text-white tracking-tight">The Art of Creation</h3>
</div>
</div>
<div className="w-full md:w-1/2 space-y-8">
<h2 className="text-4xl font-medium text-white tracking-tight leading-tight">
                    Beyond the <br/>
<span className="text-neutral-500">Boundaries of Color.</span>
</h2>
<div className="space-y-6 text-neutral-400 text-sm leading-relaxed border-l border-white/10 pl-6">
<p>
                        Our latest collection breaks away from traditional monochromatic palettes, embracing rich, jewel-toned silks and vibrant velvet textures that command attention in any room.
                    </p>
<p>
                        Every gown is conceptualized in Paris and tailored in Milan. We source the most exquisite fabrics globally to ensure that the color, drape, and silhouette are entirely flawless.
                    </p>
</div>
<div className="pt-4 flex items-center gap-6">
<button className="bg-white hover:bg-neutral-200 text-black px-8 py-3 rounded-full text-sm font-medium transition-colors">
                        Book Consultation
                    </button>
<a className="text-sm font-medium text-white hover:text-neutral-300 transition-colors flex items-center gap-2" href="#">
                        Read Our Story
                        <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 px-6 bg-black">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
<div>
<div className="flex items-center gap-2 mb-6">
<div className="w-4 h-4 border border-white/20 rounded-full flex items-center justify-center">
<div className="w-1 h-1 bg-white rounded-full"></div>
</div>
<span className="text-xs font-medium tracking-widest text-white uppercase">Maison Couture</span>
</div>
<p className="text-xs text-neutral-500 max-w-xs leading-relaxed">
                    Designed in Paris. Tailored in Milan. <br/>
                    © 2024 Maison Couture Inc. All rights reserved.
                </p>
</div>
<div className="flex gap-12 sm:gap-24">
<div className="flex flex-col gap-4">
<span className="text-xs font-medium text-white mb-1">Categories</span>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Bridal Gowns</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Evening Wear</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Resort Collection</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs font-medium text-white mb-1">Company</span>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">The Atelier</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Bespoke Process</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Boutiques</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs font-medium text-white mb-1">Connect</span>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Instagram</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Pinterest</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
