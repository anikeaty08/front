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
      
<nav className="glass fixed w-full p-4 z-10">
<div className="container mx-auto flex justify-between items-center">
<div className="text-white font-semibold tracking-tight text-xl">Lumina</div>
<div className="hidden md:flex space-x-8">
<a className="text-white text-sm hover:text-indigo-200 transition" href="#">Home</a>
<a className="text-white text-sm hover:text-indigo-200 transition" href="#">Features</a>
<a className="text-white text-sm hover:text-indigo-200 transition" href="#">Pricing</a>
<a className="text-white text-sm hover:text-indigo-200 transition" href="#">About</a>
</div>
<button className="glass px-5 py-2 rounded-full text-white text-sm hover:bg-white hover:bg-opacity-20 transition">Sign Up</button>
</div>
</nav>
<header className="container mx-auto pt-32 pb-20 px-4">
<div className="max-w-4xl mx-auto text-center">
<h1 className="text-6xl font-light tracking-tighter text-white mb-6">Design the future with Lumina</h1>
<p className="text-lg text-indigo-100 mb-10 max-w-2xl mx-auto">Create stunning digital experiences with our intuitive platform designed for modern creators and innovators.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-white text-indigo-900 px-8 py-3 rounded-full text-base font-semibold hover:bg-opacity-90 transition">Get Started</button>
<button className="glass text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-white hover:bg-opacity-10 transition">Learn More</button>
</div>
</div>
</header>
<section className="container mx-auto py-20 px-4">
<div className="max-w-6xl mx-auto">
<h2 className="text-4xl font-semibold tracking-tight text-white mb-16 text-center">Features that empower</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="glass rounded-2xl p-8">
<div className="w-12 h-12 bg-indigo-500 bg-opacity-30 rounded-xl flex items-center justify-center mb-6">
<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Lightning Fast</h3>
<p className="text-indigo-100 text-base">Our platform is optimized for speed, ensuring your projects launch without delay.</p>
</div>
<div className="glass rounded-2xl p-8">
<div className="w-12 h-12 bg-indigo-500 bg-opacity-30 rounded-xl flex items-center justify-center mb-6">
<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Secure by Design</h3>
<p className="text-indigo-100 text-base">Advanced security features protect your data and give you peace of mind.</p>
</div>
<div className="glass rounded-2xl p-8">
<div className="w-12 h-12 bg-indigo-500 bg-opacity-30 rounded-xl flex items-center justify-center mb-6">
<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Customizable</h3>
<p className="text-indigo-100 text-base">Tailor every aspect of your project with our flexible customization options.</p>
</div>
</div>
</div>
</section>
<section className="container mx-auto py-20 px-4">
<div className="max-w-6xl mx-auto glass rounded-3xl p-12">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-4xl font-semibold tracking-tight text-white mb-6">Start your journey today</h2>
<p className="text-base text-indigo-100 mb-8">Join thousands of creators who have already transformed their workflow with our innovative platform.</p>
<button className="bg-white text-indigo-900 px-8 py-3 rounded-full text-base font-semibold hover:bg-opacity-90 transition">Get Started Free</button>
</div>
<div className="bg-indigo-800 bg-opacity-50 rounded-2xl p-6 h-80 flex items-center justify-center">
<p className="text-white text-xl font-light">Interactive Demo Placeholder</p>
</div>
</div>
</div>
</section>
<footer className="container mx-auto py-12 px-4">
<div className="max-w-6xl mx-auto text-center">
<p className="text-indigo-200 text-sm mb-6">© 2023 Lumina. All rights reserved.</p>
<div className="flex justify-center space-x-6">
<a className="text-indigo-200 hover:text-white transition" href="#">Terms</a>
<a className="text-indigo-200 hover:text-white transition" href="#">Privacy</a>
<a className="text-indigo-200 hover:text-white transition" href="#">Contact</a>
</div>
</div>
</footer>

    </>
  );
}
