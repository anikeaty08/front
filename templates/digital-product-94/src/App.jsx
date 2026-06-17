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



      let currentHeroSlide = 0;
      let heroSliderManual = false;
      function getActiveSlideIndex(slides) {
        let maxOp = -1, idx = 0;
        slides.forEach((s, i) => {
          if(!s) return;
          let op = parseFloat(window.getComputedStyle(s).opacity);
          if(op > maxOp) { maxOp = op; idx = i; }
        });
        return idx;
      }
      function setHeroSlide(index) {
        let slides = [
          document.querySelector('.animate-hero-1'),
          document.querySelector('.animate-hero-2'),
          document.querySelector('.animate-hero-3')
        ];
        if(!heroSliderManual) {
          slides.forEach(s => {
            if(s){
              s.style.animation = 'none';
              s.style.transition = 'opacity 0.5s ease';
            }
          });
          heroSliderManual = true;
        }
        slides.forEach((s, i) => {
          if(!s) return;
          if(i === index) {
            s.style.opacity = '1';
            s.style.zIndex = '10';
            s.style.pointerEvents = 'auto';
          } else {
            s.style.opacity = '0';
            s.style.zIndex = '0';
            s.style.pointerEvents = 'none';
          }
        });
        currentHeroSlide = index;
      }
      function nextSlide() {
        let slides = [
          document.querySelector('.animate-hero-1'),
          document.querySelector('.animate-hero-2'),
          document.querySelector('.animate-hero-3')
        ];
        if(!heroSliderManual) currentHeroSlide = getActiveSlideIndex(slides);
        setHeroSlide((currentHeroSlide + 1) % 3);
      }
      function prevSlide() {
        let slides = [
          document.querySelector('.animate-hero-1'),
          document.querySelector('.animate-hero-2'),
          document.querySelector('.animate-hero-3')
        ];
        if(!heroSliderManual) currentHeroSlide = getActiveSlideIndex(slides);
        setHeroSlide((currentHeroSlide + 2) % 3);
      }
    


      function openOrderModal(name, price, time) {
        document.getElementById('modalProductName').innerText = name;
        document.getElementById('modalProductPrice').innerText = price;
        document.getElementById('modalProductTime').innerText = time;
        document.getElementById('modalConfirmBtn').href = 'https://wa.me/923341100761?text=Hi%20TheOttDeals,%20I%20want%20to%20order%20' + encodeURIComponent(name);
        const modal = document.getElementById('orderModal');
        const modalContent = document.getElementById('orderModalContent');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        setTimeout(() => {
          modalContent.classList.remove('scale-95', 'opacity-0');
          modalContent.classList.add('scale-100', 'opacity-100');
        }, 10);
      }
      function closeOrderModal() {
        const modal = document.getElementById('orderModal');
        const modalContent = document.getElementById('orderModalContent');
        modalContent.classList.remove('scale-100', 'opacity-100');
        modalContent.classList.add('scale-95', 'opacity-0');
        setTimeout(() => {
          modal.classList.remove('flex');
          modal.classList.add('hidden');
        }, 300);
      }
    
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
      

<div className="bg-[#FFD700] overflow-hidden whitespace-nowrap py-1.5 flex items-center border-b border-[#FFD700]/20">
<div className="animate-marquee inline-block flex-shrink-0">
<span className="text-black text-xs font-medium tracking-wide px-4">
          ATTENTION! WE DON'T HAVE AN AUTOMATED PAYMENT SYSTEM. CLICKING 'BUY'
          WILL REDIRECT YOU TO OUR OFFICIAL WHATSAPP FOR INSTANT ACTIVATION.
        </span>
<span className="text-black text-xs font-medium tracking-wide px-4">
          ATTENTION! WE DON'T HAVE AN AUTOMATED PAYMENT SYSTEM. CLICKING 'BUY'
          WILL REDIRECT YOU TO OUR OFFICIAL WHATSAPP FOR INSTANT ACTIVATION.
        </span>
<span className="text-black text-xs font-medium tracking-wide px-4">
          ATTENTION! WE DON'T HAVE AN AUTOMATED PAYMENT SYSTEM. CLICKING 'BUY'
          WILL REDIRECT YOU TO OUR OFFICIAL WHATSAPP FOR INSTANT ACTIVATION.
        </span>
