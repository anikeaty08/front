import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex flex-col min-h-screen" id="app">

<header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
<div className="mx-auto max-w-[1600px] px-6">
<nav className="flex items-center gap-2 py-3 text-sm text-slate-600">
<button className="flex items-center gap-1 hover:text-slate-900 transition-colors">
<i className="w-4 h-4" data-lucide="folder"></i>
              Dossiers
            </button>
<i className="w-4 h-4 text-slate-400" data-lucide="chevron-right"></i>
<button className="hover:text-slate-900 transition-colors">DONDZA — Verviers</button>
<i className="w-4 h-4 text-slate-400" data-lucide="chevron-right"></i>
<span className="text-slate-900">Document</span>

<span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700" id="masking-summary">
<i className="w-3.5 h-3.5" data-lucide="shield-off"></i>
<span><span id="masked-count">0</span> éléments masqués à l’export</span>
<span className="text-slate-400">•</span>
<button className="inline-flex items-center gap-1 hover:text-slate-900" title="Un résumé des éléments masqués sera inclus à l’export, avec liens vers le journal interne">
<i className="w-3.5 h-3.5" data-lucide="history"></i> Journal
              </button>
</span>
</nav>
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pb-4">
<div className="flex items-start md:items-center gap-4">
<div className="flex flex-col">
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                  Annexe 9 — Rue des Cloutiers 21A, Verviers
                </h1>
<div className="mt-1 flex flex-wrap items-center gap-2 text-sm">
<span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 bg-slate-100 text-slate-700 border border-slate-200" id="doc-status">
<i className="w-4 h-4 text-slate-500" data-lucide="dot"></i> Brouillon
                  </span>
<span className="text-slate-400">•</span>
<span className="text-slate-600">Dernier check: il y a 12 min</span>
<span className="text-slate-400">•</span>
<button className="inline-flex items-center gap-1.5 text-slate-700 hover:text-slate-900 transition-colors">
<i className="w-4 h-4" data-lucide="history"></i> Journal
                  </button>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<div className="hidden md:flex items-center gap-2">
<label className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 cursor-pointer select-none">
<input className="peer sr-only" id="toggle-heatmap" type="checkbox"/>
<span className="w-9 h-5 bg-slate-200 rounded-full relative transition-colors peer-checked:bg-slate-900">
<span className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform peer-checked:translate-x-4"></span>
</span>
                  Afficher la heatmap
                </label>
<label className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 cursor-pointer select-none">
<input checked="" className="peer sr-only" id="toggle-claims" type="checkbox"/>
<span className="w-9 h-5 bg-slate-200 rounded-full relative transition-colors peer-checked:bg-slate-900">
<span className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform peer-checked:translate-x-4"></span>
</span>
                  Afficher les claims
                </label>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50" id="export-proof">
<i className="w-4 h-4" data-lucide="archive"></i> Registre de preuves
                </button>
<button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 md:px-4 py-2 text-sm hover:bg-slate-800 active:scale-[0.99]" id="export-pdf">
<i className="w-4 h-4" data-lucide="file-down"></i> Export PDF
                </button>
</div>
</div>
</div>
</div>
</header>

<main className="flex-1">
<div className="mx-auto max-w-[1600px] px-6 py-6">
<div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(720px,880px)_320px] gap-6">

<aside className="print:hidden">
<div className="sticky top-[76px] space-y-4">
<div className="flex items-center justify-between">
<h2 className="text-sm font-medium text-slate-900 tracking-tight">Ancrages</h2>
<span className="text-xs text-slate-500">Sources</span>
</div>
<div className="space-y-3" id="anchors-list">

<div className="group rounded-lg border border-slate-200 hover:border-slate-300 bg-white p-3 transition-colors anchor-card" data-anchor-id="a1" data-claim="c1 c4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-600" data-lucide="map"></i>
<span className="text-sm font-medium text-slate-900">Plan de secteur: Habitat</span>
</div>
<span className="text-[11px] text-slate-500">PDS</span>
</div>
<p className="mt-1 text-xs text-slate-600 line-clamp-2">Extrait (WalOnMap) — Feuille 43/7, arrêté 14.05.1979, zone d'habitat.</p>
<div className="mt-2 flex items-center justify-between">
<a className="inline-flex items-center gap-1 text-xs text-slate-700 hover:text-slate-900" href="#">
<i className="w-3.5 h-3.5" data-lucide="link"></i> Ouvrir la source
                      </a>
