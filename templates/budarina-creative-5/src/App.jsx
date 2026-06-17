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



        // --- Dragging Logic ---
        const container = document.getElementById('webcam-container');
        const handle = document.getElementById('drag-handle');
        
        let isDragging = false;
        let currentX = 0;
        let currentY = 0;
        let initialX;
        let initialY;
        let xOffset = 0;
        let yOffset = 0;

        handle.addEventListener('mousedown', dragStart);
        document.addEventListener('mouseup', dragEnd);
        document.addEventListener('mousemove', drag);

        function dragStart(e) {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
            if (e.target === handle || handle.contains(e.target)) {
                isDragging = true;
            }
        }

        function dragEnd(e) {
            initialX = currentX;
            initialY = currentY;
            isDragging = false;
        }

        function drag(e) {
            if (isDragging) {
                e.preventDefault();
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
                xOffset = currentX;
                yOffset = currentY;
                container.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
            }
        }

        // --- MediaPipe Hand Tracking & Logic ---
        const videoElement = document.getElementById('webcam-video');
        const canvasElement = document.getElementById('webcam-canvas');
        const canvasCtx = canvasElement.getContext('2d');
        const mainVideo = document.getElementById('main-video');
        const statusText = document.getElementById('gesture-status');
        const loadingScreen = document.getElementById('cam-loading');

        let isVideoPlaying = false;
        let aiInitialized = false;

        // Ensure canvas dimensions match video for accurate drawing
        function updateCanvasSize() {
            if (videoElement.videoWidth) {
                canvasElement.width = videoElement.videoWidth;
                canvasElement.height = videoElement.videoHeight;
            }
        }
        
        videoElement.addEventListener('loadeddata', updateCanvasSize);
        new ResizeObserver(updateCanvasSize).observe(container);

        // Basic heuristic for detecting a closed fist
        function isFist(landmarks) {
            const wrist = landmarks[0];
            let curledFingers = 0;
            
            const fingerTips = [8, 12, 16, 20]; // Index, Middle, Ring, Pinky tips
            const fingerPips = [6, 10, 14, 18]; // Corresponding lower joints
            
            for (let i = 0; i < 4; i++) {
                // Calculate distance from wrist to fingertip
                const distTip = Math.hypot(landmarks[fingerTips[i]].x - wrist.x, landmarks[fingerTips[i]].y - wrist.y);
                // Calculate distance from wrist to middle joint
                const distPip = Math.hypot(landmarks[fingerPips[i]].x - wrist.x, landmarks[fingerPips[i]].y - wrist.y);
                
                // If the tip is closer to the wrist than the middle joint, the finger is curled
                if (distTip < distPip * 1.1) { 
                    curledFingers++;
                }
            }
            // If 3 or more fingers (excluding thumb) are curled, assume fist
            return curledFingers >= 3;
        }

        function onResults(results) {
            if (!aiInitialized) {
                loadingScreen.style.display = 'none';
                aiInitialized = true;
                // Start main video once AI is ready
                mainVideo.play().then(() => isVideoPlaying = true).catch(e => console.log("Autoplay blocked"));
            }

            canvasCtx.save();
            canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
            
            if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
                for (const landmarks of results.multiHandLandmarks) {
                    
                    // Draw stylish thin skeleton overlay
                    drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, {color: 'rgba(255,255,255,0.4)', lineWidth: 1});
                    drawLandmarks(canvasCtx, landmarks, {color: '#ffffff', fillColor: '#000000', lineWidth: 1, radius: 2});
                    
                    // Determine gesture
                    if (isFist(landmarks)) {
                        statusText.innerText = "Paused (Fist)";
                        statusText.className = "text-xs uppercase tracking-widest text-neutral-400 font-medium";
                        if (isVideoPlaying) {
                            mainVideo.pause();
                            isVideoPlaying = false;
                        }
                    } else {
                        statusText.innerText = "Playing (Open)";
                        statusText.className = "text-xs uppercase tracking-widest text-white font-medium";
                        if (!isVideoPlaying) {
                            mainVideo.play().catch(() => {});
                            isVideoPlaying = true;
                        }
                    }
                }
            } else {
                statusText.innerText = "Show Hand";
                statusText.className = "text-xs uppercase tracking-widest text-neutral-500 font-medium";
            }
            canvasCtx.restore();
        }

        // Initialize MediaPipe Hands
        const hands = new Hands({locateFile: (file) => {
            return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
        }});
        
        hands.setOptions({
            maxNumHands: 1,
            modelComplexity: 0, // Lower complexity for faster performance
            minDetectionConfidence: 0.6,
            minTrackingConfidence: 0.6
        });
        
        hands.onResults(onResults);

        // Initialize Camera
        const camera = new Camera(videoElement, {
            onFrame: async () => {
                await hands.send({image: videoElement});
            },
            width: 480,
            height: 360
        });
        
        camera.start();

    
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
      

