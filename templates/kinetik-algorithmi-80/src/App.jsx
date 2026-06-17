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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
void: '#020202',
surface: '#0A0A0A',
neon: '#CCFF00',
neonDim: 'rgba(204, 255, 0, 0.1)',
darkGreen: '#102005',
borderDim: '#222222',
},
letterSpacing: {
tighter: '-0.05em',
tight: '-0.03em',
},
animation: {
'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'glitch': 'glitch 0.3s cubic-bezier(.25, .46, .45, .94) both infinite',
'scan': 'scan 8s linear infinite',
},
keyframes: {
glitch: {
'0%': { transform: 'translate(0)' },
'20%': { transform: 'translate(-2px, 2px)' },
'40%': { transform: 'translate(-2px, -2px)' },
'60%': { transform: 'translate(2px, 2px)' },
'80%': { transform: 'translate(2px, -2px)' },
'100%': { transform: 'translate(0)' },
},
scan: {
'0%': { backgroundPosition: '0 0' },
'100%': { backgroundPosition: '0 100%' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
        
        // Simple "Parallax" effect for terminal window on mouse move
        const terminal = document.getElementById('terminal-window');
        document.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.pageX) / 50;
            const y = (window.innerHeight / 2 - e.pageY) / 50;
            terminal.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
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
      

<div className="noise-overlay"></div>
<div className="scanlines"></div>

<nav className="fixed top-0 w-full z-40 bg-void/90 backdrop-blur-sm border-b border-white/5 h-[60px] flex items-center justify-between px-6">
<div className="flex items-center gap-4">
<span className="font-mono text-white tracking-tight font-bold text-sm">KINETIK <span className="text-neutral-600">[v.3.0]</span></span>
</div>
<div className="hidden md:flex items-center gap-6 font-mono text-xs text-neutral-400">
<a className="hover:text-neon transition-colors group" href="#">SERVICES<span className="hidden group-hover:inline text-neon ml-1">_</span></a>
<span className="text-neutral-800">|</span>
<a className="hover:text-neon transition-colors group" href="#">PROJECTS<span className="hidden group-hover:inline text-neon ml-1">_</span></a>
<span className="text-neutral-800">|</span>
<a className="hover:text-neon transition-colors group" href="#">NODES<span className="hidden group-hover:inline text-neon ml-1">_</span></a>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-2 font-mono text-[10px] tracking-widest text-neon">
<div className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse"></div>
                STATUS: ONLINE
            </div>
<button className="font-mono text-xs border border-neutral-700 hover:border-neon hover:text-neon text-white px-4 py-1.5 transition-all duration-200">
                [CONNECT_WALLET]
            </button>
</div>
</nav>

<section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-darkGreen opacity-60 blur-[120px] rounded-full pointer-events-none"></div>

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(204, 255, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(204, 255, 0, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="z-10 text-center space-y-8 max-w-5xl px-4 perspective-container">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tighter leading-none">
                CODE AT THE <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600">SPEED OF THOUGHT</span>
</h1>

<div className="tilt-card mx-auto mt-12 w-full max-w-2xl bg-surface border border-white/10 shadow-neon rounded-sm overflow-hidden text-left" id="terminal-window">
<div className="bg-[#111] px-4 py-2 border-b border-white/5 flex items-center justify-between">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
</div>
<div className="font-mono text-[10px] text-neutral-500">bash — 80x24</div>
</div>
<div className="p-6 font-mono text-xs md:text-sm text-neutral-400 space-y-2 h-[200px] overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent pointer-events-none"></div>
<p><span className="text-neon">root@kinetik:~#</span> init_sequence --force</p>
<p className="text-neutral-500">&gt; Loading neural architecture...</p>
<p className="text-neutral-500">&gt; Optimizing liquidity pools...</p>
<p className="text-neutral-500">&gt; Deploying smart contracts to Mainnet...</p>
<p><span className="text-neon">root@kinetik:~#</span> generate_ui --style=cyberpunk</p>
<p className="text-white">Rendering components... [14ms]</p>
<p className="text-white">Done. <span className="text-neon">View Output</span></p>
<p><span className="text-neon">root@kinetik:~#</span> <span className="cursor-block"></span></p>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-[#050505]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">

<div className="group flex items-center justify-center gap-2 grayscale hover:grayscale-0 transition-all cursor-crosshair">
<i className="w-5 h-5 text-neon group-hover:animate-pulse" data-lucide="triangle"></i>
<span className="font-bold tracking-tighter text-lg text-white group-hover:text-neon transition-colors">VERCEL</span>
</div>
<div className="group flex items-center justify-center gap-2 grayscale hover:grayscale-0 transition-all cursor-crosshair">
<i className="w-5 h-5 text-neon group-hover:animate-pulse" data-lucide="layers"></i>
<span className="font-bold tracking-tighter text-lg text-white group-hover:text-neon transition-colors">SOLANA</span>
</div>
<div className="group flex items-center justify-center gap-2 grayscale hover:grayscale-0 transition-all cursor-crosshair">
<i className="w-5 h-5 text-neon group-hover:animate-pulse" data-lucide="box"></i>
<span className="font-bold tracking-tighter text-lg text-white group-hover:text-neon transition-colors">LINEAR</span>
</div>
<div className="group flex items-center justify-center gap-2 grayscale hover:grayscale-0 transition-all cursor-crosshair">
<i className="w-5 h-5 text-neon group-hover:animate-pulse" data-lucide="cpu"></i>
<span className="font-bold tracking-tighter text-lg text-white group-hover:text-neon transition-colors">OPENAI</span>
</div>
<div className="group flex items-center justify-center gap-2 grayscale hover:grayscale-0 transition-all cursor-crosshair">
<i className="w-5 h-5 text-neon group-hover:animate-pulse" data-lucide="hexagon"></i>
<span className="font-bold tracking-tighter text-lg text-white group-hover:text-neon transition-colors">ETHEREUM</span>
</div>
<div className="group flex items-center justify-center gap-2 grayscale hover:grayscale-0 transition-all cursor-crosshair">
<i className="w-5 h-5 text-neon group-hover:animate-pulse" data-lucide="wind"></i>
<span className="font-bold tracking-tighter text-lg text-white group-hover:text-neon transition-colors">TAILWIND</span>
</div>
</div>
</div>
</section>

<section className="py-32 relative">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 border border-neon/20 rounded-full bg-neon/5">
<span className="w-1.5 h-1.5 bg-neon rounded-full"></span>
<span className="font-mono text-[10px] text-neon uppercase tracking-wide">Algorithmic Velocity</span>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.1]">
                    WE BUILD INFRASTRUCTURE <br/>
<span className="text-neutral-500">WHILE YOU BLINK.</span>
</h2>
<p className="text-lg text-neutral-400 font-light max-w-md">
                    Stop waiting for sprint cycles. Our AI-driven engine generates production-ready smart contracts and frontend architectures in milliseconds.
                </p>
<button className="group flex items-center gap-3 font-mono text-sm text-white uppercase tracking-wider">
<span className="border-b border-neon pb-0.5 group-hover:text-neon transition-colors">Initiate Process</span>
<i className="w-4 h-4 text-neon group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>

<div className="relative group">

<div className="absolute -inset-1 bg-gradient-to-r from-neon/20 to-transparent rounded-sm blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
<div className="relative bg-[#080808] border border-white/10 rounded-sm overflow-hidden grid grid-cols-5 h-[400px]">

<div className="col-span-3 border-r border-white/5 p-4 font-mono text-[10px] md:text-xs text-neutral-400 overflow-hidden leading-relaxed">
<div className="flex gap-4 mb-4 text-neutral-600 select-none">
<span>1</span>
<span className="text-purple-400">import</span> { <span className="text-yellow-200">KinetikAI</span> } <span className="text-purple-400">from</span> <span className="text-green-300">'@kinetik/core'</span>;
                        </div>
<div className="flex gap-4 mb-4 text-neutral-600 select-none">
<span>2</span>
</div>
<div className="flex gap-4 mb-4 text-neutral-600 select-none">
<span>3</span>
<span className="text-purple-400">const</span> <span className="text-blue-300">app</span> = <span className="text-purple-400">await</span> KinetikAI.<span className="text-yellow-200">build</span>({
                        </div>
<div className="flex gap-4 mb-4 text-neutral-600 select-none">
<span>4</span>
                              type: <span className="text-green-300">'DEX'</span>,
                        </div>
<div className="flex gap-4 mb-4 text-neutral-600 select-none">
<span>5</span>
                              chain: <span className="text-green-300">'Solana'</span>,
                        </div>
<div className="flex gap-4 mb-4 text-neutral-600 select-none">
<span>6</span>
                              velocity: <span className="text-orange-400">MAX_INT</span>
</div>
<div className="flex gap-4 mb-4 text-neutral-600 select-none">
<span>7</span>
                            });
                        </div>
<div className="flex gap-4 text-neutral-600 select-none animate-pulse">
<span>8</span>
<span className="w-2 h-4 bg-neon"></span>
</div>
</div>

<div className="col-span-2 bg-[#050505] p-4 flex flex-col justify-center items-center relative">
<div className="absolute top-2 right-2 text-[8px] font-mono text-neon">LIVE_PREVIEW</div>

<div className="w-full bg-surface border border-white/10 p-3 rounded-sm space-y-3">
<div className="h-2 w-1/3 bg-neutral-800 rounded-full"></div>
<div className="h-8 w-full bg-neutral-800 rounded-sm border border-neutral-700"></div>
<div className="h-2 w-2/3 bg-neutral-800 rounded-full"></div>
<div className="h-6 w-full bg-neon text-black text-[10px] font-bold flex items-center justify-center uppercase">Swap</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-black border-y border-white/5 py-2 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 font-mono text-xs text-neutral-500 whitespace-nowrap overflow-hidden flex gap-12">
<div className="animate-scan flex gap-12">
<span>[SYSTEM] GENERATION: ACTIVE</span>
<span>[LOG] <span className="text-neon">1,402,911</span> LINES GENERATED</span>
<span>[LOG] <span className="text-neon">412</span> STARTUPS SCALED</span>
<span>[METRIC] AVG LATENCY: 12ms</span>
<span>[STATUS] ALL SYSTEMS GO</span>

<span>[SYSTEM] GENERATION: ACTIVE</span>
<span>[LOG] <span className="text-neon">1,402,911</span> LINES GENERATED</span>
<span>[LOG] <span className="text-neon">412</span> STARTUPS SCALED</span>
<span>[METRIC] AVG LATENCY: 12ms</span>
<span>[STATUS] ALL SYSTEMS GO</span>
</div>
</div>
</section>

<section className="py-32 max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-16 border-b border-white/10 pb-4">
<h3 className="text-3xl font-medium tracking-tight text-white">PROJECT_LOGS</h3>
<span className="font-mono text-xs text-neon">// RECENT_DEPLOYMENTS</span>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group relative bg-surface border border-white/5 hover:border-neon/50 transition-colors duration-300">
<div className="aspect-video bg-[#111] relative overflow-hidden">
<div className="absolute inset-0 bg-neutral-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">

<div className="w-32 h-20 border border-neutral-700 rounded-sm relative">
<div className="absolute top-2 left-2 right-2 h-2 bg-neutral-800"></div>
<div className="absolute bottom-2 right-2 w-8 h-8 bg-neutral-800 rounded-full"></div>
</div>
</div>

<div className="absolute inset-0 bg-neon/10 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity"></div>
</div>
<div className="p-5 space-y-4">
<div className="flex justify-between items-start">
<div>
<h4 className="font-bold text-white text-lg tracking-tight">PROJECT_AEGIS</h4>
<p className="font-mono text-[10px] text-neutral-500 mt-1">DEFI_PROTOCOL // ETH_L2</p>
</div>
<i className="w-4 h-4 text-neon opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="arrow-up-right"></i>
</div>
<div className="flex gap-2 font-mono text-[10px] text-neutral-400">
<span className="px-2 py-1 border border-white/10 bg-black">COMPUTE: 4ms</span>
<span className="px-2 py-1 border border-white/10 bg-black">LINES: 14k</span>
</div>
</div>
</div>

<div className="group relative bg-surface border border-white/5 hover:border-neon/50 transition-colors duration-300">
<div className="aspect-video bg-[#111] relative overflow-hidden">
<div className="absolute inset-0 bg-neutral-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<div className="w-24 h-24 border border-neutral-700 rounded-full flex items-center justify-center">
<div className="w-16 h-16 border border-neutral-600 rounded-full"></div>
</div>
</div>
<div className="absolute inset-0 bg-neon/10 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity"></div>
</div>
<div className="p-5 space-y-4">
<div className="flex justify-between items-start">
<div>
<h4 className="font-bold text-white text-lg tracking-tight">NEURAL_DAO</h4>
<p className="font-mono text-[10px] text-neutral-500 mt-1">GOVERNANCE // SOLANA</p>
</div>
<i className="w-4 h-4 text-neon opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="arrow-up-right"></i>
</div>
<div className="flex gap-2 font-mono text-[10px] text-neutral-400">
<span className="px-2 py-1 border border-white/10 bg-black">COMPUTE: 12ms</span>
<span className="px-2 py-1 border border-white/10 bg-black">EFFICIENCY: 99%</span>
</div>
</div>
</div>

<div className="group relative bg-surface border border-white/5 hover:border-neon/50 transition-colors duration-300">
<div className="aspect-video bg-[#111] relative overflow-hidden">
<div className="absolute inset-0 bg-neutral-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<div className="grid grid-cols-3 gap-1 w-24">
<div className="h-8 bg-neutral-800"></div><div className="h-8 bg-neutral-700"></div><div className="h-8 bg-neutral-800"></div>
<div className="h-8 bg-neutral-700"></div><div className="h-8 bg-neutral-800"></div><div className="h-8 bg-neutral-700"></div>
</div>
</div>
<div className="absolute inset-0 bg-neon/10 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity"></div>
</div>
<div className="p-5 space-y-4">
<div className="flex justify-between items-start">
<div>
<h4 className="font-bold text-white text-lg tracking-tight">SYNTH_FI</h4>
<p className="font-mono text-[10px] text-neutral-500 mt-1">HFT_ALGO // ARBITRUM</p>
</div>
<i className="w-4 h-4 text-neon opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="arrow-up-right"></i>
</div>
<div className="flex gap-2 font-mono text-[10px] text-neutral-400">
<span className="px-2 py-1 border border-white/10 bg-black">LATENCY: 1ms</span>
<span className="px-2 py-1 border border-white/10 bg-black">ROI: +400%</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#050505] relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-darkGreen opacity-40 blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-20">
<h2 className="text-4xl font-medium tracking-tight text-white mb-4">COMPUTE_CREDITS</h2>
<p className="text-neutral-400 font-light">Purchase raw processing power. Scale as needed.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 items-end">

<div className="bg-surface border border-white/10 p-8 hover:border-white/30 transition-colors">
<div className="font-mono text-xs text-neutral-500 mb-6">[NODE]</div>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-3xl font-mono text-white">$199</span>
<span className="text-neutral-500 text-sm">/mo</span>
</div>
<ul className="space-y-4 font-mono text-xs text-neutral-400 mb-8">
<li className="flex items-center gap-2"><i className="w-3 h-3 text-neon" data-lucide="check"></i> 1 Active Project</li>
<li className="flex items-center gap-2"><i className="w-3 h-3 text-neon" data-lucide="check"></i> Standard Velocity</li>
<li className="flex items-center gap-2"><i className="w-3 h-3 text-neon" data-lucide="check"></i> 48hr Support</li>
</ul>
<button className="w-full border border-white/20 py-3 text-xs font-mono text-white hover:bg-white hover:text-black transition-colors uppercase">
                        Select Node
                    </button>
</div>

<div className="bg-[#080808] border border-neon p-8 relative shadow-neon transform scale-105">
<div className="absolute top-0 inset-x-0 h-[1px] bg-neon shadow-[0_0_10px_#CCFF00]"></div>
<div className="font-mono text-xs text-neon mb-6">[CLUSTER] // RECOMMENDED</div>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-mono text-white">$499</span>
<span className="text-neutral-500 text-sm">/mo</span>
</div>
<ul className="space-y-4 font-mono text-xs text-neutral-300 mb-8">
<li className="flex items-center gap-2"><i className="w-3 h-3 text-neon" data-lucide="check"></i> 5 Active Projects</li>
<li className="flex items-center gap-2"><i className="w-3 h-3 text-neon" data-lucide="check"></i> High Velocity</li>
<li className="flex items-center gap-2"><i className="w-3 h-3 text-neon" data-lucide="check"></i> Instant Deploy</li>
<li className="flex items-center gap-2"><i className="w-3 h-3 text-neon" data-lucide="check"></i> Priority Channel</li>
</ul>
<button className="w-full bg-neon py-3 text-xs font-mono text-black font-bold hover:bg-white transition-colors uppercase">
                        Initialize Cluster
                    </button>
</div>

<div className="bg-surface border border-white/10 p-8 hover:border-white/30 transition-colors">
<div className="font-mono text-xs text-neutral-500 mb-6">[MAINFRAME]</div>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-3xl font-mono text-white">CUSTOM</span>
</div>
<ul className="space-y-4 font-mono text-xs text-neutral-400 mb-8">
<li className="flex items-center gap-2"><i className="w-3 h-3 text-neon" data-lucide="check"></i> Unlimited Nodes</li>
<li className="flex items-center gap-2"><i className="w-3 h-3 text-neon" data-lucide="check"></i> Max Velocity</li>
<li className="flex items-center gap-2"><i className="w-3 h-3 text-neon" data-lucide="check"></i> Dedicated Engineer</li>
</ul>
<button className="w-full border border-white/20 py-3 text-xs font-mono text-white hover:bg-white hover:text-black transition-colors uppercase">
                        Contact Sales
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6">
<div className="font-mono text-sm text-neutral-500 mb-8 border-b border-white/10 pb-2">
            root@user:~/faq $ <span className="text-neon">./run_query</span>
</div>
<div className="space-y-4">
<details className="group bg-[#080808] border border-white/5 open:border-neon/30">
<summary className="list-none flex justify-between items-center p-4 cursor-pointer hover:bg-white/5 transition-colors">
<span className="font-mono text-sm text-neutral-300 group-open:text-neon">&gt; How fast is delivery?</span>
<i className="w-4 h-4 text-neutral-600 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-4 pb-4 font-mono text-xs text-neutral-400 leading-relaxed border-t border-dashed border-white/10 pt-4">
                    // Output:
                    <br/>
                    Our algorithmic engine works in real-time. Prototype generation takes ~400ms. Full deployment depends on complexity but averages 2-3 days for standard protocols.
                </div>
</details>
<details className="group bg-[#080808] border border-white/5 open:border-neon/30">
<summary className="list-none flex justify-between items-center p-4 cursor-pointer hover:bg-white/5 transition-colors">
<span className="font-mono text-sm text-neutral-300 group-open:text-neon">&gt; Do I own the code?</span>
<i className="w-4 h-4 text-neutral-600 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-4 pb-4 font-mono text-xs text-neutral-400 leading-relaxed border-t border-dashed border-white/10 pt-4">
                    // Output:
                    <br/>
                    Yes. Upon payment completion, IP rights transfer to your wallet address via an automated legal smart contract.
                </div>
</details>
<details className="group bg-[#080808] border border-white/5 open:border-neon/30">
<summary className="list-none flex justify-between items-center p-4 cursor-pointer hover:bg-white/5 transition-colors">
<span className="font-mono text-sm text-neutral-300 group-open:text-neon">&gt; Tech stack support?</span>
<i className="w-4 h-4 text-neutral-600 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-4 pb-4 font-mono text-xs text-neutral-400 leading-relaxed border-t border-dashed border-white/10 pt-4">
                    // Output:
                    <br/>
                    Primary: Solidity, Rust (Solana), React/Next.js, Python (AI). We do not support legacy systems.
                </div>
</details>
</div>
</section>

<footer className="border-t border-white/10 bg-void pt-16 pb-8 relative">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 space-y-4">
<h4 className="font-mono font-bold text-white text-lg">KINETIK</h4>
<p className="font-mono text-xs text-neutral-500">
                    The Algorithmic Dev-Shop.<br/>
                    Synthesizing reality since 2024.
                </p>
</div>

<div className="col-span-1 flex flex-col gap-2 font-mono text-xs text-neutral-400 uppercase tracking-wide">
<a className="hover:text-neon transition-colors" href="#">Services</a>
<a className="hover:text-neon transition-colors" href="#">Manifesto</a>
<a className="hover:text-neon transition-colors" href="#">Pricing</a>
</div>

<div className="col-span-2">
<div className="font-mono text-xs text-neutral-500 mb-4">// INITIALIZE_SEQUENCE</div>
<form className="flex w-full border-b border-neon relative group">
<span className="py-2 text-neon font-mono mr-2">&gt;</span>
<input className="w-full bg-transparent text-white font-mono text-sm py-2 focus:outline-none placeholder:text-neutral-700" placeholder="Enter email address..." type="email"/>
<button className="font-mono text-xs text-neon uppercase px-4 hover:bg-neon hover:text-black transition-colors" type="submit">
                        [EXECUTE]
                    </button>

<div className="absolute bottom-2 left-[180px] w-2 h-4 bg-neon opacity-50 animate-pulse pointer-events-none hidden group-focus-within:block"></div>
</form>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="font-mono text-[10px] text-neutral-600">
                © 2024 KINETIK SYSTEMS INC. ALL RIGHTS RESERVED.
            </div>

<div className="flex gap-6 font-mono text-[10px] tracking-wide text-neutral-500">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse-fast"></span>
                    API: ONLINE
                </div>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse-fast delay-75"></span>
                    LATENCY: 12ms
                </div>
<div className="hidden md:flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse-fast delay-150"></span>
                    BUILD: v3.0.4
                </div>
</div>
</div>
</footer>



    </>
  );
}
