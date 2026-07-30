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
      
      // Initialize icons
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });

      // Utility: add to journal
      const journal = [];
      function addJournal(entry) {
        const time = new Date().toLocaleString();
        journal.unshift({ time, ...entry });
        const list = document.getElementById('journalList');
        if (!list) return;
        list.innerHTML = journal.map(j => `
          <li class="rounded-md border border-slate-800/70 bg-slate-900/60 p-2">
            <div class="flex items-center justify-between text-slate-200">
              <span>${j.action}</span>
              <span class="text-xs text-slate-400">${j.time}</span>
            </div>
            <div class="text-xs text-slate-400 mt-1">${j.details || ''}</div>
          </li>
        `).join('');
      }

      // Filters toggle
      const filterToggle = document.getElementById('filterToggle');
      const filtersRow = document.getElementById('filtersRow');
      if (filterToggle) {
        filterToggle.addEventListener('click', () => {
          filtersRow.classList.toggle('hidden');
        });
      }
      document.querySelectorAll('[data-status-filter]').forEach(btn => {
        btn.addEventListener('click', () => {
          const target = btn.getAttribute('data-status-filter');
          filterByStatus(target);
        });
      });
      function filterByStatus(target) {
        document.querySelectorAll('#document article[data-status]').forEach(block => {
          const st = block.getAttribute('data-status');
          if (target === 'all' || st === target) {
            block.classList.remove('hidden');
          } else {
            block.classList.add('hidden');
          }
        });
      }

      // Quick actions
      document.querySelectorAll('#document article').forEach(block => {
        const fieldId = block.getAttribute('data-field-id');
        block.querySelectorAll('.quick-action').forEach(btn => {
          btn.addEventListener('click', () => {
            const action = btn.getAttribute('data-action');
            if (action === 'edit') {
              const editor = block.querySelector('.inline-edit');
              if (editor) editor.classList.remove('hidden');
            }
            if (action === 'confirm') {
              setStatus(block, 'valid', 'Confirmé par utilisateur');
            }
            if (action === 'unknown') {
              setStatus(block, 'warning', 'Marqué “Je ne sais pas”');
            }
            if (action === 'commune') {
              setStatus(block, 'warning', 'À valider avec la commune');
            }
          });
        });
        block.querySelectorAll('.save-edit').forEach(btn => {
          btn.addEventListener('click', () => {
            const editor = block.querySelector('.inline-edit');
            if (editor) editor.classList.add('hidden');
            setStatus(block, 'valid', 'Correction enregistrée');
          });
        });
        block.querySelectorAll('.cancel-edit').forEach(btn => {
          btn.addEventListener('click', () => {
            const editor = block.querySelector('.inline-edit');
            if (editor) editor.classList.add('hidden');
          });
        });
      });

      function setStatus(block, status, reason) {
        const prev = block.getAttribute('data-status');
        if (prev === status) return;
        block.setAttribute('data-status', status);
        // Update right badge
        const right = block.querySelector(':scope > div:last-child .group');
        if (!right) return;
        if (status === 'valid') {
          right.className = "group relative inline-flex items-center gap-1.5 px-2 py-1 rounded-md border border-emerald-700/50 bg-emerald-600/15 text-emerald-200 text-xs";
          right.innerHTML = `<i data-lucide="check-circle-2" class="w-3.5 h-3.5"></i><span>Validé</span><div class="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 transition bg-slate-900 border border-slate-700/70 text-slate-200 px-2 py-1 rounded-md whitespace-nowrap text-[11px]">${reason || 'Validé'}</div>`;
        } else if (status === 'warning') {
          right.className = "group relative inline-flex items-center gap-1.5 px-2 py-1 rounded-md border border-amber-700/50 bg-amber-600/10 text-amber-200 text-xs";
          right.innerHTML = `<i data-lucide="alert-triangle" class="w-3.5 h-3.5"></i><span>À vérifier</span><div class="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 transition bg-slate-900 border border-slate-700/70 text-slate-200 px-2 py-1 rounded-md whitespace-nowrap text-[11px]">${reason || 'À vérifier'}</div>`;
        } else if (status === 'block') {
          right.className = "group relative inline-flex items-center gap-1.5 px-2 py-1 rounded-md border border-rose-700/60 bg-rose-600/15 text-rose-200 text-xs";
          right.innerHTML = `<i data-lucide="octagon-alert" class="w-3.5 h-3.5"></i><span>Bloquant</span><div class="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 transition bg-slate-900 border border-slate-700/70 text-slate-200 px-2 py-1 rounded-md whitespace-nowrap text-[11px]">${reason || 'Bloquant'}</div>`;
        }
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        addJournal({ action: `État modifié (${status})`, details: `Champ ${block.getAttribute('data-field-id')} — ${reason || ''}` });
      }

      // Evidence panel logic
      const panel = document.getElementById('evidencePanel');
      const closeEvidence = document.getElementById('closeEvidence');
      closeEvidence.addEventListener('click', () => panel.classList.add('translate-x-full'));
      document.querySelectorAll('.source-chip').forEach(chip => {
        chip.addEventListener('click', () => {
          const title = chip.getAttribute('data-title') || 'Preuve';
          const preview = chip.getAttribute('data-preview');
          const img = chip.getAttribute('data-img');
          const icon = chip.querySelector('i')?.getAttribute('data-lucide') || 'file';
          document.getElementById('evidenceTitle').textContent = title;
          const evIcon = document.getElementById('evidenceIcon');
          evIcon.setAttribute('data-lucide', icon);
          document.querySelectorAll('#evidenceContent [data-pane]').forEach(p => p.classList.add('hidden'));
          document.querySelector('#evidenceContent [data-pane="preview"]').classList.remove('hidden');
          const box = document.getElementById('evidencePreview');
          if (preview === 'photo' || preview === 'plan') {
            box.innerHTML = `<img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80'https://images.unsplash.com/photo-1523419409543-a7cf68f1b2ed?q=80&w=1740&auto=format&fit=crop'}" class="w-full h-full object-cover rounded-lg">`;
          } else if (preview === 'geo') {
            box.innerHTML = `
              <div class="w-full h-full grid grid-rows-[1fr_auto]">
                <div class="flex items-center justify-center text-slate-400">Géodonnée — aperçu non contractuel</div>
                <div class="p-2 text-xs text-slate-400 border-t border-slate-800/70">Coord.: 50.633, 5.567 — ZAC: centre — Voie: Rue de l’Exemple</div>
              </div>`;
          } else if (preview === 'text') {
            box.innerHTML = `
              <div class="w-full h-full p-4 text-sm text-slate-300 leading-relaxed">
                Note utilisateur: “Façade plane, seuils inchangés. Débord possible de 2 à 4 cm selon appuis.”
              </div>`;
          } else if (preview === 'reg') {
            // Switch tab to regulation
            document.querySelector('#evidenceContent [data-pane="preview"]').classList.add('hidden');
            document.querySelector('#evidenceContent [data-pane="reg"]').classList.remove('hidden');
          }
          panel.classList.remove('translate-x-full');
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        });
      });
      document.querySelectorAll('.ev-tab').forEach(tab => {
        tab.addEventListener('click', () => {
          const to = tab.getAttribute('data-tab');
          document.querySelectorAll('#evidenceContent [data-pane]').forEach(p => p.classList.add('hidden'));
          document.querySelector(`#evidenceContent [data-pane="${to}"]`).classList.remove('hidden');
        });
      });

      // Validation modal
      const validationModal = document.getElementById('validationModal');
      document.getElementById('openValidation').addEventListener('click', () => {
        validationModal.classList.remove('hidden');
      });
      document.getElementById('closeValidation').addEventListener('click', () => {
        validationModal.classList.add('hidden');
      });
      document.querySelectorAll('.val-filter').forEach(btn => {
        btn.addEventListener('click', () => {
          const filter = btn.getAttribute('data-filter');
          // focus list: show items matching
          document.querySelectorAll('#focusContainer > div').forEach(item => {
            const id = item.getAttribute('data-focus-id');
            const block = document.querySelector(`#document article[data-field-id="${id}"]`);
            const st = block?.getAttribute('data-status');
            if (!filter || filter === st) item.classList.remove('hidden');
            else item.classList.add('hidden');
          });
        });
      });

      // Export (placeholder)
      document.getElementById('exportDoc').addEventListener('click', () => {
        addJournal({ action: 'Export PDF', details: 'Génération de l’aperçu PDF' });
        const panelOpen = panel.classList.contains('translate-x-full');
        if (panelOpen) {
          document.querySelectorAll('#evidenceContent [data-pane]').forEach(p => p.classList.add('hidden'));
          document.querySelector('#evidenceContent [data-pane="journal"]').classList.remove('hidden');
          panel.classList.remove('translate-x-full');
        }
      });

      // Keyboard: Esc closes overlays
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          panel.classList.add('translate-x-full');
          validationModal.classList.add('hidden');
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

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 bg-slate-950/80 border-b border-slate-800">
<div className="max-w-6xl mx-auto px-4">
<div className="flex items-center justify-between py-3">

