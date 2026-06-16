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



    document.addEventListener('DOMContentLoaded', () => {
            gsap.registerPlugin(ScrollTrigger);

            gsap.to('.reveal-word', {
              y: '0%',
              duration: 1.15,
              ease: 'power4.out',
              stagger: 0.045,
              delay: 0.08
            });

            gsap.to('.fade-in-up', {
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: 'power3.out',
              stagger: 0.08,
              delay: 0.25
            });

            gsap.utils.toArray('section').forEach((section) => {
  const sectionTitleWords = section.querySelectorAll('.section-reveal-word');
  const sectionCards = section.querySelectorAll('.fade-section');

  if (sectionTitleWords.length) {
    gsap.to(sectionTitleWords, {
      y: '0%',
      duration: 1.35,
      ease: 'power4.out',
      stagger: 0.055,
      scrollTrigger: {
        trigger: section,
        start: 'top 78%',
        once: true
      }
    });
  }

  if (sectionCards.length) {
    gsap.from(sectionCards, {
      y: 36,
      opacity: 0,
      duration: 1.05,
      ease: 'power3.out',
      stagger: 0.16,
      scrollTrigger: {
        trigger: sectionCards[0],
        start: 'top 84%',
        once: true
      }
    });
  }
});

            const canvas = document.getElementById('bg-canvas');
            const ctx = canvas.getContext('2d');
            let width, height, particles = [];

            function resize(){ width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; }
            window.addEventListener('resize', resize); resize();

            class Particle{
              constructor(){ this.x=Math.random()*width; this.y=Math.random()*height; this.size=Math.random()*1.4+.25; this.speedX=Math.random()*.35-.175; this.speedY=Math.random()*.28-.14; this.life=Math.random()*100; }
              update(){ this.x+=this.speedX; this.y+=this.speedY; this.life+=.018; if(this.x<0)this.x=width; if(this.x>width)this.x=0; if(this.y<0)this.y=height; if(this.y>height)this.y=0; }
              draw(){ const opacity=(Math.sin(this.life)+1)/2*.32+.06; ctx.fillStyle=`rgba(183,138,86,${opacity})`; ctx.beginPath(); ctx.rect(this.x,this.y,this.size,this.size); ctx.fill(); }
            }
            function init(){ particles=[]; const count=Math.min(150,Math.floor((width*height)/14000)); for(let i=0;i<count;i++)particles.push(new Particle()); }
            function animate(){ ctx.clearRect(0,0,width,height); particles.forEach(p=>{p.update();p.draw();}); requestAnimationFrame(animate); }

            const heroMessages = [
        "Every event is treated as a staged system: guest flow, sensory rhythm, production timing and final reveal.",
        "Atmosphere is built before decoration: light, sound, movement and service all work as one language.",
        "The production stays invisible, so the moment feels effortless from arrival to final goodbye."
      ];

      const heroCopy = document.getElementById("hero-rotating-copy");
      const heroDots = document.querySelectorAll(".hero-dot");
      let heroMessageIndex = 0;

      if (heroCopy && heroDots.length) {
        setInterval(() => {
          heroMessageIndex = (heroMessageIndex + 1) % heroMessages.length;

          heroCopy.style.opacity = "0";

          setTimeout(() => {
            heroCopy.textContent = heroMessages[heroMessageIndex];

            heroDots.forEach((dot, index) => {
              if (index === heroMessageIndex) {
                dot.classList.remove("bg-[#E7D8C8]");
                dot.classList.add("bg-[#B78A56]");
              } else {
                dot.classList.remove("bg-[#B78A56]");
                dot.classList.add("bg-[#E7D8C8]");
              }
            });

            heroCopy.style.opacity = "1";
          }, 350);
        }, 4600);
      }
            init(); animate(); window.addEventListener('resize', init);
          });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="noise"></div>
<canvas height="949" id="bg-canvas" width="1248"></canvas>
<main className="w-full max-w-[1480px] mx-auto my-4 md:my-8 bg-white soft-shadow min-h-screen relative z-10">

<div className="hidden lg:block border-b border-[#E7D8C8] bg-[#FBF4EC]">
<div className="px-6 lg:px-12 h-10 flex items-center justify-between text-[10px] uppercase tracking-[.22em] text-[#7B6A5F]">
<div className="flex items-center gap-6">
<span className="flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-[#B78A56]"></span>
          Montreal · Paris · New York
          </span>
<span>Private events · brand moments · executive gatherings</span>
</div>
<div className="flex items-center gap-6">
<span>2026 calendar now open</span>
<a className="text-[#B78A56] hover:text-[#946D40] transition-colors" href="#contact">
            Request private availability
          </a>
</div>
</div>
</div>

<header className="sticky top-0 z-50 bg-[#FFFCF7]/88 backdrop-blur-xl border-b border-[#E7D8C8]">
<div className="px-6 lg:px-12 h-20 flex items-center justify-between gap-8">

<a className="flex items-center gap-2 bg-[#FCF7F1] rounded-sm pr-5 pl-1 py-1 border border-[#EADFD3] w-max hover:border-[#B78A56]/60 transition-colors" href="#">
<div className="w-8 h-8 rounded-sm bg-[#B78A56] flex items-center justify-center text-white soft-shadow">
<iconify-icon icon="solar:star-shine-linear" width="1.2em"></iconify-icon>
</div>
<span className="text-xs font-medium tracking-[.18em] uppercase text-[#5D473F]">
              Echelon Atelier
            </span>
</a>

<nav className="hidden xl:flex items-center gap-3">
<a className="flex items-center gap-1.5 border border-[#E7D8C8] bg-[#FFFCF7]/50 rounded-sm px-5 py-2 text-xs font-light text-[#5D473F] hover:border-[#B78A56] hover:text-[#B78A56] hover:bg-[#FBF4EC] transition-colors" href="#services">
            Capabilities
            <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
<a className="flex items-center gap-1.5 border border-[#E7D8C8] bg-[#FFFCF7]/50 rounded-sm px-5 py-2 text-xs font-light text-[#5D473F] hover:border-[#B78A56] hover:text-[#B78A56] hover:bg-[#FBF4EC] transition-colors" href="#projects">
            Productions
            <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
<a className="flex items-center gap-1.5 border border-[#E7D8C8] bg-[#FFFCF7]/50 rounded-sm px-5 py-2 text-xs font-light text-[#5D473F] hover:border-[#B78A56] hover:text-[#B78A56] hover:bg-[#FBF4EC] transition-colors" href="#process">
            Method
            <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
