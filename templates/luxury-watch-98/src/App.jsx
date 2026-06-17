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
      

<nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<button className="md:hidden text-neutral-400 hover:text-white transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>

<a className="text-white text-xl uppercase tracking-tighter flex-shrink-0" href="#" style={{fontFamily: '\'Playfair Display\', serif', letterSpacing: '-0.05em'}}>
                Aethelgard
            </a>

<div className="hidden md:flex items-center gap-10 text-sm font-light">
<a className="text-white transition-colors" href="#collection">Timepieces</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">Savoir-Faire</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">Boutiques</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">Concierge</a>
</div>

<div className="flex items-center gap-6 text-neutral-400">
<button className="hover:text-white transition-colors"><iconify-icon icon="solar:magnifer-linear" width="22"></iconify-icon></button>
<button className="hidden sm:block hover:text-white transition-colors"><iconify-icon icon="solar:user-linear" width="22"></iconify-icon></button>
<button className="hover:text-white transition-colors"><iconify-icon icon="solar:heart-linear" width="22"></iconify-icon></button>
<button className="hover:text-white transition-colors relative">
<iconify-icon icon="solar:bag-linear" width="22"></iconify-icon>
<span className="absolute -top-1 -right-1 bg-white text-black text-xs w-4 h-4 flex items-center justify-center rounded-full font-medium scale-75 transform origin-center">2</span>
</button>
</div>
</div>
</nav>

<section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#050505]">

<div className="absolute inset-0 w-full h-full">
<img alt="Luxury Watch Detail" className="w-full h-full object-cover object-center scale-105 opacity-60" src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20"></div>
<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
</div>

<div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16 flex flex-col items-center">
<span className="text-xs uppercase tracking-widest text-neutral-400 mb-6 block font-light flex items-center gap-3">
<div className="w-8 h-px bg-neutral-600"></div>
                The New Perpetual Collection
                <div className="w-8 h-px bg-neutral-600"></div>
</span>
<h1 className="md:text-7xl text-5xl text-white tracking-tight mb-8" style={{fontFamily: '"Playfair Display", serif'}}>Eternity in <br className="md:hidden"/>Every Minute</h1>
<p className="md:text-lg leading-relaxed text-base font-light text-neutral-400 max-w-2xl mr-auto mb-12 ml-auto">Discover the pinnacle of Indian horology. Precision engineering encased in timeless design, forged for those who command their own legacy.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
<a className="bg-white text-black px-8 py-3.5 rounded-sm text-sm font-medium hover:bg-neutral-200 transition-colors w-full sm:w-auto text-center" href="#collection">
                    Explore Collection
                </a>
<button className="flex items-center justify-center gap-2 bg-black/20 backdrop-blur-md border border-white/20 text-white px-8 py-3.5 rounded-sm text-sm font-medium hover:bg-white/10 transition-colors w-full sm:w-auto">
<iconify-icon icon="solar:augmented-reality-linear" width="18"></iconify-icon>
                    Virtual Try-On
                </button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-32" id="collection">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
<div>
<h2 className="text-3xl md:text-4xl text-white tracking-tight mb-3" style={{fontFamily: '\'Playfair Display\', serif'}}>Exceptional Timepieces</h2>
<p className="text-sm text-neutral-500 font-light">Curated selection of automatic and manual complications.</p>
</div>