<div className="flex items-center gap-4">
<div className="flex items-center justify-center w-9 h-9 rounded-md bg-slate-800/70 border border-slate-700 text-slate-200 tracking-tight">
<span className="text-sm font-semibold">AP</span>
</div>
<div>
<h1 className="text-[20px] md:text-[22px] leading-tight tracking-tight font-semibold text-slate-100">
                  Annexe 9 — Déclaration urbanisme
                </h1>
<p className="text-sm text-slate-400">Projet — 123 Rue de l’Exemple, 4000 Liège</p>
</div>
</div>

<div className="flex items-center gap-3">
<div className="hidden md:flex items-center gap-2 text-xs">
<div className="flex items-center gap-1 px-2 py-1 rounded-md border border-slate-700/70 bg-slate-900/60">
<div className="w-20 h-1.5 rounded-full bg-slate-700 overflow-hidden">
<div className="h-full bg-emerald-500/80" style={{width: `74%`}}></div>
</div>
<span className="text-slate-300">74% complet</span>
</div>
<div className="flex items-center gap-2 text-slate-400">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md border border-slate-700/70">
<i className="w-3.5 h-3.5 text-emerald-400" data-lucide="check-circle-2"></i>
<span>8</span>
</span>
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md border border-slate-700/70">
<i className="w-3.5 h-3.5 text-amber-400" data-lucide="alert-triangle"></i>
<span>3</span>
</span>
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md border border-slate-700/70">
<i className="w-3.5 h-3.5 text-rose-400" data-lucide="octagon-alert"></i>
<span>1</span>
</span>
</div>
</div>
<button className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-md bg-slate-900/60 border border-slate-700/70 hover:border-slate-600 hover:bg-slate-900 transition-colors" id="filterToggle">
<i className="w-4 h-4" data-lucide="filter"></i><span className="text-sm">Filtrer</span>
</button>
<button className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-emerald-600/90 hover:bg-emerald-600 text-white border border-emerald-500/60 transition-colors" id="openValidation">
<i className="w-4 h-4" data-lucide="check-square"></i><span className="text-sm">Mode Validation</span>
</button>
<button className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-slate-900/60 hover:bg-slate-900 text-slate-100 border border-slate-700/70 transition-colors" id="exportDoc">
<i className="w-4 h-4" data-lucide="download"></i><span className="text-sm">Exporter</span>
</button>
</div>
</div>

