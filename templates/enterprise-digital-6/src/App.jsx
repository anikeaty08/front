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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full h-screen -z-10 saturate-50 opacity-30 absolute mix-blend-luminosity" data-alpha-mask="70" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 70%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="FixNvEwvWwbu3QX9qC3F"></div>

</div></div>

<nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#141618]/80 border-b border-white/10 transition-all duration-300">
<div className="max-w-[1240px] mx-auto px-4 md:px-8 h-[80px] flex items-center justify-between">

<a className="font-semibold text-2xl tracking-tight uppercase flex items-center gap-2" href="#">
                NITECO
            </a>

<div className="hidden lg:flex items-center gap-10 text-sm font-medium">
<a className="flex items-center gap-1.5 hover:text-[#f9d022] transition-colors group" href="#">
                    Services 
                    <iconify-icon className="text-xs group-hover:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</a>
<a className="flex items-center gap-1.5 hover:text-[#f9d022] transition-colors group" href="#">
                    Partners 
                    <iconify-icon className="text-xs group-hover:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</a>
<a className="hover:text-[#f9d022] transition-colors" href="#">Work</a>
<a className="flex items-center gap-1.5 hover:text-[#f9d022] transition-colors group" href="#">
                    About 
                    <iconify-icon className="text-xs group-hover:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</a>
<a className="flex items-center gap-1.5 hover:text-[#f9d022] transition-colors group" href="#">
                    Insights 
                    <iconify-icon className="text-xs group-hover:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</a>
<a className="hover:text-[#f9d022] transition-colors" href="#">Careers</a>
</div>

<div className="flex items-center gap-6">
<button aria-label="Search" className="text-white hover:text-[#f9d022] transition-colors hidden sm:block">
<iconify-icon className="text-2xl" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<a className="bg-[#f9d022] text-[#141618] px-7 py-3 rounded-full text-sm font-semibold hover:bg-white transition-colors duration-300" href="#">
                    Contact us
                </a>
</div>
</div>
</nav>

<main className="">
<section className="relative max-w-[1240px] mx-auto px-4 md:px-8 py-20 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
<div className="relative z-10 space-y-10 max-w-xl">
<h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight">
                    Where global<br/>delivery meets<br/>digital excellence.
                </h1>
<p className="text-[#848e9c] text-lg font-normal leading-relaxed max-w-md">
                    We're a global digital agency creating localized, high-performing commerce and marketing solutions for enterprise brands.
                </p>
<div className="pt-4">
<a className="inline-flex items-center justify-center bg-[#f9d022] text-[#141618] px-9 py-4 rounded-full text-base font-semibold hover:bg-white hover:scale-105 transition-all duration-300" href="#">
                        Find out how
                    </a>
</div>
</div>

<div className="hidden lg:block relative h-full w-full min-h-[500px] pointer-events-none">
<svg className="absolute inset-0 w-full h-full text-[#f9d022]" fill="none" style={{strokeWidth: '1'}} viewbox="0 0 500 500">
<path className="hero-graphic-path" d="M 100 500 Q 250 250 500 100" stroke="currentColor" style={{animationDelay: '0s'}}></path>
<path className="hero-graphic-path" d="M 50 500 Q 200 300 500 150" stroke="currentColor" style={{animationDelay: '-2s'}}></path>
<path className="hero-graphic-path" d="M 0 500 Q 150 350 500 200" stroke="currentColor" style={{animationDelay: '-4s'}}></path>
<path className="hero-graphic-path" d="M -50 500 Q 100 400 500 250" stroke="currentColor" style={{animationDelay: '-6s'}}></path>
</svg>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#f9d022] opacity-[0.03] blur-[100px] rounded-full"></div>
</div>
</section>

