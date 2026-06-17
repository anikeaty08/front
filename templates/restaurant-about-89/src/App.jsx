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
primary: '#CF2E2E',
dark: '#121212',
card: '#1A1A1A',
},
fontFamily: {
serif: ['"ZCOOL XiaoWei"', 'serif'],
sans: ['"Roboto"', 'sans-serif'],
},
letterSpacing: {
tightest: '-0.025em',
}
}
}
}



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
      

<nav className="w-full absolute top-0 left-0 z-50 py-6 px-6 lg:px-12 flex justify-between items-center border-b border-white/5 bg-gradient-to-b from-black/80 to-transparent">
<div className="flex items-center gap-2">
<div className="text-primary">
<i className="w-8 h-8" data-lucide="utensils-crossed"></i>
</div>
<span className="font-serif text-2xl text-white tracking-wide">RAVINTOLA KRUNNI</span>
</div>
<div className="hidden md:flex gap-8 text-sm font-medium text-white/80">
<a className="hover:text-primary transition-colors" href="#">Home</a>
<a className="text-primary" href="#">About</a>
<a className="hover:text-primary transition-colors" href="#">Menu</a>
<a className="hover:text-primary transition-colors" href="#">Contact</a>
</div>
</nav>

<header className="relative w-full h-[50vh] min-h-[400px] flex flex-col justify-center items-center text-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Restaurant Interior" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#0d0d0d]/80 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent"></div>
</div>

<div className="relative z-10 space-y-4 px-4">
<h1 className="font-serif text-6xl md:text-7xl text-white tracking-tight">About</h1>
<div className="flex items-center justify-center gap-2 text-sm md:text-base text-gray-400 font-sans">
<a className="hover:text-white transition-colors" href="#">Home</a>
<i className="w-4 h-4 text-primary" data-lucide="chevron-right"></i>
<span className="text-primary">About</span>
</div>
</div>
</header>

<section className="relative py-20 lg:py-32 px-6 lg:px-12 overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

<div className="relative group">
<div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/5 aspect-[4/5]">
<img alt="Ravintola Krunni Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
</div>

<div className="absolute -bottom-6 -right-6 lg:-right-12 bg-card border border-white/10 p-6 rounded-xl shadow-xl backdrop-blur-sm max-w-xs hidden md:block">
<div className="flex items-start gap-4">
<div className="bg-primary/10 p-3 rounded-full text-primary">
<i className="w-6 h-6" data-lucide="map-pin"></i>
</div>
<div>
<p className="text-white font-serif text-lg leading-none mb-1">Central Location</p>
<p className="text-gray-400 text-sm">Kirkkotie 2, Ii</p>
</div>
</div>
</div>
</div>

<div className="flex flex-col justify-center pt-4">

<div className="flex items-center gap-3 mb-6">
<span className="px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium tracking-wider uppercase">About Restaurant</span>
<div className="h-px w-12 bg-primary/30"></div>
</div>

<h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-8 tracking-tight">
                        Dedicated to Bringing You <br/>
<span className="text-primary">Unforgettable Flavors.</span>
</h2>

<div className="space-y-6 text-gray-400 font-sans text-lg leading-relaxed font-light">
<h3 className="text-white font-serif text-2xl tracking-tight mb-2">Who We Are</h3>
<p>
                            Ravintola Krunni has been operating in the center of Ii for over three years. We originally started under the name Ii Pizza &amp; Kebab, but after moving to larger premises, we continue our operations under the name Ravintola Krunni.
                        </p>
<p>
                            Our menu offers flavor experiences for every taste, including pizzas, kebab dishes, salads, burgers, and steaks. We also offer gluten-free options and meals for children. Our restaurant is licensed to serve alcohol.
                        </p>
<p>
                            Our goal is to keep our customers satisfied with our service. Customer satisfaction is ensured through generous portions prepared from fresh, high-quality ingredients, along with our excellent and friendly customer service.
                        </p>
<p>
                            Our restaurant is located in the center of Ii at Kirkkotie 2, next to Ii Cooperative Bank and Fysio. Free parking is available nearby, making it easy to stop by for a meal.
                        </p>
<p>
                            We operate in a stylishly renovated former bank building, offering seating for 40 guests and a meeting room for up to 20 people. Home delivery is available for larger orders. For delivery details or meeting room rental, please contact the restaurant by phone.
                        </p>
