import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));
      const $ = (sel, ctx=document) => ctx.querySelector(sel);

      // Expand/collapse group
      $$('#groups .group [data-group-toggle]').forEach(header => {
        header.addEventListener('click', () => {
          const section = header.closest('.group');
          const body = section.querySelector('[data-group-body]');
          const collapsed = section.getAttribute('data-collapsed') === 'true';
          section.setAttribute('data-collapsed', collapsed ? 'false' : 'true');
          if (collapsed) {
            body.classList.remove('hidden');
          } else {
            body.classList.add('hidden');
          }
        });
      });

      // Row expand details
      function toggleDetails(btn, open) {
        const id = btn.getAttribute('aria-controls');
        const details = document.getElementById(id);
        const isOpen = open !== undefined ? open : btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
        details.classList.toggle('open', !isOpen);
      }
      $$('.row-expand').forEach(btn => {
        btn.addEventListener('click', () => toggleDetails(btn));
        btn.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleDetails(btn); } });
      });

      // Menu open/close
      $$('.menu .more').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const menu = btn.closest('.menu');
          $$('.menu').forEach(m => m !== menu && m.classList.remove('open'));
          menu.classList.toggle('open');
        });
      });
      document.addEventListener('click', () => $$('.menu').forEach(m => m.classList.remove('open')));

      // Selection & batch bar
      const batchBar = document.getElementById('batch-bar');
      const batchCount = document.getElementById('batch-count');
      function updateBatchBar() {
        const selected = $$('.doc-card[data-selected="true"]');
        batchCount.textContent = selected.length;
        batchBar.classList.toggle('hidden', selected.length === 0);
      }
      $$('.row-select').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const card = btn.closest('.doc-card');
          const isSelected = card.getAttribute('data-selected') === 'true';
          card.setAttribute('data-selected', isSelected ? 'false' : 'true');
          btn.classList.toggle('active', !isSelected);
          updateBatchBar();
        });
      });

      // Toggle "fourni"
      function setProvided(card, provided) {
        card.dataset.provided = provided ? 'true' : 'false';
        // Visual hint: if provided mark state as Envoyé (unless NA)
        const state = card.querySelector('.state .state-pill');
        if (card.dataset.status !== 'na') {
          state.className = 'state-pill ' + (provided ? 'stateoye' : (card.dataset.status === 'brouillon' ? 'state-brouillon' : 'state-afaire'));
          state.textContent = provided ? 'Envoyé' : (card.dataset.status === 'brouillon' ? 'Brouillon' : 'À faire');
        }
        updateProgress();
        updateGroupCounters();
        applyFilters();
      }
      $$('.doc-card .toggle-input').forEach(input => {
        const card = input.closest('.doc-card');
        // init from HTML toggle state
        if (input.checked) card.dataset.provided = 'true';
        input.addEventListener('change', () => setProvided(card, input.checked));
      });

      // Attach "Marquer fourni" action in menus
      $$('.menu-item[data-action="provided"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const card = btn.closest('.doc-card');
          const toggle = card.querySelector('.toggle-input');
          toggle.checked = true;
          setProvided(card, true);
          btn.closest('.menu').classList.remove('open');
        });
      });

      // Basic upload (button)
      $$('.btn.ghost.upload').forEach(btn => {
        btn.addEventListener('click', () => {
          const card = btn.closest('.doc-card');
          const attachments = card.querySelector('[data-attachments]');
          const input = document.createElement('input');
          input.type = 'file';
          input.multiple = true;
          input.accept = '.pdf,.jpg,.jpeg,.png,.dwg,.zip';
          input.addEventListener('change', () => {
            if (!input.files) return;
            [...input.files].forEach(f => addAttachmentPill(attachments, f.name));
            // auto mark as provided when files added
            const toggle = card.querySelector('.toggle-input');
            if (toggle && !toggle.checked) { toggle.checked = true; setProvided(card, true); }
          });
          input.click();
        });
      });

      // Add link
      $$('.btn.ghost.link').forEach(btn => {
        btn.addEventListener('click', () => {
          const url = prompt('Coller l’URL du document:');
          if (!url) return;
          const card = btn.closest('.doc-card');
          const attachments = card.querySelector('[data-attachments]');
          addAttachmentPill(attachments, url, true);
          const toggle = card.querySelector('.toggle-input');
          if (toggle && !toggle.checked) { toggle.checked = true; setProvided(card, true); }
        });
      });

      function addAttachmentPill(container, name, isLink=false) {
        const pill = document.createElement('span');
        pill.className = 'file-pill';
        pill.innerHTML = (isLink
          ? '<i data-lucide="link-2" class="h-3.5 w-3.5"></i>'
          : '<i data-lucide="file" class="h-3.5 w-3.5"></i>') + ' ' + name +
          ' <button class="remove" title="Retirer" aria-label="Retirer"><i data-lucide="x" class="h-3.5 w-3.5"></i></button>';
        container.appendChild(pill);
        lucide.createIcons(); // refresh icons
        pill.querySelector('.remove').addEventListener('click', () => pill.remove());
      }

      // Dropzones
      $$('.dropzone').forEach(zone => {
        zone.addEventListener('dragover', (e) => { e.preventDefault(); zone.classList.add('dragover'); });
        zone.addEventListener('dragleave', () => zone.classList.remove('dragover'));
        zone.addEventListener('drop', (e) => {
          e.preventDefault();
          zone.classList.remove('dragover');
          const files = e.dataTransfer?.files;
          if (!files?.length) return;
          const attachments = zone.parentElement.querySelector('[data-attachments]');
          [...files].forEach(f => addAttachmentPill(attachments, f.name));
          const card = zone.closest('.doc-card');
          const toggle = card.querySelector('.toggle-input');
          if (toggle && !toggle.checked) { toggle.checked = true; setProvided(card, true); }
        });
      });

      // Search, filters, sort
      const searchInput = document.getElementById('search');
      const sortSelect = document.getElementById('sort');

      function normalize(s) { return (s || '').toString().toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu,''); }

      function cardStatusFilterKey(card) {
        if (card.dataset.status === 'na') return 'na';
        if (card.dataset.provided === 'true') return 'fournis';
        if (card.dataset.status === 'brouillon' || card.dataset.status === 'envoye') return 'en_cours';
        return 'a_fournir';
      }

      function applyFilters() {
        const query = normalize(searchInput.value.trim());
        const activeStatus = new Set($$('.filter-chip[data-filter-type="status"][data-active="true"]').map(b => b.dataset.filter));
        const activeOrigin = new Set($$('.filter-chip[data-filter-type="origin"][data-active="true"]').map(b => b.dataset.filter));

        $$('#groups .group').forEach(group => {
          const body = group.querySelector('[data-group-body]');
          if (!body) return;

          let visibleCount = 0;
          $$('.doc-card', body).forEach(card => {
            // search
            const hay = normalize(card.dataset.search + ' ' + (card.querySelector('.doc-name')?.textContent || ''));
            const matchesSearch = query === '' || hay.includes(query);
            const matchesStatus = activeStatus.has(cardStatusFilterKey(card));
            const matchesOrigin = activeOrigin.has(card.dataset.origin);

            const show = matchesSearch && matchesStatus && matchesOrigin;
            card.style.display = show ? '' : 'none';
            if (show) visibleCount++;
          });

          // hide group if none visible
          if (visibleCount === 0) {
            group.classList.add('opacity-50');
          } else {
            group.classList.remove('opacity-50');
          }
        });

        sortCards();
        updateGroupCounters();
      }

      function sortCards() {
        const mode = sortSelect.value;
        $$('#groups .group [data-group-body]').forEach(body => {
          const cards = $$('.doc-card', body).filter(c => c.style.display !== 'none');
          if (mode === 'name') {
            cards.sort((a,b) => a.querySelector('.doc-name').textContent.localeCompare(b.querySelector('.doc-name').textContent, 'fr'));
          } else if (mode === 'priority') {
            cards.sort((a,b) => (parseInt(a.dataset.priority||'999') - parseInt(b.dataset.priority||'999')));
          } else if (mode === 'group') {
            // Already grouped; keep DOM order by priority as fallback
            cards.sort((a,b) => (parseInt(a.dataset.priority||'999') - parseInt(b.dataset.priority||'999')));
          }
          cards.forEach(c => body.appendChild(c));
        });
      }

      $$('.filter-chip').forEach(chip => {
        chip.addEventListener('click', () => {
          const isActive = chip.getAttribute('data-active') === 'true';
          chip.setAttribute('data-active', isActive ? 'false' : 'true');
          applyFilters();
        });
      });
      document.getElementById('reset-filters')?.addEventListener('click', () => {
        $$('.filter-chip').forEach(c => c.setAttribute('data-active','true'));
        searchInput.value = '';
        sortSelect.value = 'priority';
        applyFilters();
      });
      searchInput.addEventListener('input', applyFilters);
      sortSelect.addEventListener('change', () => { sortCards(); });

      // Group counters and progress
      function updateGroupCounters() {
        $$('#groups .group').forEach(group => {
          const body = group.querySelector('[data-group-body]');
          if (!body) return;
          const cardsAll = $$('.doc-card', body).filter(c => c.dataset.status !== 'na');
          const cardsProvided = cardsAll.filter(c => c.dataset.provided === 'true');
          const counter = group.querySelector('[data-group-counter]');
          if (counter) counter.textContent = `${cardsProvided.length} sur ${cardsAll.length} fournis`;
        });
      }

      function updateProgress() {
        const cards = $$('.doc-card').filter(c => c.dataset.status !== 'na');
        const provided = cards.filter(c => c.dataset.provided === 'true');
        const deliveredEl = document.getElementById('progress-delivered');
        const totalEl = document.getElementById('progress-total');
        const bar = document.getElementById('progress-bar');
        deliveredEl.textContent = provided.length;
        totalEl.textContent = cards.length;
        const pct = cards.length ? Math.round(100 * provided.length / cards.length) : 0;
        bar.style.width = pct + '%';
      }

      // Batch actions
      document.getElementById('batch-provide').addEventListener('click', () => {
        const selected = $$('.doc-card[data-selected="true"]');
        selected.forEach(card => {
          const toggle = card.querySelector('.toggle-input');
          if (toggle) toggle.checked = true;
          setProvided(card, true);
          card.setAttribute('data-selected','false');
          card.querySelector('.row-select')?.classList.remove('active');
        });
        updateBatchBar();
      });
      document.getElementById('batch-request').addEventListener('click', () => {
        const selected = $$('.doc-card[data-selected="true"]');
        alert(`${selected.length} élément(s) — demande envoyée au client (simulation).`);
      });
      document.getElementById('batch-export').addEventListener('click', () => {
        const selected = $$('.doc-card[data-selected="true"]');
        alert(`Export de ${selected.length} élément(s) (simulation).`);
      });

      // Export/Print
      document.getElementById('export-zip').addEventListener('click', () => alert('Génération du pack ZIP (simulation)…'));
      document.getElementById('print-all').addEventListener('click', () => window.print());

      // Exemplaires popover
      const popover = document.getElementById('exemplaires-popover');
      function openPopoverNear(el) {
        popover.classList.remove('hidden');
        // Centered layout; could be made anchored if needed
      }
      $$('.exemplaires[aria-haspopup="dialog"]').forEach(ex => {
        ex.addEventListener('click', (e) => { e.stopPropagation(); openPopoverNear(ex); });
        ex.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openPopoverNear(ex); } });
      });
      $('[data-popover-close]')?.addEventListener('click', () => popover.classList.add('hidden'));
      document.addEventListener('click', (e) => {
        if (!popover.classList.contains('hidden') && !popover.contains(e.target)) popover.classList.add('hidden');
      });

      // Initialize icons and computed values
      document.addEventListener('DOMContentLoaded', () => {
        try { lucide.createIcons(); } catch(e) {}
        applyFilters();
        updateProgress();
      });
    

