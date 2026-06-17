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



    (function () {
        var btn = document.getElementById("mobileMenuBtn");
        var panel = document.getElementById("mobileMenuPanel");
        if (!btn || !panel) return;

        function openMenu() {
          panel.classList.remove("hidden");
          btn.setAttribute("aria-expanded", "true");
        }

        function closeMenu() {
          panel.classList.add("hidden");
          btn.setAttribute("aria-expanded", "false");
        }

        function toggleMenu() {
          var isOpen = btn.getAttribute("aria-expanded") === "true";
          if (isOpen) closeMenu();
          else openMenu();
        }

        btn.addEventListener("click", function (e) {
          e.stopPropagation();
          toggleMenu();
        });

        document.addEventListener("click", function (e) {
          if (!panel.classList.contains("hidden")) {
            closeMenu();
          }
        });

        var links = panel.querySelectorAll(".mobile-link");
        links.forEach(function (link) {
          link.addEventListener("click", function () {
            closeMenu();
          });
        });

        window.addEventListener("resize", function () {
          if (window.innerWidth >= 768) closeMenu();
        });
      })();
  


            (function () {
      var sliderId = "service-slider-aura-emkgkwxc51of3cims";
      var viewportId = "service-rotator-viewport-aura-emkgkwxc51of3cims";

      var slider = document.getElementById(sliderId);
      var viewport = document.getElementById(viewportId);
      if (!slider || !viewport) return;

      var prefersReduced =
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      var idx = 0;
      var total = 10;
      var itemPx = 0;

      function measureAndLockHeights() {
        var first = slider.children && slider.children[0];
        if (!first) return;

        itemPx = Math.ceil(first.getBoundingClientRect().height);
        viewport.style.height = itemPx + "px";

        for (var i = 0; i < slider.children.length; i++) {
          slider.children[i].style.height = itemPx + "px";
          slider.children[i].style.display = "flex";
          slider.children[i].style.alignItems = "center";
        }

        slider.style.transition = "none";
        slider.style.transform = "translateY(-" + idx * itemPx + "px)";
        requestAnimationFrame(function () {
          slider.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)";
        });
      }

      function nextSlide() {
        if (!itemPx) measureAndLockHeights();

        idx++;
        slider.style.transform = "translateY(-" + idx * itemPx + "px)";

        if (idx === total) {
          setTimeout(function () {
            slider.style.transition = "none";
            idx = 0;
            slider.style.transform = "translateY(0px)";
          }, 520);
        }
      }

      measureAndLockHeights();

      var resizeTimer;
      window.addEventListener("resize", function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(measureAndLockHeights, 150);
      });

      var key = "__auraSliderInterval__" + sliderId;
      if (window[key]) clearInterval(window[key]);
      window[key] = setInterval(nextSlide, 2875);
    })();
          


    (function () {
      function initFaqAccordion() {
        var root = document.getElementById("faq");
        if (!root) return;

        // Only target details within this FAQ section
        var faqs = root.querySelectorAll("details");
        if (!faqs.length) return;

        faqs.forEach(function (faq) {
          faq.addEventListener("toggle", function () {
            // If this one was opened, close the rest
            if (!faq.open) return;

            faqs.forEach(function (other) {
              if (other !== faq && other.open) other.open = false;
            });
          });
        });
      }

      // Covers builders that render late
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initFaqAccordion);
      } else {
        initFaqAccordion();
      }
      window.addEventListener("load", initFaqAccordion);
    })();
  


        lucide.createIcons();
    
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
      

<header className="fixed md:p-6 z-50 w-full pt-4 pr-4 pb-4 pl-4 top-0 right-0 left-0">
<header className="fixed top-0 left-0 right-0 z-50 md:p-6 pt-4 pr-4 pb-4 pl-4 w-full">
<nav className="flex transition-all duration-300 shadow-slate-200/50 bg-white/80 max-w-7xl border-white/20 border rounded-full mr-auto ml-auto pt-3 pr-6 pb-3 pl-6 relative shadow-lg backdrop-blur-xl items-center justify-between">
<a className="flex items-center gap-2 group" href="index.html">
<img alt="Get Started Home Services" className="w-12 h-14 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c90e806f-078e-44bd-9fa8-7f61dfbfe8ae_320w.png"/>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-emerald-600" href="index.html">Home</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-emerald-600" href="about.html">About
      Us</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-emerald-600" href="index.html#services">Services</a>
</div>
<a className="hidden md:inline-flex items-center gap-2 transition-all shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:bg-emerald-700 text-sm font-medium text-white bg-emerald-600 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-lg" href="#quote">
    Book a Consultation
    <svg className="lucide lucide-arrow-right w-[24px] h-[16px]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<button aria-controls="mobileMenuPanel" aria-expanded="false" aria-label="Open menu" className="md:hidden text-slate-900 p-2 -mr-2 rounded-full hover:bg-slate-100 transition" id="mobileMenuBtn" type="button">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
