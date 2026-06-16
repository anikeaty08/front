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



      lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 md:pt-6 md:px-6 pointer-events-none">
<nav className="pointer-events-auto glass border rounded-full pl-5 pr-2 py-2 flex items-center justify-between gap-4 md:gap-10 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)] w-full max-w-5xl transition-all duration-300 border-neutral-200/60">

<a className="group flex items-center gap-2 shrink-0" href="#">
<span className="font-serif text-xl md:text-2xl tracking-tight italic font-medium group-hover:text-indigo-600 transition-colors text-neutral-900">
            IRONPEAK MARKETING
          </span>
</a>

<a className="text-xs px-4 py-2 md:px-5 md:py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 font-montserrat font-medium group shadow-md hover:shadow-lg hover:shadow-indigo-500/20 bg-neutral-900 text-white hover:bg-indigo-600 shrink-0" href="https://savvycal.com/Parker-Worth/6f01e5de" target="_blank">
          Get Started
          <svg aria-hidden="true" className="lucide lucide-arrow-right w-3 h-3 transition-transform group-hover:translate-x-0.5 hidden sm:block" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</nav>
</header>
<main className="max-w-7xl mx-auto pt-28 md:pt-32 px-4 md:px-6 pb-24">

<section className="md:rounded-[2.5rem] md:p-12 lg:p-20 overflow-hidden md:mb-16 text-center bg-white border-neutral-200/60 border rounded-[2rem] mb-12 pt-12 pr-6 pb-12 pl-6 relative shadow-[0_1px_2px_rgba(0,0,0,0.02)]">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-50"></div>
<div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">

<div className="animate-fade-up w-fit border px-3 py-1 rounded-full text-[10px] tracking-widest uppercase font-montserrat font-bold mb-6 md:mb-8 bg-indigo-50 border-indigo-100 text-indigo-600">
            Attention B2B Founders &amp; Service Providers
          </div>

<h1 className="animate-fade-up delay-100 text-4xl sm:text-5xl md:text-7xl lg:text-[5rem] leading-[1.1] md:leading-[0.95] tracking-tighter mb-6 md:mb-8 font-serif font-medium text-neutral-900">
            We'll
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 italic pr-2 to-cyan-400">
              Book You 20 Qualified Leads
            </span>
            in
            <br className="hidden md:block"/>
            90 Days or
            <span className="border-b-2 md:border-b-4 border-indigo-200/60">
              You Don't Pay.
            </span>
</h1>

<p className="animate-fade-up delay-200 text-base md:text-xl text-neutral-500 leading-relaxed max-w-2xl mb-8 md:mb-12 font-light px-2">
            Our proprietary "Personalized Data Enhancement" adds 20 sales cales
            to your business without you lifting a finger.
          </p>

<div className="animate-fade-up delay-300 relative w-full max-w-4xl aspect-video rounded-xl md:rounded-[2rem] border-2 md:border-4 shadow-xl md:shadow-2xl overflow-hidden mb-8 md:mb-12 group cursor-pointer ring-1 bg-neutral-900 border-white/50 shadow-neutral-200 ring-neutral-900/5">

<img alt="Process Video" className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-all duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;q=80&amp;w=2426"/>

<div className="absolute inset-0 w-full h-full z-10">
<div className="" style={{position: 'relative', paddingBottom: '56.2500%', height: '0', width: '100%'}}>
<iframe allow="autoplay; fullscreen" allowtransparency="true" className="" src="https://www.tella.tv/video/vid_cmq9nve2r00w604jiholkbgtc/embed?b=0&amp;title=0&amp;a=1&amp;loop=0&amp;autoPlay=true&amp;t=0&amp;muted=1&amp;wt=0&amp;o=1" style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', border: '0'}}></iframe>
</div>
</div>

<div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 backdrop-blur-md text-[10px] md:text-xs px-2.5 py-1 md:px-3 md:py-1.5 rounded-full font-montserrat flex items-center gap-2 border bg-black/60 text-white border-white/10">
<div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-indigo-500 animate-pulse"></div>
              Watch breakdown
            </div>
