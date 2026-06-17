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
      
<header className="relative z-30 flex items-center justify-between border-b border-zinc-800 bg-zinc-950 px-8 py-6">
<div className="font-serif text-xl tracking-[0.2em] text-white md:text-2xl">
        RETROMOTIVE
      </div>
<nav className="hidden items-center gap-10 md:flex">
<a className="text-xs font-semibold tracking-[0.2em] text-zinc-400 transition hover:text-white" href="#">
          ISSUES
        </a>
<a className="text-xs font-semibold tracking-[0.2em] text-zinc-400 transition hover:text-white" href="#">
          SHOP
        </a>
<a className="text-xs font-semibold tracking-[0.2em] text-zinc-400 transition hover:text-white" href="#">
          SUBSCRIBE
        </a>
<a className="text-xs font-semibold tracking-[0.2em] text-zinc-400 transition hover:text-white" href="#">
          ABOUT
        </a>
<a className="text-xs font-semibold tracking-[0.2em] text-zinc-400 transition hover:text-white" href="#">
          CONTACT
        </a>
</nav>
<div className="flex items-center gap-4">
<button aria-label="Cart" className="text-zinc-400 transition hover:text-white">
<i aria-hidden="true" className="h-5 w-5" data-lucide="shopping-bag"></i>
</button>
</div>
</header>
<main className="relative flex flex-col w-full overflow-hidden bg-[#f4f1ea]">

<section className="relative min-h-[90vh] w-full flex flex-col lg:flex-row items-center justify-center px-8 py-20 lg:py-0 bg-zinc-950 text-white overflow-hidden">
<div className="absolute inset-0 z-0 opacity-20">
<img alt="Background" className="w-full h-full object-cover blur-sm" src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&amp;fit=crop&amp;q=80&amp;w=3183"/>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
<div className="flex-1 text-center lg:text-left z-20 mt-12 lg:mt-0">
<p className="text-xs font-semibold tracking-[0.3em] text-zinc-400 mb-6 uppercase">
              The New Standard
            </p>
<h1 className="font-serif text-6xl md:text-8xl tracking-tighter mb-8 leading-none">
              VOLUME 24
              <br/>
<span className="italic text-zinc-500">OUT NOW</span>
</h1>
<button className="inline-flex items-center justify-center border border-white/30 bg-white text-zinc-950 px-8 py-4 text-xs font-semibold tracking-[0.2em] transition hover:bg-zinc-200 uppercase">
              Preview the Issue
            </button>
</div>
<div className="flex-1 relative w-full h-[50vh] md:h-[60vh] lg:h-[80vh] flex items-center justify-center group z-10 [perspective:1000px]">
<div className="absolute w-[50%] md:w-[55%] aspect-[3/4] bg-zinc-800 shadow-2xl transition-transform duration-700 -translate-x-12 -translate-y-8 -rotate-6 group-hover:-translate-x-24 group-hover:-translate-y-12 opacity-40">
<img alt="Volume 21" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="absolute w-[50%] md:w-[55%] aspect-[3/4] bg-zinc-800 shadow-2xl transition-transform duration-700 -translate-x-6 -translate-y-4 -rotate-3 group-hover:-translate-x-12 group-hover:-translate-y-6 opacity-60">
<img alt="Volume 22" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="absolute w-[50%] md:w-[55%] aspect-[3/4] bg-zinc-800 shadow-2xl transition-transform duration-700 translate-x-4 translate-y-4 rotate-3 group-hover:translate-x-12 group-hover:translate-y-8 opacity-80">
<img alt="Volume 23" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1503376794736-2246cb3422ba?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="absolute w-[55%] md:w-[60%] aspect-[3/4] bg-zinc-900 shadow-2xl shadow-black/50 border border-white/10 z-10 transition-transform duration-700 hover:scale-105">
<img alt="Volume 24 Cover" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-6 w-full text-center mix-blend-overlay">
<h2 className="text-white font-serif text-2xl md:text-4xl tracking-[0.2em] font-bold">
                  RETROMOTIVE
                </h2>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-24 bg-[#f4f1ea] border-b border-zinc-300 overflow-hidden">
<div className="max-w-7xl mx-auto px-8 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
<h2 className="font-serif text-4xl tracking-tight text-zinc-900">
            Inside Volume 24
          </h2>
<p className="text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase">
            Swipe to preview
          </p>
</div>
<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-8 pb-12 w-full [&amp;::-webkit-scrollbar]:hidden" style={{scrollbarWidth: 'none'}}>
<div className="snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] aspect-[4/3] bg-white shadow-xl flex">
<img alt="Spread Left" className="w-1/2 h-full object-cover border-r border-zinc-200" src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="w-1/2 h-full bg-[#f4f1ea] p-6 md:p-8 flex flex-col justify-center">
<h3 className="font-serif text-xl md:text-2xl mb-4 text-zinc-900">
                Contents
              </h3>
<ul className="text-xs md:text-sm space-y-2 md:space-y-3 text-zinc-600 font-serif">
<li>04 — The Beginning</li>
<li>12 — Design Language</li>
<li>28 — Stuttgart's Finest</li>
<li>45 — Rolling Sculpture</li>
</ul>
</div>
</div>
<div className="snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] aspect-[4/3] bg-white shadow-xl flex">
<div className="w-1/2 h-full bg-zinc-900 p-6 md:p-8 flex flex-col justify-center text-white">
<h3 className="font-serif text-2xl md:text-3xl mb-4 leading-tight">
                THE MAN
                <br/>
                BEHIND THE
                <br/>
                MACHINE
              </h3>
</div>
<img alt="Portrait Spread" className="w-1/2 h-full object-cover grayscale" src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] aspect-[4/3] bg-white shadow-xl flex">
<img alt="Car Feature" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
<div className="snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] aspect-[4/3] bg-white shadow-xl flex">
<img alt="Detail Left" className="w-1/2 h-full object-cover" src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<img alt="Detail Right" className="w-1/2 h-full object-cover" src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</section>

