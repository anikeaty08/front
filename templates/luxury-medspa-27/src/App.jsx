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



(function (a) {
var b = { businessId: '0d78a29e-ce6e-44d4-9ede-b60ed28f542f' };
var c = a.createElement('script');
var d = a.querySelector('script');
c.src = 'https://static.joinboulevard.com/injector.min.js';
c.async = true;
c.onload = function () { blvd.init(b); };
d.parentNode.insertBefore(c, d);
})(document);



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();

        // Mobile Menu Logic - Hidden by default
        const mobileToggle = document.getElementById('mobile-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        mobileToggle.addEventListener('click', () => {
            if (mobileMenu.classList.contains('menu-hidden')) {
                mobileMenu.classList.remove('menu-hidden');
                mobileMenu.classList.add('menu-visible');
                // Change icon to X
                mobileToggle.innerHTML = '<i data-lucide="x" class="w-8 h-8"></i>';
                lucide.createIcons();
            } else {
                mobileMenu.classList.remove('menu-visible');
                mobileMenu.classList.add('menu-hidden');
                // Change icon back to Menu
                mobileToggle.innerHTML = '<i data-lucide="menu" class="w-8 h-8"></i>';
                lucide.createIcons();
            }
        });

        // Close menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('menu-visible');
                mobileMenu.classList.add('menu-hidden');
                mobileToggle.innerHTML = '<i data-lucide="menu" class="w-8 h-8"></i>';
                lucide.createIcons();
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
      

<div className="bg-[#006D77] text-white py-2.5 relative z-50">
<div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] uppercase tracking-wider font-medium">
<span className="flex items-center gap-2">
<i className="w-3 h-3 fill-white text-white" data-lucide="star"></i>
<span className="opacity-90">5.0 Star Rated on Google</span>
</span>
<div className="flex items-center gap-6">
<a className="flex items-center gap-1.5 hover:text-[#b8a593] transition-colors" href="https://maps.google.com/?q=380+Route+17+North,+Upper+Saddle+River,+NJ+07458" target="_blank">
<i className="w-3 h-3" data-lucide="map-pin"></i> Upper Saddle River, NJ
                </a>
<a className="flex items-center gap-1.5 hover:text-[#b8a593] transition-colors" href="tel:+15515009055">
<i className="w-3 h-3" data-lucide="phone"></i> (551) 500-9055
                </a>
</div>
</div>
</div>

<nav className="sticky top-0 z-40 bg-[#F5F5F5]/90 backdrop-blur-md border-b border-stone-200/60 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

<a className="flex items-center gap-3 group z-50 relative" href="#">
<img alt="Atrium Medspa" className="h-12 w-auto object-contain" src="https://atriummedspa.com/wp-content/uploads/2024/10/3-png-transparent-background-cropped.png"/>
</a>

<div className="hidden lg:flex items-center gap-8 text-[13px] font-medium uppercase tracking-wider text-stone-600">
<a className="hover:text-[#006D77] transition-colors" href="#services">Services</a>
<a className="hover:text-[#006D77] transition-colors" href="#team">Team</a>
<a className="hover:text-[#006D77] transition-colors" href="#locations">Locations</a>
<a className="hover:text-[#006D77] transition-colors" href="#new-patients">New Patients</a>
<a className="hover:text-[#006D77] transition-colors" href="#contact">Contact</a>
</div>

<div className="hidden lg:flex items-center gap-4">
<div className="flex flex-col items-end mr-2">
<span className="text-[10px] text-stone-400 uppercase tracking-widest font-bold">Upper Saddle River</span>
<a className="text-[#006D77] font-bold text-sm hover:underline" href="tel:+15515009055">(551) 500-9055</a>
</div>
<button className="bg-[#006D77] text-white px-6 py-3 rounded-full text-[12px] font-bold uppercase tracking-widest hover:bg-[#00555d] transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center gap-2" onclick="blvd.openBookingWidget()">
                    Book Now
                </button>
</div>

<button aria-label="Toggle Menu" className="lg:hidden z-50 text-[#006D77] p-2" id="mobile-toggle">
<i className="w-8 h-8" data-lucide="menu"></i>
</button>
</div>

