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



      // Smooth Scroll Initialization (Lenis)
      const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: 'vertical',
          gestureDirection: 'vertical',
          smooth: true,
          mouseMultiplier: 1,
          smoothTouch: false,
          touchMultiplier: 2,
          infinite: false,
      })

      function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)

      // Accordion Logic
      document.querySelectorAll('.acc-trigger').forEach(trigger => {
          trigger.addEventListener('click', () => {
              const content = trigger.nextElementSibling;
              const icon = trigger.querySelector('.acc-icon');

              // Toggle current
              content.classList.toggle('hidden');

              // Animate Icon
              if (content.classList.contains('hidden')) {
                  icon.setAttribute('icon', 'solar:alt-arrow-down-linear');
                  trigger.classList.remove('bg-[#3e2723]/5');
              } else {
                  icon.setAttribute('icon', 'solar:alt-arrow-up-linear');
                  trigger.classList.add('bg-[#3e2723]/5');
              }
          });
      });
    


      document.addEventListener('DOMContentLoaded', () => {
          if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
              gsap.registerPlugin(ScrollTrigger);
              const hero = document.getElementById('hero-section');
              if (hero) {
                  const tl = gsap.timeline({
                      scrollTrigger: {
                          trigger: hero,
                          start: 'top top',
                          end: '+=200%',
                          pin: true,
                          scrub: 1
                      }
                  });
                  tl.to('.hero-bg-img', { scale: 1.15, opacity: 0.1, duration: 3 }, 0)
                    .to('.hero-main-content', { y: -100, opacity: 0, duration: 1 }, 0)
                    .to('.hero-header', { y: -50, opacity: 0, duration: 1 }, 0)
                    .fromTo('#hero-reveal-text', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, 1)
                    .to('#hero-reveal-text', { opacity: 0, y: -50, duration: 1 }, 2);
              }

              const exp = document.getElementById('experience-scroll');
              if (exp) {
                  const tl2 = gsap.timeline({
                      scrollTrigger: {
                          trigger: exp,
                          start: 'top top',
                          end: '+=300%',
                          pin: true,
                          scrub: 1
                      }
                  });
                  tl2.to('#exp-text-1', { y: -50, opacity: 0, duration: 1 }, 0)
                     .to('#exp-img-1', { scale: 1.1, opacity: 0, duration: 1 }, 0)
                     .to('#exp-img-2', { scale: 1.05, opacity: 0.4, duration: 1 }, 0)
                     .to('#exp-text-2', { y: 0, opacity: 1, duration: 1 }, 0)
                     .to('#exp-text-2', { y: 0, opacity: 1, duration: 0.5 }, 1)
                     .to('#exp-text-2', { y: -50, opacity: 0, duration: 1 }, 1.5)
                     .to('#exp-img-2', { scale: 1.1, opacity: 0, duration: 1 }, 1.5)
                     .to('#exp-img-3', { scale: 1.05, opacity: 0.4, duration: 1 }, 1.5)
                     .to('#exp-text-3', { y: 0, opacity: 1, duration: 1 }, 1.5);
              }
          }
      });
    


      document.addEventListener('DOMContentLoaded', () => {
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
          gsap.registerPlugin(ScrollTrigger);

          const headings = document.querySelectorAll('h2:not(#hero-section h2):not(#experience-scroll h2)');
          headings.forEach(heading => {
            let newHtml = '';
            heading.childNodes.forEach(node => {
              if (node.nodeType === 3) {
                const words = node.nodeValue.split(/(\s+)/);
                words.forEach(w => {
                  if (w.trim()) {
                    newHtml += `<span class="inline-block anim-word" style="opacity:0; filter:blur(10px); transform:translateY(30px);">${w}</span>`;
                  } else {
                    newHtml += w;
                  }
                });
              } else if (node.nodeType === 1 && node.tagName !== 'BR') {
                const words = node.innerHTML.split(/(\s+)/);
                let innerHtml = '';
                words.forEach(w => {
                  if (w.trim()) {
                    innerHtml += `<span class="inline-block anim-word" style="opacity:0; filter:blur(10px); transform:translateY(30px);">${w}</span>`;
                  } else {
                    innerHtml += w;
                  }
                });
                const clone = node.cloneNode();
                clone.innerHTML = innerHtml;
                newHtml += clone.outerHTML;
              } else {
                newHtml += (node.outerHTML || '');
              }
            });
            heading.innerHTML = newHtml;

            gsap.to(heading.querySelectorAll('.anim-word'), {
              scrollTrigger: {
                trigger: heading,
                start: 'top 90%'
              },
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              duration: 1,
              stagger: 0.1,
              ease: 'power3.out'
            });
          });

          let elements = Array.from(document.querySelectorAll('section:not(#hero-section):not(#experience-scroll) h3, section:not(#hero-section):not(#experience-scroll) p, section:not(#hero-section):not(#experience-scroll) .acc-trigger, section:not(#hero-section):not(#experience-scroll) [class*="group/tier"], section:not(#hero-section):not(#experience-scroll) [class*="group/input"], section:not(#hero-section):not(#experience-scroll) img, section:not(#hero-section):not(#experience-scroll) span.font-light'));

          elements = elements.filter(el => {
            return el.parentElement && !el.parentElement.closest('.acc-trigger, [class*="group/tier"], [class*="group/input"]');
          });

          elements.forEach(el => {
            gsap.fromTo(el,
              { opacity: 0, y: 40, filter: 'blur(10px)' },
              {
                scrollTrigger: {
                  trigger: el,
                  start: 'top 90%'
                },
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                duration: 1.2,
                ease: 'power3.out'
              }
            );
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
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      
<section className="relative min-h-[calc(100vh-1.5rem)] sm:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4rem)] border border-[#3e2723]/10 bg-[#d8c3a5] text-[#2b1d16] overflow-hidden flex flex-col group" id="hero-section">

<div className="absolute inset-0 bg-[image:repeating-linear-gradient(45deg,rgba(43,29,22,0.05)_0,rgba(43,29,22,0.05)_1px,transparent_1px,transparent_12px)] pointer-events-none z-0"></div>

<div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#2b1d16]/25 z-10 transition-transform duration-700 group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
<div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#2b1d16]/25 z-10 transition-transform duration-700 group-hover:translate-x-1 group-hover:-translate-y-1"></div>
<div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#2b1d16]/25 z-10 transition-transform duration-700 group-hover:-translate-x-1 group-hover:translate-y-1"></div>
<div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#2b1d16]/25 z-10 transition-transform duration-700 group-hover:translate-x-1 group-hover:translate-y-1"></div>

<video aria-label="Sushi Preparation" className="absolute inset-0 w-full h-full object-cover opacity-35 z-0 hero-bg-img" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d123655a-22eb-42e4-8d28-931e0518d4d2_3840w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/9109ecbb-cdc4-4815-981e-2ea83be13765/1779093489631-71fd2777-a092-42f3-aeb4-dae34466b179.mp4"></video>
<div className="absolute inset-0 bg-gradient-to-b from-[#fff]/0 via-[#fff]/15 to-[#000]/15 z-0"></div>

<header className="relative z-10 flex justify-between items-center p-6 lg:p-10 border-b border-[#2b1d16]/10 hero-header">
<div className="tracking-[0.3em] text-xs sm:text-sm uppercase font-medium text-[#2b1d16]/90">
          K I N Z A N
        </div>
<nav className="hidden md:flex gap-10 text-xs tracking-[0.18rem] uppercase text-[#2b1d16]/65 font-medium">
<a className="hover:text-[#2b1d16] transition-colors duration-300" href="#features">
            Discipline
          </a>
<a className="hover:text-[#2b1d16] transition-colors duration-300" href="#omakase">
            Omakase
          </a>
<a className="hover:text-[#2b1d16] transition-colors duration-300" href="#reserve">
            Reserve
          </a>
</nav>
<button className="md:hidden text-[#2b1d16]">
<iconify-icon height="24" icon="solar:menu-dots-linear" width="24"></iconify-icon>
</button>
</header>

<div className="relative z-10 flex-1 flex flex-col justify-end p-6 lg:p-12 xl:p-16">
<div className="max-w-5xl hero-main-content">
<p className="text-xs uppercase tracking-[0.18rem] text-[#2b1d16]/55 mb-6 flex items-center gap-3">
<span className="w-8 h-[1px] bg-[#2b1d16]/25"></span>
            Private Edo-Mae Counter
          </p>
<h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] tracking-tight leading-[0.95] mb-8 text-[#2b1d16]" style={{fontFamily: '\'Newsreader\', serif', fontWeight: '300'}}>
            The Quiet Art of
            <br/>
<span className="italic text-[#2b1d16]">Absolute Precision.</span>
</h1>
<div className="flex flex-col sm:flex-row gap-8 sm:items-end justify-between max-w-3xl">
<p className="text-sm md:text-base leading-relaxed text-[#2b1d16]/70 max-w-sm">
              Kinzan is an 8-seat sanctuary dedicated to the rhythm of the
              seasons, the discipline of restraint, and the fleeting perfection
              of a single bite.
            </p>
<a className="inline-flex items-center gap-3 bg-[#2b1d16] text-[#f7f1e6] px-6 py-3.5 rounded-full text-xs uppercase tracking-[0.18rem] font-medium hover:bg-[#201510] transition-all duration-300 group/btn shrink-0" href="#reserve">
              Secure a Seat
              <iconify-icon className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" height="16" icon="solar:arrow-up-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 pointer-events-none z-20 px-6 text-center" id="hero-reveal-text">
<p className="text-xs uppercase tracking-[0.3em] text-[#2b1d16]/55 mb-6">
            The Journey Begins
          </p>
<h2 className="text-5xl md:text-7xl text-[#2b1d16] font-light tracking-tight" style={{fontFamily: '\'Newsreader\', serif'}}>
            Surrender to the
            <br/>
<span className="italic">Omakase.</span>
</h2>
</div>
</div>
</section>

<section className="relative border border-[#1a1a1a]/30 bg-[#0b0b0b] text-[#f2f2f2] p-6 lg:p-16 xl:p-20 overflow-hidden group" id="features">

<div className="absolute inset-0 bg-[image:repeating-linear-gradient(45deg,rgba(242,242,242,0.03)_0,rgba(242,242,242,0.03)_1px,transparent_1px,transparent_12px)] pointer-events-none z-0"></div>

<div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#f2f2f2]/25 z-10 transition-transform duration-700 group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
<div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#f2f2f2]/25 z-10 transition-transform duration-700 group-hover:translate-x-1 group-hover:-translate-y-1"></div>
<div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#f2f2f2]/25 z-10 transition-transform duration-700 group-hover:-translate-x-1 group-hover:translate-y-1"></div>
<div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#f2f2f2]/25 z-10 transition-transform duration-700 group-hover:translate-x-1 group-hover:translate-y-1"></div>
<div className="relative z-10 grid lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-24">
<div className="flex flex-col justify-between">
<div>
<p className="text-xs uppercase tracking-[0.18rem] text-[#f2f2f2]/55 mb-6 flex items-center gap-3">
<span className="w-8 h-[1px] bg-[#f2f2f2]/20"></span>
              The Discipline
            </p>
<h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-8" style={{fontFamily: '\'Newsreader\', serif', fontWeight: '300'}}>
              Elements of
              <span className="italic">Mastery.</span>
</h2>
<p className="text-sm leading-relaxed text-[#f2f2f2]/70 max-w-sm mb-12">
              Every variable is considered. From the exact temperature of the
              rice to the specific day a fish reaches its peak umami. True
              luxury is found in the invisible details.
            </p>
</div>
<div className="hidden lg:block aspect-[4/5] border border-[#f2f2f2]/10 p-2 overflow-hidden max-w-xs relative">
<video aria-label="Sushi Detail" className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-1000 hover:scale-105 hover:grayscale-0" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/110960d0-42cd-472f-8697-01dd3ae3001f_3840w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/9109ecbb-cdc4-4815-981e-2ea83be13765/1779093729684-e714afa5-5a6c-4aee-9c95-5c93c775bc56.mp4"></video>
</div>
</div>
<div className="flex flex-col border-t border-[#f2f2f2]/10">

<div className="group/acc border-b border-[#f2f2f2]/10 py-6 sm:py-8 cursor-pointer acc-trigger">
<div className="flex justify-between items-center">
<div className="flex items-center gap-6">
<span className="text-xs uppercase tracking-[0.18rem] text-[#f2f2f2]/45 font-medium">
                  01
                </span>
<h3 className="text-2xl sm:text-3xl tracking-tight transition-colors group-hover/acc:text-[#f2f2f2]/80" style={{fontFamily: '\'Newsreader\', serif', fontWeight: '300'}}>
                  Shari
                  <span className="italic text-base sm:text-lg tracking-normal ml-2 text-[#f2f2f2]/55">
                    (The Rice)
                  </span>
</h3>
</div>
<div className="w-10 h-10 rounded-full border border-[#f2f2f2]/15 flex items-center justify-center transition-all duration-300 group-hover/acc:bg-[#f2f2f2] group-hover/acc:text-[#0b0b0b]">
<iconify-icon className="transition-transform duration-300 acc-icon" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</div>
<div className="acc-content hidden mt-6 text-sm leading-relaxed text-[#f2f2f2]/70 pr-12 lg:pr-24 pl-12">
              Sourced exclusively from a single family farm in Niigata. Cooked
              in a traditional iron hagama and seasoned with our proprietary
              blend of three aged red vinegars (akazu). Served precisely at body
              temperature.
            </div>
</div>

<div className="group/acc border-b border-[#f2f2f2]/10 py-6 sm:py-8 cursor-pointer acc-trigger">
<div className="flex justify-between items-center">
<div className="flex items-center gap-6">
<span className="text-xs uppercase tracking-[0.18rem] text-[#f2f2f2]/45 font-medium">
                  02
                </span>
<h3 className="text-2xl sm:text-3xl tracking-tight transition-colors group-hover/acc:text-[#f2f2f2]/80" style={{fontFamily: '\'Newsreader\', serif', fontWeight: '300'}}>
                  Neta
                  <span className="italic text-base sm:text-lg tracking-normal ml-2 text-[#f2f2f2]/55">
                    (The Catch)
                  </span>
</h3>
</div>
<div className="w-10 h-10 rounded-full border border-[#f2f2f2]/15 flex items-center justify-center transition-all duration-300 group-hover/acc:bg-[#f2f2f2] group-hover/acc:text-[#0b0b0b]">
<iconify-icon className="transition-transform duration-300 acc-icon" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</div>
<div className="acc-content hidden mt-6 text-sm leading-relaxed text-[#f2f2f2]/70 pr-12 lg:pr-24 pl-12">
              Flown in daily from Toyosu Market and trusted local
              spearfishermen. Each piece dictates its own preparation—some
              served immediately for texture, others aged for days in a
              controlled environment to maximize umami.
            </div>
</div>

<div className="group/acc border-b border-[#f2f2f2]/10 py-6 sm:py-8 cursor-pointer acc-trigger">
<div className="flex justify-between items-center">
<div className="flex items-center gap-6">
<span className="text-xs uppercase tracking-[0.18rem] text-[#f2f2f2]/45 font-medium">
                  03
                </span>
<h3 className="text-2xl sm:text-3xl tracking-tight transition-colors group-hover/acc:text-[#f2f2f2]/80" style={{fontFamily: '\'Newsreader\', serif', fontWeight: '300'}}>
                  Nikiri
                  <span className="italic text-base sm:text-lg tracking-normal ml-2 text-[#f2f2f2]/55">
                    (The Glaze)
                  </span>
</h3>
</div>
<div className="w-10 h-10 rounded-full border border-[#f2f2f2]/15 flex items-center justify-center transition-all duration-300 group-hover/acc:bg-[#f2f2f2] group-hover/acc:text-[#0b0b0b]">
<iconify-icon className="transition-transform duration-300 acc-icon" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</div>
<div className="acc-content hidden mt-6 text-sm leading-relaxed text-[#f2f2f2]/70 pr-12 lg:pr-24 pl-12">
              Our house soy glaze is simmered with roasted sake, mirin, and
              kombu, creating a delicate balance that enhances rather than masks
              the natural profile of the fish. Applied with a singular
              brushstroke.
            </div>
</div>
</div>
</div>
</section>

<section className="relative h-[100vh] sm:h-screen border border-[#1a1a1a]/30 bg-[#0b0b0b] text-[#f2f2f2] overflow-hidden group" id="experience-scroll">
<div className="absolute inset-0 bg-[image:repeating-linear-gradient(45deg,rgba(242,242,242,0.03)_0,rgba(242,242,242,0.03)_1px,transparent_1px,transparent_12px)] pointer-events-none z-10"></div>

<div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#f2f2f2]/25 z-20 transition-transform duration-700 group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
<div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#f2f2f2]/25 z-20 transition-transform duration-700 group-hover:translate-x-1 group-hover:-translate-y-1"></div>
<div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#f2f2f2]/25 z-20 transition-transform duration-700 group-hover:-translate-x-1 group-hover:translate-y-1"></div>
<div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#f2f2f2]/25 z-20 transition-transform duration-700 group-hover:translate-x-1 group-hover:translate-y-1"></div>

<div className="absolute inset-0 z-0">
<video aria-label="The Experience" className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale origin-center" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" id="exp-img-1" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/48680f8e-e5b5-4e0b-b9f2-22e42f3218d0_3840w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/9109ecbb-cdc4-4815-981e-2ea83be13765/1779094104695-c9edfbbb-1423-4c5c-8056-656724751bf1.mp4"></video>
<video aria-label="Sushi Master" className="absolute inset-0 w-full h-full object-cover opacity-0 grayscale origin-center" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" id="exp-img-2" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a05ab90a-f85c-41d4-b1cf-c2fd06b511c6_3840w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/9109ecbb-cdc4-4815-981e-2ea83be13765/1779094517587-a89466f6-f97d-4b38-b07b-720feadc4487.mp4"></video>
<img alt="Nigiri Detail" className="absolute inset-0 w-full h-full object-cover opacity-0 grayscale origin-center" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c2277de4-6026-4e80-819b-3ef9c7aaed27_3840w.png" id="exp-img-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c2277de4-6026-4e80-819b-3ef9c7aaed27_3840w.png"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0b]/50 via-[#0b0b0b]/20 to-[#0b0b0b]/80"></div>
</div>
<div className="relative z-20 h-full w-full flex flex-col items-center justify-center p-6 text-center">
<div className="absolute inset-0 flex flex-col items-center justify-center px-6" id="exp-text-1">
<p className="text-xs uppercase tracking-[0.18rem] text-[#f2f2f2]/55 mb-6 flex items-center gap-3">
<span className="w-6 h-[1px] bg-[#f2f2f2]/20"></span>
            The Experience
            <span className="w-6 h-[1px] bg-[#f2f2f2]/20"></span>
</p>
<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.2]" style={{fontFamily: '\'Newsreader\', serif', fontWeight: '300'}}>
            A pure,
            <span className="italic">meditative dialogue</span>
<br/>
            between chef and guest.
          </h2>
</div>
<div className="absolute inset-0 flex flex-col items-center justify-center px-6 opacity-0 translate-y-10 pointer-events-none" id="exp-text-2">
<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.2]" style={{fontFamily: '\'Newsreader\', serif', fontWeight: '300'}}>
            Every detail
            <span className="italic">considered.</span>
<br/>
            Every moment intentional.
          </h2>
</div>
<div className="absolute inset-0 flex flex-col items-center justify-center px-6 opacity-0 translate-y-10 pointer-events-none" id="exp-text-3">
<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.2]" style={{fontFamily: '\'Newsreader\', serif', fontWeight: '300'}}>
            An absolute masterclass
            <br/>
<span className="italic">in subtlety.</span>
</h2>
<div className="mt-12 flex flex-col items-center gap-2">
<p className="text-xs uppercase tracking-[0.18rem] font-medium text-[#f2f2f2]/80">
              The Culinary Review
            </p>
<div className="flex gap-1 text-[#f2f2f2]/40">
<span className="w-1.5 h-1.5 rounded-full bg-current"></span>
<span className="w-1.5 h-1.5 rounded-full bg-current"></span>
<span className="w-1.5 h-1.5 rounded-full bg-current"></span>
</div>
</div>
</div>
</div>
</section>

<section className="relative border border-[#1a1a1a]/15 bg-[#f7f1e6] text-[#0b0b0b] p-6 lg:p-16 xl:p-20 overflow-hidden group" id="omakase">
<div className="absolute inset-0 bg-[image:repeating-linear-gradient(45deg,rgba(11,11,11,0.03)_0,rgba(11,11,11,0.03)_1px,transparent_1px,transparent_12px)] pointer-events-none z-0"></div>

<div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#0b0b0b]/20 z-10 transition-transform duration-700 group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
<div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#0b0b0b]/20 z-10 transition-transform duration-700 group-hover:translate-x-1 group-hover:-translate-y-1"></div>
<div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#0b0b0b]/20 z-10 transition-transform duration-700 group-hover:-translate-x-1 group-hover:translate-y-1"></div>
<div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#0b0b0b]/20 z-10 transition-transform duration-700 group-hover:translate-x-1 group-hover:translate-y-1"></div>
<div className="relative z-10 grid lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-24">
<div className="flex flex-col">
<p className="text-xs uppercase tracking-[0.18rem] text-[#0b0b0b]/55 mb-6 flex items-center gap-3">
<span className="w-8 h-[1px] bg-[#0b0b0b]/20"></span>
            Offerings
          </p>
<h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-8" style={{fontFamily: '\'Newsreader\', serif', fontWeight: '300'}}>
            The
            <span className="italic">Omakase</span>
            Paths.
          </h2>
<p className="text-sm leading-relaxed text-[#0b0b0b]/70 max-w-sm mb-8">
            We offer two distinct journeys. Both require a surrender to the
            chef's daily selections, guided entirely by what the ocean provides
            on that specific morning.
          </p>
<div className="mt-auto hidden lg:flex gap-4 items-center border border-[#0b0b0b]/10 p-4 w-fit bg-[#0b0b0b]/5 backdrop-blur-sm">
<iconify-icon className="text-[#0b0b0b]/50" height="20" icon="solar:info-circle-linear" width="20"></iconify-icon>
<p className="text-xs text-[#0b0b0b]/70 leading-relaxed max-w-[200px]">
              Beverage pairings curated by our in-house sommelier are available
              upon seating.
            </p>
</div>
</div>
<div className="flex flex-col gap-12 sm:gap-16">

<div className="group/tier relative">
<div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-[#0b0b0b]/10 transition-all duration-500 group-hover/tier:bg-[#0b0b0b]/40 hidden sm:block"></div>
<div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-4 gap-2">
<h3 className="text-2xl sm:text-3xl tracking-tight" style={{fontFamily: '\'Newsreader\', serif', fontWeight: '300'}}>
                Daylight Journey
              </h3>
<div className="flex items-baseline gap-2">
<span className="text-lg tracking-widest font-light text-[#0b0b0b]">
                  $250
                </span>
<span className="text-xs text-[#0b0b0b]/50 uppercase tracking-widest">
                  / Guest
                </span>
</div>
</div>
<div className="flex flex-wrap gap-3 mb-6 text-[10px] uppercase tracking-[0.18rem] text-[#0b0b0b]/60 font-medium">
<span className="bg-[#0b0b0b]/5 px-3 py-1 border border-[#0b0b0b]/10">
                15 Pieces
              </span>
<span className="bg-[#0b0b0b]/5 px-3 py-1 border border-[#0b0b0b]/10">
                90 Minutes
              </span>
<span className="bg-[#0b0b0b]/5 px-3 py-1 border border-[#0b0b0b]/10">
                Lunch Only
              </span>
</div>
<p className="text-sm leading-relaxed text-[#0b0b0b]/70 max-w-lg">
              A focused progression of pure nigiri. Highlighting the day's
              freshest arrivals from Toyosu. Concludes with our signature tamago
              and clear soup.
            </p>
</div>
<div className="w-full h-[1px] bg-[#0b0b0b]/10"></div>

<div className="group/tier relative">
<div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-[#0b0b0b]/10 transition-all duration-500 group-hover/tier:bg-[#0b0b0b]/40 hidden sm:block"></div>
<div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-4 gap-2">
<h3 className="text-2xl sm:text-3xl tracking-tight" style={{fontFamily: '\'Newsreader\', serif', fontWeight: '300'}}>
                Signature Evening
              </h3>
<div className="flex items-baseline gap-2">
<span className="text-lg tracking-widest font-light text-[#0b0b0b]">
                  $400
                </span>
<span className="text-xs text-[#0b0b0b]/50 uppercase tracking-widest">
                  / Guest
                </span>
</div>
</div>
<div className="flex flex-wrap gap-3 mb-6 text-[10px] uppercase tracking-[0.18rem] text-[#0b0b0b]/60 font-medium">
<span className="bg-[#0b0b0b]/5 px-3 py-1 border border-[#0b0b0b]/10">
                22 Courses
              </span>
<span className="bg-[#0b0b0b]/5 px-3 py-1 border border-[#0b0b0b]/10">
                150 Minutes
              </span>
<span className="bg-[#0b0b0b]/5 px-3 py-1 border border-[#0b0b0b]/10">
                Dinner Only
              </span>
</div>
<p className="text-sm leading-relaxed text-[#0b0b0b]/70 max-w-lg">
              The complete expression of Kinzan. Begins with 6 intricate
              seasonal otsumami (appetizers) showcasing varied techniques,
              followed by a masterful 16-piece nigiri sequence.
            </p>
</div>
</div>
</div>
</section>

<section className="relative border border-[#1a1a1a]/30 bg-[#0b0b0b] text-[#f2f2f2] p-6 lg:p-16 xl:p-20 overflow-hidden group" id="reserve">
<div className="absolute inset-0 bg-[image:repeating-linear-gradient(45deg,rgba(242,242,242,0.03)_0,rgba(242,242,242,0.03)_1px,transparent_1px,transparent_12px)] pointer-events-none z-0"></div>

<div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#f2f2f2]/25 z-10 transition-transform duration-700 group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
<div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#f2f2f2]/25 z-10 transition-transform duration-700 group-hover:translate-x-1 group-hover:-translate-y-1"></div>
<div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#f2f2f2]/25 z-10 transition-transform duration-700 group-hover:-translate-x-1 group-hover:translate-y-1"></div>
<div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#f2f2f2]/25 z-10 transition-transform duration-700 group-hover:translate-x-1 group-hover:translate-y-1"></div>
<div className="relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div>
<p className="text-xs uppercase tracking-[0.18rem] text-[#f2f2f2]/55 mb-6 flex items-center gap-3">
<span className="w-8 h-[1px] bg-[#f2f2f2]/20"></span>
            Reservations
          </p>
<h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-6" style={{fontFamily: '\'Newsreader\', serif', fontWeight: '300'}}>
            Secure a
            <span className="italic">Seat.</span>
</h2>
<p className="text-sm leading-relaxed text-[#f2f2f2]/70 max-w-md mb-10">
            Due to the intimate nature of our 8-seat counter, general
            reservations are released on the 1st of each month. For private
            buyouts or special inquiries, please connect with us directly.
          </p>
<div className="grid grid-cols-2 gap-8 text-sm border-t border-[#f2f2f2]/10 pt-8">
<div>
<h4 className="text-xs uppercase tracking-[0.18rem] text-[#f2f2f2]/45 mb-3 font-medium">
                Location
              </h4>
<p className="text-[#f2f2f2]/80 leading-relaxed">
                428 Silk Road
                <br/>
                Culinary District, 10012
              </p>
</div>
<div>
<h4 className="text-xs uppercase tracking-[0.18rem] text-[#f2f2f2]/45 mb-3 font-medium">
                Direct
              </h4>
<p className="text-[#f2f2f2]/80 leading-relaxed">
                inquiries@kinzan.com
                <br/>
                +1 800 234 5678
              </p>
</div>
</div>
</div>
<div className="bg-white/5 backdrop-blur-md p-8 sm:p-12 border border-[#f2f2f2]/10 relative">

<div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#f2f2f2]/20"></div>
<div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[#f2f2f2]/20"></div>
<form className="flex flex-col gap-8 relative z-10">
<div className="flex flex-col gap-2 group/input">
<label className="text-[10px] uppercase tracking-[0.18rem] text-[#f2f2f2]/60 font-medium transition-colors group-focus-within/input:text-[#f2f2f2]">
                Guest Name
              </label>
<input className="bg-transparent border-b border-[#f2f2f2]/20 py-2 text-sm text-[#f2f2f2] focus:outline-none focus:border-[#f2f2f2] transition-colors placeholder:text-[#f2f2f2]/30" placeholder="Last, First" type="text"/>
</div>
<div className="flex flex-col gap-2 group/input">
<label className="text-[10px] uppercase tracking-[0.18rem] text-[#f2f2f2]/60 font-medium transition-colors group-focus-within/input:text-[#f2f2f2]">
                Contact Email
              </label>
<input className="bg-transparent border-b border-[#f2f2f2]/20 py-2 text-sm text-[#f2f2f2] focus:outline-none focus:border-[#f2f2f2] transition-colors placeholder:text-[#f2f2f2]/30" placeholder="email@domain.com" type="email"/>
</div>
<div className="flex flex-col gap-2 group/input">
<label className="text-[10px] uppercase tracking-[0.18rem] text-[#f2f2f2]/60 font-medium transition-colors group-focus-within/input:text-[#f2f2f2]">
                Inquiry Focus
              </label>
<input className="bg-transparent border-b border-[#f2f2f2]/20 py-2 text-sm text-[#f2f2f2] focus:outline-none focus:border-[#f2f2f2] transition-colors placeholder:text-[#f2f2f2]/30" placeholder="e.g. Private Buyout, Waitlist" type="text"/>
</div>
<button className="mt-4 self-start flex items-center gap-2 text-xs uppercase tracking-[0.18rem] font-medium text-[#f2f2f2] border-b border-[#f2f2f2] pb-1 hover:text-[#f2f2f2]/60 hover:border-[#f2f2f2]/60 transition-colors group/submit" type="button">
              Submit Inquiry
              <iconify-icon className="transition-transform group-hover/submit:translate-x-1" height="14" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<section className="relative border border-[#1a1a1a]/30 bg-[#0b0b0b] text-[#f2f2f2] p-8 lg:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 group">
<div className="absolute inset-0 bg-[image:repeating-linear-gradient(45deg,rgba(242,242,242,0.03)_0,rgba(242,242,242,0.03)_1px,transparent_1px,transparent_12px)] pointer-events-none z-0"></div>
<p className="relative z-10 text-[10px] uppercase tracking-[0.18rem] text-[#f2f2f2]/55 whitespace-nowrap font-medium flex items-center gap-3">
<span className="w-4 h-[1px] bg-[#f2f2f2]/20"></span>
        Affiliations
      </p>
<div className="relative z-10 flex flex-wrap justify-center md:justify-end gap-10 lg:gap-16 opacity-60">
<span className="text-sm lg:text-base font-light tracking-[0.25em] uppercase transition-opacity hover:opacity-100 cursor-default">
          Michelin Guide
        </span>
<span className="text-sm lg:text-base font-light tracking-[0.25em] uppercase transition-opacity hover:opacity-100 cursor-default">
          Toyosu Market
        </span>
<span className="text-sm lg:text-base font-light tracking-[0.25em] uppercase transition-opacity hover:opacity-100 cursor-default">
          Yamazaki
        </span>
<span className="text-sm lg:text-base font-light tracking-[0.25em] uppercase transition-opacity hover:opacity-100 cursor-default">
          JAL Reserve
        </span>
</div>
</section>

<section className="relative border border-[#1a1a1a]/30 bg-[#0b0b0b] text-[#f2f2f2] p-6 lg:p-16 xl:p-20 overflow-hidden group">
<div className="absolute inset-0 bg-[image:repeating-linear-gradient(45deg,rgba(242,242,242,0.03)_0,rgba(242,242,242,0.03)_1px,transparent_1px,transparent_12px)] pointer-events-none z-0"></div>

<div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#f2f2f2]/25 z-10 transition-transform duration-700 group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
<div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#f2f2f2]/25 z-10 transition-transform duration-700 group-hover:translate-x-1 group-hover:-translate-y-1"></div>
<div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#f2f2f2]/25 z-10 transition-transform duration-700 group-hover:-translate-x-1 group-hover:translate-y-1"></div>
<div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#f2f2f2]/25 z-10 transition-transform duration-700 group-hover:translate-x-1 group-hover:translate-y-1"></div>
<div className="relative z-10 grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 items-center">
<div className="aspect-[3/4] border border-[#f2f2f2]/10 p-2 sm:p-4 overflow-hidden relative group/img">
<img alt="Hinoki Wood Counter" className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-[2000ms] group-hover/img:scale-105" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b96c33fc-0491-4d4f-bd30-180cd68292da_1600w.png" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b96c33fc-0491-4d4f-bd30-180cd68292da_1600w.png"/>
</div>
<div className="flex flex-col justify-center">
<p className="text-xs uppercase tracking-[0.18rem] text-[#f2f2f2]/55 mb-6 flex items-center gap-3">
<span className="w-8 h-[1px] bg-[#f2f2f2]/20"></span>
            Philosophy
          </p>
<h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-8" style={{fontFamily: '\'Newsreader\', serif', fontWeight: '300'}}>
            Time as an
            <span className="italic">Ingredient.</span>
</h2>
<div className="flex flex-col gap-6 text-sm sm:text-base leading-relaxed text-[#f2f2f2]/70">
<p>
              Our journey began not with a desire to add, but to strip away.
              Chef Kenji spent two decades in Tokyo mastering the invisible
              variables of sushi: the meticulous aging of fish to break down
              proteins into pure umami, the exact acidity curve of the rice, the
              resting time of the neta before it meets the shari.
            </p>
<p>
              Kinzan is the physical culmination of this obsessive study. A
              space crafted from raw hinoki wood and textured stone—an intimate
              theater where time slows down, allowing the subtle nuances of each
              season to be tasted with absolute, quiet clarity.
            </p>
</div>
<div className="mt-12 pt-8 border-t border-[#f2f2f2]/10">
<p className="text-2xl italic tracking-tight" style={{fontFamily: '\'Newsreader\', serif'}}>
              Kenji Nakamura
            </p>
<p className="text-[10px] uppercase tracking-[0.18rem] text-[#f2f2f2]/40 mt-2 font-medium">
              Head Chef &amp; Founder
            </p>
</div>
</div>
</div>
</section>

<footer className="relative border border-[#1a1a1a]/15 bg-[#f7f1e6] text-[#0b0b0b] p-8 lg:p-16 xl:p-20 overflow-hidden group mt-auto">
<div className="absolute inset-0 bg-[image:repeating-linear-gradient(45deg,rgba(11,11,11,0.03)_0,rgba(11,11,11,0.03)_1px,transparent_1px,transparent_12px)] pointer-events-none z-0"></div>

<div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#0b0b0b]/20 z-10 transition-transform duration-700 group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
<div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#0b0b0b]/20 z-10 transition-transform duration-700 group-hover:translate-x-1 group-hover:-translate-y-1"></div>
<div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#0b0b0b]/20 z-10 transition-transform duration-700 group-hover:-translate-x-1 group-hover:translate-y-1"></div>
<div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#0b0b0b]/20 z-10 transition-transform duration-700 group-hover:translate-x-1 group-hover:translate-y-1"></div>
<div className="relative z-10 grid md:grid-cols-[2fr_1fr_1fr] gap-12 lg:gap-20 border-b border-[#0b0b0b]/10 pb-16 mb-8">
<div className="flex flex-col justify-between">
<div>
<div className="tracking-[0.3em] text-sm sm:text-base uppercase font-medium mb-6 text-[#0b0b0b]/90">
              K I N Z A N
            </div>
<p className="text-sm text-[#0b0b0b]/60 max-w-sm leading-relaxed">
              An intimate omakase experience dedicated to the mastery of Edo-mae
              sushi, the rhythm of the seasons, and the art of stillness.
            </p>
</div>
<div className="mt-12 sm:mt-0">
<a className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18rem] text-[#0b0b0b] border-b border-[#0b0b0b]/30 pb-1 hover:border-[#0b0b0b] transition-colors" href="#reserve">
              Inquire for Booking
              <iconify-icon height="14" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-[10px] uppercase tracking-[0.18rem] text-[#0b0b0b]/45 font-medium mb-2">
            Navigation
          </h4>
<nav className="flex flex-col gap-3 text-xs tracking-widest text-[#0b0b0b]/70">
<a className="hover:text-[#0b0b0b] transition-colors w-fit" href="#features">
              Discipline
            </a>
<a className="hover:text-[#0b0b0b] transition-colors w-fit" href="#omakase">
              Omakase
            </a>
<a className="hover:text-[#0b0b0b] transition-colors w-fit" href="#reserve">
              Reservations
            </a>
<a className="hover:text-[#0b0b0b] transition-colors w-fit" href="#">
              Private Events
            </a>
</nav>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-[10px] uppercase tracking-[0.18rem] text-[#0b0b0b]/45 font-medium mb-2">
            Hours
          </h4>
<div className="text-xs tracking-wider text-[#0b0b0b]/70 flex flex-col gap-3">
<p>Tuesday — Saturday</p>
<p>Lunch: 12:00 PM / 2:00 PM</p>
<p>Dinner: 6:00 PM / 8:30 PM</p>
<p className="text-[#0b0b0b]/40 mt-2">Closed Sunday &amp; Monday</p>
</div>
</div>
</div>
<div className="relative z-10 flex flex-col sm:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.18rem] text-[#0b0b0b]/45 font-medium">
<p>© 2026 Kinzan. All Rights Reserved.</p>
<div className="flex gap-8">
<a className="hover:text-[#0b0b0b] transition-colors" href="#">
            Instagram
          </a>
<a className="hover:text-[#0b0b0b] transition-colors" href="#">
            Privacy Policy
          </a>
<a className="hover:text-[#0b0b0b] transition-colors" href="#">Terms</a>
</div>
</div>
</footer>





    </>
  );
}
