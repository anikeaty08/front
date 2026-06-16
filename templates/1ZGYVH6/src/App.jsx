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
<button className="inline-flex items-center gap-1 hover:text-slate-900">
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

<span className="rounded-full bg-sky-50 text-sky-800 border border-sky-200 px-2 py-0.5 text-[10px]">C‑01</span>
<span className="rounded-full bg-sky-50 text-sky-800 border border-sky-200 px-2 py-0.5 text-[10px]">C‑04</span>
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
<span className="rounded-full bg-sky-50 text-sky-800 border border-sky-200 px-2 py-0.5 text-[10px]">C‑02</span>
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
<span className="rounded-full bg-sky-50 text-sky-800 border border-sky-200 px-2 py-0.5 text-[10px]">C‑03</span>
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
<span className="rounded-full bg-sky-50 text-sky-800 border border-sky-200 px-2 py-0.5 text-[10px]">C‑04</span>
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
<p className="mt-2 text-xs text-slate-600">Champs IA confirmés: <span className="font-medium text-slate-900" id="metric-confirmed">0</span>%</p>
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
<span className="text-xs text-slate-500">Auto-rempli</span>
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
<span className="chip-proposed inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700">
<i className="w-3.5 h-3.5" data-lucide="bot"></i> Proposé par IA
                    </span>
<button className="text-xs text-slate-700 hover:text-slate-900 underline" id="btn-why-cadre2">Pourquoi ?</button>
<button className="text-xs text-slate-700 hover:text-slate-900 underline">Voir les ancrages (3)</button>
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
<div className="mt-3 space-y-2" data-claim-ref="c1 c2 c3 c4">
<label className="text-sm text-slate-700" htmlFor="cadre2-description">Description (libre)</label>
<textarea className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10" id="cadre2-description" placeholder="Décrivez le projet..." rows="4">Isolation thermique par l’extérieur (ITE) de 12 cm en façade rue, démolition d’un muret + pose d’une palissade en limite, peinture des châssis (gris quartz), ajout d’une véranda non chauffée côté jardin. Aucune extension chauffée prévue.</textarea>

<div className="mt-3 flex flex-wrap gap-2" id="cadre2-claims">
<span className="claim inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2 py-1 text-xs text-slate-800" data-claim-id="c1" data-confidence="0.78" data-type="fait" title="Dû à : [Photos 2], [PDS], [GCU art.14]">
<span className="rounded bg-sky-50 text-sky-700 border border-sky-200 px-1 py-0.5 text-[10px]">C‑01</span>
<i className="w-3.5 h-3.5 text-emerald-600" data-lucide="check-circle-2"></i> ITE 12 cm en façade rue
                      <span className="ml-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 px-1 py-0.5 text-[10px]">fait</span>
</span>
<span className="claim inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2 py-1 text-xs text-slate-800" data-claim-id="c2" data-confidence="0.66" data-type="fait" title="Dû à : [GCU art.14]">
<span className="rounded bg-sky-50 text-sky-700 border border-sky-200 px-1 py-0.5 text-[10px]">C‑02</span>
<i className="w-3.5 h-3.5 text-emerald-600" data-lucide="check-circle-2"></i> Peinture châssis gris quartz
                      <span className="ml-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 px-1 py-0.5 text-[10px]">fait</span>
</span>
<span className="claim inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2 py-1 text-xs text-slate-800" data-claim-id="c3" data-confidence="0.85" data-type="fait" title="Dû à : [Photos — état existant]">
<span className="rounded bg-sky-50 text-sky-700 border border-sky-200 px-1 py-0.5 text-[10px]">C‑03</span>
<i className="w-3.5 h-3.5 text-emerald-600" data-lucide="check-circle-2"></i> Véranda non chauffée
                      <span className="ml-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 px-1 py-0.5 text-[10px]">fait</span>
</span>
<span className="claim inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2 py-1 text-xs text-slate-800" data-claim-id="c4" data-confidence="0.52" data-type="opinion" title="Dû à : [PDS], [SSC]">
<span className="rounded bg-sky-50 text-sky-700 border border-sky-200 px-1 py-0.5 text-[10px]">C‑04</span>
<i className="w-3.5 h-3.5 text-amber-600" data-lucide="help-circle"></i> Pas de modification de l’enveloppe
                      <span className="ml-1 rounded bg-amber-50 text-amber-700 border border-amber-200 px-1 py-0.5 text-[10px]">opinion</span>
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
<button className="action-confirm inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 text-white px-3 py-2 text-xs hover:bg-emerald-700" data-claim-id="q1">
<i className="w-3.5 h-3.5" data-lucide="check"></i> Confirmer
                          </button>
<button className="action-correct inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-700 hover:bg-slate-50" data-claim-id="q1">
<i className="w-3.5 h-3.5" data-lucide="edit-3"></i> Corriger
                          </button>
