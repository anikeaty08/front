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



      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (!prefersReduced && window.Lenis) {
        const lenis = new Lenis({
          duration: 1.15,
          smoothWheel: true,
          wheelMultiplier: 0.9,
          touchMultiplier: 1.15
        });

        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
          anchor.addEventListener("click", (event) => {
            const target = document.querySelector(anchor.getAttribute("href"));
            if (target) {
              event.preventDefault();
              lenis.scrollTo(target, { offset: -80 });
            }
          });
        });
      }

      const menuButton = document.getElementById("menuButton");
      const mobileMenu = document.getElementById("mobileMenu");

      menuButton.addEventListener("click", () => {
        const isOpen = mobileMenu.classList.toggle("hidden") === false;
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.innerHTML = isOpen
          ? '<iconify-icon icon="solar:close-circle-linear" width="24" height="24" style="stroke-width:1.5;"></iconify-icon>'
          : '<iconify-icon icon="solar:hamburger-menu-linear" width="24" height="24" style="stroke-width:1.5;"></iconify-icon>';
      });

      mobileMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          mobileMenu.classList.add("hidden");
          menuButton.setAttribute("aria-expanded", "false");
          menuButton.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" width="24" height="24" style="stroke-width:1.5;"></iconify-icon>';
        });
      });

      if (!prefersReduced && window.gsap) {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".reveal-word", {
          y: "0%",
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.09,
          delay: 0.15
        });

        gsap.utils.toArray("section, footer").forEach((section) => {
          gsap.fromTo(section,
            { opacity: 0.88 },
            {
              opacity: 1,
              duration: 0.9,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 85%",
                toggleActions: "play none none reverse"
              }
            }
          );
        });

        gsap.to("#parallaxImage", {
          yPercent: -12,
          ease: "none",
          scrollTrigger: {
            trigger: "#parallaxWrap",
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      } else {
        document.querySelectorAll(".reveal-word").forEach((word) => {
          word.classList.remove("translate-y-full");
        });
      }

      const logoTrack = document.getElementById("logoTrack");
      let logoX = 0;
      let logoPaused = false;

      logoTrack.addEventListener("mouseenter", () => logoPaused = true);
      logoTrack.addEventListener("mouseleave", () => logoPaused = false);

      function animateLogos() {
        if (!prefersReduced && !logoPaused) {
          logoX -= 0.55;
          const resetPoint = logoTrack.scrollWidth / 2;
          if (Math.abs(logoX) >= resetPoint) logoX = 0;
          logoTrack.style.transform = "translateX(" + logoX + "px)";
        }
        requestAnimationFrame(animateLogos);
      }

      animateLogos();
    


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
    


      (function(){if(window.__altitudeObservedReveal)return;window.__altitudeObservedReveal=true;function init(){var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;var style=document.createElement('style');style.id='altitude-observed-reveal-style';style.textContent='[data-observe-reveal]{opacity:0;filter:blur(14px);transform:translate3d(var(--observe-slide-x,0),var(--observe-slide-y,28px),0);transition:opacity .9s cubic-bezier(.22,1,.36,1),transform .9s cubic-bezier(.22,1,.36,1),filter .9s cubic-bezier(.22,1,.36,1);transition-delay:calc(var(--observe-reveal-index,0)*70ms);will-change:opacity,transform,filter}[data-observe-reveal].observe-in-view{opacity:1;filter:blur(0);transform:translate3d(0,0,0)}[data-observe-word]{display:inline-block;opacity:0;filter:blur(10px);transform:translate3d(0,.75em,0);transition:opacity .75s cubic-bezier(.22,1,.36,1),transform .75s cubic-bezier(.22,1,.36,1),filter .75s cubic-bezier(.22,1,.36,1);transition-delay:calc((var(--observe-reveal-index,0)*70ms) + (var(--observe-word-index,0)*34ms));will-change:opacity,transform,filter}[data-observe-reveal].observe-in-view [data-observe-word]{opacity:1;filter:blur(0);transform:translate3d(0,0,0)}@media (prefers-reduced-motion: reduce){[data-observe-reveal],[data-observe-word]{opacity:1!important;filter:none!important;transform:none!important;transition:none!important}}';document.head.appendChild(style);function wrapWords(el){if(!el||el.dataset.observeWordsReady)return;var walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,{acceptNode:function(node){return node.nodeValue.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT;}});var nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);var wordIndex=0;nodes.forEach(function(node){var parts=node.nodeValue.split(/(\s+)/);var frag=document.createDocumentFragment();parts.forEach(function(part){if(!part)return;if(/^\s+$/.test(part)){frag.appendChild(document.createTextNode(part));}else{var span=document.createElement('span');span.setAttribute('data-observe-word','');span.style.setProperty('--observe-word-index',wordIndex++);span.textContent=part;frag.appendChild(span);}});node.parentNode.replaceChild(frag,node);});el.dataset.observeWordsReady='true';}document.querySelectorAll('#hero h1, section h2, section h3, section blockquote, footer h2').forEach(wrapWords);var selectors=['#hero h1','section h2','section h3','section p','section blockquote','section article','section figure','section img','section video','section a','footer h2','footer h3','footer p','footer a','#trusted iconify-icon'];var seen=[];selectors.forEach(function(sel){document.querySelectorAll(sel).forEach(function(el){if(seen.indexOf(el)===-1)seen.push(el);});});seen.forEach(function(el,i){el.setAttribute('data-observe-reveal','');el.style.setProperty('--observe-reveal-index',i%9);el.style.setProperty('--observe-slide-x',i%3===0?'-18px':(i%3===1?'0px':'18px'));el.style.setProperty('--observe-slide-y',i%3===1?'30px':'18px');});if(reduce){seen.forEach(function(el){el.classList.add('observe-in-view');});return;}var reveal=function(el){el.classList.add('observe-in-view');};if(!('IntersectionObserver'in window)){seen.forEach(reveal);return;}var observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){reveal(entry.target);observer.unobserve(entry.target);}});},{threshold:.14,rootMargin:'0px 0px -8% 0px'});seen.forEach(function(el){observer.observe(el);});}if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}else{init();}})();
    
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
      
