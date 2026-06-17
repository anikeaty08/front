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
      

<div className="spline-container fixed top-0 w-full h-screen -z-10">
<iframe frameborder="0" height="100%" src="https://my.spline.design/radialglass-20RYcJn9wbsEb5QEYkazHjpb" width="100%"></iframe>
</div>

<div className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-teal-400 to-cyan-400 w-0 z-[60]" id="scroll-progress" style={{width: '0%'}}></div>

<header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b bg-black/70 border-gray-900 transition-transform duration-300 will-change-transform" id="site-header" style={{transform: 'translateY(0px)'}}>
<nav aria-label="Primary" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
<div className="h-full flex items-center justify-between">

<a className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-md" href="#home">
<div className="h-6 w-6 rounded-md bg-gradient-to-br from-teal-500 to-cyan-400"></div>
<span className="text-lg font-medium tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, sans-serif'}}>LeafNest</span>
</a>

<div className="hidden md:flex items-center gap-6 lg:gap-8">
<a aria-current="page" className="group text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors bg-gradient-to-r from-teal-400 to-teal-400 bg-left-bottom bg-no-repeat bg-[length:0%_2px] group-hover:bg-[length:100%_2px] transition-[background-size] duration-300 text-white" data-nav-link="" href="#home" style={{backgroundSize: '100% 2px'}}>Home</a>
<a aria-current="false" className="group text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors bg-gradient-to-r from-teal-400 to-teal-400 bg-left-bottom bg-no-repeat bg-[length:0%_2px] group-hover:bg-[length:100%_2px] transition-[background-size] duration-300" data-nav-link="" href="#about" style={{backgroundSize: '0% 2px'}}>About</a>
<a aria-current="false" className="group text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors bg-gradient-to-r from-teal-400 to-teal-400 bg-left-bottom bg-no-repeat bg-[length:0%_2px] group-hover:bg-[length:100%_2px] transition-[background-size] duration-300" data-nav-link="" href="#features" style={{backgroundSize: '0% 2px'}}>Features</a>
<a aria-current="false" className="group text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors bg-gradient-to-r from-teal-400 to-teal-400 bg-left-bottom bg-no-repeat bg-[length:0%_2px] group-hover:bg-[length:100%_2px] transition-[background-size] duration-300" data-nav-link="" href="#community" style={{backgroundSize: '0% 2px'}}>Community</a>
<a aria-current="false" className="group text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors bg-gradient-to-r from-teal-400 to-teal-400 bg-left-bottom bg-no-repeat bg-[length:0%_2px] group-hover:bg-[length:100%_2px] transition-[background-size] duration-300" data-nav-link="" href="#resources" style={{backgroundSize: '0% 2px'}}>Resources</a>
<a aria-current="false" className="group text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors bg-gradient-to-r from-teal-400 to-teal-400 bg-left-bottom bg-no-repeat bg-[length:0%_2px] group-hover:bg-[length:100%_2px] transition-[background-size] duration-300" data-nav-link="" href="#shop" style={{backgroundSize: '0% 2px'}}>Shop</a>
<a aria-current="false" className="group text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors bg-gradient-to-r from-teal-400 to-teal-400 bg-left-bottom bg-no-repeat bg-[length:0%_2px] group-hover:bg-[length:100%_2px] transition-[background-size] duration-300" data-nav-link="" href="#join" style={{backgroundSize: '0% 2px'}}>Join</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-black hover:bg-gray-200 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-teal-500" href="#shop">
            Shop Kits &amp; Tools
            <svg aria-hidden="true" className="lucide lucide-shopping-bag w-4 h-4" data-lucide="shopping-bag" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 2v4"></path><path d="M18 2v4"></path><path d="M2 7h20"></path><path d="M2 7l2 13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2l2-13"></path><path d="M16 11a4 4 0 0 1-8 0"></path></svg>
