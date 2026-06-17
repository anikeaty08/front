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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center">
<iconify-icon icon="solar:bag-heart-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-xl tracking-tighter font-semibold text-slate-900">SNACKY</span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors" href="#chips">Chips</a>
<a className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors" href="#biscuits">Biscuits</a>
<a className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-4">
<button className="relative p-2 text-slate-500 hover:text-orange-500 transition-colors">
<iconify-icon icon="solar:cart-large-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="absolute top-1 right-0 h-2 w-2 rounded-full bg-red-500 border border-white"></span>
</button>

<button className="md:hidden p-2 text-slate-500">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden" id="home">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                Fresh Stock Available
            </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-900 mb-6">
                Tasty Snacks at <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Affordable Prices</span>
</h1>
<p className="mt-4 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Crunchy chips and buttery biscuits delivered straight to your mood. High quality ingredients, pocket-friendly prices.
            </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-full text-white bg-orange-500 hover:bg-orange-600 transition-all shadow-sm hover:shadow-md" href="#chips">
                    Shop Snacks
                    <iconify-icon className="ml-2" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 text-sm font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 transition-all" href="#about">
                    Learn More
                </a>
</div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
<div className="absolute top-20 left-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
<div className="absolute top-20 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
</div>
</section>

<section className="py-20 bg-white border-y border-slate-100" id="chips">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Crunchy Chips</h2>
<p className="mt-2 text-slate-500">Fried to perfection, seasoned with love.</p>
</div>
<a className="hidden sm:flex items-center text-sm font-medium text-orange-600 hover:text-orange-700" href="#">
                    View all
                    <iconify-icon className="ml-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative bg-white rounded-2xl border border-slate-200 p-2 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300">
<div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100 relative">
<img alt="Spicy Masala Chips" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-xs font-semibold text-slate-900 border border-slate-100">
                            ₹20
                        </div>
</div>
<div className="p-4">
<h3 className="text-lg font-medium text-slate-900">Spicy Masala</h3>
<p className="mt-1 text-sm text-slate-500 line-clamp-2">Explosive Indian spices mixed with crunchy potato slices.</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-sm font-medium text-slate-400">50g Pack</span>
<button className="bg-slate-900 text-white p-2 rounded-full hover:bg-orange-500 transition-colors">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative bg-white rounded-2xl border border-slate-200 p-2 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300">
<div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100 relative">
<img alt="Cream &amp; Onion" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1621447504864-d8686e12698c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-xs font-semibold text-slate-900 border border-slate-100">
                            ₹30
                        </div>
</div>
<div className="p-4">
<h3 className="text-lg font-medium text-slate-900">Cream &amp; Onion</h3>
<p className="mt-1 text-sm text-slate-500 line-clamp-2">Smooth creamy flavor with a hint of sweet onion.</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-sm font-medium text-slate-400">100g Pack</span>
<button className="bg-slate-900 text-white p-2 rounded-full hover:bg-orange-500 transition-colors">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative bg-white rounded-2xl border border-slate-200 p-2 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300">
<div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100 relative">
<img alt="Classic Salted" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-xs font-semibold text-slate-900 border border-slate-100">
                            ₹40
                        </div>
</div>
<div className="p-4">
<h3 className="text-lg font-medium text-slate-900">Classic Salted</h3>
<p className="mt-1 text-sm text-slate-500 line-clamp-2">The original taste. Perfectly salted golden chips.</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-sm font-medium text-slate-400">150g Pack</span>
<button className="bg-slate-900 text-white p-2 rounded-full hover:bg-orange-500 transition-colors">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="biscuits">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Sweet Biscuits</h2>
<p className="mt-2 text-slate-500">Baked fresh, perfect for tea time.</p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative bg-white rounded-2xl border border-slate-200 p-2 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300">
<div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100 relative">
<img alt="Glucose Power" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-xs font-semibold text-slate-900 border border-slate-100">
                            ₹20
                        </div>
