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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="sticky top-0 z-50 bg-[#FCF9F9]/80 backdrop-blur-md border-b border-rose-100/60">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<img alt="earringsbyRC Logo" className="h-12 w-12 rounded-full object-cover border-2 border-rose-200 shadow-sm transition-transform group-hover:scale-105" src="https://i.etsystatic.com/24690812/r/isla/eed2fc/53474251/isla_200x200.53474251_4c1iewpb.jpg"/>
<span className="font-medium tracking-tight text-xl text-stone-800">earringsbyRC</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm text-stone-500">
<a className="hover:text-rose-500 transition-colors" href="#">Shop All</a>
<a className="hover:text-rose-500 transition-colors" href="#story">My Story</a>
<a className="hover:text-rose-500 transition-colors" href="#">Care Guide</a>
</div>

<div className="flex items-center gap-4 text-stone-600">
<button className="p-2 hover:bg-rose-50 rounded-full transition-colors hidden sm:block">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</button>
<button className="p-2 hover:bg-rose-50 rounded-full transition-colors relative">
<iconify-icon className="text-xl" icon="solar:bag-3-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<span className="absolute top-1 right-1 h-2 w-2 bg-rose-400 rounded-full"></span>
</button>
</div>
</div>
</nav>

<main className="flex-grow">

<section className="relative w-full overflow-hidden -mt-20 pt-20">

<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(120deg, rgba(251, 207, 232, 0.45), rgba(254, 240, 203, 0.55), rgba(254, 226, 226, 0.45), rgba(244, 241, 255, 0.55))', backgroundSize: '280% 280%', animation: 'heroGradient 18s ease-in-out infinite'}}></div>

<div className="absolute inset-0 bg-[#FCF9F9]/40"></div>

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-rose-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>

<div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
<div className="relative grid md:grid-cols-2 gap-12 items-center">
<div className="max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-600 text-xs font-medium mb-6">
<iconify-icon icon="solar:stars-linear"></iconify-icon>
                            New Spring Collection
                        </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-800 leading-tight mb-6">
                            Tiny works of art, <br/>
<span className="text-rose-400">handcrafted</span> for you.
                        </h1>
<p className="text-lg text-stone-500 mb-8 leading-relaxed max-w-md">
                            Slow-made polymer clay jewelry designed to bring a pop of color and a little spark of joy to your everyday life.
                        </p>
<div className="flex flex-wrap items-center gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 bg-rose-400 text-white rounded-full font-medium text-sm hover:bg-rose-500 transition-colors shadow-sm shadow-rose-200" href="#">
                                Shop the Collection
                            </a>
<a className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-stone-600 rounded-full font-medium text-sm hover:bg-rose-50 transition-colors" href="#story">
                                Read my story
                            </a>
</div>
</div>

<div className="grid grid-cols-2 gap-4 h-[400px] md:h-[500px]">
<div className="space-y-4">
<img alt="Clay earrings close up" className="w-full h-48 md:h-64 object-cover rounded-3xl shadow-sm" src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<img alt="Earrings display" className="w-full h-32 md:h-48 object-cover rounded-3xl shadow-sm" src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="space-y-4 pt-8">
<img alt="Clay process" className="w-full h-40 md:h-56 object-cover rounded-3xl shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Finished pieces" className="w-full h-40 md:h-56 object-cover rounded-3xl shadow-sm" src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-y border-rose-50" id="story">
<div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
<iconify-icon className="text-4xl text-rose-300 mb-6 mx-auto block" icon="solar:hand-heart-linear"></iconify-icon>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-800 mb-6 leading-snug">
                    "Every piece is mixed, conditioned, cut, baked, sanded, and assembled by my own two hands."
                </h2>
<p className="text-base md:text-lg text-stone-500 leading-relaxed max-w-2xl mx-auto">
                    I started working with polymer clay because I wanted to create something tangible, something that carries a piece of the maker's soul. In a world of mass production, I find peace in the slow, meticulous process of crafting small-batch jewelry. 
                    <br/><br/>
                    When you wear earringsbyRC, you're not just wearing an accessory; you're wearing hours of love, care, and a little piece of my heart.
                </p>
<div className="mt-8 flex justify-center items-center gap-2 text-rose-400 font-medium text-sm">
<span>With love, RC</span>
<iconify-icon icon="solar:heart-linear"></iconify-icon>
</div>
</div>
</section>

<section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-stone-800 mb-2">Fresh out the oven</h2>
<p className="text-sm text-stone-500">Discover our latest handcrafted batches.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-rose-500 hover:text-rose-600 transition-colors" href="#">
                    View all <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="flex overflow-x-auto gap-6 pb-8 hide-scrollbar snap-x snap-mandatory">

