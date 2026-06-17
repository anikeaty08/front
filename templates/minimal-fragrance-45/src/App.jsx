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
      

<nav className="sticky top-0 z-50 bg-[#FCFCFC]/80 backdrop-blur-md border-b border-neutral-200/50">
<div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">

<button className="md:hidden text-neutral-500 hover:text-neutral-900 transition-colors">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>

<a className="text-xl font-medium tracking-tighter uppercase absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0" href="#">Lume</a>

<div className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Shop</a>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Philosophy</a>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Journal</a>
</div>

<div className="flex items-center space-x-5">
<button className="hidden md:block text-neutral-500 hover:text-neutral-900 transition-colors">
<iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon>
</button>
<button className="text-neutral-500 hover:text-neutral-900 transition-colors">
<iconify-icon className="text-xl" icon="solar:user-linear"></iconify-icon>
</button>
<button className="text-neutral-500 hover:text-neutral-900 transition-colors relative group">
<iconify-icon className="text-xl" icon="solar:bag-2-linear"></iconify-icon>
<span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-neutral-900 text-[10px] text-white font-medium scale-90 group-hover:scale-100 transition-transform">2</span>
</button>
</div>
</div>
</nav>
<main className="flex-grow">

<section className="relative pt-16 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
<div className="space-y-8 z-10">
<div className="inline-flex items-center rounded-full border border-neutral-200/60 bg-white/50 px-3 py-1 text-xs font-medium text-neutral-500 backdrop-blur-sm">
<span className="flex h-1.5 w-1.5 rounded-full bg-neutral-900 mr-2"></span>
                            Introducing Extract Collection
                        </div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-neutral-900 leading-[1.1]">
                            Invisible art<br/>on the skin.
                        </h1>
<p className="text-base text-neutral-500 max-w-md leading-relaxed">
                            Discover our new range of minimalist fragrances. Crafted from ethically sourced botanicals, designed to interact with your unique chemistry and leave a quiet impression.
                        </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="inline-flex h-11 items-center justify-center rounded-lg bg-neutral-900 px-6 text-sm font-medium text-white hover:bg-neutral-800 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2" href="#">
                                Shop Collection
                            </a>
<a className="inline-flex h-11 items-center justify-center rounded-lg border border-neutral-200 bg-white px-6 text-sm font-medium text-neutral-900 hover:bg-neutral-50 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2" href="#">
                                Explore Notes
                            </a>
</div>
</div>
<div className="relative lg:h-[600px] rounded-2xl overflow-hidden bg-neutral-100 group">

<div className="absolute inset-0 bg-gradient-to-tr from-neutral-200/40 to-transparent mix-blend-multiply z-10"></div>
<img alt="Minimalist perfume bottle" className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-neutral-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-2xl font-medium tracking-tight text-neutral-900">Curated Scents</h2>
<p className="text-sm text-neutral-500 mt-2">Signature blends for the everyday.</p>
</div>
<a className="hidden sm:inline-flex items-center text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors group" href="#">
                        View all 
                        <iconify-icon className="ml-1 text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

<div className="group cursor-pointer flex flex-col">
<div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#F5F5F5] mb-5">
<img alt="Santal Dust Perfume" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
<button className="w-full flex items-center justify-center h-10 bg-white/90 backdrop-blur-sm text-neutral-900 text-xs font-medium rounded-lg shadow-sm border border-neutral-200/50 hover:bg-white transition-colors">
                                    Quick Add — $145
                                </button>
</div>
</div>
<div className="flex justify-between items-start mt-auto">
<div>
<h3 className="text-sm font-medium text-neutral-900">Santal Dust</h3>
<p className="text-xs text-neutral-500 mt-1">Sandalwood, Iris, Cardamom</p>
</div>
<span className="text-sm font-medium text-neutral-900">$145</span>
</div>
</div>

<div className="group cursor-pointer flex flex-col">
<div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#F5F5F5] mb-5">
<img alt="Vetiver Rain Perfume" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
<button className="w-full flex items-center justify-center h-10 bg-white/90 backdrop-blur-sm text-neutral-900 text-xs font-medium rounded-lg shadow-sm border border-neutral-200/50 hover:bg-white transition-colors">
                                    Quick Add — $130
                                </button>
</div>
</div>
<div className="flex justify-between items-start mt-auto">
<div>
<h3 className="text-sm font-medium text-neutral-900">Vetiver Rain</h3>
<p className="text-xs text-neutral-500 mt-1">Haitian Vetiver, Bergamot, Petrichor</p>
</div>
<span className="text-sm font-medium text-neutral-900">$130</span>
</div>
</div>

<div className="group cursor-pointer flex flex-col">
<div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#F5F5F5] mb-5">
<img alt="Oud Minimal Perfume" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
<button className="w-full flex items-center justify-center h-10 bg-white/90 backdrop-blur-sm text-neutral-900 text-xs font-medium rounded-lg shadow-sm border border-neutral-200/50 hover:bg-white transition-colors">
                                    Quick Add — $185
                                </button>
