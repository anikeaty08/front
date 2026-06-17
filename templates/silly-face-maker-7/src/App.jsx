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



      const faceData = {
          shape: {
              options: ['rounded-full', 'rounded-[2.5rem]', 'rounded-xl', 'rounded-t-[3rem] rounded-b-xl', 'rounded-b-[3rem] rounded-t-xl'],
              icons: [
                  '<div class="w-5 h-5 rounded-full border-2 border-gray-400"></div>',
                  '<div class="w-5 h-5 rounded-[0.4rem] border-2 border-gray-400"></div>',
                  '<div class="w-5 h-5 rounded-sm border-2 border-gray-400"></div>',
                  '<div class="w-5 h-5 rounded-t-[0.6rem] rounded-b-sm border-2 border-gray-400"></div>',
                  '<div class="w-5 h-5 rounded-b-[0.6rem] rounded-t-sm border-2 border-gray-400"></div>'
              ]
          },
          color: {
              options: ['bg-amber-200', 'bg-rose-200', 'bg-emerald-200', 'bg-sky-200', 'bg-purple-200'],
              icons: [
                  '<div class="w-5 h-5 rounded-full bg-amber-200 border border-black/10"></div>',
                  '<div class="w-5 h-5 rounded-full bg-rose-200 border border-black/10"></div>',
                  '<div class="w-5 h-5 rounded-full bg-emerald-200 border border-black/10"></div>',
                  '<div class="w-5 h-5 rounded-full bg-sky-200 border border-black/10"></div>',
                  '<div class="w-5 h-5 rounded-full bg-purple-200 border border-black/10"></div>'
              ]
          },
          eyes: {
              options: [
                  '<div class="w-3.5 h-3.5 rounded-full bg-gray-900 transition-all duration-300 origin-center eye-part shadow-sm"></div><div class="w-3.5 h-3.5 rounded-full bg-gray-900 transition-all duration-300 origin-center eye-part shadow-sm"></div>',
                  '<div class="w-6 h-2 border-t-[3px] border-gray-900 rounded-t-full transition-all duration-300 origin-center eye-part"></div><div class="w-6 h-2 border-t-[3px] border-gray-900 rounded-t-full transition-all duration-300 origin-center eye-part"></div>',
                  '<div class="w-8 h-8 rounded-full bg-white border-[3px] border-gray-900 flex items-center justify-center transition-all duration-300 origin-center eye-part shadow-sm"><div class="w-2 h-2 rounded-full bg-gray-900"></div></div><div class="w-8 h-8 rounded-full bg-white border-[3px] border-gray-900 flex items-center justify-center transition-all duration-300 origin-center eye-part shadow-sm"><div class="w-2 h-2 rounded-full bg-gray-900"></div></div>',
                  '<div class="w-5 h-[3px] rounded-full bg-gray-900 transition-all duration-300 origin-center eye-part"></div><div class="w-5 h-[3px] rounded-full bg-gray-900 transition-all duration-300 origin-center eye-part"></div>',
                  '<div class="w-6 h-6 border-[2.5px] border-gray-900 rounded-full flex items-center justify-center relative overflow-hidden transition-all duration-300 origin-center eye-part shadow-sm"><div class="w-full h-1/2 bg-gray-900 absolute top-0"></div></div><div class="w-6 h-6 border-[2.5px] border-gray-900 rounded-full flex items-center justify-center relative overflow-hidden transition-all duration-300 origin-center eye-part shadow-sm"><div class="w-full h-1/2 bg-gray-900 absolute top-0"></div></div>'
              ],
              icons: [
                  '<div class="flex gap-1"><div class="w-1.5 h-1.5 bg-gray-500 rounded-full"></div><div class="w-1.5 h-1.5 bg-gray-500 rounded-full"></div></div>',
                  '<div class="flex gap-1"><div class="w-2.5 h-1 border-t-2 border-gray-500 rounded-t-full"></div><div class="w-2.5 h-1 border-t-2 border-gray-500 rounded-t-full"></div></div>',
                  '<div class="flex gap-1"><div class="w-2.5 h-2.5 rounded-full border-2 border-gray-500"></div><div class="w-2.5 h-2.5 rounded-full border-2 border-gray-500"></div></div>',
                  '<div class="flex gap-1"><div class="w-2 h-[2px] bg-gray-500 rounded-full"></div><div class="w-2 h-[2px] bg-gray-500 rounded-full"></div></div>',
                  '<div class="flex gap-1"><div class="w-2.5 h-2.5 rounded-full border-[1.5px] border-gray-500 relative overflow-hidden"><div class="absolute inset-x-0 top-0 h-1/2 bg-gray-500"></div></div><div class="w-2.5 h-2.5 rounded-full border-[1.5px] border-gray-500 relative overflow-hidden"><div class="absolute inset-x-0 top-0 h-1/2 bg-gray-500"></div></div></div>'
              ]
          },
          mouth: {
              options: [
                  '<div class="w-10 h-5 border-b-[3px] border-gray-900 rounded-b-full transition-all duration-300"></div>',
                  '<div class="w-10 h-5 border-t-[3px] border-gray-900 rounded-t-full mt-2 transition-all duration-300"></div>',
                  '<div class="w-5 h-7 bg-gray-900 rounded-full transition-all duration-300 shadow-sm"></div>',
                  '<div class="w-8 h-[3px] bg-gray-900 rounded-full transition-all duration-300"></div>',
                  '<div class="w-8 h-5 border-b-[3px] border-gray-900 rounded-b-full relative overflow-hidden transition-all duration-300"><div class="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-4 bg-rose-400 rounded-full"></div></div>'
              ],
              icons: [
                  '<div class="w-4 h-2 border-b-2 border-gray-500 rounded-b-full"></div>',
                  '<div class="w-4 h-2 border-t-2 border-gray-500 rounded-t-full"></div>',
                  '<div class="w-2 h-3 bg-gray-500 rounded-full"></div>',
                  '<div class="w-4 h-[2px] bg-gray-500 rounded-full"></div>',
                  '<div class="w-4 h-2 border-b-2 border-gray-500 rounded-b-full relative overflow-hidden"><div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-1.5 bg-gray-400 rounded-t-full"></div></div>'
              ]
          }
      };

      let currentState = { shape: 0, color: 0, eyes: 0, mouth: 0 };
      let crazyModeInterval = null;

      function initControls() {
          Object.keys(faceData).forEach(category => {
              const container = document.getElementById(`btn-group-${category}`);
              faceData[category].icons.forEach((iconHtml, index) => {
                  const btn = document.createElement('button');
                  btn.className = `w-10 h-10 rounded-lg border flex items-center justify-center transition-all focus:outline-none ${index === currentState[category] ? 'border-gray-900 ring-1 ring-gray-900 bg-gray-50' : 'border-gray-200 hover:bg-gray-50 hover:border-gray-300'}`;
                  btn.innerHTML = iconHtml;
                  btn.onclick = () => updateFace(category, index);
                  container.appendChild(btn);
              });
          });
      }

      function updateFace(category, index) {
          currentState[category] = index;
          renderFace();
          updateActiveButtons(category);
      }

      function updateActiveButtons(category) {
          const container = document.getElementById(`btn-group-${category}`);
          Array.from(container.children).forEach((btn, idx) => {
              if (idx === currentState[category]) {
                  btn.className = 'w-10 h-10 rounded-lg border flex items-center justify-center transition-all focus:outline-none border-gray-900 ring-1 ring-gray-900 bg-gray-50';
              } else {
                  btn.className = 'w-10 h-10 rounded-lg border flex items-center justify-center transition-all focus:outline-none border-gray-200 hover:bg-gray-50 hover:border-gray-300';
              }
          });
      }

      function renderFace() {
          const headEl = document.getElementById('head');
          headEl.className = `absolute inset-0 transition-all duration-500 ease-out shadow-sm border border-black/5 ${faceData.shape.options[currentState.shape]} ${faceData.color.options[currentState.color]}`;

          document.getElementById('eyes').innerHTML = faceData.eyes.options[currentState.eyes];
          document.getElementById('mouth').innerHTML = faceData.mouth.options[currentState.mouth];
      }

      function randomize() {
          const faceContainer = document.getElementById('face-container');
          const rotate1 = (Math.random() - 0.5) * 30;
          const rotate2 = (Math.random() - 0.5) * 20;
          faceContainer.style.transform = `scale(0.9) rotate(${rotate1}deg)`;

          setTimeout(() => {
              Object.keys(currentState).forEach(category => {
                  const max = faceData[category].options.length;
                  let randomIdx;
                  do { randomIdx = Math.floor(Math.random() * max); }
                  while (randomIdx === currentState[category] && max > 1);
                  currentState[category] = randomIdx;
                  updateActiveButtons(category);
              });
              renderFace();

              faceContainer.style.transform = `scale(1.05) rotate(${rotate2}deg)`;
              setTimeout(() => {
                  if (!crazyModeInterval) {
                      faceContainer.style.transform = 'scale(1) rotate(0deg)';
                  }
              }, 150);
          }, 150);
      }

      function toggleCrazyMode() {
          const btn = document.getElementById('crazy-btn');
          if (crazyModeInterval) {
              clearInterval(crazyModeInterval);
              crazyModeInterval = null;
              btn.className = 'flex-1 bg-rose-100 text-rose-600 border border-rose-200 h-11 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-rose-200 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2';
              btn.innerHTML = '<iconify-icon icon="solar:flame-bold-duotone" class="text-lg"></iconify-icon> Crazy Mode';
              document.getElementById('face-container').style.transform = 'scale(1) rotate(0deg)';
          } else {
              randomize();
              crazyModeInterval = setInterval(randomize, 350);
              btn.className = 'flex-1 bg-rose-600 text-white border border-rose-600 h-11 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-rose-700 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 animate-pulse';
              btn.innerHTML = '<iconify-icon icon="solar:stop-circle-bold-duotone" class="text-lg"></iconify-icon> STOP!';
          }
      }

      setInterval(() => {
          const eyes = document.querySelectorAll('.eye-part');
          eyes.forEach(eye => {
              eye.style.transform = 'scaleY(0.1)';
              setTimeout(() => {
                  eye.style.transform = 'scaleY(1)';
              }, 150);
          });
      }, 3500);

      initControls();
      renderFace();
    
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
      
