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



      document.addEventListener('DOMContentLoaded', function () {
        if (window.Lenis) {
          const lenis = new Lenis({
            duration: 1.15,
            smoothWheel: true,
            wheelMultiplier: 0.85,
            touchMultiplier: 1.2
          });

          function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
          }

          requestAnimationFrame(raf);

          document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
            anchor.addEventListener('click', function (event) {
              const target = document.querySelector(anchor.getAttribute('href'));
              if (target) {
                event.preventDefault();
                lenis.scrollTo(target, { offset: -72 });
              }
            });
          });
        }

        if (window.gsap && window.ScrollTrigger) {
          gsap.registerPlugin(ScrollTrigger);

          document.querySelectorAll('.reveal').forEach(function (element) {
            const words = element.textContent.trim().split(/\s+/);
            element.innerHTML = words.map(function (word) {
              return '<span style="display:inline-block;overflow:hidden;vertical-align:top;"><span style="display:inline-block;transform:translateY(110%);">' + word + '&nbsp;</span></span>';
            }).join('');

            gsap.to(element.querySelectorAll('span span'), {
              y: 0,
              duration: 1,
              ease: 'power4.out',
              stagger: 0.045,
              scrollTrigger: {
                trigger: element,
                start: 'top 82%',
                once: true
              }
            });
          });

          gsap.fromTo('.interactive', {
            y: 18,
            opacity: 0
          }, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.06,
            scrollTrigger: {
              trigger: 'body',
              start: 'top 70%',
              once: true
            }
          });
        }

        document.querySelectorAll('.interactive, a, button, input, textarea, select').forEach(function (item) {
          item.addEventListener('mouseenter', function () {
            item.style.transform = item.tagName === 'INPUT' || item.tagName === 'TEXTAREA' || item.tagName === 'SELECT' ? 'translateY(0)' : 'translateY(-2px)';
          });
          item.addEventListener('mouseleave', function () {
            item.style.transform = 'translateY(0)';
          });
        });

        const toggle = document.getElementById('billingToggle');
        const knob = document.getElementById('billingKnob');
        let annual = true;

        if (toggle && knob) {
          toggle.addEventListener('click', function () {
            annual = !annual;
            toggle.classList.toggle('bg-[#00e5ff]', annual);
            toggle.classList.toggle('bg-white/10', !annual);
            knob.style.right = annual ? '0.125rem' : '1.375rem';
            knob.style.background = annual ? '#000000' : '#ffffff';

            document.querySelectorAll('.price').forEach(function (price) {
              price.textContent = annual ? price.dataset.year : price.dataset.month;
            });
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
      
<div className="fixed inset-0 pointer-events-none z-0" style={{backgroundImage: 'radial-gradient(circle at 12% 20%,rgba(0,229,255,0.08),transparent 24rem),radial-gradient(circle at 88% 70%,rgba(0,229,255,0.045),transparent 26rem)'}}></div>
<div className="relative z-10 w-full px-3 py-3 md:px-6 md:py-6">
<div className="mx-auto max-w-7xl border border-white/10 bg-[#0a0a0a] relative overflow-hidden shadow-2xl shadow-black/60 border-b-0">
<span className="absolute left-0 top-0 h-6 w-6 border-l border-t border-[#00e5ff]/40"></span>
<span className="absolute right-0 top-0 h-6 w-6 border-r border-t border-[#00e5ff]/40"></span>
<span className="absolute bottom-0 left-0 h-6 w-6 border-l border-b border-[#00e5ff]/40"></span>
<span className="absolute bottom-0 right-0 h-6 w-6 border-r border-b border-[#00e5ff]/40"></span>
<header className="relative z-50 w-full bg-transparent">
<div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 md:px-10">
<a className="font-mono text-lg uppercase tracking-[0.55em] text-white" href="#top">
              NOVI
            </a>
<nav className="hidden items-center gap-10 md:flex">
<a className="font-mono text-xs text-white/80 transition-colors duration-300 hover:text-[#00e5ff]" href="#features">
                How It Works
              </a>
<a className="font-mono text-xs text-white/80 transition-colors duration-300 hover:text-[#00e5ff]" href="#about">
                Channels
              </a>
<a className="font-mono text-xs text-white/80 transition-colors duration-300 hover:text-[#00e5ff]" href="#pricing">
                Automation
              </a>
<a className="font-mono text-xs text-white/80 transition-colors duration-300 hover:text-[#00e5ff]" href="#contact">
                Analytics
              </a>
</nav>
<a className="hidden border border-[#00e5ff]/50 px-8 py-3 font-mono text-[10px] uppercase tracking-widest text-[#00e5ff] transition-all duration-300 hover:bg-[#00e5ff]/10 sm:inline-flex" href="#contact">
              Social Automation Platform
            </a>
</div>
</header>
</div>
<div className="mx-auto max-w-7xl border border-white/10 bg-[#0a0a0a] overflow-hidden shadow-2xl shadow-black/60">
<main className="" id="top">
<section className="relative overflow-hidden border-b border-white/10 bg-[#02060b] min-h-[760px]">
<video aria-label="Digital Social Media Integration Concept" className="absolute inset-0 h-full w-full object-cover" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/065396b6-8665-4517-a9fd-d4450f2dfb04_1600w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/5bd6211c-bd4c-467c-b442-4312cac4712c/1779296002747-748f252a-dd7c-4cc1-b6c1-9d8281422697.mp4" style={{WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)'}}></video>
<div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/5 to-black/45"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_52%,rgba(0,229,255,0.08),transparent_28rem)]"></div>
<span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-[#00e5ff]/70"></span>
<span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-[#00e5ff]/70"></span>
<span className="absolute bottom-0 left-8 flex gap-1">
<span className="h-0.5 w-0.5 rounded-full bg-[#00e5ff]"></span>
<span className="h-0.5 w-0.5 rounded-full bg-[#00e5ff]"></span>
<span className="h-0.5 w-0.5 rounded-full bg-[#00e5ff]"></span>
<span className="h-0.5 w-0.5 rounded-full bg-[#00e5ff]"></span>
<span className="h-0.5 w-0.5 rounded-full bg-[#00e5ff]"></span>
</span>
<span className="absolute bottom-0 right-8 flex gap-1">
<span className="h-0.5 w-0.5 rounded-full bg-[#00e5ff]"></span>
<span className="h-0.5 w-0.5 rounded-full bg-[#00e5ff]"></span>
<span className="h-0.5 w-0.5 rounded-full bg-[#00e5ff]"></span>
<span className="h-0.5 w-0.5 rounded-full bg-[#00e5ff]"></span>
<span className="h-0.5 w-0.5 rounded-full bg-[#00e5ff]"></span>
</span>
<div className="relative z-10 flex flex-col justify-end px-6 pb-10 md:px-10 lg:px-12 lg:pb-16 pt-12 min-h-[760px]">
<div className="flex w-full flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
<div className="max-w-[36rem]">
<p className="font-mono text-xs uppercase tracking-[0.22em] text-white">
                    Smart workflows × social growth
                  </p>
<h1 className="mt-5 text-5xl leading-[1.08] tracking-tight text-white md:text-6xl" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '200'}}>
                    Awaiting Client
                    <span className="text-white">Brief</span>
</h1>
</div>
<div className="max-w-[22rem] shrink-0">
<p className="text-sm leading-relaxed text-white/80">
                    Please provide the details of your client brief. It looks
                    like the text was missing from your prompt, so I'm ready to
                    update the content once you share it!
                  </p>
<div className="mt-6 flex flex-wrap gap-4">
<a className="group inline-flex items-center justify-center gap-5 bg-[#00e5ff] px-7 py-3 font-mono text-xs text-black transition-all duration-300 hover:bg-white hover:shadow-[0_0_24px_rgba(0,229,255,0.35)]" href="#pricing">
                      Start Free
                      <iconify-icon className="text-base transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center border border-[#00e5ff]/35 bg-black/20 px-7 py-3 font-mono text-xs text-white transition-all duration-300 hover:bg-[#00e5ff]/10 hover:text-[#00e5ff]" href="#features">
                      See Demo
                    </a>
</div>
</div>
</div>
</div>
</section>
<section className="grid grid-cols-2 border-b border-white/10 bg-[#080808] md:grid-cols-4">
<div className="group border-b border-r border-white/10 p-6 transition-all duration-300 hover:bg-white/[0.025] md:border-b-0">
<p className="font-mono text-xs uppercase tracking-widest text-white/35">
                Automations run
              </p>
<p className="mt-4 text-3xl tracking-tight text-white" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>
                18M+
              </p>
</div>
<div className="group border-b border-white/10 p-6 transition-all duration-300 hover:bg-white/[0.025] md:border-b-0 md:border-r">
<p className="font-mono text-xs uppercase tracking-widest text-white/35">
                Avg. hours saved
              </p>
<p className="mt-4 text-3xl tracking-tight text-white" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>
                26/wk
              </p>
</div>
<div className="group border-r border-white/10 p-6 transition-all duration-300 hover:bg-white/[0.025]">
<p className="font-mono text-xs uppercase tracking-widest text-white/35">
                Brand safeguards
              </p>
<p className="mt-4 text-3xl tracking-tight text-white" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>
                99.9%
              </p>
</div>
<div className="group p-6 transition-all duration-300 hover:bg-white/[0.025]">
<p className="font-mono text-xs uppercase tracking-widest text-white/35">
                Channels linked
              </p>
<p className="mt-4 text-3xl tracking-tight text-[#00e5ff]" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>
                42+
              </p>
</div>
</section>
<section className="relative border-b border-white/10 bg-[#0a0a0a]" id="features">
<span className="absolute left-0 top-0 h-6 w-6 border-l border-t border-[#00e5ff]/40"></span>
<span className="absolute right-0 top-0 h-6 w-6 border-r border-t border-[#00e5ff]/40"></span>
<div className="grid grid-cols-1 border-b border-white/10 lg:grid-cols-[0.8fr_1.2fr]">
<div className="border-b border-white/10 p-6 md:p-10 lg:border-b-0 lg:border-r lg:p-14">
<p className="font-mono text-xs uppercase tracking-widest text-[#00e5ff]">
                  // Features
                </p>
<h2 className="reveal mt-5 max-w-md text-4xl uppercase leading-none tracking-tight text-white md:text-5xl" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>Governed </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>automation </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>for </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>every </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>social </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>motion. </span>
</span>
</h2>
</div>
<div className="p-6 md:p-10 lg:p-14">
<p className="max-w-2xl text-sm leading-relaxed text-white/50">
                  Novi connects planning, generation, approvals, publishing,
                  listening, and response logic into one precise operating
                  layer. Build flows once, then let them adapt to campaign
                  momentum.
                </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3">
<article className="interactive group border-b border-white/10 p-6 transition-all duration-500 hover:bg-white/[0.025] md:border-b-0 md:border-r md:p-10">
<div className="mb-8 flex items-start justify-between">
<span className="font-mono text-xs uppercase tracking-widest text-[#00e5ff]">
                    01
                  </span>
<span className="flex h-11 w-11 items-center justify-center border border-white/10 bg-black/40 text-white transition-all duration-300 group-hover:border-[#00e5ff]/50 group-hover:text-[#00e5ff] group-hover:shadow-[0_0_20px_rgba(0,229,255,0.14)]">
<iconify-icon className="text-2xl" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</span>
</div>
<h3 className="text-xl uppercase tracking-tight text-white" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>
                  Campaign Autopilot
                </h3>
<p className="mt-4 text-sm leading-relaxed text-white/45">
                  Convert a launch brief into channel-specific calendars, copy
                  variants, posting windows, and follow-up sequences.
                </p>
</article>
<article className="interactive group border-b border-white/10 p-6 transition-all duration-500 hover:bg-white/[0.025] md:border-b-0 md:border-r md:p-10">
<div className="mb-8 flex items-start justify-between">
<span className="font-mono text-xs uppercase tracking-widest text-[#00e5ff]">
                    02
                  </span>
<span className="flex h-11 w-11 items-center justify-center border border-white/10 bg-black/40 text-white transition-all duration-300 group-hover:border-[#00e5ff]/50 group-hover:text-[#00e5ff] group-hover:shadow-[0_0_20px_rgba(0,229,255,0.14)]">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</span>
</div>
<h3 className="text-xl uppercase tracking-tight text-white" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>
                  Brand Guardrails
                </h3>
<p className="mt-4 text-sm leading-relaxed text-white/45">
                  Apply tone, claim, compliance, and escalation rules before
                  posts or replies reach your audience.
                </p>
</article>
<article className="interactive group p-6 transition-all duration-500 hover:bg-white/[0.025] md:p-10">
<div className="mb-8 flex items-start justify-between">
<span className="font-mono text-xs uppercase tracking-widest text-[#00e5ff]">
                    03
                  </span>
<span className="flex h-11 w-11 items-center justify-center border border-white/10 bg-black/40 text-white transition-all duration-300 group-hover:border-[#00e5ff]/50 group-hover:text-[#00e5ff] group-hover:shadow-[0_0_20px_rgba(0,229,255,0.14)]">
<iconify-icon className="text-2xl" icon="solar:radar-2-linear" strokeWidth="1.5"></iconify-icon>
</span>
</div>
<h3 className="text-xl uppercase tracking-tight text-white" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>
                  Signal Listening
                </h3>
<p className="mt-4 text-sm leading-relaxed text-white/45">
                  Detect competitor movement, trending comments, creator
                  mentions, and purchase-intent signals in real time.
                </p>
</article>
</div>
<div className="grid grid-cols-1 border-t border-white/10 lg:grid-cols-2">
<div className="relative min-h-[24rem] overflow-hidden border-b border-white/10 lg:border-b-0 lg:border-r">
<video aria-label="Social team operating Novi workflows" className="h-full w-full object-cover opacity-55 transition-all duration-700 hover:scale-105 hover:opacity-70" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70798318-fa28-4f71-9aea-5c7ce59580dd_3840w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/5bd6211c-bd4c-467c-b442-4312cac4712c/1779464315059-b1434dc5-68ee-4762-8e89-1c7df7fe629e.mp4"></video>
<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(180deg,transparent,rgba(5,5,5,0.88))'}}></div>
<div className="absolute bottom-6 left-6 right-6 border border-white/10 bg-black/50 p-4 backdrop-blur-md">
<p className="font-mono text-xs uppercase tracking-widest text-[#00e5ff]">
                    Live workflow
                  </p>
<p className="mt-2 text-sm text-white/65">
                    When demo requests spike, Novi shifts content priority,
                    activates reply templates, and alerts sales.
                  </p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2">
<div className="group border-b border-white/10 p-6 transition-all duration-300 hover:bg-white/[0.025] sm:border-r">
<iconify-icon className="text-2xl text-[#00e5ff]" icon="solar:calendar-mark-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="mt-8 font-mono text-xs uppercase tracking-widest text-white">
                    Adaptive scheduling
                  </h4>
<p className="mt-3 text-sm leading-relaxed text-white/45">
                    Posts move automatically when audience heatmaps change.
                  </p>
</div>
<div className="group border-b border-white/10 p-6 transition-all duration-300 hover:bg-white/[0.025]">
<iconify-icon className="text-2xl text-[#00e5ff]" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="mt-8 font-mono text-xs uppercase tracking-widest text-white">
                    Creator routing
                  </h4>
<p className="mt-3 text-sm leading-relaxed text-white/45">
                    Assign tasks to internal teams, ambassadors, or creators.
                  </p>
</div>
<div className="group border-b border-white/10 p-6 transition-all duration-300 hover:bg-white/[0.025] sm:border-b-0 sm:border-r">
<iconify-icon className="text-2xl text-[#00e5ff]" icon="solar:chart-2-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="mt-8 font-mono text-xs uppercase tracking-widest text-white">
                    Attribution loop
                  </h4>
<p className="mt-3 text-sm leading-relaxed text-white/45">
                    Connect social actions to pipeline and conversion events.
                  </p>
</div>
<div className="group p-6 transition-all duration-300 hover:bg-white/[0.025]">
<iconify-icon className="text-2xl text-[#00e5ff]" icon="solar:inbox-line-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="mt-8 font-mono text-xs uppercase tracking-widest text-white">
                    Unified inbox
                  </h4>
<p className="mt-3 text-sm leading-relaxed text-white/45">
                    Prioritize comments, DMs, mentions, and approvals in one
                    queue.
                  </p>
</div>
</div>
</div>
</section>
<section className="relative border-b border-white/10 bg-[#0a0a0a]" id="channels">
<div className="grid grid-cols-1 border-b border-white/10 lg:grid-cols-[0.8fr_1.2fr]">
<div className="border-b border-white/10 p-6 md:p-10 lg:border-b-0 lg:border-r lg:p-14">
<p className="font-mono text-xs uppercase tracking-widest text-[#00e5ff]">
                  // Channels &amp; Integrations
                </p>
<h2 className="reveal mt-5 max-w-md text-4xl uppercase leading-none tracking-tight text-white md:text-5xl" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>Connect </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>every </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>touchpoint. </span>
</span>
</h2>
</div>
<div className="p-6 md:p-10 lg:p-14 flex flex-col justify-center">
<p className="max-w-2xl text-sm leading-relaxed text-white/50">
                  Sync with the platforms your audience already uses. Novi
                  supports direct integrations with all major social networks,
                  CRMs, and data warehouses.
                </p>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4">
<div className="group border-b border-r border-white/10 p-6 transition-all duration-300 hover:bg-white/[0.025] md:border-b-0 flex flex-col items-center justify-center min-h-[160px]">
<iconify-icon className="text-4xl text-white/60 group-hover:text-[#00e5ff] transition-colors duration-300" icon="ri:twitter-x-line"></iconify-icon>
<p className="mt-4 font-mono text-xs uppercase tracking-widest text-white/40 group-hover:text-white transition-colors duration-300">
                  X (Twitter)
                </p>
</div>
<div className="group border-b border-white/10 p-6 transition-all duration-300 hover:bg-white/[0.025] md:border-b-0 md:border-r flex flex-col items-center justify-center min-h-[160px]">
<iconify-icon className="text-4xl text-white/60 group-hover:text-[#00e5ff] transition-colors duration-300" icon="ri:linkedin-fill"></iconify-icon>
<p className="mt-4 font-mono text-xs uppercase tracking-widest text-white/40 group-hover:text-white transition-colors duration-300">
                  LinkedIn
                </p>
</div>
<div className="group border-r border-white/10 p-6 transition-all duration-300 hover:bg-white/[0.025] flex flex-col items-center justify-center min-h-[160px]">
<iconify-icon className="text-4xl text-white/60 group-hover:text-[#00e5ff] transition-colors duration-300" icon="ri:instagram-line"></iconify-icon>
<p className="mt-4 font-mono text-xs uppercase tracking-widest text-white/40 group-hover:text-white transition-colors duration-300">
                  Instagram
                </p>
</div>
<div className="group p-6 transition-all duration-300 hover:bg-white/[0.025] flex flex-col items-center justify-center min-h-[160px]">
<iconify-icon className="text-4xl text-white/60 group-hover:text-[#00e5ff] transition-colors duration-300" icon="ri:threads-line"></iconify-icon>
<p className="mt-4 font-mono text-xs uppercase tracking-widest text-white/40 group-hover:text-white transition-colors duration-300">
                  Threads
                </p>
</div>
</div>
</section>
<section className="relative border-b border-white/10 bg-[#080808]" id="how-it-works">
<div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'linear-gradient(135deg,rgba(255,255,255,0.025) 1px,transparent 1px)', backgroundSize: '3rem 3rem'}}></div>
<div className="relative grid grid-cols-1 border-b border-white/10 lg:grid-cols-[1.2fr_0.8fr]">
<div className="border-b border-white/10 p-6 md:p-10 lg:border-b-0 lg:border-r lg:p-14">
<p className="font-mono text-xs uppercase tracking-widest text-[#00e5ff]">
                  // How It Works
                </p>
<h2 className="reveal mt-5 max-w-md text-4xl uppercase leading-none tracking-tight text-white md:text-5xl" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>Three </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>steps </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>to </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>scale. </span>
</span>
</h2>
</div>
<div className="p-6 md:p-10 lg:p-14 flex flex-col justify-center">
<p className="max-w-2xl text-sm leading-relaxed text-white/50">
                  Our platform integrates deeply with your existing workflows to
                  ensure seamless execution from day one, allowing you to focus
                  on strategy.
                </p>
</div>
</div>
<div className="relative grid grid-cols-1 md:grid-cols-3">
<div className="interactive group border-b border-white/10 p-6 transition-all duration-500 hover:bg-white/[0.025] md:border-b-0 md:border-r md:p-10">
<div className="mb-8 flex items-start justify-between">
<span className="font-mono text-xs uppercase tracking-widest text-[#00e5ff]">
                    01
                  </span>
<span className="flex h-11 w-11 items-center justify-center border border-white/10 bg-black/40 text-white transition-all duration-300 group-hover:border-[#00e5ff]/50 group-hover:text-[#00e5ff] group-hover:shadow-[0_0_20px_rgba(0,229,255,0.14)]">
<iconify-icon className="text-2xl" icon="solar:link-circle-linear" strokeWidth="1.5"></iconify-icon>
</span>
</div>
<h3 className="text-xl uppercase tracking-tight text-white" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>
                  Connect Accounts
                </h3>
<p className="mt-4 text-sm leading-relaxed text-white/45">
                  Securely link your social profiles and define user roles. Our
                  platform automatically imports historical data to establish
                  baselines.
                </p>
</div>
<div className="interactive group border-b border-white/10 p-6 transition-all duration-500 hover:bg-white/[0.025] md:border-b-0 md:border-r md:p-10">
<div className="mb-8 flex items-start justify-between">
<span className="font-mono text-xs uppercase tracking-widest text-[#00e5ff]">
                    02
                  </span>
<span className="flex h-11 w-11 items-center justify-center border border-white/10 bg-black/40 text-white transition-all duration-300 group-hover:border-[#00e5ff]/50 group-hover:text-[#00e5ff] group-hover:shadow-[0_0_20px_rgba(0,229,255,0.14)]">
<iconify-icon className="text-2xl" icon="solar:flow-node-linear" strokeWidth="1.5"></iconify-icon>
</span>
</div>
<h3 className="text-xl uppercase tracking-tight text-white" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>
                  Build Workflows
                </h3>
<p className="mt-4 text-sm leading-relaxed text-white/45">
                  Use our visual builder to create custom logic for publishing,
                  approvals, and dynamic responses based on audience signals.
                </p>
</div>
<div className="interactive group p-6 transition-all duration-500 hover:bg-white/[0.025] md:p-10">
<div className="mb-8 flex items-start justify-between">
<span className="font-mono text-xs uppercase tracking-widest text-[#00e5ff]">
                    03
                  </span>
<span className="flex h-11 w-11 items-center justify-center border border-white/10 bg-black/40 text-white transition-all duration-300 group-hover:border-[#00e5ff]/50 group-hover:text-[#00e5ff] group-hover:shadow-[0_0_20px_rgba(0,229,255,0.14)]">
<iconify-icon className="text-2xl" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
</span>
</div>
<h3 className="text-xl uppercase tracking-tight text-white" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>
                  Launch &amp; Monitor
                </h3>
<p className="mt-4 text-sm leading-relaxed text-white/45">
                  Activate your automations and watch as Novi handles execution.
                  Monitor performance and adjust guardrails in real-time.
                </p>
</div>
</div>
</section>
<section className="relative border-b border-white/10 bg-[#080808]" id="about">
<div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'linear-gradient(135deg,rgba(255,255,255,0.025) 1px,transparent 1px)', backgroundSize: '3rem 3rem'}}></div>
<div className="relative grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
<div className="border-b border-white/10 p-6 md:p-10 lg:border-b-0 lg:border-r lg:p-14">
<p className="font-mono text-xs uppercase tracking-widest text-[#00e5ff]">
                  // About Novi
                </p>