</div>
</div>

<nav className="border-b border-white/5 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-[#FFD700] rounded-lg flex items-center justify-center">
<iconify-icon className="text-black text-lg" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-white text-lg font-semibold tracking-tighter uppercase">
            THEOTTDEALS
          </span>
</div>
<div className="flex items-center gap-4">
<a className="text-neutral-400 hover:text-white transition-colors" href="https://wa.me/923341100761">
<iconify-icon className="text-xl" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
</a>
<div className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
<iconify-icon className="text-neutral-400" icon="solar:user-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</nav>

<main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">

<div className="lg:col-span-2 bg-[#121212] rounded-[20px] border border-white/5 relative overflow-hidden min-h-[340px] group">
<style>
            @keyframes hero-slide-1 {
              0%, 29% { opacity: 1; z-index: 10; pointer-events: auto; }
              33.33%, 95.8% { opacity: 0; z-index: 0; pointer-events: none; }
              100% { opacity: 1; z-index: 10; pointer-events: auto; }
            }
            @keyframes hero-slide-2 {
              0%, 29% { opacity: 0; z-index: 0; pointer-events: none; }
              33.33%, 62.5% { opacity: 1; z-index: 10; pointer-events: auto; }
              66.66%, 100% { opacity: 0; z-index: 0; pointer-events: none; }
            }
            @keyframes hero-slide-3 {
              0%, 62.5% { opacity: 0; z-index: 0; pointer-events: none; }
              66.66%, 95.8% { opacity: 1; z-index: 10; pointer-events: auto; }
              100% { opacity: 0; z-index: 0; pointer-events: none; }
            }
            .animate-hero-1 { animation: hero-slide-1 12s infinite; }
            .animate-hero-2 { animation: hero-slide-2 12s infinite; opacity: 0; pointer-events: none; }
            .animate-hero-3 { animation: hero-slide-3 12s infinite; opacity: 0; pointer-events: none; }
          </style>

