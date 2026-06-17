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
      

<nav className="w-full max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
<div className="flex items-center gap-2 text-stone-900 font-semibold tracking-tight text-xl">
<i className="w-6 h-6 text-[#D97A8D]" data-lucide="utensils" strokeWidth="1.5"></i>
<span className="cursor-pointer" onclick="window.location.href='/home'" role="button">SchokoStudie</span>
</div>
<div className="hidden md:flex gap-6 text-lg font-medium text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#details">
          Details
        </a>
<a className="hover:text-stone-900 transition-colors" href="#belohnung">
          Belohnung
        </a>
</div>
</nav>

<main className="flex-grow flex flex-col items-center justify-center px-6 pt-12 pb-24 max-w-5xl mx-auto text-center">

<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-800 font-semibold text-sm mb-8 tracking-wide uppercase border border-red-200">
<i className="w-5 h-5" data-lucide="target" strokeWidth="1.5"></i>
        Wanted: Dead or Alive
      </div>

<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-stone-900 mb-8 uppercase">
        Die wahren
        <br className="hidden md:block"/>
<span className="text-[#8B5A2B]">Schoko-kenner</span>
        gesucht.
      </h1>

<p className="text-xl md:text-2xl text-stone-600 max-w-3xl mb-12 leading-relaxed">
        Pudding mit Gabel?
        <span className="font-medium text-stone-900">Bei uns nicht zwingend!</span>
        Du bist überzeugt, dass du der beste Schokokenner bist? Wir brauchen
        deine Expertise für unsere neue Studie zur subjektiven
        Geschmacksintensität.
      </p>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-16 text-left" id="details">
<div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200 flex flex-col items-start">
<div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-stone-700" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-stone-900 mb-3">
            5 Minuten
          </h3>
<p className="text-lg text-stone-600">
            So kurz dauert die Teilnahme. Perfekt für eine kleine Pause
            zwischendurch.
          </p>
</div>
<div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200 flex flex-col items-start">
<div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-stone-700" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-stone-900 mb-3">Vor der Mensa</h3>
<p className="text-lg text-stone-600">Kommt vor das Mensa Gebäude oder bei schlechtem Wetter vor das B Gebäude. Keine Vorbereitung notwendig.</p>
</div>
<div className="bg-[#FADDE1] p-8 rounded-3xl shadow-sm border border-[#F2C4CB] flex flex-col items-start" id="belohnung">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
<i className="w-6 h-6 text-[#D97A8D]" data-lucide="gift" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-stone-900 mb-3">
            Reward $100,000*
          </h3>
<p className="text-lg text-stone-700">
            *Naja, fast. Es gibt
            <span className="font-semibold text-stone-900">gratis Pudding</span>
            &amp; ewige Dankbarkeit!
          </p>
</div>
</div>

<div className="md:p-10 shadow-stone-200/50 text-left bg-white w-full max-w-2xl border-stone-100 border rounded-[2rem] mr-auto ml-auto pt-8 pr-8 pb-8 pl-8 shadow-xl">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 text-stone-700 font-normal text-base mb-6 tracking-wide uppercase border border-stone-200">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect>
<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
<path d="M12 11h4"></path>
<path d="M12 16h4"></path>
<path d="M8 11h.01"></path>
<path d="M8 16h.01"></path>
</svg>
          Digitaler Fragebogen
        </div>
<h2 className="text-3xl font-normal tracking-tight text-stone-900 mb-4">
          Sensorische Produktbewertung
        </h2>
<form className="flex flex-col gap-10 gap-x-10 gap-y-10">

<div className="flex flex-col gap-5">
<div className="border-b border-stone-100 pb-3">
<h3 className="text-xl font-normal tracking-tight text-stone-900">
                Teil 1: Einleitung &amp; Einverständnis
              </h3>
<p className="text-base font-light text-stone-600 mt-2 leading-relaxed">
                Vielen Dank für deine Teilnahme an dieser Untersuchung. Die
                Befragung dauert ca. 5 Minuten. Deine Daten werden vollkommen
                anonym erhoben und ausschließlich zu wissenschaftlichen Zwecken
                verwendet.
              </p>
