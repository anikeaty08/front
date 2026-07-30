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
      function refreshIcons() { window.lucide && window.lucide.createIcons(); }
      document.addEventListener('DOMContentLoaded', refreshIcons);

      // Status menu toggle
      document.addEventListener('click', (e) => {
        const trigger = e.target.closest('.field-status-trigger');
        const anyMenu = document.querySelectorAll('.status-menu');
        // Close all menus by default
        anyMenu.forEach(m => m.classList.add('hidden'));

        if (trigger) {
          const id = trigger.getAttribute('data-menu-for');
          const menu = document.querySelector(`.status-menu[data-menu="${id}"]`);
          if (menu) {
            menu.classList.toggle('hidden');
          }
        }
      });

      // Update field status helper
      function setFieldStatus(fieldId, status) {
        const field = document.querySelector(`.field[data-field-id="${fieldId}"]`);
        if (!field) return;
        field.setAttribute('data-status', status);
        const trigger = document.querySelector(`.field-status-trigger[data-menu-for="${fieldId}"]`);
        if (trigger) {
          const map = {
            valid: {text: 'Validé', cls: 'border-green-200 bg-green-50 text-green-700'},
            warning: {text: 'À vérifier', cls: 'border-amber-200 bg-amber-50 text-amber-700'},
            blocking: {text: 'Bloquant', cls: 'border-red-200 bg-red-50 text-red-700'},
            discuss: {text: 'À discuter', cls: 'border-blue-200 bg-blue-50 text-blue-700'}
          };
          trigger.className = 'field-status-trigger inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs hover:opacity-95 transition ' + map[status].cls + ' border';
          trigger.title = 'Statut: ' + map[status].text;
          const icon = trigger.querySelector('i');
          if (icon) {
            icon.setAttribute('data-lucide',
              status === 'valid' ? 'check-circle' :
              status === 'warning' ? 'alert-triangle' :
              status === 'blocking' ? 'octagon-x' : 'messages-square'
            );
          }
          trigger.lastChild && (trigger.lastChild.textContent = ' ' + map[status].text);
        }
        refreshIcons();
        computeProgress();
        populateValidationLists();
      }

      // Status menu actions
      document.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-set-status]');
        if (!btn) return;
        const status = btn.getAttribute('data-set-status');
        const menu = btn.closest('.status-menu');
        if (!menu) return;
        const fieldId = menu.getAttribute('data-menu');
        setFieldStatus(fieldId, status);
        menu.classList.add('hidden');
        showToast('Statut mis à jour');
      });

      // Progress computation
      function computeProgress() {
        const fields = Array.from(document.querySelectorAll('.field'));
        const total = fields.length;
        const valid = fields.filter(f => f.getAttribute('data-status') === 'valid').length;
        const warn = fields.filter(f => f.getAttribute('data-status') === 'warning').length;
        const block = fields.filter(f => f.getAttribute('data-status') === 'blocking').length;

        const percent = total ? Math.round((valid / total) * 100) : 0;
        const bar = document.getElementById('progress-bar');
        const val = document.getElementById('progress-value');
        if (bar) bar.style.width = percent + '%';
        if (val) val.textContent = percent + '%';

        // Update drawer summary
        const vp = document.getElementById('val-percent');
        const vt = document.getElementById('val-total');
        const vv = document.getElementById('val-valid');
        const vw = document.getElementById('val-warn');
        const vb = document.getElementById('val-block');
        const vbar = document.getElementById('val-bar');
        if (vp) vp.textContent = percent + '%';
        if (vt) vt.textContent = total;
        if (vv) vv.textContent = valid;
        if (vw) vw.textContent = warn;
        if (vb) vb.textContent = block;
        if (vbar) vbar.style.width = percent + '%';
      }
      window.addEventListener('load', computeProgress);

      // Validation drawer toggle
      const drawer = document.getElementById('validationDrawer');
      const btnValidation = document.getElementById('btnValidation');
      const closeVal = document.querySelector('[data-close-validation]');
      function openDrawer() { drawer.classList.remove('translate-x-full'); }
      function closeDrawer() { drawer.classList.add('translate-x-full'); }
      btnValidation && btnValidation.addEventListener('click', () => { populateValidationLists(); openDrawer(); });
      closeVal && closeVal.addEventListener('click', closeDrawer);
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeDrawer(); closeHistory(); closeProofs(); } });

      // Populate lists
      function populateValidationLists() {
        const blocking = document.getElementById('list-blocking');
        const warning = document.getElementById('list-warning');
        if (!blocking || !warning) return;
        blocking.innerHTML = '';
        warning.innerHTML = '';
        document.querySelectorAll('.field').forEach(field => {
          const status = field.getAttribute('data-status');
          if (status !== 'blocking' && status !== 'warning') return;
          const id = field.getAttribute('data-field-id');
          const labelEl = field.querySelector('label, .font-medium, .text-[13px]');
          const label = labelEl ? labelEl.textContent.trim() : id;
          const anchor = field.closest('details')?.id || '';
          const li = document.createElement('li');
          li.innerHTML = `
            <a href="#${anchor}" class="group flex items-center justify-between rounded-md border border-neutral-200 px-2.5 py-2 hover:bg-neutral-50">
              <span class="flex items-center gap-2">
                <i data-lucide="${status === 'blocking' ? 'octagon-x' : 'alert-triangle'}" class="w-4 h-4 ${status === 'blocking' ? 'text-red-600' : 'text-amber-600'}"></i>
                <span class="truncate">${label}</span>
              </span>
              <i data-lucide="arrow-up-right" class="w-4 h-4 text-neutral-400"></i>
            </a>`;
          (status === 'blocking' ? blocking : warning).appendChild(li);
        });
        refreshIcons();
      }

      // History drawer
      const historyDrawer = document.getElementById('historyDrawer');
      const btnHistory = document.getElementById('btnHistory');
      const closeHistoryBtn = document.querySelector('[data-close-history]');
      function openHistory() { historyDrawer.classList.remove('translate-x-full'); }
      function closeHistory() { historyDrawer.classList.add('translate-x-full'); }
      btnHistory && btnHistory.addEventListener('click', openHistory);
      closeHistoryBtn && closeHistoryBtn.addEventListener('click', closeHistory);

      // Proofs modal
      const proofsModal = document.getElementById('proofsModal');
      function openProofs(fieldId, tab, context) {
        proofsModal.classList.remove('hidden');
        const label = document.querySelector(`.field[data-field-id="${fieldId}"] label, .field[data-field-id="${fieldId}"] .font-medium`);
        document.getElementById('proofsFieldLabel').textContent = label ? label.textContent.trim() : fieldId;
        document.getElementById('proofsContext').textContent = context ? `Contexte: ${context}` : '';
        activateTab(tab || 'cartes');
        refreshIcons();
      }
      function closeProofs() { proofsModal.classList.add('hidden'); }
      document.querySelectorAll('[data-open-proofs]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const fieldId = btn.getAttribute('data-field');
          const tab = btn.getAttribute('data-proofs-tab');
          const context = btn.getAttribute('data-proofs-context') || '';
          openProofs(fieldId, tab, context);
        });
      });
      document.querySelectorAll('[data-close-proofs]').forEach(b => b.addEventListener('click', closeProofs));
      proofsModal.addEventListener('click', (e) => { if (e.target === proofsModal.querySelector('.absolute.inset-0.bg-black\\/40')) closeProofs(); });

      // Tabs
      function activateTab(name) {
        document.querySelectorAll('.tab-panel').forEach(p => p.classList.add('hidden'));
        const panel = document.getElementById(`tab-${name}`);
        panel && panel.classList.remove('hidden');
      }
      document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => activateTab(btn.getAttribute('data-tab')));
      });

      // Suggestion menus
      document.addEventListener('click', (e) => {
        const btn = e.target.closest('.suggest-btn');
        // Close all suggestion menus first
        document.querySelectorAll('[id^="menu-"]').forEach(m => m.classList.add('hidden'));
        if (btn) {
          const menuId = btn.getAttribute('data-menu-id');
          const menu = document.getElementById(menuId);
          if (menu) menu.classList.toggle('hidden');
        }
      });
      document.querySelectorAll('.suggest-option').forEach(opt => {
        opt.addEventListener('click', () => {
          const targetId = opt.getAttribute('data-target');
          const txt = opt.getAttribute('data-insert') || '';
          const edit = opt.getAttribute('data-edit') === 'true';
          const ta = document.getElementById(targetId);
          if (!ta) return;
          const sep = ta.value && !ta.value.endsWith('\n') ? '\n' : '';
          ta.value += sep + txt + (edit ? ' ' : '');
          ta.focus();
          // Close menu
          const menu = opt.closest('[id^="menu-"]');
          menu && menu.classList.add('hidden');
          showToast('Suggestion insérée');
        });
      });

      // Drag & drop Annexes
      const dropzone = document.getElementById('dropzone');
      const input = document.getElementById('fileInput');
      const list = document.getElementById('fileList');

      function addFileItem(name) {
        const li = document.createElement('li');
        li.className = 'rounded-md border border-neutral-200 bg-white p-3 flex items-center justify-between';
        li.innerHTML = `
          <div class="flex items-center gap-3">
            <i data-lucide="${name.match(/\\.(png|jpg|jpeg)$/i) ? 'image' : 'file'}" class="w-4 h-4 text-neutral-500"></i>
            <span class="text-sm">${name}`}
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
<div className="h-8 w-8 rounded-md bg-neutral-900 text-white flex items-center justify-center text-sm font-semibold tracking-tight" style={{fontFamily: `'Source Sans Pro', Inter, sans-serif`}}>
                A9
              </div>
