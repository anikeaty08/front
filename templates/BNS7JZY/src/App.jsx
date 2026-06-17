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



      // Init icons with 1.5 stroke width
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
      });

      // Helper: update progress from fields statuses
      function updateProgress() {
        const fields = Array.from(document.querySelectorAll('.field'));
        const total = fields.length || 1;
        const valid = fields.filter(f => f.dataset.status === 'valid').length;
        const percent = Math.round((valid / total) * 100);
        const bar = document.getElementById('progress-bar');
        const value = document.getElementById('progress-value');
        bar.style.width = percent + '%';
        value.textContent = percent + '%';
      }

      // Helper: update annex counters
      function updateAnnexCounters() {
        const items = Array.from(document.querySelectorAll('.annex-item'));
        const present = items.filter(i => i.dataset.present === 'true').length;
        const totalRequired = items.filter(i => i.dataset.required === 'true').length;
        const missing = totalRequired - items.filter(i => i.dataset.required === 'true' && i.dataset.present === 'true').length;
        const missingCounter = document.getElementById('missing-counter');
        const annexProgress = document.getElementById('annex-progress');
        if (missingCounter) missingCounter.textContent = `${missing} annexe${missing>1?'s':''} manquent`;
        if (annexProgress) annexProgress.textContent = `${present}/${items.length}`;
      }

      // Status menu logic
      function closeAllStatusMenus() {
        document.querySelectorAll('.status-menu').forEach(m => m.classList.add('hidden'));
      }
      document.addEventListener('click', (e) => {
        const trigger = e.target.closest('.field-status-trigger');
        if (trigger) {
          const id = trigger.dataset.menuFor;
          const menu = document.querySelector(`.status-menu[data-menu="${id}"]`);
          closeAllStatusMenus();
          if (menu) menu.classList.toggle('hidden');
          return;
        }
        const setBtn = e.target.closest('[data-set-status]');
        if (setBtn) {
          const newStatus = setBtn.dataset.setStatus;
          const menu = setBtn.closest('.status-menu');
          if (!menu) return;
          const id = menu.dataset.menu;
          const field = document.querySelector(`.field[data-field-id="${id}"]`);
          if (!field) return;
          field.dataset.status = newStatus;
          // Update visible badge on summary if exists
          const triggerButton = document.querySelector(`.field-status-trigger[data-menu-for="${id}"]`);
          const iconMap = {
            valid: { icon: 'check-circle', cls: 'text-green-700', bg: 'bg-green-50', border: 'border-green-200', label: 'Validé' },
            warning: { icon: 'alert-triangle', cls: 'text-amber-700', bg: 'bg-amber-50', border: 'border-amber-200', label: 'À vérifier' },
            blocking: { icon: 'octagon-x', cls: 'text-red-700', bg: 'bg-red-50', border: 'border-red-200', label: 'Bloquant' },
            discuss: { icon: 'messages-square', cls: 'text-blue-700', bg: 'bg-blue-50', border: 'border-blue-200', label: 'À discuter' },
          };
          if (triggerButton) {
            const map = iconMap[newStatus] || iconMap.warning;
            triggerButton.className = `field-status-trigger inline-flex items-center gap-1.5 rounded-full border ${map.border} ${map.bg} px-2.5 py-1 text-xs font-medium ${map.cls} hover:${map.bg.replace('50','100')} transition`;
            triggerButton.innerHTML = `<i data-lucide="${map.icon}" class="w-3.5 h-3.5"></i> ${map.label}`;
            if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
          }
          // Close the menu
          menu.classList.add('hidden');
          // Update progress and validation list
          updateProgress();
          buildValidationList();
          return;
        }
        // Close menus if clicking outside
        if (!e.target.closest('.status-menu') && !e.target.closest('.field-status-trigger')) {
          closeAllStatusMenus();
        }
      });

      // Proofs drawer
      const proofsDrawer = document.getElementById('proofsDrawer');
      const proofsFieldLabel = document.getElementById('proofsFieldLabel');
      function openProofs(fieldId, tab = 'cartes') {
        proofsDrawer.classList.remove('hidden');
        const field = document.querySelector(`.field[data-field-id="${fieldId}"]`);
        proofsFieldLabel.textContent = fieldId || '—';
        switchProofsTab(tab);
        if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }
      function closeProofs() {
        proofsDrawer.classList.add('hidden');
      }
      function switchProofsTab(tab) {
        document.querySelectorAll('[id^="tab-"]').forEach(p => p.classList.add('hidden'));
        document.getElementById(`tab-${tab}`)?.classList.remove('hidden');
      }
      document.addEventListener('click', (e) => {
        const openBtn = e.target.closest('[data-open-proofs]');
        if (openBtn) {
          const fieldId = openBtn.dataset.field || '—';
          const tab = openBtn.dataset.proofsTab || 'cartes';
          openProofs(fieldId, tab);
        }
        if (e.target.matches('[data-close-proofs]')) closeProofs();
        const tabBtn = e.target.closest('.proofs-tab');
        if (tabBtn) switchProofsTab(tabBtn.dataset.tab);
      });

      // Validation overlay
      const overlay = document.getElementById('validationOverlay');
      const btnValidation = document.getElementById('btnValidation');
      const closeValidation = document.getElementById('closeValidation');
      const closeValidation2 = document.getElementById('closeValidation2');
      const validationList = document.getElementById('validationList');

      function buildValidationList() {
        const fields = Array.from(document.querySelectorAll('.field'));
        const needs = fields.filter(f => ['warning','blocking'].includes(f.dataset.status));
        validationList.innerHTML = '';
        needs.forEach(f => {
          const id = f.dataset.fieldId;
          const status = f.dataset.status;
          const icon = status === 'blocking' ? 'octagon-x' : 'alert-triangle';
          const color = status === 'blocking' ? 'text-red-600' : 'text-amber-600';
          const li = document.createElement('li');
          li.className = 'rounded-md border border-neutral-200 p-3 flex items-start gap-2';
          li.innerHTML = `
            <i data-lucide="${icon}" class="w-4 h-4 ${color} mt-0.5"></i>
            <div class="flex-1">
              <div class="text-sm text-neutral-900 font-medium">${id}</div>
              <div class="text-[12px] text-neutral-600">Ouvrir le champ pour corriger.</div>
            </div>
            <a href="#${findCadreIdForField(f)}" class="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-2 py-1 text-xs text-neutral-700 hover:bg-neutral-50">
              <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i> Aller
            </a>
          `;
          validationList.appendChild(li);
        });
        if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }
      function findCadreIdForField(f) {
        const details = f.closest('details');
        return details?.id || '';
      }
      btnValidation?.addEventListener('click', () => {
        buildValidationList();
        overlay.classList.remove('hidden');
      });
      closeValidation?.addEventListener('click', () => overlay.classList.add('hidden'));
      closeValidation2?.addEventListener('click', () => overlay.classList.add('hidden'));

      // IA suggestions: insert into textarea
      document.addEventListener('click', (e) => {
        const chip = e.target.closest('.ia-suggest');
        if (!chip) return;
        const targetId = chip.dataset.target;
        const insertText = chip.dataset.insert || '';
        const ta = document.getElementById(targetId);
        if (!ta) return;
        const needsNewline = ta.value && !ta.value.endsWith('\n') ? '\n' : '';
        ta.value = ta.value + needsNewline + insertText;
        ta.dispatchEvent(new Event('input', { bubbles: true }));
      });

      // Annex: toggle present on upload, filter, checkbox UI
      function refreshAnnexStyles() {
        document.querySelectorAll('.annex-item').forEach(item => {
          const present = item.dataset.present === 'true';
          const check = item.querySelector('.checkmark');
          if (check) check.classList.toggle('hidden', !present);
          item.classList.toggle('border-red-300', item.dataset.required === 'true' && !present);
          item.classList.toggle('bg-red-50/30', item.dataset.required === 'true' && !present);
        });
      }
      document.addEventListener('change', (e) => {
        const upload = e.target.closest('.annex-upload');
        if (upload) {
          const item = upload.closest('.annex-item');
          if (item) {
            item.dataset.present = 'true';
            refreshAnnexStyles();
            updateAnnexCounters();
          }
        }
      });
      document.addEventListener('click', (e) => {
        const check = e.target.closest('.annex-check');
        if (check) {
          const item = check.closest('.annex-item');
          if (item) {
            const current = item.dataset.present === 'true';
            item.dataset.present = current ? 'false' : 'true';
            refreshAnnexStyles();
            updateAnnexCounters();
          }
        }
      });
      const toggleAnnexFilter = document.getElementById('toggleAnnexFilter');
      let filterMissing = false;
      toggleAnnexFilter?.addEventListener('click', () => {
        filterMissing = !filterMissing;
        toggleAnnexFilter.classList.toggle('bg-neutral-50', filterMissing);
        const items = document.querySelectorAll('.annex-item');
        items.forEach(i => {
          const missing = i.dataset.required === 'true' && i.dataset.present !== 'true';
          i.style.display = filterMissing && !missing ? 'none' : '';
        });
      });

      // Initial compute
      document.addEventListener('DOMContentLoaded', () => {
        updateProgress();
        updateAnnexCounters();
        refreshAnnexStyles();
      });

      // Keyboard: ESC closes proofs/overlay
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          closeProofs();
          document.getElementById('validationOverlay')?.classList.add('hidden');
          closeAllStatusMenus();
        }
      });
    
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
<div className="h-8 w-8 rounded-md bg-neutral-900 text-white flex items-center justify-center text-sm font-semibold tracking-tight" style={{fontFamily: '\'Source Sans Pro\', Inter, sans-serif'}}>
                A9
              </div>
