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



        lucide.createIcons();
    
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
      

<header className="relative z-50 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-yellow-300 via-blue-300 to-pink-300 p-[2px]">
<div className="w-full h-full bg-white rounded-full"></div>
</div>
<span className="text-xl font-semibold tracking-tight">PitchBot</span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Industries</a>
<a className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Documents</a>
<a className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Partnership</a>
<a className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Contact us</a>
</nav>
<div className="flex items-center gap-6">
<a className="text-base font-medium text-gray-600 hover:text-gray-900 hidden sm:block" href="#">Log in</a>
<a className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-base font-medium hover:bg-gray-800 transition-colors" href="#">Get started</a>
</div>
</header>

<section className="relative pt-20 pb-32 px-6 flex flex-col items-center text-center">

<div className="absolute top-[-10%] left-[10%] w-[600px] h-[600px] bg-yellow-100/60 rounded-full blur-[120px] -z-10 mix-blend-multiply pointer-events-none"></div>
<div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-[120px] -z-10 mix-blend-multiply pointer-events-none"></div>
<div className="absolute top-[30%] left-[40%] w-[400px] h-[400px] bg-pink-100/40 rounded-full blur-[100px] -z-10 mix-blend-multiply pointer-events-none"></div>

<div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-md border border-gray-200/60 rounded-full py-1.5 pl-1.5 pr-4 shadow-sm mb-8">
<div className="flex -space-x-2">
<img alt="" className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<span className="text-sm font-medium text-gray-700">1k+ joined</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 max-w-4xl leading-[1.1]">
            Elevate your Sales,<br/> Service and Success.
        </h1>
<a className="mt-10 bg-gray-900 text-white px-6 py-3.5 rounded-full text-base font-medium hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20" href="#">
            Schedule a demo
        </a>

<div className="mt-20 w-full max-w-[1000px] bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] flex overflow-hidden p-2 relative z-10">

<div className="w-16 bg-white/40 rounded-2xl flex flex-col items-center py-6 gap-6">
<button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-white transition-colors">
<i className="w-4 h-4" data-lucide="plus" strokeWidth="1.5"></i>
</button>
<div className="flex flex-col gap-5 text-gray-400 mt-2">
<i className="w-5 h-5 text-gray-800" data-lucide="home" strokeWidth="1.5"></i>
<i className="w-5 h-5" data-lucide="compass" strokeWidth="1.5"></i>
<i className="w-5 h-5" data-lucide="folder" strokeWidth="1.5"></i>
<i className="w-5 h-5" data-lucide="file-text" strokeWidth="1.5"></i>
<i className="w-5 h-5" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<div className="mt-auto flex flex-col gap-5 items-center">
<i className="w-5 h-5 text-gray-400" data-lucide="settings" strokeWidth="1.5"></i>
<img alt="" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
</div>

<div className="flex-1 bg-white/80 rounded-[1.5rem] p-8 md:p-10 flex flex-col ml-2">
<div className="flex items-center gap-4 mb-8 text-left">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 shadow-inner flex-shrink-0"></div>
<div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">Hi, Emily!</h2>
<p className="text-base text-gray-500 mt-1">How can I help you today?</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="bg-[#f8f9fa] border border-gray-100 rounded-2xl p-6 relative overflow-hidden group hover:bg-[#f1f3f5] transition-colors cursor-pointer min-h-[160px] flex flex-col justify-center text-left">
<div className="relative z-10 w-3/5">
<h3 className="text-base font-medium text-gray-900 mb-2">Add files</h3>
<p className="text-sm text-gray-500 leading-relaxed">Effortlessly handle and process different types of files.</p>
</div>

<div className="absolute -right-4 top-4 w-32 h-32 pointer-events-none">
<div className="absolute top-0 right-4 w-24 h-20 bg-gray-900 rounded-xl rotate-12 shadow-lg"></div>
<div className="absolute top-6 right-8 w-24 h-20 bg-white border border-gray-200 rounded-xl -rotate-6 shadow-xl flex flex-col gap-2 p-3">
<div className="flex gap-1"><div className="w-1.5 h-1.5 rounded-full bg-red-400"></div><div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div></div>
<div className="w-full h-2 bg-gray-100 rounded-full mt-2"></div>
<div className="w-4/5 h-2 bg-gray-100 rounded-full"></div>
</div>
</div>
</div>

<div className="bg-[#f8f9fa] border border-gray-100 rounded-2xl p-6 relative overflow-hidden group hover:bg-[#f1f3f5] transition-colors cursor-pointer min-h-[160px] flex flex-col justify-center text-left">
<div className="relative z-10 w-3/5">
<h3 className="text-base font-medium text-gray-900 mb-2">Translate</h3>
<p className="text-sm text-gray-500 leading-relaxed">Translate the text clearly and effectively.</p>
</div>

