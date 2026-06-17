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
      

<section className="p-4 md:p-6 lg:p-8">
<div className="relative min-h-[90vh] rounded-[3rem] overflow-hidden flex flex-col justify-between">

<img alt="Dark Green Leaves" className="absolute inset-0 w-full h-full object-cover z-0 brightness-75" src="https://images.unsplash.com/photo-1597848212624-a19eb35e2651?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-0"></div>

<nav className="relative z-10 w-full px-6 py-8 md:px-12 flex justify-between items-center">
<div className="flex items-center gap-2 text-white">
<div className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
<i className="w-5 h-5" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
</div>
<div className="hidden md:flex items-center gap-3">
<a className="px-6 py-2.5 text-base text-[#0f251a] bg-white rounded-full font-medium transition-colors" href="#">Home</a>
<a className="px-6 py-2.5 text-base text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm" href="#">Contact</a>
<a className="px-6 py-2.5 text-base text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm" href="#">Blog</a>
</div>
<div className="flex items-center gap-3">
<button className="w-11 h-11 flex items-center justify-center text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm">
<i className="w-5 h-5" data-lucide="search" strokeWidth="1.5"></i>
</button>
<a className="hidden md:block px-6 py-2.5 text-base text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm" href="#">Shop</a>
<a className="hidden md:block px-6 py-2.5 text-base text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm" href="#">Log in</a>
</div>
</nav>

<div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 w-full pt-12 pb-24">
<p className="text-xl md:text-2xl text-white mb-2 font-medium tracking-tight">Petal power</p>

<h1 className="text-[20vw] md:text-[16vw] font-bold text-white leading-[0.75] tracking-tighter mb-8">
                    growth
                </h1>
<p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto leading-relaxed">
                    We're your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours!
                </p>
</div>

<div className="relative z-10 px-6 md:px-12 pb-8 flex flex-col md:flex-row justify-between items-end gap-6">

<div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-3xl p-5 flex gap-5 items-center w-full md:w-auto max-w-sm">
<div>
<h3 className="text-white text-2xl font-semibold tracking-tight mb-2">100+Plants</h3>
<p className="text-white/70 text-base leading-snug">We want our visitors to be inspired to get their hands dirty</p>
</div>
<img alt="Small Plant" className="w-16 h-24 rounded-2xl object-cover flex-shrink-0" src="https://images.unsplash.com/photo-1614594975525-e45190c55d40?w=150&amp;auto=format&amp;fit=crop"/>
</div>

<div className="flex items-center gap-4 w-full md:w-auto justify-end">
<button className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center text-white backdrop-blur-sm hover:bg-white/10 transition-colors">
<i className="w-6 h-6" data-lucide="arrow-down" strokeWidth="1.5"></i>
</button>
<button className="bg-white text-[#0f251a] px-8 py-4 rounded-full font-medium text-lg hover:bg-neutral-100 transition-colors whitespace-nowrap">
                        Shop tropical plants
                    </button>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-6 md:px-12 max-w-[100rem] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
<div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Plants for the People</h2>
<p className="text-lg text-neutral-600 max-w-md leading-relaxed">We want our visitors to be inspired to get their hands dirty</p>
</div>
<div className="flex items-center gap-4">
<div className="relative w-24 h-16 rounded-full overflow-hidden flex-shrink-0">
<img className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1459156212016-c812468e2115?w=200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 flex items-center justify-center">
<i className="w-5 h-5 text-white ml-0.5" data-lucide="play" strokeWidth="1.5"></i>
</div>
</div>
<p className="text-2xl md:text-3xl font-medium tracking-tight leading-snug">
                    Each plant is cared <img className="inline-block w-16 h-10 rounded-full object-cover align-middle mx-1 border-2 border-[#e6ebe5]" src="https://images.unsplash.com/photo-1599598425947-330026214d0f?w=100&amp;auto=format&amp;fit=crop"/> for by our horticultural experts, so they are as happy as healthy as they get.
                </p>
</div>
</div>
</section>