<section className="border-y border-white/10 bg-[#141618]">
<div className="max-w-[1240px] mx-auto px-4 md:px-8 py-12">
<div className="flex flex-wrap justify-between items-center gap-8 md:gap-4 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<img alt="Kenwood" className="h-6 md:h-8 w-auto" src="https://niteco.com/contentassets/a01608e4d4fd421b8891500049daa58c/kenwood.svg"/>
<img alt="Braun" className="h-6 md:h-8 w-auto" src="https://niteco.com/contentassets/a01608e4d4fd421b8891500049daa58c/braun.svg"/>
<img alt="Dagens Nyheter" className="h-6 md:h-8 w-auto" src="https://niteco.com/contentassets/a01608e4d4fd421b8891500049daa58c/dn.svg"/>
<img alt="The Good Mood Food" className="h-8 md:h-10 w-auto" src="https://niteco.com/contentassets/a01608e4d4fd421b8891500049daa58c/thegoodmood.svg"/>
<img alt="AnalogFolk" className="h-6 md:h-8 w-auto" src="https://niteco.com/contentassets/a01608e4d4fd421b8891500049daa58c/analog-folk.svg"/>
</div>
</div>
</section>

<section className="py-24 md:py-32 max-w-[1240px] mx-auto px-4 md:px-8">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-20 max-w-2xl">Digital mastery across all fronts.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">

<div className="flex flex-col">
<div className="mb-8">
<iconify-icon className="text-[40px] text-[#f9d022]" icon="solar:devices-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-5">Web &amp; E-Commerce</h3>
<p className="text-[#848e9c] text-sm font-normal leading-relaxed mb-10 flex-grow">
                        We build robust, scalable platforms that drive conversions and deliver seamless user experiences across all devices and touchpoints.
                    </p>
<ul className="space-y-0 text-sm font-medium border-t border-white/10 pt-2">
<li>
<a className="flex justify-between items-center py-4 border-b border-white/5 hover:text-[#f9d022] group transition-colors" href="#">
                                Optimizely 
                                <iconify-icon className="text-lg text-[#f9d022] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</li>
<li>
<a className="flex justify-between items-center py-4 border-b border-white/5 hover:text-[#f9d022] group transition-colors" href="#">
                                Sitecore 
                                <iconify-icon className="text-lg text-[#f9d022] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</li>
<li>
<a className="flex justify-between items-center py-4 border-b border-white/5 hover:text-[#f9d022] group transition-colors" href="#">
                                Adobe Commerce 
                                <iconify-icon className="text-lg text-[#f9d022] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</li>
</ul>
</div>

<div className="flex flex-col">
<div className="mb-8">
<iconify-icon className="text-[40px] text-[#f9d022]" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-5">Digital Marketing</h3>
<p className="text-[#848e9c] text-sm font-normal leading-relaxed mb-10 flex-grow">
                        Data-driven strategies that amplify your brand's reach, engage your target audience, and maximize your return on investment.
                    </p>
<ul className="space-y-0 text-sm font-medium border-t border-white/10 pt-2">
<li>
<a className="flex justify-between items-center py-4 border-b border-white/5 hover:text-[#f9d022] group transition-colors" href="#">
                                SEO &amp; SEM 
                                <iconify-icon className="text-lg text-[#f9d022] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</li>
<li>
<a className="flex justify-between items-center py-4 border-b border-white/5 hover:text-[#f9d022] group transition-colors" href="#">
                                Conversion Rate Optimization 
                                <iconify-icon className="text-lg text-[#f9d022] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</li>
<li>
<a className="flex justify-between items-center py-4 border-b border-white/5 hover:text-[#f9d022] group transition-colors" href="#">
                                Content Strategy 
                                <iconify-icon className="text-lg text-[#f9d022] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</li>
</ul>
</div>

<div className="flex flex-col">
<div className="mb-8">
<iconify-icon className="text-[40px] text-[#f9d022]" icon="solar:settings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-5">Managed Services</h3>
<p className="text-[#848e9c] text-sm font-normal leading-relaxed mb-10 flex-grow">
                        Continuous optimization, technical support, and proactive maintenance to ensure your digital assets run at peak performance.
                    </p>
<ul className="space-y-0 text-sm font-medium border-t border-white/10 pt-2">
<li>
<a className="flex justify-between items-center py-4 border-b border-white/5 hover:text-[#f9d022] group transition-colors" href="#">
                                24/7 Support 
                                <iconify-icon className="text-lg text-[#f9d022] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</li>
