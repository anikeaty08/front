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
      

<section className="relative w-full py-24 overflow-hidden border-t border-slate-100 bg-grid-pattern">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-slate-50 rounded-full blur-3xl -z-10 opacity-60"></div>
<div className="max-w-6xl mx-auto px-6 lg:px-8">

<div className="max-w-3xl mx-auto text-center mb-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-6">
<i className="w-4 h-4 text-amber-600/80" data-lucide="alert-triangle"></i>
<span className="text-xs font-medium text-slate-600 uppercase tracking-wide">Risikoanalyse</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                    Das Wasser wartet nicht.<br/>
<span className="text-slate-400">Es arbeitet gegen Ihre Substanz.</span>
</h2>
<p className="text-lg text-slate-600 leading-relaxed">
                    Ein Pool ist ein komplexes Bauwerk, das permanentem hydrostatischen Druck und chemischen Angriffen ausgesetzt ist. Ob Neubau oder Bestand: Schäden entwickeln sich nicht linear, sondern exponentiell. Wer Symptome ignoriert, zahlt später für die Substanz.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">

<div className="group relative p-8 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-100 mb-6 group-hover:bg-blue-50/50 transition-colors">
<i className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors" data-lucide="droplets"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Die unsichtbare Sättigung</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-4">
                        Was als Haarriss (0,1mm) beginnt, wirkt durch die Kapillarwirkung wie eine Pumpe. Wasser dringt hinter Fliesen oder Folien, sättigt den Beton und greift die Armierung an.
                    </p>
<div className="flex items-center gap-2 text-xs font-medium text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-100">
<i className="w-3 h-3 text-red-500" data-lucide="activity"></i>
<span>Risiko: Rostsprengung &amp; Statikverlust</span>
</div>
</div>

<div className="group relative p-8 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-100 mb-6 group-hover:bg-amber-50/50 transition-colors">
<i className="w-5 h-5 text-slate-600 group-hover:text-amber-600 transition-colors" data-lucide="layers"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Die Osmose-Falle</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-4">
                        Minderwertige Beschichtungen oder Folien sind semipermeabel. Chemisch belastetes Wasser diffundiert ein, kann aber nicht entweichen. Es entstehen Blasen, die das Material von innen zersetzen.
                    </p>
<div className="flex items-center gap-2 text-xs font-medium text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-100">
<i className="w-3 h-3 text-red-500" data-lucide="x-circle"></i>
<span>Folge: Komplette Entkernung nötig</span>
</div>
</div>

<div className="group relative p-8 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-100 mb-6 group-hover:bg-emerald-50/50 transition-colors">
<i className="w-5 h-5 text-slate-600 group-hover:text-emerald-600 transition-colors" data-lucide="trending-up"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Die Kosten-Eskalation</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-4">
                        Eine kosmetische Reparatur ("Drüberstreichen") hält oft weniger als 2 Jahre. Danach muss nicht nur der neue Schaden, sondern auch die gescheiterte Altbeschichtung teuer entfernt werden.
                    </p>
<div className="flex items-center gap-2 text-xs font-medium text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-100">
<i className="w-3 h-3 text-red-500" data-lucide="banknote"></i>
<span>Fakt: Doppelte Kosten durch Aufschub</span>
</div>
</div>
</div>

<div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="space-y-6">
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">Zeit ist der kritische Faktor.</h3>
<p className="text-slate-600 text-base leading-relaxed">
                            Im Poolbau gilt eine einfache Faustregel: Ein Schaden an der Oberfläche ist oft nur das Symptom eines tieferliegenden Problems. Warten Sie, bis Fliesen abfallen oder Risse sichtbar klaffen, ist das Wasser bereits tief in den Baukörper eingedrungen.
                        </p>
<div className="space-y-4 pt-4">

