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
      

<header className="bg-white border-b border-gray-200 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="text-xl font-bold tracking-tighter uppercase text-black">
          DIMSUMNEWS
        </div>
<nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
<a className="hover:text-black transition-colors" href="/arts.html">
            Arts
          </a>
<a className="hover:text-black transition-colors" href="/culture.html">
            Culture
          </a>
<a className="hover:text-black transition-colors" href="/technology.html">
            Technology
          </a>
<a className="hover:text-black transition-colors" href="/trendy-gadgets.html">
            Trendy Gadgets
          </a>
<a className="hover:text-black transition-colors" href="/fashion.html">
            Fashion
          </a>
<a className="hover:text-black transition-colors" href="/food.html">
            Food
          </a>
</nav>
<button className="text-sm font-medium text-gray-700 bg-white border border-gray-200 px-4 py-2 rounded-md hover:bg-gray-50 hover:text-black transition-colors shadow-sm flex items-center gap-2" onclick="document.getElementById('cms-login-modal').classList.remove('hidden')">
<iconify-icon className="text-lg" icon="solar:lock-keyhole-linear"></iconify-icon>
          CMS Login
        </button>
</div>
</header>

<main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-20 w-full">
<div className="mb-10 text-center space-y-3">
<h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-black">
          Curated Stories for the Modern Mind
        </h1>
<p className="text-gray-500 max-w-2xl mx-auto text-base">
          Explore the intersection of arts, technology, culture, and lifestyle
          with daily insights from our AI and human editors.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 relative group overflow-hidden rounded-xl shadow-sm border border-gray-200 bg-white flex flex-col">
<div className="h-64 md:h-[420px] bg-gray-100 w-full overflow-hidden relative">
<img alt="Technology" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-black shadow-sm">
              Technology &amp; Gadgets
            </div>
</div>
<div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-4 group-hover:text-gray-600 transition-colors cursor-pointer">
              Quantum Computing Steps Out of the Lab: What It Means for Everyday
              Tech
            </h2>
<p className="text-gray-600 mb-6 text-base md:text-lg leading-relaxed">
              The race for quantum supremacy is accelerating at an unprecedented
              pace. We explore how these next-generation supercomputers will
              soon impact cybersecurity, medicine, and our daily digital
              interactions, moving from theoretical physics to practical
              applications.
            </p>
<div className="text-sm text-gray-500 font-medium flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
<iconify-icon icon="solar:user-linear"></iconify-icon>
</div>
<span>AI Tech Editor • Oct 24, 2023</span>
</div>
</div>
</article>

<article className="col-span-1 flex flex-col bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group cursor-pointer">
<div className="h-48 bg-gray-100 w-full overflow-hidden relative shrink-0">
<img alt="Arts" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-3 left-3 bg-white px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-black shadow-sm">
              Arts
            </div>
</div>
<div className="p-5 flex-1 flex flex-col">
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
              The Renaissance of Digital Canvas: Generative Art
            </h3>
<p className="text-sm text-gray-600 mb-4 line-clamp-3">
              Discover how contemporary artists are blending traditional
              painting techniques with cutting-edge artificial intelligence to
              create mind-bending masterpieces.
            </p>
<div className="text-xs text-gray-500 font-medium mt-auto flex items-center gap-2">
<span>AI Arts Desk • Oct 23, 2023</span>
</div>
</div>
</article>

<article className="col-span-1 flex flex-col bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group cursor-pointer">
<div className="h-48 bg-gray-100 w-full overflow-hidden relative shrink-0">
<img alt="Culture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-3 left-3 bg-white px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-black shadow-sm">
              Culture
            </div>
</div>
<div className="p-5 flex-1 flex flex-col">
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
              Global Nomads: Micro-Communities in Megacities
            </h3>
<p className="text-sm text-gray-600 mb-4 line-clamp-3">
              A deep dive into how urbanization is fostering tight-knit,
              hyper-local communities that share resources, stories, and
              cultural heritage.
            </p>
<div className="text-xs text-gray-500 font-medium mt-auto flex items-center gap-2">
<span>AI Culture Desk • Oct 22, 2023</span>
</div>
</div>
</article>

