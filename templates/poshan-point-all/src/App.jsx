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



        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offset = 80;
                    const targetPosition = target.offsetTop - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
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
      

<nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-neutral-200 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="text-2xl font-semibold tracking-tighter text-emerald-600">PP</div>
<button className="lg:hidden" id="mobile-menu-btn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<div className="hidden lg:flex space-x-8 text-sm" id="desktop-menu">
<a className="text-neutral-600 hover:text-emerald-600 transition-colors" href="#home">Home</a>
<a className="text-neutral-600 hover:text-emerald-600 transition-colors" href="#menu">Menu</a>
<a className="text-neutral-600 hover:text-emerald-600 transition-colors" href="#how-it-works">How It Works</a>
<a className="text-neutral-600 hover:text-emerald-600 transition-colors" href="#why-us">Why Us</a>
<a className="text-neutral-600 hover:text-emerald-600 transition-colors" href="#about">About</a>
<a className="text-neutral-600 hover:text-emerald-600 transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden lg:block bg-emerald-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors" href="#contact">Order Now</a>
</div>
</div>

<div className="hidden lg:hidden bg-white border-t border-neutral-200" id="mobile-menu">
<div className="px-4 py-4 space-y-3">
<a className="block text-sm text-neutral-600 hover:text-emerald-600" href="#home">Home</a>
<a className="block text-sm text-neutral-600 hover:text-emerald-600" href="#menu">Menu</a>
<a className="block text-sm text-neutral-600 hover:text-emerald-600" href="#how-it-works">How It Works</a>
<a className="block text-sm text-neutral-600 hover:text-emerald-600" href="#why-us">Why Us</a>
<a className="block text-sm text-neutral-600 hover:text-emerald-600" href="#about">About</a>
<a className="block text-sm text-neutral-600 hover:text-emerald-600" href="#contact">Contact</a>
<a className="block bg-emerald-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium text-center" href="#contact">Order Now</a>
</div>
</div>
</nav>

<section className="pt-24 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6 lg:px-8" id="home">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="text-center lg:text-left">
<div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full text-xs font-medium mb-6">
<iconify-icon height="16" icon="solar:bolt-linear" width="16"></iconify-icon>
                        Fuel Your Fitness Journey
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 mb-6">
                        Smart Poshan for Active Living
                    </h1>
<p className="text-lg text-neutral-600 mb-8 max-w-xl mx-auto lg:mx-0">
                        Fresh, nutritious smoothies and meals designed for your pre-workout energy and post-workout recovery. Made fresh, served with care.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<a className="bg-emerald-600 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-emerald-700 transition-colors inline-flex items-center justify-center gap-2" href="#menu">
                            View Menu
                            <iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="bg-neutral-100 text-neutral-900 px-6 py-3 rounded-lg text-base font-medium hover:bg-neutral-200 transition-colors inline-flex items-center justify-center gap-2" href="#how-it-works">
                            How It Works
                        </a>
</div>
</div>
<div className="relative">
<div className="aspect-square bg-gradient-to-br from-emerald-100 to-orange-100 rounded-3xl"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-center">
<iconify-icon className="text-emerald-600 mb-4" height="120" icon="solar:cup-hot-linear" width="120"></iconify-icon>
<p className="text-sm text-neutral-600 font-medium">Fresh &amp; Nutritious</p>
</div>
</div>
</div>
</div>

<div className="grid sm:grid-cols-3 gap-6 mt-16 sm:mt-24">
<div className="bg-neutral-50 rounded-2xl p-6 hover:bg-neutral-100 transition-colors">
<iconify-icon className="text-orange-600 mb-4" height="32" icon="solar:kick-scooter-linear" width="32"></iconify-icon>
<h3 className="text-lg font-semibold mb-2">Pre-Workout</h3>
<p className="text-sm text-neutral-600">Energy-packed blends to fuel your workout and boost performance</p>
</div>
<div className="bg-neutral-50 rounded-2xl p-6 hover:bg-neutral-100 transition-colors">
<iconify-icon className="text-emerald-600 mb-4" height="32" icon="solar:heart-pulse-linear" width="32"></iconify-icon>
<h3 className="text-lg font-semibold mb-2">Post-Workout</h3>
<p className="text-sm text-neutral-600">Recovery-focused nutrition to restore and rebuild after training</p>
</div>
<div className="bg-neutral-50 rounded-2xl p-6 hover:bg-neutral-100 transition-colors">
<iconify-icon className="text-orange-600 mb-4" height="32" icon="solar:leaf-linear" width="32"></iconify-icon>
<h3 className="text-lg font-semibold mb-2">Fruit Bowls</h3>
<p className="text-sm text-neutral-600">Fresh fruit combinations packed with natural vitamins and energy</p>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50" id="menu">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12 sm:mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 mb-4">Our Menu</h2>
<p className="text-lg text-neutral-600 max-w-2xl mx-auto">Carefully crafted blends and meals to support your fitness routine</p>
</div>