<div className="flex flex-col">
<h1 className="text-[20px] sm:text-[22px] leading-tight tracking-tight font-semibold text-neutral-900" style={{fontFamily: `'Source Sans Pro', Inter, sans-serif`}}>
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

<button className="group inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900 transition" id="btnValidation" title="Ouvrir le récapitulatif des champs à traiter">
<i className="w-4 h-4 text-neutral-700 group-hover:text-neutral-900" data-lucide="filter"></i>
                  Mode Validation
                </button>

<button className="group inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900 transition" id="btnHistory" title="Voir l'historique des modifications">
<i className="w-4 h-4" data-lucide="clock"></i>
                  Historique
                </button>

<button className="group inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900 transition" title="Partager ce dossier">
<i className="w-4 h-4" data-lucide="share-2"></i>
                  Partager
                </button>

<button className="group inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900 transition" title="Exporter au format PDF">
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
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: `'Source Sans Pro', Inter, sans-serif`}}>Navigation</div>
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


<details className="group rounded-lg border border-neutral-200 bg-neutral-50 open:shadow-sm" id="cadre-1">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: `'Source Sans Pro', Inter, sans-serif`}}>Cadre 1 — Demandeur</div>
<span className="text-xs text-neutral-500">Prérempli (projet Sol Paradis)</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700 field-status-badge" data-status-badge="valid" title="Statut: Validé — champ complet">
<i className="w-3.5 h-3.5" data-lucide="check-circle"></i> Validé
                    </span>
<i className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180 p-1.5 rounded-md hover:bg-neutral-100 mr-1" data-lucide="chevron-down"></i>
</div>
</div>
</summary>
<div className="border-t border-neutral-200">

<div className="p-4 sm:p-6 space-y-6">

<div className="relative group/field field" data-field-id="c1-personne-physique" data-proof-count="1" data-status="valid">

<button className="absolute left-2 top-2 opacity-0 group-hover/field:opacity-100 transition rounded-md hover:bg-neutral-100 p-1" data-field="c1-personne-physique" data-open-proofs="" title="Voir les preuves liées">
<i className="w-4 h-4 text-neutral-500" data-lucide="paperclip"></i>
</button>
<div className="flex items-start gap-4">
<div className="flex-1">
<div className="text-[13px] text-neutral-600 font-medium">Personne physique</div>
<div className="mt-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-md border border-neutral-200 p-3 hover:border-neutral-300 transition">
<div className="text-[13px] text-neutral-600 font-medium">Nom</div>
<div className="text-sm text-neutral-900">DEFOSSE</div>
</div>
<div className="rounded-md border border-neutral-200 p-3 hover:border-neutral-300 transition">
<div className="text-[13px] text-neutral-600 font-medium">Prénom</div>
<div className="text-sm text-neutral-900">Jean-Nicolas</div>
</div>
</div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-[13px] text-neutral-600 font-medium">Rue</div>
<div className="text-sm text-neutral-900">Sol Paradis n° 2A boîte /</div>
</div>
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-[13px] text-neutral-600 font-medium">Code postal</div>
<div className="text-sm text-neutral-900">4190</div>
</div>
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-[13px] text-neutral-600 font-medium">Commune</div>
<div className="text-sm text-neutral-900">MY</div>
</div>
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-[13px] text-neutral-600 font-medium">Pays</div>
<div className="text-sm text-neutral-900">Belgique</div>
</div>
</div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-[13px] text-neutral-600 font-medium">Téléphone</div>
<div className="text-sm text-neutral-900">0496/03.08.38</div>
</div>
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-[13px] text-neutral-600 font-medium">Fax</div>
<div className="text-sm text-neutral-900">/</div>
</div>
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-[13px] text-neutral-600 font-medium">Courriel</div>
<div className="text-sm text-neutral-900">jn.defosse@gmail.com</div>
</div>
</div>
</div>

<div className="relative">
<button className="field-status-trigger inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700 hover:bg-green-100 transition" data-menu-for="c1-personne-physique" title="Statut: Validé — champ complet">
<i className="w-3.5 h-3.5" data-lucide="check-circle"></i> Validé
                        </button>
<div className="status-menu absolute right-0 mt-2 hidden w-52 overflow-hidden rounded-md border border-neutral-200 bg-white shadow-lg" data-menu="c1-personne-physique">
<div className="px-3 py-2 text-[11px] text-neutral-500 border-b border-neutral-100">Statut du champ</div>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="valid" title="Marquer comme valide">
<i className="w-4 h-4 text-green-600" data-lucide="check-circle"></i> Validé
                          </button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="warning" title="Nécessite une vérification">
<i className="w-4 h-4 text-amber-600" data-lucide="alert-triangle"></i> À vérifier
                          </button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="blocking" title="Bloquant: à compléter avant envoi">
<i className="w-4 h-4 text-red-600" data-lucide="octagon-x"></i> Bloquant
                          </button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="discuss" title="À discuter en équipe">
<i className="w-4 h-4 text-blue-600" data-lucide="messages-square"></i> À discuter
                          </button>
</div>
</div>
</div>
</div>