</div>
<div className="flex flex-col gap-4 mt-2">
<label className="flex items-start gap-4 cursor-pointer group">
<div className="relative flex items-center justify-center mt-0.5 shrink-0">
<input className="peer sr-only" required="" type="checkbox"/>
<div className="w-5 h-5 rounded border border-stone-300 peer-checked:bg-stone-900 peer-checked:border-stone-900 transition-all bg-white shadow-sm group-hover:border-stone-400"></div>
<svg className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-base font-light text-stone-700 leading-relaxed">
                  Ich bestätige, dass ich über 18 Jahre alt bin.
                </span>
</label>
<label className="flex items-start gap-4 cursor-pointer group">
<div className="relative flex items-center justify-center mt-0.5 shrink-0">
<input className="peer sr-only" required="" type="checkbox"/>
<div className="w-5 h-5 rounded border border-stone-300 peer-checked:bg-stone-900 peer-checked:border-stone-900 transition-all bg-white shadow-sm group-hover:border-stone-400"></div>
<svg className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-base font-light text-stone-700 leading-relaxed">
                  Ich bestätige, dass ich keine Allergien gegen Milchprodukte
                  oder Schokolade habe.
                </span>
</label>
<label className="flex items-start gap-4 cursor-pointer group">
<div className="relative flex items-center justify-center mt-0.5 shrink-0">
<input className="peer sr-only" required="" type="checkbox"/>
<div className="w-5 h-5 rounded border border-stone-300 peer-checked:bg-stone-900 peer-checked:border-stone-900 transition-all bg-white shadow-sm group-hover:border-stone-400"></div>
<svg className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-base font-light text-stone-700 leading-relaxed">
                  Ich nehme freiwillig an dieser Studie teil.
                </span>
</label>
</div>
</div>


<div className="bg-stone-50 p-6 md:p-8 rounded-2xl border border-stone-200 flex flex-col gap-3 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1.5 h-full bg-stone-300"></div>
<div className="flex items-center gap-3 text-stone-900 mb-1">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 22 3 21h3l9-9"></path>
<path d="M3 21v-3l9-9"></path>
<path d="M15 6 18.4 2.6a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"></path>
</svg>
<h3 className="text-xl font-normal tracking-tight">Teil 2: Die Verkostung (Instruktion)</h3>
</div>
<p className="text-base font-light text-stone-700 leading-relaxed">
              Bitte probiere nun einen Löffel des vor dir stehenden Puddings.
              Lass dir Zeit, um den Geschmack und die Konsistenz wahrzunehmen.
            </p>
</div>

<div className="flex flex-col gap-8 gap-x-8 gap-y-8">
<div className="flex flex-col gap-2 border-b border-stone-100 pb-3">
<h3 className="text-xl font-normal text-stone-900 tracking-tight">Teil 3: Produktbewertung</h3>
<p className="text-base font-light text-stone-600">
                Bitte bewerte die folgenden Aussagen auf einer Skala von 1
                (trifft gar nicht zu) bis 7 (trifft voll und ganz zu).
              </p>
</div>

<div className="flex flex-col gap-8 mt-4 gap-x-8 gap-y-8">
<h4 className="text-lg font-normal text-stone-800 bg-stone-50 py-2 px-4 rounded-lg inline-block w-fit">
                A. Geschmack / Sensorik
              </h4>

<div className="flex flex-col gap-4">
<label className="text-base font-light text-stone-900">
                  1. Der Pudding schmeckt gut.
                </label>
<div className="flex gap-2 md:gap-3">
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_1" type="radio" value="1"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                      1
                    </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_1" type="radio" value="2"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                      2
                    </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_1" type="radio" value="3"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                      3
                    </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_1" type="radio" value="4"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                      4
                    </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_1" type="radio" value="5"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                      5
                    </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_1" type="radio" value="6"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                      6
                    </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_1" type="radio" value="7"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                      7
                    </div>
</label>
</div>
</div>

<div className="flex flex-col gap-4">
<label className="text-base font-light text-stone-900">
                  2. Der Geschmack des Puddings ist angenehm.
                </label>
<div className="flex gap-2 md:gap-3">
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_2" type="radio" value="1"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                      1
                    </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_2" type="radio" value="2"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                      2
                    </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_2" type="radio" value="3"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                      3
                    </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_2" type="radio" value="4"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                      4
                    </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_2" type="radio" value="5"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                      5
                    </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_2" type="radio" value="6"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                      6
                    </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_2" type="radio" value="7"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                      7
                    </div>
