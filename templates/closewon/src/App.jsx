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
      

<nav className="z-50 md:px-12 flex w-full pt-6 pr-6 pl-6 absolute top-0 items-center justify-between">
<div className="text-xl font-medium text-neutral-900 tracking-tighter">CloseWon</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#how-it-works">How it works</a>
<a className="hover:text-neutral-900 transition-colors" href="#what-we-cover">What we cover</a>
<a className="hover:text-neutral-900 transition-colors" href="#about">About</a>
</div>
<a className="hidden md:inline-flex items-center justify-center hover:bg-[#e8e4db] transition-colors text-sm font-medium text-neutral-900 bg-[#f3f0ea] border-neutral-200/50 border rounded-full pt-2 pr-5 pb-2 pl-5" href="https://calendar.app.google/87wikUknsCBP2dc27">
            Book a Session
        </a>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden flex flex-col text-center pt-32 pr-6 pb-20 pl-6 relative items-center">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#f3f0ea]/80 via-[#F9F8F6] to-[#F9F8F6]"></div>
<div className="flex flex-col max-w-4xl mr-auto ml-auto items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-sm mb-8">
<span className="w-2 h-2 rounded-full bg-[#4a5d4e] animate-pulse"></span>
<span className="uppercase text-xs font-medium text-neutral-600 tracking-wider">SALES ROLEPLAY sessions</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-900 leading-[1.1] mb-6">
                Close More Deals With <br className="hidden md:block"/> Better Conversations
            </h1>
<p className="md:text-xl leading-relaxed text-lg font-medium text-neutral-600 max-w-2xl mb-4">Practical sales roleplay and strategy sessions for founders and growing businesses.</p>
<p className="md:text-base leading-relaxed text-sm text-neutral-500 max-w-xl mb-10">Get honest feedback, practical ideas, and actionable sales strategy.</p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="sm:w-auto inline-flex items-center justify-center gap-2 hover:bg-[#3a493d] transition-all hover:shadow-lg hover:shadow-[#4a5d4e]/20 group text-base font-medium text-white bg-[#4a5d4e] w-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8" href="https://calendar.app.google/87wikUknsCBP2dc27">
    Book a Session
    <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white text-neutral-700 border border-neutral-200 text-base font-medium px-8 py-3.5 hover:bg-neutral-50 transition-colors" href="#problem">
                    Learn More
                </a>
</div>
</div>

