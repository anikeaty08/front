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
      

<header className="sticky top-0 z-50 bg-gradient-to-r from-amber-100 via-orange-100 to-orange-50/90 shadow">
<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
<div className="flex items-center space-x-3">
<span className="inline-block bg-orange-600/80 rounded-full p-2">
<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 3l9.5 7.5v10a1.5 1.5 0 01-1.5 1.5h-16A1.5 1.5 0 013 20.5v-10L12 3z" strokeWidth="2"></path>
</svg>
</span>
<span className="text-2xl font-extrabold text-orange-800 tracking-tight drop-shadow">Rebecca Sayami</span>
</div>
<nav className="hidden md:flex space-x-6 text-base font-semibold">
<a className="hover:text-orange-600" href="#">Home</a>
<a className="hover:text-orange-600" href="#">About</a>
<a className="hover:text-orange-600" href="#">Services</a>
<a className="hover:text-orange-600" href="#">Listings</a>
<a className="hover:text-orange-600" href="#">Blog</a>
<a className="hover:text-orange-600" href="#">Contact</a>
</nav>
<a className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-full font-semibold shadow hidden md:inline-block transition" href="#">Let’s Connect</a>
</div>
</header>

<section className="relative bg-gradient-to-br from-orange-200/80 via-amber-100 to-orange-50 pt-16 pb-20">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

<div className="flex-1 space-y-6">
<h1 className="md:text-5xl leading-tight text-4xl font-extrabold text-orange-800 drop-shadow">
          Discover Your East Bay Sanctuary
        </h1>
<p className="text-xl text-orange-700 font-semibold">Guiding you home with warmth, care, and expertise</p>
<div className="flex space-x-4 mt-6">
<a className="bg-orange-600 hover:bg-orange-700 text-white px-7 py-3 rounded-full font-bold shadow transition" href="#">Browse Listings</a>
<a className="bg-white border border-orange-500 text-orange-700 px-7 py-3 rounded-full font-bold shadow hover:bg-orange-50 transition" href="#">Book a Consultation</a>
</div>
</div>

<div className="flex-1 flex justify-center items-center">
<div className="bg-orange-100 rounded-3xl shadow-lg p-2">
<img alt="East Bay Home" className="w-full max-w-md object-cover rounded-xl shadow-lg" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
</div>
</div>
<div className="absolute inset-x-0 bottom-0 h-24"></div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<h2 className="md:text-3xl text-2xl font-bold text-orange-800 text-center mb-10">Featured Listings</h2>
<div className="flex overflow-x-auto gap-8 snap-x pb-2">

<div className="min-w-[300px] bg-white rounded-3xl shadow-xl p-4 snap-center flex-shrink-0 relative border-2 border-orange-100">
<img className="w-full h-44 rounded-2xl object-cover" src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<span className="absolute top-4 left-4 bg-amber-500 text-white text-xs px-4 py-1 rounded-full font-bold drop-shadow">Virtual Tour</span>
<div className="mt-4">
<div className="flex items-center justify-between mb-1">
<span className="font-bold text-orange-800 text-lg">$1,125,000</span>
<span className="text-amber-700">Oakland, CA</span>
</div>
<p className="text-stone-700 mb-2">3 Beds • 2 Baths</p>
<a className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-full font-semibold transition" href="#">Explore Property</a>
</div>
</div>

<div className="min-w-[300px] bg-white rounded-3xl shadow-xl p-4 snap-center flex-shrink-0 relative border-2 border-orange-100">
<img className="w-full h-44 rounded-2xl object-cover" src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<span className="absolute top-4 left-4 bg-amber-500 text-white text-xs px-4 py-1 rounded-full font-bold drop-shadow">Virtual Tour</span>
<div className="mt-4">
<div className="flex items-center justify-between mb-1">
<span className="font-bold text-orange-800 text-lg">$975,000</span>
<span className="text-amber-700">Berkeley, CA</span>
</div>
<p className="text-stone-700 mb-2">2 Beds • 2 Baths</p>
<a className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-full font-semibold transition" href="#">Explore Property</a>
</div>
</div>

