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



        // Initialize Lucide icons with specific stroke width
        lucide.createIcons({
            strokeWidth: 1.5
        });

        // Simple Mobile Menu Toggle
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('shadow-sm', 'bg-[#f8f7f5]/95');
                navbar.classList.remove('bg-[#f8f7f5]/90', 'border-transparent');
            } else {
                navbar.classList.remove('shadow-sm', 'bg-[#f8f7f5]/95');
                navbar.classList.add('bg-[#f8f7f5]/90');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full top-0 z-50 bg-[#f8f7f5]/90 backdrop-blur-md border-b border-neutral-200/50 transition-all duration-300" id="navbar">
<div className="max-w-[100rem] mx-auto px-6 lg:px-12">
<div className="flex items-center justify-between h-24">

<a className="flex flex-col group" href="#">
<span className="text-xl tracking-[0.2em] font-medium text-neutral-900 uppercase">Lumen</span>
<span className="text-xs tracking-widest text-neutral-500 font-normal uppercase mt-0.5">Portrait Studio</span>
</a>

<div className="hidden lg:flex items-center space-x-10 text-sm tracking-wide font-medium">

<div className="relative group">
<button className="flex items-center gap-1.5 hover:text-neutral-500 transition-colors py-2 uppercase" id="services-btn">
                            Services
                            <i className="w-4 h-4 transition-transform group-hover:rotate-180" data-lucide="chevron-down"></i>
</button>

<div className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
<div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-neutral-100 p-2 flex flex-col">
<a className="px-4 py-3 hover:bg-neutral-50 rounded-xl transition-colors flex items-center justify-between group/item" href="#">
<span className="font-normal text-base text-neutral-800">Corporate Headshots</span>
<i className="w-4 h-4 text-neutral-300 group-hover/item:text-neutral-900 -translate-x-2 opacity-0 group-hover/item:translate-x-0 group-hover/item:opacity-100 transition-all" data-lucide="arrow-right"></i>
</a>
<a className="px-4 py-3 hover:bg-neutral-50 rounded-xl transition-colors flex items-center justify-between group/item" href="#">
<span className="font-normal text-base text-neutral-800">Team Portraits</span>
<i className="w-4 h-4 text-neutral-300 group-hover/item:text-neutral-900 -translate-x-2 opacity-0 group-hover/item:translate-x-0 group-hover/item:opacity-100 transition-all" data-lucide="arrow-right"></i>
</a>
<a className="px-4 py-3 hover:bg-neutral-50 rounded-xl transition-colors flex items-center justify-between group/item" href="#">
<span className="font-normal text-base text-neutral-800">Executive Branding</span>
<i className="w-4 h-4 text-neutral-300 group-hover/item:text-neutral-900 -translate-x-2 opacity-0 group-hover/item:translate-x-0 group-hover/item:opacity-100 transition-all" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
<a className="hover:text-neutral-500 transition-colors uppercase py-2" href="#">Experience</a>
<a className="hover:text-neutral-500 transition-colors uppercase py-2" href="#">Portfolio</a>
<a className="hover:text-neutral-500 transition-colors uppercase py-2" href="#">About</a>
<a className="hover:text-neutral-500 transition-colors uppercase py-2" href="#">Resources</a>
</div>

<div className="hidden lg:flex">
<a className="flex items-center gap-3 bg-black text-white px-6 py-3.5 rounded-full hover:bg-neutral-800 transition-all hover:scale-[1.02] active:scale-[0.98]" href="#">
<span className="text-sm font-medium tracking-wide uppercase">Book a Session</span>
<div className="bg-white text-black rounded-full p-1">
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
</a>
</div>

<button className="lg:hidden p-2 text-neutral-900" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="lg:hidden absolute top-full left-0 w-full bg-[#f8f7f5] border-b border-neutral-200 hidden shadow-xl" id="mobile-menu">
<div className="flex flex-col px-6 py-8 space-y-6 text-lg tracking-tight font-medium uppercase">
<a className="hover:text-neutral-500" href="#">Services</a>
<a className="hover:text-neutral-500" href="#">Experience</a>
<a className="hover:text-neutral-500" href="#">Portfolio</a>
<a className="hover:text-neutral-500" href="#">About</a>
<a className="hover:text-neutral-500" href="#">Resources</a>
<div className="pt-6 border-t border-neutral-200">
<a className="flex items-center justify-center gap-3 bg-black text-white px-6 py-4 rounded-full w-full" href="#">
<span className="text-sm font-medium tracking-wide">Book a Session</span>
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-0 lg:pt-24 min-h-screen flex flex-col justify-between overflow-hidden">
<div className="max-w-[100rem] mx-auto px-6 lg:px-12 w-full flex-grow flex flex-col lg:flex-row relative z-10 pt-12 lg:pt-20">

<div className="w-full lg:w-[45%] flex flex-col justify-center relative z-20 pb-20 lg:pb-0">

<div className="relative w-28 h-28 mb-12 hidden lg:flex items-center justify-center">
<svg className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]" viewbox="0 0 100 100">
<path d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" id="textPath"></path>
<text className="text-[9px] tracking-[0.2em] uppercase font-normal fill-neutral-800">
<textpath href="#textPath" startoffset="0%">• People Real • Impressions That Last •</textpath>
</text>
</svg>
<span className="text-2xl font-medium tracking-tight">L</span>
</div>

<h1 className="text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tighter font-medium text-neutral-900 max-w-2xl animate-fade-in">
                    People first.<br/>
                    Impressions<br/>
<span className="text-[#888888]">that last.</span>
</h1>

<div className="w-48 h-[1px] bg-neutral-300 mt-12 mb-10"></div>

<p className="text-lg md:text-xl text-neutral-600 font-normal leading-relaxed max-w-md mb-12">
                    Modern corporate headshots that show your team in their best light.
                </p>

<div className="flex flex-wrap items-center gap-8">
<a className="flex items-center gap-3 bg-black text-white px-7 py-4 rounded-full hover:bg-neutral-800 transition-all hover:scale-[1.02] active:scale-[0.98]" href="#">
<span className="text-sm font-medium tracking-wide uppercase">Book a Session</span>
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
<a className="flex items-center gap-3 group text-sm font-medium tracking-wide uppercase hover:text-neutral-500 transition-colors" href="#">
                        View Portfolio
                        <div className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center group-hover:border-neutral-500 transition-colors">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-900 group-hover:bg-neutral-500 transition-colors"></div>
</div>
</a>
</div>
</div>

<div className="w-full lg:w-[55%] relative h-[60vh] lg:h-auto mt-12 lg:mt-0">

<div className="absolute left-0 bottom-12 lg:bottom-24 w-[35%] h-[60%] lg:h-[70%] z-10 hidden lg:block">
<div className="w-full h-full rounded-t-[1000px] overflow-hidden bg-neutral-200">
<img alt="Architecture" className="w-full h-full object-cover filter grayscale opacity-80 mix-blend-multiply" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="absolute left-[20%] top-[10%] w-24 h-24 rounded-full bg-[#8b9187] z-20 hidden lg:block"></div>

<div className="absolute right-0 lg:right-12 bottom-0 w-full lg:w-[85%] h-full z-30">
<img alt="Professional Woman" className="w-full h-full object-cover object-top lg:hero-curve shadow-2xl shadow-neutral-900/5" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-12 right-12 grid grid-cols-4 gap-3 z-40 hidden lg:grid">

<div className="w-1 h-1 bg-black rounded-full"></div><div className="w-1 h-1 bg-black rounded-full"></div><div className="w-1 h-1 bg-black rounded-full"></div><div className="w-1 h-1 bg-black rounded-full"></div>
<div className="w-1 h-1 bg-black rounded-full"></div><div className="w-1 h-1 bg-black rounded-full"></div><div className="w-1 h-1 bg-black rounded-full"></div><div className="w-1 h-1 bg-black rounded-full"></div>
<div className="w-1 h-1 bg-black rounded-full"></div><div className="w-1 h-1 bg-black rounded-full"></div><div className="w-1 h-1 bg-black rounded-full"></div><div className="w-1 h-1 bg-black rounded-full"></div>
<div className="w-1 h-1 bg-black rounded-full"></div><div className="w-1 h-1 bg-black rounded-full"></div><div className="w-1 h-1 bg-black rounded-full"></div><div className="w-1 h-1 bg-black rounded-full"></div>
</div>
</div>
</div>

<div className="hidden xl:flex absolute top-0 right-0 h-[105%] w-24 bg-[#c25e36] z-40 flex-col items-center justify-between py-12">
<div className="flex-grow flex items-center justify-center">
<span className="text-white text-xs tracking-[0.2em] uppercase font-medium whitespace-nowrap transform -rotate-180" style={{writingMode: 'vertical-rl'}}>
                        Headshots for Forward-Thinking Teams
                    </span>
</div>
<span className="text-white text-xl font-medium tracking-tight mt-12">01</span>
</div>
</div>

<div className="w-full bg-[#f2f0eb] border-y border-neutral-200/60 relative z-40">
<div className="max-w-[100rem] mx-auto px-6 lg:px-12 pr-6 lg:pr-36"> 
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-300/50 py-8">

<div className="flex items-center gap-6 px-4 md:px-8 py-4 md:py-0">
<i className="w-8 h-8 text-neutral-400" data-lucide="users"></i>
<div>
<p className="text-3xl font-medium tracking-tight text-neutral-900 mb-1">300+</p>
<p className="text-base text-neutral-600 font-normal">Companies Photographed</p>
</div>
</div>

<div className="flex items-center gap-6 px-4 md:px-8 py-4 md:py-0">
<i className="w-8 h-8 text-neutral-400" data-lucide="star"></i>
<div>
<p className="text-3xl font-medium tracking-tight text-neutral-900 mb-1">15+</p>
<p className="text-base text-neutral-600 font-normal">Years of Experience</p>
</div>
</div>

<div className="flex items-center gap-6 px-4 md:px-8 py-4 md:py-0">
<i className="w-8 h-8 text-neutral-400" data-lucide="camera"></i>
<div>
<p className="text-3xl font-medium tracking-tight text-neutral-900 mb-1">10k+</p>
<p className="text-base text-neutral-600 font-normal">Headshots Delivered</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-neutral-100">
<div className="max-w-[100rem] mx-auto px-6 lg:px-12">
<p className="text-center text-sm font-medium tracking-widest uppercase text-neutral-400 mb-12">Trusted by industry leaders</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-neutral-900 rounded-sm transform rotate-45"></div>
<span className="text-xl font-medium tracking-tight">Acme Corp</span>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full border-[3px] border-neutral-900"></div>
<span className="text-xl font-medium tracking-tight">Globalize</span>
</div>
<div className="flex items-center gap-2">
<svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 2L2 22h20L12 2z"></path></svg>
<span className="text-xl font-medium tracking-tight">Pinnacle</span>
</div>
<div className="flex items-center gap-2">
<div className="flex space-x-1"><div className="w-2 h-6 bg-neutral-900"></div><div className="w-2 h-8 bg-neutral-900"></div><div className="w-2 h-4 bg-neutral-900"></div></div>
<span className="text-xl font-medium tracking-tight">Metrics</span>
</div>
<div className="flex items-center gap-2 hidden md:flex">
<div className="w-6 h-6 border-t-[3px] border-r-[3px] border-neutral-900 rounded-tr-lg"></div>
<span className="text-xl font-medium tracking-tight">Nexus</span>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#f8f7f5]">
<div className="max-w-[100rem] mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
<div className="max-w-2xl">
<h2 className="text-5xl lg:text-6xl tracking-tighter font-medium text-neutral-900 mb-6">Tailored to your professional needs.</h2>
<p className="text-xl text-neutral-600 font-normal leading-relaxed">We capture the essence of your brand through authentic, high-end photography designed for the modern corporate landscape.</p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase hover:text-[#c25e36] transition-colors border-b border-neutral-900 pb-1 hover:border-[#c25e36] self-start md:self-auto" href="#">
                    View all services <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative bg-white rounded-[2rem] p-10 overflow-hidden border border-neutral-200/60 hover:shadow-2xl hover:shadow-neutral-200 transition-all duration-500">
<div className="w-14 h-14 bg-neutral-50 rounded-2xl flex items-center justify-center mb-12 group-hover:bg-[#c25e36] group-hover:text-white transition-colors duration-300">
<i className="w-6 h-6" data-lucide="user"></i>
</div>
<h3 className="text-3xl font-medium tracking-tight text-neutral-900 mb-4">Corporate Headshots</h3>
<p className="text-lg text-neutral-600 font-normal leading-relaxed mb-12">Clean, consistent, and approachable. Ideal for LinkedIn, company directories, and personal branding.</p>
<div className="w-full h-[250px] rounded-2xl overflow-hidden relative">
<img alt="Corporate Headshot" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
</div>

<div className="group relative bg-white rounded-[2rem] p-10 overflow-hidden border border-neutral-200/60 hover:shadow-2xl hover:shadow-neutral-200 transition-all duration-500">
<div className="w-14 h-14 bg-neutral-50 rounded-2xl flex items-center justify-center mb-12 group-hover:bg-[#c25e36] group-hover:text-white transition-colors duration-300">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<h3 className="text-3xl font-medium tracking-tight text-neutral-900 mb-4">Team Portraits</h3>
<p className="text-lg text-neutral-600 font-normal leading-relaxed mb-12">Showcase your company culture. Group photos and candid office lifestyle imagery that tells your story.</p>
<div className="w-full h-[250px] rounded-2xl overflow-hidden relative">
<img alt="Team Portrait" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
</div>

<div className="group relative bg-white rounded-[2rem] p-10 overflow-hidden border border-neutral-200/60 hover:shadow-2xl hover:shadow-neutral-200 transition-all duration-500">
<div className="w-14 h-14 bg-neutral-50 rounded-2xl flex items-center justify-center mb-12 group-hover:bg-[#c25e36] group-hover:text-white transition-colors duration-300">
<i className="w-6 h-6" data-lucide="building"></i>
</div>
<h3 className="text-3xl font-medium tracking-tight text-neutral-900 mb-4">Executive Branding</h3>
<p className="text-lg text-neutral-600 font-normal leading-relaxed mb-12">Bespoke sessions for C-suite leaders. Editorial-style portraits for press, publications, and reports.</p>
<div className="w-full h-[250px] rounded-2xl overflow-hidden relative">
<img alt="Executive Portrait" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-[100rem] mx-auto px-6 lg:px-12">
<h2 className="text-sm font-medium tracking-widest uppercase text-neutral-400 mb-16 text-center">Featured Work</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="relative rounded-3xl overflow-hidden group lg:row-span-2">
<img alt="Portrait" className="w-full h-full object-cover filter brightness-[0.9] group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
<div>
<p className="text-white text-xl font-medium tracking-tight">Sarah Jenkins</p>
<p className="text-white/80 text-sm">CEO, TechFlow</p>
</div>
</div>
</div>

<div className="relative rounded-3xl overflow-hidden group">
<img alt="Portrait" className="w-full h-full object-cover filter brightness-[0.9] group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
<div>
<p className="text-white text-xl font-medium tracking-tight">David Chen</p>
<p className="text-white/80 text-sm">Design Director</p>
</div>
</div>
</div>

<div className="relative rounded-3xl overflow-hidden group">
<img alt="Portrait" className="w-full h-full object-cover filter brightness-[0.9] group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
<div>
<p className="text-white text-xl font-medium tracking-tight">Elena Rostova</p>
<p className="text-white/80 text-sm">Founder, Aura</p>
</div>
</div>
</div>

<div className="relative rounded-3xl overflow-hidden group md:col-span-2 lg:col-span-2">
<img alt="Team Portrait" className="w-full h-full object-cover object-top filter brightness-[0.9] group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
<div>
<p className="text-white text-xl font-medium tracking-tight">Nexus Executive Team</p>
<p className="text-white/80 text-sm">Group Session</p>
</div>
</div>
</div>
</div>
<div className="mt-16 flex justify-center">
<a className="px-8 py-4 rounded-full border border-neutral-300 hover:border-neutral-900 text-sm font-medium tracking-widest uppercase transition-colors" href="#">
                    Explore Full Gallery
                </a>
</div>
</div>
</section>

<section className="py-32 bg-[#111111] text-white">
<div className="max-w-[100rem] mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row md:items-center justify-between mb-24 gap-8 border-b border-neutral-800 pb-12">
<h2 className="text-5xl lg:text-6xl tracking-tighter font-medium max-w-xl">A seamless experience from start to finish.</h2>
<p className="text-xl text-neutral-400 font-normal max-w-sm">We've refined our process to respect your time while delivering exceptional results.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">

<div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-neutral-800 z-0"></div>

<div className="relative z-10">
<div className="w-24 h-24 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center mb-8 mx-auto md:mx-0">
<span className="text-3xl font-medium tracking-tight text-[#c25e36]">01</span>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-4 text-center md:text-left">Consultation</h3>
<p className="text-lg text-neutral-400 font-normal leading-relaxed text-center md:text-left">We discuss your brand identity, wardrobe options, and the specific vibe you want to convey in your final images.</p>
</div>

<div className="relative z-10">
<div className="w-24 h-24 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center mb-8 mx-auto md:mx-0">
<span className="text-3xl font-medium tracking-tight text-[#c25e36]">02</span>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-4 text-center md:text-left">The Shoot</h3>
<p className="text-lg text-neutral-400 font-normal leading-relaxed text-center md:text-left">A relaxed, guided session in our studio or at your location. We focus on posing, lighting, and bringing out your genuine expression.</p>
</div>

<div className="relative z-10">
<div className="w-24 h-24 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center mb-8 mx-auto md:mx-0">
<span className="text-3xl font-medium tracking-tight text-[#c25e36]">03</span>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-4 text-center md:text-left">Retouch &amp; Delivery</h3>
<p className="text-lg text-neutral-400 font-normal leading-relaxed text-center md:text-left">You select your favorites from a private gallery. We apply high-end, natural retouching and deliver in all required formats.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#f8f7f5]">
<div className="max-w-[100rem] mx-auto px-6 lg:px-12">
<div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

<div className="w-full lg:w-1/2 relative">
<div className="aspect-[4/5] rounded-3xl overflow-hidden relative z-10">
<img alt="Photography Studio" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-8 -right-8 w-64 h-64 border border-neutral-300 rounded-full z-0 hidden md:block"></div>

<div className="absolute -left-6 top-1/4 bg-white p-6 rounded-2xl shadow-xl border border-neutral-100 z-20 animate-fade-in hidden sm:block">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900">
<i className="w-6 h-6" data-lucide="award"></i>
</div>
<div>
<p className="text-sm font-medium tracking-wide uppercase text-neutral-500 mb-1">Established</p>
<p className="text-xl font-medium tracking-tight">2008</p>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-1/2">
<h2 className="text-sm font-medium tracking-widest uppercase text-neutral-400 mb-6">About Lumen</h2>
<h3 className="text-5xl lg:text-6xl tracking-tighter font-medium text-neutral-900 mb-8 leading-[1.1]">More than just a click. We craft confidence.</h3>
<p className="text-xl text-neutral-600 font-normal leading-relaxed mb-8">
                        Founded on the belief that everyone deserves to be seen in their best light, Lumen has spent over a decade redefining the corporate headshot. 
                    </p>
<p className="text-xl text-neutral-600 font-normal leading-relaxed mb-12">
                        We don't just take pictures; we direct, pose, and illuminate to create imagery that commands respect and opens doors. Our studio is a space designed for comfort, ensuring your authentic self shines through.
                    </p>
<div className="grid grid-cols-2 gap-8 border-t border-neutral-200 pt-12">
<div>
<p className="text-4xl font-medium tracking-tight text-neutral-900 mb-2">2,400+</p>
<p className="text-base text-neutral-500 font-normal">Individual Clients</p>
</div>
<div>
<p className="text-4xl font-medium tracking-tight text-neutral-900 mb-2">5.0</p>
<p className="text-base text-neutral-500 font-normal">Average Rating</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-[100rem] mx-auto px-6 lg:px-12">
<h2 className="text-5xl lg:text-6xl tracking-tighter font-medium text-neutral-900 mb-20 text-center">Don't just take our word for it.</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-[#f8f7f5] p-10 rounded-[2rem]">
<div className="flex items-center gap-1 mb-8 text-neutral-900">
<i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-neutral-700 font-normal leading-relaxed mb-8">"The team at Lumen made me feel incredibly comfortable. I usually hate having my picture taken, but the results were stunning. Exactly the professional edge I needed."</p>
<div className="flex items-center gap-4">
<img alt="Client" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-base font-medium tracking-tight text-neutral-900">Michael Roberts</p>
<p className="text-sm text-neutral-500 font-normal">Partner, Law Firm</p>
</div>
</div>
</div>

<div className="bg-[#f8f7f5] p-10 rounded-[2rem]">
<div className="flex items-center gap-1 mb-8 text-neutral-900">
<i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-neutral-700 font-normal leading-relaxed mb-8">"We booked Lumen for our entire 50-person startup. They managed the logistics flawlessly and delivered consistent, highly polished portraits that elevated our entire brand."</p>
<div className="flex items-center gap-4">
<img alt="Client" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-base font-medium tracking-tight text-neutral-900">Jessica Lin</p>
<p className="text-sm text-neutral-500 font-normal">CMO, Tech Innovations</p>
</div>
</div>
</div>

<div className="bg-[#f8f7f5] p-10 rounded-[2rem] md:col-span-2 lg:col-span-1">
<div className="flex items-center gap-1 mb-8 text-neutral-900">
<i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-neutral-700 font-normal leading-relaxed mb-8">"The attention to detail during the retouching phase was phenomenal. They kept me looking like myself, just on my absolute best day. Highly recommend for any executive."</p>
<div className="flex items-center gap-4">
<img alt="Client" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-base font-medium tracking-tight text-neutral-900">Thomas Vance</p>
<p className="text-sm text-neutral-500 font-normal">CEO, Financial Services</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#f8f7f5]">
<div className="max-w-4xl mx-auto px-6 lg:px-12">
<div className="text-center mb-16">
<h2 className="text-5xl lg:text-6xl tracking-tighter font-medium text-neutral-900 mb-6">Common Questions</h2>
<p className="text-xl text-neutral-600 font-normal">Everything you need to know before your session.</p>
</div>
<div className="space-y-4">

<details className="group bg-white rounded-2xl border border-neutral-200/60 overflow-hidden" open="">
<summary className="flex items-center justify-between cursor-pointer p-6 text-xl font-medium tracking-tight text-neutral-900 list-none [&amp;::-webkit-details-marker]:hidden">
                        What should I wear to my shoot?
                        <span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-neutral-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="p-6 pt-0 text-lg text-neutral-600 font-normal leading-relaxed">
                        We recommend solid colors that contrast well with your skin tone. Avoid busy patterns, loud logos, or overly trendy pieces. Bring a few options (e.g., a blazer, a clean sweater, a classic button-down) and we'll help you decide what photographs best on set.
                    </div>
</details>

<details className="group bg-white rounded-2xl border border-neutral-200/60 overflow-hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 text-xl font-medium tracking-tight text-neutral-900 list-none [&amp;::-webkit-details-marker]:hidden">
                        Do you provide hair and makeup services?
                        <span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-neutral-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="p-6 pt-0 text-lg text-neutral-600 font-normal leading-relaxed">
                        We don't provide in-house styling, but we highly recommend coming hair and makeup ready. We can provide a list of trusted local stylists upon request who can prepare you before your session.
                    </div>
</details>

<details className="group bg-white rounded-2xl border border-neutral-200/60 overflow-hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 text-xl font-medium tracking-tight text-neutral-900 list-none [&amp;::-webkit-details-marker]:hidden">
                        How long does it take to get the final images?
                        <span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-neutral-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="p-6 pt-0 text-lg text-neutral-600 font-normal leading-relaxed">
                        You will receive an unedited proofing gallery within 48 hours of your shoot. Once you make your selections, final retouched images are delivered digitally within 3-5 business days.
                    </div>
</details>

<details className="group bg-white rounded-2xl border border-neutral-200/60 overflow-hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 text-xl font-medium tracking-tight text-neutral-900 list-none [&amp;::-webkit-details-marker]:hidden">
                        Can you shoot at our office?
                        <span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-neutral-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="p-6 pt-0 text-lg text-neutral-600 font-normal leading-relaxed">
                        Yes, we offer on-location services for teams of 5 or more. We bring a mobile studio setup including lighting and backdrops to ensure consistent quality in your corporate environment.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 bg-neutral-900 relative overflow-hidden">

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#c25e36] rounded-full filter blur-[120px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
<div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
<h2 className="text-6xl lg:text-7xl tracking-tighter font-medium text-white mb-8">Ready to elevate your image?</h2>
<p className="text-xl text-neutral-400 font-normal mb-12 max-w-2xl mx-auto">Book your session today and let us capture the professional impression you want to make.</p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-6">
<a className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-neutral-900 px-8 py-5 rounded-full hover:bg-neutral-200 transition-all hover:scale-[1.02] active:scale-[0.98]" href="#">
<span className="text-sm font-medium tracking-wide uppercase">Book a Session</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto px-8 py-5 rounded-full border border-neutral-700 text-white text-sm font-medium tracking-widest uppercase hover:bg-neutral-800 transition-colors text-center" href="#">
                    Contact Us
                </a>
</div>
</div>
</section>

<footer className="bg-white pt-24 pb-12 border-t border-neutral-200">
<div className="max-w-[100rem] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">

<div className="lg:col-span-2">
<a className="flex flex-col mb-8" href="#">
<span className="text-2xl tracking-[0.2em] font-medium text-neutral-900 uppercase">Lumen</span>
<span className="text-xs tracking-widest text-neutral-500 font-normal uppercase mt-1">Portrait Studio</span>
</a>
<p className="text-lg text-neutral-600 font-normal max-w-sm mb-8">Modern corporate photography for forward-thinking professionals and teams.</p>

<div className="flex items-center w-full max-w-md border-b border-neutral-300 pb-2 focus-within:border-neutral-900 transition-colors">
<input className="w-full bg-transparent outline-none text-base text-neutral-900 placeholder:text-neutral-400" placeholder="Subscribe to our newsletter" type="email"/>
<button className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
<i className="w-4 h-4 text-neutral-900" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div>
<h4 className="text-sm font-medium tracking-widest uppercase text-neutral-900 mb-6">Services</h4>
<ul className="space-y-4">
<li><a className="text-lg text-neutral-500 hover:text-neutral-900 transition-colors font-normal" href="#">Corporate Headshots</a></li>
<li><a className="text-lg text-neutral-500 hover:text-neutral-900 transition-colors font-normal" href="#">Team Portraits</a></li>
<li><a className="text-lg text-neutral-500 hover:text-neutral-900 transition-colors font-normal" href="#">Executive Branding</a></li>
<li><a className="text-lg text-neutral-500 hover:text-neutral-900 transition-colors font-normal" href="#">Event Coverage</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium tracking-widest uppercase text-neutral-900 mb-6">Company</h4>
<ul className="space-y-4">
<li><a className="text-lg text-neutral-500 hover:text-neutral-900 transition-colors font-normal" href="#">About Us</a></li>
<li><a className="text-lg text-neutral-500 hover:text-neutral-900 transition-colors font-normal" href="#">Portfolio</a></li>
<li><a className="text-lg text-neutral-500 hover:text-neutral-900 transition-colors font-normal" href="#">The Process</a></li>
<li><a className="text-lg text-neutral-500 hover:text-neutral-900 transition-colors font-normal" href="#">Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium tracking-widest uppercase text-neutral-900 mb-6">Contact</h4>
<ul className="space-y-4">
<li className="text-lg text-neutral-500 font-normal">hello@lumenstudio.com</li>
<li className="text-lg text-neutral-500 font-normal">+1 (555) 123-4567</li>
<li className="text-lg text-neutral-500 font-normal mt-6 pt-6 border-t border-neutral-100">
                            123 Photography Ln.<br/>New York, NY 10001
                        </li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-neutral-200">
<p className="text-sm text-neutral-400 font-normal mb-4 md:mb-0">© 2024 Lumen Portrait Studio. All rights reserved.</p>
<div className="flex items-center space-x-6">
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
