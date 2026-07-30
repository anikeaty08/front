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
      

<header className="bg-white shadow-sm sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center space-x-8">
<div className="text-2xl font-bold text-black">eyebuydirect</div>
<nav className="hidden md:flex space-x-6">
<a className="text-gray-700 hover:text-black" href="#">Eyeglasses</a>
<a className="text-gray-700 hover:text-black" href="#">Sunglasses</a>
<a className="text-gray-700 hover:text-black" href="#">Blue Light</a>
<a className="text-gray-700 hover:text-black" href="#">Contact Lenses</a>
</nav>
</div>
<div className="flex items-center space-x-4">
<i className="fas fa-search text-gray-600 cursor-pointer"></i>
<i className="fas fa-user text-gray-600 cursor-pointer"></i>
<i className="fas fa-heart text-gray-600 cursor-pointer"></i>
<i className="fas fa-shopping-bag text-gray-600 cursor-pointer"></i>
</div>
</div>
</div>
</header>

<section className="relative bg-gradient-to-r from-amber-50 to-orange-50 py-16 px-4">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-8 items-center">
<div className="space-y-6">
<div className="text-sm font-semibold text-orange-600 uppercase tracking-wide">New Collection</div>
<h1 className="text-4xl lg:text-6xl font-bold text-gray-900">Everyday Edit</h1>
<p className="text-xl text-gray-600">Made to wear, not 'special.'</p>
<button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">Shop Now</button>
</div>
<div className="relative">
<div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Under $50</div>
<div className="bg-amber-100 rounded-lg p-8 aspect-square flex items-center justify-center">
<div className="w-32 h-16 bg-gray-800 rounded-lg"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 px-4 bg-gray-50">
<div className="max-w-7xl mx-auto text-center">
<h2 className="text-3xl font-bold text-gray-900 mb-4">Every Vision of You</h2>
<p className="text-xl text-gray-600 mb-8">It's always a good day to buy glasses online.</p>
<div className="flex flex-wrap justify-center gap-4 mb-8">
<span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Blue Light Blocking</span>
<span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">UV Protection</span>
<span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Blue Light Lenses</span>
</div>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800">Shop Men's</button>
<button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800">Shop Women's</button>
</div>
</div>
</section>

<section className="py-16 px-4">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-bold text-center mb-12">Best Selling Glasses</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white rounded-lg shadow-sm p-4">
<div className="bg-gray-100 rounded-lg aspect-square mb-4 flex items-center justify-center">
<div className="w-24 h-12 bg-gray-800 rounded"></div>
</div>
<h3 className="font-semibold mb-2">Elijah</h3>
<p className="text-lg font-bold">$60</p>
<div className="flex space-x-1 mt-2">
<div className="w-4 h-4 bg-black rounded-full"></div>
<div className="w-4 h-4 bg-brown-500 rounded-full"></div>
<div className="w-4 h-4 bg-blue-500 rounded-full"></div>
</div>
</div>
<div className="bg-white rounded-lg shadow-sm p-4">
<div className="bg-gray-100 rounded-lg aspect-square mb-4 flex items-center justify-center">
<div className="w-24 h-12 bg-gray-800 rounded"></div>
</div>
<h3 className="font-semibold mb-2">Steeze HP</h3>
<p className="text-lg font-bold">$69</p>
<div className="flex space-x-1 mt-2">
<div className="w-4 h-4 bg-black rounded-full"></div>
<div className="w-4 h-4 bg-gray-500 rounded-full"></div>
</div>
</div>
<div className="bg-white rounded-lg shadow-sm p-4">
<div className="bg-gray-100 rounded-lg aspect-square mb-4 flex items-center justify-center">
<div className="w-24 h-12 bg-gray-800 rounded"></div>
</div>
<h3 className="font-semibold mb-2">Vesa</h3>
<p className="text-lg font-bold">$59</p>
<div className="flex space-x-1 mt-2">
<div className="w-4 h-4 bg-pink-500 rounded-full"></div>
<div className="w-4 h-4 bg-blue-500 rounded-full"></div>
</div>
</div>
<div className="bg-white rounded-lg shadow-sm p-4">
<div className="bg-gray-100 rounded-lg aspect-square mb-4 flex items-center justify-center">
<div className="w-24 h-12 bg-gray-800 rounded"></div>
</div>
<h3 className="font-semibold mb-2">Cloudy Waters</h3>
<p className="text-lg font-bold">$69</p>
<div className="flex space-x-1 mt-2">
<div className="w-4 h-4 bg-blue-300 rounded-full"></div>
<div className="w-4 h-4 bg-gray-300 rounded-full"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 px-4 bg-gray-50">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
<div className="bg-white rounded-lg p-6 text-center">
<div className="bg-gray-100 rounded-lg aspect-video mb-4 flex items-center justify-center">
<div className="w-16 h-8 bg-gray-800 rounded"></div>
</div>
<h3 className="font-bold mb-2">Ray-Ban Meta Glasses</h3>
<p className="text-sm text-gray-600">Shop the metaverse-ready smart glasses</p>
</div>
<div className="bg-orange-500 text-white rounded-lg p-8 text-center">
<h3 className="text-4xl font-bold mb-2">50% OFF</h3>
<p className="mb-4">Glasses On Sale</p>
<button className="bg-white text-orange-500 px-6 py-2 rounded-full font-semibold">Shop Sale</button>
</div>
<div className="bg-white rounded-lg p-6 text-center">
<div className="bg-gray-100 rounded-lg aspect-video mb-4"></div>
<h3 className="font-bold mb-2">Sporty Collection</h3>
<p className="text-sm text-gray-600">JARED MCCAIN | Professional Basketball Player</p>
</div>
</div>
</div>
</section>

