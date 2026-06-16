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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="2IcJ39Gx68KiPG1qlgj8"></div>

</div></div>

<header className="relative z-30 max-w-6xl mx-auto px-6 py-6">
<div className="flex items-center justify-between">
<a className="font-head text-xl font-semibold tracking-tight" href="#">talentify</a>
<nav className="hidden md:flex items-center gap-8 text-sm text-[#C2C2C2]">
<a className="hover:text-white transition-colors" href="#">About</a>
<a className="hover:text-white transition-colors" href="#">Roles</a>
<a className="hover:text-white transition-colors" href="#">Hiring</a>
<a className="hover:text-white transition-colors" href="#">Blog</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</nav>
<a className="card-surface hover:bg-white/10 transition-colors text-sm font-medium px-4 py-2 rounded-[10px]" href="#">Grab template</a>
</div>
</header>

<section className="relative">
<div className="absolute inset-0 hero-glow pointer-events-none h-[700px]"></div>
<div className="relative max-w-6xl mx-auto px-6 pt-16 pb-12">
<div className="max-w-3xl">
<h1 className="font-head text-5xl sm:text-6xl font-bold leading-[1.1]">Your gateway to<br/>remote tech careers.</h1>
<div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-6 max-w-2xl">
<p className="text-base text-[#C2C2C2] leading-relaxed flex-1">We connect top tech talent with the world's most innovative remote-first companies. Find your dream role today.</p>
<div className="flex items-center gap-3 shrink-0">
<a className="bg-white text-[#1a1a1a] text-sm font-semibold px-5 py-3 rounded-[10px] hover:bg-white/90 transition-colors" href="#">Explore roles</a>
<a className="card-surface hover:bg-white/10 transition-colors text-sm font-semibold px-5 py-3 rounded-[10px]" href="#">Hire talent</a>
</div>
</div>
</div>
</div>

<div className="relative pb-20">
<div className="flex gap-5 overflow-x-auto no-scrollbar px-6 pb-2 max-w-[1400px] mx-auto">

