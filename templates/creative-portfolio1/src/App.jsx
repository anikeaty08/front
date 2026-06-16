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



      lucide.createIcons();
      gsap.registerPlugin(ScrollTrigger);

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const noemaLoader = document.querySelector('#noemaLoader');

      if (reducedMotion && noemaLoader) {
        document.body.classList.remove('is-loading');
        noemaLoader.remove();
      }

      if (!reducedMotion) {
        /* ---------- 0 · on load intro ---------- */
        const loader = document.querySelector('#noemaLoader');

        gsap.set(['nav', '#createcta', '#heroWord', '#heroCopy'], { autoAlpha: 0 });
        gsap.set(['#card1', '#card2', '#card3'], { autoAlpha: 0 });
        gsap.set('.loader-letter', { yPercent: 115, autoAlpha: 0 });
        gsap.set(['.loader-tag', '.loader-meta'], { y: 14, autoAlpha: 0 });
        gsap.set('.loader-mark svg path', { strokeDasharray: 80, strokeDashoffset: 80 });
        gsap.set('.loader-scanline', { scaleX: 0 });

        const onLoadTimeline = gsap.timeline({
          defaults: { ease: 'power3.out' },
          onComplete: () => {
            document.body.classList.remove('is-loading');
            if (loader) loader.remove();
            ScrollTrigger.refresh();
          }
        });

        onLoadTimeline
          .to('.loader-mark svg path', { strokeDashoffset: 0, duration: 0.62, stagger: 0.08, ease: 'power2.out' }, 0)
          .to('.loader-letter', { yPercent: 0, autoAlpha: 1, duration: 0.64, stagger: 0.035, ease: 'expo.out' }, 0.14)
          .to('.loader-tag', { y: 0, autoAlpha: 1, duration: 0.44 }, 0.54)
          .to('.loader-meta', { y: 0, autoAlpha: 1, duration: 0.42 }, 0.66)
          .to('.loader-brand', { y: -22, scale: 0.94, duration: 0.52, ease: 'power2.inOut' }, 1.05)
          .to('.loader-scanline', { scaleX: 1, duration: 0.46, ease: 'power2.inOut' }, 1.08)
          .to('.loader-strip', { scaleY: 1, duration: 0.72, stagger: { each: 0.065, from: 'start' }, ease: 'expo.inOut' }, 1.16)
          .to('#noemaLoader', { yPercent: -100, duration: 0.76, ease: 'expo.inOut' }, 1.82)
          .to(['nav', '#createcta'], { autoAlpha: 1, y: 0, duration: 0.48, stagger: 0.045, ease: 'power2.out' }, 1.96)
          .fromTo('#heroWord', { autoAlpha: 0, y: 36, scale: 0.94 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.84, ease: 'expo.out' }, 1.94)
          .fromTo(['#card1', '#card2', '#card3'], { y: 95, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.1, duration: 0.82, ease: 'power3.out' }, 2.16)
          .fromTo('#heroCopy', { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.62, ease: 'power2.out' }, 2.38);

        /* ---------- 1 · hero pinned ---------- */
        const heroTimeline = gsap.timeline({
          scrollTrigger: { trigger: '#hero', start: 'top top', end: '+=130%', scrub: 1, pin: true }
        });
        heroTimeline
          .to('#card1', { x: '-16vw', y: '6vh', rotate: -16, ease: 'none' }, 0)
          .to('#card3', { x: '16vw', y: '-5vh', rotate: 16, ease: 'none' }, 0)
          .to('#card2', { y: '-9vh', rotate: 4, scale: 1.05, ease: 'none' }, 0)
          .to('#heroWord', { scale: 1.12, y: '-6vh', ease: 'none' }, 0)
          .to('#heroCopy', { autoAlpha: 0, y: 40, ease: 'none' }, 0.3);

        /* ---------- 2 · interlude ---------- */
        const interludeTimeline = gsap.timeline({
          scrollTrigger: { trigger: '#interlude', start: 'top top', end: '+=130%', scrub: 1, pin: true }
        });
        interludeTimeline
          .fromTo('#artistsWord', { x: '24vw', rotate: 5 }, { x: '-58vw', rotate: -3, ease: 'none' }, 0)
          .fromTo('#brush1', { x: '-8vw', scale: 0.6, rotate: -20 }, { x: '6vw', scale: 1.15, rotate: 4, ease: 'none' }, 0)
          .fromTo('#brush2', { y: '14vh', scale: 0.5 }, { y: '-8vh', scale: 1.1, ease: 'none' }, 0)
          .from('#interludeCopy', { autoAlpha: 0, y: 40, ease: 'none' }, 0.2);

        /* ---------- 3 · product ---------- */
        const productTimeline = gsap.timeline({
          scrollTrigger: { trigger: '#product', start: 'top top', end: '+=170%', scrub: 1, pin: true }
        });
        productTimeline
          .fromTo('#walletPass', { x: '-65vw', y: '24vh', rotate: -32 }, { x: 0, y: 0, rotate: -7, ease: 'none' }, 0)
          .fromTo('#phoneMock', { x: '65vw', y: '32vh', rotate: 28 }, { x: 0, y: 0, rotate: 7, ease: 'none' }, 0.08)
          .fromTo('#theCardWord', { y: '8vh', scale: 1.05 }, { y: '-8vh', scale: 1, ease: 'none' }, 0)
          .to('#walletPass', { y: '-4vh', rotate: -9, ease: 'none' }, 0.7)
          .to('#phoneMock', { y: '4vh', rotate: 9, ease: 'none' }, 0.7);

        /* ---------- 4 · manifesto ---------- */
        const messyStarts = [
          { x: '-36vw', y: '-28vh', rotate: -18, scale: 0.78 },
          { x: '26vw', y: '-34vh', rotate: 14, scale: 0.6 },
          { x: '-12vw', y: '32vh', rotate: 24, scale: 0.72 },
          { x: '36vw', y: '26vh', rotate: -22, scale: 0.68 },
          { x: '-42vw', y: '8vh', rotate: 10, scale: 0.58 },
          { x: '18vw', y: '-10vh', rotate: -12, scale: 0.78 },
          { x: '-22vw', y: '-3vh', rotate: 28, scale: 0.62 },
          { x: '42vw', y: '-4vh', rotate: -8, scale: 0.72 },
          { x: '-30vw', y: '24vh', rotate: -16, scale: 0.64 },
          { x: '30vw', y: '30vh', rotate: 18, scale: 0.7 }
        ];

        gsap.set('.manifesto-word', {
          x: (i) => messyStarts[i].x,
          y: (i) => messyStarts[i].y,
          rotate: (i) => messyStarts[i].rotate,
          scale: (i) => messyStarts[i].scale
        });

        const manifestoTimeline = gsap.timeline({
          scrollTrigger: { trigger: '#manifesto', start: 'top top', end: '+=170%', scrub: 1, pin: true }
        });
        manifestoTimeline
          .to('.manifesto-word', { x: 0, y: 0, rotate: 0, scale: 1, stagger: 0.025, ease: 'none' }, 0)
          .fromTo('#finallyWord', { autoAlpha: 0, x: '-20vw', rotate: -30, scale: 0.5 }, { autoAlpha: 1, x: 0, rotate: -12, scale: 1, ease: 'none' }, 0.55);

        /* ---------- 5 · archive grid ---------- */
        const archiveTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: '#archive',
            start: 'top top',
            end: '+=190%',
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true
          }
        });
        archiveTimeline
          .fromTo('.archive-img', {
            x: (i, el) => {
              const parent = el.parentElement.getBoundingClientRect();
              const rect = el.getBoundingClientRect();
              return parent.left + parent.width / 2 - (rect.left + rect.width / 2);
            },
            y: (i, el) => {
              const parent = el.parentElement.getBoundingClientRect();
              const rect = el.getBoundingClientRect();
              return parent.top + parent.height / 2 - (rect.top + rect.height / 2);
            },
            scale: (i) => i === 7 ? 1.9 : 0.24,
            autoAlpha: (i) => i === 7 ? 1 : 0,
            rotate: (i) => (i - 7) * 3,
            zIndex: (i) => i === 7 ? 5 : 1
          }, {
            x: 0,
            y: 0,
            scale: 1,
            autoAlpha: 1,
            rotate: 0,
            stagger: { each: 0.025, from: 'center' },
            ease: 'none'
          }, 0)
          .fromTo('#archiveWord', { y: '8vh', scale: 1.08 }, { y: '-8vh', scale: 0.98, ease: 'none' }, 0);

        /* ---------- 6 · builder ---------- */
        const builderTimeline = gsap.timeline({
          scrollTrigger: { trigger: '#builder', start: 'top top', end: '+=180%', scrub: 1, pin: true }
        });
        builderTimeline
          .fromTo('#builderCard', { x: '38vw', rotate: 8, scale: 0.9 }, { x: 0, rotate: 0, scale: 1, ease: 'none' }, 0)
          .fromTo('#buildWord', { x: '-8vw', y: '7vh' }, { x: '3vw', y: '-5vh', ease: 'none' }, 0)
          .from('.builder-module', {
            x: (i) => [140, -120, 90, -70, 110][i] || 80,
            y: (i) => [-40, 50, 20, -20, 40][i] || 20,
            autoAlpha: 0,
            scale: 0.92,
            stagger: 0.12,
            ease: 'none'
          }, 0.18);

        /* ---------- 7 · board ---------- */
        const boardTimeline = gsap.timeline({
          scrollTrigger: { trigger: '#board', start: 'top top', end: '+=170%', scrub: 1, pin: true }
        });
        boardTimeline
          .fromTo('.op-card', {
            x: (i) => [-260, 80, 240, -120, 180, -200, 130][i] || 0,
            y: (i) => [-120, 180, -80, 150, -150, 110, 200][i] || 0,
            rotate: (i) => [-16, 12, -9, 18, -14, 8, 15][i] || 0,
            scale: 0.86,
            autoAlpha: 0.35
          }, {
            x: 0,
            y: 0,
            rotate: 0,
            scale: 1,
            autoAlpha: 1,
            stagger: 0.035,
            ease: 'none'
          }, 0)
          .fromTo('#boardWord', { xPercent: -58, yPercent: -50, rotate: -4 }, { xPercent: -48, yPercent: -50, rotate: 3, ease: 'none' }, 0);

        /* ---------- 8 · support flow ---------- */
        const supportTimeline = gsap.timeline({
          scrollTrigger: { trigger: '#support', start: 'top top', end: '+=170%', scrub: 1, pin: true }
        });
        supportTimeline
          .fromTo('.support-step:nth-child(1)', { x: '-50vw', y: '8vh', rotate: -9, autoAlpha: 0 }, { x: 0, y: 0, rotate: 0, autoAlpha: 1, ease: 'none' }, 0)
          .fromTo('.support-step:nth-child(2)', { scale: 0.62, y: '18vh', autoAlpha: 0 }, { scale: 1, y: 0, autoAlpha: 1, ease: 'none' }, 0.18)
          .fromTo('.support-step:nth-child(3)', { x: '50vw', y: '-8vh', rotate: 9, autoAlpha: 0 }, { x: 0, y: 0, rotate: 0, autoAlpha: 1, ease: 'none' }, 0.36)
          .fromTo('#notifyCard', { x: '34vw', y: '10vh', rotate: 8, scale: 0.82, autoAlpha: 0 }, { x: 0, y: 0, rotate: -2, scale: 1, autoAlpha: 1, ease: 'none' }, 0.62)
          .fromTo('#supportWord', { y: '8vh', scale: 1.1 }, { y: '-7vh', scale: 0.98, ease: 'none' }, 0);

        /* ---------- 9 · CTA build-up ---------- */
        const ctaBuildTimeline = gsap.timeline({
          scrollTrigger: { trigger: '#cta-build', start: 'top top', end: '+=160%', scrub: 1, pin: true }
        });
        ctaBuildTimeline
          .fromTo('#seenWord', { x: '-110vw', autoAlpha: 1 }, { x: 0, autoAlpha: 1, ease: 'none' }, 0)
          .to('#seenWord', { x: '110vw', autoAlpha: 0, ease: 'none' }, 0.32)
          .to('#wipeRose', { scaleY: 1, ease: 'none' }, 0.24)
          .fromTo('#savedWord', { y: '110vh', autoAlpha: 1 }, { y: 0, autoAlpha: 1, ease: 'none' }, 0.34)
          .to('#savedWord', { y: '-110vh', autoAlpha: 0, ease: 'none' }, 0.64)
          .to('#wipeEmerald', { scaleX: 1, ease: 'none' }, 0.58)
          .fromTo('#supportedWord', { x: '120vw', autoAlpha: 1 }, { x: 0, autoAlpha: 1, ease: 'none' }, 0.68)
          .to('#supportedWord', { scale: 1.12, autoAlpha: 0, ease: 'none' }, 0.96);

        /* ---------- 10 · final ---------- */
        const finalTimeline = gsap.timeline({
          scrollTrigger: { trigger: '#join', start: 'top 85%', end: 'top 10%', scrub: 1 }
        });
        finalTimeline
          .fromTo('#joinWord', { y: '14vh' }, { y: 0, ease: 'none' }, 0)
          .from('.member', { scale: 0, rotate: -20, stagger: 0.06, ease: 'none' }, 0.1)
          .from('#yourCardWord', { autoAlpha: 0, scale: 0.4, rotate: -40, ease: 'none' }, 0.4)
          .from('#handArrow path', { strokeDasharray: 200, strokeDashoffset: 200, ease: 'none' }, 0.5);

        gsap.to('#card2', { y: '+=10', repeat: -1, yoyo: true, duration: 2.4, ease: 'sine.inOut' });
        ScrollTrigger.refresh();
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div aria-hidden="true" className="noema-loader" id="noemaLoader">
<div className="loader-grid"></div>
<div className="loader-mark">
<svg aria-hidden="true" fill="none" viewbox="0 0 42 18">
<path d="M3 9C8 1.8 14 1.8 21 9C28 16.2 34 16.2 39 9" stroke="currentColor" strokeLinecap="round" strokeWidth="2.2"></path>
<path d="M3 9C8 16.2 14 16.2 21 9C28 1.8 34 1.8 39 9" opacity="0.55" stroke="currentColor" strokeLinecap="round" strokeWidth="2.2"></path>
</svg>
</div>
<div className="loader-brand">
<div aria-label="NOEMA.ART" className="loader-brand-main">
<span className="loader-letter">N</span>
<span className="loader-letter">O</span>
<span className="loader-letter">E</span>
<span className="loader-letter">M</span>
<span className="loader-letter">A</span>
<span className="loader-letter loader-dot">.</span>
<span className="loader-letter">A</span>
<span className="loader-letter">R</span>
<span className="loader-letter">T</span>
</div>
<div className="loader-tag">Where your practice lives</div>
</div>
<div className="loader-meta">
<span>001 / Portfolio OS</span>
<span>Loading creative presence</span>
</div>
<div className="loader-strips">
<span className="loader-strip"></span>
<span className="loader-strip"></span>
<span className="loader-strip"></span>
<span className="loader-strip"></span>
<span className="loader-strip"></span>
<span className="loader-strip"></span>
<span className="loader-strip"></span>
</div>
<div className="loader-scanline"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-[60] flex items-start justify-between px-5 md:px-8 pt-5 text-white mix-blend-difference pointer-events-none">
<div className="leading-tight pointer-events-auto">
<a className="display text-base tracking-tight uppercase" href="#hero">
          NOEMA.ART
        </a>
