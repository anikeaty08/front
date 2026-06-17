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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



    (function() {
      const menuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');
      const hamburgerIcon = document.getElementById('hamburger-icon');
      const closeIcon = document.getElementById('close-icon');
      
      if (menuButton && mobileMenu && hamburgerIcon && closeIcon) {
        menuButton.addEventListener('click', function() {
          const isMenuOpen = !mobileMenu.classList.contains('hidden');
          
          if (isMenuOpen) {
            // Close menu
            mobileMenu.classList.add('hidden');
            hamburgerIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
          } else {
            // Open menu
            mobileMenu.classList.remove('hidden');
            hamburgerIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
          }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
          if (!menuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.add('hidden');
            hamburgerIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
          }
        });

        // Close menu on window resize to desktop size
        window.addEventListener('resize', function() {
          if (window.innerWidth >= 768) { // md breakpoint
            mobileMenu.classList.add('hidden');
            hamburgerIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
          }
        });
      }
    })();
  


    document.addEventListener('DOMContentLoaded', () => {
      const targetEl = document.querySelector('[data-element-id="aura-emftr7nkh"]');
      if (!targetEl) return;

      const animateElements = targetEl.querySelectorAll('[data-animate]');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateElements.forEach(element => {
              // Remove animation start states to trigger the transition
              element.classList.remove('opacity-0', 'translate-y-8', 'blur-md');
            });
            // Stop observing once the animation has been triggered
            observer.unobserve(targetEl);
          }
        });
      }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
      });

      observer.observe(targetEl);
    });
  


    document.addEventListener('DOMContentLoaded', () => {
      const targetEl = document.getElementById('training-program');
      if (!targetEl) return;

      const animateElements = targetEl.querySelectorAll('[data-animate]');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateElements.forEach(element => {
              // Remove animation start states to trigger the transition
              element.classList.remove('opacity-0', 'translate-y-8', 'blur-md');
            });
            // Stop observing once the animation has been triggered
            observer.unobserve(targetEl);
          }
        });
      }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
      });

      observer.observe(targetEl);
    });
  


    document.addEventListener('DOMContentLoaded', () => {
      const targetEl = document.getElementById('course');
      if (!targetEl) return;

      const animateElements = targetEl.querySelectorAll('[data-animate]');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateElements.forEach(element => {
              // Remove animation start states to trigger the transition
              element.classList.remove('opacity-0', 'translate-y-8', 'blur-md');
            });
            // Stop observing once the animation has been triggered
            observer.unobserve(targetEl);
          }
        });
      }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
      });

      observer.observe(targetEl);
    });
  


    document.addEventListener('DOMContentLoaded', () => {
      const targetEl = document.getElementById('aura-emfs7mn0g');
      if (!targetEl) return;

      const cards = targetEl.children;

      // Ensure we don't select the script tag itself
      const cardElements = Array.from(cards).filter(el => el.tagName !== 'SCRIPT');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            cardElements.forEach(card => {
              // Remove animation start states to trigger the transition
              card.classList.remove('opacity-0', 'translate-y-8', 'blur-md');
            });
            // Stop observing once the animation has been triggered
            observer.unobserve(targetEl);
          }
        });
      }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
      });

      observer.observe(targetEl);
    });
    if (window.lucide) {
        lucide.createIcons();
    }
  


    window.addEventListener('DOMContentLoaded', () => {
      if (window.lucide && lucide.createIcons) {
        lucide.createIcons();
      }
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
      

<div className="aura-background-component top-0 w-full -z-10 absolute h-[1000px]"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="ty3N7ZPaIU7KlWixQFIc"></div>
</div>
<header className="relative">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex pt-8 pb-8 items-center justify-between">

<a className="inline-flex items-center justify-center bg-center mix-blend-multiply w-[130px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cabcb3dd-d3a2-48fd-9b67-55ddd5de69ce_800w.jpg)] bg-cover rounded invert" href="/"></a>

<nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600">
<a className="hover:text-neutral-900 transition-colors font-geist" href="/about">What We Do</a>
<a className="hover:text-neutral-900 transition-colors font-geist" href="/causes">Causes</a><a className="hover:text-neutral-900 transition-colors font-geist" href="/team">Team</a>
<a className="hover:text-neutral-900 transition-colors font-geist" href="/blogs">Blogs</a>
<a className="inline-flex items-center gap-2 hover:bg-neutral-800 transition-colors font-medium text-white font-geist bg-neutral-900 rounded-full pt-2 pr-4 pb-2 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="/pricing">
          Donate Now
          <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</nav>

<button aria-label="Toggle menu" className="md:hidden inline-flex hover:bg-neutral-100 transition-colors bg-neutral-50 w-10 h-10 rounded-full items-center justify-center" id="mobile-menu-button">
<svg className="text-neutral-900" fill="none" height="20" id="hamburger-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12h18"></path>
<path d="M3 6h18"></path>
<path className="" d="M3 18h18"></path>
</svg>
<svg className="text-neutral-900 hidden" data-icon-replaced="true" fill="none" height="20" id="close-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(23, 23, 23)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M18 6 6 18"></path>
<path className="" d="M6 6l12 12"></path>
</svg>
</button>
</div>

<div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-neutral-200 shadow-lg z-50 hidden" id="mobile-menu">
<nav className="pt-6 pr-6 pb-6 pl-6 space-y-4">
<a className="block hover:text-neutral-900 transition-colors text-base text-neutral-600 font-geist pt-2 pb-2" href="/about">What We Do</a>
<a className="block hover:text-neutral-900 transition-colors text-base text-neutral-600 font-geist pt-2 pb-2" href="/causes">Causes</a>
<a className="block hover:text-neutral-900 transition-colors text-base text-neutral-600 font-geist pt-2 pb-2" href="/team">Team</a>
<a className="block hover:text-neutral-900 transition-colors text-base text-neutral-600 font-geist pt-2 pb-2" href="/blogs">Blogs</a>
<div className="pt-4 border-t border-neutral-200">
<a className="inline-flex items-center gap-2 hover:bg-neutral-800 transition-colors justify-center font-medium text-white font-geist bg-neutral-900 w-full rounded-full pt-3 pr-4 pb-3 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="/pricing">
            Donate Now
            
          <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
</nav>
</div>
</div>

</header>
<main className="">
<section className="sm:px-8 max-w-7xl mr-auto ml-auto pr-6 pb-16 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

<div className="max-w-xl" data-element-id="aura-emftr7nkh">

<div className="flex gap-3 mb-6 items-center opacity-0 translate-y-8 blur-md transition-all duration-700 ease-out" data-animate="">
<div className="flex -space-x-2">
<img alt="Member avatar 1" className="ring-2 ring-white w-7 h-7 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5aa0d46a-9a98-4044-bce9-68ec849538ef_320w.jpg"/>
<img alt="Member avatar 2" className="w-7 h-7 object-cover ring-white ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a847bbaa-3964-40c8-ad91-98b3d6429867_320w.jpg" style={{}}/>
<img alt="Member avatar 3" className="w-7 h-7 object-cover ring-white ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/054cd9f9-ea66-4ac7-8e45-659730cfc5a3_320w.jpg" style={{}}/>
</div>
<p className="text-sm text-neutral-600 font-geist">
<span className="font-medium text-neutral-900 font-geist">1000+</span> donor active members
    </p>
</div>

<h1 className="sm:text-5xl lg:text-[64px] leading-[1.05] text-4xl font-medium tracking-tighter font-geist mb-6 opacity-0 translate-y-8 blur-md transition-all duration-700 ease-out delay-150" data-animate="" data-element-id="aura-emftr7mpt">
    Sense for a brighter future
  </h1>
<p className="sm:text-lg leading-relaxed text-base text-neutral-600 font-geist mb-8 opacity-0 translate-y-8 blur-md transition-all duration-700 ease-out delay-300" data-animate="">
    Join Sense to create tangible impact across communities worldwide. Your support brings hope, resources, and opportunity.
  </p>

<div className="flex items-center gap-5 mb-12 opacity-0 translate-y-8 blur-md transition-all duration-700 ease-out delay-[450ms]" data-animate="">
<a className="group inline-flex items-center hover:bg-neutral-800 transition-colors font-medium text-white bg-neutral-900 rounded-full pt-3 pr-3 pb-3 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="#">
<span className="font-geist">Donate Now</span>
<span className="ml-3 inline-flex items-center justify-center h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/15 group-hover:bg-white/15">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</a>
<a className="inline-flex items-center gap-2 text-neutral-900 font-medium hover:opacity-80 font-geist" href="#">
      Learn More
      <svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</a>
</div>

<div className="opacity-0 translate-y-8 blur-md transition-all duration-700 ease-out delay-[600ms]" data-animate="">
<p className="text-sm text-neutral-500 font-geist mb-4">Our most loved partners</p>
<div className="flex gap-6 sm:gap-10 items-center">
<a className="inline-flex items-center justify-center bg-center mix-blend-multiply w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ffc4abed-7f85-4259-810c-a0223b0bd624_320w.jpg)] bg-cover rounded invert" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-multiply w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/570e9153-7c3d-4273-9119-04a156b424ab_320w.jpg)] bg-cover rounded invert" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-multiply w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7808c442-c8f8-4c6b-bea1-00daffbaea4d_320w.jpg)] bg-cover rounded invert" href="#"></a>
</div>
</div>