</a>
<button aria-controls="mobile-panel" aria-expanded="false" aria-label="Toggle navigation" className="md:hidden p-2 rounded-md transition-colors hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500" id="nav-toggle">
<svg aria-hidden="true" className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
<svg aria-hidden="true" className="lucide lucide-x w-5 h-5 hidden" data-lucide="x" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 z-40 pointer-events-none opacity-0 transition-opacity duration-300" id="mobile-panel">
<div className="absolute inset-0 bg-black/50 backdrop-blur-sm" data-close-overlay=""></div>
<div className="absolute inset-x-0 top-0 bg-gray-950/95 border-b border-gray-900 px-4 sm:px-6 pt-20 pb-8 translate-y-[-8px] opacity-0 transition-all duration-300">
<div className="max-w-7xl mx-auto">
<div aria-label="Mobile" className="grid gap-4" role="menu">
<a className="flex items-center justify-between px-3 py-3 rounded-lg hover:bg-gray-900 border border-transparent hover:border-gray-800 transition-colors" data-mobile-link="" href="#home" role="menuitem">
<span className="text-base font-medium text-gray-100">Home</span>
<svg aria-hidden="true" className="lucide lucide-arrow-up-right w-4 h-4 text-gray-400" data-lucide="arrow-up-right" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
<a className="flex items-center justify-between px-3 py-3 rounded-lg hover:bg-gray-900 border border-transparent hover:border-gray-800 transition-colors" data-mobile-link="" href="#about" role="menuitem">
<span className="text-base font-medium text-gray-100">About</span>
<svg aria-hidden="true" className="lucide lucide-arrow-up-right w-4 h-4 text-gray-400" data-lucide="arrow-up-right" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
<a className="flex items-center justify-between px-3 py-3 rounded-lg hover:bg-gray-900 border border-transparent hover:border-gray-800 transition-colors" data-mobile-link="" href="#features" role="menuitem">
<span className="text-base font-medium text-gray-100">Features</span>
<svg aria-hidden="true" className="lucide lucide-arrow-up-right w-4 h-4 text-gray-400" data-lucide="arrow-up-right" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
<a className="flex items-center justify-between px-3 py-3 rounded-lg hover:bg-gray-900 border border-transparent hover:border-gray-800 transition-colors" data-mobile-link="" href="#community" role="menuitem">
<span className="text-base font-medium text-gray-100">Community</span>
<svg aria-hidden="true" className="lucide lucide-arrow-up-right w-4 h-4 text-gray-400" data-lucide="arrow-up-right" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
<a className="flex items-center justify-between px-3 py-3 rounded-lg hover:bg-gray-900 border border-transparent hover:border-gray-800 transition-colors" data-mobile-link="" href="#resources" role="menuitem">
<span className="text-base font-medium text-gray-100">Resources</span>
<svg aria-hidden="true" className="lucide lucide-arrow-up-right w-4 h-4 text-gray-400" data-lucide="arrow-up-right" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
<a className="flex items-center justify-between px-3 py-3 rounded-lg hover:bg-gray-900 border border-transparent hover:border-gray-800 transition-colors" data-mobile-link="" href="#shop" role="menuitem">
<span className="text-base font-medium text-gray-100">Shop</span>
<svg aria-hidden="true" className="lucide lucide-arrow-up-right w-4 h-4 text-gray-400" data-lucide="arrow-up-right" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
<a className="flex items-center justify-between px-3 py-3 rounded-lg hover:bg-gray-900 border border-transparent hover:border-gray-800 transition-colors" data-mobile-link="" href="#join" role="menuitem">
<span className="text-base font-medium text-gray-100">Join</span>
<svg aria-hidden="true" className="lucide lucide-arrow-up-right w-4 h-4 text-gray-400" data-lucide="arrow-up-right" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="mt-6 flex items-center gap-3">
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-teal-400 text-black hover:bg-teal-300 transition-all hover:scale-[1.02]" href="#join">
              Start Your Garden
              <svg aria-hidden="true" className="lucide lucide-sprout w-4 h-4" data-lucide="sprout" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 20h10"></path><path d="M12 20V10"></path><path d="M9 10c0 0-1 0-2-1s-1-3 1-4c2-1 4 1 4 3"></path><path d="M15 10c0 0 1 0 2-1s1-3-1-4c-2-1-4 1-4 3"></path></svg>
