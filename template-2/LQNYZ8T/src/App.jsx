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
      

<nav className="w-full border-b border-[#F5F5F7]">
<div className="max-w-6xl mx-auto flex items-center justify-between py-5 px-4">
<div className="flex items-center space-x-8">
<span className="text-2xl font-bold text-[#FF4D00]">Travelly</span>
<div className="hidden md:flex space-x-8 text-base font-medium text-[#1C1C1E]">
<a className="hover:text-[#FF4D00] transition" href="#">デスティネーション</a>
<a className="hover:text-[#FF4D00] transition" href="#">お得情報</a>
<a className="hover:text-[#FF4D00] transition" href="#">お問い合わせ</a>
</div>
</div>
<a className="hidden md:inline-block ml-4 px-6 py-2 border border-[#FF4D00] text-[#FF4D00] font-medium rounded-lg bg-white hover:bg-[#FFF4F0] transition" href="#">Sign in</a>
<button className="md:hidden flex items-center p-2">

<svg fill="none" height="28" stroke="#1C1C1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="28">
<rect height="2" rx="1" width="18" x="5" y="8"></rect>
<rect height="2" rx="1" width="18" x="5" y="14"></rect>
<rect height="2" rx="1" width="18" x="5" y="20"></rect>
</svg>
</button>
</div>
</nav>

<section className="max-w-6xl mx-auto mt-16 px-4 flex flex-col items-center text-center">
<h1 className="text-[48px] md:text-[56px] font-bold text-[#1C1C1E] leading-tight mb-6">Plan your next trip</h1>
<p className="text-lg md:text-xl text-[#555] mb-10 max-w-2xl">Find the best deals and destinations for your perfect getaway. Let's make your travel dreams come true!</p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="bg-[#FF4D00] text-white font-medium px-8 py-3 rounded-lg shadow hover:shadow-md transition" href="#">Explore deals</a>
<a className="border border-[#FF4D00] text-[#FF4D00] font-medium px-8 py-3 rounded-lg bg-white hover:bg-[#FFF4F0] transition" href="#">Sign in</a>
</div>

<div className="w-full bg-white rounded-xl shadow-md mt-12 p-6 flex flex-col md:flex-row items-center gap-4 md:gap-6">

<div className="flex items-center bg-[#F5F5F7] rounded-lg px-4 py-3 flex-1 min-w-[170px]">

<svg className="w-5 h-5 text-[#A3A3A3] mr-2" fill="none" stroke="#A3A3A3" strokeWidth="2" viewBox="0 0 24 24">
<circle cx="11" cy="11" r="8"></circle>
<line x1="21" x2="16.65" y1="21" y2="16.65"></line>
</svg>
<input className="bg-transparent outline-none w-full text-base text-[#1C1C1E] placeholder-[#A3A3A3]" placeholder="Where to?" />
</div>

<div className="flex items-center bg-[#F5F5F7] rounded-lg px-4 py-3 flex-1 min-w-[130px]">
<svg className="w-5 h-5 text-[#A3A3A3] mr-2" fill="none" stroke="#A3A3A3" strokeWidth="2" viewBox="0 0 24 24">
<rect height="18" rx="4" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
</svg>
<input className="bg-transparent outline-none w-full text-base text-[#1C1C1E]" placeholder="Check-in" type="date" />
</div>

<div className="flex items-center bg-[#F5F5F7] rounded-lg px-4 py-3 flex-1 min-w-[130px]">
<svg className="w-5 h-5 text-[#A3A3A3] mr-2" fill="none" stroke="#A3A3A3" strokeWidth="2" viewBox="0 0 24 24">
<rect height="18" rx="4" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
</svg>
<input className="bg-transparent outline-none w-full text-base text-[#1C1C1E]" placeholder="Check-out" type="date" />
</div>

<div className="flex items-center bg-[#F5F5F7] rounded-lg px-4 py-3 flex-1 min-w-[110px]">
<svg className="w-5 h-5 text-[#A3A3A3] mr-2" fill="none" stroke="#A3A3A3" strokeWidth="2" viewBox="0 0 24 24">
<circle cx="12" cy="7" r="4"></circle>
<path d="M5.5 21c1.5-4 11.5-4 13 0"></path>
</svg>
<input className="bg-transparent outline-none w-full text-base text-[#1C1C1E]" min="1" placeholder="Guests" type="number" />
</div>

<button className="flex items-center bg-[#FF4D00] text-white font-medium px-6 py-3 rounded-lg shadow hover:shadow-md transition">
<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<circle cx="11" cy="11" r="8"></circle>
<line x1="21" x2="16.65" y1="21" y2="16.65"></line>
</svg>
        Search
      </button>
</div>
</section>

<section className="max-w-6xl mx-auto mt-20 px-4">
<h2 className="text-[32px] md:text-[40px] font-bold text-[#1C1C1E] mb-8">Popular Destinations</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

