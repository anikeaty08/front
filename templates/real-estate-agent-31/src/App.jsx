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
      

<nav className="fixed top-0 left-0 w-full z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-zinc-900 text-white flex items-center justify-center rounded-lg group-hover:rotate-12 transition-transform duration-300">
<iconify-icon icon="solar:city-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight uppercase">Usama Wajid.</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Buy</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Sell</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Rent</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Journal</a>
</div>
<div className="flex items-center gap-4">
<button className="text-zinc-900 hover:text-zinc-600 md:hidden">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<a className="hidden md:flex items-center gap-2 text-sm font-medium bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-all hover:shadow-lg hover:shadow-zinc-900/20" href="#">
<span>Contact Agent</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</nav>

<header className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 relative overflow-hidden">

<div className="absolute inset-0 z-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 text-xs text-zinc-600 mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                New properties added in New York
            </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-zinc-900 mb-6">
                Curating homes for the <br className="hidden md:block"/> modern lifestyle.
            </h1>
<p className="text-lg text-zinc-500 mb-10 leading-relaxed max-w-xl mx-auto font-light">
                Discover exclusive real estate opportunities curated by Usama Wajid. We blend market intelligence with design-forward living.
            </p>

<div className="bg-white p-2 rounded-2xl shadow-xl shadow-zinc-200/50 border border-zinc-200 max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-2">
<div className="flex-1 flex items-center gap-3 px-4 w-full h-12 md:h-auto border-b md:border-b-0 border-zinc-100">
<iconify-icon className="text-zinc-400" icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
<input className="w-full text-sm outline-none text-zinc-700 placeholder-zinc-400 bg-transparent" placeholder="Location, Zip, or Address" type="text"/>
</div>
<div className="w-px h-8 bg-zinc-200 hidden md:block"></div>
<div className="flex-1 flex items-center gap-3 px-4 w-full h-12 md:h-auto border-b md:border-b-0 border-zinc-100 relative group cursor-pointer">
<iconify-icon className="text-zinc-400" icon="solar:home-angle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<div className="flex-1 text-sm text-zinc-700 flex items-center justify-between">
<span>Property Type</span>
<iconify-icon className="text-zinc-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>

<div className="absolute top-full left-0 w-full bg-white border border-zinc-100 rounded-xl shadow-lg mt-2 p-1 hidden group-hover:block z-20">
<div className="p-2 hover:bg-zinc-50 rounded-lg text-sm text-zinc-600 cursor-pointer">House</div>
<div className="p-2 hover:bg-zinc-50 rounded-lg text-sm text-zinc-600 cursor-pointer">Apartment</div>
<div className="p-2 hover:bg-zinc-50 rounded-lg text-sm text-zinc-600 cursor-pointer">Villa</div>
</div>
</div>
<button className="bg-zinc-900 text-white h-10 w-full md:w-auto px-6 rounded-xl text-sm font-medium hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">
                    Search
                </button>
</div>
</div>
</header>

<section className="py-12 border-y border-zinc-200 bg-white">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:text-left">
<h3 className="text-3xl font-semibold tracking-tight text-zinc-900">$150M+</h3>
<p className="text-sm text-zinc-500 mt-1">Property Sold</p>
</div>
<div className="text-center md:text-left">
<h3 className="text-3xl font-semibold tracking-tight text-zinc-900">12+</h3>
<p className="text-sm text-zinc-500 mt-1">Years Experience</p>
</div>
<div className="text-center md:text-left">
<h3 className="text-3xl font-semibold tracking-tight text-zinc-900">850+</h3>
<p className="text-sm text-zinc-500 mt-1">Happy Clients</p>
</div>
<div className="text-center md:text-left">
<h3 className="text-3xl font-semibold tracking-tight text-zinc-900">Top 1%</h3>
<p className="text-sm text-zinc-500 mt-1">Agency Ranking</p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-50">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 mb-2">Featured Residences</h2>
<p className="text-zinc-500 font-light max-w-md">Handpicked properties that represent the pinnacle of design and comfort.</p>
</div>
<a className="inline-flex items-center gap-1 text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors border-b border-zinc-900 hover:border-zinc-600 pb-0.5" href="#">
                    View all listings
                    <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="House" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-semibold px-3 py-1.5 rounded-full text-zinc-900">
                            FOR SALE
                        </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900">The Highland Villa</h3>
<p className="text-sm text-zinc-500 mt-1">Beverly Hills, CA 90210</p>
</div>
<p className="text-lg font-semibold tracking-tight text-zinc-900">$4.2M</p>
</div>
<div className="flex items-center gap-6 border-t border-zinc-100 pt-4">
<div className="flex items-center gap-1.5 text-zinc-600">
<iconify-icon icon="solar:bed-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-xs font-medium">4 Beds</span>
</div>
<div className="flex items-center gap-1.5 text-zinc-600">
<iconify-icon icon="solar:bath-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-xs font-medium">3 Baths</span>
</div>
<div className="flex items-center gap-1.5 text-zinc-600">
<iconify-icon icon="solar:ruler-angular-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-xs font-medium">3,200 sqft</span>
</div>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="House" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2653&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-semibold px-3 py-1.5 rounded-full text-zinc-900">
                            FOR SALE
                        </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900">Modern Loft</h3>