<p className="text-white font-medium border-l-2 border-primary pl-4 py-1">
                            We have received a lot of positive feedback, and our food has been praised as the best in Ii. We warmly welcome all customers to our restaurant!
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-[#161616] border-y border-white/5">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-8 rounded-xl bg-[#0d0d0d] border border-white/5 hover:border-primary/30 transition-all duration-300">
<div className="mb-6 inline-flex p-3 rounded-lg bg-neutral-900 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="users"></i>
</div>
<h3 className="text-xl font-serif text-white mb-2">40 Customer Seats</h3>
<p className="text-sm text-gray-500 font-light">Spacious dining area in a stylishly renovated setting.</p>
</div>

<div className="group p-8 rounded-xl bg-[#0d0d0d] border border-white/5 hover:border-primary/30 transition-all duration-300">
<div className="mb-6 inline-flex p-3 rounded-lg bg-neutral-900 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="presentation"></i>
</div>
<h3 className="text-xl font-serif text-white mb-2">Meeting Room</h3>
<p className="text-sm text-gray-500 font-light">Private space available for up to 20 people.</p>
</div>

<div className="group p-8 rounded-xl bg-[#0d0d0d] border border-white/5 hover:border-primary/30 transition-all duration-300">
<div className="mb-6 inline-flex p-3 rounded-lg bg-neutral-900 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="wine"></i>
</div>
<h3 className="text-xl font-serif text-white mb-2">Fully Licensed</h3>
<p className="text-sm text-gray-500 font-light">Licensed to serve alcohol to complement your meal.</p>
</div>

<div className="group p-8 rounded-xl bg-[#0d0d0d] border border-white/5 hover:border-primary/30 transition-all duration-300">
<div className="mb-6 inline-flex p-3 rounded-lg bg-neutral-900 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="truck"></i>
</div>
<h3 className="text-xl font-serif text-white mb-2">Home Delivery</h3>
<p className="text-sm text-gray-500 font-light">Available for larger orders directly to your door.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 lg:px-12">
<div className="max-w-4xl mx-auto text-center bg-gradient-to-b from-[#1A1A1A] to-[#121212] border border-white/5 rounded-2xl p-10 lg:p-16 shadow-2xl relative overflow-hidden">

<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10">
<h2 className="font-serif text-3xl lg:text-4xl text-white mb-4 tracking-tight">Reserve Your Table or Book a Meeting</h2>
<p className="text-gray-400 font-light text-lg mb-8">Call us for reservations, larger orders, or meeting room inquiries.</p>
<a className="inline-flex items-center gap-3 bg-primary hover:bg-red-700 text-white px-8 py-4 rounded-full transition-all duration-300 font-medium tracking-wide shadow-lg shadow-primary/20 group" href="tel:+358413650661">
<i className="w-5 h-5 group-hover:rotate-12 transition-transform" data-lucide="phone"></i>
                    Call Now
                </a>
</div>
</div>
</section>

<footer className="bg-[#080808] border-t border-white/5 pt-16 pb-8 text-sm">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div className="col-span-1 lg:col-span-1">
<div className="flex items-center gap-2 mb-6">
<i className="w-6 h-6 text-primary" data-lucide="utensils-crossed"></i>
<span className="font-serif text-xl text-white tracking-wide">RAVINTOLA KRUNNI</span>
</div>
<p className="text-gray-500 leading-relaxed mb-6">
                        Dedicated to bringing you unforgettable flavors in the center of Ii.
                    </p>
</div>

<div>
<h4 className="text-white font-serif text-lg mb-6">Useful Links</h4>
<ul className="space-y-3 text-gray-500">
<li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#"><i className="w-3 h-3" data-lucide="chevron-right"></i> Home</a></li>
<li><a className="text-primary flex items-center gap-2" href="#"><i className="w-3 h-3" data-lucide="chevron-right"></i> About Us</a></li>
<li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#"><i className="w-3 h-3" data-lucide="chevron-right"></i> Menu</a></li>
<li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#"><i className="w-3 h-3" data-lucide="chevron-right"></i> Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-serif text-lg mb-6">Contact Info</h4>
<ul className="space-y-4 text-gray-500">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-primary mt-0.5" data-lucide="phone"></i>
<div>
<span className="block text-white">Phone</span>
<a className="hover:text-primary transition-colors" href="tel:+358413650661">+358 41 365 0661</a>
</div>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-primary mt-0.5" data-lucide="map-pin"></i>
<div>
<span className="block text-white">Address</span>
<span>Kirkkotie 2, 91100 Ii, Finland</span>
</div>
</li>
</ul>
</div>

<div>
<h4 className="text-white font-serif text-lg mb-6">Opening Hours</h4>
<ul className="space-y-3 text-gray-500">
<li className="flex justify-between border-b border-white/5 pb-2">
<span>Mon - Thu</span>
<span className="text-white">10:30 – 22:00</span>
</li>
<li className="flex justify-between border-b border-white/5 pb-2">
<span>Fri - Sat</span>
<span className="text-white">10:30 – 05:00</span>
</li>
<li className="flex justify-between pb-2">
<span>Sunday</span>
<span className="text-white">12:00 – 22:00</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
<p>Copyright © 2024 Ravintola Krunni. All Rights Reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms &amp; Conditions</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