<li>
<a className="flex justify-between items-center py-4 border-b border-white/5 hover:text-[#f9d022] group transition-colors" href="#">
                                Cloud Hosting 
                                <iconify-icon className="text-lg text-[#f9d022] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</li>
<li>
<a className="flex justify-between items-center py-4 border-b border-white/5 hover:text-[#f9d022] group transition-colors" href="#">
                                Security Audits 
                                <iconify-icon className="text-lg text-[#f9d022] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</li>
</ul>
</div>
</div>
</section>

<section className="border-t border-white/10">
<div className="max-w-[1240px] mx-auto px-4 md:px-8 py-20">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
<div>
<div className="text-[#f9d022] text-6xl md:text-7xl font-normal tracking-tight mb-4 leading-none">500+</div>
<div className="text-xs font-semibold uppercase tracking-[3px] text-[#848e9c]">Employees globally</div>
</div>
<div>
<div className="text-[#f9d022] text-6xl md:text-7xl font-normal tracking-tight mb-4 leading-none">14</div>
<div className="text-xs font-semibold uppercase tracking-[3px] text-[#848e9c]">Years of excellence</div>
</div>
<div>
<div className="text-[#f9d022] text-6xl md:text-7xl font-normal tracking-tight mb-4 leading-none">6</div>
<div className="text-xs font-semibold uppercase tracking-[3px] text-[#848e9c]">Global offices</div>
</div>
<div>
<div className="text-[#f9d022] text-6xl md:text-7xl font-normal tracking-tight mb-4 leading-none">100+</div>
<div className="text-xs font-semibold uppercase tracking-[3px] text-[#848e9c]">Enterprise clients</div>
</div>
</div>
</div>
</section>

<section className="w-full relative bg-[#141618]">
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-[auto]">

