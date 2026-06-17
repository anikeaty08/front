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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-lg border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16 lg:h-20">
<a className="flex items-center gap-2" href="#home">
<span className="text-xl lg:text-2xl font-semibold tracking-tight text-amber-900" style={{fontFamily: '\'Playfair Display\', serif'}}>MOC</span>
<span className="hidden sm:block text-xs text-stone-500">More Over Coffee</span>
</a>
<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-stone-600 hover:text-amber-800 transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-stone-600 hover:text-amber-800 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-stone-600 hover:text-amber-800 transition-colors" href="#menu">Menu</a>
<a className="text-sm font-medium text-stone-600 hover:text-amber-800 transition-colors" href="#gallery">Gallery</a>
<a className="text-sm font-medium text-stone-600 hover:text-amber-800 transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-stone-600 hover:text-amber-800 transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:flex items-center gap-2 text-sm text-stone-600 hover:text-amber-800 transition-colors" href="tel:07737283668">
<svg aria-hidden="true" data-icon="lucide:phone" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>077372 83668</span>
</a>
<a className="bg-amber-800 hover:bg-amber-900 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors" href="#">
                        Order Now
                    </a>
<button className="lg:hidden p-2 text-stone-600" id="mobileMenuBtn">
<svg aria-hidden="true" data-icon="lucide:menu" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>

<div className="hidden lg:hidden bg-stone-50 border-t border-stone-200" id="mobileMenu">
<div className="px-4 py-4 space-y-3">
<a className="block text-sm font-medium text-stone-600 hover:text-amber-800 py-2" href="#home">Home</a>
<a className="block text-sm font-medium text-stone-600 hover:text-amber-800 py-2" href="#about">About</a>
<a className="block text-sm font-medium text-stone-600 hover:text-amber-800 py-2" href="#menu">Menu</a>
<a className="block text-sm font-medium text-stone-600 hover:text-amber-800 py-2" href="#gallery">Gallery</a>
<a className="block text-sm font-medium text-stone-600 hover:text-amber-800 py-2" href="#reviews">Reviews</a>
<a className="block text-sm font-medium text-stone-600 hover:text-amber-800 py-2" href="#contact">Contact</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-16 lg:pt-20" id="home">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-stone-100"></div>
<div className="absolute top-20 right-10 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl"></div>
<div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div className="text-center lg:text-left">
<div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-800 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
<svg aria-hidden="true" data-icon="lucide:star" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>4.1 Rating • 1,068+ Reviews</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight text-stone-900 mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>
                        Brewed for<br/>
<span className="text-amber-800">Comfort</span>,<br/>
                        Crafted for<br/>
<span className="italic">Conversations</span>
</h1>
<p className="text-base lg:text-lg text-stone-600 mb-8 max-w-lg mx-auto lg:mx-0">
                        Experience the perfect blend of artisanal coffee, delicious food, and cozy ambiance at Kalyani, West Bengal.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
<a className="inline-flex items-center justify-center gap-2 bg-amber-800 hover:bg-amber-900 text-white text-sm font-medium px-6 py-3 rounded-full transition-all hover:shadow-lg hover:shadow-amber-800/20" href="#menu">
<svg aria-hidden="true" data-icon="lucide:utensils" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20m14-7V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2zm0 0v7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            View Menu
                        </a>
<a className="inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-50 text-stone-800 text-sm font-medium px-6 py-3 rounded-full border border-stone-200 transition-all" href="#">
<svg aria-hidden="true" data-icon="lucide:shopping-bag" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
                            Order Online
                        </a>
<a className="inline-flex items-center justify-center gap-2 text-amber-800 hover:text-amber-900 text-sm font-medium px-4 py-3 transition-colors" href="#contact">
<svg aria-hidden="true" data-icon="lucide:calendar" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg>
                            Book a Table
                        </a>
</div>

