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
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // Carousel Logic
        document.addEventListener('DOMContentLoaded', () => {
            const slides = document.querySelectorAll('.slide');
            const indicatorsContainer = document.getElementById('indicators');
            const prevBtn = document.getElementById('prev-btn');
            const nextBtn = document.getElementById('next-btn');
            const carousel = document.getElementById('carousel');
            
            let currentIndex = 0;
            const totalSlides = slides.length;
            let autoPlayInterval;
            const INTERVAL_TIME = 7000;

            // Generate Indicators
            slides.forEach((_, index) => {
                const dot = document.createElement('button');
                dot.className = `h-1 rounded-full transition-all duration-500 ease-in-out ${index === 0 ? 'w-12 bg-amber-500' : 'w-4 bg-zinc-700 hover:bg-zinc-500'}`;
                dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
                dot.addEventListener('click', () => goToSlide(index));
                indicatorsContainer.appendChild(dot);
            });
            
            const dots = indicatorsContainer.querySelectorAll('button');

            function updateCarousel() {
                slides.forEach((slide, index) => {
                    const img = slide.querySelector('img');
                    
                    if (index === currentIndex) {
                        slide.classList.remove('opacity-0');
                        slide.classList.add('opacity-100', 'slide-active');
                        slide.style.zIndex = '10';
                        
                        // Subtle zoom effect reset
                        img.classList.remove('scale-100');
                        img.classList.add('scale-105');
                        
                        dots[index].className = 'h-1 rounded-full transition-all duration-500 ease-in-out w-12 bg-amber-500';
                    } else {
                        slide.classList.remove('opacity-100', 'slide-active');
                        slide.classList.add('opacity-0');
                        slide.style.zIndex = '0';
                        
                        img.classList.remove('scale-105');
                        img.classList.add('scale-100');
                        
                        dots[index].className = 'h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500';
                    }
                });
            }

            function nextSlide() {
                currentIndex = (currentIndex + 1) % totalSlides;
                updateCarousel();
            }

            function prevSlide() {
                currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                updateCarousel();
            }

            function goToSlide(index) {
                currentIndex = index;
                updateCarousel();
                resetInterval();
            }

            function startInterval() {
                autoPlayInterval = setInterval(nextSlide, INTERVAL_TIME);
            }

            function resetInterval() {
                clearInterval(autoPlayInterval);
                startInterval();
            }

            // Button controls
            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetInterval();
            });

            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetInterval();
            });

            // Swipe controls
            let touchStartX = 0;
            let touchEndX = 0;

            carousel.addEventListener('touchstart', e => {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });

            carousel.addEventListener('touchend', e => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            }, { passive: true });

            function handleSwipe() {
                const swipeThreshold = 50;
                if (touchEndX < touchStartX - swipeThreshold) {
                    nextSlide();
                    resetInterval();
                }
                if (touchEndX > touchStartX + swipeThreshold) {
                    prevSlide();
                    resetInterval();
                }
            }

            // Initialize
            startInterval();
            
            // Trigger initial zoom effect on first load
            setTimeout(() => {
                slides[0].querySelector('img').classList.add('scale-105');
            }, 50);
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
      

