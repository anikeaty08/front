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
      

<div className="bg-[#00A434] text-white text-center p-3 font-['Lato'] text-sm md:text-base font-semibold tracking-wide">
      ATTENTION: The Tallow Market Is Exploding. Secure Your Blueprint Today.
    </div>

<header className="w-full bg-[#FFFFFF] border-b border-[#F9F9F9] py-4 px-4 sticky top-0 z-50">
<div className="max-w-[1170px] mx-auto flex justify-between items-center">
<div className="font-['Montserrat'] font-semibold tracking-tighter text-xl text-[#00A434]">
          TALLOW
          <span className="text-[#2D2D2D]">BIZ</span>
</div>
<a className="hidden md:flex bg-[#F9F9F9] text-[#2D2D2D] hover:bg-gray-100 px-6 py-2 rounded-full font-['Montserrat'] font-medium text-sm transition-colors items-center gap-2" href="#checkout">
          Get Started
          <iconify-icon height="1.5em" icon="solar:arrow-right-linear" width="1.5em"></iconify-icon>
</a>
</div>
</header>

<section className="bg-[#FFFFFF] pt-12 pb-20 px-4">
<div className="max-w-[1170px] mx-auto flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F9F9F9] rounded-full text-[#00A434] font-['Montserrat'] text-xs font-semibold uppercase tracking-wider mb-8 border border-[#2D5448]/10">
<iconify-icon height="1.2em" icon="solar:star-fall-linear" width="1.2em"></iconify-icon>
          The Ultimate Industry Guide
        </div>
<h1 className="font-['Montserrat'] text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-[#2D2D2D] max-w-4xl mb-6">
          Turn Raw Suet Into A
          <span className="text-[#00A434] relative whitespace-nowrap">
            Highly Profitable
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#00A434]/20" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4"></path>
</svg>
</span>
          Tallow Business
        </h1>
<p className="font-['Lato'] text-lg leading-[1.3] text-[#2D2D2D]/80 max-w-[720px] mb-12">
          Discover the step-by-step blueprint to sourcing, rendering, and
          selling premium beef tallow products in a rapidly growing, high-margin
          market.
        </p>

<div className="w-full max-w-4xl aspect-video bg-gray-900 relative rounded-none overflow-hidden mb-12 border border-[#2D5448]/20 group cursor-pointer shadow-sm">

<img alt="Video presentation" className="w-full h-full object-cover opacity-70 transition-opacity group-hover:opacity-60" src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/HNGx6gH5afyt3hzbojh1/media/67bd89aad5a8ef4f397ba363.png"/>

<div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
<div className="absolute top-4 left-4 bg-black/70 text-white font-['Lato'] text-xs px-3 py-1.5 rounded-sm flex items-center gap-2 backdrop-blur-md">
<iconify-icon icon="solar:volume-loud-linear"></iconify-icon>
              Enable Sound
            </div>
<div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md relative border border-white/20 group-hover:bg-white/20 transition-all">

<div className="absolute inset-0 rounded-full border-2 border-white animate-ping opacity-40"></div>
<iconify-icon className="text-white text-4xl ml-1" icon="solar:play-linear"></iconify-icon>
</div>
</div>
</div>

<a className="bg-[#C5A669] text-[#2D2D2D] rounded-[50px] px-8 py-4 font-['Montserrat'] flex flex-col items-center justify-center w-full max-w-md elevate-hover rocking-animation group relative overflow-hidden" href="#checkout">
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
<span className="text-xl font-semibold tracking-tight uppercase relative z-10 flex items-center gap-2">
            Get The Complete Guide
            <iconify-icon className="mt-0.5" icon="solar:arrow-right-linear"></iconify-icon>
</span>
<span className="font-['Lato'] text-sm font-normal normal-case mt-1 opacity-90 relative z-10">
            Instant Digital Access • Just $47
          </span>
</a>
<div className="flex items-center gap-4 mt-6 text-sm text-[#2D2D2D]/60 font-['Lato']">
<span className="flex items-center gap-1">
<iconify-icon className="text-[#00A434] text-lg" icon="solar:shield-check-linear"></iconify-icon>
            60-Day Guarantee
          </span>
<span className="flex items-center gap-1">
<iconify-icon className="text-[#00A434] text-lg" icon="solar:lock-password-linear"></iconify-icon>
            Secure Checkout
          </span>
