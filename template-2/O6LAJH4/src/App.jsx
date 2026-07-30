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



    // Initialize icons
    lucide.createIcons({attrs:{'stroke-width':1.5}});
    // Entrance animation
    window.addEventListener('load', () => {
      const animated = document.querySelectorAll('[data-animate]');
      animated.forEach((el, idx) => {
        setTimeout(() => {
          el.classList.remove('opacity-0', 'translate-y-8', 'blur-sm');
        }, idx * 120);
      });
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
      

<header className="flex items-center justify-between px-6 lg:px-14 py-6 border-b border-[#e7e1d8]">
<div className="text-2xl font-medium tracking-tight" style={{fontFamily: `'Playfair Display',serif`}}>YC</div>
<nav className="hidden md:flex gap-8 text-sm">
<a className="hover:text-[#a36e48] transition-colors" href="#">Home</a>
<a className="hover:text-[#a36e48] transition-colors" href="#shop">Shop</a>
<a className="hover:text-[#a36e48] transition-colors" href="#">About</a>
<a className="hover:text-[#a36e48] transition-colors" href="#">Contact</a>
</nav>
<button className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#d0c8bb] hover:border-[#a36e48] transition-colors group">
<i className="w-4 h-4 stroke-[1.5] group-hover:stroke-[#a36e48]" data-lucide="shopping-cart"></i>
<span className="text-sm">Cart</span>
</button>
</header>

<section className="px-6 lg:px-14 pt-20 pb-24 flex flex-col items-start gap-8 relative overflow-hidden">
<div className="opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out" data-animate="">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl" style={{fontFamily: `'Playfair Display',serif`}}>Hand-shaped Japanese Ceramics, Fired with Time-honored Tradition.</h1>
</div>
<div className="opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out delay-150" data-animate="">
<p className="max-w-xl leading-relaxed mt-4">Each piece is crafted in the foothills of Mashiko, celebrating subtle textures, warm earth tones, and the wabi-sabi spirit.</p>
</div>
<div className="opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out delay-300" data-animate="">
<a className="inline-flex items-center gap-3 mt-6 px-6 py-3 rounded-full bg-[#a36e48] hover:bg-[#8a593b] text-white transition-colors" href="#shop">
<span>Shop Collection</span>
<i className="w-4 h-4 stroke-[1.5]" data-lucide="arrow-right"></i>
</a>
</div>

<div className="absolute inset-0 pointer-events-none" style={{backgroundImage: `url('https://images.unsplash.com/photo-1585325701954-46a26c8b195f?auto=format&fit=crop&w=1200&q=60')`, backgroundSize: `cover`, opacity: `0.05`}}></div>
</section>

<section className="px-6 lg:px-14 pb-24" id="shop">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-10" style={{fontFamily: `'Playfair Display',serif`}}>Featured Pieces</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

<article className="opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out" data-animate="">
<div className="bg-[#ebe6dc] rounded-2xl overflow-hidden shadow-sm group relative">
<img alt="Stoneware Mug" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
</div>
<div className="pt-5 flex items-start justify-between">
<div>
<h3 className="font-medium" style={{fontFamily: `'Playfair Display',serif`}}>Stoneware Mug</h3>
<p className="text-sm mt-1">$38</p>
</div>
<button className="text-[#a36e48] p-2 rounded-full hover:bg-[#f0ebe3] transition-colors">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="shopping-cart"></i>
</button>
</div>
</article>

<article className="opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out delay-150" data-animate="">
<div className="bg-[#ebe6dc] rounded-2xl overflow-hidden shadow-sm group relative">
<img alt="Matcha Bowl" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
</div>
<div className="pt-5 flex items-start justify-between">
<div>
<h3 className="font-medium" style={{fontFamily: `'Playfair Display',serif`}}>Matcha Bowl</h3>
<p className="text-sm mt-1">$45</p>
</div>
<button className="text-[#a36e48] p-2 rounded-full hover:bg-[#f0ebe3] transition-colors">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="shopping-cart"></i>
</button>
</div>
</article>

<article className="opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out delay-300" data-animate="">
<div className="bg-[#ebe6dc] rounded-2xl overflow-hidden shadow-sm group relative">
<img alt="Small Plate Set" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
</div>
<div className="pt-5 flex items-start justify-between">
<div>
<h3 className="font-medium" style={{fontFamily: `'Playfair Display',serif`}}>Small Plate Set</h3>
<p className="text-sm mt-1">$60</p>
</div>
<button className="text-[#a36e48] p-2 rounded-full hover:bg-[#f0ebe3] transition-colors">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="shopping-cart"></i>
</button>
</div>
</article>

<article className="opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out" data-animate="">
<div className="bg-[#ebe6dc] rounded-2xl overflow-hidden shadow-sm group relative">
<img alt="Pour Over Set" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
</div>
<div className="pt-5 flex items-start justify-between">
<div>
<h3 className="font-medium" style={{fontFamily: `'Playfair Display',serif`}}>Pour Over Set</h3>
<p className="text-sm mt-1">$95</p>
</div>
<button className="text-[#a36e48] p-2 rounded-full hover:bg-[#f0ebe3] transition-colors">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="shopping-cart"></i>
</button>
</div>
</article>

<article className="opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out delay-150" data-animate="">
<div className="bg-[#ebe6dc] rounded-2xl overflow-hidden shadow-sm group relative">
<img alt="Tea Pot" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=800&q=80" />
</div>
<div className="pt-5 flex items-start justify-between">
<div>
<h3 className="font-medium" style={{fontFamily: `'Playfair Display',serif`}}>Tea Pot</h3>
<p className="text-sm mt-1">$78</p>
</div>
<button className="text-[#a36e48] p-2 rounded-full hover:bg-[#f0ebe3] transition-colors">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="shopping-cart"></i>
</button>
</div>
</article>

<article className="opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out delay-300" data-animate="">
<div className="bg-[#ebe6dc] rounded-2xl overflow-hidden shadow-sm group relative">
<img alt="Serving Platter" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
</div>
<div className="pt-5 flex items-start justify-between">
<div>
<h3 className="font-medium" style={{fontFamily: `'Playfair Display',serif`}}>Serving Platter</h3>
<p className="text-sm mt-1">$68</p>
</div>
<button className="text-[#a36e48] p-2 rounded-full hover:bg-[#f0ebe3] transition-colors">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="shopping-cart"></i>
</button>
</div>
</article>
</div>
<div className="flex justify-center mt-16">
<a className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-[#a36e48] text-[#a36e48] hover:bg-[#a36e48] hover:text-white transition-colors" href="#">
<span>View All Pieces</span>
<i className="w-4 h-4 stroke-[1.5]" data-lucide="arrow-right"></i>
</a>
</div>
</section>

<footer className="border-t border-[#e7e1d8] px-6 lg:px-14 py-12 text-sm">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<p>© 2024 Yamato Ceramics. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-[#a36e48] transition-colors" href="#">Privacy</a>
<a className="hover:text-[#a36e48] transition-colors" href="#">Terms</a>
<a className="hover:text-[#a36e48] transition-colors" href="#">Instagram</a>
</div>
</div>
</footer>


    </>
  );
}