<div className="fixed inset-0 z-0 flex justify-center pointer-events-none">
<div className="h-full w-full max-w-[1440px] border-x border-[#1a1a1a]/15 px-6 md:px-12 flex justify-between">
<div className="h-full w-px bg-[#1a1a1a]/10"></div>
<div className="hidden h-full w-px bg-[#1a1a1a]/10 md:block"></div>
<div className="hidden h-full w-px bg-[#1a1a1a]/10 lg:block"></div>
<div className="h-full w-px bg-[#1a1a1a]/10"></div>
</div>
</div>
<main className="relative z-10 mx-auto w-full max-w-[1440px] bg-[#e8e6df]" id="top">
<header className="sticky top-0 z-50 border-b border-[#1a1a1a]/15 bg-[#e8e6df]/90 px-6 py-5 backdrop-blur-md md:px-12">
<nav className="relative flex items-center justify-between text-sm font-medium">
<div className="hidden items-center gap-8 md:flex">
<a className="group inline-flex items-center gap-2 uppercase tracking-[0.14em] text-xs text-[#1a1a1a]/70 transition duration-500 hover:text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] focus:ring-offset-2 focus:ring-offset-[#e8e6df]" href="#features">
              Experience
              <span className="h-px w-0 bg-[#1a1a1a] transition-all duration-500 group-hover:w-6"></span>
</a>
<a className="group inline-flex items-center gap-2 uppercase tracking-[0.14em] text-xs text-[#1a1a1a]/70 transition duration-500 hover:text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] focus:ring-offset-2 focus:ring-offset-[#e8e6df]" href="#journey">
              Reserve
              <span className="h-px w-0 bg-[#1a1a1a] transition-all duration-500 group-hover:w-6"></span>
</a>
</div>
<a className="absolute left-1/2 -translate-x-1/2 text-lg font-medium uppercase tracking-tighter transition duration-500 hover:tracking-normal focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] focus:ring-offset-2 focus:ring-offset-[#e8e6df]" href="#top">
            ALTITUDE MTL
          </a>
<div className="hidden items-center gap-8 md:flex">
<a className="group inline-flex items-center gap-2 uppercase tracking-[0.14em] text-xs text-[#1a1a1a]/70 transition duration-500 hover:text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] focus:ring-offset-2 focus:ring-offset-[#e8e6df]" href="#gallery">
              Gallery
              <span className="h-px w-0 bg-[#1a1a1a] transition-all duration-500 group-hover:w-6"></span>
</a>
<a className="group inline-flex items-center gap-2 uppercase tracking-[0.14em] text-xs text-[#1a1a1a]/70 transition duration-500 hover:text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] focus:ring-offset-2 focus:ring-offset-[#e8e6df]" href="#footer">
              Contact
              <span className="h-px w-0 bg-[#1a1a1a] transition-all duration-500 group-hover:w-6"></span>
