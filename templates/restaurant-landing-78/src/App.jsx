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



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
green: '#16a34a', // Trustworthy Green
blue: '#2563eb',  // Dependable Blue
dark: '#0f172a',  // Slate 900
gray: '#f8fafc',  // Slate 50
}
},
fontSize: {
'xxs': '0.65rem',
},
letterSpacing: {
'tighter': '-0.04em',
'tight': '-0.02em',
}
}
}
}



        lucide.createIcons();

        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-element');
            elements.forEach(el => observer.observe(el));
        });
    
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
      

<div className="bg-brand-dark text-white py-2.5 hidden md:block border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs font-medium text-gray-300">
<div className="flex items-center gap-4">
<span className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></span>
                    Open Now: 7:00 AM - 4:00 PM
                </span>
</div>
<div className="flex items-center gap-6">
<a className="hover:text-white transition-colors flex items-center gap-1.5" href="#">
<i className="w-3.5 h-3.5" data-lucide="map-pin" strokeWidth="1.5"></i> Find a Location
                </a>
<a className="hover:text-white transition-colors flex items-center gap-1.5" href="#">
<i className="w-3.5 h-3.5" data-lucide="phone" strokeWidth="1.5"></i> (555) 123-4567
                </a>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
<div className="flex items-center gap-2.5 group cursor-pointer">
<div className="bg-brand-green/10 p-2 rounded-lg group-hover:bg-brand-green/20 transition-colors">
<i className="w-5 h-5 text-brand-green" data-lucide="sandwich" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-gray-900 font-display">RK TOASTIE FACTORY</span>
</div>
<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#menu">Menu</a>
<a className="hover:text-gray-900 transition-colors" href="#about">Our Story</a>
<a className="hover:text-gray-900 transition-colors" href="#locations">Locations</a>
<a className="hover:text-gray-900 transition-colors" href="#blog">Journal</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex bg-brand-dark text-white px-6 py-2.5 rounded-full text-xs font-medium hover:bg-gray-800 transition-all items-center gap-2 shadow-sm hover:shadow-md">
                    Order Online <i className="w-3.5 h-3.5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<button className="lg:hidden text-gray-900 p-2 hover:bg-gray-50 rounded-md">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</nav>

<section className="relative bg-white pt-16 pb-32 overflow-hidden">

<div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none fade-mask"></div>
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="reveal-element in-view">
<div className="flex items-center gap-3 mb-6">
<span className="px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs font-semibold tracking-wide uppercase border border-brand-green/20">
                        Premium Quality
                    </span>
<span className="text-gray-400 text-xs font-medium tracking-wide uppercase">Est. 2024</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-900 tracking-tighter leading-[1.1] mb-8 font-display font-semibold">
                    TRUSTWORTHY,<br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-blue">PREMIUM TOASTIES.</span>
</h1>
<p className="text-lg text-gray-500 mb-10 max-w-lg leading-relaxed font-light">
                    Experience the perfect crunch. We combine locally sourced ingredients with culinary precision to deliver a toastie you can trust, every single time.
                </p>
<div className="flex flex-wrap items-center gap-4">
<button className="bg-brand-green text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-green-700 transition-colors flex items-center gap-2 shadow-lg shadow-brand-green/20">
                        View Full Menu
                    </button>
<button className="bg-white border border-gray-200 text-gray-700 px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center gap-2">
<i className="w-4 h-4" data-lucide="play-circle" strokeWidth="1.5"></i> Watch Our Process
                    </button>
</div>
<div className="mt-12 flex items-center gap-6 text-sm text-gray-500">
<div className="flex -space-x-3">
<img alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-600">+2k</div>
</div>
<div>
<div className="flex gap-0.5 text-brand-green mb-0.5">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-xs">Trusted by 2,000+ happy customers</p>
</div>
</div>
</div>
<div className="relative reveal-element delay-200">
<div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-200 aspect-[4/5] group">
<img alt="Delicious Toastie" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-gray-100 shadow-lg">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="font-semibold text-gray-900">The Signature Melt</h3>
<p className="text-xs text-gray-500">Sourdough, Aged Cheddar, House Relish</p>
</div>
<span className="bg-brand-green text-white text-xs font-bold px-2.5 py-1 rounded-full">$12.50</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5 mt-3">
<div className="bg-brand-green h-1.5 rounded-full w-3/4"></div>
</div>
<div className="flex justify-between items-center mt-2 text-xxs font-medium text-gray-400">
<span>Selling Fast</span>
<span>45 sold today</span>
</div>
</div>
</div>

