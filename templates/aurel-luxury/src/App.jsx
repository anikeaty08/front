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



      const hero = document.getElementById('hero');
      const glowOne = document.getElementById('glow-one');
      const glowTwo = document.getElementById('glow-two');
      const floatingCard = document.getElementById('floatingCard');
      const menuButton = document.getElementById('menuButton');
      const mobileMenu = document.getElementById('mobileMenu');

      if (hero) {
        hero.addEventListener('mousemove', (event) => {
          const rect = hero.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;

          if (glowOne) glowOne.style.transform = `translate(${x * 4}rem, ${y * 3}rem)`;
          if (glowTwo) glowTwo.style.transform = `translate(${x * -5}rem, ${y * -4}rem)`;
          if (floatingCard) floatingCard.style.transform = `translate(${x * -1.25}rem, ${y * -1.25}rem) rotate(${x * 2}deg)`;
        });
      }

      if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
        });
      }
    


      (function () {
        function playVideo(video) {
          var promise = video.play();
          if (promise && typeof promise.catch === "function") {
            promise.catch(function () {});
          }
        }

        function setupVideo(video) {
          if (video.dataset.auraVideoReady === "true") return;
          video.dataset.auraVideoReady = "true";
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
                if (preset === "play-once" && video.dataset.auraVideoPlayed === "true") {
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
              video.dataset.auraVideoPlayed = "true";
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
    


      (function () {
        function initSequentialReveal() {
          var items = Array.prototype.slice.call(document.querySelectorAll('.aura-reveal, .aura-words'));

          items.forEach(function (item, index) {
            if (!item.style.getPropertyValue('--aura-delay')) {
              item.style.setProperty('--aura-delay', Math.min(index * 95, 620) + 'ms');
            }
          });

          document.querySelectorAll('.aura-words').forEach(function (group) {
            Array.prototype.slice.call(group.querySelectorAll('.aura-word')).forEach(function (word, index) {
              word.style.setProperty('--aura-word-index', index);
            });
          });

          function reveal(element) {
            element.classList.add('is-visible');
          }

          if (!('IntersectionObserver' in window)) {
            items.forEach(reveal);
            return;
          }

          var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                reveal(entry.target);
                observer.unobserve(entry.target);
              }
            });
          }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });

          items.forEach(function (item) {
            observer.observe(item);
          });
        }

        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', initSequentialReveal);
        } else {
          initSequentialReveal();
        }
      })();
    


      document.addEventListener("DOMContentLoaded", () => {
        if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
          gsap.registerPlugin(ScrollTrigger);

          const gsapSections = ['#vision', '#craft', '#testimonials', '#about'];
          gsapSections.forEach(selector => {
            const section = document.querySelector(selector);
            if (section) {
              const reveals = section.querySelectorAll('.aura-reveal');
              reveals.forEach(el => {
                el.classList.remove('aura-reveal');
                el.style.opacity = '';
                el.style.transform = '';
                el.style.filter = '';
              });
            }
          });

          // Section 2: Vision
          const visionHeading = document.querySelector("#vision h2");
          if(visionHeading) {
            gsap.fromTo(visionHeading,
              { opacity: 0, y: 40, clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
              { opacity: 1, y: 0, clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)", duration: 1.4, ease: "power4.out", scrollTrigger: { trigger: "#vision", start: "top 80%" } }
            );
          }
          const visionCards = gsap.utils.toArray("#vision article");
          if(visionCards.length) {
            gsap.fromTo(visionCards,
              { opacity: 0, y: 60, rotationX: 10, scale: 0.95 },
              { opacity: 1, y: 0, rotationX: 0, scale: 1, stagger: 0.15, duration: 1.4, ease: "power3.out", scrollTrigger: { trigger: "#vision", start: "top 75%" } }
            );
          }

          // Section 3: Craft (Sticky + Storytelling)
          const craftSticky = document.querySelector("#craft-sticky-info");
          const craftCards = gsap.utils.toArray(".craft-card");

          if(craftSticky && craftCards.length) {
            ScrollTrigger.matchMedia({
              "(min-width: 1024px)": function() {
                ScrollTrigger.create({
                  trigger: "#craft",
                  start: "top 15%",
                  end: "bottom 85%",
                  pin: craftSticky,
                  pinSpacing: false
                });
              }
            });

            const craftTexts = gsap.utils.toArray("#craft-sticky-info p, #craft-sticky-info h2");
            gsap.fromTo(craftTexts,
              { opacity: 0, x: -30, filter: "blur(8px)" },
              { opacity: 1, x: 0, filter: "blur(0px)", stagger: 0.2, duration: 1.4, ease: "power3.out", scrollTrigger: { trigger: "#craft", start: "top 60%" } }
            );

            craftCards.forEach((card, i) => {
              gsap.fromTo(card,
                { opacity: 0, y: 100, scale: 0.92, rotationX: 8 },
                { opacity: 1, y: 0, scale: 1, rotationX: 0, duration: 1.8, ease: "power4.out",
                  scrollTrigger: {
                    trigger: card,
                    start: "top 85%"
                  }
                }
              );

              const bg = card.querySelector('[style*="background-image"]');
              if (bg) {
                gsap.fromTo(bg,
                  { scale: 1.25, yPercent: -12 },
                  { scale: 1, yPercent: 12, ease: "none", scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: true } }
                );
              }
            });
          }

          // Section About: Manifesto (Sticky + Storytelling)
          const aboutSticky = document.querySelector("#about-sticky-info");
          const aboutCards = gsap.utils.toArray(".about-card");

          if(aboutSticky && aboutCards.length) {
            ScrollTrigger.matchMedia({
              "(min-width: 1024px)": function() {
                ScrollTrigger.create({
                  trigger: "#about",
                  start: "top 15%",
                  end: "bottom 85%",
                  pin: aboutSticky,
                  pinSpacing: false
                });
              }
            });

            const aboutTexts = gsap.utils.toArray("#about-sticky-info p, #about-sticky-info h2");
            gsap.fromTo(aboutTexts,
              { opacity: 0, x: -30, filter: "blur(8px)" },
              { opacity: 1, x: 0, filter: "blur(0px)", stagger: 0.2, duration: 1.4, ease: "power3.out", scrollTrigger: { trigger: "#about", start: "top 60%" } }
            );

            aboutCards.forEach((card, i) => {
              gsap.fromTo(card,
                { opacity: 0, y: 100, scale: 0.92, rotationX: 8 },
                { opacity: 1, y: 0, scale: 1, rotationX: 0, duration: 1.8, ease: "power4.out",
                  scrollTrigger: {
                    trigger: card,
                    start: "top 85%"
                  }
                }
              );

              const bg = card.querySelector('[style*="background-image"]');
              if (bg) {
                gsap.fromTo(bg,
                  { scale: 1.25, yPercent: -12 },
                  { scale: 1, yPercent: 12, ease: "none", scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: true } }
                );
              }
            });
          }

          // Section 4: Testimonials
          const testimonialGrid = document.querySelector("#testimonials .grid");
          if(testimonialGrid) {
            gsap.fromTo(testimonialGrid.children,
              { opacity: 0, y: 50 },
              { opacity: 1, y: 0, duration: 1.5, ease: "power4.out", stagger: 0.2, scrollTrigger: { trigger: "#testimonials", start: "top 75%" } }
            );
          }

          const floatingImg = document.querySelector("#testimonials img");
          if(floatingImg) {
            gsap.fromTo(floatingImg,
              { yPercent: 20, rotation: -5, scale: 0.9 },
              { yPercent: -20, rotation: 5, scale: 1.1, ease: "none", scrollTrigger: { trigger: "#testimonials", start: "top bottom", end: "bottom top", scrub: 1.5 } }
            );
          }
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="relative min-h-screen w-screen overflow-hidden">
<section className="relative flex min-h-screen w-screen items-stretch overflow-hidden bg-cover bg-center bg-no-repeat" id="hero" style={{backgroundImage: 'linear-gradient(120deg, rgba(5,5,5,0.82), rgba(12,10,8,0.42) 42%, rgba(5,5,5,0.8)), url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/160a25ab-329d-4740-8101-e786bf07bc25_3840w.png\')', position: 'relative', overflow: 'hidden', isolation: 'isolate'}}>
<video data-aura-generated-video="true" data-aura-generated-video-bg="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/160a25ab-329d-4740-8101-e786bf07bc25_3840w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/9109ecbb-cdc4-4815-981e-2ea83be13765/1779028455932-0b8373d6-972d-41c2-8036-9b7b72821522.mp4" style={{position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none', zIndex: '0'}}></video>
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_78%_32%,rgba(244,211,166,0.18),transparent_26%),linear-gradient(to_bottom,rgba(0,0,0,0.05),rgba(0,0,0,0.66))]"></div>
<div className="pointer-events-none absolute inset-0 opacity-[0.13]" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)', backgroundSize: '4rem 4rem'}}></div>
<div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl transition-transform duration-700 ease-out md:h-96 md:w-96" id="glow-one"></div>
<div className="pointer-events-none absolute -right-28 bottom-16 h-80 w-80 rounded-full bg-white/10 blur-3xl transition-transform duration-700 ease-out md:h-[28rem] md:w-[28rem]" id="glow-two"></div>
<div className="absolute inset-x-0 top-0 z-20">
<nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8">
<a className="group flex items-center gap-3 aura-reveal" href="#">
<span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-semibold tracking-tighter shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 group-hover:bg-white/15 border-gradient font-manrope">
                AU
              </span>