<nav className="fixed z-50 flex bg-gradient-to-b from-zinc-950/80 to-transparent w-full pt-8 pr-6 pb-8 pl-6 top-0 items-center justify-between">
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="lucide lucide-diamond text-amber-500 w-5 h-5" data-darkreader-inline-stroke="" data-lucide="diamond" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{'--darkreader-inline-stroke': 'currentColor'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path></svg>
<span className="text-lg font-medium tracking-tight uppercase tracking-widest text-zinc-100">
                Infinite Luxury
            </span>
</div>
<div className="flex items-center gap-6">
<button className="hidden md:flex text-lg text-zinc-300 hover:text-amber-500 transition-colors">Collection</button>
<button className="hidden md:flex text-lg text-zinc-300 hover:text-amber-500 transition-colors">Heritage</button>
<button className="text-zinc-100 hover:text-amber-500 transition-colors p-2">
<svg aria-hidden="true" className="lucide lucide-menu w-6 h-6" data-darkreader-inline-stroke="" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{'--darkreader-inline-stroke': 'currentColor'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<main className="w-full h-screen relative" id="carousel"><iframe allowfullscreen="" className="border-none w-full h-full absolute top-0 right-0 bottom-0 left-0" data-container-bg="true" frameborder="0" loading="lazy" src="&lt;!DOCTYPE html&gt; &lt;html lang=&quot;en&quot;&gt; &lt;head&gt;   &lt;meta charset=&quot;UTF-8&quot; /&gt;   &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;   &lt;title&gt;High-Performance Interactive Spin Viewer&lt;/title&gt;   &lt;style&gt;     :root {       --bg: #121212;       --panel: #1e1e1e;       --text: #ffffff;       --muted: #aaaaaa;       --accent: #007bff;       --good: #00e676;       --border: #2a2a2a;     }      * { box-sizing: border-box; }      body {       margin: 0;       padding: 24px;       background: var(--bg);       color: var(--text);       font-family: system-ui, sans-serif;       display: flex;       flex-direction: column;       align-items: center;       gap: 20px;     }      .panel {       width: 100%;       max-width: 960px;       background: var(--panel);       border: 1px solid var(--border);       border-radius: 12px;       padding: 18px;       box-shadow: 0 10px 30px rgba(0,0,0,0.25);     }      h2 { margin: 0 0 14px; font-size: 1.15rem; }      .row {       display: flex;       flex-wrap: wrap;       gap: 12px 18px;       align-items: center;     }     .row + .row { margin-top: 14px; }      label {       font-size: 0.92rem;       color: var(--muted);       display: inline-flex;       align-items: center;       gap: 8px;       cursor: pointer;     }      input[type=&quot;range&quot;] { width: 140px; cursor: pointer; }     input[type=&quot;file&quot;] { max-width: 100%; }      .progress-wrap {       width: 100%;       height: 10px;       background: #333;       border-radius: 999px;       overflow: hidden;       display: none;     }      .progress {       width: 0%;       height: 100%;       background: var(--accent);       transition: width 80ms linear;     }      .status {       font-size: 0.92rem;       color: var(--muted);       min-height: 1.2em;       font-family: monospace;     }     .status.good { color: var(--good); }      .viewer-wrap {       width: 100%;       max-width: 960px;       display: none;     }      .viewer {       position: relative;       width: 100%;       aspect-ratio: 16 / 9;       background: #000;       border-radius: 12px;       overflow: hidden;       border: 1px solid var(--border);       cursor: ew-resize;       touch-action: none;       user-select: none;     }      canvas {       width: 100%;       height: 100%;       display: block;       background: #000;     }      .hint {       position: absolute;       left: 12px;       bottom: 12px;       padding: 8px 10px;       font-size: 0.85rem;       background: rgba(0,0,0,0.55);       border: 1px solid rgba(255,255,255,0.08);       border-radius: 999px;       color: #ddd;       pointer-events: none;       backdrop-filter: blur(4px);     }      .metrics {       display: grid;       grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));       gap: 10px;       margin-top: 12px;       font-size: 0.88rem;       color: var(--muted);     }      .metric {       background: #181818;       border: 1px solid var(--border);       border-radius: 10px;       padding: 10px;     }     .metric strong {       display: block;       color: var(--text);       margin-bottom: 4px;       font-size: 0.95rem;     }   &lt;/style&gt; &lt;/head&gt; &lt;body&gt;   &lt;div class=&quot;panel&quot;&gt;     &lt;h2&gt;Video to Interactive Array Extractor&lt;/h2&gt;      &lt;div class=&quot;row&quot;&gt;       &lt;input id=&quot;videoUploader&quot; type=&quot;file&quot; accept=&quot;video/*&quot; /&gt;     &lt;/div&gt;      &lt;div class=&quot;row&quot;&gt;       &lt;label&gt;         Frames         &lt;input id=&quot;framesInput&quot; type=&quot;range&quot; min=&quot;24&quot; max=&quot;180&quot; step=&quot;1&quot; value=&quot;72&quot; /&gt;         &lt;span id=&quot;framesValue&quot;&gt;72&lt;/span&gt;       &lt;/label&gt;        &lt;label&gt;         Max Width         &lt;input id=&quot;widthInput&quot; type=&quot;range&quot; min=&quot;640&quot; max=&quot;1920&quot; step=&quot;32&quot; value=&quot;1280&quot; /&gt;         &lt;span id=&quot;widthValue&quot;&gt;1280&lt;/span&gt;       &lt;/label&gt;        &lt;label&gt;         Drag Sensitivity         &lt;input id=&quot;sensitivityInput&quot; type=&quot;range&quot; min=&quot;0.25&quot; max=&quot;3&quot; step=&quot;0.05&quot; value=&quot;1&quot; /&gt;         &lt;span id=&quot;sensitivityValue&quot;&gt;1.00&lt;/span&gt;       &lt;/label&gt;     &lt;/div&gt;      &lt;div class=&quot;row&quot;&gt;       &lt;label&gt;&lt;input id=&quot;loopInput&quot; type=&quot;checkbox&quot; checked /&gt; Infinite Loop&lt;/label&gt;       &lt;label&gt;&lt;input id=&quot;hoverInput&quot; type=&quot;checkbox&quot; checked /&gt; Hover Scrub&lt;/label&gt;       &lt;label&gt;&lt;input id=&quot;reverseInput&quot; type=&quot;checkbox&quot; /&gt; Reverse Polarity&lt;/label&gt;       &lt;label&gt;&lt;input id=&quot;autoplayInput&quot; type=&quot;checkbox&quot; /&gt; Auto Spin&lt;/label&gt;     &lt;/div&gt;      &lt;div class=&quot;row&quot;&gt;       &lt;div class=&quot;progress-wrap&quot; id=&quot;progressWrap&quot;&gt;         &lt;div class=&quot;progress&quot; id=&quot;progressBar&quot;&gt;&lt;/div&gt;       &lt;/div&gt;     &lt;/div&gt;      &lt;div class=&quot;row&quot;&gt;       &lt;div class=&quot;status&quot; id=&quot;status&quot;&gt;System idle. Awaiting media input...&lt;/div&gt;     &lt;/div&gt;      &lt;div class=&quot;metrics&quot; id=&quot;metrics&quot; style=&quot;display:none;&quot;&gt;       &lt;div class=&quot;metric&quot;&gt;&lt;strong&gt;Allocated Frames&lt;/strong&gt;&lt;span id=&quot;metricFrames&quot;&gt;-&lt;/span&gt;&lt;/div&gt;       &lt;div class=&quot;metric&quot;&gt;&lt;strong&gt;Source Resolution&lt;/strong&gt;&lt;span id=&quot;metricSource&quot;&gt;-&lt;/span&gt;&lt;/div&gt;       &lt;div class=&quot;metric&quot;&gt;&lt;strong&gt;Extraction Matrix&lt;/strong&gt;&lt;span id=&quot;metricExtracted&quot;&gt;-&lt;/span&gt;&lt;/div&gt;       &lt;div class=&quot;metric&quot;&gt;&lt;strong&gt;Active Index&lt;/strong&gt;&lt;span id=&quot;metricCurrent&quot;&gt;-&lt;/span&gt;&lt;/div&gt;     &lt;/div&gt;   &lt;/div&gt;    &lt;div class=&quot;viewer-wrap&quot; id=&quot;viewerWrap&quot;&gt;     &lt;div class=&quot;viewer&quot; id=&quot;viewer&quot;&gt;       &lt;canvas id=&quot;viewerCanvas&quot;&gt;&lt;/canvas&gt;       &lt;div class=&quot;hint&quot; id=&quot;interactionHint&quot;&gt;Drag, swipe, or hover left/right&lt;/div&gt;     &lt;/div&gt;   &lt;/div&gt;    &lt;video id=&quot;hiddenVideo&quot; muted playsinline preload=&quot;metadata&quot; style=&quot;display:none&quot;&gt;&lt;/video&gt;    &lt;script&gt;     // System Pointers     const uploader = document.getElementById('videoUploader');     const hiddenVideo = document.getElementById('hiddenVideo');     const viewerWrap = document.getElementById('viewerWrap');     const viewer = document.getElementById('viewer');     const canvas = document.getElementById('viewerCanvas');     const ctx = canvas.getContext('2d', { alpha: false, desynchronized: true });      // UI Pointers     const progressWrap = document.getElementById('progressWrap');     const progressBar = document.getElementById('progressBar');     const statusEl = document.getElementById('status');     const hintEl = document.getElementById('interactionHint');          const inputs = {       frames: document.getElementById('framesInput'),       width: document.getElementById('widthInput'),       sensitivity: document.getElementById('sensitivityInput'),       loop: document.getElementById('loopInput'),       hover: document.getElementById('hoverInput'),       reverse: document.getElementById('reverseInput'),       autoplay: document.getElementById('autoplayInput')     };      const values = {       frames: document.getElementById('framesValue'),       width: document.getElementById('widthValue'),       sensitivity: document.getElementById('sensitivityValue')     };      const metrics = {       container: document.getElementById('metrics'),       frames: document.getElementById('metricFrames'),       source: document.getElementById('metricSource'),       extracted: document.getElementById('metricExtracted'),       current: document.getElementById('metricCurrent')     };      // Event Bindings     inputs.frames.addEventListener('input', () =&gt; values.frames.textContent = inputs.frames.value);     inputs.width.addEventListener('input', () =&gt; values.width.textContent = inputs.width.value);     inputs.sensitivity.addEventListener('input', () =&gt; values.sensitivity.textContent = Number(inputs.sensitivity.value).toFixed(2));      // State Machine     let objectUrl = null;     let frames = [];     let isProcessing = false;     let renderPending = false;     let cachedGeometry = { dx: 0, dy: 0, dw: 0, dh: 0 };      let progress = 0;      let currentFrame = 0;     let lastRenderedFrame = -1;      let pointerActive = false;     let dragStartX = 0;     let dragStartProgress = 0;      let autoplayRAF = 0;     let lastAutoTime = 0;      // Subroutines     function setStatus(text, good = false) {       statusEl.textContent = `[${new Date().toISOString().split('T')[1].slice(0,8)}] ${text}`;       statusEl.classList.toggle('good', good);     }      function updateMetrics() {       metrics.container.style.display = frames.length ? 'grid' : 'none';       metrics.frames.textContent = frames.length ? String(frames.length) : '-';       metrics.source.textContent = hiddenVideo.videoWidth ? `${hiddenVideo.videoWidth} × ${hiddenVideo.videoHeight}` : '-';       metrics.extracted.textContent = frames.length ? `${frames[0].width} × ${frames[0].height}` : '-';       metrics.current.textContent = frames.length ? `${currentFrame + 1} / ${frames.length}` : '-';     }      function getSafeProgress(v) {       if (inputs.loop.checked) {         v = v % 1;         return v &lt; 0 ? v + 1 : v;       }       return Math.max(0, Math.min(1, v));     }      function getFrameIndex(p) {       if (!frames.length) return 0;       const mapped = inputs.reverse.checked ? (1 - p) : p;       const idx = Math.round(mapped * (frames.length - 1));       return Math.max(0, Math.min(frames.length - 1, idx));     }      function updateGeometry() {       if (!frames.length) return;       const cw = canvas.width;       const ch = canvas.height;       const iw = frames[0].width;       const ih = frames[0].height;       const scale = Math.min(cw / iw, ch / ih);       cachedGeometry.dw = Math.round(iw * scale);       cachedGeometry.dh = Math.round(ih * scale);       cachedGeometry.dx = Math.round((cw - cachedGeometry.dw) / 2);       cachedGeometry.dy = Math.round((ch - cachedGeometry.dh) / 2);     }      function resizeDisplay() {       const rect = viewer.getBoundingClientRect();       const dpr = Math.min(window.devicePixelRatio || 1, 2);       const w = Math.max(1, Math.round(rect.width * dpr));       const h = Math.max(1, Math.round(rect.height * dpr));        if (canvas.width !== w || canvas.height !== h) {         canvas.width = w;         canvas.height = h;         updateGeometry();         requestRender();       }     }      function drawFrame() {       if (!frames.length) return;       currentFrame = getFrameIndex(progress);              if (currentFrame === lastRenderedFrame) return;        const bmp = frames[currentFrame];       if (!bmp) return;        ctx.clearRect(0, 0, canvas.width, canvas.height);       ctx.drawImage(bmp, cachedGeometry.dx, cachedGeometry.dy, cachedGeometry.dw, cachedGeometry.dh);              lastRenderedFrame = currentFrame;       updateMetrics();     }      function requestRender() {       if (renderPending) return;       renderPending = true;       requestAnimationFrame(() =&gt; {         renderPending = false;         drawFrame();       });     }      function manageAutoplay() {       if (autoplayRAF) cancelAnimationFrame(autoplayRAF);       if (!inputs.autoplay.checked || !frames.length) return;        lastAutoTime = performance.now();       const tick = (now) =&gt; {         if (!inputs.autoplay.checked || pointerActive || isProcessing) {           autoplayRAF = requestAnimationFrame(tick);           lastAutoTime = now;           return;         }         const dt = Math.min(50, now - lastAutoTime);         lastAutoTime = now;         const deltaProgress = ((18 * dt) / 1000) / Math.max(1, frames.length - 1);         progress = getSafeProgress(progress + deltaProgress);         requestRender();         autoplayRAF = requestAnimationFrame(tick);       };       autoplayRAF = requestAnimationFrame(tick);     }      function purgeMemory() {       for (const bmp of frames) {         try { bmp.close?.(); } catch {}       }       frames = [];       currentFrame = 0;       lastRenderedFrame = -1;       progress = 0;       updateMetrics();     }      // Extraction Engine     async function processVideo(file) {       if (isProcessing) return;       isProcessing = true;        purgeMemory();       viewerWrap.style.display = 'none';       progressWrap.style.display = 'block';       progressBar.style.width = '0%';       setStatus('Initializing decoders...');        if (objectUrl) URL.revokeObjectURL(objectUrl);       objectUrl = URL.createObjectURL(file);       hiddenVideo.src = objectUrl;        try {         await new Promise((resolve, reject) =&gt; {           hiddenVideo.onloadedmetadata = resolve;           hiddenVideo.onerror = reject;         });          const srcW = hiddenVideo.videoWidth;         const srcH = hiddenVideo.videoHeight;         const targetFrames = Number(inputs.frames.value);         const scale = Math.min(1, Number(inputs.width.value) / srcW);                  const targetW = Math.max(1, Math.round(srcW * scale));         const targetH = Math.max(1, Math.round(srcH * scale));          const workCanvas = document.createElement('canvas');         workCanvas.width = targetW;         workCanvas.height = targetH;         const workCtx = workCanvas.getContext('2d', { alpha: false });          setStatus(`Allocating matrix: ${targetFrames} frames...`);         const safeDuration = Math.max(0, hiddenVideo.duration - 0.05);          for (let i = 0; i &lt; targetFrames; i++) {           // Hardware Sync Implementation           let t = safeDuration * (i / Math.max(1, targetFrames - 1));           if (t &lt; 0.05) t = 0.05; // Time-Shift to prevent corruption            await new Promise((res, rej) =&gt; {             hiddenVideo.onseeked = () =&gt; {               // Force GPU rasterization sync prior to data extraction               requestAnimationFrame(() =&gt; res());             };             hiddenVideo.onerror = rej;             hiddenVideo.currentTime = t;           });            workCtx.drawImage(hiddenVideo, 0, 0, targetW, targetH);           frames.push(await createImageBitmap(workCanvas));            if (i % 3 === 0) {             progressBar.style.width = `${((i + 1) / targetFrames) * 100}%`;             await new Promise(r =&gt; setTimeout(r, 0)); // Yield to main thread           }         }          setStatus('Matrix allocation complete. Engine running.', true);         progressWrap.style.display = 'none';         viewerWrap.style.display = 'block';                  resizeDisplay();         requestRender();         manageAutoplay();       } catch (err) {         setStatus(`Failure: ${err.message}`);       } finally {         isProcessing = false;       }     }      // Input Handling     uploader.addEventListener('change', e =&gt; {       if (e.target.files[0]) processVideo(e.target.files[0]);     });      viewer.addEventListener('pointerdown', e =&gt; {       if (!frames.length) return;       pointerActive = true;       dragStartX = e.clientX;       dragStartProgress = progress;       viewer.setPointerCapture(e.pointerId);       hintEl.style.opacity = '0';     });      viewer.addEventListener('pointermove', e =&gt; {       if (!frames.length) return;              if (pointerActive) {         const deltaX = e.clientX - dragStartX;         const pDelta = (deltaX / viewer.offsetWidth) * Number(inputs.sensitivity.value);         progress = getSafeProgress(dragStartProgress + pDelta);         requestRender();       } else if (inputs.hover.checked) {         const rect = viewer.getBoundingClientRect();         progress = getSafeProgress((e.clientX - rect.left) / rect.width);         requestRender();       }     });      viewer.addEventListener('pointerup', e =&gt; { pointerActive = false; viewer.releasePointerCapture(e.pointerId); });     viewer.addEventListener('pointercancel', e =&gt; { pointerActive = false; viewer.releasePointerCapture(e.pointerId); });     viewer.addEventListener('pointerleave', () =&gt; pointerActive = false);      inputs.autoplay.addEventListener('change', manageAutoplay);     inputs.reverse.addEventListener('change', requestRender);     inputs.loop.addEventListener('change', requestRender);     inputs.sensitivity.addEventListener('input', requestRender);      window.addEventListener('resize', resizeDisplay);     window.addEventListener('beforeunload', () =&gt; {       if (autoplayRAF) cancelAnimationFrame(autoplayRAF);       purgeMemory();       if (objectUrl) URL.revokeObjectURL(objectUrl);     });      resizeDisplay();   &lt;/script&gt; &lt;/body&gt; &lt;/html&gt;"></iframe>

<div className="relative w-full h-full" id="slides-container">

<div className="absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-100 slide slide-active" style={{zIndex: '10'}}>
<div className="z-10 bg-zinc-950/30 absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-start items-end p-6 pt-28 md:p-16 md:pt-32 lg:pr-24 pointer-events-none">
</div>
<img alt="Vintage 1908 Car" className="object-center transition-transform duration-[10000ms] ease-out origin-center cursor-pointer w-full h-full object-cover scale-105" onclick="window.location.href='https://livedesklauncher-alt2.web.app/?card=nC11vQevAYfXVwNmbRhO'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3f0f29e7-7fe8-4a5f-b536-f51a5b8e54be_1600w.png?w=800&amp;q=80"/>
<div className="absolute bottom-32 left-6 md:left-16 lg:left-24 z-20 w-full max-w-2xl pr-6 slide-content">
<span className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-4 block">Lot No. 001</span>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight mb-6">The 1908<br/>Scat Racer</h2>
<p className="text-lg text-zinc-400 mb-8 max-w-md">A masterclass in early 20th-century engineering. Preserved with uncompromised integrity.</p>
<button className="group flex items-center gap-3 text-lg font-medium text-zinc-100 hover:text-amber-500 transition-colors">
                        Explore provenance 
                        <span className="bg-amber-500/10 p-2 rounded-full group-hover:bg-amber-500 group-hover:text-zinc-950 transition-all">
<svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-darkreader-inline-stroke="" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{'--darkreader-inline-stroke': 'currentColor'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
</div>
</div>

<div className="transition-opacity duration-1000 ease-in-out slide opacity-0 absolute top-0 right-0 bottom-0 left-0" style={{zIndex: '0'}}>
<div className="absolute inset-0 bg-zinc-950/40 z-10"></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10"></div>
<img alt="Classic Black Car" className="object-center transition-transform duration-[10000ms] ease-out origin-center w-full h-full object-cover scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3f0f29e7-7fe8-4a5f-b536-f51a5b8e54be_1600w.png"/>
<div className="absolute bottom-32 left-6 md:left-16 lg:left-24 z-20 w-full max-w-2xl pr-6 slide-content">
<span className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-4 block">Lot No. 042</span>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight mb-6">Midnight<br/>Silhouette</h2>
<p className="text-lg text-zinc-400 mb-8 max-w-md">Flawless lines meet pure power in this definitive piece of automotive history.</p>
<button className="group flex items-center gap-3 text-lg font-medium text-zinc-100 hover:text-amber-500 transition-colors">
                        Explore provenance 
                        <span className="bg-amber-500/10 p-2 rounded-full group-hover:bg-amber-500 group-hover:text-zinc-950 transition-all">
<svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-darkreader-inline-stroke="" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{'--darkreader-inline-stroke': 'currentColor'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
</div>
</div>

<div className="absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-0 slide" style={{zIndex: '0'}}>
<div className="absolute inset-0 bg-zinc-950/30 z-10"></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10"></div>
<img alt="Vintage Car Detail" className="object-center transition-transform duration-[10000ms] ease-out origin-center w-full h-full object-cover scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3f0f29e7-7fe8-4a5f-b536-f51a5b8e54be_1600w.png"/>
<div className="absolute bottom-32 left-6 md:left-16 lg:left-24 z-20 w-full max-w-2xl pr-6 slide-content">
<span className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-4 block">Private Collection</span>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight mb-6">Unrivaled<br/>Craftsmanship</h2>
<p className="text-lg text-zinc-400 mb-8 max-w-md">Bespoke details finished in brass and leather, untouched by time.</p>
<button className="group flex items-center gap-3 text-lg font-medium text-zinc-100 hover:text-amber-500 transition-colors">
                        Explore provenance 
                        <span className="bg-amber-500/10 p-2 rounded-full group-hover:bg-amber-500 group-hover:text-zinc-950 transition-all">
<svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-darkreader-inline-stroke="" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{'--darkreader-inline-stroke': 'currentColor'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
</div>
</div>
</div>

<div className="absolute bottom-12 left-6 md:left-16 lg:left-24 z-30 flex items-center gap-8 w-full pr-12">
<div className="flex gap-3" id="indicators">

<button aria-label="Go to slide 1" className="h-1 rounded-full transition-all duration-500 ease-in-out w-12 bg-amber-500"></button><button aria-label="Go to slide 2" className="h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500"></button><button aria-label="Go to slide 3" className="h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500"></button><button aria-label="Go to slide 1" className="h-1 rounded-full transition-all duration-500 ease-in-out w-12 bg-amber-500"></button><button aria-label="Go to slide 2" className="h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500"></button><button aria-label="Go to slide 3" className="h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500"></button><button aria-label="Go to slide 1" className="h-1 rounded-full transition-all duration-500 ease-in-out w-12 bg-amber-500"></button><button aria-label="Go to slide 2" className="h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500"></button><button aria-label="Go to slide 3" className="h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500"></button><button aria-label="Go to slide 1" className="h-1 rounded-full transition-all duration-500 ease-in-out w-12 bg-amber-500"></button><button aria-label="Go to slide 2" className="h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500"></button><button aria-label="Go to slide 3" className="h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500"></button><button aria-label="Go to slide 1" className="h-1 rounded-full transition-all duration-500 ease-in-out w-12 bg-amber-500"></button><button aria-label="Go to slide 2" className="h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500"></button><button aria-label="Go to slide 3" className="h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500"></button><button aria-label="Go to slide 1" className="h-1 rounded-full transition-all duration-500 ease-in-out w-12 bg-amber-500"></button><button aria-label="Go to slide 2" className="h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500"></button><button aria-label="Go to slide 3" className="h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500"></button><button aria-label="Go to slide 1" className="h-1 rounded-full transition-all duration-500 ease-in-out w-12 bg-amber-500"></button><button aria-label="Go to slide 2" className="h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500"></button><button aria-label="Go to slide 3" className="h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500"></button><button aria-label="Go to slide 1" className="h-1 rounded-full transition-all duration-500 ease-in-out w-12 bg-amber-500"></button><button aria-label="Go to slide 2" className="h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500"></button><button aria-label="Go to slide 3" className="h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500"></button><button aria-label="Go to slide 1" className="h-1 rounded-full transition-all duration-500 ease-in-out w-12 bg-amber-500"></button><button aria-label="Go to slide 2" className="h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500"></button><button aria-label="Go to slide 3" className="h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500"></button><button aria-label="Go to slide 1" className="h-1 rounded-full transition-all duration-500 ease-in-out w-12 bg-amber-500"></button><button aria-label="Go to slide 2" className="h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500"></button><button aria-label="Go to slide 3" className="h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500"></button><button aria-label="Go to slide 1" className="h-1 rounded-full transition-all duration-500 ease-in-out w-12 bg-amber-500"></button><button aria-label="Go to slide 2" className="h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500"></button><button aria-label="Go to slide 3" className="h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500"></button><button aria-label="Go to slide 1" className="h-1 rounded-full transition-all duration-500 ease-in-out w-12 bg-amber-500"></button><button aria-label="Go to slide 2" className="h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500"></button><button aria-label="Go to slide 3" className="h-1 rounded-full transition-all duration-500 ease-in-out w-4 bg-zinc-700 hover:bg-zinc-500"></button></div>
<div className="flex-1 h-px bg-zinc-800"></div>
<div className="flex gap-4 pr-6 md:pr-16 lg:pr-24">
<button className="text-zinc-400 hover:text-amber-500 transition-colors p-2 border border-zinc-800 rounded-full hover:border-amber-500/50 bg-zinc-950/50 backdrop-blur-sm" id="prev-btn">
<svg aria-hidden="true" className="lucide lucide-chevron-left w-5 h-5" data-darkreader-inline-stroke="" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{'--darkreader-inline-stroke': 'currentColor'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="text-zinc-400 hover:text-amber-500 transition-colors p-2 border border-zinc-800 rounded-full hover:border-amber-500/50 bg-zinc-950/50 backdrop-blur-sm" id="next-btn">
<svg aria-hidden="true" className="lucide lucide-chevron-right w-5 h-5" data-darkreader-inline-stroke="" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{'--darkreader-inline-stroke': 'currentColor'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
</main>


    </>
  );
}