</a>
</div>
<button aria-expanded="false" aria-label="Open navigation" className="ml-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#1a1a1a]/15 transition duration-500 hover:bg-[#1a1a1a] hover:text-[#e8e6df] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] focus:ring-offset-2 focus:ring-offset-[#e8e6df] md:hidden" id="menuButton">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</nav>
<div className="hidden pt-5 md:hidden" id="mobileMenu">
<div className="grid gap-2 border-t border-[#1a1a1a]/15 pt-5">
<a className="rounded-full border border-[#1a1a1a]/15 px-5 py-3 text-sm uppercase tracking-[0.14em] transition duration-500 hover:bg-[#1a1a1a] hover:text-[#e8e6df]" href="#features">
              Experience
            </a>
<a className="rounded-full border border-[#1a1a1a]/15 px-5 py-3 text-sm uppercase tracking-[0.14em] transition duration-500 hover:bg-[#1a1a1a] hover:text-[#e8e6df]" href="#journey">
              Reserve
            </a>
<a className="rounded-full border border-[#1a1a1a]/15 px-5 py-3 text-sm uppercase tracking-[0.14em] transition duration-500 hover:bg-[#1a1a1a] hover:text-[#e8e6df]" href="#gallery">
              Gallery
            </a>
<a className="rounded-full border border-[#1a1a1a]/15 px-5 py-3 text-sm uppercase tracking-[0.14em] transition duration-500 hover:bg-[#1a1a1a] hover:text-[#e8e6df]" href="#footer">
              Contact
            </a>