</div>
</div>
</section>

<section className="bg-[#F9F9F9] py-20 px-4 border-t border-[#2D5448]/10">
<div className="max-w-[720px] mx-auto text-left">
<h2 className="font-['Montserrat'] text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-[#2D2D2D] mb-8 text-center">
          Why The Tallow Industry Is Booming
        </h2>
<div className="space-y-6 font-['Lato'] text-lg leading-[1.3] text-[#2D2D2D]">
<p>
            Consumers are rapidly moving away from chemical-laden seed oils and
            synthetic skincare. They are actively searching for natural,
            ancestral alternatives, and beef tallow is at the very top of that
            list.
          </p>
<p>
            Despite the surging demand, there is a massive shortage of
            high-quality, properly rendered tallow suppliers. Most local markets
            and online boutiques are completely unserved.
          </p>

<div className="bg-[#00A434] text-white p-8 my-10 border-l-4 border-[#C5A669] shadow-sm">
<h3 className="font-['Abhaya Libre'] text-2xl font-semibold mb-3 tracking-tight">
              The Golden Opportunity
            </h3>
<p className="text-white/90 text-base leading-[1.3]">
              Raw suet is often considered waste by butchers and can be acquired
              for pennies on the dollar. Once properly purified and rendered,
              that same fat commands premium prices in both the culinary and
              cosmetic markets.
            </p>
</div>
<h3 className="font-['Montserrat'] text-2xl font-semibold tracking-tight text-[#2D2D2D] mt-12 mb-6">
            What You Will Discover Inside:
          </h3>
<ul className="space-y-5">
<li className="flex items-start gap-4 p-4 bg-white border border-[#2D5448]/10 rounded-[5px] transition-colors hover:border-[#00A434]/30">
<div className="bg-[#F9F9F9] p-2 rounded-full text-[#00A434] shrink-0 mt-0.5">
<iconify-icon height="1.5em" icon="solar:magnifer-linear" width="1.5em"></iconify-icon>
</div>
<div>
<strong className="font-['Montserrat'] text-[#2D2D2D] block mb-1">
                  Sourcing Secrets
                </strong>
<span className="text-base text-[#2D2D2D]/80">
                  How to find consistent, high-quality grass-fed suet from local
                  farms and butchers, often for free or at minimal cost.
                </span>
</div>
</li>
<li className="flex items-start gap-4 p-4 bg-white border border-[#2D5448]/10 rounded-[5px] transition-colors hover:border-[#00A434]/30">
<div className="bg-[#F9F9F9] p-2 rounded-full text-[#00A434] shrink-0 mt-0.5">
<iconify-icon height="1.5em" icon="solar:waterdrops-linear" width="1.5em"></iconify-icon>
</div>
<div>
<strong className="font-['Montserrat'] text-[#2D2D2D] block mb-1">
                  The Pure-White Rendering Method
                </strong>
<span className="text-base text-[#2D2D2D]/80">
                  Our proprietary wet-rendering technique that completely
                  removes the "beefy" smell, yielding odorless, snow-white
                  tallow perfect for skincare.
                </span>
</div>
</li>
<li className="flex items-start gap-4 p-4 bg-white border border-[#2D5448]/10 rounded-[5px] transition-colors hover:border-[#00A434]/30">
<div className="bg-[#F9F9F9] p-2 rounded-full text-[#00A434] shrink-0 mt-0.5">
<iconify-icon height="1.5em" icon="solar:shop-linear" width="1.5em"></iconify-icon>
</div>
<div>
<strong className="font-['Montserrat'] text-[#2D2D2D] block mb-1">
                  Packaging &amp; Profitability
                </strong>
<span className="text-base text-[#2D2D2D]/80">
                  Strategies for jarring, labeling, and pricing your products to
                  maximize margins in a premium market.
                </span>
</div>
</li>
</ul>
</div>
</div>
</section>
<section className="bg-[#FFFFFF] py-20 px-4" data-element-id="curriculum-section">
<div className="max-w-[720px] mx-auto">
<h2 className="font-['Montserrat'] text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-[#2D2D2D] mb-12 text-center">
          Here Is Exactly What You Get Inside
        </h2>