<span className="hidden text-xs font-medium uppercase tracking-[0.32rem] text-white/80 sm:block font-manrope">
                Aurel
              </span>
</a>
<div className="hidden items-center rounded-full bg-white/[0.07] p-1 shadow-2xl shadow-black/20 backdrop-blur-2xl md:flex border-gradient aura-reveal">
<a className="rounded-full px-4 py-2 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white font-manrope" href="#vision">
                Vision
              </a>
<a className="rounded-full px-4 py-2 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white font-manrope" href="#craft">
                Craft
              </a>
<a className="rounded-full px-4 py-2 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white font-manrope" href="#testimonials">
                Testimonials
              </a>
<a className="rounded-full px-4 py-2 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white font-manrope" href="#about">
                About
              </a>
<a className="rounded-full px-4 py-2 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white font-manrope" href="#request">
                Pricing
              </a>
</div>
<a className="hidden items-center gap-2 rounded-full border border-white/15 bg-white px-4 py-2 text-sm font-semibold text-neutral-950 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:bg-white/90 sm:flex font-manrope aura-reveal" href="#request">
              Request access
              <iconify-icon icon="solar:arrow-right-up-linear" style={{fontSize: '1rem'}}></iconify-icon>
</a>
<button aria-label="Open menu" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:bg-white/15 md:hidden border-gradient aura-reveal" id="menuButton">
<iconify-icon icon="solar:hamburger-menu-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</button>
</nav>
<div className="mx-5 hidden rounded-3xl p-3 shadow-2xl shadow-black/30 backdrop-blur-2xl md:hidden border-gradient bg-stone-950/80" id="mobileMenu">
<a className="block rounded-2xl px-4 py-3 text-sm font-medium text-white/75 hover:bg-white/10 hover:text-white font-manrope" href="#vision">
              Vision
            </a>
<a className="block rounded-2xl px-4 py-3 text-sm font-medium text-white/75 hover:bg-white/10 hover:text-white font-manrope" href="#craft">
              Craft
            </a>
<a className="block rounded-2xl px-4 py-3 text-sm font-medium text-white/75 hover:bg-white/10 hover:text-white font-manrope" href="#testimonials">
              Testimonials
            </a>
<a className="block rounded-2xl px-4 py-3 text-sm font-medium text-white/75 hover:bg-white/10 hover:text-white font-manrope" href="#about">
              About
            </a>