<div className="flex flex-col">
<h1 className="text-[20px] sm:text-[22px] leading-tight tracking-tight font-semibold text-neutral-900" style={{fontFamily: '\'Source Sans Pro\', Inter, sans-serif'}}>
                  Annexe 9 — Demande de permis d’urbanisme (dispensée d’architecte)
                </h1>
<div className="text-[13px] text-neutral-500">
                  Mode Lecture — interactions visibles au survol
                </div>
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
<div className="text-[12px] text-neutral-500">
<span className="text-neutral-900 font-medium" id="progress-value">0%</span> validé
                  </div>
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

<button className="group inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900 transition" id="btnHistory">
<i className="w-4 h-4" data-lucide="clock"></i>
                  Historique
                </button>

<button className="group inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900 transition">
<i className="w-4 h-4" data-lucide="share-2"></i>
                  Partager
                </button>

<button className="group inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900 transition">
<i className="w-4 h-4" data-lucide="download"></i>
                  Exporter
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
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: '\'Source Sans Pro\', Inter, sans-serif'}}>Navigation</div>
<div className="text-[12px] text-neutral-500">Accédez rapidement à un cadre</div>
</div>
<nav className="p-2">
<ul className="flex flex-wrap lg:flex-col">

<li><a className="group flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="#cadre-1"><span>Cadre 1 — Demandeur</span><span className="text-[11px] text-neutral-400 group-hover:text-neutral-500">✅</span></a></li>
<li><a className="group flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="#cadre-2"><span>Cadre 2 — Objet</span><span className="text-[11px] text-neutral-400 group-hover:text-neutral-500">⚠️</span></a></li>
<li><a className="group flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="#cadre-3">Cadre 3 — Implantation</a></li>
<li><a className="group flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="#cadre-4">Cadre 4 — Antécédents</a></li>
<li><a className="group flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="#cadre-5"><span>Cadre 5 — Situation juridique</span><span className="text-[11px] text-neutral-400 group-hover:text-neutral-500">✅</span></a></li>
<li><a className="group flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="#cadre-6"><span>Cadre 6 — Dérogations</span><span className="text-[11px] text-neutral-400 group-hover:text-neutral-500">⛔</span></a></li>
<li><a className="group flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="#cadre-7">Cadre 7 — Environnement</a></li>
<li><a className="group flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="#cadre-8">Cadre 8 — Sols</a></li>
<li><a className="group flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="#cadre-8bis">Cadre 8bis — Patrimoine</a></li>
<li><a className="group flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="#cadre-9">Cadre 9 — Voirie</a></li>
<li><a className="group flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="#cadre-10">Cadre 10 — PEB</a></li>
<li><a className="group flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="#cadre-11">Cadre 11 — Statistique</a></li>
<li><a className="group flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="#cadre-12">Cadre 12 — Réunion de projet</a></li>
<li><a className="group flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="#cadre-13"><span>Cadre 13 — Annexes</span><span className="text-[11px] text-red-600 group-hover:text-red-700">3 manquent</span></a></li>
<li><a className="group flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="#cadre-14">Cadre 14 — Signatures</a></li>
</ul>
</nav>
</div>
</aside>

<section className="space-y-4">

<div className="rounded-lg border border-neutral-200 bg-white px-4 py-3">
<div className="text-[13px] text-neutral-500">
                CADRE RÉSERVÉ À LA COMMUNE OU AU FONCTIONNAIRE DÉLÉGUÉ — Réception, contrôle de complétude et notifications conformes aux articles du CoDT. Voir extrait en bas de page.
              </div>
</div>


<details className="group rounded-lg border border-neutral-200 bg-white open:shadow-sm" id="cadre-1">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: '\'Source Sans Pro\', Inter, sans-serif'}}>Cadre 1 — Demandeur</div>
<span className="text-xs text-neutral-500">Prérempli (projet Sol Paradis)</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700 field-status-badge" data-status-badge="valid">
<i className="w-3.5 h-3.5" data-lucide="check-circle"></i> Validé
                    </span>
<i className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</div>
</div>
</summary>
<div className="border-t border-neutral-200">

<div className="p-4 sm:p-6 space-y-6">

<div className="relative group/field field" data-field-id="c1-personne-physique" data-status="valid">

<button className="absolute -left-5 top-2 opacity-0 group-hover/field:opacity-100 transition" data-field="c1-personne-physique" data-open-proofs="" title="Preuves">
<i className="w-4 h-4 text-neutral-400 hover:text-neutral-600" data-lucide="paperclip"></i>
</button>
<div className="flex items-start gap-4">
<div className="flex-1">
<div className="text-[13px] text-neutral-500">Personne physique</div>
<div className="mt-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-md border border-neutral-200 p-3 hover:border-neutral-300 transition">
<div className="text-xs text-neutral-500">Nom</div>
<div className="text-sm text-neutral-900">DEFOSSE</div>
</div>
<div className="rounded-md border border-neutral-200 p-3 hover:border-neutral-300 transition">
<div className="text-xs text-neutral-500">Prénom</div>
<div className="text-sm text-neutral-900">Jean-Nicolas</div>
</div>
</div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-xs text-neutral-500">Rue</div>
<div className="text-sm text-neutral-900">Sol Paradis n° 2A boîte /</div>
</div>
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-xs text-neutral-500">Code postal</div>
<div className="text-sm text-neutral-900">4190</div>
</div>
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-xs text-neutral-500">Commune</div>
<div className="text-sm text-neutral-900">MY</div>
</div>
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-xs text-neutral-500">Pays</div>
<div className="text-sm text-neutral-900">Belgique</div>
</div>
</div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-xs text-neutral-500">Téléphone</div>
<div className="text-sm text-neutral-900">0496/03.08.38</div>
</div>
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-xs text-neutral-500">Fax</div>
<div className="text-sm text-neutral-900">/</div>
</div>
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-xs text-neutral-500">Courriel</div>
<div className="text-sm text-neutral-900">jn.defosse@gmail.com</div>
</div>
</div>
</div>

