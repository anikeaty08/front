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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-md flex items-center justify-center text-white bg-blue-600">
<iconify-icon className="text-xl" icon="solar:box-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight">SEOpack.net</span>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#pricing">
            Pricing
          </a>
<a className="text-white text-sm font-medium px-4 py-2 rounded-md transition-colors bg-blue-600 hover:bg-blue-700" href="#pricing">
            Get Your SEO Pack
          </a>
</div>
</div>
</nav>

<section className="pt-32 pb-20 md:pt-40 md:pb-28">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-medium mb-8 bg-blue-50 border-blue-200 text-blue-800">
          Your team can implement. We’ll tell them exactly what to do.
        </div>
<h1 className="font-semibold tracking-tight leading-tight mb-6 text-blue-950 text-4xl md:text-5xl lg:text-6xl">
          You don’t need another SEO audit.
          <br/>
          You need a clear action plan.
        </h1>
<p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Get a complete SEO action plan for your website. We’ll show your team
          exactly what to fix, what content to create, what pages to improve,
          and what opportunities to prioritize.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
<a className="w-full sm:w-auto px-6 py-3 text-white text-base font-medium rounded-md transition-colors flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700" href="#pricing">
            Get Your SEO Pack
          </a>
<a className="w-full sm:w-auto px-6 py-3 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-base font-medium rounded-md transition-colors flex items-center justify-center gap-2" href="#included">
            See What’s Included
          </a>
</div>
<div className="text-sm font-medium text-slate-500 flex items-center justify-center gap-2">
<iconify-icon className="text-lg" icon="solar:tag-price-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
          One-time SEO Action Pack: $990
        </div>
</div>
</section>

<section className="py-24 border-t bg-blue-50/50 border-blue-100">
<div className="max-w-5xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-4">
              Most SEO problems are not mysterious.
            </h2>
<p className="text-base text-slate-600 mb-6 leading-relaxed">
              Many businesses already have a developer, content person, or
              marketing assistant, but they are guessing what to work on. You do
              not need another vague, 100-page SEO audit full of jargon. You
              need clear direction.
            </p>
<p className="text-base font-medium text-slate-900">
              The problem is knowing what matters most and what to do first.
            </p>
</div>
<div className="bg-white p-8 rounded-xl border border-slate-200">
<div className="text-sm font-medium text-slate-500 mb-4 uppercase tracking-widest">
              Common struggles
            </div>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-slate-400 shrink-0 mt-0.5" icon="solar:danger-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base text-slate-700">
                  Weak page structure &amp; indexation problems
                </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-slate-400 shrink-0 mt-0.5" icon="solar:danger-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base text-slate-700">
                  Poor titles, meta tags, and missing commercial pages
                </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-slate-400 shrink-0 mt-0.5" icon="solar:danger-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base text-slate-700">
                  Thin or duplicate content with unclear priorities
                </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-slate-400 shrink-0 mt-0.5" icon="solar:danger-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base text-slate-700">
                  Bad internal linking and no backlink/authority plan
                </span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200" id="included">
<div className="max-w-5xl mx-auto px-6">
<div className="max-w-3xl mb-16">
<h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
            SEOpack gives your team a senior SEO roadmap they can actually
            execute.
          </h2>
<p className="text-lg text-slate-600 leading-relaxed">
            We review your website, competitors, rankings, content gaps,
            technical setup, and authority opportunities. Then we deliver a
            prioritized action plan your team can follow step by step.
          </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-lg border border-slate-200 bg-slate-50/50">
<iconify-icon className="text-2xl text-slate-900 mb-4" icon="solar:server-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">
              Technical Review
            </h3>
<p className="text-sm text-slate-600">
              Indexation, sitemap checks, and core technical fixes your
              developer can deploy.
            </p>
</div>

<div className="p-6 rounded-lg border border-slate-200 bg-slate-50/50">
<iconify-icon className="text-2xl text-slate-900 mb-4" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">
              On-Page SEO
            </h3>
<p className="text-sm text-slate-600">
              Page title, meta description, H-tag, and structure recommendations
              for existing pages.
            </p>
</div>

