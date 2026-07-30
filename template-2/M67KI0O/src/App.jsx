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
      
    const form = document.getElementById('contactForm');
    const successMsg = document.getElementById('formSuccess');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      form.reset();
      successMsg.classList.remove('hidden');
      setTimeout(() => { successMsg.classList.add('hidden'); }, 4000);
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
      

<header className="abstract-bg pt-16 pb-12 px-4 md:px-0">
<div className="max-w-3xl mx-auto text-center">
<h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Let’s Talk</h1>
<p className="text-lg md:text-xl text-gray-200 mb-6">Reach out to the ListApp team—quick responses, real support.</p>
<div className="flex justify-center space-x-2 mt-6">
<span className="w-3 h-3 rounded-full bg-yellow-400 shadow-lg"></span>
<span className="w-3 h-3 rounded-full bg-yellow-400 opacity-60"></span>
<span className="w-3 h-3 rounded-full bg-yellow-400 opacity-40"></span>
</div>
</div>
</header>
<main className="flex-1 px-4 py-8 md:py-12 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10">

<section className="bg-gray-900 rounded-2xl p-8 shadow-lg flex flex-col justify-between">
<h2 className="text-2xl font-semibold mb-6 text-yellow-400">Contact Form</h2>
<form autocomplete="off" className="space-y-5" id="contactForm">
<div>
<label className="block mb-1 font-medium" htmlFor="name">Name<span className="text-yellow-400">*</span></label>
<input className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all" id="name" name="name" placeholder="Your Name" required type="text" />
</div>
<div>
<label className="block mb-1 font-medium" htmlFor="email">Email<span className="text-yellow-400">*</span></label>
<input className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all" id="email" name="email" placeholder="your@email.com" required type="email" />
</div>
<div>
<label className="block mb-1 font-medium" htmlFor="phone">Phone <span className="text-gray-400 text-xs">(optional)</span></label>
<input className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all" id="phone" name="phone" placeholder="+91-XXXXXXXXXX" type="tel" />
</div>
<div>
<label className="block mb-1 font-medium" htmlFor="message">Message<span className="text-yellow-400">*</span></label>
<textarea className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all" id="message" name="message" placeholder="How can we help you?" required rows="4"></textarea>
</div>
<button className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 rounded-lg shadow-md transition-all text-lg" type="submit">Send Message</button>
<p className="hidden mt-4 text-green-400 font-semibold text-center" id="formSuccess">Thank you! Your message has been sent.</p>
</form>
</section>

<section className="flex flex-col gap-8">
<div className="bg-gray-900 rounded-2xl p-8 shadow-lg flex-1">
<h3 className="text-xl font-semibold mb-5 text-yellow-400">Contact Details</h3>
<div className="space-y-5">
<div className="flex items-start gap-4">
<span className="flex-shrink-0 text-yellow-400 text-2xl">📍</span>
<span className="text-gray-100 font-medium">PU4, Prestige Law College, 3rd Floor, Madhya Pradesh 45200</span>
</div>
<div className="flex items-center gap-4">
<span className="flex-shrink-0 text-yellow-400 text-2xl">📞</span>
<a className="text-gray-100 hover:text-yellow-400 font-medium transition" href="tel:+91XXXXXXXXXX">+91-XXXXXXXXXX</a>
</div>
<div className="flex items-center gap-4">
<span className="flex-shrink-0 text-yellow-400 text-2xl">📧</span>
<a className="text-gray-100 hover:text-yellow-400 font-medium transition" href="mailto:support@listapp.in">support@listapp.in</a>
</div>
</div>
</div>

<div className="rounded-2xl overflow-hidden shadow-lg h-56 sm:h-64 w-full">
<iframe allowfullscreen="" className="w-full h-full border-0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=PU4, Prestige Law College, Madhya Pradesh 45200&output=embed" title="ListApp Location"></iframe>
</div>
</section>
</main>

<section className="max-w-6xl mx-auto px-4 mb-10">
<div className="bg-gray-900 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between shadow-lg">
<div className="mb-4 md:mb-0">
<span className="text-lg md:text-xl font-semibold text-yellow-400">Need quick help?</span>
</div>
<a className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-lg shadow-md text-lg transition-all" href="https://wa.me/919999999999" target="_blank">Chat with Support</a>
</div>
</section>

<footer className="bg-gray-950 text-gray-400 py-6 mt-auto">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 space-y-4 md:space-y-0">
<span className="text-sm">© 2024 ListApp. All rights reserved.</span>
<nav className="flex space-x-6 text-sm">
<a className="hover:text-yellow-400 transition" href="#">Privacy Policy</a>
<a className="hover:text-yellow-400 transition" href="#">Terms</a>
<a className="hover:text-yellow-400 transition" href="#">Help Center</a>
</nav>
</div>
</footer>



    </>
  );
}
