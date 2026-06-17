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
    


      let currentProduct = { name: '', price: 0, duration: '', priceStr: '' };
      function openOrderModal(name, basePriceStr, time) {
        if (time === '30 Days') time = '1 Month';
        const basePrice = parseFloat(basePriceStr.replace('$', '').trim());
        currentProduct.name = name;
        currentProduct.basePrice = basePrice;
        currentProduct.duration = time;
        const cards = document.querySelectorAll('main > div.grid > div.group');
        let imgSrc = '';
        let category = '';
        cards.forEach(card => {
            const titleEl = card.querySelector('h3');
            if (titleEl && titleEl.innerText.trim() === name) {
                const img = card.querySelector('img');
                if(img) imgSrc = img.src;
                const catSpan = card.querySelector('.hidden.sm\\:inline-block');
                if(catSpan) category = catSpan.innerText.trim();
            }
        });
        if(!imgSrc) {
            if(name.includes('Netflix')) imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg';
            else if(name.includes('Spotify')) imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg';
            else if(name.includes('ChatGPT')) imgSrc = 'https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/chatgpt.png';
            else imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg';
            if(name.includes('Netflix') || name.includes('Spotify')) category = 'Movies';
            if(name.includes('ChatGPT')) category = 'AI Tools';
        }
        document.getElementById('detailImg').src = imgSrc;
        document.getElementById('detailTitle').innerText = name;
        const durationContainer = document.getElementById('durationContainer');
        durationContainer.innerHTML = '';
        const isSpecial = name.includes('Netflix') || name.includes('Prime');
        if (isSpecial) {
            const p1 = basePrice;
            const p3 = (basePrice * 3 * 0.9).toFixed(2);
            const p6 = (basePrice * 6 * 0.8).toFixed(2);
            durationContainer.innerHTML = `
                <button onclick="selectDuration(this, '${name.replace(/'/g, "\\'")}', 1, ${p1})" class="duration-btn w-full flex items-center justify-between p-3.5 rounded-xl border border-[#FFD700] bg-[#FFD700]/10 transition-all text-left">
                    <span class="text-white text-sm font-medium tracking-tight">1 Month</span>
                    <span class="text-[#FFD700] text-sm font-semibold tracking-tight">${p1.toFixed(2)} $</span>
                </button>
            `;
            selectDuration(durationContainer.firstElementChild, name, 1, p1);
        } else {
            durationContainer.innerHTML = `
                <button class="duration-btn w-full flex items-center justify-between p-3.5 rounded-xl border border-[#FFD700] bg-[#FFD700]/10 transition-all text-left cursor-default">
                    <span class="text-white text-sm font-medium tracking-tight">${time}</span>
                    <span class="text-[#FFD700] text-sm font-semibold tracking-tight">${basePrice.toFixed(2)} $</span>
                </button>
            `;
            selectDuration(durationContainer.firstElementChild, name, time.includes('Month') ? parseInt(time) || 1 : 1, basePrice, time);
        }
        const similarContainer = document.getElementById('similarProductsContainer');
        similarContainer.innerHTML = '';
        document.getElementById('productDetailModal').classList.remove('hidden');
        document.getElementById('productDetailModal').classList.add('flex');
        document.body.style.overflow = 'hidden';
      }
      function selectDuration(btn, name, months, price, labelOverride) {
        const btns = document.querySelectorAll('.duration-btn');
        btns.forEach(b => {
            b.className = 'duration-btn w-full flex items-center justify-between p-3.5 rounded-xl border border-white/5 hover:border-white/20 bg-black/50 transition-all text-left';
            b.querySelector('span:first-child').classList.remove('text-white');
            b.querySelector('span:first-child').classList.add('text-neutral-400');
            b.querySelector('span:last-child').classList.remove('text-[#FFD700]');
            b.querySelector('span:last-child').classList.add('text-white');
        });
        btn.className = 'duration-btn w-full flex items-center justify-between p-3.5 rounded-xl border border-[#FFD700] bg-[#FFD700]/10 transition-all text-left';
        btn.querySelector('span:first-child').classList.remove('text-neutral-400');
        btn.querySelector('span:first-child').classList.add('text-white');
        btn.querySelector('span:last-child').classList.remove('text-white');
        btn.querySelector('span:last-child').classList.add('text-[#FFD700]');
        const priceStr = parseFloat(price).toFixed(2) + ' $';
        document.getElementById('detailPrice').innerText = priceStr;
        const durationLabel = labelOverride ? labelOverride : (months === 1 ? '1 Month' : months + ' Months');
        const msg = `Hi TheOttDeals, I want to order.\nProduct: ${name} | Duration: ${durationLabel}\nPrice: ${priceStr}\nBinance ID: 583679765\nPlease send a screenshot after payment. Thank you!`;
        const url = 'https://wa.me/923341100761?text=' + encodeURIComponent(msg);
        const orderBtn = document.getElementById('detailOrderBtn');
        orderBtn.onclick = function(e) {
            e.preventDefault();
            window.location.href = url;
        };
      }
      function closeProductModal() {
        document.getElementById('productDetailModal').classList.add('hidden');
        document.getElementById('productDetailModal').classList.remove('flex');
        document.body.style.overflow = '';
      }
      function switchTab(tab) {
        if(tab === 'about') {
            document.getElementById('tabAbout').className = 'flex-1 py-4 text-sm font-medium text-white border-b-2 border-[#FFD700] bg-white/5 transition-all';
            document.getElementById('tabTerms').className = 'flex-1 py-4 text-sm font-medium text-neutral-400 border-b-2 border-transparent hover:text-white hover:bg-white/5 transition-all';
            document.getElementById('contentAbout').classList.remove('hidden');
            document.getElementById('contentTerms').classList.add('hidden');
        } else {
            document.getElementById('tabTerms').className = 'flex-1 py-4 text-sm font-medium text-white border-b-2 border-[#FFD700] bg-white/5 transition-all';
            document.getElementById('tabAbout').className = 'flex-1 py-4 text-sm font-medium text-neutral-400 border-b-2 border-transparent hover:text-white hover:bg-white/5 transition-all';
            document.getElementById('contentTerms').classList.remove('hidden');
            document.getElementById('contentAbout').classList.add('hidden');
        }
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
      

<div className="bg-[#FFD700] overflow-hidden whitespace-nowrap py-1 sm:py-1.5 flex items-center border-b border-[#FFD700]/20">
<div className="animate-marquee inline-block flex-shrink-0">
<span className="text-black text-[10px] sm:text-xs font-medium tracking-wide px-4">
          ATTENTION! WE DON'T HAVE AN AUTOMATED PAYMENT SYSTEM. CLICKING 'BUY'
          WILL REDIRECT YOU TO OUR OFFICIAL WHATSAPP FOR INSTANT ACTIVATION.
        </span>
<span className="text-black text-[10px] sm:text-xs font-medium tracking-wide px-4">
          ATTENTION! WE DON'T HAVE AN AUTOMATED PAYMENT SYSTEM. CLICKING 'BUY'
          WILL REDIRECT YOU TO OUR OFFICIAL WHATSAPP FOR INSTANT ACTIVATION.
        </span>
<span className="text-black text-[10px] sm:text-xs font-medium tracking-wide px-4">
          ATTENTION! WE DON'T HAVE AN AUTOMATED PAYMENT SYSTEM. CLICKING 'BUY'
          WILL REDIRECT YOU TO OUR OFFICIAL WHATSAPP FOR INSTANT ACTIVATION.
        </span>
</div>
</div>

<nav className="border-b border-white/5 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#FFD700] rounded-lg flex items-center justify-center">
<iconify-icon className="text-black text-lg" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-white text-base sm:text-lg font-semibold tracking-tighter uppercase">
            THEOTTDEALS
          </span>
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
<a className="inline-flex items-center justify-center gap-2 bg-[#FFD700] text-black px-6 py-3 rounded-xl text-sm font-semibold hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all duration-300 w-full sm:w-auto" href="https://wa.me/923341100761?text=Hi%20TheOttDeals,%20I%20want%20to%20order%20Spotify" onclick="openOrderModal('Spotify Premium', '3.00 $', '30 Days'); return false;">
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
<iconify-icon className="text-xl text-neutral-400 group-hover:text-white transition-colors" icon="solar:headphones-round-sound-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#121212] rounded-full z-10"></span>
<span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></span>
</div>
<div>
<p className="text-sm font-medium text-white tracking-tight">
                  Support Team 24/7
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

<div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">

<div className="bg-[#121212]/60 backdrop-blur-md rounded-2xl sm:rounded-[20px] border border-white/5 p-1.5 sm:p-2 flex flex-col group hover:border-white/10 hover:bg-[#121212]/80 transition-all duration-300">
<div className="aspect-[4/3] bg-neutral-900 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-800/40 to-black z-0"></div>
<div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 z-10">
<img alt="CapCut" className="w-16 h-16 sm:w-28 sm:h-28 object-contain rounded-xl sm:rounded-2xl drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-[#FFD700] text-black text-[10px] sm:text-xs font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg z-20 shadow-md">
              4.99 $
            </div>
</div>
<div className="px-2 sm:px-3 pb-2 sm:pb-3 flex-1 flex flex-col">
<h3 className="text-sm sm:text-lg font-medium text-white tracking-tight mb-1">
              CapCut Pro
            </h3>
<p className="text-[10px] sm:text-xs text-neutral-500 mb-3 sm:mb-5 line-clamp-2 leading-tight sm:leading-relaxed">
              Unlock all premium templates, effects, and export in 4K without
              watermark.
            </p>
<div className="mt-auto flex items-end justify-between w-full">
<a className="h-8 sm:h-9 w-full sm:w-auto px-3 sm:px-4 bg-white/5 border border-white/5 hover:bg-[#FFD700] hover:border-[#FFD700] hover:text-black text-white text-[11px] sm:text-sm font-medium rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300" href="https://wa.me/923341100761?text=Hi%20TheOttDeals,%20I%20want%20to%20order%20this" onclick="openOrderModal('CapCut Pro', '4.99 $', '30 Days'); return false;">
                Buy Now
              </a>
<span className="hidden sm:inline-block text-xs text-neutral-600 bg-black/50 px-2 py-1 rounded-md border border-white/5 font-medium tracking-wide">
                Video Edit
              </span>
</div>
</div>
</div>

<div className="bg-[#121212]/60 backdrop-blur-md rounded-2xl sm:rounded-[20px] border border-white/5 p-1.5 sm:p-2 flex flex-col group hover:border-white/10 hover:bg-[#121212]/80 transition-all duration-300">
<div className="aspect-[4/3] bg-neutral-900 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-black z-0"></div>
<div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 z-10">
<img alt="Netflix" className="w-16 h-16 sm:w-28 sm:h-28 object-contain rounded-xl sm:rounded-2xl drop-shadow-[0_0_20px_rgba(229,9,20,0.2)] group-hover:scale-110 transition-transform duration-500" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"/>
</div>
<div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-[#FFD700] text-black text-[10px] sm:text-xs font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg z-20 shadow-md">
              3.99 $
            </div>
</div>
<div className="px-2 sm:px-3 pb-2 sm:pb-3 flex-1 flex flex-col">
<h3 className="text-sm sm:text-lg font-medium text-white tracking-tight mb-1">
              Netflix Premium (1-User)
            </h3>
<p className="text-[10px] sm:text-xs text-neutral-500 mb-3 sm:mb-5 line-clamp-2 leading-tight sm:leading-relaxed">
              1 Month Ultra HD access on your personal profile. Instant
              delivery.
            </p>
<div className="mt-auto flex items-end justify-between w-full">
<a className="h-8 sm:h-9 w-full sm:w-auto px-3 sm:px-4 bg-white/5 border border-white/5 hover:bg-[#FFD700] hover:border-[#FFD700] hover:text-black text-white text-[11px] sm:text-sm font-medium rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300" href="https://wa.me/923341100761?text=Hi%20TheOttDeals,%20I%20want%20to%20order%20this" onclick="openOrderModal('Netflix Premium (1-User)', '3.99 $', '1 Month'); return false;">
                Buy Now
              </a>
<span className="hidden sm:inline-block text-xs text-neutral-600 bg-black/50 px-2 py-1 rounded-md border border-white/5 font-medium tracking-wide">
                Movies
              </span>
</div>
</div>
</div>

<div className="bg-[#121212]/60 backdrop-blur-md rounded-2xl sm:rounded-[20px] border border-white/5 p-1.5 sm:p-2 flex flex-col group hover:border-white/10 hover:bg-[#121212]/80 transition-all duration-300">
<div className="aspect-[4/3] bg-neutral-900 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-green-900/30 to-black z-0"></div>
<div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 z-10">
<img alt="Spotify" className="w-16 h-16 sm:w-28 sm:h-28 object-contain rounded-xl sm:rounded-2xl drop-shadow-[0_0_20px_rgba(29,185,84,0.2)] group-hover:scale-110 transition-transform duration-500" src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"/>
</div>
<div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-[#FFD700] text-black text-[10px] sm:text-xs font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg z-20 shadow-md">
              3.00 $
            </div>
</div>
<div className="px-2 sm:px-3 pb-2 sm:pb-3 flex-1 flex flex-col">
<h3 className="text-sm sm:text-lg font-medium text-white tracking-tight mb-1">
              Spotify Premium
            </h3>
<p className="text-[10px] sm:text-xs text-neutral-500 mb-3 sm:mb-5 line-clamp-2 leading-tight sm:leading-relaxed">
              Ad-free music listening, offline playback, and highest audio
              quality.
            </p>
<div className="mt-auto flex items-end justify-between w-full">
<a className="h-8 sm:h-9 w-full sm:w-auto px-3 sm:px-4 bg-white/5 border border-white/5 hover:bg-[#FFD700] hover:border-[#FFD700] hover:text-black text-white text-[11px] sm:text-sm font-medium rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300" href="https://wa.me/923341100761?text=Hi%20TheOttDeals,%20I%20want%20to%20order%20this" onclick="openOrderModal('Spotify Premium', '3.00 $', '30 Days'); return false;">
                Buy Now
              </a>
<span className="hidden sm:inline-block text-xs text-neutral-600 bg-black/50 px-2 py-1 rounded-md border border-white/5 font-medium tracking-wide">
                Music
              </span>
</div>
</div>
</div>

<div className="bg-[#121212]/60 backdrop-blur-md rounded-2xl sm:rounded-[20px] border border-white/5 p-1.5 sm:p-2 flex flex-col group hover:border-white/10 hover:bg-[#121212]/80 transition-all duration-300">
<div className="aspect-[4/3] bg-neutral-900 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-black z-0"></div>
<div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 z-10">
<img alt="Canva" className="w-16 h-16 sm:w-28 sm:h-28 object-contain rounded-xl sm:rounded-2xl drop-shadow-[0_0_20px_rgba(0,196,204,0.2)] group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-[#FFD700] text-black text-[10px] sm:text-xs font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg z-20 shadow-md">
              2.49 $
            </div>
</div>
<div className="px-2 sm:px-3 pb-2 sm:pb-3 flex-1 flex flex-col">
<h3 className="text-sm sm:text-lg font-medium text-white tracking-tight mb-1">
              Canva Pro
            </h3>
<p className="text-[10px] sm:text-xs text-neutral-500 mb-3 sm:mb-5 line-clamp-2 leading-tight sm:leading-relaxed">
              Access millions of premium assets, remove backgrounds instantly,
              and more.
            </p>
<div className="mt-auto flex items-end justify-between w-full">
<a className="h-8 sm:h-9 w-full sm:w-auto px-3 sm:px-4 bg-white/5 border border-white/5 hover:bg-[#FFD700] hover:border-[#FFD700] hover:text-black text-white text-[11px] sm:text-sm font-medium rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300" href="https://wa.me/923341100761?text=Hi%20TheOttDeals,%20I%20want%20to%20order%20this" onclick="openOrderModal('Canva Pro', '2.49 $', '30 Days'); return false;">
                Buy Now
              </a>
<span className="hidden sm:inline-block text-xs text-neutral-600 bg-black/50 px-2 py-1 rounded-md border border-white/5 font-medium tracking-wide">
                Design
              </span>
</div>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 z-[100] hidden flex-col bg-black/95 backdrop-blur-xl overflow-y-auto w-full h-full" id="productDetailModal">
<div className="max-w-6xl mx-auto w-full px-4 py-6 sm:px-6 lg:px-8">
<button className="flex items-center gap-2 text-neutral-400 hover:text-[#FFD700] mb-6 transition-colors w-fit" onclick="closeProductModal()">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon>
<span className="text-sm font-medium">Back</span>
</button>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
<div className="lg:col-span-2 flex flex-col gap-8">
<div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
<div className="w-full sm:w-[45%] aspect-[4/3] bg-[#121212] rounded-[20px] border border-white/5 relative overflow-hidden flex items-center justify-center p-8 group">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-black z-0"></div>
<img alt="Product Image" className="relative z-10 w-32 h-32 sm:w-40 sm:h-40 object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] group-hover:scale-110 transition-transform duration-500" id="detailImg" src=""/>
</div>
<div className="w-full sm:w-[55%] flex flex-col">
<div className="inline-flex items-center gap-1.5 bg-green-500/10 text-green-400 border border-green-500/20 px-2.5 py-1 rounded-md text-[11px] font-semibold w-fit mb-4 uppercase tracking-wide">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  Available
                </div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-5" id="detailTitle"></h2>
<div className="mb-8">
<h4 className="text-sm font-medium text-neutral-400 mb-3">
                    Select Duration
                  </h4>
<div className="flex flex-col gap-2.5" id="durationContainer"></div>
</div>
<div className="mt-auto">
<div className="flex items-end justify-between mb-4">
<span className="text-neutral-400 text-sm font-medium">
                      Total Price
                    </span>
<span className="text-3xl sm:text-4xl font-semibold text-[#FFD700] tracking-tight" id="detailPrice"></span>
</div>
<a className="w-full bg-[#FFD700] text-black py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-semibold shadow-[0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_0_25px_rgba(255,215,0,0.6)] transition-all duration-300 flex items-center justify-center gap-2" href="#" id="detailOrderBtn">
                    Order via WhatsApp
                    <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="bg-[#121212] rounded-[20px] border border-white/5 overflow-hidden">
<div className="flex border-b border-white/5">
<button className="flex-1 py-4 text-sm font-medium text-white border-b-2 border-[#FFD700] bg-white/5 transition-all" id="tabAbout" onclick="switchTab('about')">
                  About the Product
                </button>
<button className="flex-1 py-4 text-sm font-medium text-neutral-400 border-b-2 border-transparent hover:text-white hover:bg-white/5 transition-all" id="tabTerms" onclick="switchTab('terms')">
                  Terms of Use
                </button>
</div>
<div className="p-6 sm:p-8">
<div className="text-sm text-neutral-300 space-y-4 leading-relaxed" id="contentAbout">
<p>
                    Experience premium digital access delivered instantly to
                    your personal device. Enjoy uninterrupted service with our
                    dedicated support.
                  </p>
<ul className="space-y-3">
<li className="flex items-start gap-2.5">
<iconify-icon className="text-[#FFD700] text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>
                        Full premium features unlocked for the selected
                        duration.
                      </span>
</li>
<li className="flex items-start gap-2.5">
<iconify-icon className="text-[#FFD700] text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>
                        Instant delivery directly via our Official WhatsApp.
                      </span>
</li>
</ul>
</div>
<div className="text-sm text-neutral-300 space-y-4 leading-relaxed hidden" id="contentTerms">
<p className="text-red-400 font-medium">
                    Please strictly follow these rules to maintain your
                    warranty. Violations will result in an immediate ban without
                    a refund.
                  </p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-1">
<div className="sticky top-20 bg-[#121212] rounded-[20px] border border-white/5 p-6">
<h3 className="text-base font-semibold text-white tracking-tight flex items-center gap-2 mb-5">
<iconify-icon className="text-[#FFD700] text-lg" icon="solar:layers-linear"></iconify-icon>
                Similar Products
              </h3>
<div className="flex flex-col gap-3" id="similarProductsContainer"></div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
