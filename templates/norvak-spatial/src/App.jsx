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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


      gsap.registerPlugin(ScrollTrigger);
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // nav underline draw
      document.querySelectorAll('.nav-link').forEach(a => {
        const u = a.querySelector('span');
        a.addEventListener('mouseenter', () => u.style.transform = 'scaleX(1)');
        a.addEventListener('mouseleave', () => u.style.transform = 'scaleX(0)');
      });

      if (reduced) {
        // strip motion entirely
        document.getElementById('loader').remove();
        gsap.set('[data-reveal], .group-card, .float-card, .hero-card, #wordmark, #heroCopy, #metaCard, .typo-line', { clearProps: 'all', opacity: 1 });
        document.querySelectorAll('.process-bar').forEach(b => b.style.transform = 'scaleX(1)');
      } else {
        // ── Lenis smooth scroll ──
        const lenis = new Lenis({ duration: 1.3, smoothWheel: true });
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add(t => lenis.raf(t * 1000));
        gsap.ticker.lagSmoothing(0);
        lenis.stop();

        // initial states
        gsap.set('#wordmark', { yPercent: 40, opacity: 0 });
        gsap.set('.hero-card', { y: 120, opacity: 0, scale: 0.92 });
        gsap.set('#heroCopy', { y: 30, opacity: 0 });
        gsap.set('#metaCard', { y: 30, opacity: 0 });
        gsap.set('.cta-btn', { scale: 0.8, opacity: 0 });

        // ── Hero intro timeline ──
        const heroIntro = gsap.timeline({
          paused: true,
          onComplete() {
            const heroScrub = gsap.timeline({
              scrollTrigger: { trigger: '#hero', start: 'top top', end: '+=150%', pin: true, scrub: 1.5, refreshPriority: 1 }
            });
            heroScrub
              .to('#wordmark', { yPercent: -60, ease: 'none', duration: 1 }, 0)
              .to('#heroCopy, #metaCard', { opacity: 0, y: -40, ease: 'power1.inOut', duration: 0.6 }, 0)
              .to('#cardStack', { y: -80, scale: 1.05, ease: 'none', duration: 1 }, 0)
              .to('.hero-card:nth-child(1)', { rotation: -4, ease: 'none', duration: 1 }, 0)
              .to('.hero-card:nth-child(2)', { x: '-38vw', y: -50, rotation: -9, ease: 'none', duration: 1 }, 0)
              .to('.hero-card:nth-child(3)', { x: '38vw', y: 50, rotation: 9, ease: 'none', duration: 1 }, 0)
              .fromTo('#cardStack, #wordmark', { opacity: 1 }, { opacity: 0, ease: 'power1.in', duration: 0.35, immediateRender: false }, 0.75);
            // re-sort triggers in document order so pins created late (hero)
            // are accounted for before lower sections (e.g. #typo) compute their start
            ScrollTrigger.sort();
            ScrollTrigger.refresh();
            lenis.start();
          }
        });
        heroIntro
          .to('#wordmark', { yPercent: 0, opacity: 1, duration: 1.4, ease: 'power4.out' })
          .to('.hero-card', { y: 0, opacity: 1, scale: 1, duration: 1.2, stagger: 0.12, ease: 'power3.out' }, '-=1')
          .to('#heroCopy', { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }, '-=0.7')
          .to('#metaCard', { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }, '-=0.7')
          .to('.cta-btn', { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' }, '-=0.5');

        // ── Loader ──
        const counter = { v: 0 };
        const countEl = document.getElementById('loaderCount');
        const loadTl = gsap.timeline({
          onComplete() {
            ScrollTrigger.refresh();
            heroIntro.play();
          }
        });
        loadTl
          .to('#loaderBrand', { opacity: 1, filter: 'blur(0px)', duration: 1.2, ease: 'power3.out' })
          .to('#loaderBar', { scaleX: 1, duration: 1.8, ease: 'power2.inOut' }, '-=0.6')
          .to(counter, { v: 100, duration: 1.8, ease: 'power2.inOut',
            onUpdate: () => countEl.textContent = String(Math.round(counter.v)).padStart(3, '0') }, '<')
          .to('#loader', { yPercent: -100, duration: 1, ease: 'power4.inOut', delay: 0.2 })
          .set('#loader', { display: 'none' });

        // ── Pinned typography ──
        const lines = gsap.utils.toArray('.typo-line');
        lines.forEach((l, i) => gsap.set(l, { xPercent: i % 2 ? 60 : -60, opacity: 0 }));
        const typoTl = gsap.timeline({
          scrollTrigger: { trigger: '#typo', start: 'top top', end: '+=160%', pin: true, scrub: 1 }
        });
        lines.forEach((l, i) => typoTl.to(l, { xPercent: 0, opacity: 1, ease: 'none', duration: 1 }, i * 0.35));
        lines.forEach((l, i) => typoTl.to(l, { xPercent: i % 2 ? -18 : 18, opacity: 0.25, ease: 'none', duration: 1 }, '+=' + (i === 0 ? 0.4 : 0)));

        // ── Reusable reveals ──
        gsap.utils.toArray('[data-reveal]').forEach(el => {
          gsap.fromTo(el, { y: 50, opacity: 0 }, {
            y: 0, opacity: 1, duration: 1.1, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%' }
          });
        });

        // ── Parallax fragments ──
        gsap.utils.toArray('.parallax-frame').forEach(frame => {
          const img = frame.querySelector('.parallax-img');
          gsap.fromTo(frame, { y: 60 }, { y: -60, ease: 'none',
            scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: 1 } });
          gsap.fromTo(img, { y: -40, scale: 1.18 }, { y: 40, scale: 1.04, ease: 'none',
            scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: 1 } });
        });

        // ── Card group reveals ──
        gsap.utils.toArray('.card-group').forEach(group => {
          gsap.fromTo(group.querySelectorAll('.group-card'),
            { y: 80, opacity: 0, rotation: 2 },
            { y: 0, opacity: 1, rotation: 0, duration: 1.1, stagger: 0.15, ease: 'power3.out',
              scrollTrigger: { trigger: group, start: 'top 82%' } });
        });

        // ── Archive horizontal drift ──
        const track = document.getElementById('archiveTrack');
        gsap.to(track, {
          x: () => -(track.scrollWidth - window.innerWidth + 48),
          ease: 'none',
          scrollTrigger: { trigger: '#archive', start: 'top bottom', end: 'bottom top', scrub: 1.2 }
        });

        // ── Masked number float-out cards ──
        const floats = gsap.utils.toArray('.float-card');
        gsap.fromTo(floats, { y: 100, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: '#masked', start: 'top 60%' }
        });
        gsap.to(floats[0], { x: -40, y: -30, ease: 'none',
          scrollTrigger: { trigger: '#masked', start: 'top top', end: 'bottom top', scrub: 1 } });
        gsap.to(floats[1], { x: 40, y: 30, ease: 'none',
          scrollTrigger: { trigger: '#masked', start: 'top top', end: 'bottom top', scrub: 1 } });

        // ── Process bars ──
        gsap.utils.toArray('.process-row').forEach((row, i) => {
          gsap.to(row.querySelector('.process-bar'), {
            scaleX: 1, duration: 1.4, delay: i * 0.12, ease: 'power3.inOut',
            scrollTrigger: { trigger: row, start: 'top 85%' }
          });
        });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full h-screen z-30 absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="UtvhDctN8AjL6tvf1yKd"></div>