<div className="relative group/field field" data-field-id="c1-auteur-projet" data-proof-count="0" data-status="valid">
<button className="absolute left-2 top-2 opacity-0 group-hover/field:opacity-100 transition rounded-md hover:bg-neutral-100 p-1" data-field="c1-auteur-projet" data-open-proofs="" title="Voir les preuves liées">
<i className="w-4 h-4 text-neutral-500" data-lucide="paperclip"></i>
</button>
<div className="flex items-start gap-4">
<div className="flex-1">
<div className="text-[13px] text-neutral-600 font-medium">Auteur de projet</div>
<div className="mt-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-[13px] text-neutral-600 font-medium">Nom</div>
<div className="text-sm text-neutral-900">De Keersmaecker</div>
</div>
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-[13px] text-neutral-600 font-medium">Prénom</div>
<div className="text-sm text-neutral-900">Julie</div>
</div>
</div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-[13px] text-neutral-600 font-medium">Dénomination / raison sociale</div>
<div className="text-sm text-neutral-900">/</div>
</div>
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-[13px] text-neutral-600 font-medium">Forme juridique</div>
<div className="text-sm text-neutral-900">Indépendant personne physique</div>
</div>
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-[13px] text-neutral-600 font-medium">Qualité</div>
<div className="text-sm text-neutral-900">Conseil technique en urbanisme</div>
</div>
</div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-[13px] text-neutral-600 font-medium">Rue</div>
<div className="text-sm text-neutral-900">Rue Crollé n° 34 boîte /</div>
</div>
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-[13px] text-neutral-600 font-medium">Code postal</div>
<div className="text-sm text-neutral-900">1380</div>
</div>
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-[13px] text-neutral-600 font-medium">Commune</div>
<div className="text-sm text-neutral-900">Lasne</div>
</div>
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-[13px] text-neutral-600 font-medium">Pays</div>
<div className="text-sm text-neutral-900">Belgique</div>
</div>
</div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-[13px] text-neutral-600 font-medium">Téléphone</div>
<div className="text-sm text-neutral-900">+32 472 81 20 91</div>
</div>
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-[13px] text-neutral-600 font-medium">Fax</div>
<div className="text-sm text-neutral-900">/</div>
</div>
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-[13px] text-neutral-600 font-medium">Courriel</div>
<div className="text-sm text-neutral-900">juliedk.conseil@gmail.com</div>
</div>
</div>
</div>

<div className="relative">
<button className="field-status-trigger inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700 hover:bg-green-100 transition" data-menu-for="c1-auteur-projet" title="Statut: Validé — champ complet">
<i className="w-3.5 h-3.5" data-lucide="check-circle"></i> Validé
                        </button>
<div className="status-menu absolute right-0 mt-2 hidden w-52 overflow-hidden rounded-md border border-neutral-200 bg-white shadow-lg" data-menu="c1-auteur-projet">
<div className="px-3 py-2 text-[11px] text-neutral-500 border-b border-neutral-100">Statut du champ</div>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="valid" title="Marquer comme valide"><i className="w-4 h-4 text-green-600" data-lucide="check-circle"></i> Validé</button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="warning" title="Nécessite une vérification"><i className="w-4 h-4 text-amber-600" data-lucide="alert-triangle"></i> À vérifier</button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="blocking" title="Bloquant: à compléter avant envoi"><i className="w-4 h-4 text-red-600" data-lucide="octagon-x"></i> Bloquant</button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="discuss" title="À discuter en équipe"><i className="w-4 h-4 text-blue-600" data-lucide="messages-square"></i> À discuter</button>
</div>
</div>
</div>
</div>
</div>
</div>
</details>

<details className="group rounded-lg border border-neutral-200 bg-neutral-50 open:shadow-sm" id="cadre-2">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: `'Source Sans Pro', Inter, sans-serif`}}>Cadre 2 — Objet de la demande</div>
<span className="text-xs text-neutral-500">Description succincte + phasage</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700 field-status-badge" data-status-badge="warning" title="Statut: À vérifier — nécessite une attention">
<i className="w-3.5 h-3.5" data-lucide="alert-triangle"></i> À vérifier
                    </span>
<i className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180 p-1.5 rounded-md hover:bg-neutral-100 mr-1" data-lucide="chevron-down"></i>
</div>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="p-4 sm:p-6 space-y-6">

<div className="relative group/field field" data-field-id="c2-description" data-proof-count="0" data-status="warning">
<button className="absolute left-2 top-2 opacity-0 group-hover/field:opacity-100 transition rounded-md hover:bg-neutral-100 p-1" data-field="c2-description" data-open-proofs="" title="Voir les preuves liées">
<i className="w-4 h-4 text-neutral-500" data-lucide="paperclip"></i>
</button>
<div className="flex items-start gap-4">
<div className="flex-1">
<label className="text-[13px] text-neutral-600 font-medium">Description succincte du projet</label>
<textarea className="mt-2 w-full rounded-md border border-neutral-200 bg-white p-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300 transition" id="c2-textarea" rows="5">La demande porte sur l’aménagement des abords d’une habitation par :
- la construction d’un mur de soutènement à gauche de l’habitation engendrant une modification sensible du relief du sol,
- l’aménagement de terrasse aux abords directs de la construction sans modification sensible du relief du sol.</textarea>

<div className="relative inline-block mt-2">
<button className="suggest-btn inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-xs text-neutral-700 hover:bg-neutral-50" data-menu-id="menu-c2" data-target="c2-textarea" title="✨ Suggérer">
<i className="w-3.5 h-3.5" data-lucide="sparkles"></i> Suggérer
                          </button>
<div className="hidden absolute z-20 mt-1 w-80 rounded-md border border-neutral-200 bg-white shadow-md" id="menu-c2">
<div className="px-3 py-2 text-[11px] text-neutral-500 border-b border-neutral-100">Suggestions rapides</div>
<button className="suggest-option flex w-full items-start gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-edit="true" data-insert="Préciser dimensions: longueur/hauteur du mur de soutènement, matériaux (gabions/béton), parement et drainage." data-target="c2-textarea">
<i className="w-4 h-4 text-neutral-600 mt-0.5" data-lucide="plus"></i>
<div className="text-left">
<div className="text-neutral-900">Insérer et éditer</div>
<div className="text-[12px] text-neutral-600">Dimensions et matériaux</div>
</div>
</button>
<button className="suggest-option flex w-full items-start gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-edit="true" data-insert="Décrire mesures d’intégration paysagère: teinte, végétalisation, traitement des eaux pluviales." data-target="c2-textarea">
<i className="w-4 h-4 text-neutral-600 mt-0.5" data-lucide="plus"></i>
<div className="text-left">
<div className="text-neutral-900">Insérer et éditer</div>
<div className="text-[12px] text-neutral-600">Intégration paysagère</div>
</div>
</button>
<button className="suggest-option flex w-full items-start gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-edit="true" data-insert="Mentionner absence de phasage et calendrier prévisionnel (début/fin travaux)." data-target="c2-textarea">
<i className="w-4 h-4 text-neutral-600 mt-0.5" data-lucide="plus"></i>
<div className="text-left">
<div className="text-neutral-900">Insérer et éditer</div>
<div className="text-[12px] text-neutral-600">Calendrier</div>
</div>
</button>
</div>
</div>

<div className="hidden mt-2 flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-700">
<i className="w-3.5 h-3.5" data-lucide="sparkles"></i> Suggestions
                          </span>
</div>
<div className="mt-1 text-[12px] text-neutral-500">IA: utiliser “Suggérer” pour enrichir la description.</div>
</div>

<div className="relative">
<button className="field-status-trigger inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700 hover:bg-amber-100 transition" data-menu-for="c2-description" title="Statut: À vérifier — nécessite une attention">
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

<div className="relative group/field field" data-field-id="c2-phasage" data-proof-count="0" data-status="valid">
<button className="absolute left-2 top-2 opacity-0 group-hover/field:opacity-100 transition rounded-md hover:bg-neutral-100 p-1" data-field="c2-phasage" data-open-proofs="" title="Voir les preuves liées">
<i className="w-4 h-4 text-neutral-500" data-lucide="paperclip"></i>
</button>
<div className="flex items-start gap-4">
<div className="flex-1">
<label className="text-[13px] text-neutral-600 font-medium">Phasage</label>
<div className="mt-2 rounded-md border border-neutral-200 p-3 text-sm">
                          Pas de phasage
                        </div>
