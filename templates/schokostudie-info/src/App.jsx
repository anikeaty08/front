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
      

<nav className="w-full max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
<div className="flex items-center text-stone-900 font-medium tracking-tighter text-xl uppercase">
        Schokostudie
      </div>
<div className="hidden md:flex gap-6 text-base font-normal text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#impressum">Impressum</a>
<a className="hover:text-stone-900 transition-colors" href="#datenschutz">Datenschutz</a>
</div>
</nav>

<main className="flex-grow flex flex-col w-full max-w-4xl mx-auto pt-12 px-6 pb-24 gap-y-12 items-center">


<section className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-stone-200/80 text-left w-full" id="impressum">
<div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 border-b border-stone-100 pb-6">
<div className="w-12 h-12 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl text-stone-700" icon="solar:document-text-linear"></iconify-icon>
</div>
<h1 className="text-3xl font-normal tracking-tight text-stone-900">
            Impressum
          </h1>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-600 leading-relaxed text-base">
<div className="bg-stone-50/50 p-6 rounded-2xl border border-stone-100 transition-colors hover:bg-stone-50 shadow-sm">
<h2 className="flex items-center gap-2 text-lg font-normal tracking-tight text-stone-900 mb-4">
<iconify-icon className="text-xl text-stone-400" icon="solar:buildings-2-linear"></iconify-icon>
              Angaben gemäß § 5 TMG
            </h2>
<p className="text-stone-600 space-y-1">
<span className="block text-stone-900 font-normal">Projektgruppe im 4. Semester</span>
<span className="block">Technische Hochschule Deggendorf</span>
<span className="block">Fakultät Angewandte Wirtschaftspsychologie</span>
<span className="block">Dieter-Görlitz-Platz 1</span>
<span className="block">94469 Deggendorf</span>
</p>
</div>
<div className="bg-stone-50/50 p-6 rounded-2xl border border-stone-100 transition-colors hover:bg-stone-50 shadow-sm">
<h2 className="flex items-center gap-2 text-lg font-normal tracking-tight text-stone-900 mb-4">
<iconify-icon className="text-xl text-stone-400" icon="solar:letter-linear"></iconify-icon>
              Kontakt
            </h2>
<ul className="text-stone-600 space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-stone-400 mt-0.5 shrink-0" icon="solar:phone-linear"></iconify-icon>
<a className="hover:text-stone-900 transition-colors" href="tel:+4915118479094">+49 (0) 151 18479094</a>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-stone-400 mt-0.5 shrink-0" icon="solar:mention-circle-linear"></iconify-icon>
<a className="hover:text-stone-900 transition-colors break-all" href="mailto:magnus.buchner@stud.th-deg.de">magnus.buchner@stud.th-deg.de</a>
</li>
</ul>
</div>
<div className="bg-stone-50/50 p-6 rounded-2xl border border-stone-100 transition-colors hover:bg-stone-50 shadow-sm md:col-span-2">
<h2 className="flex items-center gap-2 text-lg font-normal tracking-tight text-stone-900 mb-4">
<iconify-icon className="text-xl text-stone-400" icon="solar:user-check-linear"></iconify-icon>
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
<p className="text-stone-600 space-y-1">
<span className="block text-stone-900 font-normal">Magnus Buchner</span>
<span className="block">Garhamer Straße 24</span>
<span className="block">94544 Hofkirchen</span>
</p>
</div>
</div>
</section>

<section className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-stone-200/80 text-left w-full" id="datenschutz">
<div className="flex items-center gap-4 mb-8 border-b border-stone-100 pb-6">
<div className="w-12 h-12 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl text-stone-700" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h1 className="text-3xl font-medium tracking-tight text-stone-900">
            Datenschutzerklärung
          </h1>
</div>
<p className="text-stone-600 leading-relaxed mb-10 text-base">
          Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Website
          verarbeitet personenbezogene Daten ausschließlich im Rahmen der
          gesetzlichen Datenschutzvorschriften (DSGVO).
        </p>
<div className="space-y-8 text-base">
<div>
<h2 className="text-xl font-normal tracking-tight text-stone-900 mb-2">1. Verantwortliche Stelle</h2>
<p className="text-stone-600 leading-relaxed">Institut für subjektive Geschmacksintensität <br/> Garhamer Straße 24 <br/> 94544 Hofkirchen <br/> E-Mail: magnus.buchner@stud.th-deg.de</p>
</div>
<div>
<h2 className="text-xl font-normal tracking-tight text-stone-900 mb-2">2. Hosting</h2>
<p className="text-stone-600 leading-relaxed">
              Beim Besuch dieser Website werden technisch notwendige Daten wie
              IP-Adresse, Browserinformationen und Zugriffszeitpunkt durch den
              Hostinganbieter verarbeitet.
            </p>
</div>
<div>
<h2 className="text-xl font-normal tracking-tight text-stone-900 mb-2">3. Erhebung und Verarbeitung personenbezogener Daten</h2>
<p className="text-stone-600 leading-relaxed">
              Personenbezogene Daten werden nur verarbeitet, wenn Sie diese
              freiwillig angeben oder technisch erforderlich sind.
            </p>
</div>
<div>
<h2 className="text-xl font-normal tracking-tight text-stone-900 mb-2">4. Cookies &amp; Tracking</h2>
<p className="text-stone-600 leading-relaxed">
              Diese Website verwendet ausschließlich technisch notwendige
              Cookies.
            </p>
</div>
<div>
<h2 className="text-xl font-normal tracking-tight text-stone-900 mb-2">5. Ihre Rechte</h2>
<p className="text-stone-600 leading-relaxed mb-3">
              Ihnen stehen gemäß DSGVO folgende Rechte zu:
            </p>
<ul className="list-disc list-inside text-stone-600 leading-relaxed space-y-1 ml-1">
<li>Auskunft</li>
<li>Berichtigung</li>
<li>Löschung</li>
<li>Einschränkung der Verarbeitung</li>
<li>Widerspruch</li>
<li>Datenübertragbarkeit</li>
</ul>
</div>
<div>
<h2 className="text-xl font-normal tracking-tight text-stone-900 mb-2">6. Kontakt</h2>
<p className="text-stone-600 leading-relaxed">Bei Fragen zum Datenschutz kontaktieren Sie uns unter: magnus.buchner@stud.th-deg.de</p>
</div>
</div>
</section>
</main>

<footer className="w-full py-8 mt-auto">
<div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-400 text-sm">
<div>© 2026 Institut für subjektive Geschmacksintensität.</div>
<div className="flex gap-6">
<a className="hover:text-stone-700 transition-colors" href="#impressum">Impressum</a>
<a className="hover:text-stone-700 transition-colors" href="#datenschutz">Datenschutz</a>
</div>
</div>
</footer>

    </>
  );
}