<button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-700 hover:bg-slate-50">
<i className="w-3.5 h-3.5" data-lucide="help-circle"></i> Je ne sais pas
                          </button>
</div>
</div>
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<span>Surface de plancher créée (m²) ?</span>
<span className="text-xs text-slate-500">Auto si “extension” détectée</span>
</div>
<div className="flex items-center gap-2">
<input className="w-28 rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900/10" placeholder="0" type="number"/>
<span className="text-xs text-slate-500">Véranda non chauffée: 0 m² chauffés (VOSS)</span>
</div>
<div className="flex items-center gap-2">
<button className="action-confirm inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 text-white px-3 py-2 text-xs hover:bg-emerald-700" data-claim-id="q2">
<i className="w-3.5 h-3.5" data-lucide="check"></i> Confirmer
                          </button>
<button className="action-correct inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-700 hover:bg-slate-50" data-claim-id="q2">
<i className="w-3.5 h-3.5" data-lucide="edit-3"></i> Corriger
                          </button>
<button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-700 hover:bg-slate-50">
<i className="w-3.5 h-3.5" data-lucide="help-circle"></i> Je ne sais pas
                          </button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-5 mb-4" data-confidence="0.9" data-heatmap="">
<div className="flex items-center justify-between">
<h2 className="text-lg md:text-xl font-semibold tracking-tight">Cadre 5 — Situation juridique</h2>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs text-emerald-700">
<i className="w-3.5 h-3.5" data-lucide="check-circle-2"></i> Confirmé
                    </span>
<button className="text-xs text-slate-700 hover:text-slate-900 underline">Voir les ancrages (4)</button>
</div>
</div>
<div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">

<div className="rounded-lg border border-slate-200 p-3">
<div className="flex items-center justify-between">
<label className="text-sm text-slate-700">PDS (Plan de secteur)</label>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-50 border border-slate-200 px-2 py-0.5 text-[11px] text-slate-700">
<i className="w-3.5 h-3.5" data-lucide="map"></i> Habitat
                      </span>
</div>
<p className="mt-1 text-xs text-slate-600">ROUSSEAU p.3 • DEVOS/VOSS Cadre 5</p>
<button className="mt-2 text-xs text-slate-700 hover:text-slate-900 underline" data-zone-toggle="pds">Affiner la zone</button>
<div className="mt-2 hidden space-y-2" data-zone-panel="pds">
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-xs" placeholder="Intitulé zone (ex. Habitat)"/>
<div className="grid grid-cols-3 gap-2">
<input className="rounded-md border border-slate-200 px-2 py-1 text-xs" placeholder="Référence"/>
<input className="rounded-md border border-slate-200 px-2 py-1 text-xs" placeholder="Date"/>
<input className="rounded-md border border-slate-200 px-2 py-1 text-xs" placeholder="Lien carte"/>
</div>
<button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-50 add-anchor" data-claim-id="c1">
<i className="w-3.5 h-3.5" data-lucide="link-2"></i> Ancrer
                      </button>
</div>
<div className="mt-2 flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-700 hover:bg-slate-50">
<i className="w-3.5 h-3.5" data-lucide="link"></i> Ancrage
                      </button>
<button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-700 hover:bg-slate-50">
<i className="w-3.5 h-3.5" data-lucide="map-pin"></i> Voir sur carte
                      </button>
</div>
</div>

<div className="rounded-lg border border-slate-200 p-3">
<div className="flex items-center justify-between">
<label className="text-sm text-slate-700">GCU/RCB</label>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-50 border border-slate-200 px-2 py-0.5 text-[11px] text-slate-700">
<i className="w-3.5 h-3.5" data-lucide="book-text"></i> Parc résidentiel
                      </span>
</div>
<p className="mt-1 text-xs text-slate-600">Règles volumétrie/matériaux</p>
<button className="mt-2 text-xs text-slate-700 hover:text-slate-900 underline" data-zone-toggle="gcu">Affiner la zone</button>
<div className="mt-2 hidden space-y-2" data-zone-panel="gcu">
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-xs" placeholder="Intitulé (ex. Parc résidentiel)"/>
<div className="grid grid-cols-3 gap-2">
<input className="rounded-md border border-slate-200 px-2 py-1 text-xs" placeholder="Référence"/>
<input className="rounded-md border border-slate-200 px-2 py-1 text-xs" placeholder="Date"/>
<input className="rounded-md border border-slate-200 px-2 py-1 text-xs" placeholder="Lien carte"/>
</div>
<button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-50 add-anchor" data-claim-id="c2">
<i className="w-3.5 h-3.5" data-lucide="link-2"></i> Ancrer
                      </button>
