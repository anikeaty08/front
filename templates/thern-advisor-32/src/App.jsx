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
bg: '#F5F5F3',
grid: '#E6E6E4',
dark: '#0D0D0D',
muted: '#8A8A8A',
accent: '#BCA37F'
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
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        let menuOpen = false;

        btn.addEventListener('click', () => {
            menuOpen = !menuOpen;
            if(menuOpen) {
                menu.classList.remove('hidden');
                menu.classList.add('flex');
                btn.innerHTML = '<i data-lucide="x" class="w-5 h-5"></i>';
                lucide.createIcons();
                document.body.style.overflow = 'hidden';
            } else {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
                btn.innerHTML = '<i data-lucide="menu" class="w-5 h-5"></i>';
                lucide.createIcons();
                document.body.style.overflow = '';
            }
        });

        // Close menu on link click
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
                menuOpen = false;
                btn.innerHTML = '<i data-lucide="menu" class="w-5 h-5"></i>';
                lucide.createIcons();
                document.body.style.overflow = '';
            });
        });

        // Singapore Clock
        function updateClock() {
            const clockEl = document.getElementById('sg-clock');
            if(!clockEl) return;
            
            const now = new Date();
            // Singapore is UTC+8
            const sgTime = new Date(now.getTime() + (now.getTimezoneOffset() * 60000) + (3600000 * 8));
            
            const hours = String(sgTime.getHours()).padStart(2, '0');
            const minutes = String(sgTime.getMinutes()).padStart(2, '0');
            const seconds = String(sgTime.getSeconds()).padStart(2, '0');
            
            clockEl.textContent = `${hours} : ${minutes} : ${seconds}`;
        }
        
        setInterval(updateClock, 1000);
        updateClock();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none flex justify-center z-0 opacity-50">
<div className="w-full max-w-[100rem] h-full border-x border-grid flex">
<div className="w-12 md:w-16 h-full border-r border-grid shrink-0"></div>
<div className="flex-1 h-full flex">
<div className="flex-1 border-r border-grid"></div>
<div className="flex-1 border-r border-grid hidden lg:block"></div>
</div>
</div>
</div>

<div className="relative z-10 w-full max-w-[100rem] mx-auto flex flex-col min-h-screen">

<header className="w-full h-20 border-b border-grid flex items-center justify-between bg-bg/80 backdrop-blur-md sticky top-0 z-50">

<div className="flex items-center h-full">
<div className="w-12 md:w-16 h-full border-r border-grid flex items-center justify-center shrink-0">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24"><path d="m2 22 10-20 10 20"></path><path d="M12 11v11"></path></svg>
</div>
<div className="px-6 flex flex-col justify-center">
<span className="text-sm tracking-[0.2em] uppercase font-medium leading-none">Æthern</span>
<span className="text-[10px] tracking-widest uppercase text-muted mt-1 leading-none">Advisor</span>
</div>
</div>

<nav className="hidden lg:flex items-center gap-12 text-xs tracking-widest uppercase font-medium text-muted">
<a className="hover:text-dark transition-colors" href="#philosophy">Philosophy</a>
<a className="hover:text-dark transition-colors" href="#technology">Technology</a>
<a className="hover:text-dark transition-colors" href="#approach">Approach</a>
<a className="hover:text-dark transition-colors" href="#security">Security</a>
<a className="hover:text-dark transition-colors" href="#about">About</a>
</nav>

<div className="h-full flex items-center">
<button className="h-full px-8 bg-dark text-white text-xs tracking-widest uppercase flex items-center gap-3 hover:bg-black transition-colors hidden md:flex">
<span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    Request Access
                </button>
<button className="h-full w-16 flex items-center justify-center border-l border-grid lg:hidden text-dark" id="mobile-menu-btn">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</header>

<div className="fixed inset-0 bg-bg z-40 hidden flex-col pt-20 px-6 pb-6" id="mobile-menu">
<nav className="flex flex-col gap-6 text-sm tracking-widest uppercase font-medium text-dark mt-12">
<a className="border-b border-grid pb-4" href="#philosophy">Philosophy</a>
<a className="border-b border-grid pb-4" href="#technology">Technology</a>
<a className="border-b border-grid pb-4" href="#approach">Approach</a>
<a className="border-b border-grid pb-4" href="#security">Security</a>
<a className="border-b border-grid pb-4" href="#about">About</a>
</nav>
<button className="mt-auto w-full py-4 bg-dark text-white text-xs tracking-widest uppercase flex items-center justify-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                Request Access
            </button>
</div>

<section className="flex flex-col lg:flex-row flex-1 border-b border-grid relative">

<div className="hidden lg:flex w-16 border-r border-grid flex-col items-center py-8 shrink-0 relative">
<div className="w-1.5 h-1.5 bg-dark mb-12"></div>
<div className="absolute top-32 -rotate-90 whitespace-nowrap text-[10px] tracking-[0.3em] uppercase text-muted font-medium">
                    Autonomous Intelligence
                </div>
