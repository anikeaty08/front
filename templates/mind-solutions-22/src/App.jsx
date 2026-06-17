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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[120vw] md:w-[60vw] aspect-square bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#C5A059]/5 via-[#C5A059]/5 to-transparent rounded-full blur-3xl" style={{animation: 'pulse-glow 8s infinite alternate'}}></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[150vw] md:w-[70vw] aspect-square bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#111]/80 via-[#0a0a0a] to-transparent rounded-full blur-3xl" style={{animation: 'float-slow 12s ease-in-out infinite'}}></div>
</div>

<main className="flex-grow flex flex-col z-10 w-full max-w-[1000px] mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-24 relative items-center">

<div className="flex flex-col items-center text-center w-full max-w-4xl mb-20 sm:mb-32">
<span className="text-[#C5A059] uppercase tracking-[0.2em] text-xs font-medium mb-6 flex items-center justify-center gap-2">
<iconify-icon className="text-base" icon="solar:stars-linear"></iconify-icon>
          Wach auf × Mind Solutions
        </span>
<h1 className="leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight pb-6 sm:pb-8" style={{fontFamily: '\'Playfair Display\', serif'}}>
          Was, wenn dir kein Wissen fehlt — sondern dein Unterbewusstsein dich
          blockiert?
        </h1>
<p className="sm:text-lg md:text-xl leading-relaxed text-slate-300 max-w-3xl font-light mb-8 sm:mb-10">
          Löse die unsichtbaren Bremsen in deinem Kopf. Subconscious Recode ist
          die 4-stufige Audio-Transformation, die dich aus dem mentalen
          Hamsterrad befreit — für echte innere Ruhe und einen automatischen
          Identitätswandel.
        </p>
<div className="w-full max-w-4xl flex flex-col items-center mb-10 sm:mb-12">
<div className="w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.05] bg-[#111] shadow-2xl relative group">
<video className="w-full h-full object-cover" id="promoVideo" playsinline="" poster="https://assets.cdn.filesafe.space/vQN5GIVbvhCxn3wdbN0Q/media/6a15aba7449f78709ed4a9ce.png" preload="metadata">
<source src="https://assets.cdn.filesafe.space/vQN5GIVbvhCxn3wdbN0Q/media/6a15a9ab5a7f2177766cddea.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0a]/30 cursor-pointer z-10 transition-opacity duration-300 group-hover:bg-[#0a0a0a]/10" onclick="const v = document.getElementById('promoVideo'); v.setAttribute('controls', 'controls'); v.play(); this.style.opacity = '0'; setTimeout(() =&gt; this.style.display = 'none', 300);">
<div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-[linear-gradient(135deg,#C5A059_0%,#967534_100%)] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(197,160,89,0.3)] transition-transform duration-300 group-hover:scale-105">
<div className="absolute inset-0 bg-[#C5A059] rounded-full animate-[ping_2.5s_infinite] opacity-40"></div>
<iconify-icon className="relative z-10 text-[#0a0a0a] text-3xl sm:text-4xl ml-1" icon="solar:play-linear"></iconify-icon>
</div>
</div>
</div>
</div>
<a className="w-full max-w-md inline-flex items-center justify-center px-6 py-4 sm:px-10 sm:py-5 bg-[linear-gradient(90deg,#C5A059_0%,#DFB76C_50%,#C5A059_100%)] text-[#0a0a0a] rounded-full text-sm sm:text-base uppercase tracking-widest font-medium hover:scale-[1.02] transition-transform duration-300 shadow-[0_0_30px_rgba(197,160,89,0.2)] group relative overflow-hidden mb-6" href="#kaufen">
<span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
<span className="text-center">Jetzt Transformation starten</span>
<iconify-icon className="ml-3 text-lg group-hover:translate-x-1 transition-transform shrink-0" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<div className="flex flex-wrap justify-center gap-4 sm:gap-8 opacity-80 text-xs sm:text-sm text-slate-400 font-light">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#C5A059]" icon="solar:bolt-linear"></iconify-icon>
            Sofortiger Zugang
          </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#C5A059]" icon="solar:headphones-round-sound-linear"></iconify-icon>
            4 Hypnose-Audios + Bonus-PDF
          </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#C5A059]" icon="solar:infinity-linear"></iconify-icon>
            Lebenslanger Zugriff
          </div>
</div>
</div>

<div className="w-full max-w-3xl mb-12 sm:mb-16">
<div className="flex flex-col items-center text-center mb-10 sm:mb-12">
<h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-medium tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>
            Kommt dir dieser unsichtbare Widerstand bekannt vor?
          </h2>
</div>
<div className="space-y-6 sm:space-y-8 text-slate-300 font-light leading-relaxed text-sm sm:text-base">
<p className="flex gap-4 items-start">
<iconify-icon className="text-slate-600 text-xl sm:text-2xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span>
              Du konsumierst unzählige Bücher und Videos — aber in der Realität
              verändert sich kaum etwas.
            </span>
</p>
<p className="flex gap-4 items-start">
<iconify-icon className="text-slate-600 text-xl sm:text-2xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span>
              Du visualisierst und bemühst dich positiv zu denken, doch der
              nagende Zweifel im Hintergrund bleibt.
            </span>
</p>
<p className="flex gap-4 items-start">
<iconify-icon className="text-slate-600 text-xl sm:text-2xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span>
              Du weißt rational genau, was du tun müsstest, aber es fühlt sich
              an, als würdest du mit angezogener Handbremse fahren.
            </span>
</p>
<p className="flex gap-4 items-start">
<iconify-icon className="text-slate-600 text-xl sm:text-2xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span>
              Dein Kopf rattert pausenlos. Echtes Abschalten fällt dir extrem
              schwer.
            </span>
</p>
<p className="flex gap-4 items-start">
<iconify-icon className="text-slate-600 text-xl sm:text-2xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span>
              Jede Veränderung versuchst du über harte Disziplin und Kontrolle
              zu erzwingen — ein ewiger Kampf gegen dich selbst.
            </span>
</p>
</div>
<div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-[#C5A059]/20 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.05),transparent_70%)]"></div>
<p className="relative z-10 text-base sm:text-lg text-white font-medium leading-relaxed" style={{fontFamily: '\'Playfair Display\', serif'}}>
            Dein Problem ist nicht mangelnde Disziplin oder zu wenig Wissen. Das
            eigentliche Problem ist dein überreiztes Nervensystem und ein
            Unterbewusstsein, das am alten Zustand festhält. Genau hier greift
            Subconscious Recode.
          </p>
</div>
</div>


<div className="w-full flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-20 sm:mb-32">
<div className="w-full md:w-1/2">
<h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-medium tracking-tight mb-6 sm:mb-8" style={{fontFamily: '\'Playfair Display\', serif'}}>
            Der Ausweg aus dem mentalen Hamsterrad
          </h2>
<div className="space-y-4 sm:space-y-6 text-slate-300 font-light text-sm sm:text-base leading-relaxed">
<p>
              Subconscious Recode ist kein weiteres oberflächliches
              Entspannungsprodukt. Es ist ein systematischer 4-stufiger Prozess.
              Die geführten Hypnosen holen dich aus dem mentalen Dauerfeuer und
              führen dich tief in eine beständige innere Ordnung.
            </p>
<p>
              Wahre Transformation funktioniert nicht über intellektuelles
              Verstehen. Sie muss im Körper gefühlt und im Unterbewusstsein
              erlebt werden. Du musst hier nichts erzwingen – du darfst dich
              führen lassen, wahrnehmen und endlich loslassen.
            </p>
<p>
              Solange dein Selbstbild veraltet ist und innere Anteile
              gegeneinander kämpfen, wird sich jeder Fortschritt schwer
              anfühlen. Wenn du das Nervensystem regulierst und dein
              Unterbewusstsein neu ausrichtest, wird Veränderung plötzlich
              naturally.
            </p>
</div>
</div>
<div className="w-full md:w-1/2 flex justify-center relative">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.1)_0%,transparent_60%)] blur-2xl"></div>
<img alt="Subconscious Recode System" className="relative z-10 w-full max-w-[400px] object-contain rounded-2xl border border-white/[0.05] shadow-[0_20px_40px_rgba(0,0,0,0.4)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/813cefd3-7252-4ca0-9d49-d9f555a16b41_800w.jpg"/>
</div>
</div>