</div>
<div className="p-4">
<h3 className="text-lg font-medium text-slate-900">Glucose Power</h3>
<p className="mt-1 text-sm text-slate-500 line-clamp-2">Energy packed biscuits for instant vitality.</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-sm font-medium text-slate-400">Standard Pack</span>
<button className="bg-slate-900 text-white p-2 rounded-full hover:bg-amber-500 transition-colors">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative bg-white rounded-2xl border border-slate-200 p-2 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300">
<div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100 relative">
<img alt="Butter Delight" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-xs font-semibold text-slate-900 border border-slate-100">
                            ₹30
                        </div>
</div>
<div className="p-4">
<h3 className="text-lg font-medium text-slate-900">Butter Delight</h3>
<p className="mt-1 text-sm text-slate-500 line-clamp-2">Melt in your mouth buttery goodness.</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-sm font-medium text-slate-400">Family Pack</span>
<button className="bg-slate-900 text-white p-2 rounded-full hover:bg-amber-500 transition-colors">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative bg-white rounded-2xl border border-slate-200 p-2 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300">
<div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100 relative">
<img alt="Choco Chip" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-xs font-semibold text-slate-900 border border-slate-100">
                            ₹40
                        </div>
</div>
<div className="p-4">
<h3 className="text-lg font-medium text-slate-900">Choco Chip</h3>
<p className="mt-1 text-sm text-slate-500 line-clamp-2">Loaded with real dark chocolate chips.</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-sm font-medium text-slate-400">Jumbo Pack</span>
<button className="bg-slate-900 text-white p-2 rounded-full hover:bg-amber-500 transition-colors">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="about">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<iconify-icon className="text-orange-500 mb-4" icon="solar:star-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">About Our Shop</h2>
<p className="text-lg text-slate-500 leading-relaxed">
                We are a small, passionate team dedicated to bringing you the freshest, tastiest, and most affordable snacks. Whether you're craving the spicy kick of masala chips or the sweet comfort of butter biscuits, we've got something for everyone. Quality is our priority, and happiness is our guarantee.
            </p>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
<div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
<h4 className="font-medium text-slate-900">Fresh</h4>
<p className="text-sm text-slate-500 mt-1">Restocked daily</p>
</div>
<div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
<h4 className="font-medium text-slate-900">Tasty</h4>
<p className="text-sm text-slate-500 mt-1">Premium flavors</p>
</div>
<div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
<h4 className="font-medium text-slate-900">Affordable</h4>
<p className="text-sm text-slate-500 mt-1">Starting at ₹20</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-t border-slate-200" id="contact">
<div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-10">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Get in Touch</h2>
<p className="mt-2 text-slate-500">Have a bulk order or a question? Write to us.</p>
</div>
<form className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="name">Name</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm" id="name" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="email">Email</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm" id="email" placeholder="john@example.com" type="email"/>
</div>
</div>

<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="website">
                            Website / URL
                            <span className="text-slate-400 font-normal ml-1">(Optional)</span>
</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
<iconify-icon icon="solar:link-circle-linear" width="18"></iconify-icon>
</div>
<input className="w-full pl-11 pr-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm" id="website" placeholder="https://yourwebsite.com" type="url"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="message">Message</label>
<textarea className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm resize-none" id="message" placeholder="Tell us what you need..." rows="4"></textarea>
</div>
<button className="w-full bg-slate-900 text-white font-medium py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2" type="button">
                        Send Message
                        <iconify-icon icon="solar:plain-3-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</form>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-slate-900 text-white flex items-center justify-center">
<span className="text-xs font-bold">S</span>
</div>
<span className="text-sm font-medium text-slate-900">Snacky Shop</span>
</div>
<p className="text-sm text-slate-500">
                © 2023 Snacky. All rights reserved.
            </p>
</div>
</footer>

    </>
  );
}
