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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="sticky top-0 z-50 bg-[#FCFBF8]/80 backdrop-blur-md border-b border-[#EBE5DC]/80">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-10 border-none">
<a className="tracking-tighter font-semibold text-2xl text-[#16120F] flex items-center gap-2" href="#">
<iconify-icon icon="solar:cup-hot-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
                    KREA.
                </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5E5147]">
<a className="hover:text-[#16120F] transition-colors" href="#">Shop Beans</a>
<a className="hover:text-[#16120F] transition-colors" href="#">Brew Guides</a>
<a className="hover:text-[#16120F] transition-colors" href="#">Our Story</a>
<a className="hover:text-[#16120F] transition-colors" href="#">Subscription</a>
</div>
</div>
<div className="flex items-center gap-5 text-[#5E5147]">
<button className="hover:text-[#16120F] transition-colors flex items-center justify-center">
<iconify-icon icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</button>
<button className="hover:text-[#16120F] transition-colors flex items-center justify-center">
<iconify-icon icon="solar:user-rounded-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</button>
<button className="hover:text-[#16120F] transition-colors flex items-center justify-center relative">
<iconify-icon icon="solar:cart-large-minimalistic-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="absolute -top-1.5 -right-1.5 bg-[#C4A47C] text-[#FCFBF8] text-xs font-semibold h-4 w-4 rounded-full flex items-center justify-center scale-90">2</span>
</button>
</div>
</div>
</nav>

<section className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 mb-24">
<div className="relative rounded-[2.5rem] overflow-hidden bg-[#16120F] flex flex-col md:flex-row items-center p-6 md:p-12 gap-10 shadow-xl shadow-[#16120F]/5 border border-[#3E332A]">
<div className="relative z-10 flex-1 px-4 md:px-8 text-[#FCFBF8] w-full py-8 md:py-0">
<div className="flex items-center gap-3 mb-6 text-[#C4A47C]">
<span className="h-px w-8 bg-[#C4A47C]/50"></span>
<span className="text-xs font-semibold tracking-widest uppercase">Specialty Roasters</span>
</div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
                    Freshly Roasted Beans Delivered to Your Door
                </h1>
<p className="text-base md:text-lg text-[#D4C8BC] mb-10 font-light max-w-md leading-relaxed">
                    Experience rich aromas and complex flavor profiles from ethically sourced single origins and curated blends.
                </p>
<button className="bg-[#C4A47C] text-[#FCFBF8] px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#B3936B] transition-colors inline-flex items-center gap-2 shadow-lg shadow-[#C4A47C]/20">
                    Explore Our Roasts
                    <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
<div className="relative w-full md:w-1/2 aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden flex-shrink-0 group">
<img alt="Pouring coffee" className="absolute inset-0 w-full h-full object-cover object-center opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#16120F]/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 bg-[#FCFBF8]/10 backdrop-blur-md border border-[#FCFBF8]/20 rounded-2xl p-4 flex items-center justify-between text-[#FCFBF8]">
<div>
<p className="text-xs font-medium text-[#D4C8BC] mb-0.5">Roast of the Week</p>
<p className="text-sm font-semibold tracking-tight">Kenya AA Top Gichathaini</p>
</div>
<div className="h-10 w-10 rounded-full bg-[#C4A47C] flex items-center justify-center text-xs font-semibold">
                        90+
                    </div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-12 mb-16">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#16120F] mb-2">Fresh Out of the Roaster</h2>
<p className="text-sm text-[#5E5147]">Discover our seasonal single origins and signature blends.</p>
</div>
<a className="text-sm font-medium text-[#C4A47C] hover:text-[#16120F] transition-colors flex items-center gap-1 group" href="#">
                View all coffees
                <iconify-icon className="transform group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

<div className="group cursor-pointer flex flex-col h-full bg-[#FCFBF8] rounded-2xl p-3 border border-[#EBE5DC]/80 hover:border-[#D4C8BC] transition-colors shadow-sm shadow-[#EBE5DC]/20">
<div className="relative bg-[#F5F2EB] rounded-xl aspect-[4/5] mb-5 overflow-hidden">
<div className="absolute top-3 left-3 z-10 bg-[#FCFBF8] text-[#16120F] text-xs font-medium px-2.5 py-1 rounded-full shadow-sm border border-[#EBE5DC]">
                        Single Origin
                    </div>
<img alt="Ethiopia Yirgacheffe" className="w-full h-full object-cover mix-blend-darken scale-100 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1610632380989-680fe06591e1?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 left-3 right-3 bg-[#16120F]/95 backdrop-blur text-[#FCFBF8] py-2.5 rounded-lg text-xs font-semibold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-1.5 hover:bg-[#C4A47C]">
<iconify-icon icon="solar:bag-3-linear" width="16"></iconify-icon>
                        Select Grind
                    </button>
</div>
<div className="flex flex-col flex-grow px-1 pb-1">
<div className="flex justify-between items-start gap-2 mb-1">
<h3 className="text-base font-medium text-[#16120F] tracking-tight">Ethiopia Yirgacheffe</h3>
<span className="text-sm font-semibold text-[#16120F]">$22</span>
</div>

<div className="flex items-center gap-1.5 mb-3 mt-1">
<span className="text-xs text-[#8A7D71] mr-1">Roast</span>
<div className="w-1.5 h-1.5 rounded-full bg-[#C4A47C]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#C4A47C]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#EBE5DC]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#EBE5DC]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#EBE5DC]"></div>
</div>
<div className="flex flex-wrap gap-1.5 mb-3 mt-auto">
<span className="text-xs bg-[#F5F2EB] text-[#5E5147] px-2 py-1 rounded-md border border-[#EBE5DC]/60">Floral</span>
<span className="text-xs bg-[#F5F2EB] text-[#5E5147] px-2 py-1 rounded-md border border-[#EBE5DC]/60">Jasmine</span>
<span className="text-xs bg-[#F5F2EB] text-[#5E5147] px-2 py-1 rounded-md border border-[#EBE5DC]/60">Lemon</span>
</div>
</div>
</div>

<div className="group cursor-pointer flex flex-col h-full bg-[#FCFBF8] rounded-2xl p-3 border border-[#EBE5DC]/80 hover:border-[#D4C8BC] transition-colors shadow-sm shadow-[#EBE5DC]/20">
<div className="relative bg-[#F5F2EB] rounded-xl aspect-[4/5] mb-5 overflow-hidden">
<div className="absolute top-3 left-3 z-10 bg-[#FCFBF8] text-[#16120F] text-xs font-medium px-2.5 py-1 rounded-full shadow-sm border border-[#EBE5DC]">
                        Single Origin
                    </div>
<img alt="Colombia Supremo" className="w-full h-full object-cover mix-blend-darken scale-100 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 left-3 right-3 bg-[#16120F]/95 backdrop-blur text-[#FCFBF8] py-2.5 rounded-lg text-xs font-semibold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-1.5 hover:bg-[#C4A47C]">
<iconify-icon icon="solar:bag-3-linear" width="16"></iconify-icon>
                        Select Grind
                    </button>
</div>
<div className="flex flex-col flex-grow px-1 pb-1">
<div className="flex justify-between items-start gap-2 mb-1">
<h3 className="text-base font-medium text-[#16120F] tracking-tight">Colombia Supremo</h3>
<span className="text-sm font-semibold text-[#16120F]">$19</span>
</div>

<div className="flex items-center gap-1.5 mb-3 mt-1">
<span className="text-xs text-[#8A7D71] mr-1">Roast</span>
<div className="w-1.5 h-1.5 rounded-full bg-[#C4A47C]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#C4A47C]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#C4A47C]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#EBE5DC]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#EBE5DC]"></div>
</div>
<div className="flex flex-wrap gap-1.5 mb-3 mt-auto">
<span className="text-xs bg-[#F5F2EB] text-[#5E5147] px-2 py-1 rounded-md border border-[#EBE5DC]/60">Caramel</span>
<span className="text-xs bg-[#F5F2EB] text-[#5E5147] px-2 py-1 rounded-md border border-[#EBE5DC]/60">Chocolate</span>
<span className="text-xs bg-[#F5F2EB] text-[#5E5147] px-2 py-1 rounded-md border border-[#EBE5DC]/60">Orange</span>
</div>
</div>
</div>

<div className="group cursor-pointer flex flex-col h-full bg-[#FCFBF8] rounded-2xl p-3 border border-[#EBE5DC]/80 hover:border-[#D4C8BC] transition-colors shadow-sm shadow-[#EBE5DC]/20">
<div className="relative bg-[#F5F2EB] rounded-xl aspect-[4/5] mb-5 overflow-hidden">
<div className="absolute top-3 left-3 z-10 bg-[#16120F] text-[#FCFBF8] text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">
                        Signature Blend
                    </div>
<img alt="House Blend Espresso" className="w-full h-full object-cover mix-blend-darken scale-100 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1587734195503-904fca47e0e9?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 left-3 right-3 bg-[#16120F]/95 backdrop-blur text-[#FCFBF8] py-2.5 rounded-lg text-xs font-semibold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-1.5 hover:bg-[#C4A47C]">
<iconify-icon icon="solar:bag-3-linear" width="16"></iconify-icon>
                        Select Grind
                    </button>
</div>
<div className="flex flex-col flex-grow px-1 pb-1">
<div className="flex justify-between items-start gap-2 mb-1">
<h3 className="text-base font-medium text-[#16120F] tracking-tight">House Blend Espresso</h3>
<span className="text-sm font-semibold text-[#16120F]">$20</span>
</div>

<div className="flex items-center gap-1.5 mb-3 mt-1">
<span className="text-xs text-[#8A7D71] mr-1">Roast</span>
<div className="w-1.5 h-1.5 rounded-full bg-[#16120F]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#16120F]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#16120F]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#16120F]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#EBE5DC]"></div>
</div>
<div className="flex flex-wrap gap-1.5 mb-3 mt-auto">
<span className="text-xs bg-[#F5F2EB] text-[#5E5147] px-2 py-1 rounded-md border border-[#EBE5DC]/60">Dark Cocoa</span>
<span className="text-xs bg-[#F5F2EB] text-[#5E5147] px-2 py-1 rounded-md border border-[#EBE5DC]/60">Nutty</span>
<span className="text-xs bg-[#F5F2EB] text-[#5E5147] px-2 py-1 rounded-md border border-[#EBE5DC]/60">Syrupy</span>
</div>
</div>
</div>

<div className="group cursor-pointer flex flex-col h-full bg-[#FCFBF8] rounded-2xl p-3 border border-[#EBE5DC]/80 hover:border-[#D4C8BC] transition-colors shadow-sm shadow-[#EBE5DC]/20">
<div className="relative bg-[#F5F2EB] rounded-xl aspect-[4/5] mb-5 overflow-hidden">
<div className="absolute top-3 left-3 z-10 bg-[#FCFBF8] text-[#16120F] text-xs font-medium px-2.5 py-1 rounded-full shadow-sm border border-[#EBE5DC]">
                        Decaf
                    </div>
<img alt="Decaf Swiss Water" className="w-full h-full object-cover mix-blend-darken scale-100 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 left-3 right-3 bg-[#16120F]/95 backdrop-blur text-[#FCFBF8] py-2.5 rounded-lg text-xs font-semibold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-1.5 hover:bg-[#C4A47C]">
<iconify-icon icon="solar:bag-3-linear" width="16"></iconify-icon>
                        Select Grind
                    </button>
</div>
<div className="flex flex-col flex-grow px-1 pb-1">
<div className="flex justify-between items-start gap-2 mb-1">
<h3 className="text-base font-medium text-[#16120F] tracking-tight">Decaf Swiss Water</h3>
<span className="text-sm font-semibold text-[#16120F]">$21</span>
</div>

<div className="flex items-center gap-1.5 mb-3 mt-1">
<span className="text-xs text-[#8A7D71] mr-1">Roast</span>
<div className="w-1.5 h-1.5 rounded-full bg-[#C4A47C]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#C4A47C]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#C4A47C]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#EBE5DC]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#EBE5DC]"></div>
</div>
<div className="flex flex-wrap gap-1.5 mb-3 mt-auto">
<span className="text-xs bg-[#F5F2EB] text-[#5E5147] px-2 py-1 rounded-md border border-[#EBE5DC]/60">Milk Chocolate</span>
<span className="text-xs bg-[#F5F2EB] text-[#5E5147] px-2 py-1 rounded-md border border-[#EBE5DC]/60">Graham Cracker</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-[#EBE5DC]/60 bg-[#FAFAF8] py-16 mb-24 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(#EBE5DC_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 divide-y md:divide-y-0 md:divide-x divide-[#EBE5DC] relative z-10">
<div className="flex flex-col items-center text-center pt-6 md:pt-0 first:pt-0">
<div className="h-14 w-14 rounded-full bg-[#F5F2EB] text-[#C4A47C] flex items-center justify-center mb-5 border border-[#EBE5DC]">
<iconify-icon icon="solar:flame-linear" style={{strokeWidth: '1.5'}} width="26"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-[#16120F] tracking-tight mb-2">Roasted to Order</h3>
<p className="text-sm text-[#5E5147] max-w-[250px] font-light">We roast in small batches daily to ensure your coffee arrives at peak freshness.</p>
</div>
<div className="flex flex-col items-center text-center pt-10 md:pt-0">
<div className="h-14 w-14 rounded-full bg-[#F5F2EB] text-[#C4A47C] flex items-center justify-center mb-5 border border-[#EBE5DC]">
<iconify-icon icon="solar:leaf-linear" style={{strokeWidth: '1.5'}} width="26"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-[#16120F] tracking-tight mb-2">Ethically Sourced</h3>
<p className="text-sm text-[#5E5147] max-w-[250px] font-light">Direct trade partnerships ensuring fair wages for farmers and sustainable practices.</p>
</div>
<div className="flex flex-col items-center text-center pt-10 md:pt-0">
<div className="h-14 w-14 rounded-full bg-[#F5F2EB] text-[#C4A47C] flex items-center justify-center mb-5 border border-[#EBE5DC]">
<iconify-icon icon="solar:box-linear" style={{strokeWidth: '1.5'}} width="26"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-[#16120F] tracking-tight mb-2">Fresh Delivery</h3>
<p className="text-sm text-[#5E5147] max-w-[250px] font-light">Whole bean or perfectly ground for your brew method, shipped within 24 hours.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-24">
<div className="grid md:grid-cols-2 gap-16 items-center">

<div className="relative aspect-square md:aspect-[3/4] rounded-t-[12rem] rounded-b-3xl overflow-hidden bg-[#EBE5DC] border-4 border-[#FCFBF8] shadow-xl shadow-[#16120F]/5">
<img alt="Coffee beans roasting" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>

<div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#F5F2EB] rounded-full border border-[#EBE5DC] flex items-center justify-center">
<iconify-icon className="text-[#C4A47C] animate-[spin_10s_linear_infinite]" icon="solar:star-fall-linear" width="32"></iconify-icon>
</div>
</div>
<div className="max-w-lg">
<div className="flex items-center gap-3 mb-6 text-[#C4A47C]">
<span className="h-px w-8 bg-[#C4A47C]/50"></span>
<span className="text-xs font-semibold tracking-widest uppercase">Our Craft</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#16120F] mb-6 leading-tight">
                    Pursuit of the Perfect Cup
                </h2>
<p className="text-sm md:text-base text-[#5E5147] mb-6 font-light leading-relaxed">
                    Our journey started with a simple passion for exceptional coffee. We believe that every bean tells a story—from the high-altitude farms where it's grown to the meticulous roasting process that unlocks its unique profile.
                </p>
<p className="text-sm md:text-base text-[#5E5147] mb-8 font-light leading-relaxed">
                    By roasting in small batches and focusing on the subtle nuances of each origin, we craft coffees that are both comforting and complex.
                </p>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-[#16120F] pb-1 border-b border-[#16120F] hover:text-[#C4A47C] hover:border-[#C4A47C] transition-colors group" href="#">
                    Read Our Story
                    <iconify-icon className="transform group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="bg-[#F5F2EB] py-20 mb-24 border-y border-[#EBE5DC]">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#16120F] text-center mb-12">Loved by Coffee Enthusiasts</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#FCFBF8] p-8 rounded-2xl shadow-sm shadow-[#EBE5DC]/50 border border-[#EBE5DC]/50 relative">
<iconify-icon className="absolute top-6 right-6 text-[#EBE5DC]/60" icon="solar:quote-right-bold" width="32"></iconify-icon>
<div className="flex items-center gap-1 mb-4 text-[#C4A47C]">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-sm text-[#2C241E] mb-6 leading-relaxed relative z-10">"The Yirgacheffe pour-over is absolutely incredible. So smooth and the floral notes are so distinct. Best specialty beans I've had at home, hands down."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#16120F] flex items-center justify-center text-[#FCFBF8] text-xs font-semibold">SJ</div>
<div>
<p className="text-xs font-semibold text-[#16120F]">Sarah Jenkins</p>
<p className="text-xs text-[#8A7D71] font-light">Verified Buyer</p>
</div>
</div>
</div>

<div className="bg-[#FCFBF8] p-8 rounded-2xl shadow-sm shadow-[#EBE5DC]/50 border border-[#EBE5DC]/50 relative md:translate-y-4">
<iconify-icon className="absolute top-6 right-6 text-[#EBE5DC]/60" icon="solar:quote-right-bold" width="32"></iconify-icon>
<div className="flex items-center gap-1 mb-4 text-[#C4A47C]">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-sm text-[#2C241E] mb-6 leading-relaxed relative z-10">"I subscribed a month ago and it's been a game changer. The beans arrive practically still warm from the roaster. The bloom on these is amazing."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#C4A47C] flex items-center justify-center text-[#FCFBF8] text-xs font-semibold">MC</div>
<div>
<p className="text-xs font-semibold text-[#16120F]">Michael Chen</p>
<p className="text-xs text-[#8A7D71] font-light">Subscriber</p>
</div>
</div>
</div>

<div className="bg-[#FCFBF8] p-8 rounded-2xl shadow-sm shadow-[#EBE5DC]/50 border border-[#EBE5DC]/50 relative">
<iconify-icon className="absolute top-6 right-6 text-[#EBE5DC]/60" icon="solar:quote-right-bold" width="32"></iconify-icon>
<div className="flex items-center gap-1 mb-4 text-[#C4A47C]">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-sm text-[#2C241E] mb-6 leading-relaxed relative z-10">"The House Blend dialed in perfectly for my espresso machine. Rich crema, chocolatey finish, and not overly bitter. Dialing in was a breeze."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#16120F] flex items-center justify-center text-[#FCFBF8] text-xs font-semibold">ER</div>
<div>
<p className="text-xs font-semibold text-[#16120F]">Emily R.</p>
<p className="text-xs text-[#8A7D71] font-light">Verified Buyer</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 mb-24">
<div className="bg-[#16120F] rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden border border-[#3E332A] shadow-2xl shadow-[#16120F]/10">

<div className="absolute -top-32 -right-32 w-80 h-80 bg-[#C4A47C] rounded-full blur-[100px] opacity-20"></div>
<div className="relative z-10 max-w-md">
<div className="flex items-center gap-2 mb-4 text-[#C4A47C]">
<iconify-icon icon="solar:box-minimalistic-linear" width="20"></iconify-icon>
<span className="text-xs font-semibold tracking-widest uppercase">The Coffee Club</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#FCFBF8] mb-5">Never Run Out of Good Coffee</h2>
<p className="text-sm text-[#D4C8BC] mb-8 font-light leading-relaxed">
                    Join our Roaster's Choice subscription. Get fresh beans delivered on your schedule, discover exciting new single origins, and save 15% on every order.
                </p>
<button className="bg-[#C4A47C] text-[#FCFBF8] px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#B3936B] transition-colors w-full sm:w-auto text-center shadow-lg shadow-[#C4A47C]/20">
                    Subscribe &amp; Save
                </button>
</div>
<div className="relative z-10 w-full max-w-xs aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-[#2C241E]">
<img alt="Coffee subscription box" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<footer className="bg-[#FAFAF8] border-t border-[#EBE5DC] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="md:col-span-2">
<a className="tracking-tighter font-semibold text-2xl text-[#16120F] mb-4 flex items-center gap-2" href="#">
<iconify-icon icon="solar:cup-hot-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
                        KREA.
                    </a>
<p className="text-sm text-[#5E5147] mb-8 max-w-sm font-light">Join our newsletter for brewing tips, new roast announcements, and exclusive subscriber offers.</p>
<form className="flex w-full max-w-md relative">
<input className="w-full bg-[#FCFBF8] border border-[#EBE5DC] text-[#2C241E] text-sm rounded-full py-3.5 px-6 pr-14 focus:outline-none focus:border-[#C4A47C] focus:ring-1 focus:ring-[#C4A47C] transition-all placeholder:text-[#8A7D71]" placeholder="Your email address" type="email"/>
<button className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#16120F] text-[#FCFBF8] rounded-full w-10 flex items-center justify-center hover:bg-[#C4A47C] transition-colors" type="submit">
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</form>
</div>

<div>
<h4 className="text-xs font-semibold text-[#16120F] tracking-wider uppercase mb-6">Shop</h4>
<ul className="space-y-4 text-sm text-[#5E5147]">
<li><a className="hover:text-[#C4A47C] transition-colors" href="#">All Coffee</a></li>
<li><a className="hover:text-[#C4A47C] transition-colors" href="#">Single Origin</a></li>
<li><a className="hover:text-[#C4A47C] transition-colors" href="#">Blends &amp; Espresso</a></li>
<li><a className="hover:text-[#C4A47C] transition-colors" href="#">Brewing Gear</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-[#16120F] tracking-wider uppercase mb-6">Learn</h4>
<ul className="space-y-4 text-sm text-[#5E5147]">
<li><a className="hover:text-[#C4A47C] transition-colors" href="#">Brew Guides</a></li>
<li><a className="hover:text-[#C4A47C] transition-colors" href="#">Our Sourcing</a></li>
<li><a className="hover:text-[#C4A47C] transition-colors" href="#">Wholesale</a></li>
<li><a className="hover:text-[#C4A47C] transition-colors" href="#">FAQ</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#EBE5DC] gap-4">
<p className="text-xs text-[#8A7D71] font-light">© 2023 Krea Coffee Roasters. All rights reserved.</p>
<div className="flex items-center gap-5 text-[#8A7D71]">
<a className="hover:text-[#16120F] transition-colors" href="#">
<iconify-icon icon="solar:gallery-bold-duotone" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
<a className="hover:text-[#16120F] transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
<a className="hover:text-[#16120F] transition-colors" href="#">
<iconify-icon icon="solar:video-library-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
