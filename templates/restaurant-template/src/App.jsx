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



        lucide.createIcons();
    
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
      

<div className="min-h-screen flex flex-col w-full relative">

<div className="absolute inset-0 z-0 select-none pointer-events-none h-screen">

<img alt="Delicious Pizza Background" className="w-full h-full object-cover object-center lg:object-right opacity-90" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&amp;w=2881&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/20 lg:to-transparent lg:w-[80%]"></div>

<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
</div>

<nav className="relative z-50 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

<div className="flex items-center gap-3">
<div className="text-white">
<i className="w-8 h-8 stroke-[1.5]" data-lucide="cloche"></i>
</div>
<span className="uppercase text-3xl font-semibold tracking-tight font-display">Dinevo</span>
</div>

<div className="hidden lg:flex items-center gap-10 text-base font-medium text-gray-300">
<a className="text-white transition-colors" href="#">Home</a>
<a className="hover:text-white transition-colors" href="#">About Us</a>
<a className="hover:text-white transition-colors" href="#">Menu</a>
<a className="hover:text-white transition-colors flex items-center gap-1" href="#">
                    Pages 
                    <svg className="lucide lucide-chevron-down w-4 h-4 mt-0.5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>

<div className="hidden sm:block">
<button className="group bg-[#F05830] hover:bg-[#d64520] text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 flex items-center gap-2">
                    BOOK A TABLE
                    <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="lg:hidden text-white">
<svg className="lucide lucide-menu w-8 h-8" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</div>
</nav>

<main className="relative z-10 flex-grow flex items-center w-full max-w-7xl mx-auto px-6 pt-10 pb-20 min-h-[85vh]">
<div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">

<div className="lg:col-span-8 flex flex-col justify-center">

<p className="text-[#F05830] text-xl lg:text-2xl mb-4 font-medium tracking-wide">
                        上質な時間を
                    </p>

<h1 className="font-display text-7xl sm:text-8xl lg:text-[10rem] leading-[0.85] uppercase text-white tracking-tight mb-8">
                        Where Elegance <br/>
                        Meets Flavor
                    </h1>

<div className="max-w-xl mb-10">
<p className="text-gray-300 text-lg sm:text-xl leading-relaxed font-normal">
                            We turn every meal into a memorable experience.<br/>
                            From mouth-watering dishes crafted every time.
                        </p>
</div>

<div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">

<div className="flex items-center">
<div className="flex -space-x-4">
<img alt="User 1" className="w-12 h-12 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<img alt="User 2" className="w-12 h-12 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<img alt="User 3" className="w-12 h-12 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div className="w-12 h-12 rounded-full border-2 border-black bg-black/80 backdrop-blur-sm text-white flex items-center justify-center text-xs font-semibold">
                                    10+
                                </div>
</div>
</div>

<button className="group bg-[#F05830] hover:bg-[#d64520] text-white px-8 py-4 rounded-full text-base font-semibold tracking-wide transition-all duration-300 flex items-center gap-3 shadow-[0_0_40px_-10px_rgba(240,88,48,0.5)]">
                            EXPLORE MENU
                            <svg className="lucide lucide-arrow-right w-5 h-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="lg:col-span-4 flex justify-start lg:justify-end lg:mb-8">
<div className="bg-white p-2.5 rounded-3xl w-full max-w-sm transform transition hover:scale-[1.02] duration-500 shadow-2xl shadow-black/50">
<div className="flex justify-between items-center px-2 py-3">
<span className="text-black font-semibold text-lg tracking-tight">Experience Our Signature Dishes</span>
<svg className="lucide lucide-corner-right-up w-5 h-5 text-[#F05830]" data-lucide="corner-right-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 9 5-5 5 5"></path><path d="M4 20h7a4 4 0 0 0 4-4V4"></path></svg>
</div>
<div className="relative overflow-hidden rounded-2xl h-56 bg-gray-100">
<img alt="Signature Sushi Dish" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
</div>
</div>
</div>
</div>
</main>

<div className="relative z-20 w-full bg-[#F05830] overflow-hidden py-5 select-none border-t border-white/10">
<div className="flex whitespace-nowrap">

<div className="flex items-center animate-marquee shrink-0">
<span className="font-display text-4xl font-semibold uppercase tracking-wide text-white px-8">Order Your Sushi</span>
<svg className="lucide lucide-arrow-up-right w-8 h-8 text-white stroke-[2]" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
<span className="font-display text-4xl font-semibold uppercase tracking-wide text-white px-8">Choose Favorite Dishes</span>
<svg className="lucide lucide-arrow-up-right w-8 h-8 text-white stroke-[2]" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
<span className="font-display text-4xl font-semibold uppercase tracking-wide text-white px-8">Discover All Menu</span>
<svg className="lucide lucide-arrow-up-right w-8 h-8 text-white stroke-[2]" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
<span className="font-display text-4xl font-semibold uppercase tracking-wide text-white px-8">Order Your Sushi</span>
<svg className="lucide lucide-arrow-up-right w-8 h-8 text-white stroke-[2]" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
<span className="font-display text-4xl font-semibold uppercase tracking-wide text-white px-8">Choose Favorite Dishes</span>
<svg className="lucide lucide-arrow-up-right w-8 h-8 text-white stroke-[2]" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>