<section className="px-6 md:px-12 max-w-[100rem] mx-auto mb-10">
<div className="flex items-center justify-between border-b border-neutral-300/50 pb-6">
<div className="flex gap-3 overflow-x-auto hide-scrollbar w-full">
<button className="px-6 py-3 rounded-full bg-[#0f251a] text-white text-base font-medium whitespace-nowrap">Outdoor Plant</button>
<button className="px-6 py-3 rounded-full border border-neutral-300 text-neutral-600 hover:border-neutral-400 text-base font-medium whitespace-nowrap transition-colors">Indoor Plant</button>
<button className="px-6 py-3 rounded-full border border-neutral-300 text-neutral-600 hover:border-neutral-400 text-base font-medium whitespace-nowrap transition-colors">Flower Pot</button>
<button className="px-6 py-3 rounded-full border border-neutral-300 text-neutral-600 hover:border-neutral-400 text-base font-medium whitespace-nowrap transition-colors">Potted Plant</button>
</div>
<button className="hidden md:block px-6 py-3 rounded-full border border-neutral-300 text-neutral-900 font-medium text-base whitespace-nowrap ml-4">See All</button>
</div>
</section>

<section className="px-6 md:px-12 max-w-[100rem] mx-auto mb-24">
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 h-auto md:h-[400px]">

<div className="md:col-span-2 relative rounded-[2.5rem] overflow-hidden group min-h-[300px] md:min-h-0">
<img alt="Pet Friendly Plants" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/30 to-transparent"></div>
<div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#0f251a] cursor-pointer hover:bg-neutral-100 transition-colors">
<i className="w-5 h-5 -rotate-45" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="text-white text-4xl font-semibold tracking-tight mb-4">Pet Friendly Plants</h3>
<p className="text-white/80 text-lg leading-relaxed max-w-sm mb-6">There are many houseplants options for your home that are nontoxic. These plants will add life to your home while keeping your kids and pets safe.</p>
<div className="flex items-center gap-2 text-white/60 text-sm font-medium uppercase tracking-widest">
<i className="w-4 h-4" data-lucide="leaf" strokeWidth="1.5"></i>
                        Piperaceae
                    </div>
</div>
</div>

<div className="relative rounded-[2.5rem] overflow-hidden group min-h-[300px] md:min-h-0">
<img alt="Orchids" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="text-white text-3xl font-semibold tracking-tight mb-3">Orchids</h3>
<p className="text-white/80 text-base leading-relaxed mb-6 line-clamp-3">Orchids are easily everyone's favorite flowering plant. Find new orchids, and orchid success items in this collection.</p>
<div className="flex items-center gap-2 text-white/60 text-sm font-medium uppercase tracking-widest">
<i className="w-4 h-4" data-lucide="flower-2" strokeWidth="1.5"></i>
                        Araceae
                    </div>
</div>
</div>

<div className="relative rounded-[2.5rem] overflow-hidden group min-h-[300px] md:min-h-0">
<img alt="Succulents" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1446071103084-c257b5f70672?w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="text-white text-3xl font-semibold tracking-tight mb-3">Succulents</h3>
<p className="text-white/80 text-base leading-relaxed mb-6 line-clamp-3">All succulents are cacti, but not all cacti are succulents. Both make low maintenance houseplants.</p>
<div className="flex items-center gap-2 text-white/60 text-sm font-medium uppercase tracking-widest">
<i className="w-4 h-4" data-lucide="sun" strokeWidth="1.5"></i>
                        Moraceae
                    </div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-6 md:px-12 max-w-[100rem] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
<h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none">New Plants</h2>
<p className="text-lg text-neutral-700 max-w-md leading-relaxed font-medium">Bring nature inside and shop our big selections of fresh indoor plants, including Instagram-worthy houseplants, pet-friendly plants, orchids and one-of-a-kind rare plants.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