<label className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 cursor-pointer">
<input checked="" className="sr-only anchor-privacy" type="checkbox"/>
<i className="w-3.5 h-3.5 text-slate-600 privacy-icon" data-lucide="eye"></i>
<span>Public à l’export</span>
</label>
</div>
<div className="mt-2 flex flex-wrap gap-1.5">
<span className="rounded-full bg-slate-100 text-slate-700 border border-slate-200 px-2 py-0.5 text-[10px]">ROUSSEAU p.3</span>
<span className="rounded-full bg-slate-100 text-slate-700 border border-slate-200 px-2 py-0.5 text-[10px]">DEVOS Cadre 5</span>
<span className="rounded-full bg-slate-100 text-slate-700 border border-slate-200 px-2 py-0.5 text-[10px]">VOSS Cadre 5</span>
<span className="rounded-full bg-slate-100 text-slate-700 border border-slate-200 px-2 py-0.5 text-[10px]">DONDZA</span>

<button className="anchor-claim-chip inline-flex items-center gap-1 rounded-full bg-sky-50 text-sky-800 border border-sky-200 px-2 py-0.5 text-[10px] hover:bg-sky-100" data-claim-id="c1" title="Filtrer les points sur C‑01">C‑01</button>
<button className="anchor-claim-chip inline-flex items-center gap-1 rounded-full bg-sky-50 text-sky-800 border border-sky-200 px-2 py-0.5 text-[10px] hover:bg-sky-100" data-claim-id="c4" title="Filtrer les points sur C‑04">C‑04</button>
</div>
</div>
<div className="group rounded-lg border border-slate-200 hover:border-slate-300 bg-white p-3 transition-colors anchor-card" data-anchor-id="a2" data-claim="c2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-600" data-lucide="file-text"></i>
<span className="text-sm font-medium text-slate-900">GCU — Parc résidentiel</span>
</div>
<span className="text-[11px] text-slate-500">GCU</span>
</div>
<p className="mt-1 text-xs text-slate-600 line-clamp-2">Règlement communal d’urbanisme (art. 12, 14) — prescriptions volumétriques et matériaux.</p>
<div className="mt-2 flex items-center justify-between">
<a className="inline-flex items-center gap-1 text-xs text-slate-700 hover:text-slate-900" href="#">
<i className="w-3.5 h-3.5" data-lucide="link"></i> Voir l’extrait
                      </a>
<label className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 cursor-pointer">
<input className="sr-only anchor-privacy" type="checkbox"/>
<i className="w-3.5 h-3.5 text-slate-600 privacy-icon" data-lucide="eye-off"></i>
<span>Masqué à l’export</span>
</label>
</div>
<div className="mt-2 flex flex-wrap gap-1.5">
<span className="rounded-full bg-slate-100 text-slate-700 border border-slate-200 px-2 py-0.5 text-[10px]">ROUSSEAU</span>
<span className="rounded-full bg-slate-100 text-slate-700 border border-slate-200 px-2 py-0.5 text-[10px]">DEVOS</span>
<button className="anchor-claim-chip inline-flex items-center gap-1 rounded-full bg-sky-50 text-sky-800 border border-sky-200 px-2 py-0.5 text-[10px] hover:bg-sky-100" data-claim-id="c2">C‑02</button>
</div>
</div>
<div className="group rounded-lg border border-slate-200 hover:border-slate-300 bg-white p-3 transition-colors anchor-card" data-anchor-id="a3" data-claim="c3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-600" data-lucide="picture-in-picture-2"></i>
<span className="text-sm font-medium text-slate-900">Photos — état existant</span>
</div>
<span className="text-[11px] text-slate-500">Images</span>
</div>
<div className="mt-2 grid grid-cols-3 gap-1">
<img alt="Photo 1" className="rounded-md border border-slate-200 aspect-[4/3] object-cover" src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img alt="Photo 2" className="rounded-md border border-slate-200 aspect-[4/3] object-cover" src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img alt="Photo 3" className="rounded-md border border-slate-200 aspect-[4/3] object-cover" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-2 flex items-center justify-between">
<a className="inline-flex items-center gap-1 text-xs text-slate-700 hover:text-slate-900" href="#">
<i className="w-3.5 h-3.5" data-lucide="zoom-in"></i> Ouvrir
                      </a>
