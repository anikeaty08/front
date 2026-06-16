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



      const mobileMenuButton = document.getElementById('mobileMenuButton');
      const mobileMenu = document.getElementById('mobileMenu');

      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });

      mobileMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
        });
      });

      document.querySelectorAll('.accordion-button').forEach((button) => {
        button.addEventListener('click', () => {
          const item = button.closest('.accordion-item');
          const panel = item.querySelector('.accordion-panel');
          const icon = item.querySelector('.accordion-icon');
          const isOpen = panel.style.maxHeight;

          document.querySelectorAll('.accordion-panel').forEach((otherPanel) => {
            otherPanel.style.maxHeight = null;
          });

          document.querySelectorAll('.accordion-icon').forEach((otherIcon) => {
            otherIcon.classList.remove('rotate-45');
          });

          if (!isOpen) {
            panel.style.maxHeight = panel.scrollHeight + 'px';
            icon.classList.add('rotate-45');
          }
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen overflow-hidden">
<header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0d0d0d]/80 backdrop-blur-xl">
<nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
<a className="group inline-flex items-center gap-3" href="#hero">
<div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.04] ring-1 ring-white/10 transition group-hover:bg-[#7c3aed]/15 group-hover:ring-[#7c3aed]/40">
<span className="text-sm font-semibold tracking-tighter text-white" style={{fontFamily: 'Montserrat, sans-serif'}}>
                BH
              </span>
</div>
<span className="text-sm font-semibold tracking-tight text-white" style={{fontFamily: 'Montserrat, sans-serif'}}>
              Bartosz Hajdukiewicz
            </span>
</a>
<div className="hidden items-center gap-7 md:flex">
<a className="text-xs font-medium text-[#d9d9d9]/70 transition hover:text-white" href="#portfolio">
              Portfolio
            </a>
<a className="text-xs font-medium text-[#d9d9d9]/70 transition hover:text-white" href="#faq">
              FAQ
            </a>
</div>
<a className="hidden rounded-full bg-[#7c3aed] px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-[#7c3aed]/20 transition hover:-translate-y-0.5 hover:bg-[#8b5cf6] hover:shadow-[#7c3aed]/35 active:translate-y-0 md:inline-flex" href="#final-cta">
            Umów darmową konsultację
          </a>
<button aria-label="Open menu" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white md:hidden" id="mobileMenuButton">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</nav>
<div className="hidden border-t border-white/10 bg-[#0d0d0d]/95 px-5 py-5 backdrop-blur-xl md:hidden" id="mobileMenu">
<div className="flex flex-col gap-4">
<a className="text-sm font-medium text-[#d9d9d9]/80" href="#partnerships">
              Zaufali nam
            </a>
<a className="text-sm font-medium text-[#d9d9d9]/80" href="#portfolio">
              Portfolio
            </a>
<a className="text-sm font-medium text-[#d9d9d9]/80" href="#faq">FAQ</a>
<a className="mt-2 inline-flex items-center justify-center rounded-full bg-[#7c3aed] px-5 py-3 text-sm font-semibold text-white" href="#final-cta">
              Check if You Qualify
            </a>
</div>
</div>
</header>
<main className="">
<section className="flex min-h-0 sm:px-6 lg:px-8 lg:pt-20 pt-16 pr-8 pb-4 pl-8 relative items-start justify-center" id="hero">
<div className="absolute inset-0 -z-10">
<div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#7c3aed]/20 blur-3xl"></div>
<div className="absolute bottom-20 left-10 h-72 w-72 rounded-full bg-[#7c3aed]/10 blur-3xl"></div>
<div className="absolute right-10 top-1/3 h-72 w-72 rounded-full bg-white/[0.03] blur-3xl"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.08),transparent_35%)]"></div>
</div>
<div className="text-center max-w-6xl mt-3 mr-auto ml-auto">
<div className="inline-flex shadow-black/30 border-white/10 border rounded-full mb-2 pt-2 pr-4 pb-2 pl-4 shadow-2xl backdrop-blur gap-x-2 gap-y-2 items-center">
<span className="h-2 w-2 rounded-full bg-[#7c3aed] shadow-lg shadow-[#7c3aed]/70"></span>
<span className="text-xs font-normal text-[#d9d9d9]/75">
                Strategiczny wzrost YouTube dla B2B
              </span>
</div>
<h1 className="text-4xl font-medium text-white tracking-tight max-w-5xl ml-auto mr-auto relative sm:text-5xl md:text-6xl lg:text-6xl" style={{fontFamily: 'Montserrat, sans-serif'}}>
              Kompleksowe prowadzenie kanałów YouTube od A do Z.
            </h1>
<p className="leading-8 text-base font-light text-[#d9d9d9]/75 max-w-2xl mt-2 mr-auto ml-auto sm:text-base">
              Przejmuję cały proces tworzenia filmów na YouTube – od strategii
              po publikację.
              <br/>
              Dzięki temu Twoim jedynym zadaniem jest włączenie kamery.
            </p>