<p className="text-xs opacity-75 mt-0.5">Where your practice lives</p>
</div>
<div className="hidden lg:flex items-center gap-7 text-sm font-medium pt-1 pointer-events-auto">
<a className="hover:opacity-60 transition-opacity" href="#interlude">
          Vision
        </a>
<a className="hover:opacity-60 transition-opacity" href="#product">
          Product
        </a>
<a className="hover:opacity-60 transition-opacity" href="#archive">
          Artists
        </a>
<a className="hover:opacity-60 transition-opacity" href="#board">Board</a>
<a className="hover:opacity-60 transition-opacity" href="#support">
          Pricing
        </a>
<a className="hover:opacity-60 transition-opacity" href="#join">FAQ</a>
</div>
<div className="flex items-center gap-5 text-sm font-medium pt-1 pointer-events-auto">
<a className="hover:opacity-60 transition-opacity" href="#">Login</a>
<a className="hover:opacity-60 transition-opacity hidden sm:block" href="#join">
          Create Card
        </a>
<button aria-label="Open menu" className="lg:hidden">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</nav>

<a className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[65] group flex items-center gap-8 bg-black text-white border border-white/25 pl-6 pr-2 py-2 hover:bg-neutral-800 transition-colors" href="#join" id="createcta">
<span className="text-sm font-medium">Create Card</span>
<span className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
<i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</span>
</a>

