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
      

<div className="fixed inset-0 overflow-hidden">
<div className="star absolute h-2 w-2 bg-white rounded-full top-[15%] left-[20%] opacity-70" style={{animationDelay: `0.5s`}}></div>
<div className="star absolute h-2 w-2 bg-white rounded-full top-[45%] left-[80%] opacity-70" style={{animationDelay: `1.5s`}}></div>
<div className="star absolute h-3 w-3 bg-white rounded-full top-[65%] left-[35%] opacity-80" style={{animationDelay: `0.7s`}}></div>
<div className="star absolute h-2 w-2 bg-white rounded-full top-[25%] left-[60%] opacity-70" style={{animationDelay: `2.1s`}}></div>
<div className="star absolute h-2 w-2 bg-white rounded-full top-[75%] left-[75%] opacity-70" style={{animationDelay: `1.2s`}}></div>
<div className="star absolute h-3 w-3 bg-white rounded-full top-[55%] left-[15%] opacity-90" style={{animationDelay: `0.3s`}}></div>
<div className="star absolute h-2 w-2 bg-white rounded-full top-[85%] left-[50%] opacity-80" style={{animationDelay: `1.8s`}}></div>

<div className="shooting-star" style={{top: `10%`, right: `10%`, animation: `shootingStar 2s ease-in-out 0.2s infinite`}}>
<div className="star-tail"></div>
</div>
<div className="shooting-star" style={{top: `5%`, right: `30%`, animation: `shootingStar 2.5s ease-in-out 1.7s infinite`}}>
<div className="star-tail"></div>
</div>
</div>

<header className="fixed top-0 left-0 right-0 z-50">
<nav className="glass border-b border-neutral-800/30 px-6 py-4">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="flex items-center">
<a className="text-white font-['Barlow_Condensed'] text-2xl font-medium tracking-tight" href="#">COSMIC</a>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-neutral-400 text-sm hover:text-white transition-colors" href="#">Home</a>
<a className="text-neutral-400 text-sm hover:text-white transition-colors" href="#">Explore</a>
<a className="text-neutral-400 text-sm hover:text-white transition-colors" href="#">Gallery</a>
<a className="text-neutral-400 text-sm hover:text-white transition-colors" href="#">About</a>
<a className="text-white text-sm hover:text-blue-400 transition-colors" href="#">Contact</a>
</div>
<div>
<button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded transition-colors">
            Connect
          </button>
</div>
<button className="md:hidden text-white">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</nav>
</header>

<div className="relative min-h-screen flex items-center justify-center px-4 py-20 md:px-8">
<div className="w-full max-w-5xl">
<div className="p-6 md:p-12 flex flex-col md:flex-row items-start gap-8 md:gap-16">
<div className="w-full md:w-2/5 space-y-6">
<div className="animate-slide" style={{animationDelay: `0.1s`}}>
<h2 className="text-blue-500 font-['Barlow_Condensed'] text-lg md:text-xl tracking-normal uppercase">Get in touch</h2>
</div>
<div className="animate-slide" style={{animationDelay: `0.2s`}}>
<h1 className="font-['Barlow_Condensed'] text-white text-4xl md:text-5xl lg:text-6xl font-medium tracking-normal leading-tight">Contact<br />Our Team</h1>
</div>
<div className="animate-slide" style={{animationDelay: `0.3s`}}>
<p className="text-neutral-300 text-sm md:text-base max-w-xl">Have questions about our cosmic journeys? Want to learn more about the universe? Our team of space enthusiasts is ready to help you explore the cosmos.</p>
</div>
<div className="animate-slide space-y-4" style={{animationDelay: `0.4s`}}>
<div className="flex items-start gap-3">
<div className="text-blue-500 mt-1">
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
</svg>
</div>
<div>
<h3 className="text-white text-sm font-medium">Email</h3>
<p className="text-neutral-400 text-sm">contact@cosmicjourney.com</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="text-blue-500 mt-1">
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
</svg>
</div>
<div>
<h3 className="text-white text-sm font-medium">Phone</h3>
<p className="text-neutral-400 text-sm">+1 (555) 123-4567</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="text-blue-500 mt-1">
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" fillRule="evenodd"></path>
</svg>
</div>
<div>
<h3 className="text-white text-sm font-medium">Location</h3>
<p className="text-neutral-400 text-sm">1234 Stellar Avenue, Universe City</p>
</div>
</div>
</div>
</div>
<div className="w-full md:w-3/5 animate-slide" style={{animationDelay: `0.5s`}}>
<form className="glass border border-neutral-800/30 rounded-xl p-6 md:p-8">
<h3 className="font-['Barlow_Condensed'] text-white text-xl md:text-2xl font-medium mb-6">Send us a message</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
<div>
<label className="block text-sm text-neutral-300 mb-1" htmlFor="name">Name</label>
<input className="w-full px-4 py-2 bg-neutral-800/50 border border-neutral-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" id="name" placeholder="Your name" type="text" />
</div>
<div>
<label className="block text-sm text-neutral-300 mb-1" htmlFor="email">Email</label>
<input className="w-full px-4 py-2 bg-neutral-800/50 border border-neutral-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" id="email" placeholder="Your email" type="email" />
</div>
</div>
<div className="mb-4">
<label className="block text-sm text-neutral-300 mb-1" htmlFor="subject">Subject</label>
<input className="w-full px-4 py-2 bg-neutral-800/50 border border-neutral-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" id="subject" placeholder="What's this about?" type="text" />
</div>
<div className="mb-6">
<label className="block text-sm text-neutral-300 mb-1" htmlFor="message">Message</label>
<textarea className="w-full px-4 py-2 bg-neutral-800/50 border border-neutral-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" id="message" placeholder="Your message..." rows="4"></textarea>
</div>
<button className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors" type="submit">
              Send Message
            </button>
</form>
</div>
</div>
</div>
</div>

    </>
  );
}