</div>

<div className="animate-fade-up delay-500 flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center w-full mb-6">
<a className="w-full sm:w-auto px-8 py-3.5 md:py-4 rounded-full text-sm hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300 flex items-center justify-center gap-2 font-montserrat font-medium group bg-neutral-900 text-white hover:bg-indigo-600" href="https://savvycal.com/Parker-Worth/6f01e5de" target="_blank">
              Get Started
              <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="w-full sm:w-auto border px-8 py-3.5 md:py-4 rounded-full text-sm transition-all duration-300 font-montserrat font-medium flex items-center justify-center gap-2 bg-white border-neutral-200 text-neutral-900 hover:border-neutral-400" href="#process">
              Learn More
            </a>
</div>

<p className="animate-fade-up delay-500 text-[10px] md:text-xs font-montserrat text-neutral-400">
            Book a Free Strategy Session. No credit card required.
          </p>
</div>
</section>

<div className="w-full py-8 md:py-12 mb-16 md:mb-20 text-center border-b border-neutral-100">
<h3 className="text-xl md:text-2xl tracking-tight font-serif mb-2 text-neutral-900">
          Trusted By Clients Featured In:
        </h3>
<p className="text-[10px] md:text-xs font-montserrat uppercase tracking-widest mb-8 md:mb-10 text-neutral-400">
          Join the fastest growing brands working with IronPeak
        </p>
<div className="marquee-mask relative overflow-hidden">
<div className="flex w-max animate-infinite-scroll">

<div className="flex items-center gap-10 md:gap-16 px-4 md:px-8 grayscale opacity-60 scale-90 md:scale-100">
<div className="flex items-center">
<span className="font-sans font-semibold text-xl md:text-2xl tracking-tight text-neutral-800">
                  Bloomberg
                </span>
</div>
<div className="flex items-center gap-1">
<div className="bg-neutral-800 text-white font-sans font-semibold text-[10px] md:text-xs px-1.5 py-0.5 leading-none tracking-tight">
                  TC
                </div>
<span className="font-sans font-semibold text-xl md:text-2xl tracking-tight text-neutral-800">
                  TechCrunch
                </span>
</div>
<div className="flex items-center">
<span className="font-serif font-semibold text-2xl md:text-3xl tracking-tight text-neutral-800">
                  Forbes
                </span>
</div>
<div className="flex items-center">
<span className="font-sans font-semibold italic text-xl md:text-2xl tracking-tight text-neutral-800">
                  HUFFPOST
                </span>
</div>
<div className="flex items-center">
<span className="font-serif font-medium text-2xl md:text-3xl tracking-tight text-neutral-800">
                  TIME
                </span>
</div>
<div className="flex items-center">
<span className="font-sans font-semibold text-lg md:text-xl tracking-tight text-neutral-800 uppercase">
                  Business Insider
                </span>
</div>
<div className="flex items-center">
<div className="bg-neutral-800 text-white font-sans font-semibold text-base md:text-lg px-2 py-1 leading-none tracking-tight uppercase">
                  Newsweek
                </div>
</div>
</div>

<div aria-hidden="true" className="flex items-center gap-10 md:gap-16 px-4 md:px-8 grayscale opacity-60 scale-90 md:scale-100">
<div className="flex items-center">
<span className="font-sans font-semibold text-xl md:text-2xl tracking-tight text-neutral-800">
                  Bloomberg
                </span>
</div>
<div className="flex items-center gap-1">
<div className="bg-neutral-800 text-white font-sans font-semibold text-[10px] md:text-xs px-1.5 py-0.5 leading-none tracking-tight">
                  TC
                </div>
<span className="font-sans font-semibold text-xl md:text-2xl tracking-tight text-neutral-800">
                  TechCrunch
                </span>
</div>
<div className="flex items-center">
<span className="font-serif font-semibold text-2xl md:text-3xl tracking-tight text-neutral-800">
                  Forbes
                </span>
</div>
<div className="flex items-center">
<span className="font-sans font-semibold italic text-xl md:text-2xl tracking-tight text-neutral-800">
                  HUFFPOST
                </span>
