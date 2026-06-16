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



      function nav(pageId) {
          // Hide all sections
          document.querySelectorAll('.page-section').forEach(el => {
              el.classList.remove('active');
          });

          // Show target section
          const target = document.getElementById(pageId);
          if (target) {
              target.classList.add('active');
          }

          // Update nav link styles (desktop)
          document.querySelectorAll('.nav-link').forEach(el => {
              if (el.getAttribute('data-target') === pageId) {
                  el.classList.add('text-slate-900', 'font-semibold');
                  el.classList.remove('text-slate-500', 'font-medium');
              } else {
                  el.classList.remove('text-slate-900', 'font-semibold');
                  el.classList.add('text-slate-500', 'font-medium');
              }
          });

          // Close mobile menu if open
          const mobileMenu = document.getElementById('mobile-menu');
          if (!mobileMenu.classList.contains('hidden')) {
              mobileMenu.classList.add('hidden');
          }

          // Scroll to top
          window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      // Mobile menu toggle
      document.getElementById('mobile-menu-btn').addEventListener('click', () => {
          const menu = document.getElementById('mobile-menu');
          menu.classList.toggle('hidden');
      });

      // Initialize active state
      nav('home');
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2" href="#" onclick="nav('home')">
<span className="font-serif font-medium text-2xl tracking-normal text-slate-900 uppercase">
            99's Tailoring
          </span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="nav-link text-sm hover:text-slate-900 transition-colors text-slate-900 font-semibold" data-target="home" href="#" onclick="nav('home')">
            Home
          </a>
<a className="nav-link text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" data-target="services" href="#" onclick="nav('services')">
            Services &amp; Pricing
          </a>
<a className="nav-link text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" data-target="about" href="#" onclick="nav('about')">
            About
          </a>
<a className="nav-link text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" data-target="contact" href="#" onclick="nav('contact')">
            Contact
          </a>
<a className="bg-slate-900 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm" href="#" onclick="nav('book')">
            Book Appointment
          </a>
</nav>

<button className="md:hidden text-slate-600 hover:text-slate-900 focus:outline-none" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="hidden md:hidden bg-white border-b border-slate-200 absolute w-full left-0 top-20 shadow-sm" id="mobile-menu">
<div className="flex flex-col px-6 py-4 space-y-4">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 block" href="#" onclick="nav('home')">
            Home
          </a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 block" href="#" onclick="nav('services')">
            Services &amp; Pricing
          </a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 block" href="#" onclick="nav('about')">
            About
          </a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 block" href="#" onclick="nav('contact')">
            Contact
          </a>
<a className="text-sm font-medium text-slate-900 block" href="#" onclick="nav('book')">
            Book Appointment
          </a>
</div>
</div>
</header>

<main className="flex-grow flex flex-col">

<div className="page-section fade-in flex-grow active" id="home">

<section className="bg-white py-10 md:py-24 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-5 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
<div className="">
<h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-slate-900 leading-tight mb-5 md:mb-8 text-center md:text-left">
                Expert Tailoring &amp; Alterations in Denver
              </h1>
<p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed font-light text-center md:text-left">
                For nearly 20 years, we've helped customers look and feel their
                best through expert alterations, precise tailoring, and
                dependable craftsmanship.
              </p>
<div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-10 justify-center md:justify-start">
<button className="bg-slate-900 text-white px-6 py-3.5 md:py-3 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm w-full sm:w-auto text-center flex justify-center" onclick="nav('book')">
                  Book Appointment
                </button>
<a className="bg-white text-slate-900 border border-slate-200 px-6 py-3.5 md:py-3 rounded-md text-sm font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 shadow-sm w-full sm:w-auto" href="tel:7204992341">
<iconify-icon icon="solar:phone-linear" width="18"></iconify-icon>
                  Call Now
                </a>
</div>

<div className="flex flex-wrap justify-center md:justify-start gap-x-4 md:gap-x-6 gap-y-2.5 md:gap-y-3 text-xs sm:text-sm text-slate-500 font-medium">
<span className="flex items-center gap-1.5">
<iconify-icon className="text-slate-400" icon="solar:star-circle-linear" width="18"></iconify-icon>
                  Nearly 20 Years Experience
                </span>
<span className="flex items-center gap-1.5">
<iconify-icon className="text-slate-400" icon="solar:verified-check-linear" width="18"></iconify-icon>
                  Quality Craftsmanship
                </span>
<span className="flex items-center gap-1.5">
<iconify-icon className="text-slate-400" icon="solar:tag-price-linear" width="18"></iconify-icon>
                  Honest Pricing
                </span>
<span className="flex items-center gap-1.5">
<iconify-icon className="text-slate-400" icon="solar:clock-circle-linear" width="18"></iconify-icon>
                  Timely Service
                </span>
<span className="flex items-center gap-1.5">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear" width="18"></iconify-icon>
                  Local Denver Business
                </span>
</div>
</div>
<div className="relative h-[22rem] sm:h-96 md:h-[40rem] rounded-none overflow-hidden border-8 md:border-[16px] border-white shadow-2xl bg-slate-100 mt-6 md:mt-0">
<img alt="Tailor working on a suit jacket at a sewing machine" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dd0b2b16-8ce7-40eb-905b-b3a85df867f7_1600w.jpg"/>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-b border-slate-200 theme-dark">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900 mb-6">
              A Tailor You Can Trust
            </h2>
<p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed font-serif italic max-w-4xl mx-auto">
              "After working as a tailor for nearly two decades, I decided to
              take a leap of faith and open my own shop in 2023. Building a
              business from the ground up wasn't easy, but through dedication,
              quality workmanship, and a commitment to customer service, 99's
              Tailoring &amp; Alterations has earned a reputation for integrity,
              reliability, and exceptional results."
            </p>
<button className="text-sm font-medium text-slate-900 hover:text-slate-600 flex items-center justify-center gap-1 mx-auto transition-colors" onclick="nav('about')">
              Learn More
              <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</section>

<section className="py-20 bg-white border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900 mb-2">
                  Our Services
                </h2>
<p className="text-slate-500 text-sm">
                  Expert alterations for all types of garments.
                </p>
</div>
<button className="hidden md:flex text-sm font-medium text-slate-900 hover:text-slate-600 items-center gap-1 transition-colors" onclick="nav('services')">
                View All Services &amp; Pricing
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-0">
<div className="bg-slate-50 border border-slate-100 p-6 rounded-lg text-center hover:border-slate-200 transition-colors">
<iconify-icon className="text-slate-400 mb-3 text-2xl" icon="solar:user-circle-linear"></iconify-icon>
<h3 className="text-sm font-medium text-slate-900">
                  Suit Alterations
                </h3>
</div>
<div className="bg-slate-50 border border-slate-100 p-6 rounded-lg text-center hover:border-slate-200 transition-colors">
<iconify-icon className="text-slate-400 mb-3 text-2xl" icon="solar:clothes-linear"></iconify-icon>
<h3 className="text-sm font-medium text-slate-900">
                  Jacket &amp; Blazer
                </h3>
</div>
<div className="bg-slate-50 border border-slate-100 p-6 rounded-lg text-center hover:border-slate-200 transition-colors">
<iconify-icon className="text-slate-400 mb-3 text-2xl" icon="solar:routing-2-linear"></iconify-icon>
<h3 className="text-sm font-medium text-slate-900">
                  Pants Alterations
                </h3>
</div>
<div className="bg-slate-50 border border-slate-100 p-6 rounded-lg text-center hover:border-slate-200 transition-colors">
<iconify-icon className="text-slate-400 mb-3 text-2xl" icon="solar:user-id-linear"></iconify-icon>
<h3 className="text-sm font-medium text-slate-900">
                  Shirt Alterations
                </h3>
</div>
<div className="bg-slate-50 border border-slate-100 p-6 rounded-lg text-center hover:border-slate-200 transition-colors">
<iconify-icon className="text-slate-400 mb-3 text-2xl" icon="solar:crown-star-linear"></iconify-icon>
<h3 className="text-sm font-medium text-slate-900">
                  Dress Alterations
                </h3>
</div>
<div className="bg-slate-50 border border-slate-100 p-6 rounded-lg text-center hover:border-slate-200 transition-colors">
<iconify-icon className="text-slate-400 mb-3 text-2xl" icon="solar:glass-water-linear"></iconify-icon>
<h3 className="text-sm font-medium text-slate-900">
                  Formal &amp; Wedding
                </h3>
</div>
<div className="bg-slate-50 border border-slate-100 p-6 rounded-lg text-center hover:border-slate-200 transition-colors">
<iconify-icon className="text-slate-400 mb-3 text-2xl" icon="solar:layers-linear"></iconify-icon>
<h3 className="text-sm font-medium text-slate-900">
                  Jeans Alterations
                </h3>
</div>
<div className="bg-slate-50 border border-slate-100 p-6 rounded-lg text-center hover:border-slate-200 transition-colors">
<iconify-icon className="text-slate-400 mb-3 text-2xl" icon="solar:ruler-linear"></iconify-icon>
<h3 className="text-sm font-medium text-slate-900">
                  Repairs &amp; Adjustments
                </h3>
</div>
</div>
<button className="md:hidden mt-6 text-sm font-medium text-slate-900 flex items-center justify-center w-full gap-1" onclick="nav('services')">
              View All Services &amp; Pricing
              <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</section>

<section className="py-20 bg-slate-50 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900 mb-12 text-center">
              Why Customers Choose Us
            </h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
<div className="w-10 h-10 bg-slate-100 rounded-md flex items-center justify-center mb-4 border border-slate-200">
<iconify-icon className="text-slate-700" icon="solar:ruler-pen-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">
                  Precision Workmanship
                </h3>
<p className="text-sm text-slate-600 leading-relaxed">
                  Every garment is altered with attention to detail and care,
                  ensuring a flawless fit and finish.
                </p>
</div>
<div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
<div className="w-10 h-10 bg-slate-100 rounded-md flex items-center justify-center mb-4 border border-slate-200">
<iconify-icon className="text-slate-700" icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">
                  Personalized Service
                </h3>
<p className="text-sm text-slate-600 leading-relaxed">
                  Every customer receives individual attention, honest advice,
                  and specific fitting recommendations.
                </p>
</div>
<div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
<div className="w-10 h-10 bg-slate-100 rounded-md flex items-center justify-center mb-4 border border-slate-200">
<iconify-icon className="text-slate-700" icon="solar:medal-star-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">
                  Experienced Tailor
                </h3>
<p className="text-sm text-slate-600 leading-relaxed">
                  Benefit from nearly 20 years of professional, hands-on
                  tailoring and garment construction experience.
                </p>
</div>
<div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
<div className="w-10 h-10 bg-slate-100 rounded-md flex items-center justify-center mb-4 border border-slate-200">
<iconify-icon className="text-slate-700" icon="solar:wad-of-money-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">
                  Transparent Pricing
                </h3>
<p className="text-sm text-slate-600 leading-relaxed">
                  Clear, honest pricing provided upfront with no hidden fees or
                  unexpected surprises.
                </p>
</div>
<div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
<div className="w-10 h-10 bg-slate-100 rounded-md flex items-center justify-center mb-4 border border-slate-200">
<iconify-icon className="text-slate-700" icon="solar:calendar-date-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">
                  Reliable Turnaround
                </h3>
<p className="text-sm text-slate-600 leading-relaxed">
                  Timely and dependable service, delivering your garments when
                  promised without sacrificing quality.
                </p>
</div>
<div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
<div className="w-10 h-10 bg-slate-100 rounded-md flex items-center justify-center mb-4 border border-slate-200">
<iconify-icon className="text-slate-700" icon="solar:hand-shake-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">
                  Community Reputation
                </h3>
<p className="text-sm text-slate-600 leading-relaxed">
                  A local business built entirely through trust, word-of-mouth
                  referrals, and satisfied neighbors.
                </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900 mb-10">
              Craftsmanship
            </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="aspect-square bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
<img alt="Sewing machine details" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="aspect-square bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
<img alt="Tailored suit" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1594938298596-eb5fd3f9df50?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="aspect-square bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
<img alt="Fabric selection" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="aspect-square bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
<img alt="Dress fitting" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900 mb-4">
                Customer Reviews
              </h2>
<div className="flex justify-center items-center gap-1 text-slate-900">
<iconify-icon className="text-slate-900" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-slate-900" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-slate-900" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-slate-900" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-slate-900" icon="solar:star-bold" width="20"></iconify-icon>
<span className="ml-2 text-sm font-medium text-slate-600">
                  Based on local feedback
                </span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between">
<div className="">
<div className="flex gap-1 mb-3">
<iconify-icon className="text-slate-900" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-slate-900" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-slate-900" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-slate-900" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-slate-900" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-4">
                    "I brought in a suit that was much too large, and he
                    completely reconstructed it to fit perfectly. You can tell
                    he has years of experience. Highly recommend to anyone in
                    Denver."
                  </p>
</div>
<span className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                  M. Davis
                </span>
</div>

<div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between">
<div className="">
<div className="flex gap-1 mb-3">
<iconify-icon className="text-slate-900" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-slate-900" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-slate-900" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-slate-900" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-slate-900" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-4">
                    "Honest pricing and incredible work on my wedding dress
                    alterations. He made sure I felt comfortable and the
                    turnaround time was exactly as promised."
                  </p>
</div>
<span className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                  S. Thompson
                </span>
</div>

<div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between">
<div>
<div className="flex gap-1 mb-3">
<iconify-icon className="text-slate-900" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-slate-900" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-slate-900" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-slate-900" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-slate-900" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-4">
                    "Best tailor in the neighborhood. Fixed several pairs of
                    jeans and a blazer. The stitching is impeccable and
                    indistinguishable from the original."
                  </p>
</div>
<span className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                  J. Roberts
                </span>
</div>
</div>
</div>
</section>
</div>

<div className="page-section fade-in flex-grow bg-white" id="services">
<section className="py-16 md:py-24 border-b border-slate-200">
<div className="max-w-3xl mx-auto px-6">
<h1 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6 text-center">
              Services &amp; Pricing
            </h1>
<div className="bg-slate-50 border border-slate-200 p-4 rounded-md mb-12 text-center">
<p className="text-sm text-slate-600">
<span className="font-medium text-slate-900">Notice:</span>
                Prices listed are starting prices. Final pricing may vary
                depending on garment construction, fabric, complexity, and
                required adjustments.
              </p>
</div>
<div className="space-y-12">

<div>
<h2 className="text-lg font-medium tracking-tight text-slate-900 mb-4 border-b border-slate-200 pb-2 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:clothes-linear"></iconify-icon>
                  Blazer / Coat
                </h2>
<ul className="space-y-3">
<li className="flex justify-between items-end">
<span className="text-sm text-slate-600 bg-white pr-2 z-10">
                      Shorten Sleeve
                    </span>
<div className="flex-grow border-b border-dotted border-slate-300 mb-1 mx-2"></div>
<span className="text-sm font-medium text-slate-900 bg-white pl-2 z-10">
                      $50
                    </span>
</li>
<li className="flex justify-between items-end">
<span className="text-sm text-slate-600 bg-white pr-2 z-10">
                      Taper Sleeve
                    </span>
<div className="flex-grow border-b border-dotted border-slate-300 mb-1 mx-2"></div>
<span className="text-sm font-medium text-slate-900 bg-white pl-2 z-10">
                      $45
                    </span>
</li>
<li className="flex justify-between items-end">
<span className="text-sm text-slate-600 bg-white pr-2 z-10">
                      Side In/Out
                    </span>
<div className="flex-grow border-b border-dotted border-slate-300 mb-1 mx-2"></div>
<span className="text-sm font-medium text-slate-900 bg-white pl-2 z-10">
                      $52
                    </span>
</li>
<li className="flex justify-between items-end">
<span className="text-sm text-slate-600 bg-white pr-2 z-10">
                      Reduce Breast
                    </span>
<div className="flex-grow border-b border-dotted border-slate-300 mb-1 mx-2"></div>
<span className="text-sm font-medium text-slate-900 bg-white pl-2 z-10">
                      $85
                    </span>
</li>
<li className="flex justify-between items-end">
<span className="text-sm text-slate-600 bg-white pr-2 z-10">
                      Center In/Out
                    </span>
<div className="flex-grow border-b border-dotted border-slate-300 mb-1 mx-2"></div>
<span className="text-sm font-medium text-slate-900 bg-white pl-2 z-10">
                      $30
                    </span>
</li>
<li className="flex justify-between items-end">
<span className="text-sm text-slate-600 bg-white pr-2 z-10">
                      Raise Collar
                    </span>
<div className="flex-grow border-b border-dotted border-slate-300 mb-1 mx-2"></div>
<span className="text-sm font-medium text-slate-900 bg-white pl-2 z-10">
                      $50
                    </span>
</li>
<li className="flex justify-between items-end">
<span className="text-sm text-slate-600 bg-white pr-2 z-10">
                      Shorten Coat
                    </span>
<div className="flex-grow border-b border-dotted border-slate-300 mb-1 mx-2"></div>
<span className="text-sm font-medium text-slate-900 bg-white pl-2 z-10">
                      $130
                    </span>
</li>
<li className="flex justify-between items-end">
<span className="text-sm text-slate-600 bg-white pr-2 z-10">
                      Cut Shoulder
                    </span>
<div className="flex-grow border-b border-dotted border-slate-300 mb-1 mx-2"></div>
<span className="text-sm font-medium text-slate-900 bg-white pl-2 z-10">
                      $230
                    </span>
</li>
<li className="flex justify-between items-end">
<span className="text-sm text-slate-600 bg-white pr-2 z-10">
                      Shorten Sleeve (from top)
                    </span>
<div className="flex-grow border-b border-dotted border-slate-300 mb-1 mx-2"></div>
<span className="text-sm font-medium text-slate-900 bg-white pl-2 z-10">
                      $135–230
                    </span>
</li>
</ul>
</div>

<div>
<h2 className="text-lg font-medium tracking-tight text-slate-900 mb-4 border-b border-slate-200 pb-2 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:routing-2-linear"></iconify-icon>
                  Pants
                </h2>
<ul className="space-y-3">
<li className="flex justify-between items-end">
<span className="text-sm text-slate-600 bg-white pr-2 z-10">
                      Plain Bottom
                    </span>
<div className="flex-grow border-b border-dotted border-slate-300 mb-1 mx-2"></div>
<span className="text-sm font-medium text-slate-900 bg-white pl-2 z-10">
                      $23
                    </span>
</li>
<li className="flex justify-between items-end">
<span className="text-sm text-slate-600 bg-white pr-2 z-10">
                      Taper Full Leg
                    </span>
<div className="flex-grow border-b border-dotted border-slate-300 mb-1 mx-2"></div>
<span className="text-sm font-medium text-slate-900 bg-white pl-2 z-10">
                      $37
                    </span>
</li>
<li className="flex justify-between items-end">
<span className="text-sm text-slate-600 bg-white pr-2 z-10">
                      Waist Seat In/Out
                    </span>
<div className="flex-grow border-b border-dotted border-slate-300 mb-1 mx-2"></div>
<span className="text-sm font-medium text-slate-900 bg-white pl-2 z-10">
                      $36
                    </span>
</li>
<li className="flex justify-between items-end">
<span className="text-sm text-slate-600 bg-white pr-2 z-10">
                      Side In w/ Pocket
                    </span>
<div className="flex-grow border-b border-dotted border-slate-300 mb-1 mx-2"></div>
<span className="text-sm font-medium text-slate-900 bg-white pl-2 z-10">
                      $38
                    </span>
</li>
<li className="flex justify-between items-end">
<span className="text-sm text-slate-600 bg-white pr-2 z-10">
                      Crotch In/Out
                    </span>
<div className="flex-grow border-b border-dotted border-slate-300 mb-1 mx-2"></div>
<span className="text-sm font-medium text-slate-900 bg-white pl-2 z-10">
                      $25
                    </span>
</li>
<li className="flex justify-between items-end">
<span className="text-sm text-slate-600 bg-white pr-2 z-10">
                      Shirt Gripper
                    </span>
<div className="flex-grow border-b border-dotted border-slate-300 mb-1 mx-2"></div>
<span className="text-sm font-medium text-slate-900 bg-white pl-2 z-10">
                      $28
                    </span>
</li>
<li className="flex justify-between items-end">
<span className="text-sm text-slate-600 bg-white pr-2 z-10">
                      Cuff
                    </span>
<div className="flex-grow border-b border-dotted border-slate-300 mb-1 mx-2"></div>
<span className="text-sm font-medium text-slate-900 bg-white pl-2 z-10">
                      $28
                    </span>
</li>
<li className="flex justify-between items-end">
<span className="text-sm text-slate-600 bg-white pr-2 z-10">
                      Heel Guard
                    </span>
<div className="flex-grow border-b border-dotted border-slate-300 mb-1 mx-2"></div>
<span className="text-sm font-medium text-slate-900 bg-white pl-2 z-10">
                      $20
                    </span>
</li>
<li className="flex justify-between items-end">
<span className="text-sm text-slate-600 bg-white pr-2 z-10">
                      Cut Waist Band
                    </span>
<div className="flex-grow border-b border-dotted border-slate-300 mb-1 mx-2"></div>
<span className="text-sm font-medium text-slate-900 bg-white pl-2 z-10">
                      $40
                    </span>
</li>
<li className="flex justify-between items-end">
<span className="text-sm text-slate-600 bg-white pr-2 z-10">
                      Suspender Button
                    </span>
<div className="flex-grow border-b border-dotted border-slate-300 mb-1 mx-2"></div>
<span className="text-sm font-medium text-slate-900 bg-white pl-2 z-10">
                      $25
                    </span>
</li>
<li className="flex justify-between items-end">
<span className="text-sm text-slate-600 bg-white pr-2 z-10">
                      Change Zipper
                    </span>
<div className="flex-grow border-b border-dotted border-slate-300 mb-1 mx-2"></div>
<span className="text-sm font-medium text-slate-900 bg-white pl-2 z-10">
                      $26
                    </span>
</li>
<li className="flex justify-between items-end">
<span className="text-sm text-slate-600 bg-white pr-2 z-10">
                      Recut Pants
                    </span>
<div className="flex-grow border-b border-dotted border-slate-300 mb-1 mx-2"></div>
<span className="text-sm font-medium text-slate-900 bg-white pl-2 z-10">
                      $145
                    </span>
</li>
</ul>
</div>

<div>
<h2 className="text-lg font-medium tracking-tight text-slate-900 mb-4 border-b border-slate-200 pb-2 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:user-id-linear"></iconify-icon>
                  Shirts
                </h2>
<ul className="space-y-3">
<li className="flex justify-between items-end">
<span className="text-sm text-slate-600 bg-white pr-2 z-10">
                      Shorten Sleeve
                    </span>
<div className="flex-grow border-b border-dotted border-slate-300 mb-1 mx-2"></div>
<span className="text-sm font-medium text-slate-900 bg-white pl-2 z-10">
                      $34
                    </span>
</li>
<li className="flex justify-between items-end">
<span className="text-sm text-slate-600 bg-white pr-2 z-10">
                      Shorten Sleeve (from top)
                    </span>
<div className="flex-grow border-b border-dotted border-slate-300 mb-1 mx-2"></div>
<span className="text-sm font-medium text-slate-900 bg-white pl-2 z-10">
                      $45
                    </span>
</li>
<li className="flex justify-between items-end">
<span className="text-sm text-slate-600 bg-white pr-2 z-10">
                      Shorten Bottom
                    </span>
<div className="flex-grow border-b border-dotted border-slate-300 mb-1 mx-2"></div>
<span className="text-sm font-medium text-slate-900 bg-white pl-2 z-10">
                      $25
                    </span>
</li>
<li className="flex justify-between items-end">
<span className="text-sm text-slate-600 bg-white pr-2 z-10">
                      Side In
                    </span>
<div className="flex-grow border-b border-dotted border-slate-300 mb-1 mx-2"></div>
<span className="text-sm font-medium text-slate-900 bg-white pl-2 z-10">
                      $30
                    </span>
</li>
<li className="flex justify-between items-end">
<span className="text-sm text-slate-600 bg-white pr-2 z-10">
                      Side In (long sleeve)
                    </span>
<div className="flex-grow border-b border-dotted border-slate-300 mb-1 mx-2"></div>
<span className="text-sm font-medium text-slate-900 bg-white pl-2 z-10">
                      $38
                    </span>
</li>
<li className="flex justify-between items-end">
<span className="text-sm text-slate-600 bg-white pr-2 z-10">
                      Dart
                    </span>
<div className="flex-grow border-b border-dotted border-slate-300 mb-1 mx-2"></div>
<span className="text-sm font-medium text-slate-900 bg-white pl-2 z-10">
                      $20
                    </span>
</li>
</ul>
</div>

<div>
<h2 className="text-lg font-medium tracking-tight text-slate-900 mb-4 border-b border-slate-200 pb-2 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:layers-linear"></iconify-icon>
                  Jeans
                </h2>
<ul className="space-y-3">
<li className="flex justify-between items-end">
<span className="text-sm text-slate-600 bg-white pr-2 z-10">
                      Plain Bottom
                    </span>
<div className="flex-grow border-b border-dotted border-slate-300 mb-1 mx-2"></div>
<span className="text-sm font-medium text-slate-900 bg-white pl-2 z-10">
                      $20
                    </span>
</li>
<li className="flex justify-between items-end">
<span className="text-sm text-slate-600 bg-white pr-2 z-10">
                      Original Hem
                    </span>
<div className="flex-grow border-b border-dotted border-slate-300 mb-1 mx-2"></div>
<span className="text-sm font-medium text-slate-900 bg-white pl-2 z-10">
                      $35
                    </span>
</li>
<li className="flex justify-between items-end">
<span className="text-sm text-slate-600 bg-white pr-2 z-10">
                      Waist Seat In
                    </span>
<div className="flex-grow border-b border-dotted border-slate-300 mb-1 mx-2"></div>
<span className="text-sm font-medium text-slate-900 bg-white pl-2 z-10">
                      $38
                    </span>
</li>
<li className="flex justify-between items-end">
<span className="text-sm text-slate-600 bg-white pr-2 z-10">
                      Taper Legs
                    </span>
<div className="flex-grow border-b border-dotted border-slate-300 mb-1 mx-2"></div>
<span className="text-sm font-medium text-slate-900 bg-white pl-2 z-10">
                      $32–45
                    </span>
</li>
<li className="flex justify-between items-end">
<span className="text-sm text-slate-600 bg-white pr-2 z-10">
                      Patching
                    </span>
<div className="flex-grow border-b border-dotted border-slate-300 mb-1 mx-2"></div>
<span className="text-sm font-medium text-slate-900 bg-white pl-2 z-10">
                      $15 per inch
                    </span>
</li>
</ul>
</div>

<div className="grid md:grid-cols-2 gap-12 md:gap-8">
<div>
<h2 className="text-lg font-medium tracking-tight text-slate-900 mb-4 border-b border-slate-200 pb-2 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:crown-star-linear"></iconify-icon>
                    Dresses
                  </h2>
<ul className="space-y-3">
<li className="flex justify-between items-end">
<span className="text-sm text-slate-600 bg-white pr-2 z-10">
                        Various Hems
                      </span>
<div className="flex-grow border-b border-dotted border-slate-300 mb-1 mx-2"></div>
<span className="text-sm font-medium text-slate-900 bg-white pl-2 z-10">
                        $68+
                      </span>
</li>
<li className="flex justify-between items-end">
<span className="text-sm text-slate-600 bg-white pr-2 z-10">
                        Side In
                      </span>
<div className="flex-grow border-b border-dotted border-slate-300 mb-1 mx-2"></div>
<span className="text-sm font-medium text-slate-900 bg-white pl-2 z-10">
                        $68+
                      </span>
</li>
<li className="flex justify-between items-end">
<span className="text-sm text-slate-600 bg-white pr-2 z-10">
                        Adding Fabric (w/ zipper)
                      </span>
<div className="flex-grow border-b border-dotted border-slate-300 mb-1 mx-2"></div>
<span className="text-sm font-medium text-slate-900 bg-white pl-2 z-10">
                        $80+
                      </span>
</li>
</ul>
</div>
<div>
<h2 className="text-lg font-medium tracking-tight text-slate-900 mb-4 border-b border-slate-200 pb-2 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:glass-water-linear"></iconify-icon>
                    Formal Dresses
                  </h2>
<ul className="space-y-3">
<li className="flex justify-between items-end">
<span className="text-sm text-slate-600 bg-white pr-2 z-10">
                        Side In
                      </span>
<div className="flex-grow border-b border-dotted border-slate-300 mb-1 mx-2"></div>
<span className="text-sm font-medium text-slate-900 bg-white pl-2 z-10">
                        $100+
                      </span>
</li>
<li className="flex justify-between items-end">
<span className="text-sm text-slate-600 bg-white pr-2 z-10">
                        Various Hems
                      </span>
<div className="flex-grow border-b border-dotted border-slate-300 mb-1 mx-2"></div>
<span className="text-sm font-medium text-slate-900 bg-white pl-2 z-10">
                        $90+
                        <span className="font-normal text-xs text-slate-400">
                          (based on width)
                        </span>
</span>
</li>
</ul>
</div>
</div>
</div>

<div className="mt-16 bg-slate-50 border border-slate-200 rounded-lg p-8 text-center">
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">
                Need Something Not Listed?
              </h3>
<p className="text-sm text-slate-600 mb-6">
                Call us or schedule an appointment to discuss your specific
                alteration needs.
              </p>
<div className="flex flex-wrap justify-center gap-4">
<button className="bg-slate-900 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm" onclick="nav('book')">
                  Book Appointment
                </button>
<a className="bg-white text-slate-900 border border-slate-200 px-5 py-2.5 rounded-md text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm" href="tel:7204992341">
                  (720) 499-2341
                </a>
</div>
</div>
</div>
</section>
</div>

<div className="page-section fade-in flex-grow bg-white" id="about">
<section className="py-16 md:py-24 border-b border-slate-200">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h1 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">
                Built on Experience, Integrity, and Craftsmanship
              </h1>
</div>
<div className="grid md:grid-cols-2 gap-12 items-start mb-20">
<div className="space-y-6 text-sm text-slate-600 leading-relaxed">
<p>
                  Welcome to 99's Tailoring &amp; Alterations. The foundation of
                  this business was built on a simple premise: treat every
                  garment with the utmost care and every customer with genuine
                  respect.
                </p>
<p>
                  With nearly 20 years of professional tailoring experience, I
                  spent decades honing my craft, learning the intricacies of
                  garment construction, and perfecting the art of the fit. In
                  2023, I decided to take a leap of faith and open my own shop
                  right here in Denver.
                </p>
<p>
                  Starting a business from scratch presented its challenges, but
                  my commitment to quality work quickly helped build a loyal
                  customer base. We don't rely on flashy marketing or luxury
                  gimmicks—our reputation is built entirely on the precision of
                  our stitches, honest advice, and the satisfaction of our
                  neighbors.
                </p>
<p>
                  Whether you need a simple hem, a vintage piece restored, or a
                  wedding dress altered to perfection, you can trust that your
                  clothing is in experienced, capable hands.
                </p>
</div>
<div className="bg-slate-100 rounded-none overflow-hidden border-[12px] border-white shadow-xl aspect-[3/4]">
<img alt="Tailoring tools" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1605371924599-2d0365da26f5?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
</div>

<div className="grid md:grid-cols-2 gap-8">
<div className="bg-slate-50 border border-slate-200 p-8 rounded-lg">
<h2 className="text-xl font-medium tracking-tight text-slate-900 mb-4">
                  Our Values
                </h2>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear" width="18"></iconify-icon>
                    Quality
                  </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear" width="18"></iconify-icon>
                    Honesty
                  </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear" width="18"></iconify-icon>
                    Precision
                  </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear" width="18"></iconify-icon>
                    Customer Care
                  </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear" width="18"></iconify-icon>
                    Reliability
                  </li>
</ul>
</div>
<div className="bg-slate-900 text-white p-8 rounded-lg shadow-sm flex flex-col justify-center theme-dark">
<h2 className="text-xl font-medium tracking-tight mb-4 text-white">
                  Mission Statement
                </h2>
<p className="text-sm text-slate-300 leading-relaxed italic">
                  "To provide expert tailoring and alterations with exceptional
                  craftsmanship while treating every customer and garment with
                  the care and respect they deserve."
                </p>
</div>
</div>
</div>
</section>
</div>

<div className="page-section fade-in flex-grow bg-slate-50" id="book">
<section className="py-16 md:py-24">
<div className="max-w-3xl mx-auto px-6 text-center">
<h1 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">
              Schedule Your Appointment
            </h1>
<p className="text-sm text-slate-600 mb-10">
              Book a fitting, consultation, or alteration appointment using the
              scheduler below.
            </p>

<div className="bg-white border-2 border-dashed border-slate-300 rounded-xl w-full h-[600px] flex flex-col items-center justify-center text-slate-400 p-6 mb-8 shadow-sm stitch-border">
<iconify-icon className="mb-4 text-slate-300" icon="solar:calendar-add-linear" width="48"></iconify-icon>
<p className="text-sm font-medium uppercase tracking-widest text-slate-400">
                Booking Embed Will Be Inserted Here
              </p>
<p className="text-xs mt-2 text-slate-400">
                Compatible with Calendly, Acuity, Square, etc.
              </p>
</div>
<div className="text-sm text-slate-500">
              Having trouble booking online? Call us directly at
              <a className="text-slate-900 font-medium hover:underline" href="tel:7204992341">
                (720) 499-2341
              </a>
              .
            </div>
</div>
</section>
</div>

<div className="page-section fade-in flex-grow bg-white" id="contact">
<section className="py-16 md:py-24 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<h1 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-12 text-center">
              Get In Touch
            </h1>
<div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

<div className="bg-slate-50 border border-slate-200 rounded-lg p-8">
<h2 className="text-xl font-medium tracking-tight text-slate-900 mb-6">
                  Send us a message
                </h2>
<form className="space-y-4" onsubmit="event.preventDefault();">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">
                      Name
                    </label>
<input className="w-full border border-slate-200 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 bg-white" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">
                      Email
                    </label>
<input className="w-full border border-slate-200 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 bg-white" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">
                      Phone
                    </label>
<input className="w-full border border-slate-200 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 bg-white" placeholder="(555) 123-4567" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">
                      Message / Alteration Details
                    </label>
<textarea className="w-full border border-slate-200 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 bg-white resize-none" placeholder="How can we help you?" rows="4"></textarea>
</div>
<button className="w-full bg-slate-900 text-white py-2.5 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm mt-2" type="submit">
                    Send Message
                  </button>
</form>
</div>

<div>
<div className="mb-10">
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-4">
                    Contact Information
                  </h3>
<div className="space-y-4 text-sm text-slate-600">
<div className="flex items-start gap-3">
<iconify-icon className="text-slate-400 mt-0.5" icon="solar:map-point-linear" width="20"></iconify-icon>
<div>
<span className="font-medium text-slate-900 block">
                          99's Tailoring &amp; Alterations
                        </span>
                        1582 S Parker Rd Ste 304
                        <br/>
                        Denver, CO 80231
                      </div>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-slate-400" icon="solar:phone-linear" width="20"></iconify-icon>
<a className="hover:text-slate-900 transition-colors" href="tel:7204992341">
                        (720) 499-2341
                      </a>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-slate-400" icon="solar:letter-linear" width="20"></iconify-icon>
<a className="hover:text-slate-900 transition-colors" href="mailto:contact@99standa.com">
                        contact@99standa.com
                      </a>
</div>
</div>
<div className="flex gap-3 mt-6">
<a className="bg-white text-slate-900 border border-slate-200 px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm" href="tel:7204992341">
                      Call Us
                    </a>
<button className="bg-slate-900 text-white border border-slate-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm" onclick="nav('book')">
                      Book Appt
                    </button>
</div>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-4">
                    Business Hours
                  </h3>
<div className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5 bg-slate-50">
<div className="flex justify-between border-b border-slate-200/60 pb-2">
<span>Monday</span>
<span>9 AM – 6 PM</span>
</div>
<div className="flex justify-between border-b border-slate-200/60 pb-2">
<span>Tuesday</span>
<span>9 AM – 6 PM</span>
</div>
<div className="flex justify-between border-b border-slate-200/60 pb-2">
<span>Wednesday</span>
<span>9 AM – 6 PM</span>
</div>
<div className="flex justify-between border-b border-slate-200/60 pb-2">
<span>Thursday</span>
<span>9 AM – 6 PM</span>
</div>
<div className="flex justify-between border-b border-slate-200/60 pb-2 text-slate-400">
<span className="font-medium">Friday</span>
<span>Closed</span>
</div>
<div className="flex justify-between border-b border-slate-200/60 pb-2">
<span>Saturday</span>
<span>10 AM – 5 PM</span>
</div>
<div className="flex justify-between">
<span>Sunday</span>
<span>10 AM – 4:30 PM</span>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-5xl mx-auto mt-12 h-64 bg-slate-100 rounded-lg border border-slate-200 overflow-hidden flex items-center justify-center relative">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative z-10 flex flex-col items-center text-slate-500">
<iconify-icon className="mb-2" icon="solar:map-linear" width="32"></iconify-icon>
<span className="text-sm font-medium">
                  Interactive Map Location
                </span>
<span className="text-xs mt-1">
                  1582 S Parker Rd Ste 304, Denver, CO
                </span>
</div>
</div>
</div>
</section>
</div>
</main>

<div className="w-full h-4 bg-[#9E7954] opacity-90" style={{backgroundImage: 'repeating-linear-gradient(to right, transparent, transparent 20px, #FAF6F0 20px, #FAF6F0 22px, transparent 22px, transparent 40px, rgba(250,246,240,0.5) 40px, rgba(250,246,240,0.5) 42px)'}}></div>
<footer className="bg-white border-t border-slate-200 py-12 mt-auto">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<span className="font-semibold text-lg tracking-tighter text-slate-900 uppercase block mb-4">
            99's Tailoring
          </span>
<p className="text-sm text-slate-500 max-w-sm leading-relaxed mb-6">
            Expert tailoring and alterations in Denver, CO. Nearly 20 years of
            professional experience providing precise, honest, and high-quality
            craftsmanship.
          </p>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4">Quick Links</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li>
<a className="hover:text-slate-900 transition-colors" href="#" onclick="nav('home')">
                Home
              </a>
</li>
<li>
<a className="hover:text-slate-900 transition-colors" href="#" onclick="nav('services')">
                Services &amp; Pricing
              </a>
</li>
<li>
<a className="hover:text-slate-900 transition-colors" href="#" onclick="nav('about')">
                About Us
              </a>
</li>
<li>
<a className="hover:text-slate-900 transition-colors" href="#" onclick="nav('book')">
                Book Appointment
              </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4">Contact</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li>
              1582 S Parker Rd Ste 304
              <br/>
              Denver, CO 80231
            </li>
<li>
<a className="hover:text-slate-900 transition-colors" href="tel:7204992341">
                (720) 499-2341
              </a>
</li>
<li>
<a className="hover:text-slate-900 transition-colors" href="mailto:contact@99standa.com">
                contact@99standa.com
              </a>
</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-100 text-xs text-slate-400 flex flex-col md:flex-row justify-between items-center gap-4">
<p>© 2023 99's Tailoring &amp; Alterations. All rights reserved.</p>
<div className="flex gap-4">
<span className="hover:text-slate-600 cursor-pointer transition-colors">
            Privacy Policy
          </span>
<span className="hover:text-slate-600 cursor-pointer transition-colors">
            Terms of Service
          </span>
</div>
</div>
</footer>



    </>
  );
}