<div className="mb-16">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-orange-600" height="28" icon="solar:kick-scooter-linear" width="28"></iconify-icon>
<h3 className="text-2xl font-semibold">Pre-Workout</h3>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
<div className="w-full h-48 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl mb-4 flex items-center justify-center">
<iconify-icon className="text-orange-600" height="64" icon="solar:cup-hot-linear" width="64"></iconify-icon>
</div>
<h4 className="text-lg font-semibold mb-2">Energy Burst</h4>
<p className="text-sm text-neutral-600 mb-4">Banana, dates, oats, almond milk - natural energy to power your workout</p>
<div className="flex justify-between items-center">
<span className="text-lg font-semibold text-emerald-600">₹149</span>
<span className="text-xs text-neutral-500">350ml</span>
</div>
</div>
<div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
<div className="w-full h-48 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl mb-4 flex items-center justify-center">
<iconify-icon className="text-orange-600" height="64" icon="solar:cup-hot-linear" width="64"></iconify-icon>
</div>
<h4 className="text-lg font-semibold mb-2">Power Punch</h4>
<p className="text-sm text-neutral-600 mb-4">Mango, pineapple, chia seeds, coconut water - tropical energy boost</p>
<div className="flex justify-between items-center">
<span className="text-lg font-semibold text-emerald-600">₹169</span>
<span className="text-xs text-neutral-500">350ml</span>
</div>
</div>
<div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
<div className="w-full h-48 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl mb-4 flex items-center justify-center">
<iconify-icon className="text-orange-600" height="64" icon="solar:cup-hot-linear" width="64"></iconify-icon>
</div>
<h4 className="text-lg font-semibold mb-2">Green Kickstart</h4>
<p className="text-sm text-neutral-600 mb-4">Spinach, apple, ginger, lemon - light and refreshing pre-gym fuel</p>
<div className="flex justify-between items-center">
<span className="text-lg font-semibold text-emerald-600">₹159</span>
<span className="text-xs text-neutral-500">350ml</span>
</div>
</div>
</div>
</div>

<div className="mb-16">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-emerald-600" height="28" icon="solar:heart-pulse-linear" width="28"></iconify-icon>
<h3 className="text-2xl font-semibold">Post-Workout</h3>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
<div className="w-full h-48 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl mb-4 flex items-center justify-center">
<iconify-icon className="text-emerald-600" height="64" icon="solar:cup-hot-linear" width="64"></iconify-icon>
</div>
<h4 className="text-lg font-semibold mb-2">Protein Power</h4>
<p className="text-sm text-neutral-600 mb-4">Berries, yogurt, almonds, honey - recovery-focused nutrition</p>
<div className="flex justify-between items-center">
<span className="text-lg font-semibold text-emerald-600">₹179</span>
<span className="text-xs text-neutral-500">350ml</span>
</div>
</div>
<div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
<div className="w-full h-48 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl mb-4 flex items-center justify-center">
<iconify-icon className="text-emerald-600" height="64" icon="solar:cup-hot-linear" width="64"></iconify-icon>
</div>
<h4 className="text-lg font-semibold mb-2">Choco Recovery</h4>
<p className="text-sm text-neutral-600 mb-4">Banana, cacao, peanut butter, milk - delicious muscle recovery</p>
<div className="flex justify-between items-center">
<span className="text-lg font-semibold text-emerald-600">₹189</span>
<span className="text-xs text-neutral-500">350ml</span>
</div>
</div>
<div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
<div className="w-full h-48 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl mb-4 flex items-center justify-center">
<iconify-icon className="text-emerald-600" height="64" icon="solar:cup-hot-linear" width="64"></iconify-icon>
</div>
<h4 className="text-lg font-semibold mb-2">Berry Restore</h4>
<p className="text-sm text-neutral-600 mb-4">Mixed berries, Greek yogurt, flax seeds - antioxidant-rich recovery</p>
<div className="flex justify-between items-center">
<span className="text-lg font-semibold text-emerald-600">₹199</span>
<span className="text-xs text-neutral-500">350ml</span>
</div>
</div>
</div>
</div>

