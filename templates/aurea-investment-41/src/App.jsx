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



        // Initialize Icons
        lucide.createIcons();

        // Mobile Menu Toggle
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuLinks = mobileMenu.querySelectorAll('a');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenu.classList.contains('hidden') ? 'menu' : 'x';
            menuBtn.innerHTML = `<i data-lucide="${icon}"></i>`;
            lucide.createIcons();
        });

        // Close menu on link click
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuBtn.innerHTML = `<i data-lucide="menu"></i>`;
                lucide.createIcons();
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="max-w-[1800px] mx-auto border-x border-layout bg-[#f5f4f0] relative">

<header className="flex justify-between items-stretch border-b border-layout h-20 md:h-24 sticky top-0 bg-[#f5f4f0]/90 backdrop-blur-md z-50">

<div className="flex items-center px-6 md:px-10 border-r border-layout w-full md:w-auto justify-between md:justify-start">
<a className="flex items-center gap-3 group" href="#">
<svg className="text-black group-hover:opacity-70 transition-opacity" fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 20L12 4L20 20H16L12 12L8 20H4Z" fill="currentColor"></path>
<path d="M12 4L16 12H8L12 4Z" fill="currentColor"></path>
</svg>
<span className="font-medium tracking-widest uppercase text-sm md:text-base">Aurea</span>
</a>
<button className="md:hidden p-2 text-black" id="menu-btn">
<i data-lucide="menu"></i>
</button>
</div>

<nav className="hidden md:flex flex-1 justify-center items-center gap-10 lg:gap-16 px-8 text-sm">
<a className="hover:text-gray-500 transition-colors" href="#approach">Approach</a>
<a className="hover:text-gray-500 transition-colors" href="#investments">Investments</a>
<a className="hover:text-gray-500 transition-colors" href="#access">Access</a>
<a className="hover:text-gray-500 transition-colors" href="#about">About</a>
<a className="hover:text-gray-500 transition-colors" href="#insights">Insights</a>
</nav>

<div className="hidden md:flex items-stretch border-l border-layout">
<a className="flex items-center gap-3 px-8 hover:bg-gray-100 transition-colors text-sm" href="#">
                    Private Login <span className="w-2 h-2 rounded-full bg-black block"></span>
</a>
<a className="flex items-center gap-4 px-8 bg-[#1a1a1a] text-white hover:bg-black transition-colors" href="#contact">
<span className="text-sm">Contact Us</span>
<i className="w-5 h-5 text-gray-400" data-lucide="plus"></i>
</a>
</div>
</header>

<div className="hidden fixed inset-0 bg-[#f5f4f0] z-40 pt-24 px-6 pb-6 overflow-y-auto" id="mobile-menu">
<div className="flex flex-col gap-8 text-2xl font-serif-custom tracking-tight">
<a className="border-b border-layout pb-4" href="#approach">Approach</a>
<a className="border-b border-layout pb-4" href="#investments">Investments</a>
<a className="border-b border-layout pb-4" href="#access">Access</a>
<a className="border-b border-layout pb-4" href="#about">About</a>
<a className="border-b border-layout pb-4" href="#insights">Insights</a>
<a className="border-b border-layout pb-4 flex justify-between items-center text-xl" href="#">
                    Private Login <span className="w-2 h-2 rounded-full bg-black block"></span>
</a>
<a className="bg-[#1a1a1a] text-white p-4 text-center mt-4 text-xl" href="#contact">Contact Us</a>
</div>
</div>

<section className="flex flex-col lg:flex-row border-b border-layout min-h-[80vh]">

<div className="w-full lg:w-[55%] p-8 md:p-16 lg:p-24 flex flex-col justify-center relative">
<div className="flex items-center gap-3 mb-12">
<span className="w-1.5 h-1.5 rounded-full bg-gray-400 block"></span>
<span className="text-xs font-medium tracking-widest uppercase text-gray-500">For High Net Worth Individuals</span>
</div>
<h1 className="font-serif-custom text-5xl md:text-7xl lg:text-8xl xl:text-[7rem] leading-[0.95] tracking-tight mb-12 text-[#1a1a1a]">
                    Personalized<br/>
                    alternative<br/>
                    investment access.
                </h1>
