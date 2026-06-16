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


(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PZW94FPC');


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
      

<noscript><iframe height="0" src="https://www.googletagmanager.com/ns.html?id=GTM-PZW94FPC" style={{display: 'none', visibility: 'hidden'}} width="0"></iframe></noscript>


<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-sky-600/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-500/5 rounded-full blur-[100px]"></div>
<div className="absolute top-[40%] left-[50%] w-[60%] h-[20%] bg-sky-400/5 rounded-full blur-[150px] -translate-x-1/2"></div>

<div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
</div>

<header className="fixed top-0 inset-x-0 z-50 bg-slate-950/70 backdrop-blur-md border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 text-white font-semibold text-lg tracking-widest uppercase">
<iconify-icon className="text-amber-400 text-xl" icon="solar:cup-star-linear" strokeWidth="1.5"></iconify-icon>
<span>MESSI2026</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors tracking-wide" href="#story">Story</a>
<a className="hover:text-white transition-colors tracking-wide" href="#features">Features</a>
<a className="hover:text-white transition-colors tracking-wide" href="#fit">Fit &amp; Size</a>
<a className="hover:text-white transition-colors tracking-wide" href="#insight">AI Insight</a>
<a className="hover:text-white transition-colors tracking-wide" href="#faq">FAQ</a>
</nav>
<div>
<a className="inline-flex items-center justify-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all tracking-wide backdrop-blur-sm" href="#cta">
                    Check Availability
                </a>
</div>
</div>
</header>
<main className="relative z-10 pt-16">

<section className="relative min-h-[90vh] flex items-center py-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 items-center">
<div className="flex flex-col gap-8 animate-fade-in-up">
<div className="flex flex-wrap gap-3">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium tracking-wide">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon> Official FIFA Store
                        </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 text-xs font-medium tracking-wide">
<iconify-icon icon="solar:tag-linear" strokeWidth="1.5"></iconify-icon> adidas Authentic
                        </span>
</div>
<div className="flex flex-col gap-4">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1]">
                            Wear the Legacy.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-200">The 2026 Edition.</span>
</h1>
<p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
                            The official Argentina 2026 Messi Authentic Home Jersey. Engineered with CLIMACOOL+ for peak performance. Designed for true fans and collectors honoring the third star.
                        </p>
</div>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-4 text-amber-400 text-sm font-medium bg-amber-400/5 border border-amber-400/20 px-4 py-3 rounded-xl w-fit">
<iconify-icon className="text-lg" icon="solar:danger-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Currently sold out on FIFA Official Store. Check restock updates.
                        </div>
<div className="text-2xl font-medium text-white tracking-tight">$180 <span className="text-xs text-slate-500 font-normal">USD</span></div>
</div>
<div className="flex flex-col sm:flex-row gap-4 mt-2">
<a className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-sky-400 to-sky-200 hover:from-sky-300 hover:to-sky-100 rounded-full transition-all shadow-[0_0_20px_-5px_rgba(56,189,248,0.5)]" href="#cta">
                            Check Availability
                            <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all backdrop-blur-sm" href="#story">
                            View Details
                        </a>
</div>
</div>
<div className="relative lg:h-[600px] flex items-center justify-center animate-fade-in-up delay-200">

<div className="relative w-full max-w-md aspect-[3/4] rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent border border-white/10 backdrop-blur-xl p-8 flex items-center justify-center shadow-2xl animate-float">
<div className="absolute inset-0 rounded-[2rem] bg-sky-500/5 blur-2xl pointer-events-none"></div>

<div className="relative w-full h-full flex flex-col items-center justify-center gap-6 z-10">
<iconify-icon className="text-[8rem] text-sky-200/80 drop-shadow-[0_0_15px_rgba(186,230,253,0.3)]" icon="solar:t-shirt-linear" strokeWidth="1.5"></iconify-icon>
<div className="text-center">
<div className="text-sm font-semibold text-white tracking-widest uppercase mb-1">Authentic Men's</div>
<div className="text-xs text-sky-300/80 tracking-wide">100% Recycled Polyester</div>
</div>
</div>