<div className="grid grid-cols-3 gap-3 sm:gap-4">
<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-stone-100">
<div className="flex items-center gap-1.5 text-amber-600 mb-1">
<svg aria-hidden="true" data-icon="lucide:indian-rupee" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M6 3h12M6 8h12M6 13l8.5 8M6 13h3m0 0c6.667 0 6.667-10 0-10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xs font-medium">Price</span>
</div>
<p className="text-sm font-medium text-stone-800">₹200–₹400</p>
<p className="text-xs text-stone-500">per person</p>
</div>
<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-stone-100">
<div className="flex items-center gap-1.5 text-amber-600 mb-1">
<svg aria-hidden="true" data-icon="lucide:clock" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
<span className="text-xs font-medium">Hours</span>
</div>
<p className="text-sm font-medium text-stone-800">Open Daily</p>
<p className="text-xs text-stone-500">till 11:30 PM</p>
</div>
<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-stone-100">
<div className="flex items-center gap-1.5 text-amber-600 mb-1">
<svg aria-hidden="true" data-icon="lucide:map-pin" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
<span className="text-xs font-medium">Location</span>
</div>
<p className="text-sm font-medium text-stone-800">Kalyani</p>
<p className="text-xs text-stone-500">Nadia, WB</p>
</div>
</div>
</div>
<div className="relative">
<div className="relative aspect-square max-w-lg mx-auto">
<div className="absolute inset-4 bg-gradient-to-br from-amber-200 to-orange-200 rounded-3xl transform rotate-3"></div>
<div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-stone-100 rounded-3xl overflow-hidden border border-amber-200/50 shadow-2xl shadow-amber-900/10">
<img alt="Coffee at MOC" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&amp;h=600&amp;fit=crop"/>
</div>

<div className="absolute -bottom-4 -left-4 sm:-left-8 bg-white rounded-2xl p-4 shadow-xl shadow-stone-900/10 border border-stone-100">
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
<svg aria-hidden="true" data-icon="lucide:coffee" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v2m4-2v2m2 4a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1M6 2v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<p className="text-sm font-medium text-stone-800">Bestseller</p>
<p className="text-xs text-stone-500">Cheese Burst Pizza</p>
</div>
</div>
</div>

<div className="absolute -top-4 -right-4 sm:-right-8 bg-white rounded-2xl p-4 shadow-xl shadow-stone-900/10 border border-stone-100">
<div className="flex items-center gap-2">
<div className="flex">
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-sm font-semibold text-stone-800">4.1</span>
</div>
<p className="text-xs text-stone-500 mt-1">1,068+ reviews</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<span className="text-xs font-medium text-amber-700 uppercase tracking-wider">Customer Favorites</span>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-stone-900 mt-2" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    Our Bestsellers
                </h2>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-stone-50 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-stone-900/5 transition-all duration-300">
<div className="aspect-square overflow-hidden">
<img alt="Cheese Burst Pizza" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-medium text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">Bestseller</span>
</div>
<h3 className="text-base font-medium text-stone-800">Cheese Burst Pizza</h3>
<p className="text-sm text-stone-500 mt-1">Loaded with gooey cheese</p>
<p className="text-lg font-semibold text-amber-800 mt-2">₹399</p>
</div>
</div>

<div className="group bg-stone-50 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-stone-900/5 transition-all duration-300">
<div className="aspect-square overflow-hidden">
<img alt="American Corn Lollipop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-medium text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">Bestseller</span>
</div>
<h3 className="text-base font-medium text-stone-800">American Corn Lollipop</h3>
<p className="text-sm text-stone-500 mt-1">Crispy &amp; flavorful</p>
<p className="text-lg font-semibold text-amber-800 mt-2">₹269</p>
</div>
</div>

<div className="group bg-stone-50 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-stone-900/5 transition-all duration-300">
<div className="aspect-square overflow-hidden">
<img alt="Paneer Tandoori Sandwich" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-medium text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">Bestseller</span>
</div>
<h3 className="text-base font-medium text-stone-800">Paneer Tandoori Sandwich</h3>
<p className="text-sm text-stone-500 mt-1">Grilled to perfection</p>
<p className="text-lg font-semibold text-amber-800 mt-2">₹179</p>
</div>
</div>

