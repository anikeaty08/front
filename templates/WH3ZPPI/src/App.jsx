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
      
      lucide.createIcons();

      // Year
      const y = document.getElementById('year');
      if (y) y.textContent = new Date().getFullYear();

      // Mobile menu toggle
      const mobileBtn = document.getElementById('mobileMenuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const icon = mobileBtn.querySelector('[data-lucide]');
        if (mobileMenu.classList.contains('hidden')) {
          icon.setAttribute('data-lucide', 'menu');
        } else {
          icon.setAttribute('data-lucide', 'x');
        }
        lucide.createIcons();
      });

      // Testimonial slider
      const track = document.querySelector('#testimonialTrack > div');
      const prev = document.getElementById('prevTestimonial');
      const next = document.getElementById('nextTestimonial');
      const dots = [document.getElementById('dot0'), document.getElementById('dot1')];
      let idx = 0, len = 2, timer;

      function updateSlider() {
        track.style.transform = `translateX(-${idx * 100}%)`;
        dots.forEach((d, i) => {
          d.classList.toggle('bg-white/80', i === idx);
          d.classList.toggle('bg-white/30', i !== idx);
        });
      }
      function go(n) {
        idx = (idx + n + len) % len;
        updateSlider();
        resetAuto();
      }
      function auto() {
        timer = setInterval(() => { idx = (idx + 1) % len; updateSlider(); }, 5000);
      }
      function resetAuto() { clearInterval(timer); auto(); }

      prev.addEventListener('click', () => go(-1));
      next.addEventListener('click', () => go(1));
      updateSlider(); auto();

      // Re-init icons after dynamic changes (menu toggle)
      document.addEventListener('visibilitychange', () => { lucide.createIcons(); });

      // Intersection observer for subtle in-view animations
      const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('animate-in');
        });
      }, observerOptions);
      document.querySelectorAll('section').forEach(s => observer.observe(s));
    
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
      

<div className="w-full max-w-7xl mx-auto lg:py-10 px-4 lg:px-6">

<div className="w-full shadow-2xl backdrop-blur-xl rounded-3xl border overflow-hidden animate-in fade-in duration-700 bg-neutral-950/70 border-white/10">

<nav className="flex items-center justify-between px-6 lg:px-10 py-5 border-b animate-in slide-in-from-top duration-700 delay-200 border-white/10">
<a className="text-[18px] sm:text-lg font-semibold tracking-tight text-white/90 hover:text-white transition-colors inline-flex items-center gap-2" href="#">
<span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="w-5 h-5 text-white/80" data-lucide="building-2" fill="none" height="20" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"></svg>
</span>
<span className="tracking-[-0.02em]">ESTATEVAULT</span>
</a>
<ul className="hidden lg:flex items-center gap-7 text-sm font-medium text-white/70">
<li><a className="flex items-center gap-2 hover:text-white transition-colors" href="#listings"><svg className="w-4 h-4" data-lucide="search" height="20" style={{strokeWidth: '1.5'}} width="20" xmlns="http://www.w3.org/2000/svg"></svg>Listings</a></li>
<li><a className="flex items-center gap-2 hover:text-white transition-colors" href="#services"><svg className="w-4 h-4" data-lucide="briefcase" height="20" style={{strokeWidth: '1.5'}} width="20" xmlns="http://www.w3.org/2000/svg"></svg>Services</a></li>
<li><a className="flex items-center gap-2 hover:text-white transition-colors" href="#about"><svg className="w-4 h-4" data-lucide="users" height="20" style={{strokeWidth: '1.5'}} width="20" xmlns="http://www.w3.org/2000/svg"></svg>About</a></li>
<li><a className="flex items-center gap-2 hover:text-white transition-colors" href="#resources"><svg className="w-4 h-4" data-lucide="book-open" height="20" style={{strokeWidth: '1.5'}} width="20" xmlns="http://www.w3.org/2000/svg"></svg>Resources</a></li>
<li><a className="flex items-center gap-2 hover:text-white transition-colors" href="#contact"><svg className="w-4 h-4" data-lucide="phone" height="20" style={{strokeWidth: '1.5'}} width="20" xmlns="http://www.w3.org/2000/svg"></svg>Contact</a></li>
</ul>
<div className="hidden lg:flex items-center gap-3">
<button className="px-4 py-2 rounded-xl border text-sm font-medium transition-all border-white/10 hover:bg-white/5 hover:border-white/20 text-white/80 hover:text-white">
<svg className="w-4 h-4 mr-1.5 inline" data-lucide="log-in" height="20" style={{strokeWidth: '1.5'}} width="20" xmlns="http://www.w3.org/2000/svg"></svg>Sign In
            </button>
