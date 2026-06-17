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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
red: '#e11d48', // Spicy red
dark: '#0f172a', // Deep navy
teal: '#0d9488', // Gulf water
cream: '#fff1f2', // Shell/Light
}
},
backgroundImage: {
'hero-pattern': "linear-gradient(to bottom, rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.6)), url('https://images.unsplash.com/photo-1599488615731-7e5128160610?q=80&w=2835&auto=format&fit=crop')",
}
}
}
}



        const btn = document.getElementById('menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('open');
            const icon = btn.querySelector('.iconify');
            if(menu.classList.contains('open')){
                icon.setAttribute('data-icon', 'lucide:x');
            } else {
                icon.setAttribute('data-icon', 'lucide:menu');
            }
        });

        // Close menu when clicking a link
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('open');
                btn.querySelector('.iconify').setAttribute('data-icon', 'lucide:menu');
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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-2">
<span className="iconify text-brand-red" data-icon="lucide:crab" data-width="28"></span>
<a className="text-xl tracking-tight font-semibold text-slate-900 uppercase" href="#">
                        Backyard <span className="text-brand-red">Boil</span>
</a>
</div>

<nav className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-slate-600 hover:text-brand-red transition-colors" href="#about">Our Story</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-red transition-colors" href="#menu">Menu</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-red transition-colors" href="#gallery">Gallery</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-red transition-colors" href="#contact">Visit Us</a>
</nav>

<div className="hidden md:flex items-center gap-4">
<a className="group flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-brand-red transition-all duration-300 shadow-sm hover:shadow-md" href="tel:+18323470821">
<span className="iconify group-hover:animate-pulse" data-icon="lucide:phone"></span>
                        832-347-0821
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-900 hover:text-brand-red focus:outline-none p-2" id="menu-btn">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</div>

<div className="md:hidden bg-white border-b border-slate-100" id="mobile-menu">
<div className="px-4 pt-2 pb-6 space-y-1">
<a className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-brand-red hover:bg-slate-50 rounded-md" href="#about">Our Story</a>
<a className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-brand-red hover:bg-slate-50 rounded-md" href="#menu">Menu</a>
<a className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-brand-red hover:bg-slate-50 rounded-md" href="#gallery">Gallery</a>
<a className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-brand-red hover:bg-slate-50 rounded-md" href="#contact">Hours &amp; Location</a>
<div className="pt-4 mt-2 border-t border-slate-100">
<a className="flex w-full items-center justify-center gap-2 bg-brand-red text-white px-4 py-3 rounded-lg text-base font-medium shadow-md" href="tel:+18323470821">
<span className="iconify" data-icon="lucide:phone-call"></span>
                        Call to Order
                    </a>
</div>
</div>
</div>
</header>

<section className="relative h-[85vh] w-full bg-hero-pattern bg-cover bg-center bg-no-repeat bg-fixed flex items-center">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center md:text-left pt-20">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 backdrop-blur-sm mb-6">
<span className="flex h-2 w-2 rounded-full bg-brand-red"></span>
<span className="text-xs font-medium text-brand-red tracking-wide uppercase">Houston's Freshest Catch</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                    Authentic Cajun <br/> Seafood in Houston.
                </h1>
<p className="text-lg md:text-xl text-slate-200 font-light mb-8 max-w-lg leading-relaxed">
                    Experience the bold flavors of the Gulf Coast. From spicy crawfish boils to crispy po-boys, we bring the backyard vibe to your table.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
<a className="flex items-center justify-center gap-2 bg-brand-red text-white px-8 py-3.5 rounded-lg text-base font-medium hover:bg-red-700 transition-all shadow-lg hover:shadow-red-900/20" href="tel:+18323470821">
<span className="iconify" data-icon="lucide:phone"></span>
                        Call to Order
                    </a>
<a className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3.5 rounded-lg text-base font-medium hover:bg-white/20 transition-all" href="#menu">
                        View Menu
                        <span className="iconify" data-icon="lucide:arrow-right"></span>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-28 bg-white" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="relative order-2 md:order-1">
<div className="absolute -top-4 -left-4 w-full h-full border-2 border-slate-200 rounded-2xl z-0"></div>
<img alt="Seafood Feast" className="relative z-10 w-full rounded-2xl shadow-xl aspect-[4/3] object-cover" src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg z-20 max-w-xs border border-slate-100 hidden md:block">
<div className="flex items-center gap-4">
<div className="p-3 bg-brand-teal/10 rounded-full text-brand-teal">
<span className="iconify" data-icon="lucide:star" data-width="24"></span>
</div>
<div>
<p className="text-2xl font-semibold text-slate-900 tracking-tight">4.8/5</p>
<p className="text-sm text-slate-500">Local Reviews</p>
</div>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">Southern Hospitality Meets <span className="text-brand-teal">Gulf Coast Flavor</span>.</h2>
<p className="text-slate-600 leading-relaxed mb-6">
                        At Backyard Boil House, we believe food tastes better when it's messy, spicy, and shared with friends. Located in the heart of Houston, we serve up authentic Cajun boils using only the freshest catch from the Gulf.
                    </p>
