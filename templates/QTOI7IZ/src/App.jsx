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
      
      // Render icons
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });

      // Utilities
      const qs = (s, r=document) => r.querySelector(s);
      const qsa = (s, r=document) => Array.from(r.querySelectorAll(s));
      const show = (el) => { el && (el.classList.remove('hidden')); };
      const hide = (el) => { el && (el.classList.add('hidden')); };
      const toggle = (el) => { el && el.classList.toggle('hidden'); };

      // Smooth scroll to sections
      qsa('[data-scroll-to]').forEach(btn => {
        btn.addEventListener('click', () => {
          const target = qs(btn.getAttribute('data-scroll-to'));
          if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });

      // Filter dropdown
      const filterBtn = qs('#filterBtn');
      const filterMenu = qs('#filterMenu');
      filterBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggle(filterMenu);
      });
      document.addEventListener('click', () => hide(filterMenu));
      qsa('#filterMenu [data-filter]').forEach(item => {
        item.addEventListener('click', () => {
          hide(filterMenu);
          toast('Filtre: ' + item.dataset.filter);
        });
      });

      // Badge context menu
      let badgeAnchor = null;
      const badgeMenu = qs('#badgeMenu');
      qsa('[data-badge]').forEach(b => {
        b.addEventListener('click', (e) => {
          e.stopPropagation();
          badgeAnchor = b;
          const rect = b.getBoundingClientRect();
          badgeMenu.style.top = (rect.bottom + window.scrollY + 6) + 'px';
          badgeMenu.style.left = (rect.right + window.scrollX - badgeMenu.offsetWidth) + 'px';
          show(badgeMenu);
        });
      });
      document.addEventListener('click', () => hide(badgeMenu));
      qsa('#badgeMenu .menu-action').forEach(action => {
        action.addEventListener('click', () => {
          const a = action.dataset.action;
          hide(badgeMenu);
          const stateMap = {
            confirm: { bg:'#ECFDF5', color:'#16A34A', border:'#A7F3D0', icon:'check', label:'Validé' },
            edit: { bg:'#FFFBEB', color:'#F59E0B', border:'#FDE68A', icon:'alert-triangle', label:'À vérifier' },
            discuss: { bg:'#EEF2FF', color:'#2563EB', border:'#C7D2FE', icon:'message-square', label:'À discuter' },
            attach: null
          };
          if (a === 'attach') {
            toast('Pièce jointe ajoutée.');
            return;
          }
          if (badgeAnchor) {
            const badgeSpan = badgeAnchor.querySelector('span');
            const m = stateMap[a];
            badgeSpan.style.background = m.bg;
            badgeSpan.style.color = m.color;
            badgeSpan.style.borderColor = m.border;
            const icon = badgeSpan.querySelector('svg');
            icon.setAttribute('data-lucide', m.icon);
            badgeSpan.querySelector('span:last-child').textContent = m.label;
            lucide.createIcons({ attrs: { 'stroke-width': 1.5 } }); // refresh icon
            toast('Statut: ' + m.label);
          }
        });
      });

      // Keyboard shortcuts for menu
      document.addEventListener('keydown', (e) => {
        if (!badgeMenu.classList.contains('hidden')) {
          if (e.key.toLowerCase() === 'c') qs('[data-action="confirm"]', badgeMenu).click();
          if (e.key.toLowerCase() === 'e') qs('[data-action="edit"]', badgeMenu).click();
          if (e.key.toLowerCase() === 'j') qs('[data-action="attach"]', badgeMenu).click();
        }
      });

      // Visualisateur panel
      const viewer = qs('#viewer');
      const viewerOverlay = qs('#viewerOverlay');
      const openPanelButtons = qsa('[data-open-panel]');
      const closeViewer = qs('#closeViewer');
      function openViewer(tab='regle') {
        // Responsive: overlay between 1024-1279
        const w = window.innerWidth;
        if (w < 1280) {
          show(viewerOverlay);
        }
        viewer.classList.remove('translate-x-full');
        setViewerTab(tab);
      }
      function closePanel() {
        hide(viewerOverlay);
        viewer.classList.add('translate-x-full');
      }
      openPanelButtons.forEach(b => {
        b.addEventListener('click', () => openViewer(b.dataset.openPanel));
      });
      closeViewer.addEventListener('click', closePanel);
      viewerOverlay.addEventListener('click', closePanel);

      // Viewer tabs
      const tabs = qsa('.viewer-tab');
      function setViewerTab(key) {
        tabs.forEach(t => {
          const active = t.dataset.tab === key;
          t.classList.toggle('bg-[#111827]', active);
          t.classList.toggle('text-white', active);
          t.classList.toggle('text-[#111827]', !active);
        });
        ['regle','couches','historique'].forEach(k => {
          const el = qs('#tab-' + k);
          if (k === key) show(el); else hide(el);
        });
        // Degradé banner visible on "couches"
        if (key === 'couches') show(qs('#degradeBanner')); else hide(qs('#degradeBanner'));
      }
      tabs.forEach(t => t.addEventListener('click', () => setViewerTab(t.dataset.tab)));

      // Recommandations insertion flow
      const ctaRec = qs('#ctaRecommandations');
      const recos = qs('#recos');
      if (ctaRec) {
        ctaRec.addEventListener('click', () => {
          toggle(recos);
        });
      }
      qsa('.insert-reco').forEach(btn => {
        btn.addEventListener('click', () => {
          // Simulate insertion into "Justification"
          const targetParagraph = qs('#cadre-5 .group:nth-of-type(2) .mt-2');
          if (targetParagraph) {
            const p = document.createElement('p');
            p.className = 'mt-2 text-[14px] leading-[22px]';
            p.textContent = btn.textContent.replace(/^Ajouter:\s+/,'');
            targetParagraph.appendChild(p);
          }
          // Set badge to Validé
          const badge = qs('#cadre-5 .group:nth-of-type(2) [data-badge] span');
          badge.style.background = '#ECFDF5';
          badge.style.color = '#16A34A';
          badge.style.borderColor = '#A7F3D0';
          badge.querySelector('span:last-child').textContent = 'Validé';
          const icon = badge.querySelector('svg');
          icon.setAttribute('data-lucide', 'check');
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
          toast('Recommandation insérée. Champ validé.');
        });
      });

      // Mode Validation
      const toggleValidation = qs('#toggleValidationMode');
      const toggleKnob = qs('#toggleKnob');
      const validationOverlay = qs('#validationOverlay');
      const closeValidation = qs('#closeValidation');
      const valPrev = qs('#valPrev');
      const valNext = qs('#valNext');
      const valConfirm = qs('#valConfirm');
      const valEdit = qs('#valEdit');
      const valDiscuss = qs('#valDiscuss');
      const valDone = qs('#valDone');

      const pile = [
        {
          label: 'Justification',
          value: 'Rédiger la justification réglementaire',
          badge: { color:'#DC2626', bg:'#FEF2F2', border:'#FECACA', icon:'x-octagon', label:'Bloquant' },
          note: 'Veuillez préciser la conformité à l’article D.IV.6.',
          hasEditor: true
        },
        {
          label: 'Plan de secteur',
          value: 'Agricole',
          badge: { color:'#F59E0B', bg:'#FFFBEB', border:'#FDE68A', icon:'alert-triangle', label:'À vérifier' },
          note: 'Vérifier hypothèse de dérogation.',
          hasEditor: false
        }
      ];
      let idx = 0;

      function renderValidation() {
        const cur = pile[idx];
        qs('#valLabel').textContent = cur.label;
        qs('#valValue').textContent = cur.value;
        const badge = qs('#valBadge');
        badge.style.background = cur.badge.bg;
        badge.style.color = cur.badge.color;
        badge.style.borderColor = cur.badge.border;
        badge.innerHTML = `<i data-lucide="${cur.badge.icon}" class="w-[14px] h-[14px]"></i><span>${cur.badge.label}</span>`;
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        const note = qs('#valNote');
        if (cur.note) { note.textContent = cur.note; show(note); } else hide(note);
        const editor = qs('#valEditor');
        if (cur.hasEditor) show(editor); else hide(editor);
        qs('#valCounter').textContent = (idx+1) + ' / ' + pile.length;
        valPrev.disabled = (idx === 0);
        valNext.disabled = (idx === pile.length - 1);
      }

      function openValidation() {
        show(validationOverlay);
        renderValidation();
      }
      function closeValidationFn() {
        hide(validationOverlay);
        // reset toggle
        toggleKnob.style.transformtoggleKnob.style.transform = 'translateX(0px)';
        const track = toggleValidation.querySelector('span[aria-hidden="true"]');
        if (track) track.style.background = '#E5E7EB';
      }

      let isValidationOn = false;

      function setToggle(on) {
        isValidationOn = on;
        const track = toggleValidation.querySelector('span[aria-hidden="true"]');
        if (on) {
          toggleKnob.style.transform = 'translateX(20px)';
          if (track) track.style.background = '#A7F3D0';
        } else {
          toggleKnob.style.transform = 'translateX(0px)';
          if (track) track.style.background = '#E5E7EB';
        }
      }

      toggleValidation.addEventListener('click', () => {
        if (isValidationOn) {
          closeValidationFn();
          setToggle(false);
        } else {
          openValidation();
          setToggle(true);
        }
      });

      closeValidation.addEventListener('click', () => {
        closeValidationFn();
        setToggle(false);
      });

      // Navigation actions
      valPrev.addEventListener('click', () => {
        if (idx > 0) {
          idx--;
          renderValidation();
        }
      });
      valNext.addEventListener('click', () => {
        if (idx < pile.length - 1) {
          idx++;
          renderValidation();
        }
      });

      // Apply badge to both overlay and underlying field (if mapped)
      const badgeStates = {
        valid:   { color:'#16A34A', bg:'#ECFDF5', border:'#A7F3D0', icon:'check',          label:'Validé' },
        warn:    { color:'#F59E0B', bg:'#FFFBEB', border:'#FDE68A', icon:'alert-triangle', label:'À vérifier' },
        discuss: { color:'#2563EB', bg:'#EEF2FF', border:'#C7D2FE', icon:'message-square', label:'À discuter' },
        block:   { color:'#DC2626', bg:'#FEF2F2', border:'#FECACA', icon:'x-octagon',      label:'Bloquant' },
      };

      const badgeSelectorsByLabel = {
        'Justification': '#cadre-5 .group:nth-of-type(2) [data-badge] span',
        'Plan de secteur': '#cadre-5 .group:nth-of-type(1) [data-badge] span'
      };

      function applyBadge(el, state) {
        if (!el) return;
        el.style.background = state.bg;
        el.style.color = state.color;
        el.style.borderColor = state.border;
        const icon = el.querySelector('svg');
        if (icon) icon.setAttribute('data-lucide', state.icon);
        const txt = el.querySelector('span:last-child');
        if (txt) txt.textContent = state.label;
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }

      function syncUnderlying(label, state) {
        const sel = badgeSelectorsByLabel[label];
        if (!sel) return;
        const el = qs(sel);
        applyBadge(el, state);
      }

      function checkCompletion() {
        const allValid = pile.every(p => p.badge.label === 'Validé');
        if (allValid) show(valDone); else hide(valDone);
      }

      // Overlay action buttons
      valConfirm.addEventListener('click', () => {
        const cur = pile[idx];
        cur.badge = badgeStates.valid;
        renderValidation();
        syncUnderlying(cur.label, cur.badge);
        toast('Champ confirmé');
        checkCompletion();
      });

      valEdit.addEventListener('click', () => {
        const cur = pile[idx];
        cur.badge = badgeStates.warn;
        renderValidation();
        syncUnderlying(cur.label, cur.badge);
        toast('Champ marqué “À vérifier”');
        checkCompletion();
      });

      valDiscuss.addEventListener('click', () => {
        const cur = pile[idx];
        cur.badge = badgeStates.discuss;
        renderValidation();
        syncUnderlying(cur.label, cur.badge);
        toast('Champ ajouté “À discuter”');
        checkCompletion();
      });

      valDone.addEventListener('click', () => {
        closeValidationFn();
        setToggle(false);
        toast('Validation terminée — tout est validé ✅');
      });

      // Keyboard for overlay
      document.addEventListener('keydown', (e) => {
        if (!isValidationOn || validationOverlay.classList.contains('hidden')) return;
        if (e.key === 'ArrowLeft') { e.preventDefault(); valPrev.click(); }
        if (e.key === 'ArrowRight') { e.preventDefault(); valNext.click(); }
        if (e.key.toLowerCase() === 'c') { e.preventDefault(); valConfirm.click(); }
        if (e.key.toLowerCase() === 'e') { e.preventDefault(); valEdit.click(); }
        if (e.key.toLowerCase() === 'd') { e.preventDefault(); valDiscuss.click(); }
        if (e.key === 'Escape') { e.preventDefault(); closeValidationFn(); setToggle(false); }
      });

      // Simple formatting controls for editor
      qsa('#valEditor [data-format]').forEach(btn => {
        btn.addEventListener('click', () => {
          const fmt = btn.dataset.format;
          const ta = qs('#editorArea');
          if (!ta) return;
          const { selectionStart: s, selectionEnd: e, value } = ta;
          const sel = value.slice(s, e) || 'texte';
          let out = value;
          if (fmt === 'bold') {
            out = value.slice(0, s) + '**' + sel + '**' + value.slice(e);
          } else if (fmt === 'list') {
            const lines = sel.split('\n').map(l => (l.startsWith('- ') ? l : '- ' + l)).join('\n');
            out = value.slice(0, s) + lines + value.slice(e);
          } else if (fmt === 'quote') {
            const lines = sel.split('\n').map(l => (l.startsWith('> ') ? l : '> ' + l)).join('\n');
            out = value.slice(0, s) + lines + value.slice(e);
          }
          ta.value = out;
          ta.focus();
          ta.setSelectionRange(s, s + out.length);
        });
      });

      // Toast helper
      function toast(message, type='info') {
        const toasts = qs('#toasts');
        const wrapper = document.createElement('div');
        const colors = {
          info:   { bg:'#111827', text:'#FFFFFF', border:'#1F2937' },
          success:{ bg:'#065F46', text:'#ECFDF5', border:'#047857' },
          warn:   { bg:'#92400E', text:'#FEF3C7', border:'#B45309' }
        };
        const c = colors[type] || colors.info;
        wrapper.className = 'rounded-md border px-3 py-2 shadow-md';
        wrapper.style.background = c.bg;
        wrapper.style.color = c.text;
        wrapper.style.borderColor = c.border;
        wrapper.style.opacity = '0';
        wrapper.style.transform = 'translateY(4px)';
        wrapper.style.transition = 'opacity .15s ease, transform .15s ease';
        wrapper.textContent = message;
        toasts.appendChild(wrapper);
        requestAnimationFrame(() => {
          wrapper.style.opacity = '1';
          wrapper.style.transform = 'translateY(0)';
        });
        setTimeout(() => {
          wrapper.style.opacity = '0';
          wrapper.style.transform = 'translateY(4px)';
          setTimeout(() => wrapper.remove(), 180);
        }, 2400);
      }

      // Initial completion check (in case pile already valid)
      checkCompletion();
    
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
      

