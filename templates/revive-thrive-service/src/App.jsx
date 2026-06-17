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
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Set Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Mobile Menu Toggle
      const menuBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileLinks = document.querySelectorAll('.mobile-link');

      menuBtn.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
      });

      mobileLinks.forEach(link => {
          link.addEventListener('click', () => {
              mobileMenu.classList.add('hidden');
          });
      });

      // Header Shadow on Scroll
      const header = document.getElementById('header');
      window.addEventListener('scroll', () => {
          if (window.scrollY > 10) {
              header.classList.add('shadow-sm');
          } else {
              header.classList.remove('shadow-sm');
          }
      });

      // Intersection Observer for Animations
      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.15
      };

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('active');
                  // Optional: stop observing once animated
                  // observer.unobserve(entry.target);
              }
          });
      }, observerOptions);

      document.querySelectorAll('.reveal, .process-section').forEach((el) => {
          observer.observe(el);
      });

      // Modal Logic
      function openQuoteModal() {
          const modal = document.getElementById('quote-modal');
          modal.classList.remove('hidden');
          document.body.style.overflow = 'hidden';
      }

      function closeQuoteModal() {
          const modal = document.getElementById('quote-modal');
          modal.classList.add('hidden');
          document.body.style.overflow = '';
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
      

<header className="fixed top-0 w-full z-40 transition-all duration-300 shadow-sm" id="header">
<div className="absolute inset-0 bg-white border-b border-slate-100/50 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"></div>
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="flex items-center justify-between h-20 relative">

<div className="flex-1 hidden md:flex justify-start">
<nav className="flex items-center gap-4 lg:gap-8">
<a className="text-sm font-medium text-[#123E4D]/70 hover:text-[#123E4D] transition-colors" href="#about">
                About
              </a>
<a className="text-sm font-medium text-[#123E4D]/70 hover:text-[#123E4D] transition-colors" href="#services">
                Services
              </a>
<a className="text-sm font-medium text-[#123E4D]/70 hover:text-[#123E4D] transition-colors" href="#process">
                Process
              </a>
<a className="text-sm font-medium text-[#123E4D]/70 hover:text-[#123E4D] transition-colors" href="#pricing">
                Pricing
              </a>
<a className="text-sm font-medium text-[#123E4D]/70 hover:text-[#123E4D] transition-colors" href="#testimonials">
                Reviews
              </a>
</nav>
</div>

<div className="flex-1 md:hidden"></div>

<a className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 group z-10" href="#">
<img alt="Revive &amp; Thrive Junk Removal Logo" className="w-auto h-14 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/21400b1b-8f25-4c71-be90-98647cb5a391_800w.png"/>
</a>

<div className="flex-1 flex items-center justify-end gap-4 z-10 relative">
<button className="hidden sm:inline-flex items-center justify-center h-10 px-6 rounded-full bg-[#2FAF5A] text-white text-sm font-medium hover:bg-[#1E7A3F] transition-colors shadow-sm hover:shadow-md" onclick="openQuoteModal()">
              Get a Fast Quote
            </button>
<button className="md:hidden p-2 text-[#123E4D]" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-lg" id="mobile-menu">
<div className="flex flex-col p-6 gap-4">
<a className="text-base font-medium text-[#123E4D] mobile-link" href="#about">
            About
          </a>
<a className="text-base font-medium text-[#123E4D] mobile-link" href="#services">
            Services
          </a>
<a className="text-base font-medium text-[#123E4D] mobile-link" href="#process">
            Process
          </a>
<a className="text-base font-medium text-[#123E4D] mobile-link" href="#pricing">
            Pricing
          </a>
<a className="text-base font-medium text-[#123E4D] mobile-link" href="#testimonials">
            Reviews
          </a>
<button className="mt-4 inline-flex items-center justify-center h-12 w-full rounded-full bg-[#1F5F75] text-white text-base font-medium mobile-link" onclick="openQuoteModal()">
            Get a Fast Quote
          </button>
</div>
</div>
</header>
<main className="">

<section className="w-full pt-20 relative">
<img alt="Revive &amp; Thrive Junk Removal Promotional Ad" className="w-full h-auto block" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d817d62-f7e1-4c94-a6cd-7a571af8c945_3840w.png"/>

<div className="absolute top-[37%] md:top-[32%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full flex justify-center px-6">
<a className="custom-hero-btn hover-lift md:scale-110" href="tel:+18312358146">
<div className="points_wrapper">
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
</div>
<span className="inner">
              Call Us Now: +1 (831) 235-8146
              <svg className="icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</a>
</div>
</section>

<section className="py-24 bg-[#f8fafc] border-y border-slate-100" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2 reveal active">
<div className="aspect-square lg:mx-0 flex overflow-hidden bg-center bg-white w-full max-w-md bg-cover border-slate-100 border rounded-[2rem] mr-auto ml-auto relative shadow-sm items-center justify-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e6679547-6bca-4949-8f51-8103fb41c608_1600w.jpg)]">
<div className="text-center text-[#123E4D]/30 hidden">
<iconify-icon className="text-5xl mb-2" icon="solar:users-group-rounded-linear" strokeWidth="1"></iconify-icon>
<p className="text-xs font-medium uppercase tracking-widest">
                    Team Photo Area
                  </p>
</div>
</div>
</div>
<div className="w-full lg:w-1/2 reveal delay-100 active">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#123E4D] mb-6">
                Local, hardworking, and dedicated to your peace of mind.
              </h2>
<p className="leading-relaxed text-base text-[#123E4D]/70 mb-6">
                We’re Chrystian and Liz—the husband and wife team behind Revive
                &amp; Thrive Junk Removal. Built in the Salinas Valley, our
                business was created with a simple goal: to build something of
                our own rooted in hard work, trust, and service.
              </p>
<p className="leading-relaxed text-base text-[#123E4D]/70 mb-10">
                What started as a business became a way to help people through
                life’s transitions by clearing out spaces, reducing stress, and
                creating room to move forward with more peace. We’re hands-on in
                every part of the process and take pride in treating your time,
                space, and situation with respect. We’re grateful for every
                customer who trusts us and supports our journey.
              </p>
<div className="grid grid-cols-2 gap-y-6 gap-x-4">
<div className="flex items-start gap-3">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2FAF5A]/10 flex items-center justify-center text-[#2FAF5A]">
<iconify-icon className="text-lg" icon="solar:bolt-linear" strokeWidth="2"></iconify-icon>
</div>
<div className="">
<h3 className="text-sm font-medium text-[#123E4D]">
                      Fast Turnaround
                    </h3>
</div>
</div>
<div className="flex items-start gap-3">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2FAF5A]/10 flex items-center justify-center text-[#2FAF5A]">
<iconify-icon className="text-lg" icon="solar:smile-circle-linear" strokeWidth="2"></iconify-icon>
</div>
<div className="">
<h3 className="text-sm font-medium text-[#123E4D]">
                      Friendly Service
                    </h3>
</div>
</div>
<div className="flex items-start gap-3">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2FAF5A]/10 flex items-center justify-center text-[#2FAF5A]">
<iconify-icon className="text-lg" icon="solar:leaf-linear" strokeWidth="2"></iconify-icon>
</div>
<div className="">
<h3 className="text-sm font-medium text-[#123E4D]">
                      Responsible Disposal
                    </h3>
</div>
</div>
<div className="flex items-start gap-3">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2FAF5A]/10 flex items-center justify-center text-[#2FAF5A]">
<iconify-icon className="text-lg" icon="solar:buildings-2-linear" strokeWidth="2"></iconify-icon>
</div>
<div className="">
<h3 className="text-sm font-medium text-[#123E4D]">
                      Residential &amp; Commercial
                    </h3>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20 reveal active">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#123E4D] mb-4">
              Comprehensive Removal Services
            </h2>
<p className="text-base text-[#123E4D]/70">
              From everyday clutter to complex cleanouts, we provide
              full-service solutions designed to make your life easier.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

<div className="p-6 rounded-2xl bg-white border border-slate-100 hover-lift reveal group active">
<div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#1F5F75] mb-5 group-hover:bg-[#1F5F75] group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium text-[#123E4D] tracking-tight mb-2">
                General Junk Removal
              </h3>
<p className="text-sm text-[#123E4D]/60 leading-relaxed">
                From everyday clutter to bulky unwanted items, we remove the
                junk taking up valuable space. Our team lifts, loads, and hauls
                so you don't have to.
              </p>
</div>

<div className="p-6 rounded-2xl bg-white border border-slate-100 hover-lift reveal delay-100 group active">
<div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#1F5F75] mb-5 group-hover:bg-[#1F5F75] group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:sofa-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium text-[#123E4D] tracking-tight mb-2">
                Furniture Removal
              </h3>
<p className="text-sm text-[#123E4D]/60 leading-relaxed">
                Need to get rid of old couches, dressers, tables, or bed frames?
                We safely remove heavy furniture from inside your property
                quickly.
              </p>
</div>

<div className="p-6 rounded-2xl bg-white border border-slate-100 hover-lift reveal delay-200 group">
<div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#1F5F75] mb-5 group-hover:bg-[#1F5F75] group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:washing-machine-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium text-[#123E4D] tracking-tight mb-2">
                Appliance Removal
              </h3>
<p className="text-sm text-[#123E4D]/60 leading-relaxed">
                We haul away old refrigerators, washers, dryers, and stoves. We
                handle the lifting and aim to dispose of them responsibly.
              </p>
</div>

<div className="p-6 rounded-2xl bg-white border border-slate-100 hover-lift reveal delay-300 group">
<div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#1F5F75] mb-5 group-hover:bg-[#1F5F75] group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:bed-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium text-[#123E4D] tracking-tight mb-2">
                Mattress Removal
              </h3>
<p className="text-sm text-[#123E4D]/60 leading-relaxed">
                Old mattresses are difficult to move and dispose of. Let our
                crew navigate the halls and stairs to haul it away for proper
                recycling.
              </p>
</div>

<div className="p-6 rounded-2xl bg-white border border-slate-100 hover-lift reveal group">
<div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#1F5F75] mb-5 group-hover:bg-[#1F5F75] group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:home-angle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium text-[#123E4D] tracking-tight mb-2">
                Garage Cleanouts
              </h3>
<p className="text-sm text-[#123E4D]/60 leading-relaxed">
                Reclaim your parking space. We'll clear out boxes, old tools,
                broken equipment, and forgotten items piled up in your garage.
              </p>
</div>

<div className="p-6 rounded-2xl bg-white border border-slate-100 hover-lift reveal delay-100 group">
<div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#1F5F75] mb-5 group-hover:bg-[#1F5F75] group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium text-[#123E4D] tracking-tight mb-2">
                Estate Cleanouts
              </h3>
<p className="text-sm text-[#123E4D]/60 leading-relaxed">
                When a property needs clearing with care, we simplify the
                process by removing belongings and debris with total
                professionalism and respect.
              </p>
</div>

<div className="p-6 rounded-2xl bg-white border border-slate-100 hover-lift reveal delay-200 group">
<div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#1F5F75] mb-5 group-hover:bg-[#1F5F75] group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:monitor-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium text-[#123E4D] tracking-tight mb-2">
                Office &amp; Commercial
              </h3>
<p className="text-sm text-[#123E4D]/60 leading-relaxed">
                Upgrading your workspace? We remove old cubicles, desks,
                electronics, and office clutter with minimal disruption to your
                business.
              </p>
</div>

<div className="p-6 rounded-2xl bg-white border border-slate-100 hover-lift reveal delay-300 group">
<div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#1F5F75] mb-5 group-hover:bg-[#1F5F75] group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:hand-heart-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium text-[#123E4D] tracking-tight mb-2">
                Donation &amp; Recycling
              </h3>
<p className="text-sm text-[#123E4D]/60 leading-relaxed">
                We sort through items to ensure anything salvageable is donated
                to local charities, and recyclable materials are processed
                correctly.
              </p>
</div>
</div>

<div className="mt-12 pt-12 border-t border-slate-100 reveal flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-[#123E4D]/60">
<span className="flex items-center gap-2">
<iconify-icon className="text-[#2FAF5A]" icon="solar:check-read-linear"></iconify-icon>
              Yard Waste Removal
            </span>
<span className="flex items-center gap-2">
<iconify-icon className="text-[#2FAF5A]" icon="solar:check-read-linear"></iconify-icon>
              Foreclosure Cleanouts
            </span>
<span className="flex items-center gap-2">
<iconify-icon className="text-[#2FAF5A]" icon="solar:check-read-linear"></iconify-icon>
              Construction Debris
            </span>
<span className="flex items-center gap-2">
<iconify-icon className="text-[#2FAF5A]" icon="solar:check-read-linear"></iconify-icon>
              E-Waste Removal
            </span>
<span className="flex items-center gap-2">
<iconify-icon className="text-[#2FAF5A]" icon="solar:check-read-linear"></iconify-icon>
              Hot Tub Removal
            </span>
<span className="flex items-center gap-2">
<iconify-icon className="text-[#2FAF5A]" icon="solar:check-read-linear"></iconify-icon>
              Storage Unit Cleanouts
            </span>
</div>
</div>
</section>

<section className="py-32 bg-[#123E4D] text-white overflow-hidden relative" id="process">
<div className="absolute inset-0 bg-[radial-gradient(#1F5F75_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 process-section reveal">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
              How It Works
            </h2>
<p className="text-base text-white/70">
              A seamless, stress-free experience from your first call to a
              completely cleared space.
            </p>
</div>
<div className="relative max-w-5xl mx-auto">

<div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-[2px] process-line-bg rounded-full overflow-hidden">
<div className="h-full process-line-fill"></div>
</div>
<div className="flex flex-col md:flex-row gap-12 md:gap-6 justify-between relative">

<div className="flex-1 flex flex-col items-center text-center relative">
<div className="w-20 h-20 rounded-full bg-[#1F5F75] border-4 border-[#123E4D] shadow-[0_0_0_2px_rgba(47,175,90,0.2)] flex items-center justify-center text-2xl font-medium tracking-tight mb-6 z-10 text-white relative group">
<span className="group-hover:opacity-0 transition-opacity duration-300 absolute">
                    1
                  </span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute text-3xl" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">
                  Request a Fast Quote
                </h3>
<p className="text-sm text-white/70 leading-relaxed max-w-xs">
                  Fill out our simple form. We'll provide fast, transparent
                  pricing and schedule a convenient pickup window.
                </p>
</div>

<div className="flex-1 flex flex-col items-center text-center relative">
<div className="w-20 h-20 rounded-full bg-[#1F5F75] border-4 border-[#123E4D] shadow-[0_0_0_2px_rgba(47,175,90,0.2)] flex items-center justify-center text-2xl font-medium tracking-tight mb-6 z-10 text-white relative group">
<span className="group-hover:opacity-0 transition-opacity duration-300 absolute">
                    2
                  </span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute text-3xl" icon="solar:truck-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">
                  We Arrive &amp; Load
                </h3>
<p className="text-sm text-white/70 leading-relaxed max-w-xs">
                  Our crew shows up on time, handles all the heavy lifting,
                  sorting, and loading directly from wherever the junk sits.
                </p>
</div>

<div className="flex-1 flex flex-col items-center text-center relative">
<div className="w-20 h-20 rounded-full bg-[#1F5F75] border-4 border-[#123E4D] shadow-[0_0_0_2px_rgba(47,175,90,0.2)] flex items-center justify-center text-2xl font-medium tracking-tight mb-6 z-10 text-white relative group">
<span className="group-hover:opacity-0 transition-opacity duration-300 absolute">
                    3
                  </span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute text-3xl" icon="solar:sparkles-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">
                  Space Feels Clear
                </h3>
<p className="text-sm text-white/70 leading-relaxed max-w-xs">
                  We sweep up the area and haul away your items for responsible
                  disposal, leaving you with a clean, open, stress-free space.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-32 pb-32" id="before-after">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#123E4D] mb-4">
              See the Difference
            </h2>
<p className="text-base text-[#123E4D]/70">
              Drag the sliders below to compare the clutter before and the clean
              space after our team gets to work.
            </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="reveal">
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-slate-100 group hover-lift bg-slate-50" style={{'--slider-pos': '50%'}}>

<img alt="Clean empty garage space" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8f07c2ee-5510-47d7-9cb3-7d3a2dc4c312_800w.png"/>

<img alt="Messy cluttered garage" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92c4c265-320d-4789-bb2d-625fc8f12787_800w.png" style={{clipPath: 'polygon(0 0, var(--slider-pos) 0, var(--slider-pos) 100%, 0 100%)'}}/>

<div className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] z-20 pointer-events-none flex items-center justify-center transition-transform duration-75" style={{left: 'var(--slider-pos)', transform: 'translateX(-50%)'}}>
<div className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-[#123E4D] border border-slate-100">
<iconify-icon className="text-sm" icon="solar:round-alt-arrow-left-linear" strokeWidth="2"></iconify-icon>
<iconify-icon className="text-sm -ml-0.5" icon="solar:round-alt-arrow-right-linear" strokeWidth="2"></iconify-icon>
</div>
</div>

<span className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-md font-medium tracking-wide z-10 pointer-events-none">
                  Before
                </span>
<span className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-md font-medium tracking-wide z-10 pointer-events-none">
                  After
                </span>

<input className="cursor-ew-resize opacity-0 w-full h-full z-30 mt-0 mr-0 mb-0 ml-0 absolute top-0 right-0 bottom-0 left-0" max="100" min="0" oninput="this.parentNode.style.setProperty('--slider-pos', this.value + '%')" type="range" value="50"/>
</div>
</div>

<div className="reveal delay-100">
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-slate-100 group hover-lift bg-slate-50" style={{'--slider-pos': '50%'}}>

<img alt="Clean backyard grass" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/79200000-d453-4768-9337-22002c560be1_800w.png"/>

<img alt="Yard waste and debris" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/973e1fe6-ad05-4701-b1db-22a5c2bb33a1_800w.png" style={{clipPath: 'polygon(0 0, var(--slider-pos) 0, var(--slider-pos) 100%, 0 100%)'}}/>

<div className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] z-20 pointer-events-none flex items-center justify-center transition-transform duration-75" style={{left: 'var(--slider-pos)', transform: 'translateX(-50%)'}}>
<div className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-[#123E4D] border border-slate-100">
<iconify-icon className="text-sm" icon="solar:round-alt-arrow-left-linear" strokeWidth="2"></iconify-icon>
<iconify-icon className="text-sm -ml-0.5" icon="solar:round-alt-arrow-right-linear" strokeWidth="2"></iconify-icon>
</div>
</div>

<span className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-md font-medium tracking-wide z-10 pointer-events-none">
                  Before
                </span>
<span className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-md font-medium tracking-wide z-10 pointer-events-none">
                  After
                </span>

<input className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 m-0" max="100" min="0" oninput="this.parentNode.style.setProperty('--slider-pos', this.value + '%')" type="range" value="50"/>
</div>
</div>

<div className="reveal delay-200"></div>
<div className="reveal">
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-slate-100 group hover-lift bg-slate-50" style={{'--slider-pos': '50%'}}>

<img alt="Clean space" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/72813b52-47cf-4e2f-b152-e03b22368206_800w.png"/>

<img alt="Cluttered space" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/102ff43a-a50c-4bec-88dd-41f80a53e80b_800w.jpg" style={{clipPath: 'polygon(0 0, var(--slider-pos) 0, var(--slider-pos) 100%, 0 100%)'}}/>

<div className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] z-20 pointer-events-none flex items-center justify-center transition-transform duration-75" style={{left: 'var(--slider-pos)', transform: 'translateX(-50%)'}}>
<div className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-[#123E4D] border border-slate-100">
<iconify-icon className="text-sm" icon="solar:round-alt-arrow-left-linear" strokeWidth="2"></iconify-icon>
<iconify-icon className="text-sm -ml-0.5" icon="solar:round-alt-arrow-right-linear" strokeWidth="2"></iconify-icon>
</div>
</div>

<span className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-md font-medium tracking-wide z-10 pointer-events-none">
                  Before
                </span>
<span className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-md font-medium tracking-wide z-10 pointer-events-none">
                  After
                </span>

<input className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 m-0" max="100" min="0" oninput="this.parentNode.style.setProperty('--slider-pos', this.value + '%')" type="range" value="50"/>
</div>
</div>
<div className="reveal delay-100">
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-slate-100 group hover-lift bg-slate-50" style={{'--slider-pos': '50%'}}>

<img alt="Clean space" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1429eb55-0376-4ef1-be8b-54f1a953a1c2_800w.jpg"/>

<img alt="Cluttered space" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/72605081-f1a0-4cac-8abe-7de9ac098d10_800w.jpg" style={{clipPath: 'polygon(0 0, var(--slider-pos) 0, var(--slider-pos) 100%, 0 100%)'}}/>

<div className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] z-20 pointer-events-none flex items-center justify-center transition-transform duration-75" style={{left: 'var(--slider-pos)', transform: 'translateX(-50%)'}}>
<div className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-[#123E4D] border border-slate-100">
<iconify-icon className="text-sm" icon="solar:round-alt-arrow-left-linear" strokeWidth="2"></iconify-icon>
<iconify-icon className="text-sm -ml-0.5" icon="solar:round-alt-arrow-right-linear" strokeWidth="2"></iconify-icon>
</div>
</div>

<span className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-md font-medium tracking-wide z-10 pointer-events-none">
                  Before
                </span>
<span className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-md font-medium tracking-wide z-10 pointer-events-none">
                  After
                </span>

<input className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 m-0" max="100" min="0" oninput="this.parentNode.style.setProperty('--slider-pos', this.value + '%')" type="range" value="50"/>
</div>
</div>
<div className="reveal delay-200">
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-slate-100 group hover-lift bg-slate-50" style={{'--slider-pos': '50%'}}>

<img alt="Clean space" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/463cff91-9bae-4616-862e-64705611de0f_800w.jpg"/>

<img alt="Cluttered space" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8e841e1d-9167-4bb1-96d6-afda405876f0_800w.jpg" style={{clipPath: 'polygon(0 0, var(--slider-pos) 0, var(--slider-pos) 100%, 0 100%)'}}/>

<div className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] z-20 pointer-events-none flex items-center justify-center transition-transform duration-75" style={{left: 'var(--slider-pos)', transform: 'translateX(-50%)'}}>
<div className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-[#123E4D] border border-slate-100">
<iconify-icon className="text-sm" icon="solar:round-alt-arrow-left-linear" strokeWidth="2"></iconify-icon>
<iconify-icon className="text-sm -ml-0.5" icon="solar:round-alt-arrow-right-linear" strokeWidth="2"></iconify-icon>
</div>
</div>

<span className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-md font-medium tracking-wide z-10 pointer-events-none">
                  Before
                </span>
<span className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-md font-medium tracking-wide z-10 pointer-events-none">
                  After
                </span>

<input className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 m-0" max="100" min="0" oninput="this.parentNode.style.setProperty('--slider-pos', this.value + '%')" type="range" value="50"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white border-b border-slate-100" id="instagram">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#123E4D] mb-4">
              On The Job
            </h2>
<p className="text-base text-[#123E4D]/70">
              Check out our latest projects and see how we're clearing spaces
              across the community.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto">

<div className="w-full max-w-sm reveal">
<iframe allowtransparency="true" className="w-full rounded-2xl border border-slate-100 shadow-sm min-h-[550px]" frameborder="0" scrolling="no" src="https://www.instagram.com/p/DXR27CPj5rk/embed"></iframe>
</div>

<div className="w-full max-w-sm reveal delay-100">
<iframe allowtransparency="true" className="w-full rounded-2xl border border-slate-100 shadow-sm min-h-[550px]" frameborder="0" scrolling="no" src="https://www.instagram.com/p/DXF-Z_5lyi-/embed"></iframe>
</div>

<div className="w-full max-w-sm reveal delay-200">
<iframe allowtransparency="true" className="w-full rounded-2xl border border-slate-100 shadow-sm min-h-[550px]" frameborder="0" scrolling="no" src="https://www.instagram.com/p/DTmYVKoAfBO/embed"></iframe>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#f8fafc]" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#123E4D] mb-4">
              Simple, Volume-Based Pricing
            </h2>
<p className="text-base text-[#123E4D]/70 mb-2">
              Transparent pricing based on how much space your items take up in
              our truck.
            </p>
<p className="text-xs text-[#123E4D]/50">
              *Final pricing depends on exact volume, material type, and
              property access.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">

<div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover-lift reveal relative mt-4 md:mt-0">
<div className="absolute top-0 right-8 -translate-y-1/2 bg-[#1F5F75] text-white text-[10px] sm:text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wider shadow-sm whitespace-nowrap">
                Spring Special
              </div>
<h3 className="text-lg font-medium text-[#123E4D] tracking-tight mb-2">
                Small Pickup
              </h3>
<p className="text-sm text-[#123E4D]/60 mb-6 min-h-[40px]">
                Great for a few single items or light, localized clutter.
              </p>
<div className="mb-8">
<span className="text-sm text-[#123E4D]/60 font-medium">
                  Starting at
                </span>
<div className="flex items-baseline gap-2 mt-1">
<span className="text-xl font-medium tracking-tight line-through text-[#123E4D]/40">
                    $125
                  </span>
<span className="text-4xl font-semibold tracking-tight text-[#2FAF5A]">
                    $95
                  </span>
</div>
</div>
<ul className="space-y-3 mb-8 text-sm text-[#123E4D]/70">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#2FAF5A] text-lg mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="">
                    1-2 large items (e.g., mattress &amp; frame)
                  </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#2FAF5A] text-lg mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>A few boxes of household clutter</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#2FAF5A] text-lg mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="">Quick, in-and-out service</span>
</li>
</ul>
<button className="flex items-center justify-center w-full h-12 rounded-xl bg-slate-50 text-[#123E4D] text-sm font-medium hover:bg-slate-100 transition-colors" onclick="openQuoteModal()">
                Get a Fast Quote
              </button>
</div>

<div className="bg-white rounded-[2rem] p-8 border-2 border-[#2FAF5A] shadow-xl shadow-slate-200/50 relative md:scale-105 z-10 reveal delay-100 mt-4 md:mt-0">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2FAF5A] text-white text-[10px] sm:text-xs font-medium px-4 py-1 rounded-full uppercase tracking-wider whitespace-nowrap shadow-sm">
                Spring Special • Popular
              </div>
