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
50: '#f6f6f6',
100: '#e7e7e7',
900: '#111111',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 20) {
                nav.classList.add('shadow-sm', 'bg-white/90');
                nav.classList.remove('bg-white/80');
            } else {
                nav.classList.remove('shadow-sm', 'bg-white/90');
                nav.classList.add('bg-white/80');
            }
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
      

<nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-semibold tracking-tighter uppercase" href="#">Atlas</a>
<div className="hidden md:flex items-center gap-6">

<div className="relative group">
<button className="flex items-center gap-1 text-sm text-gray-500 hover:text-black transition-colors py-5">
                            Destinations <iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="absolute top-full left-0 w-48 bg-white border border-gray-100 rounded-xl shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
<a className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-black" href="#">Domestic Tours</a>
<a className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-black border-t border-gray-50" href="#">International Tours</a>
</div>
</div>
<div className="relative group">
<button className="flex items-center gap-1 text-sm text-gray-500 hover:text-black transition-colors py-5">
                            Hotels <iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="absolute top-full left-0 w-48 bg-white border border-gray-100 rounded-xl shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
<a className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-black" href="#">Domestic Hotels</a>
<a className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-black border-t border-gray-50" href="#">International Hotels</a>
</div>
</div>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#offers">Special Offers</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-gray-500 hover:text-black transition-colors hidden sm:block">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="h-4 w-px bg-gray-200 hidden sm:block"></div>
<button className="text-sm font-medium text-gray-600 hover:text-black transition-colors hidden sm:block">Sign In</button>
<button className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors hidden sm:block">Sign Up</button>
<button className="relative text-gray-500 hover:text-black transition-colors ml-2">
<iconify-icon className="text-xl" icon="solar:cart-large-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="absolute -top-1 -right-1 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">2</span>
</button>
</div>
</div>
</nav>

<section className="relative h-[85vh] min-h-[600px] flex items-center justify-center pt-16">
<div className="absolute inset-0 z-0 bg-cover bg-center bg-fixed" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&amp'}}></div>
<div className="absolute inset-0 z-10 bg-black/20"></div>
<div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-6 drop-shadow-sm">
                Curate your next<br/>extraordinary journey.
            </h1>
<p className="text-base md:text-lg text-white/90 font-light mb-12 max-w-2xl drop-shadow-sm">
                Discover exclusive domestic and international destinations. Book world-class hotels and immersive tours with seamless precision.
            </p>

<div className="w-full max-w-4xl bg-white p-2 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-2">
<div className="flex-1 relative flex items-center bg-gray-50 rounded-xl px-4 py-3 hover:bg-gray-100 transition-colors cursor-text group">
<iconify-icon className="text-gray-400 group-hover:text-black transition-colors mr-3 text-lg" icon="solar:map-point-linear"></iconify-icon>
<div className="flex flex-col text-left">
<span className="text-xs font-medium text-gray-500 uppercase tracking-widest">Location</span>
<input className="bg-transparent border-none focus:ring-0 p-0 text-sm text-black placeholder-gray-400 font-medium outline-none w-full" placeholder="Where to?" type="text"/>
</div>
</div>
<div className="flex-1 relative flex items-center bg-gray-50 rounded-xl px-4 py-3 hover:bg-gray-100 transition-colors cursor-text group">
<iconify-icon className="text-gray-400 group-hover:text-black transition-colors mr-3 text-lg" icon="solar:calendar-linear"></iconify-icon>
<div className="flex flex-col text-left w-full">
<span className="text-xs font-medium text-gray-500 uppercase tracking-widest">Dates</span>
<div className="flex items-center text-sm font-medium text-gray-400">
<span>Add dates</span>
</div>
</div>
</div>
<div className="flex-1 relative flex items-center bg-gray-50 rounded-xl px-4 py-3 hover:bg-gray-100 transition-colors cursor-text group">
<iconify-icon className="text-gray-400 group-hover:text-black transition-colors mr-3 text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
<div className="flex flex-col text-left w-full">
<span className="text-xs font-medium text-gray-500 uppercase tracking-widest">Guests</span>
<div className="flex items-center text-sm font-medium text-gray-400">
<span>Add guests</span>
</div>
</div>
</div>
<button className="bg-black text-white px-8 py-4 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors whitespace-nowrap flex items-center justify-center gap-2">
<iconify-icon icon="solar:magnifer-linear"></iconify-icon> Search
                </button>