</label>
</div>
</div>

<div className="flex flex-col gap-4">
<label className="text-base font-light text-stone-900">
                  3. Die Süße des Puddings ist ausgewogen.
                </label>
<div className="flex gap-2 md:gap-3">
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_3" type="radio" value="1"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                      1
                    </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_3" type="radio" value="2"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                      2
                    </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_3" type="radio" value="3"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                      3
                    </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_3" type="radio" value="4"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                      4
                    </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_3" type="radio" value="5"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                      5
                    </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_3" type="radio" value="6"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                      6
                    </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_3" type="radio" value="7"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                      7
                    </div>
</label>
</div>
</div>

<div className="flex flex-col gap-4">
<label className="text-base font-light text-stone-900">
                  4. Der Schokoladengeschmack ist intensiv.
                </label>
<div className="flex gap-2 md:gap-3">
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_4" type="radio" value="1"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                      1
                    </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_4" type="radio" value="2"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                      2
                    </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_4" type="radio" value="3"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                      3
                    </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_4" type="radio" value="4"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                      4
                    </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_4" type="radio" value="5"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                      5
                    </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_4" type="radio" value="6"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                      6
                    </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_4" type="radio" value="7"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                      7
                    </div>
</label>
</div>
</div>

<div className="flex flex-col gap-4">
<label className="text-base font-light text-stone-900">
                  5. Die Konsistenz des Puddings ist angenehm.
                </label>
<div className="flex gap-2 md:gap-3">
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_5" type="radio" value="1"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                      1
                    </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_5" type="radio" value="2"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                      2
                    </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_5" type="radio" value="3"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                      3
                    </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_5" type="radio" value="4"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                      4
                    </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_5" type="radio" value="5"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                      5
                    </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_5" type="radio" value="6"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                      6
                    </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_5" type="radio" value="7"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                      7
                    </div>
</label>
</div>
<div className="flex flex-col gap-4 mt-6">
<label className="text-base font-light text-stone-900">
                    6. Der Pudding ist cremig.
                  </label>
<div className="flex gap-2 md:gap-3">
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_6" type="radio" value="1"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                        1
                      </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_6" type="radio" value="2"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                        2
                      </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_6" type="radio" value="3"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                        3
                      </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_6" type="radio" value="4"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                        4
                      </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_6" type="radio" value="5"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                        5
                      </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_6" type="radio" value="6"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                        6
                      </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="sens_6" type="radio" value="7"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                        7
                      </div>
</label>
</div>
</div>
</div>
</div>


<div className="flex flex-col gap-8 mt-4 gap-x-8 gap-y-8">
<h4 className="text-lg font-light text-stone-800 bg-stone-50 py-2 px-4 rounded-lg inline-block w-fit">B. Wahrgenommene Qualität</h4>

<div className="flex flex-col gap-x-4 gap-y-4">
<label className="text-base font-extralight text-stone-900">1. Ich schätze die Qualität dieses Puddings als hoch ein.</label>
<div className="flex gap-3 md:gap-4 gap-x-3 gap-y-3">
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="q6" type="radio" value="ja"/>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="q6" type="radio" value="nein"/>
</label>
</div>
<div className="flex gap-2 md:gap-3 gap-x-2 gap-y-2">
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="qual_2" type="radio" value="1"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-extralight hover:bg-stone-100">
                        1
                      </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="qual_2" type="radio" value="2"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-extralight hover:bg-stone-100">
                        2
                      </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="qual_2" type="radio" value="3"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-extralight hover:bg-stone-100">
                        3
                      </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="qual_2" type="radio" value="4"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-extralight hover:bg-stone-100">
                        4
                      </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="qual_2" type="radio" value="5"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-extralight hover:bg-stone-100">
                        5
                      </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="qual_2" type="radio" value="6"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-extralight hover:bg-stone-100">
                        6
                      </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="qual_2" type="radio" value="7"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-extralight hover:bg-stone-100">
                        7
                      </div>
</label>
</div></div>