<div className="flex flex-col gap-4 sm:flex-row mt-8 gap-x-4 gap-y-4 items-center justify-center">
<a className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#7c3aed] px-7 py-4 text-sm font-medium text-white shadow-2xl shadow-[#7c3aed]/25 ring-1 ring-[#a78bfa]/30 transition hover:-translate-y-1 hover:bg-[#8b5cf6] hover:shadow-[#7c3aed]/40 active:translate-y-0 sm:w-auto" href="#final-cta" style={{boxShadow: '0 0 18px rgba(124, 58, 237, 0.28), 0 20px 40px -18px rgba(124, 58, 237, 0.45)', textShadow: '0 0 8px rgba(255, 255, 255, 0.5)'}}>
                Umów darmową konsultację
                <iconify-icon className="text-lg transition group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="group relative mx-auto mt-10 max-w-[62rem]" id="video">
<div className="absolute -inset-1 scale-[1.1] rounded-[2rem] bg-[#7c3aed]/35 blur-2xl opacity-50 transition group-hover:opacity-75">
</div>
<div className="relative overflow-hidden rounded-[2rem] border border-[#7c3aed]/45 bg-[#141414] shadow-2xl shadow-black/40">
<div className="aspect-video">
<div className="flex aspect-video w-full h-auto items-center justify-center" style={{aspectRatio: '16 / 9'}}>
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full rounded-2xl shadow-xl border-0" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/OoWjBfARq2Y?start=627" title="YouTube video player"></iframe>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="px-5 pt-0 pb-14 sm:px-6 lg:px-8" id="partnerships">
<style>
            @keyframes aura-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}.aura-marquee-track{animation:aura-marquee 28s linear infinite}.aura-marquee-track:hover{animation-play-state:paused}@media (prefers-reduced-motion:reduce){.aura-marquee-track{animation:none}}
          </style>
<div className="mx-auto max-w-7xl">
<div className="relative py-6">
<p className="text-sm font-light text-[#d9d9d9]/50 text-center relative bottom-2">
    Firmy i twórcy, dla których dostarczałem content.
  </p>
<div className="relative mt-4 overflow-hidden" onmouseenter="const track = this.querySelector('.aura-marquee-track'); if(track) track.getAnimations().forEach(a =&gt; a.playbackRate = 0.5);" onmouseleave="const track = this.querySelector('.aura-marquee-track'); if(track) track.getAnimations().forEach(a =&gt; a.playbackRate = 0.8);">
<div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0d0d0d] to-transparent">
</div>
<div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0d0d0d] to-transparent">
</div>
<div className="aura-marquee-track flex gap-3 w-max pr-3 pl-3 gap-x-3 gap-y-3 items-center" style={{animationPlayState: 'running !important'}}>
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<article className="flex min-w-[242px] gap-3.5 shadow-black/20 border-white/10 border rounded-xl pt-2.5 pr-3.5 pb-2.5 pl-3.5 shadow-lg backdrop-blur gap-x-3.5 gap-y-3.5 items-center">
<img alt="Mattia Centini" className="h-[42px] w-[42px] rounded-full object-cover ring-1 ring-white/15" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="">
<h3 className="text-[15px] font-medium text-white">
              Mattia Centini
            </h3>
<p className="mt-0.5 text-[11.5px] text-[#d9d9d9]/50">
              100k+ subskrybentów
            </p>
</div>
</article>
<article className="flex min-w-[242px] gap-3.5 shadow-black/20 border-white/10 border rounded-xl pt-2.5 pr-3.5 pb-2.5 pl-3.5 shadow-lg backdrop-blur gap-x-3.5 gap-y-3.5 items-center">
<img alt="Kowalscy Team" className="h-[42px] w-[42px] rounded-full object-cover ring-1 ring-white/15" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="">
<h3 className="text-[15px] font-medium text-white">
              Kowalscy Team
            </h3>
<p className="mt-0.5 text-[11.5px] text-[#d9d9d9]/50">
              250k+ subskrybentów
            </p>
</div>
</article>
<article className="flex min-w-[242px] items-center gap-3.5 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 shadow-lg shadow-black/20 backdrop-blur">
<img alt="True Dates" className="h-[42px] w-[42px] rounded-full object-cover ring-1 ring-white/15" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div>
<h3 className="text-[15px] font-medium text-white">
              True Dates
            </h3>
<p className="mt-0.5 text-[11.5px] text-[#d9d9d9]/50">
              50k+ subskrybentów
            </p>
</div>
</article>
<article className="flex min-w-[242px] items-center gap-3.5 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 shadow-lg shadow-black/20 backdrop-blur">
<img alt="Costa Broker" className="h-[42px] w-[42px] rounded-full object-cover ring-1 ring-white/15" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="">
<h3 className="text-[15px] font-medium text-white">
              Costa Broker
            </h3>