<div className="absolute -right-6 top-20 bg-slate-900/90 border border-white/10 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center gap-2 shadow-xl">
<iconify-icon className="text-amber-400" icon="solar:star-fall-linear"></iconify-icon>
<span className="text-xs font-medium text-white">Three Stars</span>
</div>
<div className="absolute -left-6 bottom-32 bg-slate-900/90 border border-white/10 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center gap-2 shadow-xl">
<iconify-icon className="text-sky-400" icon="solar:wind-linear"></iconify-icon>
<span className="text-xs font-medium text-white">CLIMACOOL+</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="story">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
<iconify-icon className="text-4xl text-amber-400/80 mb-6" icon="solar:cup-first-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-8">More Than Fabric. A Symbol of Triumphant Legacy.</h2>
<div className="space-y-6 text-base md:text-lg text-slate-400 leading-relaxed font-normal">
<p>
                        The Argentina 2026 Messi jersey is not just apparel; it is a canvas of history. Following a historic victory, this authentic home kit represents national pride, the unyielding spirit of the team, and the unparalleled journey of Lionel Messi.
                    </p>
<p>
                        Crafted for the future but rooted in heritage, the iconic sky blue and white stripes return with forward-thinking design elements. This is the first edition to proudly display Argentina's third World Cup winners’ star—a detail that transforms a match shirt into a priceless collector’s artifact.
                    </p>
<p className="text-slate-300 font-medium mt-4">
                        Whether you are cheering from the stands or preserving it in a display case, wearing this jersey means wearing the heart of world champions.
                    </p>
</div>
</div>
</section>

<section className="py-24 bg-slate-950/50 border-y border-white/5 relative" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">Engineered for the Pitch</h2>
<p className="mt-4 text-sm text-slate-400">The exact specifications worn by the pros.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] hover:border-white/[0.1] backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 group">
<div className="h-12 w-12 rounded-xl bg-sky-500/10 flex items-center justify-center border border-sky-500/20 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-sky-400" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Authentic Match Feel</h3>
<p className="text-sm text-slate-400 leading-relaxed">Identical to the shirts worn by the national team. Designed for elite performance, not just casual support.</p>
</div>

<div className="bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] hover:border-white/[0.1] backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 group">
<div className="h-12 w-12 rounded-xl bg-sky-500/10 flex items-center justify-center border border-sky-500/20 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-sky-400" icon="solar:wind-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">CLIMACOOL+ Comfort</h3>
<p className="text-sm text-slate-400 leading-relaxed">Advanced adidas cooling technology manages moisture and temperature during the most intense moments.</p>
</div>

<div className="bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] hover:border-white/[0.1] backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 group">
<div className="h-12 w-12 rounded-xl bg-sky-500/10 flex items-center justify-center border border-sky-500/20 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-sky-400" icon="solar:droplets-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Quick-Drying Fabric</h3>
<p className="text-sm text-slate-400 leading-relaxed">Ultra-lightweight yarns wick sweat away rapidly, keeping you dry from kickoff to the final whistle.</p>
</div>

<div className="bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] hover:border-white/[0.1] backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 group">
<div className="h-12 w-12 rounded-xl bg-sky-500/10 flex items-center justify-center border border-sky-500/20 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-sky-400" icon="solar:user-id-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Slim Performance Fit</h3>
<p className="text-sm text-slate-400 leading-relaxed">Tailored closely to the body to reduce weight and wind resistance. A true athletic cut.</p>
</div>

<div className="bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] hover:border-white/[0.1] backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 group">
<div className="h-12 w-12 rounded-xl bg-green-500/10 flex items-center justify-center border border-green-500/20 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-green-400" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">100% Recycled Polyester</h3>
<p className="text-sm text-slate-400 leading-relaxed">Engineered with sustainability in mind, utilizing high-performance recycled materials to help end plastic waste.</p>
</div>

<div className="bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] hover:border-white/[0.1] backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 group">
<div className="h-12 w-12 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-amber-400" icon="solar:star-ring-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">2026 Heritage Design</h3>
<p className="text-sm text-slate-400 leading-relaxed">Features the highly anticipated third star and intricate design details celebrating Argentina's rich footballing history.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">Why the Authentic Edition Feels Different</h2>
<p className="text-base text-slate-400 mb-8 leading-relaxed">
                        There is a profound difference between a standard fan replica and an authentic performance jersey. The adidas Argentina 2026 Authentic Jersey is engineered with zero compromises.
                    </p>