<h2 className="reveal mt-5 text-4xl uppercase leading-none tracking-tight text-white md:text-5xl" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>Built </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>for </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>teams </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>where </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>social </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>is </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>an </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>operating </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>system. </span>
</span>
</h2>
<p className="mt-7 max-w-xl text-sm leading-relaxed text-white/50">
                  Novi was created by growth operators, automation engineers,
                  and brand strategists who believe social execution should be
                  fast without becoming careless. Our mission is to help
                  ambitious teams scale conversation with control.
                </p>
<div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
<div className="border border-white/10 bg-black/25 p-4">
<p className="font-mono text-xs uppercase tracking-widest text-[#00e5ff]">
                      01
                    </p>
<p className="mt-5 text-sm text-white/65">
                      Operator-led product rituals
                    </p>
</div>
<div className="border border-white/10 bg-black/25 p-4">
<p className="font-mono text-xs uppercase tracking-widest text-[#00e5ff]">
                      02
                    </p>
<p className="mt-5 text-sm text-white/65">
                      Compliance-first automation
                    </p>
</div>
<div className="border border-white/10 bg-black/25 p-4">
<p className="font-mono text-xs uppercase tracking-widest text-[#00e5ff]">
                      03
                    </p>
<p className="mt-5 text-sm text-white/65">
                      Human approval where it matters
                    </p>