<div className="mb-16">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-orange-600" height="28" icon="solar:leaf-linear" width="28"></iconify-icon>
<h3 className="text-2xl font-semibold">Fruit Bowls</h3>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
<div className="w-full h-48 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl mb-4 flex items-center justify-center">
<iconify-icon className="text-orange-600" height="64" icon="solar:leaf-linear" width="64"></iconify-icon>
</div>
<h4 className="text-lg font-semibold mb-2">Tropical Paradise</h4>
<p className="text-sm text-neutral-600 mb-4">Mango, papaya, pineapple, coconut - fresh tropical energy</p>
<div className="flex justify-between items-center">
<span className="text-lg font-semibold text-emerald-600">₹139</span>
<span className="text-xs text-neutral-500">Medium</span>
</div>
</div>
<div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
<div className="w-full h-48 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl mb-4 flex items-center justify-center">
<iconify-icon className="text-orange-600" height="64" icon="solar:leaf-linear" width="64"></iconify-icon>
</div>
<h4 className="text-lg font-semibold mb-2">Berry Boost</h4>
<p className="text-sm text-neutral-600 mb-4">Strawberry, blueberry, banana, granola - antioxidant-packed bowl</p>
<div className="flex justify-between items-center">
<span className="text-lg font-semibold text-emerald-600">₹159</span>
<span className="text-xs text-neutral-500">Medium</span>
</div>
</div>
<div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
<div className="w-full h-48 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl mb-4 flex items-center justify-center">
<iconify-icon className="text-orange-600" height="64" icon="solar:leaf-linear" width="64"></iconify-icon>
</div>
<h4 className="text-lg font-semibold mb-2">Power Protein Bowl</h4>
<p className="text-sm text-neutral-600 mb-4">Banana, apple, nuts, seeds, honey - complete nutrition in a bowl</p>
<div className="flex justify-between items-center">
<span className="text-lg font-semibold text-emerald-600">₹169</span>
<span className="text-xs text-neutral-500">Medium</span>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-8">
<h3 className="text-2xl font-semibold mb-6">Customize Your Blend</h3>
<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
<div className="text-center p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors">
<iconify-icon className="text-emerald-600 mb-2" height="32" icon="solar:leaf-linear" width="32"></iconify-icon>
<p className="text-sm font-medium mb-1">Chia Seeds</p>
<p className="text-xs text-neutral-600">+₹20</p>
</div>
<div className="text-center p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors">
<iconify-icon className="text-emerald-600 mb-2" height="32" icon="solar:leaf-linear" width="32"></iconify-icon>
<p className="text-sm font-medium mb-1">Flax Seeds</p>
<p className="text-xs text-neutral-600">+₹20</p>
</div>
<div className="text-center p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors">
<iconify-icon className="text-emerald-600 mb-2" height="32" icon="solar:leaf-linear" width="32"></iconify-icon>
<p className="text-sm font-medium mb-1">Oats</p>
<p className="text-xs text-neutral-600">+₹15</p>
</div>
<div className="text-center p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors">
<iconify-icon className="text-emerald-600 mb-2" height="32" icon="solar:leaf-linear" width="32"></iconify-icon>
<p className="text-sm font-medium mb-1">Almonds</p>
<p className="text-xs text-neutral-600">+₹30</p>
</div>
<div className="text-center p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors">
<iconify-icon className="text-emerald-600 mb-2" height="32" icon="solar:leaf-linear" width="32"></iconify-icon>
<p className="text-sm font-medium mb-1">Walnuts</p>
<p className="text-xs text-neutral-600">+₹30</p>
</div>
<div className="text-center p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors">
<iconify-icon className="text-emerald-600 mb-2" height="32" icon="solar:leaf-linear" width="32"></iconify-icon>
<p className="text-sm font-medium mb-1">Honey</p>
<p className="text-xs text-neutral-600">+₹15</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8" id="how-it-works">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12 sm:mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 mb-4">How It Works</h2>
<p className="text-lg text-neutral-600 max-w-2xl mx-auto">Simple steps to get your fitness fuel</p>
</div>
<div className="grid md:grid-cols-3 gap-8 lg:gap-12">
<div className="text-center">
<div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
<iconify-icon className="text-emerald-600" height="32" icon="solar:cup-hot-linear" width="32"></iconify-icon>
</div>
<div className="text-4xl font-semibold text-neutral-200 mb-4">01</div>
<h3 className="text-xl font-semibold mb-3">Choose Your Blend</h3>
<p className="text-base text-neutral-600">Pick from our pre-workout, post-workout, or fruit bowl options based on your fitness goals</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
<iconify-icon className="text-orange-600" height="32" icon="solar:widget-add-linear" width="32"></iconify-icon>
</div>
<div className="text-4xl font-semibold text-neutral-200 mb-4">02</div>
<h3 className="text-xl font-semibold mb-3">Customize With Add-ons</h3>
<p className="text-base text-neutral-600">Boost your blend with seeds, nuts, oats, or honey for extra nutrition and flavor</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
<iconify-icon className="text-emerald-600" height="32" icon="solar:check-circle-linear" width="32"></iconify-icon>
</div>
<div className="text-4xl font-semibold text-neutral-200 mb-4">03</div>
<h3 className="text-xl font-semibold mb-3">Freshly Prepared &amp; Served</h3>
<p className="text-base text-neutral-600">We prepare your order fresh on the spot and serve it with care for maximum nutrition</p>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50" id="why-us">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12 sm:mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 mb-4">Why PoshanPoint</h2>
<p className="text-lg text-neutral-600 max-w-2xl mx-auto">Trusted by fitness enthusiasts across the city</p>
</div>
<div className="grid md:grid-cols-2 gap-8 lg:gap-12">
<div className="bg-white rounded-2xl p-8 lg:p-10">
<div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-emerald-600" height="24" icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold mb-4">Fresh Ingredients</h3>
<p className="text-base text-neutral-600 leading-relaxed">We source fresh fruits, vegetables, and quality ingredients daily. Every blend is made to order, ensuring maximum freshness and nutritional value for your active lifestyle.</p>
</div>
<div className="bg-white rounded-2xl p-8 lg:p-10">
<div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-orange-600" height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold mb-4">Hygiene &amp; Consistency</h3>
<p className="text-base text-neutral-600 leading-relaxed">Strict hygiene protocols and standardized recipes mean you get the same great taste and quality every single time. Clean preparation, consistent results.</p>
</div>
<div className="bg-white rounded-2xl p-8 lg:p-10">
<div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-emerald-600" height="24" icon="solar:heart-pulse-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold mb-4">Fitness-Friendly Recipes</h3>
<p className="text-base text-neutral-600 leading-relaxed">Every recipe is designed with your fitness goals in mind. Whether you need pre-workout energy or post-workout recovery, our blends support your routine.</p>
</div>
<div className="bg-white rounded-2xl p-8 lg:p-10">
<div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-orange-600" height="24" icon="solar:star-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold mb-4">Premium Yet Affordable</h3>
<p className="text-base text-neutral-600 leading-relaxed">Quality nutrition shouldn't break the bank. We offer premium ingredients and expert blends at prices that fit your daily routine and budget.</p>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8" id="about">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 mb-4">About PoshanPoint</h2>
</div>
<div className="prose prose-lg max-w-none">
<div className="bg-gradient-to-br from-emerald-50 to-orange-50 rounded-2xl p-8 lg:p-12 mb-8">
<p className="text-lg text-neutral-700 leading-relaxed mb-6">
                        PoshanPoint was born from a simple belief: <span className="font-semibold text-neutral-900">fitness is a daily discipline, and nutrition is its foundation</span>. We started with a mission to make quality, fitness-focused nutrition accessible to everyone pursuing an active lifestyle.
                    </p>
