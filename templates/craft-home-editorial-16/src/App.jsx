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
      

<div className="bg-white border-b border-[#333333]/10 text-sm">
<div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
<div className="flex items-center space-x-4">
<a className="text-gray-400 hover:text-[#5d4037] transition-colors" href="#"><iconify-icon className="text-lg" icon="mdi:facebook"></iconify-icon></a>
<a className="text-gray-400 hover:text-[#5d4037] transition-colors" href="#"><iconify-icon className="text-lg" icon="mdi:instagram"></iconify-icon></a>
<a className="text-gray-400 hover:text-[#5d4037] transition-colors" href="#"><iconify-icon className="text-lg" icon="mdi:twitter"></iconify-icon></a>
</div>
<div className="flex space-x-6 font-medium text-gray-500 text-xs uppercase tracking-wider">
<a className="hover:text-[#5d4037] transition-colors" href="#">Contact</a>
<a className="hover:text-[#5d4037] transition-colors" href="#">Editorial Policy</a>
<a className="hover:text-[#5d4037] transition-colors" href="#">About</a>
</div>
</div>
</div>

<header className="bg-white sticky top-0 z-50 shadow-sm border-b border-[#333333]/10">
<div className="max-w-7xl mx-auto px-4 pt-8 pb-4">

<div className="flex justify-center mb-8 relative">
<span className="absolute left-0 bottom-2 text-gray-400 text-xs font-medium uppercase tracking-widest hidden md:block">Est. 2024</span>
<a className="text-5xl font-serif font-semibold tracking-tight text-[#333333] flex items-center gap-2 group" href="#">
<iconify-icon className="text-[#5d4037] text-4xl group-hover:rotate-45 transition-transform duration-500" icon="solar:compass-square-linear"></iconify-icon>
                    CRAFTSING
                </a>
</div>

<div className="flex justify-between items-center py-2 relative">

<button className="md:hidden text-[#333333] hover:text-[#5d4037]">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>

<nav className="hidden md:flex justify-start space-x-8 flex-grow">
<a className="text-xs font-semibold uppercase tracking-widest text-[#333333] hover:text-[#5d4037] transition-colors" href="#">Modern Home</a>

<div className="group relative static">
<button className="text-xs font-semibold uppercase tracking-widest text-[#333333] hover:text-[#5d4037] transition-colors flex items-center gap-1">
                            Creative Crafts <iconify-icon className="text-sm" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>

