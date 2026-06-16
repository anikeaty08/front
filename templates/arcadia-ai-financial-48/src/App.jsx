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



tailwind.config = {
theme: {
extend: {
colors: {
zinc: {
50: '#fafafa',
100: '#f4f4f5',
200: '#e4e4e7',
300: '#d4d4d8',
400: '#a1a1aa',
500: '#71717a',
600: '#52525b',
700: '#3f3f46',
800: '#27272a',
900: '#18181b',
950: '#09090b',
}
},
spacing: {
'128': '32rem',
'144': '36rem',
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
normal: '0',
wide: '0.02em',
wider: '0.04em',
widest: '0.1em',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        let menuOpen = false;

        mobileMenuBtn.addEventListener('click', () => {
            menuOpen = !menuOpen;
            if (menuOpen) {
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('flex');
                mobileMenuBtn.innerHTML = '<i data-lucide="x" stroke-width="1.5"></i>';
                document.body.style.overflow = 'hidden';
            } else {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
                mobileMenuBtn.innerHTML = '<i data-lucide="menu" stroke-width="1.5"></i>';
                document.body.style.overflow = '';
            }
            lucide.createIcons(); // Re-initialize icon
        });

        // Close menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
                mobileMenuBtn.innerHTML = '<i data-lucide="menu" stroke-width="1.5"></i>';
                document.body.style.overflow = '';
                menuOpen = false;
                lucide.createIcons();
            });
        });

        // Workflow Tabs Logic
        const tabs = document.querySelectorAll('.workflow-tab');
        const contents = document.querySelectorAll('.workflow-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Reset all tabs
                tabs.forEach(t => {
                    t.classList.remove('border-zinc-950', 'bg-white', 'shadow-[4px_4px_0px_0px_rgba(9,9,11,1)]', 'active');
                    t.classList.add('border-transparent', 'opacity-60');
                    t.querySelector('.hidden-desc').classList.add('hidden');
                });

                // Set active tab
                tab.classList.add('border-zinc-950', 'bg-white', 'shadow-[4px_4px_0px_0px_rgba(9,9,11,1)]', 'active');
                tab.classList.remove('border-transparent', 'opacity-60');
                tab.querySelector('.hidden-desc').classList.remove('hidden');

                // Switch content
                const targetId = tab.getAttribute('data-target');
                contents.forEach(content => {
                    if (content.id === `${targetId}-content`) {
                        content.classList.remove('opacity-0', 'pointer-events-none');
                        content.classList.add('opacity-100');
                    } else {
                        content.classList.add('opacity-0', 'pointer-events-none');
                        content.classList.remove('opacity-100');
                    }
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="max-w-[1920px] mx-auto w-full relative border-x border-zinc-200 flex flex-col flex-grow bg-white">

<div className="absolute inset-0 pointer-events-none z-0 flex justify-evenly opacity-30">
<div className="w-px h-full bg-zinc-200"></div>
<div className="w-px h-full bg-zinc-200 hidden lg:block"></div>
<div className="w-px h-full bg-zinc-200 hidden lg:block"></div>
</div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200 grid grid-cols-12 relative">
<div className="grid-dot -bottom-[1.5px] -left-[1.5px]"></div>
<div className="grid-dot -bottom-[1.5px] -right-[1.5px]"></div>

<div className="col-span-6 lg:col-span-2 border-r border-zinc-200 flex items-center px-6 py-4 lg:py-0">
<a className="flex items-center gap-3 group" href="#">
<svg className="text-zinc-950 group-hover:text-zinc-600 transition-colors" fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 22H6.5L12 11L17.5 22H22L12 2Z" fill="currentColor"></path>
</svg>
<span className="text-xs font-semibold tracking-widest uppercase mt-0.5">Arcadia</span>
</a>
</div>

<div className="col-span-6 lg:hidden flex justify-end items-center px-6">
<button className="p-2 text-zinc-950" id="mobile-menu-btn">
<i data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>

<div className="hidden lg:flex col-span-7 items-center justify-center gap-12 text-xs font-semibold tracking-wider uppercase text-zinc-600">
<a className="hover:text-zinc-950 transition-colors py-6" href="#product">Product</a>
<a className="hover:text-zinc-950 transition-colors py-6" href="#solutions">Solutions</a>
<a className="hover:text-zinc-950 transition-colors py-6" href="#research">Research</a>
<a className="hover:text-zinc-950 transition-colors py-6" href="#company">Company</a>
<a className="hover:text-zinc-950 transition-colors py-6" href="#careers">Careers</a>
</div>

<div className="hidden lg:flex col-span-3 border-l border-zinc-200">
<div className="flex-1 flex items-center justify-center border-r border-zinc-200 relative group cursor-pointer">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-950 absolute left-6 group-hover:scale-150 transition-transform"></div>
<span className="text-xs font-semibold tracking-wider uppercase text-zinc-600 group-hover:text-zinc-950 transition-colors">Client Login</span>
</div>
<button className="flex-1 bg-zinc-950 text-white flex items-center justify-between px-6 hover:bg-zinc-800 transition-colors group">
<span className="text-xs font-semibold tracking-wider uppercase">Request Access</span>
<i className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<div className="hidden fixed inset-0 bg-white z-40 pt-24 px-6 flex-col gap-6" id="mobile-menu">
<a className="text-2xl font-medium tracking-tight border-b border-zinc-100 pb-4" href="#product">Product</a>
<a className="text-2xl font-medium tracking-tight border-b border-zinc-100 pb-4" href="#solutions">Solutions</a>
<a className="text-2xl font-medium tracking-tight border-b border-zinc-100 pb-4" href="#research">Research</a>
<a className="text-2xl font-medium tracking-tight border-b border-zinc-100 pb-4" href="#company">Company</a>
<a className="text-2xl font-medium tracking-tight border-b border-zinc-100 pb-4" href="#careers">Careers</a>
<div className="mt-8 flex flex-col gap-4">
<button className="w-full py-4 border border-zinc-200 text-xs font-semibold tracking-wider uppercase">Client Login</button>
<button className="w-full py-4 bg-zinc-950 text-white text-xs font-semibold tracking-wider uppercase">Request Access</button>
</div>
</div>

<header className="grid grid-cols-12 border-b border-zinc-200 relative z-10 bg-white">

<div className="col-span-12 xl:col-span-5 border-r border-zinc-200 p-8 lg:p-16 xl:p-20 flex flex-col justify-center relative min-h-[70vh]">
<div className="grid-dot -right-[1.5px] top-1/3"></div>
<div className="flex items-center gap-3 mb-10">
<div className="w-2 h-2 bg-zinc-950"></div>
<span className="text-xs font-semibold tracking-widest uppercase text-zinc-500">AI For Capital Markets</span>
</div>
<h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] leading-[1.05] font-medium tracking-tighter mb-8">
<span className="text-zinc-950 block">Autonomous</span>
<span className="text-zinc-950 block italic pr-4">AI Analyst.</span>
<span className="text-zinc-400 block mt-2">Built for Investment</span>
<span className="text-zinc-400 block">Banks.</span>
</h1>
<p className="text-lg lg:text-xl text-zinc-500 max-w-md leading-relaxed mb-12">
                    Arcadia is the autonomous AI analyst that researches, models and delivers decision-ready intelligence—so your team can focus on what moves markets.
                </p>
<div className="mt-auto">
<button className="bg-zinc-950 text-white flex items-center gap-8 px-8 py-5 hover:bg-zinc-800 transition-all active:scale-95 group w-fit">
<span className="text-xs font-semibold tracking-wider uppercase">See Arcadia In Action</span>
<i className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="col-span-12 xl:col-span-5 border-r border-zinc-200 relative hidden xl:flex items-center justify-center bg-zinc-50/30 overflow-hidden">

<div className="absolute left-12 top-0 bottom-0 w-px bg-zinc-200 z-10 flex flex-col justify-between py-24">
<div className="w-2 h-2 rounded-full bg-zinc-950 -ml-[3.5px]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-400 -ml-[2.5px] opacity-50"></div>
</div>

<div className="absolute left-16 top-1/4 flex flex-col gap-16 z-20">
<div className="flex flex-col gap-1">
<span className="text-xs font-medium text-zinc-950">01 /</span>
<span className="text-[10px] font-semibold tracking-widest uppercase text-zinc-500">Research</span>
</div>
<div className="flex flex-col gap-1 opacity-40">
<span className="text-xs font-medium text-zinc-950">02 /</span>
<span className="text-[10px] font-semibold tracking-widest uppercase text-zinc-500">Model</span>
</div>
<div className="flex flex-col gap-1 opacity-40">
<span className="text-xs font-medium text-zinc-950">03 /</span>
<span className="text-[10px] font-semibold tracking-widest uppercase text-zinc-500">Synthesize</span>
</div>
<div className="flex flex-col gap-1 opacity-40">
<span className="text-xs font-medium text-zinc-950">04 /</span>
<span className="text-[10px] font-semibold tracking-widest uppercase text-zinc-500">Deliver</span>
</div>
</div>

<div className="relative w-[140%] h-[140%] -ml-[10%] flex items-center justify-center">

<img alt="Abstract AI Visualization" className="w-full h-full object-cover object-center glass-blend opacity-90 scale-110" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.8)_100%)] z-10 pointer-events-none"></div>
</div>

