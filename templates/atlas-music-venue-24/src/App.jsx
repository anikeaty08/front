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



tailwind.config = {
theme: {
extend: {
animation: {
'fade-in-up': 'fadeInUp 0.8s ease-out both',
'fade-in': 'fadeIn 1.2s ease-out both',
'marquee': 'marquee 25s linear infinite',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Initialize Lucide icons
      lucide.createIcons();
    
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
      

<header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-zinc-900">
<div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex flex-col hover:opacity-80 transition-opacity duration-300" href="#">
<span className="text-4xl font-semibold tracking-tight lowercase leading-none">
            atlas
          </span>
<span className="text-[0.65rem] text-zinc-500 tracking-widest uppercase mt-1">
            53.56343° N, 0.03032° W
          </span>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-300" href="#">
            What's On
          </a>
<a className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-300" href="#">
            Atlas Sessions
          </a>
<a className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-300" href="#">
            Hire Atlas
          </a>
<a className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-300" href="#">
            Coffee &amp; Bar
          </a>
<a className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-300" href="#">
            Studios
          </a>
<a className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-300" href="#">
            Visit
          </a>
<a className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-300" href="#">
            About
          </a>
</nav>

<a className="hidden md:flex items-center gap-2 border border-zinc-700 px-5 py-2.5 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors group duration-300" href="#">
          Buy Tickets
          <i className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>

<button className="lg:hidden text-zinc-400 hover:text-white">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</header>

<section className="relative h-[85vh] min-h-[600px] flex items-center border-b border-zinc-900">

<div className="absolute inset-0 z-0">
<img alt="Concert Crowd" className="w-full h-full object-cover object-center opacity-30 grayscale mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
</div>
<div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full">
<div className="max-w-2xl">
<p className="text-sm text-zinc-400 uppercase tracking-widest mb-6 animate-fade-in-up">
            Cleethorpes Seafront
          </p>
<h1 className="text-6xl md:text-8xl lg:text-[7rem] font-semibold tracking-tight uppercase leading-[0.85] mb-8 animate-fade-in-up [animation-delay:100ms]">
            Grassroots
            <br/>
            Music
            <br/>
            By The Sea.
          </h1>
<p className="text-lg text-zinc-300 max-w-md mb-10 leading-relaxed animate-fade-in-up [animation-delay:200ms]">
            Independent live music venue, coffee shop, bar and creative space on
            North Promenade.
            <br/>
            Built for original music and our community.
          </p>
<div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:300ms]">
<a className="inline-flex items-center justify-between border border-white bg-white text-black px-6 py-3.5 text-sm uppercase tracking-widest font-medium hover:bg-transparent hover:text-white transition-colors w-full sm:w-auto min-w-[200px] group duration-300" href="#">
              What's On
              <i className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="inline-flex items-center justify-between border border-zinc-700 px-6 py-3.5 text-sm uppercase tracking-widest font-medium hover:border-white transition-colors w-full sm:w-auto min-w-[200px] group duration-300" href="#">
              Hire Atlas
              <i className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>

<div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 z-20">
<a className="text-zinc-400 hover:text-white transition-colors hover:scale-110 hover:-translate-y-0.5 duration-300 inline-block" href="#">
<i className="w-6 h-6" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="text-zinc-400 hover:text-white transition-colors hover:scale-110 hover:-translate-y-0.5 duration-300 inline-block" href="#">
<i className="w-6 h-6" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="text-zinc-400 hover:text-white transition-colors hover:scale-110 hover:-translate-y-0.5 duration-300 inline-block" href="#">
<i className="w-6 h-6" data-lucide="youtube" strokeWidth="1.5"></i>
</a>
<a className="text-zinc-400 hover:text-white transition-colors hover:scale-110 hover:-translate-y-0.5 duration-300 inline-block" href="#">
<i className="w-6 h-6" data-lucide="music-2" strokeWidth="1.5"></i>
</a>
</div>

<div className="absolute right-[10%] top-1/3 opacity-20 pointer-events-none hidden md:block">
<div className="text-[12rem] font-semibold tracking-tight lowercase leading-none">
          atlas
        </div>
<div className="text-sm tracking-widest uppercase mt-2 ml-4">
          53.56343° N, 0.03032° W
        </div>
</div>
</section>

<div className="border-b border-zinc-900 overflow-hidden flex whitespace-nowrap py-4">
<div className="animate-marquee flex gap-8 text-xs text-zinc-500 uppercase tracking-widest">
<span>Live Music</span>
<span className="text-zinc-500">•</span>
<span>Original Artists</span>
<span className="text-zinc-500">•</span>
<span>Atlas Sessions</span>
<span className="text-zinc-500">•</span>
<span>Coffee By Day</span>
<span className="text-zinc-500">•</span>
<span>Bar By Night</span>
<span className="text-zinc-500">•</span>
<span>187 North Promenade, Cleethorpes</span>
<span className="text-zinc-500">•</span>
<span>Live Music</span>
<span className="text-zinc-500">•</span>
<span>Original Artists</span>
<span className="text-zinc-500">•</span>
<span>Atlas Sessions</span>
<span className="text-zinc-500">•</span>
<span>Coffee By Day</span>
</div>
</div>

<section className="max-w-[1400px] mx-auto px-6 py-20 w-full">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-zinc-900 pb-4 animate-fade-in-up">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight uppercase">
          Upcoming Events
        </h2>
<a className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white flex items-center gap-2 transition-colors group duration-300" href="#">
          View Full Listing
          <i className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-zinc-900 bg-zinc-950/50">

<div className="flex border-b lg:border-b-0 lg:border-r border-zinc-900 group hover:bg-zinc-900/50 transition-colors relative overflow-hidden animate-fade-in-up [animation-delay:100ms]">
<div className="absolute right-0 top-0 w-3/4 h-full bg-[url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-10 mix-blend-screen group-hover:opacity-20 transition-opacity"></div>
<div className="flex flex-col items-center p-6 border-r border-zinc-900 w-24 shrink-0 bg-black relative z-10">
<span className="text-xs text-zinc-500 uppercase tracking-widest mb-1">
              Sat
            </span>
<span className="text-4xl font-semibold tracking-tight">24</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest mt-1">
              May
            </span>
</div>
<div className="p-6 flex flex-col justify-between grow relative z-10 min-h-[220px]">
<div>
<h3 className="text-lg font-semibold tracking-tight uppercase mb-2 leading-tight">
                Open Mic
                <br/>
                + House Band
              </h3>
<p className="text-sm text-zinc-400 leading-snug">
                18+ / 14+ with adult
                <br/>
                Backline provided
                <br/>
                Downstairs
              </p>
</div>
<div className="mt-6 flex flex-col gap-3">
<span className="text-xs text-zinc-500 uppercase tracking-widest">
                7:30PM Doors
              </span>
<a className="text-xs uppercase tracking-widest font-medium flex items-center gap-2 hover:text-zinc-300" href="#">
                Info
                <i className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>

<div className="flex border-b lg:border-b-0 lg:border-r border-zinc-900 group hover:bg-zinc-900/50 transition-colors relative overflow-hidden animate-fade-in-up [animation-delay:200ms]">
<div className="absolute right-0 top-0 w-3/4 h-full bg-[url('https://images.unsplash.com/photo-1470229722913-7c090be020ce?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-10 mix-blend-screen group-hover:opacity-20 transition-opacity"></div>
<div className="flex flex-col items-center p-6 border-r border-zinc-900 w-24 shrink-0 bg-black relative z-10">
<span className="text-xs text-zinc-500 uppercase tracking-widest mb-1">
              Thu
            </span>
<span className="text-4xl font-semibold tracking-tight">05</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest mt-1">
              Jun
            </span>
</div>
<div className="p-6 flex flex-col justify-between grow relative z-10 min-h-[220px]">
<div>
<h3 className="text-lg font-semibold tracking-tight uppercase mb-2 leading-tight">
                Good Friday in
                <br/>
                Costa Del
                <br/>
                Cleethorpes
              </h3>
<p className="text-sm text-zinc-400 leading-snug">
                Wheelhouse
                <br/>
                The Blundells
                <br/>
                Elson + more
              </p>
</div>
<div className="mt-6 flex flex-col gap-3">
<span className="text-xs text-zinc-500 uppercase tracking-widest">
                7:00PM Doors
              </span>
<a className="text-xs uppercase tracking-widest font-medium flex items-center gap-2 hover:text-zinc-300" href="#">
                Tickets
                <i className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>

<div className="flex border-b lg:border-b-0 lg:border-r border-zinc-900 group hover:bg-zinc-900/50 transition-colors relative overflow-hidden animate-fade-in-up [animation-delay:300ms]">
<div className="absolute right-0 top-0 w-3/4 h-full bg-[url('https://images.unsplash.com/photo-1598387181032-a3103ea27189?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-10 mix-blend-screen group-hover:opacity-20 transition-opacity"></div>
<div className="flex flex-col items-center p-6 border-r border-zinc-900 w-24 shrink-0 bg-black relative z-10">
<span className="text-xs text-zinc-500 uppercase tracking-widest mb-1">
              Sat
            </span>
<span className="text-4xl font-semibold tracking-tight">14</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest mt-1">
              Jun
            </span>
</div>
<div className="p-6 flex flex-col justify-between grow relative z-10 min-h-[220px]">
<div>
<h3 className="text-lg font-semibold tracking-tight uppercase mb-2 leading-tight">
                Atlas
                <br/>
                Sessions
                <br/>
                Live Recording
              </h3>
<p className="text-sm text-zinc-400 leading-snug">
                Filmed, multitracked
                <br/>
                and mixed live
                <br/>
                from Atlas
              </p>
</div>
<div className="mt-6 flex flex-col gap-3">
<span className="text-xs text-zinc-500 uppercase tracking-widest">
                7:30PM Doors
              </span>
<a className="text-xs uppercase tracking-widest font-medium flex items-center gap-2 hover:text-zinc-300" href="#">
                Watch
                <i className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>

<div className="flex group hover:bg-zinc-900/50 transition-colors relative overflow-hidden animate-fade-in-up [animation-delay:400ms]">
<div className="absolute right-0 top-0 w-3/4 h-full bg-[url('https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-10 mix-blend-screen group-hover:opacity-20 transition-opacity"></div>
<div className="flex flex-col items-center p-6 border-r border-zinc-900 w-24 shrink-0 bg-black relative z-10">
<span className="text-xs text-zinc-500 uppercase tracking-widest mb-1">
              Fri
            </span>
<span className="text-4xl font-semibold tracking-tight">27</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest mt-1">
              Jun
            </span>
</div>
<div className="p-6 flex flex-col justify-between grow relative z-10 min-h-[220px]">
<div>
<h3 className="text-lg font-semibold tracking-tight uppercase mb-2 leading-tight">
                Indie Night
                <br/>
                DJ Set
              </h3>
<p className="text-sm text-zinc-400 leading-snug">
                Indie, Alternative
                <br/>
                &amp; Britpop anthems
                <br/>
                until late
              </p>
</div>
<div className="mt-6 flex flex-col gap-3">
<span className="text-xs text-zinc-500 uppercase tracking-widest">
                10:00PM - LATE
              </span>
<a className="text-xs uppercase tracking-widest font-medium flex items-center gap-2 hover:text-zinc-300" href="#">
                Tickets
                <i className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-6 pb-20 w-full">
<div className="grid grid-cols-1 md:grid-cols-3 border border-zinc-900 bg-zinc-950/30">

<div className="relative flex flex-col items-center text-center p-12 md:p-16 border-b md:border-b-0 md:border-r border-zinc-900 group overflow-hidden animate-fade-in-up [animation-delay:100ms]">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity grayscale group-hover:opacity-20 transition-opacity"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
<div className="w-16 h-16 rounded-full border border-zinc-700 flex items-center justify-center mb-8 relative z-10 bg-black/50 backdrop-blur-sm group-hover:scale-110 group-hover:border-white transition-all duration-500">
<i className="w-6 h-6 text-white" data-lucide="mic" strokeWidth="1.5"></i>
</div>
<h2 className="text-3xl font-semibold tracking-tight uppercase mb-2 relative z-10">
            Live Room
          </h2>
<p className="text-xs text-zinc-400 uppercase tracking-widest mb-6 relative z-10">
            100 Capacity Venue
          </p>
<p className="text-lg text-zinc-300 mb-10 max-w-[280px] relative z-10">
            Professional PA, stage, lights and backline. Perfect for gigs, club
            nights, rehearsals and community events.
          </p>
<a className="mt-auto text-xs uppercase tracking-widest font-medium flex items-center gap-2 hover:text-zinc-300 relative z-10" href="#">
            Hire The Venue
            <i className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="relative flex flex-col items-center text-center p-12 md:p-16 border-b md:border-b-0 md:border-r border-zinc-900 group overflow-hidden animate-fade-in-up [animation-delay:200ms]">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity grayscale group-hover:opacity-20 transition-opacity"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
<div className="w-16 h-16 rounded-full border border-zinc-700 flex items-center justify-center mb-8 relative z-10 bg-black/50 backdrop-blur-sm group-hover:scale-110 group-hover:border-white transition-all duration-500">
<i className="w-6 h-6 text-white" data-lucide="coffee" strokeWidth="1.5"></i>
</div>
<h2 className="text-3xl font-semibold tracking-tight uppercase mb-2 relative z-10">
            Coffee &amp; Bar
          </h2>
<p className="text-xs text-zinc-400 uppercase tracking-widest mb-6 relative z-10">
            Day To Night
          </p>
<p className="text-lg text-zinc-300 mb-10 max-w-[280px] relative z-10">
            Great coffee by day, cold beers, cocktails and good vibes by night.
            Proper music culture, always.
          </p>
<a className="mt-auto text-xs uppercase tracking-widest font-medium flex items-center gap-2 hover:text-zinc-300 relative z-10" href="#">
            View Menu
            <i className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="relative flex flex-col items-center text-center p-12 md:p-16 group overflow-hidden animate-fade-in-up [animation-delay:300ms]">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity grayscale group-hover:opacity-20 transition-opacity"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
<div className="w-16 h-16 rounded-full border border-zinc-700 flex items-center justify-center mb-8 relative z-10 bg-black/50 backdrop-blur-sm group-hover:scale-110 group-hover:border-white transition-all duration-500">
<i className="w-6 h-6 text-white" data-lucide="audio-lines" strokeWidth="1.5"></i>
</div>
<h2 className="text-3xl font-semibold tracking-tight uppercase mb-2 relative z-10">
            Atlas Sessions
          </h2>
<p className="text-xs text-zinc-400 uppercase tracking-widest mb-6 relative z-10">
            Record. Film. Release.
          </p>
<p className="text-lg text-zinc-300 mb-10 max-w-[280px] relative z-10">
            Live session packages for artists and bands. Multi-track recording,
            filmed live, mixed and mastered.
          </p>
<a className="mt-auto text-xs uppercase tracking-widest font-medium flex items-center gap-2 hover:text-zinc-300 relative z-10" href="#">
            Find Out More
            <i className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-6 pb-24 w-full">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-zinc-900 pb-4">
<h2 className="text-xl md:text-2xl font-semibold tracking-tight uppercase">
          @ATLASLIVECLEE
        </h2>
<a className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white flex items-center gap-2 transition-colors group duration-300" href="#">
          Follow On Instagram
          <i className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-5 gap-1">

<a className="relative aspect-square group overflow-hidden bg-zinc-900 block" href="#">
<img alt="Instagram Post" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
<div className="absolute top-4 right-4 bg-black/50 p-1.5 rounded text-white backdrop-blur-sm">
<i className="w-4 h-4" data-lucide="instagram" strokeWidth="1.5"></i>
</div>
<div className="absolute bottom-4 left-4 right-4">
<p className="text-xs font-semibold tracking-tight uppercase leading-tight drop-shadow-md">
              Atlas
              <br/>
              Sessions
              <br/>
              Feat.
              <br/>
              Cassia
            </p>
</div>
</a>

<a className="relative aspect-square group overflow-hidden bg-zinc-900 block" href="#">
<img alt="Instagram Post" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
<div className="absolute top-4 right-4 bg-black/50 p-1.5 rounded text-white backdrop-blur-sm">
<i className="w-4 h-4" data-lucide="instagram" strokeWidth="1.5"></i>
</div>
</a>

<a className="relative aspect-square group overflow-hidden bg-zinc-900 hidden md:block" href="#">
<img alt="Instagram Post" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
<div className="absolute top-4 right-4 bg-black/50 p-1.5 rounded text-white backdrop-blur-sm">
<i className="w-4 h-4" data-lucide="instagram" strokeWidth="1.5"></i>
</div>
</a>

<a className="relative aspect-square group overflow-hidden bg-black border border-zinc-900 block flex items-center justify-center p-6 text-center hover:bg-zinc-950 transition-colors" href="#">
<div className="absolute top-4 right-4 bg-zinc-900 p-1.5 rounded text-white">
<i className="w-4 h-4" data-lucide="instagram" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-sm md:text-base font-semibold tracking-tight uppercase mb-4 leading-tight">
              Good Friday
              <br/>
              In Costa Del
              <br/>
              Cleethorpes
              <br/>
              05.06.25
            </p>
<span className="text-3xl font-semibold tracking-tight lowercase block">
              atlas
            </span>
</div>
</a>

<a className="relative aspect-square group overflow-hidden bg-zinc-900 hidden md:block" href="#">
<img alt="Instagram Post" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1520110120835-c96534a4c984?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
<div className="absolute top-4 right-4 bg-black/50 p-1.5 rounded text-white backdrop-blur-sm">
<i className="w-4 h-4" data-lucide="instagram" strokeWidth="1.5"></i>
</div>
</a>
</div>
</section>

<footer className="border-t border-zinc-900 pt-20 pb-8 bg-black mt-auto">
<div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

<div className="lg:col-span-3">
<a className="flex flex-col mb-8 inline-block hover:opacity-80 transition-opacity duration-300" href="#">
<span className="text-5xl font-semibold tracking-tight lowercase leading-none">
              atlas
            </span>
<span className="text-[0.65rem] text-zinc-500 tracking-widest uppercase mt-2">
              53.56343° N, 0.03032° W
            </span>
</a>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors hover:scale-110 hover:-translate-y-0.5 duration-300 inline-block" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="text-zinc-500 hover:text-white transition-colors hover:scale-110 hover:-translate-y-0.5 duration-300 inline-block" href="#">
<i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="text-zinc-500 hover:text-white transition-colors hover:scale-110 hover:-translate-y-0.5 duration-300 inline-block" href="#">
<i className="w-5 h-5" data-lucide="youtube" strokeWidth="1.5"></i>
</a>
<a className="text-zinc-500 hover:text-white transition-colors hover:scale-110 hover:-translate-y-0.5 duration-300 inline-block" href="#">
<i className="w-5 h-5" data-lucide="music-2" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="lg:col-span-3">
<h4 className="text-sm font-semibold tracking-tight uppercase mb-4">
            More Than A Venue.
            <br/>
            It's A Community.
          </h4>
<p className="text-sm text-zinc-400 mb-6 leading-relaxed max-w-[280px]">
            Atlas exists to support artists, build a creative community and give
            people a space to connect through music, art and culture.
          </p>
<a className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white flex items-center gap-2 transition-colors" href="#">
            Our Story
            <i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="lg:col-span-2">
<h4 className="text-sm font-semibold tracking-tight uppercase mb-6">
            What's On
          </h4>
<ul className="flex flex-col gap-3">
<li>
<a className="text-sm text-zinc-400 hover:text-white transition-colors duration-300" href="#">
                All Events
              </a>
</li>
<li>
<a className="text-sm text-zinc-400 hover:text-white transition-colors duration-300" href="#">
                Gig Calendar
              </a>
</li>
<li>
<a className="text-sm text-zinc-400 hover:text-white transition-colors duration-300" href="#">
                Atlas Sessions
              </a>
</li>
<li>
<a className="text-sm text-zinc-400 hover:text-white transition-colors duration-300" href="#">
                Tickets
              </a>
</li>
</ul>
</div>
<div className="lg:col-span-1">
<h4 className="text-sm font-semibold tracking-tight uppercase mb-6">
            Info
          </h4>
<ul className="flex flex-col gap-3">
<li>
<a className="text-sm text-zinc-400 hover:text-white transition-colors duration-300" href="#">
                About Atlas
              </a>
</li>
<li>
<a className="text-sm text-zinc-400 hover:text-white transition-colors duration-300" href="#">
                Accessibility
              </a>
</li>
<li>
<a className="text-sm text-zinc-400 hover:text-white transition-colors duration-300" href="#">
                Get Involved
              </a>
</li>
<li>
<a className="text-sm text-zinc-400 hover:text-white transition-colors duration-300" href="#">
                News
              </a>
</li>
<li>
<a className="text-sm text-zinc-400 hover:text-white transition-colors duration-300" href="#">
                Contact
              </a>
</li>
</ul>
</div>
<div className="lg:col-span-1">
<h4 className="text-sm font-semibold tracking-tight uppercase mb-6">
            Hire
          </h4>
<ul className="flex flex-col gap-3">
<li>
<a className="text-sm text-zinc-400 hover:text-white transition-colors duration-300" href="#">
                Venue Hire
              </a>
</li>
<li>
<a className="text-sm text-zinc-400 hover:text-white transition-colors duration-300" href="#">
                Private Hire
              </a>
</li>
<li>
<a className="text-sm text-zinc-400 hover:text-white transition-colors duration-300" href="#">
                Studios
              </a>
</li>
<li>
<a className="text-sm text-zinc-400 hover:text-white transition-colors duration-300" href="#">
                Tech Specs
              </a>
</li>
</ul>
</div>

<div className="lg:col-span-2">
<h4 className="text-sm font-semibold tracking-tight uppercase mb-4">
            Mailing List
          </h4>
<p className="text-sm text-zinc-400 mb-6 leading-relaxed">
            Be the first to know about new shows, sessions and special events.
          </p>
<form className="flex border border-zinc-800 focus-within:border-zinc-500 transition-colors">
<input className="w-full bg-transparent border-none text-sm text-white placeholder:text-zinc-600 px-4 py-3 outline-none focus:ring-1 focus:ring-white/20 transition-shadow" placeholder="Your email address" type="email"/>
<button className="border-l border-zinc-800 bg-zinc-900/50 hover:bg-white hover:text-black transition-colors px-4 flex items-center justify-center group duration-300" type="submit">
<i className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</form>
</div>
</div>

<div className="max-w-[1400px] mx-auto px-6 border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-500 uppercase tracking-widest">
          © 2025 Atlas Live. All Rights Reserved.
        </p>
<div className="flex gap-6">
<a className="text-xs text-zinc-500 hover:text-zinc-300 uppercase tracking-widest transition-colors duration-300" href="#">
            Privacy Policy
          </a>
<a className="text-xs text-zinc-500 hover:text-zinc-300 uppercase tracking-widest transition-colors duration-300" href="#">
            Terms &amp; Conditions
          </a>
</div>
</div>
</footer>


    </>
  );
}
