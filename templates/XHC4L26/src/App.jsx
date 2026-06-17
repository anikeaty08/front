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
      
    // Fade in on scroll for sections
    document.addEventListener('DOMContentLoaded', function() {
      const fadeEls = document.querySelectorAll('.fade-section');
      const observer = new window.IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if(entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      }, { threshold: 0.15 });
      fadeEls.forEach(el => observer.observe(el));
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
      

<header className="w-full px-4 pt-6 pb-3 flex justify-center items-center bg-transparent">
<div className="rounded-xl px-6 py-2 bg-[#e3342f] flex items-center shadow-md select-none">
<span className="text-white text-2xl font-extrabold tracking-wide" style={{fontFamily: '\'Plus Jakarta Sans\', sans-serif'}}>Caazan</span>
</div>
</header>

<section className="w-full px-4 mt-8 fade-section">
<h1 className="text-3xl font-extrabold text-white mb-2">Discover Minisites</h1>
<p className="text-base text-gray-300 mb-4">Curated, creative, and practical tiny sites in one organic, scrollable space.</p>
<a className="inline-block px-6 py-3 bg-[#e3342f] text-white font-bold rounded-lg shadow-lg hover:bg-[#c53030] transition mb-4" href="#sites">Browse Minisites</a>
</section>

<section className="w-full px-4 mt-10 fade-section" id="sites">
<h2 className="text-xl font-extrabold mb-4 text-white">Featured Minisites</h2>
<div className="flex flex-col gap-6">

<a className="block group fade-section" href="#">
<div className="bg-[#23262e] rounded-lg shadow border border-[#23262e] overflow-hidden flex flex-col">
<img alt="Eco Travel Blog" className="w-full h-36 object-cover" src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="p-4">
<h3 className="font-semibold text-lg text-white mb-1">Eco Travel Blog</h3>
<p className="text-gray-400 text-sm mb-2">Tips and stories for sustainable journeys.</p>
<span className="inline-block text-xs text-[#e3342f] font-semibold bg-[#e3342f]/10 rounded px-2 py-0.5">New</span>
</div>
</div>
</a>

<a className="block group fade-section" href="#">
<div className="bg-[#23262e] rounded-lg shadow border border-[#23262e] overflow-hidden flex flex-col">
<img alt="Recipe Share" className="w-full h-36 object-cover" src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="p-4">
<h3 className="font-semibold text-lg text-white mb-1">Recipe Share</h3>
<p className="text-gray-400 text-sm mb-2">Easy, healthy, and delicious home-cooked recipes.</p>
<span className="inline-block text-xs text-[#e3342f] font-semibold bg-[#e3342f]/10 rounded px-2 py-0.5">Community</span>
</div>
</div>
</a>

<a className="block group fade-section" href="#">
<div className="bg-[#23262e] rounded-lg shadow border border-[#23262e] overflow-hidden flex flex-col">
<img alt="Tiny Portfolio" className="w-full h-36 object-cover" src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="p-4">
<h3 className="font-semibold text-lg text-white mb-1">Tiny Portfolio</h3>
<p className="text-gray-400 text-sm mb-2">Minimalist showcase for artists and coders.</p>
<span className="inline-block text-xs text-[#e3342f] font-semibold bg-[#e3342f]/10 rounded px-2 py-0.5">Portfolio</span>
</div>
</div>
</a>
</div>
</section>

<section className="w-full px-4 mt-14 mb-10 text-center fade-section" id="about">
<h2 className="text-xl font-extrabold text-white mb-2">About Caazan</h2>
<p className="text-gray-400 mb-4">Caazan is the organic, mobile-first directory for unique and practical minisites. Discover, get inspired, or submit your own!</p>
<a className="inline-block px-5 py-2 bg-[#e3342f] rounded-lg shadow text-white font-bold hover:bg-[#c53030] transition" href="#">Submit a Minisite</a>
</section>

<footer className="w-full py-5 text-center text-gray-500 text-xs fade-section">© 2024 Caazan Directory</footer>


    </>
  );
}