<div className="card-surface rounded-2xl p-6 min-w-[340px] flex flex-col -ml-20 opacity-60">
<div className="flex items-center gap-3">
<img alt="" className="w-11 h-11 rounded-full object-cover" src="https://framerusercontent.com/images/887MzMxee5hKPb3UqFbznwT3mE.png"/>
<div><p className="text-sm font-semibold">Sarah Lin</p><p className="text-xs text-[#C2C2C2]">Frontend Engineer</p></div>
</div>
<p className="mt-5 text-sm text-[#C2C2C2] leading-relaxed flex-1">Talentify made my career switch effortless. The recruiters genuinely understood my goals.</p>
<div className="mt-6 flex items-end justify-between">
<div className="flex items-center gap-2"><img alt="" className="w-6 h-6 rounded-md" src="https://framerusercontent.com/images/0dqxsuENVV5R1GFVv5OQbOwg9U.png?width=96&amp;height=96"/><span className="text-xs text-[#C2C2C2]">Code Solutions</span></div>
<div className="text-right"><p className="font-mono text-2xl font-semibold">9/10</p><p className="text-[10px] text-[#C2C2C2] uppercase tracking-wide">Job Satisfaction</p></div>
</div>
</div>
<div className="card-surface rounded-2xl p-6 min-w-[340px] flex flex-col">
<div className="flex items-center gap-3">
<img alt="" className="w-11 h-11 rounded-full object-cover" src="https://framerusercontent.com/images/mOPGtHUJnxjuEm5tMrUHZ2HhA.png"/>
<div><p className="text-sm font-semibold">Marcus Reid</p><p className="text-xs text-[#C2C2C2]">Backend Developer</p></div>
</div>
<p className="mt-5 text-sm text-[#C2C2C2] leading-relaxed flex-1">I landed a fully remote role at a company I admire within just two weeks. Incredible support.</p>
<div className="mt-6 flex items-end justify-between">
<div className="flex items-center gap-2"><img alt="" className="w-6 h-6 rounded-md" src="https://framerusercontent.com/images/U1OmWmomsinwQEr1XsuBwDSwj8.png"/><span className="text-xs text-[#C2C2C2]">Abstract Studio</span></div>
<div className="text-right"><p className="font-mono text-2xl font-semibold">8/10</p><p className="text-[10px] text-[#C2C2C2] uppercase tracking-wide">Job Satisfaction</p></div>
</div>
</div>
<div className="card-surface rounded-2xl p-6 min-w-[340px] flex flex-col">
<div className="flex items-center gap-3">
<img alt="" className="w-11 h-11 rounded-full object-cover" src="https://framerusercontent.com/images/887MzMxee5hKPb3UqFbznwT3mE.png"/>
<div><p className="text-sm font-semibold">Jennifer Belle</p><p className="text-xs text-[#C2C2C2]">Product Designer</p></div>
</div>
<p className="mt-5 text-sm text-[#C2C2C2] leading-relaxed flex-1">The process felt personal from start to finish. They matched me with the perfect team culture.</p>
<div className="mt-6 flex items-end justify-between">
<div className="flex items-center gap-2"><img alt="" className="w-6 h-6 rounded-md" src="https://framerusercontent.com/images/0dqxsuENVV5R1GFVv5OQbOwg9U.png?width=96&amp;height=96"/><span className="text-xs text-[#C2C2C2]">Code Solutions</span></div>
<div className="text-right"><p className="font-mono text-2xl font-semibold">10/10</p><p className="text-[10px] text-[#C2C2C2] uppercase tracking-wide">Job Satisfaction</p></div>
</div>
</div>
<div className="card-surface rounded-2xl p-6 min-w-[340px] flex flex-col opacity-60 -mr-20">
<div className="flex items-center gap-3">
<img alt="" className="w-11 h-11 rounded-full object-cover" src="https://framerusercontent.com/images/mOPGtHUJnxjuEm5tMrUHZ2HhA.png"/>
<div><p className="text-sm font-semibold">Jake Mullock</p><p className="text-xs text-[#C2C2C2]">DevOps Engineer</p></div>
</div>
<p className="mt-5 text-sm text-[#C2C2C2] leading-relaxed flex-1">Best recruitment experience I've had. Transparent, fast, and truly remote-first.</p>
<div className="mt-6 flex items-end justify-between">
<div className="flex items-center gap-2"><img alt="" className="w-6 h-6 rounded-md" src="https://framerusercontent.com/images/U1OmWmomsinwQEr1XsuBwDSwj8.png"/><span className="text-xs text-[#C2C2C2]">Abstract Studio</span></div>
<div className="text-right"><p className="font-mono text-2xl font-semibold">9/10</p><p className="text-[10px] text-[#C2C2C2] uppercase tracking-wide">Job Satisfaction</p></div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-20">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
<div>
<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#365EFF] mb-4">Process</p>
<h2 className="font-head text-3xl sm:text-4xl font-bold leading-tight">Your path to the perfect<br/>remote tech job.</h2>
<p className="mt-4 text-base text-[#C2C2C2] max-w-md">A simple, transparent journey from search to placement, designed around you.</p>
</div>
<a className="bg-[#365EFF] text-white text-sm font-semibold px-5 py-3 rounded-[10px] hover:bg-[#365EFF]/90 transition-colors shrink-0" href="#">View open roles</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="card-surface rounded-2xl p-7">
<span className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full text-white" style={{background: 'linear-gradient(135deg,#365EFF 0%,#7989D9 100%)'}}>STEP 01</span>
<h3 className="font-head text-2xl font-bold mt-5">Browse remote jobs.</h3>
<p className="mt-3 text-sm text-[#C2C2C2] leading-relaxed">Explore curated openings from top remote-first tech companies, filtered to match your skills and ambitions.</p>
</div>
<div className="card-surface rounded-2xl p-7">
<span className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full text-white" style={{background: 'linear-gradient(135deg,#365EFF 0%,#7989D9 100%)'}}>STEP 02</span>
<h3 className="font-head text-2xl font-bold mt-5">Apply for role.</h3>
<p className="mt-3 text-sm text-[#C2C2C2] leading-relaxed">Submit your application in one click and let our recruiters guide you through interviews and offers.</p>
</div>
</div>
<div className="flex justify-end gap-3 mt-8">
<button className="w-11 h-11 rounded-full bg-[#365EFF] flex items-center justify-center hover:bg-[#365EFF]/90 transition-colors"><iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon></button>
<button className="w-11 h-11 rounded-full bg-[#365EFF] flex items-center justify-center hover:bg-[#365EFF]/90 transition-colors"><iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon></button>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#365EFF] mb-4">Recruiting</p>
<h2 className="font-head text-3xl sm:text-4xl font-bold leading-tight">Select from the best.</h2>
<p className="mt-4 text-base text-[#C2C2C2] max-w-md">We handle the entire hiring pipeline so you can focus on building exceptional teams.</p>
<a className="inline-block mt-6 bg-[#365EFF] text-white text-sm font-semibold px-5 py-3 rounded-[10px] hover:bg-[#365EFF]/90 transition-colors" href="#">Hire now</a>
<div className="mt-10 space-y-7">
<div><h4 className="font-head text-lg font-semibold">Role posting</h4><p className="text-sm text-[#C2C2C2] mt-1">Publish your openings to a global pool of vetted tech professionals.</p></div>
<div><h4 className="font-head text-lg font-semibold">Pre-screening interviews</h4><p className="text-sm text-[#C2C2C2] mt-1">We filter candidates so only the strongest reach your desk.</p></div>
<div><h4 className="font-head text-lg font-semibold">Onboarding support</h4><p className="text-sm text-[#C2C2C2] mt-1">Seamless transitions for new hires, fully remote-ready.</p></div>
<div><h4 className="font-head text-lg font-semibold">Diversify recruitment</h4><p className="text-sm text-[#C2C2C2] mt-1">Build inclusive teams with our diversity-first sourcing.</p></div>
</div>
</div>
<div className="rounded-2xl overflow-hidden card-surface">
<img alt="Recruiter at work" className="w-full h-full object-cover min-h-[400px]" src="https://framerusercontent.com/images/887MzMxee5hKPb3UqFbznwT3mE.png?scale-down-to=1024"/>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-20">
<div className="text-center mb-12">
<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#365EFF] mb-4">Featured Roles</p>
<h2 className="font-head text-3xl sm:text-4xl font-bold leading-tight">Find your next role.</h2>
<p className="mt-4 text-base text-[#C2C2C2]">Hand-picked openings from leading remote companies.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">