<div className="py-2 hidden" id="filtersRow">
<div className="flex items-center gap-2">
<div className="inline-flex overflow-hidden rounded-md border border-slate-700/70">
<button className="px-3 py-1.5 text-sm bg-slate-900/60 hover:bg-slate-800 text-slate-200" data-status-filter="all">Tous</button>
<button className="px-3 py-1.5 text-sm hover:bg-slate-800 text-emerald-300" data-status-filter="valid">Validés</button>
<button className="px-3 py-1.5 text-sm hover:bg-slate-800 text-amber-300" data-status-filter="warning">À vérifier</button>
<button className="px-3 py-1.5 text-sm hover:bg-slate-800 text-rose-300" data-status-filter="block">Bloquants</button>
</div>
<div className="flex items-center gap-2 text-xs text-slate-400">
<i className="w-3.5 h-3.5" data-lucide="info"></i>
<span>Afficher uniquement les champs selon leur état de vérification.</span>
</div>
</div>
</div>
</div>
</header>

<main className="max-w-6xl mx-auto px-4 py-6 md:py-8">

<section className="space-y-6" id="document">

<div className="rounded-lg border border-slate-800/70 bg-slate-900/40 px-4 py-3 flex items-start gap-3">
<i className="w-5 h-5 text-indigo-300 mt-0.5" data-lucide="sparkles"></i>
<div className="text-sm text-slate-300">
              Mode Lecture: l’IA a pré-rempli certains champs (surbrillance douce). Confirmez, corrigez ou marquez “à valider”.
            </div>
</div>

<article className="grid grid-cols-[72px_1fr_72px] gap-2 md:gap-4 rounded-xl border border-slate-800/70 bg-slate-900/30" data-confidence="0.84" data-field-id="f1" data-status="valid">

<div className="col-span-3 relative">
<div className="absolute left-0 top-0 right-0 h-0.5 bg-slate-800/70"></div>
<div className="absolute left-0 top-0 h-0.5 bg-emerald-500/90" style={{width: `84%`}}></div>
</div>

<aside className="pl-2 pr-1 py-4 flex flex-col items-start gap-2">
<button className="source-chip inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-slate-900/60 border border-slate-700/70 hover:border-slate-600 text-xs text-slate-300" data-preview="geo" data-source="map" data-title="Géodonnées — WalonMap">
<i className="w-3.5 h-3.5" data-lucide="map"></i><span>WalonMap</span>
</button>
<button className="source-chip inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-slate-900/60 border border-slate-700/70 hover:border-slate-600 text-xs text-slate-300" data-preview="text" data-source="text" data-title="Texte utilisateur">
<i className="w-3.5 h-3.5" data-lucide="pen-line"></i><span>Texte</span>
</button>
</aside>

<div className="py-4 pr-2 md:pr-6">
<h2 className="text-[18px] md:text-[20px] tracking-tight font-semibold text-slate-100">1. Identification du projet</h2>
<div className="mt-3 grid md:grid-cols-2 gap-3">
<div className="group relative rounded-lg border border-emerald-700/30 bg-emerald-500/5 hover:bg-emerald-500/10 transition-colors">
<div className="px-3 pt-2 text-xs text-slate-400">Adresse</div>
<div className="px-3 pb-2 text-slate-200">123 Rue de l’Exemple, 4000 Liège</div>
<div className="absolute right-2 top-2 text-[10px] text-emerald-300/80">IA</div>
</div>
<div className="group relative rounded-lg border border-emerald-700/30 bg-emerald-500/5 hover:bg-emerald-500/10 transition-colors">
<div className="px-3 pt-2 text-xs text-slate-400">Commune</div>
<div className="px-3 pb-2 text-slate-200">Liège</div>
<div className="absolute right-2 top-2 text-[10px] text-emerald-300/80">IA</div>
</div>
<div className="group relative rounded-lg border border-slate-700/70 bg-slate-900/50 hover:bg-slate-900/70 transition-colors md:col-span-2">
<div className="px-3 pt-2 text-xs text-slate-400">Parcelle / Section</div>
<div className="px-3 pb-2 text-slate-200">A 123d — 0456/00_0001</div>
</div>
</div>
<div className="mt-3 flex flex-wrap items-center gap-2">
<button className="quick-action px-2.5 py-1.5 rounded-md text-xs border border-emerald-700/50 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-200" data-action="confirm">
<i className="w-3.5 h-3.5" data-lucide="check"></i> Confirmer
                </button>