<div className="w-full mb-20 sm:mb-32">
<div className="text-center mb-12 sm:mb-20">
<h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-medium tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>
            Dein 4-Stufen System für nachhaltige Neuausrichtung
          </h2>
</div>
<div className="flex flex-col gap-8 sm:gap-12 max-w-4xl mx-auto">

<div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col md:flex-row group hover:border-[#C5A059]/30 transition-colors duration-300">
<div className="md:w-[45%] relative shrink-0 flex items-center justify-center p-6 sm:p-8 bg-black/20">
<img alt="Stufe 1" className="w-full h-auto object-contain rounded-xl shadow-2xl opacity-90 group-hover:scale-[1.02] transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/244506da-65cc-4492-9fc3-19d8ef51b94a_800w.jpg"/>
</div>
<div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center flex-grow">
<span className="text-[#C5A059] text-xs font-medium tracking-widest uppercase mb-2">
                Stufe 1
              </span>
<h3 className="text-xl sm:text-2xl text-white font-medium tracking-tight mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>
                Nervous System Reset
              </h3>
<p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light mb-6">
                Bevor etwas Neues entstehen kann, muss der alte Stress gehen.
                Diese erste Stufe zwingt deinen Körper förmlich aus dem "Fight
                or Flight"-Modus, baut tiefsitzende Anspannung ab und bringt
                dich zurück in eine ruhige Empfangsbereitschaft.
              </p>
<ul className="space-y-2 text-sm text-slate-400 font-light">
<li className="flex items-center gap-2">
<iconify-icon className="text-[#C5A059]" icon="solar:check-circle-linear"></iconify-icon>
                  Spürbarer Abbau von innerer Nervosität
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-[#C5A059]" icon="solar:check-circle-linear"></iconify-icon>
                  Sofortige Ruhe im endlosen Gedankenkarussell
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-[#C5A059]" icon="solar:check-circle-linear"></iconify-icon>
                  Der perfekte Nährboden für jede echte Veränderung
                </li>
</ul>
</div>
</div>

<div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col md:flex-row-reverse group hover:border-[#C5A059]/30 transition-colors duration-300">
<div className="md:w-[45%] relative shrink-0 flex items-center justify-center p-6 sm:p-8 bg-black/20">
<img alt="Stufe 2" className="w-full h-auto object-contain rounded-xl shadow-2xl opacity-90 group-hover:scale-[1.02] transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/665cad23-630f-4d99-b80b-d23c99cedb0b_800w.jpg"/>
</div>
<div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center flex-grow">
<span className="text-[#C5A059] text-xs font-medium tracking-widest uppercase mb-2">
                Stufe 2
              </span>
<h3 className="text-xl sm:text-2xl text-white font-medium tracking-tight mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>
                Shadow Release
              </h3>
<p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light mb-6">
                Befreie deine gebundene Energie. Wir decken die unbewussten
                Ängste und Selbstzweifel auf und lassen sie sanft los. Du hörst
                auf, reaktiv auf dein Umfeld zu antworten, und triffst
                Entscheidungen wieder aus einer tiefen, eigenen Sicherheit
                heraus.
              </p>
<ul className="space-y-2 text-sm text-slate-400 font-light">
<li className="flex items-center gap-2">
<iconify-icon className="text-[#C5A059]" icon="solar:check-circle-linear"></iconify-icon>
                  Authentisches, felsenfestes Selbstvertrauen
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-[#C5A059]" icon="solar:check-circle-linear"></iconify-icon>
                  Freier Zugang zu deiner inneren Intuition
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-[#C5A059]" icon="solar:check-circle-linear"></iconify-icon>
                  Handeln aus der eigenen Mitte, statt aus Angst
                </li>
</ul>
</div>
</div>

<div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col md:flex-row group hover:border-[#C5A059]/30 transition-colors duration-300">
<div className="md:w-[45%] relative shrink-0 flex items-center justify-center p-6 sm:p-8 bg-black/20">
<img alt="Stufe 3" className="w-full h-auto object-contain rounded-xl shadow-2xl opacity-90 group-hover:scale-[1.02] transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ba698e57-641a-4769-91f6-a0e44d46315f_800w.jpg"/>
</div>
<div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center flex-grow">
<span className="text-[#C5A059] text-xs font-medium tracking-widest uppercase mb-2">
                Stufe 3
              </span>
<h3 className="text-xl sm:text-2xl text-white font-medium tracking-tight mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>
                Creator Awakening
              </h3>
<p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light mb-4">
                Beende den inneren Kampf. Solange ein Teil von dir vorwärts will
                und der andere auf der Bremse steht, vergeudest du Energie.
                Diese Stufe vereint deine inneren Widersprüche zu einer
                fokussierten, schöpferischen Kraft.
              </p>
<blockquote className="border-l-2 border-[#C5A059] pl-4 py-1 mb-6 text-white font-medium italic text-sm">
                „Deine inneren Anteile werden wie eine Mannschaft, die nicht
                mehr gegeneinander spielt — sondern gemeinsam das Spiel
                gewinnt."
              </blockquote>
<ul className="space-y-2 text-sm text-slate-400 font-light">
<li className="flex items-center gap-2">
<iconify-icon className="text-[#C5A059]" icon="solar:check-circle-linear"></iconify-icon>
                  Stoppt innere Sabotage und harte Selbstkritik
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-[#C5A059]" icon="solar:check-circle-linear"></iconify-icon>
                  Schafft tiefe innere Ganzheit und Akzeptanz
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-[#C5A059]" icon="solar:check-circle-linear"></iconify-icon>
                  Entfesselt blockierte Handlungsenergie
                </li>
</ul>
</div>
</div>

<div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col md:flex-row-reverse group hover:border-[#C5A059]/30 transition-colors duration-300">
<div className="md:w-[45%] relative shrink-0 flex items-center justify-center p-6 sm:p-8 bg-black/20">
<img alt="Stufe 4" className="w-full h-auto object-contain rounded-xl shadow-2xl opacity-90 group-hover:scale-[1.02] transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c28cd96e-8e4d-4724-b6ac-0ebfc770e85d_800w.jpg"/>
</div>
<div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center flex-grow">
<span className="text-[#C5A059] text-xs font-medium tracking-widest uppercase mb-2">
                Stufe 4
              </span>
<h3 className="text-xl sm:text-2xl text-white font-medium tracking-tight mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>
                Identity Anchor
              </h3>
<p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light mb-6">
                Mache die Veränderung zu deiner neuen Normalität. Der Prozess
                verpufft nicht einfach nach dem Hören, sondern wird durch diese
                Phase fest in deinem Unterbewusstsein verankert. Deine neue
                Identität wird zu deinem automatischen Standard.
              </p>
<ul className="space-y-2 text-sm text-slate-400 font-light">
<li className="flex items-center gap-2">
<iconify-icon className="text-[#C5A059]" icon="solar:check-circle-linear"></iconify-icon>
                  Verhindert Rückfälle in alte, toxische Muster
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-[#C5A059]" icon="solar:check-circle-linear"></iconify-icon>
                  Verankert ein klares, starkes Selbstbild im Alltag
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-[#C5A059]" icon="solar:check-circle-linear"></iconify-icon>
                  Sorgt für Stabilität, auch in stressigen Phasen
                </li>
</ul>
</div>
</div>
</div>
</div>

<div className="w-full mb-20 sm:mb-32">
<div className="text-center mb-12">
<h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-medium tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>
            Der Unterschied in deiner Realität
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">

<div className="bg-[#111]/50 border border-white/[0.05] rounded-2xl p-6 sm:p-8">
<div className="flex items-center gap-3 mb-6 border-b border-white/[0.05] pb-4">
<iconify-icon className="text-slate-500 text-2xl" icon="solar:sad-circle-linear"></iconify-icon>
<h3 className="text-lg text-white font-medium tracking-wide">
                Dein jetziger Zustand
              </h3>
</div>
<ul className="space-y-4 text-sm sm:text-base text-slate-400 font-light">
<li className="flex gap-3 items-start">
<iconify-icon className="text-slate-600 mt-0.5 shrink-0 text-lg" icon="solar:close-circle-linear"></iconify-icon>
                Du bist ständig im Kopf und suchst die Lösung im Verstand
              </li>
<li className="flex gap-3 items-start">
<iconify-icon className="text-slate-600 mt-0.5 shrink-0 text-lg" icon="solar:close-circle-linear"></iconify-icon>
                Dein Körper steht unter Dauerstrom und Anspannung
              </li>
<li className="flex gap-3 items-start">
<iconify-icon className="text-slate-600 mt-0.5 shrink-0 text-lg" icon="solar:close-circle-linear"></iconify-icon>
                Manifestieren fühlt sich wie anstrengende Arbeit an
              </li>
</ul>
</div>

<div className="bg-[linear-gradient(180deg,rgba(197,160,89,0.05)0%,transparent_100%)] border border-[#C5A059]/20 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/10 blur-3xl rounded-full pointer-events-none"></div>
<div className="flex items-center gap-3 mb-6 border-b border-[#C5A059]/10 pb-4">
<iconify-icon className="text-[#C5A059] text-2xl" icon="solar:smile-circle-linear"></iconify-icon>
<h3 className="text-lg text-white font-medium tracking-wide">
                Mit Subconscious Recode
              </h3>
</div>
<ul className="space-y-4 text-sm sm:text-base text-slate-300 font-light relative z-10">
<li className="flex gap-3 items-start">
<iconify-icon className="text-[#C5A059] mt-0.5 shrink-0 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                Tiefer, unerschütterlicher Fokus und glasklarer Verstand
              </li>
<li className="flex gap-3 items-start">
<iconify-icon className="text-[#C5A059] mt-0.5 shrink-0 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                Ein reguliertes Nervensystem, das dir Geborgenheit signalisiert
              </li>
<li className="flex gap-3 items-start">
<iconify-icon className="text-[#C5A059] mt-0.5 shrink-0 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                Natürliches Selbstvertrauen, das ohne Beweise auskommt
              </li>
</ul>
</div>
</div>
</div>

<div className="w-full mb-20 sm:mb-32">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
<div>
<h3 className="text-xl sm:text-2xl text-white font-medium mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>
              Dieser Prozess ist für dich, wenn…
            </h3>
<ul className="space-y-4 text-sm sm:text-base text-slate-300 font-light">
<li className="flex gap-3 items-start">
<iconify-icon className="text-[#C5A059] mt-1 shrink-0 text-base" icon="solar:alt-arrow-right-linear"></iconify-icon>
                Du bereit bist aufzuhören, gegen deine eigenen Muster
                anzukämpfen
              </li>
<li className="flex gap-3 items-start">
<iconify-icon className="text-[#C5A059] mt-1 shrink-0 text-base" icon="solar:alt-arrow-right-linear"></iconify-icon>
                Du verstehst, dass wahre Ergebnisse aus einer veränderten
                Identität entstehen
              </li>
<li className="flex gap-3 items-start">
<iconify-icon className="text-[#C5A059] mt-1 shrink-0 text-base" icon="solar:alt-arrow-right-linear"></iconify-icon>
                Du dir echten inneren Frieden und ein Ende der mentalen
                Überlastung wünschst
              </li>
</ul>
</div>
<div>
<h3 className="text-xl sm:text-2xl text-white font-medium mb-6 opacity-70" style={{fontFamily: '\'Playfair Display\', serif'}}>
              Subconscious Recode ist nicht das Richtige, wenn…
            </h3>
<ul className="space-y-4 text-sm sm:text-base text-slate-500 font-light">
<li className="flex gap-3 items-start">
<iconify-icon className="mt-1 shrink-0 text-base" icon="solar:minus-circle-linear"></iconify-icon>
                Du eine "magische Pille" suchst, die deine Probleme ohne deine
                Mitarbeit löst
              </li>
<li className="flex gap-3 items-start">
<iconify-icon className="mt-1 shrink-0 text-base" icon="solar:minus-circle-linear"></iconify-icon>
                Du akute psychische Unterstützung benötigst (dies ersetzt keine
                Therapie)
              </li>
<li className="flex gap-3 items-start">
<iconify-icon className="mt-1 shrink-0 text-base" icon="solar:minus-circle-linear"></iconify-icon>
                Du nicht bereit bist, dich auf den Prozess des Fühlens und
                Erlebens einzulassen
              </li>
</ul>
</div>
</div>
</div>

<div className="w-full mb-20 sm:mb-32">
<div className="bg-gradient-to-b from-white/[0.02] to-transparent border border-white/[0.05] rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden backdrop-blur-sm">
<div className="relative z-10 flex flex-col items-center mb-10 text-center">
<h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-medium tracking-tight mb-3" style={{fontFamily: '\'Playfair Display\', serif'}}>
              Wach auf
              <span className="text-[#C5A059] font-light mx-2 text-xl">×</span>
              Mind Solutions
            </h2>
<span className="text-slate-400 font-light tracking-widest text-xs sm:text-sm uppercase">
              Von der Praxis für die Praxis entwickelt
            </span>
</div>
<div className="relative z-10 w-full max-w-md mx-auto mb-10 rounded-2xl overflow-hidden border border-white/[0.05] shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
<img alt="Marcel und Abbas gemeinsam auf einem Business-Seminar" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0cbb5e29-e111-4ef0-b321-70fddde9c4ec_1600w.jpg"/>
<div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent pt-12 pb-4 px-4 flex justify-center">
<span className="text-xs text-slate-300 font-light tracking-wide flex items-center gap-1.5 opacity-90">
<iconify-icon className="text-[#C5A059] text-sm" icon="solar:map-point-linear"></iconify-icon>
                Marcel und Abbas — gemeinsam auf einem Business-Seminar in
                Amsterdam
              </span>
</div>
</div>
<div className="relative z-10 space-y-6 text-slate-300 font-light leading-relaxed max-w-3xl mx-auto text-center text-sm sm:text-base">
<p className="">
              Marcel und Abbas verbindet mehr als eine gemeinsame Vision — sie
              verbindet ein tiefes Vertrauen, das über Jahre in echter
              Transformation gewachsen ist.
            </p>
<p className="">
              Abbas hat auf Marcels Weg eine Schlüsselrolle eingenommen. Als
              zertifizierter Schweizer Hypnosetherapeut bewies er, was möglich
              wird, wenn man aufhört an der Oberfläche zu kratzen und direkt an
              den Kern des Unterbewusstseins geht.
            </p>
<p>
              Es war der logische Schritt, diese Erkenntnisse zu verschmelzen:
              Marcels kompromissloses Verständnis für Identitätswandel und
              Manifestation, gebündelt mit Abbas' klinisch fundierter Expertise
              im Bereich der Hypnose.
            </p>
<div className="mt-10 pt-8 border-t border-white/[0.05]">
<p className="text-lg sm:text-xl text-white font-medium italic" style={{fontFamily: '\'Playfair Display\', serif'}}>
                "Subconscious Recode ist die Essenz unserer Arbeit. Keine
                Theorie. Sondern das, was messbar funktioniert, wenn du bereit
                bist, die Ebene zu wechseln."
              </p>
</div>
</div>
</div>
</div>

<div className="w-full mb-20 sm:mb-32">
<div className="flex flex-col items-center justify-center mb-12 sm:mb-16">
<h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-medium tracking-tight mb-4 text-center" style={{fontFamily: '\'Playfair Display\', serif'}}>
            Erfahrungen von Menschen, die mit Abbas gearbeitet haben
          </h2>
<p className="text-sm sm:text-base text-slate-400 font-light text-center max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4">
            Die folgenden Bewertungen stammen von Klienten, die Abbas in seiner
            Arbeit als Hypnosetherapeut begleitet hat. Sie beziehen sich auf
            seine therapeutische Arbeit — nicht spezifisch auf das Subconscious
            Recode Audioprodukt.
          </p>
<div className="flex flex-wrap justify-center items-center gap-4 bg-white/[0.02] border border-white/[0.05] px-6 py-3 rounded-full">
<span className="text-sm font-medium text-white tracking-wide">
              Abbas Wülser (Mind Solutions)
            </span>
<div className="hidden sm:block w-px h-4 bg-white/[0.1]"></div>
<span className="text-xs font-light text-slate-400">
              Verifizierte Google Bewertungen
            </span>
<div className="flex items-center gap-1.5 sm:ml-2">
<span className="text-sm font-medium text-white">5,0</span>
<iconify-icon className="text-[#C5A059] text-sm" icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>
<div className="columns-1 md:columns-2 gap-6 space-y-6 w-full max-w-[1000px] mx-auto">

<div className="break-inside-avoid bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 sm:p-8 flex flex-col hover:border-[#C5A059]/30 transition-colors duration-300">
<div className="flex text-[#C5A059] mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm sm:text-base text-slate-300 font-light italic mb-6 leading-relaxed">
              "Ich hatte jahrelang mit Süchten, Prokrastination und
              Orientierungslosigkeit zu kämpfen. Mein Leben war chaotisch und
              unproduktiv. Doch mit Abbas' Unterstützung konnte ich endlich die
              Wende schaffen. Nach nur fünf Sitzungen hat sich mein Leben
              radikal verändert — ich bin jetzt der Produktive in meinem
              Freundeskreis und habe alles im Griff."
            </p>
<div className="text-sm font-medium text-white mt-auto">
              — Fabijan Balenovic
            </div>
</div>

<div className="break-inside-avoid bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 sm:p-8 flex flex-col hover:border-[#C5A059]/30 transition-colors duration-300">
<div className="flex text-[#C5A059] mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm sm:text-base text-slate-300 font-light italic mb-6 leading-relaxed">
              "Die Hypnose-Sitzungen bei Abbas haben mein Leben wirklich
              verändert. Ich fühle mich nun sicherer, selbstbewusster und trete
              viel souveräner auf — und genau dieses neu gewonnene
              Selbstbewusstsein hat mir ermöglicht, meine Traumstelle zu finden
              und angenommen zu werden."
            </p>
<div className="text-sm font-medium text-white mt-auto">
              — Claudiu Raducanu
            </div>
</div>

<div className="break-inside-avoid bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 sm:p-8 flex flex-col hover:border-[#C5A059]/30 transition-colors duration-300">
<div className="flex text-[#C5A059] mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm sm:text-base text-slate-300 font-light italic mb-6 leading-relaxed">
              "Abbas ist wirklich die sprichwörtliche Nadel im Heuhaufen. Ich
              habe noch nie so eine gute Therapie erlebt. Endlich jemand, der
              mich wirklich versteht und meine Probleme an der Wurzel packen
              konnte. Die Transformation, die ich dank seiner Arbeit
              durchgemacht habe, ist unglaublich."
            </p>
<div className="text-sm font-medium text-white mt-auto">
              — Joshua Nyffeler
            </div>
</div>

<div className="break-inside-avoid bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 sm:p-8 flex flex-col hover:border-[#C5A059]/30 transition-colors duration-300">
<div className="flex text-[#C5A059] mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm sm:text-base text-slate-300 font-light italic mb-6 leading-relaxed">
              "Ich bin immer noch sprachlos, wie sehr mir die Arbeit mit Abbas
              geholfen hat! Fünf Jahre lang habe ich täglich 20 Zigaretten
              geraucht — bis ich eine einzige Sitzung mit ihm hatte. Seitdem bin
              ich rauchfrei und habe keinerlei Verlangen mehr."
            </p>
<div className="text-sm font-medium text-white mt-auto">
              — Markus Wolf
            </div>
</div>

<div className="break-inside-avoid bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 sm:p-8 flex flex-col hover:border-[#C5A059]/30 transition-colors duration-300">
<div className="flex text-[#C5A059] mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm sm:text-base text-slate-300 font-light italic mb-6 leading-relaxed">
              "Ich bin von der Ganzjahresbegleitung zutiefst berührt. Abbas ist
              ein unglaublich professioneller, feinfühliger und herzlicher
              Mensch. Mein Thema hat sich aufgelöst und ich fühle mich zum
              ersten Mal wirklich bereit, meinen wahren Weg zu gehen. Die
              Ergebnisse sind schwarz auf weiß sichtbar."
            </p>
<div className="text-sm font-medium text-white mt-auto">
              — Gian Luca Beer
            </div>
</div>

<div className="break-inside-avoid bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 sm:p-8 flex flex-col hover:border-[#C5A059]/30 transition-colors duration-300">
<div className="flex text-[#C5A059] mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm sm:text-base text-slate-300 font-light italic mb-6 leading-relaxed">
              "Abbas hat mir extrem in meinem Heilungsprozess geholfen und hilft
              mir nach wie vor sehr! Nicht nur durch sein fundiertes Fachwissen,
              sondern auch durch seine menschlichen Kompetenzen. Immer auf
              Augenhöhe. Ich kann allen nur empfehlen, sich bei Abbas zu
              melden."
            </p>
<div className="text-sm font-medium text-white mt-auto">
              — Samuel Köbe
            </div>
</div>

<div className="break-inside-avoid bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 sm:p-8 flex flex-col hover:border-[#C5A059]/30 transition-colors duration-300">
<div className="flex text-[#C5A059] mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm sm:text-base text-slate-300 font-light italic mb-6 leading-relaxed">
              "Ich bin jetzt schon seit 2 Jahren bei Abbas. Die Therapie bei ihm
              hat mir bisher am besten geholfen, wenn man sie mit anderen
              vergleicht, und ich habe schon vieles ausprobiert. Bei allen
              Problemen oder Herausforderungen hatte Abbas eine Lösung für
              mich."
            </p>
<div className="text-sm font-medium text-white mt-auto">
              — Ibrahim Kandönmez
            </div>
</div>

<div className="break-inside-avoid bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 sm:p-8 flex flex-col hover:border-[#C5A059]/30 transition-colors duration-300">
<div className="flex text-[#C5A059] mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm sm:text-base text-slate-300 font-light italic mb-6 leading-relaxed">
              "Ich hatte immer große Ziele, aber genau die haben mich oft
              gelähmt. Dank Abbas habe ich gelernt, meine Ziele in kleine,
              machbare Schritte aufzuteilen. Was mich besonders beeindruckt hat:
              Hier spürt man wirklich, dass es nicht ums Geld geht, sondern
              darum, Menschen weiterzubringen."
            </p>
<div className="text-sm font-medium text-white mt-auto">
              — Nilai Scheiwiller
            </div>
</div>
</div>
</div>

<div className="w-full max-w-2xl mx-auto mb-16 sm:mb-24 relative" id="kaufen">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.1),transparent_70%)] pointer-events-none blur-xl"></div>
<div className="text-center mb-6 sm:mb-10">
<h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-medium tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>
            Dein direkter Weg zur Umsetzung
          </h2>
</div>
<div className="bg-[#111]/80 border border-[#C5A059]/30 rounded-2xl sm:rounded-3xl p-5 sm:p-12 relative overflow-hidden backdrop-blur-md shadow-[0_0_50px_rgba(0,0,0,0.5)]">
<h3 className="text-[#C5A059] text-base sm:text-xl font-medium tracking-wide text-center mb-6 sm:mb-8">
            Subconscious Recode — Komplettpaket
          </h3>
<ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
<li className="flex items-start sm:items-center text-sm sm:text-base border-b border-white/[0.05] pb-3">
<iconify-icon className="text-[#C5A059] text-xl shrink-0 mr-3 mt-0.5 sm:mt-0" icon="solar:check-circle-linear"></iconify-icon>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full">
<span className="text-slate-300 font-light">
                  Stufe 1: Nervous System Reset
                </span>
<span className="text-slate-500 text-xs sm:text-sm mt-0.5 sm:mt-0">
                  (Wert: 99 €)
                </span>
</div>
</li>
<li className="flex items-start sm:items-center text-sm sm:text-base border-b border-white/[0.05] pb-3">
<iconify-icon className="text-[#C5A059] text-xl shrink-0 mr-3 mt-0.5 sm:mt-0" icon="solar:check-circle-linear"></iconify-icon>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full">
<span className="text-slate-300 font-light">
                  Stufe 2: Shadow Release
                </span>
<span className="text-slate-500 text-xs sm:text-sm mt-0.5 sm:mt-0">
                  (Wert: 99 €)
                </span>
</div>
</li>
<li className="flex items-start sm:items-center text-sm sm:text-base border-b border-white/[0.05] pb-3">
<iconify-icon className="text-[#C5A059] text-xl shrink-0 mr-3 mt-0.5 sm:mt-0" icon="solar:check-circle-linear"></iconify-icon>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full">
<span className="text-slate-300 font-light">
                  Stufe 3: Creator Awakening
                </span>
<span className="text-slate-500 text-xs sm:text-sm mt-0.5 sm:mt-0">
                  (Wert: 99 €)
                </span>
</div>
</li>
<li className="flex items-start sm:items-center text-sm sm:text-base border-b border-white/[0.05] pb-3">
<iconify-icon className="text-[#C5A059] text-xl shrink-0 mr-3 mt-0.5 sm:mt-0" icon="solar:check-circle-linear"></iconify-icon>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full">
<span className="text-slate-300 font-light">
                  Stufe 4: Identity Anchor
                </span>
<span className="text-slate-500 text-xs sm:text-sm mt-0.5 sm:mt-0">
                  (Wert: 99 €)
                </span>
</div>
</li>
<li className="flex items-start sm:items-center text-sm sm:text-base border-b border-white/[0.05] pb-3">
<iconify-icon className="text-[#C5A059] text-xl shrink-0 mr-3 mt-0.5 sm:mt-0" icon="solar:check-circle-linear"></iconify-icon>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full">
<span className="text-slate-300 font-light">
                  Bonus: Begleit-PDF Guide
                </span>
<span className="text-slate-500 text-xs sm:text-sm mt-0.5 sm:mt-0">
                  (Wert: 49 €)
                </span>
</div>
</li>
</ul>
<div className="flex flex-col items-center justify-center mb-6 sm:mb-8">
<span className="text-white text-2xl sm:text-4xl font-medium tracking-tight mt-1 flex items-center justify-center gap-2 sm:gap-3">
              Heute nur:
              <span className="text-[#C5A059]">396 €</span>
</span>
</div>
<a className="w-full inline-flex items-center justify-center px-4 py-4 sm:px-8 sm:py-5 bg-[linear-gradient(90deg,#C5A059_0%,#DFB76C_50%,#C5A059_100%)] text-[#0a0a0a] rounded-full text-xs sm:text-base uppercase tracking-wider sm:tracking-widest font-medium hover:scale-[1.02] transition-transform duration-300 shadow-[0_0_30px_rgba(197,160,89,0.2)] group mb-5 sm:mb-6 leading-tight text-center" href="#">
<span className="text-center">Jetzt Transformation starten</span>
<iconify-icon className="ml-2 sm:ml-3 text-lg shrink-0 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-start sm:items-center text-slate-400 text-xs sm:text-sm font-light mt-5 sm:mt-6 w-fit sm:w-full mx-auto">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-[#C5A059]" icon="solar:bolt-linear"></iconify-icon>
              Sofortiger Zugang nach Kauf
            </div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-[#C5A059]" icon="solar:headphones-round-sound-linear"></iconify-icon>
              Lebenslanger Audio-Zugriff
            </div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-[#C5A059]" icon="solar:lock-keyhole-linear"></iconify-icon>
              Sichere Abwicklung
            </div>
</div>
</div>
</div>

<div className="w-full max-w-2xl mx-auto mb-20 sm:mb-32">
<div className="bg-[linear-gradient(90deg,rgba(197,160,89,0.05)_0%,transparent_100%)] border border-[#C5A059]/20 rounded-2xl p-5 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
<div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#C5A059]/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-[#C5A059] text-3xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<h3 className="text-white text-lg sm:text-xl font-medium mb-2" style={{fontFamily: '\'Playfair Display\', serif'}}>
              Sichere Abwicklung &amp; Sofortiger Zugriff
            </h3>
<p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">
              Deine Zahlung wird über eine sichere, verschlüsselte Verbindung
              abgewickelt. Direkt nach Abschluss erhältst du per E-Mail deinen
              persönlichen Zugang zu allen Hypnose-Audios und dem PDF-Guide.
            </p>
</div>
</div>
</div>

<div className="w-full max-w-3xl mx-auto mb-20 sm:mb-32">
<h2 className="text-2xl sm:text-3xl text-white font-medium tracking-tight mb-10 text-center" style={{fontFamily: '\'Playfair Display\', serif'}}>
          Häufige Fragen
        </h2>
<div className="space-y-4">
<details className="group bg-[#111]/50 border border-white/[0.05] rounded-2xl overflow-hidden transition-all duration-300" name="faq">
<summary className="flex items-center justify-between cursor-pointer p-6 sm:p-8 focus:outline-none">
<h3 className="text-base sm:text-lg font-medium text-white pr-4">
                Funktioniert Hypnose wirklich?
              </h3>
<iconify-icon className="text-slate-400 text-xl transition-transform duration-300 group-open:rotate-180 shrink-0" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
<p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
                Hypnose ist kein mystischer Hokuspokus. Es ist ein
                wissenschaftlich anerkannter Zustand fokussierter
                Aufmerksamkeit, in dem dein Unterbewusstsein besonders
                empfänglich für Veränderung ist. Abbas ist zertifizierter
                Hypnosetherapeut mit jahrelanger Praxis und nachweisbaren
                Ergebnissen (siehe Google-Bewertungen).
              </p>
</div>
</details>
<details className="group bg-[#111]/50 border border-white/[0.05] rounded-2xl overflow-hidden transition-all duration-300" name="faq">
<summary className="flex items-center justify-between cursor-pointer p-6 sm:p-8 focus:outline-none">
<h3 className="text-base sm:text-lg font-medium text-white pr-4">
                Wie lange dauert es, bis ich Ergebnisse sehe?
              </h3>
<iconify-icon className="text-slate-400 text-xl transition-transform duration-300 group-open:rotate-180 shrink-0" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
<p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
                Viele spüren schon nach der ersten Hypnose eine Veränderung —
                mehr Ruhe, weniger innerer Druck. Der volle
                Transformationsprozess entfaltet sich über alle 4 Stufen. Manche
                erleben den Shift sofort, bei anderen baut er sich über Tage und
                Wochen auf.
              </p>
</div>
</details>
<details className="group bg-[#111]/50 border border-white/[0.05] rounded-2xl overflow-hidden transition-all duration-300" name="faq">
<summary className="flex items-center justify-between cursor-pointer p-6 sm:p-8 focus:outline-none">
<h3 className="text-base sm:text-lg font-medium text-white pr-4">
                Brauche ich Vorerfahrung mit Hypnose?
              </h3>
<iconify-icon className="text-slate-400 text-xl transition-transform duration-300 group-open:rotate-180 shrink-0" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
<p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
                Nein. Die Hypnosen sind so aufgebaut, dass du dich einfach
                führen lassen kannst. Du musst nichts kontrollieren oder
                intellektuell verstehen. Das Bonus-PDF erklärt dir zusätzlich
                alles, was du wissen musst.
              </p>
</div>
</details>
<details className="group bg-[#111]/50 border border-white/[0.05] rounded-2xl overflow-hidden transition-all duration-300" name="faq">
<summary className="flex items-center justify-between cursor-pointer p-6 sm:p-8 focus:outline-none">
<h3 className="text-base sm:text-lg font-medium text-white pr-4">
                Ist das ein Ersatz für Therapie?
              </h3>
<iconify-icon className="text-slate-400 text-xl transition-transform duration-300 group-open:rotate-180 shrink-0" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
<p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
                Nein. Subconscious Recode ist ein Selbstanwendungs-Tool für
                persönliche Weiterentwicklung. Es ersetzt keine Therapie,
                Medizin oder professionelle Begleitung. Bei akuten psychischen
                Krisen wende dich bitte an einen Fachmann.
              </p>
</div>
</details>
<details className="group bg-[#111]/50 border border-white/[0.05] rounded-2xl overflow-hidden transition-all duration-300" name="faq">
<summary className="flex items-center justify-between cursor-pointer p-6 sm:p-8 focus:outline-none">
<h3 className="text-base sm:text-lg font-medium text-white pr-4">
                Was, wenn es bei mir nicht wirkt?
              </h3>
<iconify-icon className="text-slate-400 text-xl transition-transform duration-300 group-open:rotate-180 shrink-0" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
<p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
                Der Prozess funktioniert erlebnisorientiert — das heißt, du
                musst dich darauf einlassen und die Hypnosen nicht nur
                abspielen, sondern wirklich zulassen. Wenn du bereit bist, dich
                innerlich einzulassen, wird der Prozess wirken.
              </p>
</div>
</details>
<details className="group bg-[#111]/50 border border-white/[0.05] rounded-2xl overflow-hidden transition-all duration-300" name="faq">
<summary className="flex items-center justify-between cursor-pointer p-6 sm:p-8 focus:outline-none">
<h3 className="text-base sm:text-lg font-medium text-white pr-4">
                Wie genau läuft der Prozess ab?
              </h3>
<iconify-icon className="text-slate-400 text-xl transition-transform duration-300 group-open:rotate-180 shrink-0" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
<p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
                Nach dem Kauf bekommst du sofortigen Zugang zu allen 4
                Hypnose-Audios und dem Bonus-PDF. Du hörst die Hypnosen in der
                vorgegebenen Reihenfolge — idealerweise an einem ruhigen Ort mit
                Kopfhörern. Das PDF erklärt dir den optimalen Ablauf.
              </p>
</div>
</details>
</div>
</div>

<div className="w-full max-w-4xl text-center flex flex-col items-center">
<h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-medium tracking-tight mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>
          Jeder Tag im alten Muster kostet dich unnötig Kraft.
        </h2>
<p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl mb-10">
          Du hast genug gelesen, analysiert und verstanden. Es ist an der Zeit,
          die Ebene zu wechseln. Schluss mit der ständigen Selbstkontrolle und
          dem Kampf gegen dich selbst.
          <br/>
<br/>
          Triff die Entscheidung, dein Nervensystem zu entspannen und deinem
          Unterbewusstsein den Weg freizumachen. Die Transformation wartet auf
          dich.
        </p>
<a className="w-full max-w-md inline-flex items-center justify-center px-6 py-4 sm:px-10 sm:py-5 bg-[linear-gradient(90deg,#C5A059_0%,#DFB76C_50%,#C5A059_100%)] text-[#0a0a0a] rounded-full text-sm sm:text-base uppercase tracking-widest font-medium hover:scale-[1.02] transition-transform duration-300 shadow-[0_0_30px_rgba(197,160,89,0.2)] group relative overflow-hidden" href="#kaufen">
<span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
<span className="text-center">Jetzt Transformation starten</span>
<iconify-icon className="ml-3 text-lg group-hover:translate-x-1 transition-transform shrink-0" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</main>

<footer className="w-full py-8 mt-auto border-t border-white/[0.05] bg-[#0a0a0a] relative z-20">
<div className="flex flex-col md:flex-row items-center justify-between max-w-[1000px] mx-auto px-4 sm:px-6 text-xs sm:text-sm text-slate-500 font-light">
<span className="uppercase mb-4 md:mb-0 tracking-widest text-center">
          © 2026 RealityAccelerator
        </span>
<div className="flex gap-6 sm:gap-8">
<a className="hover:text-[#C5A059] transition-colors duration-300" href="https://itrk.legal/1jdU.0.10dy.html" target="_blank">
            Impressum
          </a>
<a className="hover:text-[#C5A059] transition-colors duration-300" href="https://itrk.legal/1jdU.bg.10dy.html" target="_blank">
            Datenschutz
          </a>
</div>
</div>
</footer>

    </>
  );
}