<div className="card-surface rounded-2xl p-6">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-full" src="https://framerusercontent.com/images/0dqxsuENVV5R1GFVv5OQbOwg9U.png?width=96&amp;height=96"/>
<span className="text-sm font-medium">Code Solutions</span>
</div>
<span className="text-[10px] font-semibold uppercase tracking-wide px-3 py-1 rounded-full bg-[#365EFF]/15 text-[#7989D9]">Featured</span>
</div>
<div className="border-t border-white/10 my-5"></div>
<h3 className="font-head text-xl font-semibold">Senior Frontend Engineer</h3>
<p className="text-sm text-[#C2C2C2] mt-1">Full-time</p>
<a className="block text-center mt-5 bg-[#365EFF] text-white text-sm font-semibold py-3 rounded-[10px] hover:bg-[#365EFF]/90 transition-colors" href="#">View details</a>
<p className="text-xs text-[#C2C2C2] mt-3">Posted on Jan 12, 2025</p>
</div>
<div className="card-surface rounded-2xl p-6">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-full" src="https://framerusercontent.com/images/U1OmWmomsinwQEr1XsuBwDSwj8.png"/>
<span className="text-sm font-medium">Abstract Studio</span>
</div>
<span className="text-[10px] font-semibold uppercase tracking-wide px-3 py-1 rounded-full bg-[#365EFF]/15 text-[#7989D9]">Featured</span>
</div>
<div className="border-t border-white/10 my-5"></div>
<h3 className="font-head text-xl font-semibold">Product Designer</h3>
<p className="text-sm text-[#C2C2C2] mt-1">Full-time</p>
<a className="block text-center mt-5 bg-[#365EFF] text-white text-sm font-semibold py-3 rounded-[10px] hover:bg-[#365EFF]/90 transition-colors" href="#">View details</a>
<p className="text-xs text-[#C2C2C2] mt-3">Posted on Jan 09, 2025</p>
</div>
<div className="card-surface rounded-2xl p-6">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-full" src="https://framerusercontent.com/images/0dqxsuENVV5R1GFVv5OQbOwg9U.png?width=96&amp;height=96"/>
<span className="text-sm font-medium">Code Solutions</span>
</div>
<span className="text-[10px] font-semibold uppercase tracking-wide px-3 py-1 rounded-full bg-[#365EFF]/15 text-[#7989D9]">Featured</span>
</div>
<div className="border-t border-white/10 my-5"></div>
<h3 className="font-head text-xl font-semibold">DevOps Engineer</h3>
<p className="text-sm text-[#C2C2C2] mt-1">Full-time</p>
<a className="block text-center mt-5 bg-[#365EFF] text-white text-sm font-semibold py-3 rounded-[10px] hover:bg-[#365EFF]/90 transition-colors" href="#">View details</a>
<p className="text-xs text-[#C2C2C2] mt-3">Posted on Jan 05, 2025</p>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-20">
<div className="text-center mb-12">
<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#365EFF] mb-4">Testimonials</p>
<h2 className="font-head text-3xl sm:text-4xl font-bold leading-tight">Securing talent's<br/>dream roles.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">

