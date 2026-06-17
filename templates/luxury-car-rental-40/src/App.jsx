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
      
<div className="max-w-[1400px] w-full">

<header className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-16">
<h1 className="text-5xl md:text-6xl font-medium tracking-tight text-white">Our Fleet</h1>
<p className="text-xl text-zinc-400 max-w-md md:pt-3 leading-relaxed">
                We offer an extensive fleet of vehicles including sedans, limousines and crossovers
            </p>
</header>

<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-12">

<div className="flex flex-wrap items-center gap-2 md:gap-3 text-lg">
<button className="px-5 py-2.5 rounded-lg bg-[#a3c970]/15 text-[#a3c970] font-medium transition-colors hover:bg-[#a3c970]/20">All</button>
<button className="px-5 py-2.5 text-zinc-400 hover:text-zinc-200 transition-colors">Luxury</button>
<div className="hidden md:block w-px h-5 bg-zinc-800 mx-2"></div>
<button className="px-5 py-2.5 text-zinc-400 hover:text-zinc-200 transition-colors">Business</button>
<div className="hidden md:block w-px h-5 bg-zinc-800 mx-2"></div>
<button className="px-5 py-2.5 text-zinc-400 hover:text-zinc-200 transition-colors">Crossover</button>
</div>

<div className="flex items-center gap-3">
<button className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-600 cursor-not-allowed border border-zinc-800/60 transition-colors">
<i className="w-6 h-6" data-lucide="chevron-left" strokeWidth="1.5"></i>
</button>
<button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-zinc-950 hover:bg-zinc-200 transition-colors shadow-sm shadow-white/10">
<i className="w-6 h-6" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

