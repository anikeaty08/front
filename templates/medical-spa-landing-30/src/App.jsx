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



        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const overlay = document.getElementById('mobile-menu-overlay');
        const content = document.getElementById('mobile-menu-content');
        const close = document.getElementById('mobile-menu-close');
        const links = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            const isHidden = overlay.classList.contains('opacity-0');
            
            if (isHidden) {
                // Open
                overlay.classList.remove('opacity-0', 'pointer-events-none');
                overlay.classList.add('opacity-100', 'pointer-events-auto');
                content.classList.remove('translate-x-full');
                content.classList.add('translate-x-0');
            } else {
                // Close
                overlay.classList.remove('opacity-100', 'pointer-events-auto');
                overlay.classList.add('opacity-0', 'pointer-events-none');
                content.classList.remove('translate-x-0');
                content.classList.add('translate-x-full');
            }
        }

        btn.addEventListener('click', toggleMenu);
        close.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', (e) => {
            if(e.target === overlay) toggleMenu();
        });
        
        // Close menu when a link is clicked
        links.forEach(link => {
            link.addEventListener('click', toggleMenu);
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
      

<div className="bg-[#31353D] text-white text-[11px] font-medium tracking-wide py-2.5 px-4">
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
<div className="flex items-center gap-4">
<span className="flex items-center gap-1.5 opacity-90 hover:text-[#E3C15E] transition-colors cursor-pointer">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                    Fair Lawn, NJ
                </span>
<a className="flex items-center gap-1.5 opacity-90 hover:text-[#E3C15E] transition-colors" href="tel:2017734558">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                    (201) 773-4558
                </a>
</div>
<span className="hidden sm:inline opacity-70">Board Certified Aesthetic Medicine</span>
</div>
</div>

<header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200/60 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<img alt="Cloud La Med Spa Logo" className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300" src="https://static.wixstatic.com/media/996f32_561fbde6044a45b08ad722c4b3ebe42e~mv2.png"/>
<div className="hidden md:block">
<span className="block text-lg font-bold leading-none tracking-tight text-stone-900">VASA CLINIC</span>
<span className="block text-[10px] uppercase tracking-[0.2em] text-[#E3C15E] font-semibold mt-0.5">Medical Aesthetics</span>
</div>
</a>

<nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium text-stone-600 uppercase tracking-wide">
<a className="hover:text-[#E3C15E] transition-colors" href="#home">Home</a>
<a className="hover:text-[#E3C15E] transition-colors" href="#services">Services</a>
<a className="hover:text-[#E3C15E] transition-colors" href="#team">Our Team</a>
<a className="hover:text-[#E3C15E] transition-colors" href="#locations">Locations</a>
<a className="hover:text-[#E3C15E] transition-colors" href="#new-patients">New Patients</a>
</nav>

<div className="hidden lg:flex items-center gap-3">
<a className="text-stone-900 hover:text-[#E3C15E] transition-colors font-medium text-sm flex items-center gap-2" href="tel:2017734558">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
                    Call
                </a>
<button className="bg-[#E3C15E] text-white hover:bg-[#d4b04c] text-xs font-semibold uppercase tracking-widest px-6 py-3 rounded-full transition-all shadow-sm hover:shadow-md active:scale-95" onclick="document.getElementById('booking').scrollIntoView({behavior: 'smooth'})">
                    Book Appointment
                </button>
</div>

<button className="lg:hidden p-2 text-stone-800 focus:outline-none z-50 relative" id="mobile-menu-btn">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</header>

<div className="fixed inset-0 z-40 bg-stone-900/20 backdrop-blur-sm opacity-0 pointer-events-none mobile-menu-overlay" id="mobile-menu-overlay">
<div className="absolute top-0 right-0 w-[85%] max-w-[320px] h-full bg-white shadow-2xl transform translate-x-full mobile-menu-content flex flex-col" id="mobile-menu-content">
<div className="p-6 flex justify-between items-center border-b border-stone-100">
<span className="text-lg font-bold font-serif text-stone-900">Menu</span>
<button className="p-2 text-stone-500 hover:text-stone-900" id="mobile-menu-close">
<iconify-icon height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<nav className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 text-sm font-medium uppercase tracking-wide text-stone-600">
<a className="mobile-link hover:text-[#E3C15E]" href="#home">Home</a>
<a className="mobile-link hover:text-[#E3C15E]" href="#services">Services</a>
<a className="mobile-link hover:text-[#E3C15E]" href="#team">Our Team</a>
<a className="mobile-link hover:text-[#E3C15E]" href="#locations">Locations</a>
<a className="mobile-link hover:text-[#E3C15E]" href="#new-patients">New Patients</a>
<a className="mobile-link hover:text-[#E3C15E]" href="#contact">Contact</a>
</nav>
<div className="p-6 bg-[#D1DDE8]/20 border-t border-stone-100 space-y-4">
<a className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-stone-200 rounded-lg text-stone-900 font-semibold shadow-sm" href="tel:2017734558">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                    Call Us
                </a>
<button className="w-full py-3 bg-[#E3C15E] text-white rounded-lg font-semibold shadow-md mobile-link" onclick="document.getElementById('booking').scrollIntoView({behavior: 'smooth'})">
                    Request Appointment
                </button>
</div>
</div>
</div>

<section className="relative pt-12 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-[#FDFCFB]" id="home">

<div className="absolute top-0 right-0 w-2/3 h-full bg-[#D1DDE8]/30 skew-x-12 translate-x-1/3 z-0 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 shadow-sm text-[10px] uppercase tracking-wider font-bold text-[#E3C15E]">
<span className="w-1.5 h-1.5 rounded-full bg-[#E3C15E]"></span>
                        Accepting New Patients
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium text-stone-900 leading-[1.1] tracking-tight">VIJAYAWADA <br/> <span className="italic text-stone-500">Ultimate Med Spa</span></h1>
<p className="text-lg text-stone-600 font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
                        Your specialists in non-surgical aesthetic injectables, medicine, health, wellness, and skin care. Achieve true transformation with Dr. Walid Elkhalili.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
<button className="w-full sm:w-auto px-8 py-4 bg-[#2C2C2C] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl active:translate-y-0.5" onclick="document.getElementById('booking').scrollIntoView({behavior: 'smooth'})">
                            Book Treatment
                        </button>
<a className="w-full sm:w-auto px-8 py-4 bg-white border border-stone-200 text-stone-900 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-stone-50 transition-all shadow-sm" href="#services">
                            View Menu
                        </a>
</div>
<div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-stone-400 text-sm">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#E3C15E]" icon="solar:check-circle-linear"></iconify-icon>
<span>Board Certified</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#E3C15E]" icon="solar:shield-check-linear"></iconify-icon>
<span>Safe &amp; Sterile</span>
</div>
</div>
</div>

<div className="relative group">
<div className="absolute inset-0 bg-[#E3C15E] rounded-3xl rotate-3 opacity-20 transition-transform group-hover:rotate-6 duration-500"></div>
<div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10 bg-stone-200">
<img alt="Cloud La Med Spa Patient Results" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" src="https://static.wixstatic.com/media/11062b_ed81470d7bb5405ea00aad717ac843b3~mv2.jpg"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
<div className="absolute bottom-6 left-6 text-white pointer-events-none">
<p className="text-xs uppercase tracking-widest font-bold mb-1">Real Results</p>
<p className="font-serif text-2xl italic">Skin Resurfacing</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-stone-200 bg-white py-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#E3C15E]/20 flex items-center justify-center text-[#E3C15E]">
<iconify-icon icon="solar:medal-ribbon-linear" width="24"></iconify-icon>
</div>
<div className="text-xs font-bold uppercase tracking-wider text-stone-900">
                        Top Doctor <br/><span className="font-normal text-stone-500">Awards</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#E3C15E]/20 flex items-center justify-center text-[#E3C15E]">
<iconify-icon icon="solar:diploma-linear" width="24"></iconify-icon>
</div>
<div className="text-xs font-bold uppercase tracking-wider text-stone-900">
                        Leading Physicians <br/><span className="font-normal text-stone-500">of the World</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#E3C15E]/20 flex items-center justify-center text-[#E3C15E]">
<iconify-icon icon="solar:heart-pulse-linear" width="24"></iconify-icon>
</div>
<div className="text-xs font-bold uppercase tracking-wider text-stone-900">
                        Board of Internal <br/><span className="font-normal text-stone-500">Medicine</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#E3C15E]/20 flex items-center justify-center text-[#E3C15E]">
<iconify-icon icon="solar:stars-minimalistic-linear" width="24"></iconify-icon>
</div>
<div className="text-xs font-bold uppercase tracking-wider text-stone-900">
                        5.0 Stars <br/><span className="font-normal text-stone-500">Google Reviews</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="team">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="relative order-2 md:order-1">
<div className="aspect-[3/4] rounded-2xl overflow-hidden bg-stone-100 shadow-xl">
<img alt="Dr. Walid Elkhalili" className="w-full h-full object-cover" src="https://static.wixstatic.com/media/996f32_4b36ca16ecb440f691ce2769d1052f66~mv2.png"/>
</div>

<div className="absolute -top-4 -left-4 w-full h-full border border-[#D1DDE8] rounded-2xl -z-10"></div>
</div>
<div className="space-y-8 order-1 md:order-2">
<div className="space-y-2">
<span className="text-[#E3C15E] font-bold text-xs uppercase tracking-[0.2em]">Our Medical Director</span>
<h2 className="text-4xl font-medium text-stone-900">Meet Dr. Walid Elkhalili</h2>
</div>
<p className="text-stone-600 leading-relaxed font-light">
                        At Cloud La Med Spa in Fair Lawn, NJ, every treatment blends science and artistry. Led by Dr. Walid Elkhalili, a board-certified internist and expert in aesthetic medicine, our team specializes in creating natural, transformative results.
                    </p>
<p className="text-stone-600 leading-relaxed font-light">
                        We are a supportive space where your aspirations are heard, your needs are respected, and your beautiful results are celebrated.
                    </p>
<div className="grid grid-cols-2 gap-6 pt-4">
<div>
<h4 className="font-bold text-stone-900 text-sm mb-1">Expertise</h4>
<p className="text-xs text-stone-500">Board Certified Aesthetic Medicine</p>
</div>
<div>
<h4 className="font-bold text-stone-900 text-sm mb-1">Philosophy</h4>
<p className="text-xs text-stone-500">Inspire Confidence, One Treatment at a Time</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F8F9FA]" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
<span className="text-[#E3C15E] font-bold text-xs uppercase tracking-[0.2em]">Our Expertise</span>
<h2 className="text-4xl font-medium text-stone-900">Curated Aesthetic Treatments</h2>
<p className="text-stone-500 font-light">Advanced technology meets medical expertise.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col">
<div className="w-12 h-12 bg-[#D1DDE8]/50 rounded-xl flex items-center justify-center text-stone-700 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:syringe-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-stone-900 mb-3">Cosmetic Injectables</h3>
<p className="text-xs text-stone-500 leading-relaxed mb-6 flex-grow">
                        Reduce fine lines and restore volume for smooth, radiant skin.
                    </p>
<ul className="text-xs text-stone-600 space-y-2 mb-6 border-t border-stone-100 pt-4">
<li className="flex items-center gap-2"><iconify-icon className="text-[#E3C15E]" icon="solar:check-circle-linear"></iconify-icon> Botox &amp; Dysport</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#E3C15E]" icon="solar:check-circle-linear"></iconify-icon> Juvederm &amp; Restylane</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#E3C15E]" icon="solar:check-circle-linear"></iconify-icon> Sculptra &amp; Radiesse</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#E3C15E]" icon="solar:check-circle-linear"></iconify-icon> Kybella</li>
</ul>
<a className="text-xs font-bold uppercase tracking-wider text-stone-900 group-hover:text-[#E3C15E] transition-colors flex items-center gap-1" href="#booking">
                        Book Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col">
<div className="w-12 h-12 bg-[#D1DDE8]/50 rounded-xl flex items-center justify-center text-stone-700 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:face-scan-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-stone-900 mb-3">Skin Rejuvenation</h3>
<p className="text-xs text-stone-500 leading-relaxed mb-6 flex-grow">
                        Refresh and restore radiance for glowing, brighter skin.
                    </p>
<ul className="text-xs text-stone-600 space-y-2 mb-6 border-t border-stone-100 pt-4">
<li className="flex items-center gap-2"><iconify-icon className="text-[#E3C15E]" icon="solar:check-circle-linear"></iconify-icon> Custom Facials</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#E3C15E]" icon="solar:check-circle-linear"></iconify-icon> SkinPen Microneedling</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#E3C15E]" icon="solar:check-circle-linear"></iconify-icon> Chemical Peels</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#E3C15E]" icon="solar:check-circle-linear"></iconify-icon> Photofacials (IPL)</li>
</ul>
<a className="text-xs font-bold uppercase tracking-wider text-stone-900 group-hover:text-[#E3C15E] transition-colors flex items-center gap-1" href="#booking">
                        Book Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col">
<div className="w-12 h-12 bg-[#D1DDE8]/50 rounded-xl flex items-center justify-center text-stone-700 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-stone-900 mb-3">Skin Resurfacing</h3>
<p className="text-xs text-stone-500 leading-relaxed mb-6 flex-grow">
                        Tighten and improve texture for healthy, revitalized skin.
                    </p>
<ul className="text-xs text-stone-600 space-y-2 mb-6 border-t border-stone-100 pt-4">
<li className="flex items-center gap-2"><iconify-icon className="text-[#E3C15E]" icon="solar:check-circle-linear"></iconify-icon> Opus Plasma</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#E3C15E]" icon="solar:check-circle-linear"></iconify-icon> CO2 Laser</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#E3C15E]" icon="solar:check-circle-linear"></iconify-icon> RF Microneedling</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#E3C15E]" icon="solar:check-circle-linear"></iconify-icon> Laser Hair Removal</li>
</ul>
<a className="text-xs font-bold uppercase tracking-wider text-stone-900 group-hover:text-[#E3C15E] transition-colors flex items-center gap-1" href="#booking">
                        Book Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col">
<div className="w-12 h-12 bg-[#D1DDE8]/50 rounded-xl flex items-center justify-center text-stone-700 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:body-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-stone-900 mb-3">Body Wellness</h3>
<p className="text-xs text-stone-500 leading-relaxed mb-6 flex-grow">
                        Revitalize and energize for a healthier body inside and out.
                    </p>
<ul className="text-xs text-stone-600 space-y-2 mb-6 border-t border-stone-100 pt-4">
<li className="flex items-center gap-2"><iconify-icon className="text-[#E3C15E]" icon="solar:check-circle-linear"></iconify-icon> IV Drip Infusions</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#E3C15E]" icon="solar:check-circle-linear"></iconify-icon> Hair Restoration</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#E3C15E]" icon="solar:check-circle-linear"></iconify-icon> Wellness Support</li>
</ul>
<a className="text-xs font-bold uppercase tracking-wider text-stone-900 group-hover:text-[#E3C15E] transition-colors flex items-center gap-1" href="#booking">
                        Book Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="booking">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="grid lg:grid-cols-5 gap-12 border border-stone-100 rounded-3xl overflow-hidden shadow-2xl">

<div className="lg:col-span-3 p-8 lg:p-16 bg-white">
<div className="mb-10">
<span className="text-[#E3C15E] font-bold text-xs uppercase tracking-[0.2em] mb-2 block">New Patient?</span>
<h2 className="text-3xl font-medium text-stone-900">Request Appointment</h2>
<p className="text-stone-500 text-sm mt-3">Fill out the form below and our team will contact you to confirm.</p>
</div>
<form className="space-y-6" id="appointment-form" onsubmit="event.preventDefault(); alert('Thank you! Your request has been sent to Cloud La Med Spa.');">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wide text-stone-600" htmlFor="name">Full Name</label>
<input className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-stone-50 focus:bg-white focus:border-[#E3C15E] focus:ring-1 focus:ring-[#E3C15E] outline-none transition-all text-sm" id="name" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wide text-stone-600" htmlFor="phone">Phone</label>
<input className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-stone-50 focus:bg-white focus:border-[#E3C15E] focus:ring-1 focus:ring-[#E3C15E] outline-none transition-all text-sm" id="phone" required="" type="tel"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wide text-stone-600" htmlFor="email">Email</label>
<input className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-stone-50 focus:bg-white focus:border-[#E3C15E] focus:ring-1 focus:ring-[#E3C15E] outline-none transition-all text-sm" id="email" required="" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wide text-stone-600" htmlFor="service">Interested In</label>
<select className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-stone-50 focus:bg-white focus:border-[#E3C15E] focus:ring-1 focus:ring-[#E3C15E] outline-none transition-all text-sm text-stone-600" id="service">
<option>Cosmetic Injectables</option>
<option>Facials &amp; Skincare</option>
<option>Laser Treatments</option>
<option>Body Wellness</option>
<option>General Consultation</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wide text-stone-600" htmlFor="message">Message (Optional)</label>
<textarea className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-stone-50 focus:bg-white focus:border-[#E3C15E] focus:ring-1 focus:ring-[#E3C15E] outline-none transition-all text-sm" id="message" rows="3"></textarea>
</div>
<div className="pt-4">
<button className="w-full py-4 bg-[#2C2C2C] text-white rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl" type="submit">
                                Send Request
                            </button>
<p className="text-[10px] text-center text-stone-400 mt-4">
                                * Note to dev: Connect to autoresponder.
                            </p>
</div>
</form>
</div>

<div className="lg:col-span-2 bg-[#D1DDE8]/40 p-8 lg:p-12 flex flex-col justify-center">
<h3 className="text-xl font-bold text-stone-900 mb-6">Visit Us</h3>

<div className="mb-8" id="locations">
<h4 className="text-sm font-bold uppercase tracking-wide text-[#2C2C2C] mb-3 flex items-center gap-2">
<iconify-icon className="text-[#E3C15E]" icon="solar:map-point-bold"></iconify-icon> Fair Lawn
                        </h4>
<address className="not-italic text-sm text-stone-600 space-y-1 mb-4">
                            6-20 Plaza Road, 2nd Floor<br/>
                            Fair Lawn, NJ 07410
                        </address>
<a className="text-xs font-bold text-stone-900 underline hover:text-[#E3C15E]" href="https://maps.google.com/?q=6-20+Plaza+Road,+Fair+Lawn,+NJ" target="_blank">Get Directions</a>
</div>
<div className="mb-8">
<h4 className="text-sm font-bold uppercase tracking-wide text-[#2C2C2C] mb-3 flex items-center gap-2">
<iconify-icon className="text-[#E3C15E]" icon="solar:clock-circle-bold"></iconify-icon> Hours
                        </h4>
<ul className="text-sm text-stone-600 space-y-1">
<li className="flex justify-between"><span>Mon - Fri:</span> <span>9am - 6pm</span></li>
<li className="flex justify-between"><span>Saturday:</span> <span>By Appt</span></li>
<li className="flex justify-between"><span>Sunday:</span> <span>Closed</span></li>
</ul>
</div>
<div id="new-patients">
<h4 className="text-sm font-bold uppercase tracking-wide text-[#2C2C2C] mb-3">Insurance &amp; Payments</h4>
<p className="text-xs text-stone-600 leading-relaxed">
                            We accept major credit cards and offer payment plans. Please note most cosmetic procedures are not covered by insurance.
                        </p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#2C2C2C] text-stone-300 pt-20 pb-10 text-sm font-light">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="grid md:grid-cols-4 gap-12 pb-12 border-b border-stone-700">
<div className="col-span-1 md:col-span-2">
<h2 className="text-2xl font-serif text-white mb-6">Cloud La Med Spa</h2>
<p className="max-w-xs text-stone-400 mb-6">
                        Blending medical expertise with artistic vision to help you look and feel your best.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-stone-700 hover:bg-[#E3C15E] text-white flex items-center justify-center transition-colors" href="https://www.instagram.com/cloud_la_medspa/" target="_blank">
<iconify-icon icon="mdi:instagram" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-stone-700 hover:bg-[#E3C15E] text-white flex items-center justify-center transition-colors" href="https://www.facebook.com/cloudlamedspa" target="_blank">
<iconify-icon icon="mdi:facebook" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h3 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Quick Links</h3>
<ul className="space-y-3">
<li><a className="hover:text-white transition-colors" href="#services">Cosmetic Injectables</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Skin Rejuvenation</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Body Wellness</a></li>
<li><a className="hover:text-white transition-colors" href="#team">About Us</a></li>
</ul>
</div>
<div>
<h3 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Legal</h3>
<ul className="space-y-3">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Accessibility</a></li>
</ul>
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
<p>© 2026 Cloud La Med Spa. All Rights Reserved.</p>
<p>Designed with care for New Jersey.</p>
</div>
</div>
</footer>



    </>
  );
}