<section className="poster-section h-screen bg-[#4F46E5] divider-grid" id="hero">
<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0" id="heroWord">
<h1 className="display text-white text-[28vw] md:text-[22vw] leading-none tracking-[-0.055em] whitespace-nowrap select-none">
          NOEMA.ART
        </h1>
</div>
<div className="absolute inset-0 flex items-center justify-center z-10" style={{perspective: '1400px'}}>
<div className="relative w-full max-w-5xl h-[62vh] flex items-center justify-center">
<article className="absolute w-40 sm:w-48 md:w-56 -translate-x-[58%] sm:-translate-x-[112%] will-change-transform" id="card1" style={{transform: 'rotateY(22deg) rotateZ(-8deg)'}}>
<div className="profile-card soft-sheen relative overflow-hidden p-4">
<p className="display text-base leading-tight tracking-tight">
                Mira
                <br/>
                Saint
              </p>
<p className="text-xs text-white/60 mt-1">Artist · Montréal</p>
<img alt="Mira Saint" className="w-full aspect-square object-cover mt-3 grayscale" src="https://i.pravatar.cc/300?img=12"/>
<button className="mt-3 w-full text-xs font-medium bg-white text-black rounded-full py-1.5">
                Support Artist
              </button>
<div className="mt-2 flex items-center justify-center gap-1.5 border border-white/30 rounded-md py-1.5">
<i className="w-3.5 h-3.5" data-lucide="wallet" strokeWidth="1.5"></i>
<span className="text-xs">Add to Apple Wallet</span>
</div>
</div>
</article>
<article className="absolute w-44 sm:w-52 md:w-60 z-10 will-change-transform" id="card2" style={{transform: 'rotateY(-4deg) rotateZ(2deg)'}}>
<div className="profile-card soft-sheen relative overflow-hidden p-4 shadow-[0_50px_80px_rgba(0,0,0,0.52)]">
<p className="display text-lg leading-tight tracking-tight">
                Leigh
                <br/>
                Witherell
              </p>