</a>
<a className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200" href="#shop">
<svg aria-hidden="true" className="lucide lucide-shopping-cart w-4 h-4" data-lucide="shopping-cart" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2 2h3l2.2 12.6A2 2 0 0 0 9.2 16h7.6a2 2 0 0 0 2-1.6L21 8H6"></path></svg>
              Shop Kits &amp; Tools
            </a>
</div>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden pt-24 sm:pt-28 pb-16 bg-[url('https://images.unsplash.com/photo-1545249390-6bdfa286032f?q=80&amp;w=1600&amp;auto=format&amp;fit=crop')] bg-cover bg-center" id="home">
<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
<div>
<p className="text-sm font-medium uppercase tracking-wider text-teal-300/90" data-animate="up" data-delay="0">Grow Green, Live Big.</p>
<h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl leading-tight font-medium tracking-tight" data-animate="left" data-delay="100" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, sans-serif'}}>
            Turn Small Spaces into Green Sanctuaries.
          </h1>
<p className="mt-6 text-lg text-gray-300 max-w-xl" data-animate="up" data-delay="200">
            LeafNest helps city dwellers transform balconies, windowsills, and corners into thriving gardens. No yard? No problem—your green journey starts here.
          </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3" data-animate="up" data-delay="300">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium bg-teal-400 text-black hover:bg-teal-300 transition-all hover:scale-[1.02]" href="#join">
              Start Your Garden
              <svg aria-hidden="true" className="lucide lucide-sprout w-5 h-5" data-lucide="sprout" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 20h10"></path><path d="M12 20V10"></path><path d="M9 10c0 0-1 0-2-1s-1-3 1-4c2-1 4 1 4 3"></path><path d="M15 10c0 0 1 0 2-1s1-3-1-4c-2-1-4 1-4 3"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium bg-white/10 text-gray-100 hover:bg-white/15 border border-white/10 transition-all hover:scale-[1.02]" href="#shop">
              Shop Kits &amp; Tools
              <svg aria-hidden="true" className="lucide lucide-shopping-bag w-5 h-5" data-lucide="shopping-bag" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 2v4"></path><path d="M18 2v4"></path><path d="M2 7h20"></path><path d="M2 7l2 13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2l2-13"></path><path d="M16 11a4 4 0 0 1-8 0"></path></svg>
</a>
</div>
<div className="mt-8 flex items-center gap-6" data-animate="up" data-delay="400">
<div className="flex -space-x-2">
<img alt="Urban gardener 1" className="w-9 h-9 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=320&amp;q=80"/>
<img alt="Urban gardener 2" className="w-9 h-9 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=320&amp;q=80"/>
<img alt="Urban gardener 3" className="w-9 h-9 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=320&amp;q=80"/>
<div className="w-9 h-9 rounded-full border-2 border-black bg-teal-400 flex items-center justify-center text-black text-xs font-medium">10k+</div>
</div>
<div>
<p className="text-sm font-medium text-gray-100">Urban gardeners in our community</p>
<p className="text-sm text-gray-400">Balconies, windowsills, and more</p>
</div>
</div>
</div>
<div className="relative">
<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gray-900/40" data-animate="right" data-delay="150">
<img alt="Small space garden" className="w-full h-[460px] object-cover" src="https://images.unsplash.com/photo-1553530979-7ee52e67c9bd?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-4 right-4 backdrop-blur-sm rounded-xl p-4 shadow-lg bg-black/80 border border-white/10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 flex bg-gray-800 rounded-full items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-leaf w-5 h-5 text-gray-200" data-lucide="leaf" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a8.001 8.001 0 0 0-8 8c0 4.418 3.582 8 8 8a8.001 8.001 0 0 0 8-8C19 7 16 3 11 3Z"></path><path d="M12 20C12 10 6 4 2 4"></path></svg>
</div>
<div>
<p className="text-sm text-gray-300">Plants thriving</p>
<p className="text-lg font-semibold text-white">+25k</p>
</div>
</div>
</div>
<div className="absolute bottom-4 left-4 backdrop-blur-sm rounded-xl p-4 shadow-lg bg-black/80 border border-white/10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 flex bg-gray-800 rounded-full items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-users w-5 h-5 text-gray-300" data-lucide="users" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div>
<p className="text-sm text-gray-300">Community members</p>
<p className="text-lg font-semibold text-white">10k+</p>
</div>
</div>

