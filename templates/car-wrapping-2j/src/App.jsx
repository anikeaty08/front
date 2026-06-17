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



    class GlobalNavigation extends HTMLElement {
      connectedCallback() {
        // Clone the template into this element
        const template = document.getElementById('global-navigation-template');
        if (template && !this.hasChildNodes()) {
          this.appendChild(template.content.cloneNode(true));
        }

        // Encapsulate specific component logic
        const mainNav = this.querySelector('#main-nav');
        const navInner = mainNav ? mainNav.querySelector('div') : null;
        const navLogo = mainNav ? mainNav.querySelector('img') : null;
        const navLinks = mainNav ? mainNav.querySelectorAll('.js-nav-link') : [];

        // Scroll listener for the unified sticky header behaviour
        this.onScroll = () => {
          const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
          if (mainNav) {
            if (winScroll > 50) {
              mainNav.classList.remove('backdrop-blur-xl', 'bg-black/40');
              mainNav.classList.add('backdrop-blur-2xl', 'bg-black/80');
              if (navInner) {
                navInner.classList.remove('h-14', 'md:h-16');
                navInner.classList.add('h-12', 'md:h-14');
              }
              if (navLogo) navLogo.classList.add('scale-90');
              navLinks.forEach(link => {
                link.classList.remove('py-5');
                link.classList.add('py-3');
              });
            } else {
              mainNav.classList.add('backdrop-blur-xl', 'bg-black/40');
              mainNav.classList.remove('backdrop-blur-2xl', 'bg-black/80');
              if (navInner) {
                navInner.classList.add('h-14', 'md:h-16');
                navInner.classList.remove('h-12', 'md:h-14');
              }
              if (navLogo) navLogo.classList.remove('scale-90');
              navLinks.forEach(link => {
                link.classList.add('py-5');
                link.classList.remove('py-3');
              });
            }
          }
        };

        window.addEventListener('scroll', this.onScroll);
        this.onScroll(); // initialize state on load
      }

      disconnectedCallback() {
        window.removeEventListener('scroll', this.onScroll);
      }
    }
    customElements.define('global-navigation', GlobalNavigation);
  


    document.addEventListener('DOMContentLoaded', () => {
      // Intersection Observer for scroll animations
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      document.querySelectorAll('.reveal-on-scroll').forEach(element => {
        observer.observe(element);
      });

      // Scroll Progress Bar logic
      const progressBar = document.getElementById('scroll-progress');
      window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        if(progressBar) {
          progressBar.style.transform = `scaleX(${scrolled / 100})`;
        }
      });

      // Magnetic Cards Effect
      document.querySelectorAll('.magnetic-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const mx = (x - rect.width / 2) / 15;
          const my = (y - rect.height / 2) / 15;
          card.style.setProperty('--mx', `${mx}px`);
          card.style.setProperty('--my', `${my}px`);
        });
        card.addEventListener('mouseleave', () => {
          card.style.setProperty('--mx', '0px');
          card.style.setProperty('--my', '0px');
        });
      });

      // Mouse Spotlight in Hero
      const spotlight = document.getElementById('hero-spotlight');
      const heroSection = document.getElementById('home');
      
      if(spotlight && heroSection) {
        heroSection.addEventListener('mousemove', (e) => {
          spotlight.style.opacity = '1';
          const rect = heroSection.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          spotlight.style.setProperty('--mouse-x', `${x}px`);
          spotlight.style.setProperty('--mouse-y', `${y}px`);
        });

        heroSection.addEventListener('mouseleave', () => {
          spotlight.style.opacity = '0';
        });
      }
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
      
<div className="fixed top-0 left-0 h-[2px] w-full z-[70] bg-gradient-to-r from-[#222222] via-[#bbcf1d] to-[#d4e34a] pointer-events-none" id="scroll-progress"></div>

