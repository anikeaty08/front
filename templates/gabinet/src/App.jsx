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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
<div className="particle"></div>
<div className="particle"></div>
<div className="particle"></div>
<div className="particle"></div>

</div>


<header className="relative z-20 flex justify-center pt-8 sm:pt-10 w-full">
<div className="flex items-center justify-center">
<div className="flex items-center justify-center drop-shadow-[0_0_15px_rgba(234,179,8,0.4)]">
<span className="font-serif text-4xl sm:text-5xl text-yellow-500">G</span>
<span className="w-[2px] sm:w-[3px] h-10 sm:h-12 bg-yellow-500 rotate-[25deg] mx-3 sm:mx-4 opacity-90 rounded-sm"></span>
<span className="font-serif text-4xl sm:text-5xl text-yellow-500">S</span>
</div>
</div>
</header>
<main className="relative z-10 flex-grow flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 md:pt-24 pb-28 sm:pb-32 w-full max-w-7xl mx-auto">

<div className="flex flex-col items-center text-center mb-10 sm:mb-16 md:mb-24 w-full px-2 sm:px-0">


<h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4 sm:mb-6 text-shimmer leading-tight max-w-4xl">
          Termin zarezerwowany.
          <br className="hidden sm:block"/>
          Dziękujemy za zaufanie.
        </h1>
<p className="text-xs sm:text-sm md:text-base text-neutral-400 max-w-2xl font-light tracking-wide px-4 sm:px-0">
          Właśnie rozpoczęliśmy przygotowania do Twojej metamorfozy.
        </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 w-full max-w-6xl mb-12 sm:mb-16 md:mb-24">

<div className="group relative rounded-2xl glass-card p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04]" style={{animation: 'autoHighlightCard 9s infinite 0s'}}>
<div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{animation: 'autoHighlightGradient 9s infinite 0s'}}></div>
<div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110 transform" style={{animation: 'autoHighlightIcon 9s infinite 0s'}}>
<iconify-icon className="text-yellow-500 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]" height="48" icon="solar:scanner-linear" width="48"></iconify-icon>
</div>
<div className="relative z-10 flex flex-col h-full justify-between gap-6">
<div>
<div className="flex items-center gap-3 mb-4">
<div className="flex items-center justify-center w-8 h-8 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-500">
<span className="text-xs font-medium">01</span>
</div>
<h3 className="text-lg font-medium text-neutral-100 tracking-tight">
                  Czysta skóra
                </h3>
</div>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
                Prosimy o przybycie bez makijażu. Pozwoli to na precyzyjną
                analizę anatomii twarzy przy użyciu technologii skanowania.
              </p>
</div>
</div>
</div>

<div className="group relative rounded-2xl glass-card p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04]" style={{animation: 'autoHighlightCard 9s infinite 3s'}}>
<div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{animation: 'autoHighlightGradient 9s infinite 3s'}}></div>
<div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110 transform" style={{animation: 'autoHighlightIcon 9s infinite 3s'}}>
<iconify-icon className="text-yellow-500 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]" height="48" icon="solar:document-medicine-linear" width="48"></iconify-icon>
</div>
<div className="relative z-10 flex flex-col h-full justify-between gap-6">
<div>
<div className="flex items-center gap-3 mb-4">
<div className="flex items-center justify-center w-8 h-8 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-500">
<span className="text-xs font-medium">02</span>
</div>
<h3 className="text-lg font-medium text-neutral-100 tracking-tight">
                  Dokumentacja
                </h3>
</div>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
                Prosimy o przygotowanie listy przyjmowanych leków oraz historii
                przebytych zabiegów medycyny estetycznej.
              </p>
</div>
</div>
</div>

<div className="group relative rounded-2xl glass-card p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] sm:col-span-2 lg:col-span-1" style={{animation: 'autoHighlightCard 9s infinite 6s'}}>
<div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{animation: 'autoHighlightGradient 9s infinite 6s'}}></div>
<div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110 transform" style={{animation: 'autoHighlightIcon 9s infinite 6s'}}>
<iconify-icon className="text-yellow-500 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]" height="48" icon="solar:history-linear" width="48"></iconify-icon>
</div>
<div className="relative z-10 flex flex-col h-full justify-between gap-6">
<div>
<div className="flex items-center gap-3 mb-4">
<div className="flex items-center justify-center w-8 h-8 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-500">
<span className="text-xs font-medium">03</span>
</div>
<h3 className="text-lg font-medium text-neutral-100 tracking-tight">
                  Punktualność
                </h3>
</div>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
                Zarezerwowaliśmy dla Ciebie ekskluzywny blok czasowy. Prosimy o
                przybycie 5 minut przed planowaną wizytą.
              </p>
</div>
</div>
</div>
</div>

<div className="flex flex-col items-center gap-8 sm:gap-10 mt-8 sm:mt-auto relative z-10 w-full px-4">
<div className="relative inline-flex group cursor-pointer max-w-full">

<div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 via-yellow-400 to-amber-600 rounded-full blur opacity-40 animate-pulse-gold group-hover:opacity-70 transition duration-500"></div>

<a className="relative flex items-center justify-center gap-2 sm:gap-3 px-6 py-3.5 sm:px-10 sm:py-5 bg-[#0a0a0a] border border-white/10 rounded-full text-white font-medium text-xs sm:text-sm transition-all duration-300 hover:bg-[#111] overflow-hidden w-full whitespace-nowrap sm:whitespace-normal" href="https://www.google.com/maps/dir//Prywatny+Gabinet+Lekarski+lek.+med.+Gra%C5%BCyna+Szela,+Hetma%C5%84ska+24,+35-045+Rzesz%C3%B3w/@50.0274581,21.9929047,16.39z/data=!4m17!1m7!3m6!1s0x473cfbab61f4119f:0xd641e8ff2f4cea97!2sPrywatny+Gabinet+Lekarski+lek.+med.+Gra%C5%BCyna+Szela!8m2!3d50.027738!4d21.9955639!16s%2Fg%2F11h7zfljn3!4m8!1m0!1m5!1m1!1s0x473cfbab61f4119f:0xd641e8ff2f4cea97!2m2!1d21.9955639!2d50.027738!3e0?entry=ttu&amp;g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D" rel="noopener noreferrer" target="_blank">

<div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/5 to-yellow-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
<span className="relative z-10 tracking-wide">
              ul. Hetmańska 24, Rzeszów
            </span>
<iconify-icon className="text-xl text-yellow-500 relative z-10 group-hover:scale-110 transition-transform" icon="solar:map-point-wave-linear"></iconify-icon>
</a>
</div>
</div>
</main>

<div className="fixed bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none z-20"></div>

    </>
  );
}
