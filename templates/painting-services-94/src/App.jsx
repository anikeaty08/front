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
      

<nav className="sticky top-0 z-50 w-full bg-zinc-50/80 backdrop-blur-md border-b border-zinc-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-lg tracking-tighter font-semibold text-zinc-900">IMBACH</span>
</div>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">Variante 1</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Variante 2</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Variante 3</a>
</div>
<button className="bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium px-4 py-2 rounded-full transition-colors">
                Kontakt
            </button>
</div>
</nav>


<section className="relative pt-20 pb-24 px-6 overflow-hidden border-b border-zinc-200">
<div className="max-w-4xl mx-auto text-center flex flex-col items-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 shadow-sm mb-8 transition-transform hover:scale-105 cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-zinc-600 tracking-wide">Termine für Herbst 2024 verfügbar</span>
</div>

<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                Wir bringen Farbe <br className="hidden md:block"/>
<span className="text-zinc-400">in Ihr Leben.</span>
</h1>

<p className="text-lg md:text-xl text-zinc-500 max-w-2xl leading-relaxed mb-10 font-normal">
                Ihr Malergeschäft für anspruchsvolle Wohnräume. Wir verbinden traditionelles Handwerk mit moderner Farbgestaltung und präziser Planung.
            </p>

<div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-16">
<button className="h-12 px-8 w-full sm:w-auto rounded-full bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium transition-all shadow-lg shadow-zinc-200/50 flex items-center justify-center gap-2">
                    Angebot anfordern
                    <iconify-icon height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<button className="h-12 px-8 w-full sm:w-auto rounded-full bg-white border border-zinc-200 hover:bg-zinc-50 text-zinc-700 text-sm font-medium transition-all flex items-center justify-center gap-2">
<iconify-icon height="16" icon="lucide:phone" width="16"></iconify-icon>
                    Rückrufservice
                </button>
</div>

<div className="relative w-full max-w-5xl rounded-xl overflow-hidden shadow-2xl border border-zinc-200 bg-white p-2">
<div className="relative rounded-lg overflow-hidden aspect-[21/9]">
<img alt="Interior Design" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 flex gap-4">
<div className="bg-white/90 backdrop-blur text-xs font-medium px-3 py-2 rounded-lg border border-white/20 shadow-sm flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="lucide:check"></iconify-icon>
                            Wände: Farrow &amp; Ball No. 275
                        </div>
</div>
</div>
</div>
</div>
</section>

<div className="w-full bg-zinc-100 py-4 text-center border-b border-zinc-200">
<span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Variante 2: Fokus auf Interaktion &amp; Service</span>
</div>


<section className="max-w-7xl mx-auto px-6 py-24">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

<div className="lg:col-span-7 flex flex-col gap-6">
<div className="flex items-center gap-2 text-blue-600 mb-2">
<iconify-icon height="16" icon="lucide:star" width="16"></iconify-icon>
<span className="text-sm font-semibold tracking-wide uppercase">Meisterbetrieb seit 1984</span>
</div>
<h2 className="text-4xl md:text-5xl font-medium text-zinc-900 tracking-tight leading-[1.15]">
                    Renovieren ohne Stress.<br/>
                    Mit festem Projektleiter.
                </h2>
<p className="text-base text-zinc-600 leading-relaxed max-w-lg">
                    Keine versteckten Kosten, keine Verzögerungen. Bei Imbach bekommen Sie einen persönlichen Ansprechpartner, der Ihr Projekt von der Farbberatung bis zum letzten Pinselstrich begleitet.
                </p>
<div className="grid grid-cols-2 gap-6 pt-4 border-t border-zinc-200 mt-4">
<div>
<div className="text-3xl font-semibold tracking-tight text-zinc-900">5k+</div>
<div className="text-sm text-zinc-500 mt-1">Abgeschlossene Projekte</div>
</div>
<div>
<div className="text-3xl font-semibold tracking-tight text-zinc-900">100%</div>
<div className="text-sm text-zinc-500 mt-1">Termintreue Garantie</div>
</div>
</div>
</div>

<div className="lg:col-span-5 w-full">
<div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative">

<div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-50 rounded-full blur-2xl opacity-50 pointer-events-none"></div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">Kostenlose Ersteinschätzung</h3>
<p className="text-sm text-zinc-500 mb-6">Erhalten Sie innerhalb von 24h ein Richtpreis-Angebot.</p>
<form className="space-y-4" onsubmit="event.preventDefault();">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5 ml-1">Worum geht es?</label>
<div className="grid grid-cols-2 gap-2">
<button className="flex items-center justify-center gap-2 p-3 rounded-lg border border-zinc-200 bg-zinc-50 text-sm font-medium text-zinc-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all">
<iconify-icon icon="lucide:home" width="16"></iconify-icon>
                                    Innen
                                </button>