<div className="card-surface rounded-2xl p-7 flex flex-col">
<div className="flex items-center gap-3"><img alt="" className="w-11 h-11 rounded-full object-cover" src="https://framerusercontent.com/images/887MzMxee5hKPb3UqFbznwT3mE.png"/><div><p className="text-sm font-semibold">Sarah Lin</p><p className="text-xs text-[#C2C2C2]">Frontend Engineer</p></div></div>
<p className="mt-5 text-sm text-[#C2C2C2] leading-relaxed flex-1">Talentify made my career switch effortless. The recruiters genuinely understood my goals and matched me perfectly.</p>
<div className="mt-6 flex items-end justify-between"><div className="flex items-center gap-2"><img alt="" className="w-6 h-6 rounded-md" src="https://framerusercontent.com/images/0dqxsuENVV5R1GFVv5OQbOwg9U.png?width=96&amp;height=96"/><span className="text-xs text-[#C2C2C2]">Code Solutions</span></div><p className="font-mono text-2xl font-semibold">9/10</p></div>
</div>
<div className="card-surface rounded-2xl p-7 flex flex-col">
<div className="flex items-center gap-3"><img alt="" className="w-11 h-11 rounded-full object-cover" src="https://framerusercontent.com/images/mOPGtHUJnxjuEm5tMrUHZ2HhA.png"/><div><p className="text-sm font-semibold">Marcus Reid</p><p className="text-xs text-[#C2C2C2]">Backend Developer</p></div></div>
<p className="mt-5 text-sm text-[#C2C2C2] leading-relaxed flex-1">I landed a fully remote role at a company I admire within just two weeks. The whole process was incredible.</p>
<div className="mt-6 flex items-end justify-between"><div className="flex items-center gap-2"><img alt="" className="w-6 h-6 rounded-md" src="https://framerusercontent.com/images/U1OmWmomsinwQEr1XsuBwDSwj8.png"/><span className="text-xs text-[#C2C2C2]">Abstract Studio</span></div><p className="font-mono text-2xl font-semibold">10/10</p></div>
</div>
<div className="card-surface rounded-2xl p-7 flex flex-col">
<div className="flex items-center gap-3"><img alt="" className="w-11 h-11 rounded-full object-cover" src="https://framerusercontent.com/images/887MzMxee5hKPb3UqFbznwT3mE.png"/><div><p className="text-sm font-semibold">Jennifer Belle</p><p className="text-xs text-[#C2C2C2]">Product Designer</p></div></div>
<p className="mt-5 text-sm text-[#C2C2C2] leading-relaxed flex-1">The process felt personal from start to finish. They matched me with the perfect team culture and pay.</p>
<div className="mt-6 flex items-end justify-between"><div className="flex items-center gap-2"><img alt="" className="w-6 h-6 rounded-md" src="https://framerusercontent.com/images/0dqxsuENVV5R1GFVv5OQbOwg9U.png?width=96&amp;height=96"/><span className="text-xs text-[#C2C2C2]">Code Solutions</span></div><p className="font-mono text-2xl font-semibold">8/10</p></div>
</div>
<div className="card-surface rounded-2xl p-7 flex flex-col">
<div className="flex items-center gap-3"><img alt="" className="w-11 h-11 rounded-full object-cover" src="https://framerusercontent.com/images/mOPGtHUJnxjuEm5tMrUHZ2HhA.png"/><div><p className="text-sm font-semibold">Jake Mullock</p><p className="text-xs text-[#C2C2C2]">DevOps Engineer</p></div></div>
<p className="mt-5 text-sm text-[#C2C2C2] leading-relaxed flex-1">Best recruitment experience I've had. Transparent, fast, and truly remote-first from day one.</p>
<div className="mt-6 flex items-end justify-between"><div className="flex items-center gap-2"><img alt="" className="w-6 h-6 rounded-md" src="https://framerusercontent.com/images/U1OmWmomsinwQEr1XsuBwDSwj8.png"/><span className="text-xs text-[#C2C2C2]">Abstract Studio</span></div><p className="font-mono text-2xl font-semibold">9/10</p></div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-20">
<div className="text-center mb-12">
<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#365EFF] mb-4">Recruiters</p>
<h2 className="font-head text-3xl sm:text-4xl font-bold leading-tight">Meet your recruiter.</h2>
<p className="mt-4 text-base text-[#C2C2C2]">Experienced professionals dedicated to your success.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">

