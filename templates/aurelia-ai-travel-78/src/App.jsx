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



          lucide.createIcons({
            attrs: {
              "stroke-width": 1.5
            }
          });

          document.addEventListener("DOMContentLoaded", function () {
            if (window.gsap) {
              gsap.registerPlugin(ScrollTrigger);

              /* SECTION 1 / HERO ANIMATION */
              gsap.to(".hero-word-inner", {
                y: 0,
                duration: 1.15,
                ease: "power4.out",
                stagger: 0.075,
                delay: 0.18
              });

              gsap.to(".hero-accent-reveal", {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                delay: 0.72
              });

              gsap.to(".hero-copy-reveal", {
                opacity: 1,
                y: 0,
                duration: 0.85,
                ease: "power3.out",
                delay: 0.86
              });

              gsap.to(".hero-cta-reveal", {
                opacity: 1,
                y: 0,
                duration: 0.85,
                ease: "power3.out",
                delay: 1.02
              });

              gsap.to(".hero-trust-reveal", {
                opacity: 1,
                y: 0,
                duration: 0.85,
                ease: "power3.out",
                delay: 1.16
              });

              /* SECTION 2 / OUR PROMISE ANIMATION */
      gsap.to(".section-word-inner", {
        y: 0,
        duration: 1.15,
        ease: "power4.out",
        stagger: 0.075,
        scrollTrigger: {
          trigger: ".section-word-inner",
          start: "top 85%"
        }
      });

      gsap.to(".section-reveal", {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".section-reveal",
          start: "top 86%"
        }
      });

      /* SECTION 3 / CURATED DESTINATIONS ANIMATION */
      gsap.to(".destination-word-inner", {
        y: 0,
        duration: 1.15,
        ease: "power4.out",
        stagger: 0.075,
        scrollTrigger: {
          trigger: ".destination-word-inner",
          start: "top 85%"
        }
      });

      gsap.to(".destination-reveal", {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".destination-reveal",
          start: "top 86%"
        }
      });

      /* SECTION 4 / HOW IT WORKS ANIMATION */
      gsap.to(".how-word-inner", {
        y: 0,
        duration: 1.15,
        ease: "power4.out",
        stagger: 0.075,
        scrollTrigger: {
          trigger: ".how-word-inner",
          start: "top 85%"
        }
      });

      gsap.to(".how-reveal", {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".how-reveal",
          start: "top 86%"
        }
      });

      /* SECTION 5 / YOUR JOURNEY ANIMATION */
      gsap.to(".journey-word-inner", {
        y: 0,
        duration: 1.15,
        ease: "power4.out",
        stagger: 0.075,
        scrollTrigger: {
          trigger: ".journey-word-inner",
          start: "top 85%"
        }
      });

      gsap.to(".journey-reveal", {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".journey-reveal",
          start: "top 86%"
        }
      });

      /* SECTION 6 / MEMBERSHIP ANIMATION */
      gsap.to(".membership-word-inner", {
        y: 0,
        duration: 1.15,
        ease: "power4.out",
        stagger: 0.075,
        scrollTrigger: {
          trigger: ".membership-word-inner",
          start: "top 85%"
        }
      });

      gsap.to(".membership-reveal", {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".membership-reveal",
          start: "top 86%"
        }
      });

      // SECTION 7 / FINAL CTA ANIMATION
      gsap.timeline({
        scrollTrigger: {
          trigger: ".cta-word",
          start: "top 82%",
          once: true
        }
      })
      .to(".cta-word-inner", {
        y: "0%",
        duration: 1.05,
        ease: "power4.out",
        stagger: 0.045
      })
      .to(".cta-reveal", {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.08
      }, "-=0.65");

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
      
<main className="relative min-h-screen overflow-hidden bg-[#07162b]">



<section className="relative min-h-screen overflow-hidden bg-[#07162b]">

<div className="absolute inset-0">
<video aria-label="Golden hour Mediterranean coastline with sea cliffs and luxury terrace" className="hero-image h-full w-full object-cover" data-aura-generated-video="true" data-aura-video-preset="play-once" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b68afc6c-e0c1-4c42-9ad5-e249029cd375_3840w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/66a84ecf-0972-40f3-8a4c-15b11d3aee0a/1780012144095-ab0599bc-ae79-4ab5-abe6-8cc021e4fbd4.mp4"></video>

<div className="absolute inset-0 bg-gradient-to-r from-[#fffaf2]/82 via-[#fffaf2]/42 to-transparent"></div>

<div className="absolute inset-0 bg-gradient-to-br from-[#f1d6aa]/22 via-transparent to-[#07162b]/25"></div>

<div className="absolute inset-0 bg-gradient-to-t from-[#07162b]/38 via-transparent to-[#fffaf2]/4"></div>

