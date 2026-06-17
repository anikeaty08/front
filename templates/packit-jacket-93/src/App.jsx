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



    // Mobile menu
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconOpen = document.getElementById('mobile-menu-icon-open');
    const iconClose = document.getElementById('mobile-menu-icon-close');

    if (mobileToggle) {
      mobileToggle.addEventListener('click', () => {
        const isOpen = !mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden');
        iconOpen.classList.toggle('hidden', !isOpen === false);
        iconClose.classList.toggle('hidden', !isOpen === true);
      });
    }

    // Smooth scroll for data-scroll-target buttons
    document.querySelectorAll('[data-scroll-target]').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = document.querySelector(btn.getAttribute('data-scroll-target'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    });

    // FAQ accordion
    document.querySelectorAll('.faq-toggle').forEach(toggle => {
      toggle.addEventListener('click', () => {
        const parent = toggle.parentElement;
        const content = parent.querySelector('.faq-content');
        const icon = toggle.querySelector('.faq-icon');
        const isOpen = !content.classList.contains('hidden');

        // close all
        document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
        document.querySelectorAll('.faq-icon').forEach(ic => {
          ic.setAttribute('d', 'M12 5v14M5 12h14');
        });

        if (!isOpen) {
          content.classList.remove('hidden');
        }
      });
    });

    // Product modals
    const openProductModal = id => {
      const modal = document.getElementById('product-modal-' + id);
      if (modal) modal.classList.remove('hidden');
      if (modal) modal.classList.add('flex');
    };
    const closeProductModals = () => {
      document.querySelectorAll('[id^="product-modal-"]').forEach(modal => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      });
    };

    document.querySelectorAll('[data-product-modal-target]').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-product-modal-target');
        openProductModal(id);
      });
    });

    document.querySelectorAll('[data-product-modal-close]').forEach(btn => {
      btn.addEventListener('click', closeProductModals);
    });

    document.querySelectorAll('[id^="product-modal-"]').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeProductModals();
      });
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
      
<div className="min-h-screen bg-black selection:bg-[#D4FF00] selection:text-black">

<header className="fixed top-0 inset-x-0 z-40 border-b border-zinc-800/70 bg-black/70 backdrop-blur">
<div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">

<a className="flex items-center space-x-2 group" href="#top">
<div className="flex items-center justify-center rounded-md border border-zinc-800 bg-black/80 px-3 py-1">
<span className="text-sm sm:text-base font-black tracking-[0.14em] text-[#D4FF00] group-hover:text-white transition-colors duration-300">PACKIT</span>
<span className="ml-1 text-xs sm:text-sm font-semibold tracking-[0.22em] text-white/80 group-hover:text-[#D4FF00] transition-colors duration-300">JACKET</span>
</div>
</a>

<nav className="hidden md:flex items-center space-x-8 text-sm">
<a className="text-zinc-300 hover:text-white transition-colors duration-200 tracking-wide" href="#pricing">Pricing</a>
<a className="text-zinc-300 hover:text-white transition-colors duration-200 tracking-wide" href="#products">Products</a>
<a className="text-zinc-300 hover:text-white transition-colors duration-200 tracking-wide" href="#craftsmanship">Craftsmanship</a>
</nav>

<a className="hidden sm:inline-flex items-center justify-center rounded-full border border-black bg-black text-[#D4FF00] hover:text-black hover:bg-[#D4FF00] hover:border-[#D4FF00] transition-all duration-300 shadow-lg shadow-black/40 group" href="#pricing">
<span className="sr-only">Jump to pricing</span>
<svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14" strokeLinecap="round"></path>
<path d="M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</a>

<button className="md:hidden inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/80 p-2 text-zinc-100 hover:border-[#D4FF00] hover:text-[#D4FF00] transition-all duration-200" id="mobile-menu-toggle">
<span className="sr-only">Open main menu</span>
<svg className="w-6 h-6" fill="none" id="mobile-menu-icon-open" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round"></path>
</svg>
<svg className="w-6 h-6 hidden" fill="none" id="mobile-menu-icon-close" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 6l12 12M6 18L18 6" strokeLinecap="round"></path>
</svg>
</button>
</div>

<nav className="md:hidden hidden border-t border-zinc-800 bg-black/95 backdrop-blur" id="mobile-menu">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-3 text-sm">
<a className="block text-zinc-100 hover:text-[#D4FF00] transition-colors duration-200 tracking-wide" href="#pricing">Pricing</a>
<a className="block text-zinc-100 hover:text-[#D4FF00] transition-colors duration-200 tracking-wide" href="#products">Products</a>
<a className="block text-zinc-100 hover:text-[#D4FF00] transition-colors duration-200 tracking-wide" href="#craftsmanship">Craftsmanship</a>
</div>
</nav>
</header>

<main className="pt-20" id="top">

<section className="relative min-h-screen bg-[#D4FF00] text-black flex items-center" id="hero">
<div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 to-transparent pointer-events-none"></div>
<div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

<div className="w-full lg:w-1/2 space-y-6">
<div className="inline-flex items-center space-x-2 rounded-full bg-black text-[#D4FF00] px-3 py-1 text-xs font-semibold tracking-[0.18em]">
<span>F*** AIRLINE FEES</span>
<span className="h-1 w-1 rounded-full bg-[#D4FF00]/70"></span>
<span>SNEAK 2 WEEKS IN YOUR COAT</span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-none">
              HUGE<br className="hidden sm:block"/>POCKETS
            </h1>