<a className="block rounded-2xl px-4 py-3 text-sm font-medium text-white/75 hover:bg-white/10 hover:text-white font-manrope" href="#request">
              Pricing
            </a>
<a className="mt-2 flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-neutral-950 font-manrope" href="#request">
              Request access
              <iconify-icon icon="solar:arrow-right-up-linear" style={{fontSize: '1rem'}}></iconify-icon>
</a>
</div>
</div>
<div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-5 pb-10 pt-28 sm:px-6 lg:px-8">
<div className="grid w-full items-end gap-10 lg:grid-cols-[1.08fr_0.72fr]">
<div className="max-w-4xl">
<div className="mb-7 inline-flex items-center gap-3 rounded-full bg-white/[0.08] px-3 py-2 shadow-2xl shadow-black/20 backdrop-blur-2xl border-gradient aura-reveal">
<span className="relative flex h-2.5 w-2.5">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 bg-amber-200"></span>
<span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-100"></span>
</span>
<span className="text-xs font-medium uppercase tracking-[0.24rem] text-white/75 font-manrope aura-words">
<span className="aura-word">Private</span>
<span className="aura-word">preview</span>
<span className="aura-word">now</span>
<span className="aura-word">open</span>
</span>
</div>
<h1 className="max-w-5xl text-5xl tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl font-gloock font-normal aura-words">
<span className="aura-word">Design</span>
<span className="aura-word">the</span>
<span className="aura-word">next</span>
<span className="block" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
<span className="aura-word text-white/90 font-gloock font-normal">
                    quiet
                  </span>
<span className="aura-word text-white/90 font-gloock font-normal">
                    luxury
                  </span>
<span className="aura-word italic text-amber-100 font-gloock">
                    escape.
                  </span>
</span>
</h1>
<p className="mt-7 max-w-2xl text-base leading-8 text-white/68 sm:text-lg font-manrope aura-reveal aura-words">
<span className="aura-word">A</span>
<span className="aura-word">cinematic</span>
<span className="aura-word">digital</span>
<span className="aura-word">experience</span>
<span className="aura-word">for</span>
<span className="aura-word">boutique</span>
<span className="aura-word">hospitality,</span>
<span className="aura-word">architecture</span>
<span className="aura-word">studios,</span>
<span className="aura-word">and</span>
<span className="aura-word">destination</span>
<span className="aura-word">brands</span>
<span className="aura-word">that</span>
<span className="aura-word">want</span>
<span className="aura-word">every</span>
<span className="aura-word">interaction</span>
<span className="aura-word">to</span>
<span className="aura-word">feel</span>
<span className="aura-word">considered.</span>
</p>
<div className="mt-9 flex flex-col gap-3 sm:flex-row">
<a className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-neutral-950 shadow-2xl shadow-black/25 transition duration-300 hover:-translate-y-1 hover:bg-amber-50 font-manrope aura-reveal" href="#request">
                  Start the experience
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-950 text-white transition duration-300 group-hover:rotate-45">
<iconify-icon icon="solar:arrow-right-linear" style={{fontSize: '1rem'}}></iconify-icon>
</span>
</a>
<a className="inline-flex items-center justify-center gap-3 rounded-full bg-white/[0.08] px-6 py-4 text-sm font-semibold text-white shadow-2xl shadow-black/15 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.13] border-gradient font-manrope aura-reveal" href="#vision">
<iconify-icon icon="solar:play-circle-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
                  Watch preview
                </a>
</div>
</div>
<aside className="hidden justify-self-end rounded-[2rem] bg-white/[0.09] p-4 shadow-2xl shadow-black/30 backdrop-blur-2xl transition-transform duration-500 ease-out lg:block border-gradient aura-reveal" id="floatingCard">
<div className="overflow-hidden rounded-[1.5rem] border-gradient bg-stone-950/30">
<video aria-label="Minimal architectural interior" className="h-64 w-80 object-cover opacity-90 transition duration-700 hover:scale-105" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f92dd6fc-3b2d-4bcf-bb45-675be4292206_3840w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/9109ecbb-cdc4-4815-981e-2ea83be13765/1779028388357-371835cc-c1e3-43c4-b558-b79e7a41f857.mp4"></video>
</div>
<div className="mt-4 flex items-start justify-between gap-5">
<div>
<p className="text-xs font-medium uppercase tracking-[0.24rem] text-white/45 font-manrope">
                    Signature system
                  </p>
<h2 className="mt-2 text-xl tracking-tight text-white font-gloock font-normal">
                    Atmospheric booking flow
                  </h2>
</div>
<span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-neutral-950">
<iconify-icon icon="solar:stars-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</span>
</div>
<div className="mt-5 grid grid-cols-3 gap-2">
<div className="rounded-2xl bg-white/[0.07] p-3 border-gradient">
<p className="text-lg font-semibold tracking-tight font-manrope">
                    42%
                  </p>
<p className="mt-1 text-xs text-white/50 font-manrope">Lift</p>
</div>
<div className="rounded-2xl bg-white/[0.07] p-3 border-gradient">
<p className="text-lg font-semibold tracking-tight font-manrope">
                    12
                  </p>
<p className="mt-1 text-xs text-white/50 font-manrope">Scenes</p>
</div>
<div className="rounded-2xl bg-white/[0.07] p-3 border-gradient">
<p className="text-lg font-semibold tracking-tight font-manrope">
                    4.9
                  </p>