<button className="quick-action px-2.5 py-1.5 rounded-md text-xs border border-slate-700/70 hover:border-slate-600 bg-slate-900/60 hover:bg-slate-900 text-slate-200" data-action="edit">
<i className="w-3.5 h-3.5" data-lucide="edit-3"></i> Corriger
                </button>
<button className="quick-action px-2.5 py-1.5 rounded-md text-xs border border-amber-700/40 bg-amber-500/10 hover:bg-amber-500/20 text-amber-200" data-action="unknown">
<i className="w-3.5 h-3.5" data-lucide="help-circle"></i> Je ne sais pas
                </button>
<button className="quick-action px-2.5 py-1.5 rounded-md text-xs border border-sky-700/40 bg-sky-500/10 hover:bg-sky-500/20 text-sky-200" data-action="commune">
<i className="w-3.5 h-3.5" data-lucide="building-2"></i> À valider avec la commune
                </button>
</div>

<div className="inline-edit hidden mt-3 rounded-lg border border-slate-700/70 bg-slate-900/60 p-3">
<label className="text-xs text-slate-400">Adresse</label>
<input className="mt-1 w-full px-3 py-2 rounded-md bg-slate-950 border border-slate-700/70 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-slate-500" type="text" value="123 Rue de l’Exemple, 4000 Liège" />
<div className="mt-2 flex items-center gap-2">
<button className="save-edit px-2.5 py-1.5 rounded-md text-xs bg-emerald-600 text-white hover:bg-emerald-500">Enregistrer</button>
<button className="cancel-edit px-2.5 py-1.5 rounded-md text-xs bg-slate-800 text-slate-200 hover:bg-slate-700">Annuler</button>
</div>
</div>
</div>

<div className="pr-2 md:pr-3 py-4">
<div className="group relative inline-flex items-center gap-1.5 px-2 py-1 rounded-md border border-emerald-700/50 bg-emerald-600/15 text-emerald-200 text-xs">
<i className="w-3.5 h-3.5" data-lucide="check-circle-2"></i><span>Validé</span>
<div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 transition bg-slate-900 border border-slate-700/70 text-slate-200 px-2 py-1 rounded-md whitespace-nowrap text-[11px]">
                  Confirmé le 12/09 par C. Martin
                </div>
</div>
</div>
</article>

<article className="grid grid-cols-[72px_1fr_72px] gap-2 md:gap-4 rounded-xl border border-slate-800/70 bg-slate-900/30" data-confidence="0.62" data-field-id="f2" data-status="warning">
<div className="col-span-3 relative">
<div className="absolute left-0 top-0 right-0 h-0.5 bg-slate-800/70"></div>
<div className="absolute left-0 top-0 h-0.5 bg-amber-400/90" style={{width: `62%`}}></div>
</div>
<aside className="pl-2 pr-1 py-4 flex flex-col items-start gap-2">
<button className="source-chip inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-slate-900/60 border border-slate-700/70 hover:border-slate-600 text-xs text-slate-300" data-img="https://images.unsplash.com/photo-1523419409543-a7cf68f1b2ed?q=80&w=1740&auto=format&fit=crop" data-preview="photo" data-source="photo" data-title="Photo — Façade avant">
<i className="w-3.5 h-3.5" data-lucide="camera"></i><span>Photo</span>
</button>
<button className="source-chip inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-slate-900/60 border border-slate-700/70 hover:border-slate-600 text-xs text-slate-300" data-preview="reg" data-source="reg" data-title="Règlement — CoDT/RCU">
<i className="w-3.5 h-3.5" data-lucide="book-open"></i><span>CoDT</span>
</button>
</aside>
<div className="py-4 pr-2 md:pr-6">
<h2 className="text-[18px] md:text-[20px] tracking-tight font-semibold text-slate-100">2. Visibilité depuis espace public</h2>
<p className="mt-2 text-slate-200">Façade avant visible depuis l’espace public ? <span className="px-1.5 py-0.5 rounded-md border border-amber-700/40 bg-amber-500/10 text-amber-200 text-sm align-middle">Oui</span></p>
<p className="mt-2 text-sm text-slate-300">Détection IA: ITE 12 cm en façade avant (photointerprétation + RCU).</p>

