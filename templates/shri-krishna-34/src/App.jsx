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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-stone-200/60 bg-white/80 backdrop-blur-md">
<div className="mx-auto max-w-6xl px-4 md:px-6">
<div className="flex h-16 items-center justify-between">

<a className="flex items-center gap-2 text-stone-900 group" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-100 to-orange-50 text-orange-600 border border-orange-200 shadow-sm">
<iconify-icon icon="solar:chef-hat-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight group-hover:opacity-80 transition-opacity font-geist" style={{}}>
              Shree Krishna Bakers
            </span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500">
<a className="hover:text-stone-900 transition-colors font-geist" href="#about" style={{}}>
              About
            </a>
<a className="hover:text-stone-900 transition-colors font-geist" href="#menu" style={{}}>
              Menu
            </a>
<a className="hover:text-stone-900 transition-colors font-geist" href="#faq" style={{}}>
              FAQ
            </a>
<a className="hover:text-stone-900 transition-colors font-geist" href="#contact" style={{}}>
              Contact
            </a>
</div>

<a className="hidden md:flex items-center gap-2 rounded-full bg-stone-900 px-4 py-2 text-xs font-medium text-white hover:bg-stone-800 hover:shadow-lg hover:shadow-stone-900/10 transition-all active:scale-95" href="https://wa.me/911234567890">
<span className="font-geist" onclick="window.location.href='http://zoma.to/r/20929909'" role="button">Order Now</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>

<button className="md:hidden flex items-center justify-center text-stone-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="md:hidden flex overflow-x-auto no-scrollbar gap-6 px-4 py-3 border-t border-stone-100 bg-white text-xs font-medium text-stone-500">
<a className="whitespace-nowrap hover:text-orange-600 font-geist" href="#home" style={{}}>
          Home
        </a>
<a className="whitespace-nowrap hover:text-orange-600 font-geist" href="#about" style={{}}>
          About Us
        </a>
<a className="whitespace-nowrap hover:text-orange-600 font-geist" href="#menu" style={{}}>
          Full Menu
        </a>
<a className="whitespace-nowrap hover:text-orange-600 font-geist" href="#contact" style={{}}>
          Locations
        </a>
</div>
</nav>

<section className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-4 md:px-6 overflow-hidden" id="home">
<div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e7e5e4_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>
<div className="mx-auto max-w-3xl text-center">
<div className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700 mb-6 font-geist" style={{}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
          Freshly Baked Daily in Jaipur
        </div>
<h1 className="text-4xl md:text-6xl tracking-tight text-stone-900 mb-6 leading-tight font-geist font-semibold" style={{}}>
          Best Bakery &amp; Cake Shop
          <br className="hidden md:block"/>
          in Jaipur
        </h1>
<p className="text-base md:text-lg text-stone-500 mb-10 max-w-xl mx-auto leading-relaxed font-geist" style={{}}>
          Shree Krishna Bakers is a trusted local bakery offering fresh cakes,
          pastries, patties, shakes, and fast food. We specialize in customized
          cakes for every celebration.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="sm:w-auto flex items-center justify-center gap-2 hover:bg-green-700 transition-all hover:shadow-green-200 text-sm font-medium text-white font-geist bg-green-600 w-full rounded-lg pt-3 pr-6 pb-3 pl-6 shadow-sm" href="/home">
<iconify-icon icon="solar:brand-whatsapp-linear" width="20"></iconify-icon>
            Order on WhatsApp
          </a>
<a className="sm:w-auto flex items-center justify-center gap-2 hover:bg-stone-50 hover:border-stone-300 transition-all text-sm font-medium text-stone-700 bg-white w-full border-stone-200 border rounded-lg pt-3 pr-6 pb-3 pl-6 font-geist" href="https://share.google/OuTrQ8oE4AO1h4OVX">
<iconify-icon className="" icon="solar:shop-linear" width="20"></iconify-icon>
            Visit Our Store
          </a>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-y border-stone-200/60 bg-white" id="about">
