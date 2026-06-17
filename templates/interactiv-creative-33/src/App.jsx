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



      document.addEventListener('DOMContentLoaded', () => {
          // DOM Elements
          const video = document.getElementById('hero-video');
          const container = document.getElementById('interactive-container');
          const overlay = document.getElementById('interaction-overlay');
          const enableBtn = document.getElementById('enable-btn');
          const skipBtn = document.getElementById('skip-btn');
          const instructionText = document.getElementById('instruction-text');
          const webcamFeed = document.getElementById('webcam-feed');
          const statusIndicator = document.getElementById('status-indicator');
          const statusText = document.getElementById('status-text');

          // State
          let animationState = { progress: 0.5 }; // Starts in middle
          let targetProgress = 0.5;
          let isTracking = false;
          let handDetected = false;
          let handTimeout = null;
          let usingMouseFallback = true;
          let videoDuration = 0;

          // Initialize Video Scrubbing
          video.addEventListener('loadedmetadata', () => {
              videoDuration = video.duration;
              // Pre-render middle frame
              video.currentTime = videoDuration * 0.5;
              video.classList.remove('opacity-0');
          });

          // Force load if cached
          if (video.readyState >= 1) {
              videoDuration = video.duration;
              video.currentTime = videoDuration * 0.5;
          }

          // Render Loop for Video Scrubbing
          function render() {
              if (videoDuration > 0 && !isNaN(videoDuration)) {
                  // Update video frame based on smoothed GSAP state
                  video.currentTime = animationState.progress * videoDuration;
              }
              requestAnimationFrame(render);
          }
          requestAnimationFrame(render);

          // Update GSAP target function
          function updateProgress(newProgress, duration = 0.5, ease = "power2.out") {
              targetProgress = Math.max(0, Math.min(1, newProgress));
              gsap.to(animationState, {
                  progress: targetProgress,
                  duration: duration,
                  ease: ease,
                  overwrite: true
              });
          }

          // Mouse Fallback Logic
          function handleMouseMove(e) {
              if (!usingMouseFallback) return;

              const rect = container.getBoundingClientRect();
              // Calculate position relative to container, normalize 0 to 1
              let x = (e.clientX - rect.left) / rect.width;
              x = Math.max(0, Math.min(1, x));

              updateProgress(x, 0.5, "power3.out");
          }

          container.addEventListener('mousemove', handleMouseMove);

          // Return to end state if mouse leaves
          container.addEventListener('mouseleave', () => {
              if (!usingMouseFallback) return;
              updateProgress(1, 1.5, "power2.inOut"); // Unfold completely (progress 1)
          });

          // Set UI State
          function setUIState(mode) {
              if (mode === 'camera') {
                  usingMouseFallback = false;
                  statusIndicator.classList.add('text-emerald-500');
                  statusIndicator.classList.remove('text-zinc-500');
                  statusIndicator.querySelector('iconify-icon').setAttribute('icon', 'solar:camera-linear');
                  statusText.textContent = "Hand tracking active";
                  instructionText.classList.remove('opacity-0');
              } else {
                  usingMouseFallback = true;
                  statusIndicator.classList.remove('text-emerald-500');
                  statusIndicator.classList.add('text-zinc-500');
                  statusIndicator.querySelector('iconify-icon').setAttribute('icon', 'solar:mouse-linear');
                  statusText.textContent = "Mouse fallback active";
                  instructionText.classList.add('opacity-0');
              }
          }

          // --- MediaPipe Hand Tracking Setup ---
          async function initHandTracking() {
              try {
                  enableBtn.textContent = "Initializing...";
                  enableBtn.disabled = true;

                  const hands = new Hands({locateFile: (file) => {
                      return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
                  }});

                  hands.setOptions({
                      maxNumHands: 1,
                      modelComplexity: 1,
                      minDetectionConfidence: 0.5,
                      minTrackingConfidence: 0.5
                  });

                  hands.onResults((results) => {
                      if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
                          handDetected = true;
                          clearTimeout(handTimeout);

                          // Get index finger tip X coordinate (normalized 0-1)
                          const landmarks = results.multiHandLandmarks[0];
                          const indexFingerX = landmarks[8].x;

                          // Invert X because webcam is mirrored, map to progress
                          // Move right (screen left) -> progress increases
                          // Move left (screen right) -> progress decreases
                          const mappedProgress = 1 - indexFingerX;

                          updateProgress(mappedProgress, 0.4, "power2.out");

                          // Set timeout to return to end state if hand is lost
                          handTimeout = setTimeout(() => {
                              handDetected = false;
                              // Slowly return to fully assembled state (progress 1)
                              updateProgress(1, 2, "power2.inOut");
                          }, 500);
                      }
                  });

                  const camera = new Camera(webcamFeed, {
                      onFrame: async () => {
                          await hands.send({image: webcamFeed});
                      },
                      width: 640,
                      height: 480
                  });

                  await camera.start();

                  // Success
                  isTracking = true;
                  overlay.style.opacity = '0';
                  setTimeout(() => overlay.style.display = 'none', 500);
                  setUIState('camera');

              } catch (error) {
                  console.error("Camera error:", error);
                  enableBtn.textContent = "Error. Try Mouse.";
                  enableBtn.disabled = false;
                  // Fallback to mouse
                  setTimeout(() => {
                      overlay.style.opacity = '0';
                      setTimeout(() => overlay.style.display = 'none', 500);
                      setUIState('mouse');
                  }, 1500);
              }
          }

          // Event Listeners for Overlay
          enableBtn.addEventListener('click', initHandTracking);

          skipBtn.addEventListener('click', () => {
              overlay.style.opacity = '0';
              setTimeout(() => overlay.style.display = 'none', 500);
              setUIState('mouse');
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
      

<header className="absolute top-0 left-0 w-full z-50 p-6 lg:p-10 flex justify-between items-center pointer-events-none">
<div className="tracking-tighter font-semibold text-lg pointer-events-auto">
        IXD/STUDIO
      </div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400 pointer-events-auto">
<a className="hover:text-white transition-colors duration-300" href="#">
          Work
        </a>
<a className="hover:text-white transition-colors duration-300" href="#">
          Approach
        </a>
<a className="hover:text-white transition-colors duration-300" href="#">
          Contact
        </a>
</nav>
<button className="md:hidden pointer-events-auto text-zinc-400 hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</header>

<main className="flex-1 w-full h-full flex flex-col lg:flex-row relative">

<section className="w-full lg:w-5/12 h-full flex flex-col justify-center px-6 lg:px-20 z-20 relative pt-24 lg:pt-0 pointer-events-none">
<div className="space-y-6 max-w-xl pointer-events-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800/50 bg-zinc-900/30 text-xs font-medium text-zinc-400 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Interactive Experience
          </div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl tracking-tighter font-medium leading-[1.1]">
<span className="block">Shaping</span>
<span className="block gradient-text">digital matter.</span>
</h1>
<p className="text-base sm:text-lg text-zinc-400 font-light max-w-md leading-relaxed">
            A creative studio focused on high-end interactive design. We blend
            motion, code, and aesthetics to craft digital experiences that feel
            tangible.
          </p>
<div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm">
<div className="flex items-center gap-2 text-zinc-500 font-medium transition-colors duration-500" id="status-indicator">
<iconify-icon height="20" icon="solar:mouse-linear" width="20"></iconify-icon>
<span id="status-text">Mouse fallback active</span>
</div>
</div>
</div>
</section>

<section className="w-full lg:w-7/12 h-full absolute lg:relative inset-0 z-10 flex items-center justify-center overflow-hidden bg-zinc-950" id="interactive-container">


<video className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen transition-opacity duration-1000" id="hero-video" muted="" playsinline="" preload="auto" src="https://res.cloudinary.com/dq9aym4ad/video/upload/v1781374190/Head_unfolds_from_origami_202606132002_pgysqq.mp4"></video>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#09090b_70%)] pointer-events-none"></div>

<video autoplay="" className="hidden" id="webcam-feed" playsinline=""></video>
<canvas className="hidden" id="tracking-canvas"></canvas>

<div className="absolute inset-0 flex items-center justify-center z-30 transition-opacity duration-500" id="interaction-overlay">
<div className="glass-panel p-8 rounded-2xl flex flex-col items-center text-center max-w-sm mx-4">
<div className="w-12 h-12 rounded-full bg-zinc-800/50 flex items-center justify-center mb-4 text-zinc-300">
<iconify-icon height="24" icon="solar:camera-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">
              Enable Hand Tracking
            </h3>
<p className="text-sm text-zinc-400 font-light mb-6">
              Allow camera access to control the animation by moving your hand
              horizontally. No data is saved.
            </p>
<button className="w-full py-3 px-4 bg-white text-black text-sm font-medium rounded-lg hover:bg-zinc-200 transition-colors" id="enable-btn">
              Start Camera
            </button>
<button className="mt-4 text-xs text-zinc-500 hover:text-zinc-300 transition-colors" id="skip-btn">
              Use mouse instead
            </button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 px-4 py-2 rounded-full glass-panel opacity-0 transition-opacity duration-1000 pointer-events-none" id="instruction-text">
<iconify-icon className="text-zinc-300" height="18" icon="solar:hand-shake-linear" width="18"></iconify-icon>
<span className="text-xs font-medium tracking-wide text-zinc-300 uppercase">
            Move hand left &amp; right to unfold
          </span>
</div>
</section>
</main>


    </>
  );
}