<div className="md:hidden hidden absolute left-4 right-4 top-[calc(100%+12px)] bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-xl p-4" id="mobileMenuPanel">
<div className="flex flex-col gap-2">
<a className="mobile-link px-3 py-2 rounded-xl text-slate-700 hover:bg-slate-100 font-medium" href="index.html">Home</a>
<a className="mobile-link px-3 py-2 rounded-xl text-slate-700 hover:bg-slate-100 font-medium" href="about.html">About
        Us</a>
<a className="mobile-link px-3 py-2 rounded-xl text-slate-700 hover:bg-slate-100 font-medium" href="index.html#services">Services</a>
<a className="mobile-link px-3 py-2 rounded-xl text-slate-700 hover:bg-slate-100 font-medium" href="#team">Team</a>
<div className="h-px bg-slate-200 my-2"></div>
<a className="mobile-link inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-full py-3 px-4 shadow-lg shadow-emerald-500/20" href="#quote">
        Book a Consultation
        <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

</nav>
</header>
</header>

<section className="lg:pt-40 lg:pb-32 overflow-hidden pt-32 pb-20 relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 gap-x-12 gap-y-12 items-center">

<div className="space-y-8">
<h1 className="lg:text-7xl leading-[1.1] text-5xl font-semibold text-slate-900 tracking-tighter">
<span className="block">Trusted Experts in</span>

<span className="relative inline-block align-baseline w-full">

<span className="block overflow-hidden relative w-full text-3xl sm:text-4xl lg:text-5xl" id="service-rotator-viewport-aura-emkgkwxc51of3cims" style={{paddingBottom: '4px', height: '60px'}}>

<span className="block text-[#4a8e3d] transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]" id="service-slider-aura-emkgkwxc51of3cims" style="
          will-change: transform;
          transition: none;
          transform: translateY(0px);
          word-spacing: 0.08em;
        ">
<span className="block whitespace-nowrap leading-tight" style={{height: '60px', display: 'flex', alignItems: 'center'}}>Seniors Moving</span>
<span className="block whitespace-nowrap leading-tight" style={{height: '60px', display: 'flex', alignItems: 'center'}}>Packing &amp; Unpacking</span>
<span className="block whitespace-nowrap leading-tight" style={{height: '60px', display: 'flex', alignItems: 'center'}}>Professional Organizing</span>
<span className="block whitespace-nowrap leading-tight" style={{height: '60px', display: 'flex', alignItems: 'center'}}>Home Clearing</span>
<span className="block whitespace-nowrap leading-tight" style={{height: '60px', display: 'flex', alignItems: 'center'}}>Auction Services</span>
<span className="block whitespace-nowrap leading-tight" style={{height: '60px', display: 'flex', alignItems: 'center'}}>Junk Removal</span>
<span className="block whitespace-nowrap leading-tight" style={{height: '60px', display: 'flex', alignItems: 'center'}}>Home Cleaning</span>
<span className="block whitespace-nowrap leading-tight" style={{height: '60px', display: 'flex', alignItems: 'center'}}>Staging</span>
<span className="block whitespace-nowrap leading-tight" style={{height: '60px', display: 'flex', alignItems: 'center'}}>Exterior Maintenance</span>
<span className="block whitespace-nowrap leading-tight" style={{height: '60px', display: 'flex', alignItems: 'center'}}>Full-Service Moving</span>

<span className="block whitespace-nowrap leading-tight" style={{height: '60px', display: 'flex', alignItems: 'center'}}>Seniors Moving</span>
</span>
</span>
</span>

</h1>
<p className="md:text-xl leading-relaxed text-lg font-medium text-slate-700 max-w-lg">We help seniors, families, and
          homeowners throughout Metro Vancouver &amp; the Lower Mainland manage moves, downsizing, and home preparation
          — from planning and packing to cleanouts, auctions, and move-in setup.</p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 transition-all shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-1 hover:bg-emerald-700 text-base font-medium text-white bg-emerald-600 rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-xl" href="#quote">
  Book a Consultation
  <svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</a>
<a className="inline-flex justify-center items-center gap-2 transition-all hover:bg-slate-50 hover:border-emerald-200 hover:text-emerald-600 text-base font-medium text-slate-700 bg-white border-slate-200 border rounded-full pt-3.5 pr-8 pb-3.5 pl-8" href="#services">
            View Services
            <svg className="lucide lucide-arrow-down-right w-4 h-4" data-lucide="arrow-down-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 7 10 10"></path><path d="M17 7v10H7"></path></svg>
</a>
</div>

<div className="flex gap-4 pt-4 gap-x-4 gap-y-4 items-center">
<div className="flex -space-x-3">
<img alt="" className="w-10 h-10 object-cover border-white border-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e27ad4ae-a3f8-40e8-8c6a-0138f20bdc1b_320w.jpg" style={{}}/>
</div>
<div className="">
<div className="flex gap-0.5 text-yellow-400">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-sm font-medium mt-1 text-slate-600">5 Star Rating -
              <span className="font-semibold text-slate-900">Trusted During Life’s Transitions</span>
</p>
</div>
</div>
</div>

