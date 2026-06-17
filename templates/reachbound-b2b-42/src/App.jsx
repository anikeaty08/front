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



          document.addEventListener('DOMContentLoaded', () => {
            const LTV = document.getElementById('calc-ltv');
            const Close = document.getElementById('calc-close');
            const Meetings = document.getElementById('calc-meetings');

            const resMeetings = document.getElementById('res-meetings');
            const resClients = document.getElementById('res-clients');
            const resRevenue = document.getElementById('res-revenue');
            const resMultiple = document.getElementById('res-multiple');
            const insightText = document.getElementById('insight-text');

            const CAMPAIGN_INVESTMENT = 4000;

            function calculate() {
              if(!LTV || !Close || !Meetings) return;
              const ltvVal = parseFloat(LTV.value) || 0;
              const closeVal = parseFloat(Close.value) || 0;
              const meetingsVal = parseFloat(Meetings.value) || 0;

              const clients = Math.round(meetingsVal * (closeVal / 100));
              const revenue = clients * ltvVal;
              const multiple = CAMPAIGN_INVESTMENT > 0 ? (revenue / CAMPAIGN_INVESTMENT).toFixed(1) : 0;

              if(resMeetings) resMeetings.innerText = meetingsVal;
              if(resClients) resClients.innerText = clients;
              if(resRevenue) resRevenue.innerText = '$' + revenue.toLocaleString();
              if(resMultiple) resMultiple.innerText = multiple + 'x';

              if(insightText) {
                insightText.innerText = 'With an average client value of $' + ltvVal.toLocaleString() + ' and a ' + closeVal + '% close rate, ' + meetingsVal + ' qualified meetings could generate approximately $' + revenue.toLocaleString() + ' in new business.';
              }
            }

            if (LTV) LTV.addEventListener('input', calculate);
            if (Close) Close.addEventListener('input', calculate);
            if (Meetings) Meetings.addEventListener('input', calculate);
          });
        


      lucide.createIcons();
    
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
<span className="font-serif tracking-tight italic font-medium group-hover:text-rose-500 transition-colors text-white text-2xl md:text-3xl">
            ReachBound
          </span>
</a>

<a className="text-xs px-4 py-2 md:px-5 md:py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 font-montserrat font-medium group shadow-md hover:shadow-lg hover:shadow-rose-500/20 bg-white text-black hover:bg-rose-600 hover:text-white shrink-0" href="#book-call">
          Get Started
          <svg className="lucide lucide-arrow-right w-3 h-3 transition-transform group-hover:translate-x-0.5 hidden sm:block" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</nav>
</header>
<main className="max-w-7xl mx-auto pt-28 md:pt-32 px-4 md:px-6 pb-24">

<section className="relative rounded-[2rem] md:rounded-[2.5rem] p-6 py-12 md:p-12 lg:p-20 border shadow-2xl shadow-black/20 overflow-hidden text-center mb-12 md:mb-16 bg-[#0A0A0A] border-white/5">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-30"></div>
<div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">

<div className="animate-fade-up w-fit border px-3 py-1 rounded-full text-[10px] tracking-widest uppercase font-montserrat font-semibold mb-6 md:mb-8 bg-rose-950/30 border-rose-900/50 text-rose-400">
            Attention B2B Founders &amp; Agencies
          </div>

<h1 className="animate-fade-up delay-100 text-4xl sm:text-5xl md:text-7xl lg:text-[5rem] leading-[1.1] md:leading-[0.95] tracking-tighter mb-6 md:mb-8 font-serif font-medium text-white">
            We'll Add
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 italic pr-2 to-orange-400">
              15-30 Qualified Meetings
            </span>
            in
            <br className="hidden md:block"/>
            90 Days or
            <span className="border-b-2 md:border-b-4 border-rose-500/30">
              You Don't Pay.
            </span>
</h1>

<p className="animate-fade-up delay-200 text-base md:text-xl text-gray-400 leading-relaxed max-w-2xl mb-8 md:mb-12 font-light px-2">
            Our automated cold email infrastructure adds a predictable sales
            pipeline to your business without you lifting a finger.
          </p>