<div className="p-6 rounded-lg border border-slate-200 bg-slate-50/50">
<iconify-icon className="text-2xl text-slate-900 mb-4" icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">
              Content Plan
            </h3>
<p className="text-sm text-slate-600">
              Content gap analysis, recommended pages/articles to create, and
              existing content to improve.
            </p>
</div>

<div className="p-6 rounded-lg border border-slate-200 bg-slate-50/50">
<iconify-icon className="text-2xl text-slate-900 mb-4" icon="solar:link-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">
              Linking Strategy
            </h3>
<p className="text-sm text-slate-600">
              Clear internal linking plan and actionable backlink/authority
              opportunity targets.
            </p>
</div>

<div className="p-6 rounded-lg border border-slate-200 bg-slate-50/50">
<iconify-icon className="text-2xl text-slate-900 mb-4" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">
              Local SEO (If Relevant)
            </h3>
<p className="text-sm text-slate-600">
              Google Business Profile optimization and local market search
              recommendations.
            </p>
</div>

<div className="p-6 rounded-lg border border-slate-200 bg-blue-600 shadow-md border-blue-500">
<iconify-icon className="text-2xl text-white mb-4" icon="solar:checklist-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight">
              Action Roadmap
            </h3>
<p className="text-sm text-slate-300">
              Prioritized execution checklist telling you exactly what to do
              first, next, and later.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t bg-blue-50/50 border-blue-100">
<div className="max-w-5xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white p-8 rounded-xl border border-slate-200">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-6 flex items-center gap-2">
<iconify-icon className="text-2xl text-slate-900" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
              Who it’s for
            </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0"></div>
<span className="text-sm text-slate-700">
                  Businesses that already have a developer, designer, content
                  writer, VA, or internal marketer
                </span>
</li>
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0"></div>
<span className="text-sm text-slate-700">
                  Founders who want expert SEO direction without a $2k+ monthly
                  retainer
                </span>
</li>
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0"></div>
<span className="text-sm text-slate-700">
                  Teams that need a clear plan instead of random SEO tips
                </span>
</li>
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0"></div>
<span className="text-sm text-slate-700">
                  Those who want to know which fixes and content will actually
                  move the needle
                </span>
</li>
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0"></div>
<span className="text-sm text-slate-700">
                  Companies with an existing website that needs better organic
                  performance
                </span>
</li>
</ul>
</div>

<div className="p-8 rounded-xl border bg-blue-100/50 border-blue-100">
<h3 className="text-xl font-semibold tracking-tight text-slate-500 mb-6 flex items-center gap-2">
<iconify-icon className="text-2xl text-slate-400" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
              Who it’s not for
            </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0"></div>
<span className="text-sm text-slate-600">
                  Businesses that expect us to implement everything for them
                </span>
</li>
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0"></div>
<span className="text-sm text-slate-600">
                  Companies with no one available to make website or content
                  changes
                </span>
</li>
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0"></div>
<span className="text-sm text-slate-600">
                  People looking for guaranteed rankings (no serious SEO does
                  this)
                </span>
</li>
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0"></div>
<span className="text-sm text-slate-600">
                  Those who want a traditional 100-page automated audit nobody
                  will read
                </span>
</li>
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0"></div>
<span className="text-sm text-slate-600">
                  Businesses that need full-service, done-for-you SEO management
                </span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-blue-100" id="authority">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
<div className="relative">
<div className="absolute inset-0 bg-blue-600 rounded-2xl transform translate-x-3 translate-y-3 opacity-10"></div>
<img alt="Igor Buyseech speaking at an SEO conference" className="relative w-full rounded-2xl shadow-xl border border-blue-100 object-cover aspect-[4/5] z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d968785b-ec63-4bbd-acf5-1472398a0b8d_800w.png"/>
</div>
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-blue-950 mb-6">
              The SEO Brain Behind SEOpack.net
            </h2>
<div className="space-y-4 text-base text-slate-700 leading-relaxed">
<p>
<strong>SEOpack.net</strong>
                is led by Igor Buyseech, an SEO specialist with 18 years of
                hands-on experience, supported by a team of SEO specialists,
                content strategists, technical auditors and implementation
                experts.
              </p>