<div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[#07162b]/50 via-[#07162b]/20 to-transparent"></div>

<div className="absolute inset-y-0 right-0 w-[48%] bg-gradient-to-l from-[#07162b]/34 via-[#07162b]/12 to-transparent"></div>

<div className="pointer-events-none absolute bottom-0 left-0 z-[2] h-[30rem] w-[68%] bg-[radial-gradient(ellipse_at_28%_78%,rgba(247,239,230,0.92)_0%,rgba(247,239,230,0.72)_28%,rgba(247,239,230,0.34)_52%,transparent_76%)]"></div>
</div>

<header className="fixed left-0 right-0 top-0 z-50 border-b border-[#07162b]/10 bg-[#fffaf2]/74 backdrop-blur-xl">
<nav className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-5 py-4 sm:px-8 lg:px-10">

<div className="hidden items-center gap-8 text-[0.82rem] font-semibold tracking-[0.01em] text-[#07162b] lg:flex">
<a className="nav-link transition hover:text-[#8a612d]" href="#">
                Destinations
              </a>
<a className="nav-link transition hover:text-[#8a612d]" href="#">
                Journeys
              </a>
<a className="nav-link transition hover:text-[#8a612d]" href="#">
                How It Works
              </a>
</div>

<a className="block justify-self-start lg:hidden" href="#">
<span className="font-serif-display block text-2xl font-medium uppercase tracking-[0.24em] text-[#07162b]">
                Aurelia
              </span>
</a>

<a className="hidden text-center lg:block" href="#">AI Travel</a>

<div className="hidden items-center justify-end gap-7 text-[0.82rem] font-semibold tracking-[0.01em] text-[#07162b] lg:flex">
<a className="nav-link transition hover:text-[#8a612d]" href="#">
                Membership
              </a>
<a className="nav-link transition hover:text-[#8a612d]" href="#">
                About
              </a>
<a className="transition hover:text-[#8a612d]" href="#">Log in</a>
<a className="inline-flex items-center justify-center rounded-xl bg-[#07162b] px-6 py-3.5 text-[0.82rem] font-semibold text-[#fffaf2] shadow-lg shadow-[#07162b]/15 transition hover:bg-[#10233d]" href="#">
                설렘 시작하기
              </a>
</div>

<button aria-label="Open menu" className="col-start-3 flex h-11 w-11 items-center justify-center justify-self-end rounded-full border border-[#bd8a3c]/34 bg-[#fffaf2]/80 text-[#07162b] lg:hidden">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</nav>
</header>

<div className="hero-shell relative z-10 mx-auto grid min-h-screen max-w-[88rem] grid-cols-1 items-center gap-12 px-5 pb-14 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:grid-cols-12 lg:px-10 lg:pb-14 lg:pt-28">

<div className="max-w-3xl lg:col-span-7 lg:pb-10">

<div className="mb-8 flex items-center gap-3">
              떠나고는 싶지만 일정 짜기는 막막하신가요?
            </div>

<h1 className="hero-title font-serif-display max-w-3xl text-6xl font-medium leading-[1.02] tracking-tight text-[#07162b] sm:text-7xl lg:text-8xl">
<span className="hero-word">
<span className="hero-word-inner">계획은 우리가 할게요,</span>
</span>
<br/>
<span className="hero-word">
<span className="hero-word-inner">당신은 설렘만 가져가세요.</span>
</span>
</h1>
<div className="hero-accent-reveal mt-9 h-1 w-20 rounded-full bg-[#bd8a3c]"></div>
<p className="hero-copy-reveal mt-8 max-w-xl text-lg leading-8 text-[#1f2d41] sm:text-xl">
              포털 검색과 리뷰 지옥에서 벗어나, 오직 여행의 설렘에만
              집중해보세요. 떠나기 전부터 시작되는 어디로 갈지 고르는 첫 순간,
              여행의 설렘을 함께 나눕니다.
            </p>

<div className="hero-cta-reveal mt-10 flex flex-col gap-4 sm:flex-row">
<a className="premium-button group inline-flex h-[58px] items-center justify-center gap-4 rounded-[12px] bg-[#07162b] px-8 text-base font-bold text-[#fffaf2] transition hover:-translate-y-0.5 hover:bg-[#10233d]" href="#">
                설렘 시작하기
                <i className="h-5 w-5 text-[#bd8a3c] transition group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
</div>

<div className="hero-trust-reveal mt-12 grid max-w-[48rem] grid-cols-3 items-center gap-5">
<div className="flex min-w-0 items-center gap-3">
<span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d8c5a3] bg-[#fffaf2] text-[#bd8a3c] shadow-[0_10px_24px_rgba(7,22,43,0.12),inset_0_1px_0_rgba(255,255,255,0.72)]">
<i className="h-5 w-5" data-lucide="key-round"></i>
</span>
<div className="min-w-0">
<p className="truncate whitespace-nowrap text-[0.86rem] font-bold text-[#07162b]">
                    Private Stays
                  </p>
<p className="mt-0.5 truncate whitespace-nowrap text-[0.66rem] font-bold uppercase tracking-[0.14em] text-[#8a612d]">
                    Handpicked
                  </p>
</div>
</div>
<div className="flex min-w-0 items-center gap-3">
<span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d8c5a3] bg-[#fffaf2] text-[#bd8a3c] shadow-[0_10px_24px_rgba(7,22,43,0.12),inset_0_1px_0_rgba(255,255,255,0.72)]">
<i className="h-5 w-5" data-lucide="sparkles"></i>
</span>
<div className="min-w-0">
<p className="truncate whitespace-nowrap text-[0.86rem] font-bold text-[#07162b]">
                    Smart Itineraries
                  </p>
<p className="mt-0.5 truncate whitespace-nowrap text-[0.66rem] font-bold uppercase tracking-[0.14em] text-[#8a612d]">
                    AI-assisted
                  </p>
</div>
</div>
<div className="flex min-w-0 items-center gap-3">
<span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d8c5a3] bg-[#fffaf2] text-[#bd8a3c] shadow-[0_10px_24px_rgba(7,22,43,0.12),inset_0_1px_0_rgba(255,255,255,0.72)]">
<i className="h-5 w-5" data-lucide="headphones"></i>
</span>
<div className="min-w-0">
<p className="truncate whitespace-nowrap text-[0.86rem] font-bold text-[#07162b]">
                    Concierge Support
                  </p>
<p className="mt-0.5 truncate whitespace-nowrap text-[0.66rem] font-bold uppercase tracking-[0.14em] text-[#8a612d]">
                    Human refined
                  </p>
</div>
</div>
</div>
</div>

<div className="relative lg:col-span-5">
<div className="relative mx-auto flex w-full max-w-[38.75rem] flex-col gap-5 lg:translate-x-4">

<div className="premium-panel w-full overflow-hidden rounded-[1.35rem]">
<div className="p-5 pb-3 sm:p-6 sm:pb-3">
<div className="flex items-start justify-between gap-4">
<div className="flex items-center gap-4">
<img alt="Amalfi Coast" className="h-16 w-16 rounded-full object-cover ring-1 ring-[#bd8a3c]/35 shadow-[0_10px_22px_rgba(7,22,43,0.12)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df941c56-7c71-432a-841f-0103fd695dbb_320w.png"/>
<div>
<h2 className="font-serif-display text-2xl font-medium tracking-tight text-[#07162b]">
                          7-Day Amalfi Escape
                        </h2>
<p className="mt-1 flex items-center gap-2 text-sm font-medium text-[#526071]">
<i className="h-4 w-4 text-[#bd8a3c]" data-lucide="map-pin"></i>
                          Amalfi Coast, Italy
                        </p>
</div>
</div>
<button aria-label="More itinerary options" className="mt-1 text-[#07162b]">
<i className="h-5 w-5" data-lucide="ellipsis"></i>
</button>
</div>
<div className="mt-6 space-y-0">
<div className="grid grid-cols-[1.8rem_4rem_1fr_1.5rem] items-center border-b border-[#d1c4b7] py-2.5 text-sm">
<div className="relative flex justify-center">
<span className="h-2 w-2 rounded-full bg-[#bd8a3c]"></span>
<span className="absolute top-2 h-[2.05rem] w-px bg-[#bd8a3c]/45"></span>
</div>
<span className="font-medium text-[#526071]">Day 1</span>
<span className="font-bold text-[#2b3748]">
                        Positano Arrival
                      </span>
<i className="h-4 w-4 text-[#8a612d]" data-lucide="bed-double"></i>
</div>
<div className="grid grid-cols-[1.8rem_4rem_1fr_1.5rem] items-center border-b border-[#d1c4b7] py-2.5 text-sm">
<div className="relative flex justify-center">
<span className="h-2 w-2 rounded-full bg-[#bd8a3c]"></span>
<span className="absolute top-2 h-[2.05rem] w-px bg-[#bd8a3c]/45"></span>
</div>
<span className="font-medium text-[#526071]">Day 2</span>
<span className="font-bold text-[#2b3748]">
                        Amalfi &amp; Atrani
                      </span>
<i className="h-4 w-4 text-[#8a612d]" data-lucide="sailboat"></i>
</div>
<div className="grid grid-cols-[1.8rem_4rem_1fr_1.5rem] items-center border-b border-[#d1c4b7] py-2.5 text-sm">
<div className="relative flex justify-center">
<span className="h-2 w-2 rounded-full bg-[#bd8a3c]"></span>
<span className="absolute top-2 h-[2.05rem] w-px bg-[#bd8a3c]/45"></span>
</div>
<span className="font-medium text-[#526071]">Day 3</span>
<span className="font-bold text-[#2b3748]">
                        Ravello Villa Lunch
                      </span>
<i className="h-4 w-4 text-[#8a612d]" data-lucide="landmark"></i>
</div>
<div className="grid grid-cols-[1.8rem_4rem_1fr_1.5rem] items-center border-b border-[#d1c4b7] py-2.5 text-sm">
<div className="relative flex justify-center">
<span className="h-2 w-2 rounded-full bg-[#bd8a3c]"></span>
<span className="absolute top-2 h-[2.05rem] w-px bg-[#bd8a3c]/45"></span>
</div>
<span className="font-medium text-[#526071]">Day 4</span>
<span className="font-bold text-[#2b3748]">
                        Capri by Private Boat
                      </span>
<i className="h-4 w-4 text-[#8a612d]" data-lucide="ship"></i>
</div>
<div className="grid grid-cols-[1.8rem_4rem_1fr_1.5rem] items-center border-b border-[#d1c4b7] py-2.5 text-sm">
<div className="relative flex justify-center">
<span className="h-2 w-2 rounded-full bg-[#bd8a3c]"></span>
<span className="absolute top-2 h-[2.05rem] w-px bg-[#bd8a3c]/45"></span>
</div>
<span className="font-medium text-[#526071]">Day 5</span>
<span className="font-bold text-[#2b3748]">
                        Praiano Leisure Day
                      </span>
<i className="h-4 w-4 text-[#8a612d]" data-lucide="umbrella"></i>
</div>
<div className="grid grid-cols-[1.8rem_4rem_1fr_1.5rem] items-center py-2.5 text-sm">
<div className="flex justify-center">
<span className="h-2 w-2 rounded-full bg-[#bd8a3c]"></span>
</div>
<span className="font-medium text-[#526071]">Day 6</span>
<span className="font-bold text-[#2b3748]">
                        Lemon Grove Dinner
                      </span>
<i className="h-4 w-4 text-[#8a612d]" data-lucide="leaf"></i>
</div>
</div>
</div>
<a className="flex items-center justify-between border-t border-[#d1c4b7] bg-[#f7efe6] px-5 py-4 text-sm font-bold text-[#253449] shadow-[inset_0_1px_0_rgba(255,255,255,0.58)] transition hover:bg-[#fbf4ec] sm:px-6" href="#">
                  View full itinerary
                  <i className="h-5 w-5 text-[#bd8a3c]" data-lucide="arrow-right"></i>
</a>
</div>

<div className="w-full rounded-[1.35rem] bg-[#07162b] p-5 text-[#fffaf2] shadow-[0_30px_82px_rgba(7,22,43,0.34),inset_0_1px_0_rgba(255,255,255,0.08)]">
<div className="flex items-center justify-between">
<p className="text-xs font-bold uppercase tracking-[0.20em] text-[#d6ad68]">
                    Your Preferences
                  </p>
<button className="text-xs font-bold text-[#d6ad68]">Edit</button>
</div>
<div className="mt-4 grid grid-cols-3 gap-2.5">
<span className="inline-flex min-w-0 items-center justify-center gap-2 rounded-[10px] bg-[#10233d] px-3 py-3 text-xs font-bold text-[#fffaf2] shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]">
<i className="h-4 w-4 shrink-0 text-[#d6ad68]" data-lucide="gem"></i>
<span className="truncate whitespace-nowrap">Quiet luxury</span>
</span>
<span className="inline-flex min-w-0 items-center justify-center gap-2 rounded-[10px] bg-[#10233d] px-3 py-3 text-xs font-bold text-[#fffaf2] shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]">
<i className="h-4 w-4 shrink-0 text-[#d6ad68]" data-lucide="waves"></i>
<span className="truncate whitespace-nowrap">Coastal</span>
</span>
<span className="inline-flex min-w-0 items-center justify-center gap-2 rounded-[10px] bg-[#10233d] px-3 py-3 text-xs font-bold text-[#fffaf2] shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]">
<i className="h-4 w-4 shrink-0 text-[#d6ad68]" data-lucide="car"></i>
<span className="truncate whitespace-nowrap">
                      Private transfer
                    </span>
</span>
</div>
</div>

<div className="premium-panel w-full overflow-hidden rounded-[1.35rem] p-0">
<div className="grid grid-cols-1 sm:grid-cols-[9rem_1fr]">

<div className="relative min-h-[10rem] overflow-hidden sm:min-h-full">
<img alt="Journey visual placeholder" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/012c0562-9f4b-4672-aed3-d6b794a79360_320w.png"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#07162b]/28 via-transparent to-[#fffaf2]/8"></div>

<span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#07162b] ring-4 ring-[#fffaf2]"></span>
</div>

<div className="min-w-0 p-5 sm:p-6">
<div className="flex items-start justify-between gap-4">
<div className="min-w-0">
<h3 className="font-serif-display text-2xl font-medium leading-none tracking-tight text-[#07162b]">
                          Your Journey
                        </h3>
<p className="mt-2 whitespace-nowrap text-sm font-medium text-[#526071]">
                          May 24 – May 30, 2025 · 2 Adults
                        </p>
</div>
<a className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-xs font-bold text-[#9d7337]" href="#">
                        View Details
                        <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="mt-7 flex items-center gap-3">
<i className="h-5 w-5 shrink-0 text-[#bd8a3c]" data-lucide="plane"></i>
<div className="relative flex h-6 flex-1 items-center">
<div className="absolute left-[5px] right-[5px] top-1/2 h-[2px] -translate-y-1/2 bg-[#bd8a3c]/70"></div>
<div className="relative z-10 flex w-full items-center justify-between">
<span className="h-2.5 w-2.5 rounded-full bg-[#bd8a3c] shadow-[0_0_0_4px_#eee5da]"></span>
<span className="h-2.5 w-2.5 rounded-full bg-[#bd8a3c] shadow-[0_0_0_4px_#eee5da]"></span>
<span className="h-2.5 w-2.5 rounded-full bg-[#bd8a3c] shadow-[0_0_0_4px_#eee5da]"></span>
<span className="h-2.5 w-2.5 rounded-full bg-[#bd8a3c] shadow-[0_0_0_4px_#eee5da]"></span>
</div>
</div>
<i className="h-5 w-5 shrink-0 text-[#8a612d]" data-lucide="car"></i>
</div>
<div className="mt-4 grid grid-cols-4 gap-3 text-center text-xs text-[#526071]">
<div className="min-w-0">
<span className="block truncate font-bold text-[#07162b]">
                          Positano
                        </span>
<span className="block whitespace-nowrap">2 Nights</span>
</div>
<div className="min-w-0">
<span className="block truncate font-bold text-[#07162b]">
                          Ravello
                        </span>
<span className="block whitespace-nowrap">2 Nights</span>
</div>
<div className="min-w-0">
<span className="block truncate font-bold text-[#07162b]">
                          Capri
                        </span>
<span className="block whitespace-nowrap">1 Night</span>
</div>
<div className="min-w-0">
<span className="block truncate font-bold text-[#07162b]">
                          Praiano
                        </span>
<span className="block whitespace-nowrap">2 Nights</span>
</div>
</div>
</div>
</div>
</div>

</div>
</div>
</div>
</section>



<section className="relative z-20 bg-[#f7efe6] px-5 pb-24 pt-24 sm:px-8 lg:px-10">

<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_0%,rgba(189,138,60,0.055),transparent_30rem),radial-gradient(circle_at_88%_24%,rgba(7,22,43,0.025),transparent_28rem)]"></div>