<ul className="space-y-5">
<li className="flex items-start gap-4">
<iconify-icon className="text-sky-400 text-xl mt-0.5 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-white mb-1">Ultra-Lightweight Construction</h4>
<p className="text-xs text-slate-400">Noticeably lighter feel compared to fan versions, designed to maximize agility on the pitch.</p>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-sky-400 text-xl mt-0.5 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-white mb-1">Premium Heat-Applied Details</h4>
<p className="text-xs text-slate-400">Crests and badges are heat-transferred rather than woven, reducing weight and friction against the skin.</p>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-sky-400 text-xl mt-0.5 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-white mb-1">High Collector Appeal</h4>
<p className="text-xs text-slate-400">Authentic versions are produced in lower quantities and represent the pinnacle of merchandise, making them highly sought after by collectors.</p>
</div>
</li>
</ul>
</div>

<div className="bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/30 border border-white/10 rounded-3xl p-8 relative shadow-2xl backdrop-blur-xl" id="insight">
<div className="absolute top-0 right-0 p-6 opacity-20 pointer-events-none">
<iconify-icon className="text-6xl text-sky-400" icon="solar:cpu-linear"></iconify-icon>
</div>
<div className="flex items-center gap-3 mb-6">
<div className="h-8 w-8 rounded-full bg-sky-500/20 flex items-center justify-center border border-sky-500/30">
<iconify-icon className="text-sky-400" icon="solar:smart-home-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">AI Jersey Insight</h3>
</div>
<p className="text-sm text-slate-300 mb-6">Based on product specifications and fan feedback, this authentic jersey is ideal for:</p>
<div className="space-y-3 mb-8">
<div className="flex items-center gap-3 text-sm text-slate-400 bg-black/20 p-2.5 rounded-lg border border-white/5">
<iconify-icon className="text-sky-500" icon="solar:alt-arrow-right-linear"></iconify-icon> Serious football merchandise collectors
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-400 bg-black/20 p-2.5 rounded-lg border border-white/5">
<iconify-icon className="text-sky-500" icon="solar:alt-arrow-right-linear"></iconify-icon> Dedicated Lionel Messi supporters
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-400 bg-black/20 p-2.5 rounded-lg border border-white/5">
<iconify-icon className="text-sky-500" icon="solar:alt-arrow-right-linear"></iconify-icon> Match-day wear and active performance
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-400 bg-black/20 p-2.5 rounded-lg border border-white/5">
<iconify-icon className="text-sky-500" icon="solar:alt-arrow-right-linear"></iconify-icon> Premium gifting for football lovers
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-400 bg-black/20 p-2.5 rounded-lg border border-white/5">
<iconify-icon className="text-sky-500" icon="solar:alt-arrow-right-linear"></iconify-icon> Those who prefer a tailored, slim fit
                        </div>
</div>
<div className="bg-sky-900/20 border border-sky-500/30 rounded-xl p-4 flex gap-3">
<iconify-icon className="text-sky-400 text-xl shrink-0 mt-0.5" icon="solar:info-circle-linear"></iconify-icon>
<div>
<span className="block text-xs font-semibold text-sky-300 mb-1 tracking-wide uppercase">Smart Recommendation</span>
<span className="text-xs text-sky-100/70 leading-relaxed">If you prefer a looser, casual fit for everyday wear, strongly consider sizing up because this jersey utilizes a slim performance fit designed for athletes.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900/50 border-t border-white/5" id="fit">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-10">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-3">Size &amp; Fit Guidance</h2>
<p className="text-sm text-slate-400">Ensure the perfect fit for your authentic jersey.</p>
</div>
<div className="bg-slate-950 border border-white/10 rounded-2xl p-6 md:p-8">
<div className="flex flex-col md:flex-row gap-8 items-start">
<div className="w-full md:w-1/3">
<h3 className="text-base font-medium text-white mb-2">Slim Fit Cut</h3>
<p className="text-xs text-slate-400 leading-relaxed mb-4">
                                This authentic jersey is designed to sit close to the body, minimizing distractions and maximizing aerodynamic performance. 
                            </p>
<p className="text-xs text-amber-400 bg-amber-400/10 px-3 py-2 rounded-lg border border-amber-400/20">
<strong>Tip:</strong> Always check the official size chart before purchasing. Availability of sizes may change rapidly.
                            </p>