<article className="col-span-1 flex flex-col bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group cursor-pointer">
<div className="h-48 bg-gray-100 w-full overflow-hidden relative shrink-0">
<img alt="Fashion" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-3 left-3 bg-white px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-black shadow-sm">
              Fashion
            </div>
</div>
<div className="p-5 flex-1 flex flex-col">
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
              Sustainable Threads: Upcycling the Future
            </h3>
<p className="text-sm text-gray-600 mb-4 line-clamp-3">
              Fast fashion is out. Discover the avant-garde designers who are
              turning ocean plastics and discarded textiles into eco-friendly
              runway collections.
            </p>
<div className="text-xs text-gray-500 font-medium mt-auto flex items-center gap-2">
<span>AI Style Editor • Oct 21, 2023</span>
</div>
</div>
</article>

<article className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col sm:flex-row bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group cursor-pointer">
<div className="h-48 sm:h-auto sm:w-2/5 lg:w-1/2 bg-gray-100 overflow-hidden relative shrink-0">
<img alt="Food" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-3 left-3 bg-white px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-black shadow-sm">
              Food
            </div>
</div>
<div className="p-5 sm:p-6 sm:w-3/5 lg:w-1/2 flex flex-col justify-center">
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
              Lab-Grown Gastronomy: Ethical Dining
            </h3>
<p className="text-sm text-gray-600 mb-4 line-clamp-3">
              Cultivated meat and precision fermentation are hitting the
              mainstream. We review the first restaurant serving 100% lab-grown
              delicacies, redefining what it means to eat ethically.
            </p>
<div className="text-xs text-gray-500 font-medium mt-auto flex items-center gap-2">
<span>AI Food Critic • Oct 20, 2023</span>
</div>
</div>
</article>
</div>
</main>

<footer className="bg-white border-t border-gray-200 mt-auto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="text-lg font-bold tracking-tighter uppercase text-black">
          DIMSUMNEWS
        </div>
<p className="text-sm text-gray-500">
          © 2024 Dimsumnews Media. Curated by AI.
        </p>
</div>
</footer>

<div className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/40 backdrop-blur-sm hidden transition-opacity" id="cms-login-modal">
<div className="bg-white rounded-xl shadow-2xl w-full max-w-sm p-8 relative border border-gray-200 mx-4">
<button className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors" onclick="document.getElementById('cms-login-modal').classList.add('hidden')">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
<div className="text-center mb-6">
<div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
<iconify-icon className="text-2xl text-black" icon="solar:shield-keyhole-linear"></iconify-icon>
</div>
<div className="text-xl font-bold tracking-tighter uppercase text-black mb-1">
            CMS Access
          </div>
<p className="text-sm text-gray-500">Authorized personnel only</p>
</div>
<div className="mb-4 p-3 bg-gray-50 border border-gray-200 rounded-md text-xs text-gray-600 text-center">
          Demo Credentials:
          <span className="font-bold text-gray-900">admin</span>
          /
          <span className="font-bold text-gray-900">password</span>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); alert('CMS Login successful. Redirecting...');">
<div>
<label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
              Username
            </label>
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" icon="solar:user-linear"></iconify-icon>
<input className="w-full text-sm text-gray-900 bg-gray-50 border border-gray-200 rounded-md pl-9 pr-3 py-2.5 focus:outline-none focus:border-gray-400 focus:bg-white focus:ring-1 focus:ring-gray-400 transition-all" placeholder="admin" required="" type="text" value="admin"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
              Password
            </label>
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" icon="solar:lock-password-linear"></iconify-icon>
<input className="w-full text-sm text-gray-900 bg-gray-50 border border-gray-200 rounded-md pl-9 pr-3 py-2.5 focus:outline-none focus:border-gray-400 focus:bg-white focus:ring-1 focus:ring-gray-400 transition-all" placeholder="••••••••" required="" type="password" value="password"/>
</div>
</div>
<div className="pt-2">
<button className="w-full py-2.5 px-4 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800 transition-colors shadow-sm text-center flex items-center justify-center gap-2" type="submit">
              Secure Login
              <iconify-icon className="text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</form>
</div>
</div>

    </>
  );
}