<a className="flex items-center gap-1.5 border border-[#E7D8C8] bg-[#FFFCF7]/50 rounded-sm px-5 py-2 text-xs font-light text-[#5D473F] hover:border-[#B78A56] hover:text-[#B78A56] hover:bg-[#FBF4EC] transition-colors" href="#journal">
            Notes
            <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</nav>

<a className="bg-[#B78A56] text-white rounded-sm px-1 pl-5 py-1 flex items-center gap-4 text-xs font-light hover:bg-[#946D40] transition-colors group soft-shadow" href="#contact">
          Begin A Private Brief
          <span className="w-8 h-8 rounded-sm bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#B78A56] transition-colors">
<iconify-icon icon="solar:calendar-add-linear" width="1.2em"></iconify-icon>
</span>
</a>
</div>
</header>

<section className="px-6 lg:px-12 py-12 lg:py-20 relative overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 min-h-[680px] relative z-10">

<div className="lg:col-span-7 flex flex-col">
<div className="mb-8 flex items-center gap-4 text-[10px] uppercase tracking-[.28em] text-[#7B6A5F]">
<span className="w-2 h-2 bg-[#B78A56]"></span>
            High-end event direction
            <span className="hidden md:block h-[1px] bg-[#E7D8C8] flex-1"></span>
</div>

<h1 className="gsap-title text-4xl md:text-6xl lg:text-[4.55rem] xl:text-[5.05rem] leading-[1.02] tracking-tight font-extralight uppercase text-[#241A16] mb-8 max-w-[920px]">
<span className="block whitespace-nowrap">
<span className="reveal-line">
<span className="reveal-word">Curated</span>
</span>
<span className="reveal-line">
<span className="reveal-word">events</span>
</span>
</span>
<span className="block whitespace-nowrap">
<span className="reveal-line">
<span className="reveal-word">for</span>
</span>
<span className="reveal-line">
<span className="reveal-word">brands,</span>
</span>
<span className="reveal-line">
<span className="reveal-word">leaders</span>
</span>
</span>
<span className="block whitespace-nowrap">
<span className="reveal-line">
<span className="reveal-word">and</span>
</span>
<span className="reveal-line">
<span className="reveal-word">private</span>
</span>
<span className="reveal-line">
<span className="reveal-word">circles</span>
</span>
</span>
<span className="block overflow-hidden mt-5">
<span className="reveal-word inline-flex items-center gap-4">
<span className="w-11 h-11 md:w-14 md:h-14 bg-[#B78A56] text-white flex items-center justify-center rounded-sm soft-shadow">
<iconify-icon icon="solar:magic-stick-3-linear" width="1.35em"></iconify-icon>
</span>
<span className="text-[#B78A56] font-medium tracking-[.34em] text-xs md:text-sm">
                    FULL PRODUCTION ATELIER
                  </span>
</span>
</span>
</h1>

<div className="fade-in-up mb-10 max-w-xl">
<p className="text-sm md:text-base text-[#7B6A5F] leading-relaxed font-light">
              We design, plan and produce elevated gatherings with the
              precision of a command center and the atmosphere of a private
              atelier.
            </p>
</div>

<div className="fade-in-up flex flex-wrap items-center gap-5 md:gap-10 mb-10">
<a className="bg-[#241A16] text-white rounded-sm px-1 pl-6 py-1 flex items-center gap-8 text-xs font-light hover:bg-[#B78A56] transition-colors group soft-shadow" href="#contact">
              Plan The Moment
              <span className="w-9 h-9 rounded-sm bg-white/10 flex items-center justify-center">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
<div className="flex flex-wrap items-center gap-5 text-[10px] font-medium tracking-[.22em] uppercase text-[#7B6A5F]">
<span className="flex items-center gap-2">
<span className="w-1 h-1 bg-[#B78A56]"></span>
              Strategy
              </span>
<span className="flex items-center gap-2">
<span className="w-1 h-1 bg-[#B78A56]"></span>
              Design
              </span>
<span className="flex items-center gap-2">
<span className="w-1 h-1 bg-[#B78A56]"></span>
              Production
              </span>
</div>
</div>

<div className="fade-in-up grid grid-cols-3 max-w-xl border-y border-[#E7D8C8] divide-x divide-[#E7D8C8] mb-14">
<div className="py-4 pr-5">
<div className="text-2xl md:text-3xl font-extralight tracking-tight text-[#241A16]">
                120+
              </div>
<p className="text-[9px] uppercase tracking-[.22em] text-[#7B6A5F] mt-1">
                Events directed
              </p>
</div>
<div className="py-4 px-5">
<div className="text-2xl md:text-3xl font-extralight tracking-tight text-[#241A16]">
                14
              </div>
<p className="text-[9px] uppercase tracking-[.22em] text-[#7B6A5F] mt-1">
                Cities activated
              </p>
</div>
<div className="py-4 pl-5">
<div className="text-2xl md:text-3xl font-extralight tracking-tight text-[#241A16]">
                3
              </div>
<p className="text-[9px] uppercase tracking-[.22em] text-[#7B6A5F] mt-1">
                Event worlds
              </p>
</div>
</div>

<div className="fade-in-up grid grid-cols-1 md:grid-cols-3 gap-4 mt-auto">
<div className="relative p-[1px] rounded-sm overflow-hidden bg-gradient-to-br from-[#B78A56]/25 via-[#E7D8C8] to-transparent group">
<div className="bg-[#FBF4EC] p-5 min-h-[132px] relative border border-transparent group-hover:border-[#B78A56]/25 transition-colors">
<div className="mb-5">
<span className="text-[9px] uppercase tracking-[.24em] text-[#B78A56]">
                      01 / Brief
                    </span>
</div>
<h3 className="text-sm font-medium tracking-tight text-[#241A16] mb-2">
                  Strategic Brief
                </h3>
<p className="text-xs text-[#5D473F] leading-relaxed font-light pr-5">
                  Purpose, audience, guest journey and event concept.
                </p>
<span className="absolute -right-2.5 top-1/2 -translate-y-1/2 w-7 h-7 bg-[#F6F0E8] text-[#B78A56] border border-[#E7D8C8] flex items-center justify-center group-hover:bg-[#B78A56] group-hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
<div className="relative p-[1px] rounded-sm overflow-hidden bg-gradient-to-br from-[#B78A56]/25 via-[#E7D8C8] to-transparent group">
<div className="bg-[#FBF4EC] p-5 min-h-[132px] relative border border-transparent group-hover:border-[#B78A56]/25 transition-colors">
<div className="mb-5">
<span className="text-[9px] uppercase tracking-[.24em] text-[#B78A56]">
                      02 / Atmosphere
                    </span>