</div>
</div>
</div>
<div className="p-6 md:p-10 lg:p-14">
<div className="grid grid-cols-2 gap-3">
<div className="group overflow-hidden border border-white/10 bg-black/30">
<video aria-label="Novi team member" className="h-56 w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-90" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6330f6d8-4cc0-4d1b-8085-f315c615b202_800w.webp" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/5bd6211c-bd4c-467c-b442-4312cac4712c/1779465883374-69200c36-1ef1-4273-b00b-0e0e668dad02.mp4"></video>
<div className="border-t border-white/10 p-4">
<p className="font-mono text-xs uppercase tracking-widest text-white">
                        Mara
                      </p>
<p className="mt-1 font-mono text-xs uppercase tracking-widest text-white/35">
                        Growth Systems
                      </p>
</div>
</div>
<div className="group mt-10 overflow-hidden border border-white/10 bg-black/30">
<video aria-label="Novi engineer" className="h-56 w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-90" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8f869148-195a-4100-981c-34c0ee95afe0_800w.webp" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/5bd6211c-bd4c-467c-b442-4312cac4712c/1779465966664-badb485f-fcf9-431d-93f3-f4c704fa1ca6.mp4"></video>
<div className="border-t border-white/10 p-4">
<p className="font-mono text-xs uppercase tracking-widest text-white">
                        Ilan
                      </p>