<div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-auto pt-12">
<div className="w-12 border-t border-black mt-3 hidden md:block"></div>
<div>
<p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md leading-relaxed">
                            Curated opportunities. Institutional quality.<br/>
                            Aligned around your objectives.
                        </p>
<a className="inline-flex items-center gap-2 border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all text-base group" href="#approach">
                            Discover Our Approach 
                            <i className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
</div>

<div className="hidden lg:flex w-[10%] relative border-l border-layout justify-center items-center">

<div className="absolute h-full w-px bg-layout left-1/2 -translate-x-1/2"></div>

<div className="w-32 h-32 rounded-full border border-layout relative flex items-center justify-center bg-[#f5f4f0] z-10">
<div className="absolute w-full h-px bg-layout"></div>
<div className="absolute h-full w-px bg-layout"></div>
<div className="w-4 h-4 bg-[#4a5342] rounded-full z-20"></div>
</div>

<div className="absolute top-1/4 -rotate-90 tracking-widest uppercase text-[10px] text-gray-400 left-1/2 -translate-x-1/2 whitespace-nowrap">Access</div>
<div className="absolute bottom-1/4 -rotate-90 tracking-widest uppercase text-[10px] text-gray-400 left-1/2 -translate-x-1/2 whitespace-nowrap">Alignment</div>
</div>

<div className="w-full lg:w-[35%] relative border-t lg:border-t-0 lg:border-l border-layout min-h-[50vh] lg:min-h-0 bg-gray-200 overflow-hidden group">
<img alt="Architectural Stairs" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>

<div className="absolute inset-0 pointer-events-none">
<div className="absolute left-1/3 w-px h-full bg-white/20"></div>
<div className="absolute top-1/3 h-px w-full bg-white/20"></div>
</div>

<div className="absolute top-0 right-0 bg-[#f5f4f0]/90 backdrop-blur-sm p-6 md:p-8 border-b border-l border-layout w-64">
<i className="w-4 h-4 text-gray-400 mb-4" data-lucide="plus"></i>
<p className="text-xs tracking-widest uppercase text-gray-500 leading-relaxed">Exclusive<br/>opportunities<br/>beyond<br/>the ordinary</p>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr_auto] border-b border-layout">

<div className="bg-[#1a1a1a] text-white p-8 md:p-10 flex items-center gap-6 border-b lg:border-b-0 lg:border-r border-layout/20">
<div className="w-16 h-16 rounded-full border border-gray-700 flex items-center justify-center shrink-0">
<svg className="text-gray-400" fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 20L12 4L20 20H16L12 12L8 20H4Z" fill="currentColor"></path>
</svg>
</div>
<p className="text-xs tracking-widest uppercase text-gray-400 leading-relaxed font-medium">
                    We partner with<br/>
<span className="text-white">world-class managers</span><br/>
                    to unlock distinctive<br/>
                    investment opportunities.
                </p>
</div>