</div>

<div className="relative">
<div className="relative overflow-hidden ring-1 ring-black/10 bg-neutral-50 rounded-[28px] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<style>
                @keyframes marquee-vertical {
                    from { transform: translateY(0); }
                    to { transform: translateY(-50%); }
                }
                .animate-marquee-vertical {
                    animation: marquee-vertical 40s linear infinite;
                }
            </style>
<div className="relative sm:h-[760px] h-[600px] overflow-hidden">
<img alt="Community volunteers" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/83622075-3856-42e4-b240-0a0d6f838a20_1600w.jpg" style={{}}/>

<div className="absolute top-4 right-4 flex gap-2 z-20 items-center">
<a className="sm:px-4 sm:text-sm hover:bg-black/70 transition ring-white/10 ring-1 text-xs text-white font-geist bg-black/60 rounded-full pt-2 pr-3 pb-2 pl-3 backdrop-blur-md" href="#">
                  Donation
                </a>
<a className="sm:px-4 ring-1 ring-white/10 sm:text-sm hover:bg-black/70 transition text-xs text-white font-geist bg-black/60 rounded-full pt-2 pr-3 pb-2 pl-3 backdrop-blur-md" href="#">
                  Blogs
                </a>
<a className="px-3 sm:px-4 py-2 rounded-full bg-black/75 backdrop-blur-md ring-1 ring-white/15 text-xs sm:text-sm text-white font-medium hover:bg-black/85 transition font-geist" href="#">
                  Donate Now
                </a>
</div>