<div className="col-span-12 xl:col-span-2 hidden xl:flex flex-col bg-white z-20">

<div className="flex-1 border-b border-zinc-200 p-8 flex flex-col relative group">
<div className="grid-dot -bottom-[1.5px] -left-[1.5px]"></div>
<div className="flex justify-between items-center mb-6">
<span className="text-[10px] font-semibold tracking-widest uppercase text-zinc-500">Data Sources</span>
<i className="w-3 h-3 text-zinc-400" data-lucide="plus" strokeWidth="1.5"></i>
</div>
<div className="mt-auto">
<div className="text-3xl font-medium tracking-tight text-zinc-950 mb-2">250+</div>
<div className="w-full h-px bg-zinc-200 mb-2"></div>
<span className="text-[10px] font-semibold tracking-widest uppercase text-zinc-400">Real-Time Feeds</span>
</div>
<div className="absolute right-8 top-1/2 w-1.5 h-1.5 rounded-full bg-zinc-950 group-hover:scale-150 transition-transform"></div>
</div>

<div className="flex-1 border-b border-zinc-200 p-8 flex flex-col relative">
<div className="grid-dot -bottom-[1.5px] -left-[1.5px]"></div>
<div className="mt-auto w-full">
<span className="text-[10px] font-semibold tracking-widest uppercase text-zinc-500 mb-4 block">Coverage</span>
<ul className="flex flex-col gap-2 text-xs font-medium text-zinc-700 w-full relative">
<li className="flex justify-between">Markets</li>
<li className="flex justify-between">Sectors</li>
<li className="flex justify-between">Companies</li>
<li className="flex justify-between">Macro <i className="w-3 h-3 text-zinc-400 absolute right-0 bottom-0.5" data-lucide="plus" strokeWidth="1.5"></i></li>
</ul>
</div>
</div>

