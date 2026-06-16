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



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
dark: '#0D1B2A',
accent: '#F4821F',
light: '#F8F8F8',
white: '#FFFFFF',
}
},
fontFamily: {
display: ['"Barlow Condensed"', 'sans-serif'],
body: ['"Inter"', 'sans-serif'],
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener("DOMContentLoaded", () => {

          // 1. Lenis Smooth Scroll (Initialize FIRST)
          const lenis = new Lenis({ lerp: 0.08 });
          function raf(time) {
              lenis.raf(time);
              requestAnimationFrame(raf);
          }
          requestAnimationFrame(raf);

          // 2. Scroll Progress Bar
          const progressBar = document.getElementById('scroll-progress');
          window.addEventListener('scroll', () => {
              const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
              const progress = (window.scrollY / scrollHeight) * 100;
              progressBar.style.width = `${progress}%`;
          });

          // 3. Header Scroll State
          const header = document.getElementById('main-header');
          window.addEventListener('scroll', () => {
              if (window.scrollY > 80) {
                  header.classList.add('scrolled');
              } else {
                  header.classList.remove('scrolled');
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
                  menuBtn.innerHTML = '<i class="fa-solid fa-xmark text-2xl"></i>';
              } else {
                  mobileMenu.classList.add('translate-x-full');
                  menuBtn.innerHTML = '<i class="fa-solid fa-bars text-2xl"></i>';
              }
          }
          menuBtn.addEventListener('click', toggleMenu);
          mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

          // 4. Splitting.js + GSAP Hero Animation
          Splitting();
          gsap.from('.hero-headline .word', {
              y: 40,
              opacity: 0,
              duration: 0.8,
              stagger: 0.08,
              ease: 'power3.out',
              delay: 0.2 // slight delay to ensure render
          });

          // Fade in other hero elements
          gsap.to('.hero-subhead, .hero-buttons', {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.2,
              ease: 'power3.out',
              delay: 1.2
          });
          gsap.to('.hero-trust', { opacity: 1, duration: 1, delay: 1.8 });

          // 5. tsParticles Init
          tsParticles.load('particles', {
              particles: {
                  number: { value: 28 },
                  color: { value: '#ffffff' },
                  opacity: { value: 0.18, random: true, animation: { enable: true, speed: 0.6, minimumValue: 0.05, sync: false } },
                  size: { value: 2, random: true },
                  move: { enable: true, speed: 0.5, direction: 'top', random: true, straight: false, outModes: 'out' },
                  shape: { type: 'circle' }
              },
              detectRetina: true
          });

          // 6. AOS Initialization
          AOS.init({
              duration: 700,
              once: true,
              offset: 80
          });

          // 7. Trust Bar Intersection Observer & GSAP Counting
          const trustBar = document.getElementById('trust-bar');
          const counters = document.querySelectorAll('.counter');
          const countersDecimal = document.querySelectorAll('.counter-decimal');
          let animated = false;

          const observer = new IntersectionObserver((entries) => {
              if (entries[0].isIntersecting && !animated) {
                  animated = true;

                  counters.forEach(counterEl => {
                      const target = parseFloat(counterEl.getAttribute('data-target'));
                      gsap.to(counterEl, {
                          innerHTML: target,
                          duration: 2.5,
                          ease: 'expo.out',
                          snap: { innerHTML: 1 },
                          onUpdate: function() {
                              counterEl.textContent = Math.round(gsap.getProperty(counterEl, 'innerHTML'));
                          }
                      });
                  });

                  countersDecimal.forEach(counterEl => {
                      const target = parseFloat(counterEl.getAttribute('data-target'));
                      gsap.to(counterEl, {
                          innerHTML: target,
                          duration: 2.5,
                          ease: 'expo.out',
                          onUpdate: function() {
                              counterEl.textContent = parseFloat(gsap.getProperty(counterEl, 'innerHTML')).toFixed(1);
                          }
                      });
                  });
              }
          }, { threshold: 0.5 });

          if (trustBar) {
              observer.observe(trustBar);
          }

          // 8. Vanilla Tilt
          VanillaTilt.init(document.querySelectorAll('.service-card'), {
              max: 6,
              speed: 400,
              glare: true,
              'max-glare': 0.15,
              perspective: 800
          });

          // 9. Swiper Carousel
          new Swiper('.testimonials-swiper', {
              loop: true,
              spaceBetween: 24,
              grabCursor: true,
              centeredSlides: true,
              autoplay: {
                  delay: 3500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true
              },
              breakpoints: {
                  0:    { slidesPerView: 1.15, centeredSlides: true },
                  768:  { slidesPerView: 2.2,  centeredSlides: false },
                  1024: { slidesPerView: 3,    centeredSlides: false }
              }
          });

          // 10. Contact Form Submit Override
          const form = document.getElementById('contact-form');
          if (form) {
              form.addEventListener('submit', function(e) {
                  e.preventDefault();
                  form.innerHTML = `
                      <div class="success-msg flex flex-col justify-center items-center h-full text-center" style="padding:40px 0;">
                          <i class="fa-solid fa-circle-check text-brand-accent text-5xl mb-4"></i>
                          <p style="font-size:24px;font-weight:700;color:#F4821F;font-family:'Barlow Condensed', sans-serif;">Got it. We'll be in touch within 2 hours.</p>
                          <p style="font-size:16px;color:#6b7280;margin-top:8px;">Check your phone &mdash; we usually call first.</p>
                      </div>
                  `;
              });
          }
      });
    


      (function () {
        function playVideo(video) {
          var promise = video.play();
          if (promise && typeof promise.catch === "function") {
            promise.catch(function () {});
          }
        }

        function setupVideo(video) {
          if (video.__auraVideoReady === true) return;
          video.__auraVideoReady = true;
          video.removeAttribute("data-aura-video-ready");
          video.removeAttribute("data-aura-video-played");
          video.muted = true;
          video.playsInline = true;

          var preset = video.dataset.auraVideoPreset || "loop-in-view";
          if (preset === "hover") {
            video.addEventListener("mouseenter", function () {
              playVideo(video);
            });
            video.addEventListener("mouseleave", function () {
              video.pause();
              video.currentTime = 0;
            });
            return;
          }

          if (!("IntersectionObserver" in window)) {
            playVideo(video);
            return;
          }

          var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                if (preset === "play-once" && video.__auraVideoPlayed === true) {
                  return;
                }
                playVideo(video);
              } else {
                video.pause();
              }
            });
          }, { threshold: 0.35 });

          if (preset === "play-once") {
            video.addEventListener("ended", function () {
              video.__auraVideoPlayed = true;
            }, { once: true });
          }

          observer.observe(video);
        }

        function setupVideos() {
          document
            .querySelectorAll("video[data-aura-video-preset]")
            .forEach(setupVideo);
        }

        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", setupVideos);
        } else {
          setupVideos();
        }
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="scroll-progress"></div>