<a className="px-4 py-2 rounded-xl text-sm font-medium transition-all shadow-sm bg-blue-600 text-white hover:bg-blue-500" href="#listings">Get Started</a>
</div>
<button className="lg:hidden flex items-center p-2 rounded-lg transition-colors hover:bg-white/5 ring-1 ring-inset ring-white/10" id="mobileMenuBtn">
<svg className="w-5 h-5 text-white/80" data-lucide="menu" height="22" style={{strokeWidth: '1.5'}} width="22" xmlns="http://www.w3.org/2000/svg"></svg>
</button>
</nav>

<div className="lg:hidden px-6 pb-6 hidden border-b border-white/10" id="mobileMenu">
<ul className="flex flex-col gap-1 text-sm font-medium">
<li><a className="flex items-center gap-3 w-full py-3 px-3 rounded-lg transition-colors hover:bg-white/5 text-white/80 hover:text-white" href="#listings"><svg className="w-4 h-4" data-lucide="search" height="20" style={{strokeWidth: '1.5'}} width="20" xmlns="http://www.w3.org/2000/svg"></svg>Listings</a></li>
<li><a className="flex items-center gap-3 w-full py-3 px-3 rounded-lg transition-colors hover:bg-white/5 text-white/80 hover:text-white" href="#services"><svg className="w-4 h-4" data-lucide="briefcase" height="20" style={{strokeWidth: '1.5'}} width="20" xmlns="http://www.w3.org/2000/svg"></svg>Services</a></li>
<li><a className="flex items-center gap-3 w-full py-3 px-3 rounded-lg transition-colors hover:bg-white/5 text-white/80 hover:text-white" href="#about"><svg className="w-4 h-4" data-lucide="users" height="20" style={{strokeWidth: '1.5'}} width="20" xmlns="http://www.w3.org/2000/svg"></svg>About</a></li>
<li><a className="flex items-center gap-3 w-full py-3 px-3 rounded-lg transition-colors hover:bg-white/5 text-white/80 hover:text-white" href="#resources"><svg className="w-4 h-4" data-lucide="book-open" height="20" style={{strokeWidth: '1.5'}} width="20" xmlns="http://www.w3.org/2000/svg"></svg>Resources</a></li>
<li><a className="flex items-center gap-3 w-full py-3 px-3 rounded-lg transition-colors hover:bg-white/5 text-white/80 hover:text-white" href="#contact"><svg className="w-4 h-4" data-lucide="phone" height="20" style={{strokeWidth: '1.5'}} width="20" xmlns="http://www.w3.org/2000/svg"></svg>Contact</a></li>
<li className="flex gap-2 mt-4">
<button className="flex-1 py-2 rounded-lg border text-sm font-medium transition-colors border-white/10 hover:bg-white/5 text-white/80 hover:text-white">Sign In</button>
<a className="flex-1 py-2 rounded-lg text-sm font-medium transition-colors bg-blue-600 text-white hover:bg-blue-500 text-center" href="#listings">Get Started</a>
</li>
</ul>
</div>

<section className="grid lg:grid-cols-2 gap-10 lg:gap-16 px-6 lg:px-10 py-10 lg:py-16 animate-in">

<div className="space-y-8 animate-in slide-in-from-left duration-700 delay-300">
<div className="inline-flex gap-2 text-xs font-medium text-blue-300/90 bg-blue-500/10 rounded-full px-3 py-1 items-center ring-1 ring-inset ring-blue-400/20">
<svg className="w-4 h-4" data-lucide="sparkles" height="18" style={{strokeWidth: '1.5'}} width="18" xmlns="http://www.w3.org/2000/svg"></svg>
              Premium Real Estate Platform
            </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight font-semibold text-white">
              🏡 Find Your Dream Home, Invest in Your Future
            </h1>
<p className="text-base sm:text-lg max-w-xl leading-relaxed text-white/70">
              Whether you’re buying, selling, or investing, we make real estate simple, transparent, and rewarding. Discover the property that perfectly fits your lifestyle.
            </p>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
<a className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium bg-blue-600 text-white hover:bg-blue-500 transition-all ring-1 ring-inset ring-blue-400/20" href="#listings">
<svg className="w-4 h-4" data-lucide="compass" height="20" style={{strokeWidth: '1.5'}} width="20" xmlns="http://www.w3.org/2000/svg"></svg>
                Browse Listings
              </a>
<a className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium bg-white/5 text-white hover:bg-white/10 transition-all ring-1 ring-inset ring-white/10" href="#contact">
<svg className="w-4 h-4" data-lucide="calendar" height="20" style={{strokeWidth: '1.5'}} width="20" xmlns="http://www.w3.org/2000/svg"></svg>
                Schedule a Free Consultation
              </a>
