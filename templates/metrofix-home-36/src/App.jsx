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



      document.addEventListener('DOMContentLoaded', () => {

        // ── 1. Reveal page
        document.body.classList.add('is-loaded');

        // ── 2. Mobile menu
        const mobileToggle = document.getElementById('mobileToggle');
        const mobileMenu   = document.getElementById('mobileMenu');
        if (mobileToggle && mobileMenu) {
          const closeMobileMenu = () => {
            mobileMenu.classList.add('hidden');
            mobileToggle.setAttribute('aria-expanded', 'false');
            mobileToggle.setAttribute('aria-label', 'Open menu');
            mobileToggle.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" class="text-xl" stroke-width="1.5"></iconify-icon>';
          };
          const openMobileMenu = () => {
            mobileMenu.classList.remove('hidden');
            mobileToggle.setAttribute('aria-expanded', 'true');
            mobileToggle.setAttribute('aria-label', 'Close menu');
            mobileToggle.innerHTML = '<iconify-icon icon="solar:close-circle-linear" class="text-xl" stroke-width="1.5"></iconify-icon>';
          };
          closeMobileMenu();
          mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.contains('hidden') ? openMobileMenu() : closeMobileMenu();
          });
          mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMobileMenu));
          document.addEventListener('click', (e) => {
            if (!mobileToggle.contains(e.target) && !mobileMenu.contains(e.target)) closeMobileMenu();
          });
          window.addEventListener('resize', () => { if (window.innerWidth >= 1024) closeMobileMenu(); });
        }

      

        if (typeof gsap !== 'undefined') {
          gsap.registerPlugin(ScrollTrigger);

          // Nav entrance
          gsap.from('#navShell', { y: -20, opacity: 0, duration: 1.1, ease: 'power3.out' });

          // Hero items — set before animating to prevent flash
          gsap.set('.hero-item', { y: 40, opacity: 0 });
          gsap.to('.hero-item', {
            y: 0, opacity: 1,
            duration: 1.1, stagger: 0.12,
            ease: 'power3.out', delay: 0.3
          });

          // Parallax
          gsap.utils.toArray('[data-parallax]').forEach(el => {
            gsap.to(el, {
              yPercent: 12, ease: 'none',
              scrollTrigger: { trigger: el.closest('section') || el, start: 'top bottom', end: 'bottom top', scrub: true }
            });
          });

         // Service cards entrance
         const serviceCards = gsap.utils.toArray('.service-card');
         gsap.set(serviceCards, { y: 28, opacity: 0 });
         gsap.to(serviceCards, {
         y: 0,
         opacity: 1,
         duration: 0.7,
         stagger: 0.08,
         ease: 'power3.out',
         scrollTrigger: {
          trigger: '#services',
          start: 'top 75%',
         }
         });

          // Process scroll-driven photo swap
          const processSteps  = gsap.utils.toArray('.process-step');
          const processMedias = gsap.utils.toArray('.process-media');

          function activateStep(index) {
            processMedias.forEach((media, i) => {
              media.style.opacity  = i === index ? '1' : '0';
              media.style.zIndex   = i === index ? '10' : '0';
            });
          }
          if (processSteps.length) {
            activateStep(0);
            processSteps.forEach((step, index) => {
              ScrollTrigger.create({
                trigger: step,
                start: 'top center',
                end: 'bottom center',
                onEnter:     () => activateStep(index),
                onEnterBack: () => activateStep(index)
              });
            });
          }

          // Scroll reveal
          document.querySelectorAll('.scroll-reveal').forEach(el => {
            gsap.fromTo(el,
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
                scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' }
              }
            );
          });

          // Testimonial marquee
          const marquee = document.querySelector('.testimonial-marquee');
          if (marquee) {
            marquee.innerHTML += marquee.innerHTML;
            gsap.to(marquee, { xPercent: -50, duration: 30, ease: 'none', repeat: -1 });
            marquee.parentElement.addEventListener('mouseenter', () => gsap.globalTimeline.pause());
            marquee.parentElement.addEventListener('mouseleave', () => gsap.globalTimeline.resume());
          }

          // Typewriter
          const tw = document.getElementById('plansTypewriter');
          if (tw) {
            const phrases = ['Maintenance Plans', 'Prevent Surprise Breakdowns', 'Keep Your Flow Running'];
            let pIdx = 0, cIdx = 0, isDeleting = false;
            function type() {
              const current = phrases[pIdx];
              tw.textContent = isDeleting ? current.substring(0, cIdx - 1) : current.substring(0, cIdx + 1);
              cIdx = isDeleting ? cIdx - 1 : cIdx + 1;
              let speed = isDeleting ? 40 : 80;
              if (!isDeleting && cIdx === current.length) { speed = 1800; isDeleting = true; }
              else if (isDeleting && cIdx === 0) { isDeleting = false; pIdx = (pIdx + 1) % phrases.length; speed = 400; }
              setTimeout(type, speed);
            }
            type();
          }


          // Assign dot pulse
          const assignDot = document.getElementById('assignDot');
          if (assignDot) {
          gsap.to(assignDot, { scale: 1.25, opacity: 0.65, duration: 0.8, repeat: -1, yoyo: true, ease: 'power1.inOut' });
          }

          ScrollTrigger.refresh();
        }

        // ── Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
          });
        });

      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed -z-10 overflow-hidden top-0 right-0 bottom-0 left-0 pointer-events-none">
<div className="absolute inset-y-0 left-[8%] hidden xl:block w-px bg-white/50"></div>
<div className="absolute inset-y-0 right-[8%] hidden xl:block w-px bg-white/40"></div>
</div>

<header className="fixed z-50 px-4 sm:px-6 top-4 right-0 left-0">
<div className="max-w-[88rem] mx-auto">
<div className="flex sm:px-4 h-16 border border-white/70 rounded-full px-3 relative backdrop-blur-xl items-center justify-between" id="navShell" style={{backgroundColor: 'rgba(244,247,248,0.96)', boxShadow: 'rgba(14,23,32,0.1) 0px 16px 40px'}}>
<div className="pointer-events-none h-px bg-gradient-to-r from-transparent via-white to-transparent absolute top-0 right-8 left-8"></div>
<a className="relative z-10 flex items-center gap-3 min-w-0" href="#hero">
<div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d6e3e0] bg-white/80 text-[0.65rem] font-medium tracking-[0.28em] text-[#0d6e63]">
              MF
            </div>
<div className="flex flex-col leading-none min-w-0">
<span className="uppercase text-xs text-[#6c7b84] tracking-[0.26em]">
                Metro Utility Care
              </span>
<span className="text-lg tracking-tight text-[#0e1720]" style={{fontFamily: '\'Instrument Serif\',serif'}}>
                METROFIX
              </span>
</div>
</a>
<nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
<a className="text-xs uppercase tracking-[0.22em] text-[#0d6e63] font-semibold transition-colors" href="/home">
              Home
            </a>
<a className="text-xs uppercase tracking-[0.22em] text-[#62727b] hover:text-[#0e1720] transition-colors" href="/services">
              Services
            </a>
<a className="text-xs uppercase tracking-[0.22em] text-[#62727b] hover:text-[#0e1720] transition-colors" href="/casestudies">
              Case Studies
            </a>
<a className="text-xs uppercase tracking-[0.22em] text-[#62727b] hover:text-[#0e1720] transition-colors" href="/pricing">
              Pricing
            </a>
</nav>
<div className="hidden lg:flex items-center gap-3 z-10">
<div className="hidden xl:flex items-center gap-2 text-xs uppercase text-[#708089] tracking-[0.2em]">
<span className="h-2 w-2 rounded-full bg-[#1dd1a1] shadow-[0_0_14px_rgba(29,209,161,0.9)]"></span>
              24/7 active
            </div>
<a className="inline-flex items-center justify-center uppercase text-xs text-white tracking-[0.22em] bg-[#0e1720] h-11 border border-[#0e1720] rounded-full px-5 transition-all hover:bg-[#0d6e63] hover:border-[#0d6e63]" href="/booknow">
              Book now
            </a>
</div>
<button aria-expanded="false" aria-label="Open menu" className="lg:hidden relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d8e3e1] bg-white/70 text-[#0e1720]" id="mobileToggle"><iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon></button>
</div>
<div className="hidden mt-3 rounded-[1.75rem] border border-white/70 bg-[rgba(244,247,248,0.92)] backdrop-blur-xl shadow-[0_18px_50px_rgba(14,23,32,0.08)] p-4" id="mobileMenu">
<div className="flex flex-col gap-2">
<a className="px-4 py-3 rounded-2xl text-xs uppercase tracking-[0.22em] text-[#0d6e63] bg-white/60 font-semibold" href="#hero">
              Home
            </a>
<a className="px-4 py-3 rounded-2xl text-xs uppercase tracking-[0.22em] text-[#0e1720] hover:bg-white/70" href="#services">
              Services
            </a>
<a className="px-4 py-3 rounded-2xl text-xs uppercase tracking-[0.22em] text-[#0e1720] hover:bg-white/70" href="#case-studies">
              Case Studies
            </a>
<a className="px-4 py-3 rounded-2xl text-xs uppercase tracking-[0.22em] text-[#0e1720] hover:bg-white/70" href="#pricingplans">
              Pricing
            </a>
<div className="h-px bg-[#dbe6e4] my-2"></div>
<a className="inline-flex items-center justify-center h-12 rounded-full bg-[#0e1720] px-5 text-xs uppercase tracking-[0.22em] text-white" href="/booknow">
              Book now
            </a>
</div>
</div>
</div>
</header>
<main className="">

<section className="overflow-hidden border-b border-[#dce7e5] relative" id="hero">

<div className="absolute inset-0 z-0 overflow-hidden">
<img alt="Plumber repairing under sink" className="absolute inset-0 w-full h-full object-cover scale-[1.02]" data-parallax="" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9e0a21d9-caab-4b42-89f7-1467cb38a7c7_1600w.png"/>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(244,247,248,0.16),transparent_24%),linear-gradient(180deg,rgba(14,23,32,0.18)_0%,rgba(14,23,32,0.08)_25%,rgba(14,23,32,0.52)_72%,rgba(14,23,32,0.82)_100%)]"></div>
<div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,23,32,0.46)_0%,rgba(14,23,32,0.18)_34%,rgba(14,23,32,0.04)_55%,rgba(14,23,32,0.2)_100%)]"></div>
</div>

<div className="relative z-10 max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-12 sm:pt-36 sm:pb-12 lg:pt-40 lg:pb-16">
<div className="max-w-[58rem] pl-4 sm:pl-8 lg:pl-8 mt-8 sm:mt-10">
<div className="hero-item inline-flex bg-white/60 w-max rounded-full mb-1 py-1.5 pl-1.5 pr-5 shadow-sm items-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg,rgba(255,255,255,0.92),rgba(17,24,39,0.08))', -BorderRadiusBefore: '9999px'}}>
<div className="flex -space-x-2 mr-3">
<img alt="MetroFix plumber" className="w-6 h-6 object-cover border-2 border-white rounded-full" src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=320&amp;q=80"/>
<img alt="MetroFix technician" className="w-6 h-6 object-cover border-2 border-white rounded-full" src="https://images.unsplash.com/photo-1644437687093-8a01d1721fae?w=320&amp;q=80"/>
<img alt="MetroFix specialist" className="w-6 h-6 object-cover border-2 border-white rounded-full" src="https://images.unsplash.com/photo-1670849871955-f3baae828a53?w=320&amp;q=80"/>
<div className="w-6 h-6 rounded-full border-2 border-white bg-[#0e1720] text-white flex items-center justify-center text-[9px] font-semibold tracking-tight">
                  2k+
                </div>