lucide.createIcons();
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 space-y-6">

<header className="flex items-start justify-between gap-4 rounded-xl border border-white/5 bg-[rgb(15,16,20)]/80 backdrop-blur-md p-5 shadow-sm">
<div className="flex-1 space-y-2">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-indigo-500/10 text-indigo-400 tracking-tight font-medium">PR</span>
<div aria-label="Titre du projet (éditable)" className="text-2xl sm:text-3xl tracking-tight font-semibold text-slate-100 outline-none focus:ring-2 focus:ring-indigo-500/30 focus:rounded-md px-1" contenteditable="true" role="textbox" spellcheck="false">Maison unifamiliale — Rénovation &amp; Extension</div>
</div>
<div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
<div className="inline-flex items-center gap-2">
<i className="h-4 w-4" data-lucide="map-pin"></i>
<span>34 Rue de la Gare, 4800 Verviers</span>
</div>
<div className="inline-flex items-center gap-2">
<i className="h-4 w-4" data-lucide="layers"></i>
<span>Parcelles: B123d, B124a</span>
</div>
<div className="inline-flex items-center gap-2">
<i className="h-4 w-4" data-lucide="user-2"></i>
<span>Client: J. Dupont</span>
</div>
</div>
</div>
<div className="flex flex-col items-end gap-3">
<div className="flex items-center gap-3">
<div className="rounded-lg border border-white/5 bg-black/20 px-3.5 py-2 text-sm">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-emerald-400" data-lucide="check-circle-2"></i>
<span className="text-slate-300">Progression</span>
<span className="font-medium text-slate-100"><span id="progress-delivered">7</span>/<span id="progress-total">18</span> livrées</span>
</div>
<div className="mt-1 h-1.5 w-48 overflow-hidden rounded bg-slate-800">
<div className="h-full bg-emerald-500 transition-all duration-500" id="progress-bar" style={{width: '40%'}}></div>
</div>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md border border-indigo-500/20 bg-indigo-500/10 px-3 py-2 text-sm text-indigo-300 hover:text-indigo-200 hover:bg-indigo-500/15 hover:border-indigo-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40" id="export-zip">
<i className="h-4 w-4" data-lucide="package"></i>
                Exporter le pack
              </button>
<button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500/40" id="print-all">
<i className="h-4 w-4" data-lucide="printer"></i>
                Imprimer
              </button>
</div>
</div>
<div className="flex items-center gap-2 text-xs text-amber-300/90">
<i className="h-4 w-4" data-lucide="triangle-alert"></i>
<span>WoM temporairement indisponible — mode dégradé activé. Marquez “À valider” et complétez manuellement si nécessaire.</span>
</div>
</div>
</header>

<section className="rounded-xl border border-white/5 bg-[rgb(15,16,20)]/80 backdrop-blur-md p-4 shadow-sm space-y-3">
<div className="flex flex-col md:flex-row md:items-center gap-3">

<div className="relative flex-1">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" data-lucide="search"></i>
<input className="w-full rounded-md border border-white/10 bg-black/20 pl-10 pr-3 py-2 text-sm placeholder:text-slate-500 text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400/30" id="search" placeholder="Rechercher (nom/abréviation, ex. “PEB”, “SOLS”)" type="text"/>
</div>

<div className="flex items-center gap-2">
<label className="text-xs text-slate-400" htmlFor="sort">Tri</label>
<select className="rounded-md border border-white/10 bg-black/20 px-2.5 py-2 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400/30" id="sort">
<option value="priority">Priorité</option>
<option value="group">Groupe</option>
<option value="name">Nom</option>
</select>
</div>
</div>

<div className="flex flex-col lg:flex-row gap-3 justify-between">
<div className="flex flex-wrap items-center gap-2 text-xs">
<span className="text-slate-400">Statut</span>
<button className="filter-chip data-[active=true]:bg-emerald-500/15 data-[active=true]:text-emerald-300" data-active="true" data-filter="a_fournir" data-filter-type="status">
              À fournir
            </button>
<button className="filter-chip data-[active=true]:bg-amber-500/15 data-[active=true]:text-amber-300" data-active="true" data-filter="en_cours" data-filter-type="status">
              En cours
            </button>
<button className="filter-chip data-[active=true]:bg-indigo-500/15 data-[active=true]:text-indigo-300" data-active="true" data-filter="fournis" data-filter-type="status">
              Fournis
            </button>
<button className="filter-chip data-[active=true]:bg-slate-500/15 data-[active=true]:text-slate-300" data-active="true" data-filter="na" data-filter-type="status">
              Non applicables
            </button>
</div>
<div className="flex flex-wrap items-center gap-2 text-xs">
<span className="text-slate-400">Origine</span>
<button className="filter-chip data-[active=true]:bg-white/10 data-[active=true]:text-slate-200" data-active="true" data-filter="obligatoire" data-filter-type="origin">Obligatoire</button>
<button className="filter-chip data-[active=true]:bg-white/10 data-[active=true]:text-slate-200" data-active="true" data-filter="regle" data-filter-type="origin">Règle</button>
<button className="filter-chip data-[active=true]:bg-white/10 data-[active=true]:text-slate-200" data-active="true" data-filter="manuel" data-filter-type="origin">Ajout manuel</button>
<button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-transparent px-2.5 py-1.5 text-xs text-slate-300 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-slate-500/30" id="reset-filters">
<i className="h-3.5 w-3.5" data-lucide="rotate-ccw"></i> Réinitialiser
            </button>