</div>
<div className="flex items-center">
<span className="font-serif font-medium text-2xl md:text-3xl tracking-tight text-neutral-800">
                  TIME
                </span>
</div>
<div className="flex items-center">
<span className="font-sans font-semibold text-lg md:text-xl tracking-tight text-neutral-800 uppercase">
                  Business Insider
                </span>
</div>
<div className="flex items-center">
<div className="bg-neutral-800 text-white font-sans font-semibold text-base md:text-lg px-2 py-1 leading-none tracking-tight uppercase">
                  Newsweek
                </div>
</div>
</div>
</div>
</div>
</div>

<section className="py-12 md:py-20 max-w-6xl mx-auto">
<h2 className="text-3xl md:text-5xl text-center mb-10 md:mb-16 tracking-tight font-serif font-medium text-neutral-900 px-4">
          Are You Currently Struggling With...
        </h2>
<div className="grid md:grid-cols-3 gap-6 md:gap-8">

<div className="md:p-8 md:rounded-3xl hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-cyan-50 to-white rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-sm">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-indigo-50 text-indigo-600">
<svg aria-hidden="true" className="lucide lucide-trending-down w-5 h-5 md:w-6 md:h-6" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>
</div>
<h3 className="text-lg md:text-xl font-montserrat font-semibold mb-2 md:mb-3 text-neutral-900">
              Unpredictable Revenue
            </h3>
<p className="text-neutral-500 font-light leading-relaxed text-sm">
              You never know where your next client is coming from, creating
              revenue rollercoasters that stall growth and cause unnecessary
              stress.
            </p>
</div>

<div className="md:p-8 md:rounded-3xl hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-cyan-50 to-white rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-sm" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, #fca5a5, #ef4444)', -BorderRadiusBefore: '1.5rem'}}>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-indigo-50 text-indigo-600">
<svg aria-hidden="true" className="lucide lucide-users w-5 h-5 md:w-6 md:h-6" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-lg md:text-xl font-montserrat font-semibold mb-2 md:mb-3 text-neutral-900">
              Worthless "Brand Awareness"
            </h3>
<p className="text-neutral-500 font-light leading-relaxed text-sm">
              Tired of agencies that promise the world but deliver vague "brand
              awareness" instead of actual ROI.
            </p>
</div>

<div className="md:p-8 md:rounded-3xl hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-cyan-50 to-white rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-sm" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, #fca5a5, #ef4444)', -BorderRadiusBefore: '1.5rem'}}>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-indigo-50 text-indigo-600">
<svg aria-hidden="true" className="lucide lucide-clock w-5 h-5 md:w-6 md:h-6" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
</div>
<h3 className="text-lg md:text-xl font-montserrat font-semibold mb-2 md:mb-3 text-neutral-900">
              Pure Performance Guarantee
            </h3>
<p className="text-neutral-500 font-light leading-relaxed text-sm">
              We are so confident in our system that we put our own money on the
              line. If we don't hit 20 qualified leads in 90 days, you don't pay
              us a dime.
            </p>
</div>
</div>
</section>

<section className="py-12 md:py-20">
<div className="text-center mb-10 md:mb-16 px-4">
<h2 className="md:text-5xl text-3xl font-medium text-neutral-900 tracking-tight font-serif mb-4">
            Why Choose IronPeak
          </h2>
<p className="text-neutral-500 max-w-2xl mx-auto font-light text-sm md:text-base">
            Our proprietary "Personalized Data Enhancement" adds consistent,
            high-quality sales meetings to your business without you lifting a
            finger.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-colors hover:border-indigo-200 bg-gradient-to-br from-white to-neutral-50 h-64 border border-neutral-200 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="md:text-2xl md:mb-4 text-xl font-medium text-neutral-900 font-montserrat mb-3">
              Laser-Targeted Outreach
            </h3>
<p className="text-neutral-500 font-light text-sm leading-relaxed z-10 relative">
              We use proprietary data enrichment to identify your exact ICP and
              target them with surgical precision so you only talk to qualified
              prospects.
            </p>
