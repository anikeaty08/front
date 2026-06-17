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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
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
      

<div className="relative w-full bg-[#DFFF00] min-h-screen flex flex-col overflow-hidden">

<nav className="w-full px-6 py-6 flex justify-between items-center z-50">
<div className="text-lg font-semibold tracking-tight uppercase">Packit Jacket</div>
<div className="hidden md:flex gap-8 text-sm font-medium text-zinc-800">
<a className="hover:opacity-70" href="#">Pricing</a>
<a className="hover:opacity-70" href="#">Products</a>
<a className="hover:opacity-70" href="#">Cartmement</a>
</div>
</nav>

<div className="flex-grow relative flex flex-col items-center justify-center pt-10">

<div className="absolute top-24 left-6 md:left-20 max-w-sm z-20">
<p className="font-semibold text-lg mb-2">Carry More. Pay Less.</p>
<p className="text-zinc-800 text-lg leading-relaxed">
                    The wearable jacket engineered with huge, functional pockets that let you pack more without extra luggage fees.
                </p>
</div>

<div className="absolute top-32 right-6 md:right-20 z-20 flex gap-2 items-center">
<button className="bg-white px-8 py-3 rounded-full text-sm font-semibold tracking-tight hover:shadow-lg transition-all">
                    SHOP NOW
                </button>
<div className="bg-black text-[#DFFF00] p-3 rounded-md">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none select-none">
<h1 className="text-[12rem] md:text-[18rem] font-bold leading-none tracking-tighter text-black/10 md:text-black mix-blend-overlay opacity-80 whitespace-nowrap">
                    HUGE POCKETS
                </h1>
</div>

