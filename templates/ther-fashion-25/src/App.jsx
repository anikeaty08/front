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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl tracking-tighter font-medium text-white hover:text-zinc-300 transition-colors" href="#">
            ÉTHER
          </a>
<div className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
<a className="hover:text-white transition-colors" href="#collection">
              Collection
            </a>
<a className="hover:text-white transition-colors" href="#atelier">
              Atelier
            </a>
<a className="hover:text-white transition-colors" href="#sustainability">
              Sustainability
            </a>
</div>
</div>
<div className="flex items-center gap-4 text-zinc-400">
<button aria-label="Search" className="hover:text-white transition-colors p-1">
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button aria-label="Cart" className="hover:text-white transition-colors p-1 relative">
<iconify-icon icon="lucide:shopping-bag" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute top-1 right-0 w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
</button>
<button aria-label="Account" className="hidden md:block hover:text-white transition-colors p-1">
<iconify-icon icon="lucide:user" strokeWidth="1.5" width="20"></iconify-icon>
</button>

<button className="md:hidden hover:text-white transition-colors p-1">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-5xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
<span className="text-xs text-zinc-300 tracking-wide uppercase font-medium">
            New Season Arrival
          </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tighter font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 mb-6">
          Engineered for
          <br className="hidden md:block"/>
          Motion &amp; Stillness.
        </h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light tracking-tight">
          A studied approach to contemporary womenswear. Combining technical
          precision with organic fluidity.
        </p>

<div className="flex justify-center">
<button className="shiny-cta group">
<span className="flex items-center gap-2">
              Explore Collection
              <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</span>
</button>
</div>
</div>
</header>

<div className="w-full border-y border-white/5 py-6 bg-zinc-950/50">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs text-zinc-500 uppercase tracking-widest font-medium">
<span>Tokyo</span>
<span className="hidden md:inline">Paris</span>
<span>New York</span>
<span className="hidden md:inline">London</span>
<span>Milan</span>
</div>
</div>

<section className="py-24 px-6 max-w-7xl mx-auto" id="collection">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl tracking-tight font-medium text-zinc-100">
          Curated Forms
        </h2>
<a className="text-sm text-zinc-400 hover:text-white flex items-center gap-1 transition-colors" href="#">
          View All
          <iconify-icon icon="lucide:chevron-right" width="14"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[400px]">

<div className="group relative md:col-span-2 rounded-xl overflow-hidden border border-white/5 bg-zinc-900">
<img alt="Outerwear" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<h3 className="text-2xl font-medium tracking-tight mb-2">
              Technical Outerwear
            </h3>
<p className="text-zinc-400 text-sm mb-4 max-w-md">
              Weather-resistant fabrics meeting tailored silhouettes.
            </p>
<span className="inline-flex items-center text-xs font-medium text-white border-b border-white pb-0.5">
              Shop Coats
            </span>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden border border-white/5 bg-zinc-900">
<img alt="Knitwear" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<h3 className="text-2xl font-medium tracking-tight mb-2">
              Soft Structure
            </h3>
<p className="text-zinc-400 text-sm mb-4">
              Merino &amp; Cashmere blends.
            </p>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden border border-white/5 bg-zinc-900">
<img alt="Accessories" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&amp;w=1888&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<h3 className="text-2xl font-medium tracking-tight mb-2">Artifacts</h3>
<p className="text-zinc-400 text-sm mb-4">Leather goods and silver.</p>
</div>
</div>

<div className="group relative md:col-span-2 rounded-xl overflow-hidden border border-white/5 bg-zinc-900">
<img alt="Evening" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<h3 className="text-2xl font-medium tracking-tight mb-2">
              Noir Series
            </h3>
<p className="text-zinc-400 text-sm mb-4 max-w-md">
              The essential evening edit. Minimalist geometry.
            </p>
<span className="inline-flex items-center text-xs font-medium text-white border-b border-white pb-0.5">
              Shop Evening
            </span>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-zinc-900/20">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative aspect-[4/5] rounded-lg overflow-hidden border border-white/5 bg-zinc-900 group">
<img alt="Product" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
<button className="w-2 h-2 rounded-full bg-white"></button>
<button className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/60"></button>
<button className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/60"></button>
</div>
</div>

<div>
<div className="mb-2 text-indigo-400 text-xs font-semibold tracking-wide uppercase">
            Heritage Collection
          </div>
<h2 className="text-4xl tracking-tighter font-medium text-white mb-4">
            The Royal Anarkali
          </h2>
<div className="flex items-center gap-4 mb-8">
<span className="text-xl text-zinc-200 font-light">$850.00</span>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-800 text-zinc-300 border border-white/5">
              PRE-ORDER
            </span>
</div>
<p className="text-zinc-400 leading-relaxed mb-10 font-light">
            A masterpiece of traditional craftsmanship. Featuring hand-woven
            Banarasi silk with intricate zari borders, blending timeless
            heritage with modern elegance.
          </p>

