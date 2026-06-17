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



window.addEventListener('load', () => {
if(!window.THREE) return;
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x050914, 0.03);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.domElement.style.position = 'absolute';
renderer.domElement.style.top = '0';
renderer.domElement.style.left = '0';
renderer.domElement.style.width = '100%';
renderer.domElement.style.height = '100%';
renderer.domElement.style.zIndex = '0';
renderer.domElement.style.pointerEvents = 'none';
document.body.insertBefore(renderer.domElement, document.body.firstChild);
const particles = new THREE.BufferGeometry();
const particleCount = 1000;
const posArray = new Float32Array(particleCount * 3);
for(let i = 0; i < particleCount * 3; i++) posArray[i] = (Math.random() - 0.5) * 25;
particles.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
const material = new THREE.PointsMaterial({ size: 0.04, color: 0x06b6d4, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending });
const particleMesh = new THREE.Points(particles, material);
scene.add(particleMesh);
camera.position.z = 8;
let mouseX = 0, mouseY = 0;
document.addEventListener('mousemove', e => { mouseX = e.clientX / window.innerWidth - 0.5; mouseY = e.clientY / window.innerHeight - 0.5; });
const animate = () => {
requestAnimationFrame(animate);
particleMesh.rotation.y += 0.0008;
particleMesh.rotation.x += 0.0003;
camera.position.x += (mouseX * 2 - camera.position.x) * 0.05;
camera.position.y += (-mouseY * 2 - camera.position.y) * 0.05;
camera.lookAt(scene.position);
renderer.render(scene, camera);
};
animate();
window.addEventListener('resize', () => { camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight); });
});



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
      

<aside className="w-64 bg-[#0B0F19]/60 backdrop-blur-xl border-r border-white/10 flex flex-col justify-between shrink-0 z-20 relative">
<div>

<div className="h-20 flex items-center px-8 border-b border-white/10">
<span className="text-sm font-bold tracking-[0.2em] text-white">
            FLUXTIFY
          </span>
</div>

<nav className="px-4 py-6 space-y-1 text-sm font-normal text-slate-500">
<a className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-white/5 hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="solar:folder-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
            Projects
          </a>
<a className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/10 shadow-[0_0_15px_rgba(0,255,255,0.1)] text-cyan-300 transition-colors" href="#">
<iconify-icon className="text-cyan-400" height="20" icon="solar:compass-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
            Explore
          </a>
<a className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-white/5 hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="solar:pen-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
            Design
          </a>
<a className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-white/5 hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
            Validate
          </a>
<a className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-white/5 hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="solar:box-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
            Build
          </a>
<div className="pt-4 pb-2 px-4">
<p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
              System
            </p>
</div>
<a className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-white/5 hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="solar:cpu-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
            Intelligence
          </a>
<a className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-white/5 hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="solar:settings-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
            Settings
          </a>
</nav>
</div>

<div className="p-6 border-t border-white/10">
<div className="flex items-center gap-3 cursor-pointer group">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-900 to-blue-900 border border-cyan-500/30 flex items-center justify-center text-xs font-medium text-cyan-100 group-hover:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all">
            O
          </div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white truncate">Odyssey Labs</p>
<p className="text-xs text-cyan-400 truncate">Pro Plan</p>
</div>
<iconify-icon className="text-slate-400" height="16" icon="solar:alt-arrow-up-linear" width="16"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col relative z-10">

<header className="h-20 bg-[#0B0F19]/60 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-8 z-30 absolute top-0 w-full">
<div className="flex items-center gap-2 text-sm text-slate-500">
<span className="text-slate-400 hover:text-white cursor-pointer transition-colors">
            Odyssey Labs
          </span>
<iconify-icon height="14" icon="solar:alt-arrow-right-linear" width="14"></iconify-icon>
<span className="text-slate-400 hover:text-white cursor-pointer transition-colors">
            Project Nexus
          </span>