<div className="absolute right-0 top-6 w-36 h-32 pointer-events-none flex items-center justify-center">
<div className="absolute right-12 top-4 w-16 h-16 bg-blue-500 rounded-2xl -rotate-12 shadow-lg flex items-center justify-center text-white text-3xl font-semibold">G</div>
<div className="absolute right-2 top-0 w-16 h-16 bg-white border border-gray-200 rounded-2xl rotate-12 shadow-xl flex items-center justify-center text-gray-800 text-2xl font-semibold">Aa</div>
<i className="absolute right-12 bottom-4 w-6 h-6 text-gray-400 z-20" data-lucide="arrow-right-left" strokeWidth="1.5"></i>
</div>
</div>

<div className="bg-[#f8f9fa] border border-gray-100 rounded-2xl p-6 relative overflow-hidden group hover:bg-[#f1f3f5] transition-colors cursor-pointer min-h-[160px] flex items-center text-left">
<div className="relative z-10 w-2/5">
<h3 className="text-base font-medium text-gray-900 mb-2">Audio chat</h3>
<p className="text-sm text-gray-500 leading-relaxed">Upload or record voice memo to generate ideas.</p>
</div>

<div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
<div className="w-1 h-8 bg-blue-200 rounded-full"></div>
<div className="w-1 h-12 bg-blue-300 rounded-full"></div>
<div className="w-1 h-6 bg-blue-200 rounded-full"></div>
<div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-lg mx-2 z-10">
<i className="w-5 h-5 text-white" data-lucide="mic" strokeWidth="1.5"></i>
</div>
<div className="w-1 h-10 bg-blue-300 rounded-full"></div>
<div className="w-1 h-6 bg-blue-200 rounded-full"></div>
<div className="w-1 h-8 bg-blue-200 rounded-full"></div>
</div>
</div>

<div className="bg-[#f8f9fa] border border-gray-100 rounded-2xl p-6 relative overflow-hidden group hover:bg-[#f1f3f5] transition-colors cursor-pointer min-h-[160px] flex items-center text-left">
<div className="relative z-10 w-1/2">
<h3 className="text-base font-medium text-gray-900 mb-2">Add images</h3>
<p className="text-sm text-gray-500 leading-relaxed">You can easily upload your images right here.</p>
</div>

<div className="absolute right-0 top-4 w-32 h-32 pointer-events-none">
<div className="absolute right-12 top-4 w-16 h-20 bg-gradient-to-br from-blue-300 to-purple-400 rounded-xl -rotate-6 shadow-md border-2 border-white"></div>
<div className="absolute right-4 top-16 w-14 h-16 bg-gradient-to-br from-orange-300 to-pink-400 rounded-xl rotate-12 shadow-lg border-2 border-white"></div>
<div className="absolute right-4 top-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shadow-sm">
<i className="w-5 h-5 text-blue-600" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>

<div className="mt-8 bg-[#f8f9fa] border border-gray-200 rounded-full px-6 py-4 flex items-center">
<span className="text-gray-300 mr-2">|</span>
<input className="bg-transparent border-none outline-none flex-1 text-base placeholder-gray-400 text-gray-900" placeholder="Ask me anything..." type="text"/>
<button className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-gray-800 transition-colors ml-4">
<i className="w-4 h-4" data-lucide="arrow-up" strokeWidth="2"></i>
</button>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-200/60">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200/60">
<div className="flex items-start gap-5 md:pr-10 py-6 md:py-0">
<div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
<i className="w-6 h-6 text-orange-500" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-semibold text-gray-900 mb-2">Multi-task</h3>
<p className="text-base text-gray-500 leading-relaxed">The world's leading Multi-Agent AI that automates any tasks from tagging.</p>
</div>
</div>
<div className="flex items-start gap-5 md:px-10 py-6 md:py-0">
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
<i className="w-6 h-6 text-blue-500" data-lucide="target" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-semibold text-gray-900 mb-2">Effective</h3>
<p className="text-base text-gray-500 leading-relaxed">Drives up transactional sales with 95% + automation and increased conversion.</p>
</div>
</div>
<div className="flex items-start gap-5 md:pl-10 py-6 md:py-0">
<div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center flex-shrink-0">
<i className="w-6 h-6 text-cyan-500" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-semibold text-gray-900 mb-2">Powerful</h3>
<p className="text-base text-gray-500 leading-relaxed">Handles the most complex cases with contextual intelligence.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 flex flex-col items-center">
<div className="bg-gray-100/80 text-gray-600 px-4 py-1.5 rounded-full text-sm font-medium mb-6">Technology</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-20 text-center">Lead your AI transformation</h2>
<div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col gap-6">

<div className="flex gap-6 items-start p-6 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer">
<i className="w-6 h-6 text-gray-400 mt-1 flex-shrink-0" data-lucide="git-merge" strokeWidth="1.5"></i>
<div>
<h3 className="text-lg font-medium text-gray-600">Natively integrates with your agent platform</h3>
</div>
</div>

