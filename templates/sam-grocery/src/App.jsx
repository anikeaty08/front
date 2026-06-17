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
      

<nav className="sticky top-0 z-50 bg-white border-b border-zinc-200 py-3 px-4 md:px-8">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<div className="flex items-center gap-8">

<a className="font-display text-2xl md:text-3xl font-bold uppercase leading-none tracking-tight text-zinc-900" href="#">
                    Sam<br/><span className="text-[#C8102E]">Grocery</span>
</a>

<div className="hidden md:flex items-center gap-6 text-sm font-bold uppercase tracking-wider text-zinc-600">
<a className="text-[#C8102E] transition-colors" href="#">Our Story</a>
<a className="hover:text-[#C8102E] transition-colors" href="#">Sourcing</a>
<a className="hover:text-[#C8102E] transition-colors" href="#">Careers</a>
<a className="hover:text-[#C8102E] transition-colors" href="#">Community</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-bold uppercase tracking-wider hover:text-[#C8102E]" href="#">Locations</a>
<button className="bg-[#C8102E] hover:bg-red-700 text-white px-5 py-2.5 rounded-full font-bold uppercase tracking-wide text-xs md:text-sm transition-transform hover:-translate-y-0.5 shadow-sm flex items-center gap-2">
<iconify-icon icon="solar:shop-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    Shop Online
                </button>
</div>
</div>
</nav>

<header className="bg-[#F9F9F9] border-b border-zinc-200">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[500px]">

<div className="flex flex-col justify-center p-8 md:p-16 order-2 md:order-1">
<span className="text-[#C8102E] font-bold uppercase tracking-widest text-sm mb-4">Serving You Since 1994</span>
<h1 className="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.9] text-zinc-900 mb-6">
                    More Than <br/>Just A <br/><span className="text-zinc-400">Store.</span>
</h1>
<p className="text-zinc-600 text-lg mb-8 max-w-md font-medium">
                    We are a family-owned neighborhood staple dedicated to bringing fresh, locally sourced food to our community for over three decades.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-zinc-900 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-zinc-800 transition-all text-sm md:text-base">
                        Read Our History
                    </button>
<button className="bg-white text-zinc-900 border-2 border-zinc-900 px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-zinc-50 transition-all text-sm md:text-base">
                        Meet The Team
                    </button>
</div>
</div>

<div className="order-1 md:order-2 relative h-64 md:h-auto overflow-hidden">
<img alt="Old Grocery Storefront" className="absolute inset-0 w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-[#C8102E]/10 mix-blend-multiply"></div>
</div>
</div>
</header>

<div className="bg-white py-8 border-b border-zinc-200 sticky top-[73px] z-40 shadow-sm">
<div className="max-w-7xl mx-auto px-4">
<div className="flex items-center justify-center">
<div className="inline-flex bg-zinc-100 p-1 rounded-full border border-zinc-200 gap-1">
<div className="px-6 py-2 rounded-full bg-white shadow-sm text-zinc-900 font-bold uppercase tracking-wider text-xs md:text-sm border border-zinc-100 flex items-center gap-2">
<iconify-icon icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
                        Family Owned
                    </div>
<div className="px-6 py-2 rounded-full text-zinc-500 font-bold uppercase tracking-wider text-xs md:text-sm flex items-center gap-2">
<iconify-icon icon="solar:leaf-linear" width="18"></iconify-icon>
                        100% Local
                    </div>
<div className="hidden md:flex px-6 py-2 rounded-full text-zinc-500 font-bold uppercase tracking-wider text-xs md:text-sm items-center gap-2">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
                        Community First
                    </div>
</div>
</div>
</div>
</div>

<section className="py-16 bg-pattern">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="flex items-end justify-between mb-10">
<h2 className="font-display text-4xl font-bold uppercase text-zinc-900">Our Core Pillars</h2>
<a className="text-[#C8102E] font-bold uppercase tracking-wide text-sm hover:underline underline-offset-4" href="#">Learn More</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

<div className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-white shadow-sm border border-zinc-200">
<img alt="Local Farming" className="w-full h-2/3 object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1526470498-9ae73c665de8?w=800&amp;q=80"/>
<div className="absolute bottom-0 w-full h-1/3 bg-white p-6 flex flex-col justify-center border-t border-zinc-100">
<h3 className="font-display text-xl md:text-2xl font-bold uppercase text-zinc-900">Local Farms</h3>
<span className="text-zinc-500 text-xs font-bold uppercase tracking-wider mt-1">Supporting Neighbors</span>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-white shadow-sm border border-zinc-200">
<img alt="Quality Selection" className="w-full h-2/3 object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 w-full h-1/3 bg-white p-6 flex flex-col justify-center border-t border-zinc-100">
<h3 className="font-display text-xl md:text-2xl font-bold uppercase text-zinc-900">Fair Pricing</h3>
<span className="text-zinc-500 text-xs font-bold uppercase tracking-wider mt-1">Honest Value</span>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-white shadow-sm border border-zinc-200">
<img alt="Sustainability" className="w-full h-2/3 object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1515706886582-54c73c5eaf41?w=800&amp;q=80"/>
<div className="absolute bottom-0 w-full h-1/3 bg-white p-6 flex flex-col justify-center border-t border-zinc-100">
<h3 className="font-display text-xl md:text-2xl font-bold uppercase text-zinc-900">Zero Waste</h3>
<span className="text-zinc-500 text-xs font-bold uppercase tracking-wider mt-1">Eco Initiatives</span>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-white shadow-sm border border-zinc-200">
<img alt="Community" className="w-full h-2/3 object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1568724001336-2101ca2a0d8b?w=800&amp;q=80"/>
<div className="absolute bottom-0 w-full h-1/3 bg-white p-6 flex flex-col justify-center border-t border-zinc-100">
<h3 className="font-display text-xl md:text-2xl font-bold uppercase text-zinc-900">Charity</h3>
<span className="text-zinc-500 text-xs font-bold uppercase tracking-wider mt-1">Food Bank Partners</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#C8102E] py-20 px-4 text-white overflow-hidden relative">
<div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="font-display text-5xl md:text-6xl font-bold uppercase mb-6 tracking-tight">Join Our Mission</h2>
<p className="text-xl md:text-2xl font-medium mb-10 text-white/90">We believe everyone deserves access to healthy food. Join our team or volunteer with our community outreach programs.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-zinc-900 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-zinc-800 transition-all shadow-lg border-2 border-zinc-900">
                    View Careers
                </button>
<button className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-white hover:text-[#C8102E] transition-all">
                    Community Events
                </button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto py-16 px-4 md:px-8">
<div className="bg-zinc-100 rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
<div className="p-12 md:p-16 flex flex-col justify-center">
<div className="flex items-center gap-2 mb-4 text-[#C8102E]">
<iconify-icon icon="solar:quote-up-linear" width="20"></iconify-icon>
<span className="font-bold uppercase tracking-widest text-xs">A Note from Richard</span>
</div>
<h3 className="font-display text-4xl md:text-5xl font-bold uppercase text-zinc-900 mb-6 leading-[0.9]">
                    "Quality is<br/>Personal."
                </h3>
<p className="text-zinc-600 mb-8 font-medium italic">"When I started Sam Grocery thirty years ago, I wanted to create a place where I would be proud to shop for my own family. That standard hasn't changed."</p>
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-full bg-zinc-300 overflow-hidden">
<img alt="Richard Sam" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=320&amp;q=80"/>
</div>
<div className="flex flex-col">
<span className="font-display font-bold uppercase text-zinc-900 leading-none">Richard Sam</span>
<span className="text-xs font-bold uppercase tracking-wider text-zinc-500">Founder &amp; Owner</span>
</div>
</div>
</div>
<div className="h-64 md:h-auto relative">
<img alt="Richard in store" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1759197894183-ffffa3c7fcd4?w=1600&amp;q=80"/>
</div>
</div>
</section>

<footer className="bg-zinc-900 text-white pt-16 pb-8 border-t-8 border-[#C8102E] mt-auto">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="font-display text-3xl font-bold uppercase leading-none tracking-tight text-white mb-6 block" href="#">
                        Sam<br/><span className="text-[#C8102E]">Grocery</span>
</a>
<div className="flex gap-4">
<a className="bg-zinc-800 p-2 rounded-full hover:bg-[#C8102E] transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="bg-zinc-800 p-2 rounded-full hover:bg-[#C8102E] transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="bg-zinc-800 p-2 rounded-full hover:bg-[#C8102E] transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-display text-lg font-bold uppercase mb-6 text-zinc-400 tracking-wider">Company</h4>
<ul className="space-y-3 text-sm font-medium text-zinc-300">
<li><a className="hover:text-white" href="#">Our Story</a></li>
<li><a className="hover:text-white" href="#">Careers</a></li>
<li><a className="hover:text-white" href="#">Press &amp; Media</a></li>
<li><a className="hover:text-white" href="#">Sustainability</a></li>
</ul>
</div>
<div>
<h4 className="font-display text-lg font-bold uppercase mb-6 text-zinc-400 tracking-wider">Contact</h4>
<ul className="space-y-3 text-sm font-medium text-zinc-300">
<li><a className="hover:text-white" href="#">Contact Support</a></li>
<li><a className="hover:text-white" href="#">Store Locations</a></li>
<li><a className="hover:text-white" href="#">Vendor Partners</a></li>
<li><a className="hover:text-white" href="#">Feedback</a></li>
</ul>
</div>
<div>
<h4 className="font-display text-lg font-bold uppercase mb-6 text-zinc-400 tracking-wider">Legal</h4>
<ul className="space-y-3 text-sm font-medium text-zinc-300">
<li><a className="hover:text-white" href="#">Terms of Use</a></li>
<li><a className="hover:text-white" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white" href="#">Accessibility</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500 uppercase font-bold tracking-widest">
<p>© 2024 Sam Richard D Grocery. All rights reserved.</p>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
<span>Pottstown, PA</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
