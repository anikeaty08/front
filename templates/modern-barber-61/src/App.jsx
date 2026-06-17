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



      const navbar = document.getElementById('navbar');
      const menuBtn = document.getElementById('menuBtn');
      const mobileMenu = document.getElementById('mobileMenu');

      function updateNavbar() {
        if (window.scrollY > 8) {
          navbar.classList.add('bg-[#111111]/78', 'backdrop-blur-xl', 'border-white/10', 'shadow-2xl', 'shadow-black/20');
        } else {
          navbar.classList.remove('bg-[#111111]/78', 'backdrop-blur-xl', 'border-white/10', 'shadow-2xl', 'shadow-black/20');
        }
      }

      window.addEventListener('scroll', updateNavbar);
      updateNavbar();

      menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });

      document.querySelectorAll('#mobileMenu a').forEach((link) => {
        link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
      });

      const fadeItems = document.querySelectorAll('.fade-up');
      fadeItems.forEach((item) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(1.5rem)';
        item.style.transition = 'opacity 700ms ease, transform 700ms ease';
      });

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });

      fadeItems.forEach((item) => observer.observe(item));
    
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
      
<div className="fixed inset-0 pointer-events-none" style={{background: 'radial-gradient(circle at 15% 0%, rgba(231,76,60,0.12), transparent 35%), radial-gradient(circle at 85% 30%, rgba(192,57,43,0.08), transparent 30%), radial-gradient(circle at 50% 80%, rgba(255,255,255,0.02), transparent 40%)'}}></div>
<header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/0" id="navbar">
<nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
<a className="group flex items-center gap-3" href="#">
<div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e74c3c]/50 bg-gradient-to-br from-[#e74c3c]/20 to-[#c0392b]/20 text-sm font-bold tracking-tighter text-white shadow-lg shadow-[#c0392b]/20 transition duration-300 group-hover:scale-105">
            MB
          </div>
<div>
<div className="text-sm font-semibold tracking-tight">
              Modern Barber Shop
            </div>
<div className="text-xs text-white/45">Torrington, CT</div>
</div>
</a>
<div className="hidden items-center gap-7 md:flex">
<a className="text-sm text-white/60 transition hover:text-white" href="#services">
            Services
          </a>
<a className="text-sm text-white/60 transition hover:text-white" href="#about">
            About
          </a>
<a className="text-sm text-white/60 transition hover:text-white" href="#reviews">
            Reviews
          </a>
<a className="text-sm text-white/60 transition hover:text-white" href="#contact">
            Contact
          </a>
</div>
<a className="hidden rounded-full bg-gradient-to-b from-[#e74c3c] to-[#c0392b] px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-[#c0392b]/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-[#c0392b]/40 sm:inline-flex" href="tel:8603092687">
          Call Now
        </a>
<button aria-label="Open menu" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white md:hidden" id="menuBtn">
<iconify-icon icon="solar:hamburger-menu-linear" style={{fontSize: '1.35rem'}}></iconify-icon>
</button>
</nav>
<div className="hidden border-t border-white/10 bg-[#111111]/95 px-5 py-4 backdrop-blur-xl md:hidden" id="mobileMenu">
<div className="flex flex-col gap-4">
<a className="text-sm text-white/70" href="#services">Services</a>
<a className="text-sm text-white/70" href="#about">About</a>
<a className="text-sm text-white/70" href="#reviews">Reviews</a>
<a className="text-sm text-white/70" href="#contact">Contact</a>
<a className="rounded-full bg-[#c0392b] px-5 py-3 text-center text-sm font-medium text-white" href="tel:8603092687">
            Call Now
          </a>
</div>
</div>
</header>
<main className="relative overflow-hidden">
<section className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-20 pt-32 sm:px-6 lg:px-8">
<div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
<div className="fade-up">
<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 shadow-2xl backdrop-blur-md">
<span className="h-2 w-2 rounded-full bg-[#c0392b]"></span>
              Family run · 10+ years serving Torrington
            </div>
<h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 sm:text-6xl lg:text-7xl">
              Torrington's Favorite Barber Shop.
            </h1>
<p className="mt-6 max-w-2xl text-lg leading-8 text-white/62 sm:text-xl">
              Family owned and operated. Barbers who greet you by name and treat
              you like family.
            </p>
<div className="mt-9 flex flex-col gap-3 sm:flex-row">
<a className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#e74c3c] to-[#c0392b] px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-[#c0392b]/30 transition-all duration-300 hover:scale-105 hover:shadow-[#c0392b]/50" href="tel:8603092687">
                Call Now — (860) 309-2687
                <iconify-icon icon="solar:phone-calling-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/10" href="https://www.google.com/maps/search/?api=1&amp;query=368+Church+St+Torrington+CT+06790" target="_blank">
                Get Directions
                <iconify-icon icon="solar:map-point-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
</a>
</div>
<div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-white/55">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:star-linear" style={{fontSize: '1.1rem', color: '#c0392b'}}></iconify-icon>
                4.7 stars on Google
              </div>
<div className="h-1 w-1 rounded-full bg-white/25"></div>
<div>31 reviews</div>
<div className="h-1 w-1 rounded-full bg-white/25"></div>
<div>Walk ins welcome</div>
</div>
</div>
<div className="fade-up relative lg:justify-self-end" style={{transitionDelay: '120ms'}}>
<div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-[#c0392b]/20 to-[#e74c3c]/10 blur-3xl"></div>
<div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-4 shadow-2xl shadow-black/40">
<div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-[#1a1a1a] to-[#111111] p-5 shadow-inner">
<div className="flex items-center justify-between border-b border-white/10 pb-5">
<div>
<div className="text-xs uppercase tracking-[0.22rem] text-[#e74c3c]">
                      Modern
                    </div>
<div className="mt-1 text-2xl font-semibold tracking-tight">
                      Barber Shop
                    </div>
</div>
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c0392b]">
<iconify-icon icon="solar:scissors-linear" style={{fontSize: '1.45rem'}}></iconify-icon>
</div>
</div>
<div className="grid gap-3 py-5">
<div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition duration-300 hover:border-[#c0392b]/60 hover:bg-[#c0392b]/10">
<div className="flex items-center gap-3">
<iconify-icon icon="solar:user-check-linear" style={{fontSize: '1.25rem', color: '#c0392b'}}></iconify-icon>
<span className="text-sm font-medium">
                        Classic cuts, sharp fades
                      </span>
</div>
<span className="text-xs text-white/45">Fresh</span>
</div>
<div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition duration-300 hover:border-[#c0392b]/60 hover:bg-[#c0392b]/10">
<div className="flex items-center gap-3">
<iconify-icon icon="solar:heart-linear" style={{fontSize: '1.25rem', color: '#c0392b'}}></iconify-icon>
<span className="text-sm font-medium">
                        Family owned atmosphere
                      </span>
</div>
<span className="text-xs text-white/45">Local</span>
</div>
<div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition duration-300 hover:border-[#c0392b]/60 hover:bg-[#c0392b]/10">
<div className="flex items-center gap-3">
<iconify-icon icon="solar:clock-circle-linear" style={{fontSize: '1.25rem', color: '#c0392b'}}></iconify-icon>
<span className="text-sm font-medium">
                        Little wait, real attention
                      </span>
</div>
<span className="text-xs text-white/45">Easy</span>
</div>
</div>
<div className="rounded-[1.35rem] bg-gradient-to-br from-[#e74c3c] to-[#c0392b] p-5 shadow-lg shadow-[#c0392b]/20">
<div className="text-4xl font-semibold tracking-tight">10+</div>
<div className="mt-1 text-sm text-white/80">
                    Years serving Torrington with pride.
                  </div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8" id="services">
<div className="fade-up mx-auto max-w-2xl text-center">
<div className="text-sm font-medium text-[#e74c3c]">Services</div>
<h2 className="mt-3 text-4xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 sm:text-5xl">
            Clean cuts. Sharp details.
          </h2>
<p className="mt-4 text-base leading-7 text-white/55">
            Old school craft with a modern finish — from everyday trims to
            razor-clean edges.
          </p>
</div>
<div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
<div className="fade-up group rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#c0392b]/60 hover:bg-[#c0392b]/10">
<iconify-icon icon="solar:scissors-linear" style={{fontSize: '2rem', color: '#c0392b'}}></iconify-icon>
<h3 className="mt-5 text-xl font-semibold tracking-tight">Haircuts</h3>
<p className="mt-2 text-sm leading-6 text-white/52">
              Classic, clean, and tailored to your style.
            </p>
</div>
<div className="fade-up group rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#c0392b]/60 hover:bg-[#c0392b]/10">
<iconify-icon icon="solar:layers-minimalistic-linear" style={{fontSize: '2rem', color: '#c0392b'}}></iconify-icon>
<h3 className="mt-5 text-xl font-semibold tracking-tight">Fades</h3>
<p className="mt-2 text-sm leading-6 text-white/52">
              Smooth blends, tight tapers, and crisp finishes.
            </p>
</div>
<div className="fade-up group rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#c0392b]/60 hover:bg-[#c0392b]/10">
<iconify-icon icon="solar:face-scan-square-linear" style={{fontSize: '2rem', color: '#c0392b'}}></iconify-icon>
<h3 className="mt-5 text-xl font-semibold tracking-tight">
              Beard Trims
            </h3>
<p className="mt-2 text-sm leading-6 text-white/52">
              Shape, clean up, and sharpen your beard.
            </p>
</div>
<div className="fade-up group rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#c0392b]/60 hover:bg-[#c0392b]/10">
<iconify-icon icon="solar:smile-circle-linear" style={{fontSize: '2rem', color: '#c0392b'}}></iconify-icon>
<h3 className="mt-5 text-xl font-semibold tracking-tight">Kids Cuts</h3>
<p className="mt-2 text-sm leading-6 text-white/52">
              Friendly, patient cuts for the next generation.
            </p>
</div>
<div className="fade-up group rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#c0392b]/60 hover:bg-[#c0392b]/10">
<iconify-icon icon="solar:pen-new-square-linear" style={{fontSize: '2rem', color: '#c0392b'}}></iconify-icon>
<h3 className="mt-5 text-xl font-semibold tracking-tight">Line Ups</h3>
<p className="mt-2 text-sm leading-6 text-white/52">
              Crisp edges that pull the whole cut together.
            </p>
</div>
<div className="fade-up group rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#c0392b]/60 hover:bg-[#c0392b]/10">
<iconify-icon icon="mdi:razor-double-edge" style={{fontSize: '2rem', color: '#c0392b'}}></iconify-icon>
<h3 className="mt-5 text-xl font-semibold tracking-tight">
              Straight Razor Shaves
            </h3>
<p className="mt-2 text-sm leading-6 text-white/52">
              Traditional barbering with a premium finish.
            </p>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">
<div className="fade-up grid overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-xl shadow-2xl sm:grid-cols-3">
<div className="border-b border-white/10 p-7 text-center sm:border-b-0 sm:border-r">
<div className="text-4xl font-semibold tracking-tight text-white">
              10+
            </div>
<div className="mt-2 text-sm text-white/55">
              Years Serving Torrington
            </div>
</div>
<div className="border-b border-white/10 p-7 text-center sm:border-b-0 sm:border-r">
<div className="text-4xl font-semibold tracking-tight text-white">
              ⭐ 4.7
            </div>
<div className="mt-2 text-sm text-white/55">on Google</div>
</div>
<div className="p-7 text-center">
<div className="text-4xl font-semibold tracking-tight text-white whitespace-nowrap">
              Walk-ins
            </div>
<div className="mt-2 text-sm text-white/55">Welcome</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8" id="about">
<div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
<div className="fade-up">
<div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-[#c0392b]/40 bg-[#c0392b]/10">
<iconify-icon icon="solar:home-heart-linear" style={{fontSize: '2rem', color: '#c0392b'}}></iconify-icon>
</div>
<h2 className="mt-6 text-4xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 sm:text-5xl">
              A Torrington staple for over a decade.
            </h2>
</div>
<div className="fade-up rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 sm:p-9" style={{transitionDelay: '100ms'}}>
<p className="text-lg leading-9 text-white/68">
              Modern Barber Shop has been a staple of Torrington for over a
              decade. Owner Don has been in the business for decades — and the
              team here knows their craft inside and out. We greet you by name,
              treat you like family, and make sure you leave looking fresh every
              single time. Community driven, Torrington proud.
            </p>
<div className="mt-8 grid gap-3 sm:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-[#111111]/60 p-4">
<div className="text-sm font-medium text-white">Locally owned</div>
<div className="mt-1 text-xs text-white/45">Community focused</div>
</div>
<div className="rounded-2xl border border-white/10 bg-[#111111]/60 p-4">
<div className="text-sm font-medium text-white">Family run</div>
<div className="mt-1 text-xs text-white/45">Welcoming energy</div>
</div>
<div className="rounded-2xl border border-white/10 bg-[#111111]/60 p-4">
<div className="text-sm font-medium text-white">
                  Experienced owner
                </div>
<div className="mt-1 text-xs text-white/45">Decades of craft</div>
</div>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8" id="reviews">
<div className="fade-up max-w-2xl">
<div className="text-sm font-medium text-[#e74c3c]">Reviews</div>
<h2 className="mt-3 text-4xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 sm:text-5xl">
            Trusted by locals.
          </h2>
<p className="mt-4 text-base leading-7 text-white/55">
            Real words from customers who keep coming back.
          </p>
</div>
<div className="mt-12 grid gap-4 lg:grid-cols-2">
<div className="fade-up rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#c0392b]/60 hover:bg-[#c0392b]/10">
<div className="text-5xl font-semibold leading-none text-[#e74c3c]/60">
              “
            </div>
<p className="mt-1 text-base leading-7 text-white/72">
              Always my go to barbershop if I'm in a hurry or just in need of a
              trim up. 5 stars, would recommend to other people.
            </p>
<div className="mt-5 text-sm font-medium text-white">
              — Sono Rabbit List
            </div>
</div>
<div className="fade-up rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#c0392b]/60 hover:bg-[#c0392b]/10">
<div className="text-5xl font-semibold leading-none text-[#e74c3c]/60">
              “
            </div>
<p className="mt-1 text-base leading-7 text-white/72">
              Been coming to Modern Barbershop for over 10 years. They really
              listen to what you want and they make it happen. I wouldn't go
              anywhere else.
            </p>
<div className="mt-5 text-sm font-medium text-white">— Tom H.</div>
</div>
<div className="fade-up rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#c0392b]/60 hover:bg-[#c0392b]/10">
<div className="text-5xl font-semibold leading-none text-[#e74c3c]/60">
              “
            </div>
<p className="mt-1 text-base leading-7 text-white/72">
              The best family owned barber shop within 50 miles. Owner Don has
              been in the business for decades. They all know their business
              well and focus on the customer.
            </p>
<div className="mt-5 text-sm font-medium text-white">— Jack W.</div>
</div>
<div className="fade-up rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#c0392b]/60 hover:bg-[#c0392b]/10">
<div className="text-5xl font-semibold leading-none text-[#e74c3c]/60">
              “
            </div>
<p className="mt-1 text-base leading-7 text-white/72">
              First time coming but it felt like I'd been going there for years.
              Friendly staff with little wait times. Highly recommend.
            </p>
<div className="mt-5 text-sm font-medium text-white">
              — Google Reviewer
            </div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8" id="contact">
<div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
<div className="fade-up rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 sm:p-9">
<div className="text-sm font-medium text-[#e74c3c]">Contact</div>
<h2 className="mt-3 text-4xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 sm:text-5xl">
              Stop in or call ahead.
            </h2>
<div className="mt-8 space-y-5">
<div className="flex gap-4">
<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#c0392b]/10 text-[#c0392b]">
<iconify-icon icon="solar:map-point-linear" style={{fontSize: '1.35rem'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Address</div>
<div className="mt-1 text-sm leading-6 text-white/58">
                    368 Church St, Torrington CT 06790
                  </div>
</div>
</div>
<div className="flex gap-4">
<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#c0392b]/10 text-[#c0392b]">
<iconify-icon icon="solar:phone-linear" style={{fontSize: '1.35rem'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Phone</div>
<div className="mt-1 text-sm leading-6 text-white/58">
                    (860) 309-2687
                  </div>
</div>
</div>
<div className="flex gap-4">
<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#c0392b]/10 text-[#c0392b]">
<iconify-icon icon="solar:clock-circle-linear" style={{fontSize: '1.35rem'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Hours</div>
<div className="mt-1 text-sm leading-6 text-white/58">
                    Tue–Fri 8:30am–4:30pm · Sat 8:00am–12:00pm · Sun–Mon Closed
                  </div>
</div>
</div>
</div>
<a className="mt-9 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#e74c3c] to-[#c0392b] px-6 py-4 text-sm font-medium text-white shadow-xl shadow-[#c0392b]/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-[#c0392b]/40 sm:w-auto" href="tel:8603092687">
              Call Now
              <iconify-icon icon="solar:phone-calling-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
</a>
</div>
<div className="fade-up overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 min-h-[28rem] backdrop-blur-sm" style={{transitionDelay: '100ms'}}>
<div className="flex h-full min-h-[28rem] items-center justify-center p-6" style={{background: 'radial-gradient(circle at center, rgba(231,76,60,0.12) 0%, transparent 70%), repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 18px)'}}>
<div className="max-w-sm text-center">
<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#c0392b] shadow-2xl shadow-[#c0392b]/30">
<iconify-icon icon="solar:map-arrow-right-linear" style={{fontSize: '2rem'}}></iconify-icon>
</div>
<h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
                  Find us on Google Maps
                </h3>
<p className="mt-3 text-sm leading-6 text-white/58">
                  368 Church St, Torrington CT 06790
                </p>
<a className="mt-6 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/10" href="https://www.google.com/maps/search/?api=1&amp;query=368+Church+St+Torrington+CT+06790" target="_blank">
                  Open Directions
                </a>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="relative border-t border-white/10 px-5 py-8 sm:px-6 lg:px-8">
<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
<div className="text-sm text-white/45">
          © 2025 Modern Barber Shop · 368 Church St, Torrington CT · (860)
          309-2687
        </div>
<div className="flex items-center gap-3">
<a className="text-sm text-white/55 transition hover:text-[#c0392b]" href="tel:8603092687">
            Call
          </a>
<span className="h-1 w-1 rounded-full bg-white/25"></span>
<a className="text-sm text-white/55 transition hover:text-[#c0392b]" href="https://www.google.com/maps/search/?api=1&amp;query=368+Church+St+Torrington+CT+06790" target="_blank">
            Directions
          </a>
</div>
</div>
</footer>


    </>
  );
}
