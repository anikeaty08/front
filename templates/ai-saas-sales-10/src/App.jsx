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
      

<nav className="md:px-12 animate-enter w-full pt-6 pr-6 pb-6 pl-6 relative z-50">
<div className="flex max-w-7xl mr-auto ml-auto relative items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
</div>
<span className="font-normal text-lg tracking-tight">TheMailMachine</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal text-gray-600 hover:text-black transition-colors" href="#how-it-works">
            How It Works
          </a>
<a className="text-sm font-normal text-gray-600 hover:text-black transition-colors" href="#pricing">
            Pricing
          </a>
<a className="text-sm font-normal text-gray-600 hover:text-black transition-colors" href="#faq">
            FAQ
          </a>
</div>
<div className="flex items-center gap-3 z-50 relative">
<a className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full text-sm font-normal hover:bg-gray-800 transition-all hover:pr-6 duration-300 group" href="#contact">
            Deploy Your Machine
            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</nav>

<main className="max-w-7xl mx-auto px-6 md:px-12 py-12 lg:py-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
<div className="flex flex-col gap-8 max-w-xl relative z-10">
<div className="animate-enter delay-100 flex items-center gap-3">
<span className="bg-transparent border border-gray-900/15 text-gray-600 px-4 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-widest">
              Managed Cold Email
            </span>
</div>
<h1 className="animate-enter delay-200 text-5xl md:text-6xl lg:text-[5.5rem] font-medium leading-[1.05] tracking-tight text-gray-900">
            Stop managing
            <br/>
            tools.
            <br/>
            Start closing
            <br/>
<span className="font-serif-accent italic font-normal">deals.</span>
</h1>
<p className="animate-enter delay-300 text-base md:text-lg text-gray-500 leading-relaxed max-w-md font-light">
            We deploy a fully automated cold email machine for your business. AI
            agents find your leads, write personalized emails, handle every
            reply, and book meetings on your calendar. You don't touch a thing.
          </p>
<div className="animate-enter delay-400 flex flex-col gap-4 items-start mt-2">
<button className="bg-black text-white text-base px-8 py-4 rounded-full font-normal hover:bg-gray-800 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-3 shadow-2xl shadow-gray-400/30">
              Let's Talk
              <iconify-icon icon="solar:calendar-add-linear" width="20"></iconify-icon>
</button>
<div className="flex items-center gap-2 text-xs text-gray-500 font-normal pl-2">
<iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon>
              No contracts. No dashboards. Cancel anytime.
            </div>
</div>
</div>

<div className="flex lg:justify-end animate-enter delay-300 relative justify-center">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-gray-200/50 via-white/30 to-transparent rounded-full blur-3xl pointer-events-none"></div>
<div className="relative w-full max-w-md h-auto aspect-square">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/80 backdrop-blur-2xl rounded-full shadow-[0_0_80px_rgba(255,255,255,0.7)] flex items-center justify-center z-10">
<div className="w-40 h-40 bg-[#050505] rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,1)] relative overflow-hidden"></div>
</div>

<div className="absolute -top-2 -right-4 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-xl shadow-gray-200/50 border border-white/80 flex items-center gap-4 animate-float z-20" style={{animationDelay: '0s'}}>
<div className="w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
<iconify-icon icon="solar:calendar-mark-linear" width="18"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-gray-900 tracking-tight">
                  Meeting Booked
                </p>
<p className="text-xs text-gray-500">Alex @ Stripe</p>
</div>
</div>
<div className="absolute bottom-8 -left-12 bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl shadow-gray-200/50 border border-white flex items-center gap-4 animate-float z-30" style={{animationDelay: '-2s'}}>
<div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
<iconify-icon icon="solar:letter-opened-linear" width="18"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-gray-900 tracking-tight">
                  Positive Reply
                </p>
<p className="text-xs text-gray-500">"Let's chat next week"</p>
</div>
</div>
<div className="absolute -top-10 -left-16 bg-white backdrop-blur-xl rounded-2xl p-4 shadow-2xl shadow-gray-300/50 border border-white flex items-center gap-4 animate-float z-40" style={{animationDelay: '-4s'}}>
<div className="w-8 h-8 bg-gray-100 text-gray-900 rounded-lg flex items-center justify-center">
<iconify-icon icon="solar:user-id-linear" width="18"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-gray-900 tracking-tight">
                  Lead Enriched
                </p>