<p className="mt-0.5 text-[11.5px] text-[#d9d9d9]/50">
              75k+ subskrybentów
            </p>
</div>
</article>
<article className="flex min-w-[242px] items-center gap-3.5 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 shadow-lg shadow-black/20 backdrop-blur">
<img alt="Hello Cypr" className="h-[42px] w-[42px] rounded-full object-cover ring-1 ring-white/15" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="">
<h3 className="text-[15px] font-medium text-white">
              Hello Cypr
            </h3>
<p className="mt-0.5 text-[11.5px] text-[#d9d9d9]/50">
              40k+ subskrybentów
            </p>
</div>
</article>
<article className="flex min-w-[242px] items-center gap-3.5 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 shadow-lg shadow-black/20 backdrop-blur">
<img alt="Business Partners" className="h-[42px] w-[42px] rounded-full object-cover ring-1 ring-white/15" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div>
<h3 className="text-[15px] font-medium text-white">
              Business Partners
            </h3>
<p className="mt-0.5 text-[11.5px] text-[#d9d9d9]/50">
              100k+ subskrybentów
            </p>
</div>
</article>
</div>
<div aria-hidden="true" className="flex items-center gap-3">
<article className="flex min-w-[242px] items-center gap-3.5 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 shadow-lg shadow-black/20 backdrop-blur">
<img alt="" className="h-[42px] w-[42px] rounded-full object-cover ring-1 ring-white/15" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div>
<h3 className="text-[15px] font-medium text-white">
              Mattia Centini
            </h3>
<p className="mt-0.5 text-[11.5px] text-[#d9d9d9]/50">
              100k+ subskrybentów
            </p>
</div>
</article>
<article className="flex min-w-[242px] items-center gap-3.5 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 shadow-lg shadow-black/20 backdrop-blur">
<img alt="" className="h-[42px] w-[42px] rounded-full object-cover ring-1 ring-white/15" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div>
<h3 className="text-[15px] font-medium text-white">
              Kowalscy Team
            </h3>
<p className="mt-0.5 text-[11.5px] text-[#d9d9d9]/50">
              250k+ subskrybentów
            </p>
</div>
</article>
<article className="flex min-w-[242px] items-center gap-3.5 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 shadow-lg shadow-black/20 backdrop-blur">
<img alt="" className="h-[42px] w-[42px] rounded-full object-cover ring-1 ring-white/15" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div>
<h3 className="text-[15px] font-medium text-white">
              True Dates
            </h3>
<p className="mt-0.5 text-[11.5px] text-[#d9d9d9]/50">
              50k+ subskrybentów
            </p>
</div>
</article>
<article className="flex min-w-[242px] items-center gap-3.5 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 shadow-lg shadow-black/20 backdrop-blur">
<img alt="" className="h-[42px] w-[42px] rounded-full object-cover ring-1 ring-white/15" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div>
<h3 className="text-[15px] font-medium text-white">
              Costa Broker
            </h3>
<p className="mt-0.5 text-[11.5px] text-[#d9d9d9]/50">
              75k+ subskrybentów
            </p>
</div>
</article>
<article className="flex min-w-[242px] items-center gap-3.5 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 shadow-lg shadow-black/20 backdrop-blur">
<img alt="" className="h-[42px] w-[42px] rounded-full object-cover ring-1 ring-white/15" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div>
<h3 className="text-[15px] font-medium text-white">
              Hello Cypr
            </h3>
<p className="mt-0.5 text-[11.5px] text-[#d9d9d9]/50">
              40k+ subskrybentów
            </p>
</div>
</article>
<article className="flex min-w-[242px] items-center gap-3.5 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 shadow-lg shadow-black/20 backdrop-blur">
<img alt="" className="h-[42px] w-[42px] rounded-full object-cover ring-1 ring-white/15" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div>
<h3 className="text-[15px] font-medium text-white">
              Business Partners
            </h3>
<p className="mt-0.5 text-[11.5px] text-[#d9d9d9]/50">
              100k+ subskrybentów
            </p>
</div>
</article>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="sm:px-6 lg:px-8 pr-8 pb-20 pl-8" id="process">
<div className="mx-auto max-w-7xl">
<div className="mx-auto max-w-4xl text-center">
<p className="uppercase text-xs font-semibold italic text-[#7c3aed] tracking-[0.2em] text-left">
                Jak to działa?
              </p>
<h2 className="sm:text-4xl md:text-5xl text-3xl font-semibold text-white tracking-tight text-left mt-4" style={{fontFamily: 'Montserrat, sans-serif'}}>
                Mój 4-etapowy proces.
                <br/>
                Ty nagrywasz, ja robię resztę.
              </h2>
