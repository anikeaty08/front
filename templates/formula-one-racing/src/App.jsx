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



        // Banner Close Functionality
        function closeBanner() {
            const banner = document.getElementById('announcement-banner');
            banner.style.height = '0px';
            banner.style.opacity = '0';
            banner.style.padding = '0';
            setTimeout(() => {
                banner.remove();
            }, 300); // Wait for transition to finish
        }

        // Mobile Menu Toggle Functionality
        let isMenuOpen = false;
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            const icon = document.getElementById('menu-icon');
            
            isMenuOpen = !isMenuOpen;
            
            if (isMenuOpen) {
                menu.classList.remove('hidden');
                // Small delay to allow display:block to apply before animating opacity
                requestAnimationFrame(() => {
                    menu.classList.remove('opacity-0');
                    menu.classList.add('opacity-100');
                });
                icon.setAttribute('icon', 'solar:close-linear');
            } else {
                menu.classList.remove('opacity-100');
                menu.classList.add('opacity-0');
                // Wait for fade out to finish before hiding
                setTimeout(() => {
                    if (!isMenuOpen) menu.classList.add('hidden');
                }, 300);
                icon.setAttribute('icon', 'solar:hamburger-menu-linear');
            }
        }
    
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
      

<div className="flex h-screen flex-col overflow-hidden w-full relative">

<div className="sticky top-0 z-[100] flex shrink-0 h-[4.5rem] w-full items-center justify-center bg-[#431616] px-5 lg:px-8 overflow-hidden transition-all duration-300" id="announcement-banner">

<img alt="Banner Texture" className="absolute inset-0 h-full w-full object-cover mix-blend-lighten opacity-60 pointer-events-none" src="https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/686653b6258546b44cfc6931_banner-bg-4.webp"/>
<div className="relative z-10 flex w-full max-w-[1800px] items-center justify-between mx-auto">

<p className="text-[#fcf8f1] sm:text-base text-sm font-normal pr-4">
                    Every lap counts, every second matters. Push beyond the limits on every circuit.
                </p>

<div className="flex items-center gap-4 shrink-0">
<button className="hidden sm:flex items-center justify-center bg-black text-[#fcf8f1] rounded-full h-10 lg:h-12 px-6 lg:px-8 hover:opacity-80 transition-opacity whitespace-nowrap">
                        Explore the grid
                    </button>
<button aria-label="Close banner" className="text-[#fcf8f1]/70 hover:text-[#fcf8f1] transition-colors flex items-center justify-center h-8 w-8 rounded-full hover:bg-black/20" onclick="closeBanner()">
<iconify-icon height="20" icon="solar:close-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="relative mx-auto flex min-h-0 flex-1 w-full max-w-[1800px] flex-col p-3 sm:p-5 lg:p-[30px]">

<nav className="absolute left-0 right-0 top-0 z-[98] mx-auto flex max-w-[calc(100%-60px)] items-center justify-between px-5 pb-5 pt-8 sm:px-8 sm:pt-10 lg:pb-7 lg:pt-12 pointer-events-none">
<div className="flex-1 pointer-events-auto flex items-center">

<div className="sm:text-2xl uppercase text-xl font-normal text-[#fcf8f1] tracking-tighter">Mirrin</div>
</div>

<div className="hidden lg:flex items-center justify-center pointer-events-auto">
<div className="flex items-center bg-black/10 backdrop-blur-md rounded-full p-1 border border-white/5">
<a className="rounded-full h-9 px-5 flex items-center justify-center text-base hover:bg-white/10 transition-colors text-[#fcf8f1]" href="#">Standings</a>
<a className="rounded-full h-9 px-5 flex items-center justify-center text-base hover:bg-white/10 transition-colors text-[#fcf8f1]" href="#">Drivers</a>
<a className="rounded-full h-9 px-5 flex items-center justify-center text-base hover:bg-white/10 transition-colors text-[#fcf8f1]" href="#">Grand Prix</a>
<a className="rounded-full h-9 px-5 flex items-center justify-center text-base hover:bg-white/10 transition-colors text-[#fcf8f1]" href="#">News</a>
</div>
<a className="border border-[#f2ece2]/30 rounded-full h-9 px-6 ml-4 flex items-center justify-center text-base hover:border-[#f2ece2] hover:bg-white/10 transition-all text-[#fcf8f1]" href="#">
                        Gear
                    </a>