</div>
</div>
</section>

<div className="hidden sticky top-3 z-40 rounded-lg border border-indigo-500/20 bg-indigo-500/10 backdrop-blur px-3.5 py-2.5 shadow-sm" id="batch-bar">
<div className="flex items-center justify-between gap-3 text-sm">
<div className="flex items-center gap-2 text-indigo-200">
<i className="h-4 w-4" data-lucide="check-square"></i>
<span><span id="batch-count">0</span> sélectionné(s)</span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-sm text-emerald-200 hover:bg-emerald-500/15" id="batch-provide">Marquer fourni</button>
<button className="inline-flex items-center gap-2 rounded-md border border-amber-500/20 bg-amber-500/10 px-3 py-1.5 text-sm text-amber-200 hover:bg-amber-500/15" id="batch-request">Demander au client</button>
<button className="inline-flex items-center gap-2 rounded-md border border-indigo-500/20 bg-indigo-500/10 px-3 py-1.5 text-sm text-indigo-200 hover:bg-indigo-500/15" id="batch-export">
<i className="h-4 w-4" data-lucide="download"></i> Exporter
            </button>
</div>
</div>
</div>

<main className="rounded-xl border border-white/5 bg-[rgb(15,16,20)]/80 backdrop-blur-md p-4 sm:p-5 shadow-sm" id="panel">
<div className="mb-4 flex items-center justify-between">
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold text-slate-100">Documents à fournir</h2>
<p className="hidden text-sm text-slate-400" id="empty-conditional">Aucune pièce conditionnelle pour ce projet. Fournissez les pièces obligatoires ci-dessous.</p>
</div>

<div className="space-y-3" id="groups">

<section className="group rounded-lg border border-white/5 bg-black/20">
<header className="flex items-center justify-between px-3 py-2.5 cursor-pointer hover:bg-white/5 transition-colors" data-group-toggle="">
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-slate-400 transition-transform duration-200 group-[&amp;[data-collapsed=true]]:-rotate-90" data-lucide="chevron-down"></i>
<span className="text-sm font-medium text-slate-100">Obligatoires</span>
<span className="text-xs text-slate-400">toujours visibles</span>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-slate-400" data-group-counter="">0 sur 0 fournis</span>
<span className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-slate-300">
<i className="h-3.5 w-3.5" data-lucide="list-checks"></i> MVP
                </span>
</div>
</header>
<div className="divide-y divide-white/5" data-group-body="">

<article className="doc-card" data-badge="requis" data-group="obligatoires" data-id="demande" data-origin="obligatoire" data-priority="1" data-search="formulaire de demande demande administrative" data-status="a_faire">
<div className="doc-row">
<div className="doc-left">
<button aria-label="Sélectionner" className="row-select"></button>
<button aria-controls="details-demande" aria-expanded="false" className="row-expand">
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-right"></i>
</button>
<span className="doc-name">Formulaire de demande</span>
<span aria-haspopup="dialog" className="exemplaires" data-ex="4*" role="button" tabindex="0">4* ex.</span>
<span className="badge badge-requis" title="Nécessaire avant dépôt — refus probable si absent.">Requis</span>
</div>
<div className="doc-right">
<div className="rule flex items-center gap-1.5">
<i className="h-4 w-4 text-slate-400" data-lucide="settings-2"></i>
<div className="tooltip">Toujours requis (CoDT)</div>
</div>
<div className="state">
<span className="state-pill state-afaire">À faire</span>
</div>
<div className="quick-actions">
<button aria-label="Téléverser" className="btn ghost upload"><i className="h-4 w-4" data-lucide="file-up"></i></button>
<button aria-label="Joindre lien" className="btn ghost link"><i className="h-4 w-4" data-lucide="link-2"></i></button>
<div className="menu">
<button aria-haspopup="menu" className="btn ghost more"><i className="h-4 w-4" data-lucide="more-vertical"></i></button>
<div className="menu-panel">
<button className="menu-item" data-action="generate"><i className="h-4 w-4" data-lucide="file-text"></i> Générer modèle</button>
<button className="menu-item" data-action="see-req"><i className="h-4 w-4" data-lucide="list"></i> Voir exigences</button>
<button className="menu-item" data-action="request"><i className="h-4 w-4" data-lucide="send"></i> Demander au client</button>
<button className="menu-item" data-action="provided"><i className="h-4 w-4" data-lucide="check"></i> Marquer fourni</button>
<button className="menu-item danger" data-action="disable"><i className="h-4 w-4" data-lucide="slash"></i> Désactiver (NA)</button>
</div>
</div>
<label className="toggle" title="Marquer fourni rapidement">
<input className="toggle-input" type="checkbox"/>
<span className="toggle-track"></span>
</label>
</div>
</div>
</div>
<div aria-label="Détails — Formulaire de demande" className="doc-details" id="details-demande" role="region">
<div className="details-inner">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div>
<h4 className="details-title">Exigences</h4>
<ul className="details-list">
<li>Formulaire officiel signé.</li>
<li>Cohérence des informations cadastrales.</li>
<li>Coordonnées complètes du demandeur.</li>
</ul>
</div>
<div>
<h4 className="details-title">Référence &amp; source</h4>
<div className="details-text">
<a className="link" href="#"><i className="h-3.5 w-3.5" data-lucide="link"></i> Aide interne — Formulaire</a>
<p>Origine: CoDT</p>
</div>
<h4 className="details-title mt-3">Contributeurs &amp; journal</h4>
<p className="details-text">Dernier ajout: —</p>
</div>
<div>
<h4 className="details-title">Pièces jointes</h4>
<div className="attachments" data-attachments=""></div>
<div aria-label="Glisser-déposer ici" className="dropzone">Glisser-déposer (PDF/JPG/PNG/DWG/ZIP)</div>
</div>
</div>
</div>
</div>
</article>

<article className="doc-card" data-badge="requis" data-group="obligatoires" data-id="photos" data-origin="obligatoire" data-priority="2" data-search="reportage photographique photos" data-status="brouillon">
<div className="doc-row">
<div className="doc-left">
<button aria-label="Sélectionner" className="row-select"></button>
<button aria-controls="details-photos" aria-expanded="false" className="row-expand">
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-right"></i>
</button>
<span className="doc-name">Reportage photographique</span>
<span aria-haspopup="dialog" className="exemplaires" data-ex="4*" role="button" tabindex="0">4* ex.</span>
<span className="badge badge-requis" title="Nécessaire avant dépôt — refus probable si absent.">Requis</span>
</div>
<div className="doc-right">
<div className="rule flex items-center gap-1.5">
<i className="h-4 w-4 text-slate-400" data-lucide="settings-2"></i>
<div className="tooltip">Toujours requis</div>
</div>
<div className="state">
<span className="state-pill state-brouillon">Brouillon</span>
</div>
<div className="quick-actions">
<button aria-label="Téléverser" className="btn ghost upload"><i className="h-4 w-4" data-lucide="file-up"></i></button>
<button aria-label="Joindre lien" className="btn ghost link"><i className="h-4 w-4" data-lucide="link-2"></i></button>
<div className="menu">
<button aria-haspopup="menu" className="btn ghost more"><i className="h-4 w-4" data-lucide="more-vertical"></i></button>
<div className="menu-panel">
<button className="menu-item" data-action="see-req"><i className="h-4 w-4" data-lucide="list"></i> Voir exigences</button>
<button className="menu-item" data-action="provided"><i className="h-4 w-4" data-lucide="check"></i> Marquer fourni</button>
</div>
</div>
<label className="toggle" title="Marquer fourni rapidement">
<input className="toggle-input" type="checkbox"/>
<span className="toggle-track"></span>
</label>
</div>
</div>
</div>
<div aria-label="Détails — Reportage photographique" className="doc-details" id="details-photos" role="region">
<div className="details-inner">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div>
<h4 className="details-title">Exigences</h4>
<ul className="details-list">
<li>2 vues front de voirie + vis-à-vis</li>
<li>3 vues limites/parcelles</li>
<li>3 vues éloignées avec implantation</li>
</ul>
</div>
<div>
<h4 className="details-title">Référence &amp; source</h4>
<div className="details-text">
<a className="link" href="#"><i className="h-3.5 w-3.5" data-lucide="link"></i> Aide — Reportage photo</a>
<p>Origine: CoDT</p>
</div>
<h4 className="details-title mt-3">Contributeurs &amp; journal</h4>
<p className="details-text">Autosave actif — 10:12</p>
</div>
<div>
<h4 className="details-title">Pièces jointes</h4>
<div className="attachments" data-attachments=""></div>
<div className="dropzone">Glisser-déposer (PDF/JPG/PNG/DWG/ZIP)</div>
</div>
</div>
</div>
</div>
</article>