<div className="relative">
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group shadow-emerald-900/10">
<img alt="Happy couple in a new home" className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a17dedfd-d8de-4b50-af24-5fbf68e8d7a7_1600w.jpg" style={{}}/>

<div className="bg-gradient-to-t via-transparent to-transparent from-emerald-950/60 absolute top-0 right-0 bottom-0 left-0">
</div>

<div className="absolute top-8 left-8 flex flex-col gap-3">
<span className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-emerald-800 bg-white/90 rounded-full px-3 py-1.5 shadow-lg backdrop-blur-md text-center">
<svg className="w-3.5 h-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
  Senior Moving Specialists
</span>
<span className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-emerald-800 bg-white/90 rounded-full px-3 py-1.5 shadow-lg backdrop-blur-md text-center">
<svg className="lucide lucide-house w-3.5 h-3.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(6, 95, 70)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
<path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
</svg>
  Full-Service Home Transitions
</span>
</div>

<div className="flex bg-white/95 rounded-2xl pt-6 pr-6 pb-6 pl-6 absolute right-8 bottom-8 left-8 shadow-xl backdrop-blur-xl items-center justify-between">
<div className="">
<p className="text-xs font-bold uppercase tracking-wider mb-1 text-emerald-600">Our Promise</p>
<p className="font-medium text-slate-900">Thoughtful planning. Reliable follow-through.</p>
</div>
<div className="text-emerald-600 bg-emerald-100 rounded-full pt-3 pr-3 pb-3 pl-3">
<svg className="lucide lucide-handshake" data-icon-replaced="true" data-icon-set="lucide" data-lucide="handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(5, 150, 105)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
</div>
</div>
</div>

<div className="absolute -z-10 top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl bg-emerald-400/20">
</div>
</div>
</div>
</div>
</section>

<section className="bg-emerald-950 rounded-t-[3rem] lg:rounded-t-[4rem] pt-16 pb-16 lg:py-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">

<div className="bg-emerald-600 rounded-3xl p-8 shadow-xl shadow-emerald-500/10 transform md:-translate-y-8 text-white">
<h3 className="text-4xl font-semibold tracking-tight mb-2">#1 Choice</h3>
<p className="text-xl font-medium mb-4">In Seniors Moving &amp; Home Transitions</p>
<p className="text-sm leading-relaxed text-emerald-50/90">
          Families choose us for the level of service we provide —
          thoughtful, organized, and fully supported from start to finish.
        </p>
</div>

<div className="p-6 md:p-8 lg:pl-10 lg:border-l lg:border-emerald-800/60">
<h3 className="text-5xl font-semibold text-white tracking-tight mb-2">500+</h3>
<p className="font-medium text-emerald-300 mb-2">Moves Managed Since 2020</p>
<p className="text-sm text-emerald-50/80 leading-relaxed">
          Real experience coordinating senior moves, downsizing, and full home transitions
          across Metro Vancouver and the Lower Mainland.
        </p>
</div>

<div className="p-6 md:p-8 lg:pl-10 lg:border-l lg:border-emerald-800/60">
<h3 className="text-3xl font-semibold text-white tracking-tight leading-tight mb-2 max-w-[18ch]">
          One Coordinated Process
        </h3>
<p className="text-sm text-emerald-50/80 leading-relaxed">
          From planning and packing to clearing, cleaning, auctions, and move-in setup —
          everything is handled by one organized team.
        </p>
</div>

<div className="p-6 md:p-8 lg:pl-10 lg:border-l lg:border-emerald-800/60">
<h3 className="text-3xl font-semibold text-white tracking-tight leading-tight mb-2 max-w-[18ch]">
          Handled Properly, Start to Finish
        </h3>
<p className="text-sm text-emerald-50/80 leading-relaxed">
          Clear timelines, consistent communication, and dependable follow-through —
          so families don’t have to manage the details themselves.
        </p>
</div>
</div>
</div>
</section>

<section className="lg:py-32 overflow-hidden bg-slate-50 pt-24 pb-24 relative" id="services">

<div className="absolute inset-0 bg-[#4a8e3d]/5 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

<div className="flex flex-col md:flex-row gap-6 mb-16 gap-x-6 gap-y-6 items-end justify-between">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
          Comprehensive <span className="text-[#4a8e3d]">Home Services</span>
</h2>
<p className="leading-relaxed text-lg font-medium text-slate-500">
          Supporting homeowners and families through every stage of transition with care, respect, and expertise.
        </p>
</div>

<div className="hidden md:block w-32 h-1.5 bg-[#4a8e3d]/20 rounded-full mb-3"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">


<div className="group bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:shadow-[#4a8e3d]/10 hover:border-[#4a8e3d]/30 hover:bg-[#4a8e3d]/[0.03]">
<div className="mb-6 relative">

<div className="w-16 h-16 bg-[#4a8e3d]/10 rounded-2xl transition-colors duration-300 group-hover:bg-[#4a8e3d]/15">
</div>
<svg className="lucide lucide-truck w-8 h-8 text-[#4a8e3d] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Full-Service Moving</h3>
<p className="text-slate-500 text-sm leading-relaxed">
          Packing, moving, unpacking, and complete home setup — including making beds and hanging photos.
        </p>