</div>

<div className="flex items-center gap-8 pt-2">
<div>
<div className="text-2xl text-white font-semibold tracking-tight">12K+</div>
<div className="text-xs text-white/50">Properties Listed</div>
</div>
<div className="w-px h-10 bg-white/10"></div>
<div>
<div className="text-2xl text-white font-semibold tracking-tight">8.5K+</div>
<div className="text-xs text-white/50">Happy Clients</div>
</div>
<div className="w-px h-10 bg-white/10"></div>
<div>
<div className="text-2xl text-white font-semibold tracking-tight">4.9</div>
<div className="text-xs text-white/50">Rating</div>
</div>
</div>

<div className="grid sm:grid-cols-2 gap-5 pt-2">

<div className="rounded-2xl shadow-xl border overflow-hidden hover:shadow-2xl transition-all duration-300 animate-in slide-in-from-bottom duration-700 delay-500 bg-white/[0.04] border-white/10">
<div className="relative">
<img alt="Modern Villa" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute top-3 left-3 bg-pink-500/90 backdrop-blur px-2 py-1 rounded-md text-[11px] font-medium text-white ring-1 ring-pink-300/40">Featured</div>
<button className="absolute top-3 right-3 flex items-center justify-center w-8 h-8 rounded-full backdrop-blur hover:scale-110 transition-all bg-white/90 hover:bg-white ring-1 ring-inset ring-white/20">
<svg className="w-4 h-4 text-neutral-800" data-lucide="heart" height="18" style={{strokeWidth: '1.5'}} width="18" xmlns="http://www.w3.org/2000/svg"></svg>
</button>
</div>
<div className="p-5">
<div className="flex items-start justify-between">
<div>
<h3 className="font-semibold text-white tracking-tight">Oceanview Modern Villa</h3>
<p className="text-xs text-white/60 mt-1 flex items-center gap-1">
<svg className="w-3 h-3" data-lucide="map-pin" height="16" style={{strokeWidth: '1.5'}} width="16" xmlns="http://www.w3.org/2000/svg"></svg>
                        Malibu, California
                      </p>
</div>
<div className="text-right">
<div className="text-base font-semibold text-white tracking-tight">$2.8M</div>
<div className="text-[11px] text-white/50">$4,200/mo</div>
</div>
</div>
<div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/10 text-white/70">
<div className="text-xs">4 beds</div>
<div className="text-xs">3 baths</div>
<div className="text-xs">2,800 sqft</div>
</div>
</div>
</div>

<div className="rounded-2xl border p-6 flex flex-col justify-between animate-in slide-in-from-bottom duration-700 delay-700 bg-gradient-to-br from-white/[0.04] to-white/[0.02] border-white/10">
<div>
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-xl flex items-center justify-center bg-blue-500/10 ring-1 ring-inset ring-blue-400/20">
<svg className="w-5 h-5 text-blue-400" data-lucide="sparkles" height="22" style={{strokeWidth: '1.5'}} width="22" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
<h4 className="font-semibold text-white tracking-tight">Premium Experience</h4>
</div>
<p className="text-sm leading-relaxed text-white/70">
                    Access exclusive properties with virtual tours, intelligent matching, and dedicated concierge support for a seamless journey.
                  </p>
</div>
<a className="mt-6 inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all text-blue-400" href="#listings">
                  Explore Premium
                  <svg className="w-4 h-4 transition-transform" data-lucide="arrow-right" height="18" style={{strokeWidth: '1.5'}} width="18" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
</div>
</div>
</div>

<div className="relative animate-in slide-in-from-right duration-700 delay-400">
<div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
<img alt="Luxury Property" className="w-full object-cover aspect-[4/5] lg:aspect-[4/5]" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
<div className="absolute top-4 left-4 backdrop-blur px-4 py-2 rounded-full text-xs font-medium shadow-lg flex items-center gap-2 bg-white/90 text-neutral-900 ring-1 ring-inset ring-black/10">
<svg className="w-4 h-4 text-amber-500" data-lucide="award" height="18" style={{strokeWidth: '1.5'}} width="18" xmlns="http://www.w3.org/2000/svg"></svg>
                Premium Listing
              </div>
</div>

<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-md rounded-2xl shadow-2xl border p-6 animate-in slide-in-from-bottom duration-700 delay-700 bg-neutral-900/90 backdrop-blur-xl border-white/10">
<div className="flex items-start justify-between gap-4 mb-4">
<div className="flex-1">
<h5 className="font-semibold text-white tracking-tight">Skyline Penthouse Suite</h5>
<p className="text-xs text-white/60 mt-1 flex items-center gap-1">
<svg className="w-3 h-3" data-lucide="map-pin" height="16" style={{strokeWidth: '1.5'}} width="16" xmlns="http://www.w3.org/2000/svg"></svg>
                    Downtown Manhattan, NY
                  </p>