<button className="flex items-center justify-center gap-2 p-3 rounded-lg border border-zinc-200 bg-white text-sm font-medium text-zinc-600 hover:border-blue-500 hover:text-blue-600 transition-all">
<iconify-icon icon="lucide:sun" width="16"></iconify-icon>
                                    Fassade
                                </button>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5 ml-1">Wohnfläche ca.</label>
<input className="w-full h-2 bg-zinc-100 rounded-lg appearance-none cursor-pointer accent-zinc-900" type="range"/>
<div className="flex justify-between text-[10px] text-zinc-400 mt-1 px-1">
<span>20m²</span>
<span>150m²+</span>
</div>
</div>
<button className="w-full h-12 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium rounded-lg mt-2 transition-colors flex items-center justify-center gap-2">
                            Jetzt anfragen
                            <iconify-icon icon="lucide:send" width="14"></iconify-icon>
</button>
<div className="flex items-center justify-center gap-2 text-[10px] text-zinc-400 pt-2">
<iconify-icon icon="lucide:lock" width="10"></iconify-icon>
                            Daten werden vertraulich behandelt
                        </div>
</form>
</div>
</div>
</div>
</section>

<div className="w-full bg-zinc-100 py-4 text-center border-b border-zinc-200">
<span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Variante 3: Visuell &amp; Modern (Bento Grid)</span>
</div>


<section className="max-w-7xl mx-auto px-6 py-24">
<div className="flex flex-col lg:flex-row gap-12">

<div className="flex-1 flex flex-col justify-center">
<div className="inline-flex mb-6">
<span className="text-xs font-semibold tracking-wider text-zinc-500 uppercase border-b border-zinc-300 pb-0.5">Swiss Quality</span>
</div>
<h2 className="text-5xl lg:text-[4rem] font-medium leading-[1] tracking-tight text-zinc-900 mb-8">
                    Präzision bis ins <br/>
                    kleinste Detail.
                </h2>
<div className="space-y-6 max-w-md">
<div className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center flex-shrink-0 mt-1 text-zinc-600">
<span className="text-sm font-semibold">01</span>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900">Beratung vor Ort</h4>
<p className="text-sm text-zinc-500 leading-relaxed mt-1">Wir messen, prüfen den Untergrund und bringen Farbmuster direkt zu Ihnen.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center flex-shrink-0 mt-1 text-zinc-600">
<span className="text-sm font-semibold">02</span>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900">Saubere Umsetzung</h4>
<p className="text-sm text-zinc-500 leading-relaxed mt-1">Abdeckung aller Möbel, staubfreies Schleifen und präziser Anstrich.</p>
</div>
</div>
</div>
<div className="mt-10">
<a className="text-sm font-medium text-zinc-900 border-b border-zinc-900 pb-0.5 hover:text-zinc-600 hover:border-zinc-600 transition-colors" href="#">
                        Unsere Referenzen ansehen
                    </a>
</div>
</div>

<div className="flex-1">
<div className="grid grid-cols-2 grid-rows-2 gap-4 h-[500px]">

<div className="col-span-2 row-span-1 md:col-span-1 md:row-span-2 relative group rounded-2xl overflow-hidden border border-zinc-200">
<img alt="Wohnzimmer fertig" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
<div className="absolute bottom-4 left-4 text-white">
<p className="text-xs font-medium opacity-90">Endergebnis</p>
<p className="text-sm font-semibold">Villa Sonnenberg</p>
</div>
</div>

<div className="relative group rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200 flex items-center justify-center">
<img alt="Farbfächer" className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="bg-white px-3 py-1 rounded-full text-[10px] font-medium text-zinc-900">Farbkonzept</span>
</div>
</div>

<div className="bg-zinc-900 rounded-2xl p-6 flex flex-col justify-between text-white border border-zinc-800 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-zinc-800 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>
<iconify-icon className="text-zinc-600" icon="lucide:quote" width="24"></iconify-icon>
<div>
<p className="text-sm font-medium leading-relaxed opacity-90">"Absolut pünktlich und unglaublich sauber gearbeitet. Eine Empfehlung."</p>
<div className="mt-4 flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-zinc-700 flex items-center justify-center text-[10px]">M</div>
<span className="text-xs text-zinc-400">M. Weber, Zürich</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

    </>
  );
}
