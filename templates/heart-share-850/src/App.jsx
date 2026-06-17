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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Jost', 'sans-serif'],
mono: ['Jost', 'sans-serif'],
},
colors: {
brand: {
DEFAULT: '#FF5A00',
bg: '#1f125a',
surface: 'rgba(255, 255, 255, 0.03)',
border: 'rgba(255, 255, 255, 0.08)',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'spin-slow': 'spin 8s linear infinite',
'data-stream': 'dataStream 1s linear infinite',
'marquee': 'marquee 25s linear infinite',
},
keyframes: {
dataStream: {
'0%': { transform: 'translateY(-100%)' },
'100%': { transform: 'translateY(100%)' },
},
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener("DOMContentLoaded", () => {
          gsap.registerPlugin(ScrollTrigger);

          // Contact Form Integration
          const contactForm = document.getElementById('footer-contact-form');
          if(contactForm) {
              contactForm.addEventListener('submit', function(e) {
                  e.preventDefault();
                  const submitBtn = this.querySelector('button[type="submit"]');
                  const originalText = submitBtn.innerHTML;
                  submitBtn.innerHTML = 'Sending...';

                  fetch("https://formsubmit.co/ajax/info@theheartshare.com", {
                      method: "POST",
                      headers: {
                          'Content-Type': 'application/json',
                          'Accept': 'application/json'
                      },
                      body: JSON.stringify({
                          name: document.getElementById('form-name').value,
                          email: document.getElementById('form-email').value,
                          message: document.getElementById('form-message').value
                      })
                  })
                  .then(response => response.json())
                  .then(data => {
                      const successMsg = document.getElementById('form-success-msg');
                      successMsg.classList.remove('hidden');
                      this.reset();
                      submitBtn.innerHTML = originalText;
                      setTimeout(() => { successMsg.classList.add('hidden'); }, 6000);
                  })
                  .catch(error => {
                      console.error(error);
                      submitBtn.innerHTML = originalText;
                  });
              });
          }

          // Setup Dynamic Rotating Hero Headlines
          const heroVariations = [
              { l1: "Your customers are satisfied.", l2: "So why are they leaving?" },
              { l1: "They buy your product.", l2: "But do they buy your brand?" },
              { l1: "Satisfaction is an outcome.", l2: "What drives the relationship?" }
          ];
          const pickedHero = heroVariations[Math.floor(Math.random() * heroVariations.length)];
          const heroLine1 = document.getElementById('hero-line-1');
          const heroLine2 = document.getElementById('hero-line-2');

          if (heroLine1 && heroLine2) {
              heroLine1.innerText = pickedHero.l1;
              heroLine2.innerText = pickedHero.l2;
          }

          // Mobile Menu Toggle
          const mobileBtn = document.getElementById('mobile-menu-btn');
          const mobileMenu = document.getElementById('mobile-menu');
          const mobileLinks = document.querySelectorAll('.mobile-link');

          if(mobileBtn && mobileMenu) {
              const toggleMenu = () => {
                  if(mobileMenu.classList.contains('hidden')) {
                      mobileMenu.classList.remove('hidden');
                      mobileMenu.classList.add('flex');
                      setTimeout(() => mobileMenu.classList.remove('opacity-0'), 10);
                      document.body.style.overflow = 'hidden';
                  } else {
                      mobileMenu.classList.add('opacity-0');
                      setTimeout(() => {
                          mobileMenu.classList.add('hidden');
                          mobileMenu.classList.remove('flex');
                          document.body.style.overflow = '';
                      }, 300);
                  }
              };

              mobileBtn.addEventListener('click', toggleMenu);
              mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));
          }

          // Hero Title Reveal Animation
          const tl = gsap.timeline({delay: 0.2});
          tl.to('.t-line', {y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power4.out'})
            .to(['#telemetry-actions'], {opacity: 1, y: 0, duration: 0.8}, "-=0.3")
            .to(['#hero-desc'], {opacity: 1, y: 0, duration: 0.8}, "-=0.6");

          // Refined Parallax (Only Background Moves, Text Static)
          const viewport = document.getElementById('telemetry-viewport');
          const glow = document.getElementById('hero-glow');
          const bgElements = document.getElementById('parallax-bg');

          if(viewport && glow) {
              viewport.addEventListener('mouseenter', () => {
                  glow.style.opacity = '1';
                  if(bgElements) gsap.killTweensOf(bgElements);
              });

              viewport.addEventListener('mouseleave', () => {
                  glow.style.opacity = '0';
                  if(bgElements) gsap.to(bgElements, { x: 0, y: 0, duration: 1, ease: "power2.out" });
              });

              viewport.addEventListener('mousemove', (e) => {
                  const rect = viewport.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;

                  // Position 500x500 glow centrally to cursor
                  glow.style.transform = `translate(${x - 250}px, ${y - 250}px)`;

                  // Deep Parallax applied ONLY to background container
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;

                  if(bgElements) {
                      gsap.to(bgElements, {
                          x: ((x - centerX) / centerX) * -90,
                          y: ((y - centerY) / centerY) * -90,
                          duration: 1,
                          ease: "power2.out"
                      });
                  }
              });
          }

          // General Fade Ups
          const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('visible');
                      observer.unobserve(entry.target);
                  }
              });
          }, observerOptions);
          document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

          // Animated Counters
          const counters = document.querySelectorAll('.counter');
          counters.forEach(counter => {
              const target = parseFloat(counter.getAttribute('data-target'));
              let current = target - 0.5;
              setInterval(() => {
                  const jitter = (Math.random() - 0.5) * 0.8;
                  let nextVal = (target + jitter).toFixed(1);
                  counter.innerHTML = nextVal + '<span class="text-2xl">%</span>';
              }, 800);
          });
      });
    


      function togglePage(page, options = {}) {
          const homeEls = document.querySelectorAll('#hero, #platform-chapter, #capabilities, #limits, #systems, #platform, #methodology-chapter, #how-it-works, #output, #impact-chapter, #impact');
          const compEdge = document.getElementById('page-competitive-edge');
          const shouldScroll = options.scroll !== false;

          if (!compEdge) return;

          if(page === 'competitive-edge') {
              homeEls.forEach(el => el.style.display = 'none');
              compEdge.style.display = 'block';
              document.documentElement.setAttribute('data-page', 'competitive-edge');
              document.title = "Heart Share | Competitive Edge";
              document.querySelectorAll('[data-route="competitive-edge"]').forEach(link => link.setAttribute('aria-current', 'page'));
              if (options.push !== false && window.location.pathname !== '/competitive-edge') {
                  history.pushState({ page: 'competitive-edge' }, '', '/competitive-edge');
              }
              if (shouldScroll) window.scrollTo(0,0);
          } else {
              homeEls.forEach(el => el.style.display = '');
              compEdge.style.display = 'none';
              document.documentElement.removeAttribute('data-page');
              document.title = "Heart Share | Measurable Customer Relationships";
              document.querySelectorAll('[data-route="competitive-edge"]').forEach(link => link.removeAttribute('aria-current'));
              if (options.push !== false && window.location.pathname === '/competitive-edge') {
                  history.pushState({ page: 'home' }, '', '/');
              }
              if (page === 'home' && shouldScroll) window.scrollTo(0,0);
          }

          const mobileMenu = document.getElementById('mobile-menu');
          if(mobileMenu && !mobileMenu.classList.contains('hidden')) {
              document.getElementById('mobile-menu-btn')?.click();
          }
      }

      function routeFromLocation() {
          return window.location.pathname.replace(/\/$/, '') === '/competitive-edge' ? 'competitive-edge' : 'home';
      }

      function applyCurrentRoute() {
          togglePage(routeFromLocation(), { push: false, scroll: false });
      }

      applyCurrentRoute();
      window.addEventListener('popstate', applyCurrentRoute);

      document.addEventListener('click', function(e) {
          const routeLink = e.target.closest('a[data-route="competitive-edge"]');
          if(routeLink) {
              e.preventDefault();
              togglePage('competitive-edge', { push: true, scroll: true });
              return;
          }

          const hashLink = e.target.closest('a[href^="#"]');
          if(!hashLink) return;

          const href = hashLink.getAttribute('href');
          if(href === '#competitive-edge') {
              e.preventDefault();
              togglePage('competitive-edge', { push: true, scroll: true });
              return;
          }

          if(href === '#') {
              e.preventDefault();
              togglePage('home', { push: true, scroll: true });
              return;
          }

          const target = document.querySelector(href);
          if(target) {
              e.preventDefault();
              togglePage('home-scroll', { push: false, scroll: false });
              history.pushState({ page: 'home', section: href }, '', href);
              requestAnimationFrame(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }));
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
      

<div className="fixed top-0 w-full h-screen -z-10" style={{maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 80%, transparent)'}}>
<div className="absolute inset-0 bg-grid opacity-[0.15]"></div>
</div>
<div className="bg-gradient-mesh opacity-80"></div>

<nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 h-20 z-50 border-b border-white/[0.05] bg-[#1f125a]/80 backdrop-blur-xl transition-all duration-300">
<div className="flex items-center">
<a href="#">
<img alt="Heart Share Logo" className="h-8 w-auto" decoding="async" fetchpriority="high" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/80a7f0c4-d817-45dd-8b6f-fe13ccd9f565_320w.png"/>
</a>
</div>
<div className="hidden lg:flex items-center gap-10 text-xs font-mono text-neutral-300 tracking-widest uppercase">
<a className="hover:text-brand transition-colors duration-300" href="#platform-chapter">
          Platform
        </a>
<a className="hover:text-brand transition-colors duration-300" href="#methodology-chapter">
          Methodology
        </a>
<a className="hover:text-brand transition-colors duration-300" href="#impact-chapter">
          Impact
        </a>
<a className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-white hover:text-white hover:border-brand/30 hover:bg-brand/[0.08] transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.03)]" data-route="competitive-edge" href="/competitive-edge">
          Competitive Edge
          <iconify-icon className="text-brand/80" height="1em" icon="solar:arrow-up-right-linear" strokeWidth="1.5" width="1em"></iconify-icon>
</a>
</div>
<div className="hidden md:flex items-center gap-4 group relative">
<button className="px-6 py-2.5 text-xs font-normal text-neutral-900 bg-white border border-white rounded-full hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:shadow-[0_0_20px_rgba(255,90,0,0.4)] flex items-center gap-2">
          Request a private introduction
          <iconify-icon height="1.2em" icon="solar:arrow-right-linear" strokeWidth="1.5" width="1.2em"></iconify-icon>
</button>
</div>

<button className="md:hidden text-white text-3xl focus:outline-none" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</nav>

<div className="fixed inset-0 bg-[#1f125a]/95 backdrop-blur-xl z-40 hidden flex-col items-center justify-center gap-8 text-lg font-mono tracking-widest uppercase opacity-0 transition-opacity duration-300" id="mobile-menu">
<a className="text-neutral-300 hover:text-brand mobile-link" href="#platform-chapter">
        Platform
      </a>
<a className="text-neutral-300 hover:text-brand mobile-link" href="#methodology-chapter">
        Methodology
      </a>
<a className="text-neutral-300 hover:text-brand mobile-link" href="#impact-chapter">
        Impact
      </a>
<a className="text-white hover:text-white mobile-link inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5" data-route="competitive-edge" href="/competitive-edge">
        Competitive Edge
        <iconify-icon className="text-brand/80" height="1em" icon="solar:arrow-up-right-linear" strokeWidth="1.5" width="1em"></iconify-icon>
</a>
<button className="mt-8 px-8 py-4 text-sm font-normal text-neutral-900 bg-white rounded-full">
        Request introduction
      </button>
</div>

<section className="overflow-hidden flex flex-col w-screen min-h-screen relative pt-20" id="hero">
<div className="w-full max-w-[1400px] mx-auto h-full flex flex-col relative border-x border-white/5 bg-[#180e46]" style={{background: 'radial-gradient(ellipse at top, rgba(255,255,255,0.02) 0%, transparent 100%)'}}>
<div className="absolute -top-1.5 -left-1.5 w-3 h-3 text-brand/30 z-50">
<svg fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 4v16m8-8H4"></path>
</svg>
</div>
<div className="absolute -top-1.5 -right-1.5 w-3 h-3 text-brand/30 z-50">
<svg fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 4v16m8-8H4"></path>
</svg>
</div>
<div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 text-brand/30 z-50">
<svg fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 4v16m8-8H4"></path>
</svg>
</div>
<div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 text-brand/30 z-50">
<svg fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 4v16m8-8H4"></path>
</svg>
</div>
<div className="flex-1 flex flex-col p-4 sm:p-6 lg:p-10 h-full">
<div className="relative flex-1 w-full rounded-3xl overflow-hidden flex flex-col items-center justify-center min-h-[600px] pb-24 md:pb-12" id="telemetry-viewport" style={{background: 'linear-gradient(#1c0f54, #1c0f54) padding-box, linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.02) 100%) border-box', border: '1px solid transparent'}}>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 mix-blend-screen" id="parallax-bg">
<div className="w-[60vw] max-w-[600px] aspect-square bg-blue-500/10 rounded-full blur-[120px] opacity-80"></div>
<div className="absolute w-[30vw] max-w-[300px] aspect-square bg-emerald-500/10 rounded-full blur-[80px] opacity-60 translate-y-10"></div>
</div>
<div className="absolute w-[500px] h-[500px] bg-brand/15 rounded-full blur-[120px] pointer-events-none mix-blend-screen transition-opacity duration-300 opacity-0 z-10" id="hero-glow"></div>
<main className="relative z-40 flex-1 flex flex-col items-center justify-center text-center px-6 w-full max-w-5xl mx-auto mt-16">
<h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-white mb-6 leading-[1.05]" style={{textShadow: '0 4px 40px rgba(0,0,0,0.5)'}}>
<div className="overflow-hidden pb-1">
<span className="t-line block translate-y-full opacity-0" id="hero-line-1">
                    Your customers are satisfied.
                  </span>
</div>
<div className="overflow-hidden pb-1">
<span className="t-line block translate-y-full opacity-0 text-neutral-400" id="hero-line-2">
                    So why are they leaving?
                  </span>
</div>
</h1>
<div className="overflow-hidden pb-1 mt-2">
<p className="t-line block translate-y-full opacity-0 text-lg md:text-xl text-neutral-300 font-light max-w-3xl mx-auto leading-relaxed">
                  Customer relationships are complex, layered, and often
                  misunderstood, but they are essential for businesses. The bond
                  between customers and brands is what truly drives your
                  business.
                </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full sm:max-w-md opacity-0 mt-10 relative z-50" id="telemetry-actions">
<button className="w-full px-8 py-4 rounded-xl bg-white text-[#1f125a] font-normal text-sm hover:bg-neutral-200 transition-all active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,90,0,0.3)] flex items-center justify-center gap-2.5">
                  Request a private introduction
                </button>
<button className="w-full px-8 py-4 rounded-xl bg-neutral-900/40 text-white font-light text-sm hover:bg-[#1f125a]/60 transition-all hover:border-brand/30 backdrop-blur-md flex items-center justify-center gap-2.5" style={{background: 'linear-gradient(rgba(31,18,90,0.4), rgba(31,18,90,0.4)) padding-box, linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%) border-box', border: '1px solid transparent'}}>
                  Join waitlist
                </button>
</div>

<div className="opacity-0 translate-y-8 mt-12 max-w-5xl mx-auto p-6 md:p-8 rounded-[1.5rem] bg-[#25166b] border border-brand/20 backdrop-blur-xl relative overflow-hidden shadow-[0_0_50px_rgba(255,90,0,0.08)]" id="hero-desc">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-brand/20 blur-[60px] pointer-events-none"></div>
<p className="text-neutral-200 font-light text-lg md:text-xl leading-relaxed relative z-10">
                  Heart Share is a strategic platform with a proprietary
                  algorithm and agentic AI teams that measures and strengthens
                  the relationship between brands and their customers.
                </p>
</div>
</main>
<div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#1f125a] to-transparent z-20 pointer-events-none"></div>
</div>
</div>
</div>
</section>

<div className="w-full relative z-20 bg-[#1f125a] pt-12 pb-8" id="platform-chapter">
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-full border-t border-white/[0.05]"></div>
</div>
<div className="relative flex justify-center">
<div className="px-8 py-2 rounded-full border border-white/10 bg-[#1f125a] text-xs font-mono uppercase tracking-widest text-neutral-300 shadow-[0_0_15px_rgba(255,255,255,0.03)]">
          Platform
        </div>
</div>
</div>

<section className="bg-[#1f125a] z-10 px-6 pb-24 relative" id="capabilities">
<div className="max-w-7xl mx-auto pt-12">
<div className="flex flex-col items-start text-left fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-xl mb-6 shadow-[0_0_20px_rgba(255,255,255,0.04)]">
<span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse"></span>
<span className="text-xs font-mono uppercase tracking-[0.22em] text-white/90">
              DELIVERABLES
            </span>
</div>
<h2 className="md:text-6xl text-5xl font-normal tracking-tight text-white mb-6 leading-tight">
            What Heart Share Delivers
          </h2>
<p className="text-xl text-neutral-300 font-light mb-16 tracking-tight">
            Understanding relationships. Structuring decisions.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="relative group fade-up h-full" style={{perspective: '1200px'}}>
<div className="w-full h-full relative transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:[transform:rotateX(10deg)_rotateY(-10deg)]" style={{transformStyle: 'preserve-3d'}}>
<div className="relative p-10 rounded-3xl border border-emerald-500/20 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:border-emerald-500/40 group-hover:shadow-[-30px_30px_50px_rgba(0,0,0,0.8)] bg-[#25166b] z-10 h-full flex flex-col group-hover:[transform:translateZ(20px)]">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[50px] pointer-events-none group-hover:bg-emerald-500/20 transition-colors"></div>
<div className="flex justify-between items-start mb-8">
<div className="w-12 h-12 rounded-xl bg-[#1f125a] border border-emerald-500/30 flex items-center justify-center group-hover:scale-110 group-hover:border-emerald-400 transition-all duration-500 shadow-inner">
<iconify-icon className="text-emerald-400" height="1.5em" icon="solar:graph-up-linear" strokeWidth="1.5" width="1.5em"></iconify-icon>
</div>
</div>
<p className="text-lg md:text-xl text-neutral-300 font-light leading-relaxed flex-1 tracking-tight">
                  A clear
                  <span className="font-medium text-white">
                    measure of emotional loyalty
                  </span>
                  , through our
                  <span className="font-medium text-white">
                    Heart Share Index™
                  </span>
                  .
                </p>
</div>
</div>
</div>

<div className="relative group fade-up h-full md:mt-12" style={{perspective: '1200px', transitionDelay: '100ms'}}>
<div className="w-full h-full relative transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:[transform:rotateX(10deg)_rotateY(-10deg)]" style={{transformStyle: 'preserve-3d'}}>
<div className="relative p-10 rounded-3xl border border-blue-500/20 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:border-blue-500/40 group-hover:shadow-[-30px_30px_50px_rgba(0,0,0,0.8)] bg-[#25166b] z-10 h-full flex flex-col group-hover:[transform:translateZ(20px)]">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)]"></div>
<div className="flex justify-between items-start mb-8 relative z-10">
<div className="w-12 h-12 rounded-xl bg-[#1f125a] border border-blue-500/30 flex items-center justify-center group-hover:scale-110 group-hover:border-blue-400 transition-all duration-500 shadow-inner">
<iconify-icon className="text-blue-400" height="1.5em" icon="solar:structure-linear" strokeWidth="1.5" width="1.5em"></iconify-icon>
</div>
</div>
<p className="text-lg md:text-xl text-neutral-300 font-light leading-relaxed flex-1 relative z-10 tracking-tight">
                  A structured
                  <span className="font-medium text-white">
                    assessment of the organization’s ability to act
                  </span>
                  , through our
                  <span className="font-medium text-white">
                    Organizational Readiness
                  </span>
                  .
                </p>