<h3 className="text-lg font-medium text-[#123E4D] tracking-tight mb-2">
                Medium Load
              </h3>
<p className="text-sm text-[#123E4D]/60 mb-6 min-h-[40px]">
                Perfect for furniture upgrades, appliances, and partial
                cleanouts.
              </p>
<div className="mb-8">
<span className="text-sm text-[#123E4D]/60 font-medium">
                  Starting at
                </span>
<div className="flex items-baseline gap-2 mt-1">
<span className="text-xl font-medium tracking-tight line-through text-[#123E4D]/40">
                    $275
                  </span>
<span className="text-4xl font-semibold tracking-tight text-[#2FAF5A]">
                    $225
                  </span>
</div>
</div>
<ul className="space-y-3 mb-8 text-sm text-[#123E4D]/70">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#2FAF5A] text-lg mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="">Sofa set or multiple large appliances</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#2FAF5A] text-lg mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="">Room clearing or minor garage purges</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#2FAF5A] text-lg mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="">Heavy lifting from anywhere on property</span>
</li>
</ul>
<button className="flex items-center justify-center w-full h-12 rounded-xl bg-[#2FAF5A] text-white text-sm font-medium hover:bg-[#1E7A3F] transition-colors shadow-sm" onclick="openQuoteModal()">
                Get a Fast Quote
              </button>