</div>

<div className="group bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:shadow-[#4a8e3d]/10 hover:border-[#4a8e3d]/30 hover:bg-[#4a8e3d]/[0.03]">
<div className="mb-6 relative">
<div className="w-16 h-16 bg-[#4a8e3d]/10 rounded-2xl transition-colors duration-300 group-hover:bg-[#4a8e3d]/15">
</div>
<svg className="lucide lucide-layout-grid w-8 h-8 text-[#4a8e3d] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Organizing &amp; Downsizing</h3>
<p className="text-slate-500 text-sm leading-relaxed">
          Thoughtful decision-making and hands-on organizing support to simplify transitions and reduce overwhelm.
        </p>
</div>

<div className="group bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:shadow-[#4a8e3d]/10 hover:border-[#4a8e3d]/30 hover:bg-[#4a8e3d]/[0.03]">
<div className="mb-6 relative">
<div className="w-16 h-16 bg-[#4a8e3d]/10 rounded-2xl transition-colors duration-300 group-hover:bg-[#4a8e3d]/15">
</div>
<svg className="lucide lucide-circle-dollar-sign absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" data-icon-replaced="true" data-icon-set="lucide" data-lucide="circle-dollar-sign" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(74, 142, 61)'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Estate Liquidation</h3>
<p className="leading-relaxed text-sm text-slate-500">Respectful handling of estate contents through auctions,
          consignment, and resale.</p>
</div>

<div className="group bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:shadow-[#4a8e3d]/10 hover:border-[#4a8e3d]/30 hover:bg-[#4a8e3d]/[0.03]">
<div className="mb-6 relative">
<div className="w-16 h-16 bg-[#4a8e3d]/10 rounded-2xl transition-colors duration-300 group-hover:bg-[#4a8e3d]/15">
</div>
<svg className="lucide lucide-recycle w-8 h-8 text-[#4a8e3d] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" data-lucide="recycle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"></path><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"></path><path d="m14 16-3 3 3 3"></path><path d="M8.293 13.596 7.196 9.5 3.1 10.598"></path><path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"></path><path d="m13.378 9.633 4.096 1.098 1.097-4.096"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-3">Donation &amp; Junk Removal</h3>
<p className="leading-relaxed text-sm text-slate-500">Removal of unwanted items, with donations made wherever
          possible.</p>
</div>


<div className="group bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:shadow-[#4a8e3d]/10 hover:border-[#4a8e3d]/30 hover:bg-[#4a8e3d]/[0.03]">
<div className="mb-6 relative">
<div className="w-16 h-16 bg-[#4a8e3d]/10 rounded-2xl transition-colors duration-300 group-hover:bg-[#4a8e3d]/15">
</div>
<svg className="lucide lucide-sparkles w-8 h-8 text-[#4a8e3d] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Move In/Out Cleaning</h3>
<p className="text-slate-500 text-sm leading-relaxed">
          Thorough residential cleaning to prepare homes for listings, move-ins, or final handover.
        </p>
</div>

<div className="group bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:shadow-[#4a8e3d]/10 hover:border-[#4a8e3d]/30 hover:bg-[#4a8e3d]/[0.03]">
<div className="mb-6 relative">
<div className="w-16 h-16 bg-[#4a8e3d]/10 rounded-2xl transition-colors duration-300 group-hover:bg-[#4a8e3d]/15">
</div>
<svg className="lucide lucide-armchair w-8 h-8 text-[#4a8e3d] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" data-lucide="armchair" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"></path><path d="M5 18v2"></path><path d="M19 18v2"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-3">Listing Preparation</h3>
<p className="leading-relaxed text-sm text-slate-500">Light staging and presentation support, working alongside your
          realtor to ensure the home shows at its best.</p>
</div>

<div className="group bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:shadow-[#4a8e3d]/10 hover:border-[#4a8e3d]/30 hover:bg-[#4a8e3d]/[0.03]">
<div className="mb-6 relative">
<div className="w-16 h-16 bg-[#4a8e3d]/10 rounded-2xl transition-colors duration-300 group-hover:bg-[#4a8e3d]/15">
</div>
<svg className="lucide lucide-house-plus absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" data-icon-replaced="true" data-icon-set="lucide" data-lucide="house-plus" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(74, 142, 61)'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12.35 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .71-1.53l7-6a2 2 0 0 1 2.58 0l7 6A2 2 0 0 1 21 10v2.35"></path><path d="M14.8 12.4A1 1 0 0 0 14 12h-4a1 1 0 0 0-1 1v8"></path><path d="M15 18h6"></path><path d="M18 15v6"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Exterior Maintenance</h3>
<p className="leading-relaxed text-sm text-slate-500">Comprehensive exterior upkeep including pressure washing,
          gutter and window cleaning, and general maintenance.</p>
</div>

