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



      // Smooth Reveal on Scroll
      document.addEventListener('DOMContentLoaded', () => {
          const observerOptions = {
              root: null,
              rootMargin: '0px',
              threshold: 0.1
          };

          const observer = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('active');
                      observer.unobserve(entry.target);
                  }
              });
          }, observerOptions);

          const scrollElements = document.querySelectorAll('.reveal');
          scrollElements.forEach(el => observer.observe(el));
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
      

<div className="relative w-full max-w-[1600px] bg-white rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-black/5 flex flex-col">

<div className="relative w-full h-[90vh] bg-neutral-950 overflow-hidden shrink-0">

<div className="absolute inset-0 animate-enter duration-1000">
<img alt="Cafe Interior" className="w-full h-full object-cover object-center opacity-70 scale-105" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&amp;w=2547&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>
</div>

<nav className="absolute top-0 left-0 right-0 z-50 py-8 flex justify-between items-start animate-enter delay-500 px-8 md:px-16">
<a className="flex items-center gap-3 group" href="#">
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-orange-400 group-hover:bg-white group-hover:text-orange-500 transition-all duration-300 shadow-lg shadow-black/5">
<iconify-icon height="20" icon="solar:chef-hat-heart-bold-duotone" width="20"></iconify-icon>
</div>
<div className="flex flex-col justify-center">
<span className="text-white font-jakarta font-bold text-lg leading-tight tracking-tight">
                Modak-Cafe
              </span>
<span className="text-white/70 font-jakarta text-[10px] font-medium tracking-widest uppercase">
                n Restaurant
              </span>
</div>
</a>
<div className="hidden md:flex items-center gap-3">
<span className="px-4 py-2 rounded-full border border-white/10 text-neutral-200 bg-black/20 backdrop-blur-md text-xs font-medium tracking-wide font-geist flex items-center gap-2">
<iconify-icon height="16" icon="solar:clock-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
              Open until 10:00 PM
            </span>
</div>
</nav>

<div className="relative w-full h-full flex flex-col justify-end pb-16 md:pb-24 px-8 md:px-16 pointer-events-none">
<div className="pointer-events-auto">

<div className="flex flex-wrap items-center gap-3 mb-8 animate-enter delay-100">
<div className="flex items-center gap-2 bg-white text-black px-4 py-1.5 rounded-full text-xs font-semibold font-geist shadow-xl hover:scale-105 transition-transform duration-300 border border-white">
<iconify-icon className="text-orange-500" height="16" icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
                4.9
                <span className="text-neutral-400 font-medium">(840+ reviews)</span>
</div>
<div className="flex items-center gap-2 glass-panel text-white px-4 py-1.5 rounded-full text-xs font-medium font-geist hover:bg-white/20 transition-colors">
<iconify-icon height="16" icon="solar:wallet-linear" strokeWidth="1.5" width="16"></iconify-icon>
                Affordable Luxury
              </div>
</div>
<h1 className="text-white font-jakarta leading-[0.95] drop-shadow-2xl max-w-5xl animate-enter delay-200 text-5xl md:text-8xl mb-8 font-semibold tracking-tighter">
              Good Food...
              <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-white to-white">
                Good Life.
              </span>
</h1>
<p className="text-neutral-300 text-lg md:text-xl font-light max-w-lg leading-relaxed font-geist mb-12 animate-enter delay-300">
              Experience the perfect blend of cafe culture and dining in
              Sanawad. Providing a "Good Food...Good Life" experience since
              2022.
            </p>
<div className="flex flex-col md:flex-row items-start md:items-center gap-4 animate-enter delay-500">
<button className="flex items-center gap-3 bg-white text-black pl-6 pr-2 py-2 rounded-full font-semibold text-sm hover:bg-neutral-100 transition-all font-geist group shadow-lg shadow-white/10">
                Explore Menu
                <span className="bg-black text-white p-2 rounded-full transition-transform group-hover:rotate-45 duration-300 flex items-center justify-center">
<iconify-icon height="18" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="18"></iconify-icon>
</span>
</button>
<button className="flex items-center gap-3 glass-panel text-white pl-6 pr-2 py-2 rounded-full font-medium text-sm hover:bg-white/10 transition-all font-geist group backdrop-blur-md">
                Reserve a Table
                <span className="bg-white/10 text-white p-2 rounded-full border border-white/10 flex items-center justify-center">
<iconify-icon height="18" icon="solar:calendar-add-linear" strokeWidth="1.5" width="18"></iconify-icon>
</span>
</button>
</div>
</div>
</div>
</div>