<div aria-hidden="true" className="flex items-center animate-marquee shrink-0">
<span className="font-display text-4xl font-semibold uppercase tracking-wide text-white px-8">Order Your Sushi</span>
<svg className="lucide lucide-arrow-up-right w-8 h-8 text-white stroke-[2]" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
<span className="font-display text-4xl font-semibold uppercase tracking-wide text-white px-8">Choose Favorite Dishes</span>
<svg className="lucide lucide-arrow-up-right w-8 h-8 text-white stroke-[2]" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
<span className="font-display text-4xl font-semibold uppercase tracking-wide text-white px-8">Discover All Menu</span>
<svg className="lucide lucide-arrow-up-right w-8 h-8 text-white stroke-[2]" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
<span className="font-display text-4xl font-semibold uppercase tracking-wide text-white px-8">Order Your Sushi</span>
<svg className="lucide lucide-arrow-up-right w-8 h-8 text-white stroke-[2]" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
<span className="font-display text-4xl font-semibold uppercase tracking-wide text-white px-8">Choose Favorite Dishes</span>
<svg className="lucide lucide-arrow-up-right w-8 h-8 text-white stroke-[2]" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>

<section className="lg:py-32 bg-amber-50 w-full pt-24 pb-24 relative">

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="absolute top-[20%] right-[10%] w-96 h-96 bg-[#F05830]/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">

<div className="text-center mb-20 max-w-2xl mx-auto">
<h2 className="uppercase md:text-6xl text-5xl font-semibold text-zinc-800 tracking-tight font-display mb-6">
                        Why Dine <span className="text-[#F05830]">With Us?</span>
</h2>
<p className="text-gray-400 text-lg md:text-xl leading-relaxed font-normal">
                        From classic favorites to modern culinary creations, our menu is designed to tantalize your taste buds. Every dish is made with the freshest ingredients.
                    </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 gap-x-6 gap-y-6">

<div className="group relative h-[500px] w-full rounded-[2rem] overflow-hidden border border-white/5 bg-neutral-900/50">
<img alt="Delicious Tacos" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 rotate-[-5deg] group-hover:rotate-0 transition-transform duration-300">
<div className="bg-[#F05830] text-white text-xs font-bold px-4 py-2 rounded-full border-2 border-white shadow-xl uppercase tracking-widest">
                                 Top Rated
                             </div>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
</div>

<div className="group flex flex-col md:p-14 overflow-hidden hover:border-[#F05830]/30 transition-colors duration-500 bg-orange-300 border-white/10 border rounded-[2rem] px-10 py-10 relative justify-center">

<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] group-hover:bg-blue-500/10 transition-colors duration-500"></div>
<div className="z-10 relative">
<div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8 border border-blue-500/20 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-heart w-7 h-7 text-blue-400 stroke-[1.5]" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</div>
<h3 className="md:text-4xl text-3xl text-orange-800 tracking-tight font-display mb-4">Fresh, Locally Sourced Ingredients.</h3>
<p className="leading-relaxed text-lg text-orange-800 mb-8">
                                We use only the freshest ingredients &amp; traditional recipes to ensure each dish is a masterpiece. Taste the difference quality makes.
                            </p>
<button className="bg-white text-black hover:bg-gray-100 px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all flex items-center gap-2 w-max">
                                View Menu
                                <svg className="lucide lucide-arrow-right w-4 h-4 stroke-[1.5]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="group relative h-[500px] w-full rounded-[2rem] overflow-hidden border border-white/5 bg-neutral-900/50">
<img alt="Gourmet Salad" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

<div className="absolute top-6 right-6">
<div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center animate-spin-slow">
<svg className="w-full h-full p-1" viewbox="0 0 100 100">
<path d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent" id="curve"></path>
<text fill="white" fontSize="13" font-weight="bold" letter-spacing="2">
<textpath href="#curve">100% ORGANIC • FRESH •</textpath>
</text>
</svg>
<svg className="lucide lucide-leaf w-6 h-6 text-[#F05830] absolute stroke-[1.5]" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
</div>
</div>

<div className="group relative flex flex-col justify-center p-10 md:p-14 rounded-[2rem] border border-white/10 bg-gradient-to-br from-neutral-900 to-black overflow-hidden hover:border-[#F05830]/30 transition-colors duration-500">

<div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F05830]/5 rounded-full blur-[80px] group-hover:bg-[#F05830]/10 transition-colors duration-500"></div>
<div className="relative z-10">
<div className="w-14 h-14 rounded-2xl bg-[#F05830]/10 flex items-center justify-center mb-8 border border-[#F05830]/20 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-chef-hat w-7 h-7 text-[#F05830] stroke-[1.5]" data-lucide="chef-hat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"></path><path d="M6 17h12"></path></svg>
</div>
<h3 className="text-3xl md:text-4xl font-display text-white mb-4 tracking-tight">Expertly Crafted Culinary Art.</h3>
<p className="text-gray-400 text-lg leading-relaxed mb-8">
                                Our master chefs bring years of experience and passion to your table, turning every ingredient into a work of art.
                            </p>
<button className="bg-[#F05830] hover:bg-[#d64520] text-white px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all flex items-center gap-2 w-max shadow-lg shadow-orange-900/20">
                                Meet The Chefs
                                <svg className="lucide lucide-arrow-right w-4 h-4 stroke-[1.5]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>
</section>
</div>



    </>
  );
}
