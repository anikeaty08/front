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



    document.querySelectorAll('.faq-item button').forEach((button) => {
      button.addEventListener('click', () => {
        const item = button.closest('.faq-item');
        const panel = item.querySelector('.faq-panel');
        const icon = item.querySelector('.faq-icon');
        panel.classList.toggle('hidden');
        const isOpen = !panel.classList.contains('hidden');
        icon.setAttribute('data-lucide', isOpen ? 'minus' : 'plus');
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });
    });

    lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="min-h-screen overflow-hidden">
<section className="relative min-h-screen border-b border-[#252417]/10 bg-[#252417] text-[#f4f1df]">
<img alt="Calm portrait in warm light" className="absolute inset-0 h-full w-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cfd3f962-2c0f-4920-998f-a843ad88d9c0_3840w.webp"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#14140d]/40 via-[#14140d]/20 to-[#14140d]/75"></div>
<header className="relative z-10 flex items-center justify-between border-b border-[#f4f1df]/10 px-5 py-5 sm:px-8 lg:px-10">
<a className="flex items-center gap-2 text-sm font-medium tracking-tight" href="#">
<i className="h-5 w-5" data-lucide="flower-2"></i>
<span>Stillmere</span>
</a>
<nav className="hidden items-center gap-10 text-xs text-[#f4f1df]/80 md:flex">
<a className="transition hover:text-[#f4f1df]" href="#about">About</a>
<a className="transition hover:text-[#f4f1df]" href="#programs">Programs</a>
<a className="transition hover:text-[#f4f1df]" href="#spaces">Spaces</a>
<a className="transition hover:text-[#f4f1df]" href="#stories">Stories</a>
</nav>
<div className="hidden items-center gap-8 text-xs text-[#f4f1df]/80 md:flex">
<a href="tel:+14209024711">+1 420 902 4711</a>
<a className="flex items-center gap-1" href="#visit">
            Visit us
            <i className="h-3.5 w-3.5" data-lucide="arrow-up-right"></i>
</a>
</div>
<button className="md:hidden">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</header>
<div className="relative z-10 flex min-h-[calc(100vh-5rem)] flex-col justify-end px-5 pb-10 sm:px-8 lg:px-10">
<div className="mb-20 hidden justify-between text-xs text-[#f4f1df]/55 md:flex">
<span>/ private restorative house</span>
<span>003</span>
</div>
<div className="grid items-end gap-10 lg:grid-cols-[1.6fr_1fr]">
<h1 className="max-w-5xl text-5xl font-normal leading-none tracking-tight sm:text-6xl md:text-7xl lg:text-8xl" style={{fontFamily: 'Newsreader, serif'}}>
            Softening the Mind into a State of <span className="italic">Quiet Clarity.</span>
</h1>
<div className="max-w-sm lg:ml-auto">
<p className="text-sm leading-6 text-[#f4f1df]/75 sm:text-base">
              Stillmere is a private sanctuary for thoughtful restoration, sensory therapy, and deeply attentive care.
            </p>
<a className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#f4f1df] px-5 py-3 text-xs font-medium text-[#252417] transition hover:bg-white" href="#programs">
              Explore care
              <i className="h-4 w-4" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
</div>
</section>
<section className="border-b border-[#252417]/10 px-5 py-12 sm:px-8 lg:px-10" id="about">
<div className="grid gap-10 lg:grid-cols-[0.9fr_2fr]">
<div className="text-xs uppercase tracking-[0.18rem] text-[#252417]/60">/ discover the quieter side of care</div>
<div className="">
<h2 className="max-w-5xl text-3xl font-normal leading-tight tracking-tight sm:text-4xl md:text-5xl" style={{fontFamily: 'Newsreader, serif'}}>
            At <span className="italic">Stillmere</span>, we regard emotional wellbeing as refined personal architecture. Every visit is shaped around warmth, precision, and the natural rhythm of your nervous system.
          </h2>