<div className="card-surface rounded-2xl p-7 text-center">
<img alt="" className="w-20 h-20 rounded-full object-cover mx-auto" src="https://framerusercontent.com/images/887MzMxee5hKPb3UqFbznwT3mE.png?scale-down-to=1024"/>
<h3 className="font-head text-xl font-semibold mt-4">Jennifer Belle</h3>
<p className="text-xs uppercase tracking-wide text-[#C2C2C2] mt-1">Based in London</p>
<div className="grid grid-cols-3 gap-2 mt-6 py-4 border-t border-b border-white/10">
<div><p className="font-mono text-lg font-semibold">10y</p><p className="text-[10px] text-[#C2C2C2] uppercase">Experience</p></div>
<div><p className="font-mono text-lg font-semibold">25</p><p className="text-[10px] text-[#C2C2C2] uppercase">Placements</p></div>
<div><p className="font-mono text-lg font-semibold">98%</p><p className="text-[10px] text-[#C2C2C2] uppercase">Satisfaction</p></div>
</div>
<a className="block text-center mt-5 bg-[#365EFF] text-white text-sm font-semibold py-3 rounded-[10px] hover:bg-[#365EFF]/90 transition-colors" href="#">View profile</a>
</div>
<div className="card-surface rounded-2xl p-7 text-center">
<img alt="" className="w-20 h-20 rounded-full object-cover mx-auto" src="https://framerusercontent.com/images/mOPGtHUJnxjuEm5tMrUHZ2HhA.png?scale-down-to=1024"/>
<h3 className="font-head text-xl font-semibold mt-4">Jake Mullock</h3>
<p className="text-xs uppercase tracking-wide text-[#C2C2C2] mt-1">Based in Berlin</p>
<div className="grid grid-cols-3 gap-2 mt-6 py-4 border-t border-b border-white/10">
<div><p className="font-mono text-lg font-semibold">8y</p><p className="text-[10px] text-[#C2C2C2] uppercase">Experience</p></div>
<div><p className="font-mono text-lg font-semibold">32</p><p className="text-[10px] text-[#C2C2C2] uppercase">Placements</p></div>
<div><p className="font-mono text-lg font-semibold">96%</p><p className="text-[10px] text-[#C2C2C2] uppercase">Satisfaction</p></div>
</div>
<a className="block text-center mt-5 bg-[#365EFF] text-white text-sm font-semibold py-3 rounded-[10px] hover:bg-[#365EFF]/90 transition-colors" href="#">View profile</a>
</div>
<div className="card-surface rounded-2xl p-7 text-center">
<img alt="" className="w-20 h-20 rounded-full object-cover mx-auto" src="https://framerusercontent.com/images/887MzMxee5hKPb3UqFbznwT3mE.png?scale-down-to=1024"/>
<h3 className="font-head text-xl font-semibold mt-4">Sarah Chen</h3>
<p className="text-xs uppercase tracking-wide text-[#C2C2C2] mt-1">Based in New York</p>
<div className="grid grid-cols-3 gap-2 mt-6 py-4 border-t border-b border-white/10">
<div><p className="font-mono text-lg font-semibold">12y</p><p className="text-[10px] text-[#C2C2C2] uppercase">Experience</p></div>
<div><p className="font-mono text-lg font-semibold">40</p><p className="text-[10px] text-[#C2C2C2] uppercase">Placements</p></div>
<div><p className="font-mono text-lg font-semibold">99%</p><p className="text-[10px] text-[#C2C2C2] uppercase">Satisfaction</p></div>
</div>
<a className="block text-center mt-5 bg-[#365EFF] text-white text-sm font-semibold py-3 rounded-[10px] hover:bg-[#365EFF]/90 transition-colors" href="#">View profile</a>
</div>
</div>
</section>