<div className="group bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:shadow-[#4a8e3d]/10 hover:border-[#4a8e3d]/30 hover:bg-[#4a8e3d]/[0.03]">
<div className="mb-6 relative">
<div className="w-16 h-16 bg-[#4a8e3d]/10 rounded-2xl transition-colors duration-300 group-hover:bg-[#4a8e3d]/15">
</div>
<svg className="lucide lucide-leaf absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" data-icon-replaced="true" data-icon-set="lucide" data-lucide="leaf" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(74, 142, 61)'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Yard Maintenance</h3>
<p className="leading-relaxed text-sm text-slate-500">Yard cleanups, seasonal maintenance, and ongoing exterior
          support during transitions.</p>
</div>
</div>
</div>
</section>



<section className="bg-[#4a8e3d]/5 pt-24 pb-24" id="faq">
<div className="sm:px-6 lg:px-8 max-w-4xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-slate-900">
        Frequently Asked <span className="text-[#4a8e3d]">Questions</span>
</h2>
<p className="text-lg text-slate-600 font-medium">
        Clear answers about senior moving, downsizing, and home transition support in Metro Vancouver and the Lower
        Mainland.
      </p>
</div>
<div className="space-y-4">

<details className="group rounded-2xl bg-white shadow-sm border border-slate-100 [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-[#4a8e3d]/20">
<summary className="flex cursor-pointer items-center justify-between gap-4 p-6 text-slate-900">
<h3 className="text-lg font-semibold">Which areas do you serve?</h3>
<div className="rounded-full p-1.5 text-[#4a8e3d] bg-[#4a8e3d]/10 transition duration-300 group-open:-rotate-180">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</summary>
<p className="px-6 pb-6 text-slate-600 leading-relaxed font-medium">
          We primarily serve Metro Vancouver and the Lower Mainland. If you’re just outside the area, reach out — we’ll
          confirm availability.
        </p>
</details>

<details className="group rounded-2xl bg-white shadow-sm border border-slate-100 [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-[#4a8e3d]/20">
<summary className="flex cursor-pointer items-center justify-between gap-4 p-6 text-slate-900">
<h3 className="text-lg font-semibold">Do you handle the entire move, start to finish?</h3>
<div className="rounded-full p-1.5 text-[#4a8e3d] bg-[#4a8e3d]/10 transition duration-300 group-open:-rotate-180">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</summary>
<p className="px-6 pb-6 text-slate-600 leading-relaxed font-medium">
          Yes. We can manage planning, downsizing, packing, moving, unpacking, and full suite setup — including beds,
          furniture placement, and hanging photos.
        </p>
</details>

<details className="group rounded-2xl bg-white shadow-sm border border-slate-100 [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-[#4a8e3d]/20">
<summary className="flex cursor-pointer items-center justify-between gap-4 p-6 text-slate-900">
<h3 className="text-lg font-semibold">Do you provide packing supplies?</h3>
<div className="rounded-full p-1.5 text-[#4a8e3d] bg-[#4a8e3d]/10 transition duration-300 group-open:-rotate-180">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</summary>
<p className="px-6 pb-6 text-slate-600 leading-relaxed font-medium">
          We can supply everything needed — boxes, paper, wrap, labels, and specialty protection for fragile items — so
          you don’t have to track anything down.
        </p>
</details>

<details className="group rounded-2xl bg-white shadow-sm border border-slate-100 [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-[#4a8e3d]/20">
<summary className="flex cursor-pointer items-center justify-between gap-4 p-6 text-slate-900">
<h3 className="text-lg font-semibold">What happens to items we no longer need?</h3>
<div className="rounded-full p-1.5 text-[#4a8e3d] bg-[#4a8e3d]/10 transition duration-300 group-open:-rotate-180">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</summary>
<p className="px-6 pb-6 text-slate-600 leading-relaxed font-medium">
          We’ll guide you through keep / donate / sell / dispose. Usable items are donated whenever possible, and the
          rest is removed responsibly.
        </p>
</details>

<details className="group rounded-2xl bg-white shadow-sm border border-slate-100 [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-[#4a8e3d]/20">
<summary className="flex cursor-pointer items-center justify-between gap-4 p-6 text-slate-900">
<h3 className="text-lg font-semibold">Do you offer estate cleanouts and liquidation support?</h3>
<div className="rounded-full p-1.5 text-[#4a8e3d] bg-[#4a8e3d]/10 transition duration-300 group-open:-rotate-180">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</summary>
<p className="px-6 pb-6 text-slate-600 leading-relaxed font-medium">
          Yes. We can help sort contents, coordinate donations, arrange removal, and support resale or auction services
          when it makes sense — all handled with care and discretion.
        </p>
</details>

<details className="group rounded-2xl bg-white shadow-sm border border-slate-100 [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-[#4a8e3d]/20">
<summary className="flex cursor-pointer items-center justify-between gap-4 p-6 text-slate-900">
<h3 className="text-lg font-semibold">Do you work with seniors communities and elevator bookings?</h3>
<div className="rounded-full p-1.5 text-[#4a8e3d] bg-[#4a8e3d]/10 transition duration-300 group-open:-rotate-180">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</summary>
<p className="px-6 pb-6 text-slate-600 leading-relaxed font-medium">
          We do. We’re familiar with move-in rules, loading zones, and elevator schedules — and we’ll coordinate timing
          so move day runs smoothly.
        </p>