</div>
<div className="text-right">
<div className="text-[11px] text-white/50">Starting from</div>
<div className="font-semibold text-lg text-white tracking-tight">$5.2M</div>
</div>
</div>
<div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10 text-white/70">
<div className="flex items-center gap-1 text-[11px]">
<svg className="w-3 h-3" data-lucide="bed" height="15" style={{strokeWidth: '1.5'}} width="15" xmlns="http://www.w3.org/2000/svg"></svg> 5 beds
                </div>
<div className="flex items-center gap-1 text-[11px]">
<svg className="w-3 h-3" data-lucide="bath" height="15" style={{strokeWidth: '1.5'}} width="15" xmlns="http://www.w3.org/2000/svg"></svg> 4 baths
                </div>
<div className="flex items-center gap-1 text-[11px]">
<svg className="w-3 h-3" data-lucide="maximize" height="15" style={{strokeWidth: '1.5'}} width="15" xmlns="http://www.w3.org/2000/svg"></svg> 4,500 sqft
                </div>
</div>
<div className="flex gap-3">
<button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all shadow-sm bg-white text-neutral-900 hover:bg-white/90">
<svg className="w-4 h-4" data-lucide="eye" height="18" style={{strokeWidth: '1.5'}} width="18" xmlns="http://www.w3.org/2000/svg"></svg>
                  Virtual Tour
                </button>
<button className="flex items-center justify-center w-12 h-12 rounded-xl border transition-all border-white/10 text-white/80 hover:bg-white/5 hover:border-white/20">
<svg className="w-4 h-4" data-lucide="share" height="18" style={{strokeWidth: '1.5'}} width="18" xmlns="http://www.w3.org/2000/svg"></svg>
</button>
</div>
</div>
</div>
</section>

<section className="px-6 lg:px-10 py-12 lg:py-16 animate-in slide-in-from-bottom duration-700 delay-300" id="why">
<div className="mb-8 text-center">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Why Choose Us</h2>
<p className="mt-2 text-white/60">Built on trust, clarity, and performance.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
<div className="rounded-2xl border border-white/10 p-5 bg-white/[0.03] hover:bg-white/[0.05] transition-colors">
<div className="flex items-center gap-2 mb-3 text-blue-300">
<svg className="w-4 h-4" data-lucide="medal" height="18" style={{strokeWidth: '1.5'}} width="18" xmlns="http://www.w3.org/2000/svg"></svg>
<span className="text-sm font-medium">Trusted Expertise</span>
</div>
<p className="text-sm text-white/70">Years of market experience with proven results.</p>
</div>
<div className="rounded-2xl border border-white/10 p-5 bg-white/[0.03] hover:bg-white/[0.05] transition-colors">
<div className="flex items-center gap-2 mb-3 text-blue-300">
<svg className="w-4 h-4" data-lucide="user-round" height="18" style={{strokeWidth: '1.5'}} width="18" xmlns="http://www.w3.org/2000/svg"></svg>
<span className="text-sm font-medium">Personalized Guidance</span>
</div>
<p className="text-sm text-white/70">Every client gets tailored support, not just listings.</p>
</div>
<div className="rounded-2xl border border-white/10 p-5 bg-white/[0.03] hover:bg-white/[0.05] transition-colors">
<div className="flex items-center gap-2 mb-3 text-blue-300">
<svg className="w-4 h-4" data-lucide="shield-check" height="18" style={{strokeWidth: '1.5'}} width="18" xmlns="http://www.w3.org/2000/svg"></svg>
<span className="text-sm font-medium">Secure Investments</span>
</div>
<p className="text-sm text-white/70">We prioritize verified properties and transparent processes.</p>
</div>
<div className="rounded-2xl border border-white/10 p-5 bg-white/[0.03] hover:bg-white/[0.05] transition-colors">
<div className="flex items-center gap-2 mb-3 text-blue-300">
<svg className="w-4 h-4" data-lucide="globe-2" height="18" style={{strokeWidth: '1.5'}} width="18" xmlns="http://www.w3.org/2000/svg"></svg>
<span className="text-sm font-medium">Nationwide Reach</span>
</div>
<p className="text-sm text-white/70">Access prime real estate in cities and communities across the country.</p>
</div>
</div>
</section>