<div className="bg-[#f0f4ef] p-4 rounded-[2.5rem] flex flex-col group cursor-pointer border border-transparent hover:border-neutral-200 transition-colors">
<div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1604762524889-3e207127117e?w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-4 left-4 w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white backdrop-blur-sm hover:bg-white/20 transition-colors z-10">
<i className="w-4 h-4" data-lucide="heart" strokeWidth="1.5"></i>
</button>
</div>
<h4 className="text-2xl font-semibold tracking-tight mb-1">Peperomia Plants</h4>
<p className="text-neutral-500 text-base mb-4">Moist but well-drained</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-xl font-semibold">$122,056</span>
<button className="w-12 h-12 bg-[#0f251a] rounded-full flex items-center justify-center text-white hover:bg-[#1a3a2f] transition-colors">
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="bg-[#f0f4ef] p-4 rounded-[2.5rem] flex flex-col group cursor-pointer border border-transparent hover:border-neutral-200 transition-colors">
<div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1615555465225-b44e73f915f0?w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-4 left-4 w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white backdrop-blur-sm hover:bg-white/20 transition-colors z-10">
<i className="w-4 h-4" data-lucide="heart" strokeWidth="1.5"></i>
</button>
</div>
<h4 className="text-2xl font-semibold tracking-tight mb-1">Fiddle-Leaf Fig</h4>
<p className="text-neutral-500 text-base mb-4">Medium moisture, well-draining</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-xl font-semibold">$160,265</span>
<button className="w-12 h-12 bg-[#0f251a] rounded-full flex items-center justify-center text-white hover:bg-[#1a3a2f] transition-colors">
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="bg-[#f0f4ef] p-4 rounded-[2.5rem] flex flex-col group cursor-pointer border border-transparent hover:border-neutral-200 transition-colors">
<div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1616689626249-166782ff19bb?w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-4 left-4 w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white backdrop-blur-sm hover:bg-white/20 transition-colors z-10">
<i className="w-4 h-4 text-white fill-white" data-lucide="heart" strokeWidth="1.5"></i>
</button>
</div>
<h4 className="text-2xl font-semibold tracking-tight mb-1">Calathea Orbifolia</h4>
<p className="text-neutral-500 text-base mb-4">Moist but well-drained</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-xl font-semibold">$152,056</span>
<button className="w-12 h-12 bg-[#0f251a] rounded-full flex items-center justify-center text-white hover:bg-[#1a3a2f] transition-colors">
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<div className="flex justify-center items-center gap-2">
<div className="w-6 h-2 rounded-full bg-[#0f251a]"></div>
<div className="w-2 h-2 rounded-full bg-neutral-300"></div>
<div className="w-2 h-2 rounded-full bg-neutral-300"></div>
</div>
</section>

<section className="py-16 md:py-24 px-6 md:px-12 max-w-[100rem] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12 border-t border-neutral-300/50 pt-16">
<p className="text-lg text-neutral-700 max-w-sm leading-relaxed font-medium">Check out our video content including informative webinars where you can learn more about your indoor plants.</p>
<h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none text-right">Indoor Collection</h2>
</div>
<div className="flex flex-col gap-4">

<div className="flex flex-col md:flex-row gap-4 h-[400px]">

<div className="relative rounded-[2.5rem] overflow-hidden group w-full md:w-[60%] h-full">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1599598425947-330026214d0f?w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white backdrop-blur-sm cursor-pointer hover:bg-white/10 transition-colors">
<i className="w-5 h-5 -rotate-45" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
<div className="absolute bottom-8 left-8 right-8">
<h3 className="text-white text-5xl font-bold tracking-tight mb-4">Philodendron</h3>
<p className="text-white/80 text-lg leading-snug max-w-md">Philodendron comes in a variety of leaf shapes and colors, making it a great plant to compliment your home decor while also being low maintenance.</p>
</div>
</div>

<div className="relative rounded-[2.5rem] overflow-hidden group w-full md:w-[40%] h-full">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1620127144893-4e4b51a54728?w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white backdrop-blur-sm cursor-pointer hover:bg-white/10 transition-colors">
<i className="w-5 h-5 -rotate-45" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
<div className="absolute bottom-8 left-8 right-8">
<h3 className="text-white text-4xl font-bold tracking-tight">Calathea</h3>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row gap-4 h-[300px]">

<div className="relative rounded-[2.5rem] overflow-hidden group w-full md:w-[50%] h-full">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
<div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white backdrop-blur-sm cursor-pointer hover:bg-white/10 transition-colors">
<i className="w-5 h-5 -rotate-45" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
<div className="absolute bottom-8 left-8 right-8">
<h3 className="text-white text-4xl font-bold tracking-tight">Air Purifying</h3>
</div>
</div>

