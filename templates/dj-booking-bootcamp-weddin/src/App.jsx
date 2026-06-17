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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-[#FF5A00]/15 blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="fixed top-0 inset-0 bg-grid-pattern pointer-events-none -z-20"></div>

<nav className="w-full border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="font-condensed font-extrabold text-2xl tracking-tighter text-gray-900">
          DJBB
        </div>
<a className="hidden md:inline-flex items-center justify-center bg-[#FF5A00] text-white font-semibold text-xs px-4 py-2 rounded-sm hover:opacity-90 transition-opacity uppercase tracking-wide" href="#apply">
          Apply Now
        </a>
</div>
</nav>

<header className="relative pt-24 pb-20 md:pt-32 md:pb-32 px-6 flex flex-col items-center text-center">
<div className="max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 border border-[#FF5A00]/30 bg-[#FF5A00]/10 text-[#FF5A00] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-[#FF5A00] animate-pulse"></span>
          Founding Cohort Open
        </div>
<h1 className="font-condensed font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.95] mb-6 text-balance text-gray-900">
          Book 3–5 Premium Weddings or Private Events at
          <br className="hidden md:block"/>
<span className="text-[#FF5A00]">$1,500–$3,000+</span>
          in 90 Days.
        </h1>
<p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
          We help working DJs install the positioning, pricing, portfolio,
          outreach, and sales system to book high-ticket gigs consistently—
          <span className="text-gray-900 font-semibold">
            without depending on agents, paid ads, or splitting profit.
          </span>
</p>
<div className="flex flex-col items-center gap-4">
<a className="inline-flex items-center justify-center bg-[#FF5A00] text-white font-bold text-sm md:text-base px-8 py-4 rounded-sm hover:opacity-90 transition-all transform hover:scale-[1.02] uppercase tracking-wide w-full sm:w-auto shadow-[0_0_20px_rgba(255,90,0,0.3)]" href="#apply">
            Apply for the Founding Cohort
          </a>
<p className="text-xs text-gray-500 font-medium tracking-wide uppercase mt-2">
            Limited to 10 working DJs
          </p>
</div>
</div>
</header>

<section className="py-20 border-t border-gray-200 bg-white">
<div className="max-w-3xl mx-auto px-6 text-center">
<div className="text-[#FF5A00] text-xs font-bold uppercase tracking-widest mb-4">
          The Reality Check
        </div>
<h2 className="font-condensed font-extrabold text-3xl md:text-4xl tracking-tighter uppercase mb-6 text-balance text-gray-900">
          You have the talent. You lack the pipeline.
        </h2>
<p className="text-base text-gray-600 font-normal leading-relaxed mb-6">
          You are a talented DJ already doing paid gigs at clubs, bars, or
          standard weddings. You know how to read a room and perform. But you're
          stuck under ~$8k/month because your income relies on hoping agents
          pass you work, waiting for referrals, or taking whatever budget a
          client offers.
        </p>
<p className="text-lg text-gray-900 font-semibold leading-relaxed">
          Your problem isn't a lack of skill behind the decks. Your problem is
          dependency. You are missing a repeatable system to attract, package,
          and close premium clients who gladly pay $1,500 to $3,000+ per event.
        </p>
</div>
</section>

<section className="py-24 px-6 border-t border-gray-200 relative">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<div className="text-[#FF5A00] text-xs font-bold uppercase tracking-widest mb-3">
            The Mechanism
          </div>
<h2 className="font-condensed font-extrabold text-4xl md:text-5xl tracking-tighter uppercase text-gray-900">
            The Premium Event DJ Pipeline
          </h2>
</div>

<div className="flex flex-col md:flex-row items-stretch justify-between relative gap-6 md:gap-4">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gray-200 -translate-y-1/2 z-0"></div>

<div className="relative z-10 flex-1 flex flex-col items-center text-center p-6 bg-white border border-gray-200 rounded-sm group hover:border-[#FF5A00]/50 transition-colors shadow-sm">
<div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 mb-4 group-hover:text-[#FF5A00] group-hover:border-[#FF5A00]/30 group-hover:bg-[#FF5A00]/10 transition-colors">
<iconify-icon icon="solar:target-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">
              01
            </div>
<h3 className="font-condensed font-extrabold text-xl tracking-tight uppercase text-gray-900">
              Positioning
            </h3>
<p className="text-xs text-gray-500 mt-2 font-normal">
              Stop looking like a commodity.
            </p>
</div>

<div className="relative z-10 flex-1 flex flex-col items-center text-center p-6 bg-white border border-gray-200 rounded-sm group hover:border-[#FF5A00]/50 transition-colors shadow-sm">
<div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 mb-4 group-hover:text-[#FF5A00] group-hover:border-[#FF5A00]/30 group-hover:bg-[#FF5A00]/10 transition-colors">
<iconify-icon icon="solar:box-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">
              02
            </div>
<h3 className="font-condensed font-extrabold text-xl tracking-tight uppercase text-gray-900">
              Packaging
            </h3>
<p className="text-xs text-gray-500 mt-2 font-normal">
              Structure offers for high tickets.
            </p>
</div>

<div className="relative z-10 flex-1 flex flex-col items-center text-center p-6 bg-white border border-gray-200 rounded-sm group hover:border-[#FF5A00]/50 transition-colors shadow-sm">
<div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 mb-4 group-hover:text-[#FF5A00] group-hover:border-[#FF5A00]/30 group-hover:bg-[#FF5A00]/10 transition-colors">
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">
              03
            </div>
<h3 className="font-condensed font-extrabold text-xl tracking-tight uppercase text-gray-900">
              Proof
            </h3>
<p className="text-xs text-gray-500 mt-2 font-normal">
              Build undeniable trust assets.
            </p>
</div>

<div className="relative z-10 flex-1 flex flex-col items-center text-center p-6 bg-white border border-gray-200 rounded-sm group hover:border-[#FF5A00]/50 transition-colors shadow-sm">
<div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 mb-4 group-hover:text-[#FF5A00] group-hover:border-[#FF5A00]/30 group-hover:bg-[#FF5A00]/10 transition-colors">
<iconify-icon icon="solar:routing-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">
              04
            </div>
<h3 className="font-condensed font-extrabold text-xl tracking-tight uppercase text-gray-900">
              Pipeline
            </h3>
<p className="text-xs text-gray-500 mt-2 font-normal">
              Automate multi-channel outreach.
            </p>
</div>

<div className="relative z-10 flex-1 flex flex-col items-center text-center p-6 bg-white border border-gray-200 rounded-sm group hover:border-[#FF5A00]/50 transition-colors shadow-sm">
<div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 mb-4 group-hover:text-[#FF5A00] group-hover:border-[#FF5A00]/30 group-hover:bg-[#FF5A00]/10 transition-colors">
<iconify-icon icon="solar:hand-shake-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">
              05
            </div>
<h3 className="font-condensed font-extrabold text-xl tracking-tight uppercase text-gray-900">
              Closing
            </h3>
<p className="text-xs text-gray-500 mt-2 font-normal">
              Convert calls into retainers.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-gray-50 border-y border-gray-200">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<div className="text-[#FF5A00] text-xs font-bold uppercase tracking-widest mb-3">
            The Arsenal
          </div>
<h2 className="font-condensed font-extrabold text-4xl md:text-5xl tracking-tighter uppercase text-gray-900">
            What You Get Inside
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white border border-gray-200 rounded-sm p-8 relative overflow-hidden flex flex-col shadow-sm">
<div className="absolute top-0 left-0 w-full h-1 bg-[#FF5A00]"></div>
<h3 className="font-condensed font-extrabold text-2xl uppercase tracking-tight mb-6 flex items-center gap-2 text-gray-900">
<iconify-icon className="text-[#FF5A00]" icon="solar:folder-with-files-linear"></iconify-icon>
              Inside the Bootcamp
            </h3>
<ul className="space-y-4 text-sm text-gray-600 font-medium flex-1">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#FF5A00] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Complete Positioning Makeover</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#FF5A00] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>$1.5k–$3k+ Package Templates</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#FF5A00] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Plug-and-play Premium Proposal Template</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#FF5A00] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Venue, Planner, &amp; Vendor Outreach Scripts</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#FF5A00] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>IG DM Conversion Scripts</span>
</li>
</ul>
</div>

<div className="bg-white border border-gray-200 rounded-sm p-8 relative overflow-hidden flex flex-col shadow-sm">
<div className="absolute top-0 left-0 w-full h-1 bg-gray-900"></div>
<h3 className="font-condensed font-extrabold text-2xl uppercase tracking-tight mb-6 flex items-center gap-2 text-gray-900">
<iconify-icon className="text-gray-900" icon="solar:server-square-linear"></iconify-icon>
              Conversion Assets
            </h3>
<ul className="space-y-4 text-sm text-gray-600 font-medium flex-1">
<li className="flex items-start gap-3">
<iconify-icon className="text-gray-900 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>The Premium Sales Call Script</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-gray-900 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Automated Follow-up Sequences</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-gray-900 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Objection Handling Matrix</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-gray-900 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Testimonial &amp; Referral Generation System</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-gray-900 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Wedding-Day Timeline Templates</span>
</li>
</ul>
</div>

<div className="bg-white border border-gray-200 rounded-sm p-8 relative overflow-hidden flex flex-col shadow-sm">
<div className="absolute top-0 left-0 w-full h-1 bg-[#FF5A00]"></div>
<h3 className="font-condensed font-extrabold text-2xl uppercase tracking-tight mb-6 flex items-center gap-2 text-gray-900">
<iconify-icon className="text-[#FF5A00]" icon="solar:medal-star-linear"></iconify-icon>
              Founding Bonuses
            </h3>
<ul className="space-y-4 text-sm text-gray-600 font-medium flex-1">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#FF5A00] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>1-on-1 Social Profile Makeover</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#FF5A00] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Offer &amp; Pricing Review (Before your 1st quote)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#FF5A00] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>First-Booking Private Debrief</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-3xl mx-auto">
<div className="text-[#FF5A00] text-xs font-bold uppercase tracking-widest mb-3">
          The Execution
        </div>
<h2 className="font-condensed font-extrabold text-4xl md:text-5xl tracking-tighter uppercase mb-12 text-gray-900">
          The 90-Day Path
        </h2>
<div className="relative border-l border-gray-200 ml-3 md:ml-4 space-y-10 pb-4">

<div className="relative pl-8 md:pl-12">
<div className="absolute w-3 h-3 bg-white border-2 border-[#FF5A00] rounded-full -left-[6.5px] top-1.5"></div>
<div className="text-xs font-bold text-[#FF5A00] uppercase tracking-widest mb-1">
              Weeks 1–2
            </div>
<h3 className="font-condensed font-extrabold text-2xl uppercase tracking-tight mb-2 text-gray-900">
              Positioning Overhaul
            </h3>
<p className="text-sm text-gray-600 font-normal">
              Define your premium avatar, rebuild your public facing profiles,
              and establish the visual identity that commands high fees.
            </p>
</div>

<div className="relative pl-8 md:pl-12">
<div className="absolute w-3 h-3 bg-white border-2 border-gray-300 rounded-full -left-[6.5px] top-1.5"></div>
<div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
              Weeks 3–4
            </div>
<h3 className="font-condensed font-extrabold text-2xl uppercase tracking-tight mb-2 text-gray-900">
              Packages &amp; Proof
            </h3>
<p className="text-sm text-gray-600 font-normal">
              Structure your $1.5k-$3k+ offers. Gather, format, and deploy your
              existing media into high-converting portfolio assets.
            </p>
</div>

<div className="relative pl-8 md:pl-12">
<div className="absolute w-3 h-3 bg-white border-2 border-gray-300 rounded-full -left-[6.5px] top-1.5"></div>
<div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
              Weeks 5–8
            </div>
<h3 className="font-condensed font-extrabold text-2xl uppercase tracking-tight mb-2 text-gray-900">
              Lead Generation Machine
            </h3>
<p className="text-sm text-gray-600 font-normal">
              Launch targeted outreach to venues, planners, and direct-to-client
              channels using our proven scripts and tracking systems.
            </p>
</div>

<div className="relative pl-8 md:pl-12">
<div className="absolute w-3 h-3 bg-white border-2 border-gray-300 rounded-full -left-[6.5px] top-1.5"></div>
<div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
              Weeks 9–10
            </div>
<h3 className="font-condensed font-extrabold text-2xl uppercase tracking-tight mb-2 text-gray-900">
              Sales Conversion
            </h3>
<p className="text-sm text-gray-600 font-normal">
              Take sales calls with confidence. Use the objection handling
              matrix to close deals at your new premium rate without
              discounting.
            </p>
</div>

<div className="relative pl-8 md:pl-12">
<div className="absolute w-3 h-3 bg-white border-2 border-gray-300 rounded-full -left-[6.5px] top-1.5"></div>
<div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
              Weeks 11–12
            </div>
<h3 className="font-condensed font-extrabold text-2xl uppercase tracking-tight mb-2 text-gray-900">
              Referral Flywheel
            </h3>
<p className="text-sm text-gray-600 font-normal">
              Implement post-event systems to guarantee 5-star reviews and
              establish ongoing referral relationships with vendor partners.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#FF5A00] border-y border-[#FF5A00] relative overflow-hidden flex justify-center">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="font-condensed italic font-extrabold text-3xl md:text-5xl lg:text-6xl tracking-tighter uppercase leading-[1.1] text-balance">
<span className="text-white/80">
            One booked event covers the program.
          </span>
<br/>
<span className="text-white">Two puts you in profit.</span>
<br/>
<span className="text-gray-900 font-bold">
            Three to five = $4,500–$15,000+ in booked revenue.
          </span>
</h2>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-3xl mx-auto">
<div className="bg-white border border-gray-200 rounded-sm p-8 md:p-12 relative overflow-hidden shadow-lg">

<div className="absolute -right-12 -top-12 w-48 h-48 bg-[#FF5A00]/10 rounded-full blur-[40px] pointer-events-none"></div>
<div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
<div className="w-16 h-16 shrink-0 rounded-full bg-[#FF5A00]/10 border border-[#FF5A00]/30 flex items-center justify-center text-[#FF5A00]">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div>
<div className="text-[#FF5A00] text-xs font-bold uppercase tracking-widest mb-2">
                The Booking Guarantee
              </div>
<h3 className="font-condensed font-extrabold text-3xl tracking-tighter uppercase mb-4 text-gray-900">
                You Book or I Coach You Free.
              </h3>
<p className="text-sm text-gray-600 font-medium leading-relaxed">
                Attend the calls, complete the outreach tracker, send 50+
                qualified messages/week, and follow the proposal process. If you
                do the work and don't book at least
                <span className="text-gray-900 font-bold">
                  2 qualified premium events in 90 days
                </span>
                , I will coach you for free until you do. The risk is entirely
                on me.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-gray-200 bg-gray-50 relative" id="apply">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FF5A00]/5 via-transparent to-transparent pointer-events-none"></div>
<div className="max-w-2xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 text-[#FF5A00] bg-[#FF5A00]/10 border border-[#FF5A00]/30 font-bold text-xs uppercase tracking-widest mb-6 px-4 py-1.5 rounded-sm">
<iconify-icon icon="solar:users-group-rounded-linear" width="16"></iconify-icon>
          Founding Cohort Limited to 10 DJs
        </div>
<h2 className="font-condensed font-extrabold text-4xl md:text-5xl tracking-tighter uppercase mb-8 text-gray-900">
          Secure Your Spot
        </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
<div className="bg-white border border-gray-200 p-6 rounded-sm flex flex-col justify-center shadow-sm">
<div className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">
              Pay in Full
            </div>
<div className="font-condensed font-extrabold text-4xl text-gray-900 tracking-tight">
              $1,500
            </div>
<div className="text-xs text-[#FF5A00] font-bold mt-2">Save $300</div>
</div>
<div className="bg-white border border-gray-200 p-6 rounded-sm flex flex-col justify-center shadow-sm">
<div className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">
              Split Pay
            </div>
<div className="font-condensed font-extrabold text-4xl text-gray-900 tracking-tight">
              2x $900
            </div>
<div className="text-xs text-gray-500 font-medium mt-2">
              Billed 30 days apart
            </div>
</div>
</div>
<p className="text-xs text-gray-500 font-medium mb-10 tracking-wide uppercase">
          Note: Future cohorts will increase in price as we build our case
          studies.
        </p>
</div>
</section>

<section className="py-24 px-6 border-t border-gray-200 bg-white">
<div className="max-w-4xl mx-auto text-center">
<h2 className="font-condensed font-extrabold text-4xl md:text-6xl tracking-tighter uppercase mb-10 leading-[0.95] text-balance text-gray-900">
          You already know how to DJ.
          <br/>
<span className="text-[#FF5A00]">
            Now you need the business system that gets premium clients to pay
            you like a professional.
          </span>
</h2>
<a className="inline-flex items-center justify-center bg-[#FF5A00] text-white font-bold text-base px-10 py-5 rounded-sm hover:opacity-90 transition-all transform hover:scale-[1.02] uppercase tracking-wide shadow-[0_0_30px_rgba(255,90,0,0.2)] w-full sm:w-auto" href="#apply">
          Apply for the Founding Cohort
        </a>
</div>
</section>

<footer className="py-8 border-t border-gray-200 bg-gray-50 text-center px-6 pb-24 md:pb-8">
<p className="text-xs text-gray-500 font-medium uppercase tracking-widest">
        © 2024 Premium Event DJ Booking Bootcamp. All rights reserved.
      </p>
</footer>

<div className="fixed bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur-md border-t border-gray-200 md:hidden z-50">
<a className="flex items-center justify-center w-full bg-[#FF5A00] text-white font-bold text-sm px-6 py-3.5 rounded-sm uppercase tracking-wide shadow-lg" href="#apply">
        Apply Now
      </a>
</div>

    </>
  );
}
