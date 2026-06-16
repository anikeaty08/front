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



        document.addEventListener("DOMContentLoaded", () => {
            
            // 1. Smooth Scrolling with Lenis
            const lenis = new Lenis({
                duration: 1.5,
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

            // Connect Lenis to ScrollTrigger
            lenis.on('scroll', ScrollTrigger.update)
            gsap.ticker.add((time) => {
                lenis.raf(time * 1000)
            })
            gsap.ticker.lagSmoothing(0)

            // 2. Sequential Reveal Logic (Fallback + Intersection Observer)
            const revealItems = document.querySelectorAll('.aura-reveal, .aura-words');
            
            // Setup delays for words
            document.querySelectorAll('.aura-words').forEach(group => {
                group.querySelectorAll('.aura-word').forEach((word, index) => {
                    word.style.transitionDelay = `${index * 80}ms`;
                });
            });

            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        revealObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

            revealItems.forEach(item => revealObserver.observe(item));

            // 3. GSAP Specific Animations
            gsap.registerPlugin(ScrollTrigger);

            // Hero Image Parallax slightly on scroll
            gsap.to("#hero-bg", {
                yPercent: 15,
                ease: "none",
                scrollTrigger: {
                    trigger: "#hero",
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

            // Journey Sticky Section setup
            const journeySticky = document.querySelector("#journey-sticky");
            const journeyCards = gsap.utils.toArray(".journey-card");

            if (journeySticky && journeyCards.length && window.innerWidth >= 1024) {
                ScrollTrigger.create({
                    trigger: "#journey",
                    start: "top 10%",
                    end: "bottom 85%",
                    pin: journeySticky,
                    pinSpacing: false
                });

                journeyCards.forEach((card, i) => {
                    gsap.fromTo(card,
                        { opacity: 0, y: 100, scale: 0.95 },
                        { 
                            opacity: 1, y: 0, scale: 1, 
                            duration: 1.5, ease: "power3.out",
                            scrollTrigger: {
                                trigger: card,
                                start: "top 85%"
                            }
                        }
                    );
                });
            }

            // 4. Magnetic Buttons (Awwwards Polish)
            const magneticButtons = document.querySelectorAll('.magnetic-btn');
            
            magneticButtons.forEach(btn => {
                btn.addEventListener('mousemove', (e) => {
                    const rect = btn.getBoundingClientRect();
                    const h = rect.width / 2;
                    const v = rect.height / 2;
                    const x = e.clientX - rect.left - h;
                    const y = e.clientY - rect.top - v;
                    
                    // Reduce movement intensity
                    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
                });

                btn.addEventListener('mouseleave', () => {
                    btn.style.transform = `translate(0px, 0px)`;
                });
            });

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
      

<div className="fixed inset-x-0 top-0 z-50 pointer-events-none">
<nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 sm:px-6 lg:px-8 pointer-events-auto">
<a className="group flex items-center gap-3 aura-reveal is-visible" href="#">
<span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-medium tracking-tighter shadow-2xl backdrop-blur-xl transition duration-300 group-hover:bg-white/15 border-gradient font-manrope">
                    SA
                </span>
<span className="hidden text-xs font-normal uppercase tracking-[0.28rem] text-white/80 sm:block font-manrope">
                    Samsara
                </span>
</a>
<div className="hidden items-center rounded-full bg-white/[0.05] p-1 shadow-2xl backdrop-blur-2xl md:flex border-gradient aura-reveal is-visible">
<a className="rounded-full px-5 py-2 text-xs font-normal text-white/70 transition hover:bg-white/10 hover:text-white font-manrope" href="#features">Sanctuary</a>
<a className="rounded-full px-5 py-2 text-xs font-normal text-white/70 transition hover:bg-white/10 hover:text-white font-manrope" href="#journey">Journey</a>
<a className="rounded-full px-5 py-2 text-xs font-normal text-white/70 transition hover:bg-white/10 hover:text-white font-manrope" href="#story">Philosophy</a>
<a className="rounded-full px-5 py-2 text-xs font-normal text-white/70 transition hover:bg-white/10 hover:text-white font-manrope" href="#about">Guides</a>
</div>
<a className="magnetic-btn hidden items-center gap-2 rounded-full border border-white/15 bg-white px-5 py-2.5 text-xs font-medium text-stone-950 shadow-2xl transition-colors duration-300 hover:bg-amber-50 sm:flex aura-reveal is-visible font-manrope" href="#reserve">
                Reserve space
                <iconify-icon className="text-base" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</nav>
</div>
<main className="relative w-screen overflow-hidden">

<section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden" id="hero">
<div className="absolute inset-0 z-0">
<video aria-label="Yoga Retreat Landscape" className="h-full w-full object-cover scale-105" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" id="hero-bg" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7b0b3e84-0250-4a0b-bdaf-ede3a2b16158_3840w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/9109ecbb-cdc4-4815-981e-2ea83be13765/1779094555154-122c8034-f41c-41f2-9d32-5939f1631ff1.mp4"></video>
<div className="absolute inset-0 bg-gradient-to-b from-stone-950/40 via-stone-950/20 to-stone-950"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(12,10,9,0.8)_100%)]"></div>
</div>
<div className="pointer-events-none absolute -left-24 top-24 h-96 w-96 rounded-full bg-amber-200/20 blur-[100px]"></div>
<div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-5 text-center pt-20">
<div className="mb-8 inline-flex items-center gap-3 rounded-full bg-white/[0.08] px-4 py-2 shadow-2xl backdrop-blur-2xl border-gradient aura-reveal is-visible">
<span className="relative flex h-2 w-2">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-200 opacity-75"></span>
<span className="relative inline-flex h-2 w-2 rounded-full bg-amber-100"></span>
</span>
<span className="text-xs font-normal uppercase tracking-[0.24rem] text-white/80 font-manrope">
                        Autumn Equinox Retreat Open
                    </span>
</div>
<h1 className="max-w-5xl text-5xl tracking-tight text-white sm:text-7xl md:text-8xl font-gloock font-normal aura-words is-visible">
<span className="aura-word font-fraunces font-medium" style={{transitionDelay: '0ms'}}>Return</span>
<span className="aura-word font-fraunces font-medium" style={{transitionDelay: '80ms'}}>to</span>
<span className="aura-word font-fraunces font-medium" style={{transitionDelay: '160ms'}}>the</span>
<span className="block mt-2">
<span className="aura-word text-white/90 font-fraunces font-medium" style={{transitionDelay: '240ms'}}>quiet</span>
<span className="aura-word text-amber-100 pr-2 font-fraunces font-medium" style={{transitionDelay: '320ms'}}>luxury</span>
<span className="aura-word font-fraunces font-medium" style={{transitionDelay: '400ms'}}>of</span>
<span className="aura-word font-fraunces font-medium" style={{transitionDelay: '480ms'}}>stillness.</span>
</span>
</h1>
<p className="mt-8 max-w-2xl text-base leading-relaxed text-white/60 font-light aura-reveal is-visible font-manrope">
                    A curated somatic journey designed for the modern soul seeking space, alignment, and deep atmospheric restoration at the edge of the world.
                </p>
<div className="mt-12 flex flex-col gap-4 sm:flex-row aura-reveal is-visible">
<a className="magnetic-btn group inline-flex items-center justify-center gap-4 rounded-full bg-white px-8 py-4 text-sm font-medium text-stone-950 shadow-2xl transition duration-300 hover:bg-amber-50 font-manrope" href="#journey">
                        Explore the journey
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-950 text-white transition duration-300 group-hover:rotate-45">
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
</div>
</div>
<div className="absolute bottom-10 left-0 right-0 z-10 mx-auto max-w-7xl px-5">
<div className="flex items-center justify-between border-t border-white/10 pt-6 aura-reveal is-visible">
<div className="flex gap-12 text-xs font-normal uppercase tracking-[0.2rem] text-white/40">
<span className="hidden sm:block font-manrope">Breathwork</span>
<span className="hidden sm:block font-manrope">Somatic Release</span>
<span className="font-manrope">Meditation</span>
</div>
<a className="flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.05] backdrop-blur-xl border-gradient hover:bg-white/[0.1] transition-colors" href="#features">
<iconify-icon className="text-xl text-white/60" icon="solar:alt-arrow-down-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="relative bg-stone-950 py-24 px-5" id="trusted">
<div className="mx-auto max-w-7xl flex flex-col items-center justify-center gap-12">
<p className="text-xs font-medium uppercase tracking-[0.28rem] text-amber-100/40 aura-reveal is-visible font-manrope">Recognized globally for atmospheric healing</p>
<div className="flex flex-wrap items-center justify-center gap-16 md:gap-32 opacity-50 aura-reveal is-visible">
<span className="text-xl tracking-[0.3em] uppercase font-fraunces font-medium">Vogue</span>
<span className="text-xl tracking-[0.3em] uppercase font-fraunces font-medium">Kinfolk</span>
<span className="text-xl tracking-[0.3em] uppercase font-fraunces font-medium">Condé Nast</span>
<span className="text-xl tracking-[0.3em] uppercase font-fraunces font-medium">Tatler</span>
</div>
</div>
</section>

<section className="relative px-5 py-32 sm:px-6 lg:px-8 bg-stone-950 overflow-hidden" id="features">
<div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-amber-100/5 blur-[120px]"></div>
<div className="mx-auto max-w-7xl">
<div className="mb-20 max-w-2xl aura-reveal is-visible">
<p className="text-xs font-medium uppercase tracking-[0.28rem] text-amber-100/60 font-manrope">The Sanctuary</p>
<h2 className="mt-6 text-4xl tracking-tight text-white sm:text-5xl font-fraunces font-medium">
                        Cultivate your inner landscape.
                    </h2>
</div>
<div className="grid gap-6 md:grid-cols-3">
<article className="group rounded-[2.5rem] bg-white/[0.03] p-10 border-gradient transition-colors hover:bg-white/[0.05] aura-reveal is-visible">
<div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/[0.05] border-gradient">
<iconify-icon className="text-2xl text-amber-100/80" icon="solar:wind-linear"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight mb-4 font-fraunces font-medium">Pranayama &amp; Breath</h3>
<p className="text-sm leading-relaxed text-white/50 font-light font-manrope">
                            Master the subtle currents of vital energy. Daily guided sessions to expand capacity, clear stagnation, and root your nervous system in profound safety.
                        </p>
</article>
<article className="group rounded-[2.5rem] bg-white/[0.03] p-10 border-gradient transition-colors hover:bg-white/[0.05] aura-reveal is-visible">
<div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/[0.05] border-gradient">
<iconify-icon className="text-2xl text-amber-100/80" icon="solar:leaf-linear"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight mb-4 font-fraunces font-medium">Somatic Release</h3>
<p className="text-sm leading-relaxed text-white/50 font-light font-manrope">
                            Fluid, intuitive movement designed not for form, but for feeling. Melt structural tension and process residual stress stored deep within the fascia.
                        </p>
</article>
<article className="group rounded-[2.5rem] bg-white/[0.03] p-10 border-gradient transition-colors hover:bg-white/[0.05] aura-reveal is-visible">
<div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/[0.05] border-gradient">
<iconify-icon className="text-2xl text-amber-100/80" icon="solar:moon-stars-linear"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight mb-4 font-fraunces font-medium">Deep Integration</h3>
<p className="text-sm leading-relaxed text-white/50 font-light font-manrope">
                            Extended Yoga Nidra and soundscapes beneath the stars. A curated space where the subconscious reorganizes and cellular healing takes precedence.
                        </p>
</article>
</div>
</div>
</section>

<section className="relative overflow-hidden px-5 py-32 sm:px-6 lg:px-8 bg-stone-950" id="journey">
<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-16 lg:gap-24 items-start relative">
<div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: '10', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: 'auto', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '472px', height: '330px', padding: '0px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: '10', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '472px', height: '330px', padding: '0px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: '10', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '472px', height: '330px', padding: '0px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: '10', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '472px', height: '330px', padding: '0px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: '10', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '472px', height: '330px', padding: '0px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: '10', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '472px', height: '330px', padding: '0px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: '10', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '472px', height: '330px', padding: '0px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: '10', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '472px', height: '330px', padding: '0px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: '10', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '472px', height: '330px', padding: '0px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: '10', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '472px', height: '330px', padding: '0px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: '10', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '472px', height: '330px', padding: '0px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: '10', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '472px', height: '330px', padding: '0px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: '10', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '472px', height: '330px', padding: '0px'}}><div className="lg:w-5/12 flex flex-col gap-8 pb-10 lg:pb-0 z-10 will-change-transform" id="journey-sticky" style={{inset: '0px auto auto 0px', margin: '0px', maxWidth: '472.078px', width: '472.078px', maxHeight: '330px', height: '330px', padding: '0px'}}>
<div>
<p className="text-xs font-medium uppercase tracking-[0.28rem] text-amber-100/60 font-manrope">
                            The Rhythm
                        </p>
<h2 className="mt-6 text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1] font-fraunces font-medium">
                            A choreography of tension and release.
                        </h2>
</div>
<p className="max-w-md text-base leading-relaxed text-white/50 font-light font-manrope">
                        Days here do not rush. They unfold. We follow the natural arc of the sun, blending intense self-inquiry with luxurious expanses of unstructured time.
                    </p>
</div></div></div></div></div></div></div></div></div></div></div></div></div></div>
<div className="w-full lg:w-7/12 flex flex-col gap-24 lg:pt-32 pb-16">
<article className="journey-card relative min-h-[40rem] w-full overflow-hidden rounded-[2.5rem] bg-stone-900 border-gradient">
<div className="absolute inset-0 opacity-60 transition-transform duration-[2s] hover:scale-105" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d8434e2-a2c7-4b6c-be6f-36e04f6ffd54_3840w.png\')', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
<div className="absolute inset-0 bg-gradient-to-b from-stone-950/20 via-stone-950/40 to-stone-950/90"></div>
<div className="relative z-10 flex h-full min-h-[40rem] flex-col justify-between p-10">
<span className="w-max rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-normal uppercase tracking-[0.2rem] text-white/80 backdrop-blur-md font-manrope">
                                Morning
                            </span>
<div className="">
<h3 className="text-3xl tracking-tight text-white mb-4 font-fraunces font-medium">Awakening the subtle body.</h3>
<p className="text-sm leading-relaxed text-white/60 font-light max-w-sm font-manrope">
                                    Silent tea ceremony followed by a heat-building Vinyasa flow as the morning mist clears over the valley.
                                </p>
</div>
</div>
</article>
<article className="journey-card relative min-h-[40rem] w-full overflow-hidden rounded-[2.5rem] bg-stone-900 border-gradient">
<div className="absolute inset-0 opacity-60 transition-transform duration-[2s] hover:scale-105" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/710fb950-a79c-4a1e-8c2c-94b54a96af47_3840w.png\')', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
<div className="absolute inset-0 bg-gradient-to-b from-stone-950/20 via-stone-950/40 to-stone-950/90"></div>
<div className="relative z-10 flex h-full min-h-[40rem] flex-col justify-between p-10">
<span className="w-max rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-normal uppercase tracking-[0.2rem] text-white/80 backdrop-blur-md font-manrope">
                                Afternoon
                            </span>
<div className="">
<h3 className="text-3xl tracking-tight text-white mb-4 font-fraunces font-medium">Nourish and pause.</h3>
<p className="text-sm leading-relaxed text-white/60 font-light max-w-sm font-manrope">
                                    Plant-based gastronomy sourced from local soil, followed by hours dedicated exclusively to rest, journaling, or forest bathing.
                                </p>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="relative py-32 px-5 lg:px-8 bg-stone-950" id="story">
<div className="mx-auto max-w-7xl">
<div className="relative overflow-hidden rounded-[3rem] bg-stone-900 px-6 py-24 sm:px-16 lg:px-24 border-gradient aura-reveal is-visible">
<div className="absolute inset-0 opacity-30" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&amp', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}></div>
<div className="absolute inset-0 bg-stone-950/60 backdrop-blur-[2px]"></div>
<div className="relative z-10 mx-auto max-w-3xl text-center">
<iconify-icon className="text-4xl text-amber-100/50 mb-8" icon="solar:infinity-linear"></iconify-icon>
<h2 className="text-3xl tracking-tight text-white sm:text-5xl leading-[1.2] mb-8 font-fraunces font-medium">
                            "In a world optimized for speed, our greatest luxury is the permission to completely stop."
                        </h2>
<p className="text-sm leading-relaxed text-white/60 font-light max-w-xl mx-auto mb-12 font-manrope">
                            Samsara was born from a singular realization: modern exhaustion cannot be cured by simply sleeping more. It requires a deliberate, atmospheric recalibration of how we relate to ourselves and our environment.
                        </p>
<a className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2rem] text-amber-100 hover:text-white transition-colors font-manrope" href="#about">
                            Read the manifesto <iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="relative py-32 px-5 lg:px-8 bg-stone-950" id="about">
<div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-[1fr_1.2fr] items-center">
<div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden border-gradient aura-reveal is-visible">
<img alt="Guide portrait" className="w-full h-full object-cover grayscale opacity-80 mix-blend-lighten" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/419ead09-6da0-42d4-b001-9c31317d4397_3840w.png"/>
<div className="absolute inset-0 bg-stone-950/20"></div>
</div>
<div className="aura-reveal is-visible">
<p className="text-xs font-medium uppercase tracking-[0.28rem] text-amber-100/60 mb-6 font-manrope">The Guides</p>
<h2 className="text-4xl tracking-tight text-white sm:text-5xl mb-8 font-fraunces font-medium">
                        Facilitators of profound quiet.
                    </h2>
<div className="space-y-6 text-sm leading-relaxed text-white/60 font-light">
<p className="font-manrope">
                            Led by Elena Rostova, a somatic therapist with two decades of study in the Himalayas, and a curated team of sound healers and holistic nutritionists.
                        </p>
<p className="font-manrope">
                            We do not teach you how to be; we hold a pristine, unwavering space for you to remember. Every element of the guidance is designed to be felt deeply and held lightly.
                        </p>
</div>
<div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
<div>
<p className="text-3xl text-white font-fraunces font-medium">15+</p>
<p className="text-xs font-medium uppercase tracking-[0.15rem] text-white/40 mt-2 font-manrope">Years of Practice</p>
</div>
<div>
<p className="text-3xl text-white font-fraunces font-medium">1:4</p>
<p className="text-xs font-medium uppercase tracking-[0.15rem] text-white/40 mt-2 font-manrope">Guide to Guest Ratio</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden bg-stone-950 px-5 py-32 sm:px-6 lg:px-8" id="testimonials">
<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-100/10 to-transparent"></div>
<div className="mx-auto max-w-7xl">
<div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">
<div className="aura-reveal order-2 lg:order-1 is-visible">
<p className="text-xs font-medium uppercase tracking-[0.28rem] text-amber-100/60 font-manrope">Echoes of Silence</p>
<h2 className="mt-6 max-w-xl text-3xl tracking-tight text-white sm:text-4xl lg:text-5xl font-fraunces font-medium">
                            Transformations felt in the marrow.
                        </h2>
<p className="mt-6 max-w-md text-sm leading-relaxed text-white/50 font-light font-manrope">
                            Guests arrive carrying the weight of their lives and leave with an elegant spaciousness. Read the experiences of those who have walked the path.
                        </p>
</div>
<div className="aura-reveal order-1 lg:order-2 is-visible">
<div className="relative overflow-hidden rounded-[2.5rem] bg-white/[0.03] p-8 shadow-2xl border-gradient lg:p-12">
<iconify-icon className="text-4xl text-amber-100/20 mb-8" icon="solar:quote-left-bold"></iconify-icon>
<p className="text-2xl tracking-tight text-white leading-snug mb-8 font-fraunces font-medium">
                                "It felt like an architectural unwinding of my soul. The level of care, the aesthetic stillness, the depth of the somatic work—it is simply unmatched."
                            </p>
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-stone-800 flex items-center justify-center border border-white/10">
<span className="text-xs font-normal text-white font-manrope">SM</span>
</div>
<div>
<p className="text-xs font-medium text-white font-manrope">Sarah M.</p>
<p className="text-xs text-white/40 font-light font-manrope">Spring Equinox Guest</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative overflow-hidden bg-stone-950 px-5 pb-8 pt-20 sm:px-6 lg:px-8" id="reserve">
<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-100/20 to-transparent"></div>
<div className="mx-auto max-w-7xl overflow-hidden rounded-[3rem] border border-white/5 bg-stone-900 shadow-2xl">
<div className="relative px-8 py-20 sm:px-12 lg:px-20 bg-gradient-to-b from-stone-900 to-stone-950">
<div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-amber-100/5 blur-[120px]"></div>
<div className="relative z-10 max-w-2xl">
<span className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-sm font-medium tracking-tighter text-white backdrop-blur-xl border-gradient font-manrope">
                            SA
                        </span>
<h2 className="max-w-xl text-4xl tracking-tight text-white sm:text-5xl mb-6 font-fraunces font-medium">
                            Ready to step out of the noise?
                        </h2>
<p className="mb-10 max-w-md text-sm leading-relaxed text-white/50 font-light font-manrope">
                            Applications are currently open for our upcoming seasonal transitions. Spaces are intentionally limited to twelve guests.
                        </p>
<form className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
<input className="w-full rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm text-white placeholder:text-white/30 focus:border-amber-100/50 focus:outline-none focus:ring-1 focus:ring-amber-100/50 transition-colors" placeholder="Email address" required="" type="email"/>
<button className="magnetic-btn flex shrink-0 items-center justify-center gap-2 rounded-full bg-amber-100 px-8 py-4 text-sm font-medium text-stone-950 transition hover:bg-white font-manrope" type="submit">
                                Apply
                            </button>
</form>
</div>
</div>
<div className="grid gap-12 border-t border-white/5 px-8 py-12 lg:grid-cols-[2fr_1fr_1fr] lg:px-20 bg-stone-950/50">
<div>
<h3 className="text-xl text-white mb-6 font-fraunces font-medium">Samsara Retreats</h3>
<p className="text-sm text-white/40 font-light max-w-xs font-manrope">
                            Curating physical and digital spaces for quiet luxury, profound healing, and aesthetic stillness.
                        </p>
</div>
<div className="flex flex-col gap-4">
<p className="text-xs font-medium uppercase tracking-[0.2rem] text-white/30 mb-2 font-manrope">Explore</p>
<a className="text-sm text-white/60 hover:text-white transition-colors font-manrope" href="#features">Sanctuary</a>
<a className="text-sm text-white/60 hover:text-white transition-colors font-manrope" href="#journey">The Journey</a>
<a className="text-sm text-white/60 hover:text-white transition-colors font-manrope" href="#story">Philosophy</a>
<a className="text-sm text-white/60 hover:text-white transition-colors font-manrope" href="#about">Guides</a>
</div>
<div className="flex flex-col gap-4">
<p className="text-xs font-medium uppercase tracking-[0.2rem] text-white/30 mb-2 font-manrope">Contact</p>
<a className="text-sm text-white/60 hover:text-white transition-colors font-manrope" href="#">hello@samsara.co</a>
<a className="text-sm text-white/60 hover:text-white transition-colors font-manrope" href="#">Instagram</a>
<a className="text-sm text-white/60 hover:text-white transition-colors font-manrope" href="#">Journal</a>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/5 bg-stone-950 px-8 py-6 text-xs text-white/30 font-light lg:px-20">
<p className="uppercase tracking-[0.1rem] font-manrope">© 2024 Samsara. All rights reserved.</p>
<div className="flex gap-4 mt-4 sm:mt-0">
<a className="hover:text-white transition-colors font-manrope" href="#">Privacy</a>
<a className="hover:text-white transition-colors font-manrope" href="#">Terms</a>
</div>
</div>
</div>
</footer>
</main>



    </>
  );
}