<p className="mt-1 text-xs text-white/50 font-manrope">Score</p>
</div>
</div>
</aside>
</div>
</div>
<div className="absolute inset-x-0 bottom-0 z-20">
<div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-5 pb-6 sm:px-6 lg:px-8">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent aura-reveal"></div>
<div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
<div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-xs font-medium uppercase tracking-[0.22rem] text-white/42 aura-reveal">
<span className="font-manrope">Architecture</span>
<span className="font-manrope">Hospitality</span>
<span className="font-manrope">Editorial systems</span>
</div>
<a className="group flex w-max items-center gap-3 text-sm font-medium text-white/65 transition hover:text-white font-manrope aura-reveal" href="#vision">
                Scroll to explore
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.06] backdrop-blur-xl transition group-hover:translate-y-1 group-hover:bg-white/[0.12] border-gradient">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{fontSize: '1rem'}}></iconify-icon>
</span>
</a>
</div>
</div>
</div>
</section>
<section className="relative px-5 py-20 sm:px-6 lg:px-8 bg-stone-950" id="vision">
<div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
<div>
<p className="text-xs font-medium uppercase tracking-[0.28rem] text-amber-100/60 font-manrope aura-reveal">
              Vision
            </p>
<h2 className="mt-4 text-3xl tracking-tight text-white sm:text-4xl md:text-5xl font-gloock font-normal aura-reveal">
              Built for brands that treat atmosphere as strategy.
            </h2>
</div>
<div className="grid gap-4 sm:grid-cols-3">
<article className="rounded-[2rem] bg-white/[0.04] p-6 border-gradient aura-reveal">
<iconify-icon icon="solar:magic-stick-3-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
<h3 className="mt-5 text-lg font-semibold tracking-tight font-manrope">
                Cinematic art direction
              </h3>
<p className="mt-3 text-sm leading-6 text-white/55 font-manrope">
                Layered visuals, spacious motion, and refined detail designed to
                feel immersive from the first frame.
              </p>
</article>
<article className="rounded-[2rem] bg-white/[0.04] p-6 border-gradient aura-reveal">
<iconify-icon icon="solar:chart-2-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
<h3 className="mt-5 text-lg font-semibold tracking-tight font-manrope">
                Conversion-aware flow
              </h3>
<p className="mt-3 text-sm leading-6 text-white/55 font-manrope">
                Elegant journeys that keep momentum high without sacrificing the
                premium feeling of the experience.
              </p>
</article>
<article className="rounded-[2rem] bg-white/[0.04] p-6 border-gradient aura-reveal">
<iconify-icon icon="solar:code-square-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
<h3 className="mt-5 text-lg font-semibold tracking-tight font-manrope">
                Fast, fluid, responsive
              </h3>
<p className="mt-3 text-sm leading-6 text-white/55 font-manrope">
                Composed layouts that adapt gracefully across devices with
                polished interactions and subtle feedback.
              </p>
</article>
</div>
</div>
</section>
<section className="relative overflow-hidden px-5 py-20 sm:px-6 lg:px-8 bg-stone-950" id="craft">
<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
<div className="pointer-events-none absolute left-1/2 top-12 h-80 w-80 -translate-x-1/2 rounded-full bg-amber-100/10 blur-3xl"></div>
<div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-12 lg:gap-20 items-start relative">
<div className="lg:w-5/12 flex flex-col gap-8 pb-10 lg:pb-0 z-10 will-change-transform" id="craft-sticky-info">
<div>
<p className="text-xs font-medium uppercase tracking-[0.28rem] text-amber-100/60 font-manrope">
                Craft
              </p>
<h2 className="mt-4 text-4xl tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl font-gloock font-normal leading-[1.1]">
                Spatial stories with hospitality-level polish.
              </h2>
</div>
<p className="max-w-md text-base leading-8 text-white/60 font-manrope">
              A refined suite of atmosphere, booking, and brand moments shaped
              for boutique stays, architecture studios, and destination-led
              experiences. As you scroll, discover how we build tension and
              release in every digital arrival.
            </p>
</div>
<div className="w-full lg:w-7/12 flex flex-col gap-16 lg:gap-32 lg:pt-32 pb-16 lg:pb-32" id="craft-cards">
<article className="craft-card group relative min-h-[36rem] lg:min-h-[46rem] w-full overflow-hidden rounded-[2.5rem] bg-white/[0.05] p-6 lg:p-10 shadow-2xl shadow-black/25 border-gradient">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_38%,rgba(252,211,77,0.35),transparent_18%),radial-gradient(circle_at_52%_42%,rgba(255,255,255,0.22),transparent_26%),linear-gradient(145deg,rgba(255,255,255,0.12),rgba(0,0,0,0.55))]"></div>
<div className="absolute inset-0 opacity-70" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/09ce020f-8707-4471-aaa6-26cf75898e36_3840w.png\')', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/80"></div>
<div className="relative z-10 flex h-full min-h-[31rem] lg:min-h-[41rem] flex-col justify-between">
<div className="flex flex-wrap items-center gap-2">
<span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[0.68rem] font-medium uppercase tracking-[0.16rem] text-white/90 backdrop-blur-xl font-manrope shadow-lg">
                    Atmosphere
                  </span>
<span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[0.68rem] font-medium uppercase tracking-[0.16rem] text-white/90 backdrop-blur-xl font-manrope shadow-lg">
                    Booking
                  </span>
</div>
<div>
<p className="text-2xl lg:text-3xl leading-snug text-white font-gloock font-normal tracking-tight max-w-sm">
                    “We shape every scroll like a calm arrival.”
                  </p>
<p className="mt-4 text-xs font-medium uppercase tracking-[0.2rem] text-white/60 font-manrope">
                    For boutique hospitality and destination brands
                  </p>