</div>
<div className="mt-2 flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-700 hover:bg-slate-50">
<i className="w-3.5 h-3.5" data-lucide="link"></i> Ancrage
                      </button>
<button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-700 hover:bg-slate-50">
<i className="w-3.5 h-3.5" data-lucide="scan-text"></i> Extrait
                      </button>
</div>
</div>

<div className="rounded-lg border border-slate-200 p-3">
<div className="flex items-center justify-between">
<label className="text-sm text-slate-700">PCA / SOL</label>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-50 border border-slate-200 px-2 py-0.5 text-[11px] text-slate-700">
<i className="w-3.5 h-3.5" data-lucide="layers"></i> Merbraine
                      </span>
</div>
<p className="mt-1 text-xs text-slate-600">Alignement &amp; gabarits</p>
<button className="mt-2 text-xs text-slate-700 hover:text-slate-900 underline" data-zone-toggle="pca">Affiner la zone</button>
<div className="mt-2 hidden space-y-2" data-zone-panel="pca">
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-xs" placeholder="Intitulé"/>
<div className="grid grid-cols-3 gap-2">
<input className="rounded-md border border-slate-200 px-2 py-1 text-xs" placeholder="Référence"/>
<input className="rounded-md border border-slate-200 px-2 py-1 text-xs" placeholder="Date"/>
<input className="rounded-md border border-slate-200 px-2 py-1 text-xs" placeholder="Lien carte"/>
</div>
<button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-50 add-anchor">
<i className="w-3.5 h-3.5" data-lucide="link-2"></i> Ancrer
                      </button>
</div>
<div className="mt-2 flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-700 hover:bg-slate-50">
<i className="w-3.5 h-3.5" data-lucide="link"></i> Ancrage
                      </button>
<button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-700 hover:bg-slate-50">
<i className="w-3.5 h-3.5" data-lucide="map"></i> Carte
                      </button>
</div>
</div>

<div className="rounded-lg border border-slate-200 p-3">
<div className="flex items-center justify-between">
<label className="text-sm text-slate-700">SSC communal</label>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-50 border border-slate-200 px-2 py-0.5 text-[11px] text-slate-700">
<i className="w-3.5 h-3.5" data-lucide="scroll-text"></i> Cohérence paysagère
                      </span>
</div>
<p className="mt-1 text-xs text-slate-600">Intégration des clôtures &amp; façades</p>
<div className="mt-2 flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-700 hover:bg-slate-50">
<i className="w-3.5 h-3.5" data-lucide="link"></i> Ancrage
                      </button>
<button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-700 hover:bg-slate-50">
<i className="w-3.5 h-3.5" data-lucide="scan-text"></i> Extrait
                      </button>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-5 mb-4" data-confidence="0.6" data-heatmap="">
<div className="flex items-center justify-between">
<h2 className="text-lg md:text-xl font-semibold tracking-tight">Cadre 6 — Dérogations / écarts</h2>
<span className="chip-proposed inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700">
<i className="w-3.5 h-3.5" data-lucide="bot"></i> Proposé
                  </span>
</div>
<p className="mt-2 text-sm text-slate-600">Assistant de motivation (pattern BASTIN: zone de cours ouverte, haie, voirie passante).</p>
<div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
<div className="space-y-2">
<label className="text-sm text-slate-700">Objectif initial</label>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10" placeholder="Ex: Sécuriser le jardin tout en préservant l’ouverture..."/>
<label className="text-sm text-slate-700">Visibilité</label>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10" placeholder="Ex: Clôture en retrait de 0,5 m, haie vive"/>
<label className="text-sm text-slate-700">Intégration</label>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10" placeholder="Ex: Matériaux et teintes en cohérence GCU"/>
<label className="text-sm text-slate-700">Proportion</label>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10" placeholder="Ex: Hauteur 1,2 m, transparence &gt;50%"/>
</div>
<div className="space-y-2">
<label className="text-sm text-slate-700">Texte proposé</label>
<textarea className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10" rows="10">La clôture projetée respecte l’ouverture de la zone de cours et jardins en la plaçant en retrait de la voirie passante, complétée d’une haie vive. Les matériaux (bois ajouré) et teintes proposées s’intègrent au parc résidentiel (GCU). La hauteur maximale (1,2 m) et la transparence (&gt;50%) assurent une proportion adéquate, limitant l’impact visuel depuis l’espace public.</textarea>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 text-white px-3 py-2 text-xs hover:bg-emerald-700">
<i className="w-3.5 h-3.5" data-lucide="check"></i> Valider ce texte
                      </button>
<button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-700 hover:bg-slate-50">
<i className="w-3.5 h-3.5" data-lucide="sparkles"></i> Voir alternatives
                      </button>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-5 mb-4" data-confidence="0.88" data-heatmap="">