<div className="mt-3 rounded-lg border border-amber-700/40 bg-amber-500/5 p-3">
<div className="flex items-start gap-2">
<i className="w-4.5 h-4.5 text-amber-300 mt-0.5" data-lucide="alert-triangle"></i>
<div>
<div className="text-sm text-amber-200">Question critique</div>
<p className="text-sm text-slate-300 mt-0.5">L’ITE empiète-t-elle sur le domaine public (trottoir) ? Merci de préciser ou joindre coupe.</p>
<div className="mt-2 grid md:grid-cols-2 gap-2">
<input className="px-3 py-2 rounded-md bg-slate-950 border border-slate-700/70 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-slate-500" placeholder="Précision (ex: débord de 4 cm sur 1,20 m)" type="text" />
<label className="flex items-center justify-between gap-2 px-3 py-2 rounded-md bg-slate-950 border border-slate-700/70 text-slate-300 hover:border-slate-600 cursor-pointer">
<span className="text-sm">Joindre coupe (PDF / image)</span>
<i className="w-4 h-4 text-slate-400" data-lucide="paperclip"></i>
<input className="hidden" type="file" />
</label>
</div>
<div className="mt-2">
<button className="quick-action px-2.5 py-1.5 rounded-md text-xs bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700/70">Ajouter au dossier</button>
</div>
</div>
</div>
</div>
<div className="mt-3 flex flex-wrap items-center gap-2">
<button className="quick-action px-2.5 py-1.5 rounded-md text-xs border border-emerald-700/50 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-200" data-action="confirm">
<i className="w-3.5 h-3.5" data-lucide="check"></i> Confirmer
                </button>
<button className="quick-action px-2.5 py-1.5 rounded-md text-xs border border-slate-700/70 hover:border-slate-600 bg-slate-900/60 hover:bg-slate-900 text-slate-200" data-action="edit">
<i className="w-3.5 h-3.5" data-lucide="edit-3"></i> Corriger
                </button>
<button className="quick-action px-2.5 py-1.5 rounded-md text-xs border border-amber-700/40 bg-amber-500/10 hover:bg-amber-500/20 text-amber-200" data-action="unknown">
<i className="w-3.5 h-3.5" data-lucide="help-circle"></i> Je ne sais pas
                </button>
<button className="quick-action px-2.5 py-1.5 rounded-md text-xs border border-sky-700/40 bg-sky-500/10 hover:bg-sky-500/20 text-sky-200" data-action="commune">
<i className="w-3.5 h-3.5" data-lucide="building-2"></i> À valider avec la commune
                </button>
</div>

<div className="inline-edit hidden mt-3 rounded-lg border border-slate-700/70 bg-slate-900/60 p-3">
<label className="text-xs text-slate-400">Visibilité</label>
<select className="mt-1 w-full px-3 py-2 rounded-md bg-slate-950 border border-slate-700/70 text-slate-200 focus:outline-none focus:border-slate-500">
<option>Oui</option>
<option>Non</option>
</select>
<div className="mt-2 flex items-center gap-2">
<button className="save-edit px-2.5 py-1.5 rounded-md text-xs bg-emerald-600 text-white hover:bg-emerald-500">Enregistrer</button>
<button className="cancel-edit px-2.5 py-1.5 rounded-md text-xs bg-slate-800 text-slate-200 hover:bg-slate-700">Annuler</button>
</div>
</div>
</div>
<div className="pr-2 md:pr-3 py-4">
<div className="group relative inline-flex items-center gap-1.5 px-2 py-1 rounded-md border border-amber-700/50 bg-amber-600/10 text-amber-200 text-xs">
<i className="w-3.5 h-3.5" data-lucide="alert-triangle"></i><span>À vérifier</span>
<div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 transition bg-slate-900 border border-slate-700/70 text-slate-200 px-2 py-1 rounded-md whitespace-nowrap text-[11px]">
                  Vérifier emprise trottoir (risque {">"} 4 cm)
                </div>
</div>
</div>
</article>

<article className="grid grid-cols-[72px_1fr_72px] gap-2 md:gap-4 rounded-xl border border-slate-800/70 bg-slate-900/30" data-confidence="0.35" data-field-id="f3" data-status="block">
<div className="col-span-3 relative">
<div className="absolute left-0 top-0 right-0 h-0.5 bg-slate-800/70"></div>
<div className="absolute left-0 top-0 h-0.5 bg-rose-500/90" style={{width: `35%`}}></div>
</div>
<aside className="pl-2 pr-1 py-4 flex flex-col items-start gap-2">
<button className="source-chip inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-slate-900/60 border border-slate-700/70 hover:border-slate-600 text-xs text-slate-300" data-img="https://images.unsplash.com/photo-1523419409543-a7cf68f1b2ed?q=80&w=1740&auto=format&fit=crop" data-preview="plan" data-source="plan" data-title="Plan — Coupe façade">
<i className="w-3.5 h-3.5" data-lucide="ruler"></i><span>Plan</span>
</button>
<button className="source-chip inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-slate-900/60 border border-slate-700/70 hover:border-slate-600 text-xs text-slate-300" data-preview="reg" data-source="reg" data-title="Règlement — RCU §3.2">
<i className="w-3.5 h-3.5" data-lucide="book-open"></i><span>RCU</span>
</button>
</aside>
<div className="py-4 pr-2 md:pr-6">
<h2 className="text-[18px] md:text-[20px] tracking-tight font-semibold text-slate-100">3. Isolation thermique par l’extérieur (ITE)</h2>
<div className="mt-2 grid md:grid-cols-2 gap-3">
<div className="group relative rounded-lg border border-rose-700/40 bg-rose-500/5 hover:bg-rose-500/10 transition-colors">
<div className="px-3 pt-2 text-xs text-slate-400">Épaisseur ITE (mm)</div>
<div className="px-3 pb-2 text-slate-200">120</div>
<div className="absolute right-2 top-2 text-[10px] text-rose-300/80">IA faible</div>
</div>
<div className="group relative rounded-lg border border-slate-700/70 bg-slate-900/50 hover:bg-slate-900/70 transition-colors">
<div className="px-3 pt-2 text-xs text-slate-400">Matériau</div>
<div className="px-3 pb-2 text-slate-200">PSE</div>
</div>
</div>
<p className="mt-2 text-sm text-slate-300">Conflit avec gabarit trottoir signalé. Une dérogation pourrait être nécessaire.</p>
<div className="mt-3 flex flex-wrap items-center gap-2">
<button className="quick-action px-2.5 py-1.5 rounded-md text-xs border border-emerald-700/50 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-200" data-action="confirm">
<i className="w-3.5 h-3.5" data-lucide="check"></i> Confirmer
                </button>
