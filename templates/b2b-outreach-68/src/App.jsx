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
      

<header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 md:pt-6 md:px-6 pointer-events-none">
<nav className="pointer-events-auto glass rounded-full pl-5 pr-2 py-2 flex items-center justify-between gap-4 md:gap-10 shadow-2xl shadow-black/50 w-full max-w-5xl transition-all duration-300">

<a className="group flex items-center gap-2 shrink-0" href="#">
<span className="font-serif text-xl md:text-2xl tracking-tight italic font-normal group-hover:text-rose-500 transition-colors text-white">Kaspar Systems</span>
</a>

<a className="text-xs px-4 py-2 md:px-5 md:py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 font-montserrat font-normal group shadow-md hover:shadow-lg hover:shadow-rose-500/20 bg-white text-black hover:bg-rose-600 hover:text-white shrink-0" href="#contact">
        Get Started
        <iconify-icon className="text-sm transition-transform group-hover:translate-x-0.5 hidden sm:block" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</nav>
</header>
<main className="max-w-7xl mx-auto pt-28 md:pt-32 px-4 md:px-6 pb-24">

<section className="md:rounded-[2.5rem] md:p-12 lg:p-20 shadow-black/20 overflow-hidden md:mb-16 text-center bg-[#0A0A0A] border-white/5 border rounded-[2rem] mb-12 pt-12 pr-6 pb-12 pl-6 relative shadow-2xl">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-30"></div>
<div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">

<div className="animate-fade-up w-fit border px-3 py-1 rounded-full text-xs tracking-widest uppercase font-montserrat font-medium mb-6 md:mb-8 bg-rose-950/30 border-rose-900/50 text-rose-400">
          Attention B2B Companies
        </div>

<h1 className="animate-fade-up delay-100 leading-[1.1] text-4xl font-normal text-white tracking-tight font-serif mb-6 sm:text-5xl md:text-7xl md:leading-[0.95] md:mb-8 lg:text-[5rem] lg:text-6xl"> <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 italic pr-2 to-purple-400">
            Qualified Meetings
          </span> in <br className="hidden md:block"/> 30 Days or <span className="border-b-2 md:border-b-4 border-rose-500/30">
            You Don't Pay.
          </span></h1>

<p className="animate-fade-up delay-200 text-base md:text-xl tracking-tight text-gray-400 leading-relaxed max-w-2xl mb-8 md:mb-12 font-light px-2">
          Our done-for-you cold outreach system gets you in front of decision-makers with budget and authority, without you lifting a finger.
        </p>

<div className="animate-fade-up delay-300 relative w-full max-w-4xl aspect-video rounded-xl md:rounded-[2rem] border-2 md:border-4 shadow-2xl overflow-hidden mb-8 md:mb-12 group cursor-pointer ring-1 bg-black border-white/10 shadow-black ring-white/5">

<img alt="Process Video" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;q=80&amp;w=2426"/>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-14 h-14 md:w-24 md:h-24 backdrop-blur-md rounded-full flex items-center justify-center border shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10 bg-black/40 border-white/10">
<div className="w-10 h-10 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg pl-0.5 md:pl-1 bg-white text-black">
<iconify-icon className="text-xl md:text-3xl" icon="solar:play-linear"></iconify-icon>
</div>
</div>
</div>

<div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 backdrop-blur-md text-xs px-2.5 py-1 md:px-3 md:py-1.5 rounded-full font-montserrat flex items-center gap-2 border bg-black/60 text-white border-white/10">
<div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-rose-500 animate-pulse"></div>
            Watch breakdown
          </div>
</div>

<div className="animate-fade-up delay-500 flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center w-full mb-6">
<a className="w-full sm:w-auto px-8 py-3.5 md:py-4 rounded-full text-sm hover:shadow-xl hover:shadow-rose-500/20 transition-all duration-300 flex items-center justify-center gap-2 font-montserrat font-normal group bg-white text-black hover:bg-rose-600 hover:text-white" href="#contact">
            Get Started
            <iconify-icon className="text-base transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto border px-8 py-3.5 md:py-4 rounded-full text-sm transition-all duration-300 font-montserrat font-normal flex items-center justify-center gap-2 bg-transparent border-white/10 text-white hover:border-white/30 hover:bg-white/5" href="#process">
            Learn More
          </a>
