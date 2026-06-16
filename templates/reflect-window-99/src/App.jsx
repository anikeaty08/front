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
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const closeBtn = document.getElementById('close-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            const isClosed = mobileMenu.classList.contains('translate-x-full');
            if (isClosed) {
                mobileMenu.classList.remove('hidden');
                // Small delay to allow display block to apply before transform
                setTimeout(() => {
                    mobileMenu.classList.remove('translate-x-full');
                }, 10);
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            } else {
                mobileMenu.classList.add('translate-x-full');
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                }, 500); // Match duration
                document.body.style.overflow = '';
            }
        }

        mobileBtn.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);
        
        // Close menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="relative min-h-screen w-full flex flex-col pt-6 lg:pt-10 overflow-hidden z-0">

<nav className="relative z-50 flex items-center justify-between px-6 lg:px-12 w-full max-w-[1600px] mx-auto">

<a className="flex items-center gap-3 group" href="#">
<div className="relative flex items-center justify-center w-10 h-10 border-[1.5px] border-[#122c2a]">
<span className="text-xl font-medium tracking-tight">R</span>
<div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#f4f2ee] border-t border-l border-[#122c2a]"></div>
</div>
<div className="flex flex-col">
<span className="text-lg font-medium tracking-tight leading-none">REFLECT</span>
<span className="text-[10px] tracking-widest text-[#122c2a]/60 mt-1 uppercase font-medium">Window Tinting</span>
</div>
</a>

