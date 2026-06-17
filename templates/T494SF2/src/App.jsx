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
      

<nav className="bg-[#d3bfa6] shadow-md">
<div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
<div className="flex items-center space-x-2">
<svg className="w-8 h-8 text-[#7e6c4b]" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M3 21v-7.5A2.5 2.5 0 015.5 11h13A2.5 2.5 0 0121 13.5V21M9 21V11M15 21V11M6 7V4a1 1 0 011-1h10a1 1 0 011 1v3" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-2xl font-bold text-[#4b3f2d]">EarthBuild</span>
</div>
<div className="space-x-8 font-semibold text-[#4b3f2d]">
<a className="hover:text-[#9d7c4b]" href="index.html#services">Services</a>
<a className="hover:text-[#9d7c4b]" href="index.html#projects">Projects</a>
<a className="hover:text-[#9d7c4b]" href="index.html#about">About</a>
<a className="hover:text-[#9d7c4b] underline" href="contact.html">Contact</a>
</div>
</div>
</nav>

<section className="bg-gradient-to-b from-[#d3bfa6] to-[#f4efe8] py-16">
<div className="max-w-3xl mx-auto px-6 text-center">
<h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-[#4b3f2d]">Contact Us</h1>
<p className="text-lg md:text-xl text-[#7e6c4b]">We're here to answer your questions and discuss your next project!</p>
</div>
</section>

<main className="flex-1">
<section className="max-w-4xl mx-auto px-6 py-14">
<div className="bg-[#e3dac9] rounded-xl shadow-md flex flex-col md:flex-row gap-8 p-8 md:p-12">

<div className="flex-1 flex flex-col justify-center mb-8 md:mb-0">
<h2 className="text-2xl font-bold mb-4 text-[#4b3f2d]">Get in Touch</h2>
<ul className="space-y-3 text-[#7e6c4b] text-base">
<li className="flex items-center">
<svg className="w-5 h-5 mr-2 text-[#7e6c4b]" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M16 2a2 2 0 012 2v0a2 2 0 01-2 2H8a2 2 0 01-2-2v0a2 2 0 012-2h8zm0 0v0a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V4" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span>info@earthbuild.com</span>
</li>
<li className="flex items-center">
<svg className="w-5 h-5 mr-2 text-[#7e6c4b]" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M3 5h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13v6a1 1 0 001 1h8a1 1 0 001-1v-6M9 21h6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span>+1 (555) 123-4567</span>
</li>
<li className="flex items-center">
<svg className="w-5 h-5 mr-2 text-[#7e6c4b]" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h2" strokeLinecap="round" strokeLinejoin="round"></path>
<rect height="6" rx="2" width="10" x="7" y="2"></rect>
</svg>
<span>456 Greenway Ave, Springfield, USA</span>
</li>
</ul>
<div className="mt-8">
<h3 className="font-semibold text-[#4b3f2d] mb-2">Office Hours</h3>
<p className="text-[#7e6c4b]">Mon-Fri: 8:00 AM - 5:00 PM</p>
</div>
</div>

<form className="flex-1 bg-white rounded-lg shadow p-6 space-y-6">
<div>
<label className="block mb-2 font-semibold text-[#4b3f2d]" htmlFor="name">Name</label>
<input className="w-full border border-[#e3dac9] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7e6c4b]" id="name" placeholder="Your Name" type="text"/>
</div>
<div>
<label className="block mb-2 font-semibold text-[#4b3f2d]" htmlFor="email">Email</label>
<input className="w-full border border-[#e3dac9] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7e6c4b]" id="email" placeholder="Your Email" type="email"/>
</div>
<div>
<label className="block mb-2 font-semibold text-[#4b3f2d]" htmlFor="message">Message</label>
<textarea className="w-full border border-[#e3dac9] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7e6c4b]" id="message" placeholder="How can we help?" rows="4"></textarea>
</div>
<button className="w-full py-3 bg-[#7e6c4b] text-white font-semibold rounded-lg hover:bg-[#4b3f2d] transition" type="submit">Send Message</button>
</form>
</div>
</section>
</main>

<footer className="bg-[#4b3f2d] text-[#e3dac9] py-6 mt-auto">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
<span>© 2024 EarthBuild Construction. All rights reserved.</span>
<div className="space-x-4 mt-4 md:mt-0">
<a className="hover:underline" href="#">Privacy Policy</a>
<a className="hover:underline" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