</div>
</div>
<div className="flex justify-between items-start mt-auto">
<div>
<h3 className="text-sm font-medium text-neutral-900">Oud Minimal</h3>
<p className="text-xs text-neutral-500 mt-1">Agarwood, White Rose, Amber</p>
</div>
<span className="text-sm font-medium text-neutral-900">$185</span>
</div>
</div>

<div className="group cursor-pointer flex flex-col">
<div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#F5F5F5] mb-5">
<img alt="Figue Noir Perfume" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1583532452513-a02186582ccd?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
<button className="w-full flex items-center justify-center h-10 bg-white/90 backdrop-blur-sm text-neutral-900 text-xs font-medium rounded-lg shadow-sm border border-neutral-200/50 hover:bg-white transition-colors">
                                    Quick Add — $140
                                </button>
</div>
</div>
<div className="flex justify-between items-start mt-auto">
<div>
<h3 className="text-sm font-medium text-neutral-900">Figue Noir</h3>
<p className="text-xs text-neutral-500 mt-1">Black Fig, Cedarwood, Musk</p>
</div>
<span className="text-sm font-medium text-neutral-900">$140</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-950 text-white py-24 lg:py-32">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-3xl text-neutral-600 mb-8" icon="solar:leaf-linear"></iconify-icon>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-8 leading-tight text-neutral-100">
                    Fragrance as an intimate skin scent,<br className="hidden md:block"/>not a loud announcement.
                </h2>
<p className="text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                    Our formulations contain zero synthetic dyes, phthalates, or parabens. Just pure, high-absolute ingredients meticulously blended in organic sugarcane alcohol. We design scents that stay close to you.
                </p>
<div className="mt-12">
<a className="inline-flex items-center text-sm font-medium text-neutral-300 hover:text-white transition-colors group border-b border-neutral-700 hover:border-white pb-1" href="#">
                        Read our sourcing story
                    </a>
</div>
</div>
</section>

<section className="py-24 bg-[#FCFCFC]">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="bg-neutral-100 rounded-3xl p-8 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-12 border border-neutral-200/50">
<div className="max-w-lg">
<h2 className="text-2xl font-medium tracking-tight text-neutral-900 mb-4">Not sure where to begin?</h2>
<p className="text-sm text-neutral-500 mb-8">Experience our core collection at your own pace. The Discovery Set includes five 2ml vials of our signature scents, perfectly sized for testing on skin.</p>
<a className="inline-flex h-10 items-center justify-center rounded-lg bg-neutral-900 px-5 text-sm font-medium text-white hover:bg-neutral-800 transition-colors" href="#">
                            Get Discovery Set — $45
                        </a>
</div>
<div className="relative w-full md:w-1/2 aspect-video bg-white rounded-xl border border-neutral-200/60 shadow-sm flex items-center justify-center overflow-hidden group cursor-pointer">
<div className="flex space-x-2 z-10 transition-transform duration-500 group-hover:scale-105">
<div className="w-4 h-24 bg-neutral-200/80 rounded-sm shadow-inner backdrop-blur"></div>
<div className="w-4 h-24 bg-neutral-300/80 rounded-sm shadow-inner backdrop-blur translate-y-2"></div>
<div className="w-4 h-24 bg-neutral-400/80 rounded-sm shadow-inner backdrop-blur"></div>
<div className="w-4 h-24 bg-neutral-300/80 rounded-sm shadow-inner backdrop-blur -translate-y-2"></div>
<div className="w-4 h-24 bg-neutral-200/80 rounded-sm shadow-inner backdrop-blur"></div>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-50/50"></div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white pt-16 pb-8 border-t border-neutral-200/60">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">

<div className="md:col-span-5 lg:col-span-4">
<a className="text-lg font-medium tracking-tighter uppercase inline-block mb-4 text-neutral-900" href="#">Lume</a>
<p className="text-xs text-neutral-500 max-w-xs leading-relaxed">
                        Crafting minimal, intimate fragrances for the modern individual. Blended by hand, bottled with intention.
                    </p>
</div>

<div className="md:col-span-2 lg:col-span-2">
<h4 className="text-xs font-medium text-neutral-900 mb-4 tracking-wider">SHOP</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900 transition-colors" href="#">All Fragrances</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Discovery Set</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>
<div className="md:col-span-2 lg:col-span-2">
<h4 className="text-xs font-medium text-neutral-900 mb-4 tracking-wider">ABOUT</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900 transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Ingredients</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div className="md:col-span-3 lg:col-span-4 lg:pl-8">
<h4 className="text-xs font-medium text-neutral-900 mb-4 tracking-wider">JOIN THE LIST</h4>
<p className="text-xs text-neutral-500 mb-4">Receive updates on new releases and private access to limited editions.</p>
<form className="flex border-b border-neutral-300 focus-within:border-neutral-900 transition-colors relative">
<input className="w-full bg-transparent py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none pr-8" placeholder="Email address" type="email"/>
<button className="absolute right-0 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-900 transition-colors" type="submit">
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-neutral-200/60 text-xs text-neutral-400">
<p>© 2024 Lume Fragrances. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-neutral-900 transition-colors flex items-center gap-1" href="#">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> United States (USD)
                    </a>
<a className="hover:text-neutral-900 transition-colors" href="#">Terms</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Privacy</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
