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
      


<div className="fixed inset-0 w-full h-full z-0">
<div className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df15793e-cae9-4a4e-80c2-fe3b8f0ab7ae_3840w.jpg\')'}}>
</div>

<div className="absolute inset-0 hero-gradient"></div>
</div>

<nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-[#061a40]/20 backdrop-blur-md transition-all">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 bg-white/10 rounded flex items-center justify-center text-white backdrop-blur-sm border border-white/10">
<span className="iconify" data-icon="lucide:hexagon" data-strokeWidth="1.5" data-width="20"></span>
</div>
<span className="text-white font-semibold tracking-tight text-lg drop-shadow-sm">WESTERWALD<span className="opacity-60 font-light">TECH</span></span>
</div>
<div className="hidden md:flex gap-8 text-sm font-medium text-slate-200/90">
<a className="hover:text-white transition-colors" href="#">Lösungen</a>
<a className="hover:text-white transition-colors" href="#">Materialien</a>
<a className="hover:text-white transition-colors" href="#">Branchen</a>
<a className="hover:text-white transition-colors" href="#">Über uns</a>
</div>
<a className="hidden md:flex items-center gap-2 text-white text-sm font-medium bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all border border-white/5 backdrop-blur-sm" href="#">
                Kontakt
                <span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16"></span>
</a>
</div>
</nav>


<section className="relative z-10 w-full min-h-[95vh] flex items-center justify-center pb-20">
<div className="w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center pt-28">

<div className="lg:col-span-7 flex flex-col gap-8">

<div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full border border-blue-400/30 bg-blue-900/30 text-blue-100 text-xs font-medium tracking-wide uppercase backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    Made in Germany
                </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1] drop-shadow-sm">
                    Industrieschilder, die halten – <span className="text-slate-400/80">auch wenn andere versagen</span>
</h1>
<p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl text-shadow-sm">
                    Hochwertige Kennzeichnungslösungen für anspruchsvolle Umgebungen. Ob Hitze, Chemikalien oder Abrieb: Wir fertigen robuste Schilder, die 5 bis 30 Jahre halten.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mt-2">
<button className="group relative px-8 py-4 bg-white text-[#061a40] text-sm font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2 border border-transparent">
                        Jetzt Anfrage stellen
                        <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="18"></span>
</button>
<button className="px-8 py-4 text-white text-sm font-medium rounded-xl border border-white/20 hover:bg-white/10 transition-all flex items-center justify-center gap-3 backdrop-blur-sm bg-white/5">
<span className="iconify" data-icon="lucide:phone" data-strokeWidth="1.5" data-width="18"></span>
                        +49 2661 91090
                    </button>
</div>
<p className="text-xs text-slate-400 mt-2 flex items-center gap-2">
<span className="iconify text-green-400" data-icon="lucide:check-circle" data-width="14"></span>
                    Individuell nach Ihren Anforderungen gefertigt
                </p>
</div>

<div className="lg:col-span-5 hidden lg:block">
<div className="glass-panel p-8 rounded-2xl relative overflow-hidden group hover:border-white/20 transition-colors">
<div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500 rounded-full blur-[80px] opacity-20"></div>
<h3 className="text-white font-medium text-lg mb-6 tracking-tight relative z-10">Einsatzbereiche</h3>
<div className="space-y-4 relative z-10">
<div className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/10 transition-colors cursor-default group/item">
<div className="mt-1 text-blue-300">
<span className="iconify" data-icon="lucide:factory" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div>
<h4 className="text-slate-200 text-sm font-medium group-hover/item:text-white transition-colors">Maschinenbau</h4>
<p className="text-slate-400 text-xs mt-1">Typenschilder nach Maschinenrichtlinie</p>
</div>
</div>
<div className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/10 transition-colors cursor-default group/item">
<div className="mt-1 text-blue-300">
<span className="iconify" data-icon="lucide:droplets" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div>
<h4 className="text-slate-200 text-sm font-medium group-hover/item:text-white transition-colors">Chemie &amp; Prozess</h4>
<p className="text-slate-400 text-xs mt-1">Säure- und laugenbeständige Gravuren</p>
</div>
</div>
<div className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/10 transition-colors cursor-default group/item">
<div className="mt-1 text-blue-300">
<span className="iconify" data-icon="lucide:thermometer-sun" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div>
<h4 className="text-slate-200 text-sm font-medium group-hover/item:text-white transition-colors">Extreme Hitze</h4>
<p className="text-slate-400 text-xs mt-1">Hitzebeständig bis 400°C</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