<div className="group bg-stone-50 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-stone-900/5 transition-all duration-300">
<div className="aspect-square overflow-hidden">
<img alt="Roasted Garlic Soup" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1547592180-85f173990554?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-medium text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">Bestseller</span>
</div>
<h3 className="text-base font-medium text-stone-800">Garlic Mushroom Soup</h3>
<p className="text-sm text-stone-500 mt-1">Rich &amp; creamy</p>
<p className="text-lg font-semibold text-amber-800 mt-2">₹169</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-gradient-to-b from-stone-50 to-amber-50/30" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="relative order-2 lg:order-1">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4">
<div className="aspect-[3/4] rounded-2xl overflow-hidden">
<img alt="Café Interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&amp;h=533&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-2xl overflow-hidden">
<img alt="Coffee Art" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&amp;h=400&amp;fit=crop"/>
</div>
</div>
<div className="space-y-4 pt-8">
<div className="aspect-square rounded-2xl overflow-hidden">
<img alt="Café Ambiance" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="aspect-[3/4] rounded-2xl overflow-hidden">
<img alt="Food Plating" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=400&amp;h=533&amp;fit=crop"/>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<span className="text-xs font-medium text-amber-700 uppercase tracking-wider">Our Story</span>
<h2 className="text-3xl lg:text-4xl xl:text-5xl font-medium tracking-tight text-stone-900 mt-2 mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>
                        Where Every Cup<br/>Tells a Story
                    </h2>
<div className="space-y-4 text-stone-600">
<p>
                            Nestled in the heart of Kalyani, Nadia, <span className="font-medium text-stone-800">More Over Coffee (MOC)</span> is more than just a café—it's a sanctuary for coffee lovers, food enthusiasts, and anyone seeking a cozy escape from the everyday hustle.
                        </p>
<p>
                            Since our doors opened, we've been committed to creating an Instagram-worthy space where great conversations flow as freely as our artisanal coffee. Our menu features everything from sizzling hot plates to delicate croissants, each dish crafted with care and passion.
                        </p>
<p>
                            With over <span className="font-medium text-stone-800">1,068+ reviews</span> and a strong <span className="font-medium text-stone-800">4.1-star rating</span>, our community of regulars keeps coming back for the warm ambiance, friendly service, and unforgettable flavors.
                        </p>
</div>
<div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-stone-200">
<div>
<p className="text-2xl lg:text-3xl font-semibold text-amber-800" style={{fontFamily: '\'Playfair Display\', serif'}}>4.1★</p>
<p className="text-xs text-stone-500 mt-1">Google Rating</p>
</div>
<div>
<p className="text-2xl lg:text-3xl font-semibold text-amber-800" style={{fontFamily: '\'Playfair Display\', serif'}}>1K+</p>
<p className="text-xs text-stone-500 mt-1">Happy Reviews</p>
</div>
<div>
<p className="text-2xl lg:text-3xl font-semibold text-amber-800" style={{fontFamily: '\'Playfair Display\', serif'}}>100+</p>
<p className="text-xs text-stone-500 mt-1">Menu Items</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-white" id="menu">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<span className="text-xs font-medium text-amber-700 uppercase tracking-wider">Explore Our Offerings</span>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-stone-900 mt-2" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    Our Menu
                </h2>
<p className="text-stone-600 mt-3 max-w-xl mx-auto">From sizzling hot plates to sweet desserts, discover flavors crafted with love</p>
</div>