<button className="quick-action px-2.5 py-1.5 rounded-md text-xs border border-slate-700/70 hover:border-slate-600 bg-slate-900/60 hover:bg-slate-900 text-slate-200" data-action="edit">
<i className="w-3.5 h-3.5" data-lucide="edit-3"></i> Corriger
                </button>
<button className="quick-action px-2.5 py-1.5 rounded-md text-xs border border-amber-700/40 bg-amber-500/10 hover:bg-amber-500/20 text-amber-200" data-action="unknown">
<i className="w-3.5 h-3.5" data-lucide="help-circle"></i> Je ne sais pas
                </button>
<button className="quick-action px-2.5 py-1.5 rounded-md text-xs border border-rose-700/50 bg-rose-600/10 hover:bg-rose-600/20 text-rose-200" data-action="commune">
<i className="w-3.5 h-3.5" data-lucide="gavel"></i> Demander dérogation
                </button>
</div>
<div className="inline-edit hidden mt-3 rounded-lg border border-slate-700/70 bg-slate-900/60 p-3">
<label className="text-xs text-slate-400">Épaisseur ITE (mm)</label>
<input className="mt-1 w-full px-3 py-2 rounded-md bg-slate-950 border border-slate-700/70 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-slate-500" type="number" value="120" />
<div className="mt-2 flex items-center gap-2">
<button className="save-edit px-2.5 py-1.5 rounded-md text-xs bg-emerald-600 text-white hover:bg-emerald-500">Enregistrer</button>
<button className="cancel-edit px-2.5 py-1.5 rounded-md text-xs bg-slate-800 text-slate-200 hover:bg-slate-700">Annuler</button>
</div>
</div>
</div>
<div className="pr-2 md:pr-3 py-4">
<div className="group relative inline-flex items-center gap-1.5 px-2 py-1 rounded-md border border-rose-700/60 bg-rose-600/15 text-rose-200 text-xs">
<i className="w-3.5 h-3.5" data-lucide="octagon-alert"></i><span>Bloquant</span>
<div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 transition bg-slate-900 border border-slate-700/70 text-slate-200 px-2 py-1 rounded-md whitespace-nowrap text-[11px]">
                  Débord {">"} limite autorisée — coupe requise
                </div>
</div>
</div>
</article>

<article className="grid grid-cols-[72px_1fr_72px] gap-2 md:gap-4 rounded-xl border border-slate-800/70 bg-slate-900/30" data-confidence="0.71" data-field-id="f4" data-status="valid">
<div className="col-span-3 relative">
<div className="absolute left-0 top-0 right-0 h-0.5 bg-slate-800/70"></div>
<div className="absolute left-0 top-0 h-0.5 bg-emerald-500/90" style={{width: `71%`}}></div>
</div>
<aside className="pl-2 pr-1 py-4 flex flex-col items-start gap-2">
<button className="source-chip inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-slate-900/60 border border-slate-700/70 hover:border-slate-600 text-xs text-slate-300" data-preview="text" data-source="text" data-title="Texte utilisateur">
<i className="w-3.5 h-3.5" data-lucide="pen-line"></i><span>Texte</span>
</button>
</aside>
<div className="py-4 pr-2 md:pr-6">
<h2 className="text-[18px] md:text-[20px] tracking-tight font-semibold text-slate-100">4. Description du projet</h2>
<p className="mt-2 text-slate-200 leading-relaxed">
                Isolation de la façade avant (ITE 12 cm), remise en peinture, réfection des appuis de baies. Aucun changement de menuiseries. Pas d’intervention en toiture.
              </p>
<div className="mt-3 flex flex-wrap items-center gap-2">
<button className="quick-action px-2.5 py-1.5 rounded-md text-xs border border-emerald-700/50 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-200" data-action="confirm">
<i className="w-3.5 h-3.5" data-lucide="check"></i> Confirmer
                </button>
<button className="quick-action px-2.5 py-1.5 rounded-md text-xs border border-slate-700/70 hover:border-slate-600 bg-slate-900/60 hover:bg-slate-900 text-slate-200" data-action="edit">
<i className="w-3.5 h-3.5" data-lucide="edit-3"></i> Corriger
                </button>