<header className="fixed top-0 left-0 w-full z-[1000] h-[80px] flex items-center transition-all duration-300" id="main-header">
<div className="container mx-auto px-6 md:px-12 flex justify-between items-center w-full">
<a className="font-display font-bold text-[22px] tracking-tight text-white z-50" href="#">
          USA HOME ROOFING
        </a>

<nav className="hidden md:flex items-center space-x-8">
<a className="nav-link text-white text-sm font-medium tracking-wide" href="#services">
            Services
          </a>
<a className="nav-link text-white text-sm font-medium tracking-wide" href="#why-us">
            Why Us
          </a>
<a className="nav-link text-white text-sm font-medium tracking-wide" href="#reviews">
            Reviews
          </a>
<a className="nav-phone text-white text-sm font-semibold flex items-center gap-2" href="tel:2145550198">
<i className="fa-solid fa-phone text-brand-accent"></i>
            (214) 555-0198
          </a>
<a className="btn-fill bg-brand-accent text-white px-6 py-2.5 rounded text-sm font-semibold tracking-wide" href="#contact">
            Get Free Quote
          </a>
</nav>

<button className="md:hidden text-white z-50 p-2 focus:outline-none" id="mobile-menu-btn">
<i className="fa-solid fa-bars text-2xl"></i>
</button>
</div>

<div className="fixed inset-0 bg-brand-dark/95 backdrop-blur-xl z-40 transform translate-x-full transition-transform duration-300 flex flex-col justify-center items-center space-y-8" id="mobile-menu">
<a className="mobile-link font-display text-[32px] font-bold text-white tracking-tight" href="#services">
          Services
        </a>
<a className="mobile-link font-display text-[32px] font-bold text-white tracking-tight" href="#why-us">
          Why Us
        </a>
<a className="mobile-link font-display text-[32px] font-bold text-white tracking-tight" href="#reviews">
          Reviews
        </a>
<a className="mobile-link font-display text-[32px] font-bold text-brand-accent tracking-tight" href="#contact">
          Contact Us
        </a>
<a className="text-white text-lg mt-8 flex items-center gap-2" href="tel:2145550198">
<i className="fa-solid fa-phone text-brand-accent"></i>
          (214) 555-0198
        </a>
</div>
</header>

<section className="relative w-full h-[100vh] min-h-[600px] overflow-hidden flex items-center" id="hero">
<div className="absolute inset-0 z-[1] pointer-events-none" id="particles"></div>
<div className="hero-inner relative z-[2] container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between h-full w-full pt-20">

<div className="w-full md:w-[55%] flex flex-col justify-center text-center md:text-left h-full pb-12 md:pb-0">
<span className="text-brand-accent text-xs font-semibold uppercase tracking-[0.15em] mb-4 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
            Trusted Roofing in Dallas
          </span>
<h1 className="hero-headline font-display font-bold text-[42px] md:text-[72px] text-white leading-[1.1] tracking-tight mb-6" data-splitting="">
            FORTIFY YOUR HOME WITH MASTER CRAFTSMANSHIP
          </h1>
<p className="hero-subhead text-[20px] font-normal text-white/85 leading-[1.6] mb-10 max-w-xl mx-auto md:mx-0 opacity-0 transform translate-y-4">
            Dallas's premier roofing specialists. Uncompromising quality,
            lifetime warranties, and honest pricing since 2008.
          </p>
<div className="flex flex-col sm:flex-row items-center gap-4 hero-buttons opacity-0 transform translate-y-4">
<a className="btn-fill bg-brand-accent text-white text-base font-semibold px-[28px] py-[14px] rounded-md w-full sm:w-auto text-center" href="#contact">
              Get Your Free Quote
            </a>
<a className="btn-outline border border-white text-white bg-transparent text-base font-semibold px-[28px] py-[14px] rounded-md w-full sm:w-auto text-center transition-colors" href="tel:2145550198">
              Call (214) 555-0198
            </a>
