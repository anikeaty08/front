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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  
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
      

<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/64c28d7e-2531-485b-8b49-c07d75acae5d_3840w.webp")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>
<div className="aura-background-component top-0 w-full h-screen -z-10 absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="tPmIIl0vKqHO9yqmtge2"></div>

</div></div>

<div className="absolute top-0 inset-x-0 h-screen overflow-hidden -z-10 pointer-events-none flex justify-center">
<div className="w-full max-w-lg aspect-square bg-zinc-800/20 rounded-full blur-3xl opacity-50 translate-y-[-50%]"></div>
</div>

<header className="sticky top-0 z-50 w-full border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md">
<div className="container mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<a className="text-xl font-medium tracking-tighter text-zinc-100 flex items-center gap-1" href="#">ImpossibleWEB</a>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
<a className="hover:text-zinc-100 transition-colors" href="#services">Services</a>
<a className="hover:text-zinc-100 transition-colors" href="#work">Work</a>
<a className="hover:text-zinc-100 transition-colors" href="#about">About</a>
<a className="hover:text-zinc-100 transition-colors" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:flex text-sm text-zinc-300 hover:text-zinc-100 transition-colors" href="#">Sign in</a>
<a className="px-4 py-2 text-sm font-medium bg-zinc-100 text-zinc-950 rounded-md hover:bg-zinc-200 transition-colors" href="#contact">
                    Start Project
                </a>
</div>
</div>
</header>
<main className="flex-grow">

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="container mx-auto px-6 text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-400 mb-8 backdrop-blur-sm">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                    Accepting new projects for Q4
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-zinc-100 max-w-4xl leading-tight mb-6">
                    We build digital experiences that drive measurable growth.
                </h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 font-light">
                    Premium web development, technical SEO, and workflow automation for modern e-commerce and fast-growing tech brands.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-6 py-3 text-sm font-medium bg-zinc-100 text-zinc-950 rounded-md hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" href="#contact">
                        Book Consultation
                        <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-full sm:w-auto px-6 py-3 text-sm font-medium bg-transparent border border-zinc-800 text-zinc-300 rounded-md hover:bg-zinc-900 hover:text-zinc-100 transition-colors flex items-center justify-center gap-2" href="#work">
                        View Portfolio
                    </a>
</div>

<div className="mt-24 pt-10 border-t border-zinc-900 w-full max-w-5xl">
<p className="text-xs text-zinc-500 mb-6 uppercase tracking-widest text-center">Trusted by innovative teams</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
<span className="text-xl font-medium tracking-tighter text-zinc-400 flex items-center gap-1"><iconify-icon icon="solar:box-linear"></iconify-icon> ACME</span>
<span className="text-xl font-medium tracking-tighter text-zinc-400 flex items-center gap-1"><iconify-icon icon="solar:infinity-linear"></iconify-icon> GLOBAL</span>
<span className="text-xl font-medium tracking-tighter text-zinc-400 flex items-center gap-1"><iconify-icon icon="solar:planet-linear"></iconify-icon> SPHERE</span>
<span className="text-xl font-medium tracking-tighter text-zinc-400 flex items-center gap-1"><iconify-icon icon="solar:triangle-linear"></iconify-icon> APEX</span>
<span className="text-xl font-medium tracking-tighter text-zinc-400 flex items-center gap-1 hidden md:flex"><iconify-icon icon="solar:hexagon-linear"></iconify-icon> NEXUS</span>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-zinc-900 bg-zinc-950/50">
<div className="container mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-zinc-900">
<div className="flex flex-col items-center text-center px-4">
<span className="text-4xl font-medium tracking-tight text-zinc-100 mb-2">120+</span>
<span className="text-sm text-zinc-500">Projects Delivered</span>
</div>
<div className="flex flex-col items-center text-center px-4">
<span className="text-4xl font-medium tracking-tight text-zinc-100 mb-2">$50M</span>
<span className="text-sm text-zinc-500">Revenue Generated</span>
</div>
<div className="flex flex-col items-center text-center px-4">
<span className="text-4xl font-medium tracking-tight text-zinc-100 mb-2">98%</span>
<span className="text-sm text-zinc-500">Client Retention</span>
</div>
<div className="flex flex-col items-center text-center px-4">
<span className="text-4xl font-medium tracking-tight text-zinc-100 mb-2">&lt;2</span>
<span className="text-sm text-zinc-500">Weeks to Launch</span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="services">
<div className="container mx-auto px-6">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-100 mb-4">Core capabilities</h2>
<p className="text-lg text-zinc-400">We focus on high-impact services that directly influence your bottom line. No fluff, just results.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group p-8 rounded-2xl border border-zinc-900 bg-zinc-950 hover:bg-zinc-900/50 transition-all duration-300">
<div className="h-12 w-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 mb-6 group-hover:text-zinc-50 group-hover:border-zinc-700 transition-colors">
<iconify-icon className="text-2xl" icon="solar:code-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-100 mb-3">Custom Web Development</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">
                            Blazing fast, scalable applications built with Next.js, React, and modern serverless architectures tailored to your business logic.
                        </p>
