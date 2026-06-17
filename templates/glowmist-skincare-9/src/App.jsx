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
      

<nav className="fixed top-0 w-full z-50 border-b border-stone-200/50 glass transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<button className="md:hidden text-stone-600">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>

<a className="text-2xl font-semibold tracking-tight text-rose-950 flex items-center gap-2" href="#">
<span className="iconify text-rose-400" data-icon="lucide:sparkles" data-width="20"></span>
                GlowMist
            </a>

<div className="hidden md:flex items-center gap-10 text-sm font-medium text-stone-500">
<a className="hover:text-rose-800 transition-colors" href="#shop">Shop All</a>
<a className="hover:text-rose-800 transition-colors" href="#ingredients">Ingredients</a>
<a className="hover:text-rose-800 transition-colors" href="#ritual">The Ritual</a>
<a className="hover:text-rose-800 transition-colors" href="#subscription">Subscription</a>
</div>

<div className="flex items-center gap-6">
<button className="text-stone-500 hover:text-rose-800 transition-colors">
<span className="iconify" data-icon="lucide:search" data-width="20"></span>
</button>
<button className="relative text-stone-500 hover:text-rose-800 transition-colors group">
<span className="iconify" data-icon="lucide:shopping-bag" data-width="20"></span>
<span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white text-[10px] font-medium flex items-center justify-center rounded-full group-hover:scale-110 transition-transform">2</span>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-stone-50 to-orange-50/50 -z-10"></div>
<div className="absolute top-0 right-0 w-1/2 h-full bg-rose-100/30 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="space-y-8 animate-fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100/50 border border-rose-200 text-rose-800 text-xs font-medium uppercase tracking-wide">
<span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span> New Formula
                </div>
<h1 className="text-5xl md:text-7xl text-stone-800 leading-[1.1]">
                    Reveal your <br/>
<span className="italic text-rose-900/80">inner radiance.</span>
</h1>
<p className="text-lg text-stone-500 font-light max-w-md leading-relaxed">
                    Clinically proven botanical skincare designed to hydrate, restore, and illuminate your complexion without harsh chemicals.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<button className="bg-rose-900 text-white px-8 py-4 rounded-full font-medium hover:bg-rose-800 transition-all shadow-glow hover:shadow-lg transform hover:-translate-y-0.5">
                        Shop Collection
                    </button>
<button className="bg-white text-stone-700 border border-stone-200 px-8 py-4 rounded-full font-medium hover:bg-stone-50 transition-all flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:play-circle" data-width="18"></span>
                        Watch the Ritual
                    </button>
</div>
<div className="flex items-center gap-4 pt-8 border-t border-stone-200/60">
<div className="flex -space-x-3">
<img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<p className="text-sm text-stone-500">Loved by <span className="font-semibold text-stone-800">15,000+</span> glowing faces</p>
</div>
</div>
<div className="relative h-[600px] hidden md:block">
<div className="absolute inset-0 bg-stone-200 rounded-t-[200px] rounded-b-[40px] overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-700 ease-out">
<img className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>

<div className="absolute bottom-10 -left-10 bg-white/90 backdrop-blur p-4 pr-6 rounded-2xl shadow-xl flex items-center gap-4 border border-white/50 animate-fade-in" style={{animationDelay: '0.2s'}}>
<div className="w-16 h-16 bg-rose-50 rounded-xl flex items-center justify-center">
<img className="h-14 mix-blend-multiply" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div>
<p className="text-xs text-rose-600 font-semibold uppercase tracking-wide mb-1">Best Seller</p>
<h4 className="font-serif text-lg text-stone-800">Velvet Dew Serum</h4>
<p className="text-sm text-stone-500">$48.00</p>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-white" id="ingredients">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-rose-500 text-sm font-semibold tracking-widest uppercase mb-3 block">Clean Science</span>
<h2 className="text-4xl text-stone-800 mb-4">Powered by nature, <br/>backed by science.</h2>
<p className="text-stone-500 font-light">We formulate with active botanicals at clinical levels to ensure real results without compromise.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 rounded-3xl bg-stone-50 border border-stone-100 hover:border-rose-100 hover:shadow-glow transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-white border border-stone-100 shadow-sm flex items-center justify-center mb-6 text-rose-400 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:droplet" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-stone-800 mb-3">Hyaluronic Acid</h3>
<p className="text-sm text-stone-500 leading-relaxed">Multi-molecular weight hydration that penetrates deep into the dermis for instant plumping and long-lasting moisture retention.</p>
</div>

<div className="group p-8 rounded-3xl bg-stone-50 border border-stone-100 hover:border-rose-100 hover:shadow-glow transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-white border border-stone-100 shadow-sm flex items-center justify-center mb-6 text-emerald-600 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:leaf" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-stone-800 mb-3">Bakuchiol</h3>
<p className="text-sm text-stone-500 leading-relaxed">A gentle, plant-based retinol alternative that smooths fine lines and uneven texture without the irritation or sun sensitivity.</p>
</div>