</details>

<details className="group rounded-2xl bg-white shadow-sm border border-slate-100 [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-[#4a8e3d]/20">
<summary className="flex cursor-pointer items-center justify-between gap-4 p-6 text-slate-900">
<h3 className="text-lg font-semibold">Do you offer move-in / move-out cleaning?</h3>
<div className="rounded-full p-1.5 text-[#4a8e3d] bg-[#4a8e3d]/10 transition duration-300 group-open:-rotate-180">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</summary>
<p className="px-6 pb-6 text-slate-600 leading-relaxed font-medium">
          Yes — our cleaning is tailored for transitions: pre-listing cleans, move-out cleans, and getting the new home
          move-in ready.
        </p>
</details>

<details className="group rounded-2xl bg-white shadow-sm border border-slate-100 [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-[#4a8e3d]/20">
<summary className="flex cursor-pointer items-center justify-between gap-4 p-6 text-slate-900">
<h3 className="text-lg font-semibold">How far in advance should we book?</h3>
<div className="rounded-full p-1.5 text-[#4a8e3d] bg-[#4a8e3d]/10 transition duration-300 group-open:-rotate-180">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</summary>
<p className="px-6 pb-6 text-slate-600 leading-relaxed font-medium">
          Earlier is better, especially for month-end dates. If your timeline is tight, contact us — we’ll do our best
          to
          accommodate.
        </p>
</details>

<details className="group rounded-2xl bg-white shadow-sm border border-slate-100 [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-[#4a8e3d]/20">
<summary className="flex cursor-pointer items-center justify-between gap-4 p-6 text-slate-900">
<h3 className="text-lg font-semibold">Do you offer free consultations?</h3>
<div className="rounded-full p-1.5 text-[#4a8e3d] bg-[#4a8e3d]/10 transition duration-300 group-open:-rotate-180">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</summary>
<p className="px-6 pb-6 text-slate-600 leading-relaxed font-medium">
          Yes. We’ll learn your goals, assess the scope, and provide a clear plan and estimate before you decide.
        </p>
</details>

<details className="group rounded-2xl bg-white shadow-sm border border-slate-100 [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-[#4a8e3d]/20">
<summary className="flex cursor-pointer items-center justify-between gap-4 p-6 text-slate-900">
<h3 className="text-lg font-semibold">How does pricing work?</h3>
<div className="rounded-full p-1.5 text-[#4a8e3d] bg-[#4a8e3d]/10 transition duration-300 group-open:-rotate-180">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</summary>
<p className="px-6 pb-6 text-slate-600 leading-relaxed font-medium">
          Pricing depends on the scope of work, access considerations (stairs or elevators), and which services you’d
          like us to handle. After a quick consultation, we’ll outline clear options and provide an accurate estimate.
        </p>
</details>
</div>
</div>


</section>

<section className="lg:rounded-t-[4rem] overflow-hidden text-white bg-emerald-950 rounded-t-[3rem] pt-24 pb-24 relative" id="quote">

<div className="absolute inset-0 opacity-10 pointer-events-none overflow-visible" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">

<div className="relative hidden lg:block">
<div className="absolute top-0 right-0 w-2/3 h-2/3 bg-emerald-500/20 rounded-full blur-3xl"></div>
<img alt="Moving boxes" className="transform hover:rotate-0 transition-transform duration-500 bg-center object-cover border-emerald-900/50 border-4 rounded-[2.5rem] shadow-2xl rotate-2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c5433dd8-81c7-4f32-abe2-847164fad210_1600w.png"/>
<div className="absolute -bottom-8 -left-8 p-6 rounded-2xl shadow-xl max-w-xs bg-white text-slate-900">
<div className="flex mb-3 gap-x-3 gap-y-3 items-center">
<div className="p-2 rounded-lg bg-emerald-100 text-emerald-600">
<svg className="lucide lucide-clock w-6 h-6" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<span className="text-lg font-bold">Fast Estimates</span>
</div>
<p className="text-sm text-slate-500 font-medium">Get a response within 24 hours.</p>
</div>
</div>

<div className="">
<h2 className="md:text-5xl text-3xl font-semibold tracking-tight mb-4">
    Let's Get Started on Your Next Step.
  </h2>
<p className="text-lg font-medium text-emerald-200/80 mb-10">
    Ready for a stress-free transition? Fill out the form below for a free consultation.
  </p>
