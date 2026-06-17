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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

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
      

<section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10 pointer-events-none"></div>

<div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Premium Bautenschutz</span>
</div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.15] mb-6">
                Eine Entscheidung für die <br className="hidden sm:block"/>nächsten 20 Jahre.
            </h2>
<p className="text-lg text-slate-500 leading-relaxed font-normal max-w-2xl mx-auto">
                Der Wert eines Pools entscheidet sich nicht an der Wasseroberfläche, sondern an der Substanz. Wir realisieren fugenlose Beschichtungssysteme für Eigentümer, die das Thema Pool ein für alle Mal abhaken wollen.
            </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-20">

<div className="group relative bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 hover:border-slate-300 transition-colors duration-300 shadow-sm hover:shadow-md">
<div className="absolute top-8 right-8 text-slate-300 group-hover:text-blue-500 transition-colors duration-300">
<iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-lg bg-red-50 text-red-600 flex items-center justify-center mb-6">
<iconify-icon icon="lucide:activity" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-3">
                    Sanierung &amp; Reparatur
                </h3>
<p className="text-sm text-slate-500 mb-6 font-medium uppercase tracking-wider">
                    Für Bestands-Pools mit Problemen
                </p>
<p className="text-base text-slate-600 leading-relaxed mb-6">
                    Ihr Pool verliert Wasser, die Folie wirft Falten oder Osmose greift die Substanz an? Lokale Reparaturen verzögern das Problem oft nur. Wir verwandeln undichte Becken in monolithische, dichte Wannen.
                </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-700">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span>Dauerhafter Stopp von Wasserverlust</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span>Sanierung von Rissen und Osmose-Schäden</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span>Kein Folienwechsel mehr nötig</span>
</li>
</ul>
</div>

<div className="group relative bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 hover:border-slate-300 transition-colors duration-300 shadow-sm hover:shadow-md">
<div className="absolute top-8 right-8 text-slate-300 group-hover:text-blue-500 transition-colors duration-300">
<iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-3">
                    Neubau &amp; Prävention
                </h3>
<p className="text-sm text-slate-500 mb-6 font-medium uppercase tracking-wider">
                    Für Bauherren und Architekten
                </p>
<p className="text-base text-slate-600 leading-relaxed mb-6">
                    Sparen Sie sich die Sanierungskosten der Zukunft. Setzen Sie von Tag 1 auf ein Verbundsystem statt auf einfache Anstriche. Schaffen Sie eine Oberfläche, die auch in 15 Jahren noch Haptik und Ästhetik vereint.
                </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-700">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span>Wertsteigerung der Immobilie</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span>Fugenlose "Zweite Haut" (Polyester/Ecofinish)</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span>Resistent gegen Chlor, Salz und UV</span>
</li>
</ul>
</div>
</div>

<div className="bg-slate-900 rounded-2xl p-8 sm:p-12 lg:p-16 text-white overflow-hidden relative">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-7">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6 text-white">
                        Warum Standardlösungen oft teuer werden.
                    </h3>
<p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        Ein Pool ist extremen Belastungen ausgesetzt: Wasserdruck, Chemie, UV-Strahlung und Erdbewegungen. Herkömmliche Folien reißen, Fliesen platzen ab, günstige Farben kreiden aus.
                    </p>
<p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        Wir arbeiten mit High-Tech-Verbundwerkstoffen (GFK/Polyester &amp; Ecofinish). Das Ergebnis ist keine "Farbe", sondern eine <span className="text-white font-medium">strukturelle Veredelung</span>. Extrem belastbar, hygienisch glatt und wartungsarm.
                    </p>
<div className="flex flex-wrap gap-6 pt-4">
<div>
<span className="block text-3xl font-semibold text-white tracking-tight">40+</span>
<span className="text-sm text-slate-500 mt-1">Jahre Erfahrung</span>
</div>
<div className="w-px h-12 bg-slate-800"></div>
<div>
<span className="block text-3xl font-semibold text-white tracking-tight">15-20</span>
<span className="text-sm text-slate-500 mt-1">Jahre Haltbarkeit</span>
</div>
</div>
</div>

<div className="lg:col-span-5 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
<div className="flex items-start gap-4 mb-6">
<div className="shrink-0 text-blue-400">
<iconify-icon height="24" icon="lucide:info" width="24"></iconify-icon>
</div>
<p className="text-sm text-slate-300 leading-relaxed">
                            Wir beraten Sie ehrlich zur Machbarkeit. Nicht jeder Pool kann gerettet werden – aber wenn, dann machen wir es richtig.
                        </p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault();">
<div>
<label className="block text-xs font-medium text-slate-400 uppercase tracking-wide mb-2">Aktuelle Situation</label>
<div className="relative">
<select className="w-full appearance-none bg-slate-900 border border-slate-700 text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all cursor-pointer">
<option>Poolsanierung (Undicht/Alt)</option>
<option>Neubau (Planungsphase)</option>
<option>Architekten-Anfrage</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">
<iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
</div>
<button className="w-full bg-white text-slate-900 hover:bg-blue-50 font-semibold text-sm rounded-lg px-6 py-3.5 transition-all flex items-center justify-center gap-2 mt-2">
<span>Kostenfreie Ersteinschätzung anfordern</span>
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<p className="text-center text-xs text-slate-500 mt-4">
                            Unverbindlich &amp; diskret. Antwort innerhalb 24h.
                        </p>
</form>
</div>
</div>
</div>
</section>

    </>
  );
}