<div className="min-w-[300px] bg-white rounded-3xl shadow-xl p-4 snap-center flex-shrink-0 relative border-2 border-orange-100">
<img className="w-full h-44 rounded-2xl object-cover" src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<span className="absolute top-4 left-4 bg-amber-500 text-white text-xs px-4 py-1 rounded-full font-bold drop-shadow">Virtual Tour</span>
<div className="mt-4">
<div className="flex items-center justify-between mb-1">
<span className="font-bold text-orange-800 text-lg">$1,200,000</span>
<span className="text-amber-700">Alameda, CA</span>
</div>
<p className="text-stone-700 mb-2">4 Beds • 3 Baths</p>
<a className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-full font-semibold transition" href="#">Explore Property</a>
</div>
</div>

<div className="min-w-[300px] bg-white rounded-3xl shadow-xl p-4 snap-center flex-shrink-0 relative border-2 border-orange-100">
<img className="w-full h-44 rounded-2xl object-cover" src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<span className="absolute top-4 left-4 bg-amber-500 text-white text-xs px-4 py-1 rounded-full font-bold drop-shadow">Virtual Tour</span>
<div className="mt-4">
<div className="flex items-center justify-between mb-1">
<span className="font-bold text-orange-800 text-lg">$860,000</span>
<span className="text-amber-700">Castro Valley, CA</span>
</div>
<p className="text-stone-700 mb-2">3 Beds • 2 Baths</p>
<a className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-full font-semibold transition" href="#">Explore Property</a>
</div>
</div>
</div>
</section>

<section className="bg-orange-100/70 py-16">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
<img alt="Rebecca Headshot" className="w-40 h-40 rounded-full object-cover border-4 border-orange-400/40 shadow-lg" src="https://i.ibb.co/8MZk6kY/rebecca-headshot.jpg"/>
<div>
<h3 className="text-2xl font-bold text-orange-800">Meet Rebecca Sayami</h3>
<p className="mt-3 text-stone-700 max-w-xl">
          With over 15 years of East Bay real estate experience, Rebecca is recognized for her client-first approach, multiple top producer awards, and deep community involvement. She’s helped hundreds of families find their perfect home and win in a competitive market.
        </p>
<a className="inline-block mt-6 bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-semibold shadow transition" href="#">Discover My Story</a>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-16">
<h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-orange-800">What Clients Are Saying</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-amber-50 rounded-3xl shadow-lg p-6 flex flex-col border border-orange-100">
<p className="text-stone-800 italic mb-4">“Rebecca was amazing! She was with us every step, negotiated brilliantly, and made us feel confident buying our first home.”</p>
<span className="font-semibold text-orange-700">– Alex &amp; Jamie L.</span>
</div>
<div className="bg-amber-50 rounded-3xl shadow-lg p-6 flex flex-col border border-orange-100">
<p className="text-stone-800 italic mb-4">“Professional, dedicated, and truly cares about her clients. We sold above asking thanks to Rebecca’s strategy!”</p>
<span className="font-semibold text-orange-700">– Priya S.</span>
</div>
<div className="bg-amber-50 rounded-3xl shadow-lg p-6 flex flex-col border border-orange-100">
<p className="text-stone-800 italic mb-4">“Rebecca’s knowledge of the East Bay market is unmatched. Highly recommend her to anyone buying or selling!”</p>
<span className="font-semibold text-orange-700">– Mark D.</span>
</div>
</div>
<div className="flex justify-center mt-8">
<a className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-semibold shadow transition" href="#">View All Reviews</a>
</div>
</section>