</div>
</div>
</article>
<article className="craft-card relative min-h-[36rem] lg:min-h-[46rem] w-full overflow-hidden rounded-[2.5rem] bg-white/[0.05] p-6 lg:p-10 shadow-2xl shadow-black/25 border-gradient">
<div className="absolute inset-0 opacity-85" style={{backgroundImage: 'linear-gradient(to bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.65)),url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/705309d0-2f5d-4b5b-a86e-2fd0239194ef_3840w.png\')', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
<div className="relative z-10 flex h-full min-h-[31rem] lg:min-h-[41rem] flex-col items-center justify-end text-center pb-8">
<h3 className="text-4xl tracking-tight text-white font-gloock font-normal">
                  Aurel Stay©
                </h3>
<p className="mt-3 text-[0.68rem] font-medium uppercase tracking-[0.2rem] text-white/70 font-manrope">
                  Guest journey system
                </p>
<a className="mt-12 inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/20 font-manrope shadow-2xl" href="#request">
                  View hospitality work
                </a>
</div>
</article>
<article className="craft-card relative min-h-[36rem] lg:min-h-[46rem] w-full overflow-hidden rounded-[2.5rem] bg-stone-900/50 p-8 lg:p-12 shadow-2xl shadow-black/25 border-gradient backdrop-blur-sm">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.10),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))]"></div>
<div className="relative z-10 flex h-full min-h-[31rem] lg:min-h-[41rem] flex-col justify-between">
<div>
<p className="text-xs font-medium uppercase tracking-[0.24rem] text-white/50 font-manrope">
                    → Concept to code
                  </p>
<h3 className="mt-10 text-3xl lg:text-4xl font-normal tracking-tight text-white font-gloock">
                    Turn discovery into desire.
                  </h3>
<p className="mt-6 max-w-sm text-base leading-8 text-white/60 font-manrope">
                    Choreograph editorial pacing, suite storytelling, and
                    booking clarity into one quiet, premium digital experience
                    that converts.
                  </p>
</div>
<div className="text-sm leading-7 text-white/60 font-manrope mt-10">
<p>contact@aurel.studio</p>
<p>+359 898 72 01</p>
<p className="mt-2">www.aurel.studio/contact</p>
</div>
</div>
</article>
</div>
</div>
</section>
<section className="relative overflow-hidden bg-stone-950 px-5 py-20 sm:px-6 lg:px-8" id="testimonials">
<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-100/15 to-transparent"></div>
<div className="pointer-events-none absolute right-0 top-10 h-80 w-80 rounded-full bg-amber-900/20 blur-3xl"></div>
<img alt="" aria-hidden="true" className="pointer-events-none absolute right-4 top-8 z-0 hidden h-32 w-32 rounded-[2rem] object-cover opacity-60 shadow-2xl shadow-black/30 ring-1 ring-white/10 md:block lg:right-12 lg:top-12 lg:h-44 lg:w-44" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/caae712f-ae8c-4b6e-ae7d-167ccec04b5e_3840w.png" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/caae712f-ae8c-4b6e-ae7d-167ccec04b5e_3840w.png"/>
<div className="pointer-events-none absolute left-0 bottom-16 h-72 w-72 rounded-full bg-amber-100/10 blur-3xl"></div>
<div className="mx-auto max-w-7xl">
<div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
<div className="aura-reveal">
<div className="relative overflow-hidden rounded-[2rem] bg-white/[0.05] p-3 shadow-2xl shadow-black/30 border-gradient">
<div className="absolute inset-x-8 top-6 z-10 flex items-center gap-4 text-center text-[0.68rem] font-medium uppercase tracking-[0.2rem] text-white/55 font-manrope">
<span className="h-px flex-1 bg-white/15"></span>
<span>What clients remember</span>
<span className="h-px flex-1 bg-white/15"></span>
</div>
<div className="relative min-h-[20rem] overflow-hidden rounded-[1.5rem] bg-stone-900">
<div className="absolute inset-0 opacity-80" style={{backgroundImage: 'linear-gradient(120deg,rgba(0,0,0,0.68),rgba(0,0,0,0.14)_45%,rgba(0,0,0,0.72)),url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d8b6184-726c-474e-802a-290c3fdaeaa0_1600w.png\')', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(251,191,36,0.20),transparent_26%)]"></div>
<div className="relative z-10 flex min-h-[20rem] flex-col justify-end p-6">
<span className="mb-4 w-max rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.62rem] font-medium uppercase tracking-[0.16rem] text-white/75 backdrop-blur-xl font-manrope">
                      4.9 average sentiment
                    </span>
<p className="max-w-sm text-2xl tracking-tight text-white font-gloock font-normal">
                      “The site feels like arriving at the property before the
                      journey begins.”
                    </p>
</div>
</div>
</div>
</div>
<div className="aura-reveal">
<p className="text-xs font-medium uppercase tracking-[0.28rem] text-amber-100/60 font-manrope">
                Testimonials
              </p>
<h2 className="mt-4 max-w-2xl text-3xl tracking-tight text-white sm:text-4xl md:text-5xl font-gloock font-normal">
                10k+ considered arrivals shaped worldwide.
              </h2>
<p className="mt-5 max-w-2xl text-sm leading-7 text-white/55 font-manrope">
                Boutique hotels, architecture studios, and destination teams use
                Aurel to turn atmosphere into a clearer, warmer guest journey —
                with launch moments that feel memorable instead of manufactured.
              </p>
<div className="mt-6 flex flex-wrap gap-3">
<span className="inline-flex items-center gap-2 rounded-full bg-white/[0.07] px-4 py-2 text-xs font-medium text-white/70 backdrop-blur-xl border-gradient font-manrope">
<iconify-icon icon="solar:stars-linear" style={{fontSize: '1rem'}}></iconify-icon>
                  Hospitality-grade polish
                </span>
<span className="inline-flex items-center gap-2 rounded-full bg-white/[0.07] px-4 py-2 text-xs font-medium text-white/70 backdrop-blur-xl border-gradient font-manrope">
<iconify-icon icon="solar:chart-2-linear" style={{fontSize: '1rem'}}></iconify-icon>
                  More qualified inquiries
                </span>