<div className="mt-20 md:mt-28 w-full max-w-5xl mx-auto relative">
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6" id="problem">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">Why Deals Stall</h2>
<p className="text-base text-neutral-500 font-medium">Many businesses struggle with the same conversational hurdles.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-3xl bg-white border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-2xl bg-[#f3f0ea] flex items-center justify-center mb-6 text-[#4a5d4e]">
<iconify-icon className="text-2xl" icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-2">Unclear messaging</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Struggling to articulate what you do in a way that resonates instantly.</p>
</div>

<div className="group p-8 rounded-3xl bg-white border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-2xl bg-[#f3f0ea] flex items-center justify-center mb-6 text-[#4a5d4e]">
<iconify-icon className="text-2xl" icon="solar:routing-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-2">Weak follow-up</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Losing momentum after the first call because the next steps aren't solid.</p>
</div>

<div className="group p-8 rounded-3xl bg-white border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-2xl bg-[#f3f0ea] flex items-center justify-center mb-6 text-[#4a5d4e]">
<iconify-icon className="text-2xl" icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-2">Pricing hesitation</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Feeling awkward or defensive when it's time to talk about the investment.</p>
</div>

<div className="group p-8 rounded-3xl bg-white border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-2xl bg-[#f3f0ea] flex items-center justify-center mb-6 text-[#4a5d4e]">
<iconify-icon className="text-2xl" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-2">Discovery calls that go nowhere</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Having nice chats that don't uncover the real pain points or lead to a sale.</p>
</div>

<div className="group p-8 rounded-3xl bg-white border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-2xl bg-[#f3f0ea] flex items-center justify-center mb-6 text-[#4a5d4e]">
<iconify-icon className="text-2xl" icon="solar:shield-warning-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-2">Low confidence</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Feeling like an imposter when shifting from expert mode to sales mode.</p>
</div>

<div className="group p-8 rounded-3xl bg-white border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-2xl bg-[#f3f0ea] flex items-center justify-center mb-6 text-[#4a5d4e]">
<iconify-icon className="text-2xl" icon="solar:lightbulb-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-2">Difficulty explaining value</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Getting bogged down in features instead of communicating the real transformation.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-neutral-100" id="how-it-works">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-16 md:text-center">How The Session Works</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">

<div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-neutral-100 z-0"></div>

<div className="relative z-10 flex flex-col items-start md:items-center md:text-center group">
<div className="w-16 h-16 rounded-full bg-[#F9F8F6] border border-neutral-200 flex items-center justify-center text-xl font-semibold text-neutral-400 mb-6 group-hover:bg-[#4a5d4e] group-hover:text-white group-hover:border-[#4a5d4e] transition-colors duration-300">
                        1
                    </div>
<h3 className="text-xl font-semibold tracking-tight text-neutral-900 mb-3">Share Your Business</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Tell me about your offer, your ideal customers, and what your current sales process looks like.</p>
</div>

<div className="relative z-10 flex flex-col items-start md:items-center md:text-center group">
<div className="w-16 h-16 rounded-full bg-[#F9F8F6] border border-neutral-200 flex items-center justify-center text-xl font-semibold text-neutral-400 mb-6 group-hover:bg-[#4a5d4e] group-hover:text-white group-hover:border-[#4a5d4e] transition-colors duration-300">
                        2
                    </div>
<h3 className="text-xl font-semibold tracking-tight text-neutral-900 mb-3">Roleplay Real Conversations</h3>
<p className="text-sm text-neutral-500 leading-relaxed">We walk through common customer scenarios and identify exactly what's not landing in real-time.</p>
</div>

<div className="relative z-10 flex flex-col items-start md:items-center md:text-center group">
<div className="w-16 h-16 rounded-full bg-[#F9F8F6] border border-neutral-200 flex items-center justify-center text-xl font-semibold text-neutral-400 mb-6 group-hover:bg-[#4a5d4e] group-hover:text-white group-hover:border-[#4a5d4e] transition-colors duration-300">
                        3
                    </div>
<h3 className="text-xl font-semibold tracking-tight text-neutral-900 mb-3">Build a Practical Plan</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Leave with a clear, actionable action plan and improvements you can apply to your next call.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="what-we-cover">
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

<div className="">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-8">What We Can Improve</h2>
<div className="flex flex-wrap gap-3">
<span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-neutral-200 text-sm font-medium text-neutral-700 shadow-sm hover:border-neutral-300 transition-colors">
                        Sales conversations
                    </span>
<span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-neutral-200 text-sm font-medium text-neutral-700 shadow-sm hover:border-neutral-300 transition-colors">
                        Objection handling
                    </span>
<span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-neutral-200 text-sm font-medium text-neutral-700 shadow-sm hover:border-neutral-300 transition-colors">
                        Discovery calls
                    </span>
<span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-neutral-200 text-sm font-medium text-neutral-700 shadow-sm hover:border-neutral-300 transition-colors">
                        Follow-up strategy
                    </span>
<span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-neutral-200 text-sm font-medium text-neutral-700 shadow-sm hover:border-neutral-300 transition-colors">
                        LinkedIn outreach
                    </span>
<span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-neutral-200 text-sm font-medium text-neutral-700 shadow-sm hover:border-neutral-300 transition-colors">
                        Positioning &amp; messaging
                    </span>
<span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-neutral-200 text-sm font-medium text-neutral-700 shadow-sm hover:border-neutral-300 transition-colors">
                        Partnership opportunities
                    </span>
<span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-neutral-200 text-sm font-medium text-neutral-700 shadow-sm hover:border-neutral-300 transition-colors">
                        Lead generation ideas
                    </span>
<span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#4a5d4e]/10 border border-[#4a5d4e]/20 text-sm font-medium text-[#4a5d4e] shadow-sm">
                        Founder confidence &amp; delivery
                    </span>
</div>
</div>

<div className="">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-8">Built For Growing Businesses</h2>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
<li className="flex items-center gap-3 text-base text-neutral-600 font-medium pb-4 border-b border-neutral-200/60">
<iconify-icon className="text-xl text-[#4a5d4e]" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Startups
                    </li>
<li className="flex items-center gap-3 text-base text-neutral-600 font-medium pb-4 border-b border-neutral-200/60">
<iconify-icon className="text-xl text-[#4a5d4e]" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Consultants
                    </li>
<li className="flex items-center gap-3 text-base text-neutral-600 font-medium pb-4 border-b border-neutral-200/60">
<iconify-icon className="text-xl text-[#4a5d4e]" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Agencies
                    </li>
<li className="flex items-center gap-3 text-base text-neutral-600 font-medium pb-4 border-b border-neutral-200/60">
<iconify-icon className="text-xl text-[#4a5d4e]" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Recruiters
                    </li>
<li className="flex items-center gap-3 text-base text-neutral-600 font-medium pb-4 border-b border-neutral-200/60">
<iconify-icon className="text-xl text-[#4a5d4e]" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        SaaS founders
                    </li>
<li className="flex items-center gap-3 text-base text-neutral-600 font-medium pb-4 border-b border-neutral-200/60">
<iconify-icon className="text-xl text-[#4a5d4e]" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Service businesses
                    </li>
<li className="flex items-center gap-3 text-base text-neutral-600 font-medium pb-4 border-b border-neutral-200/60 sm:col-span-2">
<iconify-icon className="text-xl text-[#4a5d4e]" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Small business owners doing their own sales
                    </li>
</ul>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-neutral-100" id="about">
<div className="flex flex-col md:flex-row gap-16 max-w-5xl mr-auto ml-auto gap-x-16 gap-y-16 items-center">
<div className="w-full md:w-5/12">
<div className="aspect-[4/5] rounded-3xl bg-[#f3f0ea] relative overflow-hidden flex items-center justify-center p-8 text-center">
<div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/651c00a7-40c1-4697-b3b2-32fe35b3af00_800w.jpg)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
<div>
<div className="w-20 h-20 mx-auto rounded-full bg-white shadow-sm flex items-center justify-center mb-6">
<iconify-icon className="text-3xl text-neutral-400" icon="solar:cup-hot-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-sm text-neutral-500 font-medium italic">Coffee chat vibe, <br/> strategic outcomes.</p>
</div>
</div>
</div>
<div className="w-full md:w-7/12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-6">A Practical Outside Perspective</h2>
<div className="space-y-6 text-base text-neutral-600 leading-relaxed">
<p className="">With experience across sales, partnerships, outreach, recruitment, and startup growth across UK and APAC markets, Sara brings a practical and human approach to business conversations.</p>
<p className="font-medium text-neutral-900 text-lg border-l-2 border-[#4a5d4e] pl-4 py-1">
                        This isn't corporate sales training.
                    </p>