<div className="flex flex-wrap items-center gap-3 text-sm">
<div className="relative group">
<button className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-[#0a0a0a] hover:bg-white/5 text-neutral-300 transition-colors font-light">
                        Movement <iconify-icon className="text-neutral-500" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</button>
</div>
<div className="relative group">
<button className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-[#0a0a0a] hover:bg-white/5 text-neutral-300 transition-colors font-light">
                        Material <iconify-icon className="text-neutral-500" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</button>
</div>
<div className="relative group">
<button className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-[#0a0a0a] hover:bg-white/5 text-neutral-300 transition-colors font-light">
                        Price <iconify-icon className="text-neutral-500" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</button>
</div>
<button className="flex items-center gap-2 px-4 py-2 text-white hover:text-neutral-300 transition-colors font-light ml-auto md:ml-4">
<iconify-icon icon="solar:sort-from-top-to-bottom-linear" width="18"></iconify-icon> Sort
                </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">

<div className="group relative flex flex-col bg-[#080808] border border-white/5 hover:border-white/15 rounded-xl overflow-hidden transition-all duration-500">
<div className="relative aspect-[4/5] overflow-hidden bg-[#0f0f0f]">
<img alt="Luminar Perpetual" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-90"></div>
<div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
<span className="text-xs px-2.5 py-1 bg-white text-black font-medium tracking-wide rounded-sm">NEW</span>
</div>
<button className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors z-10 bg-black/20 p-2 rounded-full backdrop-blur-md">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</button>

<div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex gap-2 z-20">
<button className="flex-1 bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs py-3 rounded-sm hover:bg-white hover:text-black transition-colors font-medium flex items-center justify-center gap-2">
<iconify-icon icon="solar:eye-linear" width="16"></iconify-icon> Quick View
                        </button>
<button className="w-12 flex-shrink-0 bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs py-3 rounded-sm hover:bg-white hover:text-black transition-colors font-medium flex items-center justify-center" title="360° View">
<iconify-icon icon="solar:refresh-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="p-6 flex flex-col flex-1 relative z-20">
<span className="text-xs uppercase tracking-widest text-neutral-500 mb-1.5 font-light">Aethelgard</span>
<h3 className="text-lg text-white tracking-tight mb-2" style={{fontFamily: '\'Playfair Display\', serif'}}>Luminar Perpetual</h3>
<p className="text-sm text-neutral-500 font-light mb-6 line-clamp-2">Automatic movement, 18ct white gold case, scratch-resistant sapphire crystal.</p>
<div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
<span className="text-sm text-white font-medium">$45,000</span>
<button className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5">
<iconify-icon icon="solar:scale-linear" width="14"></iconify-icon> Compare
                        </button>
</div>
</div>
</div>

<div className="group relative flex flex-col bg-[#080808] border border-white/5 hover:border-white/15 rounded-xl overflow-hidden transition-all duration-500">
<div className="relative aspect-[4/5] overflow-hidden bg-[#0f0f0f]">
<img alt="Noir Tourbillon" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1639006570490-79c0c53f1080?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-90"></div>
<div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
<span className="text-xs px-2.5 py-1 bg-transparent border border-white/30 text-white font-medium tracking-wide rounded-sm backdrop-blur-md">LIMITED</span>
</div>
<button className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors z-10 bg-black/20 p-2 rounded-full backdrop-blur-md">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</button>
<div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex gap-2 z-20">
<button className="flex-1 bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs py-3 rounded-sm hover:bg-white hover:text-black transition-colors font-medium flex items-center justify-center gap-2">
<iconify-icon icon="solar:eye-linear" width="16"></iconify-icon> Quick View
                        </button>
<button className="w-12 flex-shrink-0 bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs py-3 rounded-sm hover:bg-white hover:text-black transition-colors font-medium flex items-center justify-center">
<iconify-icon icon="solar:refresh-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="p-6 flex flex-col flex-1 relative z-20">
<span className="text-xs uppercase tracking-widest text-neutral-500 mb-1.5 font-light">Aethelgard</span>
<h3 className="text-lg text-white tracking-tight mb-2" style={{fontFamily: '\'Playfair Display\', serif'}}>Noir Tourbillon</h3>
<p className="text-sm text-neutral-500 font-light mb-6 line-clamp-2">Manual winding, titanium grade 5 case, skeletonized dial showcasing the caliber.</p>
<div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
<span className="text-sm text-white font-medium">$85,000</span>
<button className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5">
<iconify-icon icon="solar:scale-linear" width="14"></iconify-icon> Compare
                        </button>
</div>
</div>
</div>

<div className="group relative flex flex-col bg-[#080808] border border-white/5 hover:border-white/15 rounded-xl overflow-hidden transition-all duration-500">
<div className="relative aspect-[4/5] overflow-hidden bg-[#0f0f0f]">
<img alt="Oceanic Deep Dive" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-90"></div>
<button className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors z-10 bg-black/20 p-2 rounded-full backdrop-blur-md">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</button>
<div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex gap-2 z-20">
<button className="flex-1 bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs py-3 rounded-sm hover:bg-white hover:text-black transition-colors font-medium flex items-center justify-center gap-2">
<iconify-icon icon="solar:eye-linear" width="16"></iconify-icon> Quick View
                        </button>
<button className="w-12 flex-shrink-0 bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs py-3 rounded-sm hover:bg-white hover:text-black transition-colors font-medium flex items-center justify-center">
<iconify-icon icon="solar:refresh-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="p-6 flex flex-col flex-1 relative z-20">
<span className="text-xs uppercase tracking-widest text-neutral-500 mb-1.5 font-light">Aethelgard</span>
<h3 className="text-lg text-white tracking-tight mb-2" style={{fontFamily: '\'Playfair Display\', serif'}}>Oceanic Deep Dive</h3>
<p className="text-sm text-neutral-500 font-light mb-6 line-clamp-2">Automatic movement, 904L steel case, water resistant to 300 meters.</p>
<div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
<span className="text-sm text-white font-medium">$12,500</span>
<button className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5">
<iconify-icon icon="solar:scale-linear" width="14"></iconify-icon> Compare
                        </button>
</div>
</div>
</div>

<div className="group relative flex flex-col bg-[#080808] border border-white/5 hover:border-white/15 rounded-xl overflow-hidden transition-all duration-500">
<div className="relative aspect-[4/5] overflow-hidden bg-[#0f0f0f]">
<img alt="Celestia Moonphase" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-90"></div>
<button className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors z-10 bg-black/20 p-2 rounded-full backdrop-blur-md">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</button>
<div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex gap-2 z-20">
<button className="flex-1 bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs py-3 rounded-sm hover:bg-white hover:text-black transition-colors font-medium flex items-center justify-center gap-2">
<iconify-icon icon="solar:eye-linear" width="16"></iconify-icon> Quick View
                        </button>
<button className="w-12 flex-shrink-0 bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs py-3 rounded-sm hover:bg-white hover:text-black transition-colors font-medium flex items-center justify-center">
<iconify-icon icon="solar:refresh-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="p-6 flex flex-col flex-1 relative z-20">
<span className="text-xs uppercase tracking-widest text-neutral-500 mb-1.5 font-light">Aethelgard</span>
<h3 className="text-lg text-white tracking-tight mb-2" style={{fontFamily: '\'Playfair Display\', serif'}}>Celestia Moonphase</h3>
<p className="text-sm text-neutral-500 font-light mb-6 line-clamp-2">Automatic complication, 18ct rose gold, hand-stitched alligator strap.</p>
<div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
<span className="text-sm text-white font-medium">$24,000</span>
<button className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5">
<iconify-icon icon="solar:scale-linear" width="14"></iconify-icon> Compare
                        </button>
</div>
</div>
</div>

<div className="group relative flex flex-col bg-[#080808] border border-white/5 hover:border-white/15 rounded-xl overflow-hidden transition-all duration-500">
<div className="relative aspect-[4/5] overflow-hidden bg-[#0f0f0f]">
<img alt="Vanguard Chrono" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-90"></div>
<button className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors z-10 bg-black/20 p-2 rounded-full backdrop-blur-md">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</button>
<div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex gap-2 z-20">
<button className="flex-1 bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs py-3 rounded-sm hover:bg-white hover:text-black transition-colors font-medium flex items-center justify-center gap-2">
<iconify-icon icon="solar:eye-linear" width="16"></iconify-icon> Quick View
                        </button>
<button className="w-12 flex-shrink-0 bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs py-3 rounded-sm hover:bg-white hover:text-black transition-colors font-medium flex items-center justify-center">
<iconify-icon icon="solar:refresh-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="p-6 flex flex-col flex-1 relative z-20">
<span className="text-xs uppercase tracking-widest text-neutral-500 mb-1.5 font-light">Aethelgard</span>
<h3 className="text-lg text-white tracking-tight mb-2" style={{fontFamily: '\'Playfair Display\', serif'}}>Vanguard Chrono</h3>
<p className="text-sm text-neutral-500 font-light mb-6 line-clamp-2">Automatic chronograph, forged carbon case, integrated rubber strap.</p>
<div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
<span className="text-sm text-white font-medium">$18,400</span>
<button className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5">
<iconify-icon icon="solar:scale-linear" width="14"></iconify-icon> Compare
                        </button>
</div>
</div>
</div>

<div className="group relative flex flex-col bg-[#080808] border border-white/5 hover:border-white/15 rounded-xl overflow-hidden transition-all duration-500">
<div className="relative aspect-[4/5] overflow-hidden bg-[#0f0f0f]">
<img alt="Heritage Classic" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-90"></div>
<button className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors z-10 bg-black/20 p-2 rounded-full backdrop-blur-md">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</button>
<div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex gap-2 z-20">
<button className="flex-1 bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs py-3 rounded-sm hover:bg-white hover:text-black transition-colors font-medium flex items-center justify-center gap-2">
<iconify-icon icon="solar:eye-linear" width="16"></iconify-icon> Quick View
                        </button>
<button className="w-12 flex-shrink-0 bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs py-3 rounded-sm hover:bg-white hover:text-black transition-colors font-medium flex items-center justify-center">
<iconify-icon icon="solar:refresh-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="p-6 flex flex-col flex-1 relative z-20">
<span className="text-xs uppercase tracking-widest text-neutral-500 mb-1.5 font-light">Aethelgard</span>
<h3 className="text-lg text-white tracking-tight mb-2" style={{fontFamily: '\'Playfair Display\', serif'}}>Heritage Classic</h3>
<p className="text-sm text-neutral-500 font-light mb-6 line-clamp-2">Manual winding, polished steel case, minimalist silver dial.</p>
<div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
<span className="text-sm text-white font-medium">$9,200</span>
<button className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5">
<iconify-icon icon="solar:scale-linear" width="14"></iconify-icon> Compare
                        </button>
</div>
</div>
</div>
</div>

<div className="mt-16 text-center">
<button className="inline-flex items-center gap-2 text-sm text-white border-b border-white/30 pb-1 hover:border-white transition-colors font-light tracking-wide">
                View Entire Collection <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</section>

<section className="border-y border-white/5 bg-[#030303]">
<div className="max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center gap-16">

<div className="w-full md:w-1/2 relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/5 flex items-center justify-center group shadow-2xl">
<img alt="AR Wrist Preview" className="w-full h-full object-cover opacity-30 group-hover:opacity-20 transition-opacity duration-700" src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
<div className="relative w-48 h-48 flex items-center justify-center">
<div className="absolute inset-0 border border-dashed border-white/30 rounded-full animate-[spin_15s_linear_infinite]"></div>
<div className="absolute inset-4 border border-white/10 rounded-full animate-[spin_10s_linear_infinite_reverse]"></div>
<div className="flex flex-col items-center">
<iconify-icon className="text-white mb-3" icon="solar:camera-linear" width="32"></iconify-icon>
<span className="text-xs text-white uppercase tracking-widest font-medium">Calibrating</span>
</div>
</div>
</div>
</div>

<div className="w-full md:w-1/2 space-y-6">
<span className="text-xs uppercase tracking-widest text-neutral-500 font-light flex items-center gap-2">
<iconify-icon icon="solar:augmented-reality-linear" width="16"></iconify-icon> Virtual Boutique
                </span>
<h2 className="text-3xl md:text-5xl text-white tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Perfection,<br/> previewed on your wrist.</h2>
<p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed max-w-md">
                    Utilize our state-of-the-art augmented reality engine to preview any timepiece from the comfort of your home. Experience true-to-life scale, dynamic lighting reflections, and exquisite material details.
                </p>
<ul className="space-y-4 pt-4 text-sm text-neutral-300 font-light">
<li className="flex items-center gap-3"><iconify-icon className="text-neutral-500" icon="solar:check-circle-linear" width="18"></iconify-icon> Real-time raytraced reflections</li>
<li className="flex items-center gap-3"><iconify-icon className="text-neutral-500" icon="solar:check-circle-linear" width="18"></iconify-icon> Accurate 1:1 sizing calibration</li>
<li className="flex items-center gap-3"><iconify-icon className="text-neutral-500" icon="solar:check-circle-linear" width="18"></iconify-icon> Instantly switch strap variations</li>
</ul>
<div className="pt-8">
<button className="bg-white text-black px-8 py-3.5 rounded-sm text-sm font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2">
                        Launch AR Experience <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl text-white tracking-tight mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>A Legacy of Precision</h2>
<p className="text-sm md:text-base text-neutral-400 font-light max-w-2xl mx-auto mb-16 leading-relaxed">
            For over a century, Aethelgard has defined the vanguard of haute horlogerie. Each timepiece is a testament to our master artisans, requiring up to 400 hours of meticulous hand-assembly in our Geneva manufacture.
        </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
<div className="flex flex-col items-center p-8 border border-white/5 bg-[#080808] hover:bg-[#0a0a0a] transition-colors rounded-xl">
<iconify-icon className="text-white mb-5" icon="solar:shield-check-linear" width="36"></iconify-icon>
<h3 className="text-base text-white font-medium mb-3 tracking-tight">5-Year Guarantee</h3>
<p className="text-xs text-neutral-500 font-light text-center leading-relaxed">Comprehensive international warranty covering all manufacturing defects.</p>
</div>
<div className="flex flex-col items-center p-8 border border-white/5 bg-[#080808] hover:bg-[#0a0a0a] transition-colors rounded-xl">
<iconify-icon className="text-white mb-5" icon="solar:box-minimalistic-linear" width="36"></iconify-icon>
<h3 className="text-base text-white font-medium mb-3 tracking-tight">Secure Global Delivery</h3>
<p className="text-xs text-neutral-500 font-light text-center leading-relaxed">Complimentary, fully insured shipping via specialized luxury couriers.</p>
</div>
<div className="flex flex-col items-center p-8 border border-white/5 bg-[#080808] hover:bg-[#0a0a0a] transition-colors rounded-xl">
<iconify-icon className="text-white mb-5" icon="solar:diploma-linear" width="36"></iconify-icon>
<h3 className="text-base text-white font-medium mb-3 tracking-tight">Digital Certification</h3>
<p className="text-xs text-neutral-500 font-light text-center leading-relaxed">Registered blockchain certificate ensuring absolute authenticity with every purchase.</p>
</div>
</div>
</section>

<footer className="bg-black border-t border-white/5 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

<div className="md:col-span-4 lg:col-span-5">
<a className="text-white text-xl uppercase tracking-tighter block mb-6" href="#" style={{fontFamily: '\'Playfair Display\', serif', letterSpacing: '-0.05em'}}>Aethelgard</a>
<p className="text-sm text-neutral-500 font-light leading-relaxed mb-8 max-w-sm">
                    Crafting eternity since 1912. The ultimate expression of luxury, precision, and heritage in Swiss watchmaking.
                </p>
</div>

<div className="md:col-span-3 lg:col-span-2">
<h4 className="text-xs text-white uppercase tracking-widest font-medium mb-6">Collections</h4>
<ul className="space-y-4 text-sm text-neutral-500 font-light">
<li><a className="hover:text-white transition-colors" href="#">Luminar</a></li>
<li><a className="hover:text-white transition-colors" href="#">Noir Tourbillon</a></li>
<li><a className="hover:text-white transition-colors" href="#">Oceanic</a></li>
</ul>
</div>
<div className="md:col-span-3 lg:col-span-2">
<h4 className="text-xs text-white uppercase tracking-widest font-medium mb-6">Services</h4>
<ul className="space-y-4 text-sm text-neutral-500 font-light">
<li><a className="hover:text-white transition-colors" href="#">Concierge</a></li>
<li><a className="hover:text-white transition-colors" href="#">Servicing &amp; Repair</a></li>
<li><a className="hover:text-white transition-colors" href="#">Track Order</a></li>
</ul>
</div>

<div className="md:col-span-12 lg:col-span-3">
<h4 className="text-xs text-white uppercase tracking-widest font-medium mb-6">The Journal</h4>
<p className="text-xs text-neutral-500 font-light mb-6">Subscribe to receive exclusive releases and horological insights.</p>
<form className="flex border-b border-white/20 pb-3 focus-within:border-white transition-colors">
<input className="bg-transparent text-sm text-white w-full outline-none placeholder:text-neutral-600 font-light" placeholder="Email address" type="email"/>
<button className="text-white hover:text-neutral-300 transition-colors" type="submit">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</form>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-600 font-light">
<p>© 2024 Aethelgard. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="hover:text-neutral-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-neutral-400 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-neutral-400 transition-colors" href="#">Cookie Preferences</a>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 rounded-full p-1.5 shadow-2xl">
<button className="px-3 py-1.5 rounded-full text-xs text-neutral-300 hover:bg-white/10 hover:text-white transition-colors flex items-center gap-1.5 font-medium" title="Admin Dashboard">
<iconify-icon icon="solar:shield-keyhole-linear" width="14"></iconify-icon> Admin
        </button>
<div className="w-px h-4 bg-white/20"></div>
<button className="px-3 py-1.5 rounded-full text-xs text-neutral-300 hover:bg-white/10 hover:text-white transition-colors flex items-center gap-1.5 font-medium" title="Secure Checkout">
<iconify-icon icon="solar:card-linear" width="14"></iconify-icon> Checkout
        </button>
</div>

    </>
  );
}
