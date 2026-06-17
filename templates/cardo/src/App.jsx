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



tailwind.config = {
theme: {
extend: {
colors: {
acid: '#ccff00',
dark: '#050505',
surface: '#0f0f0f'
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
animation: {
'marquee': 'marquee 25s linear infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
}
}
}
}
}



      document.addEventListener('DOMContentLoaded', () => {
          // Reveal animations on scroll
          const observerOptions = {
              root: null,
              rootMargin: '0px',
              threshold: 0.1
          };

          const observer = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('active');
                      // Optional: Stop observing once revealed
                      // observer.unobserve(entry.target);
                  }
              });
          }, observerOptions);

          const revealElements = document.querySelectorAll('.reveal-text, .reveal-line');
          revealElements.forEach(el => observer.observe(el));
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
      
<div className="noise"></div>

<nav className="fixed w-full z-50 top-0 left-0 mix-blend-difference">
<div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-2xl font-bold tracking-tighter text-white flex items-center gap-1 group" href="#">
          CARDO
          <div className="w-2 h-2 bg-acid rounded-full group-hover:animate-pulse"></div>
</a>
<a className="hidden md:inline-flex items-center justify-center px-6 py-2 text-xs font-bold tracking-widest uppercase text-black bg-white hover:bg-acid transition-colors duration-300 rounded-none" href="#calculate">
          Calculate
        </a>
<button className="md:hidden text-white">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden bg-dark">

<div className="absolute inset-0 bg-grid opacity-30"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-acid rounded-full blur-[150px] opacity-[0.07] animate-pulse-slow"></div>
<div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full">
<div className="flex flex-col items-start w-full">

<div className="flex items-center gap-3 mb-6 reveal-text">
<span className="h-[1px] w-12 bg-acid"></span>
<span className="text-acid text-xs font-mono uppercase tracking-widest">
              Global Logistics System
            </span>
</div>

<h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold leading-[0.9] tracking-tighter text-white uppercase mix-blend-overlay reveal-text" style={{transitionDelay: '100ms'}}>
            Cargo
            <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600">
              Without
            </span>
<br/>
            Limits
          </h1>

<div className="flex flex-col md:flex-row items-end justify-between w-full mt-12 md:mt-24 border-t border-white/10 pt-8 reveal-text" style={{transitionDelay: '200ms'}}>
<p className="text-zinc-400 text-sm md:text-base max-w-sm leading-relaxed font-mono">
              // 01
              <br/>
              We erase borders between countries. Delivering commercial
              shipments from China, Turkey, and Europe. Fast. Tough. Turnkey.
            </p>
<a className="group mt-8 md:mt-0 flex items-center gap-4 text-xl font-bold tracking-tight text-white hover:text-acid transition-colors" href="#calculate">
              CALCULATE DELIVERY
              <span className="bg-white group-hover:bg-acid text-black p-2 rounded-full transition-colors duration-300">
<span className="iconify -rotate-45 group-hover:rotate-0 transition-transform duration-300" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="24"></span>
</span>
</a>
</div>
</div>
</div>
</section>

<div className="border-y border-white/10 bg-surface py-4 overflow-hidden relative z-20">
<div className="whitespace-nowrap animate-marquee flex gap-12 text-zinc-500 font-bold uppercase tracking-widest text-sm">
<span>
          China
          <span className="text-acid mx-2">•</span>
          Russia
        </span>
<span>
          Turkey
          <span className="text-acid mx-2">•</span>
          Russia
        </span>
<span>
          Europe
          <span className="text-acid mx-2">•</span>
          Russia
        </span>
<span>
          Worldwide
          <span className="text-acid mx-2">•</span>
          Logistics
        </span>
<span>
          China
          <span className="text-acid mx-2">•</span>
          Russia
        </span>
<span>
          Turkey
          <span className="text-acid mx-2">•</span>
          Russia
        </span>
<span>
          Europe
          <span className="text-acid mx-2">•</span>
          Russia
        </span>
<span>
          Worldwide
          <span className="text-acid mx-2">•</span>
          Logistics
        </span>
<span>
          China
          <span className="text-acid mx-2">•</span>
          Russia
        </span>
<span>
          Turkey
          <span className="text-acid mx-2">•</span>
          Russia
        </span>
<span>
          Europe
          <span className="text-acid mx-2">•</span>
          Russia
        </span>
<span>
          Worldwide
          <span className="text-acid mx-2">•</span>
          Logistics
        </span>
</div>
</div>