</div></div>


<div className="fixed inset-0 z-[100] bg-[#0a0d1f] flex flex-col items-center justify-center" id="loader">
<div className="text-5xl sm:text-7xl md:text-8xl text-white blur-xl opacity-0 font-geist tracking-tighter" id="loaderBrand">
        NORVAK
        <span className="text-orange-500 font-geist tracking-tighter">®</span>
</div>
<div className="w-48 sm:w-64 h-px bg-white/10 mt-10 overflow-hidden">
<div className="h-full w-full bg-orange-500 origin-left scale-x-0" id="loaderBar"></div>
</div>
<div className="mt-4 text-xs font-medium tracking-[0.3em] text-white/40 tabular-nums font-geist" id="loaderCount">
        000
      </div>
</div>
<header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#0a0d1f]/40 border-b border-white/5">
<nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-sm font-semibold tracking-tight font-geist" href="#">
            NORVAK
            <span className="text-orange-500 font-geist">®</span>
</a>
<div className="hidden md:flex items-center gap-6">
<a className="nav-link relative text-sm text-white/60 hover:text-white transition-colors font-geist" href="#">
              Studios
              <span className="absolute -bottom-1 left-0 h-px w-full bg-orange-500 origin-left scale-x-0 transition-transform duration-300"></span>