<span className="text-[11px] text-slate-500">DEVOS, VOSS</span>
</div>
<div className="mt-2 flex flex-wrap gap-1.5">
<button className="anchor-claim-chip inline-flex items-center gap-1 rounded-full bg-sky-50 text-sky-800 border border-sky-200 px-2 py-0.5 text-[10px] hover:bg-sky-100" data-claim-id="c3">C‑03</button>
</div>
</div>
<div className="group rounded-lg border border-slate-200 hover:border-slate-300 bg-white p-3 transition-colors anchor-card" data-anchor-id="a4" data-claim="">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-600" data-lucide="layers"></i>
<span className="text-sm font-medium text-slate-900">PCA — Merbraine</span>
</div>
<span className="text-[11px] text-slate-500">PCA</span>
</div>
<p className="mt-1 text-xs text-slate-600">Extrait (titre, référence, date) — prescriptions d’alignement.</p>
<div className="mt-2 flex items-center justify-between">
<a className="inline-flex items-center gap-1 text-xs text-slate-700 hover:text-slate-900" href="#">
<i className="w-3.5 h-3.5" data-lucide="link"></i> Voir la carte
                      </a>
<label className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 cursor-pointer">
<input checked="" className="sr-only anchor-privacy" type="checkbox"/>
<i className="w-3.5 h-3.5 text-slate-600 privacy-icon" data-lucide="eye"></i>
<span>Public à l’export</span>
</label>
</div>
<div className="mt-2 flex flex-wrap gap-1.5">
<span className="rounded-full bg-slate-100 text-slate-700 border border-slate-200 px-2 py-0.5 text-[10px]">DEVOS</span>
</div>
</div>
<div className="group rounded-lg border border-slate-200 hover:border-slate-300 bg-white p-3 transition-colors anchor-card" data-anchor-id="a5" data-claim="c4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-600" data-lucide="scroll-text"></i>
<span className="text-sm font-medium text-slate-900">SSC — Schéma communal</span>
</div>
<span className="text-[11px] text-slate-500">SSC</span>
</div>
<p className="mt-1 text-xs text-slate-600 line-clamp-2">Objectifs d’intégration paysagère et volumétrique.</p>
<div className="mt-2 flex items-center justify-between">
<a className="inline-flex items-center gap-1 text-xs text-slate-700 hover:text-slate-900" href="#">
<i className="w-3.5 h-3.5" data-lucide="link"></i> Lire
                      </a>
<label className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 cursor-pointer">
<input className="sr-only anchor-privacy" type="checkbox"/>
<i className="w-3.5 h-3.5 text-slate-600 privacy-icon" data-lucide="eye-off"></i>
<span>Masqué à l’export</span>
</label>
</div>
<div className="mt-2 flex flex-wrap gap-1.5">
<span className="rounded-full bg-slate-100 text-slate-700 border border-slate-200 px-2 py-0.5 text-[10px]">DEVOS</span>
<button className="anchor-claim-chip inline-flex items-center gap-1 rounded-full bg-sky-50 text-sky-800 border border-sky-200 px-2 py-0.5 text-[10px] hover:bg-sky-100" data-claim-id="c4">C‑04</button>
</div>
</div>
</div>

<div className="mt-6 rounded-xl border border-slate-200 p-3">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-slate-900 tracking-tight">Progression</h3>
<span className="text-xs text-slate-500">Auto</span>
</div>
<div className="mt-2">
<div>
<div className="relative">
<div className="h-[120px] w-full rounded-md border border-slate-200 bg-white p-2">
<div>
<div>
<div></div>
</div>
<div className="relative">
<div className="rounded-md overflow-hidden bg-white">
<div className="p-0">
<div className="rounded-md border border-slate-200">
<div className="p-2">
<div>
<div>
<div className="relative">
<div className="">
<div className="">
<div className="relative">
<div>
<div>
<div className="relative">
<div className="">
<div className="">
<div className="relative">
<div>
<div className="relative">

<div className="h-[100px]">
<canvas id="chart-progress"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-2 space-y-1">
<p className="text-xs text-slate-600">Champs IA confirmés: <span className="font-medium text-slate-900" id="metric-confirmed">0</span>%</p>
<p className="text-xs text-slate-600">% de points Bloquants résolus: <span className="font-medium text-slate-900" id="metric-bloquants">0</span>%</p>
<p className="text-xs text-slate-600">Pièces manquantes (Cadre 13): <span className="font-medium text-slate-900" id="metric-missing">0</span></p>
</div>
</div>
</div>
</aside>

<section className="min-w-0 print:w-full" id="document">