<div className="flex items-start gap-3">
<div className="mt-1 min-w-[18px] h-[18px] rounded-full border border-slate-300 flex items-center justify-center bg-white">
<div className="w-2 h-2 rounded-full bg-slate-400"></div>
</div>
<p className="text-sm text-slate-700"><strong>Phase 1:</strong> Mikrorisse &amp; Fugenverschleiß (Oft unsichtbar)</p>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 min-w-[18px] h-[18px] rounded-full border border-amber-200 flex items-center justify-center bg-amber-50">
<div className="w-2 h-2 rounded-full bg-amber-500"></div>
</div>
<p className="text-sm text-slate-700"><strong>Phase 2:</strong> Wassereintritt &amp; Algenbildung hinter der Ebene</p>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 min-w-[18px] h-[18px] rounded-full border border-red-200 flex items-center justify-center bg-red-50">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
</div>
<p className="text-sm text-slate-700"><strong>Phase 3:</strong> Betonkorrosion &amp; Substanzverlust (Sanierung x5)</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative">
<div className="flex justify-between items-end mb-6">
<div>
<span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Sanierungskosten</span>
<div className="text-3xl font-semibold text-slate-900 mt-1" id="costDisplay">€€€</div>
</div>
<div className="text-right">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Status</span>
<div className="text-sm font-medium text-amber-600 mt-1 flex items-center justify-end gap-1">
<i className="w-3 h-3" data-lucide="clock"></i>
<span id="statusText">Handlungsbedarf</span>
</div>
</div>
</div>

<div className="relative h-40 w-full border-b border-l border-slate-200 mb-6 overflow-hidden">

<div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
<div className="border-t border-r border-slate-50"></div><div className="border-t border-r border-slate-50"></div>
<div className="border-t border-r border-slate-50"></div><div className="border-t border-slate-50"></div>
<div className="border-t border-r border-slate-50"></div><div className="border-t border-r border-slate-50"></div>
<div className="border-t border-r border-slate-50"></div><div className="border-t border-slate-50"></div>
<div className="border-t border-r border-slate-50"></div><div className="border-t border-r border-slate-50"></div>
<div className="border-t border-r border-slate-50"></div><div className="border-t border-slate-50"></div>
<div className="border-t border-r border-slate-50"></div><div className="border-t border-r border-slate-50"></div>
<div className="border-t border-r border-slate-50"></div><div className="border-t border-slate-50"></div>
</div>

<svg className="absolute bottom-0 left-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path className="opacity-30" d="M0,100 C30,95 50,90 70,50 C85,20 100,0 100,0" fill="none" stroke="#ef4444" stroke-dasharray="4 2" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
<path d="M0,100 C30,95 50,90 70,50" fill="none" stroke="#0f172a" strokeWidth="2.5" vector-effect="non-scaling-stroke"></path>

<path className="opacity-10" d="M0,100 C30,95 50,90 70,50 L70,100 L0,100 Z" fill="url(#gradient)"></path>
<defs>
<lineargradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#0f172a', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#0f172a', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>

<div className="absolute bottom-1/2 left-[70%] transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-white border-2 border-slate-900 rounded-full z-10 shadow-sm"></div>
<div className="absolute bottom-0 left-[70%] w-px h-1/2 bg-slate-900 border-l border-dashed border-slate-300 z-0"></div>
</div>

<div className="space-y-2">
<div className="flex justify-between text-xs font-medium text-slate-500">
<span>Heute (Prävention)</span>
<span>In 2 Jahren (Sanierung)</span>
</div>
<input className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer" disabled="" max="100" min="1" type="range" value="70"/>
<p className="text-xs text-center text-slate-400 mt-2">Die Kostenkurve verläuft exponentiell, nicht linear.</p>
</div>
</div>
</div>
</div>

<div className="mt-16 text-center border-t border-slate-100 pt-12">
<p className="text-base text-slate-600 mb-6 max-w-2xl mx-auto">
                    Ob Sie einen Neubau planen und diesen Fehler von Beginn an vermeiden wollen, oder ob Ihr Bestandspool bereits erste Symptome zeigt: <strong className="text-slate-900 font-medium">Eine fundierte Diagnose ist der einzige Weg zur Wertsicherung.</strong>
</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white transition-all bg-slate-900 rounded-lg hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 shadow-lg shadow-slate-900/20">
                        Zustand bewerten lassen
                        <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</button>
<button className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-600 transition-all bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-200">
                        Mehr zu Beschichtungssystemen
                    </button>
</div>
</div>
</div>
</section>



    </>
  );
}