<div className="mt-auto self-end group-hover:text-indigo-500 transition-colors duration-500 transform group-hover:scale-110 text-indigo-100">
<svg aria-hidden="true" className="lucide lucide-crosshair w-16 h-16 md:w-24 md:h-24 stroke-[1px]" data-lucide="crosshair" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="22" x2="18" y1="12" y2="12"></line><line x1="6" x2="2" y1="12" y2="12"></line><line x1="12" x2="12" y1="6" y2="2"></line><line x1="12" x2="12" y1="22" y2="18"></line></svg>
</div>
</div>

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-colors hover:border-indigo-200 bg-gradient-to-br from-white to-neutral-50 h-64 border border-neutral-200 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="text-xl md:text-2xl font-montserrat font-medium mb-3 md:mb-4 text-neutral-900">
              Dedicated Infrastructure
            </h3>
<p className="text-neutral-500 font-light text-sm leading-relaxed z-10 relative">
              We build custom, isolated email infrastructure for your brand.
              This guarantees maximum deliverability and ensures your messages
              land in the primary inbox (not spam).
            </p>
<div className="mt-auto self-end group-hover:text-indigo-500 transition-colors duration-500 transform group-hover:scale-110 text-indigo-100">
<svg aria-hidden="true" className="lucide lucide-monitor w-16 h-16 md:w-24 md:h-24 stroke-[1px]" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
</div>
</div>

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-colors hover:border-indigo-200 bg-gradient-to-br from-white to-neutral-50 h-64 border border-neutral-200 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="text-xl md:text-2xl font-montserrat font-medium mb-3 md:mb-4 text-neutral-900">
              Pure Performance Guarantee
            </h3>
<p className="text-neutral-500 font-light text-sm leading-relaxed z-10 relative">
              We are so confident in our system that we put our own money on the
              line. If we don't hit 20 qualified leads in 90 days, you don't pay
              us a dime.
            </p>
<div className="mt-auto self-end group-hover:text-indigo-500 transition-colors duration-500 transform group-hover:scale-110 text-indigo-100">
<svg aria-hidden="true" className="lucide lucide-shield-check w-16 h-16 md:w-24 md:h-24 stroke-[1px]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
</div>
</div>
<div className="flex justify-center">
<a className="w-full sm:w-auto justify-center px-8 py-3.5 rounded-full text-sm transition-all duration-300 font-montserrat font-medium flex items-center gap-2 bg-neutral-900 text-white hover:bg-indigo-600" href="https://savvycal.com/Parker-Worth/6f01e5de" target="_blank">
            Book a Call
            <svg aria-hidden="true" className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</a>
</div>
</section>

<section className="py-16 md:py-24 px-4 md:px-6 rounded-[2rem] md:rounded-[2.5rem] border shadow-sm text-center bg-white border-neutral-200/60">
<div className="max-w-3xl mx-auto">
<div className="inline-flex justify-center mb-6 md:mb-8 text-indigo-500">
<svg aria-hidden="true" className="lucide lucide-quote w-8 h-8 md:w-12 md:h-12 fill-current opacity-20" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<h3 className="text-2xl md:text-4xl lg:text-5xl font-serif leading-tight mb-8 md:mb-10 italic text-neutral-900 px-2">
            "We added a massive influx of qualified sales calls within just our
            first month of working with IronPeak. Their cold email systems are
            unlike anything we've seen before"
          </h3>
<div className="flex flex-col items-center">
<div className="w-12 h-12 md:w-16 md:h-16 rounded-full mb-4 overflow-hidden border-2 shadow-md bg-neutral-200 border-white">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b15db27e-dc42-4e33-a83f-218aaa9e973d_1600w.jpg"/>
</div>
<div className="font-montserrat font-semibold text-neutral-900">
              Ian Mcgavin
            </div>
<div className="text-xs md:text-sm font-light text-neutral-400">
              Founder, Stratagize
            </div>
</div>
</div>
</section>