</div>

<p className="animate-fade-up delay-500 text-xs font-montserrat text-gray-500">
          Book a Free Strategy Session. No credit card required.
        </p>
</div>
</section>


<section className="py-12 md:py-20 max-w-6xl mx-auto">
<h2 className="text-3xl md:text-5xl text-center mb-10 md:mb-16 tracking-tight font-serif font-normal text-white px-4">Are You Struggling With...</h2>
<div className="grid md:grid-cols-3 gap-6 md:gap-8">

<div className="md:p-8 md:rounded-3xl hover:shadow-2xl hover:shadow-rose-900/10 transition-all duration-300 bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-lg shadow-black" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(244,63,94,0.3), rgba(244,63,94,0.05))', '--border-radius-before': '1.5rem'}}>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon className="text-xl md:text-2xl" icon="solar:graph-down-linear"></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-montserrat font-medium mb-2 md:mb-3 tracking-tight text-white">
            Unpredictable Referrals
          </h3>
<p className="text-gray-400 font-light leading-relaxed text-sm">
            You rely on word-of-mouth or referrals, creating revenue rollercoasters that make it impossible to scale predictably.
          </p>
</div>

<div className="md:p-8 md:rounded-3xl hover:shadow-2xl hover:shadow-rose-900/10 transition-all duration-300 bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-lg shadow-black" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(244,63,94,0.3), rgba(244,63,94,0.05))', '--border-radius-before': '1.5rem'}}>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon className="text-xl md:text-2xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-montserrat font-medium mb-2 md:mb-3 tracking-tight text-white">
            Slow Content &amp; SEO
          </h3>
<p className="text-gray-400 font-light leading-relaxed text-sm">
            Waiting 12-18 months for organic traction while competing with everyone else for attention in a saturated market.
          </p>
</div>

<div className="md:p-8 md:rounded-3xl hover:shadow-2xl hover:shadow-rose-900/10 transition-all duration-300 bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-lg shadow-black" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(244,63,94,0.3), rgba(244,63,94,0.05))', '--border-radius-before': '1.5rem'}}>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon className="text-xl md:text-2xl" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-montserrat font-medium mb-2 md:mb-3 tracking-tight text-white">
            Expensive, Unqualified Ads
          </h3>
<p className="text-gray-400 font-light leading-relaxed text-sm">
            Burning cash on paid ads where the B2B cost-per-lead is astronomical, and most clicks are just tire-kickers.
          </p>
</div>
</div>
</section>

<section className="py-12 md:py-20">
<div className="text-center mb-10 md:mb-16 px-4">
<h2 className="md:text-5xl text-3xl font-normal text-white tracking-tight font-serif mb-4">
          Why Choose Cold Outreach Done Right
        </h2>
<p className="text-gray-400 max-w-2xl mx-auto font-light text-sm md:text-base">
          We build and run your entire outbound system to guarantee qualified pipeline.
        </p>