<p>
                Igor has worked with 500+ high-end clients, owned and tested SEO
                on 1,000+ personal domains, spoken at some of the largest SEO
                conferences in the world, appeared on industry podcasts, and
                helped write a book on SEO.
              </p>
<p>
                Across almost two decades, his SEO work has helped clients
                generate hundreds of millions in revenue through organic search
                across health, finance, SaaS, eCommerce, cannabis, adult, local
                SEO and international markets.
              </p>
<p>
                SEOpack.net takes that experience, plus the execution power of a
                trained SEO team, and turns it into a clear, practical SEO
                action plan your team can actually implement.
              </p>
</div>
<div className="mt-8 p-6 bg-blue-50 border border-blue-100 rounded-xl">
<ul className="space-y-3 font-medium text-blue-950">
<li className="flex items-center gap-3">
<iconify-icon className="text-xl text-blue-500 shrink-0" icon="solar:close-circle-linear"></iconify-icon>
                  Not theory.
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-xl text-blue-500 shrink-0" icon="solar:close-circle-linear"></iconify-icon>
                  Not recycled audit templates.
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-xl text-blue-500 shrink-0" icon="solar:close-circle-linear"></iconify-icon>
                  Not generic SEO advice.
                </li>
<li className="flex items-start gap-3 pt-3 border-t border-blue-200 mt-3 text-lg">
<iconify-icon className="text-2xl text-blue-600 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Real SEO experience, packaged into a system.</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 text-white border-t bg-blue-950 border-blue-900">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-16 text-center">
          Simple Process
        </h2>
<div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-blue-800/50">

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border-4 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10 text-sm font-medium border-blue-950 bg-blue-900 text-blue-200">
              1
            </div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-lg border backdrop-blur-sm border-blue-800/50 bg-blue-900/40">
<h3 className="text-base font-semibold mb-1">Submit your website</h3>
<p className="text-sm text-slate-400">
                Fill out a brief form with your URL and basic context.
              </p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border-4 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10 text-sm font-medium border-blue-950 bg-blue-900 text-blue-200">
              2
            </div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-lg border backdrop-blur-sm border-blue-800/50 bg-blue-900/40">
<h3 className="text-base font-semibold mb-1">We analyze</h3>
<p className="text-sm text-slate-400">
                We dive into your site, competitors, content, technical setup,
                and opportunities.
              </p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border-4 bg-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10 text-sm font-medium border-blue-950 text-blue-900">
              3
            </div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-lg border border-blue-600 bg-blue-800">
<h3 className="text-base font-semibold text-white mb-1">
                Receive SEO Action Pack
              </h3>
<p className="text-sm text-slate-300">
                Get your complete, prioritized roadmap delivered directly to
                you.
              </p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border-4 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10 text-sm font-medium border-blue-950 bg-blue-900 text-blue-200">
              4
            </div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-lg border backdrop-blur-sm border-blue-800/50 bg-blue-900/40">
<h3 className="text-base font-semibold mb-1">Your team implements</h3>
<p className="text-sm text-slate-400">
                Hand the plan to your developer, writer, or VA to execute
                step-by-step.
              </p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border-4 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10 text-sm font-medium border-blue-950 bg-blue-900 text-blue-200">
              5
            </div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-lg border backdrop-blur-sm border-blue-800/50 bg-blue-900/40">
<h3 className="text-base font-semibold mb-1">Stop guessing</h3>
<p className="text-sm text-slate-400">
                Start working on the exact things that will move the organic
                needle.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t bg-blue-50/50 border-blue-100" id="pricing">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-12">
<p className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-2">
            Clear Execution
          </p>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
            One simple SEO Pack. Custom roadmap.
          </h2>
</div>
<div className="max-w-md mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
<div className="p-8 border-b border-slate-100 text-center">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">
              SEO Action Pack
            </h3>