<p className="text-xs text-white/60 mt-1">Painter · London</p>
<img alt="Leigh Witherell" className="w-full aspect-square object-cover mt-3 grayscale" src="https://i.pravatar.cc/300?img=47"/>
<button className="mt-3 w-full text-xs font-medium bg-white text-black rounded-full py-1.5">
                Support Artist
              </button>
<div className="mt-2 flex items-center justify-center gap-1.5 border border-white/30 rounded-md py-1.5">
<i className="w-3.5 h-3.5" data-lucide="wallet" strokeWidth="1.5"></i>
<span className="text-xs">Add to Apple Wallet</span>
</div>
</div>
</article>
<article className="absolute w-40 sm:w-48 md:w-56 translate-x-[58%] sm:translate-x-[112%] will-change-transform" id="card3" style={{transform: 'rotateY(-22deg) rotateZ(9deg)'}}>
<div className="profile-card soft-sheen relative overflow-hidden p-4 shadow-[-30px_40px_60px_rgba(0,0,0,0.45)]">
<p className="display text-base leading-tight tracking-tight">
                Glass Room
                <br/>
                Archive
              </p>
<p className="text-xs text-white/60 mt-1">Curator · Berlin</p>
<img alt="Glass Room Archive" className="w-full aspect-square object-cover mt-3 grayscale" src="https://picsum.photos/seed/glassroom/300/300"/>
<button className="mt-3 w-full text-xs font-medium bg-white text-black rounded-full py-1.5">
                Support Artist
              </button>
<div className="mt-2 flex items-center justify-center gap-1.5 border border-white/30 rounded-md py-1.5">
<i className="w-3.5 h-3.5" data-lucide="wallet" strokeWidth="1.5"></i>
<span className="text-xs">Add to Apple Wallet</span>
</div>
</div>
</article>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 border-t border-white/40 z-20" id="heroCopy">
<div className="px-5 md:px-8 py-5 flex items-end justify-between text-white">
<p className="text-base md:text-lg font-medium leading-snug max-w-sm">
            One card for your work, your story, and your next opportunity.
          </p>
<i className="w-5 h-5 mb-1 animate-bounce" data-lucide="arrow-down" strokeWidth="1.5"></i>
</div>
</div>
</section>

<section className="poster-section h-screen bg-[#10B981] divider-grid dark-lines" id="interlude">
<div className="absolute -top-[8vw] left-0 right-0 h-[18vw] -rotate-2 origin-left bg-[#10B981] z-10" id="interludeWipe"></div>
<div className="absolute top-[55%] left-[8%] w-[34vw] h-[14vw] rounded-[50%] border-[1.2vw] opacity-85 -rotate-6 border-[#4F46E5] z-10" id="brush1"></div>
<div className="absolute top-[30%] right-[10%] w-[18vw] h-[18vw] rounded-full blur-[2px] bg-[#F43F5E]/80 z-10" id="brush2"></div>
<div className="absolute inset-0 flex items-center overflow-hidden z-20">
<h2 className="display text-black text-[29vw] md:text-[24vw] leading-none tracking-[-0.06em] whitespace-nowrap select-none will-change-transform" id="artistsWord">
          ARTISTS   CURATORS
        </h2>