<div className="mt-3 w-44 h-16">
<div className="w-full h-full">
<canvas id="miniChart"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-12 border-t border-white/10 pt-8">
<p className="text-center text-sm text-gray-400 mb-6" data-animate="up" data-delay="0">Grow together with focused micro-communities</p>
<div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
<div className="flex items-center justify-center gap-2 text-gray-400 hover:text-teal-300 transition-colors" data-animate="up" data-delay="50">
<svg aria-hidden="true" className="lucide lucide-flower-2 w-5 h-5" data-lucide="flower-2" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
<span className="text-sm">Balcony Blooms</span>
</div>
<div className="flex items-center justify-center gap-2 text-gray-400 hover:text-teal-300 transition-colors" data-animate="up" data-delay="100">
<svg aria-hidden="true" className="lucide w-5 h-5" data-lucide="basil" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s-7-4-7-10a7 7 0 0 1 14 0c0 6-7 10-7 10Z"></path><path d="M12 22V7"></path></svg>
<span className="text-sm">Kitchen Herbs</span>
</div>
<div className="flex items-center justify-center gap-2 text-gray-400 hover:text-teal-300 transition-colors" data-animate="up" data-delay="150">
<svg aria-hidden="true" className="lucide lucide-sun w-5 h-5" data-lucide="sun" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
<span className="text-sm">Windowsill Wonders</span>
</div>
<div className="flex items-center justify-center gap-2 text-gray-400 hover:text-teal-300 transition-colors" data-animate="up" data-delay="200">
<svg aria-hidden="true" className="lucide lucide-droplets w-5 h-5" data-lucide="droplets" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
<span className="text-sm">DIY Hydroponics</span>
</div>
<div className="flex items-center justify-center gap-2 text-gray-400 hover:text-teal-300 transition-colors" data-animate="up" data-delay="250">
<svg aria-hidden="true" className="lucide lucide-recycle w-5 h-5" data-lucide="recycle" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
<span className="text-sm">Eco Living</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-950" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<p className="text-sm font-medium uppercase tracking-wider text-teal-300/90" data-animate="up" data-delay="0">About Us</p>
<h2 className="mt-3 text-3xl lg:text-4xl tracking-tight font-medium text-white" data-animate="left" data-delay="100" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, sans-serif'}}>
            Our Mission
          </h2>
<p className="mt-6 text-gray-400 text-lg" data-animate="up" data-delay="200">
            At LeafNest, we believe you don’t need acres of land to enjoy the beauty and benefits of gardening. With creativity, the right tools, and a little guidance, anyone can grow fresh herbs, veggies, and plants—right in the heart of the city.
          </p>
<div className="mt-6 border-t border-white/10 pt-6">
<h3 className="text-xl font-medium text-white tracking-tight">Our Story</h3>
<p className="mt-3 text-gray-400 text-base">
              Born out of the challenge of living in cramped apartments with a love for greenery, LeafNest was created to make gardening accessible, fun, and sustainable for everyone.
            </p>
</div>
<div className="mt-6" data-animate="up" data-delay="350">
<a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium bg-gray-100 text-black hover:bg-gray-200 transition-all hover:scale-[1.02]" href="#features">
              Explore Features
              <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<img alt="Balcony garden" className="w-full h-56 sm:h-64 lg:h-72 object-cover border-white/10 border rounded-xl" data-animate="up" data-delay="50" src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Windowsill herbs" className="w-full h-56 sm:h-64 lg:h-72 object-cover border-white/10 border rounded-xl" data-animate="up" data-delay="150" src="https://images.unsplash.com/photo-1498654077810-12f1888510e2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="DIY planters" className="w-full h-56 sm:h-64 lg:h-72 object-cover border-white/10 border rounded-xl" data-animate="up" data-delay="250" src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Community growing" className="w-full h-56 sm:h-64 lg:h-72 object-cover border-white/10 border rounded-xl" data-animate="up" data-delay="350" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(45,212,191,0.08),transparent_70%)]" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<p className="text-sm font-medium uppercase tracking-wider text-teal-300/90" data-animate="up" data-delay="0">Features</p>