</div>
</div>
</section>

<section className="py-24 bg-white" id="tours">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-2">Trending Destinations</h2>
<p className="text-gray-500 text-sm">Explore our most sought-after domestic and international tours.</p>
</div>
<a className="hidden sm:flex items-center gap-1 text-sm font-medium text-black hover:opacity-70 transition-opacity" href="#">
                    View all <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group cursor-pointer">
<div className="relative w-full h-72 rounded-2xl overflow-hidden mb-4 bg-gray-100">
<img alt="Bali" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-medium border border-gray-100">International</div>
<button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-black transition-colors border border-gray-100 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
<iconify-icon icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-base font-medium">Bali Escapade</h3>
<div className="flex items-center gap-1 text-sm">
<iconify-icon className="text-black" icon="solar:star-bold"></iconify-icon>
<span>4.9</span>
</div>
</div>
<p className="text-gray-500 text-sm mb-2">7 Days • 6 Nights</p>
<div className="flex items-center justify-between">
<p className="text-sm"><span className="font-medium">$1,299</span> / person</p>
<span className="text-xs font-medium underline underline-offset-4 opacity-0 group-hover:opacity-100 transition-opacity">Select</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full h-72 rounded-2xl overflow-hidden mb-4 bg-gray-100">
<img alt="Paris" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-medium border border-gray-100">International</div>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-base font-medium">Parisian Dreams</h3>
<div className="flex items-center gap-1 text-sm">
<iconify-icon className="text-black" icon="solar:star-bold"></iconify-icon>
<span>4.8</span>
</div>
</div>
<p className="text-gray-500 text-sm mb-2">5 Days • 4 Nights</p>
<div className="flex items-center justify-between">
<p className="text-sm"><span className="font-medium">$1,850</span> / person</p>
<span className="text-xs font-medium underline underline-offset-4 opacity-0 group-hover:opacity-100 transition-opacity">Select</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full h-72 rounded-2xl overflow-hidden mb-4 bg-gray-100">
<img alt="Taj Mahal" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-medium border border-gray-100">Domestic</div>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-base font-medium">Golden Triangle</h3>
<div className="flex items-center gap-1 text-sm">
<iconify-icon className="text-black" icon="solar:star-bold"></iconify-icon>
<span>4.7</span>
</div>
</div>
<p className="text-gray-500 text-sm mb-2">6 Days • 5 Nights</p>
<div className="flex items-center justify-between">
<p className="text-sm"><span className="font-medium">$890</span> / person</p>
<span className="text-xs font-medium underline underline-offset-4 opacity-0 group-hover:opacity-100 transition-opacity">Select</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full h-72 rounded-2xl overflow-hidden mb-4 bg-gray-100">
<img alt="Swiss Alps" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-medium border border-gray-100">International</div>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-base font-medium">Swiss Alps Retreat</h3>
<div className="flex items-center gap-1 text-sm">
<iconify-icon className="text-black" icon="solar:star-bold"></iconify-icon>
<span>5.0</span>
</div>
</div>
<p className="text-gray-500 text-sm mb-2">8 Days • 7 Nights</p>
<div className="flex items-center justify-between">
<p className="text-sm"><span className="font-medium">$2,400</span> / person</p>
<span className="text-xs font-medium underline underline-offset-4 opacity-0 group-hover:opacity-100 transition-opacity">Select</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-50 border-y border-gray-200" id="offers">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight mb-2">Curated Hotel Stays</h2>
<p className="text-gray-500 text-sm mb-12">Exceptional domestic and international properties with exclusive discounts.</p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col">
<div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-medium border border-gray-100">International</div>
<div className="absolute bottom-3 left-3 bg-black text-white px-2 py-1 rounded-lg text-xs font-medium">-20% Today</div>
</div>
<h3 className="text-base font-medium mb-1">The Azure Resort &amp; Spa</h3>
<p className="text-gray-500 text-xs mb-4 flex items-center gap-1"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Maldives • Luxury</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
<div>
<p className="text-xs text-gray-400 line-through">$850</p>
<p className="text-sm"><span className="font-medium">$680</span> / night</p>
</div>
<button className="text-sm font-medium border border-gray-200 px-4 py-1.5 rounded-full hover:bg-gray-50 transition-colors">Book</button>
</div>
</div>