</div>
<div className="absolute bottom-0 left-0 right-0 border-t border-black/25 z-30" id="interludeCopy">
<div className="px-5 md:px-8 py-5 grid grid-cols-1 md:grid-cols-3 gap-4 text-black">
<p className="text-base font-semibold">
            For creators, designers and artists.
          </p>
<p className="text-base text-black/70 md:col-span-2 max-w-md">
            A living card for exhibitions, contact, bookings, press and support.
            Carried in every pocket.
          </p>
</div>
</div>
</section>

<section className="poster-section h-screen bg-[#F43F5E] divider-grid dark-lines" id="product">
<div className="absolute inset-0 flex items-center justify-center pointer-events-none will-change-transform z-0" id="theCardWord">
<h2 className="display text-black text-[30vw] md:text-[25vw] leading-none tracking-[-0.06em] whitespace-nowrap select-none">
          THE LINK
        </h2>
</div>
<div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-9 md:gap-[14vw] pt-12 z-10" style={{perspective: '1600px'}}>
<article className="w-56 md:w-64 will-change-transform" id="walletPass">
<div className="p-5 shadow-[20px_40px_70px_rgba(0,0,0,0.42)] relative overflow-hidden bg-[#4F46E5]" style={{transform: 'rotateY(14deg)'}}>
<div className="absolute inset-0 bg-gradient-to-r from-white/22 via-transparent to-black/20 pointer-events-none"></div>
<div className="relative flex items-center justify-between">
<p className="display text-xs text-black uppercase tracking-tight">
                NOEMA.ART
              </p>
<span className="text-xs text-black/70">PASS</span>
</div>
<div className="relative mt-4 border-t border-black/20 pt-4">
<p className="display text-xl text-black leading-tight tracking-tight">
                Leigh
                <br/>
                Witherell
              </p>
<p className="text-xs text-black/70 mt-1">Painter · UK, London</p>
</div>
<div className="relative mt-5 bg-white p-3 flex items-center justify-center">
<img alt="QR code" className="w-32 h-32" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="relative mt-4 flex items-center justify-between text-xs text-black/80">
<span>noema.art/leigh</span>
<i className="w-4 h-4" data-lucide="scan-line" strokeWidth="1.5"></i>
</div>
</div>
</article>
<article className="w-56 md:w-64 will-change-transform" id="phoneMock">
<div className="bg-black p-2 shadow-[-20px_40px_70px_rgba(0,0,0,0.45)] rounded-md" style={{transform: 'rotateY(-12deg)'}}>
<div className="bg-neutral-950 text-white overflow-hidden">
<img alt="Artwork" className="w-full h-28 object-cover opacity-90" src="https://picsum.photos/seed/noema-hero-art/500/280"/>
<div className="p-4 -mt-8 relative">
<img alt="Portrait" className="w-14 h-14 object-cover border-2 border-black grayscale" src="https://i.pravatar.cc/120?img=47"/>
<p className="display text-base mt-3 tracking-tight">
                  Leigh Witherell
                </p>
<p className="text-xs text-white/60">
                  Painter — large-scale oil works
                </p>
<button className="mt-4 w-full text-xs font-medium bg-white text-black rounded-full py-2">
                  Support Artist
                </button>
<div className="mt-2 flex items-center justify-center gap-1.5 border border-white/30 rounded-md py-2">
<i className="w-3.5 h-3.5" data-lucide="wallet" strokeWidth="1.5"></i>
<span className="text-xs">Add to Apple Wallet</span>
</div>
<div className="mt-4 space-y-px">
<button className="w-full flex items-center justify-between text-xs py-2.5 px-3 bg-white/5 hover:bg-white/10 transition-colors">
<span>Book studio visit</span>
<i className="w-3.5 h-3.5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<button className="w-full flex items-center justify-between text-xs py-2.5 px-3 bg-white/5 hover:bg-white/10 transition-colors">
<span>Get in touch</span>
<i className="w-3.5 h-3.5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
<div className="mt-4 grid grid-cols-3 gap-1">
<img alt="" className="aspect-square object-cover" src="https://picsum.photos/seed/noema-a1/120/120"/>
<img alt="" className="aspect-square object-cover" src="https://picsum.photos/seed/noema-a2/120/120"/>
<img alt="" className="aspect-square object-cover" src="https://picsum.photos/seed/noema-a3/120/120"/>
</div>
</div>
</div>
</div>
</article>
</div>
<div className="absolute bottom-0 left-0 right-0 border-t border-black/25 z-20">
<div className="px-5 md:px-8 py-5 flex items-end justify-between text-black">
<p className="text-base font-semibold max-w-xs leading-snug">
            A digital pass and a living profile. Everywhere you are.
          </p>
<p className="text-xs text-black/60 hidden sm:block">
            Scan · Save · Support
          </p>
</div>
</div>
</section>