<div className="fixed inset-0 z-40 bg-[#F5F5F5] menu-hidden flex-col pt-28 px-6 pb-10 overflow-y-auto" id="mobile-menu">
<div className="flex flex-col gap-6 text-xl font-serif text-[#006D77]">
<a className="mobile-link border-b border-stone-200 pb-4" href="#services">Services</a>
<a className="mobile-link border-b border-stone-200 pb-4" href="#team">Our Team</a>
<a className="mobile-link border-b border-stone-200 pb-4" href="#locations">Locations</a>
<a className="mobile-link border-b border-stone-200 pb-4" href="#new-patients">New Patients</a>
<a className="mobile-link border-b border-stone-200 pb-4" href="#contact">Contact</a>
</div>
<div className="mt-8 space-y-4">
<button className="w-full bg-[#006D77] text-white py-4 rounded-full text-sm uppercase tracking-widest font-bold shadow-lg" onclick="blvd.openBookingWidget()">
                    Book Appointment
                </button>
<a className="flex items-center justify-center gap-2 w-full border border-[#006D77] text-[#006D77] py-4 rounded-full text-sm uppercase tracking-widest font-bold" href="tel:+15515009055">
<i className="w-4 h-4" data-lucide="phone"></i> Call Now
                </a>
</div>
</div>
</nav>

<header className="relative min-h-[90vh] flex items-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Atrium Medspa Interior" className="w-full h-full object-cover" src="https://atriummedspa.com/wp-content/uploads/2024/10/relaxation-12-wide-1.png"/>

<div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/60 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-10 pb-20">
<div className="max-w-2xl space-y-8 fade-up">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-[11px] uppercase tracking-[0.2em] font-bold shadow-sm">
<i className="w-3 h-3 text-[#b8a593]" data-lucide="sparkles"></i>
                    Luxury Cosmetic Medicine
                </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1]">
                    A Medspa <br/>
<span className="italic text-[#b8a593]">Unparalleled.</span>
</h1>
<p className="text-lg text-stone-200/90 font-light leading-relaxed max-w-lg border-l-2 border-[#006D77] pl-6 fade-up delay-100">
                    Unwind in a serene environment while our expert staff work with you to enhance your natural beauty. Experience the premier luxury medspa in Upper Saddle River, NJ.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4 fade-up delay-200">
<button className="bg-[#006D77] text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-[#00555d] transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3" onclick="blvd.openBookingWidget()">
                        Book Appointment
                    </button>