<div className="absolute inset-0" style={{maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'}}>

<div className="animate-marquee-vertical">

<div className="relative sm:h-[760px] w-full h-[600px]">

<div className="absolute left-4 sm:left-6 top-20 sm:top-64 max-w-[260px] sm:max-w-xs">
<div className="flex gap-3 sm:px-5 sm:py-4 ring-white/10 ring-1 bg-black/70 rounded-3xl pt-3 pr-4 pb-3 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur-md items-start">
<img alt="Beneficiary avatar" className="w-8 h-8 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/12e9831e-2c6d-4dc7-bcd1-8537ce99de9d_320w.jpg" style={{}}/>
<p className="text-[13px] sm:text-sm leading-snug text-white/90 font-geist">"Because of Sense, I was given hope and a second chance."</p>
</div>
</div>

<div className="absolute left-6 sm:left-10 top-1/2 -translate-y-1/2">
<div className="flex gap-3 bg-black/70 ring-white/10 ring-1 rounded-full pt-2 pr-2 pb-2 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur-md items-center">
<span className="text-[13px] sm:text-sm text-white/90 font-geist">Watch our story reel</span>
<button aria-label="Play video" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-black hover:bg-white/90 transition">
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>
</div>

<div className="absolute left-4 sm:left-6 bottom-6">
<div className="px-3.5 py-2 rounded-full bg-black/70 backdrop-blur-md ring-1 ring-white/10 text-[12px] sm:text-xs text-white/90 shadow-sm font-geist">
                                Real lives changed by your support
                            </div>
</div>

<div className="absolute right-4 sm:right-6 bottom-4 sm:bottom-32 w-[230px] sm:w-[260px]">
<div className="bg-black/70 ring-white/10 ring-1 rounded-3xl pt-4 pr-4 pb-4 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur-md">
<p className="font-medium text-white mb-1 tracking-tight font-geist">Dedicated team</p>
<p className="text-[13px] text-white/80 leading-snug mb-3 font-geist">
                                    Providing essential resources and aid to those who are in need in emergency.
                                </p>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<img alt="Team avatar 1" className="h-7 w-7 rounded-full ring-2 ring-black object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/133a6630-e785-43ed-bfa8-5066fe4bde1d_320w.jpg"/>
<img alt="Team avatar 2" className="h-7 w-7 rounded-full ring-2 ring-black object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/29fed605-bdd0-43de-9279-66c47c7319c2_320w.jpg"/>
<img alt="Team avatar 3" className="h-7 w-7 rounded-full ring-2 ring-black object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/acf4a275-4392-4642-8251-df704e9886a6_320w.jpg"/>
<img alt="Team avatar 4" className="h-7 w-7 rounded-full ring-2 ring-black object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9db66d20-f0d3-4b6f-b063-df902515dc0b_320w.jpg"/>
</div>
<div className="flex items-center gap-1 text-white/80">
<svg className="lucide lucide-users h-4 w-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-sm font-medium font-geist">50+</span>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-full sm:h-[760px] h-[600px]">

<div className="absolute left-4 sm:left-6 top-20 sm:top-24 max-w-[260px] sm:max-w-xs">
<div className="flex gap-3 sm:px-5 sm:py-4 bg-black/70 ring-white/10 ring-1 rounded-3xl pt-3 pr-4 pb-3 pl-4 shadow-sm backdrop-blur-md items-start">
<img alt="Beneficiary avatar" className="h-8 w-8 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dc8bd2b7-4838-4e1e-aa97-d9828c97ff57_320w.jpg"/>
<p className="text-[13px] sm:text-sm text-white/90 leading-snug font-geist">"Because of Sense, I was given hope and a second chance."</p>
</div>
</div>

<div className="absolute left-6 sm:left-10 top-1/2 -translate-y-1/2">
<div className="flex gap-3 ring-white/10 ring-1 bg-black/70 rounded-full pt-2 pr-2 pb-2 pl-4 shadow-sm backdrop-blur-md items-center">
<span className="text-[13px] sm:text-sm text-white/90 font-geist">Watch our story reel</span>
<button aria-label="Play video" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-black hover:bg-white/90 transition">
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>
</div>

<div className="absolute left-4 sm:left-6 bottom-6">
<div className="px-3.5 py-2 rounded-full bg-black/70 backdrop-blur-md ring-1 ring-white/10 text-[12px] sm:text-xs text-white/90 shadow-sm font-geist">
                                Real lives changed by your support
                            </div>
</div>

<div className="absolute right-4 sm:right-6 bottom-4 sm:bottom-6 w-[230px] sm:w-[260px]">
<div className="ring-1 ring-white/10 bg-black/70 rounded-3xl pt-4 pr-4 pb-4 pl-4 shadow-sm backdrop-blur-md">
<p className="font-medium text-white mb-1 tracking-tight font-geist">Dedicated team</p>
<p className="text-[13px] text-white/80 leading-snug mb-3 font-geist">
                                    Providing essential resources and aid to those who are in need in emergency.
                                </p>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<img alt="Team avatar 1" className="h-7 w-7 rounded-full ring-2 ring-black object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d6b4b5b4-f90c-4254-9d80-bb0f199bd3bf_320w.jpg"/>
<img alt="Team avatar 2" className="h-7 w-7 rounded-full ring-2 ring-black object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4feac9e0-d76c-4075-85a4-4dc143fa7c86_320w.jpg"/>
<img alt="Team avatar 3" className="h-7 w-7 rounded-full ring-2 ring-black object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4f1d5b02-76dd-4df0-a8d1-8961b047a61a_320w.jpg"/>
<img alt="Team avatar 4" className="h-7 w-7 rounded-full ring-2 ring-black object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/90a93b05-a430-46df-b71f-1522700a6736_320w.jpg"/>
</div>
<div className="flex items-center gap-1 text-white/80">
<svg className="lucide lucide-users h-4 w-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-sm font-medium font-geist">50+</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section><section className="sm:p-8 sm:py-8 relative bg-white max-w-7xl border-black/5 border rounded-3xl mt-32 mr-auto mb-20 ml-auto pt-12 pr-6 pb-12 pl-6" id="training-program">

<div className="max-w-3xl mx-auto text-center transition-all duration-700 ease-out" data-animate="">
<h2 className="sm:text-5xl lg:text-6xl leading-[1.05] text-4xl font-medium text-neutral-900 tracking-tighter font-geist">Join our Impact Training Program</h2>
<p className="sm:text-lg text-base text-neutral-600 mt-4 font-geist">Learn how to maximize your charitable impact and become a skilled changemaker. Transform your good intentions into measurable results.</p>
<div className="mt-6 flex items-center justify-center gap-3">
<a className="inline-flex items-center gap-2 hover:bg-neutral-800 transition text-sm font-medium text-white font-geist bg-neutral-900 h-11 rounded-full pr-5 pl-5 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="#enroll">
        Start Learning
        <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center h-11 px-5 rounded-full text-sm font-medium text-neutral-900 bg-white ring-1 ring-black/10 hover:bg-neutral-50 transition font-geist" href="#curriculum">
        View Programs
      </a>
</div>
</div>

<div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">

<article className="bg-white rounded-3xl ring-1 ring-black/5 shadow-lg overflow-hidden transition-all duration-700 ease-out delay-150" data-animate="">
<div className="bg-black rounded-2xl mx-4 mt-4 overflow-hidden">
<img alt="Community volunteer training" className="w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e202b3bf-44a7-4067-870b-90bf6761a2da_800w.jpg"/>
</div>
<div className="pt-5 pr-5 pb-5 pl-5">
<h3 className="text-lg font-semibold tracking-tight text-neutral-900 font-geist">Hands-on training</h3>
<p className="text-sm text-neutral-600 mt-2 font-geist">Learn directly from experienced humanitarian workers and community leaders worldwide.</p>
</div>
</article>

<article className="bg-white rounded-3xl ring-1 ring-black/5 shadow-lg overflow-hidden transition-all duration-700 ease-out delay-300" data-animate="">
<div className="bg-black rounded-2xl mx-4 mt-4 overflow-hidden">
<img alt="Impact measurement workshop" className="w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/03a90f56-64e4-4b02-9e04-1bb0f51de74c_800w.jpg"/>
</div>
<div className="pt-5 pr-5 pb-5 pl-5">
<h3 className="text-lg font-semibold tracking-tight text-neutral-900 font-geist">Impact measurement</h3>
<p className="text-sm text-neutral-600 mt-2 font-geist">Master the tools and techniques to track, measure, and amplify your charitable impact.</p>
</div>
</article>

<article className="bg-white rounded-3xl ring-1 ring-black/5 shadow-lg overflow-hidden transition-all duration-700 ease-out delay-[450ms]" data-animate="">
<div className="bg-black rounded-2xl mx-4 mt-4 overflow-hidden">
<img alt="Global changemaker network" className="w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ede50f82-0ad0-4579-a4ae-3a942856d03b_800w.jpg"/>
</div>
<div className="pt-5 pr-5 pb-5 pl-5">
<h3 className="text-lg font-semibold tracking-tight text-neutral-900 font-geist">Global network</h3>
<p className="text-sm text-neutral-600 mt-2 font-geist">Connect with passionate changemakers, share experiences, and collaborate on projects.</p>
</div>
</article>
</div>

<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-700 ease-out delay-[600ms]" data-animate="">
<div className="bg-neutral-100/50 ring-black/5 ring-1 rounded-3xl pt-6 pr-6 pb-6 pl-6">
<p className="text-3xl font-semibold tracking-tight text-neutral-900 font-geist">12</p>
<p className="text-sm text-neutral-600 mt-1 font-geist">training modules</p>
</div>
<div className="bg-neutral-100/50 ring-black/5 ring-1 rounded-3xl pt-6 pr-6 pb-6 pl-6">
<p className="text-3xl font-semibold tracking-tight text-neutral-900 font-geist">500+</p>
<p className="text-sm text-neutral-600 mt-1 font-geist">trained volunteers</p>
</div>
<div className="bg-neutral-100/50 ring-black/5 ring-1 rounded-3xl pt-6 pr-6 pb-6 pl-6">
<p className="text-3xl font-semibold tracking-tight text-neutral-900 font-geist">50+</p>
<p className="text-sm text-neutral-600 mt-1 font-geist">countries reached</p>
</div>
<div className="bg-neutral-100/50 ring-black/5 ring-1 rounded-3xl pt-6 pr-6 pb-6 pl-6">
<p className="text-3xl font-semibold text-neutral-900 tracking-tight font-geist">Free</p>
<p className="text-sm text-neutral-600 font-geist mt-1">for all members</p>
</div>
</div>

</section><section className="sm:px-8 mt-20 mb-20" id="course">
<div className="sm:py-28 max-w-7xl mr-auto ml-auto pt-20 pb-20">
<div className="sm:p-8 sm:py-8 bg-neutral-100/50 border-neutral-200/50 border rounded-3xl pt-6 pr-6 pb-6 pl-6">

<div className="text-center opacity-0 translate-y-8 blur-md transition-all duration-700 ease-out" data-animate="">
<span className="inline-flex items-center ring-1 ring-neutral-200 text-sm font-medium text-neutral-600 font-geist bg-white rounded-full pt-1 pr-3 pb-1 pl-3">Training Program</span>
<h2 className="sm:text-5xl lg:text-6xl text-4xl font-normal text-neutral-900 tracking-tighter font-geist mt-4">Master impactful giving and volunteering</h2>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mt-10 items-start">

<div className="lg:col-span-5 opacity-0 translate-y-8 blur-md transition-all duration-700 ease-out delay-150" data-animate="">
<div className="bg-white rounded-[28px] ring-1 ring-black/5 overflow-hidden shadow-lg">

<div className="bg-blue-600 p-6 sm:p-8">
<p className="text-white/90 text-sm font-geist">Training Program</p>
<p className="mt-2 text-white text-5xl sm:text-6xl font-semibold tracking-tight font-geist">Free</p>
<p className="mt-2 text-white/80 text-sm font-geist">For all active Sense members</p>
</div>

<div className="p-5 sm:p-6">
<div className="sm:p-5 bg-neutral-100/50 ring-black/5 ring-1 rounded-2xl pt-4 pr-4 pb-4 pl-4">
<h3 className="text-neutral-900 font-semibold tracking-tight font-geist">Impact Training: Maximizing Your Charitable Contribution</h3>
<p className="text-neutral-700 text-sm mt-2 font-geist">Learn evidence-based approaches to philanthropy and volunteering that create lasting positive change in communities.</p>
<div className="mt-3 flex items-center gap-3">
<div className="flex -space-x-2">
<img alt="Participant 1" className="ring-2 ring-white w-7 h-7 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e36aef18-f0f2-42d8-bcc3-86e5433f18f9_320w.jpg"/>
<img alt="Participant 2" className="w-7 h-7 object-cover ring-white ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/79e0a89c-b04e-4a65-b214-cc33e9601ecb_320w.jpg"/>
<img alt="Participant 3" className="w-7 h-7 object-cover ring-white ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/075e4814-03ac-46d1-bfeb-bb23651c0d08_320w.jpg"/>
</div>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs text-neutral-700 ring-1 ring-black/10 font-geist">
                500+ enrolled
              </span>
</div>
</div>

<div className="mt-6">
<p className="text-xs uppercase tracking-wider text-neutral-500 font-medium font-geist">What's included</p>
<ul className="mt-3 space-y-3">
<li className="flex items-start gap-3 text-neutral-900 text-sm font-geist">
<svg className="lucide lucide-check-circle-2 text-blue-600 mt-0.5 flex-shrink-0" data-lucide="check-circle-2" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                30 hours comprehensive training
              </li>
<li className="flex items-start gap-3 text-neutral-900 text-sm font-geist">
<svg className="lucide lucide-check-circle-2 text-blue-600 mt-0.5 flex-shrink-0" data-lucide="check-circle-2" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                Mentorship from experts
              </li>
<li className="flex items-start gap-3 text-neutral-900 text-sm font-geist">
<svg className="lucide lucide-check-circle-2 text-blue-600 mt-0.5 flex-shrink-0" data-lucide="check-circle-2" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                Community network access
              </li>
<li className="flex items-start gap-3 text-neutral-900 text-sm font-geist">
<svg className="lucide lucide-check-circle-2 text-blue-600 mt-0.5 flex-shrink-0" data-lucide="check-circle-2" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                Impact certification
              </li>
</ul>
</div>
</div>

<div className="pr-5 pb-5 pl-5">
<a className="inline-flex items-center justify-center hover:bg-neutral-800 transition text-sm font-medium text-white font-geist bg-neutral-900 w-full h-12 rounded-2xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="#enroll">
            Join Training Program
            <svg className="lucide lucide-arrow-right ml-2" data-lucide="arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>

<div className="lg:col-span-1 flex items-center justify-center opacity-0 translate-y-8 blur-md transition-all duration-700 ease-out delay-300" data-animate="">
<div className="h-full w-px bg-gradient-to-b from-transparent via-neutral-300 to-transparent min-h-96 hidden lg:block"></div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent lg:hidden"></div>
</div>

<div className="lg:col-span-6 space-y-4">

<button className="hover:bg-neutral-50 transition flex text-left bg-white w-full ring-black/5 ring-1 rounded-2xl pt-4 pr-5 pb-4 pl-5 shadow-lg items-center justify-between opacity-0 translate-y-8 blur-md transition-all duration-700 ease-out delay-[450ms]" data-animate="" type="button">
<div className="min-w-0">
<p className="text-neutral-900 font-medium tracking-tight font-geist">Module 1: Understanding Global Impact</p>
<p className="text-neutral-600 text-sm mt-1 font-geist">4 hours, 2 case studies, 5 resources</p>
</div>
<svg className="lucide lucide-plus text-neutral-400 h-6 w-6 flex-shrink-0" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>

<div className="flex items-center px-5 opacity-0 translate-y-8 blur-md transition-all duration-700 ease-out delay-[500ms]" data-animate="">
<div className="flex-1 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
</div>

<button className="hover:bg-neutral-50 transition flex text-left bg-white w-full ring-black/5 ring-1 rounded-2xl pt-4 pr-5 pb-4 pl-5 shadow-lg items-center justify-between opacity-0 translate-y-8 blur-md transition-all duration-700 ease-out delay-[550ms]" data-animate="" type="button">
<div className="min-w-0">
<p className="text-neutral-900 font-medium tracking-tight font-geist">Module 2: Strategic Philanthropy</p>
<p className="text-neutral-600 text-sm mt-1 font-geist">5 hours, 3 projects, 4 resources</p>
</div>
<svg className="lucide lucide-plus text-neutral-400 h-6 w-6 flex-shrink-0" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>

<div className="flex items-center px-5 opacity-0 translate-y-8 blur-md transition-all duration-700 ease-out delay-[600ms]" data-animate="">
<div className="flex-1 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
</div>

<button className="hover:bg-neutral-50 transition flex text-left bg-white w-full ring-black/5 ring-1 rounded-2xl pt-4 pr-5 pb-4 pl-5 shadow-lg items-center justify-between opacity-0 translate-y-8 blur-md transition-all duration-700 ease-out delay-[650ms]" data-animate="" type="button">
<div className="min-w-0">
<p className="text-neutral-900 font-medium tracking-tight font-geist">Module 3: Community Engagement</p>
<p className="text-neutral-600 text-sm mt-1 font-geist">6 hours, 2 fieldwork, 6 resources</p>
</div>
<svg className="lucide lucide-plus text-neutral-400 h-6 w-6 flex-shrink-0" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>

<div className="flex items-center px-5 opacity-0 translate-y-8 blur-md transition-all duration-700 ease-out delay-[700ms]" data-animate="">
<div className="flex-1 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
</div>

<button className="hover:bg-neutral-50 transition flex text-left bg-white w-full ring-black/5 ring-1 rounded-2xl pt-4 pr-5 pb-4 pl-5 shadow-lg items-center justify-between opacity-0 translate-y-8 blur-md transition-all duration-700 ease-out delay-[750ms]" data-animate="" type="button">
<div className="min-w-0">
<p className="text-neutral-900 font-medium tracking-tight font-geist">Module 4: Measuring Social Impact</p>
<p className="text-neutral-600 text-sm mt-1 font-geist">4 hours, 1 capstone, 3 resources</p>
</div>
<svg className="lucide lucide-plus text-neutral-400 h-6 w-6 flex-shrink-0" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>

<div className="flex items-center px-5 opacity-0 translate-y-8 blur-md transition-all duration-700 ease-out delay-[800ms]" data-animate="">
<div className="flex-1 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
</div>

<button className="hover:bg-neutral-50 transition flex text-left bg-white w-full ring-black/5 ring-1 rounded-2xl pt-4 pr-5 pb-4 pl-5 shadow-lg items-center justify-between opacity-0 translate-y-8 blur-md transition-all duration-700 ease-out delay-[850ms]" data-animate="" type="button">
<div className="min-w-0">
<p className="text-neutral-900 font-medium tracking-tight font-geist">Module 5: Volunteer Leadership</p>
<p className="text-neutral-600 text-sm mt-1 font-geist">5 hours, 2 workshops, 4 resources</p>
</div>
<svg className="lucide lucide-plus text-neutral-400 h-6 w-6 flex-shrink-0" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>

<div className="flex items-center px-5 opacity-0 translate-y-8 blur-md transition-all duration-700 ease-out delay-[900ms]" data-animate="">
<div className="flex-1 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
</div>

<button className="hover:bg-neutral-50 transition flex text-left bg-white w-full ring-black/5 ring-1 rounded-2xl pt-4 pr-5 pb-4 pl-5 shadow-lg items-center justify-between opacity-0 translate-y-8 blur-md transition-all duration-700 ease-out delay-[950ms]" data-animate="" type="button">
<div className="min-w-0">
<p className="text-neutral-900 font-medium tracking-tight font-geist">Module 6: Building Sustainable Change</p>
<p className="text-neutral-600 text-sm mt-1 font-geist">6 hours, 1 capstone, 5 resources</p>
</div>
<svg className="lucide lucide-plus text-neutral-400 h-6 w-6 flex-shrink-0" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>
</div>

</section><section className="lg:px-8 lg:py-24 sm:px-8 mt-20 mb-20 pt-20 pr-6 pb-20 pl-6">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-6 font-geist">
      Choose Your Impact Level
    </h2>
<p className="text-neutral-600 text-lg leading-relaxed max-w-2xl mx-auto font-geist">
      Every contribution makes a difference. Select a plan that matches your commitment to creating positive change in communities worldwide.
    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

<div className="relative bg-white rounded-[32px] p-8 ring-1 ring-neutral-200 hover:ring-neutral-300 hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06)] transition-all duration-700 ease-out">
<div className="flex items-center gap-3 mb-6">
<div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
<svg className="w-6 h-6 text-blue-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</div>
<div className="">
<h3 className="text-xl font-medium text-neutral-900 font-geist">Helper</h3>
<p className="text-sm text-neutral-500 font-geist">Basic support</p>
</div>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-1 mb-2">
<span className="text-3xl font-medium text-neutral-900 font-geist">$25</span>
<span className="text-neutral-500 text-sm font-geist">/month</span>
</div>
<p className="text-sm text-neutral-600 font-geist">Perfect for individual contributors who want to make a consistent impact</p>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-700 font-geist">
<svg className="text-green-600 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
          Monthly impact reports
        </li>
<li className="flex items-center gap-3 text-sm text-neutral-700 font-geist">
<svg className="text-green-600 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
          Community newsletter
        </li>
<li className="flex items-center gap-3 text-sm text-neutral-700 font-geist">
<svg className="text-green-600 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
          Digital thank you card
        </li>
</ul>
<a className="inline-flex items-center justify-center hover:bg-neutral-800 transition-colors font-medium text-white font-geist bg-neutral-900 w-full rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="#">
        Start Helping
      </a>
</div>

<div className="relative bg-white rounded-[32px] p-8 ring-1 ring-neutral-200 hover:ring-neutral-300 hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06)] transition-all duration-700 ease-out delay-150">
<div className="flex items-center gap-3 mb-6">
<div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
<svg className="w-6 h-6 text-green-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path><path d="M12 5v14"></path>
</svg>
</div>
<div className="">
<h3 className="text-xl font-medium text-neutral-900 font-geist">Supporter</h3>
<p className="text-sm text-neutral-500 font-geist">Enhanced impact</p>
</div>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-1 mb-2">
<span className="text-3xl font-medium text-neutral-900 font-geist">$75</span>
<span className="text-neutral-500 text-sm font-geist">/month</span>
</div>
<p className="text-sm text-neutral-600 font-geist">Ideal for those ready to make a more substantial difference in communities</p>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-700 font-geist">
<svg className="text-green-600 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
          Everything in Helper
        </li>
<li className="flex items-center gap-3 text-sm text-neutral-700 font-geist">
<svg className="text-green-600 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
          Quarterly video updates
        </li>
<li className="flex items-center gap-3 text-sm text-neutral-700 font-geist">
<svg className="text-green-600 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
          Priority support access
        </li>
<li className="flex items-center gap-3 text-sm text-neutral-700 font-geist">
<svg className="text-green-600 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
          Community forum access
        </li>
</ul>
<a className="inline-flex items-center justify-center hover:bg-neutral-800 transition-colors font-medium text-white font-geist bg-neutral-900 w-full rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="#">
        Become Supporter
      </a>
</div>

<div className="relative bg-blue-700 rounded-[32px] pt-8 pr-8 pb-8 pl-8 shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] transition-all duration-700 ease-out delay-300">
<div className="absolute -top-4 left-1/2 -translate-x-1/2">
<div className="text-xs font-medium text-blue-700 font-geist bg-white border-black/10 border rounded-full pt-1.5 pr-4 pb-1.5 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
			Most Popular
			</div>
</div>
<div className="flex items-center gap-3 mb-6">
<div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
<svg className="w-6 h-6 text-blue-700" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path>
</svg>
</div>
<div className="">
<h3 className="text-xl font-medium text-white font-geist">Champion</h3>
<p className="text-sm text-blue-200 font-geist">Maximum impact</p>
</div>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-1 mb-2">
<span className="text-3xl font-medium text-white font-geist">$150</span>
<span className="text-blue-200 text-sm font-geist">/month</span>
</div>
<p className="text-sm text-blue-100 font-geist">For dedicated supporters who want to drive significant change and lead by example</p>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-white font-geist">
<svg className="text-blue-200 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
			Everything in Supporter
			</li>
<li className="flex items-center gap-3 text-sm text-white font-geist">
<svg className="text-blue-200 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
			1-on-1 impact calls
			</li>
<li className="flex items-center gap-3 text-sm text-white font-geist">
<svg className="text-blue-200 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
			Project naming rights
			</li>
<li className="flex items-center gap-3 text-sm text-white font-geist">
<svg className="text-blue-200 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
			Exclusive event invites
			</li>
<li className="flex items-center gap-3 text-sm text-white font-geist">
<svg className="text-blue-200 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
			Annual impact certificate
			</li>
</ul>
<a className="inline-flex items-center justify-center hover:bg-white/90 transition-colors font-medium text-blue-700 font-geist bg-white w-full rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="#">
			Join Champions
		</a>
</div>

<div className="relative hover:ring-neutral-300 hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06)] ring-neutral-200 ring-1 bg-white rounded-[32px] pt-8 pr-8 pb-8 pl-8 transition-all duration-700 ease-out delay-[450ms]">
<div className="flex items-center gap-3 mb-6">
<div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
<svg className="w-6 h-6 text-amber-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path>
</svg>
</div>
<div className="">
<h3 className="text-xl font-medium text-neutral-900 font-geist">Leader</h3>
<p className="text-sm text-neutral-500 font-geist">Ultimate partnership</p>
</div>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-1 mb-2">
<span className="text-3xl font-medium text-neutral-900 font-geist">$500</span>
<span className="text-neutral-500 text-sm font-geist">/month</span>
</div>
<p className="text-sm text-neutral-600 font-geist">For organizations and individuals who want to transform entire communities</p>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-700 font-geist">
<svg className="text-green-600 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
          Everything in Champion
        </li>
<li className="flex items-center gap-3 text-sm text-neutral-700 font-geist">
<svg className="text-green-600 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
          Custom project development
        </li>
<li className="flex items-center gap-3 text-sm text-neutral-700 font-geist">
<svg className="text-green-600 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
          Dedicated account manager
        </li>
<li className="flex items-center gap-3 text-sm text-neutral-700 font-geist">
<svg className="text-green-600 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
          Site visit opportunities
        </li>
<li className="flex items-center gap-3 text-sm text-neutral-700 font-geist">
<svg className="text-green-600 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
          Leadership board recognition
        </li>
</ul>
<a className="inline-flex items-center justify-center hover:bg-neutral-800 transition-colors font-medium text-white font-geist bg-neutral-900 w-full rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="#">
        Lead Change
      </a>
</div>

</div>
<div className="text-center mt-12">
<p className="text-neutral-600 mb-6 font-geist">Need a custom solution? We're here to help.</p>
<a className="inline-flex items-center gap-2 text-neutral-900 font-medium hover:opacity-80 transition-opacity font-geist" href="#">
      Contact Our Team
      <svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7"></path>
<path d="M7 7h10v10"></path>
</svg>
</a>
</div>
</section><section className="sm:p-8 bg-neutral-950 max-w-7xl rounded-3xl mt-8 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" style={{position: 'relative', overflow: 'hidden'}}>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start relative z-10">

<div className="flex flex-col min-h-full justify-between">
<div className="">
<span className="text-sm font-normal text-zinc-300 font-geist">Global Impact Network</span>
<h2 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.9] text-zinc-100 mt-2 font-geist font-medium tracking-tighter">Transforming communities worldwide.</h2>

<div className="mt-8 relative">
<div className="absolute inset-0 flex items-center">
<div className="w-full h-px bg-gradient-to-r from-black/5 via-black/10 to-black/5"></div>
</div>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="">
<p className="text-sm text-zinc-100 font-medium tracking-tight font-geist">Creating lasting change together</p>
<p className="mt-1 text-sm text-zinc-300 font-geist">Discover how our dedicated programs provide essential resources and support to communities in need across the globe.</p>
<button className="mt-4 inline-flex items-center gap-2 h-10 px-4 rounded-full bg-zinc-100 text-zinc-900 text-sm font-normal hover:bg-zinc-200 transition font-geist">
              View Our Programs
              <span className="inline-flex h-2 w-2 rounded-full bg-zinc-900"></span>
</button>
</div>

<div className="relative">
<div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-black/10 to-transparent sm:block hidden">
</div>
<p className="text-base text-zinc-200 leading-relaxed sm:text-right sm:pl-8 font-geist">
              Our comprehensive approach combines
              <span className="font-medium text-zinc-100 font-geist">humanitarian excellence</span>
              with sustainable solutions that grow with community needs.
            </p>
</div>
</div>
</div>
</div>

<div className="relative h-[520px] overflow-hidden" style={{maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'}}>
<style>
            @keyframes marquee-vertical-aura-emfrv44j0 {
                from { transform: translateY(0); }
                to { transform: translateY(-50%); }
            }
            .animate-marquee-vertical-aura-emfrv44j0 {
                animation: marquee-vertical-aura-emfrv44j0 40s linear infinite;
            }
        </style>
<div className="animate-marquee-vertical-aura-emfrv44j0">
<div className="grid grid-cols-2 gap-4 mb-4">

<article className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-black/30 rounded-2xl">
<div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d8a18803-85b3-44b8-8ded-36a46f674b9c_800w.jpg)] bg-cover"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-black/20">
<svg className="lucide lucide-heart h-3.5 w-3.5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-black/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-black/30 font-geist">Healthcare Aid</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist">HealthReach</p>
</div>
</article>

<article className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-black/30 rounded-2xl">
<div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fed1b639-6302-4656-940e-0f519fb2348b_800w.jpg)] bg-cover"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-black/20">
<svg className="lucide lucide-graduation-cap h-3.5 w-3.5" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-black/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-black/30 font-geist">Education Access</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist">LearnForward</p>
</div>
</article>