<div className="pointer-events-none absolute inset-x-0 bottom-0 h-[18rem] bg-gradient-to-t from-[#fffaf2] via-[#fffaf2]/72 to-transparent"></div>

<div className="pointer-events-none absolute bottom-[-4rem] right-0 h-[24rem] w-[55%] bg-[radial-gradient(ellipse_at_70%_65%,rgba(255,250,242,0.82)_0%,rgba(255,250,242,0.46)_38%,transparent_72%)]"></div>
<div className="relative mx-auto max-w-[88rem]">
<div className="relative mx-auto max-w-[88rem]">

<div className="overflow-hidden rounded-[1.25rem] border border-[#d8c5a3] bg-[#fffaf2] shadow-[0_48px_130px_rgba(7,22,43,0.18),inset_0_1px_0_rgba(255,255,255,0.78)]">
<div className="grid min-h-[48rem] grid-cols-1 lg:grid-cols-[1.08fr_0.92fr]">


<div className="relative min-h-[42rem] overflow-hidden lg:min-h-full">
<img alt="Luxury breakfast terrace overlooking the Amalfi Coast" className="absolute inset-0 h-full w-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df941c56-7c71-432a-841f-0103fd695dbb_1600w.png"/>

<div className="absolute inset-0 bg-gradient-to-l from-[#07162b]/10 via-transparent to-[#fffaf2]/16"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#07162b]/24 via-transparent to-[#f1d6aa]/12"></div>