</div>
</div>
<div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.25fr_1fr]">
<article className="border-t border-[#252417]/10 pt-4">
<div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.16rem] text-[#252417]/50">
<span>01 / cedar courtyard</span>
<span>0219</span>
</div>
<img alt="Quiet courtyard" className="aspect-[4/5] w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b7a63b0-ef29-4f2c-8261-b2ca0f8f5c2d_800w.webp"/>
</article>
<article className="pt-10 lg:pt-24">
<img alt="Private therapy room" className="aspect-[5/4] w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/974c8f1e-7058-4f5d-8cde-ed32ee2471e1/1600w.jpg"/>
<div className="mt-5 flex items-center justify-between text-xs uppercase tracking-[0.16rem] text-[#252417]/50">
<span>02 / morning suite</span>
<span>0384</span>
</div>
</article>
<article className="flex flex-col justify-end">
<p className="max-w-md text-sm leading-6 text-[#252417]/70 sm:text-base">
            We work quietly with individuals who need room to breathe, restore attention, and return to life with a more grounded sense of self.
          </p>
<div className="mt-5 flex gap-1 text-[#252417]">
<span className="h-1.5 w-1.5 rounded-full bg-current"></span>
<span className="h-1.5 w-1.5 rounded-full bg-current"></span>
<span className="h-1.5 w-1.5 rounded-full bg-current"></span>
</div>
<div className="mt-14 grid grid-cols-2 gap-8">
<div>
<div className="text-4xl font-normal tracking-tight sm:text-5xl" style={{fontFamily: 'Newsreader, serif'}}>91%</div>
<p className="mt-1 text-xs text-[#252417]/60">felt more present</p>
</div>
<div>
<div className="text-4xl font-normal tracking-tight sm:text-5xl" style={{fontFamily: 'Newsreader, serif'}}>96%</div>
<p className="mt-1 text-xs text-[#252417]/60">reported softer sleep</p>
</div>
</div>
</article>
</div>
</section>
<section className="border-b border-[#252417]/10" id="programs">
<div className="grid gap-8 border-b border-[#252417]/10 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_1.55fr] lg:px-10">
<div>
<p className="mb-3 text-xs uppercase tracking-[0.18rem] text-[#252417]/50">/ every journey deserves tenderness</p>
<h2 className="text-4xl font-normal leading-tight tracking-tight sm:text-5xl" style={{fontFamily: 'Newsreader, serif'}}>The Practice of Inner Spaciousness.</h2>
</div>
<div className="max-w-xl lg:ml-auto">
<div className="mb-4 flex gap-1 text-[#252417]">
<span className="h-1.5 w-1.5 rounded-full bg-current"></span>
<span className="h-1.5 w-1.5 rounded-full bg-current"></span>
<span className="h-1.5 w-1.5 rounded-full bg-current"></span>
</div>
<p className="text-sm leading-6 text-[#252417]/70 sm:text-base">
            A Stillmere visit can be brief or immersive. Each pathway is designed to relieve mental weight through calm, skillful attention.
          </p>
</div>
</div>
<div className="divide-y divide-[#252417]/10">
<article className="px-5 py-8 sm:px-8 lg:px-10">
<div className="grid gap-6 lg:grid-cols-[0.7fr_1.15fr_1fr_auto] lg:items-center">
<span className="text-xs uppercase tracking-[0.16rem] text-[#252417]/50">01 / calm breathing</span>
<h3 className="text-2xl font-normal tracking-tight sm:text-3xl" style={{fontFamily: 'Newsreader, serif'}}>Guided Stillness</h3>
<div className="flex flex-wrap gap-2 text-xs text-[#252417]/60">
<span>Focus</span><span>•</span><span>Sleep</span><span>•</span><span>Grounding</span><span>•</span><span>Clarity</span>
</div>
<button className="flex h-9 w-9 items-center justify-center rounded-full border border-[#252417]/15">
<i className="h-4 w-4" data-lucide="chevron-down"></i>
</button>
</div>
</article>
<article className="px-5 py-8 sm:px-8 lg:px-10">
<div className="grid gap-6 lg:grid-cols-[0.7fr_1.15fr_1fr_auto] lg:items-center">
<span className="text-xs uppercase tracking-[0.16rem] text-[#252417]/50">02 / private care</span>
<h3 className="text-2xl font-normal tracking-tight sm:text-3xl" style={{fontFamily: 'Newsreader, serif'}}>Restorative Mind Therapy</h3>
<div className="flex flex-wrap gap-2 text-xs text-[#252417]/60">
<span>Release</span><span>•</span><span>Repair</span><span>•</span><span>Safety</span><span>•</span><span>Reflection</span>
</div>
<button className="flex h-9 w-9 items-center justify-center rounded-full border border-[#252417]/15">
<i className="h-4 w-4" data-lucide="chevron-up"></i>
</button>
</div>
<div className="mt-6 grid gap-2 md:grid-cols-3">
<img alt="Resting person" className="aspect-[4/3] w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f6df6186-6ab3-4371-9b80-339345546771_1600w.webp"/>
<img alt="Tea and light" className="aspect-[4/3] w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ca31b01c-0966-4565-90c5-15c1651cf2ff_1600w.webp"/>
<img alt="Face mask ritual" className="aspect-[4/3] w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/15ec2f3d-3d0a-425d-8595-305bef6d6050_1600w.jpg"/>
</div>
</article>
<article className="px-5 py-8 sm:px-8 lg:px-10">
<div className="grid gap-6 lg:grid-cols-[0.7fr_1.15fr_1fr_auto] lg:items-center">
<span className="text-xs uppercase tracking-[0.16rem] text-[#252417]/50">03 / slow sanctuary</span>
<h3 className="text-2xl font-normal tracking-tight sm:text-3xl" style={{fontFamily: 'Newsreader, serif'}}>Mindful Residencies</h3>
<div className="flex flex-wrap gap-2 text-xs text-[#252417]/60">
<span>Ritual</span><span>•</span><span>Solitude</span><span>•</span><span>Insight</span><span>•</span><span>Renewal</span>
</div>
<button className="flex h-9 w-9 items-center justify-center rounded-full border border-[#252417]/15">
<i className="h-4 w-4" data-lucide="chevron-down"></i>
</button>
</div>
</article>
<article className="px-5 py-8 sm:px-8 lg:px-10">
<div className="grid gap-6 lg:grid-cols-[0.7fr_1.15fr_1fr_auto] lg:items-center">
<span className="text-xs uppercase tracking-[0.16rem] text-[#252417]/50">04 / total harmony</span>
<h3 className="text-2xl font-normal tracking-tight sm:text-3xl" style={{fontFamily: 'Newsreader, serif'}}>Wholebeing Program</h3>
<div className="flex flex-wrap gap-2 text-xs text-[#252417]/60">
<span>Movement</span><span>•</span><span>Presence</span><span>•</span><span>Breath</span><span>•</span><span>Rhythm</span>
</div>
<button className="flex h-9 w-9 items-center justify-center rounded-full border border-[#252417]/15">
<i className="h-4 w-4" data-lucide="chevron-down"></i>
</button>
</div>
</article>
</div>
</section>
<section className="relative min-h-[44rem] border-b border-[#252417]/10 bg-[#252417] text-[#f4f1df]" id="spaces">
<img alt="Quiet seated silhouette" className="absolute inset-0 h-full w-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a40e12ea-4815-4e57-bec2-49612864093e_3840w.webp"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#14140d]/75 via-[#14140d]/30 to-[#14140d]/35"></div>
<div className="relative z-10 grid min-h-[44rem] items-end gap-10 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:px-10">
<div>
<h2 className="max-w-lg text-4xl font-normal leading-tight tracking-tight sm:text-5xl" style={{fontFamily: 'Newsreader, serif'}}>
            Designed to Restore both <span className="italic">Nerve and Spirit.</span>
</h2>
<p className="mt-5 max-w-md text-sm leading-6 text-[#f4f1df]/70 sm:text-base">
            Every threshold, texture, and quiet interval is composed to help the body understand that it is safe to soften.
          </p>
</div>
<div className="relative min-h-80">
<div className="absolute right-6 top-8 max-w-xs rounded-full border border-[#f4f1df]/25 bg-[#f4f1df]/5 p-3 backdrop-blur-md">
<div className="flex items-start gap-3">
<span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f4f1df] text-[#252417]">
<i className="h-4 w-4" data-lucide="sparkles"></i>
</span>
<div>
<h3 className="text-sm font-medium">Gentle Focus</h3>
<p className="mt-1 text-xs leading-5 text-[#f4f1df]/65">Private rituals shaped to settle the body before the mind begins.</p>
</div>
</div>
</div>
<span className="absolute bottom-28 right-36 flex h-8 w-8 items-center justify-center rounded-full border border-[#f4f1df]/35 bg-[#f4f1df]/10 backdrop-blur-md">
<i className="h-4 w-4" data-lucide="leaf"></i>
</span>
<span className="absolute bottom-12 right-10 flex h-8 w-8 items-center justify-center rounded-full border border-[#f4f1df]/35 bg-[#f4f1df]/10 backdrop-blur-md">
<i className="h-4 w-4" data-lucide="circle-dot"></i>
</span>
</div>
</div>
</section>
<section className="border-b border-[#252417]/10 px-5 py-12 sm:px-8 lg:px-10" id="stories">
<div className="grid gap-10 lg:grid-cols-[0.8fr_1.5fr_0.75fr]">
<div>
<p className="mb-8 text-xs uppercase tracking-[0.18rem] text-[#252417]/50">/ where calm becomes familiar</p>
<div className="max-w-44">
<img alt="Guest portrait" className="aspect-[4/5] w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6af12505-935d-4286-942a-713642b12906_800w.webp"/>
<div className="mt-3 flex items-center justify-between text-xs uppercase tracking-[0.16rem] text-[#252417]/50">
<span>/ guest</span>
<span>0208</span>
</div>
</div>
</div>
<blockquote className="">
<div className="mb-5 text-4xl leading-none" style={{fontFamily: 'Newsreader, serif'}}>“</div>
<p className="max-w-3xl text-3xl font-normal leading-tight tracking-tight sm:text-4xl md:text-5xl" style={{fontFamily: 'Newsreader, serif'}}>
            Arriving at Stillmere felt like crossing into a quieter season. The care was exacting without ever feeling clinical — I left lighter, steadier, and more myself.
          </p>
<footer className="mt-8 text-sm text-[#252417]/70 sm:text-base">— Mara V.</footer>
</blockquote>
<div className="flex flex-col justify-between">
<img alt="Hallway detail" className="ml-auto aspect-[4/5] w-32 object-cover sm:w-40" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/59c5f3f1-7a07-4670-868b-2fee04cced80_320w.webp"/>
<div className="mt-8 grid grid-cols-2 gap-2 text-xs text-[#252417]/65">
<span className="flex items-center gap-2">Professionals <i className="h-3 w-3" data-lucide="circle"></i></span>
<span className="flex items-center gap-2">Creators <i className="h-3 w-3" data-lucide="sparkle"></i></span>
<span className="flex items-center gap-2">Founders <i className="h-3 w-3" data-lucide="asterisk"></i></span>
<span className="flex items-center gap-2">Care seekers <i className="h-3 w-3" data-lucide="flower"></i></span>
</div>
</div>
</div>
</section>
<section className="border-b border-[#252417]/10 px-5 py-12 sm:px-8 lg:px-10">
<div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr]">
<div className="">
<p className="mb-3 text-xs uppercase tracking-[0.18rem] text-[#252417]/50">/ questions before your arrival</p>
<h2 className="text-4xl font-normal leading-tight tracking-tight sm:text-5xl" style={{fontFamily: 'Newsreader, serif'}}>Essential Questions &amp; Gentle Answers</h2>
<p className="mt-24 max-w-sm text-sm leading-6 text-[#252417]/65 sm:text-base">
            Our hosts can help shape a first visit around your needs, timing, and comfort.
          </p>
