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



        // Initialize Lucide Icons
        lucide.createIcons();

        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 inset-x-0 z-50 bg-[#fdfbf9]/80 backdrop-blur-md border-b border-gray-100/50">
<nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<svg className="text-black transition-transform group-hover:rotate-90 duration-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24">
<path d="M12 2v20"></path><path d="m5 5 14 14"></path><path d="M2 12h20"></path><path d="m19 5-14 14"></path>
</svg>
<span className="text-xl font-semibold tracking-tight">Ledgero</span>
</a>

<div className="hidden md:flex items-center gap-8 text-base font-medium text-gray-600">
<a className="hover:text-black transition-colors" href="#product">Product</a>
<a className="hover:text-black transition-colors" href="#how-it-works">How it works</a>
<a className="hover:text-black transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-black transition-colors" href="#resources">Resources</a>
<a className="hover:text-black transition-colors" href="#about">About</a>
</div>

<div className="hidden md:flex items-center gap-6">
<a className="text-base font-medium text-gray-900 hover:text-gray-600 transition-colors" href="#">Log in</a>
<a className="bg-black text-white px-5 py-2.5 rounded-full text-base font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-1" href="#">
                    Try Ledgero free <i className="w-4 h-4" data-lucide="plus" strokeWidth="2"></i>
</a>
</div>

<button className="md:hidden p-2 text-gray-900 focus:outline-none" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</nav>

<div className="hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg py-6 px-6 flex flex-col gap-4 text-lg font-medium" id="mobile-menu">
<a className="text-gray-600 hover:text-black" href="#product">Product</a>
<a className="text-gray-600 hover:text-black" href="#how-it-works">How it works</a>
<a className="text-gray-600 hover:text-black" href="#pricing">Pricing</a>
<a className="text-gray-600 hover:text-black" href="#resources">Resources</a>
<a className="text-gray-600 hover:text-black" href="#about">About</a>
<hr className="my-2 border-gray-100"/>
<a className="text-gray-900" href="#">Log in</a>
<a className="bg-black text-white text-center py-3 rounded-full mt-2" href="#">Try Ledgero free +</a>
</div>
</header>
<main className="pt-20">

<section className="relative overflow-hidden pt-12 pb-24 lg:pt-24 lg:pb-32">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">

<div className="relative z-20">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-gray-200/60 shadow-sm backdrop-blur-sm mb-8">
<span className="w-2 h-2 rounded-full bg-[#d4f260]"></span>
<span className="text-xs font-semibold tracking-wide text-gray-600 uppercase">AI Bookkeeping for freelancers &amp; solopreneurs</span>
</div>

<h1 className="text-6xl sm:text-7xl lg:text-[80px] leading-[1.05] font-semibold tracking-tight text-gray-900 mb-6 relative">
                        Books done.<br/>
<span className="relative inline-block mt-2">
<span className="relative z-10">You do you.</span>
<span className="absolute inset-x-0 bottom-1 h-[60%] bg-[#e4fc60] -z-10 rounded-sm transform -rotate-2 scale-105"></span>
</span>

<svg className="absolute -top-4 right-0 lg:-right-8 w-12 h-12 text-black transform rotate-12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 2v4"></path><path d="m20.5 6.5-2.83 2.83"></path><path d="M22 12h-4"></path><path d="m20.5 17.5-2.83-2.83"></path><path d="M12 22v-4"></path><path d="m3.5 17.5 2.83-2.83"></path><path d="M2 12h4"></path><path d="m3.5 6.5 2.83 2.83"></path>
</svg>
</h1>

<p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
                        Ledgero is AI bookkeeping that keeps your finances organized, taxes ready, and your time back where it belongs—on your passion.
                    </p>

<div className="flex flex-wrap items-center gap-6 mb-12">
<a className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2" href="#">
                            Try Ledgero free <i className="w-5 h-5" data-lucide="plus" strokeWidth="2"></i>
</a>
<a className="inline-flex items-center gap-3 text-lg font-medium text-gray-900 hover:text-gray-600 group" href="#">
<span className="underline decoration-2 decoration-gray-300 underline-offset-4 group-hover:decoration-gray-500 transition-colors">See how it works</span>
<span className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-gray-500 transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</span>
</a>
</div>

<div className="flex items-center gap-4">
<div className="flex -space-x-3">
<img alt="User" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="User" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="User" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div>
<div className="flex items-center gap-1 text-black mb-0.5">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="0"></i>
</div>
<p className="text-sm text-gray-500">Trusted by 5,000+ freelancers<br/>and solopreneurs</p>
</div>
</div>
</div>

<div className="relative h-[600px] lg:h-[700px] w-full mt-10 lg:mt-0 flex items-center justify-center">

<div className="absolute inset-0 bg-[#e6e2ff] rounded-[80px_120px_60px_100px] transform rotate-3 scale-95 opacity-90 -z-10"></div>

<div className="absolute -bottom-10 -right-10 w-48 h-48 dots-pattern opacity-50 rounded-full z-0"></div>

<div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#d4f260] rounded-full border border-black/10 z-10 shadow-sm"></div>
<div className="absolute top-10 right-10 w-4 h-4 bg-white border border-[#d4f260] rounded-full z-10"></div>

<div className="absolute top-16 right-20 z-20 text-right transform -rotate-2">
<p className="font-serif italic text-xl text-gray-800">Real-time clarity.<br/>Zero chaos.</p>

<svg className="w-10 h-10 ml-auto mt-2 text-gray-700" fill="none" viewbox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
<path d="M35 5C35 5 28 15 15 25C10 28.8462 5 32 5 32M5 32C5 32 8.5 29 11 27M5 32C5 32 6 27.5 7 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>

<div className="absolute top-1/4 left-0 lg:-left-12 z-30 w-24 h-24 bg-black rounded-full text-white flex items-center justify-center animate-spin-slow" style={{animation: 'spin 20s linear infinite'}}>
<svg className="w-full h-full p-2" viewbox="0 0 100 100">
<path d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" id="circlePath"></path>
<text className="text-[10px] font-medium tracking-widest uppercase fill-white">
<textpath href="#circlePath" startoffset="0%">
                                    AI BOOKKEEPING • AI BOOKKEEPING • 
                                </textpath>
</text>
<svg fill="none" height="24" stroke="#d4f260" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" x="38" y="38">
<path d="M12 2v20"></path><path d="m5 5 14 14"></path><path d="M2 12h20"></path><path d="m19 5-14 14"></path>
</svg>
</svg>
</div>

<div className="relative z-20 bg-white rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 p-8 w-[320px] transform -translate-x-12 translate-y-8">
<div className="flex justify-between items-center mb-8">
<span className="text-sm font-medium text-gray-500">This month <i className="inline w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i></span>
</div>
<div className="mb-6">
<p className="text-sm text-gray-500 mb-1">Profit</p>
<h3 className="text-4xl font-semibold tracking-tight text-gray-900">$8,430</h3>
<p className="text-sm text-green-600 mt-2 flex items-center gap-1">
<i className="w-4 h-4" data-lucide="arrow-up" strokeWidth="2"></i> 23% vs last month
                            </p>
</div>

<div className="h-32 w-full mt-8 relative">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 200 100">
<path d="M0 80 Q 20 70, 40 85 T 80 60 T 120 70 T 160 30 T 200 40" fill="none" stroke="#d4f260" strokeLinecap="round" strokeWidth="3"></path>
<path d="M0 80 Q 20 70, 40 85 T 80 60 T 120 70 T 160 30 T 200 40 L 200 100 L 0 100 Z" fill="url(#grad1)" opacity="0.3"></path>
<defs>
<lineargradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#d4f260', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: 'white', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>

<div className="absolute top-[28%] right-[18%] w-3 h-3 bg-[#d4f260] rounded-full border-2 border-white shadow-sm"></div>
</div>

<div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 opacity-70">
<svg fill="none" height="40" viewbox="0 0 120 40" width="120" xmlns="http://www.w3.org/2000/svg">
<path d="M2 20C15 5 25 35 40 20C55 5 65 35 80 20C95 5 105 35 118 20" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>

<div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-10 translate-x-4 lg:translate-x-10">

<div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 w-[220px] flex justify-between items-center">
<div>
<p className="text-xs text-gray-500 mb-1">Income</p>
<p className="text-xl font-semibold tracking-tight text-gray-900">$14,820</p>
</div>
<div className="w-8 h-8 rounded-full bg-[#f4faeb] flex items-center justify-center text-green-600">
<i className="w-4 h-4" data-lucide="arrow-up" strokeWidth="2"></i>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 w-[220px] flex justify-between items-center">
<div>
<p className="text-xs text-gray-500 mb-1">Expenses</p>
<p className="text-xl font-semibold tracking-tight text-gray-900">$6,390</p>
</div>
<div className="w-8 h-8 rounded-full bg-[#fdf2f2] flex items-center justify-center text-red-500">
<i className="w-4 h-4" data-lucide="arrow-down" strokeWidth="2"></i>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 w-[220px] flex justify-between items-center">
<div>
<p className="text-xs text-gray-500 mb-1">Ready for tax time</p>
<p className="text-xl font-semibold tracking-tight text-gray-900">100%</p>
</div>
<div className="w-8 h-8 rounded-full bg-[#e6e2ff] flex items-center justify-center text-purple-600">
<i className="w-4 h-4" data-lucide="check" strokeWidth="2"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-gray-100 bg-white">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm font-medium text-gray-400 uppercase tracking-widest mb-8">Works seamlessly with the tools you already use</p>
<div className="flex overflow-x-auto no-scrollbar items-center justify-between gap-12 lg:gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-2xl font-semibold tracking-tight whitespace-nowrap text-gray-800">Stripe</span>
<span className="text-2xl font-bold tracking-tighter whitespace-nowrap text-blue-600">PayPal</span>
<span className="text-xl font-semibold tracking-tight whitespace-nowrap text-green-700">QuickBooks</span>
<span className="text-2xl font-semibold tracking-tight whitespace-nowrap text-gray-900">Square</span>
<span className="text-2xl font-semibold tracking-tight whitespace-nowrap text-indigo-600">Plaid</span>
<span className="text-2xl font-semibold tracking-tight whitespace-nowrap text-gray-800 hidden md:block">Shopify</span>
</div>
</div>
</section>

<section className="py-24 bg-[#fdfbf9]" id="product">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-6">Everything you need.<br/>Nothing you don't.</h2>
<p className="text-xl text-gray-600">Ledgero's AI does the heavy lifting so you can focus on growing your business, not untangling receipts.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-[#e6e2ff] rounded-2xl flex items-center justify-center text-purple-600 mb-6">
<i className="w-6 h-6" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-3">Auto-Categorization</h3>
<p className="text-gray-600 text-lg">Our AI learns your spending habits and categorizes transactions instantly with 99% accuracy.</p>
</div>

<div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-[#f4faeb] rounded-2xl flex items-center justify-center text-green-600 mb-6">
<i className="w-6 h-6" data-lucide="file-text" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-3">Receipt Matching</h3>
<p className="text-gray-600 text-lg">Just forward your emails or snap a pic. We match receipts to transactions automatically.</p>
</div>

<div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-[#fff0f0] rounded-2xl flex items-center justify-center text-red-500 mb-6">
<i className="w-6 h-6" data-lucide="pie-chart" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-3">Real-time Reports</h3>
<p className="text-gray-600 text-lg">Know your profit, loss, and cash flow at a glance with beautiful, easy-to-read dashboards.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="how-it-works">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative order-2 lg:order-1">
<div className="absolute inset-0 bg-[#f4faeb] rounded-[3rem] transform -rotate-3 scale-105 -z-10"></div>
<img alt="Dashboard" className="rounded-[2rem] shadow-xl border border-gray-100 object-cover h-[400px] w-full" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>

<div className="absolute -right-8 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-4">
<div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
<i className="w-5 h-5" data-lucide="check" strokeWidth="2"></i>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Software Subscription</p>
<p className="text-xs text-gray-500">Categorized automatically</p>
</div>
</div>
</div>

<div className="order-1 lg:order-2">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-6">An AI that actually learns your business.</h2>
<p className="text-xl text-gray-600 mb-8">Stop manually tagging coffee shop runs. Ledgero recognizes recurring vendors and applies the right tax codes based on your industry profile.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-[#d4f260] flex-shrink-0 mt-1" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-lg text-gray-700">Custom rules for unique expenses</span>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-[#d4f260] flex-shrink-0 mt-1" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-lg text-gray-700">Multi-currency support</span>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-[#d4f260] flex-shrink-0 mt-1" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-lg text-gray-700">Flagging anomalies for your review</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 bg-[#fdfbf9] overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-6">Tax time is now just a normal Tuesday.</h2>
<p className="text-xl text-gray-600 mb-8">We track estimated taxes year-round and generate CPA-ready reports in one click. No more scrambling in April.</p>
<a className="inline-flex items-center gap-2 text-lg font-medium text-black border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors" href="#">
                        View sample tax report <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="relative">
<div className="absolute inset-0 bg-[#e6e2ff] rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>
<img alt="Tax Report" className="rounded-[2rem] shadow-xl border border-gray-100 object-cover h-[400px] w-full" src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>

<div className="absolute -left-8 bottom-10 bg-white p-5 rounded-2xl shadow-lg border border-gray-100 w-64">
<div className="flex justify-between text-sm mb-2">
<span className="font-medium text-gray-900">Tax Prep Readiness</span>
<span className="text-purple-600 font-medium">100%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-2">
<div className="bg-purple-500 h-2 rounded-full" style={{width: '100%'}}></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Loved by people who hate bookkeeping.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-[#fdfbf9] p-8 rounded-3xl border border-gray-100">
<div className="flex items-center gap-1 text-[#d4f260] mb-4">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="0"></i>
</div>
<p className="text-lg text-gray-800 mb-8">"Ledgero literally gave me my weekends back. I used to spend hours in spreadsheets. Now I just glance at the dashboard on Monday mornings."</p>
<div className="flex items-center gap-3">
<img alt="Sarah" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<p className="text-sm font-semibold text-gray-900">Sarah Jenkins</p>
<p className="text-xs text-gray-500">Freelance Designer</p>
</div>
</div>
</div>

<div className="bg-[#fdfbf9] p-8 rounded-3xl border border-gray-100">
<div className="flex items-center gap-1 text-[#d4f260] mb-4">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="0"></i>
</div>
<p className="text-lg text-gray-800 mb-8">"The tax readiness feature is incredible. My CPA actually thanked me this year for having everything so perfectly organized. Highly recommend."</p>
<div className="flex items-center gap-3">
<img alt="Mark" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<p className="text-sm font-semibold text-gray-900">Mark T.</p>
<p className="text-xs text-gray-500">Marketing Consultant</p>
</div>
</div>
</div>

<div className="bg-[#fdfbf9] p-8 rounded-3xl border border-gray-100 lg:mt-8">
<div className="flex items-center gap-1 text-[#d4f260] mb-4">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="0"></i>
</div>
<p className="text-lg text-gray-800 mb-8">"I tried other tools but they felt too complex for a solo business. Ledgero hits the perfect sweet spot of powerful AI but incredibly simple interface."</p>
<div className="flex items-center gap-3">
<img alt="Elena" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<p className="text-sm font-semibold text-gray-900">Elena Rodriguez</p>
<p className="text-xs text-gray-500">E-commerce Owner</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#fdfbf9]" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-4">Simple, transparent pricing.</h2>
<p className="text-xl text-gray-600">Start free, upgrade when you need to.</p>

<div className="mt-8 flex items-center justify-center gap-3">
<span className="text-sm font-medium text-gray-900">Monthly</span>
<button className="w-12 h-6 bg-black rounded-full relative transition-colors focus:outline-none">
<span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-transform"></span>
</button>
<span className="text-sm font-medium text-gray-500">Annually <span className="text-xs text-green-600 font-semibold ml-1">Save 20%</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col">
<h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2">Starter</h3>
<p className="text-gray-500 mb-6">Perfect for new freelancers.</p>
<div className="mb-8">
<span className="text-5xl font-semibold tracking-tight text-gray-900">$0</span>
<span className="text-gray-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3"><i className="w-5 h-5 text-gray-900" data-lucide="check"></i> Up to 50 transactions/mo</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-gray-900" data-lucide="check"></i> Basic AI categorization</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-gray-900" data-lucide="check"></i> 1 Bank connection</li>
</ul>
<a className="block w-full py-3 px-4 border border-gray-300 rounded-full text-center font-medium text-gray-900 hover:bg-gray-50 transition-colors" href="#">Get Started Free</a>
</div>

<div className="bg-black text-white p-8 rounded-3xl shadow-xl flex flex-col relative overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-[#e4fc60] rounded-bl-full opacity-20 -z-0"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-2">
<h3 className="text-2xl font-semibold tracking-tight text-white">Pro</h3>
<span className="bg-[#d4f260] text-black text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">Most Popular</span>
</div>
<p className="text-gray-400 mb-6">For growing solopreneurs.</p>
<div className="mb-8">
<span className="text-5xl font-semibold tracking-tight text-white">$29</span>
<span className="text-gray-400">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#d4f260]" data-lucide="check"></i> Unlimited transactions</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#d4f260]" data-lucide="check"></i> Advanced AI learning</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#d4f260]" data-lucide="check"></i> Unlimited connections</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#d4f260]" data-lucide="check"></i> Tax ready reports</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#d4f260]" data-lucide="check"></i> Priority support</li>
</ul>
<a className="block w-full py-3 px-4 bg-white text-black rounded-full text-center font-medium hover:bg-gray-100 transition-colors" href="#">Start 14-day Free Trial</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 mb-10 text-center">Frequently asked questions</h2>
<div className="space-y-4">

<details className="group bg-[#fdfbf9] rounded-2xl border border-gray-100 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-gray-900">
<h3 className="text-lg font-medium">How accurate is the AI categorization?</h3>
<span className="relative h-5 w-5 shrink-0">
<i className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity" data-lucide="plus"></i>
<i className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity" data-lucide="minus"></i>
</span>
</summary>
<div className="px-6 pb-6 text-gray-600 text-lg">
                            Our AI boasts a 99% accuracy rate after the first month of learning your specific business expenses. You always have the final say and can easily correct any mismatches, which teaches the AI for next time.
                        </div>
</details>

<details className="group bg-[#fdfbf9] rounded-2xl border border-gray-100 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-gray-900">
<h3 className="text-lg font-medium">Do I still need an accountant?</h3>
<span className="relative h-5 w-5 shrink-0">
<i className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity" data-lucide="plus"></i>
<i className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity" data-lucide="minus"></i>
</span>
</summary>
<div className="px-6 pb-6 text-gray-600 text-lg">
                            Ledgero replaces the tedious day-to-day bookkeeping. We provide CPA-ready reports that you can hand straight to your accountant at tax time, saving them hours and you money on their billable time.
                        </div>
</details>

<details className="group bg-[#fdfbf9] rounded-2xl border border-gray-100 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-gray-900">
<h3 className="text-lg font-medium">Is my financial data secure?</h3>
<span className="relative h-5 w-5 shrink-0">
<i className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity" data-lucide="plus"></i>
<i className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity" data-lucide="minus"></i>
</span>
</summary>
<div className="px-6 pb-6 text-gray-600 text-lg">
                            Absolutely. We use bank-level 256-bit encryption and partner with Plaid for read-only connections to your financial institutions. We never have access to move your money.
                        </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-[#d4f260] relative overflow-hidden">

<svg className="absolute top-0 left-0 w-64 h-64 text-black/10 transform -translate-x-1/2 -translate-y-1/2" fill="none" viewbox="0 0 100 100">
<circle cx="50" cy="50" r="40" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="2"></circle>
</svg>
<svg className="absolute bottom-0 right-0 w-64 h-64 text-black/10 transform translate-x-1/4 translate-y-1/4" fill="none" viewbox="0 0 200 200">
<path d="M10,100 Q50,10 100,100 T190,100" fill="none" stroke="currentColor" strokeWidth="4"></path>
</svg>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-5xl lg:text-7xl font-semibold tracking-tight text-black mb-8">Ready to get your<br/>time back?</h2>
<p className="text-2xl text-black/80 mb-10 max-w-2xl mx-auto">Join thousands of solopreneurs who have automated their bookkeeping.</p>
<a className="bg-black text-white px-10 py-5 rounded-full text-xl font-medium hover:bg-gray-800 transition-transform hover:scale-105 inline-flex items-center gap-2 shadow-xl" href="#">
                    Start your free trial <i className="w-6 h-6" data-lucide="arrow-right" strokeWidth="2"></i>
</a>
</div>
</section>
</main>

<footer className="bg-white pt-20 pb-10 border-t border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<svg className="text-black" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24">
<path d="M12 2v20"></path><path d="m5 5 14 14"></path><path d="M2 12h20"></path><path d="m19 5-14 14"></path>
</svg>
<span className="text-xl font-semibold tracking-tight">Ledgero</span>
</a>
<p className="text-gray-500 mb-6 max-w-sm text-base">AI bookkeeping built specifically for freelancers, creators, and solopreneurs to stay organized and tax-ready effortlessly.</p>
<div className="flex items-center gap-4 text-gray-400">
<a className="hover:text-black transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="hover:text-black transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="hover:text-black transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
</div>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-4 text-base">Product</h4>
<ul className="space-y-3 text-base text-gray-500">
<li><a className="hover:text-black transition-colors" href="#">Features</a></li>
<li><a className="hover:text-black transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-black transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-black transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-4 text-base">Resources</h4>
<ul className="space-y-3 text-base text-gray-500">
<li><a className="hover:text-black transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-black transition-colors" href="#">Tax Guide 2024</a></li>
<li><a className="hover:text-black transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-black transition-colors" href="#">Community</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-4 text-base">Company</h4>
<ul className="space-y-3 text-base text-gray-500">
<li><a className="hover:text-black transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-black transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-black transition-colors" href="#">Legal</a></li>
<li><a className="hover:text-black transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
<p>© 2024 Ledgero Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-gray-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-gray-900 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