<section className="poster-section h-screen bg-[#f4efe7] divider-grid dark-lines flex items-center justify-center px-5" id="manifesto">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(79,70,229,0.24),transparent_32%),radial-gradient(circle_at_80%_72%,rgba(244,63,94,0.22),transparent_30%)]"></div>
<div className="relative z-10 manifesto-sentence text-black">
<span className="manifesto-word">Everything</span>
<span className="manifesto-word">your</span>
<span className="manifesto-word">creative</span>
<span className="manifesto-word">practice</span>
<span className="manifesto-word">needs,</span>
<span className="manifesto-word">gathered</span>
<span className="manifesto-word">into</span>
<span className="manifesto-word">one</span>
<span className="manifesto-word">living</span>
<span className="manifesto-word">portfolio.</span>
</div>
<span className="hand absolute z-20 text-[#F43F5E] text-[18vw] md:text-[10vw] left-[18%] top-[55%] -rotate-12 select-none" id="finallyWord">
        finally
      </span>
<div className="absolute top-[12%] left-[8%] display text-[9vw] leading-none text-black/5 rotate-[-8deg]">
        PORTFOLIO LINKS SUPPORT BOOKINGS CONTACT GALLERY PRESS PRACTICE STUDIO
        COMMUNITY
      </div>
<p className="section-label text-black/60">04 / Manifesto</p>
</section>

<section className="poster-section h-screen bg-black divider-grid flex items-center justify-center px-5" id="archive">
<h2 className="huge-word absolute z-0 text-white/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" id="archiveWord">
        ARCHIVE
      </h2>
<div className="archive-grid">
<img alt="Artwork archive 01" className="archive-img" src="https://picsum.photos/seed/archive-01/480/600"/>
<img alt="Artwork archive 02" className="archive-img" src="https://picsum.photos/seed/archive-02/480/600"/>
<img alt="Artwork archive 03" className="archive-img" src="https://picsum.photos/seed/archive-03/480/600"/>
<img alt="Artwork archive 04" className="archive-img" src="https://picsum.photos/seed/archive-04/480/600"/>
<img alt="Artwork archive 05" className="archive-img" src="https://picsum.photos/seed/archive-05/480/600"/>
<img alt="Artwork archive 06" className="archive-img" src="https://picsum.photos/seed/archive-06/480/600"/>
<img alt="Artwork archive 07" className="archive-img" src="https://picsum.photos/seed/archive-07/480/600"/>
<img alt="Artwork archive 08" className="archive-img" src="https://picsum.photos/seed/archive-08/480/600"/>
<img alt="Artwork archive 09" className="archive-img" src="https://picsum.photos/seed/archive-09/480/600"/>
<img alt="Artwork archive 10" className="archive-img" src="https://picsum.photos/seed/archive-10/480/600"/>
<img alt="Artwork archive 11" className="archive-img" src="https://picsum.photos/seed/archive-11/480/600"/>
<img alt="Artwork archive 12" className="archive-img" src="https://picsum.photos/seed/archive-12/480/600"/>
<img alt="Artwork archive 13" className="archive-img" src="https://picsum.photos/seed/archive-13/480/600"/>
<img alt="Artwork archive 14" className="archive-img" src="https://picsum.photos/seed/archive-14/480/600"/>
<img alt="Artwork archive 15" className="archive-img" src="https://picsum.photos/seed/archive-15/480/600"/>
</div>
<div className="absolute bottom-0 left-0 right-0 border-t border-white/25 z-10">
<div className="px-5 md:px-8 py-5 flex items-end justify-between text-white">
<p className="text-base font-semibold max-w-sm leading-snug">
            From one focused work to a complete creative archive.
          </p>
<p className="text-xs text-white/55 hidden sm:block">
            3 × 5 living gallery
          </p>
</div>
</div>
</section>

<section className="poster-section h-screen bg-[#f4efe7] divider-grid dark-lines" id="builder">
<h2 className="huge-word absolute left-[-4vw] top-1/2 -translate-y-1/2 z-0 text-black" id="buildWord">
        BUILD
      </h2>
<div className="relative z-10 min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-5 md:px-8 pt-24 pb-20">
<div className="hidden lg:block"></div>
<article className="builder-shell ml-auto overflow-hidden" id="builderCard">
<header className="p-5 flex items-start justify-between border-b border-white/20">
<div>
<p className="display text-3xl tracking-tight leading-none">
                NOEMA PROFILE
              </p>
<p className="text-xs text-white/55 mt-2">Live card system / v.01</p>
</div>
<i className="w-5 h-5 text-white/60" data-lucide="scan-face" strokeWidth="1.5"></i>
</header>
<div className="builder-module p-5" data-number="01">
<p className="text-xs uppercase tracking-[0.2em] text-white/40">Bio</p>
<p className="mt-2 text-sm text-white/82 max-w-xs">
              Painter working with gesture, memory and public space.
            </p>
</div>
<div className="builder-module p-5" data-number="02">
<p className="text-xs uppercase tracking-[0.2em] text-white/40">
              Gallery
            </p>
<div className="mt-3 grid grid-cols-4 gap-1.5">
<img alt="" className="aspect-square object-cover grayscale" src="https://picsum.photos/seed/build-a/120/120"/>
<img alt="" className="aspect-square object-cover grayscale" src="https://picsum.photos/seed/build-b/120/120"/>
<img alt="" className="aspect-square object-cover grayscale" src="https://picsum.photos/seed/build-c/120/120"/>
<img alt="" className="aspect-square object-cover grayscale" src="https://picsum.photos/seed/build-d/120/120"/>
</div>
</div>
<div className="builder-module grid grid-cols-2" data-number="03">
<button className="p-5 text-left border-r border-white/15 bg-white text-black text-sm font-semibold">
              Support
            </button>
<button className="p-5 text-left text-sm font-semibold">Contact</button>
</div>
<div className="builder-module grid grid-cols-2" data-number="04">
<button className="p-5 text-left text-sm font-semibold border-r border-white/15">
              Bookings
            </button>