<div className="p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-layout flex flex-col justify-center">
<div className="flex items-center gap-2 mb-4">
<span className="w-1 h-1 rounded-full bg-gray-300 block"></span>
<span className="text-[10px] tracking-widest uppercase text-gray-500">Global Reach</span>
</div>
<div className="font-serif-custom text-5xl md:text-6xl tracking-tight mb-2">30+</div>
<div className="text-sm text-gray-600">Countries</div>
</div>
<div className="p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-layout flex flex-col justify-center">
<div className="flex items-center gap-2 mb-4">
<span className="w-1 h-1 rounded-full bg-gray-300 block"></span>
<span className="text-[10px] tracking-widest uppercase text-gray-500">Curated Managers</span>
</div>
<div className="font-serif-custom text-5xl md:text-6xl tracking-tight mb-2">75+</div>
<div className="text-sm text-gray-600">Best-in-class partners</div>
</div>
<div className="p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-layout flex flex-col justify-center">
<div className="flex items-center gap-2 mb-4">
<span className="w-1 h-1 rounded-full bg-gray-300 block"></span>
<span className="text-[10px] tracking-widest uppercase text-gray-500">Asset Classes</span>
</div>
<div className="font-serif-custom text-5xl md:text-6xl tracking-tight mb-2">12+</div>
<div className="text-sm text-gray-600">Alternative strategies</div>
</div>
<div className="p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-layout flex flex-col justify-center">
<div className="flex items-center gap-2 mb-4">
<span className="w-1 h-1 rounded-full bg-gray-300 block"></span>
<span className="text-[10px] tracking-widest uppercase text-gray-500">Client Focus</span>
</div>
<div className="font-serif-custom text-5xl md:text-6xl tracking-tight mb-2">100%</div>
<div className="text-sm text-gray-600">Tailored to you</div>
</div>
<div className="p-8 md:p-10 flex items-center justify-center bg-[#f5f4f0] hover:bg-gray-100 transition-colors cursor-pointer group">
<div className="flex flex-col gap-1.5 group-hover:gap-2 transition-all">
<div className="w-6 h-px bg-black"></div>
<div className="w-6 h-px bg-black"></div>
<div className="w-4 h-px bg-black"></div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] border-b border-layout" id="approach">
<div className="p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-layout flex flex-col justify-between">
<div>
<h2 className="text-xs tracking-widest uppercase text-gray-500 mb-4">01. Methodology</h2>
<h3 className="font-serif-custom text-4xl tracking-tight mb-8">A rigorous approach to alternative markets.</h3>
</div>
<i className="w-8 h-8 text-gray-300" data-lucide="arrow-down-right"></i>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 grid-borders">
<div className="p-8 md:p-16 hover:bg-white transition-colors cursor-default">
<div className="text-4xl font-serif-custom text-gray-300 mb-8">01</div>
<h4 className="text-xl font-medium mb-4">Sourcing</h4>
<p className="text-gray-600 text-lg leading-relaxed">We leverage decades of institutional relationships to access off-market opportunities and elite managers globally.</p>
</div>
<div className="p-8 md:p-16 hover:bg-white transition-colors cursor-default">
<div className="text-4xl font-serif-custom text-gray-300 mb-8">02</div>
<h4 className="text-xl font-medium mb-4">Diligence</h4>
<p className="text-gray-600 text-lg leading-relaxed">Our proprietary framework evaluates operational resilience, alignment of interest, and structural protections.</p>
</div>
<div className="p-8 md:p-16 hover:bg-white transition-colors cursor-default">
<div className="text-4xl font-serif-custom text-gray-300 mb-8">03</div>
<h4 className="text-xl font-medium mb-4">Structuring</h4>
<p className="text-gray-600 text-lg leading-relaxed">We optimize access points through customized vehicles, minimizing friction and maximizing tax efficiency.</p>
</div>
</div>
</section>

<section className="flex flex-col lg:flex-row border-b border-layout" id="investments">
<div className="w-full lg:w-1/3 p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-layout bg-[#1a1a1a] text-white flex flex-col justify-center">
<h2 className="text-xs tracking-widest uppercase text-gray-400 mb-4">02. Expertise</h2>
<h3 className="font-serif-custom text-5xl tracking-tight mb-6">Diversified strategies.</h3>
<p className="text-gray-400 text-lg">Beyond traditional equities and fixed income.</p>
</div>
<div className="w-full lg:w-2/3 flex flex-col">

<div className="group flex items-center justify-between p-8 md:p-10 border-b border-layout hover:bg-white transition-colors cursor-pointer">
<div className="flex items-center gap-8 md:gap-16">
<span className="text-sm font-serif-custom text-gray-400">01</span>
<h4 className="text-2xl md:text-3xl font-serif-custom tracking-tight group-hover:translate-x-2 transition-transform">Private Equity</h4>
</div>
<div className="flex items-center gap-6">
<span className="hidden md:block text-sm text-gray-500 uppercase tracking-widest">Buyout / Growth</span>
<i className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors" data-lucide="plus"></i>
</div>
</div>