</div>
<div className="relative">
<button className="field-status-trigger inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700 hover:bg-green-100 transition" data-menu-for="c2-phasage" title="Statut: Validé — champ complet">
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

<details className="group rounded-lg border border-neutral-200 bg-neutral-50" id="cadre-3">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: `'Source Sans Pro', Inter, sans-serif`}}>Cadre 3 — Coordonnées d’implantation</div>
</div>
<i className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180 p-1.5 rounded-md hover:bg-neutral-100 mr-1" data-lucide="chevron-down"></i>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="p-4 sm:p-6 space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-[13px] text-neutral-600 font-medium">Rue</div>
<div className="text-sm text-neutral-900">Sol Paradis n° 2A</div>
</div>
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-[13px] text-neutral-600 font-medium">Commune</div>
<div className="text-sm text-neutral-900">Ferrières</div>
</div>
</div>
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-[13px] text-neutral-600 font-medium">Parcelles cadastrales concernées</div>
<div className="mt-2 text-sm text-neutral-900">Parcelle 1 — Commune: Ferrières, Division: 3, Section: A, N° et exposant: 0685A002, Propriétaire: Le demandeur</div>
<div className="mt-2 text-sm text-neutral-700">Existence de servitudes et autres droits: Non</div>
</div>
</div>
</div>
</details>

<details className="group rounded-lg border border-neutral-200 bg-neutral-50" id="cadre-4">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: `'Source Sans Pro', Inter, sans-serif`}}>Cadre 4 — Antécédents de la demande</div>
<i className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180 p-1.5 rounded-md hover:bg-neutral-100 mr-1" data-lucide="chevron-down"></i>
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

<details className="group rounded-lg border border-neutral-200 bg-neutral-50 open:shadow-sm" id="cadre-5">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: `'Source Sans Pro', Inter, sans-serif`}}>Cadre 5 — Situation juridique du bien</div>
<span className="text-xs text-neutral-500">Auto (WalOnMap)</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700 field-status-badge" data-status-badge="valid" title="Statut: Validé — champ complet">
<i className="w-3.5 h-3.5" data-lucide="check-circle"></i> Validé
                    </span>
<i className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180 p-1.5 rounded-md hover:bg-neutral-100 mr-1" data-lucide="chevron-down"></i>
</div>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="p-4 sm:p-6 space-y-6">

<div className="relative group/field field" data-field-id="c5-codt" data-proof-count="2" data-status="valid">
<button className="absolute left-2 top-2 opacity-0 group-hover/field:opacity-100 transition rounded-md hover:bg-neutral-100 p-1" data-field="c5-codt" data-open-proofs="" title="Voir les preuves liées">
<i className="w-4 h-4 text-neutral-500" data-lucide="paperclip"></i>
</button>
<div className="flex items-start gap-4">
<div className="flex-1 space-y-3">
<div className="text-[13px] text-neutral-600 font-medium">Documents CoDT et zonage applicables</div>
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
<button className="field-status-trigger inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700 hover:bg-green-100 transition" data-menu-for="c5-codt" title="Statut: Validé — champ complet">
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

<details className="group rounded-lg border border-neutral-200 bg-neutral-50 open:shadow-sm" id="cadre-6">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: `'Source Sans Pro', Inter, sans-serif`}}>Cadre 6 — Liste et motivation des dérogations et écarts</div>
<span className="text-xs text-neutral-500">Justification aux articles D.IV.5 à D.IV.13</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-2.5 py-1 text-xs font-medium text-red-700 field-status-badge" data-status-badge="blocking" title="Statut: Bloquant — à compléter avant envoi">
<i className="w-3.5 h-3.5" data-lucide="octagon-x"></i> Bloquant
                    </span>
<i className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180 p-1.5 rounded-md hover:bg-neutral-100 mr-1" data-lucide="chevron-down"></i>
</div>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="p-4 sm:p-6 space-y-6">
<div className="relative group/field field" data-field-id="c6-derogation" data-proof-count="0" data-status="blocking">
<button className="absolute left-2 top-2 opacity-0 group-hover/field:opacity-100 transition rounded-md hover:bg-neutral-100 p-1" data-field="c6-derogation" data-open-proofs="" title="Voir les preuves liées">
<i className="w-4 h-4 text-neutral-500" data-lucide="paperclip"></i>
</button>
<div className="flex items-start gap-4">
<div className="flex-1">
<label className="text-[13px] text-neutral-600 font-medium">Justification</label>
<textarea className="mt-2 w-full rounded-md border border-neutral-200 bg-white p-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300 transition" id="c6-textarea" placeholder="Rédiger la justification de la dérogation au Plan de Secteur, et démontrer le respect des conditions (articles D.IV.5 à D.IV.13 du CoDT)." rows="10"></textarea>

<div className="relative inline-block mt-2">
<button className="suggest-btn inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-2. 5 py-1 text-xs text-neutral-700 hover:bg-neutral-50" data-menu-id="menu-c6" data-target="c6-textarea" title="✨ Suggérer">
<i className="w-3.5 h-3.5" data-lucide="sparkles"></i> Suggérer
                          </button>
<div className="hidden absolute z-20 mt-1 w-[28rem] rounded-md border border-neutral-200 bg-white shadow-md" id="menu-c6">
<div className="px-3 py-2 text-[11px] text-neutral-500 border-b border-neutral-100">Motifs types de dérogation</div>
<button className="suggest-option flex w-full items-start gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-edit="true" data-insert="Conformité avec l’esprit des dispositions du CoDT et absence d’atteinte aux intérêts protégés par le plan de secteur. La dérogation améliore la sécurité et la stabilité du terrain (mur de soutènement), sans porter atteinte au paysage." data-target="c6-textarea">
<i className="w-4 h-4 text-neutral-600 mt-0.5" data-lucide="plus"></i>
<div className="text-left">
<div className="text-neutral-900">Insérer et éditer</div>
<div className="text-[12px] text-neutral-600">Esprit du plan et intérêts protégés</div>
</div>
</button>
<button className="suggest-option flex w-full items-start gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-edit="true" data-insert="Intérêt général et proportionnalité: l’intervention est limitée au strict nécessaire, proportionnée à la pente et intègre des dispositifs de drainage pour éviter les nuisances (ruissellement, glissements)." data-target="c6-textarea">
<i className="w-4 h-4 text-neutral-600 mt-0.5" data-lucide="plus"></i>
<div className="text-left">
<div className="text-neutral-900">Insérer et éditer</div>
<div className="text-[12px] text-neutral-600">Intérêt général et proportionnalité</div>
</div>
</button>
<button className="suggest-option flex w-full items-start gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-edit="true" data-insert="Absence d’alternative raisonnable: les solutions sans mur de soutènement engendreraient des risques pour la stabilité et l’écoulement des eaux, et ne permettraient pas l’usage normal du fonds." data-target="c6-textarea">
<i className="w-4 h-4 text-neutral-600 mt-0.5" data-lucide="plus"></i>
<div className="text-left">
<div className="text-neutral-900">Insérer et éditer</div>
<div className="text-[12px] text-neutral-600">Alternatives et contraintes</div>
</div>
</button>
<button className="suggest-option flex w-full items-start gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-edit="true" data-insert="Intégration paysagère: parement en pierre locale/teinte neutre, végétalisation en retombée, hauteur fractionnée, recul par rapport aux limites, traitement des eaux par drain agricole et puits d’infiltration." data-target="c6-textarea">
<i className="w-4 h-4 text-neutral-600 mt-0.5" data-lucide="plus"></i>
<div className="text-left">
<div className="text-neutral-900">Insérer et éditer</div>
<div className="text-[12px] text-neutral-600">Intégration paysagère et EP</div>
</div>
</button>
</div>
</div>
<div className="mt-1 text-[12px] text-neutral-500">IA: utilisez “Suggérer” pour structurer l’argumentaire juridique.</div>
</div>