</div>
<div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
<article className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-[#7c3aed]/45 hover:bg-[#7c3aed]/10">
<div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#7c3aed]/15 text-[#7c3aed] ring-1 ring-[#7c3aed]/30">
<iconify-icon className="text-2xl" icon="solar:map-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-white" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  Krok 01 | Tematy i Strategia
                </h3>
<p className="mt-3 text-sm leading-7 text-[#d9d9d9]/65">
                  Analizuję niszę i przygotowuję gotowe tematy. Nie tracisz
                  godzin na wymyślanie, o czym nagrać kolejny odcinek.
                </p>
</article>
<article className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-[#7c3aed]/45 hover:bg-[#7c3aed]/10">
<div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#7c3aed]/15 text-[#7c3aed] ring-1 ring-[#7c3aed]/30">
<iconify-icon className="text-2xl" icon="solar:videocamera-record-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-white" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  Krok 02 | Szybkie Nagranie
                </h3>
<p className="mt-3 text-sm leading-7 text-[#d9d9d9]/65">
                  Dostajesz wytyczne i włączasz kamerę. To jedyny moment, w
                  którym potrzebujemy Twojego czasu (ok. 1-2 godziny w
                  miesiącu).
                </p>
</article>
<article className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-[#7c3aed]/45 hover:bg-[#7c3aed]/10">
<div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#7c3aed]/15 text-[#7c3aed] ring-1 ring-[#7c3aed]/30">
<iconify-icon className="text-2xl" icon="solar:clapperboard-edit-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-white" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  Krok 03 | Montaż i Miniatury
                </h3>
<p className="mt-3 text-sm leading-7 text-[#d9d9d9]/65">
                  Przejmuję cały proces technologiczny. Montuję z naciskiem na
                  wysoką retencję i projektuję klikalną miniaturę, która
                  przyciągnie wzrok.
                </p>
</article>
<article className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-[#7c3aed]/45 hover:bg-[#7c3aed]/10">
<div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#7c3aed]/15 text-[#7c3aed] ring-1 ring-[#7c3aed]/30">
<iconify-icon className="text-2xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-white" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  Krok 04 | Publikacja i Spokój
                </h3>
<p className="mt-3 text-sm leading-7 text-[#d9d9d9]/65">
                  Gotowy, opisany i zoptymalizowany pod algorytm materiał ląduje
                  na kanale. Ty masz wolną głowę i możesz wrócić do swojego
                  biznesu.
                </p>
</article>
</div>
</div>
</section>
<section className="px-5 py-20 sm:px-6 lg:px-8">
<div className="grid gap-8 shadow-black/20 sm:p-7 lg:grid-cols-2 lg:p-8 max-w-5xl border-white/10 border rounded-[2rem] mr-auto ml-auto pt-5 pr-5 pb-5 pl-5 shadow-2xl gap-x-8 gap-y-8 items-center">
<div className="relative">
<div className="absolute -inset-3 rounded-[2rem] bg-[#7c3aed]/20 blur-2xl"></div>
<div className="relative overflow-hidden rounded-[1.75rem] border border-[#7c3aed]/35 bg-[#151515] p-4">
<img alt="Certified YouTube Creator Standard certificate" className="aspect-[4/3] w-full rounded-[1.25rem] object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="mt-4 flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7c3aed]/15 text-[#7c3aed] ring-1 ring-[#7c3aed]/30">
<iconify-icon className="text-xl" icon="solar:medal-ribbon-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<p className="text-sm font-semibold text-white">
                      Zweryfikowany standard umiejętności
                    </p>
<p className="mt-1 text-xs text-[#d9d9d9]/55">
                      Retencja, tempo, dynamika
                    </p>
</div>
</div>
</div>
</div>
<div className="">
<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7c3aed]">
                Certyfikat
              </p>
<h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-3xl" style={{fontFamily: 'Montserrat, sans-serif'}}>
                Standard największych twórców w Polsce
              </h2>
<p className="mt-5 text-sm leading-7 text-[#d9d9d9]/70 sm:text-base">
                Swoje umiejętności szlifowałem pod okiem Dawida Kowolika
                (montażysty m.in. Ekipy Friza). Ukończenie jego zaawansowanego
                kursu to dla Ciebie gwarancja, że Twoje filmy będą montowane
                zgodnie z najwyższymi standardami branżowymi i dynamiką, która
                generuje miliony wyświetleń.
              </p>
<div className="mt-7 grid gap-4 sm:grid-cols-2">
<div className="group relative overflow-hidden rounded-2xl border border-[#7c3aed]/35 bg-gradient-to-br from-[#7c3aed]/25 via-[#151515] to-[#0d0d0d] p-4 shadow-xl shadow-[#7c3aed]/10">
<div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#7c3aed]/25 blur-2xl"></div>
<div className="relative flex items-start justify-between gap-3">
<div className="">
<p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        150+
                      </p>
<p className="mt-2 text-sm font-medium leading-5 text-[#d9d9d9]/80">
                        zmontowanych filmów
                      </p>
</div>
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7c3aed]/20 text-[#a78bfa] ring-1 ring-[#7c3aed]/35">
<iconify-icon className="text-xl" icon="solar:chart-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
<div className="group relative overflow-hidden rounded-2xl border border-[#7c3aed]/35 bg-gradient-to-br from-[#7c3aed]/25 via-[#151515] to-[#0d0d0d] p-4 shadow-xl shadow-[#7c3aed]/10">
<div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#7c3aed]/25 blur-2xl"></div>
<div className="relative flex items-start justify-between gap-3">
<div className="">
<p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        10 mln+
                      </p>
<p className="mt-2 text-sm font-medium leading-5 text-[#d9d9d9]/80">
                        wygenerowanych wyświetleń
                      </p>
</div>
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7c3aed]/20 text-[#a78bfa] ring-1 ring-[#7c3aed]/35">
<iconify-icon className="text-xl" icon="solar:bolt-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="px-5 py-20 sm:px-6 lg:px-8" id="portfolio">
<div className="mx-auto max-w-7xl">
<div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
<div className="max-w-3xl">
<p className="uppercase text-xs font-semibold italic text-[#7c3aed] tracking-[0.2em]">
                  Portfolio
                </p>
<h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  Wybrane filmy, przy których pracowałem.
                </h2>
</div>
</div>
<div className="mt-12 grid auto-rows-[18rem] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
<a className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-[#7c3aed]/60 hover:shadow-2xl hover:shadow-[#7c3aed]/15 md:col-span-2" href="#">
<img alt="Global Brand Launch: True Dates Poland Entry" className="h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-85" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent"></div>
<div className="absolute left-5 top-5 rounded-full bg-[#7c3aed]/90 px-3 py-1.5 text-xs font-semibold text-white">
                  Market entry
                </div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xl ring-1 ring-white/20 transition group-hover:scale-110 group-hover:bg-[#7c3aed]">
<iconify-icon className="ml-1 text-3xl" icon="solar:play-bold" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<h3 className="text-xl font-semibold tracking-tight text-white" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    True Dates Poland – Wejście globalnej marki na rynek.
                  </h3>
</div>
</a>
<a className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-[#7c3aed]/60 hover:shadow-2xl hover:shadow-[#7c3aed]/15" href="#">
<img alt="High-Retention Edit: Mattia Centini (100k+ fol.)" className="h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-85" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xl ring-1 ring-white/20 transition group-hover:scale-110 group-hover:bg-[#7c3aed]">
<iconify-icon className="ml-1 text-2xl" icon="solar:play-bold" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<h3 className="text-lg font-semibold tracking-tight text-white" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    Mattia Centini (100k+) – Dynamiczny montaż nastawiony na
                    wysoką retencję.
                  </h3>
</div>
</a>
<a className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-[#7c3aed]/60 hover:shadow-2xl hover:shadow-[#7c3aed]/15" href="#">
<img alt="Adrenaline Content: Kowalscy Team" className="h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-85" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
<div className="absolute left-5 top-5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                  Dynamic edit
                </div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xl ring-1 ring-white/20 transition group-hover:scale-110 group-hover:bg-[#7c3aed]">
<iconify-icon className="ml-1 text-2xl" icon="solar:play-bold" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<h3 className="text-lg font-semibold tracking-tight text-white" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    Kowalscy Team – Adrenalinowy content o wysokim tempie.
                  </h3>
</div>
</a>
<a className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-[#7c3aed]/60 hover:shadow-2xl hover:shadow-[#7c3aed]/15" href="#">
<img alt="Real Estate: Costa Broker (Premium Business Edit)" className="h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-85" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xl ring-1 ring-white/20 transition group-hover:scale-110 group-hover:bg-[#7c3aed]">
<iconify-icon className="ml-1 text-2xl" icon="solar:play-bold" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<h3 className="text-lg font-semibold tracking-tight text-white" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    Costa Broker – Profesjonalny format dla branży nieruchomości
                    (Premium B2B).
                  </h3>
</div>
</a>
<a className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-[#7c3aed]/60 hover:shadow-2xl hover:shadow-[#7c3aed]/15" href="#">
<img alt="Travel: Hello Cypr Brand Promo" className="h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-85" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xl ring-1 ring-white/20 transition group-hover:scale-110 group-hover:bg-[#7c3aed]">
<iconify-icon className="ml-1 text-2xl" icon="solar:play-bold" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<h3 className="text-lg font-semibold tracking-tight text-white" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    Hello Cypr – Promocja marki i kinowy montaż podróżniczy.
                  </h3>
</div>
</a>
</div>
</div>
</section>
<section className="px-5 py-20 sm:px-6 lg:px-8" id="about">
<div className="mx-auto grid max-w-6xl items-center gap-10 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/20 sm:p-8 lg:grid-cols-2 lg:p-10">
<div className="relative">
<div className="absolute -inset-3 rounded-[2rem] bg-[#7c3aed]/20 blur-2xl"></div>
<div className="relative overflow-hidden rounded-[1.75rem] border border-[#7c3aed]/35 bg-[#151515] p-4">
<img alt="Bartek Hajdukiewicz" className="aspect-[4/5] w-full rounded-[1.25rem] object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
<div className="">
<p className="uppercase text-xs font-semibold italic text-[#7c3aed] tracking-[0.2em]">
                O mnie
              </p>
<h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl" style={{fontFamily: 'Montserrat, sans-serif'}}>
                Współpracuj z prawdziwym ekspertem YouTube
              </h2>
<div className="mt-6 space-y-4 text-sm leading-8 text-[#d9d9d9]/70 sm:text-base">
<p className="">
                  Od kilku lat z obsesją analizuję, dlaczego jedne kanały na
                  YouTube rosną, a inne zatrzymują się mimo regularnych
                  publikacji.
                </p>
<p className="">
                  Buduję systemy strategicznego wzrostu: od opakowania treści,
                  przez retencję, aż po pozycjonowanie kanału pod właściwych
                  odbiorców.
                </p>
<p className="">
                  Wiem, że dla przedsiębiorcy najdroższy jest czas. Dlatego
                  zdejmuję z Ciebie techniczny i analityczny ciężar, zamieniając
                  YouTube w przewidywalne źródło pozyskiwania kontaktów.
                </p>
</div>
<div className="mt-8 grid gap-3 sm:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-[#0d0d0d] p-4">
<p className="text-sm font-semibold text-white">Strategia</p>
<p className="mt-2 text-xs leading-6 text-[#d9d9d9]/55">
                    Tematy, pozycjonowanie i kierunek kanału.
                  </p>
</div>
<div className="rounded-2xl border border-white/10 bg-[#0d0d0d] p-4">
<p className="text-sm font-semibold text-white">Retencja</p>
<p className="mt-2 text-xs leading-6 text-[#d9d9d9]/55">
                    Struktura filmów, która utrzymuje uwagę.
                  </p>
</div>
<div className="rounded-2xl border border-white/10 bg-[#0d0d0d] p-4">
<p className="text-sm font-semibold text-white">Gotowy proces</p>
<p className="mt-2 text-xs leading-6 text-[#d9d9d9]/55">
                    Ty nagrywasz. Resztę układam w system.
                  </p>
</div>
</div>
</div>
</div>
</section>
<section className="px-5 py-20 sm:px-6 lg:px-8" id="faq">
<div className="mx-auto max-w-4xl">
<div className="mx-auto max-w-3xl text-center">
<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7c3aed]">
                FAQ
              </p>
<h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl" style={{fontFamily: 'Montserrat, sans-serif'}}>
                Odpowiedzi na Twoje pytania
              </h2>
</div>
<div className="mt-12 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] px-4 py-2 sm:px-5">
<div className="accordion-item">
<button className="accordion-button flex w-full items-center justify-between gap-5 py-5 text-left">
<span className="text-base font-semibold text-[#d9d9d9]">
                    Co właściwie możemy dla Ciebie zrobić?
                  </span>
<span className="accordion-icon text-3xl font-light leading-none text-white transition duration-300">
                    +
                  </span>
</button>
<div className="accordion-panel max-h-0 overflow-hidden transition-all duration-300 ease-out">
<p className="pb-5 text-sm leading-7 text-[#d9d9d9]/70">
                    Możemy przejąć strategiczne prowadzenie Twojego kanału
                    YouTube: od pomysłów i struktury odcinków, przez montaż oraz
                    miniatury, aż po publikację i optymalizację treści.
                  </p>
</div>
</div>
<div className="accordion-item">
<button className="accordion-button flex w-full items-center justify-between gap-5 py-5 text-left">
<span className="text-base font-semibold text-[#d9d9d9]">
                    Ile to będzie kosztować?
                  </span>
<span className="accordion-icon text-3xl font-light leading-none text-white transition duration-300">
                    +
                  </span>
</button>
<div className="accordion-panel max-h-0 overflow-hidden transition-all duration-300 ease-out">
<p className="pb-5 text-sm leading-7 text-[#d9d9d9]/70">
                    Koszt zależy od zakresu współpracy i liczby materiałów. Nie
                    jesteśmy najtańszą opcją, bo dostarczamy biznesową wartość,
                    a nie tylko „cięcie wideo”.
                  </p>
</div>
</div>
<div className="accordion-item">
<button className="accordion-button flex w-full items-center justify-between gap-5 py-5 text-left">
<span className="text-base font-semibold text-[#d9d9d9]">
                    Kiedy mogę oczekiwać realnych rezultatów?
                  </span>
<span className="accordion-icon text-3xl font-light leading-none text-white transition duration-300">
                    +
                  </span>
</button>
<div className="accordion-panel max-h-0 overflow-hidden transition-all duration-300 ease-out">
<p className="pb-5 text-sm leading-7 text-[#d9d9d9]/70">
                    Pierwsze wnioski zwykle pojawiają się po kilku publikacjach.
                    YouTube to proces, dlatego skupiamy się na konsekwentnym
                    testowaniu tematów, retencji i formatów.
                  </p>
</div>
</div>
<div className="accordion-item">
<button className="accordion-button flex w-full items-center justify-between gap-5 py-5 text-left">
<span className="text-base font-semibold text-[#d9d9d9]">
                    Ile czasu muszę na to poświęcić?
                  </span>
<span className="accordion-icon text-3xl font-light leading-none text-white transition duration-300">
                    +
                  </span>
</button>
<div className="accordion-panel max-h-0 overflow-hidden transition-all duration-300 ease-out">
<p className="pb-5 text-sm leading-7 text-[#d9d9d9]/70">
                    W modelu A-Z dostajesz od nas gotową strukturę. Wystarczy,
                    że włączysz kamerę i nagrasz materiał — my przejmujemy
                    montaż, miniatury i optymalizację.
                  </p>
</div>
</div>
<div className="accordion-item">
<button className="accordion-button flex w-full items-center justify-between gap-5 py-5 text-left">
<span className="text-base font-semibold text-[#d9d9d9]">
                    Co wyróżnia nas na tle innych agencji?
                  </span>
<span className="accordion-icon text-3xl font-light leading-none text-white transition duration-300">
                    +
                  </span>
</button>
<div className="accordion-panel max-h-0 overflow-hidden transition-all duration-300 ease-out">
<p className="pb-5 text-sm leading-7 text-[#d9d9d9]/70">
                    Łączymy strategię biznesową z praktycznym doświadczeniem w
                    montażu pod retencję. Patrzymy na kanał jak na system
                    pozyskiwania uwagi i leadów, nie jak na pojedyncze filmy.
                  </p>
</div>
</div>
<div className="accordion-item">
<button className="accordion-button flex w-full items-center justify-between gap-5 py-5 text-left">
<span className="text-base font-semibold text-[#d9d9d9]">
                    Czy potrzebuję dużej widowni, żeby to działało?
                  </span>
<span className="accordion-icon text-3xl font-light leading-none text-white transition duration-300">
                    +
                  </span>
</button>
<div className="accordion-panel max-h-0 overflow-hidden transition-all duration-300 ease-out">
<p className="pb-5 text-sm leading-7 text-[#d9d9d9]/70">
                    Nie. Najważniejsze jest jasne pozycjonowanie, wartościowa
                    oferta i tematy, które przyciągają właściwych odbiorców —
                    nawet jeśli kanał dopiero startuje.
                  </p>
</div>
</div>
<div className="accordion-item">
<button className="accordion-button flex w-full items-center justify-between gap-5 py-5 text-left">
<span className="text-base font-semibold text-[#d9d9d9]">
                    Czy napiszecie dla mnie scenariusze?
                  </span>
<span className="accordion-icon text-3xl font-light leading-none text-white transition duration-300">
                    +
                  </span>
</button>
<div className="accordion-panel max-h-0 overflow-hidden transition-all duration-300 ease-out">
<p className="pb-5 text-sm leading-7 text-[#d9d9d9]/70">
                    Tak. Przygotowujemy strukturę odcinka, kluczowe punkty i
                    kierunek narracji, aby nagranie było prostsze, szybsze i
                    bardziej konkretne.
                  </p>
</div>
</div>
<div className="accordion-item">
<button className="accordion-button flex w-full items-center justify-between gap-5 py-5 text-left">
<span className="text-base font-semibold text-[#d9d9d9]">
                    Dla kogo to NIE jest?
                  </span>
<span className="accordion-icon text-3xl font-light leading-none text-white transition duration-300">
                    +
                  </span>
</button>
<div className="accordion-panel max-h-0 overflow-hidden transition-all duration-300 ease-out">
<p className="pb-5 text-sm leading-7 text-[#d9d9d9]/70">
                    To nie jest rozwiązanie dla osób szukających jednorazowego,
                    najtańszego montażu bez strategii lub dla firm, które nie są
                    gotowe regularnie nagrywać wartościowych treści.
                  </p>
</div>
</div>
</div>
</div>
</section>
<section className="px-5 py-20 sm:px-6 lg:px-8" id="client-results">
<style>
            @keyframes aura-proof-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}.aura-proof-track{animation:aura-proof-marquee 36s linear infinite}.aura-proof-track:hover{animation-play-state:paused}@media (prefers-reduced-motion:reduce){.aura-proof-track{animation:none}}
          </style>
<div className="mx-auto max-w-7xl">
<div className="mx-auto max-w-3xl text-center">
<p className="uppercase text-xs font-semibold italic text-[#7c3aed] tracking-[0.2em]">
                Co mówią moi klienci?
              </p>
<h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl" style={{fontFamily: 'Montserrat, sans-serif'}}>
                Wyniki i opinie klientów.
              </h2>
<p className="leading-7 sm:text-base text-sm text-[#d9d9d9]/60 max-w-2xl mt-4">
                Prawdziwe wiadomości, rezultaty projektów i feedback z
                realizacji YouTube.
              </p>
</div>
<div className="relative mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-[#141414]/60 py-6 shadow-2xl shadow-black/30">
<div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#141414] to-transparent sm:w-28"></div>
<div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#141414] to-transparent sm:w-28"></div>
<div className="aura-proof-track flex w-max items-center gap-4 px-4 sm:gap-5 sm:px-5">
<div className="flex items-center gap-4 sm:gap-5">
<img alt="Client result screenshot 01" className="h-52 w-auto rounded-2xl border border-white/10 object-contain shadow-xl shadow-black/30 sm:h-64 lg:h-72" loading="lazy" src="https://placehold.co/720x420/18181b/e5e7eb?text=Client+Result+01"/>
<img alt="Client testimonial screenshot 02" className="h-52 w-auto rounded-2xl border border-white/10 object-contain shadow-xl shadow-black/30 sm:h-64 lg:h-72" loading="lazy" src="https://placehold.co/720x420/111827/e5e7eb?text=Client+Testimonial+02"/>
<img alt="Project result screenshot 03" className="h-52 w-auto rounded-2xl border border-white/10 object-contain shadow-xl shadow-black/30 sm:h-64 lg:h-72" loading="lazy" src="https://placehold.co/720x420/1f2937/e5e7eb?text=Project+Result+03"/>
<img alt="Chat feedback screenshot 04" className="h-52 w-auto rounded-2xl border border-white/10 object-contain shadow-xl shadow-black/30 sm:h-64 lg:h-72" loading="lazy" src="https://placehold.co/720x420/171717/e5e7eb?text=Chat+Feedback+04"/>
<img alt="Client win screenshot 05" className="h-52 w-auto rounded-2xl border border-white/10 object-contain shadow-xl shadow-black/30 sm:h-64 lg:h-72" loading="lazy" src="https://placehold.co/720x420/0f172a/e5e7eb?text=Client+Win+05"/>
</div>
<div aria-hidden="true" className="flex items-center gap-4 sm:gap-5">
<img alt="" className="h-52 w-auto rounded-2xl border border-white/10 object-contain shadow-xl shadow-black/30 sm:h-64 lg:h-72" loading="lazy" src="https://placehold.co/720x420/18181b/e5e7eb?text=Client+Result+01"/>
<img alt="" className="h-52 w-auto rounded-2xl border border-white/10 object-contain shadow-xl shadow-black/30 sm:h-64 lg:h-72" loading="lazy" src="https://placehold.co/720x420/111827/e5e7eb?text=Client+Testimonial+02"/>
<img alt="" className="h-52 w-auto rounded-2xl border border-white/10 object-contain shadow-xl shadow-black/30 sm:h-64 lg:h-72" loading="lazy" src="https://placehold.co/720x420/1f2937/e5e7eb?text=Project+Result+03"/>
<img alt="" className="h-52 w-auto rounded-2xl border border-white/10 object-contain shadow-xl shadow-black/30 sm:h-64 lg:h-72" loading="lazy" src="https://placehold.co/720x420/171717/e5e7eb?text=Chat+Feedback+04"/>
<img alt="" className="h-52 w-auto rounded-2xl border border-white/10 object-contain shadow-xl shadow-black/30 sm:h-64 lg:h-72" loading="lazy" src="https://placehold.co/720x420/0f172a/e5e7eb?text=Client+Win+05"/>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/10 px-5 py-10 sm:px-6 lg:px-8">
<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
<a className="inline-flex items-center gap-3" href="#hero">
<div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.04] ring-1 ring-white/10">
<span className="text-sm font-semibold tracking-tighter text-white" style={{fontFamily: 'Montserrat, sans-serif'}}>
                BH
              </span>
</div>
<span className="text-sm font-semibold tracking-tight text-white" style={{fontFamily: 'Montserrat, sans-serif'}}>
              Bartosz Hajdukiewicz
            </span>
</a>
<p className="text-xs text-[#d9d9d9]/50">
            © 2026 Bartosz Hajdukiewicz. All rights reserved.
          </p>
<div className="flex items-center gap-5">
<a className="text-xs font-medium text-[#d9d9d9]/55 transition hover:text-white" href="#portfolio">
              Portfolio
            </a>
<a className="text-xs font-medium text-[#d9d9d9]/55 transition hover:text-white" href="#faq">
              FAQ
            </a>
<a className="text-xs font-medium text-[#7c3aed] transition hover:text-[#8b5cf6]" href="#final-cta">
              Aplikuj
            </a>
</div>
</div>
</footer>
</div>


    </>
  );
}