</div>
<div className="w-full md:w-2/3 overflow-x-auto">
<table className="w-full text-left text-sm text-slate-400 border-collapse">
<thead>
<tr className="border-b border-white/10 text-slate-300 text-xs uppercase tracking-wider">
<th className="pb-3 px-2 font-medium">Size</th>
<th className="pb-3 px-2 font-medium">Chest (inches)</th>
<th className="pb-3 px-2 font-medium">Waist (inches)</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="py-3 px-2 font-medium text-white">S</td>
<td className="py-3 px-2">34 - 37</td>
<td className="py-3 px-2">30 - 32</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="py-3 px-2 font-medium text-white">M</td>
<td className="py-3 px-2">37 - 40</td>
<td className="py-3 px-2">32 - 35</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="py-3 px-2 font-medium text-white">L</td>
<td className="py-3 px-2">40 - 44</td>
<td className="py-3 px-2">35 - 39</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="py-3 px-2 font-medium text-white">XL</td>
<td className="py-3 px-2">44 - 48</td>
<td className="py-3 px-2">39 - 43</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="py-3 px-2 font-medium text-white">2XL</td>
<td className="py-3 px-2">48 - 52</td>
<td className="py-3 px-2">43 - 47</td>
</tr>
<tr className="hover:bg-white/5 transition-colors">
<td className="py-3 px-2 font-medium text-white">3XL</td>
<td className="py-3 px-2">53 - 58</td>
<td className="py-3 px-2">48 - 53</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="flex flex-col gap-3 group">
<div className="w-full aspect-[4/5] bg-slate-900 border border-white/5 rounded-2xl flex items-center justify-center overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-4xl text-slate-700 group-hover:scale-110 transition-transform" icon="solar:ticket-linear"></iconify-icon>
</div>
<p className="text-xs text-center text-slate-400 font-medium">Match Day Glory</p>
</div>
<div className="flex flex-col gap-3 group">
<div className="w-full aspect-[4/5] bg-slate-900 border border-white/5 rounded-2xl flex items-center justify-center overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-4xl text-slate-700 group-hover:scale-110 transition-transform" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<p className="text-xs text-center text-slate-400 font-medium">Watching with Friends</p>
</div>
<div className="flex flex-col gap-3 group">
<div className="w-full aspect-[4/5] bg-slate-900 border border-white/5 rounded-2xl flex items-center justify-center overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-4xl text-slate-700 group-hover:scale-110 transition-transform" icon="solar:archive-linear"></iconify-icon>
</div>
<p className="text-xs text-center text-slate-400 font-medium">Sports Collection</p>
</div>
<div className="flex flex-col gap-3 group">
<div className="w-full aspect-[4/5] bg-slate-900 border border-white/5 rounded-2xl flex items-center justify-center overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-4xl text-slate-700 group-hover:scale-110 transition-transform" icon="solar:gift-linear"></iconify-icon>
</div>
<p className="text-xs text-center text-slate-400 font-medium">The Ultimate Gift</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950/80 border-y border-white/5 relative">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight">Understanding Your Jersey</h2>
<p className="mt-4 text-sm text-slate-400">Make an informed decision between the Authentic and Regular Fan editions.</p>
</div>
<div className="bg-slate-900/50 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm">
<table className="w-full text-left text-sm">
<thead>
<tr className="bg-white/5 border-b border-white/10">
<th className="p-5 font-medium text-slate-300 w-1/3">Feature</th>
<th className="p-5 font-semibold text-sky-300 border-l border-white/5 w-1/3 text-center">Authentic (This Item)</th>
<th className="p-5 font-medium text-slate-400 border-l border-white/5 w-1/3 text-center">Regular Fan Jersey</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5 text-slate-400">
<tr>
<td className="p-5 font-medium text-white">Fit</td>
<td className="p-5 text-center bg-sky-900/10 border-l border-white/5 text-slate-300">Slim Performance Fit</td>
<td className="p-5 text-center border-l border-white/5">Standard Regular Fit</td>
</tr>
<tr>
<td className="p-5 font-medium text-white">Fabric Technology</td>
<td className="p-5 text-center bg-sky-900/10 border-l border-white/5 text-slate-300">CLIMACOOL+ (Advanced Cooling)</td>
<td className="p-5 text-center border-l border-white/5">Standard AEROREADY</td>
</tr>
<tr>
<td className="p-5 font-medium text-white">Badges &amp; Crest</td>
<td className="p-5 text-center bg-sky-900/10 border-l border-white/5 text-slate-300">Heat-Applied (Lightweight)</td>
<td className="p-5 text-center border-l border-white/5">Woven / Embroidered</td>
</tr>
<tr>
<td className="p-5 font-medium text-white">Primary Purpose</td>
<td className="p-5 text-center bg-sky-900/10 border-l border-white/5 text-slate-300">Elite Match Performance</td>
<td className="p-5 text-center border-l border-white/5">Casual Everyday Support</td>
</tr>
<tr>
<td className="p-5 font-medium text-white">Collector Value</td>
<td className="p-5 text-center bg-sky-900/10 border-l border-white/5 text-amber-400/90 font-medium">Very High</td>
<td className="p-5 text-center border-l border-white/5">Moderate</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="py-16 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="flex items-center gap-4 bg-white/[0.02] border border-white/5 p-5 rounded-2xl">
<iconify-icon className="text-3xl text-sky-500/70" icon="solar:shield-check-linear"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-white">Official Product</h4>
<p className="text-xs text-slate-500 mt-0.5">FIFA Store / adidas Authentic</p>
</div>
</div>
<div className="flex items-center gap-4 bg-white/[0.02] border border-white/5 p-5 rounded-2xl">
<iconify-icon className="text-3xl text-sky-500/70" icon="solar:box-linear"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-white">30-Day Returns</h4>
<p className="text-xs text-slate-500 mt-0.5">Check official store terms</p>
</div>
</div>
<div className="flex items-center gap-4 bg-white/[0.02] border border-white/5 p-5 rounded-2xl">
<iconify-icon className="text-3xl text-sky-500/70" icon="solar:routing-2-linear"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-white">Global Shipping</h4>
<p className="text-xs text-slate-500 mt-0.5">Calculated at checkout</p>
</div>
</div>
<div className="flex items-center gap-4 bg-white/[0.02] border border-white/5 p-5 rounded-2xl">
<iconify-icon className="text-3xl text-sky-500/70" icon="solar:lock-keyhole-linear"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-white">Secure Checkout</h4>
<p className="text-xs text-slate-500 mt-0.5">Availability may change</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="cta">
<div className="absolute inset-0 bg-gradient-to-br from-sky-900/40 via-slate-950 to-amber-900/10 z-0"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6 leading-tight">
                    Own the Argentina 2026 Messi legacy before the next wave sells out.
                </h2>
