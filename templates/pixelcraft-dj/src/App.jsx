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



      document.addEventListener("DOMContentLoaded", function () {
          gsap.registerPlugin(ScrollTrigger);

          gsap.utils.toArray(".reveal-cell, .section-kicker, .section-title, .section-copy, .work-card, .process-row, .proof-card").forEach(function (el) {
              gsap.from(el, {
                  scrollTrigger: {
                      trigger: el,
                      start: "top 86%",
                      toggleActions: "play none none reverse"
                  },
                  y: 54,
                  opacity: 0,
                  duration: 1,
                  ease: "expo.out"
              });
          });

          gsap.utils.toArray(".float-pill").forEach(function (el, index) {
              gsap.to(el, {
                  x: "+=" + gsap.utils.random(-18, 18),
                  y: "+=" + gsap.utils.random(-22, 22),
                  rotation: "+=" + gsap.utils.random(-5, 5),
                  duration: gsap.utils.random(3.8, 6.4),
                  repeat: -1,
                  yoyo: true,
                  ease: "sine.inOut",
                  delay: index * 0.15
              });
          });

          gsap.to(".float-badge", {
              rotation: 360,
              duration: 18,
              repeat: -1,
              ease: "none"
          });

          gsap.utils.toArray(".work-card").forEach(function (card) {
              card.addEventListener("mousemove", function (event) {
                  const rect = card.getBoundingClientRect();
                  const x = event.clientX - rect.left;
                  const y = event.clientY - rect.top;
                  const rotateY = ((x / rect.width) - 0.5) * 6;
                  const rotateX = ((y / rect.height) - 0.5) * -6;
                  gsap.to(card, { rotateX: rotateX, rotateY: rotateY, transformPerspective: 900, duration: 0.35, ease: "power2.out" });
              });
              card.addEventListener("mouseleave", function () {
                  gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.55, ease: "expo.out" });
              });
          });

          const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

          tl.to("#page", { opacity: 1, duration: 0.2 })
            .from(".nav-reveal", { y: -24, opacity: 0, duration: 1, stagger: 0.08 })
            .to("#main-frame", { opacity: 1, duration: 1 }, "-=0.5")
            .to(".grid-line", { scaleX: 1, scaleY: 1, duration: 1.2, stagger: 0.2, ease: "expo.out" }, "-=0.5")
            .to(".hero-meta", { y: 0, opacity: 1, duration: 0.8 }, "-=0.8")
            .to(".hero-word", { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 }, "-=0.6")
            .to(".hero-copy", { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
            .to(".hero-actions", { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
            .to(".stat-val", { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 }, "-=0.4")
            .to(".stat-label", { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 }, "-=0.5")
            .to(".right-col-visuals", { opacity: 1, duration: 1.5, ease: "power2.inOut" }, "-=1.5")
            .fromTo(".floating-card",
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "back.out(1.2)" },
              "-=1"
            );

          gsap.to(".floating-card", {
            y: -8,
            duration: 3,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            stagger: {
              each: 1.5,
              from: "start"
            }
          });
      });

      const canvas = document.getElementById('webgl-canvas');
      if (canvas) {
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        function resize() {
          width = canvas.parentElement.clientWidth;
          height = canvas.parentElement.clientHeight;
          canvas.width = width;
          canvas.height = height;
        }

        window.addEventListener('resize', resize);
        resize();

        class Particle {
          constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.z = Math.random() * 2 - 1;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 1.5 + 0.5;
          }

          update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
          }

          draw() {
            const depthOpacity = (this.z + 1) / 2;
            ctx.fillStyle = `rgba(96, 165, 250, ${depthOpacity * 0.5})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * depthOpacity, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        for (let i = 0; i < 80; i++) {
          particles.push(new Particle());
        }

        function animate() {
          ctx.clearRect(0, 0, width, height);
          ctx.lineWidth = 0.5;
          for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            for (let j = i + 1; j < particles.length; j++) {
              const dx = particles[i].x - particles[j].x;
              const dy = particles[i].y - particles[j].y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < 100) {
                ctx.strokeStyle = `rgba(167, 139, 250, ${0.15 * (1 - dist/100)})`;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
              }
            }
          }
          requestAnimationFrame(animate);
        }
        animate();
      }
    


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
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute inset-0 opacity-[0.035]" style={{backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.22) 0.0625rem, transparent 0.0625rem)', backgroundSize: '2.75rem 2.75rem'}}></div>
<div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.9) 0.0625rem, transparent 0.0625rem)', backgroundSize: '1rem 1rem'}}></div>
<div className="absolute -top-48 left-1/2 h-[34rem] w-[48rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl"></div>
<div className="absolute top-64 -right-40 h-[30rem] w-[30rem] rounded-full bg-violet-500/10 blur-3xl"></div>
<div className="absolute bottom-0 -left-48 h-[36rem] w-[36rem] rounded-full bg-cyan-400/10 blur-3xl"></div>
</div>

<div className="fixed inset-y-0 left-4 z-10 hidden w-px bg-white/[0.08] lg:block"></div>
<div className="fixed inset-y-0 right-4 z-10 hidden w-px bg-white/[0.08] lg:block"></div>
<div className="fixed left-[calc(50%-43rem)] top-0 z-10 hidden h-full w-px bg-white/[0.06] xl:block">
<span className="absolute top-28 -left-1 h-2 w-2 border border-emerald-300/40 bg-[#070708]"></span>
<span className="absolute bottom-32 -left-1 h-2 w-2 border border-white/25 bg-[#070708]"></span>
</div>
<div className="fixed right-[calc(50%-43rem)] top-0 z-10 hidden h-full w-px bg-white/[0.06] xl:block">
<span className="absolute top-44 -left-1 h-2 w-2 border border-violet-300/40 bg-[#070708]"></span>
<span className="absolute bottom-48 -left-1 h-2 w-2 border border-white/25 bg-[#070708]"></span>
</div>
<main className="relative z-20 opacity-0" id="page">

<nav className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
<div className="relative border border-white/[0.08] bg-white/[0.025] backdrop-blur-xl">
<span className="absolute left-0 top-0 h-4 w-4 border-l border-t border-emerald-300/60"></span>
<span className="absolute right-0 top-0 h-4 w-4 border-r border-t border-violet-300/60"></span>
<span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-white/20"></span>
<span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-white/20"></span>
<div className="grid grid-cols-2 items-center lg:grid-cols-[1fr_auto_1fr]">
<a aria-label="PixelCraft home" className="nav-reveal flex h-20 items-center gap-3 border-r border-white/[0.08] px-5 sm:px-7" href="#">

<span className="text-lg font-medium tracking-tighter text-white font-dm-sans">
                pixelcraft
                <span className="text-emerald-200 font-dm-sans">DJ</span>
</span>
</a>
<div className="nav-reveal hidden h-20 items-center gap-1 border-x border-white/[0.08] px-3 lg:flex">
<a className="rounded-full px-4 py-2 text-xs font-normal text-white/90 transition hover:bg-white/[0.06] font-dm-sans" href="#work">
                Work
              </a>
<a className="rounded-full px-4 py-2 text-xs font-normal text-white/50 transition hover:bg-white/[0.06] hover:text-white font-dm-sans" href="#systems">
                Systems
              </a>
<a className="rounded-full px-4 py-2 text-xs font-normal text-white/50 transition hover:bg-white/[0.06] hover:text-white font-dm-sans" href="#process">
                Process
              </a>
<a className="rounded-full px-4 py-2 text-xs font-normal text-white/50 transition hover:bg-white/[0.06] hover:text-white font-dm-sans" href="#proof">
                Proof
              </a>
</div>
<div className="nav-reveal flex h-20 items-center justify-end px-5 sm:px-7">
<a className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white text-xs font-normal text-black shadow-[0_10px_30px_rgba(255,255,255,0.12)] transition hover:-translate-y-0.5 hover:bg-emerald-100" href="#contact">
<span className="py-3 pl-5 font-dm-sans">Start project</span>
<span className="mr-1 grid h-9 w-9 place-items-center rounded-full bg-black text-white">
<iconify-icon className="text-lg transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</span>
</a>
</div>
</div>
</div>
</nav>

<section className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-4 pr-4 pb-4 pl-4">
<div className="relative overflow-hidden border border-white/[0.08] bg-[#08080a]/80 backdrop-blur-md shadow-[0_0_80px_rgba(0,0,0,0.8)] opacity-0" id="main-frame">
<span className="absolute left-0 top-0 z-30 h-6 w-6 border-l-2 border-t-2 border-emerald-400/60"></span>
<span className="absolute right-0 top-0 z-30 h-6 w-6 border-r-2 border-t-2 border-violet-400/60"></span>
<span className="absolute bottom-0 left-0 z-30 h-6 w-6 border-b-2 border-l-2 border-white/20"></span>
<span className="absolute bottom-0 right-0 z-30 h-6 w-6 border-b-2 border-r-2 border-white/20"></span>
<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(to right, rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '4rem 4rem'}}></div>
<div className="grid-line absolute left-0 top-32 h-px w-full bg-gradient-to-r from-transparent via-white/[0.1] to-transparent origin-left scale-x-0"></div>
<div className="grid-line absolute bottom-32 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/[0.1] to-transparent origin-right scale-x-0"></div>
<div className="grid-line absolute left-1/2 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/[0.1] to-transparent origin-top scale-y-0 lg:block"></div>
<div className="relative grid min-h-[46rem] lg:grid-cols-2">
<div className="flex flex-col justify-between border-b border-white/[0.08] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10 z-10 relative bg-gradient-to-r from-black/40 to-transparent">
<div className="hero-meta flex flex-wrap items-center gap-3 text-xs font-light text-white/50 opacity-0 -translate-y-4">
<span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.05] px-3 py-2 text-emerald-200 backdrop-blur-sm font-dm-sans">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]"></span>
</span>
                  Live Audio Mixing
                </span>
<span className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-2 font-dm-sans">
                  Touring 2024
                </span>
</div>
<div className="py-14 lg:py-20 relative">
<h1 className="max-w-4xl text-5xl font-normal leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-7xl">
<span className="hero-word block opacity-0 translate-y-8 font-anton font-normal">
                    Curate
                  </span>
<span className="hero-word block gradient-text opacity-0 translate-y-8 pb-1 font-anton font-normal">
                    audio sets
                  </span>
<span className="hero-word block text-white/40 opacity-0 translate-y-8 font-anton font-normal">
                    with absolute precision.
                  </span>
</h1>
<p className="hero-copy mt-8 max-w-md text-sm leading-relaxed font-light text-white/50 opacity-0 translate-y-4 font-dm-sans">
                  We deliver high-fidelity audio experiences that feel
                  intuitive, precise, and ready for massive scale dancefloors
                  across all environments.
                </p>
<div className="hero-actions mt-10 flex flex-col gap-4 sm:flex-row opacity-0 translate-y-4">
<a className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs font-normal text-black shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-300 hover:scale-[1.02] hover:bg-emerald-50 hover:shadow-[0_0_40px_rgba(52,211,153,0.3)] overflow-hidden font-dm-sans" href="#deploy">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                    Book a set
                    <iconify-icon className="text-lg transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.02] px-6 py-3.5 text-xs font-light text-white/70 backdrop-blur-md transition-all duration-300 hover:bg-white/[0.06] hover:text-white font-dm-sans" href="#docs">
<iconify-icon className="text-lg text-emerald-300 transition-transform duration-300 group-hover:rotate-90" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Listen to mixes
                  </a>
</div>
</div>
<div className="hero-stats grid grid-cols-3 border border-white/[0.08] glass-panel rounded-lg overflow-hidden">
<div className="p-5 relative group">
<div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<p className="text-xl tracking-tight text-white opacity-0 translate-y-2 stat-val font-anton font-normal">
                    10K+
                  </p>
<p className="mt-1 text-[0.65rem] uppercase tracking-widest text-white/40 opacity-0 translate-y-2 stat-label font-dm-sans">
                    attendees
                  </p>
</div>
<div className="border-x border-white/[0.08] p-5 relative group">
<div className="absolute inset-0 bg-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<p className="text-xl tracking-tight text-white opacity-0 translate-y-2 stat-val font-anton font-normal">
                    4
                  </p>
<p className="mt-1 text-[0.65rem] uppercase tracking-widest text-white/40 opacity-0 translate-y-2 stat-label font-dm-sans">
                    cdj decks
                  </p>
</div>
<div className="p-5 relative group">
<div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<p className="text-xl tracking-tight text-white opacity-0 translate-y-2 stat-val font-anton font-normal">
                    100%
                  </p>
<p className="mt-1 text-[0.65rem] uppercase tracking-widest text-white/40 opacity-0 translate-y-2 stat-label font-dm-sans">
                    live mixing
                  </p>
</div>
</div>
</div>
<div className="relative flex min-h-[42rem] items-center justify-center overflow-hidden p-6 sm:p-8 lg:p-10 right-col-visuals opacity-0">
<img alt="Abstract neon logic grid" className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-screen scale-105 transition-transform duration-[20s] hover:scale-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5e7b5dc5-9185-4828-bf71-6361903615cc_3840w.png"/>
<div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#050505]/70 to-[#08080c]"></div>
<canvas className="absolute inset-0 z-0 opacity-40 mix-blend-screen" height="821" id="webgl-canvas" width="607"></canvas>
<div className="relative z-10 h-[22rem] w-[22rem] sm:h-[30rem] sm:w-[30rem]">
<div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-tr from-emerald-500/10 via-transparent to-violet-500/10 blur-3xl" style={{animationDuration: '4s'}}></div>
<div className="absolute inset-0 overflow-hidden rounded-full border border-white/10 bg-black/40 shadow-[0_0_60px_rgba(0,0,0,0.9)] backdrop-blur-xl">
<div className="absolute inset-0 animate-[spin_8s_linear_infinite]">
<div className="absolute inset-0 rounded-full" style={{background: 'repeating-radial-gradient(circle at center, rgba(255,255,255,0.02) 0, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 8px)'}}></div>
<div className="absolute inset-[15%] rounded-full border border-emerald-500/20 shadow-[inset_0_0_20px_rgba(16,185,129,0.2)]"></div>
<div className="absolute inset-[30%] rounded-full border border-violet-500/20 border-dashed opacity-50"></div>
<div className="absolute inset-[45%] rounded-full border border-white/5"></div>
<div className="absolute left-1/2 top-1/2 flex h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-zinc-950 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,1)]">
<div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500/40 via-cyan-500/40 to-violet-600/40 opacity-80 mix-blend-screen"></div>
<div className="absolute inset-2 rounded-full border-[0.5px] border-white/20"></div>
<div className="relative z-10 flex flex-col items-center justify-center">
<iconify-icon className="text-xl text-emerald-200 drop-shadow-[0_0_8px_rgba(167,243,208,0.8)] mb-1" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[0.55rem] font-normal tracking-[0.2em] text-white/80 font-dm-sans">
                          DECK
                        </span>
</div>
</div>
</div>
<div className="pointer-events-none absolute inset-0 rounded-full opacity-40 mix-blend-overlay" style={{background: 'conic-gradient(from 45deg, transparent 0deg, rgba(255,255,255,0.2) 45deg, transparent 90deg, transparent 180deg, rgba(255,255,255,0.2) 225deg, transparent 270deg)'}}></div>
<div className="absolute left-1/2 top-1/2 z-20 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black shadow-[inset_0_2px_8px_rgba(0,0,0,1)]">
<div className="absolute inset-[3px] rounded-full bg-emerald-400 animate-pulse" style={{animationDuration: '2s', boxShadow: '0 0 10px rgba(52,211,153,0.6)'}}></div>
</div>
</div>
<div className="absolute -right-2 top-8 z-10 hidden h-48 w-48 origin-[top_right] rotate-[15deg] drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] md:block sm:-right-4 sm:-top-4 transition-transform duration-1000 ease-in-out hover:rotate-[20deg]">
<div className="absolute right-0 top-0 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-zinc-800 to-zinc-950 shadow-2xl backdrop-blur-md">
<div className="flex h-8 w-8 items-center justify-center rounded-full border border-black bg-zinc-900 shadow-inner">
<div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
</div>
</div>
<div className="absolute right-7 top-7 h-40 w-1.5 origin-[center_top] rounded-full bg-gradient-to-r from-zinc-600 via-zinc-400 to-zinc-700 shadow-xl">
<div className="absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-500 bg-zinc-800 shadow-md"></div>
<div className="absolute bottom-0 left-1/2 h-10 w-5 -translate-x-1/2 translate-y-[90%] rounded-sm border border-white/10 bg-gradient-to-b from-zinc-800 to-black shadow-lg flex items-end justify-center pb-1">
<div className="h-1 w-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)] animate-pulse" style={{animationDuration: '0.5s'}}></div>
</div>
</div>
</div>
</div>
<div className="floating-card absolute right-4 top-10 z-20 w-48 rounded-2xl border border-white/10 bg-[#0a0a0c]/80 p-5 shadow-[0_20px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:right-8 sm:w-52 transform transition-transform hover:-translate-y-1 duration-300">
<div className="mb-3 flex items-center justify-between">
<span className="text-[0.65rem] font-normal uppercase tracking-widest text-white/50 font-dm-sans">
                    Tempo Match
                  </span>
<span className="relative flex h-1.5 w-1.5">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
</span>
</div>
<p className="flex items-baseline gap-1 text-3xl tracking-tight text-white font-anton font-normal">
                  128
                  <span className="text-sm text-white/40 font-dm-sans">BPM</span>
</p>
<div className="mt-4 flex h-8 items-end justify-between gap-[2px]">
<div className="h-[30%] w-full rounded-t-sm bg-emerald-500/40 animate-[pulse_0.8s_ease-in-out_infinite_alternate]"></div>
<div className="h-[60%] w-full rounded-t-sm bg-emerald-500/60 animate-[pulse_1.2s_ease-in-out_infinite_alternate]"></div>
<div className="h-[90%] w-full rounded-t-sm bg-emerald-400/80 animate-[pulse_0.9s_ease-in-out_infinite_alternate]"></div>
<div className="h-[40%] w-full rounded-t-sm bg-white/80 animate-[pulse_1.5s_ease-in-out_infinite_alternate]"></div>
<div className="h-[80%] w-full rounded-t-sm bg-violet-400/80 animate-[pulse_1.1s_ease-in-out_infinite_alternate]"></div>
<div className="h-[50%] w-full rounded-t-sm bg-violet-500/60 animate-[pulse_1.3s_ease-in-out_infinite_alternate]"></div>
<div className="h-[70%] w-full rounded-t-sm bg-violet-500/40 animate-[pulse_0.7s_ease-in-out_infinite_alternate]"></div>
</div>
</div>
<div className="floating-card absolute bottom-10 left-4 z-20 flex items-center gap-4 rounded-full border border-white/10 bg-[#0a0a0c]/80 px-5 py-3.5 shadow-[0_20px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:left-8 transform transition-transform hover:-translate-y-1 duration-300">
<div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-emerald-500/10 to-violet-500/10">
<iconify-icon className="text-base text-emerald-300" icon="solar:volume-loud-linear" strokeWidth="1.5"></iconify-icon>
<div className="absolute inset-0 animate-spin rounded-full border border-b-transparent border-l-transparent border-r-transparent border-t-emerald-400/50 opacity-60" style={{animationDuration: '3s'}}></div>
</div>
<div>
<p className="text-[0.8rem] font-normal tracking-tight text-white font-dm-sans">
                    Master Volume
                  </p>
<p className="mt-0.5 text-[0.65rem] font-light text-white/40 font-dm-sans">
                    Perfecting frequencies
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section aria-label="Client signals" className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
<div className="relative border border-white/[0.08] bg-white/[0.025] backdrop-blur-sm">
<span className="absolute left-0 top-0 h-4 w-4 border-l border-t border-white/20"></span>
<span className="absolute right-0 top-0 h-4 w-4 border-r border-t border-white/20"></span>
<span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-white/20"></span>
<span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-white/20"></span>
<div className="grid divide-y divide-white/[0.08] md:grid-cols-5 md:divide-x md:divide-y-0">
<div className="reveal-cell p-6">
<p className="text-xs uppercase tracking-[0.24em] font-normal text-white/30 font-dm-sans">
                Signal
              </p>
<p className="mt-3 text-lg font-medium tracking-tight text-white/80 font-dm-sans">
                Spotify
              </p>
</div>
<div className="reveal-cell p-6">
<p className="text-xs uppercase tracking-[0.24em] font-normal text-white/30 font-dm-sans">
                Partner
              </p>
<p className="mt-3 text-lg font-medium tracking-tight text-white/80 font-dm-sans">
                SoundCloud
              </p>
</div>
<div className="reveal-cell p-6">
<p className="text-xs uppercase tracking-[0.24em] font-normal text-white/30 font-dm-sans">
                Stack
              </p>
<p className="mt-3 text-lg font-medium tracking-tight text-white/80 font-dm-sans">
                Beatport
              </p>
</div>
<div className="reveal-cell p-6">
<p className="text-xs uppercase tracking-[0.24em] font-normal text-white/30 font-dm-sans">
                Network
              </p>
<p className="mt-3 text-lg font-medium tracking-tight text-white/80 font-dm-sans">
                Tidal
              </p>
</div>
<div className="reveal-cell p-6">
<p className="text-xs uppercase tracking-[0.24em] font-normal text-white/30 font-dm-sans">
                Studio
              </p>
<p className="mt-3 text-lg font-medium tracking-tight text-white/80 font-dm-sans">
                Apple Music
              </p>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8" id="systems">
<div className="relative overflow-hidden border border-white/[0.08] bg-[#09090b]">
<span className="absolute left-0 top-0 z-10 h-5 w-5 border-l border-t border-emerald-300/60"></span>
<span className="absolute right-0 top-0 z-10 h-5 w-5 border-r border-t border-violet-300/60"></span>
<span className="absolute bottom-0 left-0 z-10 h-5 w-5 border-b border-l border-white/20"></span>
<span className="absolute bottom-0 right-0 z-10 h-5 w-5 border-b border-r border-white/20"></span>
<div className="grid lg:grid-cols-[0.88fr_1.12fr]">
<div className="border-b border-white/[0.08] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
<p className="section-kicker text-xs font-normal uppercase tracking-[0.24em] text-emerald-200/70 font-dm-sans">
                Performance map
              </p>
<h2 className="section-title mt-6 max-w-xl text-5xl leading-none tracking-tighter text-white sm:text-6xl lg:text-7xl font-anton font-normal">
                Curated audio, expressive beats.
              </h2>
<p className="section-copy mt-7 max-w-md text-sm leading-6 font-normal text-white/50 font-dm-sans">
                Rhythm, melody, track selection, and mixing are treated as one
                continuous journey: measured by the crowd, mixed with intent,
                and built to scale.
              </p>
<div className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08]">
<div className="bg-[#09090b] p-5">
<iconify-icon className="text-2xl text-emerald-200" icon="solar:layers-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<p className="mt-4 text-sm font-medium text-white font-dm-sans">Live mixing</p>
<p className="mt-2 text-xs leading-5 font-normal text-white/50 font-dm-sans">
                    Seamless transitions and live mashups.
                  </p>
</div>
<div className="bg-[#09090b] p-5">
<iconify-icon className="text-2xl text-violet-200" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
<p className="mt-4 text-sm font-medium text-white font-dm-sans">
                    Crowd reading
                  </p>
<p className="mt-2 text-xs leading-5 font-normal text-white/50 font-dm-sans">
                    Adapting to the floor's energy.
                  </p>
</div>
<div className="bg-[#09090b] p-5">
<iconify-icon className="text-2xl text-cyan-200" icon="solar:palette-round-linear" strokeWidth="1.5"></iconify-icon>
<p className="mt-4 text-sm font-medium text-white font-dm-sans">Curation</p>
<p className="mt-2 text-xs leading-5 font-normal text-white/50 font-dm-sans">
                    House, techno, disco, and more.
                  </p>
</div>
<div className="bg-[#09090b] p-5">
<iconify-icon className="text-2xl text-amber-200" icon="solar:programming-linear" strokeWidth="1.5"></iconify-icon>
<p className="mt-4 text-sm font-medium text-white font-dm-sans">Live sets</p>
<p className="mt-2 text-xs leading-5 font-normal text-white/50 font-dm-sans">
                    Responsive crowd interaction support.
                  </p>
</div>
</div>
</div>
<div className="relative min-h-[42rem] overflow-hidden p-6 sm:p-8 lg:p-10">
<video aria-label="Abstract gradient hills" className="absolute inset-0 h-full w-full object-cover opacity-10" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2021fc35-0b6a-4881-9f39-9f7aaf94c6bd_1600w.webp" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/2e815afb-cac1-4c01-90e1-cf3810246e35/1779301850629-aeae40d8-350d-45dc-96c4-5b7a40b59078.mp4"></video>
<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.06) 0.0625rem, transparent 0.0625rem), linear-gradient(to bottom, rgba(255,255,255,0.06) 0.0625rem, transparent 0.0625rem)', backgroundSize: '4rem 4rem'}}></div>
<div className="relative h-full min-h-[36rem]">
<div className="float-pill absolute left-2 top-10 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-6 py-4 text-xs font-normal uppercase tracking-[0.2em] text-emerald-100 shadow-[0_18px_60px_rgba(16,185,129,0.12)] backdrop-blur-xl font-dm-sans">
                  Beatmatching
                </div>
<div className="float-pill absolute right-8 top-20 rounded-full border border-white/10 bg-white/[0.06] px-6 py-4 text-xs font-normal uppercase tracking-[0.2em] text-white/80 backdrop-blur-xl font-dm-sans">
                  Harmonic mixing
                </div>
<div className="float-pill absolute left-16 top-1/3 rounded-full border border-violet-300/20 bg-violet-300/10 px-6 py-4 text-xs font-normal uppercase tracking-[0.2em] text-violet-100 backdrop-blur-xl font-dm-sans">
                  Tempo control
                </div>
<div className="float-pill absolute right-2 top-1/2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-6 py-4 text-xs font-normal uppercase tracking-[0.2em] text-cyan-100 backdrop-blur-xl font-dm-sans">
                  Live remixing
                </div>
<div className="float-pill absolute bottom-24 left-8 rounded-full border border-white/10 bg-white/[0.06] px-6 py-4 text-xs font-normal uppercase tracking-[0.2em] text-white/80 backdrop-blur-xl font-dm-sans">
                  EQ sculpting
                </div>
<div className="float-pill absolute bottom-16 right-14 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-6 py-4 text-xs font-normal uppercase tracking-[0.2em] text-emerald-100 backdrop-blur-xl font-dm-sans">
                  Genre blending
                </div>
<div className="absolute left-1/2 top-1/2 grid h-44 w-44 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/[0.08] bg-black/30 backdrop-blur-xl sm:h-56 sm:w-56">
<div className="absolute inset-3 rounded-full border border-dashed border-white/10"></div>
<div className="grid h-24 w-24 place-items-center rounded-full bg-white text-black shadow-[0_0_80px_rgba(255,255,255,0.12)] sm:h-28 sm:w-28">
<iconify-icon className="text-5xl" icon="solar:star-rings-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="float-badge absolute bottom-8 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full border border-white/10 bg-black/50 backdrop-blur-xl">
<div className="absolute inset-3 rounded-full border border-white/10"></div>
<div className="flex h-full items-center justify-center">
<iconify-icon className="text-4xl text-white/80" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8" id="work">
<div className="relative border border-white/[0.08] bg-[#09090b]">
<span className="absolute left-0 top-0 h-5 w-5 border-l border-t border-white/20"></span>
<span className="absolute right-0 top-0 h-5 w-5 border-r border-t border-white/20"></span>
<span className="absolute bottom-0 left-0 h-5 w-5 border-b border-l border-white/20"></span>
<span className="absolute bottom-0 right-0 h-5 w-5 border-b border-r border-white/20"></span>
<div className="grid lg:grid-cols-[0.75fr_1.25fr]">
<div className="border-b border-white/[0.08] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
<p className="section-kicker text-xs font-normal uppercase tracking-[0.24em] text-violet-200/70 font-dm-sans">
                Selected sets
              </p>
<h2 className="section-title mt-6 text-5xl leading-none tracking-tighter text-white sm:text-6xl font-anton font-normal">
                Sets with a measurable pulse.
              </h2>
<p className="section-copy mt-7 max-w-sm text-sm leading-6 font-normal text-white/50 font-dm-sans">
                Each performance becomes a living audio system: consistent
                grooves, sharp drops, and kinetic frequencies that guide the
                dancefloor.
              </p>
<a className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-xs font-normal text-white/80 transition hover:bg-white hover:text-black font-dm-sans" href="#contact">
                Request portfolio
                <iconify-icon className="text-lg" icon="solar:document-add-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2">
<article className="work-card group relative min-h-[27rem] overflow-hidden border-b border-white/[0.08] p-5 md:border-r">
<img alt="Vibrant club lighting and stage visual concept" className="absolute inset-0 h-full w-full object-cover opacity-45 transition duration-700 group-hover:scale-105 group-hover:opacity-65" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bf695b90-3c84-43dc-961f-aebc0f236169_3840w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="relative flex h-full flex-col justify-between">
<div className="flex items-center justify-between text-xs text-white/50">
<span className="font-dm-sans">01</span>
<iconify-icon className="text-xl text-white/70" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-xs uppercase tracking-[0.22em] font-normal text-emerald-200/80 font-dm-sans">
                      Club sets
                    </p>
<h3 className="mt-3 text-3xl leading-tight tracking-tight text-white font-anton font-normal">
                      A mix that hits like a mainstage headliner.
                    </h3>
</div>
</div>
</article>
<article className="work-card group relative min-h-[27rem] overflow-hidden border-b border-white/[0.08] p-5">
<img alt="Ambient studio setup at dusk" className="absolute inset-0 h-full w-full object-cover opacity-42 transition duration-700 group-hover:scale-105 group-hover:opacity-62" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0c61c837-b5c8-44f7-b303-49bbd9ddfdbd_3840w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="relative flex h-full flex-col justify-between">
<div className="flex items-center justify-between text-xs text-white/50">
<span className="font-dm-sans">02</span>
<iconify-icon className="text-xl text-white/70" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-xs uppercase tracking-[0.22em] font-normal text-cyan-200/80 font-dm-sans">
                      Lounge mix
                    </p>
<h3 className="mt-3 text-3xl leading-tight tracking-tight text-white font-anton font-normal">
                      Immersive audio flow for evening relaxation.
                    </h3>
</div>
</div>
</article>
<article className="work-card group relative min-h-[27rem] overflow-hidden p-5 md:border-r border-b md:border-b-0 border-white/[0.08]">
<video aria-label="Abstract blue sound wave at dusk" className="absolute inset-0 h-full w-full object-cover opacity-42 transition duration-700 group-hover:scale-105 group-hover:opacity-62" data-aura-generated-video="true" data-aura-video-preset="hover" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c407934f-adeb-4738-8940-062c7869a672_3840w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/2e815afb-cac1-4c01-90e1-cf3810246e35/1779304029785-7ac7925b-0661-4350-a9e0-42eae9f6c699.mp4"></video>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="relative flex h-full flex-col justify-between">
<div className="flex items-center justify-between text-xs text-white/50">
<span className="font-dm-sans">03</span>
<iconify-icon className="text-xl text-white/70" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-xs uppercase tracking-[0.22em] font-normal text-violet-200/80 font-dm-sans">
                      Day parties
                    </p>
<h3 className="mt-3 text-3xl leading-tight tracking-tight text-white font-anton font-normal">
                      Chill grooves for outdoor sessions.
                    </h3>
</div>
</div>
</article>
<article className="work-card group relative min-h-[27rem] overflow-hidden p-5">
<img alt="Futuristic deconstructed pyramid" className="absolute inset-0 h-full w-full object-cover opacity-42 transition duration-700 group-hover:scale-105 group-hover:opacity-62" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8a336581-3474-4961-9037-d847ee705dac_3840w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="relative flex h-full flex-col justify-between">
<div className="flex items-center justify-between text-xs text-white/50">
<span className="font-dm-sans">04</span>
<iconify-icon className="text-xl text-white/70" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-xs uppercase tracking-[0.22em] font-normal text-amber-200/80 font-dm-sans">
                      Warehouse rave
                    </p>
<h3 className="mt-3 text-3xl leading-tight tracking-tight text-white font-anton font-normal">
                      A high-energy mix built for the underground.
                    </h3>
</div>
</div>
</article>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8" id="process">
<div className="relative overflow-hidden border border-white/[0.08] bg-[#09090b]">
<span className="absolute left-0 top-0 h-5 w-5 border-l border-t border-emerald-300/60"></span>
<span className="absolute right-0 top-0 h-5 w-5 border-r border-t border-violet-300/60"></span>
<span className="absolute bottom-0 left-0 h-5 w-5 border-b border-l border-white/20"></span>
<span className="absolute bottom-0 right-0 h-5 w-5 border-b border-r border-white/20"></span>
<div className="grid lg:grid-cols-[1fr_1fr]">
<div className="border-b border-white/[0.08] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
<p className="section-kicker text-xs font-normal uppercase tracking-[0.24em] text-emerald-200/70 font-dm-sans">
                Performance protocol
              </p>
<h2 className="section-title mt-6 text-5xl leading-none tracking-tighter text-white sm:text-6xl font-anton font-normal">
                A clean sequence from booking to stage.
              </h2>
</div>
<div className="divide-y divide-white/[0.08]">
<div className="process-row grid gap-4 p-6 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-8">
<span className="text-sm font-normal text-white/35 font-dm-sans">01</span>
<div>
<h3 className="text-2xl tracking-tight text-white font-anton font-normal">
                    Map the vibe
                  </h3>
<p className="mt-2 text-sm leading-6 font-normal text-white/50 font-dm-sans">
                    We define BPM, genre style, crowd demographics, and sonic
                    tension before a single track is played.
                  </p>
</div>
<iconify-icon className="text-3xl text-emerald-200" icon="solar:map-point-wave-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="process-row grid gap-4 p-6 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-8">
<span className="text-sm font-normal text-white/35 font-dm-sans">02</span>
<div>
<h3 className="text-2xl tracking-tight text-white font-anton font-normal">
                    Curate the crates
                  </h3>
<p className="mt-2 text-sm leading-6 font-normal text-white/50 font-dm-sans">
                    Deep cuts, classics, anthems, and tools are assembled into a
                    durable crate for mixing velocity.
                  </p>
</div>
<iconify-icon className="text-3xl text-violet-200" icon="solar:widget-5-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="process-row grid gap-4 p-6 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-8">
<span className="text-sm font-normal text-white/35 font-dm-sans">03</span>
<div>
<h3 className="text-2xl tracking-tight text-white font-anton font-normal">
                    Mix the journey
                  </h3>
<p className="mt-2 text-sm leading-6 font-normal text-white/50 font-dm-sans">
                    Live, on-the-fly selections bring drops, transitions, and
                    micro-edits into one coherent musical language.
                  </p>
</div>
<iconify-icon className="text-3xl text-cyan-200" icon="solar:rewind-forward-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="process-row grid gap-4 p-6 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-8">
<span className="text-sm font-normal text-white/35 font-dm-sans">04</span>
<div>
<h3 className="text-2xl tracking-tight text-white font-anton font-normal">
                    Deliver the energy
                  </h3>
<p className="mt-2 text-sm leading-6 font-normal text-white/50 font-dm-sans">
                    The final output is a packed dancefloor, seamless
                    transitions, and club-ready energy.
                  </p>
</div>
<iconify-icon className="text-3xl text-amber-200" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8" id="proof">
<div className="relative overflow-hidden border border-white/[0.08] bg-[#d7ffe9] text-[#07100b]">
<span className="absolute left-0 top-0 h-5 w-5 border-l border-t border-[#07100b]/25"></span>
<span className="absolute right-0 top-0 h-5 w-5 border-r border-t border-[#07100b]/25"></span>
<span className="absolute bottom-0 left-0 h-5 w-5 border-b border-l border-[#07100b]/25"></span>
<span className="absolute bottom-0 right-0 h-5 w-5 border-b border-r border-[#07100b]/25"></span>
<div className="absolute inset-0 opacity-[0.14]" style={{backgroundImage: 'linear-gradient(135deg, rgba(7,16,11,0.5) 0.0625rem, transparent 0.0625rem)', backgroundSize: '2.5rem 2.5rem'}}></div>
<div className="relative grid lg:grid-cols-[0.95fr_1.05fr]">
<div className="border-b border-[#07100b]/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
<p className="section-kicker text-xs font-medium uppercase tracking-[0.24em] text-[#047857] font-dm-sans">
                DJ note
              </p>
<h2 className="section-title mt-6 text-5xl leading-none tracking-tighter text-[#07100b] sm:text-6xl font-anton font-normal">
                “The sets completely transformed the energy of the room.”
              </h2>
<p className="section-copy mt-7 max-w-md text-sm leading-6 font-normal text-[#07100b]/60 font-dm-sans">
                PixelCraft rebuilt our events around a strict rhythmic grid and
                a masterful curation system. The result was pure energy, clearer
                musical stories, and a DJ that could keep spinning without
                breaking the vibe.
              </p>
<div className="mt-10 flex items-center gap-4">
<div className="h-14 w-14 overflow-hidden rounded-full border border-[#07100b]/10 bg-white">
<img alt="Portrait of client" className="h-full w-full object-cover object-top grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/72adc0f8-ad1f-4732-a5bf-c000b45152a2_320w.webp"/>
</div>
<div>
<p className="text-sm font-medium text-[#07100b] font-dm-sans">Mara Ellison</p>
<p className="text-xs font-normal text-[#07100b]/50 font-dm-sans">
                    Lead Producer, Alloy Records
                  </p>
</div>
</div>
</div>
<div className="relative min-h-[34rem] p-6 sm:p-8 lg:p-10">
<div className="absolute right-8 top-8 hidden rounded-full border border-[#07100b]/10 bg-white/40 px-4 py-2 text-xs font-normal text-[#07100b]/60 backdrop-blur md:block font-dm-sans">
                retention +38%
              </div>
<div className="relative mx-auto flex h-full max-w-xl items-center justify-center">
<div className="proof-card absolute left-0 top-14 hidden w-44 rounded-3xl border border-[#07100b]/10 bg-white/50 p-4 shadow-xl backdrop-blur md:block">
<iconify-icon className="text-3xl text-[#047857]" icon="solar:chart-2-linear" strokeWidth="1.5"></iconify-icon>
<p className="mt-8 text-3xl tracking-tight font-anton font-normal">2.7x</p>
<p className="mt-1 text-xs font-normal text-[#07100b]/60 font-dm-sans">
                    crowd energy lift
                  </p>
</div>
<div className="proof-card relative z-10 w-full max-w-sm overflow-hidden rounded-[2rem] border border-[#07100b]/10 bg-[#07100b] p-3 shadow-2xl">
<div className="overflow-hidden rounded-[1.5rem]">
<img alt="Editorial portrait" className="aspect-[4/5] w-full object-cover object-top grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e627f6f0-774f-4021-aee1-57cda33a000e_3840w.png"/>
</div>
<div className="p-5 text-white">
<div className="flex items-center justify-between">
<p className="text-xs uppercase tracking-[0.22em] font-normal text-emerald-200/70 font-dm-sans">
                        Stage signal
                      </p>
<iconify-icon className="text-xl text-emerald-200" icon="solar:verified-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="mt-4 text-2xl leading-tight tracking-tight font-anton font-normal">
                      Their live curation created the perfect vibe from the
                      first track.
                    </p>
</div>
</div>
<div className="proof-card absolute bottom-10 right-0 hidden w-48 rounded-3xl border border-[#07100b]/10 bg-white/55 p-4 shadow-xl backdrop-blur sm:block">
<div className="flex -space-x-3">
<img alt="Team member portrait" className="h-10 w-10 rounded-full border-2 border-white object-cover object-top grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_1600w.jpg"/>
<img alt="Team member portrait" className="h-10 w-10 rounded-full border-2 border-white object-cover object-top grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eca707cc-a5b7-439a-b4fd-247f6106c2e1_1600w.jpg"/>
<img alt="Team member portrait" className="h-10 w-10 rounded-full border-2 border-white object-cover object-top grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c92852bb-a510-405a-85ab-ffa0fde136a4_1600w.jpg"/>
</div>
<p className="mt-6 text-xs leading-5 font-normal text-[#07100b]/60 font-dm-sans">
                    Designed with producers, DJs, and sound engineers in one
                    shared rhythm.
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="relative z-20 mx-auto max-w-7xl px-4 pb-4 pt-4 sm:px-6 lg:px-8" id="contact">
<div className="relative border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8 lg:p-10 backdrop-blur-sm">
<span className="absolute left-0 top-0 h-5 w-5 border-l border-t border-emerald-300/60"></span>
<span className="absolute right-0 top-0 h-5 w-5 border-r border-t border-violet-300/60"></span>
<span className="absolute bottom-0 left-0 h-5 w-5 border-b border-l border-white/20"></span>
<span className="absolute bottom-0 right-0 h-5 w-5 border-b border-r border-white/20"></span>
<div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
<div>
<p className="text-xs font-normal uppercase tracking-[0.24em] text-white/35 font-dm-sans">
              Open booth window
            </p>
<h2 className="mt-5 max-w-3xl text-5xl leading-none tracking-tighter text-white sm:text-6xl font-anton font-normal">
              Bring your next DJ set into focus.
            </h2>
</div>
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-normal text-black transition hover:-translate-y-0.5 hover:bg-emerald-100 font-dm-sans" href="mailto:studio@example.com">
            studio@example.com
            <iconify-icon className="text-lg" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/[0.08] pt-6 text-xs font-normal text-white/40 sm:flex-row">
<p className="font-dm-sans">© 2026 PixelCraft DJ Services. All rights reserved.</p>
<div className="flex gap-5">
<a className="transition hover:text-white font-dm-sans" href="#">Privacy</a>
<a className="transition hover:text-white font-dm-sans" href="#">Terms</a>
<a className="transition hover:text-white font-dm-sans" href="#">Status</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