<div className="relative">
<button className="field-status-trigger inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700 hover:bg-green-100 transition" data-menu-htmlFor="c1-personne-physique">
<i className="w-3.5 h-3.5" data-lucide="check-circle"></i> Validé
                        </button>
<div className="status-menu absolute right-0 mt-2 hidden w-52 overflow-hidden rounded-md border border-neutral-200 bg-white shadow-lg" data-menu="c1-personne-physique">
<div className="px-3 py-2 text-[11px] text-neutral-500 border-b border-neutral-100">Statut du champ</div>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="valid">
<i className="w-4 h-4 text-green-600" data-lucide="check-circle"></i> Validé
                          </button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="warning">
<i className="w-4 h-4 text-amber-600" data-lucide="alert-triangle"></i> À vérifier
                          </button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="blocking">
<i className="w-4 h-4 text-red-600" data-lucide="octagon-x"></i> Bloquant
                          </button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="discuss">
<i className="w-4 h-4 text-blue-600" data-lucide="messages-square"></i> À discuter
                          </button>
</div>
</div>
</div>
</div>

<div className="relative group/field field" data-field-id="c1-auteur-projet" data-status="valid">
<button className="absolute -left-5 top-2 opacity-0 group-hover/field:opacity-100 transition" data-field="c1-auteur-projet" data-open-proofs="" title="Preuves">
<i className="w-4 h-4 text-neutral-400 hover:text-neutral-600" data-lucide="paperclip"></i>
</button>
<div className="flex items-start gap-4">
<div className="flex-1">
<div className="text-[13px] text-neutral-500">Auteur de projet</div>
<div className="mt-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-xs text-neutral-500">Nom</div>
<div className="text-sm text-neutral-900">De Keersmaecker</div>
</div>
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-xs text-neutral-500">Prénom</div>
<div className="text-sm text-neutral-900">Julie</div>
</div>
</div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-xs text-neutral-500">Dénomination / raison sociale</div>
<div className="text-sm text-neutral-900">/</div>
</div>
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-xs text-neutral-500">Forme juridique</div>
<div className="text-sm text-neutral-900">Indépendant personne physique</div>
</div>
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-xs text-neutral-500">Qualité</div>
<div className="text-sm text-neutral-900">Conseil technique en urbanisme</div>
</div>
</div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-xs text-neutral-500">Rue</div>
<div className="text-sm text-neutral-900">Rue Crollé n° 34 boîte /</div>
</div>
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-xs text-neutral-500">Code postal</div>
<div className="text-sm text-neutral-900">1380</div>
</div>
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-xs text-neutral-500">Commune</div>
<div className="text-sm text-neutral-900">Lasne</div>
</div>
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-xs text-neutral-500">Pays</div>
<div className="text-sm text-neutral-900">Belgique</div>
</div>
</div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-xs text-neutral-500">Téléphone</div>
<div className="text-sm text-neutral-900">+32 472 81 20 91</div>
</div>
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-xs text-neutral-500">Fax</div>
<div className="text-sm text-neutral-900">/</div>
</div>
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-xs text-neutral-500">Courriel</div>
<div className="text-sm text-neutral-900">juliedk.conseil@gmail.com</div>
</div>
</div>
</div>

<div className="relative">
<button className="field-status-trigger inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700 hover:bg-green-100 transition" data-menu-htmlFor="c1-auteur-projet">
<i className="w-3.5 h-3.5" data-lucide="check-circle"></i> Validé
                        </button>
<div className="status-menu absolute right-0 mt-2 hidden w-52 overflow-hidden rounded-md border border-neutral-200 bg-white shadow-lg" data-menu="c1-auteur-projet">
<div className="px-3 py-2 text-[11px] text-neutral-500 border-b border-neutral-100">Statut du champ</div>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="valid"><i className="w-4 h-4 text-green-600" data-lucide="check-circle"></i> Validé</button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="warning"><i className="w-4 h-4 text-amber-600" data-lucide="alert-triangle"></i> À vérifier</button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="blocking"><i className="w-4 h-4 text-red-600" data-lucide="octagon-x"></i> Bloquant</button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="discuss"><i className="w-4 h-4 text-blue-600" data-lucide="messages-square"></i> À discuter</button>
</div>
</div>
</div>
</div>
</div>
</div>
</details>

<details className="group rounded-lg border border-neutral-200 bg-white open:shadow-sm" id="cadre-2">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: '\'Source Sans Pro\', Inter, sans-serif'}}>Cadre 2 — Objet de la demande</div>
<span className="text-xs text-neutral-500">Description succincte + phasage</span>
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

<div className="relative group/field field" data-field-id="c2-description" data-status="warning">
<button className="absolute -left-5 top-2 opacity-0 group-hover/field:opacity-100 transition" data-field="c2-description" data-open-proofs="" title="Preuves">
<i className="w-4 h-4 text-neutral-400 hover:text-neutral-600" data-lucide="paperclip"></i>
</button>
<div className="flex items-start gap-4">
<div className="flex-1">
<label className="text-[13px] text-neutral-500">Description succincte du projet</label>
<textarea className="mt-2 w-full rounded-md border border-neutral-200 bg-white p-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300 transition" id="c2-textarea" rows="5">La demande porte sur l’aménagement des abords d’une habitation par :
- la construction d’un mur de soutènement à gauche de l’habitation engendrant une modification sensible du relief du sol,
- l’aménagement de terrasse aux abords directs de la construction sans modification sensible du relief du sol.</textarea>

<div className="mt-2 flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-700">
<i className="w-3.5 h-3.5" data-lucide="sparkles"></i> Suggestions
                          </span>
<button className="ia-suggest chip inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-xs text-neutral-700 hover:bg-neutral-50" data-insert="Préciser dimensions: longueur/hauteur du mur de soutènement, matériaux (gabions/béton), parement et drainage." data-target="c2-textarea">+ Préciser dimensions et matériaux</button>
<button className="ia-suggest chip inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-xs text-neutral-700 hover:bg-neutral-50" data-insert="Décrire mesures d’intégration paysagère: teinte, végétalisation, traitement des eaux pluviales." data-target="c2-textarea">+ Intégration paysagère</button>
<button className="ia-suggest chip inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-xs text-neutral-700 hover:bg-neutral-50" data-insert="Mentionner absence de phasage et calendrier prévisionnel (début/fin travaux)." data-target="c2-textarea">+ Calendrier</button>
</div>
<div className="mt-1 text-[12px] text-neutral-500">IA: sélectionner une suggestion pour enrichir la description.</div>
</div>