<p className="mt-1 font-mono text-xs uppercase tracking-widest text-white/35">
                        Automation Core
                      </p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="relative border-b border-white/10 bg-[#0a0a0a]" id="gallery">
<div className="grid grid-cols-1 border-b border-white/10 lg:grid-cols-[0.8fr_1.2fr]">
<div className="border-b border-white/10 p-6 md:p-10 lg:border-b-0 lg:border-r lg:p-14">
<p className="font-mono text-xs uppercase tracking-widest text-[#00e5ff]">
                  // Campaign Gallery
                </p>
<h2 className="reveal mt-5 max-w-md text-4xl uppercase leading-none tracking-tight text-white md:text-5xl" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>
                      Visualizing 
                    </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>success. </span>
</span>
</h2>
</div>
<div className="p-6 md:p-10 lg:p-14 flex flex-col justify-center">
<p className="max-w-2xl text-sm leading-relaxed text-white/50">
                  A look at the stunning campaigns powered by our social
                  automation platform. From high-growth influencer launches to
                  precise B2B retargeting, see how Novi shapes brand narratives.
                </p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
<div className="group relative aspect-square border-b border-white/10 sm:border-r lg:border-b-0 overflow-hidden bg-[#050505]">
<video aria-label="Social Media Management and Analytics Dashboard Concept" className="h-full w-full object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f9b36f1d-1e26-4453-9c74-2a4b6f65a3e9_800w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/5bd6211c-bd4c-467c-b442-4312cac4712c/1779465666711-fcee2db4-3f75-4812-a35c-ae89f182e48c.mp4"></video>
<div className="absolute bottom-6 left-6 border border-white/10 bg-black/60 p-3 backdrop-blur-md opacity-0 transition-opacity duration-500 group-hover:opacity-100">
<p className="font-mono text-xs uppercase tracking-widest text-[#00e5ff]">
                    Apparel Launch
                  </p>