<a className="col-span-1 md:col-span-2 md:row-span-2 bg-[#1F6520] p-10 md:p-16 flex flex-col justify-end min-h-[400px] md:min-h-[600px] group relative overflow-hidden focus:outline-none focus:ring-4 focus:ring-inset focus:ring-[#f9d022]" href="#">
<div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
<img alt="Heineken" className="w-32 mb-10 relative z-10 group-hover:scale-105 transition-transform duration-500 origin-bottom-left" src="https://niteco.com/contentassets/04a54311f638440abdc6c263cc48bf0b/logo.png?width=256&amp;quality=75"/>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white relative z-10 max-w-md group-hover:text-[#f9d022] transition-colors duration-300">A localized B2B ordering solution for Heineken</h3>
</a>

<a className="bg-[#d31245] p-10 flex items-center justify-center min-h-[300px] group relative focus:outline-none focus:ring-4 focus:ring-inset focus:ring-[#f9d022]" href="#">
<div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<img alt="Privata Affarer" className="w-32 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 relative z-10" src="https://niteco.com/globalassets/client-logo/privata.png?width=256&amp;quality=75"/>
</a>

<a className="p-10 flex items-center justify-center min-h-[300px] group relative focus:outline-none focus:ring-4 focus:ring-inset focus:ring-[#f9d022] bg-yellow-200" href="#">
<div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

<img alt="Adairs" className="w-32 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 filter invert-[1] relative z-10" src="https://niteco.com/globalassets/client-logo/microsoftteams-image-5.png?width=256&amp;quality=75"/>
</a>

<a className="col-span-1 md:col-span-2 bg-[#52364c] p-10 flex items-center justify-center min-h-[300px] group relative focus:outline-none focus:ring-4 focus:ring-inset focus:ring-[#f9d022]" href="#">
<div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<img alt="La Vie en Rose" className="w-48 md:w-56 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 relative z-10" src="https://niteco.com/contentassets/d49057e6b09248e4933a6528255112dd/la-vie-en-rose-logo.png?width=256&amp;quality=75"/>
</a>


<a className="bg-[#0b1c2c] p-10 flex items-center justify-center min-h-[300px] group relative focus:outline-none focus:ring-4 focus:ring-inset focus:ring-[#f9d022]" href="#">
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<img alt="Digizuite" className="w-32 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 relative z-10" src="https://niteco.com/globalassets/client-logo/digizuite.png?width=256&amp;quality=75"/>
</a>

<a className="col-span-1 md:col-span-2 bg-[#1c1e21] p-10 flex flex-col items-center justify-center min-h-[300px] group relative focus:outline-none focus:ring-4 focus:ring-inset focus:ring-[#f9d022]" href="#">
<div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<img alt="Fieldfisher" className="w-48 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 relative z-10 mb-6" src="https://niteco.com/globalassets/client-logo/field-fisher-white.png?width=256&amp;quality=75"/>
<span className="text-white/60 text-sm tracking-wide group-hover:text-white transition-colors duration-300">Delivering digital excellence</span>
</a>

<a className="bg-[#7d1c21] p-10 flex items-center justify-center min-h-[300px] group relative focus:outline-none focus:ring-4 focus:ring-inset focus:ring-[#f9d022]" href="#">
<div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<img alt="Northshore" className="w-32 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 relative z-10" src="https://niteco.com/contentassets/d51d57370dd94b3d832a86352704759f/northshore-logo.png?width=256&amp;quality=75"/>
</a>
</div>

<div className="flex justify-center py-16 w-full">
<a className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-3.5 rounded-full text-xs font-semibold tracking-[2px] uppercase hover:bg-white hover:text-[#141618] transition-all duration-300" href="#">
                    More case studies <span className="text-lg leading-none font-normal">+</span>
</a>
</div>
</section>

<section className="max-w-5xl mx-auto px-4 md:px-8 py-24 md:py-32 text-center">
<div className="text-[#f9d022] text-7xl md:text-8xl font-serif leading-none h-16 md:h-20 mb-6 flex justify-center items-start overflow-hidden">"</div>
<h3 className="text-2xl md:text-4xl font-medium leading-[1.4] tracking-tight mb-12 max-w-4xl mx-auto">
                They have been an excellent partner in our digital transformation journey, providing top-tier technical expertise and proactive solutions that directly impacted our bottom line.
            </h3>
<div className="text-xs font-semibold uppercase tracking-[3px] text-[#848e9c] mb-12">
                Global Director of E-Commerce
            </div>

<div className="flex justify-center gap-3">
<button aria-label="Slide 1" className="w-2.5 h-2.5 rounded-full bg-[#f9d022] transition-colors"></button>
<button aria-label="Slide 2" className="w-2.5 h-2.5 rounded-full bg-white/20 hover:bg-white/50 transition-colors"></button>
<button aria-label="Slide 3" className="w-2.5 h-2.5 rounded-full bg-white/20 hover:bg-white/50 transition-colors"></button>
</div>
</section>

<section className="max-w-[1240px] mx-auto px-4 md:px-8 py-24 border-t border-white/10">
<div className="flex justify-between items-end mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">The latest</h2>
<a className="hidden md:inline-flex items-center gap-2 border border-white/20 text-white px-8 py-3.5 rounded-full text-xs font-semibold tracking-[2px] uppercase hover:bg-white hover:text-[#141618] transition-all duration-300" href="#">
                    All news <span className="text-lg leading-none font-normal">+</span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">

<a className="md:col-span-7 group block focus:outline-none" href="#">
<div className="aspect-[16/10] bg-[#17191c] rounded-2xl mb-8 overflow-hidden relative">
<div className="absolute inset-0 bg-[#f9d022]/0 group-hover:bg-[#f9d022]/5 transition-colors duration-500 z-10"></div>

<div className="w-full h-full bg-gradient-to-br from-[#1c1e21] to-[#141618] group-hover:scale-105 transition-transform duration-700"></div>
</div>
<div className="flex items-center gap-4 mb-4">
<span className="text-xs text-[#f9d022] font-semibold tracking-[2px] uppercase">Blog</span>
<span className="w-1 h-1 rounded-full bg-white/30"></span>
<span className="text-xs text-[#848e9c] font-medium tracking-wide">24 Oct 2023</span>
</div>
<h3 className="text-3xl font-semibold tracking-tight leading-[1.2] group-hover:text-[#f9d022] transition-colors duration-300 max-w-xl">
                        Understanding composable architecture and its impact on modern enterprise commerce
                    </h3>
</a>

<div className="md:col-span-5 flex flex-col justify-between">

<a className="block border-b border-white/10 pb-8 mb-8 group focus:outline-none" href="#">
<div className="flex items-center gap-4 mb-3">
<span className="text-xs text-[#f9d022] font-semibold tracking-[2px] uppercase">Press Release</span>
<span className="w-1 h-1 rounded-full bg-white/30"></span>
<span className="text-xs text-[#848e9c] font-medium tracking-wide">12 Oct 2023</span>
</div>
<h4 className="text-xl font-semibold tracking-tight leading-snug group-hover:text-[#f9d022] transition-colors duration-300">
                            Niteco wins prestigious Sitecore Experience Award for technical innovation
                        </h4>
</a>

<a className="block border-b border-white/10 pb-8 mb-8 group focus:outline-none" href="#">
<div className="flex items-center gap-4 mb-3">
<span className="text-xs text-[#f9d022] font-semibold tracking-[2px] uppercase">Event</span>
<span className="w-1 h-1 rounded-full bg-white/30"></span>
<span className="text-xs text-[#848e9c] font-medium tracking-wide">05 Oct 2023</span>
</div>
<h4 className="text-xl font-semibold tracking-tight leading-snug group-hover:text-[#f9d022] transition-colors duration-300">
                            Join us at Opticon: Navigating the future of digital experiences
                        </h4>
</a>

<a className="block group focus:outline-none" href="#">
<div className="flex items-center gap-4 mb-3">
<span className="text-xs text-[#f9d022] font-semibold tracking-[2px] uppercase">Case Study</span>
<span className="w-1 h-1 rounded-full bg-white/30"></span>
<span className="text-xs text-[#848e9c] font-medium tracking-wide">28 Sep 2023</span>
</div>
<h4 className="text-xl font-semibold tracking-tight leading-snug group-hover:text-[#f9d022] transition-colors duration-300">
                            How we helped a global retailer increase conversion rates by 45%
                        </h4>
</a>
</div>

<div className="md:hidden mt-4">
<a className="flex justify-center items-center gap-2 border border-white/20 text-white w-full py-4 rounded-full text-xs font-semibold tracking-[2px] uppercase hover:bg-white hover:text-[#141618] transition-all duration-300" href="#">
                        All news <span className="text-lg leading-none font-normal">+</span>
</a>
</div>
</div>
</section>

<section className="max-w-[1240px] mx-auto px-4 md:px-8 py-24 border-t border-white/10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16">Our clients</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="aspect-[3/2] bg-[#17191c] rounded-xl border border-white/5 hover:bg-white/5 transition-colors duration-300 cursor-pointer"></div>
<div className="aspect-[3/2] bg-[#17191c] rounded-xl border border-white/5 hover:bg-white/5 transition-colors duration-300 cursor-pointer"></div>
<div className="aspect-[3/2] bg-[#17191c] rounded-xl border border-white/5 hover:bg-white/5 transition-colors duration-300 cursor-pointer"></div>
<div className="aspect-[3/2] bg-[#17191c] rounded-xl border border-white/5 hover:bg-white/5 transition-colors duration-300 cursor-pointer"></div>
<div className="aspect-[3/2] bg-[#17191c] rounded-xl border border-white/5 hover:bg-white/5 transition-colors duration-300 cursor-pointer"></div>
<div className="aspect-[3/2] bg-[#17191c] rounded-xl border border-white/5 hover:bg-white/5 transition-colors duration-300 cursor-pointer"></div>
<div className="aspect-[3/2] bg-[#17191c] rounded-xl border border-white/5 hover:bg-white/5 transition-colors duration-300 cursor-pointer"></div>
<div className="aspect-[3/2] bg-[#17191c] rounded-xl border border-white/5 hover:bg-white/5 transition-colors duration-300 cursor-pointer"></div>
</div>
</section>

<section className="max-w-[1240px] mx-auto px-4 md:px-8 pb-32">
<a className="relative rounded-2xl overflow-hidden aspect-[16/9] md:aspect-[3/1] flex items-center justify-center group block focus:outline-none focus:ring-4 focus:ring-[#f9d022]" href="#">
<img alt="Children playing - Niteco Charity Foundation" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700 ease-out" src="https://niteco.com/contentassets/87e7cd18033b4a3d94115faecaff95c9/nicef-banner-resize.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#141618] via-transparent to-transparent opacity-80"></div>
<div className="relative z-10 text-center max-w-2xl px-6">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-8 text-white drop-shadow-md">Niteco Charity Foundation</h2>
<span className="inline-block bg-white text-[#141618] px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#f9d022] transition-colors duration-300">
                        Discover NICEf
                    </span>
</div>
</a>
</section>

<section className="max-w-[1240px] mx-auto px-4 md:px-8 py-24 border-t border-white/10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16">Our offices around the world</h2>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-white/10">

<a className="block p-10 border-r border-b border-white/10 bg-[#141618] hover:bg-[#17191c] transition-colors duration-300 group" href="#">
<h3 className="text-2xl font-semibold tracking-tight mb-2 group-hover:text-[#f9d022] transition-colors">Stockholm</h3>
<p className="text-sm font-medium text-[#848e9c] mb-10">Sweden (HQ)</p>
<div className="text-sm font-medium text-[#848e9c] mb-1 hover:text-white transition-colors">contact@niteco.com</div>
<div className="text-sm font-medium text-[#f9d022]">+46 8 123 45 67</div>
</a>

<a className="block p-10 border-r border-b border-white/10 bg-[#141618] hover:bg-[#17191c] transition-colors duration-300 group" href="#">
<h3 className="text-2xl font-semibold tracking-tight mb-2 group-hover:text-[#f9d022] transition-colors">London</h3>
<p className="text-sm font-medium text-[#848e9c] mb-10">United Kingdom</p>
<div className="text-sm font-medium text-[#848e9c] mb-1 hover:text-white transition-colors">contact@niteco.com</div>
<div className="text-sm font-medium text-[#f9d022]">+44 20 7123 4567</div>
</a>

<a className="block p-10 border-r border-b border-white/10 bg-[#141618] hover:bg-[#17191c] transition-colors duration-300 group" href="#">
<h3 className="text-2xl font-semibold tracking-tight mb-2 group-hover:text-[#f9d022] transition-colors">Hanoi</h3>
<p className="text-sm font-medium text-[#848e9c] mb-10">Vietnam</p>
<div className="text-sm font-medium text-[#848e9c] mb-1 hover:text-white transition-colors">contact@niteco.com</div>
<div className="text-sm font-medium text-[#f9d022]">+84 24 3123 4567</div>
</a>

<a className="block p-10 border-r border-b border-white/10 bg-[#141618] hover:bg-[#17191c] transition-colors duration-300 group" href="#">
<h3 className="text-2xl font-semibold tracking-tight mb-2 group-hover:text-[#f9d022] transition-colors">Ho Chi Minh City</h3>
<p className="text-sm font-medium text-[#848e9c] mb-10">Vietnam</p>
<div className="text-sm font-medium text-[#848e9c] mb-1 hover:text-white transition-colors">contact@niteco.com</div>
<div className="text-sm font-medium text-[#f9d022]">+84 28 3123 4567</div>
</a>

<a className="block p-10 border-r border-b border-white/10 bg-[#141618] hover:bg-[#17191c] transition-colors duration-300 group" href="#">
<h3 className="text-2xl font-semibold tracking-tight mb-2 group-hover:text-[#f9d022] transition-colors">Sydney</h3>
<p className="text-sm font-medium text-[#848e9c] mb-10">Australia</p>
<div className="text-sm font-medium text-[#848e9c] mb-1 hover:text-white transition-colors">contact@niteco.com</div>
<div className="text-sm font-medium text-[#f9d022]">+61 2 9123 4567</div>
</a>

<a className="block p-10 border-r border-b border-white/10 bg-[#141618] hover:bg-[#17191c] transition-colors duration-300 group" href="#">
<h3 className="text-2xl font-semibold tracking-tight mb-2 group-hover:text-[#f9d022] transition-colors">Hong Kong</h3>
<p className="text-sm font-medium text-[#848e9c] mb-10">Hong Kong SAR</p>
<div className="text-sm font-medium text-[#848e9c] mb-1 hover:text-white transition-colors">contact@niteco.com</div>
<div className="text-sm font-medium text-[#f9d022]">+852 3123 4567</div>
</a>

<div className="hidden lg:block p-10 border-r border-b border-white/10 bg-[#141618]"></div>
<div className="hidden lg:block p-10 border-r border-b border-white/10 bg-[#141618]"></div>
</div>
</section>
</main>

<section className="bg-[#f9d022] text-[#141618] py-24 md:py-32 text-center px-4">
<h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05] mb-12">
            Ready to transform<br/>your digital presence?
        </h2>
<a className="inline-flex bg-[#141618] text-white px-10 py-5 rounded-full font-semibold hover:bg-white hover:text-[#141618] transition-colors duration-300 text-base md:text-lg" href="#">
            Let's talk
        </a>
</section>

<footer className="bg-[#17191c] pt-24 pb-8 px-4 md:px-8 text-sm border-t border-[#141618]">
<div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-12 mb-20">

<div className="md:col-span-4 lg:col-span-3">
<a className="inline-block font-semibold text-2xl tracking-tight uppercase mb-8" href="#">NITECO</a>
<address className="not-italic text-[#848e9c] font-normal leading-relaxed text-sm">
                    123 Global Way<br/>
                    111 22 Stockholm, Sweden<br/>
<a className="hover:text-white transition-colors mt-2 inline-block" href="mailto:info@niteco.com">info@niteco.com</a>
</address>
<div className="flex gap-4 mt-8">
<a aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#f9d022] hover:text-[#141618] transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:link-circle-linear"></iconify-icon>
</a>
<a aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#f9d022] hover:text-[#141618] transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:hashtag-square-linear"></iconify-icon>
</a>
</div>
</div>

<div className="md:col-span-2 lg:col-span-2">
<h4 className="font-semibold text-white mb-6 uppercase tracking-[1px] text-xs">Services</h4>
<ul className="space-y-4 text-[#848e9c] font-medium text-sm">
<li><a className="hover:text-[#f9d022] transition-colors" href="#">Web Development</a></li>
<li><a className="hover:text-[#f9d022] transition-colors" href="#">E-Commerce</a></li>
<li><a className="hover:text-[#f9d022] transition-colors" href="#">Digital Marketing</a></li>
<li><a className="hover:text-[#f9d022] transition-colors" href="#">Managed Services</a></li>
<li><a className="hover:text-[#f9d022] transition-colors" href="#">UX/UI Design</a></li>
</ul>
</div>

<div className="md:col-span-2 lg:col-span-2">
<h4 className="font-semibold text-white mb-6 uppercase tracking-[1px] text-xs">Company</h4>
<ul className="space-y-4 text-[#848e9c] font-medium text-sm">
<li><a className="hover:text-[#f9d022] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#f9d022] transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-[#f9d022] transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-[#f9d022] transition-colors" href="#">Insights</a></li>
<li><a className="hover:text-[#f9d022] transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div className="md:col-span-4 lg:col-span-5 lg:pl-8">
<h4 className="font-semibold text-white mb-6 uppercase tracking-[1px] text-xs">Subscribe to our newsletter</h4>
<p className="text-[#848e9c] text-sm mb-6">Get the latest insights on digital transformation and e-commerce.</p>
<form className="relative rounded-full p-1.5 flex focus-within:ring-1 focus-within:ring-[#f9d022] transition-shadow bg-yellow-200">
<input aria-label="Email address" className="bg-transparent border-none outline-none text-white px-5 w-full text-sm font-medium placeholder:text-[#848e9c]" placeholder="Your email address" required="" type="email"/>
<button className="bg-[#f9d022] text-[#141618] px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors shrink-0" type="submit">
                        Subscribe
                    </button>
</form>
</div>
</div>

<div className="max-w-[1240px] mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-medium text-[#848e9c]">
<div className="mb-4 md:mb-0">© 2024 Niteco. All rights reserved.</div>
<div className="flex flex-wrap justify-center gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Cookie Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