<article className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border-black/30 border rounded-2xl">
<div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c7e0c43a-8d25-4baf-aedb-f084dd7ecaa9_800w.jpg)] bg-cover"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-black/20">
<svg className="lucide lucide-droplets h-3.5 w-3.5" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-black/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-black/30 font-geist">Clean Water</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist">WaterBridge</p>
</div>
</article>

<article className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-black/30 rounded-2xl">
<div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a64e6770-50ba-4159-829d-d5f20fab2595_800w.jpg)] bg-cover"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-black/20">
<svg className="lucide lucide-home h-3.5 w-3.5" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-black/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-black/30 font-geist">Shelter Support</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist">SafeHaven</p>
</div>
</article>
</div>
<div className="grid grid-cols-2 gap-4">

<article className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-black/30 rounded-2xl">
<div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d8a18803-85b3-44b8-8ded-36a46f674b9c_800w.jpg)] bg-cover"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-black/20">
<svg className="lucide lucide-heart h-3.5 w-3.5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-black/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-black/30 font-geist">Healthcare Aid</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist">HealthReach</p>
</div>
</article>

<article className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-black/30 rounded-2xl">
<div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fed1b639-6302-4656-940e-0f519fb2348b_800w.jpg)] bg-cover"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-black/20">
<svg className="lucide lucide-graduation-cap h-3.5 w-3.5" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-black/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-black/30 font-geist">Education Access</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist">LearnForward</p>
</div>
</article>