<div className="group snap-start shrink-0 w-[260px] sm:w-[300px] flex flex-col cursor-pointer">
<div className="relative w-full aspect-[4/5] mb-4 bg-stone-100 rounded-3xl overflow-hidden">
<img alt="Speckled Arch Earrings" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur p-2 rounded-full text-stone-800 shadow-sm">
<iconify-icon className="text-lg" icon="solar:bag-add-linear"></iconify-icon>
</div>
</div>
<h3 className="font-medium text-stone-800 text-base mb-1">Speckled Arch Dangles</h3>
<p className="text-sm text-stone-500 mb-2">Blush &amp; Terracotta</p>
<span className="font-medium text-rose-500 text-sm">$24.00</span>
</div>

<div className="group snap-start shrink-0 w-[260px] sm:w-[300px] flex flex-col cursor-pointer">
<div className="relative w-full aspect-[4/5] mb-4 bg-stone-100 rounded-3xl overflow-hidden">
<img alt="Floral Studs" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur p-2 rounded-full text-stone-800 shadow-sm">
<iconify-icon className="text-lg" icon="solar:bag-add-linear"></iconify-icon>
</div>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-xs font-medium text-stone-600 shadow-sm">
                            Bestseller
                        </div>
</div>
<h3 className="font-medium text-stone-800 text-base mb-1">Daisy Chain Studs</h3>
<p className="text-sm text-stone-500 mb-2">Sage Green</p>
<span className="font-medium text-rose-500 text-sm">$18.00</span>
</div>

<div className="group snap-start shrink-0 w-[260px] sm:w-[300px] flex flex-col cursor-pointer">
<div className="relative w-full aspect-[4/5] mb-4 bg-stone-100 rounded-3xl overflow-hidden">
<img alt="Abstract Face Earrings" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur p-2 rounded-full text-stone-800 shadow-sm">
<iconify-icon className="text-lg" icon="solar:bag-add-linear"></iconify-icon>
</div>
</div>
<h3 className="font-medium text-stone-800 text-base mb-1">Abstract Shapes</h3>
<p className="text-sm text-stone-500 mb-2">Warm Neutrals</p>
<span className="font-medium text-rose-500 text-sm">$28.00</span>
</div>

<div className="group snap-start shrink-0 w-[260px] sm:w-[300px] flex flex-col cursor-pointer">
<div className="relative w-full aspect-[4/5] mb-4 bg-stone-100 rounded-3xl overflow-hidden">
<img alt="Geometric Hoops" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur p-2 rounded-full text-stone-800 shadow-sm">
<iconify-icon className="text-lg" icon="solar:bag-add-linear"></iconify-icon>
</div>
</div>
<h3 className="font-medium text-stone-800 text-base mb-1">Textured U-Shapes</h3>
<p className="text-sm text-stone-500 mb-2">Oatmeal &amp; Pearl</p>
<span className="font-medium text-rose-500 text-sm">$26.00</span>
</div>

<div className="snap-start shrink-0 w-[180px] sm:w-[200px] flex items-center justify-center cursor-pointer bg-rose-50/50 rounded-3xl border border-dashed border-rose-200 hover:bg-rose-50 transition-colors">
<div className="text-center">
<iconify-icon className="text-3xl text-rose-400 mb-2" icon="solar:round-arrow-right-linear"></iconify-icon>
<span className="block text-sm font-medium text-stone-600">See all pieces</span>
</div>
</div>
</div>
<a className="sm:hidden mt-4 inline-flex items-center justify-center w-full py-3 bg-white border border-rose-100 rounded-full text-sm font-medium text-stone-600 shadow-sm" href="#">
                View entire shop
            </a>
</section>
</main>

<footer className="bg-white border-t border-rose-100 mt-auto">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<img alt="Logo mini" className="h-8 w-8 rounded-full object-cover grayscale opacity-60" src="https://i.etsystatic.com/24690812/r/isla/eed2fc/53474251/isla_200x200.53474251_4c1iewpb.jpg"/>
<span className="text-sm font-medium text-stone-400 tracking-tight">earringsbyRC</span>
</div>
<div className="flex gap-6 text-sm text-stone-500">
<a className="hover:text-rose-400 transition-colors" href="#">FAQ</a>
<a className="hover:text-rose-400 transition-colors" href="#">Shipping</a>
<a className="hover:text-rose-400 transition-colors" href="#">Instagram</a>
</div>
<p className="text-xs text-stone-400">
                © 2023 earringsbyRC. Handcrafted in small batches.
            </p>
</div>
</footer>

    </>
  );
}
