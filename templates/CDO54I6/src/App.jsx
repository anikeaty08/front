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
      

<header className="bg-white shadow-sm">
<div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
<div className="flex items-center gap-2">
<img alt="ListApp Pharmatech Logo" className="w-8 h-8" src="https://img.icons8.com/ios-filled/50/4F46E5/pill.png"/>
<span className="font-bold text-xl text-indigo-700">ListApp Pharmatech</span>
</div>
<nav className="hidden md:flex gap-8 items-center text-sm font-medium">
<a className="hover:text-indigo-700 transition" href="#features">Features</a>
<a className="hover:text-indigo-700 transition" href="#about">About</a>
<a className="hover:text-indigo-700 transition" href="#contact">Contact</a>
<a className="bg-indigo-700 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-800 transition" href="#join">Join Now</a>
</nav>
<button className="md:hidden">
<svg className="w-6 h-6 text-indigo-700" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</header>

<section className="px-4 py-12 text-center bg-gradient-to-r from-indigo-50 to-white">
<div className="max-w-2xl mx-auto">
<h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Connecting Pharma, Suppliers &amp; Retailers</h1>
<p className="mb-6 text-lg md:text-xl text-gray-600">ListApp Pharmatech makes medicine access simple, secure, and seamless for everyone in the supply chain.</p>
<a className="inline-block bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold text-base shadow-md hover:bg-indigo-800 transition" href="#join">Get Started</a>
<div className="mt-8 flex justify-center gap-4">
<img alt="Pharmacy" className="rounded-lg w-36 h-24 object-cover shadow" src="https://images.unsplash.com/photo-1588776814546-ec7e07a2d2b4?auto=format&amp;fit=facearea&amp;w=400&amp;h=200&amp;q=80"/>
<img alt="Supplier" className="rounded-lg w-36 h-24 object-cover shadow" src="https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&amp;fit=facearea&amp;w=400&amp;h=200&amp;q=80"/>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-4 py-16" id="features">
<h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-indigo-700">Why Choose ListApp Pharmatech?</h2>
<div className="grid gap-8 md:grid-cols-3">
<div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition">
<div className="mb-4 flex justify-center">
<svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 17v-2a4 4 0 10-8 0v2a2 2 0 002 2h12a2 2 0 002-2v-2a4 4 0 10-8 0v2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="font-semibold text-lg text-gray-900 mb-2 text-center">Trusted Connections</h3>
<p className="text-gray-600 text-center">Verified pharma companies, suppliers, and retailers. Build your network with confidence.</p>
</div>
<div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition">
<div className="mb-4 flex justify-center">
<svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 8c-1.1 0-2 .9-2 2v4a2 2 0 002 2c1.1 0 2-.9 2-2v-4a2 2 0 00-2-2zm0 0V6m0 12v-2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="font-semibold text-lg text-gray-900 mb-2 text-center">Seamless Medicine Access</h3>
<p className="text-gray-600 text-center">Find and request medicines, streamline orders, and ensure timely delivery—without hassle.</p>
</div>
<div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition">
<div className="mb-4 flex justify-center">
<svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 20h9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M12 4v16m0 0H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="font-semibold text-lg text-gray-900 mb-2 text-center">Simple &amp; Secure</h3>
<p className="text-gray-600 text-center">Easy onboarding, transparent processes and robust data privacy for all users.</p>
</div>
</div>
</section>

<section className="py-16 px-4 bg-white" id="about">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">About ListApp Pharmatech</h2>
<p className="text-gray-700 text-lg mb-4">At ListApp Pharmatech, our mission is to empower the pharmaceutical supply chain with transparency, trust, and technology. We help pharma companies, suppliers, and retailers connect, communicate, and collaborate for better access to essential medicines. Our platform is designed for ease of use and peace of mind.</p>
<a className="inline-block mt-4 bg-indigo-50 text-indigo-700 px-5 py-2 rounded shadow hover:bg-indigo-100 transition" href="#contact">Learn More</a>
</div>
</section>

<section className="py-16 px-4 bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-500 text-white text-center" id="join">
<div className="max-w-2xl mx-auto">
<h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Pharma Network?</h2>
<p className="mb-6 text-lg">Join ListApp Pharmatech—where pharma companies, suppliers, and retailers thrive together.</p>
<form className="flex flex-col md:flex-row gap-4 justify-center items-center">
<input className="w-full md:w-64 px-4 py-2 rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Your business email" required="" type="email"/>
<button className="bg-white text-indigo-700 font-semibold px-6 py-2 rounded shadow hover:bg-gray-100 transition" type="submit">Sign Up Free</button>
</form>
<p className="mt-4 text-indigo-100 text-sm">It's free and only takes a minute.</p>
</div>
</section>

<section className="py-14 px-4 bg-gray-50" id="contact">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl font-bold mb-4 text-gray-900 text-center">Contact Us</h2>
<form className="space-y-4 max-w-xl mx-auto">
<div className="flex flex-col md:flex-row gap-4">
<input className="flex-1 px-4 py-2 rounded bg-white shadow border focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder="Your Name" required="" type="text"/>
<input className="flex-1 px-4 py-2 rounded bg-white shadow border focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder="Your Email" required="" type="email"/>
</div>
<textarea className="w-full px-4 py-2 rounded bg-white shadow border focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder="How can we help you?" required="" rows="4"></textarea>
<button className="bg-indigo-700 text-white px-6 py-2 rounded font-semibold shadow hover:bg-indigo-800 transition w-full md:w-auto" type="submit">Send Message</button>
</form>
<div className="mt-8 text-center text-gray-500 text-sm">
        © 2024 ListApp Pharmatech. All rights reserved.
      </div>
</div>
</section>

    </>
  );
}