<div className="relative">
<button className="field-status-trigger inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700 hover:bg-amber-100 transition" data-menu-htmlFor="c2-description">
<i className="w-3.5 h-3.5" data-lucide="alert-triangle"></i> À vérifier
                        </button>
<div className="status-menu absolute right-0 mt-2 hidden w-52 overflow-hidden rounded-md border border-neutral-200 bg-white shadow-lg" data-menu="c2-description">
<div className="px-3 py-2 text-[11px] text-neutral-500 border-b border-neutral-100">Statut du champ</div>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="valid"><i className="w-4 h-4 text-green-600" data-lucide="check-circle"></i> Validé</button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="warning"><i className="w-4 h-4 text-amber-600" data-lucide="alert-triangle"></i> À vérifier</button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="blocking"><i className="w-4 h-4 text-red-600" data-lucide="octagon-x"></i> Bloquant</button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="discuss"><i className="w-4 h-4 text-blue-600" data-lucide="messages-square"></i> À discuter</button>
</div>
</div>
</div>
</div>

<div className="relative group/field field" data-field-id="c2-phasage" data-status="valid">
<button className="absolute -left-5 top-2 opacity-0 group-hover/field:opacity-100 transition" data-field="c2-phasage" data-open-proofs="" title="Preuves">
<i className="w-4 h-4 text-neutral-400 hover:text-neutral-600" data-lucide="paperclip"></i>
</button>
<div className="flex items-start gap-4">
<div className="flex-1">
<label className="text-[13px] text-neutral-500">Phasage</label>
<div className="mt-2 rounded-md border border-neutral-200 p-3 text-sm">
                          Pas de phasage
                        </div>
</div>
<div className="relative">
<button className="field-status-trigger inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700 hover:bg-green-100 transition" data-menu-htmlFor="c2-phasage">
<i className="w-3.5 h-3.5" data-lucide="check-circle"></i> Validé
                        </button>
<div className="status-menu absolute right-0 mt-2 hidden w-52 overflow-hidden rounded-md border border-neutral-200 bg-white shadow-lg" data-menu="c2-phasage">
<div className="px-3 py-2 text-[11px] text-neutral-500 border-b border-neutral-100">Statut du champ</div>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="valid"><i className="w-4 h-4 text-green-600" data-lucide="check-circle"></i> Validé</button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="warning"><i className="w-4 h-4 text-amber-600" data-lucide="alert-triangle"></i> À vérifier</button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="blocking"><i className="w-4 h-4 text-red-600" data-lucide="octagon-x"></i> Bloquant</button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="discuss"><i className="w-4 h-4 text-blue-600" data-lucide="messages-square"></i> À discuter</button>
</div>
</div>
</div>
</div>
</div>
</div>
</details>

<details className="group rounded-lg border border-neutral-200 bg-white" id="cadre-3">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: '\'Source Sans Pro\', Inter, sans-serif'}}>Cadre 3 — Coordonnées d’implantation</div>
</div>
<i className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="p-4 sm:p-6 space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-xs text-neutral-500">Rue</div>
<div className="text-sm text-neutral-900">Sol Paradis n° 2A</div>
</div>
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-xs text-neutral-500">Commune</div>
<div className="text-sm text-neutral-900">Ferrières</div>
</div>
</div>
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-xs text-neutral-500">Parcelles cadastrales concernées</div>
<div className="mt-2 text-sm text-neutral-900">Parcelle 1 — Commune: Ferrières, Division: 3, Section: A, N° et exposant: 0685A002, Propriétaire: Le demandeur</div>
<div className="mt-2 text-sm text-neutral-700">Existence de servitudes et autres droits: Non</div>
</div>
</div>
</div>
</details>

<details className="group rounded-lg border border-neutral-200 bg-white" id="cadre-4">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: '\'Source Sans Pro\', Inter, sans-serif'}}>Cadre 4 — Antécédents de la demande</div>
<i className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="p-4 sm:p-6 space-y-2 text-sm">
<div>Certificat d’urbanisme n°1: —</div>
<div>Certificat d’urbanisme n°2: —</div>
<div>Autres permis relatifs au bien: Permis d’urbanisme pour la construction de l’habitation</div>
</div>
</div>
</details>

<details className="group rounded-lg border border-neutral-200 bg-white open:shadow-sm" id="cadre-5">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: '\'Source Sans Pro\', Inter, sans-serif'}}>Cadre 5 — Situation juridique du bien</div>
<span className="text-xs text-neutral-500">Auto (WalOnMap)</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700 field-status-badge" data-status-badge="valid">
<i className="w-3.5 h-3.5" data-lucide="check-circle"></i> Validé
                    </span>
<i className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</div>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="p-4 sm:p-6 space-y-6">

<div className="relative group/field field" data-field-id="c5-codt" data-status="valid">
<button className="absolute -left-5 top-2 opacity-0 group-hover/field:opacity-100 transition" data-field="c5-codt" data-open-proofs="" title="Preuves">
<i className="w-4 h-4 text-neutral-400 hover:text-neutral-600" data-lucide="paperclip"></i>
</button>
<div className="flex items-start gap-4">
<div className="flex-1 space-y-3">
<div className="text-[13px] text-neutral-500">Documents CoDT et zonage applicables</div>
<ul className="text-sm list-disc pl-5 space-y-1">
<li>Schéma de développement territorial (23/04/2024) : hors centralités</li>
<li>Plan de secteur : Agricole — plan de secteur de MARCHE-LA ROCHE</li>
<li>Carte d’affectation des sols : Couvert herbacé toute l'année; Constructions artificielles hors sol; Revêtement artificiel au sol</li>
<li>Schémas/Guides: SD pluricommunal — Sans objet; SD communal — Sans objet; SOL — Sans objet</li>
<li>Guide communal d’urbanisme: Règlement communal prévention incendies (61019-RCB-0001-02)</li>
<li>Guide régional d’urbanisme: GRU PMR (61019-RMR-0001-01); GRU Enseignes (61019-REP-0001-01)</li>
<li>Aéroports (bruit/développement): Sans objet</li>
<li>Permis d’urbanisation: Sans objet</li>
<li>Arbres/haies remarquables, AHREM: Sans objet</li>
<li>Taxation bénéfices planification: Sans objet</li>
<li>Réaménagement / réhabilitation / remembrement / rénovation / revitalisation / ZIP: Sans objet (réhabilitation paysagère: donnée non disponible)</li>
<li>Code du Patrimoine: Bien classé/inscrit/protection/exceptions/UNESCO/zone tampon/pastillé/archéo: Sans objet</li>
</ul>
</div>

<div className="relative">
<button className="field-status-trigger inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700 hover:bg-green-100 transition" data-menu-htmlFor="c5-codt">
<i className="w-3.5 h-3.5" data-lucide="check-circle"></i> Validé
                        </button>
<div className="status-menu absolute right-0 mt-2 hidden w-52 overflow-hidden rounded-md border border-neutral-200 bg-white shadow-lg" data-menu="c5-codt">
<div className="px-3 py-2 text-[11px] text-neutral-500 border-b border-neutral-100">Statut du champ</div>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="valid"><i className="w-4 h-4 text-green-600" data-lucide="check-circle"></i> Validé</button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="warning"><i className="w-4 h-4 text-amber-600" data-lucide="alert-triangle"></i> À vérifier</button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="blocking"><i className="w-4 h-4 text-red-600" data-lucide="octagon-x"></i> Bloquant</button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="discuss"><i className="w-4 h-4 text-blue-600" data-lucide="messages-square"></i> À discuter</button>
</div>
</div>
</div>