<h2 className="mt-3 text-3xl lg:text-4xl tracking-tight font-medium text-white" data-animate="left" data-delay="100" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, sans-serif'}}>
            Why LeafNest?
          </h2>
</div>
<a className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-gray-100 hover:bg-white/15 border border-white/10 transition-all hover:scale-[1.02]" href="#shop">
          Shop Now &amp; Start Growing
          <svg aria-hidden="true" className="lucide lucide-shopping-bag w-4 h-4" data-lucide="shopping-bag" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 2v4"></path><path d="M18 2v4"></path><path d="M2 7h20"></path><path d="M2 7l2 13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2l2-13"></path><path d="M16 11a4 4 0 0 1-8 0"></path></svg>
</a>
</div>
<div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group relative hover:bg-black/50 transition-colors overflow-hidden bg-black/40 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur" data-animate="up" data-delay="100">
<div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-teal-400/10 blur-2xl transition-opacity opacity-0 group-hover:opacity-100 pointer-events-none"></div>
<div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-maximize-2 w-5 h-5 text-gray-300" data-lucide="maximize-2" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M9 21H3v-6"></path><path d="m21 3-7 7"></path><path d="m3 21 7-7"></path></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Space-Smart Gardening</h3>
<p className="mt-2 text-sm text-gray-400">Solutions designed for balconies, windowsills, and tabletops.</p>
<ul className="mt-4 space-y-1.5 text-sm text-gray-400">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-teal-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Vertical planters</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-teal-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Compact kits</li>
</ul>
</div>

<div className="group relative hover:bg-black/50 transition-colors overflow-hidden bg-black/40 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur" data-animate="up" data-delay="150">
<div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-cyan-400/10 blur-2xl transition-opacity opacity-0 group-hover:opacity-100 pointer-events-none"></div>
<div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-box w-5 h-5 text-gray-300" data-lucide="box" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1.1-1.79l-7-3.5a2 2 0 0 0-1.8 0l-7 3.5A2 2 0 0 0 3 8v8a2 2 0 0 0 1.1 1.79l7 3.5a2 2 0 0 0 1.8 0l7-3.5A2 2 0 0 0 21 16Z"></path><path d="M3.3 7L12 12l8.7-5"></path><path d="M12 22V12"></path></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Beginner-Friendly Kits</h3>
<p className="mt-2 text-sm text-gray-400">Everything you need in one box, from seeds to soil.</p>
<ul className="mt-4 space-y-1.5 text-sm text-gray-400">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-teal-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Herb, veggie, and flower kits</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-teal-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Soil &amp; starter tools</li>
</ul>
</div>

<div className="group relative hover:bg-black/50 transition-colors overflow-hidden bg-black/40 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur" data-animate="up" data-delay="200">
<div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-emerald-400/10 blur-2xl transition-opacity opacity-0 group-hover:opacity-100 pointer-events-none"></div>
<div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-book-open-check w-5 h-5 text-gray-300" data-lucide="book-open-check" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M19 2H9a2 2 0 0 0-2 2v15a3 3 0 0 1 3-3h11"></path><path d="m16 12 2 2 4-4"></path></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">DIY Guides &amp; Tutorials</h3>
<p className="mt-2 text-sm text-gray-400">Step-by-step lessons for herbs, veggies, and houseplants.</p>
<ul className="mt-4 space-y-1.5 text-sm text-gray-400">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-teal-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Video + written guides</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-teal-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Seasonal tips</li>
</ul>
</div>

<div className="group relative hover:bg-black/50 transition-colors overflow-hidden bg-black/40 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur" data-animate="up" data-delay="250">
<div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-fuchsia-400/10 blur-2xl transition-opacity opacity-0 group-hover:opacity-100 pointer-events-none"></div>
<div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-recycle w-5 h-5 text-gray-300" data-lucide="recycle" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 9-3-1-1 3"></path><path d="M3 10a5 5 0 0 1 9-3.2"></path><path d="m15 15 3 1 1-3"></path><path d="M21 14a5 5 0 0 1-9 3.2"></path><path d="M7 22 4 19l3-3"></path><path d="M17 2l3 3-3 3"></path></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Eco-Friendly Living</h3>
<p className="mt-2 text-sm text-gray-400">Reduce waste, grow organic food, and reconnect with nature.</p>
<ul className="mt-4 space-y-1.5 text-sm text-gray-400">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-teal-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Composting basics</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-teal-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Water-wise tips</li>
</ul>
</div>