<form className="space-y-4">

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="">
<label className="sr-only">Name</label>
<input className="w-full border rounded-xl px-5 py-4 placeholder-emerald-400/60 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all bg-emerald-900/50 border-emerald-800 text-white" placeholder="Full Name" required="" type="text"/>
</div>
<div className="">
<label className="sr-only">Phone</label>
<input className="w-full border rounded-xl px-5 py-4 placeholder-emerald-400/60 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all bg-emerald-900/50 border-emerald-800 text-white" placeholder="Phone Number" required="" type="tel"/>
</div>
<div className="">
<label className="sr-only">Email</label>
<input className="w-full border rounded-xl px-5 py-4 placeholder-emerald-400/60 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all bg-emerald-900/50 border-emerald-800 text-white" placeholder="Email Address" required="" type="email"/>
</div>
<div className="">
<label className="sr-only">Address</label>
<input className="w-full border rounded-xl px-5 py-4 placeholder-emerald-400/60 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all bg-emerald-900/50 border-emerald-800 text-white" placeholder="Property Address" type="text"/>
</div>
</div>

<div className="relative group">
<button className="focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all flex hover:border-emerald-600 text-emerald-400/60 text-left bg-emerald-900/50 w-full border-emerald-800 border rounded-xl pt-4 pr-5 pb-4 pl-5 items-center justify-between" onclick="document.getElementById('services-dropdown').classList.toggle('hidden')" type="button">
<span className="">Select Services (Select all that apply)</span>
<svg className="lucide lucide-chevron-down w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(52, 211, 153)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m6 9 6 6 6-6"></path></svg>
</button>

<div className="hidden absolute top-full left-0 right-0 mt-2 bg-emerald-950/95 border border-emerald-800 rounded-xl shadow-2xl z-30 max-h-80 overflow-y-auto p-2 backdrop-blur-xl" id="services-dropdown">
<div className="space-y-1">

<label className="flex items-center gap-3 p-3 hover:bg-emerald-900/60 rounded-lg cursor-pointer group transition-colors select-none">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border-2 border-emerald-700 rounded bg-emerald-900/30 peer-checked:bg-emerald-600 peer-checked:border-emerald-600 transition-all"></div>
<svg className="lucide lucide-check absolute text-white opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-emerald-100 font-medium">Full-Service Moving</span>
</label>

<label className="flex items-center gap-3 p-3 hover:bg-emerald-900/60 rounded-lg cursor-pointer group transition-colors select-none">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border-2 border-emerald-700 rounded bg-emerald-900/30 peer-checked:bg-emerald-600 peer-checked:border-emerald-600 transition-all"></div>
<svg className="lucide lucide-check absolute text-white opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-emerald-100 font-medium">Organizing &amp; Downsizing</span>
</label>

<label className="flex items-center gap-3 p-3 hover:bg-emerald-900/60 rounded-lg cursor-pointer group transition-colors select-none">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border-2 border-emerald-700 rounded bg-emerald-900/30 peer-checked:bg-emerald-600 peer-checked:border-emerald-600 transition-all"></div>
<svg className="lucide lucide-check absolute text-white opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-emerald-100 font-medium">Estate Liquidation</span>
</label>

<label className="flex items-center gap-3 p-3 hover:bg-emerald-900/60 rounded-lg cursor-pointer group transition-colors select-none">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border-2 border-emerald-700 rounded bg-emerald-900/30 peer-checked:bg-emerald-600 peer-checked:border-emerald-600 transition-all"></div>
<svg className="lucide lucide-check absolute text-white opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-emerald-100 font-medium">Donation &amp; Junk Removal</span>
</label>

<label className="flex items-center gap-3 p-3 hover:bg-emerald-900/60 rounded-lg cursor-pointer group transition-colors select-none">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border-2 border-emerald-700 rounded bg-emerald-900/30 peer-checked:bg-emerald-600 peer-checked:border-emerald-600 transition-all"></div>
<svg className="lucide lucide-check absolute text-white opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-emerald-100 font-medium">Move-In/Out Cleaning</span>
</label>

<label className="flex items-center gap-3 p-3 hover:bg-emerald-900/60 rounded-lg cursor-pointer group transition-colors select-none">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border-2 border-emerald-700 rounded bg-emerald-900/30 peer-checked:bg-emerald-600 peer-checked:border-emerald-600 transition-all"></div>
<svg className="lucide lucide-check absolute text-white opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-emerald-100 font-medium">Listing Preparation</span>
</label>

<label className="flex items-center gap-3 p-3 hover:bg-emerald-900/60 rounded-lg cursor-pointer group transition-colors select-none">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border-2 border-emerald-700 rounded bg-emerald-900/30 peer-checked:bg-emerald-600 peer-checked:border-emerald-600 transition-all"></div>
<svg className="lucide lucide-check absolute text-white opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-emerald-100 font-medium">Exterior Maintenance</span>
</label>

<label className="flex items-center gap-3 p-3 hover:bg-emerald-900/60 rounded-lg cursor-pointer group transition-colors select-none">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border-2 border-emerald-700 rounded bg-emerald-900/30 peer-checked:bg-emerald-600 peer-checked:border-emerald-600 transition-all"></div>
<svg className="lucide lucide-check absolute text-white opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-emerald-100 font-medium">Yard Maintenance</span>
</label>