<div className="absolute left-1/2 top-10 w-[calc(100%-3rem)] max-w-[22rem] -translate-x-1/2 rounded-[1.15rem] border border-[#d8c5a3] bg-[#eee5da] p-5 shadow-[0_30px_82px_rgba(7,22,43,0.24),inset_0_1px_0_rgba(255,255,255,0.68)] sm:p-6 lg:left-auto lg:right-8 lg:top-10 lg:w-[22rem] lg:translate-x-0">
                    “ Less searching. More belonging. ”
                  </div>

<div className="absolute bottom-8 left-1/2 w-[78%] max-w-[22rem] -translate-x-1/2 rotate-[-3deg] sm:bottom-10 sm:w-[22rem] lg:bottom-12 lg:left-auto lg:right-8 lg:w-[20.5rem] lg:translate-x-0">
<img alt="Aurelia passport memory" className="h-auto w-full object-contain drop-shadow-[0_28px_70px_rgba(7,22,43,0.24)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0f4798ae-e81c-4799-b9f4-ad93ba22ef9a_1600w.png"/>
</div>
</div>
</div>
</div>

<div className="mx-auto h-10 max-w-5xl rounded-full bg-[#07162b]/10 blur-2xl"></div>
</div>
</div>
</section>



<section className="relative z-10 bg-[#fffaf2] px-5 py-24 sm:px-8 lg:px-10">

<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(189,138,60,0.08),transparent_32rem),radial-gradient(circle_at_86%_18%,rgba(7,22,43,0.045),transparent_30rem)]"></div>
<div className="relative mx-auto max-w-[88rem]">

<div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.76fr_1.24fr] lg:items-end">

<div className="lg:pt-8">
              바쁜 직장인, 선택 장애를 겪는 여행자, 개성 있는 여정을 원하는
              분들을 위해 준비했습니다.
            </div>

<div className="destination-reveal grid grid-cols-1 gap-5 md:grid-cols-[1.55fr_0.95fr] lg:self-end">

<article className="group relative h-[24rem] overflow-hidden rounded-[1.15rem] border border-[#d8c5a3] shadow-[0_30px_80px_rgba(7,22,43,0.18)]">
<img alt="Amalfi Coast" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b0da3c0a-192a-4c59-8d1d-61414367ed5d_1600w.png"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#020713]/92 via-[#07162b]/34 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-br from-[#f1d6aa]/18 via-transparent to-transparent"></div>
<div className="absolute left-6 top-6">
<span className="rounded-md bg-[#bd8a3c] px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#fffaf2] shadow-[0_12px_30px_rgba(7,22,43,0.2)]">
                    Featured
                  </span>
</div>

<button aria-label="Save Amalfi Coast" className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#fffaf2]/40 bg-[#07162b]/28 text-[#ef4b4b] backdrop-blur-md transition hover:bg-[#07162b]/46">
<i className="h-5 w-5 fill-current" data-lucide="heart"></i>
</button>
<div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
<h3 className="font-serif-display text-4xl font-medium leading-[0.92] tracking-tight text-[#fffaf2]">
                    바쁜 직장인
                  </h3>
<div className="mt-3 flex flex-col gap-1.5 text-[0.82rem] font-semibold leading-tight text-[#fffaf2] sm:text-sm">
<span className="whitespace-nowrap text-[#fffaf2]/90">
                      여행은 가고 싶지만, 퇴근 후 맛집과 숙소를 검색하며
                      에너지를 쏟을 시간이 부족함
                    </span>
</div>
</div>
</article>