<div className="group relative hover:bg-black/50 transition-colors overflow-hidden bg-black/40 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur md:col-span-2 lg:col-span-1" data-animate="up" data-delay="300">
<div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-pink-400/10 blur-2xl transition-opacity opacity-0 group-hover:opacity-100 pointer-events-none"></div>
<div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-messages-square w-5 h-5 text-gray-300" data-lucide="messages-square" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2"></path><path d="M22 22 16 16H6a2 2 0 0 1-2-2V7"></path><path d="M2 2v7a2 2 0 0 0 2 2h10"></path></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Community Support</h3>
<p className="mt-2 text-sm text-gray-400">Join fellow urban gardeners sharing tips and successes.</p>
<a className="mt-4 inline-flex items-center gap-2 text-sm text-teal-300 hover:text-teal-200" href="#community">
            Start or join a group
            <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-950" id="community">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<p className="text-sm font-medium uppercase tracking-wider text-teal-300/90" data-animate="up" data-delay="0">Community Hub</p>
<h2 className="mt-3 text-3xl lg:text-4xl tracking-tight font-medium text-white" data-animate="left" data-delay="100" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, sans-serif'}}>
            Grow Together, Even in Small Spaces.
          </h2>
</div>
<a className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-black hover:bg-gray-200 transition-all hover:scale-[1.02]" href="#join">
          Start or Join a Group
          <svg aria-hidden="true" className="lucide lucide-users-round w-4 h-4" data-lucide="users-round" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 16a5 5 0 1 0-5-5"></path><path d="M12 16a5 5 0 0 1 5-5"></path><path d="M2 21a7 7 0 0 1 14 0"></path><path d="M20 21a7 7 0 0 0-7-7"></path></svg>
</a>
</div>
<div className="mt-10 grid lg:grid-cols-4 gap-6">

<article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-gray-900/60 to-black" data-animate="up" data-delay="100">
<div className="relative h-56">
<img alt="Balcony Blooms" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-4 left-4 flex items-center gap-2">
<span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/10">Balconies</span>
<span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/10">Seasonal</span>
</div>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight">Balcony Blooms</h3>
<p className="mt-1 text-sm text-gray-400">Share flower setups &amp; seasonal inspiration.</p>
<div className="mt-4 flex items-center justify-between">
<div className="text-sm text-gray-400"><span className="text-gray-200 font-medium">2.1k</span> posts</div>
<a className="inline-flex items-center gap-1 text-sm text-teal-300 hover:text-teal-200" href="#join">
                Join discussion
                <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-gray-900/60 to-black" data-animate="up" data-delay="150">
<div className="relative h-56">
<img alt="Kitchen Herbs Collective" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" src="https://images.unsplash.com/photo-1531685250784-7569952593d2?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-4 left-4 flex items-center gap-2">
<span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/10">Herbs</span>
<span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/10">Kitchen</span>
</div>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight">Kitchen Herbs Collective</h3>
<p className="mt-1 text-sm text-gray-400">Fresh basil, mint, and more—straight from your window.</p>
<div className="mt-4 flex items-center justify-between">
<div className="text-sm text-gray-400"><span className="text-gray-200 font-medium">1.4k</span> recipes</div>
<a className="inline-flex items-center gap-1 text-sm text-teal-300 hover:text-teal-200" href="#join">
                Share a tip
                <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-gray-900/60 to-black" data-animate="up" data-delay="200">
<div className="relative h-56">
<img alt="Windowsill Wonders" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-4 left-4 flex items-center gap-2">
<span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/10">Windowsill</span>
<span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/10">Micro-plants</span>
</div>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight">Windowsill Wonders</h3>
<p className="mt-1 text-sm text-gray-400">Showcase thriving micro-plants in the smallest spaces.</p>
<div className="mt-4 flex items-center justify-between">
<div className="text-sm text-gray-400"><span className="text-gray-200 font-medium">900+</span> showcases</div>
<a className="inline-flex items-center gap-1 text-sm text-teal-300 hover:text-teal-200" href="#join">
                Post yours
                <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-gray-900/60 to-black" data-animate="up" data-delay="250">
