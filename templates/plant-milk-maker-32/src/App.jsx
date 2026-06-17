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
      

<div className="paper-texture"></div>

<div className="watercolor-blob bg-[#f5e6d3] w-96 h-96 rounded-full top-[-10%] left-[-10%]"></div>
<div className="watercolor-blob bg-[#eceae4] w-[30rem] h-[30rem] rounded-full bottom-[10%] right-[-5%]"></div>
<div className="watercolor-blob bg-[#fdf1e6] w-80 h-80 rounded-full top-[20%] right-[20%]"></div>

<nav className="fixed w-full z-40 top-0 transition-all duration-300 backdrop-blur-[2px] bg-[#fdfcf8]/80 border-b border-[#eaddcf]/30">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

<button className="lg:hidden text-[#2c2a26]">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>

<a className="text-2xl tracking-tighter font-serif text-[#2c2a26] z-50" href="#">
                plantmade.
            </a>

<div className="hidden lg:flex items-center space-x-10 text-sm tracking-wide font-medium text-[#5a5650]">
<a className="hover:text-[#2c2a26] transition-colors" href="#">Product</a>
<a className="hover:text-[#2c2a26] transition-colors" href="#">Recipes</a>
<a className="hover:text-[#2c2a26] transition-colors" href="#">How it Works</a>
<a className="hover:text-[#2c2a26] transition-colors" href="#">FAQ</a>
</div>

<div className="flex items-center space-x-6 text-[#2c2a26]">
<button className="hover:opacity-70 transition-opacity">
<span className="iconify" data-height="20" data-icon="lucide:search" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="hover:opacity-70 transition-opacity relative">
<span className="iconify" data-height="20" data-icon="lucide:shopping-bag" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="absolute -top-1 -right-1 bg-[#d4c5b0] text-[10px] w-4 h-4 rounded-full flex items-center justify-center text-white">0</span>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
<div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="flex flex-col items-start z-10 space-y-8 order-2 lg:order-1 pt-10 lg:pt-0">
<div className="space-y-4">
<span className="text-xs uppercase tracking-[0.2em] text-[#8c857b] font-medium">The New Standard</span>
<h1 className="text-5xl lg:text-7xl font-serif text-[#2c2a26] leading-[1.1] tracking-tight">
                        Fresh plant milk <br/>
<span className="italic text-[#9c9488]">in minutes.</span>
</h1>
<p className="text-lg text-[#5a5650] max-w-md leading-relaxed font-light mt-4">
                        Say goodbye to carton waste and additives. Create creamy, barista-quality milk at home with just one button.
                    </p>
</div>
<div className="flex flex-wrap items-center gap-5 w-full">
<button className="bg-[#2c2a26] text-[#fdfcf8] px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-[#4a4641] transition-all duration-300 shadow-xl shadow-[#2c2a26]/10 flex items-center gap-2">
                        Shop Now 
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="group flex items-center gap-3 px-6 py-4 text-[#2c2a26] text-sm font-medium hover:opacity-70 transition-all">
<div className="w-10 h-10 rounded-full border border-[#d4c5b0] flex items-center justify-center group-hover:bg-[#f5ebe0] transition-colors">
<span className="ml-1" data-icon="lucide:play" data-width="14"></span>
</div>
                        Watch the Film
                    </button>
</div>
<div className="pt-4 flex items-center gap-4 text-xs text-[#8c857b]">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
<img alt="User" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
<img alt="User" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden flex items-center justify-center text-[10px] text-gray-500 font-medium">
                            +2k
                        </div>
</div>
<span>Loved by happy makers worldwide.</span>
</div>
</div>

<div className="relative order-1 lg:order-2 flex justify-end">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#f8efe4] to-transparent rounded-full blur-2xl -z-10 opacity-60"></div>
<div className="relative z-10 w-full max-w-[500px]">