</div>
</div>
</div>

<div className="relative group fade-up h-full md:mt-24" style={{perspective: '1200px', transitionDelay: '200ms'}}>
<div className="w-full h-full relative transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:[transform:rotateX(10deg)_rotateY(-10deg)]" style={{transformStyle: 'preserve-3d'}}>
<div className="relative p-10 rounded-3xl border border-brand/20 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:border-brand/40 group-hover:shadow-[-30px_30px_50px_rgba(0,0,0,0.8)] bg-[#25166b] z-10 h-full flex flex-col group-hover:[transform:translateZ(20px)]">
<div className="absolute inset-0 bg-grid-small opacity-10 pointer-events-none group-hover:opacity-30 transition-opacity"></div>
<div className="flex justify-between items-start mb-8 relative z-10">
<div className="w-12 h-12 rounded-xl bg-[#1f125a] border border-brand/30 flex items-center justify-center group-hover:scale-110 group-hover:border-brand transition-all duration-500 shadow-inner">
<iconify-icon className="text-brand" height="1.5em" icon="solar:document-text-linear" strokeWidth="1.5" width="1.5em"></iconify-icon>
</div>
</div>
<p className="text-lg md:text-xl text-neutral-300 font-light leading-relaxed flex-1 relative z-10 tracking-tight">
                  A
                  <span className="font-medium text-white">
                    comprehensive report
                  </span>
                  translating insights into strategic priorities and suggested
                  action areas.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden flex flex-col min-h-screen select-none text-white bg-[#1f125a] border-white/10 border-t py-24 relative justify-center" id="limits">
<div className="absolute inset-0 bg-grid opacity-[0.08] pointer-events-none"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_42%)] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-20">
<div className="relative flex flex-col items-start text-left fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-xl mb-6 shadow-[0_0_20px_rgba(255,255,255,0.04)]">
<span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse"></span>
<span className="text-xs font-mono uppercase tracking-[0.22em] text-white/90">
              THE LIMITS OF TRADITIONAL METRICS
            </span>