<main className="relative z-20 bg-slate-50">

<section className="relative -mt-16 mx-4 md:mx-auto max-w-7xl rounded-2xl bg-white shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100/50">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
<div className="p-8 group hover:bg-slate-50 transition-colors">
<div className="flex items-center justify-between mb-4">
<span className="p-2 rounded-lg bg-[#061a40]/5 text-[#061a40] group-hover:bg-[#061a40] group-hover:text-white transition-all">
<span className="iconify" data-icon="lucide:history" data-strokeWidth="1.5" data-width="20"></span>
</span>
</div>
<p className="text-4xl font-semibold text-[#061a40] tracking-tight mb-1">55+</p>
<p className="text-sm font-medium text-slate-900 mb-2">Jahre Erfahrung</p>
<p className="text-xs text-slate-500 leading-relaxed">Familienunternehmen in dritter Generation mit Tradition.</p>
</div>
<div className="p-8 group hover:bg-slate-50 transition-colors">
<div className="flex items-center justify-between mb-4">
<span className="p-2 rounded-lg bg-[#061a40]/5 text-[#061a40] group-hover:bg-[#061a40] group-hover:text-white transition-all">
<span className="iconify" data-icon="lucide:users" data-strokeWidth="1.5" data-width="20"></span>
</span>
</div>
<p className="text-4xl font-semibold text-[#061a40] tracking-tight mb-1">16</p>
<p className="text-sm font-medium text-slate-900 mb-2">Fachkräfte</p>
<p className="text-xs text-slate-500 leading-relaxed">Spezialisiertes Team am Standort Westerwald.</p>
</div>
<div className="p-8 group hover:bg-slate-50 transition-colors">
<div className="flex items-center justify-between mb-4">
<span className="p-2 rounded-lg bg-[#061a40]/5 text-[#061a40] group-hover:bg-[#061a40] group-hover:text-white transition-all">
<span className="iconify" data-icon="lucide:crosshair" data-strokeWidth="1.5" data-width="20"></span>
</span>
</div>
<p className="text-4xl font-semibold text-[#061a40] tracking-tight mb-1">0,1 <span className="text-xl">mm</span></p>
<p className="text-sm font-medium text-slate-900 mb-2">Präzision</p>
<p className="text-xs text-slate-500 leading-relaxed">Toleranzbereich bis in den Hundertstel-Bereich.</p>
</div>
<div className="p-8 group hover:bg-slate-50 transition-colors">
<div className="flex items-center justify-between mb-4">
<span className="p-2 rounded-lg bg-[#061a40]/5 text-[#061a40] group-hover:bg-[#061a40] group-hover:text-white transition-all">
<span className="iconify" data-icon="lucide:truck" data-strokeWidth="1.5" data-width="20"></span>
</span>
</div>
<p className="text-4xl font-semibold text-[#061a40] tracking-tight mb-1">2-3</p>
<p className="text-sm font-medium text-slate-900 mb-2">Wochen Lieferzeit</p>
<p className="text-xs text-slate-500 leading-relaxed">Standardlieferzeit. Express innerhalb von 2 Werktagen möglich.</p>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">

<div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="max-w-2xl">
<span className="inline-block py-1 px-2 rounded bg-blue-50 border border-blue-100 text-blue-600 font-mono text-[10px] uppercase tracking-wider mb-4">Problemstellung</span>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Wenn Standard an Grenzen stößt.</h2>
<p className="text-slate-500 mt-4 text-lg font-light">Technische Herausforderungen erfordern technische Antworten. Wir analysieren Ihre Umgebung und liefern das passende Material.</p>
</div>
<div className="hidden md:block">
<a className="group inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#061a40] transition-colors" href="#">
                            Zur Materialübersicht
                            <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:chevron-right" data-width="16"></span>
</a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6 auto-rows-[minmax(180px,auto)]">

