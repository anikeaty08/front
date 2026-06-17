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



    document.addEventListener('DOMContentLoaded', () => {
      const words = document.querySelectorAll('.focus-word');
      const frame = document.getElementById('focus-frame');
      let currentIndex = 0;
      let interval;
      
      const updateFocusFrame = (target) => {
        const rect = target.getBoundingClientRect();
        const container = document.getElementById('focus-container');
        const containerRect = container.getBoundingClientRect();
        
        frame.style.width = `${rect.width}px`;
        frame.style.height = `${rect.height}px`;
        frame.style.left = `${rect.left - containerRect.left}px`;
        frame.style.top = `${rect.top - containerRect.top}px`;
      };
      
      const focusWord = (index) => {
        words.forEach(w => w.classList.remove('active'));
        words[index].classList.add('active');
        updateFocusFrame(words[index]);
        currentIndex = index;
      };
      
      focusWord(0);
      
      words.forEach((word, index) => {
        word.addEventListener('mouseenter', () => {
          clearInterval(interval);
          focusWord(index);
        });
      });
      
      const startAutoFocus = () => {
        interval = setInterval(() => {
          currentIndex = (currentIndex + 1) % words.length;
          focusWord(currentIndex);
        }, 2000);
      };
      
      document.getElementById('focus-container').addEventListener('mouseleave', startAutoFocus);
      startAutoFocus();
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
      
<nav className="border-b border-neutral-800 px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-2xl font-light tracking-tight" href="#">type<span className="text-sky-500">finder</span></a>
<div className="hidden md:flex space-x-6">
<a className="text-white/70 hover:text-sky-500 text-sm" href="#">Discover</a>
<a className="text-white/70 hover:text-sky-500 text-sm" href="#">Categories</a>
<a className="text-white/70 hover:text-sky-500 text-sm" href="#">Collections</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden md:block">
<input className="bg-zinc-800 rounded-full py-2 px-4 text-sm w-64 focus:outline-none focus:ring-1 focus:ring-sky-500" placeholder="Search fonts..." type="text"/>
<svg className="h-4 w-4 absolute right-3 top-2.5 text-white/60" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<button className="bg-sky-500 hover:bg-sky-600 text-white py-2 px-5 rounded-full text-sm shadow-sm transition">Sign In</button>
<button className="md:hidden">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>
<header className="px-4 pt-12 pb-16 sm:px-6 lg:px-8 md:pt-20 md:pb-24 flex flex-col lg:flex-row items-center">
<div className="lg:w-1/2 mb-12 lg:mb-0">
<h1 className="text-5xl md:text-7xl font-light tracking-tight leading-tight max-w-xl">Discover perfect <span className="text-sky-500">typography</span> for your vision</h1>
<p className="mt-6 text-base text-white/70 max-w-lg">Explore thousands of carefully crafted fonts from independent type designers and established foundries worldwide.</p>
<div className="mt-8 flex flex-wrap gap-4">
<button className="bg-sky-500 hover:bg-sky-600 text-white py-3 px-8 rounded-full text-sm shadow-sm transition">Browse Fonts</button>
<button className="border border-neutral-800 hover:border-sky-500 text-white py-3 px-8 rounded-full text-sm transition">Font Pairing Tool</button>
</div>
</div>
<div className="lg:w-1/2 flex justify-center items-center">
<div className="relative flex flex-wrap justify-center gap-4 py-8" id="focus-container">
<div className="focus-frame absolute pointer-events-none" id="focus-frame" style={{animation: 'pulse 2s infinite'}}>
<span className="focus-corner absolute top-[-5px] left-[-5px] border-r-0 border-b-0"></span>
<span className="focus-corner absolute top-[-5px] right-[-5px] border-l-0 border-b-0"></span>
<span className="focus-corner absolute bottom-[-5px] left-[-5px] border-r-0 border-t-0"></span>
<span className="focus-corner absolute bottom-[-5px] right-[-5px] border-l-0 border-t-0"></span>
</div>
<span className="focus-word text-5xl font-black px-2">Typography</span>
<span className="focus-word text-5xl font-black px-2">Matters</span>
<span className="focus-word text-5xl font-black px-2">For</span>
<span className="focus-word text-5xl font-black px-2">Design</span>
</div>
</div>
</header>
<div className="px-4 sm:px-6 lg:px-8 py-4 overflow-x-auto">
<div className="flex space-x-3 min-w-max">
<button className="bg-sky-500 text-white py-2 px-5 rounded-full text-sm shadow-sm">All Styles</button>
<button className="bg-zinc-800 hover:bg-zinc-700 text-white py-2 px-5 rounded-full text-sm transition">Serif</button>
<button className="bg-zinc-800 hover:bg-zinc-700 text-white py-2 px-5 rounded-full text-sm transition">Sans Serif</button>
<button className="bg-zinc-800 hover:bg-zinc-700 text-white py-2 px-5 rounded-full text-sm transition">Display</button>
<button className="bg-zinc-800 hover:bg-zinc-700 text-white py-2 px-5 rounded-full text-sm transition">Monospace</button>
<button className="bg-zinc-800 hover:bg-zinc-700 text-white py-2 px-5 rounded-full text-sm transition">Handwritten</button>
</div>
</div>
<section className="px-4 sm:px-6 lg:px-8 py-8">
<div className="flex justify-between items-center mb-6">
<h2 className="text-2xl font-light tracking-tight">Featured Typefaces</h2>
<a className="text-sky-500 hover:underline text-sm" href="#">View All</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
<div className="font-card bg-zinc-800 rounded-xl overflow-hidden border border-neutral-800 hover:border-sky-500 transition group shadow-sm">
<div className="h-48 flex items-center justify-center p-6 overflow-hidden relative bg-zinc-900">
<h3 className="preview-text text-5xl transition duration-300">Aa Bb Cc</h3>
<div className="absolute top-3 right-3 bg-black/50 rounded-full px-3 py-1 text-xs">Premium</div>
</div>
<div className="p-5">
<h3 className="text-lg font-medium">Playfair Display</h3>
<p className="text-white/60 text-sm mt-1">by Claus Eggers Sørensen</p>
<div className="flex justify-between items-center mt-4">
<span className="text-xs text-white/60">Serif • 9 styles</span>
<button className="text-sky-500 hover:text-sky-400 text-sm">Try now</button>
</div>
</div>
</div>
<div className="font-card bg-zinc-800 rounded-xl overflow-hidden border border-neutral-800 hover:border-sky-500 transition group shadow-sm">
<div className="h-48 flex items-center justify-center p-6 overflow-hidden relative bg-zinc-900">
<h3 className="preview-text text-5xl transition duration-300 font-mono">Aa Bb Cc</h3>
<div className="absolute top-3 right-3 bg-black/50 rounded-full px-3 py-1 text-xs">Free</div>
</div>
<div className="p-5">
<h3 className="text-lg font-medium">Roboto Mono</h3>
<p className="text-white/60 text-sm mt-1">by Christian Robertson</p>
<div className="flex justify-between items-center mt-4">
<span className="text-xs text-white/60">Monospace • 7 styles</span>
<button className="text-sky-500 hover:text-sky-400 text-sm">Try now</button>
</div>
</div>
</div>
<div className="font-card bg-zinc-800 rounded-xl overflow-hidden border border-neutral-800 hover:border-sky-500 transition group shadow-sm">
<div className="h-48 flex items-center justify-center p-6 overflow-hidden relative bg-zinc-900">
<h3 className="preview-text text-5xl transition duration-300" style={{fontFamily: 'serif'}}>Aa Bb Cc</h3>
<div className="absolute top-3 right-3 bg-sky-500/90 rounded-full px-3 py-1 text-xs">New</div>
</div>
<div className="p-5">
<h3 className="text-lg font-medium">Merriweather</h3>
<p className="text-white/60 text-sm mt-1">by Sorkin Type Co</p>
<div className="flex justify-between items-center mt-4">
<span className="text-xs text-white/60">Serif • 8 styles</span>
<button className="text-sky-500 hover:text-sky-400 text-sm">Try now</button>
</div>
</div>
</div>
<div className="font-card bg-zinc-800 rounded-xl overflow-hidden border border-neutral-800 hover:border-sky-500 transition group shadow-sm">
<div className="h-48 flex items-center justify-center p-6 overflow-hidden relative bg-zinc-900">
<h3 className="preview-text text-5xl transition duration-300 font-light">Aa Bb Cc</h3>
<div className="absolute top-3 right-3 bg-black/50 rounded-full px-3 py-1 text-xs">Free</div>
</div>
<div className="p-5">
<h3 className="text-lg font-medium">Inter</h3>
<p className="text-white/60 text-sm mt-1">by Rasmus Andersson</p>
<div className="flex justify-between items-center mt-4">
<span className="text-xs text-white/60">Sans Serif • 9 styles</span>
<button className="text-sky-500 hover:text-sky-400 text-sm">Try now</button>
</div>
</div>
</div>
<div className="font-card bg-zinc-800 rounded-xl overflow-hidden border border-neutral-800 hover:border-sky-500 transition group shadow-sm">
<div className="h-48 flex items-center justify-center p-6 overflow-hidden relative bg-zinc-900">
<h3 className="preview-text text-5xl transition duration-300" style={{fontStyle: 'italic'}}>Aa Bb Cc</h3>
<div className="absolute top-3 right-3 bg-black/50 rounded-full px-3 py-1 text-xs">Premium</div>
</div>
<div className="p-5">
<h3 className="text-lg font-medium">Baskerville</h3>
<p className="text-white/60 text-sm mt-1">by John Baskerville</p>
<div className="flex justify-between items-center mt-4">
<span className="text-xs text-white/60">Serif • 6 styles</span>
<button className="text-sky-500 hover:text-sky-400 text-sm">Try now</button>
</div>
</div>
</div>
<div className="font-card bg-zinc-800 rounded-xl overflow-hidden border border-neutral-800 hover:border-sky-500 transition group shadow-sm">
<div className="h-48 flex items-center justify-center p-6 overflow-hidden relative bg-zinc-900">
<h3 className="preview-text text-5xl transition duration-300" style={{fontWeight: '900'}}>Aa Bb</h3>
<div className="absolute top-3 right-3 bg-sky-500/90 rounded-full px-3 py-1 text-xs">New</div>
</div>
<div className="p-5">
<h3 className="text-lg font-medium">Montserrat</h3>
<p className="text-white/60 text-sm mt-1">by Julieta Ulanovsky</p>
<div className="flex justify-between items-center mt-4">
<span className="text-xs text-white/60">Sans Serif • 18 styles</span>
<button className="text-sky-500 hover:text-sky-400 text-sm">Try now</button>
</div>
</div>
</div>
<div className="font-card bg-zinc-800 rounded-xl overflow-hidden border border-neutral-800 hover:border-sky-500 transition group shadow-sm">
<div className="h-48 flex items-center justify-center p-6 overflow-hidden relative bg-zinc-900">
<h3 className="preview-text text-5xl transition duration-300" style={{fontFamily: 'cursive'}}>Aa Bb</h3>
<div className="absolute top-3 right-3 bg-black/50 rounded-full px-3 py-1 text-xs">Free</div>
</div>
<div className="p-5">
<h3 className="text-lg font-medium">Dancing Script</h3>
<p className="text-white/60 text-sm mt-1">by Pablo Impallari</p>
<div className="flex justify-between items-center mt-4">
<span className="text-xs text-white/60">Handwritten • 4 styles</span>
<button className="text-sky-500 hover:text-sky-400 text-sm">Try now</button>
</div>
</div>
</div>
<div className="font-card bg-zinc-800 rounded-xl overflow-hidden border border-neutral-800 hover:border-sky-500 transition group shadow-sm">
<div className="h-48 flex items-center justify-center p-6 overflow-hidden relative bg-zinc-900">
<h3 className="preview-text text-5xl transition duration-300" style={{letterSpacing: '-0.05em'}}>Aa Bb</h3>
<div className="absolute top-3 right-3 bg-black/50 rounded-full px-3 py-1 text-xs">Premium</div>
</div>
<div className="p-5">
<h3 className="text-lg font-medium">Futura</h3>
<p className="text-white/60 text-sm mt-1">by Paul Renner</p>
<div className="flex justify-between items-center mt-4">
<span className="text-xs text-white/60">Sans Serif • 12 styles</span>
<button className="text-sky-500 hover:text-sky-400 text-sm">Try now</button>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