<div className="flex-1 p-8 flex flex-col relative">
<div className="mt-auto">
<span className="text-[10px] font-semibold tracking-widest uppercase text-zinc-500 mb-2 block">Trusted By</span>
<div className="text-3xl font-medium tracking-tight text-zinc-950 mb-2">Top 10</div>
<span className="text-[10px] font-semibold tracking-widest uppercase text-zinc-400">Global Investment Banks</span>
</div>
</div>
</div>
</header>

<div className="grid grid-cols-1 lg:grid-cols-5 border-b border-zinc-200 bg-white relative z-20">

<div className="bg-zinc-950 text-white p-8 lg:p-12 flex flex-col justify-between border-r border-zinc-900 min-h-[200px]">
<div className="flex justify-between items-center">
<span className="text-[10px] font-semibold tracking-widest uppercase text-zinc-400">Product Overview</span>
<i className="w-3 h-3 text-zinc-600" data-lucide="plus" strokeWidth="1.5"></i>
</div>

<div className="w-full flex items-center gap-2 mt-8">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div>
<div className="h-px bg-zinc-800 flex-1"></div>
<div className="w-1 h-3 bg-zinc-600"></div>
<div className="h-px bg-zinc-800 flex-1"></div>
<div className="w-1 h-3 bg-zinc-600"></div>
</div>
</div>

<div className="p-8 lg:p-10 flex flex-col justify-between border-r border-zinc-200 border-b lg:border-b-0 min-h-[200px] group hover:bg-zinc-50 transition-colors">
<i className="w-5 h-5 text-zinc-400 mb-8" data-lucide="clock" strokeWidth="1.5"></i>
<div>
<div className="text-4xl font-medium tracking-tight text-zinc-950 mb-2">90%+</div>
<p className="text-sm text-zinc-500 leading-tight">Time saved on<br/>research &amp; modeling</p>
</div>
</div>

<div className="p-8 lg:p-10 flex flex-col justify-between border-r border-zinc-200 border-b lg:border-b-0 min-h-[200px] group hover:bg-zinc-50 transition-colors">
<i className="w-5 h-5 text-zinc-400 mb-8" data-lucide="target" strokeWidth="1.5"></i>
<div>
<div className="text-4xl font-medium tracking-tight text-zinc-950 mb-2">3x</div>
<p className="text-sm text-zinc-500 leading-tight">More insights<br/>delivered</p>
</div>
</div>

<div className="p-8 lg:p-10 flex flex-col justify-between border-r border-zinc-200 border-b lg:border-b-0 min-h-[200px] group hover:bg-zinc-50 transition-colors">
<i className="w-5 h-5 text-zinc-400 mb-8" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
<div>
<div className="text-4xl font-medium tracking-tight text-zinc-950 mb-2">Real-time</div>
<p className="text-sm text-zinc-500 leading-tight">Intelligence across<br/>global markets</p>
</div>
</div>

