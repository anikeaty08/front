import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
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

        // Smooth Scroll Function for Navigation
        function scrollToSection(id) {
            const element = document.getElementById(id);
            if (element) {
                // Adjust for sticky header
                const offset = 80; 
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = element.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }

        // Intersection Observer for Timeline Cards Animation
        document.addEventListener('DOMContentLoaded', () => {
            const cards = document.querySelectorAll('.timeline-card-wrapper');
            
            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -100px 0px', // Trigger slightly before it comes fully into view
                threshold: 0.1
            };

            const cardObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Add classes to fade in and move up
                        entry.target.classList.remove('opacity-0', 'translate-y-8');
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        // Unobserve after animating once to keep it visible
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            cards.forEach(card => {
                cardObserver.observe(card);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">

<div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">

<div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-[#117040]/[0.03] rounded-full blur-3xl mix-blend-multiply"></div>
<div className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] bg-[#117040]/[0.02] rounded-full blur-3xl mix-blend-multiply"></div>

<div className="hidden lg:block absolute right-[5%] top-[20%] w-64 h-[60%] opacity-80">
<svg fill="none" height="100%" preserveaspectratio="none" viewbox="0 0 100 400" width="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M50 0 C 80 100, 20 200, 50 300 C 80 400, 50 400, 50 400" fill="none" stroke="#d6d3d1" strokeWidth="1"></path>

<circle cx="61" cy="80" fill="#a8a29e" r="3"></circle>
<circle cx="36" cy="180" fill="#a8a29e" r="3"></circle>
<circle cx="58" cy="280" fill="#a8a29e" r="3"></circle>
</svg>

<div className="absolute top-[15%] left-[-40%] glass-card rounded-xl p-3 pr-8 flex items-center gap-3 animate-float">
<div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center border border-stone-200">
<i className="w-4 h-4 text-stone-600" data-lucide="file-text" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-xs text-stone-500 font-medium uppercase tracking-widest mb-0.5">Featured Guide</p>
<p className="text-sm font-medium text-stone-900">Visa &amp; Arrival Masterclass</p>
</div>
</div>
</div>
</div>

<div className="max-w-3xl w-full text-center relative z-10 flex flex-col items-center">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-200 bg-white/50 backdrop-blur-sm mb-8 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-[#117040] animate-pulse"></span>
<span className="text-xs font-medium text-stone-600 uppercase tracking-widest">For INSEAD MIM &amp; MBA · 2026+ Cohorts</span>
</div>

<h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-stone-900 leading-[1.1] mb-6">
                Your One-Page <br/>
<span className="text-[#117040] italic pr-1">INSEAD</span> Roadmap
            </h1>
<p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed mb-10">
                From visas to alumni stories – battle-tested guides mapping your journey through Fontainebleau &amp; Singapore. Built for survival, optimized for the glow-up.
            </p>

<div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full sm:w-auto">
<button className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#117040] hover:bg-[#0d5933] text-white font-medium text-base transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group" onclick="document.getElementById('timeline-start').scrollIntoView({behavior: 'smooth'})">
                    Start at the Beginning
                    <i className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" data-lucide="arrow-down" strokeWidth="1.5"></i>
</button>
<a className="w-full sm:w-auto px-6 py-3 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-medium text-base transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2" href="#directory">
<i className="w-4 h-4" data-lucide="layout-list" strokeWidth="1.5"></i>
                    All Posts
                </a>
<button className="w-full sm:w-auto px-6 py-3 rounded-full bg-white border border-stone-200 hover:bg-stone-50 text-stone-700 font-medium text-base transition-all duration-300 shadow-sm flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="search" strokeWidth="1.5"></i>
                    Search
                </button>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
<span className="text-xs font-medium text-stone-500 uppercase tracking-widest">Scroll to begin</span>
<div className="w-5 h-8 rounded-full border border-stone-400 flex justify-center p-1">
<div className="w-1 h-2 bg-stone-400 rounded-full animate-bounce"></div>
</div>
</div>

<div className="hidden lg:flex absolute bottom-0 translate-y-1/2 w-full justify-center gap-6 px-8 opacity-40 pointer-events-none scale-90 origin-bottom">
<div className="w-80 h-48 bg-white border border-stone-200 rounded-t-2xl shadow-xl flex flex-col p-6">
<p className="text-xs text-stone-500 mb-2">Guide 01 / Finding Housing</p>
<div className="w-3/4 h-4 bg-stone-100 rounded mb-2"></div>
<div className="w-1/2 h-4 bg-stone-100 rounded"></div>
</div>
<div className="w-80 h-56 bg-white border border-stone-200 rounded-t-2xl shadow-xl flex flex-col p-6 -translate-y-4">
<p className="text-xs text-stone-500 mb-2">Guide 02 / The Fonty-SG Connection</p>
<div className="w-full h-4 bg-stone-100 rounded mb-2"></div>
<div className="w-2/3 h-4 bg-stone-100 rounded"></div>
</div>
<div className="w-80 h-48 bg-white border border-stone-200 rounded-t-2xl shadow-xl flex flex-col p-6">
<p className="text-xs text-stone-500 mb-2">Core Skills</p>
<div className="w-4/5 h-4 bg-stone-100 rounded mb-2"></div>
<div className="w-1/3 h-4 bg-stone-100 rounded"></div>
</div>
</div>
</section>

<nav className="hidden md:flex sticky top-0 z-50 w-full glass-nav px-6 py-4 justify-between items-center shadow-sm">
<div className="flex items-center gap-3">
<span className="text-sm font-medium text-stone-500">Browse by theme</span>
<div className="h-4 w-px bg-stone-300"></div>
</div>
<div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
<button className="px-4 py-1.5 rounded-full text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-200/50 transition-colors whitespace-nowrap" onclick="scrollToSection('pre-arrival')">Pre-Arrival</button>
<button className="px-4 py-1.5 rounded-full text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-200/50 transition-colors whitespace-nowrap" onclick="scrollToSection('academics')">Academics</button>
<button className="px-4 py-1.5 rounded-full text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-200/50 transition-colors whitespace-nowrap" onclick="scrollToSection('campus-life')">Campus Life</button>
<button className="px-4 py-1.5 rounded-full text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-200/50 transition-colors whitespace-nowrap" onclick="scrollToSection('career')">Career &amp; Beyond</button>
</div>
</nav>

<section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pb-48" id="timeline-start">

<div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-stone-300 to-transparent -translate-x-1/2 z-0"></div>
<div className="space-y-16 md:space-y-32 relative z-10">

<div className="scroll-mt-32" id="pre-arrival">

<div className="flex justify-start md:justify-center mb-12 md:mb-20">
<div className="bg-[#f6f5f0] px-4 py-1 border border-stone-200 rounded-full shadow-sm">
<h2 className="text-sm font-semibold tracking-widest uppercase text-stone-500">Pre-Arrival Phase</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">

<div className="timeline-card-wrapper opacity-0 translate-y-8 md:col-start-1 md:col-end-2 md:justify-self-end w-full md:w-[400px] relative pl-12 md:pl-0 md:pr-12 group">

<div className="absolute left-[-24px] md:left-auto md:right-[-24px] top-6 md:top-8 w-12 h-px bg-stone-300 hidden md:block"></div>
<div className="absolute left-[-2px] md:left-auto md:-right-[2px] top-6 md:top-8 w-4 h-4 rounded-full bg-white border-2 border-[#117040] shadow-[0_0_10px_rgba(17,112,64,0.3)] transform -translate-x-1/2 md:translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:scale-125 z-10"></div>

<a className="block glass-card rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-stone-300 text-left" href="#">
<div className="w-10 h-10 rounded-full bg-[#117040]/10 text-[#117040] flex items-center justify-center text-xl mb-4">🛂</div>
<p className="text-xs text-[#117040] font-semibold tracking-widest uppercase mb-2">Guide 01</p>
<h3 className="text-xl md:text-2xl font-serif font-medium tracking-tight mb-3 text-stone-900 group-hover:text-[#117040] transition-colors">Visas &amp; Admin Setup</h3>
<p className="text-base text-stone-600 leading-relaxed mb-6 line-clamp-2 md:line-clamp-none">
                                Navigating French bureaucracy and Singapore passes. Don't let paperwork delay your first day on campus.
                            </p>

<div className="hidden md:flex flex-wrap gap-2 mb-6">
<span className="px-2.5 py-1 rounded-md bg-stone-100 text-xs font-medium text-stone-500">Student Visa</span>
<span className="px-2.5 py-1 rounded-md bg-stone-100 text-xs font-medium text-stone-500">Admin</span>
</div>
<span className="inline-flex items-center text-sm font-semibold text-[#117040]">
                                Read Guide <i className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="2"></i>
</span>
</a>
</div>

<div className="timeline-card-wrapper opacity-0 translate-y-8 md:col-start-2 md:col-end-3 md:justify-self-start w-full md:w-[400px] relative pl-12 md:pl-12 md:mt-32 group">

<div className="absolute left-[-24px] md:left-0 top-6 md:top-8 w-12 h-px bg-stone-300 hidden md:block transform -translate-x-full"></div>
<div className="absolute left-[-2px] md:left-0 top-6 md:top-8 w-4 h-4 rounded-full bg-white border-2 border-stone-300 transition-colors duration-300 group-hover:border-[#117040] transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-125 z-10"></div>
<a className="block glass-card rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-stone-300 text-left" href="#">
<div className="w-10 h-10 rounded-full bg-stone-100 text-stone-700 flex items-center justify-center text-xl mb-4">🏠</div>
<p className="text-xs text-stone-500 font-semibold tracking-widest uppercase mb-2">Guide 02</p>
<h3 className="text-xl md:text-2xl font-serif font-medium tracking-tight mb-3 text-stone-900 group-hover:text-[#117040] transition-colors">Finding Housing</h3>
<p className="text-base text-stone-600 leading-relaxed mb-6 line-clamp-2 md:line-clamp-none">
                                Chateaus vs. Studios in Fonty, and Condo hunting in SG. Where to live based on your budget and social battery.
                            </p>
<div className="hidden md:flex flex-wrap gap-2 mb-6">
<span className="px-2.5 py-1 rounded-md bg-stone-100 text-xs font-medium text-stone-500">Fontainebleau</span>
<span className="px-2.5 py-1 rounded-md bg-stone-100 text-xs font-medium text-stone-500">Singapore</span>
</div>
<span className="inline-flex items-center text-sm font-semibold text-stone-900 group-hover:text-[#117040] transition-colors">
                                Read Guide <i className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="2"></i>
</span>
</a>
</div>
</div>
</div>

<div className="scroll-mt-32 pt-8 md:pt-16" id="academics">
<div className="flex justify-start md:justify-center mb-12 md:mb-20">
<div className="bg-[#f6f5f0] px-4 py-1 border border-stone-200 rounded-full shadow-sm">
<h2 className="text-sm font-semibold tracking-widest uppercase text-stone-500">Academics &amp; Core</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">

<div className="timeline-card-wrapper opacity-0 translate-y-8 md:col-start-1 md:col-end-2 md:justify-self-end w-full md:w-[400px] relative pl-12 md:pl-0 md:pr-12 group">
<div className="absolute left-[-2px] md:left-auto md:-right-[2px] top-6 md:top-8 w-4 h-4 rounded-full bg-white border-2 border-stone-300 transition-colors duration-300 group-hover:border-[#117040] transform -translate-x-1/2 md:translate-x-1/2 -translate-y-1/2 group-hover:scale-125 z-10"></div>
<a className="block glass-card rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-stone-300 text-left" href="#">
<div className="w-10 h-10 rounded-full bg-stone-100 text-stone-700 flex items-center justify-center text-xl mb-4">📊</div>
<p className="text-xs text-stone-500 font-semibold tracking-widest uppercase mb-2">Guide 10</p>
<h3 className="text-xl md:text-2xl font-serif font-medium tracking-tight mb-3 text-stone-900 group-hover:text-[#117040] transition-colors">Surviving Core Skills</h3>
<p className="text-base text-stone-600 leading-relaxed mb-6 line-clamp-2 md:line-clamp-none">
                                How to tackle Finance and Stats without a quant background. Group work dynamics and passing exams efficiently.
                            </p>
<span className="inline-flex items-center text-sm font-semibold text-stone-900 group-hover:text-[#117040] transition-colors">
                                Read Guide <i className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="2"></i>
</span>
</a>
</div>

<div className="timeline-card-wrapper opacity-0 translate-y-8 md:col-start-2 md:col-end-3 md:justify-self-start w-full md:w-[400px] relative pl-12 md:pl-12 md:mt-32 group">
<div className="absolute left-[-2px] md:left-0 top-6 md:top-8 w-4 h-4 rounded-full bg-white border-2 border-stone-300 transition-colors duration-300 group-hover:border-[#117040] transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-125 z-10"></div>
<a className="block glass-card rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-stone-300 text-left" href="#">
<div className="w-10 h-10 rounded-full bg-stone-100 text-stone-700 flex items-center justify-center text-xl mb-4">🎯</div>
<p className="text-xs text-stone-500 font-semibold tracking-widest uppercase mb-2">Guide 11</p>
<h3 className="text-xl md:text-2xl font-serif font-medium tracking-tight mb-3 text-stone-900 group-hover:text-[#117040] transition-colors">Bidding Strategy</h3>
<p className="text-base text-stone-600 leading-relaxed mb-6 line-clamp-2 md:line-clamp-none">
                                The point allocation system explained. Master the art of securing your top-choice electives without burning points.
                            </p>
<div className="hidden md:flex flex-wrap gap-2 mb-6">
<span className="px-2.5 py-1 rounded-md bg-stone-100 text-xs font-medium text-stone-500">Electives</span>
</div>
<span className="inline-flex items-center text-sm font-semibold text-stone-900 group-hover:text-[#117040] transition-colors">
                                Read Guide <i className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="2"></i>
</span>
</a>
</div>
</div>
</div>

<div className="scroll-mt-32 pt-8 md:pt-16" id="campus-life">
<div className="flex justify-start md:justify-center mb-12 md:mb-20">
<div className="bg-[#f6f5f0] px-4 py-1 border border-stone-200 rounded-full shadow-sm">
<h2 className="text-sm font-semibold tracking-widest uppercase text-stone-500">Campus Life</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">

<div className="timeline-card-wrapper opacity-0 translate-y-8 md:col-start-1 md:col-end-2 md:justify-self-end w-full md:w-[400px] relative pl-12 md:pl-0 md:pr-12 group">
<div className="absolute left-[-2px] md:left-auto md:-right-[2px] top-6 md:top-8 w-4 h-4 rounded-full bg-white border-2 border-stone-300 transition-colors duration-300 group-hover:border-[#117040] transform -translate-x-1/2 md:translate-x-1/2 -translate-y-1/2 group-hover:scale-125 z-10"></div>
<a className="block glass-card rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-stone-300 text-left" href="#">
<div className="w-10 h-10 rounded-full bg-stone-100 text-stone-700 flex items-center justify-center text-xl mb-4">✈️</div>
<p className="text-xs text-stone-500 font-semibold tracking-widest uppercase mb-2">Guide 14</p>
<h3 className="text-xl md:text-2xl font-serif font-medium tracking-tight mb-3 text-stone-900 group-hover:text-[#117040] transition-colors">The Fonty-SG Connection</h3>
<p className="text-base text-stone-600 leading-relaxed mb-6 line-clamp-2 md:line-clamp-none">
                                How to seamlessly transition between campuses. Packing, storage, and adapting to completely different social scenes.
                            </p>
<span className="inline-flex items-center text-sm font-semibold text-stone-900 group-hover:text-[#117040] transition-colors">
                                Read Guide <i className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="2"></i>
</span>
</a>
</div>

<div className="timeline-card-wrapper opacity-0 translate-y-8 md:col-start-2 md:col-end-3 md:justify-self-start w-full md:w-[400px] relative pl-12 md:pl-12 md:mt-32 group">
<div className="absolute left-[-2px] md:left-0 top-6 md:top-8 w-4 h-4 rounded-full bg-white border-2 border-stone-300 transition-colors duration-300 group-hover:border-[#117040] transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-125 z-10"></div>
<a className="block glass-card rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-stone-300 text-left" href="#">
<div className="w-10 h-10 rounded-full bg-stone-100 text-stone-700 flex items-center justify-center text-xl mb-4">🌍</div>
<p className="text-xs text-stone-500 font-semibold tracking-widest uppercase mb-2">Guide 13</p>
<h3 className="text-xl md:text-2xl font-serif font-medium tracking-tight mb-3 text-stone-900 group-hover:text-[#117040] transition-colors">Travel &amp; Weekends</h3>
<p className="text-base text-stone-600 leading-relaxed mb-6 line-clamp-2 md:line-clamp-none">
                                Maximizing breaks without burning out or going broke. The unofficial itinerary for ski trips and Bali escapes.
                            </p>
<span className="inline-flex items-center text-sm font-semibold text-stone-900 group-hover:text-[#117040] transition-colors">
                                Read Guide <i className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="2"></i>
</span>
</a>
</div>
</div>
</div>

<div className="scroll-mt-32 pt-8 md:pt-16 pb-12" id="career">
<div className="flex justify-start md:justify-center mb-12 md:mb-20">
<div className="bg-[#f6f5f0] px-4 py-1 border border-stone-200 rounded-full shadow-sm">
<h2 className="text-sm font-semibold tracking-widest uppercase text-stone-500">Career &amp; Long-Term</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">

<div className="timeline-card-wrapper opacity-0 translate-y-8 md:col-start-1 md:col-end-2 md:justify-self-end w-full md:w-[400px] relative pl-12 md:pl-0 md:pr-12 group">
<div className="absolute left-[-2px] md:left-auto md:-right-[2px] top-6 md:top-8 w-4 h-4 rounded-full bg-white border-2 border-stone-300 transition-colors duration-300 group-hover:border-[#117040] transform -translate-x-1/2 md:translate-x-1/2 -translate-y-1/2 group-hover:scale-125 z-10"></div>
<a className="block glass-card rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-stone-300 text-left border-l-4 md:border-l border-l-[#117040]" href="#">
<div className="w-10 h-10 rounded-full bg-[#117040]/10 text-[#117040] flex items-center justify-center text-xl mb-4">💼</div>
<p className="text-xs text-stone-500 font-semibold tracking-widest uppercase mb-2">Guide 06</p>
<h3 className="text-xl md:text-2xl font-serif font-medium tracking-tight mb-3 text-stone-900 group-hover:text-[#117040] transition-colors">Career Placement</h3>
<p className="text-base text-stone-600 leading-relaxed mb-6 line-clamp-2 md:line-clamp-none">
                                Navigating consulting case prep, industry recruiting timelines, and leveraging the CDC effectively.
                            </p>
<div className="hidden md:flex flex-wrap gap-2 mb-6">
<span className="px-2.5 py-1 rounded-md bg-stone-100 text-xs font-medium text-stone-500">Consulting</span>
<span className="px-2.5 py-1 rounded-md bg-stone-100 text-xs font-medium text-stone-500">Tech</span>
</div>
<span className="inline-flex items-center text-sm font-semibold text-[#117040]">
                                Read Guide <i className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="2"></i>
</span>
</a>
</div>

<div className="timeline-card-wrapper opacity-0 translate-y-8 md:col-start-2 md:col-end-3 md:justify-self-start w-full md:w-[400px] relative pl-12 md:pl-12 md:mt-32 group">

<div className="absolute left-[-2px] md:left-0 top-6 md:top-8 w-5 h-5 rounded-full bg-[#117040] shadow-[0_0_15px_rgba(17,112,64,0.5)] transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
<a className="block glass-card rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-stone-300 text-left bg-gradient-to-br from-white to-[#117040]/5" href="#">
<div className="w-10 h-10 rounded-full bg-stone-100 text-stone-700 flex items-center justify-center text-xl mb-4">🤝</div>
<p className="text-xs text-stone-500 font-semibold tracking-widest uppercase mb-2">Guide 15</p>
<h3 className="text-xl md:text-2xl font-serif font-medium tracking-tight mb-3 text-stone-900 group-hover:text-[#117040] transition-colors">Alumni Network Glow-Up</h3>
<p className="text-base text-stone-600 leading-relaxed mb-6 line-clamp-2 md:line-clamp-none">
                                How to reach out, maintain connections post-graduation, and utilize the global mafia for lifelong ROI.
                            </p>
<span className="inline-flex items-center text-sm font-semibold text-[#117040]">
                                Read Guide <i className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="2"></i>
</span>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-stone-200 bg-white pt-16 pb-8 relative overflow-hidden">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[300px] bg-[#117040]/5 blur-[100px] rounded-[100%] pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
<div className="text-center md:text-left">
<h4 className="font-serif text-2xl font-medium text-stone-900 tracking-tight mb-2 italic">INSEAD Survival Guide</h4>
<p className="text-base text-stone-500">Built by an alum for future cohorts.</p>
</div>
<div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#">About</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#">Contact</a>
<button className="text-sm font-medium text-stone-600 hover:text-[#117040] transition-colors" onclick="document.getElementById('timeline-start').scrollIntoView({behavior: 'smooth'})">Start from Pre-Arrival</button>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#directory">Full Directory</a>
</div>
</div>
<div className="pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-stone-400">
                    Not official INSEAD content. Personal guide only.
                </p>
<div className="flex items-center gap-4 text-stone-400">
<i className="w-4 h-4 hover:text-stone-600 cursor-pointer transition-colors" data-lucide="twitter" strokeWidth="1.5"></i>
<i className="w-4 h-4 hover:text-stone-600 cursor-pointer transition-colors" data-lucide="linkedin" strokeWidth="1.5"></i>
</div>
</div>
</div>
</footer>


    </>
  );
}