</div>
<div className="divide-y divide-[#252417]/10 border-y border-[#252417]/10">
<div className="faq-item">
<button className="flex w-full items-center justify-between gap-6 py-6 text-left text-sm font-medium sm:text-base">
              What makes Stillmere different from a spa?
              <i className="faq-icon h-4 w-4 shrink-0" data-lucide="plus"></i>
</button>
<div className="faq-panel hidden pb-6 text-sm leading-6 text-[#252417]/65 sm:text-base">
              We combine restorative surroundings with guided emotional care, private rituals, and practitioner-led support.
            </div>
</div>
<div className="faq-item">
<button className="flex w-full items-center justify-between gap-6 py-6 text-left text-sm font-medium sm:text-base">
              How long is a typical session?
              <i className="faq-icon h-4 w-4 shrink-0" data-lucide="minus"></i>
</button>
<div className="faq-panel pb-6 text-sm leading-6 text-[#252417]/65 sm:text-base">
              Most visits last 75 to 110 minutes. Longer residencies may include therapy, movement, breathwork, and rest.
            </div>
</div>
<div className="faq-item">
<button className="flex w-full items-center justify-between gap-6 py-6 text-left text-sm font-medium sm:text-base">
              Do I need meditation experience?
              <i className="faq-icon h-4 w-4 shrink-0" data-lucide="plus"></i>