<section className="py-16 md:py-24" id="process">
<div className="text-center mb-12 md:mb-16">
<span className="text-[10px] md:text-xs font-montserrat font-bold tracking-widest uppercase mb-3 block text-indigo-600">
            Transformation
          </span>
<h2 className="text-3xl md:text-5xl font-serif font-medium text-neutral-900">
            Get Consistent Results
          </h2>
</div>
<div className="grid md:grid-cols-3 gap-10 md:gap-8 relative max-w-6xl mx-auto">

<div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent to-transparent -z-10 via-neutral-200"></div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl font-serif mb-5 md:mb-6 shadow-sm group-hover:border-indigo-500 group-hover:text-indigo-500 transition-colors bg-white border-neutral-200 text-neutral-400">
              1
            </div>
<h3 className="text-lg md:text-xl font-bold font-montserrat mb-2 md:mb-3 text-neutral-900">
              Book a Call
            </h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed max-w-xs px-4 md:px-0">
              We analyze your current situation, target market, and offer to
              determine if our cold email system is a fit for your specific
              growth goals.
            </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl font-serif mb-5 md:mb-6 shadow-sm group-hover:border-indigo-500 group-hover:text-indigo-500 transition-colors bg-white border-neutral-200 text-neutral-400">
              2
            </div>
<h3 className="text-lg md:text-xl font-bold font-montserrat mb-2 md:mb-3 text-neutral-900">
              We Build The Engine
            </h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed max-w-xs px-4 md:px-0">
              Our team deploys the custom domains, dedicated inboxes, copy, and
              tracking systems in under 14 days.
            </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl font-serif mb-5 md:mb-6 shadow-sm group-hover:border-indigo-500 group-hover:text-indigo-500 transition-colors bg-white border-neutral-200 text-neutral-400">
              3
            </div>
<h3 className="text-lg md:text-xl font-bold font-montserrat mb-2 md:mb-3 text-neutral-900">
              You Get Scale
            </h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed max-w-xs px-4 md:px-0">
              Leads start flowing automatically. You focus on closing deals and
              servicing clients while we handle the daily inbox management and
              follow-ups.
            </p>
</div>
</div>
<div className="flex justify-center mt-12 md:mt-16">
<a className="w-full sm:w-auto justify-center px-10 py-4 rounded-full text-sm transition-all duration-300 font-montserrat font-medium flex items-center gap-2 shadow-lg hover:shadow-xl hover:shadow-indigo-500/20 bg-neutral-900 text-white hover:bg-indigo-600" href="https://savvycal.com/Parker-Worth/6f01e5de" target="_blank">
            Book Your Transformation
            <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</section>

<section className="mb-16 md:mb-24 px-0 md:px-6">
<div className="rounded-[2rem] md:rounded-[2.5rem] p-6 py-10 md:p-20 border shadow-sm text-center relative overflow-hidden bg-white border-neutral-200/60">
<div className="relative z-10">
<h2 className="text-2xl md:text-5xl font-serif font-medium mb-4 md:mb-6 tracking-tight text-neutral-900">
              Exactly How We Scale Clients
            </h2>
<p className="text-sm md:text-lg text-neutral-500 font-light mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
              Watch the video below to learn the exact process we follow to book
              massive contracts
            </p>
<div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl md:rounded-[2rem] border-2 md:border-4 shadow-xl md:shadow-2xl overflow-hidden mb-8 md:mb-12 group cursor-pointer ring-1 bg-neutral-900 border-white/50 ring-neutral-900/5">
<img alt="Process Deep Dive" className="w-full h-full object-cover opacity-90 group-hover:opacity-75 transition-all duration-700" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 w-full h-full">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full border-0" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/wztLZgsD3dU?si=2btmfnCsGwAARrjL" title="YouTube video player"></iframe>
</div>
</div>
<div className="flex justify-center">
<a className="w-full sm:w-auto justify-center px-10 py-4 rounded-full text-sm transition-all duration-300 font-montserrat font-medium flex items-center gap-2 shadow-lg hover:shadow-xl hover:shadow-indigo-500/20 bg-neutral-900 text-white hover:bg-indigo-600" href="https://savvycal.com/Parker-Worth/6f01e5de" target="_blank">
                Apply Now
                <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20 -mx-4 md:-mx-6 px-4 md:px-6 rounded-[2.5rem] md:rounded-[3rem] bg-neutral-50">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-5xl text-center mb-10 md:mb-16 tracking-tight font-serif font-medium text-neutral-900">
            What's Included
          </h2>