<div className="flex items-center justify-between">
<h2 className="text-lg md:text-xl font-semibold tracking-tight">Cadre 10 — Performance énergétique (PEB)</h2>
<div className="flex items-center gap-2">
<span className="chip-proposed inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700">
<i className="w-3.5 h-3.5" data-lucide="bot"></i> Proposé
                    </span>
<button className="text-xs text-slate-700 hover:text-slate-900 underline" id="btn-why-peb">Pourquoi ?</button>
</div>
</div>

<div className="mt-2 rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs">
<div className="flex items-center gap-2 mb-1">
<i className="w-4 h-4 text-slate-700" data-lucide="gauge"></i>
<span className="font-medium text-slate-900">Règles actives</span>
</div>
<ul className="list-disc pl-5 space-y-1 text-slate-700">
<li><span className="font-medium">R‑PEB‑02</span> : Véranda non chauffée ET châssis existants maintenus → PEB non requis (réf. VOSS).</li>
<li><span className="font-medium">R‑PEB‑01</span> : Pas de modification de l’enveloppe → PEB non requis (réf. BASTIN/DEVOS).</li>
</ul>
</div>

<div className="hidden mt-2 rounded-lg border border-slate-200 bg-white p-3 text-xs text-slate-700" id="why-peb">
<div className="flex items-center gap-2 mb-1">
<i className="w-4 h-4 text-slate-700" data-lucide="circle-help"></i>
<span className="font-medium text-slate-900">Pourquoi cette conclusion PEB ?</span>
</div>
<ul className="list-disc pl-5 space-y-1">
<li>“Véranda non chauffée + châssis maintenus” détectés (réf. VOSS Cadre 10).</li>
<li>“Pas de modif de l’enveloppe” déclaré dans Cadre 2.</li>
</ul>
</div>
<div className="mt-3 rounded-lg border border-slate-200 p-3 text-sm" data-claim-ref="c3 c4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-700" data-lucide="thermometer"></i>
<span className="font-medium text-slate-900">PEB non requis</span>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-50 border border-slate-200 px-2 py-0.5 text-[11px] text-slate-700">État: Proposé → à confirmer</span>
</div>
<span className="text-xs text-slate-500">Règles IA</span>
</div>
<ul className="mt-2 text-slate-700 list-disc pl-5 space-y-1">
<li><span className="font-medium">R‑PEB‑01</span> Pas de modification de l’enveloppe: BASTIN, DEVOS</li>
<li><span className="font-medium">R‑PEB‑02</span> Véranda non chauffée + châssis existants maintenus: VOSS</li>
</ul>
<div className="mt-3 flex items-center gap-2">
<button className="action-confirm inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 text-white px-3 py-2 text-xs hover:bg-emerald-700" data-claim-id="peb">
<i className="w-3.5 h-3.5" data-lucide="check"></i> Confirmer
                    </button>
<button className="action-correct inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-700 hover:bg-slate-50" data-claim-id="peb">
<i className="w-3.5 h-3.5" data-lucide="edit-3"></i> Corriger
                    </button>
<button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-700 hover:bg-slate-50">
<i className="w-3.5 h-3.5" data-lucide="help-circle"></i> Je ne sais pas
                    </button>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-5 mb-4" data-confidence="0.72" data-heatmap="">
<div className="flex items-center justify-between">
<div>
<h2 className="text-lg md:text-xl font-semibold tracking-tight">Cadre 13 — Annexes à fournir</h2>
<p className="mt-1 text-sm text-slate-600">Check‑list dynamique selon le type d’actes déduit.</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-50 border border-slate-200 px-2.5 py-1 text-xs text-slate-700">
<i className="w-3.5 h-3.5" data-lucide="list-checks"></i> <span id="annex-counter">0/0</span>
</span>
<button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-700 hover:bg-slate-50">
<i className="w-3.5 h-3.5" data-lucide="plus"></i> Ajouter
                    </button>
</div>
</div>

<div className="mt-3 flex flex-wrap gap-2 text-xs">
<span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-slate-800">
<i className="w-3.5 h-3.5" data-lucide="building-2"></i> Transformation / création logement (ROUSSEAU)
                  </span>
<span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-slate-800">
<i className="w-3.5 h-3.5" data-lucide="paint-roller"></i> Peinture (DEVOS)
                  </span>
<span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-slate-800">
<i className="w-3.5 h-3.5" data-lucide="panel-right"></i> Véranda (VOSS)
                  </span>
<span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-slate-800">
<i className="w-3.5 h-3.5" data-lucide="wall"></i> ITE + Clôture (DONDZA)
                  </span>
</div>