<div className="mt-3 flex flex-wrap gap-2">
<button className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-xs text-neutral-700 hover:bg-neutral-50" data-field="c5-codt" data-open-proofs="" data-proofs-context="radon" data-proofs-tab="cartes">
<i className="w-3.5 h-3.5" data-lucide="map"></i> Carte Radon
                      </button>
<button className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-xs text-neutral-700 hover:bg-neutral-50" data-field="c5-codt" data-open-proofs="" data-proofs-context="ruissellement" data-proofs-tab="cartes">
<i className="w-3.5 h-3.5" data-lucide="waves"></i> Carte Ruissellement
                      </button>
<button className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-xs text-neutral-700 hover:bg-neutral-50" data-field="c5-codt" data-open-proofs="" data-proofs-tab="reglement">
<i className="w-3.5 h-3.5" data-lucide="file-text"></i> Articles CoDT
                      </button>
</div>
</div>
</div>
</div>
</details>

<details className="group rounded-lg border border-neutral-200 bg-white open:shadow-sm" id="cadre-6">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: '\'Source Sans Pro\', Inter, sans-serif'}}>Cadre 6 — Liste et motivation des dérogations et écarts</div>
<span className="text-xs text-neutral-500">Justification aux articles D.IV.5 à D.IV.13</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-2.5 py-1 text-xs font-medium text-red-700 field-status-badge" data-status-badge="blocking">
<i className="w-3.5 h-3.5" data-lucide="octagon-x"></i> Bloquant
                    </span>
<i className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</div>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="p-4 sm:p-6 space-y-6">
<div className="relative group/field field" data-field-id="c6-derogation" data-status="blocking">
<button className="absolute -left-5 top-2 opacity-0 group-hover/field:opacity-100 transition" data-field="c6-derogation" data-open-proofs="" title="Preuves">
<i className="w-4 h-4 text-neutral-400 hover:text-neutral-600" data-lucide="paperclip"></i>
</button>
<div className="flex items-start gap-4">
<div className="flex-1">
<label className="text-[13px] text-neutral-500">Justification</label>
<textarea className="mt-2 w-full rounded-md border border-neutral-200 bg-white p-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300 transition" id="c6-textarea" placeholder="Rédiger la justification de la dérogation au Plan de Secteur, et démontrer le respect des conditions (articles D.IV.5 à D.IV.13 du CoDT)." rows="10"></textarea>

<div className="mt-2 flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-700">
<i className="w-3.5 h-3.5" data-lucide="sparkles"></i> Suggestions prêtes
                          </span>
<button className="ia-suggest chip inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-xs text-neutral-700 hover:bg-neutral-50" data-insert="Le projet déroge au Plan de Secteur (zone agricole) sans accroître l’emprise sur les terres exploitées. Les travaux sont limités aux abords existants d’une habitation autorisée (mur de soutènement, terrasses), sans construction hors sol additionnelle." data-target="c6-textarea">+ Dérogation ciblée</button>
<button className="ia-suggest chip inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-xs text-neutral-700 hover:bg-neutral-50" data-insert="La mise en œuvre du Plan de Secteur n’est pas compromise: la parcelle a été soustraite à l’exploitation agricole suite au permis d’urbanisme de l’habitation; le projet vise la continuité d’aménagement des abords." data-target="c6-textarea">+ Non-compromission</button>
<button className="ia-suggest chip inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-xs text-neutral-700 hover:bg-neutral-50" data-insert="Intégration paysagère: maintien des lignes de force; aménagement du sol plutôt que constructions hors sol; traitement des eaux et stabilisation du relief limitant l’érosion." data-target="c6-textarea">+ Paysage et environnement</button>
<button className="ia-suggest chip inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-xs text-neutral-700 hover:bg-neutral-50" data-insert="Conclusion: les conditions des articles D.IV.5 à D.IV.13 du CoDT sont rencontrées; la dérogation peut être accordée." data-target="c6-textarea">+ Conclusion CoDT</button>
</div>
<div className="mt-1 text-[12px] text-neutral-500">Statut: Bloquant tant que la justification n’est pas fournie.</div>
</div>

<div className="relative">
<button className="field-status-trigger inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-2.5 py-1 text-xs font-medium text-red-700 hover:bg-red-100 transition" data-menu-htmlFor="c6-derogation">
<i className="w-3.5 h-3.5" data-lucide="octagon-x"></i> Bloquant
                        </button>
<div className="status-menu absolute right-0 mt-2 hidden w-52 overflow-hidden rounded-md border border-neutral-200 bg-white shadow-lg" data-menu="c6-derogation">
<div className="px-3 py-2 text-[11px] text-neutral-500 border-b border-neutral-100">Statut du champ</div>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="valid"><i className="w-4 h-4 text-green-600" data-lucide="check-circle"></i> Validé</button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="warning"><i className="w-4 h-4 text-amber-600" data-lucide="alert-triangle"></i> À vérifier</button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="blocking"><i className="w-4 h-4 text-red-600" data-lucide="octagon-x"></i> Bloquant</button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="discuss"><i className="w-4 h-4 text-blue-600" data-lucide="messages-square"></i> À discuter</button>
</div>
</div>
</div>
</div>

<div className="rounded-md border border-neutral-200 bg-neutral-50 p-4 text-sm">
<div className="flex items-start gap-2">
<i className="w-4 h-4 text-neutral-500 mt-0.5" data-lucide="info"></i>
<div className="text-neutral-700">
                        Rappel: citer explicitement les conditions des articles D.IV.5 à D.IV.13 du CoDT et justifier leur respect (intérêt public, compatibilité fonctions, intégration paysagère, absence d’alternative raisonnable, etc.).
                      </div>
</div>
</div>
</div>
</div>
</details>

<details className="group rounded-lg border border-neutral-200 bg-white" id="cadre-7">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: '\'Source Sans Pro\', Inter, sans-serif'}}>Cadre 7 — Code de l’Environnement</div>
<i className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="p-4 sm:p-6 text-sm space-y-2">
<div>La demande comporte (joindre en annexe):</div>
<ul className="list-disc pl-5 space-y-1">
<li>Une notice d’évaluation des incidences sur l’environnement</li>
<li>Une étude d’incidences sur l’environnement</li>
</ul>
</div>
</div>
</details>

<details className="group rounded-lg border border-neutral-200 bg-white" id="cadre-8">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: '\'Source Sans Pro\', Inter, sans-serif'}}>Cadre 8 — Gestion des sols</div>
<i className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="p-4 sm:p-6 text-sm space-y-2">
<div>Vérifier les données relatives au bien (décret du 1er mars 2018) et joindre le formulaire (annexe 8 AR 06/12/2018) dûment complété.</div>
</div>
</div>
</details>

<details className="group rounded-lg border border-neutral-200 bg-white" id="cadre-8bis">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: '\'Source Sans Pro\', Inter, sans-serif'}}>Cadre 8bis — Code wallon du Patrimoine</div>
<i className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="p-4 sm:p-6 text-sm space-y-2">
<div>La demande comporte (joindre en annexe):</div>
<ul className="list-disc pl-5 space-y-1">
<li>Autorisation patrimoniale valide (si requise)</li>
<li>Avis archéologique préalable sur grand projet (ou copie de la demande si non délivré dans les délais)</li>
</ul>
</div>
</div>
</details>