</div>
<h2 className="md:text-6xl text-5xl font-normal tracking-tight text-white mb-6 leading-tight">
            What most companies measure is not enough
          </h2>
<div className="text-lg text-neutral-300 font-light leading-relaxed space-y-4 max-w-xl">
<p>
              Most organizations rely on satisfaction, NPS, and behavioral data.
            </p>
<p>
              These metrics show what customers do, but miss why they stay,
              leave, or advocate.
            </p>
<p>
              Satisfaction captures an outcome.
              <br/>
              Behavior captures a signal.
              <br/>
              But neither captures the relationship.
            </p>
<p className="text-white font-normal border-l-2 border-brand/50 pl-4 mt-6">
              Loyalty is not transactional.
              <br/>
              It is built on emotional connection.
            </p>
</div>
</div>

<div className="relative w-full aspect-square flex items-center justify-center scale-[0.72] md:scale-100 fade-up">
<div className="absolute w-[300px] h-[300px] rounded-full bg-white/[0.04] blur-[60px] opacity-80 pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] border-white/20 border-solid rounded-full pointer-events-none" style={{animation: 'radar-pull-anim 4s cubic-bezier(0.5, 0, 0.8, 1) infinite', animationDelay: '0s'}}></div>
<div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] border-white/20 border-solid rounded-full pointer-events-none" style={{animation: 'radar-pull-anim 4s cubic-bezier(0.5, 0, 0.8, 1) infinite', animationDelay: '1.33s'}}></div>
<div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] border-white/20 border-solid rounded-full pointer-events-none" style={{animation: 'radar-pull-anim 4s cubic-bezier(0.5, 0, 0.8, 1) infinite', animationDelay: '2.66s'}}></div>
<div className="absolute top-1/2 left-1/2 z-30 pointer-events-none" style={{animation: 'core-pulse-anim 2s ease-in-out infinite'}}>
<div className="absolute inset-0 rounded-full bg-brand/30 opacity-20 blur-xl animate-pulse"></div>
<div className="relative w-20 h-20 bg-white text-brand rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(255,255,255,0.9),inset_0_0_20px_rgba(0,0,0,0.2)] before:content-[''] before:absolute before:-inset-4 before:border before:border-dashed before:border-brand/40 before:rounded-full before:animate-[spin_6s_linear_infinite]">
<iconify-icon className="animate-pulse" height="1.875em" icon="solar:heart-linear" width="1.875em"></iconify-icon>
</div>
</div>
<div className="absolute top-1/2 left-1/2 p-3 bg-white/[0.02] border border-white/10 rounded-xl backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col gap-1.5 w-32 z-20" style={{'--tx': '-180px', '--ty': '-180px', '--rot': '15deg', animation: 'gravity-well-anim 4.8s cubic-bezier(0.5, 0, 0.8, 1) infinite both', animationDelay: '0.2s'}}>
<div className="h-1.5 w-1/2 bg-white/20 rounded"></div>
<div className="h-1.5 w-3/4 bg-brand/60 rounded"></div>
<div className="h-1.5 w-2/3 bg-white/20 rounded"></div>
</div>
<div className="absolute top-1/2 left-1/2 p-3 bg-white/[0.02] border border-white/10 rounded-xl backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-2 z-20" style={{'--tx': '180px', '--ty': '180px', '--rot': '-10deg', animation: 'gravity-well-anim 4.8s cubic-bezier(0.5, 0, 0.8, 1) infinite both', animationDelay: '1.4s'}}>
<div className="w-2 h-2 rounded-full bg-brand shadow-[0_0_10px_rgba(255,90,0,0.5)]"></div>
<span className="text-xs font-mono text-white">Metrics</span>
</div>
<div className="absolute top-1/2 left-1/2 p-3 bg-white/[0.02] border border-white/10 rounded-xl backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] w-24 z-20" style={{'--tx': '-80px', '--ty': '220px', '--rot': '20deg', animation: 'gravity-well-anim 4.8s cubic-bezier(0.5, 0, 0.8, 1) infinite both', animationDelay: '3.4s'}}>
<div className="w-full h-1 bg-white/10 rounded-full relative">
<div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-brand rounded-full shadow-[0_0_8px_rgba(255,90,0,0.6)]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#1f125a] z-10 py-32 px-6 relative border-t border-white/10" id="systems">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col items-start text-left mb-16 fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-xl mb-6 shadow-[0_0_20px_rgba(255,255,255,0.04)]">
<span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse"></span>
<span className="text-xs font-mono uppercase tracking-[0.22em] text-white/90">
              THE FRAMEWORK
            </span>
</div>
<h2 className="md:text-6xl text-5xl font-normal tracking-tight text-white mb-6 leading-tight">
            One Platform, Two Proprietary Systems
          </h2>