</div>
<div className="mt-8 text-[13px] text-white/65 flex items-center justify-center md:justify-start gap-2 hero-trust opacity-0">
<div className="flex text-brand-accent text-[10px]">
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
</div>
<span>
              4.9 Rating · 2,000+ Projects Completed · Licensed &amp; Insured
            </span>
</div>
</div>

<div className="hidden md:block w-[45%] h-full relative hero-right pl-10">
<div className="hero-float relative w-full h-[80%] mt-[10%]">

<div className="absolute inset-0 bg-gradient-to-br from-brand-dark to-brand-accent clip-diagonal rounded-r-3xl overflow-hidden shadow-2xl">
<img alt="Roofing Professional at Work" className="w-full h-full object-cover opacity-90 mix-blend-overlay" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6085185e-c1f3-4945-a3e7-97b75c6312e8_3840w.png" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6085185e-c1f3-4945-a3e7-97b75c6312e8_3840w.png"/>

<video aria-label="Roofing Professional at Work" className="absolute inset-0 w-full h-full object-cover" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3ea66d3c-721b-420b-9141-9c9a045ffb76_3840w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/73af17e7-cff5-4950-9aee-789944777149/1780413109434-f5a94810-c336-4dc4-9bb2-3595fa1cca06.mp4"></video>
</div>

<div className="badge-pulse absolute -bottom-6 -left-6 bg-brand-dark/90 backdrop-blur border border-brand-accent rounded-full px-5 py-3 flex items-center gap-3 z-10 opacity-0 animate-[fadeUp_0.5s_ease-out_1s_forwards]">
<i className="fa-solid fa-shield-halved text-brand-accent text-lg"></i>
<span className="text-[13px] font-bold text-white tracking-wide">
                Serving Dallas Since 2008
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-brand-accent py-[14px] overflow-hidden relative z-10 border-b border-brand-dark/10">
<div className="marquee-container text-white text-[12px] uppercase tracking-[0.1em] font-semibold whitespace-nowrap flex items-center">

<div className="flex-shrink-0 flex items-center justify-around w-1/2">
<span className="flex items-center gap-2">
<i className="fa-solid fa-star text-white"></i>
            4.9 Google Rating
          </span>
<span className="mx-6 text-white/50">·</span>
<span className="flex items-center gap-2">
<i className="fa-solid fa-check text-white"></i>
            Licensed &amp; Insured
          </span>
<span className="mx-6 text-white/50">·</span>
<span className="flex items-center gap-2">
<i className="fa-solid fa-award text-white"></i>
            BBB Accredited
          </span>
<span className="mx-6 text-white/50">·</span>
<span className="flex items-center gap-2">
<i className="fa-solid fa-calendar-check text-white"></i>
            15+ Years in Business
          </span>
<span className="mx-6 text-white/50">·</span>
<span className="flex items-center gap-2">
<i className="fa-solid fa-thumbs-up text-white"></i>
            #1 Rated Roofing in Dallas
          </span>
<span className="mx-6 text-white/50">·</span>
</div>

<div className="flex-shrink-0 flex items-center justify-around w-1/2">
<span className="flex items-center gap-2">
<i className="fa-solid fa-star text-white"></i>
            4.9 Google Rating
          </span>
<span className="mx-6 text-white/50">·</span>
<span className="flex items-center gap-2">
<i className="fa-solid fa-check text-white"></i>
            Licensed &amp; Insured
          </span>
<span className="mx-6 text-white/50">·</span>
<span className="flex items-center gap-2">
<i className="fa-solid fa-award text-white"></i>
            BBB Accredited
          </span>
<span className="mx-6 text-white/50">·</span>
<span className="flex items-center gap-2">
<i className="fa-solid fa-calendar-check text-white"></i>
            15+ Years in Business
          </span>
<span className="mx-6 text-white/50">·</span>
<span className="flex items-center gap-2">
<i className="fa-solid fa-thumbs-up text-white"></i>
            #1 Rated Roofing in Dallas
          </span>
<span className="mx-6 text-white/50">·</span>
</div>
</div>
</section>

<section className="bg-brand-light py-20 relative z-10 border-b border-gray-200">
<div className="container mx-auto px-6 md:px-12">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-0 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200" id="trust-bar">
<div className="flex flex-col items-center py-4 md:py-0">
<i className="fa-solid fa-calendar-days text-[28px] text-brand-accent mb-3"></i>
<div className="font-display font-bold text-[56px] text-brand-dark leading-none mb-1">
<span className="counter" data-target="15">0</span>
</div>
<span className="text-[13px] uppercase tracking-[0.1em] text-gray-500 font-medium">
              Years in Business
            </span>
</div>
<div className="flex flex-col items-center py-4 md:py-0">
<i className="fa-solid fa-house-chimney text-[28px] text-brand-accent mb-3"></i>
<div className="font-display font-bold text-[56px] text-brand-dark leading-none mb-1">
<span className="counter" data-target="2500">0</span>
              +
            </div>
<span className="text-[13px] uppercase tracking-[0.1em] text-gray-500 font-medium">
              Roofs Installed
            </span>