<div className="rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-16 border shadow-sm relative overflow-hidden bg-white border-neutral-200">
<div className="absolute top-0 right-0 w-[20rem] h-[20rem] md:w-[40rem] md:h-[40rem] bg-gradient-to-b to-transparent rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none from-indigo-50/50"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="text-center mb-8 md:mb-12 max-w-3xl">
<span className="font-bold tracking-widest uppercase text-[10px] md:text-xs font-montserrat mb-4 block text-indigo-600">
                  The Ecosystem
                </span>
<h3 className="text-2xl md:text-4xl font-serif mb-4 md:mb-6 text-neutral-900">
                  All-In-One Growth Infrastructure
                </h3>
<p className="text-neutral-500 font-light text-base md:text-lg">
                  We've consolidated our entire suite of growth tools into one
                  powerful partnership designed for maximum impact.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-y-4 gap-x-20 md:gap-y-6 w-full max-w-4xl mb-12 md:mb-16">
<ul className="space-y-4 md:space-y-6">
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-indigo-50 text-indigo-600">
<svg aria-hidden="true" className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-neutral-700">
                      Custom Domain &amp; Inbox Setup
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-indigo-50 text-indigo-600">
<svg aria-hidden="true" className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-neutral-700">
                      Advanced Data Enrichment &amp; Scraping
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-indigo-50 text-indigo-600">
<svg aria-hidden="true" className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-neutral-700">
                      Proven Cold Email Copywriting
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-indigo-50 text-indigo-600">
<svg aria-hidden="true" className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-neutral-700">
                      Dedicated Inbox Management
                    </span>
</li>
</ul>
<ul className="space-y-4 md:space-y-6">
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-indigo-50 text-indigo-600">
<svg aria-hidden="true" className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-neutral-700">
                      Automated Follow-Up Sequences
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-indigo-50 text-indigo-600">
<svg aria-hidden="true" className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-neutral-700">
                      CRM Integration &amp; Lead Handoff
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-indigo-50 text-indigo-600">
<svg aria-hidden="true" className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-neutral-700">
                      24/7 Live Reporting
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-indigo-50 text-indigo-600">
<svg aria-hidden="true" className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-bold font-montserrat text-sm md:text-lg border-b-2 text-neutral-900 border-indigo-200">
                      20 Leads in 90 Days or You Don't Pay
                    </span>
</li>
</ul>
</div>
<div className="flex flex-col items-center w-full">
<a className="w-full md:w-auto text-base md:text-lg px-8 md:px-12 py-4 md:py-5 rounded-full transition-all duration-300 shadow-xl font-montserrat font-medium flex items-center justify-center gap-3 group bg-neutral-900 text-white hover:bg-indigo-600 shadow-indigo-900/10" href="https://savvycal.com/Parker-Worth/6f01e5de" target="_blank">
                  Secure Your Growth Partner
                  <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<p className="mt-4 md:mt-6 text-xs md:text-sm font-montserrat text-neutral-400">
                  No long-term contracts. Cancel anytime.
                </p>
</div>
</div>
</div>
</div>
</section>


<section className="md:py-24 grid lg:grid-cols-2 gap-10 md:gap-16 border-neutral-100 border-t pt-16 pb-16 gap-x-10 gap-y-10 items-center">
<div className="order-2 lg:order-1">
<h2 className="text-3xl md:text-5xl mb-6 md:mb-8 tracking-tight font-serif font-medium text-neutral-900">
            Hi, I'm Parker Worth
          </h2>
<div className="space-y-4 md:space-y-6 text-sm md:text-base text-neutral-500 font-light leading-relaxed">
<p className="">
              (Please ignore my GF) I cofounded IronPeak with one mission: to
              eliminate the guesswork in B2B growth.
            </p>