</div>
</div>
<div className="group relative aspect-square border-b border-white/10 lg:border-r lg:border-b-0 overflow-hidden bg-[#050505]">
<video aria-label="Neon Digital Automation Flow Diagram" className="h-full w-full object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bbed24b-9bed-4c14-8f3b-8cc0c7289fc5_800w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/5bd6211c-bd4c-467c-b442-4312cac4712c/1779466076215-5fcfe4d9-aa70-4c5a-b8c9-a91abefb1f66.mp4"></video>
<div className="absolute bottom-6 left-6 border border-white/10 bg-black/60 p-3 backdrop-blur-md opacity-0 transition-opacity duration-500 group-hover:opacity-100">
<p className="font-mono text-xs uppercase tracking-widest text-[#00e5ff]">
                    B2B Outreach
                  </p>
</div>
</div>
<div className="group relative aspect-square border-b border-white/10 sm:border-b-0 sm:border-r overflow-hidden bg-[#050505]">
<video aria-label="Digital Social Media Growth Analytics Dashboard" className="h-full w-full object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c4d8d2df-f741-4048-93e5-e8e0fa132b0e_800w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/5bd6211c-bd4c-467c-b442-4312cac4712c/1779466138459-048cd9ad-f5a6-4cc1-95ed-ef7f04e1f495.mp4"></video>
<div className="absolute bottom-6 left-6 border border-white/10 bg-black/60 p-3 backdrop-blur-md opacity-0 transition-opacity duration-500 group-hover:opacity-100">
<p className="font-mono text-xs uppercase tracking-widest text-[#00e5ff]">
                    Brand Awareness
                  </p>
