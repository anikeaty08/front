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
      

<header className="sticky top-0 z-50 w-full border-b backdrop-blur-md border-slate-100 bg-white/80">
<div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
<a className="text-lg font-semibold tracking-tighter text-slate-900" href="#">SEOpack.</a>
<div className="flex items-center gap-4">
<a className="hidden text-sm font-medium text-slate-500 sm:block hover:text-slate-900" href="#how-it-works">How it works</a>
<a className="rounded-full px-4 py-2 text-sm font-medium transition-all hover:shadow-sm bg-blue-600 text-white hover:bg-blue-700" href="#pricing">Get Your Pack</a>
</div>
</div>
</header>

<section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
<div className="mx-auto max-w-5xl px-6 text-center">
<div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border px-3 py-1 border-blue-100 bg-blue-50">
<span className="text-xs font-medium text-blue-700">Your team can implement. We'll tell them exactly what to do.</span>
</div>
<h1 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl text-slate-900">
                Have someone who can implement SEO, but no senior SEO telling them what to do?
            </h1>
<p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-slate-600">
                Get a complete SEO action plan for your website. We'll show your team exactly what to fix, what content to create, what pages to improve, and what opportunities to prioritize.
            </p>
<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
<a className="flex w-full items-center justify-center rounded-full px-8 py-3.5 text-sm font-medium transition-all hover:shadow-sm sm:w-auto bg-blue-600 text-white hover:bg-blue-700" href="#pricing">
                    Get Your SEO Pack
                </a>
<a className="flex w-full items-center justify-center rounded-full border px-8 py-3.5 text-sm font-medium transition-all sm:w-auto border-slate-200 bg-white text-slate-900 hover:bg-slate-50" href="#whats-included">
                    See What's Included
                </a>
</div>
<p className="mt-6 text-sm font-medium text-slate-500">
                One-time SEO Action Pack: $990
            </p>
</div>
</section>

<section className="border-t py-20 sm:py-28 border-slate-100 bg-slate-50">
<div className="mx-auto max-w-5xl px-6">
<div className="mx-auto max-w-3xl text-center">
<h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-slate-900">
                    Most SEO problems are not mysterious.
                </h2>
<p className="mt-6 text-base sm:text-lg text-slate-600">
                    Many businesses already have a developer, content person, or marketing assistant, but they are guessing what to work on. You do not need another vague, 100-page SEO audit full of jargon. You need clear direction.
                </p>
<p className="mt-4 text-base font-medium sm:text-lg text-slate-900">
                    Sites usually struggle because of the same core issues:
                </p>
</div>
<div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">

<div className="flex items-start gap-3 rounded-xl p-4 shadow-sm border bg-white border-slate-100">
<iconify-icon className="mt-0.5 text-lg text-blue-400" icon="solar:danger-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Weak page structure</span>
</div>
<div className="flex items-start gap-3 rounded-xl p-4 shadow-sm border bg-white border-slate-100">
<iconify-icon className="mt-0.5 text-lg text-blue-400" icon="solar:danger-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Poor titles &amp; meta tags</span>
</div>
<div className="flex items-start gap-3 rounded-xl p-4 shadow-sm border bg-white border-slate-100">
<iconify-icon className="mt-0.5 text-lg text-blue-400" icon="solar:danger-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Indexation problems</span>
</div>
<div className="flex items-start gap-3 rounded-xl p-4 shadow-sm border bg-white border-slate-100">
<iconify-icon className="mt-0.5 text-lg text-blue-400" icon="solar:danger-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Missing commercial pages</span>
</div>
<div className="flex items-start gap-3 rounded-xl p-4 shadow-sm border bg-white border-slate-100">
<iconify-icon className="mt-0.5 text-lg text-blue-400" icon="solar:danger-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Thin or duplicate content</span>
</div>
<div className="flex items-start gap-3 rounded-xl p-4 shadow-sm border bg-white border-slate-100">
<iconify-icon className="mt-0.5 text-lg text-blue-400" icon="solar:danger-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Bad internal linking</span>
</div>
<div className="flex items-start gap-3 rounded-xl p-4 shadow-sm border bg-white border-slate-100">
<iconify-icon className="mt-0.5 text-lg text-blue-400" icon="solar:danger-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Unclear content priorities</span>
</div>
<div className="flex items-start gap-3 rounded-xl p-4 shadow-sm border bg-white border-slate-100">
<iconify-icon className="mt-0.5 text-lg text-blue-400" icon="solar:danger-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-slate-700">No authority plan</span>
</div>
<div className="flex items-start gap-3 rounded-xl p-4 shadow-sm border bg-white border-slate-100">
<iconify-icon className="mt-0.5 text-lg text-blue-400" icon="solar:danger-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Local SEO issues</span>
</div>
</div>
<div className="mx-auto mt-12 max-w-2xl text-center">
<p className="text-lg font-semibold text-slate-900">
                    The problem is knowing what matters most and what to do first.
                </p>