<section className="py-16 px-4">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-8 items-center">
<div className="bg-purple-100 rounded-lg aspect-square"></div>
<div className="space-y-4">
<h2 className="text-3xl font-bold">Virtual Try-On</h2>
<p className="text-gray-600">Try frames on virtually from your mobile or desktop. It's easy and fun!</p>
<button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800">Try Frames Now</button>
</div>
</div>
</div>
</section>

<section className="py-16 px-4 bg-gradient-to-r from-yellow-400 to-orange-400">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl font-bold text-white mb-4">Join The Exclusive Club</h2>
<p className="text-white mb-8">See new arrivals and exclusive offers first</p>
<div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
<input className="flex-1 px-4 py-3 rounded-full" placeholder="Enter your email" type="email" />
<button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800">Join</button>
</div>
</div>
</section>

<footer className="bg-gray-900 text-white py-16 px-4">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div>
<h3 className="font-bold mb-4">Shop</h3>
<ul className="space-y-2 text-gray-300">
<li><a className="hover:text-white" href="#">Eyeglasses</a></li>
<li><a className="hover:text-white" href="#">Sunglasses</a></li>
<li><a className="hover:text-white" href="#">Blue Light</a></li>
</ul>
</div>
<div>
<h3 className="font-bold mb-4">Support</h3>
<ul className="space-y-2 text-gray-300">
<li><a className="hover:text-white" href="#">Customer Service</a></li>
<li><a className="hover:text-white" href="#">FAQ</a></li>
<li><a className="hover:text-white" href="#">Contact</a></li>
</ul>
</div>
<div>
<h3 className="font-bold mb-4">About</h3>
<ul className="space-y-2 text-gray-300">
<li><a className="hover:text-white" href="#">About Us</a></li>
<li><a className="hover:text-white" href="#">Careers</a></li>
<li><a className="hover:text-white" href="#">Press</a></li>
</ul>
</div>
<div>
<h3 className="font-bold mb-4">Follow Us</h3>
<div className="flex space-x-4">
<i className="fab fa-facebook text-2xl hover:text-blue-400 cursor-pointer"></i>
<i className="fab fa-instagram text-2xl hover:text-pink-400 cursor-pointer"></i>
<i className="fab fa-twitter text-2xl hover:text-blue-300 cursor-pointer"></i>
<i className="fab fa-tiktok text-2xl hover:text-white cursor-pointer"></i>
</div>
</div>
</div>
<div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
<p>© 2024 EyeBuyDirect. All rights reserved.</p>
</div>
</div>
</footer>

    </>
  );
}
