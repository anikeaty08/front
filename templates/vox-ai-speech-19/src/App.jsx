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
      

<aside className="w-[260px] border-r border-zinc-800/60 bg-[#0A0A0A] flex flex-col flex-shrink-0">

<div className="h-16 flex items-center px-6 border-b border-zinc-800/60">
<div className="flex items-center gap-3">
<div className="w-7 h-7 bg-white flex items-center justify-center text-black">
<iconify-icon className="text-base" icon="solar:soundwave-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-base font-semibold tracking-tighter text-white">
            VOX
          </span>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
<div className="px-3 pb-2 pt-1 text-xs font-medium text-zinc-500 tracking-wider">
          WORKSPACE
        </div>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-white bg-zinc-800/50 transition-colors">
<iconify-icon className="text-lg text-zinc-400" icon="solar:record-circle-linear" strokeWidth="1.5"></iconify-icon>
          Studio
        </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/30 transition-colors">
<iconify-icon className="text-lg" icon="solar:folder-with-files-linear" strokeWidth="1.5"></iconify-icon>
          Transcripts
        </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/30 transition-colors">
<iconify-icon className="text-lg" icon="solar:tuning-square-linear" strokeWidth="1.5"></iconify-icon>
          Post-Processing
        </button>
<div className="px-3 pb-2 pt-6 text-xs font-medium text-zinc-500 tracking-wider">
          SYSTEM
        </div>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/30 transition-colors">
<iconify-icon className="text-lg" icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon>
          Models &amp; Compute
          <span className="ml-auto flex h-2 w-2 rounded-full bg-zinc-300"></span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/30 transition-colors">
<iconify-icon className="text-lg" icon="solar:devices-linear" strokeWidth="1.5"></iconify-icon>
          Audio Devices
        </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/30 transition-colors">
<iconify-icon className="text-lg" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
          Settings
        </button>
</nav>

<div className="p-4 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-500">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-zinc-400"></div>
          Engine Ready
        </div>
<span>v2.4.1</span>
</div>
</aside>

<main className="flex-1 flex flex-col h-full bg-[#0A0A0A] relative overflow-y-auto">

<header className="h-16 flex items-center justify-between px-8 border-b border-zinc-800/60 sticky top-0 bg-[#0A0A0A]/80 backdrop-blur-md z-10">
<div className="flex items-center gap-2 text-sm">
<span className="text-zinc-500">Workspace</span>
<span className="text-zinc-600">/</span>
<span className="text-zinc-200 font-medium">Studio Session</span>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-3 py-1.5 text-xs text-zinc-400">
<iconify-icon icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
            Local Inference
          </div>
<button className="w-8 h-8 flex items-center justify-center hover:bg-zinc-800 text-zinc-400 transition-colors">
<iconify-icon className="text-lg" icon="solar:menu-dots-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</header>

<div className="w-full grid grid-cols-12 pb-10">

<section className="col-span-12 xl:col-span-8 bg-[#0A0A0A] border-r border-b border-zinc-800/60 p-8 flex flex-col relative overflow-hidden">
<div className="flex items-center justify-between mb-8">
<h2 className="text-base font-medium text-white flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:microphone-3-linear" strokeWidth="1.5"></iconify-icon>
              Live Transcription
            </h2>
<div className="flex items-center gap-2 text-xs font-mono bg-zinc-950 border border-zinc-800/80 px-2 py-1 text-zinc-300">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-300 animate-pulse"></div>
              STREAMING
            </div>
</div>
<div className="flex-1 flex flex-col items-center justify-center py-6">

<div className="text-5xl font-light tracking-tight text-white mb-8 font-mono">
              00:04:21
              <span className="text-zinc-600">.8</span>
</div>

<div className="flex items-end justify-center gap-[2px] h-16 w-full max-w-md mb-10 opacity-80">

<div className="w-1.5 bg-zinc-700 rounded-sm animate-wave" style={{animationDelay: '0.1s', height: '30%'}}></div>
<div className="w-1.5 bg-zinc-600 rounded-sm animate-wave" style={{animationDelay: '0.2s', height: '50%'}}></div>
<div className="w-1.5 bg-zinc-500 rounded-sm animate-wave" style={{animationDelay: '0.3s', height: '80%'}}></div>
<div className="w-1.5 bg-zinc-400 rounded-sm animate-wave" style={{animationDelay: '0.4s', height: '40%'}}></div>
<div className="w-1.5 bg-zinc-300 rounded-sm animate-wave" style={{animationDelay: '0.5s', height: '90%'}}></div>
<div className="w-1.5 bg-white rounded-sm animate-wave" style={{animationDelay: '0.6s', height: '100%'}}></div>
<div className="w-1.5 bg-zinc-300 rounded-sm animate-wave" style={{animationDelay: '0.7s', height: '75%'}}></div>
<div className="w-1.5 bg-zinc-400 rounded-sm animate-wave" style={{animationDelay: '0.8s', height: '45%'}}></div>
<div className="w-1.5 bg-zinc-500 rounded-sm animate-wave" style={{animationDelay: '0.9s', height: '60%'}}></div>
<div className="w-1.5 bg-zinc-600 rounded-sm animate-wave" style={{animationDelay: '1.0s', height: '35%'}}></div>
<div className="w-1.5 bg-zinc-700 rounded-sm animate-wave" style={{animationDelay: '1.1s', height: '20%'}}></div>

