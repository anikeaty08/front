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
      
<div className="cursor"></div>
<nav className="fixed w-full h-[80px] bg-[#FFFFFF] border-b border-[#3A3A3A] z-50">
<div className="container mx-auto px-[60px] h-full flex items-center justify-between">
<a className="font-['Playfair_Display'] text-2xl tracking-[0.3em] uppercase" href="#">THE NYCHE</a>
<div className="flex gap-[34px]">
<a className="nav-link relative text-sm uppercase tracking-wider hover:text-[#D4AF37] transition-colors" href="#">Fashion</a>
<a className="nav-link relative text-sm uppercase tracking-wider hover:text-[#D4AF37] transition-colors" href="#">Culture</a>
<a className="nav-link relative text-sm uppercase tracking-wider hover:text-[#D4AF37] transition-colors" href="#">Beauty</a>
<a className="nav-link relative text-sm uppercase tracking-wider hover:text-[#D4AF37] transition-colors" href="#">Subscribe</a>
</div>
</div>
</nav>
<section className="h-screen flex flex-col items-center justify-center">
<span className="text-[200px] font-['Inter'] text-[#F5F5F5] absolute">01</span>
<h1 className="font-['Playfair_Display'] text-[180px] tracking-[0.2em] font-light leading-[1.2]">NYCHE</h1>
<p className="text-[24px] font-light tracking-[0.1em] mt-[21px]">Curated Fashion &amp; Culture</p>
</section>
<section className="relative py-[120px] px-[60px]">
<span className="text-[200px] font-['Inter'] text-[#F5F5F5] absolute top-0 right-[89px]">02</span>
<article className="h-[60vh] relative overflow-hidden mb-[89px] group">
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<div className="absolute bottom-[60px] left-[60px] text-white">
<p className="font-variant-small-caps text-[13px] tracking-wider mb-[13px]">Featured</p>
<h2 className="font-['Playfair_Display'] text-[72px] leading-[1.2] mb-[21px]">The Art of Slow Fashion</h2>
<p className="max-w-[600px] leading-[1.7]">Exploring the intersection of sustainability and luxury in modern fashion.</p>
</div>
</article>
<div className="grid grid-cols-3 gap-[40px]">
<article className="article-card col-span-2 border border-[#3A3A3A] p-[60px] hover:border-[#D4AF37] transition-all">
<p className="font-variant-small-caps text-[13px] tracking-wider mb-[13px]">Fashion</p>
<h3 className="font-['Playfair_Display'] text-[36px] leading-[1.2] mb-[21px]">The Return of Minimal Fashion</h3>
<p className="leading-[1.7] mb-[34px]">Exploring the resurgence of minimalism in contemporary fashion and its impact on sustainable practices.</p>
</article>
<article className="article-card border border-[#3A3A3A] p-[60px] hover:border-[#D4AF37] transition-all">
<p className="font-variant-small-caps text-[13px] tracking-wider mb-[13px]">Culture</p>
<h3 className="font-['Playfair_Display'] text-[36px] leading-[1.2] mb-[21px]">Paris Fashion Week</h3>
<p className="leading-[1.7] mb-[34px]">A curated look at the most influential collections.</p>
</article>
</div>
</section>
<section className="py-[120px] px-[60px] bg-[#FAFAFA]">
<blockquote className="font-['Playfair_Display'] text-[72px] italic text-center max-w-[1000px] mx-auto leading-[1.2]">
            "Style is a way to say who you are without having to speak"
        </blockquote>
</section>
<section className="py-[120px] px-[60px]">
<div className="max-w-[600px] mx-auto text-center">
<h4 className="text-[36px] mb-[34px]">Newsletter</h4>
<input className="w-full border-b border-[#3A3A3A] py-[13px] text-center focus:border-[#D4AF37] outline-none transition-colors" placeholder="Your email address" type="email"/>
</div>
</section>

    </>
  );
}