<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="rounded-lg border border-slate-200 p-3" data-group-card="rousseau">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-slate-900 tracking-tight">Transformation / création logement</h3>
<span className="text-xs text-slate-500">ROUSSEAU p.5–7 • <span className="group-progress" data-group="rousseau">0/0</span></span>
</div>
<ul className="mt-2 space-y-2 text-sm">
<li className="annex-item flex items-center justify-between gap-2" data-group="rousseau" data-label="Vues en plan" data-role="official">
<button className="annex-check w-5 h-5 rounded-md border border-slate-300 grid place-items-center hover:bg-slate-50 checked"><i className="w-3 h-3 text-slate-900" data-lucide="check"></i></button>
<div className="flex-1">Vues en plan (1/100–1/50)</div>
<button className="inline-flex items-center gap-1 text-xs text-slate-700 hover:text-slate-900"><i className="w-3.5 h-3.5" data-lucide="paperclip"></i> Joindre</button>
</li>
<li className="annex-item flex items-center justify-between gap-2" data-group="rousseau" data-label="Élévations" data-role="official">
<button className="annex-check w-5 h-5 rounded-md border border-slate-300 grid place-items-center hover:bg-slate-50 checked"><i className="w-3 h-3 text-slate-900" data-lucide="check"></i></button>
<div className="flex-1">Élévations (visualisation du projet 1/100–1/50)</div>
<button className="inline-flex items-center gap-1 text-xs text-slate-700 hover:text-slate-900"><i className="w-3.5 h-3.5" data-lucide="paperclip"></i> Joindre</button>
</li>
<li className="annex-item flex items-center justify-between gap-2" data-conflict="enveloppe" data-group="rousseau" data-label="Coupes" data-role="official">
<button className="annex-check w-5 h-5 rounded-md border border-slate-300 grid place-items-center hover:bg-slate-50 checked"><i className="w-3 h-3 text-slate-900" data-lucide="check"></i></button>
<div className="flex-1">Coupes cotées</div>
<button className="inline-flex items-center gap-1 text-xs text-slate-700 hover:text-slate-900"><i className="w-3.5 h-3.5" data-lucide="paperclip"></i> Joindre</button>
</li>
<li className="annex-item flex items-center justify-between gap-2" data-group="rousseau" data-label="Salubrité" data-role="official">
<button className="annex-check w-5 h-5 rounded-md border border-slate-300 grid place-items-center hover:bg-slate-50 checked"><i className="w-3 h-3 text-slate-900" data-lucide="check"></i></button>
<div className="flex-1">Salubrité</div>
<button className="inline-flex items-center gap-1 text-xs text-slate-700 hover:text-slate-900"><i className="w-3.5 h-3.5" data-lucide="paperclip"></i> Joindre</button>
</li>
</ul>
</div>

<div className="rounded-lg border border-slate-200 p-3" data-group-card="devos">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-slate-900 tracking-tight">Peinture</h3>
<span className="text-xs text-slate-500">DEVOS • <span className="group-progress" data-group="devos">0/0</span></span>
</div>
<ul className="mt-2 space-y-2 text-sm">
<li className="annex-item flex items-center justify-between gap-2" data-group="devos" data-label="Plan de situation">
<button className="annex-check w-5 h-5 rounded-md border border-slate-300 grid place-items-center hover:bg-slate-50"><i className="w-3 h-3 text-transparent" data-lucide="check"></i></button>
<div className="flex-1">Plan de situation</div>
<button className="inline-flex items-center gap-1 text-xs text-slate-700 hover:text-slate-900"><i className="w-3.5 h-3.5" data-lucide="paperclip"></i> Joindre</button>
</li>
<li className="annex-item flex items-center justify-between gap-2" data-group="devos" data-label="Reportage photo">
<button className="annex-check w-5 h-5 rounded-md border border-slate-300 grid place-items-center hover:bg-slate-50 checked"><i className="w-3 h-3 text-slate-900" data-lucide="check"></i></button>
<div className="flex-1">Reportage photo : prises de vues à front de voirie + vis‑à‑vis</div>
<button className="inline-flex items-center gap-1 text-xs text-slate-700 hover:text-slate-900"><i className="w-3.5 h-3.5" data-lucide="paperclip"></i> Joindre</button>
</li>
<li className="annex-item flex items-center justify-between gap-2" data-group="devos" data-label="Élévations">
<button className="annex-check w-5 h-5 rounded-md border border-slate-300 grid place-items-center hover:bg-slate-50 checked"><i className="w-3 h-3 text-slate-900" data-lucide="check"></i></button>
<div className="flex-1">Élévations</div>
<button className="inline-flex items-center gap-1 text-xs text-slate-700 hover:text-slate-900"><i className="w-3.5 h-3.5" data-lucide="paperclip"></i> Joindre</button>
</li>
</ul>
</div>