<article className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-black/30 rounded-2xl">
<div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c7e0c43a-8d25-4baf-aedb-f084dd7ecaa9_800w.jpg)] bg-cover"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-black/20">
<svg className="lucide lucide-droplets h-3.5 w-3.5" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-black/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-black/30 font-geist">Clean Water</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist">WaterBridge</p>
</div>
</article>

<article className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-black/30 rounded-2xl">
<div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a64e6770-50ba-4159-829d-d5f20fab2595_800w.jpg)] bg-cover"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-black/20">
<svg className="lucide lucide-home h-3.5 w-3.5" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-black/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-black/30 font-geist">Shelter Support</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist">SafeHaven</p>
</div>
</article>
</div>
</div>
</div>
</div>
</section><section className="bg-white mt-10">
<div className="relative overflow-hidden mt-40 mb-20">

<div className="relative z-10 lg:px-8 sm:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-6">
<div className="sm:p-8 bg-neutral-50 ring-neutral-200 ring-1 rounded-[32px] pt-6 pr-6 pb-6 pl-6 shadow-lg">
<div className="flex items-center justify-between mb-6">
<div className="">
<p className="text-sm text-neutral-500 font-geist">Sense Partnership</p>
<h3 className="mt-2 text-3xl sm:text-4xl font-medium tracking-tight text-neutral-900 font-geist">Ready to create impact?
                </h3>