</button>
<div className="faq-panel hidden pb-6 text-sm leading-6 text-[#252417]/65 sm:text-base">
              No. Each practice is accessible and guided at your pace.
            </div>
</div>
<div className="faq-item">
<button className="flex w-full items-center justify-between gap-6 py-6 text-left text-sm font-medium sm:text-base">
              Can I reserve the house privately?
              <i className="faq-icon h-4 w-4 shrink-0" data-lucide="plus"></i>
</button>
<div className="faq-panel hidden pb-6 text-sm leading-6 text-[#252417]/65 sm:text-base">
              Yes. Private bookings are available for individuals, pairs, and small teams.
            </div>
</div>
<div className="faq-item">
<button className="flex w-full items-center justify-between gap-6 py-6 text-left text-sm font-medium sm:text-base">
              Where is Stillmere located?
              <i className="faq-icon h-4 w-4 shrink-0" data-lucide="plus"></i>
</button>
<div className="faq-panel hidden pb-6 text-sm leading-6 text-[#252417]/65 sm:text-base">
              Our private house is in North Ashbury, with the exact address shared after consultation.
            </div>
</div>
</div>
</div>
</section>
<footer className="bg-[#252417] text-[#f4f1df]" id="visit">
<section className="border-b border-[#f4f1df]/10 px-5 py-12 sm:px-8 lg:px-10">
<div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
<div className="">
<p className="mb-4 text-xs uppercase tracking-[0.18rem] text-[#f4f1df]/50">/ reserve your moment of calm</p>
<h2 className="max-w-md text-4xl font-normal leading-tight tracking-tight sm:text-5xl" style={{fontFamily: 'Newsreader, serif'}}>
              Begin Your Return Into <span className="italic">Stillness.</span>