<div className="relative h-56">
<img alt="DIY Hydroponics" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-4 left-4 flex items-center gap-2">
<span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/10">Hydro</span>
<span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/10">DIY</span>
</div>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight">DIY Hydroponics</h3>
<p className="mt-1 text-sm text-gray-400">Learn modern small-space gardening techniques.</p>
<div className="mt-4 flex items-center justify-between">
<div className="text-sm text-gray-400"><span className="text-gray-200 font-medium">1.1k</span> tutorials</div>
<a className="inline-flex items-center gap-1 text-sm text-teal-300 hover:text-teal-200" href="#join">
                Learn how
                <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
</div>
</div>
</article>
</div>
<div className="mt-8 text-center">
<a className="inline-flex items-center gap-2 text-sm text-teal-300 hover:text-teal-200" href="#join">
          Start or join a group to connect with fellow plant lovers in your city
          <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
</div>
</div>
</section>

<section className="py-20 bg-black" id="resources">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<p className="text-sm font-medium uppercase tracking-wider text-teal-300/90" data-animate="up" data-delay="0">Learning</p>
<h2 className="mt-3 text-3xl lg:text-4xl tracking-tight font-medium text-white" data-animate="left" data-delay="100" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, sans-serif'}}>
            Your Green Thumb Guide.
          </h2>
</div>
<div className="hidden sm:flex items-center gap-2 text-sm text-gray-400" title="Pro tip: Herbs love sunny windowsills!">
<svg aria-hidden="true" className="lucide lucide-info w-4 h-4" data-lucide="info" fill="none" height="20" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"></svg>
          Pro tip: Herbs love sunny windowsills!
        </div>
</div>
<div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="p-5 rounded-xl border border-white/10 bg-black/40">
<h3 className="text-lg font-semibold tracking-tight">How-To Guides</h3>
<p className="mt-2 text-sm text-gray-400">Balcony gardens, vertical planters, and herb starters.</p>
</div>
<div className="p-5 rounded-xl border border-white/10 bg-black/40">
<h3 className="text-lg font-semibold tracking-tight">Mini Harvest Recipes</h3>
<p className="mt-2 text-sm text-gray-400">Cook with your own homegrown produce.</p>
</div>
<div className="p-5 rounded-xl border border-white/10 bg-black/40">
<h3 className="text-lg font-semibold tracking-tight">DIY Hacks</h3>
<p className="mt-2 text-sm text-gray-400">Upcycle bottles, shelves, and crates into planters.</p>
</div>
<div className="p-5 rounded-xl border border-white/10 bg-black/40">
<h3 className="text-lg font-semibold tracking-tight">Eco Living</h3>
<p className="mt-2 text-sm text-gray-400">Sustainable gardening tips for city life.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-950" id="shop">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<p className="text-sm font-medium uppercase tracking-wider text-teal-300/90" data-animate="up" data-delay="0">Shop</p>
<h2 className="mt-3 text-3xl lg:text-4xl tracking-tight font-medium text-white" data-animate="left" data-delay="100" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, sans-serif'}}>
            Starter Kits &amp; Urban Garden Tools.
          </h2>
</div>
<a className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-black hover:bg-gray-200 transition-all hover:scale-[1.02]" href="#join">
          Join for Free
          <svg aria-hidden="true" className="lucide lucide-user-plus w-4 h-4" data-lucide="user-plus" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
</div>
<div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="rounded-2xl border border-white/10 bg-black/40 overflow-hidden">
<img alt="Balcony Garden Starter Pack" className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight">Balcony Garden Starter Pack 🌱</h3>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-black/40 overflow-hidden">
<img alt="Kitchen Herb Kit" className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1528821154947-1aa3d1b41601?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight">Kitchen Herb Kit 🍃</h3>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-black/40 overflow-hidden">
<img alt="Vertical Wall Planter" className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1560699228-ef62d93f5a87?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight">Vertical Wall Planter 🪴</h3>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-black/40 overflow-hidden">
<img alt="Compact Hydroponic Kit" className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight">Compact Hydroponic Kit 💧</h3>
</div>
</div>
</div>
<div className="mt-8 text-center">
<a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium bg-gray-100 text-black hover:bg-gray-200 transition-all hover:scale-[1.02]" href="#join">
          Shop Now &amp; Start Growing
          <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