<ul className="hidden lg:flex items-center gap-10">
<li className="relative">
<a className="text-sm font-medium tracking-wide uppercase text-[#122c2a]" href="#">Home</a>
<div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#122c2a] rounded-full"></div>
</li>
<li><a className="text-sm font-medium tracking-wide uppercase text-[#122c2a]/70 hover:text-[#122c2a] transition-colors" href="#about">About</a></li>
<li><a className="text-sm font-medium tracking-wide uppercase text-[#122c2a]/70 hover:text-[#122c2a] transition-colors" href="#benefits">Benefits</a></li>
<li><a className="text-sm font-medium tracking-wide uppercase text-[#122c2a]/70 hover:text-[#122c2a] transition-colors" href="#services">Services</a></li>
<li><a className="text-sm font-medium tracking-wide uppercase text-[#122c2a]/70 hover:text-[#122c2a] transition-colors" href="#gallery">Gallery</a></li>
<li><a className="text-sm font-medium tracking-wide uppercase text-[#122c2a]/70 hover:text-[#122c2a] transition-colors" href="#faq">FAQ</a></li>
</ul>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-3 bg-[#122c2a] text-white px-6 py-3 rounded-full hover:bg-[#1a3f3d] transition-all duration-300" href="#quote">
<span className="text-sm font-medium tracking-wide">GET A FREE QUOTE</span>
<div className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center">
<i className="w-3.5 h-3.5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</a>
<button className="lg:hidden p-2 text-[#122c2a]" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-[#f4f2ee] z-[100] translate-x-full transition-transform duration-500 flex flex-col pt-24 px-8 hidden" id="mobile-menu">
<button className="absolute top-8 right-8 p-2 text-[#122c2a]" id="close-menu-btn">
<i className="w-8 h-8" data-lucide="x" strokeWidth="1.5"></i>
</button>
<ul className="flex flex-col gap-8 text-2xl font-medium tracking-tight">
<li><a className="mobile-link text-[#122c2a]" href="#">Home</a></li>
<li><a className="mobile-link text-[#122c2a]/70" href="#about">About</a></li>
<li><a className="mobile-link text-[#122c2a]/70" href="#benefits">Benefits</a></li>
<li><a className="mobile-link text-[#122c2a]/70" href="#services">Services</a></li>
<li><a className="mobile-link text-[#122c2a]/70" href="#gallery">Gallery</a></li>
<li><a className="mobile-link text-[#122c2a]/70" href="#faq">FAQ</a></li>
</ul>
</div>

<div className="flex-1 relative flex flex-col lg:flex-row w-full max-w-[1600px] mx-auto mt-12 lg:mt-0">

<div className="w-full lg:w-[45%] relative z-20 flex flex-col justify-center px-6 lg:px-12 pt-10 pb-32 lg:pb-48">
<div className="flex items-center gap-4 mb-8">
<div className="w-10 h-[1px] bg-[#122c2a]/30"></div>
<span className="text-xs tracking-[0.2em] uppercase font-medium text-[#122c2a]/60">Comfort. Privacy. Protection.</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[84px] leading-[1.05] tracking-tight font-medium text-[#122c2a] mb-8">
                    Tinted Comfort.<br/>Better Living.
                </h1>
<p className="text-lg md:text-xl text-[#122c2a]/70 font-light max-w-md mb-12 leading-relaxed">
                    Premium window tinting for homes that look better, feel better and live smarter.
                </p>
<a className="flex w-max items-center gap-4 bg-[#122c2a] text-white pl-6 pr-2 py-2 rounded-full hover:bg-[#1a3f3d] transition-all duration-300 group" href="#benefits">
<span className="text-sm font-medium tracking-wide uppercase">Explore Benefits</span>
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#122c2a] transition-colors">
<i className="w-5 h-5" data-lucide="chevron-right" strokeWidth="1.5"></i>
</div>
</a>

<div className="hidden lg:block absolute bottom-12 right-0 w-[280px] h-[380px] bg-[#d4c6b3] rounded-t-full z-10 overflow-hidden flex items-end justify-center pointer-events-none">
<img alt="Plant" className="w-full h-full object-cover mix-blend-multiply opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{objectPosition: 'bottom center'}}/>
</div>

<div className="hidden lg:flex absolute bottom-[260px] -right-16 w-[140px] h-[140px] bg-[#122c2a] rounded-full flex-col items-center justify-center text-white z-30 shadow-2xl">
<div className="w-10 h-10 border border-white/30 mb-3 flex items-center justify-center">
<div className="w-6 h-6 border-[1.5px] border-white"></div>
</div>
<span className="text-[10px] text-center leading-tight tracking-[0.1em] font-medium uppercase text-white/90">Privacy<br/>Comfort<br/>Style</span>
</div>
</div>

<div className="absolute lg:inset-y-0 lg:right-0 w-full lg:w-[65%] h-[50vh] lg:h-full z-0 lg:clip-path-hero">

<div className="w-full h-full" style={{clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)'}}>
<img alt="Modern home exterior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-transparent"></div>
</div>

<div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 right-12 flex-col gap-4 text-white z-20">
<div className="flex items-center gap-4">
<div className="w-[1px] h-12 bg-white/30"></div>
<div className="flex flex-col gap-1 text-lg font-light tracking-wide">
<span>Cooler indoors</span>
<span>Lower bills</span>
<span>Lasting protection</span>
</div>
</div>
</div>

<div className="hidden lg:flex absolute bottom-24 right-12 bg-[#f4f2ee] rounded-full p-2 pr-6 items-center gap-4 shadow-xl z-20">
<div className="flex -space-x-3">
<img alt="Avatar" className="w-10 h-10 rounded-full border-2 border-[#f4f2ee]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="Avatar" className="w-10 h-10 rounded-full border-2 border-[#f4f2ee]" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="Avatar" className="w-10 h-10 rounded-full border-2 border-[#f4f2ee]" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="w-10 h-10 rounded-full border-2 border-[#f4f2ee] bg-[#122c2a] text-white flex items-center justify-center text-xs font-medium">+</div>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium tracking-tight text-[#122c2a]">500+</span>
<span className="text-xs text-[#122c2a]/60">Happy Homeowners</span>
</div>
</div>
</div>
</div>

<div className="relative lg:absolute lg:bottom-0 w-full z-40 bg-[#122c2a] flex flex-col lg:flex-row items-center justify-end">

<div className="relative lg:absolute bottom-0 left-0 w-full lg:w-[380px] h-[200px] lg:h-[240px] bg-[#8a9a86] lg:rounded-tr-[100px] flex flex-col justify-center px-8 lg:px-12 text-white overflow-hidden">
<div className="flex items-center gap-4 mb-2 z-10 relative">
<div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center">
<i className="w-6 h-6" data-lucide="sun" strokeWidth="1.5"></i>
</div>
<span className="text-xs tracking-[0.15em] font-medium uppercase opacity-80">Up to</span>
</div>
<div className="flex items-baseline gap-2 z-10 relative">
<span className="text-6xl lg:text-[80px] font-medium tracking-tighter leading-none">79%</span>
</div>
<span className="text-sm tracking-widest font-medium uppercase opacity-80 mt-2 z-10 relative">Heat Rejection</span>

<div className="absolute -right-20 -top-20 w-64 h-64 border border-white/10 rounded-full opacity-50 pointer-events-none"></div>
</div>

<div className="w-full lg:w-[calc(100%-380px)] py-8 lg:py-0 lg:h-[120px] flex flex-col lg:flex-row items-start lg:items-center justify-around px-8 lg:px-16 gap-8 lg:gap-0 text-white">
<div className="flex items-center gap-5">
<div className="w-10 h-10 border border-white/20 rounded-xl flex items-center justify-center bg-white/5">
<i className="w-5 h-5 text-white/90" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium tracking-tight">PROTECTS YOUR HOME</span>
<span className="text-xs text-white/60 mt-0.5">Blocks UV, reduces fading</span>
</div>
</div>
<div className="hidden lg:block w-[1px] h-12 bg-white/10"></div>
<div className="flex items-center gap-5">
<div className="w-10 h-10 border border-white/20 rounded-xl flex items-center justify-center bg-white/5">
<i className="w-5 h-5 text-white/90" data-lucide="lock" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium tracking-tight">ENHANCES PRIVACY</span>
<span className="text-xs text-white/60 mt-0.5">Daytime privacy, naturally</span>
</div>
</div>
<div className="hidden lg:block w-[1px] h-12 bg-white/10"></div>
<div className="flex items-center gap-5">
<div className="w-10 h-10 border border-white/20 rounded-xl flex items-center justify-center bg-white/5">
<i className="w-5 h-5 text-white/90" data-lucide="gem" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium tracking-tight">BUILT TO LAST</span>
<span className="text-xs text-white/60 mt-0.5">Durable films, lifetime value</span>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 lg:py-32 bg-white relative" id="benefits">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="text-center max-w-3xl mx-auto mb-20">
<span className="text-sm tracking-[0.2em] uppercase font-medium text-[#8a9a86] mb-4 block">The Advantage</span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-[#122c2a] mb-6">Why upgrade your glass?</h2>
<p className="text-lg text-[#122c2a]/70 font-light leading-relaxed">Modern window films offer invisible performance. Enhance your existing glass without replacing it, gaining significant benefits instantly.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">

<div className="flex flex-col group cursor-default">
<div className="w-14 h-14 bg-[#f4f2ee] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#122c2a] group-hover:text-white transition-colors duration-300">
<i className="w-6 h-6" data-lucide="thermometer-sun" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-[#122c2a] mb-3">Climate Control</h3>
<p className="text-lg text-[#122c2a]/60 font-light leading-relaxed">Reject solar heat in the summer and retain warmth in the winter. Regulate indoor temperatures effortlessly.</p>
</div>

<div className="flex flex-col group cursor-default">
<div className="w-14 h-14 bg-[#f4f2ee] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#122c2a] group-hover:text-white transition-colors duration-300">
<i className="w-6 h-6" data-lucide="eye-off" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-[#122c2a] mb-3">Enhanced Privacy</h3>
<p className="text-lg text-[#122c2a]/60 font-light leading-relaxed">Enjoy natural light while preventing outsiders from seeing in. Perfect for ground-floor rooms and street-facing windows.</p>
</div>

<div className="flex flex-col group cursor-default">
<div className="w-14 h-14 bg-[#f4f2ee] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#122c2a] group-hover:text-white transition-colors duration-300">
<i className="w-6 h-6" data-lucide="sun-dim" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-[#122c2a] mb-3">UV &amp; Fade Protection</h3>
<p className="text-lg text-[#122c2a]/60 font-light leading-relaxed">Block up to 99.9% of harmful UV rays, protecting your skin and preventing furniture, art, and floors from fading.</p>
</div>

<div className="flex flex-col group cursor-default">
<div className="w-14 h-14 bg-[#f4f2ee] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#122c2a] group-hover:text-white transition-colors duration-300">
<i className="w-6 h-6" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-[#122c2a] mb-3">Energy Efficiency</h3>
<p className="text-lg text-[#122c2a]/60 font-light leading-relaxed">Reduce the workload on your HVAC system. Lower your monthly energy bills while decreasing your carbon footprint.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#122c2a] relative overflow-hidden">
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1a3f3d] rounded-full blur-[120px] opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
<div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2">
<span className="text-sm tracking-[0.2em] uppercase font-medium text-[#8a9a86] mb-4 block">See the difference</span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-white mb-6">Cut the glare, keep the view.</h2>
<p className="text-lg text-white/70 font-light leading-relaxed mb-8">Unfiltered sunlight creates harsh glare on screens and causes eye strain. Our premium films filter the light perfectly, allowing you to enjoy your view comfortably at any time of day.</p>
<ul className="flex flex-col gap-4 text-white/80 font-light text-lg">
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#8a9a86]" data-lucide="check" strokeWidth="2"></i> Removes harsh television/monitor glare</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#8a9a86]" data-lucide="check" strokeWidth="2"></i> Preserves nighttime outward visibility</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#8a9a86]" data-lucide="check" strokeWidth="2"></i> Softens interior ambient light</li>
</ul>
</div>
<div className="w-full lg:w-1/2">

<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden group border border-white/10 shadow-2xl">

<img alt="Untinted Window" className="absolute inset-0 w-full h-full object-cover brightness-125 contrast-75 sepia-[.2]" src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white tracking-wide border border-white/10">Untinted</div>

<div className="absolute inset-0 w-full h-full w-[0%] group-hover:w-full transition-all duration-700 ease-in-out border-r-2 border-white/50 overflow-hidden">
<img alt="Tinted Window" className="absolute inset-0 min-w-[1000px] h-full object-cover object-left brightness-90 contrast-110 saturate-110" src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute top-4 left-4 bg-[#122c2a]/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white tracking-wide border border-[#122c2a]">Reflect Tinted</div>
</div>

<div className="absolute top-1/2 left-[10%] group-hover:left-[95%] -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-700 ease-in-out opacity-100 group-hover:opacity-0">
<i className="w-4 h-4 text-[#122c2a]" data-lucide="chevrons-left-right" strokeWidth="2"></i>
</div>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm font-light flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-1.5 rounded-full group-hover:opacity-0 transition-opacity">
<i className="w-4 h-4" data-lucide="mouse-pointer-2"></i> Hover to apply tint
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#f4f2ee]" id="services">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-[3/4] rounded-[40px] overflow-hidden">
<img alt="Modern living room" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>

<div className="absolute -bottom-6 -left-6 w-48 h-48 border-[1px] border-[#122c2a]/20 rounded-full z-0 pointer-events-none"></div>
</div>

<div className="flex flex-col z-10">
<span className="text-sm tracking-[0.2em] uppercase font-medium text-[#8a9a86] mb-4">Tailored Solutions</span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-[#122c2a] mb-8">Residential &amp;<br/>Commercial Film.</h2>

<div className="flex flex-col gap-8">
<div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#f4f2ee] rounded-bl-full -z-10 group-hover:bg-[#8a9a86]/10 transition-colors"></div>
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 bg-[#122c2a] text-white rounded-xl flex items-center justify-center">
<i className="w-5 h-5" data-lucide="home" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-[#122c2a]">Residential Tinting</h3>
</div>
<p className="text-[#122c2a]/70 font-light text-lg mb-4">Transform your living space. Protect your family from UV rays, reduce cooling costs, and add a layer of daytime privacy without sacrificing natural light.</p>
<a className="text-sm font-medium tracking-wide uppercase text-[#122c2a] flex items-center gap-2 group/link" href="#">
                                View Residential
                                <i className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
<div className="p-8 bg-transparent rounded-3xl border border-gray-300 hover:bg-white hover:border-gray-100 hover:shadow-md transition-all relative overflow-hidden group">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 bg-white border border-gray-200 text-[#122c2a] rounded-xl flex items-center justify-center group-hover:bg-[#122c2a] group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="building-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-[#122c2a]">Commercial Tinting</h3>
</div>
<p className="text-[#122c2a]/70 font-light text-lg mb-4">Improve tenant comfort, lower overhead costs, and elevate the exterior aesthetics of your building with high-performance solar and security films.</p>
<a className="text-sm font-medium tracking-wide uppercase text-[#122c2a] flex items-center gap-2 group/link" href="#">
                                View Commercial
                                <i className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-gray-200/60">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200/60">
<div className="flex flex-col items-center pt-8 md:pt-0">
<span className="text-6xl font-medium tracking-tighter text-[#122c2a] mb-2">99%</span>
<span className="text-sm tracking-widest font-medium uppercase text-[#8a9a86]">UV Rejection</span>
</div>
<div className="flex flex-col items-center pt-8 md:pt-0">
<span className="text-6xl font-medium tracking-tighter text-[#122c2a] mb-2">30%</span>
<span className="text-sm tracking-widest font-medium uppercase text-[#8a9a86]">Avg Energy Savings</span>
</div>
<div className="flex flex-col items-center pt-8 md:pt-0">
<span className="text-6xl font-medium tracking-tighter text-[#122c2a] mb-2">Lifetime</span>
<span className="text-sm tracking-widest font-medium uppercase text-[#8a9a86]">Residential Warranty</span>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#f4f2ee]">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
<span className="text-sm tracking-[0.2em] uppercase font-medium text-[#8a9a86] mb-4 block">How it works</span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-[#122c2a] mb-20">Simple, clean installation.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] bg-gradient-to-r from-transparent via-[#122c2a]/20 to-transparent z-0"></div>

<div className="flex flex-col items-center relative z-10">
<div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-3xl font-medium text-[#122c2a] border border-gray-200 mb-6 shadow-sm">1</div>
<h3 className="text-xl font-medium tracking-tight text-[#122c2a] mb-3">Consultation &amp; Quote</h3>
<p className="text-lg text-[#122c2a]/60 font-light max-w-xs mx-auto">We measure your glass, assess your needs, and provide film samples alongside a precise, no-obligation quote.</p>
</div>

<div className="flex flex-col items-center relative z-10">
<div className="w-24 h-24 bg-[#122c2a] rounded-full flex items-center justify-center text-3xl font-medium text-white shadow-lg mb-6 shadow-[#122c2a]/20">2</div>
<h3 className="text-xl font-medium tracking-tight text-[#122c2a] mb-3">Professional Prep</h3>
<p className="text-lg text-[#122c2a]/60 font-light max-w-xs mx-auto">Our certified technicians meticulously clean and prepare your glass surfaces to ensure flawless film adhesion.</p>
</div>

<div className="flex flex-col items-center relative z-10">
<div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-3xl font-medium text-[#122c2a] border border-gray-200 mb-6 shadow-sm">3</div>
<h3 className="text-xl font-medium tracking-tight text-[#122c2a] mb-3">Precision Install</h3>
<p className="text-lg text-[#122c2a]/60 font-light max-w-xs mx-auto">Film is applied seamlessly with zero mess left behind. You immediately enjoy the benefits of your new tinted glass.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="gallery">
<div className="max-w-[1600px] mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<span className="text-sm tracking-[0.2em] uppercase font-medium text-[#8a9a86] mb-4 block">Our Work</span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-[#122c2a]">Recent Installations.</h2>
</div>
<a className="text-sm font-medium tracking-wide uppercase text-[#122c2a] flex items-center gap-2 pb-2 border-b border-[#122c2a] w-max hover:text-[#8a9a86] hover:border-[#8a9a86] transition-colors" href="#">
                    View Full Gallery
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-[auto] gap-4 lg:gap-6 h-[800px] md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden relative group">
<img alt="Modern villa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
<span className="text-white text-lg font-medium tracking-wide">Modern Villa • Solar Control Film</span>
</div>
</div>

<div className="md:col-span-2 rounded-3xl overflow-hidden relative group">
<img alt="Office building" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-white text-base font-medium tracking-wide">Commercial • Anti-Glare</span>
</div>
</div>

<div className="rounded-3xl overflow-hidden relative group">
<img alt="Apartment interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>

<div className="rounded-3xl overflow-hidden relative group">
<img alt="Bathroom privacy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-white text-sm font-medium tracking-wide">Bathroom • Frost Film</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#122c2a] text-white overflow-hidden relative">
<div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fillOpacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
<div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-center mb-16">Trusted by homeowners.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-between">
<div>
<div className="flex text-[#d4c6b3] mb-6">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="0"></i>
</div>
<p className="text-lg font-light leading-relaxed text-white/90 mb-8">"The difference in temperature in our west-facing living room is unbelievable. The AC barely runs in the afternoon now, and we can actually leave the blinds open to enjoy the view."</p>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-sm font-medium">S.T</div>
<div className="flex flex-col">
<span className="font-medium tracking-tight">Sarah Thompson</span>
<span className="text-sm text-white/60 font-light">Residential Client</span>
</div>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-between">
<div>
<div className="flex text-[#d4c6b3] mb-6">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="0"></i>
</div>
<p className="text-lg font-light leading-relaxed text-white/90 mb-8">"Professional from start to finish. The installation crew was punctual, clean, and fast. The daytime privacy film gives us peace of mind without making the house dark."</p>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-sm font-medium">M.R</div>
<div className="flex flex-col">
<span className="font-medium tracking-tight">Mark Reynolds</span>
<span className="text-sm text-white/60 font-light">Homeowner</span>
</div>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-between">
<div>
<div className="flex text-[#d4c6b3] mb-6">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="0"></i>
</div>
<p className="text-lg font-light leading-relaxed text-white/90 mb-8">"We had our entire office building done. The glare reduction on monitors instantly improved productivity, and the building looks incredibly sleek from the outside now."</p>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-sm font-medium">E.C</div>
<div className="flex flex-col">
<span className="font-medium tracking-tight">Elena Costa</span>
<span className="text-sm text-white/60 font-light">Property Manager</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#f4f2ee]" id="faq">
<div className="max-w-[800px] mx-auto px-6 lg:px-12">
<div className="text-center mb-16">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-[#122c2a] mb-4">Common Questions</h2>
<p className="text-lg text-[#122c2a]/70 font-light">Everything you need to know about professional window tinting.</p>
</div>
<div className="flex flex-col gap-4">

<details className="bg-white rounded-2xl border border-gray-200 group overflow-hidden" open="">
<summary className="flex items-center justify-between p-6 cursor-pointer text-[#122c2a] font-medium text-lg select-none">
                        Will window tint make my house dark?
                        <span className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-open:bg-[#f4f2ee] transition-colors">
<i className="w-4 h-4 group-open:hidden" data-lucide="plus"></i>
<i className="w-4 h-4 hidden group-open:block" data-lucide="minus"></i>
</span>
</summary>
<div className="px-6 pb-6 text-lg text-[#122c2a]/70 font-light leading-relaxed">
                        Not necessarily. Modern architectural films come in various shades and technological compositions. Spectrally selective films allow high visible light transmission (keeping rooms bright) while specifically blocking heat-causing infrared and harmful UV rays.
                    </div>
</details>

<details className="bg-white rounded-2xl border border-gray-200 group overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-[#122c2a] font-medium text-lg select-none">
                        How long does the installation take?
                        <span className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-open:bg-[#f4f2ee] transition-colors">
<i className="w-4 h-4 group-open:hidden" data-lucide="plus"></i>
<i className="w-4 h-4 hidden group-open:block" data-lucide="minus"></i>
</span>
</summary>
<div className="px-6 pb-6 text-lg text-[#122c2a]/70 font-light leading-relaxed">
                        Most residential installations can be completed in a single day. The exact time depends on the number of windows and access difficulty. We work efficiently to minimize disruption to your routine.
                    </div>
</details>

<details className="bg-white rounded-2xl border border-gray-200 group overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-[#122c2a] font-medium text-lg select-none">
                        Can you tint double-pane (IGU) windows safely?
                        <span className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-open:bg-[#f4f2ee] transition-colors">
<i className="w-4 h-4 group-open:hidden" data-lucide="plus"></i>
<i className="w-4 h-4 hidden group-open:block" data-lucide="minus"></i>
</span>
</summary>
<div className="px-6 pb-6 text-lg text-[#122c2a]/70 font-light leading-relaxed">
                        Yes, absolutely. However, it requires selecting the correct type of film. Certain dark, high-absorption films can cause thermal stress on dual-pane glass. We only use specialized films designed and warrantied as safe for standard insulating glass units.
                    </div>
</details>

<details className="bg-white rounded-2xl border border-gray-200 group overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-[#122c2a] font-medium text-lg select-none">
                        How do I clean tinted windows?
                        <span className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-open:bg-[#f4f2ee] transition-colors">
<i className="w-4 h-4 group-open:hidden" data-lucide="plus"></i>
<i className="w-4 h-4 hidden group-open:block" data-lucide="minus"></i>
</span>
</summary>
<div className="px-6 pb-6 text-lg text-[#122c2a]/70 font-light leading-relaxed">
                        After the curing period (usually 30 days), you can clean them using normal, non-abrasive methods. We recommend using a soft microfiber cloth and a standard, ammonia-free glass cleaner or mild soapy water. Never use bristle brushes or abrasive pads.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-[#122c2a] text-white pt-24 pb-8 border-t-[8px] border-[#8a9a86]">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">

<div className="flex flex-col lg:flex-row items-center justify-between gap-12 pb-24 border-b border-white/10" id="quote">
<div className="max-w-2xl text-center lg:text-left">
<h2 className="text-5xl lg:text-6xl font-medium tracking-tight mb-6">Ready to upgrade<br/>your view?</h2>
<p className="text-xl text-white/70 font-light">Get a free, no-obligation consultation and estimate today.</p>
</div>

<form className="w-full max-w-md bg-white/5 p-8 rounded-3xl border border-white/10 flex flex-col gap-4">
<input className="w-full bg-transparent border-b border-white/30 px-2 py-3 text-lg text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors" placeholder="Your Name" type="text"/>
<input className="w-full bg-transparent border-b border-white/30 px-2 py-3 text-lg text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors" placeholder="Email Address" type="email"/>
<div className="flex items-center gap-3 mt-4">

<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#8a9a86]"></div>
</label>
<span className="text-sm font-light text-white/70">Commercial Property?</span>
</div>
<button className="mt-6 w-full bg-white text-[#122c2a] font-medium text-lg py-4 rounded-xl hover:bg-[#f4f2ee] transition-colors" type="submit">Request Estimate</button>
</form>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 py-16">
<div className="col-span-2 lg:col-span-2 flex flex-col gap-6">
<a className="flex items-center gap-2" href="#">
<div className="relative flex items-center justify-center w-8 h-8 border border-white">
<span className="text-base font-medium tracking-tight">R</span>
</div>
<span className="text-xl font-medium tracking-tight leading-none">REFLECT</span>
</a>
<p className="text-white/60 font-light text-sm max-w-xs leading-relaxed">Premium residential and commercial window tinting services providing comfort, privacy, and protection.</p>
<div className="flex gap-4 mt-2">
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#122c2a] transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#122c2a] transition-colors" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
</div>
</div>
<div className="flex flex-col gap-4">
<span className="font-medium tracking-wide text-sm uppercase text-white/50 mb-2">Services</span>
<a className="text-white/80 hover:text-white font-light text-sm transition-colors" href="#">Residential Tinting</a>
<a className="text-white/80 hover:text-white font-light text-sm transition-colors" href="#">Commercial Tinting</a>
<a className="text-white/80 hover:text-white font-light text-sm transition-colors" href="#">Security Films</a>
<a className="text-white/80 hover:text-white font-light text-sm transition-colors" href="#">Decorative Films</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-medium tracking-wide text-sm uppercase text-white/50 mb-2">Company</span>
<a className="text-white/80 hover:text-white font-light text-sm transition-colors" href="#about">About Us</a>
<a className="text-white/80 hover:text-white font-light text-sm transition-colors" href="#gallery">Our Work</a>
<a className="text-white/80 hover:text-white font-light text-sm transition-colors" href="#faq">FAQ</a>
<a className="text-white/80 hover:text-white font-light text-sm transition-colors" href="#">Contact</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-medium tracking-wide text-sm uppercase text-white/50 mb-2">Contact</span>
<span className="text-white/80 font-light text-sm">info@reflecttinting.com</span>
<span className="text-white/80 font-light text-sm">+1 (555) 123-4567</span>
<span className="text-white/80 font-light text-sm mt-4">123 Sunshield Blvd.<br/>Austin, TX 78701</span>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs font-light text-white/40">
<span>© 2024 Reflect Window Tinting. All rights reserved.</span>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