<div className="group p-8 rounded-3xl bg-stone-50 border border-stone-100 hover:border-rose-100 hover:shadow-glow transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-white border border-stone-100 shadow-sm flex items-center justify-center mb-6 text-amber-500 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:sun" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-stone-800 mb-3">Vitamin C+</h3>
<p className="text-sm text-stone-500 leading-relaxed">Stabilized L-Ascorbic acid combined with Ferulic acid to brighten complexion, fade dark spots, and protect against pollution.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="shop">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-card border border-stone-100">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative group">
<div className="absolute inset-0 bg-rose-100 rounded-[2rem] transform rotate-3 group-hover:rotate-1 transition-transform duration-500"></div>
<img alt="The Daily Set" className="relative rounded-[2rem] w-full shadow-lg object-cover h-[500px]" src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>

<div className="absolute top-6 left-6 flex gap-2">
<span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-stone-800 uppercase tracking-wide">Bundle &amp; Save</span>
</div>
</div>

<div className="space-y-8">
<div>
<div className="flex items-center gap-2 text-amber-400 mb-3 text-sm">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="text-stone-400 ml-1 text-xs">(428 reviews)</span>
</div>
<h2 className="text-4xl text-stone-800 mb-4">The Complete Glow Routine</h2>
<p className="text-stone-500 text-lg font-light leading-relaxed">
                                Our 3-step signature system designed to cleanse, treat, and hydrate. Perfect for all skin types, including sensitive skin.
                            </p>
</div>

<div className="space-y-3">
<div className="p-4 rounded-2xl bg-stone-50 border border-stone-100">
<h5 className="flex items-center gap-3 text-stone-800 font-medium text-sm">
<span className="w-6 h-6 rounded-full bg-rose-200 text-rose-800 flex items-center justify-center text-xs">1</span>
                                    Purify Gel Cleanser
                                    <span className="ml-auto text-xs text-stone-400">AM / PM</span>
</h5>
</div>
<div className="p-4 rounded-2xl bg-stone-50 border border-stone-100">
<h5 className="flex items-center gap-3 text-stone-800 font-medium text-sm">
<span className="w-6 h-6 rounded-full bg-rose-200 text-rose-800 flex items-center justify-center text-xs">2</span>
                                    Velvet Dew Serum
                                    <span className="ml-auto text-xs text-stone-400">AM</span>
</h5>
</div>
<div className="p-4 rounded-2xl bg-stone-50 border border-stone-100">
<h5 className="flex items-center gap-3 text-stone-800 font-medium text-sm">
<span className="w-6 h-6 rounded-full bg-rose-200 text-rose-800 flex items-center justify-center text-xs">3</span>
                                    Cloud Moisture Cream
                                    <span className="ml-auto text-xs text-stone-400">AM / PM</span>
</h5>
</div>
</div>

<div className="pt-6 border-t border-stone-100">
<div className="flex items-center justify-between mb-6">
<span className="text-3xl font-serif text-stone-800">$85.00</span>
<span className="text-stone-400 line-through text-lg">$110.00</span>
</div>
<div className="flex gap-4">
<div className="flex items-center border border-stone-200 rounded-full h-14 px-4 gap-4">
<button className="text-stone-400 hover:text-stone-800 transition-colors"><span className="iconify" data-icon="lucide:minus" data-width="16"></span></button>
<span className="font-medium text-stone-800 w-4 text-center">1</span>
<button className="text-stone-400 hover:text-stone-800 transition-colors"><span className="iconify" data-icon="lucide:plus" data-width="16"></span></button>
</div>
<button className="flex-1 bg-rose-900 text-white rounded-full h-14 font-medium hover:bg-rose-800 transition-all shadow-lg shadow-rose-900/10 flex items-center justify-center gap-2">
                                    Add to Cart
                                </button>
</div>
<p className="mt-4 text-xs text-stone-400 text-center flex items-center justify-center gap-1">
<span className="iconify" data-icon="lucide:check-circle" data-width="12"></span> Free shipping &amp; 30-day returns
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="subscription">
<div className="absolute inset-0 bg-stone-900 text-stone-200 -z-20"></div>
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 -z-10"></div>
<div className="max-w-4xl mx-auto px-6 text-center text-white mb-16">
<h2 className="text-4xl mb-4">Never run out of glow.</h2>
<p className="text-stone-400 text-lg font-light">Subscribe to the GlowBox and save 20% on every order. Modify or cancel anytime.</p>
</div>
<div className="max-w-md mx-auto px-6">
<div className="bg-white rounded-3xl p-2 shadow-2xl">