</div>

<div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover-lift reveal delay-200 relative mt-4 md:mt-0">
<div className="absolute top-0 right-8 -translate-y-1/2 bg-[#1F5F75] text-white text-[10px] sm:text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wider shadow-sm whitespace-nowrap">
                Spring Special
              </div>
<h3 className="text-lg font-medium text-[#123E4D] tracking-tight mb-2">
                Full Load / Cleanout
              </h3>
<p className="text-sm text-[#123E4D]/60 mb-6 min-h-[40px]">
                Designed for total garage, estate, and commercial clear outs.
              </p>
<div className="mb-8">
<span className="text-sm text-[#123E4D]/60 font-medium">
                  Starting at
                </span>
<div className="flex items-baseline gap-2 mt-1">
<span className="text-xl font-medium tracking-tight line-through text-[#123E4D]/40">
                    $550
                  </span>
<span className="text-4xl font-semibold tracking-tight text-[#2FAF5A]">
                    $450
                  </span>
</div>
</div>
<ul className="space-y-3 mb-8 text-sm text-[#123E4D]/70">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#2FAF5A] text-lg mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="">Entire truckload of diverse materials</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#2FAF5A] text-lg mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="">Complete property or estate clearing</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#2FAF5A] text-lg mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="">Extensive sorting and hauling</span>
</li>
</ul>
<button className="flex items-center justify-center w-full h-12 rounded-xl bg-slate-50 text-[#123E4D] text-sm font-medium hover:bg-slate-100 transition-colors" onclick="openQuoteModal()">
                Get a Fast Quote
              </button>