<div className="flex items-baseline justify-center text-slate-900 mb-2">
<span className="text-5xl font-semibold tracking-tight">$990</span>
</div>
<p className="text-sm text-slate-500">One-time payment. No retainer.</p>
</div>
<div className="p-8 bg-slate-50/50">
<p className="text-sm font-medium text-slate-900 mb-4">Includes:</p>
<ul className="space-y-4 text-sm text-slate-600 mb-8">
<li className="flex items-center gap-3">
<iconify-icon className="text-lg text-slate-900 shrink-0" icon="solar:check-circle-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
                Full site SEO review
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-lg text-slate-900 shrink-0" icon="solar:check-circle-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
                Technical and on-page recommendations
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-lg text-slate-900 shrink-0" icon="solar:check-circle-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
                Content plan
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-lg text-slate-900 shrink-0" icon="solar:check-circle-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
                Internal linking plan
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-lg text-slate-900 shrink-0" icon="solar:check-circle-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
                Authority/link opportunity plan
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-lg text-slate-900 shrink-0" icon="solar:check-circle-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
                Prioritized execution roadmap
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-lg text-slate-900 shrink-0" icon="solar:check-circle-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
                Local SEO/GBP recommendations if relevant
              </li>
</ul>
<a className="block w-full py-3 px-4 text-white text-center font-medium rounded-md transition-colors bg-blue-600 hover:bg-blue-700" href="#">
              Get Your SEO Pack
            </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-10 text-center">
          Frequently Asked Questions
        </h2>
<div className="space-y-3">
<details className="group border border-slate-200 rounded-md bg-white">
<summary className="flex justify-between items-center cursor-pointer p-5 text-sm font-medium text-slate-900 select-none">
              Is this an SEO audit?
              <iconify-icon className="text-lg text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</summary>
<div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
              Not exactly. It includes audit elements, but the goal is not to
              give you a massive report. The goal is to give your team a
              practical action plan they can start executing immediately.
            </div>
</details>
<details className="group border border-slate-200 rounded-md bg-white">
<summary className="flex justify-between items-center cursor-pointer p-5 text-sm font-medium text-slate-900 select-none">
              Do you implement the fixes?
              <iconify-icon className="text-lg text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</summary>
<div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
              No, this offer is built for businesses that already have someone
              who can implement (like an in-house developer, marketing
              assistant, or writer). We provide the blueprint.
            </div>
</details>
<details className="group border border-slate-200 rounded-md bg-white">
<summary className="flex justify-between items-center cursor-pointer p-5 text-sm font-medium text-slate-900 select-none">
              What if we are a local business?
              <iconify-icon className="text-lg text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</summary>
<div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
              Then local SEO and Google Business Profile recommendations will be
              included natively in your action plan, where relevant to your
              goals.
            </div>
</details>
<details className="group border border-slate-200 rounded-md bg-white">
<summary className="flex justify-between items-center cursor-pointer p-5 text-sm font-medium text-slate-900 select-none">
              What if we do not have a developer or content person?
              <iconify-icon className="text-lg text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</summary>
<div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
              This may not be the best fit unless you are willing to hire
              someone (like a freelancer or VA) specifically to implement the
              recommendations we provide.
            </div>
</details>
<details className="group border border-slate-200 rounded-md bg-white">
<summary className="flex justify-between items-center cursor-pointer p-5 text-sm font-medium text-slate-900 select-none">
              Is this a monthly retainer?
              <iconify-icon className="text-lg text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</summary>
<div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
              No. It is a one-time SEO Action Pack for $990. No ongoing
              commitments required.
            </div>
</details>
<details className="group border border-slate-200 rounded-md bg-white">
<summary className="flex justify-between items-center cursor-pointer p-5 text-sm font-medium text-slate-900 select-none">
              Do you guarantee rankings?
              <iconify-icon className="text-lg text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</summary>
<div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
              No. No serious SEO should guarantee rankings. We give you a clear,
              prioritized plan based on proven SEO experience and real website
              analysis.
            </div>
</details>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-12">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-[4px] flex items-center justify-center text-white bg-blue-600">
<iconify-icon className="text-sm" icon="solar:box-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-900">
            SEOpack.net
          </span>
</div>
<div className="text-sm text-slate-500">
          © SEOpack.net. A productized SEO service.
        </div>
</div>
</footer>

    </>
  );
}
