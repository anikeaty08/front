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
      

<nav className="sticky top-6 mx-auto z-50 w-[calc(100%-2rem)] max-w-6xl rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl">
<div className="px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="tracking-tighter font-medium text-lg flex items-center gap-2 font-sans" href="#">
<svg className="w-5 h-5 text-white" fill="none" viewbox="0 0 76 65" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="currentColor"></path>
</svg>
                BLDR
            </a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm transition-colors font-normal text-slate-400 hover:text-slate-100 font-sans" href="#">Features</a>
<a className="text-sm transition-colors font-normal text-slate-400 hover:text-slate-100 font-sans" href="#">Templates</a>
<a className="text-sm transition-colors font-normal text-slate-400 hover:text-slate-100 font-sans" href="#">Integrations</a>
<a className="text-sm transition-colors font-normal text-slate-400 hover:text-slate-100 font-sans" href="#">Pricing</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm transition-colors font-normal text-slate-400 hover:text-slate-100 font-sans" href="#">Log In</a>
<a className="px-4 py-2 rounded-lg text-sm font-normal transition-colors bg-white text-black hover:bg-slate-200 font-sans" href="#">Start Building</a>
</div>
</div>
</nav>

<main className="relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 pointer-events-none" style={{background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(0,0,0,0) 70%)'}}></div>
<div className="max-w-5xl mx-auto px-6 pt-40 pb-32 flex flex-col items-center text-center relative z-10">
<a className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-gradient-to-r from-white/5 to-white/10 text-xs font-normal text-white hover:from-white/10 hover:to-white/15 transition-all duration-500 mb-10 font-sans shadow-[0_0_20px_rgba(255,255,255,0.05)] backdrop-blur-xl group" href="#">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
<span className="tracking-wide">Introducing BLDR AI</span>
<svg className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform duration-300" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<h1 className="text-6xl md:text-8xl tracking-tight mb-8 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/30 font-bricolage font-normal drop-shadow-sm">
        Your ideas, on the web.<br/>In minutes.
    </h1>
<p className="text-xl md:text-2xl max-w-2xl mb-12 leading-relaxed text-slate-400/90 font-bricolage font-medium">
        The visual builder designed for developers. Create stunning, high-performance websites without writing a single line of boilerplate. Deploy globally instantly.
    </p>
<div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto relative">
<div className="absolute inset-0 bg-white/20 blur-[100px] rounded-full pointer-events-none -z-10"></div>
<button className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-normal transition-all duration-300 flex items-center justify-center bg-white text-black hover:bg-slate-100 font-sans shadow-[0_0_0_1px_rgba(255,255,255,1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:-translate-y-0.5">
            Start Deploying
        </button>
<button className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-normal transition-all duration-300 flex items-center justify-center bg-white/5 text-white font-sans border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-md gap-3 hover:-translate-y-0.5 group">
<svg className="lucide lucide-play-circle text-slate-400 group-hover:text-white transition-colors duration-300" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
            Watch Demo
        </button>
</div>
</div>

<div className="max-w-6xl mx-auto px-6 pb-32 relative z-10">
<div className="rounded-xl border bg-[#0A0A0A] overflow-hidden shadow-2xl flex flex-col h-[600px] ring-1 border-white/10 ring-white/10">

<div className="h-12 border-b flex items-center px-4 justify-between border-white/10 bg-black">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full border bg-slate-800 border-white/10"></div>
<div className="w-3 h-3 rounded-full border bg-slate-800 border-white/10"></div>
<div className="w-3 h-3 rounded-full border bg-slate-800 border-white/10"></div>
</div>
<div className="flex-1 max-w-md mx-4 border rounded-md h-7 flex items-center px-3 justify-center text-xs text-slate-500 font-medium tracking-wide hidden sm:flex bg-white/5 border-white/10 font-sans">
<iconify-icon className="mr-2" icon="solar:lock-keyhole-linear" strokeWidth="1.5"></iconify-icon> bldr.dev/project/home
                    </div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1 text-xs text-slate-500 font-medium hidden sm:flex font-sans">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                            Saved
                        </div>
<button className="px-3 py-1.5 rounded text-xs font-medium transition-colors bg-white text-black hover:bg-slate-200 font-sans">Publish</button>
</div>
</div>

<div className="flex-1 flex overflow-hidden">

<div className="w-64 border-r bg-[#050505] p-4 flex flex-col gap-6 hidden md:flex border-white/10">
<div className="">
<div className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-3 font-sans">Pages</div>
<div className="flex flex-col gap-1 gap-x-1 gap-y-1">
<div className="flex items-center justify-between p-2 rounded-md text-sm font-medium cursor-pointer bg-white/10 text-slate-200">
<div className="flex items-center gap-2 font-sans">
<iconify-icon icon="solar:document-linear" strokeWidth="1.5"></iconify-icon> Home
                                    </div>
</div><div className="flex items-center justify-between p-2 rounded-md text-sm font-medium cursor-pointer transition-colors hover:bg-white/5 text-slate-400">
<div className="flex items-center gap-2 font-sans">
<iconify-icon icon="solar:document-linear" strokeWidth="1.5"></iconify-icon> About
                                    </div>
</div>
<div className="flex items-center justify-between p-2 rounded-md text-sm font-medium cursor-pointer transition-colors hover:bg-white/5 text-slate-400">
<div className="flex items-center gap-2 font-sans">
<iconify-icon icon="solar:document-linear" strokeWidth="1.5"></iconify-icon> Pricing
                                    </div>
</div>
</div>
</div>
<div className="">
<div className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-3 font-sans">Elements</div>
<div className="grid grid-cols-2 gap-2">
<div className="flex flex-col items-center justify-center gap-2 p-3 rounded-md border cursor-pointer transition-colors bg-white/5 border-white/5 hover:border-white/20 text-slate-400">
<iconify-icon className="text-xl" icon="solar:text-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium font-sans">Text</span>
</div>
<div className="flex flex-col items-center justify-center gap-2 p-3 rounded-md border cursor-pointer transition-colors bg-white/5 border-white/5 hover:border-white/20 text-slate-400">
<iconify-icon className="text-xl" icon="solar:gallery-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium font-sans">Image</span>
</div>
<div className="flex flex-col items-center justify-center gap-2 p-3 rounded-md border cursor-pointer transition-colors bg-white/5 border-white/5 hover:border-white/20 text-slate-400">
<iconify-icon className="text-xl" icon="solar:square-bottom-down-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium font-sans">Button</span>
</div>
<div className="flex flex-col items-center justify-center gap-2 p-3 rounded-md border cursor-pointer transition-colors bg-white/5 border-white/5 hover:border-white/20 text-slate-400">
<iconify-icon className="text-xl" icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium font-sans">Box</span>
</div>
</div>
</div>
</div>

<div className="flex-1 bg-[#111] p-4 md:p-8 overflow-y-auto relative" style={{backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '24px 24px'}}>

<div className="w-full max-w-3xl mx-auto border rounded-xl overflow-hidden shadow-2xl relative group bg-black border-white/10">

<div className="absolute inset-0 border border-cyan-500/0 group-hover:border-cyan-500/50 pointer-events-none transition-colors z-20"></div>

<div className="h-16 border-b flex items-center justify-between px-8 relative border-white/10 bg-black">
<div className="w-24 h-5 rounded bg-white/20"></div>
<div className="flex gap-6 hidden sm:flex">
<div className="w-16 h-4 rounded bg-white/10"></div>
<div className="w-16 h-4 rounded bg-white/10"></div>
<div className="w-16 h-4 rounded bg-white/10"></div>
</div>
<div className="w-20 h-8 rounded bg-white/20"></div>
</div>

<div className="py-24 px-8 flex flex-col items-center text-center relative border border-transparent hover:border-cyan-500 cursor-pointer transition-colors">
<div className="absolute top-0 left-0 bg-cyan-500 text-xs px-2 py-0.5 font-medium hidden group-hover:block text-white font-sans">Section</div>
<div className="w-3/4 max-w-lg h-12 rounded-md mb-6 bg-white/20"></div>
<div className="w-full max-w-xl h-4 rounded mb-3 bg-white/10"></div>
<div className="w-5/6 max-w-lg h-4 rounded mb-10 bg-white/10"></div>
<div className="flex gap-4">
<div className="w-32 h-10 rounded-md bg-white/30"></div>
<div className="w-32 h-10 border rounded-md border-white/20"></div>
</div>
</div>

<div className="py-16 px-8 border-t bg-slate-900/30 border-white/5">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
<div className="p-6 rounded-lg border border-white/5 bg-black/50">
<div className="w-10 h-10 rounded mb-4 bg-white/10"></div>
<div className="w-3/4 h-5 rounded mb-3 bg-white/20"></div>
<div className="w-full h-3 rounded mb-2 bg-white/10"></div>
<div className="w-4/5 h-3 rounded bg-white/10"></div>
</div>
<div className="p-6 rounded-lg border border-white/5 bg-black/50">
<div className="w-10 h-10 rounded mb-4 bg-white/10"></div>
<div className="w-3/4 h-5 rounded mb-3 bg-white/20"></div>
<div className="w-full h-3 rounded mb-2 bg-white/10"></div>
<div className="w-4/5 h-3 rounded bg-white/10"></div>
</div>
<div className="p-6 rounded-lg border border-white/5 bg-black/50">
<div className="w-10 h-10 rounded mb-4 bg-white/10"></div>
<div className="w-3/4 h-5 rounded mb-3 bg-white/20"></div>
<div className="w-full h-3 rounded mb-2 bg-white/10"></div>
<div className="w-4/5 h-3 rounded bg-white/10"></div>
</div>
</div>
</div>
</div>
</div>

<div className="w-64 border-l bg-[#050505] p-4 flex flex-col gap-6 hidden lg:flex border-white/10">
<div className="">
<div className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-4 font-sans">Properties</div>
<div className="flex flex-col gap-4">

<div>
<label className="text-xs mb-1 block text-slate-400 font-sans">Width</label>
<div className="flex items-center gap-2">
<div className="flex-1 border rounded px-2 py-1.5 text-xs font-mono bg-white/5 border-white/10 text-slate-300 font-sans">100</div>
<div className="w-12 border rounded px-2 py-1.5 text-xs text-slate-500 font-mono text-center bg-white/5 border-white/10 font-sans">%</div>
</div>
</div>
<div className="">
<label className="text-xs mb-1 block text-slate-400 font-sans">Height</label>
<div className="flex items-center gap-2">
<div className="flex-1 border rounded px-2 py-1.5 text-xs font-mono bg-white/5 border-white/10 text-slate-300 font-sans">Auto</div>
</div>
</div>
<div className="pt-4 border-t border-white/10">
<label className="text-xs mb-2 block text-slate-400 font-sans">Background</label>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded border cursor-pointer border-white/20 bg-black"></div>
<span className="text-xs font-mono uppercase text-slate-300 font-sans">#000000</span>
</div>
</div>
<div className="pt-4 border-t border-white/10">
<label className="text-xs mb-2 block text-slate-400 font-sans">Padding</label>
<div className="grid grid-cols-2 gap-2">
<div className="border rounded px-2 py-1.5 text-xs font-mono flex justify-between bg-white/5 border-white/10 text-slate-400">
<span className="font-sans">T</span><span className="font-sans">96</span>
</div>
<div className="border rounded px-2 py-1.5 text-xs font-mono flex justify-between bg-white/5 border-white/10 text-slate-400">
<span className="font-sans">B</span><span className="font-sans">96</span>
</div>
<div className="border rounded px-2 py-1.5 text-xs font-mono flex justify-between bg-white/5 border-white/10 text-slate-400">
<span className="font-sans">L</span><span className="font-sans">32</span>
</div>
<div className="border rounded px-2 py-1.5 text-xs font-mono flex justify-between bg-white/5 border-white/10 text-slate-400">
<span className="font-sans">R</span><span className="font-sans">32</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="border-t border-white/10 bg-black">
<div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl tracking-tight mb-4 font-bricolage font-semibold">Everything you need to ship.</h2>
<p className="text-lg max-w-2xl mx-auto font-normal text-slate-400 font-sans">Focus on your product, not the infrastructure. BLDR provides a complete toolkit from design to global deployment.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-xl border bg-white/[0.02] hover:bg-white/[0.04] transition-colors group border-white/10">
<div className="w-12 h-12 rounded-lg border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-white/5 border-white/10">
<iconify-icon className="text-2xl text-slate-300" icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight mb-3 text-slate-100 font-bricolage font-semibold">Global Edge Network</h3>
<p className="text-sm leading-relaxed font-normal text-slate-400 font-sans">Deploy your site to edge locations worldwide automatically. Millisecond latency for every user.</p>
</div>

<div className="p-8 rounded-xl border bg-white/[0.02] hover:bg-white/[0.04] transition-colors group border-white/10">
<div className="w-12 h-12 rounded-lg border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-white/5 border-white/10">
<iconify-icon className="text-2xl text-slate-300" icon="solar:branching-paths-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight mb-3 text-slate-100 font-bricolage font-semibold">Automatic Branch Previews</h3>
<p className="text-sm leading-relaxed font-normal text-slate-400 font-sans">Every change creates a unique preview URL. Share with your team and get feedback before merging.</p>
</div>

<div className="p-8 rounded-xl border bg-white/[0.02] hover:bg-white/[0.04] transition-colors group border-white/10">
<div className="w-12 h-12 rounded-lg border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-white/5 border-white/10">
<iconify-icon className="text-2xl text-slate-300" icon="solar:code-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight mb-3 text-slate-100 font-bricolage font-semibold">Custom Code Integration</h3>
<p className="text-sm leading-relaxed font-normal text-slate-400 font-sans">Eject to code whenever you need. Import your own React components or write custom CSS directly.</p>
</div>

<div className="p-8 rounded-xl border bg-white/[0.02] hover:bg-white/[0.04] transition-colors group border-white/10">
<div className="w-12 h-12 rounded-lg border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-white/5 border-white/10">
<iconify-icon className="text-2xl text-slate-300" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight mb-3 text-slate-100 font-bricolage font-semibold">Built-in CMS</h3>
<p className="text-sm leading-relaxed font-normal text-slate-400 font-sans">Manage your content visually. Connect to headless CMS providers or use our native scalable database.</p>
</div>

<div className="p-8 rounded-xl border bg-white/[0.02] hover:bg-white/[0.04] transition-colors group border-white/10">
<div className="w-12 h-12 rounded-lg border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-white/5 border-white/10">
<iconify-icon className="text-2xl text-slate-300" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight mb-3 text-slate-100 font-bricolage font-semibold">First-party Analytics</h3>
<p className="text-sm leading-relaxed font-normal text-slate-400 font-sans">Privacy-friendly analytics integrated out of the box. Track visitors, pageviews, and Web Vitals.</p>
</div>

<div className="p-8 rounded-xl border bg-white/[0.02] hover:bg-white/[0.04] transition-colors group border-white/10">
<div className="w-12 h-12 rounded-lg border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-white/5 border-white/10">
<iconify-icon className="text-2xl text-slate-300" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight mb-3 text-slate-100 font-bricolage font-semibold">Enterprise Security</h3>
<p className="text-sm leading-relaxed font-normal text-slate-400 font-sans">DDoS protection, automatic SSL, and advanced firewall rules keep your application secure.</p>
</div>
</div>
</div>
</section>

<section className="border-t bg-[#050505] overflow-hidden border-white/10">
<div className="md:py-32 flex flex-col lg:flex-row gap-16 max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 gap-x-16 gap-y-16 items-center">
<div className="flex-1">
<h2 className="text-3xl md:text-4xl tracking-tight mb-6 font-bricolage font-semibold">Works with your stack.</h2>
<p className="text-lg mb-8 font-normal leading-relaxed text-slate-400 font-sans">
                    BLDR isn't a walled garden. Export clean, readable code anytime or integrate existing repositories. We support all major frontend frameworks natively.
                </p>
<ul className="flex flex-col gap-4">
<li className="flex items-center gap-3 text-sm font-medium text-slate-300 font-sans">
<iconify-icon className="text-slate-500 text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Export to Next.js
                    </li>
<li className="flex items-center gap-3 text-sm font-medium text-slate-300 font-sans">
<iconify-icon className="text-slate-500 text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Sync with GitHub, GitLab, Bitbucket
                    </li>
<li className="flex items-center gap-3 text-sm font-medium text-slate-300 font-sans">
<iconify-icon className="text-slate-500 text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> NPM package support
                    </li>
</ul>
</div>
<div className="flex-1 w-full relative">
<div className="rounded-xl border overflow-hidden font-mono text-sm shadow-2xl border-white/10 bg-black">
<div className="h-10 border-b flex items-center px-4 gap-2 border-white/10 bg-white/5">
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
</div>
<div className="p-6 leading-loose overflow-x-auto text-slate-400 font-sans">
<span className="text-amber-400 font-sans">import</span> { Builder } <span className="text-amber-400 font-sans">from</span> <span className="text-green-400 font-sans">'@bldr/react'</span>;<br/>
<span className="text-amber-400 font-sans">import</span> <span className="text-green-400 font-sans">'@bldr/styles.css'</span>;<br/><br/>
<span className="text-amber-400 font-sans">export default function</span> <span className="text-cyan-400 font-sans">App</span>() {<br/>
                          <span className="text-amber-400 font-sans">return</span> (<br/>
                            &lt;<span className="text-cyan-400 font-sans">Builder</span><br/>
                              <span className="text-slate-200 font-sans">apiKey</span>=<span className="text-green-400 font-sans">"pk_live_your_key_here"</span><br/>
                              <span className="text-slate-200 font-sans">model</span>=<span className="text-green-400 font-sans">"page"</span><br/>
                            /&gt;<br/>
                          );<br/>
                        }
                    </div>
</div>

<div className="absolute -inset-4 blur-2xl -z-10 rounded-full bg-white/5"></div>
</div>
</div>
</section>

<section className="border-t relative overflow-hidden border-white/10">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="max-w-4xl mx-auto px-6 py-32 text-center relative z-10">
<h2 className="text-4xl md:text-5xl tracking-tighter mb-6 font-bricolage font-semibold">Ready to build?</h2>
<p className="text-lg mb-10 font-normal text-slate-400 font-sans">Join thousands of developers building faster web experiences.</p>
<button className="px-8 py-4 rounded-md text-sm font-medium transition-colors inline-flex items-center gap-2 bg-white text-black hover:bg-slate-200 font-sans">
                Start Deploying for Free
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</section>

<footer className="border-t pt-16 pb-8 border-white/10 bg-black">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="tracking-tighter font-semibold text-lg flex items-center gap-2 mb-4 font-sans" href="#">
<svg className="w-5 h-5 text-white" fill="none" viewbox="0 0 76 65" xmlns="http://www.w3.org/2000/svg"><path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="currentColor"></path></svg>
                        BLDR
                    </a>
</div>
<div>
<h4 className="text-sm font-medium mb-4 tracking-tight text-slate-100 font-sans">Product</h4>
<ul className="flex flex-col gap-3 text-sm font-normal text-slate-400">
<li><a className="transition-colors hover:text-white font-sans" href="#">Features</a></li>
<li><a className="transition-colors hover:text-white font-sans" href="#">Templates</a></li>
<li><a className="transition-colors hover:text-white font-sans" href="#">Integrations</a></li>
<li><a className="transition-colors hover:text-white font-sans" href="#">Enterprise</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-medium mb-4 tracking-tight text-slate-100 font-sans">Resources</h4>
<ul className="flex flex-col gap-3 text-sm font-normal text-slate-400">
<li><a className="transition-colors hover:text-white font-sans" href="#">Documentation</a></li>
<li><a className="transition-colors hover:text-white font-sans" href="#">Guides</a></li>
<li className=""><a className="transition-colors hover:text-white font-sans" href="#">API Reference</a></li>
<li><a className="transition-colors hover:text-white font-sans" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium mb-4 tracking-tight text-slate-100 font-sans">Company</h4>
<ul className="flex flex-col gap-3 text-sm font-normal text-slate-400">
<li><a className="transition-colors hover:text-white font-sans" href="#">About</a></li>
<li><a className="transition-colors hover:text-white font-sans" href="#">Customers</a></li>
<li><a className="transition-colors hover:text-white font-sans" href="#">Careers</a></li>
<li><a className="transition-colors hover:text-white font-sans" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t text-xs text-slate-500 font-normal gap-4 border-white/10">
<div className="flex gap-4">
<a className="transition-colors hover:text-white font-sans" href="#">Privacy Policy</a>
<a className="transition-colors hover:text-white font-sans" href="#">Terms of Service</a>
</div>
<p className="font-sans">© 2024 BLDR Inc. All rights reserved.</p>
</div>
</div>
</footer>

    </>
  );
}