<details className="group rounded-lg border border-neutral-200 bg-white" id="cadre-9">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: '\'Source Sans Pro\', Inter, sans-serif'}}>Cadre 9 — Voirie communale</div>
<i className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="p-4 sm:p-6 text-sm space-y-2">
<div>Création, modification ou suppression de voirie(s) communale(s): Non</div>
<div>Joindre l’article 11 du décret du 6 février 2014 ou l’autorisation définitive, le cas échéant.</div>
</div>
</div>
</details>

<details className="group rounded-lg border border-neutral-200 bg-white" id="cadre-10">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: '\'Source Sans Pro\', Inter, sans-serif'}}>Cadre 10 — Performance énergétique (PEB)</div>
<i className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="p-4 sm:p-6 text-sm">La demande comporte: Pas requis (documents PEB le cas échéant).</div>
</div>
</details>

<details className="group rounded-lg border border-neutral-200 bg-white" id="cadre-11">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: '\'Source Sans Pro\', Inter, sans-serif'}}>Cadre 11 — Formulaire statistique</div>
<i className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="p-4 sm:p-6 text-sm">Respect législation fédérale — pas de modification du volume bâti.</div>
</div>
</details>

<details className="group rounded-lg border border-neutral-200 bg-white" id="cadre-12">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: '\'Source Sans Pro\', Inter, sans-serif'}}>Cadre 12 — Réunion de projet</div>
<i className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="p-4 sm:p-6 text-sm space-y-2">
<div>La demande comporte (joindre en annexe):</div>
<ul className="list-disc pl-5 space-y-1">
<li>Procès-verbal non décisionnel (si tenue)</li>
<li>Preuve de la demande obligatoire (si non tenue dans les 20 jours)</li>
</ul>
</div>
</div>
</details>

<details className="group rounded-lg border border-neutral-200 bg-white open:shadow-sm" id="cadre-13">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: '\'Source Sans Pro\', Inter, sans-serif'}}>Cadre 13 — Annexes à fournir</div>
<span className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-2.5 py-1 text-xs font-medium text-red-700">
<i className="w-3.5 h-3.5" data-lucide="circle-alert"></i> <span id="missing-counter">3 annexes manquent</span>
</span>
</div>
<i className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="p-4 sm:p-6 space-y-4">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
<div className="text-sm text-neutral-700">Liste à déposer en 4 exemplaires. Avancement: <span className="font-medium" id="annex-progress">12/15</span>.</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-50" id="toggleAnnexFilter">
<i className="w-4 h-4" data-lucide="list-filter"></i>
                        Afficher uniquement les manquantes
                      </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

<div className="annex-item rounded-md border border-neutral-200 bg-white p-3 flex items-start gap-3 hover:border-neutral-300 transition" data-present="true" data-required="true">
<button aria-label="Cocher" className="annex-check relative mt-0.5 h-5 w-5 shrink-0 rounded-md border border-neutral-300 bg-white hover:ring-2 hover:ring-neutral-900/10 focus:outline-none">
<span className="checkmark hidden absolute inset-0 flex items-center justify-center text-green-600">
<i className="w-4 h-4" data-lucide="check"></i>
</span>
</button>
<div className="flex-1">
<div className="text-sm text-neutral-900">Plan de situation (200 m) avec orientation, voies de desserte, constructions (50 m), prises de vues numérotées</div>
<div className="mt-1 flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2 py-0.5 text-[11px] text-green-700">
<i className="w-3 h-3" data-lucide="check-circle"></i> Présent
                          </span>
<button className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-2 py-1 text-xs text-neutral-700 hover:bg-neutral-50">
<i className="w-3.5 h-3.5" data-lucide="eye"></i> Ouvrir
                          </button>
</div>
</div>
</div>
<div className="annex-item rounded-md border border-neutral-200 bg-white p-3 flex items-start gap-3 hover:border-neutral-300 transition" data-present="true" data-required="true">
<button aria-label="Cocher" className="annex-check relative mt-0.5 h-5 w-5 shrink-0 rounded-md border border-neutral-300 bg-white hover:ring-2 hover:ring-neutral-900/10 focus:outline-none">
<span className="checkmark hidden absolute inset-0 flex items-center justify-center text-green-600">
<i className="w-4 h-4" data-lucide="check"></i>
</span>
</button>
<div className="flex-1">
<div className="text-sm text-neutral-900">Reportage photographique (2 vues frontage/vis-à-vis + ≥3 vues limites + 3 vues éloignées si D.IV.5 à D.IV.13 ou périmètre d’intérêt paysager)</div>
<div className="mt-1 flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2 py-0.5 text-[11px] text-green-700">
<i className="w-3 h-3" data-lucide="check-circle"></i> Présent
                          </span>
<button className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-2 py-1 text-xs text-neutral-700 hover:bg-neutral-50">
<i className="w-3.5 h-3.5" data-lucide="images"></i> Ouvrir
                          </button>
</div>
</div>
</div>
<div className="annex-item rounded-md border border-neutral-200 bg-white p-3 flex items-start gap-3 hover:border-neutral-300 transition" data-present="false" data-required="true">
<button aria-label="Cocher" className="annex-check relative mt-0.5 h-5 w-5 shrink-0 rounded-md border-2 border-red-300 bg-white hover:ring-2 hover:ring-red-200 focus:outline-none">
<span className="checkmark hidden absolute inset-0 flex items-center justify-center text-green-600">
<i className="w-4 h-4" data-lucide="check"></i>
</span>
</button>
<div className="flex-1">
<div className="text-sm text-neutral-900">Occupation de la parcelle: limites, implantations existantes/projetées, matériaux parement/couverture</div>
<div className="mt-1 flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-2 py-0.5 text-[11px] text-red-700">
<i className="w-3 h-3" data-lucide="alert-circle"></i> Manquante
                          </span>
<label className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-2 py-1 text-xs text-neutral-700 hover:bg-neutral-50 cursor-pointer">
<i className="w-3.5 h-3.5" data-lucide="upload"></i> Uploader
                            <input className="sr-only annex-upload" type="file"/>
</label>
<button className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-2 py-1 text-xs text-neutral-700 hover:bg-neutral-50" data-open-proofs="" data-proofs-tab="cartes">
<i className="w-3.5 h-3.5" data-lucide="map"></i> Ouvrir carte
                          </button>
</div>
</div>
</div>
<div className="annex-item rounded-md border border-neutral-200 bg-white p-3 flex items-start gap-3 hover:border-neutral-300 transition" data-present="true" data-required="true">
<button aria-label="Cocher" className="annex-check relative mt-0.5 h-5 w-5 shrink-0 rounded-md border border-neutral-300 bg-white hover:ring-2 hover:ring-neutral-900/10 focus:outline-none">
<span className="checkmark hidden absolute inset-0 flex items-center justify-center text-green-600">
<i className="w-4 h-4" data-lucide="check"></i>
</span>
</button>
<div className="flex-1">
<div className="text-sm text-neutral-900">Aménagement du sol (zones de recul, clôtures, stationnement, végétation, arbres remarquables, plantations)</div>
<div className="mt-1 flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2 py-0.5 text-[11px] text-green-700">
<i className="w-3 h-3" data-lucide="check-circle"></i> Présent
                          </span>
