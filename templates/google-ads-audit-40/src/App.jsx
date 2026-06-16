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
      

<header className="bg-[#071426] text-white py-24 sm:py-32 relative overflow-hidden print:py-16">
<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex justify-between items-start mb-16">
<div className="text-xl font-semibold tracking-tighter text-white/90">
            PROFITLANE
          </div>
<div className="text-sm font-medium tracking-tighter text-white/50 border border-white/10 px-3 py-1 rounded-full uppercase">
            IT4med
          </div>
</div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/80 mb-8 backdrop-blur-sm">
<iconify-icon height="18" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
          Premium Audit
        </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight">
          Google Ads Audit
          <br/>
          IT4med
        </h1>
<p className="text-lg sm:text-xl text-[#F5F7FA]/70 max-w-2xl font-light mb-12">
          Analyse, Erkenntnisse und Handlungsempfehlungen
        </p>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-8 border-t border-white/10 pt-8 mt-8">
<div>
<div className="text-xs text-white/50 mb-1 uppercase tracking-wider font-medium">
              Erstellt durch
            </div>
<div className="text-sm text-white font-medium">Profitlane</div>
</div>
<div>
<div className="text-xs text-white/50 mb-1 uppercase tracking-wider font-medium">
              Auditzeitraum
            </div>
<div className="text-sm text-white font-medium">Letzte 90 Tage</div>
</div>
<div>
<div className="text-xs text-white/50 mb-1 uppercase tracking-wider font-medium">
              Datum
            </div>
<div className="text-sm text-white font-medium">Juni 2026</div>
</div>
</div>
</div>
</header>
<main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24 sm:space-y-32">

<section className="print-break-inside-avoid">
<div className="mb-10">
<h2 className="text-2xl sm:text-3xl font-semibold text-[#071426] tracking-tight mb-4">
            Executive Summary
          </h2>
<p className="text-base leading-relaxed max-w-3xl">
            Das Konto zeigt eine klare Spezialisierung auf Ärzte und
            medizinische Einrichtungen. Die Kampagnen erzeugen Nachfrage und
            relevante Klicks. Der größte Engpass liegt aktuell jedoch nicht im
            Budget, sondern in fehlender Messbarkeit, gemischter Kontostruktur
            und nicht vollständig passender Zuordnung zwischen Suchintention,
            Angebot und Landingpage.
          </p>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
<div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm flex flex-col justify-between">
<div className="text-sm font-medium text-[#5B667A] mb-4 flex items-center gap-2">
<iconify-icon height="20" icon="solar:eye-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
              Impressionen
            </div>
<div className="text-3xl font-semibold text-[#071426] tracking-tight">
              46.550
            </div>
</div>
<div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm flex flex-col justify-between">
<div className="text-sm font-medium text-[#5B667A] mb-4 flex items-center gap-2">
<iconify-icon height="20" icon="solar:cursor-square-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
              Klicks
            </div>
<div className="text-3xl font-semibold text-[#071426] tracking-tight">
              2.322
            </div>
</div>
<div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm flex flex-col justify-between">
<div className="text-sm font-medium text-[#5B667A] mb-4 flex items-center gap-2">
<iconify-icon height="20" icon="solar:wallet-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
              Kosten
            </div>
<div className="text-3xl font-semibold text-[#071426] tracking-tight">
              3.175 €
            </div>
</div>
<div className="bg-white p-6 border border-[#D9534F]/30 rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-[#D9534F]"></div>
<div className="text-sm font-medium text-[#5B667A] mb-4 flex items-center gap-2">
<iconify-icon height="20" icon="solar:target-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
              Conversions
            </div>
<div className="text-3xl font-semibold text-[#D9534F] tracking-tight">
              0
            </div>
</div>
</div>
</section>

<section className="print-break-inside-avoid print-page-break">
<h2 className="text-2xl sm:text-3xl font-semibold text-[#071426] tracking-tight mb-8">
          Audit Scorecard
        </h2>
<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<div className="divide-y divide-gray-100">

<div className="p-6 sm:px-8 sm:py-6 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 bg-gray-50/50">
<div className="sm:w-1/4 shrink-0 flex items-center justify-between sm:block">
<h3 className="text-base font-semibold text-[#071426]">
                  Conversion Tracking
                </h3>