<p className="">
              After seeing how many incredible businesses struggle simply
              because they can't get in front of the right people, I realized
              most lead gen methods are broken. They rely on expensive ads or
              exhausting manual outreach. We built IronPeak to change that by
              combining advanced data scraping with custom cold email
              infrastructure, we guarantee qualified meetings on your calendar
              so you can focus on what you do best: closing deals and running
              your business.
            </p>
</div>
<a className="mt-6 md:mt-8 inline-block font-semibold border-b pb-0.5 transition-all text-indigo-600 border-indigo-200 hover:border-indigo-600" href="https://savvycal.com/Parker-Worth/6f01e5de" target="_blank">
            Let's Talk!
          </a>
</div>
<div className="relative order-1 lg:order-2 h-64 md:h-[500px] w-full rounded-[2rem] overflow-hidden bg-neutral-100">
<img alt="Founder" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/727c7bb8-dc5c-4eed-8265-9cd35f1bc030_1600w.jpg"/>
</div>
</section>
<section className="md:py-24 grid lg:grid-cols-2 gap-10 md:gap-16 border-neutral-100 border-t pt-16 pb-16 gap-x-10 gap-y-10 items-center">
<div className="relative order-1 lg:order-1 h-64 md:h-[500px] w-full rounded-[2rem] overflow-hidden bg-neutral-100">
<img alt="Founder" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f355d47a-0e9d-4f97-a732-30f6e0f054bb_1600w.png"/>
</div>
<div className="order-2 lg:order-2">
<h2 className="text-3xl md:text-5xl mb-6 md:mb-8 tracking-tight font-serif font-normal text-neutral-900">
            And I'm Charlie Bennett
          </h2>
<div className="space-y-4 md:space-y-6 text-sm md:text-base text-neutral-500 font-extralight leading-relaxed">
<p className="">
              I co-founded IronPeak because I've seen firsthand what cold email
              can do when it's done right
            </p>
<p className="">
              I spent six years in recruitment where I built over $1.5M in
              pipeline purely from cold email outbound. I've run the
              infrastructure, managed the inboxes, and scaled campaigns sending
              tens of thousands of emails a month. I know what works, what lands
              in spam, and how to squeeze every last reply out of a list. At
              IronPeak, I handle the operations, the tech stack, the
              deliverability, the data enrichment, and the systems that keep
              leads flowing into your calendar on autopilot.
            </p>
</div>
<a className="mt-6 md:mt-8 inline-block font-medium border-b pb-0.5 transition-all text-indigo-600 border-indigo-200 hover:border-indigo-600" href="https://savvycal.com/Parker-Worth/6f01e5de" target="_blank">
            Let's Talk!
          </a>
</div>
</section>

<section className="py-16 md:py-20 mb-16 md:mb-20 rounded-[2rem] md:rounded-[2.5rem] text-center px-4 md:px-6 relative overflow-hidden bg-neutral-900" id="contact">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/40 via-neutral-900 to-neutral-900"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-5xl mb-4 md:mb-6 tracking-tight font-serif font-medium text-white">
            Get Your Free Audit
          </h2>
<p className="text-base md:text-lg mb-8 md:mb-10 font-light text-neutral-400">
            We'll analyze your current lead generation and show you where you're
            leaving money on the table.
          </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 border rounded-full px-6 py-3.5 md:py-4 placeholder-neutral-500 focus:outline-none focus:border-indigo-500 transition-colors backdrop-blur-sm bg-white/10 border-white/20 text-white" placeholder="Enter your email" type="email"/>
<button className="md:py-4 hover:bg-indigo-500 transition-colors shadow-indigo-900/50 font-bold text-white bg-indigo-600 rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-lg" type="button">
              Get Audit
            </button>
</form>
</div>
</section>

<section className="max-w-3xl mx-auto py-8 md:py-10 mb-16 md:mb-24 px-2 md:px-6">
<h2 className="text-2xl md:text-3xl text-center mb-10 md:mb-12 tracking-tight font-serif font-normal text-neutral-900">
          FAQs — Everything you need to know.
        </h2>