<div className="flex flex-col gap-5 group cursor-pointer">
<div className="bg-[#18181b] rounded-3xl p-8 aspect-[4/3] flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:bg-[#1f1f22]">
<img alt="Mersedes Benz S Class" className="w-[95%] object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105" src="https://freepngimg.com/thumb/car/3-2-car-free-download-png.png" style={{filter: 'brightness(0.85) contrast(1.1)'}}/>
</div>
<div className="px-1">
<h3 className="text-xl font-medium tracking-tight mb-4 text-zinc-100 group-hover:text-white transition-colors">Mersedes Benz S Class</h3>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2.5 bg-[#18181b] px-3.5 py-2 rounded-lg text-zinc-300 text-lg">
<i className="w-4 h-4 text-zinc-400" data-lucide="users" strokeWidth="1.5"></i> 2
                        </div>
<div className="flex items-center gap-2.5 bg-[#18181b] px-3.5 py-2 rounded-lg text-zinc-300 text-lg">
<i className="w-4 h-4 text-zinc-400" data-lucide="briefcase" strokeWidth="1.5"></i> 2
                        </div>
</div>
</div>
</div>

<div className="flex flex-col gap-5 group cursor-pointer">
<div className="bg-[#18181b] rounded-3xl p-8 aspect-[4/3] flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:bg-[#1f1f22]">
<img alt="Mersedes Benz V Class" className="w-[95%] object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105" src="https://freepngimg.com/thumb/car/1-2-car-png-picture.png" style={{filter: 'brightness(0.85) contrast(1.1)'}}/>
</div>
<div className="px-1">
<h3 className="text-xl font-medium tracking-tight mb-4 text-zinc-100 group-hover:text-white transition-colors">Mersedes Benz V Class</h3>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2.5 bg-[#18181b] px-3.5 py-2 rounded-lg text-zinc-300 text-lg">
<i className="w-4 h-4 text-zinc-400" data-lucide="users" strokeWidth="1.5"></i> 6
                        </div>
<div className="flex items-center gap-2.5 bg-[#18181b] px-3.5 py-2 rounded-lg text-zinc-300 text-lg">
<i className="w-4 h-4 text-zinc-400" data-lucide="briefcase" strokeWidth="1.5"></i> 4
                        </div>
</div>
</div>
</div>

<div className="flex flex-col gap-5 group cursor-pointer">
<div className="bg-[#18181b] rounded-3xl p-8 aspect-[4/3] flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:bg-[#1f1f22]">
<img alt="Audi A8" className="w-[95%] object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{filter: 'brightness(0.85) contrast(1.1)'}}/>
</div>
<div className="px-1">
<h3 className="text-xl font-medium tracking-tight mb-4 text-zinc-100 group-hover:text-white transition-colors">Audi A8</h3>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2.5 bg-[#18181b] px-3.5 py-2 rounded-lg text-zinc-300 text-lg">
<i className="w-4 h-4 text-zinc-400" data-lucide="users" strokeWidth="1.5"></i> 2
                        </div>
<div className="flex items-center gap-2.5 bg-[#18181b] px-3.5 py-2 rounded-lg text-zinc-300 text-lg">
<i className="w-4 h-4 text-zinc-400" data-lucide="briefcase" strokeWidth="1.5"></i> 2
                        </div>
</div>
</div>
</div>

<div className="hidden lg:flex flex-col gap-5 group cursor-pointer">
<div className="bg-[#18181b] rounded-3xl p-8 aspect-[4/3] flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:bg-[#1f1f22]">
<img alt="Rolls-Royce" className="w-[95%] object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105" src="https://freepngimg.com/thumb/car/4-2-car-png-hd.png" style={{filter: 'brightness(0.85) contrast(1.1)'}}/>
</div>
<div className="px-1">
<h3 className="text-xl font-medium tracking-tight mb-4 text-zinc-100 group-hover:text-white transition-colors">Rolls-Royce</h3>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2.5 bg-[#18181b] px-3.5 py-2 rounded-lg text-zinc-300 text-lg">
<i className="w-4 h-4 text-zinc-400" data-lucide="users" strokeWidth="1.5"></i> 2
                        </div>
<div className="flex items-center gap-2.5 bg-[#18181b] px-3.5 py-2 rounded-lg text-zinc-300 text-lg">
<i className="w-4 h-4 text-zinc-400" data-lucide="briefcase" strokeWidth="1.5"></i> 2
                        </div>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-center gap-3">
<button className="w-12 h-[3px] bg-zinc-400 rounded-full transition-colors"></button>
<button className="w-12 h-[3px] bg-zinc-800 hover:bg-zinc-600 rounded-full transition-colors"></button>
<button className="w-12 h-[3px] bg-zinc-800 hover:bg-zinc-600 rounded-full transition-colors"></button>
</div>

<section className="mt-32">
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
<div>
<h2 className="text-xl text-white font-normal mb-4">Why Choose Us</h2>
<h3 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white max-w-3xl leading-[1.15]">
                        Affordable Service, Luxury Cars &amp; a Good Experience
                    </h3>
</div>

<div className="flex items-center gap-3 pb-2 shrink-0">
<button className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="chevron-left" strokeWidth="1.5"></i>
</button>
<button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black hover:bg-zinc-200 transition-colors shadow-sm">
<i className="w-6 h-6" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-[#18181b] rounded-3xl p-8 flex flex-col gap-8 group hover:bg-[#1f1f22] transition-colors">
<div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-black shrink-0">
<i className="w-6 h-6" data-lucide="search" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-2xl font-medium tracking-tight text-white mb-4 leading-snug">Affordable Rates with No Hidden Fee</h4>
<p className="text-lg text-zinc-400 leading-relaxed">
                            Transparent pricing builds customer confidence and elegant cars tailored to different preferences.
                        </p>
</div>
</div>

<div className="bg-[#18181b] rounded-3xl p-8 flex flex-col gap-8 group hover:bg-[#1f1f22] transition-colors">
<div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-black shrink-0">
<i className="w-6 h-6" data-lucide="search" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-2xl font-medium tracking-tight text-white mb-4 leading-snug">Wide Range of Luxury Vehicles</h4>
<p className="text-lg text-zinc-400 leading-relaxed">
                            Compact, luxury, SUVs, vans – all under one roof. and elegant cars tailored to different preferences.
                        </p>
</div>
</div>

<div className="bg-[#18181b] rounded-3xl p-8 flex flex-col gap-8 group hover:bg-[#1f1f22] transition-colors">
<div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-black shrink-0">
<i className="w-6 h-6" data-lucide="search" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-2xl font-medium tracking-tight text-white mb-4 leading-snug">Convenient Pick-up &amp; Drop-off Area</h4>
<p className="text-lg text-zinc-400 leading-relaxed">
                            Mention airports, hotels, or city hubs. and elegant cars tailored to different preferences.
                        </p>
</div>
</div>

<div className="bg-[#18181b] rounded-3xl p-8 flex flex-col gap-8 group hover:bg-[#1f1f22] transition-colors">
<div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-black shrink-0">
<i className="w-6 h-6" data-lucide="search" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-2xl font-medium tracking-tight text-white mb-4 leading-snug">24/7 Customer Support</h4>
<p className="text-lg text-zinc-400 leading-relaxed">
                            Round-the-clock help builds confidence especially for travelers. and elegant cars tailored to different preferences.
                        </p>
</div>
</div>
</div>
</section>

<section className="mt-32 border-t border-zinc-800/50 pt-24 md:pt-32">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
<div>
<p className="text-sm font-medium tracking-[0.15em] text-zinc-400 uppercase mb-4">Find your masterpiece</p>
<h2 className="text-3xl md:text-4xl lg:text-[40px] font-medium tracking-tight text-white uppercase max-w-2xl leading-[1.15]">
                        Luxury vehicles curated for the true connoisseur
                    </h2>
</div>
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 text-base font-medium text-white hover:bg-zinc-800 transition-colors shrink-0" href="#">
                    View More
                    <i className="w-4 h-4 text-zinc-400" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">

<div className="flex flex-col gap-5 group cursor-pointer">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#18181b]">
<img alt="Tesla Model 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-sm font-medium text-zinc-200 border border-white/10">310 KM/H</span>
<span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-sm font-medium text-zinc-200 border border-white/10">3.3 SEC</span>
</div>
</div>
<div className="flex flex-row items-center justify-between gap-4 px-1">
<h3 className="text-xl font-medium tracking-tight text-white uppercase">Tesla Model 3</h3>
<div className="flex items-center gap-2 text-base font-medium text-zinc-400 group-hover:text-white transition-colors uppercase">
                            Learn More <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="flex flex-col gap-5 group cursor-pointer">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#18181b]">
<img alt="Ferrari 256 GTB" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-sm font-medium text-zinc-200 border border-white/10">450 KM/H</span>
<span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-sm font-medium text-zinc-200 border border-white/10">3.3 SEC</span>
<span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-sm font-medium text-zinc-200 border border-white/10">770HP</span>
</div>
</div>
<div className="flex flex-row items-center justify-between gap-4 px-1">
<h3 className="text-xl font-medium tracking-tight text-white uppercase">Ferrari 256 GTB</h3>
<div className="flex items-center gap-2 text-base font-medium text-zinc-400 group-hover:text-white transition-colors uppercase">
                            Learn More <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="flex flex-col gap-5 group cursor-pointer">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#18181b]">
<img alt="Mercedes-Benz E200" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-sm font-medium text-zinc-200 border border-white/10">250 KM/H</span>
<span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-sm font-medium text-zinc-200 border border-white/10">3.1 SEC</span>
<span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-sm font-medium text-zinc-200 border border-white/10">470HP</span>
</div>
</div>
<div className="flex flex-row items-center justify-between gap-4 px-1">
<h3 className="text-xl font-medium tracking-tight text-white uppercase">Mercedes-Benz E200</h3>
<div className="flex items-center gap-2 text-base font-medium text-zinc-400 group-hover:text-white transition-colors uppercase">
                            Learn More <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="flex flex-col gap-5 group cursor-pointer">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#18181b]">
<img alt="Rolls Royce Spectre" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-sm font-medium text-zinc-200 border border-white/10">399 KM/H</span>
<span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-sm font-medium text-zinc-200 border border-white/10">3.0 SEC</span>
<span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-sm font-medium text-zinc-200 border border-white/10">430HP</span>
</div>
</div>
<div className="flex flex-row items-center justify-between gap-4 px-1">
<h3 className="text-xl font-medium tracking-tight text-white uppercase">Rolls Royce Spectre</h3>
<div className="flex items-center gap-2 text-base font-medium text-zinc-400 group-hover:text-white transition-colors uppercase">
                            Learn More <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="flex flex-col gap-5 group cursor-pointer">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#18181b]">
<img alt="The Porsche Cayenne" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1503376712341-ea42001bb1c6?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-sm font-medium text-zinc-200 border border-white/10">650 KM/H</span>
<span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-sm font-medium text-zinc-200 border border-white/10">3.3 SEC</span>
<span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-sm font-medium text-zinc-200 border border-white/10">670HP</span>
</div>
</div>
<div className="flex flex-row items-center justify-between gap-4 px-1">
<h3 className="text-xl font-medium tracking-tight text-white uppercase">The Porsche Cayenne</h3>
<div className="flex items-center gap-2 text-base font-medium text-zinc-400 group-hover:text-white transition-colors uppercase">
                            Learn More <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="flex flex-col gap-5 group cursor-pointer">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#18181b]">
<img alt="GMC Hummer EV" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-sm font-medium text-zinc-200 border border-white/10">490 KM/H</span>
<span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-sm font-medium text-zinc-200 border border-white/10">3.8 SEC</span>
<span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-sm font-medium text-zinc-200 border border-white/10">690HP</span>
</div>
</div>
<div className="flex flex-row items-center justify-between gap-4 px-1">
<h3 className="text-xl font-medium tracking-tight text-white uppercase">GMC Hummer EV</h3>
<div className="flex items-center gap-2 text-base font-medium text-zinc-400 group-hover:text-white transition-colors uppercase">
                            Learn More <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</section>
</div>


    </>
  );
}
