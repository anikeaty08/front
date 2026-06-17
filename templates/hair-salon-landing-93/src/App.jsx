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
      

<div className="grain-overlay"></div>

<nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-black/80 backdrop-blur-md border-b border-white/5">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="text-white tracking-tighter text-lg font-semibold hover:opacity-80 transition-opacity flex items-center gap-2" href="#">
<span className="w-2 h-2 rounded-full bg-white"></span>
                ATELIER NOIR
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-tight">
<a className="text-white/80 hover:text-white transition-colors relative group" href="#cenik">
                    Ceník
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-white/80 hover:text-white transition-colors relative group" href="#tvorba">
                    Tvorba
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-white/80 hover:text-white transition-colors relative group" href="#kontakt">
                    Kontakt
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
</a>
</div>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="flex overflow-hidden bg-neutral-200 w-full h-screen relative items-center justify-center">

<div className="absolute inset-0 w-full h-full">

<video autoplay="" className="filter contrast-125 w-full h-full object-cover grayscale invert-0 brightness-75" loop="" muted="" playsinline="" style={{maskImage: 'linear-gradient(200deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(200deg, transparent, black 0%, black 100%, transparent)'}}>
<source src="https://cdn.midjourney.com/video/19a1d904-c522-4b23-bde0-1b90328402a8/0.mp4" type="video/mp4"/>
</video>

<div className="backdrop-blur-[1px] bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white/10 to-white/0 absolute top-0 right-0 bottom-0 left-0 scale-50 -skew-x-5 space-y-3" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))'}}></div>

<div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-neutral-950 to-transparent"></div>
</div>

<div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-16 fade-in-up">
<h1 className="md:text-8xl lg:text-9xl leading-[0.9] text-6xl font-extrabold text-slate-50 tracking-tighter mb-8 drop-shadow-sm">Umění<br/><span className="text-gray-50">detailu.</span></h1>
<p className="leading-relaxed fade-in-up delay-200 md:text-xl text-lg font-bold text-slate-50 tracking-tight max-w-lg mx-auto drop-shadow-sm">
                Prémiová péče o vlasy v srdci města. Individuální přístup, moderní techniky a atmosféra, kde se čas zastaví.
            </p>
<div className="mt-12 fade-in-up delay-300">
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float text-white mix-blend-difference z-20">
<iconify-icon icon="solar:mouse-minimalistic-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
</header>

<section className="py-24 md:py-32 px-6 bg-neutral-950 relative overflow-hidden" id="cenik">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute top-1/4 -left-64 w-96 h-96 bg-white/5 rounded-full blur-[100px]"></div>
<div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-white/5 rounded-full blur-[100px]"></div>
</div>
<div className="max-w-6xl mx-auto relative z-10">
<div className="mb-16 md:mb-24 text-center md:text-left fade-in-up">
<h2 className="md:text-5xl text-3xl font-semibold text-white tracking-tighter text-left mb-4 translate-x-1 translate-y-16">Ceník služeb</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

<div className="group relative rounded-[2rem] p-8 md:p-10 bg-neutral-900/40 border border-white/5 backdrop-blur-xl hover:bg-white/[0.07] hover:border-white/20 transition-all duration-500 shadow-2xl shadow-black/50 fade-in-up delay-100">
<div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none"></div>
<div className="relative">
<h3 className="text-2xl text-white font-semibold tracking-tight mb-8 flex items-center gap-3">
<span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:woman-linear" strokeWidth="1.5" width="20"></iconify-icon>
</span>
                            Dámský střih &amp; styling
                        </h3>