<div className="mx-auto max-w-6xl px-4 md:px-6">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1 relative aspect-square md:aspect-video rounded-2xl overflow-hidden bg-stone-100 border border-stone-200">
<img alt="Delicious Chocolate Cake" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>


<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-stone-900/50 to-transparent text-white">
<div className="flex items-center gap-2 text-sm font-medium">
<iconify-icon icon="solar:heart-angle-linear"></iconify-icon>
<span className="font-geist" style={{}}>Made with Love</span>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<h2 className="text-2xl md:text-3xl tracking-tight text-stone-900 mb-4 font-geist font-semibold" style={{}}>
              About Shree Krishna Bakers
            </h2>
<p className="text-stone-500 mb-6 leading-relaxed font-geist" style={{}}>
              We are a well-known neighborhood bakery in Jaipur dedicated to
              serving happiness. All our cakes and bakery items are freshly
              prepared with quality ingredients. From birthday cakes to daily
              snacks and fast food, we serve delicious taste with love and care.
            </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-stone-600">
<iconify-icon className="text-orange-600 mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span className="font-geist" style={{}}>
                  100% Eggless Options Available
                </span>
</li>
<li className="flex items-start gap-3 text-sm text-stone-600">
<iconify-icon className="text-orange-600 mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span className="font-geist" style={{}}>
                  Fresh Ingredients &amp; Hygiene Priority
                </span>
</li>
<li className="flex items-start gap-3 text-sm text-stone-600">
<iconify-icon className="text-orange-600 mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span className="font-geist" style={{}}>
                  Custom Designs for Special Occasions
                </span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-stone-50/50" id="menu">
<div className="mx-auto max-w-5xl px-4 md:px-6">
<div className="text-center mb-16">
<h2 className="text-3xl tracking-tight text-stone-900 mb-3 font-geist font-semibold" style={{}}>
            Our Menu
          </h2>
<p className="text-stone-500 text-sm max-w-md mx-auto font-geist" style={{}}>
            Delicious treats at affordable prices. Prices subject to change.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-100">
<div className="p-2 rounded-lg bg-orange-50 text-orange-600">
<iconify-icon icon="solar:croissant-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 font-geist" style={{}}>
                Patties
              </h3>
</div>
<ul className="space-y-3">
<li className="flex justify-between items-center text-sm">
<span className="text-stone-700 font-geist" style={{}}>
                  Aloo Patties
                </span>
<span className="font-medium text-stone-900 font-geist" style={{}}>
                  ₹20
                </span>
</li>
<li className="flex justify-between items-center text-sm">
<span className="text-stone-700 font-geist" style={{}}>
                  Masala Patties
                </span>
<span className="font-medium text-stone-900 font-geist" style={{}}>
                  ₹25
                </span>
</li>
<li className="flex justify-between items-center text-sm">
<span className="text-stone-700 font-geist" style={{}}>
                  Cheese &amp; Mozzarella Patties
                </span>
<span className="font-medium text-stone-900 font-geist" style={{}}>
                  ₹25
                </span>
</li>
</ul>
</div>

<div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-100">
<div className="p-2 rounded-lg bg-pink-50 text-pink-600">
<iconify-icon icon="solar:donut-bitten-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 font-geist" style={{}}>
                Pastries
              </h3>
</div>
<ul className="space-y-3">
<li className="flex justify-between items-center text-sm">
<span className="text-stone-700 font-geist" style={{}}>
                  Cassata Pastry
                </span>
<span className="font-medium text-stone-900 font-geist" style={{}}>
                  ₹70
                </span>
</li>
<li className="flex justify-between items-center text-sm">
<span className="text-stone-700 font-geist" style={{}}>
                  Chocolate Pastry
                </span>
<span className="font-medium text-stone-900 font-geist" style={{}}>
                  ₹40
                </span>
</li>
<li className="flex justify-between items-center text-sm">
<span className="text-stone-700 font-geist" style={{}}>
                  Black Forest Pastry
                </span>
<span className="font-medium text-stone-900 font-geist" style={{}}>
                  ₹40
                </span>
</li>
</ul>
</div>