<section className="px-6 lg:px-10 py-12 lg:py-16 animate-in slide-in-from-bottom duration-700 delay-200" id="listings">
<div className="mb-8 text-center">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Featured Listings</h2>
<p className="mt-2 text-white/60">Top picks curated for value, location, and returns.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors">
<div className="relative">
<img alt="Lekki Apartment" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 text-[11px] px-2 py-1 rounded-md bg-blue-500/90 text-white ring-1 ring-blue-300/40">For Sale</div>
</div>
<div className="p-5">
<h3 className="font-semibold tracking-tight text-white group-hover:text-white">Luxury 3-Bedroom Apartment in Lekki Phase 1 – $250,000</h3>
<p className="mt-2 text-xs text-white/60 flex items-center gap-2">
<svg className="w-3.5 h-3.5" data-lucide="map-pin" height="16" style={{strokeWidth: '1.5'}} width="16" xmlns="http://www.w3.org/2000/svg"></svg> Lagos, Nigeria
                </p>
</div>
</article>
<article className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors">
<div className="relative">
<img alt="Abuja Duplex" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute top-3 left-3 text-[11px] px-2 py-1 rounded-md bg-emerald-500/90 text-white ring-1 ring-emerald-300/40">Hot</div>
</div>
<div className="p-5">
<h3 className="font-semibold tracking-tight text-white">Affordable Family Duplex in Abuja – $120,000</h3>
<p className="mt-2 text-xs text-white/60 flex items-center gap-2">
<svg className="w-3.5 h-3.5" data-lucide="map-pin" height="16" style={{strokeWidth: '1.5'}} width="16" xmlns="http://www.w3.org/2000/svg"></svg> Abuja, Nigeria
                </p>
</div>
</article>
<article className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors">
<div className="relative">
<img alt="Land Plot" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 text-[11px] px-2 py-1 rounded-md bg-amber-500/90 text-white ring-1 ring-amber-300/40">Investment</div>
</div>
<div className="p-5">
<h3 className="font-semibold tracking-tight text-white">Prime Land Plot for Investment – $50,000</h3>
<p className="mt-2 text-xs text-white/60 flex items-center gap-2">
<svg className="w-3.5 h-3.5" data-lucide="map-pin" height="16" style={{strokeWidth: '1.5'}} width="16" xmlns="http://www.w3.org/2000/svg"></svg> Ibeju-Lekki, Nigeria
                </p>
</div>
</article>
<article className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors">
<div className="relative">
<img alt="Victoria Island Condo" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 text-[11px] px-2 py-1 rounded-md bg-blue-500/90 text-white ring-1 ring-blue-300/40">For Sale</div>
</div>
<div className="p-5">
<h3 className="font-semibold tracking-tight text-white">Modern Waterfront Condo in Victoria Island – $320,000</h3>
<p className="mt-2 text-xs text-white/60 flex items-center gap-2">
<svg className="w-3.5 h-3.5" data-lucide="map-pin" height="16" style={{strokeWidth: '1.5'}} width="16" xmlns="http://www.w3.org/2000/svg"></svg> Lagos, Nigeria
                </p>
</div>
</article>
<article className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors">
<div className="relative">
<img alt="Port Harcourt Home" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute top-3 left-3 text-[11px] px-2 py-1 rounded-md bg-emerald-500/90 text-white ring-1 ring-emerald-300/40">Move-in Ready</div>
</div>
<div className="p-5">
<h3 className="font-semibold tracking-tight text-white">Spacious 4-Bedroom Home in Port Harcourt – $180,000</h3>
<p className="mt-2 text-xs text-white/60 flex items-center gap-2">
<svg className="w-3.5 h-3.5" data-lucide="map-pin" height="16" style={{strokeWidth: '1.5'}} width="16" xmlns="http://www.w3.org/2000/svg"></svg> Port Harcourt, Nigeria
                </p>
</div>
</article>
<article className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors">
<div className="relative">
<img alt="Abuja Commercial" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute top-3 left-3 text-[11px] px-2 py-1 rounded-md bg-amber-500/90 text-white ring-1 ring-amber-300/40">Commercial</div>
</div>
<div className="p-5">
<h3 className="font-semibold tracking-tight text-white">Prime Commercial Space in Central Abuja – $450,000</h3>
<p className="mt-2 text-xs text-white/60 flex items-center gap-2">
<svg className="w-3.5 h-3.5" data-lucide="map-pin" height="16" style={{strokeWidth: '1.5'}} width="16" xmlns="http://www.w3.org/2000/svg"></svg> Abuja, Nigeria
                </p>
</div>
</article>
</div>
<div className="mt-8 flex justify-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors" href="#contact">
              Request Full Listings
              <svg className="w-4 h-4" data-lucide="arrow-right" height="18" style={{strokeWidth: '1.5'}} width="18" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
</div>
</section>