<a className="bg-white text-[#006D77] px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-stone-100 transition-colors flex items-center justify-center gap-3" href="tel:+15515009055">
<i className="w-4 h-4" data-lucide="phone"></i>
                        (551) 500-9055
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-[#F5F5F5] py-4 border-t border-stone-200 hidden md:block">
<div className="max-w-7xl mx-auto px-6 flex justify-between text-xs text-stone-500 font-medium uppercase tracking-wider">
<span className="flex items-center gap-2"><i className="w-4 h-4 text-[#006D77]" data-lucide="shield-check"></i> Certified Medical Staff</span>
<span className="flex items-center gap-2"><i className="w-4 h-4 text-[#006D77]" data-lucide="gem"></i> Biologique Recherche Partner</span>
<span className="flex items-center gap-2"><i className="w-4 h-4 text-[#006D77]" data-lucide="star"></i> 5-Star Patient Rated</span>
</div>
</div>
</header>

<section className="py-24 bg-white relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
<span className="text-[#006D77] text-xs font-bold tracking-[0.2em] uppercase">Holistic &amp; Clinical</span>
<h2 className="text-4xl md:text-5xl text-[#333] tracking-tight">Curated Treatments</h2>
<p className="text-stone-600 font-light">Advanced aesthetics meets relaxation.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">

<div className="group relative bg-[#F5F5F5] rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-stone-100">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#006D77] mb-4 group-hover:bg-[#006D77] group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="syringe"></i>
</div>
<h3 className="text-lg font-serif text-[#333]">Injectables</h3>
<p className="text-xs text-stone-500 mt-2 leading-relaxed">Botox, Jeuveau, &amp; Dermal Fillers for natural enhancement.</p>
</div>

<div className="group relative bg-[#F5F5F5] rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-stone-100">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#006D77] mb-4 group-hover:bg-[#006D77] group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="sparkles"></i>
</div>
<h3 className="text-lg font-serif text-[#333]">Facials</h3>
<p className="text-xs text-stone-500 mt-2 leading-relaxed">Biologique Recherche®, Hydrafacial®, &amp; Custom treatments.</p>
</div>

<div className="group relative bg-[#F5F5F5] rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-stone-100">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#006D77] mb-4 group-hover:bg-[#006D77] group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="droplets"></i>
</div>
<h3 className="text-lg font-serif text-[#333]">Headspa</h3>
<p className="text-xs text-stone-500 mt-2 leading-relaxed">Deep scalp cleansing and relaxation therapy.</p>
</div>

<div className="group relative bg-[#F5F5F5] rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-stone-100">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#006D77] mb-4 group-hover:bg-[#006D77] group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="text-lg font-serif text-[#333]">Laser Services</h3>
<p className="text-xs text-stone-500 mt-2 leading-relaxed">Advanced hair removal and skin rejuvenation.</p>
</div>

<div className="group relative bg-[#F5F5F5] rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-stone-100">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#006D77] mb-4 group-hover:bg-[#006D77] group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="pen-tool"></i>
</div>
<h3 className="text-lg font-serif text-[#333]">Microneedling</h3>
<p className="text-xs text-stone-500 mt-2 leading-relaxed">SkinPen technology for texture and scarring.</p>
</div>

<div className="group relative bg-[#F5F5F5] rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-stone-100">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#006D77] mb-4 group-hover:bg-[#006D77] group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="heart-pulse"></i>
</div>
<h3 className="text-lg font-serif text-[#333]">IV Hydration</h3>
<p className="text-xs text-stone-500 mt-2 leading-relaxed">Revitalize from the inside out.</p>
</div>

<div className="group relative bg-[#F5F5F5] rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-stone-100">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#006D77] mb-4 group-hover:bg-[#006D77] group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="smile"></i>
</div>
<h3 className="text-lg font-serif text-[#333]">Massage</h3>
<p className="text-xs text-stone-500 mt-2 leading-relaxed">Therapeutic massage for full body wellness.</p>
</div>

<div className="group relative bg-[#F5F5F5] rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-stone-100">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#006D77] mb-4 group-hover:bg-[#006D77] group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="search"></i>
</div>
<h3 className="text-lg font-serif text-[#333]">Acne Care</h3>
<p className="text-xs text-stone-500 mt-2 leading-relaxed">Specialized convenient care for active acne.</p>
</div>
</div>
<div className="mt-12 text-center">
<button className="inline-flex items-center gap-2 border-b border-[#006D77] pb-1 text-[#006D77] uppercase font-bold text-xs tracking-widest hover:opacity-70 transition-opacity" onclick="blvd.openBookingWidget()">
                    View Full Menu &amp; Pricing <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>

<section className="py-24 bg-[#E0D7C7]/20" id="team">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<span className="text-[#006D77] text-xs font-bold tracking-widest uppercase">The Experts</span>
<h2 className="text-4xl font-serif text-[#333] mt-2">Meet Your Team</h2>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 text-center">
<div className="w-24 h-24 mx-auto bg-stone-200 rounded-full mb-4 flex items-center justify-center overflow-hidden">
<span className="text-2xl font-serif text-stone-400">N</span>
</div>
<h3 className="text-xl font-serif text-[#333]">Nicole</h3>
<p className="text-xs uppercase tracking-wider text-[#006D77] font-bold mt-1">Certified Physician Assistant</p>
<p className="text-sm text-stone-500 mt-4">Expert injector specializing in natural enhancement and facial balancing.</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 text-center">
<div className="w-24 h-24 mx-auto bg-stone-200 rounded-full mb-4 flex items-center justify-center overflow-hidden">
<span className="text-2xl font-serif text-stone-400">K</span>
</div>
<h3 className="text-xl font-serif text-[#333]">Kristin</h3>
<p className="text-xs uppercase tracking-wider text-[#006D77] font-bold mt-1">Esthetician</p>
<p className="text-sm text-stone-500 mt-4">Specializing in Hydrafacial technology and advanced skin rejuvenation.</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 text-center">
<div className="w-24 h-24 mx-auto bg-stone-200 rounded-full mb-4 flex items-center justify-center overflow-hidden">
<span className="text-2xl font-serif text-stone-400">F</span>
</div>
<h3 className="text-xl font-serif text-[#333]">Faye</h3>
<p className="text-xs uppercase tracking-wider text-[#006D77] font-bold mt-1">Esthetician</p>
<p className="text-sm text-stone-500 mt-4">Expert in Biologique Recherche protocols and holistic skincare.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="locations">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<span className="text-[#006D77] text-xs font-bold tracking-widest uppercase mb-4 block">Our Location</span>
<h2 className="text-4xl font-serif text-[#333] mb-6">Upper Saddle River</h2>
<div className="space-y-6 text-stone-600">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center shrink-0 text-[#006D77]">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
<div>
<h4 className="font-bold text-[#333] text-sm uppercase tracking-wide mb-1">Address</h4>
<p className="text-sm">380 Route 17 North<br/>Upper Saddle River, NJ 07458</p>
<a className="text-xs text-[#006D77] underline mt-1 block" href="https://maps.google.com/?q=380+Route+17+North,+Upper+Saddle+River,+NJ+07458" target="_blank">Get Directions</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center shrink-0 text-[#006D77]">
<i className="w-5 h-5" data-lucide="clock"></i>
</div>
<div>
<h4 className="font-bold text-[#333] text-sm uppercase tracking-wide mb-1">Hours</h4>
<p className="text-sm">By Appointment Only</p>
<p className="text-xs text-stone-400 mt-1">Please book online or call to schedule.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center shrink-0 text-[#006D77]">
<i className="w-5 h-5" data-lucide="phone"></i>
</div>
<div>
<h4 className="font-bold text-[#333] text-sm uppercase tracking-wide mb-1">Contact</h4>
<a className="text-sm block hover:text-[#006D77]" href="tel:+15515009055">(551) 500-9055</a>
<a className="text-sm block hover:text-[#006D77]" href="mailto:contact@atriummedspa.com">contact@atriummedspa.com</a>
</div>
</div>
</div>
<button className="mt-8 bg-[#006D77] text-white px-8 py-3 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-[#00555d] transition-colors shadow-lg" onclick="blvd.openBookingWidget()">
                        Book at this Location
                    </button>
</div>
<div className="h-[400px] bg-stone-100 rounded-3xl overflow-hidden relative">
<img alt="Atrium Medspa Exterior" className="w-full h-full object-cover" src="https://atriummedspa.com/wp-content/uploads/2025/07/image-22.avif"/>
<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg text-xs font-bold text-[#006D77] shadow-sm">
                        Ample Parking Available
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F5F5F5]" id="new-patients">
<div className="max-w-3xl mx-auto px-6">
<div className="bg-white rounded-[2rem] shadow-xl p-8 md:p-12 border border-stone-100">
<div className="text-center mb-10">
<span className="text-[#006D77] text-xs font-bold tracking-widest uppercase">Start Your Journey</span>
<h2 className="text-3xl font-serif text-[#333] mt-2">Request an Appointment</h2>
<p className="text-stone-500 text-sm mt-3">Fill out the form below and our concierge team will contact you shortly to confirm.</p>
</div>

<form className="space-y-6" onsubmit="event.preventDefault(); alert('Thank you! Your request has been sent. We will contact you shortly.');">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-stone-500">Full Name</label>
<input className="w-full bg-[#F9F9F9] border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#006D77] transition-colors" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-stone-500">Phone Number</label>
<input className="w-full bg-[#F9F9F9] border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#006D77] transition-colors" required="" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-stone-500">Email Address</label>
<input className="w-full bg-[#F9F9F9] border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#006D77] transition-colors" required="" type="email"/>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-stone-500">Preferred Day/Time</label>
<input className="w-full bg-[#F9F9F9] border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#006D77] transition-colors" placeholder="e.g., Weekdays after 5pm" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-stone-500">Service Interest</label>
<select className="w-full bg-[#F9F9F9] border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#006D77] transition-colors text-stone-600">
<option>General Consultation</option>
<option>Injectables (Botox/Filler)</option>
<option>Facial / Skincare</option>
<option>Headspa</option>
<option>Laser Treatment</option>
<option>Massage</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-stone-500">Message / Concerns</label>
<textarea className="w-full bg-[#F9F9F9] border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#006D77] transition-colors" rows="3"></textarea>
</div>
<button className="w-full bg-[#006D77] text-white py-4 rounded-xl text-sm uppercase tracking-widest font-bold hover:bg-[#00555d] transition-colors shadow-lg mt-4" type="submit">
                        Submit Request
                    </button>
<p className="text-[10px] text-center text-stone-400 mt-4">
                        *Note for setup: Connect this form to instant email autoresponder + staff notification email.
                    </p>
</form>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-stone-100">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-serif text-[#333] text-center mb-12">Patient Resources</h2>
<div className="space-y-4">
<details className="group bg-[#F5F5F5] rounded-xl p-5 cursor-pointer">
<summary className="flex items-center justify-between font-bold text-stone-700 list-none">
                        Do you accept insurance?
                        <span className="transition-transform group-open:rotate-180"><i className="w-5 h-5" data-lucide="chevron-down"></i></span>
</summary>
<div className="mt-4 text-sm text-stone-600 leading-relaxed">
                        As a luxury aesthetic medical practice, we operate on a fee-for-service basis. We do not accept insurance for cosmetic procedures. We do offer payment plans.
                    </div>
</details>
<details className="group bg-[#F5F5F5] rounded-xl p-5 cursor-pointer">
<summary className="flex items-center justify-between font-bold text-stone-700 list-none">
                        What is your cancellation policy?
                        <span className="transition-transform group-open:rotate-180"><i className="w-5 h-5" data-lucide="chevron-down"></i></span>
</summary>
<div className="mt-4 text-sm text-stone-600 leading-relaxed">
                        We request 24-48 hours notice for cancellations. Please view our full policy on the Cancellation Policy page link in the footer.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-[#1C1917] text-stone-400 pt-20 pb-10" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
<div className="col-span-1 md:col-span-2 space-y-6">
<a className="flex items-center gap-2 text-white" href="#">
<span className="text-2xl font-serif tracking-wide">Atrium Medspa.</span>
</a>
<p className="text-sm leading-relaxed max-w-sm">
                        Northern NJ's Premiere Luxury Medspa. Enhancing natural beauty through clinical expertise and holistic wellness.
                    </p>
<div className="flex gap-4 pt-2">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#006D77] hover:text-white transition-colors" href="https://www.instagram.com/atriummedspa" target="_blank"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#006D77] hover:text-white transition-colors" href="https://www.facebook.com/atriummedspa" target="_blank"><i className="w-4 h-4" data-lucide="facebook"></i></a>
</div>
</div>
<div>
<h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Contact</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 text-stone-500" data-lucide="map-pin"></i>
<span>380 Route 17 North<br/>Upper Saddle River, NJ 07458</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-stone-500" data-lucide="phone"></i>
<a className="hover:text-white transition-colors" href="tel:+15515009055">(551) 500-9055</a>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-stone-500" data-lucide="mail"></i>
<a className="hover:text-white transition-colors" href="mailto:contact@atriummedspa.com">contact@atriummedspa.com</a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Quick Links</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#team">Meet the Team</a></li>
<li><a className="hover:text-white transition-colors" href="#">Refer a Friend</a></li>
<li><a className="hover:text-white transition-colors" href="#">Payment Plans</a></li>
</ul>
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
<p>© 2026 Atrium Medspa. All Rights Reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Accessibility</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50 md:hidden">
<button className="bg-[#006D77] text-white p-4 rounded-full shadow-2xl hover:scale-105 transition-transform border-2 border-white" onclick="blvd.openBookingWidget()">
<i className="w-6 h-6" data-lucide="calendar-days"></i>
</button>
</div>


    </>
  );
}