<article className="doc-card" data-badge="requis" data-group="obligatoires" data-id="plans" data-origin="obligatoire" data-priority="3" data-search="plans cadre 7 planches cadre7" data-status="envoye">
<div className="doc-row">
<div className="doc-left">
<button aria-label="Sélectionner" className="row-select"></button>
<button aria-controls="details-plans" aria-expanded="false" className="row-expand">
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-right"></i>
</button>
<span className="doc-name">Plans (Cadre 7)</span>
<span aria-haspopup="dialog" className="exemplaires" data-ex="4*" role="button" tabindex="0">4* ex.</span>
<span className="badge badge-requis">Requis</span>
<a className="mini-link" href="#"><i className="h-3.5 w-3.5" data-lucide="external-link"></i> Voir Plans requis</a>
</div>
<div className="doc-right">
<div className="rule flex items-center gap-1.5">
<i className="h-4 w-4 text-slate-400" data-lucide="settings-2"></i>
<div className="tooltip">Toujours requis</div>
</div>
<div className="state">
<span className="state-pill state-envoye">Envoyé</span>
</div>
<div className="quick-actions">
<button aria-label="Téléverser" className="btn ghost upload"><i className="h-4 w-4" data-lucide="file-up"></i></button>
<button aria-label="Joindre lien" className="btn ghost link"><i className="h-4 w-4" data-lucide="link-2"></i></button>
<div className="menu">
<button aria-haspopup="menu" className="btn ghost more"><i className="h-4 w-4" data-lucide="more-vertical"></i></button>
<div className="menu-panel">
<button className="menu-item" data-action="provided"><i className="h-4 w-4" data-lucide="check"></i> Marquer validé</button>
<button className="menu-item" data-action="replace"><i className="h-4 w-4" data-lucide="arrow-up-from-line"></i> Remplacer</button>
</div>
</div>
<label className="toggle" title="Marquer fourni rapidement">
<input checked="" className="toggle-input" type="checkbox"/>
<span className="toggle-track"></span>
</label>
</div>
</div>
</div>
<div aria-label="Détails — Plans" className="doc-details" id="details-plans" role="region">
<div className="details-inner">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div>
<h4 className="details-title">Exigences</h4>
<ul className="details-list">
<li>Échelles conformes (1/50 à 1/500)</li>
<li>Coupe(s), façades, implantation</li>
<li>Cadre 7 — légende standardisée</li>
</ul>
</div>
<div>
<h4 className="details-title">Référence &amp; source</h4>
<div className="details-text">
<a className="link" href="#"><i className="h-3.5 w-3.5" data-lucide="link"></i> Section “Cadre 7”</a>
<p>Origine: CoDT</p>
</div>
<h4 className="details-title mt-3">Contributeurs &amp; journal</h4>
<p className="details-text">Dernier ajout: 10:31 — A. Martin</p>
</div>
<div>
<h4 className="details-title">Pièces jointes</h4>
<div className="attachments" data-attachments="">
<span className="file-pill"><i className="h-3.5 w-3.5" data-lucide="file"></i> plan_implantation.pdf</span>
<span className="file-pill"><i className="h-3.5 w-3.5" data-lucide="file"></i> facades_01.pdf</span>
</div>
<div className="dropzone">Glisser-déposer (PDF/JPG/PNG/DWG/ZIP)</div>
</div>
</div>
</div>
</div>
</article>

<article className="doc-card" data-badge="conditionnel" data-group="obligatoires" data-id="incidences" data-origin="regle" data-priority="4" data-search="notice etude incidences environnement code environnement" data-status="na">
<div className="doc-row opacity-60">
<div className="doc-left">
<button aria-label="Sélectionner" className="row-select" disabled=""></button>
<button aria-controls="details-incidences" aria-expanded="false" className="row-expand">
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-right"></i>
</button>
<span className="doc-name">Notice/Étude d’incidences</span>
<span aria-haspopup="dialog" className="exemplaires" data-ex="4" role="button" tabindex="0">4 ex.</span>
<span className="badge badge-cond" title="Demandé selon contexte réglementaire détecté.">Conditionnel</span>
<span className="badge badge-na line-through" title="Non applicable au projet actuel.">Non applicable</span>
</div>
<div className="doc-right">
<div className="rule flex items-center gap-1.5">
<i className="h-4 w-4 text-slate-400" data-lucide="settings-2"></i>
<div className="tooltip">Non activé — Code de l’environnement</div>
</div>
<div className="state"><span className="state-pill state-na">N/A</span></div>
<div className="quick-actions">
<button aria-label="Téléverser" className="btn ghost upload" disabled=""><i className="h-4 w-4" data-lucide="file-up"></i></button>
<div className="menu">
<button aria-haspopup="menu" className="btn ghost more"><i className="h-4 w-4" data-lucide="more-vertical"></i></button>
<div className="menu-panel">
<button className="menu-item" data-action="why"><i className="h-4 w-4" data-lucide="info"></i> Pourquoi non applicable ?</button>
<button className="menu-item" data-action="force"><i className="h-4 w-4" data-lucide="toggle-right"></i> Forcer comme applicable</button>
</div>
</div>
</div>
</div>
</div>
<div aria-label="Détails — Notice/Étude d’incidences" className="doc-details" id="details-incidences" role="region">
<div className="details-inner">
<p className="text-sm text-slate-400">Ce document est non applicable. Cliquez pour afficher les critères ou activer manuellement si nécessaire.</p>
</div>
</div>
</article>

<article className="doc-card" data-badge="conditionnel" data-group="obligatoires" data-id="sols" data-origin="regle" data-priority="5" data-search="decret sols bdes sol" data-status="a_faire">
<div className="doc-row">
<div className="doc-left">
<button aria-label="Sélectionner" className="row-select"></button>
<button aria-controls="details-sols" aria-expanded="false" className="row-expand">
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-right"></i>
</button>
<span className="doc-name">Décret SOLS (BDES)</span>
<span aria-haspopup="dialog" className="exemplaires" data-ex="3" role="button" tabindex="0">3 ex.</span>
<span className="badge badge-cond">Conditionnel</span>
<div className="relative inline-flex">
<a className="mini-link" href="#"><i className="h-3.5 w-3.5" data-lucide="map"></i> voir la couche/risque</a>
</div>
</div>
<div className="doc-right">
<div className="rule flex items-center gap-1.5">
<i className="h-4 w-4 text-slate-400" data-lucide="settings-2"></i>
<div className="tooltip">Déclenché par historique d’activités (WoM)</div>
</div>
<div className="state">
<span className="state-pill state-afaire">À faire</span>
</div>
<div className="quick-actions">
<button aria-label="Téléverser" className="btn ghost upload"><i className="h-4 w-4" data-lucide="file-up"></i></button>
<button aria-label="Joindre lien" className="btn ghost link"><i className="h-4 w-4" data-lucide="link-2"></i></button>
<div className="menu">
<button aria-haspopup="menu" className="btn ghost more"><i className="h-4 w-4" data-lucide="more-vertical"></i></button>
<div className="menu-panel">
<button className="menu-item" data-action="generate"><i className="h-4 w-4" data-lucide="file-text"></i> Générer modèle</button>
<button className="menu-item" data-action="request"><i className="h-4 w-4" data-lucide="send"></i> Demander au client</button>
</div>
</div>
<label className="toggle" title="Marquer fourni rapidement">
<input className="toggle-input" type="checkbox"/>
<span className="toggle-track"></span>
</label>
</div>
</div>
</div>
<div aria-label="Détails — Décret SOLS (BDES)" className="doc-details" id="details-sols" role="region">
<div className="details-inner">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div>
<h4 className="details-title">Exigences</h4>
<ul className="details-list">
<li>3 exemplaires.</li>
<li>Rapport conforme BDES.</li>
</ul>
</div>
<div>
<h4 className="details-title">Référence &amp; source</h4>
<div className="details-text">
<a className="link" href="#"><i className="h-3.5 w-3.5" data-lucide="link"></i> Aide — Décret SOLS</a>
<p>Origine: BDES</p>
</div>
</div>
<div>
<h4 className="details-title">Pièces jointes</h4>
<div className="attachments" data-attachments=""></div>
<div className="dropzone">Glisser-déposer (PDF/JPG/PNG/DWG/ZIP)</div>
</div>
</div>
</div>
</div>
</article>