<header className="fixed inset-x-0 top-0 z-40 h-16 bg-white/80 backdrop-blur border-b border-[#E5E7EB]">
<div className="h-full flex items-center justify-between px-10">
<div className="min-w-0 pr-4">
<div className="flex items-center gap-3">
<div className="text-[13px] tracking-wider text-[#6B7280] uppercase">Annexe</div>
<div className="w-1 h-4 rounded bg-[#E5E7EB]"></div>
<h1 className="truncate text-[22px] leading-6 tracking-tight" style={{fontFamily: '\'Source Sans 3\', ui-sans-serif, system-ui', fontWeight: '600'}}>Annexe X — Demande de permis d’urbanisme</h1>
</div>
<div className="mt-1 flex items-center gap-3 text-[13px] leading-5 text-[#6B7280]">
<span className="truncate">Sol Paradis 2A, 4190 Ferrières (BE) — REF-2024-000987</span>
<span className="hidden sm:inline text-[#E5E7EB]">•</span>
<span className="hidden sm:inline">Progression 67 %</span>
</div>
</div>
<div className="flex items-center gap-2">

<button className="group inline-flex items-center gap-2 rounded-md border border-[#E5E7EB] bg-white px-3 py-2 text-[13px] leading-5 hover:bg-[#F7F8FA] hover:border-[#D1D5DB] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition" id="toggleValidationMode">
<span aria-hidden="true" className="relative inline-flex h-5 w-9 items-center rounded-full bg-[#E5E7EB] transition">
<span className="inline-block h-4 w-4 translate-x-0 rounded-full bg-white shadow ring-1 ring-[#E5E7EB] transition" id="toggleKnob"></span>
</span>
<span className="font-medium text-[13px]">Mode Validation</span>
</button>