<div className="max-w-3xl w-full bg-white rounded-2xl border border-gray-200 shadow-[0_4px_24px_rgba(0,0,0,0.02)] overflow-hidden flex flex-col md:flex-row h-[32rem]">

<div className="w-full md:w-1/2 bg-gray-50/50 relative flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-200 overflow-hidden">

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, #e5e5e5 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

<div className="relative w-56 h-56 animate-float transition-transform duration-300 ease-out z-10" id="face-container">

<div className="absolute inset-0 transition-all duration-500 ease-out shadow-sm border border-black/5" id="head"></div>

<div className="absolute top-[35%] w-full flex justify-center gap-8 px-4 transition-all duration-300 z-20" id="eyes">

</div>

<div className="absolute bottom-[25%] w-full flex justify-center transition-all duration-300 z-20" id="mouth">

</div>
</div>
</div>

<div className="w-full md:w-1/2 p-8 flex flex-col bg-white">
<header className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-gray-900 text-white rounded-lg flex items-center justify-center text-sm font-semibold tracking-tighter">
              SFM
            </div>
<h1 className="text-xl font-semibold tracking-tight">Face Maker</h1>
</div>
</header>
<div className="space-y-6 flex-1 overflow-y-auto pr-2" id="controls-container">

<div>
<span className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-3 block">
              Shape
            </span>
<div className="grid grid-cols-5 gap-2" id="btn-group-shape"></div>
</div>

<div>
<span className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-3 block">
              Color
            </span>
<div className="grid grid-cols-5 gap-2" id="btn-group-color"></div>
</div>

<div>
<span className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-3 block">
              Eyes
            </span>
<div className="grid grid-cols-5 gap-2" id="btn-group-eyes"></div>
</div>

<div>
<span className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-3 block">
              Mouth
            </span>
<div className="grid grid-cols-5 gap-2" id="btn-group-mouth"></div>
</div>
</div>
<div className="pt-6 mt-2 border-t border-gray-100 flex gap-3">
<button className="flex-1 bg-gray-900 text-white h-11 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2" onclick="randomize()">
<iconify-icon className="text-lg" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
            Randomize
          </button>
<button className="flex-1 bg-rose-100 text-rose-600 border border-rose-200 h-11 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-rose-200 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2" id="crazy-btn" onclick="toggleCrazyMode()">
<iconify-icon className="text-lg" icon="solar:flame-bold-duotone"></iconify-icon>
            Crazy Mode
          </button>
</div>
</div>
</div>


    </>
  );
}