<p className="text-lg text-neutral-700 leading-relaxed mb-6">
                        Whether you're a gym regular, a morning walker, or someone building healthy habits, we understand the role that proper nutrition plays in your fitness journey. That's why every smoothie, bowl, and meal we create is designed to fuel your workouts and support your recovery.
                    </p>
<p className="text-lg text-neutral-700 leading-relaxed">
                        We believe in <span className="font-semibold text-neutral-900">fresh ingredients, consistent quality, and honest nutrition</span>—no shortcuts, no false claims. Just real food, prepared fresh, and served with the discipline your fitness routine deserves.
                    </p>
</div>
<div className="grid sm:grid-cols-3 gap-6 mt-8">
<div className="text-center p-6 bg-neutral-50 rounded-xl">
<div className="text-3xl font-semibold text-emerald-600 mb-2">Fresh Daily</div>
<p className="text-sm text-neutral-600">Made to order, every time</p>
</div>
<div className="text-center p-6 bg-neutral-50 rounded-xl">
<div className="text-3xl font-semibold text-emerald-600 mb-2">100% Natural</div>
<p className="text-sm text-neutral-600">No artificial additives</p>
</div>
<div className="text-center p-6 bg-neutral-50 rounded-xl">
<div className="text-3xl font-semibold text-emerald-600 mb-2">Fitness First</div>
<p className="text-sm text-neutral-600">Designed for active living</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50" id="contact">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12 sm:mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 mb-4">Get In Touch</h2>
<p className="text-lg text-neutral-600 max-w-2xl mx-auto">Visit us or reach out to start your fitness nutrition journey</p>
</div>
<div className="grid lg:grid-cols-2 gap-12">
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-emerald-600" height="24" icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold mb-2">Location</h3>
<p className="text-base text-neutral-600">Shop No. 12, Fitness Plaza<br/>MG Road, Sector 28<br/>Gurgaon, Haryana 122002</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-emerald-600" height="24" icon="solar:phone-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold mb-2">Phone</h3>
<p className="text-base text-neutral-600">+91 98765 43210</p>
<p className="text-sm text-neutral-500 mt-1">Mon-Sun: 6:00 AM - 10:00 PM</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-emerald-600" height="24" icon="solar:chat-round-line-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
<p className="text-base text-neutral-600">Chat with us for quick orders</p>
<a className="inline-flex items-center gap-2 text-emerald-600 font-medium mt-2 hover:text-emerald-700" href="#">
                                Open WhatsApp
                                <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="bg-white rounded-2xl p-8">