<div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-shadow md:col-span-2">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-100">
<div className="p-2 rounded-lg bg-rose-50 text-rose-600">
<iconify-icon icon="solar:cake-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 font-geist" style={{}}>
                Cakes
              </h3>
<span className="ml-auto text-xs font-medium text-rose-600 bg-rose-50 px-2 py-1 rounded font-geist" style={{}}>
                Custom Available
              </span>
</div>
<div className="grid md:grid-cols-2 gap-x-12 gap-y-3">
<li className="flex justify-between items-center text-sm">
<span className="text-stone-700 font-geist" style={{}}>
                  Chocolate Cake
                </span>
<span className="font-medium text-stone-900 font-geist" style={{}}>
                  ₹400
                </span>
</li>
<li className="flex justify-between items-center text-sm">
<span className="text-stone-700 font-geist" style={{}}>
                  Red Velvet Cake
                </span>
<span className="font-medium text-stone-900 font-geist" style={{}}>
                  ₹400
                </span>
</li>
<li className="flex justify-between items-center text-sm">
<span className="text-stone-700 font-geist" style={{}}>
                  Black Forest Cake
                </span>
<span className="font-medium text-stone-900 font-geist" style={{}}>
                  ₹380
                </span>
</li>
<li className="flex justify-between items-center text-sm">
<span className="text-stone-700 font-geist" style={{}}>
                  Butterscotch Cake
                </span>
<span className="font-medium text-stone-900 font-geist" style={{}}>
                  ₹340
                </span>
</li>
<li className="flex justify-between items-center text-sm">
<span className="text-stone-700 font-geist" style={{}}>
                  Pineapple Cake
                </span>
<span className="font-medium text-stone-900 font-geist" style={{}}>
                  ₹340
                </span>
</li>
<li className="flex justify-between items-center text-sm">
<span className="text-stone-700 font-geist" style={{}}>
                  Strawberry / Vanilla Cake
                </span>
<span className="font-medium text-stone-900 font-geist" style={{}}>
                  ₹340
                </span>
</li>
<li className="flex justify-between items-center text-sm">
<span className="text-stone-700 font-geist" style={{}}>
                  KitKat / Oreo Forest / Brownie
                </span>
<span className="font-medium text-stone-900 font-geist" style={{}}>
                  ₹400
                </span>
</li>
<li className="flex justify-between items-center text-sm">
<span className="text-stone-700 font-geist" style={{}}>
                  Choco Chip Cake
                </span>
<span className="font-medium text-stone-900 font-geist" style={{}}>
                  ₹350
                </span>
</li>
</div>
<p className="mt-4 text-xs text-stone-400 italic font-geist" style={{}}>
              1 Pound &amp; 2 Pound cakes available. Prices may vary based on
              customization.
            </p>
</div>

<div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-shadow md:row-span-2">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-100">
<div className="p-2 rounded-lg bg-orange-50 text-orange-600">
<iconify-icon icon="solar:pizza-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 font-geist" style={{}}>
                Pizza
              </h3>
</div>
<ul className="space-y-3">
<li className="flex justify-between items-center text-sm">
<span className="text-stone-700 font-geist" style={{}}>
                  Margherita / Mix Veg / Corn
                </span>
<span className="font-medium text-stone-900 font-geist" style={{}}>
                  ₹99
                </span>
</li>
<li className="flex justify-between items-center text-sm">
<span className="text-stone-700 font-geist" style={{}}>
                  Capsicum / Onion Cheese
                </span>
<span className="font-medium text-stone-900 font-geist" style={{}}>
                  ₹120
                </span>
</li>
<li className="flex justify-between items-center text-sm">
<span className="text-stone-700 font-geist" style={{}}>
                  Special Paneer Pizza
                </span>
<span className="font-medium text-stone-900 font-geist" style={{}}>
                  ₹140
                </span>
</li>
</ul>
</div>

<div className="space-y-8">

<div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-100">
<div className="p-2 rounded-lg bg-yellow-50 text-yellow-600">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 font-geist" style={{}}>
                  Burger &amp; Sandwich
                </h3>