<section className="py-24 md:py-32 bg-dark relative">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-start">
<div className="sticky top-32 reveal-text">
<h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
              NOT JUST
              <br/>
<span className="text-zinc-600">LOGISTICS</span>
</h2>
<p className="text-zinc-400 max-w-sm">
              We take on all the routine of foreign trade. You do business, we
              move matter through space.
            </p>
</div>
<div className="space-y-12">
<div className="group reveal-text" style={{transitionDelay: '0ms'}}>
<div className="flex items-center gap-4 mb-4">
<span className="text-acid font-mono text-xs">/ 01</span>
<h3 className="text-2xl font-bold tracking-tight group-hover:text-acid transition-colors">
                  COMMERCIAL SHIPMENTS
                </h3>
</div>
<p className="text-zinc-500 text-sm pl-9 border-l border-white/10 ml-1.5 py-2">
                Wholesale supplies for sellers, retail, and manufacturing. From
                100 kg to full containers.
              </p>
</div>
<div className="group reveal-text" style={{transitionDelay: '100ms'}}>
<div className="flex items-center gap-4 mb-4">
<span className="text-acid font-mono text-xs">/ 02</span>
<h3 className="text-2xl font-bold tracking-tight group-hover:text-acid transition-colors">
                  MARKETPLACES
                </h3>
</div>
<p className="text-zinc-500 text-sm pl-9 border-l border-white/10 ml-1.5 py-2">
                Full cycle for Wildberries and Ozon. Packaging, labeling,
                delivery to marketplace warehouses.
              </p>
</div>
<div className="group reveal-text" style={{transitionDelay: '200ms'}}>
<div className="flex items-center gap-4 mb-4">
<span className="text-acid font-mono text-xs">/ 03</span>
<h3 className="text-2xl font-bold tracking-tight group-hover:text-acid transition-colors">
                  LEGAL CUSTOMS
                </h3>
</div>
<p className="text-zinc-500 text-sm pl-9 border-l border-white/10 ml-1.5 py-2">
                Official import, declarations, closing documents. Full legal
                purity.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-surface border-y border-white/5">
<div className="max-w-[1400px] mx-auto px-6">
<div className="mb-12 flex items-end justify-between reveal-text">
<h2 className="text-xs font-mono text-acid uppercase tracking-widest">
            Routes
          </h2>
<span className="hidden md:block text-zinc-600 text-xs">
            WORLDWIDE NETWORK
          </span>
</div>
<div className="flex flex-col">

<div className="group relative py-10 border-t border-white/10 cursor-pointer overflow-hidden reveal-text">
<div className="absolute inset-0 bg-acid/0 group-hover:bg-acid/5 transition-colors duration-500"></div>
<div className="relative z-10 flex items-center justify-between">
<div className="flex items-center gap-8 md:gap-16">
<span className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-700 group-hover:text-white transition-colors duration-300">
                  CN
                </span>
<span className="h-[2px] w-12 md:w-32 bg-zinc-800 group-hover:bg-acid transition-colors duration-300"></span>
<span className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
                  RU
                </span>
</div>
<div className="text-right">
<span className="block text-xs font-mono text-zinc-500 mb-1">
                  TRANSIT TIME
                </span>
<span className="block text-xl font-bold text-white group-hover:text-acid transition-colors">
                  12-18 DAYS
                </span>
</div>
</div>
</div>

<div className="group relative py-10 border-t border-white/10 cursor-pointer overflow-hidden reveal-text" style={{transitionDelay: '100ms'}}>
<div className="absolute inset-0 bg-acid/0 group-hover:bg-acid/5 transition-colors duration-500"></div>
<div className="relative z-10 flex items-center justify-between">
<div className="flex items-center gap-8 md:gap-16">
<span className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-700 group-hover:text-white transition-colors duration-300">
                  TR
                </span>
<span className="h-[2px] w-12 md:w-32 bg-zinc-800 group-hover:bg-acid transition-colors duration-300"></span>
<span className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
                  RU
                </span>
</div>
<div className="text-right">
<span className="block text-xs font-mono text-zinc-500 mb-1">
                  TRANSIT TIME
                </span>
<span className="block text-xl font-bold text-white group-hover:text-acid transition-colors">
                  7-10 DAYS
                </span>
</div>
</div>
</div>

<div className="group relative py-10 border-t border-b border-white/10 cursor-pointer overflow-hidden reveal-text" style={{transitionDelay: '200ms'}}>
<div className="absolute inset-0 bg-acid/0 group-hover:bg-acid/5 transition-colors duration-500"></div>
<div className="relative z-10 flex items-center justify-between">
<div className="flex items-center gap-8 md:gap-16">
<span className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-700 group-hover:text-white transition-colors duration-300">
                  EU
                </span>