<section className="w-full py-32 bg-[#f4f1ea]">
<div className="max-w-5xl mx-auto px-8 flex">
<div className="w-1 bg-zinc-900 mr-8 md:mr-12 shrink-0"></div>
<div>
<h2 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tighter text-zinc-900 leading-[0.9] mb-8">
              Built for the coffee table,
              <br/>
              not the algorithm.
            </h2>
<p className="text-lg md:text-xl text-zinc-600 font-serif leading-relaxed max-w-2xl">
              We believe in the permanence of print. Retromotive is a quarterly
              journal dedicated to timeless automotive design, immersive
              storytelling, and analog photography. Heavy stock paper. No
              targeted ads. Just the pure, unadulterated love of the drive.
            </p>
</div>
</div>
</section>

<section className="w-full py-12 px-4 md:px-8 bg-[#f4f1ea] pb-32">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="group relative aspect-[3/4] overflow-hidden bg-zinc-900 cursor-pointer">
<img alt="Classic Machines" className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8 text-white">
<h3 className="font-serif text-2xl mb-4">Classic Machines</h3>
<div className="w-8 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></div>
</div>
</div>
<div className="group relative aspect-[3/4] overflow-hidden bg-zinc-900 cursor-pointer">
<img alt="Human Stories" className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110 grayscale" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8 text-white">
<h3 className="font-serif text-2xl mb-4">Human Stories</h3>
<div className="w-8 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></div>
</div>
</div>
<div className="group relative aspect-[3/4] overflow-hidden bg-zinc-900 cursor-pointer">
<img alt="Precision Photography" className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1516862523118-a3724eb136d7?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8 text-white">
<h3 className="font-serif text-2xl mb-4">Precision Photography</h3>
<div className="w-8 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></div>
</div>
</div>
<div className="group relative aspect-[3/4] overflow-hidden bg-zinc-900 cursor-pointer">
<img alt="Automotive Culture" className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1555353540-64fd6b297e68?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8 text-white">
<h3 className="font-serif text-2xl mb-4">Automotive Culture</h3>
<div className="w-8 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-24 bg-zinc-950 text-white border-t border-zinc-800">
<div className="max-w-7xl mx-auto px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<a className="group block p-10 border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 transition-colors" href="#">
<i className="h-8 w-8 mb-6 text-zinc-400 group-hover:text-white transition-colors" data-lucide="book-open"></i>
<h3 className="font-serif text-2xl mb-3 text-white">
                Subscribe to Annual Print
              </h3>
<p className="text-sm text-zinc-400 font-serif mb-8 leading-relaxed">
                Four quarterly issues delivered to your door. Never miss a
                volume.
              </p>
<span className="text-xs font-semibold tracking-[0.2em] text-white uppercase flex items-center gap-2 group-hover:gap-4 transition-all">
                Subscribe
                <i className="h-4 w-4" data-lucide="arrow-right"></i>