<div className="flex flex-wrap justify-center gap-2 mb-10">
<button className="menu-tab active px-4 py-2 text-sm font-medium rounded-full transition-all bg-amber-800 text-white" data-category="all">All</button>
<button className="menu-tab px-4 py-2 text-sm font-medium rounded-full transition-all" data-category="sizzlers">Sizzlers</button>
<button className="menu-tab px-4 py-2 text-sm font-medium rounded-full transition-all" data-category="chinese">Chinese</button>
<button className="menu-tab px-4 py-2 text-sm font-medium rounded-full transition-all" data-category="pasta">Pasta</button>
<button className="menu-tab px-4 py-2 text-sm font-medium rounded-full transition-all" data-category="pizza">Pizza</button>
<button className="menu-tab px-4 py-2 text-sm font-medium rounded-full transition-all" data-category="croissants">Croissants</button>
<button className="menu-tab px-4 py-2 text-sm font-medium rounded-full transition-all" data-category="sandwiches">Sandwiches</button>
<button className="menu-tab px-4 py-2 text-sm font-medium rounded-full transition-all" data-category="soups">Soups</button>
<button className="menu-tab px-4 py-2 text-sm font-medium rounded-full transition-all" data-category="salads">Salads</button>
<button className="menu-tab px-4 py-2 text-sm font-medium rounded-full transition-all" data-category="desserts">Desserts</button>
</div>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" id="menuGrid">

<div className="menu-item bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100" data-category="sizzlers">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 bg-amber-200/50 rounded-xl flex items-center justify-center">
<span className="text-lg">🥘</span>
</div>
<span className="text-xs font-medium text-amber-700 bg-amber-100 px-2 py-1 rounded-full">Sizzlers</span>
</div>
<h3 className="text-lg font-medium text-stone-800 mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>Sizzling Hot Plates</h3>
<ul className="space-y-3">
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Italian Sizzler</span>
<span className="text-sm font-medium text-amber-800">₹419</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Mexican Sizzler</span>
<span className="text-sm font-medium text-amber-800">₹399</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Paneer Shashlik Sizzler</span>
<span className="text-sm font-medium text-amber-800">₹399</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Veg Exotica Sizzler</span>
<span className="text-sm font-medium text-amber-800">₹399</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Chinese Sizzler</span>
<span className="text-sm font-medium text-amber-800">₹399</span>
</li>
</ul>
</div>

<div className="menu-item bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-100" data-category="chinese">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 bg-red-200/50 rounded-xl flex items-center justify-center">
<span className="text-lg">🍜</span>
</div>
<span className="text-xs font-medium text-red-700 bg-red-100 px-2 py-1 rounded-full">Chinese</span>
</div>
<h3 className="text-lg font-medium text-stone-800 mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>Chinese Appetizers</h3>
<ul className="space-y-3">
<li className="flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="text-sm text-stone-700">American Corn Lollipop</span>
<span className="text-xs bg-amber-500 text-white px-1.5 py-0.5 rounded">★</span>
</div>
<span className="text-sm font-medium text-amber-800">₹269</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Manchurian Dry</span>
<span className="text-sm font-medium text-amber-800">₹239</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Paneer Chilly Dry</span>
<span className="text-sm font-medium text-amber-800">₹249</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Crispy Corn Dry</span>
<span className="text-sm font-medium text-amber-800">₹249</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Paneer 65</span>
<span className="text-sm font-medium text-amber-800">₹259</span>
</li>
</ul>
</div>

<div className="menu-item bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-6 border border-yellow-100" data-category="chinese">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 bg-yellow-200/50 rounded-xl flex items-center justify-center">
<span className="text-lg">🍝</span>
</div>
<span className="text-xs font-medium text-yellow-700 bg-yellow-100 px-2 py-1 rounded-full">Noodles</span>
</div>
<h3 className="text-lg font-medium text-stone-800 mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>Tossed Pan Noodles</h3>
<ul className="space-y-3">
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Hakka Noodles</span>
<span className="text-sm font-medium text-amber-800">₹249</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Schezwan Noodles</span>
<span className="text-sm font-medium text-amber-800">₹249</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Thai Pad Noodles</span>
<span className="text-sm font-medium text-amber-800">₹269</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Singapore Noodles</span>
<span className="text-sm font-medium text-amber-800">₹249</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Yakisoba Noodles</span>
<span className="text-sm font-medium text-amber-800">₹269</span>
</li>
</ul>
</div>