<footer className="max-w-6xl mx-auto px-6 pt-20 pb-10">
<div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
<p className="text-sm text-[#C2C2C2] max-w-xs">Recruitment agency's website template for the modern remote workforce.</p>
<div className="flex gap-16 text-sm">
<div className="space-y-3">
<a className="block text-[#C2C2C2] hover:text-white transition-colors" href="#">About</a>
<a className="block text-[#C2C2C2] hover:text-white transition-colors" href="#">Roles</a>
<a className="block text-[#C2C2C2] hover:text-white transition-colors" href="#">Hiring</a>
</div>
<div className="space-y-3">
<a className="block text-[#C2C2C2] hover:text-white transition-colors" href="#">Contact</a>
<a className="block text-[#C2C2C2] hover:text-white transition-colors" href="#">Blog</a>
<a className="block text-[#C2C2C2] hover:text-white transition-colors" href="#">Terms</a>
</div>
<div className="space-y-3">
<a className="block text-[#C2C2C2] hover:text-white transition-colors" href="#">X (Twitter)</a>
<a className="block text-[#C2C2C2] hover:text-white transition-colors" href="#">Instagram</a>
<a className="block text-[#C2C2C2] hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
</div>
</div>
<div className="font-head font-bold text-[18vw] md:text-[14vw] leading-none tracking-tight text-white/95 -mb-4">talentify</div>
<p className="text-xs text-[#C2C2C2] mt-6">A template by browser.supply.</p>
</footer>

    </>
  );
}