<div className="p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden min-h-[200px] group hover:bg-zinc-50 transition-colors">
<i className="w-5 h-5 text-zinc-400 mb-8 relative z-10" data-lucide="shield" strokeWidth="1.5"></i>
<div className="relative z-10">
<div className="text-xl font-medium tracking-tight text-zinc-950 mb-3">Enterprise-grade</div>
<p className="text-sm text-zinc-500 leading-tight">Security, compliance &amp;<br/>auditability built-in</p>
</div>

<div className="absolute -right-24 -bottom-24 w-64 h-64 opacity-20 pointer-events-none transition-transform group-hover:scale-110 duration-700">
<svg fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" r="49" stroke="currentColor" strokeWidth="0.5"></circle>
<circle cx="50" cy="50" r="39" stroke="currentColor" strokeWidth="0.5"></circle>
<circle cx="50" cy="50" r="29" stroke="currentColor" strokeWidth="0.5"></circle>
<circle cx="50" cy="50" r="19" stroke="currentColor" strokeWidth="0.5"></circle>
<circle cx="50" cy="50" r="9" stroke="currentColor" strokeWidth="0.5"></circle>
<circle cx="50" cy="50" fill="currentColor" r="2"></circle>
</svg>
</div>
</div>
</div>

<section className="bg-zinc-950 text-white border-b border-zinc-900 relative" id="problem">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
<div className="grid grid-cols-12 relative z-10">
<div className="col-span-12 lg:col-span-8 lg:col-start-3 py-32 px-6 text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 mb-10">
<div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
<span className="text-xs font-semibold tracking-widest uppercase text-zinc-300">The Bottleneck</span>
</div>
<h2 className="text-5xl lg:text-7xl font-medium tracking-tighter mb-8 leading-[1.1]">
                        Information asymmetry is gone.<br/>
<span className="text-zinc-500">Synthesis speed is the new edge.</span>
</h2>
<p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-20">
                        Top-tier analysts spend 70% of their time aggregating data and updating models. Arcadia automates the manual processing, allowing your team to focus exclusively on high-conviction thesis generation.
                    </p>

<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800 text-left">
<div className="bg-zinc-950 p-10 flex flex-col gap-8">
<span className="text-xs font-semibold tracking-widest uppercase text-zinc-500 border-b border-zinc-800 pb-4">Legacy Process</span>
<ul className="flex flex-col gap-6 text-zinc-400 text-lg">
<li className="flex gap-4 items-start"><i className="w-5 h-5 text-zinc-600 shrink-0 mt-1" data-lucide="x"></i> Manual parsing of 10-Ks &amp; Earnings Calls</li>
<li className="flex gap-4 items-start"><i className="w-5 h-5 text-zinc-600 shrink-0 mt-1" data-lucide="x"></i> Fragile Excel links to static data providers</li>
<li className="flex gap-4 items-start"><i className="w-5 h-5 text-zinc-600 shrink-0 mt-1" data-lucide="x"></i> Days to build initial comp sheets</li>
</ul>
</div>
<div className="bg-zinc-900 p-10 flex flex-col gap-8 relative overflow-hidden">
<div className="absolute right-0 top-0 w-64 h-64 bg-white/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
<span className="text-xs font-semibold tracking-widest uppercase text-white border-b border-zinc-700 pb-4 relative z-10">Arcadia Autonomous Flow</span>
<ul className="flex flex-col gap-6 text-zinc-200 text-lg relative z-10">
<li className="flex gap-4 items-start"><i className="w-5 h-5 text-white shrink-0 mt-1" data-lucide="check"></i> Instant semantic extraction across all filings</li>
<li className="flex gap-4 items-start"><i className="w-5 h-5 text-white shrink-0 mt-1" data-lucide="check"></i> Dynamic, fully audited model generation</li>
<li className="flex gap-4 items-start"><i className="w-5 h-5 text-white shrink-0 mt-1" data-lucide="check"></i> Initial coverage initiated in seconds</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-50 border-b border-zinc-200 py-32 px-6 lg:px-12" id="product">
<div className="max-w-6xl mx-auto">
<div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
<div>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tighter text-zinc-950 mb-6">Capabilities tailored<br/>for high finance.</h2>
<p className="text-lg text-zinc-500 max-w-md">Our architecture is specifically trained on financial corpus, valuation methodologies, and enterprise data structures.</p>
</div>
<button className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-zinc-950 hover:text-zinc-600 transition-colors pb-2 border-b border-zinc-950 hover:border-zinc-600 w-fit">
                        Explore Architecture <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-200 rounded-xl overflow-hidden shadow-sm">

<div className="md:col-span-2 bg-white p-10 lg:p-14 flex flex-col justify-between group">
<div className="mb-16">
<i className="w-8 h-8 text-zinc-950 mb-6" data-lucide="file-spreadsheet" strokeWidth="1.5"></i>
<h3 className="text-2xl font-medium tracking-tight text-zinc-950 mb-3">Dynamic Financial Modeling</h3>
<p className="text-zinc-500 text-lg max-w-md">Upload a ticker or private company financials. Arcadia autonomously builds fully linked three-statement models, DCFs, and LBOs with auditable cell-level sourcing.</p>
</div>

