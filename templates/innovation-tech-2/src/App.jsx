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
      
<section className="relative w-full h-screen min-h-[40rem] flex flex-col items-center justify-center overflow-hidden">

<div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-neutral-900">

<iframe allow="autoplay; fullscreen" allowfullscreen="" allowtransparency="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] opacity-90" frameborder="0" name="wistia_embed" scrolling="no" src="https://fast.wistia.net/embed/iframe/n8mqyj52xy?seo=false&amp;videoFoam=false&amp;autoPlay=true&amp;endVideoBehavior=loop&amp;muted=true&amp;controlsVisibleOnLoad=false&amp;playbar=false&amp;settingsControl=false&amp;volumeControl=false&amp;fullscreenButton=false&amp;playButton=false&amp;transparent=0"></iframe>
</div>

<div className="absolute inset-0 bg-black/60 z-10 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 z-10"></div>

<nav className="absolute top-0 left-0 w-full flex items-center justify-between p-6 md:px-12 z-20">
<div className="text-xl font-semibold tracking-tighter text-white uppercase">
          ZFP
        </div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
<a className="hover:text-white transition-colors duration-200" href="https://cart.easy.tools/checkout/78907920/szkolenie-bhp">
            Rozwiązania
          </a>
<a className="hover:text-white transition-colors duration-200" href="https://cart.easy.tools/checkout/78907920/szkolenie-bhp">
            Klienci
          </a>
<a className="hover:text-white transition-colors duration-200" href="https://cart.easy.tools/checkout/78907920/szkolenie-bhp">
            Wycena
          </a>
</div>
<button className="md:hidden text-white/80 hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</nav>

<div className="relative z-20 flex flex-col items-center justify-center px-6 text-center max-w-4xl mx-auto mt-12 md:mt-16">

<div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-medium text-neutral-300 tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-green-400/90 shadow-[0_0_8px_rgba(74,222,128,0.6)]"></span>
          Innowacja i skalowanie
        </div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white leading-[1.1] mb-6 drop-shadow-sm">
          Zbuduj firmę
          <br className="hidden sm:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">
            przyszłości
          </span>
</h1>

<p className="text-base md:text-lg lg:text-xl text-neutral-400 max-w-2xl mb-10 font-normal leading-relaxed">
          Zoptymalizuj swoje procesy biznesowe. Nowoczesne rozwiązania, które
          pozwolą Ci wyprzedzić konkurencję i zdefiniować nowe standardy
          rynkowe.
        </p>

<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="group relative flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-white text-black rounded-full text-sm font-semibold transition-all duration-300 hover:bg-neutral-200 hover:scale-[1.02] active:scale-100 shadow-[0_0_40px_rgba(255,255,255,0.15)] overflow-hidden" href="https://cart.easy.tools/checkout/78907920/szkolenie-bhp">
            Rozpocznij teraz
            <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-transparent text-white border border-white/20 rounded-full text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/30 active:scale-100 backdrop-blur-sm" href="https://app.zencal.io/u/tomaszguzik/automation-lab">
            Umów konsultację
          </a>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 text-neutral-500 opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
<span className="text-xs font-medium tracking-widest uppercase">
          Odkryj więcej
        </span>
<div className="animate-bounce">
<iconify-icon height="22" icon="solar:round-alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
</div>
</section>
<section className="w-full bg-black text-white border-t border-white/10">
<div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="flex flex-col gap-6">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white">
            Zdefiniuj swoją przewagę na nowo
          </h2>
<h3 className="text-xl md:text-2xl font-medium text-neutral-300">
            Zoptymalizuj działania w kilku prostych krokach.
          </h3>
<p className="text-base md:text-lg text-neutral-400 leading-relaxed font-normal">
            Odkryj, jak nasze innowacyjne podejście do optymalizacji procesów
            może zrewolucjonizować Twoją firmę. Zobacz krótki materiał wideo,
            aby dowiedzieć się więcej o nowoczesnych narzędziach, które
            usprawniają codzienną pracę i napędzają skalowanie biznesu. Jesteśmy
            tu, by ułatwić Ci osiąganie ponadprzeciętnych wyników.
          </p>
<ul className="flex flex-col gap-4 mt-2">
<li className="flex items-center gap-3 text-neutral-300 font-medium">
<iconify-icon className="text-green-400" height="24" icon="solar:check-circle-bold" width="24"></iconify-icon>
<span>Automatyzacja kluczowych procesów</span>
</li>
<li className="flex items-center gap-3 text-neutral-300 font-medium">
<iconify-icon className="text-green-400" height="24" icon="solar:check-circle-bold" width="24"></iconify-icon>
<span>Zwiększenie realnej wydajności zespołu</span>
</li>
<li className="flex items-center gap-3 text-neutral-300 font-medium">
<iconify-icon className="text-green-400" height="24" icon="solar:check-circle-bold" width="24"></iconify-icon>
<span>Bezpieczna i skalowalna architektura IT</span>
</li>
</ul>
</div>
<div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-neutral-900 shadow-[0_0_40px_rgba(255,255,255,0.05)] border border-white/10">
<iframe allow="autoplay; fullscreen" allowtransparency="true" className="absolute inset-0 w-full h-full" frameborder="0" name="wistia_embed" scrolling="no" src="https://fast.wistia.net/embed/iframe/n8mqyj52xy?seo=false&amp;videoFoam=false" title="Prezentacja rozwiązania"></iframe>
</div>
</div>
</section>

    </>
  );
}