</div>
</div>
<form action="#" className="space-y-5" method="POST">
<div className="">
<label className="block text-sm text-neutral-700 mb-2 font-geist" htmlFor="ct-email">Email address<span className="text-neutral-400"> *</span></label>
<div className="relative">
<svg className="lucide lucide-mail h-5 w-5 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<input className="w-full pl-12 pr-4 py-3 text-base rounded-2xl ring-1 ring-neutral-200 focus:ring-2 focus:ring-neutral-900 outline-none bg-white placeholder:text-neutral-400 font-geist" id="ct-email" name="email" placeholder="your.email@example.com" required="" type="email"/>
</div>
</div>
<div className="">
<label className="block text-sm text-neutral-700 mb-2 font-geist" htmlFor="ct-org">Organization</label>
<input className="w-full pl-4 pr-4 py-3 text-base rounded-2xl ring-1 ring-neutral-200 focus:ring-2 focus:ring-neutral-900 outline-none bg-white placeholder:text-neutral-400 font-geist" id="ct-org" name="organization" placeholder="Company or organization name" type="text"/>
</div>
<div className="">
<label className="block text-sm text-neutral-700 mb-2 font-geist" htmlFor="ct-msg">How would you like to contribute?</label>
<textarea className="w-full resize-y pl-4 pr-4 py-3 text-base rounded-2xl ring-1 ring-neutral-200 focus:ring-2 focus:ring-neutral-900 outline-none bg-white placeholder:text-neutral-400 font-geist" id="ct-msg" name="message" placeholder="Share your ideas for partnership, volunteering, or donation plans..." rows="4"></textarea>
</div>
<button className="inline-flex hover:bg-neutral-800 transition-colors text-base font-medium text-white font-geist bg-neutral-900 w-full rounded-2xl pt-4 pr-6 pb-4 pl-6 items-center justify-center" type="submit">
                Start Making a Difference
                <svg className="lucide lucide-arrow-right h-5 w-5 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<p className="text-sm text-neutral-500 font-geist">By submitting, you agree to join our mission and our Terms &amp; Privacy Policy.</p>