<div className="animate-fade-up delay-300 relative w-full max-w-4xl aspect-video rounded-xl md:rounded-[2rem] border-2 md:border-4 shadow-2xl overflow-hidden mb-8 md:mb-12 group cursor-pointer ring-1 bg-black border-white/10 shadow-black ring-white/5">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full absolute inset-0" frameborder="0" src="https://fast.wistia.net/embed/iframe/mdkxj9f1p3" title="Video Sales Letter"></iframe>
</div>

<div className="animate-fade-up delay-500 flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center w-full mb-6">
<a className="w-full sm:w-auto px-8 py-3.5 md:py-4 rounded-full text-sm hover:shadow-xl hover:shadow-rose-500/20 transition-all duration-300 flex items-center justify-center gap-2 font-montserrat font-medium group bg-white text-black hover:bg-rose-600 hover:text-white" href="#book-call">
              Get Started
              <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="w-full sm:w-auto border px-8 py-3.5 md:py-4 rounded-full text-sm transition-all duration-300 font-montserrat font-medium flex items-center justify-center gap-2 bg-transparent border-white/10 text-white hover:border-white/30 hover:bg-white/5" href="#process">
              Learn More
            </a>
</div>

<p className="animate-fade-up delay-500 text-[10px] md:text-xs font-montserrat text-gray-500">
            Book a Free Strategy Session. No credit card required.
          </p>
</div>
</section>


<section className="py-12 md:py-20 max-w-6xl mx-auto">
<h2 className="text-3xl md:text-5xl text-center mb-10 md:mb-16 tracking-tight font-serif font-medium text-white px-4">
          Are You Currently Struggling With...
        </h2>
<div className="grid md:grid-cols-3 gap-6 md:gap-8">

<div className="md:p-8 md:rounded-3xl hover:shadow-2xl hover:shadow-rose-900/10 transition-all duration-300 bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-lg shadow-black" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(244,63,94,0.3), rgba(244,63,94,0.05))', '--border-radius-before': '1.5rem'}}>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-trending-down w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 17h6v-6"></path>
<path d="m22 17-8.5-8.5-5 5L2 7"></path>
</svg>
</div>
<h3 className="text-lg md:text-xl font-montserrat font-semibold mb-2 md:mb-3 text-white">
              Unpredictable Pipeline
            </h3>
<p className="text-gray-400 font-light leading-relaxed text-sm">
              Relying entirely on unpredictable referrals or word of mouth to
              get new clients, creating revenue rollercoasters.
            </p>
</div>

<div className="md:p-8 md:rounded-3xl hover:shadow-2xl hover:shadow-rose-900/10 transition-all duration-300 bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-lg shadow-black" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(244,63,94,0.3), rgba(244,63,94,0.05))', '--border-radius-before': '1.5rem'}}>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-calendar-x w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
<line x1="10" x2="14" y1="14" y2="18"></line>
<line x1="14" x2="10" y1="14" y2="18"></line>
</svg>
</div>
<h3 className="text-lg md:text-xl font-montserrat font-semibold mb-2 md:mb-3 text-white">
              Empty Calendars
            </h3>
<p className="text-gray-400 font-light leading-relaxed text-sm">
              Staring at a blank schedule each week, wishing you had more
              conversations with ideal clients who actually have the budget to
              hire you.
            </p>
</div>

<div className="md:p-8 md:rounded-3xl hover:shadow-2xl hover:shadow-rose-900/10 transition-all duration-300 bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-lg shadow-black" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(244,63,94,0.3), rgba(244,63,94,0.05))', '--border-radius-before': '1.5rem'}}>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-layers w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
<polyline points="2 12 12 17 22 12"></polyline>
<polyline points="2 17 12 22 22 17"></polyline>
</svg>
</div>
<h3 className="text-lg md:text-xl font-montserrat font-semibold mb-2 md:mb-3 text-white">
              Wearing Too Many Hats
            </h3>
<p className="text-gray-400 font-light leading-relaxed text-sm">
              Wasting precious time trying to figure out marketing and lead
              generation instead of taking sales calls and focusing on service
              delivery.
            </p>
</div>
</div>
</section>