<div className="w-full bg-zinc-50 border border-zinc-100 rounded-lg p-6 font-mono text-[10px] text-zinc-500 leading-relaxed overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-50 to-transparent z-10 h-full w-full"></div>
<div className="flex border-b border-zinc-200 pb-2 mb-2 gap-8 text-zinc-400">
<span>Revenue Build</span> <span>COGS</span> <span>OpEx</span>
</div>
<div className="grid grid-cols-4 gap-4 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
<div>Total Rev.</div> <div className="text-right">1,240.5</div> <div className="text-right">1,450.2</div> <div className="text-right text-zinc-950 font-medium">1,680.0</div>
<div>Growth %</div> <div className="text-right">-</div> <div className="text-right">16.9%</div> <div className="text-right text-zinc-950 font-medium">15.8%</div>
<div className="col-span-4 h-px bg-zinc-200 my-1"></div>
<div>Gross Margin</div> <div className="text-right">62.0%</div> <div className="text-right">63.5%</div> <div className="text-right text-zinc-950 font-medium">64.2%</div>
</div>
</div>
</div>

<div className="bg-white p-10 lg:p-14 flex flex-col justify-between">
<div className="mb-12">
<i className="w-8 h-8 text-zinc-950 mb-6" data-lucide="search-check" strokeWidth="1.5"></i>
<h3 className="text-2xl font-medium tracking-tight text-zinc-950 mb-3">Automated Due Diligence</h3>
<p className="text-zinc-500 text-lg">Instant red-flag detection across thousands of pages of vdr documents, cross-referenced with public filings.</p>
</div>
<div className="w-full h-32 bg-zinc-50 border border-zinc-100 rounded-lg relative overflow-hidden flex items-center justify-center">
<div className="w-16 h-16 rounded-full border-4 border-zinc-200 border-t-zinc-950 animate-spin"></div>
<span className="absolute text-xs font-semibold uppercase tracking-widest mt-24 text-zinc-500">Scanning 4,201 Docs</span>
</div>
</div>

<div className="bg-white p-10 lg:p-14 flex flex-col justify-between">
<div className="mb-12">
<i className="w-8 h-8 text-zinc-950 mb-6" data-lucide="activity" strokeWidth="1.5"></i>
<h3 className="text-2xl font-medium tracking-tight text-zinc-950 mb-3">Real-time Surveillance</h3>
<p className="text-zinc-500 text-lg">Monitor custom metrics across sectors. Get alerted when an earnings call transcript deviates from consensus tone.</p>
</div>
<div className="flex items-end gap-2 h-24 mt-auto">
<div className="w-1/6 bg-zinc-200 h-[40%] rounded-t-sm"></div>
<div className="w-1/6 bg-zinc-200 h-[60%] rounded-t-sm"></div>
<div className="w-1/6 bg-zinc-200 h-[30%] rounded-t-sm"></div>
<div className="w-1/6 bg-zinc-950 h-[80%] rounded-t-sm relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-semibold bg-zinc-950 text-white px-2 py-0.5 rounded shadow-sm whitespace-nowrap">Alert</div>
</div>
<div className="w-1/6 bg-zinc-200 h-[50%] rounded-t-sm"></div>
<div className="w-1/6 bg-zinc-200 h-[70%] rounded-t-sm"></div>
</div>
</div>