<div className="flex p-1 bg-stone-100 rounded-2xl mb-6 relative">
<div className="w-1/2 h-full absolute left-0 top-0 bg-white rounded-xl shadow-sm m-1 transition-all duration-300 translate-x-0"></div>
<button className="flex-1 relative z-10 py-3 text-sm font-medium text-stone-800 text-center">One-time purchase</button>
<button className="flex-1 relative z-10 py-3 text-sm font-medium text-stone-500 text-center hover:text-stone-800">Subscribe &amp; Save</button>
</div>

<div className="px-6 pb-8 space-y-4">
<label className="block relative cursor-pointer group">
<input checked="" className="custom-radio sr-only" name="plan" type="radio"/>
<div className="flex items-center justify-between p-4 border border-rose-200 bg-rose-50/50 rounded-xl transition-all group-hover:border-rose-300">
<div className="flex items-center gap-4">
<div className="w-5 h-5 rounded-full border border-stone-300 bg-white flex items-center justify-center">
<div className="radio-dot w-2.5 h-2.5 rounded-full bg-rose-600 opacity-0 transform scale-50 transition-all"></div>
</div>
<div>
<div className="font-medium text-stone-800">Deliver every 30 days</div>
<div className="text-xs text-rose-600 font-medium">Most Popular</div>
</div>
</div>
<span className="text-stone-800 font-semibold">-20%</span>
</div>
</label>
<label className="block relative cursor-pointer group">
<input className="custom-radio sr-only" name="plan" type="radio"/>
<div className="flex items-center justify-between p-4 border border-stone-200 rounded-xl transition-all hover:bg-stone-50">
<div className="flex items-center gap-4">
<div className="w-5 h-5 rounded-full border border-stone-300 bg-white flex items-center justify-center">
<div className="radio-dot w-2.5 h-2.5 rounded-full bg-rose-600 opacity-0 transform scale-50 transition-all"></div>
</div>
<div>
<div className="font-medium text-stone-800">Deliver every 60 days</div>
<div className="text-xs text-stone-400">Best for light users</div>
</div>
</div>
<span className="text-stone-800 font-semibold">-15%</span>
</div>
</label>
<div className="pt-6 border-t border-stone-100 mt-6">
<div className="flex justify-between items-end mb-6">
<div>
<p className="text-xs text-stone-400 uppercase tracking-wide">Total today</p>
<p className="text-3xl font-serif text-stone-800">$68.00</p>
</div>
<div className="text-right">
<p className="text-xs text-stone-400 line-through">$85.00</p>
<p className="text-sm text-emerald-600 font-medium">You save $17.00</p>
</div>
</div>
<button className="w-full bg-stone-900 text-white rounded-full py-4 font-medium hover:bg-stone-800 transition-all flex items-center justify-center gap-2 group">
                            Start Subscription
                            <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="18"></span>
</button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-stone-100 pt-20 pb-10 border-t border-stone-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-2xl font-serif font-medium text-rose-950 flex items-center gap-2 mb-6" href="#">
<span className="iconify text-rose-400" data-icon="lucide:sparkles" data-width="20"></span>
                        GlowMist
                    </a>
<p className="text-stone-500 text-sm leading-relaxed mb-6">
                        Clean, conscious skincare formulated to bring out your natural best. Cruelty-free and vegan.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-stone-400 hover:text-rose-600 hover:shadow-sm transition-all" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="16"></span>
</a>
<a className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-stone-400 hover:text-rose-600 hover:shadow-sm transition-all" href="#">
<span className="iconify" data-icon="lucide:facebook" data-width="16"></span>
</a>
<a className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-stone-400 hover:text-rose-600 hover:shadow-sm transition-all" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="16"></span>
</a>
</div>
</div>
<div>
<h4 className="font-semibold text-stone-800 mb-6">Shop</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-rose-800 transition-colors" href="#">Best Sellers</a></li>
<li><a className="hover:text-rose-800 transition-colors" href="#">Sets &amp; Bundles</a></li>
<li><a className="hover:text-rose-800 transition-colors" href="#">Serums</a></li>
<li><a className="hover:text-rose-800 transition-colors" href="#">Moisturizers</a></li>
<li><a className="hover:text-rose-800 transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-stone-800 mb-6">About</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-rose-800 transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-rose-800 transition-colors" href="#">Ingredients</a></li>
<li><a className="hover:text-rose-800 transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-rose-800 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-rose-800 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-stone-800 mb-6">Stay Glowing</h4>
<p className="text-sm text-stone-500 mb-4">Join our newsletter for 15% off your first order.</p>
<div className="flex gap-2">
<input className="flex-1 bg-white border border-stone-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-rose-300 transition-colors" placeholder="Email address" type="email"/>
<button className="bg-rose-900 text-white px-4 rounded-lg hover:bg-rose-800 transition-colors">
<span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>
</div>
<div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400">
<p>© 2024 GlowMist Skincare. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-stone-600" href="#">Privacy Policy</a>
<a className="hover:text-stone-600" href="#">Terms of Service</a>
<a className="hover:text-stone-600" href="#">Shipping Policy</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