</div>
<h3 className="text-sm font-medium tracking-tight text-[#241A16] mb-2">
                  Atmosphere Direction
                </h3>
<p className="text-xs text-[#5D473F] leading-relaxed font-light pr-5">
                  Visual language, room rhythm, service cues and sensory
                  details.
                </p>
<span className="absolute -right-2.5 top-1/2 -translate-y-1/2 w-7 h-7 bg-[#F6F0E8] text-[#B78A56] border border-[#E7D8C8] flex items-center justify-center group-hover:bg-[#B78A56] group-hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
<div className="relative p-[1px] rounded-sm overflow-hidden bg-gradient-to-br from-[#B78A56]/25 via-[#E7D8C8] to-transparent group">
<div className="bg-[#FBF4EC] p-5 min-h-[132px] relative border border-transparent group-hover:border-[#B78A56]/25 transition-colors">
<div className="mb-5">
<span className="text-[9px] uppercase tracking-[.24em] text-[#B78A56]">
                      03 / Command
                    </span>
</div>
<h3 className="text-sm font-medium tracking-tight text-[#241A16] mb-2">
                  Live Production
                </h3>
<p className="text-xs text-[#5D473F] leading-relaxed font-light pr-5">
                  Vendors, logistics, timing, staffing and on-site command.
                </p>
<span className="absolute -right-2.5 top-1/2 -translate-y-1/2 w-7 h-7 bg-[#F6F0E8] text-[#B78A56] border border-[#E7D8C8] flex items-center justify-center group-hover:bg-[#B78A56] group-hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 relative min-h-[560px]">

<div className="absolute top-0 right-0 w-64 text-right z-20 hidden md:block">
<div className="flex justify-end gap-1.5 mb-4">
<span className="hero-dot w-1.5 h-1.5 bg-[#B78A56]"></span>
<span className="hero-dot w-1.5 h-1.5 bg-[#E7D8C8]"></span>
<span className="hero-dot w-1.5 h-1.5 bg-[#E7D8C8]"></span>
</div>
<p className="text-xs text-[#7B6A5F] leading-relaxed font-light transition-opacity duration-500" id="hero-rotating-copy">
              Every event is treated as a staged system: guest flow, sensory
              rhythm, production timing and final reveal.
            </p>
</div>
<div className="flex items-end gap-3 h-full pt-24">

<div className="fade-in-up photo-panel hero-img-private w-1/3 h-[55%] mb-20 soft-shadow">
<div className="flex flex-col z-10 pt-4 pr-4 pb-4 pl-4 absolute top-0 right-0 bottom-0 left-0 justify-end">
<span className="text-[9px] uppercase tracking-[.22em] text-[#E7D8C8] mb-2">
                    01 / Private
                  </span>
<h3 className="text-white text-sm font-light tracking-wide mb-1">
                  Private Salon
                </h3>
</div>
</div>

<div className="fade-in-up photo-panel hero-img-gala w-1/3 h-[92%] deep-shadow">
<div className="absolute inset-0 p-5 flex flex-col justify-end z-10">
<span className="text-[9px] uppercase tracking-[.22em] text-[#E7D8C8] mb-2">
                    02 / Gala
                  </span>
<h3 className="text-white text-base font-medium tracking-wide mb-3">
                  Signature Gala
                </h3>
<p className="text-[#E7D8C8] text-[10px] leading-relaxed mb-6 font-light opacity-90">
                  Multi-room production, editorial tablescapes and controlled
                  guest transitions.
                </p>
<button className="w-full bg-black/30 backdrop-blur-sm border border-white/30 rounded-sm py-2 px-3 flex justify-between items-center text-white text-xs hover:bg-white hover:text-[#241A16] transition-colors font-light">
                    View Direction
                    <iconify-icon className="text-[#B78A56]" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</div>

<div className="fade-in-up photo-panel hero-img-brand w-1/3 h-[66%] mb-8 soft-shadow">
<div className="absolute inset-0 p-4 flex flex-col justify-end z-10">
<span className="text-[9px] uppercase tracking-[.22em] text-[#E7D8C8] mb-2">
                    03 / Brand
                  </span>
<h3 className="text-white text-sm font-light tracking-wide mb-1 leading-snug">
                  Brand Launch
                </h3>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 md:py-12 bg-white">
<div className="border-y border-[#E7D8C8] bg-[#FCF7F1] overflow-hidden">
<div className="marquee flex w-max py-4 text-[10px] uppercase tracking-[.28em] text-[#7B6A5F]">
<span className="px-8">Guest Journey Mapping</span><span className="text-[#B78A56]">◆</span>
<span className="px-8">Venue Transformation</span><span className="text-[#B78A56]">◆</span>
<span className="px-8">Culinary Direction</span><span className="text-[#B78A56]">◆</span>
<span className="px-8">Production Command</span><span className="text-[#B78A56]">◆</span>
<span className="px-8">Atmosphere Design</span><span className="text-[#B78A56]">◆</span>
<span className="px-8">Guest Journey Mapping</span><span className="text-[#B78A56]">◆</span>
<span className="px-8">Venue Transformation</span><span className="text-[#B78A56]">◆</span>
<span className="px-8">Culinary Direction</span><span className="text-[#B78A56]">◆</span>
<span className="px-8">Production Command</span><span className="text-[#B78A56]">◆</span>
<span className="px-8">Atmosphere Design</span><span className="text-[#B78A56]">◆</span>
</div>
</div>
</section>

<section className="px-6 lg:px-12 py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto">

<div className="text-center mb-16">
<p className="text-[#7B6A5F] text-[10px] font-medium mb-4 uppercase tracking-[.3em]">

            / Capabilities /

          </p>
<h2 className="section-title text-4xl md:text-6xl font-extralight uppercase tracking-tight text-[#241A16] leading-[1.04]">
<span className="block">
<span className="section-reveal-line">
<span className="section-reveal-word">Full-service</span>
<span className="section-reveal-word">planning</span>
<span className="section-reveal-word">for</span>
</span>
</span>
<span className="block text-[#B78A56]">
<span className="section-reveal-line">
<span className="section-reveal-word">high-stakes</span>
<span className="section-reveal-word">moments</span>
</span>
</span>
</h2>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

<article className="fade-section grid-paper bg-[#FFFCF7] border border-[#E7D8C8] p-8 md:p-10 relative overflow-hidden shadow-[0_18px_45px_rgba(36,26,22,.08),0_4px_14px_rgba(36,26,22,.05)]">
<div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#B78A56]/45 to-transparent">
</div>
<div className="flex items-start justify-between gap-8 mb-14">
<span className="text-[10px] tracking-[.26em] uppercase text-[#B78A56]">

            01 / Private

          </span>