</form>
</div>
</div>

<div className="lg:col-span-6">
<div className="max-w-xl">
<div className="flex gap-3 mt-6 mb-6 items-center">
<div className="flex -space-x-2">
<img alt="Member avatar 1" className="w-7 h-7 object-cover ring-white ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5aa0d46a-9a98-4044-bce9-68ec849538ef_320w.jpg"/>
<img alt="Member avatar 2" className="w-7 h-7 object-cover ring-white ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a847bbaa-3964-40c8-ad91-98b3d6429867_320w.jpg" style={{}}/>
<img alt="Member avatar 3" className="w-7 h-7 object-cover ring-white ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/054cd9f9-ea66-4ac7-8e45-659730cfc5a3_320w.jpg" style={{}}/>
</div>
<p className="text-sm text-neutral-600 font-geist">
<span className="font-medium text-neutral-900 font-geist">1000+</span> donor active members
            </p>
</div><h2 className="sm:text-6xl leading-[1.05] text-5xl font-medium text-neutral-900 tracking-tight font-geist">Partner with purpose.</h2>
<p className="sm:text-lg text-base text-neutral-600 mt-6 leading-relaxed font-geist">
              Join thousands of changemakers who are transforming communities worldwide. Whether through donations, volunteering, or corporate partnerships—every contribution creates lasting impact.
            </p>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex items-start gap-4">
<div className="">
<p className="text-neutral-900 font-medium text-base font-geist">Join 1,000+ donors</p>
<p className="text-neutral-600 text-sm mt-1 font-geist">Connect with a community of active contributors making real change happen.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="">
<p className="text-neutral-900 font-medium text-base font-geist">Global impact</p>
<p className="text-neutral-600 text-sm mt-1 font-geist">Your support reaches communities across 50+ countries worldwide.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="">
<p className="text-neutral-900 font-medium text-base font-geist">Track your impact</p>
<p className="text-neutral-600 text-sm mt-1 font-geist">Receive detailed reports showing exactly how your contribution helps.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="">
<p className="text-neutral-900 font-medium text-base font-geist">100% transparent</p>
<p className="text-neutral-600 text-sm mt-1 font-geist">Every dollar is tracked with full transparency and accountability.</p>
</div>
</div>
</div>

