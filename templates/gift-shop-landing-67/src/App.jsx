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
      

<nav className="absolute top-0 z-50 w-full bg-transparent">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex h-24 items-center justify-between">
<div className="flex items-center gap-12">
<a className="font-['Martina_Plantin','Playfair_Display',serif] text-3xl font-medium tracking-tight text-[#1f2b37]" href="#">Angel's Garden</a>
<div className="hidden lg:flex lg:gap-8">
<a className="text-base font-medium text-[#1f2b37] hover:text-[#52667a] transition-colors" href="#">Artisans</a>
<a className="flex items-center gap-1 text-base font-medium text-[#1f2b37] hover:text-[#52667a] transition-colors" href="#">
                            Gifts <iconify-icon className="opacity-50" height="16" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="text-base font-medium text-[#1f2b37] hover:text-[#52667a] transition-colors" href="#">Our Story</a>
<a className="text-base font-medium text-[#1f2b37] hover:text-[#52667a] transition-colors" href="#">Events</a>
<a className="flex items-center gap-1 text-base font-medium text-[#1f2b37] hover:text-[#52667a] transition-colors" href="#">
                            Visit Us <iconify-icon className="opacity-50" height="16" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="hidden lg:flex lg:items-center lg:gap-6">
<a className="rounded-full bg-[#52667a] px-6 py-2.5 text-base font-medium text-white shadow-sm hover:bg-[#3f5265] transition-colors" href="#">Get Directions</a>
<a className="text-base font-medium text-[#1f2b37] hover:text-[#52667a] transition-colors" href="#">Contact Us</a>
</div>
<div className="lg:hidden flex items-center">
<button className="p-2 text-[#1f2b37]">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex justify-center items-center opacity-40">
<svg className="w-[150%] h-[150%] text-[#e5e4de]" fill="none" viewbox="0 0 1440 800">
<path d="M-200 200C100 300 400 -100 800 100C1200 300 1300 600 1600 400" stroke="currentColor" strokeLinecap="round" strokeWidth="60"></path>
<path d="M-100 500C200 600 500 200 900 400C1300 600 1400 900 1700 700" stroke="currentColor" strokeLinecap="round" strokeWidth="60"></path>
</svg>
</div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
<div className="max-w-2xl">
<h1 className="font-['Martina_Plantin','Playfair_Display',serif] text-5xl font-medium tracking-tight text-[#1f2b37] sm:text-6xl leading-[1.05]">
                        Discover whimsical gifts from local artisans.
                    </h1>
<p className="mt-8 text-xl text-[#4a5568] leading-relaxed max-w-lg">
                        A magical gift shop representing over 100 talented creators in the Pensacola area. Find something truly unique for your home or loved ones.
                    </p>
<div className="mt-10 flex flex-wrap items-center gap-4">
<a className="rounded-full bg-[#52667a] px-8 py-3.5 text-base font-medium text-white shadow-sm hover:bg-[#3f5265] transition-colors" href="#">
                            Explore Collection
                        </a>
<a className="rounded-full bg-transparent border border-[#d1d0c9] px-8 py-3.5 text-base font-medium text-[#1f2b37] hover:bg-[#ebeae4] transition-colors" href="#">
                            Visit Our Shop
                        </a>
</div>
</div>
<div className="relative w-full aspect-[4/3] rounded-2xl shadow-2xl overflow-hidden bg-white border border-[#e5e4de]">