<div className="menu-item bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100" data-category="chinese">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 bg-green-200/50 rounded-xl flex items-center justify-center">
<span className="text-lg">🍚</span>
</div>
<span className="text-xs font-medium text-green-700 bg-green-100 px-2 py-1 rounded-full">Rice</span>
</div>
<h3 className="text-lg font-medium text-stone-800 mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>Asian Fried Rice</h3>
<ul className="space-y-3">
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Veg Fried Rice</span>
<span className="text-sm font-medium text-amber-800">₹199</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Schezwan Fried Rice</span>
<span className="text-sm font-medium text-amber-800">₹229</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Thai Green Rice</span>
<span className="text-sm font-medium text-amber-800">₹259</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Malaysian Rice</span>
<span className="text-sm font-medium text-amber-800">₹259</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Singapore Rice</span>
<span className="text-sm font-medium text-amber-800">₹229</span>
</li>
</ul>
</div>

<div className="menu-item bg-gradient-to-br from-orange-50 to-rose-50 rounded-2xl p-6 border border-orange-100" data-category="pasta">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 bg-orange-200/50 rounded-xl flex items-center justify-center">
<span className="text-lg">🍝</span>
</div>
<span className="text-xs font-medium text-orange-700 bg-orange-100 px-2 py-1 rounded-full">Pasta</span>
</div>
<h3 className="text-lg font-medium text-stone-800 mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>Italian Pasta</h3>
<ul className="space-y-3">
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Arrabiata</span>
<span className="text-sm font-medium text-amber-800">₹279</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Alfredo Penne</span>
<span className="text-sm font-medium text-amber-800">₹279</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Pesto Alla Pasta</span>
<span className="text-sm font-medium text-amber-800">₹279</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Aglio e Olio</span>
<span className="text-sm font-medium text-amber-800">₹279</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Ravioli</span>
<span className="text-sm font-medium text-amber-800">₹279</span>
</li>
</ul>
</div>

<div className="menu-item bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 border border-rose-100" data-category="pasta">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 bg-rose-200/50 rounded-xl flex items-center justify-center">
<span className="text-lg">🧀</span>
</div>
<span className="text-xs font-medium text-rose-700 bg-rose-100 px-2 py-1 rounded-full">Baked</span>
</div>
<h3 className="text-lg font-medium text-stone-800 mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>Baked Delights</h3>
<ul className="space-y-3">
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Mac n Cheese</span>
<span className="text-sm font-medium text-amber-800">₹349</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Baked Florentine Pasta</span>
<span className="text-sm font-medium text-amber-800">₹349</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Lasagne</span>
<span className="text-sm font-medium text-amber-800">₹369</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Veg Cannelloni</span>
<span className="text-sm font-medium text-amber-800">₹369</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Tex Mex Enchiladas</span>
<span className="text-sm font-medium text-amber-800">₹369</span>
</li>
</ul>
</div>

<div className="menu-item bg-gradient-to-br from-red-50 to-amber-50 rounded-2xl p-6 border border-red-100" data-category="pizza">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 bg-red-200/50 rounded-xl flex items-center justify-center">
<span className="text-lg">🍕</span>
</div>
<span className="text-xs font-medium text-red-700 bg-red-100 px-2 py-1 rounded-full">Pizza</span>
</div>
<h3 className="text-lg font-medium text-stone-800 mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>Wood-Fired Pizza</h3>
<ul className="space-y-3">
<li className="flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="text-sm text-stone-700">Cheese Burst</span>
<span className="text-xs bg-amber-500 text-white px-1.5 py-0.5 rounded">★</span>
</div>
<span className="text-sm font-medium text-amber-800">₹399</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Pizza Margherita</span>
<span className="text-sm font-medium text-amber-800">₹299</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Vegetable Bomb</span>
<span className="text-sm font-medium text-amber-800">₹349</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Italian Pizza</span>
<span className="text-sm font-medium text-amber-800">₹369</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Farm House</span>
<span className="text-sm font-medium text-amber-800">₹359</span>
</li>
</ul>
</div>