</div>

<div className="flex-1 flex justify-end items-center gap-4 sm:gap-6 pointer-events-auto">

<button className="hidden lg:flex items-center gap-1.5 text-[#fcf8f1]/60 hover:text-[#fcf8f1] transition-colors text-sm">
<span>EN</span>
<iconify-icon height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</button>

<div className="flex items-center gap-3 cursor-pointer group">
<span className="hidden sm:block text-base text-[#fcf8f1]/80 group-hover:text-[#fcf8f1] transition-colors">Gear</span>
<div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#fcf8f1]/40 group-hover:border-[#fcf8f1] group-hover:bg-white/10 transition-all">
<iconify-icon className="text-[#fcf8f1]" height="18" icon="solar:cart-large-linear" width="18"></iconify-icon>
</div>
</div>

<button className="lg:hidden flex h-9 w-9 items-center justify-center rounded-full border border-[#fcf8f1]/40 hover:bg-white/10 hover:border-[#fcf8f1] transition-all" id="mobile-menu-btn" onclick="toggleMobileMenu()">
<iconify-icon className="text-[#fcf8f1]" height="20" icon="solar:hamburger-menu-linear" id="menu-icon" width="20"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-x-4 top-[88px] z-[99] hidden flex-col gap-1 rounded-[24px] bg-[#431616]/95 backdrop-blur-2xl p-4 border border-white/10 shadow-2xl opacity-0 transition-opacity duration-300" id="mobile-menu">
<a className="flex h-12 items-center rounded-xl px-5 text-lg text-[#fcf8f1] hover:bg-white/10 transition-colors" href="#">Standings</a>
<a className="flex h-12 items-center rounded-xl px-5 text-lg text-[#fcf8f1] hover:bg-white/10 transition-colors" href="#">Drivers</a>
<a className="flex h-12 items-center rounded-xl px-5 text-lg text-[#fcf8f1] hover:bg-white/10 transition-colors" href="#">Grand Prix</a>
<a className="flex h-12 items-center rounded-xl px-5 text-lg text-[#fcf8f1] hover:bg-white/10 transition-colors" href="#">News</a>
<div className="h-[1px] w-full bg-white/10 my-2"></div>
<a className="flex h-12 items-center justify-center rounded-xl px-5 text-lg text-[#111] bg-[#fcf8f1] font-normal hover:opacity-90 transition-opacity mt-1" href="#">Explore Gear</a>
</div>

<div className="hero-container relative flex h-full w-full flex-col items-center justify-end overflow-hidden rounded-[24px] pb-10 sm:rounded-[32px] sm:pb-14 lg:rounded-[40px] lg:pb-16 bg-[#111]">

<video autoplay="" className="hero-video -z-20 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 scale-105" loop="" muted="" playsinline="" src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260224_065101_65645fec-7465-442a-996f-4cc13526966f.mp4"></video>

<div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

<div className="relative z-10 w-full max-w-[500px] px-6 text-center lg:max-w-none flex flex-col items-center pointer-events-none">
<p className="hero-subtitle text-[#f2ece2]/70 text-sm sm:text-base lg:text-lg font-light tracking-wide">
                        Formula One Racing: speed, skill, and raw passion
                    </p>
<h1 className="hero-title mt-2 text-[#fcf8f1] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tighter lg:mt-3">
                        Born to race, built fast
                    </h1>
</div>
</div>
</div>
</div>



    </>
  );
}