<div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col">
<div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-medium border border-gray-100">Domestic</div>
<div className="absolute bottom-3 left-3 bg-black text-white px-2 py-1 rounded-lg text-xs font-medium">Free Breakfast</div>
</div>
<h3 className="text-base font-medium mb-1">Metro Central Hotel</h3>
<p className="text-gray-500 text-xs mb-4 flex items-center gap-1"><iconify-icon icon="solar:map-point-linear"></iconify-icon> New York • Business</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
<div>
<p className="text-sm"><span className="font-medium">$320</span> / night</p>
</div>
<button className="text-sm font-medium border border-gray-200 px-4 py-1.5 rounded-full hover:bg-gray-50 transition-colors">Book</button>
</div>
</div>

<div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col">
<div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-medium border border-gray-100">International</div>
<div className="absolute bottom-3 left-3 bg-black text-white px-2 py-1 rounded-lg text-xs font-medium">Early Bird</div>
</div>
<h3 className="text-base font-medium mb-1">Riad Marrakech</h3>
<p className="text-gray-500 text-xs mb-4 flex items-center gap-1"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Morocco • Boutique</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
<div>
<p className="text-sm"><span className="font-medium">$150</span> / night</p>
</div>
<button className="text-sm font-medium border border-gray-200 px-4 py-1.5 rounded-full hover:bg-gray-50 transition-colors">Book</button>
</div>
</div>

<div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col">
<div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-medium border border-gray-100">Domestic</div>
<div className="absolute bottom-3 left-3 bg-black text-white px-2 py-1 rounded-lg text-xs font-medium">Last Room</div>
</div>
<h3 className="text-base font-medium mb-1">Aspen Mountain Lodge</h3>
<p className="text-gray-500 text-xs mb-4 flex items-center gap-1"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Colorado • Resort</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
<div>
<p className="text-sm"><span className="font-medium">$450</span> / night</p>
</div>
<button className="text-sm font-medium border border-gray-200 px-4 py-1.5 rounded-full hover:bg-gray-50 transition-colors">Book</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">

<div className="mb-8">
<div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
<a className="hover:text-black" href="#">Home</a>
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
<a className="hover:text-black" href="#">Tours</a>
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-black font-medium">Santorini Summer Escapade</span>
</div>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-2">Santorini Summer Escapade</h1>
<p className="text-sm text-gray-500 flex items-center gap-2">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Greece, Europe
                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
<span className="flex items-center gap-1"><iconify-icon className="text-black" icon="solar:star-bold"></iconify-icon> 4.9 (128 reviews)</span>
</p>
</div>
<div className="flex gap-2">
<button className="p-2 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors flex items-center justify-center">
<iconify-icon icon="solar:upload-square-linear"></iconify-icon>
</button>
<button className="p-2 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors flex items-center justify-center">
<iconify-icon icon="solar:heart-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-3 h-[50vh] min-h-[400px] mb-12 rounded-3xl overflow-hidden">
<div className="md:col-span-2 md:row-span-2 bg-gray-100 relative group cursor-pointer">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="bg-gray-100 relative group cursor-pointer">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="bg-gray-100 relative group cursor-pointer">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1515859005217-8a1f08870f59?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="bg-gray-100 relative group cursor-pointer">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="bg-gray-100 relative group cursor-pointer">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 flex items-center justify-center">
<span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">View all 24 photos</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">

<div className="lg:col-span-2 space-y-12">

<section>
<h2 className="text-xl font-medium tracking-tight mb-4">Overview</h2>
<p className="text-sm text-gray-600 leading-relaxed mb-6">
                            Experience the breathtaking beauty of Santorini. This 5-day curated itinerary takes you through the iconic white-washed villages of Oia, ancient ruins, and stunning volcanic beaches. Stay in premium cliff-side accommodations and enjoy exclusive sunset sailing experiences. Perfect for couples and photography enthusiasts.
                        </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-gray-100">