<p className="text-xs text-gray-500">Found 250 verified contacts</p>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="w-full max-w-3xl mx-auto px-6 md:px-12 py-24 md:py-32 relative z-10 text-center animate-enter">
<span className="bg-[#d1c8c0] text-gray-900 px-3 py-1.5 rounded-lg text-xs font-medium uppercase tracking-wider mb-8 inline-block">
        The Problem
      </span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-gray-900 leading-[1.1] mb-10">
        You didn't start your business to
        <span className="font-serif-accent italic font-normal">
          manage email tools.
        </span>
</h2>
<div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed font-light text-left">
<p>
          Right now, you're running cold email with a stack that looks something
          like this: Clay for enrichment. Instantly or Smartlead for sending.
          Apollo for data. An LLM for personalization. A CRM to track it all. A
          spreadsheet because nothing connects properly.
        </p>
<p>
          You're paying $2,000-4,000/month for these tools. You're spending
          10-15 hours a week managing workflows, fixing broken integrations,
          writing prompts, and checking deliverability scores. Your SDR spends
          half their day operating software instead of talking to prospects.
        </p>
<p>
          And after all that — most of your emails still get ignored, your reply
          rates are stagnant, and you're not sure any of it is actually working.
        </p>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24" id="how-it-works">
<div className="flex flex-col items-center text-center mb-20 animate-enter">
<span className="bg-[#d1c8c0] text-gray-900 px-3 py-1.5 rounded-lg text-xs font-medium uppercase tracking-wider mb-6">
          How It Works
        </span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-gray-900 leading-[1.1] max-w-2xl">
          We build the machine. We run it.
          <br/>
<span className="font-serif-accent italic font-normal">
            You get the pipeline.
          </span>
</h2>
</div>
<div className="relative grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 animate-enter delay-100">

<svg className="hidden md:block absolute top-10 left-10 w-[calc(100%-5rem)] h-px bg-gray-900/10 pointer-events-none z-0"></svg>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-lg shadow-gray-900/5 mb-8 group-hover:-translate-y-1 transition-transform duration-500 border border-gray-100">
<span className="text-xl font-medium text-gray-400">1</span>
</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-3">
            You tell us who to email
          </h3>
<p className="text-gray-600 text-sm leading-relaxed max-w-xs font-light">
            Your ICP, your messaging, your value prop. That's all we need from
            you.
          </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-lg shadow-gray-900/5 mb-8 group-hover:-translate-y-1 transition-transform duration-500 border border-gray-100">
<span className="text-xl font-medium text-gray-400">2</span>
</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-3">
            We build the machine
          </h3>
<p className="text-gray-600 text-sm leading-relaxed max-w-xs font-light">
            Custom sending infrastructure. AI engine. Campaigns. Takes 5-7 days.
          </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-20 h-20 bg-black text-white rounded-3xl flex items-center justify-center shadow-lg shadow-gray-900/20 mb-8 group-hover:-translate-y-1 transition-transform duration-500">
<iconify-icon className="animate-[spin_4s_linear_infinite]" icon="solar:settings-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-3">
            The machine runs
          </h3>
<p className="text-gray-600 text-sm leading-relaxed max-w-xs font-light">
            AI finds leads, writes emails, follows up, reads replies, and routes
            prospects.
          </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-lg shadow-gray-900/5 mb-8 group-hover:-translate-y-1 transition-transform duration-500 border border-gray-100">
<span className="text-xl font-medium text-gray-400">4</span>
</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-3">
            You close the deals
          </h3>
