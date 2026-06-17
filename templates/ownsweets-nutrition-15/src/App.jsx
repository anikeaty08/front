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



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-stone-900" href="#">OWNSWEETS</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#products">Products</a>
<a className="hover:text-stone-900 transition-colors" href="#how-it-works">How it Works</a>
<a className="hover:text-stone-900 transition-colors" href="#reviews">Reviews</a>
<a className="hover:text-stone-900 transition-colors" href="#about">About</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-stone-600 hover:text-stone-900" href="#">Sign In</a>
<a className="bg-stone-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-stone-800 transition-colors" href="#products">
                    Build Now
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 inset-x-0 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-100/40 via-stone-50 to-stone-50 -z-10"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                    Freshly made in 48-72 hours
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tighter text-stone-900 mb-6 leading-[1.1]">
                    Create Your Own Nutrition. <span className="text-stone-500">Build Your Own Sweets.</span>
</h1>
<p className="text-lg text-stone-600 mb-8 max-w-lg leading-relaxed">
                    Design custom Laddoos, Protein Bars &amp; Cookies. Choose ingredients, base, sweetness, flavours, and nutrition.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 bg-stone-900 text-white font-medium rounded-full hover:bg-stone-800 transition-all group" href="#products">
                        Start Customizing
                        <i className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 bg-white border border-stone-200 text-stone-700 font-medium rounded-full hover:bg-stone-50 transition-colors" href="#bestsellers">
                        Explore Products
                    </a>
</div>
<div className="mt-12 flex items-center gap-4 text-sm text-stone-500">
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<p>Trusted by 10,000+ health enthusiasts</p>
</div>
</div>
<div className="relative">
<div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-stone-200 aspect-[4/3] group">
<img alt="Healthy Ingredients" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>

<div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-stone-100 shadow-lg text-xs font-medium text-stone-800 flex items-center gap-2 animate-[bounce_3s_infinite]">
<span className="w-2 h-2 bg-green-500 rounded-full"></span> Millets
                    </div>
<div className="absolute bottom-12 right-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-stone-100 shadow-lg text-xs font-medium text-stone-800 flex items-center gap-2 animate-[bounce_4s_infinite]">
<span className="w-2 h-2 bg-orange-500 rounded-full"></span> Whey Protein
                    </div>
<div className="absolute top-1/2 -right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-stone-100 shadow-lg text-xs font-medium text-stone-800 flex items-center gap-2 animate-[bounce_5s_infinite]">
<span className="w-2 h-2 bg-amber-700 rounded-full"></span> Dark Cocoa
                    </div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-stone-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
<div className="flex flex-col items-center text-center gap-3 group">
<div className="p-3 bg-stone-50 rounded-2xl group-hover:bg-orange-50 transition-colors">
<i className="w-6 h-6 text-stone-900" data-lucide="sliders-horizontal" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="font-medium text-stone-900 text-sm mb-1">100% Customizable</h3>
<p className="text-xs text-stone-500">Choose every ingredient</p>
</div>
</div>
<div className="flex flex-col items-center text-center gap-3 group">
<div className="p-3 bg-stone-50 rounded-2xl group-hover:bg-green-50 transition-colors">
<i className="w-6 h-6 text-stone-900" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="font-medium text-stone-900 text-sm mb-1">Healthy &amp; Fresh</h3>
<p className="text-xs text-stone-500">Made after order</p>
</div>
</div>
<div className="flex flex-col items-center text-center gap-3 group">
<div className="p-3 bg-stone-50 rounded-2xl group-hover:bg-blue-50 transition-colors">
<i className="w-6 h-6 text-stone-900" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="font-medium text-stone-900 text-sm mb-1">Clean Ingredients</h3>
<p className="text-xs text-stone-500">No preservatives</p>
</div>
</div>
<div className="flex flex-col items-center text-center gap-3 group">
<div className="p-3 bg-stone-50 rounded-2xl group-hover:bg-yellow-50 transition-colors">
<i className="w-6 h-6 text-stone-900" data-lucide="truck" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="font-medium text-stone-900 text-sm mb-1">Fast Delivery</h3>
<p className="text-xs text-stone-500">In 48-72 hours</p>
</div>
</div>
<div className="flex flex-col items-center text-center gap-3 group">
<div className="p-3 bg-stone-50 rounded-2xl group-hover:bg-red-50 transition-colors">
<i className="w-6 h-6 text-stone-900" data-lucide="heart-handshake" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="font-medium text-stone-900 text-sm mb-1">Indian Roots</h3>
<p className="text-xs text-stone-500">Inspired by tradition</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="products">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 mb-4">Choose What You Want to Create</h2>
<p className="text-stone-500 max-w-2xl mx-auto">Select a base product to start your customization journey. We handle the science, you handle the taste.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-xl hover:border-stone-300 transition-all duration-300">
<div className="aspect-[4/3] overflow-hidden relative">
<img alt="Protein Bars" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<span className="text-xs font-medium bg-white/20 backdrop-blur-md px-2 py-1 rounded">Gym Favorite</span>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold tracking-tight text-stone-900 mb-2">Custom Protein Bars</h3>
<p className="text-sm text-stone-500 mb-6 leading-relaxed">
                            Craft your perfect fuel. Choose size (30g-50g) and protein content (5g-20g) along with nuts and berries.
                        </p>