<div className="relative">
<button className="field-status-trigger inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-2.5 py-1 text-xs font-medium text-700 hover:bg-red-100 transition" data-menu-for="c6-derogation" title="Statut: Bloquant — à compléter avant envoi">
<i className="w-3.5 h-3.5" data-lucide="octagon-x"></i> Bloquant
                        </button>
<div className="status-menu absolute right-0 mt-2 hidden w-52 overflow-hidden rounded-md border border-neutral-200 bg-white shadow-lg" data-menu="c6-derogation">
<div className="px-3 py-2 text-[11px] text-neutral-500 border-b border-neutral-100">Statut du champ</div>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="valid" title="Marquer comme valide">
<i className="w-4 h-4 text-green-600" data-lucide="check-circle"></i> Validé
                          </button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="warning" title="Nécessite une vérification">
<i className="w-4 h-4 text-amber-600" data-lucide="alert-triangle"></i> À vérifier
                          </button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="blocking" title="Bloquant: à compléter avant envoi">
<i className="w-4 h-4 text-red-600" data-lucide="octagon-x"></i> Bloquant
                          </button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="discuss" title="À discuter en équipe">
<i className="w-4 h-4 text-blue-600" data-lucide="messages-square"></i> À discuter
                          </button>
</div>
</div>
</div>
</div>

<div className="relative group/field field" data-field-id="c6-ecarts" data-proof-count="0" data-status="warning">
<button className="absolute left-2 top-2 opacity-0 group-hover/field:opacity-100 transition rounded-md hover:bg-neutral-100 p-1" data-field="c6-ecarts" data-open-proofs="" title="Voir les preuves liées">
<span className="relative inline-block">
<i className="w-4 h-4 text-neutral-500" data-lucide="paperclip"></i>
<span className="absolute -right-1 -top-1 h-4 min-w-[1rem] px-1 rounded-full bg-neutral-900 text-white text-[10px] flex items-center justify-center">0</span>
</span>
</button>
<div className="flex items-start gap-4">
<div className="flex-1">
<label className="text-[13px] text-neutral-600 font-medium">Écarts mineurs (le cas échéant)</label>
<input className="mt-2 w-full rounded-md border border-neutral-200 bg-white p-2.5 text-sm outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300 transition" placeholder="Ex.: Légère adaptation des hauteurs de garde-corps de la terrasse..." type="text" />
<div className="mt-1 text-[12px] text-neutral-500">Préciser la nature, l’ampleur et les mesures compensatoires.</div>
</div>
<div className="relative">
<button className="field-status-trigger inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700 hover:bg-amber-100 transition" data-menu-for="c6-ecarts" title="Statut: À vérifier — nécessite une attention">
<i className="w-3.5 h-3.5" data-lucide="alert-triangle"></i> À vérifier
                        </button>
<div className="status-menu absolute right-0 mt-2 hidden w-52 overflow-hidden rounded-md border border-neutral-200 bg-white shadow-lg" data-menu="c6-ecarts">
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

<details className="group rounded-lg border border-neutral-200 bg-neutral-50" id="cadre-7">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: `'Source Sans Pro', Inter, sans-serif`}}>Cadre 7 — Incidences sur l’environnement</div>
<i className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180 p-1.5 rounded-md hover:bg-neutral-100 mr-1" data-lucide="chevron-down"></i>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="p-4 sm:p-6 space-y-6">
<div className="relative group/field field" data-field-id="c7-eaux" data-proof-count="1" data-status="valid">
<button className="absolute left-2 top-2 opacity-0 group-hover/field:opacity-100 transition rounded-md hover:bg-neutral-100 p-1" data-field="c7-eaux" data-open-proofs="" data-proofs-context="ruissellement" data-proofs-tab="cartes" title="Voir les cartes de ruissellement">
<span className="relative inline-block">
<i className="w-4 h-4 text-neutral-500" data-lucide="paperclip"></i>
<span className="absolute -right-1 -top-1 h-4 min-w-[1rem] px-1 rounded-full bg-neutral-900 text-white text-[10px] flex items-center justify-center">1</span>
</span>
</button>
<div className="flex items-start gap-4">
<div className="flex-1">
<div className="text-[13px] text-neutral-600 font-medium">Eaux pluviales</div>
<div className="mt-2 text-sm rounded-md border border-neutral-200 p-3">
                          Mise en place d’un drain derrière le mur, d’un géotextile et d’un puits d’infiltration dimensionné selon la surface imperméabilisée. Aucun rejet sur la voirie.
                        </div>
</div>
<div className="relative">
<button className="field-status-trigger inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700 hover:bg-green-100 transition" data-menu-for="c7-eaux" title="Statut: Validé — champ complet">
<i className="w-3.5 h-3.5" data-lucide="check-circle"></i> Validé
                        </button>
<div className="status-menu absolute right-0 mt-2 hidden w-52 overflow-hidden rounded-md border border-neutral-200 bg-white shadow-lg" data-menu="c7-eaux">
<div className="px-3 py-2 text-[11px] text-neutral-500 border-b border-neutral-100">Statut du champ</div>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="valid"><i className="w-4 h-4 text-green-600" data-lucide="check-circle"></i> Validé</button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="warning"><i className="w-4 h-4 text-amber-600" data-lucide="alert-triangle"></i> À vérifier</button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="blocking"><i className="w-4 h-4 text-red-600" data-lucide="octagon-x"></i> Bloquant</button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="discuss"><i className="w-4 h-4 text-blue-600" data-lucide="messages-square"></i> À discuter</button>
</div>
</div>
</div>
</div>
<div className="relative group/field field" data-field-id="c7-paysage" data-proof-count="0" data-status="valid">
<div className="flex items-start gap-4">
<div className="flex-1">
<div className="text-[13px] text-neutral-600 font-medium">Intégration paysagère</div>
<div className="mt-2 text-sm rounded-md border border-neutral-200 p-3">
                          Parement en pierre locale teinte grise, hauteur fractionnée, plantation grimpante (lierre/chevrefeuille) en lisière de mur, teintes neutres pour les terrasses.
                        </div>
</div>
<div className="relative">
<button className="field-status-trigger inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700 hover:bg-green-100 transition" data-menu-for="c7-paysage" title="Statut: Validé — champ complet">
<i className="w-3.5 h-3.5" data-lucide="check-circle"></i> Validé
                        </button>
<div className="status-menu absolute right-0 mt-2 hidden w-52 overflow-hidden rounded-md border border-neutral-200 bg-white shadow-lg" data-menu="c7-paysage">
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