<p className="text-slate-600 leading-relaxed mb-8">
                        Whether you're cracking crab legs on our sunny patio or grabbing a quick po-boy for lunch, our relaxed vibe and bold seasonings will transport you straight to the bayou.
                    </p>
<div className="grid grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<span className="iconify text-brand-red" data-icon="lucide:flame" data-width="28"></span>
<h3 className="font-medium text-slate-900">Bold Spices</h3>
<p className="text-sm text-slate-500">Signature house blends.</p>
</div>
<div className="flex flex-col gap-2">
<span className="iconify text-brand-teal" data-icon="lucide:anchor" data-width="28"></span>
<h3 className="font-medium text-slate-900">Fresh Catch</h3>
<p className="text-sm text-slate-500">Sourced daily from the Gulf.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="menu">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
<span className="text-brand-red font-medium text-sm uppercase tracking-wider">Our Menu</span>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mt-2">Get Your Hands Dirty</h2>
<p className="text-slate-600 mt-4 max-w-2xl mx-auto">Market prices apply to all seafood boils. Served with corn and potatoes.</p>
</div>
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="mb-12">
<div className="flex items-center gap-3 mb-6">
<span className="iconify text-brand-red" data-icon="lucide:waves" data-width="24"></span>
<h3 className="text-xl font-semibold text-slate-900">Seafood Boils</h3>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="flex justify-between items-start mb-2">
<h4 className="font-medium text-slate-900 group-hover:text-brand-red transition-colors">Snow Crab Legs</h4>
<span className="text-sm font-semibold text-brand-teal bg-teal-50 px-2 py-1 rounded">MKT</span>
</div>
<p className="text-sm text-slate-500">1 lb of sweet, tender crab legs. Served with corn &amp; potato.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="flex justify-between items-start mb-2">
<h4 className="font-medium text-slate-900 group-hover:text-brand-red transition-colors">Live Crawfish (Seasonal)</h4>
<span className="text-sm font-semibold text-brand-teal bg-teal-50 px-2 py-1 rounded">MKT</span>
</div>
<p className="text-sm text-slate-500">Boiled in our signature spicy blend. Sold by the pound.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="flex justify-between items-start mb-2">
<h4 className="font-medium text-slate-900 group-hover:text-brand-red transition-colors">Head-On Shrimp</h4>
<span className="text-sm font-semibold text-brand-teal bg-teal-50 px-2 py-1 rounded">$16.99/lb</span>
</div>
<p className="text-sm text-slate-500">Jumbo Gulf shrimp soaked in garlic butter seasoning.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="flex justify-between items-start mb-2">
<h4 className="font-medium text-slate-900 group-hover:text-brand-red transition-colors">The Backyard Combo</h4>
<span className="text-sm font-semibold text-brand-teal bg-teal-50 px-2 py-1 rounded">$45.00</span>
</div>
<p className="text-sm text-slate-500">1/2 lb Snow Crab, 1/2 lb Shrimp, Sausage, Corn, Potato &amp; Egg.</p>
</div>
</div>
</div>

<div className="mb-12">
<div className="flex items-center gap-3 mb-6">
<span className="iconify text-brand-red" data-icon="lucide:utensils-crossed" data-width="24"></span>
<h3 className="text-xl font-semibold text-slate-900">Cajun Classics</h3>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="flex gap-4 p-4 rounded-xl hover:bg-white transition-colors border border-transparent hover:border-slate-100">
<div className="h-20 w-20 flex-shrink-0 bg-slate-200 rounded-lg overflow-hidden">
<img className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex-1">
<div className="flex justify-between">
<h4 className="font-medium text-slate-900">Shrimp Po-Boy</h4>
<span className="text-sm text-slate-600">$13.99</span>
</div>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">Crispy fried shrimp, lettuce, tomato, pickles, and remoulade on French bread.</p>
</div>
</div>

<div className="flex gap-4 p-4 rounded-xl hover:bg-white transition-colors border border-transparent hover:border-slate-100">
<div className="h-20 w-20 flex-shrink-0 bg-slate-200 rounded-lg overflow-hidden">
<img className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex-1">
<div className="flex justify-between">
<h4 className="font-medium text-slate-900">Cajun Fried Catfish Basket</h4>
<span className="text-sm text-slate-600">$15.99</span>
</div>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">Cornmeal crusted catfish fillets served with cajun fries and hushpuppies.</p>
</div>
</div>

<div className="flex gap-4 p-4 rounded-xl hover:bg-white transition-colors border border-transparent hover:border-slate-100">
<div className="h-20 w-20 flex-shrink-0 bg-slate-200 rounded-lg overflow-hidden">
<img className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="flex-1">
<div className="flex justify-between">
<h4 className="font-medium text-slate-900">Seafood Gumbo</h4>
<span className="text-sm text-slate-600">$9.99 / $14.99</span>
</div>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">Dark roux, shrimp, crab meat, sausage, and okra over white rice.</p>
</div>
</div>