<section className="py-16 bg-gradient-to-r from-orange-100 via-amber-50 to-orange-50/80">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
<div className="flex-1 w-full overflow-hidden rounded-2xl shadow-lg">
<div className="flex space-x-4 overflow-x-auto snap-x pb-2">
<img alt="Community Work 1" className="h-40 w-72 object-cover rounded-xl snap-center" src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&amp;fit=crop&amp;w=350&amp;q=80"/>
<img alt="Community Work 2" className="h-40 w-72 object-cover rounded-xl snap-center" src="https://images.unsplash.com/photo-1473187983305-f615310e7daa?auto=format&amp;fit=crop&amp;w=350&amp;q=80"/>
<img alt="Community Work 3" className="h-40 w-72 object-cover rounded-xl snap-center" src="https://images.unsplash.com/photo-1424746219973-8fe3bd07d8e3?auto=format&amp;fit=crop&amp;w=350&amp;q=80"/>
</div>
</div>
<div className="flex-1">
<h3 className="text-2xl font-bold text-orange-800 mb-3">Making a Difference in East Bay</h3>
<p className="text-stone-700 mb-4">
          Rebecca is proud to support Life Elder Care and local food pantries. Giving back is at the heart of her business, strengthening our community one family at a time.
        </p>
<a className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-semibold shadow transition" href="#">Learn About My Community Work</a>
</div>
</div>
</section>

<section className="bg-white py-16">
<div className="max-w-3xl mx-auto px-6 rounded-3xl shadow-lg py-10 text-center border-2 border-orange-100">
<h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4">Free East Bay Market Report</h2>
<p className="text-stone-700 mb-8">Get the latest stats, trends, and tips for home buyers &amp; sellers delivered to your inbox!</p>
<form className="grid md:grid-cols-3 gap-4 mb-6">
<input className="col-span-1 px-4 py-3 border border-orange-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Name" required="" type="text"/>
<input className="col-span-1 px-4 py-3 border border-orange-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Email" required="" type="email"/>
<input className="col-span-1 px-4 py-3 border border-orange-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Phone" type="tel"/>
</form>
<button className="w-full md:w-auto bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full px-8 py-3 transition text-lg shadow" type="submit">Get Your Report</button>
</div>
</section>

<footer className="bg-gradient-to-bl from-amber-900 via-orange-900 to-orange-700 text-white pt-12 pb-6 mt-12">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
<div className="col-span-1 flex flex-col space-y-3">
<div className="flex items-center space-x-2">
<span className="inline-block bg-orange-600/80 rounded-full p-2">
<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 3l9.5 7.5v10a1.5 1.5 0 01-1.5 1.5h-16A1.5 1.5 0 013 20.5v-10L12 3z" strokeWidth="2"></path>
</svg>
</span>
<span className="font-bold text-lg">Rebecca Sayami</span>
</div>
<span className="text-orange-200">East Bay Real Estate with Heart</span>
</div>
<div className="col-span-1 flex flex-col space-y-2">
<h4 className="font-semibold text-orange-300 mb-2">Quick Links</h4>
<a className="hover:underline" href="#">Home</a>
<a className="hover:underline" href="#">About</a>
<a className="hover:underline" href="#">Services</a>
<a className="hover:underline" href="#">Listings</a>
<a className="hover:underline" href="#">Blog</a>
<a className="hover:underline" href="#">Contact</a>
</div>
<div className="col-span-1 flex flex-col space-y-2">
<h4 className="font-semibold text-orange-300 mb-2">Contact</h4>
<span>510-240-5347</span>
<span>rebeccasayami@gmail.com</span>
<span>20273 Patio DriveCastro Valley, CA 94546</span>
</div>
<div className="col-span-1 flex flex-col space-y-2">
<h4 className="font-semibold text-orange-300 mb-2">Connect</h4>
<div className="flex items-center space-x-4">
<a aria-label="Facebook" className="hover:text-orange-200" href="#">
<svg className="w-6 h-6" fill="currentColor" viewbox="0 0 24 24"></svg>
</a>
<a aria-label="Instagram" className="hover:text-orange-200" href="#">
<svg className="w-6 h-6" fill="currentColor" viewbox="0 0 24 24"></svg>
</a>
</div>
<div className="mt-4 space-x-4 text-orange-200 text-sm">
<a className="hover:underline" href="#">Privacy Policy</a>
<a className="hover:underline" href="#">Terms of Use</a>
</div>
<div className="mt-8">
<a className="text-orange-200 hover:text-orange-400 text-xs underline" href="#">Back to top ↑</a>
</div>
</div>
</div>
<div className="mt-8 text-center text-orange-200 text-xs">© 2024 Rebecca Sayami. All rights reserved.</div>
</footer>

    </>
  );
}