<div className="relative rounded-xl overflow-hidden shadow-md bg-white">
<img alt="Bali" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" />
<div className="absolute bottom-4 left-4 bg-black/50 px-3 py-2 rounded-lg">
<span className="text-white font-bold text-lg">Bali</span>
</div>
</div>

<div className="relative rounded-xl overflow-hidden shadow-md bg-white">
<img alt="Paris" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=600&q=80" />
<div className="absolute bottom-4 left-4 bg-black/50 px-3 py-2 rounded-lg">
<span className="text-white font-bold text-lg">Paris</span>
</div>
</div>

<div className="relative rounded-xl overflow-hidden shadow-md bg-white">
<img alt="Tokyo" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80" />
<div className="absolute bottom-4 left-4 bg-black/50 px-3 py-2 rounded-lg">
<span className="text-white font-bold text-lg">Tokyo</span>
</div>
</div>

<div className="relative rounded-xl overflow-hidden shadow-md bg-white">
<img alt="New York" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80" />
<div className="absolute bottom-4 left-4 bg-black/50 px-3 py-2 rounded-lg">
<span className="text-white font-bold text-lg">New York</span>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto mt-20 px-4">
<h2 className="text-[32px] md:text-[40px] font-bold text-[#1C1C1E] mb-8">Special Offers</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden">
<div className="relative md:w-1/2">
<img alt="Santorini Offer" className="w-full h-52 md:h-full object-cover" src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" />
<span className="absolute top-4 left-4 bg-[#FF4D00] text-white text-xs font-bold px-3 py-1 rounded-full shadow">30% OFF</span>
</div>
<div className="flex flex-col justify-between p-6 md:w-1/2">
<div>
<h3 className="text-xl font-bold text-[#1C1C1E] mb-1">Santorini Getaway</h3>
<p className="text-base text-[#555] mb-4">Book a 5-night stay in Santorini and save 30%! Limited time only.</p>
</div>
<a className="inline-block mt-2 bg-[#FF4D00] text-white font-medium px-6 py-2 rounded-lg shadow hover:shadow-md transition" href="#">Book now</a>
</div>
</div>

<div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden">
<div className="relative md:w-1/2">
<img alt="Maldives Offer" className="w-full h-52 md:h-full object-cover" src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80" />
<span className="absolute top-4 left-4 bg-[#FF4D00] text-white text-xs font-bold px-3 py-1 rounded-full shadow">25% OFF</span>
</div>
<div className="flex flex-col justify-between p-6 md:w-1/2">
<div>
<h3 className="text-xl font-bold text-[#1C1C1E] mb-1">Maldives Escape</h3>
<p className="text-base text-[#555] mb-4">Luxury Maldives resorts at 25% off. Enjoy paradise with us!</p>
</div>
<a className="inline-block mt-2 bg-[#FF4D00] text-white font-medium px-6 py-2 rounded-lg shadow hover:shadow-md transition" href="#">Book now</a>
</div>
</div>
</div>
</section>

<nav className="fixed bottom-0 w-full bg-white border-t border-[#F5F5F7] shadow md:hidden z-20">
<div className="flex justify-around py-2">
<a className="flex flex-col items-center text-[#FF4D00]" href="#">

<svg className="w-6 h-6 mb-1" fill="none" stroke="#FF4D00" strokeWidth="2" viewBox="0 0 24 24">
<circle cx="11" cy="11" r="8"></circle>
<line x1="21" x2="16.65" y1="21" y2="16.65"></line>
</svg>
<span className="text-xs font-medium">Search</span>
</a>
<a className="flex flex-col items-center text-[#1C1C1E]" href="#">

<svg className="w-6 h-6 mb-1" fill="none" stroke="#1C1C1E" strokeWidth="2" viewBox="0 0 24 24">
<path d="M12 21c-4-3.5-7-7.28-7-11a7 7 0 0 1 14 0c0 3.72-3 7.5-7 11z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span className="text-xs font-medium">デスティネーション</span>
</a>
<a className="flex flex-col items-center text-[#1C1C1E]" href="#">

<svg className="w-6 h-6 mb-1" fill="none" stroke="#1C1C1E" strokeWidth="2" viewBox="0 0 24 24">
<path d="M20.59 13.41a2 2 0 0 1 0 2.83l-4.24 4.24a2 2 0 0 1-2.83 0l-8.49-8.49a2 2 0 0 1 0-2.83l4.24-4.24a2 2 0 0 1 2.83 0z"></path>
<circle cx="7.5" cy="7.5" r="1.5"></circle>
</svg>
<span className="text-xs font-medium">お得情報</span>
</a>
<a className="flex flex-col items-center text-[#1C1C1E]" href="#">

<svg className="w-6 h-6 mb-1" fill="none" stroke="#1C1C1E" strokeWidth="2" viewBox="0 0 24 24">
<circle cx="12" cy="7" r="4"></circle>
<path d="M5.5 21c1.5-4 11.5-4 13 0"></path>
</svg>
<span className="text-xs font-medium">プロフィール</span>
</a>
</div>
</nav>

    </>
  );
}