<div className="group flex items-center justify-between p-8 md:p-10 border-b border-layout hover:bg-white transition-colors cursor-pointer">
<div className="flex items-center gap-8 md:gap-16">
<span className="text-sm font-serif-custom text-gray-400">02</span>
<h4 className="text-2xl md:text-3xl font-serif-custom tracking-tight group-hover:translate-x-2 transition-transform">Real Assets</h4>
</div>
<div className="flex items-center gap-6">
<span className="hidden md:block text-sm text-gray-500 uppercase tracking-widest">Core / Value-Add</span>
<i className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors" data-lucide="plus"></i>
</div>
</div>

<div className="group flex items-center justify-between p-8 md:p-10 border-b border-layout hover:bg-white transition-colors cursor-pointer">
<div className="flex items-center gap-8 md:gap-16">
<span className="text-sm font-serif-custom text-gray-400">03</span>
<h4 className="text-2xl md:text-3xl font-serif-custom tracking-tight group-hover:translate-x-2 transition-transform">Private Credit</h4>
</div>
<div className="flex items-center gap-6">
<span className="hidden md:block text-sm text-gray-500 uppercase tracking-widest">Direct Lending</span>
<i className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors" data-lucide="plus"></i>
</div>
</div>

<div className="group flex items-center justify-between p-8 md:p-10 hover:bg-white transition-colors cursor-pointer">
<div className="flex items-center gap-8 md:gap-16">
<span className="text-sm font-serif-custom text-gray-400">04</span>
<h4 className="text-2xl md:text-3xl font-serif-custom tracking-tight group-hover:translate-x-2 transition-transform">Venture Capital</h4>
</div>
<div className="flex items-center gap-6">
<span className="hidden md:block text-sm text-gray-500 uppercase tracking-widest">Early / Late Stage</span>
<i className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors" data-lucide="plus"></i>
</div>
</div>
</div>
</section>

<section className="relative min-h-[70vh] flex items-center border-b border-layout overflow-hidden">
<img alt="Architecture" className="absolute inset-0 w-full h-full object-cover object-top opacity-90 scale-105" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-black/20"></div>
<div className="relative z-10 p-8 md:p-16 lg:p-24 max-w-4xl text-white">
<i className="w-10 h-10 mb-8 opacity-50" data-lucide="quote"></i>
<h2 className="font-serif-custom text-4xl md:text-5xl lg:text-7xl tracking-tight leading-tight mb-8">
                    "True diversification requires looking beyond public markets to find uncorrelated alpha."
                </h2>
<div className="flex items-center gap-4">
<div className="w-10 h-px bg-white"></div>
<p className="text-sm tracking-widest uppercase uppercase">Aurea Investment Committee</p>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-b border-layout bg-white relative" id="about">
<div className="absolute top-0 left-1/2 w-px h-full bg-layout hidden lg:block"></div>
<div className="max-w-[1400px] mx-auto px-8 md:px-16">
<div className="text-center mb-16 md:mb-24 relative z-10 bg-white inline-block pr-8">
<h2 className="text-xs tracking-widest uppercase text-gray-500 mb-4">03. Why Aurea</h2>
<h3 className="font-serif-custom text-4xl md:text-5xl tracking-tight">The structural advantage.</h3>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 gap-x-24">

<div className="flex gap-6">
<div className="mt-1">
<i className="w-6 h-6 text-gray-400" data-lucide="shield-check"></i>
</div>
<div>
<h4 className="text-2xl font-serif-custom tracking-tight mb-4">Institutional Quality</h4>
<p className="text-gray-600 text-lg leading-relaxed">We employ the same rigorous frameworks utilized by leading endowments and sovereign wealth funds to evaluate opportunities.</p>
</div>
</div>