<div className="relative z-10 mt-10 md:mt-0">
<img alt="Man in coat" className="h-[60vh] md:h-[80vh] object-cover object-top drop-shadow-2xl mix-blend-hard-light grayscale contrast-125" src="https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="bg-[#1a1a1a] text-[#DFFF00] py-4 w-full z-20 overflow-hidden whitespace-nowrap">
<div className="inline-flex gap-12 animate-marquee items-center text-2xl font-semibold tracking-tight uppercase">
<span>4 Huge Pockets</span>
<span>•</span>
<span>Zero Baggage Fees</span>
<span>•</span>
<span>Forever And Ever</span>
<span>•</span>
<span>4 Huge Pockets</span>
<span>•</span>
<span>Zero Baggage Fees</span>
<span>•</span>
<span>Forever And Ever</span>
</div>
</div>
</div>

<section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-24">
<h2 className="text-center text-4xl font-semibold tracking-tight mb-16">Benefits of our Product</h2>

<div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
<div className="flex-1 space-y-6">
<div className="w-8 h-8 bg-zinc-900 text-white flex items-center justify-center text-sm font-medium rounded">1</div>
<h3 className="text-2xl font-semibold tracking-tight">Avoid Extra Baggage Fees</h3>
<p className="text-zinc-600 text-lg leading-relaxed">
                    Store travel essentials in strategically designed pockets that don't count as carry-on luggage. Save money on every single flight you take.
                </p>
</div>
<div className="flex-1 relative">
<div className="bg-gray-100 p-4 rounded-3xl transform rotate-2">
<img alt="Airport" className="w-full h-80 object-cover rounded-2xl grayscale" src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24">
<div className="flex-1 space-y-6">
<div className="w-8 h-8 bg-zinc-900 text-white flex items-center justify-center text-sm font-medium rounded">2</div>
<h3 className="text-2xl font-semibold tracking-tight">Keep Essentials Easily Accessible</h3>
<p className="text-zinc-600 text-lg leading-relaxed">
                    Passport, phone, charger, snacks — everything stays within reach without digging through a bag. Perfect for security checks.
                </p>
</div>
<div className="flex-1 relative">
<div className="bg-gray-100 p-4 rounded-3xl transform -rotate-2">
<img alt="Traveler" className="w-full h-80 object-cover rounded-2xl grayscale" src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
<div className="flex-1 space-y-6">
<div className="w-8 h-8 bg-zinc-900 text-white flex items-center justify-center text-sm font-medium rounded">3</div>
<h3 className="text-2xl font-semibold tracking-tight">Reduce the Need for a Backpack or Small Bag</h3>
<p className="text-zinc-600 text-lg leading-relaxed">
                    Free your hands and lighten your load with built-in storage that blends replaces extra bags entirely.
                </p>
</div>
<div className="flex-1 relative">
<div className="bg-gray-100 p-4 rounded-3xl transform rotate-1">
<img alt="Walking" className="w-full h-80 object-cover rounded-2xl grayscale" src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="bg-[#222] text-white py-24 px-6 md:px-12">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1 space-y-6">
<h2 className="text-[#DFFF00] text-3xl font-semibold tracking-tight">Introducing the Huge Ass Pockets™ Jacket</h2>
<p className="text-zinc-300 text-lg leading-relaxed">
                    A travel jacket designed to carry what your bag can't. Perfect for flights, day trips, theme parks, and everyday commuting — without weighing you down.
                </p>
<p className="text-zinc-300 text-lg leading-relaxed">
                    Every pocket is placed with purpose, giving you balanced load distribution, quick-access zones, and discreet storage that blends seamlessly into the jacket's design.
                </p>
</div>
<div className="flex-1 w-full">
<div className="relative w-full aspect-video bg-zinc-800 rounded-xl overflow-hidden group cursor-pointer">
<img alt="Video thumbnail" className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white/20 backdrop-blur-sm p-6 rounded-full group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-white fill-current" data-lucide="play"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl font-semibold tracking-tight">Product Features section</h2>
<div className="flex gap-2">
<button className="p-3 bg-zinc-100 hover:bg-zinc-200 rounded text-zinc-600"><i className="w-5 h-5" data-lucide="arrow-left"></i></button>
<button className="p-3 bg-zinc-900 hover:bg-zinc-800 rounded text-white"><i className="w-5 h-5" data-lucide="arrow-right"></i></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group">
<div className="bg-zinc-100 rounded-2xl p-4 mb-4 aspect-[4/5] overflow-hidden">
<img alt="Feature" className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-center font-medium text-lg">Hidden pockets</p>
</div>

<div className="group">
<div className="bg-zinc-100 rounded-2xl p-4 mb-4 aspect-[4/5] overflow-hidden">
<img alt="Feature" className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1505022610485-0249ba5b3675?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-center font-medium text-lg">Waterproof materials</p>
</div>

<div className="group">
<div className="bg-zinc-100 rounded-2xl p-4 mb-4 aspect-[4/5] overflow-hidden">
<img alt="Feature" className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<p className="text-center font-medium text-lg">Lightweight construction</p>
</div>

<div className="group">
<div className="bg-zinc-100 rounded-2xl p-4 mb-4 aspect-[4/5] overflow-hidden">
<img alt="Feature" className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-center font-medium text-lg">Anti-theft zippers</p>
</div>
</div>
</section>

<section className="flex flex-col md:flex-row h-auto md:h-[600px]">
<div className="md:w-1/4 h-80 md:h-full">
<img alt="Woman in coat" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="md:w-2/4 bg-gray-50 flex flex-col justify-center items-center px-12 py-16 text-center">
<div className="w-24 h-px bg-zinc-400 mb-8"></div>
<h2 className="text-4xl md:text-5xl font-serif italic font-semibold text-zinc-900 leading-tight">
                Stop Paying Airlines for extra space you already own
            </h2>
<div className="w-24 h-px bg-zinc-400 mt-8"></div>
</div>
<div className="md:w-1/4 h-80 md:h-full">
<img alt="Man in coat" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<section className="bg-[#DFFF00] py-24 px-6 md:px-12">
<h3 className="text-center text-3xl font-semibold tracking-tight uppercase mb-12 text-black">As Seen In</h3>

<div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center opacity-80 mb-16 grayscale mix-blend-multiply">
<span className="text-2xl font-bold font-serif">ABC NEWS</span>
<span className="text-2xl font-bold font-serif">International Business Times</span>
<span className="text-2xl font-bold font-sans">NBC</span>
<span className="text-2xl font-bold font-serif">CBS</span>
<span className="text-2xl font-bold font-sans">USA TODAY</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">

<div className="bg-white p-8 relative rounded-tr-3xl shadow-sm">
<div className="text-[#DFFF00] text-6xl font-serif absolute top-4 left-6">“</div>
<p className="mt-8 text-lg font-medium relative z-10">Beating $60+ carry-on fees. The smartest way to travel in 2024.</p>
<div className="mt-8 pt-6 border-t border-zinc-100">
<span className="font-bold text-sm">USA TODAY</span>
</div>
</div>

<div className="bg-white p-8 relative rounded-tr-3xl shadow-sm">
<div className="text-[#DFFF00] text-6xl font-serif absolute top-4 left-6">“</div>
<p className="mt-8 text-lg font-medium relative z-10">Frontline of a travel revolution. A must have for frequent flyers.</p>
<div className="mt-8 pt-6 border-t border-zinc-100">
<span className="font-bold text-sm">AP ASSOCIATED PRESS</span>
</div>
</div>

<div className="bg-white p-8 relative rounded-tr-3xl shadow-sm">
<div className="text-[#DFFF00] text-6xl font-serif absolute top-4 left-6">“</div>
<p className="mt-8 text-lg font-medium relative z-10">One startup's war on baggage fees. The jacket that pays for itself.</p>
<div className="mt-8 pt-6 border-t border-zinc-100">
<span className="font-bold text-sm">NBC NEWS</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight mb-16">Comparison chart</h2>
<div className="grid grid-cols-3 gap-4 text-center items-center">

<div className="col-span-1 text-right pr-4"></div>
<div className="col-span-1 py-4 font-semibold text-xl">Backpack</div>
<div className="col-span-1 py-4 bg-[#DFFF00] rounded-t-xl font-bold text-xl scale-105 shadow-sm transform translate-y-2">Your Jacket</div>

<div className="col-span-3 grid grid-cols-4 items-center border-b border-gray-100">
<div className="col-span-1 text-left py-6 pl-4 text-lg font-medium text-zinc-500">Hands-free</div>
<div className="col-span-1 bg-gray-50 py-6 m-1 rounded"><i className="mx-auto text-red-500 w-6 h-6" data-lucide="x"></i></div>
<div className="col-span-1 bg-[#DFFF00] py-6 scale-110 shadow-sm z-10"><i className="mx-auto text-black w-6 h-6" data-lucide="check"></i></div>
<div className="col-span-1 bg-gray-50 py-6 m-1 rounded text-lg font-semibold">Carry on bag</div>
</div>

<div className="col-span-3 grid grid-cols-4 items-center border-b border-gray-100">
<div className="col-span-1 text-left py-6 pl-4 text-lg font-medium text-zinc-500">Avoids fees</div>
<div className="col-span-1 bg-white py-6"><i className="mx-auto text-red-500 w-6 h-6" data-lucide="x"></i></div>
<div className="col-span-1 bg-[#DFFF00] py-6 scale-110 shadow-sm z-10"><i className="mx-auto text-black w-6 h-6" data-lucide="check"></i></div>
<div className="col-span-1 bg-white py-6"><i className="mx-auto text-red-500 w-6 h-6" data-lucide="x"></i></div>
</div>

<div className="col-span-3 grid grid-cols-4 items-center border-b border-gray-100">
<div className="col-span-1 text-left py-6 pl-4 text-lg font-medium text-zinc-500">Security friendly</div>
<div className="col-span-1 bg-gray-50 py-6 m-1 rounded"><i className="mx-auto text-red-500 w-6 h-6" data-lucide="x"></i></div>
<div className="col-span-1 bg-[#DFFF00] py-6 scale-110 shadow-sm z-10"><i className="mx-auto text-black w-6 h-6" data-lucide="check"></i></div>
<div className="col-span-1 bg-gray-50 py-6 m-1 rounded"><i className="mx-auto text-red-500 w-6 h-6" data-lucide="x"></i></div>
</div>

<div className="col-span-3 grid grid-cols-4 items-center">
<div className="col-span-1 text-left py-6 pl-4 text-lg font-medium text-zinc-500">Weight comfort</div>
<div className="col-span-1 py-6 text-lg">Med</div>
<div className="col-span-1 bg-[#DFFF00] py-8 rounded-b-xl scale-105 shadow-sm transform -translate-y-2 text-lg font-semibold">High</div>
<div className="col-span-1 py-6 text-lg">Low</div>
</div>
</div>
</section>

<section className="bg-[#222] py-24 px-6">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-12">Lifestyle Imagery</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="relative aspect-[9/16] rounded-2xl overflow-hidden group bg-zinc-800">
<img alt="Lifestyle 1" className="w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<span className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">PRODUCT DEMO</span>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white/90 p-4 rounded-full"><i className="w-6 h-6 fill-black" data-lucide="play"></i></div>
</div>
</div>

<div className="relative aspect-[9/16] rounded-2xl overflow-hidden group bg-zinc-800 border-2 border-zinc-700">
<img alt="Lifestyle 2" className="w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<span className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">PRODUCT DEMO</span>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white/90 p-4 rounded-full"><i className="w-6 h-6 fill-black" data-lucide="play"></i></div>
</div>
</div>

<div className="relative aspect-[9/16] rounded-2xl overflow-hidden group bg-zinc-800">
<img alt="Lifestyle 3" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">YOUTUBE</span>
<div className="absolute top-1/2 left-0 w-full text-center px-4 transform -translate-y-1/2">
<h4 className="text-3xl text-[#DFFF00] font-bold italic mb-4 drop-shadow-md">Packit Jacket</h4>
<div className="inline-block bg-white/90 p-4 rounded-full"><i className="w-6 h-6 fill-black" data-lucide="play"></i></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
<div className="flex flex-col lg:flex-row gap-16">

<div className="flex-1 flex gap-4 items-end">
<div className="w-1/2">
<img alt="Person" className="w-full h-64 object-cover rounded-xl grayscale" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-1/2 relative">
<img alt="Person" className="w-full h-80 object-cover rounded-xl" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute -top-12 left-0 text-xs text-zinc-500 bg-white p-2">
                        Shipping times vary by location, but most orders arrive within 5-10 business days.
                    </div>
</div>
</div>

<div className="flex-1 space-y-8">
<div className="border-b border-zinc-200 pb-6">
<h4 className="text-lg font-semibold cursor-pointer flex justify-between items-center">
                        How much can I really fit in the Packit Jacket?
                    </h4>
</div>
<div className="border-b border-zinc-200 pb-6">
<h4 className="text-lg font-semibold cursor-pointer flex justify-between items-center">
                        Is the jacket water-resistant?
                    </h4>
</div>
<div className="border-b border-zinc-200 pb-6">
<h4 className="text-lg font-semibold cursor-pointer flex justify-between items-center mb-4">
                        How do I choose my size?
                    </h4>
<p className="text-zinc-600 leading-relaxed text-sm">
                        A lot! Most people fit a laptop, shoes, snacks, a water bottle, travel docs, and more. The pockets are massive and made from sturdy fabric. I personally use the jacket regularly when traveling and fit a 15 inch laptop, charger, lots of underwear and socks, a sweater, a pair of jeans, two pairs of shorts, toiletries, and several tshirts.
                    </p>
</div>
<div className="border-b border-zinc-200 pb-6">
<h4 className="text-lg font-semibold cursor-pointer flex justify-between items-center">
                        What is your return policy?
                    </h4>
</div>
</div>
</div>
</section>

<footer className="bg-[#DFFF00] pt-24 pb-12 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto">
<h1 className="text-[12vw] font-bold leading-none tracking-tighter text-black/90 text-center mb-16 mix-blend-multiply opacity-90 select-none">
                HUGE POCKETS
            </h1>
<div className="flex flex-col md:flex-row justify-between items-end border-t border-black/10 pt-8">
<div className="mb-6 md:mb-0">
<div className="font-bold text-lg uppercase tracking-tight">Packit Jacket</div>
</div>
<div className="flex gap-8 text-sm font-medium">
<a className="hover:underline" href="#">Pricing</a>
<a className="hover:underline" href="#">Products</a>
<a className="hover:underline" href="#">Cartmembership</a>
</div>
</div>
<div className="mt-12 text-center md:text-left text-xs text-black/60">
                © 2025 Packit Jacket. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