<div className="absolute -z-10 top-10 -right-10 w-24 h-24 bg-brand-blue/10 rounded-full blur-xl"></div>
<div className="absolute -z-10 -bottom-10 -left-10 w-32 h-32 bg-brand-green/10 rounded-full blur-xl"></div>
</div>
</div>
</section>

<section className="bg-brand-gray pt-24 pb-24 border-t border-gray-100" id="menu">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end gap-6 reveal-element mb-16 justify-between">
<div>
<h2 className="text-3xl md:text-4xl text-gray-900 tracking-tight font-display font-semibold mb-4">CRAFTED FOR TASTE</h2>
<div className="h-1 w-20 bg-brand-green rounded-full"></div>
</div>
<p className="max-w-md text-gray-500 leading-relaxed text-sm">
                    We don't just make sandwiches. We engineer flavor profiles using ethically sourced ingredients and trustworthy cooking methods.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white rounded-2xl p-2 border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 reveal-element delay-100">
<div className="relative overflow-hidden rounded-xl h-60 mb-4">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs font-semibold px-3 py-1 rounded-full text-brand-green">
                            Best Seller
                        </div>
</div>
<div className="px-3 pb-3">
<div className="flex justify-between items-center mb-2">
<h3 className="text-lg font-semibold text-gray-900">Triple Cheese</h3>
<span className="text-gray-900 font-medium">$14.00</span>
</div>
<p className="text-sm text-gray-500 mb-4 line-clamp-2">A blend of Mozzarella, Vintage Cheddar, and Swiss Gruyère on artisanal sourdough.</p>
<button className="w-full py-3 rounded-xl border border-gray-200 text-gray-600 text-xs font-semibold hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors flex justify-center items-center gap-2">
                            Add to Order <i className="w-3.5 h-3.5" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="group bg-white rounded-2xl p-2 border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 reveal-element delay-100">
<div className="relative overflow-hidden rounded-xl h-60 mb-4">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-3 left-3 bg-brand-blue/90 backdrop-blur text-xs font-semibold px-3 py-1 rounded-full text-white">
                            New Arrival
                        </div>
</div>
<div className="px-3 pb-3">
<div className="flex justify-between items-center mb-2">
<h3 className="text-lg font-semibold text-gray-900">The Green Goddess</h3>
<span className="text-gray-900 font-medium">$15.50</span>
</div>
<p className="text-sm text-gray-500 mb-4 line-clamp-2">Pesto, fresh avocado, spinach, and mozzarella toasted to perfection.</p>
<button className="w-full py-3 rounded-xl border border-gray-200 text-gray-600 text-xs font-semibold hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-colors flex justify-center items-center gap-2">
                            Add to Order <i className="w-3.5 h-3.5" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="group bg-white rounded-2xl p-2 border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 reveal-element delay-100">
<div className="relative overflow-hidden rounded-xl h-60 mb-4">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="px-3 pb-3">
<div className="flex justify-between items-center mb-2">
<h3 className="text-lg font-semibold text-gray-900">Smoked &amp; Savory</h3>
<span className="text-gray-900 font-medium">$16.00</span>
</div>
<p className="text-sm text-gray-500 mb-4 line-clamp-2">Smoked ham, pickles, dijon mustard, and swiss cheese. A classic reimagined.</p>
<button className="w-full py-3 rounded-xl border border-gray-200 text-gray-600 text-xs font-semibold hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors flex justify-center items-center gap-2">
                            Add to Order <i className="w-3.5 h-3.5" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
<div className="mt-16 text-center reveal-element">
<a className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-dark transition-colors border-b border-brand-blue/30 pb-0.5 hover:border-brand-dark" href="#">
                    Explore our Vegan Options <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="py-24 bg-brand-dark text-white relative overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-20"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="reveal-element">
<div className="flex items-center gap-3 mb-6">
<span className="w-8 h-[1px] bg-brand-blue"></span>
<span className="text-brand-blue text-xs font-bold tracking-widest uppercase">Our Impact</span>
</div>
<h2 className="text-4xl tracking-tight mb-6 font-display font-semibold">FUELING THE COMMUNITY</h2>
<p className="text-gray-400 mb-10 text-base leading-relaxed font-light">
                    We aren't just a cafe; we are a hub for trustworthy food. Serving thousands of satisfied customers across multiple locations with consistent quality.
                </p>