</div>
<div className="inline-edit hidden mt-3 rounded-lg border border-slate-700/70 bg-slate-900/60 p-3">
<textarea className="w-full px-3 py-2 rounded-md bg-slate-950 border border-slate-700/70 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-slate-500" rows="4">Isolation de la façade avant (ITE 12 cm), remise en peinture, réfection des appuis de baies. Aucun changement de menuiseries. Pas d’intervention en toiture.</textarea>
<div className="mt-2 flex items-center gap-2">
<button className="save-edit px-2.5 py-1.5 rounded-md text-xs bg-emerald-600 text-white hover:bg-emerald-500">Enregistrer</button>
<button className="cancel-edit px-2.5 py-1.5 rounded-md text-xs bg-slate-800 text-slate-200 hover:bg-slate-700">Annuler</button>
</div>
</div>
</div>
<div className="pr-2 md:pr-3 py-4">
<div className="group relative inline-flex items-center gap-1.5 px-2 py-1 rounded-md border border-emerald-700/50 bg-emerald-600/15 text-emerald-200 text-xs">
<i className="w-3.5 h-3.5" data-lucide="check-circle-2"></i><span>Validé</span>
<div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 transition bg-slate-900 border border-slate-700/70 text-slate-200 px-2 py-1 rounded-md whitespace-nowrap text-[11px]">
                  Concorde avec la description fournie
                </div>
</div>
</div>
</article>

<div className="flex items-center justify-between px-3 py-3 rounded-lg border border-slate-800/70 bg-slate-900/40">
<div className="flex items-center gap-2 text-slate-300 text-sm">
<i className="w-4 h-4 text-emerald-400" data-lucide="shield-check"></i>
<span>Lorsque tous les ⚠️ et ⛔ sont traités, le document passe en “Complet et vérifié”.</span>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-2 rounded-md bg-slate-900/60 hover:bg-slate-900 border border-slate-700/70 text-slate-200 text-sm">Prévisualiser PDF</button>
<button className="px-3 py-2 rounded-md bg-emerald-600/90 hover:bg-emerald-600 border border-emerald-500/60 text-white text-sm">Marquer comme complet</button>
</div>
</div>
</section>
</main>
</div>

<div className="fixed inset-y-0 right-0 w-full max-w-xl translate-x-full transition-transform duration-300 bg-slate-950/95 border-l border-slate-800/70 backdrop-blur z-[60]" id="evidencePanel">
<div className="h-full flex flex-col">
<div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/70">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-slate-200" id="evidenceIcon"></i>
<h3 className="text-[18px] tracking-tight font-semibold text-slate-100" id="evidenceTitle">Preuve</h3>
</div>
<button className="p-2 rounded-md border border-slate-700/70 hover:bg-slate-900" id="closeEvidence">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="px-4 py-3 border-b border-slate-800/70">
<div className="flex items-center gap-2">
<button className="ev-tab px-3 py-1.5 text-sm rounded-md bg-slate-900/70 border border-slate-700/70 text-slate-200" data-tab="preview">Aperçu</button>
<button className="ev-tab px-3 py-1.5 text-sm rounded-md hover:bg-slate-900/70 border border-slate-700/70 text-slate-300" data-tab="journal">Journal</button>
<button className="ev-tab px-3 py-1.5 text-sm rounded-md hover:bg-slate-900/70 border border-slate-700/70 text-slate-300" data-tab="reg">Règlement</button>
</div>
</div>
<div className="flex-1 overflow-auto" id="evidenceContent">

<div className="p-4 space-y-3" data-pane="preview">
<div className="rounded-lg border border-slate-800/70 bg-slate-900/60 aspect-video flex items-center justify-center text-slate-400" id="evidencePreview">
              Sélectionnez une source à gauche
            </div>
<div className="text-xs text-slate-400">
              Astuce: les preuves sont sauvegardées dans le dossier et traçables.
            </div>
</div>

<div className="hidden p-4" data-pane="journal">
<ul className="space-y-2 text-sm" id="journalList">

</ul>
</div>

<div className="hidden p-4" data-pane="reg">
<div className="rounded-lg border border-slate-800/70 bg-slate-900/60 p-3 text-sm text-slate-300">
<div className="text-slate-200 font-medium">Extrait CoDT / RCU</div>
<p className="mt-1">Art. 3.2 — Les isolations de façade empiétant sur le domaine public doivent respecter une saillie maximale de 3 cm au-delà de la limite parcellaire sauf dérogation.</p>
<a className="inline-flex items-center gap-1 mt-2 text-sky-300 hover:text-sky-200" href="#" target="_blank"><i className="w-4 h-4" data-lucide="link-2"></i>Ouvrir la source</a>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[70] hidden" id="validationModal">
<div className="absolute inset-0 bg-slate-950/80"></div>
<div className="relative max-w-4xl mx-auto mt-10 md:mt-16 bg-slate-950 border border-slate-800/70 rounded-xl overflow-hidden">
<div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/70">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-emerald-300" data-lucide="check-square"></i>
<h3 className="text-[18px] tracking-tight font-semibold text-slate-100">Validation — points à traiter</h3>
</div>
<button className="p-2 rounded-md border border-slate-700/70 hover:bg-slate-900" id="closeValidation">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="grid md:grid-cols-[260px_1fr]">