</div>
</div>
<div className="group relative aspect-square overflow-hidden bg-[#050505]">
<video aria-label="Futuristic Social Media Analytics Dashboard" className="h-full w-full object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e0b5ba32-a84f-43b6-99b5-fc5086ee3aa0_800w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/5bd6211c-bd4c-467c-b442-4312cac4712c/1779465790880-9599dccd-9859-4b11-b5cb-97e6cda4d724.mp4"></video>
<div className="absolute bottom-6 left-6 border border-white/10 bg-black/60 p-3 backdrop-blur-md opacity-0 transition-opacity duration-500 group-hover:opacity-100">
<p className="font-mono text-xs uppercase tracking-widest text-[#00e5ff]">
                    Event Promo
                  </p>
</div>
</div>
</div>
</section>
<section className="relative border-b border-white/10 bg-[#060606] p-6 md:p-10 lg:p-16">
<span className="absolute left-0 top-0 h-6 w-6 border-l border-t border-[#00e5ff]/40"></span>
<span className="absolute right-0 bottom-0 h-6 w-6 border-b border-r border-[#00e5ff]/40"></span>
<div className="mx-auto max-w-4xl text-center">
<iconify-icon className="mx-auto mb-8 text-5xl text-white/20" icon="solar:quote-left-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="reveal text-3xl uppercase leading-tight tracking-tight text-white md:text-5xl" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>Novi </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>gave </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>us </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>the </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>operating </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>cadence </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>of </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>a </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>20-person </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>social </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>team </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>without </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>losing </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>the </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>judgment </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>of </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>our </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>brand </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>leads. </span>
</span>
</h2>
<div className="mt-10 flex items-center justify-center gap-4">
<img alt="Customer avatar" className="h-12 w-12 rounded-full border border-white/15 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3012bbbf-121f-4308-810b-4e024631baa5_320w.webp"/>
<div className="text-left">
<p className="font-mono text-xs uppercase tracking-widest text-white">
                    Avery Chen
                  </p>
<p className="mt-1 font-mono text-xs uppercase tracking-widest text-white/35">
                    VP Marketing, Orbitlane
                  </p>
</div>
</div>
</div>
<div className="mt-14 grid grid-cols-1 gap-3 md:grid-cols-3">
<div className="border border-white/10 bg-white/[0.02] p-5">
<p className="font-mono text-xs uppercase tracking-widest text-[#00e5ff]">
                  Proof 01
                </p>
<p className="mt-5 text-2xl tracking-tight text-white" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>
                  3.7x
                </p>
<p className="mt-2 text-sm text-white/45">
                  More qualified replies from product launches.
                </p>
</div>
<div className="border border-white/10 bg-white/[0.02] p-5">
<p className="font-mono text-xs uppercase tracking-widest text-[#00e5ff]">
                  Proof 02
                </p>
<p className="mt-5 text-2xl tracking-tight text-white" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>
                  68%
                </p>
<p className="mt-2 text-sm text-white/45">
                  Reduction in manual scheduling work.
                </p>
</div>
<div className="border border-white/10 bg-white/[0.02] p-5">
<p className="font-mono text-xs uppercase tracking-widest text-[#00e5ff]">
                  Proof 03
                </p>
<p className="mt-5 text-2xl tracking-tight text-white" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>
                  12 min
                </p>
<p className="mt-2 text-sm text-white/45">
                  Median response time for priority mentions.
                </p>
</div>
</div>
</section>
<section className="relative border-b border-white/10 bg-[#0a0a0a]" id="pricing">
<div className="flex flex-col justify-between gap-6 border-b border-white/10 p-6 md:flex-row md:items-end md:p-10 lg:p-14">
<div>
<p className="font-mono text-xs uppercase tracking-widest text-[#00e5ff]">
                  // Pricing
                </p>
<h2 className="reveal mt-5 text-4xl uppercase leading-none tracking-tight text-white md:text-5xl" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>Scale </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>when </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>your </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>social </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>system </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>does. </span>
</span>
</h2>
</div>
<div className="flex w-fit items-center gap-3 border border-white/10 bg-white/[0.02] px-4 py-3">
<span className="font-mono text-xs uppercase tracking-widest text-white/45">
                  Monthly
                </span>
<button aria-label="Toggle annual pricing" className="relative h-5 w-10 rounded-full border border-white/10 bg-[#00e5ff] transition-all duration-300" id="billingToggle">
<span className="absolute right-0.5 top-0.5 h-4 w-4 rounded-full bg-black transition-all duration-300" id="billingKnob"></span>
</button>
<span className="font-mono text-xs uppercase tracking-widest text-white">
                  Annual
                  <span className="text-[#00e5ff]">-20%</span>
</span>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3">
<div className="interactive group border-b border-white/10 p-6 transition-all duration-500 hover:bg-white/[0.02] md:p-10 lg:border-b-0 lg:border-r">
<p className="font-mono text-xs uppercase tracking-widest text-white/40">
                  Starter
                </p>
<h3 className="mt-3 text-2xl uppercase tracking-tight text-white" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>
                  Launch
                </h3>
<div className="my-8 border-y border-white/10 py-6">
<span className="price text-5xl tracking-tight text-white" data-month="$49" data-year="$39" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>
                    $39
                  </span>
<span className="font-mono text-xs uppercase tracking-widest text-white/35">
                    /mo
                  </span>
</div>
<ul className="space-y-4 text-sm text-white/60">
<li className="flex gap-3">
<iconify-icon className="text-[#00e5ff]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                    3 social channels
                  </li>
<li className="flex gap-3">
<iconify-icon className="text-[#00e5ff]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                    12 active workflows
                  </li>
<li className="flex gap-3">
<iconify-icon className="text-[#00e5ff]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Basic approval queue
                  </li>
