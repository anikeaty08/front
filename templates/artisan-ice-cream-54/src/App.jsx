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
      

<header className="fixed top-0 w-full z-50 bg-[#FFF9F0]/95 backdrop-blur-sm shadow-[0_2px_12px_rgba(0,0,0,0.06)] h-[80px] flex items-center transition-all duration-300">
<div className="w-full max-w-[1200px] mx-auto px-6 lg:px-8 flex items-center justify-between h-full">

<a className="flex items-center gap-2 group" href="#">
<span className="text-[#FF6B9D] transition-transform duration-300 group-hover:scale-110">
<span className="iconify" data-height="32" data-icon="lucide:ice-cream-2" data-width="32" style={{strokeWidth: '1.5'}}></span>
</span>
<span className="font-['Poppins'] font-semibold text-xl tracking-tight text-[#2D3436]">Scoop &amp; Joy</span>
</a>

<nav className="hidden lg:flex items-center gap-10">
<a className="text-base font-medium text-[#2D3436] hover:text-[#FF6B9D] transition-colors duration-200" href="#flavors">Flavors</a>
<a className="text-base font-medium text-[#2D3436] hover:text-[#FF6B9D] transition-colors duration-200" href="#story">Our Story</a>
<a className="text-base font-medium text-[#2D3436] hover:text-[#FF6B9D] transition-colors duration-200" href="#locations">Locations</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden lg:flex items-center bg-[#FF6B9D] text-white text-sm font-semibold py-3 px-6 rounded-full hover:bg-[#E5558A] transition-all duration-300 transform hover:scale-105 shadow-sm" href="#">
                    Find a Scoop Shop
                </a>

<div className="lg:hidden flex items-center gap-6">
<a className="text-[#2D3436] hover:text-[#FF6B9D]" href="#">
<span className="iconify" data-height="24" data-icon="lucide:map-pin" data-width="24" style={{strokeWidth: '1.5'}}></span>
</a>
<button className="text-[#2D3436]">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div>
</header>

<section className="relative min-h-[90vh] lg:min-h-screen pt-[120px] pb-16 lg:pt-0 lg:pb-0 flex items-center overflow-hidden bg-gradient-to-br from-[#FFF9F0] to-[#E8F8F5]">
<div className="w-full max-w-[1200px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full">

<div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10">
<div className="mb-4 inline-block transform -rotate-2">
<span className="font-['Pacifico'] text-lg lg:text-xl text-[#FF6B9D]">Scooped Fresh Daily ✨</span>
</div>
<h1 className="font-['Poppins'] font-semibold text-5xl lg:text-7xl leading-[1.1] text-[#2D3436] mb-6 tracking-tight max-w-[500px]">
                    Ice Cream Worth Melting For
                </h1>
<p className="font-['Inter'] text-lg lg:text-xl text-[#2D3436]/80 leading-relaxed max-w-[440px] mb-8 font-normal">
                    Crafted with real fruit, organic cream, and zero artificial anything. Every scoop is a little moment of joy.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="bg-[#FF6B9D] text-white text-lg font-semibold py-4 px-9 rounded-full hover:bg-[#E5558A] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(255,107,157,0.4)] transition-all duration-300 text-center" href="#flavors">
                        Explore Flavors
                    </a>
<a className="bg-transparent border-2 border-[#2D3436] text-[#2D3436] text-lg font-semibold py-[14px] px-[34px] rounded-full hover:bg-[#2D3436] hover:text-white transition-all duration-300 text-center" href="#locations">
                        Find Us Near You
                    </a>
</div>

<div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-8 text-[#2D3436]/70 text-sm font-medium">
<span className="flex items-center gap-2">
<span className="iconify text-[#7DD3C0]" data-icon="lucide:leaf" style={{strokeWidth: '1.5'}}></span> 100% Natural
                    </span>
<span className="flex items-center gap-2">
<span className="iconify text-[#C9B8FF]" data-icon="lucide:milk" style={{strokeWidth: '1.5'}}></span> Organic Dairy
                    </span>
<span className="flex items-center gap-2">
<span className="iconify text-[#FF6B9D]" data-icon="lucide:heart" style={{strokeWidth: '1.5'}}></span> Made with Love
                    </span>
</div>
</div>

<div className="relative h-[50vh] lg:h-auto w-full flex items-center justify-center lg:justify-end">

<div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-[#FFD93D] animate-bounce delay-100 hidden lg:block"></div>
<div className="absolute bottom-20 right-20 w-3 h-3 rounded-full bg-[#7DD3C0] animate-pulse hidden lg:block"></div>

<div className="relative w-full max-w-[500px] aspect-[4/5] rounded-[32px] overflow-hidden lg:mr-[-48px] transform lg:rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
<img alt="Delicious Strawberry Ice Cream Cone" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="flavors">
<div className="max-w-[1200px] mx-auto px-6 lg:px-8">

<div className="text-center max-w-2xl mx-auto mb-24">
<span className="text-[#FF6B9D] text-sm uppercase tracking-[0.2em] font-medium block mb-3">Our Flavors</span>
<h2 className="font-['Poppins'] font-semibold text-4xl lg:text-5xl text-[#2D3436] tracking-tight mb-4">Taste the Obsession</h2>
<p className="font-['Inter'] text-lg text-[#2D3436]/70 font-normal">Small batches. Big flavor. Always made from scratch.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">

<div className="group relative bg-gradient-to-b from-[#FFE5ED] to-[#FFF0F5] rounded-3xl p-6 pt-0 mt-12 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
<div className="relative -top-12 mx-auto w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-white">
<img alt="Strawberry Ice Cream" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<div className="absolute top-4 right-4 bg-[#FFD93D] text-[#2D3436] text-xs font-semibold px-3 py-1 rounded-full">Fan Favorite</div>
<h3 className="font-['Poppins'] font-semibold text-xl text-[#2D3436] mb-2 -mt-6">Strawberry Dreams</h3>
<p className="text-sm text-[#2D3436]/70 mb-4 h-10">Fresh strawberries swirled through vanilla bean cream</p>
<p className="font-['Poppins'] font-bold text-lg text-[#FF6B9D]">$5.50</p>
</div>

<div className="group relative bg-gradient-to-b from-[#F5E6D8] to-[#FFF8F2] rounded-3xl p-6 pt-0 mt-12 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
<div className="relative -top-12 mx-auto w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-white">
<img alt="Chocolate Ice Cream" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1579954115567-dff2eeb6fdeb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<h3 className="font-['Poppins'] font-semibold text-xl text-[#2D3436] mb-2 -mt-6">Midnight Chocolate</h3>
<p className="text-sm text-[#2D3436]/70 mb-4 h-10">Triple chocolate with fudge ribbons and cocoa nibs</p>
<p className="font-['Poppins'] font-bold text-lg text-[#FF6B9D]">$5.50</p>
</div>

<div className="group relative bg-gradient-to-b from-[#F3EEFF] to-[#FAF8FF] rounded-3xl p-6 pt-0 mt-12 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
<div className="relative -top-12 mx-auto w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-white">
<img alt="Lavender Ice Cream" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1557142046-c704a3adf364?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<div className="absolute top-4 right-4 bg-[#7DD3C0] text-white text-xs font-semibold px-3 py-1 rounded-full">New!</div>
<h3 className="font-['Poppins'] font-semibold text-xl text-[#2D3436] mb-2 -mt-6">Honey Lavender</h3>
<p className="text-sm text-[#2D3436]/70 mb-4 h-10">Local wildflower honey meets French lavender</p>
<p className="font-['Poppins'] font-bold text-lg text-[#FF6B9D]">$6.00</p>
</div>

<div className="group relative bg-gradient-to-b from-[#FFF4E5] to-[#FFFAF5] rounded-3xl p-6 pt-0 mt-12 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
<div className="relative -top-12 mx-auto w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-white">
<img alt="Mango Ice Cream" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560787313-5dff3307e257?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<div className="absolute top-4 right-4 bg-[#FFD93D] text-[#2D3436] text-xs font-semibold px-3 py-1 rounded-full">Seasonal</div>
<h3 className="font-['Poppins'] font-semibold text-xl text-[#2D3436] mb-2 -mt-6">Mango Tango</h3>
<p className="text-sm text-[#2D3436]/70 mb-4 h-10">Ripe Alphonso mangoes, a tropical escape in every bite</p>
<p className="font-['Poppins'] font-bold text-lg text-[#FF6B9D]">$6.00</p>
</div>
</div>

<div className="mt-16 text-center">
<a className="inline-flex items-center text-[#FF6B9D] font-semibold text-base group" href="#">
                    See All 24 Flavors 
                    <span className="iconify ml-2 transition-transform duration-200 group-hover:translate-x-1" data-icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#FFF9F0] overflow-hidden" id="story">
<div className="max-w-[1200px] mx-auto px-6 lg:px-8">
<div className="flex flex-col lg:flex-row gap-16 items-center">

<div className="w-full lg:w-[45%] relative">
<div className="rounded-3xl overflow-hidden shadow-md">
<img alt="Making Ice Cream" className="w-full h-[500px] object-cover" src="https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>

<div className="absolute -bottom-10 -right-6 lg:-right-10 w-36 h-36 lg:w-44 lg:h-44 rounded-full border-[8px] border-[#FFF9F0] shadow-xl overflow-hidden">
<img alt="Fresh Ingredients" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
</div>

<div className="w-full lg:w-[55%]">
<span className="text-[#7DD3C0] text-sm uppercase tracking-[0.2em] font-medium block mb-3">Our Story</span>
<h2 className="font-['Poppins'] font-semibold text-4xl lg:text-5xl text-[#2D3436] tracking-tight mb-6">From Our Kitchen to Your Cone</h2>
<div className="space-y-5">
<p className="font-['Inter'] text-lg text-[#2D3436] leading-[1.8] font-normal">
                            It started in a tiny kitchen with a hand-crank machine and a wild idea: what if ice cream actually tasted like the fruit on the label?
                        </p>
<p className="font-['Inter'] text-lg text-[#2D3436]/85 leading-[1.8] font-light">
                            Today, we still make every batch by hand using organic cream from local farms, real fruit picked at peak ripeness, and ingredients you can actually pronounce. No artificial colors. No mystery stabilizers. Just pure, honest deliciousness.
                        </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 mt-10">

<div className="flex items-start gap-4">
<div className="p-2 bg-white rounded-xl shadow-sm">
<span className="iconify text-[#7DD3C0]" data-height="24" data-icon="lucide:leaf" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="font-semibold text-[#2D3436] pt-2">100% Natural Ingredients</span>
</div>

<div className="flex items-start gap-4">
<div className="p-2 bg-white rounded-xl shadow-sm">
<span className="iconify text-[#FF6B9D]" data-height="24" data-icon="lucide:map-pin" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="font-semibold text-[#2D3436] pt-2">Locally Sourced</span>
</div>

<div className="flex items-start gap-4">
<div className="p-2 bg-white rounded-xl shadow-sm">
<span className="iconify text-[#C9B8FF]" data-height="24" data-icon="lucide:heart" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="font-semibold text-[#2D3436] pt-2">Small Batch Crafted</span>
</div>

<div className="flex items-start gap-4">
<div className="p-2 bg-white rounded-xl shadow-sm">
<span className="iconify text-[#FFD93D]" data-height="24" data-icon="lucide:sparkles" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="font-semibold text-[#2D3436] pt-2">Made Fresh Daily</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white py-12 border-t border-gray-100">
<div className="max-w-[1200px] mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<a className="flex items-center gap-2" href="#">
<span className="text-[#FF6B9D]">
<span className="iconify" data-height="24" data-icon="lucide:ice-cream-2" data-width="24" style={{strokeWidth: '1.5'}}></span>
</span>
<span className="font-['Poppins'] font-semibold text-lg tracking-tight text-[#2D3436]">Scoop &amp; Joy</span>
</a>
<p className="text-sm text-[#2D3436]/60 font-light">© 2023 Scoop &amp; Joy Ice Cream. Crafted with happiness.</p>
</div>
</footer>

    </>
  );
}
