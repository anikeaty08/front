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



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="FixNvEwvWwbu3QX9qC3F"></div>

</div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-[#050a15]"></div>
<div className="absolute top-[-10%] left-[-10%] w-[60vw] aspect-square bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#283656]/30 via-[#283656]/10 to-transparent rounded-full blur-3xl" style={{animation: 'pulse-glow 8s infinite alternate'}}></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[70vw] aspect-square bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#283656]/20 via-[#050a15] to-transparent rounded-full blur-3xl" style={{animation: 'float-slow 12s ease-in-out infinite'}}></div>
</div>
<div className="noise-bg"></div>

<main className="flex-grow flex flex-col sm:pl-6 sm:pr-6 sm:pt-10 sm:pb-5 w-full max-w-[1400px] z-10 mr-auto ml-auto pt-16 pr-6 pb-24 pl-6 relative items-center">

<div className="text-center max-w-4xl mr-auto mb-6 ml-auto">
<span className="uppercase block text-xs font-light text-[#C5A059] tracking-[0.25em] mb-4">
          DEINe Bestellung WAR ERFOLGREICH!
        </span>
<h1 className="leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl text-3xl font-medium text-white tracking-tight font-serif mb-6 mix-blend-plus-lighter max-w-5xl mx-auto">
          Glückwunsch! Der Weg in deine
          <br className="hidden sm:block"/>
<span className="bg-clip-text font-light italic text-transparent font-serif" style={{backgroundImage: 'linear-gradient(90deg, rgb(197, 160, 89) 0%, rgb(223, 183, 108) 25%, rgb(255, 254, 235) 50%, rgb(223, 183, 108) 75%, rgb(197, 160, 89) 100%)', backgroundSize: '200%', animation: '4s linear 0s infinite normal none running cms-shimmer'}}>
            neue Realität
          </span>
          beginnt hier.
        </h1>
<div className="mb-6">
<p className="sm:text-lg md:text-xl leading-relaxed text-base font-light text-slate-50/80 max-w-3xl mr-auto ml-auto">
            Dein Zugang zum Subconscious Recode wurde dir bereits per E-Mail
            zugesendet! ✉️
          </p>
</div>
</div>

<div className="w-full max-w-4xl mx-auto aspect-video bg-[#03050a] rounded-2xl relative overflow-hidden shadow-2xl mb-20 group border-gradient-card">
<video className="w-full h-full object-cover" id="prepVideo" playsinline="" poster="https://i.imgur.com/placeholder.png" preload="metadata">
<source src="https://assets.cdn.filesafe.space/vQN5GIVbvhCxn3wdbN0Q/media/6a2189c483cb7337aa0fb0c4.mp4#t=0.1" type="video/mp4"/>
</video>
<div className="flex flex-col cursor-pointer hover:bg-black/40 transition-colors duration-300 backdrop-blur-[2px] bg-black/20 z-20 absolute top-0 right-0 bottom-0 left-0 items-center justify-center" id="videoOverlay" onclick="const v = document.getElementById('prepVideo'); v.play(); v.controls = true; this.style.display='none';">
<div className="attention-btn w-16 h-16 sm:w-20 sm:h-20 bg-[linear-gradient(90deg,#C5A059_0%,#DFB76C_50%,#C5A059_100%)] text-[#050a15] rounded-full flex items-center justify-center pl-1">
<iconify-icon className="text-3xl sm:text-4xl" icon="solar:play-linear"></iconify-icon>
</div>
<span className="mt-8 text-xs sm:text-sm text-white font-medium uppercase tracking-[0.2em] drop-shadow-md">
            VIDEO JETZT STARTEN
          </span>
</div>
</div>
<div className="w-full max-w-4xl mx-auto -mt-12 mb-20 px-4 sm:px-0">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="relative rounded-2xl border-gradient-card bg-[#03050a] p-8 sm:p-10 shadow-2xl group hover:bg-[#050a15] transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.08),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-b from-[#C5A059]/15 to-transparent border border-[#C5A059]/20 mb-6 group-hover:border-[#C5A059]/50 transition-all duration-500">
<iconify-icon className="text-2xl text-[#C5A059] group-hover:scale-110 transition-transform duration-500" icon="solar:letter-linear"></iconify-icon>
</div>
<span className="uppercase text-[10px] font-medium text-[#C5A059] tracking-[0.25em] block mb-3">
                Der nächste Schritt
              </span>
<h3 className="text-xl sm:text-2xl font-medium text-slate-100 font-serif tracking-tight mb-4">
                Check deine E-Mails!
              </h3>
<p className="text-base font-light text-slate-300 leading-relaxed mb-3">
                Du hast soeben eine E-Mail mit deinem persönlichen Zugang
                erhalten.
              </p>
<p className="text-sm font-light text-slate-400 leading-relaxed">
                Überprüfe bitte auch deinen Spam-Ordner, falls du keine
                Nachricht sehen solltest.
              </p>
</div>
</div>

<div className="relative rounded-2xl border-gradient-card bg-[#03050a] p-8 sm:p-10 shadow-2xl group hover:bg-[#050a15] transition-all duration-500 flex flex-col overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.08),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-b from-[#C5A059]/15 to-transparent border border-[#C5A059]/20 mb-6 group-hover:border-[#C5A059]/50 transition-all duration-500">
<iconify-icon className="text-2xl text-[#C5A059] group-hover:scale-110 transition-transform duration-500" icon="solar:headphones-round-linear"></iconify-icon>
</div>
<span className="uppercase text-[10px] font-medium text-[#C5A059] tracking-[0.25em] block mb-3">
                Support
              </span>
<h3 className="text-xl sm:text-2xl font-medium text-slate-100 font-serif tracking-tight mb-4">
                Wir sind für dich da
              </h3>
<p className="text-base font-light text-slate-300 leading-relaxed mb-5">
                Bei Fragen erreichst du uns jederzeit per E-Mail – wir antworten
                schnellstmöglich.
              </p>
<a className="inline-flex items-center gap-2 text-base font-light text-[#C5A059] hover:text-[#DFB76C] transition-colors duration-300 break-all mt-auto" href="mailto:marcel@realityaccelerator.de">
                marcel@realityaccelerator.de
              </a>
</div>
</div>
</div>
</div>
<div className="w-full max-w-4xl mx-auto -mt-12 mb-20 px-4 sm:px-0 text-center">
<p className="text-sm font-light text-slate-400/70 max-w-3xl mx-auto">
<span className="uppercase tracking-[0.2em] text-[#C5A059] font-medium">
            Hinweis:
          </span>
          Die Abbuchung erfolgt durch CopeCart.
        </p>
</div>


</main>

<footer className="w-full py-8 border-t border-slate-800/50 mt-auto relative z-20">
<div className="flex flex-col md:flex-row items-center justify-between max-w-[1400px] mx-auto px-6 text-base text-slate-500 font-light">
<span className="uppercase md:mb-0 text-xs tracking-widest mb-4">
          © 2026 RealityAccelerator
        </span>
<div className="flex gap-8">
<a className="hover:text-[#C5A059] transition-colors duration-300 text-xs" href="https://itrk.legal/1jdU.0.10dy.html">
            Impressum
          </a>
<a className="hover:text-[#C5A059] transition-colors duration-300 text-xs" href="https://itrk.legal/1jdU.bg.10dy.html">
            Datenschutz
          </a>
</div>
</div>
</footer>

    </>
  );
}