</ul>
<a className="mt-10 inline-flex w-full items-center justify-center border border-white/10 px-5 py-3.5 font-mono text-xs uppercase tracking-widest text-white transition-all duration-300 hover:border-[#00e5ff]/50 hover:bg-[#00e5ff]/5 hover:text-[#00e5ff]" href="#contact">
                  Start Launch
                </a>
</div>
<div className="interactive group relative border-b border-white/10 bg-[#00e5ff]/[0.025] p-6 transition-all duration-500 hover:bg-[#00e5ff]/[0.04] md:p-10 lg:border-b-0 lg:border-r">
<div className="absolute right-6 top-6 bg-[#00e5ff]/10 px-2 py-1 font-mono text-xs uppercase tracking-widest text-[#00e5ff]">
                  Recommended
                </div>
<p className="font-mono text-xs uppercase tracking-widest text-[#00e5ff]">
                  Growth
                </p>
<h3 className="mt-3 text-2xl uppercase tracking-tight text-white" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>
                  Scale
                </h3>
<div className="my-8 border-y border-white/10 py-6">
<span className="price text-5xl tracking-tight text-white" data-month="$149" data-year="$119" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>
                    $119
                  </span>
<span className="font-mono text-xs uppercase tracking-widest text-white/35">
                    /mo
                  </span>
</div>
<ul className="space-y-4 text-sm text-white/75">
<li className="flex gap-3">
<iconify-icon className="text-[#00e5ff]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                    12 social channels
                  </li>
<li className="flex gap-3">
<iconify-icon className="text-[#00e5ff]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Unlimited workflows
                  </li>
<li className="flex gap-3">
<iconify-icon className="text-[#00e5ff]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                    AI reply triage
                  </li>
<li className="flex gap-3">
<iconify-icon className="text-[#00e5ff]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Brand guardrails
                  </li>
</ul>
<a className="mt-10 inline-flex w-full items-center justify-center gap-2 bg-[#00e5ff] px-5 py-3.5 font-mono text-xs uppercase tracking-widest text-black transition-all duration-300 hover:bg-white hover:shadow-[0_0_24px_rgba(0,229,255,0.3)]" href="#contact">
                  Start Scale
                  <iconify-icon className="text-base" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="interactive group p-6 transition-all duration-500 hover:bg-white/[0.02] md:p-10">
<p className="font-mono text-xs uppercase tracking-widest text-white/40">
                  Enterprise
                </p>
<h3 className="mt-3 text-2xl uppercase tracking-tight text-white" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>
                  Control
                </h3>
<div className="my-8 border-y border-white/10 py-6">
<span className="text-5xl tracking-tight text-white" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>
                    Custom
                  </span>
</div>
<ul className="space-y-4 text-sm text-white/60">
<li className="flex gap-3">
<iconify-icon className="text-[#00e5ff]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                    SSO and permissions
                  </li>
<li className="flex gap-3">
<iconify-icon className="text-[#00e5ff]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Dedicated strategy support
                  </li>
<li className="flex gap-3">
<iconify-icon className="text-[#00e5ff]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Custom compliance rules
                  </li>
<li className="flex gap-3">
<iconify-icon className="text-[#00e5ff]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Data warehouse sync
                  </li>
</ul>
<a className="mt-10 inline-flex w-full items-center justify-center border border-white/10 px-5 py-3.5 font-mono text-xs uppercase tracking-widest text-white transition-all duration-300 hover:border-[#00e5ff]/50 hover:bg-[#00e5ff]/5 hover:text-[#00e5ff]" href="#contact">
                  Talk to Sales
                </a>
</div>
</div>
</section>
<section className="relative border-b border-white/10 bg-[#080808]" id="contact">
<span className="absolute left-0 top-0 h-6 w-6 border-l border-t border-[#00e5ff]/40"></span>
<span className="absolute right-0 top-0 h-6 w-6 border-r border-t border-[#00e5ff]/40"></span>
<div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
<div className="border-b border-white/10 p-6 md:p-10 lg:border-b-0 lg:border-r lg:p-14">
<p className="font-mono text-xs uppercase tracking-widest text-[#00e5ff]">
                  // Contact
                </p>
<h2 className="reveal mt-5 text-4xl uppercase leading-none tracking-tight text-white md:text-5xl" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>Map </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>your </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>first </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>automation </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>path. </span>
</span>
</h2>
<p className="mt-7 max-w-md text-sm leading-relaxed text-white/50">
                  Share your current social workflow. Novi will return a
                  recommended automation blueprint, priority guardrails, and
                  launch timeline.
                </p>
<div className="mt-10 space-y-3">
<div className="flex items-center gap-3 border border-white/10 bg-black/25 p-4">
<iconify-icon className="text-xl text-[#00e5ff]" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-mono text-xs uppercase tracking-widest text-white/55">
                      hello@novi.systems
                    </span>
</div>
<div className="flex items-center gap-3 border border-white/10 bg-black/25 p-4">
<iconify-icon className="text-xl text-[#00e5ff]" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-mono text-xs uppercase tracking-widest text-white/55">
                      Response under 1 business day
                    </span>
</div>
</div>
</div>
<form className="p-6 md:p-10 lg:p-14">
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
<label className="group block">
<span className="font-mono text-xs uppercase tracking-widest text-white/40 transition-colors duration-300 group-focus-within:text-[#00e5ff]">
                      Name
                    </span>
<input className="mt-2 w-full border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-[#00e5ff]/60 focus:bg-[#00e5ff]/5" placeholder="Ari Lane" type="text"/>
</label>
<label className="group block">
<span className="font-mono text-xs uppercase tracking-widest text-white/40 transition-colors duration-300 group-focus-within:text-[#00e5ff]">
                      Work email
                    </span>
<input className="mt-2 w-full border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-[#00e5ff]/60 focus:bg-[#00e5ff]/5" placeholder="ari@company.com" type="email"/>
</label>
</div>
<label className="group mt-4 block">
<span className="font-mono text-xs uppercase tracking-widest text-white/40 transition-colors duration-300 group-focus-within:text-[#00e5ff]">
                    Company stage
                  </span>
