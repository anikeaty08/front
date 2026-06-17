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
      

<header className="sticky z-50 transition-all bg-[#FAF7F2]/90 border-[#E8EEF5] border-b top-0 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex h-24 items-center justify-between">

<div className="">
<img alt="Brand Logo" className="h-14" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aeba6881-9944-496d-a254-577f7320b3a8_320w.png" style={{willChange: 'opacity, transform'}}/>
</div>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-[#1E2430] transition-colors hover:text-[#005fab]" href="#free-guide" style={{willChange: 'opacity, transform'}}>Free Guide</a>
<a className="text-sm font-medium text-[#1E2430] transition-colors hover:text-[#005fab]" href="#who-we-help" style={{willChange: 'opacity, transform'}}>Who Beth Helps</a>
<a className="text-sm font-medium text-[#1E2430] transition-colors hover:text-[#005fab]" href="#about" style={{willChange: 'opacity, transform'}}>About Beth</a>
<a className="text-white text-sm font-medium px-6 py-3 rounded-full transition-colors shadow-sm hover:bg-[#00a9bc] bg-[#005fab]" href="#contact" style={{willChange: 'opacity, transform'}}>
                        Book Free Consultation
                    </a>
</nav>

<button className="lg:hidden text-[#07162F] pt-2 pr-2 pb-2 pl-2" style={{willChange: 'opacity, transform'}}>
<iconify-icon className="text-3xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="lg:pt-24 lg:pb-32 overflow-hidden bg-[#FAF7F2] pt-16 pb-24 relative">

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#E8EEF5]/50 to-transparent -z-10 rounded-bl-[120px]"></div>
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="max-w-xl">
<h1 className="md:text-5xl lg:text-6xl leading-tight text-4xl font-medium text-[#07162F] tracking-tight font-serif" style={{willChange: 'opacity, transform'}}>
      Buying Your First Home Shouldn’t Feel Like Guessing With Your Life Savings.
    </h1>
<p className="mt-6 text-lg md:text-xl text-[#1E2430] font-normal leading-relaxed" style={{willChange: 'opacity, transform'}}>
      Work with Beth Rosenbaum, a licensed mortgage professional who explains the real payment, the real
      costs, and the real next steps before you sign anything.
    </p>
<p className="mt-4 text-base text-[#1E2430]/80 font-light leading-relaxed" style={{willChange: 'opacity, transform'}}>
      Whether you’re just starting, getting ready to make an offer, or already feeling overwhelmed by mortgage
      terms, Beth helps you slow the process down and understand what actually matters.
    </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4">
<a className="flex justify-center items-center transition-all hover:shadow-lg hover:bg-[#00a9bc] text-base font-medium text-white text-center bg-[#005fab] rounded-full pt-4 pr-8 pb-4 pl-8 shadow-md" href="#contact" style={{willChange: 'opacity, transform'}}>
        Book a Free Mortgage Consultation
      </a>
<a className="flex justify-center items-center hover:bg-[#E8EEF5] transition-all text-base font-medium text-[#07162F] text-center bg-transparent border-[#07162F] border rounded-full px-8 py-4" href="#free-guide" style={{willChange: 'opacity, transform'}}>
        Download the Free Guide
      </a>
</div>
<div className="mt-8 pt-6 border-t border-[#E8EEF5]">
<p className="text-xs text-[#1E2430]/60 font-light leading-relaxed" style={{willChange: 'opacity, transform'}}>
        Beth Rosenbaum | NMLS 2697806<br/>
                            LoanWorks, Inc. | NMLS 2506079<br/>
                            Licensed in VA, DC &amp; MD | Equal Housing Opportunity
      </p>
</div>
</div>

<div className="relative w-full aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group" style={{willChange: 'opacity, transform'}}>
<img alt="Couple reviewing finances at home" className="object-center group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30d99c0d-d89c-4a66-a816-acb975fea776_1600w.jpg"/>
<div className="bg-gradient-to-t from-[#07162F]/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>

<div className="lg:left-8 z-10 animate-[bounce_10s_infinite] bg-white/95 border-white/20 border rounded-2xl pt-5 pr-5 pb-5 pl-5 absolute top-8 shadow-xl backdrop-blur-sm">
<div className="flex items-start gap-3">
<div className="bg-[#E8EEF5] text-[#07162F] p-2 rounded-full flex-shrink-0">
<iconify-icon className="text-xl" icon="solar:pie-chart-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<p className="text-sm font-medium text-[#07162F]">Real Payment Review</p>
<p className="text-xs text-[#1E2430]/70 mt-1 font-light">Principal + Interest + Taxes<br/>+ Insurance + HOA + PMI
      </p>
</div>
</div>
</div>

<div className="absolute z-10 right-4 lg:right-8 bottom-8 animate-[bounce_8s_infinite_reverse] bg-white/95 border-white/20 border rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-xl backdrop-blur-sm">
<div className="flex items-start gap-3">
<div className="bg-[#FAF7F2] p-2 rounded-full flex-shrink-0 text-[#005eb1]">
<iconify-icon className="text-xl" icon="solar:calendar-mark-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<p className="text-sm font-medium text-[#07162F]">Free 15-Min Consultation</p>
<p className="text-xs text-[#1E2430]/70 mt-1 font-light">Clear answers before you apply.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-32 overflow-hidden text-white bg-[#07162F] pt-24 pr-6 pb-24 pl-6 relative">
<div className="absolute top-0 right-0 opacity-5 w-96 h-96 transform translate-x-1/3 -translate-y-1/3">
<iconify-icon className="text-9xl scale-[4]" icon="solar:document-text-linear"></iconify-icon>
</div>
<div className="max-w-4xl mx-auto text-center">
<h2 className="md:text-4xl lg:text-5xl leading-tight text-3xl font-medium tracking-tight font-serif" style={{willChange: 'opacity, transform'}}>
                Most first-time buyers don’t need more pressure. They need someone to explain what’s actually happening.
            </h2>
</div>
<div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

<div "="" className="md:text- home can feel exciting in the beginning.&lt;/p&gt; &lt;p class= text-base space-y-6">Then the mortgage process starts.<p style={{willChange: 'opacity, transform'}}>
</p>
<p className="" style={{willChange: 'opacity, transform'}}>Buying a home can feel
        exciting in the beginning.</p>
<p className="" style={{willChange: 'opacity, transform'}}>Suddenly you’re
        hearing
        words like pre-approval, underwriting, DTI, PMI, escrow, appraisal, rate lock,
        earnest money, closing costs, and contingencies.</p>
<p className="" style={{willChange: 'opacity, transform'}}>One website shows one
        payment.<br/>A lender gives you another number.<br/>A real estate agent tells you to move fast.<br/>And now you’re trying to make one of the biggest financial decisions of your life while wondering.
    </p>
<p className="" style={{willChange: 'opacity, transform'}}>You’re not wrong for
        feeling that way.</p>
<p className="" style={{willChange: 'opacity, transform'}}>Most buyers are not
        confused because they are careless. They are confused because nobody slowed down
        long enough to explain the process in plain English.</p>

<div className="transform md:p-10 lg:translate-y-16 text-center bg-[#FAF7F2] border-[#E8EEF5]/20 border rounded-3xl mt-4 pt-8 pr-8 pb-8 pl-8 shadow-2xl translate-y-8" style={{willChange: 'opacity, transform'}}>
<h3 className="font-serif font-medium text-2xl md:text-3xl text-[#07162F] tracking-tight">That is where Beth comes
        in.</h3>
<p className="mt-4 text-base text-[#1E2430] font-normal max-w-2xl mx-auto">
        Beth helps first-time buyers understand the full picture before they move forward — so they can make
        decisions with clarity, confidence, and less stress.
    </p>
</div>
</div><strong "="" className="for feeling that way.&lt;/p&gt; &lt;p class=">

<div className="sticky top-32 hidden md:block">
<div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group" style={{willChange: 'opacity, transform'}}>
<img alt="Modern home interior" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7a0f3692-fe00-4081-a411-da1570d71244_1600w.jpg"/>
<div className="absolute top-0 right-0 bottom-0 left-0">
</div>

</div>
</div>
</strong></div>
</section>

<section className="lg:py-48 bg-white pt-32 pr-6 pb-32 pl-6">
<div className="max-w-7xl mr-auto ml-auto">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="font-serif font-medium text-3xl md:text-4xl text-[#07162F] tracking-tight" style={{willChange: 'opacity, transform'}}>
                    A mortgage process that feels clear, calm, and personal.
                </h2>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

<div className="hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-[#FAF7F2] border-[#E8EEF5] border rounded-3xl" style={{willChange: 'opacity, transform'}}>
<img alt="Real Payment Clarity" className="w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3ab7e4dc-e34e-4e15-a203-d33e9e403e30_1600w.jpg"/>
<div className="md:p-10 pt-8 pr-8 pb-8 pl-8">
<div className="flex text-[#D9A441] bg-white w-14 h-14 rounded-2xl mb-6 shadow-sm items-center justify-center">
<iconify-icon className="text-3xl" height="30" icon="solar:calculator-minimalistic-linear" strokeWidth="1.5" style={{color: 'rgb(0, 95, 171)'}} width="30"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-[#07162F] tracking-tight font-serif mb-3">Real Payment Clarity</h3>
<p className="leading-relaxed text-sm font-light text-[#1E2430]/80">
      Your monthly payment is more than just principal and interest. Beth helps you understand the full number, including
      taxes, insurance, HOA, and PMI when applicable.
    </p>
</div>
</div>

<div className="hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-[#FAF7F2] border-[#E8EEF5] border rounded-3xl" style={{willChange: 'opacity, transform'}}>
<img alt="Plain-English Explanations" className="w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6ec18a4e-7a44-43ac-bace-8e4e204f6f31_1600w.jpg"/>
<div className="md:p-10 pt-8 pr-8 pb-8 pl-8">
<div className="flex text-[#D9A441] bg-white w-14 h-14 rounded-2xl mb-6 shadow-sm items-center justify-center">
<iconify-icon className="text-3xl" height="30" icon="solar:dialog-2-linear" strokeWidth="1.5" style={{color: 'rgb(0, 95, 171)'}} width="30"></iconify-icon>
</div>
<h3 className="font-serif font-medium text-xl text-[#07162F] tracking-tight mb-3">Plain-English Explanations</h3>
<p className="leading-relaxed text-sm font-light text-[#1E2430]/80">
            No rushed calls. No confusing mortgage language. Beth walks you through the terms, timelines, and decisions that matter most.
        </p>
</div>
</div>

<div className="hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-[#FAF7F2] border-[#E8EEF5] border rounded-3xl" style={{willChange: 'opacity, transform'}}>
<img alt="No Last-Minute Surprises" className="w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/601ed727-8943-4841-8387-5f09cb942dbf_1600w.jpg"/>
<div className="md:p-10 pt-8 pr-8 pb-8 pl-8">
<div className="flex text-[#D9A441] bg-white w-14 h-14 rounded-2xl mb-6 shadow-sm items-center justify-center">
<iconify-icon className="text-3xl" height="30" icon="solar:calendar-linear" strokeWidth="1.5" style={{color: 'rgb(0, 95, 171)'}} width="30"></iconify-icon>
</div>
<h3 className="font-serif font-medium text-xl text-[#07162F] tracking-tight mb-3">No Last-Minute Surprises</h3>
<p className="text-sm text-[#1E2430]/80 font-light leading-relaxed">
            Beth helps you understand closing costs, documentation, loan conditions, and next steps earlier in the process — not three days before closing.
        </p>
</div>
</div>

<div className="hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-[#FAF7F2] border-[#E8EEF5] border rounded-3xl" style={{willChange: 'opacity, transform'}}>
<img alt="Fast, Personal Communication" className="w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6abb0e5a-62f9-41bc-8d98-0e702aeb11e8_1600w.jpg"/>
<div className="md:p-10 pt-8 pr-8 pb-8 pl-8">
<div className="flex text-[#D9A441] bg-white w-14 h-14 rounded-2xl mb-6 shadow-sm items-center justify-center">
<iconify-icon className="text-3xl" height="30" icon="lucide:message-circle" strokeWidth="1.5" style={{color: 'rgb(0, 95, 171)'}} width="30"></iconify-icon>
</div>
<h3 className="font-serif font-medium text-xl text-[#07162F] tracking-tight mb-3">Fast, Personal Communication</h3>
<p className="text-sm text-[#1E2430]/80 font-light leading-relaxed">
            When questions come up, you need someone responsive. Beth is known for being personal, helpful, and available when buyers need guidance.
        </p>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-32 bg-[#E8EEF5] pt-24 pr-6 pb-24 pl-6" id="free-guide">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="order-2 lg:order-1 flex justify-center relative">
<div className="md:w-80 w-64 aspect-[3/4] relative transform -rotate-3 hover:rotate-0 transition-transform duration-500">

<img alt="Free First-Time Home Buyer Ebook Guide" className="bg-white w-full h-full object-cover border-white border-4 rounded-2xl shadow-[20px_20px_40px_rgba(7,22,47,0.15)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/645544c5-c4fe-4c6a-8848-ab51f4b0e06f_800w.jpg" style={{willChange: 'opacity, transform'}}/>

<div className="absolute -right-6 top-1/4 bg-white p-3 rounded-lg shadow-lg transform rotate-12">
<iconify-icon className="text-2xl text-[#005eb1]" icon="solar:book-bookmark-linear"></iconify-icon>
</div>
<div className="absolute -left-6 bottom-1/4 bg-[#FAF7F2] px-4 py-2 rounded shadow-md transform -rotate-6 text-sm font-medium text-[#07162F] border-t-4 border-[#D9A441]">
            Free 22-Page Guide
        </div>
</div>
</div>

<div className="order-1 lg:order-2">
<h2 className="font-serif font-medium text-3xl md:text-4xl text-[#07162F] tracking-tight leading-tight" style={{willChange: 'opacity, transform'}}>
                        Free Guide: 14 Things Nobody Told You Before Buying Your First Home
                    </h2>
<p className="mt-4 text-lg text-[#07162F]/80 font-medium" style={{willChange: 'opacity, transform'}}>
                        A plain-English guide for first-time buyers who want to understand the mortgage process before it gets expensive.
                    </p>
<p className="leading-relaxed text-base font-light text-[#1E2430]/80 mt-6" style={{willChange: 'opacity, transform'}}>
                        Before you shop, make an offer, or sign loan documents, learn the hidden details that surprise many first-time buyers.
                    </p>
<p className="mt-6 text-sm font-medium text-[#1E2430]" style={{willChange: 'opacity, transform'}}>Inside the guide, Beth explains:</p>
<ul className="mt-4 space-y-3">
<li className="flex items-start gap-3" style={{willChange: 'opacity, transform'}}>
<iconify-icon className="text-lg mt-0.5 flex-shrink-0 text-[#005eb1]" icon="solar:check-read-linear"></iconify-icon>
<span className="text-sm text-[#1E2430]/80 font-light">Why pre-approval is not the same as final approval</span>
</li>
<li className="flex items-start gap-3" style={{willChange: 'opacity, transform'}}>
<iconify-icon className="text-lg mt-0.5 flex-shrink-0 text-[#005eb1]" icon="solar:check-read-linear"></iconify-icon>
<span className="text-sm text-[#1E2430]/80 font-light">What your real monthly payment includes</span>
</li>
<li className="flex items-start gap-3" style={{willChange: 'opacity, transform'}}>
<iconify-icon className="text-lg mt-0.5 flex-shrink-0 text-[#005eb1]" icon="solar:check-read-linear"></iconify-icon>
<span className="text-sm text-[#1E2430]/80 font-light">How earnest money can be at risk</span>
</li>
<li className="flex items-start gap-3" style={{willChange: 'opacity, transform'}}>
<iconify-icon className="text-lg mt-0.5 flex-shrink-0 text-[#005eb1]" icon="solar:check-read-linear"></iconify-icon>
<span className="text-sm text-[#1E2430]/80 font-light">Why inspection and appraisal are not the same thing</span>
</li>
<li className="flex items-start gap-3" style={{willChange: 'opacity, transform'}}>
<iconify-icon className="text-lg mt-0.5 flex-shrink-0 text-[#005eb1]" icon="solar:check-read-linear"></iconify-icon>
<span className="text-sm text-[#1E2430]/80 font-light">What closing costs really include</span>
</li>
<li className="flex items-start gap-3" style={{willChange: 'opacity, transform'}}>
<iconify-icon className="text-lg mt-0.5 flex-shrink-0 text-[#005eb1]" icon="solar:check-read-linear"></iconify-icon>
<span className="text-sm text-[#1E2430]/80 font-light">How escrow, PMI, taxes, and insurance can affect your payment after closing</span>
</li>
</ul>
<div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
<a className="transition-all hover:bg-[#00a9bc] text-sm font-medium text-white bg-[#005fab] rounded-full px-8 py-4 shadow-md" href="#contact" style={{willChange: 'opacity, transform'}}>
                            Download the Free Guide
                        </a>
<a className="flex justify-center items-center hover:bg-[#E8EEF5] transition-all text-sm font-medium text-[#07162F] text-center bg-transparent border-[#07162F] border rounded-full px-8 py-4" href="#contact" style={{willChange: 'opacity, transform'}}>
    Or Book a Free Consultation With Beth
</a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#FAF7F2] py-24 lg:py-32 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
<div className="">
<h2 className="font-serif font-medium text-3xl md:text-4xl text-[#07162F] tracking-tight leading-tight" style={{willChange: 'opacity, transform'}}>
                        Before you fall in love with a house, understand what you can actually afford.
                    </h2>
<p className="mt-6 text-base text-[#1E2430]/80 font-light leading-relaxed" style={{willChange: 'opacity, transform'}}>
                        A pre-approval letter can help you start shopping, but it is not the same as a full approval. Beth helps you look beyond the surface number and understand what could still affect your loan, your payment, and your comfort level.
                    </p>
</div>
<div className="h-64 lg:h-80 w-full rounded-3xl overflow-hidden shadow-lg relative" style={{willChange: 'opacity, transform'}}>
<img alt="Reviewing a home listing on laptop" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d01eb3d-49e7-4361-89d1-b86b3051f694_1600w.png"/>
<div className="bg-[#07162F]/10 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-2xl shadow-sm border border-[#E8EEF5]" style={{willChange: 'opacity, transform'}}>
<h3 className="font-serif font-medium text-xl text-[#07162F] tracking-tight mb-3">1. Your Real Payment</h3>
<p className="text-sm text-[#1E2430]/80 font-light leading-relaxed">
                        Beth helps you understand the full monthly payment — not just the number that looks good on a listing website.
                    </p>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-[#E8EEF5]" style={{willChange: 'opacity, transform'}}>
<h3 className="font-serif font-medium text-xl text-[#07162F] tracking-tight mb-3">2. Your Comfort Zone</h3>
<p className="text-sm text-[#1E2430]/80 font-light leading-relaxed">
                        The bank may qualify you for one number, but that does not always mean it feels comfortable in real life. Beth helps you compare the loan math with your actual monthly reality.
                    </p>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-[#E8EEF5]" style={{willChange: 'opacity, transform'}}>
<h3 className="font-serif font-medium text-xl text-[#07162F] tracking-tight mb-3">3. Your Next Best Step</h3>
<p className="text-sm text-[#1E2430]/80 font-light leading-relaxed">
                        Whether you are ready now or need a little time, Beth helps you understand what to do next without pressure.
                    </p>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex justify-center items-center bg-[#07162F] text-white text-base font-medium px-8 py-4 rounded-full hover:bg-[#152745] transition-all shadow-md" href="#contact" style={{willChange: 'opacity, transform'}}>
                    Talk Through Your Numbers With Beth
                </a>
</div>
</div>
</section>

<section className="bg-white py-24 lg:py-32 px-6 border-t border-[#E8EEF5]" id="who-we-help">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="font-serif font-medium text-3xl md:text-4xl text-[#07162F] tracking-tight" style={{willChange: 'opacity, transform'}}>
                    Mortgage guidance for different types of buyers.
                </h2>
<p className="mt-4 text-base text-[#1E2430]/80 font-light" style={{willChange: 'opacity, transform'}}>
                    This page is built for first-time buyers, but Beth also helps borrowers with more complex situations.
                </p>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<div className="bg-[#FAF7F2] p-8 md:p-10 rounded-3xl border-2 border-[#07162F] relative shadow-lg transform lg:-translate-y-4" style={{willChange: 'opacity, transform'}}>
<div className="absolute top-0 right-8 -translate-y-1/2 bg-[#07162F] text-white text-xs px-3 py-1 rounded-full font-medium tracking-wide uppercase">Primary Focus</div>
<div className="mb-6 h-40 w-full rounded-xl overflow-hidden">
<img alt="First time buyers" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<h3 className="font-serif font-medium text-2xl text-[#07162F] tracking-tight mb-3">First-Time Home Buyers</h3>
<p className="text-sm text-[#1E2430]/80 font-light mb-6">
                        For buyers who want someone to explain the process clearly before they shop, make an offer, or sign anything.
                    </p>
<p className="text-xs font-medium text-[#07162F] uppercase tracking-wider mb-3">Common questions:</p>
<ul className="space-y-2 mb-8">
<li className="flex items-start gap-2 text-sm text-[#1E2430]/80 font-light"><iconify-icon className="text-[#D9A441] mt-1" icon="solar:minus-linear"></iconify-icon>How much can I comfortably afford?</li>
<li className="flex items-start gap-2 text-sm text-[#1E2430]/80 font-light"><iconify-icon className="text-[#D9A441] mt-1" icon="solar:minus-linear"></iconify-icon>What will my real payment be?</li>
<li className="flex items-start gap-2 text-sm text-[#1E2430]/80 font-light"><iconify-icon className="text-[#D9A441] mt-1" icon="solar:minus-linear"></iconify-icon>How much money do I need before closing?</li>
<li className="flex items-start gap-2 text-sm text-[#1E2430]/80 font-light"><iconify-icon className="text-[#D9A441] mt-1" icon="solar:minus-linear"></iconify-icon>What can still go wrong after pre-approval?</li>
<li className="flex items-start gap-2 text-sm text-[#1E2430]/80 font-light"><iconify-icon className="text-[#D9A441] mt-1" icon="solar:minus-linear"></iconify-icon>What should I ask before making an offer?</li>
</ul>
<a className="block w-full text-center text-white text-sm font-medium px-6 py-3 rounded-full transition-all hover:bg-[#00a9bc] bg-[#005fab]" href="#contact">
                        Book a First-Time Buyer Consultation
                    </a>
</div>

<div className="bg-white p-8 md:p-10 rounded-3xl border border-[#E8EEF5] hover:shadow-md transition-shadow" style={{willChange: 'opacity, transform'}}>
<div className="mb-6 h-40 w-full rounded-xl overflow-hidden bg-[#E8EEF5]">
<img alt="Self employed business owner" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<h3 className="font-serif font-medium text-2xl text-[#07162F] tracking-tight mb-3">Self-Employed Borrowers</h3>
<p className="text-sm text-[#1E2430]/80 font-light mb-6">
                        For business owners, freelancers, consultants, and 1099 earners who need help understanding how lenders may review income.
                    </p>
<p className="text-xs font-medium text-[#07162F] uppercase tracking-wider mb-3">Common questions:</p>
<ul className="space-y-2 mb-8">
<li className="flex items-start gap-2 text-sm text-[#1E2430]/80 font-light"><iconify-icon className="text-[#D9A441] mt-1" icon="solar:minus-linear"></iconify-icon>How will my income be calculated?</li>
<li className="flex items-start gap-2 text-sm text-[#1E2430]/80 font-light"><iconify-icon className="text-[#D9A441] mt-1" icon="solar:minus-linear"></iconify-icon>What documents should I prepare?</li>
<li className="flex items-start gap-2 text-sm text-[#1E2430]/80 font-light"><iconify-icon className="text-[#D9A441] mt-1" icon="solar:minus-linear"></iconify-icon>Why does my tax return matter?</li>
<li className="flex items-start gap-2 text-sm text-[#1E2430]/80 font-light"><iconify-icon className="text-[#D9A441] mt-1" icon="solar:minus-linear"></iconify-icon>What loan options may fit my situation?</li>
<li className="flex items-start gap-2 text-sm text-[#1E2430]/80 font-light"><iconify-icon className="text-[#D9A441] mt-1" icon="solar:minus-linear"></iconify-icon>What can I do before applying?</li>
</ul>
<a className="block w-full text-center bg-white border border-[#07162F] text-[#07162F] text-sm font-medium px-6 py-3 rounded-full hover:bg-[#FAF7F2] transition-all mt-auto" href="#contact">
                        Discuss Self-Employed Mortgage Options
                    </a>
</div>

<div className="bg-white p-8 md:p-10 rounded-3xl border border-[#E8EEF5] hover:shadow-md transition-shadow" style={{willChange: 'opacity, transform'}}>
<div className="mb-6 h-40 w-full rounded-xl overflow-hidden bg-[#E8EEF5]">
<img alt="Real estate investor" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<h3 className="font-serif font-medium text-2xl text-[#07162F] tracking-tight mb-3">Real Estate Investors</h3>
<p className="text-sm text-[#1E2430]/80 font-light mb-6">
                        For buyers exploring rental properties, investment financing, or long-term portfolio growth.
                    </p>
<p className="text-xs font-medium text-[#07162F] uppercase tracking-wider mb-3">Common questions:</p>
<ul className="space-y-2 mb-8">
<li className="flex items-start gap-2 text-sm text-[#1E2430]/80 font-light"><iconify-icon className="text-[#D9A441] mt-1" icon="solar:minus-linear"></iconify-icon>What loan options are available?</li>
<li className="flex items-start gap-2 text-sm text-[#1E2430]/80 font-light"><iconify-icon className="text-[#D9A441] mt-1" icon="solar:minus-linear"></iconify-icon>How much down payment may be needed?</li>
<li className="flex items-start gap-2 text-sm text-[#1E2430]/80 font-light"><iconify-icon className="text-[#D9A441] mt-1" icon="solar:minus-linear"></iconify-icon>How does rental income affect qualification?</li>
<li className="flex items-start gap-2 text-sm text-[#1E2430]/80 font-light"><iconify-icon className="text-[#D9A441] mt-1" icon="solar:minus-linear"></iconify-icon>What should I know before buying?</li>
<li className="flex items-start gap-2 text-sm text-[#1E2430]/80 font-light"><iconify-icon className="text-[#D9A441] mt-1" icon="solar:minus-linear"></iconify-icon>How do I structure financing for growth?</li>
</ul>
<a className="block w-full text-center bg-white border border-[#07162F] text-[#07162F] text-sm font-medium px-6 py-3 rounded-full hover:bg-[#FAF7F2] transition-all" href="#contact">
                        Talk Through Investor Loan Options
                    </a>
</div>
</div>
</div>
</section>

<section className="bg-[#07162F] text-white py-24 lg:py-32 px-6 relative overflow-hidden">

<div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#E8EEF5] via-transparent to-transparent"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center mb-20">
<h2 className="font-serif font-medium text-3xl md:text-4xl text-white tracking-tight" style={{willChange: 'opacity, transform'}}>
                    Here’s what happens when you book a consultation.
                </h2>
</div>
<div className="relative grid md:grid-cols-3 gap-12 lg:gap-8 max-w-5xl mx-auto">

<div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-[#E8EEF5]/30 to-transparent z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-20 h-20 bg-[#FAF7F2] rounded-full flex items-center justify-center text-[#07162F] text-2xl font-serif mb-6 shadow-lg shadow-[#FAF7F2]/10 border-4 border-[#07162F]" style={{willChange: 'opacity, transform'}}>
                        1
                    </div>
<h3 className="font-serif font-medium text-xl tracking-tight mb-3 text-[#FAF7F2]" style={{willChange: 'opacity, transform'}}>Tell Beth Where You Are</h3>
<p className="text-sm text-[#E8EEF5]/80 font-light leading-relaxed px-4" style={{willChange: 'opacity, transform'}}>
                        Are you just starting, already shopping, under contract, self-employed, or looking at an investment property? Beth starts with your situation.
                    </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center mt-8 md:mt-0">
<div className="w-20 h-20 bg-[#FAF7F2] rounded-full flex items-center justify-center text-[#07162F] text-2xl font-serif mb-6 shadow-lg shadow-[#FAF7F2]/10 border-4 border-[#07162F]" style={{willChange: 'opacity, transform'}}>
                        2
                    </div>
<h3 className="font-serif font-medium text-xl tracking-tight mb-3 text-[#FAF7F2]" style={{willChange: 'opacity, transform'}}>Review Your Real Numbers</h3>
<p className="text-sm text-[#E8EEF5]/80 font-light leading-relaxed px-4" style={{willChange: 'opacity, transform'}}>
                        Beth helps you understand the mortgage payment, estimated costs, possible loan options, and what questions you should ask before moving forward.
                    </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center mt-8 md:mt-0">
<div className="w-20 h-20 bg-[#FAF7F2] rounded-full flex items-center justify-center text-[#07162F] text-2xl font-serif mb-6 shadow-lg shadow-[#FAF7F2]/10 border-4 border-[#07162F]" style={{willChange: 'opacity, transform'}}>
                        3
                    </div>
<h3 className="font-serif font-medium text-xl tracking-tight mb-3 text-[#FAF7F2]" style={{willChange: 'opacity, transform'}}>Leave With a Clear Next Step</h3>
<p className="text-sm text-[#E8EEF5]/80 font-light leading-relaxed px-4" style={{willChange: 'opacity, transform'}}>
                        You will know what to prepare, what to avoid, and what to do next — whether you are ready to buy now or still planning.
                    </p>
</div>
</div>
<div className="mt-20 text-center">
<a className="inline-flex justify-center items-center text-white text-base font-medium px-8 py-4 rounded-full transition-all shadow-md hover:shadow-lg hover:bg-[#00a9bc] bg-[#005fab]" href="#contact" style={{willChange: 'opacity, transform'}}>
                    Book a Free Mortgage Consultation
                </a>
</div>
</div>
</section>

<section className="bg-white py-24 px-6 border-b border-[#E8EEF5]">
<div className="max-w-7xl mr-auto ml-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="md:text-4xl text-3xl font-medium text-[#07162F] tracking-tight font-serif" style={{willChange: 'opacity, transform'}}>
                    Real buyer stories will go here soon.
                </h2>
<p className="mt-4 text-sm md:text-base text-[#1E2430]/70 font-light" style={{willChange: 'opacity, transform'}}>
                    Beth is currently collecting buyer stories, client feedback, and partner testimonials. This section is prepared for verified reviews as they become available.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8 gap-x-8 gap-y-8">

<div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E8EEF5] flex flex-col h-full hover:shadow-md transition-shadow" style={{willChange: 'opacity, transform'}}>
<div className="flex justify-between items-start mb-4">
<div className="flex gap-3 items-center">
<img alt="Sarah Jenkins" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop"/>
<div className="">
<h4 className="font-medium text-sm text-[#07162F]">Sarah Jenkins</h4>
<p className="text-[11px] text-[#1E2430]/60 mt-0.5">First-Time Buyer • 2 days ago</p>
</div>
</div>
<iconify-icon className="text-xl" icon="logos:google-icon"></iconify-icon>
</div>
<div className="flex items-center gap-0.5 mb-3">
<iconify-icon className="text-[#FBBC04] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#FBBC04] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#FBBC04] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#FBBC04] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#FBBC04] text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[#1E2430]/80 leading-relaxed font-light">
            "Placeholder for a future review from a first-time buyer who felt more confident after Beth explained the process."
        </p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E8EEF5] flex flex-col h-full hover:shadow-md transition-shadow" style={{willChange: 'opacity, transform'}}>
<div className="flex justify-between items-start mb-4">
<div className="flex gap-3 items-center">
<img alt="Michael Chen" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;h=100&amp;fit=crop"/>
<div className="">
<h4 className="text-sm font-medium text-[#07162F]">Michael Chen</h4>
<p className="text-[11px] text-[#1E2430]/60 mt-0.5">Self-Employed Borrower • 1 week ago</p>
</div>
</div>
<iconify-icon className="text-xl" icon="logos:google-icon"></iconify-icon>
</div>
<div className="flex items-center gap-0.5 mb-3">
<iconify-icon className="text-[#FBBC04] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#FBBC04] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#FBBC04] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#FBBC04] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#FBBC04] text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[#1E2430]/80 leading-relaxed font-light">
            "Placeholder for a future review from a borrower who needed help understanding income documentation."
        </p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E8EEF5] flex flex-col h-full hover:shadow-md transition-shadow" style={{willChange: 'opacity, transform'}}>
<div className="flex justify-between items-start mb-4">
<div className="flex gap-3 items-center">
<img alt="Emily Rodriguez" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop"/>
<div className="">
<h4 className="font-medium text-sm text-[#07162F]">Emily Rodriguez</h4>
<p className="text-[11px] text-[#1E2430]/60 mt-0.5">Realtor Partner • 2 weeks ago</p>
</div>
</div>
<iconify-icon className="text-xl" icon="logos:google-icon"></iconify-icon>
</div>
<div className="flex items-center gap-0.5 mb-3">
<iconify-icon className="text-[#FBBC04] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#FBBC04] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#FBBC04] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#FBBC04] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#FBBC04] text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[#1E2430]/80 leading-relaxed font-light">
            "Placeholder for a future review from a real estate agent who trusted Beth to guide their client through the mortgage process."
        </p>
</div>
</div>
<div className="mt-12 text-center" style={{willChange: 'opacity, transform'}}>
<a className="inline-flex justify-center items-center gap-3 bg-white text-[#07162F] text-sm font-medium px-8 py-4 rounded-full transition-all shadow-sm border border-[#E8EEF5] hover:shadow-md hover:bg-[#FAF7F2]" href="#" style={{willChange: 'opacity, transform'}}>
<iconify-icon className="text-xl" icon="logos:google-icon"></iconify-icon>
                    View More Google Reviews
                </a>
</div>
</div>
</section>

<section className="lg:py-32 bg-[#FAF7F2] pt-24 pr-6 pb-24 pl-6" id="about">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-12 gap-x-16 gap-y-16 items-start">

<div className="lg:col-span-5 relative">

<div className="aspect-[4/5] overflow-hidden z-10 bg-white border-white border-4 rounded-3xl relative shadow-xl" style={{willChange: 'opacity, transform'}}>
<img alt="Beth Rosenbaum" className="object-center w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/84cfe4bc-589a-4adf-aae7-e74320b6ac92_1600w.jpg"/>
</div>

<div className="absolute -bottom-6 -right-6 w-full h-full bg-[#E8EEF5] rounded-3xl -z-10" style={{willChange: 'opacity, transform'}}></div>
</div>

<div className="lg:col-span-7">
<h2 className="font-serif font-medium text-3xl md:text-4xl text-[#07162F] tracking-tight" style={{willChange: 'opacity, transform'}}>Meet Beth Rosenbaum</h2>
<p className="mt-3 text-lg md:text-xl text-[#D9A441] font-medium font-serif italic" style={{willChange: 'opacity, transform'}}>
                        A mortgage professional who believes buyers deserve clear answers before they make big decisions.
                    </p>
<div className="mt-8 space-y-4 text-base text-[#1E2430]/80 font-light leading-relaxed">
<p className="" style={{willChange: 'opacity, transform'}}>Beth Rosenbaum helps buyers understand the mortgage process in a way that feels practical, personal, and easy to follow.</p>
<p className="" style={{willChange: 'opacity, transform'}}>She works with first-time home buyers, self-employed borrowers, and real estate investors across VA, DC, and MD. Her approach is simple: explain the numbers, answer the questions, and help clients understand their options before they move forward.</p>
<p className="" style={{willChange: 'opacity, transform'}}>For first-time buyers especially, Beth focuses on education. She helps buyers understand what pre-approval really means, what costs to expect, how monthly payments are built, and what can happen between contract and closing.</p>
<p className="font-medium text-[#07162F] text-lg pt-4" style={{willChange: 'opacity, transform'}}>The goal is not to rush you into a loan.</p>
<p className="text-lg font-medium text-[#07162F]" style={{willChange: 'opacity, transform'}}>The goal is to help you feel prepared.</p>
</div>

<div className="mt-10 inline-block bg-white border border-[#E8EEF5] rounded-2xl p-6 shadow-sm" style={{willChange: 'opacity, transform'}}>
<p className="text-sm text-[#1E2430]/70 font-light leading-relaxed">
                            Beth Rosenbaum | NMLS 2697806<br/>
                            LoanWorks, Inc. NMLS 2506079<br/>
                            Licensed in VA, DC &amp; MD<br/>
                            Equal Housing Opportunity
                        </p>
</div>
<div className="mt-10">
<a className="inline-flex justify-center items-center bg-[#07162F] text-white text-base font-medium px-8 py-4 rounded-full hover:bg-[#152745] transition-all shadow-md" href="#contact" style={{willChange: 'opacity, transform'}}>
                            Book a Free Consultation With Beth
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 px-6 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Peaceful home interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&amp;fit=crop&amp;w=1600&amp;q=80" style={{willChange: 'opacity, transform'}}/>
<div className="absolute inset-0 bg-[#07162F]/90 backdrop-blur-sm"></div>
</div>
<div className="max-w-4xl mx-auto relative z-10 text-center">
<h2 className="font-serif font-medium text-3xl md:text-5xl text-white tracking-tight leading-tight" style={{willChange: 'opacity, transform'}}>
                Have questions before you apply? Start with a conversation.
            </h2>
<p className="mt-6 text-base md:text-lg text-[#E8EEF5]/90 font-light leading-relaxed max-w-2xl mx-auto" style={{willChange: 'opacity, transform'}}>
                You do not need to have everything figured out before speaking with Beth. Bring your questions. Bring your numbers. Bring the house you are considering. Or simply bring the feeling that you are not sure where to start.
            </p>
<p className="mt-4 text-base md:text-lg text-[#E8EEF5]/90 font-light leading-relaxed max-w-2xl mx-auto" style={{willChange: 'opacity, transform'}}>
                Beth will help you understand what matters, what to prepare, and what your next step should be.
            </p>
<div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
<a className="w-full sm:w-auto flex justify-center items-center text-white text-base font-medium px-8 py-4 rounded-full transition-all shadow-lg hover:bg-[#00a9bc] bg-[#005fab]" href="#contact" style={{willChange: 'opacity, transform'}}>
                    Book a Free Mortgage Consultation
                </a>
<a className="w-full sm:w-auto flex justify-center items-center bg-transparent border border-white/30 text-white text-base font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-all" href="#free-guide" style={{willChange: 'opacity, transform'}}>
                    Download the Free First-Time Buyer Guide
                </a>
</div>
<p className="mt-8 text-sm text-[#E8EEF5]/70 font-light" style={{willChange: 'opacity, transform'}}>
                No pressure. No confusing jargon. Just a clear conversation about your mortgage options.
            </p>
</div>
</section>

<section className="bg-[#FAF7F2] py-24 lg:py-32 px-6" id="contact">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

<div className="">
<h2 className="font-serif font-medium text-3xl md:text-4xl text-[#07162F] tracking-tight mb-4" style={{willChange: 'opacity, transform'}}>
                        Tell Beth where you are in the home-buying process.
                    </h2>
<p className="text-base text-[#1E2430]/80 font-light leading-relaxed mb-10" style={{willChange: 'opacity, transform'}}>
                        Complete the form below and Beth will follow up to help you understand your next step.
                    </p>
<div className="bg-white p-8 rounded-3xl border border-[#E8EEF5] shadow-sm" style={{willChange: 'opacity, transform'}}>
<h3 className="font-medium text-base text-[#07162F] mb-4">Beth can help you understand:</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="bg-[#E8EEF5] p-1 rounded-full flex-shrink-0 mt-0.5">
<iconify-icon className="text-[#07162F] text-sm" icon="solar:check-linear"></iconify-icon>
</div>
<span className="text-sm text-[#1E2430]/80 font-light">Your real monthly payment</span>
</li>
<li className="flex items-start gap-3">
<div className="bg-[#E8EEF5] p-1 rounded-full flex-shrink-0 mt-0.5">
<iconify-icon className="text-[#07162F] text-sm" icon="solar:check-linear"></iconify-icon>
</div>
<span className="text-sm text-[#1E2430]/80 font-light">Your estimated cash needed to close</span>
</li>
<li className="flex items-start gap-3">
<div className="bg-[#E8EEF5] p-1 rounded-full flex-shrink-0 mt-0.5">
<iconify-icon className="text-[#07162F] text-sm" icon="solar:check-linear"></iconify-icon>
</div>
<span className="text-sm text-[#1E2430]/80 font-light">What pre-approval does and does not mean</span>
</li>
<li className="flex items-start gap-3">
<div className="bg-[#E8EEF5] p-1 rounded-full flex-shrink-0 mt-0.5">
<iconify-icon className="text-[#07162F] text-sm" icon="solar:check-linear"></iconify-icon>
</div>
<span className="text-sm text-[#1E2430]/80 font-light">Which questions to ask before making an offer</span>
</li>
<li className="flex items-start gap-3">
<div className="bg-[#E8EEF5] p-1 rounded-full flex-shrink-0 mt-0.5">
<iconify-icon className="text-[#07162F] text-sm" icon="solar:check-linear"></iconify-icon>
</div>
<span className="text-sm text-[#1E2430]/80 font-light">What your next step should be</span>
</li>
</ul>
</div>
</div>

<div className="bg-white p-8 md:p-10 rounded-3xl shadow-md border border-[#E8EEF5]" style={{willChange: 'opacity, transform'}}>
<form action="#" className="space-y-6" method="POST">
<div className="grid grid-cols-2 gap-6">
<div className="">
<label className="block text-xs font-medium text-[#1E2430] mb-2" htmlFor="first-name">First Name</label>
<input className="w-full bg-[#FAF7F2] border border-[#E8EEF5] rounded-xl px-4 py-3 text-sm text-[#1E2430] focus:outline-none focus:ring-1 focus:ring-[#07162F] focus:border-[#07162F] transition-all placeholder:text-[#1E2430]/40" id="first-name" name="first-name" placeholder="Jane" type="text"/>
</div>
<div className="">
<label className="block text-xs font-medium text-[#1E2430] mb-2" htmlFor="last-name">Last Name</label>
<input className="w-full bg-[#FAF7F2] border border-[#E8EEF5] rounded-xl px-4 py-3 text-sm text-[#1E2430] focus:outline-none focus:ring-1 focus:ring-[#07162F] focus:border-[#07162F] transition-all placeholder:text-[#1E2430]/40" id="last-name" name="last-name" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-[#1E2430] mb-2" htmlFor="email">Email Address</label>
<input className="w-full bg-[#FAF7F2] border border-[#E8EEF5] rounded-xl px-4 py-3 text-sm text-[#1E2430] focus:outline-none focus:ring-1 focus:ring-[#07162F] focus:border-[#07162F] transition-all placeholder:text-[#1E2430]/40" id="email" name="email" placeholder="jane@example.com" type="email"/>
</div>
<div className="grid grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-[#1E2430] mb-2" htmlFor="phone">Phone Number</label>
<input className="w-full bg-[#FAF7F2] border border-[#E8EEF5] rounded-xl px-4 py-3 text-sm text-[#1E2430] focus:outline-none focus:ring-1 focus:ring-[#07162F] focus:border-[#07162F] transition-all placeholder:text-[#1E2430]/40" id="phone" name="phone" placeholder="(555) 000-0000" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-[#1E2430] mb-2" htmlFor="state">State</label>
<div className="relative">
<select className="appearance-none w-full bg-[#FAF7F2] border border-[#E8EEF5] rounded-xl px-4 py-3 text-sm text-[#1E2430] focus:outline-none focus:ring-1 focus:ring-[#07162F] focus:border-[#07162F] transition-all pr-10 cursor-pointer" id="state" name="state">
<option disabled="" selected="" value="">Select...</option>
<option value="VA">Virginia</option>
<option value="DC">Washington DC</option>
<option value="MD">Maryland</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-[#1E2430]/50 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-[#1E2430] mb-2" htmlFor="buyer-type">What best describes you?</label>
<div className="relative">
<select className="appearance-none w-full bg-[#FAF7F2] border border-[#E8EEF5] rounded-xl px-4 py-3 text-sm text-[#1E2430] focus:outline-none focus:ring-1 focus:ring-[#07162F] focus:border-[#07162F] transition-all pr-10 cursor-pointer" id="buyer-type" name="buyer-type">
<option disabled="" selected="" value="">Select an option...</option>
<option value="first-time">I’m buying my first home</option>
<option value="self-employed">I’m self-employed</option>
<option value="investor">I’m looking at an investment property</option>
<option value="refinance">I’m refinancing</option>
<option value="unsure">I’m not sure yet</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-[#1E2430]/50 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="">
<label className="block text-xs font-medium text-[#1E2430] mb-2" htmlFor="message">What question do you want Beth to help you answer?</label>
<textarea className="w-full bg-[#FAF7F2] border border-[#E8EEF5] rounded-xl px-4 py-3 text-sm text-[#1E2430] focus:outline-none focus:ring-1 focus:ring-[#07162F] focus:border-[#07162F] transition-all placeholder:text-[#1E2430]/40 resize-none" id="message" name="message" placeholder="I'm trying to figure out..." rows="3"></textarea>
</div>
<button className="w-full text-white text-base font-medium px-8 py-4 rounded-full transition-all shadow-md mt-4 hover:bg-[#00a9bc] bg-[#005fab]" type="submit">
                            Request My Free Consultation
                        </button>
<p className="text-[10px] text-[#1E2430]/50 font-light leading-relaxed text-center mt-4">
                            By submitting this form, you agree to be contacted by Beth Rosenbaum and/or LoanWorks regarding your inquiry. Message and data rates may apply. This is not a loan application or commitment to lend.
                        </p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#07162F] text-white py-16 px-6">
<div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">

<div className="lg:col-span-4">
<div className="font-serif font-medium text-2xl text-white tracking-tighter leading-none mb-6">LoanWorks.ai</div>
<div className="text-xs text-[#E8EEF5]/70 font-light leading-relaxed space-y-1">
<p style={{willChange: 'opacity, transform'}}>Beth Rosenbaum | NMLS 2697806</p>
<p style={{willChange: 'opacity, transform'}}>LoanWorks, Inc. | NMLS 2506079</p>
<p style={{willChange: 'opacity, transform'}}>Licensed in VA, DC &amp; MD</p>
<div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/10">
<iconify-icon className="text-lg" icon="solar:home-angle-linear"></iconify-icon>
<span>Equal Housing Opportunity | <a className="underline hover:text-white transition-colors" href="https://nmlsconsumeraccess.org/" rel="noopener" style={{willChange: 'opacity, transform'}} target="_blank">nmlsconsumeraccess.org</a></span>
</div>
</div>
</div>

<div className="lg:col-span-8">
<div className="text-[10px] md:text-xs text-[#E8EEF5]/50 font-light leading-relaxed space-y-4">
<p style={{willChange: 'opacity, transform'}}>
                        All loans are subject to credit approval, property approval, underwriting, investor guidelines, and program availability. Program terms and conditions are subject to change without notice. This website is for informational purposes only and is not a commitment to lend or guarantee of approval.
                    </p>
<p style={{willChange: 'opacity, transform'}}>
                        LoanWorks is not affiliated with or endorsed by any government agency. FHA, VA, USDA, and other loan programs are subject to applicable agency guidelines and borrower/property eligibility. Options may be available for qualified buyers.
                    </p>
<p style={{willChange: 'opacity, transform'}}>
                        © 2024 LoanWorks, Inc. All rights reserved.
                    </p>
</div>
</div>
</div>
</footer>

    </>
  );
}
