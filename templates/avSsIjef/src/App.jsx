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



    // Icon replacement
    feather.replace();
    // Range slider column value display demo (mock only, not interactive)
    document.querySelector('input[type="range"]').addEventListener('input', function(e){
      this.nextElementSibling.innerText = this.value;
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
      
<div className="glow-wave"></div>

<header className="flex justify-between items-center px-8 py-6 relative z-10">

<div className="flex items-center gap-3">
<div className="bg-white rounded-lg w-9 h-9 flex items-center justify-center shadow-xl">
<svg className="w-7 h-7" fill="none" viewbox="0 0 32 32"><polygon fill="#cc4bf7" points="16,3 29,27 3,27"></polygon></svg>
</div>
<span className="text-2xl font-extrabold tracking-wide">Serendipity</span>
</div>

<nav className="flex items-center gap-2 md:gap-5">
<a className="hover:text-pink-400 font-medium transition" href="#">Home</a>
<a className="hover:text-pink-400 font-medium transition" href="#">Browse</a>
<a className="hover:text-pink-400 font-medium transition" href="#">Updates</a>
<a className="hover:text-pink-400 font-medium transition" href="#">Pricing</a>
<a className="ml-2 bg-gradient-to-tr from-purple-500 to-pink-500 px-5 py-2 rounded-xl shadow-lg font-bold text-white hover:from-pink-500 hover:to-purple-500 transition shadow-pink-400/20" href="#">Sign Up</a>
</nav>
</header>

<section className="relative z-10 flex flex-col items-center justify-center text-center mt-12 md:mt-20">
<h1 className="max-w-3xl text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 drop-shadow-lg">Great technology is indistinguishable from magic.</h1>
<p className="max-w-xl text-lg text-white/70 mb-8">Experience the energy and creativity of our thriving community of creators on Serendipity!</p>

<div className="flex items-center bg-white/20 rounded-2xl shadow-md px-4 py-3 w-full max-w-xl backdrop-blur-md border border-white/20 mb-5">

<svg className="w-6 h-6 text-pink-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="14" rx="2" width="18" x="3" y="3"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><path d="M21 21l-4.35-4.35a2 2 0 0 0-2.83 0L3 21"></path></svg>
<input className="flex-1 bg-transparent outline-none text-white/90 placeholder-white/60 text-lg" placeholder="Describe your image" type="text"/>

<button className="ml-3">
<svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 1v10a4 4 0 0 0 4 4h0a4 4 0 0 0 4-4V1"></path><rect height="4" rx="2" width="10" x="7" y="15"></rect><line x1="12" x2="12" y1="19" y2="23"></line></svg>
</button>
</div>

<div className="flex gap-4 mb-3">
<button className="flex items-center gap-2 bg-gradient-to-tr from-purple-600 to-pink-600 px-6 py-2 rounded-xl shadow-lg shadow-pink-500/20 font-medium text-lg hover:from-pink-600 hover:to-purple-600 transition">
<svg className="w-5 h-5 -ml-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><polygon points="12 2 19 21 12 17 5 21 12 2"></polygon></svg>
        Generate
      </button>
<button className="flex items-center gap-2 bg-blue-600/90 px-5 py-2 rounded-xl font-medium text-lg hover:bg-blue-500 transition">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line></svg>
        Search
      </button>
</div>
</section>

<section className="relative z-10 flex justify-between items-center max-w-5xl mx-auto mt-14 px-2 mb-3">

<div className="flex gap-1 sm:gap-4 text-sm sm:text-base">
<button className="px-4 py-1.5 rounded-lg bg-gradient-to-tr from-purple-600 to-pink-500 shadow shadow-pink-300/20 font-semibold">Hot</button>
<button className="px-4 py-1.5 rounded-lg text-white/70 hover:bg-white/10 font-semibold transition">Rising</button>
<button className="px-4 py-1.5 rounded-lg text-white/70 hover:bg-white/10 font-semibold transition">New</button>
<button className="px-4 py-1.5 rounded-lg text-white/70 hover:bg-white/10 font-semibold transition">Top</button>
<button className="px-4 py-1.5 rounded-lg text-white/70 hover:bg-white/10 font-semibold transition">Favorite</button>
<button className="px-4 py-1.5 rounded-lg text-white/70 hover:bg-white/10 font-semibold transition">Upscale</button>
</div>

<div className="flex items-center gap-2 text-sm">
<span className="hidden md:inline text-white/60">Columns</span>
<input className="w-24 accent-pink-500" max="6" min="2" type="range" value="4"/>
<span className="w-6 h-6 bg-gray-900/50 flex items-center justify-center rounded font-bold text-pink-400">4</span>
</div>
</section>

<main className="relative z-10 max-w-6xl mx-auto px-2 pb-20">
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

<div className="relative bg-gradient-to-tr from-[#22213F] to-[#271635] rounded-2xl shadow-xl overflow-hidden group transition hover:scale-105">

<div className="absolute top-3 left-3 flex items-center gap-2 bg-black/50 px-3 py-1 rounded-xl backdrop-blur-sm z-10">
<img alt="Aksonvady" className="w-6 h-6 rounded-full border-2 border-pink-400 shadow" src="https://randomuser.me/api/portraits/women/68.jpg"/>
<span className="text-xs font-medium">Aksonvady</span>
</div>

<img alt="sci-fi art" className="w-full h-56 object-cover object-center rounded-2xl opacity-95 group-hover:opacity-100 transition" src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>

<div className="relative bg-gradient-to-tr from-[#242351] to-[#3d2246] rounded-2xl shadow-xl overflow-hidden group transition hover:scale-105">
<div className="absolute top-3 left-3 flex items-center gap-2 bg-black/50 px-3 py-1 rounded-xl backdrop-blur-sm z-10">
<img alt="Aksonvady" className="w-6 h-6 rounded-full border-2 border-pink-400 shadow" src="https://randomuser.me/api/portraits/women/68.jpg"/>
<span className="text-xs font-medium">Aksonvady</span>
</div>
<img alt="sci-fi art" className="w-full h-56 object-cover object-center rounded-2xl opacity-95 group-hover:opacity-100 transition" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>

<div className="relative bg-gradient-to-tr from-[#2e2c57] to-[#481c59] rounded-2xl shadow-xl overflow-hidden group transition hover:scale-105">
<div className="absolute top-3 left-3 flex items-center gap-2 bg-black/50 px-3 py-1 rounded-xl backdrop-blur-sm z-10">
<img alt="Aksonvady" className="w-6 h-6 rounded-full border-2 border-pink-400 shadow" src="https://randomuser.me/api/portraits/women/68.jpg"/>
<span className="text-xs font-medium">Aksonvady</span>
</div>
<img alt="sci-fi art" className="w-full h-56 object-cover object-center rounded-2xl opacity-95 group-hover:opacity-100 transition" src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>

<div className="relative bg-gradient-to-tr from-[#361e46] to-[#2b2571] rounded-2xl shadow-xl overflow-hidden group transition hover:scale-105">
<div className="absolute top-3 left-3 flex items-center gap-2 bg-black/50 px-3 py-1 rounded-xl backdrop-blur-sm z-10">
<img alt="Aksonvady" className="w-6 h-6 rounded-full border-2 border-pink-400 shadow" src="https://randomuser.me/api/portraits/women/68.jpg"/>
<span className="text-xs font-medium">Aksonvady</span>
</div>
<img alt="sci-fi art" className="w-full h-56 object-cover object-center rounded-2xl opacity-95 group-hover:opacity-100 transition" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>

<div className="relative bg-gradient-to-tr from-[#392469] to-[#172549] rounded-2xl shadow-xl overflow-hidden group transition hover:scale-105">
<div className="absolute top-3 left-3 flex items-center gap-2 bg-black/50 px-3 py-1 rounded-xl backdrop-blur-sm z-10">
<img alt="Aksonvady" className="w-6 h-6 rounded-full border-2 border-pink-400 shadow" src="https://randomuser.me/api/portraits/women/68.jpg"/>
<span className="text-xs font-medium">Aksonvady</span>
</div>
<img alt="sci-fi art" className="w-full h-56 object-cover object-center rounded-2xl opacity-95 group-hover:opacity-100 transition" src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>

<div className="relative bg-gradient-to-tr from-[#2a2d65] to-[#1f162c] rounded-2xl shadow-xl overflow-hidden group transition hover:scale-105">
<div className="absolute top-3 left-3 flex items-center gap-2 bg-black/50 px-3 py-1 rounded-xl backdrop-blur-sm z-10">
<img alt="Aksonvady" className="w-6 h-6 rounded-full border-2 border-pink-400 shadow" src="https://randomuser.me/api/portraits/women/68.jpg"/>
<span className="text-xs font-medium">Aksonvady</span>
</div>
<img alt="sci-fi art" className="w-full h-56 object-cover object-center rounded-2xl opacity-95 group-hover:opacity-100 transition" src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>

<div className="relative bg-gradient-to-tr from-[#1e255a] to-[#3e165b] rounded-2xl shadow-xl overflow-hidden group transition hover:scale-105">
<div className="absolute top-3 left-3 flex items-center gap-2 bg-black/50 px-3 py-1 rounded-xl backdrop-blur-sm z-10">
<img alt="Aksonvady" className="w-6 h-6 rounded-full border-2 border-pink-400 shadow" src="https://randomuser.me/api/portraits/women/68.jpg"/>
<span className="text-xs font-medium">Aksonvady</span>
</div>
<img alt="sci-fi art" className="w-full h-56 object-cover object-center rounded-2xl opacity-95 group-hover:opacity-100 transition" src="https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>

<div className="relative bg-gradient-to-tr from-[#1c255a] to-[#4b0b6b] rounded-2xl shadow-xl overflow-hidden group transition hover:scale-105">
<div className="absolute top-3 left-3 flex items-center gap-2 bg-black/50 px-3 py-1 rounded-xl backdrop-blur-sm z-10">
<img alt="Aksonvady" className="w-6 h-6 rounded-full border-2 border-pink-400 shadow" src="https://randomuser.me/api/portraits/women/68.jpg"/>
<span className="text-xs font-medium">Aksonvady</span>
</div>
<img alt="sci-fi art" className="w-full h-56 object-cover object-center rounded-2xl opacity-95 group-hover:opacity-100 transition" src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
</div>
</main>


    </>
  );
}