</div>
<div className="flex flex-col items-center py-4 md:py-0 col-span-2 md:col-span-1 border-t-0 md:border-t-0">
<i className="fa-solid fa-users text-[28px] text-brand-accent mb-3"></i>
<div className="font-display font-bold text-[56px] text-brand-dark leading-none mb-1">
<span className="counter" data-target="100">0</span>
              %
            </div>
<span className="text-[13px] uppercase tracking-[0.1em] text-gray-500 font-medium">
              Happy Clients
            </span>
</div>
<div className="flex flex-col items-center py-4 md:py-0">
<i className="fa-solid fa-stopwatch text-[28px] text-brand-accent mb-3"></i>
<div className="font-display font-bold text-[56px] text-brand-dark leading-none mb-1">
<span className="counter" data-target="24">0</span>
              h
            </div>
<span className="text-[13px] uppercase tracking-[0.1em] text-gray-500 font-medium">
              Response Time
            </span>
</div>
<div className="flex flex-col items-center py-4 md:py-0">
<i className="fa-solid fa-star text-[28px] text-brand-accent mb-3"></i>
<div className="font-display font-bold text-[56px] text-brand-dark leading-none mb-1">
<span className="counter-decimal" data-target="4.9">0.0</span>
</div>
<span className="text-[13px] uppercase tracking-[0.1em] text-gray-500 font-medium">
              Google Rating
            </span>
</div>
</div>
</div>
</section>

<section className="bg-gradient-to-br from-[#0a1628] to-[#0D1B2A] py-[100px] relative z-10" id="services">
<div className="container mx-auto px-6 md:px-12">

<div className="mb-16">
<span className="text-brand-accent text-xs font-semibold uppercase tracking-[0.15em] mb-3 block" data-aos="fade-up">
            What We Do
          </span>
<h2 className="font-display font-bold text-[34px] md:text-[52px] text-white leading-[1.1] tracking-tight mb-4" data-aos="fade-up" data-aos-delay="80">
            COMPREHENSIVE ROOFING SOLUTIONS
          </h2>
<p className="text-[18px] text-white/70 max-w-[560px] leading-[1.6]" data-aos="fade-up" data-aos-delay="160">
            From minor leak repairs to complete structural overhauls, our
            certified crews deliver engineered protection designed to weather
            any Texas storm.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-6">

<div className="glass-card featured p-10 rounded-2xl md:row-span-2 flex flex-col justify-end min-h-[400px] service-card cursor-pointer group overflow-hidden" data-aos="fade-up" data-aos-delay="200">
<div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
<img alt="Roof Replacement" className="w-full h-full object-cover opacity-50" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/52da69bd-f968-4f12-b3b7-b801e66ce1f4_3840w.png" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/52da69bd-f968-4f12-b3b7-b801e66ce1f4_3840w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/60 to-transparent"></div>
</div>
<div className="absolute top-8 left-8 bg-brand-accent/20 p-4 rounded-xl border border-brand-accent/30 z-10">
<i className="fa-solid fa-house-chimney-crack text-[40px] text-brand-accent"></i>
</div>
<div className="mt-auto z-10 relative">
<h3 className="font-display font-bold text-[28px] text-white tracking-tight mb-3">
                Complete Roof Replacement
              </h3>
<p className="text-[16px] text-white/80 leading-[1.6] mb-6">
                Tear-offs and brand new architectural shingle or metal
                installations. We strip to the deck, inspect the structure, and
                build a defense system backed by a lifetime warranty.
              </p>
<span className="text-brand-accent text-[14px] font-semibold group-hover:text-white transition-colors flex items-center gap-2">
                Learn More
                <i className="fa-solid fa-arrow-right text-xs"></i>
</span>
</div>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col service-card cursor-pointer group overflow-hidden" data-aos="fade-up" data-aos-delay="280">
<div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
<img alt="Emergency Leak Repair" className="w-full h-full object-cover opacity-50" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c0aed6e5-a791-47b2-877b-8616d71fca30_3840w.png" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c0aed6e5-a791-47b2-877b-8616d71fca30_3840w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/60 to-transparent"></div>
</div>
<i className="fa-solid fa-hammer text-[32px] text-brand-accent mb-6 relative z-10"></i>
<h3 className="font-display font-bold text-[22px] text-white tracking-tight mb-2 relative z-10">
              Emergency Leak Repair
            </h3>
<p className="text-[15px] text-white/70 leading-[1.6] mb-4 line-clamp-2 relative z-10">
              Fast-response crews to stop active leaks, assess structural water
              damage, and patch vulnerabilities before they compromise your
              home's interior.
            </p>
<span className="text-brand-accent text-[14px] font-semibold mt-auto group-hover:text-white transition-colors relative z-10">
              Learn More →
            </span>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col service-card cursor-pointer group overflow-hidden" data-aos="fade-up" data-aos-delay="360">
<div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
<img alt="Storm &amp; Hail Damage" className="w-full h-full object-cover opacity-50" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ed386058-1fad-4933-8ca5-dd18ccef152e_3840w.png" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ed386058-1fad-4933-8ca5-dd18ccef152e_3840w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/60 to-transparent"></div>
</div>
<i className="fa-solid fa-cloud-bolt text-[32px] text-brand-accent mb-6 relative z-10"></i>
<h3 className="font-display font-bold text-[22px] text-white tracking-tight mb-2 relative z-10">
              Storm &amp; Hail Damage
            </h3>