<iconify-icon height="14" icon="solar:alt-arrow-right-linear" width="14"></iconify-icon>
<span className="text-white font-medium shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            Strategic Exploration
          </span>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1.5 bg-[#131B2C] border border-white/10 rounded-full text-xs text-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.1)]">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_5px_rgba(0,255,255,0.8)]"></span>
            Fluxtify Engine Active
          </div>
<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
<iconify-icon height="20" icon="solar:share-linear" width="20"></iconify-icon>
</button>
<button className="px-4 py-2 bg-cyan-500 text-[#050914] text-sm font-bold rounded-lg shadow-[0_0_15px_rgba(0,255,255,0.4)] hover:bg-cyan-400 transition-all hover:shadow-[0_0_25px_rgba(0,255,255,0.6)]">
            Export Map
          </button>
</div>
</header>

<div className="flex-1 overflow-auto pt-20 relative flex items-center justify-center p-12 bg-transparent">

<div className="flex items-center gap-12 max-w-7xl w-full mx-auto relative">

<div className="w-80 shrink-0 bg-[#131B2C]/80 backdrop-blur-xl shadow-[0_0_30px_rgba(0,255,255,0.05)] rounded-2xl p-8 border border-white/10 relative z-10 group hover:border-cyan-500/50 transition-colors duration-500">
<div className="w-10 h-10 rounded-xl bg-cyan-900/30 flex items-center justify-center text-cyan-400 mb-6 shadow-[0_0_15px_rgba(0,255,255,0.2)]">
<iconify-icon height="24" icon="solar:lightbulb-minimalistic-linear" width="24"></iconify-icon>
</div>
<h2 className="text-sm font-medium text-cyan-500 mb-2 uppercase tracking-widest">
              Initial Prompt
            </h2>
<p className="text-xl font-medium tracking-tight text-white leading-snug mb-6">
              "An AI platform that simplifies cross-border payments and
              compliance for freelance creatives."
            </p>
<div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
<span className="flex items-center gap-1">
<iconify-icon height="14" icon="solar:clock-circle-linear" width="14"></iconify-icon>
                2 mins ago
              </span>
<span className="px-2 py-1 bg-white/5 rounded-md text-slate-300">
                3 Paths Generated
              </span>
</div>
</div>

<div className="absolute left-80 top-0 bottom-0 w-32 z-0 flex flex-col justify-center pointer-events-none opacity-60">
<svg height="100%" preserveaspectratio="none" viewbox="0 0 100 400" width="100%">
<path className="path-line" d="M0 200 C 50 200, 50 50, 100 50" fill="none" stroke="#06b6d4" strokeWidth="1.5"></path>
<path className="path-line" d="M0 200 C 50 200, 50 200, 100 200" fill="none" stroke="#06b6d4" strokeWidth="1.5"></path>
<path className="path-line" d="M0 200 C 50 200, 50 350, 100 350" fill="none" stroke="#06b6d4" strokeWidth="1.5"></path>
</svg>
</div>

<div className="flex flex-col gap-8 flex-1 min-w-[500px] z-10 py-12">

<div className="bg-[#131B2C]/80 backdrop-blur-xl shadow-[0_0_30px_rgba(0,255,255,0.05)] rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1">
<div className="flex justify-between items-start mb-6">
<div>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-900/30 text-cyan-300 text-xs font-medium mb-3 border border-cyan-500/30">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_rgba(0,255,255,0.8)]"></span>
                    Highest Validation
                  </span>
<h3 className="text-xl font-medium tracking-tight text-white">
                    Direct-to-Creator Wallet
                  </h3>
<p className="text-sm text-slate-400 mt-1">
                    A consumer-style neo-bank focusing on UX and instant
                    settlements.
                  </p>
</div>
<button className="text-slate-500 hover:text-cyan-400 transition-colors">
<iconify-icon height="20" icon="solar:maximize-square-minimalistic-linear" width="20"></iconify-icon>
</button>
</div>

<div className="grid grid-cols-3 gap-4">

<div className="bg-[#0B0F19]/50 rounded-xl p-4 border border-white/5">
<p className="text-xs text-slate-400 mb-2">Market Opportunity</p>
<div className="flex items-end gap-1 h-8 mb-1">
<div className="w-full bg-[#131B2C] rounded-sm h-full relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full bg-cyan-500 h-[85%] progress-fill shadow-[0_0_10px_rgba(0,255,255,0.5)]" style={{'--target-height': '85%'}}></div>
</div>
</div>
<p className="text-sm font-medium text-white">High ($1.2B TAM)</p>
</div>

<div className="bg-[#0B0F19]/50 rounded-xl p-4 border border-white/5">
<p className="text-xs text-slate-400 mb-2">Tech Complexity</p>
<div className="h-1.5 w-full bg-[#131B2C] rounded-full mt-4 mb-3 overflow-hidden">
<div className="h-full bg-cyan-400 rounded-full progress-fill shadow-[0_0_10px_rgba(0,255,255,0.5)]" style={{'--target-width': '30%'}}></div>
</div>
<p className="text-sm font-medium text-white">Low (Fast Build)</p>
</div>

<div className="bg-[#0B0F19]/50 rounded-xl p-4 border border-white/5 flex flex-col justify-between">
<p className="text-xs text-slate-400">Validation Score</p>
<div className="flex items-baseline gap-1 mt-2">
<span className="text-2xl font-medium tracking-tight text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                      92
                    </span>
<span className="text-xs text-slate-500">/100</span>
</div>
</div>
</div>
</div>

<div className="bg-[#131B2C]/80 backdrop-blur-xl shadow-[0_0_30px_rgba(168,85,247,0.05)] rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
<div className="flex justify-between items-start mb-6">
<div>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-900/30 text-purple-300 text-xs font-medium mb-3 border border-purple-500/30">
<iconify-icon height="14" icon="solar:rocket-linear" width="14"></iconify-icon>
                    Highest Revenue
                  </span>
<h3 className="text-xl font-medium tracking-tight text-white">
                    Enterprise Compliance API
                  </h3>
<p className="text-sm text-slate-400 mt-1">
                    White-label infrastructure for existing freelance
                    marketplaces to integrate.
                  </p>
</div>
<button className="text-slate-500 hover:text-purple-400 transition-colors">
<iconify-icon height="20" icon="solar:maximize-square-minimalistic-linear" width="20"></iconify-icon>
</button>
</div>

<div className="grid grid-cols-3 gap-4 opacity-80 hover:opacity-100 transition-opacity">
<div className="bg-[#0B0F19]/50 rounded-xl p-4 border border-white/5">
<p className="text-xs text-slate-400 mb-2">Revenue Potential</p>
<div className="h-1.5 w-full bg-[#131B2C] rounded-full mt-4 mb-3 overflow-hidden">
<div className="h-full bg-purple-500 rounded-full progress-fill shadow-[0_0_10px_rgba(168,85,247,0.5)]" style={{'--target-width': '95%'}}></div>
</div>
<p className="text-sm font-medium text-white">Very High (SaaS)</p>
</div>
<div className="bg-[#0B0F19]/50 rounded-xl p-4 border border-white/5">
<p className="text-xs text-slate-400 mb-2">Tech Complexity</p>
<div className="h-1.5 w-full bg-[#131B2C] rounded-full mt-4 mb-3 overflow-hidden">
<div className="h-full bg-pink-500 rounded-full progress-fill shadow-[0_0_10px_rgba(236,72,153,0.5)]" style={{'--target-width': '80%'}}></div>
</div>
<p className="text-sm font-medium text-white">
                    High (6 mo. build)
                  </p>
</div>
<div className="bg-[#0B0F19]/50 rounded-xl p-4 border border-white/5 flex flex-col justify-between">
<p className="text-xs text-slate-400">Validation Score</p>
<div className="flex items-baseline gap-1 mt-2">
<span className="text-2xl font-medium tracking-tight text-white">
                      78
                    </span>
<span className="text-xs text-slate-500">/100</span>
</div>
</div>
</div>
</div>

<div className="bg-[#131B2C]/80 backdrop-blur-xl shadow-[0_0_30px_rgba(59,130,246,0.05)] rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
<div className="flex justify-between items-start mb-6">
<div>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-900/30 text-blue-300 text-xs font-medium mb-3 border border-blue-500/30">
                    Wildcard Idea
                  </span>
<h3 className="text-xl font-medium tracking-tight text-white">
                    Decentralized Escrow Protocol
                  </h3>
<p className="text-sm text-slate-400 mt-1">
                    Smart contracts for automated, trustless creative handoffs
                    and payments.
                  </p>
</div>
<button className="text-slate-500 hover:text-blue-400 transition-colors">
<iconify-icon height="20" icon="solar:maximize-square-minimalistic-linear" width="20"></iconify-icon>
</button>
</div>

<div className="flex items-center justify-between border-t border-white/10 pt-4 mt-2">
<div className="flex items-center gap-6">
<div>
<p className="text-xs text-slate-400">UX Potential</p>
<p className="text-sm font-medium text-white">Moderate</p>
</div>
<div className="w-px h-8 bg-white/10"></div>
<div>
<p className="text-xs text-slate-400">Build Speed</p>
<p className="text-sm font-medium text-white">Slow</p>
</div>
</div>
<div className="text-right">
<p className="text-xs text-slate-400 mb-1">Confidence</p>
<div className="w-24 h-1.5 bg-[#131B2C] rounded-full overflow-hidden">
<div className="h-full bg-blue-400 rounded-full progress-fill shadow-[0_0_10px_rgba(96,165,250,0.5)]" style={{'--target-width': '45%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-[#131B2C]/90 backdrop-blur-xl shadow-[0_0_30px_rgba(0,255,255,0.1)] border border-white/10 rounded-2xl p-2 flex items-center gap-2 z-40">
<button className="px-4 py-2 rounded-xl text-sm font-medium text-cyan-300 hover:bg-white/10 hover:text-cyan-200 transition-colors flex items-center gap-2">
<iconify-icon height="18" icon="solar:add-circle-linear" width="18"></iconify-icon>
            New Node
          </button>
<div className="w-px h-6 bg-white/10"></div>
<button className="p-2.5 rounded-xl text-slate-400 hover:bg-white/10 hover:text-white transition-colors tooltip" title="Filter Paths">
<iconify-icon height="20" icon="solar:filter-linear" width="20"></iconify-icon>
</button>
<button className="p-2.5 rounded-xl text-slate-400 hover:bg-white/10 hover:text-white transition-colors" title="Zoom Out">
<iconify-icon height="20" icon="solar:minimaze-square-minimalistic-linear" width="20"></iconify-icon>
</button>
<button className="p-2.5 rounded-xl text-slate-400 hover:bg-white/10 hover:text-white transition-colors" title="View as List">
<iconify-icon height="20" icon="solar:list-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</main>

    </>
  );
}