<button className="p-5 text-left text-sm font-semibold">Press</button>
</div>
<div className="builder-module p-5 flex items-center justify-between" data-number="05">
<span className="text-sm font-semibold">Wallet pass</span>
<span className="flex items-center gap-2 text-xs border border-white/25 px-3 py-2 rounded-md">
<i className="w-3.5 h-3.5" data-lucide="wallet"></i>
              Add
            </span>
</div>
</article>
</div>
<div className="absolute left-5 md:left-8 top-[26%] z-20 hidden md:block">
<p className="display text-[11vw] leading-none tracking-[-0.055em] text-[#4F46E5]">
          01
        </p>
<p className="text-xs uppercase tracking-[0.18em] max-w-[180px]">
          Assembled in real time as the page moves.
        </p>
</div>
</section>

<section className="poster-section min-h-screen bg-[#10B981] divider-grid dark-lines px-5 md:px-8 pt-28 pb-16 flex items-center" id="board">
<h2 className="huge-word absolute z-0 text-black/18 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" id="boardWord">
        BOARD
      </h2>
<div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
<article className="op-card">
<div>
<p className="text-xs uppercase tracking-[0.18em] text-white/45">
              Exhibition
            </p>
<h3 className="display text-3xl leading-none mt-3">
              Open Call:
              <br/>
              New Forms
            </h3>
</div>
<div className="flex items-end justify-between text-xs text-white/58">
<span>
              Montréal
              <br/>
              Aug 12
            </span>
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
</article>
<article className="op-card">
<div>
<p className="text-xs uppercase tracking-[0.18em] text-white/45">
              Community
            </p>
<h3 className="display text-3xl leading-none mt-3">
              Studio Visit
              <br/>
              Night
            </h3>
</div>
<div className="flex items-end justify-between text-xs text-white/58">
<span>
              Toronto
              <br/>
              Jul 04
            </span>
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
</article>
<article className="op-card">
<div>
<p className="text-xs uppercase tracking-[0.18em] text-white/45">
              Funding
            </p>
<h3 className="display text-3xl leading-none mt-3">
              Emerging
              <br/>
              Artist Grant
            </h3>
</div>
<div className="flex items-end justify-between text-xs text-white/58">
<span>
              Online
              <br/>
              Sep 18
            </span>
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
</article>
<article className="op-card">
<div>
<p className="text-xs uppercase tracking-[0.18em] text-white/45">
              Collab
            </p>
<h3 className="display text-3xl leading-none mt-3">
              Print
              <br/>
              Exchange
            </h3>
</div>
<div className="flex items-end justify-between text-xs text-white/58">
<span>
              Brooklyn
              <br/>
              Jul 22
            </span>
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
</article>
<article className="op-card lg:col-start-2">
<div>
<p className="text-xs uppercase tracking-[0.18em] text-white/45">
              Residency
            </p>
<h3 className="display text-3xl leading-none mt-3">
              Quiet Room
              <br/>
              Program
            </h3>
</div>
<div className="flex items-end justify-between text-xs text-white/58">
<span>
              Copenhagen
              <br/>
              Oct 08
            </span>
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
</article>
<article className="op-card">
<div>
<p className="text-xs uppercase tracking-[0.18em] text-white/45">
              Mentorship
            </p>
<h3 className="display text-3xl leading-none mt-3">
              Crit Circle
              <br/>
              Online
            </h3>
</div>
<div className="flex items-end justify-between text-xs text-white/58">
<span>
              Remote
              <br/>
              Aug 01
            </span>
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
</article>
<article className="op-card bg-[#F43F5E] text-black border-black/20">
<div>
<p className="text-xs uppercase tracking-[0.18em] text-black/55">
              Studio
            </p>
<h3 className="display text-3xl leading-none mt-3">
              Shared
              <br/>
              Press Wall
            </h3>
</div>
<div className="flex items-end justify-between text-xs text-black/65">
<span>
              Paris
              <br/>
              Jul 30
            </span>
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
</article>
</div>
<svg className="absolute inset-0 w-full h-full z-[2] opacity-40 pointer-events-none" fill="none" stroke="black" strokeWidth="1">
<path d="M90 220 C 360 110, 690 420, 1040 190" stroke-dasharray="6 10"></path>
<path d="M120 680 C 420 520, 760 740, 1160 480" stroke-dasharray="6 10"></path>
</svg>
</section>

<section className="poster-section h-screen bg-[#4F46E5] divider-grid px-5 md:px-8 flex items-center" id="support">
<h2 className="huge-word absolute z-0 text-black/35 left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2" id="supportWord">
        SUPPORT
      </h2>
<div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 pt-20 pb-20">
<article className="support-panel support-step">
<p className="text-xs uppercase tracking-[0.2em] text-white/45">
            01 / Visitor
          </p>
<h3 className="display text-5xl md:text-6xl leading-none mt-6">
            DISCOVERED
          </h3>
<p className="text-sm text-white/58 mt-6 max-w-[220px]">
            Someone scans your card after a show, post, talk or studio visit.
          </p>
</article>
<article className="support-panel support-step bg-white text-black">
<p className="text-xs uppercase tracking-[0.2em] text-black/45">
            02 / Action
          </p>
<h3 className="display text-5xl md:text-6xl leading-none mt-6">
            SUPPORTED
          </h3>
<button className="mt-8 w-full bg-black text-white text-sm font-semibold py-3 rounded-full">
            Support Artist
          </button>