</h2>
<div className="mt-8 flex gap-3">
<a className="flex h-8 w-8 items-center justify-center rounded-full border border-[#f4f1df]/20 text-[#f4f1df]/80" href="#"><svg className="w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="simple-icons" data-simple-icons="facebook" height="16" strokeWidth="2" style={{color: 'rgb(244, 241, 223)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978c.401 0 .955.042 1.468.103a9 9 0 0 1 1.141.195v3.325a9 9 0 0 0-.653-.036a27 27 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.7 1.7 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103l-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647" fill="#f4f1df"></path></svg></a>
<a className="flex h-8 w-8 items-center justify-center rounded-full border border-[#f4f1df]/20 text-[#f4f1df]/80" href="#"><svg className="w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="simple-icons" data-simple-icons="tiktok" height="16" strokeWidth="2" style={{color: 'rgb(244, 241, 223)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07" fill="#f4f1df"></path></svg></a>
<a className="flex h-8 w-8 items-center justify-center rounded-full border border-[#f4f1df]/20 text-[#f4f1df]/80" href="#"><svg className="w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="simple-icons" data-simple-icons="instagram" height="16" strokeWidth="2" style={{color: 'rgb(244, 241, 223)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7.03.084c-1.277.06-2.149.264-2.91.563a5.9 5.9 0 0 0-2.124 1.388a5.9 5.9 0 0 0-1.38 2.127C.321 4.926.12 5.8.064 7.076s-.069 1.688-.063 4.947s.021 3.667.083 4.947c.061 1.277.264 2.149.563 2.911c.308.789.72 1.457 1.388 2.123a5.9 5.9 0 0 0 2.129 1.38c.763.295 1.636.496 2.913.552c1.278.056 1.689.069 4.947.063s3.668-.021 4.947-.082c1.28-.06 2.147-.265 2.91-.563a5.9 5.9 0 0 0 2.123-1.388a5.9 5.9 0 0 0 1.38-2.129c.295-.763.496-1.636.551-2.912c.056-1.28.07-1.69.063-4.948c-.006-3.258-.02-3.667-.081-4.947c-.06-1.28-.264-2.148-.564-2.911a5.9 5.9 0 0 0-1.387-2.123a5.9 5.9 0 0 0-2.128-1.38c-.764-.294-1.636-.496-2.914-.55C15.647.009 15.236-.006 11.977 0S8.31.021 7.03.084m.14 21.693c-1.17-.05-1.805-.245-2.228-.408a3.7 3.7 0 0 1-1.382-.895a3.7 3.7 0 0 1-.9-1.378c-.165-.423-.363-1.058-.417-2.228c-.06-1.264-.072-1.644-.08-4.848c-.006-3.204.006-3.583.061-4.848c.05-1.169.246-1.805.408-2.228c.216-.561.477-.96.895-1.382a3.7 3.7 0 0 1 1.379-.9c.423-.165 1.057-.361 2.227-.417c1.265-.06 1.644-.072 4.848-.08c3.203-.006 3.583.006 4.85.062c1.168.05 1.804.244 2.227.408c.56.216.96.475 1.382.895s.681.817.9 1.378c.165.422.362 1.056.417 2.227c.06 1.265.074 1.645.08 4.848c.005 3.203-.006 3.583-.061 4.848c-.051 1.17-.245 1.805-.408 2.23c-.216.56-.477.96-.896 1.38a3.7 3.7 0 0 1-1.378.9c-.422.165-1.058.362-2.226.418c-1.266.06-1.645.072-4.85.079s-3.582-.006-4.848-.06m9.783-16.192a1.44 1.44 0 1 0 1.437-1.442a1.44 1.44 0 0 0-1.437 1.442M5.839 12.012a6.161 6.161 0 1 0 12.323-.024a6.162 6.162 0 0 0-12.323.024M8 12.008A4 4 0 1 1 12.008 16A4 4 0 0 1 8 12.008" fill="#f4f1df"></path></svg></a>
<a className="flex h-8 w-8 items-center justify-center rounded-full border border-[#f4f1df]/20 text-[#f4f1df]/80" href="#"><svg aria-hidden="true" className="lucide lucide-mail w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="simple-icons" data-simple-icons="gmail" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(244, 241, 223)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64L12 9.548l6.545-4.91l1.528-1.145C21.69 2.28 24 3.434 24 5.457" fill="#f4f1df"></path></svg></a>
</div>
</div>
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
<div>
<h3 className="mb-3 text-xs uppercase tracking-[0.18rem] text-[#f4f1df]/50">Location</h3>
<p className="text-sm leading-6 sm:text-base">1182 Vale House Rd.<br/>North Ashbury, 48106</p>
</div>
<div>
<h3 className="mb-3 text-xs uppercase tracking-[0.18rem] text-[#f4f1df]/50">Call us</h3>
<p className="text-sm leading-6 sm:text-base">+1 420 902 4711</p>
</div>
<div>
<h3 className="mb-3 text-xs uppercase tracking-[0.18rem] text-[#f4f1df]/50">Open days</h3>
<p className="text-sm leading-6 sm:text-base">Tuesday — Saturday</p>
</div>
<div>
<h3 className="mb-3 text-xs uppercase tracking-[0.18rem] text-[#f4f1df]/50">Open time</h3>
<p className="text-sm leading-6 sm:text-base">08:30 am — 06:30 pm</p>
</div>
</div>
</div>
<div className="mt-24 flex flex-col justify-between gap-4 text-xs text-[#f4f1df]/45 sm:flex-row">
<span>/ softness is not escape, but return</span>
<span>©2026 Stillmere. All rights reserved.</span>
</div>
</section>
<section className="flex flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
<a className="flex items-center gap-2 text-base font-medium tracking-tight" href="#">
<i className="h-6 w-6" data-lucide="flower-2"></i>
<span>Stillmere</span>
</a>
<nav className="flex flex-wrap gap-6 text-xs text-[#f4f1df]/60">
<a className="text-[#f4f1df]" href="#">Home</a>
<a href="#about">About</a>
<a href="#programs">Programs</a>
<a href="#spaces">Spaces</a>
<a href="#visit">Contact</a>
</nav>
</section>
</footer>
</main>


    </>
  );
}