<nav className="flex justify-between items-center p-6 lg:px-12 w-full z-20 relative shrink-0">

<div className="text-xl tracking-tighter font-medium uppercase w-1/3">
            Budarina
        </div>

<div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400 w-1/3 justify-center">
<a className="hover:text-white transition-colors duration-300" href="#">Home</a>
<a className="hover:text-white transition-colors duration-300" href="#">Work</a>
<a className="hover:text-white transition-colors duration-300" href="#">About</a>
<a className="hover:text-white transition-colors duration-300" href="#">Contact</a>
</div>

<div className="flex gap-4 text-sm font-medium w-1/3 justify-end items-center">
<button className="hidden lg:block px-5 py-2.5 rounded-full border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900 transition-all duration-300">
                See My Work
            </button>
<button className="px-5 py-2.5 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors duration-300">
                Say Hello
            </button>
</div>
</nav>

<main className="flex-1 flex relative w-full h-full min-h-0">

<div className="w-full lg:w-1/2 h-full flex flex-col justify-between p-6 lg:p-12 lg:pr-0 z-10 relative">
<div className="flex flex-col justify-center flex-1 mt-[-5%]">

<div className="flex items-center gap-2 mb-8 text-neutral-400 text-sm font-medium tracking-wide uppercase">
<iconify-icon className="text-neutral-500" height="14" icon="solar:diamonds-linear" width="14"></iconify-icon>
<span>Design &amp; <span className="italic font-serif-italic lowercase tracking-normal text-base">Direction</span></span>
</div>

<h1 className="text-5xl lg:text-7xl xl:text-8xl tracking-tight font-medium leading-[1.05] text-neutral-100">
                    Crafting digital <br/> experiences, <br/>
<span className="font-serif-italic text-6xl lg:text-8xl xl:text-9xl mt-4 block text-neutral-400 tracking-normal leading-[1]">one fold at a time.</span>
</h1>
</div>

<div className="flex flex-col gap-6 max-w-sm pb-4">
<p className="text-sm text-neutral-400 leading-relaxed font-medium">
                    I partner with ambitious brands to build digital products that merge functional design with aesthetic excellence.
                </p>
<button className="bg-white text-black px-6 py-3.5 rounded-full w-fit text-sm font-medium flex items-center gap-2 hover:bg-neutral-200 transition-colors duration-300 group">
                    View My Work 
                    <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
</button>
</div>
</div>

<div className="absolute right-0 top-0 w-full lg:w-3/5 h-full z-0 opacity-40 lg:opacity-100 pointer-events-none lg:relative">

<div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent lg:hidden z-10"></div>
<div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-black via-black/90 to-transparent hidden lg:block z-10"></div>
<div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
<div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent z-10"></div>

<video className="w-full h-full object-cover scale-x-[-1] grayscale contrast-125 opacity-70" id="main-video" loop="" muted="" playsinline="">

<source src="https://assets.mixkit.co/videos/preview/mixkit-ink-swirling-in-water-459-large.mp4" type="video/mp4"/>
</video>
</div>
</main>


<div className="absolute bottom-8 right-8 w-72 h-52 bg-neutral-950 border border-neutral-800/60 rounded-2xl shadow-2xl shadow-black/50 z-50 flex flex-col group backdrop-blur-xl" id="webcam-container">

<div className="w-full h-10 bg-neutral-900/50 border-b border-neutral-800/60 flex justify-between items-center px-4 absolute top-0 left-0 z-20 rounded-t-2xl" id="drag-handle">
<div className="flex gap-2 items-center opacity-50 group-hover:opacity-100 transition-opacity">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
</div>
<div className="text-xs uppercase tracking-widest text-neutral-500 font-medium flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:camera-linear"></iconify-icon>
<span id="gesture-status">Initializing AI</span>
</div>
</div>

<div className="relative flex-1 w-full h-full pt-10 rounded-b-2xl overflow-hidden bg-neutral-900">
<video autoplay="" className="w-full h-full object-cover scale-x-[-1]" id="webcam-video" muted="" playsinline=""></video>

<canvas className="absolute top-10 left-0 w-full h-[calc(100%-2.5rem)] scale-x-[-1] pointer-events-none" id="webcam-canvas"></canvas>

<div className="absolute inset-0 top-10 flex items-center justify-center bg-neutral-950 z-10" id="cam-loading">
<iconify-icon className="text-neutral-500 animate-spin text-2xl" icon="solar:spinner-linear"></iconify-icon>
</div>
</div>

<div className="absolute bottom-2 right-2 w-3 h-3 cursor-se-resize pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity text-neutral-600">
<svg fill="currentColor" viewbox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 12L0 12L12 0V12Z"></path>
</svg>
</div>
</div>


    </>
  );
}