<ul className="space-y-2 text-sm text-zinc-500">
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-700" icon="solar:check-circle-linear"></iconify-icon> Headless Commerce</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-700" icon="solar:check-circle-linear"></iconify-icon> Web Applications</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-700" icon="solar:check-circle-linear"></iconify-icon> API Integration</li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-zinc-900 bg-zinc-950 hover:bg-zinc-900/50 transition-all duration-300">
<div className="h-12 w-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 mb-6 group-hover:text-zinc-50 group-hover:border-zinc-700 transition-colors">
<iconify-icon className="text-2xl" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-100 mb-3">High-Converting Landing Pages</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">
                            Pixel-perfect design meets conversion rate optimization. We build landing pages that turn ad clicks into loyal customers.
                        </p>
<ul className="space-y-2 text-sm text-zinc-500">
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-700" icon="solar:check-circle-linear"></iconify-icon> A/B Testing Setup</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-700" icon="solar:check-circle-linear"></iconify-icon> Copywriting Support</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-700" icon="solar:check-circle-linear"></iconify-icon> Performance Audits</li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-zinc-900 bg-zinc-950 hover:bg-zinc-900/50 transition-all duration-300">
<div className="h-12 w-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 mb-6 group-hover:text-zinc-50 group-hover:border-zinc-700 transition-colors">
<iconify-icon className="text-2xl" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-100 mb-3">Technical SEO</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">
                            Foundation-first search engine optimization. We fix technical debt, improve site speed, and structure data for maximum visibility.
                        </p>
<ul className="space-y-2 text-sm text-zinc-500">
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-700" icon="solar:check-circle-linear"></iconify-icon> Core Web Vitals</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-700" icon="solar:check-circle-linear"></iconify-icon> Schema Markup</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-700" icon="solar:check-circle-linear"></iconify-icon> Crawlability Fixes</li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-zinc-900 bg-zinc-950 hover:bg-zinc-900/50 transition-all duration-300">
<div className="h-12 w-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 mb-6 group-hover:text-zinc-50 group-hover:border-zinc-700 transition-colors">
<iconify-icon className="text-2xl" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-100 mb-3">Workflow Automation</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">
                            Eliminate manual tasks. We design and implement robust automations using n8n and custom webhooks to streamline operations.
                        </p>
<ul className="space-y-2 text-sm text-zinc-500">
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-700" icon="solar:check-circle-linear"></iconify-icon> CRM Syncing</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-700" icon="solar:check-circle-linear"></iconify-icon> Order Processing</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-700" icon="solar:check-circle-linear"></iconify-icon> Custom n8n Nodes</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-900" id="work">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-100 mb-4">Proven results</h2>
<p className="text-lg text-zinc-400">We measure success by the impact we create. Here is how we've helped our clients scale.</p>
</div>
<a className="text-sm text-zinc-300 hover:text-zinc-100 flex items-center gap-2 transition-colors pb-2" href="#">
                        View all case studies
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950 aspect-[4/3] flex flex-col justify-between p-8 hover:border-zinc-700 transition-colors">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex items-center gap-2 text-zinc-500 text-sm">
<iconify-icon icon="solar:shop-linear"></iconify-icon> E-commerce
                        </div>
<div className="relative z-10">
<div className="text-4xl font-medium tracking-tight text-emerald-400 mb-2">+45%</div>
<h3 className="text-lg font-medium text-zinc-100 mb-2">Conversion Rate Increase</h3>
<p className="text-sm text-zinc-400">Complete headless Shopify migration and checkout optimization for a D2C apparel brand.</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950 aspect-[4/3] flex flex-col justify-between p-8 hover:border-zinc-700 transition-colors">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex items-center gap-2 text-zinc-500 text-sm">
<iconify-icon icon="solar:server-square-linear"></iconify-icon> SaaS
                        </div>