<section className="px-6 lg:px-10 py-12 lg:py-16 animate-in slide-in-from-bottom duration-700 delay-200">
<div className="mb-8 text-center">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">What Clients Say</h2>
<p className="mt-2 text-white/60">Real stories from buyers, sellers, and investors.</p>
</div>
<div className="relative max-w-3xl mx-auto">
<div className="overflow-hidden rounded-2xl ring-1 ring-white/10" id="testimonialTrack">
<div className="flex transition-transform duration-500 ease-out">

<div className="min-w-full bg-white/[0.03] p-8">
<p className="text-lg text-white/90 leading-relaxed">“They guided me from house hunting to closing. Truly a stress-free process.”</p>
<div className="mt-4 text-sm text-white/60">– Chidi A.</div>
</div>

<div className="min-w-full bg-white/[0.03] p-8">
<p className="text-lg text-white/90 leading-relaxed">“Professional, responsive, and trustworthy. Highly recommended!”</p>
<div className="mt-4 text-sm text-white/60">– Amaka O.</div>
</div>
</div>
</div>

<div className="mt-4 flex items-center justify-center gap-3">
<button className="w-9 h-9 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 flex items-center justify-center" id="prevTestimonial">
<svg className="w-4 h-4 text-white/80" data-lucide="chevron-left" height="18" style={{strokeWidth: '1.5'}} width="18" xmlns="http://www.w3.org/2000/svg"></svg>
</button>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-white/80" id="dot0"></span>
<span className="w-2 h-2 rounded-full bg-white/30" id="dot1"></span>
</div>
<button className="w-9 h-9 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 flex items-center justify-center" id="nextTestimonial">
<svg className="w-4 h-4 text-white/80" data-lucide="chevron-right" height="18" style={{strokeWidth: '1.5'}} width="18" xmlns="http://www.w3.org/2000/svg"></svg>
</button>
</div>
</div>
</section>

<section className="px-6 lg:px-10 py-12 lg:py-16 animate-in slide-in-from-bottom duration-700 delay-200" id="about">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Who We Are</h2>
<p className="mt-4 text-white/70">
              We are more than just a real estate agency — we are your trusted partners in building a future through property. From first-time buyers to seasoned investors, our mission is to simplify real estate with honesty, professionalism, and a client-first approach.
            </p>
<div className="mt-8 grid sm:grid-cols-2 gap-5">
<div className="rounded-2xl border border-white/10 p-5 bg-white/[0.03]">
<h3 className="font-semibold tracking-tight text-white">Mission</h3>
<p className="mt-2 text-sm text-white/70">
                  To empower individuals and families to make confident real estate decisions by providing transparent services and market-driven insights.
                </p>
</div>
<div className="rounded-2xl border border-white/10 p-5 bg-white/[0.03]">
<h3 className="font-semibold tracking-tight text-white">Vision</h3>
<p className="mt-2 text-sm text-white/70">
                  To be the most trusted name in real estate, helping thousands achieve their dreams of homeownership and investment success.
                </p>
</div>
</div>
</div>
</section>

<section className="px-6 lg:px-10 py-12 lg:py-16 animate-in slide-in-from-bottom duration-700 delay-200" id="services">
<div className="mb-8">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Our Services</h2>
<p className="mt-2 text-white/60">End-to-end solutions tailored to your goals.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="rounded-2xl border border-white/10 p-6 bg-white/[0.03]">
<div className="flex items-center gap-2 text-blue-300 mb-3">
<svg className="w-4 h-4" data-lucide="home" height="18" style={{strokeWidth: '1.5'}} width="18" xmlns="http://www.w3.org/2000/svg"></svg>
<span className="text-sm font-medium">Property Sales &amp; Purchases</span>
</div>
<p className="text-sm text-white/70">We connect buyers with the right homes and sellers with qualified buyers — making every deal smooth and profitable.</p>
</div>
<div className="rounded-2xl border border-white/10 p-6 bg-white/[0.03]">
<div className="flex items-center gap-2 text-blue-300 mb-3">
<svg className="w-4 h-4" data-lucide="trending-up" height="18" style={{strokeWidth: '1.5'}} width="18" xmlns="http://www.w3.org/2000/svg"></svg>
<span className="text-sm font-medium">Real Estate Investment Advisory</span>
</div>
<p className="text-sm text-white/70">We analyze market trends and guide you toward high-return investment opportunities.</p>
</div>
<div className="rounded-2xl border border-white/10 p-6 bg-white/[0.03]">
<div className="flex items-center gap-2 text-blue-300 mb-3">
<svg className="w-4 h-4" data-lucide="key" height="18" style={{strokeWidth: '1.5'}} width="18" xmlns="http://www.w3.org/2000/svg"></svg>
<span className="text-sm font-medium">Property Management</span>
</div>
<p className="text-sm text-white/70">From tenant screening to maintenance, we handle the hassle so you enjoy steady rental income.</p>
</div>
<div className="rounded-2xl border border-white/10 p-6 bg-white/[0.03]">
<div className="flex items-center gap-2 text-blue-300 mb-3">
<svg className="w-4 h-4" data-lucide="map" height="18" style={{strokeWidth: '1.5'}} width="18" xmlns="http://www.w3.org/2000/svg"></svg>
<span className="text-sm font-medium">Land Acquisition</span>
</div>
<p className="text-sm text-white/70">Verified plots with clean documentation, ensuring safe and profitable purchases.</p>
</div>
<div className="rounded-2xl border border-white/10 p-6 bg-white/[0.03]">
<div className="flex items-center gap-2 text-blue-300 mb-3">
<svg className="w-4 h-4" data-lucide="credit-card" height="18" style={{strokeWidth: '1.5'}} width="18" xmlns="http://www.w3.org/2000/svg"></svg>
<span className="text-sm font-medium">Mortgage &amp; Financing Support</span>
</div>
<p className="text-sm text-white/70">We assist in securing the best financing solutions tailored to your budget.</p>
</div>
</div>
</section>