<div className="space-y-6">
<div className="bg-[#F9F9F9] border border-[#2D5448]/10 rounded-[5px] p-6 hover:border-[#00A434]/30 transition-colors shadow-sm">
<h3 className="font-['Montserrat'] text-xl font-semibold text-[#00A434] mb-2 flex items-center gap-2">
<iconify-icon height="1.2em" icon="solar:box-linear" width="1.2em"></iconify-icon>
              Module 1: Sourcing Liquid Gold
            </h3>
<p className="font-['Lato'] text-[#2D2D2D]/80 leading-relaxed">
              Learn exactly what to ask your local butcher, how to identify the
              highest quality leaf fat (suet), and scripts to negotiate bulk
              pricing—or even get it for free.
            </p>
</div>
<div className="bg-[#F9F9F9] border border-[#2D5448]/10 rounded-[5px] p-6 hover:border-[#00A434]/30 transition-colors shadow-sm">
<h3 className="font-['Montserrat'] text-xl font-semibold text-[#00A434] mb-2 flex items-center gap-2">
<iconify-icon height="1.2em" icon="solar:fire-linear" width="1.2em"></iconify-icon>
              Module 2: The Perfect Purify &amp; Render
            </h3>
<p className="font-['Lato'] text-[#2D2D2D]/80 leading-relaxed">
              Master the wet-rendering method. We show you the exact temperature
              control and salt-purification steps to remove all impurities and
              'beefy' smell, leaving you with odorless, snow-white tallow.
            </p>
</div>
<div className="bg-[#F9F9F9] border border-[#2D5448]/10 rounded-[5px] p-6 hover:border-[#00A434]/30 transition-colors shadow-sm">
<h3 className="font-['Montserrat'] text-xl font-semibold text-[#00A434] mb-2 flex items-center gap-2">
<iconify-icon height="1.2em" icon="solar:magic-stick-3-linear" width="1.2em"></iconify-icon>
              Module 3: Whipped Balms &amp; Infusions
            </h3>
<p className="font-['Lato'] text-[#2D2D2D]/80 leading-relaxed">
              Step-by-step formulations for creating luxurious whipped tallow
              balms. Learn carrier oil ratios, essential oil blending, and
              herbal infusions that customers go crazy for.
            </p>
</div>
<div className="bg-[#F9F9F9] border border-[#2D5448]/10 rounded-[5px] p-6 hover:border-[#00A434]/30 transition-colors shadow-sm">
<h3 className="font-['Montserrat'] text-xl font-semibold text-[#00A434] mb-2 flex items-center gap-2">
<iconify-icon height="1.2em" icon="solar:tag-linear" width="1.2em"></iconify-icon>
              Module 4: Branding &amp; Packaging
            </h3>
<p className="font-['Lato'] text-[#2D2D2D]/80 leading-relaxed">
              How to design premium labels, source the best amber glass jars,
              and package your products so they command $30-$50+ per jar in the
              premium organic skincare market.
            </p>
</div>
<div className="bg-[#F9F9F9] border border-[#2D5448]/10 rounded-[5px] p-6 hover:border-[#00A434]/30 transition-colors shadow-sm">
<h3 className="font-['Montserrat'] text-xl font-semibold text-[#00A434] mb-2 flex items-center gap-2">
<iconify-icon height="1.2em" icon="solar:graph-up-linear" width="1.2em"></iconify-icon>
              Module 5: Marketing &amp; Sales Strategy
            </h3>
<p className="font-['Lato'] text-[#2D2D2D]/80 leading-relaxed">
              Launch your brand online using social media, dominate local
              farmer's markets, and set up a highly-converting Shopify store to
              automate your sales and scale up.
            </p>
</div>
</div>
</div>
</section>
<section className="bg-[#2D5448] py-24 px-4 text-white relative overflow-hidden" data-element-id="bonus-section">
<div className="max-w-[900px] mx-auto text-center relative z-10">
<h2 className="font-['Montserrat'] text-3xl md:text-4xl font-semibold leading-tight tracking-tight mb-12">
          Order Today &amp; Get These Fast Action Bonuses
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
<div className="bg-[#1E3B32] p-8 rounded-[5px] border border-white/10 relative overflow-hidden group hover:border-[#C5A669]/50 transition-colors">
<div className="absolute -right-4 -top-4 text-white/5 group-hover:text-[#C5A669]/10 transition-colors">
<iconify-icon height="8em" icon="solar:document-text-bold" width="8em"></iconify-icon>
</div>
<div className="text-[#C5A669] font-['Montserrat'] font-bold tracking-widest text-sm uppercase mb-3 flex items-center gap-2">
<iconify-icon icon="solar:gift-linear"></iconify-icon>
              Bonus #1 ($97 Value)
            </div>