<details className="group rounded-lg border border-neutral-200 bg-neutral-50" id="cadre-8">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: `'Source Sans Pro', Inter, sans-serif`}}>Cadre 8 — Sols</div>
<i className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180 p-1.5 rounded-md hover:bg-neutral-100 mr-1" data-lucide="chevron-down"></i>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="p-4 sm:p-6 space-y-6">
<div className="relative group/field field" data-field-id="c8-radon" data-proof-count="1" data-status="warning">
<button className="absolute left-2 top-2 opacity-0 group-hover/field:opacity-100 transition rounded-md hover:bg-neutral-100 p-1" data-field="c8-radon" data-open-proofs="" data-proofs-context="radon" data-proofs-tab="cartes" title="Voir la carte radon">
<span className="relative inline-block">
<i className="w-4 h-4 text-neutral-500" data-lucide="paperclip"></i>
<span className="absolute -right-1 -top-1 h-4 min-w-[1rem] px-1 rounded-full bg-neutral-900 text-white text-[10px] flex items-center justify-center">1</span>
</span>
</button>
<div className="flex items-start gap-4">
<div className="flex-1">
<div className="text-[13px] text-neutral-600 font-medium">Radon</div>
<div className="mt-2 text-sm rounded-md border border-neutral-200 p-3">
                          Zone radon potentiellement élevée (carte régionale). Prévoir membrane/ventilation du vide sanitaire. À confirmer à l’exécution.
                        </div>
<div className="mt-1 text-[12px] text-neutral-500">IA: ajouter référence GRU/guide technique si applicable.</div>
</div>
<div className="relative">
<button className="field-status-trigger-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700 hover:bg-amber-100 transition" data-menu-for="c8-radon" title="Statut: À vérifier — nécessite une attention">
<i className="w-3.5 h-3.5" data-lucide="alert-triangle"></i> À vérifier
                        </button>
<div className="status-menu absolute right-0 mt-2 hidden w-52 overflow-hidden rounded-md border border-neutral-200 bg-white shadow-lg" data-menu="c8-radon">
<div className="px-3 py-2 text-[11px] text-neutral-500 border-b border-neutral-100">Statut du champ</div>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="valid"><i className="w-4 h-4 text-green-600" data-lucide="check-circle"></i> Validé</button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="warning"><i className="w-4 h-4 text-amber-600" data-lucide="alert-triangle"></i> À vérifier</button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="blocking"><i className="w-4 h-4 text-red-600" data-lucide="octagon-x"></i> Bloquant</button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="discuss"><i className="w-4 h-4 text-blue-600" data-lucide="messages-square"></i> À discuter</button>
</div>
</div>
</div>
</div>
<div className="relative group/field field" data-field-id="c8-pollution" data-proof-count="0" data-status="valid">
<div className="flex items-start gap-4">
<div className="flex-1">
<div className="text-[13px] text-neutral-600 font-medium">Pollution des sols</div>
<div className="mt-2 text-sm rounded-md border border-neutral-200 p-3">
                          Aucune activité à risque connue, pas d’indice de pollution historique dans la base de données communale.
                        </div>
</div>
<div className="relative">
<button className="field-status-trigger inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700 hover:bg-green-100 transition" data-menu-for="c8-pollution" title="Statut: Validé — champ complet">
<i className="w-3.5 h-3.5" data-lucide="check-circle"></i> Validé
                        </button>
<div className="status-menu absolute right-0 mt-2 hidden w-52 overflow-hidden rounded-md border border-neutral-200 bg-white shadow-lg" data-menu="c8-pollution">
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

<details className="group rounded-lg border border-neutral-200 bg-neutral-50" id="cadre-8bis">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: `'Source Sans Pro', Inter, sans-serif`}}>Cadre 8bis — Patrimoine</div>
<i className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180 p-1.5 rounded-md hover:bg-neutral-100 mr-1" data-lucide="chevron-down"></i>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="p-4 sm:p-6">
<div className="relative group/field field" data-field-id="c8b-patrimoine" data-proof-count="0" data-status="valid">
<div className="flex items-start gap-4">
<div className="flex-1">
<div className="text-[13px] text-neutral-600 font-medium">Statut patrimonial</div>
<div className="mt-2 text-sm rounded-md border border-neutral-200 p-3">Sans objet — le bien n’est pas classé, inscrit ni situé en zone tampon UNESCO.</div>
</div>
<div className="relative">
<button className="field-status-trigger inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700 hover:bg-green-100 transition" data-menu-for="c8b-patrimoine" title="Statut: Validé — champ complet">
<i className="w-3.5 h-3.5" data-lucide="check-circle"></i> Validé
                        </button>
<div className="status-menu absolute right-0 mt-2 hidden w-52 overflow-hidden rounded-md border border-neutral-200 bg-white shadow-lg" data-menu="c8b-patrimoine">
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

<details className="group rounded-lg border border-neutral-200 bg-neutral-50" id="cadre-9">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: `'Source Sans Pro', Inter, sans-serif`}}>Cadre 9 — Voirie et accès</div>
<i className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180 p-1.5 rounded-md hover:bg-neutral-100 mr-1" data-lucide="chevron-down"></i>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="p-4 sm:p-6 space-y-6">
<div className="relative group/field field" data-field-id="c9-acces" data-proof-count="0" data-status="valid">
<div className="flex items-start gap-4">
<div className="flex-1">
<div className="text-[13px] text-neutral-600 font-medium">Accès existants</div>
<div className="mt-2 text-sm rounded-md border border-neutral-200 p-3">Accès à la voie publique inchangé, pas de modification des accès carrossables.</div>
</div>
<div className="relative">
<button className="field-status-trigger inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700 hover:bg-green-100 transition" data-menu-for="c9-acces" title="Statut: Validé — champ complet">
<i className="w-3.5 h-3.5" data-lucide="check-circle"></i> Validé
                        </button>
<div className="status-menu absolute right-0 mt-2 hidden w-52 overflow-hidden rounded-md border border-neutral-200 bg-white shadow-lg" data-menu="c9-acces">
<div className="px-3 py-2 text-[11px] text-neutral-500 border-b border-neutral-100">Statut du champ</div>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="valid"><i className="w-4 h-4 text-green-600" data-lucide="check-circle"></i> Validé</button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="warning"><i className="w-4 h-4 text-amber-600" data-lucide="alert-triangle"></i> À vérifier</button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="blocking"><i className="w-4 h-4 text-red-600" data-lucide="octagon-x"></i> Bloquant</button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50" data-set-status="discuss"><i className="w-4 h-4 text-blue-600" data-lucide="messages-square"></i> À discuter</button>
</div>
</div>
</div>
</div>
<div className="relative group/field field" data-field-id="c9-reseau" data-proof-count="0" data-status="valid">
<div className="flex items-start gap-4">
<div className="flex-1">
<div className="text-[13px] text-neutral-600 font-medium">Raccordements</div>
<div className="mt-2 text-sm rounded-md border border-neutral-200 p-3">Réseaux existants inchangés. Aucun nouvel impétrant.</div>
</div>
<div className="relative">
<button className="field-status-trigger inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700 hover:bg-green-100 transition" data-menu-for="c9-reseau" title="Statut: Validé — champ complet">
<i className="w-3.5 h-3.5" data-lucide="check-circle"></i> Validé
                        </button>
<div className="status-menu absolute right-0 mt-2 hidden w-52 overflow-hidden rounded-md border border-neutral-200 bg-white shadow-lg" data-menu="c9-reseau">
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

<details className="group rounded-lg border border-neutral-200 bg-neutral-50" id="cadre-10">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: `'Source Sans Pro', Inter, sans-serif`}}>Cadre 10 — Performance énergétique (PEB)</div>
<i className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180 p-1.5 rounded-md hover:bg-neutral-100 mr-1" data-lucide="chevron-down"></i>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="p-4 sm:p-6">
<div className="relative group/field field" data-field-id="c10-peb" data-proof-count="0" data-status="valid">
<div className="flex items-start gap-4">
<div className="flex-1">
<div className="text-[13px] text-neutral-600 font-medium">Applicabilité</div>
<div className="mt-2 text-sm rounded-md border border-neutral-200 p-3">
                          Sans objet — aménagements extérieurs non soumis à exigences PEB.
                        </div>