<h3 className="text-xl font-semibold mb-6">Send Us A Message</h3>
<form className="space-y-5">
<div>
<label className="block text-sm font-medium text-neutral-700 mb-2">Name</label>
<input className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" placeholder="Your name" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 mb-2">Phone</label>
<input className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" placeholder="+91 98765 43210" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 mb-2">Message</label>
<textarea className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none" placeholder="Tell us about your fitness goals..." rows="4"></textarea>
</div>
<button className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-emerald-700 transition-colors" type="submit">
                            Send Message
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-900 text-neutral-300 py-12 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
<div>
<div className="text-2xl font-semibold tracking-tighter text-white mb-4">PP</div>
<p className="text-sm text-neutral-400 mb-4">Smart Poshan for Active Living</p>
<div className="flex gap-4">
<a className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-neutral-700 transition-colors" href="#">
<iconify-icon height="20" icon="solar:logo-instagram-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-neutral-700 transition-colors" href="#">
<iconify-icon height="20" icon="solar:logo-facebook-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-neutral-700 transition-colors" href="#">
<iconify-icon height="20" icon="solar:chat-round-line-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Quick Links</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#home">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#menu">Menu</a></li>
<li><a className="hover:text-white transition-colors" href="#how-it-works">How It Works</a></li>
<li><a className="hover:text-white transition-colors" href="#about">About</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Categories</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#menu">Pre-Workout</a></li>
<li><a className="hover:text-white transition-colors" href="#menu">Post-Workout</a></li>
<li><a className="hover:text-white transition-colors" href="#menu">Fruit Bowls</a></li>
<li><a className="hover:text-white transition-colors" href="#menu">Add-ons</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Legal</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#privacy">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#terms">Terms &amp; Conditions</a></li>
<li><a className="hover:text-white transition-colors" href="#disclaimer">Disclaimer</a></li>
</ul>
</div>
</div>
<div className="border-t border-neutral-800 pt-8">
<div className="lg:flex lg:justify-between lg:items-center">
<p className="text-sm text-neutral-400 text-center lg:text-left mb-4 lg:mb-0">
                        © 2024 PoshanPoint. All rights reserved.
                    </p>
<p className="text-xs text-neutral-500 text-center lg:text-right">
<strong>Disclaimer:</strong> PoshanPoint products are designed to support fitness routines and active lifestyles. These are not intended to diagnose, treat, cure, or prevent any disease. Please consult with a healthcare professional for personalized medical advice.
                    </p>
</div>
</div>
</div>
</footer>


    </>
  );
}