<div className="relative rounded-[2.5rem] overflow-hidden group w-full md:w-[50%] h-full">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1542316410-63ceba5b4c19?w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
<div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white backdrop-blur-sm cursor-pointer hover:bg-white/10 transition-colors">
<i className="w-5 h-5 -rotate-45" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
<div className="absolute bottom-8 left-8 right-8">
<h3 className="text-white text-4xl font-bold tracking-tight">Low Light Tolerant</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-6 md:px-12 max-w-[100rem] mx-auto text-center">
<h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8">
            Quality Plants &amp; Curated<br/>Goods
        </h2>
<p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed font-medium mb-16">
            We offer a carefully curated selection of indoor and outdoor plants, hand crafted home goods that put quality ahead of quantity, and living art made right here in the shop: terrariums, landscapes, arrangements, vessels, and holders.
        </p>
<div className="relative max-w-4xl mx-auto rounded-[3rem] overflow-hidden aspect-[16/9] cursor-pointer group shadow-xl">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1463320726281-696a485928c7?w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transition-transform group-hover:scale-110">
<i className="w-8 h-8 ml-1" data-lucide="play" strokeWidth="1.5"></i>
</div>
</div>
</div>
</section>

<section className="py-16 px-6 md:px-12 max-w-4xl mx-auto">
<div className="space-y-4">

<div className="bg-white rounded-[2rem] p-6 md:p-8 cursor-pointer hover:shadow-sm transition-shadow">
<div className="flex justify-between items-center">
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Ordering for Delivery?</h3>
<div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-[#0f251a]">
<i className="w-5 h-5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="bg-white rounded-[2rem] p-6 md:p-8 cursor-pointer shadow-sm">
<div className="flex justify-between items-center mb-6">
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Potting Services</h3>
<div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-[#0f251a]">
<i className="w-5 h-5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
<p className="text-lg text-neutral-600 leading-relaxed pr-8">
                    We offer potting on in store purchases or you are welcome to bring in your own and we can pot them for you. There is a fee depending one what supplies are used. Visit us or call us for more details.
                </p>
</div>

<div className="bg-white rounded-[2rem] p-6 md:p-8 cursor-pointer hover:shadow-sm transition-shadow">
<div className="flex justify-between items-center">
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Do we ship plants?</h3>
<div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-[#0f251a]">
<i className="w-5 h-5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="bg-white rounded-[2rem] p-6 md:p-8 cursor-pointer hover:shadow-sm transition-shadow">
<div className="flex justify-between items-center">
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Ordering for Pick up?</h3>
<div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-[#0f251a]">
<i className="w-5 h-5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</section>

<footer className="mt-24 p-4 md:p-6 lg:p-8 pb-0">
<div className="relative rounded-t-[3rem] overflow-hidden bg-[#0f251a] text-center pt-24 pb-12 px-6">
<img alt="Leaves background" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay" src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
<div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center text-white mb-10 backdrop-blur-sm">
<i className="w-8 h-8" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
<h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">Join the community!</h2>
<p className="text-lg text-white/70 mb-16 max-w-md mx-auto">
                    Subscribe to The Forager to receive monthly plant tips, store updates, promotions &amp; more
                </p>

<div className="flex flex-wrap justify-center gap-4 mb-24">
<a className="px-8 py-4 rounded-full bg-white text-[#0f251a] font-medium text-lg hover:bg-neutral-100 transition-colors" href="#">Instagram</a>
<a className="px-8 py-4 rounded-full border border-white/30 text-white font-medium text-lg hover:bg-white/10 transition-colors backdrop-blur-sm" href="#">Twitter</a>
<a className="px-8 py-4 rounded-full border border-white/30 text-white font-medium text-lg hover:bg-white/10 transition-colors backdrop-blur-sm" href="#">LinkedIn</a>
<a className="px-8 py-4 rounded-full border border-white/30 text-white font-medium text-lg hover:bg-white/10 transition-colors backdrop-blur-sm bg-black/20" href="#">Telegram</a>
<a className="px-8 py-4 rounded-full border border-white/30 text-white font-medium text-lg hover:bg-white/10 transition-colors backdrop-blur-sm" href="#">Pinterest</a>
</div>
<p className="text-white/50 text-base pb-4">@2023,All Right Reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