</div>
</div>
</section>

<section className="py-20 sm:py-28">
<div className="mx-auto max-w-5xl px-6 text-center">
<h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-slate-900">
                SEOpack gives your team a senior SEO roadmap they can actually execute.
            </h2>
<p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-slate-600">
                We review your website, competitors, rankings, content gaps, technical setup, and authority opportunities. Then we deliver a prioritized action plan your team can follow step by step.
            </p>
</div>
</section>

<section className="border-t py-20 sm:py-28 border-slate-100 bg-white" id="whats-included">
<div className="mx-auto max-w-5xl px-6">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">What's inside the Pack.</h2>
<p className="mt-4 text-base text-slate-600">Everything you need to execute, nothing you don't.</p>
</div>
<div className="grid grid-cols-1 gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">

<div>
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border bg-slate-50 border-slate-200">
<iconify-icon className="text-xl text-blue-600" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900">Technical SEO Review</h3>
<p className="mt-2 text-sm text-slate-600">Identification of critical technical roadblocks holding your site back from proper crawling and rendering.</p>
</div>

<div className="">
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border bg-slate-50 border-slate-200">
<iconify-icon className="text-xl text-blue-600" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900">Indexation &amp; Sitemaps</h3>
<p className="mt-2 text-sm text-slate-600">Checks to ensure Google is actually finding and indexing your most important pages correctly.</p>
</div>

<div>
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border bg-slate-50 border-slate-200">
<iconify-icon className="text-xl text-blue-600" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900">On-Page SEO Review</h3>
<p className="mt-2 text-sm text-slate-600">Specific recommendations for page titles, meta descriptions, H-tags, and overall structure improvements.</p>
</div>

<div>
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border bg-slate-50 border-slate-200">
<iconify-icon className="text-xl text-blue-600" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900">Content Gap Analysis</h3>
<p className="mt-2 text-sm text-slate-600">Discovering what topics and keywords your competitors are ranking for that you are missing out on.</p>
</div>

<div className="">
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border bg-slate-50 border-slate-200">
<iconify-icon className="text-xl text-blue-600" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900">Content Execution Plan</h3>
<p className="mt-2 text-sm text-slate-600">A clear plan detailing recommended new pages/articles to create, and which existing content to rewrite or improve.</p>
</div>

<div>
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border bg-slate-50 border-slate-200">
<iconify-icon className="text-xl text-blue-600" icon="solar:link-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900">Internal Linking Plan</h3>
<p className="mt-2 text-sm text-slate-600">A strategic map for connecting your pages to distribute authority and help users and search engines navigate.</p>
</div>

<div>
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border bg-slate-50 border-slate-200">
<iconify-icon className="text-xl text-blue-600" icon="solar:cup-star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900">Authority &amp; Backlinks</h3>
<p className="mt-2 text-sm text-slate-600">A realistic plan for identifying backlink and authority-building opportunities specific to your niche.</p>
</div>

<div className="">
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border bg-slate-50 border-slate-200">
<iconify-icon className="text-xl text-blue-600" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900">Local SEO (If Relevant)</h3>
<p className="mt-2 text-sm text-slate-600">Specific recommendations for Google Business Profile optimization and local search visibility.</p>
</div>

<div>
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border bg-blue-600 text-white border-blue-600">
<iconify-icon className="text-xl" icon="solar:route-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900">Prioritized Action Roadmap</h3>
<p className="mt-2 text-sm text-slate-600">The most important part. A simple checklist telling your team what to do first, next, and later.</p>
</div>
</div>
</div>
</section>

<section className="border-t py-20 sm:py-28 border-slate-100 bg-slate-50">
<div className="mx-auto max-w-5xl px-6">
<div className="grid grid-cols-1 gap-8 md:grid-cols-2">

<div className="rounded-2xl border p-8 sm:p-10 border-slate-200 bg-white">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Who it's for</h3>
<p className="mt-2 text-sm text-slate-600">Perfect for businesses that:</p>
<ul className="mt-8 space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-xl text-blue-600" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-slate-700">Already have a developer, designer, content writer, VA, or internal marketer</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-xl text-blue-600" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-slate-700">Want expert SEO direction without a $2k-$5k/mo monthly retainer</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-xl text-blue-600" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-slate-700">Need a clear, prioritized plan instead of random SEO tips</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-xl text-blue-600" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-slate-700">Want to know which fixes and content will actually move the needle</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-xl text-blue-600" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-slate-700">Have an existing website that needs better organic performance</span>
</li>
</ul>
</div>