<section className="bg-white w-full px-8 md:px-20 py-24 md:py-32">
<div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-20 lg:gap-24">

<div className="lg:col-span-5 flex flex-col gap-8 reveal">
<div>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neutral-200 bg-neutral-50 text-[10px] font-semibold text-neutral-500 font-geist tracking-widest uppercase mb-8">
<span className="w-1 h-1 bg-neutral-400 rounded-full"></span>
                Since May 3, 2022
              </span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight leading-[1.1] text-neutral-900 font-jakarta mb-6">
                Where every bite
                <br/>
                tells a story.
              </h2>
<p className="text-neutral-500 font-geist leading-relaxed text-lg mb-8 font-light">
                Modak-Cafe n Restaurant is Sanawad's sanctuary for flavor
                enthusiasts. We blend the warmth of traditional hospitality with
                the sleekness of modern cafe culture, guided by our motto: Good
                Food...Good Life.
              </p>
<div className="space-y-4">
<div className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-100 transition-colors hover:border-neutral-200">
<div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
<iconify-icon height="20" icon="solar:chef-hat-heart-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold font-jakarta text-neutral-900">
                      Handcrafted Sweets
                    </h4>
<p className="text-xs text-neutral-500 font-geist mt-1 leading-relaxed">
                      Signature Modaks made fresh daily with premium saffron and
                      cardamom.
                    </p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-100 transition-colors hover:border-neutral-200">
<div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
<iconify-icon height="20" icon="solar:cup-hot-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold font-jakarta text-neutral-900">
                      Artisan Coffee
                    </h4>
<p className="text-xs text-neutral-500 font-geist mt-1 leading-relaxed">
                      Single-origin beans roasted to perfection for the ultimate
                      brew.
                    </p>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="bg-neutral-50/50 rounded-[2.5rem] border border-neutral-100 h-full reveal reveal-delay-200 relative overflow-hidden p-10 md:p-14">

<div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-30"></div>
<div className="relative z-10 flex justify-between items-end mb-10">
<h3 className="text-2xl font-medium font-jakarta tracking-tight text-neutral-900">
                  Curated Menu
                </h3>
<a className="text-xs font-semibold border-b border-neutral-300 pb-0.5 hover:text-orange-600 hover:border-orange-600 transition-colors font-geist flex items-center gap-1" href="#">
                  View Full Menu
                  <iconify-icon height="12" icon="solar:arrow-right-linear" width="12"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-6">

<div className="group bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 flex flex-col items-center text-center gap-4 hover-lift cursor-pointer reveal reveal-delay-100">
<div className="w-12 h-12 rounded-full bg-neutral-50 group-hover:bg-orange-50 text-neutral-600 group-hover:text-orange-600 transition-colors flex items-center justify-center">
<iconify-icon height="24" icon="solar:tea-cup-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="font-medium font-geist text-sm text-neutral-800">
                    Breakfast
                  </span>
</div>
<div className="group bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 flex flex-col items-center text-center gap-4 hover-lift cursor-pointer reveal reveal-delay-100">
<div className="w-12 h-12 rounded-full bg-neutral-50 group-hover:bg-orange-50 text-neutral-600 group-hover:text-orange-600 transition-colors flex items-center justify-center">
<iconify-icon height="24" icon="solar:donut-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="font-medium font-geist text-sm text-neutral-800">
                    Sweets
                  </span>
</div>
<div className="group bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 flex flex-col items-center text-center gap-4 hover-lift cursor-pointer reveal reveal-delay-200">
<div className="w-12 h-12 rounded-full bg-neutral-50 group-hover:bg-orange-50 text-neutral-600 group-hover:text-orange-600 transition-colors flex items-center justify-center">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="font-medium font-geist text-sm text-neutral-800">
                    Bistro
                  </span>
</div>
<div className="group bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 flex flex-col items-center text-center gap-4 hover-lift cursor-pointer reveal reveal-delay-200">
<div className="w-12 h-12 rounded-full bg-neutral-50 group-hover:bg-orange-50 text-neutral-600 group-hover:text-orange-600 transition-colors flex items-center justify-center">
<iconify-icon height="24" icon="solar:wineglass-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="font-medium font-geist text-sm text-neutral-800">
                    Beverages
                  </span>