</div>
</div>
</div>
<div className="annex-item rounded-md border border-neutral-200 bg-white p-3 flex items-start gap-3 hover:border-neutral-300 transition" data-present="false" data-required="false">
<button aria-label="Cocher" className="annex-check relative mt-0.5 h-5 w-5 shrink-0 rounded-md border border-neutral-300 bg-white hover:ring-2 hover:ring-neutral-900/10 focus:outline-none">
<span className="checkmark hidden absolute inset-0 flex items-center justify-center text-green-600">
<i className="w-4 h-4" data-lucide="check"></i>
</span>
</button>
<div className="flex-1">
<div className="text-sm text-neutral-900">Mesures écoulement eaux superficielles (le cas échéant)</div>
<div className="mt-1 flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-2 py-0.5 text-[11px] text-neutral-600">
<i className="w-3 h-3" data-lucide="circle"></i> Facultatif
                          </span>
<label className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-2 py-1 text-xs text-neutral-700 hover:bg-neutral-50 cursor-pointer">
<i className="w-3.5 h-3.5" data-lucide="upload"></i> Uploader
                            <input className="sr-only annex-upload" type="file"/>
</label>
</div>
</div>
</div>
<div className="annex-item rounded-md border border-neutral-200 bg-white p-3 flex items-start gap-3 hover:border-neutral-300 transition" data-present="false" data-required="false">
<button aria-label="Cocher" className="annex-check relative mt-0.5 h-5 w-5 shrink-0 rounded-md border border-neutral-300 bg-white hover:ring-2 hover:ring-neutral-900/10 focus:outline-none">
<span className="checkmark hidden absolute inset-0 flex items-center justify-center text-green-600">
<i className="w-4 h-4" data-lucide="check"></i>
</span>
</button>
<div className="flex-1">
<div className="text-sm text-neutral-900">Mesures d’épuration des eaux usées (le cas échéant)</div>
<div className="mt-1 flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-2 py-0.5 text-[11px] text-neutral-600">
<i className="w-3 h-3" data-lucide="circle"></i> Facultatif
                          </span>
</div>
</div>
</div>

<div className="annex-item rounded-md border border-neutral-200 bg-white p-3 flex items-start gap-3 hover:border-neutral-300 transition" data-present="true" data-required="true">
<button aria-label="Cocher" className="annex-check relative mt-0.5 h-5 w-5 shrink-0 rounded-md border border-neutral-300 bg-white hover:ring-2 hover:ring-neutral-900/10 focus:outline-none">
<span className="checkmark hidden absolute inset-0 flex items-center justify-center text-green-600">
<i className="w-4 h-4" data-lucide="check"></i>
</span>
</button>
<div className="flex-1">
<div className="text-sm text-neutral-900">Visualisation du projet (échelle 1/100e ou 1/50e): plans de niveaux, affectations, élévations, matériaux, coupes cotées, niveaux du relief, profil contigu, composition des parois/toiture, conduits</div>
<div className="mt-1 flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2 py-0.5 text-[11px] text-green-700">
<i className="w-3 h-3" data-lucide="check-circle"></i> Présent
                          </span>
</div>
</div>
</div>

<div className="annex-item rounded-md border border-neutral-200 bg-white p-3 flex items-start gap-3 hover:border-neutral-300 transition" data-present="false" data-required="false">
<button aria-label="Cocher" className="annex-check relative mt-0.5 h-5 w-5 shrink-0 rounded-md border border-neutral-300 bg-white hover:ring-2 hover:ring-neutral-900/10 focus:outline-none">
<span className="checkmark hidden absolute inset-0 flex items-center justify-center text-green-600">
<i className="w-4 h-4" data-lucide="check"></i>
</span>
</button>
<div className="flex-1">
<div className="text-sm text-neutral-900">Calculs salubrité (art. 3.5° Code wallon du logement) — le cas échéant</div>
<div className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-2 py-0.5 text-[11px] text-neutral-600">
<i className="w-3 h-3" data-lucide="circle"></i> Facultatif
                        </div>
</div>
</div>

<div className="annex-item rounded-md border border-neutral-200 bg-white p-3 flex items-start gap-3 hover:border-neutral-300 transition" data-present="false" data-required="false">
<button aria-label="Cocher" className="annex-check relative mt-0.5 h-5 w-5 shrink-0 rounded-md border border-neutral-300 bg-white hover:ring-2 hover:ring-neutral-900/10 focus:outline-none">
<span className="checkmark hidden absolute inset-0 flex items-center justify-center text-green-600">
<i className="w-4 h-4" data-lucide="check"></i>
</span>
</button>
<div className="flex-1 space-y-1">
<div className="text-sm text-neutral-900">Enseignes / publicité / installations fixes ou mobiles / modules de production</div>
<ul className="text-[13px] text-neutral-700 list-disc pl-5">
<li>Vue en plan</li>
<li>Vue en élévation</li>
<li>Indication des matériaux et tonalité</li>
<li>Lettrage et éclairage (si applicable)</li>
</ul>
</div>
</div>

<div className="annex-item rounded-md border border-neutral-200 bg-white p-3 flex items-start gap-3 hover:border-neutral-300 transition" data-present="false" data-required="false">
<button aria-label="Cocher" className="annex-check relative mt-0.5 h-5 w-5 shrink-0 rounded-md border border-neutral-300 bg-white hover:ring-2 hover:ring-neutral-900/10 focus:outline-none">
<span className="checkmark hidden absolute inset-0 flex items-center justify-center text-green-600">
<i className="w-4 h-4" data-lucide="check"></i>
</span>
</button>
<div className="flex-1 space-y-1">
<div className="text-sm text-neutral-900">Démolition: plan de la construction/installation, ≥3 prises de vue significatives</div>
<div className="mt-1 inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-2 py-1 text-xs text-neutral-700 hover:bg-neutral-50 cursor-pointer">
<i className="w-3.5 h-3.5" data-lucide="upload"></i> Uploader
                          <input className="sr-only annex-upload" type="file"/>
</div>
</div>
</div>
</div>
<div className="text-[12px] text-neutral-500">Note: Les plans sont numérotés et pliés au format 21 × 29,7 cm.</div>
</div>
</div>
</details>

<details className="group rounded-lg border border-neutral-200 bg-white" id="cadre-14">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: '\'Source Sans Pro\', Inter, sans-serif'}}>Cadre 14 — Signatures</div>
<i className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="p-4 sm:p-6 space-y-4">
<div className="text-sm">Je m'engage à solliciter les autorisations ou permis imposés, le cas échéant, par d'autres lois, décrets ou règlements.</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-md border border-neutral-200 bg-neutral-50 p-4">
<div className="text-xs text-neutral-500 mb-2">Signature du demandeur ou du mandataire</div>
<div className="flex items-center gap-2">
<label className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 cursor-pointer">
<i className="w-4 h-4" data-lucide="upload"></i> Importer une signature
                          <input className="sr-only" type="file"/>
</label>
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50">
<i className="w-4 h-4" data-lucide="pen-line"></i> Signer
                        </button>
</div>
</div>
<div className="rounded-md border border-neutral-200 bg-neutral-50 p-4">
<div className="text-xs text-neutral-500 mb-2">Lieu et date</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<input className="rounded-md border border-neutral-200 bg-white p-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300" placeholder="Lieu" type="text"/>
<input className="rounded-md border border-neutral-200 bg-white p-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300" type="date"/>
</div>
</div>
</div>
</div>
</div>
</details>