<section className="px-6 lg:px-10 py-12 lg:py-16 animate-in slide-in-from-bottom duration-700 delay-200" id="explore">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Explore Our Properties</h2>
<p className="mt-3 text-white/70">Browse residential, commercial, and land listings in prime locations. Each property is verified for authenticity and value — so you shop with confidence. This section will integrate seamlessly with Aura’s property listing feature.</p>
<div className="mt-6">
<a className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300" href="#listings">
                View Featured Listings
                <svg className="w-4 h-4" data-lucide="arrow-right" height="18" style={{strokeWidth: '1.5'}} width="18" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
</div>
</div>
</section>

<section className="px-6 lg:px-10 py-12 lg:py-16 animate-in slide-in-from-bottom duration-700 delay-200" id="resources">
<div className="mb-8">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Insights &amp; Resources</h2>
<p className="mt-2 text-white/60">Learn, plan, and invest smarter.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<a className="rounded-2xl border border-white/10 p-5 bg-white/[0.03] hover:bg-white/[0.05] transition-colors" href="#">
<h3 className="font-semibold tracking-tight text-white">5 Things to Check Before Buying Your First Home</h3>
<p className="mt-2 text-sm text-white/60">From inspections to paperwork — start right.</p>
</a>
<a className="rounded-2xl border border-white/10 p-5 bg-white/[0.03] hover:bg-white/[0.05] transition-colors" href="#">
<h3 className="font-semibold tracking-tight text-white">Top Real Estate Investment Opportunities in 2025</h3>
<p className="mt-2 text-sm text-white/60">Markets, yields, and trends to watch.</p>
</a>
<a className="rounded-2xl border border-white/10 p-5 bg-white/[0.03] hover:bg-white/[0.05] transition-colors" href="#">
<h3 className="font-semibold tracking-tight text-white">How to Spot a Good Deal in the Property Market</h3>
<p className="mt-2 text-sm text-white/60">Valuation, due diligence, and timing.</p>
</a>
<a className="rounded-2xl border border-white/10 p-5 bg-white/[0.03] hover:bg-white/[0.05] transition-colors" href="#">
<h3 className="font-semibold tracking-tight text-white">Land vs. Apartments: Which is the Better Investment?</h3>
<p className="mt-2 text-sm text-white/60">Evaluate risks and rewards for each path.</p>
</a>
<a className="rounded-2xl border border-white/10 p-5 bg-white/[0.03] hover:bg-white/[0.05] transition-colors" href="#">
<h3 className="font-semibold tracking-tight text-white">The Complete Guide to Mortgage Financing in Nigeria</h3>
<p className="mt-2 text-sm text-white/60">Rates, lenders, and documentation made simple.</p>
</a>
</div>
</section>