<div className="md:col-span-2 bg-white p-10 lg:p-14 flex flex-col justify-between">
<div className="mb-8">
<i className="w-8 h-8 text-zinc-950 mb-6" data-lucide="presentation" strokeWidth="1.5"></i>
<h3 className="text-2xl font-medium tracking-tight text-zinc-950 mb-3">Pitch Deck Drafting</h3>
<p className="text-zinc-500 text-lg max-w-xl">Generate first-draft presentation materials directly from the financial model and research synthesis. Export perfectly formatted slides adhering to your firm's brand guidelines.</p>
</div>
<div className="flex gap-4 mt-auto overflow-hidden">
<div className="w-48 h-32 bg-zinc-50 border border-zinc-200 shadow-sm rounded flex flex-col p-4 shrink-0 -rotate-2 hover:rotate-0 hover:-translate-y-2 transition-all duration-300">
<div className="h-2 w-1/3 bg-zinc-300 rounded mb-4"></div>
<div className="flex gap-2 flex-1">
<div className="w-1/2 bg-zinc-200 rounded"></div>
<div className="w-1/2 flex flex-col gap-2"><div className="h-1/2 bg-zinc-200 rounded"></div><div className="h-1/2 bg-zinc-200 rounded"></div></div>
</div>
</div>
<div className="w-48 h-32 bg-white border border-zinc-200 shadow-md rounded flex flex-col p-4 shrink-0 z-10 hover:-translate-y-2 transition-all duration-300">
<div className="h-2 w-1/2 bg-zinc-950 rounded mb-4"></div>
<div className="h-full w-full bg-zinc-100 flex items-end p-2 gap-1 rounded">
<div className="w-1/4 bg-zinc-300 h-[40%] rounded-sm"></div>
<div className="w-1/4 bg-zinc-400 h-[70%] rounded-sm"></div>
<div className="w-1/4 bg-zinc-950 h-[90%] rounded-sm"></div>
<div className="w-1/4 bg-zinc-300 h-[60%] rounded-sm"></div>
</div>
</div>
<div className="w-48 h-32 bg-zinc-50 border border-zinc-200 shadow-sm rounded flex flex-col p-4 shrink-0 rotate-2 hover:rotate-0 hover:-translate-y-2 transition-all duration-300">
<div className="h-2 w-1/3 bg-zinc-300 rounded mb-4"></div>
<div className="flex-1 bg-zinc-200 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-zinc-200 bg-white py-24 overflow-hidden relative">
<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
<div className="text-center mb-16">
<span className="text-xs font-semibold tracking-widest uppercase text-zinc-500 mb-4 block">Ingest From Anywhere</span>
<h2 className="text-3xl font-medium tracking-tight text-zinc-950">250+ Native Integrations</h2>
</div>

<div className="flex w-[200%] animate-[marquee_20s_linear_infinite] opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex w-1/2 justify-around items-center px-12 gap-24 text-2xl font-bold text-zinc-400 tracking-tighter">
<span>BLOOMBERG</span>
<span>FACTSET</span>
<span>S&amp;P CAPITAL IQ</span>
<span>REFINITIV</span>
<span>EDGAR</span>
<span>INTERNAL DB</span>
</div>
<div className="flex w-1/2 justify-around items-center px-12 gap-24 text-2xl font-bold text-zinc-400 tracking-tighter">
<span>BLOOMBERG</span>
<span>FACTSET</span>
<span>S&amp;P CAPITAL IQ</span>
<span>REFINITIV</span>
<span>EDGAR</span>
<span>INTERNAL DB</span>
</div>
</div>
<style>
                @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
            </style>
</section>

<section className="grid grid-cols-12 border-b border-zinc-200 bg-white min-h-[80vh]" id="solutions">

<div className="col-span-12 lg:col-span-5 border-r border-zinc-200 p-8 lg:p-16 xl:p-24 flex flex-col justify-center bg-zinc-50/50">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tighter text-zinc-950 mb-12">The intelligence pipeline.</h2>
<div className="flex flex-col gap-2" id="workflow-tabs">

<button className="workflow-tab active w-full text-left p-6 border border-zinc-950 bg-white shadow-[4px_4px_0px_0px_rgba(9,9,11,1)] transition-all" data-target="step-1">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-semibold tracking-widest uppercase text-zinc-500">Step 01</span>
<i className="w-4 h-4 text-zinc-950" data-lucide="database" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-950">Data Ingestion</h3>
<p className="text-zinc-500 mt-2 text-sm hidden-desc active-desc block">Arcadia connects to your proprietary data rooms and public feeds, semantically indexing every table, footnote, and transcript.</p>
</button>

<button className="workflow-tab w-full text-left p-6 border border-transparent hover:bg-zinc-100 transition-all opacity-60 hover:opacity-100" data-target="step-2">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-semibold tracking-widest uppercase text-zinc-500">Step 02</span>
<i className="w-4 h-4 text-zinc-950" data-lucide="cpu" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-950">Contextual Analysis</h3>
<p className="text-zinc-500 mt-2 text-sm hidden hidden-desc">Proprietary LLMs fine-tuned on financial reasoning extract entities, calculate unadjusted metrics, and identify anomalies.</p>
</button>

<button className="workflow-tab w-full text-left p-6 border border-transparent hover:bg-zinc-100 transition-all opacity-60 hover:opacity-100" data-target="step-3">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-semibold tracking-widest uppercase text-zinc-500">Step 03</span>
<i className="w-4 h-4 text-zinc-950" data-lucide="network" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-950">Synthesis &amp; Modeling</h3>
<p className="text-zinc-500 mt-2 text-sm hidden hidden-desc">Data is structured into dynamic models and comparative analyses, fully referenced back to the source documents.</p>
</button>
</div>
</div>

<div className="col-span-12 lg:col-span-7 bg-zinc-100 p-8 lg:p-24 flex items-center justify-center relative overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
<div className="w-full max-w-2xl bg-white border border-zinc-200 shadow-xl rounded-xl relative z-10 h-[500px] flex flex-col overflow-hidden transition-all duration-500" id="workflow-display">

