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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white shadow-sm group-hover:bg-emerald-700 transition-colors">
<span className="iconify" data-icon="lucide:sprout" data-strokeWidth="1.5" data-width="18"></span>
</div>
<span className="text-lg font-semibold text-slate-900 tracking-tighter">RH VEGETABLES</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-emerald-600 transition-colors" href="#about">About</a>
<a className="hover:text-emerald-600 transition-colors" href="#products">Products</a>
<a className="hover:text-emerald-600 transition-colors" href="#process">Process</a>
</div>
<a className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 transition-all shadow-sm ring-1 ring-slate-900 hover:shadow-md" href="tel:+918209157948">
<span className="iconify" data-icon="lucide:phone" data-strokeWidth="1.5" data-width="14"></span>
<span>Call Now</span>
</a>

<button className="md:hidden text-slate-900">
<span className="iconify" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="24"></span>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
<div className="absolute top-20 left-10 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
<div className="absolute top-40 right-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-medium text-slate-600 mb-8">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Direct from Farm to Market
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1]">
                Freshness defined by <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Nature's Timeline.</span>
</h1>
<p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
                RH Vegetables connects local farmers with businesses and households. Under the leadership of <strong className="text-slate-900 font-medium">Mukesh Prajapati</strong>, we ensure premium quality produce reaches your doorstep daily.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2" href="tel:+918209157948">
<span className="iconify" data-icon="lucide:phone-call" data-strokeWidth="1.5" data-width="18"></span>
<span>Order: +91 8209157948</span>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2" href="#products">
                    View Catalog
                    <span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16"></span>
</a>
</div>
</div>
</section>

<section className="border-y border-slate-100 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col items-center justify-center text-center gap-2">
<span className="iconify text-emerald-600 mb-2" data-icon="lucide:clock" data-strokeWidth="1.5" data-width="24"></span>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">24h</h3>
<p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Harvest to Delivery</p>
</div>
<div className="flex flex-col items-center justify-center text-center gap-2">
<span className="iconify text-emerald-600 mb-2" data-icon="lucide:award" data-strokeWidth="1.5" data-width="24"></span>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">100%</h3>
<p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Quality Guarantee</p>
</div>
<div className="flex flex-col items-center justify-center text-center gap-2">
<span className="iconify text-emerald-600 mb-2" data-icon="lucide:users" data-strokeWidth="1.5" data-width="24"></span>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">50+</h3>
<p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Partner Farmers</p>
</div>
<div className="flex flex-col items-center justify-center text-center gap-2">
<span className="iconify text-emerald-600 mb-2" data-icon="lucide:truck" data-strokeWidth="1.5" data-width="24"></span>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">Daily</h3>
<p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Supply Chain</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="products">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Our Produce</h2>
<p className="text-slate-500 max-w-md">We supply a wide range of seasonal and staple vegetables, hand-picked for quality and freshness.</p>
</div>
<a className="text-emerald-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all" href="tel:+918209157948">
                    Inquire for bulk rates <span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative rounded-xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-all duration-300 hover:border-emerald-200">
<div className="absolute top-6 right-6 p-2 bg-emerald-50 rounded-full text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:carrot" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div className="h-32 w-full bg-slate-50 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
<img alt="Vegetables" className="object-cover w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Root Vegetables</h3>
<p className="text-sm text-slate-500 mb-4">Carrots, potatoes, beets, and radishes sourced from organic soil farms.</p>
<div className="flex items-center text-xs font-medium text-slate-400 gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> In Stock
                    </div>
</div>

<div className="group relative rounded-xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-all duration-300 hover:border-emerald-200">
<div className="absolute top-6 right-6 p-2 bg-emerald-50 rounded-full text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:salad" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div className="h-32 w-full bg-slate-50 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
<img alt="Leafy Greens" className="object-cover w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Leafy Greens</h3>
<p className="text-sm text-slate-500 mb-4">Spinach, lettuce, kale, and coriander delivered with morning dew freshness.</p>
<div className="flex items-center text-xs font-medium text-slate-400 gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> In Stock
                    </div>
</div>

<div className="group relative rounded-xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-all duration-300 hover:border-emerald-200">
<div className="absolute top-6 right-6 p-2 bg-emerald-50 rounded-full text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:apple" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div className="h-32 w-full bg-slate-50 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
<img alt="Fruits" className="object-cover w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Seasonal Fruits</h3>
<p className="text-sm text-slate-500 mb-4">Premium selection of seasonal fruits perfect for retail or wholesale.</p>
<div className="flex items-center text-xs font-medium text-slate-400 gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> In Stock
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="about">
<div className="max-w-3xl mx-auto px-6">
<div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm text-center">
<div className="w-16 h-16 bg-slate-100 rounded-full mx-auto flex items-center justify-center text-slate-400 mb-6">
<span className="iconify" data-icon="lucide:user" data-strokeWidth="1.5" data-width="32"></span>
</div>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-2">Mukesh Prajapati</h2>
<p className="text-xs font-medium text-emerald-600 uppercase tracking-widest mb-6">Proprietor &amp; Founder</p>
<p className="text-slate-500 mb-8 leading-relaxed">
                    "At RH Vegetables, we believe that quality is not just a promise, but a habit. We work tirelessly to bridge the gap between hard-working farmers and quality-conscious customers. Every delivery carries my personal guarantee of freshness."
                </p>
<div className="flex items-center justify-center gap-4">
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-emerald-600 transition-colors" href="tel:+918209157948">
<span className="iconify" data-icon="lucide:phone" data-strokeWidth="1.5" data-width="16"></span>
                        +91 8209157948
                     </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full blur-[100px] opacity-20"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Ready to stock fresh?</h2>
<p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                Whether you are a restaurant owner, a retailer, or looking for bulk supply, we are just a phone call away.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 rounded-lg bg-emerald-500 text-white text-base font-semibold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2" href="tel:+918209157948">
<span className="iconify" data-icon="lucide:phone" data-strokeWidth="1.5" data-width="20"></span>
                    Call Mukesh: +91 8209157948
                </a>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:sprout" data-strokeWidth="1.5" data-width="14"></span>
</div>
<span className="text-sm font-semibold text-slate-900 tracking-tight">RH VEGETABLES</span>
</div>
<p className="text-xs text-slate-400">
                © 2023 RH Vegetables. All rights reserved.
            </p>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<span className="iconify" data-icon="lucide:instagram" data-strokeWidth="1.5" data-width="20"></span>
</a>
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-strokeWidth="1.5" data-width="20"></span>
</a>
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="tel:+918209157948">
<span className="iconify" data-icon="lucide:phone" data-strokeWidth="1.5" data-width="20"></span>
</a>
</div>
</div>
</footer>

    </>
  );
}
