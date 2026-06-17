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



// Simple spotlight script
document.addEventListener('mousemove', e => {
const cards = document.querySelectorAll('.spotlight-card');
cards.forEach(card => {
const rect = card.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;
card.style.setProperty('--mouse-x', `${x}px`);
card.style.setProperty('--mouse-y', `${y}px`);
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
      

<div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>

<div className="fixed inset-0 z-0 pointer-events-none flex justify-center w-full max-w-7xl mx-auto px-6">
<div className="w-full h-full border-x border-dashed flex justify-center relative border-white/5">
<div className="h-full w-px bg-white/5"></div>
</div>
</div>

<div className="fixed top-6 left-0 right-0 flex justify-center z-50 px-4 pointer-events-none">
<nav className="glass-nav flex w-full max-w-5xl pointer-events-auto rounded-full p-2 pl-6 shadow-2xl items-center justify-between transition-all duration-300">

<div className="flex items-center gap-2">
<span className="text-amber-500">
</span>
<span className="uppercase text-base font-semibold text-white tracking-tight" onclick="window.location.href='https://share.google/PAPHI5RDrMefpxeia'" role="button">NEW SEASON INDIAN RESTAURANT AND HOTEL</span>
</div>

<div className="hidden lg:flex items-center gap-8 text-xs font-medium text-gray-400">
<a className="transition-colors hover:text-white" href="/#dining">Restaurant</a>
<a className="transition-colors hover:text-white" href="#hotel">Hotel</a>
<a className="transition-colors hover:text-white" href="#gallery">Photos</a>
<a className="transition-colors hover:text-white" href="#reviews">Reviews</a>
</div>

<div className="flex items-center gap-2">
<a className="hidden md:flex items-center gap-2 transition-colors text-xs font-medium border rounded-full pt-2 pr-4 pb-2 pl-4 hover:bg-white/10 text-gray-300 bg-white/5 border-white/5" href="tel:+441162662266"> 010 600 242</a>
<button className="px-5 py-2 rounded-full bg-gradient-to-b from-amber-500 text-xs font-semibold hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all border to-amber-600 text-white border-t-white/20 border-b-amber-700">
                    Book Now
                </button>
</div>
</nav>
</div>

<div className="spotlight-card group mx-4 sm:mx-6 lg:mt-32 max-w-7xl xl:mx-auto z-10 rounded-[32px] mt-28 p-[1px]" style={{'--mouse-x': '986.5px', '--mouse-y': '-41px'}}>
<div className="spotlight-inner overflow-hidden flex flex-col min-h-[800px] rounded-[32px] justify-center bg-[#050505] relative">

<div className="absolute top-0 right-0 w-[600px] h-[600px] blur-[120px] rounded-full pointer-events-none mix-blend-screen bg-amber-600/10"></div>
<main className="z-10 container lg:px-12 grid lg:grid-cols-2 gap-16 mr-auto ml-auto pt-20 pr-6 pb-20 pl-6 relative gap-x-16 gap-y-16 items-center">

<div className="max-w-2xl relative">
<div className="inline-flex text-[10px] uppercase font-bold text-amber-500 tracking-widest bg-amber-500/10 border-amber-500/20 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center" onclick="window.location.href='https://maps.app.goo.gl/eVuKhFRC6TSMj61m9'" role="button">171 Preah Sisowath Quay, Phnom Penh 12204</div>
<h1 className="text-5xl lg:text-7xl leading-[1.05] mb-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-b font-medium from-white via-white to-gray-400">
                        Authentic Flavors 
                        <span className="text-gray-600">at New Season.</span>
</h1>
<p className="leading-relaxed text-lg font-light text-gray-400 max-w-lg mb-10">Leicester's premier destination for authentic North, South Indian and Nepali Cuisines prepared by master-chef Mr. Arjun Baniya and Famous for our sizzlers, Jeera Chicken. We provide comfortable accommodation and warm hospitality.</p>
<div className="flex flex-col sm:flex-row gap-4">
</div>

<div className="flex gap-4 max-w-sm border-white/5 border-t mt-12 pt-6 gap-x-4 gap-y-4 items-center">
<div className="flex text-black bg-white w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/66f0e604-1794-48ad-a7c2-58374d2651b2_320w.webp)] bg-cover bg-center rounded-full items-center justify-center">
<span className="iconify" data-icon="lucide:g-circle" data-width="24"></span>
</div>
<div className="text-xs text-gray-500" onclick="window.location.href='https://share.google/lgrQEXJgHHupAhqLX';window.location.href='https://share.google/UJY96LY3r1FU4j8nm'" role="button">4.4 490 Google reviews ‧ ៛5–10 ‧ Indian restaurant.</div>
</div>
</div>

<div className="relative w-full">
<div className="grid grid-cols-2 gap-3 lg:ml-auto w-full max-w-[500px] mr-auto ml-auto">

<div className="col-span-2 overflow-hidden group h-48 border rounded-3xl relative border-white/10">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544365558-35aa4afcf11f?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
<div className="bg-center bg-gradient-to-t to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6bdaecf2-f42b-42dd-ba64-c9daabf4f73f_1600w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0 [--fx-filter:blur(10px)_liquid-glass(0,10)_saturate(1.25)_noise(0.5,1,0)] from-black/80"><img alt="Container background" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 bg-slate-950" data-container-bg="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6bdaecf2-f42b-42dd-ba64-c9daabf4f73f_3840w.jpg"/>
</div>
<div className="absolute bottom-5 left-5">
<div className="uppercase text-xs font-bold tracking-wider mb-1 text-amber-400">Fan Favourite</div>
<div className="text-lg font-medium text-white">Signature Jeera Chicken Sizzler</div>
</div>
</div>

<div className="col-span-1 overflow-hidden group h-48 border rounded-3xl relative border-white/10">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&amp;w=600&amp;auto=format&amp;fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
<div className="group-hover:bg-black/20 transition-colors bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d91df554-dfd6-47ae-8691-11533c578776_800w.jpg?w=800&amp;q=80)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0 bg-black/40"></div>
<div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
<div className="">
<div className="font-medium text-white">En-suite Rooms</div>
<div className="text-[10px] text-gray-300">Free Wifi</div>
</div>
</div>
</div>

<div className="col-span-1 flex flex-col hover:border-amber-500/30 transition-colors bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eb7462a6-820f-4bed-824a-a8c1251b5985_800w.jpg)] bg-cover bg-center border rounded-3xl pt-5 pr-5 pb-5 pl-5 justify-between border-white/10">
<div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:utensils" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20m14-7V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2zm0 0v7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="">
<div className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Specialty</div>
<div className="text-sm mt-1 text-gray-200">Sizzlers &amp; Curries</div>
<div className="text-[10px] text-gray-500 mt-0.5">Vegetarian Options</div>
</div>
</div>
</div>
</div>
</main>

<div className="border-t bg-[#030303] mt-auto border-white/5">
<div className="overflow-hidden relative w-full py-6 opacity-60">
<div className="ticker-track flex gap-16 items-center">
<div className="flex gap-16 shrink-0 items-center text-sm font-medium uppercase tracking-widest text-amber-200/50">
<span className="">Authentic North South Indian And Nepali Cuisine </span>
<span className="">•</span>
<span className="">Free Parking</span>
<span className="">•</span>
<span className="">Jeera Chicken</span>
<span className="">•</span>
<span className="">Double Room with Window</span>
<span className="">•</span>
<span className="">Classic Double Room with Balcony</span>
<span className="">•</span>
<span>Takes Bookings</span>
<span>•</span>
<span>Draft Beers</span>
</div>

<div className="flex gap-16 shrink-0 items-center text-sm font-medium uppercase tracking-widest text-amber-200/50">
<span>Authentic Punjabi</span>
<span>•</span>
<span>Free Parking</span>
<span>•</span>
<span>Jeera Chicken</span>
<span>•</span>
<span>Function Room</span>
<span>•</span>
<span>En-Suite Hotel</span>
<span>•</span>
<span>Takes Bookings</span>
<span>•</span>
<span>Draft Beers</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="spotlight-card group mx-4 sm:mx-6 max-w-7xl xl:mx-auto z-10 rounded-[32px] mt-4 p-[1px]" id="gallery" style={{'--mouse-x': '986.5px', '--mouse-y': '-859px'}}>
<div className="spotlight-inner lg:p-12 bg-[#050505] rounded-[32px] pt-8 pr-8 pb-8 pl-8">
<div className="flex mb-8 items-center justify-between">
<h2 className="text-2xl font-medium text-white">Photo Gallery</h2>
<div className="flex flex-col sm:flex-row gap-4 gap-x-4 gap-y-4">
<button className="flex gap-2 transition-all hover:bg-white/10 text-sm font-medium text-gray-300 bg-white/5 border-white/10 border rounded-full pt-3.5 pr-8 pb-3.5 pl-8 gap-x-2 gap-y-2 items-center justify-center">
<span className="" onclick="window.location.href='https://www.booking.com/hotel/kh/the-long.html'" role="button">View Rooms</span>
</button>
</div></div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[500px]">

<div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group border border-white/10">
<img alt="Restaurant Interior" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/51e74987-e9a4-48d9-a2a5-07f38b5215ab_1600w.webp?w=800&amp;q=80"/>
<div className="absolute bottom-4 left-4 backdrop-blur px-3 py-1 rounded-full text-xs bg-black/60 text-white">Main Dining Hall</div>
</div>

<div className="col-span-1 relative rounded-2xl overflow-hidden group border border-white/10">
<img alt="Curry" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3725d0ca-23bc-422b-ba13-5942548a82d7_800w.jpg?w=800&amp;q=80"/>
</div>

<div className="col-span-1 relative rounded-2xl overflow-hidden group border border-white/10">
<img alt="Sizzler" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/83f49b6f-a539-4e86-820e-4d14d3f11b35_800w.jpg?w=800&amp;q=80"/>
</div>

<div className="col-span-1 relative rounded-2xl overflow-hidden group border border-white/10">
<img alt="Hotel Room" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3772b35a-7b5e-44ef-b08b-b39b1515a3b2_800w.webp"/>
<div className="absolute bottom-2 right-2 backdrop-blur px-2 py-0.5 rounded text-[10px] bg-black/60 text-white">Double Room</div>
</div>

<div className="col-span-1 relative rounded-2xl overflow-hidden group border border-white/10">
<img alt="Naan Bread" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/17fb45ef-44f8-42d1-a617-2f2f7735bfdd_800w.jpg?w=800&amp;q=80"/>
</div>
</div>
</div>
</div>

<div className="spotlight-card group mx-4 sm:mx-6 max-w-7xl xl:mx-auto z-10 rounded-[32px] mt-4 p-[1px]" id="dining" style={{'--mouse-x': '986.5px', '--mouse-y': '-1555px'}}>
<div className="spotlight-inner rounded-[32px] bg-[#050505] relative flex flex-col">
<div className="p-6 sm:p-12">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-5xl tracking-tight mb-4 text-white">Our Menu Highlights</h2>
<p className="text-gray-500 max-w-lg mx-auto text-sm font-light">Featuring the famous Jeera Chicken and Tandoori Sizzlers.</p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="group relative p-5 bg-white/[0.02] border rounded-2xl hover:border-amber-500/30 transition-all duration-300 border-white/5">
<div className="flex justify-between items-start mb-2">
<h4 className="text-base font-medium group-hover:text-amber-400 transition-colors text-white">Jeera Chicken</h4>
<span className="text-amber-500 font-mono text-sm">£10.50</span>
</div>
<p className="text-xs font-light mb-3 leading-relaxed text-gray-400">Our most famous dish. Succulent chicken wings tossed in roasted cumin and spices.</p>
<span className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded border border-amber-500/20 bg-amber-500/5 text-amber-400">Signature Dish</span>
</div>

<div className="group relative p-5 bg-white/[0.02] border rounded-2xl hover:border-amber-500/30 transition-all duration-300 border-white/5">
<div className="flex justify-between items-start mb-2">
<h4 className="text-base font-medium group-hover:text-amber-400 transition-colors text-white">Mixed Grill Sizzler</h4>
<span className="text-amber-500 font-mono text-sm">£16.95</span>
</div>
<p className="text-xs font-light mb-3 leading-relaxed text-gray-400">A platter of lamb chops, seekh kebabs, chicken tikka, and wings served on a sizzling hot plate.</p>
<span className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded border border-red-500/20 bg-red-500/5 text-red-400">Crowd Favourite</span>
</div>

<div className="group relative p-5 bg-white/[0.02] border rounded-2xl hover:border-amber-500/30 transition-all duration-300 border-white/5">
<div className="flex justify-between items-start mb-2">
<h4 className="text-base font-medium group-hover:text-amber-400 transition-colors text-white">Chilli Paneer</h4>
<span className="text-amber-500 font-mono text-sm">£9.50</span>
</div>
<p className="text-xs font-light mb-3 leading-relaxed text-gray-400">Cubes of cottage cheese wok-fried with onions, peppers, and green chillies.</p>
<span className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded border border-green-500/20 bg-green-500/5 text-green-400">Vegetarian</span>
</div>

<div className="group relative p-5 bg-white/[0.02] border rounded-2xl hover:border-amber-500/30 transition-all duration-300 border-white/5">
<div className="flex justify-between items-start mb-2">
<h4 className="text-base font-medium group-hover:text-amber-400 transition-colors text-white">Lamb Karahi</h4>
<span className="text-amber-500 font-mono text-sm">£12.50</span>
</div>
<p className="text-xs font-light mb-3 leading-relaxed text-gray-400">Tender lamb cooked in a traditional wok with tomatoes, ginger, and garlic.</p>
<span className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded border border-white/10 text-gray-400">Classic</span>
</div>
</div>
</div>
</div>
</div>

<div className="spotlight-card group mx-4 sm:mx-6 max-w-7xl xl:mx-auto rounded-[32px] mt-4 p-[1px]" id="hotel" style={{'--mouse-x': '986.5px', '--mouse-y': '-2100px'}}>
<div className="spotlight-inner rounded-[32px] bg-[#050505] p-8 lg:p-16 relative overflow-hidden">
<div className="grid lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-5 relative z-10">
<div className="inline-flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-widest mb-6">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bed-double" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4m-8-6v6M2 18h20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        New Season Hotel
                    </div>
<h2 className="text-3xl lg:text-4xl tracking-tight mb-6 text-white">
                        Stay on <span className="text-gray-500">Melton Road.</span>
</h2>
<p className="font-light mb-8 leading-relaxed text-gray-400">
                        Conveniently located above the restaurant, our clean and modern rooms provide the perfect base for exploring Leicester. Ideal for business travellers and families.
                    </p>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-3 text-sm text-gray-300">
<svg aria-hidden="true" className="iconify text-green-500 iconify--lucide" data-icon="lucide:check-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg> Ensuite Bathrooms
                        </div>
<div className="flex items-center gap-3 text-sm text-gray-300">
<svg aria-hidden="true" className="iconify text-green-500 iconify--lucide" data-icon="lucide:check-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg> Flat Screen TV &amp; Wifi
                        </div>
<div className="flex items-center gap-3 text-sm text-gray-300">
<svg aria-hidden="true" className="iconify text-green-500 iconify--lucide" data-icon="lucide:check-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg> Complimentary Tea/Coffee
                        </div>
</div>
</div>
<div className="lg:col-span-7 relative">
<div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-white/10">
<img alt="Hotel Room" className="hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/37d6991d-f574-4809-8dd2-6739cdedba1e_1600w.webp"/>
</div>
</div>
</div>
</div>
</div>

<div className="spotlight-card group mx-4 sm:mx-6 max-w-7xl xl:mx-auto rounded-[32px] mt-4 p-[1px]" id="reviews" style={{'--mouse-x': '986.5px', '--mouse-y': '-2612.078125px'}}>
<div className="spotlight-inner lg:p-16 overflow-hidden bg-[#050505] rounded-[32px] pt-8 pr-8 pb-8 pl-8">
<div className="flex items-center justify-between mb-12">
<h2 className="text-2xl font-medium text-white">What Guests Say</h2>
<div className="flex items-center gap-2 px-3 py-1 rounded-full border bg-white/5 border-white/10">
<span className="iconify text-white" data-icon="lucide:g-circle" data-width="16"></span>
<span className="text-xs text-gray-300">Google Reviews</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#0f0f0f] border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative border-white/5">
<div className="flex gap-1 text-amber-500 mb-4">
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="leading-relaxed cursor-pointer text-sm font-light mb-6 text-gray-300" onclick="window.location.href='https://share.google/ks8avhTWXI0YNFkhk';window.location.href='https://share.google/ks8avhTWXI0YNFkhk'" role="button">Wah, very nice indian foods in phnom penh., we stay 13 days in phnom penh we areindian foods foods lover and we went different indian restaurant everyday but we went twice in this restauran, finally very nice foods in this restaurant as we had order chicken tikka masala, garlic naan, jeera rive, veg handi, banana lassi, tandoori chicken and some others, all dishes were very delicious and reasonable price, also staffs were kind and clean the place. Lovely
Food: 5/5 | Service: 5/5 | Atmosphere: 5/5</p>
<div className="text-xs font-semibold text-white">Bharat Singh</div>
<div className="text-[10px] text-gray-500">Indian</div>
</div>

<div className="p-6 rounded-2xl bg-[#0f0f0f] border relative border-white/5">
<div className="flex gap-1 text-amber-500 mb-4">
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-sm leading-relaxed mb-6 font-light text-gray-300">"Stayed in the hotel for 2 nights. Room was clean, bed was comfy and the shower was hot. Great location for Melton road shopping."</p>
<div className="text-xs font-semibold text-white">David W.</div>
<div className="text-[10px] text-gray-500">Hotel Guest</div>
</div>

<div className="p-6 rounded-2xl bg-[#0f0f0f] border relative border-white/5">
<div className="flex gap-1 text-amber-500 mb-4">
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-sm leading-relaxed mb-6 font-light text-gray-300">"One of the best Indian pubs/restaurants in Leicester. The atmosphere is great and the staff are very friendly. Lamb chops are a must."</p>
<div className="text-xs font-semibold text-white">Kiran M.</div>
<div className="text-[10px] text-gray-500">Regular</div>
</div>
</div>
</div>
</div>

<div className="spotlight-card group mx-4 sm:mx-6 max-w-7xl xl:mx-auto rounded-[32px] mt-4 p-[1px]" id="contact" style={{'--mouse-x': '986.5px', '--mouse-y': '-3221.328125px'}}>
<div className="spotlight-inner bg-[#050505] rounded-[32px] overflow-hidden flex flex-col">

<div className="px-8 py-16 bg-[#030303]">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<span className="text-amber-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:flame" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0a5 5 0 0 1 1-3a1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
<span className="text-sm font-bold tracking-widest uppercase text-white">NEW SEASON</span>
</div>
<p className="text-gray-500 text-sm max-w-xs mb-6">The heart of Melton Road. Authentic Indian dining and comfortable hotel suites in Leicester.</p>
<div className="flex gap-4 text-gray-400">
<a className="transition-colors hover:text-white" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:facebook" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="transition-colors hover:text-white" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
</div>
</div>
<div className="">
<h4 className="text-sm font-semibold mb-4 text-white">Location</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li className="flex items-start gap-2">
<svg aria-hidden="true" className="iconify shrink-0 mt-0.5 iconify--lucide" data-icon="lucide:map-pin" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
<span className="">196 Melton Rd,Leicester LE4 7EE,United Kingdom</span>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold mb-4 text-white">Contact</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:phone" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 0116 266 2266</li>
</ul>
</div>
</div>
<div className="mt-16 pt-8 border-t flex flex-col sm:flex-row justify-between items-center text-xs border-white/5 text-gray-600">
<p>© 2024 New Season Restaurant &amp; Hotel. All rights reserved.</p>
</div>
</div>
</div>
</div>

    </>
  );
}