</a>
<a className="nav-link relative text-sm text-white/60 hover:text-white transition-colors font-geist" href="#">
              Services
              <span className="absolute -bottom-1 left-0 h-px w-full bg-orange-500 origin-left scale-x-0 transition-transform duration-300"></span>
</a>
<a className="nav-link relative text-sm text-white/60 hover:text-white transition-colors font-geist" href="#">
              Projects
              <span className="absolute -bottom-1 left-0 h-px w-full bg-orange-500 origin-left scale-x-0 transition-transform duration-300"></span>
</a>
<a className="nav-link relative text-sm text-white/60 hover:text-white transition-colors font-geist" href="#">
              Philosophy
              <span className="absolute -bottom-1 left-0 h-px w-full bg-orange-500 origin-left scale-x-0 transition-transform duration-300"></span>
</a>
<a className="nav-link relative text-sm text-white/60 hover:text-white transition-colors font-geist" href="#">
              About
              <span className="absolute -bottom-1 left-0 h-px w-full bg-orange-500 origin-left scale-x-0 transition-transform duration-300"></span>
</a>
</div>
</div>
<a className="cta-btn group inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] border border-white/20 rounded-full px-5 py-2.5 hover:bg-white hover:text-[#0a0d1f] transition-all duration-300 will-change-transform font-geist" href="#">
          CONTACT US
          <i className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" data-lucide="arrow-up-right"></i>
</a>
</nav>
</header>

<section className="relative min-h-screen flex flex-col justify-end overflow-hidden pt-24" id="hero">
<div className="absolute inset-0 bg-gradient-to-b from-[#0a0d1f] via-[#0e1228] to-[#0a0d1f]"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
<h1 className="select-none text-[20vw] leading-[0.85] text-center will-change-transform font-geist tracking-tighter" id="wordmark">
          NORVAK
          <span className="text-orange-500 font-geist tracking-tighter">®</span>
</h1>
</div>
<div className="relative z-20 max-w-7xl mx-auto px-6 w-full pb-16 -mt-[6vw] will-change-transform" id="cardStack">
<div className="relative h-[44vh] sm:h-[52vh]">
<div className="hero-card absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[72%] sm:w-[55%] md:w-[44%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/60 ring-1 ring-white/10 will-change-transform z-30">
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4b50cb39-bc4a-4ab6-aedb-35059ee9a27b_3840w.png"/>
</div>
<div className="hero-card absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[58%] sm:w-[42%] md:w-[32%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/60 ring-1 ring-white/10 will-change-transform z-20">
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bc7ec2fe-5fd2-4bd1-98f3-59df087c55c1_3840w.png"/>
</div>
<div className="hero-card absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[58%] sm:w-[42%] md:w-[32%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/60 ring-1 ring-white/10 will-change-transform z-10">
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dd1cc8f2-4a00-4b90-8202-81f7de2ade64_3840w.png"/>
</div>
</div>
</div>
<div className="absolute bottom-8 right-6 z-30 hidden md:flex items-center gap-4 rounded-xl bg-white/5 backdrop-blur-xl ring-1 ring-white/10 p-4 will-change-transform" id="metaCard">
<img alt="" className="w-14 h-14 rounded-lg object-cover" src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-xs tracking-[0.25em] text-white/40 font-geist">
            EST. 2003
          </p>
