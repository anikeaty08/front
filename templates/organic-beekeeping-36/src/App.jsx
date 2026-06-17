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


 
    function toggleService(index) { 
        for (let i = 1; i <= 3; i++) { 
            const isSelected = i === index; 
            const desktopImg = document.getElementById(`service-desktop-img-${i}`); 
            if (desktopImg) desktopImg.style.opacity = isSelected ? '1' : '0'; 
            
            const content = document.getElementById(`service-content-${i}`); 
            if (content) content.className = isSelected ? 'grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out' : 'grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out'; 
            
            const inner = document.getElementById(`service-inner-${i}`); 
            if (inner) inner.className = isSelected ? 'pt-2 pb-4 opacity-100 transition-opacity duration-500 delay-100' : 'pt-0 pb-0 opacity-0 transition-opacity duration-500 delay-100'; 
            
            const title = document.getElementById(`service-title-${i}`); 
            if (title) title.className = isSelected ? 'text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 transition-colors mb-4' : 'text-2xl md:text-3xl font-medium tracking-tight text-neutral-500 transition-colors mb-4'; 
            
            const num = document.getElementById(`service-num-${i}`); 
            if (num) num.className = isSelected ? 'text-xl font-mono text-neutral-900 transition-colors pt-2' : 'text-xl font-mono text-neutral-400 transition-colors pt-2'; 
            
            const icon = document.getElementById(`service-icon-${i}`); 
            if (icon) { 
                icon.className = isSelected ? 'w-10 h-10 rounded-full border border-neutral-900 bg-neutral-900 text-white flex items-center justify-center transition-all ml-4 shrink-0' : 'w-10 h-10 rounded-full border border-neutral-200 bg-transparent text-neutral-400 flex items-center justify-center transition-all ml-4 shrink-0'; 
                const iconify = icon.querySelector('iconify-icon'); 
                if (iconify) { 
                    iconify.classList.remove('rotate-90');
                    if(isSelected) iconify.classList.add('rotate-90');
                } 
            } 
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
      

<nav className="fixed top-0 w-full z-50 glass-nav border-b border-neutral-200/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-lg font-medium tracking-widest uppercase flex items-center gap-2" href="#">
            Ali di miele.
        </a>
<div className="hidden md:flex gap-8 text-sm font-normal text-neutral-500">
<a className="transition-colors hover:text-neutral-900" href="#philosophy">Philosophy</a>
<a className="transition-colors hover:text-neutral-900" href="#offerings">Craft &amp; Hive</a>
<a className="transition-colors hover:text-neutral-900" href="#workshops">Workshops</a>
</div>
<a className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-colors group bg-neutral-900 text-neutral-50 hover:bg-neutral-800" href="#shop"> 
            Visit Apothecary 
            <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<button className="md:hidden p-2 text-neutral-600">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-24 pb-12 lg:pt-32 lg:pb-12 overflow-hidden bg-white">
<div className="max-w-[1440px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">

<div className="lg:col-span-7 flex flex-col gap-10 lg:gap-14">

<div className="space-y-2 lg:space-y-4">
<h1 className="font-oswald text-6xl md:text-7xl lg:text-[7rem] font-medium leading-[0.9] tracking-tighter uppercase text-neutral-900"> 
                        Liquid 
                    </h1>
<div className="flex items-center gap-4 lg:gap-6 flex-wrap">
<div className="h-14 md:h-20 w-32 md:w-56 rounded-full overflow-hidden relative shrink-0 border shadow-sm border-neutral-100 group bg-neutral-100">
<img alt="Bee Macro" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1478491527271-f3c9d1511752?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h1 className="md:text-7xl lg:text-[7rem] leading-[0.9] uppercase text-6xl font-medium text-neutral-900 tracking-tighter font-oswald"> 
                            — Gold 
                        </h1>
</div>
</div>

<div className="flex flex-col md:flex-row items-start md:items-center gap-8 lg:gap-12 mt-2">
<p className="text-neutral-500 text-base md:text-lg max-w-sm font-light leading-relaxed"> 
                        A dedication to the art of beekeeping. Sustainable apiaries, raw unfiltered honey, and craftsmanship in every handmade package.
                    </p>
<a className="inline-flex items-center justify-center h-14 px-10 rounded-full text-sm font-medium tracking-wider uppercase transition-all shrink-0 shadow-lg bg-neutral-900 text-white hover:bg-neutral-800 shadow-neutral-900/20" href="#shop"> 
                        Taste Nature 
                    </a>
</div>

<div className="flex flex-wrap gap-x-12 gap-y-6 pt-4">
<div className="flex items-center gap-3">
<span className="font-oswald text-4xl md:text-5xl tracking-tight text-neutral-800">50+</span>
<span className="text-xs text-neutral-500 leading-tight max-w-[80px] font-medium">Active Hives</span>
</div>
<div className="flex items-center gap-3">
<span className="font-oswald text-4xl md:text-5xl tracking-tight text-neutral-800">100%</span>
<span className="text-xs text-neutral-500 leading-tight max-w-[80px] font-medium">Raw &amp; Organic</span>
</div>
<div className="flex items-center gap-3">
<span className="font-oswald text-4xl md:text-5xl tracking-tight text-neutral-800">0%</span>
<span className="text-xs text-neutral-500 leading-tight max-w-[80px] font-medium">Plastic Usage</span>
</div>
</div>

<div className="hidden md:block relative h-64 w-full rounded-[2rem] overflow-hidden mt-auto group shadow-sm border border-neutral-100 bg-neutral-100">
<img alt="Beekeeper Inspecting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1555447405-bd6145d279cf?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute right-6 bottom-6 flex flex-col gap-2 z-10">
<button className="w-10 h-10 rounded-full backdrop-blur border flex items-center justify-center transition-colors shadow-sm bg-white/90 border-white/20 hover:bg-white text-neutral-900">
<iconify-icon icon="solar:arrow-down-linear" width="16"></iconify-icon>
</button>
</div>
<div className="absolute inset-0 bg-gradient-to-t to-transparent pointer-events-none from-neutral-900/10"></div>
</div>
</div>

<div className="lg:col-span-5 relative h-[600px] lg:h-auto min-h-[600px] rounded-[2rem] overflow-hidden shadow-xl group bg-neutral-200">
<img alt="Bees on Honeycomb" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1592398188185-3b952c9d1209?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-6 right-6 flex gap-3 z-20">
<a className="w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-md bg-white hover:bg-neutral-100 text-amber-600" href="#">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</a>
</div>

<div className="absolute top-6 left-6 max-w-[220px] rounded-2xl p-3 shadow-xl z-20 bg-white/95 backdrop-blur-sm">
<div className="h-24 rounded-xl overflow-hidden mb-3 relative bg-neutral-100">
<img alt="Bee on Flower" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1587049352847-81a74e112378?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-[10px] font-medium mb-3 leading-snug text-neutral-600"> 
                        Currently blooming: Acacia and Chestnut. The bees are foraging in the upper valley.
                    </p>
<button className="w-8 h-8 rounded-full flex items-center justify-center ml-auto transition-colors bg-neutral-900 text-white hover:bg-neutral-800">
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</button>
</div>

<div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t to-transparent flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 z-20 from-black/60 via-black/20">
<p className="text-sm max-w-xs font-light leading-relaxed drop-shadow-sm text-white/95"> 
                        Every jar tells the story of a specific bloom, harvested by hand and packaged with love.
                    </p>
<button className="px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 shadow-lg bg-white text-neutral-900 hover:bg-neutral-100"> 
                        Our Story 
                    </button>
</div>
</div>
</div>
</div>
</header>

<div className="w-full h-96 md:h-[600px] relative overflow-hidden bg-neutral-200">
<img alt="Beekeeper in Apiary" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1523495092120-d3372c3666b6?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-neutral-900/5"></div>
</div>

<section className="py-24 px-6 bg-white" id="philosophy">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:flex justify-between items-end">
<div className="">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">The Beekeeper's Oath</h2>
<p className="text-neutral-500 max-w-md">We don't just take from nature; we nurture it back to life.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border rounded-2xl overflow-hidden shadow-sm bg-neutral-200 border-neutral-200">

<div className="p-8 group transition-colors bg-white hover:bg-neutral-50">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-neutral-100 text-neutral-900">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Biodynamic Methods</h3>
<p className="text-sm text-neutral-500 leading-relaxed"> 
                    We follow the rhythms of nature, avoiding chemicals and respecting the bee's natural cycle.
                </p>
</div>

<div className="p-8 group transition-colors bg-white hover:bg-neutral-50">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-neutral-100 text-neutral-900">
<iconify-icon icon="solar:crown-star-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Small Batch</h3>
<p className="text-sm text-neutral-500 leading-relaxed"> 
                    Honey is never blended. Each harvest represents a specific time and place, preserved in its purest form.
                </p>
</div>

<div className="p-8 group transition-colors bg-white hover:bg-neutral-50">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-neutral-100 text-neutral-900">
<iconify-icon icon="solar:heart-angle-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Bee Welfare First</h3>
<p className="text-sm text-neutral-500 leading-relaxed"> 
                    We leave enough honey in the hive for the bees to survive winter comfortably. No sugar water feeding.
                </p>
</div>

<div className="p-8 group transition-colors bg-white hover:bg-neutral-50">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-neutral-100 text-neutral-900">
<iconify-icon icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Artisan Packaging</h3>
<p className="text-sm text-neutral-500 leading-relaxed"> 
                    Hand-labeled jars, wax seals, and recycled paper. A gift for you and a gift for the planet.
                </p>
</div>

<div className="p-8 group transition-colors bg-white hover:bg-neutral-50">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-neutral-100 text-neutral-900">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Local Flora</h3>
<p className="text-sm text-neutral-500 leading-relaxed"> 
                    Our hives are placed in pristine locations, away from industrial farming and pollution.
                </p>
</div>

<div className="p-8 group transition-colors bg-white hover:bg-neutral-50">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-neutral-100 text-neutral-900">
<iconify-icon icon="solar:verified-check-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Lab Tested</h3>
<p className="text-sm text-neutral-500 leading-relaxed"> 
                    Verified for purity and pollen count to ensure you receive the highest medicinal grade honey.
                </p>
</div>
</div>
</div>
</section>

<section className="border-t pt-24 pr-6 pb-24 pl-6 bg-white border-neutral-200" id="offerings">
<div className="max-w-7xl mx-auto">
<span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase block mb-20">From Hive to Home</span>
<div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative gap-x-12 gap-y-12 items-start">

<div className="w-full lg:w-5/12 lg:sticky lg:top-32 h-[300px] lg:h-[500px] rounded-2xl overflow-hidden shadow-sm order-2 lg:order-1 hidden lg:block bg-neutral-100">
<div className="relative w-full h-full">

<img alt="Honey Extraction" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-100 z-10" id="service-desktop-img-1" src="https://images.unsplash.com/photo-1555447405-bd6145d279cf?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>

<img alt="Beeswax Frame" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-0 z-10" id="service-desktop-img-2" src="https://images.unsplash.com/photo-1606915243322-2621983c2763?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>

<img alt="Beekeeping Hands" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-0 z-10" id="service-desktop-img-3" src="https://images.unsplash.com/photo-1528652613697-7c7c34d8a571?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t to-transparent z-20 pointer-events-none from-neutral-900/10"></div>
</div>
</div>

<div className="w-full lg:w-7/12 flex flex-col order-1 lg:order-2">

<div className="border-b py-8 cursor-pointer border-neutral-200" onclick="toggleService(1)">
<div className="flex items-start gap-6 md:gap-12">
<span className="text-xl font-mono transition-colors pt-2 text-neutral-900" id="service-num-1">01</span>
<div className="flex-1 w-full">
<div className="flex justify-between items-start w-full">
<h3 className="text-2xl md:text-3xl font-medium tracking-tight transition-colors mb-4 text-neutral-900" id="service-title-1">Raw Honey Varieties</h3>
<div className="w-10 h-10 rounded-full border flex items-center justify-center transition-all ml-4 shrink-0 border-neutral-900 bg-neutral-900 text-white" id="service-icon-1">
<iconify-icon className="transition-transform duration-300 rotate-90" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
</div>
<div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out" id="service-content-1">
<div className="overflow-hidden">
<div className="pt-2 pb-4 opacity-100 transition-opacity duration-500 delay-100" id="service-inner-1">

<div className="lg:hidden w-full h-64 rounded-xl overflow-hidden mb-6 relative bg-neutral-100">
<img alt="Honey" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1555447405-bd6145d279cf?q=80&amp;w=1600"/>
</div>
<p className="text-neutral-500 leading-relaxed max-w-lg mb-6 text-base"> 
                                            Cold-extracted to preserve enzymes and antioxidants. From the delicate Acacia to the intense Chestnut and complex Mountain Wildflower.
                                        </p>
<ul className="space-y-2">
<li className="flex items-center gap-3 text-sm text-neutral-500">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> Acacia (May Harvest) 
                                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-500">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> Chestnut (July Harvest) 
                                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-500">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> Wild Ivy (September Harvest) 
                                            </li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="cursor-pointer border-b pt-8 pb-8 border-neutral-200" onclick="toggleService(2)">
<div className="flex items-start gap-6 md:gap-12">
<span className="text-xl font-mono transition-colors pt-2 text-neutral-400" id="service-num-2">02</span>
<div className="flex-1 w-full">
<div className="flex justify-between items-start w-full">
<h3 className="md:text-3xl transition-colors text-2xl font-medium text-neutral-500 tracking-tight mb-4" id="service-title-2">Beeswax &amp; Craft</h3>
<div className="w-10 h-10 rounded-full border bg-transparent flex items-center justify-center transition-all ml-4 shrink-0 border-neutral-200 text-neutral-400" id="service-icon-2">
<iconify-icon className="transition-transform duration-300" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
</div>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out" id="service-content-2">
<div className="overflow-hidden">
<div className="pt-0 pb-0 opacity-0 transition-opacity duration-500 delay-100" id="service-inner-2">
<div className="lg:hidden w-full h-64 rounded-xl overflow-hidden mb-6 relative bg-neutral-100">
<img alt="Craft" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1606915243322-2621983c2763?q=80&amp;w=1600"/>
</div>
<p className="text-neutral-500 leading-relaxed max-w-lg mb-6 text-base"> 
                                            Nothing goes to waste. We use the pure beeswax cappings to create aromatic candles, healing balms, and natural polish.
                                        </p>
<ul className="space-y-2">
<li className="flex items-center gap-3 text-sm text-neutral-500">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> Hand-dipped Candles 
                                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-500">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> Propolis Tinctures 
                                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-500">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> Reusable Wax Wraps 
                                            </li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-b py-8 cursor-pointer border-neutral-200" onclick="toggleService(3)">
<div className="flex items-start gap-6 md:gap-12">
<span className="text-xl font-mono transition-colors pt-2 text-neutral-400" id="service-num-3">03</span>
<div className="flex-1 w-full">
<div className="flex justify-between items-start w-full">
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-500 transition-colors mb-4" id="service-title-3">Educational Workshops</h3>
<div className="w-10 h-10 rounded-full border bg-transparent flex items-center justify-center transition-all ml-4 shrink-0 border-neutral-200 text-neutral-400" id="service-icon-3">
<iconify-icon className="transition-transform duration-300" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
</div>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out" id="service-content-3">
<div className="overflow-hidden">
<div className="pt-0 pb-0 opacity-0 transition-opacity duration-500 delay-100" id="service-inner-3">
<div className="lg:hidden w-full h-64 rounded-xl overflow-hidden mb-6 relative bg-neutral-100">
<img alt="Workshop" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1528652613697-7c7c34d8a571?q=80&amp;w=1600"/>
</div>
<p className="text-neutral-500 leading-relaxed max-w-lg mb-6 text-base"> 
                                            Join Ali in the apiary. Wear the suit, hold a frame of bees, and understand the intricate society of the hive.
                                        </p>
<ul className="space-y-2">
<li className="flex items-center gap-3 text-sm text-neutral-500">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> "Beekeeper for a Day" 
                                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-500">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> Candle Making Class 
                                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-500">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> Honey Tasting &amp; Pairings 
                                            </li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</section>

<section className="py-24 px-6 bg-neutral-900 text-white" id="shop">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-2">Seasonal Collections</h2>
<p className="text-neutral-400">Limited edition runs from our latest harvest.</p>
</div>
<a className="text-sm border-b pb-1 transition-colors border-neutral-700 hover:border-white" href="#">View Full Apothecary</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="border-l pl-6 relative border-neutral-800">
<span className="font-mono text-xs mb-4 block text-neutral-500">SPRING 2024</span>
<h3 className="text-2xl font-medium mb-1 text-white">Wildflower <span className="text-base text-neutral-400">Jar</span></h3>
<p className="text-sm font-medium mb-3 text-amber-500">€14.00</p>
<p className="text-sm leading-relaxed text-neutral-400 mb-6">Polifloral honey with notes of dandelion and cherry blossom.</p>
<button className="text-xs px-4 py-2 rounded border border-neutral-700 hover:bg-neutral-800 transition-colors">Add to Basket</button>
</div>

<div className="border-l pl-6 relative border-neutral-800 bg-neutral-800/30 rounded-r-lg">
<span className="font-mono text-xs mb-4 block text-amber-500">BESTSELLER</span>
<h3 className="text-2xl font-medium mb-1 text-white">Royal Gift <span className="text-base text-neutral-400">Box</span></h3>
<p className="text-sm font-medium mb-3 text-amber-500">€45.00</p>
<p className="text-sm leading-relaxed text-neutral-400 mb-6">Trio of honeys, beeswax candle, and a wooden dipper.</p>
<button className="text-xs px-4 py-2 rounded bg-white text-neutral-900 hover:bg-neutral-200 transition-colors">Add to Basket</button>
</div>

<div className="border-l pl-6 relative border-neutral-800">
<span className="font-mono text-xs mb-4 block text-neutral-500">LIMITED</span>
<h3 className="text-2xl font-medium mb-1 text-white">Hive <span className="text-base text-neutral-400">Adoption</span></h3>
<p className="text-sm font-medium mb-3 text-amber-500">€120.00 / yr</p>
<p className="text-sm leading-relaxed text-neutral-400 mb-6">Support a colony. Receive 3kg of honey and updates.</p>
<button className="text-xs px-4 py-2 rounded border border-neutral-700 hover:bg-neutral-800 transition-colors">Adopt Now</button>
</div>

<div className="border-l pl-6 relative border-neutral-800">
<span className="font-mono text-xs mb-4 block text-neutral-500">THE PROCESS</span>
<h3 className="text-lg font-medium mb-3 text-white">From Us to You</h3>
<p className="text-sm leading-relaxed text-neutral-400"> 
                    1. Harvested by hand 
                    2. Unfiltered &amp; Unpasteurized 
                    3. Glass jars only 
                    4. Shipped plastic-free 
                </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b bg-white border-neutral-200" id="workshops">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2">
<div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative bg-neutral-100">
<img alt="Ali with bees" className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1620054737298-654c602a647e?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 backdrop-blur px-4 py-2 rounded-md border bg-white/90 border-white/20">
<p className="text-xs font-medium text-neutral-900">Ali in the Apiary, 2024</p>
</div>
</div>
</div>
<div className="lg:w-1/2">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-6 text-neutral-900"> 
                A life dedicated to <span className="text-neutral-400">the Queen.</span>
</h2>
<div className="space-y-6 text-sm md:text-base leading-relaxed max-w-lg text-neutral-600">
<p> 
                    "Ali di miele" began as a small passion project in the hills of Tuscany. Fascinated by the intelligence of the hive, Ali dedicated herself to preserving the art of traditional apiculture.
                </p>
<p> 
                    Today, we are more than a honey brand. We are custodians of the land, ensuring that every jar we sell supports the biodiversity of our region. When you buy from us, you protect the pollinators.
                </p>
</div>
<div className="mt-10 flex gap-4">
<div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-900">
<iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon> Female Owned 
                </div>
<div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-900">
<iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon> Sustainable 
                </div>
<div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-900">
<iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon> Handmade 
                </div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 text-center bg-neutral-50" id="contact">
<div className="max-w-3xl mx-auto">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6 text-neutral-900">Taste the sweetness of nature.</h2>
<p className="text-neutral-500 text-lg mb-10 max-w-lg mx-auto">Join our hive. Subscribe to get notified about fresh harvests, workshop dates, and seasonal recipes.</p>
<form className="max-w-md mx-auto space-y-4 text-left">
<div>
<label className="sr-only" htmlFor="email">Email</label>
<input className="w-full border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all placeholder:text-neutral-400 bg-white border-neutral-300" id="email" placeholder="Your email address" type="email"/>
</div>
<button className="w-full font-medium rounded-md px-4 py-3 text-sm transition-colors flex justify-center items-center gap-2 bg-neutral-900 text-white hover:bg-neutral-800" type="button"> 
                Join the Newsletter 
            </button>
<p className="text-xs text-center mt-4 text-neutral-400">No spam, just sweetness. Unsubscribe anytime.</p>
</form>
</div>
</section>

<footer className="border-t pt-16 pb-8 px-6 bg-white border-neutral-200">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="text-lg font-medium tracking-widest uppercase block mb-6" href="#">Ali di miele.</a>
<p className="text-neutral-500 text-sm max-w-xs leading-relaxed"> 
                    Crafting pure honey and beeswax products with respect for nature and tradition. Est. 2018.
                </p>
</div>
<div>
<h4 className="font-medium text-sm mb-4 text-neutral-900">Shop</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="transition-colors hover:text-neutral-900" href="#">Raw Honey</a></li>
<li><a className="transition-colors hover:text-neutral-900" href="#">Beeswax Candles</a></li>
<li><a className="transition-colors hover:text-neutral-900" href="#">Adopt a Hive</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm mb-4 text-neutral-900">Visit Us</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li className="flex items-center gap-2">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon> Tuscany, Italy 
                    </li>
<li className="flex items-center gap-2">
<iconify-icon icon="solar:letter-linear" width="14"></iconify-icon> ciao@alidimiele.it 
                    </li>
<li className="flex items-center gap-2">
<iconify-icon icon="solar:phone-linear" width="14"></iconify-icon> +39 055 123456 
                    </li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-neutral-100">
<p className="text-xs text-neutral-400">© 2024 Ali di miele. Made with love &amp; honey.</p>
<div className="flex gap-4">
<a className="transition-colors text-neutral-400 hover:text-neutral-900" href="#">
<iconify-icon icon="brandico:instagram" width="18"></iconify-icon>
</a>
<a className="transition-colors text-neutral-400 hover:text-neutral-900" href="#">
<iconify-icon icon="brandico:facebook" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