<article className="group relative h-[24rem] overflow-hidden rounded-[1.15rem] border border-[#d8c5a3] shadow-[0_30px_80px_rgba(7,22,43,0.16)]">
<img alt="Kyoto" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9019d6c5-f4ff-4724-a555-4011885eb5aa_800w.png"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#020713]/92 via-[#07162b]/36 to-transparent"></div>
<button aria-label="Save Kyoto" className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#fffaf2]/40 bg-[#07162b]/28 text-[#fffaf2] backdrop-blur-md transition hover:bg-[#07162b]/46">
<i className="h-5 w-5" data-lucide="heart"></i>
</button>
<div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
<h3 className="font-serif-display text-4xl font-medium leading-[0.92] tracking-tight text-[#fffaf2]">
                    선택 장애를 겪는 여행자
                  </h3>
<div className="mt-3 flex flex-col gap-1.5 text-[0.82rem] font-semibold leading-tight text-[#fffaf2] sm:text-sm">
<span className="whitespace-nowrap text-[#fffaf2]/90">
                      넘쳐나는 광고성 정보와 수많은 리뷰 속에서 진짜 가야 할
                      곳을 고르기가 피로함
                    </span>
</div>
</div>
</article>
</div>
</div>

<div className="destination-reveal mt-5 grid grid-cols-1 gap-5 md:grid-cols-1">

<article className="group relative h-[19rem] overflow-hidden rounded-[1.15rem] border border-[#d8c5a3] shadow-[0_26px_70px_rgba(7,22,43,0.16)]">
<img alt="Marrakech" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6cbcb68f-c73d-4f4c-b0bc-258fe87a09f4_1600w.png"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#020713]/92 via-[#07162b]/34 to-transparent"></div>
<button aria-label="Save Marrakech" className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#fffaf2]/40 bg-[#07162b]/28 text-[#fffaf2] backdrop-blur-md transition hover:bg-[#07162b]/46">
<i className="h-5 w-5" data-lucide="heart"></i>
</button>
<div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
<h3 className="font-serif-display text-4xl font-medium leading-[0.92] tracking-tight text-[#fffaf2]">
                  개성 있는 여정을 원하는 분
                </h3>
<div className="mt-3 flex flex-col gap-1.5 text-[0.82rem] font-semibold leading-tight text-[#fffaf2] sm:text-sm">
<span className="whitespace-nowrap text-[#fffaf2]/90">
                    흔한 패키지나 뻔한 추천 코스가 아니라, 내 취향이 온전히
                    반영된 하루를 보내고 싶음
                  </span>
</div>
</div>
</article>


<article className="group relative h-[19rem] overflow-hidden rounded-[1.15rem] border border-[#d8c5a3] shadow-[0_26px_70px_rgba(7,22,43,0.16)]">
<img alt="St. Barth" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6a7c6073-fa3d-4dd2-a0af-6273aa023a14_1600w.png"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#020713]/92 via-[#07162b]/30 to-transparent"></div>
<button aria-label="Save St. Barth" className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#fffaf2]/40 bg-[#07162b]/28 text-[#fffaf2] backdrop-blur-md transition hover:bg-[#07162b]/46">
<i className="h-5 w-5" data-lucide="heart"></i>
</button>
<div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
<h3 className="font-serif-display text-4xl font-medium leading-[0.92] tracking-tight text-[#fffaf2]">
                  St. Barth
                </h3>
<div className="mt-3 flex flex-col gap-1.5 text-[0.82rem] font-semibold leading-tight text-[#fffaf2] sm:text-sm">
<span className="inline-flex items-center gap-2">
<i className="h-4 w-4 text-[#d6ad68]" data-lucide="home"></i>
                    Private villas
                  </span>
<span className="whitespace-nowrap text-[#fffaf2]/90">
                    Beaches
                    <span className="mx-1.5 text-[#fffaf2]/55">•</span>
                    Yachts
                    <span className="mx-1.5 text-[#fffaf2]/55">•</span>
                    Fine dining
                  </span>
</div>
</div>
</article>
</div>
</div>
</section>



<section className="relative z-10 bg-[#fffaf2] px-5 py-24 sm:px-8 lg:px-10">

<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(189,138,60,0.075),transparent_34rem),radial-gradient(circle_at_84%_28%,rgba(7,22,43,0.04),transparent_32rem)]"></div>
<div className="relative mx-auto max-w-[88rem]">


<div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-4">

<article className="how-reveal relative">
<div className="mb-7 flex items-center gap-4">
<span className="font-serif-display text-2xl font-semibold text-[#9d7337]">
                  01
                </span>
<span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#d8c5a3] bg-[#fffaf2] text-[#07162b] shadow-[0_16px_40px_rgba(7,22,43,0.08),inset_0_1px_0_rgba(255,255,255,0.8)]">
<i className="h-6 w-6" data-lucide="user-round"></i>
</span>
<span className="hidden shrink-0 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#9d7337] lg:inline-flex">
                  Profile
                </span>
<div className="hidden h-px flex-1 bg-[#bd8a3c]/45 lg:block"></div>
<i className="hidden h-6 w-6 shrink-0 text-[#bd8a3c] lg:block" data-lucide="arrow-right"></i>
</div>
<div className="px-0 sm:px-1">
<h3 className="font-serif-display text-2xl font-medium leading-none text-[#07162b]">
                  Share Your Preferences
                </h3>
<p className="mt-4 max-w-xs text-sm leading-6 text-[#526071]">
                  Tell us what you love — your travel style, interests, pace,
                  and must-haves.
                </p>
</div>

<div className="mt-8 rounded-[1.15rem] border border-[#d8c5a3] bg-[#fffaf2] p-5 shadow-[0_24px_70px_rgba(7,22,43,0.10),inset_0_1px_0_rgba(255,255,255,0.78)]">
<h4 className="font-serif-display text-lg font-medium text-[#07162b]">
                  Your Preferences
                </h4>
<div className="mt-5 space-y-4">
<div>
<label className="text-[0.68rem] font-bold text-[#526071]">
                      Travel Style
                    </label>
<div className="mt-2 flex items-center justify-between rounded-md border border-[#d8c5a3]/70 bg-[#fffaf2] px-3 py-2 text-xs font-semibold text-[#07162b]">
                      Culture &amp; Relaxation
                      <i className="h-3.5 w-3.5 text-[#9d7337]" data-lucide="chevron-down"></i>
</div>
</div>
<div>
<label className="text-[0.68rem] font-bold text-[#526071]">
                      Interests
                    </label>
<div className="mt-2 flex flex-wrap gap-2">
<span className="rounded-md bg-[#eee5da] px-3 py-1.5 text-[0.7rem] font-bold text-[#526071]">
                        Art &amp; Design
                      </span>