<div className="flex gap-6 items-start p-6 rounded-2xl bg-[#fff9db] border border-yellow-200/50 shadow-sm cursor-pointer">
<i className="w-6 h-6 text-gray-900 mt-1 flex-shrink-0" data-lucide="network" strokeWidth="1.5"></i>
<div>
<h3 className="text-lg font-semibold text-gray-900 mb-3">Seamlessly collaborates with your team and support all channels</h3>
<p className="text-base text-gray-700 leading-relaxed">Functions like a team member, collaborating naturally with your staff.</p>
</div>
</div>

<div className="flex gap-6 items-start p-6 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer">
<i className="w-6 h-6 text-gray-400 mt-1 flex-shrink-0" data-lucide="link" strokeWidth="1.5"></i>
<div>
<h3 className="text-lg font-medium text-gray-600">Flexibly adapts to your workflow and process</h3>
</div>
</div>

<div className="flex gap-6 items-start p-6 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer">
<i className="w-6 h-6 text-gray-400 mt-1 flex-shrink-0" data-lucide="sliders-horizontal" strokeWidth="1.5"></i>
<div>
<h3 className="text-lg font-medium text-gray-600">Automate the full spectrum of tasks</h3>
</div>
</div>
</div>

<div className="bg-[#f3f4f6] rounded-[2.5rem] p-10 relative flex items-center justify-center min-h-[500px]">

<div className="absolute top-12 left-12 w-14 h-14 bg-orange-100 rounded-2xl rotate-12 shadow-lg flex items-center justify-center z-20 border border-white">
<i className="w-7 h-7 text-orange-500" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<div className="absolute bottom-12 right-12 w-16 h-16 bg-green-500 rounded-full shadow-xl flex items-center justify-center z-20 border-4 border-white">
<i className="w-8 h-8 text-white fill-white" data-lucide="message-circle" strokeWidth="2"></i>
</div>

<div className="w-full max-w-sm bg-white/70 backdrop-blur-xl border border-white rounded-[2rem] p-4 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] relative z-10">

<div className="flex items-center gap-4 p-3 bg-white rounded-xl shadow-sm mb-3">
<img alt="" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="flex-1">
<h4 className="text-base font-semibold text-gray-900">Helen Young</h4>
<p className="text-sm text-gray-500">Nice to meet you here!</p>
</div>
<div className="flex flex-col items-end gap-1">
<span className="text-xs text-gray-400">10:30</span>
<div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-[10px] text-white font-medium">3</div>
</div>
</div>

<div className="flex items-center gap-4 p-3 bg-white/50 rounded-xl mb-3">
<img alt="" className="w-10 h-10 rounded-full object-cover opacity-80" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="flex-1">
<h4 className="text-base font-semibold text-gray-700">Bradley White</h4>
<div className="w-24 h-2 bg-gray-200 rounded-full mt-2"></div>
</div>
<div className="w-6 h-4 bg-gray-200 rounded-full"></div>
</div>

<div className="flex items-center gap-4 p-3 bg-white/30 rounded-xl opacity-60">
<img alt="" className="w-10 h-10 rounded-full object-cover blur-[1px]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="flex-1">
<h4 className="text-base font-semibold text-gray-600 blur-[1px]">Emily Black</h4>
<div className="w-20 h-2 bg-gray-200 rounded-full mt-2 blur-[1px]"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1200px] mx-auto mb-32 px-6">
<div className="relative w-full rounded-[3rem] overflow-hidden min-h-[600px] flex flex-col items-center py-24 px-6 bg-gray-900 shadow-2xl">

<div className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
<div className="absolute inset-0 bg-gradient-to-b from-white/80 via-blue-100/40 to-blue-900/80 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent"></div>

<div className="relative z-10 flex flex-col items-center w-full">
<div className="bg-white text-gray-800 px-4 py-1.5 rounded-full text-sm font-medium mb-8 shadow-sm">Governance</div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 mb-20 text-center max-w-2xl leading-[1.1]">
                    Reliable, Safe,<br/> and Validated
                </h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">

<div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 flex flex-col items-center text-center shadow-[0_8px_32px_0_rgba(31,38,135,0.2)]">
<i className="w-10 h-10 text-white mb-6 opacity-90" data-lucide="monitor" strokeWidth="1.5"></i>
<span className="text-5xl md:text-6xl font-semibold text-white tracking-tight mb-2">99%</span>
<span className="text-base text-white/80 font-medium">System Uptime</span>
</div>

<div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 flex flex-col items-center text-center shadow-[0_8px_32px_0_rgba(31,38,135,0.2)]">
<i className="w-10 h-10 text-white mb-6 opacity-90" data-lucide="users" strokeWidth="1.5"></i>
<span className="text-5xl md:text-6xl font-semibold text-white tracking-tight mb-2">200+</span>
<span className="text-base text-white/80 font-medium">Global Businesses</span>
</div>

<div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 flex flex-col items-center text-center shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
<i className="w-10 h-10 text-white mb-6 opacity-90 relative z-10" data-lucide="rocket" strokeWidth="1.5"></i>
<span className="text-5xl md:text-6xl font-semibold text-white tracking-tight mb-2 relative z-10">95%</span>
<span className="text-base text-white/80 font-medium relative z-10">Increased Conversion</span>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
