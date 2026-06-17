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
      

<nav className="flex items-center justify-between px-8 py-6 shadow-lg bg-white">
<a className="text-3xl font-extrabold tracking-tight text-blue-900" href="#">VUE</a>
<ul className="flex items-center space-x-8">
<li><a className="hover:text-blue-700 transition" href="#products">Shop</a></li>
<li><a className="hover:text-blue-700 transition" href="#about">About</a></li>
<li><a className="hover:text-blue-700 transition" href="#testimonials">Testimonials</a></li>
<li><a className="px-4 py-2 rounded bg-blue-900 text-white font-semibold hover:bg-blue-700 transition" href="#newsletter">Join Us</a></li>
</ul>
</nav>

<section className="relative pt-20 pb-32 bg-gradient-to-br from-blue-50 via-white to-white overflow-hidden">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-8">
<div className="w-full md:w-1/2 mb-10 md:mb-0">
<h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">See the <span className="text-blue-500">World</span> Differently</h1>
<p className="text-lg text-gray-700 mb-8">Discover premium handcrafted eyewear that combines timeless design, precision, and comfort. Elevate your vision with VUE.</p>
<a className="inline-block px-8 py-3 bg-blue-900 text-white rounded-full font-semibold text-lg shadow-lg hover:bg-blue-700 transition" href="#products">Shop Collection</a>
</div>
<div className="w-full md:w-1/2 flex justify-center">
<img alt="Eyewear model" className="rounded-3xl shadow-2xl border-8 border-white w-96" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&amp;fit=facearea&amp;w=600&amp;q=80&amp;facepad=3"/>
</div>
</div>
<img alt="" className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" src="https://www.transparenttextures.com/patterns/diagonal-noise.png" />
</img></section>

<section className="py-24 bg-white" id="products">
<div className="max-w-6xl mx-auto px-8">
<h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Featured Frames</h2>
<div className="grid md:grid-cols-3 gap-10">

<div className="bg-blue-50 rounded-2xl shadow-lg p-6 hover:scale-105 transform transition">
<img alt="Classic Aviator" className="rounded-xl mb-6 w-full h-56 object-cover" src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<h3 className="text-xl font-semibold mb-2">Classic Aviator</h3>
<p className="text-gray-600 mb-4">Timeless metal frames with polarized lenses for urban explorers.</p>
<span className="font-bold text-blue-900 text-lg">$139</span>
</div>

<div className="bg-blue-50 rounded-2xl shadow-lg p-6 hover:scale-105 transform transition">
<img alt="Modern Wayfarer" className="rounded-xl mb-6 w-full h-56 object-cover" src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<h3 className="text-xl font-semibold mb-2">Modern Wayfarer</h3>
<p className="text-gray-600 mb-4">Bold acetate frames in vibrant colors for every personality.</p>
<span className="font-bold text-blue-900 text-lg">$129</span>
</div>

<div className="bg-blue-50 rounded-2xl shadow-lg p-6 hover:scale-105 transform transition">
<img alt="Minimalist Round" className="rounded-xl mb-6 w-full h-56 object-cover" src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<h3 className="text-xl font-semibold mb-2">Minimalist Round</h3>
<p className="text-gray-600 mb-4">Lightweight titanium frames for a sophisticated look &amp; feel.</p>
<span className="font-bold text-blue-900 text-lg">$149</span>
</div>
</div>
<div className="flex justify-center mt-10">
<a className="px-8 py-3 bg-blue-900 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 transition" href="#">View All Frames</a>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-br from-white to-blue-50" id="about">
<div className="max-w-5xl mx-auto px-8 flex flex-col md:flex-row items-center gap-16">
<div className="flex-1">
<img alt="Handcrafted Eyewear" className="rounded-2xl shadow-xl w-full object-cover" src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<div className="flex-1">
<h2 className="text-3xl font-bold text-blue-900 mb-4">Handcrafted with Precision</h2>
<p className="text-gray-700 mb-6">Every pair of VUE eyewear is meticulously designed and hand-assembled by expert artisans. We use only premium materials to ensure lasting comfort and style. Our commitment to sustainable production means you can see clearer, and feel better about your impact on the planet.</p>
<ul className="mb-6 space-y-2">
<li className="flex items-center"><span className="text-blue-500 mr-2">•</span> Sustainable materials</li>
<li className="flex items-center"><span className="text-blue-500 mr-2">•</span> Lifetime warranty</li>
<li className="flex items-center"><span className="text-blue-500 mr-2">•</span> Free worldwide shipping</li>
</ul>
<a className="inline-block px-6 py-2 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-900 transition" href="#">Our Story</a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="testimonials">
<div className="max-w-5xl mx-auto px-8">
<h2 className="text-4xl font-bold text-center text-blue-900 mb-12">What Our Customers Say</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-blue-50 rounded-2xl p-6 shadow-lg">
<p className="italic text-gray-700 mb-4">"The frames are so light and comfortable! I've never worn glasses that felt this good. The quality is amazing."</p>
<div className="flex items-center gap-3">
<img alt="Customer 1" className="w-10 h-10 rounded-full border-2 border-white shadow" src="https://randomuser.me/api/portraits/women/68.jpg"/>
<span className="font-semibold text-blue-900">Emily R.</span>
</div>
</div>

<div className="bg-blue-50 rounded-2xl p-6 shadow-lg">
<p className="italic text-gray-700 mb-4">"I get compliments every day. The minimalist round frames are perfect for my style. Highly recommend VUE!"</p>
<div className="flex items-center gap-3">
<img alt="Customer 2" className="w-10 h-10 rounded-full border-2 border-white shadow" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<span className="font-semibold text-blue-900">James L.</span>
</div>
</div>

<div className="bg-blue-50 rounded-2xl p-6 shadow-lg">
<p className="italic text-gray-700 mb-4">"Superb customer service and fast shipping. I love the eco-friendly materials and the lifetime warranty."</p>
<div className="flex items-center gap-3">
<img alt="Customer 3" className="w-10 h-10 rounded-full border-2 border-white shadow" src="https://randomuser.me/api/portraits/women/44.jpg"/>
<span className="font-semibold text-blue-900">Sophie M.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gradient-to-r from-blue-900 to-blue-500 text-white" id="newsletter">
<div className="max-w-2xl mx-auto px-8 text-center">
<h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
<p className="mb-8">Get exclusive offers, style tips, and early access to new collections. Join the VUE community!</p>
<form className="flex flex-col sm:flex-row items-center gap-4 justify-center">
<input className="w-full sm:w-auto px-6 py-3 rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Enter your email" required="" type="email"/>
<button className="px-8 py-3 rounded-full bg-white text-blue-900 font-bold hover:bg-blue-100 transition" type="submit">Subscribe</button>
</form>
</div>
</section>

<footer className="py-10 text-center text-gray-500 bg-white border-t">
<div className="mb-2">
<a className="text-2xl font-bold text-blue-900" href="#">VUE</a>
</div>
<div className="mb-4">
<a className="mx-3 hover:text-blue-700" href="#">Instagram</a>
<a className="mx-3 hover:text-blue-700" href="#">Facebook</a>
<a className="mx-3 hover:text-blue-700" href="#">Contact</a>
</div>
<div>
      © 2024 VUE Eyewear. All rights reserved.
    </div>
</footer>

    </>
  );
}
