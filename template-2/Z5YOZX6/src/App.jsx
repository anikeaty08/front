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
      {

      // Icons
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });

      // Utilities
      function refreshIcons() {
        if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }
      function updateProgress() {
        const fields = Array.from(document.querySelectorAll('.field'));
        const total = fields.length || 1;
        const valid = fields.filter(f => f.dataset.status === 'valid').length;
        const percent = Math.round((valid / total) * 100);
        const bar = document.getElementById('progress-bar');
        const value = document.getElementById('progress-value');
        if (bar) bar.style.width = percent + '%';
        if (value) value.textContent = percent + '%';
      }
      function buildValidationList() {
        const list = document.getElementById('validationList');
        if (!list) return;
        list.innerHTML = '';
        const fields = Array.from(document.querySelectorAll('.field'));
        const needs = fields.filter(f => ['warning','blocking'].includes(f.dataset.status));
        needs.forEach(f => {
          const li = document.createElement('li');
          li.className = 'rounded-md border border-neutral-200 p-3 flex items-start gap-2';
          const status = f.dataset.status;
          const icon = status === 'blocking' ? 'octagon-x' : 'alert-triangle';
          const color = status === 'blocking' ? 'text-red-600' : 'text-amber-600';
          const details = f.closest('details');
          const anchor = details?.id ? `#${details.id}` : '#';
          li.innerHTML = `
            <i data-lucide="${icon}" class="w-4 h-4 ${color} mt-0.5"></i>
            <div class="flex-1">
              <div class="text-sm text-neutral-900 font-medium">${f.dataset.fieldId || 'Champ'}</div>
              <div class="text-[12px] text-neutral-600">Complétez ce champ pour lever l’alerte.</div>
            </div>
            <a href="${anchor}" class="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-2 py-1 text-xs text-neutral-700 hover:bg-neutral-50">
              <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i> Ouvrir
            </a>
          `;
          list.appendChild(li);
        });
        refreshIcons();
      }

      // Validation overlay
      const overlay = document.getElementById('validationOverlay');
      document.getElementById('btnValidation')?.addEventListener('click', () => {
        buildValidationList();
        overlay.classList.remove('hidden');
      });
      document.getElementById('closeValidation')?.addEventListener('click', () => overlay.classList.add('hidden'));
      document.getElementById('closeValidation2')?.addEventListener('click', () => overlay.classList.add('hidden'));
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape') overlay?.classList.add('hidden'); });

      // Generic segmented toggle handler
      function initSegmented() {
        document.querySelectorAll('[data-toggle-group]').forEach(group => {
          group.addEventListener('click', (e) => {
            const btn = e.target.closest('.seg-btn');
            if (!btn || btn.disabled) return;
            const value = btn.dataset.value;
            Array.from(group.querySelectorAll('.seg-btn')).forEach(b => b.removeAttribute('data-state'));
            btn.setAttribute('data-state','on');
            const key = group.getAttribute('data-toggle-group');
            // Show/hide matching [data-when="key:value"]
            document.querySelectorAll(`[data-when^="${key}:"]`).forEach(el => {
              const cond = el.getAttribute('data-when');
              el.classList.toggle('hidden', cond !== `${key}:${value}`);
              if (el.hasAttribute('hidden')) {
                // honor explicit hidden attr for blocks default off
                el.toggleAttribute('hidden', cond !== `${key}:${value}`);
              }
            });
            // Custom reactions per toggle group
            if (key === 'phasage') onPhasageToggle(value);
            if (key === 'servitude') onServitudeToggle(value);
            if (key === 'cu1') onCU1Toggle(value);
            if (key === 'cu2') onCU2Toggle(value);
            if (key === 'peb-q1') onPEBQ1Toggle(value);
            if (key === 'peb-q2') onPEBQ2Toggle(value);
            updateProgress();
          });
        });
      }

      // Popovers
      function initPopovers() {
        document.querySelectorAll('[data-popover-trigger]').forEach(btn => {
          const id = btn.getAttribute('data-popover-trigger');
          const panel = document.getElementById(id);
          if (!panel) return;
          let open = false;
          function show() { panel.classList.remove('hidden'); open = true; positionPopover(btn, panel); }
          function hide() { panel.classList.add('hidden'); open = false; }
          btn.addEventListener('mouseenter', show);
          btn.addEventListener('mouseleave', hide);
          panel.addEventListener('mouseenter', show);
          panel.addEventListener('mouseleave', hide);
          window.addEventListener('scroll', () => { if (open) positionPopover(btn, panel); }, { passive: true });
        });
      }
      function positionPopover(trigger, panel) {
        const rect = trigger.getBoundingClientRect();
        panel.style.left = `${rect.left - 16}px`;
      }

      // Cadre 2 — Phasage
      const steps = [];
      function renderSteps() {
        const list = document.getElementById('stepsList');
        const track = document.getElementById('phasage-track');
        if (!list || !track) return;
        list.innerHTML = '';
        track.innerHTML = '';
        steps.forEach((s, idx) => {
          // Row
          const row = document.createElement('div');
          row.className = 'rounded-md border border-neutral-200 p-2';
          row.innerHTML = `
            <div class="grid grid-cols-1 sm:grid-cols-[1fr,150px,150px,auto] gap-2 items-center">
              <input type="text" class="rounded-md border border-neutral-200 bg-white p-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300" placeholder="Étape ${idx+1} — titre" value="${s.title || ''}" data-field="title" data-idx="${idx}" />
              <input type="month" class="rounded-md border border-neutral-200 bg-white p-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300" value="${s.start || ''}" data-field="start" data-idx="${idx}" />
              <input type="month" class="rounded-md border border-neutral-200 bg-white p-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300" value="${s.end || ''}" data-field="end" data-idx="${idx}" />
              <button class="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-2 py-1.5 text-xs text-neutral-700 hover:bg-neutral-50" data-remove="${idx}">
                <i data-lucide="trash-2" class="w-3.5 h-3.5"></i> Supprimer
              </button>
            </div>
          `;
          list.appendChild(row);
          // Preview node
          const node = document.createElement('div');
          node.className = 'flex items-center gap-2';
          node.innerHTML = `
            <div class="flex items-center gap-2">
              <div class="h-2 w-2 rounded-full bg-neutral-900"></div>
              <div class="text-xs text-neutral-900">${s.title || 'Étape '+(idx+1)}</div>
              <div class="text-[11px] text-neutral-500">${(s.start || '—')} → ${(s.end || '—')}</div>
            </div>
            ${idx < steps.length-1 ? '<div class="h-[2px] w-10 bg-neutral-200 mx-2"></div>' : ''}
          `;
          track.appendChild(node);
        });
        refreshIcons();
        evaluatePhasageHorizon();
      }
      function addStep() {
        steps.push({ title: '', start: '', end: '' });
        renderSteps();
      }
      function onPhasageToggle(value) {
        const field = document.querySelector('[data-field-id="c2-phasage"]');
        if (!field) return;
        if (value === 'no') {
          field.dataset.status = 'valid';
        } else {
          field.dataset.status = steps.length >= 2 ? 'valid' : 'warning';
          if (steps.length === 0) { addStep(); addStep(); }
        }
      }
      function evaluatePhasageHorizon() {
        const hint = document.getElementById('phasageHint');
        const ok = document.getElementById('phasageOk');
        const field = document.querySelector('[data-field-id="c2-phasage"]');
        let years = 0;
        const starts = steps.map(s => s.start).filter(Boolean).map(m => new Date(m+'-01'));
        const ends = steps.map(s => s.end).filter(Boolean).map(m => new Date(m+'-01'));
        if (starts.length && ends.length) {
          const min = new Date(Math.min.apply(null, starts));
          const max = new Date(Math.max.apply(null, ends));
          years = (max - min) / (1000*60*60*24*365);
        }
        const enough = years > 5 && steps.length >= 2;
        hint.classList.toggle('hidden', enough || steps.length === 0);
        ok.classList.toggle('hidden', !enough);
        if (field) field.dataset.status = enough ? 'valid' : 'warning';
        updateProgress();
      }

      // Steps interactions
      document.addEventListener('input', (e) => {
        const target = e.target;
        if (target && target.closest('#stepsList') && target.dataset.idx !== undefined) {
          const idx = parseInt(target.dataset.idx, 10);
          const key = target.dataset.field;
          steps[idx][key] = target.value;
          renderSteps();
        }
      });
      document.addEventListener('click', (e) => {
        const remove = e.target.closest('[data-remove]');
        if (remove) {
          const idx = parseInt(remove.getAttribute('data-remove'), 10);
          steps.splice(idx, 1);
          renderSteps();
        }
      });
      document.getElementById('btnAddStep')?.addEventListener('click', addStep);

      // Cadre 3 — Servitude
      function onServitudeToggle(value) {
        const field = document.querySelector('[data-field-id="c3-servitude"]');
        if (!field) return;
        if (value === 'no') {
          field.dataset.status = 'valid';
        } else {
          const hasDesc = (document.getElementById('servitude-desc')?.value || '').trim().length > 5;
          const hasFile = document.querySelector('#thumbs > *') !== null;
          field.dataset.status = (hasDesc && hasFile) ? 'valid' : 'warning';
        }
        updateProgress();
      }
      document.getElementById('servitude-desc')?.addEventListener('input', () => onServitudeToggle('yes'));

      // Drag & Drop upload
      const dropzone = document.getElementById('dropzone');
      const fileInput = document.getElementById('fileInput');
      const thumbs = document.getElementById('thumbs');
      function addFiles(files) {
        Array.from(files).forEach(f => {
          const card = document.createElement('div');
          card.className = 'rounded-md border border-neutral-200 bg-white p-2 flex items-center gap-2';
          const isImg = f.type.startsWith('image/');
          const url = isImg ? URL.createObjectURL(f) : null;
          card.innerHTML = `
            <div class="h-10 w-10 rounded-sm overflow-hidden bg-neutral-100 flex items-center justify-center">
              ${isImg ? `<img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" class="h-full w-full object-cover">` : `<i data-lucide="file-text" class="w-5 h-5 text-neutral-500"></i>`}
            </div>
            <div class="flex-1 min-w-0">
              <div class="truncate text-sm text-neutral-900">${f.name}</div>
              <div class="text-[11px] text-neutral-500">${Math.round(f.size/1024)} Ko</div>
            </div>
            <button class="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-2 py-1 text-xs text-neutral-700 hover:bg-neutral-50" data-remove-file>
              <i data-lucide="x" class="w-3.5 h-3.5"></i> Retirer
            </button>
          `;
          thumbs.appendChild(card);
          refreshIcons();
        });
        onServitudeToggle('yes');
      }
      if (dropzone) {
        ['dragenter','dragover'].forEach(ev => dropzone.addEventListener(ev, (e) => { e.preventDefault(); dropzone.classList.add('border-neutral-400'); }));
        ['dragleave','drop'].forEach(ev => dropzone.addEventListener(ev, (e) => { e.preventDefault(); dropzone.classList.remove('border-neutral-400'); }));
        dropzone.addEventListener('drop', (e) => addFiles(e.dataTransfer.files));
      }
      fileInput?.addEventListener('change', (e) => addFiles(e.target.files));
      thumbs?.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-remove-file]');
        if (btn) {
          btn.closest('div.rounded-md')?.remove();
          onServitudeToggle('yes');
        }
      });

      // Cadre 4 — CU logic
      function onCU1Toggle(value) {
        const block = document.querySelector('[data-cu2-block]');
        const group = document.querySelector('[data-toggle-group="cu2"]');
        const btns = group?.querySelectorAll('.seg-btn') || [];
        const hint = document.querySelector('[data-cu2-hint]');
        if (value === 'yes') {
          block.classList.remove('opacity-50');
          group?.removeAttribute('aria-disabled');
          btns.forEach(b => b.disabled = false);
          // default CU2 = Non
          const noBtn = group.querySelector('[data-value="no"]');
          btns.forEach(b => b.removeAttribute('data-state'));
          if (noBtn) noBtn.setAttribute('data-state','on');
        } else {
          block.classList.add('opacity-50');
          group?.setAttribute('aria-disabled', 'true');
          btns.forEach(b => { b.disabled = true; b.removeAttribute('data-state'); });
          hint?.classList.remove('hidden');
          // reset CU2 inputs visibility
          document.querySelectorAll('[data-when^="cu2:"]').forEach(el => { el.classList.add('hidden'); el.setAttribute('hidden', '')})}}
}
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
      
<div className="min-h-screen">

<header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-neutral-900 text-white flex items-center justify-center text-sm font-semibold tracking-tight" style={{fontFamily: `'Source Sans Pro', Inter, sans-serif`}}>A9</div>
<div className="flex flex-col">
<h1 className="text-[20px] sm:text-[22px] leading-tight tracking-tight font-semibold text-neutral-900" style={{fontFamily: `'Source Sans Pro', Inter, sans-serif`}}>Annexe 9 — Demande de permis d’urbanisme (adaptation UI)</h1>
<div className="text-[13px] text-neutral-500">Améliorations ciblées: Phasage, Servitude, CU, Dérogations/écarts, Voirie, PEB</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex sm:flex-col sm:items-end">
<div className="text-[13px] text-neutral-500">Adresse du projet</div>
<div className="text-sm text-neutral-900 font-medium">Sol Paradis 2A, 4190 Ferrières (BE)</div>
</div>
<div className="hidden sm:block w-px h-8 bg-neutral-200"></div>
<div className="flex flex-col items-end">
<div className="text-[13px] text-neutral-500">Référence dossier</div>
<div className="text-sm text-neutral-900 font-medium">REF-2024-000987</div>
</div>
</div>
</div>

<div className="pb-3">
<div className="flex items-center justify-between gap-4">
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<div className="text-[12px] text-neutral-500">Progression</div>
<div className="text-[12px] text-neutral-500"><span className="text-neutral-900 font-medium" id="progress-value">0%</span> validé</div>
</div>
<div className="h-2 w-full rounded-full bg-neutral-100 overflow-hidden">
<div className="h-2 w-0 bg-green-500 transition-all duration-500" id="progress-bar"></div>
</div>
</div>
<div className="flex items-center gap-1 sm:gap-2">
<button className="group inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900 transition" id="btnValidation">
<i className="w-4 h-4 text-neutral-700 group-hover:text-neutral-900" data-lucide="filter"></i>
                  Mode Validation
                </button>
<button className="group inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900 transition" id="btnExport">
<i className="w-4 h-4" data-lucide="download"></i> Exporter
                </button>
</div>
</div>
</div>
</div>
</header>

<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
<div className="grid grid-cols-1 lg:grid-cols-[260px,1fr] gap-6">

<aside className="lg:sticky lg:top-[94px] self-start">
<div className="rounded-lg border border-neutral-200 bg-white">
<div className="px-4 py-3 border-b border-neutral-200">
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: `'Source Sans Pro', Inter, sans-serif`}}>Navigation</div>
<div className="text-[12px] text-neutral-500">Accès rapide</div>
</div>
<nav className="p-2">
<ul className="flex flex-wrap lg:flex-col">
<li><a className="group flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="#cadre-2"><span>Cadre 2 — Objet (Phasage)</span><span className="text-[11px] text-neutral-400 group-hover:text-neutral-500">⚠️</span></a></li>
<li><a className="group flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="#cadre-3"><span>Cadre 3 — Servitude</span><span className="text-[11px] text-neutral-400 group-hover:text-neutral-500">⚠️</span></a></li>
<li><a className="group flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="#cadre-4"><span>Cadre 4 — Certificat d’urbanisme</span><span className="text-[11px] text-neutral-400 group-hover:text-neutral-500">⚠️</span></a></li>
<li><a className="group flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="#cadre-6"><span>Cadre 6 — Dérogations / écarts</span><span className="text-[11px] text-neutral-400 group-hover:text-neutral-500">⛔</span></a></li>
<li><a className="group flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="#cadre-9">Cadre 9 — Voirie</a></li>
<li><a className="group flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="#cadre-10"><span>Cadre 10 — PEB</span><span className="text-[11px] text-neutral-400 group-hover:text-neutral-500">⚠️</span></a></li>
</ul>
</nav>
</div>
</aside>

<section className="space-y-4">

<details className="group rounded-lg border border-neutral-200 bg-white open:shadow-sm" id="cadre-2" open="">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: `'Source Sans Pro', Inter, sans-serif`}}>Cadre 2 — Objet de la demande</div>
<span className="text-xs text-neutral-500">Phasage simplifié</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700 field-status-badge" data-status-badge="warning">
<i className="w-3.5 h-3.5" data-lucide="alert-triangle"></i> À vérifier
                    </span>
<i className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</div>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="p-4 sm:p-6 space-y-6">

<div className="relative group/field field" data-field-id="c2-description" data-status="valid">
<div className="flex items-start gap-4">
<div className="flex-1">
<label className="text-[13px] text-neutral-500">Description succincte du projet</label>
<textarea className="mt-2 w-full rounded-md border border-neutral-200 bg-white p-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300 transition" id="c2-textarea" rows="4">Aménagement des abords d’une habitation: mur de soutènement et terrasse, sans modification sensible du relief au-delà des abords immédiats.</textarea>
<div className="mt-2 flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-2.5 py-1 text-[12px] text-neutral-700"><i className="w-3.5 h-3.5" data-lucide="sparkles"></i> Suggestions</span>
<button className="ia-suggest chip inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-xs text-neutral-700 hover:bg-neutral-50" data-insert="Préciser dimensions, matériaux, teintes et traitement des eaux pluviales." data-target="c2-textarea">+ Détails techniques</button>
<button className="ia-suggest chip inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-xs text-neutral-700 hover:bg-neutral-50" data-insert="Calendrier prévisionnel: début xx/xx/2025 — fin xx/xx/2025." data-target="c2-textarea">+ Calendrier</button>
</div>
</div>
</div>
</div>

<div className="relative group/field field" data-field-id="c2-phasage" data-status="warning">
<div className="flex items-start gap-4">
<div className="flex-1">
<div className="flex items-center gap-2">
<label className="text-[13px] text-neutral-500">Votre projet sera-t-il phasé (réalisé en plusieurs étapes sur plus de 5 ans) ?</label>
<button aria-label="Aide phasage" className="relative inline-flex items-center" data-popover-trigger="phasage-help">
<i className="w-4 h-4 text-neutral-500" data-lucide="info"></i>
</button>
<div className="hidden absolute z-30 mt-7 w-80 rounded-md border border-neutral-200 bg-white p-3 shadow-md text-[12px] text-neutral-700" id="phasage-help">
                            Projet “phasé” = réalisé en plusieurs étapes distinctes étalées sur {">"}5 ans. Exemple: Étape 1 (2025–2026) terrassement et soutènement; Étape 2 (2028) plantations et finitions; Étape 3 (2031) cheminements.
                          </div>
</div>

<div className="mt-2 inline-flex rounded-md border border-neutral-200 overflow-hidden" data-toggle-group="phasage">
<button className="seg-btn px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-50 data-[state=on]:bg-neutral-900 data-[state=on]:text-white" data-state="on" data-value="no">Non</button>
<button className="seg-btn px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-50" data-value="yes">Oui</button>
</div>

<div className="mt-3 rounded-md border border-neutral-200 bg-neutral-50 p-3 text-sm" data-when="phasage:no">
                          Pas de phasage du projet.
                        </div>

<div className="mt-3 space-y-3 hidden" data-when="phasage:yes">

<div className="rounded-md border border-neutral-200 p-3">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-neutral-900">Timeline du projet</div>
<div className="text-[12px] text-neutral-500">Conseil: ≥2 étapes et horizon {">"} 5 ans</div>
</div>
<div className="mt-3" id="phasage-preview">
<div className="relative overflow-x-auto">
<div className="min-w-[480px]">
<div className="flex items-center gap-4" id="phasage-track"></div>
</div>
</div>
</div>
</div>

<div className="rounded-md border border-neutral-200 p-3">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-neutral-900">Étapes</div>
<button className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-2.5 py-1.5 text-sm text-neutral-700 hover:bg-neutral-50" id="btnAddStep">
<i className="w-4 h-4" data-lucide="plus"></i> Ajouter une étape
                              </button>
</div>
<div className="mt-3 space-y-2" id="stepsList"></div>
<div className="mt-2 text-[12px] text-amber-700 hidden" id="phasageHint">Astuce: le phasage concerne généralement des projets étalés au-delà de 5 ans.</div>
<div className="mt-2 text-[12px] text-green-700 hidden" id="phasageOk">C’est bon: horizon temporel {">"} 5 ans détecté.</div>
</div>
</div>
</div>

<div className="relative">
<span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">
<i className="w-3.5 h-3.5" data-lucide="alert-triangle"></i> À vérifier
                        </span>
</div>
</div>
</div>
</div>
</div>
</details>

<details className="group rounded-lg border border-neutral-200 bg-white open:shadow-sm" id="cadre-3">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: `'Source Sans Pro', Inter, sans-serif`}}>Cadre 3 — Servitude</div>
<span className="text-xs text-neutral-500">Aide et upload moderne</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700 field-status-badge">
<i className="w-3.5 h-3.5" data-lucide="alert-triangle"></i> À vérifier
                    </span>
<i className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</div>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="p-4 sm:p-6 space-y-4">
<div className="relative group/field field" data-field-id="c3-servitude" data-status="warning">
<div className="flex items-start gap-4">
<div className="flex-1">
<div className="flex items-center gap-2">
<label className="text-[13px] text-neutral-500">Votre parcelle est-elle soumise à une servitude ?</label>
<button aria-label="Aide servitude" className="relative inline-flex items-center" data-popover-trigger="servitude-help">
<i className="w-4 h-4 text-neutral-500" data-lucide="info"></i>
</button>
<div className="hidden absolute z-30 mt-7 w-80 rounded-md border border-neutral-200 bg-white p-3 shadow-md text-[12px] text-neutral-700" id="servitude-help">
                            Exemples de servitudes: droit de passage, servitude de vue, de puisage, d’égout. Si oui, décrivez et joignez un plan.
                          </div>
</div>
<div className="mt-2 inline-flex rounded-md border border-neutral-200 overflow-hidden" data-toggle-group="servitude">
<button className="seg-btn px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-50 data-[state=on]:bg-neutral-900 data-[state=on]:text-white" data-state="on" data-value="no">Non</button>
<button className="seg-btn px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-50" data-value="yes">Oui</button>
</div>

<div className="mt-3 rounded-md border border-neutral-200 bg-neutral-50 p-3 text-sm" data-when="servitude:no">
                          Aucune servitude déclarée.
                        </div>

<div className="mt-3 hidden" data-when="servitude:yes">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="sm:col-span-2">
<label className="text-[13px] text-neutral-500">Description</label>
<textarea className="mt-1 w-full rounded-md border border-neutral-200 bg-white p-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300" id="servitude-desc" placeholder="Décrivez la servitude (emprise, bénéficiaires, acte, etc.)." rows="3"></textarea>
</div>
<div className="sm:col-span-2">
<label className="text-[13px] text-neutral-500">Plan de servitude</label>
<div className="mt-1 rounded-lg border border-dashed border-neutral-300 bg-white p-4 text-sm text-neutral-600 hover:border-neutral-400 transition" id="dropzone">
<div className="flex flex-col items-center justify-center gap-2">
<i className="w-5 h-5 text-neutral-500" data-lucide="upload-cloud"></i>
<div className="text-center">
                                    Glissez-déposez un plan ici ou
                                    <label className="cursor-pointer text-neutral-900 font-medium underline underline-offset-2">parcourez
                                      <input accept="image/*,.pdf" className="sr-only" id="fileInput" multiple="" type="file" />
</label>
</div>
<div className="text-[12px] text-neutral-500">PNG, JPG ou PDF — 10 Mo max par fichier</div>
</div>
</div>
<div className="mt-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2" id="thumbs"></div>
</div>
</div>
</div>
</div>
<div className="relative">
<span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">
<i className="w-3.5 h-3.5" data-lucide="alert-triangle"></i> À vérifier
                        </span>
</div>
</div>
</div>
</div>
</div>
</details>

<details className="group rounded-lg border border-neutral-200 bg-white open:shadow-sm" id="cadre-4">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: `'Source Sans Pro', Inter, sans-serif`}}>Cadre 4 — Certificat d’urbanisme</div>
<span className="text-xs text-neutral-500">Séquence conditionnelle</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700 field-status-badge">
<i className="w-3.5 h-3.5" data-lucide="alert-triangle"></i> À vérifier
                    </span>
<i className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</div>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="p-4 sm:p-6">
<div className="relative group/field field" data-field-id="c4-cu" data-status="warning">
<div className="grid grid-cols-[18px,1fr] gap-x-4">

<div className="row-span-6 relative">
<div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-neutral-200"></div>
</div>

<div className="col-start-2">
<div className="flex items-start gap-3">
<div className="relative">
<div className="w-4 h-4 rounded-full bg-neutral-900 mt-1"></div>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-neutral-900">Un certificat d’urbanisme n°1 a-t-il été délivré ?</div>
<div className="inline-flex rounded-md border border-neutral-200 overflow-hidden" data-toggle-group="cu1">
<button className="seg-btn px-2.5 py-1 text-sm text-neutral-700 hover:bg-neutral-50" data-state="on" data-value="no">Non</button>
<button className="seg-btn px-2.5 py-1 text-sm text-neutral-700 hover:bg-neutral-50" data-value="yes">Oui</button>
</div>
</div>
<div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-2 hidden" data-when="cu1:yes">
<input className="rounded-md border border-neutral-200 bg-white p-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300" data-cu="cu1-date" placeholder="Date" type="date" />
<input className="rounded-md border border-neutral-200 bg-white p-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300" data-cu="cu1-lieu" placeholder="Lieu (commune)" type="text" />
<input className="rounded-md border border-neutral-200 bg-white p-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300" data-cu="cu1-ref" placeholder="Référence (optionnel)" type="text" />
</div>
</div>
</div>
</div>

<div className="col-start-2 mt-4">
<div className="flex items-start gap-3 opacity-50" data-cu2-block="">
<div className="relative">
<div className="w-4 h-4 rounded-full bg-neutral-300 mt-1"></div>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-neutral-900">Un certificat d’urbanisme n°2 a-t-il été délivré ?</div>
<div aria-disabled="true" className="inline-flex rounded-md border border-neutral-200 overflow-hidden" data-toggle-group="cu2">
<button className="seg-btn px-2.5 py-1 text-sm text-neutral-700 hover:bg-neutral-50" data-state="on" data-value="no" disabled>Non</button>
<button className="seg-btn px-2.5 py-1 text-sm text-neutral-700 hover:bg-neutral-50" data-value="yes" disabled>Oui</button>
</div>
</div>
<div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-2 hidden" data-when="cu2:yes">
<input className="rounded-md border border-neutral-200 bg-white p-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300" data-cu="cu2-date" placeholder="Date" type="date" />
<input className="rounded-md border border-neutral-200 bg-white p-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300" data-cu="cu2-lieu" placeholder="Lieu (commune)" type="text" />
<input className="rounded-md border border-neutral-200 bg-white p-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300" data-cu="cu2-ref" placeholder="Référence (optionnel)" type="text" />
</div>
<div className="mt-2 text-[12px] text-neutral-500" data-cu2-hint="">Le n°2 est proposé si un n°1 a été délivré.</div>
</div>
</div>
</div>
</div>
<div className="mt-3 rounded-md border border-neutral-200 bg-neutral-50 p-3 text-[12px] text-neutral-700">
                      Timeline: cochez et complétez chaque étape. Les champs date/lieu deviennent obligatoires si “Oui”.
                    </div>
</div>
</div>
</div>
</details>

<details className="group rounded-lg border border-neutral-200 bg-white open:shadow-sm" id="cadre-6">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: `'Source Sans Pro', Inter, sans-serif`}}>Cadre 6 — Liste et motivation des écarts / dérogations</div>
<span className="text-xs text-neutral-500">Étape guidée</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-2.5 py-1 text-xs font-medium text-red-700">
<i className="w-3.5 h-3.5" data-lucide="octagon-x"></i> Bloquant
                    </span>
<i className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</div>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="p-4 sm:p-6 space-y-6">

<div className="rounded-md border border-neutral-200 bg-neutral-50 p-3 text-sm">
<div className="flex items-start gap-2">
<i className="w-4 h-4 text-neutral-600 mt-0.5" data-lucide="help-circle"></i>
<div className="text-neutral-700">
                        Écart = interprétation souple d’une règle (plus accessible). Dérogation = écarter une règle de manière exceptionnelle (plus exigeant: intérêt public, compatibilité, alternatives raisonnables, intégration paysagère…).
                      </div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<button className="choice-card group rounded-lg border border-neutral-200 bg-white p-4 text-left hover:border-neutral-300 transition" data-choice="respect">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-green-600" data-lucide="check-circle-2"></i>
<div className="text-sm font-medium text-neutral-900">Mon projet respecte les règlements</div>
</div>
<div className="mt-1 text-[12px] text-neutral-600">Aucune action supplémentaire.</div>
</button>
<button className="choice-card group rounded-lg border border-neutral-200 bg-white p-4 text-left hover:border-neutral-300 transition" data-choice="modify">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-amber-600" data-lucide="pencil-line"></i>
<div className="text-sm font-medium text-neutral-900">Je modifie mon projet</div>
</div>
<div className="mt-1 text-[12px] text-neutral-600">Accès direct au descriptif du projet.</div>
</button>
<button className="choice-card group rounded-lg border border-neutral-200 bg-white p-4 text-left hover:border-neutral-300 transition" data-choice="justify">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-blue-600" data-lucide="file-edit"></i>
<div className="text-sm font-medium text-neutral-900">Je justifie un écart</div>
</div>
<div className="mt-1 text-[12px] text-neutral-600">Ouvre un panneau d’aide pour rédiger.</div>
</button>
</div>

<div className="relative group/field field hidden" data-field-id="c6-derogation" data-status="blocking" id="c6-derogation-field">
<div className="flex items-start gap-4">
<div className="flex-1">
<label className="text-[13px] text-neutral-500">Justification</label>
<textarea className="mt-2 w-full rounded-md border border-neutral-200 bg-white p-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300 transition" id="c6-textarea" placeholder="Rédiger la justification de l’écart ou dérogation, en citant les conditions pertinentes." rows="8"></textarea>
<div className="mt-2 flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-700"><i className="w-3.5 h-3.5" data-lucide="sparkles"></i> Aides</span>
<button className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-2.5 py-1.5 text-xs text-neutral-700 hover:bg-neutral-50" id="openJustifyDrawer"><i className="w-3.5 h-3.5" data-lucide="library"></i> Bibliothèque d’exemples</button>
<button className="ia-suggest chip inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-2.5 py-1.5 text-xs text-neutral-700 hover:bg-neutral-50" data-insert="Le projet maintient les lignes de force paysagères, limite l’imperméabilisation et ne compromet pas la mise en œuvre du plan." data-target="c6-textarea">+ Intégration paysagère</button>
<button className="ia-suggest chip inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-2.5 py-1.5 text-xs text-neutral-700 hover:bg-neutral-50" data-insert="Absence d’alternative raisonnable: options étudiées (A, B) non viables techniquement et/ou disproportionnées." data-target="c6-textarea">+ Alternatives</button>
</div>
<div className="mt-1 text-[12px] text-neutral-500">Statut: Bloquant tant que la justification n’est pas fournie.</div>
</div>
<div className="relative">
<span className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-2.5 py-1 text-xs font-medium text-red-700"><i className="w-3.5 h-3.5" data-lucide="octagon-x"></i> Bloquant</span>
</div>
</div>
</div>
</div>
</div>
</details>

<details className="group rounded-lg border border-neutral-200 bg-white" id="cadre-9">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: `'Source Sans Pro', Inter, sans-serif`}}>Cadre 9 — Voirie communale</div>
<span className="text-xs text-neutral-500">Prérempli</span>
</div>
<i className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="p-4 sm:p-6 space-y-3">
<div className="flex items-center gap-2">
<div className="text-sm text-neutral-700">Création, modification ou suppression de voirie(s) communale(s) ?</div>
<div className="inline-flex rounded-md border border-neutral-200 overflow-hidden opacity-60 cursor-not-allowed">
<button className="px-3 py-1.5 text-sm bg-neutral-900 text-white">Non</button>
<button className="px-3 py-1.5 text-sm text-neutral-700">Oui</button>
</div>
<button aria-label="Aide voirie" className="relative inline-flex items-center" data-popover-trigger="voirie-help">
<i className="w-4 h-4 text-neutral-500" data-lucide="info"></i>
</button>
<div className="hidden absolute z-30 mt-7 w-80 rounded-md border border-neutral-200 bg-white p-3 shadow-md text-[12px] text-neutral-700" id="voirie-help">
                      La modification de voirie nécessite un architecte. Rien à faire si vous n’êtes pas concerné.
                    </div>
</div>
<div className="rounded-md border border-neutral-200 bg-neutral-50 p-3 text-sm">Valeur par défaut: Non</div>
</div>
</div>
</details>

<details className="group rounded-lg border border-neutral-200 bg-white open:shadow-sm" id="cadre-10">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: `'Source Sans Pro', Inter, sans-serif`}}>Cadre 10 — Performance énergétique (PEB)</div>
<span className="text-xs text-neutral-500">Arborescence + seuil 25%</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700 field-status-badge">
<i className="w-3.5 h-3.5" data-lucide="alert-triangle"></i> À vérifier
                    </span>
<i className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</div>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="p-4 sm:p-6 space-y-4">
<div className="relative group/field field" data-field-id="c10-peb" data-status="warning">

<div>
<div className="text-[13px] text-neutral-500 mb-1">Types de travaux (sélectionnez)</div>
<div className="flex flex-wrap gap-2" id="peb-tags">
<button className="peb-tag inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-xs text-neutral-700 hover:bg-neutral-50" data-tag="chassis"><i className="w-3.5 h-3.5" data-lucide="panels-top-left"></i> Châssis</button>
<button className="peb-tag inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-xs text-neutral-700 hover:bg-neutral-50" data-tag="ite"><i className="w-3.5 h-3.5" data-lucide="layers"></i> Isolation (ITE)</button>
<button className="peb-tag inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-xs text-neutral-700 hover:bg-neutral-50" data-tag="toiture"><i className="w-3.5 h-3.5" data-lucide="home"></i> Toiture</button>
<button className="peb-tag inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-xs text-neutral-700 hover:bg-neutral-50" data-tag="chauffage"><i className="w-3.5 h-3.5" data-lucide="flame"></i> Chauffage</button>
</div>
</div>

<div className="mt-3 opacity-50" id="peb-q1-block">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-neutral-900">Votre projet implique-t-il une modification énergétique (isolation, châssis, toiture) ?</div>
<div aria-disabled="true" className="inline-flex rounded-md border border-neutral-200 overflow-hidden" data-toggle-group="peb-q1">
<button className="seg-btn px-2.5 py-1 text-sm text-neutral-700" data-state="on" data-value="no" disabled>Non</button>
<button className="seg-btn px-2.5 py-1 text-sm text-neutral-700" data-value="yes" disabled>Oui</button>
</div>
</div>
<div className="mt-1 text-[12px] text-neutral-500">Sélectionnez d’abord un type de travaux.</div>
</div>

<div className="mt-3 hidden" data-when="peb-q1:yes">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-neutral-900">La surface isolée représente-t-elle plus de 25% ?</div>
<div className="inline-flex rounded-md border border-neutral-200 overflow-hidden" data-toggle-group="peb-q2">
<button className="seg-btn px-2.5 py-1 text-sm text-neutral-700" data-state="on" data-value="no">Non</button>
<button className="seg-btn px-2.5 py-1 text-sm text-neutral-700" data-value="yes">Oui</button>
</div>
</div>

<div className="mt-3">
<div className="flex items-center justify-between">
<div className="text-[13px] text-neutral-500">Estimation de la proportion isolée</div>
<div className="text-sm font-medium text-neutral-900"><span id="pebPercent">0</span>%</div>
</div>
<div className="mt-2 rounded-md border border-neutral-200 p-3">
<input className="w-full accent-neutral-900" id="pebSlider" max="100" min="0" type="range" value="0" />
<div className="mt-2 flex items-center justify-between text-[12px] text-neutral-500">
<span>0%</span>
<div className="relative flex-1 mx-2 h-1 bg-neutral-100">
<div className="absolute left-1/4 -translate-x-1/2 -top-1.5 h-4 w-[2px] bg-amber-500"></div>
<div className="absolute inset-0 bg-gradient-to-r from-green-200 to-amber-200 opacity-50"></div>
</div>
<span>100%</span>
</div>
</div>
</div>

<div className="mt-3 space-y-3">
<div className="rounded-md border border-green-200 bg-green-50 p-3 text-sm hidden" id="peb-lite">
<div className="flex items-start gap-2">
<i className="w-4 h-4 text-green-600 mt-0.5" data-lucide="badge-check"></i>
<div>
<div className="font-medium text-neutral-900">Déclaration simplifiée générée</div>
<div className="text-[12px] text-neutral-700">Préremplie à partir de vos sélections. Joignez-la aux annexes.</div>
<div className="mt-2 inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-2.5 py-1.5 text-xs text-neutral-700 hover:bg-neutral-50 cursor-pointer">
<i className="w-3.5 h-3.5" data-lucide="download"></i> Télécharger (PDF)
                              </div>
</div>
</div>
</div>
<div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm hidden" id="peb-pro">
<div className="flex items-start gap-2">
<i className="w-4 h-4 text-red-600 mt-0.5" data-lucide="shield-alert"></i>
<div>
<div className="font-medium text-neutral-900">Un responsable PEB agréé est obligatoire</div>
<div className="text-[12px] text-neutral-700">Au-delà de 25%, l’intervention d’un expert est requise.</div>
<button className="mt-2 inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-2.5 py-1.5 text-xs text-neutral-700 hover:bg-neutral-50">
<i className="w-3.5 h-3.5" data-lucide="link-2"></i> Trouver un expert agréé
                              </button>
</div>
</div>
</div>
</div>
</div>

<div className="mt-3 rounded-md border border-neutral-200 bg-neutral-50 p-3 text-sm" data-when="peb-q1:no" hidden="">
                      Pas de documents PEB requis selon vos réponses.
                    </div>
</div>
</div>
</div>
</details>
</section>
</div>
</main>
</div>

<div className="fixed inset-y-0 right-0 z-50 hidden" id="justifyDrawer">
<div className="absolute inset-0 bg-black/20 backdrop-blur-sm" data-justify-close=""></div>
<div className="relative ml-auto h-full w-full sm:w-[460px] bg-white border-l border-neutral-200 shadow-xl flex flex-col">
<div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-700" data-lucide="library"></i>
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: `'Source Sans Pro', Inter, sans-serif`}}>Justifier un écart</div>
</div>
<button className="rounded-md border border-neutral-200 bg-white p-1.5 hover:bg-neutral-50" data-justify-close="">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="flex-1 overflow-auto p-4 space-y-4">

<div>
<div className="text-sm font-medium text-neutral-900">Exemples classés</div>
<div className="mt-2 flex flex-wrap gap-2">
<button className="lib-chip inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-xs text-neutral-700 hover:bg-neutral-50" data-lib="harmonie"><i className="w-3.5 h-3.5" data-lucide="palette"></i> Harmonie</button>
<button className="lib-chip inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-xs text-neutral-700 hover:bg-neutral-50" data-lib="integration"><i className="w-3.5 h-3.5" data-lucide="mountain"></i> Intégration</button>
<button className="lib-chip inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-xs text-neutral-700 hover:bg-neutral-50" data-lib="codt"><i className="w-3.5 h-3.5" data-lucide="book-open"></i> Objectifs CoDT</button>
</div>
<div className="mt-3 space-y-2 text-sm" id="libList"></div>
</div>

<div className="rounded-md border border-neutral-200 p-3">
<div className="text-sm font-medium text-neutral-900">Citations réglementaires</div>
<div className="mt-2 flex flex-wrap gap-2 text-[12px]">
<button className="tag-insert inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-2 py-0.5 text-neutral-700 hover:bg-neutral-50" data-insert="[CoDT D.IV.5] Intérêt public et proportionnalité." data-target="c6-textarea"><i className="w-3.5 h-3.5" data-lucide="quote"></i> D.IV.5</button>
<button className="tag-insert inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-2 py-0.5 text-neutral-700 hover:bg-neutral-50" data-insert="[CoDT D.IV.9] Compatibilité des fonctions et environnement." data-target="c6-textarea"><i className="w-3.5 h-3.5" data-lucide="quote"></i> D.IV.9</button>
<button className="tag-insert inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-2 py-0.5 text-neutral-700 hover:bg-neutral-50" data-insert="[CoDT D.IV.13] Intégration paysagère et qualité architecturale." data-target="c6-textarea"><i className="w-3.5 h-3.5" data-lucide="quote"></i> D.IV.13</button>
</div>
</div>

<div className="rounded-md border border-neutral-200 p-3">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-700" data-lucide="sparkles"></i>
<div className="text-sm font-medium text-neutral-900">Suggestion de formulation</div>
</div>
<textarea className="mt-2 w-full rounded-md border border-neutral-200 bg-white p-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300" id="iaSuggestion" placeholder="Rédiger une proposition d’argumentaire…" rows="5"></textarea>
<div className="mt-2 flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-2.5 py-1.5 text-sm text-neutral-700 hover:bg-neutral-50" id="applySuggestion">
<i className="w-4 h-4" data-lucide="plus-circle"></i> Insérer dans la justification
              </button>
</div>
</div>
</div>
<div className="px-4 py-3 border-t border-neutral-200 flex items-center justify-end gap-2">
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" data-justify-close="">Fermer</button>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="validationOverlay">
<div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
<div className="relative mx-auto mt-16 max-w-2xl rounded-lg border border-neutral-200 bg-white shadow-xl">
<div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-700" data-lucide="filter"></i>
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: `'Source Sans Pro', Inter, sans-serif`}}>Champs nécessitant attention</div>
</div>
<button className="rounded-md border border-neutral-200 bg-white p-1.5 hover:bg-neutral-50" id="closeValidation">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="max-h-[60vh] overflow-auto p-4">
<ul className="space-y-2 text-sm" id="validationList"></ul>
</div>
<div className="px-4 py-3 border-t border-neutral-200 text-right">
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" id="closeValidation2">Fermer</button>
</div>
</div>
</div>


    </>
  );
}
