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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-6 left-1/2 -translate-x-1/2 w-full max-w-4xl z-50 px-4">
<div className="flex bg-[#000000] border-white/10 border rounded-full p-2 pr-3 shadow-xl backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-2 pl-4">
<span className="text-sm font-medium tracking-tight text-white flex items-center gap-2 pl-2">
<iconify-icon className="text-lg text-[#FF7F50]" icon="solar:server-square-linear"></iconify-icon>
            TheMailMachine
          </span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="hover:text-white transition-colors text-sm text-neutral-400 font-sans" href="#how-it-works">
            How It Works
          </a>
<a className="hover:text-white transition-colors text-sm text-neutral-400 font-sans" href="#pricing">
            Pricing
          </a>
<a className="hover:text-white transition-colors text-sm text-neutral-400 font-sans" href="#faq">
            FAQ
          </a>
</div>
<div className="flex items-center">
<button className="group shadow-[#FF7F50]/30 hover:shadow-[#FF7F50]/50 transition-all duration-300 overflow-hidden cursor-pointer text-xs font-semibold text-white bg-gradient-to-r from-[#FF7F50] to-[#FF6347] rounded-full pt-2.5 pr-6 pb-2.5 pl-6 relative shadow-lg">
            Get Started
          </button>
</div>
</div>
</nav>