<div className="space-y-4">

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-white border-neutral-200">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-normal font-montserrat select-none text-neutral-900 text-sm md:text-base">
              How fast can we expect results?
              <svg aria-hidden="true" className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-neutral-500 leading-relaxed font-extralight border-t pt-4 border-neutral-100">
              We spend the first 14 days building your custom email
              infrastructure and warming up domains to ensure perfect
              deliverability. You can expect your first booked meetings within
              the first 30 days of the campaign going live.
            </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-white border-neutral-200">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-normal font-montserrat select-none text-neutral-900 text-sm md:text-base">
              Do you work with any industry?
              <svg aria-hidden="true" className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-neutral-500 leading-relaxed font-extralight border-t pt-4 border-neutral-100">
              We specialize in B2B companies, agencies, and high-ticket service
              providers. Our system works best when you have a clear offer and a
              high lifetime value per client. On our discovery call, we'll tell
              you honestly if your niche is a good fit.
            </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-white border-neutral-200">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-normal font-montserrat select-none text-neutral-900 text-sm md:text-base">
              What is the guarantee exactly?
              <svg aria-hidden="true" className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-neutral-500 leading-relaxed font-extralight border-t pt-4 border-neutral-100">
              Simple: we guarantee to book you 20 qualified leads (sales
              meetings with your target audience) within 90 days. If we fail to
              hit that number, you don't pay our performance fee. We take on the
              risk so you don't have to.
            </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-white border-neutral-200">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-normal font-montserrat select-none text-neutral-900 text-sm md:text-base">
              How much of my time is required?
              <svg aria-hidden="true" className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-neutral-500 leading-relaxed font-extralight border-t pt-4 border-neutral-100">
              Very little. Aside from a 60-minute onboarding call to download
              your brain on your offer and target market, our service is
              completely done-for-you. You just show up to the sales calls we
              book on your calendar.
            </div>
</details>
</div>
<p className="text-center text-sm mt-8 text-neutral-400">
          Don't see what you're looking for?
          <a className="underline transition-all text-indigo-600 decoration-indigo-200 hover:decoration-indigo-600" href="#">
            Get in touch
          </a>
          .
        </p>
</section>

<section className="mx-auto py-16 md:py-24 px-4 md:px-6 max-w-7xl" id="book-call">
<div className="text-center mb-10 md:mb-16">
<h2 className="text-3xl md:text-5xl font-serif font-medium text-neutral-900 mb-6 tracking-tight">
            Book a Call
          </h2>
<p className="text-base md:text-lg text-neutral-500 font-light max-w-2xl mx-auto">
            Book a no-commitment discovery call to discuss how we can help you
            grow.
          </p>
</div>
<div className="w-full bg-white rounded-[2rem] border border-neutral-200 shadow-sm overflow-hidden">
<iframe className="" frameborder="0" height="800" src="https://savvycal.com/Parker-Worth/6f01e5de" style={{minWidth: '320px'}} width="100%"></iframe>
</div>
</section>
</main>

<footer className="border-t pt-12 md:pt-16 pb-8 md:pb-10 px-4 md:px-6 bg-white border-neutral-200">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-10">

<div className="text-center md:text-left">
<a className="font-serif text-2xl tracking-tight italic font-medium text-neutral-900" href="#">IronPeak</a>
<p className="text-xs mt-3 max-w-xs font-light text-neutral-400 mx-auto md:mx-0">
            Scaling revenue for ambitious brands through intelligent ecosystems.
          </p>
</div>

<div className="flex flex-col gap-3 text-center md:text-right">
<a className="text-sm transition-colors font-medium text-neutral-600 hover:text-indigo-600" href="#">
            Case Studies
          </a>
<a className="text-sm transition-colors font-medium text-neutral-600 hover:text-indigo-600" href="#">
            Contact
          </a>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 md:mt-16 pt-8 border-t text-center text-[10px] md:text-xs font-montserrat border-neutral-100 text-neutral-400">
<p className="">© 2026 IronPeak Marketing. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