<div className="rounded-2xl border bg-transparent p-8 sm:p-10 border-slate-200">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Who it's not for</h3>
<p className="mt-2 text-sm text-slate-600">This is not a fit for businesses that:</p>
<ul className="mt-8 space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-xl text-slate-400" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-slate-700">Expect us to implement everything for them</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-xl text-slate-400" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-slate-700">Have absolutely no one available to make website or content changes</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-xl text-slate-400" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-slate-700">Want guaranteed rankings (no serious SEO does this)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-xl text-slate-400" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-slate-700">Want a massive 100-page automated audit nobody will ever read</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-xl text-slate-400" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-slate-700">Need full-service, hands-on monthly SEO management</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-t py-20 sm:py-28 border-slate-100 bg-white">
<div className="mx-auto max-w-4xl px-6 text-center">
<div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
<iconify-icon className="text-2xl text-blue-600" icon="solar:medal-star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-xl font-medium leading-relaxed sm:text-2xl sm:leading-relaxed text-slate-900">
                "After working on hundreds of SEO projects over 17+ years, the pattern is obvious: most sites do not need more theory. They need a clear list of what to fix, what to publish, and what to prioritize."
            </p>
<p className="mt-6 text-base font-semibold text-slate-900">
                That is what SEOpack gives you.
            </p>
<p className="mt-2 text-sm text-slate-500">
                Created by an SEO consultant with experience across e-commerce, health, local SEO, SaaS, and large-scale content sites.
            </p>
</div>
</section>

<section className="border-t py-20 sm:py-28 border-slate-100 bg-slate-50" id="how-it-works">
<div className="mx-auto max-w-5xl px-6">
<h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl text-slate-900">
                A simple, direct process.
            </h2>
<div className="mx-auto mt-16 max-w-2xl space-y-8">

<div className="relative pl-12">
<div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border text-sm font-semibold bg-white border-slate-200 text-blue-600">1</div>
<h3 className="text-base font-semibold text-slate-900">Submit your website</h3>
<p className="mt-1 text-sm text-slate-600">Fill out a brief questionnaire with your site details, goals, and known competitors.</p>
</div>

<div className="relative pl-12">
<div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border text-sm font-semibold bg-white border-slate-200 text-blue-600">2</div>
<h3 className="text-base font-semibold text-slate-900">We perform the analysis</h3>
<p className="mt-1 text-sm text-slate-600">We analyze your site, competitors, content, technical setup, and opportunities.</p>
</div>

<div className="relative pl-12">
<div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border text-sm font-semibold bg-white border-slate-200 text-blue-600">3</div>
<h3 className="text-base font-semibold text-slate-900">You receive your SEO Action Pack</h3>
<p className="mt-1 text-sm text-slate-600">Get your clean, organized documentation outlining exactly what needs to happen.</p>
</div>

<div className="relative pl-12">
<div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border text-sm font-semibold bg-white border-slate-200 text-blue-600">4</div>
<h3 className="text-base font-semibold text-slate-900">Your team implements the roadmap</h3>
<p className="mt-1 text-sm text-slate-600">Hand the plan over to your developer, writer, or VA to start executing.</p>
</div>

<div className="relative pl-12">
<div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold bg-blue-600 text-white">5</div>
<h3 className="text-base font-semibold text-slate-900">Stop guessing</h3>
<p className="mt-1 text-sm text-slate-600">Start working on the right things that actually impact organic visibility.</p>
</div>
</div>
</div>
</section>

<section className="border-t py-20 sm:py-28 border-slate-100 bg-white" id="pricing">
<div className="mx-auto max-w-5xl px-6 text-center">
<h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-slate-900">
                One simple SEO Pack. Custom roadmap.
            </h2>
<div className="mx-auto mt-12 max-w-md rounded-3xl border p-8 text-left shadow-sm sm:p-10 border-slate-200 bg-white">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">SEO Action Pack</h3>
<div className="mt-4 flex items-baseline text-5xl font-semibold tracking-tight text-slate-900">
                    $990
                    <span className="ml-1 text-base font-medium text-slate-500 tracking-normal">one-time</span>
