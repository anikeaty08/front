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
      

<header className="sticky top-0 z-50 w-full bg-[#EEF1EA]/90 backdrop-blur-md border-b border-[#1B2B22]/10">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-full bg-[#1B2B22] text-[#34D399] flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:home-smile-linear"></iconify-icon>
</div>
<span className="tracking-tight uppercase text-[#111827] group-hover:opacity-80 transition-opacity font-semibold text-sm">
            Millcreek
            <span className="text-[#059669]">Forward</span>
</span>
</a>
<div className="hidden md:flex items-center gap-6">
<a className="text-base font-semibold text-slate-700 hover:text-slate-900 transition-colors" href="/contact">
            Contact
          </a>
<a className="inline-flex items-center justify-center px-6 py-2.5 font-semibold text-[#1B2B22] bg-[#34D399] rounded-full hover:bg-[#10B981] transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-[#34D399] text-base" href="https://form.typeform.com/to/gD0yeclV" target="_blank">
            Share Your Story
          </a>
</div>

<button className="md:hidden text-slate-500 hover:text-slate-900 p-2">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</header>
<main>

<section className="relative pt-24 pb-20 md:pt-32 md:pb-32 px-6 overflow-hidden border-b border-[#1B2B22]/10">
<img alt="Autumn Valley Neighborhood at Mountain Foothills" className="absolute inset-0 w-full h-full object-cover z-0 object-right" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ca1e33c1-43da-4146-bd0f-4f0ca1aa5efb_800w.jpg"/>
<div className="absolute inset-0 bg-[#1B2B22]/80 md:bg-gradient-to-r md:from-[#1B2B22] md:via-[#1B2B22]/90 md:to-transparent z-10"></div>
<div className="relative z-20 max-w-6xl mx-auto w-full">
<div className="flex flex-col gap-6 max-w-[650px]">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 font-semibold text-[#34D399] w-fit text-xs">
              Resident-Led Community Initiative
            </div>
<h1 className="text-4xl md:text-[56px] font-medium tracking-tight text-white leading-[1.04] text-balance">
              Keeping Millcreek a Place Where Families Can Build Their Future
            </h1>
<p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              We're collecting stories from residents who encountered unexpected
              barriers while trying to renovate, rebuild, or invest in
              Millcreek.
            </p>
<div className="flex flex-col sm:flex-row gap-4 mt-6">
<a className="inline-flex items-center justify-center px-8 py-3.5 font-semibold text-[#1B2B22] bg-[#34D399] rounded-full hover:bg-[#10B981] transition-colors shadow-sm text-sm" href="https://form.typeform.com/to/gD0yeclV" target="_blank">
                Share Your Story
              </a>
<a className="inline-flex items-center justify-center px-8 py-3.5 font-semibold text-white bg-white/10 backdrop-blur border border-white/20 rounded-full hover:bg-white/20 transition-colors shadow-sm text-sm" href="#learn-more">
                Learn More
              </a>
</div>
<p className="text-xs text-slate-300 flex items-start gap-2 mt-4 font-medium">
<iconify-icon className="text-base shrink-0 mt-0.5 text-[#34D399]" icon="solar:shield-check-linear"></iconify-icon>
<span>
                Stories may be submitted anonymously.
                <br/>
                Nothing will be published without your permission.
              </span>
</p>
</div>
</div>
</section>

<section className="border-y border-[#1B2B22]/10 bg-white" id="learn-more">
<div className="max-w-4xl mx-auto px-6 py-16 text-center flex flex-col gap-6">
<h2 className="text-[40px] leading-[1.1] font-medium tracking-tight text-[#111827]">
            Why We're Listening
          </h2>
<div className="text-base text-[#4B5563] leading-[1.6] space-y-4 max-w-2xl mx-auto">
<p>Families choose Millcreek because they want to stay.</p>
<p>They want room for a growing family.</p>
<p>A place for aging parents.</p>
<p>A home they can pass on to the next generation.</p>
<p>
              But for some residents, the path to making those plans a reality
              becomes far more difficult than expected.
            </p>
<p className="font-medium text-[#111827]">
              We're collecting stories to better understand where those
              challenges exist and what can be done about them.
            </p>
</div>
</div>
</section>

<section className="py-20 px-6" id="challenges">
<div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
<div className="flex flex-col gap-8 max-w-4xl mx-auto">
<div className="text-center flex flex-col gap-4">
<h2 className="text-[32px] leading-[1.1] font-medium tracking-tight text-[#111827]">
                Challenges come in many forms.
              </h2>
<p className="text-base text-slate-600 leading-relaxed">
                We're interested in understanding the full range of experiences
                residents have encountered.
              </p>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div className="bg-white p-5 rounded-[23px] border border-[#1B2B22]/10 shadow-sm flex items-start gap-4 hover:border-[#34D399] transition-colors">
<iconify-icon className="text-xl text-[#34D399] shrink-0 mt-0.5" icon="solar:ruler-pen-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-800">
                  Remodels and additions
                </span>
</div>
<div className="bg-white p-5 rounded-[23px] border border-[#1B2B22]/10 shadow-sm flex items-start gap-4 hover:border-[#34D399] transition-colors">
<iconify-icon className="text-xl text-[#34D399] shrink-0 mt-0.5" icon="solar:home-add-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-800">
                  Rebuilds and major repairs
                </span>
</div>
<div className="bg-white p-5 rounded-[23px] border border-[#1B2B22]/10 shadow-sm flex items-start gap-4 hover:border-[#34D399] transition-colors">
<iconify-icon className="text-xl text-[#34D399] shrink-0 mt-0.5" icon="lucide:mountain"></iconify-icon>
<span className="text-sm font-medium text-slate-800">
                  Sensitive lands and slope rules
                </span>
</div>
<div className="bg-white p-5 rounded-[23px] border border-[#1B2B22]/10 shadow-sm flex items-start gap-4 hover:border-[#34D399] transition-colors">
<iconify-icon className="text-xl text-[#34D399] shrink-0 mt-0.5" icon="solar:signpost-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-800">
                  Sidewalk, curb, gutter, and frontage requirements
                </span>
</div>
<div className="bg-white p-5 rounded-[23px] border border-[#1B2B22]/10 shadow-sm flex items-start gap-4 hover:border-[#34D399] transition-colors">
<iconify-icon className="text-xl text-[#34D399] shrink-0 mt-0.5" icon="solar:map-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-800">
                  Subdivision and lot-line issues
                </span>
</div>
<div className="bg-white p-5 rounded-[23px] border border-[#1B2B22]/10 shadow-sm flex items-start gap-4 hover:border-[#34D399] transition-colors">
<iconify-icon className="text-xl text-[#34D399] shrink-0 mt-0.5" icon="solar:calendar-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-800">
                  Permit delays or changing requirements
                </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-white border-y border-[#1B2B22]/10" id="share-story">
<div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#34D399]/10 text-[#34D399] mb-2">
<iconify-icon className="text-2xl" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<h2 className="text-[40px] leading-[1.1] font-medium tracking-tight text-[#111827] text-balance">
            Did Something Similar Happen To You?
          </h2>
<p className="text-base text-slate-600 max-w-2xl leading-relaxed">
            Whether you were trying to renovate, rebuild, add on, subdivide, or
            create a long-term family home, your experience matters.
            <br/>
<br/>
            The more stories we collect, the clearer the picture becomes.
          </p>

<div className="w-full mt-8 bg-[#EEF1EA] border-2 border-dashed border-[#1B2B22]/20 rounded-[23px] py-8 px-6 flex flex-col items-center justify-center">
<iconify-icon className="text-4xl text-stone-300 mb-4" icon="solar:clipboard-text-linear"></iconify-icon>
<p className="text-sm font-medium text-slate-500 mb-6">
              Ready to share your story?
            </p>
<a className="inline-flex items-center justify-center px-6 py-3 font-semibold text-[#1B2B22] bg-[#34D399] rounded-full hover:bg-[#10B981] transition-colors shadow-sm text-sm" href="https://form.typeform.com/to/gD0yeclV" target="_blank">
              Share Your Experience
            </a>

</div>
<div className="mt-6 flex gap-3 text-left bg-[#34D399]/10 p-4 rounded-[23px] border border-[#34D399]/20 w-full">
<iconify-icon className="text-lg text-slate-400 shrink-0 mt-0.5" icon="solar:lock-linear"></iconify-icon>
<p className="text-xs text-slate-600 leading-relaxed">
<span className="font-medium text-[#1B2B22]">Privacy Note:</span>
              You decide how your story may be used. Submit anonymously,
              confidentially, or publicly.
            </p>
</div>
</div>
</section>
<section className="py-20 px-6 bg-[#34D399]/10 border-b border-[#34D399]/20" id="vision">
<div className="max-w-4xl mx-auto text-center flex flex-col gap-6">
<h2 className="text-[40px] leading-[1.1] font-medium tracking-tight text-[#111827]">
            Our Vision
          </h2>
<div className="text-lg text-slate-700 leading-relaxed space-y-6">
<p>
              A Millcreek where families can confidently invest in their homes,
              improve their properties, and build long-term roots without
              unnecessary uncertainty.
            </p>
<p>
              A city where residents understand the rules, can plan with
              confidence, and have a fair opportunity to create homes that meet
              the needs of future generations.
            </p>
</div>
</div>
</section>

<section className="py-20 px-6" id="community">
<div className="max-w-6xl mx-auto">
<div className="max-w-4xl mx-auto flex flex-col gap-10">
<div className="text-center">
<h2 className="text-[40px] leading-[1.1] font-medium tracking-tight text-[#111827]">
                Who Should Participate
              </h2>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div className="bg-white p-6 rounded-[23px] border border-[#1B2B22]/10 shadow-sm flex flex-col gap-2">
<h3 className="text-sm font-medium text-slate-900">Homeowners</h3>
<p className="text-xs text-slate-600 leading-relaxed">
                  Trying to renovate, rebuild, expand, or improve property.
                </p>
</div>
<div className="bg-white p-6 rounded-[23px] border border-[#1B2B22]/10 shadow-sm flex flex-col gap-2">
<h3 className="text-sm font-medium text-slate-900">Families</h3>
<p className="text-xs text-slate-600 leading-relaxed">
                  Trying to create a long-term home in Millcreek.
                </p>
</div>
<div className="bg-white p-6 rounded-[23px] border border-[#1B2B22]/10 shadow-sm flex flex-col gap-2">
<h3 className="text-sm font-medium text-slate-900">
                  Builders &amp; Professionals
                </h3>
<p className="text-xs text-slate-600 leading-relaxed">
                  Seeing recurring patterns across multiple projects.
                </p>
</div>
<div className="bg-white p-6 rounded-[23px] border border-[#1B2B22]/10 shadow-sm flex flex-col gap-2">
<h3 className="text-sm font-medium text-slate-900">Residents</h3>
<p className="text-xs text-slate-600 leading-relaxed">
                  Interested in Millcreek's future.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-[#1B2B22] border-y border-[#1B2B22]">
<div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6">
<h2 className="text-[40px] leading-[1.1] font-medium tracking-tight text-white max-w-2xl text-balance">
            When families can't build their future here, everyone loses.
          </h2>
<p className="text-sm font-medium text-[#34D399] max-w-2xl">
            Our goal is to turn scattered stories into a useful, respectful,
            evidence-based conversation about better local policy.
          </p>
<div className="grid md:grid-cols-3 gap-6 mt-2 w-full text-left">
<div className="bg-white/5 backdrop-blur-md p-8 rounded-[23px] border border-white/10 shadow-sm flex flex-col gap-3">
<h3 className="text-lg font-semibold tracking-tight text-white">
                Families
              </h3>
<p className="text-sm text-slate-300 leading-relaxed">
                Families deserve a clear and predictable path before investing
                their life savings into a project.
              </p>
</div>
<div className="bg-white/5 backdrop-blur-md p-8 rounded-[23px] border border-white/10 shadow-sm flex flex-col gap-3">
<h3 className="text-lg font-semibold tracking-tight text-white">
                Housing
              </h3>
<p className="text-sm text-slate-300 leading-relaxed">
                Communities remain strong when residents can adapt homes to meet
                changing family needs.
              </p>
</div>
<div className="bg-white/5 backdrop-blur-md p-8 rounded-[23px] border border-white/10 shadow-sm flex flex-col gap-3">
<h3 className="text-lg font-semibold tracking-tight text-white">
                Millcreek's Future
              </h3>
<p className="text-sm text-slate-300 leading-relaxed">
                Millcreek thrives when the next generation can afford to stay,
                invest, and put down roots.
              </p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-[#EEF1EA]" id="faq">
<div className="max-w-3xl mx-auto flex flex-col gap-8">
<div className="text-center">
<h2 className="text-[32px] leading-[1.1] font-medium tracking-tight text-[#111827]">
              Frequently Asked Questions
            </h2>
</div>
<div className="flex flex-col border-t border-[#1B2B22]/10">
<details className="group border-b border-[#1B2B22]/10">
<summary className="flex items-center justify-between py-5 cursor-pointer text-base font-medium text-slate-900 hover:text-[#10B981] transition-colors">
<span>Why focus on families?</span>
<iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="pb-5 text-sm text-slate-600 leading-relaxed pr-8">
                Because every planning decision ultimately affects people.
                Behind every remodel, rebuild, or property improvement is a
                family trying to create stability, invest in their future, and
                remain part of the community they love.
              </div>
</details>
<details className="group border-b border-[#1B2B22]/10">
<summary className="flex items-center justify-between py-5 cursor-pointer text-base font-medium text-slate-900 hover:text-[#10B981] transition-colors">
<span>What changes are you advocating for?</span>
<iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="pb-5 text-sm text-slate-600 leading-relaxed pr-8">
                Our first goal is listening and documenting experiences. As
                patterns emerge, we hope to identify opportunities for clearer,
                more consistent, and more predictable policies that support both
                residents and the long-term health of Millcreek.
              </div>
</details>
<details className="group border-b border-[#1B2B22]/10">
<summary className="flex items-center justify-between py-5 cursor-pointer text-base font-medium text-slate-900 hover:text-[#10B981] transition-colors">
<span>Is this anti-Millcreek City?</span>
<iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="pb-5 text-sm text-slate-600 leading-relaxed pr-8">
                No. This effort is focused on documenting resident experiences
                and advocating for clearer, more consistent, more workable
                rules. The goal is constructive accountability, not personal
                attacks.
              </div>
</details>
<details className="group border-b border-[#1B2B22]/10">
<summary className="flex items-center justify-between py-5 cursor-pointer text-base font-medium text-slate-900 hover:text-[#10B981] transition-colors">
<span>Can I submit anonymously?</span>
<iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="pb-5 text-sm text-slate-600 leading-relaxed pr-8">
                Yes. You may submit anonymously or ask that your name and
                identifying details remain private.
              </div>
</details>
<details className="group border-b border-[#1B2B22]/10">
<summary className="flex items-center justify-between py-5 cursor-pointer text-base font-medium text-slate-900 hover:text-[#10B981] transition-colors">
<span>Will my story be shared publicly?</span>
<iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="pb-5 text-sm text-slate-600 leading-relaxed pr-8">
                Only with your permission. The form should let you choose
                whether your story may be shared publicly, shared anonymously,
                kept private, or used only for research.
              </div>
</details>
<details className="group border-b border-[#1B2B22]/10">
<summary className="flex items-center justify-between py-5 cursor-pointer text-base font-medium text-slate-900 hover:text-[#10B981] transition-colors">
<span>What kinds of issues are relevant?</span>
<iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="pb-5 text-sm text-slate-600 leading-relaxed pr-8">
                Relevant issues may include remodels, rebuilds, additions,
                repairs, subdivisions, slope requirements, sensitive lands
                rules, flood-related requirements, frontage improvements,
                sidewalk requirements, permit delays, changing requirements, or
                inconsistent interpretations.
              </div>
</details>
<details className="group border-b border-[#1B2B22]/10">
<summary className="flex items-center justify-between py-5 cursor-pointer text-base font-medium text-slate-900 hover:text-[#10B981] transition-colors">
<span>Do I need documents?</span>
<iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="pb-5 text-sm text-slate-600 leading-relaxed pr-8">
                Documents are helpful but not required. Emails, notices, plans,
                cost estimates, staff comments, and timelines can make a story
                easier to verify.
              </div>
</details>
<details className="group border-b border-[#1B2B22]/10">
<summary className="flex items-center justify-between py-5 cursor-pointer text-base font-medium text-slate-900 hover:text-[#10B981] transition-colors">
<span>Are you offering legal advice?</span>
<iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="pb-5 text-sm text-slate-600 leading-relaxed pr-8">
                No. This site does not provide legal advice. It collects
                information and may later help connect residents with
                appropriate professionals.
              </div>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-[#1B2B22]/10">
<div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
<h2 className="text-[40px] leading-[1.1] font-medium tracking-tight text-[#111827]">
            Millcreek should be a place where families can build their future.
          </h2>
<p className="text-base text-slate-600 max-w-xl">
            If you've experienced unexpected barriers while trying to invest in
            your property, we'd like to hear your story. Together, we can help
            ensure that future families have a clearer path forward.
          </p>
<div className="flex flex-col items-center gap-4 mt-4">
<a className="inline-flex items-center justify-center px-8 py-3.5 font-semibold text-[#1B2B22] bg-[#34D399] rounded-full hover:bg-[#10B981] transition-colors shadow-sm w-full sm:w-auto text-sm" href="https://form.typeform.com/to/gD0yeclV" target="_blank">
              Share Your Story
            </a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors underline underline-offset-4 decoration-[#1B2B22]/20 hover:decoration-[#1B2B22]/40" href="#">
              Join Updates
            </a>
</div>
</div>
</section>
</main>

<footer className="bg-[#EEF1EA] border-t border-[#1B2B22]/10 pt-16 pb-8 px-6">
<div className="max-w-6xl mx-auto flex flex-col gap-12">
<div className="flex flex-col md:flex-row justify-between items-start gap-8">
<div className="flex flex-col gap-4 max-w-md">
<div className="flex items-center gap-2 group">
<div className="w-6 h-6 rounded-full bg-[#1B2B22] text-[#34D399] flex items-center justify-center">
<iconify-icon className="text-sm" icon="solar:home-smile-linear"></iconify-icon>
</div>
<span className="tracking-tight uppercase text-[#111827] font-semibold text-sm">
                Millcreek Forward
              </span>
</div>
<p className="text-xs text-slate-500 leading-relaxed">
              This is an independent resident-led effort. It is not affiliated
              with Millcreek City. Information submitted through this site is
              used to understand resident experiences and advocate for clearer,
              fairer, more workable local policies. This site does not provide
              legal advice.
            </p>
</div>
<div className="flex gap-8">
<div className="flex flex-col gap-3">
<a className="text-sm text-slate-500 hover:text-[#10B981] transition-colors" href="#">
                Privacy
              </a>
<a className="text-sm text-slate-500 hover:text-[#10B981] transition-colors" href="#">
                Terms of Service
              </a>
</div>
</div>
</div>
<div className="pt-8 border-t border-[#1B2B22]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-400">
            © 2026 Millcreek Forward. All rights reserved.
          </p>
</div>
</div>
</footer>

    </>
  );
}
