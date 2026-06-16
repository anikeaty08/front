import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
  }, []);

  return (
    <>
      

<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] right-[-5%] w-[80%] h-[80%] rounded-full bg-gradient-to-bl from-blue-50/80 to-transparent blur-3xl"></div>
<div className="absolute top-[20%] left-[50%] w-[1px] h-[150%] bg-gradient-to-b from-transparent via-blue-200/50 to-transparent transform rotate-45 -translate-x-1/2 -translate-y-1/2 hidden lg:block"></div>
</div>

<main className="relative z-10 flex-grow flex items-center pt-20 pb-16 lg:pt-32 lg:pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
<div className="max-w-3xl">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200/60 shadow-sm text-blue-700 text-sm font-medium mb-8">
<i className="w-4 h-4 text-blue-500 stroke-[1.5]" data-lucide="sparkles"></i>
                    SEO · PPC · AI-видимість
                </div>

<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                    SEO просування <br className="hidden sm:block"/>сайту під ключ
                </h1>

<p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                    Зростання продажів через <span className="text-slate-900 font-medium">AI-видимість</span>, SEO та рекламу — щоб вас знаходили та рекомендували ChatGPT, Gemini, Google AI та інші.
                </p>

<div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-200/60 mb-6 max-w-3xl">
<form className="flex flex-col sm:flex-row gap-2">

<div className="relative flex-1">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<i className="w-5 h-5 text-slate-400 stroke-[1.5]" data-lucide="globe"></i>
</div>
<input className="block w-full pl-11 pr-4 py-3.5 text-base bg-slate-50/50 border border-transparent rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" placeholder="Адреса сайту" type="text"/>
</div>

<div className="relative flex-1">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<i className="w-5 h-5 text-slate-400 stroke-[1.5]" data-lucide="phone"></i>
</div>
<input className="block w-full pl-11 pr-4 py-3.5 text-base bg-slate-50/50 border border-transparent rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" placeholder="Ваш телефон" type="tel"/>
</div>

<button className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-600 text-white text-base font-medium rounded-xl hover:bg-blue-700 focus:ring-4 focus:ring-blue-600/20 transition-all whitespace-nowrap sm:w-auto w-full group" type="submit">
                            Отримати аудит
                            <i className="w-4.5 h-4.5 stroke-[1.5] group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</form>
</div>

<div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-base text-slate-500">
<div className="flex items-center gap-2">
<div className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-600">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="check"></i>
</div>
<span>Персональний аудит від спеціаліста</span>
</div>
<span className="hidden sm:block text-slate-300">•</span>
<div className="flex items-center gap-2">
<div className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-600">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="check"></i>
</div>
<span>Детальний розбір стратегії</span>
</div>
</div>
</div>
</div>
</main>

<div className="relative z-20 bg-[#0a0f1c] border-t border-slate-800 py-12 lg:py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 divide-y divide-slate-800/50 sm:divide-y-0 lg:divide-x lg:divide-slate-800/80">

<div className="flex flex-col items-center sm:items-start lg:pl-8 first:lg:pl-0 pt-6 sm:pt-0 first:pt-0">
<div className="text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-2">20+ років</div>
<div className="text-base text-slate-400">на ринку</div>
</div>

<div className="flex flex-col items-center sm:items-start lg:pl-8 pt-6 sm:pt-0">
<div className="text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-2">500+</div>
<div className="text-base text-slate-400">проєктів</div>
</div>

<div className="flex flex-col items-center sm:items-start lg:pl-8 pt-6 sm:pt-0">
<div className="text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-2">×2,4</div>
<div className="text-base text-slate-400">середнє зростання трафіку</div>
</div>

<div className="flex flex-col items-center sm:items-start lg:pl-8 pt-6 sm:pt-0">
<div className="text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-2">9 із 10</div>
<div className="text-base text-slate-400">клієнтів продовжують</div>
</div>
</div>
</div>
</div>


    </>
  );
}