<article className="doc-card" data-badge="conditionnel" data-group="obligatoires" data-id="peb" data-origin="regle" data-priority="6" data-search="formulaire peb energie &gt;25% declaration responsable" data-status="a_faire">
<div className="doc-row">
<div className="doc-left">
<button aria-label="Sélectionner" className="row-select"></button>
<button aria-controls="details-peb" aria-expanded="false" className="row-expand">
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-right"></i>
</button>
<span className="doc-name">Formulaire PEB</span>
<span aria-haspopup="dialog" className="exemplaires" data-ex="2" role="button" tabindex="0">2 ex.</span>
<span className="badge badge-cond">Conditionnel</span>
</div>
<div className="doc-right">
<div className="rule flex items-center gap-1.5">
<i className="h-4 w-4 text-slate-400" data-lucide="settings-2"></i>
<div className="tooltip">Déclenché par &gt;25% et type d’intervention</div>
</div>
<div className="state">
<span className="state-pill state-afaire">À faire</span>
</div>
<div className="quick-actions">
<button aria-label="Téléverser" className="btn ghost upload"><i className="h-4 w-4" data-lucide="file-up"></i></button>
<button aria-label="Joindre lien" className="btn ghost link"><i className="h-4 w-4" data-lucide="link-2"></i></button>
<div className="menu">
<button aria-haspopup="menu" className="btn ghost more"><i className="h-4 w-4" data-lucide="more-vertical"></i></button>
<div className="menu-panel">
<button className="menu-item" data-action="generate"><i className="h-4 w-4" data-lucide="file-text"></i> Générer modèle</button>
<button className="menu-item" data-action="request"><i className="h-4 w-4" data-lucide="send"></i> Demander au client</button>
</div>
</div>
<label className="toggle" title="Marquer fourni rapidement">
<input className="toggle-input" type="checkbox"/>
<span className="toggle-track"></span>
</label>
</div>
</div>
</div>
<div aria-label="Détails — Formulaire PEB" className="doc-details" id="details-peb" role="region">
<div className="details-inner">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div>
<h4 className="details-title">Exigences</h4>
<ul className="details-list">
<li>2 exemplaires.</li>
<li>Responsable PEB vs déclaration selon contexte.</li>
</ul>
</div>
<div>
<h4 className="details-title">Référence &amp; source</h4>
<div className="details-text">
<a className="link" href="#"><i className="h-3.5 w-3.5" data-lucide="link"></i> PEB — Aide interne</a>
<p>Origine: Règle PEB</p>
</div>
</div>
<div>
<h4 className="details-title">Pièces jointes</h4>
<div className="attachments" data-attachments=""></div>
<div className="dropzone">Glisser-déposer (PDF/JPG/PNG/DWG/ZIP)</div>
</div>
</div>
</div>
</div>
</article>

<article className="doc-card" data-badge="conditionnel" data-group="obligatoires" data-id="statbel" data-origin="regle" data-priority="7" data-search="formulaire statbel modele i ii habitation autres batiments" data-status="a_faire">
<div className="doc-row">
<div className="doc-left">
<button aria-label="Sélectionner" className="row-select"></button>
<button aria-controls="details-statbel" aria-expanded="false" className="row-expand">
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-right"></i>
</button>
<span className="doc-name">Formulaire Statbel</span>
<span aria-haspopup="dialog" className="exemplaires" data-ex="2" role="button" tabindex="0">2 ex.</span>
<span className="badge badge-cond">Conditionnel</span>
</div>
<div className="doc-right">
<div className="rule flex items-center gap-1.5">
<i className="h-4 w-4 text-slate-400" data-lucide="settings-2"></i>
<div className="tooltip">Pas requis si pas de bâtiment</div>
</div>
<div className="state">
<span className="state-pill state-afaire">À faire</span>
</div>
<div className="quick-actions">
<button aria-label="Téléverser" className="btn ghost upload"><i className="h-4 w-4" data-lucide="file-up"></i></button>
<button aria-label="Joindre lien" className="btn ghost link"><i className="h-4 w-4" data-lucide="link-2"></i></button>
<div className="menu">
<button aria-haspopup="menu" className="btn ghost more"><i className="h-4 w-4" data-lucide="more-vertical"></i></button>
<div className="menu-panel">
<button className="menu-item" data-action="generate"><i className="h-4 w-4" data-lucide="file-text"></i> Choisir modèle I/II</button>
<button className="menu-item" data-action="request"><i className="h-4 w-4" data-lucide="send"></i> Demander au client</button>
</div>
</div>
<label className="toggle" title="Marquer fourni rapidement">
<input className="toggle-input" type="checkbox"/>
<span className="toggle-track"></span>
</label>
</div>
</div>
</div>
<div aria-label="Détails — Statbel" className="doc-details" id="details-statbel" role="region">
<div className="details-inner">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div>
<h4 className="details-title">Exigences</h4>
<ul className="details-list">
<li>Modèle I (habitation) ou modèle II (autres bâtiments)</li>
<li>Non requis si pas de bâtiment</li>
</ul>
</div>
<div>
<h4 className="details-title">Référence &amp; source</h4>
<div className="details-text">
<a className="link" href="#"><i className="h-3.5 w-3.5" data-lucide="link"></i> Guide Statbel</a>
<p>Origine: Statbel</p>
</div>
</div>
<div>
<h4 className="details-title">Pièces jointes</h4>
<div className="attachments" data-attachments=""></div>
<div className="dropzone">Glisser-déposer (PDF/JPG/PNG/DWG/ZIP)</div>
</div>
</div>
</div>
</div>
</article>
</div>
</section>

<section className="group rounded-lg border border-white/5 bg-black/20" data-collapsed="true">
<header className="flex items-center justify-between px-3 py-2.5 cursor-pointer hover:bg-white/5 transition-colors" data-group-toggle="">
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-slate-400 transition-transform duration-200 group-[&amp;[data-collapsed=true]]:-rotate-90" data-lucide="chevron-down"></i>
<span className="text-sm font-medium text-slate-100">Patrimoine</span>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-slate-400" data-group-counter="">0 sur 0 fournis</span>
</div>
</header>
<div className="divide-y divide-white/5 hidden" data-group-body="">

<article className="doc-card" data-badge="requis" data-group="patrimoine" data-id="patrimoine_autorisation" data-origin="regle" data-priority="2" data-search="autorisation patrimoine classe protection unesco zone" data-status="a_faire">
<div className="doc-row">
<div className="doc-left">
<button aria-label="Sélectionner" className="row-select"></button>
<button aria-controls="details-patrimoine-aut" aria-expanded="false" className="row-expand">
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-right"></i>
</button>
<span className="doc-name">Autorisation patrimoniale</span>
<span className="badge badge-requis">Requis</span>
<a className="mini-link" href="#"><i className="h-3.5 w-3.5" data-lucide="map"></i> voir la couche/risque</a>
</div>
<div className="doc-right">
<div className="rule flex items-center gap-1.5">
<i className="h-4 w-4 text-slate-400" data-lucide="settings-2"></i>
<div className="tooltip">Classé/assimilé/zone de protection/UNESCO</div>
</div>
<div className="state"><span className="state-pill state-afaire">À faire</span></div>
<div className="quick-actions">
<button className="btn ghost upload"><i className="h-4 w-4" data-lucide="file-up"></i></button>
<div className="menu">
<button className="btn ghost more"><i className="h-4 w-4" data-lucide="more-vertical"></i></button>
<div className="menu-panel">
<button className="menu-item" data-action="see-req"><i className="h-4 w-4" data-lucide="list"></i> Voir exigences</button>
<button className="menu-item" data-action="request"><i className="h-4 w-4" data-lucide="send"></i> Demander au client</button>
</div>
</div>
<label className="toggle">
<input className="toggle-input" type="checkbox"/>
<span className="toggle-track"></span>
</label>
</div>
</div>
</div>
<div className="doc-details" id="details-patrimoine-aut">
<div className="details-inner">
<h4 className="details-title">Exigences</h4>
<ul className="details-list">
<li>Joindre l’autorisation valide</li>
<li>Référence du bien</li>
</ul>
</div>
</div>
</article>