<span className="text-[10px] tracking-[.22em] uppercase text-[#A99683]">

            Intimate scale

          </span>
</div>
<h3 className="text-3xl md:text-4xl font-light tracking-tight text-[#241A16] mb-5">

              Private Celebrations

            </h3>
<p className="text-sm text-[#7B6A5F] leading-relaxed mb-9 max-w-xl font-light">

              Intimate gatherings designed with the precision of a production plan and the warmth of a private
              residence. Every detail is shaped around guest flow, atmosphere, service timing and emotional memory.

            </p>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#5D473F]">
<li className="flex gap-2">
<span className="text-[#B78A56]">■</span>

                Private dinners and salons

              </li>
<li className="flex gap-2">
<span className="text-[#B78A56]">■</span>

                Milestone celebrations

              </li>
<li className="flex gap-2">
<span className="text-[#B78A56]">■</span>

                Destination weekends

              </li>
<li className="flex gap-2">
<span className="text-[#B78A56]">■</span>

                Bespoke guest hospitality

              </li>
</ul>
</article>

<article className="fade-section bg-[#241A16] text-white p-8 md:p-10 relative overflow-hidden shadow-[0_22px_55px_rgba(36,26,22,.16),0_5px_16px_rgba(36,26,22,.10)]">
<div className="absolute inset-0 grid-paper opacity-10"></div>
<div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#B78A56]/60 to-transparent">
</div>
<div className="relative z-10">
<div className="flex items-start justify-between gap-8 mb-14">
<span className="text-[10px] tracking-[.26em] uppercase text-[#B78A56]">

              02 / Brand

            </span>
<span className="text-[10px] tracking-[.22em] uppercase text-[#A99683]">

              Public-facing moments

            </span>
</div>
<h3 className="text-3xl md:text-4xl font-light tracking-tight mb-5">

                Brand &amp; Cultural Moments

              </h3>
<p className="text-sm text-[#E7D8C8] leading-relaxed mb-9 max-w-xl font-light">

                Launches, press previews and cultural experiences built to feel cinematic, controlled and memorable. We
                translate brand strategy into rooms, rituals, pacing and moments people want to talk about.

              </p>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#F6F0E8]">
<li className="flex gap-2">
<span className="text-[#B78A56]">■</span>

                  Product launches

                </li>
<li className="flex gap-2">
<span className="text-[#B78A56]">■</span>

                  Press and VIP previews

                </li>
<li className="flex gap-2">
<span className="text-[#B78A56]">■</span>

                  Cultural salons

                </li>
<li className="flex gap-2">
<span className="text-[#B78A56]">■</span>

                  Premium hospitality programs

                </li>
</ul>
</div>
</article>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="fade-section photo-panel cap-img-summit min-h-[360px] shadow-[0_12px_32px_rgba(36,26,22,.07),0_2px_8px_rgba(36,26,22,.04)]">
<div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">
<span className="text-[10px] uppercase tracking-[.22em] text-[#E7D8C8] mb-3">

            Executive

          </span>
<h3 className="text-white text-2xl font-light leading-tight">

                Leadership Summits

              </h3>
<p className="text-[#E7D8C8] text-xs leading-relaxed mt-4 max-w-xs font-light opacity-90">

                Retreats, board sessions and founder gatherings designed for better conversations.

              </p>
</div>
</div>

<div className="fade-section photo-panel cap-img-hospitality min-h-[360px] shadow-[0_12px_32px_rgba(36,26,22,.07),0_2px_8px_rgba(36,26,22,.04)]">
<div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">
<span className="text-[10px] uppercase tracking-[.22em] text-[#E7D8C8] mb-3">

            Hospitality

          </span>
<h3 className="text-white text-2xl font-light leading-tight">

                Guest Experience Systems

              </h3>
<p className="text-[#E7D8C8] text-xs leading-relaxed mt-4 max-w-xs font-light opacity-90">

                Arrival, service, transitions and final impressions shaped as one continuous journey.

              </p>
</div>
</div>

<div className="fade-section photo-panel cap-img-dining min-h-[360px] shadow-[0_12px_32px_rgba(36,26,22,.07),0_2px_8px_rgba(36,26,22,.04)]">
<div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">
<span className="text-[10px] uppercase tracking-[.22em] text-[#E7D8C8] mb-3">

            Culinary

          </span>
<h3 className="text-white text-2xl font-light leading-tight">

                Tablescape &amp; Service Design

              </h3>
<p className="text-[#E7D8C8] text-xs leading-relaxed mt-4 max-w-xs font-light opacity-90">

                Dining environments where menu, table, lighting and pacing feel intentionally connected.

              </p>
</div>
</div>
</div>
</div>
</section>