</div>
</div>
</div>
<div className="relative mt-10 overflow-hidden" style={{maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}>
<div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-stone-950 to-transparent"></div>
</div>
<div className="mt-10 flex flex-col items-center justify-center gap-3 text-center aura-reveal sm:flex-row">
<div className="flex -space-x-3">
<img alt="Client portrait" className="h-9 w-9 rounded-full border-2 border-stone-950 object-cover shadow-sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=160&amp;q=80"/>
<span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-stone-950 bg-stone-700 text-xs font-semibold text-white font-manrope">
                EH
              </span>
<img alt="Client portrait" className="h-9 w-9 rounded-full border-2 border-stone-950 object-cover shadow-sm" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=160&amp;q=80"/>
<span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-stone-950 bg-white/15 text-xs font-semibold text-white font-manrope">
                +
              </span>
</div>
<p className="text-xs text-white/45 font-manrope">
              Trusted across 10,000+ guest touchpoints worldwide
            </p>
</div>
</div>
</section>
<section className="relative overflow-hidden px-5 py-20 sm:px-6 lg:px-8 bg-stone-950" id="about">
<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
<div className="pointer-events-none absolute left-1/2 top-12 h-80 w-80 -translate-x-1/2 rounded-full bg-amber-100/10 blur-3xl"></div>
<div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-12 lg:gap-20 items-start relative">
<div className="lg:w-5/12 flex flex-col gap-8 pb-10 lg:pb-0 z-10 will-change-transform" id="about-sticky-info">
<div>
<p className="text-xs font-medium uppercase tracking-[0.28rem] text-amber-100/60 font-manrope">
                Manifesto
              </p>
<h2 className="mt-4 text-4xl tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl font-gloock font-normal leading-[1.1]">
                The art of leaving an impression.
              </h2>
</div>
<p className="max-w-md text-base leading-8 text-white/60 font-manrope">
              We believe that a digital space should breathe. It shouldn’t rush
              you. It should invite you to linger, explore, and feel the texture
              of the brand before you ever step foot on the property. This is
              our manifesto on atmospheric design.
            </p>
</div>
<div className="w-full lg:w-7/12 flex flex-col gap-16 lg:gap-32 lg:pt-32 pb-16 lg:pb-32" id="about-cards">
<article className="about-card group relative min-h-[36rem] lg:min-h-[46rem] w-full overflow-hidden rounded-[2.5rem] bg-white/[0.05] p-6 lg:p-10 shadow-2xl shadow-black/25 border-gradient">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_38%,rgba(252,211,77,0.35),transparent_18%),radial-gradient(circle_at_52%_42%,rgba(255,255,255,0.22),transparent_26%),linear-gradient(145deg,rgba(255,255,255,0.12),rgba(0,0,0,0.55))]"></div>
<div className="absolute inset-0 opacity-70" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/402ce960-813b-4af7-aa4e-38c0b7d0cc41_3840w.png\')', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/80"></div>
<div className="relative z-10 flex h-full min-h-[31rem] lg:min-h-[41rem] flex-col justify-between">
<div className="flex flex-wrap items-center gap-2">
<span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[0.68rem] font-medium uppercase tracking-[0.16rem] text-white/90 backdrop-blur-xl font-manrope shadow-lg">
                    Origin
                  </span>
</div>
<div>
<p className="text-2xl lg:text-3xl leading-snug text-white font-gloock font-normal tracking-tight max-w-sm">
                    “We started with a single premise: what if websites felt
                    like physical places?”
                  </p>
<p className="mt-4 text-xs font-medium uppercase tracking-[0.2rem] text-white/60 font-manrope">
                    The Genesis
                  </p>
</div>
</div>
</article>
<article className="about-card relative min-h-[36rem] lg:min-h-[46rem] w-full overflow-hidden rounded-[2.5rem] bg-white/[0.05] p-6 lg:p-10 shadow-2xl shadow-black/25 border-gradient">
<div className="absolute inset-0 opacity-85" style={{backgroundImage: 'linear-gradient(to bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.65)),url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/333e7855-97ba-4efa-afb1-7a4083a98a45_3840w.png\')', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
<div className="relative z-10 flex h-full min-h-[31rem] lg:min-h-[41rem] flex-col justify-end pb-8">
<h3 className="text-3xl lg:text-4xl tracking-tight text-white font-gloock font-normal">
                  Silence is a design choice.
                </h3>
<p className="mt-6 max-w-sm text-base leading-8 text-white/70 font-manrope">
                  By stripping away the noise, we allow the essential character
                  of a brand to surface. The negative space speaks as loudly as
                  the typography.
                </p>
</div>
</article>
<article className="about-card relative min-h-[36rem] lg:min-h-[46rem] w-full overflow-hidden rounded-[2.5rem] bg-stone-900/50 p-8 lg:p-12 shadow-2xl shadow-black/25 border-gradient backdrop-blur-sm">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.10),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))]"></div>
<div className="absolute inset-0 opacity-40" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0f1a85ae-2698-4625-a5e1-c29146f8898b_3840w.png\')', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
<div className="relative z-10 flex h-full min-h-[31rem] lg:min-h-[41rem] flex-col justify-between">
<div>
<p className="text-xs font-medium uppercase tracking-[0.24rem] text-white/50 font-manrope">
                    → The Future
                  </p>
<h3 className="mt-10 text-3xl lg:text-4xl font-normal tracking-tight text-white font-gloock">
                    Shaping the next era of digital hospitality.
                  </h3>
<p className="mt-6 max-w-sm text-base leading-8 text-white/60 font-manrope">
                    Our journey continues as we refine the intersection of
                    architectural beauty and functional digital interfaces.
                  </p>
</div>
</div>
</article>
</div>
</div>
</section>
<section className="relative overflow-hidden px-5 py-20 sm:px-6 lg:px-8 bg-stone-950" id="request">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(251,191,36,0.12),transparent_28%)]"></div>
<div className="mx-auto max-w-7xl rounded-[2.5rem] px-5 py-14 shadow-2xl shadow-black/30 border-gradient sm:px-8 lg:px-12 bg-stone-950/85">
<div className="mx-auto max-w-2xl text-center">
<p className="text-xs font-medium uppercase tracking-[0.28rem] text-amber-100/60 font-manrope aura-reveal">
              Packages
            </p>
<h2 className="mt-4 text-3xl tracking-tight text-white sm:text-4xl md:text-5xl font-gloock font-normal aura-reveal">
              Flexible plans for cinematic brand experiences.
            </h2>