<div className="hidden mb-4 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700" id="empty-state">
<div className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5 text-slate-700" data-lucide="lightbulb"></i>
<div className="text-sm">
                    Ajoutez une description ou des images pour démarrer la pré‑complétude.
                  </div>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-5 mb-4">
<div className="flex items-center justify-between">
<h2 className="text-lg md:text-xl font-semibold tracking-tight">Cadre 1 — Identification</h2>
<span className="text-xs text-slate-500">Auto-rempli <span className="ml-1 inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-1.5 py-0.5"><span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span><span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span><span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span></span></span>
</div>
<div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
<div className="space-y-1">
<label className="text-slate-600">Adresse</label>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900/10" value="Rue des Cloutiers 21A, 4800 Verviers"/>
</div>
<div className="space-y-1">
<label className="text-slate-600">Référence parcelle</label>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900/10" value="Section B — 1234c"/>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-5 mb-4" data-confidence="0.78" data-heatmap="">
<div className="flex items-center justify-between">
<h2 className="text-lg md:text-xl font-semibold tracking-tight">Cadre 2 — Objet de la demande</h2>
<div className="flex items-center gap-2">
<span className="chip-proposed inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700" title="Proposé par IA">
<i className="w-3.5 h-3.5" data-lucide="bot"></i> Proposé
                      <span className="ml-1 inline-flex items-center gap-0.5" title="Accessibilité heatmap (densité)"><span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span><span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span><span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span></span>
</span>
<button className="text-xs text-slate-700 hover:text-slate-900 underline" id="btn-why-cadre2">Pourquoi ?</button>
<button className="text-xs text-slate-700 hover:text-slate-900 underline" data-claims="c1 c2 c3 c4" data-preview-anchors="">Voir les ancrages (3)</button>
</div>
</div>

<div className="hidden mt-2 rounded-lg border border-slate-200 bg-white p-3 text-xs text-slate-700" id="why-cadre2">
<div className="flex items-center gap-2 mb-1">
<i className="w-4 h-4 text-slate-700" data-lucide="circle-help"></i>
<span className="font-medium text-slate-900">Pourquoi cette déduction ?</span>
</div>
<ul className="list-disc pl-5 space-y-1">
<li>Inducteurs détectés: “ITE”, “12 cm”, “façade rue”, “véranda non chauffée”.</li>
<li>Citations: [Photos — état existant], [PDS Habitat], [GCU art. 14].</li>
<li>ID claims reliés: C‑01, C‑02, C‑03, C‑04.</li>
</ul>
</div>

<div className="anchors-preview hidden mt-2 rounded-lg border border-slate-200 bg-white p-3 text-xs text-slate-700"></div>
<div className="mt-3 space-y-2" data-claim-ref="c1 c2 c3 c4">
<div className="flex items-center justify-between">
<label className="text-sm text-slate-700" htmlFor="cadre2-description">Description (libre)</label>

<div className="flex items-center gap-1">
<button className="field-claim-chip rounded-full border border-sky-200 bg-sky-50 text-sky-700 text-[10px] px-2 py-0.5 hover:bg-sky-100" data-claim-id="c1">C‑01</button>
<button className="field-claim-chip rounded-full border border-sky-200 bg-sky-50 text-sky-700 text-[10px] px-2 py-0.5 hover:bg-sky-100" data-claim-id="c2">C‑02</button>
<button className="field-claim-chip rounded-full border border-sky-200 bg-sky-50 text-sky-700 text-[10px] px-2 py-0.5 hover:bg-sky-100" data-claim-id="c3">C‑03</button>
<button className="field-claim-chip rounded-full border border-sky-200 bg-sky-50 text-sky-700 text-[10px] px-2 py-0.5 hover:bg-sky-100" data-claim-id="c4">C‑04</button>
</div>
</div>
<textarea className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10" id="cadre2-description" placeholder="Décrivez le projet..." rows="4">Isolation thermique par l’extérieur (ITE) de 12 cm en façade rue, démolition d’un muret + pose d’une palissade en limite, peinture des châssis (gris quartz), ajout d’une véranda non chauffée côté jardin. Aucune extension chauffée prévue.</textarea>