<div className="flex flex-col gap-x-4 gap-y-4">
<label className="text-base font-extralight text-stone-900">2. Der Pudding wirkt hochwertig.</label>
<div className="flex gap-2 md:gap-3 gap-x-2 gap-y-2">
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="qual_b_2" type="radio" value="1"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-extralight hover:bg-stone-100">
                        1
                      </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="qual_b_2" type="radio" value="2"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-extralight hover:bg-stone-100">
                        2
                      </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="qual_b_2" type="radio" value="3"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-extralight hover:bg-stone-100">
                        3
                      </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="qual_b_2" type="radio" value="4"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-extralight hover:bg-stone-100">
                        4
                      </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="qual_b_2" type="radio" value="5"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-extralight hover:bg-stone-100">
                        5
                      </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="qual_b_2" type="radio" value="6"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-extralight hover:bg-stone-100">
                        6
                      </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="qual_b_2" type="radio" value="7"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-extralight hover:bg-stone-100">
                        7
                      </div>
</label>
</div>
</div>

<div className="flex flex-col gap-x-4 gap-y-4">
</div>

<div className="flex flex-col gap-x-4 gap-y-4">
<label className="text-base font-extralight text-stone-900">3. Der Pudding erscheint mir sorgfältig hergestellt.</label>
<div className="flex gap-2 md:gap-3 gap-x-2 gap-y-2">
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="qual_b_4" type="radio" value="1"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-extralight hover:bg-stone-100">
                        1
                      </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="qual_b_4" type="radio" value="2"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-extralight hover:bg-stone-100">
                        2
                      </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="qual_b_4" type="radio" value="3"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-extralight hover:bg-stone-100">
                        3
                      </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="qual_b_4" type="radio" value="4"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-extralight hover:bg-stone-100">
                        4
                      </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="qual_b_4" type="radio" value="5"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-extralight hover:bg-stone-100">
                        5
                      </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="qual_b_4" type="radio" value="6"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-extralight hover:bg-stone-100">
                        6
                      </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="qual_b_4" type="radio" value="7"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-extralight hover:bg-stone-100">
                        7
                      </div>
</label>
</div>
</div>
</div>

<div className="flex flex-col gap-5 mt-4 gap-x-5 gap-y-5">
<h4 className="text-lg font-light text-stone-800 bg-stone-50 py-2 px-4 rounded-lg inline-block w-fit">C. Zahlungsbereitschaft</h4>
<div className="flex flex-col gap-3 gap-x-3 gap-y-3">
<div className="flex flex-col gap-4 mt-6">
<label className="text-base font-extralight text-stone-900">1. Ich wäre bereit, für diesen Pudding mehr zu bezahlen als für vergleichbare Produkte.</label>
<div className="flex gap-2 md:gap-3 gap-x-2 gap-y-2">
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="qual_2" type="radio" value="1"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-extralight hover:bg-stone-100">
                        1
                      </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="qual_2" type="radio" value="2"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-extralight hover:bg-stone-100">
                        2
                      </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="qual_2" type="radio" value="3"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-extralight hover:bg-stone-100">
                        3
                      </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="qual_2" type="radio" value="4"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-extralight hover:bg-stone-100">
                        4
                      </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="qual_2" type="radio" value="5"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-extralight hover:bg-stone-100">
                        5
                      </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="qual_2" type="radio" value="6"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-extralight hover:bg-stone-100">
                        6
                      </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="qual_2" type="radio" value="7"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-extralight hover:bg-stone-100">
                        7
                      </div>
</label>
</div>
</div>
<div className="flex flex-col gap-4 mt-6">
<label className="text-base font-extralight text-stone-900">2. Was ist der maximale Preis, den du für einen Becher 150 g dieses Puddings zahlen würdest?</label>
<div className="flex items-center gap-3">
<input className="h-10 md:h-12 w-32 px-4 rounded-xl border border-stone-300 bg-stone-50 text-base md:text-lg font-extralight text-center focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900 transition-all" name="max_price" placeholder="0,00" type="text"/>
<span className="text-base md:text-lg font-extralight text-stone-900">€</span>
</div>
</div>
</div>
</div>
</div><div className="flex flex-col gap-6 gap-x-6 gap-y-6">
<h3 className="text-xl font-normal tracking-tight text-stone-900 border-b border-stone-100 pb-3">Teil 4: Kontrollvariablen</h3>
<div className="flex flex-col gap-4">
<label className="text-base font-normal text-stone-900">
                1. Wie hungrig bist du gerade?
                <span className="text-stone-600 font-light">
                  (1 = gar nicht hungrig, 7 = sehr hungrig)
                </span>
