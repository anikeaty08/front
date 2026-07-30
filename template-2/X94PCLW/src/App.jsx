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



    lucide.createIcons();

    // Mobile menu toggle
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      // Update icon
      const icon = mobileBtn.querySelector('[data-lucide]');
      if (mobileMenu.classList.contains('hidden')) {
        icon.setAttribute('data-lucide', 'menu');
      } else {
        icon.setAttribute('data-lucide', 'x');
      }
      lucide.createIcons();
    });

    // Rent/Buy toggle
    const rentBtn = document.getElementById('rentBtn');
    const buyBtn = document.getElementById('buyBtn');

    function activate(btn, other) {
      btn.classList.add('bg-gray-900','text-white','shadow-lg');
      btn.classList.remove('hover:bg-white');
      other.classList.remove('bg-gray-900','text-white','shadow-lg');
      other.classList.add('hover:bg-white');
    }

    rentBtn.addEventListener('click', () => activate(rentBtn, buyBtn));
    buyBtn.addEventListener('click', () => activate(buyBtn, rentBtn));

    // Animate elements on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all sections for animation
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
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
      

<div className="w-full max-w-7xl shadow-2xl backdrop-blur-lg rounded-3xl border overflow-hidden animate-in fade-in duration-1000 bg-white/95 border-white/60">

<nav className="flex items-center justify-between px-6 lg:px-16 py-6 border-b animate-in slide-in-from-top duration-700 delay-300 border-gray-100/50">
<a className="text-xl font-bold tracking-tight transition-colors text-gray-900 hover:text-blue-600 font-sans" href="#">
<svg className="lucide lucide-building-2 w-6 h-6 inline mr-2" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
        ESTATEVAULT
      </a>
<ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
<li><a className="flex items-center gap-2 transition-colors hover:text-blue-600 font-sans" href="#">
<svg className="lucide lucide-tag w-4 h-4" data-lucide="tag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
          Sell Property
        </a></li>
<li><a className="flex items-center gap-2 transition-colors hover:text-blue-600 font-sans" href="#">
<svg className="lucide lucide-search w-4 h-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
          Buy Property
        </a></li>
<li><a className="flex items-center gap-2 transition-colors hover:text-blue-600 font-sans" href="#">
<svg className="lucide lucide-key w-4 h-4" data-lucide="key" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path><path d="m21 2-9.6 9.6"></path><circle cx="7.5" cy="15.5" r="5.5"></circle></svg>
          Rent
        </a></li>
<li><a className="flex items-center gap-2 transition-colors hover:text-blue-600 font-sans" href="#">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
          About us
        </a></li>
<li className=""></li>
</ul>
<div className="hidden lg:flex items-center gap-3">
<button className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-all border-gray-200 hover:bg-gray-50 hover:border-gray-300 font-sans">
<svg className="lucide lucide-log-in w-4 h-4" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
          Sign In
        </button>
<button className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all shadow-sm bg-blue-600 text-white hover:bg-blue-700 font-sans">
<svg className="lucide lucide-user-plus w-4 h-4" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
          Get Started
        </button>
</div>
<button className="lg:hidden flex items-center p-2 rounded-lg transition-colors hover:bg-gray-100" id="mobileMenuBtn">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</nav>

<div className="lg:hidden px-6 pb-6 hidden border-b border-gray-100" id="mobileMenu">
<ul className="flex flex-col gap-1 text-sm font-medium">
<li><a className="flex items-center gap-3 w-full py-3 px-3 rounded-lg transition-colors hover:bg-gray-50 font-sans" href="#">
<svg className="lucide lucide-tag w-4 h-4" data-lucide="tag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
          Sell Property
        </a></li>
<li><a className="flex items-center gap-3 w-full py-3 px-3 rounded-lg transition-colors hover:bg-gray-50 font-sans" href="#">
<svg className="lucide lucide-search w-4 h-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
          Buy Property
        </a></li>
<li><a className="flex items-center gap-3 w-full py-3 px-3 rounded-lg transition-colors hover:bg-gray-50 font-sans" href="#">
<svg className="lucide lucide-key w-4 h-4" data-lucide="key" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path><path d="m21 2-9.6 9.6"></path><circle cx="7.5" cy="15.5" r="5.5"></circle></svg>
          Rent
        </a></li>