<div className="bg-gray-50 px-4 py-3 flex items-center gap-2 border-b border-[#e5e4de]">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-[#e5e4de]"></div>
<div className="w-3 h-3 rounded-full bg-[#e5e4de]"></div>
<div className="w-3 h-3 rounded-full bg-[#e5e4de]"></div>
</div>
<div className="mx-auto text-xs font-medium text-[#4a5568] tracking-widest uppercase">Digital Catalog</div>
</div>

<div className="relative w-full h-full bg-[#f5f4f0] p-6 flex flex-col gap-4">
<div className="flex items-center justify-between mb-2">
<div className="text-sm font-medium text-[#1f2b37] flex items-center gap-2">
<iconify-icon height="18" icon="solar:gallery-linear" width="18"></iconify-icon> Featured Creations
                            </div>
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-[#e5e4de] shadow-sm">
<iconify-icon className="text-[#4a5568]" height="16" icon="solar:magnifer-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
<div className="flex-grow bg-white rounded-xl border border-[#e5e4de] shadow-sm overflow-hidden relative group">
<img alt="Whimsical Crafts" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&amp;fit=crop&amp;q=80"/>

<div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg py-3 px-4 flex flex-col gap-2 border border-[#e5e4de] shadow-sm">
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-[#1f2b37]">Handcrafted Pottery</span>
<span className="text-sm font-medium text-[#52667a]">Unique Finds</span>
</div>
<div className="flex items-center gap-3 text-xs text-[#4a5568]">
<span className="flex items-center gap-1"><iconify-icon icon="solar:star-circle-linear" width="14"></iconify-icon> Artisan Made</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon> Pensacola, FL</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-b border-[#e5e4de]">
<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
<p className="text-lg font-medium text-[#1f2b37] font-['Playfair_Display',serif] tracking-widest uppercase">Pensacola's Best Kept Secret</p>
<div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-70">
<span className="text-xl font-medium font-['Playfair_Display',serif] tracking-tight">Over 100 Artisans</span>
<span className="text-xl font-medium font-['Playfair_Display',serif] tracking-tight">Handcrafted Gifts</span>
<span className="text-xl font-medium font-['Playfair_Display',serif] tracking-tight">Local Art</span>
<span className="text-xl font-medium font-['Playfair_Display',serif] tracking-tight">Home Decor</span>
</div>
</div>
</section>

<section className="py-24 lg:py-32 overflow-hidden bg-white">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
<div className="max-w-xl">
<h2 className="font-['Martina_Plantin','Playfair_Display',serif] text-4xl lg:text-5xl font-medium tracking-tight text-[#1f2b37] leading-[1.1]">
                        Curated creations from local artists.
                    </h2>
<p className="mt-6 text-xl text-[#4a5568] leading-relaxed">
                        We source unique, handcrafted pieces from talented creators right here in Pensacola and beyond. Every item in our gallery tells a distinct story of craftsmanship and creativity.
                    </p>
<ul className="mt-8 space-y-4">
<li className="flex items-start gap-3">
<div className="mt-2 h-1.5 w-1.5 rounded-full bg-[#1f2b37] shrink-0"></div>
<p className="text-lg text-[#1f2b37]">Supporting local craftsmanship and small businesses.</p>
</li>
<li className="flex items-start gap-3">
<div className="mt-2 h-1.5 w-1.5 rounded-full bg-[#1f2b37] shrink-0"></div>
<p className="text-lg text-[#1f2b37]">Unique finds you won't see anywhere else.</p>
</li>
</ul>
<div className="mt-10">
<a className="rounded-full bg-white border border-[#d1d0c9] px-8 py-3.5 text-base font-medium text-[#1f2b37] hover:bg-[#ebeae4] transition-colors inline-block" href="#">
                            Meet Our Artisans
                        </a>
</div>
</div>
<div className="relative w-full aspect-[4/3] lg:aspect-[5/4] bg-[#f5f4f0] rounded-2xl flex items-center justify-center p-8">

<div className="w-full max-w-md bg-white rounded-xl shadow-xl overflow-hidden border border-[#e5e4de]">
<div className="p-4 border-b border-[#e5e4de] flex items-center gap-3">
<div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center text-[#927f62]">
<iconify-icon height="20" icon="solar:palette-round-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<div className="text-base font-medium text-[#1f2b37] leading-none">Artisan Spotlight</div>
<div className="text-xs text-[#4a5568] mt-1">Locally Crafted</div>
</div>
</div>
<div className="p-6">
<p className="text-base text-[#4a5568] mb-5">Discover the inspiration and dedication behind each handcrafted piece at Angel's Garden.</p>
<div className="bg-gray-50 rounded-lg p-4 mb-5 border border-[#e5e4de]">
<p className="text-sm font-medium text-[#4a5568] uppercase tracking-wider mb-2">Featured Item</p>
<p className="text-base font-medium text-[#1f2b37]">Hand-painted Ceramic Vase</p>
<p className="text-sm text-[#4a5568] mt-1">Origin: Pensacola, Florida</p>
</div>
<button className="w-full bg-[#52667a] text-white rounded-md py-3 text-base font-medium flex items-center justify-center gap-2 hover:bg-[#3f5265] transition-colors">
<iconify-icon height="20" icon="solar:shop-linear" strokeWidth="1.5" width="20"></iconify-icon> View in Store
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 overflow-hidden bg-[#f5f4f0]">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
<div className="order-2 lg:order-1 relative w-full aspect-[4/3] lg:aspect-[5/4] rounded-2xl flex items-center justify-center overflow-hidden shadow-sm">
<img alt="Whimsical Decor" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&amp;fit=crop&amp;q=80"/>

<div className="absolute bottom-8 right-8 bg-white rounded-xl shadow-2xl p-5 border border-[#e5e4de] max-w-xs">
<p className="text-sm text-[#4a5568] font-medium mb-3">Perfect Gifts For</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 bg-[#f5f4f0] border border-[#e5e4de] text-[#1f2b37] rounded-md text-xs font-medium flex items-center gap-1">
<iconify-icon height="14" icon="solar:gift-linear" strokeWidth="1.5" width="14"></iconify-icon> Birthdays
                            </span>
<span className="px-3 py-1.5 bg-[#f5f4f0] border border-[#e5e4de] text-[#1f2b37] rounded-md text-xs font-medium flex items-center gap-1">
<iconify-icon height="14" icon="solar:home-linear" strokeWidth="1.5" width="14"></iconify-icon> Housewarming
                            </span>
<span className="px-3 py-1.5 bg-[#52667a] text-white rounded-md text-xs font-medium flex items-center gap-1">
<iconify-icon height="14" icon="solar:heart-linear" strokeWidth="1.5" width="14"></iconify-icon> Just Because
                            </span>
</div>
</div>
</div>
<div className="order-1 lg:order-2 max-w-xl lg:ml-auto">
<h2 className="font-['Martina_Plantin','Playfair_Display',serif] text-4xl lg:text-5xl font-medium tracking-tight text-[#1f2b37] leading-[1.1]">
                        A whimsical world of gifts and decor.
                    </h2>
<p className="mt-6 text-xl text-[#4a5568] leading-relaxed">
                        From handcrafted jewelry to colorful yard art, our eclectic collection offers the perfect gift for any occasion or a special treat to brighten your own day.
                    </p>
<ul className="mt-8 space-y-4">
<li className="flex items-start gap-3">
<div className="mt-2 h-1.5 w-1.5 rounded-full bg-[#1f2b37] shrink-0"></div>
<p className="text-lg text-[#1f2b37]">Constantly rotating inventory of seasonal delights.</p>
</li>
<li className="flex items-start gap-3">
<div className="mt-2 h-1.5 w-1.5 rounded-full bg-[#1f2b37] shrink-0"></div>
<p className="text-lg text-[#1f2b37]">Friendly, personalized shopping experience to help you find the perfect item.</p>
</li>
</ul>
<div className="mt-10">
<a className="rounded-full bg-[#52667a] px-8 py-3.5 text-base font-medium text-white shadow-sm hover:bg-[#3f5265] transition-colors inline-block" href="#">
                            Browse Categories
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 overflow-hidden bg-white">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
<div className="max-w-xl">
<h2 className="font-['Martina_Plantin','Playfair_Display',serif] text-4xl lg:text-5xl font-medium tracking-tight text-[#1f2b37] leading-[1.1]">
                        Rooted in the Pensacola community.
                    </h2>
<p className="mt-6 text-xl text-[#4a5568] leading-relaxed">
                        Located in the heart of Pensacola, Angel's Garden has been a beloved destination for locals and visitors alike seeking creativity, inspiration, and community connection.
                    </p>
<ul className="mt-8 space-y-4">
<li className="flex items-start gap-3">
<div className="mt-2 h-1.5 w-1.5 rounded-full bg-[#1f2b37] shrink-0"></div>
<p className="text-lg text-[#1f2b37]">Open daily with easy parking and a welcoming atmosphere.</p>
</li>
<li className="flex items-start gap-3">
<div className="mt-2 h-1.5 w-1.5 rounded-full bg-[#1f2b37] shrink-0"></div>
<p className="text-lg text-[#1f2b37]">Hosting local artisan events and neighborhood gatherings.</p>
</li>
</ul>
</div>
<div className="relative w-full aspect-[4/3] lg:aspect-[5/4] flex items-center justify-center">
<div className="absolute inset-0 bg-[#f5f4f0] rounded-2xl"></div>
<div className="relative z-10 w-full max-w-md p-6">

<div className="grid grid-cols-2 gap-4 mb-6">
<div className="aspect-square bg-white rounded-xl overflow-hidden shadow-sm border border-[#e5e4de]"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/></div>
<div className="aspect-square bg-white rounded-xl overflow-hidden shadow-sm border border-[#e5e4de]"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/></div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl p-5 w-80 border border-[#e5e4de]">
<div className="flex items-center gap-2 mb-4 bg-[#52667a] text-white self-start inline-flex px-3 py-1.5 rounded-md">
<iconify-icon height="16" icon="solar:map-point-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-sm font-medium">Store Location</span>
</div>
<div className="bg-[#f5f4f0] p-4 rounded border border-[#e5e4de] overflow-hidden text-center">
<p className="text-xs text-[#4a5568] uppercase tracking-widest mb-1">Visit Us Today</p>
<p className="text-lg font-medium text-[#1f2b37]">1208 N 12th Ave</p>
<p className="text-sm text-[#4a5568] mt-1">Pensacola, FL</p>
</div>
<div className="mt-4 flex gap-2 justify-center">
<button className="text-sm font-medium text-[#52667a] flex items-center gap-1 hover:text-[#1f2b37] transition-colors">
<iconify-icon height="16" icon="solar:routing-2-linear" strokeWidth="1.5" width="16"></iconify-icon> Get Directions
                                </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#f5f4f0]">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="font-['Martina_Plantin','Playfair_Display',serif] text-4xl lg:text-5xl font-medium tracking-tight text-[#1f2b37]">
                    Explore our collections
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white rounded-xl p-8 flex flex-col shadow-sm border border-[#e5e4de] hover:border-[#d1d0c9] hover:shadow-md transition-all group cursor-pointer">
<div className="aspect-[4/3] bg-[#f5f4f0] rounded-lg mb-6 overflow-hidden flex items-center justify-center border border-[#e5e4de]/50 relative">
<img className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<h3 className="font-['Martina_Plantin','Playfair_Display',serif] text-xl font-medium tracking-tight text-[#1f2b37] mb-2 text-center">Handcrafted Pottery</h3>
<a className="mt-auto pt-4 text-sm font-medium text-[#52667a] flex items-center justify-center gap-1 hover:gap-2 transition-all" href="#">
                        View items <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="bg-white rounded-xl p-8 flex flex-col shadow-sm border border-[#e5e4de] hover:border-[#d1d0c9] hover:shadow-md transition-all group cursor-pointer">
<div className="aspect-[4/3] bg-[#f5f4f0] rounded-lg mb-6 overflow-hidden flex items-center justify-center border border-[#e5e4de]/50 relative">
<img className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<h3 className="font-['Martina_Plantin','Playfair_Display',serif] text-xl font-medium tracking-tight text-[#1f2b37] mb-2 text-center">Artisan Jewelry</h3>
<a className="mt-auto pt-4 text-sm font-medium text-[#52667a] flex items-center justify-center gap-1 hover:gap-2 transition-all" href="#">
                        View items <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="bg-white rounded-xl p-8 flex flex-col shadow-sm border border-[#e5e4de] hover:border-[#d1d0c9] hover:shadow-md transition-all group cursor-pointer">
<div className="aspect-[4/3] bg-[#f5f4f0] rounded-lg mb-6 overflow-hidden flex items-center justify-center border border-[#e5e4de]/50 relative">
<img className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<h3 className="font-['Martina_Plantin','Playfair_Display',serif] text-xl font-medium tracking-tight text-[#1f2b37] mb-2 text-center">Whimsical Art</h3>
<a className="mt-auto pt-4 text-sm font-medium text-[#52667a] flex items-center justify-center gap-1 hover:gap-2 transition-all" href="#">
                        View items <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="bg-white rounded-xl p-8 flex flex-col shadow-sm border border-[#e5e4de] hover:border-[#d1d0c9] hover:shadow-md transition-all group cursor-pointer">
<div className="aspect-[4/3] bg-[#f5f4f0] rounded-lg mb-6 overflow-hidden flex items-center justify-center border border-[#e5e4de]/50 relative">
<img className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1584282438596-f942ba6dfb0f?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<h3 className="font-['Martina_Plantin','Playfair_Display',serif] text-xl font-medium tracking-tight text-[#1f2b37] mb-2 text-center">Home &amp; Garden</h3>
<a className="mt-auto pt-4 text-sm font-medium text-[#52667a] flex items-center justify-center gap-1 hover:gap-2 transition-all" href="#">
                        View items <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 relative overflow-hidden bg-white">
<div className="absolute inset-0 z-0 opacity-40 pointer-events-none overflow-hidden">
<svg className="w-full h-full object-cover text-[#f5f4f0]" fill="none" viewbox="0 0 1440 800">
<path d="M-100 400C150 400 350 100 600 200C850 300 1050 600 1300 500C1550 400 1600 100 1800 100" stroke="currentColor" strokeLinecap="round" strokeWidth="100"></path>
</svg>
</div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4] max-w-md mx-auto lg:mx-0 border border-[#e5e4de]">
<img alt="Happy Customer" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="max-w-xl">
<h2 className="font-['Martina_Plantin','Playfair_Display',serif] text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1f2b37] leading-tight">
                        "Angel's Garden is my absolute go-to spot in Pensacola! Every corner is filled with joy, creativity, and the perfect gifts."
                    </h2>
<div className="mt-12 flex items-center gap-6">
<div>
<p className="text-lg font-medium text-[#1f2b37]">Sarah Jenkins</p>
<p className="text-sm text-[#4a5568]">Local Resident &amp; Customer</p>
</div>
<div className="h-10 w-px bg-[#e5e4de]"></div>
<div className="flex items-center gap-2 text-xl font-medium text-[#1f2b37] font-['Playfair_Display',serif] tracking-widest uppercase text-xs">
                            Pensacola, FL
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#f5f4f0] border-t border-[#e5e4de]">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mb-16">
<h2 className="font-['Martina_Plantin','Playfair_Display',serif] text-4xl lg:text-5xl font-medium tracking-tight text-[#1f2b37] mb-4">Customer experiences</h2>
<div className="flex items-center gap-2">
<div className="flex text-[#1f2b37]">
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-[#4a5568] ml-2">96% Recommend (48 Reviews)</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
<div className="flex flex-col">
<p className="text-base text-[#1f2b37] leading-relaxed mb-8 flex-grow">
                        I LOVE your shop!!! Highly recommend visiting if you are looking for something beautifully unique. The artisan pieces are incredible and you always feel welcome.
                    </p>
<div>
<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 rounded-full bg-[#e5e4de] flex items-center justify-center font-['Playfair_Display',serif] text-[#1f2b37] text-lg">L</div>
<div>
<p className="text-base font-medium text-[#1f2b37] leading-none">Lauren Long</p>
<p className="text-sm text-[#4a5568] mt-1.5">Facebook Review</p>
</div>
</div>
</div>
</div>
<div className="flex flex-col">
<p className="text-base text-[#1f2b37] leading-relaxed mb-8 flex-grow">
                        Angel's Garden is Pensacola's best kept secret. So many wonderful artists represented in one whimsical space. You can spend hours just looking at all the beautiful details!
                    </p>
<div>
<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 rounded-full bg-[#e5e4de] flex items-center justify-center font-['Playfair_Display',serif] text-[#1f2b37] text-lg">M</div>
<div>
<p className="text-base font-medium text-[#1f2b37] leading-none">Mary T.</p>
<p className="text-sm text-[#4a5568] mt-1.5">Local Shopper</p>
</div>
</div>
</div>
</div>
<div className="flex flex-col">
<p className="text-base text-[#1f2b37] leading-relaxed mb-8 flex-grow">
                        Found the absolute perfect gift for my mother's birthday here. The owner was so helpful in pointing out pieces from local Florida artists. A must-visit gift shop!
                    </p>
<div>
<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 rounded-full bg-[#e5e4de] flex items-center justify-center font-['Playfair_Display',serif] text-[#1f2b37] text-lg">D</div>
<div>
<p className="text-base font-medium text-[#1f2b37] leading-none">David R.</p>
<p className="text-sm text-[#4a5568] mt-1.5">Visitor</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white border-t border-[#e5e4de]">
<div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
<h2 className="font-['Martina_Plantin','Playfair_Display',serif] text-4xl lg:text-5xl font-medium tracking-tight text-[#1f2b37] sm:text-6xl leading-[1.1]">
                Hop on over to Angel’s Garden
            </h2>
<p className="mt-8 text-xl text-[#4a5568] leading-relaxed max-w-2xl mx-auto">
                Visit our magical shop to browse handcrafted treasures from over 100 artists, or reach out to ask about our latest arrivals.
            </p>
<div className="mt-12 flex flex-wrap items-center justify-center gap-4">
<a className="rounded-full bg-[#52667a] px-8 py-3.5 text-base font-medium text-white shadow-sm hover:bg-[#3f5265] transition-colors" href="#">
                    Get Directions
                </a>
<a className="rounded-full bg-transparent border border-[#d1d0c9] px-8 py-3.5 text-base font-medium text-[#1f2b37] hover:bg-[#ebeae4] transition-colors" href="#">
                    Contact Us
                </a>
</div>
</div>
</section>

<footer className="bg-[#1f2b37] text-white py-20">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
<div className="lg:col-span-4">
<span className="font-['Martina_Plantin','Playfair_Display',serif] text-3xl font-medium tracking-tight text-white mb-6 block">Angel's Garden</span>
<p className="text-base mt-6 max-w-xs text-gray-400 leading-relaxed">1208 N 12th Ave<br/>Pensacola, FL<br/>United States</p>
<p className="text-base mt-4 text-gray-400">Angelsgardenpensacola@gmail.com</p>
<p className="text-base mt-2 text-gray-400">(850) 435-9555</p>
<div className="mt-8 flex gap-4">
<a className="text-gray-400 hover:text-white transition-colors" href="https://www.facebook.com/AngelsGarden">
<iconify-icon height="24" icon="mdi:facebook" width="24"></iconify-icon>
<span className="sr-only">Facebook</span>
</a>
<a className="text-gray-400 hover:text-white transition-colors" href="https://www.instagram.com/angelsgardenpensacola">
<iconify-icon height="24" icon="mdi:instagram" width="24"></iconify-icon>
<span className="sr-only">Instagram</span>
</a>
</div>
</div>
<div className="lg:col-span-2">
<h3 className="font-['Martina_Plantin','Playfair_Display',serif] text-xl font-medium text-white mb-6">Collections</h3>
<ul className="space-y-4 text-sm text-gray-400">
<li><a className="hover:text-white transition-colors" href="#">Handcrafted Pottery</a></li>
<li><a className="hover:text-white transition-colors" href="#">Whimsical Art</a></li>
<li><a className="hover:text-white transition-colors" href="#">Artisan Jewelry</a></li>
<li><a className="hover:text-white transition-colors" href="#">Home Decor</a></li>
<li><a className="hover:text-white transition-colors" href="#">Garden Accents</a></li>
<li><a className="hover:text-white transition-colors" href="#">Seasonal Gifts</a></li>
</ul>
</div>
<div className="lg:col-span-2">
<h3 className="font-['Martina_Plantin','Playfair_Display',serif] text-xl font-medium text-white mb-6">Shop Info</h3>
<ul className="space-y-4 text-sm text-gray-400">
<li><a className="hover:text-white transition-colors" href="#">Visit Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Our Artisans</a></li>
<li><a className="hover:text-white transition-colors" href="#">Upcoming Events</a></li>
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
</ul>
</div>
<div className="lg:col-span-2 lg:col-start-11">
<h3 className="font-['Martina_Plantin','Playfair_Display',serif] text-xl font-medium text-white mb-6">Contact</h3>
<ul className="space-y-4 text-sm text-gray-400">
<li><a className="hover:text-white transition-colors" href="#">Get Directions</a></li>
<li><a className="hover:text-white transition-colors" href="#">Send a Message</a></li>
<li><a className="hover:text-white transition-colors" href="#">Call Us</a></li>
</ul>
</div>
</div>
<div className="mt-24 flex flex-col items-center justify-between border-t border-white/10 pt-8 sm:flex-row text-sm text-gray-500">
<p>© 2024 Angel's Garden | Pensacola FL. All Rights Reserved.</p>
<div className="flex gap-6 mt-4 sm:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