<p className="text-gray-600 text-sm leading-relaxed max-w-xs font-light">
            Check your calendar. Show up to calls. That's it.
          </p>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 bg-[#efeae5] rounded-[3rem] my-12">
<div className="flex flex-col items-start mb-16 animate-enter">
<span className="bg-white/50 border border-gray-200 text-gray-900 px-3 py-1.5 rounded-lg text-xs font-medium uppercase tracking-wider mb-6">
          What's Inside
        </span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-gray-900 leading-[1.1]">
          Everything runs inside the machine.
          <br/>
<span className="font-serif-accent italic font-normal">
            You see none of it.
          </span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-enter delay-100">

<div className="bg-white/60 backdrop-blur-sm border border-white p-8 rounded-3xl hover:bg-white transition-colors duration-500">
<div className="w-12 h-12 bg-gray-100 text-gray-900 rounded-2xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-2">
            Lead Sourcing
          </h3>
<p className="text-gray-600 leading-relaxed text-sm font-light">
            We pull leads from multiple sources — Apollo, LinkedIn, scraped
            lists, funding announcements. Already have a list? We plug it in.
          </p>
</div>

<div className="bg-white/60 backdrop-blur-sm border border-white p-8 rounded-3xl hover:bg-white transition-colors duration-500">
<div className="w-12 h-12 bg-gray-100 text-gray-900 rounded-2xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-2">
            AI Personalization
          </h3>
<p className="text-gray-600 leading-relaxed text-sm font-light">
            Our AI agents research every single lead and write a unique email
            that's actually about them. Real personalization at scale.
          </p>
</div>

<div className="bg-white/60 backdrop-blur-sm border border-white p-8 rounded-3xl hover:bg-white transition-colors duration-500">
<div className="w-12 h-12 bg-gray-100 text-gray-900 rounded-2xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:server-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-2">
            Dedicated Infrastructure
          </h3>
<p className="text-gray-600 leading-relaxed text-sm font-light">
            Custom domains, proper warm-up, IP rotation, deliverability
            monitoring. Your emails land in inboxes — not spam folders.
          </p>
</div>

<div className="bg-white/60 backdrop-blur-sm border border-white p-8 rounded-3xl hover:bg-white transition-colors duration-500">
<div className="w-12 h-12 bg-gray-100 text-gray-900 rounded-2xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:chat-round-line-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-2">
            Reply Agents
          </h3>
<p className="text-gray-600 leading-relaxed text-sm font-light">
            Every single reply gets read by our AI. Interested? Routed to your
            inbox. Not interested? Logged. Out of office? Followed up.
          </p>
</div>

<div className="bg-white/60 backdrop-blur-sm border border-white p-8 rounded-3xl hover:bg-white transition-colors duration-500">
<div className="w-12 h-12 bg-gray-100 text-gray-900 rounded-2xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:route-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-2">
            Campaign Sequences
          </h3>
<p className="text-gray-600 leading-relaxed text-sm font-light">
            Multi-step campaigns with smart follow-ups. Email one, bump,
            conditional branching. The right message at the right time.
          </p>
</div>

<div className="bg-white/60 backdrop-blur-sm border border-white p-8 rounded-3xl hover:bg-white transition-colors duration-500">
<div className="w-12 h-12 bg-gray-100 text-gray-900 rounded-2xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:calendar-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-2">
            Meeting Booking
          </h3>
<p className="text-gray-600 leading-relaxed text-sm font-light">
            Hot leads get scheduled directly on your calendar. Qualified
            prospects. Real conversations. No tire-kickers. You just show up.
          </p>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24" id="pricing">
<div className="flex flex-col items-center text-center mb-16 animate-enter">
<span className="bg-[#d1c8c0] text-gray-900 px-3 py-1.5 rounded-lg text-xs font-medium uppercase tracking-wider mb-6">
          The Math
        </span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-gray-900 leading-[1.1]">
          Here's what you're paying right now
          <br/>
<span className="font-serif-accent italic font-normal">
            vs. what you'd pay us.
          </span>
</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 animate-enter delay-100">

<div className="bg-white/30 rounded-3xl p-8 md:p-12 border border-white/50">
<h3 className="text-xl font-medium text-gray-500 mb-8 flex items-center gap-3">
            Your Current Setup
          </h3>
<div className="space-y-4 mb-8">
<div className="flex justify-between items-center text-sm font-light text-gray-600 border-b border-gray-200/50 pb-4">
<span>Clay</span>
<span className="font-medium">$800-2,000/mo</span>
</div>
<div className="flex justify-between items-center text-sm font-light text-gray-600 border-b border-gray-200/50 pb-4">
<span>Instantly/Smartlead</span>
<span className="font-medium">$300-600/mo</span>
</div>
<div className="flex justify-between items-center text-sm font-light text-gray-600 border-b border-gray-200/50 pb-4">
<span>Apollo/Data sources</span>
<span className="font-medium">$100-500/mo</span>
</div>
<div className="flex justify-between items-center text-sm font-light text-gray-600 border-b border-gray-200/50 pb-4">
<span>LLM API credits</span>
<span className="font-medium">$50-200/mo</span>
</div>
<div className="flex justify-between items-center text-sm font-light text-gray-600 border-b border-gray-200/50 pb-4">
<span>Sending domains + warm-up</span>
<span className="font-medium">$100-300/mo</span>
</div>
<div className="flex justify-between items-center text-sm font-light text-gray-600 border-b border-gray-200/50 pb-4 text-red-900/60">
<span>Operator/SDR time</span>
<span className="font-medium">10-15 hrs/week</span>
</div>
</div>
<div className="space-y-4 pt-4 border-t border-gray-300">
<div className="flex justify-between items-center text-base">
<span className="text-gray-500">Monthly total</span>
<span className="font-medium text-gray-900 tracking-tight">
                $1,350-3,600 + time
              </span>
</div>
<ul className="space-y-3 mt-6 text-sm font-light text-gray-500">
<li className="flex items-center gap-2">
<iconify-icon icon="solar:close-circle-linear" width="18"></iconify-icon>
                Management: You do it all
              </li>
<li className="flex items-center gap-2">
<iconify-icon icon="solar:close-circle-linear" width="18"></iconify-icon>
                Deliverability: You monitor it
              </li>
<li className="flex items-center gap-2">
<iconify-icon icon="solar:close-circle-linear" width="18"></iconify-icon>
                Reply handling: You or nobody
              </li>
</ul>
</div>
</div>

<div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-gray-900/5 relative overflow-hidden ring-1 ring-gray-900/5">
<div className="absolute top-0 left-0 w-full h-1 bg-black"></div>
<h3 className="text-xl font-medium text-gray-900 mb-8 flex items-center gap-3">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
            TheMailMachine
          </h3>
<div className="space-y-4 mb-8">
<div className="flex justify-between items-center text-sm font-light text-gray-600 border-b border-gray-100 pb-4">
<span>Tools &amp; Infrastructure</span>
<span className="font-medium text-gray-400 line-through">$0</span>
</div>
<div className="flex justify-between items-center text-sm font-light text-gray-600 border-b border-gray-100 pb-4">
<span>Data Sourcing</span>
<span className="font-medium text-gray-400 line-through">$0</span>
</div>
<div className="flex justify-between items-center text-sm font-light text-gray-600 border-b border-gray-100 pb-4">
<span>AI Personalization Engine</span>
<span className="font-medium text-gray-400 line-through">$0</span>
</div>
<div className="flex justify-between items-center text-sm font-light text-gray-600 border-b border-gray-100 pb-4 text-green-600">
<span>Your time spent managing</span>
<span className="font-medium">0 hrs/week</span>
</div>
</div>
<div className="space-y-4 pt-4 border-t border-gray-100 mt-auto">
<div className="flex justify-between items-center text-lg">
<span className="text-gray-900">Monthly flat rate</span>
<span className="font-medium text-gray-900 tracking-tight">
                $2,500/mo
              </span>
</div>
<ul className="space-y-3 mt-6 text-sm font-normal text-gray-900">
<li className="flex items-center gap-3">
<iconify-icon className="text-black" icon="solar:check-circle-linear" width="18"></iconify-icon>
                We handle everything
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-black" icon="solar:check-circle-linear" width="18"></iconify-icon>
                We guarantee deliverability
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-black" icon="solar:check-circle-linear" width="18"></iconify-icon>
                AI handles every reply
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-black" icon="solar:check-circle-linear" width="18"></iconify-icon>
                Tell us and we deploy campaigns
              </li>
</ul>
</div>
</div>
</div>
<p className="text-center mt-12 text-sm text-gray-500 font-medium">
        Bottom line: You're paying more to do it yourself. We'll do it for less.
      </p>
</section>

<section className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-32">
<div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch animate-enter">

<div className="lg:col-span-3 bg-white/40 rounded-3xl p-10 md:p-16 flex flex-col justify-center relative border border-white">
<div className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center mb-10 opacity-10">
<iconify-icon icon="solar:quote-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-light tracking-tight text-gray-900 leading-relaxed mb-8">
            "We were spending $3,200/month on Clay, Instantly, and Apollo — and
            I was personally spending 15 hours a week managing the whole thing.
            TheMailMachine replaced all of it for $2,500/month. I spend zero
            hours on it now. We're booking more meetings than before.
            <span className="font-medium">
              The math was so obvious I felt stupid for not doing it sooner.
            </span>
            "
          </h3>
<div className="mt-auto pt-8 border-t border-gray-900/10 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs font-medium">
              CM
            </div>
<div>
<p className="text-sm font-medium text-gray-900 tracking-tight">
                Client Name
              </p>
<p className="text-xs text-gray-500 font-light">Title at Company</p>
</div>
</div>
</div>

<div className="lg:col-span-2 bg-black rounded-3xl p-10 md:p-16 flex flex-col justify-center">
<span className="text-white/50 text-xs font-medium uppercase tracking-wider mb-8">
            Results
          </span>
<div className="space-y-8">
<div>
<div className="text-4xl font-medium tracking-tight text-white mb-1">
                3.2x
              </div>
<div className="text-sm font-light text-white/70">
                more meetings booked/mo
              </div>
</div>
<div className="w-full h-px bg-white/10"></div>
<div>
<div className="text-4xl font-medium tracking-tight text-white mb-1">
                $700
              </div>
<div className="text-sm font-light text-white/70">
                saved on tools monthly
              </div>
</div>
<div className="w-full h-px bg-white/10"></div>
<div>
<div className="text-4xl font-medium tracking-tight text-white mb-1">
                15 hrs
              </div>
<div className="text-sm font-light text-white/70">
                freed up per week
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-32">
<div className="flex flex-col items-center text-center mb-16 animate-enter">
<span className="bg-[#d1c8c0] text-gray-900 px-3 py-1.5 rounded-lg text-xs font-medium uppercase tracking-wider mb-6">
          Why Us
        </span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-gray-900 leading-[1.1]">
          Three ways to do cold email.
          <br/>
<span className="font-serif-accent italic font-normal">
            Only one makes sense.
          </span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-enter delay-100">

<div className="bg-white/30 rounded-3xl p-8 border border-white/50">
<h3 className="text-base font-medium tracking-tight text-gray-900 mb-6 pb-4 border-b border-gray-200/50">
            Traditional Agencies
          </h3>
<p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
            They write three templates. They blast your list. They report open
            rates like they mean something. You still manage the infrastructure
            yourself.
          </p>
<p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
            No AI. No personalization at scale. No reply handling.
          </p>
<p className="text-sm font-medium text-red-900/70 mt-6">
            Low reply rates, high cost, low ROI.
          </p>
</div>

<div className="bg-white/30 rounded-3xl p-8 border border-white/50">
<h3 className="text-base font-medium tracking-tight text-gray-900 mb-6 pb-4 border-b border-gray-200/50">
            DIY (Clay + Instantly)
          </h3>
<p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
            You manage the workflows yourself. You write the prompts. You
            monitor deliverability. You handle replies manually.
          </p>
<p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
            You pay for five or more tools separately.
          </p>
<p className="text-sm font-medium text-red-900/70 mt-6">
            Expensive, time-consuming, requires expertise.
          </p>
</div>

<div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-900/5 border border-gray-100 ring-1 ring-gray-900/5 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-black"></div>
<h3 className="text-base font-medium tracking-tight text-gray-900 mb-6 pb-4 border-b border-gray-100 flex items-center justify-between">
            TheMailMachine
            <iconify-icon className="text-black" icon="solar:verified-check-linear" width="18"></iconify-icon>
</h3>
<p className="text-sm text-gray-900 font-light leading-relaxed mb-4">
            We build everything custom for your business. AI writes genuinely
            personalized emails. We handle every single reply. We maintain the
            infrastructure.
          </p>
<p className="text-sm text-gray-900 font-light leading-relaxed mb-4">
            One flat monthly fee.
          </p>
<p className="text-sm font-medium text-black mt-6">
            More pipeline, less work, less money.
          </p>
</div>
</div>
</section>

<section className="w-full max-w-3xl mx-auto px-6 md:px-12 py-24 relative" id="faq">
<div className="mb-16 animate-enter text-center">
<span className="bg-[#d1c8c0] text-gray-900 px-3 py-1.5 rounded-lg text-xs font-medium uppercase tracking-wider mb-6 inline-block">
          FAQ
        </span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-gray-900 leading-[1.1] mt-2">
          Questions you're
          <span className="font-serif-accent italic font-normal">
            probably asking.
          </span>
</h2>
</div>
<div className="flex flex-col gap-3 animate-enter delay-100">

<details className="group bg-white/50 rounded-2xl overflow-hidden transition-all duration-300 open:bg-white border border-transparent open:border-gray-100">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none text-sm font-medium text-gray-900">
            Is this just a Clay replacement?
            <div className="w-6 h-6 flex items-center justify-center group-open:rotate-45 transition-transform duration-300 text-gray-400">
<iconify-icon icon="solar:add-linear" width="18"></iconify-icon>
</div>
</summary>
<div className="px-6 pb-6 text-sm text-gray-600 font-light leading-relaxed">
            Not exactly. Clay is a tool you manage yourself. We're a team that
            builds and runs your entire email infrastructure so you don't have
            to manage anything. If you like Clay and want to keep using it,
            that's fine. We plug into whatever you've got.
          </div>
</details>

<details className="group bg-white/50 rounded-2xl overflow-hidden transition-all duration-300 open:bg-white border border-transparent open:border-gray-100">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none text-sm font-medium text-gray-900">
            What if I already have sending infrastructure or a CRM?
            <div className="w-6 h-6 flex items-center justify-center group-open:rotate-45 transition-transform duration-300 text-gray-400">
<iconify-icon icon="solar:add-linear" width="18"></iconify-icon>
</div>
</summary>
<div className="px-6 pb-6 text-sm text-gray-600 font-light leading-relaxed">
            Great, we'll plug into it. You don't have to start from scratch. We
            deploy around whatever you already have running.
          </div>
</details>

<details className="group bg-white/50 rounded-2xl overflow-hidden transition-all duration-300 open:bg-white border border-transparent open:border-gray-100">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none text-sm font-medium text-gray-900">
            How long does setup take?
            <div className="w-6 h-6 flex items-center justify-center group-open:rotate-45 transition-transform duration-300 text-gray-400">
<iconify-icon icon="solar:add-linear" width="18"></iconify-icon>
</div>
</summary>
<div className="px-6 pb-6 text-sm text-gray-600 font-light leading-relaxed">
            Five to seven business days from kickoff to live campaigns.
            Sometimes faster depending on complexity.
          </div>
</details>

<details className="group bg-white/50 rounded-2xl overflow-hidden transition-all duration-300 open:bg-white border border-transparent open:border-gray-100">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none text-sm font-medium text-gray-900">
            What kind of results can I expect?
            <div className="w-6 h-6 flex items-center justify-center group-open:rotate-45 transition-transform duration-300 text-gray-400">
<iconify-icon icon="solar:add-linear" width="18"></iconify-icon>
</div>
</summary>
<div className="px-6 pb-6 text-sm text-gray-600 font-light leading-relaxed">
            It depends on your ICP, messaging, and offer quality. We'll give you
            honest projections during our kickoff call based on what we've seen
            work for similar businesses. We don't make promises we can't keep.
          </div>
</details>

<details className="group bg-white/50 rounded-2xl overflow-hidden transition-all duration-300 open:bg-white border border-transparent open:border-gray-100">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none text-sm font-medium text-gray-900">
            Do I need to provide my own leads?
            <div className="w-6 h-6 flex items-center justify-center group-open:rotate-45 transition-transform duration-300 text-gray-400">
<iconify-icon icon="solar:add-linear" width="18"></iconify-icon>
</div>
</summary>
<div className="px-6 pb-6 text-sm text-gray-600 font-light leading-relaxed">
            No. If you have a list, great — we'll enrich it. If not, we'll
            source leads for you through our data partners.
          </div>
</details>

<details className="group bg-white/50 rounded-2xl overflow-hidden transition-all duration-300 open:bg-white border border-transparent open:border-gray-100">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none text-sm font-medium text-gray-900">
            Can I change campaigns or messaging after launch?
            <div className="w-6 h-6 flex items-center justify-center group-open:rotate-45 transition-transform duration-300 text-gray-400">
<iconify-icon icon="solar:add-linear" width="18"></iconify-icon>
</div>
</summary>
<div className="px-6 pb-6 text-sm text-gray-600 font-light leading-relaxed">
            Absolutely. That's what the Slack channel is for. Tell us to target
            different people or change the angle and we spin it up. That's what
            the retainer covers.
          </div>
</details>

<details className="group bg-white/50 rounded-2xl overflow-hidden transition-all duration-300 open:bg-white border border-transparent open:border-gray-100">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none text-sm font-medium text-gray-900">
            What if I want to cancel?
            <div className="w-6 h-6 flex items-center justify-center group-open:rotate-45 transition-transform duration-300 text-gray-400">
<iconify-icon icon="solar:add-linear" width="18"></iconify-icon>
</div>
</summary>
<div className="px-6 pb-6 text-sm text-gray-600 font-light leading-relaxed">
            No contracts. Cancel anytime. We'll hand back all your data,
            domains, and infrastructure. No lock-in.
          </div>
</details>

<details className="group bg-white/50 rounded-2xl overflow-hidden transition-all duration-300 open:bg-white border border-transparent open:border-gray-100">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none text-sm font-medium text-gray-900">
            How is this different from hiring an SDR?
            <div className="w-6 h-6 flex items-center justify-center group-open:rotate-45 transition-transform duration-300 text-gray-400">
<iconify-icon icon="solar:add-linear" width="18"></iconify-icon>
</div>
</summary>
<div className="px-6 pb-6 text-sm text-gray-600 font-light leading-relaxed">
            One SDR costs $5,000-8,000/month and sends 50-100 emails a day. Our
            machine sends thousands of AI-personalized emails, handles every
            reply, and never takes a day off. For less money.
          </div>
</details>
</div>
</section>

<footer className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-12 pt-12">
<div className="bg-black text-white rounded-[3rem] p-12 md:p-20 flex flex-col items-center text-center relative overflow-hidden mb-24 animate-enter">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.1)_0%,_transparent_50%)] pointer-events-none"></div>
<div className="relative z-10 max-w-2xl">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] mb-8">
            Your machine is ready.
            <br/>