<div className="bg-[#1D1714] border-t border-white/10">
<div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 grid grid-cols-1 md:grid-cols-4 gap-4 text-xs text-[#E7D8C8]">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#B78A56]" icon="solar:clipboard-list-linear"></iconify-icon>
          Concept Strategy
        </div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[#B78A56]" icon="solar:buildings-3-linear"></iconify-icon>
          Venue Transformation
        </div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[#B78A56]" icon="solar:soundwave-linear"></iconify-icon>
          Sensory Direction
        </div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[#B78A56]" icon="solar:user-check-linear"></iconify-icon>
          Guest Experience
        </div>
</div>
</div>

<section className="px-6 lg:px-12 py-24 bg-[#FBF4EC]" id="projects">
<div className="max-w-7xl mx-auto">

<div className="text-center mb-16">
<p className="text-[#7B6A5F] text-[10px] font-medium mb-4 uppercase tracking-[.3em]">

            / Recent productions /

          </p>
<h2 className="section-title text-4xl md:text-6xl font-extralight uppercase tracking-tight text-[#241A16] leading-[1.04]">
<span className="block">
<span className="section-reveal-line">
<span className="section-reveal-word">Curated</span>
<span className="section-reveal-word">productions</span>
</span>
</span>
<span className="block text-[#B78A56]">
<span className="section-reveal-line">
<span className="section-reveal-word">event</span>
<span className="section-reveal-word">worlds</span>
</span>
</span>
</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

<div className="fade-section">
<article className="bg-[#FFFCF7] p-4 border border-[#E7D8C8] shadow-[0_14px_36px_rgba(36,26,22,.07),0_3px_10px_rgba(36,26,22,.04)] group transition-transform duration-500 hover:-translate-y-1">
<div className="photo-panel prod-img-maison h-56 mb-5">
<span className="absolute top-4 right-4 z-10 text-[10px] bg-[#FFFCF7] px-3 py-1 text-[#7B6A5F] border border-[#E7D8C8]">

                  01 / 04
      
                </span>
</div>
<div className="mb-5">
<span className="text-[9px] uppercase tracking-[.24em] text-[#B78A56]">

                  Brand launch
      
                </span>
<h3 className="text-xl font-light text-[#241A16] mt-2">

                Maison Launch

              </h3>
<p className="text-xs text-[#7B6A5F] mt-1">

                Fashion house dinner · Paris

              </p>
</div>
<div className="grid grid-cols-3 gap-2 border-t border-[#E7D8C8] pt-4 text-[10px]">
<div>
<p className="text-[#A99683] uppercase tracking-[.18em] mb-1">Guests</p>
<p className="text-[#241A16]">180</p>
</div>
<div>
<p className="text-[#A99683] uppercase tracking-[.18em] mb-1">Rooms</p>
<p className="text-[#241A16]">04</p>
</div>
<div>
<p className="text-[#A99683] uppercase tracking-[.18em] mb-1">Lead</p>
<p className="text-[#241A16]">10 wks</p>
</div>
</div>
<div className="border-t border-[#E7D8C8] mt-4 pt-4 flex items-center justify-between">
<span className="text-[10px] uppercase tracking-[.2em] text-[#7B6A5F]">

                  Press preview
      
                </span>
<span className="w-8 h-8 border border-[#E7D8C8] flex items-center justify-center text-[#B78A56] group-hover:bg-[#B78A56] group-hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</article>
</div>

<div className="fade-section">
<article className="bg-[#241A16] p-4 border border-[#241A16] shadow-[0_22px_55px_rgba(36,26,22,.18),0_6px_18px_rgba(36,26,22,.10)] group text-white lg:-translate-y-4 transition-transform duration-500 hover:-translate-y-6">
<div className="photo-panel prod-img-patron h-56 mb-5">
<span className="absolute top-4 right-4 z-10 text-[10px] bg-[#FFFCF7] px-3 py-1 text-[#7B6A5F] border border-[#E7D8C8]">

                  02 / 04
      
                </span>
</div>
<div className="mb-5">
<span className="text-[9px] uppercase tracking-[.24em] text-[#B78A56]">

                  Signature gala
      
                </span>
<h3 className="text-xl font-light mt-2">

                Patron Gala

              </h3>
<p className="text-xs text-[#A99683] mt-1">

                Museum benefit · New York

              </p>
</div>
<div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4 text-[10px]">
<div>
<p className="text-[#A99683] uppercase tracking-[.18em] mb-1">Guests</p>
<p>420</p>
</div>
<div>
<p className="text-[#A99683] uppercase tracking-[.18em] mb-1">Acts</p>
<p>03</p>
</div>
<div>
<p className="text-[#A99683] uppercase tracking-[.18em] mb-1">Lead</p>
<p>16 wks</p>
</div>
</div>
<div className="border-t border-white/10 mt-4 pt-4 flex items-center justify-between">
<span className="text-[10px] uppercase tracking-[.2em] text-[#A99683]">

                  Fundraising evening
      
                </span>
<span className="w-8 h-8 border border-white/15 flex items-center justify-center text-[#B78A56] group-hover:bg-[#B78A56] group-hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</article>
</div>

<div className="fade-section">
<article className="bg-[#241A16] p-4 border border-[#241A16] shadow-[0_22px_55px_rgba(36,26,22,.18),0_6px_18px_rgba(36,26,22,.10)] group text-white lg:-translate-y-4 transition-transform duration-500 hover:-translate-y-6">
<div className="photo-panel prod-img-lake h-56 mb-5">
<span className="absolute top-4 right-4 z-10 text-[10px] bg-[#FFFCF7] px-3 py-1 text-[#7B6A5F] border border-[#E7D8C8]">

                  03 / 04
      
                </span>
</div>
<div className="mb-5">
<span className="text-[9px] uppercase tracking-[.24em] text-[#B78A56]">

                  Private salon
      
                </span>
<h3 className="text-xl font-light mt-2">

                Lake House Salon

              </h3>
<p className="text-xs text-[#A99683] mt-1">

                Private weekend · Como

              </p>
</div>
<div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4 text-[10px]">
<div>
<p className="text-[#A99683] uppercase tracking-[.18em] mb-1">Guests</p>
<p>64</p>
</div>
<div>
<p className="text-[#A99683] uppercase tracking-[.18em] mb-1">Days</p>
<p>03</p>
</div>
<div>
<p className="text-[#A99683] uppercase tracking-[.18em] mb-1">Lead</p>
<p>12 wks</p>
</div>
</div>
<div className="border-t border-white/10 mt-4 pt-4 flex items-center justify-between">
<span className="text-[10px] uppercase tracking-[.2em] text-[#A99683]">

                  Destination weekend
      
                </span>
<span className="w-8 h-8 border border-white/15 flex items-center justify-center text-[#B78A56] group-hover:bg-[#B78A56] group-hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</article>
</div>

<div className="fade-section">
<article className="bg-[#FFFCF7] p-4 border border-[#E7D8C8] shadow-[0_14px_36px_rgba(36,26,22,.07),0_3px_10px_rgba(36,26,22,.04)] group transition-transform duration-500 hover:-translate-y-1">
<div className="photo-panel prod-img-founders h-56 mb-5">
<span className="absolute top-4 right-4 z-10 text-[10px] bg-[#FFFCF7] px-3 py-1 text-[#7B6A5F] border border-[#E7D8C8]">

                  04 / 04
      
                </span>
</div>
<div className="mb-5">
<span className="text-[9px] uppercase tracking-[.24em] text-[#B78A56]">

                  Executive retreat
      
                </span>
<h3 className="text-xl font-light text-[#241A16] mt-2">

                Founders Summit

              </h3>
<p className="text-xs text-[#7B6A5F] mt-1">

                Leadership retreat · Aspen

              </p>
</div>
<div className="grid grid-cols-3 gap-2 border-t border-[#E7D8C8] pt-4 text-[10px]">
<div>
<p className="text-[#A99683] uppercase tracking-[.18em] mb-1">Guests</p>
<p className="text-[#241A16]">96</p>
</div>
<div>
<p className="text-[#A99683] uppercase tracking-[.18em] mb-1">Tracks</p>
<p className="text-[#241A16]">05</p>
</div>
<div>
<p className="text-[#A99683] uppercase tracking-[.18em] mb-1">Lead</p>
<p className="text-[#241A16]">8 wks</p>
</div>
</div>
<div className="border-t border-[#E7D8C8] mt-4 pt-4 flex items-center justify-between">
<span className="text-[10px] uppercase tracking-[.2em] text-[#7B6A5F]">

                  Leadership program
      
                </span>
<span className="w-8 h-8 border border-[#E7D8C8] flex items-center justify-center text-[#B78A56] group-hover:bg-[#B78A56] group-hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</article>
</div>
</div>

<div className="mt-14 flex justify-center">
<a className="inline-flex items-center gap-4 bg-[#241A16] text-white px-1 pl-6 py-1 rounded-sm text-xs font-light hover:bg-[#B78A56] transition-colors group shadow-[0_14px_34px_rgba(36,26,22,.12)]" href="#contact">

            View All Productions

            <span className="w-9 h-9 bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#B78A56] transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
</div>
</div>
</section>

<section className="px-6 lg:px-12 py-24 bg-white" id="process">
<div className="max-w-7xl mx-auto">

<div className="text-center mb-16">
<p className="text-[#7B6A5F] text-[10px] font-medium mb-4 uppercase tracking-[.3em]">

            / Approach /

          </p>
<h2 className="section-title text-4xl md:text-6xl font-extralight uppercase tracking-tight text-[#241A16] leading-[1.04]">
<span className="block">
<span className="section-reveal-line">
<span className="section-reveal-word">From</span>
<span className="section-reveal-word">brief</span>
<span className="section-reveal-word">to</span>
</span>
</span>
<span className="block text-[#B78A56]">
<span className="section-reveal-line">
<span className="section-reveal-word">final</span>
<span className="section-reveal-word">guest</span>
<span className="section-reveal-word">departure</span>
</span>
</span>
</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">

<div className="fade-section">
<article className="bg-[#FFFCF7] border border-[#E7D8C8] p-8 min-h-[340px] relative overflow-hidden shadow-[0_14px_36px_rgba(36,26,22,.07),0_3px_10px_rgba(36,26,22,.04)] group transition-transform duration-500 hover:-translate-y-1">
<div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#B78A56]/45 to-transparent">
</div>
<div className="absolute -top-6 right-6 text-[7rem] leading-none text-[#E7D8C8]/40 font-extralight pointer-events-none select-none">

              01

            </div>
<div className="relative z-10 flex flex-col h-full">
<span className="text-[10px] uppercase tracking-[.24em] text-[#B78A56] mb-16">

            Discovery

          </span>
<div className="mt-auto">
<h3 className="text-2xl font-light tracking-tight text-[#241A16] mb-4 whitespace-nowrap">

                  Define the Moment

                </h3>
<p className="text-sm text-[#7B6A5F] leading-relaxed font-light">

                  We clarify the purpose, guest profile, emotional tone, constraints and what success should feel like.

                </p>
</div>
</div>
</article>
</div>

<div className="fade-section">
<article className="bg-[#241A16] text-white border border-[#241A16] p-8 min-h-[340px] relative overflow-hidden shadow-[0_22px_55px_rgba(36,26,22,.18),0_6px_18px_rgba(36,26,22,.10)] group transition-transform duration-500 lg:-translate-y-3 hover:-translate-y-5">
<div className="absolute inset-0 grid-paper opacity-10"></div>
<div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#B78A56]/60 to-transparent">
</div>
<div className="absolute -top-6 right-6 text-[7rem] leading-none text-[#B78A56]/20 font-extralight pointer-events-none select-none">

              02

            </div>
<div className="relative z-10 flex flex-col h-full">
<span className="text-[10px] uppercase tracking-[.24em] text-[#B78A56] mb-16">

            Direction

          </span>
<div className="mt-auto">
<h3 className="text-2xl font-light tracking-tight text-white mb-4 whitespace-nowrap">

                  Build the World

                </h3>
<p className="text-sm text-[#E7D8C8] leading-relaxed font-light">

                  We shape the concept, venue logic, visual language, room rhythm and production map into one cohesive
                  event world.

                </p>
</div>
</div>
</article>
</div>

<div className="fade-section">
<article className="bg-[#241A16] text-white border border-[#241A16] p-8 min-h-[340px] relative overflow-hidden shadow-[0_22px_55px_rgba(36,26,22,.18),0_6px_18px_rgba(36,26,22,.10)] group transition-transform duration-500 lg:-translate-y-3 hover:-translate-y-5">
<div className="absolute inset-0 grid-paper opacity-10"></div>
<div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#B78A56]/60 to-transparent">
</div>
<div className="absolute -top-6 right-6 text-[7rem] leading-none text-[#B78A56]/20 font-extralight pointer-events-none select-none">

              03

            </div>
<div className="relative z-10 flex flex-col h-full">
<span className="text-[10px] uppercase tracking-[.24em] text-[#B78A56] mb-16">

            Production

          </span>
<div className="mt-auto">
<h3 className="text-2xl font-light tracking-tight text-white mb-4 whitespace-nowrap">

                  Command the Room

                </h3>
<p className="text-sm text-[#E7D8C8] leading-relaxed font-light">

                  We centralize vendors, staffing, timing, rehearsals, run-of-show and live decision-making so the
                  experience feels effortless.

                </p>
</div>
</div>
</article>
</div>

<div className="fade-section">
<article className="bg-[#FFFCF7] border border-[#E7D8C8] p-8 min-h-[340px] relative overflow-hidden shadow-[0_14px_36px_rgba(36,26,22,.07),0_3px_10px_rgba(36,26,22,.04)] group transition-transform duration-500 hover:-translate-y-1">
<div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#B78A56]/45 to-transparent">
</div>
<div className="absolute -top-6 right-6 text-[7rem] leading-none text-[#E7D8C8]/40 font-extralight pointer-events-none select-none">

              04

            </div>
<div className="relative z-10 flex flex-col h-full">
<span className="text-[10px] uppercase tracking-[.24em] text-[#B78A56] mb-16">

            Afterglow

          </span>
<div className="mt-auto">
<h3 className="text-2xl font-light tracking-tight text-[#241A16] mb-4 whitespace-nowrap">

                  Close the Memory

                </h3>
<p className="text-sm text-[#7B6A5F] leading-relaxed font-light">

                  We manage guest departure, post-event assets, debriefs and follow-through so the event continues
                  beyond the room.

                </p>
</div>
</div>
</article>
</div>
</div>

<div className="fade-section text-center">
<a className="inline-flex items-center gap-4 bg-[#B78A56] text-white px-1 pl-6 py-1 rounded-sm text-xs font-light hover:bg-[#946D40] transition-colors shadow-[0_14px_34px_rgba(36,26,22,.12)] group" href="#contact">

            Start Planning

            <span className="w-9 h-9 bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#B78A56] transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
</div>
</div>
</section>

<section className="client-notes-section bg-[#241A16] text-white py-24 relative overflow-hidden">
<div className="absolute inset-0 grid-paper opacity-10"></div>

<div className="absolute top-0 right-0 w-[520px] h-[520px] bg-[#B78A56]/10 blur-[120px] rounded-full pointer-events-none">
</div>
<div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-white/5 blur-[100px] rounded-full pointer-events-none">
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-4">
<p className="text-[#A99683] text-[10px] font-medium mb-4 uppercase tracking-[.3em]">
            / Client notes /
          </p>
<h2 className="section-title text-4xl md:text-5xl font-extralight uppercase tracking-tight mb-8 leading-[1.05]">
<span className="block">
<span className="section-reveal-line">
<span className="section-reveal-word">The</span>
<span className="section-reveal-word">room</span>
<span className="section-reveal-word">felt</span>
</span>
</span>
<span className="block text-[#B78A56]">
<span className="section-reveal-line">
<span className="section-reveal-word">inevitable.</span>
</span>
</span>
</h2>
<p className="fade-section text-sm text-[#E7D8C8] leading-relaxed mb-8 font-light max-w-sm">
            The best feedback is not that an event looked beautiful. It is that the entire experience felt composed from
            the first arrival to the final goodbye.
          </p>
<a className="fade-section inline-flex items-center gap-3 text-xs uppercase tracking-[.18em] text-[#B78A56] hover:text-white transition-colors" href="#projects">
            Read more notes
            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="lg:col-span-8 space-y-6">

<article className="fade-section bg-[#FFFCF7] text-[#241A16] border border-[#E7D8C8] p-8 md:p-10 shadow-[0_22px_55px_rgba(0,0,0,.22),0_6px_18px_rgba(0,0,0,.12)] relative overflow-hidden">
<div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#B78A56]/60 to-transparent">
</div>
<div className="flex items-start justify-between gap-8 mb-8">
<span className="text-[10px] uppercase tracking-[.26em] text-[#B78A56]">
            01 / Private
          </span>
<span className="text-[10px] uppercase tracking-[.22em] text-[#A99683]">
            Lake House Salon
          </span>
</div>
<p className="text-2xl md:text-3xl font-light leading-[1.25] tracking-tight mb-8">
              “They translated a complicated brief into an evening that felt calm, cinematic and deeply personal.”
            </p>
<p className="text-sm text-[#7B6A5F] leading-relaxed mb-8 font-light max-w-2xl">
              Every transition was handled before we noticed it. Our guests still talk about the reveal, the pacing, and
              how effortless the entire weekend felt.
            </p>
<div className="border-t border-[#E7D8C8] pt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
<div>
<p className="text-sm text-[#241A16] font-medium">Private Client</p>
<p className="text-xs text-[#7B6A5F] mt-1">Milestone celebration · Como</p>
</div>
<span className="text-[10px] uppercase tracking-[.22em] text-[#A99683]">
            64 guests · 3 days
          </span>
</div>
</article>

<article className="fade-section bg-white/[.045] border border-white/15 p-8 md:p-10 shadow-[0_18px_45px_rgba(0,0,0,.18),inset_0_1px_0_rgba(255,255,255,.06)] relative overflow-hidden">
<div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#B78A56]/45 to-transparent">
</div>
<div className="flex items-start justify-between gap-8 mb-8">
<span className="text-[10px] uppercase tracking-[.26em] text-[#B78A56]">
            02 / Brand
          </span>
<span className="text-[10px] uppercase tracking-[.22em] text-[#A99683]">
            Maison Launch
          </span>
</div>
<p className="text-2xl md:text-3xl font-light leading-[1.25] tracking-tight mb-8 text-white">
              “The production stayed invisible. That was the luxury.”
            </p>
<p className="text-sm text-[#E7D8C8] leading-relaxed mb-8 font-light max-w-2xl">
              The launch had pressure, press, talent, executives and a tight timeline. The room still felt controlled,
              elegant and alive.
            </p>
<div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
<div>
<p className="text-sm text-white font-medium">Brand Director</p>
<p className="text-xs text-[#A99683] mt-1">Product launch · Paris</p>
</div>
<span className="text-[10px] uppercase tracking-[.22em] text-[#A99683]">
            180 guests · press preview
          </span>
</div>
</article>
</div>
</div>
</section>

<section className="px-6 lg:px-12 py-24 bg-white" id="journal">
<div className="max-w-7xl mx-auto">

<div className="text-center mb-16">
<p className="text-[#7B6A5F] text-[10px] font-medium mb-4 uppercase tracking-[.3em]">

            / Field notes /

          </p>
<h2 className="section-title text-4xl md:text-6xl font-extralight uppercase tracking-tight text-[#241A16] leading-[1.04]">
<span className="block">
<span className="section-reveal-line">
<span className="section-reveal-word">Notes</span>
<span className="section-reveal-word">on</span>
<span className="section-reveal-word">designing</span>
</span>
</span>
<span className="block text-[#B78A56]">
<span className="section-reveal-line">
<span className="section-reveal-word">unforgettable</span>
<span className="section-reveal-word">rooms</span>
</span>
</span>
</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="fade-section">
<article className="group bg-[#FFFCF7] border border-[#E7D8C8] p-4 shadow-[0_14px_36px_rgba(36,26,22,.07),0_3px_10px_rgba(36,26,22,.04)] transition-transform duration-500 hover:-translate-y-1">
<div className="photo-panel note-img-pacing h-72 mb-6 overflow-hidden">
<span className="absolute top-4 right-4 z-10 text-[10px] bg-[#FFFCF7] px-3 py-1 text-[#7B6A5F] border border-[#E7D8C8]">

            01 / 03

          </span>
</div>
<div className="px-1 pb-2">
<div className="flex items-center justify-between gap-4 mb-4">
<span className="text-[10px] uppercase tracking-[.22em] text-[#B78A56]">

              Hospitality

            </span>
<span className="text-[10px] uppercase tracking-[.18em] text-[#A99683]">

              08 min

            </span>
</div>
<h3 className="text-2xl font-light text-[#241A16] leading-tight group-hover:text-[#B78A56] transition-colors mb-5">

                How pacing shapes the memory of a dinner

              </h3>
<p className="text-sm text-[#7B6A5F] leading-relaxed font-light mb-6">

                The most memorable dinners are not only designed around the table. They are shaped by arrival, rhythm,
                service, silence and the final goodbye.

              </p>
<div className="border-t border-[#E7D8C8] pt-4 flex items-center justify-between">
<span className="text-[10px] uppercase tracking-[.2em] text-[#7B6A5F]">

              Guest journey

            </span>
<span className="w-8 h-8 border border-[#E7D8C8] flex items-center justify-center text-[#B78A56] group-hover:bg-[#B78A56] group-hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</article>
</div>

<div className="fade-section">
<article className="group bg-[#241A16] text-white border border-[#241A16] p-4 shadow-[0_22px_55px_rgba(36,26,22,.18),0_6px_18px_rgba(36,26,22,.10)] transition-transform duration-500 md:-translate-y-4 hover:-translate-y-6">
<div className="photo-panel note-img-launch h-72 mb-6 overflow-hidden">
<span className="absolute top-4 right-4 z-10 text-[10px] bg-[#FFFCF7] px-3 py-1 text-[#7B6A5F] border border-[#E7D8C8]">

            02 / 03

          </span>
</div>
<div className="px-1 pb-2">
<div className="flex items-center justify-between gap-4 mb-4">
<span className="text-[10px] uppercase tracking-[.22em] text-[#B78A56]">

              Brand

            </span>
<span className="text-[10px] uppercase tracking-[.18em] text-[#A99683]">

              06 min

            </span>
</div>
<h3 className="text-2xl font-light text-white leading-tight group-hover:text-[#B78A56] transition-colors mb-5">

                Why product launches need a stronger reveal system

              </h3>
<p className="text-sm text-[#E7D8C8] leading-relaxed font-light mb-6">

                A launch is not just a room with a stage. The strongest moments are choreographed around anticipation,
                attention, timing and social gravity.

              </p>
<div className="border-t border-white/10 pt-4 flex items-center justify-between">
<span className="text-[10px] uppercase tracking-[.2em] text-[#A99683]">

              Reveal strategy

            </span>
<span className="w-8 h-8 border border-white/15 flex items-center justify-center text-[#B78A56] group-hover:bg-[#B78A56] group-hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</article>
</div>

<div className="fade-section">
<article className="group bg-[#FFFCF7] border border-[#E7D8C8] p-4 shadow-[0_14px_36px_rgba(36,26,22,.07),0_3px_10px_rgba(36,26,22,.04)] transition-transform duration-500 hover:-translate-y-1">
<div className="photo-panel note-img-retreat h-72 mb-6 overflow-hidden">
<span className="absolute top-4 right-4 z-10 text-[10px] bg-[#FFFCF7] px-3 py-1 text-[#7B6A5F] border border-[#E7D8C8]">

            03 / 03

          </span>
</div>
<div className="px-1 pb-2">
<div className="flex items-center justify-between gap-4 mb-4">
<span className="text-[10px] uppercase tracking-[.22em] text-[#B78A56]">

              Executive

            </span>
<span className="text-[10px] uppercase tracking-[.18em] text-[#A99683]">

              05 min

            </span>
</div>
<h3 className="text-2xl font-light text-[#241A16] leading-tight group-hover:text-[#B78A56] transition-colors mb-5">

                Designing retreats that produce better conversations

              </h3>
<p className="text-sm text-[#7B6A5F] leading-relaxed font-light mb-6">

                Executive retreats work best when the environment lowers friction, gives structure to reflection and
                creates room for honest dialogue.

              </p>
<div className="border-t border-[#E7D8C8] pt-4 flex items-center justify-between">
<span className="text-[10px] uppercase tracking-[.2em] text-[#7B6A5F]">

              Conversation design

            </span>
<span className="w-8 h-8 border border-[#E7D8C8] flex items-center justify-center text-[#B78A56] group-hover:bg-[#B78A56] group-hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</article>
</div>
</div>
</div>
</section>

<footer className="bg-[#241A16] text-white px-6 lg:px-12 py-14 relative overflow-hidden" id="contact">
<div className="absolute inset-0 grid-paper opacity-10"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-10 border-b border-white/10">
<div className="lg:col-span-4">
<div className="flex items-center gap-2 mb-6">
<div className="w-9 h-9 bg-[#B78A56] flex items-center justify-center">
<iconify-icon icon="solar:star-shine-linear"></iconify-icon>
</div>
<span className="text-xs uppercase tracking-[.24em]">
                  Echelon Atelier
                </span>
</div>
<p className="text-sm text-[#A99683] leading-relaxed max-w-sm mb-8">
              High-end event planning for private clients, brands, cultural
              institutions and executive teams.
            </p>
<a className="inline-flex items-center gap-4 bg-[#B78A56] text-white px-1 pl-5 py-1 text-xs font-light hover:bg-[#946D40] transition-colors" href="mailto:studio@echelonatelier.com">
              studio@echelonatelier.com
              <span className="w-8 h-8 bg-white/10 flex items-center justify-center">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
</span>
</a>
</div>
<div className="lg:col-span-2">
<h4 className="text-sm font-light mb-5">Studio</h4>
<ul className="space-y-3 text-xs text-[#A99683]">
<li>Services</li>
<li>Portfolio</li>
<li>Process</li>
<li>Journal</li>
</ul>
</div>
<div className="lg:col-span-2">
<h4 className="text-sm font-light mb-5">Events</h4>
<ul className="space-y-3 text-xs text-[#A99683]">
<li>Private Celebrations</li>
<li>Brand Launches</li>
<li>Executive Retreats</li>
<li>Cultural Galas</li>
</ul>
</div>
<div className="lg:col-span-4">
<h4 className="text-sm font-light mb-5">Request availability</h4>
<form className="flex bg-white p-1 max-w-md">
<input className="flex-1 px-4 py-3 text-sm text-[#241A16] outline-none" placeholder="Your email" type="email"/>
<button className="bg-[#B78A56] px-5 text-xs uppercase tracking-[.18em] hover:bg-[#946D40] transition-colors">
                  Submit
                </button>
</form>
<p className="text-xs text-[#A99683] mt-4 leading-relaxed">
              For inquiries, include event type, location, preferred date and
              guest count.
            </p>
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row justify-between gap-4 text-[10px] uppercase tracking-[.22em] text-[#A99683]">
<span>© 2026 Echelon Atelier</span>
<span>Montreal · Paris · New York</span>
</div>
</div>
</footer>
</main>


    </>
  );
}