<section className="rounded-lg border border-neutral-200 bg-white p-4 sm:p-6">
<h2 className="text-[18px] font-semibold tracking-tight text-neutral-900 mb-2" style={{fontFamily: '\'Source Sans Pro\', Inter, sans-serif'}}>Extraits du Code du Développement Territorial</h2>
<p className="text-sm text-neutral-700 leading-relaxed">
                Art. D.IV.33 — Dans les trente jours de la réception de l’envoi ou du récépissé de la demande [...]. Si la demande est complète, accusé de réception; si incomplète, relevé des pièces manquantes (délai de 180 jours pour compléter). À défaut, irrecevable. Délais et transmissions au fonctionnaire délégué selon modalités précisées.
              </p>
<p className="text-sm text-neutral-700 leading-relaxed mt-2">
                Art. R.IV.26-1 — Lorsque la demande de permis couvre des objets distincts [...], ceux-ci sont annexés au dossier et forment une seule demande.
              </p>
<p className="text-sm text-neutral-700 leading-relaxed mt-2">
                Art. R.IV.26-3 — Échelles alternatives, documents complémentaires, exemplaires supplémentaires, supports informatiques: modalités précisées dans le cadre des articles applicables.
              </p>
<div className="mt-4 h-px bg-neutral-200"></div>
<h3 className="mt-4 text-[16px] font-semibold tracking-tight text-neutral-900" style={{fontFamily: '\'Source Sans Pro\', Inter, sans-serif'}}>Protection des données</h3>
<p className="text-sm text-neutral-700 leading-relaxed">
                Les données personnelles sont utilisées uniquement pour le suivi du dossier, communiquées aux autorités prévues par le CoDT. Ni vendues ni utilisées à des fins marketing. Conservation selon la validité du permis/certificat. DPO SPW: dpo@spw.wallonie.be — Commune (Ferrières): dpo@ferrieres.be.
              </p>
</section>
</section>
</div>
</main>
</div>

<div className="fixed inset-y-0 right-0 z-50 hidden" id="proofsDrawer">
<div className="absolute inset-0 bg-black/20 backdrop-blur-sm" data-close-proofs=""></div>
<div className="relative ml-auto h-full w-full sm:w-[420px] bg-white border-l border-neutral-200 shadow-xl flex flex-col">
<div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-700" data-lucide="paperclip"></i>
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: '\'Source Sans Pro\', Inter, sans-serif'}}>Preuves</div>
</div>
<button className="rounded-md border border-neutral-200 bg-white p-1.5 hover:bg-neutral-50" data-close-proofs="">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="px-4 py-2 flex items-center gap-2 text-xs text-neutral-500">
          Champ: <span className="text-neutral-900 font-medium" id="proofsFieldLabel">—</span>
</div>
<div className="px-4">
<div className="inline-flex rounded-md border border-neutral-200 overflow-hidden">
<button className="proofs-tab px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-50" data-tab="cartes">
<i className="w-4 h-4 inline-block mr-1" data-lucide="map"></i> Cartes
            </button>
<button className="proofs-tab px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-50" data-tab="reglement">
<i className="w-4 h-4 inline-block mr-1" data-lucide="file-text"></i> Règlement
            </button>
<button className="proofs-tab px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-50" data-tab="historique">
<i className="w-4 h-4 inline-block mr-1" data-lucide="history"></i> Historique
            </button>
</div>
</div>

<div className="flex-1 overflow-auto">

<div className="p-4 space-y-3" id="tab-cartes">
<div className="flex flex-wrap items-center gap-2">
<span className="text-xs text-neutral-500">Couches</span>
<button className="proofs-layer px-2 py-1 text-xs rounded-full border border-neutral-200 hover:bg-neutral-50" data-layer="radon">
                Radon
              </button>
<button className="proofs-layer px-2 py-1 text-xs rounded-full border border-neutral-200 hover:bg-neutral-50" data-layer="ruissellement">
                Ruissellement
              </button>
<button className="proofs-layer px-2 py-1 text-xs rounded-full border border-neutral-200 hover:bg-neutral-50" data-layer="zonage">
                Zonage
              </button>
</div>
<div className="mt-2 rounded-md border border-neutral-200 overflow-hidden">
<div className="aspect-[4/3] bg-neutral-100 flex items-center justify-center">
<div className="text-neutral-500 text-sm">Carte (WalOnMap)</div>
</div>
<div className="px-3 py-2 text-[12px] text-neutral-600">Aperçu non contractuel. Ouvrir la source pour précision.</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-2.5 py-1.5 text-sm text-neutral-700 hover:bg-neutral-50">
<i className="w-4 h-4" data-lucide="external-link"></i> Ouvrir WalOnMap
              </button>
<button className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-2.5 py-1.5 text-sm text-neutral-700 hover:bg-neutral-50">
<i className="w-4 h-4" data-lucide="copy"></i> Copier lien
              </button>
</div>
</div>

<div className="hidden p-4 space-y-3" id="tab-reglement">
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-sm font-medium text-neutral-900">CoDT — Articles D.IV.5 à D.IV.13</div>
<div className="mt-1 text-sm text-neutral-700">Conditions pour l’octroi de dérogations: intérêt public, compatibilités, alternatives, paysage, environnement, etc.</div>
<div className="mt-2">
<button className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-2.5 py-1.5 text-sm text-neutral-700 hover:bg-neutral-50">
<i className="w-4 h-4" data-lucide="book-open"></i>
                  Voir les articles
                </button>
</div>
</div>
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-sm font-medium text-neutral-900">Guides (communal, régional)</div>
<ul className="mt-1 text-sm text-neutral-700 list-disc pl-5">
<li>Règlement communal prévention incendies (61019-RCB-0001-02)</li>
<li>GRU PMR (61019-RMR-0001-01), GRU Enseignes (61019-REP-0001-01)</li>
</ul>
</div>
</div>

<div className="hidden p-4 space-y-3" id="tab-historique">
<div className="text-sm text-neutral-700">Historique des modifications</div>
<ul className="divide-y divide-neutral-200">
<li className="py-2 text-sm">
<span className="font-medium text-neutral-900">J.-N. Defosse</span> — a complété le Cadre 2 (description) • <span className="text-neutral-500">hier, 16:42</span>
</li>
<li className="py-2 text-sm">
<span className="font-medium text-neutral-900">Julie De Keersmaecker</span> — a importé le plan de situation (annexes) • <span className="text-neutral-500">hier, 10:15</span>
</li>
<li className="py-2 text-sm">
<span className="font-medium text-neutral-900">Système</span> — a synchronisé WalOnMap (Cadre 5) • <span className="text-neutral-500">mar., 09:03</span>
</li>
</ul>
</div>
</div>
<div className="px-4 py-3 border-t border-neutral-200 flex items-center justify-end gap-2">
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" data-close-proofs="">
            Fermer
          </button>
</div>
</div>
</div>

<div className="fixed inset-0 z-40 hidden" id="validationOverlay">
<div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
<div className="relative mx-auto mt-16 max-w-2xl rounded-lg border border-neutral-200 bg-white shadow-xl">
<div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-700" data-lucide="filter"></i>
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: '\'Source Sans Pro\', Inter, sans-serif'}}>Champs nécessitant attention</div>
</div>
<button className="rounded-md border border-neutral-200 bg-white p-1.5 hover:bg-neutral-50" id="closeValidation">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="max-h-[60vh] overflow-auto p-4">
<ul className="space-y-2 text-sm" id="validationList">

</ul>
</div>
<div className="px-4 py-3 border-t border-neutral-200 text-right">
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" id="closeValidation2">Fermer</button>
</div>
</div>
</div>



    </>
  );
}