<div className="lg:col-span-7 row-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden group hover:border-slate-300 transition-all relative">
<div className="bg-grid-slate absolute inset-0 opacity-[0.4]"></div>
<div className="absolute top-0 right-0 p-4 opacity-50">
<span className="iconify text-slate-300 group-hover:text-blue-500 transition-colors" data-icon="lucide:shield-check" data-strokeWidth="1" data-width="32"></span>
</div>
<div className="p-8 h-full flex flex-col justify-between relative z-10">
<div>
<div className="inline-flex items-center gap-2 mb-3">
<span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
<span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">Issue: Rapid Degradation</span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Beständigkeit in Extremzonen</h3>
<p className="text-slate-500 text-sm leading-relaxed max-w-md">
                                    Billige Schilder verblassen oder korrodieren. Unsere Lösungen widerstehen aggressiven Reinigungsmitteln, UV-Strahlung und mechanischer Belastung über Jahrzehnte.
                                </p>
</div>

<div className="mt-8 pt-6 border-t border-slate-100">
<div className="grid grid-cols-3 gap-2">
<div className="bg-slate-50 rounded p-2 text-center border border-slate-100 group-hover:border-blue-100 transition-colors">
<span className="block text-xs text-slate-400 mb-1">Temp</span>
<span className="font-mono text-sm font-medium text-slate-700">400°C</span>
</div>
<div className="bg-slate-50 rounded p-2 text-center border border-slate-100 group-hover:border-blue-100 transition-colors">
<span className="block text-xs text-slate-400 mb-1">Chem</span>
<span className="font-mono text-sm font-medium text-slate-700">IP69K</span>
</div>
<div className="bg-slate-50 rounded p-2 text-center border border-slate-100 group-hover:border-blue-100 transition-colors">
<span className="block text-xs text-slate-400 mb-1">UV</span>
<span className="font-mono text-sm font-medium text-slate-700">30Y+</span>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 bg-white rounded-xl border border-slate-200 shadow-sm p-8 group hover:border-slate-300 transition-all flex flex-col justify-center">
<div className="flex items-start justify-between mb-4">
<div>
<h3 className="text-lg font-semibold text-slate-900">Materialunsicherheit?</h3>
<p className="text-xs text-slate-400 mt-1 font-mono">CASE ID: #8291-CONSULT</p>
</div>
<div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
<span className="iconify" data-icon="lucide:microscope" data-width="16"></span>
</div>
</div>
<p className="text-slate-500 text-sm mb-4">Wir ersetzen Raten durch Wissen. Ob V4A Edelstahl, eloxiertes Aluminium oder Spezialkunststoffe – wir definieren den Standard für Ihren Einsatz.</p>
<div className="space-y-2">
<div className="flex items-center gap-2 text-xs text-slate-600">
<span className="iconify text-blue-500" data-icon="lucide:check" data-width="12"></span>
<span>Säurebeständig (V4A 1.4404)</span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-600">
<span className="iconify text-blue-500" data-icon="lucide:check" data-width="12"></span>
<span>Seewasserfest</span>
</div>
</div>
</div>

<div className="lg:col-span-5 bg-[#061a40] rounded-xl shadow-sm p-8 text-white relative overflow-hidden group">

<div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
<div className="relative z-10">
<span className="iconify mb-4 text-blue-300" data-icon="lucide:file-code-2" data-strokeWidth="1.5" data-width="24"></span>
<h3 className="text-lg font-semibold mb-2">Datenchaos</h3>
<p className="text-blue-100/70 text-sm leading-relaxed mb-4">Keine Vektordatei? Kein Problem. Unsere Grafikabteilung digitalisiert Ihre Skizzen und archiviert sie für Nachbestellungen.</p>
<div className="flex gap-2 text-[10px] font-mono uppercase text-blue-300/50">
<span className="border border-white/10 px-1.5 py-0.5 rounded">DXF</span>
<span className="border border-white/10 px-1.5 py-0.5 rounded">AI</span>
<span className="border border-white/10 px-1.5 py-0.5 rounded">PDF</span>
</div>
</div>
</div>