<div>
<p className="text-xs text-gray-400 mb-1">Duration</p>
<p className="text-sm font-medium">5 Days, 4 Nights</p>
</div>
<div>
<p className="text-xs text-gray-400 mb-1">Tour Type</p>
<p className="text-sm font-medium">Guided Group</p>
</div>
<div>
<p className="text-xs text-gray-400 mb-1">Group Size</p>
<p className="text-sm font-medium">Max 12 people</p>
</div>
<div>
<p className="text-xs text-gray-400 mb-1">Languages</p>
<p className="text-sm font-medium">English, Greek</p>
</div>
</div>
</section>

<section>
<h2 className="text-xl font-medium tracking-tight mb-4">What's Included</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-2xl border border-gray-100">
<div>
<h3 className="text-sm font-medium mb-4 flex items-center gap-2 text-green-700">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Inclusions
                                </h3>
<ul className="space-y-3 text-sm text-gray-600">
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5" icon="solar:check-read-linear"></iconify-icon> 4 nights in 4-star boutique hotel</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5" icon="solar:check-read-linear"></iconify-icon> Daily breakfast and 2 special dinners</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5" icon="solar:check-read-linear"></iconify-icon> Airport transfers</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5" icon="solar:check-read-linear"></iconify-icon> Catamaran sunset cruise</li>
</ul>
</div>
<div>
<h3 className="text-sm font-medium mb-4 flex items-center gap-2 text-red-700">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon> Exclusions
                                </h3>
<ul className="space-y-3 text-sm text-gray-600">
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5" icon="solar:close-square-linear"></iconify-icon> International flights</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5" icon="solar:close-square-linear"></iconify-icon> Travel insurance</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5" icon="solar:close-square-linear"></iconify-icon> Personal expenses</li>
</ul>
</div>
</div>
</section>

<section>
<h2 className="text-xl font-medium tracking-tight mb-6">Tour Itinerary</h2>
<div className="relative border-l border-gray-200 ml-3 space-y-8 pb-4">

<div className="relative pl-8">
<div className="absolute w-3 h-3 bg-black rounded-full -left-[6.5px] top-1.5 ring-4 ring-white"></div>
<h3 className="text-base font-medium mb-1">Day 1: Arrival &amp; Acclimation</h3>
<p className="text-sm text-gray-500 mb-3">Arrive at Thira Airport. Private transfer to your cliffside hotel in Oia. Evening welcome dinner with sea views.</p>
<div className="bg-gray-50 rounded-xl p-3 border border-gray-100 flex items-center gap-3">
<div className="w-12 h-12 rounded-lg bg-gray-200 overflow-hidden shrink-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div>
<p className="text-xs font-medium">Hotel Stay: The Oia Retreat</p>
<p className="text-xs text-gray-400">Check-in at 14:00</p>
</div>
</div>
</div>

<div className="relative pl-8">
<div className="absolute w-3 h-3 bg-white border border-gray-300 rounded-full -left-[6.5px] top-1.5"></div>
<h3 className="text-base font-medium mb-1">Day 2: Volcanic Exploration</h3>
<p className="text-sm text-gray-500">Morning hike to the Skaros Rock. Afternoon boat tour to the Nea Kameni volcano and hot springs.</p>
</div>

<div className="relative pl-8">
<div className="absolute w-3 h-3 bg-white border border-gray-300 rounded-full -left-[6.5px] top-1.5"></div>
<h3 className="text-base font-medium mb-1">Day 3: Sunset Sailing</h3>
<p className="text-sm text-gray-500">Free morning to explore local boutiques. At 15:00, board a luxury catamaran for a sunset cruise with BBQ dinner onboard.</p>
</div>

<div className="relative pl-8">
<div className="absolute w-3 h-3 bg-white border border-gray-300 rounded-full -left-[6.5px] top-1.5"></div>
<h3 className="text-base font-medium mb-1">Day 4: Departure</h3>
<p className="text-sm text-gray-500">Final breakfast enjoying the caldera view. Transfer to the airport according to your flight schedule.</p>
</div>
</div>
</section>