<li><a className="flex items-center gap-3 w-full py-3 px-3 rounded-lg transition-colors hover:bg-gray-50 font-sans" href="#">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
          About us
        </a></li>
<li><a className="flex items-center gap-3 w-full py-3 px-3 rounded-lg transition-colors hover:bg-gray-50 font-sans" href="#">
<svg className="lucide lucide-book-open w-4 h-4" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
          Resources
        </a></li>
<li className="flex gap-2 mt-4">
<button className="flex-1 py-2 rounded-lg border text-sm font-medium transition-colors border-gray-200 hover:bg-gray-50 font-sans">Sign In</button>
<button className="flex-1 py-2 rounded-lg text-sm font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700 font-sans">Get Started</button>
</li>
</ul>
</div>

<section className="grid lg:grid-cols-2 gap-12 lg:gap-16 px-6 lg:px-16 py-12 lg:py-20 animate-in">

<div className="space-y-8 animate-in slide-in-from-left duration-700 delay-500">
<div className="inline-flex gap-2 text-sm font-medium text-blue-700 bg-blue-50 rounded-full pt-2 pr-4 pb-2 pl-4 items-center border border-black/10">
<svg className="lucide lucide-trending-up w-4 h-4" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
          #1 Real Estate Platform
        </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-gray-900 font-sans font-semibold">
          Discover Your <span className="text-blue-600 font-sans font-semibold">Perfect</span> Home Experience
        </h1>
<p className="text-lg max-w-lg leading-relaxed text-gray-600 font-sans">
          Find exceptional properties that match your lifestyle. From luxury estates to modern apartments, we connect you with your ideal living space.
        </p>

<div className="flex items-center gap-8 pt-4">
<div className="">
<div className="text-2xl text-gray-900 font-sans font-semibold">12K+</div>
<div className="text-sm text-gray-500 font-sans">Properties Listed</div>
</div>
<div className="w-px h-12 bg-gray-200"></div>
<div>
<div className="text-2xl text-gray-900 font-sans font-semibold">8.5K+</div>
<div className="text-sm text-gray-500 font-sans">Happy Clients</div>
</div>
<div className="w-px h-12 bg-gray-200"></div>
<div>
<div className="text-2xl text-gray-900 font-sans font-semibold">4.9</div>
<div className="text-sm text-gray-500 font-sans">Rating</div>
</div>
</div>

<div className="grid sm:grid-cols-2 gap-6 pt-4">

<div className="rounded-2xl shadow-lg border overflow-hidden hover:shadow-xl transition-all duration-300 animate-in slide-in-from-bottom duration-700 delay-700 bg-white border-gray-100">
<div className="relative">
<img alt="Modern Villa" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80" />
<div className="absolute top-3 left-3 bg-pink-500 px-2 py-1 rounded-lg text-xs font-medium text-white font-sans">Featured</div>
<button className="absolute top-3 right-3 flex items-center justify-center w-8 h-8 rounded-full backdrop-blur-sm hover:scale-110 transition-all bg-white/90 hover:bg-white">
<svg className="lucide lucide-heart w-4 h-4 text-gray-700" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
</div>
<div className="p-5">
<div className="flex items-start justify-between">
<div className="">
<h3 className="font-semibold text-gray-900 font-sans">Oceanview Modern Villa</h3>
<p className="text-sm text-gray-500 mt-1 flex items-center gap-1 font-sans">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    Malibu, California
                  </p>
</div>
<div className="text-right">
<div className="text-lg font-bold text-gray-900 font-sans">$2.8M</div>
<div className="text-xs text-gray-500 font-sans">$4,200/mo</div>
</div>
</div>
<div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100">
<div className="flex items-center gap-1 text-sm text-gray-600 font-sans">
                  
                  4 beds
                </div>
<div className="flex items-center gap-1 text-sm text-gray-600 font-sans">
                  
                  3 baths
                </div>
<div className="flex items-center gap-1 text-sm text-gray-600 font-sans">
                  
                  2,800 sqft
                </div>
</div>
</div>
</div>