<div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-[#cbbda9]/30 relative bg-white">

<img alt="Plant Milk Maker in modern kitchen" className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 bg-[#fdfcf8]/90 backdrop-blur-md px-4 py-3 rounded-xl border border-white/50 shadow-sm">
<p className="font-serif text-lg leading-none text-[#2c2a26]">Ready in 3m</p>
<p className="text-[10px] text-[#8c857b] mt-1 uppercase tracking-wider">Auto-clean function</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-[#eaddcf]/40 bg-[#faf8f5]">
<div className="max-w-7xl mx-auto px-6 py-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-[#eaddcf]/30">
<div className="flex flex-col md:flex-row items-center justify-center gap-3 px-2">
<span className="iconify text-[#cbbda9]" data-icon="lucide:truck" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs font-medium uppercase tracking-wide text-[#5a5650]">Free Delivery</span>
</div>
<div className="flex flex-col md:flex-row items-center justify-center gap-3 px-2">
<span className="iconify text-[#cbbda9]" data-icon="lucide:banknote" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs font-medium uppercase tracking-wide text-[#5a5650]">COD Available</span>
</div>
<div className="flex flex-col md:flex-row items-center justify-center gap-3 px-2">
<span className="iconify text-[#cbbda9]" data-icon="lucide:refresh-cw" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs font-medium uppercase tracking-wide text-[#5a5650]">7-Day Exchange</span>
</div>
<div className="flex flex-col md:flex-row items-center justify-center gap-3 px-2">
<span className="iconify text-[#cbbda9]" data-icon="lucide:shield-check" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs font-medium uppercase tracking-wide text-[#5a5650]">1-Year Warranty</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="max-w-7xl mx-auto text-center">
<h2 className="text-3xl md:text-5xl font-serif text-[#2c2a26] mb-4 tracking-tight">One machine.<br/>Endless possibilities.</h2>
<p className="text-[#5a5650] max-w-lg mx-auto mb-16 font-light">
                Designed to simplify your kitchen routine. From almond milk to oat lattes, discover the 8-in-1 versatility.
            </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">

<div className="group bg-white border border-[#eaddcf]/40 p-6 rounded-2xl hover:shadow-lg hover:shadow-[#eaddcf]/20 transition-all duration-300">
<div className="w-10 h-10 mx-auto bg-[#faf8f5] rounded-full flex items-center justify-center text-[#2c2a26] mb-4 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:droplet" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-serif text-lg text-[#2c2a26]">Plant Milks</h3>
<p className="text-xs text-[#8c857b] mt-1">Almond, Oat, Soy &amp; more</p>
</div>

<div className="group bg-white border border-[#eaddcf]/40 p-6 rounded-2xl hover:shadow-lg hover:shadow-[#eaddcf]/20 transition-all duration-300">
<div className="w-10 h-10 mx-auto bg-[#faf8f5] rounded-full flex items-center justify-center text-[#2c2a26] mb-4 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:coffee" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-serif text-lg text-[#2c2a26]">Creamers</h3>
<p className="text-xs text-[#8c857b] mt-1">Rich &amp; frothy texture</p>
</div>

<div className="group bg-white border border-[#eaddcf]/40 p-6 rounded-2xl hover:shadow-lg hover:shadow-[#eaddcf]/20 transition-all duration-300">
<div className="w-10 h-10 mx-auto bg-[#faf8f5] rounded-full flex items-center justify-center text-[#2c2a26] mb-4 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:utensils" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-serif text-lg text-[#2c2a26]">Soups</h3>
<p className="text-xs text-[#8c857b] mt-1">Warm blends in minutes</p>
</div>

<div className="group bg-white border border-[#eaddcf]/40 p-6 rounded-2xl hover:shadow-lg hover:shadow-[#eaddcf]/20 transition-all duration-300">
<div className="w-10 h-10 mx-auto bg-[#faf8f5] rounded-full flex items-center justify-center text-[#2c2a26] mb-4 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:citrus" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-serif text-lg text-[#2c2a26]">Juices</h3>
<p className="text-xs text-[#8c857b] mt-1">Fresh cold-pressed feel</p>
</div>

<div className="group bg-white border border-[#eaddcf]/40 p-6 rounded-2xl hover:shadow-lg hover:shadow-[#eaddcf]/20 transition-all duration-300">
<div className="w-10 h-10 mx-auto bg-[#faf8f5] rounded-full flex items-center justify-center text-[#2c2a26] mb-4 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:waves" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-serif text-lg text-[#2c2a26]">Smoothies</h3>
<p className="text-xs text-[#8c857b] mt-1">Blend fruits effortlessly</p>
</div>

<div className="group bg-white border border-[#eaddcf]/40 p-6 rounded-2xl hover:shadow-lg hover:shadow-[#eaddcf]/20 transition-all duration-300">
<div className="w-10 h-10 mx-auto bg-[#faf8f5] rounded-full flex items-center justify-center text-[#2c2a26] mb-4 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:thermometer" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-serif text-lg text-[#2c2a26]">Boil Water</h3>
<p className="text-xs text-[#8c857b] mt-1">Instant hot water</p>
</div>

<div className="group bg-white border border-[#eaddcf]/40 p-6 rounded-2xl hover:shadow-lg hover:shadow-[#eaddcf]/20 transition-all duration-300">
<div className="w-10 h-10 mx-auto bg-[#faf8f5] rounded-full flex items-center justify-center text-[#2c2a26] mb-4 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:sparkles" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-serif text-lg text-[#2c2a26]">Self Clean</h3>
<p className="text-xs text-[#8c857b] mt-1">Hassle-free maintenance</p>
</div>

<div className="group bg-white border border-[#eaddcf]/40 p-6 rounded-2xl hover:shadow-lg hover:shadow-[#eaddcf]/20 transition-all duration-300">
<div className="w-10 h-10 mx-auto bg-[#faf8f5] rounded-full flex items-center justify-center text-[#2c2a26] mb-4 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:clock" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-serif text-lg text-[#2c2a26]">Filter</h3>
<p className="text-xs text-[#8c857b] mt-1">Integrated mesh filter</p>
</div>
</div>
<div className="mt-12">
<button className="text-[#2c2a26] border-b border-[#2c2a26] pb-0.5 text-sm font-medium hover:text-[#5a5650] hover:border-[#5a5650] transition-colors">
                    View Full Specifications
                </button>
</div>
</div>
</section>

    </>
  );
}