<p className="text-sm text-zinc-500 mt-1">SoHo, New York, NY</p>
</div>
<p className="text-lg font-semibold tracking-tight text-zinc-900">$2.8M</p>
</div>
<div className="flex items-center gap-6 border-t border-zinc-100 pt-4">
<div className="flex items-center gap-1.5 text-zinc-600">
<iconify-icon icon="solar:bed-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-xs font-medium">2 Beds</span>
</div>
<div className="flex items-center gap-1.5 text-zinc-600">
<iconify-icon icon="solar:bath-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-xs font-medium">2 Baths</span>
</div>
<div className="flex items-center gap-1.5 text-zinc-600">
<iconify-icon icon="solar:ruler-angular-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-xs font-medium">1,850 sqft</span>
</div>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="House" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-zinc-900/90 backdrop-blur text-xs font-semibold px-3 py-1.5 rounded-full text-white">
                            PENDING
                        </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900">Oakwood Estate</h3>
<p className="text-sm text-zinc-500 mt-1">Austin, Texas 78701</p>
</div>
<p className="text-lg font-semibold tracking-tight text-zinc-900">$5.1M</p>
</div>
<div className="flex items-center gap-6 border-t border-zinc-100 pt-4">
<div className="flex items-center gap-1.5 text-zinc-600">
<iconify-icon icon="solar:bed-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-xs font-medium">6 Beds</span>
</div>
<div className="flex items-center gap-1.5 text-zinc-600">
<iconify-icon icon="solar:bath-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-xs font-medium">5 Baths</span>
</div>
<div className="flex items-center gap-1.5 text-zinc-600">
<iconify-icon icon="solar:ruler-angular-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-xs font-medium">4,500 sqft</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-zinc-200">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="pr-0 md:pr-12">
<span className="text-xs font-semibold tracking-wider text-zinc-500 uppercase mb-2 block">Our Expertise</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-6">Comprehensive services <br/> for every stage.</h2>
<p className="text-zinc-500 font-light mb-8 leading-relaxed">
                        Whether you are buying your first home, selling a luxury estate, or investing in commercial properties, Usama Wajid provides bespoke solutions tailored to your financial goals.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-900" icon="solar:home-smile-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-zinc-900">Residential Buying</h4>
<p className="text-sm text-zinc-500 mt-1">Access to off-market listings and expert negotiation strategies.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-900" icon="solar:graph-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-zinc-900">Market Analysis</h4>
<p className="text-sm text-zinc-500 mt-1">Data-driven insights to maximize your investment returns.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-900" icon="solar:key-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-zinc-900">Property Management</h4>
<p className="text-sm text-zinc-500 mt-1">Seamless management for your rental portfolio.</p>
</div>
</div>
</div>
</div>
<div className="relative h-full min-h-[400px]">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-200 to-zinc-50 rounded-2xl transform rotate-3"></div>
<img alt="Interior" className="relative rounded-2xl shadow-xl shadow-zinc-200 w-full h-full object-cover" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&amp;w=2573&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-900 text-white relative overflow-hidden">
<div className="absolute top-0 right-0 p-12 opacity-10">
<iconify-icon icon="solar:quote-up-square-linear" strokeWidth="1.5" width="200"></iconify-icon>
</div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-2xl md:text-4xl font-medium leading-relaxed tracking-tight mb-8">
                "Usama's attention to detail and understanding of the luxury market is unmatched. He didn't just find us a house; he found us a home that perfectly fits our lifestyle."
            </h2>
<div className="flex items-center justify-center gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-700 overflow-hidden">
<img alt="Client" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-left">
<p className="text-sm font-semibold text-white">Jonathan Davis</p>
<p className="text-xs text-zinc-400">Tech Entrepreneur</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-white">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">Ready to find your dream home?</h2>
<p className="text-zinc-500 mb-8 font-light">Join our exclusive list to get notified about new premium listings before they hit the market.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm text-zinc-900 outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-300 transition-all" placeholder="Enter your email address" type="email"/>
<button className="bg-zinc-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-900/10" type="button">
                    Subscribe
                </button>
</form>
</div>
</section>

<footer className="bg-white border-t border-zinc-100 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 md:col-span-2 pr-8">
<div className="flex items-center gap-2 mb-6">
<iconify-icon icon="solar:city-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-semibold uppercase tracking-tight">Usama Wajid.</span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed max-w-xs">
                    Redefining real estate with a focus on modern design, transparency, and exceptional client service.
                </p>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-4">Properties</h4>
<ul className="space-y-2">
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Residential</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Commercial</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">New Developments</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Sold Listings</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-4">Company</h4>
<ul className="space-y-2">
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">About Usama</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Careers</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Press</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-4">Social</h4>
<ul className="space-y-2">
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Instagram</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">LinkedIn</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Twitter</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-zinc-400">© 2023 Usama Wajid Real Estate. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-[10px] text-zinc-400 hover:text-zinc-600" href="#">Privacy Policy</a>
<a className="text-[10px] text-zinc-400 hover:text-zinc-600" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