<div className="bg-gradient-to-br rounded-2xl border p-6 flex flex-col justify-between animate-in slide-in-from-bottom duration-700 delay-900 from-blue-50 to-pink-50 border-blue-100">
<div className="">
<div className="flex items-center gap-2 mb-4">
<div className="w-10 h-10 rounded-xl flex items-center justify-center bg-blue-100">
<svg className="lucide lucide-sparkles w-5 h-5 text-indigo-600" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
</div>
<h4 className="font-semibold text-gray-900 font-sans">Premium Experience</h4>
</div>
<p className="text-sm leading-relaxed text-gray-600 font-sans">
                Access exclusive properties with virtual tours, AI-powered matching, and dedicated concierge service for a seamless experience.
              </p>
</div>
<button className="mt-6 inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all group text-blue-600 font-sans">
              Explore Premium
              <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="relative animate-in slide-in-from-right duration-700 delay-700">
<div className="relative rounded-3xl overflow-hidden shadow-2xl">
<img alt="Luxury Property" className="w-full object-cover aspect-[4/5] lg:aspect-[4/5]" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80" />

<div className="absolute top-6 left-6 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center gap-2 bg-white/95 font-sans">
<svg className="lucide lucide-award w-4 h-4 text-amber-500" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
            Premium Listing
          </div>
</div>

<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-md rounded-2xl shadow-2xl border p-6 animate-in slide-in-from-bottom duration-700 delay-1100 bg-white border-gray-100">
<div className="flex items-start justify-between gap-4 mb-4">
<div className="flex-1">
<h5 className="font-semibold text-gray-900 font-sans">Skyline Penthouse Suite</h5>
<p className="text-sm text-gray-500 mt-1 flex items-center gap-1 font-sans">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Downtown Manhattan, NY
              </p>
</div>
<div className="text-right">
<div className="text-xs text-gray-500 font-sans">Starting from</div>
<div className="font-bold text-xl text-gray-900 font-sans">$5.2M</div>
</div>
</div>
<div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
<div className="flex items-center gap-1 text-xs text-gray-600 font-sans">
<svg className="lucide lucide-bed w-3 h-3" data-lucide="bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg>
              5 beds
            </div>
<div className="flex items-center gap-1 text-xs text-gray-600 font-sans">
<svg className="lucide lucide-bath w-3 h-3" data-lucide="bath" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 4 8 6"></path><path d="M17 19v2"></path><path d="M2 12h20"></path><path d="M7 19v2"></path><path d="M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"></path></svg>
              4 baths
            </div>
<div className="flex items-center gap-1 text-xs text-gray-600 font-sans">
<svg className="lucide lucide-maximize w-3 h-3" data-lucide="maximize" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3H5a2 2 0 0 0-2 2v3"></path><path d="M21 8V5a2 2 0 0 0-2-2h-3"></path><path d="M3 16v3a2 2 0 0 0 2 2h3"></path><path d="M16 21h3a2 2 0 0 0 2-2v-3"></path></svg>
              4,500 sqft
            </div>
</div>
<div className="flex gap-3">
<button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all shadow-sm bg-gray-900 text-white hover:bg-gray-800 font-sans">
<svg className="lucide lucide-eye w-4 h-4" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
              Virtual Tour
            </button>
<button className="flex items-center justify-center w-12 h-12 rounded-xl border transition-all border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300">
<svg className="lucide lucide-share w-4 h-4" data-lucide="share" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v13"></path><path d="m16 6-4-4-4 4"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path></svg>
</button>
</div>
</div>
</div>
</section>

<section className="lg:px-16 animate-in slide-in-from-bottom duration-700 delay-1300 pr-6 pb-16 pl-6">
<div className="lg:p-8 bg-white border-gray-200 border rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-xl">
<div className="text-center mb-8">
<h2 className="text-2xl tracking-tight text-gray-900 font-sans font-semibold">Find Your Perfect Property</h2>
<p className="mt-2 text-gray-600 font-sans">Search through thousands of verified listings</p>
</div>

<div className="flex items-center rounded-2xl p-1 mb-8 max-w-xs mx-auto bg-gray-100">
<button className="active-toggle flex-1 py-3 text-sm font-medium rounded-xl transition-all flex items-center justify-center gap-2 bg-gray-900 text-white font-sans" id="rentBtn">
<svg className="lucide lucide-key w-4 h-4" data-lucide="key" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path><path d="m21 2-9.6 9.6"></path><circle cx="7.5" cy="15.5" r="5.5"></circle></svg>
            For Rent
          </button>