</div>
<div className="group bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 flex flex-col items-center text-center gap-4 hover-lift cursor-pointer reveal reveal-delay-300">
<div className="w-12 h-12 rounded-full bg-neutral-50 group-hover:bg-orange-50 text-neutral-600 group-hover:text-orange-600 transition-colors flex items-center justify-center">
<iconify-icon height="24" icon="solar:fire-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="font-medium font-geist text-sm text-neutral-800">
                    Specials
                  </span>
</div>
<div className="group bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 flex flex-col items-center text-center gap-4 hover-lift cursor-pointer reveal reveal-delay-300">
<div className="w-12 h-12 rounded-full bg-neutral-50 group-hover:bg-orange-50 text-neutral-600 group-hover:text-orange-600 transition-colors flex items-center justify-center">
<iconify-icon height="24" icon="solar:leaf-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="font-medium font-geist text-sm text-neutral-800">
                    Vegan
                  </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0A0A0A] w-full text-white px-8 md:px-20 py-24 md:py-32">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 reveal">
<div className="max-w-2xl">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight font-jakarta leading-[1.1] mb-6">
              Designed for
              <span className="text-neutral-500">Connection.</span>
</h2>
<p className="text-neutral-400 text-lg font-light max-w-lg font-geist">
              Whether you need a quiet corner to work or a large table for
              celebration, our space adapts to your needs.
            </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-6 grid-rows-[auto_auto] gap-8">

<div className="md:col-span-2 md:row-span-2 relative bg-neutral-900 rounded-[2rem] p-8 border border-white/5 transition-all hover:border-white/10 flex flex-col justify-between min-h-[360px] reveal group">
<div className="w-12 h-12 glass-panel-dark rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:bell-bing-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-medium font-jakarta tracking-tight mb-6">
                Premium Services
              </h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-neutral-400 font-geist text-sm hover:text-white transition-colors">
<iconify-icon className="text-white" icon="solar:check-circle-linear" width="16"></iconify-icon>
                  Table Service
                </li>
<li className="flex items-center gap-3 text-neutral-400 font-geist text-sm hover:text-white transition-colors">
<iconify-icon className="text-white" icon="solar:check-circle-linear" width="16"></iconify-icon>
                  Curbside Pickup
                </li>
<li className="flex items-center gap-3 text-neutral-400 font-geist text-sm hover:text-white transition-colors">
<iconify-icon className="text-white" icon="solar:check-circle-linear" width="16"></iconify-icon>
                  Event Catering
                </li>
<li className="flex items-center gap-3 text-neutral-400 font-geist text-sm hover:text-white transition-colors">
<iconify-icon className="text-white" icon="solar:check-circle-linear" width="16"></iconify-icon>
                  Private Booking
                </li>
</ul>
</div>
</div>

<div className="md:col-span-4 relative bg-neutral-900 rounded-[2rem] overflow-hidden p-10 group border border-white/5 min-h-[300px] reveal reveal-delay-200">
<img alt="Cafe Vibes" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition duration-1000" src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-end">
<span className="px-3 py-1 rounded-full bg-white/10 text-[10px] tracking-wider uppercase font-semibold backdrop-blur-md border border-white/10">
                  Ambience
                </span>
</div>
<div>
<h3 className="text-3xl font-medium font-jakarta tracking-tight mb-2">
                  Modern Comfort
                </h3>
<p className="text-white/70 font-geist text-sm max-w-sm">
                  Aesthetic interiors meeting cozy functionality.
                </p>
</div>
</div>
</div>

<div className="md:col-span-2 bg-neutral-800/40 rounded-[2rem] p-8 border border-white/5 flex flex-col justify-between reveal reveal-delay-300 hover:bg-neutral-800/60 transition-colors">
<div className="flex justify-between items-start">
<iconify-icon className="text-white" height="32" icon="solar:wi-fi-square-linear" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-xs text-neutral-500 font-geist">Free</span>
</div>
<div>
<h4 className="text-lg font-medium font-jakarta mt-4">
                High-Speed WiFi
              </h4>
<p className="text-xs text-neutral-400 mt-1 font-geist">
                Perfect for remote work.
              </p>
</div>
</div>

<div className="md:col-span-2 bg-neutral-800/40 rounded-[2rem] p-8 border border-white/5 flex flex-col justify-between reveal reveal-delay-300 hover:bg-neutral-800/60 transition-colors">
<div className="flex justify-between items-start">
<iconify-icon className="text-white" height="32" icon="solar:wheelchair-linear" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-xs text-neutral-500 font-geist">100%</span>
</div>
<div>
<h4 className="text-lg font-medium font-jakarta mt-4">Accessible</h4>
<p className="text-xs text-neutral-400 mt-1 font-geist">
                Ramps and facilities.
              </p>