</div>
<span className="text-xs font-medium text-[#5f6f77] tracking-wide">
<span className="text-[#0e1720]">Trusted crews</span>
                dispatched daily
              </span>
</div>
<p className="hero-item uppercase text-xs text-slate-300 tracking-[0.24em] mt-4">
              Plumbing &amp; Maintenance. Dispatched.
            </p>
<h1 className="hero-item mt-4 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] text-slate-50 tracking-tight" style={{fontFamily: '\'Instrument Serif\',serif'}}>
              Your NYC home,
              <span className="italic">engineered</span>
              to flow.
            </h1>
<p className="hero-item mt-7 text-base sm:text-lg font-light leading-8 text-slate-100 max-w-[38rem]">
              Licensed plumbing and essential home repairs with flat-rate
              pricing, clearer arrival windows, and neighborhood-based dispatch
              in under an hour for most urgent jobs.
            </p>
<div className="hero-item flex flex-col sm:flex-row gap-4 mt-9 gap-x-4 gap-y-4">
<a className="inline-flex items-center justify-center gap-3 uppercase text-xs tracking-[0.22em] rounded-full px-6 py-3.5 transition-all duration-300 hover:-translate-y-0.5" href="/booknow" style={{background: 'radial-gradient(circle at 10% 0%,#d9fbf2 0%,#59d6bb 45%,#0d6e63 100%)', boxShadow: '0 15px 25px -10px rgba(13,110,99,.55),inset 0 4px 8px rgba(255,255,255,.55),inset 0 -4px 8px rgba(7,91,82,.4)'}}>
<span className="font-medium text-[#072a28] tracking-tight">
                  Book now
                </span>
<span className="flex items-center justify-center bg-black/10 rounded-full px-3 py-1">
<iconify-icon className="text-lg text-[#072a28]" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</span>
</a>
<a className="inline-flex items-center justify-center gap-2 text-sm font-medium text-[#0e1720] bg-slate-50 rounded-full px-6 py-3.5 transition-all hover:bg-white/90" href="/pricing" style={{boxShadow: '0 18px 35px rgba(31,41,55,.08),0 0 0 1px rgba(209,213,219,.32)', position: 'relative', -BorderGradient: 'linear-gradient(180deg,rgba(255,255,255,0.95),rgba(17,24,39,0.16),rgba(255,255,255,0.85))', -BorderRadiusBefore: '9999px'}}>
<span className="tracking-tight">View plans</span>
<iconify-icon className="text-base text-[#0d6e63]" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="hero-item grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[58rem] border-t border-[#dce7e5]/50 mt-12 pt-6">
<div>
<p className="uppercase text-xs text-slate-200 tracking-[0.18em] mb-2">
                  Arrival promise
                </p>
<p className="text-sm text-slate-300">
                  Under 60 minutes for priority dispatch zones
                </p>
</div>
<div>
<p className="uppercase text-xs text-slate-100 tracking-[0.18em] mb-2">
                  Pricing model
                </p>
<p className="text-sm text-slate-200">
                  Flat-rate, pre-approved before work begins
                </p>
</div>
<div>
<p className="uppercase text-xs text-slate-200 tracking-[0.18em] mb-2">
                  Coverage
                </p>
<p className="text-sm text-slate-200">
                  Homes, rentals, co-ops, and small facilities
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#f6f9f8] border-b border-[#dce7e5]" id="services">
<div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
<div className="grid lg:grid-cols-[0.34fr_1fr] gap-10 lg:gap-16 items-end mb-10 lg:mb-14">
<div>
<div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-[#62727b] mb-6">
<span className="inline-block h-2 w-2 rounded-full bg-[#0d6e63]"></span>
                Service menu
              </div>
<p className="max-w-[15rem] text-sm leading-7 text-[#6f7f87] font-light">
                Transparent pricing. Clear scope. No vague estimates and no
                surprise line items.
              </p>
</div>
<div className="">
<h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#0e1720]" style={{fontFamily: '\'Instrument Serif\',serif'}}>
                What do you need fixed?
              </h2>
<p className="mt-5 max-w-[42rem] text-base leading-8 text-[#52636b] font-light">
                Choose the issue, get a fair starting quote, and we'll match you
                with the right licensed pro already moving through your borough.
              </p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">

<div className="service-card group rounded-[1.75rem] border border-[#dde8e6] bg-white/80 p-3 sm:p-4 shadow-[0_14px_34px_rgba(14,23,32,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(14,23,32,0.08)]">
<div className="relative h-44 rounded-[1.2rem] overflow-hidden">
<img alt="Leak repair service" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bf0e9d8b-126b-4fe4-96af-ef38f725b8a9_3840w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent"></div>
<div className="absolute top-3 right-3 text-xs uppercase tracking-[0.18em] text-white/80">
                  01
                </div>
<div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white">
<iconify-icon className="text-xl" icon="solar:drop-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-xl" height="20" icon="solar:waterdrop-outline" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)'}} width="20"></iconify-icon>
</div>
</div>
<h3 className="mt-5 text-2xl tracking-tight text-[#0e1720]">
                Drips &amp; Leaks
              </h3>
<p className="mt-3 text-sm leading-7 text-[#5b6b73] font-light">
                Faucets, showerheads, shutoff valves, and exposed pipe repair.
              </p>
<div className="inline-flex uppercase text-xs text-[#0d6e63] tracking-[0.18em] mt-5 gap-x-2 gap-y-2 items-center" onclick="window.location.href='/servicedetails'" role="button">
                Most booked
                <iconify-icon className="text-base" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="service-card group rounded-[1.75rem] border border-[#dde8e6] bg-white/80 p-3 sm:p-4 shadow-[0_14px_34px_rgba(14,23,32,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(14,23,32,0.08)]">
<div className="relative h-44 rounded-[1.2rem] overflow-hidden">
<img alt="Drain clearing service" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e75c23a7-b370-428c-8235-ff2eced08e3c_3840w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent"></div>
<div className="absolute top-3 right-3 text-xs uppercase tracking-[0.18em] text-white/80">
                  02
                </div>
<div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white">
<iconify-icon className="text-xl" height="20" icon="solar:waterdrops-linear" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)'}} width="20"></iconify-icon>
</div>
</div>
<h3 className="mt-5 text-2xl tracking-tight text-[#0e1720]">
                Drain Clearing
              </h3>
<p className="mt-3 text-sm leading-7 text-[#5b6b73] font-light">
                Sinks, toilets, tubs, and main-line snaking with clear scope
                before work.
              </p>
<div className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#0d6e63]">
                Same-day ready
                <iconify-icon className="text-base" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="service-card group rounded-[1.75rem] border border-[#dde8e6] bg-white/80 p-3 sm:p-4 shadow-[0_14px_34px_rgba(14,23,32,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(14,23,32,0.08)]">
<div className="relative h-44 rounded-[1.2rem] overflow-hidden">
<img alt="Heating and gas service" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32f634ed-1f1d-488b-85cd-dbd94c57fe9a_3840w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent"></div>
<div className="absolute top-3 right-3 text-xs uppercase tracking-[0.18em] text-white/80">
                  03
                </div>