<div className="h-12 border-b border-zinc-100 bg-zinc-50 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-zinc-200"></div>
<div className="w-3 h-3 rounded-full bg-zinc-200"></div>
<div className="w-3 h-3 rounded-full bg-zinc-200"></div>
<div className="ml-4 px-3 py-1 bg-white border border-zinc-200 rounded text-[10px] text-zinc-400 font-mono flex-1 flex justify-center">arcadia-workspace-env.vpc</div>
</div>

<div className="flex-1 p-8 relative">

<div className="workflow-content absolute inset-8 transition-opacity duration-500 opacity-100 flex flex-col gap-4" id="step-1-content">
<div className="flex justify-between items-center mb-4">
<span className="text-sm font-semibold">Active Connections</span>
<span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Status: Syncing</span>
</div>
<div className="flex items-center gap-4 p-3 border border-zinc-100 rounded-lg bg-zinc-50">
<div className="w-8 h-8 bg-zinc-200 rounded flex items-center justify-center"><i className="w-4 h-4 text-zinc-500" data-lucide="folder"></i></div>
<div className="flex-1">
<div className="text-sm font-medium">Project_Apollo_VDR.zip</div>
<div className="text-xs text-zinc-400">4,201 files indexed • 2 mins ago</div>
</div>
<i className="w-5 h-5 text-zinc-400" data-lucide="check-circle-2"></i>
</div>
<div className="flex items-center gap-4 p-3 border border-zinc-100 rounded-lg bg-zinc-50">
<div className="w-8 h-8 bg-zinc-200 rounded flex items-center justify-center"><i className="w-4 h-4 text-zinc-500" data-lucide="globe"></i></div>
<div className="flex-1">
<div className="text-sm font-medium">SEC EDGAR Live Feed</div>
<div className="text-xs text-zinc-400">Monitoring 500+ tickers</div>
</div>
<div className="w-5 h-5 border-2 border-zinc-200 border-t-zinc-950 rounded-full animate-spin"></div>
</div>
</div>

<div className="workflow-content absolute inset-8 transition-opacity duration-500 opacity-0 pointer-events-none flex flex-col" id="step-2-content">
<div className="text-sm font-medium mb-4">Semantic Extraction Map</div>
<div className="flex-1 border border-zinc-100 rounded-lg bg-zinc-50 p-4 font-mono text-[10px] text-zinc-600 overflow-hidden relative">
<div className="mb-2 text-zinc-950">"Management expects margins to compress by 150bps due to supply chain headwinds."</div>
<div className="flex gap-2 mb-4">
<span className="bg-blue-100 text-blue-800 px-1 rounded">Entity: Margins</span>
<span className="bg-red-100 text-red-800 px-1 rounded">Value: -150bps</span>
<span className="bg-yellow-100 text-yellow-800 px-1 rounded">Driver: Supply Chain</span>
</div>
<div className="w-full h-px bg-zinc-200 my-2"></div>
<div className="text-zinc-400">Mapping to Model -&gt; Sheet: Inputs, Cell: D14</div>
<div className="absolute bottom-4 right-4"><i className="w-8 h-8 text-zinc-200" data-lucide="brain-circuit"></i></div>
</div>
</div>

<div className="workflow-content absolute inset-8 transition-opacity duration-500 opacity-0 pointer-events-none flex flex-col" id="step-3-content">
<div className="flex justify-between items-center mb-4">
<span className="text-sm font-medium">Generated Outputs</span>
<button className="text-xs bg-zinc-950 text-white px-3 py-1 rounded">Export All</button>
</div>
<div className="grid grid-cols-2 gap-4 flex-1">
<div className="border border-zinc-200 rounded-lg p-4 flex flex-col justify-center items-center gap-2 hover:border-zinc-400 transition-colors cursor-pointer bg-white">
<i className="w-8 h-8 text-green-600" data-lucide="file-spreadsheet"></i>
<span className="text-xs font-medium">LBO_Model_v1.xlsx</span>
</div>
<div className="border border-zinc-200 rounded-lg p-4 flex flex-col justify-center items-center gap-2 hover:border-zinc-400 transition-colors cursor-pointer bg-white">
<i className="w-8 h-8 text-orange-600" data-lucide="presentation"></i>
<span className="text-xs font-medium">IC_Memo_Draft.pptx</span>
</div>
<div className="col-span-2 border border-zinc-200 rounded-lg p-4 flex flex-col justify-center items-center gap-2 hover:border-zinc-400 transition-colors cursor-pointer bg-white">
<i className="w-8 h-8 text-blue-600" data-lucide="file-text"></i>
<span className="text-xs font-medium">Due_Diligence_Redflag_Report.pdf</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-12 bg-white border-b border-zinc-200 relative overflow-hidden">