<p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/55 font-manrope aura-reveal">
              From focused landing pages to complete hospitality systems, choose
              the level of craft your next launch needs.
            </p>
<div className="mx-auto mt-10 inline-flex rounded-full bg-white/[0.07] p-1 border-gradient aura-reveal">
<span className="rounded-full bg-amber-100 px-5 py-2 text-xs font-semibold text-neutral-950 font-manrope">
                Project
              </span>
<span className="px-5 py-2 text-xs font-medium text-white/60 font-manrope">
                Retainer
              </span>
</div>
</div>
<div className="mt-10 grid gap-4 lg:grid-cols-3">
<article className="group rounded-[1.5rem] bg-amber-100 p-5 text-neutral-950 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 aura-reveal">
<span className="rounded-full border border-neutral-950/20 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16rem] font-manrope">
                Launch
              </span>
<div className="mt-16 flex items-end justify-center">
<p className="text-7xl tracking-tight font-manrope font-medium">
                  $8k
                </p>
</div>
<div className="mt-16 flex items-end justify-between gap-5">
<p className="max-w-xs text-xs leading-5 text-neutral-950/70 font-manrope">
                  A polished one-page experience with cinematic hero direction,
                  responsive sections, and a premium conversion path.
                </p>
<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-white transition group-hover:rotate-45">
<iconify-icon icon="solar:arrow-right-up-linear" style={{fontSize: '1rem'}}></iconify-icon>
</span>
</div>
</article>
<article className="group rounded-[1.5rem] bg-amber-100 p-5 text-neutral-950 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 aura-reveal">
<span className="rounded-full border border-neutral-950/20 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16rem] font-manrope">
                Signature
              </span>
<div className="mt-16 flex items-end justify-center">
<p className="text-7xl tracking-tight font-manrope font-medium">
                  $18k
                </p>
</div>
<div className="mt-16 flex items-end justify-between gap-5">
<p className="max-w-xs text-xs leading-5 text-neutral-950/70 font-manrope">
                  A complete editorial landing system with booking-focused
                  content, motion moments, and modular brand sections.
                </p>
<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-white transition group-hover:rotate-45">
<iconify-icon icon="solar:arrow-right-up-linear" style={{fontSize: '1rem'}}></iconify-icon>
</span>
</div>
</article>
<article className="group rounded-[1.5rem] bg-amber-100 p-5 text-neutral-950 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 aura-reveal">
<span className="rounded-full border border-neutral-950/20 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16rem] font-manrope">
                Estate
              </span>
<div className="mt-16 flex items-end justify-center">
<p className="text-7xl tracking-tight font-manrope font-medium">
                  $32k
                </p>
</div>
<div className="mt-16 flex items-end justify-between gap-5">
<p className="max-w-xs text-xs leading-5 text-neutral-950/70 font-manrope">
                  A full destination platform with immersive storytelling,
                  conversion flows, launch support, and post-launch refinement.
                </p>
<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-white transition group-hover:rotate-45">
<iconify-icon icon="solar:arrow-right-up-linear" style={{fontSize: '1rem'}}></iconify-icon>
</span>
</div>
</article>
</div>
<div className="mt-6 grid gap-4 rounded-[2rem] bg-white/[0.06] p-5 backdrop-blur-2xl border-gradient aura-reveal md:grid-cols-[1.15fr_0.85fr] md:items-center" id="contact">
<div>
<p className="text-xs font-medium uppercase tracking-[0.28rem] text-amber-100/60 font-manrope">
                Contact
              </p>
<h3 className="mt-3 text-2xl tracking-tight text-white sm:text-3xl font-gloock font-normal">
                Ready to build a quieter, more memorable digital arrival?
              </h3>
<p className="mt-4 max-w-2xl text-sm leading-7 text-white/55 font-manrope">
                Tell us about your property, studio, or destination brand. We’ll
                shape a focused scope and timeline for your next launch.
              </p>
</div>
<div className="flex flex-col gap-3 md:items-end">
<a className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-neutral-950 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-amber-50 font-manrope" href="mailto:contact@aurel.studio">
                Start a conversation
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-950 text-white transition duration-300 group-hover:rotate-45">
<iconify-icon icon="solar:arrow-right-linear" style={{fontSize: '1rem'}}></iconify-icon>
</span>
</a>
<p className="text-xs leading-5 text-white/45 font-manrope">
                contact@aurel.studio
                <br/>
                Response within 2 business days
              </p>
</div>
</div>
</div>
</section>
</main>
<footer className="relative overflow-hidden bg-stone-950 px-5 pb-8 pt-4 sm:px-6 lg:px-8">
<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-100/20 to-transparent"></div>
<div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-stone-950 shadow-2xl shadow-black/30">
<div className="relative overflow-hidden bg-[radial-gradient(circle_at_10%_25%,rgba(251,191,36,0.22),transparent_30%),linear-gradient(120deg,rgba(41,37,36,0.94),rgba(12,10,9,0.96)_48%,rgba(28,25,23,1))] px-6 py-14 sm:px-10 lg:px-16">
<div className="pointer-events-none absolute inset-x-0 top-0 h-24 opacity-30" style={{backgroundImage: 'repeating-linear-gradient(to bottom, rgba(255,255,255,0.42) 0px, rgba(255,255,255,0.42) 1px, transparent 1px, transparent 7px)'}}></div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 opacity-20" style={{backgroundImage: 'repeating-linear-gradient(to bottom, rgba(251,191,36,0.55) 0px, rgba(251,191,36,0.55) 1px, transparent 1px, transparent 7px)'}}></div>
<div className="relative z-10 max-w-2xl">
<span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-semibold tracking-tighter text-white shadow-2xl shadow-black/20 backdrop-blur-xl border-gradient font-manrope">
              AU
            </span>
<h2 className="max-w-3xl text-3xl tracking-tight text-white sm:text-4xl md:text-5xl font-gloock font-normal">
              Let your destination speak softly. We’ll shape the arrival.
            </h2>