<aside className="border-r border-slate-800/70 max-h-[70vh] overflow-auto">
<div className="p-3">
<div className="text-xs text-slate-400 mb-2">Navigation par état</div>
<div className="space-y-1">
<button className="val-filter w-full flex items-center justify-between px-2.5 py-2 rounded-md bg-slate-900/60 border border-slate-700/70 text-slate-200 text-sm" data-filter="block">
<span className="inline-flex items-center gap-2"><i className="w-4 h-4 text-rose-400" data-lucide="octagon-alert"></i> Bloquants</span>
<span className="text-rose-300 text-xs">1</span>
</button>
<button className="val-filter w-full flex items-center justify-between px-2.5 py-2 rounded-md hover:bg-slate-900/60 border border-slate-700/70 text-slate-300 text-sm" data-filter="warning">
<span className="inline-flex items-center gap-2"><i className="w-4 h-4 text-amber-400" data-lucide="alert-triangle"></i> À vérifier</span>
<span className="text-amber-300 text-xs">3</span>
</button>
<button className="val-filter w-full flex items-center justify-between px-2.5 py-2 rounded-md hover:bg-slate-900/60 border border-slate-700/70 text-slate-300 text-sm" data-filter="valid">
<span className="inline-flex items-center gap-2"><i className="w-4 h-4 text-emerald-400" data-lucide="check-circle-2"></i> Validés</span>
<span className="text-emerald-300 text-xs">8</span>
</button>
</div>
</div>
<div className="px-3 py-2 border-t border-slate-800/70 text-xs text-slate-400">
              Traitez chaque point puis marquez le dossier comme complet.
            </div>
</aside>

<div className="max-h-[70vh] overflow-auto p-4">
<div className="space-y-4" id="focusContainer">

<div className="rounded-lg border border-rose-700/50 bg-rose-600/10 p-3" data-focus-id="f3">
<div className="flex items-start justify-between gap-3">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-rose-300" data-lucide="octagon-alert"></i>
<div className="text-slate-200 font-medium">ITE — épaisseur 120 mm (risque d’emprise)</div>
</div>
<span className="text-xs text-slate-400">Confiance IA: 35%</span>
</div>
<p className="mt-2 text-sm text-slate-300">Débord {">"} limite autorisée. Une coupe justificative est nécessaire ou une adaptation de l’épaisseur.</p>
<div className="mt-2 grid md:grid-cols-2 gap-2">
<label className="text-xs text-slate-400">Nouvelle valeur (mm)</label>
<input className="px-3 py-2 rounded-md bg-slate-950 border border-slate-700/70 text-slate-200 focus:outline-none focus:border-slate-500" placeholder="ex: 100" type="number" />
<label className="text-xs text-slate-400 md:col-start-1">Ajouter une preuve (coupe)</label>
<label className="flex items-center justify-between gap-2 px-3 py-2 rounded-md bg-slate-950 border border-slate-700/70 text-slate-300 hover:border-slate-600 cursor-pointer">
<span className="text-sm">Téléverser un fichier</span>
<i className="w-4 h-4 text-slate-400" data-lucide="upload"></i>
<input className="hidden" type="file" />
</label>
</div>
<div className="mt-3 flex items-center gap-2">
<button className="px-2.5 py-1.5 rounded-md text-xs bg-emerald-600 text-white hover:bg-emerald-500">Valider</button>
<button className="px-2.5 py-1.5 rounded-md text-xs bg-slate-800 text-slate-200 hover:bg-slate-700">Reporter</button>
<button className="px-2.5 py-1.5 rounded-md text-xs bg-slate-900 text-slate-200 border border-slate-700/70 hover:bg-slate-800">Voir les preuves</button>
</div>
</div>
<div className="rounded-lg border border-amber-700/50 bg-amber-600/10 p-3" data-focus-id="f2">
<div className="flex items-start justify-between gap-3">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-300" data-lucide="alert-triangle"></i>
<div className="text-slate-200 font-medium">Visibilité façade — vérifier emprise trottoir</div>
</div>
<span className="text-xs text-slate-400">Confiance IA: 62%</span>
</div>
<p className="mt-2 text-sm text-slate-300">Préciser la saillie et/ou joindre une coupe.</p>
<div className="mt-3 flex items-center gap-2">
<button className="px-2.5 py-1.5 rounded-md text-xs bg-emerald-600 text-white hover:bg-emerald-500">Valider</button>
<button className="px-2.5 py-1.5 rounded-md text-xs bg-slate-800 text-slate-200 hover:bg-slate-700">Corriger</button>
</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between border-t border-slate-800/70 pt-3">
<div className="text-xs text-slate-400">2/4 points traités</div>
<div className="flex items-center gap-2">
<button className="px-3 py-2 rounded-md bg-slate-900/60 hover:bg-slate-900 border border-slate-700/70 text-slate-200 text-sm">Précédent</button>
<button className="px-3 py-2 rounded-md bg-emerald-600/90 hover:bg-emerald-600 border border-emerald-500/60 text-white text-sm">Suivant</button>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