</article>
<article className="support-panel support-step">
<p className="text-xs uppercase tracking-[0.2em] text-white/45">
            03 / Creator
          </p>
<h3 className="display text-5xl md:text-6xl leading-none mt-6">BACKED</h3>
<p className="text-sm text-white/58 mt-6 max-w-[220px]">
            Support lands directly inside your creative practice.
          </p>
</article>
</div>
<div className="absolute z-20 right-5 md:right-[9vw] bottom-[16vh] w-72 bg-white text-black p-4 shadow-[20px_24px_70px_rgba(0,0,0,0.38)] border border-black/10" id="notifyCard">
<div className="flex items-center justify-between">
<p className="text-xs uppercase tracking-[0.18em] text-black/45">
            New support received
          </p>
<i className="w-4 h-4" data-lucide="sparkles"></i>
</div>
<p className="display text-4xl leading-none mt-4">$25</p>
<p className="text-sm font-semibold mt-1">from Maya Chen</p>
<p className="text-xs text-black/55 mt-2">For your studio practice</p>
</div>
</section>

<section className="poster-section h-screen bg-black" id="cta-build">
<div className="absolute inset-0 bg-[#F43F5E] origin-bottom scale-y-0" id="wipeRose"></div>
<div className="absolute inset-0 bg-[#10B981] origin-left scale-x-0" id="wipeEmerald"></div>
<div className="sweep-word text-white" id="seenWord">SEEN</div>
<div className="sweep-word text-black" id="savedWord">SAVED</div>
<div className="sweep-word text-white" id="supportedWord">SUPPORTED</div>
</section>

<section className="poster-section min-h-screen w-full z-10 flex flex-col bg-[#4F46E5] divider-grid dark-lines" id="join">
<div className="relative flex-1 min-h-[88vh]">
<div className="absolute inset-0 flex items-center justify-center md:justify-start md:pl-[4vw] overflow-hidden z-0">
<h2 className="display text-black text-[44vw] md:text-[32vw] leading-none tracking-[-0.07em] select-none will-change-transform" id="joinWord">
            CREATE
          </h2>
</div>
<span className="hand absolute text-white text-[15vw] md:text-[8vw] left-[28%] md:left-[36%] top-[45%] -rotate-12 select-none drop-shadow-lg z-10" id="yourCardWord">
          your card
        </span>
<img alt="" className="member absolute w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white object-cover left-[14%] top-[28%] shadow-xl z-10" src="https://i.pravatar.cc/120?img=15"/>
<img alt="" className="member absolute w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-white object-cover left-[30%] top-[68%] shadow-xl z-10" src="https://i.pravatar.cc/120?img=32"/>
<img alt="" className="member absolute w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white object-cover left-[52%] top-[24%] shadow-xl z-10" src="https://i.pravatar.cc/120?img=5"/>
<img alt="" className="member absolute w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-white object-cover left-[8%] top-[58%] shadow-xl z-10" src="https://i.pravatar.cc/120?img=58"/>
<img alt="" className="member absolute w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white object-cover left-[44%] top-[78%] shadow-xl z-10" src="https://i.pravatar.cc/120?img=23"/>
<img alt="" className="member absolute w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-white object-cover left-[24%] top-[12%] shadow-xl z-10" src="https://i.pravatar.cc/120?img=68"/>
<div className="absolute right-5 md:right-[8vw] top-[23%] md:top-[31%] max-w-xs text-black z-20">
<p className="text-lg md:text-xl font-semibold leading-snug">
            Create your NOEMA card and share your practice wherever it is seen.
          </p>
<svg className="w-24 md:w-32 mt-6 ml-auto text-black" fill="none" id="handArrow" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 120 90">
<path d="M8 10 C 40 20, 70 40, 100 72"></path>
<path d="M86 68 L 102 74 L 96 56"></path>
</svg>
</div>
</div>
<footer className="relative border-t border-black/25 z-20">
<div className="px-5 md:px-8 py-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-black">
<div>
<p className="text-sm font-semibold">2026 © NOEMA.ART</p>
<a className="text-sm underline underline-offset-2 hover:opacity-60 transition-opacity" href="mailto:hello@noema.art">
              hello@noema.art
            </a>
<div className="flex items-center gap-3 mt-3">
<a aria-label="Instagram" className="hover:opacity-60 transition-opacity" href="#">
<i className="w-4 h-4" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a aria-label="LinkedIn" className="hover:opacity-60 transition-opacity" href="#">
<i className="w-4 h-4" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
<a aria-label="YouTube" className="hover:opacity-60 transition-opacity" href="#">
<i className="w-4 h-4" data-lucide="youtube" strokeWidth="1.5"></i>
</a>
<a aria-label="Email" className="hover:opacity-60 transition-opacity" href="#">
<i className="w-4 h-4" data-lucide="at-sign" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div className="flex flex-col gap-1.5 text-sm">
<a className="hover:opacity-60 transition-opacity" href="#">
              Brand Kit
            </a>
<a className="hover:opacity-60 transition-opacity" href="#">
              Gift Card
            </a>
</div>
<div className="flex flex-col gap-1.5 text-sm">
<a className="hover:opacity-60 transition-opacity" href="#">
              Terms &amp; Conditions
            </a>
<a className="hover:opacity-60 transition-opacity" href="#">
              Privacy Policy
            </a>
<a className="hover:opacity-60 transition-opacity" href="#">
              Cookie Policy
            </a>
</div>
</div>
</footer>
</section>


    </>
  );
}