<div className="mt-8">
<div className="inline-flex items-center gap-4 rounded-[28px] bg-white ring-1 ring-neutral-200 shadow-lg p-4">
<img alt="Partnership lead" className="w-14 h-14 object-cover rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/201c453d-d501-4246-98c0-bdc43ce733a8_320w.jpg"/>
<div className="min-w-0">
<p className="text-sm text-neutral-500 leading-none font-geist">Partnership Lead</p>
<p className="text-neutral-900 font-medium tracking-tight truncate mt-1 text-lg font-geist">Sarah Chen</p>
<p className="text-neutral-600 text-sm font-geist">Available Mon-Fri, 9am-5pm EST</p>
</div>
<a className="ml-2 inline-flex items-center gap-2 rounded-2xl bg-neutral-900 text-white px-4 py-3 text-sm font-medium hover:bg-neutral-800 transition-colors font-geist" href="mailto:partnerships@sense.org">
                  Schedule a call
                  
                </a>
</div>
</div>
</div>
</div>
</div>
</div>
</div><footer className="sm:px-8 pt-16 pb-12">
<div className="relative overflow-hidden bg-white border border-black/5 rounded-3xl">
<div className="relative z-10 sm:p-8 md:p-12 pt-8 pr-4 pb-8 pl-4">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12 pb-12">
<div className="lg:col-span-4">
<div className="flex gap-3 mb-6 items-center">
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[160px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cabcb3dd-d3a2-48fd-9b67-55ddd5de69ce_320w.jpg)] bg-cover rounded invert" href="#"></a>
</div>
<p className="text-xl text-black/70 font-geist max-w-3xl mb-10">Creating lasting change together. Join our mission to transform communities worldwide through compassionate action and sustainable support.</p>
<div className="sm:p-8 md:p-12 bg-gradient-to-b from-neutral-800 to-neutral-950 border-black/5 border rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-xl">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20 px-3 py-2 text-sm font-geist">
<span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      Impact updates, free
                    </div>
<h4 className="text-2xl font-semibold text-white tracking-tight font-geist">Stay connected</h4>
<ul className="space-y-3 text-base text-white/70">
<li className="flex items-start gap-3 font-geist">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                        Monthly impact reports and stories.
                      </li>
<li className="flex items-start gap-3 font-geist">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                        Volunteer opportunities near you.
                      </li>
<li className="flex items-start gap-3 font-geist">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                        No spam, unsubscribe anytime.
                      </li>
</ul>
<form className="flex gap-3 pt-2">
<input className="flex-1 h-12 px-4 rounded-xl border border-white/20 bg-black/20 text-sm placeholder-white/40 text-white outline-none focus:ring-2 focus:ring-white/20 focus:border-white/40 backdrop-blur" placeholder="your.email@example.com" required="" type="email"/>
<button className="inline-flex items-center gap-2 h-12 px-5 rounded-xl ring-1 ring-white/20 text-sm text-white bg-black/20 hover:bg-white hover:text-black transition font-geist">
                        Join
                        
                      </button>
</form>
</div>
<div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
<div className="">
<h5 className="text-white/80 text-xs uppercase tracking-wider font-medium font-geist mb-4">Programs</h5>
<ul className="space-y-3 text-base text-white/70">
<li className=""><a className="hover:text-white transition font-geist" href="#health">HealthReach</a></li>
<li className=""><a className="hover:text-white transition font-geist" href="#education">LearnForward</a></li>
<li className=""><a className="hover:text-white transition font-geist" href="#water">WaterBridge</a></li>
<li className=""><a className="hover:text-white transition font-geist" href="#shelter">SafeHaven</a></li>
</ul>
</div>
<div className="">
<h5 className="text-white/80 text-xs uppercase tracking-wider font-medium font-geist mb-4">Get Involved</h5>
<ul className="space-y-3 text-base text-white/70">
<li className=""><a className="hover:text-white transition font-geist" href="#donate">Donate Now</a></li>
<li className=""><a className="hover:text-white transition font-geist" href="#volunteer">Volunteer</a></li>
<li className=""><a className="hover:text-white transition font-geist" href="#partner">Partner</a></li>
<li className=""><a className="hover:text-white transition font-geist" href="#fundraise">Fundraise</a></li>
</ul>
</div>
<div className="">
<h5 className="text-white/80 text-xs uppercase tracking-wider font-medium font-geist mb-4">About</h5>
<ul className="space-y-3 text-base text-white/70">
<li className=""><a className="hover:text-white transition font-geist" href="#mission">Our Mission</a></li>
<li className=""><a className="hover:text-white transition font-geist" href="#impact">Impact Stories</a></li>
<li className=""><a className="hover:text-white transition font-geist" href="#transparency">Transparency</a></li>
<li className=""><a className="hover:text-white transition font-geist" href="#careers">Careers</a></li>
</ul>
</div>
</div>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div className="flex items-center gap-4 text-base text-black/60">
<span className="font-geist">© 2025 Sense</span>
<span className="hidden sm:inline text-black/20 font-geist">|</span>
<a className="hover:text-black transition font-geist" href="#privacy">Privacy</a>
<span className="text-black/20 font-geist">/</span>
<a className="hover:text-black transition font-geist" href="#terms">Terms</a>
</div>
<div className="flex items-center gap-3">
<a aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black/5 text-black/70 hover:text-black hover:bg-black/10 transition" href="https://instagram.com" rel="noreferrer" target="_blank">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a aria-label="Twitter/X" className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black/5 text-black/70 hover:text-black hover:bg-black/10 transition" href="https://twitter.com" rel="noreferrer" target="_blank">
<svg className="" fill="currentColor" height="20" viewbox="0 0 16 16" width="20"><path className="" d="M12.6 1.7h2.1l-4.6 5.2 5.4 7.4h-4.2L8.9 9.8l-3.9 4.5H2.9l4.9-5.6L2.6 1.7h4.3l3 4.1 2.7-3.1z"></path></svg>
</a>
<a aria-label="YouTube" className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black/5 text-black/70 hover:text-black hover:bg-black/10 transition" href="https://youtube.com" rel="noreferrer" target="_blank">
<svg className="" fill="currentColor" height="20" viewbox="0 0 24 24" width="20"><path className="" d="M23.5 6.2a4 4 0 0 0-2.8-2.8C18.8 3 12 3 12 3s-6.8 0-8.7.4A4 4 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a4 4 0 0 0 2.8 2.8C5.2 21 12 21 12 21s6.8 0 8.7-.4a4 4 0 0 0 2.8-2.8c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.5v-7L16 12z"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</footer>
</section>
</main>


    </>
  );
}