<label className="flex items-center gap-3 p-3 hover:bg-emerald-900/60 rounded-lg cursor-pointer group transition-colors select-none">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border-2 border-emerald-700 rounded bg-emerald-900/30 peer-checked:bg-emerald-600 peer-checked:border-emerald-600 transition-all"></div>
<svg className="lucide lucide-check absolute text-white opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-emerald-100 font-medium">Other Service</span>
</label>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="relative">
<input className="placeholder-emerald-400/60 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all [color-scheme:dark] text-white bg-emerald-900/50 w-full border-emerald-800 border rounded-xl pt-4 pr-5 pb-4 pl-5" onblur="if(!this.value)this.type='text'" onfocus="(this.type='date')" placeholder="Preferred Date for Service" type="text"/>
<svg className="lucide lucide-calendar absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
</div>

<div className="relative">
<input className="w-full border rounded-xl px-5 py-4 placeholder-emerald-400/60 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all [color-scheme:dark] bg-emerald-900/50 border-emerald-800 text-white" onblur="if(!this.value)this.type='text'" onfocus="(this.type='datetime-local')" placeholder="Consultation Date &amp; Time" type="text"/>
<svg className="lucide lucide-clock absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
</div>
</div>
<button className="transition-all shadow-emerald-500/20 hover:shadow-emerald-500/40 flex gap-2 hover:bg-emerald-500 text-lg font-semibold text-white bg-emerald-600 w-full rounded-xl mt-4 pt-4 pb-4 shadow-lg gap-x-2 gap-y-2 items-center justify-center" type="button">
                            Book your Consultation
                            <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="md:py-20 bg-slate-50 pt-12 pb-12">
<div className="sm:px-6 lg:px-10 w-full max-w-screen-xl mr-auto ml-auto pr-4 pl-4">

<div className="bg-white border border-slate-200/60 rounded-[2.5rem] shadow-sm p-8 md:p-12 lg:p-14">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 mb-16 lg:mb-24">

<div className="lg:col-span-5 flex flex-col gap-6 gap-x-6 gap-y-6 items-start">
<a className="flex items-center gap-2.5 group" href="#">
<img alt="Get Started Home Services" className="object-auto bg-center w-30 h-22 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5566e131-1047-482f-96a7-b5d23d1009e7_320w.png"/>
</a>
<p className="leading-relaxed md:text-base text-sm font-medium text-slate-500 max-w-md">Metro Vancouver &amp; the Fraser Valley’s trusted partner for residential transitions. We help you move forward with confidence and peace of mind.</p>
<div className="flex items-center gap-5 mt-2">
<a aria-label="Facebook" className="text-slate-400 hover:text-slate-900 transition-colors" href="https://www.facebook.com/GetStartedHomeServices/" rel="noopener noreferrer" target="_blank">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a aria-label="Instagram" className="hover:text-slate-900 transition-colors text-slate-400" href="https://www.instagram.com/getstartedhs/" rel="noopener noreferrer" target="_blank">
<svg className="lucide lucide-instagram w-[20px] h-[20px]" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
</div>
</div>

<div className="lg:col-span-7 min-w-0">
<div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-10 gap-x-12">

<div className="md:col-span-5 min-w-0">
<h4 className="font-semibold text-slate-900 mb-6 text-base">Contact Us</h4>
<ul className="space-y-4 text-sm font-medium text-slate-500 min-w-0">
<li className="min-w-0">
<span className="hover:text-slate-800 transition-colors">(604) 996-8512</span>
</li>

<li className="min-w-0">
<a className="hover:text-emerald-600 transition-colors" href="mailto:admin@getstartedhomeservices.com">
<span className="block max-w-full break-words [overflow-wrap:anywhere]">
                      admin@getstartedhomeservices.com
                    </span>
</a>
</li>
</ul>
</div>

<div className="md:col-span-7 min-w-0">
<h4 className="text-base font-semibold text-slate-900 mb-6">Our Services</h4>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10 text-sm font-medium text-slate-500">
<a className="hover:text-emerald-600 transition-colors" href="#">Full-Service Moving</a>
<a className="hover:text-emerald-600 transition-colors" href="#">Organizing &amp; Downsizing</a>
<a className="hover:text-emerald-600 transition-colors" href="#">Estate Liquidation</a>
<a className="hover:text-emerald-600 transition-colors" href="#">Donation &amp; Junk Removal</a>
<a className="hover:text-emerald-600 transition-colors" href="#">Move-In/Out Cleaning</a>
<a className="hover:text-emerald-600 transition-colors" href="#">Listing Preparation</a>
<a className="hover:text-emerald-600 transition-colors" href="#">Exterior Maintenance</a>
<a className="hover:text-emerald-600 transition-colors" href="#">Yard Maintenance</a>
</div>
</div>
</div>
</div>
</div>

<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
<p className="text-sm font-medium text-slate-400">© 2026 Get Started Home Services. All Rights Reserved.</p>
<div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 underline decoration-slate-200 underline-offset-4 decoration-1 transition-all" href="#">
            Privacy Policy
          </a>
<a className="hover:text-slate-900 underline decoration-slate-200 underline-offset-4 decoration-1 transition-all" href="#">
            Terms &amp; Conditions
          </a>
</div>
</div>
</div>
</div>
</footer>



    </>
  );
}