<div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white">
<iconify-icon className="text-xl" icon="solar:fire-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<h3 className="mt-5 text-2xl tracking-tight text-[#0e1720]">
                Heating &amp; Gas
              </h3>
<p className="mt-3 text-sm leading-7 text-[#5b6b73] font-light">
                Boiler resets, radiator balancing, gas checks, and LL152
                support.
              </p>
<div className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#0d6e63]">
                Certified service
                <iconify-icon className="text-base" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="service-card group rounded-[1.75rem] border border-[#dde8e6] bg-white/80 p-3 sm:p-4 shadow-[0_14px_34px_rgba(14,23,32,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(14,23,32,0.08)]">
<div className="relative h-44 rounded-[1.2rem] overflow-hidden">
<img alt="Bathroom installs service" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4e898250-a15e-4689-96b7-c5f77aa9cece_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent"></div>
<div className="absolute top-3 right-3 text-xs uppercase tracking-[0.18em] text-white/80">
                  04
                </div>
<div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white">
<iconify-icon className="text-xl" icon="solar:slider-vertical-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<h3 className="mt-5 text-2xl tracking-tight text-[#0e1720]">
                Installs
              </h3>
<p className="mt-3 text-sm leading-7 text-[#5b6b73] font-light">
                Vanities, toilets, fixtures, and smart home water sensor
                installs.
              </p>
<div className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#0d6e63]">
                Upgrade-ready
                <iconify-icon className="text-base" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="service-card group rounded-[1.75rem] border border-[#dde8e6] bg-white/80 p-3 sm:p-4 shadow-[0_14px_34px_rgba(14,23,32,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(14,23,32,0.08)]">
<div className="relative h-44 rounded-[1.2rem] overflow-hidden">
<img alt="Emergency plumbing service" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fce9e9b7-bbd0-49c8-8558-3258c3d2ccfb_3840w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute top-3 right-3 text-xs uppercase tracking-[0.18em] text-white/80">
                  05
                </div>
<div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white">
<iconify-icon className="text-xl" icon="solar:danger-triangle-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<h3 className="mt-5 text-2xl tracking-tight text-[#0e1720]">
                Emergency Fix
              </h3>
<p className="mt-3 text-sm leading-7 text-[#5b6b73] font-light">
                Burst pipes, flooding, active overflows, and rapid shut-off
                response.
              </p>
<div className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#0d6e63]">
                Dispatch priority
                <iconify-icon className="text-base" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="service-card group rounded-[1.75rem] border border-[#dde8e6] bg-white/80 p-3 sm:p-4 shadow-[0_14px_34px_rgba(14,23,32,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(14,23,32,0.08)]">
<div className="relative h-44 rounded-[1.2rem] overflow-hidden">
<img alt="Appliance setup service" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/675d546b-8c7f-4447-a7a8-284637e102af_3840w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent"></div>
<div className="absolute top-3 right-3 text-xs uppercase tracking-[0.18em] text-white/80">
                  06
                </div>
<div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white">
<iconify-icon className="text-xl" icon="solar:smart-home-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<h3 className="mt-5 text-2xl tracking-tight text-[#0e1720]">
                Appliance Setup
              </h3>
<p className="mt-3 text-sm leading-7 text-[#5b6b73] font-light">
                Dishwashers, washers, ice-line hookups, and clean final testing.
              </p>
<div className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#0d6e63]">
                New install support
                <iconify-icon className="text-base" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-24 bg-white border-b border-[#dce7e5] pt-16 pb-16" id="process">
<div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-12 lg:mb-20 max-w-2xl">
<h2 className="text-4xl lg:text-5xl text-[#0d1720]" style={{fontFamily: '\'Instrument Serif\',serif'}}>
              How it works
            </h2>
</div>
<div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

<div className="hidden lg:block sticky top-32">
<div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] border border-[#dde8e6] bg-white/80 p-8 shadow-[0_18px_44px_rgba(14,23,32,0.05)]">
<div className="process-media absolute inset-8 opacity-100 transition-opacity duration-700" data-step-media="1" style={{zIndex: '10'}}>
<img className="h-full w-full object-cover rounded-[1.5rem]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/817177aa-f4f4-46ed-86d2-025e46c4c342_3840w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0d1720]/60 via-transparent to-transparent rounded-[1.5rem]"></div>
<div className="text-white border border-white/20 bg-white/12 rounded-2xl px-4 py-3 absolute right-6 bottom-6 left-6">
<p className="text-xs uppercase tracking-[0.18em] text-white/70">
                      Step 01
                    </p>
<p className="text-lg tracking-tight mt-1">
                      Describe the issue, get clarity fast.
                    </p>
</div>
</div>
<div className="process-media absolute inset-8 opacity-0 transition-opacity duration-700" data-step-media="2" style={{zIndex: '0'}}>
<img className="h-full w-full object-cover rounded-[1.5rem]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dd8e9ed6-4151-496f-98c4-bfdc022ac48e_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0d1720]/60 via-transparent to-transparent rounded-[1.5rem]"></div>
<div className="text-white border border-white/20 bg-white/12 rounded-2xl px-4 py-3 absolute right-6 bottom-6 left-6">
<p className="text-xs uppercase tracking-[0.18em] text-white/70">
                      Step 02
                    </p>
<p className="text-lg tracking-tight mt-1">
                      Real-time tracking of your assigned pro.
                    </p>
</div>
</div>
<div className="process-media absolute inset-8 opacity-0 transition-opacity duration-700" data-step-media="3" style={{zIndex: '0'}}>
<img className="h-full w-full object-cover rounded-[1.5rem]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b961502-f510-4ad0-96b9-e2f04875ca48_3840w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0d1720]/60 via-transparent to-transparent rounded-[1.5rem]"></div>
<div className="text-white border border-white/20 bg-white/12 rounded-2xl px-4 py-3 absolute right-6 bottom-6 left-6">
<p className="text-xs uppercase tracking-[0.18em] text-white/70">
                      Step 03
                    </p>
<p className="text-lg tracking-tight mt-1">
                      Issue resolved with a digital service record.
                    </p>
</div>
</div>
</div>
</div>

<div className="space-y-16 lg:space-y-[60vh] lg:py-[20vh]">
<div className="process-step transition-all duration-300" data-step="1">
<div className="lg:hidden w-full aspect-[4/5] mb-8 overflow-hidden rounded-[2rem] border border-[#dde8e6] p-4 bg-white shadow-sm">
<img className="w-full h-full object-cover rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b961502-f510-4ad0-96b9-e2f04875ca48_1600w.png"/>
</div>
<span className="text-[#0d6e63] font-medium text-lg uppercase tracking-widest">
                  01. Request
                </span>
<h3 className="text-3xl lg:text-4xl mt-4" style={{fontFamily: '\'Instrument Serif\',serif'}}>
                  Describe the Problem
                </h3>
<p className="text-gray-600 mt-4 lg:mt-6 text-lg leading-relaxed">
                  Use our instant portal to log your issue. We'll analyze the
                  requirements and prepare the right tools for the job.
                </p>
</div>
<div className="process-step transition-all duration-300" data-step="2">
<div className="lg:hidden w-full aspect-[4/5] my-8 overflow-hidden rounded-[2rem] border border-[#dde8e6] p-4 bg-white shadow-sm">
<img className="w-full h-full object-cover rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dd8e9ed6-4151-496f-98c4-bfdc022ac48e_1600w.png"/>
</div>
<span className="text-[#0d6e63] font-medium text-lg uppercase tracking-widest">
                  02. Dispatch
                </span>
<h3 className="text-3xl lg:text-4xl mt-4" style={{fontFamily: '\'Instrument Serif\',serif'}}>
                  Matched with a Local Pro
                </h3>
<p className="text-gray-600 mt-4 lg:mt-6 text-lg leading-relaxed">
                  We find the closest licensed expert in your borough. You'll
                  receive a real-time ETA and professional profile.
                </p>
</div>
<div className="process-step transition-all duration-300" data-step="3">
<div className="lg:hidden w-full aspect-[4/5] my-8 overflow-hidden rounded-[2rem] border border-[#dde8e6] p-4 bg-white shadow-sm">
<img className="w-full h-full object-cover rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/817177aa-f4f4-46ed-86d2-025e46c4c342_1600w.png"/>
</div>
<span className="text-[#0d6e63] font-medium text-lg uppercase tracking-widest">
                  03. Fix
                </span>
<h3 className="text-3xl lg:text-4xl mt-4" style={{fontFamily: '\'Instrument Serif\',serif'}}>
                  Transparent Resolution
                </h3>
<p className="text-gray-600 mt-4 lg:mt-6 text-lg leading-relaxed">
                  Work is completed with flat-rate pricing. You only pay once
                  the job is finished and you are 100% satisfied.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-b border-[#dce7e5] bg-[#f7faf9]" id="proof">
<div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
<div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-10">
<div className="sm:p-8 lg:p-10 rounded-[2rem] p-6">
<div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-[#62727b] mb-6">
<span className="inline-block h-2 w-2 rounded-full bg-[#0d6e63]"></span>
                Trusted in your neighborhood
              </div>
<h2 className="text-4xl sm:text-5xl text-[#0e1720] tracking-tight" style={{fontFamily: '\'Instrument Serif\',serif'}}>
                Ready to fix it?
              </h2>
<div className="grid gap-4 mt-8">
<div className="bg-[#f8fbfa] border border-[#e0e9e7] rounded-[1.5rem] p-5">
<p className="text-xs uppercase tracking-[0.18em] text-[#7a8a92]">
                    Rating
                  </p>
<div className="flex items-end gap-3 mt-2">
<span className="text-4xl sm:text-5xl tracking-tight text-[#0e1720]">
                      4.9/5
                    </span>
<span className="text-sm text-[#5a6a72] mb-1">
                      from 2.5k neighbors
                    </span>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div className="bg-[#f8fbfa] border border-[#e0e9e7] rounded-[1.5rem] p-5">
<p className="text-xs uppercase tracking-[0.18em] text-[#7a8a92]">
                      Average arrival
                    </p>
<p className="mt-2 text-3xl tracking-tight text-[#0e1720]">
                      42 min
                    </p>
</div>
<div className="rounded-[1.5rem] border border-[#e0e9e7] bg-[#f8fbfa] p-5">
<p className="text-xs uppercase tracking-[0.18em] text-[#7a8a92]">
                      Compliance
                    </p>
<p className="mt-2 text-3xl tracking-tight text-[#0e1720]">
                      100%
                    </p>
<p className="mt-1 text-sm text-[#5a6a72]">
                      Licensed &amp; NYC insured
                    </p>
</div>
</div>
</div>
</div>
<div className="flex flex-col bg-white/60 border border-[#dce7e5] rounded-[2rem] p-5 sm:p-8 lg:p-10 gap-6 shadow-[0_20px_50px_rgba(14,23,32,0.03)] backdrop-blur-xl">
<div className="flex flex-wrap items-center justify-between gap-3">
<span className="text-[0.6rem] uppercase tracking-[0.24em] text-[#5f6f77] font-semibold">
                  Asset Protection Index
                </span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-[#ecf6f3] px-2.5 py-1 text-[0.55rem] uppercase tracking-[0.2em] text-[#0d6e63] font-medium border border-[#dce7e5]">
<span className="w-1.5 h-1.5 rounded-full bg-[#1dd1a1] shadow-[0_0_6px_rgba(29,209,161,0.6)]"></span>
                  Verified Active
                </span>
</div>
<div className="rounded-[1.25rem] sm:rounded-[1.5rem] border border-[#dce7e5] bg-white shadow-sm p-5 sm:p-6">
<p className="text-[0.6rem] uppercase tracking-[0.22em] text-[#5f6f77] mb-3 font-semibold">
                  Master Liability Coverage
                </p>
<div className="flex flex-col sm:flex-row sm:items-end gap-1 sm:gap-3">
<span style={{fontFamily: '\'Instrument Serif\',serif', fontSize: 'clamp(2.5rem,5vw,4.2rem)', color: '#0e1720', lineHeight: '1'}}>
                    $5M+
                  </span>
<span className="text-[#5f6f77] text-xs sm:text-sm mb-1 sm:mb-2 font-medium">
                    aggregate policy
                  </span>
</div>
<p className="text-[#52636b] text-xs leading-5 sm:leading-6 mt-3 font-light">
                  Full coverage for your unit and all neighboring apartments on
                  every dispatch.
                </p>
</div>
<div className="grid grid-cols-2 gap-3 sm:gap-4">
<div className="rounded-[1rem] sm:rounded-[1.25rem] border border-[#dce7e5] bg-white shadow-sm p-4 sm:p-5">
<p className="text-[0.55rem] uppercase tracking-[0.2em] text-[#5f6f77] mb-2 font-semibold">
                    NYC License #
                  </p>
<p style={{fontFamily: '\'Instrument Serif\',serif', fontSize: 'clamp(1.75rem,3vw,2rem)', color: '#0e1720', lineHeight: '1'}}>
                    MP-1042
                  </p>
<p className="text-[#5f6f77] text-[0.65rem] mt-1 font-medium">
                    Master Plumber — Active
                  </p>
</div>
<div className="rounded-[1rem] sm:rounded-[1.25rem] border border-[#dce7e5] bg-white shadow-sm p-4 sm:p-5">
<p className="text-[0.55rem] uppercase tracking-[0.2em] text-[#5f6f77] mb-2 font-semibold">
                    DOB Registered
                  </p>
<p style={{fontFamily: '\'Instrument Serif\',serif', fontSize: 'clamp(1.75rem,3vw,2rem)', color: '#0e1720', lineHeight: '1'}}>
                    2019
                  </p>
<p className="text-[#5f6f77] text-[0.65rem] mt-1 font-medium">
                    NYC Buildings Dept.
                  </p>
</div>
<div className="rounded-[1rem] sm:rounded-[1.25rem] border border-[#dce7e5] bg-white shadow-sm p-4 sm:p-5">
<p className="text-[0.55rem] uppercase tracking-[0.2em] text-[#5f6f77] mb-2 font-semibold">
                    BG Checks
                  </p>
<p style={{fontFamily: '\'Instrument Serif\',serif', fontSize: 'clamp(1.75rem,3vw,2rem)', color: '#0e1720', lineHeight: '1'}}>
                    100%
                  </p>
<p className="text-[#5f6f77] text-[0.65rem] mt-1 font-medium">
                    All field reps cleared
                  </p>
</div>
<div className="rounded-[1rem] sm:rounded-[1.25rem] border border-[#dce7e5] bg-white shadow-sm p-4 sm:p-5">
<p className="text-[0.55rem] uppercase tracking-[0.2em] text-[#5f6f77] mb-2 font-semibold">
                    Digital Records
                  </p>
<p style={{fontFamily: '\'Instrument Serif\',serif', fontSize: 'clamp(1.75rem,3vw,2rem)', color: '#0e1720', lineHeight: '1'}}>
                    PDF
                  </p>
<p className="text-[#5f6f77] text-[0.65rem] mt-1 font-medium">
                    Signed &amp; sent instantly
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-b border-[#dce7e5] bg-[#f4f8f7]" id="plans">
<div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
<div className="max-w-[48rem] mb-10 lg:mb-14">
<div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-[#62727b] mb-6">
<span className="inline-block h-2 w-2 rounded-full bg-[#0d6e63]"></span>
              Maintenance plans
            </div>
<h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#0e1720]" style={{fontFamily: '\'Instrument Serif\',serif'}}>
              Prevent the emergency.
            </h2>
<p className="mt-5 max-w-[42rem] text-base leading-8 text-[#52636b] font-light">
              The cheapest flood is the one that never happens. Build inspection
              rhythm, get priority scheduling, and reduce the stress of surprise
              breakdowns.
            </p>
</div>
<div className="relative overflow-hidden rounded-[2rem] border border-[#dde8e6] bg-[#eef3f2] px-4 py-10 sm:px-8 lg:px-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[420px] bg-white/80 blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative z-10 w-full max-w-5xl mx-auto mb-12 flex flex-col items-center">
<div className="flex items-center justify-center gap-5 mb-8">
<div className="flex gap-1.5 opacity-60">
<div className="dot-light w-1 h-1 rounded-full bg-black opacity-20"></div>
<div className="dot-light w-1 h-1 rounded-full bg-black opacity-20"></div>
<div className="dot-light w-1 h-1 rounded-full bg-black opacity-20"></div>
</div>
<div className="w-14 h-14 bg-gradient-to-b from-white to-[#f4f4f5] rounded-2xl flex items-center justify-center" style={{boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.02),inset 0 0 0 1px rgba(0,0,0,0.04),0 10px 15px -3px rgba(0,0,0,0.05)'}}>
<iconify-icon className="text-2xl text-[#0d6e63]" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div className="flex gap-1.5 opacity-60">
<div className="dot-light w-1 h-1 rounded-full bg-black opacity-20"></div>
<div className="dot-light w-1 h-1 rounded-full bg-black opacity-20"></div>
<div className="dot-light w-1 h-1 rounded-full bg-black opacity-20"></div>
</div>
</div>
<div className="text-center h-20">
<h3 className="text-3xl sm:text-4xl font-light text-[#18181b] tracking-tight mb-3">
<span id="plansTypewriter">M</span>
<span className="animate-pulse">_</span>
</h3>
<p className="text-base text-[#52525b] font-light max-w-lg mx-auto">
                  Pick a clean maintenance rhythm that prevents surprise
                  failures and keeps priority support close.
                </p>
</div>
</div>
<div className="relative z-10 w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="rounded-3xl bg-gradient-to-b from-white to-[#f8f8f8] p-8 flex flex-col transition-all duration-500 hover:-translate-y-2 shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_0_0_1px_rgba(0,0,0,0.04),0_10px_30px_-10px_rgba(0,0,0,0.1)]">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-2xl text-[#a1a1aa]" icon="solar:home-linear"></iconify-icon>
<h4 className="text-lg font-normal text-[#18181b]">
                    Home Wellness
                  </h4>
</div>
<div className="text-4xl tracking-tight font-light text-[#18181b] mb-1">
                  $29
                  <span className="text-sm text-[#a1a1aa]">/mo</span>
</div>
<p className="text-sm text-[#52525b] font-light mb-8">
                  Ideal for apartments, co-ops, and everyday home protection.
                </p>
<a className="text-sm font-light text-[#18181b] text-center bg-gradient-to-b from-white to-[#f4f4f5] w-full rounded-full mb-8 py-3 transition-all active:scale-[0.98]" href="#dispatch" style={{boxShadow: 'inset 0 1px 1px #fff,0 5px 15px -5px rgba(0,0,0,0.1),0 0 0 1px rgba(0,0,0,0.06)'}}>
                  Start Home Plan
                </a>
<div className="h-px w-full mb-8" style={{background: 'linear-gradient(90deg,transparent,rgba(0,0,0,0.08),transparent)'}}></div>
<ul className="space-y-4 flex-1 text-sm font-light text-[#52525b]">
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-[#a1a1aa] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                    Annual leak-risk review
                  </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-[#a1a1aa] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                    Priority booking queue
                  </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-[#a1a1aa] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                    10% off standard repairs
                  </li>
</ul>
</div>

<div className="relative rounded-3xl bg-gradient-to-b from-white to-[#f8f8f8] p-8 flex flex-col md:-translate-y-4 transition-all duration-500 hover:-translate-y-6 shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_0_0_1px_rgba(13,110,99,0.28),0_20px_40px_-15px_rgba(13,110,99,0.18)]">
<div className="absolute top-4 left-4 w-1 h-1 rounded-full bg-[#0d6e63]/40 animate-pulse"></div>
<div className="absolute top-4 right-4 w-1 h-1 rounded-full bg-[#0d6e63]/40 animate-pulse" style={{animationDelay: '.5s'}}></div>
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-2xl text-[#0d6e63]" icon="solar:buildings-2-linear"></iconify-icon>
<h4 className="text-lg font-normal text-[#18181b]">
                    Property Flow
                  </h4>
<span className="ml-auto px-2.5 py-1 rounded-full bg-[#dff7f1] text-[#0d6e63] text-xs border border-[#c9ece3]">
                    TRENDING
                  </span>
</div>
<div className="text-4xl tracking-tight font-light text-[#18181b] mb-1">
                  $79
                  <span className="text-sm text-[#a1a1aa]">/mo</span>
</div>
<p className="text-sm text-[#52525b] font-light mb-8">
                  Built for landlords, brownstones, and small multi-unit
                  operations.
                </p>
<a className="text-sm font-light text-white text-center bg-gradient-to-b from-[#1bbf9d] to-[#0d6e63] w-full rounded-full mb-8 py-3 transition-all active:scale-[0.98]" href="#dispatch" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.4),0 10px 20px -5px rgba(13,110,99,0.35),0 0 0 1px #0d6e63'}}>
                  Choose Property Flow
                </a>
<div className="h-px w-full mb-8" style={{background: 'linear-gradient(90deg,transparent,rgba(13,110,99,0.2),transparent)'}}></div>
<ul className="space-y-4 flex-1 text-sm font-light text-[#52525b]">
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-[#0d6e63] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                    Seasonal inspections
                  </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-[#0d6e63] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                    Compliance reminders
                  </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-[#0d6e63] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                    Dedicated service contact
                  </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-[#0d6e63] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                    Multi-site scheduling
                  </li>
</ul>
</div>

<div className="rounded-3xl bg-gradient-to-b from-white to-[#f8f8f8] p-8 flex flex-col transition-all duration-500 hover:-translate-y-2 shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_0_0_1px_rgba(0,0,0,0.04),0_10px_30px_-10px_rgba(0,0,0,0.1)]">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-2xl text-[#a1a1aa]" icon="solar:server-square-linear"></iconify-icon>
<h4 className="text-lg font-normal text-[#18181b]">
                    Custom Coverage
                  </h4>
</div>
<div className="text-4xl tracking-tight font-light text-[#18181b] mb-1">
                  Tailored
                </div>
<p className="text-sm text-[#52525b] font-light mb-8">
                  For larger facilities, mixed-use buildings, and recurring site
                  operations.
                </p>
<a className="text-sm font-light text-[#18181b] text-center bg-gradient-to-b from-white to-[#f4f4f5] w-full rounded-full mb-8 py-3 transition-all active:scale-[0.98]" href="#dispatch" style={{boxShadow: 'inset 0 1px 1px #fff,0 5px 15px -5px rgba(0,0,0,0.1),0 0 0 1px rgba(0,0,0,0.06)'}}>
                  Talk to MetroFix
                </a>
<div className="h-px w-full mb-8" style={{background: 'linear-gradient(90deg,transparent,rgba(0,0,0,0.08),transparent)'}}></div>
<ul className="space-y-4 flex-1 text-sm font-light text-[#52525b]">
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-[#a1a1aa] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                    Recurring maintenance programs
                  </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-[#a1a1aa] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                    Preventive site audits
                  </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-[#a1a1aa] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                    24/7 escalation routing
                  </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#fafafa] border-b border-[#dce7e5] pt-20 pb-24 relative" id="testimonials">
<div className="absolute top-[10%] left-0 right-0 w-full text-center pointer-events-none select-none z-0">
<h2 className="text-[18vw] font-semibold tracking-tight text-neutral-100 leading-none">
            Client Stories
          </h2>
</div>
<div className="md:px-12 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto px-6 relative items-end">
<div className="lg:col-span-4 flex flex-col h-full justify-start">
<div className="mt-4 mb-8 scroll-reveal">
<span className="text-xs font-semibold text-[#0d6e63] uppercase tracking-widest mb-4 block">
                [ TRUSTED BY NYC HOMES ]
              </span>
<p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
                Real repairs, real apartments, real buildings, and real people
                who needed clarity as much as they needed the fix.
              </p>
</div>
</div>
<div className="lg:col-span-8 relative overflow-hidden" style={{maskImage: 'linear-gradient(90deg,transparent,black 18%,black 82%,transparent)', WebkitMaskImage: 'linear-gradient(90deg,transparent,black 18%,black 82%,transparent)'}}>
<div className="testimonial-marquee flex pb-4 gap-6">
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client kitchen" className="transform transition-transform duration-700 group-hover:translate-x-3 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cf228e6-d520-4922-85f3-61a7683a9d9c_3840w.png"/>
<div className="text-[10px] uppercase font-semibold text-[#0d6e63] tracking-wide bg-white rounded-full px-2 py-1 absolute top-2 right-2">
                    [4.9]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "The booking took less than a minute, and the tracking link
                  removed the usual guessing. It felt organized from the start."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Maya R." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Maya R.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    May 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client apartment repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32afe7b1-ae85-4aaf-9fa2-6f9169739759_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Seeing the technician on the way made a bigger difference
                  than I expected. The whole experience felt calmer."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Daniel K." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Daniel K.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client bathroom repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cab6970a-7c45-4f7f-bc97-be8994843daa_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [4.8]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "What I liked most was the closeout record. I could send it to
                  our building manager immediately after the visit."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Jenna T." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1608232543731-44d2ebe84dd7?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Jenna T.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client home service" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c5af384-e113-48d8-a770-61ebaba3288e_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Everything followed the exact order this page described. That
                  consistency made the brand feel credible."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Chris L." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Chris L.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Feb 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client kitchen" className="transform transition-transform duration-700 group-hover:translate-x-3 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cf228e6-d520-4922-85f3-61a7683a9d9c_3840w.png"/>
<div className="text-[10px] uppercase font-semibold text-[#0d6e63] tracking-wide bg-white rounded-full px-2 py-1 absolute top-2 right-2">
                    [4.9]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "The booking took less than a minute, and the tracking link
                  removed the usual guessing. It felt organized from the start."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Maya R." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Maya R.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    May 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client apartment repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32afe7b1-ae85-4aaf-9fa2-6f9169739759_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Seeing the technician on the way made a bigger difference
                  than I expected. The whole experience felt calmer."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Daniel K." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Daniel K.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client bathroom repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cab6970a-7c45-4f7f-bc97-be8994843daa_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [4.8]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "What I liked most was the closeout record. I could send it to
                  our building manager immediately after the visit."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Jenna T." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1608232543731-44d2ebe84dd7?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Jenna T.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client home service" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c5af384-e113-48d8-a770-61ebaba3288e_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Everything followed the exact order this page described. That
                  consistency made the brand feel credible."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Chris L." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Chris L.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Feb 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client kitchen" className="transform transition-transform duration-700 group-hover:translate-x-3 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cf228e6-d520-4922-85f3-61a7683a9d9c_3840w.png"/>
<div className="text-[10px] uppercase font-semibold text-[#0d6e63] tracking-wide bg-white rounded-full px-2 py-1 absolute top-2 right-2">
                    [4.9]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "The booking took less than a minute, and the tracking link
                  removed the usual guessing. It felt organized from the start."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Maya R." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Maya R.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    May 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client apartment repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32afe7b1-ae85-4aaf-9fa2-6f9169739759_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Seeing the technician on the way made a bigger difference
                  than I expected. The whole experience felt calmer."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Daniel K." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Daniel K.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client bathroom repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cab6970a-7c45-4f7f-bc97-be8994843daa_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [4.8]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "What I liked most was the closeout record. I could send it to
                  our building manager immediately after the visit."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Jenna T." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1608232543731-44d2ebe84dd7?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Jenna T.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client home service" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c5af384-e113-48d8-a770-61ebaba3288e_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Everything followed the exact order this page described. That
                  consistency made the brand feel credible."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Chris L." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Chris L.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Feb 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client kitchen" className="transform transition-transform duration-700 group-hover:translate-x-3 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cf228e6-d520-4922-85f3-61a7683a9d9c_3840w.png"/>
<div className="text-[10px] uppercase font-semibold text-[#0d6e63] tracking-wide bg-white rounded-full px-2 py-1 absolute top-2 right-2">
                    [4.9]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "The booking took less than a minute, and the tracking link
                  removed the usual guessing. It felt organized from the start."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Maya R." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Maya R.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    May 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client apartment repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32afe7b1-ae85-4aaf-9fa2-6f9169739759_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Seeing the technician on the way made a bigger difference
                  than I expected. The whole experience felt calmer."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Daniel K." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Daniel K.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client bathroom repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cab6970a-7c45-4f7f-bc97-be8994843daa_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [4.8]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "What I liked most was the closeout record. I could send it to
                  our building manager immediately after the visit."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Jenna T." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1608232543731-44d2ebe84dd7?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Jenna T.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client home service" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c5af384-e113-48d8-a770-61ebaba3288e_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Everything followed the exact order this page described. That
                  consistency made the brand feel credible."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Chris L." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Chris L.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Feb 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client kitchen" className="transform transition-transform duration-700 group-hover:translate-x-3 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cf228e6-d520-4922-85f3-61a7683a9d9c_3840w.png"/>
<div className="text-[10px] uppercase font-semibold text-[#0d6e63] tracking-wide bg-white rounded-full px-2 py-1 absolute top-2 right-2">
                    [4.9]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "The booking took less than a minute, and the tracking link
                  removed the usual guessing. It felt organized from the start."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Maya R." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Maya R.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    May 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client apartment repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32afe7b1-ae85-4aaf-9fa2-6f9169739759_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Seeing the technician on the way made a bigger difference
                  than I expected. The whole experience felt calmer."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Daniel K." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Daniel K.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client bathroom repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cab6970a-7c45-4f7f-bc97-be8994843daa_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [4.8]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "What I liked most was the closeout record. I could send it to
                  our building manager immediately after the visit."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Jenna T." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1608232543731-44d2ebe84dd7?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Jenna T.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client home service" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c5af384-e113-48d8-a770-61ebaba3288e_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Everything followed the exact order this page described. That
                  consistency made the brand feel credible."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Chris L." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Chris L.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Feb 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client kitchen" className="transform transition-transform duration-700 group-hover:translate-x-3 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cf228e6-d520-4922-85f3-61a7683a9d9c_3840w.png"/>
<div className="text-[10px] uppercase font-semibold text-[#0d6e63] tracking-wide bg-white rounded-full px-2 py-1 absolute top-2 right-2">
                    [4.9]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "The booking took less than a minute, and the tracking link
                  removed the usual guessing. It felt organized from the start."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Maya R." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Maya R.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    May 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client apartment repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32afe7b1-ae85-4aaf-9fa2-6f9169739759_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Seeing the technician on the way made a bigger difference
                  than I expected. The whole experience felt calmer."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Daniel K." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Daniel K.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client bathroom repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cab6970a-7c45-4f7f-bc97-be8994843daa_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [4.8]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "What I liked most was the closeout record. I could send it to
                  our building manager immediately after the visit."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Jenna T." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1608232543731-44d2ebe84dd7?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Jenna T.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client home service" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c5af384-e113-48d8-a770-61ebaba3288e_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Everything followed the exact order this page described. That
                  consistency made the brand feel credible."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Chris L." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Chris L.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Feb 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client kitchen" className="transform transition-transform duration-700 group-hover:translate-x-3 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cf228e6-d520-4922-85f3-61a7683a9d9c_3840w.png"/>
<div className="text-[10px] uppercase font-semibold text-[#0d6e63] tracking-wide bg-white rounded-full px-2 py-1 absolute top-2 right-2">
                    [4.9]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "The booking took less than a minute, and the tracking link
                  removed the usual guessing. It felt organized from the start."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Maya R." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Maya R.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    May 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client apartment repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32afe7b1-ae85-4aaf-9fa2-6f9169739759_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Seeing the technician on the way made a bigger difference
                  than I expected. The whole experience felt calmer."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Daniel K." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Daniel K.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client bathroom repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cab6970a-7c45-4f7f-bc97-be8994843daa_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [4.8]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "What I liked most was the closeout record. I could send it to
                  our building manager immediately after the visit."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Jenna T." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1608232543731-44d2ebe84dd7?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Jenna T.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client home service" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c5af384-e113-48d8-a770-61ebaba3288e_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Everything followed the exact order this page described. That
                  consistency made the brand feel credible."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Chris L." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Chris L.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Feb 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client kitchen" className="transform transition-transform duration-700 group-hover:translate-x-3 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cf228e6-d520-4922-85f3-61a7683a9d9c_3840w.png"/>
<div className="text-[10px] uppercase font-semibold text-[#0d6e63] tracking-wide bg-white rounded-full px-2 py-1 absolute top-2 right-2">
                    [4.9]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "The booking took less than a minute, and the tracking link
                  removed the usual guessing. It felt organized from the start."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Maya R." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Maya R.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    May 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client apartment repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32afe7b1-ae85-4aaf-9fa2-6f9169739759_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Seeing the technician on the way made a bigger difference
                  than I expected. The whole experience felt calmer."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Daniel K." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Daniel K.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client bathroom repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cab6970a-7c45-4f7f-bc97-be8994843daa_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [4.8]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "What I liked most was the closeout record. I could send it to
                  our building manager immediately after the visit."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Jenna T." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1608232543731-44d2ebe84dd7?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Jenna T.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client home service" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c5af384-e113-48d8-a770-61ebaba3288e_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Everything followed the exact order this page described. That
                  consistency made the brand feel credible."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Chris L." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Chris L.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Feb 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client kitchen" className="transform transition-transform duration-700 group-hover:translate-x-3 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cf228e6-d520-4922-85f3-61a7683a9d9c_3840w.png"/>
<div className="text-[10px] uppercase font-semibold text-[#0d6e63] tracking-wide bg-white rounded-full px-2 py-1 absolute top-2 right-2">
                    [4.9]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "The booking took less than a minute, and the tracking link
                  removed the usual guessing. It felt organized from the start."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Maya R." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Maya R.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    May 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client apartment repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32afe7b1-ae85-4aaf-9fa2-6f9169739759_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Seeing the technician on the way made a bigger difference
                  than I expected. The whole experience felt calmer."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Daniel K." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Daniel K.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client bathroom repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cab6970a-7c45-4f7f-bc97-be8994843daa_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [4.8]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "What I liked most was the closeout record. I could send it to
                  our building manager immediately after the visit."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Jenna T." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1608232543731-44d2ebe84dd7?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Jenna T.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client home service" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c5af384-e113-48d8-a770-61ebaba3288e_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Everything followed the exact order this page described. That
                  consistency made the brand feel credible."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Chris L." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Chris L.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Feb 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client kitchen" className="transform transition-transform duration-700 group-hover:translate-x-3 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cf228e6-d520-4922-85f3-61a7683a9d9c_3840w.png"/>
<div className="text-[10px] uppercase font-semibold text-[#0d6e63] tracking-wide bg-white rounded-full px-2 py-1 absolute top-2 right-2">
                    [4.9]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "The booking took less than a minute, and the tracking link
                  removed the usual guessing. It felt organized from the start."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Maya R." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Maya R.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    May 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client apartment repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32afe7b1-ae85-4aaf-9fa2-6f9169739759_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Seeing the technician on the way made a bigger difference
                  than I expected. The whole experience felt calmer."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Daniel K." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Daniel K.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client bathroom repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cab6970a-7c45-4f7f-bc97-be8994843daa_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [4.8]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "What I liked most was the closeout record. I could send it to
                  our building manager immediately after the visit."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Jenna T." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1608232543731-44d2ebe84dd7?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Jenna T.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client home service" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c5af384-e113-48d8-a770-61ebaba3288e_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Everything followed the exact order this page described. That
                  consistency made the brand feel credible."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Chris L." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Chris L.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Feb 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client kitchen" className="transform transition-transform duration-700 group-hover:translate-x-3 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cf228e6-d520-4922-85f3-61a7683a9d9c_3840w.png"/>
<div className="text-[10px] uppercase font-semibold text-[#0d6e63] tracking-wide bg-white rounded-full px-2 py-1 absolute top-2 right-2">
                    [4.9]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "The booking took less than a minute, and the tracking link
                  removed the usual guessing. It felt organized from the start."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Maya R." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Maya R.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    May 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client apartment repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32afe7b1-ae85-4aaf-9fa2-6f9169739759_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Seeing the technician on the way made a bigger difference
                  than I expected. The whole experience felt calmer."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Daniel K." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Daniel K.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client bathroom repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cab6970a-7c45-4f7f-bc97-be8994843daa_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [4.8]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "What I liked most was the closeout record. I could send it to
                  our building manager immediately after the visit."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Jenna T." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1608232543731-44d2ebe84dd7?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Jenna T.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client home service" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c5af384-e113-48d8-a770-61ebaba3288e_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Everything followed the exact order this page described. That
                  consistency made the brand feel credible."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Chris L." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Chris L.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Feb 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client kitchen" className="transform transition-transform duration-700 group-hover:translate-x-3 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cf228e6-d520-4922-85f3-61a7683a9d9c_3840w.png"/>
<div className="text-[10px] uppercase font-semibold text-[#0d6e63] tracking-wide bg-white rounded-full px-2 py-1 absolute top-2 right-2">
                    [4.9]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "The booking took less than a minute, and the tracking link
                  removed the usual guessing. It felt organized from the start."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Maya R." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Maya R.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    May 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client apartment repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32afe7b1-ae85-4aaf-9fa2-6f9169739759_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Seeing the technician on the way made a bigger difference
                  than I expected. The whole experience felt calmer."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Daniel K." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Daniel K.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client bathroom repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cab6970a-7c45-4f7f-bc97-be8994843daa_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [4.8]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "What I liked most was the closeout record. I could send it to
                  our building manager immediately after the visit."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Jenna T." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1608232543731-44d2ebe84dd7?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Jenna T.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client home service" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c5af384-e113-48d8-a770-61ebaba3288e_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Everything followed the exact order this page described. That
                  consistency made the brand feel credible."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Chris L." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Chris L.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Feb 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client kitchen" className="transform transition-transform duration-700 group-hover:translate-x-3 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cf228e6-d520-4922-85f3-61a7683a9d9c_3840w.png"/>
<div className="text-[10px] uppercase font-semibold text-[#0d6e63] tracking-wide bg-white rounded-full px-2 py-1 absolute top-2 right-2">
                    [4.9]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "The booking took less than a minute, and the tracking link
                  removed the usual guessing. It felt organized from the start."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Maya R." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Maya R.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    May 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client apartment repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32afe7b1-ae85-4aaf-9fa2-6f9169739759_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Seeing the technician on the way made a bigger difference
                  than I expected. The whole experience felt calmer."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Daniel K." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Daniel K.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client bathroom repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cab6970a-7c45-4f7f-bc97-be8994843daa_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [4.8]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "What I liked most was the closeout record. I could send it to
                  our building manager immediately after the visit."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Jenna T." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1608232543731-44d2ebe84dd7?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Jenna T.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client home service" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c5af384-e113-48d8-a770-61ebaba3288e_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Everything followed the exact order this page described. That
                  consistency made the brand feel credible."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Chris L." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Chris L.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Feb 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client kitchen" className="transform transition-transform duration-700 group-hover:translate-x-3 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cf228e6-d520-4922-85f3-61a7683a9d9c_3840w.png"/>
<div className="text-[10px] uppercase font-semibold text-[#0d6e63] tracking-wide bg-white rounded-full px-2 py-1 absolute top-2 right-2">
                    [4.9]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "The booking took less than a minute, and the tracking link
                  removed the usual guessing. It felt organized from the start."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Maya R." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Maya R.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    May 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client apartment repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32afe7b1-ae85-4aaf-9fa2-6f9169739759_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Seeing the technician on the way made a bigger difference
                  than I expected. The whole experience felt calmer."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Daniel K." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Daniel K.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client bathroom repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cab6970a-7c45-4f7f-bc97-be8994843daa_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [4.8]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "What I liked most was the closeout record. I could send it to
                  our building manager immediately after the visit."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Jenna T." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1608232543731-44d2ebe84dd7?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Jenna T.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client home service" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c5af384-e113-48d8-a770-61ebaba3288e_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Everything followed the exact order this page described. That
                  consistency made the brand feel credible."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Chris L." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Chris L.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Feb 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client kitchen" className="transform transition-transform duration-700 group-hover:translate-x-3 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cf228e6-d520-4922-85f3-61a7683a9d9c_3840w.png"/>
<div className="text-[10px] uppercase font-semibold text-[#0d6e63] tracking-wide bg-white rounded-full px-2 py-1 absolute top-2 right-2">
                    [4.9]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "The booking took less than a minute, and the tracking link
                  removed the usual guessing. It felt organized from the start."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Maya R." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Maya R.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    May 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client apartment repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32afe7b1-ae85-4aaf-9fa2-6f9169739759_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Seeing the technician on the way made a bigger difference
                  than I expected. The whole experience felt calmer."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Daniel K." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Daniel K.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client bathroom repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cab6970a-7c45-4f7f-bc97-be8994843daa_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [4.8]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "What I liked most was the closeout record. I could send it to
                  our building manager immediately after the visit."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Jenna T." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1608232543731-44d2ebe84dd7?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Jenna T.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client home service" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c5af384-e113-48d8-a770-61ebaba3288e_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Everything followed the exact order this page described. That
                  consistency made the brand feel credible."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Chris L." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Chris L.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Feb 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client kitchen" className="transform transition-transform duration-700 group-hover:translate-x-3 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cf228e6-d520-4922-85f3-61a7683a9d9c_3840w.png"/>
<div className="text-[10px] uppercase font-semibold text-[#0d6e63] tracking-wide bg-white rounded-full px-2 py-1 absolute top-2 right-2">
                    [4.9]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "The booking took less than a minute, and the tracking link
                  removed the usual guessing. It felt organized from the start."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Maya R." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Maya R.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    May 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client apartment repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32afe7b1-ae85-4aaf-9fa2-6f9169739759_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Seeing the technician on the way made a bigger difference
                  than I expected. The whole experience felt calmer."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Daniel K." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Daniel K.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client bathroom repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cab6970a-7c45-4f7f-bc97-be8994843daa_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [4.8]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "What I liked most was the closeout record. I could send it to
                  our building manager immediately after the visit."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Jenna T." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1608232543731-44d2ebe84dd7?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Jenna T.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client home service" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c5af384-e113-48d8-a770-61ebaba3288e_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Everything followed the exact order this page described. That
                  consistency made the brand feel credible."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Chris L." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Chris L.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Feb 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client kitchen" className="transform transition-transform duration-700 group-hover:translate-x-3 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cf228e6-d520-4922-85f3-61a7683a9d9c_3840w.png"/>
<div className="text-[10px] uppercase font-semibold text-[#0d6e63] tracking-wide bg-white rounded-full px-2 py-1 absolute top-2 right-2">
                    [4.9]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "The booking took less than a minute, and the tracking link
                  removed the usual guessing. It felt organized from the start."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Maya R." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Maya R.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    May 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client apartment repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32afe7b1-ae85-4aaf-9fa2-6f9169739759_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Seeing the technician on the way made a bigger difference
                  than I expected. The whole experience felt calmer."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Daniel K." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Daniel K.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client bathroom repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cab6970a-7c45-4f7f-bc97-be8994843daa_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [4.8]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "What I liked most was the closeout record. I could send it to
                  our building manager immediately after the visit."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Jenna T." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1608232543731-44d2ebe84dd7?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Jenna T.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client home service" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c5af384-e113-48d8-a770-61ebaba3288e_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Everything followed the exact order this page described. That
                  consistency made the brand feel credible."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Chris L." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Chris L.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Feb 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client kitchen" className="transform transition-transform duration-700 group-hover:translate-x-3 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cf228e6-d520-4922-85f3-61a7683a9d9c_3840w.png"/>
<div className="text-[10px] uppercase font-semibold text-[#0d6e63] tracking-wide bg-white rounded-full px-2 py-1 absolute top-2 right-2">
                    [4.9]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "The booking took less than a minute, and the tracking link
                  removed the usual guessing. It felt organized from the start."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Maya R." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Maya R.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    May 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client apartment repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32afe7b1-ae85-4aaf-9fa2-6f9169739759_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Seeing the technician on the way made a bigger difference
                  than I expected. The whole experience felt calmer."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Daniel K." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Daniel K.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client bathroom repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cab6970a-7c45-4f7f-bc97-be8994843daa_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [4.8]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "What I liked most was the closeout record. I could send it to
                  our building manager immediately after the visit."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Jenna T." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1608232543731-44d2ebe84dd7?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Jenna T.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client home service" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c5af384-e113-48d8-a770-61ebaba3288e_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Everything followed the exact order this page described. That
                  consistency made the brand feel credible."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Chris L." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Chris L.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Feb 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client kitchen" className="transform transition-transform duration-700 group-hover:translate-x-3 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cf228e6-d520-4922-85f3-61a7683a9d9c_3840w.png"/>
<div className="text-[10px] uppercase font-semibold text-[#0d6e63] tracking-wide bg-white rounded-full px-2 py-1 absolute top-2 right-2">
                    [4.9]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "The booking took less than a minute, and the tracking link
                  removed the usual guessing. It felt organized from the start."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Maya R." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Maya R.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    May 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client apartment repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32afe7b1-ae85-4aaf-9fa2-6f9169739759_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Seeing the technician on the way made a bigger difference
                  than I expected. The whole experience felt calmer."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Daniel K." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Daniel K.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client bathroom repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cab6970a-7c45-4f7f-bc97-be8994843daa_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [4.8]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "What I liked most was the closeout record. I could send it to
                  our building manager immediately after the visit."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Jenna T." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1608232543731-44d2ebe84dd7?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Jenna T.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client home service" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c5af384-e113-48d8-a770-61ebaba3288e_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Everything followed the exact order this page described. That
                  consistency made the brand feel credible."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Chris L." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Chris L.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Feb 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client kitchen" className="transform transition-transform duration-700 group-hover:translate-x-3 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cf228e6-d520-4922-85f3-61a7683a9d9c_3840w.png"/>
<div className="text-[10px] uppercase font-semibold text-[#0d6e63] tracking-wide bg-white rounded-full px-2 py-1 absolute top-2 right-2">
                    [4.9]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "The booking took less than a minute, and the tracking link
                  removed the usual guessing. It felt organized from the start."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Maya R." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Maya R.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    May 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client apartment repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32afe7b1-ae85-4aaf-9fa2-6f9169739759_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Seeing the technician on the way made a bigger difference
                  than I expected. The whole experience felt calmer."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Daniel K." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Daniel K.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client bathroom repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cab6970a-7c45-4f7f-bc97-be8994843daa_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [4.8]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "What I liked most was the closeout record. I could send it to
                  our building manager immediately after the visit."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Jenna T." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1608232543731-44d2ebe84dd7?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Jenna T.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client home service" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c5af384-e113-48d8-a770-61ebaba3288e_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Everything followed the exact order this page described. That
                  consistency made the brand feel credible."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Chris L." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Chris L.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Feb 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client kitchen" className="transform transition-transform duration-700 group-hover:translate-x-3 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cf228e6-d520-4922-85f3-61a7683a9d9c_3840w.png"/>
<div className="text-[10px] uppercase font-semibold text-[#0d6e63] tracking-wide bg-white rounded-full px-2 py-1 absolute top-2 right-2">
                    [4.9]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "The booking took less than a minute, and the tracking link
                  removed the usual guessing. It felt organized from the start."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Maya R." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Maya R.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    May 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client apartment repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32afe7b1-ae85-4aaf-9fa2-6f9169739759_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Seeing the technician on the way made a bigger difference
                  than I expected. The whole experience felt calmer."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Daniel K." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Daniel K.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client bathroom repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cab6970a-7c45-4f7f-bc97-be8994843daa_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [4.8]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "What I liked most was the closeout record. I could send it to
                  our building manager immediately after the visit."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Jenna T." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1608232543731-44d2ebe84dd7?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Jenna T.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client home service" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c5af384-e113-48d8-a770-61ebaba3288e_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Everything followed the exact order this page described. That
                  consistency made the brand feel credible."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Chris L." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Chris L.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Feb 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client kitchen" className="transform transition-transform duration-700 group-hover:translate-x-3 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cf228e6-d520-4922-85f3-61a7683a9d9c_3840w.png"/>
<div className="text-[10px] uppercase font-semibold text-[#0d6e63] tracking-wide bg-white rounded-full px-2 py-1 absolute top-2 right-2">
                    [4.9]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "The booking took less than a minute, and the tracking link
                  removed the usual guessing. It felt organized from the start."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Maya R." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Maya R.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    May 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client apartment repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32afe7b1-ae85-4aaf-9fa2-6f9169739759_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Seeing the technician on the way made a bigger difference
                  than I expected. The whole experience felt calmer."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Daniel K." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Daniel K.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client bathroom repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cab6970a-7c45-4f7f-bc97-be8994843daa_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [4.8]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "What I liked most was the closeout record. I could send it to
                  our building manager immediately after the visit."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Jenna T." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1608232543731-44d2ebe84dd7?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Jenna T.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client home service" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c5af384-e113-48d8-a770-61ebaba3288e_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Everything followed the exact order this page described. That
                  consistency made the brand feel credible."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Chris L." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Chris L.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Feb 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client kitchen" className="transform transition-transform duration-700 group-hover:translate-x-3 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cf228e6-d520-4922-85f3-61a7683a9d9c_3840w.png"/>
<div className="text-[10px] uppercase font-semibold text-[#0d6e63] tracking-wide bg-white rounded-full px-2 py-1 absolute top-2 right-2">
                    [4.9]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "The booking took less than a minute, and the tracking link
                  removed the usual guessing. It felt organized from the start."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Maya R." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Maya R.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    May 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client apartment repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32afe7b1-ae85-4aaf-9fa2-6f9169739759_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Seeing the technician on the way made a bigger difference
                  than I expected. The whole experience felt calmer."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Daniel K." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Daniel K.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client bathroom repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cab6970a-7c45-4f7f-bc97-be8994843daa_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [4.8]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "What I liked most was the closeout record. I could send it to
                  our building manager immediately after the visit."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Jenna T." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1608232543731-44d2ebe84dd7?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Jenna T.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client home service" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c5af384-e113-48d8-a770-61ebaba3288e_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Everything followed the exact order this page described. That
                  consistency made the brand feel credible."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Chris L." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Chris L.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Feb 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client kitchen" className="transform transition-transform duration-700 group-hover:translate-x-3 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cf228e6-d520-4922-85f3-61a7683a9d9c_3840w.png"/>
<div className="text-[10px] uppercase font-semibold text-[#0d6e63] tracking-wide bg-white rounded-full px-2 py-1 absolute top-2 right-2">
                    [4.9]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "The booking took less than a minute, and the tracking link
                  removed the usual guessing. It felt organized from the start."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Maya R." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Maya R.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    May 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client apartment repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32afe7b1-ae85-4aaf-9fa2-6f9169739759_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Seeing the technician on the way made a bigger difference
                  than I expected. The whole experience felt calmer."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Daniel K." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Daniel K.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client bathroom repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cab6970a-7c45-4f7f-bc97-be8994843daa_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [4.8]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "What I liked most was the closeout record. I could send it to
                  our building manager immediately after the visit."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Jenna T." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1608232543731-44d2ebe84dd7?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Jenna T.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client home service" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c5af384-e113-48d8-a770-61ebaba3288e_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Everything followed the exact order this page described. That
                  consistency made the brand feel credible."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Chris L." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Chris L.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Feb 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client kitchen" className="transform transition-transform duration-700 group-hover:translate-x-3 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cf228e6-d520-4922-85f3-61a7683a9d9c_3840w.png"/>
<div className="text-[10px] uppercase font-semibold text-[#0d6e63] tracking-wide bg-white rounded-full px-2 py-1 absolute top-2 right-2">
                    [4.9]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "The booking took less than a minute, and the tracking link
                  removed the usual guessing. It felt organized from the start."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Maya R." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Maya R.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    May 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client apartment repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32afe7b1-ae85-4aaf-9fa2-6f9169739759_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Seeing the technician on the way made a bigger difference
                  than I expected. The whole experience felt calmer."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Daniel K." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Daniel K.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client bathroom repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cab6970a-7c45-4f7f-bc97-be8994843daa_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [4.8]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "What I liked most was the closeout record. I could send it to
                  our building manager immediately after the visit."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Jenna T." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1608232543731-44d2ebe84dd7?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Jenna T.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client home service" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c5af384-e113-48d8-a770-61ebaba3288e_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Everything followed the exact order this page described. That
                  consistency made the brand feel credible."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Chris L." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Chris L.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Feb 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client kitchen" className="transform transition-transform duration-700 group-hover:translate-x-3 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cf228e6-d520-4922-85f3-61a7683a9d9c_3840w.png"/>
<div className="text-[10px] uppercase font-semibold text-[#0d6e63] tracking-wide bg-white rounded-full px-2 py-1 absolute top-2 right-2">
                    [4.9]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "The booking took less than a minute, and the tracking link
                  removed the usual guessing. It felt organized from the start."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Maya R." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Maya R.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    May 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client apartment repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32afe7b1-ae85-4aaf-9fa2-6f9169739759_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Seeing the technician on the way made a bigger difference
                  than I expected. The whole experience felt calmer."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Daniel K." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Daniel K.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client bathroom repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cab6970a-7c45-4f7f-bc97-be8994843daa_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [4.8]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "What I liked most was the closeout record. I could send it to
                  our building manager immediately after the visit."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Jenna T." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1608232543731-44d2ebe84dd7?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Jenna T.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client home service" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c5af384-e113-48d8-a770-61ebaba3288e_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Everything followed the exact order this page described. That
                  consistency made the brand feel credible."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Chris L." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Chris L.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Feb 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client kitchen" className="transform transition-transform duration-700 group-hover:translate-x-3 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cf228e6-d520-4922-85f3-61a7683a9d9c_3840w.png"/>
<div className="text-[10px] uppercase font-semibold text-[#0d6e63] tracking-wide bg-white rounded-full px-2 py-1 absolute top-2 right-2">
                    [4.9]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "The booking took less than a minute, and the tracking link
                  removed the usual guessing. It felt organized from the start."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Maya R." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Maya R.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    May 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client apartment repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32afe7b1-ae85-4aaf-9fa2-6f9169739759_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Seeing the technician on the way made a bigger difference
                  than I expected. The whole experience felt calmer."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Daniel K." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Daniel K.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client bathroom repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cab6970a-7c45-4f7f-bc97-be8994843daa_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [4.8]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "What I liked most was the closeout record. I could send it to
                  our building manager immediately after the visit."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Jenna T." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1608232543731-44d2ebe84dd7?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Jenna T.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client home service" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c5af384-e113-48d8-a770-61ebaba3288e_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Everything followed the exact order this page described. That
                  consistency made the brand feel credible."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Chris L." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Chris L.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Feb 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client kitchen" className="transform transition-transform duration-700 group-hover:translate-x-3 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cf228e6-d520-4922-85f3-61a7683a9d9c_3840w.png"/>
<div className="text-[10px] uppercase font-semibold text-[#0d6e63] tracking-wide bg-white rounded-full px-2 py-1 absolute top-2 right-2">
                    [4.9]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "The booking took less than a minute, and the tracking link
                  removed the usual guessing. It felt organized from the start."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Maya R." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Maya R.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    May 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client apartment repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32afe7b1-ae85-4aaf-9fa2-6f9169739759_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Seeing the technician on the way made a bigger difference
                  than I expected. The whole experience felt calmer."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Daniel K." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Daniel K.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client bathroom repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cab6970a-7c45-4f7f-bc97-be8994843daa_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [4.8]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "What I liked most was the closeout record. I could send it to
                  our building manager immediately after the visit."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Jenna T." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1608232543731-44d2ebe84dd7?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Jenna T.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client home service" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c5af384-e113-48d8-a770-61ebaba3288e_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Everything followed the exact order this page described. That
                  consistency made the brand feel credible."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Chris L." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Chris L.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Feb 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client kitchen" className="transform transition-transform duration-700 group-hover:translate-x-3 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cf228e6-d520-4922-85f3-61a7683a9d9c_3840w.png"/>
<div className="text-[10px] uppercase font-semibold text-[#0d6e63] tracking-wide bg-white rounded-full px-2 py-1 absolute top-2 right-2">
                    [4.9]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "The booking took less than a minute, and the tracking link
                  removed the usual guessing. It felt organized from the start."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Maya R." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Maya R.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    May 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client apartment repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32afe7b1-ae85-4aaf-9fa2-6f9169739759_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Seeing the technician on the way made a bigger difference
                  than I expected. The whole experience felt calmer."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Daniel K." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Daniel K.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client bathroom repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cab6970a-7c45-4f7f-bc97-be8994843daa_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [4.8]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "What I liked most was the closeout record. I could send it to
                  our building manager immediately after the visit."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Jenna T." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1608232543731-44d2ebe84dd7?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Jenna T.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client home service" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c5af384-e113-48d8-a770-61ebaba3288e_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Everything followed the exact order this page described. That
                  consistency made the brand feel credible."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Chris L." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Chris L.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Feb 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client kitchen" className="transform transition-transform duration-700 group-hover:translate-x-3 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cf228e6-d520-4922-85f3-61a7683a9d9c_3840w.png"/>
<div className="text-[10px] uppercase font-semibold text-[#0d6e63] tracking-wide bg-white rounded-full px-2 py-1 absolute top-2 right-2">
                    [4.9]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "The booking took less than a minute, and the tracking link
                  removed the usual guessing. It felt organized from the start."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Maya R." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Maya R.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    May 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client apartment repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32afe7b1-ae85-4aaf-9fa2-6f9169739759_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Seeing the technician on the way made a bigger difference
                  than I expected. The whole experience felt calmer."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Daniel K." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Daniel K.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client bathroom repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cab6970a-7c45-4f7f-bc97-be8994843daa_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [4.8]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "What I liked most was the closeout record. I could send it to
                  our building manager immediately after the visit."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Jenna T." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1608232543731-44d2ebe84dd7?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Jenna T.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client home service" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c5af384-e113-48d8-a770-61ebaba3288e_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Everything followed the exact order this page described. That
                  consistency made the brand feel credible."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Chris L." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Chris L.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Feb 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client kitchen" className="transform transition-transform duration-700 group-hover:translate-x-3 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cf228e6-d520-4922-85f3-61a7683a9d9c_3840w.png"/>
<div className="text-[10px] uppercase font-semibold text-[#0d6e63] tracking-wide bg-white rounded-full px-2 py-1 absolute top-2 right-2">
                    [4.9]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "The booking took less than a minute, and the tracking link
                  removed the usual guessing. It felt organized from the start."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Maya R." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Maya R.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    May 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client apartment repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32afe7b1-ae85-4aaf-9fa2-6f9169739759_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Seeing the technician on the way made a bigger difference
                  than I expected. The whole experience felt calmer."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Daniel K." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Daniel K.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client bathroom repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cab6970a-7c45-4f7f-bc97-be8994843daa_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [4.8]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "What I liked most was the closeout record. I could send it to
                  our building manager immediately after the visit."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Jenna T." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1608232543731-44d2ebe84dd7?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Jenna T.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client home service" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c5af384-e113-48d8-a770-61ebaba3288e_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Everything followed the exact order this page described. That
                  consistency made the brand feel credible."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Chris L." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Chris L.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Feb 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client kitchen" className="transform transition-transform duration-700 group-hover:translate-x-3 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cf228e6-d520-4922-85f3-61a7683a9d9c_3840w.png"/>
<div className="text-[10px] uppercase font-semibold text-[#0d6e63] tracking-wide bg-white rounded-full px-2 py-1 absolute top-2 right-2">
                    [4.9]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "The booking took less than a minute, and the tracking link
                  removed the usual guessing. It felt organized from the start."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Maya R." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Maya R.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    May 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client apartment repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32afe7b1-ae85-4aaf-9fa2-6f9169739759_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Seeing the technician on the way made a bigger difference
                  than I expected. The whole experience felt calmer."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Daniel K." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Daniel K.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client bathroom repair" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cab6970a-7c45-4f7f-bc97-be8994843daa_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [4.8]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "What I liked most was the closeout record. I could send it to
                  our building manager immediately after the visit."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Jenna T." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1608232543731-44d2ebe84dd7?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Jenna T.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Apr 2026
                  </span>
</div>
</div>
<div className="group min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client home service" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c5af384-e113-48d8-a770-61ebaba3288e_3840w.png"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-semibold text-[#0d6e63] uppercase tracking-wide">
                    [5.0]
                  </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
                  "Everything followed the exact order this page described. That
                  consistency made the brand feel credible."
                </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<img alt="Chris L." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=320&amp;q=80"/>
<span className="text-xs font-semibold text-neutral-900">
                      Chris L.
                    </span>
</div>
<span className="text-[10px] text-neutral-400 uppercase">
                    Feb 2026
                  </span>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="relative overflow-hidden border-b border-[#dce7e5] bg-[#0d1720] text-white" id="dispatch">
<div className="absolute inset-0">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(29,209,161,0.18),transparent_24%),radial-gradient(circle_at_75%_15%,rgba(255,255,255,0.07),transparent_18%),linear-gradient(180deg,#0d1720,#0a1219)]"></div>
<div className="absolute inset-y-0 left-[6%] hidden w-px bg-white/8 xl:block"></div>
<div className="absolute inset-y-0 right-[6%] hidden w-px bg-white/8 xl:block"></div>
</div>

<section className="relative overflow-hidden" id="dispatch-cta" style={{background: 'linear-gradient(160deg, #0a1018 0%, #0e1a26 50%, #0a1018 100%)'}}>

<div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[60rem] h-[40rem] rounded-full pointer-events-none" style={{background: 'radial-gradient(ellipse, rgba(13,110,99,0.18) 0%, transparent 70%)'}}></div>

<div className="absolute inset-0 pointer-events-none hidden lg:block opacity-30">
<div className="max-w-[88rem] mx-auto h-full px-8 grid grid-cols-12 gap-6">
<div className="col-span-1 border-r border-white/5 h-full"></div>
<div className="col-span-1 border-r border-white/5 h-full col-start-6"></div>
<div className="col-span-1 border-r border-white/5 h-full col-start-12"></div>
</div>
</div>
<div className="text-center max-w-[88rem] z-10 mx-auto pt-2412 pr-8 pb-12 pl-8 relative lg:px-8 lg:pt-12 lg:pb-12 sm:px-6 sm:pt-12">

<div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-white/30 mb-8">
<span className="h-1.5 w-1.5 rounded-full bg-[#1dd1a1] shadow-[0_0_10px_rgba(29,209,161,0.9)]"></span>
              Engineers standing by
              <span className="h-1.5 w-1.5 rounded-full bg-[#1dd1a1] shadow-[0_0_10px_rgba(29,209,161,0.9)]"></span>
</div>

<h2 className="text-5xl tracking-tight text-white mb-7 sm:text-6xl lg:text-7xl" style={{fontFamily: '\'Instrument Serif\',serif', lineHeight: '0.92'}}>
              Ready to experience
              <br/>
<em className="italic text-white/70">engineered maintenance?</em>
</h2>

<p className="text-white/40 text-base sm:text-lg leading-[1.8] font-light max-w-[38rem] mx-auto mb-12">
              Secure an immediate emergency technician dispatch or schedule an
              upcoming maintenance visit right now. Zero setup walls, zero phone
              loops, and zero surprise surcharges. Simple, professional
              execution for New York property owners.
            </p>

<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="inline-flex items-center justify-center gap-3 uppercase transition-all duration-300 hover:-translate-y-0.5 text-xs tracking-[0.22em] rounded-full pt-3.5 pr-6 pb-3.5 pl-6 -multi" href="/booknow" style={{background: 'radial-gradient(circle at 10% 0%,#d9fbf2 0%,#59d6bb 45%,#0d6e63 100%)', boxShadow: '0 15px 25px -10px rgba(13,110,99,.55),inset 0 4px 8px rgba(255,255,255,.55),inset 0 -4px 8px rgba(7,91,82,.4)'}}>
<span className="font-medium text-[#072a28] tracking-tight">
                  Book now
                </span>
<span className="flex items-center justify-center bg-black/10 rounded-full pt-1 pr-3 pb-1 pl-3">
<iconify-icon className="text-lg text-[#072a28]" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</span>
</a>
<a className="inline-flex items-center gap-3 uppercase text-xs tracking-[0.22em] text-white/50 hover:text-white/80 transition-colors" href="tel:+12125550100">
<iconify-icon className="text-base" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
                (212) 555-0100
              </a>
</div>

<div className="flex flex-wrap gap-8 border-white/8 border-t mt-16 pt-10 gap-x-8 gap-y-8 items-center justify-center">
<div className="flex items-center gap-2 text-white/25 text-[0.6rem] uppercase tracking-[0.22em]">
<iconify-icon className="text-sm text-white/30" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
                Flat-rate guaranteed
              </div>
<div className="flex items-center gap-2 text-white/25 text-[0.6rem] uppercase tracking-[0.22em]">
<iconify-icon className="text-sm text-white/30" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
                Under 45 min response
              </div>
<div className="flex items-center gap-2 text-white/25 text-[0.6rem] uppercase tracking-[0.22em]">
<iconify-icon className="text-sm text-white/30" icon="solar:verified-check-linear" strokeWidth="1.5"></iconify-icon>
                NYC licensed &amp; insured
              </div>
<div className="flex items-center gap-2 text-white/25 text-[0.6rem] uppercase tracking-[0.22em]">
<iconify-icon className="text-sm text-white/30" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
                Signed PDF record
              </div>
</div>
</div>
</section>
</section>
</main>

<footer className="bg-[#f8fbfa] pt-10 pb-10 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="relative rounded-[2rem] border border-[#dde8e6] bg-white/80 p-6 sm:p-8 shadow-[0_20px_50px_rgba(14,23,32,0.05)]">
<div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
<div className="lg:col-span-1">
<a className="inline-flex items-center gap-3" href="#hero">
<div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d6e3e0] bg-white/80 text-[0.65rem] font-medium tracking-[0.28em] text-[#0d6e63]">
                  MF
                </div>
<div className="flex flex-col leading-none">
<span className="text-xs uppercase tracking-[0.26em] text-[#6c7b84]">
                    Metro Utility Care
                  </span>
<span className="text-lg tracking-tight text-[#0e1720]" style={{fontFamily: '\'Instrument Serif\',serif'}}>
                    METROFIX
                  </span>
</div>
</a>
<p className="mt-4 text-sm text-black/70">
                Licensed plumbing and essential maintenance for NYC homes,
                rentals, and small facilities.
              </p>
<div className="mt-6 flex gap-4">
<a className="inline-flex h-9 w-9 items-center justify-center rounded-lg border bg-gray-100 text-black/60 hover:text-black border-white/20" href="tel:21255534948">
<iconify-icon className="h-4 w-4" icon="solar:phone-linear"></iconify-icon>
</a>
<a className="inline-flex h-9 w-9 items-center justify-center rounded-lg border bg-gray-100 text-black/60 hover:text-black border-white/20" href="#services">
<iconify-icon className="h-4 w-4" icon="solar:map-point-linear"></iconify-icon>
</a>
<a className="inline-flex h-9 w-9 items-center justify-center rounded-lg border bg-gray-100 text-black/60 hover:text-black border-white/20" href="#dispatch">
<iconify-icon className="h-4 w-4" icon="solar:chat-round-linear"></iconify-icon>
</a>
</div>
</div>
<div>
<h3 className="text-sm font-semibold text-black tracking-tight">
                Services
              </h3>
<ul className="mt-4 space-y-3">
<li>
<a className="text-sm text-black/70 hover:text-black" href="/servicedetails">
                    Leak Repair &amp; Drain Clearing
                  </a>
</li>
<li>
<a className="text-sm text-black/70 hover:text-black" href="/servicedetails">
                    Heating &amp; Gas
                  </a>
</li>
<li>
<a className="text-sm text-black/70 hover:text-black" href="/servicedetails">
                    Appliance Installation &amp; Setup
                  </a>
</li>
<li>
<a className="text-sm text-black/70 hover:text-black" href="/servicedetails">
                    Emergency Visits
                  </a>
</li>
</ul>
</div>
<div className="">
<h3 className="text-sm font-semibold text-black tracking-tight">
                Company
              </h3>
<ul className="mt-4 space-y-3">
<li className="">
<a className="text-sm text-black/70 hover:text-black" href="/howitworks">
                    How it works
                  </a>
</li>
<li className="">
<a className="text-sm text-black/70 hover:text-black" href="/casestudies">
                    Case Studies
                  </a>
</li>
<li>
<a className="text-sm text-black/70 hover:text-black" href="/pricing">
                    Pricing
                  </a>
</li>
<li>
<a className="text-sm text-black/70 hover:text-black" href="/aboutus">
                    About
                  </a>
</li>
<li>
<a className="text-sm text-black/70 hover:text-black" href="/blog">
                    Blog
                  </a>
</li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-black tracking-tight">
                Contact
              </h3>
<ul className="mt-4 space-y-3">
<li className="flex items-center gap-3">
<iconify-icon className="h-4 w-4 text-black/60" icon="solar:phone-linear"></iconify-icon>
<span className="text-sm text-black/70">(212) 555-FIXIT</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="h-4 w-4 text-black/60" icon="solar:letter-linear"></iconify-icon>
<span className="text-sm text-black/70">
                    hello@metrofixnyc.com
                  </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="h-4 w-4 text-black/60 mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span className="text-sm text-black/70">
                    Serving Manhattan, Brooklyn, Queens, and nearby high-density
                    neighborhoods.
                  </span>
</li>
</ul>
<div className="mt-6">
<a className="inline-flex items-center justify-center uppercase text-xs text-white tracking-[0.22em] bg-[#0e1720] h-11 border border-[#0e1720] rounded-full px-5 transition-all hover:bg-[#0d6e63] hover:border-[#0d6e63]" href="/booknow">
                  Book now
                </a>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-black/10">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<p className="text-sm text-black/60">
                © 2026 MetroFix NYC. All rights reserved.
              </p>
<div className="flex flex-wrap gap-6">
<a className="text-sm text-black/60 hover:text-black" href="#">
                  Privacy Policy
                </a>
<a className="text-sm text-black/60 hover:text-black" href="#">
                  Terms of Service
                </a>
<a className="text-sm text-black/60 hover:text-black" href="#">
                  Cookie Policy
                </a>
</div>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