<div className="flex gap-6">
<div className="mt-1">
<i className="w-6 h-6 text-gray-400" data-lucide="globe-2"></i>
</div>
<div>
<h4 className="text-2xl font-serif-custom tracking-tight mb-4">Unconstrained Network</h4>
<p className="text-gray-600 text-lg leading-relaxed">Our global presence provides an informational edge, allowing us to identify emerging managers and off-market deals before they reach broad syndication.</p>
</div>
</div>

<div className="flex gap-6">
<div className="mt-1">
<i className="w-6 h-6 text-gray-400" data-lucide="layers"></i>
</div>
<div>
<h4 className="text-2xl font-serif-custom tracking-tight mb-4">Portfolio Construction</h4>
<p className="text-gray-600 text-lg leading-relaxed">We don't just provide access; we help construct bespoke portfolios designed to complement existing allocations and mitigate specific risks.</p>
</div>
</div>

<div className="flex gap-6">
<div className="mt-1">
<i className="w-6 h-6 text-gray-400" data-lucide="arrow-right-left"></i>
</div>
<div>
<h4 className="text-2xl font-serif-custom tracking-tight mb-4">Total Alignment</h4>
<p className="text-gray-600 text-lg leading-relaxed">We invest proprietary capital alongside our clients in every strategy, ensuring our interests are inextricably linked to yours.</p>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] border-b border-layout bg-[#f5f4f0]">
<div className="p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-layout">
<h2 className="text-xs tracking-widest uppercase text-gray-500 mb-4">04. Scale</h2>
<h3 className="font-serif-custom text-4xl tracking-tight mb-6">Built for significant capital deployment.</h3>
<p className="text-gray-600 text-lg">We operate at a scale that mandates attention from top-tier managers.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 grid-borders">
<div className="p-8 md:p-16 flex flex-col justify-center bg-white">
<div className="font-serif-custom text-6xl md:text-7xl tracking-tight mb-4">$4B+</div>
<div className="text-sm tracking-widest uppercase text-gray-500">Capital Advised</div>
</div>
<div className="p-8 md:p-16 flex flex-col justify-center bg-white">
<div className="font-serif-custom text-6xl md:text-7xl tracking-tight mb-4">150+</div>
<div className="text-sm tracking-widest uppercase text-gray-500">Private Transactions</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-b border-layout relative" id="insights">
<div className="px-8 md:px-16 mb-12 flex justify-between items-end">
<div>
<h2 className="text-xs tracking-widest uppercase text-gray-500 mb-4">05. Perspectives</h2>
<h3 className="font-serif-custom text-4xl md:text-5xl tracking-tight">Latest insights.</h3>
</div>
<a className="hidden md:inline-flex items-center gap-2 border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all text-sm group" href="#">
                    View All Research
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-16">

<a className="group block cursor-pointer" href="#">
<div className="aspect-[4/3] w-full overflow-hidden mb-6 bg-gray-200">
<img alt="Graph" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex items-center gap-4 text-xs tracking-widest uppercase text-gray-500 mb-3">
<span>Q3 2023</span>
<span className="w-1 h-1 rounded-full bg-gray-300"></span>
<span>Private Credit</span>
</div>
<h4 className="font-serif-custom text-2xl tracking-tight leading-snug group-hover:text-gray-600 transition-colors">The shifting landscape of direct lending in a high-rate environment.</h4>
</a>

<a className="group block cursor-pointer" href="#">
<div className="aspect-[4/3] w-full overflow-hidden mb-6 bg-gray-200">
<img alt="Building" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex items-center gap-4 text-xs tracking-widest uppercase text-gray-500 mb-3">
<span>Sep 12</span>
<span className="w-1 h-1 rounded-full bg-gray-300"></span>
<span>Real Estate</span>
</div>
<h4 className="font-serif-custom text-2xl tracking-tight leading-snug group-hover:text-gray-600 transition-colors">Finding value in commercial real estate dislocation.</h4>
</a>

<a className="group block cursor-pointer" href="#">
<div className="aspect-[4/3] w-full overflow-hidden mb-6 bg-gray-200">
<img alt="Data" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex items-center gap-4 text-xs tracking-widest uppercase text-gray-500 mb-3">
<span>Aug 28</span>
<span className="w-1 h-1 rounded-full bg-gray-300"></span>
<span>Venture</span>
</div>
<h4 className="font-serif-custom text-2xl tracking-tight leading-snug group-hover:text-gray-600 transition-colors">Secondary markets: Liquidity solutions for early-stage investors.</h4>
</a>
</div>
</section>

<section className="bg-[#1a1a1a] text-[#f5f4f0] border-b border-layout grid grid-cols-1 lg:grid-cols-2" id="contact">
<div className="p-12 md:p-24 lg:p-32 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-800">
<h2 className="font-serif-custom text-5xl md:text-6xl tracking-tight mb-8">Request Access.</h2>
<p className="text-gray-400 text-lg mb-12 max-w-md leading-relaxed">Our platform is available exclusively to qualified purchasers and institutional investors. Apply to discover our current offerings.</p>
<form className="flex flex-col gap-4">
<div className="relative border-b border-gray-700 pb-2">
<input className="w-full bg-transparent text-white placeholder-gray-600 focus:outline-none text-lg peer" placeholder="Enter your email address" type="email"/>
<div className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 peer-focus:w-full"></div>
</div>
<button className="self-start mt-6 flex items-center gap-3 hover:text-gray-400 transition-colors group" type="button">
<span className="text-sm tracking-widest uppercase">Begin Application</span>
<i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</form>
</div>
<div className="relative min-h-[400px] lg:min-h-0 bg-gray-900 overflow-hidden">
<img alt="Executive" className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale mix-blend-luminosity" src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 border-[20px] border-[#1a1a1a] pointer-events-none hidden lg:block"></div>
</div>
</section>

<footer className="bg-[#f5f4f0] pt-20 pb-10 px-8 md:px-16">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

<div className="flex flex-col justify-between">
<a className="flex items-center gap-3 mb-8 group w-max" href="#">
<svg className="text-black group-hover:opacity-70 transition-opacity" fill="none" height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M4 20L12 4L20 20H16L12 12L8 20H4Z" fill="currentColor"></path>
<path d="M12 4L16 12H8L12 4Z" fill="currentColor"></path>
</svg>
<span className="font-medium tracking-widest uppercase text-xl">Aurea</span>
</a>
<p className="text-sm text-gray-500 max-w-xs">New York · London · Singapore<br/>Global Alternative Investment Access</p>
</div>

<div>
<h5 className="text-xs tracking-widest uppercase text-black mb-6 font-medium">Platform</h5>
<ul className="flex flex-col gap-4 text-gray-600 text-sm">
<li><a className="hover:text-black transition-colors" href="#">Investment Approach</a></li>
<li><a className="hover:text-black transition-colors" href="#">Asset Classes</a></li>
<li><a className="hover:text-black transition-colors" href="#">Performance History</a></li>
<li><a className="hover:text-black transition-colors" href="#">Client Portal Login</a></li>
</ul>
</div>

<div>
<h5 className="text-xs tracking-widest uppercase text-black mb-6 font-medium">Firm</h5>
<ul className="flex flex-col gap-4 text-gray-600 text-sm">
<li><a className="hover:text-black transition-colors" href="#">About Aurea</a></li>
<li><a className="hover:text-black transition-colors" href="#">Leadership Team</a></li>
<li><a className="hover:text-black transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-black transition-colors" href="#">Contact Us</a></li>
</ul>
</div>

<div>
<h5 className="text-xs tracking-widest uppercase text-black mb-6 font-medium">Connect</h5>
<ul className="flex flex-col gap-4 text-gray-600 text-sm mb-8">
<li><a className="hover:text-black transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-black transition-colors" href="#">Twitter / X</a></li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-layout text-xs text-gray-400 gap-4">
<p>© 2024 Aurea Partners LLC. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-gray-600 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-gray-600 transition-colors" href="#">Terms of Use</a>
<a className="hover:text-gray-600 transition-colors" href="#">Disclosures</a>
</div>
</div>
</footer>
</div>


    </>
  );
}