<div className="relative z-10">
<div className="text-4xl font-medium tracking-tight text-blue-400 mb-2">2.5x</div>
<h3 className="text-lg font-medium text-zinc-100 mb-2">Organic Traffic Growth</h3>
<p className="text-sm text-zinc-400">Technical SEO overhaul and programmatic content generation structure implementation.</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950 aspect-[4/3] flex flex-col justify-between p-8 hover:border-zinc-700 transition-colors">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex items-center gap-2 text-zinc-500 text-sm">
<iconify-icon icon="solar:settings-linear"></iconify-icon> Logistics
                        </div>
<div className="relative z-10">
<div className="text-4xl font-medium tracking-tight text-purple-400 mb-2">120h</div>
<h3 className="text-lg font-medium text-zinc-100 mb-2">Saved Monthly</h3>
<p className="text-sm text-zinc-400">Custom n8n automation pipeline bridging legacy ERP systems with modern dispatch tools.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-zinc-900/20 border-y border-zinc-800/50"></div>
<div className="container mx-auto px-6 relative z-10">
<div className="max-w-4xl mx-auto rounded-3xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-12">
<div className="flex-1">
<h2 className="text-3xl font-medium tracking-tight text-zinc-100 mb-4">Ready to scale?</h2>
<p className="text-sm text-zinc-400 mb-8">Tell us about your project. We typically respond within 24 hours to schedule a discovery call and provide a detailed proposal.</p>
<div className="space-y-4 text-sm text-zinc-300">
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
<span>Direct access to senior developers &amp; strategists</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
<span>Transparent pricing and timeline estimates</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
<span className="">No commitment required for initial consultation</span>
</div>
</div>
</div>
<div className="flex-1 w-full">
<form className="space-y-4" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400 px-1">Name</label>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 focus:bg-zinc-900 transition-colors" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400 px-1">Work Email</label>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 focus:bg-zinc-900 transition-colors" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400 px-1">Project Type</label>
<div className="relative">
<select className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-zinc-100 appearance-none focus:outline-none focus:border-zinc-600 focus:bg-zinc-900 transition-colors cursor-pointer">
<option className="text-zinc-600" disabled="" selected="" value="">Select an area of interest...</option>
<option value="web">Web Development</option>
<option value="seo">Technical SEO</option>
<option value="automation">Workflow Automation</option>
<option value="other">Other / General Inquiry</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400 px-1">Brief Details</label>
<textarea className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 focus:bg-zinc-900 transition-colors resize-none" placeholder="Tell us about your goals and current challenges..." rows="3"></textarea>
</div>
<button className="w-full py-3 mt-2 text-sm font-medium bg-zinc-100 text-zinc-950 rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" type="submit">
                                Request Proposal
                                <iconify-icon icon="solar:plain-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-900 bg-zinc-950 pt-16 pb-8">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
<div className="md:col-span-2">
<a className="text-xl font-medium tracking-tighter text-zinc-100 flex items-center gap-1 mb-4" href="#">
<iconify-icon icon="solar:layers-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        STDO.
                    </a>
<p className="text-sm text-zinc-400 max-w-sm mb-6">
                        A specialized digital agency focused on building high-performance web experiences, technical SEO, and business automation.
                    </p>
<div className="flex items-center gap-4 text-zinc-500">
<a className="hover:text-zinc-100 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon></a>
<a className="hover:text-zinc-100 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon></a>
</div>
</div>
<div className="">
<h4 className="text-sm font-medium text-zinc-100 mb-4">Services</h4>
<ul className="space-y-3 text-sm text-zinc-400">
<li><a className="hover:text-zinc-100 transition-colors" href="#">Web Development</a></li>
<li className=""><a className="hover:text-zinc-100 transition-colors" href="#">Landing Pages</a></li>
<li className=""><a className="hover:text-zinc-100 transition-colors" href="#">Technical SEO</a></li>
<li><a className="hover:text-zinc-100 transition-colors" href="#">n8n Automation</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-medium text-zinc-100 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-zinc-400">
<li className=""><a className="hover:text-zinc-100 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-zinc-100 transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-zinc-100 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-zinc-100 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-100 mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-zinc-400">
<li><a className="hover:text-zinc-100 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-zinc-100 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-zinc-100 transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
<p className="">© 2024 Studio Agency. All rights reserved.</p>
<div className="flex items-center gap-4">
<span>Designed for scale.</span>
<span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500/50"></span>
<span>Systems Operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