<div className="menu-item bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-100" data-category="croissants">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 bg-amber-200/50 rounded-xl flex items-center justify-center">
<span className="text-lg">🥐</span>
</div>
<span className="text-xs font-medium text-amber-700 bg-amber-100 px-2 py-1 rounded-full">Croissants</span>
</div>
<h3 className="text-lg font-medium text-stone-800 mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>Fresh Croissants</h3>
<ul className="space-y-3">
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Classic Butter</span>
<span className="text-sm font-medium text-amber-800">₹149</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Nutella Croissant</span>
<span className="text-sm font-medium text-amber-800">₹189</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">MOC Special</span>
<span className="text-sm font-medium text-amber-800">₹189</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Chocofill Delight</span>
<span className="text-sm font-medium text-amber-800">₹189</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Creamy Cheese</span>
<span className="text-sm font-medium text-amber-800">₹189</span>
</li>
</ul>
</div>

<div className="menu-item bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100" data-category="sandwiches">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 bg-emerald-200/50 rounded-xl flex items-center justify-center">
<span className="text-lg">🥪</span>
</div>
<span className="text-xs font-medium text-emerald-700 bg-emerald-100 px-2 py-1 rounded-full">Sandwiches</span>
</div>
<h3 className="text-lg font-medium text-stone-800 mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>Grilled Sandwiches</h3>
<ul className="space-y-3">
<li className="flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="text-sm text-stone-700">Paneer Tandoori</span>
<span className="text-xs bg-amber-500 text-white px-1.5 py-0.5 rounded">★</span>
</div>
<span className="text-sm font-medium text-amber-800">₹179</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">COC Special</span>
<span className="text-sm font-medium text-amber-800">₹159</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Mexican Sandwich</span>
<span className="text-sm font-medium text-amber-800">₹179</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Bombay Sandwich</span>
<span className="text-sm font-medium text-amber-800">₹179</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Mushroom &amp; Cheese</span>
<span className="text-sm font-medium text-amber-800">₹179</span>
</li>
</ul>
</div>

<div className="menu-item bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-100" data-category="soups">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 bg-orange-200/50 rounded-xl flex items-center justify-center">
<span className="text-lg">🍲</span>
</div>
<span className="text-xs font-medium text-orange-700 bg-orange-100 px-2 py-1 rounded-full">Soups</span>
</div>
<h3 className="text-lg font-medium text-stone-800 mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>Warm Soups</h3>
<ul className="space-y-3">
<li className="flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="text-sm text-stone-700">Garlic Mushroom</span>
<span className="text-xs bg-amber-500 text-white px-1.5 py-0.5 rounded">★</span>
</div>
<span className="text-sm font-medium text-amber-800">₹169</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Classic Tomato</span>
<span className="text-sm font-medium text-amber-800">₹149</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Tom Yum</span>
<span className="text-sm font-medium text-amber-800">₹159</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Hot n Sour</span>
<span className="text-sm font-medium text-amber-800">₹159</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Almond Broccoli</span>
<span className="text-sm font-medium text-amber-800">₹179</span>
</li>
</ul>
</div>

<div className="menu-item bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl p-6 border border-lime-100" data-category="salads">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 bg-lime-200/50 rounded-xl flex items-center justify-center">
<span className="text-lg">🥗</span>
</div>
<span className="text-xs font-medium text-lime-700 bg-lime-100 px-2 py-1 rounded-full">Salads</span>
</div>
<h3 className="text-lg font-medium text-stone-800 mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>Fresh Salads</h3>
<ul className="space-y-3">
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Caesar Salad</span>
<span className="text-sm font-medium text-amber-800">₹199</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Quinoa Tossed Salad</span>
<span className="text-sm font-medium text-amber-800">₹239</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Mediterranean Salad</span>
<span className="text-sm font-medium text-amber-800">₹199</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Protein Paneer Salad</span>
<span className="text-sm font-medium text-amber-800">₹189</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Asian Vegetable</span>
<span className="text-sm font-medium text-amber-800">₹189</span>
</li>
</ul>
</div>