<h3 className="font-['Montserrat'] text-2xl font-semibold mb-4 text-white">
              Top 10 Best-Selling Recipes
            </h3>
<p className="font-['Lato'] text-white/80 leading-relaxed relative z-10">
              Get the exact formulation ratios for our top-selling products,
              including Frankincense Anti-Aging Balm, Lavender Sleep Whip, and
              Eczema Relief Cream.
            </p>
</div>
<div className="bg-[#1E3B32] p-8 rounded-[5px] border border-white/10 relative overflow-hidden group hover:border-[#C5A669]/50 transition-colors">
<div className="absolute -right-4 -top-4 text-white/5 group-hover:text-[#C5A669]/10 transition-colors">
<iconify-icon height="8em" icon="solar:book-bookmark-bold" width="8em"></iconify-icon>
</div>
<div className="text-[#C5A669] font-['Montserrat'] font-bold tracking-widest text-sm uppercase mb-3 flex items-center gap-2">
<iconify-icon icon="solar:gift-linear"></iconify-icon>
              Bonus #2 ($47 Value)
            </div>
<h3 className="font-['Montserrat'] text-2xl font-semibold mb-4 text-white">
              Ultimate Supplier Rolodex
            </h3>
<p className="font-['Lato'] text-white/80 leading-relaxed relative z-10">
              Skip the trial and error. We give you direct links to our trusted
              suppliers for jars, waterproof labels, organic carrier oils, and
              rendering equipment.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-[#FFFFFF] py-24 px-4">
<div className="max-w-[1170px] mx-auto">
<div className="text-center mb-16">
<h2 className="font-['Montserrat'] text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-[#2D2D2D] mb-4">
            Success Stories From Our Community
          </h2>
<p className="font-['Lato'] text-lg text-[#2D2D2D]/70 max-w-2xl mx-auto">
            See how others are turning this traditional knowledge into thriving
            modern businesses.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="border border-[#2D5448]/10 rounded-[5px] p-8 bg-[#F9F9F9] flex flex-col hover:border-[#00A434]/20 transition-colors">
<div className="flex text-[#C5A669] mb-6 gap-1">
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
</div>
<p className="font-['Lato'] text-base leading-[1.4] text-[#2D2D2D] mb-8 flex-grow">
              "This guide completely demystified the rendering process. Within
              two weeks, I had my first batch of vanilla-infused tallow balm
              sold out at the local farmer's market. The wet-rendering technique
              alone is worth ten times the price."
            </p>
<div className="flex items-center gap-4 pt-6 border-t border-[#2D5448]/10">
<div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm">
<img alt="Sarah J." className="w-full h-full object-cover" src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_320/u_https://assets.cdn.filesafe.space/NIC5SIslZq2FgXa2qptz/media/1d281a75-c7ef-41ac-ad8d-c839ec0d7414.png"/>
</div>
<div>
<div className="font-['Montserrat'] font-semibold text-sm text-[#2D2D2D]">
                  Sarah Jenkins
                </div>
<div className="font-['Lato'] text-xs text-[#2D2D2D]/60 mt-0.5">
                  Founder, Heritage Skincare
                </div>
</div>
</div>
</div>

<div className="border border-[#2D5448]/10 rounded-[5px] p-8 bg-[#F9F9F9] flex flex-col hover:border-[#00A434]/20 transition-colors">
<div className="flex text-[#C5A669] mb-6 gap-1">
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
</div>
<p className="font-['Lato'] text-base leading-[1.4] text-[#2D2D2D] mb-8 flex-grow">
              "I'm a butcher who was throwing away hundreds of pounds of suet a
              month. This blueprint showed me exactly how to process it
              efficiently and tap into the local homesteading community. It's
              added a significant new revenue stream to my shop."
            </p>
<div className="flex items-center gap-4 pt-6 border-t border-[#2D5448]/10">
<div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm">
<img alt="Mark T." className="w-full h-full object-cover grayscale" src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_320/u_https://assets.cdn.filesafe.space/NIC5SIslZq2FgXa2qptz/media/338f04f0-e7b2-43c1-a05e-cca8cf2eaf5d.png"/>
</div>
<div>
<div className="font-['Montserrat'] font-semibold text-sm text-[#2D2D2D]">
                  Mark Thompson
                </div>
<div className="font-['Lato'] text-xs text-[#2D2D2D]/60 mt-0.5">
                  Master Butcher
                </div>
</div>
</div>
</div>

<div className="border border-[#2D5448]/10 rounded-[5px] p-8 bg-[#F9F9F9] flex flex-col hover:border-[#00A434]/20 transition-colors">
<div className="flex text-[#C5A669] mb-6 gap-1">
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-linear" width="1.2em"></iconify-icon>
</div>
<p className="font-['Lato'] text-base leading-[1.4] text-[#2D2D2D] mb-8 flex-grow">
              "I had no business experience, just a passion for non-toxic
              living. The marketing section of this guide was a game-changer. I
              followed the exact pricing model and made back the cost of this
              guide with my first three jars."
            </p>
<div className="flex items-center gap-4 pt-6 border-t border-[#2D5448]/10">
<div className="w-12 h-12 bg-[#00A434]/10 rounded-full flex items-center justify-center shrink-0 border-2 border-white shadow-sm text-[#00A434] font-['Montserrat'] font-semibold">
                EL
              </div>
<div>
<div className="font-['Montserrat'] font-semibold text-sm text-[#2D2D2D]">
                  Elena R.
                </div>
<div className="font-['Lato'] text-xs text-[#2D2D2D]/60 mt-0.5">
                  Independent Artisan
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#FFFFFF] py-24 px-4" data-element-id="faq-section">
<div className="max-w-[720px] mx-auto">
<h2 className="font-['Montserrat'] text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-[#2D2D2D] mb-12 text-center">
          Frequently Asked Questions
        </h2>
<div className="space-y-4">
<div className="border border-[#2D5448]/10 rounded-[5px] p-6 bg-[#F9F9F9] hover:bg-white transition-colors">
<h3 className="font-['Montserrat'] text-lg font-semibold text-[#2D2D2D] mb-3 flex items-start gap-3">
<iconify-icon className="text-[#00A434] text-xl shrink-0 mt-0.5" icon="solar:question-circle-linear"></iconify-icon>
              Do I need expensive equipment to get started?
            </h3>
<p className="font-['Lato'] text-[#2D2D2D]/80 ml-8">
              Not at all. You can start rendering your first batches using basic
              kitchen equipment: a large stainless steel pot, a fine mesh
              strainer, cheesecloth, and a stovetop or slow cooker.
            </p>
</div>
<div className="border border-[#2D5448]/10 rounded-[5px] p-6 bg-[#F9F9F9] hover:bg-white transition-colors">
<h3 className="font-['Montserrat'] text-lg font-semibold text-[#2D2D2D] mb-3 flex items-start gap-3">
<iconify-icon className="text-[#00A434] text-xl shrink-0 mt-0.5" icon="solar:question-circle-linear"></iconify-icon>
              How long does the rendering process take?
            </h3>
<p className="font-['Lato'] text-[#2D2D2D]/80 ml-8">
              Active prep time is only about 30 minutes. The slow-simmering
              process takes a few hours, but it is mostly hands-off while the
              fat gently renders down.
            </p>
</div>
<div className="border border-[#2D5448]/10 rounded-[5px] p-6 bg-[#F9F9F9] hover:bg-white transition-colors">
<h3 className="font-['Montserrat'] text-lg font-semibold text-[#2D2D2D] mb-3 flex items-start gap-3">
<iconify-icon className="text-[#00A434] text-xl shrink-0 mt-0.5" icon="solar:question-circle-linear"></iconify-icon>
              Is the market already too saturated?
            </h3>
<p className="font-['Lato'] text-[#2D2D2D]/80 ml-8">
              No! While tallow is gaining popularity online, the vast majority
              of local communities and niche demographics have zero access to
              high-quality, artisan tallow products. The demand far exceeds the
              current supply.
            </p>
</div>
<div className="border border-[#2D5448]/10 rounded-[5px] p-6 bg-[#F9F9F9] hover:bg-white transition-colors">
<h3 className="font-['Montserrat'] text-lg font-semibold text-[#2D2D2D] mb-3 flex items-start gap-3">
<iconify-icon className="text-[#00A434] text-xl shrink-0 mt-0.5" icon="solar:question-circle-linear"></iconify-icon>
              Do I get lifetime access?
            </h3>
<p className="font-['Lato'] text-[#2D2D2D]/80 ml-8">
              Yes! Once you purchase the blueprint, you get instant and lifetime
              access to all modules, bonuses, and any future updates we make to
              the program.
            </p>
</div>
</div>
</div>
</section>
<section className="bg-[#F9F9F9] border-t border-[#2D5448]/10 py-24 px-4 text-center" id="checkout">
<div className="max-w-[720px] mx-auto">
<h2 className="font-['Montserrat'] text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-[#2D2D2D] mb-4">
          Ready To Start Your Journey?
        </h2>
<p className="font-['Lato'] text-lg text-[#2D2D2D]/80 mb-10">
          Join hundreds of successful entrepreneurs who have already built
          profitable businesses using our proven blueprint.
        </p>

<div className="mb-12">
<div className="flex justify-between items-end mb-2 px-1">
<span className="font-['Montserrat'] font-semibold text-xs text-[#00A434] uppercase tracking-widest">
              Order Status
            </span>
<span className="font-['Lato'] text-xs font-semibold text-[#2D2D2D]/50">
              Step 1 of 2
            </span>
</div>
<div className="h-[35px] bg-white border border-[#2D5448]/10 rounded-none overflow-hidden relative shadow-inner">
<div className="absolute top-0 left-0 h-full bg-[#00A434] w-[50%] flex items-center justify-end px-4 text-white font-['Lato'] text-sm font-semibold transition-all duration-1000">
              50%
            </div>
</div>
</div>

<div className="text-[#E93D3D] font-['Lato'] text-sm font-semibold flex items-center justify-center gap-2 mb-6">
<iconify-icon height="1.2em" icon="solar:clock-circle-linear" width="1.2em"></iconify-icon>
          Special introductory pricing ends soon.
        </div>

<button className="bg-[#C5A669] text-[#2D2D2D] rounded-[50px] px-8 py-4 font-['Montserrat'] flex flex-col items-center justify-center w-full max-w-md mx-auto elevate-hover relative overflow-hidden group border border-[#C5A669]">
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
<span className="text-xl font-semibold tracking-tight uppercase relative z-10">
            Complete Your Order
          </span>
<span className="font-['Lato'] text-sm font-normal normal-case mt-1 opacity-90 relative z-10 flex items-center gap-1">
<iconify-icon className="text-[#2D2D2D]/70" icon="solar:shield-check-bold"></iconify-icon>
            100% Secure Checkout
          </span>
</button>
</div>
</section>

<footer className="bg-[#FFFFFF] py-12 border-t border-[#F9F9F9] text-center font-['Lato'] text-sm text-[#2D2D2D]/50">
<div className="max-w-[1170px] mx-auto px-4 flex flex-col items-center">
<div className="font-['Montserrat'] font-semibold tracking-tighter text-xl text-[#2D2D2D]/20 mb-6 grayscale opacity-60">
          TALLOW
          <span className="text-[#2D2D2D]/40">BIZ</span>
</div>
<div className="flex flex-wrap justify-center gap-6 mb-8 font-medium">
<a className="hover:text-[#00A434] transition-colors" href="#">
            Terms of Service
          </a>
<a className="hover:text-[#00A434] transition-colors" href="#">
            Privacy Policy
          </a>
<a className="hover:text-[#00A434] transition-colors" href="#">
            Contact Support
          </a>
<a className="hover:text-[#00A434] transition-colors" href="#">
            Refund Policy
          </a>
</div>
<p>© 2024 Beef Tallow Business Blueprint. All rights reserved.</p>
<p className="mt-2 text-xs max-w-2xl mx-auto opacity-70">
          Disclaimer: The information provided is for educational purposes.
          Success in any business requires effort, time, and dedication.
          Individual results will vary.
        </p>
</div>
</footer>

    </>
  );
}