<select className="mt-2 w-full appearance-none border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition-all duration-300 focus:border-[#00e5ff]/60 focus:bg-[#00e5ff]/5">
<option>Startup</option>
<option>Scaleup</option>
<option>Enterprise</option>
<option>Agency</option>
</select>
</label>
<label className="group mt-4 block">
<span className="font-mono text-xs uppercase tracking-widest text-white/40 transition-colors duration-300 group-focus-within:text-[#00e5ff]">
                    What should Novi automate?
                  </span>
<textarea className="mt-2 w-full resize-none border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-[#00e5ff]/60 focus:bg-[#00e5ff]/5" placeholder="Scheduling, replies, campaign launches, creator coordination..." rows="6"></textarea>
</label>
<button className="interactive group mt-5 inline-flex w-full items-center justify-center gap-2 bg-[#00e5ff] px-6 py-3.5 font-mono text-xs uppercase tracking-widest text-black transition-all duration-300 hover:bg-white hover:shadow-[0_0_24px_rgba(0,229,255,0.3)]" type="button">
                  Submit Inquiry
                  <iconify-icon className="text-base transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</form>
</div>
</section>
</main>
<footer className="bg-[#050505]">
<div className="relative border-b border-white/10 p-8 text-center md:p-14 lg:p-20">
<div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 50% 100%,rgba(0,229,255,0.11),transparent 28rem)'}}></div>
<div className="relative">
<p className="font-mono text-xs uppercase tracking-widest text-[#00e5ff]">
                // Novi is ready
              </p>
<h2 className="reveal mx-auto mt-5 max-w-3xl text-4xl uppercase leading-none tracking-tight text-white md:text-6xl" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>Launch </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>the </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>social </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>automation </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>layer </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>your </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>team </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>can </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span style={{display: 'inline-block'}}>trust. </span>
</span>
</h2>
<div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center bg-white px-7 py-3.5 font-mono text-xs uppercase tracking-widest text-black transition-all duration-300 hover:bg-[#00e5ff] hover:shadow-[0_0_24px_rgba(0,229,255,0.28)]" href="#pricing">
                  Choose Plan
                </a>
<a className="inline-flex items-center justify-center border border-white/10 px-7 py-3.5 font-mono text-xs uppercase tracking-widest text-white transition-all duration-300 hover:border-[#00e5ff]/50 hover:bg-[#00e5ff]/5 hover:text-[#00e5ff]" href="#contact">
                  Book Demo
                </a>
</div>
</div>
</div>
<div className="grid grid-cols-1 border-b border-white/10 md:grid-cols-[1.1fr_0.9fr_0.9fr_0.9fr]">
<div className="border-b border-white/10 p-6 md:border-b-0 md:border-r md:p-8">
<div className="flex items-center gap-3">
<span className="flex h-8 w-8 items-center justify-center rounded border border-white/10 bg-black/40 text-[#00e5ff]">
<iconify-icon className="text-lg" icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
</span>
<span className="font-mono text-xs uppercase tracking-tighter text-white">
                  NOVI
                </span>
</div>
<p className="mt-5 max-w-xs text-sm leading-relaxed text-white/40">
                Social automation infrastructure for teams that need speed,
                judgment, and measurable growth.
              </p>
</div>
<div className="border-b border-white/10 p-6 md:border-b-0 md:border-r md:p-8">
<p className="font-mono text-xs uppercase tracking-widest text-white">
                Product
              </p>
<div className="mt-5 flex flex-col gap-3">
<a className="font-mono text-xs uppercase tracking-widest text-white/35 transition-colors duration-300 hover:text-[#00e5ff]" href="#features">
                  Features
                </a>
<a className="font-mono text-xs uppercase tracking-widest text-white/35 transition-colors duration-300 hover:text-[#00e5ff]" href="#pricing">
                  Pricing
                </a>
<a className="font-mono text-xs uppercase tracking-widest text-white/35 transition-colors duration-300 hover:text-[#00e5ff]" href="#about">
                  About
                </a>
</div>
</div>
<div className="border-b border-white/10 p-6 md:border-b-0 md:border-r md:p-8">
<p className="font-mono text-xs uppercase tracking-widest text-white">
                Channels
              </p>
<div className="mt-5 flex flex-col gap-3">
<a className="font-mono text-xs uppercase tracking-widest text-white/35 transition-colors duration-300 hover:text-[#00e5ff]" href="#">
                  X
                </a>
<a className="font-mono text-xs uppercase tracking-widest text-white/35 transition-colors duration-300 hover:text-[#00e5ff]" href="#">
                  LinkedIn
                </a>
<a className="font-mono text-xs uppercase tracking-widest text-white/35 transition-colors duration-300 hover:text-[#00e5ff]" href="#">
                  Threads
                </a>
</div>
</div>
<div className="p-6 md:p-8">
<p className="font-mono text-xs uppercase tracking-widest text-white">
                Company
              </p>
<div className="mt-5 flex flex-col gap-3">
<a className="font-mono text-xs uppercase tracking-widest text-white/35 transition-colors duration-300 hover:text-[#00e5ff]" href="#contact">
                  Contact
                </a>
<a className="font-mono text-xs uppercase tracking-widest text-white/35 transition-colors duration-300 hover:text-[#00e5ff]" href="#">
                  Security
                </a>
<a className="font-mono text-xs uppercase tracking-widest text-white/35 transition-colors duration-300 hover:text-[#00e5ff]" href="#">
                  Status
                </a>
</div>
</div>
</div>
<div className="flex flex-col items-center justify-between gap-4 px-6 py-5 md:flex-row md:px-8">
<p className="text-xs text-white/30">
              © 2026 Novi Systems. All rights reserved.
            </p>
<div className="flex gap-5">
<a className="text-xs text-white/30 transition-colors duration-300 hover:text-white/60" href="#">
                Privacy
              </a>
<a className="text-xs text-white/30 transition-colors duration-300 hover:text-white/60" href="#">
                Terms
              </a>
</div>
</div>
</footer>
</div>
</div>



    </>
  );
}