<section>
<h2 className="text-xl font-medium tracking-tight mb-4">Important Places Nearby</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex items-center justify-between py-3 border-b border-gray-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500"><iconify-icon icon="solar:point-on-map-linear"></iconify-icon></div>
<span className="text-sm font-medium">Oia Castle (Sunset View)</span>
</div>
<span className="text-xs text-gray-400">0.5 km</span>
</div>
<div className="flex items-center justify-between py-3 border-b border-gray-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500"><iconify-icon icon="solar:point-on-map-linear"></iconify-icon></div>
<span className="text-sm font-medium">Ammoudi Bay</span>
</div>
<span className="text-xs text-gray-400">1.2 km</span>
</div>
<div className="flex items-center justify-between py-3 border-b border-gray-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500"><iconify-icon icon="solar:plane-linear"></iconify-icon></div>
<span className="text-sm font-medium">Thira Airport</span>
</div>
<span className="text-xs text-gray-400">16 km</span>
</div>
</div>
</section>

<section>
<h2 className="text-xl font-medium tracking-tight mb-4">Policies</h2>
<div className="space-y-4">
<details className="group bg-white border border-gray-200 rounded-xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<span className="text-sm font-medium">Cancellation Policy</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-4 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-4 mt-2">
                                    Free cancellation up to 30 days before the tour start date. A 50% fee applies for cancellations within 14-29 days. Non-refundable if canceled less than 14 days prior to departure.
                                </div>
</details>
<details className="group bg-white border border-gray-200 rounded-xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<span className="text-sm font-medium">Hotel &amp; Booking Policy</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-4 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-4 mt-2">
                                    Check-in at accommodations is typically at 3:00 PM local time. Primary guest must be at least 18 years old. Valid government-issued ID and a credit card are required at check-in.
                                </div>
</details>
</div>
</section>
</div>

<div className="lg:col-span-1">
<div className="sticky top-24 bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
<div className="mb-6 pb-6 border-b border-gray-100">
<span className="text-2xl font-medium tracking-tight">$1,450</span> <span className="text-sm text-gray-500">/ person</span>
</div>

<div className="space-y-3 mb-6">
<div className="border border-gray-200 rounded-xl overflow-hidden">
<div className="grid grid-cols-2 border-b border-gray-200">
<div className="p-3 border-r border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
<label className="block text-xs font-medium text-gray-500 uppercase tracking-wide cursor-pointer">Check-in</label>
<input className="w-full text-sm font-medium outline-none bg-transparent cursor-pointer mt-1" readonly="" type="text" value="Aug 12, 2024"/>
</div>
<div className="p-3 cursor-pointer hover:bg-gray-50 transition-colors">
<label className="block text-xs font-medium text-gray-500 uppercase tracking-wide cursor-pointer">Check-out</label>
<input className="w-full text-sm font-medium outline-none bg-transparent cursor-pointer mt-1" readonly="" type="text" value="Aug 16, 2024"/>
</div>
</div>
<div className="p-3 cursor-pointer hover:bg-gray-50 transition-colors relative">
<label className="block text-xs font-medium text-gray-500 uppercase tracking-wide cursor-pointer">Travelers</label>
<select className="w-full text-sm font-medium outline-none bg-transparent cursor-pointer mt-1 appearance-none">
<option>2 Adults, 0 Children</option>
<option>1 Adult</option>
<option>2 Adults, 1 Child</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 translate-y-[-20%] pointer-events-none text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-4 mb-6">
<div className="flex justify-between text-sm">
<span className="text-gray-600 underline underline-offset-4 decoration-gray-300">$1,450 x 2 travelers</span>
<span>$2,900</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-gray-600 underline underline-offset-4 decoration-gray-300">Taxes &amp; fees</span>
<span>$180</span>
</div>
<div className="flex justify-between text-base font-medium pt-4 border-t border-gray-100">
<span>Total</span>
<span>$3,080</span>
</div>
</div>
<button className="w-full bg-black text-white py-4 rounded-xl text-sm font-medium hover:bg-gray-800 transition-transform active:scale-[0.98] flex items-center justify-center gap-2 mb-4">
                            Reserve Now
                        </button>