</label>
<div className="flex gap-2 md:gap-3">
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="cv_hunger" type="radio" value="1"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                    1
                  </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="cv_hunger" type="radio" value="2"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                    2
                  </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="cv_hunger" type="radio" value="3"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                    3
                  </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="cv_hunger" type="radio" value="4"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                    4
                  </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="cv_hunger" type="radio" value="5"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                    5
                  </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="cv_hunger" type="radio" value="6"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                    6
                  </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="cv_hunger" type="radio" value="7"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                    7
                  </div>
</label>
</div>
</div>
<div className="flex flex-col mt-2 gap-x-4 gap-y-4">
<label className="text-base font-normal text-stone-900">
                2. Wie gerne isst du Schokoladenpudding generell?
                <span className="text-stone-600 font-light">
                  (1 = gar nicht gerne, 7 = sehr gerne)
                </span>
</label>
<div className="flex gap-2 md:gap-3">
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="cv_like_pudding" type="radio" value="1"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                    1
                  </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="cv_like_pudding" type="radio" value="2"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                    2
                  </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="cv_like_pudding" type="radio" value="3"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                    3
                  </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="cv_like_pudding" type="radio" value="4"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                    4
                  </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="cv_like_pudding" type="radio" value="5"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                    5
                  </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="cv_like_pudding" type="radio" value="6"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                    6
                  </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="cv_like_pudding" type="radio" value="7"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                    7
                  </div>
</label>
</div>
<label className="text-base font-light text-stone-900 mt-6">
  3. Wie vertraut bist du mit der Marke?
  <span className="text-stone-600 font-extralight">
    (1 = Nicht vertraut, 7 = Sehr vertraut)
  </span>
</label>
<div className="flex gap-2 md:gap-3">
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="cv_fam_doetker" type="radio" value="1"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                    1
                  </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="cv_fam_doetker" type="radio" value="2"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                    2
                  </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="cv_fam_doetker" type="radio" value="3"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                    3
                  </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="cv_fam_doetker" type="radio" value="4"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                    4
                  </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="cv_fam_doetker" type="radio" value="5"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                    5
                  </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="cv_fam_doetker" type="radio" value="6"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                    6
                  </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="cv_fam_doetker" type="radio" value="7"/>
<div className="h-10 md:h-12 flex items-center justify-center rounded-xl border border-stone-300 bg-stone-50 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all text-base md:text-lg font-light hover:bg-stone-100">
                    7
                  </div>
</label>
</div>
</div>
</div>

<div className="flex flex-col gap-x-8 gap-y-8">
<h3 className="text-xl font-light tracking-tight text-stone-900 border-b border-stone-100 pb-3">
              Teil 5: Demographie &amp; Abschluss
            </h3>
<div className="flex flex-col gap-4">
<label className="text-base font-light text-stone-900" htmlFor="age">
                1. Wie alt bist du?
              </label>
<div className="relative max-w-[150px]">
<input className="w-full pl-4 pr-16 py-3.5 rounded-xl border border-stone-300 bg-stone-50 text-base font-extralight focus:outline-none focus:ring-2 focus:ring-[#D97A8D] focus:border-transparent transition-all" id="age" placeholder="Alter" type="number"/>
<div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-stone-500 font-extralight text-base">
                  Jahre
                </div>
</div>
</div>
<div className="flex flex-col gap-4">
<label className="text-base font-light text-stone-900">
                2. Welchem Geschlecht fühlst du dich zugehörig?
              </label>
<div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="peer sr-only" name="gender" type="radio" value="weiblich"/>
<div className="w-5 h-5 rounded-full border border-stone-300 peer-checked:border-stone-900 peer-checked:border-[6px] transition-all bg-white shadow-sm group-hover:border-stone-400"></div>
<span className="text-base font-extralight text-stone-700 group-hover:text-stone-900">
                    Weiblich
                  </span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="peer sr-only" name="gender" type="radio" value="maennlich"/>