<div className="mt-3 flex flex-wrap gap-2" id="cadre2-claims">
<span className="claim inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2 py-1 text-xs text-slate-800 hover:ring-2 hover:ring-sky-300" data-claim-id="c1" data-confidence="0.78" data-origin="photo pds gcu" data-type="fait" title="Dû à : [Photos 2], [PDS], [GCU art.14]">
<span className="rounded bg-sky-50 text-sky-700 border border-sky-200 px-1 py-0.5 text-[10px]">C‑01</span>
<i className="w-3.5 h-3.5 text-emerald-600" data-lucide="check-circle-2"></i> ITE 12 cm en façade rue
                      <span className="ml-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 px-1 py-0.5 text-[10px]">fait</span>
<span className="ml-1 inline-flex items-center gap-0.5 text-[10px] text-slate-600"><i className="w-3.5 h-3.5" data-lucide="camera"></i><i className="w-3.5 h-3.5" data-lucide="map"></i><i className="w-3.5 h-3.5" data-lucide="book-text"></i></span>
</span>
<span className="claim inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2 py-1 text-xs text-slate-800 hover:ring-2 hover:ring-sky-300" data-claim-id="c2" data-confidence="0.66" data-origin="gcu" data-type="fait" title="Dû à : [GCU art.14]">
<span className="rounded bg-sky-50 text-sky-700 border border-sky-200 px-1 py-0.5 text-[10px]">C‑02</span>
<i className="w-3.5 h-3.5 text-emerald-600" data-lucide="check-circle-2"></i> Peinture châssis gris quartz
                      <span className="ml-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 px-1 py-0.5 text-[10px]">fait</span>
<span className="ml-1 inline-flex items-center gap-0.5 text-[10px] text-slate-600"><i className="w-3.5 h-3.5" data-lucide="book-text"></i></span>
</span>
<span className="claim inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2 py-1 text-xs text-slate-800 hover:ring-2 hover:ring-sky-300" data-claim-id="c3" data-confidence="0.85" data-origin="photo" data-type="fait" title="Dû à : [Photos — état existant]">
<span className="rounded bg-sky-50 text-sky-700 border border-sky-200 px-1 py-0.5 text-[10px]">C‑03</span>
<i className="w-3.5 h-3.5 text-emerald-600" data-lucide="check-circle-2"></i> Véranda non chauffée
                      <span className="ml-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 px-1 py-0.5 text-[10px]">fait</span>
<span className="ml-1 inline-flex items-center gap-0.5 text-[10px] text-slate-600"><i className="w-3.5 h-3.5" data-lucide="camera"></i></span>
</span>
<span className="claim inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2 py-1 text-xs text-slate-800 hover:ring-2 hover:ring-sky-300" data-claim-id="c4" data-confidence="0.52" data-origin="pds ssc" data-type="opinion" title="Dû à : [PDS], [SSC]">
<span className="rounded bg-sky-50 text-sky-700 border border-sky-200 px-1 py-0.5 text-[10px]">C‑04</span>
<i className="w-3.5 h-3.5 text-amber-600" data-lucide="help-circle"></i> Pas de modification de l’enveloppe
                      <span className="ml-1 rounded bg-amber-50 text-amber-700 border border-amber-200 px-1 py-0.5 text-[10px]">opinion</span>
<span className="ml-1 inline-flex items-center gap-0.5 text-[10px] text-slate-600"><i className="w-3.5 h-3.5" data-lucide="map"></i><i className="w-3.5 h-3.5" data-lucide="scroll-text"></i></span>
</span>
</div>

<div className="mt-4 rounded-lg border border-slate-200 p-3">
<h3 className="text-sm font-medium text-slate-900 tracking-tight">Questions SPW (contextuelles)</h3>
<div className="mt-3 space-y-3 text-sm">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<span>La façade visible depuis l’espace public est‑elle modifiée ?</span>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-50 border border-slate-200 px-2 py-0.5 text-xs text-slate-700">Pré‑rempli</span>
</div>
</div>
<div className="flex items-center gap-2">
<label className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 cursor-pointer hover:bg-slate-50">
<input checked="" className="sr-only" name="q-facade" type="radio"/>
<span className="w-4 h-4 rounded-full border border-slate-300 inline-grid place-items-center">
<span className="w-2 h-2 rounded-full bg-slate-900"></span>
</span>
                            Oui (ITE en façade rue)
                          </label>
<label className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 cursor-pointer hover:bg-slate-50">
<input className="sr-only" name="q-facade" type="radio"/>
<span className="w-4 h-4 rounded-full border border-slate-300 inline-grid place-items-center"></span>
                            Non
                          </label>
</div>
<div className="flex items-center gap-2">
</div></div></div></div></div></div></section></div></div></main></div>
    </>
  );
}