<p className="text-lg md:text-xl text-neutral-300 font-light leading-relaxed max-w-3xl">
            The Heart Share platform combines two proprietary tools: one to
            measure relationship strength, and one to assess the organization’s
            ability to act on it.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-up items-stretch">

<div className="p-10 rounded-[2rem] bg-[#25166b] border border-emerald-500/30 relative overflow-hidden group hover:border-emerald-500/50 transition-all duration-500 flex flex-col h-full">
<div className="absolute top-0 left-0 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-emerald-500/20 transition-colors"></div>
<div className="relative z-10 flex-1 flex flex-col">
<iconify-icon className="text-emerald-400 mb-6" height="2em" icon="solar:chart-2-linear" strokeWidth="1.5" width="2em"></iconify-icon>
<div className="h-14 md:h-[4.25rem] mb-6 flex items-start">
<img alt="Heart Share Index™ Logo" className="h-7 md:h-8 w-auto object-contain" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/084e8854-07e8-4e31-b014-cb11661ccc25_800w.png"/>
</div>
<p className="text-emerald-400 font-normal text-lg mb-6 leading-relaxed">
                Assessment is the foundation of every strong relationship.
              </p>
<div className="space-y-4 text-base md:text-lg text-neutral-300 font-light leading-relaxed flex-1">
<p>
                  It measures the strength of customer relationships across six
                  emotional dimensions.
                </p>
<p>
                  It captures not only what customers do, but how they feel,
                  perceive, and connect.
                </p>
<p>
                  It provides benchmarking, gap identification, and a clear view
                  of relationship quality over time.
                </p>
</div>
</div>
</div>

<div className="p-10 rounded-[2rem] bg-[#25166b] border border-blue-500/30 relative overflow-hidden group hover:border-blue-500/50 transition-all duration-500 flex flex-col h-full">
<div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-blue-500/20 transition-colors"></div>
<div className="relative z-10 flex-1 flex flex-col">
<iconify-icon className="text-blue-400 mb-6" height="2em" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="2em"></iconify-icon>
<div className="h-14 md:h-[4.25rem] mb-6 flex items-start">
<img alt="Organizational Diagnostic Logo" className="h-14 md:h-[4.25rem] w-auto object-contain" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a0f014f7-de85-4820-b3f5-4d1814a5f7d9_800w.png"/>
</div>
<p className="text-blue-400 font-normal text-lg mb-6 leading-relaxed">
                Insight only matters when the organization can act on it.
              </p>
<div className="space-y-4 text-base md:text-lg text-neutral-300 font-light leading-relaxed flex-1">
<p>
                  It evaluates how effectively a company can translate
                  relationship insight into action.
                </p>
<p>
                  It examines capabilities, alignment, processes, governance,
                  and data readiness.
                </p>
<p>
                  It reveals what enables execution and what silently blocks it.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 overflow-hidden group bg-[#1f125a] border-white/10 border-t pt-32 pb-48 relative" id="platform">
<div className="flex flex-col items-center justify-center fade-up relative z-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-xl mb-12 shadow-[0_0_20px_rgba(255,255,255,0.04)]">
<span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse"></span>
<span className="text-xs font-mono uppercase tracking-[0.22em] text-white/90">
            PLATFORM
          </span>
</div>
</div>
<div className="flex flex-col items-center justify-center fade-up relative w-full">

<div className="absolute top-0 w-full overflow-hidden flex items-center opacity-5 transition-opacity duration-1000 z-0 pointer-events-none select-none">
<div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite]">
<h2 className="text-7xl md:text-[12rem] font-medium uppercase tracking-tighter text-white mx-8 leading-none">
              THE PLATFORM
            </h2>
<h2 className="text-7xl md:text-[12rem] font-medium uppercase tracking-tighter text-transparent mx-8 leading-none" style={{WebkitTextStroke: '2px rgba(255,255,255,0.8)'}}>
              THE PLATFORM
            </h2>
</div>
</div>

<div className="w-full max-w-7xl mx-auto px-6 relative z-10 mt-12 md:mt-24">
<div className="relative w-full flex flex-col items-center">

<div className="w-full md:w-[85%] relative self-start z-10 group/window">
<div className="mb-5 flex items-center gap-4 pl-2 md:pl-0">
<img alt="Heart Share Index™ Logo" className="h-7 md:h-8 w-auto object-contain" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/084e8854-07e8-4e31-b014-cb11661ccc25_800w.png"/>
<div className="h-[1px] flex-1 bg-gradient-to-r from-emerald-500/20 to-transparent"></div>
</div>
<div className="relative rounded-2xl md:rounded-[1.5rem] border border-white/10 bg-[#150a3a] shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-700 hover:shadow-[0_20px_80px_rgba(52,211,153,0.15)] hover:border-emerald-500/30">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 to-transparent opacity-0 group-hover/window:opacity-100 transition-opacity duration-700 pointer-events-none z-20"></div>

<div className="h-12 border-b border-white/5 bg-[#1f125a]/90 backdrop-blur-xl flex items-center px-4 md:px-6">
<div className="flex gap-2 w-20">
<div className="w-3 h-3 rounded-full bg-white/10 group-hover/window:bg-red-500/80 transition-colors"></div>
<div className="w-3 h-3 rounded-full bg-white/10 group-hover/window:bg-yellow-500/80 transition-colors"></div>
<div className="w-3 h-3 rounded-full bg-white/10 group-hover/window:bg-emerald-500/80 transition-colors"></div>
</div>
<div className="flex-1 flex justify-center">
<div className="h-7 w-full max-w-xs rounded-md bg-white/5 border border-white/5 flex items-center justify-center gap-2 px-3 shadow-inner">
<iconify-icon className="text-emerald-500/80 text-xs" icon="solar:lock-password-linear"></iconify-icon>
<span className="text-[11px] font-mono text-neutral-400">
                        app.heartshare.com/index
                      </span>
</div>
</div>
<div className="w-20"></div>
</div>

<div className="relative w-full bg-black/50 aspect-[16/10] md:aspect-[16/9]">
<img alt="Heart Share Index Dashboard UI" className="w-full h-full object-cover object-top opacity-95 group-hover/window:opacity-100 transition-opacity duration-500" decoding="async" fetchpriority="low" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7cdaa8f9-1ee0-4af3-b9dd-3dfec965d8eb_800w.png"/>
</div>
</div>
</div>

