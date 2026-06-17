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
      
<div className="relative overflow-hidden min-h-screen">

<div className="spline-container opacity-80">
<iframe frameborder="0" height="100%" src="https://my.spline.design/venturadaccord2copycopy-iOeF1h9eOZyNW4lCTWoX263y/" width="100%"></iframe>
</div>

<header className="relative z-10">
<nav className="container mx-auto px-6 py-8">
<div className="flex items-center justify-between">
<div className="font-medium text-xl">Luma</div>
<div className="hidden md:flex space-x-8 text-sm">
<a className="hover:text-gray-600 transition-colors" href="#">Products</a>
<a className="hover:text-gray-600 transition-colors" href="#">Features</a>
<a className="hover:text-gray-600 transition-colors" href="#">About</a>
<a className="hover:text-gray-600 transition-colors" href="#">Contact</a>
</div>
<div>
<button className="border border-black/10 px-5 py-2 rounded-full text-sm font-medium hover:border-black/20 transition-all duration-300">
              Sign In
            </button>
</div>
</div>
</nav>
</header>

<div className="container mx-auto px-6">
<div className="h-px bg-black/10"></div>
</div>

<main className="relative z-10 container mx-auto px-6 pt-16 pb-20">
<div className="max-w-3xl mx-auto">
<h1 className="font-medium text-4xl md:text-5xl mb-6 leading-tight tracking-tight">
          Design with simplicity, build with clarity
        </h1>
<p className="text-lg text-gray-600 mb-10 max-w-2xl">
          Create meaningful digital experiences through thoughtful design and innovative technology.
        </p>
<div className="flex flex-wrap gap-4">
<button className="bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-all">
            Get Started
          </button>
<button className="border border-black/10 px-6 py-3 rounded-full text-sm font-medium hover:border-black/20 transition-all">
            Learn More
          </button>
</div>
</div>

<div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
<div className="gradient-border pt-6">
<h3 className="font-medium text-lg mb-2">Intuitive Design</h3>
<p className="text-gray-600 text-sm">Crafted with user experience at the forefront of every decision.</p>
</div>
<div className="gradient-border pt-6">
<h3 className="font-medium text-lg mb-2">Seamless Integration</h3>
<p className="text-gray-600 text-sm">Works flawlessly with your existing tools and workflows.</p>
</div>
<div className="gradient-border pt-6">
<h3 className="font-medium text-lg mb-2">Powerful Analytics</h3>
<p className="text-gray-600 text-sm">Gain insights to make data-driven decisions with confidence.</p>
</div>
</div>
</main>

<div className="container mx-auto px-6 mt-10">
<div className="h-px bg-black/10"></div>
</div>

<footer className="relative z-10 container mx-auto px-6 py-8">
<div className="text-sm text-gray-500 text-center">
        © 2023 Luma. All rights reserved.
      </div>
</footer>
</div>

    </>
  );
}