<p className="text-sm md:text-base text-sky-200/70 mb-10 max-w-2xl mx-auto">
                    Authentic editions are highly sought after by collectors worldwide. Don't miss the opportunity to secure this piece of football history.
                </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-slate-950 bg-gradient-to-r from-sky-400 to-amber-200 hover:from-sky-300 hover:to-amber-100 rounded-full transition-all shadow-[0_0_30px_-5px_rgba(56,189,248,0.4)]" href="#">
                        Check Availability
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-white bg-black/40 hover:bg-black/60 border border-white/20 rounded-full transition-all backdrop-blur-md" href="https://store.fifa.com/products/adidas-argentina-2026-messi-authentic-home-jersey-mens" rel="noopener noreferrer" target="_blank">
                        View Official Product
                        <iconify-icon className="text-lg" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<p className="mt-6 text-xs text-slate-500">Redirects to the official FIFA Store. Status: Currently Sold Out / Notify Me.</p>
</div>
</section>

<section className="py-24 bg-slate-950 border-t border-white/5 relative" id="faq">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight">Frequently Asked Questions</h2>
<p className="mt-4 text-sm text-slate-400">Everything you need to know about the authentic jersey.</p>
</div>
<div className="space-y-4">

<details className="group bg-white/[0.02] border border-white/5 rounded-2xl p-6 open:bg-white/[0.04] transition-colors cursor-pointer">
<summary className="flex justify-between items-center text-slate-200 font-medium text-base tracking-tight list-none">
                            Is this official merchandise?
                            <iconify-icon className="text-slate-400 transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">Yes. This is the official adidas Argentina 2026 Authentic Home Jersey, as presented on the FIFA Official Store.</p>
</details>

<details className="group bg-white/[0.02] border border-white/5 rounded-2xl p-6 open:bg-white/[0.04] transition-colors cursor-pointer">
<summary className="flex justify-between items-center text-slate-200 font-medium text-base tracking-tight list-none">
                            Is this a Messi jersey?
                            <iconify-icon className="text-slate-400 transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">Yes, this specific product variant is detailed as the Argentina 2026 Messi Authentic Home Jersey.</p>
</details>

<details className="group bg-white/[0.02] border border-white/5 rounded-2xl p-6 open:bg-white/[0.04] transition-colors cursor-pointer">
<summary className="flex justify-between items-center text-slate-200 font-medium text-base tracking-tight list-none">
                            What is the material?
                            <iconify-icon className="text-slate-400 transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">The jersey is crafted from 100% Recycled Polyester, utilizing advanced CLIMACOOL+ technology for quick-drying performance.</p>