<div className="rounded-lg border border-slate-200 p-3" data-group-card="voss">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-slate-900 tracking-tight">Véranda</h3>
<span className="text-xs text-slate-500">VOSS • <span className="group-progress" data-group="voss">0/0</span></span>
</div>
<ul className="mt-2 space-y-2 text-sm">
<li className="annex-item flex items-center justify-between gap-2" data-group="voss" data-label="Plans">
<button className="annex-check w-5 h-5 rounded-md border border-slate-300 grid place-items-center hover:bg-slate-50"><i className="w-3 h-3 text-transparent" data-lucide="check"></i></button>
<div className="flex-1">Plans</div>
<button className="inline-flex items-center gap-1 text-xs text-slate-700 hover:text-slate-900"><i className="w-3.5 h-3.5" data-lucide="paperclip"></i> Joindre</button>
</li>
<li className="annex-item flex items-center justify-between gap-2" data-group="voss" data-label="Élévations">
<button className="annex-check w-5 h-5 rounded-md border border-slate-300 grid place-items-center hover:bg-slate-50"><i className="w-3 h-3 text-transparent" data-lucide="check"></i></button>
<div className="flex-1">Élévations</div>
<button className="inline-flex items-center gap-1 text-xs text-slate-700 hover:text-slate-900"><i className="w-3.5 h-3.5" data-lucide="paperclip"></i> Joindre</button>
</li>
<li className="annex-item flex items-center justify-between gap-2" data-group="voss" data-label="Matériaux + tonalités">
<button className="annex-check w-5 h-5 rounded-md border border-slate-300 grid place-items-center hover:bg-slate-50 checked"><i className="w-3 h-3 text-slate-900" data-lucide="check"></i></button>
<div className="flex-1">Matériaux + tonalités</div>
<button className="inline-flex items-center gap-1 text-xs text-slate-700 hover:text-slate-900"><i className="w-3.5 h-3.5" data-lucide="paperclip"></i> Joindre</button>
</li>
</ul>
</div>

<div className="rounded-lg border border-slate-200 p-3" data-group-card="dondza">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-slate-900 tracking-tight">ITE + Clôture</h3>
<span className="text-xs text-slate-500">DONDZA • <span className="group-progress" data-group="dondza">0/0</span></span>
</div>
<ul className="mt-2 space-y-2 text-sm">
<li className="annex-item flex items-center justify-between gap-2" data-group="dondza" data-label="Occupation de la parcelle (zone de recul)">
<button className="annex-check w-5 h-5 rounded-md border border-slate-300 grid place-items-center hover:bg-slate-50 checked"><i className="w-3 h-3 text-slate-900" data-lucide="check"></i></button>
<div className="flex-1">Occupation de la parcelle (zone de recul)</div>
<button className="inline-flex items-center gap-1 text-xs text-slate-700 hover:text-slate-900"><i className="w-3.5 h-3.5" data-lucide="paperclip"></i> Joindre</button>
</li>
<li className="annex-item flex items-center justify-between gap-2" data-group="dondza" data-label="Clôtures">
<button className="annex-check w-5 h-5 rounded-md border border-slate-300 grid place-items-center hover:bg-slate-50 checked"><i className="w-3 h-3 text-slate-900" data-lucide="check"></i></button>
<div className="flex-1">Clôtures</div>
<button className="inline-flex items-center gap-1 text-xs text-slate-700 hover:text-slate-900"><i className="w-3.5 h-3.5" data-lucide="paperclip"></i> Joindre</button>
</li>
<li className="annex-item flex items-center justify-between gap-2" data-group="dondza" data-label="Reportage photo indexé">
<button className="annex-check w-5 h-5 rounded-md border border-slate-300 grid place-items-center hover:bg-slate-50"><i className="w-3 h-3 text-transparent" data-lucide="check"></i></button>
<div className="flex-1">Reportage photo : indexation des prises de vue</div>
<button className="inline-flex items-center gap-1 text-xs text-slate-700 hover:text-slate-900"><i className="w-3.5 h-3.5" data-lucide="paperclip"></i> Joindre</button>
</li>
</ul>
</div>
</div>

<div className="mt-4 hidden rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900" id="contradiction-alert">
<div className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="alert-triangle"></i>
<div className="flex-1">
<div className="font-medium mb-1">Contradiction détectée</div>
<div className="text-amber-900/90">“Pas de modif enveloppe” (Cadre 2) ↔ “Coupes cotées” cochées (Cadre 13). Vérifier la cohérence (ROUSSEAU vs DEVOS).</div>
<div className="mt-2 flex flex-wrap gap-2">
<button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-2.5 py-1.5 text-xs text-slate-800 hover:bg-white" id="resolve-c2">
<i className="w-3.5 h-3.5" data-lucide="edit-3"></i> Corriger Cadre 2
                        </button>