<div className="absolute left-0 top-full w-full bg-white border-t border-[#333333]/10 shadow-lg p-10 grid grid-cols-3 gap-12 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 mt-4">
<div>
<h3 className="font-serif text-lg font-semibold tracking-tight text-[#333333] mb-4 border-b border-[#333333]/10 pb-2">Sewing &amp; Craft</h3>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-[#5d4037] transition-colors block" href="#">Garment Construction</a></li>
<li><a className="text-sm text-gray-500 hover:text-[#5d4037] transition-colors block" href="#">Pattern Drafting</a></li>
</ul>
</div>
<div>
<h3 className="font-serif text-lg font-semibold tracking-tight text-[#333333] mb-4 border-b border-[#333333]/10 pb-2">Embroidery</h3>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-[#5d4037] transition-colors block" href="#">Hand Embroidery Basics</a></li>
<li><a className="text-sm text-gray-500 hover:text-[#5d4037] transition-colors block" href="#">Machine Digitizing</a></li>
</ul>
</div>
<div>
<h3 className="font-serif text-lg font-semibold tracking-tight text-[#333333] mb-4 border-b border-[#333333]/10 pb-2">Quilting</h3>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-[#5d4037] transition-colors block" href="#">Free Motion Quilting</a></li>
<li><a className="text-sm text-gray-500 hover:text-[#5d4037] transition-colors block" href="#">Binding &amp; Finishing</a></li>
</ul>
</div>
</div>
</div>
<a className="text-xs font-semibold uppercase tracking-widest text-[#333333] hover:text-[#5d4037] transition-colors" href="#">Tools &amp; DIY</a>
<a className="text-xs font-semibold uppercase tracking-widest text-[#333333] hover:text-[#5d4037] transition-colors" href="#">Buying Guides</a>
<a className="text-xs font-semibold uppercase tracking-widest text-[#333333] hover:text-[#5d4037] transition-colors" href="#">Company Info</a>
</nav>

<div className="relative group hidden md:flex items-center w-64">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-gray-400 text-lg" icon="solar:magnifer-linear"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-sm text-sm placeholder-gray-400 focus:outline-none focus:border-[#5d4037] focus:ring-1 focus:ring-[#5d4037] transition-colors bg-[#faf9f6]" placeholder="Search designs &amp; tools..." type="text"/>

<div className="absolute right-0 top-full mt-2 w-80 bg-white border border-[#333333]/10 shadow-lg p-4 opacity-0 invisible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-300 z-50">
<span className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3 block">Trending Searches</span>
<div className="space-y-3">
<a className="flex items-center gap-3 hover:bg-[#faf9f6] p-2 transition-colors rounded-sm" href="#">
<img className="w-10 h-10 object-cover rounded-sm border border-gray-200" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<span className="text-sm font-medium text-[#333333]">Walnut Cabinetry</span>
</a>
<a className="flex items-center gap-3 hover:bg-[#faf9f6] p-2 transition-colors rounded-sm" href="#">
<img className="w-10 h-10 object-cover rounded-sm border border-gray-200" src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<span className="text-sm font-medium text-[#333333]">Pattern Drafting Tools</span>
</a>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="max-w-7xl mx-auto px-4 py-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[550px]">

<a className="md:col-span-2 relative border border-[#333333]/20 overflow-hidden group min-h-[450px] md:min-h-0 block bg-white hover:shadow-lg transition-all duration-500" href="#">
<img alt="Walnut and Graphite Interior" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&amp;fit=crop&amp;w=1200&amp;q=80" />
<div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/90 via-[#1a1a1a]/30 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-5/6">
<span className="inline-block bg-[#5d4037] text-white text-xs font-semibold px-3 py-1 mb-4 uppercase tracking-widest shadow-sm">Featured Interior</span>
<h1 className="text-4xl md:text-5xl text-white font-serif font-semibold tracking-tight leading-tight mb-4">Elevating Modern Living Through Design, Sewing, and DIY Excellence</h1>
<div className="flex items-center gap-3 text-white/90">
<div className="w-8 h-8 rounded-full bg-white overflow-hidden border border-white/20"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/></div>
<span className="text-sm font-medium">Jitu Mandal</span>
</div>
</div>
</img></a>

<div className="grid grid-rows-2 gap-6 h-[500px] md:h-full">

<a className="relative border border-[#333333]/20 overflow-hidden group block bg-white hover:shadow-lg transition-all duration-500" href="#">
<img alt="Sewing Pattern" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/90 via-[#1a1a1a]/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<span className="inline-block bg-[#333333] text-white text-[10px] font-semibold px-2 py-1 mb-3 uppercase tracking-widest">Sewing Pattern</span>
<h2 className="text-2xl text-white font-serif font-semibold tracking-tight leading-snug mb-2">Essential Pattern Drafting Techniques</h2>
</div>
</a>

<a className="relative border border-[#333333]/20 overflow-hidden group block bg-white hover:shadow-lg transition-all duration-500" href="#">
<img alt="Machinery Review" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1622396090075-ab6b8396fe9b?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/90 via-[#1a1a1a]/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<span className="inline-block bg-[#333333] text-white text-[10px] font-semibold px-2 py-1 mb-3 uppercase tracking-widest">Machinery Review</span>
<h2 className="text-2xl text-white font-serif font-semibold tracking-tight leading-snug mb-2">Testing the Heavy-Duty Powerhouses</h2>
</div>
</a>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 py-10 mb-8 border-b border-[#333333]/10">
<div className="flex justify-between items-center overflow-x-auto pb-4 scrollbar-hide space-x-6 lg:space-x-0">
<a className="flex flex-col items-center group min-w-[90px]" href="#">
<div className="w-16 h-16 rounded-full bg-white border border-[#333333]/10 flex items-center justify-center group-hover:bg-[#5d4037] group-hover:text-white transition-all duration-300 shadow-sm text-[#333333] mb-3">
<iconify-icon className="text-2xl" icon="solar:home-2-linear"></iconify-icon>
</div>
<span className="text-xs font-semibold text-[#333333] text-center uppercase tracking-widest">Home Decor</span>
</a>
<a className="flex flex-col items-center group min-w-[90px]" href="#">
<div className="w-16 h-16 rounded-full bg-white border border-[#333333]/10 flex items-center justify-center group-hover:bg-[#5d4037] group-hover:text-white transition-all duration-300 shadow-sm text-[#333333] mb-3">
<iconify-icon className="text-2xl" icon="solar:armchair-linear"></iconify-icon>
</div>
<span className="text-xs font-semibold text-[#333333] text-center uppercase tracking-widest">Furniture</span>
</a>
<a className="flex flex-col items-center group min-w-[90px]" href="#">
<div className="w-16 h-16 rounded-full bg-white border border-[#333333]/10 flex items-center justify-center group-hover:bg-[#5d4037] group-hover:text-white transition-all duration-300 shadow-sm text-[#333333] mb-3">
<iconify-icon className="text-2xl" icon="solar:bed-linear"></iconify-icon>
</div>
<span className="text-xs font-semibold text-[#333333] text-center uppercase tracking-widest">Bedding</span>
</a>
<a className="flex flex-col items-center group min-w-[90px]" href="#">
<div className="w-16 h-16 rounded-full bg-white border border-[#333333]/10 flex items-center justify-center group-hover:bg-[#5d4037] group-hover:text-white transition-all duration-300 shadow-sm text-[#333333] mb-3">
<iconify-icon className="text-2xl" icon="solar:scissors-linear"></iconify-icon>
</div>
<span className="text-xs font-semibold text-[#333333] text-center uppercase tracking-widest">Sewing</span>
</a>
<a className="flex flex-col items-center group min-w-[90px]" href="#">
<div className="w-16 h-16 rounded-full bg-white border border-[#333333]/10 flex items-center justify-center group-hover:bg-[#5d4037] group-hover:text-white transition-all duration-300 shadow-sm text-[#333333] mb-3">
<iconify-icon className="text-2xl" icon="solar:pen-linear"></iconify-icon>
</div>
<span className="text-xs font-semibold text-[#333333] text-center uppercase tracking-widest">Embroidery</span>
</a>
<a className="flex flex-col items-center group min-w-[90px]" href="#">
<div className="w-16 h-16 rounded-full bg-white border border-[#333333]/10 flex items-center justify-center group-hover:bg-[#5d4037] group-hover:text-white transition-all duration-300 shadow-sm text-[#333333] mb-3">
<iconify-icon className="text-2xl" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<span className="text-xs font-semibold text-[#333333] text-center uppercase tracking-widest">Quilting</span>
</a>
<a className="flex flex-col items-center group min-w-[90px]" href="#">
<div className="w-16 h-16 rounded-full bg-white border border-[#333333]/10 flex items-center justify-center group-hover:bg-[#5d4037] group-hover:text-white transition-all duration-300 shadow-sm text-[#333333] mb-3">
<iconify-icon className="text-2xl" icon="solar:hammer-linear"></iconify-icon>
</div>
<span className="text-xs font-semibold text-[#333333] text-center uppercase tracking-widest">Tools</span>
</a>
</div>
</section>

<main className="max-w-7xl mx-auto px-4 py-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-8 space-y-20">

<section>
<div className="mb-8 border-b border-[#333333]/10 pb-3">
<h2 className="font-serif text-3xl font-semibold tracking-tight text-[#333333]">Modern Home</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<article className="flex flex-col bg-white border border-[#333333]/20 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group cursor-pointer h-full relative">
<div className="relative overflow-hidden w-full pt-[65%]">
<img alt="Living Room" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<span className="absolute bottom-0 left-0 bg-[#5d4037] text-white text-[10px] font-semibold px-3 py-1.5 uppercase tracking-widest z-10">Furniture &amp; Cabinetry</span>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="font-serif text-2xl font-semibold tracking-tight text-[#333333] mb-3 leading-snug group-hover:text-[#5d4037] transition-colors">Architectural Custom Cabinetry: Integrating Walnut and Graphite</h3>
<p className="text-sm text-gray-500 mb-6 flex-grow leading-relaxed">Discover how integrating deep walnut textures with minimalist graphite hardware elevates common spaces into breathtaking architectural statements.</p>
<div className="mt-auto flex items-center gap-3 pt-4 border-t border-gray-100">
<div className="w-6 h-6 rounded-full overflow-hidden border border-gray-200"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/></div>
<span className="text-xs font-semibold text-[#333333]">Jitu Mandal</span>
</div>
</div>
</article>

<div className="flex flex-col gap-6">

<article className="flex gap-5 bg-white border border-[#333333]/20 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group cursor-pointer p-4 h-[150px]">
<div className="w-32 h-full flex-shrink-0 relative overflow-hidden bg-gray-100">
<img alt="Bedding" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<div className="flex flex-col justify-center py-1">
<span className="text-[10px] text-[#5d4037] font-semibold uppercase tracking-widest mb-1">Bedding</span>
<h4 className="font-serif text-lg font-semibold tracking-tight text-[#333333] leading-snug group-hover:text-[#5d4037] transition-colors line-clamp-3 mb-2">The Ultimate Mattress Guide for Minimalist Frames</h4>
</div>
</article>

<article className="flex gap-5 bg-white border border-[#333333]/20 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group cursor-pointer p-4 h-[150px]">
<div className="w-32 h-full flex-shrink-0 relative overflow-hidden bg-gray-100">
<img alt="Texture" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<div className="flex flex-col justify-center py-1">
<span className="text-[10px] text-[#5d4037] font-semibold uppercase tracking-widest mb-1">Decor</span>
<h4 className="font-serif text-lg font-semibold tracking-tight text-[#333333] leading-snug group-hover:text-[#5d4037] transition-colors line-clamp-3 mb-2">Why Texture Replaces Color in Premium Spaces</h4>
</div>
</article>
</div>
</div>
</section>

<section>
<div className="mb-8 border-b border-[#333333]/10 pb-3 flex justify-between items-end">
<h2 className="font-serif text-3xl font-semibold tracking-tight text-[#333333]">Creative Crafts</h2>
<a className="text-xs font-semibold text-[#5d4037] hover:underline uppercase tracking-widest hidden md:flex items-center gap-1" href="#">View Library <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<article className="flex flex-col bg-white border border-[#333333]/20 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group cursor-pointer">
<div className="relative overflow-hidden w-full h-48 border-b border-[#333333]/10">
<img alt="Sewing" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#333333] text-[10px] font-semibold px-2 py-1 uppercase tracking-widest shadow-sm">Sewing &amp; Craft</span>
</div>
<div className="p-5 flex flex-col flex-grow">
<h3 className="font-serif text-xl font-semibold tracking-tight text-[#333333] mb-3 leading-snug group-hover:text-[#5d4037] transition-colors line-clamp-3">Mastering the Bias Tape: Seamless Finishes for Garments</h3>
</div>
</article>

<article className="flex flex-col bg-white border border-[#333333]/20 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group cursor-pointer">
<div className="relative overflow-hidden w-full h-48 border-b border-[#333333]/10">
<img alt="Embroidery" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1556909212-e7df11b5e39e?auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#333333] text-[10px] font-semibold px-2 py-1 uppercase tracking-widest shadow-sm">Embroidery</span>
</div>
<div className="p-5 flex flex-col flex-grow">
<h3 className="font-serif text-xl font-semibold tracking-tight text-[#333333] mb-3 leading-snug group-hover:text-[#5d4037] transition-colors line-clamp-3">A Simple Guide to Hand Embroidering Minimalist Letters</h3>
</div>
</article>

<article className="flex flex-col bg-white border border-[#333333]/20 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group cursor-pointer">
<div className="relative overflow-hidden w-full h-48 border-b border-[#333333]/10">
<img alt="Quilting" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#333333] text-[10px] font-semibold px-2 py-1 uppercase tracking-widest shadow-sm">Quilting</span>
</div>
<div className="p-5 flex flex-col flex-grow">
<h3 className="font-serif text-xl font-semibold tracking-tight text-[#333333] mb-3 leading-snug group-hover:text-[#5d4037] transition-colors line-clamp-3">How to Quilt Flawless Feathers: An Incredibly Easy Guide</h3>
</div>
</article>
</div>
</section>

<section>
<div className="mb-8 border-b border-[#333333]/10 pb-3">
<h2 className="font-serif text-3xl font-semibold tracking-tight text-[#333333]">The Shopping Hub</h2>
</div>
<div className="space-y-6">

<article className="flex flex-col md:flex-row bg-white border border-[#333333]/20 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group cursor-pointer">
<div className="relative w-full md:w-2/5 shrink-0 h-56 md:h-auto overflow-hidden border-r border-[#333333]/10">
<div className="absolute top-3 left-3 z-10 bg-[#333333] text-white text-[10px] font-semibold px-2 py-1 uppercase tracking-widest flex items-center gap-1 shadow-sm">
<iconify-icon className="text-sm text-[#5d4037]" icon="solar:medal-star-linear"></iconify-icon> Expert Choice
                                </div>
<img alt="Sewing Machine" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="p-6 flex flex-col justify-center md:w-3/5">
<span className="text-[10px] font-semibold text-[#5d4037] uppercase tracking-widest mb-2 block">Sewing Machines</span>
<h3 className="font-serif text-2xl font-semibold tracking-tight text-[#333333] mb-3 group-hover:text-[#5d4037] transition-colors leading-snug">Top 5 Heavy-Duty Sewing Machines for Thick Upholstery</h3>
<p className="text-sm text-gray-500 mb-4 line-clamp-2">Not all motors are created equal. We break down the powerhouses that handle velvet, canvas, and leather effortlessly in your home studio.</p>
<div className="flex items-center gap-2 mt-auto pt-2">
<span className="text-xs font-semibold text-[#333333] border-b border-[#333333] pb-0.5">Read Full Review</span>
</div>
</div>
</article>

<article className="flex flex-col md:flex-row bg-white border border-[#333333]/20 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group cursor-pointer">
<div className="relative w-full md:w-2/5 shrink-0 h-56 md:h-auto overflow-hidden border-r border-[#333333]/10">
<div className="absolute top-3 left-3 z-10 bg-[#333333] text-white text-[10px] font-semibold px-2 py-1 uppercase tracking-widest flex items-center gap-1 shadow-sm">
<iconify-icon className="text-sm text-[#5d4037]" icon="solar:medal-star-linear"></iconify-icon> Expert Choice
                                </div>
<img alt="Power Tools" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="p-6 flex flex-col justify-center md:w-3/5">
<span className="text-[10px] font-semibold text-[#5d4037] uppercase tracking-widest mb-2 block">Power Tools</span>
<h3 className="font-serif text-2xl font-semibold tracking-tight text-[#333333] mb-3 group-hover:text-[#5d4037] transition-colors leading-snug">The Ultimate Guide to Precision Routers for Custom Furniture</h3>
<p className="text-sm text-gray-500 mb-4 line-clamp-2">After 40 hours of rigorous testing across hardwood types, we’ve crowned the absolute best tools for pristine, tear-out-free edge profiling.</p>
<div className="flex items-center gap-2 mt-auto pt-2">
<span className="text-xs font-semibold text-[#333333] border-b border-[#333333] pb-0.5">Read Full Review</span>
</div>
</div>
</article>
</div>
</section>

<div className="py-12 flex flex-col items-center justify-center opacity-60">
<iconify-icon className="text-2xl text-gray-400 animate-bounce mb-2" icon="solar:alt-arrow-down-linear"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-widest text-gray-500">Scroll to discover more</span>
</div>
</div>

<aside className="lg:col-span-4 space-y-12">

<div className="grid grid-cols-2 gap-3">
<a className="border border-gray-200 bg-white text-gray-600 flex items-center justify-center gap-2 py-4 px-4 hover:border-[#333333] hover:text-[#333333] transition-colors rounded-sm shadow-sm" href="#">
<iconify-icon className="text-lg" icon="mdi:facebook"></iconify-icon> <span className="text-[10px] font-semibold uppercase tracking-widest">Facebook</span>
</a>
<a className="border border-gray-200 bg-white text-gray-600 flex items-center justify-center gap-2 py-4 px-4 hover:border-[#333333] hover:text-[#333333] transition-colors rounded-sm shadow-sm" href="#">
<iconify-icon className="text-lg" icon="mdi:twitter"></iconify-icon> <span className="text-[10px] font-semibold uppercase tracking-widest">Twitter</span>
</a>
<a className="border border-gray-200 bg-white text-gray-600 flex items-center justify-center gap-2 py-4 px-4 hover:border-[#333333] hover:text-[#333333] transition-colors rounded-sm shadow-sm" href="#">
<iconify-icon className="text-lg" icon="mdi:pinterest"></iconify-icon> <span className="text-[10px] font-semibold uppercase tracking-widest">Pinterest</span>
</a>
<a className="border border-gray-200 bg-white text-gray-600 flex items-center justify-center gap-2 py-4 px-4 hover:border-[#333333] hover:text-[#333333] transition-colors rounded-sm shadow-sm" href="#">
<iconify-icon className="text-lg" icon="mdi:instagram"></iconify-icon> <span className="text-[10px] font-semibold uppercase tracking-widest">Instagram</span>
</a>
</div>

<div className="bg-white border border-[#333333]/20 shadow-sm rounded-sm">
<div className="bg-[#faf9f6] text-[#333333] px-6 py-4 border-b border-[#333333]/10">
<h3 className="font-serif text-sm font-semibold uppercase tracking-widest flex items-center gap-2">
<iconify-icon className="text-[#5d4037] text-lg" icon="solar:star-linear"></iconify-icon> Editor's Choice
                        </h3>
</div>
<div className="p-6">
<a className="block group" href="#">
<div className="relative h-56 overflow-hidden mb-5 border border-[#333333]/10">
<img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<h4 className="font-serif text-2xl font-semibold tracking-tight text-[#333333] group-hover:text-[#5d4037] transition-colors leading-snug">The 5 Golden Rules of Minimalist Styling</h4>
<p className="text-sm text-gray-500 mt-3 line-clamp-2">Curating empty space is just as vital as selecting the centerpiece furniture.</p>
</a>
</div>
</div>

<div className="bg-[#333333] text-white p-8 text-center rounded-sm relative overflow-hidden shadow-lg">
<iconify-icon className="text-[#5d4037] text-4xl mb-4 opacity-50" icon="solar:compass-square-linear"></iconify-icon>
<h3 className="font-serif text-2xl font-semibold tracking-tight mb-3">Join the Atelier</h3>
<p className="text-sm text-gray-400 mb-8">Get the latest interior insights and craft guides delivered weekly.</p>
<form className="space-y-4">
<input className="w-full border-none px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5d4037] rounded-sm bg-white/10 text-white placeholder-gray-500" placeholder="Your Name" type="text"/>
<input className="w-full border-none px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5d4037] rounded-sm bg-white/10 text-white placeholder-gray-500" placeholder="Email Address" type="email"/>
<button className="w-full bg-[#5d4037] text-white font-semibold uppercase tracking-widest text-xs py-4 hover:bg-[#4a332d] transition-colors rounded-sm mt-2" type="submit">Subscribe</button>
</form>
</div>
</aside>
</div>
</main>

<footer className="bg-[#1a1a1a] text-gray-400 pt-20 pb-10 border-t-8 border-[#5d4037]">
<div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">

<div>
<h4 className="font-serif text-xs font-semibold uppercase tracking-widest text-white mb-6 border-b border-gray-800 pb-3">Master Categories</h4>
<ul className="space-y-4">
<li><a className="text-sm hover:text-white transition-colors flex items-center gap-2" href="#"><iconify-icon className="text-[#5d4037]" icon="solar:alt-arrow-right-linear"></iconify-icon> Home Decor</a></li>
<li><a className="text-sm hover:text-white transition-colors flex items-center gap-2" href="#"><iconify-icon className="text-[#5d4037]" icon="solar:alt-arrow-right-linear"></iconify-icon> Furniture</a></li>
<li><a className="text-sm hover:text-white transition-colors flex items-center gap-2" href="#"><iconify-icon className="text-[#5d4037]" icon="solar:alt-arrow-right-linear"></iconify-icon> Bedding</a></li>
<li><a className="text-sm hover:text-white transition-colors flex items-center gap-2" href="#"><iconify-icon className="text-[#5d4037]" icon="solar:alt-arrow-right-linear"></iconify-icon> Sewing</a></li>
<li><a className="text-sm hover:text-white transition-colors flex items-center gap-2" href="#"><iconify-icon className="text-[#5d4037]" icon="solar:alt-arrow-right-linear"></iconify-icon> Embroidery</a></li>
<li><a className="text-sm hover:text-white transition-colors flex items-center gap-2" href="#"><iconify-icon className="text-[#5d4037]" icon="solar:alt-arrow-right-linear"></iconify-icon> Quilting</a></li>
<li><a className="text-sm hover:text-white transition-colors flex items-center gap-2" href="#"><iconify-icon className="text-[#5d4037]" icon="solar:alt-arrow-right-linear"></iconify-icon> Tools</a></li>
</ul>
</div>

<div>
<h4 className="font-serif text-xs font-semibold uppercase tracking-widest text-white mb-6 border-b border-gray-800 pb-3">About &amp; Contact</h4>
<a className="text-3xl font-serif font-semibold tracking-tight text-white flex items-center gap-2 mb-6 group" href="#">
<iconify-icon className="text-[#5d4037] group-hover:rotate-45 transition-transform duration-500" icon="solar:compass-square-linear"></iconify-icon>
                    CRAFTSING
                </a>
<p className="text-sm mb-6 leading-relaxed">
                    Elevating modern living through design, sewing, and DIY excellence. Discover cinematic inspiration and expert-tested machinery reviews.
                </p>
<div className="space-y-2 text-sm">
<p><strong className="text-white font-medium">Email:</strong> <a className="hover:text-[#5d4037] transition-colors" href="mailto:contact@craftsing.com">contact@craftsing.com</a></p>
<p><strong className="text-white font-medium">Studio:</strong> 100 Minimalist Way, NY</p>
</div>
</div>

<div>
<h4 className="font-serif text-xs font-semibold uppercase tracking-widest text-white mb-6 border-b border-gray-800 pb-3">Legal Information</h4>
<ul className="space-y-4">
<li><a className="text-sm hover:text-white transition-colors block" href="#">Disclaimer</a></li>
<li><a className="text-sm hover:text-white transition-colors block" href="#">Terms and Conditions</a></li>
<li><a className="text-sm hover:text-white transition-colors block" href="#">Privacy Policy</a></li>
<li><a className="text-sm hover:text-white transition-colors block" href="#">Accessibility Statement</a></li>
</ul>
</div>
</div>

<div className="border-t border-gray-800 pt-8 flex flex-col items-center">
<p className="text-[10px] font-semibold tracking-widest uppercase mb-2">Craftsing</p>
<p className="text-xs">© 2024 Craftsing Media. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