<div className="mb-8">
<label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">
              Color: Deep Maroon
            </label>
<div className="flex gap-3">
<button className="w-8 h-8 rounded-full bg-red-900 border-2 border-white ring-2 ring-zinc-800 ring-offset-2 ring-offset-zinc-950"></button>
<button className="w-8 h-8 rounded-full bg-amber-600 border border-white/10 hover:border-white/50 transition"></button>
<button className="w-8 h-8 rounded-full bg-emerald-800 border border-white/10 hover:border-white/50 transition"></button>
</div>
</div>

<div className="mb-10">
<div className="flex justify-between mb-3">
<label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider">
                Size
              </label>
<button className="text-xs text-zinc-400 underline decoration-zinc-700 hover:text-white">
                Size Guide
              </button>
</div>
<div className="grid grid-cols-4 gap-2">
<button className="h-10 border border-white/10 rounded flex items-center justify-center text-sm hover:border-white/40 text-zinc-400 hover:text-white transition">
                XS
              </button>
<button className="h-10 border border-white rounded flex items-center justify-center text-sm bg-zinc-100 text-black font-medium shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                S
              </button>
<button className="h-10 border border-white/10 rounded flex items-center justify-center text-sm hover:border-white/40 text-zinc-400 hover:text-white transition">
                M
              </button>
<button className="h-10 border border-white/10 rounded flex items-center justify-center text-sm hover:border-white/40 text-zinc-400 hover:text-white transition">
                L
              </button>
</div>
</div>

<div className="flex gap-4">
<button className="flex-1 bg-white text-black h-12 rounded-lg font-medium text-sm hover:bg-zinc-200 transition flex items-center justify-center gap-2">
              Add to Cart
            </button>
<button className="w-12 h-12 rounded-lg border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 transition">
<iconify-icon icon="lucide:heart" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div className="mt-8 flex gap-6 text-xs text-zinc-500">
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:truck" width="14"></iconify-icon>
              Free Global Shipping
            </div>
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:shield-check" width="14"></iconify-icon>
              5-Year Warranty
            </div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-4xl mx-auto text-center">
<iconify-icon className="text-indigo-500 mb-6" icon="lucide:sparkles" width="32"></iconify-icon>
<h2 className="text-3xl md:text-5xl tracking-tighter font-medium mb-6">
          "Fashion is the armor to survive the reality of everyday life."
        </h2>
<p className="text-zinc-500">Bill Cunningham</p>
</div>
</section>

<footer className="border-t border-white/5 pt-20 pb-10 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="md:col-span-1">
<a className="text-xl tracking-tighter font-medium text-white mb-6 block" href="#">
              ÉTHER
            </a>
<p className="text-zinc-500 text-sm leading-relaxed mb-6">
              Defining the intersection of luxury and utility for the modern
              woman.
            </p>
<div className="flex gap-4 text-zinc-400">
<a className="hover:text-white transition" href="#">
<iconify-icon icon="lucide:instagram" width="18"></iconify-icon>
</a>
<a className="hover:text-white transition" href="#">
<iconify-icon icon="lucide:twitter" width="18"></iconify-icon>
</a>
<a className="hover:text-white transition" href="#">
<iconify-icon icon="lucide:facebook" width="18"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Shop</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li>
<a className="hover:text-zinc-300 transition" href="#">
                  New Arrivals
                </a>
</li>
<li>
<a className="hover:text-zinc-300 transition" href="#">
                  Coats &amp; Jackets
                </a>
</li>
<li>
<a className="hover:text-zinc-300 transition" href="#">Dresses</a>
</li>
<li>
<a className="hover:text-zinc-300 transition" href="#">Knitwear</a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Company</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li>
<a className="hover:text-zinc-300 transition" href="#">Our Story</a>
</li>
<li>
<a className="hover:text-zinc-300 transition" href="#">
                  Sustainability
                </a>
</li>
<li>
<a className="hover:text-zinc-300 transition" href="#">Careers</a>
</li>
<li>
<a className="hover:text-zinc-300 transition" href="#">Press</a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Newsletter</h4>
<p className="text-xs text-zinc-500 mb-4">
              Join our list for early access to new drops.
            </p>
<form className="flex gap-2">
<input className="bg-transparent border-b border-zinc-700 text-white text-sm py-2 px-0 w-full focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-zinc-700" placeholder="email@address.com" type="email"/>
<button className="text-zinc-400 hover:text-white transition" type="button">
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600">
<p>© 2024 ÉTHER. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-zinc-400 transition" href="#">
              Privacy Policy
            </a>
<a className="hover:text-zinc-400 transition" href="#">
              Terms of Service
            </a>
</div>
</div>
</div>
</footer>

    </>
  );
}
