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



      // Navbar scroll effect
      const navbar = document.getElementById('navbar');
      window.addEventListener('scroll', () => {
          if (window.scrollY > 50) {
              navbar.classList.add('bg-[#1C1917]/95', 'backdrop-blur-md', 'shadow-lg');
          } else {
              navbar.classList.remove('bg-[#1C1917]/95', 'backdrop-blur-md', 'shadow-lg');
          }
      });

      // Intersection Observer for scroll animations
      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.15
      };

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('is-visible');
                  observer.unobserve(entry.target); // Only animate once
              }
          });
      }, observerOptions);

      document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
          observer.observe(element);
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
      

<header className="fixed w-full top-0 z-50 transition-all duration-300 py-4 border-b border-transparent" id="navbar">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

<a className="hover:opacity-80 transition-opacity" href="#">
<img alt="307 Hair Co Logo" className="h-12 w-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bbddbd6d-784a-42f3-8222-6263452173a9_800w.png"/>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-stone-200 hover:text-[#C5A065] transition-colors tracking-wide uppercase" href="#about">
            About
          </a>
<a className="text-sm font-medium text-stone-200 hover:text-[#C5A065] transition-colors tracking-wide uppercase" href="#services">
            Services
          </a>
<a className="text-sm font-medium text-stone-200 hover:text-[#C5A065] transition-colors tracking-wide uppercase" href="#gallery">
            Gallery
          </a>
<a className="text-sm font-medium text-stone-200 hover:text-[#C5A065] transition-colors tracking-wide uppercase" href="#contact">
            Contact
          </a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center gap-2 px-6 py-2 bg-[#C5A065] text-white text-sm font-medium tracking-wide hover:bg-[#B08955] transition-all duration-300 shadow-lg" href="#contact" target="_blank">
<span>Book Now</span>
<iconify-icon className="text-lg" icon="solar:calendar-linear"></iconify-icon>
</a>

<button aria-label="Menu" className="md:hidden text-white">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 z-0">

<img alt="Spencer Hair Salon" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 z-10 bg-gradient-to-r from-[#1C1917]/90 via-[#1C1917]/60 to-[#C5A065]/20"></div>

<div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-20">
<div className="max-w-2xl reveal-on-scroll is-visible">
<p className="text-[#C5A065] text-sm md:text-base uppercase tracking-[0.2em] mb-4 font-semibold">
            Laramie's Welcoming Salon for Everyone
          </p>
<h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] mb-6 tracking-tight">
            Your Best Look,
            <br/>
<span className="italic text-[#C5A065]">For Everyone.</span>
</h1>
<p className="text-stone-200 text-base md:text-lg font-light leading-relaxed mb-10 max-w-lg">
            Experience top-tier hair styling in an inclusive, welcoming
            environment. A proud woman-run small business right here in Laramie.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 px-8 py-3 bg-[#C5A065] text-white text-sm tracking-wide font-medium hover:scale-105 transition-transform duration-300" href="#contact">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
              Book Appointment
            </a>
<a className="inline-flex justify-center items-center gap-2 px-8 py-3 border border-white/30 text-white backdrop-blur-sm text-sm tracking-wide font-medium hover:bg-white hover:text-[#1C1917] transition-all duration-300" href="https://instagram.com" target="_blank">
<iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon>
              View Instagram
            </a>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/50">
<iconify-icon className="text-2xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</section>

<section className="py-24 bg-[#FDFBF7] overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative reveal-on-scroll order-2 lg:order-1">
<div className="absolute -top-4 -left-4 w-24 h-24 bg-[#C5A065]/10 z-0"></div>
<div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#1C1917]/5 z-0"></div>
<img alt="Spencer Hair Team" className="relative z-10 w-full h-[500px] object-cover shadow-2xl transition-all duration-700" src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute -bottom-8 left-8 md:right-8 md:left-auto max-w-xs p-6 bg-white shadow-xl z-20 border-l-4 border-[#C5A065]">
<p className="font-serif italic text-stone-800 text-lg">
                "Great hair is for everyone. My chair is a safe, welcoming space
                for all."
              </p>
</div>
</div>

<div className="reveal-on-scroll reveal-delay-200 order-1 lg:order-2">
<h2 className="text-[#C5A065] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Meet Jackie
            </h2>
<h3 className="text-3xl md:text-4xl font-serif text-[#1C1917] mb-6 tracking-tight">
              10+ Years of Expertise
            </h3>
<p className="text-stone-600 font-light leading-relaxed mb-6">
              Welcome to 307HairCo, a proud woman-owned small business in
              Laramie, Wyoming. Our mission is simple: to provide a welcoming,
              inclusive environment where everyone can feel their absolute best.
            </p>
<p className="text-stone-600 font-light leading-relaxed mb-8">
              Owned and operated by Jackie, a top-tier stylist with over a
              decade of comprehensive experience in all things hair-related.
              Whether you need a transformative cut, vibrant color, or a subtle
              refresh, Jackie's passion and expertise shine through in every
              appointment.
            </p>
<div className="flex items-center gap-4">
<div>
<p className="font-serif text-[#1C1917] text-lg">Jackie</p>
<p className="text-xs text-[#C5A065] uppercase tracking-wide">
                  Owner &amp; Lead Stylist, 307HairCo
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1C1917] text-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal-on-scroll">
<span className="text-[#C5A065] text-xs font-semibold tracking-[0.2em] uppercase">
            Our Menu
          </span>
<h2 className="text-3xl md:text-4xl font-serif mt-3 tracking-tight">
            Services for Everyone
          </h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 border border-white/5 bg-white/5 hover:bg-[#C5A065] transition-all duration-500 reveal-on-scroll">
<div className="w-12 h-12 mb-6 text-[#C5A065] group-hover:text-white transition-colors duration-500">
<iconify-icon className="text-5xl" icon="solar:scissors-linear"></iconify-icon>
</div>
<div className="flex justify-between items-end mb-3">
<h3 className="text-xl font-serif group-hover:text-white transition-colors">
                Haircuts &amp; Styling
              </h3>
<span className="text-xs opacity-60 group-hover:text-white">
                Varies
              </span>
</div>
<p className="text-sm font-light text-stone-400 group-hover:text-white/90 leading-relaxed">
              Precision cuts, wash &amp; blow dry, and custom styling tailored
              to your face shape.
            </p>
</div>

<div className="group p-8 border border-white/5 bg-white/5 hover:bg-[#C5A065] transition-all duration-500 reveal-on-scroll reveal-delay-100">
<div className="w-12 h-12 mb-6 text-[#C5A065] group-hover:text-white transition-colors duration-500">
<iconify-icon className="text-5xl" icon="solar:star-shine-linear"></iconify-icon>
</div>
<div className="flex justify-between items-end mb-3">
<h3 className="text-xl font-serif group-hover:text-white transition-colors">
                Color &amp; Highlights
              </h3>
<span className="text-xs opacity-60 group-hover:text-white">
                Varies
              </span>
</div>
<p className="text-sm font-light text-stone-400 group-hover:text-white/90 leading-relaxed">
              Full color, balayage, ombre, and root touch-ups using premium
              products.
            </p>
</div>

<div className="group p-8 border border-white/5 bg-white/5 hover:bg-[#C5A065] transition-all duration-500 reveal-on-scroll reveal-delay-200">
<div className="w-12 h-12 mb-6 text-[#C5A065] group-hover:text-white transition-colors duration-500">
<iconify-icon className="text-5xl" icon="solar:heart-linear"></iconify-icon>
</div>
<div className="flex justify-between items-end mb-3">
<h3 className="text-xl font-serif group-hover:text-white transition-colors">
                Specialty Styling
              </h3>
<span className="text-xs opacity-60 group-hover:text-white">
                Varies
              </span>
</div>
<p className="text-sm font-light text-stone-400 group-hover:text-white/90 leading-relaxed">
              Exquisite bridal hair styling and party looks to make your special
              day unforgettable.
            </p>
</div>

<div className="group p-8 border border-white/5 bg-white/5 hover:bg-[#C5A065] transition-all duration-500 reveal-on-scroll">
<div className="w-12 h-12 mb-6 text-[#C5A065] group-hover:text-white transition-colors duration-500">
<iconify-icon className="text-5xl" icon="solar:cosmetic-linear"></iconify-icon>
</div>
<div className="flex justify-between items-end mb-3">
<h3 className="text-xl font-serif group-hover:text-white transition-colors">
                Texture &amp; Treatments
              </h3>
<span className="text-xs opacity-60 group-hover:text-white">
                Varies
              </span>
</div>
<p className="text-sm font-light text-stone-400 group-hover:text-white/90 leading-relaxed">
              Perms, relaxers, and deep conditioning treatments tailored to your
              hair type.
            </p>
</div>

<div className="group p-8 border border-white/5 bg-white/5 hover:bg-[#C5A065] transition-all duration-500 reveal-on-scroll reveal-delay-100">
<div className="w-12 h-12 mb-6 text-[#C5A065] group-hover:text-white transition-colors duration-500">
<iconify-icon className="text-5xl" icon="solar:layers-linear"></iconify-icon>
</div>
<div className="flex justify-between items-end mb-3">
<h3 className="text-xl font-serif group-hover:text-white transition-colors">
                Extensions &amp; Wigs
              </h3>
<span className="text-xs opacity-60 group-hover:text-white">
                Consultation
              </span>
</div>
<p className="text-sm font-light text-stone-400 group-hover:text-white/90 leading-relaxed">
              Expert installation of weaves, wigs, and tape-ins for volume and
              length.
            </p>
</div>

<div className="group p-8 border border-white/5 bg-white/5 hover:bg-[#C5A065] transition-all duration-500 reveal-on-scroll reveal-delay-200">
<div className="w-12 h-12 mb-6 text-[#C5A065] group-hover:text-white transition-colors duration-500">
<iconify-icon className="text-5xl" icon="solar:user-hand-up-linear"></iconify-icon>
</div>
<div className="flex justify-between items-end mb-3">
<h3 className="text-xl font-serif group-hover:text-white transition-colors">
                Beard &amp; Grooming
              </h3>
<span className="text-xs opacity-60 group-hover:text-white">
                Varies
              </span>
</div>
<p className="text-sm font-light text-stone-400 group-hover:text-white/90 leading-relaxed">
              Beard trims and precision grooming services for all.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FDFBF7]" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal-on-scroll">
<div>
<span className="text-[#C5A065] text-xs font-semibold tracking-[0.2em] uppercase">
              Portfolio
            </span>
<h2 className="text-3xl md:text-4xl font-serif mt-3 text-[#1C1917] tracking-tight">
              Our Recent Work
            </h2>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-[#1C1917] border-b border-[#C5A065] pb-1 hover:text-[#C5A065] transition-colors" href="https://instagram.com" target="_blank">
            Follow on Instagram
            <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="break-inside-avoid relative group overflow-hidden reveal-on-scroll">
<img alt="Hair Styling" className="w-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-sm" src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&amp;w=1978&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#1C1917]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<p className="text-white font-serif text-xl tracking-wide">
                Elegant Styling
              </p>
</div>
</div>

<div className="break-inside-avoid relative group overflow-hidden reveal-on-scroll reveal-delay-100">
<img alt="Braids" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110 rounded-sm" src="https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&amp;w=2002&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#1C1917]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<p className="text-white font-serif text-xl tracking-wide">
                Braids &amp; Twists
              </p>
</div>
</div>

<div className="break-inside-avoid relative group overflow-hidden reveal-on-scroll">
<img alt="Makeup" className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110 rounded-sm" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#1C1917]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<p className="text-white font-serif text-xl tracking-wide">
                Glam Makeup
              </p>
</div>
</div>

<div className="break-inside-avoid relative group overflow-hidden reveal-on-scroll reveal-delay-200">
<img alt="Color" className="w-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-sm" src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#1C1917]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<p className="text-white font-serif text-xl tracking-wide">
                Color Transformations
              </p>
</div>
</div>

<div className="break-inside-avoid relative group overflow-hidden reveal-on-scroll">
<img alt="Salon Interior" className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110 rounded-sm" src="https://images.unsplash.com/photo-1605980776566-0486c3ac7617?q=80&amp;w=2059&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#1C1917]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<p className="text-white font-serif text-xl tracking-wide">
                Relaxing Ambiance
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-[#FDFBF7] to-[#F5F5F4]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-serif text-[#1C1917] tracking-tight">
            Client Love
          </h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 reveal-on-scroll border border-stone-100">
<div className="flex text-[#C5A065] mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-600 font-light italic mb-6">
              "Jackie is amazing! She really listens to what you want and makes
              you feel so welcome. Best salon in Laramie."
            </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-stone-200 rounded-full overflow-hidden">
<img alt="Client" className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/44.jpg"/>
</div>
<div>
<p className="font-medium text-[#1C1917] text-sm">Ama K.</p>
<p className="text-xs text-stone-400">Laramie, WY</p>
</div>
</div>
</div>

<div className="bg-white p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 reveal-on-scroll reveal-delay-100 border border-stone-100">
<div className="flex text-[#C5A065] mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-600 font-light italic mb-6">
              "Such an inclusive and friendly space. I've never felt more
              comfortable in a salon chair."
            </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-stone-200 rounded-full overflow-hidden">
<img alt="Client" className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/12.jpg"/>
</div>
<div>
<p className="font-medium text-[#1C1917] text-sm">Jessica B.</p>
<p className="text-xs text-stone-400">New Client</p>
</div>
</div>
</div>

<div className="bg-white p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 reveal-on-scroll reveal-delay-200 border border-stone-100">
<div className="flex text-[#C5A065] mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-600 font-light italic mb-6">
              "Finding 307HairCo on the second floor was the best discovery!
              Jackie's 10+ years of experience really show."
            </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-stone-200 rounded-full overflow-hidden">
<img alt="Client" className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/68.jpg"/>
</div>
<div>
<p className="font-medium text-[#1C1917] text-sm">Efya D.</p>
<p className="text-xs text-stone-400">Regular Client</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal-on-scroll">
<span className="text-[#C5A065] text-xs font-semibold tracking-[0.2em] uppercase">
            Find Us
          </span>
<h2 className="text-3xl md:text-4xl font-serif mt-3 text-[#1C1917] tracking-tight">
            Contact &amp; Booking
          </h2>
</div>
<div className="grid lg:grid-cols-2 gap-12">

<div className="flex flex-col space-y-8 reveal-on-scroll">
<div className="p-8 bg-[#FDFBF7] border border-stone-100">
<h3 className="text-xl font-serif text-[#1C1917] mb-6">
                Salon Information
              </h3>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="text-[#C5A065] mt-1">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div className="">
<p className="font-medium text-[#1C1917]">Address</p>
<p className="text-stone-500 font-light text-sm">
                      Edgewood Spring Winds (2nd Floor)
                      <br/>
                      1072 N 22nd St
                      <br/>
                      Laramie, WY 82072
                      <br/>
<br/>
<span className="font-medium text-[#C5A065]">Important:</span>
                      Please take the elevator or stairs to the 2nd floor.
                    </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="text-[#C5A065] mt-1">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<p className="font-medium text-[#1C1917]">Phone</p>
<a className="text-stone-500 font-light text-sm hover:text-[#C5A065] block" href="tel:#">
                      [Insert Phone Number]
                    </a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="text-[#C5A065] mt-1">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<p className="font-medium text-[#1C1917]">Email</p>
<a className="text-stone-500 font-light text-sm hover:text-[#C5A065] block" href="mailto:#">
                      [Insert Email Address]
                    </a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="text-[#C5A065] mt-1">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<p className="font-medium text-[#1C1917]">Opening Hours</p>
<p className="text-stone-500 font-light text-sm">
                      Mon - Sat: 9:00 AM - 7:00 PM
                    </p>
<p className="text-stone-500 font-light text-sm">
                      Sun: 12:00 PM - 6:00 PM
                    </p>
</div>
</div>
</div>
<div className="mt-8 flex gap-4">
<a className="flex-1 py-3 bg-[#C5A065] text-white text-sm font-medium text-center hover:brightness-110 transition-all flex items-center justify-center gap-2" href="mailto:[Insert Email]">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
                  Email Us
                </a>
<a className="flex-1 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium text-center hover:brightness-110 transition-all flex items-center justify-center gap-2" href="https://instagram.com">
<iconify-icon icon="solar:camera-linear"></iconify-icon>
                  Instagram
                </a>
</div>
</div>
</div>

<div className="h-[400px] lg:h-auto bg-stone-200 relative w-full border border-stone-200 reveal-on-scroll reveal-delay-200">

<iframe allowfullscreen="" className="absolute inset-0 grayscale contrast-125 opacity-80 hover:grayscale-0 transition-all duration-500" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=1072%20N%2022nd%20St,%20Laramie,%20WY%2082072&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" style={{border: '0'}} width="100%"></iframe>
<div className="absolute bottom-4 left-4 bg-white p-3 shadow-lg max-w-xs hidden sm:block">
<p className="text-xs font-bold text-[#1C1917]">307HairCo</p>
<p className="text-[10px] text-stone-500">
                1072 N 22nd St, Laramie, WY
              </p>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-[#F5F5F4] border-t border-stone-100" id="walkthrough-video">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-[#C5A065] text-xs font-semibold tracking-[0.2em] uppercase">
            Walkthrough
          </span>
<h2 className="text-3xl md:text-4xl font-serif mt-3 text-[#1C1917] tracking-tight">
            Getting to the Salon
          </h2>
<p className="mt-4 text-stone-600 font-light max-w-2xl mx-auto leading-relaxed">
            Watch this quick walkthrough video to see exactly how to navigate
            from the entrance of the Edgewood Spring Winds facility to our salon
            on the second floor.
          </p>
</div>
<div className="max-w-4xl mx-auto">
<div className="relative w-full aspect-video bg-[#1C1917] flex items-center justify-center overflow-hidden border border-stone-200 shadow-xl group">
<div className="relative z-10 text-center px-4 flex flex-col items-center">
<div className="w-16 h-16 bg-[#C5A065] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg cursor-pointer">
<iconify-icon className="text-2xl text-white ml-1" icon="solar:play-bold"></iconify-icon>
</div>
<p className="text-stone-200 font-medium tracking-wide">
                Walkthrough Video
              </p>
<p className="text-stone-400 font-light text-sm mt-2 max-w-sm mx-auto">
                [ Replace this container with your video embed ]
              </p>
</div>
<div className="absolute inset-0 bg-[#1C1917]/60 z-0"></div>
<img alt="Hallway Placeholder" className="absolute inset-0 w-full h-full object-cover z-[-1] opacity-50 grayscale" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<footer className="bg-[#1C1917] text-stone-400 py-16 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

<div className="col-span-1 md:col-span-1">
<a className="block mb-6 hover:opacity-80 transition-opacity" href="#">
<img alt="307 Hair Co Logo" className="h-16 w-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bbddbd6d-784a-42f3-8222-6263452173a9_800w.png"/>
</a>
<p className="text-sm font-light leading-relaxed mb-6">
              A welcoming, inclusive salon for everyone in Laramie, WY. Proudly
              woman-owned.
            </p>
</div>

<div>
<h4 className="text-white font-medium uppercase text-xs tracking-widest mb-6">
              Menu
            </h4>
<ul className="space-y-3 text-sm font-light">
<li>
<a className="hover:text-[#C5A065] transition-colors" href="#about">
                  About Us
                </a>
</li>
<li>
<a className="hover:text-[#C5A065] transition-colors" href="#services">
                  Services
                </a>
</li>
<li>
<a className="hover:text-[#C5A065] transition-colors" href="#gallery">
                  Gallery
                </a>
</li>
<li>
<a className="hover:text-[#C5A065] transition-colors" href="#contact">
                  Book Now
                </a>
</li>
</ul>
</div>

<div>
<h4 className="text-white font-medium uppercase text-xs tracking-widest mb-6">
              Services
            </h4>
<ul className="space-y-3 text-sm font-light">
<li>
<a className="hover:text-[#C5A065] transition-colors" href="#">
                  Bridal Styling
                </a>
</li>
<li>
<a className="hover:text-[#C5A065] transition-colors" href="#">
                  Wigs &amp; Weaves
                </a>
</li>
<li>
<a className="hover:text-[#C5A065] transition-colors" href="#">
                  Natural Hair Care
                </a>
</li>
<li>
<a className="hover:text-[#C5A065] transition-colors" href="#">
                  Makeup
                </a>
</li>
</ul>
</div>

<div>
<h4 className="text-white font-medium uppercase text-xs tracking-widest mb-6">
              Contact
            </h4>
<ul className="space-y-3 text-sm font-light">
<li className="flex items-center gap-2">
<iconify-icon className="text-[#C5A065]" icon="solar:phone-calling-linear"></iconify-icon>
                [Insert Phone Number]
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-[#C5A065]" icon="solar:map-point-linear"></iconify-icon>
                1072 N 22nd St, Laramie, WY
              </li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-light">
<p className="">
            © 2026 307HairCo. 307hair.com 2026 - Developed, Managed, Maintained
            &amp; Protected by AVLP
          </p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>

<a aria-label="Chat on WhatsApp" className="fixed bottom-6 right-6 z-50 bg-[#C5A065] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group" href="mailto:[Insert Email]" target="_blank">
<iconify-icon className="text-2xl" icon="solar:letter-linear"></iconify-icon>
<span className="absolute right-full mr-4 bg-white text-[#1C1917] px-3 py-1 rounded text-xs font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Email Us
      </span>
</a>



    </>
  );
}