<button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-2.5 py-1.5 text-xs text-slate-800 hover:bg-white" id="resolve-uncheck">
<i className="w-3.5 h-3.5" data-lucide="square-minus"></i> Décocher en Cadre 13
                        </button>
<button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-2.5 py-1.5 text-xs text-slate-800 hover:bg-white" id="resolve-justify">
<i className="w-3.5 h-3.5" data-lucide="scroll-text"></i> Justifier (Cadre 6)
                        </button>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-5 mb-24">
<div className="flex items-center justify-between">
<h2 className="text-lg md:text-xl font-semibold tracking-tight">Cadre 14 — Échelles et exceptions</h2>
</div>
<div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
<div className="space-y-2">
<label className="text-sm text-slate-700">Échelle préférée (export)</label>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10" placeholder="Ex: 1/100e (tolérance +/‑2%)"/>
</div>
<div className="space-y-2">
<label className="text-sm text-slate-700">Commentaires (non public)</label>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10" placeholder="Option d’export à masquer..."/>
</div>
</div>
</div>
</section>

<aside className="print:hidden">
<div className="sticky top-[76px] space-y-4">
<div className="flex items-center justify-between">
<h2 className="text-sm font-medium text-slate-900 tracking-tight">Points à décider</h2>
<div className="text-xs text-slate-500"><span id="points-total">4</span> ouverts</div>
</div>

<div className="space-y-4" id="verify-groups">

<div className="rounded-lg border border-slate-200 bg-white">
<div className="flex items-center justify-between px-3 py-2 border-b border-slate-200">
<div className="text-sm font-medium text-slate-900 tracking-tight">Cadre 2</div>
<div className="text-[11px] text-slate-600"><span className="badge-bloquant">0 Bloquant</span> • <span className="badge-arevoir">0 À revoir</span> • <span className="badge-fyi">0 FYI</span></div>
</div>
<div className="p-3 space-y-3" data-cadre="2">

<div className="verify-card rounded-lg border border-slate-200 bg-white p-3" data-cadre="2" data-point-id="p1" data-severity="bloquant">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-rose-600" data-lucide="octagon-x"></i>
<span className="text-sm font-medium text-slate-900">Façade rue modifiée</span>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-rose-50 border border-rose-200 px-2 py-0.5 text-[11px] text-rose-700">Bloquant</span>
</div>
<p className="mt-1 text-xs text-slate-600">Empiètement / alignement à vérifier (ITE + façade rue).</p>
<div className="mt-2 flex flex-wrap gap-2">
<button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-50">
<i className="w-3.5 h-3.5" data-lucide="ruler"></i> Mesurer sur plan
                          </button>
<button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-50">
<i className="w-3.5 h-3.5" data-lucide="paperclip"></i> Joindre coupe
                          </button>
<button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-50">
<i className="w-3.5 h-3.5" data-lucide="badge-alert"></i> Valider avec la commune
                          </button>
</div>
<div className="mt-2 flex items-center gap-2">
<button className="point-confirm inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 text-white px-3 py-2 text-xs hover:bg-emerald-700">
<i className="w-3.5 h-3.5" data-lucide="check"></i> Confirmer
                          </button>
<button className="point-correct inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-700 hover:bg-slate-50">
<i className="w-3.5 h-3.5" data-lucide="edit-3"></i> Corriger
                          </button>
<button className="point-unknown inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-700 hover:bg-slate-50">
<i className="w-3.5 h-3.5" data-lucide="help-circle"></i> Je ne sais pas
                          </button>
</div>
</div>
</div>
</div>

<div className="rounded-lg border border-slate-200 bg-white">
<div className="flex items-center justify-between px-3 py-2 border-b border-slate-200">
<div className="text-sm font-medium text-slate-900 tracking-tight">Cadre 10</div>
<div className="text-[11px] text-slate-600"><span className="badge-bloquant">0 Bloquant</span> • <span className="badge-arevoir">1 À revoir</span> • <span className="badge-fyi">0 FYI</span></div>
</div>
<div className="p-3 space-y-3" data-cadre="10">
<div className="verify-card rounded-lg border border-slate-200 bg-white p-3" data-cadre="10" data-point-id="p2" data-severity="arevoir">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-600" data-lucide="alert-triangle"></i>
<span className="text-sm font-medium text-slate-900">PEB non requis</span>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-amber-50 border border-amber-200 px-2 py-0.5 text-[11px] text-amber-700">À revoir</span>
</div>
<p className="mt-1 text-xs text-slate-600">Vérifier “véranda” non chauffée vs châssis.</p>
<div className="mt-2 flex items-center gap-2">
<button className="point-confirm inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 text-white px-3 py-2 text-xs hover:bg-emerald-700">
<i className="w-3.5 h-3.5" data-lucide="check"></i> Confirmer
                          </button>
