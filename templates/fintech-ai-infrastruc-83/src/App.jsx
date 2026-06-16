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
      

<nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-12">
<a className="text-white font-medium tracking-tighter text-xl" href="#">TRAILR</a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#platform">Platform</a>
<a className="hover:text-white transition-colors" href="#intelligence">Intelligence</a>
<a className="hover:text-white transition-colors" href="#compare">Compare</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
</div>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex items-center gap-2 text-xs font-medium text-neutral-500 border border-white/10 rounded-full px-3 py-1">
<span className="text-white cursor-pointer">EN</span>
<span className="w-px h-3 bg-white/20"></span>
<span className="hover:text-white cursor-pointer transition-colors">ES</span>
</div>
<a className="bg-white text-black text-sm font-medium px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors" href="#demo">
                    Request Demo
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 overflow-hidden glow-bg">
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8">
<iconify-icon icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
                AI-Native Infrastructure
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tighter leading-tight max-w-4xl mx-auto mb-6">
                The Operating System <br className="hidden md:block"/>for ETNs.
            </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
                Replace fragmented spreadsheets with a single, intelligent platform. Automate NAV, trading lifecycle, and trailer fees end-to-end.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-white text-black text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2" href="#demo">
                    Start optimizing
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto text-white text-sm font-medium px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors" href="#platform">
                    Explore modules
                </a>
</div>

<div className="mt-20 relative max-w-5xl mx-auto">
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10"></div>
<div className="glass-card rounded-2xl p-2 border-white/10 shadow-2xl overflow-hidden relative">
<div className="h-8 border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
</div>
<div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 opacity-80">
<div className="space-y-4">
<div className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Live NAV Calculation</div>
<div className="text-3xl font-medium text-white tracking-tight">$142.85 <span className="text-sm text-emerald-400">+0.4%</span></div>
<div className="h-16 w-full bg-gradient-to-r from-emerald-500/20 to-transparent rounded-lg border border-emerald-500/10"></div>
</div>
<div className="space-y-4">
<div className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Active Trades</div>
<div className="text-3xl font-medium text-white tracking-tight">2,491 <span className="text-sm text-neutral-500">Today</span></div>
<div className="space-y-2">
<div className="h-2 w-full bg-white/5 rounded-full overflow-hidden"><div className="h-full w-3/4 bg-blue-500"></div></div>
<div className="h-2 w-full bg-white/5 rounded-full overflow-hidden"><div className="h-full w-1/2 bg-indigo-500"></div></div>
</div>
</div>
<div className="space-y-4">
<div className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Trailer Fees Accrued</div>
<div className="text-3xl font-medium text-white tracking-tight">€45.2k <span className="text-sm text-neutral-500">MTD</span></div>
<div className="flex items-center gap-2 text-xs text-indigo-400">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
                                AI Reconciliation complete
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative" id="platform">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">One unified engine.</h2>
<p className="text-neutral-400 max-w-xl">TRAILR replaces fragmented point solutions with a comprehensive triad, purpose-built for the complexities of ETNs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl hover:bg-white/[0.04] transition-colors group">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:calculator-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3">NAV Engine</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">Automated, accurate NAV calculation built specifically for complex ETN structures. Real-time and end-of-day capabilities with zero manual spreadsheet intervention.</p>
<ul className="space-y-2 text-sm text-neutral-500">
<li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon> Custom pricing models</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon> Multi-currency support</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon> Instant error flagging</li>
</ul>
</div>

<div className="glass-card p-8 rounded-2xl hover:bg-white/[0.04] transition-colors group">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:transfer-horizontal-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3">Lifecycle Management</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">Seamless trade tracking and automation spanning issuance, redemption, and the secondary market. Native API integrations with brokers and custodians.</p>
<ul className="space-y-2 text-sm text-neutral-500">
<li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon> Automated trade capture</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon> Straight-through processing</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon> Custodian reconciliation</li>
</ul>
</div>