</div>
</div>
</header>
<section className="border-b border-[#1a1a1a]/15" id="hero">
<div className="grid grid-cols-1 md:grid-cols-12">
<div className="group relative h-[48vh] overflow-hidden border-b border-[#1a1a1a]/15 p-4 md:col-span-7 md:h-[66vh] md:border-b-0 md:border-r md:p-6">
<div className="relative h-full w-full overflow-hidden bg-[#1a1a1a]/10">
<video aria-label="Downtown Montreal skyline viewed from an elevated lounge terrace" className="h-full w-full object-cover grayscale transition duration-1000 group-hover:scale-105" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ee6880cd-3c7c-49a1-870d-368377a90afa_3840w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/9109ecbb-cdc4-4815-981e-2ea83be13765/1779112425279-5ee6a50d-ecd3-4b8a-b970-50cb4c95d840.mp4"></video>
<div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/45 via-transparent to-transparent"></div>
<div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-6 text-[#e8e6df]">
<p className="max-w-xs text-xs uppercase tracking-[0.16em]">
                  44 floors above downtown — cocktails, skyline dining, midnight
                  vinyl.
                </p>
<span className="hidden text-xs uppercase tracking-[0.16em] md:block">
                  45.5017° N / 73.5673° W
                </span>
</div>
</div>
</div>
<div className="flex flex-col md:col-span-5">
<div className="grid min-h-[18rem] grid-cols-5 gap-4 border-b border-[#1a1a1a]/15 p-4 md:p-6">
<div className="group col-span-3 overflow-hidden bg-[#1a1a1a]/10">
<img alt="Chef finishing plates in a refined sky lounge" className="h-full w-full object-cover grayscale transition duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
<div className="col-span-2 flex flex-col items-center justify-center border border-[#1a1a1a]/15 text-center">
<span className="font-light leading-none tracking-tighter text-[7rem] md:text-[8rem]" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                  44
                </span>
<span className="text-xs uppercase tracking-[0.16em] text-[#1a1a1a]/60">
                  Floors
                </span>
</div>
</div>
<div className="grid min-h-[18rem] grid-cols-2 gap-4 p-4 md:p-6">
<div className="group overflow-hidden bg-[#1a1a1a]/10">
<video aria-label="Craft cocktail served beside a window" className="h-full w-full object-cover grayscale transition duration-1000 group-hover:scale-105" data-aura-generated-video="true" data-aura-video-preset="hover" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b524ec77-760e-4162-9e66-f937ccf1a729_3840w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/9109ecbb-cdc4-4815-981e-2ea83be13765/1779112498866-fcbbb4f8-08e5-4c38-81ea-05a81d907324.mp4"></video>
</div>
<div className="group overflow-hidden bg-[#1a1a1a]/10">
<img alt="Evening lounge seating with soft architectural lighting" className="h-full w-full object-cover grayscale transition duration-1000 group-hover:scale-105" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/18d53982-8a00-405a-bf6e-2b619c9814f0_3840w.png" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/18d53982-8a00-405a-bf6e-2b619c9814f0_3840w.png"/>
</div>
</div>
</div>
</div>
<div className="px-6 py-20 md:px-12 md:py-32">
<div className="mb-12 flex items-center justify-between text-xs uppercase tracking-[0.16em] text-[#1a1a1a]/60">
<span>(*01)</span>
<span>Sky Lounge</span>
<span>Downtown Montréal</span>
</div>
<div className="overflow-hidden">
<h1 className="reveal-line flex flex-wrap items-center gap-x-4 gap-y-1 pb-4 font-light uppercase leading-[0.85] tracking-tighter text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[11rem]" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
<span className="reveal-word inline-block translate-y-full">
                Above
              </span>
<span className="reveal-word inline-flex translate-y-full items-center">
<iconify-icon height="96" icon="solar:stars-linear" style={{strokeWidth: '1.5'}} width="96"></iconify-icon>
</span>
<span className="reveal-word inline-block translate-y-full">The</span>
<span className="reveal-word inline-block translate-y-full">
                City
              </span>
</h1>
</div>
<div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-12">
<div className="md:col-span-4">
<div className="w-36 border-t border-[#1a1a1a]/15 pt-3 text-xs uppercase tracking-[0.16em] text-[#1a1a1a]/60">
                Open daily · 5PM–2AM
              </div>
</div>
<div className="md:col-span-8">
<p className="max-w-3xl text-base leading-relaxed md:text-lg">
                A cinematic rooftop lounge in the heart of downtown Montreal,
                pairing skyline tables, seasonal Quebec ingredients, and
                late-night sound with the hush of a private observatory.
              </p>
<div className="mt-8 flex flex-col gap-3 sm:flex-row">
<a className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#1a1a1a] px-7 py-3 text-sm font-medium uppercase tracking-[0.14em] text-[#e8e6df] transition duration-500 hover:-translate-y-1 hover:bg-[#1a1a1a]/85 focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] focus:ring-offset-2 focus:ring-offset-[#e8e6df]" href="#journey">
                  Reserve a Table
                  <iconify-icon className="transition duration-500 group-hover:translate-x-1" height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#1a1a1a]/15 px-7 py-3 text-sm font-medium uppercase tracking-[0.14em] transition duration-500 hover:-translate-y-1 hover:bg-[#1a1a1a] hover:text-[#e8e6df] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] focus:ring-offset-2 focus:ring-offset-[#e8e6df]" href="#gallery">
                  View Atmosphere
                  <iconify-icon className="transition duration-500 group-hover:rotate-6" height="18" icon="solar:gallery-wide-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>
<section className="border-b border-[#1a1a1a]/15" id="features">
<div className="grid grid-cols-1 lg:grid-cols-12">
<div className="border-b border-[#1a1a1a]/15 p-6 md:p-12 lg:col-span-4 lg:border-b-0 lg:border-r">
<span className="mb-6 block text-xs uppercase tracking-[0.16em] text-[#1a1a1a]/60">
              02 / Features
            </span>
<h2 className="font-light tracking-tighter text-5xl md:text-7xl" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
              A lounge calibrated for altitude.
            </h2>
</div>
<div className="grid grid-cols-1 lg:col-span-8 md:grid-cols-2">
<article className="group border-b border-[#1a1a1a]/15 p-6 transition duration-700 hover:bg-[#1a1a1a]/5 md:border-r md:p-10">
<div className="mb-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#1a1a1a]/15 transition duration-700 group-hover:bg-[#1a1a1a] group-hover:text-[#e8e6df]">
<iconify-icon height="24" icon="solar:city-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="mb-4 font-light tracking-tight text-3xl" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                Skyline-first seating
              </h3>
<p className="text-base leading-relaxed text-[#1a1a1a]/70">
                Every table is oriented toward the mountain, river, or downtown
                grid, with low-profile interiors that keep the view
                uninterrupted.
              </p>
</article>
<article className="group border-b border-[#1a1a1a]/15 p-6 transition duration-700 hover:bg-[#1a1a1a]/5 md:p-10">
<div className="mb-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#1a1a1a]/15 transition duration-700 group-hover:bg-[#1a1a1a] group-hover:text-[#e8e6df]">
<iconify-icon height="24" icon="solar:chef-hat-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="mb-4 font-light tracking-tight text-3xl" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                Quebec seasonal menu
              </h3>
<p className="text-base leading-relaxed text-[#1a1a1a]/70">
                Small plates, raw bar, and late-night desserts built around
                local farms, boreal herbs, and French-Montreal technique.
              </p>
</article>
<article className="group border-b border-[#1a1a1a]/15 p-6 transition duration-700 hover:bg-[#1a1a1a]/5 md:border-r md:p-10 lg:border-b-0">
<div className="mb-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#1a1a1a]/15 transition duration-700 group-hover:bg-[#1a1a1a] group-hover:text-[#e8e6df]">
<iconify-icon height="24" icon="solar:martini-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="mb-4 font-light tracking-tight text-3xl" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                Cocktails by weather
              </h3>
<p className="text-base leading-relaxed text-[#1a1a1a]/70">
                A changing bar program responds to fog, snow, sunset, and summer
                heat with clarified, stirred, and zero-proof pours.
              </p>
</article>
<article className="group p-6 transition duration-700 hover:bg-[#1a1a1a]/5 md:p-10">
<div className="mb-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#1a1a1a]/15 transition duration-700 group-hover:bg-[#1a1a1a] group-hover:text-[#e8e6df]">
<iconify-icon height="24" icon="solar:music-note-2-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="mb-4 font-light tracking-tight text-3xl" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                Late sound, low volume
              </h3>
<p className="text-base leading-relaxed text-[#1a1a1a]/70">
                Resident selectors move from jazz and soul to midnight house
                without overwhelming conversation or the room.
              </p>
</article>
</div>
</div>
</section>
<section className="border-b border-[#1a1a1a]/15" id="testimonials">
<div className="grid grid-cols-1 md:grid-cols-12">
<div className="border-b border-[#1a1a1a]/15 p-6 md:col-span-4 md:border-b-0 md:border-r md:p-12">
<span className="mb-6 block text-xs uppercase tracking-[0.16em] text-[#1a1a1a]/60">
              03 / Proof
            </span>
<h2 className="font-light tracking-tighter text-5xl md:text-7xl" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
              What the city says.
            </h2>
</div>
<div className="md:col-span-8">
<div className="grid grid-cols-1 md:grid-cols-3">
<figure className="group border-b border-[#1a1a1a]/15 p-6 transition duration-700 hover:bg-[#1a1a1a]/5 md:border-b-0 md:border-r md:p-8">
<div className="mb-8 flex items-center gap-4">
<img alt="Portrait of Camille" className="h-14 w-14 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&amp;fit=crop&amp;w=240&amp;q=80"/>
<div>
<figcaption className="text-sm font-medium">
                      Camille R.
                    </figcaption>
<p className="text-xs uppercase tracking-[0.14em] text-[#1a1a1a]/50">
                      Concierge
                    </p>
</div>
</div>
<blockquote className="text-lg leading-relaxed tracking-tight">
                  “The rare downtown room that feels both cinematic and calm.
                  Guests remember the first elevator doors opening.”
                </blockquote>
</figure>
<figure className="group border-b border-[#1a1a1a]/15 p-6 transition duration-700 hover:bg-[#1a1a1a]/5 md:border-b-0 md:border-r md:p-8">
<div className="mb-8 flex items-center gap-4">
<img alt="Portrait of Marc" className="h-14 w-14 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=240&amp;q=80"/>
<div>
<figcaption className="text-sm font-medium">Marc L.</figcaption>
<p className="text-xs uppercase tracking-[0.14em] text-[#1a1a1a]/50">
                      Food Editor
                    </p>
</div>
</div>
<blockquote className="text-lg leading-relaxed tracking-tight">
                  “Polished without being stiff. The view is the headline, but
                  the bar program carries the night.”
                </blockquote>
</figure>
<figure className="group p-6 transition duration-700 hover:bg-[#1a1a1a]/5 md:p-8">
<div className="mb-8 flex items-center gap-4">
<img alt="Portrait of Nadia" className="h-14 w-14 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=240&amp;q=80"/>
<div>
<figcaption className="text-sm font-medium">
                      Nadia S.
                    </figcaption>
<p className="text-xs uppercase tracking-[0.14em] text-[#1a1a1a]/50">
                      Event Host
                    </p>
</div>
</div>
<blockquote className="text-lg leading-relaxed tracking-tight">
                  “Our private dinner felt intimate, despite the whole city
                  glowing around us.”
                </blockquote>
</figure>
</div>
</div>
</div>
</section>
<section className="border-b border-[#1a1a1a]/15" id="journey">
<div className="grid grid-cols-1 lg:grid-cols-12">
<div className="border-b border-[#1a1a1a]/15 p-6 md:p-12 lg:col-span-4 lg:border-b-0 lg:border-r">
<span className="mb-6 block text-xs uppercase tracking-[0.16em] text-[#1a1a1a]/60">
              04 / Journey
            </span>
<h2 className="font-light tracking-tighter text-5xl md:text-7xl" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
              From street level to skyline.
            </h2>
<a className="group mt-10 inline-flex min-h-12 items-center gap-3 rounded-full border border-[#1a1a1a]/15 px-7 py-3 text-sm font-medium uppercase tracking-[0.14em] transition duration-500 hover:bg-[#1a1a1a] hover:text-[#e8e6df] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] focus:ring-offset-2 focus:ring-offset-[#e8e6df]" href="mailto:reservations@altitudemtl.com">
              Request a reservation
              <iconify-icon className="transition duration-500 group-hover:rotate-6" height="18" icon="solar:calendar-mark-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
<div className="lg:col-span-8">
<div className="group grid grid-cols-1 border-b border-[#1a1a1a]/15 transition duration-700 hover:bg-[#1a1a1a]/5 md:grid-cols-12">
<div className="border-b border-[#1a1a1a]/15 p-6 md:col-span-3 md:border-b-0 md:border-r md:p-8">
<span className="font-light leading-none tracking-tighter text-7xl" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                  01
                </span>
</div>
<div className="p-6 md:col-span-9 md:p-8">
<h3 className="mb-3 font-light tracking-tight text-3xl" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                  Choose your horizon
                </h3>
<p className="max-w-2xl text-base leading-relaxed text-[#1a1a1a]/70">
                  Select mountain, river, or downtown-facing seats. Our team
                  confirms the best time for golden hour, dinner, or late-night
                  atmosphere.
                </p>
</div>
</div>
<div className="group grid grid-cols-1 border-b border-[#1a1a1a]/15 transition duration-700 hover:bg-[#1a1a1a]/5 md:grid-cols-12">
<div className="border-b border-[#1a1a1a]/15 p-6 md:col-span-3 md:border-b-0 md:border-r md:p-8">
<span className="font-light leading-none tracking-tighter text-7xl" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                  02
                </span>
</div>
<div className="p-6 md:col-span-9 md:p-8">
<h3 className="mb-3 font-light tracking-tight text-3xl" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                  Arrive through the private lift
                </h3>
<p className="max-w-2xl text-base leading-relaxed text-[#1a1a1a]/70">
                  Check in at the ground-floor host desk before ascending
                  directly into the lounge’s arrival gallery.
                </p>
</div>
</div>
<div className="group grid grid-cols-1 transition duration-700 hover:bg-[#1a1a1a]/5 md:grid-cols-12">
<div className="border-b border-[#1a1a1a]/15 p-6 md:col-span-3 md:border-b-0 md:border-r md:p-8">
<span className="font-light leading-none tracking-tighter text-7xl" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                  03
                </span>
</div>
<div className="p-6 md:col-span-9 md:p-8">
<h3 className="mb-3 font-light tracking-tight text-3xl" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                  Stay until the city softens
                </h3>
<p className="max-w-2xl text-base leading-relaxed text-[#1a1a1a]/70">
                  Move from dinner to cocktails to the listening room as
                  downtown lights shift from rush hour to midnight.
                </p>
</div>
</div>
</div>
</div>
</section>
<section className="overflow-hidden border-b border-[#1a1a1a]/15 bg-[#1a1a1a] py-10 text-[#e8e6df]" id="trusted">
<div className="mb-8 flex items-center justify-between px-6 text-xs uppercase tracking-[0.16em] text-[#e8e6df]/60 md:px-12">
<span>05 / Trusted By</span>
<span>Private events · brand dinners · cultural nights</span>
</div>
<div className="flex w-max items-center gap-16 px-8 will-change-transform" id="logoTrack">
<iconify-icon height="64" icon="simple-icons:nasa" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:spacex" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:uber" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:visa" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:grab" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:bose" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:discover" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:dji" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:nikon" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:craftsman" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:sony" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:nasa" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:spacex" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:uber" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:visa" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:grab" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:bose" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:discover" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:dji" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:nikon" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:craftsman" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:sony" width="64"></iconify-icon>
</div>
</section>
<section className="border-b border-[#1a1a1a]/15" id="story">
<div className="grid grid-cols-1 md:grid-cols-12">
<div className="border-b border-[#1a1a1a]/15 p-6 md:col-span-5 md:border-b-0 md:border-r md:p-12">
<span className="mb-6 block text-xs uppercase tracking-[0.16em] text-[#1a1a1a]/60">
              06 / Story
            </span>
<h2 className="mb-10 font-light tracking-tighter text-5xl md:text-7xl" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
              Built for the hour when Montreal turns silver.
            </h2>
<p className="max-w-md text-base leading-relaxed text-[#1a1a1a]/70">
              ALTITUDE MTL began as a study in restraint: fewer distractions,
              better light, slower hospitality, and a room designed to let the
              skyline do the speaking.
            </p>
</div>
<div className="p-6 md:col-span-7 md:p-12">
<div className="group relative mb-8 aspect-[4/3] overflow-hidden bg-[#1a1a1a]/10" id="parallaxWrap">
<img alt="Architectural interior with dramatic evening light" className="h-[120%] w-full object-cover grayscale transition duration-1000 group-hover:scale-105" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/115d739d-6258-4856-8ccc-b5a5a93ce123_3840w.png" id="parallaxImage" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/115d739d-6258-4856-8ccc-b5a5a93ce123_3840w.png"/>
<div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#1a1a1a]/55 via-transparent to-transparent p-6 text-[#e8e6df]">
<p className="max-w-sm text-xs uppercase tracking-[0.16em]">
                  A monochrome room, warm service, precise drinks, and a
                  panoramic frame around the city.
                </p>
</div>
</div>
<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
<p className="text-base leading-relaxed text-[#1a1a1a]/80">
                The interior borrows from Montreal’s winter palette: stone,
                smoke, linen, steel, and mirrored night. By day it is quiet and
                architectural; by evening it becomes a lantern above the
                business district.
              </p>
<p className="text-base leading-relaxed text-[#1a1a1a]/80">
                Our service philosophy is simple: anticipate, never interrupt.
                Guests come for the view, then return for the feeling of being
                held slightly above the city’s pace.
              </p>
</div>
</div>
</div>
</section>
<section className="border-b border-[#1a1a1a]/15" id="gallery">
<div className="border-b border-[#1a1a1a]/15 px-6 py-16 md:px-12 md:py-24">
<div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
<div>
<span className="mb-6 block text-xs uppercase tracking-[0.16em] text-[#1a1a1a]/60">
                07 / Gallery
              </span>
<h2 className="font-light tracking-tighter text-5xl md:text-7xl" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                Frames from the room.
              </h2>
</div>
<p className="max-w-md text-base leading-relaxed text-[#1a1a1a]/70">
              A visual proof of mood: terrace air, low seating, reflective
              surfaces, disciplined plates, and a horizon that keeps changing.
            </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12">
<div className="group border-b border-[#1a1a1a]/15 p-4 md:col-span-5 md:border-r md:p-6">
<div className="aspect-[4/5] overflow-hidden bg-[#1a1a1a]/10">
<img alt="Dining room table with city backdrop" className="h-full w-full object-cover grayscale transition duration-1000 group-hover:scale-105" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1da82ced-1bc7-42e7-b1b7-2f7503391e96_3840w.png" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1da82ced-1bc7-42e7-b1b7-2f7503391e96_3840w.png"/>
</div>
<div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.16em] text-[#1a1a1a]/60">
<span>Dinner service</span>
<span>North view</span>
</div>
</div>
<div className="grid grid-cols-1 md:col-span-7 md:grid-cols-2">
<div className="group border-b border-[#1a1a1a]/15 p-4 md:border-r md:p-6">
<div className="aspect-[4/3] overflow-hidden bg-[#1a1a1a]/10">
<img alt="Cocktails on a marble bar" className="h-full w-full object-cover grayscale transition duration-1000 group-hover:scale-105" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5aaa2638-5813-4fc7-86c2-35fbcbc2bbdc_3840w.png" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5aaa2638-5813-4fc7-86c2-35fbcbc2bbdc_3840w.png"/>
</div>
<div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.16em] text-[#1a1a1a]/60">
<span>Bar</span>
<span>Clarified pours</span>
</div>
</div>
<div className="group border-b border-[#1a1a1a]/15 p-4 md:p-6">
<div className="aspect-[4/3] overflow-hidden bg-[#1a1a1a]/10">
<img alt="Rooftop terrace at twilight" className="h-full w-full object-cover grayscale transition duration-1000 group-hover:scale-105" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e5242fde-51ee-49eb-abef-3930adce3dc3_3840w.png" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e5242fde-51ee-49eb-abef-3930adce3dc3_3840w.png"/>
</div>
<div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.16em] text-[#1a1a1a]/60">
<span>Terrace</span>
<span>Blue hour</span>
</div>
</div>
<div className="group border-b border-[#1a1a1a]/15 p-4 md:border-b-0 md:border-r md:p-6">
<div className="aspect-[4/3] overflow-hidden bg-[#1a1a1a]/10">
<img alt="Refined seasonal plate" className="h-full w-full object-cover grayscale transition duration-1000 group-hover:scale-105" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/462011d3-19c4-484b-968d-bba8720c6b6a_3840w.png" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/462011d3-19c4-484b-968d-bba8720c6b6a_3840w.png"/>
</div>
<div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.16em] text-[#1a1a1a]/60">
<span>Kitchen</span>
<span>Seasonal</span>
</div>
</div>
<div className="group p-4 md:p-6">
<div className="aspect-[4/3] overflow-hidden bg-[#1a1a1a]/10">
<img alt="Night lounge with music and soft light" className="h-full w-full object-cover grayscale transition duration-1000 group-hover:scale-105" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4b6ccdd9-1c8e-40d6-a959-b5dfcad6b2e4_3840w.png" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4b6ccdd9-1c8e-40d6-a959-b5dfcad6b2e4_3840w.png"/>
</div>
<div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.16em] text-[#1a1a1a]/60">
<span>Listening room</span>
<span>After 10PM</span>
</div>
</div>
</div>
</div>
</section>
<footer className="relative overflow-hidden px-6 py-20 md:px-12 md:py-28" id="footer">
<div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-12">
<div className="lg:col-span-6">
<span className="mb-6 block text-xs uppercase tracking-[0.16em] text-[#1a1a1a]/60">
              08 / Footer
            </span>
<h2 className="max-w-3xl font-light leading-none tracking-tighter text-5xl md:text-7xl" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
              Reserve the evening above downtown.
            </h2>
</div>
<div className="grid gap-10 sm:grid-cols-3 lg:col-span-6">
<div>
<h3 className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-[#1a1a1a]/60">
                Visit
              </h3>
<p className="text-sm leading-relaxed">
                1188 Rue Skyline
                <br/>
                Downtown Montreal, QC
              </p>
</div>
<div>
<h3 className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-[#1a1a1a]/60">
                Contact
              </h3>
<a className="block text-sm transition duration-500 hover:opacity-60" href="mailto:reservations@altitudemtl.com">
                reservations@altitudemtl.com
              </a>
<a className="mt-2 block text-sm transition duration-500 hover:opacity-60" href="tel:+15145550144">
                +1 514 555 0144
              </a>
</div>
<div>
<h3 className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-[#1a1a1a]/60">
                Hours
              </h3>
<p className="text-sm leading-relaxed">
                Sun–Wed · 5PM–12AM
                <br/>
                Thu–Sat · 5PM–2AM
              </p>
</div>
</div>
</div>
<div className="relative z-10 mt-16 flex flex-col justify-between gap-6 border-t border-[#1a1a1a]/15 pt-6 md:flex-row md:items-center">
<div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.16em] text-[#1a1a1a]/60">
<span>ALTITUDE MTL</span>
<span>© 2026</span>
<span>Downtown Montreal</span>
</div>
<div className="flex flex-wrap gap-3">
<a className="inline-flex h-12 items-center rounded-full border border-[#1a1a1a]/15 px-5 text-xs uppercase tracking-[0.14em] transition duration-500 hover:bg-[#1a1a1a] hover:text-[#e8e6df] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] focus:ring-offset-2 focus:ring-offset-[#e8e6df]" href="#top">
              Back to top
            </a>
<a className="inline-flex h-12 items-center rounded-full border border-[#1a1a1a]/15 px-5 text-xs uppercase tracking-[0.14em] transition duration-500 hover:bg-[#1a1a1a] hover:text-[#e8e6df] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] focus:ring-offset-2 focus:ring-offset-[#e8e6df]" href="mailto:events@altitudemtl.com">
              Private events
            </a>
</div>
</div>
<div className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-light uppercase tracking-tighter text-[#1a1a1a]/[0.035] text-[15vw]" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
          ABOVE MTL
        </div>
</footer>
</main>




    </>
  );
}