<button className="point-correct inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-700 hover:bg-slate-50">
<i className="w-3.5 h-3.5" data-lucide="edit-3"></i> Corriger
                          </button>
<button className="point-unknown inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-700 hover:bg-slate-50">
<i className="w-3.5 h-3.5" data-lucide="help-circle"></i> Je ne sais pas
                          </button>
</div>
</div>
</div>
</div>

<div className="rounded-lg border border-slate-200 bg-white">
<div className="flex items-center justify-between px-3 py-2 border-b border-slate-200">
<div className="text-sm font-medium text-slate-900 tracking-tight">Cadre 6</div>
<div className="text-[11px] text-slate-600"><span className="badge-bloquant">0 Bloquant</span> • <span className="badge-arevoir">1 À revoir</span> • <span className="badge-fyi">0 FYI</span></div>
</div>
<div className="p-3 space-y-3" data-cadre="6">
<div className="verify-card rounded-lg border border-slate-200 bg-white p-3" data-cadre="6" data-point-id="p4" data-severity="arevoir">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-600" data-lucide="alert-triangle"></i>
<span className="text-sm font-medium text-slate-900">Conflit dérogation</span>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-amber-50 border border-amber-200 px-2 py-0.5 text-[11px] text-amber-700">À revoir</span>
</div>
<p className="mt-1 text-xs text-slate-600">Lotissement + clôture visible (pattern BASTIN). Proposer gabarit de motivation.</p>
<div className="mt-2 flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-50">
<i className="w-3.5 h-3.5" data-lucide="wand-2"></i> Insérer gabarit
                          </button>
<button className="point-confirm inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 text-white px-3 py-2 text-xs hover:bg-emerald-700">
<i className="w-3.5 h-3.5" data-lucide="check"></i> Confirmer
                          </button>
</div>
</div>
</div>
</div>

<div className="rounded-lg border border-slate-200 bg-white">
<div className="flex items-center justify-between px-3 py-2 border-b border-slate-200">
<div className="text-sm font-medium text-slate-900 tracking-tight">Cadre 13</div>
<div className="text-[11px] text-slate-600"><span className="badge-bloquant">0 Bloquant</span> • <span className="badge-arevoir">0 À revoir</span> • <span className="badge-fyi">1 FYI</span></div>
</div>
<div className="p-3 space-y-3" data-cadre="13">
<div className="verify-card rounded-lg border border-slate-200 bg-white p-3" data-cadre="13" data-point-id="p3" data-severity="fyi">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-600" data-lucide="info"></i>
<span className="text-sm font-medium text-slate-900">SSC: attention matériaux façade</span>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-50 border border-slate-200 px-2 py-0.5 text-[11px] text-slate-700">FYI</span>
</div>
<p className="mt-1 text-xs text-slate-600">Non bloquant — rappel des teintes autorisées.</p>
<div className="mt-2 flex items-center gap-2">
<button className="point-confirm inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 text-white px-3 py-2 text-xs hover:bg-emerald-700">
<i className="w-3.5 h-3.5" data-lucide="check"></i> Marquer comme lu
                          </button>
</div>
</div>
</div>
</div>
</div>
<button className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-3 text-sm hover:bg-slate-800" id="validate-all">
<i className="w-4 h-4" data-lucide="check-check"></i> Valider <span id="validate-count">4</span> points
                </button>
</div>
</aside>
</div>
</div>
</main>

<div className="fixed inset-0 z-50 hidden" id="modal">
<div className="absolute inset-0 bg-slate-900/50"></div>
<div className="relative mx-auto mt-20 w-[94%] max-w-2xl rounded-xl border border-slate-200 bg-white shadow-xl">
<div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-slate-700" data-lucide="list-todo"></i>
<h3 className="text-base font-semibold tracking-tight">Validation pas‑à‑pas</h3>
</div>
<button className="rounded-lg border border-slate-200 p-2 hover:bg-slate-50" id="modal-close">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="px-4 py-3">
<div className="flex items-center justify-between text-sm">
<div className="inline-flex items-center gap-2">
<span className="font-medium text-slate-900" id="stepper">1/4</span>
<span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] border" id="modal-severity">Bloquant</span>
</div>
<div className="text-xs text-slate-500">Raccourcis: V valider • R corriger • S voir ancrages</div>
</div>
<div className="mt-3 rounded-lg border border-slate-200 p-3">
<div className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5 text-rose-600" data-lucide="octagon-x" id="modal-icon"></i>
<div className="flex-1">
<div className="text-sm font-medium text-slate-900" id="modal-title">Titre du point</div>
<div className="mt-1 text-xs text-slate-600" id="modal-desc">Description du point</div>
<div className="mt-3">
<div className="text-xs font-medium text-slate-900">Pourquoi cette déduction ?</div>
</div></div></div></div></div></div></div></div>
    </>
  );
}