</div>
<ul className="space-y-3">
<li className="flex justify-between items-center text-sm">
<span className="text-stone-700 font-geist" style={{}}>
                    Aloo Tikki Burger
                  </span>
<span className="font-medium text-stone-900 font-geist" style={{}}>
                    ₹50
                  </span>
</li>
<li className="flex justify-between items-center text-sm">
<span className="text-stone-700 font-geist" style={{}}>
                    Cheese Slice Burger
                  </span>
<span className="font-medium text-stone-900 font-geist" style={{}}>
                    ₹50
                  </span>
</li>
<li className="flex justify-between items-center text-sm">
<span className="text-stone-700 font-geist" style={{}}>
                    Cheese Paneer / Tandoori Burger
                  </span>
<span className="font-medium text-stone-900 font-geist" style={{}}>
                    ₹80
                  </span>
</li>
</ul>
</div>

<div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-100">
<div className="p-2 rounded-lg bg-blue-50 text-blue-600">
<iconify-icon icon="solar:cup-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 font-geist" style={{}}>
                  Momos &amp; Shakes
                </h3>
</div>
<ul className="space-y-3">
<li className="flex justify-between items-center text-sm">
<span className="text-stone-700 font-geist" style={{}}>
                    Steam Momos
                  </span>
<span className="font-medium text-stone-900 font-geist" style={{}}>
                    ₹40
                  </span>
</li>
<li className="flex justify-between items-center text-sm">
<span className="text-stone-700 font-geist" style={{}}>
                    Fried Momos / Chowmein
                  </span>
<span className="font-medium text-stone-900 font-geist" style={{}}>
                    ₹60
                  </span>
</li>
<li className="flex justify-between items-center text-sm">
<span className="text-stone-700 font-geist" style={{}}>
                    Paneer Momos
                  </span>
<span className="font-medium text-stone-900 font-geist" style={{}}>
                    ₹80
                  </span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-t border-stone-200/60" id="faq">
<div className="mx-auto max-w-2xl px-4 md:px-6">
<h2 className="text-2xl tracking-tight text-stone-900 mb-8 text-center font-geist font-semibold" style={{}}>
          Frequently Asked Questions
        </h2>
<div className="space-y-4">
<details className="group bg-stone-50 rounded-xl p-4 border border-stone-100 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer">
<h3 className="font-medium text-stone-800 font-geist" style={{}}>
                Do you make custom birthday cakes?
              </h3>
<iconify-icon className="text-stone-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-3 text-sm text-stone-500 leading-relaxed font-geist" style={{}}>
              Yes! We specialize in customized cakes for birthdays,
              anniversaries, and parties. Please order in advance for specific
              designs.
            </p>
</details>
<details className="group bg-stone-50 rounded-xl p-4 border border-stone-100 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer">
<h3 className="font-medium text-stone-800 font-geist" style={{}}>
                Do you accept bulk party orders?
              </h3>
<iconify-icon className="text-stone-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-3 text-sm text-stone-500 leading-relaxed font-geist" style={{}}>
              Absolutely. We take bulk orders for patties, pastries, and snacks
              for all types of events.
            </p>
</details>
<details className="group bg-stone-50 rounded-xl p-4 border border-stone-100 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer">
<h3 className="font-medium text-stone-800 font-geist" style={{}}>
                What are your opening hours?
              </h3>
<iconify-icon className="text-stone-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-3 text-sm text-stone-500 leading-relaxed font-geist" style={{}}>
              We are open daily and serve until 11:30 PM.
            </p>
</details>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-stone-900 text-stone-300" id="contact">
<div className="mx-auto max-w-6xl px-4 md:px-6">
<div className="grid md:grid-cols-2 gap-12">
<div className="">
<h2 className="text-2xl md:text-3xl tracking-tight text-white mb-6 font-geist font-semibold" style={{}}>
              Visit Shree Krishna Bakers
            </h2>
<p className="mb-8 text-stone-400 font-geist" style={{}}>
              Satisfy your cravings with our fresh bakery items. Call us or
              visit our store today.
            </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="rounded-full bg-stone-800 p-3 text-white">