<a className="flex items-center text-sm font-medium text-stone-900 group-hover:text-orange-600 transition-colors" href="#">
                            Start Customizing <i className="w-4 h-4 ml-2" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="group bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-xl hover:border-stone-300 transition-all duration-300">
<div className="aspect-[4/3] overflow-hidden relative">
<img alt="Millet Laddoos" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<span className="text-xs font-medium bg-white/20 backdrop-blur-md px-2 py-1 rounded">Traditional &amp; Pure</span>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold tracking-tight text-stone-900 mb-2">Custom Millet Laddoos</h3>
<p className="text-sm text-stone-500 mb-6 leading-relaxed">
                            40g wholesome laddoos. Select your millet base, ghee quantity, sweetener type &amp; crunchy toppings.
                        </p>
<a className="flex items-center text-sm font-medium text-stone-900 group-hover:text-orange-600 transition-colors" href="#">
                            Start Customizing <i className="w-4 h-4 ml-2" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="group bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-xl hover:border-stone-300 transition-all duration-300">
<div className="aspect-[4/3] overflow-hidden relative">
<img alt="Cookies" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<span className="text-xs font-medium bg-white/20 backdrop-blur-md px-2 py-1 rounded">Kid Friendly</span>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold tracking-tight text-stone-900 mb-2">Custom Cookies</h3>
<p className="text-sm text-stone-500 mb-6 leading-relaxed">
                            Guilt-free snacking. Choose base (millet, oats, wheat), sweetener, mix-ins, and exotic flavours.
                        </p>
<a className="flex items-center text-sm font-medium text-stone-900 group-hover:text-orange-600 transition-colors" href="#">
                            Start Customizing <i className="w-4 h-4 ml-2" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>

<div className="mt-12 text-center">
<div className="inline-flex items-center gap-2 bg-stone-200 px-4 py-2 rounded-lg text-xs font-medium text-stone-700">
<i className="w-4 h-4" data-lucide="info" strokeWidth="1.5"></i>
                    Minimum Order: 10 Pieces per Custom Product ensures freshness.
                </div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-stone-200 -z-10"></div>

<div className="relative bg-white pt-8">
<div className="w-10 h-10 bg-stone-900 text-white rounded-full flex items-center justify-center font-semibold mb-6 shadow-lg shadow-stone-200 mx-auto md:mx-0">1</div>
<h3 className="text-lg font-semibold text-stone-900 mb-2 text-center md:text-left">Choose Product</h3>
<p className="text-sm text-stone-500 text-center md:text-left">Select from Bars, Laddoos, or Cookies as your base.</p>
</div>

<div className="relative bg-white pt-8">
<div className="w-10 h-10 bg-white border border-stone-200 text-stone-900 rounded-full flex items-center justify-center font-semibold mb-6 mx-auto md:mx-0">2</div>
<h3 className="text-lg font-semibold text-stone-900 mb-2 text-center md:text-left">Customize</h3>
<p className="text-sm text-stone-500 text-center md:text-left">Pick ingredients, nutrition macros, and sweetness levels.</p>
</div>

<div className="relative bg-white pt-8">
<div className="w-10 h-10 bg-white border border-stone-200 text-stone-900 rounded-full flex items-center justify-center font-semibold mb-6 mx-auto md:mx-0">3</div>
<h3 className="text-lg font-semibold text-stone-900 mb-2 text-center md:text-left">We Make It Fresh</h3>
<p className="text-sm text-stone-500 text-center md:text-left">Handcrafted by experts immediately after you order.</p>
</div>

<div className="relative bg-white pt-8">
<div className="w-10 h-10 bg-white border border-stone-200 text-stone-900 rounded-full flex items-center justify-center font-semibold mb-6 mx-auto md:mx-0">4</div>
<h3 className="text-lg font-semibold text-stone-900 mb-2 text-center md:text-left">Delivered</h3>
<p className="text-sm text-stone-500 text-center md:text-left">Straight to your door in 48-72 hours.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 border-t border-stone-200" id="bestsellers">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-2">Bestselling Combos</h2>
<p className="text-stone-500">Perfectly balanced mixes for those in a hurry.</p>
</div>
<a className="text-sm font-medium text-stone-900 hover:text-orange-600 transition-colors flex items-center" href="#">
                    View All <i className="w-4 h-4 ml-1" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-all">