<p className="">It's strategy, honest feedback, and actionable ideas designed to help businesses communicate more clearly and convert more naturally.</p>
</div>
</div>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6" id="booking">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">Introductory Sessions</h2>
<p className="text-base text-neutral-500 font-medium">Currently offering pilot sessions while refining the service.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="md:p-10 flex flex-col overflow-hidden group hover:border-[#4a5d4e]/30 transition-colors bg-white h-full border-neutral-200 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-sm">
<div className="mb-8">
<div className="w-12 h-12 rounded-xl bg-[#f3f0ea] flex items-center justify-center mb-6 text-[#4a5d4e]">
<iconify-icon className="text-2xl" height="24" icon="solar:chat-round-video-outline" style={{strokeWidth: '1.5', color: 'rgb(74, 93, 78)'}} width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-2">Coffee Chat Session</h3>
<p className="text-sm text-neutral-500">Free Intro Session</p>
</div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="text-lg text-neutral-400 mt-0.5" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="">60 minutes duration</span>
</li>
<li className="flex gap-3 text-sm text-neutral-600 gap-x-3 gap-y-3 items-start">
<iconify-icon className="text-lg text-neutral-400 mt-0.5" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="">In-person or online</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="text-lg text-neutral-400 mt-0.5" icon="solar:chat-round-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="">Deep dive into your current process</span>
</li>
</ul>
<button className="hover:bg-neutral-50 transition-colors text-base font-medium text-neutral-900 bg-white w-full border-neutral-200 border rounded-full mt-auto pt-3.5 pr-6 pb-3.5 pl-6 cursor-pointer" onclick="window.location.href='https://calendar.app.google/87wikUknsCBP2dc27'" role="button">
                        Book Intro Session
                    </button>
</div>

