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
      

<div className="spline-container">
<iframe frameborder="0" height="100%" src="https://my.spline.design/glassmorphlandingpage-nyOS3MRrg0GCft1x8mCtqPwk/" width="100%"></iframe>
</div>

<div className="relative min-h-screen pointer-events-none">

<nav className="px-6 py-8">
<div className="max-w-6xl mx-auto flex justify-between items-center">
<div className="text-white font-medium">Lumina</div>
<div className="hidden md:flex space-x-6 text-white/80 text-sm">
<a className="hover:text-white transition-colors" href="#">Home</a>
<a className="hover:text-white transition-colors" href="#">About</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<button className="text-white text-sm border border-white/20 rounded-full px-5 py-2 hover:bg-white/10 transition-all pointer-events-auto">
          Connect
        </button>
</div>
</nav>

<div className="px-6 max-w-6xl mx-auto mt-20 md:mt-32">
<div className="md:max-w-2xl">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
          Experience the <span className="font-semibold">future</span> of digital interaction
        </h1>
<p className="text-white/70 mt-6 text-lg">
          Explore our innovative platform where creativity meets technology.
        </p>
<div className="mt-10 flex flex-wrap gap-4">
<button className="bg-white text-black rounded-full px-7 py-3 text-sm font-medium hover:bg-opacity-90 transition-all pointer-events-auto">
            Get Started
          </button>
<button className="bg-transparent border border-white/20 text-white rounded-full px-7 py-3 text-sm font-medium hover:bg-white/10 transition-all pointer-events-auto">
            Learn More
          </button>
</div>

<div className="grid grid-cols-3 gap-8 mt-20 text-white">
<div>
<p className="text-2xl font-light">12K+</p>
<p className="text-white/50 text-sm mt-1">Users</p>
</div>
<div>
<p className="text-2xl font-light">87+</p>
<p className="text-white/50 text-sm mt-1">Countries</p>
</div>
<div>
<p className="text-2xl font-light">4.9</p>
<p className="text-white/50 text-sm mt-1">Rating</p>
</div>
</div>
</div>
</div>

<footer className="absolute bottom-8 left-0 right-0 px-6">
<div className="max-w-6xl mx-auto flex justify-between items-center">
<p className="text-white/40 text-xs">© 2023 Lumina. All rights reserved.</p>
<div className="flex space-x-4">
<a className="text-white/40 hover:text-white transition-colors pointer-events-auto" href="#">
<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
</svg>
</a>
<a className="text-white/40 hover:text-white transition-colors pointer-events-auto" href="#">
<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
<path clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill-rule="evenodd"></path>
</svg>
</a>
</div>
</div>
</footer>
</div>


    </>
  );
}