</details>

<details className="group bg-white/[0.02] border border-white/5 rounded-2xl p-6 open:bg-white/[0.04] transition-colors cursor-pointer">
<summary className="flex justify-between items-center text-slate-200 font-medium text-base tracking-tight list-none">
                            Is it slim fit?
                            <iconify-icon className="text-slate-400 transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">Yes. Because it is the "Authentic" version worn by players, it features a slim performance fit designed to sit tight against the body.</p>
</details>

<details className="group bg-white/[0.02] border border-white/5 rounded-2xl p-6 open:bg-white/[0.04] transition-colors cursor-pointer">
<summary className="flex justify-between items-center text-slate-200 font-medium text-base tracking-tight list-none">
                            Should I size up?
                            <iconify-icon className="text-slate-400 transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">If you prefer a looser, more casual fit for everyday wear, it is highly recommended to size up due to the athletic cut. Please consult the official size chart before purchasing.</p>
</details>

<details className="group bg-white/[0.02] border border-white/5 rounded-2xl p-6 open:bg-white/[0.04] transition-colors cursor-pointer">
<summary className="flex justify-between items-center text-slate-200 font-medium text-base tracking-tight list-none">
                            Why is it sold out?
                            <iconify-icon className="text-slate-400 transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">Authentic Messi jerseys are in incredibly high demand globally. Stock on the official store fluctuates rapidly. We recommend checking availability frequently.</p>
</details>

<details className="group bg-white/[0.02] border border-white/5 rounded-2xl p-6 open:bg-white/[0.04] transition-colors cursor-pointer">
<summary className="flex justify-between items-center text-slate-200 font-medium text-base tracking-tight list-none">
                            Can I return it?
                            <iconify-icon className="text-slate-400 transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">The official store generally offers a 30-day return policy, however, please check the official store policy directly before purchase as terms can change for high-demand items.</p>
</details>

<details className="group bg-white/[0.02] border border-white/5 rounded-2xl p-6 open:bg-white/[0.04] transition-colors cursor-pointer">
<summary className="flex justify-between items-center text-slate-200 font-medium text-base tracking-tight list-none">
                            How long does shipping take?
                            <iconify-icon className="text-slate-400 transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">Shipping estimates vary significantly by your country and region. Exact shipping costs and timelines are calculated at checkout on the official store.</p>
</details>

<details className="group bg-white/[0.02] border border-white/5 rounded-2xl p-6 open:bg-white/[0.04] transition-colors cursor-pointer">
<summary className="flex justify-between items-center text-slate-200 font-medium text-base tracking-tight list-none">
                            Is it good for collectors?
                            <iconify-icon className="text-slate-400 transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">Absolutely. Authentic editions featuring Messi's name and the new third star are considered premium collector's items within the football community.</p>
</details>
</div>
</div>
</section>
</main>

<footer className="bg-[#020617] border-t border-white/5 pt-16 pb-8 relative z-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
<div className="flex items-center gap-2 text-white font-semibold text-lg tracking-widest uppercase">
<iconify-icon className="text-slate-500 text-xl" icon="solar:cup-star-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-slate-400">MESSI2026</span>
</div>
<div className="flex flex-wrap justify-center gap-6 text-xs text-slate-500 font-medium">
<a className="hover:text-slate-300 transition-colors" href="#features">Product Details</a>
<a className="hover:text-slate-300 transition-colors" href="#fit">Size Guide</a>
<a className="hover:text-slate-300 transition-colors" href="#cta">Availability</a>
<a className="hover:text-slate-300 transition-colors flex items-center gap-1" href="https://store.fifa.com/products/adidas-argentina-2026-messi-authentic-home-jersey-mens" rel="noopener noreferrer" target="_blank">Official Store <iconify-icon icon="solar:external-link-linear"></iconify-icon></a>
</div>
</div>
<div className="border-t border-white/5 pt-8 text-center max-w-3xl mx-auto">
<p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">
<strong>Disclaimer:</strong> This landing page is an independent product presentation designed for informational purposes. Product details, price ($180 USD), stock availability, shipping times, and return policies may change at any time on the official store. We do not guarantee restocks. Please verify all information directly on the official FIFA/adidas store before making a purchase.
                </p>
<p className="text-[10px] text-slate-700 mt-4">
                    © 2024 Independent Presentation. Not directly affiliated with FIFA or adidas.
                </p>
</div>
</div>
</footer>

    </>
  );
}