</div>
</div>
</div>
</section>

<section className="bg-[#f8fafc] pt-32 pb-32" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#123E4D] mb-4">
              Trusted by the Community
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-white border border-slate-100 reveal">
<div className="flex gap-1 text-[#2FAF5A] mb-6">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="leading-relaxed text-sm text-[#123E4D]/80 mb-6">
                "I had Chrystian with Revive and Thrive come out to perform a
                junk removal service on Monday morning and let me just say, he
                did a stellar job. He was honest, reliable, professional and
                provided fast same day service.
              </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#1F5F75]/10 flex items-center justify-center text-[#1F5F75] font-medium text-sm">
                  VC
                </div>
<div className="">
<p className="text-sm font-medium text-[#123E4D]">
                    Cedric Johnson
                  </p>
<p className="text-xs text-[#123E4D]/50">2 months ago</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-white border border-slate-100 reveal delay-100">
<div className="flex gap-1 text-[#2FAF5A] mb-6">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[#123E4D]/80 leading-relaxed mb-6">
                "After calling around a few junk removal businesses to remove
                our bed set, they had the best deal and arrived within the hour.
                Super friendly people with a great aditude for buisness"
              </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#1F5F75]/10 flex items-center justify-center text-[#1F5F75] font-medium text-sm">
                  JC
                </div>
<div className="">
<p className="text-sm font-medium text-[#123E4D]">
                    Jessie Coleman
                  </p>
<p className="text-xs text-[#123E4D]/50">a month ago</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-white border border-slate-100 reveal delay-200">
<div className="flex gap-1 text-[#2FAF5A] mb-6">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[#123E4D]/80 leading-relaxed mb-6">
                "Chrystian and team came out and helped us deal with ALOT of
                debris removal. Revive and Thrive was quick to respond, hard
                working and reliable. Will use again and again!"
              </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#1F5F75]/10 flex items-center justify-center text-[#1F5F75] font-medium text-sm">
                  AS
                </div>
<div className="">
<p className="text-sm font-medium text-[#123E4D]">
                    Armando Soria
                  </p>
<p className="text-xs text-[#123E4D]/50">2 months ago</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1F5F75] relative overflow-hidden border-t border-slate-100">
<div className="[background-size:24px_24px] opacity-10 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center reveal">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Ready to clear the clutter?
          </h2>
<p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
            Fast quotes. Friendly service. Stress-free removal. Call Revive and
            Thrive Junk Removal today and reclaim your space.
          </p>
<button className="inline-flex items-center justify-center h-16 px-10 rounded-full bg-[#2FAF5A] text-white text-lg font-medium hover:bg-[#1E7A3F] transition-transform hover:scale-105 shadow-xl shadow-[#123E4D]/20" onclick="openQuoteModal()">
<iconify-icon className="mr-3 text-2xl" icon="solar:document-text-linear" strokeWidth="2"></iconify-icon>
            Get a Fast Quote
          </button>
</div>
</section>
</main>

<footer className="bg-[#123E4D] pt-16 pb-8 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
<div className="">
<span className="text-2xl tracking-tighter font-medium text-white block mb-2">
              Revive &amp; Thrive
            </span>
<p className="text-sm text-white/60">
              Professional Junk Removal Services
            </p>
</div>
<div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
<div className="flex flex-col gap-3">
<span className="text-xs font-semibold text-white/40 uppercase tracking-wider">
                Navigation
              </span>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#about">
                About
              </a>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#services">
                Services
              </a>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#pricing">
                Pricing
              </a>
</div>
<div className="flex flex-col gap-3">
<span className="text-xs font-semibold text-white/40 uppercase tracking-wider">
                Contact
              </span>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="tel:8312358146">
                831-235-8146
              </a>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#process">
                How it works
              </a>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-xs text-white/40">
            ©
            <span id="year">2026</span>
            Revive and Thrive Junk Removal. All rights reserved.
          </p>
<p className="text-xs text-white/40">
            Clear the clutter. Reclaim your space.
          </p>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] hidden flex items-center justify-center p-4 sm:p-6" id="quote-modal">