<div className="flex gap-4 p-4 rounded-xl hover:bg-white transition-colors border border-transparent hover:border-slate-100">
<div className="h-20 w-20 flex-shrink-0 bg-slate-200 rounded-lg overflow-hidden">
<img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&amp;w=2960&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1">
<div className="flex justify-between">
<h4 className="font-medium text-slate-900">Cajun Pasta</h4>
<span className="text-sm text-slate-600">$18.99</span>
</div>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">Fettuccine tossed in spicy alfredo sauce with blackened chicken or shrimp.</p>
</div>
</div>
</div>
</div>
<div className="text-center mt-12">
<a className="inline-flex items-center gap-2 border border-slate-300 bg-white text-slate-900 px-6 py-3 rounded-lg text-sm font-medium hover:border-brand-red hover:text-brand-red transition-all shadow-sm" href="tel:+18323470821">
                    View Full Menu (PDF)
                    <span className="iconify" data-icon="lucide:download"></span>
</a>
</div>
</div>
</section>

<section className="bg-white py-20 border-t border-slate-100" id="gallery">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">The Vibe</h2>
<p className="text-slate-500 mt-2">Good food, good music, good times.</p>
</div>
<div className="hidden md:flex gap-2">
<a className="text-slate-400 hover:text-brand-red transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="24"></span></a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96 md:h-[500px]">

<div className="relative group overflow-hidden rounded-xl col-span-2 row-span-2">
<img alt="Boil" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
</div>

<div className="relative group overflow-hidden rounded-xl">
<img alt="Patio" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>

<div className="relative group overflow-hidden rounded-xl">
<img alt="Cocktails" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1551615593-ef5fe247e8f7?q=80&amp;w=2098&amp;auto=format&amp;fit=crop"/>
</div>

<div className="relative group overflow-hidden rounded-xl col-span-2">
<img alt="Restaurant Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&amp;w=2874&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="bg-slate-900 text-white py-20" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-12 lg:gap-24">

<div className="space-y-10">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Come Say Hi.</h2>
<p className="text-slate-400 text-lg">We don't take reservations, but we always make room for family. Walk-ins welcome for dining in or take-out.</p>
</div>
<div className="space-y-6">

<div className="flex items-start gap-4">
<div className="p-3 bg-white/10 rounded-lg">
<span className="iconify text-brand-red" data-icon="lucide:phone" data-width="24"></span>
</div>
<div>
<h3 className="font-medium text-lg">Phone</h3>
<a className="text-slate-400 hover:text-white transition-colors block mt-1" href="tel:+18323470821">+1 832-347-0821</a>
<p className="text-xs text-slate-500 mt-1">Call for take-out orders</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="p-3 bg-white/10 rounded-lg">
<span className="iconify text-brand-teal" data-icon="lucide:map-pin" data-width="24"></span>
</div>
<div>
<h3 className="font-medium text-lg">Location</h3>
<p className="text-slate-400 mt-1">123 Seafood Blvd (Placeholder)<br/>Houston, TX 77002</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="p-3 bg-white/10 rounded-lg">
<span className="iconify text-orange-400" data-icon="lucide:clock" data-width="24"></span>
</div>
<div>
<h3 className="font-medium text-lg">Hours</h3>
<ul className="text-slate-400 mt-1 space-y-1 text-sm">
<li className="flex justify-between w-40"><span>Mon - Thu</span> <span>11am - 9pm</span></li>
<li className="flex justify-between w-40 text-white font-medium"><span>Fri - Sat</span> <span>11am - 10pm</span></li>
<li className="flex justify-between w-40"><span>Sunday</span> <span>12pm - 9pm</span></li>
</ul>
</div>
</div>
</div>
</div>

<div className="h-96 w-full rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 relative">

<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110850.56930263695!2d-95.3698!3d29.7604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" style={{border: '0', filter: 'grayscale(100%) invert(90%) contrast(85%)'}} width="100%">
</iframe>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
<span className="iconify text-brand-red drop-shadow-xl" data-icon="lucide:map-pin" data-width="48"></span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 border-t border-slate-800 pt-12 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="iconify text-brand-red" data-icon="lucide:crab" data-width="24"></span>
<span className="text-white font-semibold tracking-tight uppercase">Backyard Boil House</span>
</div>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">Menu</a>
<a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">Locations</a>
<a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">Privacy</a>
</div>
<div className="flex gap-4">
<a className="bg-slate-800 p-2 rounded-full text-slate-400 hover:text-brand-red hover:bg-slate-700 transition-all" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="18"></span>
</a>
<a className="bg-slate-800 p-2 rounded-full text-slate-400 hover:text-brand-red hover:bg-slate-700 transition-all" href="#">
<span className="iconify" data-icon="lucide:facebook" data-width="18"></span>
</a>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center md:text-left">
<p className="text-slate-600 text-xs">© 2023 Backyard Boil House. Built for Houston.</p>
</div>
</footer>

<div className="fixed bottom-4 right-4 z-40 md:hidden">
<a className="flex items-center justify-center h-14 w-14 rounded-full bg-brand-red text-white shadow-lg shadow-red-900/30 hover:scale-105 transition-transform" href="tel:+18323470821">
<span className="iconify" data-icon="lucide:phone" data-width="24"></span>
</a>
</div>



    </>
  );
}