<div className="p-8 md:p-10 rounded-3xl bg-white border-2 border-[#4a5d4e] shadow-md flex flex-col h-full relative overflow-hidden">
<div className="absolute top-0 right-0 bg-[#4a5d4e] text-white text-xs font-medium px-4 py-1 rounded-bl-xl">Popular</div>
<div className="mb-8">
<div className="w-12 h-12 rounded-xl bg-[#4a5d4e]/10 flex items-center justify-center mb-6 text-[#4a5d4e]">
<iconify-icon className="text-2xl" icon="solar:laptop-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-neutral-900 tracking-tight mb-2">Roleplay Session</h3>
<p className="text-sm text-neutral-500">Remote roleplay &amp; strategy.</p>
</div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="text-lg text-[#4a5d4e] mt-0.5" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="">60 minutes duration</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="text-lg text-[#4a5d4e] mt-0.5" icon="solar:global-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="">Available NZ-wide (Online)</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="text-lg text-[#4a5d4e] mt-0.5" icon="solar:video-frame-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="">Recorded for your review</span>
</li>
</ul>
<button className="hover:bg-[#3a493d] transition-colors cursor-pointer text-base font-medium text-white bg-[#4a5d4e] w-full rounded-full mt-auto pt-3.5 pr-6 pb-3.5 pl-6 shadow-sm" onclick="window.location.href='https://calendar.app.google/87wikUknsCBP2dc27'" role="button">Book Now</button>
</div>
</div>
</div>
</section>

<section className="bg-[#f3f0ea]/50 border-neutral-100 border-t pt-24 pr-6 pb-24 pl-6">
<div className="max-w-5xl mx-auto text-center">
<h2 className="md:text-3xl text-2xl font-semibold text-neutral-900 tracking-tight mb-12">Client Feedback</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex flex-col min-h-[200px] border-dashed bg-white border-neutral-200/50 border rounded-3xl pt-8 pr-8 pb-8 pl-8 items-center justify-center">
<iconify-icon className="text-3xl text-neutral-300 mb-4" icon="solar:star-fall-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-sm font-medium text-slate-950">Super Insightful! Sara gave me a fresh new prospective on how to sell my services! Angela, Ray White</p>
</div>
<div className="hidden md:flex p-8 rounded-3xl bg-white border border-neutral-200/50 flex-col items-center justify-center min-h-[200px] border-dashed">
<iconify-icon className="text-3xl text-neutral-300 mb-4" height="30" icon="solar:chat-round-like-outline" style={{strokeWidth: '1.5', color: 'rgb(212, 212, 212)'}} width="30"></iconify-icon>
<p className="text-sm font-medium text-gray-950">So many quotes sitting in our CRM that just needed a phone call and the right questions.

Sara challenged our team to rethink how we approach sales conversations, follow-up, and objections, and it immediately shifted momentum.

Practical, honest, and highly actionable.

Andrew, AB Builders</p>
</div>
</div>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6">
<div className="max-w-5xl mx-auto bg-[#4a5d4e] rounded-[2.5rem] p-10 md:p-20 text-center relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                    Better Conversations Create <br className="hidden md:block"/> Better Business
                </h2>
<p className="text-base text-white/80 font-medium mb-10 max-w-lg mx-auto">
                    Available in-person in Christchurch or online across New Zealand.
                </p>
<a className="inline-flex items-center justify-center hover:bg-[#f3f0ea] transition-colors shadow-black/10 text-base font-medium text-[#4a5d4e] bg-white rounded-full pt-4 pr-10 pb-4 pl-10 shadow-lg" href="https://calendar.app.google/87wikUknsCBP2dc27">
                    Book Your Session
                </a>
</div>
</div>
</section>

<footer className="bg-white border-neutral-200 border-t pt-12 pr-6 pb-12 pl-6">
<div className="flex flex-col md:flex-row gap-6 max-w-6xl mr-auto ml-auto gap-x-6 gap-y-6 items-center justify-between">
<div className="text-xl font-medium text-neutral-900 tracking-tighter">CloseWon</div>
<div className="flex items-center gap-6">
<a className="hover:text-neutral-900 transition-colors flex items-center gap-2 text-sm font-medium text-neutral-500" href="https://www.linkedin.com/in/sarairoldi/">
<iconify-icon className="text-lg" icon="solar:linkedin-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    LinkedIn
                </a>
<a className="hover:text-neutral-900 transition-colors flex items-center gap-2 text-sm font-medium text-neutral-500" href="/sara.lytstudio@gmail.com">
<iconify-icon className="text-lg" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Email
                </a>
</div>
</div>
<div className="md:text-left text-xs text-neutral-400 text-center max-w-6xl mt-8 mr-auto ml-auto">© 2026 CloseWon by LYT Studio NZ. Sales Roleplay &amp; Strategy Sessions. All rights reserved.</div>
</footer>

<div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur-md border-t border-neutral-100 z-50">
<a className="flex w-full items-center justify-center rounded-full bg-[#4a5d4e] text-white text-base font-medium px-6 py-3.5 shadow-sm" href="#booking">
            Book a Session
        </a>
</div>

    </>
  );
}