</div>
</div>
</div>
</section>

<section className="bg-neutral-50 w-full relative overflow-hidden px-8 md:px-20 py-24 md:py-32">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">

<div className="bg-white rounded-[2rem] p-10 border border-neutral-200/60 shadow-sm flex flex-col justify-between h-full min-h-[320px] reveal hover:shadow-md transition-shadow">
<div>
<div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-8 text-neutral-800">
<iconify-icon height="24" icon="solar:map-point-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-neutral-900 font-jakarta mb-3 tracking-tight">
                Visit Us
              </h3>
<p className="text-neutral-500 font-geist text-lg leading-relaxed max-w-xs">
                Modak-Cafe n Restaurant,
                <br/>
                Sanawad,
                <br/>
                Madhya Pradesh
              </p>
</div>
<div className="mt-8 pt-8 border-t border-neutral-100">
<div className="flex items-center gap-2 text-xs font-medium text-neutral-500 font-geist uppercase tracking-wide">
<iconify-icon height="16" icon="solar:car-linear" width="16"></iconify-icon>
                Valet Parking Available
              </div>
</div>
</div>

<div className="bg-neutral-900 text-white rounded-[2rem] p-10 border border-neutral-800 shadow-2xl flex flex-col justify-between h-full min-h-[320px] relative overflow-hidden reveal reveal-delay-200">

<div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-bl-full blur-2xl pointer-events-none"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-8 backdrop-blur-md border border-white/10">
<iconify-icon height="24" icon="solar:history-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium font-jakarta mb-2 tracking-tight">
                Opening Hours
              </h3>
<p className="text-white/50 font-geist text-xs mb-8">
                *Kitchen closes 30m before closing
              </p>
<div className="space-y-4 font-geist text-sm">
<div className="flex justify-between items-center border-b border-white/5 pb-3">
<span className="text-white/70">Mon - Thu</span>
<span className="text-white font-medium">8:00 AM - 9:00 PM</span>
</div>
<div className="flex justify-between items-center border-b border-white/5 pb-3">
<span className="text-white/70">Fri - Sat</span>
<span className="text-white font-medium">8:00 AM - 11:00 PM</span>
</div>
<div className="flex justify-between items-center border-b border-white/5 pb-3">
<span className="text-white/70">Sunday</span>
<span className="text-white font-medium">9:00 AM - 9:00 PM</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white w-full border-t border-neutral-100 px-8 md:px-20 py-24 md:py-32">
<div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-[2.5rem] p-10 md:p-20 text-center relative overflow-hidden reveal shadow-2xl">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="relative z-10 max-w-3xl mx-auto">
<h2 className="text-4xl md:text-6xl font-medium font-jakarta text-white mb-6 tracking-tight">
              Craving something sweet?
            </h2>
<p className="text-neutral-400 text-lg font-geist mb-12 font-light">
              Book a table for the weekend or order our signature Modak boxes
              for your next event.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="w-full md:w-auto bg-white text-black px-8 py-4 rounded-full font-semibold font-geist hover:bg-neutral-200 transition flex items-center justify-center gap-3">
<iconify-icon height="20" icon="solar:phone-calling-linear" strokeWidth="2" width="20"></iconify-icon>
                +91 96302 84444
              </button>
<button className="w-full md:w-auto bg-green-600 text-white px-8 py-4 rounded-full font-semibold font-geist hover:bg-green-700 transition flex items-center justify-center gap-3 border border-green-500/50 shadow-lg shadow-green-900/30">
<iconify-icon height="20" icon="solar:chat-round-dots-linear" strokeWidth="2" width="20"></iconify-icon>
                WhatsApp Us
              </button>
</div>
</div>

<div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-6 text-neutral-500 text-xs font-geist uppercase tracking-widest">
<span className="text-neutral-600">Secure Payment Options</span>
<div className="flex gap-6 text-neutral-400">
<iconify-icon height="20" icon="solar:card-linear" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:wallet-money-linear" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:smartphone-linear" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-400 font-geist">
<p>© 2024 Modak-Cafe n Restaurant. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-neutral-900 transition-colors" href="#">
              Privacy
            </a>
<a className="hover:text-neutral-900 transition-colors" href="#">
              Terms
            </a>
<a className="hover:text-neutral-900 transition-colors" href="#">
              Instagram
            </a>
</div>
</div>
</section>
</div>


    </>
  );
}