<div className="flex items-start justify-between mb-6">
<div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-600">
<i className="w-6 h-6" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<span className="text-xs font-semibold bg-stone-100 text-stone-600 px-2 py-1 rounded">Popular</span>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-1">High Protein Bar Mix</h3>
<p className="text-sm text-stone-500 mb-6">20g Protein, Dark Chocolate, Almonds.</p>
<button className="w-full py-2.5 rounded-lg border border-stone-200 text-stone-900 text-sm font-medium hover:bg-stone-50 transition-colors">Order Now</button>
</div>

<div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-all">
<div className="flex items-start justify-between mb-6">
<div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600">
<i className="w-6 h-6" data-lucide="heart" strokeWidth="1.5"></i>
</div>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-1">Low Sugar Laddoo Mix</h3>
<p className="text-sm text-stone-500 mb-6">Stevia sweetened, Ragi Base, Cashews.</p>
<button className="w-full py-2.5 rounded-lg border border-stone-200 text-stone-900 text-sm font-medium hover:bg-stone-50 transition-colors">Order Now</button>
</div>

<div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-all">
<div className="flex items-start justify-between mb-6">
<div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center text-yellow-600">
<i className="w-6 h-6" data-lucide="smile" strokeWidth="1.5"></i>
</div>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-1">Kids Cookie Box</h3>
<p className="text-sm text-stone-500 mb-6">Oats, Honey, Choco-chips, No Maida.</p>
<button className="w-full py-2.5 rounded-lg border border-stone-200 text-stone-900 text-sm font-medium hover:bg-stone-50 transition-colors">Order Now</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-center text-stone-900 mb-16">Community Favorites</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 bg-stone-50 rounded-2xl">
<div className="flex gap-1 text-orange-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-stone-700 text-sm mb-6 leading-relaxed">"Finally, protein bars that don't taste like cardboard. Being able to choose my own sweetness level is a game changer for my prep."</p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div>
<p className="text-sm font-semibold text-stone-900">Aryan K.</p>
<p className="text-xs text-stone-500">Fitness Enthusiast</p>
</div>
</div>
</div>

<div className="p-8 bg-stone-50 rounded-2xl">
<div className="flex gap-1 text-orange-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-stone-700 text-sm mb-6 leading-relaxed">"My kids love the cookies, and I love that they are made of Ragi and Jaggery. No preservatives gives me peace of mind."</p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div>
<p className="text-sm font-semibold text-stone-900">Priya S.</p>
<p className="text-xs text-stone-500">Mother of two</p>
</div>
</div>
</div>

<div className="p-8 bg-stone-50 rounded-2xl">
<div className="flex gap-1 text-orange-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-stone-700 text-sm mb-6 leading-relaxed">"Perfect for my diabetic diet. The customizer lets me remove sugar entirely and use dates instead. The taste is authentic."</p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div>
<p className="text-sm font-semibold text-stone-900">Ramesh G.</p>
<p className="text-xs text-stone-500">Working Professional</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-white" id="about">
<div className="max-w-3xl mx-auto px-6 text-center">
<i className="w-12 h-12 mx-auto mb-8 text-orange-500" data-lucide="chef-hat" strokeWidth="1.5"></i>
<h2 className="text-3xl font-semibold tracking-tight mb-6">Tradition meets Science</h2>
<p className="text-stone-300 text-lg leading-relaxed">
                "OwnSweets.com brings ancient Indian healthy food traditions and modern nutritional science together. Build sweets that match your goals — from muscle gain to low sugar to kid-friendly treats."
            </p>
</div>
</section>

<section className="py-20 bg-orange-50">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-white rounded-3xl p-8 md:p-12 border border-orange-100 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
<div>
<h2 className="text-2xl font-semibold text-stone-900 mb-2">Order faster on the OwnSweets App</h2>
<p className="text-stone-500">Save recipes, reorder in one click. Launching soon.</p>
</div>
<div className="flex gap-4">
<button className="bg-stone-900 text-white px-6 py-3 rounded-xl text-sm font-medium opacity-80 cursor-not-allowed">App Store (Soon)</button>
<button className="bg-stone-900 text-white px-6 py-3 rounded-xl text-sm font-medium opacity-80 cursor-not-allowed">Play Store (Soon)</button>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-stone-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-lg font-semibold tracking-tighter text-stone-900 block mb-6" href="#">OWNSWEETS</a>
<p className="text-sm text-stone-500 mb-6">Create Your Own Nutrition. Fresh, healthy, and yours.</p>
<div className="flex gap-4">
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
</div>
</div>
<div>
<h4 className="font-semibold text-stone-900 mb-4 text-sm">Shop</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#">Protein Bars</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Millet Laddoos</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Healthy Cookies</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Gift Boxes</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-stone-900 mb-4 text-sm">Support</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#">Track Order</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Refund Policy</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-stone-900 mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#">About</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Ingredients</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Wholesale</a></li>
</ul>
</div>
</div>
<div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-stone-400">© 2023 OwnSweets.com. All rights reserved.</p>
<div className="flex gap-6 text-xs text-stone-400">
<a className="hover:text-stone-900" href="#">Privacy</a>
<a className="hover:text-stone-900" href="#">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