<div className="grid grid-cols-2 gap-8 border-t border-gray-800 pt-8">
<div>
<span className="block text-4xl text-white mb-2 font-display font-semibold">15k+</span>
<span className="text-sm text-gray-400">Toasties Served Monthly</span>
</div>
<div>
<span className="block text-4xl text-white mb-2 font-display font-semibold">98%</span>
<span className="text-sm text-gray-400">Positive Reviews</span>
</div>
<div>
<span className="block text-4xl text-white mb-2 font-display font-semibold">4</span>
<span className="text-sm text-gray-400">City Locations</span>
</div>
<div>
<span className="block text-4xl text-white mb-2 font-display font-semibold">100%</span>
<span className="text-sm text-gray-400">Locally Sourced</span>
</div>
</div>
</div>
<div className="relative h-[450px] w-full reveal-element delay-200">
<div className="absolute inset-0 bg-brand-blue/20 rounded-2xl transform rotate-3"></div>
<img alt="Cafe Interior" className="relative rounded-2xl w-full h-full object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24 border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-element">
<h2 className="text-3xl md:text-4xl text-gray-900 tracking-tight font-display font-semibold mb-4">WHY CHOOSE RK FACTORY?</h2>
<p className="text-gray-500 text-sm">Reliability in every bite. We prioritize hygiene, speed, and premium ingredients.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-lg transition-all duration-300 reveal-element delay-100">
<div className="w-12 h-12 bg-white border border-gray-100 rounded-xl flex items-center justify-center mb-6 shadow-sm">
<i className="w-6 h-6 text-brand-blue" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-3">Trustworthy Hygiene</h3>
<p className="text-sm text-gray-500 leading-relaxed">Our open kitchens adhere to the strictest safety standards. You see what we make.</p>
</div>

<div className="p-8 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-lg transition-all duration-300 reveal-element delay-200">
<div className="w-12 h-12 bg-white border border-gray-100 rounded-xl flex items-center justify-center mb-6 shadow-sm">
<i className="w-6 h-6 text-brand-green" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-3">Fresh Ingredients</h3>
<p className="text-sm text-gray-500 leading-relaxed">Sourced daily from local farmers. No preservatives, just real food.</p>
</div>

<div className="p-8 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-lg transition-all duration-300 reveal-element delay-300">
<div className="w-12 h-12 bg-white border border-gray-100 rounded-xl flex items-center justify-center mb-6 shadow-sm">
<i className="w-6 h-6 text-yellow-500" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-3">Fast Service</h3>
<p className="text-sm text-gray-500 leading-relaxed">Optimized workflow ensuring your premium toastie is ready when you need it.</p>
</div>
</div>
</div>
</section>

<div className="bg-brand-blue h-12 flex items-center overflow-hidden whitespace-nowrap border-y border-white/10">
<div className="animate-marquee flex gap-12 font-bold text-white text-xs uppercase tracking-widest opacity-90">
<span>Rk Toastie Factory</span> <span>•</span> <span>Premium Quality</span> <span>•</span> <span>Fresh Ingredients</span> <span>•</span> <span>Trustworthy</span> <span>•</span>
<span>Rk Toastie Factory</span> <span>•</span> <span>Premium Quality</span> <span>•</span> <span>Fresh Ingredients</span> <span>•</span> <span>Trustworthy</span> <span>•</span>
<span>Rk Toastie Factory</span> <span>•</span> <span>Premium Quality</span> <span>•</span> <span>Fresh Ingredients</span> <span>•</span> <span>Trustworthy</span> <span>•</span>
<span>Rk Toastie Factory</span> <span>•</span> <span>Premium Quality</span> <span>•</span> <span>Fresh Ingredients</span> <span>•</span> <span>Trustworthy</span> <span>•</span>
<span>Rk Toastie Factory</span> <span>•</span> <span>Premium Quality</span> <span>•</span> <span>Fresh Ingredients</span> <span>•</span> <span>Trustworthy</span> <span>•</span>
</div>
</div>

<section className="py-24 bg-white relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-start">
<div className="reveal-element">
<h2 className="text-4xl text-gray-900 tracking-tight font-display font-semibold mb-8">HEAR FROM OUR REGULARS</h2>
<div className="space-y-6">

<div className="p-6 bg-brand-gray rounded-2xl border border-gray-100">
<div className="flex text-yellow-400 mb-4 gap-1">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-gray-600 text-sm leading-relaxed mb-4">"Finally a place that takes toasties seriously. The sourdough is always crisp, and the fillings are generous. Highly trustworthy quality."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-brand-blue font-bold text-xs">JD</div>
<span className="text-sm font-medium text-gray-900">James D.</span>
</div>
</div>

<div className="p-6 bg-brand-gray rounded-2xl border border-gray-100">
<div className="flex text-yellow-400 mb-4 gap-1">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-gray-600 text-sm leading-relaxed mb-4">"I come here every lunch break. The Green Goddess is my go-to. Fast, fresh, and friendly staff."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-brand-green font-bold text-xs">SAR</div>
<span className="text-sm font-medium text-gray-900">Sarah R.</span>
</div>
</div>
</div>
</div>