<article className="doc-card" data-badge="conditionnel" data-group="patrimoine" data-id="archeo" data-origin="regle" data-priority="3" data-search="avis archeologique ha zone 1ha" data-status="na">
<div className="doc-row opacity-60">
<div className="doc-left">
<button aria-label="Sélectionner" className="row-select" disabled=""></button>
<button aria-controls="details-archeo" aria-expanded="false" className="row-expand">
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-right"></i>
</button>
<span className="doc-name">Avis archéologique préalable</span>
<span className="exemplaires" data-ex="2">2 ex.</span>
<span className="badge badge-cond">Conditionnel</span>
<span className="badge badge-na line-through">Non applicable</span>
</div>
<div className="doc-right">
<div className="rule flex items-center gap-1.5">
<i className="h-4 w-4 text-slate-400" data-lucide="settings-2"></i>
<div className="tooltip">Seuil ≥ 1 ha</div>
</div>
<div className="state"><span className="state-pill state-na">N/A</span></div>
<div className="quick-actions">
<div className="menu">
<button className="btn ghost more"><i className="h-4 w-4" data-lucide="more-vertical"></i></button>
<div className="menu-panel">
<button className="menu-item" data-action="why"><i className="h-4 w-4" data-lucide="info"></i> Pourquoi non applicable ?</button>
</div>
</div>
</div>
</div>
</div>
<div className="doc-details" id="details-archeo">
<div className="details-inner">
<p className="text-sm text-slate-400">Surface du projet &lt; 1 ha.</p>
</div>
</div>
</article>
</div>
</section>

<section className="group rounded-lg border border-white/5 bg-black/20" data-collapsed="true">
<header className="flex items-center justify-between px-3 py-2.5 cursor-pointer hover:bg-white/5 transition-colors" data-group-toggle="">
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-slate-400 transition-transform duration-200 group-[&amp;[data-collapsed=true]]:-rotate-90" data-lucide="chevron-down"></i>
<span className="text-sm font-medium text-slate-100">Conservation de la nature</span>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-slate-400" data-group-counter="">0 sur 0 fournis</span>
</div>
</header>
<div className="divide-y divide-white/5 hidden" data-group-body="">

<article className="doc-card" data-badge="conditionnel" data-group="nature" data-id="natura_eval" data-origin="regle" data-priority="2" data-search="evaluation appropriee natura2000 espece protegee" data-status="a_faire">
<div className="doc-row">
<div className="doc-left">
<button aria-label="Sélectionner" className="row-select"></button>
<button aria-controls="details-natura" aria-expanded="false" className="row-expand">
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-right"></i>
</button>
<span className="doc-name">Évaluation appropriée</span>
<span className="exemplaires" data-ex="3">3 ex.</span>
<span className="badge badge-cond">Conditionnel</span>
<a className="mini-link" href="#"><i className="h-3.5 w-3.5" data-lucide="map"></i> voir la couche/risque</a>
</div>
<div className="doc-right">
<div className="rule flex items-center gap-1.5">
<i className="h-4 w-4 text-slate-400" data-lucide="settings-2"></i>
<div className="tooltip">Natura 2000 / espèces protégées</div>
</div>
<div className="state"><span className="state-pill state-afaire">À faire</span></div>
<div className="quick-actions">
<button className="btn ghost upload"><i className="h-4 w-4" data-lucide="file-up"></i></button>
<label className="toggle">
<input className="toggle-input" type="checkbox"/>
<span className="toggle-track"></span>
</label>
</div>
</div>
</div>
<div className="doc-details" id="details-natura">
<div className="details-inner">
<p className="text-sm text-slate-300">Exigences: évaluer l’impact sur sites Natura 2000 selon méthode SPW.</p>
</div>
</div>
</article>

<article className="doc-card" data-badge="conditionnel" data-group="nature" data-id="dnf_derog" data-origin="regle" data-priority="3" data-search="derogation protection nature dnf" data-status="a_faire">
<div className="doc-row">
<div className="doc-left">
<button aria-label="Sélectionner" className="row-select"></button>
<button aria-controls="details-dnf" aria-expanded="false" className="row-expand">
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-right"></i>
</button>
<span className="doc-name">Dérogation protection de la nature (DNF)</span>
<span className="exemplaires" data-ex="3">3 ex.</span>
<span className="badge badge-cond">Conditionnel</span>
</div>
<div className="doc-right">
<div className="rule flex items-center gap-1.5">
<i className="h-4 w-4 text-slate-400" data-lucide="settings-2"></i>
<div className="tooltip">Atteinte possible aux espèces protégées</div>
</div>
<div className="state"><span className="state-pill state-afaire">À faire</span></div>
<div className="quick-actions">
<button className="btn ghost upload"><i className="h-4 w-4" data-lucide="file-up"></i></button>
<label className="toggle">
<input className="toggle-input" type="checkbox"/>
<span className="toggle-track"></span>
</label>
</div>
</div>
</div>
<div className="doc-details" id="details-dnf">
<div className="details-inner">
<p className="text-sm text-slate-300">Exigences: motiver la dérogation, impacts, mesures compensatoires.</p>
</div>
</div>
</article>
</div>
</section>

<section className="group rounded-lg border border-white/5 bg-black/20" data-collapsed="true">
<header className="flex items-center justify-between px-3 py-2.5 cursor-pointer hover:bg-white/5 transition-colors" data-group-toggle="">
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-slate-400 transition-transform duration-200 group-[&amp;[data-collapsed=true]]:-rotate-90" data-lucide="chevron-down"></i>
<span className="text-sm font-medium text-slate-100">Voirie (communal/régional)</span>
</div>
<span className="text-xs text-slate-400" data-group-counter="">0 sur 0 fournis</span>
</header>
<div className="divide-y divide-white/5 hidden" data-group-body="">
<article className="doc-card" data-badge="conditionnel" data-group="voirie" data-id="voirie_dossier" data-origin="regle" data-priority="2" data-search="dossier voirie creation modification suppression" data-status="a_faire">
<div className="doc-row">
<div className="doc-left">
<button aria-label="Sélectionner" className="row-select"></button>
<button aria-controls="details-voirie-dossier" aria-expanded="false" className="row-expand">
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-right"></i>
</button>
<span className="doc-name">Dossier voirie</span>
<span className="exemplaires" data-ex="4">4 ex.</span>
<span className="badge badge-cond">Conditionnel</span>
</div>
<div className="doc-right">
<div className="rule flex items-center gap-1.5">
<i className="h-4 w-4 text-slate-400" data-lucide="settings-2"></i>
<div className="tooltip">Création/modif/suppression d’accès</div>
</div>
<div className="state"><span className="state-pill state-afaire">À faire</span></div>
<div className="quick-actions">
<button className="btn ghost upload"><i className="h-4 w-4" data-lucide="file-up"></i></button>
<label className="toggle">
<input className="toggle-input" type="checkbox"/>
<span className="toggle-track"></span>
</label>
</div>
</div>
<div className="doc-details" id="details-voirie-dossier">
<div className="details-inner">
<p className="text-sm text-slate-300">Exigences: plan d’accès, coupes, intégration cyclable si voirie régionale.</p>
</div>
</div>
</div></article>
<article className="doc-card" data-badge="conditionnel" data-group="voirie" data-id="voirie_cyclables" data-origin="regle" data-priority="3" data-search="note amenagements cyclables voirie regionale" data-status="a_faire">
<div className="doc-row">
<div className="doc-left">
<button aria-label="Sélectionner" className="row-select"></button>
<button aria-controls="details-cyclables" aria-expanded="false" className="row-expand">
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-right"></i>
</button>
<span className="doc-name">Note aménagements cyclables</span>
<span className="exemplaires" data-ex="3">3 ex.</span>
<span className="badge badge-cond">Conditionnel</span>
</div>
<div className="doc-right">
<div className="rule flex items-center gap-1.5">
<i className="h-4 w-4 text-slate-400" data-lucide="settings-2"></i>
<div className="tooltip">Voirie régionale</div>
</div>
<div className="state"><span className="state-pill state-afaire">À faire</span></div>
<div className="quick-actions">
<button className="btn ghost upload"><i className="h-4 w-4" data-lucide="file-up"></i></button>
<label className="toggle">
<input className="toggle-input" type="checkbox"/>
<span className="toggle-track"></span>
</label>
</div>
</div>
</div>
<div className="doc-details" id="details-cyclables">
<div className="details-inner">
<p className="text-sm text-slate-300">Exigences: démontrer la continuité et la sécurité des modes actifs.</p>
</div>
</div>
</article>
</div>
</section>