</div>
<div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-all hover:border-rose-500/30 bg-gradient-to-br from-[#0f0f0f] to-[#050505] h-64 border border-white/5 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="md:text-2xl text-xl font-normal text-white tracking-tight font-montserrat mb-3 md:mb-4">
            Laser-Targeted Precision
          </h3>
<p className="text-gray-400 font-light text-sm leading-relaxed z-10 relative">
            We target exactly who you want to talk to by title, company size, and industry, reaching them directly in their inbox.
          </p>
<div className="mt-auto self-end group-hover:text-rose-500 transition-colors duration-500 transform group-hover:scale-110 text-white/5">
<iconify-icon className="text-[4rem] md:text-[6rem]" icon="solar:target-linear"></iconify-icon>
</div>
</div>

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-all hover:border-rose-500/30 bg-gradient-to-br from-[#0f0f0f] to-[#050505] h-64 border border-white/5 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="text-xl md:text-2xl font-montserrat tracking-tight font-normal mb-3 md:mb-4 text-white">
            100% Done-For-You
          </h3>
<p className="text-gray-400 font-light text-sm leading-relaxed z-10 relative">
            We handle the bespoke copywriting, technical setup, list building, and follow-ups. You just show up to the meetings.
          </p>
<div className="mt-auto self-end group-hover:text-rose-500 transition-colors duration-500 transform group-hover:scale-110 text-white/5">
<iconify-icon className="text-[4rem] md:text-[6rem]" icon="solar:settings-linear"></iconify-icon>
</div>
</div>

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-all hover:border-rose-500/30 bg-gradient-to-br from-[#0f0f0f] to-[#050505] h-64 border border-white/5 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="text-xl md:text-2xl font-montserrat tracking-tight font-normal mb-3 md:mb-4 text-white">
            Pay Per Qualified Meeting
          </h3>
<p className="text-gray-400 font-light text-sm leading-relaxed z-10 relative">
            You only pay when we book a meeting with a decision-maker who has budget and authority. If we don't deliver, you don't pay.
          </p>
<div className="mt-auto self-end group-hover:text-rose-500 transition-colors duration-500 transform group-hover:scale-110 text-white/5">
<iconify-icon className="text-[4rem] md:text-[6rem]" icon="solar:shield-check-linear"></iconify-icon>
</div>
</div>
</div>
<div className="flex justify-center">
<a className="w-full sm:w-auto justify-center px-8 py-3.5 rounded-full text-sm transition-all duration-300 font-montserrat font-normal flex items-center gap-2 bg-white text-black hover:bg-rose-600 hover:text-white" href="#contact">
          Book a Call
          <iconify-icon className="text-base" icon="solar:phone-linear"></iconify-icon>
</a>
</div>
</section>


<section className="py-16 md:py-24" id="process">
<div className="text-center mb-12 md:mb-16">
<span className="text-xs font-montserrat font-semibold tracking-widest uppercase mb-3 block text-rose-500">
          Transformation
        </span>
<h2 className="text-3xl md:text-5xl font-serif tracking-tight font-normal text-white">
          Get Consistent Results
        </h2>
</div>
<div className="grid md:grid-cols-3 gap-10 md:gap-8 relative max-w-6xl mx-auto">

<div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent to-transparent -z-10 via-white/10"></div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl tracking-tight font-serif mb-5 md:mb-6 shadow-sm group-hover:border-rose-500 group-hover:text-rose-500 transition-colors bg-[#0a0a0a] border-white/10 text-gray-600">
            1
          </div>
<h3 className="text-lg md:text-xl font-medium tracking-tight font-montserrat mb-2 md:mb-3 text-white">
            Book a Call
          </h3>
<p className="text-sm text-gray-400 font-light leading-relaxed max-w-xs px-4 md:px-0">
            We analyze your current offer and determine if a done-for-you outbound system is a fit for your specific growth goals.
          </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl tracking-tight font-serif mb-5 md:mb-6 shadow-sm group-hover:border-rose-500 group-hover:text-rose-500 transition-colors bg-[#0a0a0a] border-white/10 text-gray-600">
            2
          </div>
<h3 className="text-lg md:text-xl font-medium tracking-tight font-montserrat mb-2 md:mb-3 text-white">
            We Build The Engine
          </h3>
<p className="text-sm text-gray-400 font-light leading-relaxed max-w-xs px-4 md:px-0">
            Our team sets up domains, ensures deliverability (SPF/DKIM/DMARC), builds targeted lists, and writes bespoke messaging.
          </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl tracking-tight font-serif mb-5 md:mb-6 shadow-sm group-hover:border-rose-500 group-hover:text-rose-500 transition-colors bg-[#0a0a0a] border-white/10 text-gray-600">
            3
          </div>
<h3 className="text-lg md:text-xl font-medium tracking-tight font-montserrat mb-2 md:mb-3 text-white">
            You Close Deals
          </h3>
<p className="text-sm text-gray-400 font-light leading-relaxed max-w-xs px-4 md:px-0">
            Qualified meetings with decision-makers start flowing onto your calendar automatically. You focus purely on closing.
          </p>
</div>
</div>
<div className="flex justify-center mt-12 md:mt-16">
<a className="w-full sm:w-auto justify-center px-10 py-4 rounded-full text-sm transition-all duration-300 font-montserrat font-normal flex items-center gap-2 shadow-lg shadow-black/50 hover:shadow-rose-500/20 bg-white text-black hover:bg-rose-600 hover:text-white" href="#contact">
          Book Your Transformation
          <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>

<section className="mb-16 md:mb-24 px-0 md:px-6">
<div className="rounded-[2rem] md:rounded-[2.5rem] p-6 py-10 md:p-20 border shadow-2xl shadow-black/20 text-center relative overflow-hidden bg-[#0a0a0a] border-white/5">
<div className="relative z-10">
<h2 className="text-2xl md:text-5xl font-serif font-normal mb-4 md:mb-6 tracking-tight text-white">
            Exactly How We Book Qualified Meetings
          </h2>
<p className="text-sm md:text-lg text-gray-400 font-light mb-8 md:mb-12 max-w-2xl mx-auto tracking-tight leading-relaxed">
            Watch the video below to learn the exact cold outreach system we use to bypass spam filters and generate B2B pipeline.
          </p>
<div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl md:rounded-[2rem] border-2 md:border-4 shadow-2xl overflow-hidden mb-8 md:mb-12 group cursor-pointer ring-1 bg-black border-white/10 ring-white/5">
<img alt="Process Deep Dive" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all duration-700" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 md:w-24 md:h-24 backdrop-blur-md rounded-full flex items-center justify-center border shadow-xl transition-all duration-300 group-hover:scale-110 bg-white/10 border-white/20">
<div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-sm pl-1 bg-white text-black">
<iconify-icon className="text-2xl md:text-4xl" icon="solar:play-linear"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="flex justify-center">
<a className="w-full sm:w-auto justify-center px-10 py-4 rounded-full text-sm transition-all duration-300 font-montserrat font-normal flex items-center gap-2 shadow-lg shadow-black/50 hover:shadow-rose-500/20 bg-white text-black hover:bg-rose-600 hover:text-white" href="#contact">
              Apply Now
              <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20 -mx-4 md:-mx-6 px-4 md:px-6 rounded-[2.5rem] md:rounded-[3rem] bg-[#0a0a0a] border-y border-white/5">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-5xl text-center mb-10 md:mb-16 tracking-tight font-serif font-normal text-white">
          What's Included
        </h2>
<div className="rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-16 border shadow-2xl shadow-black relative overflow-hidden bg-[#111] border-white/5">
<div className="absolute top-0 right-0 w-[20rem] h-[20rem] md:w-[40rem] md:h-[40rem] bg-gradient-to-b to-transparent rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none from-rose-900/10"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="text-center mb-8 md:mb-12 max-w-3xl">
<span className="font-semibold tracking-widest uppercase text-xs font-montserrat mb-4 block text-rose-500">
                The Ecosystem
              </span>
<h3 className="text-2xl md:text-4xl tracking-tight font-serif mb-4 md:mb-6 font-normal text-white">
                Done-For-You Outreach Infrastructure
              </h3>
<p className="text-gray-400 font-light tracking-tight text-base md:text-lg">
                We've consolidated everything needed for high-converting cold outreach into one performance-based partnership.
              </p>
</div>
<div className="grid md:grid-cols-2 gap-y-4 gap-x-20 md:gap-y-6 w-full max-w-4xl mb-12 md:mb-16">
<ul className="space-y-4 md:space-y-6">
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon className="text-sm md:text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="font-normal font-montserrat tracking-tight text-sm md:text-lg text-gray-300">
                    Highly Targeted Lead List Building
                  </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon className="text-sm md:text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="font-normal font-montserrat tracking-tight text-sm md:text-lg text-gray-300">
                    Bespoke, Research-Based Messaging
                  </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon className="text-sm md:text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="font-normal font-montserrat tracking-tight text-sm md:text-lg text-gray-300">
                    Technical Setup (SPF/DKIM/DMARC)
                  </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon className="text-sm md:text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="font-normal font-montserrat tracking-tight text-sm md:text-lg text-gray-300">
                    Domain Warm-up &amp; Deliverability
                  </span>
</li>
</ul>
<ul className="space-y-4 md:space-y-6">
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon className="text-sm md:text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="font-normal font-montserrat tracking-tight text-sm md:text-lg text-gray-300">
                    Inbox Management &amp; Follow-ups
                  </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon className="text-sm md:text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="font-normal font-montserrat tracking-tight text-sm md:text-lg text-gray-300">
                    Continuous A/B Testing &amp; Optimization
                  </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon className="text-sm md:text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="font-normal font-montserrat tracking-tight text-sm md:text-lg text-gray-300">
                    24/7 Live Reporting &amp; Account Manager
                  </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon className="text-sm md:text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="font-medium font-montserrat tracking-tight text-sm md:text-lg border-b-2 text-white border-rose-500/40">
                    Pay Per Qualified Meeting Guarantee
                  </span>
</li>
</ul>
</div>
<div className="flex flex-col items-center w-full">
<a className="w-full md:w-auto text-base md:text-lg px-8 md:px-12 py-4 md:py-5 rounded-full transition-all duration-300 shadow-xl font-montserrat font-normal tracking-tight flex items-center justify-center gap-3 group bg-white text-black hover:bg-rose-600 hover:text-white shadow-black/50" href="#contact">
                Secure Your Growth Partner
                <iconify-icon className="text-lg transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<p className="mt-4 md:mt-6 text-xs font-montserrat text-gray-500">
                No long-term contracts. Cancel anytime.
              </p>
</div>
</div>
</div>
</div>
</section>



<section className="py-16 md:py-20 mb-16 md:mb-20 rounded-[2rem] md:rounded-[2.5rem] text-center px-4 md:px-6 relative overflow-hidden bg-[#0a0a0a] border border-white/5" id="contact">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-rose-950/40 via-transparent to-transparent"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-5xl mb-4 md:mb-6 tracking-tight font-serif font-normal text-white">
          Get Your Free Pipeline Audit
        </h2>
<p className="text-base md:text-lg mb-8 md:mb-10 font-light tracking-tight text-gray-400">
          We'll analyze your current sales process and show you exactly how many decision-makers we can reach in your market. No obligation.
        </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 border rounded-full px-6 py-3.5 md:py-4 placeholder-gray-600 focus:outline-none focus:border-rose-500 transition-colors backdrop-blur-sm bg-white/5 border-white/10 text-white" placeholder="Enter your email" type="email"/>
<button className="md:py-4 hover:bg-rose-500 transition-colors shadow-lg shadow-black/30 font-medium text-black hover:text-white bg-white rounded-full pt-3.5 pr-8 pb-3.5 pl-8" type="button">
            Get Audit
          </button>
</form>
</div>
</section>

<section className="max-w-3xl mx-auto py-8 md:py-10 mb-16 md:mb-24 px-2 md:px-6">
<h2 className="text-2xl md:text-3xl text-center mb-10 md:mb-12 tracking-tight font-serif font-normal text-white">
        FAQs — Everything you need to know.
      </h2>
<div className="space-y-4">

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-normal tracking-tight font-montserrat select-none text-white text-sm md:text-base">
            How fast can we expect results?
            <iconify-icon className="text-lg transition-transform group-open:rotate-180 text-gray-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
            Once onboarded, we spend a few weeks on technical setup and domain warm-up to ensure perfect deliverability. You'll typically start seeing qualified meetings on your calendar within the first 30 days of sending.
          </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-normal tracking-tight font-montserrat select-none text-white text-sm md:text-base">Do you use AI to write the emails?<iconify-icon className="text-lg transition-transform group-open:rotate-180 text-gray-500" height="18" icon="solar:alt-arrow-down-linear" style={{color: 'rgb(107, 114, 128)'}} width="18"></iconify-icon></summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
            Absolutely not. We use bespoke, expertly crafted messaging tailored specifically to your offer and your audience. No generic robot slop that gets marked as spam.
          </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-normal tracking-tight font-montserrat select-none text-white text-sm md:text-base">
            What exactly is a "qualified meeting"?
            <iconify-icon className="text-lg transition-transform group-open:rotate-180 text-gray-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
            A meeting with an actual decision-maker who fits your exact target criteria (title, company size, industry), has budget, and has the authority to buy. Not an assistant or a tire-kicker.
          </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-normal tracking-tight font-montserrat select-none text-white text-sm md:text-base">
            How much of my time is required?
            <iconify-icon className="text-lg transition-transform group-open:rotate-180 text-gray-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
            Very little. We need about an hour for initial onboarding to understand your offer. After that, we handle all list building, technical setup, copywriting, sending, and follow-ups. You just show up to the sales calls.
          </div>
</details>
</div>
<p className="text-center text-sm mt-8 text-gray-500">
        Don't see what you're looking for?
        <a className="underline transition-all text-rose-400 decoration-rose-900 hover:decoration-rose-400" href="#">
          Get in touch
        </a>
        .
      </p>
</section>

<section className="mx-auto py-16 md:py-24 px-4 md:px-6 max-w-7xl" id="book-call">
<div className="text-center mb-10 md:mb-16">
<h2 className="text-3xl md:text-5xl font-serif font-normal text-white mb-6 tracking-tight">
          Book a Call
        </h2>
<p className="text-base md:text-lg tracking-tight text-gray-400 font-light max-w-2xl mx-auto">
          Book a no-commitment discovery call to discuss how we can help you
          scale your pipeline.
        </p>
</div>
<div className="w-full bg-[#0a0a0a] rounded-[2rem] border border-white/5 shadow-sm overflow-hidden">

<div className="calendly-inline-widget w-full" data-processed="true" data-url="https://calendly.com/lucas-clientascension/test?hide_gdpr_banner=1&amp;primary_color=e11d48&amp;background_color=0a0a0a&amp;text_color=ffffff" style={{position: 'relative', minWidth: '320px', height: '1000px', width: '100%'}}><div className="calendly-spinner"><div className="calendly-bounce1"></div><div className="calendly-bounce2"></div><div className="calendly-bounce3"></div></div><iframe className="" frameborder="0" height="100%" src="https://calendly.com/lucas-clientascension/test?embed_domain=&amp;embed_type=Inline&amp;hide_gdpr_banner=1&amp;primary_color=e11d48&amp;background_color=0a0a0a&amp;text_color=ffffff" title="Select a Date &amp; Time - Calendly" width="100%"></iframe></div>


</div>
</section>
</main>

<footer className="border-t pt-12 md:pt-16 pb-8 md:pb-10 px-4 md:px-6 bg-[#050505] border-white/5">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-10">

<div className="text-center md:text-left">
<a className="font-serif text-2xl tracking-tight italic font-normal text-white" href="#">Kaspar Systems</a>
<p className="text-xs mt-3 max-w-xs font-light tracking-tight text-gray-500 mx-auto md:mx-0">
          Scaling pipeline for B2B companies through intelligent cold outreach systems.
        </p>
</div>

<div className="flex flex-col gap-3 text-center md:text-right">
<a className="text-sm transition-colors font-normal tracking-tight text-gray-400 hover:text-rose-400" href="#">
          Services
        </a>
<a className="text-sm transition-colors font-normal tracking-tight text-gray-400 hover:text-rose-400" href="#">
          Case Studies
        </a>
<a className="text-sm transition-colors font-normal tracking-tight text-gray-400 hover:text-rose-400" href="#">
          About
        </a>
<a className="text-sm transition-colors font-normal tracking-tight text-gray-400 hover:text-rose-400" href="#">
          Contact
        </a>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 md:mt-16 pt-8 border-t text-center text-xs font-montserrat border-white/5 text-gray-600">
<p className=""></p>
</div>
</footer>

    </>
  );
}
