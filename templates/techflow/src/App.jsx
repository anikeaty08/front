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
      


<div className="text-sm font-medium text-white text-center bg-slate-950 w-full px-4 py-2">
      Coming soon
    </div>
<nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-xl">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex overflow-hidden bg-center bg-neutral-50 w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/34d0479f-216e-4692-9c0f-b91273d46017_320w.png)] bg-cover rounded-lg shadow-sm items-center justify-center">
</div>
<span className="text-lg font-bold tracking-tight text-slate-900">
            TechFlow
          </span>
</div>
<ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<li className="">
<a className="hover:text-emerald-600 transition-colors" href="#">
              Home
            </a>
</li>
<li>
<a className="hover:text-emerald-600 transition-colors" href="#tools">
              Best Tools
            </a>
</li>
<li className="">
<a className="hover:text-emerald-600 transition-colors" href="#about">
              About
            </a>
</li>
<li>
<a className="hover:text-emerald-600 transition-colors" href="#contact">
              Contact
            </a>
</li>
</ul>
<button className="hover:bg-emerald-700 transition-colors flex text-xs font-semibold text-white bg-emerald-600 rounded-full pt-2 pr-5 pb-2 pl-5 shadow-sm gap-x-2 gap-y-2 items-center">
          Explore
        </button>
</div>
</nav>

<header className="flex flex-col text-left max-w-5xl mr-auto ml-auto pt-6 pr-6 pl-6 relative items-start">
<div className="inline-flex text-xs font-semibold text-emerald-800 text-center bg-emerald-50 border-emerald-200 border rounded-full mb-8 pt-1.5 pr-3 pb-1.5 pl-3 shadow-sm gap-x-2 items-center justify-center gap-y-6">
        #1 SaaS Directory in Aotearoa
      </div>
<h1 className="md:text-6xl leading-[1.1] text-5xl font-bold text-slate-900 tracking-tight text-left pt-7 pb-7">
        Find the Best SaaS for your
        <span className="text-emerald-600">NZ Business</span>
</h1>
<p className="md:text-xl leading-relaxed text-lg font-normal text-slate-600 text-left max-w-none pb-10">
        Curated software recommendations, honest reviews and practical AI tools
        to help businesses grow smarter.
      </p>
<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
<a className="sm:w-auto hover:bg-emerald-700 transition-all hover:shadow-lg text-sm font-semibold text-white bg-emerald-600 w-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-md" href="#tools">Explore</a>
<button className="sm:w-auto hover:bg-slate-50 transition-all flex gap-2 text-sm font-semibold text-slate-700 bg-white w-full border-slate-200 border rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-sm gap-x-2 gap-y-2 items-center justify-center">
<iconify-icon className="text-lg text-emerald-600" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
          Join Newsletter
        </button>
</div>
<div className="mt-16 w-full max-w-4xl relative fade-in-up">
</div>
</header>

<section className="border-y bg-slate-50/50 border-slate-200 pt-20 pb-20">
<div className="flex flex-col md:flex-row gap-16 max-w-5xl mr-auto ml-auto pr-6 pl-6 gap-x-16 gap-y-16 items-center">
<div className="flex-1">
<h2 className="uppercase text-sm font-bold text-emerald-600 tracking-widest mb-3">
            TechFlow
          </h2>
<h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
            Practical tools for modern growth.
          </h3>
<p className="leading-relaxed text-lg text-slate-600 mb-8">
            TechFlow helps businesses discover practical SaaS and AI tools for
            sales, marketing, productivity and growth. We focus on software that
            delivers real value.
          </p>
<p className="text-slate-900 font-semibold mb-4">
            We focus on software that helps teams:
          </p>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-600">
<li className="flex items-center gap-3">
<iconify-icon className="text-emerald-500 text-xl" icon="solar:check-circle-bold"></iconify-icon>
              Generate leads
            </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-emerald-500 text-xl" icon="solar:check-circle-bold"></iconify-icon>
              Automate workflows
            </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-emerald-500 text-xl" icon="solar:check-circle-bold"></iconify-icon>
              Improve outreach
            </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-emerald-500 text-xl" icon="solar:check-circle-bold"></iconify-icon>
              Increase productivity
            </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-emerald-500 text-xl" icon="solar:check-circle-bold"></iconify-icon>
              Close more deals
            </li>