<div className="w-1.5 bg-zinc-800 rounded-sm" style={{height: '10%'}}></div>
<div className="w-1.5 bg-zinc-800 rounded-sm" style={{height: '15%'}}></div>
<div className="w-1.5 bg-zinc-800 rounded-sm" style={{height: '8%'}}></div>
<div className="w-1.5 bg-zinc-800 rounded-sm" style={{height: '12%'}}></div>
<div className="w-1.5 bg-zinc-800 rounded-sm" style={{height: '10%'}}></div>
</div>

<div className="flex items-center gap-6">
<button className="w-10 h-10 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-all">
<iconify-icon className="text-xl" icon="solar:pause-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-16 h-16 bg-white flex items-center justify-center text-black shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-[1.02] active:scale-95 transition-all">
<iconify-icon className="text-2xl" icon="solar:stop-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-10 h-10 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-all">
<iconify-icon className="text-lg" icon="solar:flag-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="mt-4 bg-[#0A0A0A] border border-zinc-800/60 p-5 min-h-[140px] relative">
<p className="text-sm leading-relaxed text-zinc-300">
<span className="text-zinc-500 font-mono text-xs mr-3">04:12</span>
              So when we consider the architecture of the new model, we need to
              ensure that the quantization doesn't heavily impact the perplexity
              score...
            </p>
<p className="text-sm leading-relaxed text-white mt-2">
<span className="text-zinc-500 font-mono text-xs mr-3">04:18</span>
<span className="animate-pulse opacity-70">
                And that's exactly why we are implementing the...
              </span>
</p>

<div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
</div>
</section>

<section className="col-span-12 xl:col-span-4 flex flex-col border-b border-zinc-800/60 bg-[#0A0A0A]">

<div className="p-8 border-b border-zinc-800/60">
<h3 className="text-sm font-medium text-white mb-4">Audio Interface</h3>
<div className="space-y-4">

<div>
<label className="block text-xs text-zinc-500 mb-1.5">
                  Input Device
                </label>
<button className="w-full flex items-center justify-between bg-zinc-950 border border-zinc-800 hover:border-zinc-700 px-3 py-2.5 text-sm text-zinc-300 transition-colors">
<div className="flex items-center gap-2 truncate">
<iconify-icon className="text-zinc-500" icon="solar:mic-2-linear"></iconify-icon>
<span className="truncate">Universal Audio Volt (USB)</span>
</div>
<iconify-icon className="text-zinc-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>

<div>
<label className="block text-xs text-zinc-500 mb-1.5">
                  Monitoring Output
                </label>
<button className="w-full flex items-center justify-between bg-zinc-950 border border-zinc-800 hover:border-zinc-700 px-3 py-2.5 text-sm text-zinc-300 transition-colors">
<div className="flex items-center gap-2 truncate">
<iconify-icon className="text-zinc-500" icon="solar:headphones-round-linear"></iconify-icon>
<span className="truncate">External Headphones</span>
</div>
<iconify-icon className="text-zinc-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
<div className="pt-2 border-t border-zinc-800/50 flex items-center justify-between">
<span className="text-xs text-zinc-400">Format</span>
<div className="bg-zinc-900 border border-zinc-800 px-2 py-1 text-xs text-zinc-300 font-mono">
                  48,000 Hz / 24-bit
                </div>
</div>
</div>
</div>

<div className="p-8 flex-1">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-white">Input Levels</h3>
<button className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 transition-colors">
<iconify-icon icon="solar:play-circle-linear"></iconify-icon>
                Test
              </button>
</div>

<div className="mb-5">
<div className="flex justify-between text-[10px] text-zinc-600 font-mono mb-1">
<span>-60</span>
<span>-30</span>
<span>-12</span>
<span>0 dB</span>
</div>
<div className="w-full h-2 bg-zinc-950 overflow-hidden border border-zinc-800/50">

<div className="h-full bg-zinc-300 w-[65%] shadow-[0_0_8px_rgba(255,255,255,0.4)]"></div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-2">
<label className="text-xs text-zinc-400">Noise Gate</label>
<span className="text-xs font-mono text-zinc-500">-42 dB</span>
</div>

<div className="relative w-full h-1.5 bg-zinc-900 border border-zinc-800/50 cursor-pointer">
<div className="absolute left-0 top-0 h-full bg-zinc-600 w-[25%]"></div>

<div className="absolute left-[25%] top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white shadow-sm hover:scale-110 transition-transform cursor-grab"></div>
</div>
<div className="mt-4 flex items-center justify-between">
<span className="text-xs text-zinc-500">Auto Gain Control</span>

<button className="relative inline-flex h-4 w-7 items-center bg-white transition-colors">
<span className="inline-block h-3 w-3 translate-x-3.5 bg-black transition-transform"></span>
</button>
</div>
</div>
</div>
</section>

<section className="col-span-12 lg:col-span-6 border-r border-b border-zinc-800/60 p-8 bg-[#0A0A0A]">
<div className="flex items-center justify-between mb-5">
<h2 className="text-sm font-medium text-white flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:box-minimalistic-linear"></iconify-icon>
              Inference Engine
            </h2>

<div className="flex items-center bg-zinc-950 border border-zinc-800 p-0.5">
<button className="px-3 py-1 text-xs font-medium bg-zinc-800 text-white shadow-sm">
                GPU
              </button>
<button className="px-3 py-1 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors">
                CPU
              </button>
</div>
</div>
<div className="space-y-3">

<div className="p-3 bg-zinc-950 border border-zinc-800 flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-zinc-300"></div>
<div>
<div className="text-sm text-white font-medium flex items-center gap-2">
                    Whisper Large-v3
                    <span className="px-1.5 py-0.5 bg-zinc-800 text-zinc-300 text-[10px] uppercase tracking-wider font-mono">
                      Q4_K_M
                    </span>
</div>
<div className="text-xs text-zinc-500 mt-0.5">
                    2.9 GB • Requires 4.1 GB RAM
                  </div>
</div>
</div>
<span className="text-xs text-zinc-400 font-medium">Active</span>
</div>

<div className="p-3 border border-zinc-800/60 relative overflow-hidden">

<div className="absolute left-0 top-0 h-full bg-zinc-900/50 w-[45%] -z-10 border-r border-zinc-800/50"></div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-500" icon="solar:cloud-download-linear"></iconify-icon>
<div>
<div className="text-sm text-zinc-300 font-medium">
                      Distil-Whisper English
                    </div>
<div className="text-xs text-zinc-500 mt-0.5">
                      Downloading... 45% (850 MB / 1.8 GB)
                    </div>
</div>
</div>
<button className="text-zinc-400 hover:text-white transition-colors">
<iconify-icon className="text-lg" icon="solar:pause-circle-linear"></iconify-icon>
</button>
</div>
</div>

<div className="p-3 border border-zinc-800/30 flex items-center justify-between hover:bg-zinc-900/30 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 flex justify-center">
<iconify-icon className="text-zinc-600" icon="solar:database-linear"></iconify-icon>
</div>
<div>
<div className="text-sm text-zinc-400 font-medium">
                    Whisper Tiny.en
                  </div>
<div className="text-xs text-zinc-600 mt-0.5">
                    150 MB • Ultra-fast • Lower accuracy
                  </div>
</div>
</div>
<button className="text-xs px-3 py-1.5 border border-zinc-800 text-zinc-300 hover:bg-zinc-800 transition-colors flex items-center gap-1">
<iconify-icon icon="solar:download-linear"></iconify-icon>
                Get
              </button>
</div>
</div>
</section>

<section className="col-span-12 lg:col-span-6 border-b border-zinc-800/60 p-8 bg-[#0A0A0A] flex flex-col">
<div className="flex items-center justify-between mb-5">
<h2 className="text-sm font-medium text-white flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:magic-stick-3-linear"></iconify-icon>
              Pipeline &amp; Processing
            </h2>
</div>
<div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-5 pb-5 border-b border-zinc-800/50">

<div className="flex items-center justify-between">
<span className="text-sm text-zinc-400">Offline Mode</span>
<button className="relative inline-flex h-4 w-7 items-center bg-white transition-colors">
<span className="inline-block h-3 w-3 translate-x-3.5 bg-black transition-transform"></span>
</button>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-zinc-400">Speaker Diarization</span>
<button className="relative inline-flex h-4 w-7 items-center bg-zinc-800 transition-colors border border-zinc-700">
<span className="inline-block h-3 w-3 translate-x-0.5 bg-zinc-400 transition-transform"></span>
</button>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-zinc-400">Auto Punctuation</span>
<button className="relative inline-flex h-4 w-7 items-center bg-white transition-colors">
<span className="inline-block h-3 w-3 translate-x-3.5 bg-black transition-transform"></span>
</button>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-zinc-400">Trim Silence</span>
<button className="relative inline-flex h-4 w-7 items-center bg-white transition-colors">
<span className="inline-block h-3 w-3 translate-x-3.5 bg-black transition-transform"></span>
</button>
</div>
</div>

<div className="flex-1 flex flex-col">
<div className="flex items-center justify-between mb-2">
<label className="text-xs text-zinc-500 uppercase tracking-wider font-medium">
                LLM Clean-up Prompt
              </label>
<span className="text-[10px] text-zinc-500 border border-zinc-800 px-1.5 py-0.5">
                Mistral-7B
              </span>
</div>
<textarea className="w-full flex-1 bg-zinc-950 border border-zinc-800/80 p-3 text-xs text-zinc-300 font-mono focus:outline-none focus:border-zinc-600 resize-none placeholder:text-zinc-700" placeholder="Enter instructions..."></textarea>
<div className="flex gap-2 mt-3">
<button className="text-xs px-2 py-1 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors">
                Fix Grammar
              </button>
<button className="text-xs px-2 py-1 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors">
                Meeting Summary
              </button>
<button className="text-xs px-2 py-1 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors">
                Action Items
              </button>
</div>
</div>
</section>

<section className="col-span-12">
<div className="flex flex-col h-64 border-b border-zinc-800/60 bg-[#0A0A0A]">
<div className="border-b border-zinc-800/60 px-8 py-3 flex items-center justify-between">
<h3 className="text-xs font-medium text-zinc-400 flex items-center gap-2">
<iconify-icon icon="solar:code-square-linear"></iconify-icon>
                System Output
              </h3>
<div className="flex gap-2">
<button className="text-zinc-600 hover:text-zinc-300">
<iconify-icon className="text-sm" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
<button className="text-zinc-600 hover:text-zinc-300">
<iconify-icon className="text-sm" icon="solar:copy-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex-1 p-4 overflow-y-auto font-mono text-[11px] leading-relaxed tracking-tight space-y-1 px-8">
<div className="flex gap-3">
<span className="text-zinc-600 w-20 flex-shrink-0">
                  14:32:01.045
                </span>
<span className="text-zinc-500 w-12 flex-shrink-0">[INFO]</span>
<span className="text-zinc-400">
                  Audio input initialized: Universal Audio Volt (48000Hz, 1ch)
                </span>
</div>
<div className="flex gap-3">
<span className="text-zinc-600 w-20 flex-shrink-0">
                  14:32:01.112
                </span>
<span className="text-zinc-500 w-12 flex-shrink-0">[INFO]</span>
<span className="text-zinc-400">
                  Loading model 'whisper-large-v3-q4_k_m.bin' to Metal GPU...
                </span>
</div>
<div className="flex gap-3">
<span className="text-zinc-600 w-20 flex-shrink-0">
                  14:32:02.850
                </span>
<span className="text-zinc-500 w-12 flex-shrink-0">[INFO]</span>
<span className="text-zinc-300">
                  Model loaded successfully in 1.73s. VRAM usage: 4120 MB.
                </span>
</div>
<div className="flex gap-3">
<span className="text-zinc-600 w-20 flex-shrink-0">
                  14:32:03.001
                </span>
<span className="text-zinc-500 w-12 flex-shrink-0">[INFO]</span>
<span className="text-zinc-400">
                  Inference engine ready. Awaiting audio stream...
                </span>
</div>
<div className="flex gap-3 bg-zinc-900/50 -mx-8 px-8 py-0.5 border-l-2 border-zinc-400">
<span className="text-zinc-600 w-20 flex-shrink-0">
                  14:32:04.220
                </span>
<span className="text-zinc-500 w-12 flex-shrink-0">[STREAM]</span>
<span className="text-white">
                  Started recording session ID: sess_94x8a2
                </span>
</div>
<div className="flex gap-3">
<span className="text-zinc-600 w-20 flex-shrink-0">
                  14:32:05.105
                </span>
<span className="text-zinc-500 w-12 flex-shrink-0">[PIPELINE]</span>
<span className="text-zinc-400">
                  Chunk 1 processed (RTF: 0.12x)
                </span>
</div>
<div className="flex gap-3">
<span className="text-zinc-600 w-20 flex-shrink-0">
                  14:32:06.310
                </span>
<span className="text-zinc-500 w-12 flex-shrink-0">[PIPELINE]</span>
<span className="text-zinc-400">
                  Chunk 2 processed (RTF: 0.11x)
                </span>
</div>
</div>
</div>
</section>
</div>
</main>

    </>
  );
}