<span className="font-serif-accent italic font-normal text-gray-300">
              Turn it on.
            </span>
</h2>
<p className="text-gray-400 mb-10 font-light leading-relaxed">
            Stop spending 15 hours a week managing email tools. Stop paying for
            five different SaaS subscriptions. Stop reading blog posts about
            cold email deliverability. We already built the machine. Let us run
            it for you.
          </p>
<button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-3 mx-auto">
            Deploy Your Machine
            <iconify-icon icon="solar:rocket-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="border-t border-gray-900/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 animate-enter delay-200">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-black rounded flex items-center justify-center text-white">
<iconify-icon icon="solar:letter-linear" width="14"></iconify-icon>
</div>
<span className="font-normal text-base tracking-tight">
            TheMailMachine
          </span>
</div>
<div className="flex flex-wrap items-center justify-center gap-8">
<a className="text-xs font-medium text-gray-500 hover:text-black transition-colors uppercase tracking-wider" href="#how-it-works">
            How It Works
          </a>
<a className="text-xs font-medium text-gray-500 hover:text-black transition-colors uppercase tracking-wider" href="#pricing">
            Pricing
          </a>
<a className="text-xs font-medium text-gray-500 hover:text-black transition-colors uppercase tracking-wider" href="#faq">
            FAQ
          </a>
</div>
<div className="text-xs text-gray-400 font-light">
<a className="hover:text-black transition-colors" href="mailto:hello@themailmachine.com">
            hello@themailmachine.com
          </a>
</div>
</div>
<div className="mt-8 text-center text-[10px] text-gray-400 font-light flex flex-col sm:flex-row justify-center items-center gap-2">
<span>© 2025 TheMailMachine.</span>
<span className="hidden sm:inline">•</span>
<span>Built to run.</span>
</div>
</footer>

    </>
  );
}
