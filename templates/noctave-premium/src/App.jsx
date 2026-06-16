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



      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Smooth scroll (Lenis) with anchor fallback
      const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
      function raf(t) { lenis.raf(t); requestAnimationFrame(raf); }
      requestAnimationFrame(raf);
      document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
          const id = a.getAttribute('href');
          if (id.length > 1 && document.querySelector(id)) {
            e.preventDefault();
            lenis.scrollTo(id, { offset: -72 });
            document.getElementById('mobileMenu').classList.add('hidden');
          }
        });
      });

      // Mobile menu
      document.getElementById('menuBtn').addEventListener('click', () => {
        document.getElementById('mobileMenu').classList.toggle('hidden');
      });

      // Scroll reveal
      const io = new IntersectionObserver(entries => {
        entries.forEach(en => {
          if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
        });
      }, { threshold: 0.12 });
      document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    


      (function(){
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        var loader = document.getElementById('loader');
        if (reduce) {
          if (loader) loader.remove();
          try { lenis.destroy(); } catch (e) {}
          document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); });
          document.querySelectorAll('[data-reveal]').forEach(function(el){ el.style.opacity = 1; el.style.transform = 'none'; });
          document.querySelectorAll('.proc-bar').forEach(function(b){ b.style.transform = 'scaleX(1)'; });
          return;
        }
        gsap.registerPlugin(ScrollTrigger);
        try { lenis.stop(); } catch (e) {}

        var heroTl = gsap.timeline({ paused: true });
        heroTl.from('[data-hero-wordmark]', { y: 90, opacity: 0, duration: 1.1, ease: 'power3.out' })
          .from('[data-hero-copy]', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.7')
          .from('[data-card-stack]', { y: 70, scale: 0.92, opacity: 0, duration: 1, ease: 'power3.out' }, '-=0.55')
          .from('[data-hero-cta]', { scale: 0.6, opacity: 0, duration: 0.5, ease: 'back.out(2)' }, '-=0.5')
          .from('[data-meta-card]', { y: 24, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.25');

        var cnt = { v: 0 };
        var cEl = document.getElementById('loaderCount');
        var ltl = gsap.timeline({ onComplete: function(){
          if (loader) loader.remove();
          try { lenis.start(); } catch (e) {}
          heroTl.play();
          ScrollTrigger.refresh();
        }});
        ltl.to('#loader .brand', { opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power2.out' })
          .to('#loaderBar', { scaleX: 1, duration: 1.6, ease: 'power2.inOut' }, '-=0.4')
          .to(cnt, { v: 100, duration: 1.6, ease: 'power2.inOut', onUpdate: function(){ if (cEl) cEl.textContent = ('00' + Math.round(cnt.v)).slice(-3); } }, '<')
          .to('#loader', { yPercent: -100, duration: 0.9, ease: 'power3.inOut', delay: 0.2 });

        gsap.timeline({ scrollTrigger: { trigger: '#hero', start: 'top top', end: '+=55%', scrub: true, pin: true } })
          .to('[data-hero-wordmark]', { yPercent: -35, ease: 'none' }, 0)
          .to('[data-hero-copy]', { opacity: 0, y: -24, ease: 'none' }, 0)
          .to('[data-card-stack]', { y: -50, scale: 1.06, ease: 'none' }, 0)
          .to('[data-hero-card]', { x: function(i){ return (i - 1) * 70; }, y: function(i){ return i % 2 ? -26 : 14; }, rotation: function(i){ return (i - 1) * 9; }, ease: 'none' }, 0);

        var words = gsap.utils.toArray('.typo-word');
        if (words.length) {
          var ttl = gsap.timeline({ scrollTrigger: { trigger: '#typo', start: 'top top', end: '+=130%', scrub: true, pin: true } });
          words.forEach(function(w, i){ ttl.from(w, { x: i % 2 ? 260 : -260, opacity: 0, duration: 1, ease: 'none' }, i * 0.3); });
          ttl.to(words, { x: function(i){ return i % 2 ? -140 : 140; }, duration: 1, ease: 'none' });
        }

        gsap.utils.toArray('[data-reveal]').forEach(function(el){
          gsap.to(el, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%' } });
        });

        gsap.utils.toArray('[data-parallax-frame]').forEach(function(f){
          gsap.fromTo(f, { y: 50 }, { y: -50, ease: 'none', scrollTrigger: { trigger: f, start: 'top bottom', end: 'bottom top', scrub: true } });
          var img = f.querySelector('[data-parallax-img]');
          if (img) gsap.fromTo(img, { y: -34, scale: 1.18 }, { y: 34, scale: 1.04, ease: 'none', scrollTrigger: { trigger: f, start: 'top bottom', end: 'bottom top', scrub: true } });
        });

        [['#features', '.grid > div'], ['#journey', '.grid > div'], ['#reviews', '.grid > figure']].forEach(function(p){
          var root = document.querySelector(p[0]);
          if (!root) return;
          var cards = root.querySelectorAll(p[1]);
          if (!cards.length) return;
          gsap.from(cards, { y: 56, opacity: 0, rotation: 2, duration: 0.9, ease: 'power3.out', stagger: 0.12, scrollTrigger: { trigger: root, start: 'top 72%' } });
        });

        var track = document.getElementById('archiveTrack');
        if (track) {
          gsap.to(track, { x: function(){ return -Math.max(0, track.scrollWidth - window.innerWidth + 48); }, ease: 'none', scrollTrigger: { trigger: '#archive', start: 'top bottom', end: 'bottom top', scrub: true, invalidateOnRefresh: true } });
        }

        gsap.utils.toArray('[data-float-card]').forEach(function(c, i){
          gsap.fromTo(c, { y: 70, opacity: 0 }, { y: i % 2 ? -60 : -30, opacity: 1, ease: 'none', scrollTrigger: { trigger: '#numbers', start: 'top 80%', end: 'bottom top', scrub: true } });
        });

        gsap.utils.toArray('.proc-bar').forEach(function(b){
          gsap.to(b, { scaleX: 1, duration: 1.3, ease: 'power2.out', scrollTrigger: { trigger: b, start: 'top 85%' } });
        });
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div aria-hidden="true" id="loader">
<div className="brand text-6xl sm:text-8xl tracking-tight lowercase font-aboreto font-normal">
        noctave
        <span className="text-[#F05E16]">.</span>
</div>
<div className="w-56 sm:w-72 h-px bg-[#EFE7DA]/15 overflow-hidden">
<div className="h-full w-full bg-[#F05E16]" id="loaderBar"></div>
</div>
<div className="text-sm text-[#EFE7DA]/50 font-sans tabular-nums" id="loaderCount">
        000
      </div>
</div>

<header className="sticky top-0 z-50 bg-[#16100B]/90 backdrop-blur-md border-b border-[#EFE7DA]/10">
<div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
<a className="flex items-center gap-2.5 group" href="#">
<svg className="transition-transform duration-500 group-hover:rotate-12" fill="none" height="26" viewbox="0 0 26 26" width="26">
<path d="M4 4 C16 4, 22 10, 22 22 L13 22 C13 17, 9 13, 4 13 Z" fill="#F05E16"></path>
<circle cx="7" cy="7" fill="#EFE7DA" r="3.5"></circle>
</svg>
<span className="text-base font-semibold tracking-tight font-sans">
            Noctave
          </span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="relative transition-colors hover:text-[#F05E16] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#F05E16] after:transition-all after:duration-300 hover:after:w-full font-sans" href="#about">
            About Us
          </a>
<a className="relative transition-colors hover:text-[#F05E16] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#F05E16] after:transition-all after:duration-300 hover:after:w-full font-sans" href="#features">
            Product
          </a>
<a className="relative transition-colors hover:text-[#F05E16] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#F05E16] after:transition-all after:duration-300 hover:after:w-full font-sans" href="#journey">
            Technology
          </a>
<a className="relative transition-colors hover:text-[#F05E16] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#F05E16] after:transition-all after:duration-300 hover:after:w-full font-sans" href="#reviews">
            Reviews
          </a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-[#F05E16] text-[#2A2018] transition-all duration-300 hover:bg-[#EFE7DA] hover:scale-[1.03] active:scale-95 font-sans" data-hero-cta="" href="#contact">
            Shop
            <i className="w-4 h-4" data-lucide="shopping-bag"></i>
</a>
<button className="md:hidden p-2" id="menuBtn">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>
<div className="hidden md:hidden border-t border-[#EFE7DA]/10 bg-[#16100B] px-6 py-4 flex flex-col gap-4 text-base font-medium" id="mobileMenu">
<a className="hover:text-[#F05E16] transition-colors font-sans" href="#about">
          About Us
        </a>
<a className="hover:text-[#F05E16] transition-colors font-sans" href="#features">
          Product
        </a>
<a className="hover:text-[#F05E16] transition-colors font-sans" href="#journey">
          Technology
        </a>
<a className="hover:text-[#F05E16] transition-colors font-sans" href="#reviews">
          Reviews
        </a>
<a className="hover:text-[#F05E16] transition-colors font-sans" href="#contact">
          Shop
        </a>
</div>
</header>

<section className="relative overflow-hidden" id="hero">
<div className="max-w-7xl mx-auto px-5 sm:px-8 pt-10 sm:pt-14">
<div className="reveal relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 in">
<h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.85] tracking-tight lowercase font-aboreto font-normal" data-hero-wordmark="">
            dark sound
            <span className="text-[#F05E16] font-aboreto font-normal">.</span>
</h1>
<p className="text-base sm:text-lg text-[#EFE7DA]/70 max-w-xs lg:text-right lg:pb-6 font-sans" data-hero-copy="">
            Engineered after midnight, tuned for the quiet hours.
          </p>
</div>
</div>

<div className="relative mt-8 sm:-mt-6 lg:-mt-10">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#F05E16]/15 blur-2xl pointer-events-none"></div>
<div className="bg-[#2A2018] text-[#EFE7DA]">
<div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 sm:py-20 grid md:grid-cols-3 gap-10 items-center">

<div className="reveal order-2 md:order-1 in">
<div className="flex gap-1 text-[#F05E16] mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-base text-[#EFE7DA]/80 leading-relaxed font-sans">
                "Deep, room-filling bass with detail you can feel in the dark."
              </p>
<span className="block mt-3 w-1.5 h-1.5 rounded-full bg-[#F05E16]"></span>
</div>

<div className="reveal order-1 md:order-2 -mt-24 sm:-mt-32 md:-mt-40 flex justify-center in">
<div className="relative group" data-card-stack="">
<img alt="Premium wooden speaker" className="w-56 sm:w-72 md:w-80 aspect-[4/5] object-cover rounded-2xl shadow-2xl shadow-black/40 transition-transform duration-700 group-hover:scale-[1.03] group-hover:-rotate-1" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ccafe75c-e950-4a6e-905b-3b2c443c4082_3840w.png" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ccafe75c-e950-4a6e-905b-3b2c443c4082_3840w.png"/>
<div className="absolute -bottom-4 -right-4 bg-[#F05E16] text-[#2A2018] rounded-full px-4 py-2 text-sm font-semibold shadow-lg transition-transform duration-500 group-hover:scale-110 font-sans" data-meta-card="">
                  €429
                </div>
</div>
</div>

<div className="reveal order-3 in">
<div className="flex gap-3 mb-4">
<span className="w-10 h-10 rounded-full border border-[#EFE7DA]/25 flex items-center justify-center transition-all duration-300 hover:bg-[#F05E16] hover:border-[#F05E16] hover:text-[#2A2018] cursor-pointer">
<i className="w-4 h-4" data-lucide="wifi"></i>
</span>
<span className="w-10 h-10 rounded-full border border-[#EFE7DA]/25 flex items-center justify-center transition-all duration-300 hover:bg-[#F05E16] hover:border-[#F05E16] hover:text-[#2A2018] cursor-pointer">
<i className="w-4 h-4" data-lucide="zap"></i>
</span>
<span className="w-10 h-10 rounded-full border border-[#EFE7DA]/25 flex items-center justify-center transition-all duration-300 hover:bg-[#F05E16] hover:border-[#F05E16] hover:text-[#2A2018] cursor-pointer">
<i className="w-4 h-4" data-lucide="bluetooth"></i>
</span>
</div>
<p className="text-base text-[#EFE7DA]/80 leading-relaxed font-sans">
                One speaker for every night, with sound that never sleeps.
              </p>
</div>
</div>

<div className="reveal max-w-7xl mx-auto px-5 sm:px-8 pb-12 flex items-center justify-center gap-5 in">
<button className="text-[#EFE7DA]/50 hover:text-[#F05E16] transition-all duration-300 hover:-translate-x-1">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<div className="flex gap-4">
<img alt="Speaker thumbnail" className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover ring-2 ring-[#F05E16] transition-transform duration-300 hover:scale-110 cursor-pointer" data-hero-card="" src="https://images.unsplash.com/photo-1558089687-f282ffcbc126?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="Speaker thumbnail" className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer" data-hero-card="" src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="Speaker thumbnail" className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer" data-hero-card="" src="https://images.unsplash.com/photo-1612444530582-fc66183b16f7?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<button className="text-[#EFE7DA]/50 hover:text-[#F05E16] transition-all duration-300 hover:translate-x-1">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>

<div className="bg-[#F05E16] overflow-hidden py-4 sm:py-5">
<div className="marquee-track flex whitespace-nowrap w-max">
<div className="flex items-center gap-8 pr-8">
<span className="flex items-center gap-4 text-3xl sm:text-5xl tracking-tight lowercase text-[#2A2018] font-aboreto font-normal">
<i className="w-7 h-7 sm:w-9 sm:h-9" data-lucide="move-down-left"></i>
              Subscribe
            </span>
<span className="flex items-center gap-4 text-3xl sm:text-5xl tracking-tight lowercase text-[#2A2018] font-aboreto font-normal">
<i className="w-7 h-7 sm:w-9 sm:h-9" data-lucide="move-down-left"></i>
              subscribe
            </span>
<span className="flex items-center gap-4 text-3xl sm:text-5xl tracking-tight lowercase text-[#2A2018] font-aboreto font-normal">
<i className="w-7 h-7 sm:w-9 sm:h-9" data-lucide="move-down-left"></i>
              subscribe
            </span>
<span className="flex items-center gap-4 text-3xl sm:text-5xl tracking-tight lowercase text-[#2A2018] font-aboreto font-normal">
<i className="w-7 h-7 sm:w-9 sm:h-9" data-lucide="move-down-left"></i>
              subscribe
            </span>
</div>
<div aria-hidden="true" className="flex items-center gap-8 pr-8">
<span className="flex items-center gap-4 text-3xl sm:text-5xl tracking-tight lowercase text-[#2A2018] font-aboreto font-normal">
<i className="w-7 h-7 sm:w-9 sm:h-9" data-lucide="move-down-left"></i>
              subscribe
            </span>
<span className="flex items-center gap-4 text-3xl sm:text-5xl tracking-tight lowercase text-[#2A2018] font-aboreto font-normal">
<i className="w-7 h-7 sm:w-9 sm:h-9" data-lucide="move-down-left"></i>
              subscribe
            </span>
<span className="flex items-center gap-4 text-3xl sm:text-5xl tracking-tight lowercase text-[#2A2018] font-aboreto font-normal">
<i className="w-7 h-7 sm:w-9 sm:h-9" data-lucide="move-down-left"></i>
              subscribe
            </span>
<span className="flex items-center gap-4 text-3xl sm:text-5xl tracking-tight lowercase text-[#2A2018] font-aboreto font-normal">
<i className="w-7 h-7 sm:w-9 sm:h-9" data-lucide="move-down-left"></i>
              subscribe
            </span>
</div>
</div>
</div>
</section>
<section className="relative overflow-hidden py-28 sm:py-36 bg-[#16100B]" id="typo">
<div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col gap-3">
<div className="typo-word text-6xl sm:text-8xl lg:text-9xl tracking-tight lowercase leading-none font-aboreto font-normal">
          listen
        </div>
<div className="typo-word self-end text-6xl sm:text-8xl lg:text-9xl tracking-tight lowercase leading-none text-[#F05E16] font-aboreto font-normal">
          deeper
        </div>
<div className="typo-word text-6xl sm:text-8xl lg:text-9xl tracking-tight lowercase leading-none text-[#EFE7DA]/35 font-aboreto font-normal">
          after dark
        </div>
</div>
</section>

<section className="py-20 sm:py-28" id="about">
<div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
<div className="reveal in">
<h2 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight lowercase leading-[0.95] font-aboreto font-normal">
            who we
            <br className="hidden sm:block"/>
            are
          </h2>
<p className="mt-8 text-base text-[#EFE7DA]/70 leading-relaxed max-w-md font-sans">
            Our obsession with acoustics, materials, and the rituals of
            late-night listening drives us to build speakers that disappear into
            the dark and leave only the music.
          </p>
</div>
<div className="reveal in">
<span className="block w-2.5 h-2.5 rounded-full bg-[#F05E16] mb-5"></span>
<p className="text-lg sm:text-xl leading-relaxed text-[#EFE7DA]/85 font-aboreto font-normal">
            At Noctave, we are passionate about the art of sound. With decades
            of audio engineering behind us, we craft speakers built for an
            unparalleled listening experience.
          </p>
<div className="mt-10 group relative overflow-hidden rounded-2xl" data-parallax-frame="">
<img alt="Vintage audio workshop" className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4456d946-34a4-4e2d-ab2d-dc835b1df420_3840w.png" data-parallax-img="" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4456d946-34a4-4e2d-ab2d-dc835b1df420_3840w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2A2018]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
<span className="text-[#EFE7DA] text-sm font-medium font-sans">
                Inside our atelier — Munich, est. 1992
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#2A2018] text-[#EFE7DA] py-20 sm:py-28" id="features">
<div className="max-w-7xl mx-auto px-5 sm:px-8">
<div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 in">
<h2 className="text-5xl sm:text-6xl tracking-tight lowercase leading-[0.95] font-aboreto font-normal">
            built for
            <br/>
            listening
            <span className="text-[#F05E16] font-aboreto font-normal">.</span>
</h2>
<p className="text-base text-[#EFE7DA]/65 max-w-sm leading-relaxed font-sans">
            Each speaker is a harmonious blend of cutting-edge technology and
            sleek design, meticulously crafted to deliver unparalleled sound
            quality.
          </p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
<div className="reveal group bg-[#EFE7DA]/5 border border-[#EFE7DA]/10 rounded-2xl p-7 transition-all duration-500 hover:bg-[#F05E16] hover:border-[#F05E16] hover:-translate-y-2 cursor-default in">
<span className="w-12 h-12 rounded-full bg-[#F05E16]/15 flex items-center justify-center text-[#F05E16] transition-colors duration-500 group-hover:bg-[#2A2018]/15 group-hover:text-[#2A2018]">
<i className="w-5 h-5" data-lucide="audio-waveform"></i>
</span>
<h3 className="mt-6 text-lg font-semibold tracking-tight transition-colors duration-500 group-hover:text-[#2A2018] font-sans">
              Studio Clarity
            </h3>
<p className="mt-2 text-base text-[#EFE7DA]/60 leading-relaxed transition-colors duration-500 group-hover:text-[#2A2018]/75 font-sans">
              Hand-tuned drivers reproduce every note exactly as the artist
              intended.
            </p>
</div>
<div className="reveal group bg-[#EFE7DA]/5 border border-[#EFE7DA]/10 rounded-2xl p-7 transition-all duration-500 hover:bg-[#F05E16] hover:border-[#F05E16] hover:-translate-y-2 cursor-default in">
<span className="w-12 h-12 rounded-full bg-[#F05E16]/15 flex items-center justify-center text-[#F05E16] transition-colors duration-500 group-hover:bg-[#2A2018]/15 group-hover:text-[#2A2018]">
<i className="w-5 h-5" data-lucide="trees"></i>
</span>
<h3 className="mt-6 text-lg font-semibold tracking-tight transition-colors duration-500 group-hover:text-[#2A2018] font-sans">
              Solid Walnut
            </h3>
<p className="mt-2 text-base text-[#EFE7DA]/60 leading-relaxed transition-colors duration-500 group-hover:text-[#2A2018]/75 font-sans">
              Sustainably sourced hardwood cabinets that warm with age, like the
              music itself.
            </p>
</div>
<div className="reveal group bg-[#EFE7DA]/5 border border-[#EFE7DA]/10 rounded-2xl p-7 transition-all duration-500 hover:bg-[#F05E16] hover:border-[#F05E16] hover:-translate-y-2 cursor-default in">
<span className="w-12 h-12 rounded-full bg-[#F05E16]/15 flex items-center justify-center text-[#F05E16] transition-colors duration-500 group-hover:bg-[#2A2018]/15 group-hover:text-[#2A2018]">
<i className="w-5 h-5" data-lucide="bluetooth"></i>
</span>
<h3 className="mt-6 text-lg font-semibold tracking-tight transition-colors duration-500 group-hover:text-[#2A2018] font-sans">
              Seamless Pairing
            </h3>
<p className="mt-2 text-base text-[#EFE7DA]/60 leading-relaxed transition-colors duration-500 group-hover:text-[#2A2018]/75 font-sans">
              Lossless wireless streaming with multi-room sync in under three
              seconds.
            </p>
</div>
<div className="reveal group bg-[#EFE7DA]/5 border border-[#EFE7DA]/10 rounded-2xl p-7 transition-all duration-500 hover:bg-[#F05E16] hover:border-[#F05E16] hover:-translate-y-2 cursor-default in">
<span className="w-12 h-12 rounded-full bg-[#F05E16]/15 flex items-center justify-center text-[#F05E16] transition-colors duration-500 group-hover:bg-[#2A2018]/15 group-hover:text-[#2A2018]">
<i className="w-5 h-5" data-lucide="battery-charging"></i>
</span>
<h3 className="mt-6 text-lg font-semibold tracking-tight transition-colors duration-500 group-hover:text-[#2A2018] font-sans">
              48-Hour Battery
            </h3>
<p className="mt-2 text-base text-[#EFE7DA]/60 leading-relaxed transition-colors duration-500 group-hover:text-[#2A2018]/75 font-sans">
              Two full days of playtime on a single charge, refueled fully in 75
              minutes.
            </p>
</div>
</div>
</div>
</section>

<section className="py-20 sm:py-28" id="journey">
<div className="max-w-7xl mx-auto px-5 sm:px-8">
<div className="reveal max-w-2xl mb-14 in">
<span className="block w-2.5 h-2.5 rounded-full bg-[#F05E16] mb-5"></span>
<h2 className="text-5xl sm:text-6xl tracking-tight lowercase leading-[0.95] font-aboreto font-normal">
            from sketch
            <br/>
            to sound
          </h2>
</div>
<div className="grid md:grid-cols-3 gap-5">
<div className="reveal group relative rounded-2xl bg-[#EFE7DA]/5 border border-[#EFE7DA]/10 p-8 transition-all duration-500 hover:border-[#F05E16]/50 hover:shadow-xl hover:shadow-[#F05E16]/10 hover:-translate-y-1.5 in">
<span className="text-6xl text-[#F05E16]/30 tracking-tight transition-colors duration-500 group-hover:text-[#F05E16] font-aboreto font-normal">
              01
            </span>
<h3 className="mt-6 text-xl tracking-tight font-aboreto font-normal">
              Design &amp; Tune
            </h3>
<p className="mt-3 text-base text-[#EFE7DA]/65 leading-relaxed font-sans">
              Every model begins as a hand-drawn sketch, then spends 500+ hours
              in our anechoic chamber being voiced by ear.
            </p>
<i className="w-5 h-5 mt-6 text-[#F05E16]" data-lucide="pencil-ruler"></i>
</div>
<div className="reveal group relative rounded-2xl bg-[#EFE7DA]/5 border border-[#EFE7DA]/10 p-8 transition-all duration-500 hover:border-[#F05E16]/50 hover:shadow-xl hover:shadow-[#F05E16]/10 hover:-translate-y-1.5 in">
<span className="text-6xl text-[#F05E16]/30 tracking-tight transition-colors duration-500 group-hover:text-[#F05E16] font-aboreto font-normal">
              02
            </span>
<h3 className="mt-6 text-xl tracking-tight font-aboreto font-normal">
              Craft &amp; Assemble
            </h3>
<p className="mt-3 text-base text-[#EFE7DA]/65 leading-relaxed font-sans">
              Cabinets are joined, sanded, and oiled by hand in Munich. Each
              unit is signed by the craftsperson who built it.
            </p>
<i className="w-5 h-5 mt-6 text-[#F05E16]" data-lucide="hammer"></i>
</div>
<div className="reveal group relative rounded-2xl bg-[#EFE7DA]/5 border border-[#EFE7DA]/10 p-8 transition-all duration-500 hover:border-[#F05E16]/50 hover:shadow-xl hover:shadow-[#F05E16]/10 hover:-translate-y-1.5 in">
<span className="text-6xl text-[#F05E16]/30 tracking-tight transition-colors duration-500 group-hover:text-[#F05E16] font-aboreto font-normal">
              03
            </span>
<h3 className="mt-6 text-xl tracking-tight font-aboreto font-normal">
              Listen &amp; Live
            </h3>
<p className="mt-3 text-base text-[#EFE7DA]/65 leading-relaxed font-sans">
              Unbox, pair, and rediscover your record collection. Backed by a
              12-year warranty and lifetime repairs.
            </p>
<i className="w-5 h-5 mt-6 text-[#F05E16]" data-lucide="headphones"></i>
</div>
</div>
</div>
</section>
<section className="bg-[#2A2018] text-[#EFE7DA] py-20 sm:py-28" id="process">
<div className="max-w-7xl mx-auto px-5 sm:px-8">
<div className="mb-12" data-reveal="">
<span className="block w-2.5 h-2.5 rounded-full bg-[#F05E16] mb-5"></span>
<h2 className="text-4xl sm:text-5xl tracking-tight lowercase leading-[0.95] font-aboreto font-normal">
            the process, measured
          </h2>
</div>
<div className="space-y-9">
<div data-reveal="">
<div className="flex items-baseline justify-between mb-3">
<span className="text-sm font-medium font-sans">Acoustic tuning</span>
<span className="text-sm text-[#EFE7DA]/50 font-sans">500 hrs</span>
</div>
<div className="h-1.5 rounded-full bg-[#EFE7DA]/10 overflow-hidden">
<div className="proc-bar h-full w-[92%] rounded-full bg-[#F05E16]"></div>
</div>
</div>
<div data-reveal="">
<div className="flex items-baseline justify-between mb-3">
<span className="text-sm font-medium font-sans">Cabinet joinery</span>
<span className="text-sm text-[#EFE7DA]/50 font-sans">120 hrs</span>
</div>
<div className="h-1.5 rounded-full bg-[#EFE7DA]/10 overflow-hidden">
<div className="proc-bar h-full w-[74%] rounded-full bg-[#F05E16]"></div>
</div>
</div>
<div data-reveal="">
<div className="flex items-baseline justify-between mb-3">
<span className="text-sm font-medium font-sans">Hand finishing</span>
<span className="text-sm text-[#EFE7DA]/50 font-sans">60 hrs</span>
</div>
<div className="h-1.5 rounded-full bg-[#EFE7DA]/10 overflow-hidden">
<div className="proc-bar h-full w-[58%] rounded-full bg-[#F05E16]"></div>
</div>
</div>
<div data-reveal="">
<div className="flex items-baseline justify-between mb-3">
<span className="text-sm font-medium font-sans">
                Final voicing by ear
              </span>
<span className="text-sm text-[#EFE7DA]/50 font-sans">40 hrs</span>
</div>
<div className="h-1.5 rounded-full bg-[#EFE7DA]/10 overflow-hidden">
<div className="proc-bar h-full w-[42%] rounded-full bg-[#F05E16]"></div>
</div>
</div>
</div>
</div>
</section>
<section className="relative py-24 sm:py-32 overflow-hidden bg-[#2A2018] text-[#EFE7DA]" id="numbers">
<div className="max-w-7xl mx-auto px-5 sm:px-8 text-center relative">
<div className="text-[28vw] sm:text-[20vw] leading-none tracking-tight font-aboreto font-normal text-transparent select-none" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1558089687-f282ffcbc126?q=80&amp', backgroundSize: 'cover', backgroundPosition: 'center', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>
          32
        </div>
<p className="text-base text-[#EFE7DA]/60 font-sans mt-2" data-reveal="">
          years of dark sound, etched in walnut
        </p>
<div className="absolute left-2 sm:left-12 top-8 w-44 sm:w-56 rounded-2xl bg-[#16100B] border border-[#EFE7DA]/10 p-4 text-left shadow-2xl shadow-black/40" data-float-card="">
<img alt="Studio Series" className="w-full aspect-[4/3] object-cover rounded-xl" src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="mt-3 text-sm font-medium font-sans">Studio Series</div>
<div className="text-xs text-[#EFE7DA]/50 font-sans">2021 — present</div>
</div>
<div className="absolute right-2 sm:right-12 bottom-4 w-44 sm:w-56 rounded-2xl bg-[#16100B] border border-[#EFE7DA]/10 p-4 text-left shadow-2xl shadow-black/40" data-float-card="">
<img alt="Home Series" className="w-full aspect-[4/3] object-cover rounded-xl" src="https://images.unsplash.com/photo-1612444530582-fc66183b16f7?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="mt-3 text-sm font-medium font-sans">Home Series</div>
<div className="text-xs text-[#EFE7DA]/50 font-sans">2017 — present</div>
</div>
</div>
</section>

<section className="bg-[#2A2018] text-[#EFE7DA] py-20 sm:py-28" id="reviews">
<div className="max-w-7xl mx-auto px-5 sm:px-8">
<div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 in">
<h2 className="text-5xl sm:text-6xl tracking-tight lowercase leading-[0.95] font-aboreto font-normal">
            heard by
            <br/>
            thousands
          </h2>
<div className="flex items-center gap-3">
<div className="flex -space-x-3">
<img alt="Customer" className="w-10 h-10 rounded-full object-cover ring-2 ring-[#2A2018]" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img alt="Customer" className="w-10 h-10 rounded-full object-cover ring-2 ring-[#2A2018]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img alt="Customer" className="w-10 h-10 rounded-full object-cover ring-2 ring-[#2A2018]" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-sm text-[#EFE7DA]/65 font-sans">
              18,000+ happy listeners
            </span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-5">
<figure className="reveal bg-[#EFE7DA]/5 border border-[#EFE7DA]/10 rounded-2xl p-7 transition-all duration-500 hover:border-[#F05E16]/60 hover:-translate-y-1.5 in">
<div className="flex gap-1 text-[#F05E16] mb-4">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
</div>
<blockquote className="text-base text-[#EFE7DA]/80 leading-relaxed font-sans">
              "I've owned speakers three times the price that don't come close.
              The midrange is pure velvet — vinyl finally sounds the way I
              remember it."
            </blockquote>
<figcaption className="mt-6 flex items-center gap-3">
<img alt="Marcus Reinhardt" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-semibold font-sans">
                  Marcus Reinhardt
                </div>
<div className="text-xs text-[#EFE7DA]/50 font-sans">
                  Vinyl Collector, Hamburg
                </div>
</div>
</figcaption>
</figure>
<figure className="reveal bg-[#EFE7DA]/5 border border-[#EFE7DA]/10 rounded-2xl p-7 transition-all duration-500 hover:border-[#F05E16]/60 hover:-translate-y-1.5 in">
<div className="flex gap-1 text-[#F05E16] mb-4">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
</div>
<blockquote className="text-base text-[#EFE7DA]/80 leading-relaxed font-sans">
              "It's furniture-grade beautiful and concert-hall loud. Guests
              always ask about it before they ask about anything else in the
              apartment."
            </blockquote>
<figcaption className="mt-6 flex items-center gap-3">
<img alt="Elena Voss" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-semibold font-sans">Elena Voss</div>
<div className="text-xs text-[#EFE7DA]/50 font-sans">
                  Interior Designer, Vienna
                </div>
</div>
</figcaption>
</figure>
<figure className="reveal bg-[#EFE7DA]/5 border border-[#EFE7DA]/10 rounded-2xl p-7 transition-all duration-500 hover:border-[#F05E16]/60 hover:-translate-y-1.5 in">
<div className="flex gap-1 text-[#F05E16] mb-4">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
</div>
<blockquote className="text-base text-[#EFE7DA]/80 leading-relaxed font-sans">
              "We mix on Noctave monitors in the studio now. If a track sounds
              right on these, it sounds right everywhere. Simple as that."
            </blockquote>
<figcaption className="mt-6 flex items-center gap-3">
<img alt="Jonas Keller" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-semibold font-sans">Jonas Keller</div>
<div className="text-xs text-[#EFE7DA]/50 font-sans">
                  Producer, Munich
                </div>
</div>
</figcaption>
</figure>
</div>
</div>
</section>
<section className="py-20 sm:py-24 overflow-hidden border-y border-[#EFE7DA]/10" id="archive">
<div className="max-w-7xl mx-auto px-5 sm:px-8 mb-10" data-reveal="">
<h2 className="text-4xl sm:text-5xl tracking-tight lowercase leading-[0.95] font-aboreto font-normal">
          from the archive
        </h2>
</div>
<div className="flex gap-5 w-max pl-5 sm:pl-8 will-change-transform" id="archiveTrack">
<article className="group w-64 sm:w-80 shrink-0 rounded-2xl overflow-hidden bg-[#2A2018] border border-[#EFE7DA]/10">
<div className="overflow-hidden">
<img alt="Model One" className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1558089687-f282ffcbc126?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5 flex items-center justify-between">
<span className="text-sm font-medium font-sans">Model One — 1994</span>
<i className="w-4 h-4 text-[#F05E16] transition-transform duration-300 group-hover:translate-x-1" data-lucide="arrow-right"></i>
</div>
</article>
<article className="group w-64 sm:w-80 shrink-0 rounded-2xl overflow-hidden bg-[#2A2018] border border-[#EFE7DA]/10">
<div className="overflow-hidden">
<img alt="Studio Monitor" className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5 flex items-center justify-between">
<span className="text-sm font-medium font-sans">
              Studio Monitor — 2003
            </span>
<i className="w-4 h-4 text-[#F05E16] transition-transform duration-300 group-hover:translate-x-1" data-lucide="arrow-right"></i>
</div>
</article>
<article className="group w-64 sm:w-80 shrink-0 rounded-2xl overflow-hidden bg-[#2A2018] border border-[#EFE7DA]/10">
<div className="overflow-hidden">
<img alt="Nocturne" className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1612444530582-fc66183b16f7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5 flex items-center justify-between">
<span className="text-sm font-medium font-sans">Nocturne — 2012</span>
<i className="w-4 h-4 text-[#F05E16] transition-transform duration-300 group-hover:translate-x-1" data-lucide="arrow-right"></i>
</div>
</article>
<article className="group w-64 sm:w-80 shrink-0 rounded-2xl overflow-hidden bg-[#2A2018] border border-[#EFE7DA]/10">
<div className="overflow-hidden">
<img alt="Midnight Edition" className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5 flex items-center justify-between">
<span className="text-sm font-medium font-sans">
              Midnight Edition — 2019
            </span>
<i className="w-4 h-4 text-[#F05E16] transition-transform duration-300 group-hover:translate-x-1" data-lucide="arrow-right"></i>
</div>
</article>
<article className="group w-64 sm:w-80 shrink-0 rounded-2xl overflow-hidden bg-[#2A2018] border border-[#EFE7DA]/10">
<div className="overflow-hidden">
<img alt="Dark Sound" className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1507646227500-4d389b0012be?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5 flex items-center justify-between">
<span className="text-sm font-medium font-sans">Dark Sound — 2025</span>
<i className="w-4 h-4 text-[#F05E16] transition-transform duration-300 group-hover:translate-x-1" data-lucide="arrow-right"></i>
</div>
</article>
</div>
</section>

<section className="py-20 sm:py-28">
<div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="reveal order-2 lg:order-1 grid grid-cols-2 gap-4 in">
<img alt="Craftsperson at work" className="rounded-2xl aspect-[3/4] object-cover w-full transition-transform duration-700 hover:scale-[1.03] hover:-rotate-1" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dfeaebf2-6c7b-4762-95a1-eaba601c6c65_1600w.png" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dfeaebf2-6c7b-4762-95a1-eaba601c6c65_1600w.png"/>
<img alt="Speaker detail" className="rounded-2xl aspect-[3/4] object-cover w-full mt-8 transition-transform duration-700 hover:scale-[1.03] hover:rotate-1" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/434176d9-cdee-436a-a922-065ffb1d70ce_1600w.png" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/434176d9-cdee-436a-a922-065ffb1d70ce_1600w.png"/>
</div>
<div className="reveal order-1 lg:order-2 in">
<span className="block w-2.5 h-2.5 rounded-full bg-[#F05E16] mb-5"></span>
<h2 className="text-5xl sm:text-6xl tracking-tight lowercase leading-[0.95] font-aboreto font-normal">
            the people
            <br/>
            behind the tone
          </h2>
<p className="mt-8 text-base text-[#EFE7DA]/70 leading-relaxed max-w-lg font-sans">
            We're a team of 41 engineers, woodworkers, and lifelong music
            obsessives. Founded by acoustician Mara Nacht in a Munich workshop,
            we still tune every reference unit by ear — because measurements
            tell you what's correct, but ears tell you what's true.
          </p>
<div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
<div>
<div className="text-3xl tracking-tight text-[#F05E16] font-aboreto font-normal">
                32
              </div>
<div className="text-sm text-[#EFE7DA]/60 mt-1 font-sans">
                Years crafting
              </div>
</div>
<div>
<div className="text-3xl tracking-tight text-[#F05E16] font-aboreto font-normal">
                18k+
              </div>
<div className="text-sm text-[#EFE7DA]/60 mt-1 font-sans">
                Homes filled
              </div>
</div>
<div>
<div className="text-3xl tracking-tight text-[#F05E16] font-aboreto font-normal">
                12yr
              </div>
<div className="text-sm text-[#EFE7DA]/60 mt-1 font-sans">
                Warranty
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="pb-20 sm:pb-28" id="contact">
<div className="max-w-7xl mx-auto px-5 sm:px-8">
<div className="bg-[#F05E16] rounded-3xl overflow-hidden grid lg:grid-cols-2">
<div className="reveal p-8 sm:p-12 lg:p-16 text-[#2A2018] in">
<h2 className="text-4xl sm:text-5xl tracking-tight lowercase leading-[0.95] font-aboreto font-normal">
              hear it for
              <br/>
              yourself
            </h2>
<p className="mt-6 text-base leading-relaxed text-[#2A2018]/80 max-w-md font-sans">
              Book a private listening session in our Munich showroom, or write
              to us — we reply within one business day.
            </p>
<div className="mt-8 space-y-4 text-base">
<a className="flex items-center gap-3 group w-fit" href="mailto:hello@noctave.audio">
<span className="w-9 h-9 rounded-full bg-[#2A2018]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#2A2018] group-hover:text-[#F05E16]">
<i className="w-4 h-4" data-lucide="mail"></i>
</span>
<span className="font-medium group-hover:underline underline-offset-4 font-sans">
                  hello@noctave.audio
                </span>
</a>
<a className="flex items-center gap-3 group w-fit" href="tel:+49891234567">
<span className="w-9 h-9 rounded-full bg-[#2A2018]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#2A2018] group-hover:text-[#F05E16]">
<i className="w-4 h-4" data-lucide="phone"></i>
</span>
<span className="font-medium group-hover:underline underline-offset-4 font-sans">
                  +49 89 123 4567
                </span>
</a>
<div className="flex items-center gap-3 w-fit">
<span className="w-9 h-9 rounded-full bg-[#2A2018]/10 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="map-pin"></i>
</span>
<span className="font-medium font-sans">
                  Leopoldstraße 12, Munich
                </span>
</div>
</div>
</div>
<div className="reveal bg-[#2A2018] p-8 sm:p-12 lg:p-16 in">
<form className="space-y-5" onsubmit="event.preventDefault()">
<div className="grid sm:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium uppercase tracking-wider text-[#EFE7DA]/50 mb-2 font-sans">
                    Name
                  </label>
<input className="w-full bg-[#EFE7DA]/5 border border-[#EFE7DA]/15 rounded-xl px-4 py-3 text-base text-[#EFE7DA] placeholder:text-[#EFE7DA]/30 outline-none transition-all duration-300 focus:border-[#F05E16] focus:ring-2 focus:ring-[#F05E16]/30" placeholder="Your name" type="text"/>
</div>
<div>
<label className="block text-xs font-medium uppercase tracking-wider text-[#EFE7DA]/50 mb-2 font-sans">
                    Email
                  </label>
<input className="w-full bg-[#EFE7DA]/5 border border-[#EFE7DA]/15 rounded-xl px-4 py-3 text-base text-[#EFE7DA] placeholder:text-[#EFE7DA]/30 outline-none transition-all duration-300 focus:border-[#F05E16] focus:ring-2 focus:ring-[#F05E16]/30" placeholder="you@email.com" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-medium uppercase tracking-wider text-[#EFE7DA]/50 mb-2 font-sans">
                  Message
                </label>
<textarea className="w-full bg-[#EFE7DA]/5 border border-[#EFE7DA]/15 rounded-xl px-4 py-3 text-base text-[#EFE7DA] placeholder:text-[#EFE7DA]/30 outline-none transition-all duration-300 focus:border-[#F05E16] focus:ring-2 focus:ring-[#F05E16]/30 resize-none" placeholder="Tell us what you're listening on today…" rows="4"></textarea>
</div>
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F05E16] text-[#2A2018] font-semibold text-base px-8 py-3.5 rounded-full transition-all duration-300 hover:bg-[#EFE7DA] hover:scale-[1.02] active:scale-95 font-sans" type="submit">
                Send Message
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#2A2018] text-[#EFE7DA]">
<div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-10">
<div className="reveal text-5xl sm:text-7xl lg:text-8xl tracking-tight lowercase text-[#EFE7DA]/15 leading-none mb-14 select-none in font-aboreto font-normal">
          noctave
        </div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-[#EFE7DA]/10">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2.5" href="#">
<svg fill="none" height="24" viewbox="0 0 26 26" width="24">
<path d="M4 4 C16 4, 22 10, 22 22 L13 22 C13 17, 9 13, 4 13 Z" fill="#F05E16"></path>
<circle cx="7" cy="7" fill="#EFE7DA" r="3.5"></circle>
</svg>
<span className="text-base font-semibold tracking-tight font-sans">
                Noctave
              </span>
</a>
<p className="mt-4 text-sm text-[#EFE7DA]/55 leading-relaxed max-w-xs font-sans">
              Hand-crafted speakers from Munich. Dark sound since 1992.
            </p>
<div className="mt-5 flex gap-3">
<a aria-label="Instagram" className="w-9 h-9 rounded-full border border-[#EFE7DA]/20 flex items-center justify-center transition-all duration-300 hover:bg-[#F05E16] hover:border-[#F05E16] hover:text-[#2A2018]" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
<a aria-label="Facebook" className="w-9 h-9 rounded-full border border-[#EFE7DA]/20 flex items-center justify-center transition-all duration-300 hover:bg-[#F05E16] hover:border-[#F05E16] hover:text-[#2A2018]" href="#">
<i className="w-4 h-4" data-lucide="facebook"></i>
</a>
<a aria-label="Youtube" className="w-9 h-9 rounded-full border border-[#EFE7DA]/20 flex items-center justify-center transition-all duration-300 hover:bg-[#F05E16] hover:border-[#F05E16] hover:text-[#2A2018]" href="#">
<i className="w-4 h-4" data-lucide="youtube"></i>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold mb-4 font-sans">Media</h4>
<ul className="space-y-3 text-sm text-[#EFE7DA]/55">
<li>
<a className="transition-colors hover:text-[#F05E16] font-sans" href="#">
                  Facebook
                </a>
</li>
<li>
<a className="transition-colors hover:text-[#F05E16] font-sans" href="#">
                  Instagram
                </a>
</li>
<li>
<a className="transition-colors hover:text-[#F05E16] font-sans" href="#">
                  Youtube
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold mb-4 font-sans">Company</h4>
<ul className="space-y-3 text-sm text-[#EFE7DA]/55">
<li>
<a className="transition-colors hover:text-[#F05E16] font-sans" href="#">
                  News &amp; Updates
                </a>
</li>
<li>
<a className="transition-colors hover:text-[#F05E16] font-sans" href="#about">
                  About Us
                </a>
</li>
<li>
<a className="transition-colors hover:text-[#F05E16] font-sans" href="#">
                  Careers
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold mb-4 font-sans">
              Terms &amp; Policy
            </h4>
<ul className="space-y-3 text-sm text-[#EFE7DA]/55">
<li>
<a className="transition-colors hover:text-[#F05E16] font-sans" href="#">
                  Privacy Policy
                </a>
</li>
<li>
<a className="transition-colors hover:text-[#F05E16] font-sans" href="#">
                  Terms of Use
                </a>
</li>
<li>
<a className="transition-colors hover:text-[#F05E16] font-sans" href="#">
                  Accessibility
                </a>
</li>
</ul>
</div>
</div>
<div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EFE7DA]/40">
<span className="font-sans">
            © 2025 Noctave Audio GmbH. All rights reserved.
          </span>
<span className="flex items-center gap-1.5 font-sans">
            Made with
            <i className="w-3.5 h-3.5 text-[#F05E16] fill-current" data-lucide="heart"></i>
            in Munich
          </span>
</div>
</div>
</footer>



    </>
  );
}