<iconify-icon className="" height="20" icon="solar:map-point-linear" style={{color: 'rgb(255, 255, 255)'}} width="20"></iconify-icon>
</div>
<div className="" onclick="window.location.href='https://share.google/OuTrQ8oE4AO1h4OVX'" role="button">
<h4 className="text-white font-medium mb-1 font-geist" style={{}}>
                    Location
                  </h4>
<p className="text-sm cursor-pointer font-geist" onclick="window.location.href='https://maps.app.goo.gl/u7tBWFjdXaHfYMLT6'" role="button">Jaipur, Rajasthan, India</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="rounded-full bg-stone-800 p-3 text-white">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-white font-medium mb-1 font-geist" style={{}}>
                    Timings
                  </h4>
<p className="text-sm font-geist" style={{}}>Open Daily</p>
<p className="text-sm font-geist" style={{}}>Closes at 11:30 PM</p>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="flex items-center justify-center gap-2 hover:bg-stone-200 transition-colors text-sm font-medium text-stone-900 bg-white rounded-lg pt-3 pr-6 pb-3 pl-6 font-geist" href="/tel:+9887900025">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                  Call Now
                </a>
<a className="flex items-center justify-center gap-2 hover:bg-stone-800 transition-colors text-sm font-medium text-white border-stone-700 border rounded-lg pt-3 pr-6 pb-3 pl-6 font-geist" href="https://wa.me/919887900025">
<iconify-icon className="" icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
                  WhatsApp
                </a>
</div>
</div>
</div>

<div className="h-64 md:h-full min-h-[300px] w-full rounded-2xl overflow-hidden bg-stone-800 border border-stone-700">
<iframe allowfullscreen="" className="grayscale opacity-80 hover:opacity-100 transition-opacity" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.07198166567!2d75.7538981628172!3d26.88534659424887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</section>

<footer className="bg-stone-950 text-stone-400 border-t border-stone-900/50">
<div className="mx-auto max-w-6xl px-4 md:px-6 pt-16 pb-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 text-white mb-4" href="#">
<iconify-icon icon="solar:chef-hat-linear" width="24"></iconify-icon>
<span className="text-lg font-semibold tracking-tight font-geist" style={{}}>
                Shree Krishna Bakers
              </span>
</a>
<p className="text-sm leading-relaxed mb-6 font-geist" style={{}}>
              Baking happiness in Jaipur since 2023. Fresh ingredients,
              delightful taste, and made with love.
            </p>
<div className="flex gap-4">
<a className="text-stone-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
<a className="text-stone-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="text-stone-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-whatsapp-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="">
<h4 className="text-white font-medium mb-4 font-geist" style={{}}>
              Explore
            </h4>
<ul className="space-y-3 text-sm">
<li className="">
<a className="hover:text-white transition-colors font-geist" href="#home" style={{}}>
                  Home
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors font-geist" href="#about" style={{}}>
                  About Us
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors font-geist" href="#menu" style={{}}>
                  Full Menu
                </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-white font-medium mb-4 font-geist" style={{}}>
              Categories
            </h4>
<ul className="space-y-3 text-sm">
<li className="">
<a className="hover:text-white transition-colors font-geist" href="#" style={{}}>
                  Custom Cakes
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors font-geist" href="#" style={{}}>
                  Pastries
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors font-geist" href="#" style={{}}>
                  Fast Food
                </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-white font-medium mb-4 font-geist" style={{}}>
              Contact Info
            </h4>
<ul className="space-y-3 text-sm">
<li className="flex items-center gap-2">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
<span className="font-geist">91+988790025</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="" icon="solar:letter-linear"></iconify-icon>
<span className="font-geist" style={{}}>rksharma0888@gmail.com</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-stone-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p className="font-geist" style={{}}>
            © 2023 Shree Krishna Bakers. All rights reserved.
          </p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors font-geist" href="#" style={{}}>
              Privacy Policy
            </a>
<a className="hover:text-white transition-colors font-geist" href="#" style={{}}>
              Terms of Service
            </a>
</div>
</div>
</div>
</footer>

    </>
  );
}