<div className="space-y-7">
<div className="flex items-baseline justify-between group/item cursor-default">
<span className="text-neutral-400 font-medium group-hover/item:text-white transition-colors">Střih a foukaná</span>
<div className="flex-grow mx-4 border-b border-neutral-800 border-dashed opacity-50"></div>
<span className="text-white font-semibold">950 Kč</span>
</div>
<div className="flex items-baseline justify-between group/item cursor-default">
<span className="text-neutral-400 font-medium group-hover/item:text-white transition-colors">Barvení (odrost)</span>
<div className="flex-grow mx-4 border-b border-neutral-800 border-dashed opacity-50"></div>
<span className="text-white font-semibold">1 400 Kč</span>
</div>
<div className="flex items-baseline justify-between group/item cursor-default">
<span className="text-neutral-400 font-medium group-hover/item:text-white transition-colors">Celkové barvení</span>
<div className="flex-grow mx-4 border-b border-neutral-800 border-dashed opacity-50"></div>
<span className="text-white font-semibold">od 1 800 Kč</span>
</div>
<div className="flex items-baseline justify-between group/item cursor-default">
<span className="text-neutral-400 font-medium group-hover/item:text-white transition-colors">Balayage / Ombré</span>
<div className="flex-grow mx-4 border-b border-neutral-800 border-dashed opacity-50"></div>
<span className="text-white font-semibold">od 2 800 Kč</span>
</div>
<div className="flex items-baseline justify-between group/item cursor-default">
<span className="text-neutral-400 font-medium group-hover/item:text-white transition-colors">Společenský účes</span>
<div className="flex-grow mx-4 border-b border-neutral-800 border-dashed opacity-50"></div>
<span className="text-white font-semibold">1 200 Kč</span>
</div>
</div>
</div>
</div>

<div className="group relative rounded-[2rem] p-8 md:p-10 bg-neutral-900/40 border border-white/5 backdrop-blur-xl hover:bg-white/[0.07] hover:border-white/20 transition-all duration-500 shadow-2xl shadow-black/50 fade-in-up delay-200">
<div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none"></div>
<div className="relative">
<h3 className="text-2xl text-white font-semibold tracking-tight mb-8 flex items-center gap-3">
<span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="20"></iconify-icon>
</span>
                            Pánský střih
                        </h3>
<div className="space-y-7">
<div className="flex items-baseline justify-between group/item cursor-default">
<span className="text-neutral-400 font-medium group-hover/item:text-white transition-colors">Klasický střih</span>
<div className="flex-grow mx-4 border-b border-neutral-800 border-dashed opacity-50"></div>
<span className="text-white font-semibold">550 Kč</span>
</div>
<div className="flex items-baseline justify-between group/item cursor-default">
<span className="text-neutral-400 font-medium group-hover/item:text-white transition-colors">Fade střih</span>
<div className="flex-grow mx-4 border-b border-neutral-800 border-dashed opacity-50"></div>
<span className="text-white font-semibold">650 Kč</span>
</div>
<div className="flex items-baseline justify-between group/item cursor-default">
<span className="text-neutral-400 font-medium group-hover/item:text-white transition-colors">Střih strojkem</span>
<div className="flex-grow mx-4 border-b border-neutral-800 border-dashed opacity-50"></div>
<span className="text-white font-semibold">350 Kč</span>
</div>
<div className="flex items-baseline justify-between group/item cursor-default">
<span className="text-neutral-400 font-medium group-hover/item:text-white transition-colors">Úprava vousů</span>
<div className="flex-grow mx-4 border-b border-neutral-800 border-dashed opacity-50"></div>
<span className="text-white font-semibold">400 Kč</span>
</div>
<div className="flex items-baseline justify-between group/item cursor-default">
<span className="text-neutral-400 font-medium group-hover/item:text-white transition-colors">Komplet (vlasy + vousy)</span>
<div className="flex-grow mx-4 border-b border-neutral-800 border-dashed opacity-50"></div>
<span className="text-white font-semibold">850 Kč</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-950 border-white/5 border-t pt-24 pr-6 pb-24 pl-6" id="tvorba">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end gap-6 text-justify mb-12 gap-x-6 gap-y-6 justify-between">
<h2 className="md:text-5xl text-3xl font-semibold text-white tracking-tighter text-justify">Moje tvorba</h2>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
<div className="aspect-[3/4] overflow-hidden rounded-xl group relative cursor-pointer">
<img alt="Hairstyle 1" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out transform group-hover:scale-110" src="https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<span className="text-white text-xs font-medium tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500">STŘIH &amp; STYLING</span>
</div>
</div>
<div className="aspect-[3/4] overflow-hidden rounded-xl group relative cursor-pointer">
<img alt="Hairstyle 2" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out transform group-hover:scale-110" src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<span className="text-white text-xs font-medium tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500">BARVENÍ</span>
</div>
</div>
<div className="aspect-[3/4] overflow-hidden rounded-xl group relative cursor-pointer">
<img alt="Hairstyle 3" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out transform group-hover:scale-110" src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<span className="text-white text-xs font-medium tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500">ÚPRAVA VOUSŮ</span>
</div>
</div>
<div className="aspect-[3/4] overflow-hidden rounded-xl group relative cursor-pointer">
<img alt="Hairstyle 4" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out transform group-hover:scale-110" src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<span className="text-white text-xs font-medium tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500">PÁNSKÝ STŘIH</span>
</div>
</div>
<div className="aspect-[3/4] overflow-hidden rounded-xl group relative cursor-pointer">
<img alt="Hairstyle 5" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out transform group-hover:scale-110" src="https://images.unsplash.com/photo-1519699047748-40baea614fda?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-[3/4] overflow-hidden rounded-xl group relative cursor-pointer">
<img alt="Hairstyle 6" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out transform group-hover:scale-110" src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<span className="text-white text-xs font-medium tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500">KREATIVNÍ STŘIH</span>
</div>
</div>
<div className="aspect-[3/4] overflow-hidden rounded-xl group relative cursor-pointer">
<img alt="Hairstyle 7" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out transform group-hover:scale-110" src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<span className="text-white text-xs font-medium tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500">MODERNÍ STYLING</span>
</div>
</div>
<div className="aspect-[3/4] overflow-hidden rounded-xl group relative cursor-pointer">
<img alt="Hairstyle 8" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out transform group-hover:scale-110" src="https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<span className="text-white text-xs font-medium tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500">PÉČE O VLASY</span>
</div>
</div>
<div className="aspect-[3/4] overflow-hidden rounded-xl group relative cursor-pointer">
<img alt="Hairstyle 9" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out transform group-hover:scale-110" src="https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<span className="text-white text-xs font-medium tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500">DETAIL</span>
</div>
</div>
<div className="aspect-[3/4] overflow-hidden rounded-xl group relative cursor-pointer">
<img alt="Hairstyle 10" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out transform group-hover:scale-110" src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<span className="text-white text-xs font-medium tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500">BARBER</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-gradient-to-b from-neutral-950 to-black" id="kontakt">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter mb-16 text-center">Kontakt</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="flex flex-col items-center text-center p-8 rounded-[2rem] bg-neutral-900/40 border border-white/5 hover:bg-white/5 hover:border-white/20 transition-all duration-300 group">
<div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/5 text-white mb-6 group-hover:bg-white group-hover:text-black transition-colors duration-500">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="26"></iconify-icon>
</div>
<h4 className="text-white font-semibold mb-3 tracking-tight">Adresa</h4>
<p className="text-sm font-light text-neutral-400 leading-relaxed">
                        Dlouhá 24<br/>
                        110 00 Praha 1<br/>
                        Česká republika
                    </p>