<section className="mesh-gradient overflow-hidden pt-32 pb-20 relative">
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center px-3 py-1 rounded-full border border-zinc-200 bg-white mb-8 shadow-sm">
<span className="text-xs font-medium tracking-widest uppercase text-zinc-500">
            Done-For-You Cold Email
          </span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-zinc-900 mb-6 max-w-4xl mx-auto leading-tight">
          You run the business.
          <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7F50] to-[#FF6347]">
            We run the cold email.
          </span>
</h1>
<p className="text-lg text-zinc-500 mb-10 max-w-2xl mx-auto leading-relaxed font-normal">
          Struggling with deliverability? Can't find good leads? Tired of
          managing 5 different tools? We handle every single step of your
          outbound system so you just show up to meetings.
        </p>
<div className="flex flex-col items-center gap-4">
<button className="inline-flex items-center justify-center text-sm font-medium text-white bg-zinc-900 hover:bg-[#FF7F50] hover:shadow-lg hover:shadow-[#FF7F50]/30 transition-all duration-500 rounded-full px-8 py-4 shadow-sm group">
            Let's Talk
            <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-xs text-zinc-400 font-normal mt-2">
            No contracts. No dashboards. Cancel anytime.
          </p>
</div>
</div>

</section>

<section className="overflow-hidden bg-[#ffffff] pt-24 pb-24 relative">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col w-full mb-12">
<div className="flex items-end justify-between w-full pb-5">
<div className="flex gap-x-2 gap-y-2 items-center">
<span className="w-8 h-px bg-[#FF7F50]"></span>
<span className="uppercase text-xs font-bold text-[#FF7F50] tracking-[0.2em] font-sans">
                The Problem
              </span>
</div>
</div>
<div className="w-full h-px bg-neutral-200 mb-8"></div>
<div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 lg:gap-16">
<h2 className="md:text-4xl lg:text-5xl leading-[1.05] text-3xl text-neutral-900 tracking-tight max-w-3xl font-google-sans-flex font-normal">
              You're wasting hours duct-taping tools together.
            </h2>
<div className="lg:max-w-sm flex-shrink-0 lg:pt-2 space-y-6 text-base text-neutral-600 font-sans">
<p>
                Right now, you're buying leads from Apollo, cleaning them in
                Clay, writing templates with ChatGPT, and sending via Smartlead.
                And when it breaks, you're the one fixing it.
              </p>
<p>
                It costs too much money and takes up too much of your time. If
                any step fails—your pipeline dries up.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pb-24 relative bg-neutral-50/40" id="how-it-works">
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="flex flex-col w-full mb-12">
<div className="flex items-end justify-between w-full pb-5">
<div className="flex gap-x-2 gap-y-2 items-center">
<span className="w-8 h-px bg-[#FF7F50]"></span>
<span className="uppercase text-xs font-bold text-[#FF7F50] tracking-[0.2em] font-sans">
                How It Works
              </span>
</div>
</div>
<div className="w-full h-px bg-neutral-200 mb-8"></div>
<div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 lg:gap-16">
<h2 className="md:text-4xl lg:text-5xl leading-[1.05] text-3xl text-neutral-900 tracking-tight max-w-3xl font-google-sans-flex font-normal">
              A dead-simple process from cold lead to booked meeting.
            </h2>
<div className="lg:max-w-sm flex-shrink-0 lg:pt-2">
<p className="leading-relaxed text-base text-neutral-600 font-sans">
                We build it, we run it, and you get the results. No confusing
                dashboards.
              </p>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="group flex flex-col hover:shadow-xl hover:shadow-[#FF7F50]/5 transition-all duration-500 border-neutral-200/60 border rounded-[40px] px-8 py-10 justify-between bg-gradient-to-br from-white to-neutral-50 shadow-md shadow-neutral-200/30">
<div className="w-12 h-12 bg-[#FF7F50]/10 rounded-2xl flex items-center justify-center text-[#FF7F50] mb-8 font-bold text-xl">
              1
            </div>
<h3 className="text-2xl text-neutral-900 mb-4 tracking-tight leading-tight font-google-sans-flex font-normal">
              Find perfect leads.
            </h3>
<p className="text-neutral-500 text-sm leading-relaxed font-sans">
              Tell us who you want to reach. We'll scrape, enrich, and verify
              the data so it's ready to go.
            </p>
</div>
<div className="group flex flex-col hover:shadow-xl hover:shadow-[#FF7F50]/5 transition-all duration-500 border-neutral-200/60 border rounded-[40px] px-8 py-10 justify-between bg-gradient-to-br from-white to-neutral-50 shadow-md shadow-neutral-200/30">
<div className="w-12 h-12 bg-[#FF7F50]/10 rounded-2xl flex items-center justify-center text-[#FF7F50] mb-8 font-bold text-xl">
              2
            </div>
<h3 className="text-2xl text-neutral-900 mb-4 tracking-tight leading-tight font-google-sans-flex font-normal">
              Write emails that get replies.
            </h3>
<p className="text-neutral-500 text-sm leading-relaxed font-sans">
              We drop the generic templates. Our team crafts personalized,
              highly relevant messages for every prospect.
            </p>
</div>
<div className="group flex flex-col hover:shadow-xl hover:shadow-[#FF7F50]/5 transition-all duration-500 border-neutral-200/60 border rounded-[40px] px-8 py-10 justify-between bg-gradient-to-br from-white to-neutral-50 shadow-md shadow-neutral-200/30">
<div className="w-12 h-12 bg-[#FF7F50]/10 rounded-2xl flex items-center justify-center text-[#FF7F50] mb-8 font-bold text-xl">
              3
            </div>
<h3 className="text-2xl text-neutral-900 mb-4 tracking-tight leading-tight font-google-sans-flex font-normal">
              Send &amp; hit the inbox.
            </h3>
<p className="text-neutral-500 text-sm leading-relaxed font-sans">
              We set up domains, handle warm-ups, and monitor deliverability
              daily so your emails actually land.
            </p>
</div>
<div className="group flex flex-col hover:shadow-2xl hover:shadow-[#FF7F50]/20 transition-all duration-500 bg-neutral-950 border-neutral-800 border rounded-[40px] px-8 py-10 justify-between text-white">
<div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-8 font-bold text-xl">
              4
            </div>
<h3 className="text-2xl text-white mb-4 tracking-tight leading-tight font-google-sans-flex font-normal">
              Meetings booked.
            </h3>
<p className="text-neutral-400 text-sm leading-relaxed font-sans">
              We read replies and route the positive ones to you. You literally
              just take the sales calls.
            </p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#ffffff] pt-24 pb-24 relative">
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="flex flex-col w-full mb-12">
<div className="flex items-end justify-between w-full pb-5">
<div className="flex gap-x-2 gap-y-2 items-center">
<span className="w-8 h-px bg-[#FF7F50]"></span>
<span className="uppercase text-xs font-bold text-[#FF7F50] tracking-[0.2em] font-sans">
                What's Inside
              </span>
</div>
</div>
<div className="w-full h-px bg-neutral-200 mb-8"></div>
<div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 lg:gap-16">
<h2 className="md:text-4xl lg:text-5xl leading-[1.05] text-3xl text-neutral-900 tracking-tight max-w-3xl font-google-sans-flex font-normal">
              Everything you need for outbound. All in one place.
            </h2>
<div className="lg:max-w-sm flex-shrink-0 lg:pt-2">
<p className="leading-relaxed text-base text-neutral-600 font-sans">
                Whether you need a better lead list, fixed deliverability, or a
                total hands-off system—we've got it covered.
              </p>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="group relative flex flex-col justify-between overflow-hidden border border-neutral-200 rounded-[32px] p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#FF7F50]/30 bg-gradient-to-b from-white to-neutral-50/80 shadow-md shadow-neutral-200/40">
<iconify-icon className="text-2xl text-[#FF7F50] mb-6 block" icon="solar:users-group-rounded-linear"></iconify-icon>
<h3 className="text-neutral-900 text-2xl tracking-tight mb-3 font-google-sans-flex font-normal">
              Lead Sourcing
            </h3>
<p className="text-neutral-500 text-sm leading-relaxed font-sans">
              We pull leads from multiple sources — Apollo, LinkedIn, scraped
              lists, funding announcements. Have a list? We plug it in.
            </p>
</div>
<div className="group relative flex flex-col justify-between overflow-hidden border border-neutral-200 rounded-[32px] p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#FF7F50]/30 bg-gradient-to-b from-white to-neutral-50/80 shadow-md shadow-neutral-200/40">
<iconify-icon className="text-2xl text-[#FF7F50] mb-6 block" icon="solar:magic-stick-3-linear"></iconify-icon>
<h3 className="text-neutral-900 text-2xl tracking-tight mb-3 font-google-sans-flex font-normal">
              AI Personalization
            </h3>
<p className="text-neutral-500 text-sm leading-relaxed font-sans">
              Our AI agents research every single lead and write a unique email
              that's actually about them. Real personalization at scale.
            </p>
</div>
<div className="group relative flex flex-col justify-between overflow-hidden border border-neutral-200 rounded-[32px] p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#FF7F50]/30 bg-gradient-to-b from-white to-neutral-50/80 shadow-md shadow-neutral-200/40">
<iconify-icon className="text-2xl text-[#FF7F50] mb-6 block" icon="solar:server-path-linear"></iconify-icon>
<h3 className="text-neutral-900 text-2xl tracking-tight mb-3 font-google-sans-flex font-normal">
              Dedicated Infrastructure
            </h3>
<p className="text-neutral-500 text-sm leading-relaxed font-sans">
              Custom domains, proper warm-up, IP rotation, deliverability
              monitoring. Your emails land in inboxes — not spam folders.
            </p>
</div>
<div className="group relative flex flex-col justify-between overflow-hidden border border-neutral-200 rounded-[32px] p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#FF7F50]/30 bg-gradient-to-b from-white to-neutral-50/80 shadow-md shadow-neutral-200/40">
<iconify-icon className="text-2xl text-[#FF7F50] mb-6 block" icon="solar:chat-round-check-linear"></iconify-icon>
<h3 className="text-neutral-900 text-2xl tracking-tight mb-3 font-google-sans-flex font-normal">
              Reply Agents
            </h3>
<p className="text-neutral-500 text-sm leading-relaxed font-sans">
              Every single reply gets read by our AI. Interested? Routed to your
              inbox. Not interested? Logged and handled.
            </p>
</div>
<div className="group relative flex flex-col justify-between overflow-hidden border border-neutral-200 rounded-[32px] p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#FF7F50]/30 bg-gradient-to-b from-white to-neutral-50/80 shadow-md shadow-neutral-200/40">
<iconify-icon className="text-2xl text-[#FF7F50] mb-6 block" icon="solar:route-linear"></iconify-icon>
<h3 className="text-neutral-900 text-2xl tracking-tight mb-3 font-google-sans-flex font-normal">
              Campaign Sequences
            </h3>
<p className="text-neutral-500 text-sm leading-relaxed font-sans">
              Multi-step campaigns with smart follow-ups. Conditional branching
              ensures the right message at the right time.
            </p>
</div>
<div className="group relative flex flex-col justify-between overflow-hidden border border-neutral-200 rounded-[32px] p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#FF7F50]/30 bg-gradient-to-b from-white to-neutral-50/80 shadow-md shadow-neutral-200/40">
<iconify-icon className="text-2xl text-[#FF7F50] mb-6 block" icon="solar:calendar-mark-linear"></iconify-icon>
<h3 className="text-neutral-900 text-2xl tracking-tight mb-3 font-google-sans-flex font-normal">
              Meeting Booking
            </h3>
<p className="text-neutral-500 text-sm leading-relaxed font-sans">
              Hot leads get scheduled directly on your calendar. Qualified
              prospects. Real conversations. You just show up.
            </p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pb-24 relative bg-neutral-50/40" id="pricing">
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="flex flex-col w-full mb-12">
<div className="flex items-end justify-between w-full pb-5">
<div className="flex gap-x-2 gap-y-2 items-center">
<span className="w-8 h-px bg-[#FF7F50]"></span>
<span className="uppercase text-xs font-bold text-[#FF7F50] tracking-[0.2em] font-sans">
                The Math
              </span>
</div>
</div>
<div className="w-full h-px bg-neutral-200 mb-8"></div>
<div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 lg:gap-16">
<h2 className="md:text-4xl lg:text-5xl leading-[1.05] text-3xl text-neutral-900 tracking-tight max-w-3xl font-google-sans-flex font-normal">
              Pay less. Get better results. Do zero work.
            </h2>
<div className="lg:max-w-sm flex-shrink-0 lg:pt-2">
<p className="leading-relaxed text-base text-neutral-600 font-sans">
                You're paying more to do it yourself. Let us take it off your
                plate.
              </p>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
<div className="hover:shadow-md transition-shadow h-full border-neutral-200 border rounded-[32px] px-8 py-10 flex flex-col bg-gradient-to-br from-white to-neutral-50 shadow-md shadow-neutral-200/40">
<h3 className="text-3xl tracking-tight mb-2 font-google-sans-flex font-normal">
              Your Current Setup
            </h3>
<p className="text-neutral-500 mb-8 text-sm font-sans">
              Managing multiple tools manually.
            </p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-5xl font-google-sans-flex font-normal">
                $1.3k+
              </span>
<span className="text-neutral-400 text-sm font-sans">/mo</span>
</div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-center justify-between text-sm text-neutral-600 font-sans">
<span className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:close-circle-linear"></iconify-icon>
                  Clay
                </span>
<span>$800-2,000</span>
</li>
<li className="flex items-center justify-between text-sm text-neutral-600 font-sans">
<span className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:close-circle-linear"></iconify-icon>
                  Instantly/Smartlead
                </span>
<span>$300-600</span>
</li>
<li className="flex items-center justify-between text-sm text-neutral-600 font-sans">
<span className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:close-circle-linear"></iconify-icon>
                  Apollo/Data
                </span>
<span>$100-500</span>
</li>
<li className="flex items-center justify-between text-sm text-neutral-600 font-sans">
<span className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:close-circle-linear"></iconify-icon>
                  Domains + Warmup
                </span>
<span>$100-300</span>
</li>
<li className="flex items-center justify-between text-sm text-neutral-600 font-sans">
<span className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:close-circle-linear"></iconify-icon>
                  Operator/SDR Time
                </span>
<span>10-15 hrs/wk</span>
</li>
</ul>
</div>
<div className="border border-white/10 rounded-[32px] px-8 py-10 h-full text-white relative shadow-2xl overflow-hidden flex flex-col bg-gradient-to-b from-neutral-900 to-neutral-950 shadow-[#FF7F50]/10">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 blur-3xl"></div>
<h3 className="text-3xl tracking-tight mb-2 font-google-sans-flex font-normal flex items-center gap-2">
<iconify-icon className="text-[#FF7F50]" icon="solar:server-square-linear"></iconify-icon>
              TheMailMachine
            </h3>
<p className="text-neutral-400 mb-8 text-sm font-sans">
              We handle absolutely everything.
            </p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-5xl font-google-sans-flex font-normal">
                $2,500
              </span>
<span className="text-neutral-500 text-sm font-sans">/mo</span>
</div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-center justify-between text-sm text-neutral-300 font-sans">
<span className="flex items-center gap-2">
<iconify-icon className="text-[#FF7F50]" icon="solar:check-circle-linear"></iconify-icon>
                  Management
                </span>
<span>We handle it all</span>
</li>
<li className="flex items-center justify-between text-sm text-neutral-300 font-sans">
<span className="flex items-center gap-2">
<iconify-icon className="text-[#FF7F50]" icon="solar:check-circle-linear"></iconify-icon>
                  Deliverability
                </span>
<span>We guarantee it</span>
</li>
<li className="flex items-center justify-between text-sm text-neutral-300 font-sans">
<span className="flex items-center gap-2">
<iconify-icon className="text-[#FF7F50]" icon="solar:check-circle-linear"></iconify-icon>
                  Reply handling
                </span>
<span>AI does it</span>
</li>
<li className="flex items-center justify-between text-sm text-neutral-300 font-sans">
<span className="flex items-center gap-2">
<iconify-icon className="text-[#FF7F50]" icon="solar:check-circle-linear"></iconify-icon>
                  Operator Time
                </span>
<span>0 hrs/wk</span>
</li>
</ul>
<button className="hover:opacity-90 transition-opacity font-medium text-white font-sans bg-[#FF7F50] w-full rounded-full pt-4 pb-4">
              Get Started
            </button>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#ffffff] pt-24 pb-24 relative">
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="flex flex-col w-full mb-12">
<div className="flex items-end justify-between w-full pb-5">
<div className="flex gap-x-2 gap-y-2 items-center">
<span className="w-8 h-px bg-[#FF7F50]"></span>
<span className="uppercase text-xs font-bold text-[#FF7F50] tracking-[0.2em] font-sans">
                Results
              </span>
</div>
</div>
<div className="w-full h-px bg-neutral-200 mb-8"></div>
<div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 lg:gap-16">
<h2 className="md:text-4xl lg:text-5xl leading-[1.05] text-3xl text-neutral-900 tracking-tight max-w-3xl font-google-sans-flex font-normal">
              Real results from businesses like yours.
            </h2>
<div className="lg:max-w-sm flex-shrink-0 lg:pt-2">
<p className="leading-relaxed text-base text-neutral-600 font-sans">
                See what happens when you stop managing tools and start focusing
                on closing deals.
              </p>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
<div className="group flex flex-col hover:bg-white hover:shadow-xl hover:shadow-[#FF7F50]/10 transition-all duration-500 bg-neutral-50 border-neutral-200/60 border rounded-[40px] px-8 py-8 justify-between md:col-span-2 lg:col-span-1">
<blockquote className="text-xl text-neutral-800 leading-snug font-medium tracking-tight font-sans mb-8">
              "We were spending $3,200/month on Clay, Instantly, and Apollo —
              and I was personally spending 15 hours a week managing the whole
              thing. TheMailMachine replaced all of it for $2,500/month. I spend
              zero hours on it now. We're booking more meetings than before. The
              math was so obvious I felt stupid for not doing it sooner."
            </blockquote>
<div className="flex items-center gap-4 mt-auto pt-6 border-t border-neutral-200/50">
<div className="w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center">
<iconify-icon className="text-neutral-500 text-xl" icon="solar:user-linear"></iconify-icon>
</div>
<div>
<div className="font-bold text-neutral-900 text-base font-sans">
                  [Client Name]
                </div>
<div className="text-neutral-500 text-xs font-medium uppercase tracking-wider font-sans">
                  [Title] at [Company]
                </div>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-neutral-50 border border-neutral-200 rounded-[32px] p-8 flex flex-col items-center justify-center text-center">
<div className="text-4xl font-google-sans-flex font-normal text-[#FF7F50] mb-2">
                3.2x
              </div>
<div className="text-sm text-neutral-600 font-sans">
                More meetings booked
              </div>
</div>
<div className="bg-neutral-50 border border-neutral-200 rounded-[32px] p-8 flex flex-col items-center justify-center text-center">
<div className="text-4xl font-google-sans-flex font-normal text-[#FF7F50] mb-2">
                $700/mo
              </div>
<div className="text-sm text-neutral-600 font-sans">
                Saved on tools
              </div>
</div>
<div className="bg-neutral-50 border border-neutral-200 rounded-[32px] p-8 flex flex-col items-center justify-center text-center">
<div className="text-4xl font-google-sans-flex font-normal text-[#FF7F50] mb-2">
                15 hrs
              </div>
<div className="text-sm text-neutral-600 font-sans">
                Freed up weekly
              </div>
</div>
<div className="bg-neutral-50 border border-neutral-200 rounded-[32px] p-8 flex flex-col items-center justify-center text-center">
<div className="text-4xl font-google-sans-flex font-normal text-[#FF7F50] mb-2">
                Zero
              </div>
<div className="text-sm text-neutral-600 font-sans">
                Operational overhead
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pb-24 relative bg-neutral-50/40">
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="flex flex-col w-full mb-12">
<div className="flex items-end justify-between w-full pb-5">
<div className="flex gap-x-2 gap-y-2 items-center">
<span className="w-8 h-px bg-[#FF7F50]"></span>
<span className="uppercase text-xs font-bold text-[#FF7F50] tracking-[0.2em] font-sans">
                Why Us
              </span>
</div>
</div>
<div className="w-full h-px bg-neutral-200 mb-8"></div>
<div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 lg:gap-16">
<h2 className="md:text-4xl lg:text-5xl leading-[1.05] text-3xl text-neutral-900 tracking-tight max-w-3xl font-google-sans-flex font-normal">
              The smartest way to do cold email.
            </h2>
<div className="lg:max-w-sm flex-shrink-0 lg:pt-2">
<p className="leading-relaxed text-base text-neutral-600 font-sans">
                Stop wasting time on low-ROI traditional agencies or expensive
                DIY tool stacks.
              </p>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="group relative flex flex-col justify-between overflow-hidden border border-neutral-200 rounded-[32px] p-8 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-neutral-50 shadow-md shadow-neutral-200/40">
<h3 className="text-neutral-900 text-2xl tracking-tight mb-6 font-google-sans-flex font-normal">
              Traditional Agencies
            </h3>
<ul className="space-y-4 text-sm text-neutral-500 font-sans">
<li className="flex gap-3">
<iconify-icon className="text-neutral-300 text-base mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
                They write three templates.
              </li>
<li className="flex gap-3">
<iconify-icon className="text-neutral-300 text-base mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
                They blast your list.
              </li>
<li className="flex gap-3">
<iconify-icon className="text-neutral-300 text-base mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
                Report meaningless open rates.
              </li>
<li className="flex gap-3">
<iconify-icon className="text-neutral-300 text-base mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
                No AI or scale personalization.
              </li>
</ul>
<div className="mt-8 pt-4 border-t border-neutral-100 text-sm font-medium text-neutral-900">
              Low reply rates, high cost.
            </div>
</div>
<div className="group relative flex flex-col justify-between overflow-hidden border border-neutral-200 rounded-[32px] p-8 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-neutral-50 shadow-md shadow-neutral-200/40">
<h3 className="text-neutral-900 text-2xl tracking-tight mb-6 font-google-sans-flex font-normal">
              DIY SaaS Stack
            </h3>
<ul className="space-y-4 text-sm text-neutral-500 font-sans">
<li className="flex gap-3">
<iconify-icon className="text-neutral-300 text-base mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
                You manage workflows.
              </li>
<li className="flex gap-3">
<iconify-icon className="text-neutral-300 text-base mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
                You write the prompts.
              </li>
<li className="flex gap-3">
<iconify-icon className="text-neutral-300 text-base mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
                Pay for 5+ tools separately.
              </li>
<li className="flex gap-3">
<iconify-icon className="text-neutral-300 text-base mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
                Handle replies manually.
              </li>
</ul>
<div className="mt-8 pt-4 border-t border-neutral-100 text-sm font-medium text-neutral-900">
              Expensive &amp; requires expert time.
            </div>
</div>
<div className="p-8 rounded-[32px] flex flex-col justify-between text-white relative hover:shadow-2xl hover:shadow-[#FF7F50]/20 transition-all duration-500 bg-gradient-to-b from-neutral-900 to-neutral-950 shadow-2xl shadow-[#FF7F50]/15">
<h3 className="text-white text-2xl tracking-tight mb-6 font-google-sans-flex font-normal flex items-center gap-2">
<iconify-icon className="text-[#FF7F50]" icon="solar:server-square-linear"></iconify-icon>
              TheMailMachine
            </h3>
<ul className="space-y-4 text-sm text-neutral-400 font-sans">
<li className="flex gap-3 text-white">
<iconify-icon className="text-[#FF7F50] text-base mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                We build everything custom.
              </li>
<li className="flex gap-3 text-white">
<iconify-icon className="text-[#FF7F50] text-base mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                AI writes genuine emails.
              </li>
<li className="flex gap-3 text-white">
<iconify-icon className="text-[#FF7F50] text-base mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                We handle every reply.
              </li>
<li className="flex gap-3 text-white">
<iconify-icon className="text-[#FF7F50] text-base mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                One flat monthly fee.
              </li>
</ul>
<div className="mt-8 pt-4 border-t border-white/10 text-sm font-medium text-white">
              More pipeline, less work.
            </div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#ffffff] pt-24 pb-24 relative" id="faq">
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="flex flex-col w-full mb-12">
<div className="flex items-end justify-between w-full pb-5">
<div className="flex gap-x-2 gap-y-2 items-center">
<span className="w-8 h-px bg-[#FF7F50]"></span>
<span className="uppercase text-xs font-bold text-[#FF7F50] tracking-[0.2em] font-sans">
                FAQ
              </span>
</div>
</div>
<div className="w-full h-px bg-neutral-200 mb-8"></div>
<div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 lg:gap-16">
<h2 className="md:text-4xl lg:text-5xl leading-[1.05] text-3xl text-neutral-900 tracking-tight max-w-3xl font-google-sans-flex font-normal">
              Questions you're probably asking.
            </h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
<div className="space-y-4">
<details className="group bg-neutral-50/50 rounded-2xl border border-neutral-200/80 open:bg-white open:border-neutral-200 open:shadow-sm transition-all duration-300 overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden p-5 text-neutral-900 font-google-sans-flex text-[17px] select-none hover:text-[#FF7F50] transition-colors">
<span>Is this just a Clay replacement?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-neutral-400 group-open:text-[#FF7F50]">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-neutral-500 text-sm px-5 pb-5 font-sans leading-relaxed">
                Not exactly. Clay is a tool you manage yourself. We're a team
                that builds and runs your entire email infrastructure. If you
                like Clay, we plug into whatever you've got.
              </div>
</details>
<details className="group bg-neutral-50/50 rounded-2xl border border-neutral-200/80 open:bg-white open:border-neutral-200 open:shadow-sm transition-all duration-300 overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden p-5 text-neutral-900 font-google-sans-flex text-[17px] select-none hover:text-[#FF7F50] transition-colors">
<span>How long does setup take?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-neutral-400 group-open:text-[#FF7F50]">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-neutral-500 text-sm px-5 pb-5 font-sans leading-relaxed">
                Five to seven business days from kickoff to live campaigns.
                Sometimes faster depending on complexity.
              </div>
</details>
<details className="group bg-neutral-50/50 rounded-2xl border border-neutral-200/80 open:bg-white open:border-neutral-200 open:shadow-sm transition-all duration-300 overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden p-5 text-neutral-900 font-google-sans-flex text-[17px] select-none hover:text-[#FF7F50] transition-colors">
<span>Do I need to provide my own leads?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-neutral-400 group-open:text-[#FF7F50]">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-neutral-500 text-sm px-5 pb-5 font-sans leading-relaxed">
                No. If you have a list, great — we'll enrich it. If not, we'll
                source leads for you through our data partners based on your
                ICP.
              </div>
</details>
<details className="group bg-neutral-50/50 rounded-2xl border border-neutral-200/80 open:bg-white open:border-neutral-200 open:shadow-sm transition-all duration-300 overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden p-5 text-neutral-900 font-google-sans-flex text-[17px] select-none hover:text-[#FF7F50] transition-colors">
<span>What if I want to cancel?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-neutral-400 group-open:text-[#FF7F50]">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-neutral-500 text-sm px-5 pb-5 font-sans leading-relaxed">
                No contracts. Cancel anytime. We'll hand back all your data,
                domains, and infrastructure. No lock-in.
              </div>
</details>
</div>
<div className="space-y-4">
<details className="group bg-neutral-50/50 rounded-2xl border border-neutral-200/80 open:bg-white open:border-neutral-200 open:shadow-sm transition-all duration-300 overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden p-5 text-neutral-900 font-google-sans-flex text-[17px] select-none hover:text-[#FF7F50] transition-colors">
<span>What if I already have sending infrastructure?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-neutral-400 group-open:text-[#FF7F50]">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-neutral-500 text-sm px-5 pb-5 font-sans leading-relaxed">
                Great, we'll plug into it. You don't have to start from scratch.
                We deploy around whatever you already have running.
              </div>
</details>
<details className="group bg-neutral-50/50 rounded-2xl border border-neutral-200/80 open:bg-white open:border-neutral-200 open:shadow-sm transition-all duration-300 overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden p-5 text-neutral-900 font-google-sans-flex text-[17px] select-none hover:text-[#FF7F50] transition-colors">
<span>What kind of results can I expect?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-neutral-400 group-open:text-[#FF7F50]">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-neutral-500 text-sm px-5 pb-5 font-sans leading-relaxed">
                It depends on your ICP and offer. We'll give you honest
                projections during our kickoff call based on what we've seen
                work.
              </div>
</details>
<details className="group bg-neutral-50/50 rounded-2xl border border-neutral-200/80 open:bg-white open:border-neutral-200 open:shadow-sm transition-all duration-300 overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden p-5 text-neutral-900 font-google-sans-flex text-[17px] select-none hover:text-[#FF7F50] transition-colors">
<span>Can I change campaigns after launch?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-neutral-400 group-open:text-[#FF7F50]">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-neutral-500 text-sm px-5 pb-5 font-sans leading-relaxed">
                Absolutely. That's what the Slack channel is for. Tell us to
                target different people or change the angle and we spin it up.
              </div>
</details>
<details className="group bg-neutral-50/50 rounded-2xl border border-neutral-200/80 open:bg-white open:border-neutral-200 open:shadow-sm transition-all duration-300 overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden p-5 text-neutral-900 font-google-sans-flex text-[17px] select-none hover:text-[#FF7F50] transition-colors">
<span>How is this different from hiring an SDR?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-neutral-400 group-open:text-[#FF7F50]">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-neutral-500 text-sm px-5 pb-5 font-sans leading-relaxed">
                One SDR costs $5,000-8,000/month. Our AI-driven systems send
                thousands of hyper-personalized emails and handle every reply
                with incredible efficiency for a fraction of the cost.
              </div>
</details>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pb-24 relative bg-neutral-50/40">
<div className="max-w-7xl z-10 mr-auto ml-auto pt-0 pr-6 pb-0 pl-6 relative">
<div className="overflow-hidden lg:p-24 text-center bg-neutral-50 border-neutral-200/60 border rounded-[40px] px-12 py-12 relative shadow-sm">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,127,80,0.07),transparent_50%)] pointer-events-none"></div>
<div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF7F50]/10 border border-[#FF7F50]/20 mb-10">
<span className="text-[10px] font-semibold text-[#FF7F50] uppercase tracking-widest font-sans">
                Turn it on
              </span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl text-neutral-900 tracking-tight leading-[1.1] mb-8 font-google-sans-flex font-normal">
              Ready to get started?
            </h2>
<p className="text-lg text-neutral-600 mb-12 leading-relaxed max-w-2xl font-sans">
              Stop spending hours managing email tools. Stop paying for five
              different subscriptions. Let us run it for you.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center">
<button className="w-full sm:w-auto bg-neutral-900 text-white px-10 py-4 rounded-full text-sm font-medium hover:bg-[#FF7F50] hover:shadow-lg hover:shadow-[#FF7F50]/30 transition-all duration-500 shadow-xl shadow-neutral-200/50 flex items-center justify-center gap-2 font-sans">
                Get Started
              </button>
</div>
</div>
</div>
</div>
</section>

<footer className="max-w-7xl mr-auto mb-12 ml-auto pr-6 pl-6 pt-12">
<div className="bg-neutral-950 rounded-[40px] p-12 relative overflow-hidden text-white">
<div className="bg-[#000000] w-full h-full absolute top-0 left-0"></div>
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
<div>
<span className="text-lg font-medium tracking-tight text-white flex items-center gap-2 mb-6 font-google-sans-flex font-normal">
<iconify-icon className="text-[#FF7F50] text-xl" icon="solar:server-square-linear"></iconify-icon>
              TheMailMachine
            </span>
<p className="text-neutral-400 max-w-sm mb-10 leading-relaxed font-sans">
              The modern standard for automated cold email outreach and
              infrastructure.
            </p>
</div>
<div className="grid grid-cols-2 gap-10">
<div>
<h4 className="text-sm font-medium mb-6 font-sans">Product</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li>
<a className="hover:text-white transition-colors font-sans" href="#how-it-works">
                    How It Works
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors font-sans" href="#pricing">
                    Pricing
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors font-sans" href="#faq">
                    FAQ
                  </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium mb-6 font-sans">Company</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li>
<a className="hover:text-white transition-colors font-sans" href="mailto:hello@themailmachine.com">
                    Contact
                  </a>
</li>
</ul>
</div>
</div>
</div>
<div className="relative z-10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/10">
<p className="text-xs text-neutral-600 font-sans">
            © 2025 TheMailMachine. All rights reserved.
          </p>
</div>
</div>
</footer>

    </>
  );
}