<p className="text-center text-xs text-gray-400 mb-6">You won't be charged yet</p>

<div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
<p className="text-xs text-gray-500 mb-3">Log in to apply member discounts and earn miles.</p>
<div className="flex gap-2 justify-center">
<button className="text-xs font-medium bg-white border border-gray-200 px-4 py-1.5 rounded-full hover:border-gray-300 transition-colors">Sign In</button>
<button className="text-xs font-medium text-gray-500 hover:text-black transition-colors px-2 py-1.5">Guest Checkout</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-50 border-t border-gray-200">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-center mb-16">Stories from travelers</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
<div className="flex text-black mb-4 gap-0.5">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-gray-600 leading-relaxed mb-6">"Booking our honeymoon through Atlas was seamless. The hotel recommendations were spot on, and the itinerary was perfectly balanced between activities and relaxation."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
</div>
<div>
<p className="text-sm font-medium">Sarah Jenkins</p>
<p className="text-xs text-gray-400">Booked Santorini Escapade</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
<div className="flex text-black mb-4 gap-0.5">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-sm text-gray-600 leading-relaxed mb-6">"Great platform for finding last-minute domestic hotel deals. The interface is clean, fast, and doesn't bombard you with hidden fees at checkout. Highly recommended."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
</div>
<div>
<p className="text-sm font-medium">Michael Chen</p>
<p className="text-xs text-gray-400">Booked Metro Central Hotel</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
<div className="flex text-black mb-4 gap-0.5">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-gray-600 leading-relaxed mb-6">"The detailed breakdown of inclusions and exclusions gave us complete peace of mind. The customer support team was also very responsive when we needed to change a date."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
</div>
<div>
<p className="text-sm font-medium">Elena Rodriguez</p>
<p className="text-xs text-gray-400">Booked Swiss Alps Retreat</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-white border-t border-gray-100 text-center">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-xl font-medium tracking-tight mb-4">Ready to start exploring?</h2>
<div className="flex flex-wrap justify-center gap-4 mb-8">
<button className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">Create Account</button>
<button className="bg-white text-black border border-gray-200 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">Sign In</button>
</div>
<div className="flex items-center justify-center gap-6 text-gray-400 grayscale opacity-60">
<iconify-icon className="text-2xl" icon="solar:card-linear"></iconify-icon>
<span className="text-xs font-medium tracking-widest uppercase">Secure Payments</span>
<div className="h-4 w-px bg-gray-200"></div>
<span className="text-xs font-medium">Visa</span>
<span className="text-xs font-medium">Mastercard</span>
<span className="text-xs font-medium">Amex</span>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-8 border-t border-gray-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<a className="text-xl font-semibold tracking-tighter uppercase mb-4 block" href="#">Atlas</a>
<p className="text-xs text-gray-500 mb-6 leading-relaxed">Modern booking infrastructure for the discerning traveler. Curated tours and premium hotels globally.</p>
<div className="flex gap-4 text-gray-400">
<a className="hover:text-black transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon></a>
<a className="hover:text-black transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon></a>
<a className="hover:text-black transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-medium mb-4">Book</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-black transition-colors" href="#">Domestic Tours</a></li>
<li><a className="hover:text-black transition-colors" href="#">International Tours</a></li>
<li><a className="hover:text-black transition-colors" href="#">Domestic Hotels</a></li>
<li><a className="hover:text-black transition-colors" href="#">International Hotels</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium mb-4">Support</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-black transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-black transition-colors" href="#">Cancellation Policy</a></li>
<li><a className="hover:text-black transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-black transition-colors" href="#">Manage Booking</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium mb-4">Company</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-black transition-colors" href="#">About</a></li>
<li><a className="hover:text-black transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-black transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-black transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-100 text-xs text-gray-400">
<p>© 2024 Atlas Travel. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-black transition-colors" href="#">Currency: USD</a>
<a className="hover:text-black transition-colors" href="#">Language: EN</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