<div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onclick="closeQuoteModal()"></div>

<div className="relative bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh] md:max-h-[85vh]">

<div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10 shrink-0">
<h3 className="text-lg font-semibold text-[#123E4D] tracking-tight">
            Send a Message
          </h3>
<button className="text-slate-400 hover:text-[#123E4D] transition-colors flex items-center justify-center" onclick="closeQuoteModal()">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="p-6 overflow-y-auto custom-scrollbar">

<form action="https://formsubmit.co/reviveandthrive.contact@gmail.com" className="flex flex-col gap-4" enctype="multipart/form-data" id="quote-form" method="POST">
<input name="_subject" type="hidden" value="New Contact Form Submission"/>
<input name="_template" type="hidden" value="table"/>
<input name="_captcha" type="hidden" value="false"/>
<input name="_honey" style={{display: 'none'}} type="text"/>
<div>
<label className="text-sm font-medium text-[#123E4D] mb-1.5 block">
                Full Name *
              </label>
<input className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 text-sm text-[#123E4D] focus:border-[#2FAF5A] focus:ring-1 focus:ring-[#2FAF5A] focus:bg-white focus:outline-none transition-all placeholder:text-slate-400" name="name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="text-sm font-medium text-[#123E4D] mb-1.5 block">
                  Email Address *
                </label>
<input className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 text-sm text-[#123E4D] focus:border-[#2FAF5A] focus:ring-1 focus:ring-[#2FAF5A] focus:bg-white focus:outline-none transition-all placeholder:text-slate-400" name="email" placeholder="john@example.com" required="" type="email"/>
</div>
<div>
<label className="text-sm font-medium text-[#123E4D] mb-1.5 block">
                  Phone Number *
                </label>
<input className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 text-sm text-[#123E4D] focus:border-[#2FAF5A] focus:ring-1 focus:ring-[#2FAF5A] focus:bg-white focus:outline-none transition-all placeholder:text-slate-400" name="phone" placeholder="(555) 123-4567" required="" type="tel"/>
</div>
</div>
<div>
<label className="text-sm font-medium text-[#123E4D] mb-1.5 block">
                Address
              </label>
<input className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 text-sm text-[#123E4D] focus:border-[#2FAF5A] focus:ring-1 focus:ring-[#2FAF5A] focus:bg-white focus:outline-none transition-all placeholder:text-slate-400" name="address" placeholder="123 Main St, City, State, ZIP" type="text"/>
</div>
<div>
<label className="text-sm font-medium text-[#123E4D] mb-1.5 block">
                Type of Job
              </label>
<select className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 text-sm text-[#123E4D] focus:border-[#2FAF5A] focus:ring-1 focus:ring-[#2FAF5A] focus:bg-white focus:outline-none transition-all cursor-pointer" name="job_type">
<option disabled="" selected="" value="">
                  Select an option...
                </option>
<option value="General Junk Removal">
                  General Junk Removal
                </option>
<option value="Furniture Removal">Furniture Removal</option>
<option value="Appliance Removal">Appliance Removal</option>
<option value="Mattress Removal">Mattress Removal</option>
<option value="Garage Cleanouts">Garage Cleanouts</option>
<option value="Estate Cleanouts">Estate Cleanouts</option>
<option value="Office &amp; Commercial">
                  Office &amp; Commercial
                </option>
<option value="Donation &amp; Recycling">
                  Donation &amp; Recycling
                </option>
<option value="Other">Other</option>
</select>
</div>
<div>
<label className="text-sm font-medium text-[#123E4D] mb-1.5 block">
                Description of Job / Additional Details
              </label>
<input className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 text-sm text-[#123E4D] focus:border-[#2FAF5A] focus:ring-1 focus:ring-[#2FAF5A] focus:bg-white focus:outline-none transition-all placeholder:text-slate-400" name="job_description" placeholder="How can we help?" type="text"/>
</div>
<div>
<label className="text-sm font-medium text-[#123E4D] mb-1.5 block">
                Message
              </label>
<textarea className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 text-sm text-[#123E4D] focus:border-[#2FAF5A] focus:ring-1 focus:ring-[#2FAF5A] focus:bg-white focus:outline-none transition-all placeholder:text-slate-400 resize-none min-h-[100px]" name="message" placeholder="Your message..."></textarea>
</div>
<div>
<label className="text-sm font-medium text-[#123E4D] mb-1.5 block">
                Upload Photos
                <span className="text-[#123E4D]/50 text-xs font-normal">
                  (Optional)
                </span>
</label>
<input accept="image/png, image/jpeg, image/jpg, image/webp" className="block w-full text-sm text-[#123E4D]/70 file:mr-4 file:py-3 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-medium file:bg-[#2FAF5A]/10 file:text-[#2FAF5A] hover:file:bg-[#2FAF5A]/20 cursor-pointer border border-slate-200 rounded-xl bg-slate-50 transition-all" multiple="" name="attachment" type="file"/>
</div>
<button className="mt-2 w-full h-14 rounded-xl bg-[#2FAF5A] text-white text-base font-medium hover:bg-[#1E7A3F] transition-colors shadow-sm flex items-center justify-center gap-2" type="submit">
              Send Message
            </button>
</form>
</div>
</div>
</div>



    </>
  );
}