<span className="h-[2px] w-12 md:w-32 bg-zinc-800 group-hover:bg-acid transition-colors duration-300"></span>
<span className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
                  RU
                </span>
</div>
<div className="text-right">
<span className="block text-xs font-mono text-zinc-500 mb-1">
                  TRANSIT TIME
                </span>
<span className="block text-xl font-bold text-white group-hover:text-acid transition-colors">
                  10-14 DAYS
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="group relative p-6 border border-white/10 hover:border-acid/50 transition-all duration-300 h-64 flex flex-col justify-between reveal-text">
<span className="text-6xl font-bold text-zinc-800 group-hover:text-white transition-colors">
              1
            </span>
<div>
<div className="w-full h-[1px] bg-white/20 mb-4 group-hover:bg-acid reveal-line"></div>
<h3 className="font-bold text-white mb-2">REQUEST</h3>
<p className="text-xs text-zinc-500">
                Leave a request. We clarify the details.
              </p>
</div>
</div>

<div className="group relative p-6 border border-white/10 hover:border-acid/50 transition-all duration-300 h-64 flex flex-col justify-between reveal-text" style={{transitionDelay: '100ms'}}>
<span className="text-6xl font-bold text-zinc-800 group-hover:text-white transition-colors">
              2
            </span>
<div>
<div className="w-full h-[1px] bg-white/20 mb-4 group-hover:bg-acid reveal-line"></div>
<h3 className="font-bold text-white mb-2">CALCULATION</h3>
<p className="text-xs text-zinc-500">
                We fix the price and terms in the contract.
              </p>
</div>
</div>

<div className="group relative p-6 border border-white/10 hover:border-acid/50 transition-all duration-300 h-64 flex flex-col justify-between reveal-text" style={{transitionDelay: '200ms'}}>
<span className="text-6xl font-bold text-zinc-800 group-hover:text-white transition-colors">
              3
            </span>
<div>
<div className="w-full h-[1px] bg-white/20 mb-4 group-hover:bg-acid reveal-line"></div>
<h3 className="font-bold text-white mb-2">DELIVERY</h3>
<p className="text-xs text-zinc-500">
                We pick up, pack, and transport. You track online.
              </p>
</div>
</div>

<div className="group relative p-6 border border-white/10 hover:border-acid/50 transition-all duration-300 h-64 flex flex-col justify-between reveal-text" style={{transitionDelay: '300ms'}}>
<span className="text-6xl font-bold text-zinc-800 group-hover:text-white transition-colors">
              4
            </span>
<div>
<div className="w-full h-[1px] bg-white/20 mb-4 group-hover:bg-acid reveal-line"></div>
<h3 className="font-bold text-white mb-2">RECEIVING</h3>
<p className="text-xs text-zinc-500">
                Cargo is yours. Documents are with the accountant.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-dark border-t border-white/5">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
<div className="p-8 border-l border-white/5 reveal-text">
<span className="iconify text-acid mb-4" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="32"></span>
<h4 className="font-bold uppercase tracking-tight text-lg mb-2">
              Speed
            </h4>
<p className="text-xs text-zinc-500">
              Own routes without intermediaries.
            </p>
</div>
<div className="p-8 border-l border-white/5 reveal-text" style={{transitionDelay: '100ms'}}>
<span className="iconify text-acid mb-4" data-icon="lucide:shield" data-strokeWidth="1.5" data-width="32"></span>
<h4 className="font-bold uppercase tracking-tight text-lg mb-2">
              Guarantee
            </h4>
<p className="text-xs text-zinc-500">
              Cargo insurance is included in the rate.
            </p>
</div>
<div className="p-8 border-l border-white/5 reveal-text" style={{transitionDelay: '200ms'}}>
<span className="iconify text-acid mb-4" data-icon="lucide:file-check-2" data-strokeWidth="1.5" data-width="32"></span>
<h4 className="font-bold uppercase tracking-tight text-lg mb-2">
              Documents
            </h4>
<p className="text-xs text-zinc-500">
              Full package for tax authorities.
            </p>
</div>
<div className="p-8 border-l border-r border-white/5 reveal-text" style={{transitionDelay: '300ms'}}>
<span className="iconify text-acid mb-4" data-icon="lucide:users" data-strokeWidth="1.5" data-width="32"></span>
<h4 className="font-bold uppercase tracking-tight text-lg mb-2">
              Support
            </h4>