<div className="mt-auto text-xs text-muted mb-8">01</div>
<div className="w-px h-24 bg-grid"></div>
</div>

<div className="flex-1 flex flex-col lg:flex-row w-full">

<div className="flex-1 p-8 lg:p-16 xl:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-grid relative z-10">
<h3 className="text-xs tracking-[0.2em] text-accent uppercase font-medium mb-8">Autonomous AI Advisor</h3>
<h1 className="text-5xl md:text-6xl xl:text-[5.5rem] leading-[1.05] tracking-tight text-dark mb-8 max-w-2xl">
<span className="font-normal block">Intelligence</span>
<span className="font-normal block">that allocates.</span>
<span className="font-normal block mt-2 text-dark/90" style={{fontFamily: '\'Playfair Display\', serif', fontStyle: 'italic'}}>Capital that endures.</span>
</h1>
<p className="text-base md:text-lg text-muted max-w-md leading-relaxed mb-12 font-light">
                        Æthern Advisor is an autonomous AI built for UHNWI families to optimize asset allocation across global markets, private assets, and alternative strategies.
                    </p>
<div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-auto">
<button className="px-8 py-4 bg-dark text-white text-xs tracking-widest uppercase flex items-center justify-between w-fit gap-8 hover:bg-black transition-all">
<span>Request Access</span>
<span className="text-accent text-lg leading-none">+</span>
</button>
<div className="flex flex-col">
<div className="flex items-center gap-2 mb-1">
<span className="w-1 h-1 rounded-full bg-accent"></span>
<span className="text-[10px] tracking-widest uppercase text-accent font-medium">Invitation Only</span>
</div>
<span className="text-sm text-muted">Onboard in under 48 hours</span>
</div>
</div>

<div className="mt-16 pt-8 border-t border-grid flex flex-col sm:flex-row items-start sm:items-center gap-8">
<div className="flex items-center gap-4 w-48">
<i className="w-4 h-4 text-grid shrink-0" data-lucide="plus"></i>
<span className="text-[10px] tracking-widest uppercase text-dark font-medium leading-relaxed">Built for those who think in generations</span>
</div>
<div className="flex-1 flex flex-col items-start sm:items-center">
<div className="flex items-center gap-4 opacity-40 grayscale mix-blend-multiply mb-3">

<svg className="h-8 w-auto" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M12 8v4"></path><path d="M10 10h4"></path></svg>
<svg className="h-8 w-auto" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
<svg className="h-8 w-auto" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><path d="M9 3v18"></path><path d="M15 3v18"></path><path d="M3 9h18"></path><path d="M3 15h18"></path></svg>
<svg className="h-8 w-auto" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
</div>
<span className="text-[9px] tracking-widest uppercase text-muted">Trusted by leading families &amp; offices globally</span>
</div>
</div>
</div>

<div className="flex-1 relative min-h-[600px] lg:min-h-0 bg-bg overflow-hidden flex items-center justify-center p-8">