<i className="absolute -right-20 -top-20 w-[40rem] h-[40rem] text-zinc-50 pointer-events-none" data-lucide="shield-check" strokeWidth="0.5"></i>
<div className="max-w-4xl mx-auto relative z-10 text-center">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tighter text-zinc-950 mb-6">Bank-grade security.<br/>By default.</h2>
<p className="text-xl text-zinc-500 mb-16 max-w-2xl mx-auto">We understand the gravity of non-public material information. Arcadia is architected to ensure your data never leaves your control.</p>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
<div className="border-t border-zinc-200 pt-6">
<div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center mb-6">
<i className="w-5 h-5 text-zinc-950" data-lucide="lock" strokeWidth="1.5"></i>
</div>
<h4 className="text-lg font-medium text-zinc-950 mb-2">Zero Retention</h4>
<p className="text-sm text-zinc-500">Models are ephemeral or stored locally. We do not train base models on your proprietary data.</p>
</div>
<div className="border-t border-zinc-200 pt-6">
<div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center mb-6">
<i className="w-5 h-5 text-zinc-950" data-lucide="server" strokeWidth="1.5"></i>
</div>
<h4 className="text-lg font-medium text-zinc-950 mb-2">VPC Deployment</h4>
<p className="text-sm text-zinc-500">Deploy Arcadia entirely within your firm's Virtual Private Cloud. Complete isolation.</p>
</div>
<div className="border-t border-zinc-200 pt-6">
<div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center mb-6">
<i className="w-5 h-5 text-zinc-950" data-lucide="file-check-2" strokeWidth="1.5"></i>
</div>
<h4 className="text-lg font-medium text-zinc-950 mb-2">SOC 2 Type II</h4>
<p className="text-sm text-zinc-500">Independently audited and certified for security, availability, and confidentiality.</p>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-950 text-white relative" id="company">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,#27272a_0%,transparent_70%)] opacity-50"></div>

<div className="py-32 px-6 lg:px-12 text-center relative z-10 border-b border-zinc-900">
<h2 className="text-5xl lg:text-7xl font-medium tracking-tighter mb-8">Ready to deploy your<br/>AI analyst?</h2>
<button className="bg-white text-zinc-950 px-10 py-5 text-sm font-semibold tracking-wider uppercase hover:bg-zinc-200 transition-colors group flex items-center gap-4 mx-auto">
                    Request Enterprise Trial
                    <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 relative z-10">

<div className="col-span-12 lg:col-span-4 p-12 lg:p-16 border-r border-zinc-900 flex flex-col justify-between">
<div>
<a className="flex items-center gap-3 mb-8 text-white" href="#">
<svg fill="none" height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 22H6.5L12 11L17.5 22H22L12 2Z" fill="currentColor"></path>
</svg>
<span className="text-sm font-semibold tracking-widest uppercase">Arcadia</span>
</a>
<p className="text-zinc-500 text-sm max-w-xs mb-12">The autonomous intelligence layer for top-tier capital markets teams.</p>
</div>
<div className="w-full max-w-sm">
<span className="text-[10px] font-semibold tracking-widest uppercase text-zinc-600 mb-4 block">Subscribe to Insights</span>
<div className="flex border border-zinc-800 bg-zinc-900/50 p-1 focus-within:border-zinc-600 transition-colors">
<input className="bg-transparent text-sm text-white px-4 py-2 w-full focus:outline-none placeholder:text-zinc-600" placeholder="Email address" type="email"/>
<button className="bg-zinc-800 p-2 hover:bg-zinc-700 transition-colors"><i className="w-4 h-4" data-lucide="arrow-right"></i></button>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 p-12 lg:p-16 gap-12">
<div className="flex flex-col gap-4">
<span className="text-[10px] font-semibold tracking-widest uppercase text-zinc-600 mb-2 block">Product</span>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Architecture</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Security</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Integrations</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-[10px] font-semibold tracking-widest uppercase text-zinc-600 mb-2 block">Solutions</span>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Investment Banking</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Private Equity</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Hedge Funds</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Corporate Dev</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-[10px] font-semibold tracking-widest uppercase text-zinc-600 mb-2 block">Company</span>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">About Us</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-2" href="#careers">Careers <span className="bg-white text-zinc-950 text-[8px] px-1.5 py-0.5 rounded font-bold">HIRING</span></a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Blog</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-[10px] font-semibold tracking-widest uppercase text-zinc-600 mb-2 block">Legal</span>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Cookie Policy</a>
</div>
</div>
</div>

<div className="border-t border-zinc-900 p-6 flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-600">
<p>© 2024 Arcadia Intelligence Inc. All rights reserved.</p>
<div className="flex gap-4 mt-4 sm:mt-0">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
</div>
</footer>
</div> 



    </>
  );
}
