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
      const data = {
        windows: {
          heading: 'Precision Steel Windows',
          sub: 'Slim profiles. Expansive views. Engineered for performance and longevity.',
          image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=90',
          alt: 'Architectural steel windows with scenic view'
        },
        doors: {
          heading: 'Grand Entry Doors',
          sub: 'Sculpted presence and secure operation—crafted to welcome with distinction.',
          image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=90',
          alt: 'Contemporary grand entry door'
        },
        hardware: {
          heading: 'Architectural Hardware',
          sub: 'Tactile precision in every handle, hinge, and lock. Finishes to match your vision.',
          image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1600&q=90',
          alt: 'Close-up of premium door handle hardware'
        }
      };

      const title = document.getElementById('prodTitle');
      const sub = document.getElementById('prodSub');
      const img = document.getElementById('prodImage');
      const tabs = document.querySelectorAll('#prodTabs [data-key]');

      function setActive(key) {
        const item = data[key];
        if (!item) return;

        // Update visuals
        title.textContent = item.heading;
        sub.textContent = item.sub;
        img.src = item.image;
        img.alt = item.alt;

        // Tab state
        tabs.forEach(btn => {
          const active = btn.getAttribute('data-key') === key;
          btn.classList.toggle('bg-[#F8F6F3]', active);
          btn.classList.toggle('opacity-100', active);
          btn.classList.toggle('opacity-80', !active);
          btn.setAttribute('aria-selected', active ? 'true' : 'false');
        });

        if (window.lucide && typeof window.lucide.createIcons === 'function') {
          window.lucide.createIcons();
        }
      }

      tabs.forEach(btn => btn.addEventListener('click', () => setActive(btn.getAttribute('data-key'))));
      setActive('windows');
    })();
  


        lucide.createIcons();

        // Hero image slider
        const images = document.querySelectorAll('.hero-slider img');
        let currentIndex = 0;
        function nextSlide() {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        }
        setInterval(nextSlide, 5000);

        // Ensure CTA background video is visible and playing
        const bgVideo = document.querySelector('video.video-bg');
        const fallbackImg = document.getElementById('video-fallback');

        function tryPlayVideo(v) {
            if (!v) return;
            v.muted = true;
            const attempt = () => v.play().then(() => {
                if (fallbackImg) fallbackImg.style.display = 'none';
            }).catch(() => {
                // keep fallback visible if autoplay blocked
                if (fallbackImg) fallbackImg.style.display = 'block';
            });
            if (v.readyState >= 2) attempt();
            else v.addEventListener('canplay', attempt, { once: true });
        }
        tryPlayVideo(bgVideo);

        // Pause/Resume when out of view to save resources
        if ('IntersectionObserver' in window && bgVideo) {
            const io = new IntersectionObserver(entries => {
                entries.forEach(e => {
                    if (e.isIntersecting) {
                        bgVideo.play().catch(()=>{});
                    } else {
                        bgVideo.pause();
                    }
                });
            }, { threshold: 0.2 });
            io.observe(bgVideo);
        }

        // On error, keep fallback image visible
        if (bgVideo) {
            bgVideo.addEventListener('error', () => {
                if (fallbackImg) fallbackImg.style.display = 'block';
            });
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
      

<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-glass bg-[#F8F6F3]/90 border-b border-[#2E2E2E]/10">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="flex items-center justify-between h-20">
<div className="text-2xl font-semibold text-[#2E2E2E] tracking-tighter font-playfair">
                    STELLAR
                </div>
<div className="hidden lg:flex items-center space-x-10">
<a className="text-[#2E2E2E] hover:text-[#6C7A89] transition-colors duration-300 text-sm uppercase tracking-wider" href="#about">About</a>
<a className="text-[#2E2E2E] hover:text-[#6C7A89] transition-colors duration-300 text-sm uppercase tracking-wider" href="#products">Products</a>
<a className="text-[#2E2E2E] hover:text-[#6C7A89] transition-colors duration-300 text-sm uppercase tracking-wider" href="#craftsmanship">Craftsmanship</a>
<a className="text-[#2E2E2E] hover:text-[#6C7A89] transition-colors duration-300 text-sm uppercase tracking-wider" href="#testimonials">Testimonials</a>
<a className="text-[#2E2E2E] hover:text-[#6C7A89] transition-colors duration-300 text-sm uppercase tracking-wider" href="#contact">Contact</a>
</div>
<div className="flex items-center space-x-4">
<button className="lg:hidden">
<svg className="lucide lucide-menu w-6 h-6 text-[#2E2E2E]" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>
</nav>

<section className="overflow-hidden w-full h-screen relative">
<div className="hero-slider">
<img alt="Luxury Windows 1" className="active" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&amp;q=90"/>
<img alt="Luxury Windows 2" src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&amp;q=90"/>
<img alt="Luxury Windows 3" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&amp;q=90" style={{}}/>
</div>
<div className="bg-[#2E2E2E]/50 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="flex z-10 h-full relative bottom-10 items-end">
<div className="lg:px-12 w-full max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="max-w-3xl">
<h1 className="lg:text-8xl leading-[0.95] text-6xl font-semibold text-[#F8F6F3] tracking-tight font-playfair mb-6">Elevate Your Architecture</h1>
<p className="leading-relaxed lg:text-xl text-xl text-[#F8F6F3]/90 mb-8">Crafting extraordinary windows and doors that transform spaces into timeless masterpieces.</p>

<a className="inline-flex items-center hover:bg-[#EADDD6]/90 transition-all duration-300 uppercase group text-sm text-[#2E2E2E] tracking-wider bg-[#EADDD6] pt-4 pr-8 pb-4 pl-8" href="#products">
                        Explore Collection
                        <svg className="lucide lucide-arrow-right w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
<div className="w-px h-16 bg-[#F8F6F3]/50"></div>
</div>
</section>

<section className="relative" id="about">
<div className="grid lg:grid-cols-2">

<div className="relative h-[60vh] lg:h-screen">
<img alt="Craftsmanship" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&amp;q=90"/>
</div>

<div className="flex bg-[#F8F6F3] items-center">
<div className="lg:px-16 xl:px-24 lg:py-32 pt-20 pr-6 pb-20 pl-6">
<div className="uppercase text-xs text-[#6C7A89] tracking-widest mb-4">Our Story</div>
<h2 className="lg:text-6xl leading-[1.1] text-5xl font-semibold text-[#2E2E2E] tracking-tight font-playfair mb-8">
                        A Legacy of Precision &amp; Elegance
                    </h2>
<div className="space-y-6 text-lg text-[#2E2E2E]/80 leading-relaxed">
<p className="" style={{}}>For over two decades, Stellar Windows &amp; Doors has been at the forefront of architectural innovation, delivering bespoke solutions that marry form and function with unparalleled craftsmanship.</p>
<p className="" style={{}}>Every window, every door is a testament to our commitment to excellence. We work with the finest materials, employ time-honored techniques, and embrace cutting-edge technology to create products that stand the test of time.</p>
</div>
<div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-[#2E2E2E]/10">
<div className="">
<div className="font-playfair text-4xl font-semibold text-[#2E2E2E] mb-2">25+</div>
<div className="text-sm text-[#2E2E2E]/60 uppercase tracking-wider">Years</div>
</div>
<div className="">
<div className="font-playfair text-4xl font-semibold text-[#2E2E2E] mb-2">10K+</div>
<div className="text-sm text-[#2E2E2E]/60 uppercase tracking-wider">Installations</div>
</div>
<div className="">
<div className="font-playfair text-4xl font-semibold text-[#2E2E2E] mb-2">50+</div>
<div className="text-sm text-[#2E2E2E]/60 uppercase tracking-wider">Awards</div>
</div>
</div>
</div>
</div>
</div><div className="grid lg:grid-cols-2">
<div className="flex order-2 lg:order-1 bg-[#F8F6F3] items-center">
<div className="lg:px-16 xl:px-24 lg:py-32 pt-20 pr-6 pb-20 pl-6">
<div className="uppercase text-xs text-[#6C7A89] tracking-widest mb-4">Our Process</div>
<h2 className="font-playfair text-5xl lg:text-6xl font-semibold text-[#2E2E2E] mb-8 tracking-tight leading-[1.1]">
                        Uncompromising Excellence
                    </h2>
<div className="space-y-8">
<div className="flex">
<div className="flex-shrink-0 w-12 h-12 bg-[#6C7A89]/10 flex items-center justify-center mr-6">
<svg className="lucide lucide-gem w-6 h-6 text-[#6C7A89]" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg>
</div>
<div className="">
<h3 className="font-playfair text-2xl font-semibold text-[#2E2E2E] mb-3">Premium Materials</h3>
<p className="text-base text-[#2E2E2E]/70 leading-relaxed">
                                    Sourced from the finest suppliers worldwide, our materials ensure longevity and performance.
                                </p>
</div>
</div>
<div className="flex">
<div className="flex-shrink-0 w-12 h-12 bg-[#6C7A89]/10 flex items-center justify-center mr-6">
<svg className="lucide lucide-shield-check w-6 h-6 text-[#6C7A89]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<h3 className="font-playfair text-2xl font-semibold text-[#2E2E2E] mb-3">Lifetime Warranty</h3>
<p className="text-base text-[#2E2E2E]/70 leading-relaxed">
                                    Comprehensive lifetime warranties giving you complete peace of mind for decades.
                                </p>
</div>
</div>
<div className="flex">
<div className="flex-shrink-0 w-12 h-12 bg-[#6C7A89]/10 flex items-center justify-center mr-6">
<svg className="lucide lucide-palette w-6 h-6 text-[#6C7A89]" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<div className="">
<h3 className="font-playfair text-2xl font-semibold text-[#2E2E2E] mb-3">Custom Design</h3>
<p className="text-base text-[#2E2E2E]/70 leading-relaxed">
                                    Tailored to your vision, ensuring every piece perfectly complements your aesthetic.
                                </p>
</div>
</div>
</div>
</div>
</div><div className="relative h-[60vh] lg:h-screen order-1 lg:order-2">
<img alt="Craftsmanship" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&amp;q=90" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 50%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 50%, transparent)'}}/>
</div>
</div>
</section>

<section className="">
<div className="lg:px-12 lg:py-20 text-center max-w-5xl mr-auto ml-auto pt-14 pr-6 pb-14 pl-6">
<p className="sm:text-2xl lg:text-[28px] leading-relaxed text-xl text-[#2E2E2E] tracking-tight">
<span className="font-playfair italic text-[#2E2E2E]">Stellar Windows &amp; Doors</span>
                is more than a manufacturer—it is a statement of craftsmanship and precision. Born from years of custom homebuilding expertise, Stellar unites architectural integrity with the timeless strength and beauty of steel. Each creation is bespoke, engineered to elevate spaces through refined design, enduring quality, and modern innovation.
            </p>
</div>
<div className="relative">
<img alt="Steel frame interior with expansive windows" className="sm:h-[56vh] lg:h-[70vh] w-full h-[46vh] object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/00bec787-3526-44b1-b89c-3ec5224c6970_3840w.png"/>
</div>
</section>

<section className="bg-[#F8F6F3]" id="products">
<div className="lg:px-12 max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6">
<div className="grid lg:grid-cols-12 gap-x-8 gap-y-8 items-center justify-center">

<aside className="lg:col-span-4 col-span-12 self-center z-20 relative">
<div className="sm:rounded-3xl overflow-hidden bg-white rounded-2xl ring-[#2E2E2E]/10 ring-1 shadow-xl">
<div className="border-[#2E2E2E]/10 border-b pt-6 pr-6 pb-6 pl-6">
<h2 className="text-2xl font-semibold text-[#2E2E2E] tracking-tight font-playfair sm:text-5xl">Our Products</h2>
<p className="text-sm text-[#2E2E2E]/60 mt-4">Select a category to preview</p>
</div>
<nav className="divide-y divide-[#2E2E2E]/10" id="prodTabs">
<button aria-selected="false" className="group flex sm:px-8 text-left w-full pt-5 pr-6 pb-5 pl-6 items-center justify-between" data-key="windows" type="button">
<span className="flex items-center gap-3">
<span className="w-10 h-10 rounded-full bg-[#F8F6F3] flex items-center justify-center text-[#6C7A89]">
<svg className="lucide lucide-panels-top-left w-5 h-5" data-lucide="panels-top-left" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</span>
<span className="flex flex-col">
<span className="uppercase text-sm tracking-wider text-[#2E2E2E] font-medium">Windows</span>
<span className="text-sm text-[#2E2E2E]/60">Precision steel sightlines, thermal performance</span>
</span>
</span>
<span className="text-[#2E2E2E]/30 group-hover:text-[#2E2E2E] transition-colors">
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
<button aria-selected="true" className="group flex sm:px-8 text-left w-full pt-5 pr-6 pb-5 pl-6 items-center justify-between" data-key="doors" type="button">
<span className="flex items-center gap-3">
<span className="w-10 h-10 rounded-full bg-[#F8F6F3] flex items-center justify-center text-[#6C7A89]">
<svg className="lucide lucide-door-closed w-5 h-5" data-lucide="door-closed" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h.01"></path><path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"></path><path d="M2 20h20"></path></svg>
</span>
<span className="flex flex-col">
<span className="uppercase text-sm font-medium text-[#2E2E2E] tracking-wider">Doors</span>
<span className="text-sm text-[#2E2E2E]/60">Grand entries, seamless indoor‑outdoor movement</span>
</span>
</span>
<span className="text-[#2E2E2E]/30 group-hover:text-[#2E2E2E] transition-colors">
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
<button aria-selected="false" className="group flex sm:px-8 text-left w-full pt-5 pr-6 pb-5 pl-6 items-center justify-between" data-key="hardware" type="button">
<span className="flex items-center gap-3">
<span className="w-10 h-10 rounded-full bg-[#F8F6F3] flex items-center justify-center text-[#6C7A89]">
<svg className="lucide lucide-wrench w-5 h-5" data-lucide="wrench" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg>
</span>
<span className="flex flex-col">
<span className="uppercase text-sm tracking-wider text-[#2E2E2E] font-medium">Hardware</span>
<span className="text-sm text-[#2E2E2E]/60">Architectural handles, locks, and finishes</span>
</span>
</span>
<span className="text-[#2E2E2E]/30 group-hover:text-[#2E2E2E] transition-colors">
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
</nav>
<div className="px-6 sm:px-8 py-6">
<a className="inline-flex items-center text-sm uppercase tracking-wider text-[#2E2E2E] hover:text-[#6C7A89] transition-colors" href="#contact">
              Request a consultation
              <svg className="lucide lucide-arrow-right w-5 h-5 ml-2" data-lucide="arrow-right" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</aside>

<div className="lg:col-span-8 col-span-12 relative">
<div className="overflow-hidden sm:rounded-3xl rounded-2xl relative">
<img alt="Contemporary grand entry door" className="w-full h-[60vh] lg:h-[70vh] object-cover" id="prodImage" src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&amp;q=90"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2E2E2E]/60 via-[#2E2E2E]/20 to-transparent"></div>
<div className="flex flex-col pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 justify-end">
<div className="text-right max-w-3xl ml-auto">
<h3 className="font-playfair uppercase text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-4" id="prodTitle">Grand Entry Doors</h3>
<p className="text-lg lg:text-xl text-white/80" id="prodSub">Sculpted presence and secure operation—crafted to welcome with distinction.</p>
<a className="inline-flex items-center px-6 sm:px-8 py-3 bg-[#EADDD6] hover:bg-[#EADDD6]/90 text-[#2E2E2E] transition-all duration-300 text-sm uppercase tracking-wider group mt-6 ml-auto" href="#contact">
                Explore This Category
                <svg className="lucide lucide-arrow-right w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</div>

</section>

<section className="relative" id="craftsmanship">
<div className="grid lg:grid-cols-2">
</div>
</section>


<section className="lg:pt-0 bg-[#F8F6F3] pt-20 pb-20" id="testimonials">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="flex items-center justify-between mb-12">
<div className="space-y-1">
<p className="sm:text-sm uppercase text-xs text-[#6C7A89] tracking-widest">What Clients Say</p>
<h2 className="sm:text-5xl lg:text-6xl text-4xl font-semibold text-[#2E2E2E] tracking-tight font-playfair">Testimonials</h2>
</div>
<div className="hidden sm:flex items-center gap-2 text-[#6C7A89]">
<svg className="lucide lucide-quote w-5 h-5" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<span className="text-sm">Real feedback from homeowners</span>
</div>
</div>
</div>
<div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#F8F6F3] mx-6 lg:mx-12">
<div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#F8F6F3] to-transparent z-10"></div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#F8F6F3] to-transparent z-10"></div>

<div className="pt-4 pb-5 relative">
<div className="flex gap-4 sm:gap-5 will-change-transform animate-[marquee-ltr_45s_linear_infinite]">

<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl bg-[#EADDD6] p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80" style={{}}/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-[#2E2E2E]">James Morrison</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-[#A89F91]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-[#2E2E2E]/60">Beverly Hills, CA</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-[#2E2E2E]/80">
                            Stellar transformed our home completely. The attention to detail and quality of craftsmanship is simply unmatched.
                        </p>
</article>
<article className="shrink-0 sm:w-[360px] md:w-[420px] bg-[#EADDD6] w-[280px] rounded-2xl pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces" style={{}}/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-[#2E2E2E]">Sarah Chen</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-[#A89F91]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-[#2E2E2E]/60">Architect, NYC</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-[#2E2E2E]/80">
                            As an architect, I demand perfection. Stellar delivers every time. Their products elevate every project.
                        </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl bg-[#EADDD6] p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces" style={{}}/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-[#2E2E2E]">Michael Stevens</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-[#A89F91]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-[#2E2E2E]/60">Builder, San Francisco</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-[#2E2E2E]/80">
                            From consultation to installation, the entire experience was seamless. The team truly cares about the outcome.
                        </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl bg-[#EADDD6] p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-[#2E2E2E]">Emily Rodriguez</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-[#A89F91]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-[#2E2E2E]/60">Interior Designer</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-[#2E2E2E]/80">
                            The custom options are endless. We've created truly unique spaces that our clients absolutely love.
                        </p>
</article>

<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl bg-[#EADDD6] p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80" style={{}}/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-[#2E2E2E]">James Morrison</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-[#A89F91]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-[#2E2E2E]/60">Beverly Hills, CA</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-[#2E2E2E]/80">
                            Stellar transformed our home completely. The attention to detail and quality of craftsmanship is simply unmatched.
                        </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl bg-[#EADDD6] p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces" style={{}}/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-[#2E2E2E]">Sarah Chen</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-[#A89F91]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-[#2E2E2E]/60">Architect, NYC</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-[#2E2E2E]/80">
                            As an architect, I demand perfection. Stellar delivers every time. Their products elevate every project.
                        </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl bg-[#EADDD6] p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces" style={{}}/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-[#2E2E2E]">Michael Stevens</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-[#A89F91]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-[#2E2E2E]/60">Builder, San Francisco</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-[#2E2E2E]/80">
                            From consultation to installation, the entire experience was seamless. The team truly cares about the outcome.
                        </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl bg-[#EADDD6] p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-[#2E2E2E]">Emily Rodriguez</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-[#A89F91]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-[#2E2E2E]/60">Interior Designer</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-[#2E2E2E]/80">
                            The custom options are endless. We've created truly unique spaces that our clients absolutely love.
                        </p>
</article>
</div>
</div>

<div className="pt-0 pb-4 relative">
<div className="flex will-change-transform animate-[marquee-rtl_45s_linear_infinite] sm:gap-5 gap-x-4 gap-y-4">

<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl bg-[#EADDD6] p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-[#2E2E2E]">David Kim</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-[#A89F91]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-[#2E2E2E]/60">Seattle, WA</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-[#2E2E2E]/80">
                            The energy efficiency of these windows has significantly reduced our heating costs. Beautiful and functional.
                        </p>
</article>
<article className="shrink-0 sm:w-[360px] md:w-[420px] bg-[#EADDD6] w-[280px] rounded-2xl pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-[#2E2E2E]">Jessica Taylor</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-[#A89F91]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-[#2E2E2E]/60">Austin, TX</p>
</div>
</div>
<p className="sm:text-base text-sm text-[#2E2E2E]/80 mt-4">
                            Professional installation team and exceptional follow-up service. Stellar stands behind their products.
                        </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl bg-[#EADDD6] p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-[#2E2E2E]">Robert Martinez</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-[#A89F91]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-[#2E2E2E]/60">Miami, FL</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-[#2E2E2E]/80">
                            The French doors exceeded our expectations. The quality is evident in every detail.
                        </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl bg-[#EADDD6] p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-[#2E2E2E]">Amanda Wright</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-[#A89F91]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-[#2E2E2E]/60">Boston, MA</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-[#2E2E2E]/80">
                            Worth every penny. The lifetime warranty gives us complete peace of mind for our investment.
                        </p>
</article>

<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl bg-[#EADDD6] p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-[#2E2E2E]">David Kim</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-[#A89F91]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-[#2E2E2E]/60">Seattle, WA</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-[#2E2E2E]/80">
                            The energy efficiency of these windows has significantly reduced our heating costs. Beautiful and functional.
                        </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl bg-[#EADDD6] p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-[#2E2E2E]">Jessica Taylor</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-[#A89F91]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-[#2E2E2E]/60">Austin, TX</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-[#2E2E2E]/80">
                            Professional installation team and exceptional follow-up service. Stellar stands behind their products.
                        </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl bg-[#EADDD6] p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-[#2E2E2E]">Robert Martinez</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-[#A89F91]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-[#2E2E2E]/60">Miami, FL</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-[#2E2E2E]/80">
                            The French doors exceeded our expectations. The quality is evident in every detail.
                        </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl bg-[#EADDD6] p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-[#2E2E2E]">Amanda Wright</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-[#A89F91]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-[#2E2E2E]/60">Boston, MA</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-[#2E2E2E]/80">
                            Worth every penny. The lifetime warranty gives us complete peace of mind for our investment.
                        </p>
</article>
</div>
</div>
</div>
</section>

<section className="relative" id="contact">
<div className="grid lg:grid-cols-2">
<div className="relative h-[60vh] lg:h-screen">
<img alt="Contact" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&amp;q=90"/>
</div>
<div className="gradient-radial-cta flex items-center">
<div className="px-6 lg:px-16 xl:px-24 py-20 lg:py-32 w-full">
<div className="uppercase text-xs text-[#EADDD6] tracking-widest mb-4">Get In Touch</div>
<h2 className="lg:text-6xl leading-[1.1] text-5xl font-semibold text-[#F8F6F3] tracking-tight font-playfair mb-8">
                        Start Your Project
                    </h2>
<p className="text-lg text-[#F8F6F3]/70 mb-10 leading-relaxed">
                        Schedule a consultation with our design experts and discover the perfect windows and doors for your project.
                    </p>
<div className="space-y-6 mb-10">
<div className="flex items-start">
<svg className="lucide lucide-map-pin w-6 h-6 text-[#EADDD6] mr-4 flex-shrink-0 mt-1" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<div className="">
<div className="text-[#F8F6F3] mb-1">Visit Our Showroom</div>
<div className="text-[#F8F6F3]/60">123 Luxury Avenue, Design District, CA 90210</div>
</div>
</div>
<div className="flex items-start">
<svg className="lucide lucide-phone w-6 h-6 text-[#EADDD6] mr-4 flex-shrink-0 mt-1" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<div className="">
<div className="text-[#F8F6F3] mb-1">Call Us</div>
<a className="text-[#F8F6F3]/60 hover:text-[#EADDD6] transition-colors duration-300" href="tel:+1234567890">(123) 456-7890</a>
</div>
</div>
<div className="flex items-start">
<svg className="lucide lucide-mail w-6 h-6 text-[#EADDD6] mr-4 flex-shrink-0 mt-1" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<div>
<div className="text-[#F8F6F3] mb-1">Email Us</div>
<a className="text-[#F8F6F3]/60 hover:text-[#EADDD6] transition-colors duration-300" href="mailto:info@stellarwd.com">info@stellarwd.com</a>
</div>
</div>
</div>

<a className="inline-flex items-center px-8 py-4 bg-[#EADDD6] hover:bg-[#EADDD6]/90 text-[#2E2E2E] transition-all duration-300 text-sm uppercase tracking-wider group" href="#">
                        Schedule Consultation
                        <svg className="lucide lucide-arrow-right w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<footer className="lg:py-20 bg-[#EADDD6] border-[#2E2E2E]/10 border-t pt-16 pb-16">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 gap-x-12 gap-y-12">
<div className="">
<div className="text-2xl font-semibold text-[#2E2E2E] tracking-tighter font-playfair mb-6"><img alt="Stellar Windows &amp; Doors logo" className="sm:h-24 w-auto h-8 object-contain" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/acefe76a-1b63-4bfe-bd92-2a3e3eae3c6b_320w.png"/></div>
<p className="text-[#2E2E2E]/60 text-sm leading-relaxed mb-6">
                        Crafting extraordinary windows and doors since 1998.
                    </p>
<div className="flex space-x-4">
<a className="w-10 h-10 border border-[#2E2E2E]/10 hover:border-[#6C7A89] flex items-center justify-center transition-all duration-300 group" href="#">
<svg className="lucide lucide-facebook w-5 h-5 text-[#2E2E2E]/60 group-hover:text-[#6C7A89]" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="w-10 h-10 border border-[#2E2E2E]/10 hover:border-[#6C7A89] flex items-center justify-center transition-all duration-300 group" href="#">
<svg className="lucide lucide-instagram w-5 h-5 text-[#2E2E2E]/60 group-hover:text-[#6C7A89]" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-10 h-10 border border-[#2E2E2E]/10 hover:border-[#6C7A89] flex items-center justify-center transition-all duration-300 group" href="#">
<svg className="lucide lucide-linkedin w-5 h-5 text-[#2E2E2E]/60 group-hover:text-[#6C7A89]" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
<div className="">
<h4 className="text-sm uppercase tracking-wider text-[#2E2E2E] mb-6 font-medium">Quick Links</h4>
<ul className="space-y-3">
<li className=""><a className="text-[#2E2E2E]/60 hover:text-[#6C7A89] transition-colors duration-300 text-sm" href="#about">About Us</a></li>
<li className=""><a className="text-[#2E2E2E]/60 hover:text-[#6C7A89] transition-colors duration-300 text-sm" href="#products">Products</a></li>
<li className=""><a className="text-[#2E2E2E]/60 hover:text-[#6C7A89] transition-colors duration-300 text-sm" href="#craftsmanship">Craftsmanship</a></li>
<li className=""><a className="text-[#2E2E2E]/60 hover:text-[#6C7A89] transition-colors duration-300 text-sm" href="#testimonials">Testimonials</a></li>
<li className=""><a className="text-[#2E2E2E]/60 hover:text-[#6C7A89] transition-colors duration-300 text-sm" href="#contact">Contact</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm uppercase tracking-wider text-[#2E2E2E] mb-6 font-medium">Services</h4>
<ul className="space-y-3">
<li className=""><a className="text-[#2E2E2E]/60 hover:text-[#6C7A89] transition-colors duration-300 text-sm" href="#">Custom Design</a></li>
<li className=""><a className="text-[#2E2E2E]/60 hover:text-[#6C7A89] transition-colors duration-300 text-sm" href="#">Installation</a></li>
<li className=""><a className="text-[#2E2E2E]/60 hover:text-[#6C7A89] transition-colors duration-300 text-sm" href="#">Consultation</a></li>
<li className=""><a className="text-[#2E2E2E]/60 hover:text-[#6C7A89] transition-colors duration-300 text-sm" href="#">Maintenance</a></li>
<li className=""><a className="text-[#2E2E2E]/60 hover:text-[#6C7A89] transition-colors duration-300 text-sm" href="#">Warranty</a></li>
</ul>
</div>
<div>
<h4 className="text-sm uppercase tracking-wider text-[#2E2E2E] mb-6 font-medium">Showroom Hours</h4>
<div className="space-y-2 text-sm text-[#2E2E2E]/60">
<div>Monday - Friday: 9am - 6pm</div>
<div>Saturday: 10am - 4pm</div>
<div>Sunday: Closed</div>
</div>
</div>
</div>
<div className="border-[#2E2E2E]/10 border-t pt-8">
<div className="flex flex-col md:flex-row justify-between items-center">
<p className="text-[#2E2E2E]/60 text-sm mb-4 md:mb-0">
        © 2024 Stellar Windows &amp; Doors. All rights reserved.
    </p>
<div className="flex space-x-6">
<a className="text-[#2E2E2E]/60 hover:text-[#6C7A89] transition-colors duration-300 text-sm" href="#">Privacy
            Policy</a>
<a className="text-[#2E2E2E]/60 hover:text-[#6C7A89] transition-colors duration-300 text-sm" href="#">Terms of
            Service</a>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