<section className="px-6 lg:px-10 py-12 lg:py-16 animate-in slide-in-from-bottom duration-700 delay-200" id="contact">
<div className="grid lg:grid-cols-2 gap-8">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Get in Touch</h2>
<p className="mt-3 text-white/70">We’d love to hear from you. Whether you’re ready to buy, sell, invest, or just explore, our team is here to guide you.</p>
<div className="mt-6 space-y-3 text-sm">
<div className="flex items-center gap-3 text-white/80">
<span>📍</span> <span>Office Address: [Insert location]</span>
</div>
<div className="flex items-center gap-3 text-white/80">
<span>📞</span> <span>Phone: [Insert number]</span>
</div>
<div className="flex items-center gap-3 text-white/80">
<span>📧</span> <span>Email: [Insert email]</span>
</div>
</div>
<a className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-blue-600 text-white hover:bg-blue-500 ring-1 ring-blue-400/20" href="#contact">📅 Schedule a Free Consultation</a>
<div className="mt-8 rounded-2xl border border-white/10 p-4 bg-white/[0.03]">
<div className="text-xs text-white/60">Extra:</div>
<div className="mt-2 flex flex-wrap gap-3">
<a className="text-sm text-blue-400 hover:text-blue-300" href="#faq">FAQ</a>
<a className="text-sm text-blue-400 hover:text-blue-300" href="#careers">Careers</a>
<a className="text-sm text-blue-400 hover:text-blue-300" href="#partners">Partners</a>
</div>
</div>
</div>
<form className="rounded-2xl border border-white/10 p-6 bg-white/[0.03]">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-white/60 mb-2">Name</label>
<input className="w-full px-4 py-3 rounded-xl bg-neutral-900 text-white placeholder-white/40 ring-1 ring-inset ring-white/10 focus:ring-blue-500/50 focus:outline-none" placeholder="Your full name" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-white/60 mb-2">Email</label>
<input className="w-full px-4 py-3 rounded-xl bg-neutral-900 text-white placeholder-white/40 ring-1 ring-inset ring-white/10 focus:ring-blue-500/50 focus:outline-none" placeholder="you@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-white/60 mb-2">Phone</label>
<input className="w-full px-4 py-3 rounded-xl bg-neutral-900 text-white placeholder-white/40 ring-1 ring-inset ring-white/10 focus:ring-blue-500/50 focus:outline-none" placeholder="+234 ..." type="tel"/>
</div>
<div className="sm:col-span-2">
<label className="block text-xs font-medium text-white/60 mb-2">Message</label>
<textarea className="w-full px-4 py-3 rounded-xl bg-neutral-900 text-white placeholder-white/40 ring-1 ring-inset ring-white/10 focus:ring-blue-500/50 focus:outline-none" placeholder="Tell us what you’re looking for..." rows="4"></textarea>
</div>
<div className="sm:col-span-2">
<button className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium bg-blue-600 text-white hover:bg-blue-500 transition-all ring-1 ring-inset ring-blue-400/20" type="submit">
<svg className="w-4 h-4" data-lucide="send" height="18" style={{strokeWidth: '1.5'}} width="18" xmlns="http://www.w3.org/2000/svg"></svg>
                    Send Message
                  </button>
</div>
</div>
</form>
</div>
</section>

<section className="px-6 lg:px-10 pb-8 animate-in slide-in-from-bottom duration-700 delay-200" id="faq">
<div className="rounded-2xl border border-white/10 p-6 bg-white/[0.03]">
<div className="grid lg:grid-cols-3 gap-6">
<div>
<h3 className="font-semibold tracking-tight text-white">FAQ</h3>
<p className="mt-2 text-sm text-white/70">Answers to common buyer/seller questions.</p>
<a className="mt-3 inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300" href="#">Explore FAQs<svg className="w-3.5 h-3.5" data-lucide="arrow-right" height="16" style={{strokeWidth: '1.5'}} width="16" xmlns="http://www.w3.org/2000/svg"></svg></a>
</div>
<div id="careers">
<h3 className="font-semibold tracking-tight text-white">Careers</h3>
<p className="mt-2 text-sm text-white/70">Join our growing team of agents and experts.</p>
<a className="mt-3 inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300" href="#">View Open Roles<svg className="w-3.5 h-3.5" data-lucide="arrow-right" height="16" style={{strokeWidth: '1.5'}} width="16" xmlns="http://www.w3.org/2000/svg"></svg></a>
</div>
<div id="partners">
<h3 className="font-semibold tracking-tight text-white">Partners</h3>
<p className="mt-2 text-sm text-white/70">Banks, developers, and legal partners we trust.</p>
<a className="mt-3 inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300" href="#">Become a Partner<svg className="w-3.5 h-3.5" data-lucide="arrow-right" height="16" style={{strokeWidth: '1.5'}} width="16" xmlns="http://www.w3.org/2000/svg"></svg></a>
</div>
</div>
</div>
</section>

<footer className="px-6 lg:px-10 py-8 border-t border-white/10">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
<div className="flex items-center gap-2">
<span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-white/5 ring-1 ring-white/10">
<span className="text-[10px] tracking-tighter font-semibold">EV</span>
</span>
<span>© <span id="year"></span> EstateVault. All rights reserved.</span>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-white" href="#about">About</a>
<a className="hover:text-white" href="#services">Services</a>
<a className="hover:text-white" href="#resources">Resources</a>
<a className="hover:text-white" href="#contact">Contact</a>
</div>
</div>
</footer>
</div>
</div>


    </>
  );
}