</div>

<div className="flex flex-col items-center text-center p-8 rounded-[2rem] bg-neutral-900/40 border border-white/5 hover:bg-white/5 hover:border-white/20 transition-all duration-300 group">
<div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/5 text-white mb-6 group-hover:bg-white group-hover:text-black transition-colors duration-500">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="26"></iconify-icon>
</div>
<h4 className="text-white font-semibold mb-3 tracking-tight">Spojení</h4>
<div className="flex flex-col gap-2">
<a className="text-sm font-light text-neutral-400 hover:text-white transition-colors" href="tel:+420123456789">+420 123 456 789</a>
<a className="text-sm font-light text-neutral-400 hover:text-white transition-colors" href="mailto:info@ateliernoir.cz">info@ateliernoir.cz</a>
</div>
</div>

<div className="flex flex-col items-center text-center p-8 rounded-[2rem] bg-neutral-900/40 border border-white/5 hover:bg-white/5 hover:border-white/20 transition-all duration-300 group">
<div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/5 text-white mb-6 group-hover:bg-white group-hover:text-black transition-colors duration-500">
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5" width="26"></iconify-icon>
</div>
<h4 className="text-white font-semibold mb-3 tracking-tight">Sledujte mě</h4>
<p className="text-sm font-light text-neutral-400 mb-6">
                        Nejnovější trendy.
                    </p>
<a className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wide hover:bg-white hover:text-black transition-all duration-300" href="https://instagram.com" target="_blank">
                        INSTAGRAM
                    </a>
</div>
</div>
<div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600 font-light">
<p>© 2024 Atelier Noir.</p>
<div className="flex gap-6">
<a className="hover:text-neutral-400 transition-colors" href="#">Ochrana soukromí</a>
<a className="hover:text-neutral-400 transition-colors" href="#">Obchodní podmínky</a>
</div>
</div>
</div>
</section>

    </>
  );
}