<div className="w-5 h-5 rounded-full border border-stone-300 peer-checked:border-stone-900 peer-checked:border-[6px] transition-all bg-white shadow-sm group-hover:border-stone-400"></div>
<span className="text-base font-extralight text-stone-700 group-hover:text-stone-900">
                    Männlich
                  </span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="peer sr-only" name="gender" type="radio" value="divers"/>
<div className="w-5 h-5 rounded-full border border-stone-300 peer-checked:border-stone-900 peer-checked:border-[6px] transition-all bg-white shadow-sm group-hover:border-stone-400"></div>
<span className="text-base font-extralight text-stone-700 group-hover:text-stone-900">
                    Divers
                  </span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="peer sr-only" name="gender" type="radio" value="keine_angabe"/>
<div className="w-5 h-5 rounded-full border border-stone-300 peer-checked:border-stone-900 peer-checked:border-[6px] transition-all bg-white shadow-sm group-hover:border-stone-400"></div>
<span className="text-base font-extralight text-stone-700 group-hover:text-stone-900">
                    Keine Angabe
                  </span>
</label>
</div>
</div>
<div className="flex flex-col gap-4">
<label className="text-base font-light text-stone-900" htmlFor="study">
                3. Was studierst du?
              </label>
<div className="relative w-full sm:max-w-md">
<input className="focus:outline-none focus:ring-2 focus:ring-[#D97A8D] focus:border-transparent transition-all placeholder:text-stone-400 text-base font-extralight text-stone-800 bg-stone-50 w-full border-stone-300 border rounded-xl pt-3.5 pr-4 pb-3.5 pl-4" id="study" name="study" placeholder="z.B. Psychologie" type="text"/>
</div>
</div>
<div className="flex flex-col gap-4">
<label className="text-base font-light text-stone-900" htmlFor="brand">
                4. Von welcher Marke ist dein Pudding?
              </label>
<div className="relative w-full sm:max-w-md">
<input className="w-full px-4 py-3.5 rounded-xl border border-stone-300 bg-stone-50 text-base font-extralight focus:outline-none focus:ring-2 focus:ring-[#D97A8D] focus:border-transparent transition-all text-stone-800 placeholder:text-stone-400" id="brand" name="brand" placeholder="z.B. Dr. Oetker" type="text"/>
</div>
</div>
</div>
<div className="flex flex-col border-stone-100 border-t pt-8 items-center">
<p className="text-lg font-normal text-stone-800 mb-8 italic">
              Vielen Dank für deine Teilnahme!
            </p>
<button className="flex hover:bg-stone-800 transition-colors text-xl font-light text-white bg-stone-900 w-full rounded-xl pt-5 pr-6 pb-5 pl-6 shadow-md gap-x-3 gap-y-3 items-center justify-center" onclick="if(this.form) { this.form.action='mailto:magnus.buchner@stud.th-deg.de'; this.form.method='POST'; this.form.enctype='text/plain'; }" type="submit">
<span className="">Fragebogen absenden</span>
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</button>
</div>
</form>
</div>
<a className="md:p-8 group flex items-center justify-between cursor-pointer transition-all text-left bg-white w-full max-w-2xl border-stone-200 border rounded-[2rem] mt-8 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 shadow-sm hover:shadow-md hover:border-stone-300" href="/debriefing">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-stone-700" data-lucide="info" strokeWidth="1.5"></i>
</div>
<span className="block">
<span className="block font-medium text-lg md:text-xl text-stone-900">
              Debriefing &amp; Aufklärung
            </span>
<span className="block text-sm text-stone-500 font-normal mt-0.5">
              Bitte erst nach der Teilnahme lesen
            </span>
</span>
</div>
<i className="w-6 h-6 text-stone-400 group-hover:text-stone-600 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</main>

<footer className="w-full border-t border-stone-200 py-10 mt-auto">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-500 text-lg">
<div className="">© 2026 Institut für subjektive Geschmacksintensität</div>
<div className="flex gap-6">
<a className="hover:text-stone-800 transition-colors" href="/debriefing">
            Datenschutz
          </a>
<a className="hover:text-stone-800 transition-colors" href="/debriefing">
            Impressum
          </a>
</div>
</div>
</footer>


    </>
  );
}