<p className="text-xs text-zinc-500">Personal manager 24/7.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative bg-surface overflow-hidden" id="calculate">
<div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-acid/5 to-transparent"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="reveal-text text-center mb-16">
<h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-4 text-white">
            Request
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-acid to-white">
              calculation
            </span>
</h2>
<p className="text-zinc-500">No spam. Only numbers and deadlines.</p>
</div>
<form className="space-y-12">
<div className="grid md:grid-cols-2 gap-12">
<div className="relative group reveal-text">
<input className="block py-4 px-0 w-full text-xl text-white bg-transparent border-0 border-b-2 border-zinc-700 appearance-none focus:outline-none focus:ring-0 focus:border-acid peer transition-colors" id="name" placeholder=" " required="" type="text"/>
<label className="peer-focus:font-medium absolute text-lg text-zinc-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-acid peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="name">
                YOUR NAME
              </label>
</div>
<div className="relative group reveal-text" style={{transitionDelay: '100ms'}}>
<input className="block py-4 px-0 w-full text-xl text-white bg-transparent border-0 border-b-2 border-zinc-700 appearance-none focus:outline-none focus:ring-0 focus:border-acid peer transition-colors" id="phone" placeholder=" " required="" type="tel"/>
<label className="peer-focus:font-medium absolute text-lg text-zinc-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-acid peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="phone">
                PHONE
              </label>
</div>
</div>
<div className="grid md:grid-cols-2 gap-12">
<div className="relative group reveal-text" style={{transitionDelay: '150ms'}}>
<input className="block py-4 px-0 w-full text-xl text-white bg-transparent border-0 border-b-2 border-zinc-700 appearance-none focus:outline-none focus:ring-0 focus:border-acid peer transition-colors" id="from" placeholder=" " type="text"/>
<label className="peer-focus:font-medium absolute text-lg text-zinc-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-acid peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="from">
                FROM
              </label>
</div>
<div className="relative group reveal-text" style={{transitionDelay: '200ms'}}>
<input className="block py-4 px-0 w-full text-xl text-white bg-transparent border-0 border-b-2 border-zinc-700 appearance-none focus:outline-none focus:ring-0 focus:border-acid peer transition-colors" id="to" placeholder=" " type="text"/>
<label className="peer-focus:font-medium absolute text-lg text-zinc-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-acid peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="to">
                TO
              </label>
</div>
</div>
<div className="relative group reveal-text" style={{transitionDelay: '250ms'}}>
<input className="block py-4 px-0 w-full text-xl text-white bg-transparent border-0 border-b-2 border-zinc-700 appearance-none focus:outline-none focus:ring-0 focus:border-acid peer transition-colors" id="cargo" placeholder=" " type="text"/>
<label className="peer-focus:font-medium absolute text-lg text-zinc-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-acid peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="cargo">
              CARGO TYPE AND WEIGHT
            </label>
</div>
<div className="reveal-text pt-8" style={{transitionDelay: '300ms'}}>
<button className="w-full py-6 bg-acid hover:bg-white text-black font-bold uppercase tracking-widest text-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group" type="button">
<span className="relative z-10">Send request</span>
</button>
<p className="text-zinc-600 text-xs mt-4 text-center">
              By clicking the button, you agree to our privacy policy.
            </p>
</div>
</form>
</div>
</section>

<section className="py-32 bg-dark flex items-center justify-center border-t border-white/5">
<div className="text-center reveal-text">
<h2 className="text-4xl md:text-8xl font-bold uppercase tracking-tighter text-white mb-8">
          Ready to
          <span className="outline-text text-transparent bg-clip-text" style={{WebkitTextStroke: '1px white'}}>
            Move?
          </span>
</h2>
<a className="inline-flex items-center gap-2 text-acid hover:text-white transition-colors uppercase tracking-widest font-bold border-b border-acid hover:border-white pb-1" href="#calculate">
          Contact us
          <span className="iconify" data-icon="lucide:arrow-up-right" data-width="20"></span>
</a>
</div>
</section>

<footer className="bg-black py-12 border-t border-zinc-900">
<div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-end md:items-center gap-8">
<div>
<a className="text-2xl font-bold tracking-tighter text-white mb-2 block" href="#">
            CARDO
          </a>
<p className="text-zinc-600 text-xs">
            © 2024 CARDO Logistics.
            <br/>
            All rights reserved.
          </p>
</div>
</div>
</footer>


    </>
  );
}