<div className="fixed inset-0 vertical-streaks pointer-events-none z-0"></div>
<div className="fixed inset-0 crt-scanlines pointer-events-none z-0 opacity-40"></div>
<div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0a0a0a]/90 to-[#0a0a0a] z-0 pointer-events-none"></div>




<template id="global-navigation-template"></template>



<global-navigation className="contents">
<header className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-4 md:px-6 w-full pointer-events-none" id="global-navigation">
<nav className="pointer-events-auto w-full max-w-[1100px] shadow-[0_8px_32px_rgba(0,0,0,0.3)] rounded-full transition-all duration-300 opacity-0" id="main-nav" style={{animation: 'fadeInNav 0.6s ease-out forwards'}}>
<div className="flex w-full px-6 md:px-8 items-center justify-between relative transition-all duration-300">

<div className="hidden md:flex items-center gap-5 lg:gap-8 flex-1">
<a className="js-nav-link relative whitespace-nowrap text-[11px] lg:text-xs font-orbitron font-semibold uppercase tracking-[0.2em] text-white/70 hover:text-[#bbcf1d] transition-colors duration-300 after:absolute after:bottom-4 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-[#bbcf1d] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100" href="/">
              Home
            </a>

<div className="relative group h-full flex items-center">
<a className="js-nav-link relative whitespace-nowrap text-[11px] lg:text-xs font-orbitron font-semibold uppercase tracking-[0.2em] text-white/70 group-hover:text-[#bbcf1d] transition-colors duration-300 after:absolute after:bottom-4 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-[#bbcf1d] after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100" href="/#sluzby">
                Services
              </a>

<div className="absolute left-0 top-full pt-4 w-[750px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out z-50">
<div className="bg-black/60 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_24px_48px_rgba(0,0,0,0.6)] p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 ease-out">
<div className="grid grid-cols-2 gap-4">
<a className="flex items-center gap-4 p-4 rounded-xl border border-transparent hover:border-[#bbcf1d]/30 hover:bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(187,207,29,0.08)] group/card" href="/ochranne-folie">
<div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-[#222222] group-hover/card:border-[#bbcf1d]/50 transition-colors">
<img alt="Ochranné fólie" className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110 filter grayscale group-hover/card:grayscale-0 opacity-80 group-hover/card:opacity-100" src="https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</div>
<div>
<h4 className="font-orbitron font-medium text-sm text-white uppercase tracking-wider mb-1 group-hover/card:text-[#bbcf1d] transition-colors">Paint Protection Film</h4>
<p className="text-xs text-[#a0a0a0] font-light leading-relaxed whitespace-normal">Invisible PPF shield against stone chips and scratches.</p>
</div>
</a>
<a className="flex items-center gap-4 p-4 rounded-xl border border-transparent hover:border-[#bbcf1d]/30 hover:bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(187,207,29,0.08)] group/card" href="/zmena-barvy-vozu">
<div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-[#222222] group-hover/card:border-[#bbcf1d]/50 transition-colors">
<img alt="Změna barvy vozu" className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110 filter grayscale group-hover/card:grayscale-0 opacity-80 group-hover/card:opacity-100" src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</div>
<div>
<h4 className="font-orbitron font-medium text-sm text-white uppercase tracking-wider mb-1 group-hover/card:text-[#bbcf1d] transition-colors">Color Change Wraps</h4>
<p className="text-xs text-[#a0a0a0] font-light leading-relaxed whitespace-normal">Premium full car wraps in matte and glossy finishes.</p>
</div>
</a>
<a className="flex items-center gap-4 p-4 rounded-xl border border-transparent hover:border-[#bbcf1d]/30 hover:bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(187,207,29,0.08)] group/card" href="/tonovani-skel">
<div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-[#222222] group-hover/card:border-[#bbcf1d]/50 transition-colors">
<img alt="Tónování skel" className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110 filter grayscale group-hover/card:grayscale-0 opacity-80 group-hover/card:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<h4 className="font-orbitron font-medium text-sm text-white uppercase tracking-wider mb-1 group-hover/card:text-[#bbcf1d] transition-colors">Window Tinting</h4>
<p className="text-xs text-[#a0a0a0] font-light leading-relaxed whitespace-normal">Certified darkening for privacy and UV protection.</p>
</div>
</a>
<a className="flex items-center gap-4 p-4 rounded-xl border border-transparent hover:border-[#bbcf1d]/30 hover:bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(187,207,29,0.08)] group/card" href="/dechroming">
<div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-[#222222] group-hover/card:border-[#bbcf1d]/50 transition-colors">
<img alt="Dechroming" className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110 filter grayscale group-hover/card:grayscale-0 opacity-80 group-hover/card:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div>
<h4 className="font-orbitron font-medium text-sm text-white uppercase tracking-wider mb-1 group-hover/card:text-[#bbcf1d] transition-colors">Chrome Delete</h4>
<p className="text-xs text-[#a0a0a0] font-light leading-relaxed whitespace-normal">Removal of chrome elements for a sporty "Shadow" look.</p>
</div>
</a>
<a className="flex items-center gap-4 p-4 rounded-xl border border-transparent hover:border-[#bbcf1d]/30 hover:bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(187,207,29,0.08)] group/card" href="/polepy-interieru">
<div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-[#222222] group-hover/card:border-[#bbcf1d]/50 transition-colors">
<img alt="Polepy interiéru" className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110 filter grayscale group-hover/card:grayscale-0 opacity-80 group-hover/card:opacity-100" src="https://images.unsplash.com/photo-1603569283847-aa295f0d016a?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</div>
<div>
<h4 className="font-orbitron font-medium text-sm text-white uppercase tracking-wider mb-1 group-hover/card:text-[#bbcf1d] transition-colors">Interior Wraps</h4>
<p className="text-xs text-[#a0a0a0] font-light leading-relaxed whitespace-normal">Renovation and color change of decorative interior trims.</p>
</div>
</a>
<a className="flex items-center gap-4 p-4 rounded-xl border border-transparent hover:border-[#bbcf1d]/30 hover:bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(187,207,29,0.08)] group/card" href="/polepy-kol">
<div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-[#222222] group-hover/card:border-[#bbcf1d]/50 transition-colors">
<img alt="Polepy kol" className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110 filter grayscale group-hover/card:grayscale-0 opacity-80 group-hover/card:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div>
<h4 className="font-orbitron font-medium text-sm text-white uppercase tracking-wider mb-1 group-hover/card:text-[#bbcf1d] transition-colors">Wheel Wraps</h4>
<p className="text-xs text-[#a0a0a0] font-light leading-relaxed whitespace-normal">Durable wraps and specific protective layers for alloy wheels.</p>
</div>
</a>
</div>
</div>
</div>
</div>
<a className="js-nav-link relative whitespace-nowrap text-[11px] lg:text-xs font-orbitron font-semibold uppercase tracking-[0.2em] text-white/70 hover:text-[#bbcf1d] transition-colors duration-300 after:absolute after:bottom-4 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-[#bbcf1d] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100" href="/galerie">
              Gallery
            </a>
<a className="js-nav-link relative whitespace-nowrap text-[11px] lg:text-xs font-orbitron font-semibold uppercase tracking-[0.2em] text-white/70 hover:text-[#bbcf1d] transition-colors duration-300 after:absolute after:bottom-4 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-[#bbcf1d] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100" href="/o-nas">
              About Us
            </a>
<a className="js-nav-link relative whitespace-nowrap text-[11px] lg:text-xs font-orbitron font-semibold uppercase tracking-[0.2em] text-white/70 hover:text-[#bbcf1d] transition-colors duration-300 after:absolute after:bottom-4 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-[#bbcf1d] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100" href="/kontakt">
              Contact
            </a>
<a className="js-nav-link relative whitespace-nowrap text-[11px] lg:text-xs font-orbitron font-semibold uppercase tracking-[0.2em] text-[#bbcf1d] hover:text-[#d4e34a] transition-colors duration-300 after:absolute after:bottom-4 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-[#d4e34a] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100" href="/blog">
              Blog
            </a>
</div>

<div className="flex items-center gap-4 flex-1 justify-end">
<button className="md:hidden text-white/70 hover:text-[#bbcf1d] transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
<a className="hidden md:inline-flex items-center gap-2 whitespace-nowrap text-xs font-orbitron font-semibold uppercase tracking-[0.2em] bg-[#bbcf1d] text-[#0a0a0a] px-6 py-2.5 rounded-full hover:bg-[#d4e34a] transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(187,207,29,0.15)] hover:shadow-[0_0_30px_rgba(187,207,29,0.3)]" href="/#kontakt">
              Free Quote
            </a>
</div>
</div>
</nav>
</header>
</global-navigation>


<main className="relative z-10 w-full flex flex-col">

<section className="relative w-full h-screen max-h-screen overflow-hidden flex items-center border-b border-[#222222] shrink-0 bg-black" id="home">

<div className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-1000 ease-out mix-blend-screen" id="hero-spotlight" style={{background: 'radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.03), transparent 40%)'}}></div>

<div className="overflow-hidden z-0 bg-black w-full h-full absolute top-0 right-0 bottom-0 left-0">

<video autoplay="" className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 opacity-80" disablepictureinpicture="" loop="" muted="" playsinline="" src="https://res.cloudinary.com/detrjtngk/video/upload/v1773097900/kling_20260310_VIDEO_shot_1_5s__1814_0_1_w1gepg.mp4"></video>

<div className="absolute inset-y-0 left-0 w-full md:w-[60%] h-full z-10 pointer-events-none bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/70 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent z-10 pointer-events-none md:hidden"></div>
</div>

<div className="flex md:px-12 lg:px-24 z-30 pr-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-center justify-start pointer-events-none">
<div className="w-full max-w-2xl pointer-events-auto mt-20 md:mt-0 relative">
<div className="" style={{opacity: '0', animation: 'blurReveal 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards'}}>
<div className="flex items-center gap-4 mb-6">
<span className="w-12 h-[1px] bg-[#bbcf1d]"></span>
<span className="text-xs font-orbitron font-medium tracking-[0.4em] text-[#bbcf1d] uppercase drop-shadow-md">Premium Auto Styling</span>
</div>
<h1 className="font-orbitron font-medium uppercase leading-[1.1] tracking-tight text-4xl md:text-5xl lg:text-6xl drop-shadow-[0_0_40px_rgba(0,0,0,0.8)] flex flex-col gap-4">
<span className="text-white">Wrap Paradise</span>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#bbcf1d] to-[#d4e34a]/80 drop-shadow-lg">Transform your vehicle<br/>into a work of art.</span>
</h1>
</div>
<div className="" style={{opacity: '0', animation: 'blurReveal 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) 0.4s forwards'}}>
<p className="mt-8 text-sm md:text-base text-[#d0d0d0] font-light leading-relaxed max-w-lg border-l border-white/20 pl-6 py-1 drop-shadow-md">
              Professional wrapping and film studio for premium vehicles. Complete color change, PPF paint protection, window tinting — all under one roof in Prague.
            </p>
<div className="mt-12 flex flex-col sm:flex-row items-start gap-6">
<a className="group relative inline-flex items-center gap-3 bg-[#bbcf1d] text-[#0a0a0a] font-orbitron font-medium text-xs uppercase tracking-[0.2em] px-8 py-5 transition-all duration-700 hover:bg-[#d4e34a] hover:shadow-[0_0_40px_rgba(187,207,29,0.5)] overflow-hidden" href="/#kontakt">
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out z-0"></div>
<span className="relative z-10">Get a free quote</span>
<iconify-icon className="relative z-10 transform group-hover:translate-x-1.5 transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1)" height="18" icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="group relative inline-flex items-center gap-3 border border-white/20 bg-[rgba(255,255,255,0.03)] backdrop-blur-sm text-white font-orbitron font-medium text-xs uppercase tracking-[0.2em] px-8 py-5 transition-all duration-700 hover:border-white hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]" href="/#galerie">
<span className="">View gallery</span>
<iconify-icon className="transform group-hover:scale-110 group-hover:text-[#bbcf1d] transition-all duration-700" height="18" icon="solar:gallery-bold-duotone" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
<div className="absolute bottom-20 left-6 md:left-12 lg:left-24 z-40 flex items-center gap-4 opacity-0" style={{animation: 'blurReveal 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) 0.8s forwards'}}>
<span className="font-orbitron text-[10px] tracking-[0.3em] uppercase text-[#a0a0a0]">Scroll</span>
<iconify-icon className="text-[#bbcf1d] animate-bounce" icon="solar:arrow-down-linear" width="16"></iconify-icon>
</div>
<div className="absolute bottom-0 left-0 w-full h-12 bg-[#bbcf1d] flex items-center overflow-hidden z-30 border-t border-[#0a0a0a] opacity-0" style={{animation: 'blurReveal 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) 0.9s forwards'}}>
<div className="whitespace-nowrap flex animate-ticker">
<div className="flex items-center">
<span className="font-orbitron font-semibold uppercase tracking-[0.3em] text-[#0a0a0a] text-sm px-8">CAR WRAPS</span>
<span className="w-1.5 h-1.5 rounded-none bg-[#0a0a0a]"></span>
<span className="font-orbitron font-semibold uppercase tracking-[0.3em] text-[#0a0a0a] text-sm px-8">PAINT PROTECTION</span>
<span className="w-1.5 h-1.5 rounded-none bg-[#0a0a0a]"></span>
<span className="font-orbitron font-semibold uppercase tracking-[0.3em] text-[#0a0a0a] text-sm px-8">WINDOW TINTING</span>
<span className="w-1.5 h-1.5 rounded-none bg-[#0a0a0a]"></span>
<span className="font-orbitron font-semibold uppercase tracking-[0.3em] text-[#0a0a0a] text-sm px-8">PPF FILMS</span>
</div>
</div>
</div>
</section>

<section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 border-b border-[#222222] bg-[#0a0a0a]" id="sluzby">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 reveal-on-scroll">
<div className="">
<div className="flex items-center gap-3 mb-4">
<span className="w-8 h-[1px] bg-[#bbcf1d]"></span>
<span className="text-xs font-orbitron tracking-[0.3em] text-[#bbcf1d] uppercase">What We Do</span>
</div>
<h2 className="font-orbitron font-semibold uppercase tracking-tight text-3xl md:text-5xl">Our Services</h2>
</div>
<p className="text-[#a0a0a0] font-light max-w-md border-l border-[#222222] pl-6 py-1 text-sm">
            We work only with the highest quality materials on the market. We provide your car with an exclusive look and maximum protection.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="group relative bg-[#111111] border border-[#222222] p-8 md:p-12 overflow-hidden transition-colors hover:border-[#bbcf1d]/50 reveal-on-scroll magnetic-card" style={{'--mx': '0px', '--my': '0px'}}>
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="" icon="solar:pallete-2-linear" width="120"></iconify-icon>
</div>
<iconify-icon className="text-[#bbcf1d] mb-8" icon="solar:pallete-2-linear" width="40"></iconify-icon>
<h3 className="font-orbitron font-semibold text-2xl uppercase tracking-tight mb-4 group-hover:text-[#bbcf1d] transition-colors">Color Change</h3>
<p className="text-[#a0a0a0] font-light leading-relaxed mb-8 text-sm">
              Complete vehicle wraps using premium films from 3M, Avery Dennison, and Inozetek. A wide range of matte, glossy, and satin shades.
            </p>
<a className="inline-flex items-center gap-2 text-xs font-orbitron uppercase tracking-[0.2em] text-white group-hover:text-[#bbcf1d] transition-colors" href="/zmena-barvy-vozu">
              More info <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="group relative bg-[#111111] border border-[#222222] p-8 md:p-12 overflow-hidden transition-colors hover:border-[#bbcf1d]/50 reveal-on-scroll magnetic-card" style={{'--reveal-delay': '100ms', '--mx': '0px', '--my': '0px'}}>
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:shield-check-linear" width="120"></iconify-icon>
</div>
<iconify-icon className="text-[#bbcf1d] mb-8" icon="solar:shield-check-linear" width="40"></iconify-icon>
<h3 className="font-orbitron font-semibold text-2xl uppercase tracking-tight mb-4 group-hover:text-[#bbcf1d] transition-colors">Paint Protection (PPF)</h3>
<p className="text-[#a0a0a0] font-light leading-relaxed mb-8 text-sm">
              Transparent polyurethane films for maximum protection against stone chips, scratches, and chemicals. Self-healing paint ability.
            </p>
<a className="inline-flex items-center gap-2 text-xs font-orbitron uppercase tracking-[0.2em] text-white group-hover:text-[#bbcf1d] transition-colors" href="/ochranne-folie">
              More info <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="group relative bg-[#111111] border border-[#222222] p-8 md:p-12 overflow-hidden transition-colors hover:border-[#bbcf1d]/50 reveal-on-scroll magnetic-card" style={{'--mx': '0px', '--my': '0px'}}>
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:eye-scan-linear" width="120"></iconify-icon>
</div>
<iconify-icon className="text-[#bbcf1d] mb-8" icon="solar:eye-scan-linear" width="40"></iconify-icon>
<h3 className="font-orbitron font-semibold text-2xl uppercase tracking-tight mb-4 group-hover:text-[#bbcf1d] transition-colors">Window Tinting</h3>
<p className="text-[#a0a0a0] font-light leading-relaxed mb-8 text-sm">
              Certified window darkening. Improving the car's appearance, increasing privacy, and effective protection against UV rays and heat.
            </p>
<a className="inline-flex items-center gap-2 text-xs font-orbitron uppercase tracking-[0.2em] text-white group-hover:text-[#bbcf1d] transition-colors" href="/tonovani-skel">
              More info <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="group relative bg-[#111111] border border-[#222222] p-8 md:p-12 overflow-hidden transition-colors hover:border-[#bbcf1d]/50 reveal-on-scroll magnetic-card" style={{'--reveal-delay': '100ms'}}>
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:magic-stick-3-linear" width="120"></iconify-icon>
</div>
<iconify-icon className="text-[#bbcf1d] mb-8" icon="solar:magic-stick-3-linear" width="40"></iconify-icon>
<h3 className="font-orbitron font-semibold text-2xl uppercase tracking-tight mb-4 group-hover:text-[#bbcf1d] transition-colors">Chrome Delete</h3>
<p className="text-[#a0a0a0] font-light leading-relaxed mb-8 text-sm">
              Removing chrome elements using special film (so-called Chrome Delete). Give your car a more aggressive and sporty "Shadow" look.
            </p>
<a className="inline-flex items-center gap-2 text-xs font-orbitron uppercase tracking-[0.2em] text-white group-hover:text-[#bbcf1d] transition-colors" href="/dechroming">
              More info <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 border-b border-[#222222] bg-[#050505]" id="ochrana">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal-on-scroll">
<div className="flex items-center gap-3 mb-4">
<span className="w-8 h-[1px] bg-[#bbcf1d]"></span>
<span className="text-xs font-orbitron tracking-[0.3em] text-[#bbcf1d] uppercase">Paint Protection Film</span>
</div>
<h2 className="font-orbitron font-semibold uppercase tracking-tight text-3xl md:text-5xl mb-8">Invisible shield for your car</h2>
<p className="text-[#a0a0a0] font-light leading-relaxed mb-8 text-sm">
              Investing in Paint Protection Film (PPF) is the best step to preserve your car's value. Our polyurethane films provide extreme resistance to mechanical damage, stone chips, and chemicals while maintaining perfect clarity.
            </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<iconify-icon className="text-[#bbcf1d] shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon>
<div>
<h4 className="font-orbitron font-semibold uppercase text-xs mb-1 tracking-wider">Self-healing effect</h4>
<p className="text-xs text-[#a0a0a0]">Minor scratches from brushes or keys disappear on their own when heated by the sun.</p>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[#bbcf1d] shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon>
<div>
<h4 className="font-orbitron font-semibold uppercase text-xs mb-1 tracking-wider">Paint protection (UV &amp; Chemicals)</h4>
<p className="text-xs text-[#a0a0a0]">Prevents color fading from the sun and damage from bird droppings or insects.</p>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[#bbcf1d] shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon>
<div>
<h4 className="font-orbitron font-semibold uppercase text-xs mb-1 tracking-wider">Preserving car value</h4>
<p className="text-xs text-[#a0a0a0]">The original paint remains intact, just like when the car left the showroom.</p>
</div>
</li>
</ul>
</div>
<div className="relative reveal-on-scroll" style={{'--reveal-delay': '200ms'}}>
<div className="absolute inset-0 border border-[#bbcf1d]/30 translate-x-4 translate-y-4 z-0"></div>
<div className="absolute bottom-6 left-6 z-20 bg-[#0a0a0a]/90 backdrop-blur border border-[#222222] px-6 py-4">
<span className="font-orbitron text-xs uppercase tracking-[0.2em] text-[#bbcf1d]">Precise installation</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 border-b border-[#222222] bg-[#0a0a0a]" id="galerie">
<div className="max-w-7xl mx-auto">
<div className="flex items-center gap-3 mb-4 reveal-on-scroll">
<span className="w-8 h-[1px] bg-[#bbcf1d]"></span>
<span className="text-xs font-orbitron tracking-[0.3em] text-[#bbcf1d] uppercase">Portfolio</span>
</div>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 reveal-on-scroll">
<h2 className="font-orbitron font-semibold uppercase tracking-tight text-3xl md:text-5xl">Project Gallery</h2>
<a className="hidden md:inline-flex text-xs font-orbitron uppercase tracking-[0.2em] text-[#a0a0a0] hover:text-[#bbcf1d] transition-colors gap-2 items-center pb-2 border-b border-[#222222] hover:border-[#bbcf1d]" href="/#kontakt">
            Start your project <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="group relative overflow-hidden bg-[#111111] border border-[#222222] aspect-[4/5] reveal-on-scroll">
<img alt="Car wrap gallery" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent opacity-60"></div>
<div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-[#bbcf1d] text-[10px] font-orbitron uppercase tracking-[0.2em] mb-2 block">Matte Black</span>
<h3 className="text-lg font-semibold tracking-tight font-orbitron">Audi R8</h3>
</div>
</div>
<div className="group relative overflow-hidden bg-[#111111] border border-[#222222] aspect-[4/5] reveal-on-scroll" style={{'--reveal-delay': '100ms'}}>
<div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-[#bbcf1d] text-[10px] font-orbitron uppercase tracking-[0.2em] mb-2 block">Satin Khaki</span>
<h3 className="font-orbitron font-semibold text-lg tracking-tight">Porsche 911</h3>
</div>
</div>
<div className="group relative overflow-hidden bg-[#111111] border border-[#222222] aspect-[4/5] reveal-on-scroll" style={{'--reveal-delay': '200ms'}}>
<img alt="Car wrap gallery" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent opacity-60"></div>
<div className="group-hover:translate-y-0 transition-transform duration-500 w-full pt-8 pr-8 pb-8 pl-8 absolute bottom-0 left-0 translate-y-4">
<span className="text-[#bbcf1d] text-[10px] font-orbitron uppercase tracking-[0.2em] mb-2 block">Full PPF Protection</span>
<h3 className="text-lg font-semibold tracking-tight font-orbitron">Ferrari SF90</h3>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 md:px-12 lg:px-24 bg-[#050505] border-[#222222] border-b pt-24 pr-6 pb-24 pl-6 relative" id="onas">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative reveal-on-scroll">
<div className="absolute inset-0 border border-[#222222] -translate-x-4 -translate-y-4 z-0"></div>
</div>
<div className="order-1 lg:order-2 reveal-on-scroll">
<div className="flex items-center gap-3 mb-4">
<span className="w-8 h-[1px] bg-[#bbcf1d]"></span>
<span className="text-xs font-orbitron tracking-[0.3em] text-[#bbcf1d] uppercase">About the Studio</span>
</div>
<h2 className="font-orbitron font-semibold uppercase tracking-tight text-3xl md:text-5xl mb-8">Masters of their craft</h2>
<p className="text-[#a0a0a0] font-light leading-relaxed mb-6 text-sm">
              We are a premium studio based in Prague, focusing exclusively on top-tier car wrapping and the application of protective films. Our goal is not just to change the color, but to provide uncompromising quality of execution that we never back down from.
            </p>
<p className="text-[#a0a0a0] font-light leading-relaxed mb-12 text-sm">
              We work with the latest technologies and are certified installers of leading global brands. We approach every vehicle with maximum respect and attention to detail.
            </p>
<div className="grid grid-cols-2 gap-8 border-t border-[#222222] pt-8">
<div>
<span className="block font-orbitron font-semibold text-4xl text-white mb-2">10<span className="text-[#bbcf1d]">+</span></span>
<span className="text-[10px] font-orbitron tracking-[0.2em] uppercase text-[#a0a0a0]">Years of Experience</span>
</div>
<div>
<span className="block font-orbitron font-semibold text-4xl text-white mb-2">800<span className="text-[#bbcf1d]">+</span></span>
<span className="text-[10px] font-orbitron tracking-[0.2em] uppercase text-[#a0a0a0]">Cars Wrapped</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 border-b border-[#222222] bg-[#0a0a0a]" id="kontakt">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16">
<div className="reveal-on-scroll">
<div className="flex items-center gap-3 mb-4">
<span className="w-8 h-[1px] bg-[#bbcf1d]"></span>
<span className="text-xs font-orbitron tracking-[0.3em] text-[#bbcf1d] uppercase">Contact</span>
</div>
<h2 className="font-orbitron font-semibold uppercase tracking-tight text-3xl md:text-5xl mb-8">Get a quote for your car</h2>
<p className="text-[#a0a0a0] font-light leading-relaxed mb-12 max-w-md text-sm">
              Have a question or interested in a specific service? Fill out the form, and we will get back to you with a preliminary estimate or a free consultation.
            </p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-[#111111] border border-[#222222] flex items-center justify-center shrink-0">
<iconify-icon className="text-[#bbcf1d]" icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-orbitron font-semibold uppercase text-xs mb-1 tracking-wider">Studio Address</h4>
<p className="text-[#a0a0a0] font-light text-sm">Auto Street 123, 190 00 Prague 9<br/>Czech Republic</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-[#111111] border border-[#222222] flex items-center justify-center shrink-0">
<iconify-icon className="text-[#bbcf1d]" icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-orbitron font-semibold uppercase text-xs mb-1 tracking-wider">Phone</h4>
<a className="text-[#a0a0a0] font-light hover:text-[#bbcf1d] transition-colors text-sm" href="tel:+420123456789">+420 123 456 789</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-[#111111] border border-[#222222] flex items-center justify-center shrink-0">
<iconify-icon className="text-[#bbcf1d]" icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-orbitron font-semibold uppercase text-xs mb-1 tracking-wider">Email</h4>
<a className="text-[#a0a0a0] font-light hover:text-[#bbcf1d] transition-colors text-sm" href="mailto:info@wrapparadise.cz">info@wrapparadise.cz</a>
</div>
</div>
</div>
</div>
<div className="reveal-on-scroll" style={{'--reveal-delay': '200ms'}}>
<form className="bg-[#111111] border border-[#222222] p-8 md:p-10 space-y-6">
<h3 className="font-orbitron font-semibold text-2xl uppercase tracking-tight mb-8">Free Quote</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-[10px] font-orbitron uppercase tracking-[0.1em] text-[#a0a0a0] mb-2">Name</label>
<input className="form-input text-sm" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-[10px] font-orbitron uppercase tracking-[0.1em] text-[#a0a0a0] mb-2">Phone</label>
<input className="form-input text-sm" placeholder="+420" required="" type="tel"/>
</div>
</div>
<div>
<label className="block text-[10px] font-orbitron uppercase tracking-[0.1em] text-[#a0a0a0] mb-2">Car make and model</label>
<input className="form-input text-sm" placeholder="E.g., BMW M3 2022" required="" type="text"/>
</div>
<div>
<label className="block text-[10px] font-orbitron uppercase tracking-[0.1em] text-[#a0a0a0] mb-2">Message / Idea</label>
<textarea className="form-input min-h-[120px] resize-y text-sm" placeholder="I would like a full wrap in matte gray or PPF protection for the front..." required=""></textarea>
</div>
<button className="w-full bg-[#bbcf1d] text-[#0a0a0a] font-orbitron font-semibold text-xs uppercase tracking-[0.2em] px-8 py-5 transition-all duration-300 hover:bg-[#d4e34a] hover:shadow-[0_0_30px_rgba(187,207,29,0.3)] flex items-center justify-center gap-3" type="submit">
                Send request
                <iconify-icon icon="solar:plain-2-linear" width="18"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="relative bg-[#050505] border-t border-[#222222] py-12 md:py-16 z-10 w-full">
<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
<div className="flex flex-col md:flex-row justify-between items-center gap-8">
<a className="flex items-center" href="/">
<img alt="Wrap Paradise Logo" className="h-10 opacity-70 hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d56bbe3-7e89-4cfd-be67-fb74326bd871_800w.png"/>
</a>
<div className="flex items-center gap-6">
<a className="w-10 h-10 border border-[#222222] flex items-center justify-center text-[#a0a0a0] hover:text-[#bbcf1d] hover:border-[#bbcf1d] transition-all" href="#">
<iconify-icon icon="mdi:instagram" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 border border-[#222222] flex items-center justify-center text-[#a0a0a0] hover:text-[#bbcf1d] hover:border-[#bbcf1d] transition-all" href="#">
<iconify-icon icon="mdi:facebook" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 border border-[#222222] flex items-center justify-center text-[#a0a0a0] hover:text-[#bbcf1d] hover:border-[#bbcf1d] transition-all" href="#">
<iconify-icon icon="mdi:youtube" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="mt-12 pt-8 border-t border-[#222222] flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[#666666] text-xs font-light">© 2024 Wrap Paradise. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-[#666666] text-xs hover:text-[#bbcf1d] transition-colors" href="#">Privacy Policy</a>
<a className="text-[#666666] text-xs hover:text-[#bbcf1d] transition-colors" href="#">Terms and Conditions</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
