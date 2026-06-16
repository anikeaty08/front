import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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



      // Initialize Lucide Icons
      lucide.createIcons({
          attrs: {
              'stroke-width': 1.5
          }
      });

      // Mobile Menu Toggle
      const menuBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileLinks = document.querySelectorAll('.mobile-link');
      let menuOpen = false;

      function toggleMenu() {
          menuOpen = !menuOpen;
          if(menuOpen) {
              mobileMenu.classList.remove('translate-x-full');
              menuBtn.innerHTML = '<i data-lucide="x" class="w-5 h-5"></i>';
              document.body.style.overflow = 'hidden'; // Prevent scrolling
          } else {
              mobileMenu.classList.add('translate-x-full');
              menuBtn.innerHTML = '<i data-lucide="menu" class="w-5 h-5"></i>';
              document.body.style.overflow = 'auto';
          }
          lucide.createIcons(); // Re-init icons for the changed button
      }

      menuBtn.addEventListener('click', toggleMenu);
      mobileLinks.forEach(link => {
          link.addEventListener('click', () => {
              if(menuOpen) toggleMenu();
          });
      });

      // FAQ Accordion Logic
      function toggleFaq(button) {
          const content = button.nextElementSibling;
          const icon = button.querySelector('i');

          // Close all others (optional, remove if you want multiple open)
          document.querySelectorAll('.faq-item div').forEach(div => {
              if(div !== content && !div.classList.contains('hidden')) {
                  div.classList.add('hidden');
                  div.previousElementSibling.querySelector('i').classList.remove('rotate-180');
              }
          });

          // Toggle current
          content.classList.toggle('hidden');
          icon.classList.toggle('rotate-180');
      }

      // Add subtle scroll reveal effect (optional simple version)
      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.style.opacity = '1';
                  entry.target.style.transform = 'translateY(0)';
                  observer.unobserve(entry.target);
              }
          });
      }, observerOptions);

      // Apply base styles and observe sections
      document.querySelectorAll('section').forEach((section, index) => {
          if(index > 0) { // Skip hero
              section.style.opacity = '0';
              section.style.transform = 'translateY(20px)';
              section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
              observer.observe(section);
          }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-[calc(100%-2rem)] max-w-6xl left-1/2 -translate-x-1/2 top-6 z-50 bg-white/70 backdrop-blur-2xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-[2rem] transition-all duration-300">
<div className="w-full px-6 py-3 flex items-center justify-between">

<a className="flex items-center gap-3" href="#">
<div className="w-10 h-10 border border-brand-dark rounded-t-full rounded-b-md flex items-center justify-center relative overflow-hidden">
<svg className="text-brand-dark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10"></path>
<path d="M7 8c.5-1.5 2-1.5 2.5 0"></path>
<path d="M12 8c.5-1.5 2-1.5 2.5 0"></path>
<path d="M17 8c.5-1.5 2-1.5 2.5 0"></path>
<path d="M7 4c.5-1.5 2-1.5 2.5 0"></path>
<path d="M12 4c.5-1.5 2-1.5 2.5 0"></path>
<path d="M17 4c.5-1.5 2-1.5 2.5 0"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-lg font-medium tracking-tight leading-none">
              SOAKWELL
            </span>
<span className="text-xs text-gray-500 tracking-[0.2em] mt-1">
              HOT TUB CARE
            </span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide text-gray-700">
<a className="hover:text-brand-dark transition-colors" href="#services">
            SERVICES
          </a>
<a className="hover:text-brand-dark transition-colors" href="#why-us">
            WHY US
          </a>
<a className="hover:text-brand-dark transition-colors" href="#pricing">
            PRICING
          </a>
<a className="hover:text-brand-dark transition-colors" href="#about">
            ABOUT
          </a>
<a className="hover:text-brand-dark transition-colors" href="#contact">
            CONTACT
          </a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 bg-[#0a0a0a] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-brand-blue hover:text-white transition-all shadow-md" href="#booking">
            BOOK SERVICE
            <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
<button className="lg:hidden w-11 h-11 bg-gray-200/50 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors" id="mobile-menu-btn">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<div className="hidden lg:flex w-11 h-11 bg-gray-200/50 rounded-full items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
<i className="w-5 h-5" data-lucide="menu"></i>
</div>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-brand-cream z-40 transform translate-x-full transition-transform duration-300 ease-in-out pt-24 px-6 flex flex-col" id="mobile-menu">
<div className="flex flex-col gap-6 text-2xl font-medium tracking-tight">
<a className="mobile-link" href="#services">Services</a>
<a className="mobile-link" href="#why-us">Why Us</a>
<a className="mobile-link" href="#pricing">Pricing</a>
<a className="mobile-link" href="#about">About</a>
<a className="mobile-link" href="#contact">Contact</a>
</div>
<a className="mt-8 flex items-center justify-center gap-2 bg-brand-button text-white px-6 py-4 rounded-full text-base font-medium w-full" href="#booking">
        BOOK SERVICE
        <i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</a>
</div>

<main className="pt-32 lg:pt-40">

<section className="max-w-[90rem] mx-auto px-6 lg:px-8 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center min-h-[80vh]">

<div className="relative z-10 flex flex-col items-start pt-10 lg:pt-0">

<div className="absolute -bottom-10 -left-10 w-48 h-48 bg-dots opacity-40 -z-10"></div>
<svg className="text-brand-blue mb-8" fill="none" height="20" viewbox="0 0 40 20" width="40">
<path d="M2 10C5.33333 10 7.33333 4 11 4C14.6667 4 16.6667 16 20.3333 16C24 16 26 4 29.6667 4C33.3333 4 35.3333 10 38.6667 10" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
<path d="M2 16C5.33333 16 7.33333 10 11 10C14.6667 10 16.6667 22 20.3333 22C24 22 26 10 29.6667 10C33.3333 10 35.3333 16 38.6667 16" opacity="0.5" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
</svg>
<h1 className="text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] font-semibold tracking-tighter leading-[0.95] mb-6">
              Pure water.
              <br/>
<span className="text-gray-400">Zero</span>
<br/>
<span className="text-brand-blue relative inline-block">
                effort.
                <svg className="absolute -bottom-3 left-0 w-full h-4 text-brand-blue/20" preserveaspectratio="none" viewbox="0 0 100 20">
<path d="M0 10 Q 50 20 100 10" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>
</svg>
</span>
</h1>
<p className="text-lg text-gray-500 max-w-md mb-10 leading-relaxed font-light">
              Elevate your soak. We provide award-winning hot tub maintenance so
              you can experience pristine, perfectly balanced water every single
              day.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-6 mb-16 w-full sm:w-auto">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#0a0a0a] text-white px-8 py-4 rounded-[2rem] text-base font-medium hover:bg-brand-blue hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(10,10,10,0.5)]" href="#booking">
                BOOK YOUR SERVICE
                <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
<button className="group flex items-center gap-4 text-sm font-medium hover:opacity-80 transition-opacity">
<div className="w-12 h-12 bg-brand-blue/20 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
<div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center text-white pl-0.5">
<i className="w-4 h-4 fill-current" data-lucide="play"></i>
</div>
</div>
<div className="flex flex-col text-left">
<span className="tracking-wide">HOW IT WORKS</span>
<span className="text-gray-500 font-normal">Watch video</span>
</div>
</button>
</div>
<div className="flex items-center gap-6">
<div className="flex -space-x-4">
<img alt="Customer" className="w-12 h-12 rounded-full border-2 border-brand-cream object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"/>
<img alt="Customer" className="w-12 h-12 rounded-full border-2 border-brand-cream object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"/>
<img alt="Customer" className="w-12 h-12 rounded-full border-2 border-brand-cream object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"/>
</div>
<div className="flex flex-col">
<div className="flex gap-1 text-yellow-400 mb-1">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<span className="text-sm text-gray-600">
                  Trusted by 1,200+
                  <br/>
                  happy spa owners
                </span>
</div>
</div>
</div>

<div className="relative w-full h-full min-h-[600px] flex items-center justify-center mt-10 lg:mt-0">

<div className="absolute top-0 right-20 w-48 h-48 bg-brand-blue rounded-full -z-10"></div>
<div className="absolute -bottom-10 -right-10 w-96 h-96 bg-brand-button rounded-t-full -z-10"></div>

<div className="relative w-full max-w-[550px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] z-0 transition-transform duration-700 hover:scale-[1.02]">
<img alt="Luxury outdoor hot tub" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>

<div className="absolute top-1/2 right-0 lg:-right-8 -translate-y-1/2 w-32 h-32 bg-brand-blue/90 backdrop-blur-sm rounded-full text-white flex items-center justify-center p-2 z-20 shadow-xl">
<div className="relative w-full h-full border border-white/30 rounded-full flex items-center justify-center">
<svg className="absolute w-full h-full spin-slow" viewbox="0 0 100 100">
<path d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" id="curve"></path>
<text className="text-[10px] tracking-widest font-medium fill-white uppercase">
<textpath href="#curve" startoffset="0%">
                      Cleaner Water • Better Soak •
                    </textpath>
<textpath href="#curve" startoffset="50%">
                      Cleaner Water • Better Soak •
                    </textpath>
</text>
</svg>
<i className="w-8 h-8 z-10 fill-white/20" data-lucide="droplet"></i>
</div>
</div>

<img alt="Decorative stone and leaves" className="absolute -bottom-20 -left-10 w-48 h-48 object-cover rounded-full shadow-lg z-10 opacity-90 border-4 border-brand-cream mix-blend-multiply hidden md:block" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[95%] max-w-3xl bg-white/80 backdrop-blur-2xl rounded-3xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] border border-white z-30 overflow-hidden">
<div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100 border-b border-gray-100 p-2">
<div className="flex flex-col items-center justify-center text-center p-6 gap-3 group">
<div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-brand-dark group-hover:bg-brand-cream transition-colors">
<i className="w-5 h-5" data-lucide="sparkles"></i>
</div>
<span className="text-xs font-medium tracking-wide uppercase text-gray-500 group-hover:text-brand-dark transition-colors">
                    Water
                    <br/>
                    Perfected
                  </span>
</div>
<div className="flex flex-col items-center justify-center text-center p-6 gap-3 group">
<div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-brand-dark group-hover:bg-brand-cream transition-colors">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<span className="text-xs font-medium tracking-wide uppercase text-gray-500 group-hover:text-brand-dark transition-colors">
                    Equipment
                    <br/>
                    Protected
                  </span>
</div>
<div className="flex flex-col items-center justify-center text-center p-6 gap-3 group">
<div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-brand-dark group-hover:bg-brand-cream transition-colors">
<i className="w-5 h-5" data-lucide="heart-pulse"></i>
</div>
<span className="text-xs font-medium tracking-wide uppercase text-gray-500 group-hover:text-brand-dark transition-colors">
                    Health
                    <br/>
                    Guaranteed
                  </span>
</div>
<div className="flex flex-col items-center justify-center text-center p-6 gap-3 group">
<div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-brand-dark group-hover:bg-brand-cream transition-colors">
<i className="w-5 h-5" data-lucide="calendar-check"></i>
</div>
<span className="text-xs font-medium tracking-wide uppercase text-gray-500 group-hover:text-brand-dark transition-colors">
                    Peace of Mind
                    <br/>
                    Every Time
                  </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-24 py-16 border-y border-gray-200/40 bg-gradient-to-b from-white/0 via-white/50 to-white/0">
<div className="max-w-[90rem] mx-auto px-6 lg:px-8">
<p className="text-center text-sm font-medium text-gray-400 mb-8 tracking-wider uppercase">
            Trusted by premium spa brands
          </p>
<div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale">

<h3 className="text-2xl font-semibold tracking-tighter">Jacuzzi</h3>
<h3 className="text-2xl font-semibold tracking-tighter">HotSpring</h3>
<h3 className="text-2xl font-semibold tracking-tighter">Bullfrog</h3>
<h3 className="text-2xl font-semibold tracking-tighter">CalderaSpas</h3>
<h3 className="text-2xl font-semibold tracking-tighter hidden md:block">
              MasterSpas
            </h3>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white" id="services">
<div className="max-w-[90rem] mx-auto px-6 lg:px-8">
<div className="max-w-2xl mb-16">
<span className="text-brand-blue font-medium tracking-wide text-sm uppercase mb-3 block">
              Our Services
            </span>
<h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-brand-dark mb-6 leading-[1.05]">
              Complete care for your
              <span className="text-brand-blue">personal oasis.</span>
</h2>
<p className="text-lg text-gray-600">
              We offer comprehensive maintenance plans to keep your hot tub
              sparkling clean, chemically balanced, and mechanically sound
              year-round.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white rounded-[2.5rem] p-8 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 border border-gray-100/80 cursor-pointer">
<div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-brand-blue">
<i className="w-7 h-7" data-lucide="test-tub"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">
                Chemical Balancing
              </h3>
<p className="text-base text-gray-600 mb-6 line-clamp-3">
                Precise testing and adjustment of pH, alkalinity, sanitizer
                levels, and calcium hardness to ensure water is safe and clear.
              </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-brand-dark group-hover:text-brand-blue transition-colors" href="#">
                Learn more
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="group bg-white rounded-[2.5rem] p-8 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 border border-gray-100/80 cursor-pointer">
<div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-brand-blue">
<i className="w-7 h-7" data-lucide="wind"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">
                Deep Filter Cleaning
              </h3>
<p className="text-base text-gray-600 mb-6 line-clamp-3">
                Removal, degreasing, and high-pressure washing of filters to
                maintain optimal water flow and heater efficiency.
              </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-brand-dark group-hover:text-brand-blue transition-colors" href="#">
                Learn more
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="group bg-white rounded-[2.5rem] p-8 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 border border-gray-100/80 cursor-pointer">
<div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-brand-blue">
<i className="w-7 h-7" data-lucide="refresh-cw"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">
                Drain, Clean &amp; Refill
              </h3>
<p className="text-base text-gray-600 mb-6 line-clamp-3">
                Quarterly line flushing, complete draining, shell detailing, and
                fresh refill to reset your water quality completely.
              </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-brand-dark group-hover:text-brand-blue transition-colors" href="#">
                Learn more
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="group bg-white rounded-[2.5rem] p-8 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 border border-gray-100/80 cursor-pointer">
<div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-brand-blue">
<i className="w-7 h-7" data-lucide="wrench"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">
                Equipment Inspection
              </h3>
<p className="text-base text-gray-600 mb-6 line-clamp-3">
                Visual and auditory checks of pumps, heaters, ozonators, and
                plumbing to catch issues before they become expensive repairs.
              </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-brand-dark group-hover:text-brand-blue transition-colors" href="#">
                Learn more
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="group bg-[#f9f8f5] rounded-[2.5rem] p-8 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 border border-gray-100/80 cursor-pointer lg:col-span-2 relative overflow-hidden">
<div className="relative z-10 md:w-1/2">
<div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-brand-blue">
<i className="w-7 h-7" data-lucide="snowflake"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">
                  Winterization &amp; Openings
                </h3>
<p className="text-base text-gray-600 mb-6">
                  Protect your investment during harsh months. We professionally
                  blow out lines and add antifreeze, then get it ready for
                  spring.
                </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-brand-dark group-hover:text-brand-blue transition-colors" href="#">
                  Learn more
                  <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<img alt="Winter hot tub" className="absolute inset-0 w-full h-full object-cover opacity-20 md:opacity-100 md:w-1/2 md:left-auto md:right-0" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-brand-cream via-brand-cream to-transparent md:w-2/3 hidden md:block"></div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#0a0a0a] text-white overflow-hidden relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-blue/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-[90rem] mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tighter mb-6 leading-[1.05]">
              Effortless maintenance in
              <span className="text-brand-blue italic pr-2">three</span>
              steps.
            </h2>
<p className="text-lg text-slate-400">
              We've streamlined the process so you never have to think about
              water chemistry or filter maintenance again.
            </p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-800"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
<div className="bg-white/[0.03] border border-white/5 rounded-[2.5rem] p-10 hover:bg-white/[0.06] transition-colors duration-500 flex flex-col items-center text-center group">
<div className="w-20 h-20 bg-white/5 rounded-[1.5rem] flex items-center justify-center border border-white/10 mb-8 relative group-hover:scale-110 transition-transform duration-500">
<span className="absolute -top-3 -right-3 w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center text-sm font-semibold shadow-lg shadow-brand-blue/30">
                    1
                  </span>
<i className="w-8 h-8 text-brand-blue" data-lucide="mouse-pointer-click"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">
                  Choose Your Plan
                </h3>
<p className="text-base text-slate-400 font-light">
                  Select a maintenance frequency that fits your usage—weekly,
                  bi-weekly, or monthly.
                </p>
</div>
<div className="bg-white/[0.03] border border-white/5 rounded-[2.5rem] p-10 hover:bg-white/[0.06] transition-colors duration-500 flex flex-col items-center text-center group">
<div className="w-20 h-20 bg-white/5 rounded-[1.5rem] flex items-center justify-center border border-white/10 mb-8 relative group-hover:scale-110 transition-transform duration-500">
<span className="absolute -top-3 -right-3 w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center text-sm font-semibold shadow-lg shadow-brand-blue/30">
                    2
                  </span>
<i className="w-8 h-8 text-brand-blue" data-lucide="truck"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">
                  We Do The Work
                </h3>
<p className="text-base text-slate-400 font-light">
                  Our certified technicians arrive on schedule, treat the water,
                  clean components, and inspect equipment.
                </p>
</div>
<div className="bg-white/[0.03] border border-white/5 rounded-[2.5rem] p-10 hover:bg-white/[0.06] transition-colors duration-500 flex flex-col items-center text-center group">
<div className="w-20 h-20 bg-white/5 rounded-[1.5rem] flex items-center justify-center border border-white/10 mb-8 relative group-hover:scale-110 transition-transform duration-500">
<span className="absolute -top-3 -right-3 w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center text-sm font-semibold shadow-lg shadow-brand-blue/30">
                    3
                  </span>
<i className="w-8 h-8 text-brand-blue" data-lucide="smile"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">
                  You Relax
                </h3>
<p className="text-base text-slate-400 font-light">
                  Receive a detailed digital report of the service, then jump in
                  knowing the water is perfect.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-brand-cream" id="why-us">
<div className="max-w-[90rem] mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="lg:sticky lg:top-32 order-2 lg:order-1">
<div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] group">
<img alt="Clean hot tub water" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>

<div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg">
<div className="flex items-center gap-4 mb-2">
<div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
<i className="w-5 h-5" data-lucide="check"></i>
</div>
<h4 className="text-lg font-semibold tracking-tight">
                      Certified Technicians
                    </h4>
</div>
<p className="text-sm text-gray-600">
                    All staff undergo rigorous CPO (Certified Pool Operator)
                    training.
                  </p>
</div>
</div>
</div>

<div className="order-1 lg:order-2">
<span className="text-brand-blue font-medium tracking-wide text-sm uppercase mb-3 block">
                The Soakwell Difference
              </span>
<h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-brand-dark mb-6 leading-[1.05]">
                More than just
                <br/>
<span className="text-gray-400">adding chlorine.</span>
</h2>
<p className="text-lg text-gray-600 mb-12">
                Improper chemistry can ruin heaters, degrade covers, and cause
                skin irritation. We use advanced digital photometers for exact
                balancing, extending the life of your spa.
              </p>
<div className="space-y-6">
<div className="group flex gap-6 p-6 rounded-[2rem] bg-white border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
<div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#f9f8f5] flex items-center justify-center text-brand-blue border border-gray-100 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="smartphone"></i>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight mb-2 text-brand-dark">
                      Digital Service Reports
                    </h3>
<p className="text-base text-gray-500 font-light">
                      After every visit, get an email with chemical readings,
                      actions taken, and photos of your clean spa.
                    </p>
</div>
</div>
<div className="group flex gap-6 p-6 rounded-[2rem] bg-white border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
<div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#f9f8f5] flex items-center justify-center text-brand-blue border border-gray-100 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="leaf"></i>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight mb-2 text-brand-dark">
                      Eco-Friendly Options
                    </h3>
<p className="text-base text-gray-500 font-light">
                      We offer enzyme-based treatments and low-chlorine
                      alternatives for a more natural, softer soak.
                    </p>
</div>
</div>
<div className="group flex gap-6 p-6 rounded-[2rem] bg-white border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
<div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#f9f8f5] flex items-center justify-center text-brand-blue border border-gray-100 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="clock"></i>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight mb-2 text-brand-dark">
                      Reliable Scheduling
                    </h3>
<p className="text-base text-gray-500 font-light">
                      We show up when we say we will. Track your technician's
                      ETA on the day of service.
                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white" id="pricing">
<div className="max-w-[90rem] mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tighter mb-6 leading-[1.05]">
              Simple, transparent
              <span className="text-brand-blue">pricing.</span>
</h2>
<p className="text-lg text-gray-600 mb-8">
              No hidden fees or long-term contracts. Cancel anytime.
            </p>

<div className="inline-flex items-center p-1 bg-brand-cream rounded-full border border-gray-200">
<button className="px-6 py-2.5 rounded-full text-sm font-medium bg-white shadow-sm border border-gray-200 text-brand-dark transition-all">
                Monthly Care
              </button>
<button className="px-6 py-2.5 rounded-full text-sm font-medium text-gray-500 hover:text-brand-dark transition-all">
                One-time Service
              </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">

<div className="bg-[#f9f8f5] rounded-[2.5rem] p-10 border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
<h3 className="text-xl font-semibold mb-2">Bi-Weekly</h3>
<p className="text-gray-500 text-sm mb-6 h-10">
                Perfect for moderate use spas.
              </p>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tight">$149</span>
<span className="text-gray-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-gray-600">
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-brand-blue" data-lucide="check"></i>
                  2 visits per month
                </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-brand-blue" data-lucide="check"></i>
                  Water testing &amp; balancing
                </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-brand-blue" data-lucide="check"></i>
                  Filter rinsing
                </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-brand-blue" data-lucide="check"></i>
                  Surface wipe down
                </li>
<li className="flex items-center gap-3 opacity-40">
<i className="w-4 h-4" data-lucide="x"></i>
                  Quarterly Drain &amp; Fill
                </li>
</ul>
<button className="w-full py-4 px-6 rounded-2xl border border-gray-300 bg-white text-brand-dark font-medium hover:border-gray-400 transition-all duration-300">
                Select Plan
              </button>
</div>

<div className="bg-[#0a0a0a] text-white rounded-[2.5rem] p-10 border border-gray-800 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] relative transform md:-translate-y-6 hover:-translate-y-8 transition-all duration-500">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-blue text-white px-4 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
                Most Popular
              </div>
<h3 className="text-xl font-semibold mb-2">Weekly Oasis</h3>
<p className="text-gray-400 text-sm mb-6 h-10">
                For heavy use or pristine perfection.
              </p>
<div className="mb-6">
<span className="text-5xl font-semibold tracking-tight">$249</span>
<span className="text-gray-400">/mo</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-gray-300">
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-brand-blue" data-lucide="check"></i>
                  4 visits per month
                </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-brand-blue" data-lucide="check"></i>
                  Precision chemical balancing
                </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-brand-blue" data-lucide="check"></i>
                  Deep filter cleaning
                </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-brand-blue" data-lucide="check"></i>
                  Cover cleaning &amp; UV protection
                </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-brand-blue" data-lucide="check"></i>
                  1 Quarterly Drain &amp; Fill included
                </li>
</ul>
<button className="w-full py-4 px-6 rounded-2xl bg-white text-[#0a0a0a] font-medium hover:bg-brand-cream transition-all duration-300 shadow-lg">
                Select Plan
              </button>
</div>

<div className="bg-[#f9f8f5] rounded-[2.5rem] p-10 border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
<h3 className="text-xl font-semibold mb-2">Vacation Rental</h3>
<p className="text-gray-500 text-sm mb-6 h-10">
                Turnover service for Airbnb/VRBO hosts.
              </p>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tight">$399</span>
<span className="text-gray-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-gray-600">
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-brand-blue" data-lucide="check"></i>
                  After-checkout servicing
                </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-brand-blue" data-lucide="check"></i>
                  Emergency shock treatments
                </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-brand-blue" data-lucide="check"></i>
                  Guest-ready presentation
                </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-brand-blue" data-lucide="check"></i>
                  Photo proof of condition
                </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-brand-blue" data-lucide="check"></i>
                  Priority support
                </li>
</ul>
<button className="w-full py-4 px-6 rounded-2xl border border-gray-300 bg-white text-brand-dark font-medium hover:border-gray-400 transition-all duration-300">
                Contact Us
              </button>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#f9f8f5] border-y border-gray-200/50">
<div className="max-w-[90rem] mx-auto px-6 lg:px-8">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-center mb-20">
            Loved by
            <span className="text-brand-blue italic pr-2">local</span>
            homeowners
          </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="bg-white p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between">
<div>
<div className="flex gap-1 text-brand-blue mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-gray-700 mb-8 leading-relaxed font-light">
                  "I used to hate trying to figure out the chemicals. Half the
                  time the water was cloudy. Since hiring Soakwell, it's crystal
                  clear every single time we open the cover. Worth every penny."
                </p>
</div>
<div className="flex items-center gap-4 border-t border-gray-50 pt-6">
<div className="w-12 h-12 bg-[#f9f8f5] rounded-full flex items-center justify-center font-medium text-base text-gray-500">
                  MS
                </div>
<div>
<h4 className="text-base font-semibold text-brand-dark tracking-tight">
                    Mark Stevens
                  </h4>
<span className="text-sm text-gray-500">Weekly Plan Member</span>
</div>
</div>
</div>
<div className="bg-white p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between">
<div>
<div className="flex gap-1 text-brand-blue mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-gray-700 mb-8 leading-relaxed font-light">
                  "They caught a failing heater element before it completely
                  broke in the middle of winter. The digital reports they send
                  are great. Professional, quiet, and reliable."
                </p>
</div>
<div className="flex items-center gap-4 border-t border-gray-50 pt-6">
<div className="w-12 h-12 bg-[#f9f8f5] rounded-full flex items-center justify-center font-medium text-base text-gray-500">
                  JL
                </div>
<div>
<h4 className="text-base font-semibold text-brand-dark tracking-tight">
                    Jessica Lin
                  </h4>
<span className="text-sm text-gray-500">
                    Bi-Weekly Plan Member
                  </span>
</div>
</div>
</div>
<div className="bg-white p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between">
<div>
<div className="flex gap-1 text-brand-blue mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-gray-700 mb-8 leading-relaxed font-light">
                  "Managing an Airbnb is stressful enough. Having Soakwell take
                  over the hot tub turnover means I never worry about bad
                  reviews related to dirty water. They are a lifesaver."
                </p>
</div>
<div className="flex items-center gap-4 border-t border-gray-50 pt-6">
<div className="w-12 h-12 bg-[#f9f8f5] rounded-full flex items-center justify-center font-medium text-base text-gray-500">
                  DR
                </div>
<div>
<h4 className="text-base font-semibold text-brand-dark tracking-tight">
                    David R.
                  </h4>
<span className="text-sm text-gray-500">Rental Host</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-3xl mx-auto px-6 lg:px-8">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-center mb-16">
            Frequently Asked Questions
          </h2>
<div className="space-y-4">
<div className="border border-gray-100 rounded-[2rem] overflow-hidden faq-item shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-300">
<button className="w-full text-left px-8 py-6 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors" onclick="toggleFaq(this)">
<span className="font-semibold tracking-tight text-lg">
                  Do I need to be home for service?
                </span>
<div className="w-10 h-10 rounded-full bg-[#f9f8f5] flex items-center justify-center">
<i className="w-5 h-5 text-gray-500 transition-transform duration-300" data-lucide="chevron-down"></i>
</div>
</button>
<div className="px-8 pb-6 text-gray-500 font-light hidden">
                No, as long as we have outdoor access to your hot tub and the
                equipment panel, you do not need to be home. We will send a
                service report upon completion.
              </div>
</div>
<div className="border border-gray-100 rounded-[2rem] overflow-hidden faq-item shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-300">
<button className="w-full text-left px-8 py-6 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors" onclick="toggleFaq(this)">
<span className="font-semibold tracking-tight text-lg">
                  What chemicals do you use?
                </span>
<div className="w-10 h-10 rounded-full bg-[#f9f8f5] flex items-center justify-center">
<i className="w-5 h-5 text-gray-500 transition-transform duration-300" data-lucide="chevron-down"></i>
</div>
</button>
<div className="px-8 pb-6 text-gray-500 font-light hidden">
                We use premium, commercial-grade chemicals. Depending on your
                system, we use granular chlorine, bromine, or salt-system
                compliant products. We also use enzyme clarifiers and
                stain/scale inhibitors.
              </div>
</div>
<div className="border border-gray-100 rounded-[2rem] overflow-hidden faq-item shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-300">
<button className="w-full text-left px-8 py-6 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors" onclick="toggleFaq(this)">
<span className="font-semibold tracking-tight text-lg">
                  How long does a Drain &amp; Fill take?
                </span>
<div className="w-10 h-10 rounded-full bg-[#f9f8f5] flex items-center justify-center">
<i className="w-5 h-5 text-gray-500 transition-transform duration-300" data-lucide="chevron-down"></i>
</div>
</button>
<div className="px-8 pb-6 text-gray-500 font-light hidden">
                A standard drain, detail clean, and refill takes about 2-3 hours
                depending on your water pressure and tub size. It will then take
                12-24 hours for the water to heat back up to optimal
                temperature.
              </div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#0a0a0a] relative overflow-hidden m-4 lg:m-8 rounded-[3rem]">

<div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6">
            Ready for a better
            <span className="text-brand-blue italic pr-2">soak</span>
            ?
          </h2>
<p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Join hundreds of local homeowners who trust Soakwell to keep their
            water pristine.
          </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="bg-brand-blue text-white px-8 py-4 rounded-full text-base font-medium hover:bg-brand-blue/90 transition-all shadow-[0_10px_20px_-10px_rgba(123,163,198,0.5)]" href="#booking">
              Schedule First Service
            </a>
<a className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full text-base font-medium hover:bg-white/20 transition-all flex items-center justify-center gap-2" href="tel:+1234567890">
<i className="w-4 h-4" data-lucide="phone"></i>
              (555) 123-4567
            </a>
</div>
</div>
</section>
</main>

<footer className="bg-slate-900 text-slate-300 py-16 lg:py-20 border-t border-slate-800">
<div className="max-w-[90rem] mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">

<div className="lg:col-span-2">
<a className="flex items-center gap-3 mb-6" href="#">
<div className="w-8 h-8 border border-white rounded-t-full rounded-b-md flex items-center justify-center relative overflow-hidden">
<svg className="text-white" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10"></path>
<path d="M7 8c.5-1.5 2-1.5 2.5 0"></path>
<path d="M12 8c.5-1.5 2-1.5 2.5 0"></path>
<path d="M17 8c.5-1.5 2-1.5 2.5 0"></path>
<path d="M7 4c.5-1.5 2-1.5 2.5 0"></path>
<path d="M12 4c.5-1.5 2-1.5 2.5 0"></path>
<path d="M17 4c.5-1.5 2-1.5 2.5 0"></path>
</svg>
</div>
<span className="text-xl font-semibold tracking-tight text-white">
                SOAKWELL
              </span>
</a>
<p className="text-sm text-slate-400 mb-6 max-w-sm">
              Professional hot tub and spa maintenance services providing clean
              water and peace of mind.
            </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
</div>
</div>

<div>
<h4 className="text-white font-medium mb-6">Services</h4>
<ul className="space-y-4 text-sm">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Weekly Maintenance
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Drain &amp; Refill
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Filter Cleaning
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Winterization
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Airbnb Turnover
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Company</h4>
<ul className="space-y-4 text-sm">
<li>
<a className="hover:text-white transition-colors" href="#">
                  About Us
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Why Choose Us
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Pricing
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Service Area
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Contact
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Contact</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 shrink-0" data-lucide="map-pin"></i>
                123 Spa Blvd, Suite 100
                <br/>
                Denver, CO 80202
              </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 shrink-0" data-lucide="phone"></i>
                (555) 123-4567
              </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 shrink-0" data-lucide="mail"></i>
                hello@soakwell.com
              </li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
<p>© 2024 Soakwell Hot Tub Care. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-slate-300" href="#">Privacy Policy</a>
<a className="hover:text-slate-300" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