</div>
<p className="mt-4 text-sm text-slate-600">A complete, prioritized execution plan tailored to your business.</p>
<ul className="mt-8 space-y-3">
<li className="flex items-center gap-3">
<iconify-icon className="text-lg text-blue-600" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-slate-700">Full site SEO review</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-lg text-blue-600" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-slate-700">Technical &amp; on-page recommendations</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-lg text-blue-600" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-slate-700">Content creation &amp; improvement plan</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-lg text-blue-600" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-slate-700">Internal linking strategy</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-lg text-blue-600" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-slate-700">Authority/link opportunity plan</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-lg text-blue-600" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-slate-900">Prioritized execution roadmap</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-lg text-blue-600" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-slate-700">Local SEO/GBP recs (if relevant)</span>
</li>
</ul>
<a className="mt-10 block w-full rounded-full py-3.5 text-center text-sm font-medium transition-all hover:shadow-sm bg-blue-600 text-white hover:bg-blue-700" href="#">
                    Get Your SEO Pack
                </a>
</div>
</div>
</section>

<section className="border-t py-20 sm:py-28 border-slate-100 bg-slate-50">
<div className="mx-auto max-w-3xl px-6">
<h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl text-slate-900">
                Frequently Asked Questions
            </h2>
<div className="mt-12 divide-y divide-slate-200">

<details className="group py-4" open="">
<summary className="flex cursor-pointer items-center justify-between font-medium text-slate-900">
<span className="text-base">Is this an SEO audit?</span>
<span className="ml-6 flex h-7 w-7 items-center justify-center rounded-full border transition-transform duration-200 group-open:rotate-180 border-slate-200 bg-white">
<iconify-icon className="text-slate-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm leading-relaxed text-slate-600">
                        Not exactly. It includes audit elements to find the issues, but the goal is not to give you a massive, theoretical report. The goal is to give your team a practical, prioritized action plan.
                    </p>
</details>

<details className="group py-4">
<summary className="flex cursor-pointer items-center justify-between font-medium text-slate-900">
<span className="text-base">Do you implement the fixes?</span>
<span className="ml-6 flex h-7 w-7 items-center justify-center rounded-full border transition-transform duration-200 group-open:rotate-180 border-slate-200 bg-white">
<iconify-icon className="text-slate-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm leading-relaxed text-slate-600">
                        No, this offer is built specifically for businesses that already have someone who can implement (a developer, content person, VA, etc.) but lack the senior strategic direction of what to do.
                    </p>
</details>

<details className="group py-4">
<summary className="flex cursor-pointer items-center justify-between font-medium text-slate-900">
<span className="text-base">What if we are a local business?</span>
<span className="ml-6 flex h-7 w-7 items-center justify-center rounded-full border transition-transform duration-200 group-open:rotate-180 border-slate-200 bg-white">
<iconify-icon className="text-slate-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm leading-relaxed text-slate-600">
                        Then local SEO and Google Business Profile recommendations will be heavily featured and included where relevant to your specific market.
                    </p>
</details>

<details className="group py-4">
<summary className="flex cursor-pointer items-center justify-between font-medium text-slate-900">
<span className="text-base">What if we do not have a developer or content person?</span>
<span className="ml-6 flex h-7 w-7 items-center justify-center rounded-full border transition-transform duration-200 group-open:rotate-180 border-slate-200 bg-white">
<iconify-icon className="text-slate-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm leading-relaxed text-slate-600">
                        This may not be the best fit unless you are willing to hire freelancers or contractors to implement the recommendations we outline in the Pack.
                    </p>
</details>

<details className="group py-4">
<summary className="flex cursor-pointer items-center justify-between font-medium text-slate-900">
<span className="text-base">Is this a monthly retainer?</span>
<span className="ml-6 flex h-7 w-7 items-center justify-center rounded-full border transition-transform duration-200 group-open:rotate-180 border-slate-200 bg-white">
<iconify-icon className="text-slate-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm leading-relaxed text-slate-600">
                        No. It is a strictly one-time SEO Action Pack for $990. No ongoing commitments.
                    </p>
</details>

<details className="group py-4">
<summary className="flex cursor-pointer items-center justify-between font-medium text-slate-900">
<span className="text-base">Do you guarantee rankings?</span>
<span className="ml-6 flex h-7 w-7 items-center justify-center rounded-full border transition-transform duration-200 group-open:rotate-180 border-slate-200 bg-white">
<iconify-icon className="text-slate-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm leading-relaxed text-slate-600">
                        No. No serious SEO should ever guarantee rankings due to the unpredictable nature of search engines. We give you a clear, prioritized plan based on proven SEO experience and real website analysis.
                    </p>
</details>
</div>
</div>
</section>

<footer className="border-t py-12 border-slate-100 bg-white">
<div className="mx-auto flex max-w-5xl flex-col items-center justify-between px-6 sm:flex-row">
<span className="text-xl font-semibold tracking-tighter text-slate-900">SEOpack.</span>
<p className="mt-4 text-xs text-slate-500 sm:mt-0">
                © 2024 SEOpack.net. All rights reserved.
            </p>
</div>
</footer>

    </>
  );
}
