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



      const section = document.getElementById('scrollSection');
      const sprite = document.getElementById('sprite');
      const hint = document.getElementById('scrollHint');
      const FRAME_URLS = [
        'https://lh3.googleusercontent.com/d/1xwLfDwKx5tsbhaVLAygoTUgwGf5ilAyP=w800',
        'https://lh3.googleusercontent.com/d/17F2bl8wx3j3wGcXPOj6zfem_cAbUMII5=w800',
        'https://lh3.googleusercontent.com/d/1DfoD5JFH959jRdwqf7lCFFWCdm1VLOGU=w800',
        'https://lh3.googleusercontent.com/d/1DRyPA8pZYhyobGSM4i69pYyTEGDZBFji=w800',
        'https://lh3.googleusercontent.com/d/1IsRPPk7DqaaJEcxolQzl1mT8SkpuoIeF=w800'
      ];
      const FRAMES = FRAME_URLS.length;

      FRAME_URLS.forEach(function(u){ const img = new Image(); img.src = u; });
      sprite.style.backgroundImage = "url('" + FRAME_URLS[0] + "')";
      let currentFrame = 0;

      function update() {
        const rect = section.getBoundingClientRect();
        const scrollable = section.offsetHeight - window.innerHeight;
        let progress = Math.min(Math.max(-rect.top / scrollable, 0), 1);

        const frame = Math.min(Math.round(progress * (FRAMES - 1)), FRAMES - 1);
        if (frame !== currentFrame) {
          currentFrame = frame;
          sprite.style.backgroundImage = "url('" + FRAME_URLS[frame] + "')";
        }

        hint.style.opacity = progress > 0.05 ? 0 : 1;
      }

      window.addEventListener('scroll', update, { passive: true });
      window.addEventListener('resize', update);
      update();
    
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
      

<nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/70 border-b border-neutral-200">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<span className="text-lg font-semibold tracking-tighter">
          VOLT
          <span className="text-orange-500">.</span>
</span>
<div className="hidden md:flex items-center gap-8 text-sm text-neutral-500">
<a className="hover:text-neutral-900 transition" href="#">Features</a>
<a className="hover:text-neutral-900 transition" href="#">Specs</a>
<a className="hover:text-neutral-900 transition" href="#">Reviews</a>
<a className="hover:text-neutral-900 transition" href="#">Support</a>
</div>
<button className="flex items-center gap-2 bg-neutral-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-neutral-700 transition">
          Buy Now
          <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</nav>

<section className="relative h-[150vh]" id="scrollSection">
<div className="sticky flex flex-col overflow-hidden bg-[#ffffff] h-screen top-0 items-center justify-center">

<div className="blur-[120px] bg-orange-500/0 w-[600px] h-[600px] rounded-full absolute"></div>
<div className="relative z-10 text-center px-6">
<p className="text-xs uppercase tracking-[0.3em] text-orange-500 mb-4">
            Aero Series
          </p>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-4 text-neutral-900">
            The VOLT 52L
          </h1>
<p className="text-neutral-500 text-base max-w-md mx-auto">
            Scroll to open. Engineered to carry more, weigh less, and lock
            tight.
          </p>
</div>

<div className="relative z-10 mt-8">
<div className="" id="sprite" style={{width: '800px', height: '800px', maxWidth: '90vw', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center center', imageRendering: 'auto', backgroundImage: 'url(\'https://lh3.googleusercontent.com/d/1xwLfDwKx5tsbhaVLAygoTUgwGf5ilAyP=w800\')'}}>

</div>
</div>
<div className="absolute bottom-10 flex flex-col items-center gap-2 text-neutral-500 text-xs uppercase tracking-widest transition-opacity" id="scrollHint">
<span>Scroll</span>
<iconify-icon className="animate-bounce" icon="solar:double-alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</div>
</section>

<section className="relative z-10 bg-white py-28 px-6">
<div className="max-w-6xl mx-auto">
<p className="text-xs uppercase tracking-[0.3em] text-orange-500 mb-3">
          Built different
        </p>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16 max-w-2xl text-neutral-900">
          Every detail tuned for the long ride.
        </h2>
<div className="grid md:grid-cols-3 gap-6">
<div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200 hover:border-neutral-300 transition">
<iconify-icon className="text-orange-500" icon="solar:box-minimalistic-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight mt-6 mb-2 text-neutral-900">
              52L Capacity
            </h3>
<p className="text-sm text-neutral-500 leading-relaxed">
              Fits two full-face helmets with room to spare. Smart-shaped
              interior maximizes usable volume.
            </p>
</div>
<div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200 hover:border-neutral-300 transition">
<iconify-icon className="text-orange-500" icon="solar:lock-keyhole-minimalistic-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight mt-6 mb-2 text-neutral-900">
              One-Touch Lock
            </h3>
<p className="text-sm text-neutral-500 leading-relaxed">
              Central locking with anti-theft latch. Open with one hand, secure
              with a click.
            </p>
</div>
<div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200 hover:border-neutral-300 transition">
<iconify-icon className="text-orange-500" icon="solar:shield-check-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight mt-6 mb-2 text-neutral-900">
              Weatherproof
            </h3>
<p className="text-sm text-neutral-500 leading-relaxed">
              IP67 sealed gaskets keep your gear dry through any storm at any
              speed.
            </p>
</div>
</div>
</div>
</section>

<section className="relative z-10 bg-white py-28 px-6 border-t border-neutral-200">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-neutral-900">
          Carry more. Ride further.
        </h2>
<p className="text-neutral-500 mb-10 max-w-md mx-auto">
          Free shipping and a 5-year warranty on every VOLT 52L.
        </p>
<div className="flex items-center justify-center gap-4 flex-wrap">
<button className="flex items-center gap-2 bg-orange-500 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-orange-600 transition">
            Order — $249
            <iconify-icon icon="solar:cart-large-minimalistic-linear" width="18"></iconify-icon>
</button>
<button className="text-sm text-neutral-600 hover:text-neutral-900 px-6 py-3 transition">
            View Specs
          </button>
</div>
</div>
</section>
<footer className="bg-white border-t border-neutral-200 py-10 px-6 text-center text-xs text-neutral-400">
      © 2024 VOLT. All rights reserved.
    </footer>


    </>
  );
}