<section className="group rounded-lg border border-white/5 bg-black/20" data-collapsed="false">
<header className="flex items-center justify-between px-3 py-2.5 cursor-pointer hover:bg-white/5 transition-colors" data-group-toggle="">
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-slate-400 transition-transform duration-200 group-[&amp;[data-collapsed=true]]:-rotate-90" data-lucide="chevron-down"></i>
<span className="text-sm font-medium text-slate-100">Risques naturels</span>
</div>
<span className="text-xs text-slate-400" data-group-counter="">0 sur 0 fournis</span>
</header>
<div className="divide-y divide-white/5" data-group-body="">
<article className="doc-card" data-badge="conditionnel" data-group="risques" data-id="non_aggravation" data-origin="regle" data-priority="2" data-search="non aggravation inondable faible moyenne" data-status="brouillon">
<div className="doc-row">
<div className="doc-left">
<button aria-label="Sélectionner" className="row-select"></button>
<button aria-controls="details-nonaggrav" aria-expanded="false" className="row-expand">
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-right"></i>
</button>
<span className="doc-name">Non-aggravation (inondable faible/moyenne)</span>
<span className="exemplaires" data-ex="4">4 ex.</span>
<span className="badge badge-cond">Conditionnel</span>
</div>
<div className="doc-right">
<div className="rule flex items-center gap-1.5">
<i className="h-4 w-4 text-slate-400" data-lucide="settings-2"></i>
<div className="tooltip">Déclenché par carte WoM</div>
</div>
<div className="state"><span className="state-pill state-brouillon">Brouillon</span></div>
<div className="quick-actions">
<button className="btn ghost upload"><i className="h-4 w-4" data-lucide="file-up"></i></button>
<label className="toggle">
<input className="toggle-input" type="checkbox"/>
<span className="toggle-track"></span>
</label>
</div>
</div>
</div>
<div className="doc-details" id="details-nonaggrav">
<div className="details-inner">
<p className="text-sm text-slate-300">Assurer l’absence d’aggravation des écoulements.</p>
</div>
</div>
</article>
<article className="doc-card" data-badge="requis" data-group="risques" data-id="faisabilite" data-origin="regle" data-priority="1" data-search="faisabilite inondable elevee requis bloquant" data-status="a_faire">
<div className="doc-row">
<div className="doc-left">
<button aria-label="Sélectionner" className="row-select"></button>
<button aria-controls="details-faisabilite" aria-expanded="false" className="row-expand">
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-right"></i>
</button>
<span className="doc-name">Faisabilité (inondable élevée)</span>
<span className="exemplaires" data-ex="4">4 ex.</span>
<span className="badge badge-requis">Requis</span>
<span className="badge badge-blocking"><i className="h-3.5 w-3.5" data-lucide="shield-alert"></i> Bloquant</span>
</div>
<div className="doc-right">
<div className="rule flex items-center gap-1.5">
<i className="h-4 w-4 text-slate-400" data-lucide="settings-2"></i>
<div className="tooltip">Déclenché par Inondation — niveau élevé (WoM)</div>
</div>
<div className="state"><span className="state-pill state-afaire">À faire</span></div>
<div className="quick-actions">
<button className="btn ghost upload"><i className="h-4 w-4" data-lucide="file-up"></i></button>
<div className="menu">
<button className="btn ghost more"><i className="h-4 w-4" data-lucide="more-vertical"></i></button>
<div className="menu-panel">
<button className="menu-item" data-action="see-req"><i className="h-4 w-4" data-lucide="list"></i> Voir exigences</button>
<button className="menu-item" data-action="why"><i className="h-4 w-4" data-lucide="info"></i> Détails de la règle</button>
</div>
</div>
<label className="toggle">
<input className="toggle-input" type="checkbox"/>
<span className="toggle-track"></span>
</label>
</div>
</div>
</div>
<div className="doc-details" id="details-faisabilite">
<div className="details-inner">
<p className="text-sm text-slate-300">Requis bloquant: nécessaire avant dépôt — refus probable si absent.</p>
</div>
</div>
</article>
<article className="doc-card" data-badge="conditionnel" data-group="risques" data-id="projet_non_aggravant" data-origin="regle" data-priority="3" data-search="projet non aggravant zone deja inondee" data-status="na">
<div className="doc-row opacity-60">
<div className="doc-left">
<button aria-label="Sélectionner" className="row-select" disabled=""></button>
<button aria-controls="details-projetnonag" aria-expanded="false" className="row-expand">
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-right"></i>
</button>
<span className="doc-name">Projet non aggravant (zone déjà inondée)</span>
<span className="exemplaires" data-ex="4">4 ex.</span>
<span className="badge badge-cond">Conditionnel</span>
<span className="badge badge-na line-through">Non applicable</span>
</div>
<div className="doc-right">
<div className="rule flex items-center gap-1.5">
<i className="h-4 w-4 text-slate-400" data-lucide="settings-2"></i>
<div className="tooltip">Zone non marquée “déjà inondée”</div>
</div>
<div className="state"><span className="state-pill state-na">N/A</span></div>
<div className="quick-actions">
<div className="menu">
<button className="btn ghost more"><i className="h-4 w-4" data-lucide="more-vertical"></i></button>
<div className="menu-panel">
<button className="menu-item" data-action="why"><i className="h-4 w-4" data-lucide="info"></i> Pourquoi non applicable ?</button>
</div>
</div>
</div>
</div>
</div>
<div className="doc-details" id="details-projetnonag">
<div className="details-inner">
<p className="text-sm text-slate-300">Non applicable car zone non identifiée comme “déjà inondée”.</p>
</div>
</div>
</article>
<article className="doc-card" data-badge="conditionnel" data-group="risques" data-id="servitudes_ecoulement" data-origin="regle" data-priority="4" data-search="servitudes ecoulement absence obstacle" data-status="a_faire">
<div className="doc-row">
<div className="doc-left">
<button aria-label="Sélectionner" className="row-select"></button>
<button aria-controls="details-ecoulement" aria-expanded="false" className="row-expand">
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-right"></i>
</button>
<span className="doc-name">Servitudes d’écoulement</span>
<span aria-haspopup="dialog" className="exemplaires" data-ex="2" role="button" tabindex="0">2 ex.</span>
<span className="badge badge-cond">Conditionnel</span>
</div>
<div className="doc-right">
<div className="rule flex items-center gap-1.5">
<i className="h-4 w-4 text-slate-400" data-lucide="settings-2"></i>
<div className="tooltip">Cours d’eau/axes d’écoulement identifiés (WoM)</div>
</div>
<div className="state"><span className="state-pill state-afaire">À faire</span></div>
<div className="quick-actions">
<button aria-label="Téléverser" className="btn ghost upload"><i className="h-4 w-4" data-lucide="file-up"></i></button>
<button aria-label="Joindre lien" className="btn ghost link"><i className="h-4 w-4" data-lucide="link-2"></i></button>
<label className="toggle" title="Marquer fourni rapidement">
<input className="toggle-input" type="checkbox"/>
<span className="toggle-track"></span>
</label>
</div>
</div>
</div>
<div aria-label="Détails — Servitudes d’écoulement" className="doc-details" id="details-ecoulement" role="region">
<div className="details-inner">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div>
<h4 className="details-title">Exigences</h4>
<ul className="details-list">
<li>Attester l’absence d’obstacle aux servitudes d’écoulement.</li>
<li>Schéma des écoulements et dispositifs prévus.</li>
</ul>
</div>
<div>
<h4 className="details-title">Référence &amp; source</h4>
<div className="details-text">
<a className="link" href="#"><i className="h-3.5 w-3.5" data-lucide="link"></i> Guide — Servitudes d’écoulement</a>
<p>Origine: Règle WoM</p>
</div>
</div>
<div>
<h4 className="details-title">Pièces jointes</h4>
<div className="attachments" data-attachments=""></div>
<div className="dropzone">Glisser-déposer (PDF/JPG/PNG/DWG/ZIP)</div>
</div>
</div>
</div>
</div>
</article>
</div>
</section>
</div>
</main>

