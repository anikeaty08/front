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



        // Initialize Lucide Icons with specific stroke width
        lucide.createIcons({
            strokeWidth: 1.5
        });

        // Simple Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-[#F5F5F3]', 'text-black', 'border-b', 'border-black/10');
                navbar.classList.remove('mix-blend-difference', 'text-white');
                navbar.querySelectorAll('.border-white').forEach(el => el.classList.replace('border-white', 'border-black'));
            } else {
                navbar.classList.remove('bg-[#F5F5F3]', 'text-black', 'border-b', 'border-black/10');
                navbar.classList.add('mix-blend-difference', 'text-white');
                navbar.querySelectorAll('.border-black').forEach(el => el.classList.replace('border-black', 'border-white'));
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-40 px-6 py-6 md:px-12 flex justify-between items-start mix-blend-difference text-white transition-transform duration-300" id="navbar">
<div className="flex items-start gap-4">

<div className="w-10 h-10 bg-white relative flex-shrink-0">
<div className="absolute inset-0 border border-black transform -rotate-45 scale-150 origin-center opacity-30"></div>
<div className="absolute bottom-2 right-2 w-1 h-1 bg-black rounded-full"></div>
<div className="absolute w-full h-[1px] bg-black top-1/2 left-0 transform -rotate-45"></div>
</div>
<div className="hidden md:block">
<h1 className="text-xs tracking-[0.2em] font-medium uppercase leading-tight">Abyss<br/>Diving Club</h1>
</div>
</div>
<div className="hidden lg:flex gap-12 pt-1 text-[0.65rem] tracking-[0.2em] font-medium uppercase">
<a className="hover:opacity-50 transition-opacity" href="#experiences">Experiences</a>
<a className="hover:opacity-50 transition-opacity" href="#expeditions">Expeditions</a>
<a className="hover:opacity-50 transition-opacity" href="#membership">Membership</a>
<a className="hover:opacity-50 transition-opacity" href="#journal">Journal</a>
<a className="hover:opacity-50 transition-opacity" href="#about">About</a>
</div>
<div className="flex items-center gap-6 pt-1 text-[0.65rem] tracking-[0.2em] font-medium uppercase">
<a className="hidden md:block hover:opacity-50 transition-opacity" href="#login">Member Login</a>
<button aria-label="Menu" className="w-4 h-4 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">
<i className="w-2 h-2" data-lucide="circle"></i>
</button>
</div>
</nav>

<section className="relative min-h-screen w-full pt-32 pb-24 px-6 md:px-12 flex flex-col justify-center">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full relative z-10 w-full max-w-[1800px] mx-auto">

<div className="col-span-1 lg:col-span-5 flex flex-col justify-center relative z-20 mt-12 lg:mt-0">
<div className="text-[0.65rem] tracking-[0.2em] font-medium mb-16 lg:mb-24 flex items-center gap-4">
<span>01</span>
<span className="w-4 h-[1px] bg-black opacity-30"></span>
<span className="opacity-50">05</span>
</div>
<h2 className="text-6xl md:text-8xl font-medium tracking-tight uppercase leading-[0.95] mb-16">
                    Depth<br/>Beyond<br/>Ordinary
                </h2>
<div className="flex flex-col sm:flex-row items-start sm:items-end gap-8 mb-32 lg:mb-0">
<div className="relative pl-6">
<div className="absolute left-0 top-0 w-3 h-3 border-t border-l border-black"></div>
<p className="text-[0.65rem] tracking-[0.2em] uppercase font-medium max-w-[200px] leading-relaxed">
                            A global community for those who seek the extraordinary underwater.
                        </p>
</div>
<a className="group flex items-center gap-4 text-[0.65rem] tracking-[0.2em] uppercase font-medium pb-1 border-b border-black" href="#discover">
                        Discover More
                        <span className="transform group-hover:rotate-90 transition-transform duration-300">+</span>
</a>
</div>
</div>

<div className="col-span-1 lg:col-span-7 absolute inset-0 lg:relative lg:inset-auto h-[60vh] lg:h-[85vh] w-full z-0 lg:z-10 mt-24 lg:mt-0 opacity-40 lg:opacity-100 mix-blend-multiply lg:mix-blend-normal">

<div className="w-full h-full hero-clip bg-black overflow-hidden relative">
<img alt="Cave diver in cenote" className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-6 text-white z-20 hidden lg:flex">
<span className="text-[0.65rem] font-mono tracking-widest vertical-text transform rotate-180">23.4241° N</span>
<div className="w-[1px] h-16 bg-white opacity-30"></div>
<span className="text-[0.65rem] tracking-[0.3em] font-medium uppercase vertical-text transform rotate-180">Explore</span>
<div className="w-[1px] h-16 bg-white opacity-30"></div>
<span className="text-[0.65rem] font-mono tracking-widest vertical-text transform rotate-180">77.0928° E</span>
</div>
</div>
</div>
</div>


<div className="absolute bottom-0 left-0 w-full lg:w-[45%] bg-[#0A0A0A] text-white p-8 md:p-12 z-30 flex flex-col md:flex-row gap-8 items-start md:items-center">
<div className="w-24 h-24 overflow-hidden flex-shrink-0">
<img alt="Manta Ray" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<ul className="text-[0.65rem] tracking-[0.15em] font-medium uppercase space-y-4 w-full">
<li className="flex items-center gap-4"><span className="w-4 h-[1px] bg-white opacity-50"></span> Curated Dive Experiences</li>
<li className="flex items-center gap-4"><span className="w-4 h-[1px] bg-white opacity-50"></span> Worldwide Expeditions</li>
<li className="flex items-center gap-4"><span className="w-4 h-[1px] bg-white opacity-50"></span> Ocean Conservation</li>
<li className="flex items-center gap-4"><span className="w-4 h-[1px] bg-white opacity-50"></span> Expert Led Programs</li>
</ul>
</div>

<div className="absolute bottom-32 right-[25%] lg:right-[35%] z-30 bg-[#F5F5F3] py-4 pl-4 pr-12 hidden md:flex items-center gap-4">
<div className="w-6 h-6 bg-black text-white flex items-center justify-center text-xs font-medium">M</div>
<div className="flex flex-col">
<span className="text-[0.65rem] tracking-[0.2em] font-medium uppercase">Membership</span>
<span className="text-[0.55rem] tracking-widest uppercase opacity-50">By Invitation Only</span>
</div>
<div className="absolute bottom-2 left-4 right-4 h-[1px] bg-black"></div>
</div>

<div className="absolute bottom-12 right-12 z-30 hidden lg:flex items-center justify-center w-24 h-24">
<svg className="absolute inset-0 w-full h-full text-white animate-[spin_20s_linear_infinite]" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" opacity="0.5" r="48" stroke="currentColor" stroke-dasharray="4 6" strokeWidth="1"></circle>
</svg>
<i className="w-6 h-6 text-white relative z-10" data-lucide="arrow-up-right"></i>
</div>
</section>

<section className="bg-[#0A0A0A] text-[#F5F5F3] py-32 px-6 md:px-12 relative" id="about">
<div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
<div>
<h3 className="text-xs tracking-[0.3em] font-medium uppercase mb-8 text-gray-400">The Philosophy</h3>
<h2 className="text-5xl md:text-7xl font-medium tracking-tight uppercase leading-[1.05] mb-12">
                    We dive where<br/>light fades.
                </h2>
<div className="w-full h-[1px] bg-gray-800 mb-12"></div>
<p className="text-lg md:text-xl font-light leading-relaxed text-gray-300 max-w-xl">
                    Abyss is not just a club; it's a collective of purists. We seek the undocumented crevices of the world's oceans, prioritizing technical mastery and profound respect for the marine environment over casual tourism.
                </p>
</div>
<div className="relative h-[60vh] lg:h-[80vh] w-full overflow-hidden">
<img alt="Deep sea darkness" className="w-full h-full object-cover object-center grayscale opacity-80" src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
</div>
</div>
</section>

<section className="py-32 bg-[#F5F5F3] relative overflow-hidden" id="expeditions">
<div className="px-6 md:px-12 max-w-[1800px] mx-auto mb-16 flex justify-between items-end">
<div>
<h3 className="text-xs tracking-[0.3em] font-medium uppercase mb-4 text-gray-500">Upcoming Departures</h3>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight uppercase">Featured Expeditions</h2>
</div>
<a className="hidden md:flex items-center gap-2 text-xs tracking-widest uppercase font-medium border-b border-black pb-1 hover:pr-4 transition-all duration-300" href="#">
                View Calendar <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
</div>
<div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-8 px-6 md:px-12 pb-12" style={{scrollbarWidth: 'none'}}>

<div className="snap-center shrink-0 w-[85vw] md:w-[40vw] lg:w-[30vw] relative group cursor-pointer">
<div className="h-[60vh] w-full overflow-hidden relative bg-black">
<img alt="Ice Diving" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-white text-black px-3 py-1 text-[0.6rem] tracking-widest uppercase font-medium">Ice</div>
</div>
<div className="mt-6 flex justify-between items-start">
<div>
<h4 className="text-xl font-medium tracking-tight uppercase mb-2">Svalbard Sub-Zero</h4>
<p className="text-sm text-gray-600 font-mono">Arctic Ocean / 78° N</p>
</div>
<span className="text-xs tracking-widest font-medium">OCT '24</span>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[40vw] lg:w-[30vw] relative group cursor-pointer">
<div className="h-[60vh] w-full overflow-hidden relative bg-black">
<img alt="Wreck Diving" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute top-4 left-4 bg-white text-black px-3 py-1 text-[0.6rem] tracking-widest uppercase font-medium">Wreck</div>
</div>
<div className="mt-6 flex justify-between items-start">
<div>
<h4 className="text-xl font-medium tracking-tight uppercase mb-2">Operation Hailstone</h4>
<p className="text-sm text-gray-600 font-mono">Chuuk Lagoon / 7° N</p>
</div>
<span className="text-xs tracking-widest font-medium">FEB '25</span>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[40vw] lg:w-[30vw] relative group cursor-pointer">
<div className="h-[60vh] w-full overflow-hidden relative bg-black">
<img alt="Deep Wall" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1544551763-92ab472cad5d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white text-black px-3 py-1 text-[0.6rem] tracking-widest uppercase font-medium">Tech</div>
</div>
<div className="mt-6 flex justify-between items-start">
<div>
<h4 className="text-xl font-medium tracking-tight uppercase mb-2">Mariana Periphery</h4>
<p className="text-sm text-gray-600 font-mono">Pacific Ocean / 11° N</p>
</div>
<span className="text-xs tracking-widest font-medium">MAY '25</span>
</div>
</div>
</div>
</section>

<section className="border-y border-black bg-[#F5F5F3]">
<div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-black max-w-[1800px] mx-auto">
<div className="p-8 md:p-12 flex flex-col justify-between h-48 md:h-64 group hover:bg-[#0A0A0A] hover:text-white transition-colors duration-500">
<span className="text-[0.65rem] tracking-[0.2em] font-medium uppercase text-gray-500 group-hover:text-gray-400">Max Depth Logged</span>
<div className="text-4xl md:text-6xl font-mono tracking-tighter">184<span className="text-2xl">m</span></div>
</div>
<div className="p-8 md:p-12 flex flex-col justify-between h-48 md:h-64 group hover:bg-[#0A0A0A] hover:text-white transition-colors duration-500">
<span className="text-[0.65rem] tracking-[0.2em] font-medium uppercase text-gray-500 group-hover:text-gray-400">Active Members</span>
<div className="text-4xl md:text-6xl font-mono tracking-tighter">250</div>
</div>
<div className="p-8 md:p-12 flex flex-col justify-between h-48 md:h-64 group hover:bg-[#0A0A0A] hover:text-white transition-colors duration-500">
<span className="text-[0.65rem] tracking-[0.2em] font-medium uppercase text-gray-500 group-hover:text-gray-400">Expeditions / Year</span>
<div className="text-4xl md:text-6xl font-mono tracking-tighter">12</div>
</div>
<div className="p-8 md:p-12 flex flex-col justify-between h-48 md:h-64 group hover:bg-[#0A0A0A] hover:text-white transition-colors duration-500 relative overflow-hidden">
<span className="text-[0.65rem] tracking-[0.2em] font-medium uppercase text-gray-500 group-hover:text-gray-400 z-10">Status</span>
<div className="text-xl md:text-2xl tracking-tight uppercase font-medium z-10">Application<br/>Waitlist</div>
<div className="absolute bottom-0 right-0 w-16 h-16 bg-black group-hover:bg-white transition-colors duration-500 flex items-center justify-center">
<i className="w-6 h-6 text-white group-hover:text-black" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</section>

<section className="h-screen w-full relative bg-black flex items-center justify-center overflow-hidden group cursor-pointer">
<img alt="Underwater vista" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-1000" src="https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&amp;w=2500&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10 flex flex-col items-center text-white">
<div className="w-24 h-24 rounded-full border border-white/30 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:bg-white/10 backdrop-blur-sm">
<i className="w-8 h-8 ml-1 fill-white" data-lucide="play"></i>
</div>
<h2 className="text-4xl md:text-6xl tracking-tighter uppercase font-medium text-center">The Silent World</h2>
<p className="text-xs tracking-[0.3em] uppercase mt-6 opacity-70">Watch the 2023 Retrospective</p>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-[#F5F5F3] max-w-[1800px] mx-auto" id="journal">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight uppercase">Field Notes</h2>
<a className="text-xs tracking-[0.2em] uppercase font-medium border-b border-black pb-1 hover:opacity-50 transition-opacity" href="#">Read All Entries</a>
</div>
<div className="border-t border-black flex flex-col">

<a className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-black/20 hover:border-black transition-colors" href="#">
<div className="flex items-center gap-8 mb-4 md:mb-0 w-full md:w-1/4">
<span className="text-sm font-mono text-gray-500">04.12.24</span>
<span className="text-[0.65rem] tracking-widest uppercase font-medium bg-black text-white px-2 py-1">Gear</span>
</div>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight uppercase w-full md:w-1/2 group-hover:pl-4 transition-all duration-300">Evaluating Closed-Circuit Rebreathers in Sub-Zero Waters</h3>
<div className="hidden md:flex w-full md:w-1/4 justify-end">
<i className="w-6 h-6 transform group-hover:rotate-45 transition-transform" data-lucide="arrow-up-right"></i>
</div>
</a>

<a className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-black/20 hover:border-black transition-colors" href="#">
<div className="flex items-center gap-8 mb-4 md:mb-0 w-full md:w-1/4">
<span className="text-sm font-mono text-gray-500">03.28.24</span>
<span className="text-[0.65rem] tracking-widest uppercase font-medium border border-black px-2 py-1">Expedition</span>
</div>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight uppercase w-full md:w-1/2 group-hover:pl-4 transition-all duration-300">The Cenotes of the Yucatán: A Geological Map</h3>
<div className="hidden md:flex w-full md:w-1/4 justify-end">
<i className="w-6 h-6 transform group-hover:rotate-45 transition-transform" data-lucide="arrow-up-right"></i>
</div>
</a>

<a className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-black/20 hover:border-black transition-colors" href="#">
<div className="flex items-center gap-8 mb-4 md:mb-0 w-full md:w-1/4">
<span className="text-sm font-mono text-gray-500">02.15.24</span>
<span className="text-[0.65rem] tracking-widest uppercase font-medium border border-black px-2 py-1">Ecology</span>
</div>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight uppercase w-full md:w-1/2 group-hover:pl-4 transition-all duration-300">Documenting Coral Bleaching at 60 Meters</h3>
<div className="hidden md:flex w-full md:w-1/4 justify-end">
<i className="w-6 h-6 transform group-hover:rotate-45 transition-transform" data-lucide="arrow-up-right"></i>
</div>
</a>
</div>
</section>

<section className="py-32 bg-[#0A0A0A] text-white" id="membership">
<div className="max-w-[1800px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-16">
<div className="md:col-span-4 flex flex-col justify-between">
<div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight uppercase mb-8">The<br/>Initiation</h2>
<p className="text-lg text-gray-400 font-light leading-relaxed mb-8">
                        Membership to Abyss is strictly controlled to maintain safety standards and expedition quality. Candidates must demonstrate advanced technical certification and a logged history of extreme environments.
                    </p>
</div>
<div className="p-8 border border-gray-800 bg-[#111]">
<h4 className="text-xs tracking-[0.2em] uppercase font-medium text-gray-500 mb-6">Prerequisites</h4>
<ul className="space-y-4 font-mono text-sm text-gray-300">
<li className="flex justify-between items-center border-b border-gray-800 pb-2">
<span>Adv. Trimix Certification</span>
<i className="w-4 h-4 text-white" data-lucide="check"></i>
</li>
<li className="flex justify-between items-center border-b border-gray-800 pb-2">
<span>Cave/Wreck Penetration</span>
<i className="w-4 h-4 text-white" data-lucide="check"></i>
</li>
<li className="flex justify-between items-center border-b border-gray-800 pb-2">
<span>150+ Logged Technical Dives</span>
<i className="w-4 h-4 text-white" data-lucide="check"></i>
</li>
<li className="flex justify-between items-center pt-2">
<span>Current Medical Clearance</span>
<i className="w-4 h-4 text-white" data-lucide="check"></i>
</li>
</ul>
</div>
</div>
<div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">

<div className="bg-[#111] p-10 flex flex-col">
<div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center mb-12">
<span className="font-mono text-sm text-gray-400">01</span>
</div>
<h3 className="text-xl font-medium tracking-tight uppercase mb-4">Exclusive Charter Access</h3>
<p className="text-base text-gray-400 font-light">Priority booking on our custom-built technical diving vessels, equipped with full gas-blending facilities and hyperbaric chambers.</p>
</div>

<div className="bg-[#111] p-10 flex flex-col">
<div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center mb-12">
<span className="font-mono text-sm text-gray-400">02</span>
</div>
<h3 className="text-xl font-medium tracking-tight uppercase mb-4">Gear Procurement</h3>
<p className="text-base text-gray-400 font-light">Direct manufacturer access for prototype testing and significant reductions on top-tier technical and rebreather equipment.</p>
</div>

<div className="bg-[#111] p-10 flex flex-col">
<div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center mb-12">
<span className="font-mono text-sm text-gray-400">03</span>
</div>
<h3 className="text-xl font-medium tracking-tight uppercase mb-4">Scientific Partnership</h3>
<p className="text-base text-gray-400 font-light">Opportunities to participate in data-collection dives alongside leading marine biologists and oceanographers.</p>
</div>

<div className="bg-[#111] p-10 flex flex-col justify-center items-center text-center group cursor-pointer border border-gray-800 hover:bg-white hover:text-black transition-colors duration-500">
<h3 className="text-2xl font-medium tracking-tight uppercase mb-4">Apply Now</h3>
<span className="text-xs tracking-[0.2em] font-medium uppercase border-b border-current pb-1">Begin Process</span>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#F5F5F3] px-6 md:px-12">
<div className="max-w-[1800px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
<div className="col-span-2 row-span-2 h-[50vh] md:h-[80vh] bg-black overflow-hidden group">
<img alt="Diver looking up" className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1582967788606-a171c1080cb0?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-2 md:col-span-1 h-[25vh] md:h-[38vh] bg-black overflow-hidden group">
<img alt="Underwater rock formation" className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-2 md:col-span-1 h-[25vh] md:h-[38vh] bg-[#0A0A0A] p-8 flex flex-col justify-end">
<p className="text-white text-lg font-light italic leading-tight">"The surface is a boundary. We are interested in what lies beneath."</p>
</div>
<div className="col-span-1 h-[25vh] md:h-[38vh] bg-black overflow-hidden group">
<img alt="Equipment" className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="col-span-1 h-[25vh] md:h-[38vh] bg-black overflow-hidden group">
<img alt="Boat at sea" className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<footer className="bg-[#0A0A0A] text-white pt-32 pb-12 px-6 md:px-12 border-t border-gray-900 relative overflow-hidden">
<div className="max-w-[1800px] mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-32">
<div className="col-span-1 md:col-span-2">
<div className="w-12 h-12 bg-white relative flex-shrink-0 mb-8">
<div className="absolute inset-0 border border-black transform -rotate-45 scale-150 origin-center opacity-30"></div>
<div className="absolute w-full h-[1px] bg-black top-1/2 left-0 transform -rotate-45"></div>
</div>
<p className="text-base text-gray-400 font-light max-w-sm">
                        Dedicated to the exploration, preservation, and documentation of the deep aquatic frontier.
                    </p>
</div>
<div>
<h5 className="text-xs tracking-[0.2em] font-medium uppercase text-gray-600 mb-6">Directory</h5>
<ul className="space-y-4 text-sm font-medium tracking-wide uppercase">
<li><a className="hover:text-gray-400 transition-colors" href="#">Manifesto</a></li>
<li><a className="hover:text-gray-400 transition-colors" href="#">Expeditions</a></li>
<li><a className="hover:text-gray-400 transition-colors" href="#">Vessels</a></li>
<li><a className="hover:text-gray-400 transition-colors" href="#">Journal</a></li>
</ul>
</div>
<div>
<h5 className="text-xs tracking-[0.2em] font-medium uppercase text-gray-600 mb-6">Contact</h5>
<ul className="space-y-4 text-sm font-medium tracking-wide uppercase">
<li><a className="hover:text-gray-400 transition-colors" href="#">HQ Inquiries</a></li>
<li><a className="hover:text-gray-400 transition-colors" href="#">Press</a></li>
<li className="pt-4"><span className="font-mono text-gray-500 normal-case tracking-normal">coords: 41.3851° N, 2.1734° E</span></li>
</ul>
</div>
</div>

<div className="w-full border-t border-gray-800 pt-12 flex flex-col md:flex-row justify-between items-end gap-8">
<h1 className="text-[15vw] md:text-[10vw] leading-none font-medium tracking-tighter uppercase opacity-10 select-none">
                    Abyss
                </h1>
<div className="text-[0.65rem] tracking-widest uppercase text-gray-600 font-medium pb-4">
                    © 2024 Abyss Diving Club. All rights reserved.
                </div>
</div>
</div>
</footer>



    </>
  );
}