</ul>
</div>
<div className="flex-1 w-full max-w-sm relative">
<div className="bg-white border-slate-200 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-xl">
<div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-6">
<div className="">
<div className="text-base font-bold text-slate-900">Kiwi-Ready</div>
<div className="text-sm text-slate-500">SaaS verified for the New Zealand market. From tax compliance to local integrations.</div>
</div>
</div>
<div className="space-y-5">
<div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-3/4"></div>
</div>
<div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-400 w-1/2"></div>
</div>
<div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-300 w-5/6"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<main className="flex-grow flex flex-col gap-12 w-full max-w-5xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 gap-x-12 gap-y-12">
<div className="text-center max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
          Featured Categories
        </h2>
<p className="text-lg text-slate-600">
          Find the right tools for your specific workflow.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bento-card rounded-3xl p-8 flex flex-col group cursor-pointer">
<div className="flex group-hover:scale-110 transition-transform bg-emerald-50 w-12 h-12 rounded-2xl mb-6 items-center justify-center">
<iconify-icon className="text-2xl text-emerald-600" height="24" icon="solar:rocket-2-outline" style={{color: 'rgb(5, 150, 105)'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold tracking-tight text-slate-900 mb-3">
            Sales Tools
          </h3>
<p className="text-sm text-slate-600 leading-relaxed">
            CRMs, prospecting, outreach and automation software to accelerate
            revenue.
          </p>
</div>
<div className="bento-card flex flex-col group cursor-pointer rounded-3xl pt-8 pr-8 pb-8 pl-8">
<div className="flex group-hover:scale-110 transition-transform bg-emerald-50 w-12 h-12 rounded-2xl mb-6 items-center justify-center">
<iconify-icon className="text-2xl text-emerald-600" icon="solar:megaphone-bold-duotone"></iconify-icon>
<iconify-icon className="text-2xl text-emerald-600" height="24" icon="solar:asteroid-outline" style={{color: 'rgb(5, 150, 105)'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold tracking-tight text-slate-900 mb-3">
            Marketing Tools
          </h3>
<p className="text-sm text-slate-600 leading-relaxed">
            SEO, email marketing, analytics and content tools to build your
            audience.
          </p>
</div>
<div className="bento-card rounded-3xl p-8 flex flex-col group cursor-pointer">
<div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-emerald-600" icon="solar:magic-stick-3-bold-duotone"></iconify-icon>
</div>
<h3 className="text-xl font-bold tracking-tight text-slate-900 mb-3">
            AI Tools
          </h3>
<p className="text-sm text-slate-600 leading-relaxed">
            AI assistants, workflow automation and productivity tools to work
            smarter.
          </p>
</div>
</div>
</main>
<section className="py-24 bg-slate-50 border-t border-slate-200" id="tools">
<div className="max-w-5xl mx-auto px-6">
<div className="flex items-end justify-between mb-12">
<div className="">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Featured Software
            </h2>
<p className="text-lg text-slate-600">
              Top-rated tools for modern teams.
            </p>
</div>
<a className="hidden md:flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700" href="#">
            View all tools
            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-lg bg-[#ff7a59]/10 flex items-center justify-center">
<iconify-icon className="text-2xl text-[#ff7a59]" icon="simple-icons:hubspot"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-bold text-slate-900">HubSpot</h3>
<div className="flex gap-1 text-emerald-500 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>
<p className="text-sm text-slate-600 mb-6 flex-grow">
              All-in-one CRM platform for marketing, sales, and customer
              service.
            </p>
<button className="w-full py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold rounded-xl border border-slate-200 transition-colors">
              Read Review
            </button>
</div>
<div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center">
<iconify-icon className="text-2xl text-yellow-500" icon="solar:rocket-bold"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-bold text-slate-900">Apollo.io</h3>
<div className="flex gap-1 text-emerald-500 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold-half"></iconify-icon>
</div>
</div>
</div>
<p className="text-sm text-slate-600 mb-6 flex-grow">
              The leading B2B sales intelligence and engagement platform.
            </p>
<button className="w-full py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold rounded-xl border border-slate-200 transition-colors">
              Read Review
            </button>
</div>
<div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center">
<iconify-icon className="text-2xl text-white" icon="solar:code-square-bold"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-bold text-slate-900">Clay</h3>
<div className="flex gap-1 text-emerald-500 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>
<p className="text-sm text-slate-600 mb-6 flex-grow">
              Automate data enrichment and personalized cold outreach at scale.
            </p>
<button className="w-full py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold rounded-xl border border-slate-200 transition-colors">
              Read Review
            </button>
</div>
<div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-lg bg-[#ff642d]/10 flex items-center justify-center">
<iconify-icon className="text-2xl text-[#ff642d]" icon="solar:graph-up-bold"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-bold text-slate-900">Semrush</h3>
<div className="flex gap-1 text-emerald-500 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>
<p className="text-sm text-slate-600 mb-6 flex-grow">
              Complete toolkit for SEO, content marketing, and competitor
              research.
            </p>
<button className="w-full py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold rounded-xl border border-slate-200 transition-colors">
              Read Review
            </button>
</div>
<div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
<iconify-icon className="text-2xl text-blue-600" icon="solar:letter-bold"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-bold text-slate-900">Beehiiv</h3>
<div className="flex gap-1 text-emerald-500 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold-half"></iconify-icon>
</div>
</div>
</div>
<p className="text-sm text-slate-600 mb-6 flex-grow">
              The newsletter platform built for growth and monetization.
            </p>
<button className="w-full py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold rounded-xl border border-slate-200 transition-colors">
              Read Review
            </button>
</div>
<div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center">
<iconify-icon className="text-2xl text-slate-900" icon="simple-icons:notion"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-bold text-slate-900">Notion AI</h3>
<div className="flex gap-1 text-emerald-500 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>
<p className="text-sm text-slate-600 mb-6 flex-grow">
              Connected workspace with integrated AI for writing and project
              management.
            </p>
<button className="w-full py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold rounded-xl border border-slate-200 transition-colors">
              Read Review
            </button>
</div>
</div>
</div>
</section>
<section className="bg-black border-slate-200 border-t pt-24 pb-24" id="about">
<div className="text-center max-w-4xl mr-auto ml-auto pr-6 pl-6">
<div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600 text-3xl">
<iconify-icon icon="solar:shield-check-bold-duotone"></iconify-icon>
</div>
<h2 className="md:text-4xl text-3xl font-bold text-neutral-50 tracking-tight mb-6">
          About TechFlow
        </h2>
<p className="leading-relaxed text-lg text-neutral-50 max-w-2xl mr-auto mb-8 ml-auto">
          TechFlow is powered by a team of sales, marketing and AI specialists
          focused on helping modern businesses discover smarter SaaS tools,
          automation platforms and growth systems.
        </p><p className="leading-relaxed text-lg font-medium text-neutral-50 tracking-normal text-center max-w-5xl mb-14 pr-48 pl-48">
          The goal is simple:
          <br/>
<span className="text-emerald-600">
            help businesses discover tools that genuinely improve growth and
            productivity.
          </span>
</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-16">
<div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
<h4 className="font-bold text-slate-900 mb-2">Practical over hype</h4>
<p className="text-sm text-slate-600">
              We filter out the noise and only recommend tools that provide
              measurable value.
            </p>
</div>
<div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
<h4 className="font-bold text-slate-900 mb-2">
              Simple recommendations
            </h4>
<p className="text-sm text-slate-600">
              No jargon, just straightforward reviews on what works and what
              doesn't.
            </p>
</div>
<div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
<h4 className="font-bold text-slate-900 mb-2">Growth-focused tools</h4>
<p className="text-sm text-slate-600">
              Every software listed is evaluated on how well it drives revenue
              or saves time.
            </p>
</div>
</div>
</div>
</section>
<section className="bg-slate-50 border-slate-200 border-t pt-24 pb-24" id="contact">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mr-auto ml-auto pr-6 pl-6 gap-x-12 gap-y-12 items-center">
<div className="">
<h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">
            Get in Touch
          </h2>
<p className="text-slate-600 mb-8 text-lg">
            Have a tool to suggest or looking to partner with us? Fill out the
            form and we'll get back to you shortly.
          </p>
<div className="space-y-4">
<div className="flex gap-3 font-medium text-slate-700 gap-x-3 gap-y-3 items-center">
              Work with US
            </div>
<div className="flex gap-3 font-medium text-slate-700 gap-x-3 gap-y-3 items-center">
              List your SaaS
            </div>
</div>
</div>
<div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
<form className="flex flex-col gap-4">
<div className="">
<label className="block text-sm font-semibold text-slate-900 mb-1">
                Name
              </label>
<input className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all" placeholder="Jane Doe" type="text"/>
</div>
<div className="">
<label className="block text-sm font-semibold text-slate-900 mb-1">
                Email
              </label>
<input className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all" placeholder="jane@company.com" type="email"/>
</div>
<div className="">
<label className="block text-sm font-semibold text-slate-900 mb-1">
                Message
              </label>
<textarea className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all resize-none" placeholder="How can we help?" rows="4"></textarea>
</div>
<button className="hover:bg-emerald-700 transition-colors font-semibold text-white bg-emerald-600 w-full rounded-xl mt-2 pt-3 pb-3" type="button">
              Send Message
            </button>
</form>
</div>
</div>
</section>

<footer className="bg-stone-950 border-slate-200 border-t mt-auto pt-8 pb-8">
<div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-2 flex flex-col gap-4 gap-x-4 gap-y-4">
<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center overflow-hidden shadow-sm">
<img alt="TechFlow Logo" className="bg-slate-100 w-full h-full object-cover border-slate-100 border-0 rounded-none ring-slate-100 ring-0 backdrop-blur-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/34d0479f-216e-4692-9c0f-b91273d46017_320w.png"/>
</div>
<span className="text-xl font-bold text-neutral-50 tracking-tight bg-gray-950">
              TechFlow
            </span>
</div>
<p className="leading-relaxed text-sm text-neutral-50 max-w-sm">
            Discover the best SaaS and AI tools for sales, marketing,
            productivity and business growth.
          </p>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-bold text-neutral-50">Navigation</h4>
<ul className="flex flex-col gap-2 text-sm text-slate-600">
<li className="">
<a className="hover:text-emerald-600 transition-colors text-neutral-50" href="#">
                Home
              </a>
</li>
<li className="">
<a className="hover:text-emerald-600 transition-colors text-neutral-50" href="#tools">
                Best Tools
              </a>
</li>
<li className="">
<a className="hover:text-emerald-600 transition-colors text-neutral-50" href="#about">
                About
              </a>
</li>
<li className="">
<a className="hover:text-emerald-600 transition-colors text-neutral-50" href="#contact">
                Contact
              </a>
</li>
</ul>
</div>
<div className="flex flex-col gap-4 gap-x-4 gap-y-4">
<h4 className="font-bold text-slate-900">Legal</h4>
<ul className="flex flex-col gap-2 text-sm text-slate-600">
<li className="">
<a className="hover:text-emerald-600 transition-colors text-neutral-50" href="#">
                Privacy Policy
              </a>
</li>
<li className="">
<a className="hover:text-emerald-600 transition-colors text-neutral-50" href="#">
                Terms of Service
              </a>
</li>
<li className="">
<a className="hover:text-emerald-600 transition-colors text-neutral-50" href="#">
                Cookie Policy
              </a>
</li>
</ul>
</div>
</div>
<div className="max-w-5xl mx-auto px-6 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
<p className="">© 2026 TechFlow. All rights reserved.</p>
<p className="text-center md:text-right max-w-md italic">
          Affiliate Disclosure: Some links on this website may earn TechFlow a
          commission at no additional cost to you.
        </p>
</div>
</footer>

    </>
  );
}