<button className="flex-1 py-3 text-sm font-medium rounded-xl transition-all flex items-center justify-center gap-2 hover:bg-white font-sans" id="buyBtn">
<svg className="lucide lucide-home w-4 h-4" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
            For Sale
          </button>
</div>

<form className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">

<div className="relative">
<label className="block text-xs font-medium text-gray-500 mb-2 font-sans">Location</label>
<div className="relative">
<svg className="lucide lucide-map-pin w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<select className="appearance-none w-full pl-11 pr-10 py-4 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-200 bg-white">
<option className="font-sans">New York, NY</option>
<option className="font-sans">Los Angeles, CA</option>
<option className="font-sans">Miami, FL</option>
<option className="font-sans">Chicago, IL</option>
<option className="font-sans">San Francisco, CA</option>
</select>
<svg className="lucide lucide-chevron-down w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>

<div className="relative">
<label className="block text-xs font-medium text-gray-500 mb-2 font-sans">Property Type</label>
<div className="relative">
<svg className="lucide lucide-building w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" data-lucide="building" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="16" x="4" y="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
<select className="appearance-none w-full pl-11 pr-10 py-4 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-200 bg-white">
<option className="font-sans">Apartment</option>
<option className="font-sans">House</option>
<option className="font-sans">Villa</option>
<option className="font-sans">Penthouse</option>
<option className="font-sans">Condo</option>
</select>
<svg className="lucide lucide-chevron-down w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>

<div className="relative">
<label className="block text-xs font-medium text-gray-500 mb-2 font-sans">Bedrooms</label>
<div className="relative">
<svg className="lucide lucide-bed w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" data-lucide="bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg>
<select className="appearance-none w-full pl-11 pr-10 py-4 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-200 bg-white">
<option className="font-sans">Any</option>
<option className="font-sans">1+ Bedrooms</option>
<option className="font-sans">2+ Bedrooms</option>
<option className="font-sans">3+ Bedrooms</option>
<option className="font-sans">4+ Bedrooms</option>
</select>
<svg className="lucide lucide-chevron-down w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>

<div className="relative">
<label className="block text-xs font-medium text-gray-500 mb-2 font-sans">Price Range</label>
<div className="relative">
<svg className="lucide lucide-dollar-sign w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
<select className="appearance-none w-full pl-11 pr-10 py-4 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-200 bg-white">
<option className="font-sans">$500K - $1M</option>
<option className="font-sans">$1M - $2M</option>
<option className="font-sans">$2M - $5M</option>
<option className="font-sans">$5M+</option>
</select>
<svg className="lucide lucide-chevron-down w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>

<div className="flex items-end sm:col-span-2 lg:col-span-4 xl:col-span-1">
<button className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-medium transition-all shadow-lg hover:shadow-xl bg-blue-600 text-white hover:bg-blue-700 font-sans" type="submit">
<svg className="lucide lucide-search w-4 h-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
              Search Properties
            </button>
</div>
</form>

<div className="flex flex-wrap gap-3 border-gray-100 border-t mt-6 pt-6">
<div className="text-sm font-medium text-gray-500">Quick filters:</div>
<button className="px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-blue-50 text-blue-700 hover:bg-blue-100 font-sans">
<svg className="lucide lucide-car w-3 h-3 inline mr-1" data-lucide="car" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>
            Parking
          </button>
<button className="px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-gray-50 text-gray-700 hover:bg-gray-100 font-sans">
<svg className="lucide lucide-waves w-3 h-3 inline mr-1" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
            Pool
          </button>
<button className="px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-gray-50 text-gray-700 hover:bg-gray-100 font-sans">
<svg className="lucide lucide-zap w-3 h-3 inline mr-1" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
            Smart Home
          </button>
<button className="px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-gray-50 text-gray-700 hover:bg-gray-100 font-sans">
<svg className="lucide lucide-trees w-3 h-3 inline mr-1" data-lucide="trees" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"></path><path d="M7 16v6"></path><path d="M13 19v3"></path><path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"></path></svg>
            Garden
          </button>
</div>
</div>
</section>
</div>


    </>
  );
}