<p className="text-[15px] text-white/70 leading-[1.6] mb-4 line-clamp-2 relative z-10">
              Comprehensive post-storm inspections and full insurance claims
              assistance to restore your property swiftly after severe Texas
              weather events.
            </p>
<span className="text-brand-accent text-[14px] font-semibold mt-auto group-hover:text-white transition-colors relative z-10">
              Learn More →
            </span>
</div>

<div className="glass-card p-8 rounded-2xl md:col-span-2 flex flex-col md:flex-row items-start md:items-center justify-between service-card cursor-pointer group overflow-hidden" data-aos="fade-up" data-aos-delay="440">
<div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
<img alt="Commercial Flat Roofing" className="w-full h-full object-cover opacity-50" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dc8f31a1-49b5-400f-b831-523b472fafe3_3840w.png" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dc8f31a1-49b5-400f-b831-523b472fafe3_3840w.png"/>
<div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0D1B2A] via-[#0D1B2A]/80 to-[#0D1B2A]/20"></div>
</div>
<div className="flex items-start gap-6 mb-4 md:mb-0 relative z-10">
<i className="fa-solid fa-building text-[32px] text-brand-accent mt-1"></i>
<div>
<h3 className="font-display font-bold text-[22px] text-white tracking-tight mb-2">
                  Commercial Flat Roofing
                </h3>
<p className="text-[15px] text-white/70 leading-[1.6] max-w-2xl">
                  Specializing in TPO, EPDM, and modified bitumen for Dallas
                  businesses. Energy-efficient coatings and rigorous maintenance
                  programs to protect your assets.
                </p>
</div>
</div>
<span className="text-brand-accent text-[14px] font-semibold whitespace-nowrap group-hover:text-white transition-colors flex-shrink-0 relative z-10">
              Explore Commercial →
            </span>
</div>
</div>
</div>
</section>

<section className="bg-brand-light py-[100px] w-full overflow-hidden" id="why-us">
<div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">

<div className="w-full md:w-[48%] relative" data-aos="fade-right">
<div className="relative w-full aspect-square md:aspect-[4/5] rounded-[24px] overflow-hidden shadow-2xl bg-gradient-to-br from-gray-200 to-gray-400">
<video aria-label="Roofing Expertise" className="absolute inset-0 w-full h-full object-cover" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e0b46450-14de-4413-a33b-ccd0203ac17d_3840w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/73af17e7-cff5-4950-9aee-789944777149/1780412785555-8bd8738f-25c4-4089-b0c7-cd1996703369.mp4"></video>
</div>

<div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl hidden lg:block border-t-4 border-brand-accent">
<div className="font-display font-bold text-[42px] text-brand-dark leading-none">
              2,500+
            </div>
<div className="text-[14px] text-gray-500 font-medium">
              Roofs Restored in Texas
            </div>
</div>
</div>

<div className="w-full md:w-[48%]">
<span className="text-brand-accent text-xs font-semibold uppercase tracking-[0.15em] mb-3 block" data-aos="fade-left">
            Why Choose Us
          </span>
<h2 className="font-display font-bold text-[30px] md:text-[46px] text-brand-dark leading-[1.15] tracking-tight mb-6" data-aos="fade-left">
            WE DON'T JUST NAIL SHINGLES. WE ENGINEER PROTECTION.
          </h2>
<p className="text-[20px] text-brand-dark font-semibold mb-8 border-l-4 border-brand-accent pl-4" data-aos="fade-left" data-aos-delay="100">
            15 years serving Dallas. Zero callbacks on structural work. Rated
            4.9 stars by 340+ homeowners.
          </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-4" data-aos="fade-left" data-aos-delay="100">
<i className="fa-solid fa-circle-check text-brand-accent text-[20px] mt-1"></i>
<span className="text-[17px] text-gray-700 leading-[1.5]">
<strong>Owens Corning Preferred Contractor:</strong>
                Access to premium materials and exclusive lifetime extended
                warranties.
              </span>
</li>
<li className="flex items-start gap-4" data-aos="fade-left" data-aos-delay="200">
<i className="fa-solid fa-circle-check text-brand-accent text-[20px] mt-1"></i>
<span className="text-[17px] text-gray-700 leading-[1.5]">
<strong>Transparent Pricing:</strong>
                No hidden fees, no hard-sell tactics. You get a detailed,
                itemized digital quote same-day.
              </span>
</li>
<li className="flex items-start gap-4" data-aos="fade-left" data-aos-delay="300">
<i className="fa-solid fa-circle-check text-brand-accent text-[20px] mt-1"></i>
<span className="text-[17px] text-gray-700 leading-[1.5]">
<strong>Immaculate Cleanup:</strong>
                We use magnetic sweeps and tarps to ensure your yard is cleaner
                than when we arrived.
              </span>
</li>
<li className="flex items-start gap-4" data-aos="fade-left" data-aos-delay="400">
<i className="fa-solid fa-circle-check text-brand-accent text-[20px] mt-1"></i>
<span className="text-[17px] text-gray-700 leading-[1.5]">
<strong>Insurance Claims Specialists:</strong>
                We handle the entire process with your adjuster to maximize your
                approved coverage.
              </span>
</li>
</ul>
<a className="btn-fill inline-block bg-brand-accent text-white text-[16px] font-semibold px-8 py-4 rounded-md shadow-lg" data-aos="fade-up" data-aos-delay="500" href="#contact">
            Get Started Today
          </a>
</div>
</div>
</section>

<section className="bg-brand-dark py-[100px] w-full relative border-t border-white/5" id="reviews">
<div className="container mx-auto px-6 md:px-12">
<div className="text-center mb-16">
<h2 className="font-display font-bold text-[34px] md:text-[52px] text-white tracking-tight mb-3" data-aos="fade-up">
            PROVEN BY OUR COMMUNITY
          </h2>
<p className="text-[18px] text-white/65" data-aos="fade-up" data-aos-delay="100">
            What our Dallas customers are saying
          </p>
</div>

<div className="swiper testimonials-swiper pb-10">
<div className="swiper-wrapper">
<div className="swiper-slide">
<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[16px] p-8 h-full flex flex-col relative">
<div className="text-brand-accent tracking-[2px] text-[22px] mb-4">
                  ★★★★★
                </div>
<p className="text-[16px] text-white/85 leading-[1.75] italic mb-6 flex-grow">
                  "After the hail storm last April, 3 different companies tried
                  to sell us roofs we didn't need. USA Home did an honest
                  inspection, found minor damage, and fixed it for a fraction of
                  the cost. When it's time for a full replacement, they are the
                  only ones I'm calling."
                </p>
<div className="h-[1px] w-full bg-white/10 my-5"></div>
<div className="flex justify-between items-center">
<span className="text-[15px] font-bold text-white">
                    Michael R.
                  </span>
<span className="text-[12px] text-white/50 flex items-center gap-1">
<i className="fa-brands fa-google"></i>
                    via Google Reviews
                  </span>
</div>
</div>
</div>
<div className="swiper-slide">
<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[16px] p-8 h-full flex flex-col relative">
<div className="text-brand-accent tracking-[2px] text-[22px] mb-4">
                  ★★★★★
                </div>
<p className="text-[16px] text-white/85 leading-[1.75] italic mb-6 flex-grow">
                  "Incredible communication from start to finish. They stripped
                  our old leaking roof and installed the new architectural
                  shingles in a single day. The cleanup crew was
                  meticulous—didn't find a single nail in the driveway. True
                  professionals."
                </p>
<div className="h-[1px] w-full bg-white/10 my-5"></div>
<div className="flex justify-between items-center">
<span className="text-[15px] font-bold text-white">Sarah T.</span>
<span className="text-[12px] text-white/50 flex items-center gap-1">
<i className="fa-brands fa-google"></i>
                    via Google Reviews
                  </span>
</div>
</div>
</div>
<div className="swiper-slide">
<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[16px] p-8 h-full flex flex-col relative">
<div className="text-brand-accent tracking-[2px] text-[22px] mb-4">
                  ★★★★★
                </div>
<p className="text-[16px] text-white/85 leading-[1.75] italic mb-6 flex-grow">
                  "Their team navigated my insurance claim perfectly. The
                  adjuster initially denied full coverage, but USA Home provided
                  the technical evidence needed to get the entire roof
                  replacement approved. They saved me thousands out of pocket."
                </p>
<div className="h-[1px] w-full bg-white/10 my-5"></div>
<div className="flex justify-between items-center">
<span className="text-[15px] font-bold text-white">David L.</span>
<span className="text-[12px] text-white/50 flex items-center gap-1">
<i className="fa-brands fa-google"></i>
                    via Google Reviews
                  </span>
</div>
</div>
</div>
<div className="swiper-slide">
<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[16px] p-8 h-full flex flex-col relative">
<div className="text-brand-accent tracking-[2px] text-[22px] mb-4">
                  ★★★★★
                </div>
<p className="text-[16px] text-white/85 leading-[1.75] italic mb-6 flex-grow">
                  "We run a small retail plaza and had persistent flat roof
                  leaks that three other contractors failed to permanently fix.
                  USA Home applied a TPO system that has been completely
                  watertight for two years now. Exceptional commercial work."
                </p>
<div className="h-[1px] w-full bg-white/10 my-5"></div>
<div className="flex justify-between items-center">
<span className="text-[15px] font-bold text-white">
                    Robert K.
                  </span>
<span className="text-[12px] text-white/50 flex items-center gap-1">
<i className="fa-brands fa-google"></i>
                    via Google Reviews
                  </span>
</div>
</div>
</div>
<div className="swiper-slide">
<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[16px] p-8 h-full flex flex-col relative">
<div className="text-brand-accent tracking-[2px] text-[22px] mb-4">
                  ★★★★★
                </div>
<p className="text-[16px] text-white/85 leading-[1.75] italic mb-6 flex-grow">
                  "I appreciated the digital quote system. Very transparent, no
                  high-pressure sales pitch sitting in my living room. The crew
                  showed up exactly at 7 AM as promised and the new roof looks
                  fantastic. Highly recommend."
                </p>
<div className="h-[1px] w-full bg-white/10 my-5"></div>
<div className="flex justify-between items-center">
<span className="text-[15px] font-bold text-white">Emily C.</span>
<span className="text-[12px] text-white/50 flex items-center gap-1">
<i className="fa-brands fa-google"></i>
                    via Google Reviews
                  </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-brand-light py-[80px] w-full bg-texture border-t border-gray-200">
<div className="container mx-auto px-6 md:px-12 text-center flex flex-col items-center">
<span className="text-brand-accent text-xs font-semibold uppercase tracking-[0.15em] mb-4 block" data-aos="fade-up">
          Ready to get started?
        </span>
<h2 className="font-display font-bold text-[32px] md:text-[52px] text-brand-dark tracking-tight mb-4 max-w-[700px] leading-[1.1]" data-aos="fade-up" data-aos-delay="80">
          GET A FREE IN-HOME ESTIMATE THIS WEEK
        </h2>
<p className="text-[20px] text-gray-500 mb-8" data-aos="fade-up" data-aos-delay="160">
          No pressure. No obligation. We show up on time or it's free.
        </p>
<a className="font-display font-bold text-[44px] text-brand-accent hover:text-brand-dark transition-colors mb-8 inline-block" data-aos="fade-up" data-aos-delay="200" href="tel:2145550198">
          (214) 555-0198
        </a>
<a className="btn-fill bg-brand-accent text-white text-[18px] font-semibold px-9 py-4 rounded-md shadow-xl" data-aos="fade-up" data-aos-delay="250" href="#contact">
          Book Your Free Quote Today
        </a>
<p className="text-[13px] text-gray-400 mt-6" data-aos="fade-up" data-aos-delay="300">
          Typically responds within 2 hours · Licensed &amp; Insured · Serving
          Dallas Since 2008
        </p>
</div>
</section>

<section className="bg-white py-[80px] w-full relative" id="contact">
<div className="container mx-auto px-6 md:px-12">
<h2 className="font-display font-bold text-[48px] text-brand-dark tracking-tight mb-12" data-aos="fade-up">
          Get In Touch
        </h2>
<div className="flex flex-col md:flex-row gap-16">

<div className="w-full md:w-1/2 flex flex-col" data-aos="fade-up" data-aos-delay="100">
<h3 className="text-[28px] font-bold text-brand-dark mb-2">
              Ready to talk?
            </h3>
<p className="text-[17px] text-gray-500 mb-8">
              Proudly serving Dallas and surrounding areas.
            </p>
<div className="space-y-6 mb-10">
<a className="flex items-center gap-4 group" href="tel:2145550198">
<div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-colors">
<i className="fa-solid fa-phone text-brand-accent group-hover:text-white text-lg"></i>
</div>
<span className="text-[24px] font-bold text-brand-dark group-hover:text-brand-accent transition-colors">
                  (214) 555-0198
                </span>
</a>
<a className="flex items-center gap-4 group" href="mailto:quote@usahome-roof.com">
<div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-colors">
<i className="fa-solid fa-envelope text-brand-accent group-hover:text-white text-lg"></i>
</div>
<span className="text-[17px] font-medium text-brand-dark group-hover:text-brand-accent transition-colors">
                  quote@usahome-roof.com
                </span>
</a>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center">
<i className="fa-solid fa-clock text-brand-accent text-lg"></i>
</div>
<div className="flex flex-col">
<span className="text-[15px] font-medium text-brand-dark">
                    Mon-Fri: 7:00 AM - 6:00 PM
                  </span>
<span className="text-[15px] font-medium text-brand-dark">
                    Saturday: 8:00 AM - 2:00 PM
                  </span>
</div>
</div>
</div>
<div className="bg-brand-light p-6 rounded-xl border border-gray-100">
<h4 className="text-[15px] font-bold text-brand-dark mb-3">
                Also serving:
              </h4>
<ul className="text-[14px] text-gray-500 space-y-2">
<li>
<i className="fa-solid fa-location-dot text-brand-accent mr-2 text-xs"></i>
                  Plano, TX
                </li>
<li>
<i className="fa-solid fa-location-dot text-brand-accent mr-2 text-xs"></i>
                  Frisco, TX
                </li>
<li>
<i className="fa-solid fa-location-dot text-brand-accent mr-2 text-xs"></i>
                  Richardson, TX
                </li>
<li>
<i className="fa-solid fa-location-dot text-brand-accent mr-2 text-xs"></i>
                  Garland, TX
                </li>
</ul>
</div>
</div>

<div className="w-full md:w-1/2" data-aos="fade-up" data-aos-delay="200">
<div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 h-full">
<form className="space-y-5 flex flex-col h-full" id="contact-form">
<div>
<label className="block text-[14px] font-medium text-gray-700 mb-1" htmlFor="fullName">
                    Full Name
                  </label>
<input className="input-glow w-full border border-gray-300 rounded-[8px] px-4 py-[14px] text-brand-dark bg-gray-50 focus:bg-white transition-colors" id="fullName" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-[14px] font-medium text-gray-700 mb-1" htmlFor="phone">
                    Phone Number
                  </label>
<input className="input-glow w-full border border-gray-300 rounded-[8px] px-4 py-[14px] text-brand-dark bg-gray-50 focus:bg-white transition-colors" id="phone" placeholder="(555) 123-4567" required="" type="tel"/>
</div>
<div>
<label className="block text-[14px] font-medium text-gray-700 mb-1" htmlFor="service">
                    Service Needed
                  </label>
<select className="input-glow w-full border border-gray-300 rounded-[8px] px-4 py-[14px] text-brand-dark bg-gray-50 focus:bg-white transition-colors appearance-none" id="service" required="" style={{backgroundImage: 'url(\'data:image/svg+xml', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem top 50%', backgroundSize: '0.65rem auto'}}>
<option disabled="" selected="" value="">
                      Select a service...
                    </option>
<option value="Replacement">Roof Replacement</option>
<option value="Repair">Roof Repair (Leaks, etc.)</option>
<option value="Storm">Storm/Hail Damage Inspection</option>
<option value="Commercial">Commercial Roofing</option>
<option value="Other">Other / Not Sure</option>
</select>
</div>
<div className="flex-grow">
<label className="block text-[14px] font-medium text-gray-700 mb-1" htmlFor="message">
                    Anything else we should know? (optional)
                  </label>
<textarea className="input-glow w-full border border-gray-300 rounded-[8px] px-4 py-[14px] text-brand-dark bg-gray-50 focus:bg-white transition-colors resize-none h-full" id="message" placeholder="Tell us about the issue..." rows="3"></textarea>
</div>
<button className="btn-fill w-full bg-brand-accent text-white text-[16px] font-semibold py-[16px] rounded-[8px] mt-2 shadow-md" type="submit">
                  Send My Request →
                </button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-brand-dark w-full border-t-[3px] border-brand-accent relative z-10 pt-[64px] pb-[32px]">
<div className="container mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="flex flex-col">
<a className="font-display font-bold text-[24px] text-white tracking-tight mb-3" href="#">
              USA HOME ROOFING
            </a>
<p className="text-[14px] text-white/60 mb-6 line-height-[1.6]">
              Dallas's trusted partner for resilient, expertly engineered
              roofing systems. Protecting families since 2008.
            </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[20px] text-white hover:bg-brand-accent transition-colors" href="#">
<i className="fa-brands fa-facebook-f"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[20px] text-white hover:bg-brand-accent transition-colors" href="#">
<i className="fa-brands fa-instagram"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[20px] text-white hover:bg-brand-accent transition-colors" href="#">
<i className="fa-brands fa-google"></i>
</a>
</div>
</div>

<div className="flex flex-col">
<h4 className="text-[13px] font-semibold uppercase tracking-[0.1em] text-brand-accent mb-6">
              Services
            </h4>
<ul className="space-y-3">
<li>
<a className="text-[14px] text-white/75 hover:text-white transition-colors" href="#services">
                  Roof Replacement
                </a>
</li>
<li>
<a className="text-[14px] text-white/75 hover:text-white transition-colors" href="#services">
                  Emergency Leak Repair
                </a>
</li>
<li>
<a className="text-[14px] text-white/75 hover:text-white transition-colors" href="#services">
                  Storm Damage Restoration
                </a>
</li>
<li>
<a className="text-[14px] text-white/75 hover:text-white transition-colors" href="#services">
                  Commercial Flat Roofing
                </a>
</li>
<li>
<a className="text-[14px] text-white/75 hover:text-white transition-colors" href="#services">
                  Insurance Claims
                </a>
</li>
</ul>
</div>

<div className="flex flex-col">
<h4 className="text-[13px] font-semibold uppercase tracking-[0.1em] text-brand-accent mb-6">
              Contact Us
            </h4>
<ul className="space-y-4">
<li>
<a className="text-[14px] text-white hover:text-brand-accent transition-colors flex items-center gap-3" href="tel:2145550198">
<i className="fa-solid fa-phone w-4"></i>
                  (214) 555-0198
                </a>
</li>
<li>
<a className="text-[14px] text-white hover:text-brand-accent transition-colors flex items-center gap-3" href="mailto:quote@usahome-roof.com">
<i className="fa-solid fa-envelope w-4"></i>
                  quote@usahome-roof.com
                </a>
</li>
<li className="text-[14px] text-white/75 flex items-start gap-3">
<i className="fa-solid fa-map-marker-alt w-4 mt-1"></i>
                Serving Dallas Metro Area
              </li>
</ul>
</div>

<div className="flex flex-col">
<h4 className="text-[13px] font-semibold uppercase tracking-[0.1em] text-brand-accent mb-6">
              Company
            </h4>
<ul className="space-y-3">
<li>
<a className="text-[14px] text-white/75 hover:text-white transition-colors" href="#">
                  Home
                </a>
</li>
<li>
<a className="text-[14px] text-white/75 hover:text-white transition-colors" href="#why-us">
                  About Us
                </a>
</li>
<li>
<a className="text-[14px] text-white/75 hover:text-white transition-colors" href="#services">
                  Our Services
                </a>
</li>
<li>
<a className="text-[14px] text-white/75 hover:text-white transition-colors" href="#contact">
                  Contact
                </a>
</li>
<li>
<a className="text-[14px] text-white/75 hover:text-white transition-colors" href="#">
                  Privacy Policy
                </a>
</li>
</ul>
</div>
</div>
<div className="w-full h-[1px] bg-white/10 mb-6"></div>
<div className="text-center">
<p className="text-[13px] text-white/40">
            © 2025 USA Home Roofing. All rights reserved. · Licensed &amp;
            Insured · Lic #ROC394857
          </p>
</div>
</div>
</footer>

<div className="fixed bottom-5 right-5 z-[9999] tooltip-wrapper">
<div className="tooltip absolute bg-brand-dark text-white text-[12px] font-bold px-3 py-1.5 rounded-md whitespace-nowrap mb-2 shadow-lg">
        Call Now
      </div>
<a className="fixed-call-btn w-[58px] h-[58px] bg-brand-accent rounded-full flex items-center justify-center text-white hover:bg-[#d86b0e] transition-colors" href="tel:2145550198">
<i className="fa-solid fa-phone text-[22px]"></i>
</a>
</div>











    </>
  );
}
