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
      

<div className="background">
<iframe frameborder="0" height="100%" src="https://my.spline.design/cooperdesign-a1sK9pL5zV/" width="100%"></iframe>
</div>

<div className="content-area">

<nav className="container mx-auto px-6 py-6">
<div className="flex items-center justify-between">
<div className="flex items-center">
<svg className="h-8 w-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
</svg>
<span className="ml-3 text-xl tracking-tight">Cooper AI</span>
</div>
<div className="hidden md:flex space-x-10 text-sm text-gray-300">
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Capabilities</a>
<a className="hover:text-white transition-colors" href="#">Integration</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div>
<button className="text-sm border border-gray-700 rounded-md px-4 py-2 hover:bg-white/5 transition-all">
            Log In
          </button>
</div>
</div>
</nav>

<section className="container mx-auto px-6 pt-16 md:pt-24 text-center">
<div className="flex flex-col items-center max-w-3xl mx-auto">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">
          Smarter Lead Engagement
        </h1>
<p className="text-gray-300 text-xl md:text-2xl mb-8 max-w-2xl font-light tracking-wide">
          Cooper is your AI-powered companion ensuring every lead gets the attention it deserves, instantly.
        </p>
<div className="flex flex-col sm:flex-row gap-4 mt-4">
<button className="bg-green-600 text-white font-light rounded-md px-8 py-3 hover:bg-green-700 transition-all">
            Try Cooper
          </button>
<a className="flex items-center text-gray-300 hover:text-white transition-colors py-3 px-2 group" href="#">
            Learn More
            <span className="material-symbols-outlined ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto text-gray-300">
<div className="text-center">
<p className="text-3xl font-light mb-2">💬 Instant Conversations</p>
<p className="font-extralight">Communicate with leads via SMS, email, and calls in seconds.</p>
</div>
<div className="text-center">
<p className="text-3xl font-light mb-2">🧠 Real-Time Intelligence</p>
<p className="font-extralight">Understand and qualify leads promptly to increase engagement.</p>
</div>
<div className="text-center">
<p className="text-3xl font-light mb-2">🔗 Seamless Integration</p>
<p className="font-extralight">Compatible with Aires CRM and your current systems.</p>
</div>
</div>
</section>
</div>

    </>
  );
}
