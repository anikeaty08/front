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
      
    // Pre-fill architect data and add UI functionality
    document.addEventListener('DOMContentLoaded', function() {
      // Pre-fill architect fields
      const fillArchitectData = (data) => {
        document.getElementById('arch-nom').value = data.nom || '';
        document.getElementById('arch-prenom').value = data.prenom || '';
        document.getElementById('arch-denom').value = data.denom || '';
        document.getElementById('arch-forme').value = data.forme || '';
        document.getElementById('arch-bce').value = data.bce || '';
        document.getElementById('arch-attest').value = data.attest || '';
        document.getElementById('arch-rue').value = data.rue || '';
        document.getElementById('arch-num').value = data.num || '';
        document.getElementById('arch-cp').value = data.cp || '';
        document.getElementById('arch-commune').value = data.commune || '';
        document.getElementById('arch-pays').value = data.pays || '';
        document.getElementById('arch-tel').value = data.tel || '';
        document.getElementById('arch-mail').value = data.mail || '';
      };

      // Default architect data
      const defaultArchitect = {
        nom: 'Dupont',
        prenom: 'Marie',
        denom: 'ArchiDesign SRL',
        forme: 'SRL',
        bce: '0765.321.987',
        attest: '2025/BE-AR/4587',
        rue: 'Rue des Lilas',
        num: '14 / bte 2',
        cp: '4000',
        commune: 'Liège',
        pays: 'Belgique',
        tel: '+32 4 223 45 67',
        mail: 'marie.dupont@archidesign.be'
      };

      // Available architects
      const architects = [
        defaultArchitect,
        {
          nom: 'Martin',
          prenom: 'Paul',
          denom: 'ArchiDesign SRL',
          forme: 'SRL',
          bce: '0765.321.987',
          attest: '2025/BE-AR/4588',
          rue: 'Rue des Lilas',
          num: '14 / bte 2',
          cp: '4000',
          commune: 'Liège',
          pays: 'Belgique',
          tel: '+32 4 223 45 68',
          mail: 'paul.martin@archidesign.be'
        },
        {
          nom: 'Bernard',
          prenom: 'Sophie',
          denom: 'ArchiDesign SRL',
          forme: 'SRL',
          bce: '0765.321.987',
          attest: '2025/BE-AR/4589',
          rue: 'Rue des Lilas',
          num: '14 / bte 2',
          cp: '4000',
          commune: 'Liège',
          pays: 'Belgique',
          tel: '+32 4 223 45 69',
          mail: 'sophie.bernard@archidesign.be'
        }
      ];

      // Fill with default data
      fillArchitectData(defaultArchitect);

      // Make "Type de demandeur" bold
      const demandeurLabel = document.querySelector('div[data-toggle-group="demandeur-type"]')?.previousElementSibling;
      if (demandeurLabel && demandeurLabel.textContent === 'Type de demandeur') {
        demandeurLabel.style.fontWeight = '600';
      }

      // Make "Architecte" bold and add dropdown + edit button
      const architecteSection = document.querySelector('[data-field-id="c1-architecte"]');
      if (architecteSection) {
        const architecteLabel = architecteSection.querySelector('.text-[13px].text-neutral-500.mb-2');
        if (architecteLabel && architecteLabel.textContent === 'Architecte') {
          architecteLabel.style.fontWeight = '600';
          
          // Create container for dropdown and edit button
          const controlsContainer = document.createElement('div');
          controlsContainer.className = 'flex items-center gap-2 mb-3';
          
          // Create dropdown
          const dropdown = document.createElement('select');
          dropdown.className = 'rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-sm';
          dropdown.innerHTML = architects.map((arch, i) => 
            `<option value="${i}">${arch.prenom} ${arch.nom}</option>`
          ).join('');
          
          // Create edit button
          const editButton = document.createElement('button');
          editButton.type = 'button';
          editButton.className = 'inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50';
          editButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-edit"><path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1"></path><path d="m20.385 6.585-2.97-2.97a2 2 0 0 0-2.83 0l-6.54 6.54a2 2 0 0 0-.58 1.41L7 15l3.41-.46a2 2 0 0 0 1.41-.58l6.54-6.54a2 2 0 0 0 0-2.83z"></path></svg>
            Éditer
          `;
          
          // Event handlers
          dropdown.addEventListener('change', function() {
            const selectedArchitect = architects[parseInt(this.value)];
            fillArchitectData(selectedArchitect);
          });
          
          editButton.addEventListener('click', function() {
            alert('Fonctionnalité d\'édition des coordonnées - Interface à développer');
          });
          
          controlsContainer.appendChild(dropdown);
          controlsContainer.appendChild(editButton);
          
          // Insert after the label
          architecteLabel.parentNode.insertBefore(controlsContainer, architecteLabel.nextSibling);
        }
      }
    });
  


    function fillArchitectData(index) {
      const architects = [
        {
          nom: 'Dupont', prenom: 'Marie', denom: 'ArchiDesign SRL', forme: 'SRL', 
          bce: '0765.321.987', attest: '2025/BE-AR/4587', rue: 'Rue des Lilas', 
          num: '14 / bte 2', cp: '4000', commune: 'Liège', pays: 'Belgique', 
          tel: '+32 4 223 45 67', mail: 'marie.dupont@archidesign.be'
        },
        {
          nom: 'Martin', prenom: 'Paul', denom: 'ArchiDesign SRL', forme: 'SRL', 
          bce: '0765.321.987', attest: '2025/BE-AR/4588', rue: 'Rue des Lilas', 
          num: '14 / bte 2', cp: '4000', commune: 'Liège', pays: 'Belgique', 
          tel: '+32 4 223 45 68', mail: 'paul.martin@archidesign.be'
        },
        {
          nom: 'Bernard', prenom: 'Sophie', denom: 'ArchiDesign SRL', forme: 'SRL', 
          bce: '0765.321.987', attest: '2025/BE-AR/4589', rue: 'Rue des Lilas', 
          num: '14 / bte 2', cp: '4000', commune: 'Liège', pays: 'Belgique', 
          tel: '+32 4 223 45 69', mail: 'sophie.bernard@archidesign.be'
        }
      ];
      
      const arch = architects[index];
      document.getElementById('arch-nom').value = arch.nom;
      document.getElementById('arch-prenom').value = arch.prenom;
      document.getElementById('arch-denom').value = arch.denom;
      document.getElementById('arch-forme').value = arch.forme;
      document.getElementById('arch-bce').value = arch.bce;
      document.getElementById('arch-attest').value = arch.attest;
      document.getElementById('arch-rue').value = arch.rue;
      document.getElementById('arch-num').value = arch.num;
      document.getElementById('arch-cp').value = arch.cp;
      document.getElementById('arch-commune').value = arch.commune;
      document.getElementById('arch-pays').value = arch.pays;
      document.getElementById('arch-tel').value = arch.tel;
      document.getElementById('arch-mail').value = arch.mail;
    }
  


    // Patch the malformed "Rue et numéro" input and wire address to header
    document.addEventListener('DOMContentLoaded', () => {
      const locRue = document.getElementById('loc-rue');
      if (locRue) {
        locRue.className = 'mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white';
        if (!locRue.placeholder) locRue.placeholder = 'Nom de la rue et numéro';
      }
      const updateHeaderAddress = () => {
        const rue = document.getElementById('loc-rue')?.value?.trim();
        const cp = document.getElementById('loc-cp')?.value?.trim();
        const com = document.getElementById('loc-commune')?.value?.trim();
        const header = document.getElementById('headerAddress');
        if (header) header.textContent = [rue, [cp, com].filter(Boolean).join(' ')].filter(Boolean).join(', ') || '—';
      };
      ['loc-rue','loc-cp','loc-commune'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', updateHeaderAddress);
      });
      updateHeaderAddress();

      // Parcelle: ajout dynamique
      document.getElementById('btnAddParcel')?.addEventListener('click', () => {
        const tpl = document.createElement('div');
        tpl.className = 'grid grid-cols-1 sm:grid-cols-5 gap-2';
        tpl.innerHTML = `
          <div><label class="text-[12px] text-neutral-500">Division</label><input class="mt-1 w-full rounded-md border p-2 text-sm border-neutral-200 bg-white"></div>
          <div><label class="text-[12px] text-neutral-500">Section</label><input class="mt-1 w-full rounded-md border p-2 text-sm border-neutral-200 bg-white"></div>
          <div><label class="text-[12px] text-neutral-500">Numéro</label><input class="mt-1 w-full rounded-md border p-2 text-sm border-neutral-200 bg-white"></div>
          <div><label class="text-[12px] text-neutral-500">Sous-numéro</label><input class="mt-1 w-full rounded-md border p-2 text-sm border-neutral-200 bg-white"></div>
          <div class="flex items-end gap-2">
            <div class="flex-1">
              <label class="text-[12px] text-neutral-500">Surface (m²)</label>
              <input class="mt-1 w-full rounded-md border p-2 text-sm border-neutral-200 bg-white">
            </div>
            <button type="button" class="mb-0.5 inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 p-2 text-neutral-600 remove-parcel" title="Supprimer">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
            </button>
          </div>
        `;
        document.getElementById('parcelList')?.appendChild(tpl);
      });

      document.getElementById('parcelList')?.addEventListener('click', (e) => {
        const btn = e.target.closest('.remove-parcel');
        if (btn) {
          const row = btn.closest('.grid');
          row?.remove();
        }
      });
    });
  


    document.addEventListener('DOMContentLoaded', function() {
      const checkboxes = document.querySelectorAll('[id^="particularite-"]');
      
      checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
          const detailsId = this.id.replace('particularite-', '') + '-details';
          const detailsDiv = document.getElementById(detailsId);
          
          if (this.checked) {
            detailsDiv.classList.remove('hidden');
          } else {
            detailsDiv.classList.add('hidden');
          }
        });
      });
    });
  


                    document.addEventListener('DOMContentLoaded', () => {
                      document.getElementById('btnAddDerog')?.addEventListener('click', () => {
                        const base = document.querySelector('#derogations > .rounded-md');
                        if (!base) return;
                        const clone = base.cloneNode(true);
                        // Clear inputs
                        clone.querySelectorAll('input, textarea').forEach(i => i.value = '');
                        document.getElementById('derogations')?.appendChild(clone);
                      });
                    });
                  


                    document.addEventListener('DOMContentLoaded', () => {
                      const inputs = Array.from(document.querySelectorAll('#cadre-6 input[type="file"]'));
                      const bar = document.getElementById('docs-progress');
                      const lbl = document.getElementById('docs-progress-label');
                      const calc = () => {
                        const filled = inputs.filter(i => i.files && i.files.length > 0).length;
                        const pct = Math.round((filled / inputs.length) * 100);
                        if (bar) bar.style.width = pct + '%';
                        if (lbl) lbl.textContent = pct + '%';
                      };
                      inputs.forEach(i => i.addEventListener('change', calc));
                    });
                  


                    // Simple signature pad
                    document.addEventListener('DOMContentLoaded', () => {
                      function initPad(id) {
                        const canvas = document.getElementById(id);
                        if (!canvas) return;
                        const ctx = canvas.getContext('2d');
                        let drawing = false, last = null;

                        const getPos = (e) => {
                          const r = canvas.getBoundingClientRect();
                          const x = (e.touches ? e.touches[0].clientX : e.clientX) - r.left;
                          const y = (e.touches ? e.touches[0].clientY : e.clientY) - r.top;
                          return {x, y};
                        };

                        const start = (e) => { drawing = true; last = getPos(e); e.preventDefault(); };
                        const move = (e) => {
                          if (!drawing) return;
                          const p = getPos(e);
                          ctx.lineWidth = 2;
                          ctx.lineCap = 'round';
                          ctx.strokeStyle = '#111827';
                          ctx.beginPath();
                          ctx.moveTo(last.x, last.y);
                          ctx.lineTo(p.x, p.y);
                          ctx.stroke();
                          last = p;
                          e.preventDefault();
                        };
                        const end = () => { drawing = false; };

                        canvas.addEventListener('mousedown', start);
                        canvas.addEventListener('mousemove', move);
                        window.addEventListener('mouseup', end);
                        canvas.addEventListener('touchstart', start, {passive:false});
                        canvas.addEventListener('touchmove', move, {passive:false});
                        canvas.addEventListener('touchend', end);

                        document.querySelector(`[data-clear="${id}"]`)?.addEventListener('click', () => {
                          ctx.clearRect(0,0,canvas.width, canvas.height);
                        });
                        document.querySelector(`[data-save="${id}"]`)?.addEventListener('click', () => {
                          const data = canvas.toDataURL('image/png');
                          console.log('Signature', id, data.slice(0,32) + '...');
                          alert('Signature sauvegardée.');
                        });

                        // Scale canvas for crisp lines
                        const scale = window.devicePixelRatio || 1;
                        const resize = () => {
                          const rect = canvas.getBoundingClientRect();
                          canvas.width = rect.width * scale;
                          canvas.height = rect.height * scale;
                          ctx.scale(scale, scale);
                          ctx.clearRect(0,0,canvas.width, canvas.height);
                        };
                        resize(); window.addEventListener('resize', resize);
                      }
                      initPad('sign-demandeur');
                      initPad('sign-archi');

                      document.getElementById('btnGeneratePdf')?.addEventListener('click', () => {
                        window.print();
                      });
                    });
                  


                    document.addEventListener('DOMContentLoaded', () => {
                      const ids = ['ga-parcelle','ga-emprise','ga-brute','ga-niveaux'];
                      const el = Object.fromEntries(ids.map(id => [id, document.getElementById(id)]));
                      const out = {
                        tos: document.getElementById('ga-tos'),
                        dens: document.getElementById('ga-densite'),
                        gab: document.getElementById('ga-gabarit')
                      };
                      const fmt = (v) => isFinite(v) && v > 0 ? (Math.round(v * 100) / 100).toString() : '—';
                      const recalc = () => {
                        const parc = parseFloat(el['ga-parcelle'].value || '0');
                        const empr = parseFloat(el['ga-emprise'].value || '0');
                        const brut = parseFloat(el['ga-brute'].value || '0');
                        const niv = parseFloat(el['ga-niveaux'].value || '0');

                        const tos = parc > 0 ? (empr / parc) * 100 : NaN;
                        const dens = parc > 0 ? (brut / parc) : NaN;
                        const gab = niv;

                        out.tos.textContent = fmt(tos) === '—' ? '—' : fmt(tos) + ' %';
                        out.dens.textContent = fmt(dens);
                        out.gab.textContent = fmt(gab);
                      };
                      ids.forEach(id => el[id]?.addEventListener('input', recalc));
                      recalc();
                    });
                  


      // Simple helpers: validation, toggle groups, global progress, actions
      document.addEventListener('DOMContentLoaded', () => {
        // Lucide icons
        try { lucide.createIcons?.(); } catch(e){}

        // Toggle Personne physique/morale
        const group = document.querySelector('[data-toggle-group="demandeur-type"]');
        if (group) {
          group.addEventListener('click', (e) => {
            const btn = e.target.closest('.seg-btn');
            if (!btn) return;
            const value = btn.getAttribute('data-value');
            group.querySelectorAll('.seg-btn').forEach(b => {
              const on = b === btn;
              b.dataset.state = on ? 'on' : 'off';
              b.classList.toggle('bg-[#649DAD]', on);
              b.classList.toggle('text-white', on);
              b.classList.toggle('text-neutral-700', !on);
            });
            document.querySelectorAll('[data-when^="demandeur-type:"]').forEach(panel => {
              const match = panel.getAttribute('data-when') === `demandeur-type:${value}`;
              panel.hidden = !match;
              panel.classList.toggle('hidden', !match);
            });
          });
        }

        // Basic validators
        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const telRe = /^(\+?\d[\d\s]{6,}|0\d[\d\s]{6,})$/;
        document.querySelectorAll('[data-validate="email"]').forEach(i => {
          i.addEventListener('input', () => {
            const ok = !i.value || emailRe.test(i.value);
            i.classList.toggle('border-rose-300', !ok);
            const help = document.getElementById(i.id + '-help');
            if (help) help.classList.toggle('hidden', ok);
          });
        });
        document.querySelectorAll('[data-validate="tel"]').forEach(i => {
          i.addEventListener('input', () => {
            const ok = !i.value || telRe.test(i.value);
            i.classList.toggle('border-rose-300', !ok);
            const help = document.getElementById(i.id + '-help');
            if (help) help.classList.toggle('hidden', ok);
          });
        });

        // Mode validation
        const btnValidation = document.getElementById('btnValidation');
        let validationMode = false;
        btnValidation?.addEventListener('click', () => {
          validationMode = !validationMode;
          btnValidation.classList.toggle('bg-neutral-900', validationMode);
          btnValidation.classList.toggle('text-white', validationMode);
          document.querySelectorAll('[data-status="warning"]').forEach(field => {
            field.classList.toggle('ring-1', validationMode);
            field.classList.toggle('ring-amber-300', validationMode);
            field.classList.toggle('rounded-md', true);
          });
        });

        // Export -> print
        document.getElementById('btnExport')?.addEventListener('click', () => window.print());

        // Footer actions
        document.getElementById('btnTop')?.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));
        document.getElementById('btnHelp')?.addEventListener('click', () => alert('Pour toute aide, contactez votre commune ou consultez le guide utilisateur.'));

        // Global progress (very simple heuristic)
        const requiredSelectors = [
          '#pf-nom', '#pf-prenom', '#pf-rue', '#pf-cp', '#pf-commune',
          '#arch-nom', '#arch-prenom', '#arch-mail',
          '#loc-rue', '#loc-cp', '#loc-commune',
          '#c3-desc'
        ];
        const bar = document.getElementById('progress-bar');
        const val = document.getElementById('progress-value');
        const computeProgress = () => {
          const fields = requiredSelectors.map(s => document.querySelector(s)).filter(Boolean);
          const filled = fields.filter(f => f.value && f.value.trim().length > 0).length;
          const pct = Math.max(7, Math.min(100, Math.round((filled / fields.length) * 100))); // floor at 7% as initial
          if (bar) bar.style.width = pct + '%';
          if (val) val.textContent = pct + '%';
        };
        requiredSelectors.forEach(s => {
          const f = document.querySelector(s);
          if (f) f.addEventListener('input', computeProgress);
        });
        computeProgress();
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

<header className="sticky top-0 z-40 border-b backdrop-blur border-neutral-200 bg-white/80">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md flex items-center justify-center text-sm font-semibold tracking-tight bg-neutral-900 text-white" style={{fontFamily: '\'Public Sans\', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>A4</div>
<div className="flex flex-col">
<h1 className="text-[20px] sm:text-[22px] leading-tight font-semibold text-neutral-900 tracking-tight" style={{fontFamily: '\'Public Sans\', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Annexe 4 — Demande de permis d’urbanisme avec concours d’un architecte</h1>
<div className="text-[13px] text-neutral-500">Wallonie territoire — SPW | Code du développement territorial, Partie réglementaire</div>
</div>
</div>
<div className="flex gap-4 items-center">
<div className="hidden sm:flex sm:flex-col sm:items-end">
<div className="text-[13px] text-neutral-500">Adresse du projet</div>
<div className="text-sm font-medium text-neutral-900" id="headerAddress">Sol Paradis n° 2A, 4190 Ferrières</div>
</div>
<div className="flex flex-col items-end">
</div>
</div>
</div>

<div className="pb-3">
<div className="flex items-center justify-between gap-4">
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<div className="text-[12px] text-neutral-500">Progression</div>
<div className="text-[12px] text-neutral-500"><span className="font-medium text-neutral-900" id="progress-value">50%</span> validé</div>
</div>
<div className="h-2 w-full rounded-full overflow-hidden bg-neutral-100">
<div className="h-2 w-0 transition-all duration-500 bg-[#649DAD]" id="progress-bar" style={{width: '50%'}}></div>
</div>
</div>
<div className="flex items-center gap-1 sm:gap-2">
<button className="group inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900 transition border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300" id="btnValidation">
<svg className="lucide lucide-filter w-4 h-4 group-hover:text-neutral-900 text-neutral-700" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
                  Mode Validation
                </button>
<button className="group inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900 transition border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300" id="btnExport">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg> Exporter
                </button>
</div>
</div>
</div>
</div>
</header>

<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
<div className="grid grid-cols-1 lg:grid-cols-[260px,1fr] gap-6">

<aside className="lg:sticky lg:top-[120px] self-start">
<div className="rounded-lg border border-neutral-200 bg-white">
<div className="px-4 py-3 border-b border-neutral-200">
<div className="text-[12px] text-neutral-500">Accès rapide</div>
</div>
<nav className="p-2">
<ul className="flex flex-wrap lg:flex-col">

<li className=""><a className="group flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="#cadre-1"><span className="">Cadre 1 — Demandeur</span><span className="text-[11px] group-hover:text-neutral-500 text-neutral-400">⚠️</span></a></li>
<li className=""><a className="group flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="#cadre-2"><span className="">Cadre 2 — Localisation / Optimisation</span><span className="text-[11px] group-hover:text-neutral-500 text-neutral-400">⚠️</span></a></li>
<li className=""><a className="group flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="#cadre-3"><span className="">Cadre 3 — Objet de la demande</span><span className="text-[11px] group-hover:text-neutral-500 text-neutral-400">⚠️</span></a></li>
<li className=""><a className="group flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="#cadre-4">Cadre 4 — Parti architectural</a></li>
<li className=""><a className="group flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="#cadre-5"><span className="">Cadre 5 — Dérogations / Écarts</span><span className="text-[11px] group-hover:text-neutral-500 text-neutral-400">⚠️</span></a></li>
<li className=""><a className="group flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="#cadre-6">Cadre 6 — Documents à joindre</a></li>
<li className=""><a className="group flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="#cadre-7">Cadre 7 — Plans à fournir</a></li>
<li className=""><a className="group flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="#cadre-8"><span className="">Cadre 8 — Données personnelles</span><span className="text-[11px] group-hover:text-neutral-500 text-neutral-400">⛔</span></a></li>
<li className=""><a className="group flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="#cadre-9"><span className="">Cadre 9 — Signatures</span><span className="text-[11px] group-hover:text-neutral-500 text-neutral-400">⛔</span></a></li>
<li className=""><a className="group flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="#annexe-grille">Annexe — Grille analytique</a></li>
</ul>
</nav>
</div>
</aside>

<section className="space-y-4">

<details className="group rounded-lg border open:shadow-sm border-neutral-200 bg-white" id="cadre-1" open="">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-3">
<div 'public="" -apple-system,="" arial,="" className="text-sm font-semibold tracking-tight style={{fontFamily: '='}}" roboto,="" sans',="" sans-serif;"="" segoe="" system-ui,="" ui,="">Cadre 1 — Demandeur</div>
<span className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium field-status-badge border-[#649DAD]/30 bg-[#649DAD]/10 text-[#649DAD]" data-status-badge="warning">
<svg className="lucide lucide-alert-triangle w-3.5 h-3.5" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg> À vérifier
      </span>
</div>
<svg className="lucide lucide-chevron-down w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>

</summary>
<div className="border-t border-neutral-200">
<div className="sm:p-6 pt-4 pr-4 pb-4 pl-4 space-y-6">

<div className="field" data-field-id="c1-demandeur" data-status="warning">
<div className="mb-2 text-[13px] text-neutral-500" style={{fontWeight: '600'}}>Type de demandeur</div>
<div className="inline-flex rounded-md border overflow-hidden border-neutral-200" data-toggle-group="demandeur-type">
<button className="seg-btn px-3 py-1.5 text-sm text-white bg-[#649DAD]" data-state="on" data-value="physique">Personne physique</button>
<button className="seg-btn px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-50" data-state="off" data-value="morale">Personne morale</button>
</div>

<div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3" data-when="demandeur-type:physique">
<div className="">
<label className="text-[13px] text-neutral-500">Nom</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" id="pf-nom"/>
</div>
<div>
<label className="text-[13px] text-neutral-500">Prénom</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" id="pf-prenom"/>
</div>
<div>
<label className="text-[13px] text-neutral-500">N° national</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" id="pf-nn"/>
</div>
<div className="sm:col-span-2">
<label className="text-[13px] text-neutral-500">Rue</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" id="pf-rue"/>
</div>
<div>
<label className="text-[13px] text-neutral-500">n° / boîte</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" id="pf-num" placeholder="n° — boîte"/>
</div>
<div className="">
<label className="text-[13px] text-neutral-500">Code postal</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" id="pf-cp"/>
</div>
<div className="">
<label className="text-[13px] text-neutral-500">Commune</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" id="pf-commune"/>
</div>
<div className="">
<label className="text-[13px] text-neutral-500">Pays</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" id="pf-pays" value="Belgique"/>
</div>
<div className="">
<label className="text-[13px] text-neutral-500">Téléphone</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" data-validate="tel" id="pf-tel" type="tel"/>
<div className="mt-1 text-[12px] text-neutral-500 hidden" id="pf-tel-help">Format attendu: +32 4xx xx xx xx ou 0x xx xx xx xx</div>
</div>
<div className="sm:col-span-2">
<label className="text-[13px] text-neutral-500">Courriel</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" data-validate="email" id="pf-mail" type="email"/>
<div className="mt-1 text-[12px] text-neutral-500 hidden" id="pf-mail-help">Exemple: nom@domaine.tld</div>
</div>
</div>

<div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 hidden" data-when="demandeur-type:morale" hidden="">
<div>
<label className="text-[13px] text-neutral-500">Dénomination sociale</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" id="pm-denom"/>
</div>
<div>
<label className="text-[13px] text-neutral-500">Forme juridique</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" id="pm-forme" placeholder="ASBL, SA, SRL..."/>
</div>
<div>
<label className="text-[13px] text-neutral-500">Numéro BCE</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" id="pm-bce"/>
</div>
<div className="sm:col-span-2">
<label className="text-[13px] text-neutral-500">Rue</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" id="pm-rue"/>
</div>
<div>
<label className="text-[13px] text-neutral-500">n° / boîte</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" id="pm-num" placeholder="n° — boîte"/>
</div>
<div>
<label className="text-[13px] text-neutral-500">Code postal</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" id="pm-cp"/>
</div>
<div>
<label className="text-[13px] text-neutral-500">Commune</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" id="pm-commune"/>
</div>
<div>
<label className="text-[13px] text-neutral-500">Pays</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" id="pm-pays" value="Belgique"/>
</div>
<div>
<label className="text-[13px] text-neutral-500">Téléphone</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" data-validate="tel" id="pm-tel" type="tel"/>
<div className="mt-1 text-[12px] text-neutral-500 hidden" id="pm-tel-help">Format attendu: +32 4xx xx xx xx ou 0x xx xx xx xx</div>
</div>
<div className="sm:col-span-2">
<label className="text-[13px] text-neutral-500">Courriel</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" data-validate="email" id="pm-mail" type="email"/>
<div className="mt-1 text-[12px] text-neutral-500 hidden" id="pm-mail-help">Exemple: nom@domaine.tld</div>
</div>
<div className="sm:col-span-3 grid grid-cols-1 sm:grid-cols-4 gap-3 pt-2 border-t border-neutral-200">
<div className="sm:col-span-4 text-[13px] text-neutral-500">Personne de contact</div>
<div>
<label className="text-[13px] text-neutral-500">Nom</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" id="pc-nom"/>
</div>
<div>
<label className="text-[13px] text-neutral-500">Prénom</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" id="pc-prenom"/>
</div>
<div>
<label className="text-[13px] text-neutral-500">Qualité</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" id="pc-qualite"/>
</div>
<div>
<label className="text-[13px] text-neutral-500">Téléphone</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" data-validate="tel" id="pc-tel" type="tel"/>
</div>
<div className="sm:col-span-4">
<label className="text-[13px] text-neutral-500">Courriel</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" data-validate="email" id="pc-mail" type="email"/>
</div>
</div>
</div>
</div>

<div className="field" data-field-id="c1-architecte" data-status="warning">
<div className="text-[13px] text-neutral-500 mb-2 font-semibold">Architecte</div>

<div className="flex items-center gap-2 mb-3">
<select className="rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-sm" onchange="fillArchitectData(this.value)">
<option value="0">Marie Dupont</option>
<option value="1">Paul Martin</option>
<option value="2">Sophie Bernard</option>
</select>
<button className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50" onclick="alert('Fonctionnalité d\'édition des coordonnées - Interface à développer')" type="button">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1"></path><path d="m20.385 6.585-2.97-2.97a2 2 0 0 0-2.83 0l-6.54 6.54a2 2 0 0 0-.58 1.41L7 15l3.41-.46a2 2 0 0 0 1.41-.58l6.54-6.54a2 2 0 0 0 0-2.83z"></path></svg>
      Éditer
    </button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="">
<label className="text-[13px] text-neutral-500">Nom</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" id="arch-nom" list="arch-contacts" value="Dupont"/>
</div>
<div className="">
<label className="text-[13px] text-neutral-500">Prénom</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" id="arch-prenom" value="Marie"/>
</div>
<div className="sm:col-span-3">
<label className="text-[13px] text-neutral-500">Dénomination sociale (si personne morale)</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" id="arch-denom" list="arch-contacts" placeholder="—" value="ArchiDesign SRL"/>
</div>
<div className="">
<label className="text-[13px] text-neutral-500">Forme juridique</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" id="arch-forme" placeholder="—" value="SRL"/>
</div>
<div>
<label className="text-[13px] text-neutral-500">Numéro BCE</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" id="arch-bce" placeholder="—" value="0765.321.987"/>
</div>
<div className="">
<label className="text-[13px] text-neutral-500">N° attestation Ordre</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" id="arch-attest" placeholder="n° d'attestation" value="2025/BE-AR/4587"/>
</div>
<div className="sm:col-span-3 text-[12px] text-neutral-600">
      Visa : « Le demandeur a reçu de son architecte l'attestation n° … par l'Ordre des Architectes qui confirme que ce dernier est bien en droit d'exercer la profession. »
    </div>
<div className="sm:col-span-2">
<label className="text-[13px] text-neutral-500">Rue</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" id="arch-rue" value="Rue des Lilas"/>
</div>
<div>
<label className="text-[13px] text-neutral-500">n° / boîte</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" id="arch-num" value="14 / bte 2"/>
</div>
<div className="">
<label className="text-[13px] text-neutral-500">Code postal</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" id="arch-cp" value="4000"/>
</div>
<div>
<label className="text-[13px] text-neutral-500">Commune</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" id="arch-commune" value="Liège"/>
</div>
<div>
<label className="text-[13px] text-neutral-500">Pays</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" id="arch-pays" type="text" value="Belgique"/>
</div>
<div className="">
<label className="text-[13px] text-neutral-500">Téléphone</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" data-validate="tel" id="arch-tel" list="arch-contacts" type="tel" value="+32 4 223 45 67"/>
</div>
<div className="sm:col-span-2">
<label className="text-[13px] text-neutral-500">Courriel</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" data-validate="email" id="arch-mail" list="arch-contacts" type="email" value="marie.dupont@archidesign.be"/>
</div>
</div>

</div>
</div>
</div>
</details>

<details className="group rounded-lg border open:shadow-sm border-neutral-200 bg-white" id="cadre-2" open="">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: '\'Public Sans\', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Cadre 2 — Localisation du projet / Optimisation spatiale</div>
<span className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium field-status-badge border-[#649DAD]/30 bg-[#649DAD]/10 text-[#649DAD]">
<svg className="lucide lucide-alert-triangle w-3.5 h-3.5" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg> À vérifier
                    </span>
</div>
<svg className="lucide lucide-chevron-down w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<div className="border-top border-neutral-200">
<div className="sm:p-6 pt-4 pr-4 pb-4 pl-4 space-y-6"><div className="sm:p-6 pt-4 pr-4 pb-4 pl-4 space-y-6"><div className="field" data-field-id="c2-localisation" data-status="warning">
<div className="text-sm font-medium mb-3 text-neutral-900">Localisation du projet</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
<div className="sm:col-span-2">
<label className="text-[13px] text-neutral-500">Rue et numéro</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" id="loc-rue" placeholder="Nom de la rue et numéro" type="text" value="Sol Paradis n° 2A"/>
</div>
<div className="">
<label className="text-[13px] text-neutral-500">Code postal</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" id="loc-cp" placeholder="Code postal" type="text" value="4190"/>
</div>
<div className="sm:col-span-2">
<label className="text-[13px] text-neutral-500">Commune</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" id="loc-commune" placeholder="Nom de la commune" type="text" value="Ferrières"/>
</div>
<div className="">
<label className="text-[13px] text-neutral-500">Province</label>
<select className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" id="loc-province">
<option value="">Sélectionner...</option>
<option value="brabant-wallon">Brabant wallon</option>
<option value="hainaut">Hainaut</option>
<option selected="" value="liege">Liège</option>
<option value="luxembourg">Luxembourg</option>
<option value="namur">Namur</option>
</select>
</div>
</div>

</div><div className="field" data-field-id="c2-artificialisation" data-status="warning">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-neutral-900">Parcelles cadastrales — Liste confirmée</div>
<button className="inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50" id="btnAddParcelle">
<svg className="lucide lucide-plus w-3.5 h-3.5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg> Ajouter une parcelle
    </button>
</div>
<div className="mt-3 rounded-lg border overflow-hidden border-neutral-200">
<div className="hidden sm:grid sm:grid-cols-[140px,120px,90px,150px,160px,160px,120px,100px] border-b text-[12px] bg-neutral-50 border-neutral-200 text-neutral-600">
<div className="px-3 py-2">Commune</div>
<div className="px-3 py-2">Division</div>
<div className="px-3 py-2">Section</div>
<div className="px-3 py-2">N° et exposant</div>
<div className="px-3 py-2">Superficie cadastrée (m²)</div>
<div className="px-3 py-2">Nature cadastrale</div>
<div className="px-3 py-2">Propriétaire</div>
<div className="pt-2 pr-3 pb-2 pl-3">Propriétaire</div>
</div>
<div className="divide-y divide-neutral-200" id="parcellesRows">
<div className="grid grid-cols-1 sm:grid-cols-[140px,120px,90px,150px,160px,160px,120px,100px] gap-2 sm:gap-0 p-3 sm:p-0 text-[12px] bg-white border-b border-neutral-200">
<div className="sm:px-3 sm:py-2">
<span className="text-neutral-500 sm:hidden">Commune: </span>Ferrières
        </div>
<div className="sm:px-3 sm:py-2">
<span className="text-neutral-500 sm:hidden">Division: </span>3
        </div>
<div className="sm:px-3 sm:py-2">
<span className="text-neutral-500 sm:hidden">Section: </span>A
        </div>
<div className="sm:px-3 sm:py-2">
<span className="text-neutral-500 sm:hidden">N° et exposant: </span>0685A002
        </div>
<div className="sm:px-3 sm:py-2">
<span className="text-neutral-500 sm:hidden">Superficie: </span>1 220
        </div>
<div className="sm:px-3 sm:py-2">
<span className="text-neutral-500 sm:hidden">Nature: </span>Constructions artificielles hors sol
        </div>
<div className="sm:px-3 sm:py-2">
<span className="text-neutral-500 sm:hidden">Propriétaire: </span>Dupont Marie
        </div>
<div className="sm:px-3 sm:py-2">
<span className="text-neutral-500 sm:hidden">À vous ?: </span>
<span className="inline-flex rounded-md border overflow-hidden border-neutral-200" data-toggle-group="proprietaire">
<button className="seg-btn px-3 py-1.5 text-sm text-white bg-[#649DAD]" data-state="on" data-value="oui">Oui</button>
<button className="seg-btn px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-50" data-state="off" data-value="non">Non</button>
</span>
</div>
</div>
</div>
<div className="text-[12px] text-neutral-600 bg-neutral-50 border-neutral-200 border-t pt-2 pr-3 pb-2 pl-3">
      Non cadastré — Superficie non cadastrée (m²)
      <input className="ml-2 w-40 rounded-md border px-2 py-1 text-[12px] border-neutral-200 bg-white" id="non-cadastré" min="0" type="number"/>
</div>
</div>
<div className="text-[12px] text-neutral-600 mt-2">
    Nature cadastrale: occupation du sol telle que documentée par l'Administration générale de la Documentation patrimoniale (SPF Finances).
  </div>
</div><div className="field" data-field-id="c2-pleine-terre" data-status="warning">
<div className="text-sm font-medium mb-2 text-neutral-900">Pleine terre (valeurs issues du calcul automatique des polygones des parcelles)</div>
<div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
<div>
<label className="text-[13px] text-neutral-500">Superficie du terrain (a)</label>
<input className="mt-1 w-full rounded-md border p-2 text-sm border-neutral-200 bg-neutral-50" id="pt-a" min="0" placeholder="m²" readonly="" type="number"/>
</div>
<div className="">
<label className="text-[13px] text-neutral-500">Pleine terre existante (x)</label>
<input className="mt-1 w-full rounded-md border p-2 text-sm border-neutral-200 bg-neutral-50" id="pt-x" min="0" placeholder="m²" readonly="" type="number"/>
</div>
<div className="">
<label className="text-[13px] text-neutral-500">Pleine terre projetée (y)</label>
<input className="mt-1 w-full rounded-md border p-2 text-sm border-neutral-200 bg-neutral-50" id="pt-y" min="0" placeholder="m²" readonly="" type="number"/>
</div>
<div className="">
<label className="text-[13px] text-neutral-500">% existant (x/a)</label>
<input className="mt-1 w-full rounded-md border p-2 text-sm border-neutral-200 bg-neutral-50" id="pt-xa" readonly="" type="text"/>
</div>
<div>
<label className="text-[13px] text-neutral-500">% projeté (y/a)</label>
<input className="mt-1 w-full rounded-md border p-2 text-sm border-neutral-200 bg-neutral-50" id="pt-ya" readonly="" type="text"/>
</div>
</div>
</div><div className="field" data-field-id="c2-imper" data-status="warning">
<div className="text-sm font-medium text-neutral-900 mb-2">Imperméabilisation</div>
<div className="grid grid-cols-1 gap-3">
<div className="grid grid-cols-1 gap-3">
<div className="overflow-x-auto">
<table className="w-full border-collapse border border-neutral-200 text-sm">
<thead className="bg-neutral-50">
<tr className="">
<th className="border border-neutral-200 px-3 py-2 text-left text-[13px] font-medium text-neutral-700">Terrain</th>
<th className="border border-neutral-200 px-3 py-2 text-left text-[13px] font-medium text-neutral-700">Surface imperméabilisée – Situation existante (m²)</th>
<th className="border border-neutral-200 px-3 py-2 text-left text-[13px] font-medium text-neutral-700">Surface imperméabilisée – Situation projetée (m²)</th>
<th className="border border-neutral-200 px-3 py-2 text-left text-[13px] font-medium text-neutral-700">Imperméabilisation (m²)</th>
</tr>
</thead>
<tbody className="">
<tr className="">
<td className="border border-neutral-200 px-3 py-2 text-[13px] text-neutral-600">Terrain</td>
<td className="border border-neutral-200 px-3 py-2">
<input className="w-full rounded-md border p-2 text-sm border-neutral-200 bg-white" id="im-x" min="0" placeholder="x" type="number"/>
</td>
<td className="border border-neutral-200 px-3 py-2">
<input className="w-full rounded-md border p-2 text-sm border-neutral-200 bg-white" id="im-y" min="0" placeholder="y" type="number"/>
</td>
<td className="border border-neutral-200 px-3 py-2">
<input className="w-full rounded-md border p-2 text-sm border-neutral-200 bg-neutral-50" id="im-diff" placeholder="y - x" readonly="" type="number"/>
</td>
</tr>
</tbody>
</table>
</div>
<div className="rounded-md border p-3 text-[12px] border-neutral-200 bg-neutral-50 text-neutral-600">
<div className="font-medium mb-2 text-neutral-700">Définitions associées :</div>
<div className="space-y-1">
<div className=""> surface dédiée à un projet d'urbanisme ou d'urbanisation (SDT).</div>
<div className=""> surface dont le sol et le sous-sol sont recouverts de manière permanente par un matériau artificiel imperméable (asphalte ou béton, par exemple) (définition adaptée du SDT).</div>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-end gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm bg-neutral-900 text-white hover:bg-neutral-800" id="btnC2Valider">
<svg className="lucide lucide-check-circle-2 w-4 h-4" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Valider le cadre
    </button>
</div>
</div></div>

<div className="field" data-field-id="c2-optim" data-status="warning">
</div>

</div>
</div>
</details>

<details className="group rounded-lg border open:shadow-sm border-neutral-200 bg-white" id="cadre-3" open="">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900">Cadre 3 — Objet de la demande</div>
<span className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium border-[#649DAD]/30 bg-[#649DAD]/10 text-[#649DAD]">
                      À compléter
                    </span>
</div>
<svg className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="sm:p-6 pt-4 pr-4 pb-4 pl-4 space-y-6">
<div className="text-[13px] text-[#649DAD] bg-[#649DAD]/10 border-[#649DAD]/30 border rounded-md pt-3 pr-3 pb-3 pl-3">
<div className="flex items-start gap-2">
<svg className="lucide lucide-info w-4 h-4 mt-0.5" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<p className="">Précisez l'objet du projet en quelques mots, puis détaillez les affectations et surfaces. Ces informations permettent d'orienter l'instruction (publicité, incidences, avis consultatifs).</p>
</div>
</div>
<div className="">
<label className="text-[13px] text-neutral-500">Description succincte du projet</label>
<div className="text-[12px] text-neutral-600 mt-1 mb-2">Décrivez l'entièreté du projet et le but des travaux : précisez l'activité accueillie, existante et/ou projetée, dans les bâtiments ou sur le terrain, les éventuelles démolitions, transformations, les nouvelles constructions ou installations, création de logements, aménagement des abords, etc.</div>
<textarea className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" id="obj-description" placeholder="Description détaillée du projet..." rows="10"></textarea>
</div>
<div className="">
<div className="text-sm font-medium text-neutral-900 mb-4">Particularités de la demande (à remplir si d'application)</div>
<div className="space-y-6">

<div className="border rounded-md border-neutral-200 p-4">
<label className="flex items-start gap-2 text-sm text-neutral-700 mb-3">
<input className="mt-0.5 rounded border-neutral-300" id="particularite-relief" type="checkbox"/>
<span>Si le projet comporte également une modification sensible du relief du sol, précisez le cubage approximatif des terres à déplacer ainsi que l'indication de la nature des terres à enlever et, le cas échéant, la nature et l'origine des terres à amener :</span>
</label>
<div className="hidden" id="relief-details">
<textarea className="w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" placeholder="Détails sur la modification du relief..." rows="3"></textarea>
</div>
</div>

<div className="border rounded-md border-neutral-200 p-4">
<label className="flex items-start gap-2 text-sm text-neutral-700 mb-3">
<input className="mt-0.5 rounded border-neutral-300" id="particularite-enseignes" type="checkbox"/>
<span>Si le projet comporte le placement d'une ou plusieurs enseignes ou dispositifs de publicité, précisez en les caractéristiques (nombre, formes et dimensions, matériaux et tonalité, spécificités (lumineuse, éclairage, lettrage ou logo, etc.) ainsi que leur localisation (au sol, sur poteau ou totem, perpendiculaire ou parallèle à la façade d'un bâtiment, apposées sur une vitrine, etc.).</span>
</label>
<div className="hidden" id="enseignes-details">
<textarea className="w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" placeholder="Caractéristiques des enseignes..." rows="3"></textarea>
</div>
</div>

<div className="border rounded-md border-neutral-200 p-4">
<label className="flex items-start gap-2 text-sm text-neutral-700 mb-3">
<input className="mt-0.5 rounded border-neutral-300" id="particularite-boisement" type="checkbox"/>
<span>Si le projet comporte des travaux de boisement, déboisement, abattage d'arbres isolés à haute tige, de haies ou allées, l'abattage ou la modification du système racinaire ou de l'aspect d'un arbre, arbuste ou haie remarquable, la modification de la végétation de toute zone dont le Gouvernement juge la protection nécessaire, présentez les actes et travaux projetés (nature de la végétation, nombre d'arbres, âge supposé), le but poursuivi par les travaux, la période envisagée des travaux ainsi que les éventuelles mesures de replantation après les travaux (essence et nombre) :</span>
</label>
<div className="hidden" id="boisement-details">
<textarea className="w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" placeholder="Détails sur les travaux de boisement/déboisement..." rows="3"></textarea>
</div>
</div>

<div className="border rounded-md border-neutral-200 p-4">
<label className="flex items-start gap-2 text-sm text-neutral-700 mb-3">
<input className="mt-0.5 rounded border-neutral-300" id="particularite-energie" type="checkbox"/>
<span>Si le projet concerne un module de production d'énergie, précisez la puissance du module :</span>
</label>
<div className="hidden" id="energie-details">
<input className="w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" placeholder="Puissance du module..." type="text"/>
</div>
</div>

<div className="border rounded-md border-neutral-200 p-4">
<label className="flex items-start gap-2 text-sm text-neutral-700 mb-3">
<input className="mt-0.5 rounded border-neutral-300" id="particularite-phasage" type="checkbox"/>
<span>Si la mise en œuvre du projet est souhaitée par phases (si vous souhaitez notamment que la date de péremption de votre permis soit alignée sur ces phases), précisez la description de ce phasage ainsi que la date ou période souhaitée pour la seconde phase et les éventuelles phases ultérieures :</span>
</label>
<div className="hidden" id="phasage-details">
<textarea className="w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" placeholder="Description du phasage..." rows="3"></textarea>
</div>
</div>

<div className="border rounded-md border-neutral-200 p-4">
<label className="flex items-start gap-2 text-sm text-neutral-700 mb-3">
<input className="mt-0.5 rounded border-neutral-300" id="particularite-regularisation" type="checkbox"/>
<span>Si le projet concerne une régularisation de travaux effectués sans permis ou non conformément au permis délivré, décrivez les actes et travaux dont la régularisation est demandée et précisez les éléments probants permettant de démontrer la date de leur réalisation.</span>
</label>
<div className="hidden" id="regularisation-details">
<textarea className="w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" placeholder="Détails sur la régularisation..." rows="3"></textarea>
</div>
</div>

<div className="border rounded-md border-neutral-200 p-4">
<label className="flex items-start gap-2 text-sm text-neutral-700 mb-3">
<input className="mt-0.5 rounded border-neutral-300" id="particularite-duree" type="checkbox"/>
<span>Si la demande vise un permis d'urbanisme à durée limitée au sens de l'article D.IV.80 du CoDT, précisez et justifiez-en la durée :</span>
</label>
<div className="hidden" id="duree-details">
<textarea className="w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" placeholder="Durée et justification..." rows="3"></textarea>
</div>
</div>

<div className="border rounded-md border-neutral-200 p-4">
<label className="flex items-start gap-2 text-sm text-neutral-700 mb-3">
<input className="mt-0.5 rounded border-neutral-300" id="particularite-modification" type="checkbox"/>
<span>Si la demande vise une modification d'un permis d'urbanisme délivré en application de l'article D.IV.96/1 du CoDT, précisez la date de délivrance et les références du permis initial dont la modification est sollicitée. Décrivez les actes et travaux en lien avec la modification projetée, la situation existante correspondant à la situation autorisée dans le permis initialement délivré :</span>
</label>
<div className="hidden" id="modification-details">
<textarea className="w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" placeholder="Références du permis initial et modifications..." rows="3"></textarea>
</div>
</div>

<div className="border rounded-md border-neutral-200 p-4">
<label className="flex items-start gap-2 text-sm text-neutral-700 mb-3">
<input className="mt-0.5 rounded border-neutral-300" id="particularite-servitudes" type="checkbox"/>
<span>Si le projet a pour effet d'éteindre ou de modifier des servitudes et autres droits : précisez en la nature (servitude de passage, de vue, etc.) et les contraintes induites par le projet :</span>
</label>
<div className="hidden" id="servitudes-details">
<textarea className="w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" placeholder="Nature des servitudes et contraintes..." rows="3"></textarea>
</div>
</div>
</div>
</div>
<div className="flex items-center justify-end gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-sm border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50" id="btnC3Valider">
<svg className="lucide lucide-check-circle-2 w-4 h-4" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Valider le cadre
    </button>
</div>

</div>
</div>
</details>

<details className="group rounded-lg border open:shadow-sm border-neutral-200 bg-white" id="cadre-4">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900">Cadre 4 — Parti architectural</div>
</div>
<svg className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="sm:p-6 pt-4 pr-4 pb-4 pl-4 space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div>
<label className="text-[13px] text-neutral-500">Insertion urbaine et volumétrie</label>
<textarea className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" placeholder="Implantation, gabarits, alignements, relations au voisinage..." rows="4"></textarea>
</div>
<div>
<label className="text-[13px] text-neutral-500">Matériaux et teintes</label>
<textarea className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" placeholder="Briques, enduits, bardages, menuiseries, toitures..." rows="4"></textarea>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<div>
<label className="text-[13px] text-neutral-500">Toiture</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" placeholder="Ex. versants tuiles, EPDM, végétalisée" type="text"/>
</div>
<div>
<label className="text-[13px] text-neutral-500">Menuiseries</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" placeholder="Ex. alu noir mat, bois..." type="text"/>
</div>
<div>
<label className="text-[13px] text-neutral-500">Performance énergétique (PEB)</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" placeholder="Niveau visé, isolation, systèmes..." type="text"/>
</div>
</div>
<div>
<label className="text-[13px] text-neutral-500">Notes complémentaires</label>
<textarea className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" rows="3"></textarea>
</div>
</div>
</div>
</details>

<details className="group rounded-lg border open:shadow-sm border-neutral-200 bg-white" id="cadre-5">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900">Cadre 5 — Dérogations / Écarts</div>
<svg className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="sm:p-6 pt-4 pr-4 pb-4 pl-4 space-y-4">
<div className="text-[13px] text-neutral-600">Indiquez les articles et prescriptions faisant l’objet d’une dérogation et motivez chaque demande.</div>
<div className="space-y-3" id="derogations">
<div className="rounded-md border border-neutral-200 p-3 bg-white">
<div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
<div className="sm:col-span-2">
<label className="text-[12px] text-neutral-500">Référence (CoDT, Règlement, Guide...) — Article</label>
<input className="mt-1 w-full rounded-md border p-2 text-sm border-neutral-200 bg-white" placeholder="Ex. CoDT art. D.IV.40, RCU art. 12"/>
</div>
<div>
<label className="text-[12px] text-neutral-500">Objet</label>
<input className="mt-1 w-full rounded-md border p-2 text-sm border-neutral-200 bg-white" placeholder="Ex. hauteur, implantation, teinte..."/>
</div>
<div>
<label className="text-[12px] text-neutral-500">Type</label>
<select className="mt-1 w-full rounded-md border p-2 text-sm border-neutral-200 bg-white">
<option>Dérogation</option>
<option>Écart</option>
</select>
</div>
<div className="sm:col-span-4">
<label className="text-[12px] text-neutral-500">Motivation</label>
<textarea className="mt-1 w-full rounded-md border p-2 text-sm border-neutral-200 bg-white" placeholder="Justifiez l’intérêt public, la qualité architecturale, les contraintes objectives..." rows="3"></textarea>
</div>
</div>
</div>
</div>
<div className="flex items-center justify-between">
<button className="inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-sm border-neutral-200 bg-white hover:bg-neutral-50" id="btnAddDerog" type="button">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14"></path></svg>
                      Ajouter une ligne
                    </button>
<div className="text-[12px] text-neutral-500">Joignez les pièces utiles en Cadre 6.</div>
</div>

</div>
</div>
</details>

<details className="group rounded-lg border open:shadow-sm border-neutral-200 bg-white" id="cadre-6">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900">Cadre 6 — Documents à joindre</div>
<svg className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="sm:p-6 pt-4 pr-4 pb-4 pl-4 space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<label className="flex items-center justify-between gap-3 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm hover:bg-neutral-50">
<span>Note explicative</span>
<input className="file:mr-3 file:rounded-md file:border file:border-neutral-200 file:bg-white file:px-3 file:py-1.5 file:text-sm file:hover:bg-neutral-50" type="file"/>
</label>
<label className="flex items-center justify-between gap-3 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm hover:bg-neutral-50">
<span>Photographies du site</span>
<input className="file:mr-3 file:rounded-md file:border file:border-neutral-200 file:bg-white file:px-3 file:py-1.5 file:text-sm file:hover:bg-neutral-50" multiple="" type="file"/>
</label>
<label className="flex items-center justify-between gap-3 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm hover:bg-neutral-50">
<span>Attestation Ordre des Architectes</span>
<input className="file:mr-3 file:rounded-md file:border file:border-neutral-200 file:bg-white file:px-3 file:py-1.5 file:text-sm file:hover:bg-neutral-50" type="file"/>
</label>
<label className="flex items-center justify-between gap-3 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm hover:bg-neutral-50">
<span>Étude d’incidences / Justification</span>
<input className="file:mr-3 file:rounded-md file:border file:border-neutral-200 file:bg-white file:px-3 file:py-1.5 file:text-sm file:hover:bg-neutral-50" type="file"/>
</label>
</div>
<div className="rounded-md border border-neutral-200 bg-neutral-50/60 p-3 flex items-center justify-between">
<div className="text-[13px] text-neutral-600">Complétude estimée</div>
<div className="w-48">
<div className="h-2 w-full rounded-full overflow-hidden bg-neutral-200">
<div className="h-2 w-0 bg-[#649DAD] transition-all duration-500" id="docs-progress" style={{width: '0%'}}></div>
</div>
<div className="mt-1 text-right text-[12px]" id="docs-progress-label">0%</div>
</div>
</div>

</div>
</div>
</details>

<details className="group rounded-lg border open:shadow-sm border-neutral-200 bg-white" id="cadre-7">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900">Cadre 7 — Plans à fournir</div>
<svg className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="sm:p-6 pt-4 pr-4 pb-4 pl-4 space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="rounded-md border border-neutral-200 p-3">
<div className="flex items-center justify-between mb-2">
<div className="text-[13px] text-neutral-500">Plan de situation</div>
<input className="file:mr-3 file:rounded-md file:border file:border-neutral-200 file:bg-white file:px-3 file:py-1.5 file:text-sm" type="file"/>
</div>
<div className="grid grid-cols-2 gap-2 text-[12px]">
<label>Echelle
                          <input className="mt-1 w-full rounded-md border p-2 text-sm border-neutral-200 bg-white" placeholder="1/5000" type="text"/>
</label>
<label>Date
                          <input className="mt-1 w-full rounded-md border p-2 text-sm border-neutral-200 bg-white" type="date"/>
</label>
</div>
</div>
<div className="rounded-md border border-neutral-200 p-3">
<div className="flex items-center justify-between mb-2">
<div className="text-[13px] text-neutral-500">Plan masse / implantation</div>
<input className="file:mr-3 file:rounded-md file:border file:border-neutral-200 file:bg-white file:px-3 file:py-1.5 file:text-sm" type="file"/>
</div>
<div className="grid grid-cols-2 gap-2 text-[12px]">
<label>Echelle
                          <input className="mt-1 w-full rounded-md border p-2 text-sm border-neutral-200 bg-white" placeholder="1/200" type="text"/>
</label>
<label>Date
                          <input className="mt-1 w-full rounded-md border p-2 text-sm border-neutral-200 bg-white" type="date"/>
</label>
</div>
</div>
<div className="rounded-md border border-neutral-200 p-3">
<div className="flex items-center justify-between mb-2">
<div className="text-[13px] text-neutral-500">Plans des niveaux</div>
<input className="file:mr-3 file:rounded-md file:border file:border-neutral-200 file:bg-white file:px-3 file:py-1.5 file:text-sm" multiple="" type="file"/>
</div>
<div className="grid grid-cols-2 gap-2 text-[12px]">
<label>Echelle
                          <input className="mt-1 w-full rounded-md border p-2 text-sm border-neutral-200 bg-white" placeholder="1/100" type="text"/>
</label>
<label>Date
                          <input className="mt-1 w-full rounded-md border p-2 text-sm border-neutral-200 bg-white" type="date"/>
</label>
</div>
</div>
<div className="rounded-md border border-neutral-200 p-3">
<div className="flex items-center justify-between mb-2">
<div className="text-[13px] text-neutral-500">Façades et coupes</div>
<input className="file:mr-3 file:rounded-md file:border file:border-neutral-200 file:bg-white file:px-3 file:py-1.5 file:text-sm" multiple="" type="file"/>
</div>
<div className="grid grid-cols-2 gap-2 text-[12px]">
<label>Echelle
                          <input className="mt-1 w-full rounded-md border p-2 text-sm border-neutral-200 bg-white" placeholder="1/100" type="text"/>
</label>
<label>Date
                          <input className="mt-1 w-full rounded-md border p-2 text-sm border-neutral-200 bg-white" type="date"/>
</label>
</div>
</div>
</div>
</div>
</div>
</details>

<details className="group rounded-lg border open:shadow-sm border-neutral-200 bg-white" id="cadre-8">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900">Cadre 8 — Données personnelles</div>
<svg className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="sm:p-6 pt-4 pr-4 pb-4 pl-4 space-y-4">
<div className="rounded-md border border-neutral-200 bg-neutral-50/60 p-3 text-[13px] text-neutral-700">
                    Les informations recueillies sont nécessaires à l’instruction de la demande. Elles sont traitées conformément au RGPD. Vous disposez de droits d’accès, de rectification et d’opposition.
                  </div>
<label className="inline-flex items-center gap-2 text-sm">
<input className="h-4 w-4 text-[#649DAD] rounded border-neutral-300" id="consent-traitement" type="checkbox"/> J’accepte le traitement de mes données pour l’instruction de la demande.
                  </label>
<label className="inline-flex items-center gap-2 text-sm">
<input className="h-4 w-4 text-[#649DAD] rounded border-neutral-300" id="consent-communication" type="checkbox"/> J’accepte d’être contacté·e par voie électronique.
                  </label>
</div>
</div>
</details>

<details className="group rounded-lg border open:shadow-sm border-neutral-200 bg-white" id="cadre-9">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900">Cadre 9 — Signatures</div>
<svg className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="sm:p-6 pt-4 pr-4 pb-4 pl-4 space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<div className="text-[13px] text-neutral-500 mb-2">Demandeur</div>
<div className="rounded-md border border-neutral-200 bg-neutral-50/60 p-3">
<canvas className="w-full h-40 bg-white rounded-md border border-neutral-200" height="320" id="sign-demandeur" width="820"></canvas>
<div className="mt-2 flex items-center justify-end gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs border-neutral-200 bg-white hover:bg-neutral-50" data-clear="sign-demandeur" type="button">Effacer</button>
<button className="inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-800" data-save="sign-demandeur" type="button">Enregistrer</button>
</div>
</div>
</div>
<div>
<div className="text-[13px] text-neutral-500 mb-2">Architecte</div>
<div className="rounded-md border border-neutral-200 bg-neutral-50/60 p-3">
<canvas className="w-full h-40 bg-white rounded-md border border-neutral-200" height="320" id="sign-archi" width="820"></canvas>
<div className="mt-2 flex items-center justify-end gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs border-neutral-200 bg-white hover:bg-neutral-50" data-clear="sign-archi" type="button">Effacer</button>
<button className="inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-800" data-save="sign-archi" type="button">Enregistrer</button>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<div>
<label className="text-[13px] text-neutral-500">Fait à</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" id="sign-lieu" type="text"/>
</div>
<div>
<label className="text-[13px] text-neutral-500">Le</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" id="sign-date" type="date"/>
</div>
<div className="flex items-end">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-md border px-3 py-2 text-sm border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-800" id="btnGeneratePdf">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7 7 10 10"></path><path d="M17 7 7 17"></path></svg>
                        Générer un PDF
                      </button>
</div>
</div>

</div>
</div>
</details>

<details className="group rounded-lg border open:shadow-sm border-neutral-200 bg-white" id="annexe-grille">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900">Annexe — Grille analytique</div>
<svg className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="sm:p-6 pt-4 pr-4 pb-4 pl-4 space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
<div>
<label className="text-[13px] text-neutral-500">Surface parcelle (m²)</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" id="ga-parcelle" min="0" type="number" value="0"/>
</div>
<div>
<label className="text-[13px] text-neutral-500">Emprise au sol (m²)</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" id="ga-emprise" min="0" type="number" value="0"/>
</div>
<div>
<label className="text-[13px] text-neutral-500">Surface brute (m²)</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" id="ga-brute" min="0" type="number" value="0"/>
</div>
<div>
<label className="text-[13px] text-neutral-500">Nombre de niveaux</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" id="ga-niveaux" min="0" type="number" value="0"/>
</div>
</div>
<div className="rounded-md border border-neutral-200 p-3 bg-neutral-50/60">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
<div>
<div className="text-[12px] text-neutral-500">Taux d’occupation du sol</div>
<div className="text-neutral-900 font-medium" id="ga-tos">—</div>
</div>
<div>
<div className="text-[12px] text-neutral-500">Densité apparente (m² SP/m²)</div>
<div className="text-neutral-900 font-medium" id="ga-densite">—</div>
</div>
<div>
<div className="text-[12px] text-neutral-500">Gabarit moyen (étages)</div>
<div className="text-neutral-900 font-medium" id="ga-gabarit">—</div>
</div>
</div>
</div>

</div>
</div>
</details>
</section>
</div>
</main>

<footer className="border-t border-neutral-200 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
<div className="text-[12px] text-neutral-500">© SPW — Wallonie territoire</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm border-neutral-200 bg-white hover:bg-neutral-50" id="btnTop">
              Haut de page
            </button>
<button className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm border-neutral-200 bg-white hover:bg-neutral-50" id="btnHelp">
              Aide
            </button>
</div>
</div>
</footer>
</div>

<datalist id="arch-contacts">
<option value="marie.dupont@archidesign.be"></option>
<option value="paul.martin@archidesign.be"></option>
<option value="sophie.bernard@archidesign.be"></option>
<option value="+32 4 223 45 67"></option>
<option value="+32 4 223 45 68"></option>
<option value="+32 4 223 45 69"></option>
</datalist>


    </>
  );
}