<div className="lg:col-span-6 bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col sm:flex-row items-center gap-6 group hover:border-slate-300 transition-all">
<div className="flex-shrink-0 h-12 w-12 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600">
<span className="iconify" data-icon="lucide:timer-reset" data-strokeWidth="1.5" data-width="24"></span>
</div>
<div>
<h3 className="text-base font-semibold text-slate-900">Zeitdruck &amp; Stillstand</h3>
<p className="text-slate-500 text-sm mt-1">Maschine steht? Wir bieten <span className="text-slate-900 font-medium">48h Express-Fertigung</span> für Notfälle. Flexible Produktion "Just-in-Time".</p>
</div>
</div>

<div className="lg:col-span-6 bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col sm:flex-row items-center gap-6 group hover:border-slate-300 transition-all">
<div className="flex-shrink-0 h-12 w-12 bg-slate-50 rounded-lg flex items-center justify-center text-slate-600 border border-slate-100">
<span className="iconify" data-icon="lucide:workflow" data-strokeWidth="1.5" data-width="24"></span>
</div>
<div>
<h3 className="text-base font-semibold text-slate-900">Alles aus einer Hand</h3>
<p className="text-slate-500 text-sm mt-1">Von der Gravur bis zum Eloxaldruck. Keine externen Dienstleister, keine Verzögerungen, volle Qualitätskontrolle.</p>
</div>
</div>
</div>

<div className="mt-8 text-center border-t border-slate-200 pt-8">
<p className="text-sm text-slate-500">
                        Haben Sie eine spezifische Anforderung? 
                        <a className="text-[#061a40] font-medium hover:underline decoration-blue-300 underline-offset-4" href="#">Sprechen Sie direkt mit der Technik →</a>
</p>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200 relative overflow-hidden">

<div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-20">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-slate-100 rounded-full border border-slate-200">
<span className="iconify text-slate-500" data-icon="lucide:sparkles" data-width="14"></span>
<span className="text-xs font-medium text-slate-600 uppercase tracking-wide">Unser Anspruch</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold text-[#061a40] tracking-tight leading-[1.1] mb-2">Wir finden einen Weg.</h2>
<p className="text-2xl md:text-3xl text-slate-400 font-medium tracking-tight">Auch wenn die Anforderung neu ist.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

<div className="flex flex-col items-start group">
<div className="h-14 w-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 border border-blue-100">
<span className="iconify" data-icon="lucide:hammer" data-strokeWidth="1.25" data-width="28"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">Handwerk, das hält</h3>
<p className="text-slate-500 leading-relaxed text-sm lg:text-base">
                            Schilder mit <strong className="text-slate-700 font-medium">5-30 Jahren Lebensdauer</strong> – gefertigt für die Bedingungen, unter denen sie tatsächlich eingesetzt werden. Kein Kompromiss bei der Haltbarkeit.
                        </p>
</div>

<div className="flex flex-col items-start group">
<div className="h-14 w-14 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 border border-purple-100">
<span className="iconify" data-icon="lucide:layers" data-strokeWidth="1.25" data-width="28"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-purple-700 transition-colors">Alles aus einer Hand</h3>
<p className="text-slate-500 leading-relaxed text-sm lg:text-base">
                            Von der Beratung über die Grafikaufbereitung bis zur Lieferung. Auch wenn Sie selbst <strong className="text-slate-700 font-medium">keine Vorkenntnisse</strong> mitbringen, übernehmen wir den gesamten Prozess.
                        </p>
</div>

<div className="flex flex-col items-start group">
<div className="h-14 w-14 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 border border-amber-100">
<span className="iconify" data-icon="lucide:flask-conical" data-strokeWidth="1.25" data-width="28"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors">Pragmatische Lösungen</h3>
<p className="text-slate-500 leading-relaxed text-sm lg:text-base">
                            Geht nicht, gibt's selten. Wir entwickeln in unserem <strong className="text-slate-700 font-medium">Versuchslabor</strong> auch Lösungen für spezifische Anforderungen, die es so am Markt noch nicht gab.
                        </p>
</div>
</div>

<div className="mt-20 flex justify-center">
<button className="group relative px-8 py-4 bg-[#061a40] text-white text-sm font-semibold rounded-xl hover:bg-blue-900 transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 flex items-center justify-center gap-2">
                        Jetzt Anfrage stellen
                        <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="18"></span>
</button>
</div>
</div>
</section>
</main>

    </>
  );
}