<p className="mt-4 text-base sm:text-lg text-black/80 max-w-xl">
              Stop paying airlines for carry-on. This jacket <span className="font-semibold">is</span> your luggage. Four massive pockets. Airport approved. No extra bags. No mercy for baggage fees.
            </p>
<div className="mt-6 flex flex-wrap items-center gap-4">
<a className="inline-flex items-center justify-center rounded-full bg-black text-[#D4FF00] hover:bg-[#D4FF00] hover:text-black transition-transform duration-300 hover:scale-105 shadow-xl shadow-black/40 px-6 py-3 text-sm font-semibold tracking-wide" href="#pricing">
                STOP PAYING AIRLINES
              </a>
<button className="inline-flex items-center justify-center rounded-full border border-black/40 bg-black/5 hover:bg-black/10 text-black hover:text-black transition-colors duration-200 px-5 py-3 text-xs sm:text-sm font-medium tracking-wide" data-scroll-target="#products">
                See the pockets in action
              </button>
</div>
<div className="mt-6 flex items-center space-x-6 text-xs sm:text-sm text-black/70">
<div className="flex items-center space-x-2">
<span className="inline-flex h-2 w-2 rounded-full bg-black"></span>
<span>Save €60+ every flight</span>
</div>
<div className="flex items-center space-x-2">
<span className="inline-flex h-2 w-2 rounded-full bg-black"></span>
<span>TSA &amp; airport security compliant</span>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 relative">
<div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-black/50 bg-black">
<img alt="Traveler in black Packit Jacket with huge pockets, side profile" className="w-full h-full object-cover min-h-[18rem] sm:min-h-[22rem]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
<div className="rounded-full bg-[#D4FF00] text-black px-4 py-2 text-xs sm:text-sm font-semibold tracking-[0.16em]">
                  4 HUGE POCKETS • PACK 2 WEEKS
                </div>