<section className="py-12 md:py-20">
<div className="text-center mb-10 md:mb-16 px-4">
<h2 className="md:text-5xl text-3xl font-medium text-white tracking-tight font-serif mb-4">
            Why Choose ReachBound
          </h2>
<p className="text-gray-400 max-w-2xl mx-auto font-light text-sm md:text-base">
            We use a unique cold email infrastructure and personalization engine
            that others simply can't replicate.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-all hover:border-rose-500/30 bg-gradient-to-br from-[#0f0f0f] to-[#050505] h-64 border border-white/5 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="md:text-2xl md:mb-4 text-xl font-medium text-white font-montserrat mb-3">
              Done-For-You Infrastructure
            </h3>
<p className="text-gray-400 font-light text-sm leading-relaxed z-10 relative">
              We set up domains, build secondary mailboxes, and implement
              precise warming protocols so your message never lands in spam.
            </p>
<div className="mt-auto self-end group-hover:text-rose-500 transition-colors duration-500 transform group-hover:scale-110 text-white/5">
<svg className="lucide lucide-crosshair w-16 h-16 md:w-24 md:h-24 stroke-[1px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="22" x2="18" y1="12" y2="12"></line>
<line x1="6" x2="2" y1="12" y2="12"></line>
<line x1="12" x2="12" y1="6" y2="2"></line>
<line x1="12" x2="12" y1="22" y2="18"></line>
</svg>
</div>
</div>

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-all hover:border-rose-500/30 bg-gradient-to-br from-[#0f0f0f] to-[#050505] h-64 border border-white/5 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="text-xl md:text-2xl font-montserrat font-medium mb-3 md:mb-4 text-white">
              Hyper-Personalized Outreach
            </h3>
<p className="text-gray-400 font-light text-sm leading-relaxed z-10 relative">
              We use deep manual research and proven frameworks to craft
              multi-angle cold email copy that actually gets replies from
              high-ticket decision-makers.
            </p>
<div className="mt-auto self-end group-hover:text-rose-500 transition-colors duration-500 transform group-hover:scale-110 text-white/5">
<svg className="lucide lucide-monitor w-16 h-16 md:w-24 md:h-24 stroke-[1px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="3"></rect>
<line x1="8" x2="16" y1="21" y2="21"></line>
<line x1="12" x2="12" y1="17" y2="21"></line>
</svg>
</div>
</div>

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-all hover:border-rose-500/30 bg-gradient-to-br from-[#0f0f0f] to-[#050505] h-64 border border-white/5 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="text-xl md:text-2xl font-montserrat font-medium mb-3 md:mb-4 text-white">
              100% Performance Driven
            </h3>
<p className="text-gray-400 font-light text-sm leading-relaxed z-10 relative">
              We are so confident in our cold email system that we put our own
              money on the line. If we don't deliver qualified meetings, you
              don't pay.
            </p>
<div className="mt-auto self-end group-hover:text-rose-500 transition-colors duration-500 transform group-hover:scale-110 text-white/5">
<svg className="lucide lucide-shield-check w-16 h-16 md:w-24 md:h-24 stroke-[1px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
</div>
</div>
<div className="flex justify-center">
<a className="w-full sm:w-auto justify-center px-8 py-3.5 rounded-full text-sm transition-all duration-300 font-montserrat font-medium flex items-center gap-2 bg-white text-black hover:bg-rose-600 hover:text-white" href="#book-call">
            Book a Call
            <svg className="lucide lucide-phone w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
</svg>
</a>
</div>
</section>

<section className="py-16 md:py-24 px-4 md:px-6 rounded-[2rem] md:rounded-[2.5rem] border shadow-2xl shadow-black/40 text-center bg-[#0a0a0a] border-white/5">
<div className="max-w-3xl mx-auto">
<div className="inline-flex justify-center mb-6 md:mb-8 text-rose-500">
<svg className="lucide lucide-quote w-8 h-8 md:w-12 md:h-12 fill-current opacity-20" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
</div>
<h3 className="text-2xl md:text-4xl lg:text-5xl font-serif leading-tight mb-8 md:mb-10 italic text-white px-2">
            "We added an extra $50k in pipeline within just 30 days of working
            with ReachBound. Their cold email systems are unlike anything we've
            seen before."
          </h3>
<div className="flex flex-col items-center">
<div className="w-12 h-12 md:w-16 md:h-16 rounded-full mb-4 overflow-hidden border-2 shadow-md bg-neutral-800 border-white/10">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="font-montserrat font-semibold text-white">
              John Davis
            </div>
<div className="text-xs md:text-sm font-light text-gray-500">
              Founder, TechFlow Solutions
            </div>
</div>
</div>
</section>

<section className="py-16 md:py-24" id="process">
<div className="text-center mb-12 md:mb-16">
<span className="text-[10px] md:text-xs font-montserrat font-bold tracking-widest uppercase mb-3 block text-rose-500">
            The Process
          </span>
<h2 className="text-3xl md:text-5xl font-serif font-medium text-white">
            How We Scale Your Outbound
          </h2>
</div>
<div className="grid md:grid-cols-3 gap-10 md:gap-8 relative max-w-6xl mx-auto">

<div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent to-transparent -z-10 via-white/10"></div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl font-serif mb-5 md:mb-6 shadow-sm group-hover:border-rose-500 group-hover:text-rose-500 transition-colors bg-[#0a0a0a] border-white/10 text-gray-600">
              1
            </div>
<h3 className="text-lg md:text-xl font-bold font-montserrat mb-2 md:mb-3 text-white">
              Setup &amp; Infrastructure
            </h3>
<p className="text-sm text-gray-400 font-light leading-relaxed max-w-xs px-4 md:px-0">
              We purchase secondary domains, set up and warm up your email
              accounts, and build highly targeted lead lists of your exact ICP.
            </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl font-serif mb-5 md:mb-6 shadow-sm group-hover:border-rose-500 group-hover:text-rose-500 transition-colors bg-[#0a0a0a] border-white/10 text-gray-600">
              2
            </div>
<h3 className="text-lg md:text-xl font-bold font-montserrat mb-2 md:mb-3 text-white">
              Campaigns &amp; Copywriting
            </h3>
<p className="text-sm text-gray-400 font-light leading-relaxed max-w-xs px-4 md:px-0">
              We write highly personalized cold email sequences to test multiple
              angles, and successfully launch the outbound engine.
            </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl font-serif mb-5 md:mb-6 shadow-sm group-hover:border-rose-500 group-hover:text-rose-500 transition-colors bg-[#0a0a0a] border-white/10 text-gray-600">
              3
            </div>
<h3 className="text-lg md:text-xl font-bold font-montserrat mb-2 md:mb-3 text-white">
              Inbox Management &amp; Booking
            </h3>
<p className="text-sm text-gray-400 font-light leading-relaxed max-w-xs px-4 md:px-0">
              We handle every single reply, answer questions, and qualify
              prospects to book meetings directly onto your calendar.
            </p>
</div>
</div>
<div className="flex justify-center mt-12 md:mt-16">
<a className="w-full sm:w-auto justify-center px-10 py-4 rounded-full text-sm transition-all duration-300 font-montserrat font-medium flex items-center gap-2 shadow-lg shadow-black/50 hover:shadow-rose-500/20 bg-white text-black hover:bg-rose-600 hover:text-white" href="#book-call">
            Book Your Strategy Call
            <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</section>


<section className="py-16 md:py-20 -mx-4 md:-mx-6 px-4 md:px-6 rounded-[2.5rem] md:rounded-[3rem] bg-[#0a0a0a] border-y border-white/5">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-5xl text-center mb-10 md:mb-16 tracking-tight font-serif font-medium text-white">
            What's Included
          </h2>
<div className="rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-16 border shadow-2xl shadow-black relative overflow-hidden bg-[#111] border-white/5">
<div className="absolute top-0 right-0 w-[20rem] h-[20rem] md:w-[40rem] md:h-[40rem] bg-gradient-to-b to-transparent rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none from-rose-900/10"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="text-center mb-8 md:mb-12 max-w-3xl">
<span className="font-bold tracking-widest uppercase text-[10px] md:text-xs font-montserrat mb-4 block text-rose-500">
                  The Ecosystem
                </span>
<h3 className="text-2xl md:text-4xl font-serif mb-4 md:mb-6 text-white">
                  All-In-One Cold Email Infrastructure
                </h3>
<p className="text-gray-400 font-light text-base md:text-lg">
                  We've consolidated our entire suite of growth tools into one
                  powerful partnership designed for maximum impact.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-y-4 gap-x-20 md:gap-y-6 w-full max-w-4xl mb-12 md:mb-16">
<ul className="space-y-4 md:space-y-6">
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-300">
                      Prospect research &amp; list building
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-300">
                      Domain &amp; inbox infrastructure
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-300">
                      Deliverability optimization &amp; inbox warming
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-300">
                      Cold email copywriting
                    </span>
</li>
</ul>
<ul className="space-y-4 md:space-y-6">
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-300">
                      Campaign management &amp; A/B testing
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-300">
                      Dedicated outbound team
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-300">
                      Lead qualification &amp; meeting booking
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-300">
                      Live reporting &amp; campaign analytics
                    </span>
</li>
</ul>
</div>
<div className="flex flex-col items-center w-full">
<a className="w-full md:w-auto text-base md:text-lg px-8 md:px-12 py-4 md:py-5 rounded-full transition-all duration-300 shadow-xl font-montserrat font-medium flex items-center justify-center gap-3 group bg-white text-black hover:bg-rose-600 hover:text-white shadow-black/50" href="#book-call">
                  Secure Your Growth Partner
                  <svg className="lucide lucide-arrow-right w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<p className="mt-4 md:mt-6 text-xs md:text-sm font-montserrat text-gray-500">
                  No long-term contracts. Cancel anytime.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-b border-white/5" id="calculator">
<div className="text-center mb-10 md:mb-16">
<h2 className="text-3xl md:text-5xl font-serif font-medium text-white mb-6 tracking-tight">
            What Could 30 Qualified Sales Meetings Be Worth To Your Business?
          </h2>
<p className="text-base md:text-lg text-gray-400 font-light max-w-2xl mx-auto">
            Estimate the revenue potential of a fully booked sales pipeline
            based on your average client value.
          </p>
</div>
<div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start max-w-6xl mx-auto">

<div className="md:col-span-5 bg-[#0a0a0a] rounded-[2rem] p-6 md:p-8 border border-white/5 shadow-sm">
<div className="space-y-6">
<div>
<label className="block text-sm font-montserrat font-medium text-gray-300 mb-2">
                  Average Client LTV ($)
                </label>
<input className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rose-500 transition-colors shadow-inner font-medium" id="calc-ltv" type="number" value="8000"/>
</div>
<div>
<label className="block text-sm font-montserrat font-medium text-gray-300 mb-2">
                  Close Rate (%)
                </label>
<input className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rose-500 transition-colors shadow-inner font-medium" id="calc-close" type="number" value="20"/>
</div>
<div>
<label className="block text-sm font-montserrat font-medium text-gray-300 mb-2">
                  Number of Qualified Meetings
                </label>
<input className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rose-500 transition-colors shadow-inner font-medium" id="calc-meetings" type="number" value="30"/>
</div>
</div>
</div>

<div className="md:col-span-7 flex flex-col justify-center">
<div className="grid grid-cols-2 gap-4 md:gap-6 mb-8">
<div className="bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-[1.5rem] p-6 border border-white/5 shadow-lg relative overflow-hidden group hover:border-rose-500/30 transition-all duration-300">
<div className="text-sm font-montserrat text-gray-400 mb-2 group-hover:text-gray-300 transition-colors">
                  Qualified Meetings
                </div>
<div className="text-3xl md:text-4xl font-serif text-white group-hover:text-rose-400 transition-colors" id="res-meetings">
                  30
                </div>
</div>
<div className="bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-[1.5rem] p-6 border border-white/5 shadow-lg relative overflow-hidden group hover:border-rose-500/30 transition-all duration-300">
<div className="text-sm font-montserrat text-gray-400 mb-2 group-hover:text-gray-300 transition-colors">
                  Expected Clients
                </div>
<div className="text-3xl md:text-4xl font-serif text-white group-hover:text-rose-400 transition-colors" id="res-clients">
                  6
                </div>
</div>
<div className="bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-[1.5rem] p-6 border border-rose-500/20 shadow-lg shadow-rose-900/10 relative overflow-hidden group hover:border-rose-500/40 transition-all duration-300 col-span-2 sm:col-span-1">
<div className="text-sm font-montserrat text-rose-400/80 mb-2 group-hover:text-rose-400 transition-colors">
                  Estimated Revenue
                </div>
<div className="text-3xl md:text-4xl font-serif text-white group-hover:text-rose-400 transition-colors" id="res-revenue">
                  $48,000
                </div>
</div>
<div className="bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-[1.5rem] p-6 border border-white/5 shadow-lg relative overflow-hidden group hover:border-rose-500/30 transition-all duration-300 col-span-2 sm:col-span-1">
<div className="text-sm font-montserrat text-gray-400 mb-2 group-hover:text-gray-300 transition-colors">
                  Revenue Multiple
                </div>
<div className="text-3xl md:text-4xl font-serif text-white group-hover:text-rose-400 transition-colors" id="res-multiple">
                  12.0x
                </div>
</div>
</div>
<div className="bg-rose-950/20 border border-rose-900/30 rounded-2xl p-5 md:p-6 text-sm md:text-base text-gray-300 font-light leading-relaxed">
<span className="text-rose-500 font-medium font-montserrat block mb-2 text-[10px] md:text-xs uppercase tracking-widest">
                Insight
              </span>
<span id="insight-text">
                With an average client value of $8,000 and a 20% close rate, 30
                qualified meetings could generate approximately $48,000 in new
                business.
              </span>
</div>
<div className="mt-6 text-center md:text-left text-xs text-gray-500 font-light">
              * Results are estimates only and will vary based on offer, market,
              sales process, and close rates.
            </div>
</div>
</div>

</section>


<section className="mx-auto py-16 md:py-24 px-4 md:px-6 max-w-7xl" id="book-call">
<div className="text-center mb-10 md:mb-16">
<h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white mb-6 tracking-tight uppercase">
            Book a Strategy Call Today.
          </h2>
<p className="text-base md:text-lg text-gray-400 font-light max-w-2xl mx-auto">
            Book a no-commitment discovery call to discuss how we can help you
            scale your outbound pipeline.
          </p>
</div>
<div className="w-full bg-[#0a0a0a] rounded-[2rem] border border-white/5 shadow-sm overflow-hidden">

<div className="calendly-inline-widget w-full" data-url="https://calendly.com/kevin-reachbound/30min?month=2026-06&amp;hide_gdpr_banner=1&amp;primary_color=e11d48&amp;background_color=0a0a0a&amp;text_color=ffffff" style={{minWidth: '320px', height: '1000px', width: '100%'}}></div>


</div>
</section>
<section className="max-w-3xl mx-auto py-8 md:py-10 mb-16 md:mb-24 px-2 md:px-6">
<h2 className="text-2xl md:text-3xl text-center mb-10 md:mb-12 tracking-tight font-serif font-medium text-white">
          FAQs — Everything you need to know.
        </h2>
<div className="space-y-4">
<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
              How does your guarantee work?
              <svg className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
              We're confident in our ability to generate results. If we do not
              generate at least 15 qualified meetings within 90 days, we'll give
              you your money back. Our goal is to remove the risk from your
              decision and ensure our incentives are fully aligned with yours.
            </div>
</details>
<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
              Is this really done for you?
              <svg className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
              Yes. We handle the entire outbound process from start to finish.
              We build and manage the email infrastructure, source and verify
              prospect data, identify decision-makers, write campaigns, manage
              deliverability, monitor performance, and book qualified meetings
              directly into your calendar. You never need to purchase domains,
              set up inboxes, build prospect lists, or manage campaigns
              yourself.
            </div>
</details>
<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
              Who is this service best suited for?
              <svg className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
              We typically work best with B2B companies that sell high-value
              products or services, have an average client value of at least
              $8,000, and a total addressable market of 20,000 or more reachable
              prospects. If you're selling to businesses and have enough
              potential buyers to support outbound outreach, we're likely a
              strong fit.
            </div>
</details>
<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
              How many meetings can I realistically expect?
              <svg className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
              Results depend on your market, offer, pricing, competition, and
              sales process. However, our objective is clear, we generate at
              least 15 qualified meetings within 90 days, with many clients
              exceeding that benchmark.
            </div>
</details>
<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
              How quickly can we get started?
              <svg className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
              Most clients are fully launched within two weeks. During that
              time, we build your outbound infrastructure, identify your ideal
              prospects, write your campaigns, configure deliverability, and
              prepare everything needed to begin generating meetings.
            </div>
</details>
<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
              How long does it take to see results?
              <svg className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
              Many clients begin receiving replies within the first few weeks.
              Qualified meetings typically begin appearing shortly after launch
              and continue increasing as campaigns gather data and optimize over
              time. Full optimization usually occurs by month two, with scaling
              becoming more aggressive in month three as inbox deliverability
              reaches peak performance.
            </div>
</details>
<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
              How does pricing work?
              <svg className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
              Our pricing has two components: a monthly technology fee that
              covers your entire outbound infrastructure and dedicated team,
              plus a per-meeting fee for every qualified meeting booked directly
              into your calendar. This structure aligns our incentives with
              yours and ensures you only pay for results.
            </div>
</details>
<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
              Is cold email still effective in 2026?
              <svg className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
              Absolutely. Businesses continue to buy from businesses, and cold
              email remains one of the most effective channels for generating
              qualified sales conversations when done correctly. Success today
              depends on quality targeting, strong messaging, and excellent
              deliverability rather than mass sending.
            </div>
</details>
<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
              What do you need from me?
              <svg className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
              Very little. During onboarding, we'll send you a short
              questionnaire designed to help us understand your business, offer,
              ideal customer profile, positioning, and goals. Once completed,
              our team handles the heavy lifting while keeping you informed
              throughout the engagement.
            </div>
</details>
<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
              How do you differ from hiring an SDR?
              <svg className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
              Hiring and managing an SDR requires recruiting, training,
              software, data subscriptions, management oversight, and ongoing
              compensation. We provide the complete outbound system, including
              infrastructure, prospecting, campaign creation, deliverability
              management, and meeting generation, allowing you to benefit from
              an established process without building an outbound team
              internally.
            </div>
</details>
<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
              What if we're already doing outbound?
              <svg className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
              That's often where we create the most value. Many companies are
              already sending cold emails but struggle with targeting,
              deliverability, messaging, or infrastructure. We can improve each
              of these areas to help generate more qualified conversations from
              the same market.
            </div>
</details>
<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
              What industries do you work with?
              <svg className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
              We primarily work with B2B service providers, agencies,
              consultants, software companies, IT firms, professional services
              businesses, and other organizations selling high-value solutions
              to other businesses.
            </div>
</details>
</div>
<p className="text-center text-sm mt-8 text-gray-500">
          Don't see what you're looking for?
          <a className="underline transition-all text-rose-400 decoration-rose-900 hover:decoration-rose-400" href="mailto:kevin@reachbound.io">
            Get in touch
          </a>
          .
        </p>
</section>

</main>

<footer className="border-t pt-12 md:pt-16 pb-8 md:pb-10 px-4 md:px-6 bg-[#050505] border-white/5">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-10">

<div className="text-center md:text-left">
<a className="font-serif tracking-tight italic font-medium text-white text-3xl" href="#">
            ReachBound
          </a>
<p className="text-xs mt-3 max-w-xs font-light text-gray-500 mx-auto md:mx-0">
            Scaling predictable revenue for ambitious B2B brands through
            intelligent cold email ecosystems.
          </p>
</div>

<div className="flex flex-col gap-3 text-center md:text-right">
<a className="text-sm transition-colors font-medium text-gray-400 hover:text-rose-400" href="#">
            Services
          </a>
<a className="text-sm transition-colors font-medium text-gray-400 hover:text-rose-400" href="#">
            Case Studies
          </a>
<a className="text-sm transition-colors font-medium text-gray-400 hover:text-rose-400" href="#">
            About
          </a>
<a className="text-sm transition-colors font-medium text-gray-400 hover:text-rose-400" href="#book-call">
            Contact
          </a>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 md:mt-16 pt-8 border-t text-center text-[10px] md:text-xs font-montserrat border-white/5 text-gray-600">
<p>© 2024 ReachBound. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