</div>
<div className="relative">
<button className="field-status-trigger inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700 hover:bg-green-100 transition" data-menu-for="c10-peb" title="Statut: Validé — champ complet">
<i className="w-3.5 h-3.5" data-lucide="check-circle"></i> Validé
                        </button>
<div className="status-menu absolute right-0 mt-2 hidden w-52 overflow-hidden rounded-md border border-neutral-200 bg-white shadow-lg" data-menu="c10-peb">
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

<details className="group rounded-lg border border-neutral-200 bg-neutral-50" id="cadre-11">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: `'Source Sans Pro', Inter, sans-serif`}}>Cadre 11 — Statistiques</div>
<i className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180 p-1.5 rounded-md hover:bg-neutral-100 mr-1" data-lucide="chevron-down"></i>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="p-4 sm:p-6 space-y-6">
<div className="relative group/field field" data-field-id="c11-surfaces" data-proof-count="0" data-status="valid">
<div className="flex items-start gap-4">
<div className="flex-1">
<div className="text-[13px] text-neutral-600 font-medium">Surfaces concernées</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-[12px] text-neutral-600">Surface terrasse (m²)</div>
<div className="text-sm text-neutral-900">28</div>
</div>
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-[12px] text-neutral-600">Longueur mur (m)</div>
<div className="text-sm text-neutral-900">9,5</div>
</div>
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-[12px] text-neutral-600">Hauteur max (m)</div>
<div className="text-sm text-neutral-900">1,60</div>
</div>
</div>
</div>
<div className="relative">
<button className="field-status-trigger inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700 hover:bg-green-100 transition" data-menu-for="c11-surfaces" title="Statut: Validé — champ complet">
<i className="w-3.5 h-3.5" data-lucide="check-circle"></i> Validé
                        </button>
<div className="status-menu absolute right-0 mt-2 hidden w-52 overflow-hidden rounded-md border border-neutral-200 bg-white shadow-lg" data-menu="c11-surfaces">
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

<details className="group rounded-lg border border-neutral-200 bg-neutral-50" id="cadre-12">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: `'Source Sans Pro', Inter, sans-serif`}}>Cadre 12 — Réunion de projet</div>
<i className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180 p-1.5 rounded-md hover:bg-neutral-100 mr-1" data-lucide="chevron-down"></i>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="p-4 sm:p-6">
<div className="relative group/field field" data-field-id="c12-reunion" data-proof-count="0" data-status="valid">
<div className="flex items-start gap-4">
<div className="flex-1">
<div className="text-[13px] text-neutral-600 font-medium">Demande de réunion</div>
<div className="mt-2 text-sm rounded-md border border-neutral-200 p-3">Sans objet</div>
</div>
<div className="relative">
<button className="field-status-trigger inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700 hover:bg-green-100 transition" data-menu-for="c12-reunion" title="Statut: Validé — champ complet">
<i className="w-3.5 h-3.5" data-lucide="check-circle"></i> Validé
                        </button>
<div className="status-menu absolute right-0 mt-2 hidden w-52 overflow-hidden rounded-md border border-neutral-200 bg-white shadow-lg" data-menu="c12-reunion">
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

<details className="group rounded-lg border border-neutral-200 bg-neutral-50 open:shadow-sm" id="cadre-13">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: `'Source Sans Pro', Inter, sans-serif`}}>Cadre 13 — Annexes</div>
<span className="text-xs text-neutral-500">Joindre plans, photos, motivations</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-2.5 py-1 text-xs font-medium text-red-700" title="Annexes manquantes">3 manquantes</span>
<i className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180 p-1.5 rounded-md hover:bg-neutral-100 mr-1" data-lucide="chevron-down"></i>
</div>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="p-4 sm:p-6 space-y-6">

<div className="rounded-lg border-2 border-dashed border-neutral-300 bg-white p-6 text-center hover:border-neutral-400 transition" id="dropzone">
<div className="mx-auto flex max-w-md flex-col items-center gap-2">
<i className="w-6 h-6 text-neutral-500" data-lucide="upload"></i>
<div className="text-sm text-neutral-700">Glissez-déposez vos fichiers ici, ou</div>
<label className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-50 cursor-pointer">
<i className="w-4 h-4" data-lucide="paperclip"></i> Parcourir
                        <input className="sr-only" id="fileInput" multiple="" type="file" />
</label>
<div className="text-[12px] text-neutral-500">PDF, JPG, PNG — max 25 Mo par fichier</div>
</div>
</div>

<div className="rounded-md border border-neutral-200 bg-white">
<div className="px-4 py-2 border-b border-neutral-200 text-[12px] text-neutral-500">Annexes requises</div>
<ul className="divide-y divide-neutral-100 text-sm">
<li className="flex items-center justify-between px-4 py-2">
<span>Photos actuelles des lieux</span>
<span className="text-[12px] text-red-600">manque</span>
</li>
<li className="flex items-center justify-between px-4 py-2">
<span>Plan masse/localisation</span>
<span className="text-[12px] text-red-600">manque</span>
</li>
<li className="flex items-center justify-between px-4 py-2">
<span>Esquisse du mur de soutènement</span>
<span className="text-[12px] text-neutral-600">joint</span>
</li>
<li className="flex items-center justify-between px-4 py-2">
<span>Note de motivation (dérogation)</span>
<span className="text-[12px] text-red-600">manque</span>
</li>
</ul>
</div>

<div>
<div className="text-[13px] text-neutral-600 font-medium mb-2">Fichiers joints</div>
<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" id="fileList">
<li className="rounded-md border border-neutral-200 bg-white p-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-neutral-500" data-lucide="image"></i>
<span className="text-sm">esquisse-mur-v1.pdf</span>
</div>
<button className="remove-file text-neutral-500 hover:text-red-600" title="Supprimer">
<i className="w-4 h-4" data-lucide="trash-2"></i>
</button>
</li>
</ul>
</div>
</div>
</div>
</details>

<details className="group rounded-lg border border-neutral-200 bg-neutral-50" id="cadre-14">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: `'Source Sans Pro', Inter, sans-serif`}}>Cadre 14 — Signatures</div>
<i className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180 p-1.5 rounded-md hover:bg-neutral-100 mr-1" data-lucide="chevron-down"></i>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="p-4 sm:p-6 space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-md border border-neutral-200 p-4 bg-white">
<div className="text-[13px] text-neutral-600 font-medium">Demandeur</div>
<div className="mt-2 flex items-center justify-between">
<div>
<div className="text-sm font-medium">DEFOSSE Jean-Nicolas</div>
<div className="text-[12px] text-neutral-500">À signer</div>
</div>
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-50" id="signApplicant">
<i className="w-4 h-4" data-lucide="pen-line"></i> Signer
                        </button>
</div>
</div>
<div className="rounded-md border border-neutral-200 p-4 bg-white">
<div className="text-[13px] text-neutral-600 font-medium">Auteur de projet</div>
<div className="mt-2 flex items-center justify-between">
<div>
<div className="text-sm font-medium">De Keersmaecker Julie</div>
<div className="text-[12px] text-neutral-500">À signer</div>
</div>
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-50" id="signDesigner">
<i className="w-4 h-4" data-lucide="pen-line"></i> Signer
                        </button>
</div>
</div>
</div>
<div className="text-[12px] text-neutral-500">La signature électronique avancée est acceptée. Une fois signés, les champs deviennent verrouillés.</div>
</div>
</div>
</details>