<p className="text-sm font-medium mt-1 font-geist">
            Halvör Residence — Oslo
          </p>
</div>
</div>
<div className="absolute bottom-8 left-6 z-30 max-w-xs will-change-transform" id="heroCopy">
<p className="text-sm text-white/50 leading-relaxed font-geist">
          Full-service spatial studio crafting residences and immersive
          environments across the Nordic coast.
        </p>
</div>
</section>

<section className="relative bg-[#f4f3ef] text-[#0a0d1f] py-28 md:py-40">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight max-w-3xl font-geist tracking-tighter" data-reveal="">
          We dedicate ourselves wholeheartedly
          <span className="inline-flex items-center justify-center align-middle w-8 h-8 rounded-md bg-orange-500 mx-1">
<i className="w-5 h-5 text-white" data-lucide="asterisk"></i>
</span>
          to our clients and the
          <span className="text-[#0a0d1f]/30 font-geist tracking-tighter">
            services we provide, bringing more intention.
          </span>
</h2>
<div className="grid md:grid-cols-3 gap-10 mt-20 items-start">
<div data-reveal="">
<span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] border border-[#0a0d1f]/20 rounded-full px-4 py-2 font-geist">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              WHO WE ARE
            </span>
</div>
<div data-reveal="">
<p className="text-sm leading-relaxed text-[#0a0d1f]/60 max-w-sm font-geist">
              We are a full-spectrum design and property studio specializing in
              residential and cultural environments. With deep regional
              knowledge and a client-first method, we guide owners and investors
              through every phase of the journey.
            </p>
<a className="group inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] mt-6 border-b border-[#0a0d1f] pb-1 font-geist" href="#">
              CONTACT US
              <i className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" data-lucide="arrow-up-right"></i>
</a>
</div>
<div className="md:text-right" data-reveal="">
<p className="text-6xl md:text-7xl font-geist tracking-tighter">
              620
              <span className="text-orange-500 font-geist tracking-tighter">+</span>
</p>
<p className="text-xs tracking-[0.2em] text-[#0a0d1f]/40 mt-2 font-geist">
              COMPLETED COMMISSIONS
            </p>
</div>
</div>

<div className="grid grid-cols-3 gap-4 mt-24">
<div className="parallax-frame overflow-hidden rounded-xl aspect-[4/5] will-change-transform">
<img alt="" className="parallax-img w-full h-full object-cover will-change-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c2bcdbaa-9b24-4e6c-9c87-745c573ad448_3840w.png"/>
</div>
<div className="parallax-frame overflow-hidden rounded-xl aspect-[4/5] mt-10 will-change-transform">
<img alt="" className="parallax-img w-full h-full object-cover will-change-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/db460ef8-f930-44cb-8598-1e1017ae0639_3840w.png"/>
</div>
<div className="parallax-frame overflow-hidden rounded-xl aspect-[4/5] will-change-transform">
<img alt="" className="parallax-img w-full h-full object-cover will-change-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa9d0eac-e10a-471d-aa2d-62151d6bfbbf_3840w.png"/>
</div>
</div>
<div className="flex justify-between mt-6 text-xs tracking-[0.2em] text-[#0a0d1f]/40">
<span className="font-geist" data-reveal="">MORE THAN ARCHITECTURE.</span>
<span className="font-geist" data-reveal="">WE BUILD CONVICTION.</span>
</div>
</div>
</section>

<section className="relative bg-[#0a0d1f] h-screen overflow-hidden flex flex-col items-center justify-center" id="typo">
<p className="typo-line text-[11vw] md:text-[8vw] leading-none will-change-transform font-geist tracking-tighter">
        A GATEWAY TO
      </p>
<p className="typo-line text-[11vw] md:text-[8vw] leading-none text-orange-500 will-change-transform font-geist tracking-tighter">
        IMMERSIVE
      </p>
<p className="typo-line text-[11vw] md:text-[8vw] leading-none will-change-transform font-geist tracking-tighter">
        SPATIAL CRAFT
      </p>
<span className="absolute top-24 right-6 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] border border-white/15 rounded-full px-4 py-2 text-white/60 font-geist">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
        FEATURED LISTINGS
      </span>
</section>

<section className="relative bg-[#0a0d1f] py-28">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 items-end mb-20">
<h3 className="text-3xl md:text-4xl leading-tight font-geist tracking-tighter" data-reveal="">
            Bringing dream properties and visions
            <span className="text-white/30 font-geist tracking-tighter">
              into reality with impeccable results.
            </span>
</h3>
<p className="text-sm text-white/40 leading-relaxed max-w-sm md:justify-self-end font-geist" data-reveal="">
            With deep local knowledge and a client-first approach, we guide
            buyers and investors through every stage of the journey — from
            concept to keys.
          </p>
</div>
<div className="card-group grid sm:grid-cols-3 gap-4">
<div className="group-card rounded-2xl bg-white/[0.04] backdrop-blur-xl ring-1 ring-white/10 p-7 hover:-translate-y-1.5 transition-transform duration-500 will-change-transform">
<div className="flex items-start justify-between">
<p className="text-5xl font-geist tracking-tighter">
                1700
                <span className="text-orange-500 text-2xl align-top font-geist tracking-tighter">
                  m²
                </span>
</p>
<i className="w-5 h-5 text-orange-500" data-lucide="arrow-up-right"></i>
</div>
<p className="text-sm text-white/40 mt-5 leading-relaxed font-geist">
              Our signature penthouses are sculpted around fjord light and
              silence.
            </p>
</div>
<div className="group-card rounded-2xl bg-white/[0.04] backdrop-blur-xl ring-1 ring-white/10 p-7 hover:-translate-y-1.5 transition-transform duration-500 will-change-transform">
<div className="flex items-start justify-between">
<p className="text-5xl font-geist tracking-tighter">
                74
                <span className="text-orange-500 text-2xl align-top font-geist tracking-tighter">
                  %
                </span>
</p>
<i className="w-5 h-5 text-orange-500" data-lucide="arrow-up-right"></i>
</div>
<p className="text-sm text-white/40 mt-5 leading-relaxed font-geist">
              Of commissions arrive through referral — built on quiet, lasting
              trust.
            </p>
</div>
<div className="group-card rounded-2xl bg-white/[0.04] backdrop-blur-xl ring-1 ring-white/10 p-7 hover:-translate-y-1.5 transition-transform duration-500 will-change-transform">
<div className="flex items-start justify-between">
<p className="text-5xl font-geist tracking-tighter">
                98.6
                <span className="text-orange-500 text-2xl align-top font-geist tracking-tighter">
                  %
                </span>
</p>
<i className="w-5 h-5 text-orange-500" data-lucide="arrow-up-right"></i>
</div>
<p className="text-sm text-white/40 mt-5 leading-relaxed font-geist">
              Of clients supported within 24 hours, anywhere in the world.
            </p>
</div>
</div>
</div>
</section>

<section className="relative bg-[#0a0d1f] py-28">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
<span className="text-xs tracking-[0.25em] text-white/40 font-geist" data-reveal="">
            [ SELECTED WORK ]
          </span>
<h3 className="text-4xl md:text-5xl md:text-right leading-tight font-geist tracking-tighter" data-reveal="">
            THE PASSION IS
            <br/>
            BUILT-IN
          </h3>
</div>
<div className="card-group grid md:grid-cols-3 gap-6">
<a className="group-card group block hover:-translate-y-1.5 transition-transform duration-500 will-change-transform" href="#">
<div className="overflow-hidden rounded-2xl aspect-[4/5]">
<img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d9eb31a-c32e-4bfd-b031-ce0524eec368_3840w.png"/>
</div>
<div className="flex justify-between mt-4 text-xs tracking-[0.2em] text-white/40">
<span className="font-geist">HOUSING</span>
<span className="font-geist">420 M²</span>
</div>
<p className="text-sm font-medium mt-1.5 font-geist">Lindholm Cabin</p>
</a>
<a className="group-card group block md:mt-16 hover:-translate-y-1.5 transition-transform duration-500 will-change-transform" href="#">
<div className="overflow-hidden rounded-2xl aspect-[4/5]">
<img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c154a781-5068-4f33-8f6e-226d313b7be2_3840w.png"/>
</div>
<div className="flex justify-between mt-4 text-xs tracking-[0.2em] text-white/40">
<span className="font-geist">RESIDENCE</span>
<span className="font-geist">680 M²</span>
</div>
<p className="text-sm font-medium mt-1.5 font-geist">
              Vestre Apartment
            </p>
</a>
<a className="group-card group block md:mt-32 hover:-translate-y-1.5 transition-transform duration-500 will-change-transform" href="#">
<div className="overflow-hidden rounded-2xl aspect-[4/5]">
<img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ab506a13-7aa3-443c-b74e-73cf2b8dd54d_3840w.png"/>
</div>
<div className="flex justify-between mt-4 text-xs tracking-[0.2em] text-white/40">
<span className="font-geist">ESTATE</span>
<span className="font-geist">910 M²</span>
</div>
<p className="text-sm font-medium mt-1.5 font-geist">
              Aurland Pavilion
            </p>
</a>
</div>
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-20">
<h4 className="text-3xl md:text-4xl font-geist tracking-tighter" data-reveal="">
            CAPTURES THE
            <br/>
            TRUE CHARACTER
          </h4>
<a className="group inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] border-b border-white pb-1 font-geist" data-reveal="" href="#">
            VIEW MORE PROJECTS
            <i className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
</section>

<section className="relative bg-[#0a0d1f] py-20 overflow-hidden border-y border-white/5" id="archive">
<p className="text-xs tracking-[0.25em] text-white/40 px-6 max-w-7xl mx-auto mb-10 font-geist" data-reveal="">
        [ THE ARCHIVE — 2003 → TODAY ]
      </p>
<div className="flex gap-5 will-change-transform pl-6" id="archiveTrack" style={{width: 'max-content'}}>
<div className="w-64 sm:w-80 aspect-[3/4] rounded-xl overflow-hidden shrink-0 ring-1 ring-white/10">
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3ee60fc7-fc69-4bf3-99d8-9ac2bd36c178_1600w.png"/>
</div>
<div className="w-64 sm:w-80 aspect-[3/4] rounded-xl overflow-hidden shrink-0 ring-1 ring-white/10">
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/26f197e7-332b-48f0-ac33-58e8b9591b33_1600w.png"/>
</div>
<div className="w-64 sm:w-80 aspect-[3/4] rounded-xl overflow-hidden shrink-0 ring-1 ring-white/10">
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6070cfa2-6e85-454b-91a0-f04dcf80d3d8_1600w.png"/>
</div>
<div className="w-64 sm:w-80 aspect-[3/4] rounded-xl overflow-hidden shrink-0 ring-1 ring-white/10">
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b22c6e48-7e73-4303-b709-943feefe9ddf_1600w.png"/>
</div>
<div className="w-64 sm:w-80 aspect-[3/4] rounded-xl overflow-hidden shrink-0 ring-1 ring-white/10">
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b53fd971-1d5d-4e6b-8983-933073de8b0b_1600w.png"/>
</div>
<div className="w-64 sm:w-80 aspect-[3/4] rounded-xl overflow-hidden shrink-0 ring-1 ring-white/10">
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8663e7b0-c1b5-4275-b305-0051d8fce1ec_1600w.png"/>
</div>
</div>
</section>

<section className="relative bg-[#0a0d1f] py-32 overflow-hidden" id="masked">
<div className="max-w-7xl mx-auto px-6 relative">
<h3 className="text-[34vw] md:text-[26vw] leading-none text-center bg-clip-text text-transparent select-none font-geist tracking-tighter" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6419b50d-2b39-4cd8-8331-f25ea4e5c6f1_3840w.png")', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundClip: 'text'}}>
          21
        </h3>
<p className="text-center text-xs tracking-[0.3em] text-white/40 mt-4 font-geist" data-reveal="">
          YEARS OF QUIET, DELIBERATE WORK
        </p>
<div className="relative grid sm:grid-cols-2 gap-6 mt-16 max-w-3xl mx-auto">
<a className="float-card group rounded-2xl bg-white/[0.04] backdrop-blur-xl ring-1 ring-white/10 p-6 hover:-translate-y-1.5 transition-transform duration-500 will-change-transform" href="#">
<div className="overflow-hidden rounded-xl aspect-video mb-5">
<img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1424bc30-132d-4f48-aaac-82b03eeb35a2_3840w.png"/>
</div>
<div className="flex items-center justify-between">
<p className="text-sm font-medium font-geist">Brennvik Apartment</p>
<i className="w-4 h-4 text-orange-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" data-lucide="arrow-up-right"></i>
</div>
<p className="text-xs tracking-[0.2em] text-white/40 mt-1.5 font-geist">
              APARTMENT — 540 M²
            </p>
</a>
<a className="float-card group rounded-2xl bg-white/[0.04] backdrop-blur-xl ring-1 ring-white/10 p-6 sm:mt-12 hover:-translate-y-1.5 transition-transform duration-500 will-change-transform" href="#">
<div className="overflow-hidden rounded-xl aspect-video mb-5">
<img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c6b040ea-bcb4-4edb-89c4-e09134ee9a4e_3840w.png"/>
</div>
<div className="flex items-center justify-between">
<p className="text-sm font-medium font-geist">Søvang Courtyard</p>
<i className="w-4 h-4 text-orange-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" data-lucide="arrow-up-right"></i>
</div>
<p className="text-xs tracking-[0.2em] text-white/40 mt-1.5 font-geist">
              RESIDENCE — 720 M²
            </p>
</a>
</div>
</div>
</section>

<section className="relative bg-[#f4f3ef] text-[#0a0d1f] py-28 md:py-40" id="process">
<div className="max-w-7xl mx-auto px-6">
<span className="text-xs tracking-[0.25em] text-[#0a0d1f]/40 font-geist" data-reveal="">
          [ HOW WE WORK ]
        </span>
<h3 className="text-4xl md:text-5xl mt-4 mb-20 font-geist tracking-tighter" data-reveal="">
          THE PROCESS
        </h3>
<div className="space-y-14">
<div className="process-row">
<div className="flex justify-between items-baseline mb-4">
<p className="text-sm font-semibold font-geist">
<span className="text-orange-500 mr-3 font-geist">01</span>
                Listening &amp; Brief
              </p>
<p className="text-xs tracking-[0.2em] text-[#0a0d1f]/40 font-geist">
                WEEKS 1–3
              </p>
</div>
<div className="h-px bg-[#0a0d1f]/10">
<div className="process-bar h-full bg-orange-500 origin-left scale-x-0 will-change-transform"></div>
</div>
</div>
<div className="process-row">
<div className="flex justify-between items-baseline mb-4">
<p className="text-sm font-semibold font-geist">
<span className="text-orange-500 mr-3 font-geist">02</span>
                Concept &amp; Spatial Study
              </p>
<p className="text-xs tracking-[0.2em] text-[#0a0d1f]/40 font-geist">
                WEEKS 4–10
              </p>
</div>
<div className="h-px bg-[#0a0d1f]/10">
<div className="process-bar h-full bg-orange-500 origin-left scale-x-0 will-change-transform"></div>
</div>
</div>
<div className="process-row">
<div className="flex justify-between items-baseline mb-4">
<p className="text-sm font-semibold font-geist">
<span className="text-orange-500 mr-3 font-geist">03</span>
                Detail &amp; Materiality
              </p>
<p className="text-xs tracking-[0.2em] text-[#0a0d1f]/40 font-geist">
                MONTHS 3–6
              </p>
</div>
<div className="h-px bg-[#0a0d1f]/10">
<div className="process-bar h-full bg-orange-500 origin-left scale-x-0 will-change-transform"></div>
</div>
</div>
<div className="process-row">
<div className="flex justify-between items-baseline mb-4">
<p className="text-sm font-semibold font-geist">
<span className="text-orange-500 mr-3 font-geist">04</span>
                Delivery &amp; Aftercare
              </p>
<p className="text-xs tracking-[0.2em] text-[#0a0d1f]/40 font-geist">
                ONGOING
              </p>
</div>
<div className="h-px bg-[#0a0d1f]/10">
<div className="process-bar h-full bg-orange-500 origin-left scale-x-0 will-change-transform"></div>
</div>
</div>
</div>
</div>
</section>

<section className="relative h-[80vh] overflow-hidden flex items-center justify-center">
<div className="parallax-frame absolute inset-0 will-change-transform">
<img alt="" className="parallax-img w-full h-full object-cover will-change-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bfc9440-1f64-45b0-9bab-d25d661ae8a1_3840w.png"/>
</div>
<div className="absolute inset-0 bg-[#0a0d1f]/55"></div>
<div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
<p className="text-2xl sm:text-3xl md:text-4xl leading-snug font-geist tracking-tighter" data-reveal="">
          We believe a home isn't just a transaction —
          <span className="text-white/40 font-geist tracking-tighter">
            it's a life-changing experience.
          </span>
</p>
<p className="text-sm font-medium mt-8 font-geist" data-reveal="">
          Ingrid Møller
        </p>
<p className="text-xs tracking-[0.2em] text-white/40 mt-1 font-geist" data-reveal="">
          FOUNDING PARTNER
        </p>
</div>
</section>

<footer className="relative bg-[#0a0d1f] pt-28 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between text-xs tracking-[0.2em] text-white/40 border-b border-white/10 pb-8">
<span className="font-geist">EST. 03</span>
<span className="hidden sm:block font-geist">
            QUALITY // URBANITY // SUSTAINABILITY
          </span>
<span className="font-geist">MENU</span>
</div>
<div className="text-center py-20">
<a className="block text-3xl sm:text-4xl md:text-5xl hover:text-white/70 transition-colors font-geist tracking-tighter" data-reveal="" href="tel:+014478220194">
            +01 447 822-01-94
          </a>
<a className="block text-3xl sm:text-4xl md:text-5xl text-orange-500 mt-2 hover:text-orange-400 transition-colors font-geist tracking-tighter" data-reveal="" href="mailto:hello@norvak.studio">
            hello@norvak.studio
          </a>
</div>
<div className="grid sm:grid-cols-3 gap-8 text-xs text-white/40 pb-16">
<div>
<p className="font-geist">ALL RIGHTS RESERVED.</p>
<p className="mt-1 font-geist">©2024 NORVAK</p>
</div>
<div className="sm:text-center">
<p className="font-geist">14 BRYGGEN QUAY, BERGEN</p>
<p className="mt-1 font-geist">NORWAY 5003</p>
</div>
<div className="sm:text-right space-x-4">
<a className="hover:text-white transition-colors font-geist" href="#">
              INSTAGRAM
            </a>
<a className="hover:text-white transition-colors font-geist" href="#">
              LINKEDIN
            </a>
<a className="hover:text-white transition-colors font-geist" href="#">
              PRIVACY
            </a>
</div>
</div>
</div>
<p className="select-none text-[24vw] leading-[0.75] text-white/[0.04] text-center -mb-[4vw] font-geist tracking-tighter">
        NORVAK
      </p>
</footer>


    </>
  );
}