<div className="menu-item bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-100" data-category="desserts">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 bg-pink-200/50 rounded-xl flex items-center justify-center">
<span className="text-lg">🍰</span>
</div>
<span className="text-xs font-medium text-pink-700 bg-pink-100 px-2 py-1 rounded-full">Desserts</span>
</div>
<h3 className="text-lg font-medium text-stone-800 mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>Sweet Endings</h3>
<ul className="space-y-3">
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Nutella Cheesecake</span>
<span className="text-sm font-medium text-amber-800">₹210</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Biscoff Cheesecake</span>
<span className="text-sm font-medium text-amber-800">₹195</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Mocha Truffle</span>
<span className="text-sm font-medium text-amber-800">₹180</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Tiramisu Jar</span>
<span className="text-sm font-medium text-amber-800">₹150</span>
</li>
<li className="flex justify-between items-center">
<span className="text-sm text-stone-700">Walnut Brownie</span>
<span className="text-sm font-medium text-amber-800">₹110</span>
</li>
</ul>
</div>
</div>
<div className="text-center mt-10">
<a className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 font-medium text-sm transition-colors" href="#">
<svg aria-hidden="true" data-icon="lucide:download" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                    Download Full Menu (PDF)
                </a>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-stone-900" id="gallery">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<span className="text-xs font-medium text-amber-400 uppercase tracking-wider">Visual Experience</span>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mt-2" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    Our Gallery
                </h2>
<p className="text-stone-400 mt-3 max-w-xl mx-auto">A glimpse into the MOC experience</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
<div className="aspect-square rounded-xl overflow-hidden group cursor-pointer">
<img alt="Café Interior" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden group cursor-pointer md:col-span-2 lg:col-span-1">
<img alt="Coffee" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&amp;h=400&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden group cursor-pointer">
<img alt="Pizza" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden group cursor-pointer">
<img alt="Ambiance" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden group cursor-pointer">
<img alt="Breakfast" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden group cursor-pointer">
<img alt="Pasta" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden group cursor-pointer">
<img alt="Restaurant" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden group cursor-pointer">
<img alt="Dessert" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&amp;h=400&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-gradient-to-b from-amber-50/50 to-white" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<span className="text-xs font-medium text-amber-700 uppercase tracking-wider">What People Say</span>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-stone-900 mt-2" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    Customer Reviews
                </h2>

<div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg shadow-stone-900/5 border border-stone-100 mt-6">
<div className="flex items-center gap-1">
<svg aria-hidden="true" data-icon="lucide:star" data-width="20" height="20" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="20" height="20" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="20" height="20" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="20" height="20" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-2xl font-semibold text-stone-800">4.1</span>
<span className="text-sm text-stone-500">Based on 1,068+ reviews</span>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
<div className="flex items-center gap-1 mb-4">
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-stone-600 text-sm leading-relaxed mb-4">
                        "Amazing ambiance and delicious food! The cheese burst pizza is to die for. Perfect place for a casual hangout with friends. Staff is super friendly too!"
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
<span className="text-sm font-medium text-amber-800">PR</span>
</div>
<div>
<p className="text-sm font-medium text-stone-800">Priya R.</p>
<p className="text-xs text-stone-500">2 weeks ago</p>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
<div className="flex items-center gap-1 mb-4">
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-stone-600 text-sm leading-relaxed mb-4">
                        "Best café in Kalyani! The pasta and sizzlers are absolutely fantastic. The interiors are Instagram-worthy. Will definitely come back again."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
<span className="text-sm font-medium text-blue-800">AK</span>
</div>
<div>
<p className="text-sm font-medium text-stone-800">Amit K.</p>
<p className="text-xs text-stone-500">1 month ago</p>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
<div className="flex items-center gap-1 mb-4">
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-stone-600 text-sm leading-relaxed mb-4">
                        "Love the cozy vibes! Had the American Corn Lollipop and it was crispy perfection. The croissants are freshly baked and melt in your mouth. Must visit!"
                    </p>
</div></div></div></section>
    </>
  );
}