<span className="rounded-md bg-[#eee5da] px-3 py-1.5 text-[0.7rem] font-bold text-[#526071]">
                        Local Cuisine
                      </span>
<span className="rounded-md bg-[#eee5da] px-3 py-1.5 text-[0.7rem] font-bold text-[#526071]">
                        Wellness
                      </span>
<span className="rounded-md bg-[#eee5da] px-3 py-1.5 text-[0.7rem] font-bold text-[#526071]">
                        History
                      </span>
<span className="rounded-md bg-[#eee5da] px-3 py-1.5 text-[0.7rem] font-bold text-[#526071]">
                        Nature
                      </span>
<span className="rounded-md bg-[#eee5da] px-3 py-1.5 text-[0.7rem] font-bold text-[#526071]">
                        Architecture
                      </span>
</div>
</div>
<div>
<label className="text-[0.68rem] font-bold text-[#526071]">
                      Pace
                    </label>
<div className="mt-3">
<div className="relative h-px bg-[#d8c5a3]">
<div className="absolute left-0 top-1/2 h-px w-[54%] -translate-y-1/2 bg-[#bd8a3c]"></div>
<span className="absolute left-[54%] top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#bd8a3c] shadow-[0_0_0_4px_#fffaf2]"></span>
</div>
<div className="mt-2 flex justify-between text-[0.65rem] font-semibold text-[#526071]">
<span>Relaxed</span>
<span>Active</span>
</div>
</div>
</div>
<div>
<label className="text-[0.68rem] font-bold text-[#526071]">
                      Must-haves
                    </label>
<div className="mt-2 min-h-[4.75rem] rounded-md border border-[#d8c5a3]/70 bg-[#fffaf2] p-3 text-xs leading-5 text-[#526071]">
                      Sea view, boutique hotels, authentic local experiences
                    </div>
</div>
<button className="mt-2 w-full rounded-md bg-[#07162b] px-4 py-3 text-xs font-bold text-[#fffaf2] shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]">
                    Save Preferences
                  </button>
</div>
</div>
</article>

<article className="how-reveal relative">
<div className="mb-7 flex items-center gap-4">
<span className="font-serif-display text-2xl font-semibold text-[#9d7337]">
                  02
                </span>
<span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#d8c5a3] bg-[#fffaf2] text-[#07162b] shadow-[0_16px_40px_rgba(7,22,43,0.08),inset_0_1px_0_rgba(255,255,255,0.8)]">
<i className="h-6 w-6" data-lucide="sparkles"></i>
</span>
<span className="hidden shrink-0 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#9d7337] lg:inline-flex">
                  Match
                </span>
<div className="hidden h-px flex-1 bg-[#bd8a3c]/45 lg:block"></div>
<i className="hidden h-6 w-6 shrink-0 text-[#bd8a3c] lg:block" data-lucide="arrow-right"></i>
</div>
<div className="px-0 sm:px-1">
<h3 className="font-serif-display text-2xl font-medium leading-none text-[#07162b]">
                  Explore Smart Matches
                </h3>
<p className="mt-4 max-w-xs text-sm leading-6 text-[#526071]">
                  We curate destinations and experiences that align with your
                  unique taste.
                </p>
</div>

<div className="mt-8 rounded-[1.15rem] border border-[#d8c5a3] bg-[#fffaf2] p-5 shadow-[0_24px_70px_rgba(7,22,43,0.10),inset_0_1px_0_rgba(255,255,255,0.78)]">
<div className="flex items-center justify-between">
<h4 className="font-serif-display text-lg font-medium text-[#07162b]">
                    Smart Matches for You
                  </h4>
<button className="inline-flex items-center gap-1 text-[0.65rem] font-bold text-[#526071]">
                    Why these?
                    <i className="h-3.5 w-3.5" data-lucide="info"></i>
</button>
</div>
<div className="mt-5 space-y-3">
<div className="grid grid-cols-[7rem_1fr_auto] items-center gap-3 rounded-lg border border-[#d8c5a3]/70 bg-[#fffaf2] p-2.5">
<img alt="Amalfi Coast" className="h-16 w-full rounded-md object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/36307d9e-9da6-4d74-b1fa-3b70af0f5188_320w.png"/>
<div className="min-w-0">
<h5 className="truncate text-sm font-bold text-[#07162b]">
                        Amalfi Coast, Italy
                      </h5>
<p className="mt-1 truncate text-[0.68rem] font-semibold text-[#526071]">
                        Seaside elegance, culture &amp; cuisine
                      </p>
<p className="mt-1 text-[0.68rem] font-bold text-[#9d7337]">
                        98% Match
                      </p>
</div>
<i className="h-4 w-4 text-[#9d7337]" data-lucide="arrow-right"></i>
</div>
<div className="grid grid-cols-[7rem_1fr_auto] items-center gap-3 rounded-lg border border-[#d8c5a3]/70 bg-[#fffaf2] p-2.5">
<img alt="Kyoto" className="h-16 w-full rounded-md object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7fdf3678-12d8-4f40-b14d-e3b66a9bd67e_320w.png"/>
<div className="min-w-0">
<h5 className="truncate text-sm font-bold text-[#07162b]">
                        Kyoto, Japan
                      </h5>
<p className="mt-1 truncate text-[0.68rem] font-semibold text-[#526071]">
                        Timeless culture, serene moments
                      </p>
<p className="mt-1 text-[0.68rem] font-bold text-[#9d7337]">
                        95% Match
                      </p>
</div>
<i className="h-4 w-4 text-[#9d7337]" data-lucide="arrow-right"></i>
</div>
<div className="grid grid-cols-[7rem_1fr_auto] items-center gap-3 rounded-lg border border-[#d8c5a3]/70 bg-[#fffaf2] p-2.5">
<img alt="Cote d'Azur" className="h-16 w-full rounded-md object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1f7782df-1dad-4435-8807-8ff8cf835b9f_320w.png"/>
<div className="min-w-0">
<h5 className="truncate text-sm font-bold text-[#07162b]">
                        Côte d’Azur, France
                      </h5>
<p className="mt-1 truncate text-[0.68rem] font-semibold text-[#526071]">
                        Art, luxury &amp; Riviera charm
                      </p>
<p className="mt-1 text-[0.68rem] font-bold text-[#9d7337]">
                        93% Match
                      </p>
</div>
<i className="h-4 w-4 text-[#9d7337]" data-lucide="arrow-right"></i>
</div>
<div className="grid grid-cols-[7rem_1fr_auto] items-center gap-3 rounded-lg border border-[#d8c5a3]/70 bg-[#fffaf2] p-2.5">
<img alt="Lake Como" className="h-16 w-full rounded-md object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bacbf091-ee10-40e7-9a2e-51f858f213b5_320w.png"/>
<div className="min-w-0">
<h5 className="truncate text-sm font-bold text-[#07162b]">
                        Lake Como, Italy
                      </h5>