<div className="hidden sm:flex items-center gap-2 rounded-full bg-black/80 text-[#D4FF00] px-3 py-2 text-xs font-medium">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="3"></circle>
<path d="M3 12h3M18 12h3M12 3v3M12 18v3"></path>
</svg>
                  AIRPORT APPROVED
                </div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 inset-x-0 bg-black text-[#D4FF00] border-t border-black">
<div className="w-full overflow-hidden">
<div className="flex items-center whitespace-nowrap animate-[marquee_25s_linear_infinite] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
<span className="mx-8">4 HUGE POCKETS</span>
<span className="mx-8">ZERO BAGGAGE FEES</span>
<span className="mx-8">FOREVER YOURS</span>
<span className="mx-8">AIRPORT APPROVED</span>
<span className="mx-8">PACK 2 WEEKS</span>
<span className="mx-8">SAVE €60+ PER FLIGHT</span>
<span className="mx-8">4 HUGE POCKETS</span>
<span className="mx-8">ZERO BAGGAGE FEES</span>
<span className="mx-8">FOREVER YOURS</span>
<span className="mx-8">AIRPORT APPROVED</span>
<span className="mx-8">PACK 2 WEEKS</span>
<span className="mx-8">SAVE €60+ PER FLIGHT</span>
</div>
</div>
</div>
</section>

<section className="bg-[#0A0A0A] text-white py-20 sm:py-24 lg:py-28" id="problem">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div className="space-y-6">
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#D4FF00]">
              AIRLINES ARE ROBBING YOU BLIND.
            </h2>
<div className="space-y-3 text-base sm:text-lg text-zinc-200">
<p><span className="font-semibold text-white">€60</span> for a carry-on. <span className="font-semibold text-white">€120</span> round trip.</p>
<p>Do that 10 times a year and you just donated <span className="font-semibold text-white">€1,200</span> to airline CEOs.</p>
<p className="font-semibold text-[#FF3B30]">We said f*** that.</p>
</div>
<div className="mt-8 grid sm:grid-cols-3 gap-4 sm:gap-5 text-xs sm:text-sm">
<div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 sm:p-5 flex flex-col space-y-2">
<span className="text-[#D4FF00] text-xs font-semibold tracking-[0.18em] uppercase">01 — ARRIVE</span>
<p className="font-semibold text-sm sm:text-base">Look normal. Wear your Packit Jacket.</p>
<p className="text-zinc-400 text-sm">You walk in with “just a jacket”. They see clothes. You see 40L of hidden storage.</p>
</div>
<div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 sm:p-5 flex flex-col space-y-2">
<span className="text-[#D4FF00] text-xs font-semibold tracking-[0.18em] uppercase">02 — LOAD</span>
<p className="font-semibold text-sm sm:text-base">4 massive pockets. Zero shame.</p>
<p className="text-zinc-400 text-sm">Laptop, clothes, shoes, toiletries, chargers. If it fits, it flies for free.</p>
</div>
<div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 sm:p-5 flex flex-col space-y-2">
<span className="text-[#D4FF00] text-xs font-semibold tracking-[0.18em] uppercase">03 — WALK</span>
<p className="font-semibold text-sm sm:text-base">Through security like a ghost.</p>
<p className="text-zinc-400 text-sm">TSA-approved. No extra bags. No side-eye. No “that’ll be €60, please”.</p>
</div>
</div>
</div>
<div className="space-y-6">
<div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-zinc-800 bg-gradient-to-tr from-zinc-900 to-zinc-800 shadow-2xl shadow-black/60">
<img alt="Traveler wearing Packit Jacket at airport check-in avoiding baggage fees" className="w-full h-full object-cover min-h-[18rem] sm:min-h-[22rem]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<button aria-label="Play video about beating airline baggage fees" className="absolute inset-0 flex items-center justify-center group">
<div className="rounded-full bg-black/80 group-hover:bg-black/90 border border-white/70 group-hover:border-[#D4FF00] transition-all duration-300 p-4 sm:p-5">
<svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#D4FF00]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon fill="currentColor" points="9 7 16 12 9 17" stroke="none"></polygon>
</svg>
</div>
</button>
<div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
<span className="rounded-full bg-[#FF3B30] text-white text-xs font-semibold tracking-[0.16em] uppercase px-3 py-1">
                  AIRLINE FEES: DODGED
                </span>
<span className="rounded-full bg-black/80 text-[#D4FF00] text-xs font-medium px-3 py-1">
                  Saved €120 this trip alone
                </span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#D4FF00] text-black py-20 sm:py-24 lg:py-28" id="social-proof">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-10">
            AS SEEN IN
          </h2>

<div className="overflow-hidden border-y border-black/20 py-4 bg-black/5 rounded-2xl">
<div className="flex items-center whitespace-nowrap animate-[marquee_22s_linear_infinite] text-xs sm:text-sm font-semibold tracking-[0.28em] uppercase">
<span className="mx-10 opacity-80">ASSOCIATED PRESS</span>
<span className="mx-10 opacity-80">NBC</span>
<span className="mx-10 opacity-80">CBS</span>
<span className="mx-10 opacity-80">USA NEWS</span>
<span className="mx-10 opacity-80">SPORTS ILLUSTRATED</span>
<span className="mx-10 opacity-80">ASSOCIATED PRESS</span>
<span className="mx-10 opacity-80">NBC</span>
<span className="mx-10 opacity-80">CBS</span>
<span className="mx-10 opacity-80">USA NEWS</span>
<span className="mx-10 opacity-80">SPORTS ILLUSTRATED</span>
</div>
</div>

<div className="mt-12 grid md:grid-cols-3 gap-6 lg:gap-8">
<article className="relative transform rotate-[-1.5deg] hover:rotate-0 transition-transform duration-300">
<div className="h-full rounded-2xl bg-white text-black shadow-xl shadow-black/20 border border-black/5 overflow-hidden">
<div className="p-6 sm:p-7 flex flex-col h-full">
<div className="text-4xl text-[#D4FF00] leading-none mb-3">“</div>
<p className="text-sm sm:text-base font-medium mb-4">
                    “Beating <span className="font-semibold">€60+ carry-on fees</span> without breaking a single rule.”
                  </p>
<div className="mt-auto flex items-center justify-between text-xs text-zinc-500">
<span className="font-semibold tracking-[0.18em] uppercase">USA NEWS</span>
<span>Travel Desk</span>
</div>
</div>
</div>
</article>
<article className="relative transform rotate-[1.5deg] hover:rotate-0 transition-transform duration-300">
<div className="h-full rounded-2xl bg-white text-black shadow-xl shadow-black/20 border border-black/5 overflow-hidden">
<div className="p-6 sm:p-7 flex flex-col h-full">
<div className="text-4xl text-[#D4FF00] leading-none mb-3">“</div>
<p className="text-sm sm:text-base font-medium mb-4">
                    “The frontline of a <span className="font-semibold">travel revolution</span> against baggage fees.”
                  </p>
<div className="mt-auto flex items-center justify-between text-xs text-zinc-500">
<span className="font-semibold tracking-[0.18em] uppercase">ASSOCIATED PRESS</span>
<span>Feature</span>
</div>
</div>
</div>
</article>
<article className="relative transform rotate-[-1deg] hover:rotate-0 transition-transform duration-300">
<div className="h-full rounded-2xl bg-white text-black shadow-xl shadow-black/20 border border-black/5 overflow-hidden">
<div className="p-6 sm:p-7 flex flex-col h-full">
<div className="text-4xl text-[#D4FF00] leading-none mb-3">“</div>
<p className="text-sm sm:text-base font-medium mb-4">
                    “One startup’s <span className="font-semibold">war on baggage fees</span> airlines didn’t see coming.”
                  </p>
<div className="mt-auto flex items-center justify-between text-xs text-zinc-500">
<span className="font-semibold tracking-[0.18em] uppercase">NBC NEWS</span>
<span>Primetime</span>
</div>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="bg-white text-black py-20 sm:py-24 lg:py-28" id="products">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto">
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              PACK MORE. PAY LESS. TRAVEL FREE.
            </h2>
<p className="mt-4 text-base sm:text-lg text-[#6B6B6B]">
              One jacket. Three styles. Same middle finger to baggage fees.
            </p>
</div>
<div className="mt-12 lg:mt-16 grid lg:grid-cols-[3fr,2fr] gap-6 lg:gap-8 items-start">

<article className="group relative rounded-3xl border border-zinc-200 bg-zinc-50 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer" data-product-modal-target="men">
<div className="relative">
<img alt="Men's Packit Jacket with huge pockets packed with travel gear" className="w-full h-full object-cover min-h-[16rem] sm:min-h-[22rem]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
<div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
<div>
<div className="inline-flex items-center rounded-full bg-[#D4FF00] text-black text-xs font-semibold tracking-[0.18em] uppercase px-3 py-1 mb-3">
                      MEN'S PACKIT JACKET
                    </div>
<p className="text-xs sm:text-sm text-zinc-200">
                      Available in Black, Khaki, Gray
                    </p>
</div>
<button className="inline-flex items-center justify-center rounded-full bg-[#D4FF00] text-black text-xs sm:text-sm font-semibold tracking-wide px-4 py-2 hover:scale-105 transition-transform duration-300">
                    + VIEW 17 PHOTOS
                  </button>
</div>
</div>
</article>

<div className="space-y-6 lg:space-y-6">
<article className="group relative rounded-3xl border border-zinc-200 bg-zinc-50 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer" data-product-modal-target="women">
<div className="relative">
<img alt="Women's Packit Jacket styled for airport travel" className="w-full h-full object-cover min-h-[10rem] sm:min-h-[14rem]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
<div>
<div className="inline-flex items-center rounded-full bg-[#D4FF00] text-black text-xs font-semibold tracking-[0.18em] uppercase px-3 py-1 mb-2">
                        WOMEN'S PACKIT JACKET
                      </div>
<p className="text-xs sm:text-sm text-zinc-200">
                        Tailored fit. Same ruthless pockets.
                      </p>
</div>
<button className="inline-flex items-center justify-center rounded-full bg-[#D4FF00] text-black text-xs sm:text-sm font-semibold tracking-wide px-4 py-2 hover:scale-105 transition-transform duration-300">
                      + VIEW 12 PHOTOS
                    </button>
</div>
</div>
</article>
<article className="group relative rounded-3xl border border-zinc-200 bg-zinc-50 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer" data-product-modal-target="cubes">
<div className="relative">
<img alt="Packit packing cubes laid out with travel essentials" className="w-full h-full object-cover min-h-[10rem] sm:min-h-[14rem]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
<div>
<div className="inline-flex items-center rounded-full bg-black text-[#D4FF00] text-xs font-semibold tracking-[0.18em] uppercase px-3 py-1 mb-2">
                        PACKING CUBES
                      </div>
<p className="text-xs sm:text-sm text-zinc-200">
                        Lock in your chaos. Max out your jacket.
                      </p>
</div>
<button className="inline-flex items-center justify-center rounded-full bg-black text-[#D4FF00] text-xs sm:text-sm font-semibold tracking-wide px-4 py-2 hover:scale-105 transition-transform duration-300">
                      + VIEW 8 PHOTOS
                    </button>
</div>
</div>
</article>
</div>
</div>
</div>

<div className="fixed inset-0 z-40 hidden items-center justify-center bg-black/80 backdrop-blur" id="product-modal-men">
<div className="relative max-w-5xl w-full mx-4 sm:mx-6 lg:mx-auto rounded-3xl bg-zinc-950 text-white border border-zinc-800 shadow-2xl max-h-[90vh] flex flex-col">
<button className="absolute top-4 right-4 rounded-full bg-zinc-900/80 border border-zinc-700 p-2 hover:border-[#D4FF00] hover:text-[#D4FF00] transition-colors duration-200" data-product-modal-close="">
<span className="sr-only">Close</span>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 6l12 12M6 18L18 6" strokeLinecap="round"></path>
</svg>
</button>
<div className="grid lg:grid-cols-[3fr,2fr] gap-0 overflow-hidden rounded-3xl">

<div className="bg-black/80 flex flex-col">
<div className="relative">
<img alt="Close-up of Men's Packit Jacket pockets loaded with gear" className="w-full max-h-[22rem] sm:max-h-[26rem] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<button className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/20 transition-colors duration-200">
<span className="sr-only">Open image lightbox</span>
</button>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
<span className="rounded-full bg-black/80 text-[#D4FF00] px-3 py-1 font-semibold tracking-[0.16em] uppercase">
                      MEN'S PACKIT JACKET
                    </span>
<span className="rounded-full bg-white/90 text-black px-2 py-1 font-medium">
                      1 / 17
                    </span>
</div>
</div>
<div className="border-t border-zinc-800 bg-zinc-950/80 overflow-x-auto">
<div className="flex items-center gap-2 sm:gap-3 px-4 py-3">
<button className="shrink-0 rounded-2xl border-2 border-[#D4FF00] overflow-hidden">
<img alt="Front view of Men's Packit Jacket" className="w-16 h-16 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</button>
<button className="shrink-0 rounded-2xl border border-zinc-800 overflow-hidden">
<img alt="Back view of Men's Packit Jacket" className="w-16 h-16 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</button>
<button className="shrink-0 rounded-2xl border border-zinc-800 overflow-hidden">
<img alt="Packit Jacket pockets loaded with clothes and laptop" className="w-16 h-16 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</button>
<button className="shrink-0 rounded-2xl border border-zinc-800 overflow-hidden relative">
<img alt="Packit Jacket at airport security" className="w-16 h-16 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-black/60 flex items-center justify-center text-[0.65rem] font-semibold tracking-wide">
                        +13
                      </div>
</button>
</div>
</div>
</div>

<div className="bg-zinc-950 flex flex-col p-5 sm:p-6 lg:p-7">
<div className="mb-3">
<h3 className="text-xl sm:text-2xl font-black tracking-tight">
                    MEN'S PACKIT JACKET
                  </h3>
<p className="mt-1 text-xs sm:text-sm text-zinc-400">
                    Available in Black, Khaki, Gray
                  </p>
</div>
<div className="flex items-center justify-between text-sm mb-4">
<div className="flex items-baseline gap-2">
<span className="text-lg sm:text-xl font-semibold">€119</span>
<span className="text-xs text-zinc-500 line-through">€179</span>
</div>
<span className="text-xs font-semibold text-[#D4FF00] tracking-[0.18em] uppercase">
                    PAYS FOR ITSELF IN 1 TRIP
                  </span>
</div>
<ul className="space-y-2 text-xs sm:text-sm text-zinc-200 mb-4">
<li className="flex items-start gap-2">
<span className="mt-[0.2rem] inline-flex h-1.5 w-1.5 rounded-full bg-[#D4FF00]"></span>
<span>4 overbuilt cargo pockets – laptop, trainers, two hoodies, toiletries, all in.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-[0.2rem] inline-flex h-1.5 w-1.5 rounded-full bg-[#D4FF00]"></span>
<span>Water-resistant shell built for airport hell and street wear.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-[0.2rem] inline-flex h-1.5 w-1.5 rounded-full bg-[#D4FF00]"></span>
<span>TSA-compliant design – it is clothing, not luggage. 100% legal.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-[0.2rem] inline-flex h-1.5 w-1.5 rounded-full bg-[#D4FF00]"></span>
<span>Hidden passport &amp; cash pocket so you never dig through bags again.</span>
</li>
</ul>
<div className="mt-auto space-y-4">
<div className="flex flex-wrap gap-2 text-xs">
<button className="rounded-full bg-[#D4FF00] text-black font-semibold tracking-wide px-4 py-2 hover:scale-105 transition-transform duration-300">
                      SHOP NOW
                    </button>
<button className="rounded-full border border-zinc-600 text-zinc-100 font-medium tracking-wide px-4 py-2 hover:border-[#D4FF00] hover:text-[#D4FF00] transition-colors duration-200">
                      SIZE GUIDE
                    </button>
</div>
<p className="text-[0.75rem] text-zinc-500">
                    Free worldwide shipping. No restocking fee. If you do not save baggage fees on your first trip, we will buy it back.
                  </p>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-40 hidden items-center justify-center bg-black/80 backdrop-blur" id="product-modal-women">
<div className="relative max-w-5xl w-full mx-4 sm:mx-6 lg:mx-auto rounded-3xl bg-zinc-950 text-white border border-zinc-800 shadow-2xl max-h-[90vh] flex flex-col">
<button className="absolute top-4 right-4 rounded-full bg-zinc-900/80 border border-zinc-700 p-2 hover:border-[#D4FF00] hover:text-[#D4FF00] transition-colors duration-200" data-product-modal-close="">
<span className="sr-only">Close</span>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 6l12 12M6 18L18 6" strokeLinecap="round"></path>
</svg>
</button>
<div className="grid lg:grid-cols-[3fr,2fr] gap-0 overflow-hidden rounded-3xl">
<div className="bg-black/80 flex flex-col">
<div className="relative">
<img alt="Women's Packit Jacket with stylish fit and large pockets" className="w-full max-h-[22rem] sm:max-h-[26rem] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
<span className="rounded-full bg-black/80 text-[#D4FF00] px-3 py-1 font-semibold tracking-[0.16em] uppercase">
                      WOMEN'S PACKIT JACKET
                    </span>
<span className="rounded-full bg-white/90 text-black px-2 py-1 font-medium">
                      1 / 12
                    </span>
</div>
</div>
</div>
<div className="bg-zinc-950 flex flex-col p-5 sm:p-6 lg:p-7">
<h3 className="text-xl sm:text-2xl font-black tracking-tight mb-1">
                  WOMEN'S PACKIT JACKET
                </h3>
<p className="text-xs sm:text-sm text-zinc-400 mb-4">
                  Streetwear fit. Travel hacker soul.
                </p>
<p className="text-xs sm:text-sm text-zinc-200 mb-4">
                  Cut for movement, built for chaos. Packs a long weekend’s worth of outfits without touching your bag allowance.
                </p>
<ul className="space-y-2 text-xs sm:text-sm text-zinc-200 mb-4">
<li className="flex items-start gap-2">
<span className="mt-[0.2rem] inline-flex h-1.5 w-1.5 rounded-full bg-[#D4FF00]"></span>
<span>Contoured silhouette with hidden volume in the pockets.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-[0.2rem] inline-flex h-1.5 w-1.5 rounded-full bg-[#D4FF00]"></span>
<span>Soft inner lining so you do not feel like you are wearing a suitcase.</span>
</li>
</ul>
<div className="mt-auto flex flex-wrap gap-2 text-xs">
<button className="rounded-full bg-[#D4FF00] text-black font-semibold tracking-wide px-4 py-2 hover:scale-105 transition-transform duration-300">
                    SHOP NOW
                  </button>
<button className="rounded-full border border-zinc-600 text-zinc-100 font-medium tracking-wide px-4 py-2 hover:border-[#D4FF00] hover:text-[#D4FF00] transition-colors duration-200">
                    SIZE GUIDE
                  </button>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-40 hidden items-center justify-center bg-black/80 backdrop-blur" id="product-modal-cubes">
<div className="relative max-w-4xl w-full mx-4 sm:mx-6 lg:mx-auto rounded-3xl bg-zinc-950 text-white border border-zinc-800 shadow-2xl max-h-[90vh] flex flex-col">
<button className="absolute top-4 right-4 rounded-full bg-zinc-900/80 border border-zinc-700 p-2 hover:border-[#D4FF00] hover:text-[#D4FF00] transition-colors duration-200" data-product-modal-close="">
<span className="sr-only">Close</span>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 6l12 12M6 18L18 6" strokeLinecap="round"></path>
</svg>
</button>
<div className="grid md:grid-cols-[3fr,2fr] gap-0 overflow-hidden rounded-3xl">
<div className="bg-black/80 flex flex-col">
<div className="relative">
<img alt="Packit packing cubes compressed with clothes" className="w-full max-h-[22rem] sm:max-h-[26rem] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
<span className="rounded-full bg-black/80 text-[#D4FF00] px-3 py-1 font-semibold tracking-[0.16em] uppercase">
                      PACKING CUBES
                    </span>
<span className="rounded-full bg-white/90 text-black px-2 py-1 font-medium">
                      1 / 8
                    </span>
</div>
</div>
</div>
<div className="bg-zinc-950 flex flex-col p-5 sm:p-6 lg:p-7">
<h3 className="text-xl sm:text-2xl font-black tracking-tight mb-1">
                  PACKIT CUBES SET
                </h3>
<p className="text-xs sm:text-sm text-zinc-400 mb-4">
                  Built to lock into your jacket pockets.
                </p>
<ul className="space-y-2 text-xs sm:text-sm text-zinc-200 mb-4">
<li className="flex items-start gap-2">
<span className="mt-[0.2rem] inline-flex h-1.5 w-1.5 rounded-full bg-[#D4FF00]"></span>
<span>Three compression cubes sized exactly for Packit pockets.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-[0.2rem] inline-flex h-1.5 w-1.5 rounded-full bg-[#D4FF00]"></span>
<span>Ripstop shell, jail-tight zippers, translucent tops.</span>
</li>
</ul>
<div className="mt-auto flex flex-wrap gap-2 text-xs">
<button className="rounded-full bg-[#D4FF00] text-black font-semibold tracking-wide px-4 py-2 hover:scale-105 transition-transform duration-300">
                    SHOP NOW
                  </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F5F5F5] text-black py-20 sm:py-24 lg:py-28" id="testimonials">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              DON'T TRUST US. TRUST THEM.
            </h2>
<p className="text-sm sm:text-base text-[#6B6B6B] max-w-md">
              Real travelers. Real trips. Real baggage fees they did not pay.
            </p>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6 lg:gap-8">

<article className="rounded-3xl bg-white border border-zinc-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
<div className="relative">
<img alt="Customer video thumbnail: Backpacker wearing Packit Jacket" className="w-full h-40 sm:h-44 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<button aria-label="Play customer testimonial video" className="absolute inset-0 flex items-center justify-center">
<div className="rounded-full bg-black/80 border border-white/80 p-3 sm:p-4">
<svg className="w-7 h-7 text-[#D4FF00]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon fill="currentColor" points="9 7 16 12 9 17" stroke="none"></polygon>
</svg>
</div>
</button>
</div>
<div className="p-5 sm:p-6">
<h3 className="text-sm sm:text-base font-semibold mb-1">
                  “Saved €180 on my Eurotrip.”
                </h3>
<p className="text-sm text-[#6B6B6B] mb-3">
                  10 days. Budget airlines. Zero baggage fees.
                </p>
<p className="text-xs text-zinc-500">
                  — Lina, Berlin ⇄ Lisbon ⇄ Rome
                </p>
</div>
</article>
<article className="rounded-3xl bg-white border border-zinc-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
<div className="relative">
<img alt="Customer video thumbnail: Digital nomad at airport in Packit Jacket" className="w-full h-40 sm:h-44 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<button aria-label="Play customer testimonial video" className="absolute inset-0 flex items-center justify-center">
<div className="rounded-full bg-black/80 border border-white/80 p-3 sm:p-4">
<svg className="w-7 h-7 text-[#D4FF00]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon fill="currentColor" points="9 7 16 12 9 17" stroke="none"></polygon>
</svg>
</div>
</button>
</div>
<div className="p-5 sm:p-6">
<h3 className="text-sm sm:text-base font-semibold mb-1">
                  “It literally replaced my backpack.”
                </h3>
<p className="text-sm text-[#6B6B6B] mb-3">
                  Laptop, camera, two outfits all on my body.
                </p>
<p className="text-xs text-zinc-500">
                  — Marco, remote worker, 6 flights in 3 weeks
                </p>
</div>
</article>
<article className="rounded-3xl bg-white border border-zinc-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
<div className="relative">
<img alt="Customer video thumbnail: Family traveler with Packit Jacket" className="w-full h-40 sm:h-44 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<button aria-label="Play customer testimonial video" className="absolute inset-0 flex items-center justify-center">
<div className="rounded-full bg-black/80 border border-white/80 p-3 sm:p-4">
<svg className="w-7 h-7 text-[#D4FF00]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon fill="currentColor" points="9 7 16 12 9 17" stroke="none"></polygon>
</svg>
</div>
</button>
</div>
<div className="p-5 sm:p-6">
<h3 className="text-sm sm:text-base font-semibold mb-1">
                  “Paid for itself on our first family trip.”
                </h3>
<p className="text-sm text-[#6B6B6B] mb-3">
                  No extra bags for kids’ stuff. Airlines got nothing.
                </p>
<p className="text-xs text-zinc-500">
                  — Jamil &amp; Sara, parents of two
                </p>
</div>
</article>
</div>
</div>
</section>

<section className="bg-white text-black py-20 sm:py-24 lg:py-28" id="pricing">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto">
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              ONE JACKET. ENDLESS ADVENTURES.
            </h2>
<p className="mt-4 text-base sm:text-lg text-[#6B6B6B]">
              It literally pays for itself in one trip. After that, every flight is you stealing your money back.
            </p>
</div>
<div className="mt-12 grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">

<article className="relative rounded-3xl border border-zinc-200 bg-zinc-50 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6 sm:p-7 flex flex-col">
<div className="mb-4">
<h3 className="text-lg sm:text-xl font-semibold tracking-tight">
                  BASIC
                </h3>
<p className="text-xs sm:text-sm text-[#6B6B6B] mt-1">
                  Just the jacket. Still ruins airline profits.
                </p>
</div>
<div className="flex items-baseline gap-2 mb-4">
<span className="text-2xl sm:text-3xl font-semibold">€99</span>
<span className="text-xs text-[#6B6B6B]">incl. VAT</span>
</div>
<ul className="space-y-2 text-sm text-black mb-6">
<li className="flex items-start gap-2">
<span className="mt-[0.28rem] inline-flex h-1.5 w-1.5 rounded-full bg-[#D4FF00]"></span>
<span>Free worldwide shipping.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-[0.28rem] inline-flex h-1.5 w-1.5 rounded-full bg-[#D4FF00]"></span>
<span>4 huge pockets engineered to replace your carry-on.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-[0.28rem] inline-flex h-1.5 w-1.5 rounded-full bg-[#D4FF00]"></span>
<span>Water-resistant, wind-ready shell.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-[0.28rem] inline-flex h-1.5 w-1.5 rounded-full bg-[#D4FF00]"></span>
<span>Airport security &amp; TSA compliant.</span>
</li>
</ul>
<button className="mt-auto inline-flex items-center justify-center rounded-full bg-[#D4FF00] text-black font-semibold tracking-wide px-5 py-3 text-sm hover:scale-105 transition-transform duration-300">
                BUY NOW
              </button>
</article>

<article className="relative rounded-3xl border border-black bg-black text-white shadow-xl shadow-black/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6 sm:p-7 flex flex-col">
<div className="absolute -top-3 right-5">
<span className="rounded-full bg-[#D4FF00] text-black text-[0.65rem] font-semibold tracking-[0.18em] uppercase px-3 py-1 shadow-md">
                  MOST POPULAR
                </span>
</div>
<div className="mb-4">
<h3 className="text-lg sm:text-xl font-semibold tracking-tight">
                  COMPLETE
                </h3>
<p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Jacket + cubes. Max stealth. Max savings.
                </p>
</div>
<div className="flex items-baseline gap-2 mb-4">
<span className="text-2xl sm:text-3xl font-semibold text-[#D4FF00]">€119</span>
<span className="text-xs text-zinc-400">incl. VAT</span>
</div>
<ul className="space-y-2 text-sm text-zinc-100 mb-6">
<li className="flex items-start gap-2">
<span className="mt-[0.28rem] inline-flex h-1.5 w-1.5 rounded-full bg-[#D4FF00]"></span>
<span>Everything in Basic.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-[0.28rem] inline-flex h-1.5 w-1.5 rounded-full bg-[#D4FF00]"></span>
<span>+ 3 custom Packit packing cubes sized to your pockets.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-[0.28rem] inline-flex h-1.5 w-1.5 rounded-full bg-[#D4FF00]"></span>
<span>Optimized packing system guide included.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-[0.28rem] inline-flex h-1.5 w-1.5 rounded-full bg-[#D4FF00]"></span>
<span>Saves you €120+ on your first round trip alone.</span>
</li>
</ul>
<button className="mt-auto inline-flex items-center justify-center rounded-full bg-[#D4FF00] text-black font-semibold tracking-wide px-5 py-3 text-sm hover:scale-105 transition-transform duration-300">
                BUY NOW
              </button>
</article>
</div>
</div>
</section>

<section className="bg-white text-black border-t border-zinc-200" id="craftsmanship">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 grid lg:grid-cols-[1.2fr,1.6fr] gap-10 lg:gap-16">

<div className="space-y-6">
<h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              BUILT LIKE STREETWEAR. THINKS LIKE A SMUGGLER.
            </h2>
<p className="text-base sm:text-lg text-[#6B6B6B]">
              This is not some thin “travel vest” from an in-flight magazine. It is a premium jacket that just happens to bankrupt baggage fees.
            </p>
<ul className="space-y-3 text-sm text-black">
<li className="flex items-start gap-2">
<span className="mt-[0.34rem] inline-flex h-1.5 w-1.5 rounded-full bg-black"></span>
<span>Reinforced seams on all pockets so you can actually load them without ripping anything.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-[0.34rem] inline-flex h-1.5 w-1.5 rounded-full bg-black"></span>
<span>YKK zippers that do not explode mid-boarding call.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-[0.34rem] inline-flex h-1.5 w-1.5 rounded-full bg-black"></span>
<span>Minimal branding. Maximum attitude. It looks at home on the street, not on a tour bus.</span>
</li>
</ul>
</div>

<div className="space-y-5" id="faq">
<h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
              FAQ
            </h3>

<div className="border border-zinc-200 rounded-2xl overflow-hidden">
<button className="w-full flex items-center justify-between text-left px-4 sm:px-5 py-4 sm:py-5 bg-zinc-50 hover:bg-zinc-100 transition-colors duration-200 faq-toggle">
<span className="text-sm sm:text-base font-semibold">
                  Is this legal?
                </span>
<svg className="w-4 h-4 text-zinc-500 faq-icon" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14M5 12h14" strokeLinecap="round"></path>
</svg>
</button>
<div className="px-4:px-5 pb-4 sm:pb-5 text-sm text-[#6B6B6B] hidden faq-content">
                100%. It is clothing. Airlines can not charge you for what you are wearing. They can charge for bags. So we made the jacket replace your bag.
              </div>
</div>
<div className="border border-zinc-200 rounded-2xl overflow-hidden">
<button className="w-full flex items-center justify-between text-left px-4 sm:px-5 py-4 sm:py-5 bg-zinc-50 hover:bg-zinc-100 transition-colors duration-200 faq-toggle">
<span className="text-sm sm:text-base font-semibold">
                  Will TSA stop me?
                </span>
<svg className="w-4 h-4 text-zinc-500 faq-icon" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14M5 12h14" strokeLinecap="round"></path>
</svg>
</button>
<div className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm text-[#6B6B6B] hidden faq-content">
                Nope. It is literally just a jacket with pockets. You still put laptops and liquids in bins like normal. We have flown this through every major airport you can think of.
              </div>
</div>
<div className="border border-zinc-200 rounded-2xl overflow-hidden">
<button className="w-full flex items-center justify-between text-left px-4 sm:px-5 py-4 sm:py-5 bg-zinc-50 hover:bg-zinc-100 transition-colors duration-200 faq-toggle">
<span className="text-sm sm:text-base font-semibold">
                  How much can I really fit?
                </span>
<svg className="w-4 h-4 text-zinc-500 faq-icon" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14M5 12h14" strokeLinecap="round"></path>
</svg>
</button>
<div className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm text-[#6B6B6B] hidden faq-content">
                A week’s worth of clothes minimum. We have seen people pack 2 weeks – two pairs of shoes, jeans, hoodies, shirts, toiletries, plus a laptop and cables.
              </div>
</div>
<div className="border border-zinc-200 rounded-2xl overflow-hidden">
<button className="w-full flex items-center justify-between text-left px-4 sm:px-5 py-4 sm:py-5 bg-zinc-50 hover:bg-zinc-100 transition-colors duration-200 faq-toggle">
<span className="text-sm sm:text-base font-semibold">
                  Is it comfortable fully loaded?
                </span>
<svg className="w-4 h-4 text-zinc-500 faq-icon" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14M5 12h14" strokeLinecap="round"></path>
</svg>
</button>
<div className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm text-[#6B6B6B] hidden faq-content">
                You will feel the weight, obviously. But the load is distributed around your torso instead of dragging from one shoulder like a bag. Our testers prefer it over backpacks for short-haul.
              </div>
</div>
</div>
</div>
</section>

<section className="bg-[#D4FF00] text-black py-20 sm:py-24 lg:py-28">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            YOUR NEXT FLIGHT. €0 IN BAGGAGE FEES.
          </h2>
<p className="mt-4 text-base sm:text-lg text-black/80 max-w-2xl mx-auto">
            This jacket pays for itself in one round trip. After that, every “carry-on fee” is money they never get from you again.
          </p>
<div className="mt-8 flex flex-wrap justify-center gap-4">
<a className="inline-flex items-center justify-center rounded-full bg-black text-[#D4FF00] font-semibold tracking-wide px-7 py-3.5 text-sm hover:bg-zinc-900 hover:scale-105 transition-all duration-300 shadow-xl shadow-black/40" href="#pricing">
              STOP PAYING AIRLINES
            </a>
<a className="inline-flex items-center justify-center rounded-full border border-black/60 text-black font-medium tracking-wide px-6 py-3 text-xs sm:text-sm hover:border-black hover:bg-black/5 transition-colors duration-200" href="#problem">
              See how airlines overcharge you
            </a>
</div>
</div>
</section>
</main>

<footer className="bg-black text-zinc-500 border-t border-zinc-900">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
<div className="flex items-center gap-2 text-zinc-400">
<span className="font-black tracking-[0.18em] text-[#D4FF00]">PACKIT</span>
<span className="text-zinc-700">JACKET</span>
<span className="h-1 w-1 rounded-full bg-zinc-700"></span>
<span>Designed for travelers. Not for airlines.</span>
</div>
<div className="flex items-center gap-5">
<a className="hover:text-[#D4FF00] transition-colors duration-200" href="#">Terms</a>
<a className="hover:text-[#D4FF00] transition-colors duration-200" href="#">Privacy</a>
</div>
</div>
</footer>
</div>



<style>
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  </style>

    </>
  );
}
