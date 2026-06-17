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
      

<header className="max-w-[1200px] mx-auto px-6 py-6 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-[#27504E]/5">
<div className="flex flex-col">
<a className="text-xl font-medium tracking-tighter uppercase leading-none text-[#27504E]" href="#">LIBERIO</a>
</div>
<nav className="hidden md:flex items-center space-x-8 text-sm font-normal text-[#27504E]/60">
<a className="hover:text-[#27504E] transition-colors" href="#">Home</a>
<a className="hover:text-[#27504E] transition-colors" href="#">Shop</a>
<a className="hover:text-[#27504E] transition-colors" href="#">About</a>
<a className="hover:text-[#27504E] transition-colors" href="#">Blog</a>
</nav>
<div className="flex items-center space-x-5 text-[#27504E]/60">
<a className="hover:text-[#27504E] transition-colors" href="#"><iconify-icon height="22" icon="solar:cart-large-minimalistic-linear" width="22"></iconify-icon></a>
<a className="hover:text-[#27504E] transition-colors" href="#"><iconify-icon height="22" icon="solar:heart-linear" width="22"></iconify-icon></a>
</div>
</header>

<section className="max-w-[1200px] mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-16 items-center">
<div className="max-w-xl">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-[1px] bg-[#27504E]/20"></div>
<span className="text-[#27504E]/50 text-sm font-medium tracking-wide uppercase">Online Store</span>
</div>
<h1 className="text-5xl lg:text-7xl leading-[1.1] font-normal tracking-tighter text-[#27504E] mb-6">
                Handmade<br/>furniture store
            </h1>
<p className="text-[#27504E]/60 text-base mb-10 leading-relaxed max-w-sm font-normal">
                Three seven, inc - is a contemporary interior design studio. We have over 20 years of experience in consulting and implementing interior furniture projects.
            </p>
<div className="flex flex-wrap items-center gap-3">
<a className="bg-[#27504E] px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#27504E]/90 transition-all text-white shadow-[0_4px_14px_0_rgba(39,80,78,0.39)] hover:shadow-[0_6px_20px_rgba(39,80,78,0.23)] hover:-translate-y-0.5" href="#">Shop now</a>
<a className="border border-[#27504E]/10 text-[#27504E] px-8 py-3.5 rounded-full text-sm font-medium transition-all hover:bg-[#27504E]/5 hover:border-[#27504E]/20" href="#">Explore</a>
</div>
</div>
<div className="relative w-full aspect-[4/3] max-w-[600px] mx-auto lg:ml-auto">
<div className="absolute inset-0 bg-gradient-to-tr from-[#27504E]/5 to-transparent rounded-[2rem] -m-4 sm:-m-6 z-0"></div>
<img alt="Mint Green Armchair" className="relative z-10 w-full h-full object-cover rounded-[1.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5" src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</section>

<section className="border-y border-[#27504E]/5 py-12 mt-4 bg-gradient-to-b from-white to-[#27504E]/[0.02]">
<div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="flex items-start gap-4 group">
<div className="p-3 bg-white rounded-2xl shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-[#27504E]/5 group-hover:border-[#D8AFB1]/40 transition-colors">
<iconify-icon className="text-[#D8AFB1]" height="28" icon="solar:global-linear" width="28"></iconify-icon>
</div>
<div className="pt-1">
<h3 className="text-base font-medium tracking-tight text-[#27504E] mb-1">World Shipping</h3>
<p className="text-sm text-[#27504E]/50 font-normal">Contemporary interior</p>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="p-3 bg-white rounded-2xl shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-[#27504E]/5 group-hover:border-[#D8AFB1]/40 transition-colors">
<iconify-icon className="text-[#D8AFB1]" height="28" icon="solar:card-linear" width="28"></iconify-icon>
</div>
<div className="pt-1">
<h3 className="text-base font-medium tracking-tight text-[#27504E] mb-1">Easy Payment</h3>
<p className="text-sm text-[#27504E]/50 font-normal">Contemporary interior</p>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="p-3 bg-white rounded-2xl shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-[#27504E]/5 group-hover:border-[#D8AFB1]/40 transition-colors">
<iconify-icon className="text-[#D8AFB1]" height="28" icon="solar:shield-check-linear" width="28"></iconify-icon>
</div>
<div className="pt-1">
<h3 className="text-base font-medium tracking-tight text-[#27504E] mb-1">Guaranteed</h3>
<p className="text-sm text-[#27504E]/50 font-normal">Contemporary interior</p>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="p-3 bg-white rounded-2xl shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-[#27504E]/5 group-hover:border-[#D8AFB1]/40 transition-colors">
<iconify-icon className="text-[#D8AFB1]" height="28" icon="solar:headphones-linear" width="28"></iconify-icon>
</div>
<div className="pt-1">
<h3 className="text-base font-medium tracking-tight text-[#27504E] mb-1">Support 24/7</h3>
<p className="text-sm text-[#27504E]/50 font-normal">Contemporary interior</p>
</div>
</div>
</div>
</section>

<section className="max-w-[1200px] mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="bg-[#FAFAFA] border border-[#27504E]/5 p-10 rounded-[1.5rem] relative overflow-hidden group h-[400px] lg:h-auto flex flex-col justify-between shadow-[0_4px_20px_rgb(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.03)] transition-all">
<div className="relative z-10 max-w-sm">
<h2 className="text-3xl font-medium tracking-tight text-[#27504E] mb-2">Super Armchairs</h2>
<p className="text-sm text-[#27504E]/60 font-normal mb-6">Starting from $300.00</p>
<a className="text-[#27504E]/60 text-sm font-medium hover:text-[#27504E] flex items-center gap-2 transition-colors w-max group-hover:translate-x-1 duration-300" href="#">
                    Shop now <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<img alt="Armchair" className="absolute bottom-0 right-0 w-2/3 h-auto object-cover rounded-tl-[1.5rem] transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>

<div className="grid grid-rows-2 gap-6 h-[400px] lg:h-auto">
<div className="bg-[#FAFAFA] border border-[#27504E]/5 p-8 rounded-[1.5rem] relative overflow-hidden group flex items-center shadow-[0_4px_20px_rgb(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.03)] transition-all">
<div className="relative z-10 max-w-[200px]">
<h2 className="text-xl font-medium tracking-tight text-[#27504E] mb-1">Family Sofas</h2>
<p className="text-sm text-[#27504E]/60 font-normal mb-4">Starting from $300.00</p>
<a className="text-[#27504E]/60 text-sm font-medium hover:text-[#27504E] flex items-center gap-2 transition-colors w-max group-hover:translate-x-1 duration-300" href="#">
                        Shop now <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<img alt="Sofa" className="absolute bottom-0 right-0 w-1/2 h-full object-cover object-left transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="bg-[#FAFAFA] border border-[#27504E]/5 p-8 rounded-[1.5rem] relative overflow-hidden group flex items-center shadow-[0_4px_20px_rgb(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.03)] transition-all">
<div className="relative z-10 max-w-[200px]">
<h2 className="text-xl font-medium tracking-tight text-[#27504E] mb-1">Modern Style</h2>
<p className="text-sm text-[#27504E]/60 font-normal mb-4">Starting from $300.00</p>
<a className="text-[#27504E]/60 text-sm font-medium hover:text-[#27504E] flex items-center gap-2 transition-colors w-max group-hover:translate-x-1 duration-300" href="#">
                        Shop now <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<img alt="Modern Chair" className="absolute bottom-0 right-0 w-1/2 h-full object-cover object-left transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</section>

<section className="max-w-[1200px] mx-auto px-6 py-16 text-center">
<h2 className="text-3xl font-medium tracking-tight text-[#27504E] mb-3">Best Sellers</h2>
<p className="text-[#27504E]/50 text-base max-w-xl mx-auto mb-12 font-normal">
            Contemporary interior design studio projects along with the supply of furniture of the highest level.
        </p>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">

<div className="group cursor-pointer">
<div className="bg-white border border-[#27504E]/5 aspect-[4/5] rounded-2xl mb-4 flex items-center justify-center p-8 relative overflow-hidden transition-all group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:border-[#27504E]/10">
<img alt="Modern Chair" className="w-full h-full object-contain mix-blend-multiply transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="flex justify-between items-start mb-1 px-1">
<h3 className="text-base font-medium tracking-tight text-[#27504E]">Modern Chair</h3>
<span className="text-[#27504E]/40 text-sm font-normal">AP0867</span>
</div>
<p className="text-[#27504E]/70 font-medium text-sm px-1">$110.00</p>
</div>

<div className="group cursor-pointer">
<div className="bg-white border border-[#27504E]/5 aspect-[4/5] rounded-2xl mb-4 flex items-center justify-center p-8 relative overflow-hidden transition-all group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:border-[#27504E]/10">
<span className="absolute top-4 left-4 text-[#27504E] text-xs px-2.5 py-1 rounded-full font-medium shadow-sm bg-white border border-[#27504E]/5">10% OFF</span>
<img alt="Modern Table" className="w-full h-full object-contain mix-blend-multiply transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="flex justify-between items-start mb-1 px-1">
<h3 className="text-base font-medium tracking-tight text-[#27504E]">Modern Table</h3>
<span className="text-[#27504E]/40 text-sm font-normal">AP0867</span>
</div>
<p className="text-[#27504E]/70 font-medium text-sm px-1">$110.00</p>
</div>

<div className="group cursor-pointer">
<div className="bg-white border border-[#27504E]/5 aspect-[4/5] rounded-2xl mb-4 flex items-center justify-center p-8 relative overflow-hidden transition-all group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:border-[#27504E]/10">
<img alt="Modern Chair" className="w-full h-full object-contain mix-blend-multiply transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="flex justify-between items-start mb-1 px-1">
<h3 className="text-base font-medium tracking-tight text-[#27504E]">Modern Chair</h3>
<span className="text-[#27504E]/40 text-sm font-normal">AP0867</span>
</div>
<p className="text-[#27504E]/70 font-medium text-sm px-1">$110.00</p>
</div>

<div className="group cursor-pointer">
<div className="bg-white border border-[#27504E]/5 aspect-[4/5] rounded-2xl mb-4 flex items-center justify-center p-8 relative overflow-hidden transition-all group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:border-[#27504E]/10">
<span className="absolute top-4 left-4 bg-[#D8AFB1]/20 text-[#502729] border border-[#D8AFB1]/30 text-xs px-2.5 py-1 rounded-full font-medium shadow-sm">SALE</span>
<img alt="Barstool" className="w-full h-full object-contain mix-blend-multiply transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="flex justify-between items-start mb-1 px-1">
<h3 className="text-base font-medium tracking-tight text-[#27504E]">Barstool</h3>
<span className="text-[#27504E]/40 text-sm font-normal">AP0867</span>
</div>
<p className="text-[#27504E]/70 font-medium text-sm px-1">$110.00</p>
</div>
</div>
</section>

<section className="max-w-[1200px] mx-auto px-6 py-20 text-center bg-white border border-[#27504E]/5 shadow-[0_8px_30px_rgb(0,0,0,0.02)] rounded-[2rem] my-10 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(#27504E_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]"></div>
<div className="relative z-10">
<h2 className="text-4xl font-normal tracking-tight text-[#27504E] mb-3">Products by category</h2>
<p className="text-[#27504E]/50 text-base max-w-xl mx-auto mb-10 font-normal">
                Contemporary interior design studio projects along with the supply.
            </p>

<div className="flex flex-wrap justify-center gap-3 mb-12">
<button className="bg-[#27504E] px-6 py-2 rounded-full text-sm font-medium min-w-[100px] text-white shadow-md transition-all">Chair</button>
<button className="border border-[#27504E]/10 bg-white text-[#27504E]/70 px-6 py-2 rounded-full text-sm font-medium transition-all min-w-[100px] hover:border-[#27504E]/30 hover:text-[#27504E] shadow-sm">Sofa</button>
<button className="border border-[#27504E]/10 bg-white text-[#27504E]/70 px-6 py-2 rounded-full text-sm font-medium transition-all min-w-[100px] hover:border-[#27504E]/30 hover:text-[#27504E] shadow-sm">Table</button>
<button className="border border-[#27504E]/10 bg-white text-[#27504E]/70 px-6 py-2 rounded-full text-sm font-medium transition-all min-w-[100px] hover:border-[#27504E]/30 hover:text-[#27504E] shadow-sm">Light</button>
<button className="border border-[#27504E]/10 bg-white text-[#27504E]/70 px-6 py-2 rounded-full text-sm font-medium transition-all min-w-[100px] hover:border-[#27504E]/30 hover:text-[#27504E] shadow-sm">Mirror</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">

<div className="p-5 rounded-[1.5rem] group cursor-pointer bg-white border border-[#27504E]/5 hover:border-[#27504E]/10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all">
<div className="flex justify-between items-start mb-4">
<span className="bg-[#27504E]/5 text-[#27504E] text-xs px-3 py-1 rounded-full font-medium tracking-wide">NEW</span>
<div className="flex gap-1">
<div className="w-3 h-3 rounded-full bg-[#D8AFB1] shadow-inner"></div>
<div className="w-3 h-3 rounded-full bg-[#336666] shadow-inner"></div>
<div className="w-3 h-3 rounded-full bg-[#502729] shadow-inner"></div>
</div>
</div>
<div className="h-48 flex items-center justify-center mb-6">
<img alt="Chair" className="max-h-full object-contain transform group-hover:-translate-y-1 transition-transform duration-500" src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="flex justify-between items-end px-1">
<div>
<h3 className="text-base font-medium tracking-tight text-[#27504E] mb-0.5">Sweet Tender Arm</h3>
<p className="text-xs text-[#27504E]/40 font-normal">Contemporary design</p>
</div>
<p className="text-[#27504E]/80 font-medium text-sm">$199.00</p>
</div>
</div>

<div className="rounded-[1.5rem] shadow-[0_20px_40px_-15px_rgba(39,80,78,0.1)] hover:shadow-[0_25px_50px_-12px_rgba(39,80,78,0.15)] transition-all overflow-hidden group cursor-pointer transform lg:-translate-y-2 bg-white ring-1 ring-[#27504E]/10 relative z-10 flex flex-col">
<div className="bg-[#FAFAFA] p-5 relative border-b border-[#27504E]/5 flex-grow">
<div className="flex justify-between items-start absolute w-full left-0 top-5 px-5">
<div></div>
<div className="flex gap-1">
<div className="w-3 h-3 rounded-full bg-[#27504E] shadow-inner"></div>
<div className="w-3 h-3 rounded-full bg-white border border-gray-200"></div>
</div>
</div>
<div className="h-48 flex items-center justify-center mt-2">
<img alt="Chair" className="max-h-full object-contain drop-shadow-xl transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
</div>
<div className="p-6 text-center relative z-10 bg-white">
<h3 className="text-xl font-medium tracking-tight text-[#27504E] mb-1">Pink Room Charm</h3>
<p className="text-[#27504E]/80 font-medium text-base mb-3">$220.00</p>
<p className="text-xs text-[#27504E]/50 mb-6 font-normal leading-relaxed">Contemporary interior design studio interior furniture projects along with the supply</p>
<div className="flex justify-center items-center gap-3">
<button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#27504E]/10 text-[#27504E]/60 hover:text-[#27504E] hover:border-[#27504E]/30 hover:bg-[#27504E]/5 transition-all"><iconify-icon height="18" icon="solar:heart-linear" width="18"></iconify-icon></button>
<button className="bg-[#27504E] flex-grow py-2.5 rounded-full text-sm font-medium hover:bg-[#27504E]/90 transition-all text-white shadow-md">Shop now</button>
<button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#27504E]/10 text-[#27504E]/60 hover:text-[#27504E] hover:border-[#27504E]/30 hover:bg-[#27504E]/5 transition-all"><iconify-icon height="18" icon="solar:cart-large-minimalistic-linear" width="18"></iconify-icon></button>
</div>
</div>
</div>

<div className="p-5 rounded-[1.5rem] group cursor-pointer bg-white border border-[#27504E]/5 hover:border-[#27504E]/10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all">
<div className="flex justify-between items-start mb-4">
<span className="bg-[#D8AFB1]/10 text-[#502729] text-xs px-3 py-1 rounded-full font-medium tracking-wide border border-[#D8AFB1]/20">SALE</span>
<div className="flex gap-1">
<div className="w-3 h-3 rounded-full bg-gray-200 shadow-inner"></div>
<div className="w-3 h-3 rounded-full bg-[#27504E] shadow-inner"></div>
</div>
</div>
<div className="h-48 flex items-center justify-center mb-6">
<img alt="Chair" className="max-h-full object-contain transform group-hover:-translate-y-1 transition-transform duration-500" src="https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="flex justify-between items-end px-1">
<div>
<h3 className="text-base font-medium tracking-tight text-[#27504E] mb-0.5">Classic Barstool</h3>
<p className="text-xs text-[#27504E]/40 font-normal">Contemporary design</p>
</div>
<p className="text-[#27504E]/80 font-medium text-sm">$199.00</p>
</div>
</div>
</div>
<div className="mt-12">
<button className="border border-[#27504E]/10 bg-white text-[#27504E]/80 px-8 py-3 rounded-full text-sm font-medium shadow-sm hover:border-[#27504E]/30 hover:bg-[#27504E]/5 transition-all">Load more</button>
</div>
</div>
</section>

<section className="max-w-[1200px] mx-auto px-6 py-16">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative max-w-lg mx-auto w-full">
<div className="absolute -top-6 -left-6 w-24 h-24 bg-[#27504E] rounded-full flex flex-col items-center justify-center z-10 shadow-[0_8px_30px_rgba(39,80,78,0.3)] text-white transform -rotate-12">
<span className="text-2xl font-medium tracking-tighter leading-none">30%</span>
<span className="text-[10px] font-medium tracking-widest uppercase mt-1 opacity-80">ON SALE</span>
</div>
<img alt="Grey Sofa" className="w-full h-auto rounded-[1.5rem] object-cover shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-[#27504E]/5" src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
<div className="max-w-md">
<p className="text-[#D8AFB1] text-xs font-semibold uppercase tracking-widest mb-3">Best Offer</p>
<h2 className="text-4xl lg:text-5xl font-normal tracking-tighter text-[#27504E] mb-4">Sofa Super Modern</h2>
<p className="text-[#27504E]/50 text-sm mb-8 leading-relaxed font-normal">
                    Years of experience in consulting and implementing interior furniture projects along with the supply of furniture of the highest level.
                </p>
<div className="flex gap-3 mb-8">
<div className="w-6 h-6 rounded-full bg-gray-300 cursor-pointer shadow-inner ring-2 ring-transparent hover:ring-[#27504E]/20 transition-all"></div>
<div className="w-6 h-6 rounded-full bg-[#27504E] cursor-pointer shadow-inner ring-2 ring-gray-200 transition-all"></div>
</div>
<p className="text-3xl font-medium tracking-tight text-[#27504E] mb-8">$120.00</p>
<div className="flex flex-wrap gap-3">
<button className="bg-[#27504E] px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#27504E]/90 transition-all flex items-center gap-2 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5">
<iconify-icon height="18" icon="solar:add-circle-linear" width="18"></iconify-icon> Add to cart
                    </button>
<button className="border border-[#27504E]/10 bg-white text-[#27504E] px-8 py-3.5 rounded-full text-sm font-medium shadow-sm transition-all hover:border-[#27504E]/30 hover:bg-[#27504E]/5">Explore</button>
</div>
</div>
</div>
</section>

<section className="max-w-[1200px] mx-auto px-6 py-20 text-center border-t border-[#27504E]/5 mt-10">
<h2 className="text-3xl font-medium tracking-tight text-[#27504E] mb-3">News from our blog</h2>
<p className="text-[#27504E]/50 text-base max-w-xl mx-auto mb-12 font-normal">
            Contemporary interior design studio interior furniture projects along with the supply
        </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">

<article className="group cursor-pointer">
<div className="rounded-2xl overflow-hidden mb-5 aspect-[4/3] shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#27504E]/5">
<img alt="Interior" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<p className="text-[#D8AFB1] text-xs font-semibold uppercase tracking-wider mb-2">Furniture</p>
<h3 className="text-xl font-medium tracking-tight text-[#27504E] mb-3 leading-snug group-hover:text-[#27504E]/70 transition-colors">Trends in furniture and real estate architecture in 2022</h3>
<p className="text-[#27504E]/50 text-sm mb-4 line-clamp-2 font-normal leading-relaxed">Consulting and implementing interior furniture projects along with the supply of furniture of the highest level in consulting and implementing interior furniture projects.</p>
<a className="text-[#27504E] font-medium text-sm hover:text-[#27504E]/70 transition-colors flex items-center gap-1.5 w-max" href="#">
                    Read article <iconify-icon className="transform group-hover:translate-x-1 transition-transform" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</article>

<article className="group cursor-pointer">
<div className="rounded-2xl overflow-hidden mb-5 aspect-[4/3] shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#27504E]/5">
<img alt="Interior" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<p className="text-[#D8AFB1] text-xs font-semibold uppercase tracking-wider mb-2">Design</p>
<h3 className="text-xl font-medium tracking-tight text-[#27504E] mb-3 leading-snug group-hover:text-[#27504E]/70 transition-colors">How to choose the perfect armchair for your living room</h3>
<p className="text-[#27504E]/50 text-sm mb-4 line-clamp-2 font-normal leading-relaxed">Consulting and implementing interior furniture projects along with the supply of furniture of the highest level in consulting and implementing interior furniture projects.</p>
<a className="text-[#27504E] font-medium text-sm hover:text-[#27504E]/70 transition-colors flex items-center gap-1.5 w-max" href="#">
                    Read article <iconify-icon className="transform group-hover:translate-x-1 transition-transform" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</article>

<article className="group cursor-pointer">
<div className="rounded-2xl overflow-hidden mb-5 aspect-[4/3] shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#27504E]/5">
<img alt="Interior" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<p className="text-[#D8AFB1] text-xs font-semibold uppercase tracking-wider mb-2">Lifestyle</p>
<h3 className="text-xl font-medium tracking-tight text-[#27504E] mb-3 leading-snug group-hover:text-[#27504E]/70 transition-colors">The minimalist approach to organizing small spaces</h3>
<p className="text-[#27504E]/50 text-sm mb-4 line-clamp-2 font-normal leading-relaxed">Consulting and implementing interior furniture projects along with the supply of furniture of the highest level in consulting and implementing interior furniture projects.</p>
<a className="text-[#27504E] font-medium text-sm hover:text-[#27504E]/70 transition-colors flex items-center gap-1.5 w-max" href="#">
                    Read article <iconify-icon className="transform group-hover:translate-x-1 transition-transform" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</article>
</div>
</section>

<footer className="bg-[#27504E] mt-10 text-white py-20 border-t border-[#27504E]/10">
<div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
<div className="lg:col-span-5 pr-8">
<a className="text-2xl font-medium tracking-tighter uppercase leading-none block mb-2 text-white" href="#">LIBERIO</a>
<span className="text-[10px] tracking-widest uppercase block mb-6 text-white/40 font-medium">furniture minimalist</span>
<p className="text-sm mb-8 max-w-sm leading-relaxed text-white/60 font-normal">
                    Three seven, inc - is a contemporary interior design studio. We have over 20 years of experience in consulting and implementing interior furniture projects.
                </p>
<h4 className="text-sm font-medium mb-3 text-white tracking-wide uppercase">Subscribe Newsletter</h4>
<div className="flex max-w-sm p-1 rounded-full border border-white/10 focus-within:border-white/30 focus-within:ring-1 focus-within:ring-white/10 transition-all bg-white/5">
<input className="bg-transparent placeholder-white/40 px-5 py-2.5 w-full outline-none text-white text-sm" placeholder="Email address" type="email"/>
<button className="bg-white text-[#27504E] px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:bg-gray-100 shadow-sm">Subscribe</button>
</div>
</div>
<div className="lg:col-span-2 lg:col-start-7 pt-1 lg:pt-0">
<h4 className="text-sm font-medium tracking-wide uppercase mb-5 text-white/80">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm font-normal transition-colors text-white/50 hover:text-white" href="#">About</a></li>
<li><a className="text-sm font-normal transition-colors text-white/50 hover:text-white" href="#">Projects</a></li>
<li><a className="text-sm font-normal transition-colors text-white/50 hover:text-white" href="#">Privacy policy</a></li>
</ul>
</div>
<div className="lg:col-span-2 pt-1 lg:pt-0">
<h4 className="text-sm font-medium tracking-wide uppercase mb-5 text-white/80">Products</h4>
<ul className="space-y-3">
<li><a className="text-sm font-normal transition-colors text-white/50 hover:text-white" href="#">Chair</a></li>
<li><a className="text-sm font-normal transition-colors text-white/50 hover:text-white" href="#">Sofa</a></li>
<li><a className="text-sm font-normal transition-colors text-white/50 hover:text-white" href="#">Lamp</a></li>
</ul>
</div>
<div className="lg:col-span-2 pt-1 lg:pt-0">
<h4 className="text-sm font-medium tracking-wide uppercase mb-5 text-white/80">Support</h4>
<ul className="space-y-3 mb-8">
<li><a className="text-sm font-normal transition-colors text-white/50 hover:text-white" href="#">FAQs</a></li>
<li><a className="text-sm font-normal transition-colors text-white/50 hover:text-white" href="#">Contacts</a></li>
<li><a className="text-sm font-normal transition-colors text-white/50 hover:text-white" href="#">Terms of use</a></li>
</ul>
<div className="flex gap-3">
<a className="text-xs font-semibold tracking-widest text-white/50 hover:text-white transition-colors" href="#">IG</a>
<a className="text-xs font-semibold tracking-widest text-white/50 hover:text-white transition-colors" href="#">FB</a>
<a className="text-xs font-semibold tracking-widest text-white/50 hover:text-white transition-colors" href="#">X</a>
</div>
</div>
</div>
<div className="max-w-[1200px] mx-auto px-6 mt-16 pt-6 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
<p>© 2024 Liberio. All rights reserved.</p>
<p className="mt-2 md:mt-0 flex items-center gap-1">Designed with <iconify-icon height="14" icon="solar:heart-linear" width="14"></iconify-icon></p>
</div>
</footer>

    </>
  );
}