<div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] xl:w-[500px] xl:h-[500px] rounded-full bg-[#111] shadow-[inset_-20px_-20px_60px_rgba(0,0,0,0.9),inset_20px_20px_60px_rgba(255,255,255,0.05),0_0_50px_rgba(0,0,0,0.1)] flex items-center justify-center border border-white/10 z-10">

<div className="absolute inset-2 rounded-full border border-white/5 rotate-45"></div>
<div className="absolute inset-6 rounded-full border border-white/5 -rotate-12"></div>
<div className="absolute inset-12 rounded-full border border-accent/20 rotate-90"></div>

<div className="w-12 h-12 rounded-full bg-accent/80 blur-2xl z-20"></div>
<div className="w-3 h-3 rounded-full bg-[#FFF0D4] shadow-[0_0_20px_#D4B886] z-30"></div>

<div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
</div>

<div className="absolute w-[120%] h-[120%] rounded-full border border-grid/50 z-0"></div>
<div className="absolute w-[150%] h-[150%] rounded-full border border-grid/30 z-0"></div>


<div className="absolute top-[15%] left-[10%] xl:left-[15%] z-20 flex flex-col items-end text-right hidden sm:flex">
<div className="flex items-center gap-2 mb-2">
<span className="text-[9px] tracking-widest uppercase text-muted">Market Regime<br/>Expansion</span>
</div>
<div className="w-24 h-12 border-b border-l border-grid/50 relative flex items-end">
<svg className="w-full h-full text-grid" fill="none" preserveaspectratio="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 100 50"><path d="M0 40 L20 35 L40 45 L60 20 L80 25 L100 5"></path></svg>

<svg className="absolute top-0 right-0 translate-x-full translate-y-full w-32 h-32 pointer-events-none" style={{stroke: 'var(--tw-colors-grid)', strokeWidth: '0.5'}}><line x1="0" x2="100%" y1="0" y2="100%"></line></svg>
</div>
</div>

<div className="absolute top-[15%] right-[5%] xl:right-[10%] z-20 flex flex-col items-start hidden sm:flex">
<div className="flex items-center gap-2 mb-2">
<div className="w-1 h-1 bg-accent"></div>
<span className="text-[9px] tracking-widest uppercase text-dark font-medium">Real-time Adaptive Allocation</span>
</div>
<span className="text-[10px] text-muted max-w-[150px]">Sub-millisecond market &amp; macro signal processing</span>

<svg className="absolute top-0 left-0 -translate-x-[120%] translate-y-full w-48 h-32 pointer-events-none" style={{stroke: 'var(--tw-colors-grid)', strokeWidth: '0.5'}}><line x1="100%" x2="0" y1="0" y2="100%"></line></svg>
</div>

<div className="absolute bottom-[20%] left-[10%] xl:left-[15%] z-20 flex flex-col items-start hidden sm:flex">
<div className="text-[9px] tracking-widest uppercase text-dark mb-2">Risk Posture<br/><span className="text-accent">Calibrated</span></div>
<div className="flex items-end gap-1 h-8 opacity-40">
<div className="w-px bg-dark h-full"></div>
<div className="w-px bg-dark h-[80%]"></div>
<div className="w-px bg-dark h-[60%]"></div>
<div className="w-px bg-dark h-[90%]"></div>
<div className="w-px bg-dark h-[40%]"></div>
<div className="w-px bg-dark h-[70%]"></div>
<div className="w-px bg-dark h-[100%]"></div>
<div className="w-px bg-accent h-[50%] ml-2"></div>
</div>

<svg className="absolute top-0 right-0 translate-x-full -translate-y-full w-32 h-32 pointer-events-none" style={{stroke: 'var(--tw-colors-grid)', strokeWidth: '0.5'}}><line x1="0" x2="100%" y1="100%" y2="0"></line></svg>
</div>

<div className="absolute bottom-[20%] right-[10%] xl:right-[15%] z-20 flex flex-col items-start hidden sm:flex">
<div className="flex items-center gap-2 mb-1">
<div className="w-1 h-1 bg-dark"></div>
<span className="text-[9px] tracking-widest uppercase text-muted font-medium">IAI Confidence Index</span>
</div>
<div className="text-3xl font-light text-accent tracking-tight mb-2" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>87%</div>
<div className="w-24 h-6 relative overflow-hidden opacity-50">
<svg className="w-full h-full text-dark" fill="none" preserveaspectratio="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 100 20"><path d="M0 10 Q 25 20, 50 10 T 100 10"></path></svg>
</div>
</div>

<div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20 hidden lg:flex">
<div className="flex items-center gap-4 group cursor-default">
<div className="w-1 h-1 rounded-full bg-grid group-hover:bg-accent transition-colors"></div>
<span className="text-[9px] tracking-widest uppercase text-muted group-hover:text-dark transition-colors">Public Markets</span>
</div>
<div className="flex items-center gap-4 group cursor-default">
<div className="w-1 h-1 rounded-full bg-grid group-hover:bg-accent transition-colors"></div>
<span className="text-[9px] tracking-widest uppercase text-muted group-hover:text-dark transition-colors">Private Equity</span>
</div>
<div className="flex items-center gap-4 group cursor-default">
<div className="w-1 h-1 rounded-full bg-accent"></div>
<span className="text-[9px] tracking-widest uppercase text-dark font-medium">Real Estate</span>
</div>
<div className="flex items-center gap-4 group cursor-default">
<div className="w-1 h-1 rounded-full bg-grid group-hover:bg-accent transition-colors"></div>
<span className="text-[9px] tracking-widest uppercase text-muted group-hover:text-dark transition-colors">Credit</span>
</div>
<div className="flex items-center gap-4 group cursor-default">
<div className="w-1 h-1 rounded-full bg-grid group-hover:bg-accent transition-colors"></div>
<span className="text-[9px] tracking-widest uppercase text-muted group-hover:text-dark transition-colors">Hedge Funds</span>
</div>
<div className="flex items-center gap-4 group cursor-default">
<div className="w-1 h-1 rounded-full bg-grid group-hover:bg-accent transition-colors"></div>
<span className="text-[9px] tracking-widest uppercase text-muted group-hover:text-dark transition-colors">Digital Assets</span>
</div>
<div className="flex items-center gap-4 group cursor-default">
<div className="w-1 h-1 rounded-full bg-grid group-hover:bg-accent transition-colors"></div>
<span className="text-[9px] tracking-widest uppercase text-muted group-hover:text-dark transition-colors">Commodities</span>
</div>
</div>
</div>
</div>
</section>

<div className="w-full h-12 lg:h-16 border-b border-grid flex items-center justify-between px-6 lg:px-8 text-[10px] tracking-widest uppercase text-muted bg-bg/50 backdrop-blur-sm font-medium z-20">
<div className="flex items-center gap-4 lg:gap-12 w-1/3">
<div className="hidden sm:block">
<span className="text-dark block mb-0.5">Singapore</span>
<span className="text-[9px]">GMT +8</span>
</div>
<div className="flex items-center gap-4">
<span className="text-dark" id="sg-clock" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>-- : -- : --</span>
<div className="flex items-center gap-1.5 hidden md:flex">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
<span>Live</span>
</div>
</div>
</div>
<div className="flex-1 flex justify-center hidden lg:flex">
<span style={{fontFamily: '\'JetBrains Mono\', monospace'}}>1.3521° N, 103.8198° E</span>
</div>
<div className="flex items-center justify-end gap-3 w-1/3">
<span className="hidden sm:inline">Bank-Grade Security</span>
<div className="w-6 h-6 border border-grid rounded-full flex items-center justify-center relative">
<div className="w-1 h-1 bg-accent rounded-full"></div>
<div className="absolute w-full h-px bg-grid/50"></div>
<div className="absolute h-full w-px bg-grid/50"></div>
</div>
</div>
</div>

<section className="border-b border-grid flex flex-col bg-white" id="philosophy">

<div className="w-full border-b border-grid overflow-hidden py-3 bg-bg flex items-center">
<div className="animate-[marquee_20s_linear_infinite] whitespace-nowrap flex items-center text-[10px] tracking-[0.2em] uppercase text-muted font-mono" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<span className="mx-8">AUM: $2.4B+</span> <span className="text-accent">•</span>
<span className="mx-8">STRATEGIES: 14 ACTIVATED</span> <span className="text-accent">•</span>
<span className="mx-8">UPTIME: 99.999%</span> <span className="text-accent">•</span>
<span className="mx-8">LATENCY: 0.4MS</span> <span className="text-accent">•</span>
<span className="mx-8">DATA POINTS/SEC: 1.2M</span> <span className="text-accent">•</span>
<span className="mx-8">AUM: $2.4B+</span> <span className="text-accent">•</span>
<span className="mx-8">STRATEGIES: 14 ACTIVATED</span> <span className="text-accent">•</span>
<span className="mx-8">UPTIME: 99.999%</span>
</div>
</div>
<div className="flex flex-col lg:flex-row">
<div className="hidden lg:flex w-16 border-r border-grid shrink-0"></div>
<div className="flex-1 p-8 lg:p-24 grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
<div className="flex flex-col">
<span className="text-[10px] tracking-[0.2em] text-accent uppercase font-medium mb-4">Core Thesis</span>
<h2 className="text-2xl tracking-tight text-dark font-medium mb-6">Beyond Human Capacity.</h2>
<p className="text-base text-muted leading-relaxed font-light">
                            Traditional wealth management relies on archaic human intuition and periodic rebalancing. Æthern operates on continuous, multi-dimensional data streams, executing structural shifts at machine speed while adhering strictly to generational preservation mandates.
                        </p>
</div>
<div className="flex items-center">
<blockquote className="text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-dark" style={{fontFamily: '\'Playfair Display\', serif'}}>
                            "The preservation of legacy requires <span className="italic text-accent">adaptation</span> at a velocity human cognitive limits cannot sustain."
                        </blockquote>
</div>
</div>
</div>
</section>

<section className="border-b border-grid flex flex-col lg:flex-row" id="approach">
<div className="hidden lg:flex w-16 border-r border-grid shrink-0 relative">
<div className="absolute top-1/2 -rotate-90 whitespace-nowrap text-[10px] tracking-[0.3em] uppercase text-muted font-medium -translate-y-1/2 w-full text-center">
                    Methodology
                </div>
</div>
<div className="flex-1 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-grid">

<div className="p-8 lg:p-12 xl:p-16 flex flex-col group hover:bg-white transition-colors cursor-default">
<div className="w-12 h-12 mb-12 relative flex items-center justify-center">
<svg className="absolute inset-0 w-full h-full text-grid group-hover:text-accent transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 100 100"><circle cx="50" cy="50" r="40"></circle><circle cx="50" cy="50" r="20"></circle></svg>
<i className="w-5 h-5 text-dark relative z-10" data-lucide="brain-circuit"></i>
</div>
<h3 className="text-lg tracking-tight text-dark font-medium mb-4">Cognitive Parsing</h3>
<p className="text-base text-muted leading-relaxed font-light flex-1">
                        Ingests and contextualizes macro-economic indicators, geopolitical shifts, and alternative data arrays globally in real-time.
                    </p>
<div className="mt-8 pt-8 border-t border-grid flex items-center justify-between text-[10px] tracking-widest uppercase font-mono">
<span className="text-muted">Data Nodes</span>
<span className="text-dark">4,500+</span>
</div>
</div>

<div className="p-8 lg:p-12 xl:p-16 flex flex-col group hover:bg-white transition-colors cursor-default">
<div className="w-12 h-12 mb-12 relative flex items-center justify-center">
<svg className="absolute inset-0 w-full h-full text-grid group-hover:text-accent transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 100 100"><rect height="80" width="80" x="10" y="10"></rect><path d="M10 50h80M50 10v80"></path></svg>
<i className="w-5 h-5 text-dark relative z-10" data-lucide="workflow"></i>
</div>
<h3 className="text-lg tracking-tight text-dark font-medium mb-4">Structural Allocation</h3>
<p className="text-base text-muted leading-relaxed font-light flex-1">
                        Dynamically shifts capital across predefined risk bands, optimizing the efficient frontier far beyond static modern portfolio theory.
                    </p>
<div className="mt-8 pt-8 border-t border-grid flex items-center justify-between text-[10px] tracking-widest uppercase font-mono">
<span className="text-muted">Rebalancing</span>
<span className="text-dark">Continuous</span>
</div>
</div>

<div className="p-8 lg:p-12 xl:p-16 flex flex-col group hover:bg-white transition-colors cursor-default">
<div className="w-12 h-12 mb-12 relative flex items-center justify-center">
<svg className="absolute inset-0 w-full h-full text-grid group-hover:text-accent transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 100 100"><path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z"></path></svg>
<i className="w-5 h-5 text-dark relative z-10" data-lucide="shield-check"></i>
</div>
<h3 className="text-lg tracking-tight text-dark font-medium mb-4">Downside Mitigation</h3>
<p className="text-base text-muted leading-relaxed font-light flex-1">
                        Predictive volatility scaling and automated hedging execution preserve capital during black swan events and regime shifts.
                    </p>
<div className="mt-8 pt-8 border-t border-grid flex items-center justify-between text-[10px] tracking-widest uppercase font-mono">
<span className="text-muted">Risk Checks</span>
<span className="text-dark">Sub-Ms</span>
</div>
</div>
</div>
</section>

<section className="border-b border-grid bg-[#0A0A0A] text-[#F0F0F0] flex flex-col overflow-hidden relative" id="technology">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
<div className="flex flex-col lg:flex-row relative z-10">
<div className="hidden lg:flex w-16 border-r border-white/10 shrink-0"></div>
<div className="flex-1 p-8 lg:p-24 flex flex-col">
<div className="flex items-center justify-between mb-16 border-b border-white/10 pb-8">
<div>
<span className="text-[10px] tracking-[0.2em] text-accent uppercase font-medium mb-2 block">Architecture</span>
<h2 className="text-3xl tracking-tight font-medium" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>AE_CORE_v4.2</h2>
</div>
<div className="flex items-center gap-6 hidden sm:flex">
<div className="flex flex-col items-end">
<span className="text-[9px] text-muted tracking-widest uppercase mb-1">Status</span>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></span>
<span className="text-xs font-mono">Operational</span>
</div>
</div>
</div>
</div>

<div className="border border-white/10 rounded-sm bg-black/50 backdrop-blur-sm flex flex-col font-mono text-sm shadow-2xl shadow-black">

<div className="flex items-center px-4 py-3 border-b border-white/10 bg-white/5 gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
<span className="ml-4 text-[10px] text-muted uppercase tracking-widest">system_log.sh</span>
</div>

<div className="p-6 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 text-muted">
<div className="space-y-4">
<div className="flex items-start gap-4">
<span className="text-accent mt-0.5">&gt;</span>
<div>
<div className="text-[#f0f0f0]">Ingesting global data vectors...</div>
<div className="text-xs mt-1">[OK] Bloomberg Terminal Node connected</div>
<div className="text-xs mt-1">[OK] Private Equity feeds synchronized</div>
</div>
</div>
<div className="flex items-start gap-4">
<span className="text-accent mt-0.5">&gt;</span>
<div>
<div className="text-[#f0f0f0]">Running probabilistic models...</div>
<div className="text-xs mt-1 text-yellow-500/80">Identifying minor liquidity shift in Asian credit markets</div>
<div className="text-xs mt-1">Adjusting risk weights dynamically</div>
</div>
</div>
<div className="flex items-start gap-4 animate-pulse">
<span className="text-accent mt-0.5">&gt;</span>
<div className="text-[#f0f0f0]">Executing allocation orders_</div>
</div>
</div>

<div className="hidden md:flex flex-col justify-center items-center relative border-l border-white/10 pl-12">
<svg className="w-full h-48 opacity-60" fill="none" stroke="currentColor" viewbox="0 0 200 100">
<path d="M10 50 Q 50 10 100 50 T 190 50" stroke-dasharray="2 4" strokeWidth="0.5"></path>
<path d="M10 50 Q 50 90 100 50 T 190 50" stroke-dasharray="2 4" stroke-opacity="0.5" strokeWidth="0.5"></path>
<circle cx="100" cy="50" fill="#BCA37F" r="4" stroke="none"></circle>
<circle cx="190" cy="50" fill="#fff" r="2" stroke="none"></circle>
<rect height="20" rx="2" stroke="#BCA37F" strokeWidth="1" width="20" x="90" y="40"></rect>
</svg>
<div className="absolute bottom-0 text-[10px] tracking-widest uppercase text-muted mt-4">Optimization Function Active</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-grid bg-white flex flex-col lg:flex-row">
<div className="hidden lg:flex w-16 border-r border-grid shrink-0 relative">
<div className="absolute top-1/2 -rotate-90 whitespace-nowrap text-[10px] tracking-[0.3em] uppercase text-muted font-medium -translate-y-1/2 w-full text-center">
                    Simulated Metrics
                </div>
</div>
<div className="flex-1 p-8 lg:p-24 flex flex-col">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl tracking-tight text-dark font-medium mb-4">Performance Matrix</h2>
<p className="text-base text-muted leading-relaxed font-light">
                        Historical simulation of the Æthern core algorithm against traditional benchmarks, illustrating superior risk-adjusted returns through active, machine-driven structural allocation.
                    </p>
</div>

<div className="w-full overflow-x-auto">
<div className="min-w-[800px] border border-grid">

<div className="grid grid-cols-5 border-b border-grid bg-bg text-[10px] tracking-widest uppercase text-muted font-medium py-4 px-6">
<div className="col-span-2">Strategy / Benchmark</div>
<div className="text-right">Ann. Return</div>
<div className="text-right">Max Drawdown</div>
<div className="text-right">Sharpe Ratio</div>
</div>

<div className="grid grid-cols-5 border-b border-grid py-5 px-6 items-center hover:bg-bg/50 transition-colors">
<div className="col-span-2 flex items-center gap-4">
<div className="w-2 h-2 bg-accent rounded-full"></div>
<span className="font-medium text-dark text-sm">Æthern Autonomous Core</span>
</div>
<div className="text-right font-mono text-sm text-dark">14.2%</div>
<div className="text-right font-mono text-sm text-dark">-8.4%</div>
<div className="text-right font-mono text-sm text-dark">2.14</div>
</div>

<div className="grid grid-cols-5 border-b border-grid py-5 px-6 items-center text-muted hover:bg-bg/50 transition-colors">
<div className="col-span-2 pl-6">
<span className="text-sm">Traditional 60/40 Portfolio</span>
</div>
<div className="text-right font-mono text-sm">7.8%</div>
<div className="text-right font-mono text-sm">-22.1%</div>
<div className="text-right font-mono text-sm">0.85</div>
</div>

<div className="grid grid-cols-5 py-5 px-6 items-center text-muted hover:bg-bg/50 transition-colors">
<div className="col-span-2 pl-6">
<span className="text-sm">Global Equity Index (MSCI ACWI)</span>
</div>
<div className="text-right font-mono text-sm">9.4%</div>
<div className="text-right font-mono text-sm">-34.2%</div>
<div className="text-right font-mono text-sm">0.72</div>
</div>
</div>
</div>
<div className="text-[9px] text-muted uppercase tracking-widest mt-4">
                    * Simulated backtest data (2010-2023). Past performance is not indicative of future results.
                </div>
</div>
</section>

<section className="border-b border-grid flex flex-col lg:flex-row bg-bg">
<div className="hidden lg:flex w-16 border-r border-grid shrink-0"></div>
<div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 lg:divide-x divide-grid">

<div className="p-8 lg:p-12 flex flex-col border-b md:border-b-0 md:border-r lg:border-r-0 border-grid group hover:bg-white transition-all">
<div className="text-[10px] tracking-[0.2em] text-muted uppercase mb-16 group-hover:text-dark transition-colors font-medium">01</div>
<h4 className="text-lg tracking-tight text-dark font-medium mb-3">Public Equities</h4>
<p className="text-sm text-muted font-light leading-relaxed mb-8">Factor-based long/short strategies execution across global exchanges.</p>
<div className="mt-auto">

<div className="w-full h-1 bg-grid relative rounded-full overflow-hidden">
<div className="absolute left-0 top-0 h-full w-[80%] bg-dark"></div>
</div>
<div className="text-[9px] tracking-widest uppercase text-muted mt-2 text-right">Allocation cap: 80%</div>
</div>
</div>

<div className="p-8 lg:p-12 flex flex-col border-b lg:border-b-0 border-grid group hover:bg-white transition-all">
<div className="text-[10px] tracking-[0.2em] text-muted uppercase mb-16 group-hover:text-dark transition-colors font-medium">02</div>
<h4 className="text-lg tracking-tight text-dark font-medium mb-3">Private Credit</h4>
<p className="text-sm text-muted font-light leading-relaxed mb-8">Direct lending and structured credit analysis via proprietary alternative data.</p>
<div className="mt-auto">
<div className="w-full h-1 bg-grid relative rounded-full overflow-hidden">
<div className="absolute left-0 top-0 h-full w-[40%] bg-dark"></div>
</div>
<div className="text-[9px] tracking-widest uppercase text-muted mt-2 text-right">Allocation cap: 40%</div>
</div>
</div>

<div className="p-8 lg:p-12 flex flex-col border-b md:border-b-0 md:border-r lg:border-r-0 border-grid group hover:bg-white transition-all">
<div className="text-[10px] tracking-[0.2em] text-muted uppercase mb-16 group-hover:text-dark transition-colors font-medium">03</div>
<h4 className="text-lg tracking-tight text-dark font-medium mb-3">Digital Assets</h4>
<p className="text-sm text-muted font-light leading-relaxed mb-8">Algorithmic market-making and quantitative trading in tier-1 crypto assets.</p>
<div className="mt-auto">
<div className="w-full h-1 bg-grid relative rounded-full overflow-hidden">
<div className="absolute left-0 top-0 h-full w-[15%] bg-accent"></div>
</div>
<div className="text-[9px] tracking-widest uppercase text-muted mt-2 text-right">Allocation cap: 15%</div>
</div>
</div>

<div className="p-8 lg:p-12 flex flex-col group hover:bg-white transition-all">
<div className="text-[10px] tracking-[0.2em] text-muted uppercase mb-16 group-hover:text-dark transition-colors font-medium">04</div>
<h4 className="text-lg tracking-tight text-dark font-medium mb-3">Real Estate</h4>
<p className="text-sm text-muted font-light leading-relaxed mb-8">REIT modeling and macro-demographic analysis for tangible asset exposure.</p>
<div className="mt-auto">
<div className="w-full h-1 bg-grid relative rounded-full overflow-hidden">
<div className="absolute left-0 top-0 h-full w-[30%] bg-dark"></div>
</div>
<div className="text-[9px] tracking-widest uppercase text-muted mt-2 text-right">Allocation cap: 30%</div>
</div>
</div>
</div>
</section>

<section className="border-b border-grid flex flex-col lg:flex-row bg-white" id="security">
<div className="hidden lg:flex w-16 border-r border-grid shrink-0"></div>
<div className="flex-1 p-8 lg:p-24 flex flex-col md:flex-row gap-16 lg:gap-24">
<div className="md:w-1/3 flex flex-col">
<i className="w-8 h-8 text-accent mb-8" data-lucide="lock" strokeWidth="1"></i>
<h2 className="text-3xl tracking-tight text-dark font-medium mb-6">Institutional Grade Custody &amp; Security.</h2>
<p className="text-base text-muted leading-relaxed font-light">
                        Æthern operates independently of custody. Client assets remain in their own designated tier-1 banking institutions, interacted with purely via API execution layers with hard-coded withdrawal restrictions.
                    </p>
</div>
<div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
<div>
<div className="flex items-center gap-3 mb-4">
<i className="w-4 h-4 text-dark" data-lucide="key"></i>
<h5 className="text-sm font-medium tracking-tight uppercase">Zero-Trust Execution</h5>
</div>
<p className="text-sm text-muted font-light leading-relaxed">The AI possesses execution-only rights. It cannot initiate wire transfers, withdrawals, or alter account ownership under any circumstances.</p>
</div>
<div>
<div className="flex items-center gap-3 mb-4">
<i className="w-4 h-4 text-dark" data-lucide="server"></i>
<h5 className="text-sm font-medium tracking-tight uppercase">Air-gapped Logic</h5>
</div>
<p className="text-sm text-muted font-light leading-relaxed">Core decision algorithms are isolated from the internet, communicating with execution modules via secure, encrypted internal channels.</p>
</div>
<div>
<div className="flex items-center gap-3 mb-4">
<i className="w-4 h-4 text-dark" data-lucide="file-check"></i>
<h5 className="text-sm font-medium tracking-tight uppercase">Real-time Auditing</h5>
</div>
<p className="text-sm text-muted font-light leading-relaxed">Every structural shift is recorded on an immutable ledger, verifiable by external accounting firms instantly.</p>
</div>
<div>
<div className="flex items-center gap-3 mb-4">
<i className="w-4 h-4 text-dark" data-lucide="network"></i>
<h5 className="text-sm font-medium tracking-tight uppercase">Multi-Sig Override</h5>
</div>
<p className="text-sm text-muted font-light leading-relaxed">Emergency kill-switches require multi-signature authorization from family office principals to halt trading.</p>
</div>
</div>
</div>
</section>

<section className="border-b border-grid flex flex-col lg:flex-row bg-bg">
<div className="hidden lg:flex w-16 border-r border-grid shrink-0"></div>
<div className="flex-1 grid grid-cols-1 lg:grid-cols-2">
<div className="p-8 lg:p-24 border-b lg:border-b-0 lg:border-r border-grid flex flex-col justify-center">
<h2 className="text-3xl tracking-tight text-dark font-medium mb-6">Request Access.</h2>
<p className="text-base text-muted leading-relaxed font-light mb-12 max-w-md">
                        Due to the computational intensity of individualized regime modeling, onboarding is strictly limited and subject to minimum AUM requirements.
                    </p>
<div className="flex flex-col gap-6 font-mono text-xs uppercase tracking-widest text-muted">
<div className="flex justify-between border-b border-grid pb-2">
<span>Minimum Allocation</span>
<span className="text-dark">$25,000,000 USD</span>
</div>
<div className="flex justify-between border-b border-grid pb-2">
<span>Onboarding Timeline</span>
<span className="text-dark">48 - 72 Hours</span>
</div>
<div className="flex justify-between border-b border-grid pb-2">
<span>Availability</span>
<span className="text-accent">Waitlisted</span>
</div>
</div>
</div>
<div className="p-8 lg:p-24 bg-white flex items-center justify-center">
<form className="w-full max-w-md flex flex-col gap-8">

<div className="relative group">
<input className="w-full bg-transparent border-b border-grid py-3 text-sm text-dark placeholder-transparent focus:outline-none focus:border-dark peer" id="name" placeholder="Entity Name" type="text"/>
<label className="absolute left-0 -top-3.5 text-[10px] tracking-widest uppercase text-muted transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-muted peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-dark" htmlFor="name">Entity / Family Name</label>
</div>

<div className="relative group">
<input className="w-full bg-transparent border-b border-grid py-3 text-sm text-dark placeholder-transparent focus:outline-none focus:border-dark peer" id="email" placeholder="Email" type="email"/>
<label className="absolute left-0 -top-3.5 text-[10px] tracking-widest uppercase text-muted transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-muted peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-dark" htmlFor="email">Representative Email</label>
</div>

<div className="relative">
<select className="w-full bg-transparent border-b border-grid py-3 text-sm text-dark focus:outline-none focus:border-dark appearance-none cursor-pointer">
<option className="text-muted" disabled="" selected="" value="">Select AUM Range</option>
<option value="1">$25M - $50M</option>
<option value="2">$50M - $100M</option>
<option value="3">$100M+</option>
</select>
<div className="absolute right-0 top-4 pointer-events-none text-dark">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</div>
</div>

<label className="flex items-center gap-4 cursor-pointer mt-4">
<div className="relative">
<input className="sr-only peer" type="checkbox"/>
<div className="w-8 h-4 bg-grid rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-dark"></div>
</div>
<span className="text-[10px] tracking-widest uppercase text-muted">I represent an accredited entity</span>
</label>
<button className="w-full py-4 bg-dark text-white text-xs tracking-widest uppercase hover:bg-black transition-colors mt-4 flex justify-center items-center gap-2" type="button">
                            Initialize Request <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</form>
</div>
</div>
</section>

<footer className="bg-dark text-white flex flex-col relative z-20">
<div className="flex flex-col lg:flex-row border-b border-white/10">
<div className="hidden lg:flex w-16 border-r border-white/10 shrink-0"></div>
<div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8 lg:p-24 gap-12 lg:gap-8">

<div className="flex flex-col">
<div className="flex items-center gap-3 mb-6">
<svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="24"><path d="m2 22 10-20 10 20"></path><path d="M12 11v11"></path></svg>
<span className="text-sm tracking-[0.2em] uppercase font-medium">Æthern</span>
</div>
<p className="text-xs text-muted/60 font-light leading-relaxed max-w-xs mb-8">
                            Autonomous asset allocation for multi-generational wealth preservation.
                        </p>
<div className="text-[10px] font-mono text-muted/40 uppercase tracking-widest mt-auto">
                            System Version 4.2.1
                        </div>
</div>

<div className="flex flex-col gap-4">
<span className="text-[10px] tracking-widest uppercase text-muted/60 font-medium mb-4 block">Platform</span>
<a className="text-sm text-white hover:text-accent transition-colors w-fit" href="#">Philosophy</a>
<a className="text-sm text-white hover:text-accent transition-colors w-fit" href="#">Technology</a>
<a className="text-sm text-white hover:text-accent transition-colors w-fit" href="#">Performance</a>
<a className="text-sm text-white hover:text-accent transition-colors w-fit" href="#">Security</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-[10px] tracking-widest uppercase text-muted/60 font-medium mb-4 block">Legal</span>
<a className="text-sm text-white hover:text-accent transition-colors w-fit" href="#">Terms of Service</a>
<a className="text-sm text-white hover:text-accent transition-colors w-fit" href="#">Privacy Policy</a>
<a className="text-sm text-white hover:text-accent transition-colors w-fit" href="#">Regulatory Disclosures</a>
<a className="text-sm text-white hover:text-accent transition-colors w-fit" href="#">Form ADV</a>
</div>

<div className="flex flex-col gap-4">
<span className="text-[10px] tracking-widest uppercase text-muted/60 font-medium mb-4 block">Office</span>
<address className="text-sm text-white not-italic font-light leading-relaxed mb-4">
                            12 Marina View<br/>
                            Asia Square Tower 2<br/>
                            Singapore 018961
                        </address>
<a className="text-sm text-white hover:text-accent transition-colors font-mono" href="mailto:inquiries@aethern.com">inquiries@aethern.com</a>
</div>
</div>
</div>
<div className="w-full py-6 flex items-center justify-center text-[9px] tracking-widest uppercase text-muted/40 font-medium">
                © 2024 Æthern Advisor LLC. All rights reserved.
            </div>
</footer>
</div>


    </>
  );
}
