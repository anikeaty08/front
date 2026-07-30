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
      

<nav className="bg-white shadow">
<div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
<a className="text-2xl font-bold text-blue-600" href="#">DealSaver</a>
<div className="space-x-6">
<a className="hover:text-blue-600 font-medium" href="#offers">Offers</a>
<a className="hover:text-blue-600 font-medium" href="#categories">Categories</a>
<a className="hover:text-blue-600 font-medium" href="#newsletter">Newsletter</a>
<a className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition" href="#">Sign Up</a>
</div>
</div>
</nav>

<section className="bg-blue-50 py-16">
<div className="max-w-3xl mx-auto text-center px-4">
<h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-700">Save More With The Best Coupons & Promo Codes</h1>
<p className="text-lg text-blue-900 mb-8">Discover exclusive deals and save big at your favorite stores every day!</p>
<form className="max-w-xl mx-auto flex bg-white rounded overflow-hidden shadow">
<input className="flex-grow px-4 py-3 outline-none" placeholder="Search for stores, brands, or products..." type="text" />
<button className="bg-blue-600 text-white px-6 py-3 font-semibold hover:bg-blue-700 transition" type="submit">Search</button>
</form>
</div>
</section>

<section className="max-w-7xl mx-auto py-14 px-4" id="offers">
<h2 className="text-2xl font-bold mb-8 text-center">Featured Offers</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-xl shadow p-6 flex flex-col">
<div className="flex items-center mb-4">
<img alt="Amazon" className="w-12 h-12 rounded mr-3 object-contain bg-gray-100 p-1" src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png" />
<h3 className="text-lg font-semibold">Amazon</h3>
</div>
<p className="mb-2 text-gray-700 flex-1">Up to 50% OFF on Electronics + Extra 10% Cashback</p>
<span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded mb-3">Verified</span>
<button className="bg-blue-600 text-white px-4 py-2 rounded font-medium hover:bg-blue-700 transition">Show Code</button>
</div>

<div className="bg-white rounded-xl shadow p-6 flex flex-col">
<div className="flex items-center mb-4">
<img alt="Flipkart" className="w-12 h-12 rounded mr-3 object-contain bg-gray-100 p-1" src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Flipkart_logo.png" />
<h3 className="text-lg font-semibold">Flipkart</h3>
</div>
<p className="mb-2 text-gray-700 flex-1">Flat ₹300 OFF on Fashion Orders Above ₹1500</p>
<span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded mb-3">Verified</span>
<button className="bg-blue-600 text-white px-4 py-2 rounded font-medium hover:bg-blue-700 transition">Show Code</button>
</div>

<div className="bg-white rounded-xl shadow p-6 flex flex-col">
<div className="flex items-center mb-4">
<img alt="Myntra" className="w-12 h-12 rounded mr-3 object-contain bg-gray-100 p-1" src="https://upload.wikimedia.org/wikipedia/commons/4/44/Myntra_logo.png" />
<h3 className="text-lg font-semibold">Myntra</h3>
</div>
<p className="mb-2 text-gray-700 flex-1">Buy 2 Get 1 Free + Extra 15% OFF on First Order</p>
<span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded mb-3">Verified</span>
<button className="bg-blue-600 text-white px-4 py-2 rounded font-medium hover:bg-blue-700 transition">Show Code</button>
</div>
</div>
</section>

<section className="bg-white py-14" id="categories">
<div className="max-w-7xl mx-auto px-4">
<h2 className="text-2xl font-bold mb-8 text-center">Shop by Categories</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="bg-blue-50 p-6 rounded-lg flex flex-col items-center hover:shadow transition">
<svg className="w-8 h-8 mb-2 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 3h18v18H3V3z"></path></svg>
<span className="font-medium">Electronics</span>
</div>
<div className="bg-blue-50 p-6 rounded-lg flex flex-col items-center hover:shadow transition">
<svg className="w-8 h-8 mb-2 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3v18m9-9H3"></path></svg>
<span className="font-medium">Fashion</span>
</div>
<div className="bg-blue-50 p-6 rounded-lg flex flex-col items-center hover:shadow transition">
<svg className="w-8 h-8 mb-2 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-medium">Beauty</span>
</div>
<div className="bg-blue-50 p-6 rounded-lg flex flex-col items-center hover:shadow transition">
<svg className="w-8 h-8 mb-2 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 21h18M4 21V6a2 2 0 012-2h12a2 2 0 012 2v15"></path></svg>
<span className="font-medium">Home</span>
</div>
</div>
</div>
</section>

<section className="bg-blue-600 py-14" id="newsletter">
<div className="max-w-3xl mx-auto text-center px-4">
<h2 className="text-2xl font-bold text-white mb-4">Get the Latest Deals!</h2>
<p className="text-blue-100 mb-6">Subscribe to our newsletter and never miss a hot offer again.</p>
<form className="flex flex-col sm:flex-row gap-3 justify-center">
<input className="px-4 py-3 rounded outline-none flex-grow text-gray-700" placeholder="Enter your email" required type="email" />
<button className="bg-white text-blue-700 font-bold px-6 py-3 rounded hover:bg-blue-50 transition">Subscribe</button>
</form>
</div>
</section>

<footer className="bg-white py-6 mt-10 shadow-inner">
<div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
<span className="text-gray-600">© 2024 DealSaver. All rights reserved.</span>
<div className="space-x-4 mt-2 md:mt-0">
<a className="hover:text-blue-600" href="#">Privacy Policy</a>
<a className="hover:text-blue-600" href="#">Terms</a>
<a className="hover:text-blue-600" href="#">Contact</a>
</div>
</div>
</footer>

    </>
  );
}