<p className="mt-1 truncate text-[0.68rem] font-semibold text-[#526071]">
                        Villas, lake views &amp; slow mornings
                      </p>
<p className="mt-1 text-[0.68rem] font-bold text-[#9d7337]">
                        91% Match
                      </p>
</div>
<i className="h-4 w-4 text-[#9d7337]" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</article>

<article className="how-reveal relative">
<div className="mb-7 flex items-center gap-4">
<span className="font-serif-display text-2xl font-semibold text-[#9d7337]">
                  03
                </span>
<span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#d8c5a3] bg-[#fffaf2] text-[#07162b] shadow-[0_16px_40px_rgba(7,22,43,0.08),inset_0_1px_0_rgba(255,255,255,0.8)]">
<i className="h-6 w-6" data-lucide="map"></i>
</span>
<span className="hidden shrink-0 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#9d7337] lg:inline-flex">
                  Refine
                </span>
<div className="hidden h-px flex-1 bg-[#bd8a3c]/45 lg:block"></div>
<i className="hidden h-6 w-6 shrink-0 text-[#bd8a3c] lg:block" data-lucide="arrow-right"></i>
</div>
<div className="px-0 sm:px-1">
<h3 className="font-serif-display text-2xl font-medium leading-none text-[#07162b]">
                  Refine Your Journey
                </h3>
<p className="mt-4 max-w-xs text-sm leading-6 text-[#526071]">
                  Customize your itinerary with an intuitive builder — drag,
                  drop, and perfect the details.
                </p>
</div>

<div className="mt-8 rounded-[1.15rem] border border-[#d8c5a3] bg-[#fffaf2] p-5 shadow-[0_24px_70px_rgba(7,22,43,0.10),inset_0_1px_0_rgba(255,255,255,0.78)]">
<div className="flex items-center justify-between">
<h4 className="font-serif-display text-lg font-medium text-[#07162b]">
                    Your Itinerary
                  </h4>
<div className="flex gap-2">
<button className="rounded-md bg-[#eee5da] px-2.5 py-1.5 text-[0.62rem] font-bold text-[#526071]">
                      Add Day
                    </button>
<button className="rounded-md bg-[#eee5da] px-2.5 py-1.5 text-[0.62rem] font-bold text-[#526071]">
                      Optimize Route
                    </button>
</div>
</div>
<div className="mt-5 space-y-3">
<div className="grid grid-cols-[2.7rem_1fr_1rem] items-center gap-3">
<span className="text-[0.7rem] font-bold text-[#526071]">
                      Day 1
                    </span>
<div className="grid min-w-0 grid-cols-[3.5rem_1fr] items-center gap-3 rounded-lg border border-[#d8c5a3]/70 bg-[#fffaf2] p-2">
<img alt="Arrival" className="h-11 w-14 rounded-md object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/73ef8445-0771-4ce8-a3d1-8c6683ea178b_320w.png"/>
<div className="min-w-0">
<p className="truncate text-xs font-bold text-[#07162b]">
                          Arrival in Positano
                        </p>
<p className="truncate text-[0.65rem] font-semibold text-[#526071]">
                          Private transfer · Seaside stay
                        </p>
</div>
</div>
<i className="h-4 w-4 justify-self-center text-[#9d7337]" data-lucide="grip-vertical"></i>
</div>
<div className="grid grid-cols-[2.7rem_1fr_1rem] items-center gap-3">
<span className="text-[0.7rem] font-bold text-[#526071]">
                      Day 2
                    </span>
<div className="grid min-w-0 grid-cols-[3.5rem_1fr] items-center gap-3 rounded-lg border border-[#d8c5a3]/70 bg-[#fffaf2] p-2">
<img alt="Amalfi" className="h-11 w-14 rounded-md object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3d7a0ef5-935d-4241-973e-3cef35682ea7_320w.png"/>
<div className="min-w-0">
<p className="truncate text-xs font-bold text-[#07162b]">
                          Amalfi &amp; Atrani
                        </p>
<p className="truncate text-[0.65rem] font-semibold text-[#526071]">
                          Guided walking tour · Lunch by the sea
                        </p>
</div>
</div>
<i className="h-4 w-4 justify-self-center text-[#9d7337]" data-lucide="grip-vertical"></i>
</div>
<div className="grid grid-cols-[2.7rem_1fr_1rem] items-center gap-3">
<span className="text-[0.7rem] font-bold text-[#526071]">
                      Day 3
                    </span>
<div className="grid min-w-0 grid-cols-[3.5rem_1fr] items-center gap-3 rounded-lg border border-[#d8c5a3]/70 bg-[#fffaf2] p-2">
<img alt="Ravello" className="h-11 w-14 rounded-md object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2aaf56f5-8d16-4a71-84a2-ebe02d37db23_320w.png"/>
<div className="min-w-0">
<p className="truncate text-xs font-bold text-[#07162b]">
                          Ravello &amp; Villa Cimbrone
                        </p>
<p className="truncate text-[0.65rem] font-semibold text-[#526071]">
                          Gardens · Sunset aperitivo
                        </p>
</div>
</div>
<i className="h-4 w-4 justify-self-center text-[#9d7337]" data-lucide="grip-vertical"></i>
</div>
<div className="grid grid-cols-[2.7rem_1fr_1rem] items-center gap-3">
<span className="text-[0.7rem] font-bold text-[#526071]">
                      Day 4
                    </span>
<div className="grid min-w-0 grid-cols-[3.5rem_1fr] items-center gap-3 rounded-lg border border-[#d8c5a3]/70 bg-[#fffaf2] p-2">
<img alt="Capri" className="h-11 w-14 rounded-md object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a707d53e-3283-424d-be2e-d2885f3be2c0_320w.png"/>
<div className="min-w-0">
<p className="truncate text-xs font-bold text-[#07162b]">
                          Capri by Private Boat
                        </p>
<p className="truncate text-[0.65rem] font-semibold text-[#526071]">
                          Blue Grotto · Leisure time
                        </p>
</div>
</div>
<i className="h-4 w-4 justify-self-center text-[#9d7337]" data-lucide="grip-vertical"></i>
</div>
<div className="grid grid-cols-[2.7rem_1fr_1rem] items-center gap-3">
<span className="text-[0.7rem] font-bold text-[#526071]">
                      Day 5
                    </span>
<div className="grid min-w-0 grid-cols-[3.5rem_1fr] items-center gap-3 rounded-lg border border-[#d8c5a3]/70 bg-[#fffaf2] p-2">
<img alt="Praiano" className="h-11 w-14 rounded-md object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c1282f76-7939-4f18-a9dc-ac4d2cd92920_320w.png"/>
<div className="min-w-0">
<p className="truncate text-xs font-bold text-[#07162b]">
                          Praiano Leisure Day
                        </p>