</div>
</div>
</section>

<section className="py-20 bg-black" id="join">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10">
<div>
<p className="text-sm font-medium uppercase tracking-wider text-teal-300/90" data-animate="up" data-delay="0">Membership</p>
<h2 className="mt-3 text-3xl lg:text-4xl tracking-tight font-medium text-white" data-animate="left" data-delay="100" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, sans-serif'}}>
            Ready to Green Your Space?
          </h2>
<p className="mt-4 text-gray-400" data-animate="up" data-delay="200">
            No matter how small your space is, LeafNest helps you make it bloom. Get started with free guides, supportive communities, and exclusive gardening kits.
          </p>
<div className="mt-8 grid sm:grid-cols-2 gap-4">
<div className="p-5 rounded-xl border border-white/10 bg-black/40">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 text-gray-300" data-lucide="star" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 .75 3.09 6.26 6.91 1-5 4.86 1.18 6.88L12 17l-6.18 3.25L7 12.87l-5-4.86 6.91-1L12 .75z"></path></svg>
</div>
<div>
<p className="text-base font-medium">Free to join</p>
<p className="text-sm text-gray-400">Guides, groups, and tips</p>
</div>
</div>
</div>
<div className="p-5 rounded-xl border border-white/10 bg-black/40">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-gift w-5 h-5 text-gray-300" data-lucide="gift" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="18" x="3" y="8"></rect><path d="M12 8v12"></path><path d="M7.5 8 12 4l4.5 4"></path><path d="M2 8h20"></path></svg>
</div>
<div>
<p className="text-base font-medium">Member-only deals</p>
<p className="text-sm text-gray-400">Exclusive starter kits</p>
</div>
</div>
</div>
</div>
<p className="mt-6 text-sm text-gray-400">Your nest is waiting for its first leaf 🌱.</p>
</div>

<form className="p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-gray-950 to-black" id="contact-form">
<div className="space-y-3">
<p className="text-base text-gray-300">Join free to access guides and community, or grab a starter kit to begin today.</p>
<div className="flex flex-col sm:flex-row gap-3 mt-4">
<button className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-medium bg-teal-400 text-black hover:bg-teal-300 transition-all hover:scale-[1.02]" type="submit">
                Join for Free
                <svg aria-hidden="true" className="lucide lucide-user-plus w-4 h-4" data-lucide="user-plus" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
</button>
<a className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-medium bg-white/10 text-gray-100 hover:bg-white/15 border border-white/10 transition-all hover:scale-[1.02]" href="#shop">
                Get Your Starter Kit
                <svg aria-hidden="true" className="lucide lucide-shopping-bag w-4 h-4" data-lucide="shopping-bag" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
</div>
</div>
<p className="mt-3 text-xs text-gray-500" id="form-hint">A few clicks today, a greener space tomorrow.</p>
</form>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-gray-950">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="grid md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<a className="inline-flex items-center gap-2" href="#home">
<div className="h-6 w-6 rounded-md bg-gradient-to-br from-teal-500 to-cyan-400"></div>
<span className="text-lg font-medium" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, sans-serif'}}>LeafNest</span>
</a>
<p className="mt-3 text-sm text-gray-400 max-w-md">Grow Green, Live Big. Turn small spaces into thriving green sanctuaries.</p>
<div className="mt-4 flex items-center gap-3">
<a className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200" href="mailto:hello@leafnest.co">
<svg aria-hidden="true" className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
              hello@leafnest.co
            </a>
<span className="text-gray-700">•</span>
<a className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200" href="#join">
<svg aria-hidden="true" className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Remote-first
            </a>
</div>
</div>
<div>
<p className="text-sm font-medium text-gray-300">Navigate</p>
<ul className="mt-3 space-y-2 text-sm text-gray-400">
<li><a className="hover:text-teal-300" href="#about">About</a></li>
<li></li></ul></div></div></div></footer>
    </>
  );
}
