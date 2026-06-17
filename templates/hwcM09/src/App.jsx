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
      
<nav className="fixed w-full h-20 bg-white border-b border-black/10 z-50">
<div className="container mx-auto px-8 h-full flex items-center justify-between">
<a className="text-sm tracking-[0.15em] uppercase font-medium" href="#">THE NYCHE</a>
<div className="flex gap-[48px]">
<a className="nav-link text-[14px] uppercase tracking-[0.15em] font-medium hover:text-[#D4AF37] transition-all duration-400" href="#">Fashion</a>
<a className="nav-link text-[14px] uppercase tracking-[0.15em] font-medium hover:text-[#D4AF37] transition-all duration-400" href="#">Culture</a>
<a className="nav-link text-[14px] uppercase tracking-[0.15em] font-medium hover:text-[#D4AF37] transition-all duration-400" href="#">Subscribe</a>
</div>
</div>
</nav>
<section className="h-[80vh] flex flex-col justify-center px-8 md:px-24">
<div className="relative">
<span className="absolute right-0 top-1/2 -translate-y-1/2 text-[240px] text-[#F8F8F8] font-extralight">01</span>
<div className="max-w-4xl">
<h1 className="flex flex-col leading-[0.9]">
<span className="text-[48px] tracking-[0.4em] font-extrabold">THE</span>
<span className="text-[120px] tracking-[0.25em] font-extrabold">NYCHE</span>
</h1>
<p className="mt-6 text-[14px] tracking-[0.3em] text-gray-500 uppercase">NYC Fashion &amp; Culture</p>
</div>
</div>
</section>
<section className="py-[120px] px-8">
<blockquote className="max-w-[900px] mx-auto text-[42px] font-light text-center leading-tight">
            Image isn't everything, it's the first thing
        </blockquote>
</section>
<section className="relative h-[480px] mb-[120px] group overflow-hidden">
<img alt="Featured" className="w-full h-full object-cover object-[center_40%] grayscale brightness-95 transition-all duration-400 group-hover:brightness-105" src="featured.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70"></div>
<div className="absolute bottom-12 left-12 max-w-2xl">
<p className="text-[12px] tracking-[0.3em] text-[#D4AF37] mb-4 uppercase">Featured</p>
<h2 className="text-[48px] text-white font-semibold mb-4">The Evolution of Style</h2>
<p className="text-[16px] text-white/90">Documenting the transformation of fashion through decades.</p>
</div>
<span className="absolute right-12 top-1/2 -translate-y-1/2 text-[240px] text-[#F8F8F8] font-extralight">02</span>
</section>
<section className="bg-[#FAFAFA] py-20 mb-[120px]">
<div className="container mx-auto px-8 text-center">
<h2 className="text-[24px] font-bold mb-4">NEVER MISS A DROP</h2>
<p className="text-[16px] text-gray-600 mb-8">Style intelligence delivered weekly</p>
<form className="max-w-[500px] mx-auto flex flex-col md:flex-row gap-4">
<input className="flex-1 h-[50px] px-6 border border-black focus:border-[#D4AF37] outline-none transition-all duration-400" placeholder="Your email" type="email"/>
<button className="h-[50px] px-8 bg-black text-white uppercase tracking-wider hover:bg-[#D4AF37] transition-all duration-400">Subscribe</button>
</form>
</div>
</section>

    </>
  );
}