<aside className="rounded-xl border border-white/5 bg-[rgb(15,16,20)]/80 backdrop-blur-md p-4 text-xs text-slate-400">
<div className="flex flex-wrap gap-3">
<span className="inline-flex items-center gap-2"><span className="state-pill state-afaire">À faire</span> à compléter</span>
<span className="inline-flex items-center gap-2"><span className="state-pill state-brouillon">Brouillon</span> en préparation</span>
<span className="inline-flex items-center gap-2"><span className="state-pill state-envoye">Envoyé</span> soumis, en attente</span>
<span className="inline-flex items-center gap-2"><span className="state-pill state-na">N/A</span> non applicable</span>
<span className="inline-flex items-center gap-2"><span className="badge badge-requis">Requis</span> obligatoire</span>
<span className="inline-flex items-center gap-2"><span className="badge badge-cond">Conditionnel</span> selon règles</span>
<span className="inline-flex items-center gap-1 text-amber-300/90"><i className="h-3.5 w-3.5" data-lucide="triangle-alert"></i> Mode WoM dégradé</span>
</div>
</aside>
</div>

<div className="popover hidden" id="exemplaires-popover">
<div className="popover-inner">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="text-sm font-medium text-slate-100">Exemplaires</h3>
<p className="mt-1 text-xs text-slate-400">Nombre d’exemplaires à fournir. Le signe * indique que les exemplaires doivent être signés ou tamponnés.</p>
</div>
<button aria-label="Fermer" className="btn ghost small" data-popover-close="">
<i className="h-4 w-4" data-lucide="x"></i>
</button>
</div>
</div>
</div>

<style>
      .doc-card { background: transparent; }
      .doc-row { display:flex; align-items:center; justify-content:space-between; gap:.75rem; padding:.75rem .75rem; }
      .doc-left { display:flex; align-items:center; gap:.5rem; min-width:0; }
      .doc-right { display:flex; align-items:center; gap:.75rem; }
      .doc-name { font-weight:500; color:#e2e8f0; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
      .row-select { width:18px; height:18px; border-radius:.375rem; border:1px solid rgba(255,255,255,.15); background:transparent; position:relative; }
      .row-select.active { background: rgba(99,102,241,.15); border-color: rgba(99,102,241,.4); }
      .row-select.active::after { content:""; position:absolute; inset:3px; background:#818cf8; border-radius:.25rem; }
      .row-expand { display:inline-flex; align-items:center; justify-content:center; width:24px; height:24px; border-radius:.375rem; border:1px solid transparent; }
      .row-expand:hover { background:rgba(255,255,255,.05); border-color:rgba(255,255,255,.08); }
      .badge { font-size:11px; padding:.125rem .375rem; border-radius:.375rem; border:1px solid rgba(255,255,255,.12); }
      .badge-requis { background:rgba(16,185,129,.12); color:#a7f3d0; border-color:rgba(16,185,129,.25); }
      .badge-cond { background:rgba(99,102,241,.12); color:#c7d2fe; border-color:rgba(99,102,241,.25); }
      .badge-na { background:rgba(148,163,184,.12); color:#cbd5e1; border-color:rgba(148,163,184,.25); }
      .badge-blocking { background:rgba(245,158,11,.12); color:#fde68a; border-color:rgba(245,158,11,.25); display:inline-flex; align-items:center; gap:.25rem; }
      .mini-link { font-size:12px; color:#a5b4fc; padding:.125rem .25rem; border-radius:.25rem; border:1px solid rgba(99,102,241,.2); background:rgba(99,102,241,.06); }
      .mini-link:hover { background:rgba(99,102,241,.1); }
      .state-pill { font-size:11px; padding:.125rem .5rem; border-radius:999px; border:1px solid transparent; }
      .state-afaire { background:rgba(239,68,68,.12); color:#fecaca; border-color:rgba(239,68,68,.25); }
      .state-brouillon { background:rgba(245,158,11,.12); color:#fde68a; border-color:rgba(245,158,11,.25); }
      .state-envoye { background:rgba(59,130,246,.12); color:#bfdbfe; border-color:rgba(59,130,246,.25); }
      .state-na { background:rgba(148,163,184,.12); color:#cbd5e1; border-color:rgba(148,163,184,.25); }
      .toggle { position:relative; display:inline-flex; align-items:center; cursor:pointer; }
      .toggle-input { position:absolute; opacity:0; width:0; height:0; }
      .toggle-track { width:36px; height:20px; border-radius:999px; background:rgba(148,163,184,.25); border:1px solid rgba(148,163,184,.3); display:inline-block; position:relative; transition:all .2s; }
      .toggle-track::after { content:""; position:absolute; top:50%; transform:translateY(-50%); left:3px; width:14px; height:14px; border-radius:50%; background:#94a3b8; transition:all .2s; }
      .toggle-input:checked + .toggle-track { background:rgba(16,185,129,.2); border-color:(16,185,129,.4); }
      .toggle-input:checked + .toggle-track::after { left:19px; background:#34d399; }
      .btn.ghost { color:#cbd5e1; padding:.25rem .4rem; border-radius:.375rem; border:1px solid rgba(255,255,255,.1); background:rgba(255,255,255,.04); }
      .btn.ghost:hover { background:rgba(255,255,255,.08); }
      .btn.ghost.small { padding:.2rem; }
      .menu { position:relative; }
      .menu-panel { position:absolute; right:0; top:125%; min-width:200px; background:rgba(2,6,23,.95); border:1px solid rgba(255,255,255,.08); border-radius:.5rem; padding:.25rem; box-shadow:0 10px 30px rgba(0,0,0,.35); display:none; z-index:30; }
      .menu.open .menu-panel { display:block; }
      .menu-item { width:100%; text-align:left; display:flex; align-items:center; gap:.5rem; color:#e2e8f0; font-size:13px; padding:.45rem .5rem; border-radius:.375rem; }
      .menu-item:hover { background:rgba(255,255,255,.06); }
      .menu-item.danger { color:#fca5a5; }
      .details-title { font-size:.8rem; font-weight:600; color:#e2e8f0; }
      .details-list { margin-top:.25rem; list-style:disc; padding-left:1.125rem; color:#cbd5e1; font-size:.8rem; }
      .details-text { color:#cbd5e1; font-size:.8rem; }
      .doc-details { display:none; border-top:1px solid rgba(255,255,255,.06); background:rgba(0,0,0,.15); }
      .doc-details.open { display:block; }
      .details-inner { padding:.75rem; }
      .attachments { display:flex; flex-wrap:wrap; gap:.4rem; }
      .file-pill { display:inline-flex; align-items:center; gap:.35rem; font-size:12px; color:#e2e8f0; background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.12); padding:.25rem .5rem; border-radius:.375rem; }
      .file-pill .remove { opacity:.7; }
      .file-pill .remove:hover { opacity:1; }
      .dropzone { margin-top:.5rem; border:1.5px dashed rgba(99,102,241,.35); background:rgba(99,102,241,.06); color:#c7d2fe; font-size:12px; padding:.6rem; border-radius:.5rem; text-align:center; }
      .dropzone.dragover { background:rgba(99,102,241,.12); border-color:rgba(99,102,241,.6); }
      .filter-chip { display:inline-flex; align-items:center; gap:.35rem; padding:.35rem .55rem; border-radius:.5rem; border:1px solid rgba(255,255,255,.12); background:rgba(255,255,255,.04); color:#cbd5e1; }
      .filter-chip:hover { background:rgba(255,255,255,.08); }
      .filter-chip[data-active="true"] { outline: 1px solid rgba(99,102,241,.35); }
      .rule { position:relative; }
      .rule .tooltip { position:absolute; left:50%; transform:translateX(-50%); bottom:140%; white-space:nowrap; padding:.rem .4rem; font-size:11px; border-radius:.375rem; color:#e2e8f0; background:rgba(2,6,23,.95); border:1px solid rgba(255,255,255,.08); opacity:0; pointer-events:none; transition:.15s; }
      .rule:hover .tooltip { opacity:1; }
      .exemplaires { display:inline-flex; align-items:center; gap:.25rem; font-size:12px; color:#cbd5e1; padding:.15rem .35rem; border-radius:.25rem; border:1px dashed rgba(255,255,255,.15); cursor:pointer; }
      .exemplaires:focus { outline:2px solid rgba(99,102,241,.4); outline-offset:2px; }
      .popover { position:fixed; inset:0; z-index:50; display:grid; place-items:center; background:transparent; }
      .popover .popover-inner { width:min(520px, 92vw); border:1px solid rgba(255,255,255,.08); background:rgba(2,6,23,.9); backdrop-filter: blur(10px border-radius:.75rem; padding:1rem; box-shadow:0 20px 70px rgba(0,0,0,.55); }
      .hidden { display:none !important; }
    </style>






    </>
  );
}