<div className="relative">
<button className="inline-flex items-center gap-2 rounded-md border border-[#E5E7EB] bg-white px-3 py-2 text-[13px] leading-5 hover:bg-[#F7F8FA] hover:border-[#D1D5DB] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition" id="filterBtn">
<i className="w-4 h-4 text-[#6B7280]" data-lucide="filter"></i>
<span className="font-medium text-[13px]">Filtrer</span>
<i className="w-4 h-4 text-[#9CA3AF]" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute right-0 mt-2 w-48 rounded-md bg-white border border-[#E5E7EB] shadow-lg ring-1 ring-black/5 overflow-hidden" id="filterMenu">
<button className="w-full text-left px-3 py-2 text-[13px] hover:bg-[#F7F8FA]" data-filter="Tous">Tous</button>
<button className="w-full text-left px-3 py-2 text-[13px] hover:bg-[#F7F8FA]" data-filter="Bloquants">Bloquants</button>
<button className="w-full text-left px-3 py-2 text-[13px] hover:bg-[#F7F8FA]" data-filter="À vérifier">À vérifier</button>
<button className="w-full text-left px-3 py-2 text-[13px] hover:bg-[#F7F8FA]" data-filter="Validés">Validés</button>
<button className="w-full text-left px-3 py-2 text-[13px] hover:bg-[#F7F8FA]" data-filter="À discuter">À discuter</button>
</div>
</div>

<button className="inline-flex items-center gap-2 rounded-md border border-[#E5E7EB] bg-white px-3 py-2 text-[13px] leading-5 hover:bg-[#F7F8FA] hover:border-[#D1D5DB] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition">
<i className="w-4 h-4 text-[#6B7280]" data-lucide="file-down"></i>
<span className="font-medium">Exporter</span>
</button>
</div>
</div>

<div className="absolute bottom-0 inset-x-0 h-0.5 bg-[#E5E7EB]">
<div className="h-full bg-[#2563EB]" style={{width: '67%'}}></div>
</div>
</header>

<nav className="md:hidden fixed top-16 inset-x-0 z-30 bg-white border-b border-[#E5E7EB]">
<div className="flex overflow-x-auto no-scrollbar px-3 py-2 gap-2">
<button className="shrink-0 px-3 py-2 rounded-md text-[13px] font-medium border border-[#E5E7EB] bg-[#111827] text-white">Cadre 1</button>
<button className="shrink-0 px-3 py-2 rounded-md text-[13px] font-medium border border-[#E5E7EB] bg-white text-[#111827]">Cadre 2</button>
<button className="shrink-0 px-3 py-2 rounded-md text-[13px] font-medium border border-[#E5E7EB] bg-white text-[#111827]">Cadre 3</button>
<button className="shrink-0 px-3 py-2 rounded-md text-[13px] font-medium border border-[#E5E7EB] bg-white text-[#111827]">Cadre 4</button>
<button className="shrink-0 px-3 py-2 rounded-md text-[13px] font-medium border border-[#E5E7EB] bg-white text-[#111827]">Cadre 5</button>
<button className="shrink-0 px-3 py-2 rounded-md text-[13px] font-medium border border-[#E5E7EB] bg-white text-[#111827]">Cadre 6</button>
<button className="shrink-0 px-3 py-2 rounded-md text-[13px] font-medium border border-[#E5E7EB] bg-white text-[#111827]">Cadre 7</button>
<button className="shrink-0 px-3 py-2 rounded-md text-[13px] font-medium border border-[#E5E7EB] bg-white text-[#111827]">Annexes</button>
</div>
</nav>

<div className="pt-16 md:pt-16">
<div className="mx-auto max-w-[1440px] px-10">
<div className="flex gap-6">

<aside className="hidden md:block shrink-0" style={{width: '248px'}}>
<div className="sticky top-20 space-y-2">
<div className="px-2 pb-2 text-[12px] leading-[18px] text-[#6B7280]">Cadres</div>

<button className="w-full group flex items-center justify-between rounded-md border border-[#E5E7EB] bg-white px-3 py-3 hover:bg-[#F7F8FA] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition" data-scroll-to="#cadre-1">
<div className="min-w-0 flex items-center gap-3">
<div className="rounded-md bg-[#F3F4F6] text-[#111827] px-2 py-1 text-[12px] leading-5 font-medium">1</div>
<div className="min-w-0">
<div className="truncate text-[14px] leading-[22px] font-medium">Demandeur</div>
<div className="flex items-center gap-2 text-[12px] leading-[18px] text-[#6B7280]">
<span>1✅</span><span>0⚠️</span><span>0⛔</span><span>0💬</span>
</div>
</div>
</div>
<div className="pl-3 pr-[12px]">
<i className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#6B7280]" data-lucide="chevron-right"></i>
</div>
</button>
<button className="w-full group flex items-center justify-between rounded-md border border-[#E5E7EB] bg-white px-3 py-3 hover:bg-[#F7F8FA] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition" data-scroll-to="#cadre-2">
<div className="min-w-0 flex items-center gap-3">
<div className="rounded-md bg-[#F3F4F6] text-[#111827] px-2 py-1 text-[12px] leading-5 font-medium">2</div>
<div className="min-w-0">
<div className="truncate text-[14px] leading-[22px] font-medium">Localisation &amp; Parcelles</div>
<div className="flex items-center gap-2 text-[12px] leading-[18px] text-[#6B7280]">
<span>0✅</span><span>2⚠️</span><span>0⛔</span><span>1💬</span>
</div>
</div>
</div>
<div className="pl-3 pr-[12px]">
<i className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#6B7280]" data-lucide="chevron-right"></i>
</div>
</button>
<button className="w-full group flex items-center justify-between rounded-md border border-[#E5E7EB] bg-white px-3 py-3 hover:bg-[#F7F8FA] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition" data-scroll-to="#cadre-3">
<div className="min-w-0 flex items-center gap-3">
<div className="rounded-md bg-[#F3F4F6] text-[#111827] px-2 py-1 text-[12px] leading-5 font-medium">3</div>
<div className="min-w-0">
<div className="truncate text-[14px] leading-[22px] font-medium">Programme</div>
<div className="flex items-center gap-2 text-[12px] leading-[18px] text-[#6B7280]">
<span>0✅</span><span>0⚠️</span><span>0⛔</span><span>0💬</span>
</div>
</div>
</div>
<div className="pl-3 pr-[12px]">
<i className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#6B7280]" data-lucide="chevron-right"></i>
</div>
</button>
<button className="w-full group flex items-center justify-between rounded-md border border-[#E5E7EB] bg-white px-3 py-3 hover:bg-[#F7F8FA] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition" data-scroll-to="#cadre-4">
<div className="min-w-0 flex items-center gap-3">
<div className="rounded-md bg-[#F3F4F6] text-[#111827] px-2 py-1 text-[12px] leading-5 font-medium">4</div>
<div className="min-w-0">
<div className="truncate text-[14px] leading-[22px] font-medium">Données techniques</div>
<div className="flex items-center gap-2 text-[12px] leading-[18px] text-[#6B7280]">
<span>0✅</span><span>0⚠️</span><span>0⛔</span><span>0💬</span>
</div>
</div>
</div>
<div className="pl-3 pr-[12px]">
<i className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#6B7280]" data-lucide="chevron-right"></i>
</div>
</button>
<button className="w-full group flex items-center justify-between rounded-md border border-[#E5E7EB] bg-white px-3 py-3 hover:bg-[#F7F8FA] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition" data-scroll-to="#cadre-5">
<div className="min-w-0 flex items-center gap-3">
<div className="rounded-md bg-[#F3F4F6] text-[#111827] px-2 py-1 text-[12px] leading-5 font-medium">5</div>
<div className="min-w-0">
<div className="truncate text-[14px] leading-[22px] font-medium">Règlementation</div>
<div className="flex items-center gap-2 text-[12px] leading-[18px] text-[#6B7280]">
<span>0✅</span><span>1⚠️</span><span>0⛔</span><span>1💬</span>
</div>
</div>
</div>
<div className="pl-3 pr-[12px]">
<i className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#6B7280]" data-lucide="chevron-right"></i>
</div>
</button>
<button className="w-full group flex items-center justify-between rounded-md border border-[#E5E7EB] bg-white px-3 py-3 hover:bg-[#F7F8FA] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition" data-scroll-to="#cadre-6">
<div className="min-w-0 flex items-center gap-3">
<div className="rounded-md bg-[#F3F4F6] text-[#111827] px-2 py-1 text-[12px] leading-5 font-medium">6</div>
<div className="min-w-0">
<div className="truncate text-[14px] leading-[22px] font-medium">Documents</div>
<div className="flex items-center gap-2 text-[12px] leading-[18px] text-[#6B7280]">
<span>0✅</span><span>2⚠️</span><span>0⛔</span><span>0💬</span>
</div>
</div>
</div>
<div className="pl-3 pr-[12px]">
<i className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#6B7280]" data-lucide="chevron-right"></i>
</div>
</button>
<button className="w-full group flex items-center justify-between rounded-md border border-[#E5E7EB] bg-white px-3 py-3 hover:bg-[#F7F8FA] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition" data-scroll-to="#cadre-7">
<div className="min-w-0 flex items-center gap-3">
<div className="rounded-md bg-[#F3F4F6] text-[#111827] px-2 py-1 text-[12px] leading-5 font-medium">7</div>
<div className="min-w-0">
<div className="truncate text-[14px] leading-[22px] font-medium">Annexes</div>
<div className="flex items-center gap-2 text-[12px] leading-[18px] text-[#6B7280]">
<span>0✅</span><span>0⚠️</span><span>0⛔</span><span>0💬</span>
</div>
</div>
</div>
<div className="pl-3 pr-[12px]">
<i className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#6B7280]" data-lucide="chevron-right"></i>
</div>
</button>
</div>
</aside>

<main className="flex-1 min-w-0">
<article className="mx-auto max-w-[760px]">
<div className="rounded-xl bg-white border border-[#E5E7EB]" style={{boxShadow: '0 2px 10px rgba(17,24,39,.06)'}}>

<div className="px-6 sm:px-8 pt-6 pb-2">
<h2 className="text-[20px] leading-7 tracking-tight" style={{fontFamily: '\'Source Sans 3\', ui-sans-serif, system-ui', fontWeight: '600'}}>Dossier de demande</h2>
<p className="mt-1 text-[14px] leading-[22px] text-[#6B7280]">Lecture fluide, validations en un clic. “Moins d’UI, plus de compréhension.”</p>
</div>
<div className="mx-6 sm:mx-8 border-t border-[#E5E7EB]"></div>

<section className="px-6 sm:px-8 py-6" id="cadre-1">
<h3 className="text-lg leading-6 tracking-tight" style={{fontFamily: '\'Source Sans 3\', ui-sans-serif, system-ui', fontWeight: '600'}}>Cadre 1 — Demandeur</h3>
<div className="mt-4 space-y-5">

<div className="group relative">
<div className="flex items-start justify-between gap-6">
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="text-[12px] leading-[18px] text-[#6B7280]">Demandeur</span>
<button className="invisible group-hover:visible text-[12px] leading-[18px] text-[#2563EB] hover:underline focus:visible focus:outline-none" data-open-panel="regles">Voir sources &amp; règles</button>
</div>
<button className="mt-1 text-left text-[14px] leading-[22px] hover:underline decoration-[#E5E7EB] hover:decoration-[#D1D5DB] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded" data-open-panel="regles">
                            DEFOSSE Jean-Nicolas
                          </button>
</div>
<div className="shrink-0">
<button className="badge" data-badge="" state="valid">
<span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 border text-[12px] leading-[18px]" style={{background: '#ECFDF5', color: '#16A34A', borderColor: '#A7F3D0'}}>
<i className="w-[14px] h-[14px]" data-lucide="check"></i>
<span>Validé</span>
</span>
</button>
</div>
</div>
</div>

<div className="group relative">
<div className="flex items-start justify-between gap-6">
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="text-[12px] leading-[18px] text-[#6B7280]">Architecte</span>
<span className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[11px] leading-[16px] text-[#6B7280] bg-[#F3F4F6] border border-[#E5E7EB]">Auto</span>
</div>
<div className="mt-1 flex items-center gap-2 text-[14px] leading-[22px]">
<i aria-hidden="true" className="w-4 h-4 text-[#9CA3AF]" data-lucide="lock"></i>
<span>Julie De Keersmaecker</span>
</div>
<p className="mt-1 text-[12px] leading-[18px] text-[#9CA3AF]">Provenant de registre externe</p>
</div>
<div className="shrink-0">
<button className="badge" data-badge="" state="lock">
<span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 border text-[12px] leading-[18px]" style={{background: '#F3F4F6', color: '#6B7280', borderColor: '#E5E7EB'}}>
<i className="w-[14px] h-[14px]" data-lucide="lock"></i>
<span>Lecture seule</span>
</span>
</button>
</div>
</div>
</div>
</div>
</section>
<div className="mx-6 sm:mx-8 border-t border-[#E5E7EB]"></div>

<section className="px-6 sm:px-8 py-6" id="cadre-2">
<h3 className="text-lg leading-6 tracking-tight" style={{fontFamily: '\'Source Sans 3\', ui-sans-serif, system-ui', fontWeight: '600'}}>Cadre 2 — Localisation &amp; Parcelles</h3>

<div className="mt-4 overflow-hidden rounded-lg border border-[#E5E7EB] bg-white">
<div className="px-4 py-3 border-b border-[#E5E7EB] flex items-center justify-between">
<div className="text-[14px] leading-[22px] font-medium">Parcelles</div>
<div className="text-[12px] leading-[18px] text-[#6B7280]">Source: WalOnMap</div>
</div>
<div className="divide-y divide-[#E5E7EB]">

<div className="px-4 py-3">
<div className="grid grid-cols-1 sm:grid-cols-6 gap-3 sm:gap-4 text-[14px] leading-[22px]">
<div className="sm:col-span-2">
<div className="text-[12px] leading-[18px] text-[#6B7280]">Parcelle</div>
<button className="value-cell text-left hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded" data-open-panel="couches">
                              Ferrières - 3 - A - 0685A002
                            </button>
</div>
<div>
<div className="text-[12px] leading-[18px] text-[#6B7280]">Superficie</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-[#9CA3AF]" data-lucide="lock"></i>
<span>1 245 m²</span>
</div>
<p className="mt-1 text-[12px] leading-[18px] text-[#9CA3AF]">Provenant de WalOnMap</p>
</div>
<div>
<div className="text-[12px] leading-[18px] text-[#6B7280]">Nature</div>
<div>Constructions artificielles hors sol</div>
</div>
<div>
<div className="text-[12px] leading-[18px] text-[#6B7280]">Propriétaire</div>
<div>Le demandeur</div>
</div>
<div className="flex items-start justify-end">
<button className="badge" data-badge="" state="warn">
<span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 border text-[12px] leading-[18px]" style={{background: '#FFFBEB', color: '#F59E0B', borderColor: '#FDE68A'}}>
<i className="w-[14px] h-[14px]" data-lucide="alert-triangle"></i>
<span>À vérifier</span>
</span>
</button>
</div>
</div>

<div className="mt-3 rounded-md border border-[#FEF3C7] bg-[#FFFBEB] px-3 py-2">
<div className="flex items-start gap-2">
<i className="w-4 h-4 text-[#F59E0B] mt-0.5" data-lucide="info"></i>
<div className="text-[13px] leading-5 text-[#92400E]">
                              PEB potentiellement requis — vérifiez la surface (&gt; 25 % ?).
                              <button className="ml-2 text-[#2563EB] hover:underline" data-scroll-to="#cadre-6">Voir pièces attendues</button>
</div>
</div>
</div>
</div>

<div className="hidden px-4 py-10">
<div className="mx-auto max-w-md text-center">
<div className="mx-auto h-10 w-10 rounded-full bg-[#F3F4F6] flex items-center justify-center">
<i className="w-5 h-5 text-[#9CA3AF]" data-lucide="map"></i>
</div>
<div className="mt-3 text-[14px] leading-[22px] font-medium">Aucune parcelle sélectionnée</div>
<div className="mt-1 text-[13px] leading-5 text-[#6B7280]">Rechercher une adresse pour commencer.</div>
</div>
</div>
</div>
</div>

<div className="mt-4">
<div className="text-[12px] leading-[18px] text-[#DC2626]">
                      Superficie incohérente avec cadastre (écart &gt; 5 %). Merci de confirmer ou corriger.
                    </div>
</div>
</section>
<div className="mx-6 sm:mx-8 border-t border-[#E5E7EB]"></div>

<section className="px-6 sm:px-8 py-6" id="cadre-5">
<div className="flex items-start justify-between">
<h3 className="text-lg leading-6 tracking-tight" style={{fontFamily: '\'Source Sans 3\', ui-sans-serif, system-ui', fontWeight: '600'}}>Cadre 5 — Règlementation</h3>
<div className="shrink-0">

<button className="inline-flex items-center gap-2 rounded-md border border-[#E5E7EB] bg-white px-3 py-2 text-[13px] leading-5 hover:bg-[#F7F8FA] hover:border-[#D1D5DB] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition" data-open-panel="regles">
<i className="w-4 h-4 text-[#6B7280]" data-lucide="book-open"></i>
<span>Voir sources &amp; règles</span>
</button>
</div>
</div>
<div className="mt-4 space-y-5">

<div className="group relative">
<div className="flex items-start justify-between gap-6">
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="text-[12px] leading-[18px] text-[#6B7280]">Plan de secteur</span>
<span className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[11px] leading-[16px] text-[#6B7280] bg-[#F3F4F6] border border-[#E5E7EB]">CoDT</span>
</div>
<button className="mt-1 text-left text-[14px] leading-[22px] hover:underline decoration-[#E5E7EB] hover:decoration-[#D1D5DB] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded" data-open-panel="regles">
                            Plan de secteur Agricole
                          </button>
</div>
<div className="shrink-0">
<button className="badge" data-badge="" state="warn">
<span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 border text-[12px] leading-[18px]" style={{background: '#FFFBEB', color: '#F59E0B', borderColor: '#FDE68A'}}>
<i className="w-[14px] h-[14px]" data-lucide="alert-triangle"></i>
<span>À vérifier</span>
</span>
</button>
</div>
</div>

<div className="mt-3 rounded-md border border-[#DBEAFE] bg-[#EFF6FF] px-3 py-2">
<div className="flex items-start gap-2">
<i className="w-4 h-4 text-[#2563EB] mt-0.5" data-lucide="info"></i>
<div className="text-[13px] leading-5 text-[#1D4ED8]">
                            Vérifier hypothèse de dérogation — art. D.IV.6 à D.IV.11.
                            <button className="ml-2 text-[#2563EB] hover:underline" data-scroll-to="#cadre-6">Voir pièces attendues</button>
</div>
</div>
</div>
</div>

<div className="group relative">
<div className="flex items-start justify-between gap-6">
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="text-[12px] leading-[18px] text-[#6B7280]">Justification</span>
<button className="invisible group-hover:visible text-[12px] leading-[18px] text-[#2563EB] hover:underline focus:visible focus:outline-none" data-open-panel="regles">Obtenir des recommandations</button>
</div>
<div className="mt-2 text-[14px] leading-[22px] text-[#111827]">
<p className="mb-2">Le projet vise à réhabiliter une dépendance existante sans emprise nouvelle sur le sol. Les mesures de mitigation paysagère sont prévues côté voirie.</p>
<div className="inline-flex items-center gap-2 rounded border border-[#E5E7EB] px-2 py-1 text-[12px] leading-[18px] text-[#6B7280]">
<i className="w-3.5 h-3.5" data-lucide="quote"></i>
<span>“chips d’article”</span>
</div>
</div>
</div>
<div className="shrink-0">
<button className="badge" data-badge="" state="discuss">
<span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 border text-[12px] leading-[18px]" style={{background: '#EEF2FF', color: '#2563EB', borderColor: '#C7D2FE'}}>
<i className="w-[14px] h-[14px]" data-lucide="message-square"></i>
<span>À discuter</span>
</span>
</button>
</div>
</div>
</div>
</div>
</section>
<div className="mx-6 sm:mx-8 border-t border-[#E5E7EB]"></div>

<section className="px-6 sm:px-8 py-6" id="cadre-6">
<h3 className="text-lg leading-6 tracking-tight" style={{fontFamily: '\'Source Sans 3\', ui-sans-serif, system-ui', fontWeight: '600'}}>Cadre 6 — Documents</h3>
<div className="mt-4 rounded-lg border border-[#E5E7EB] overflow-hidden">
<div className="px-4 py-3 bg-white border-b border-[#E5E7EB] flex items-center justify-between">
<div className="text-[14px] leading-[22px] font-medium">Éléments obligatoires restants (2)</div>
<div className="text-[12px] leading-[18px] text-[#6B7280]">À fournir / Fourni</div>
</div>
<div className="divide-y divide-[#E5E7EB] bg-white">

<div className="px-4 py-3">
<div className="flex items-start justify-between gap-6">
<div className="min-w-0">
<div className="text-[14px] leading-[22px]">Formulaire PEB</div>
<div className="mt-1 text-[12px] leading-[18px] text-[#6B7280]">Seuil 25 % à confirmer</div>
</div>
<div className="shrink-0 flex items-center gap-3">
<span className="inline-flex items-center gap-1 rounded px-2 py-1 text-[12px] leading-[18px] text-[#92400E] bg-[#FFFBEB] border border-[#FDE68A]">À fournir</span>
<button className="badge" data-badge="" state="warn">
<span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 border text-[12px] leading-[18px]" style={{background: '#FFFBEB', color: '#F59E0B', borderColor: '#FDE68A'}}>
<i className="w-[14px] h-[14px]" data-lucide="alert-triangle"></i>
<span>À vérifier</span>
</span>
</button>
</div>
</div>
</div>

<div className="px-4 py-3">
<div className="flex items-start justify-between gap-6">
<div className="min-w-0">
<div className="text-[14px] leading-[22px]">Formulaire « Décret SOLS »</div>
<div className="mt-1 text-[12px] leading-[18px] text-[#6B7280]">Obligatoire si historique industriel</div>
</div>
<div className="shrink-0 flex items-center gap-3">
<span className="inline-flex items-center gap-1 rounded px-2 py-1 text-[12px] leading-[18px] text-[#92400E] bg-[#FFFBEB] border border-[#FDE68A]">À fournir</span>
<button className="badge" data-badge="" state="warn">
<span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 border text-[12px] leading-[18px]" style={{background: '#FFFBEB', color: '#F59E0B', borderColor: '#FDE68A'}}>
<i className="w-[14px] h-[14px]" data-lucide="alert-triangle"></i>
<span>À vérifier</span>
</span>
</button>
</div>
</div>
</div>

<div className="px-4 py-3">
<div className="flex items-start justify-between gap-6">
<div className="min-w-0">
<div className="text-[14px] leading-[22px]">Plan de situation</div>
<div className="mt-1 text-[12px] leading-[18px] text-[#6B7280]">Fourni</div>
</div>
<div className="shrink-0 flex items-center gap-3">
<span className="inline-flex items-center gap-1 rounded px-2 py-1 text-[12px] leading-[18px] text-[#065F46] bg-[#ECFDF5] border border-[#A7F3D0]">Fourni</span>
<button className="badge" data-badge="" state="valid">
<span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 border text-[12px] leading-[18px]" style={{background: '#ECFDF5', color: '#16A34A', borderColor: '#A7F3D0'}}>
<i className="w-[14px] h-[14px]" data-lucide="check"></i>
<span>Validé</span>
</span>
</button>
</div>
</div>
</div>
</div>
</div>
</section>
<div className="mx-6 sm:mx-8 border-t border-[#E5E7EB]"></div>

<section className="px-6 sm:px-8 py-6" id="cadre-7">
<h3 className="text-lg leading-6 tracking-tight" style={{fontFamily: '\'Source Sans 3\', ui-sans-serif, system-ui', fontWeight: '600'}}>Cadre 7 — Annexes</h3>
<div className="mt-4 text-[14px] leading-[22px] text-[#6B7280]">Aucune annexe pour l’instant.</div>
</section>
</div>
</article>
</main>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-50 bg-black/20 md:bg-transparent md:pointer-events-none" id="viewerOverlay"></div>
<aside className="fixed top-16 right-0 h-[calc(100vh-64px)] w-[360px] bg-white border-l border-[#E5E7EB] translate-x-full md:translate-x-full md:pointer-events-auto transition-transform duration-200 ease-out shadow-xl md:shadow-none" id="viewer">
<div className="h-full flex flex-col">
<div className="flex items-center justify-between px-4 py-3 border-b border-[#E5E7EB]">
<div className="flex items-center gap-2">
<div className="rounded bg-[#F3F4F6] px-2 py-0.5 text-[12px] leading-[18px] text-[#6B7280]">Visualisateur</div>
</div>
<button className="rounded-md p-1.5 hover:bg-[#F7F8FA] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" id="closeViewer">
<i className="w-4 h-4 text-[#6B7280]" data-lucide="x"></i>
</button>
</div>

<div className="px-4 pt-3">
<div className="inline-flex items-center gap-1 rounded-lg border border-[#E5E7EB] p-1 bg-white">
<button className="viewer-tab px-3 py-1.5 rounded-md text-[13px] leading-5 font-medium bg-[#111827] text-white" data-tab="regle">Règle</button>
<button className="viewer-tab px-3 py-1.5 rounded-md text-[13px] leading-5 text-[#111827]" data-tab="couches">Couches</button>
<button className="viewer-tab px-3 py-1.5 rounded-md text-[13px] leading-5 text-[#111827]" data-tab="historique">Historique</button>
</div>
</div>

<div className="hidden mx-4 mt-3 rounded-md border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2" id="degradeBanner">
<div className="flex items-start gap-2">
<i className="w-4 h-4 text-[#6B7280] mt-0.5" data-lucide="wifi-off"></i>
<p className="text-[13px] leading-5 text-[#6B7280]">Service indisponible — affichage du cache. Saisie manuelle autorisée (⚠️ à valider).</p>
</div>
</div>

<div className="flex-1 overflow-auto px-4 py-4 space-y-4">

<div id="tab-regle">
<h4 className="text-[15px] leading-6" style={{fontFamily: '\'Source Sans 3\', ui-sans-serif', fontWeight: '600'}}>Extrait de règle (CoDT)</h4>
<p className="mt-1 text-[13px] leading-5 text-[#6B7280]">Agricole — conditions de dérogation applicables aux constructions existantes.</p>
<ul className="mt-3 space-y-2 text-[13px] leading-5">
<li className="flex gap-2"><span className="text-[#6B7280]">•</span><span>Maintien des gabarits principaux</span></li>
<li className="flex gap-2"><span className="text-[#6B7280]">•</span><span>Insertion paysagère renforcée côté voirie</span></li>
<li className="flex gap-2"><span className="text-[#6B7280]">•</span><span>Respect des matériaux locaux</span></li>
</ul>
<div className="mt-4 rounded-md border border-[#E5E7EB] bg-[#FAFAFA] px-3 py-2 text-[12px] leading-[18px] text-[#6B7280]">
              Réf. D.IV.6 à D.IV.11 — Guide communal Ferrières 2021.
            </div>
<div className="mt-4">
<button className="inline-flex items-center gap-2 rounded-md border border-[#E5E7EB] bg-white px-3 py-2 text-[13px] leading-5 hover:bg-[#F7F8FA] hover:border-[#D1D5DB] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition" id="ctaRecommandations">
<i className="w-4 h-4 text-[#6B7280]" data-lucide="sparkles"></i>
<span>Obtenir des recommandations</span>
</button>
<div className="hidden mt-3 space-y-2" id="recos">
<button className="insert-reco w-full text-left rounded-md border border-[#E5E7EB] bg-white px-3 py-2 text-[13px] leading-5 hover:bg-[#F7F8FA]">Ajouter: “Le projet s’inscrit dans le gabarit et renforce l’intégration paysagère côté voirie.”</button>
<button className="insert-reco w-full text-left rounded-md border border-[#E5E7EB] bg-white px-3 py-2 text-[13px] leading-5 hover:bg-[#F7F8FA]">Ajouter: “Les matériaux prévus sont compatibles avec le bâti agricole local.”</button>
</div>
</div>
</div>

<div className="hidden" id="tab-couches">
<h4 className="text-[15px] leading-6" style={{fontFamily: '\'Source Sans 3\', ui-sans-serif', fontWeight: '600'}}>Couches territoriales</h4>
<div className="mt-2 grid grid-cols-1 gap-2">
<div className="rounded-md border border-[#E5E7EB] p-3">
<div className="text-[12px] leading-[18px] text-[#6B7280]">Zonage</div>
<div className="text-[14px] leading-[22px]">Agricole</div>
</div>
<div className="rounded-md border border-[#E5E7EB] p-3">
<div className="text-[12px] leading-[18px] text-[#6B7280]">Risques</div>
<div className="text-[14px] leading-[22px]">Radon: moyen · Inondation: faible</div>
</div>
<div className="rounded-md border border-[#E5E7EB] p-3">
<div className="text-[12px] leading-[18px] text-[#6B7280]">Patrimoine</div>
<div className="text-[14px] leading-[22px]">En dehors des périmètres</div>
</div>
</div>
</div>

<div className="hidden" id="tab-historique">
<h4 className="text-[15px] leading-6" style={{fontFamily: '\'Source Sans 3\', ui-sans-serif', fontWeight: '600'}}>Historique des validations</h4>
<ul className="mt-2 space-y-2 text-[13px] leading-5">
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-[#16A34A] mt-0.5" data-lucide="check"></i>
<span><strong className="font-medium">Demandeur</strong> — validé par J. Martin, 12/06/2024 09:41</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-[#2563EB] mt-0.5" data-lucide="message-square"></i>
<span><strong className="font-medium">Justification</strong> — commentaire de A. Dubois, 13/06/2024 14:12</span>
</li>
</ul>
</div>
</div>
</div>
</aside>

<div className="hidden fixed z-50 w-56 rounded-md border border-[#E5E7EB] bg-white shadow-lg ring-1 ring-black/5 overflow-hidden" id="badgeMenu">
<button className="menu-action w-full flex items-center gap-2 px-3 py-2 text-[13px] hover:bg-[#F7F8FA]" data-action="confirm">
<i className="w-4 h-4 text-[#16A34A]" data-lucide="check"></i>
<span>Confirmer</span>
<span className="ml-auto text-[12px] text-[#9CA3AF]">C</span>
</button>
<button className="menu-action w-full flex items-center gap-2 px-3 py-2 text-[13px] hover:bg-[#F7F8FA]" data-action="edit">
<i className="w-4 h-4 text-[#F59E0B]" data-lucide="edit-3"></i>
<span>Corriger</span>
<span className="ml-auto text-[12px] text-[#9CA3AF]">E</span>
</button>
<button className="menu-action w-full flex items-center gap-2 px-3 py-2 text-[13px] hover:bg-[#F7F8FA]" data-action="discuss">
<i className="w-4 h-4 text-[#2563EB]" data-lucide="message-square"></i>
<span>À discuter</span>
</button>
<button className="menu-action w-full flex items-center gap-2 px-3 py-2 text-[13px] hover:bg-[#F7F8FA]" data-action="attach">
<i className="w-4 h-4 text-[#6B7280]" data-lucide="paperclip"></i>
<span>Joindre fichier</span>
<span className="ml-auto text-[12px] text-[#9CA3AF]">J</span>
</button>
</div>

<div className="hidden fixed inset-0 z-[60]" id="validationOverlay">
<div className="absolute inset-0 bg-black/10"></div>
<div className="relative h-full w-full flex items-center justify-center p-4">
<div className="w-full max-w-[720px] rounded-xl border border-[#E5E7EB] bg-white" style={{boxShadow: '0 2px 10px rgba(17,24,39,.06)'}}>
<div className="flex items-center justify-between px-5 py-3 border-b border-[#E5E7EB]">
<div className="text-[14px] leading-[22px] font-medium">Validation en cours</div>
<div className="flex items-center gap-2 text-[12px] leading-[18px] text-[#6B7280]">
<span>←/→ pour naviguer</span>
<button className="rounded-md p-1.5 hover:bg-[#F7F8FA] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" id="closeValidation">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
</div>
<div className="p-5">
<div className="flex items-start justify-between gap-6">
<div className="min-w-0">
<div className="text-[12px] leading-[18px] text-[#6B7280]" id="valLabel">Label</div>
<div className="mt-1 text-[14px] leading-[22px]" id="valValue">Valeur</div>
<div className="mt-3 hidden rounded-md border border-[#FEF3C7] bg-[#FFFBEB] px-3 py-2 text-[13px] leading-5 text-[#92400E]" id="valNote">Note</div>
</div>
<div className="shrink-0">
<span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 border text-[12px] leading-[18px]" id="valBadge"></span>
</div>
</div>

<div className="hidden mt-4" id="valEditor">
<div className="rounded-md border border-[#E5E7EB] bg-white p-2">
<div className="flex items-center gap-2 border-b border-[#E5E7EB] pb-2">
<button className="rounded px-2 py-1 text-[12px] hover:bg-[#F7F8FA]" data-format="bold"><i className="w-4 h-4" data-lucide="bold"></i></button>
<button className="rounded px-2 py-1 text-[12px] hover:bg-[#F7F8FA]" data-format="list"><i className="w-4 h-4" data-lucide="list"></i></button>
<button className="rounded px-2 py-1 text-[12px] hover:bg-[#F7F8FA]" data-format="quote"><i className="w-4 h-4" data-lucide="quote"></i></button>
</div>
<textarea className="mt-2 w-full h-24 outline-none text-[14px] leading-[22px]" id="editorArea" placeholder="Éditer…"></textarea>
</div>
</div>

<div className="mt-5 flex items-center justify-between">
<div className="text-[13px] leading-5 text-[#6B7280]" id="valCounter">1 / 2</div>
<div className="flex items-center gap-2">
<button className="rounded-md border border-[#E5E7EB] bg-white px-3 py-2 text-[13px] leading-5 hover:bg-[#F7F8FA]" id="valPrev">Précédent</button>
<button className="rounded-md border border-[#E5E7EB] bg-white px-3 py-2 text-[13px] leading-5 hover:bg-[#F7F8FA]" id="valNext">Suivant</button>
<button className="rounded-md border border-[#A7F3D0] bg-[#ECFDF5] text-[#065F46] px-3 py-2 text-[13px] leading-5 hover:bg-[#D1FAE5]" id="valConfirm">Confirmer</button>
<button className="rounded-md border border-[#FDE68A] bg-[#FFFBEB] text-[#92400E] px-3 py-2 text-[13px] leading-5 hover:bg-[#FEF3C7]" id="valEdit">Corriger</button>
<button className="rounded-md border border-[#C7D2FE] bg-[#EEF2FF] text-[#1D4ED8] px-3 py-2 text-[13px] leading-5 hover:bg-[#E0E7FF]" id="valDiscuss">À discuter</button>
</div>
</div>
<div className="mt-4 flex items-center justify-end">
<button className="hidden rounded-md border border-[#E5E7EB] bg-white px-3 py-2 text-[13px] leading-5 hover:bg-[#F7F8FA]" id="valDone">Terminer — Complet et vérifié</button>
</div>
</div>
</div>
</div>
</div>

<div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[70] space-y-2" id="toasts"></div>



    </>
  );
}