<div className="absolute inset-0 flex items-end p-6 sm:p-10 animate-hero-1 bg-[#121212]">
<div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-[#121212]/80 to-transparent z-0"></div>
<div className="absolute -top-32 -right-32 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-[100px] z-0"></div>
<div className="absolute top-1/2 right-10 -translate-y-1/2 w-48 h-64 bg-gradient-to-br from-red-600/20 to-black rounded-2xl border border-white/10 shadow-2xl shadow-red-900/20 rotate-12 blur-[1px] opacity-50 hidden sm:block z-0"></div>
<div className="absolute top-1/2 right-24 -translate-y-1/2 w-48 h-64 bg-gradient-to-br from-neutral-800 to-[#121212] rounded-2xl border border-red-500/20 shadow-2xl shadow-red-900/20 -rotate-6 z-0 hidden sm:flex items-center justify-center">
<img alt="Netflix" className="w-28 h-28 object-contain rounded-2xl drop-shadow-2xl" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"/>
</div>
<div className="relative z-10 w-full max-w-lg">
<span className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 text-xs font-medium text-[#FFD700] mb-5 tracking-wide uppercase">
<iconify-icon icon="solar:crown-star-linear" strokeWidth="1.5"></iconify-icon>
                Trending Now
              </span>
<h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-3">
                Netflix 4K Premium
              </h1>
<p className="text-neutral-400 text-sm md:text-base mb-8 leading-relaxed">
                Experience cinema-quality entertainment. Unlimited movies, TV
                shows, and anime in stunning Ultra HD. Secure your spot today.
              </p>
<a className="inline-flex items-center justify-center gap-2 bg-[#FFD700] text-black px-6 py-3 rounded-xl text-sm font-semibold hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all duration-300 w-full sm:w-auto" href="https://wa.me/923341100761?text=Hi%20TheOttDeals,%20I%20want%20to%20order%20Netflix" onclick="openOrderModal('Netflix 4K Premium', '3.99 $', '30 Days'); return false;">
                Get Instant Access
                <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="absolute inset-0 flex items-end p-6 sm:p-10 animate-hero-2 bg-[#121212]">
<div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-[#121212]/80 to-transparent z-0"></div>
<div className="absolute -top-32 -right-32 w-96 h-96 bg-green-500/10 rounded-full blur-[100px] z-0"></div>
<div className="absolute top-1/2 right-10 -translate-y-1/2 w-48 h-64 bg-gradient-to-br from-green-600/20 to-black rounded-2xl border border-white/10 shadow-2xl shadow-green-900/20 rotate-12 blur-[1px] opacity-50 hidden sm:block z-0"></div>
<div className="absolute top-1/2 right-24 -translate-y-1/2 w-48 h-64 bg-gradient-to-br from-neutral-800 to-[#121212] rounded-2xl border border-green-500/20 shadow-2xl shadow-green-900/20 -rotate-6 z-0 hidden sm:flex items-center justify-center">
<img alt="Spotify" className="w-28 h-28 object-contain rounded-2xl drop-shadow-2xl" src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"/>
</div>
<div className="relative z-10 w-full max-w-lg">
<span className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 text-xs font-medium text-[#FFD700] mb-5 tracking-wide uppercase">
<iconify-icon icon="solar:crown-star-linear" strokeWidth="1.5"></iconify-icon>
                Trending Now
              </span>
<h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-3">
                Spotify Premium
              </h1>
<p className="text-neutral-400 text-sm md:text-base mb-8 leading-relaxed">
                Ad-free music listening, offline playback, and highest audio
                quality. Upgrade your playlist today.
              </p>
<a className="inline-flex items-center justify-center gap-2 bg-[#FFD700] text-black px-6 py-3 rounded-xl text-sm font-semibold hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all duration-300 w-full sm:w-auto" href="https://wa.me/923341100761?text=Hi%20TheOttDeals,%20I%20want%20to%20order%20Spotify" onclick="openOrderModal('Spotify Premium', '1.99 $', '30 Days'); return false;">
                Get Instant Access
                <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="absolute inset-0 flex items-end p-6 sm:p-10 animate-hero-3 bg-[#121212]">
<div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-[#121212]/80 to-transparent z-0"></div>
<div className="absolute -top-32 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] z-0"></div>
<div className="absolute top-1/2 right-10 -translate-y-1/2 w-48 h-64 bg-gradient-to-br from-purple-600/20 to-black rounded-2xl border border-white/10 shadow-2xl shadow-purple-900/20 rotate-12 blur-[1px] opacity-50 hidden sm:block z-0"></div>
<div className="absolute top-1/2 right-24 -translate-y-1/2 w-48 h-64 bg-gradient-to-br from-neutral-800 to-[#121212] rounded-2xl border border-purple-500/20 shadow-2xl shadow-purple-900/20 -rotate-6 z-0 hidden sm:flex items-center justify-center">
<img alt="ChatGPT" className="w-28 h-28 object-contain rounded-2xl drop-shadow-2xl" src="https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/chatgpt.png"/>
</div>
<div className="relative z-10 w-full max-w-lg">
<span className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 text-xs font-medium text-[#FFD700] mb-5 tracking-wide uppercase">
<iconify-icon icon="solar:crown-star-linear" strokeWidth="1.5"></iconify-icon>
                Trending Now
              </span>
<h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-3">
                ChatGPT Plus &amp; AI Tools
              </h1>
<p className="text-neutral-400 text-sm md:text-base mb-8 leading-relaxed">
                Unlock next-gen AI capabilities. Faster responses, advanced data
                analysis, and breathtaking image generation.
              </p>
<a className="inline-flex items-center justify-center gap-2 bg-[#FFD700] text-black px-6 py-3 rounded-xl text-sm font-semibold hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all duration-300 w-full sm:w-auto" href="https://wa.me/923341100761?text=Hi%20TheOttDeals,%20I%20want%20to%20order%20ChatGPT" onclick="openOrderModal('ChatGPT Plus', '19.99 $', '30 Days'); return false;">
                Get Instant Access
                <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
<button aria-label="Previous slide" className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-black/50 hover:bg-[#FFD700] hover:text-black text-white rounded-full flex items-center justify-center backdrop-blur-md border border-white/10 z-30 transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100 shadow-lg shadow-black/20" onclick="prevSlide()">
<iconify-icon className="text-lg sm:text-xl" icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button aria-label="Next slide" className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-black/50 hover:bg-[#FFD700] hover:text-black text-white rounded-full flex items-center justify-center backdrop-blur-md border border-white/10 z-30 transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100 shadow-lg shadow-black/20" onclick="nextSlide()">
<iconify-icon className="text-lg sm:text-xl" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="flex flex-col gap-6">

<div className="bg-[#121212] rounded-[20px] border border-white/5 p-6 flex-1 flex flex-col justify-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<h3 className="text-base font-medium text-white tracking-tight mb-4 flex items-center gap-2">
<iconify-icon className="text-[#FFD700]" icon="solar:minimalistic-magnifer-linear" strokeWidth="1.5"></iconify-icon>
              Find Deal
            </h3>
<div className="relative">
<input className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#FFD700]/50 focus:bg-black/80 transition-all w-full" placeholder="Search..." type="text"/>
<div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
<kbd className="text-xs text-neutral-600 bg-white/5 border border-white/5 rounded px-1.5 py-0.5 font-sans">
                  ⌘
                </kbd>
<kbd className="text-xs text-neutral-600 bg-white/5 border border-white/5 rounded px-1.5 py-0.5 font-sans">
                  K
                </kbd>
</div>
</div>
</div>

<a className="bg-[#121212] rounded-[20px] border border-white/5 p-6 flex items-center justify-between group hover:border-white/10 transition-colors relative overflow-hidden" href="https://wa.me/923341100761">
<div className="absolute top-0 right-0 w-24 h-24 bg-[#FFD700]/5 rounded-full blur-2xl group-hover:bg-[#FFD700]/10 transition-colors"></div>
<div className="flex items-center gap-4 relative z-10">
<div className="w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center relative">
<iconify-icon className="text-xl text-neutral-400 group-hover:text-white transition-colors" icon="solar:chat-round-dots-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#121212] rounded-full z-10"></span>
<span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></span>
</div>
<div>
<p className="text-sm font-medium text-white tracking-tight">
                  Support Team
                </p>
<p className="text-xs text-neutral-500 mt-0.5 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  Online Now
                </p>
</div>
</div>
<iconify-icon className="text-xl text-neutral-600 group-hover:text-[#FFD700] transition-colors relative z-10" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-2 mb-8">
<button className="shrink-0 bg-[#FFD700] text-black px-5 py-2 rounded-full text-sm font-medium tracking-tight shadow-[0_0_15px_rgba(255,215,0,0.15)]">
          All
        </button>
<button className="shrink-0 bg-[#121212] border border-white/5 text-neutral-400 hover:text-white hover:bg-white/5 px-5 py-2 rounded-full text-sm font-medium tracking-tight transition-all">
          Movies
        </button>
<button className="shrink-0 bg-[#121212] border border-white/5 text-neutral-400 hover:text-white hover:bg-white/5 px-5 py-2 rounded-full text-sm font-medium tracking-tight transition-all">
          Music
        </button>
<button className="shrink-0 bg-[#121212] border border-white/5 text-neutral-400 hover:text-white hover:bg-white/5 px-5 py-2 rounded-full text-sm font-medium tracking-tight transition-all">
          Design
        </button>
<button className="shrink-0 bg-[#121212] border border-white/5 text-neutral-400 hover:text-white hover:bg-white/5 px-5 py-2 rounded-full text-sm font-medium tracking-tight transition-all">
          Video Edit
        </button>
<button className="shrink-0 bg-[#121212] border border-white/5 text-neutral-400 hover:text-white hover:bg-white/5 px-5 py-2 rounded-full text-sm font-medium tracking-tight transition-all">
          AI Tools
        </button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

<div className="bg-[#121212]/60 backdrop-blur-md rounded-[20px] border border-white/5 p-2 flex flex-col group hover:border-white/10 hover:bg-[#121212]/80 transition-all duration-300">
<div className="aspect-[4/3] bg-neutral-900 rounded-2xl mb-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-800/40 to-black z-0"></div>
<div className="absolute inset-0 flex items-center justify-center p-6 z-10">
<img alt="CapCut" className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded-2xl drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="absolute top-3 right-3 bg-[#FFD700] text-black text-xs font-semibold px-2.5 py-1 rounded-lg z-20 shadow-md">
              4.99 $
            </div>
</div>
<div className="px-3 pb-3 flex-1 flex flex-col">
<h3 className="text-lg font-medium text-white tracking-tight mb-1">
              CapCut Pro
            </h3>
<p className="text-xs text-neutral-500 mb-5 line-clamp-2">
              Unlock all premium templates, effects, and export in 4K without
              watermark.
            </p>
<div className="mt-auto flex items-end justify-between w-full">
<a className="h-9 px-4 bg-white/5 border border-white/5 hover:bg-[#FFD700] hover:border-[#FFD700] hover:text-black text-white text-sm font-medium rounded-xl flex items-center justify-center transition-all duration-300 group/btn" href="https://wa.me/923341100761?text=Hi%20TheOttDeals,%20I%20want%20to%20order%20this" onclick="openOrderModal('CapCut Pro', '4.99 $', '30 Days'); return false;">
                Buy Now
              </a>

<span className="text-xs text-neutral-600 bg-black/50 px-2 py-1 rounded-md border border-white/5 font-medium tracking-wide">
                Video Edit
              </span>
</div>
</div>
</div>

<div className="bg-[#121212]/60 backdrop-blur-md rounded-[20px] border border-white/5 p-2 flex flex-col group hover:border-white/10 hover:bg-[#121212]/80 transition-all duration-300">
<div className="aspect-[4/3] bg-neutral-900 rounded-2xl mb-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-black z-0"></div>
<div className="absolute inset-0 flex items-center justify-center p-6 z-10">
<img alt="Netflix" className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded-2xl drop-shadow-[0_0_20px_rgba(229,9,20,0.2)] group-hover:scale-110 transition-transform duration-500" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"/>
</div>
<div className="absolute top-3 right-3 bg-[#FFD700] text-black text-xs font-semibold px-2.5 py-1 rounded-lg z-20 shadow-md">
              3.99 $
            </div>
</div>
<div className="px-3 pb-3 flex-1 flex flex-col">
<h3 className="text-lg font-medium text-white tracking-tight mb-1">
              Netflix Premium
            </h3>
<p className="text-xs text-neutral-500 mb-5 line-clamp-2">
              1 Month Ultra HD access on your personal profile. Instant
              delivery.
            </p>
<div className="mt-auto flex items-end justify-between w-full">
<a className="h-9 px-4 bg-white/5 border border-white/5 hover:bg-[#FFD700] hover:border-[#FFD700] hover:text-black text-white text-sm font-medium rounded-xl flex items-center justify-center transition-all duration-300" href="https://wa.me/923341100761?text=Hi%20TheOttDeals,%20I%20want%20to%20order%20this" onclick="openOrderModal('Netflix Premium', '3.99 $', '30 Days'); return false;">
                Buy Now
              </a>
<span className="text-xs text-neutral-600 bg-black/50 px-2 py-1 rounded-md border border-white/5 font-medium tracking-wide">
                Movies
              </span>
</div>
</div>
</div>

<div className="bg-[#121212]/60 backdrop-blur-md rounded-[20px] border border-white/5 p-2 flex flex-col group hover:border-white/10 hover:bg-[#121212]/80 transition-all duration-300">
<div className="aspect-[4/3] bg-neutral-900 rounded-2xl mb-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-green-900/30 to-black z-0"></div>
<div className="absolute inset-0 flex items-center justify-center p-6 z-10">
<img alt="Spotify" className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded-2xl drop-shadow-[0_0_20px_rgba(29,185,84,0.2)] group-hover:scale-110 transition-transform duration-500" src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"/>
</div>
<div className="absolute top-3 right-3 bg-[#FFD700] text-black text-xs font-semibold px-2.5 py-1 rounded-lg z-20 shadow-md">
              1.99 $
            </div>
</div>
<div className="px-3 pb-3 flex-1 flex flex-col">
<h3 className="text-lg font-medium text-white tracking-tight mb-1">
              Spotify Premium
            </h3>
<p className="text-xs text-neutral-500 mb-5 line-clamp-2">
              Ad-free music listening, offline playback, and highest audio
              quality.
            </p>
<div className="mt-auto flex items-end justify-between w-full">
<a className="h-9 px-4 bg-white/5 border border-white/5 hover:bg-[#FFD700] hover:border-[#FFD700] hover:text-black text-white text-sm font-medium rounded-xl flex items-center justify-center transition-all duration-300" href="https://wa.me/923341100761?text=Hi%20TheOttDeals,%20I%20want%20to%20order%20this" onclick="openOrderModal('Spotify Premium', '1.99 $', '30 Days'); return false;">
                Buy Now
              </a>
<span className="text-xs text-neutral-600 bg-black/50 px-2 py-1 rounded-md border border-white/5 font-medium tracking-wide">
                Music
              </span>
</div>
</div>
</div>

<div className="bg-[#121212]/60 backdrop-blur-md rounded-[20px] border border-white/5 p-2 flex flex-col group hover:border-white/10 hover:bg-[#121212]/80 transition-all duration-300">
<div className="aspect-[4/3] bg-neutral-900 rounded-2xl mb-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-black z-0"></div>
<div className="absolute inset-0 flex items-center justify-center p-6 z-10">
<img alt="Canva" className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded-2xl drop-shadow-[0_0_20px_rgba(0,196,204,0.2)] group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="absolute top-3 right-3 bg-[#FFD700] text-black text-xs font-semibold px-2.5 py-1 rounded-lg z-20 shadow-md">
              2.49 $
            </div>
</div>
<div className="px-3 pb-3 flex-1 flex flex-col">
<h3 className="text-lg font-medium text-white tracking-tight mb-1">
              Canva Pro
            </h3>
<p className="text-xs text-neutral-500 mb-5 line-clamp-2">
              Access millions of premium assets, remove backgrounds instantly,
              and more.
            </p>
<div className="mt-auto flex items-end justify-between w-full">
<a className="h-9 px-4 bg-white/5 border border-white/5 hover:bg-[#FFD700] hover:border-[#FFD700] hover:text-black text-white text-sm font-medium rounded-xl flex items-center justify-center transition-all duration-300" href="https://wa.me/923341100761?text=Hi%20TheOttDeals,%20I%20want%20to%20order%20this" onclick="openOrderModal('Canva Pro', '2.49 $', '30 Days'); return false;">
                Buy Now
              </a>
<span className="text-xs text-neutral-600 bg-black/50 px-2 py-1 rounded-md border border-white/5 font-medium tracking-wide">
                Design
              </span>
</div>
</div>
</div>

<div className="bg-[#121212]/60 backdrop-blur-md rounded-[20px] border border-white/5 p-2 flex flex-col group hover:border-white/10 hover:bg-[#121212]/80 transition-all duration-300">
<div className="aspect-[4/3] bg-neutral-900 rounded-2xl mb-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-black z-0"></div>
<div className="absolute inset-0 flex items-center justify-center p-6 z-10">
<img alt="Midjourney" className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded-2xl drop-shadow-[0_0_20px_rgba(147,51,234,0.2)] group-hover:scale-110 transition-transform duration-500" src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png"/>
</div>
<div className="absolute top-3 right-3 bg-[#FFD700] text-black text-xs font-semibold px-2.5 py-1 rounded-lg z-20 shadow-md">
              8.99 $
            </div>
</div>
<div className="px-3 pb-3 flex-1 flex flex-col">
<h3 className="text-lg font-medium text-white tracking-tight mb-1">
              Midjourney V6
            </h3>
<p className="text-xs text-neutral-500 mb-5 line-clamp-2">
              Generate breathtaking AI art. Full access to standard plan
              features.
            </p>
<div className="mt-auto flex items-end justify-between w-full">
<a className="h-9 px-4 bg-white/5 border border-white/5 hover:bg-[#FFD700] hover:border-[#FFD700] hover:text-black text-white text-sm font-medium rounded-xl flex items-center justify-center transition-all duration-300" href="https://wa.me/923341100761?text=Hi%20TheOttDeals,%20I%20want%20to%20order%20this" onclick="openOrderModal('Midjourney V6', '8.99 $', '30 Days'); return false;">
                Buy Now
              </a>
<span className="text-xs text-neutral-600 bg-black/50 px-2 py-1 rounded-md border border-white/5 font-medium tracking-wide">
                AI Tools
              </span>
</div>
</div>
</div>

<div className="bg-[#121212]/60 backdrop-blur-md rounded-[20px] border border-white/5 p-2 flex flex-col group hover:border-white/10 hover:bg-[#121212]/80 transition-all duration-300">
<div className="aspect-[4/3] bg-neutral-900 rounded-2xl mb-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 to-black z-0"></div>
<div className="absolute inset-0 flex items-center justify-center p-6 z-10">
<img alt="Adobe" className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded-2xl drop-shadow-[0_0_20px_rgba(218,31,38,0.2)] group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="absolute top-3 right-3 bg-[#FFD700] text-black text-xs font-semibold px-2.5 py-1 rounded-lg z-20 shadow-md">
              9.99 $
            </div>
</div>
<div className="px-3 pb-3 flex-1 flex flex-col">
<h3 className="text-lg font-medium text-white tracking-tight mb-1">
              Adobe CC All Apps
            </h3>
<p className="text-xs text-neutral-500 mb-5 line-clamp-2">
              Complete suite including Photoshop, Illustrator, Premiere Pro, and
              more.
            </p>
<div className="mt-auto flex items-end justify-between w-full">
<a className="h-9 px-4 bg-white/5 border border-white/5 hover:bg-[#FFD700] hover:border-[#FFD700] hover:text-black text-white text-sm font-medium rounded-xl flex items-center justify-center transition-all duration-300" href="https://wa.me/923341100761?text=Hi%20TheOttDeals,%20I%20want%20to%20order%20this" onclick="openOrderModal('Adobe CC All Apps', '9.99 $', '30 Days'); return false;">
                Buy Now
              </a>
<span className="text-xs text-neutral-600 bg-black/50 px-2 py-1 rounded-md border border-white/5 font-medium tracking-wide">
                Design
              </span>
</div>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 z-[100] hidden items-center justify-center" id="orderModal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onclick="closeOrderModal()"></div>
<div className="bg-[#121212] border border-[#FFD700]/50 p-6 rounded-2xl shadow-[0_0_30px_rgba(255,215,0,0.15)] relative z-10 w-[90%] max-w-sm transform transition-all scale-95 opacity-0 duration-300" id="orderModalContent">
<div className="flex justify-between items-center mb-3">
<h2 className="text-xl font-semibold text-white tracking-tight">
            Confirm Order
          </h2>
<button className="text-neutral-400 hover:text-[#FFD700] transition-colors flex items-center justify-center p-1" onclick="closeOrderModal()">
<iconify-icon className="text-xl" icon="lucide:x"></iconify-icon>
</button>
</div>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed">
          Your order is ready. Click below to complete payment via WhatsApp.
        </p>
<div className="space-y-3 mb-6 bg-black/40 p-4 rounded-xl border border-white/5">
<div className="flex justify-between text-sm">
<span className="text-neutral-400">Product:</span>
<span className="text-white font-medium text-right ml-2" id="modalProductName"></span>
</div>
<div className="flex justify-between text-sm">
<span className="text-neutral-400">Validity/Expiry:</span>
<span className="text-white font-medium" id="modalProductTime"></span>
</div>
<div className="flex justify-between text-sm">
<span className="text-neutral-400">Price:</span>
<span className="text-[#FFD700] font-medium" id="modalProductPrice"></span>
</div>
</div>
<div className="flex items-center gap-3">
<button className="flex-[1] py-3 rounded-xl border border-white/10 text-white hover:bg-white/5 font-medium transition-colors text-sm tracking-tight" onclick="closeOrderModal()">
            Cancel
          </button>
<a className="flex-[2] py-3 rounded-xl bg-[#FFD700] text-black hover:shadow-[0_0_15px_rgba(255,215,0,0.3)] font-semibold transition-all text-sm tracking-tight text-center flex items-center justify-center gap-2" href="#" id="modalConfirmBtn">
            Confirm &amp; Pay
            <iconify-icon className="text-base" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>
</div>


    </>
  );
}