<p className="truncate text-[0.65rem] font-semibold text-[#526071]">
                          Wellness · Beach · Local market
                        </p>
</div>
</div>
<i className="h-4 w-4 justify-self-center text-[#9d7337]" data-lucide="grip-vertical"></i>
</div>
<div className="grid grid-cols-[2.7rem_1fr_1rem] items-center gap-3">
<span></span>
<div className="relative mt-1 rounded-lg border border-dashed border-[#d8c5a3] bg-[#fffaf2]/72 p-3 text-center text-xs font-bold text-[#8a612d]">
                      + Drag experience here
                    </div>
<span></span>
</div>
</div>

<div className="pointer-events-none absolute hidden translate-x-[13rem] translate-y-[-4.4rem] rounded-xl border border-[#d8c5a3] bg-[#fffaf2] p-3 shadow-[0_20px_50px_rgba(7,22,43,0.16)] xl:block">
<div className="flex items-center gap-3">
<img alt="Lemon Grove Visit" className="h-12 w-16 rounded-md object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/31a37767-71b7-4507-bb70-0dd03acfcba3_320w.png"/>
<div>
<p className="text-xs font-bold text-[#07162b]">
                        Lemon Grove Visit
                      </p>
<p className="text-[0.65rem] font-semibold text-[#526071]">
                        Local farm experience
                      </p>
</div>
</div>
</div>
</div>
</article>

<article className="how-reveal relative">
<div className="mb-7 flex items-center gap-4">
<span className="font-serif-display text-2xl font-semibold text-[#9d7337]">
                  04
                </span>
<span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#d8c5a3] bg-[#fffaf2] text-[#07162b] shadow-[0_16px_40px_rgba(7,22,43,0.08),inset_0_1px_0_rgba(255,255,255,0.8)]">
<i className="h-6 w-6" data-lucide="briefcase-business"></i>
</span>
<span className="hidden shrink-0 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#9d7337] lg:inline-flex">
                  Book
                </span>
</div>
<div className="px-0 sm:px-1">
<h3 className="font-serif-display text-2xl font-medium leading-none text-[#07162b]">
                  Book with Confidence
                </h3>
<p className="mt-4 max-w-xs text-sm leading-6 text-[#526071]">
                  We handle the details — secure bookings, 24/7 support, and
                  peace of mind.
                </p>
</div>

<div className="mt-8 overflow-hidden rounded-[1.15rem] border border-[#d8c5a3] bg-[#fffaf2] shadow-[0_24px_70px_rgba(7,22,43,0.10),inset_0_1px_0_rgba(255,255,255,0.78)]">
<div className="flex items-center justify-between bg-[#eef1e8] px-5 py-4">
<div>
<h4 className="font-serif-display text-lg font-medium text-[#07162b]">
                      Your Journey is Confirmed
                    </h4>
<p className="mt-1 text-xs font-semibold text-[#526071]">
                      We can’t wait to welcome you.
                    </p>
</div>
<span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fffaf2] text-[#4b7d54] shadow-[0_12px_28px_rgba(7,22,43,0.10)]">
<i className="h-6 w-6" data-lucide="check"></i>
</span>
</div>
<div className="p-5">
<div>
<h5 className="font-serif-display text-xl font-medium text-[#07162b]">
                      Amalfi Escape
                    </h5>
<p className="mt-1 text-xs font-semibold text-[#526071]">
                      May 24 – May 30, 2025 · 2 Adults
                    </p>
</div>
<div className="mt-6 space-y-3">
<div className="flex items-center justify-between text-xs font-semibold">
<span className="inline-flex items-center gap-2 text-[#526071]">
<i className="h-4 w-4 text-[#9d7337]" data-lucide="clipboard-list"></i>
                        Itinerary
                      </span>
<span className="text-[#07162b]">5 Days</span>
</div>
<div className="flex items-center justify-between text-xs font-semibold">
<span className="inline-flex items-center gap-2 text-[#526071]">
<i className="h-4 w-4 text-[#9d7337]" data-lucide="bed-double"></i>
                        Accommodation
                      </span>
<span className="text-[#07162b]">Hotel Poseidon</span>
</div>
<div className="flex items-center justify-between text-xs font-semibold">
<span className="inline-flex items-center gap-2 text-[#526071]">
<i className="h-4 w-4 text-[#9d7337]" data-lucide="car"></i>
                        Transfers
                      </span>
<span className="text-[#07162b]">Private</span>
</div>
<div className="flex items-center justify-between text-xs font-semibold">
<span className="inline-flex items-center gap-2 text-[#526071]">
<i className="h-4 w-4 text-[#9d7337]" data-lucide="sparkles"></i>
                        Experiences
                      </span>
<span className="text-[#07162b]">7 Included</span>
</div>
<div className="flex items-center justify-between text-xs font-semibold">
<span className="inline-flex items-center gap-2 text-[#526071]">
<i className="h-4 w-4 text-[#9d7337]" data-lucide="headphones"></i>
                        Support
                      </span>
<span className="text-[#07162b]">24/7 Concierge</span>
</div>
</div>
<button className="mt-7 flex w-full items-center justify-center gap-3 rounded-md bg-[#07162b] px-4 py-3 text-xs font-bold text-[#fffaf2] shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]">
                    View Trip Dashboard
                    <i className="h-4 w-4 text-[#bd8a3c]" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</article>
</div>

<div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
<div className="flex items-center gap-4">
<span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f7efe6] text-[#9d7337]">
<i className="h-5 w-5" data-lucide="shield-check"></i>
</span>
<div>
<h4 className="text-sm font-bold text-[#07162b]">
                  Your privacy, always.
                </h4>
<p className="mt-1 text-xs font-semibold text-[#526071]">
                  Your data is secure and never shared.
                </p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex -space-x-2">
<img alt="Concierge expert" className="h-10 w-10 rounded-full border-2 border-[#fffaf2] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e5cbf539-f61a-4c9d-aff7-ea01dc1ddcb9_3840w.webp?w=800&amp;q=80"/>
<img alt="Concierge expert" className="h-10 w-10 rounded-full border-2 border-[#fffaf2] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/34c1d155-2bc2-483e-ba5a-7f83641c46d5_3840w.jpg?w=800&amp;q=80"/>
</div>
<div>
<h4 className="text-sm font-bold text-[#07162b]">
                  Real people. Real expertise.
                </h4>
<p className="mt-1 text-xs font-semibold text-[#526071]">
                  Our travel concierges know the places — and care.
                </p>
</div>
</div>
</div>
</div>
</section>












</main>






    </>
  );
}