<div className="reveal-element delay-200">
<h2 className="text-2xl text-gray-900 tracking-tight font-display font-semibold mb-8">COMMON QUESTIONS</h2>
<div className="space-y-4">
<details className="group p-4 bg-white rounded-xl cursor-pointer border border-gray-100 hover:border-gray-300 transition-colors open:shadow-lg open:border-transparent">
<summary className="flex justify-between items-center font-medium text-gray-900 list-none text-sm select-none">
                                Do you offer gluten-free bread?
                                <span className="transition group-open:rotate-180">
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i>
</span>
</summary>
<p className="text-gray-500 text-sm mt-3 leading-relaxed">
                                Yes! All our toasties can be made with our premium gluten-free sourdough for a small extra charge.
                            </p>
</details>
<details className="group p-4 bg-white rounded-xl cursor-pointer border border-gray-100 hover:border-gray-300 transition-colors open:shadow-lg open:border-transparent">
<summary className="flex justify-between items-center font-medium text-gray-900 list-none text-sm select-none">
                                Are your ingredients locally sourced?
                                <span className="transition group-open:rotate-180">
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i>
</span>
</summary>
<p className="text-gray-500 text-sm mt-3 leading-relaxed">
                                Absolutely. We work with local farmers within a 100km radius to ensure maximum freshness and support our community.
                            </p>
</details>
<details className="group p-4 bg-white rounded-xl cursor-pointer border border-gray-100 hover:border-gray-300 transition-colors open:shadow-lg open:border-transparent">
<summary className="flex justify-between items-center font-medium text-gray-900 list-none text-sm select-none">
                                Do you do catering for offices?
                                <span className="transition group-open:rotate-180">
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i>
</span>
</summary>
<p className="text-gray-500 text-sm mt-3 leading-relaxed">
                                We specialize in office catering! Platter boxes are available for order with 24 hours notice.
                            </p>
</details>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100">
<div className="max-w-4xl mx-auto px-6 text-center reveal-element">
<h2 className="text-4xl md:text-5xl text-gray-900 tracking-tighter font-display font-semibold mb-6">
                READY FOR THE <span className="text-brand-blue">PERFECT BITE?</span>
</h2>
<p className="text-gray-500 mb-10">Order now for pickup or delivery and taste the difference.</p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<button className="bg-gray-900 text-white px-10 py-4 rounded-full text-sm font-semibold hover:bg-black transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
                    Order for Pickup
                </button>
<button className="bg-white border border-gray-200 text-gray-900 px-10 py-4 rounded-full text-sm font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
<i className="w-4 h-4" data-lucide="bike" strokeWidth="1.5"></i> Order Delivery
                </button>
</div>
</div>
</section>

<footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
<div>
<div className="flex items-center gap-2 mb-6">
<i className="w-6 h-6 text-brand-green" data-lucide="sandwich" strokeWidth="1.5"></i>
<span className="text-lg font-bold text-gray-900 tracking-tight">RK FACTORY</span>
</div>
<p className="text-gray-500 text-sm mb-6">Trustworthy premium toasties made with passion and precision.</p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-brand-blue transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-gray-400 hover:text-brand-blue transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-gray-400 hover:text-brand-blue transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
</div>
</div>
<div>
<h4 className="text-gray-900 font-semibold text-sm mb-6">Explore</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-brand-green transition-colors" href="#">Menu</a></li>
<li><a className="hover:text-brand-green transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-brand-green transition-colors" href="#">Locations</a></li>
<li><a className="hover:text-brand-green transition-colors" href="#">Catering</a></li>
</ul>
</div>
<div>
<h4 className="text-gray-900 font-semibold text-sm mb-6">Legal</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-brand-green transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-brand-green transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-brand-green transition-colors" href="#">Allergen Info</a></li>
</ul>
</div>
<div>
<h4 className="text-gray-900 font-semibold text-sm mb-6">Visit Us</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 text-brand-blue" data-lucide="map-pin" strokeWidth="1.5"></i>
                            123 Foodie Lane, Culinary District, NY 10012
                        </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-brand-blue" data-lucide="mail" strokeWidth="1.5"></i>
                            hello@rktoastiefactory.com
                        </li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
<p>© 2024 Rk Toastie Factory. All rights reserved.</p>
<div className="flex items-center gap-1 mt-4 md:mt-0">
<span>Designed with <i className="w-3 h-3 inline text-red-400 fill-current" data-lucide="heart"></i> for food lovers</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