<span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-[#D9534F]/10 text-[#D9534F] sm:mt-2">
                  Kritisch
                </span>
</div>
<div className="sm:w-3/4">
<p className="text-sm text-[#5B667A]">
<span className="font-medium text-[#071426]">Grund:</span>
                  Kein belastbares Lead Tracking, Google optimiert ohne
                  Geschäftsdaten.
                </p>
</div>
</div>

<div className="p-6 sm:px-8 sm:py-6 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 bg-gray-50/50">
<div className="sm:w-1/4 shrink-0 flex items-center justify-between sm:block">
<h3 className="text-base font-semibold text-[#071426]">
                  Kontostruktur
                </h3>
<span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-[#D9534F]/10 text-[#D9534F] sm:mt-2">
                  Kritisch
                </span>
</div>
<div className="sm:w-3/4">
<p className="text-sm text-[#5B667A]">
<span className="font-medium text-[#071426]">Grund:</span>
                  CASC, IT4med und Kundenprojekte laufen im selben Konto. Der
                  Hauptpunkt ist nicht Übersichtlichkeit, sondern Datenqualität.
                  Ein Google Ads Konto sollte möglichst auf ein Geschäftsmodell,
                  eine Website und eine Conversion-Logik ausgerichtet sein.
                </p>
</div>
</div>

<div className="p-6 sm:px-8 sm:py-6 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
<div className="sm:w-1/4 shrink-0 flex items-center justify-between sm:block">
<h3 className="text-base font-semibold text-[#071426]">
                  Kampagnenstruktur
                </h3>
<span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-[#F5A623]/10 text-[#F5A623] sm:mt-2">
                  Hoch
                </span>
</div>
<div className="sm:w-3/4">
<p className="text-sm text-[#5B667A]">
<span className="font-medium text-[#071426]">Grund:</span>
                  Leistungsbereiche sind getrennt, aber Anzeigengruppenstruktur
                  ist ausbaufähig.
                </p>
</div>
</div>

<div className="p-6 sm:px-8 sm:py-6 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
<div className="sm:w-1/4 shrink-0 flex items-center justify-between sm:block">
<h3 className="text-base font-semibold text-[#071426]">Keywords</h3>
<span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-[#F5A623]/10 text-[#F5A623] sm:mt-2">
                  Hoch
                </span>
</div>
<div className="sm:w-3/4">
<p className="text-sm text-[#5B667A]">
<span className="font-medium text-[#071426]">Grund:</span>
                  Teilweise niedrige Qualitätsfaktoren und Suchbegriff-Drift.
                </p>
</div>
</div>

<div className="p-6 sm:px-8 sm:py-6 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
<div className="sm:w-1/4 shrink-0 flex items-center justify-between sm:block">
<h3 className="text-base font-semibold text-[#071426]">
                  Landingpages
                </h3>
<span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-[#F5A623]/10 text-[#F5A623] sm:mt-2">
                  Hoch
                </span>
</div>
<div className="sm:w-3/4">
<p className="text-sm text-[#5B667A]">
<span className="font-medium text-[#071426]">Grund:</span>
                  IT Services und Webdesign passen, Praxisgründung landet auf
                  Startseite.
                </p>
</div>
</div>

<div className="p-6 sm:px-8 sm:py-6 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
<div className="sm:w-1/4 shrink-0 flex items-center justify-between sm:block">
<h3 className="text-base font-semibold text-[#071426]">Anzeigen</h3>
<span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-[#12B8A6]/10 text-[#12B8A6] sm:mt-2">
                  Gut
                </span>
</div>
<div className="sm:w-3/4">
<p className="text-sm text-[#5B667A]">
<span className="font-medium text-[#071426]">Grund:</span>
                  Responsive Suchanzeigen und Zielgruppenansprache vorhanden.
                </p>
</div>
</div>

<div className="p-6 sm:px-8 sm:py-6 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
<div className="sm:w-1/4 shrink-0 flex items-center justify-between sm:block">
<h3 className="text-base font-semibold text-[#071426]">
                  Assets &amp; Extensions
                </h3>
<span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-[#12B8A6]/10 text-[#12B8A6] sm:mt-2">
                  Gut
                </span>
</div>
<div className="sm:w-3/4">
<p className="text-sm text-[#5B667A]">
<span className="font-medium text-[#071426]">Grund:</span>
                  Sitelinks, Snippets, Logo und Assets vorhanden.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="print-break-inside-avoid">
<h2 className="text-2xl sm:text-3xl font-semibold text-[#071426] tracking-tight mb-8">
          Die vier größten Hebel
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-white p-8 border border-gray-200 rounded-xl shadow-sm relative overflow-hidden group hover:border-[#12B8A6]/50 transition-colors">
<div className="text-[#12B8A6] mb-4">
<iconify-icon height="32" icon="solar:target-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#071426] mb-3">
              1. Conversion Tracking
            </h3>
<p className="text-sm leading-relaxed">
              Ohne Tracking optimiert Google blind. Kein Cost per Lead, keine
              Leadqualität, keine Skalierungsgrundlage.
            </p>
</div>
<div className="bg-white p-8 border border-gray-200 rounded-xl shadow-sm relative overflow-hidden group hover:border-[#12B8A6]/50 transition-colors">
<div className="text-[#12B8A6] mb-4">
<iconify-icon height="32" icon="solar:layers-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#071426] mb-3">
              2. Kontentrennung
            </h3>
<p className="text-sm leading-relaxed">
              CASC, IT4med und Kundenprojekte sollten getrennt werden.
              Hauptgrund: saubere Daten, klare Conversion-Signale und
              langfristig bessere Optimierungsfähigkeit.
            </p>
</div>
<div className="bg-white p-8 border border-gray-200 rounded-xl shadow-sm relative overflow-hidden group hover:border-[#12B8A6]/50 transition-colors">
<div className="text-[#12B8A6] mb-4">
<iconify-icon height="32" icon="solar:document-add-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#071426] mb-3">
              3. Praxisgründungs-Landingpage
            </h3>
<p className="text-sm leading-relaxed">
              Die Kampagne adressiert einen relevanten Einstiegsmoment, aber die
              Startseite passt nicht präzise genug zur Suchintention.
            </p>
</div>
<div className="bg-white p-8 border border-gray-200 rounded-xl shadow-sm relative overflow-hidden group hover:border-[#12B8A6]/50 transition-colors">
<div className="text-[#12B8A6] mb-4">
<iconify-icon height="32" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#071426] mb-3">
              4. Qualitätsfaktoren verbessern
            </h3>
<p className="text-sm leading-relaxed">
              Keywords mit niedrigen Qualitätsfaktoren werden seltener
              ausgeliefert und können langfristig höhere CPCs verursachen.
            </p>
</div>
</div>
</section>

<section className="print-break-inside-avoid print-page-break">
<h2 className="text-2xl sm:text-3xl font-semibold text-[#071426] tracking-tight mb-8">
          Kontoarchitektur Analyse
        </h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

<div className="bg-white border border-[#D9534F]/20 rounded-xl p-8 shadow-sm">
<div className="flex items-center gap-2 mb-6">
<div className="w-2 h-2 rounded-full bg-[#D9534F]"></div>
<h3 className="text-lg font-semibold text-[#071426]">Ist-Zustand</h3>
</div>
<div className="border border-gray-200 rounded-lg p-4 mb-6 bg-gray-50">
<div className="font-semibold text-[#071426] text-sm flex items-center gap-2 mb-3">
<iconify-icon height="18" icon="solar:folder-with-files-linear" width="18"></iconify-icon>
                Ein gemeinsames Google Ads Konto
              </div>
<ul className="ml-2 border-l border-gray-300 pl-4 space-y-2 text-sm text-[#5B667A]">
<li className="flex items-center gap-2">
<iconify-icon height="16" icon="solar:folder-linear" width="16"></iconify-icon>
                  CASC
                </li>
<li className="flex items-center gap-2">
<iconify-icon height="16" icon="solar:folder-linear" width="16"></iconify-icon>
                  IT4med
                </li>
<li className="flex items-center gap-2">
<iconify-icon height="16" icon="solar:folder-linear" width="16"></iconify-icon>
                  Kundenkampagnen
                </li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-[#071426] mb-2">
                Problem:
              </h4>
<ul className="space-y-2 text-sm">
<li className="flex items-start gap-2">
<iconify-icon className="text-[#D9534F] shrink-0 mt-0.5" height="18" icon="solar:close-circle-linear" width="18"></iconify-icon>
                  Gemischte Website-Daten
                </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-[#D9534F] shrink-0 mt-0.5" height="18" icon="solar:close-circle-linear" width="18"></iconify-icon>
                  Gemischte Conversion-Signale
                </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-[#D9534F] shrink-0 mt-0.5" height="18" icon="solar:close-circle-linear" width="18"></iconify-icon>
                  Unklare Lernlogik für Google Ads
                </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-[#D9534F] shrink-0 mt-0.5" height="18" icon="solar:close-circle-linear" width="18"></iconify-icon>
                  Langfristig schlechtere Optimierungsfähigkeit
                </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-[#5B667A] shrink-0 mt-0.5" height="18" icon="solar:info-circle-linear" width="18"></iconify-icon>
                  Reporting, Budget und Zugriffe nur als Nebenpunkte
                </li>
</ul>
</div>
</div>

<div className="bg-white border border-[#12B8A6]/30 rounded-xl p-8 shadow-sm">
<div className="flex items-center gap-2 mb-6">
<div className="w-2 h-2 rounded-full bg-[#12B8A6]"></div>
<h3 className="text-lg font-semibold text-[#071426]">
                Empfohlene Zielstruktur
              </h3>
</div>
<div className="border border-gray-200 rounded-lg p-4 mb-6 bg-gray-50">
<div className="font-semibold text-[#071426] text-sm flex items-center gap-2 mb-3">
<iconify-icon className="text-[#12B8A6]" height="18" icon="solar:folder-with-files-linear" width="18"></iconify-icon>
                Google Ads Verwaltungskonto
              </div>
<ul className="ml-2 border-l border-[#12B8A6]/30 pl-4 space-y-2 text-sm text-[#5B667A]">
<li className="flex items-center gap-2">
<iconify-icon className="text-[#12B8A6]" height="16" icon="solar:folder-linear" width="16"></iconify-icon>
                  IT4med Konto
                </li>
<li className="flex items-center gap-2">
<iconify-icon height="16" icon="solar:folder-linear" width="16"></iconify-icon>
                  CASC Konto
                </li>
<li className="flex items-center gap-2">
<iconify-icon height="16" icon="solar:folder-linear" width="16"></iconify-icon>
                  Kundenkonto 1
                </li>
<li className="flex items-center gap-2">
<iconify-icon height="16" icon="solar:folder-linear" width="16"></iconify-icon>
                  Kundenkonto 2
                </li>
</ul>
</div>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
<div className="flex gap-4">
<div className="shrink-0 mt-1">
<iconify-icon className="text-[#12B8A6]" height="24" icon="solar:info-square-linear" width="24"></iconify-icon>
</div>
<p className="text-sm leading-relaxed">
<span className="font-semibold text-[#071426]">Wichtig:</span>
              Der zentrale Grund für die Kontentrennung ist die Datenqualität.
              Ein Google Ads Konto performt langfristig sauberer, wenn es auf
              ein Geschäftsmodell, eine Website und eindeutige Conversion-Ziele
              ausgerichtet ist. Werden mehrere Unternehmen und Websites in einem
              Konto vermischt, entstehen unsaubere Lernsignale.
            </p>
</div>
</div>
</section>

<section className="bg-[#071426] rounded-2xl p-8 sm:p-12 text-white shadow-xl print-break-inside-avoid print:bg-white print:text-black print:border print:border-gray-200">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8 print:text-black">
          Conversion Tracking Analyse
        </h2>
<div className="flex flex-col md:flex-row gap-12 items-start mb-12">
<div className="md:w-1/3 shrink-0">
<div className="text-7xl font-semibold text-[#D9534F] tracking-tighter leading-none mb-4">
              0
            </div>
<div className="text-lg font-medium text-white/80 print:text-black">
              gemessene Leads
            </div>
</div>
<div className="md:w-2/3">
<p className="text-base text-white/80 leading-relaxed print:text-black">
              Das fehlende Conversion Tracking ist der kritischste operative
              Befund des Audits. Aktuell kann nicht bewertet werden, welche
              Kampagnen tatsächlich Anfragen erzeugen. Google Ads erhält keine
              belastbaren Signale für Leadqualität, Formularanfragen oder
              Telefonkontakte.
            </p>
</div>
</div>
<div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden print:border-gray-200">
<table className="w-full text-left text-sm whitespace-nowrap">
<tbody className="divide-y divide-white/10 print:divide-gray-200">
<tr>
<td className="px-6 py-4 font-medium text-white/90 print:text-black">
                  Formular Tracking
                </td>
<td className="px-6 py-4 text-[#D9534F] flex items-center gap-2">
<iconify-icon height="18" icon="solar:close-circle-linear" width="18"></iconify-icon>
                  Nicht vorhanden
                </td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-white/90 print:text-black">
                  Telefon Tracking
                </td>
<td className="px-6 py-4 text-[#D9534F] flex items-center gap-2">
<iconify-icon height="18" icon="solar:close-circle-linear" width="18"></iconify-icon>
                  Nicht vorhanden
                </td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-white/90 print:text-black">
                  GA4 Verbindung
                </td>
<td className="px-6 py-4 text-[#F5A623] flex items-center gap-2">
<iconify-icon height="18" icon="solar:danger-circle-linear" width="18"></iconify-icon>
                  Unklar
                </td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-white/90 print:text-black">
                  Google Ads Conversion
                </td>
<td className="px-6 py-4 text-[#F5A623] flex items-center gap-2 whitespace-normal">
<iconify-icon className="shrink-0" height="18" icon="solar:danger-circle-linear" width="18"></iconify-icon>
                  Website Traffic / Überprüfung erforderlich
                </td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-white/90 print:text-black">
                  Lead Bewertung
                </td>
<td className="px-6 py-4 text-[#D9534F] flex items-center gap-2">
<iconify-icon height="18" icon="solar:close-circle-linear" width="18"></iconify-icon>
                  Nicht vorhanden
                </td>
</tr>
</tbody>
</table>
</div>
<div className="mt-8 p-6 bg-white/5 border border-[#12B8A6]/30 rounded-xl print:border-gray-200">
<h4 className="text-sm font-semibold text-[#12B8A6] mb-4 flex items-center gap-2 uppercase tracking-wider">
<iconify-icon height="18" icon="solar:lightbulb-bolt-linear" width="18"></iconify-icon>
            Empfehlung
          </h4>
<ul className="grid sm:grid-cols-2 gap-y-3 gap-x-8 text-sm text-white/80 print:text-black">
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#12B8A6]"></div>
              Formular Conversions einrichten
            </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#12B8A6]"></div>
              Telefonanrufe erfassen
            </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#12B8A6]"></div>
              GA4 sauber verbinden
            </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#12B8A6]"></div>
              Google Ads Conversion Aktionen definieren
            </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#12B8A6]"></div>
              Leadqualität perspektivisch bewerten
            </li>
</ul>
</div>
</section>

<section className="print-break-inside-avoid print-page-break">
<div className="flex items-center gap-3 mb-8">
<div className="p-2 bg-white rounded-lg border border-gray-200 shadow-sm text-[#071426]">
<iconify-icon height="24" icon="solar:server-square-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h2 className="text-2xl sm:text-3xl font-semibold text-[#071426] tracking-tight">
            Kampagne: IT Services
          </h2>
</div>
<div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
<div className="bg-white p-4 border border-gray-200 rounded-xl shadow-sm text-center">
<div className="text-xs font-medium text-[#5B667A] mb-1">
              Impressionen
            </div>
<div className="text-xl font-semibold text-[#071426] tracking-tight">
              7.003
            </div>
</div>
<div className="bg-white p-4 border border-gray-200 rounded-xl shadow-sm text-center">
<div className="text-xs font-medium text-[#5B667A] mb-1">Klicks</div>
<div className="text-xl font-semibold text-[#071426] tracking-tight">
              207
            </div>
</div>
<div className="bg-white p-4 border border-gray-200 rounded-xl shadow-sm text-center">
<div className="text-xs font-medium text-[#5B667A] mb-1">CTR</div>
<div className="text-xl font-semibold text-[#071426] tracking-tight">
              2,96 %
            </div>
</div>
<div className="bg-white p-4 border border-gray-200 rounded-xl shadow-sm text-center">
<div className="text-xs font-medium text-[#5B667A] mb-1">CPC</div>
<div className="text-xl font-semibold text-[#071426] tracking-tight">
              4,55 €
            </div>
</div>
<div className="bg-white p-4 border border-gray-200 rounded-xl shadow-sm text-center">
<div className="text-xs font-medium text-[#5B667A] mb-1">Kosten</div>
<div className="text-xl font-semibold text-[#071426] tracking-tight">
              942 €
            </div>
</div>
<div className="bg-white p-4 border border-[#D9534F]/30 rounded-xl shadow-sm text-center">
<div className="text-xs font-medium text-[#5B667A] mb-1">
              Conversions
            </div>
<div className="text-xl font-semibold text-[#D9534F] tracking-tight">
              0
            </div>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6 mb-6">
<div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm">
<h3 className="text-sm font-semibold text-[#071426] uppercase tracking-wider mb-4 flex items-center gap-2">
<iconify-icon className="text-[#12B8A6]" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
              Stärken
            </h3>
<ul className="space-y-2 text-sm">
<li className="flex items-start gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#12B8A6] mt-1.5 shrink-0"></div>
                Längste Datenbasis
              </li>
<li className="flex items-start gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#12B8A6] mt-1.5 shrink-0"></div>
                Relevante Suchintention
              </li>
<li className="flex items-start gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#12B8A6] mt-1.5 shrink-0"></div>
                Eigene Service Landingpage
              </li>
<li className="flex items-start gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#12B8A6] mt-1.5 shrink-0"></div>
                115 negative Keywords
              </li>
<li className="flex items-start gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#12B8A6] mt-1.5 shrink-0"></div>
                Assets und Sitelinks vorhanden
              </li>
</ul>
</div>
<div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm">
<h3 className="text-sm font-semibold text-[#071426] uppercase tracking-wider mb-4 flex items-center gap-2">
<iconify-icon className="text-[#F5A623]" height="18" icon="solar:danger-circle-linear" width="18"></iconify-icon>
              Schwächen
            </h3>
<ul className="space-y-2 text-sm">
<li className="flex items-start gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#F5A623] mt-1.5 shrink-0"></div>
                Gebotsstrategie Conversions maximieren ohne Tracking
              </li>
<li className="flex items-start gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#F5A623] mt-1.5 shrink-0"></div>
                Nur eine Anzeigengruppe für mehrere IT-Leistungen
              </li>
<li className="flex items-start gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#F5A623] mt-1.5 shrink-0"></div>
                Teilweise Suchbegriff-Drift zu Wettbewerbern und
                Softwareanbietern
              </li>
<li className="flex items-start gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#F5A623] mt-1.5 shrink-0"></div>
                Niedrige Qualitätsfaktoren bei einzelnen Keywords
              </li>
</ul>
</div>
</div>
<div className="bg-[#E7F7F6] border border-[#12B8A6]/30 p-6 rounded-xl">
<h3 className="text-sm font-semibold text-[#071426] uppercase tracking-wider mb-3">
            Empfehlung
          </h3>
<p className="text-sm text-[#071426] mb-4">
            Bis Tracking sauber läuft, keine Conversion-basierte Gebotsstrategie
            nutzen. Kampagne später thematisch stärker clustern:
          </p>
<div className="flex flex-wrap gap-2">
<span className="bg-white border border-[#12B8A6]/20 px-3 py-1 rounded-full text-xs font-medium text-[#071426]">
              IT Betreuung
            </span>
<span className="bg-white border border-[#12B8A6]/20 px-3 py-1 rounded-full text-xs font-medium text-[#071426]">
              Firewall &amp; Sicherheit
            </span>
<span className="bg-white border border-[#12B8A6]/20 px-3 py-1 rounded-full text-xs font-medium text-[#071426]">
              Backup
            </span>
<span className="bg-white border border-[#12B8A6]/20 px-3 py-1 rounded-full text-xs font-medium text-[#071426]">
              Praxissoftware
            </span>
<span className="bg-white border border-[#12B8A6]/20 px-3 py-1 rounded-full text-xs font-medium text-[#071426]">
              Netzwerk / Server
            </span>
</div>
</div>
</section>

<section className="print-break-inside-avoid">
<div className="flex items-center gap-3 mb-8">
<div className="p-2 bg-white rounded-lg border border-gray-200 shadow-sm text-[#071426]">
<iconify-icon height="24" icon="solar:buildings-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h2 className="text-2xl sm:text-3xl font-semibold text-[#071426] tracking-tight">
            Kampagne: Praxisgründung
          </h2>
</div>
<div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
<div className="bg-white p-4 border border-gray-200 rounded-xl shadow-sm text-center">
<div className="text-xs font-medium text-[#5B667A] mb-1">
              Impressionen
            </div>
<div className="text-xl font-semibold text-[#071426] tracking-tight">
              2.906
            </div>
</div>
<div className="bg-white p-4 border border-gray-200 rounded-xl shadow-sm text-center">
<div className="text-xs font-medium text-[#5B667A] mb-1">Klicks</div>
<div className="text-xl font-semibold text-[#071426] tracking-tight">
              149
            </div>
</div>
<div className="bg-white p-4 border border-gray-200 rounded-xl shadow-sm text-center">
<div className="text-xs font-medium text-[#5B667A] mb-1">CTR</div>
<div className="text-xl font-semibold text-[#071426] tracking-tight">
              5,13 %
            </div>
</div>
<div className="bg-white p-4 border border-gray-200 rounded-xl shadow-sm text-center">
<div className="text-xs font-medium text-[#5B667A] mb-1">CPC</div>
<div className="text-xl font-semibold text-[#071426] tracking-tight">
              3,42 €
            </div>
</div>
<div className="bg-white p-4 border border-gray-200 rounded-xl shadow-sm text-center">
<div className="text-xs font-medium text-[#5B667A] mb-1">Kosten</div>
<div className="text-xl font-semibold text-[#071426] tracking-tight">
              510 €
            </div>
</div>
<div className="bg-white p-4 border border-[#D9534F]/30 rounded-xl shadow-sm text-center">
<div className="text-xs font-medium text-[#5B667A] mb-1">
              Conversions
            </div>
<div className="text-xl font-semibold text-[#D9534F] tracking-tight">
              0
            </div>
</div>
</div>
<div className="bg-white p-6 md:p-8 border border-gray-200 rounded-xl shadow-sm mb-6">
<h3 className="text-base font-semibold text-[#071426] mb-3">
            Strategische Bewertung
          </h3>
<p className="text-sm leading-relaxed mb-6">
            Die Kampagne ist strategisch grundsätzlich nachvollziehbar, weil
            Praxisgründung ein relevanter Einstiegsmoment für IT4med ist. Neue
            Ordinationen benötigen IT-Infrastruktur, Hardware, Telefonie,
            Praxissoftware, Website und laufenden Support.
          </p>
<h3 className="text-base font-semibold text-[#D9534F] mb-3 flex items-center gap-2">
<iconify-icon height="20" icon="solar:danger-circle-linear" width="20"></iconify-icon>
            Problem
          </h3>
<p className="text-sm leading-relaxed mb-6">
            Die Suchintention ist breiter als das aktuelle Angebot auf der
            Startseite. Nutzer erwarten häufig Ablauf, Kosten, Checklisten,
            Unterstützung und konkrete nächste Schritte zur Praxisgründung.
          </p>
<div className="flex items-center gap-2 text-sm bg-gray-50 p-3 rounded-lg border border-gray-100 mb-2">
<span className="font-medium text-[#071426]">Aktuelle Zielseite:</span>
<a className="text-[#12B8A6] hover:underline truncate" href="https://it4med.at/">
              https://it4med.at/
            </a>
</div>
</div>
<div className="bg-[#E7F7F6] border border-[#12B8A6]/30 p-6 rounded-xl">
<h3 className="text-sm font-semibold text-[#071426] uppercase tracking-wider mb-3">
            Empfehlung: Eigene Landingpage
          </h3>
<p className="text-lg font-medium text-[#071426] mb-2">
            „IT für Praxisgründung und Ordinationseröffnung“
          </p>
<p className="text-sm text-[#071426]">
            Diese Seite soll IT4med nicht als allgemeinen Gründungsberater
            positionieren, sondern als IT-Partner, der die technische
            Einrichtung einer neuen Praxis übernimmt.
          </p>
</div>
</section>

<section className="print-break-inside-avoid print-page-break">
<h2 className="text-2xl sm:text-3xl font-semibold text-[#071426] tracking-tight mb-8">
          Praxisgründung Intent Analyse
        </h2>
<div className="flex flex-col md:flex-row gap-4 items-stretch mb-8">
<div className="flex-1 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
<div className="text-sm font-semibold text-[#071426] uppercase tracking-wider mb-4 flex items-center gap-2">
<iconify-icon className="text-[#5B667A]" height="18" icon="solar:user-rounded-linear" width="18"></iconify-icon>
              Nutzer sucht
            </div>
<ul className="space-y-2 text-sm font-medium text-[#071426] mb-6">
<li>"Praxis gründen"</li>
<li>"Ordination eröffnen"</li>
<li>"Praxisgründung Arzt"</li>
<li>"Praxisgründung Wien"</li>
</ul>
<div className="text-sm font-semibold text-[#071426] uppercase tracking-wider mb-4 flex items-center gap-2 pt-4 border-t border-gray-100">
<iconify-icon className="text-[#5B667A]" height="18" icon="solar:checklist-minimalistic-linear" width="18"></iconify-icon>
              Nutzer erwartet
            </div>
<div className="flex flex-wrap gap-2">
<span className="bg-gray-100 px-2.5 py-1 rounded text-xs text-[#5B667A]">
                Ablauf
              </span>
<span className="bg-gray-100 px-2.5 py-1 rounded text-xs text-[#5B667A]">
                Checkliste
              </span>
<span className="bg-gray-100 px-2.5 py-1 rounded text-xs text-[#5B667A]">
                Kosten
              </span>
<span className="bg-gray-100 px-2.5 py-1 rounded text-xs text-[#5B667A]">
                IT-Anforderungen
              </span>
<span className="bg-gray-100 px-2.5 py-1 rounded text-xs text-[#5B667A]">
                Website
              </span>
<span className="bg-gray-100 px-2.5 py-1 rounded text-xs text-[#5B667A]">
                Praxissoftware
              </span>
<span className="bg-gray-100 px-2.5 py-1 rounded text-xs text-[#5B667A]">
                Telefonie
              </span>
<span className="bg-gray-100 px-2.5 py-1 rounded text-xs text-[#5B667A]">
                Datenschutz
              </span>
<span className="bg-gray-100 px-2.5 py-1 rounded text-xs text-[#5B667A]">
                Ansprechpartner
              </span>
</div>
</div>
<div className="hidden md:flex items-center justify-center px-4">
<iconify-icon className="text-gray-300" height="24" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>
<div className="flex-1 bg-white border border-[#D9534F]/30 rounded-xl p-6 shadow-sm relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-[#D9534F]"></div>
<div className="text-sm font-semibold text-[#071426] uppercase tracking-wider mb-4 flex items-center gap-2">
<iconify-icon className="text-[#D9534F]" height="18" icon="solar:window-frame-linear" width="18"></iconify-icon>
              Aktuelle Seite
            </div>
<ul className="space-y-3 text-sm text-[#5B667A] mb-6">
<li className="flex items-center gap-2">
<iconify-icon className="text-[#D9534F]" height="16" icon="solar:close-circle-linear" width="16"></iconify-icon>
                Allgemeine Startseite
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-[#D9534F]" height="16" icon="solar:close-circle-linear" width="16"></iconify-icon>
                IT Services
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-[#D9534F]" height="16" icon="solar:close-circle-linear" width="16"></iconify-icon>
                Website und Marketing
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-[#D9534F]" height="16" icon="solar:close-circle-linear" width="16"></iconify-icon>
                Allgemeine Unternehmensdarstellung
              </li>
</ul>
<div className="bg-[#D9534F]/5 rounded-lg p-4 mt-auto">
<div className="text-xs font-bold text-[#D9534F] uppercase tracking-wider mb-2">
                Risiko
              </div>
<ul className="space-y-1 text-xs text-[#D9534F]/80 font-medium">
<li>• Relevanzverlust</li>
<li>• Niedrigere Conversion-Wahrscheinlichkeit</li>
<li>• Niedrigere Qualitätsfaktoren</li>
<li>• Höhere Streuverluste</li>
</ul>
</div>
</div>
</div>
<div className="bg-[#E7F7F6] border border-[#12B8A6]/30 p-6 sm:p-8 rounded-xl">
<h3 className="text-sm font-semibold text-[#071426] uppercase tracking-wider mb-4 flex items-center gap-2">
<iconify-icon className="text-[#12B8A6]" height="20" icon="solar:pen-new-square-linear" width="20"></iconify-icon>
            Empfehlung: Landingpage Aufbau
          </h3>
<div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
<div>
<span className="font-semibold text-[#071426]">Hero:</span>
              IT für Ihre Praxisgründung
            </div>
<div>
<span className="font-semibold text-[#071426]">Leistungsblöcke:</span>
              Netzwerk, Hardware, Telefonie, Praxissoftware, Datenschutz,
              Website
            </div>
<div>
<span className="font-semibold text-[#071426]">Checkliste:</span>
              als Leadmagnet
            </div>
<div>
<span className="font-semibold text-[#071426]">CTA:</span>
              Erstgespräch anfragen
            </div>
<div className="sm:col-span-2">
<span className="font-semibold text-[#071426]">Vertrauen:</span>
              Referenzen, Erfahrung, Ärzte-Fokus
            </div>
</div>
</div>
</section>

<section className="print-break-inside-avoid">
<div className="flex items-center gap-3 mb-8">
<div className="p-2 bg-white rounded-lg border border-gray-200 shadow-sm text-[#071426]">
<iconify-icon height="24" icon="solar:monitor-smartphone-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h2 className="text-2xl sm:text-3xl font-semibold text-[#071426] tracking-tight">
            Kampagne: Webdesign Ärzte
          </h2>
</div>
<div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
<div className="bg-white p-4 border border-gray-200 rounded-xl shadow-sm text-center">
<div className="text-xs font-medium text-[#5B667A] mb-1">
              Impressionen
            </div>
<div className="text-xl font-semibold text-[#071426] tracking-tight">
              10
            </div>
</div>
<div className="bg-white p-4 border border-gray-200 rounded-xl shadow-sm text-center">
<div className="text-xs font-medium text-[#5B667A] mb-1">Klicks</div>
<div className="text-xl font-semibold text-[#071426] tracking-tight">
              4
            </div>
</div>
<div className="bg-white p-4 border border-gray-200 rounded-xl shadow-sm text-center">
<div className="text-xs font-medium text-[#5B667A] mb-1">CTR</div>
<div className="text-xl font-semibold text-[#071426] tracking-tight">
              40 %
            </div>
</div>
<div className="bg-white p-4 border border-gray-200 rounded-xl shadow-sm text-center">
<div className="text-xs font-medium text-[#5B667A] mb-1">CPC</div>
<div className="text-xl font-semibold text-[#071426] tracking-tight">
              1,68 €
            </div>
</div>
<div className="bg-white p-4 border border-gray-200 rounded-xl shadow-sm text-center">
<div className="text-xs font-medium text-[#5B667A] mb-1">Kosten</div>
<div className="text-xl font-semibold text-[#071426] tracking-tight">
              6,70 €
            </div>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm">
<h3 className="text-base font-semibold text-[#071426] mb-3">
              Bewertung
            </h3>
<p className="text-sm leading-relaxed mb-4">
              Die Kampagne ist zu neu und hat zu wenig Daten für eine belastbare
              Performancebewertung.
            </p>
<h4 className="text-sm font-semibold text-[#12B8A6] mb-2 uppercase tracking-wider">
              Positiv
            </h4>
<ul className="space-y-1 text-sm">
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#12B8A6]"></div>
                Genau passende Keywords
              </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#12B8A6]"></div>
                Eigene Landingpage
              </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#12B8A6]"></div>
                Klare Suchintention
              </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#12B8A6]"></div>
                Gute Angebotsnähe
              </li>
</ul>
</div>
<div className="bg-[#E7F7F6] border border-[#12B8A6]/30 p-6 rounded-xl flex flex-col justify-center">
<h3 className="text-sm font-semibold text-[#071426] uppercase tracking-wider mb-3">
              Empfehlung
            </h3>
<p className="text-sm text-[#071426]">
              Kampagne weiterlaufen lassen, aber erst nach ausreichender
              Datenbasis bewerten. Tracking vorher einrichten.
            </p>
</div>
</div>
</section>

<section className="print-break-inside-avoid print-page-break">
<h2 className="text-2xl sm:text-3xl font-semibold text-[#071426] tracking-tight mb-8">
          Keyword Qualität
        </h2>
<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mb-6">
<div className="overflow-x-auto">
<table className="w-full text-left text-sm whitespace-nowrap">
<thead className="bg-gray-50 border-b border-gray-200 text-[#071426]">
<tr>
<th className="px-6 py-4 font-semibold">Keyword</th>
<th className="px-6 py-4 font-semibold">Kampagne</th>
<th className="px-6 py-4 font-semibold">Qualitätsfaktor</th>
<th className="px-6 py-4 font-semibold">Bewertung</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr>
<td className="px-6 py-4 font-medium text-[#071426]">
                    zahnarzt it
                  </td>
<td className="px-6 py-4 text-[#5B667A]">IT Services</td>
<td className="px-6 py-4 font-medium">2/10</td>
<td className="px-6 py-4">
<span className="inline-flex items-center rounded px-2 py-0.5 text-xs font-medium bg-[#D9534F]/10 text-[#D9534F]">
                      kritisch
                    </span>
</td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-[#071426]">
                    arzt firewall
                  </td>
<td className="px-6 py-4 text-[#5B667A]">IT Services</td>
<td className="px-6 py-4 font-medium">2/10</td>
<td className="px-6 py-4">
<span className="inline-flex items-center rounded px-2 py-0.5 text-xs font-medium bg-[#D9534F]/10 text-[#D9534F]">
                      kritisch
                    </span>
</td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-[#071426]">
                    Praxisgründung Arzt
                  </td>
<td className="px-6 py-4 text-[#5B667A]">Praxisgründung</td>
<td className="px-6 py-4 font-medium">3/10</td>
<td className="px-6 py-4">
<span className="inline-flex items-center rounded px-2 py-0.5 text-xs font-medium bg-[#D9534F]/10 text-[#D9534F]">
                      kritisch
                    </span>
</td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-[#071426]">
                    Praxisgründung Wien
                  </td>
<td className="px-6 py-4 text-[#5B667A]">Praxisgründung</td>
<td className="px-6 py-4 font-medium">3/10</td>
<td className="px-6 py-4">
<span className="inline-flex items-center rounded px-2 py-0.5 text-xs font-medium bg-[#D9534F]/10 text-[#D9534F]">
                      kritisch
                    </span>
</td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-[#071426]">
                    edv arztpraxis
                  </td>
<td className="px-6 py-4 text-[#5B667A]">IT Services</td>
<td className="px-6 py-4 font-medium">4/10</td>
<td className="px-6 py-4">
<span className="inline-flex items-center rounded px-2 py-0.5 text-xs font-medium bg-[#F5A623]/10 text-[#F5A623]">
                      ausbaufähig
                    </span>
</td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-[#071426]">
                    webdesign für ärzte
                  </td>
<td className="px-6 py-4 text-[#5B667A]">Webdesign</td>
<td className="px-6 py-4 font-medium">4/10</td>
<td className="px-6 py-4">
<span className="inline-flex items-center rounded px-2 py-0.5 text-xs font-medium bg-[#F5A623]/10 text-[#F5A623]">
                      ausbaufähig
                    </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<p className="text-sm leading-relaxed max-w-3xl">
          Niedrige Qualitätsfaktoren sind ein Hinweis auf Relevanzprobleme
          zwischen Keyword, Anzeige und Landingpage. Besonders bei
          Praxisgründung bestätigt dies den Bedarf einer eigenen Landingpage.
        </p>
</section>

<section className="print-break-inside-avoid">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl sm:text-3xl font-semibold text-[#071426] tracking-tight">
            Anzeigen und Assets
          </h2>
<div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-[#12B8A6]/10 text-[#12B8A6]">
            Bewertung: Gut
          </div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="bg-white p-6 md:p-8 border border-gray-200 rounded-xl shadow-sm">
<h3 className="text-sm font-semibold text-[#071426] uppercase tracking-wider mb-6 flex items-center gap-2">
<iconify-icon className="text-[#12B8A6]" height="20" icon="solar:check-read-linear" width="20"></iconify-icon>
              Positiv
            </h3>
<ul className="space-y-3 text-sm">
<li className="flex items-center gap-3">
<iconify-icon className="text-[#12B8A6] shrink-0" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                Responsive Suchanzeigen vorhanden
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#12B8A6] shrink-0" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                Zielgruppe Ärzte wird direkt angesprochen
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#12B8A6] shrink-0" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                Sitelinks vorhanden
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#12B8A6] shrink-0" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                Snippet Erweiterungen vorhanden
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#12B8A6] shrink-0" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                Unternehmenslogo vorhanden
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#12B8A6] shrink-0" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                Bildassets vorhanden
              </li>
</ul>
</div>
<div className="bg-gray-50 p-6 md:p-8 border border-gray-200 rounded-xl">
<h3 className="text-sm font-semibold text-[#071426] uppercase tracking-wider mb-6 flex items-center gap-2">
<iconify-icon className="text-[#F5A623]" height="20" icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
              Optimierung
            </h3>
<ul className="space-y-3 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#F5A623] mt-0.5 shrink-0" height="18" icon="solar:round-arrow-right-linear" width="18"></iconify-icon>
                Mehr Vertrauenselemente einbauen
              </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#F5A623] mt-0.5 shrink-0" height="18" icon="solar:round-arrow-right-linear" width="18"></iconify-icon>
                Mehr klare Nutzenargumente formulieren
              </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#F5A623] mt-0.5 shrink-0" height="18" icon="solar:round-arrow-right-linear" width="18"></iconify-icon>
                Klarere Call-to-Actions (CTAs) nutzen
              </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#F5A623] mt-0.5 shrink-0" height="18" icon="solar:round-arrow-right-linear" width="18"></iconify-icon>
                Assets stärker je Kampagne ausrichten
              </li>
</ul>
</div>
</div>
</section>

<section className="print-break-inside-avoid print-page-break">
<h2 className="text-2xl sm:text-3xl font-semibold text-[#071426] tracking-tight mb-8">
          Landingpage Analyse
        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col h-full relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-1 bg-[#12B8A6]"></div>
<h3 className="text-lg font-semibold text-[#071426] mb-2 mt-2">
              IT Services
            </h3>
<div className="text-xs text-[#5B667A] mb-4 truncate">
<a className="hover:underline" href="https://it4med.at/einrichtung-it-system/">
                it4med.at/einrichtung-it-system/
              </a>
</div>
<div className="mb-4 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-[#12B8A6]/10 text-[#12B8A6] self-start">
              gut bis solide
            </div>
<p className="text-sm mt-auto">
<span className="font-medium text-[#071426]">Grund:</span>
              Eigene Leistungsseite vorhanden, klare Angebotsnähe.
            </p>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col h-full relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-[#12B8A6]"></div>
<h3 className="text-lg font-semibold text-[#071426] mb-2 mt-2">
              Webdesign Ärzte
            </h3>
<div className="text-xs text-[#5B667A] mb-4 truncate">
<a className="hover:underline" href="https://it4med.at/arzte-website/">
                it4med.at/arzte-website/
              </a>
</div>
<div className="mb-4 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-[#12B8A6]/10 text-[#12B8A6] self-start">
              gut
            </div>
<p className="text-sm mt-auto">
<span className="font-medium text-[#071426]">Grund:</span>
              Suchintention und Zielseite passen gut zusammen.
            </p>
</div>

<div className="bg-white border border-[#D9534F]/30 rounded-xl p-6 shadow-sm flex flex-col h-full relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-[#D9534F]"></div>
<h3 className="text-lg font-semibold text-[#071426] mb-2 mt-2">
              Praxisgründung
            </h3>
<div className="text-xs text-[#5B667A] mb-4 truncate">
<a className="hover:underline" href="https://it4med.at/">
                it4med.at/
              </a>
</div>
<div className="mb-4 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-[#D9534F]/10 text-[#D9534F] self-start">
              kritisch
            </div>
<p className="text-sm mt-auto">
<span className="font-medium text-[#071426]">Grund:</span>
              Startseite ist zu allgemein und bildet die spezifische
              Suchintention nicht sauber ab.
            </p>
</div>
</div>
</section>

<section className="print-break-inside-avoid">
<h2 className="text-2xl sm:text-3xl font-semibold text-[#071426] tracking-tight mb-12">
          Roadmap
        </h2>
<div className="relative">

<div className="hidden md:block absolute top-4 left-0 w-full h-0.5 bg-gray-200"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative">

<div className="relative pt-2 md:pt-10">
<div className="hidden md:block absolute top-0 left-6 w-3 h-3 rounded-full bg-[#D9534F] border-2 border-white ring-4 ring-white"></div>
<h3 className="text-lg font-semibold text-[#071426] mb-4 flex md:block items-center gap-3">
<span className="md:hidden w-3 h-3 rounded-full bg-[#D9534F]"></span>
                Sofort
              </h3>
<ul className="space-y-2 text-sm">
<li className="flex items-start gap-2">
<div className="w-1 h-1 rounded-full bg-gray-400 mt-2 shrink-0"></div>
                  Conversion Tracking einrichten
                </li>
<li className="flex items-start gap-2">
<div className="w-1 h-1 rounded-full bg-gray-400 mt-2 shrink-0"></div>
                  Gebotsstrategie prüfen
                </li>
<li className="flex items-start gap-2">
<div className="w-1 h-1 rounded-full bg-gray-400 mt-2 shrink-0"></div>
                  Automatische Assets kontrollieren
                </li>
<li className="flex items-start gap-2">
<div className="w-1 h-1 rounded-full bg-gray-400 mt-2 shrink-0"></div>
                  Negative Keywords ergänzen
                </li>
</ul>
</div>

<div className="relative pt-2 md:pt-10">
<div className="hidden md:block absolute top-0 left-6 w-3 h-3 rounded-full bg-[#F5A623] border-2 border-white ring-4 ring-white"></div>
<h3 className="text-lg font-semibold text-[#071426] mb-4 flex md:block items-center gap-3">
<span className="md:hidden w-3 h-3 rounded-full bg-[#F5A623]"></span>
                30 Tage
              </h3>
<ul className="space-y-2 text-sm">
<li className="flex items-start gap-2">
<div className="w-1 h-1 rounded-full bg-gray-400 mt-2 shrink-0"></div>
                  Praxisgründungs-Landingpage konzipieren und live stellen
                </li>
<li className="flex items-start gap-2">
<div className="w-1 h-1 rounded-full bg-gray-400 mt-2 shrink-0"></div>
                  Formular und Telefontracking prüfen
                </li>
<li className="flex items-start gap-2">
<div className="w-1 h-1 rounded-full bg-gray-400 mt-2 shrink-0"></div>
                  Anzeigenbotschaften schärfen
                </li>
</ul>
</div>

<div className="relative pt-2 md:pt-10">
<div className="hidden md:block absolute top-0 left-6 w-3 h-3 rounded-full bg-[#12B8A6] border-2 border-white ring-4 ring-white"></div>
<h3 className="text-lg font-semibold text-[#071426] mb-4 flex md:block items-center gap-3">
<span className="md:hidden w-3 h-3 rounded-full bg-[#12B8A6]"></span>
                60 Tage
              </h3>
<ul className="space-y-2 text-sm">
<li className="flex items-start gap-2">
<div className="w-1 h-1 rounded-full bg-gray-400 mt-2 shrink-0"></div>
                  IT Services in thematische Cluster aufteilen
                </li>
<li className="flex items-start gap-2">
<div className="w-1 h-1 rounded-full bg-gray-400 mt-2 shrink-0"></div>
                  Erste Conversion-Daten auswerten
                </li>
<li className="flex items-start gap-2">
<div className="w-1 h-1 rounded-full bg-gray-400 mt-2 shrink-0"></div>
                  Webdesign Kampagne bewerten
                </li>
</ul>
</div>

<div className="relative pt-2 md:pt-10">
<div className="hidden md:block absolute top-0 left-6 w-3 h-3 rounded-full bg-[#071426] border-2 border-white ring-4 ring-white"></div>
<h3 className="text-lg font-semibold text-[#071426] mb-4 flex md:block items-center gap-3">
<span className="md:hidden w-3 h-3 rounded-full bg-[#071426]"></span>
                90 Tage
              </h3>
<ul className="space-y-2 text-sm">
<li className="flex items-start gap-2">
<div className="w-1 h-1 rounded-full bg-gray-400 mt-2 shrink-0"></div>
                  Kontenstruktur sauber trennen
                </li>
<li className="flex items-start gap-2">
<div className="w-1 h-1 rounded-full bg-gray-400 mt-2 shrink-0"></div>
                  MCC Struktur aufbauen
                </li>
<li className="flex items-start gap-2">
<div className="w-1 h-1 rounded-full bg-gray-400 mt-2 shrink-0"></div>
                  Skalierung anhand echter Conversion-Daten vorbereiten
                </li>
</ul>
</div>
</div>
</div>
</section>

<section className="print-break-inside-avoid print-page-break">
<h2 className="text-2xl sm:text-3xl font-semibold text-[#071426] tracking-tight mb-8">
          Erwarteter Business Impact
        </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
<div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm">
<iconify-icon className="text-[#071426] mb-4" height="24" icon="solar:chart-line-up-linear" width="24"></iconify-icon>
<h3 className="text-base font-semibold text-[#071426] mb-2">
              Messbarkeit
            </h3>
<p className="text-sm">
              Von 0 gemessenen Leads zu transparenten Kosten pro Anfrage.
            </p>
</div>
<div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm">
<iconify-icon className="text-[#071426] mb-4" height="24" icon="solar:pie-chart-2-linear" width="24"></iconify-icon>
<h3 className="text-base font-semibold text-[#071426] mb-2">
              Effizienz
            </h3>
<p className="text-sm">
              Budget wird nicht mehr nur nach Klicks, sondern nach
              Geschäftsergebnissen bewertet.
            </p>
</div>
<div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm">
<iconify-icon className="text-[#071426] mb-4" height="24" icon="solar:star-fall-linear" width="24"></iconify-icon>
<h3 className="text-base font-semibold text-[#071426] mb-2">
              Qualitätsfaktoren
            </h3>
<p className="text-sm">
              Bessere Relevanz kann CPCs senken und Auslieferung verbessern.
            </p>
</div>
<div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm">
<iconify-icon className="text-[#071426] mb-4" height="24" icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
<h3 className="text-base font-semibold text-[#071426] mb-2">
              Leadqualität
            </h3>
<p className="text-sm">
              Bessere Zielseiten und klarere Intention erhöhen die
              Wahrscheinlichkeit relevanter Anfragen.
            </p>
</div>
<div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm">
<iconify-icon className="text-[#071426] mb-4" height="24" icon="solar:rocket-linear" width="24"></iconify-icon>
<h3 className="text-base font-semibold text-[#071426] mb-2">
              Skalierbarkeit
            </h3>
<p className="text-sm">
              Getrennte Konten schaffen eine belastbare Struktur für Wachstum.
            </p>
</div>
</div>
</section>

<section className="print-break-inside-avoid bg-white border border-gray-200 rounded-2xl p-8 sm:p-12 shadow-sm">
<h2 className="text-2xl sm:text-3xl font-semibold text-[#071426] tracking-tight mb-6">
          Fazit &amp; Nächste Schritte
        </h2>
<p className="text-base leading-relaxed mb-10 max-w-4xl">
          IT4med verfügt über eine solide Grundlage und eine klare
          Spezialisierung auf medizinische Zielgruppen. Die größten Potenziale
          liegen nicht in höheren Budgets, sondern in Messbarkeit, sauberer
          Kontostruktur und präziserer Verbindung zwischen Suchintention,
          Anzeige und Landingpage.
        </p>
<div className="grid sm:grid-cols-2 gap-8 mb-12">
<div className="flex gap-4">
<div className="shrink-0 w-8 h-8 rounded-full bg-[#071426] text-white flex items-center justify-center font-semibold text-sm">
              1
            </div>
<div>
<h3 className="font-semibold text-[#071426] mb-1">Priorität 1</h3>
<p className="text-sm text-[#5B667A]">Tracking einrichten</p>
</div>
</div>
<div className="flex gap-4">
<div className="shrink-0 w-8 h-8 rounded-full bg-[#071426] text-white flex items-center justify-center font-semibold text-sm">
              2
            </div>
<div>
<h3 className="font-semibold text-[#071426] mb-1">Priorität 2</h3>
<p className="text-sm text-[#5B667A]">
                Kontostruktur datenlogisch trennen
              </p>
</div>
</div>
<div className="flex gap-4">
<div className="shrink-0 w-8 h-8 rounded-full bg-[#071426] text-white flex items-center justify-center font-semibold text-sm">
              3
            </div>
<div>
<h3 className="font-semibold text-[#071426] mb-1">Priorität 3</h3>
<p className="text-sm text-[#5B667A]">
                Praxisgründungs-Landingpage entwickeln
              </p>
</div>
</div>
<div className="flex gap-4">
<div className="shrink-0 w-8 h-8 rounded-full bg-[#071426] text-white flex items-center justify-center font-semibold text-sm">
              4
            </div>
<div>
<h3 className="font-semibold text-[#071426] mb-1">Priorität 4</h3>
<p className="text-sm text-[#5B667A]">
                Kampagnenstruktur und Qualitätsfaktoren verbessern
              </p>
</div>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col items-center text-center">
<div className="text-xl font-semibold tracking-tighter text-[#071426] mb-2">
            PROFITLANE
          </div>
<p className="text-sm text-[#5B667A]">
            Google Ads mit Struktur, Fokus und klarer Steuerung.
          </p>
</div>
</section>
</main>
<footer className="bg-[#071426] py-12 mt-24 print:hidden">
<div className="flex flex-col items-center justify-center mb-10">
<button className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#12B8A6] hover:bg-[#0f9d8e] text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 mb-3" onclick="window.print()">
<iconify-icon height="22" icon="solar:file-download-linear" width="22"></iconify-icon>
          PDF Download
        </button>
<div className="text-xs text-white/50 font-medium flex items-center gap-1.5">
<iconify-icon height="14" icon="solar:info-circle-linear" width="14"></iconify-icon>
          Alle Bereiche optimiert als Präsentation (17 Folien)
        </div>
</div>
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="text-sm text-white/50 mb-2">Erstellt für IT4med</div>
<div className="text-xs text-white/30 uppercase tracking-widest font-semibold">
          © 2026 Profitlane
        </div>
</div>
</footer>

    </>
  );
}