<div className="rounded-lg border border-neutral-200 bg-white p-4">
<div className="text-[12px] text-neutral-500">Extrait — Cadre réservé à l’autorité</div>
<p className="mt-2 text-sm text-neutral-700">
                La demande est soumise à contrôle de complétude conformément aux articles D.VIII.5 et R.VIII.5-1 du CoDT. Les notifications seront effectuées dans les délais légaux à l’adresse du demandeur.
              </p>
</div>
</section>
</div>
</main>
</div>

<aside className="fixed inset-y-0 right-0 z-50 w-[380px] max-w-[90vw] translate-x-full bg-white border-l border-neutral-200 shadow-xl transition-transform" id="validationDrawer">
<div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200">
<div className="text-sm font-semibold tracking-tight" style={{fontFamily: `'Source Sans Pro', Inter, sans-serif`}}>Champs à traiter</div>
<button className="p-2 rounded-md hover:bg-neutral-50" data-close-validation="" title="Fermer">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="p-4 space-y-4 overflow-y-auto h-full">
<div className="rounded-md border border-neutral-200">
<div className="px-3 py-2 text-[12px] text-neutral-500 border-b border-neutral-200">Résumé</div>
<div className="px-3 py-3 text-sm">
<div><span className="text-neutral-600">Total champs:</span> <span id="val-total">—</span></div>
<div className="mt-1"><span className="text-green-700">Validés:</span> <span id="val-valid">—</span></div>
<div className="mt-1"><span className="text-amber-700">À vérifier:</span> <span id="val-warn">—</span></div>
<div className="mt-1"><span className="text-red-700">Bloquants:</span> <span id="val-block">—</span></div>
<div className="mt-3">
<div className="h-1.5 w-full rounded bg-neutral-100">
<div className="h-1.5 w-0 bg-green-500 rounded transition-all" id="val-bar"></div>
</div>
<div className="mt-1 text-[12px] text-neutral-500"><span id="val-percent">0%</span> complété</div>
</div>
</div>
</div>
<div>
<div className="text-[12px] text-neutral-500 mb-1">Bloquants</div>
<ul className="space-y-1 text-sm" id="list-blocking">

</ul>
</div>
<div>
<div className="text-[12px] text-neutral-500 mb-1">À vérifier</div>
<ul className="space-y-1 text-sm" id="list-warning">

</ul>
</div>
<div className="rounded-md border border-neutral-200 p-3 bg-neutral-50">
<div className="text-[12px] text-neutral-600 mb-1">Annexes manquantes</div>
<div className="text-sm" id="annex-missing">3 à joindre: photos lieux, plan masse, note de motivation.</div>
</div>
</div>
</aside>

<aside className="fixed inset-y-0 right-0 z-50 w-[420px] max-w-[90vw] translate-x-full bg-white border-l border-neutral-200 shadow-xl transition-transform" id="historyDrawer">
<div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200">
<div className="text-sm font-semibold tracking-tight" style={{fontFamily: `'Source Sans Pro', Inter, sans-serif`}}>Historique des modifications</div>
<button className="p-2 rounded-md hover:bg-neutral-50" data-close-history="" title="Fermer">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="p-4 space-y-3 overflow-y-auto h-full text-sm">
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-green-600 mt-0.5" data-lucide="check-circle-2"></i>
<div>
<div className="font-medium">Cadre 1 — Demandeur</div>
<div className="text-[12px] text-neutral-500">12/06/2024 09:14 — Import WALONMAP: coordonnées synchronisées.</div>
</div>
</div>
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-neutral-600 mt-0.5" data-lucide="edit-3"></i>
<div>
<div className="font-medium">Cadre 2 — Description</div>
<div className="text-[12px] text-neutral-500">13/06/2024 16:02 — Texte modifié par Julie DK.</div>
</div>
</div>
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-neutral-600 mt-0.5" data-lucide="upload-cloud"></i>
<div>
<div className="font-medium">Cadre 13 — Esquisse</div>
<div className="text-[12px] text-neutral-500">14/06/2024 10:47 — Fichier “esquisse-mur-v1.pdf” ajouté.</div>
</div>
</div>
</div>
</aside>

<div className="fixed inset-0 z-50 hidden" id="proofsModal">
<div className="absolute inset-0 bg-black/40"></div>
<div className="absolute inset-0 flex items-center justify-center p-4">
<div className="w-full max-w-3xl rounded-lg bg-white shadow-xl border border-neutral-200 overflow-hidden">
<div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200">
<div className="text-sm font-semibold tracking-tight" style={{fontFamily: `'Source Sans Pro', Inter, sans-serif`}}>Preuves liées au champ</div>
<button className="p-2 rounded-md hover:bg-neutral-50" data-close-proofs="" title="Fermer">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="px-4 pt-3">
<div className="flex items-center gap-2 text-[12px] text-neutral-500">
<span className="text-neutral-700 font-medium" id="proofsFieldLabel"></span>
<span className="hidden sm:inline">•</span>
<span className="truncate" id="proofsContext"></span>
</div>
</div>
<div className="px-4 pt-3">
<div className="inline-flex rounded-md border border-neutral-200 overflow-hidden">
<button className="tab-btn px-3 py-1.5 text-sm hover:bg-neutral-50" data-tab="cartes">Cartes</button>
<button className="tab-btn px-3 py-1.5 text-sm hover:bg-neutral-50" data-tab="reglement">Règlement</button>
<button className="tab-btn px-3 py-1.5 text-sm hover:bg-neutral-50" data-tab="fichiers">Fichiers</button>
<button className="tab-btn px-3 py-1.5 text-sm hover:bg-neutral-50" data-tab="notes">Notes</button>
</div>
</div>
<div className="p-4">
<div className="tab-panel space-y-3" id="tab-cartes">
<div className="rounded-md border border-neutral-200 overflow-hidden">
<div className="bg-neutral-50 px-3 py-2 text-[12px] text-neutral-600">Aperçu carte</div>
<div className="aspect-video bg-neutral-100 flex items-center justify-center text-neutral-500">Carte intégrée (aperçu)</div>
</div>
</div>
<div className="tab-panel hidden space-y-2" id="tab-reglement">
<a className="block rounded-md border border-neutral-200 px-3 py-2 text-sm hover:bg-neutral-50" href="#"><i className="inline w-4 h-4 mr-2" data-lucide="file-text"></i>Extraits CoDT — Articles D..5 à D.IV.13</a>
</div>
<div className="tab-panel hidden" id="tab-fichiers">
<ul className="space-y-2 text-sm">
<li className="flex items-center justify-between rounded-md border border-neutral-200 px-3 py-2">
<div className="flex items-center gap-2"><i className="w-4 h-4 text-neutral-500" data-lucide="file"></i><span>capture-carte-radon.png</span></div>
<button className="inline-flex items-center gap-1 text-neutral-600 hover:text-neutral-900"><i className="w-4 h-4" data-lucide="download"></i>Télécharger</button>
</li>
</ul>
</div>
<div className="tab-panel hidden" id="tab-notes">
<textarea className="w-full rounded-md border border-neutral-200 p-2.5 text-sm" placeholder="Ajouter une note interne liée à cette preuve..." rows="4"></textarea>
<div className="mt-2 text-right">
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-sm hover:bg-neutral-50"><i className="w-4 h-4" data-lucide="save"></i> Enregistrer</button>
</div>
</div>
</div>
<div className="px-4 py-3 border-t border-neutral-200 bg-neutral-50 text-right">
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-sm hover:bg-neutral-100" data-close-proofs="">Fermer</button>
</div>
</div>
</div>
</div>

<div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 hidden" id="toast">
<div className="rounded-md bg-neutral-900 text-white px-3 py-2 text-sm shadow-lg">Action réalisée</div>
</div>


    </>
  );
}