<p className="mt-5 max-w-xl text-sm leading-7 text-white/58 font-manrope">
              Start with Aurel Studio and give every guest touchpoint the same
              calm, cinematic polish as the place itself.
            </p>
<a className="mt-7 inline-flex items-center gap-2 rounded-full bg-amber-100 px-5 py-3 text-sm font-semibold text-neutral-950 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-white font-manrope" href="mailto:contact@aurel.studio">
              Start a conversation
              <iconify-icon icon="solar:arrow-right-up-linear" style={{fontSize: '1rem'}}></iconify-icon>
</a>
</div>
</div>
<div className="relative z-10 mx-4 -mt-10 rounded-[2rem] bg-amber-50 p-6 text-neutral-950 shadow-2xl shadow-black/25 sm:mx-6 sm:p-8 lg:mx-10 lg:p-10">
<div className="grid gap-10 lg:grid-cols-[1.25fr_1fr_1fr_1fr]">
<div>
<a className="inline-flex items-center gap-3" href="#hero">
<span className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 text-sm font-semibold tracking-tighter text-white shadow-xl shadow-black/10 font-manrope">
                  AU
                </span>
<span className="text-xs font-semibold uppercase tracking-[0.32rem] text-neutral-950/80 font-manrope">
                  Aurel
                </span>
</a>
<h3 className="mt-7 max-w-sm text-3xl tracking-tight text-neutral-950 sm:text-4xl font-gloock font-normal">
                Never let a beautiful place feel ordinary online.
              </h3>
<a className="mt-6 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-4 py-2 text-xs font-semibold text-white transition hover:bg-stone-800 font-manrope" href="#request">
                View packages
                <iconify-icon icon="solar:arrow-right-up-linear" style={{fontSize: '0.9rem'}}></iconify-icon>
</a>
</div>
<div className="border-l border-neutral-950/15 pl-5">
<p className="text-xs font-semibold uppercase tracking-[0.18rem] text-neutral-950/45 font-manrope">
                Navigation
              </p>
<div className="mt-5 flex flex-col gap-2 text-sm text-neutral-950/68 font-manrope">
<a className="transition hover:text-neutral-950" href="#hero">
                  Hero
                </a>
<a className="transition hover:text-neutral-950" href="#vision">
                  Vision
                </a>
<a className="transition hover:text-neutral-950" href="#craft">
                  Craft
                </a>
<a className="transition hover:text-neutral-950" href="#testimonials">
                  Testimonials
                </a>
<a className="transition hover:text-neutral-950" href="#about">
                  About
                </a>
<a className="transition hover:text-neutral-950" href="#request">
                  Packages
                </a>
</div>
</div>
<div className="border-l border-neutral-950/15 pl-5">
<p className="text-xs font-semibold uppercase tracking-[0.18rem] text-neutral-950/45 font-manrope">
                Studio
              </p>
<div className="mt-5 flex flex-col gap-2 text-sm text-neutral-950/68 font-manrope">
<a className="transition hover:text-neutral-950" href="#contact">
                  Contact
                </a>
<a className="transition hover:text-neutral-950" href="mailto:contact@aurel.studio">
                  Email us
                </a>
<a className="transition hover:text-neutral-950" href="#request">
                  Request access
                </a>
<a className="transition hover:text-neutral-950" href="#vision">
                  Our approach
                </a>
</div>
</div>
<div className="border-l border-neutral-950/15 pl-5">
<p className="text-xs font-semibold uppercase tracking-[0.18rem] text-neutral-950/45 font-manrope">
                Details
              </p>
<div className="mt-5 flex flex-col gap-2 text-sm text-neutral-950/68 font-manrope">
<span>contact@aurel.studio</span>
<span>Response within 2 business days</span>
<span>Boutique hospitality</span>
<span>Architecture studios</span>
</div>
</div>
</div>
</div>
<div className="flex flex-col gap-4 px-6 py-6 text-xs text-white/38 sm:px-10 md:flex-row md:items-center md:justify-between font-manrope">
<p className="uppercase tracking-[0.2rem]">
            © 2026 Aurel Studio. All rights reserved.
          </p>
<p className="uppercase tracking-[0.2rem]">
            Cinematic digital systems for memorable arrivals.
          </p>
</div>
</div>
</footer>


<style id="aura-sequential-reveal-style">
      .aura-reveal {
        opacity: 0;
        transform: translate3d(0, 1.4rem, 0) scale(0.98);
        filter: blur(16px);
        transition: opacity 900ms cubic-bezier(0.22, 1, 0.36, 1), transform 900ms cubic-bezier(0.22, 1, 0.36, 1), filter 900ms cubic-bezier(0.22, 1, 0.36, 1);
        transition-delay: var(--aura-delay, 0ms);
        will-change: opacity, transform, filter;
      }
      .aura-reveal.is-visible {
        opacity: 1;
        transform: translate3d(0, 0, 0) scale(1);
        filter: blur(0);
      }
      .aura-words .aura-word {
        display: inline-block;
        opacity: 0;
        transform: translate3d(0, 0.85em, 0);
        filter: blur(12px);
        transition: opacity 850ms cubic-bezier(0.22, 1, 0.36, 1), transform 850ms cubic-bezier(0.22, 1, 0.36, 1), filter 850ms cubic-bezier(0.22, 1, 0.36, 1);
        transition-delay: calc(var(--aura-delay, 0ms) + (var(--aura-word-index, 0) * 64ms));
        will-change: opacity, transform, filter;
      }
      .aura-words.is-visible .aura-word,
      .aura-reveal.is-visible .aura-words .aura-word,
      .aura-reveal.is-visible.aura-words .aura-word {
        opacity: 1;
        transform: translate3d(0, 0, 0);
        filter: blur(0);
      }
      @media (prefers-reduced-motion: reduce) {
        .aura-reveal,
        .aura-words .aura-word {
          opacity: 1;
          transform: none;
          filter: none;
          transition: none;
        }
      }
    </style>



    </>
  );
}