<div className="w-full md:w-[75%] relative self-end z-20 mt-16 md:-mt-[20%] group/window2 fade-up">
<div className="mb-5 flex items-center justify-end gap-4 pr-2 md:pr-0 relative">
<div className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-[300px] h-[100px] bg-[#150a3a]/90 blur-[25px] rounded-full z-0 pointer-events-none"></div>
<div className="h-[1px] flex-1 bg-gradient-to-l from-blue-500/20 to-transparent md:block hidden relative z-10"></div>
<img alt="Organizational Diagnostic Logo" className="h-14 md:h-[4.25rem] w-auto object-contain relative z-10 drop-shadow-[0_0_15px_rgba(0,0,0,0.6)]" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a0f014f7-de85-4820-b3f5-4d1814a5f7d9_800w.png"/>
</div>
<div className="relative rounded-2xl md:rounded-[1.5rem] border border-white/10 bg-[#150a3a] shadow-[0_30px_80px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-700 hover:shadow-[0_20px_80px_rgba(59,130,246,0.15)] hover:border-blue-500/30 md:translate-x-4">
<div className="absolute inset-0 bg-gradient-to-tl from-blue-900/10 to-transparent opacity-0 group-hover/window2:opacity-100 transition-opacity duration-700 pointer-events-none z-20"></div>

<div className="h-10 border-b border-white/5 bg-[#1f125a]/95 backdrop-blur-xl flex items-center px-4 md:px-5">
<div className="flex gap-1.5 w-16">
<div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover/window2:bg-red-500/80 transition-colors"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover/window2:bg-yellow-500/80 transition-colors"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover/window2:bg-emerald-500/80 transition-colors"></div>
</div>
<div className="flex-1 flex justify-center">
<div className="h-6 w-full max-w-[220px] rounded-md bg-white/5 border border-white/5 flex items-center justify-center gap-2 px-3 shadow-inner">
<iconify-icon className="text-blue-500/80 text-[10px]" icon="solar:lock-password-linear"></iconify-icon>
<span className="text-[10px] font-mono text-neutral-400">
                        app.heartshare.com/diagnostic
                      </span>
</div>
</div>
<div className="w-16"></div>
</div>

<div className="relative w-full bg-black/50 aspect-[16/10] md:aspect-[16/9]">
<img alt="Organizational Health Index Dashboard Report" className="w-full h-full object-cover object-top opacity-95 group-hover/window2:opacity-100 transition-opacity duration-500 border-t border-white/5" decoding="async" fetchpriority="low" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f02597b3-1b0a-4975-955a-da440b90bb95_800w.png"/>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="w-full relative z-20 bg-[#1f125a] pt-12 pb-8" id="methodology-chapter">
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-full border-t border-white/[0.05]"></div>
</div>
<div className="relative flex justify-center">
<div className="px-8 py-2 rounded-full border border-white/10 bg-[#1f125a] text-xs font-mono uppercase tracking-widest text-neutral-300 shadow-[0_0_15px_rgba(255,255,255,0.03)]">
          Methodology
        </div>
</div>
</div>

<section className="bg-[#1f125a] pb-32 relative" id="how-it-works">
<div className="max-w-7xl mx-auto px-6 pt-12">
<div className="flex flex-col items-start text-left mb-16 fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-xl mb-6 shadow-[0_0_20px_rgba(255,255,255,0.04)]">
<span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse"></span>
<span className="text-xs font-mono uppercase tracking-[0.22em] text-white/90">
              PROCESS
            </span>
</div>
<h2 className="md:text-6xl text-5xl font-normal tracking-tight text-white mb-6 leading-tight">
            How It Works
          </h2>
<p className="text-lg md:text-xl text-neutral-300 font-light max-w-3xl leading-relaxed">
            Every organization already has the data. What’s missing is a way to
            interpret, structure it and integrate it with what consumers
            actually say and think.
          </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 fade-up">

<div className="schema-card-enhanced rounded-[2rem] p-8 flex flex-col relative overflow-hidden group transition-all duration-500 shadow-xl h-auto min-h-[360px]">
<div className="absolute inset-0 bg-grid opacity-[0.04] pointer-events-none z-10"></div>
<span className="text-4xl font-extralight text-white/[0.05] absolute top-6 right-6 tracking-tighter font-mono group-hover:text-brand/10 transition-colors z-10">
              01
            </span>

<div className="h-32 w-full flex items-center justify-center relative z-10 mb-6 scale-90 border-b border-white/[0.05]">
<div className="relative w-24 h-24 flex items-center justify-center">
<div className="w-3 h-3 bg-brand rounded-full relative z-10 shadow-[0_0_15px_rgba(255,90,0,0.8)]"></div>
<div className="absolute w-2 h-2 bg-white/50 rounded-full anim-converge" style={{'--tx': '-50px', '--ty': '-50px', animationDelay: '0s'}}></div>
<div className="absolute w-2 h-2 bg-white/50 rounded-full anim-converge" style={{'--tx': '50px', '--ty': '-50px', animationDelay: '0.6s'}}></div>
<div className="absolute w-2 h-2 bg-white/50 rounded-full anim-converge" style={{'--tx': '-50px', '--ty': '50px', animationDelay: '1.2s'}}></div>
<div className="absolute w-2 h-2 bg-white/50 rounded-full anim-converge" style={{'--tx': '50px', '--ty': '50px', animationDelay: '1.8s'}}></div>
</div>
</div>
<div className="relative z-10 mt-auto">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-brand" height="1.4em" icon="solar:archive-down-minimlistic-linear" width="1.4em"></iconify-icon>
<h3 className="text-2xl font-normal tracking-tight text-white">
                  Capture
                </h3>
</div>
<p className="text-base text-neutral-300 font-light leading-relaxed">
                We integrate data across customer touchpoints, systems, and
                interactions, into a unique set of scores.
              </p>
</div>
</div>

<div className="schema-card-enhanced rounded-[2rem] p-8 flex flex-col relative overflow-hidden group transition-all duration-500 shadow-xl h-auto min-h-[360px]">
<div className="absolute inset-0 bg-grid-small opacity-[0.06] pointer-events-none z-10"></div>
<span className="text-4xl font-extralight text-white/[0.05] absolute top-6 right-6 tracking-tighter font-mono group-hover:text-brand/10 transition-colors z-10">
              02
            </span>

<div className="h-32 w-full flex items-center justify-center relative z-10 mb-6 scale-90 border-b border-white/[0.05]">
<div className="relative w-20 h-20 border border-dashed border-white/20 rounded-lg flex items-center justify-center overflow-hidden">
<div className="absolute inset-x-0 h-[2px] bg-brand shadow-[0_0_15px_rgba(255,90,0,1)] anim-scan"></div>
<div className="w-8 h-8 rounded-full border border-white/20 bg-white/5"></div>
<div className="absolute w-1.5 h-1.5 rounded-full bg-brand animate-pulse"></div>
</div>
</div>
<div className="relative z-10 mt-auto">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-brand" height="1.4em" icon="solar:code-scan-linear" width="1.4em"></iconify-icon>
<h3 className="text-2xl font-normal tracking-tight text-white">
                  Decode
                </h3>
</div>
<p className="text-base text-neutral-300 font-light leading-relaxed">
                AI identifies patterns and the emotional drivers behind
                behavior.
              </p>
</div>
</div>

<div className="schema-card-enhanced rounded-[2rem] p-8 flex flex-col relative overflow-hidden group transition-all duration-500 shadow-xl h-auto min-h-[360px]">
<div className="absolute inset-0 bg-gradient-to-tr from-brand/[0.02] to-transparent pointer-events-none"></div>
<span className="text-4xl font-extralight text-white/[0.05] absolute top-6 right-6 tracking-tighter font-mono group-hover:text-brand/10 transition-colors z-10">
              03
            </span>

<div className="h-32 w-full flex items-center justify-center relative z-10 mb-6 scale-90 border-b border-white/[0.05]">
<div className="relative w-24 h-24 flex items-end justify-between gap-2.5 pb-4">
<div className="w-full bg-white/20 rounded-t-sm anim-bar-pulse" style={{'--h': '40%', animationDelay: '0s'}}></div>
<div className="w-full bg-brand/80 rounded-t-sm anim-bar-pulse shadow-[0_0_15px_rgba(255,90,0,0.6)]" style={{'--h': '90%', animationDelay: '-1s'}}></div>
<div className="w-full bg-white/20 rounded-t-sm anim-bar-pulse" style={{'--h': '60%', animationDelay: '-0.5s'}}></div>
</div>
</div>
<div className="relative z-10 mt-auto">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-brand" height="1.4em" icon="solar:calculator-linear" width="1.4em"></iconify-icon>
<h3 className="text-2xl font-normal tracking-tight text-white">
                  Quantify
                </h3>
</div>
<p className="text-base text-neutral-300 font-light leading-relaxed">
                The Index translates complexity into a clear, structured measure
                of relationship strength.
              </p>
</div>
</div>

<div className="schema-card-enhanced rounded-[2rem] p-8 flex flex-col relative overflow-hidden group transition-all duration-500 shadow-xl h-auto min-h-[360px]">
<div className="absolute inset-0 bg-grid opacity-[0.04] pointer-events-none"></div>
<span className="text-4xl font-extralight text-white/[0.05] absolute top-6 right-6 tracking-tighter font-mono group-hover:text-brand/10 transition-colors z-10">
              04
            </span>

<div className="h-32 w-full flex items-center justify-center relative z-10 mb-6 scale-90 border-b border-white/[0.05]">
<div className="relative w-24 h-24 flex items-center justify-center">
<div className="w-3 h-3 bg-brand rounded-full relative z-10 shadow-[0_0_15px_rgba(255,90,0,0.8)]"></div>
<div className="absolute w-[60px] h-[1px] bg-gradient-to-r from-brand/60 to-transparent anim-radiate" style={{transform: 'rotate(0deg)', transformOrigin: 'left', left: '50%', animationDelay: '0s'}}></div>
<div className="absolute w-[60px] h-[1px] bg-gradient-to-r from-brand/60 to-transparent anim-radiate" style={{transform: 'rotate(-45deg)', transformOrigin: 'left', left: '50%', animationDelay: '0.6s'}}></div>
<div className="absolute w-[60px] h-[1px] bg-gradient-to-r from-brand/60 to-transparent anim-radiate" style={{transform: 'rotate(45deg)', transformOrigin: 'left', left: '50%', animationDelay: '1.2s'}}></div>
</div>
</div>
<div className="relative z-10 mt-auto">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-brand" height="1.4em" icon="solar:lightbulb-linear" width="1.4em"></iconify-icon>
<h3 className="text-2xl font-normal tracking-tight text-white">
                  Activate
                </h3>
</div>
<p className="text-base text-neutral-300 font-light leading-relaxed">
                Insights are translated into priorities, decisions, and concrete
                actions.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 py-32 relative bg-[#1f125a] border-t border-white/10" id="output">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-start text-left mb-16 fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-xl mb-6 shadow-[0_0_20px_rgba(255,255,255,0.04)]">
<span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse"></span>
<span className="text-xs font-mono uppercase tracking-[0.22em] text-white/90">
              OUTPUT
            </span>
</div>
<h2 className="md:text-6xl text-5xl font-normal tracking-tight text-white mb-6 leading-tight">
            The Report
          </h2>
<div className="text-lg text-neutral-300 max-w-2xl font-light leading-relaxed mb-6">
<p>
              All findings are consolidated into a structured report designed
              for decision-making.
            </p>
<p>Not a dashboard.</p>
<p>Not a collection of data.</p>
</div>
<h3 className="text-2xl font-normal text-white tracking-tight mb-2">
            A strategic, clear, shared plan.
          </h3>
<p className="text-base text-neutral-400 font-light">
            The report provides:
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[320px] fade-up">

<div className="col-span-1 md:col-span-2 row-span-2 p-10 rounded-[2rem] bg-[#25166b] border border-white/10 relative overflow-hidden group hover:border-brand/30 transition-all duration-500 shadow-xl">
<div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none group-hover:opacity-[0.15] transition-opacity"></div>
<div className="h-full flex flex-col justify-between relative z-10 chart-placeholder">
<iconify-icon className="text-neutral-500 group-hover:text-brand transition-colors" height="2em" icon="solar:document-add-linear" strokeWidth="1.5" width="2em"></iconify-icon>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[280px] h-36 flex items-end justify-between gap-1.5 opacity-60 mix-blend-screen group-hover:opacity-100 transition-opacity">
<div className="w-full bg-white/10 border border-white/20 relative overflow-hidden anim-bar-pulse rounded-t-sm" style={{'--h': '70%', animationDelay: '0s'}}>
<div className="absolute top-0 inset-x-0 h-[2px] bg-emerald-400"></div>
</div>
<div className="w-full bg-white/5 border border-white/10 relative overflow-hidden anim-bar-pulse rounded-t-sm" style={{'--h': '95%', animationDelay: '-0.5s'}}>
<div className="absolute top-0 inset-x-0 h-[2px] bg-white"></div>
</div>
<div className="w-full bg-brand/20 border border-brand/30 relative overflow-hidden anim-bar-pulse rounded-t-sm shadow-[0_0_20px_rgba(255,90,0,0.2)]" style={{'--h': '80%', animationDelay: '-1s'}}>
<div className="absolute top-0 inset-x-0 h-[2px] bg-brand"></div>
</div>
<div className="w-full bg-white/10 border border-white/20 relative overflow-hidden anim-bar-pulse rounded-t-sm" style={{'--h': '45%', animationDelay: '-1.5s'}}>
<div className="absolute top-0 inset-x-0 h-[2px] bg-white"></div>
</div>
<div className="w-full bg-white/5 border border-white/10 relative overflow-hidden anim-bar-pulse rounded-t-sm" style={{'--h': '85%', animationDelay: '-2s'}}>
<div className="absolute top-0 inset-x-0 h-[2px] bg-blue-400"></div>
</div>
</div>
<div className="mt-auto">
<h3 className="text-3xl md:text-4xl font-normal tracking-tight text-white leading-snug">
                  A complete analysis of the
                  <img alt="Heart Share Index™" className="h-6 md:h-7 inline-block align-middle mx-1.5 -mt-1 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/084e8854-07e8-4e31-b014-cb11661ccc25_800w.png"/>
                  assessment
                </h3>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-1 row-span-2 p-10 rounded-[2rem] bg-[#25166b] border border-white/10 relative overflow-hidden group hover:border-brand/30 transition-all duration-500 flex flex-col justify-between shadow-xl">
<iconify-icon className="text-neutral-500 group-hover:text-brand transition-colors" height="2em" icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="2em"></iconify-icon>
<div className="relative w-full h-40 flex flex-col items-center justify-center my-auto chart-placeholder">
<div className="w-28 h-28 border border-white/20 bg-[#1f125a]/80 backdrop-blur-md absolute layer-float-1 flex items-center justify-center text-sm text-white/50 group-hover:border-blue-500/40 transition-colors rounded-xl" style={{animation: 'floatLayer 4s ease-in-out infinite'}}>
                L3
              </div>
<div className="w-28 h-28 border border-white/10 bg-white/5 absolute layer-float-2 mt-10 flex items-center justify-center text-sm text-white/30 group-hover:border-brand/20 transition-colors rounded-xl" style={{animation: 'floatLayer 4s ease-in-out infinite 0.5s'}}>
                L2
              </div>
<div className="w-28 h-28 border border-white/5 bg-white/[0.02] absolute layer-float-3 mt-20 flex items-center justify-center text-sm text-white/10 rounded-xl" style={{animation: 'floatLayer 4s ease-in-out infinite 1s'}}>
                L1
              </div>
</div>
<h3 className="text-2xl md:text-3xl font-normal tracking-tight text-white mt-auto">
<img alt="Organizational Diagnostic" className="h-12 md:h-[3.5rem] inline-block align-middle mb-2 drop-shadow-[0_0_15px_rgba(96,165,250,0.3)]" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a0f014f7-de85-4820-b3f5-4d1814a5f7d9_800w.png"/>
<br/>
              assessment
            </h3>
</div>

<div className="col-span-1 row-span-1 p-10 rounded-[2rem] bg-[#25166b] border border-white/10 relative overflow-hidden group hover:border-brand/30 transition-all duration-500 flex flex-col justify-between shadow-xl">
<div className="flex justify-between items-start">
<iconify-icon className="text-neutral-500 group-hover:text-brand transition-colors" height="2em" icon="solar:target-linear" strokeWidth="1.5" width="2em"></iconify-icon>
<div className="w-2 h-2 rounded-full bg-brand animate-pulse shadow-[0_0_10px_rgba(255,90,0,0.8)]"></div>
</div>
<div>
<div className="text-5xl font-medium text-white tracking-tighter mb-3 font-mono counter" data-target="73.6">
                73.6
                <span className="text-2xl">%</span>
</div>
<h3 className="text-base font-normal tracking-tight text-neutral-300">
                Key strengths and critical gaps
              </h3>
</div>
</div>

<div className="col-span-1 row-span-1 p-10 rounded-[2rem] bg-[#25166b] border border-white/10 relative overflow-hidden group hover:border-brand/30 transition-all duration-500 flex flex-col justify-between shadow-xl">
<iconify-icon className="text-neutral-500 group-hover:text-brand transition-colors mb-auto" height="2em" icon="solar:route-linear" strokeWidth="1.5" width="2em"></iconify-icon>
<h3 className="text-xl md:text-2xl font-normal tracking-tight text-white leading-snug mt-6">
              Clear, prioritized strategic approach and recommended actions
            </h3>
</div>
</div>

<div className="mt-16 text-left text-neutral-300 font-light text-lg md:text-xl leading-relaxed max-w-4xl fade-up">
<p className="mb-4">
            Workshops and interviews with the company teams build an aligned and
            shared plan, immediately actionable and ready for top management
            presentation.
          </p>
<p>It aligns teams, clarifies priorities, and creates direction.</p>
</div>
</div>
</section>

<div className="w-full relative z-20 bg-[#1f125a] pt-12 pb-8" id="impact-chapter">
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-full border-t border-white/[0.05]"></div>
</div>
<div className="relative flex justify-center">
<div className="px-8 py-2 rounded-full border border-white/10 bg-[#1f125a] text-xs font-mono uppercase tracking-widest text-neutral-300 shadow-[0_0_15px_rgba(255,255,255,0.03)]">
          Impact
        </div>
</div>
</div>

<section className="bg-[#1f125a] pb-32 relative overflow-hidden" id="impact">
<div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center pt-12">
<header className="mb-20 flex flex-col items-center text-center w-full fade-up">
<h2 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white w-full max-w-4xl leading-[1.1]">
            What changes when relationships become measurable
          </h2>
<p className="mt-8 text-lg md:text-xl text-neutral-300 max-w-2xl font-light">
            When companies understand the true nature of the relationship with
            their customers:
          </p>
</header>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full fade-up">
<div className="p-[1px] rounded-[1.25rem] bg-gradient-to-b from-neutral-500/30 to-transparent group hover:from-brand/40 transition-colors duration-500 cursor-pointer h-[180px]">
<div className="bg-[#1b1050]/90 h-full w-full rounded-3xl p-8 flex flex-col items-center justify-center text-center border border-white/10 group-hover:border-brand/30 transition-all duration-500 relative overflow-hidden">
<p className="text-xl text-neutral-300 font-light tracking-tight transition-transform duration-500 group-hover:-translate-y-4">
                Retention becomes
                <span className="font-medium text-white">more predictable</span>
</p>
<p className="absolute bottom-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-base text-neutral-400 px-4 leading-snug">
                Identify relationship fractures before they lead to churn.
              </p>
</div>
</div>
<div className="p-[1px] rounded-[1.25rem] bg-gradient-to-b from-neutral-500/30 to-transparent group hover:from-brand/40 transition-colors duration-500 cursor-pointer h-[180px]">
<div className="bg-[#1b1050]/90 h-full w-full rounded-3xl p-8 flex flex-col items-center justify-center text-center border border-white/10 group-hover:border-brand/30 transition-all duration-500 relative overflow-hidden">
<p className="text-xl text-neutral-300 font-light tracking-tight transition-transform duration-500 group-hover:-translate-y-4">
                Advocacy becomes a
                <span className="font-medium text-white">growth driver</span>
</p>
<p className="absolute bottom-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-base text-neutral-400 px-4 leading-snug">
                Turn silent, satisfied buyers into highly engaged brand
                champions.
              </p>
</div>
</div>
<div className="p-[1px] rounded-[1.25rem] bg-gradient-to-b from-neutral-500/30 to-transparent group hover:from-brand/40 transition-colors duration-500 cursor-pointer h-[180px]">
<div className="bg-[#1b1050]/90 h-full w-full rounded-3xl p-8 flex flex-col items-center justify-center text-center border border-white/10 group-hover:border-brand/30 transition-all duration-500 relative overflow-hidden">
<p className="text-xl text-neutral-300 font-light tracking-tight transition-transform duration-500 group-hover:-translate-y-4">
                Marketing becomes
                <span className="font-medium text-white">more efficient</span>
</p>
<p className="absolute bottom-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-base text-neutral-400 px-4 leading-snug">
                Target deep emotional triggers rather than surface-level
                demographics.
              </p>
</div>
</div>
<div className="p-[1px] rounded-[1.25rem] bg-gradient-to-b from-neutral-500/30 to-transparent group hover:from-brand/40 transition-colors duration-500 cursor-pointer h-[180px]">
<div className="bg-[#1b1050]/90 h-full w-full rounded-3xl p-8 flex flex-col items-center justify-center text-center border border-white/10 group-hover:border-brand/30 transition-all duration-500 relative overflow-hidden">
<p className="text-xl text-neutral-300 font-light tracking-tight transition-transform duration-500 group-hover:-translate-y-4">
                Investments become
                <span className="font-medium text-white">more focused</span>
</p>
<p className="absolute bottom-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-base text-neutral-400 px-4 leading-snug">
                Focus resources on initiatives that actively strengthen the
                customer bond.
              </p>
</div>
</div>
<div className="p-[1px] rounded-[1.25rem] bg-gradient-to-b from-neutral-500/30 to-transparent group hover:from-brand/40 transition-colors duration-500 cursor-pointer h-[180px]">
<div className="bg-[#1b1050]/90 h-full w-full rounded-3xl p-8 flex flex-col items-center justify-center text-center border border-white/10 group-hover:border-brand/30 transition-all duration-500 relative overflow-hidden">
<p className="text-xl text-neutral-300 font-light tracking-tight transition-transform duration-500 group-hover:-translate-y-4">
                Teams align around a
                <span className="font-medium text-white">shared understanding</span>
</p>
<p className="absolute bottom-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-base text-neutral-400 px-4 leading-snug">
                Break internal silos with a unified metric for relationship
                success.
              </p>
</div>
</div>
<div className="p-[1px] rounded-[1.25rem] bg-gradient-to-b from-neutral-500/30 to-transparent group hover:from-brand/40 transition-colors duration-500 cursor-pointer h-[180px]">
<div className="bg-[#1b1050]/90 h-full w-full rounded-3xl p-8 flex flex-col items-center justify-center text-center border border-white/10 group-hover:border-brand/30 transition-all duration-500 relative overflow-hidden">
<p className="text-xl text-neutral-300 font-light tracking-tight transition-transform duration-500 group-hover:-translate-y-4">
                Strategy becomes
                <span className="font-medium text-white">easier to execute</span>
</p>
<p className="absolute bottom-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-base text-neutral-400 px-4 leading-snug">
                Shift from reactive problem-solving to proactive relationship
                building.
              </p>
</div>
</div>
</div>
</div>
</section>

<div className="w-full relative z-20 pb-20 pt-16" id="page-competitive-edge" style={{display: 'none'}}>

<section className="max-w-6xl mx-auto px-6 pt-12 pb-24 relative z-10 text-center flex flex-col items-center fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-xl mb-8 shadow-[0_0_20px_rgba(255,255,255,0.04)]">
<span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse"></span>
<span className="text-xs font-mono uppercase tracking-[0.22em] text-white/90">
            OUR COMPETITIVE EDGE
          </span>
</div>
<h1 className="text-5xl md:text-7xl font-normal tracking-tight text-white mb-8 leading-[1.1] max-w-4xl">
          More than data.
          <br/>
<span className="text-neutral-400">More than experience.</span>
</h1>
<div className="text-lg md:text-xl text-neutral-300 font-light leading-relaxed max-w-3xl space-y-4">
<p>
            Heart Share is built on a simple principle: data alone is not
            enough.
          </p>
<p>
            Understanding customer relationships requires both advanced
            technology and deep human expertise—working together.
          </p>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/10 relative z-10">
<div className="mb-16 fade-up">
<h2 className="text-xs font-mono uppercase tracking-[0.22em] text-white/90 mb-6 flex items-center gap-3">
<span className="w-8 h-[1px] bg-brand"></span>
            TECHNOLOGY + EXPERIENCE
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-up items-stretch">

<div className="p-10 rounded-[2rem] bg-[#25166b] border border-brand/20 relative overflow-hidden group hover:border-brand/40 transition-all duration-500 shadow-xl flex flex-col h-full">
<div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-brand/10 transition-colors"></div>
<div className="relative z-10 flex-1 flex flex-col">
<div className="w-14 h-14 rounded-2xl bg-[#1f125a] border border-brand/30 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-brand" height="1.8em" icon="solar:cpu-linear" strokeWidth="1.5" width="1.8em"></iconify-icon>
</div>
<h3 className="text-3xl font-normal tracking-tight text-white mb-8">
                Technology
              </h3>
<ul className="space-y-5 text-lg text-neutral-300 font-light leading-relaxed flex-1">
<li className="flex gap-3">
<span className="text-brand mt-1.5 text-sm">✦</span>
                  Proprietary Algorithm
                </li>
<li className="flex gap-3">
<span className="text-brand mt-1.5 text-sm">✦</span>
                  Proprietary AI models
                </li>
<li className="flex gap-3">
<span className="text-brand mt-1.5 text-sm">✦</span>
                  Multi-source data integration (internal and external)
                </li>
<li className="flex gap-3">
<span className="text-brand mt-1.5 text-sm">✦</span>
                  Agentic AI teams, designed to process complexity
                </li>
</ul>
</div>
</div>

<div className="p-10 rounded-[2rem] bg-[#25166b] border border-emerald-500/20 relative overflow-hidden group hover:border-emerald-500/40 transition-all duration-500 shadow-xl flex flex-col h-full">
<div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-emerald-500/10 transition-colors"></div>
<div className="relative z-10 flex-1 flex flex-col">
<div className="w-14 h-14 rounded-2xl bg-[#1f125a] border border-emerald-500/30 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-emerald-400" height="1.8em" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="1.8em"></iconify-icon>
</div>
<h3 className="text-3xl font-normal tracking-tight text-white mb-8">
                Experience
              </h3>
<ul className="space-y-5 text-lg text-neutral-300 font-light leading-relaxed flex-1">
<li className="flex gap-3">
<span className="text-emerald-500 mt-1.5 text-sm">✦</span>
                  Decades of experience in marketing, strategy, and
                  customer/consumer communication
                </li>
<li className="flex gap-3">
<span className="text-emerald-500 mt-1.5 text-sm">✦</span>
                  Cross-industry expertise across complex organizations
                </li>
<li className="flex gap-3">
<span className="text-emerald-500 mt-1.5 text-sm">✦</span>
                  A practical understanding of how decisions are made and
                  executed
                </li>
</ul>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/10 relative z-10">
<div className="mb-16 fade-up max-w-3xl">
<h2 className="text-xs font-mono uppercase tracking-[0.22em] text-white/90 mb-6 flex items-center gap-3">
<span className="w-8 h-[1px] bg-brand"></span>
            TEAM
          </h2>
<h3 className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-6">
            The team
          </h3>
<div className="text-xl text-neutral-300 font-light leading-relaxed space-y-4">
<p>
              A multidisciplinary team combining expertise in strategy, data,
              marketing, and customer experience.
            </p>
<p>
              People who have worked on challenges, in multinational
              organizations, where execution matters as much as insight.
            </p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 fade-up">

<div className="group relative bg-[#25166b] border border-white/10 rounded-[2rem] overflow-hidden hover:border-brand/30 transition-all duration-500 flex flex-col h-full">
<div className="aspect-[4/5] bg-[#1a0f4c] relative flex items-center justify-center overflow-hidden border-b border-white/5">
<iconify-icon className="text-[5rem] text-white/10 group-hover:text-brand/40 transition-colors duration-500 group-hover:scale-110" icon="solar:user-circle-linear"></iconify-icon>
</div>
<div className="p-6 flex flex-col flex-1">
<h4 className="text-xl font-normal text-white mb-1 tracking-tight">
                Carolina Eugenia Cappabianca
              </h4>
<p className="text-sm text-brand font-light mb-6 flex-1">
                Strategic Marketing and Communication
              </p>
<a className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors mt-auto" href="#">
<iconify-icon height="1.4em" icon="mdi:linkedin" width="1.4em"></iconify-icon>
                LinkedIn
              </a>
</div>
</div>

<div className="group relative bg-[#25166b] border border-white/10 rounded-[2rem] overflow-hidden hover:border-brand/30 transition-all duration-500 flex flex-col h-full">
<div className="aspect-[4/5] bg-[#1a0f4c] relative flex items-center justify-center overflow-hidden border-b border-white/5">
<iconify-icon className="text-[5rem] text-white/10 group-hover:text-brand/40 transition-colors duration-500 group-hover:scale-110" icon="solar:user-circle-linear"></iconify-icon>
</div>
<div className="p-6 flex flex-col flex-1">
<h4 className="text-xl font-normal text-white mb-1 tracking-tight">
                Marcello Miradoli
              </h4>
<p className="text-sm text-brand font-light mb-6 flex-1">
                Business Growth and Development
              </p>
<a className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors mt-auto" href="#">
<iconify-icon height="1.4em" icon="mdi:linkedin" width="1.4em"></iconify-icon>
                LinkedIn
              </a>
</div>
</div>

<div className="group relative bg-[#25166b] border border-white/10 rounded-[2rem] overflow-hidden hover:border-brand/30 transition-all duration-500 flex flex-col h-full">
<div className="aspect-[4/5] bg-[#1a0f4c] relative flex items-center justify-center overflow-hidden border-b border-white/5">
<iconify-icon className="text-[5rem] text-white/10 group-hover:text-brand/40 transition-colors duration-500 group-hover:scale-110" icon="solar:user-circle-linear"></iconify-icon>
</div>
<div className="p-6 flex flex-col flex-1">
<h4 className="text-xl font-normal text-white mb-1 tracking-tight">
                Lucrezia Arena
              </h4>
<p className="text-sm text-brand font-light mb-6 flex-1">
                Digital Marketing and Communication
              </p>
<a className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors mt-auto" href="#">
<iconify-icon height="1.4em" icon="mdi:linkedin" width="1.4em"></iconify-icon>
                LinkedIn
              </a>
</div>
</div>

<div className="group relative bg-[#25166b] border border-white/10 rounded-[2rem] overflow-hidden hover:border-brand/30 transition-all duration-500 flex flex-col h-full">
<div className="aspect-[4/5] bg-[#1a0f4c] relative flex items-center justify-center overflow-hidden border-b border-white/5">
<iconify-icon className="text-[5rem] text-white/10 group-hover:text-brand/40 transition-colors duration-500 group-hover:scale-110" icon="solar:user-circle-linear"></iconify-icon>
</div>
<div className="p-6 flex flex-col flex-1">
<h4 className="text-xl font-normal text-white mb-1 tracking-tight">
                Lorenzo Giombini
              </h4>
<p className="text-sm text-brand font-light mb-6 flex-1">
                New Technologies and Business Analysis
              </p>
<a className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors mt-auto" href="#">
<iconify-icon height="1.4em" icon="mdi:linkedin" width="1.4em"></iconify-icon>
                LinkedIn
              </a>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-24 border-t border-white/10 relative z-10 text-center fade-up mb-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-xl mb-10 shadow-[0_0_20px_rgba(255,255,255,0.04)]">
<span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse"></span>
<span className="text-xs font-mono uppercase tracking-[0.22em] text-white/90">
            APPROACH
          </span>
</div>
<h2 className="text-4xl md:text-6xl font-normal tracking-tight text-white mb-10 leading-[1.1]">
          From understanding to action
        </h2>
<div className="text-xl md:text-2xl text-neutral-300 font-light leading-relaxed space-y-2 max-w-3xl mx-auto">
<p>We don’t stop at measurement.</p>
<p>
            We work alongside organizations to translate insight into decisions,
          </p>
<p>and decisions into measurable impact.</p>
</div>
</section>
</div>
<footer className="flex flex-col w-full bg-[#1f125a]">

<div className="overflow-hidden w-full border-white/10 border-t py-32 relative">
<div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" style={{maskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)'}}></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand/[0.05] blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
<h2 className="text-4xl md:text-6xl font-normal text-white tracking-tight mb-8 font-mono typewriter-text">
            &gt; Rising Beyond Loyalty
          </h2>
<p className="text-neutral-300 max-w-2xl font-light leading-relaxed mb-12 text-lg md:text-xl">
            We help organizations understand and grow customer bonds, bringing
            visibility to the invisible and direction to the uncertain.
          </p>
<div className="flex flex-col sm:flex-row items-center gap-6 mb-8 w-full sm:w-auto">
<button className="w-full sm:w-auto group relative inline-flex items-center justify-center px-10 py-5 text-sm font-normal text-black bg-white rounded-full transition-all duration-300 hover:scale-105 hover:bg-neutral-200 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,90,0,0.3)]">
<span className="relative z-10 flex items-center gap-2">
                Request a private introduction
                <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" height="1.2em" icon="solar:arrow-right-linear" strokeWidth="1.5" width="1.2em"></iconify-icon>
</span>
</button>
<button className="w-full sm:w-auto group relative inline-flex items-center justify-center px-10 py-5 text-sm font-normal text-white bg-white/5 border border-white/10 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-brand/40 backdrop-blur-sm">
<span className="relative z-10 flex items-center gap-2 text-neutral-300 group-hover:text-white transition-colors">
                Join waitlist
              </span>
</button>
</div>
<p className="text-xs text-neutral-400 font-light tracking-wide uppercase">
            A tailored walkthrough of the Heart Share system and its application
            to your business.
          </p>
</div>
</div>

<div className="overflow-hidden bg-[#25166b] w-full border-white/5 border-t pt-16 pb-12 relative">
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col w-full">
<div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12 pb-16 border-b border-white/10 w-full">
<div className="col-span-1 md:col-span-4 flex flex-col items-start gap-4">
<img alt="Heart Share Logo" className="h-8 w-auto" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/80a7f0c4-d817-45dd-8b6f-fe13ccd9f565_320w.png"/>
<p className="text-sm text-neutral-400 max-w-sm font-light leading-relaxed mt-4">
                Heart Share is a strategic platform that measures and
                strengthens the relationship between brands and their customers.
                <br/>
                It transforms data into clarity, and clarity into action.
              </p>
</div>
<div className="col-span-1 md:col-span-4 flex flex-col gap-4">
<h4 className="text-xs font-mono font-normal text-white uppercase tracking-widest mb-2">
                Send a Message
              </h4>
<form className="flex flex-col gap-3 w-full max-w-sm" id="footer-contact-form">
<input className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand/50 transition-colors text-sm w-full" id="form-name" placeholder="Name" required="" type="text"/>
<input className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand/50 transition-colors text-sm w-full" id="form-email" placeholder="Email" required="" type="email"/>
<textarea className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand/50 transition-colors text-sm resize-none w-full" id="form-message" placeholder="Message" required="" rows="3"></textarea>
<button className="bg-white text-[#1f125a] font-normal rounded-xl px-6 py-3 hover:bg-neutral-200 transition-colors text-sm w-fit mt-1 flex items-center gap-2" type="submit">
                  Send
                  <iconify-icon height="1.2em" icon="solar:plain-2-linear" width="1.2em"></iconify-icon>
</button>
<div className="hidden text-emerald-400 text-xs mt-2 font-mono uppercase tracking-widest" id="form-success-msg">
                  grazie per aver contatato the heart. share, riceverai una
                  risposta entro 48h
                </div>
</form>
</div>
<div className="col-span-1 md:col-span-4 flex flex-col gap-4">
<h4 className="text-xs font-mono font-normal text-white uppercase tracking-widest mb-2">
                Contacts
              </h4>
<ul className="flex flex-col gap-3 text-sm text-neutral-400 font-light">
<li className="flex items-center gap-3">
<iconify-icon className="text-xl text-neutral-500" icon="solar:city-linear"></iconify-icon>
<span>ROMA - MILANO</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-xl text-neutral-500" icon="solar:map-point-linear"></iconify-icon>
<span>via Principessa Clotilde 5, 00192 (RM)</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-xl text-neutral-500" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-brand transition-colors" href="mailto:info@theheartshare.com">
                    info@theheartshare.com
                  </a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-xl text-neutral-500" icon="solar:phone-linear"></iconify-icon>
<a className="hover:text-brand transition-colors" href="tel:+39063610977">
                    +39 06 3610977
                  </a>
</li>
</ul>
</div>
</div>
<div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 pt-8">
<div className="flex flex-col md:flex-row items-center gap-6">
<div className="flex gap-6 text-xs font-mono text-neutral-400 uppercase tracking-widest">
<a className="hover:text-brand transition-colors duration-300 flex items-center gap-1.5" href="#">
                  LinkedIn
                </a>
</div>
</div>
<div className="flex items-center gap-4 text-xs text-neutral-500 font-mono uppercase tracking-widest">
<span>© 2026 Heart Share.</span>
<span className="px-2 py-0.5 border border-white/10 rounded text-neutral-400">
                v4.0.0
              </span>
</div>
</div>
</div>
</div>
</footer>




    </>
  );
}