</span>
</a>
<a className="group block p-10 border border-zinc-700 bg-white text-zinc-950 hover:bg-zinc-100 transition-colors" href="#">
<i className="h-8 w-8 mb-6 text-zinc-900" data-lucide="shopping-cart"></i>
<h3 className="font-serif text-2xl mb-3 text-zinc-950">
                Buy Volume 24
              </h3>
<p className="text-sm text-zinc-600 font-serif mb-8 leading-relaxed">
                Physical and digital variants available. Immediate shipping
                worldwide.
              </p>
<span className="text-xs font-semibold tracking-[0.2em] text-zinc-950 uppercase flex items-center gap-2 group-hover:gap-4 transition-all">
                Shop Issue
                <i className="h-4 w-4" data-lucide="arrow-right"></i>
</span>
</a>
<a className="group block p-10 border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 transition-colors" href="#">
<i className="h-8 w-8 mb-6 text-zinc-400 group-hover:text-white transition-colors" data-lucide="shirt"></i>
<h3 className="font-serif text-2xl mb-3 text-white">Shop Apparel</h3>
<p className="text-sm text-zinc-400 font-serif mb-8 leading-relaxed">
                Premium heavyweight cotton tees and accessories for the drive.
              </p>
<span className="text-xs font-semibold tracking-[0.2em] text-white uppercase flex items-center gap-2 group-hover:gap-4 transition-all">
                Shop Store
                <i className="h-4 w-4" data-lucide="arrow-right"></i>
</span>
</a>
</div>
</div>
</section>
</main>
<footer className="w-full bg-zinc-950 text-white pt-12 pb-12 px-8">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">

<div className="lg:col-span-5 flex flex-col justify-center">
<h3 className="font-serif text-3xl mb-4">Join the Paddock</h3>
<p className="text-zinc-400 text-sm font-serif mb-8 max-w-md leading-relaxed">
            Sign up for our newsletter. No spam, just curated automotive
            stories, early access to new volumes, and exclusive photography.
          </p>
<form className="flex w-full max-w-md border-b border-zinc-700 pb-2">
<input className="bg-transparent border-none outline-none flex-1 text-sm text-white placeholder:text-zinc-600 font-serif" placeholder="Email Address" required="" type="email"/>
<button className="text-xs font-semibold tracking-[0.2em] text-white uppercase hover:text-zinc-400 transition" type="submit">
              Subscribe
            </button>
</form>
</div>

<div className="lg:col-span-3 flex flex-col justify-center">
<h4 className="text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase mb-6">
            Partners &amp; Info
          </h4>
<ul className="space-y-4 text-sm font-serif text-zinc-300">
<li>
<a className="hover:text-white transition" href="#">Stockists</a>
</li>
<li>
<a className="hover:text-white transition" href="#">
                Submission Guidelines
              </a>
</li>
<li>
<a className="hover:text-white transition" href="#">
                Brand Partnerships
              </a>
</li>
<li>
<a className="hover:text-white transition" href="#">
                Terms &amp; Privacy
              </a>
</li>
<li>
<a className="hover:text-white transition" href="#">Contact Us</a>
</li>
</ul>
</div>

<div className="lg:col-span-4 flex flex-col justify-center">
<h4 className="text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase mb-6 flex items-center justify-between">
<span>@Retromotive</span>
<i className="h-4 w-4" data-lucide="instagram"></i>
</h4>
<div className="grid grid-cols-2 gap-2">
<div className="aspect-square bg-zinc-800 overflow-hidden">
<img alt="IG 1" className="w-full h-full object-cover hover:scale-110 transition duration-500" src="https://images.unsplash.com/photo-1503376794736-2246cb3422ba?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="aspect-square bg-zinc-800 overflow-hidden">
<img alt="IG 2" className="w-full h-full object-cover hover:scale-110 transition duration-500" src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="aspect-square bg-zinc-800 overflow-hidden">
<img alt="IG 3" className="w-full h-full object-cover hover:scale-110 transition duration-500" src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="aspect-square bg-zinc-800 overflow-hidden">
<img alt="IG 4" className="w-full h-full object-cover hover:scale-110 transition duration-500" src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-900 text-[10px] font-semibold tracking-[0.2em] text-zinc-600 uppercase">
<div>© 2024 RETROMOTIVE INC.</div>
<div className="flex gap-8 mt-4 md:mt-0">
<a className="transition hover:text-white" href="#">INSTAGRAM</a>
<a className="transition hover:text-white" href="#">FACEBOOK</a>
<a className="transition hover:text-white" href="#">TWITTER</a>
</div>
</div>
</footer>


    </>
  );
}