<div className="glass-card p-8 rounded-2xl hover:bg-white/[0.04] transition-colors group">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3">Trailer Fee Engine</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">Complex fee structures made simple. Automate the calculation, distribution, and auditing of trailer fees with complete transparency and historical tracking.</p>
<ul className="space-y-2 text-sm text-neutral-500">
<li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon> Flexible tier structures</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon> Automated payouts</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon> Full audit trails</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-gradient-to-b from-transparent to-[#0a0a0f]" id="intelligence">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-medium mb-4 tracking-widest uppercase">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon> Intelligence Layer
                    </div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter mb-6 leading-tight">
                        Software that learns.<br/>Operations that scale.
                    </h2>
<p className="text-base text-neutral-400 mb-8 leading-relaxed">
                        TRAILR is an AI-native system designed to proactively manage risk. It doesn't just process data; it understands it. Our models detect anomalies, predict reconciliation breaks, and automate exception handling before they impact the bottom line.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
<iconify-icon icon="solar:eye-scan-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Anomaly Detection</h4>
<p className="text-sm text-neutral-500">AI flags NAV discrepancies and abnormal trade volumes in real-time.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
<iconify-icon icon="solar:bolt-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Automated Resolution</h4>
<p className="text-sm text-neutral-500">Reduces manual intervention by suggesting resolutions for standard exceptions.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full"></div>
<div className="glass-card rounded-2xl p-6 relative z-10 border border-white/10">
<div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
<div className="text-sm font-medium text-white">AI Exception Log</div>
<div className="text-xs text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded">System Active</div>
</div>
<div className="space-y-4">

<div className="bg-white/5 rounded-lg p-3 flex items-start gap-3 border border-white/5">
<iconify-icon className="text-amber-400 mt-0.5" icon="solar:danger-triangle-linear"></iconify-icon>
<div>
<div className="text-sm text-white font-medium">Pricing Anomaly Detected</div>
<div className="text-xs text-neutral-500 mt-1">Component ISIN US0378331005 deviates 2.4% from historical volatility curve.</div>
<div className="mt-2 flex gap-2">
<button className="text-xs bg-white/10 hover:bg-white/20 text-white px-2 py-1 rounded transition-colors">Review Data</button>
<button className="text-xs text-neutral-400 hover:text-white px-2 py-1">Ignore</button>
</div>
</div>
</div>

<div className="bg-white/5 rounded-lg p-3 flex items-start gap-3 border border-white/5">
<iconify-icon className="text-emerald-400 mt-0.5" icon="solar:check-read-linear"></iconify-icon>
<div>
<div className="text-sm text-white font-medium">Trailer Fee Auto-Reconciled</div>
<div className="text-xs text-neutral-500 mt-1">Broker A report mapped and verified against internal ledger. 100% match.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="compare">
<div className="max-w-5xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-12">Beyond legacy software.</h2>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr>
<th className="pb-4 text-sm font-medium text-neutral-500 w-1/3">Feature</th>
<th className="pb-4 text-sm font-medium text-neutral-500 text-center w-1/3">Legacy Tools</th>
<th className="pb-4 text-sm font-medium text-indigo-400 text-center w-1/3 bg-indigo-500/5 rounded-t-xl">TRAILR</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-t border-white/5">
<td className="py-4 text-white">Focus Area</td>
<td className="py-4 text-neutral-500 text-center">NAV &amp; Basic Reporting</td>
<td className="py-4 text-white text-center font-medium bg-indigo-500/5">End-to-End (NAV, Trading, Fees)</td>
</tr>
<tr className="border-t border-white/5">
<td className="py-4 text-white">Asset Specialization</td>
<td className="py-4 text-neutral-500 text-center">Generic Funds</td>
<td className="py-4 text-white text-center font-medium bg-indigo-500/5">Purpose-built for ETNs</td>
</tr>
<tr className="border-t border-white/5">
<td className="py-4 text-white">Architecture</td>
<td className="py-4 text-neutral-500 text-center">Monolithic, manual uploads</td>
<td className="py-4 text-white text-center font-medium bg-indigo-500/5">API-first, automated sync</td>
</tr>
<tr className="border-t border-white/5">
<td className="py-4 text-white">Intelligence</td>
<td className="py-4 text-neutral-500 text-center">Rule-based alerts</td>
<td className="py-4 text-white text-center font-medium bg-indigo-500/5">AI Anomaly Detection &amp; Resolution</td>
</tr>
<tr className="border-t border-white/5">
<td className="py-4 text-white">Trailer Fee Engine</td>
<td className="py-4 text-neutral-500 text-center">Separate module / Spreadsheets</td>
<td className="py-4 text-white text-center font-medium bg-indigo-500/5 rounded-b-xl">Fully Integrated</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="demo">
<div className="absolute inset-0 bg-indigo-500/10"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#050505] to-transparent"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-6">Ready to upgrade your ETN infrastructure?</h2>
<p className="text-neutral-400 mb-10 max-w-xl mx-auto text-lg">Join forward-thinking issuers who have eliminated operational risk and accelerated scale with TRAILR.</p>
<form className="max-w-md mx-auto glass-card p-2 rounded-full flex items-center border border-white/20 focus-within:border-indigo-500 transition-colors">
<input className="bg-transparent border-none outline-none text-white px-4 py-2 w-full text-sm placeholder:text-neutral-600" placeholder="Enter your work email" required="" type="email"/>
<button className="bg-white text-black text-sm font-medium px-6 py-2.5 rounded-full hover:bg-neutral-200 transition-colors whitespace-nowrap" type="submit">
                    Request Demo
                </button>
</form>
<p className="text-xs text-neutral-600 mt-4">We'll get back to you within 24 hours.</p>
</div>
</section>

<footer className="border-t border-white/5 bg-[#050505] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
<div>
<a className="text-white font-medium tracking-tighter text-xl mb-4 block" href="#">TRAILR</a>
<p className="text-sm text-neutral-500 max-w-xs">The intelligent operating system for Exchange-Traded Notes.</p>
</div>
<div className="flex gap-16">
<div>
<h5 className="text-white text-sm font-medium mb-4 tracking-tight">Product</h5>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">NAV Engine</a></li>
<li><a className="hover:text-white transition-colors" href="#">Lifecycle Management</a></li>
<li><a className="hover:text-white transition-colors" href="#">Trailer Fees</a></li>
<li><a className="hover:text-white transition-colors" href="#">API Documentation</a></li>
</ul>
</div>
<div>
<h5 className="text-white text-sm font-medium mb-4 tracking-tight">Company</h5>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-600">
<p>© 2024 TRAILR Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-neutral-400" href="#">Privacy Policy</a>
<a className="hover:text-neutral-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
